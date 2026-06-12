/**
 * Property test for ValueProposition component.
 *
 * **Validates: Requirements 1.3**
 *
 * Property 1: When ValueProposition receives an array of N benefits (N ≥ 3),
 * it always renders exactly N cards with data-testid="benefit-card".
 */

import { render, screen } from '@testing-library/react'
import * as fc from 'fast-check'
import ValueProposition from '../ValueProposition'
import type { Benefit } from '@/lib/types'

// Arbitrary for a single Benefit
const benefitArb: fc.Arbitrary<Benefit> = fc.record({
  icon: fc.constantFrom('Heart', 'Shield', 'Star', 'Zap', 'CheckCircle', 'Activity', 'Smile'),
  title: fc.string({ minLength: 1, maxLength: 80 }),
  description: fc.string({ minLength: 1, maxLength: 200 }),
})

// Arbitrary for an array of at least 3 benefits
const benefitsArb: fc.Arbitrary<Benefit[]> = fc.array(benefitArb, { minLength: 3, maxLength: 10 })

describe('ValueProposition — Property 1: Landing shows at least three benefits', () => {
  it('renders exactly as many benefit cards as there are items in the benefits array (≥ 3)', () => {
    fc.assert(
      fc.property(benefitsArb, (benefits) => {
        const { unmount } = render(<ValueProposition benefits={benefits} />)

        const cards = screen.getAllByTestId('benefit-card')
        const result = cards.length === benefits.length && cards.length >= 3

        unmount()
        return result
      }),
      { numRuns: 50 },
    )
  })
})
