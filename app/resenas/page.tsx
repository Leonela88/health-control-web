import type { Metadata } from 'next'
import { reviews } from '@/lib/data/reviews'
import { adaptGoogleReview } from '@/lib/types'
import ReviewCard from '@/components/resenas/ReviewCard'

export const metadata: Metadata = {
  title: 'Reseñas',
  description:
    'Lee las opiniones de nuestros clientes sobre nuestros tratamientos',
  openGraph: {
    title: 'Reseñas | Health-Control',
    description:
      'Lee las opiniones de nuestros clientes sobre nuestros tratamientos',
    url: 'https://health-control.es/resenas',
  },
}

export default function ResenasPage() {
  // Ejemplo de uso del adaptador con dato placeholder
  const googlePlaceholder = adaptGoogleReview(
    {
      author_name: 'Usuario Google',
      rating: 5,
      text: 'Excelente profesional, muy recomendable.',
      relative_time_description: 'hace 1 semana',
    },
    reviews.length,
  )

  const allReviews = [...reviews, googlePlaceholder]

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Reseñas</h1>
      <p className="mb-8 text-muted-foreground">
        Lo que dicen nuestros pacientes.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {allReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </main>
  )
}