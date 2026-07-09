# Health-Control Web

Aplicación web para servicios de salud y bienestar especializados en osteo-presura.

## 📋 Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Desarrollo](#desarrollo)
- [Testing](#testing)
- [Estructura del Proyecto](#estructura-del-proyecto)

## 📖 Descripción General

Health-Control Web es una aplicación multi-página construida con Next.js 14+ (App Router) que presenta servicios de salud y bienestar especializados en osteo-presura. La aplicación ofrece:

- Información sobre tratamientos y servicios
- Catálogo de ejercicios terapéuticos adaptados
- Accesorios para uso en casa
- Formulario de contacto con persistencia en base de datos
- Sistema de reseñas (preparado para integración con Google Places API)
- Modo oscuro/claro con persistencia de preferencias

**Estado del proyecto:** 🚧 En desarrollo activo

> Este proyecto fue desarrollado con [Kiro](https://kiro.dev/) (agente de IA de AWS), siguiendo GitFlow y Conventional Commits.

## ✨ Características

- ⚡ **React Server Components** (RSC) como arquitectura principal
- 🎨 **Dark Mode** nativo con next-themes
- 📱 **Diseño responsive** con Tailwind CSS
- 🗄️ **Persistencia de datos** con Prisma ORM + SQLite
- ✅ **Validación de formularios** con Zod
- 🧪 **Property-Based Testing** con fast-check
- ♿ **Accesibilidad** con componentes shadcn/ui
- 🔍 **SEO optimizado** con Metadata API de Next.js


## 🛠️ Tecnologías

### Core
- **[Next.js 14.2](https://nextjs.org/)** - React framework con App Router
- **[React 18](https://react.dev/)** - Librería de UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Tipado estático

### Estilos y UI
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Framework de utilidades CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes accesibles y personalizables
- **[Lucide React 0.383](https://lucide.dev/)** - Iconos
- **[next-themes 0.3](https://github.com/pacocoursey/next-themes)** - Gestión de dark mode

### Base de Datos y Validación
- **[Prisma ORM 5.14](https://www.prisma.io/)** - ORM para TypeScript
- **[SQLite](https://www.sqlite.org/)** - Base de datos local (desarrollo)
- **[Zod 3.23](https://zod.dev/)** - Validación de schemas

### Testing
- **[Vitest 4.1](https://vitest.dev/)** - Framework de testing
- **[fast-check](https://fast-check.io/)** - Property-based testing
- **[Testing Library](https://testing-library.com/)** - Testing de componentes React

### Herramientas de Desarrollo
- **[Kiro](https://kiro.dev/)** - Agente de IA para desarrollo asistido (AWS)
- **ESLint** - Linting de código
- **Prettier** - Formateo de código


## 🚀 Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/Health.Control.git
cd Health.Control
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Crea un archivo `.env` en la raíz del proyecto:

```bash
DATABASE_URL="file:./dev.db"
```

> **Nota:** Para producción, configura una base de datos PostgreSQL o MySQL modificando `DATABASE_URL`

4. **Inicializar la base de datos**

```bash
npx prisma migrate dev
```

Esto creará:
- La base de datos SQLite en `prisma/dev.db`
- Las tablas necesarias según el schema de Prisma
- El Prisma Client generado

5. **Verificar la instalación**

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## 💻 Desarrollo

### Comandos Disponibles

```bash
# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar build de producción
npm start

# Ejecutar linter
npm run lint

# Ejecutar tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Abrir Prisma Studio (visualizador de BD)
npx prisma studio
```

### Flujo de Trabajo Git

Este proyecto sigue **GitFlow**:

- `main` → Rama de producción (solo recibe merges desde `develop`)
- `develop` → Rama de integración y desarrollo
- `feature/nombre-feature` → Ramas para nuevas funcionalidades
- `fix/nombre-fix` → Ramas para correcciones de bugs

**Conventional Commits:**

```bash
feat: añadir formulario de contacto
fix: corregir validación de email
docs: actualizar README
style: formatear código con prettier
test: añadir property tests para ServiceCard
```

## 🧪 Testing

El proyecto utiliza **property-based testing** con fast-check para validar propiedades de corrección.

### Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Ejecutar tests con cobertura
npm run test:coverage
```

### Propiedades de Corrección Validadas

1. ✅ Landing muestra al menos 3 beneficios
2. ✅ ServiceCard contiene campos obligatorios
3. ✅ AccessoryCard contiene campos obligatorios
4. ✅ Validación rechaza campos vacíos
5. ✅ Validación de formato de email
6. ✅ Persistencia round-trip de ContactMessage
7. ✅ ReviewCard renderiza todos los campos requeridos
8. ✅ Toggle de dark mode es idempotente y reversible

## 📁 Estructura del Proyecto

```
Health.Control/
├── .kiro/                    # Configuración de Kiro (specs, workflows)
├── app/                      # App Router de Next.js
│   ├── layout.tsx            # Layout global
│   ├── page.tsx              # Página de inicio
│   ├── contacto/             # Página de contacto
│   ├── servicios/            # Página de servicios
│   ├── resenas/              # Página de reseñas
│   ├── error.tsx             # Error boundary
│   └── not-found.tsx         # Página 404
├── components/               # Componentes de React
│   ├── home/                 # Componentes del landing
│   ├── contacto/             # Componentes de contacto
│   ├── servicios/            # Componentes de servicios
│   ├── resenas/              # Componentes de reseñas
│   ├── layout/               # Navbar, Footer
│   └── ui/                   # Componentes shadcn/ui
├── lib/                      # Lógica compartida
│   ├── actions/              # Server Actions
│   ├── data/                 # Datos placeholder
│   ├── validations/          # Schemas de Zod
│   ├── db.ts                 # Singleton de Prisma Client
│   ├── types.ts              # Tipos TypeScript compartidos
│   └── utils.ts              # Funciones de utilidad
├── prisma/
│   ├── schema.prisma         # Schema de base de datos
│   ├── migrations/           # Migraciones
│   └── dev.db                # Base de datos SQLite (desarrollo)
├── .env                      # Variables de entorno (no commiteado)
├── package.json              # Dependencias del proyecto
├── tsconfig.json             # Configuración de TypeScript
├── tailwind.config.ts        # Configuración de Tailwind
└── vitest.config.ts          # Configuración de Vitest
```

## 🔒 Seguridad

- Los archivos sensibles (`.env`, `dev.db`) están excluidos en `.gitignore`
- Las variables de entorno NO se commitean al repositorio
- Los mensajes de error no exponen detalles técnicos al usuario
- La validación de entrada se realiza tanto en cliente como en servidor

## 📄 Licencia

Este proyecto es privado y está bajo desarrollo.

## 👥 Contacto

Para consultas sobre el proyecto, contacta al equipo de desarrollo.

---

**Desarrollado con ❤️ usando Kiro (AWS AI Agent)**
