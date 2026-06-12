import { AlertCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { PainPoint } from '@/lib/types'

interface PainPointsProps {
  painPoints: PainPoint[]
}

export default function PainPoints({ painPoints }: PainPointsProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          ¿Sufres alguno de estos dolores?
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-xl mx-auto">
          Tratamos una amplia variedad de condiciones músculo-esqueléticas con resultados probados.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              data-testid="pain-point-card"
              className="border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              <CardHeader className="flex flex-row items-center gap-3 pb-2">
                <AlertCircle
                  className="w-6 h-6 text-rose-500 dark:text-rose-400 shrink-0"
                  aria-hidden="true"
                />
                <CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
                  {point.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
