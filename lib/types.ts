// Google Places API Review
export interface GooglePlaceReview {
  author_name: string
  rating: number
  text: string
  profile_photo_url?: string
  relative_time_description?: string
  time: number
}

// Tipo interno de reseña
export interface Review {
  id: string
  authorName: string
  text: string
  rating: number // 1-5
  avatarUrl?: string
  source: 'google' | 'manual'
  date?: string
}

// Adaptador Google Places → Review interno
export function adaptGooglePlaceReview(gpr: GooglePlaceReview, index: number): Review {
  return {
    id: `google-${index}`,
    authorName: gpr.author_name,
    text: gpr.text,
    rating: gpr.rating,
    avatarUrl: gpr.profile_photo_url,
    source: 'google',
    date: gpr.relative_time_description,
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
