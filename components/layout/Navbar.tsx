'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

const ROUTES = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
  { href: "/resenas", label: "Reseñas" },
];

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
      className="rounded-xl p-2.5 transition-all hover:bg-[#dfa408]/20 hover:text-[#dfa408] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dfa408]"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#dfa408]/20 bg-[#f7f3ec]/95 dark:bg-[#1c3557]/95 backdrop-blur supports-[backdrop-filter]:bg-[#f7f3ec]/80 dark:supports-[backdrop-filter]:bg-[#1c3557]/80 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-bold text-[#1c3557] dark:text-[#f7f3ec] transition-all hover:text-[#dfa408] dark:hover:text-[#dfa408] flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#dfa408] to-[#c99207] flex items-center justify-center text-[#1c3557] font-bold">
            HC
          </div>
          <span className="hidden sm:inline">Health-Control</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {ROUTES.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-[#dfa408] text-[#1c3557] shadow-md"
                      : "text-[#1c3557] dark:text-[#f7f3ec] hover:bg-[#dfa408]/20 hover:text-[#dfa408]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Dark mode toggle */}
        <div className="hidden md:block">
          <DarkModeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-xl p-2 text-[#1c3557] dark:text-[#f7f3ec] hover:bg-[#dfa408]/20"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#dfa408]/20 bg-[#f7f3ec] dark:bg-[#1c3557] px-4 py-4">
          <ul className="space-y-2">
            {ROUTES.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                      isActive
                        ? "bg-[#dfa408] text-[#1c3557]"
                        : "text-[#1c3557] dark:text-[#f7f3ec] hover:bg-[#dfa408]/20"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-[#dfa408]/20 flex justify-center">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
