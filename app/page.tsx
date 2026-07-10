import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ValueProposition from '@/components/home/ValueProposition'
import PainPoints from '@/components/home/PainPoints'
import type { Benefit, PainPoint } from '@/lib/types'

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
    title: 'Tratamiento personalizado',
    description:
      'Cada sesión se adapta a tus necesidades específicas para obtener los mejores resultados posibles.',
  },
  {
    icon: 'Shield',
    title: 'Sin efectos secundarios',
    description:
      'La osteopresión es un tratamiento manual no invasivo y completamente seguro para todas las edades.',
  },
  {
    icon: 'Activity',
    title: 'Resultados duraderos',
    description:
      'Abordamos la causa raíz del dolor, no solo los síntomas, para una recuperación real y duradera.',
  },
  {
    icon: 'Smile',
    title: 'Bienestar integral',
    description:
      'Mejoramos tu calidad de vida cuidando tanto el cuerpo como el equilibrio general del sistema músculo-esquelético.',
  },
]

const painPoints: PainPoint[] = [
  {
    label: 'Dolor de espalda',
    description:
      'Lumbalgia, dorsalgia y contracturas cervicales provocadas por malas posturas o esfuerzo físico.',
  },
  {
    label: 'Dolor articular',
    description:
      'Molestias en rodillas, caderas, hombros y otras articulaciones por desgaste o inflamación.',
  },
  {
    label: 'Cefaleas tensionales',
    description:
      'Dolores de cabeza recurrentes originados por tensión muscular en el cuello y la zona cervical.',
  },
  {
    label: 'Estrés y tensión',
    description:
      'Acumulación de tensión muscular y emocional que se manifiesta en rigidez, dolor o fatiga crónica.',
  },
  {
    label: 'Problemas posturales',
    description:
      'Desequilibrios posturales como escoliosis funcional, hiperlordosis o cifosis que generan molestias cotidianas.',
  },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition benefits={benefits} />
      <PainPoints painPoints={painPoints} />
    </>
  )
}
