/**
 * Property test for AccessoryCard component.
 *
 * **Validates: Requirements 2.4, 2.5**
 *
 * Property 3: Tarjeta de accesorio contiene campos obligatorios.
 * When AccessoryCard receives an Accessory with non-empty name, description
 * and priceLabel, all three fields always appear in the DOM.
 */

import { render } from '@testing-library/react'
import * as fc from 'fast-check'
import AccessoryCard from '../AccessoryCard'
import type { Accessory } from '@/lib/types'

// Mock next/image to avoid jsdom incompatibilities
vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Generates a string with at least one non-whitespace character.
const nonBlankString = fc.stringMatching(/\S/)

// Arbitrary for a single Accessory with all required non-empty fields
const accessoryArb: fc.Arbitrary<Accessory> = fc.record({
  id: fc.string(),
  name: nonBlankString,
  description: nonBlankString,
  priceLabel: nonBlankString,
  imagePlaceholder: fc.string(),
})

describe('AccessoryCard — Property 3: Tarjeta de accesorio contiene campos obligatorios', () => {
  it('renders name, description and priceLabel in the DOM for any valid Accessory', () => {
    fc.assert(
      fc.property(accessoryArb, (accessory) => {
        const { container, unmount } = render(<AccessoryCard accessory={accessory} />)

        // Read textContent directly from each slot element to avoid getByText
        // normalisation issues (e.g. trailing/leading whitespace in generated values).
        const titleText = container.querySelector('[data-slot="card-title"]')?.textContent ?? ''
        const descText = container.querySelector('[data-slot="card-description"]')?.textContent ?? ''
        const footerText = container.querySelector('[data-slot="card-footer"]')?.textContent ?? ''

        const nameFound = titleText.includes(accessory.name)
        const descFound = descText.includes(accessory.description)
        const priceFound = footerText.includes(accessory.priceLabel)

        unmount()
        return nameFound && descFound && priceFound
      }),
      { numRuns: 50 },
    )
  })
})
