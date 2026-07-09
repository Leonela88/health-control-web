import type { Metadata } from 'next'
import ContactForm from '@/components/contacto/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Reserva tu cita o consulta con nuestros especialistas en osteo-presura y fisioterapia.',
  openGraph: {
    title: 'Contacto | Health-Control',
    description:
      'Reserva tu cita o consulta con nuestros especialistas en osteo-presura y fisioterapia.',
    url: 'https://health-control.es/contacto',
  },
}

export default function ContactoPage() {
  return (
    <main className="container mx-auto max-w-xl px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Contacto</h1>
      <p className="mb-8 text-muted-foreground">
        Rellena el formulario y te responderemos lo antes posible.
      </p>
      <ContactForm />
    </main>
  )
}