import { adaptGooglePlaceReview, GooglePlaceReview, Review } from '@/lib/types'

export async function getGoogleReviews(): Promise<Review[]> {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY
    const placeId = 'ChIJQRWYPofLpBIRI4o4kjbjJ_4'

    if (!apiKey) {
      console.error('[Google Reviews] No API key configured')
      return []
    }

    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}&language=es`,
      { next: { revalidate: 86400 } }
    )

    const data = await res.json()
    console.log('[Google Reviews] Status:', data.status)

    if (data.status !== 'OK') {
      console.error('[Google Reviews] Error:', data.error_message)
      return []
    }

    const reviews: GooglePlaceReview[] = data.result?.reviews ?? []
    return reviews.map((review, index) => adaptGooglePlaceReview(review, index))
  } catch (error) {
    console.error('[Google Reviews] Error:', error)
    return []
  }
}