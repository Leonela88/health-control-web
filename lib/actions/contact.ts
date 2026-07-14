'use server'
import { contactSchema } from '@/lib/validations/contact'
import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export type ContactActionState = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

export async function contactAction(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const raw = Object.fromEntries(formData)
  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    return {
      success: false,
      message: 'Por favor, revisa los campos del formulario.',
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  try {
    await prisma.contactMessage.create({ data: parsed.data })
    revalidatePath('/contacto')
    return { success: true, message: '¡Mensaje enviado! Te contactaremos pronto.' }
  } catch {
    return { success: false, message: 'Error al enviar el mensaje. Inténtalo de nuevo.' }
  }
}
