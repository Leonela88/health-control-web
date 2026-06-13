'use client'
import Link from 'next/link'

export default function Error() {
  return (
    <main className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-6xl font-bold text-destructive">500</h1>
      <h2 className="mb-4 text-2xl font-semibold">Algo ha salido mal</h2>
      <p className="mb-8 text-muted-foreground">
        Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Volver al inicio
      </Link>
    </main>
  )
}