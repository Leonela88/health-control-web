/**
 * Property test for ServiceCard component.
 *
 * **Validates: Requirements 2.2**
 *
 * Property 2: Tarjeta de servicio contiene campos obligatorios.
 * For any ServiceItem with non-empty name, shortDescription and icon,
 * ServiceCard always renders name and shortDescription in the DOM.
 */

import { render } from '@testing-library/react'
import * as fc from 'fast-check'
import ServiceCard from '../ServiceCard'
import type { ServiceItem } from '@/lib/types'

// Arbitrary that generates a string with at least one visible (non-whitespace) character.
// This mirrors what "non-empty" means in practice: a value that is visible in the DOM
// after @testing-library's whitespace normalization.
const visibleStringArb = (maxLength = 80): fc.Arbitrary<string> =>
  fc
    .string({ minLength: 1, maxLength })
    .filter((s) => s.trim().length > 0)

// Arbitrary for a single ServiceItem with required non-empty fields
const serviceItemArb: fc.Arbitrary<ServiceItem> = fc.record({
  id: visibleStringArb(),
  name: visibleStringArb(80),
  shortDescription: visibleStringArb(200),
  icon: visibleStringArb(40),
  available: fc.boolean(),
})

describe('ServiceCard — Propiedad 2: Tarjeta de servicio contiene campos obligatorios', () => {
  it('siempre muestra name y shortDescription en el DOM para cualquier ServiceItem válido', () => {
    fc.assert(
      fc.property(serviceItemArb, (service) => {
        const { unmount, container } = render(<ServiceCard service={service} />)

        // Query by the specific card slots so even when name === shortDescription
        // we target the right element unambiguously.
        const titleEl = container.querySelector('[data-slot="card-title"]')
        const descEl = container.querySelector('[data-slot="card-description"]')

        const result =
          titleEl !== null &&
          descEl !== null &&
          titleEl.textContent?.trim() === service.name.trim() &&
          descEl.textContent?.trim() === service.shortDescription.trim()

        unmount()
        return result
      }),
      { numRuns: 50 },
    )
  })
})
