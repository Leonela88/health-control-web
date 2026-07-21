import Link from "next/link";
import { Mail, Phone, Instagram, Facebook, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t-2 border-[#d4a745]/30 bg-gradient-to-b from-white to-[#f7f3ec] dark:from-[#1c3557] dark:to-[#152943]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-2">            
              <p className="text-2xl font-bold text-[#1c3557] dark:text-[#f7f3ec]">Health-Control</p>
            </div>
            <p className="text-base text-[#1c3557]/80 dark:text-[#f7f3ec]/90 max-w-md leading-relaxed">
              Take control of your health            </p>
            <div className="flex gap-3 pt-2">
              <Link
                href="https://instagram.com/healthcontrol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#d4a745]/20 hover:bg-[#d4a745] flex items-center justify-center text-[#1c3557] dark:text-[#f7f3ec] hover:text-[#1c3557] transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://facebook.com/healthcontrol"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#d4a745]/20 hover:bg-[#d4a745] flex items-center justify-center text-[#1c3557] dark:text-[#f7f3ec] hover:text-[#1c3557] transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-wide text-[#d4a745]">
              Contacto
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+34611639395"
                  className="flex items-center gap-2 text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#d4a745]"
                >
                  <Phone className="w-4 h-4" />
                  +34 611 639 395
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@health-control.es"
                  className="flex items-center gap-2 text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#d4a745] break-all"
                >
                  <Mail className="w-4 h-4" />
                  contact@health-control.es
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-sm font-bold uppercase tracking-wide text-[#d4a745]">
              Enlaces rápidos
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios"
                  className="text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#d4a745]"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#d4a745]"
                >
                  Reservar cita
                </Link>
              </li>
              <li>
                <Link
                  href="/resenas"
                  className="text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#d4a745]"
                >
                  Reseñas
                </Link>
              </li>
              <li>
                <Link
                  href="/aviso-legal"
                  className="text-base text-[#1c3557] dark:text-[#f7f3ec] transition-colors hover:text-[#d4a745]"
                >
                  Aviso Legal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#d4a745]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#1c3557]/70 dark:text-[#f7f3ec]/80 text-center sm:text-left">
              © {currentYear} Health Control-Pain Relief BCN. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
