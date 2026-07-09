// Tipo compatible con Google Places Details API (futuro)
export interface GooglePlaceReview {
  author_name: string
  rating: number
  text: string
  profile_photo_url?: string
  relative_time_description?: string
}

// Tipo interno de reseña (unifica placeholder + Google Places)
export interface Review {
  id: string
  authorName: string
  text: string
  rating: number           // 1-5
  avatarUrl?: string
  source: 'google' | 'manual'
  date?: string
}

// Adaptador Google → Review interno
export function adaptGoogleReview(gr: GooglePlaceReview, index: number): Review {
  return {
    id: `google-${index}`,
    authorName: gr.author_name,
    text: gr.text,
    rating: gr.rating,
    avatarUrl: gr.profile_photo_url,
    source: 'google',
    date: gr.relative_time_description,
  }
}

export interface ServiceItem {
  id: string
  name: string
  shortDescription: string
  icon: string       // nombre Lucide
  available: boolean // false → badge "Próximamente"
}

export interface Exercise {
  title: string
  steps: string[]
  duration: string   // e.g. "10 minutos"
}

export interface Accessory {
  id: string
  name: string
  description: string
  priceLabel: string  // e.g. "Consultar precio"
  imagePlaceholder: string
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface PainPoint {
  label: string
  description: string
}
