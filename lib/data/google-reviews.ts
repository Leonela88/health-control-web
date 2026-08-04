import { adaptGooglePlaceReview, GooglePlaceReview, Review } from '@/lib/types'

// Fetch reviews from internal API route (which calls Google Places API)
export async function getGoogleReviews(): Promise<Review[]> {
  try {
    console.log('[Google Reviews] Fetching from internal API...')

    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/google-reviews`, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    })

    if (!response.ok) {
      console.error('[Google Reviews] API route error:', response.status, response.statusText)
      return []
    }

    const data = await response.json()
    console.log('[Google Reviews] API response status:', data.status)

    if (data.status !== 'OK') {
      console.error('[Google Reviews] API error:', data.error)
      return []
    }

    const reviews: GooglePlaceReview[] = data.reviews || []
    console.log('[Google Reviews] Retrieved reviews count:', reviews.length)

    return reviews.map((review, index) => adaptGooglePlaceReview(review, index))
  } catch (error) {
    console.error('[Google Reviews] Unexpected error:', error)
    return []
  }
}