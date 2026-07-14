import type { Metadata } from 'next'
import { reviews } from '@/lib/data/reviews'
import { getGoogleReviews } from '@/lib/data/google-reviews'
import ReviewCard from '@/components/resenas/ReviewCard'

export const metadata: Metadata = {
  title: 'Reseñas',
  description: 'Lee las opiniones de nuestros pacientes.',
  openGraph: {
    title: 'Reseñas | Health-Control',
    description: 'Lee las opiniones de nuestros pacientes.',
    url: 'https://health-control.es/resenas',
  },
}

export default async function ResenasPage() {
  const googleReviews = await getGoogleReviews()
  console.log('Google reviews:', googleReviews)
  const allReviews = googleReviews.length > 0 ? googleReviews : reviews

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