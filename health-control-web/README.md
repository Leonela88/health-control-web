# Health-Control Web

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)

### General Info
***
Health-Control Web es una SPA desarrollada con Next.js 14 App Router para un emprendimiento de osteo presura. La aplicación permite a los clientes conocer los servicios disponibles, consultar ejercicios terapéuticos, leer reseñas de pacientes y enviar mensajes de contacto directamente desde la web.
Proyecto desarrollado con Kiro (agente de IA de AWS), siguiendo GitFlow y Conventional Commits.

**Estado del proyecto: En desarrollo 🚧**

El contenido placeholder y el diseño están siendo reemplazados por contenido definitivo del negocio. Próximamente se integrará Google Places API para mostrar reseñas reales de Google.

## Technologies
***
* [Kiro](https://kiro.dev/) (AWS) — Agente de IA para desarrollo asistido
* [Next.js](https://nextjs.org/): Version 14.2
* [React](https://react.dev/): Version 18
* [TypeScript](https://www.typescriptlang.org/): Version 5
* [Tailwind CSS](https://tailwindcss.com/): Version 3.4
* [shadcn/ui](https://ui.shadcn.com/): Version latest
* [Prisma ORM](https://www.prisma.io/): Version 5.14
* [Zod](https://zod.dev/): Version 3.23
* [Lucide React](https://lucide.dev/): Version 0.383
* [next-themes](https://github.com/pacocoursey/next-themes): Version 0.3
* [Vitest](https://vitest.dev/): Version 4.1
* [fast-check](https://fast-check.io/): Version latest

## Installation
***
Clona el repositorio e instala las dependencias:

```bash
$ git clone https://github.com/Leonela88/health-control-web.git
$ cd health-control-web
$ npm install
```

Configura las variables de entorno:

```bash
$ cp .env.example .env
```

Añade en `.env`:

```
DATABASE_URL="file:./dev.db"
```

Inicializa la base de datos y arranca el servidor de desarrollo:

```bash
$ npx prisma migrate dev
$ npm run dev
```

La aplicación estará disponible en `http://localhost:3000`


El flujo de trabajo sigue **GitFlow**:
- `main` → rama de producción, solo recibe merges desde `develop`
- `develop` → rama de integración
- `feature/nombre-feature` → ramas de desarrollo por funcionalidad


**¿Cómo se ejecutan los tests?**
El proyecto usa Vitest con property-based testing mediante fast-check:
```bash
$ npx vitest run
```
