import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#f7f3ec] via-[#faf7f0] to-[#f0ebe0] dark:from-[#1c3557] dark:to-[#2a4a70] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#d4a745]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#d4a745]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-6 tracking-tight">
          Health-Control
        </h1>

        <p className="text-2xl sm:text-3xl text-[#d4a745] font-semibold mb-8 flex items-center justify-center gap-2">
          Bienestar integral a tu medida
        </p>

        <div className="max-w-3xl mx-auto mb-10">
          <p className="text-lg sm:text-xl text-[#1c3557]/80 dark:text-[#f7f3ec]/90 leading-relaxed mb-4">
            Nuestro enfoque, basado en <span className="font-semibold text-[#1c3557] dark:text-[#d4a745]">métodos alemanes</span>, 
            combina técnicas manuales y ejercicios de estiramientos por descompresión para aliviar tensiones musculares, 
            dolores articulares y desequilibrios posturales.
          </p>
          <p className="text-base sm:text-lg text-[#1c3557]/70 dark:text-[#f7f3ec]/80 leading-relaxed">
            A través de sesiones personalizadas, trabajamos el cuerpo como un sistema integrado para 
            restaurar su equilibrio natural y mejorar tu calidad de vida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Link
            href="/contacto"
            className="group inline-flex items-center justify-center rounded-xl bg-[#d4a745] px-8 py-4 text-base font-semibold text-[#1c3557] shadow-lg shadow-[#d4a745]/30 transition-all hover:bg-[#c19639] hover:shadow-xl hover:shadow-[#d4a745]/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a745] focus-visible:ring-offset-2"
          >
            Reserva tu consulta
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          <Link
            href="/servicios"
            className="inline-flex items-center justify-center rounded-xl border-2 border-[#1c3557] dark:border-[#d4a745] px-8 py-4 text-base font-semibold text-[#1c3557] dark:text-[#f7f3ec] transition-all hover:bg-[#1c3557] hover:text-[#f7f3ec] dark:hover:bg-[#d4a745] dark:hover:text-[#1c3557] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1c3557] focus-visible:ring-offset-2"
          >
            Ver servicios
          </Link>
        </div>
      </div>
    </section>
  )
}
