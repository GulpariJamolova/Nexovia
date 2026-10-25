"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/find", label: "Find my career" },
  { href: "/career", label: "Explore a career" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive(l.href)
                  ? "bg-lavender text-navy"
                  : "text-ink/80 hover:bg-lavender/60 hover:text-navy"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded-lg p-2 text-navy md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/10 bg-white px-4 py-3 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`block rounded-xl px-3 py-3 text-base font-semibold ${
                isActive(l.href) ? "bg-lavender text-navy" : "text-ink hover:bg-lavender"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
