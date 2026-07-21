import type { Metadata } from 'next'
import PainPoints from '@/components/home/PainPoints'
import type { PainPoint } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Tratamientos de osteopresión personalizados para cada necesidad.',
  openGraph: {
    title: 'Servicios | Health-Control',
    description:
      'Tratamientos de osteopresión personalizados para cada necesidad.',
    url: 'https://health-control.es/servicios',
  },
}

const painPoints: PainPoint[] = [
  {
    label: 'Dolor de espalda',
    description:
      'Tensión en la zona lumbar, dorsal o cervical que el cuerpo usa como señal de alerta',
  },
  {
    label: 'Ciática',
    description:
      'Dolor que irradia desde la zona lumbar hacia la pierna por sobrecarga muscular y fascial',
  },
  {
    label: 'Rodillas y caderas',
    description:
      'Rigidez articular y tensión acumulada que limita el movimiento diario',
  },
  {
    label: 'Hombros y codos',
    description:
      'Sobrecarga muscular que dificulta levantar, girar o extender el brazo',
  },
  {
    label: 'Piernas, pies y tobillos',
    description:
      'Tensión plantar e inestabilidad articular de la pierna que condiciona cada paso',
  },
  {
    label: 'Dolor de cuello, cabeza y migraña',
    description:
      'Cefáleas tensionales originadas en la musculatura cervical y occipital',
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Pain Points - What we treat */}
      <PainPoints painPoints={painPoints} />

      {/* Section 1: Bienestar Integral */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1c3557]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-4">
              Bienestar Integral
            </h2>
            <div className="w-20 h-1 bg-[#d4a745] mx-auto mb-6"></div>
          </div>
          <div className="text-center p-8 sm:p-10 rounded-xl border-2 border-[#d4a745]/20 bg-[#f7f3ec] dark:bg-[#2a4a70] hover:border-[#d4a745] transition-all space-y-4">
            {/* Título en negrita */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#1c3557] dark:text-[#f7f3ec]">
              Tu cuerpo es el resultado de cómo te mueves, cómo te alimentas y cómo vives.
            </h3>

            {/* Contenido en párrafos separados */}
            <p className="text-base sm:text-lg text-[#1c3557]/80 dark:text-[#f7f3ec]/90 leading-relaxed">
              La mayoría de los dolores no son señales de daño estructural, son alarmas que activa el cerebro cuando detecta sobrecarga muscular y fascial.
            </p>

            <p className="text-base sm:text-lg text-[#1c3557]/80 dark:text-[#f7f3ec]/90 leading-relaxed">
              Esta tensión se acumula con el tiempo: movimientos repetitivos, posturas mantenidas en rangos reducidos y actividad física sin variedad de ángulos hacen que el cuerpo pierda amplitud de movimiento y aumente la tensión.
            </p>

            <p className="text-base sm:text-lg text-[#1c3557]/80 dark:text-[#f7f3ec]/90 leading-relaxed">
              La alimentación inflamatoria, el estrés y el mal descanso la agravan: elevan el tono muscular, acidifican el tejido y reducen el umbral del dolor, creando un círculo que perpetúa los síntomas.
            </p>

            <p className="text-base sm:text-lg text-[#1c3557]/80 dark:text-[#f7f3ec]/90 leading-relaxed">
              Trabajamos desde un enfoque global: técnicas manuales de liberación de tensión, orientación en movimiento, nutrición y los nutrientes específicos que suelen faltar en la alimentación moderna.
            </p>

            {/* Frase de cierre resaltada */}
            <p className="text-lg sm:text-xl font-semibold text-[#1c3557] dark:text-[#f7f3ec] pt-2">
              Menos dolor. Más movilidad. Mejor calidad de vida.
            </p>
          </div>
        </div>
      </section>

     {/* Section 2: ¿Qué Puedes Esperar? */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f7f3ec] to-white dark:from-[#2a4a70] dark:to-[#1c3557]">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-4">
        ¿Qué Puedes Esperar?
      </h2>
      <div className="w-20 h-1 bg-[#d4a745] mx-auto mb-6"></div>
    </div>

    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Paso 1 */}
      <div className="flex gap-4 items-start p-6 rounded-xl bg-white dark:bg-[#1c3557] border-2 border-[#d4a745]/20">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d4a745] text-white flex items-center justify-center font-bold text-xl">
          1
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-3">
            Primera sesión (aprox. 90 minutos)
          </h3>
          <ul className="space-y-2 text-[#1c3557]/80 dark:text-[#f7f3ec]/90">
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Valoración completa de tu situación física y de tus molestias.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Anamnesis detallada sobre tu estado de salud, tu historial y tus objetivos.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Identificación de los factores que pueden estar influyendo en tu dolor y en tus limitaciones de movimiento.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Elaboración de un plan personalizado adaptado a tus necesidades.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Asesoramiento integral sobre hábitos saludables que puedan favorecer tu bienestar y apoyar el proceso de recuperación.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Paso 2 */}
      <div className="flex gap-4 items-start p-6 rounded-xl bg-white dark:bg-[#1c3557] border-2 border-[#d4a745]/20">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d4a745] text-white flex items-center justify-center font-bold text-xl">
          2
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-3">
            Durante el tratamiento
          </h3>
          <ul className="space-y-2 text-[#1c3557]/80 dark:text-[#f7f3ec]/90">
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Aplicación de técnicas manuales y de movimiento adaptadas a tu caso.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Ejercicios personalizados para mejorar la movilidad y reducir las tensiones.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Recomendaciones prácticas para que puedas continuar el trabajo en casa y mantener los resultados a largo plazo.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Paso 3 */}
      <div className="flex gap-4 items-start p-6 rounded-xl bg-white dark:bg-[#1c3557] border-2 border-[#d4a745]/20">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d4a745] text-white flex items-center justify-center font-bold text-xl">
          3
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-3">
            Nuestro objetivo
          </h3>
          <ul className="space-y-2 text-[#1c3557]/80 dark:text-[#f7f3ec]/90">
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Ir más allá de los síntomas y ayudarte a comprender el origen real de tus molestias.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Abordar todos los factores globales que contribuyen a tu dolor.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#d4a745] font-bold">•</span>
              <span>Reducir tensiones, mejorar la movilidad y favorecer la capacidad natural de autorregulación del cuerpo.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Section 3: Precios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1c3557]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-4">
              Precios
            </h2>
            <div className="w-20 h-1 bg-[#d4a745] mx-auto mb-6"></div>
            <p className="text-lg text-[#1c3557]/80 dark:text-[#f7f3ec]/90 max-w-2xl mx-auto">
              Tarifas adaptadas según la zona geográfica de desplazamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Zona 1: Barcelona y Maresme */}
            <div className="p-8 rounded-2xl border-2 border-[#d4a745]/20 bg-[#f7f3ec] dark:bg-[#2a4a70] hover:border-[#d4a745] hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-1">
                  Barcelona y Maresme
                </h3>
                <p className="text-sm text-[#1c3557]/70 dark:text-[#f7f3ec]/70 mb-6">
                  Atención a domicilio en la zona
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-[#d4a745]/20 pb-3">
                    <div>
                      <p className="font-semibold text-[#1c3557] dark:text-[#f7f3ec]">Sesión inicial</p>
                      <p className="text-xs text-[#1c3557]/70 dark:text-[#f7f3ec]/70">Valoración + tratamiento (90 min)</p>
                    </div>
                    <span className="text-2xl font-bold text-[#d4a745]">110€</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#d4a745]/20 pb-3">
                    <div>
                      <p className="font-semibold text-[#1c3557] dark:text-[#f7f3ec]">Sesión de seguimiento</p>
                      <p className="text-xs text-[#1c3557]/70 dark:text-[#f7f3ec]/70">Mantenimiento y evolución</p>
                    </div>
                    <span className="text-2xl font-bold text-[#d4a745]">80€</span>
                  </div>

                  <div className="flex justify-between items-center pt-1">
                    <div>
                      <p className="font-semibold text-[#1c3557] dark:text-[#f7f3ec]">Programa de bienestar</p>
                      <p className="text-xs text-[#1c3557]/70 dark:text-[#f7f3ec]/70">Bono de 4 sesiones</p>
                    </div>
                    <span className="text-2xl font-bold text-[#d4a745]">300€</span>
                  </div>
                </div>
              </div>

              <a
                href="/contacto"
                className="block w-full text-center py-3 px-6 rounded-xl bg-[#1c3557] dark:bg-[#d4a745] text-[#f7f3ec] dark:text-[#1c3557] font-semibold hover:bg-[#2a4a70] dark:hover:bg-[#c19639] transition-all"
              >
                Reservar sesión
              </a>
            </div>

            {/* Zona 2: Vallès Oriental */}
            <div className="p-8 rounded-2xl border-2 border-[#d4a745] bg-[#f7f3ec] dark:bg-[#2a4a70] shadow-lg hover:shadow-xl transition-all flex flex-col justify-between relative">
              <div>
                <h3 className="text-2xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-1">
                  Vallès Oriental
                </h3>
                <p className="text-sm text-[#1c3557]/70 dark:text-[#f7f3ec]/70 mb-6">
                  Atención a domicilio en la zona
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-[#d4a745]/20 pb-3">
                    <div>
                      <p className="font-semibold text-[#1c3557] dark:text-[#f7f3ec]">Sesión inicial</p>
                      <p className="text-xs text-[#1c3557]/70 dark:text-[#f7f3ec]/70">Valoración + tratamiento (90 min)</p>
                    </div>
                    <span className="text-2xl font-bold text-[#d4a745]">90€</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-[#d4a745]/20 pb-3">
                    <div>
                      <p className="font-semibold text-[#1c3557] dark:text-[#f7f3ec]">Sesión de seguimiento</p>
                      <p className="text-xs text-[#1c3557]/70 dark:text-[#f7f3ec]/70">Mantenimiento y evolución</p>
                    </div>
                    <span className="text-2xl font-bold text-[#d4a745]">60€</span>
                  </div>

                  <div className="flex justify-between items-center pt-1">
                    <div>
                      <p className="font-semibold text-[#1c3557] dark:text-[#f7f3ec]">Programa de bienestar</p>
                      <p className="text-xs text-[#1c3557]/70 dark:text-[#f7f3ec]/70">Bono de 4 sesiones</p>
                    </div>
                    <span className="text-2xl font-bold text-[#d4a745]">220€</span>
                  </div>
                </div>
              </div>

              <a
                href="/contacto"
                className="block w-full text-center py-3 px-6 rounded-xl bg-[#d4a745] text-[#1c3557] font-semibold hover:bg-[#c19639] transition-all"
              >
                Reservar sesión
              </a>
            </div>
          </div>

          {/* Nota al pie */}
          <div className="text-center mt-12 space-y-2">
            <p className="text-sm text-[#1c3557]/80 dark:text-[#f7f3ec]/80 italic">
              * Los precios pueden variar en función de la zona de desplazamiento. Consulta si tu municipio está incluido.
            </p>
            <p className="text-[#1c3557]/80 dark:text-[#f7f3ec]/90">
              ¿Tienes dudas?{' '}
              <a href="/contacto" className="text-[#d4a745] hover:text-[#c19639] font-semibold underline">
                Contáctanos
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}