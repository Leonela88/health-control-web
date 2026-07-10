import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-[#dfa408]/30 bg-gradient-to-b from-white to-[#f7f3ec] dark:from-[#1c3557] dark:to-[#152943]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#dfa408] to-[#c99207] flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#1c3557]" />
              </div>
              <p className="text-2xl font-bold text-[#1c3557] dark:text-[#f7f3ec]">Health-Control</p>
            </div>
            <p className="text-base text-[#1c3557]/80 dark:text-[#f7f3ec]/90 max-w-md leading-relaxed">
              Especialistas en osteopresión para aliviar dolores físicos y restaurar el equilibrio natural de tu cuerpo.
            </p>
            <div className="flex gap-3 pt-2">
              <Link
                href="https://instagram.com/healthcontrol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#dfa408]/20 hover:bg-[#dfa408] flex items-center justify-center text-[#1c3557] dark:text-[#f7f3ec] hover:text-[#1c3557] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com/healthcontrol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#dfa408]/20 hover:bg-[#dfa408] flex items-center justify-center text-[#1c3557] dark:text-[#f7f3ec] hover:text-[#1c3557] transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-wide text-[#dfa408]">
              Contacto
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+34611639395"
                  className="flex items-center gap-2 text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#dfa408]"
                >
                  <Phone className="w-4 h-4" />
                  +34 611 639 395
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@health-control.es"
                  className="flex items-center gap-2 text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#dfa408] break-all"
                >
                  <Mail className="w-4 h-4" />
                  contact@health-control.es
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-wide text-[#dfa408]">
              Enlaces rápidos
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios"
                  className="text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#dfa408]"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#dfa408]"
                >
                  Reservar cita
                </Link>
              </li>
              <li>
                <Link
                  href="/resenas"
                  className="text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#dfa408]"
                >
                  Reseñas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#dfa408]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#1c3557]/70 dark:text-[#f7f3ec]/80 text-center sm:text-left">
              © {currentYear} Health Control-Pain Relief BCN. Todos los derechos reservados.
            </p>
            <p className="text-sm text-[#1c3557]/70 dark:text-[#f7f3ec]/80">
              Hecho con <Heart className="inline w-4 h-4 text-[#dfa408] fill-[#dfa408]" /> en Barcelona
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
