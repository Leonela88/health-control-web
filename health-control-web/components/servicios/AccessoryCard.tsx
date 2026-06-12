import Image from 'next/image'
import { Accessory } from '@/lib/types'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'

interface AccessoryCardProps {
  accessory: Accessory
}

export default function AccessoryCard({ accessory }: AccessoryCardProps) {
  return (
    <Card>
      <Image
        src={accessory.imagePlaceholder}
        alt={accessory.name}
        width={400}
        height={240}
        className="w-full object-cover"
      />
      <CardHeader>
        <CardTitle>{accessory.name}</CardTitle>
        <CardDescription>{accessory.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <span className="text-sm font-medium text-primary">
          {accessory.priceLabel}
        </span>
      </CardFooter>
    </Card>
  )
}
