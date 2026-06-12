'use client'

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

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
      className="rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-bold text-foreground transition-colors hover:text-primary"
        >
          Health-Control
        </Link>

        {/* Navigation links */}
        <ul className="flex items-center gap-1 sm:gap-2">
          {ROUTES.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark mode toggle */}
        <DarkModeToggle />
      </nav>
    </header>
  );
}
