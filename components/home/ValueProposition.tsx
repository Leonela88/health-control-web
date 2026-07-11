import {
  Heart,
  Shield,
  Star,
  Zap,
  CheckCircle,
  Activity,
  Smile,
  Target,
  Clock,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { Benefit } from '@/lib/types'

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Shield,
  Star,
  Zap,
  CheckCircle,
  Activity,
  Smile,
  Target,
  Clock,
}

interface ValuePropositionProps {
  benefits: Benefit[]
}

export default function ValueProposition({ benefits }: ValuePropositionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1c3557]">
      <div className="max-w-6xl mx-auto">
        {/* Header with decorative accent */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-[#d4a745] to-transparent"></div>
          <h2 className="text-4xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-4 mt-6">
            ¿Por qué elegir Health-Control?
          </h2>
          <p className="text-lg text-[#1c3557]/70 dark:text-[#f7f3ec]/80 max-w-2xl mx-auto">
            Nuestra metodología combina eficacia, personalización y cuidado integral.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] ?? Heart
            return (
              <Card
                key={index}
                data-testid="benefit-card"
                className="group relative border-2 border-[#d4a745]/20 bg-[#f7f3ec] dark:bg-[#2a4a70] hover:border-[#d4a745] hover:shadow-xl hover:shadow-[#d4a745]/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#d4a745]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <CardHeader className="flex flex-row items-start gap-4 pb-3 relative z-10">
                  <div className="p-3 rounded-xl bg-[#d4a745]/20 group-hover:bg-[#d4a745]/30 transition-colors">
                    <IconComponent
                      className="w-7 h-7 text-[#d4a745] group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mt-2">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-base text-[#1c3557]/80 dark:text-[#f7f3ec]/90 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
