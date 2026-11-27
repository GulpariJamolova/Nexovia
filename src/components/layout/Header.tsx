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

/* O*NET-style header: white logo row on top, solid blue navigation bar below. */
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <p className="hidden text-sm font-semibold text-ink/70 sm:block">
          Career exploration for students
        </p>
        <button
          className="rounded p-2 text-navy md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="bg-navy">
        <nav className="mx-auto hidden max-w-6xl items-stretch gap-1 px-4 sm:px-6 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`border-b-4 px-4 py-2.5 text-sm font-semibold text-white transition ${
                isActive(l.href)
                  ? "border-white bg-white/15"
                  : "border-transparent hover:bg-white/10"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        {open && (
          <nav className="px-4 py-2 md:hidden" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`block rounded px-3 py-3 text-base font-semibold text-white ${
                  isActive(l.href) ? "bg-white/15" : "hover:bg-white/10"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
        {!open && <div className="h-1 md:hidden" />}
      </div>
    </header>
  );
}
