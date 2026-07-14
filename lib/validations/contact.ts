import { z } from 'zod'

export const contactSchema = z.object({
  nombre:    z.string().trim().min(1, 'El nombre es obligatorio').max(100),
  email:     z.string().trim().email('Email no válido'),
  telefono:  z.string().optional(),
  tipoDolor: z.string().min(1, 'Selecciona un tipo de dolor o servicio'),
  mensaje:   z.string().trim().min(1, 'El mensaje es obligatorio').max(2000),
})

export type ContactFormData = z.infer<typeof contactSchema>
