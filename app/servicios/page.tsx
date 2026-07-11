import type { Metadata } from 'next'
import { exercises } from '@/lib/data/exercises'
import { accessories } from '@/lib/data/accessories'
import PainPoints from '@/components/home/PainPoints'
import ExerciseSection from '@/components/servicios/ExerciseSection'
import AccessoryCard from '@/components/servicios/AccessoryCard'
import type { PainPoint } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Servicios y Ejercicios',
  description:
    'Catálogo de tratamientos osteopresión, ejercicios adaptados y accesorios para casa.',
  openGraph: {
    title: 'Servicios y Ejercicios | Health-Control',
    description:
      'Catálogo de tratamientos osteopresión, ejercicios adaptados y accesorios para casa.',
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

      {/* Ejercicios */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#1c3557] dark:text-[#f7f3ec]">
          Ejercicios adaptados
        </h2>
        <p className="mb-8 text-[#1c3557]/70 dark:text-[#f7f3ec]/80">
          Rutinas guiadas que puedes practicar desde casa entre sesiones.
        </p>
        <ExerciseSection exercises={exercises} />
      </section>

      {/* Accesorios */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#1c3557] dark:text-[#f7f3ec]">
          Accesorios recomendados
        </h2>
        <p className="mb-8 text-[#1c3557]/70 dark:text-[#f7f3ec]/80">
          Productos seleccionados por nuestros especialistas para complementar
          tu tratamiento en casa.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {accessories.map((accessory) => (
            <AccessoryCard key={accessory.id} accessory={accessory} />
          ))}
        </div>
      </section>
    </>
  )
}
