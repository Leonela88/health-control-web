import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div className="space-y-2">
            <p className="text-lg font-bold text-foreground">Health-Control</p>
            <p className="text-sm text-muted-foreground">
              Especialistas en osteo-presura para aliviar dolores físicos.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Contacto
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+34600000000"
                  className="transition-colors hover:text-foreground"
                >
                  +34 600 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@health-control.es"
                  className="transition-colors hover:text-foreground"
                >
                  info@health-control.es
                </a>
              </li>
            </ul>
          </div>

          {/* Social media */}
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Redes Sociales
            </p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <Link
                  href="https://instagram.com/healthcontrol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/healthcontrol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {currentYear} Health-Control. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
