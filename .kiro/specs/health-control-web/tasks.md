# Implementation Plan: Health-Control Web

## Overview

Implementación completa de la aplicación web Health-Control con Next.js 14+ App Router, TypeScript, Tailwind CSS, shadcn/ui, Prisma ORM + SQLite y next-themes. El proyecto se construye desde cero siguiendo el patrón RSC-first con Client Components mínimos. Las tareas se ordenan de forma incremental: infraestructura → layout → páginas → formulario → tests de propiedades.

## Tasks

- [x] 1. Inicializar proyecto y configurar infraestructura base
  - [x] 1.1 Crear proyecto Next.js 14 con TypeScript y Tailwind CSS
    - Ejecutar `npx create-next-app@14 health-control-web --typescript --tailwind --eslint --app --src-dir=no --import-alias=@/*`
    - Verificar que `tailwind.config.ts` existe y añadir `darkMode: 'class'` al objeto de configuración
    - Añadir fuente Inter con `next/font/google` en `app/layout.tsx`
    - _Requirements: 7.3_

  - [x] 1.2 Instalar y configurar shadcn/ui
    - Ejecutar `npx shadcn-ui@latest init` con opciones: style=default, base color=neutral, CSS variables=yes
    - Añadir componentes: `npx shadcn-ui@latest add button card input select textarea`
    - Verificar que `components/ui/` contiene los cinco archivos generados
    - _Requirements: 7.3_

  - [x] 1.3 Instalar dependencias de producción y desarrollo
    - Instalar: `next-themes@0.3.x`, `zod@3.23.x`, `lucide-react@0.383.x`, `clsx@2.1.x`, `tailwind-merge@2.3.x`, `@prisma/client@5.14.x`
    - Instalar dev: `prisma@5.14.x`
    - Instalar para tests: `fast-check`, `vitest`, `@vitejs/plugin-react`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`
    - _Requirements: 7.3_

  - [x] 1.4 Configurar Prisma ORM + SQLite
    - Ejecutar `npx prisma init --datasource-provider sqlite`
    - Crear el modelo `ContactMessage` en `prisma/schema.prisma` según el diseño (campos: id, nombre, email, telefono, tipoDolor, mensaje, creadoEn)
    - Añadir `DATABASE_URL="file:./dev.db"` en `.env`
    - Ejecutar `npx prisma migrate dev --name init` para crear la migración inicial y la base de datos
    - Crear el singleton Prisma Client en `lib/db.ts`
    - _Requirements: 6.1, 6.3, 6.4, 6.5_

  - [x] 1.5 Configurar Vitest con jsdom para tests de componentes y lógica
    - Crear `vitest.config.ts` con `environment: 'jsdom'`, plugin React y alias `@/*`
    - Crear `vitest.setup.ts` con import de `@testing-library/jest-dom`
    - Verificar que `npx vitest run` se ejecuta sin errores (sin tests aún)
    - _Requirements: (infraestructura de testing)_

- [x] 2. Tipos compartidos, validaciones y datos placeholder
  - [x] 2.1 Crear tipos compartidos en `lib/types.ts`
    - Definir las interfaces `GooglePlaceReview`, `Review` y la función `adaptGoogleReview` según el diseño
    - Definir la interfaz `ServiceItem`, `Exercise`, `Accessory` referenciados en los componentes
    - _Requirements: 4.4_

  - [x] 2.2 Crear schema de validación Zod en `lib/validations/contact.ts`
    - Implementar `contactSchema` con los campos: `nombre` (min 1, max 100), `email` (email), `telefono` (optional), `tipoDolor` (min 1), `mensaje` (min 1, max 2000)
    - Exportar el tipo `ContactFormData`
    - _Requirements: 3.2, 3.3, 3.4_

  - [x] 2.3 Escribir property test — Propiedad 4: validación rechaza campos obligatorios vacíos
    - **Property 4: Validación rechaza campos obligatorios vacíos**
    - Usar `fast-check` para generar objetos donde `nombre`, `email` o `mensaje` sean cadena vacía o sólo espacios; afirmar que `contactSchema.safeParse` retorna `success: false` con `fieldErrors`
    - **Validates: Requirements 3.2**

  - [x] 2.4 Escribir property test — Propiedad 5: validación de formato de email
    - **Property 5: Validación de formato de email**
    - Usar `fast-check` con `fc.emailAddress()` para valores válidos (assert `success: true`) y con `fc.string()` filtrado para valores inválidos (assert `success: false`)
    - **Validates: Requirements 3.3**

- [x] 3. Checkpoint — Validaciones y tipos
  - Ejecutar `npx vitest run` y verificar que los property tests de validación pasan.
  - Confirmar que `npx tsc --noEmit` no arroja errores de tipos.

- [x] 4. Datos placeholder y Server Action de contacto
  - [x] 4.1 Crear archivos de datos placeholder
    - Crear `lib/data/services.ts` con mínimo tres `ServiceItem` (uno con `available: false`)
    - Crear `lib/data/exercises.ts` con mínimo dos `Exercise`
    - Crear `lib/data/accessories.ts` con mínimo dos `Accessory`
    - Crear `lib/data/reviews.ts` con mínimo tres `Review` placeholder
    - _Requirements: 2.1, 2.3, 2.4, 4.1_

  - [x] 4.2 Implementar Server Action `lib/actions/contact.ts`
    - Marcar el archivo con `'use server'`
    - Definir y exportar `ContactActionState` (success, message, errors opcionales)
    - Implementar `contactAction(_prevState, formData)`: parsear FormData, validar con `contactSchema.safeParse`, persistir con `prisma.contactMessage.create`, invocar `revalidatePath('/contacto')`, devolver estado de éxito o error
    - _Requirements: 3.5, 3.6, 3.7_

  - [x] 4.3 Escribir property test — Propiedad 6: persistencia round-trip de ContactMessage
    - **Property 6: Persistencia de ContactMessage — round trip**
    - Usar `fast-check` para generar `ContactFormData` válidos; persistir en SQLite de test, recuperar por `id` y afirmar que todos los campos coinciden y `creadoEn` es no nulo
    - Usar base de datos SQLite en memoria o fichero temporal; limpiar tras cada run
    - **Validates: Requirements 3.4, 6.2**

- [ ] 5. Layout global: Root Layout, Navbar y Footer
  - [x] 5.1 Crear `app/layout.tsx` con ThemeProvider y estructura base
    - Importar `ThemeProvider` de `next-themes`; envolver `<body>` con `<ThemeProvider attribute="class" defaultTheme="system" enableSystem>`
    - Añadir `suppressHydrationWarning` en `<html lang="es">`
    - Exportar `metadata` base con `metadataBase`, `title.template` y `description`
    - Incluir `<Navbar />` y `<Footer />` dentro del ThemeProvider
    - _Requirements: 5.3, 5.4, 5.5, 5.7_

  - [x] 5.2 Implementar `components/layout/Navbar.tsx` como Client Component
    - Marcar con `'use client'`
    - Usar `useTheme()` de `next-themes` para leer y cambiar el tema
    - Renderizar logo/nombre de marca, enlaces `<Link>` a `/`, `/servicios`, `/contacto`, `/resenas`
    - Implementar `DarkModeToggle` con íconos `Sun`/`Moon` de `lucide-react`
    - _Requirements: 5.1, 5.2_

  - [x] 5.3 Implementar `components/layout/Footer.tsx` como Server Component
    - Renderizar nombre de marca, teléfono placeholder, email placeholder y enlaces a redes sociales
    - Sin directiva `'use client'`
    - _Requirements: 5.6_

  - [ ] 5.4 Escribir property test — Propiedad 8: DarkModeToggle es idempotente y reversible
    - **Property 8: Toggle de dark mode es idempotente y reversible**
    - Usar `fast-check` con `fc.constantFrom('light', 'dark')` como estado inicial; simular dos activaciones del toggle y afirmar que el tema regresa al estado inicial
    - **Validates: Requirements 5.2**

- [x] 6. Checkpoint — Layout base
  - Ejecutar `npx tsc --noEmit` para verificar que Navbar, Footer y layout compilan sin errores.
  - Ejecutar `npx vitest run` para confirmar que todos los tests pasan hasta este punto.

- [x] 7. Página de inicio (`/`)
  - [x] 7.1 Implementar `components/home/HeroSection.tsx`
    - Server Component (sin `'use client'`)
    - Renderizar: `<h1>` con nombre de marca, tagline descriptivo, descripción de osteo-presura (≤ 3 oraciones), `<Link href="/contacto">` como CTA
    - Opcionalmente incluir `<Image>` de `next/image` con `alt`, `width` y `height`
    - _Requirements: 1.1, 1.2, 7.2_

  - [x] 7.2 Implementar `components/home/ValueProposition.tsx`
    - Props: `benefits: Benefit[]` donde `Benefit = { icon: string; title: string; description: string }`
    - Renderizar grid de mínimo tres tarjetas, cada una con ícono `lucide-react`, título y descripción
    - _Requirements: 1.3_

  - [x] 7.3 Escribir property test — Propiedad 1: Landing muestra al menos tres beneficios
    - **Property 1: Landing muestra al menos tres beneficios**
    - Usar `fast-check` para generar arrays de `Benefit` con longitud ≥ 3; renderizar `ValueProposition` con `@testing-library/react` y afirmar que el número de tarjetas renderizadas es ≥ 3
    - **Validates: Requirements 1.3**

  - [x] 7.4 Implementar `components/home/PainPoints.tsx`
    - Props: `painPoints: PainPoint[]` donde `PainPoint = { label: string; description: string }`
    - Renderizar grid de mínimo cuatro tarjetas con ícono, etiqueta y descripción
    - _Requirements: 1.4_

  - [x] 7.5 Crear `app/page.tsx` con metadata SEO y composición de secciones
    - Exportar `metadata: Metadata` con title, description y openGraph para la ruta `/`
    - Importar y componer `HeroSection`, `ValueProposition` (con datos de beneficios hardcoded) y `PainPoints` (con datos de condiciones hardcoded)
    - Todos los componentes deben ser RSC (sin JS al cliente)
    - _Requirements: 1.5, 1.6_

- [ ] 8. Página de servicios (`/servicios`)
  - [ ] 8.1 Implementar `components/servicios/ServiceCard.tsx`
    - Props: `service: ServiceItem`
    - Renderizar `Card` de shadcn con nombre, descripción corta, ícono `lucide-react` y badge "Próximamente" condicional cuando `available === false`
    - _Requirements: 2.2_

  - [ ] 8.2 Escribir property test — Propiedad 2: ServiceCard contiene campos obligatorios
    - **Property 2: Tarjeta de servicio contiene campos obligatorios**
    - Usar `fast-check` para generar `ServiceItem` con `name`, `shortDescription` e `icon` no vacíos; renderizar `ServiceCard` y afirmar que los tres campos aparecen en el DOM
    - **Validates: Requirements 2.2**

  - [ ] 8.3 Implementar `components/servicios/AccessoryCard.tsx`
    - Props: `accessory: Accessory`
    - Renderizar `Card` de shadcn con imagen placeholder (`next/image` con `alt`, `width`, `height`), nombre, descripción y etiqueta de precio
    - _Requirements: 2.4, 2.5_

  - [ ] 8.4 Escribir property test — Propiedad 3: AccessoryCard contiene campos obligatorios
    - **Property 3: Tarjeta de accesorio contiene campos obligatorios**
    - Usar `fast-check` para generar `Accessory` con `name`, `description` y `priceLabel` no vacíos; renderizar `AccessoryCard` y afirmar que los tres campos aparecen en el DOM
    - **Validates: Requirements 2.4, 2.5**

  - [ ] 8.5 Implementar `components/servicios/ExerciseSection.tsx`
    - Props: `exercises: Exercise[]`
    - Renderizar acordeón (usando componentes shadcn `Accordion` o `details`/`summary` nativo) con título, lista ordenada de pasos y duración
    - _Requirements: 2.3_

  - [ ] 8.6 Crear `app/servicios/page.tsx` con metadata SEO y composición
    - Exportar `metadata: Metadata` con title, description y openGraph para `/servicios`
    - Importar datos de `lib/data/services.ts`, `lib/data/exercises.ts`, `lib/data/accessories.ts`
    - Componer `ServiceCard` (≥ 3 items), `ExerciseSection` (≥ 2 items), `AccessoryCard` (≥ 2 items)
    - _Requirements: 2.1, 2.6_

- [ ] 9. Formulario de contacto (`/contacto`)
  - [ ] 9.1 Implementar `components/contacto/ContactForm.tsx` como Client Component
    - Marcar con `'use client'`
    - Usar `useFormState(contactAction, initialState)` y `useFormStatus` de `react-dom`
    - Renderizar campos: `nombre` (`Input`), `email` (`Input`), `telefono` (`Input` opcional), `tipoDolor` (`Select` con opciones predefinidas), `mensaje` (`Textarea`)
    - Mostrar mensajes de error inline bajo cada campo con error procedentes de `state.errors`
    - Mostrar mensaje de éxito/error general procedente de `state.message`
    - Deshabilitar el botón de envío y mostrar indicador de carga durante el estado pending
    - _Requirements: 3.1, 3.6, 3.7, 3.8, 3.9_

  - [ ] 9.2 Crear `app/contacto/page.tsx` con metadata SEO
    - Exportar `metadata: Metadata` con title, description y openGraph para `/contacto`
    - Importar y renderizar `ContactForm`
    - _Requirements: 3.10_

- [ ] 10. Página de reseñas (`/resenas`)
  - [ ] 10.1 Implementar `components/resenas/ReviewCard.tsx`
    - Props: `review: Review`
    - Renderizar avatar: si `avatarUrl` presente usar `next/image`, si ausente mostrar iniciales del `authorName`
    - Renderizar nombre del autor, texto de reseña y `rating` estrellas SVG rellenas de un total de cinco
    - _Requirements: 4.2, 4.3_

  - [ ] 10.2 Escribir property test — Propiedad 7: ReviewCard renderiza todos los campos requeridos
    - **Property 7: Reseña renderiza todos los campos requeridos**
    - Usar `fast-check` para generar `Review` con `authorName` no vacío, `text` no vacío y `rating` en `[1, 5]`; renderizar `ReviewCard` y afirmar que el autor, el texto y exactamente `rating` estrellas rellenas aparecen en el DOM
    - **Validates: Requirements 4.1, 4.2**

  - [ ] 10.3 Crear `app/resenas/page.tsx` con metadata SEO y composición
    - Exportar `metadata: Metadata` con title, description y openGraph para `/resenas`
    - Importar datos de `lib/data/reviews.ts` y mapear con `ReviewCard` (≥ 3 cards)
    - Importar y utilizar `adaptGoogleReview` para demostrar el adaptador (aunque la fuente sea placeholder)
    - _Requirements: 4.1, 4.4, 4.5_

- [ ] 11. Checkpoint — Páginas y formulario
  - Ejecutar `npx tsc --noEmit` y confirmar compilación sin errores de TypeScript.
  - Ejecutar `npx vitest run` y verificar que todos los property tests pasan.

- [ ] 12. Página 404 y manejo de errores
  - [ ] 12.1 Crear `app/not-found.tsx`
    - Renderizar mensaje de página no encontrada con enlace `<Link href="/">` de vuelta al inicio
    - _Requirements: 7.4_

  - [ ] 12.2 Crear `app/error.tsx` como Client Component de error boundary
    - Marcar con `'use client'`
    - Renderizar mensaje de error genérico sin exponer detalles técnicos (sin stack trace, sin mensajes de Prisma)
    - _Requirements: 7.5_

- [ ] 13. SEO — revisión y completado de metadata
  - [ ] 13.1 Verificar y completar metadata OpenGraph en todas las rutas
    - Revisar que `app/page.tsx`, `app/servicios/page.tsx`, `app/contacto/page.tsx` y `app/resenas/page.tsx` exportan `metadata` con `title`, `description`, `openGraph.title`, `openGraph.description` y `openGraph.url` no vacíos
    - Verificar que el template `%s | Health-Control` en `app/layout.tsx` se aplica correctamente
    - _Requirements: 1.5, 2.6, 3.10, 4.5_

- [ ] 14. Checkpoint final — build de producción
  - Ejecutar `npx vitest run` y confirmar que todos los tests pasan (incluyendo los 8 property tests).
  - Ejecutar `npx tsc --noEmit` para confirmar ausencia de errores de TypeScript.
  - Ejecutar `next build` y verificar que la compilación completa sin errores de lint ni de TypeScript.

## Notes

- Las sub-tareas marcadas con `*` son opcionales: representan property tests que se pueden omitir para un MVP más rápido, pero se recomienda ejecutarlos para validar las 8 propiedades de corrección del diseño.
- Cada tarea referencia los requisitos específicos para trazabilidad completa.
- Los checkpoints en las tareas 3, 6, 11 y 14 aseguran validación incremental.
- Los property tests usan `fast-check` con `@testing-library/react` para propiedades de componentes y `fast-check` puro para propiedades de lógica (validación Zod, persistencia).
- La Property 6 (round-trip de persistencia) requiere una base de datos SQLite de test; se recomienda usar un fichero `.db` temporal en `tmp/` y limpiarlo en `afterEach`/`afterAll`.
- El orden de las tareas respeta las dependencias: los tipos (`lib/types.ts`) deben existir antes de los componentes que los consumen; la Server Action debe existir antes del formulario cliente.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3"] },
    { "id": 2, "tasks": ["1.4", "1.5"] },
    { "id": 3, "tasks": ["2.1"] },
    { "id": 4, "tasks": ["2.2"] },
    { "id": 5, "tasks": ["2.3", "2.4", "4.1"] },
    { "id": 6, "tasks": ["4.2", "5.1"] },
    { "id": 7, "tasks": ["4.3", "5.2", "5.3"] },
    { "id": 8, "tasks": ["5.4", "7.1", "7.2", "7.4", "8.1", "8.3", "8.5", "10.1"] },
    { "id": 9, "tasks": ["7.3", "7.5", "8.2", "8.4", "8.6", "9.1", "10.2", "10.3"] },
    { "id": 10, "tasks": ["9.2", "12.1", "12.2"] },
    { "id": 11, "tasks": ["13.1"] }
  ]
}
```
