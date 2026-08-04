import type { Metadata } from 'next'
import { getGoogleReviews } from '@/lib/data/google-reviews'
import ReviewCard from '@/components/resenas/ReviewCard'
import { AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reseñas',
  description: 'Lee las opiniones de nuestros clientes.',
  openGraph: {
    title: 'Reseñas | Health-Control',
    description: 'Lee las opiniones de nuestros clientes.',
    url: 'https://health-control.es/resenas',
  },
}

export default async function ResenasPage() {
  const googleReviews = await getGoogleReviews()

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-[#1c3557] dark:text-[#f7f3ec]">
        Reseñas
      </h1>
      <p className="mb-8 text-[#1c3557]/80 dark:text-[#f7f3ec]/90">
        Lo que dicen nuestros clientes.
      </p>

      {googleReviews.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center justify-center p-12 rounded-2xl border-2 border-[#d4a745]/20 bg-[#f7f3ec] dark:bg-[#2a4a70]">
            <div className="w-16 h-16 rounded-full bg-[#d4a745]/20 flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-[#d4a745]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1c3557] dark:text-[#f7f3ec] mb-3 text-center">
              Reseñas No Disponibles
            </h2>
            <p className="text-[#1c3557]/80 dark:text-[#f7f3ec]/90 text-center leading-relaxed mb-6">
              No pudimos cargar las reseñas en este momento. Esto puede deberse a que el perfil de Google Business aún está en proceso de configuración.
            </p>
            <div className="flex gap-4">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-[#1c3557] dark:bg-[#d4a745] px-6 py-3 text-base font-semibold text-[#f7f3ec] dark:text-[#1c3557] hover:bg-[#2a4a70] dark:hover:bg-[#c19639] transition-all"
              >
                Contáctanos
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-xl border-2 border-[#d4a745] px-6 py-3 text-base font-semibold text-[#1c3557] dark:text-[#f7f3ec] hover:bg-[#d4a745]/10 transition-all"
              >
                Volver al Inicio
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}