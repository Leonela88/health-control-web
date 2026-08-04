import { NextResponse } from 'next/server'

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  console.log('[Google Reviews API] Starting request...')
  console.log('[Google Reviews API] API Key present:', !!apiKey)
  console.log('[Google Reviews API] API Key value (first 10 chars):', apiKey?.substring(0, 10))
  console.log('[Google Reviews API] Place ID present:', !!placeId)
  console.log('[Google Reviews API] Place ID value:', placeId)
  console.log('[Google Reviews API] All env keys:', Object.keys(process.env).filter(k => k.includes('GOOGLE')))

  if (!apiKey) {
    console.error('[Google Reviews API] No API key configured')
    return NextResponse.json(
      { error: 'API key not configured', reviews: [] },
      { status: 500 }
    )
  }

  if (!placeId) {
    console.error('[Google Reviews API] No Place ID configured')
    return NextResponse.json(
      { error: 'Place ID not configured', reviews: [] },
      { status: 500 }
    )
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=es`
    
    console.log('[Google Reviews API] Fetching from Google Places API...')

    const response = await fetch(url, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    })

    if (!response.ok) {
      console.error('[Google Reviews API] HTTP error:', response.status, response.statusText)
      return NextResponse.json(
        { error: 'Failed to fetch from Google', reviews: [] },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('[Google Reviews API] Response status:', data.status)

    if (data.status !== 'OK') {
      console.error('[Google Reviews API] API error:', data.status, data.error_message)
      return NextResponse.json(
        {
          error: data.error_message || data.status,
          status: data.status,
          reviews: [],
        },
        { status: 200 }
      )
    }

    const reviews = data.result?.reviews || []
    console.log('[Google Reviews API] Retrieved reviews count:', reviews.length)

    return NextResponse.json({
      reviews,
      status: 'OK',
    })
  } catch (error) {
    console.error('[Google Reviews API] Unexpected error:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch reviews',
        details: error instanceof Error ? error.message : String(error),
        reviews: [],
      },
      { status: 500 }
    )
  }
}
