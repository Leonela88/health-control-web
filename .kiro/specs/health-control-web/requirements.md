# Requirements Document

## Introduction

Health-Control Web es una aplicación web multi-página construida con Next.js 14+ (App Router, TypeScript) que presenta la marca de servicios de salud y bienestar especializada en osteo-presura. La aplicación ofrece información sobre tratamientos, ejercicios adaptados y accesorios para uso en casa, un formulario de contacto funcional con persistencia en base de datos, y una sección de reseñas preparada para integración futura con Google Places Details API.

La arquitectura sigue el patrón React Server Components (RSC) como capa de presentación principal, con Client Components limitados a los elementos interactivos: formulario de contacto, toggle de dark mode y navegación. La persistencia se gestiona mediante Prisma ORM + SQLite con Server Actions de Next.js como capa de acceso a datos.

---

## Glossary

- **Health-Control Web**: La aplicación web descrita en este documento.
- **App Router**: El sistema de enrutamiento de Next.js 14 basado en el directorio `app/`.
- **RSC (React Server Component)**: Componente de React que se renderiza exclusivamente en el servidor, sin JavaScript enviado al cliente.
- **Client Component**: Componente de React marcado con `'use client'` que incluye interactividad en el navegador.
- **Server Action**: Función asíncrona de servidor de Next.js invocada desde el cliente sin necesidad de una API route explícita.
- **ContactMessage**: Entidad de base de datos que almacena los datos de un envío del formulario de contacto.
- **ContactForm**: El Client Component que renderiza y gestiona el formulario de contacto en `/contacto`.
- **ContactAction**: El Server Action que procesa y persiste los datos del formulario de contacto.
- **ContactSchema**: El esquema de validación Zod que verifica los datos del formulario antes de persistirlos.
- **Navbar**: El componente de navegación global presente en todas las páginas.
- **ThemeProvider**: El componente de next-themes que gestiona el estado de tema claro/oscuro.
- **DarkModeToggle**: El elemento interactivo dentro de la Navbar que alterna entre tema claro y oscuro.
- **ReviewCard**: El componente que renderiza un testimonio individual de paciente.
- **ServiceCard**: El componente que renderiza una tarjeta de servicio/tratamiento en el catálogo.
- **AccessoryCard**: El componente que renderiza una tarjeta de accesorio en el catálogo.
- **Prisma ORM**: La librería de acceso a base de datos utilizada para gestionar ContactMessage en SQLite.
- **SQLite**: La base de datos relacional utilizada en el entorno de desarrollo local.
- **Google Places Details API**: La API externa de Google Maps para obtener reseñas de pacientes (integración futura).
- **SEO Metadata**: Las metaetiquetas HTML (`title`, `description`, Open Graph) generadas por la Metadata API de Next.js.
- **tipoDolor**: El campo selector del formulario de contacto que identifica el tipo de dolor o servicio de interés.

---

## Requirements

### Requirement 1: Página de Inicio (Landing)

**User Story:** Como visitante, quiero ver una presentación clara de la marca Health-Control para entender qué es la osteo-presura y cómo puede aliviar mis dolores físicos, de modo que pueda decidir si el servicio se adapta a mis necesidades.

#### Acceptance Criteria

1. WHEN un visitante accede a la ruta `/`, THE Health-Control Web SHALL renderizar un hero section que contenga el nombre de la marca, un tagline descriptivo y un enlace de llamada a la acción que dirija a `/contacto`.
2. WHEN el hero section se renderiza, THE Health-Control Web SHALL incluir una descripción de la especialidad osteo-presura en no más de tres oraciones.
3. WHEN la página de inicio se carga, THE Health-Control Web SHALL renderizar una sección de propuesta de valor con un mínimo de tres tarjetas de beneficio, cada una con un título, una descripción y un ícono identificativo.
4. WHEN la página de inicio se carga, THE Health-Control Web SHALL renderizar una sección de tipos de dolor tratados compuesta por un mínimo de cuatro tarjetas, cada una con una etiqueta de condición y una descripción breve.
5. WHEN la página de inicio se renderiza en el servidor, THE Health-Control Web SHALL incluir metaetiquetas SEO (`title`, `description`, `og:title`, `og:description`, `og:url`) específicas para la ruta `/` mediante la Metadata API de Next.js.
6. WHEN la página de inicio se construye, THE Health-Control Web SHALL generar el HTML de la ruta `/` mediante React Server Components sin enviar el código del hero section ni de las secciones de contenido estático al bundle de JavaScript del cliente.

---

### Requirement 2: Página de Servicios y Ejercicios

**User Story:** Como paciente potencial, quiero explorar el catálogo de tratamientos, ejercicios adaptados y accesorios disponibles para decidir qué servicio se ajusta a mi situación física.

#### Acceptance Criteria

1. WHEN un visitante accede a la ruta `/servicios`, THE Health-Control Web SHALL renderizar un catálogo de servicios compuesto por un mínimo de tres ServiceCard.
2. WHEN una ServiceCard se renderiza, THE Health-Control Web SHALL mostrar el nombre del servicio, la descripción corta, un ícono identificativo y un indicador de disponibilidad; IF el campo `available` del ServiceItem es `false`, THEN THE Health-Control Web SHALL mostrar el badge "Próximamente" en la tarjeta correspondiente.
3. WHEN la página `/servicios` se carga, THE Health-Control Web SHALL renderizar una sección de ejercicios adaptados con un mínimo de dos ejercicios, cada uno con título, lista de pasos ordenados y duración estimada.
4. WHEN la página `/servicios` se carga, THE Health-Control Web SHALL renderizar una sección de accesorios para casa con un mínimo de dos AccessoryCard, cada una con nombre, descripción, etiqueta de precio y un marcador de imagen placeholder.
5. WHEN una AccessoryCard se renderiza, THE Health-Control Web SHALL mostrar el nombre, la descripción y la etiqueta de precio del accesorio con contenido no vacío.
6. WHEN la página de servicios se renderiza en el servidor, THE Health-Control Web SHALL incluir metaetiquetas SEO (`title`, `description`, `og:title`, `og:description`, `og:url`) específicas para la ruta `/servicios` mediante la Metadata API de Next.js.

---

### Requirement 3: Formulario de Contacto

**User Story:** Como paciente interesado, quiero enviar mis datos y describir el tipo de dolor que tengo para que Health-Control me contacte y pueda orientarme sobre el tratamiento más adecuado.

#### Acceptance Criteria

1. WHEN un visitante accede a la ruta `/contacto`, THE Health-Control Web SHALL renderizar el ContactForm con los campos: `nombre` (texto), `email` (email), `telefono` (teléfono, opcional), `tipoDolor` (selector con opciones predefinidas) y `mensaje` (área de texto).
2. WHEN el usuario envía el ContactForm, THE ContactSchema SHALL validar que los campos `nombre`, `email` y `mensaje` contienen al menos un carácter no vacío; IF alguno de estos campos está vacío o contiene únicamente espacios en blanco, THEN THE ContactSchema SHALL retornar `success: false` con mensajes de error por campo.
3. WHEN el campo `email` se valida, THE ContactSchema SHALL rechazar cualquier cadena que no cumpla el formato de dirección de correo electrónico válido según RFC 5321 y retornar un mensaje de error localizado en español.
4. WHEN el campo `tipoDolor` se valida, THE ContactSchema SHALL rechazar el envío si el valor del selector está vacío o no ha sido seleccionado por el usuario.
5. WHEN el ContactForm se envía con datos que superan la validación del ContactSchema, THE ContactAction SHALL persistir un registro ContactMessage en la base de datos SQLite con los campos `nombre`, `email`, `telefono`, `tipoDolor`, `mensaje` y el timestamp `creadoEn` generado automáticamente.
6. WHEN el ContactAction completa la persistencia exitosamente, THE ContactForm SHALL mostrar un mensaje de confirmación al usuario en el idioma español y restablecer todos los campos del formulario a su estado inicial vacío.
7. WHEN el ContactAction falla al persistir el registro debido a un error de base de datos, THE ContactForm SHALL mostrar un mensaje de error genérico en español sin perder los valores introducidos por el usuario en los campos del formulario.
8. WHEN la validación del ContactForm retorna errores, THE ContactForm SHALL mostrar mensajes de error inline debajo de cada campo con error antes de que el ContactAction sea invocado.
9. WHEN el ContactForm está en estado de envío pendiente, THE ContactForm SHALL mostrar un indicador visual de carga y deshabilitar el botón de envío hasta que el ContactAction retorne una respuesta.
10. WHEN la página de contacto se renderiza en el servidor, THE Health-Control Web SHALL incluir metaetiquetas SEO (`title`, `description`, `og:title`, `og:description`, `og:url`) específicas para la ruta `/contacto` mediante la Metadata API de Next.js.

---

### Requirement 4: Página de Reseñas

**User Story:** Como visitante, quiero leer testimonios de pacientes para evaluar la confiabilidad del servicio Health-Control antes de tomar una decisión.

#### Acceptance Criteria

1. WHEN un visitante accede a la ruta `/resenas`, THE Health-Control Web SHALL renderizar un mínimo de tres ReviewCard con datos placeholder de testimonios de pacientes.
2. WHEN una ReviewCard se renderiza, THE Health-Control Web SHALL mostrar el nombre del autor, el texto del testimonio y la valoración numérica expresada como estrellas rellenas (`rating` estrellas de un total de cinco), con contenido no vacío en los tres campos.
3. WHEN una ReviewCard se renderiza con el campo `avatarUrl` ausente, THE Health-Control Web SHALL mostrar las iniciales del nombre del autor como sustituto visual del avatar.
4. WHERE la integración con Google Places Details API esté habilitada, THE Health-Control Web SHALL transformar los objetos `GooglePlaceReview` recibidos al tipo interno `Review` mediante la función `adaptGoogleReview` antes de pasarlos al componente ReviewCard.
5. WHEN la página de reseñas se renderiza en el servidor, THE Health-Control Web SHALL incluir metaetiquetas SEO (`title`, `description`, `og:title`, `og:description`, `og:url`) específicas para la ruta `/resenas` mediante la Metadata API de Next.js.

---

### Requirement 5: Navegación Global y Dark Mode

**User Story:** Como usuario, quiero una navegación consistente entre todas las páginas y la posibilidad de alternar entre modo claro y oscuro para adaptar la interfaz a mis preferencias de visualización.

#### Acceptance Criteria

1. WHEN cualquier página de la aplicación se carga, THE Health-Control Web SHALL renderizar la Navbar con el nombre/logo de la marca y enlaces de navegación a las rutas `/`, `/servicios`, `/contacto` y `/resenas`.
2. WHEN el usuario activa el DarkModeToggle, THE ThemeProvider SHALL alternar el tema activo entre `'light'` y `'dark'`; IF el tema activo es `'light'`, THEN THE ThemeProvider SHALL establecer el tema a `'dark'`, y vice versa.
3. WHEN el tema cambia, THE Health-Control Web SHALL aplicar inmediatamente las clases CSS de Tailwind dark mode en todos los componentes de la página sin recargar la página.
4. WHEN un usuario regresa a la aplicación en una sesión posterior, THE ThemeProvider SHALL restaurar el tema previamente seleccionado por el usuario desde el almacenamiento local del navegador.
5. WHEN la aplicación se carga por primera vez sin preferencia guardada, THE ThemeProvider SHALL detectar la preferencia del sistema operativo del usuario (`prefers-color-scheme`) y aplicarla como tema inicial.
6. WHEN cualquier página de la aplicación se carga, THE Health-Control Web SHALL renderizar un footer con información de contacto de la marca y enlaces relevantes.
7. WHEN la aplicación se renderiza en el servidor con ThemeProvider activo, THE Health-Control Web SHALL suprimir las advertencias de hidratación en el elemento `<html>` para evitar errores de mismatch causados por el dark mode.

---

### Requirement 6: Base de Datos y Persistencia

**User Story:** Como administrador de Health-Control, quiero que los mensajes del formulario de contacto se almacenen de forma confiable para poder gestionarlos y responder a los pacientes.

#### Acceptance Criteria

1. WHEN la aplicación se inicia en el entorno de desarrollo, THE Prisma ORM SHALL establecer conexión con la base de datos SQLite localizada en la ruta especificada por la variable de entorno `DATABASE_URL`.
2. WHEN el ContactAction recibe datos válidos del ContactSchema, THE Prisma ORM SHALL crear un registro ContactMessage en la tabla `contact_messages` con los campos `nombre`, `email`, `telefono` (nullable), `tipoDolor`, `mensaje` y `creadoEn` (timestamp automático).
3. THE Prisma ORM SHALL definir el modelo ContactMessage con los campos: `id` (entero autoincremental, clave primaria), `nombre` (texto obligatorio), `email` (texto obligatorio), `telefono` (texto opcional), `tipoDolor` (texto obligatorio), `mensaje` (texto obligatorio) y `creadoEn` (DateTime con valor por defecto `now()`).
4. WHEN las migraciones de Prisma se ejecutan contra una base de datos SQLite existente, THE Prisma ORM SHALL crear o actualizar las tablas necesarias sin eliminar los registros ContactMessage ya existentes.
5. WHEN el entorno de ejecución es distinto a `production`, THE Prisma ORM SHALL reutilizar la instancia singleton del PrismaClient almacenada en `globalThis` para evitar la creación de múltiples conexiones durante el hot-reload de Next.js.
6. WHEN un ContactMessage se consulta por su `id` tras haber sido creado mediante el ContactAction, THE Prisma ORM SHALL retornar un objeto con valores de `nombre`, `email`, `telefono`, `tipoDolor` y `mensaje` idénticos a los del registro original, y un campo `creadoEn` con un valor de fecha no nulo.

---

### Requirement 7: Rendimiento y Arquitectura Técnica

**User Story:** Como visitante, quiero que la aplicación cargue rápidamente y sea accesible desde dispositivos móviles y de escritorio para tener una experiencia de navegación fluida.

#### Acceptance Criteria

1. WHEN las páginas de la aplicación se construyen, THE Health-Control Web SHALL renderizar los componentes RSC (`HeroSection`, `ValueProposition`, `PainPoints`, `ServiceCard`, `ExerciseSection`, `AccessoryCard`, `ReviewCard`, `Footer`) exclusivamente en el servidor, sin incluir su código en el bundle de JavaScript enviado al cliente.
2. WHEN una imagen se incluye en cualquier página, THE Health-Control Web SHALL utilizar el componente `next/image` con los atributos `alt`, `width` y `height` definidos para habilitar la optimización automática de imágenes de Next.js.
3. WHEN la aplicación se construye con el comando de producción de Next.js, THE Health-Control Web SHALL compilar sin errores de TypeScript ni de lint con la configuración del proyecto.
4. WHEN un usuario accede a una ruta no definida en la aplicación, THE Health-Control Web SHALL renderizar la página `app/not-found.tsx` con un enlace de retorno a la ruta `/`.
5. IF el singleton del PrismaClient no puede establecer conexión con la base de datos SQLite, THEN THE Health-Control Web SHALL propagar la excepción al error boundary de Next.js y mostrar una página de error sin exponer detalles técnicos de la base de datos al usuario.
