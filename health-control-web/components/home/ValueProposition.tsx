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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          ¿Por qué elegir Health-Control?
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">
          Nuestra metodología combina eficacia, personalización y cuidado integral.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] ?? Heart
            return (
              <Card
                key={index}
                data-testid="benefit-card"
                className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <IconComponent
                    className="w-8 h-8 text-indigo-600 dark:text-indigo-400 shrink-0"
                    aria-hidden="true"
                  />
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
