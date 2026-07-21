import { NextResponse } from 'next/server'

export async function GET() {
  const placeId = 'ChIJQRWYPofLpBIRI4o4kjbjJ_4'
  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  if (!apiKey) {
    console.error('[Google Reviews API] No API key configured')
    return NextResponse.json({ error: 'API key not configured', reviews: [] }, { status: 500 })
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=es`
    const res = await fetch(url, { 
      next: { revalidate: 86400 },
      cache: 'no-store' // Force fresh fetch for testing
    })

    const data = await res.json()
    console.log('[Google Reviews API] Response status:', data.status)
    console.log('[Google Reviews API] Full response:', JSON.stringify(data, null, 2))

    if (data.status !== 'OK') {
      console.error('[Google Reviews API] Error from Google:', data.status, data.error_message)
      return NextResponse.json({ 
        error: data.error_message || data.status, 
        status: data.status,
        reviews: [] 
      }, { status: 200 })
    }

    const reviews = data.result?.reviews ?? []
    console.log('[Google Reviews API] Retrieved reviews count:', reviews.length)

    return NextResponse.json({ reviews, status: 'OK' })
  } catch (error) {
    console.error('[Google Reviews API] Fetch error:', error)
    return NextResponse.json({ 
      error: 'Failed to fetch reviews', 
      details: error instanceof Error ? error.message : String(error),
      reviews: [] 
    }, { status: 500 })
  }
}
