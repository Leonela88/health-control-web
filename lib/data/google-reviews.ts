import { adaptGoogleReview, GooglePlaceReview } from '@/lib/types'

export async function getGoogleReviews() {
  try {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY
    const placeId = 'ChIJQRWYPofLpBIRI4o4kjbjJ_4'

    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}&language=es`,
      { next: { revalidate: 86400 } }
    )

    const data = await res.json()
    console.log('Google response status:', data.status)
console.log('Google response result:', JSON.stringify(data.result))
    const googleReviews: GooglePlaceReview[] = data.result?.reviews ?? []

    return googleReviews.map((review, index) => adaptGoogleReview(review, index))
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return []
  }
}