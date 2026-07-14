# Design — Health-Control Web

## Visión General de la Arquitectura

Health-Control Web es una aplicación Next.js 14+ con App Router que sigue el patrón de **React Server Components (RSC)** como capa de presentación principal, complementada con Client Components sólo donde se necesita interactividad (formulario, toggle de dark mode). La persistencia se gestiona mediante **Prisma ORM + SQLite** en desarrollo local, con Server Actions de Next.js como capa de acceso a datos para el formulario de contacto.

```
┌─────────────────────────────────────────────────────────┐
│                   Browser (Cliente)                      │
│   Navbar (Client) │ DarkMode Toggle │ ContactForm (Client│
└──────────────┬───────────────────────────────────────────┘
               │ HTTP / RSC Streaming
┌──────────────▼───────────────────────────────────────────┐
│              Next.js 14 App Router (Servidor)            │
│                                                          │
│  /            → app/page.tsx          (RSC)              │
│  /servicios   → app/servicios/page.tsx (RSC)             │
│  /contacto    → app/contacto/page.tsx (RSC + Client)     │
│  /resenas     → app/resenas/page.tsx  (RSC)              │
│                                                          │
│  Server Actions → lib/actions/contact.ts                 │
└──────────────┬───────────────────────────────────────────┘
               │ Prisma Client
┌──────────────▼───────────────────────────────────────────┐
│         SQLite (dev.db)  ·  Prisma ORM                   │
│         Tabla: ContactMessage                            │
└──────────────────────────────────────────────────────────┘
```

### Decisiones de Arquitectura

| Decisión | Elección | Razón |
|---|---|---|
| Rendering | RSC por defecto, Client Components mínimos | SEO, performance, menos JS en cliente |
| Estilos | Tailwind CSS + shadcn/ui | Consistencia de diseño, dark mode nativo |
| Dark mode | next-themes con `class` strategy | Evita flash en SSR, persistencia en localStorage |
| Formulario | Server Action + useFormState/useFormStatus | Sin API route extra, UX progresiva |
| Base de datos | Prisma + SQLite | Sencillo para MVP, migración a PostgreSQL trivial |
| Routing | App Router (Next.js 14) | SEO por ruta, layouts anidados, metadata API |

---

## Estructura de Directorios

```
health-control-web/
├── app/
│   ├── layout.tsx                 # Root layout (ThemeProvider, Navbar, Footer)
│   ├── page.tsx                   # / — Landing
│   ├── servicios/
│   │   └── page.tsx               # /servicios — Catálogo
│   ├── contacto/
│   │   └── page.tsx               # /contacto — Formulario
│   └── resenas/
│       └── page.tsx               # /resenas — Testimonios
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Client Component (dark mode toggle)
│   │   └── Footer.tsx             # Server Component
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── ValueProposition.tsx
│   │   └── PainPoints.tsx
│   ├── servicios/
│   │   ├── ServiceCard.tsx
│   │   ├── ExerciseSection.tsx
│   │   └── AccessoryCard.tsx
│   ├── contacto/
│   │   └── ContactForm.tsx        # Client Component
│   ├── resenas/
│   │   └── ReviewCard.tsx
│   └── ui/                        # Re-exports de shadcn/ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── textarea.tsx
├── lib/
│   ├── actions/
│   │   └── contact.ts             # Server Action
│   ├── validations/
│   │   └── contact.ts             # Zod schema para ContactMessage
│   ├── data/
│   │   ├── services.ts            # Datos placeholder de servicios
│   │   ├── exercises.ts           # Datos placeholder de ejercicios
│   │   ├── accessories.ts         # Datos placeholder de accesorios
│   │   └── reviews.ts             # Datos placeholder de reseñas
│   ├── db.ts                      # Singleton Prisma Client
│   └── types.ts                   # Tipos compartidos (GooglePlaceReview, etc.)
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
│   └── images/                    # Assets estáticos
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Componentes

### Layout Global

#### `app/layout.tsx` — Root Layout
```tsx
// Server Component
// Provee: ThemeProvider (next-themes), Navbar, Footer
// Configura: fuentes, metadatos base, clase html para dark mode

export const metadata: Metadata = {
  metadataBase: new URL('https://health-control.es'),
  title: { default: 'Health-Control', template: '%s | Health-Control' },
  description: 'Especialistas en osteo-presura para aliviar dolores físicos.',
}
```

#### `components/layout/Navbar.tsx` — Client Component
```tsx
'use client'
// Estado: useTheme() de next-themes
// Renderiza: logo, enlaces de navegación, DarkModeToggle
// Props: ninguna (lee rutas desde constante ROUTES)
```

#### `components/layout/Footer.tsx` — Server Component
```tsx
// Renderiza: nombre marca, teléfono, email, enlaces a redes
// Sin estado ni interactividad
```

### Página Landing (`/`)

#### `components/home/HeroSection.tsx`
```tsx
// Props: ninguna (contenido hardcoded/placeholder)
// Renderiza: heading H1 con nombre marca, tagline, descripción osteo-presura, <Link> CTA → /contacto
// Puede incluir imagen de fondo con next/image
```

#### `components/home/ValueProposition.tsx`
```tsx
interface Benefit {
  icon: string       // nombre de ícono Lucide
  title: string
  description: string
}
// Props: benefits: Benefit[]  (mínimo 3 items)
// Renderiza: grid de tarjetas de beneficio
```

#### `components/home/PainPoints.tsx`
```tsx
interface PainPoint {
  label: string      // e.g. "Dolor de espalda"
  description: string
}
// Props: painPoints: PainPoint[]
// Renderiza: grid de cards con ícono + label + descripción
```

### Página Servicios (`/servicios`)

#### `components/servicios/ServiceCard.tsx`
```tsx
interface ServiceItem {
  id: string
  name: string
  shortDescription: string
  icon: string       // nombre Lucide
  available: boolean // false → badge "Próximamente"
}
// Props: service: ServiceItem
// Renderiza: Card con nombre, descripción, ícono, badge disponibilidad
```

#### `components/servicios/ExerciseSection.tsx`
```tsx
interface Exercise {
  title: string
  steps: string[]
  duration: string   // e.g. "10 minutos"
}
// Props: exercises: Exercise[]
// Renderiza: acordeón de ejercicios con pasos
```

#### `components/servicios/AccessoryCard.tsx`
```tsx
interface Accessory {
  id: string
  name: string
  description: string
  priceLabel: string  // e.g. "Consultar precio"
  imagePlaceholder: string
}
// Props: accessory: Accessory
// Renderiza: Card de producto con imagen placeholder, nombre, precio
```

### Página Contacto (`/contacto`)

#### `components/contacto/ContactForm.tsx` — Client Component
```tsx
'use client'
// Estado local: useFormState, useFormStatus
// Campos: nombre (text), email (email), telefono (tel), tipoDolor (select), mensaje (textarea)
// Llama: contactAction (Server Action) on submit
// Renderiza: estado pending con shadcn Spinner, mensaje success/error
```

### Página Reseñas (`/resenas`)

#### `components/resenas/ReviewCard.tsx`
```tsx
interface Review {
  id: string
  authorName: string
  text: string
  rating: number      // 1-5
  avatarUrl?: string  // opcional; placeholder si ausente
  source?: 'google' | 'manual'
  date?: string
}
// Props: review: Review
// Renderiza: avatar (next/image o iniciales), nombre, texto, estrellas SVG, fecha opcional
```

---

## Modelos de Datos

### Prisma Schema

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model ContactMessage {
  id         Int      @id @default(autoincrement())
  nombre     String
  email      String
  telefono   String?
  tipoDolor  String
  mensaje    String
  creadoEn   DateTime @default(now())

  @@map("contact_messages")
}
```

### Tipos TypeScript Compartidos (`lib/types.ts`)

```typescript
// Tipo compatible con Google Places Details API (futuro)
export interface GooglePlaceReview {
  author_name: string
  rating: number
  text: string
  profile_photo_url?: string
  relative_time_description?: string
}

// Tipo interno de reseña (unifica placeholder + Google Places)
export interface Review {
  id: string
  authorName: string
  text: string
  rating: number           // 1-5
  avatarUrl?: string
  source: 'google' | 'manual'
  date?: string
}

// Adaptador Google → Review interno
export function adaptGoogleReview(gr: GooglePlaceReview, index: number): Review {
  return {
    id: `google-${index}`,
    authorName: gr.author_name,
    text: gr.text,
    rating: gr.rating,
    avatarUrl: gr.profile_photo_url,
    source: 'google',
    date: gr.relative_time_description,
  }
}
```

### Schema de Validación Zod (`lib/validations/contact.ts`)

```typescript
import { z } from 'zod'

export const contactSchema = z.object({
  nombre:    z.string().min(1, 'El nombre es obligatorio').max(100),
  email:     z.string().email('Email no válido'),
  telefono:  z.string().optional(),
  tipoDolor: z.string().min(1, 'Selecciona un tipo de dolor o servicio'),
  mensaje:   z.string().min(1, 'El mensaje es obligatorio').max(2000),
})

export type ContactFormData = z.infer<typeof contactSchema>
```

---

## Interfaces y Server Actions

### Server Action — `lib/actions/contact.ts`

```typescript
'use server'
import { contactSchema } from '@/lib/validations/contact'
import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export type ContactActionState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function contactAction(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const raw = Object.fromEntries(formData)
  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    return {
      success: false,
      message: 'Por favor, revisa los campos del formulario.',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  try {
    await prisma.contactMessage.create({ data: parsed.data })
    revalidatePath('/contacto')
    return { success: true, message: '¡Mensaje enviado! Te contactaremos pronto.' }
  } catch {
    return { success: false, message: 'Error al enviar el mensaje. Inténtalo de nuevo.' }
  }
}
```

### Singleton Prisma Client — `lib/db.ts`

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ log: ['query'] })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

---

## SEO — Metadata API de Next.js

Cada `page.tsx` exporta un objeto `metadata` estático:

```typescript
// app/servicios/page.tsx
export const metadata: Metadata = {
  title: 'Servicios y Ejercicios',
  description: 'Catálogo de tratamientos osteo-presura, ejercicios adaptados y accesorios para casa.',
  openGraph: {
    title: 'Servicios y Ejercicios | Health-Control',
    description: '...',
    url: 'https://health-control.es/servicios',
  },
}
```

Patrón idéntico para `/contacto` y `/resenas` con textos específicos de cada ruta.

---

## Dark Mode — next-themes

```typescript
// app/layout.tsx
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
```

```typescript
// components/layout/Navbar.tsx — fragmento del toggle
'use client'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}
```

Tailwind configurado con `darkMode: 'class'` en `tailwind.config.ts`.

---

## Manejo de Errores

| Escenario | Manejo |
|---|---|
| Campos vacíos en formulario | Zod retorna `fieldErrors`; el Client Component muestra mensajes inline bajo cada campo |
| Email inválido | Zod `z.string().email()` rechaza y devuelve mensaje localizado |
| Fallo en escritura SQLite | `try/catch` en Server Action devuelve `success: false` con mensaje genérico |
| Página no encontrada | `app/not-found.tsx` con enlace a inicio |
| Error de hidratación | `suppressHydrationWarning` en `<html>` para evitar mismatch por dark mode |
| Prisma no conecta | El singleton lanza excepción capturada por el error boundary de Next.js |

---

## Configuración de Dependencias

```json
{
  "dependencies": {
    "next": "14.2.x",
    "react": "18.3.x",
    "react-dom": "18.3.x",
    "typescript": "5.4.x",
    "@prisma/client": "5.14.x",
    "next-themes": "0.3.x",
    "zod": "3.23.x",
    "lucide-react": "0.383.x",
    "clsx": "2.1.x",
    "tailwind-merge": "2.3.x"
  },
  "devDependencies": {
    "prisma": "5.14.x",
    "tailwindcss": "3.4.x",
    "autoprefixer": "10.4.x",
    "postcss": "8.4.x",
    "@types/react": "18.3.x",
    "@types/node": "20.x"
  }
}
```

---

## Correctness Properties

*Una propiedad es una característica o comportamiento que debe mantenerse verdadera en todas las ejecuciones válidas del sistema — esencialmente, un enunciado formal sobre lo que el sistema debe hacer. Las propiedades actúan como puente entre las especificaciones legibles por humanos y las garantías de corrección verificables automáticamente.*

### Property 1: Landing muestra al menos tres beneficios

*Para cualquier* configuración del componente `ValueProposition`, el número de elementos de beneficio renderizados debe ser mayor o igual a tres.

**Validates: Requirements 1.3**

---

### Property 2: Tarjeta de servicio contiene campos obligatorios

*Para cualquier* `ServiceItem` del catálogo de servicios, su componente `ServiceCard` renderizado debe contener el nombre del servicio, la descripción corta y un ícono identificativo, todos con contenido no vacío.

**Validates: Requirements 2.2**

---

### Property 3: Tarjeta de accesorio contiene campos obligatorios

*Para cualquier* `Accessory` del catálogo, su componente `AccessoryCard` renderizado debe contener el nombre, la descripción y la etiqueta de precio, todos con contenido no vacío.

**Validates: Requirements 2.4**

---

### Property 4: Validación rechaza campos obligatorios vacíos

*Para cualquier* objeto de datos de formulario donde al menos uno de los campos `nombre`, `email` o `mensaje` sea una cadena vacía o compuesta sólo de espacios en blanco, la función `contactSchema.safeParse` debe retornar `success: false` con `fieldErrors` correspondientes.

**Validates: Requirements 3.2**

---

### Property 5: Validación de formato de email

*Para cualquier* cadena de texto que no cumpla el formato de email válido (RFC 5321), la función `contactSchema.safeParse` debe retornar `success: false`. *Para cualquier* cadena que sí sea un email válido, debe retornar `success: true` en el campo email.

**Validates: Requirements 3.3**

---

### Property 6: Persistencia de ContactMessage — round trip

*Para cualquier* `ContactMessage` válido (que supera la validación de Zod), después de persistirlo mediante `prisma.contactMessage.create`, consultarlo por su `id` generado debe devolver un objeto con exactamente los mismos valores de `nombre`, `email`, `telefono`, `tipoDolor` y `mensaje`, más un campo `creadoEn` no nulo.

**Validates: Requirements 3.4, 6.2**

---

### Property 7: Reseña renderiza todos los campos requeridos

*Para cualquier* objeto `Review` con `authorName` no vacío, `text` no vacío y `rating` entre 1 y 5 (inclusive), el componente `ReviewCard` renderizado debe contener el nombre del autor, el texto de la reseña y exactamente `rating` estrellas rellenas.

**Validates: Requirements 4.1, 4.2**

---

### Property 8: Toggle de dark mode es idempotente y reversible

*Para cualquier* estado inicial de tema (`'light'` o `'dark'`), activar el toggle debe cambiar al tema opuesto. Activar el toggle dos veces consecutivas debe devolver el tema al estado inicial (propiedad de round-trip).

**Validates: Requirements 5.2**
