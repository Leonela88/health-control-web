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
    label:'Dolor de cuello, cabeza y migraña',
    description:
     'Cefáleas tensionales originadas en la musculatura cervical y occipital',
  },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Pain Points - What we treat */}
      <PainPoints painPoints={painPoints} />
    </>
  )
}
