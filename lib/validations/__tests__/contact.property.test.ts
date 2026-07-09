import { describe, it, expect } from 'vitest'
import * as fc from 'fast-check'
import { contactSchema } from '../contact'

/**
 * Validates: Requirements 3.2
 *
 * Property 4: Validación rechaza campos obligatorios vacíos
 *
 * Para cualquier objeto de datos de formulario donde al menos uno de los campos
 * `nombre`, `email` o `mensaje` sea una cadena vacía o compuesta sólo de espacios
 * en blanco, contactSchema.safeParse debe retornar success: false con fieldErrors.
 */
describe('Property 4: Validación rechaza campos obligatorios vacíos', () => {
  // Base de datos válidos para los campos que no se están probando
  const validBase = {
    nombre: 'María García',
    email: 'maria@example.com',
    telefono: undefined,
    tipoDolor: 'Dolor de espalda',
    mensaje: 'Me gustaría información sobre los tratamientos disponibles.',
  }

  // Generador de cadenas de sólo espacios en blanco (al menos un carácter)
  const whitespaceOnly = fc
    .string({ minLength: 1 })
    .filter((s) => s.trim().length === 0)

  // Cadena vacía o sólo espacios
  const emptyOrWhitespace = fc.oneof(fc.constant(''), whitespaceOnly)

  it('rechaza cuando nombre es vacío o solo espacios en blanco', () => {
    fc.assert(
      fc.property(emptyOrWhitespace, (emptyNombre) => {
        const result = contactSchema.safeParse({ ...validBase, nombre: emptyNombre })
        expect(result.success).toBe(false)
        if (!result.success) {
          expect(result.error.flatten().fieldErrors.nombre).toBeDefined()
          expect(result.error.flatten().fieldErrors.nombre!.length).toBeGreaterThan(0)
        }
      }),
    )
  })

  it('rechaza cuando email es vacío o solo espacios en blanco', () => {
    fc.assert(
      fc.property(emptyOrWhitespace, (emptyEmail) => {
        const result = contactSchema.safeParse({ ...validBase, email: emptyEmail })
        expect(result.success).toBe(false)
        if (!result.success) {
          expect(result.error.flatten().fieldErrors.email).toBeDefined()
          expect(result.error.flatten().fieldErrors.email!.length).toBeGreaterThan(0)
        }
      }),
    )
  })

  it('rechaza cuando mensaje es vacío o solo espacios en blanco', () => {
    fc.assert(
      fc.property(emptyOrWhitespace, (emptyMensaje) => {
        const result = contactSchema.safeParse({ ...validBase, mensaje: emptyMensaje })
        expect(result.success).toBe(false)
        if (!result.success) {
          expect(result.error.flatten().fieldErrors.mensaje).toBeDefined()
          expect(result.error.flatten().fieldErrors.mensaje!.length).toBeGreaterThan(0)
        }
      }),
    )
  })
})

/**
 * Validates: Requirements 3.3
 *
 * Property 5: Validación de formato de email
 *
 * Para cualquier cadena que no cumpla el formato de email válido, safeParse
 * debe retornar success: false. Para cualquier email válido, debe retornar
 * success: true en el campo email.
 */
describe('Property 5: Validación de formato de email', () => {
  const validBase = {
    nombre: 'Juan López',
    telefono: undefined,
    tipoDolor: 'Dolor cervical',
    mensaje: 'Quisiera consultar sobre el tratamiento de osteo-presura.',
  }

  it('acepta emails válidos con formato estándar (local@domain.tld)', () => {
    // fc.emailAddress() puede generar caracteres especiales en la parte local
    // que Zod rechaza (ej: "!a.a@a.aa"). Usamos un generador controlado que
    // produce emails simples y ampliamente aceptados: [a-z0-9]+@[a-z0-9]+.[a-z]{2,}
    const safeDomain = fc.string({ minLength: 2, maxLength: 6 }).filter((s) => /^[a-z]{2,6}$/.test(s))
    const safeLocal = fc.string({ minLength: 1, maxLength: 20 }).filter((s) => /^[a-z0-9]+$/.test(s))
    const safeHostname = fc.string({ minLength: 2, maxLength: 10 }).filter((s) => /^[a-z0-9]+$/.test(s))
    const safeEmail = fc.tuple(safeLocal, safeHostname, safeDomain).map(
      ([local, host, tld]) => `${local}@${host}.${tld}`,
    )

    fc.assert(
      fc.property(safeEmail, (validEmail) => {
        const result = contactSchema.safeParse({ ...validBase, email: validEmail })
        expect(result.success).toBe(true)
      }),
    )
  })

  it('rechaza cadenas que claramente no son emails válidos (sin @)', () => {
    // Cadenas que no contienen '@' no pueden ser emails válidos
    const noAtSign = fc.string({ minLength: 1 }).filter((s) => !s.includes('@') && s.trim().length > 0)

    fc.assert(
      fc.property(noAtSign, (invalidEmail) => {
        const result = contactSchema.safeParse({ ...validBase, email: invalidEmail })
        expect(result.success).toBe(false)
        if (!result.success) {
          expect(result.error.flatten().fieldErrors.email).toBeDefined()
        }
      }),
    )
  })

  it('rechaza cadenas con formato claramente inválido (sin dominio, solo usuario@)', () => {
    // e.g. "usuario@" sin dominio
    const localPart = fc.string({ minLength: 1 }).filter((s) => /^[A-Za-z0-9]+$/.test(s))
    const missingDomain = localPart.map((local) => `${local}@`)

    fc.assert(
      fc.property(missingDomain, (invalidEmail) => {
        const result = contactSchema.safeParse({ ...validBase, email: invalidEmail })
        expect(result.success).toBe(false)
        if (!result.success) {
          expect(result.error.flatten().fieldErrors.email).toBeDefined()
        }
      }),
    )
  })
})
