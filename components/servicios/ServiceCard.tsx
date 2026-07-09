import {
  Activity,
  Hand,
  Wind,
  Zap,
  Heart,
  Brain,
  Bone,
  Dumbbell,
  Stethoscope,
  Thermometer,
  type LucideIcon,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ServiceItem } from '@/lib/types'

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Hand,
  Wind,
  Zap,
  Heart,
  Brain,
  Bone,
  Dumbbell,
  Stethoscope,
  Thermometer,
}

interface ServiceCardProps {
  service: ServiceItem
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = (Object.prototype.hasOwnProperty.call(iconMap, service.icon) ? iconMap[service.icon] : null) ?? Activity

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <Icon
              className="h-6 w-6 shrink-0 text-primary"
              aria-hidden="true"
            />
            <CardTitle>{service.name}</CardTitle>
          </div>
          {!service.available && (
            <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground ring-1 ring-foreground/10">
              Próximamente
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{service.shortDescription}</CardDescription>
      </CardContent>
    </Card>
  )
}
