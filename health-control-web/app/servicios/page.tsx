import type { Metadata } from 'next'
import { services } from '@/lib/data/services'
import { exercises } from '@/lib/data/exercises'
import { accessories } from '@/lib/data/accessories'
import ServiceCard from '@/components/servicios/ServiceCard'
import ExerciseSection from '@/components/servicios/ExerciseSection'
import AccessoryCard from '@/components/servicios/AccessoryCard'

export const metadata: Metadata = {
  title: 'Servicios y Ejercicios',
  description:
    'Catálogo de tratamientos osteo-presura, ejercicios adaptados y accesorios para casa.',
  openGraph: {
    title: 'Servicios y Ejercicios | Health-Control',
    description:
      'Catálogo de tratamientos osteo-presura, ejercicios adaptados y accesorios para casa.',
    url: 'https://health-control.es/servicios',
  },
}

export default function ServiciosPage() {
  return (
    <>
      {/* Servicios */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">Servicios</h1>
        <p className="mb-8 text-muted-foreground">
          Tratamientos personalizados de osteo-presura para tu bienestar.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Ejercicios */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">
          Ejercicios adaptados
        </h2>
        <p className="mb-8 text-muted-foreground">
          Rutinas guiadas que puedes practicar desde casa entre sesiones.
        </p>
        <ExerciseSection exercises={exercises} />
      </section>

      {/* Accesorios */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-2 text-2xl font-bold tracking-tight">
          Accesorios recomendados
        </h2>
        <p className="mb-8 text-muted-foreground">
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
