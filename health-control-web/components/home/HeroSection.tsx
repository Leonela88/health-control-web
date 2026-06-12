import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Health-Control
        </h1>

        <p className="text-xl sm:text-2xl text-indigo-700 dark:text-indigo-300 font-medium mb-6">
          Recupera tu bienestar con la osteo-presura
        </p>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
          La osteo-presura es una terapia manual que combina técnicas osteopáticas y de digitopresión
          para aliviar tensiones musculares, dolores articulares y desequilibrios posturales.
          A través de sesiones personalizadas, trabajamos el cuerpo como un sistema integrado para
          restaurar su equilibrio natural y mejorar tu calidad de vida.
        </p>

        <div className="mt-10">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
          >
            Reserva tu consulta
          </Link>
        </div>
      </div>
    </section>
  )
}
