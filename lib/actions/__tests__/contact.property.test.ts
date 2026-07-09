/**
 * Property 6: ContactMessage round-trip persistence
 *
 * Validates: Requirements 4.2 — contactAction persists all form fields faithfully
 *
 * For each generated valid ContactFormData:
 *  - persist via prisma.contactMessage.create
 *  - retrieve by the returned id
 *  - assert every field matches exactly
 *  - assert creadoEn is non-null
 */
import fc from 'fast-check'
import { PrismaClient } from '@prisma/client'
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { describe, beforeAll, afterAll, it, expect } from 'vitest'

const TEST_DB_PATH = path.resolve(__dirname, '../../../prisma/test.db')
const TEST_DB_URL = `file:${TEST_DB_PATH}`

const testPrisma = new PrismaClient({
  datasources: { db: { url: TEST_DB_URL } },
})

describe('Property 6: ContactMessage round-trip persistence', () => {
  beforeAll(() => {
    execSync('node node_modules/prisma/build/index.js db push --schema=./prisma/schema.prisma --skip-generate --accept-data-loss', {
      env: { ...process.env, DATABASE_URL: TEST_DB_URL },
      cwd: path.resolve(__dirname, '../../..'),
      stdio: 'pipe',
    })
  })

  afterAll(async () => {
    await testPrisma.$disconnect()
    if (fs.existsSync(TEST_DB_PATH)) fs.unlinkSync(TEST_DB_PATH)
  })

  it('round-trip: all fields are persisted and retrieved correctly', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.record({
          nombre: fc
            .string({ minLength: 1, maxLength: 100 })
            .filter((s) => s.trim().length > 0),
          email: fc.emailAddress(),
          telefono: fc.option(fc.string({ minLength: 1, maxLength: 30 }), {
            nil: undefined,
          }),
          tipoDolor: fc.constantFrom(
            'Dolor de espalda',
            'Dolor de cuello',
            'Dolor de rodilla',
          ),
          mensaje: fc
            .string({ minLength: 1, maxLength: 2000 })
            .filter((s) => s.trim().length > 0),
        }),
        async (data) => {
          const created = await testPrisma.contactMessage.create({
            data: {
              nombre: data.nombre,
              email: data.email,
              telefono: data.telefono ?? null,
              tipoDolor: data.tipoDolor,
              mensaje: data.mensaje,
            },
          })

          const retrieved = await testPrisma.contactMessage.findUnique({
            where: { id: created.id },
          })

          expect(retrieved).not.toBeNull()
          expect(retrieved!.nombre).toBe(data.nombre)
          expect(retrieved!.email).toBe(data.email)
          // telefono: undefined input is stored as null
          expect(retrieved!.telefono).toBe(data.telefono ?? null)
          expect(retrieved!.tipoDolor).toBe(data.tipoDolor)
          expect(retrieved!.mensaje).toBe(data.mensaje)
          expect(retrieved!.creadoEn).not.toBeNull()

          // cleanup after each property run
          await testPrisma.contactMessage.delete({ where: { id: created.id } })
        },
      ),
      { numRuns: 10 },
    )
  })
})
