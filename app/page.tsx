import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ValueProposition from '@/components/home/ValueProposition'
import type { Benefit } from '@/lib/types'

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Health-Control — especialistas en osteopresión. Alivia dolores físicos, mejora tu postura y recupera tu bienestar con tratamiento manual personalizado.',
  openGraph: {
    title: 'Health-Control | Especialistas en Osteopresión',
    description:
      'Descubre cómo la osteopresión puede aliviar tus dolores físicos y mejorar tu calidad de vida con sesiones personalizadas.',
    url: 'https://health-control.es',
  },
}

const benefits: Benefit[] = [
  {
    icon: 'Heart',
    title: 'Tratamiento personalizado a domicilio',
    description:
      'Cada sesión se adapta a tus necesidades específicas para obtener los mejores resultados posibles.',
  },
  {
    icon: 'Shield',
    title: 'Seguro y sin medicamentos',
    description:
      'Tratamiento manual no invasivo y respetuoso con tu cuerpo.',
  },
  {
    icon: 'Activity',
    title: 'Resultados duraderos',
    description:
      'Buscamos aliviar la causa del dolor, no solo los síntomas para un bienestar duradero',
  },
  {
    icon: 'Smile',
    title: 'Bienestar integral',
    description:
      'Factores de la nutricion y ambientales para menos dolor, más movilidad y mejor calidad de vida.',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition benefits={benefits} />
    </>
  )
}
