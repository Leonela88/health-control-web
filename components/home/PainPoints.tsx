import { AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { PainPoint } from '@/lib/types'

interface PainPointsProps {
  painPoints: PainPoint[]
}

export default function PainPoints({ painPoints }: PainPointsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f7f3ec] to-white dark:from-[#2a4a70] dark:to-[#1c3557]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#dfa408]/10 border border-[#dfa408]/30 mb-4">
            <AlertCircle className="w-5 h-5 text-[#dfa408]" />
            <span className="text-sm font-medium text-[#1c3557] dark:text-[#f7f3ec]">
              Podemos ayudarte
            </span>
          </div>
          
          <h2 className="text-4xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-4">
            ¿Sufres alguno de estos dolores?
          </h2>
          <p className="text-lg text-[#1c3557]/80 dark:text-[#f7f3ec]/90 max-w-3xl mx-auto leading-relaxed">
            En muchos casos, el dolor no se debe a un daño, sino a una <span className="font-semibold text-[#dfa408]">tensión excesiva de músculos y fascias</span>.
            Es una señal de alarma del cuerpo, que puede disminuir al normalizar esa tensión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              data-testid="pain-point-card"
              className="group relative border-2 border-[#1c3557]/10 dark:border-[#dfa408]/20 bg-white dark:bg-[#1c3557] hover:border-[#dfa408] hover:shadow-lg hover:shadow-[#dfa408]/20 transition-all duration-300 overflow-hidden"
            >
              {/* Decorative accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#dfa408] via-[#dfa408]/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#dfa408] mt-2 flex-shrink-0"></div>
                  <CardTitle className="text-xl font-bold text-[#1c3557] dark:text-[#f7f3ec] group-hover:text-[#dfa408] dark:group-hover:text-[#dfa408] transition-colors">
                    {point.label}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base text-[#1c3557]/80 dark:text-[#f7f3ec]/90 leading-relaxed">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA at the bottom */}
        <div className="text-center mt-12">
          <p className="text-lg text-[#1c3557] dark:text-[#f7f3ec] mb-6">
            ¿Identificas alguno de estos síntomas?
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center rounded-xl bg-[#1c3557] dark:bg-[#dfa408] px-8 py-4 text-base font-semibold text-[#f7f3ec] dark:text-[#1c3557] shadow-lg hover:bg-[#2a4a70] dark:hover:bg-[#c99207] transition-all hover:scale-105"
          >
            Solicita una consulta gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
