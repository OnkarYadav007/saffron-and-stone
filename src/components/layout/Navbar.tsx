"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",            label: "Home"        },
  { href: "/menu",        label: "Menu"        },
  { href: "/about",       label: "About"       },
  { href: "/gallery",     label: "Gallery"     },
  { href: "/contact",     label: "Contact"     },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface-900/95 backdrop-blur-md border-b border-gold-500/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-serif text-xl font-bold text-gold-shimmer tracking-wide group-hover:opacity-90 transition-opacity">
            Saffron &amp; Stone
          </span>
          <span className="text-[9px] text-cream/40 tracking-[0.2em] uppercase mt-0.5 font-sans">
            Pune · Fine Dining
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-sm font-medium tracking-wider uppercase transition-colors duration-200 pb-0.5
                  ${
                    pathname === link.href
                      ? "text-gold-400"
                      : "text-cream/70 hover:text-gold-400"
                  }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold-500 rounded-full" />
                )}
              </Link>
            </li>
          ))}

          <li>
            <Link href="/reservation" className="btn-gold text-xs py-2.5 px-6">
              Reserve
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-cream/70 hover:text-gold-400 transition-colors"
          aria-label="Toggle navigation"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } bg-surface-900/98 backdrop-blur-md border-b border-gold-500/10`}
      >
        <ul className="flex flex-col px-6 py-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-3 text-sm font-medium tracking-wider uppercase border-b border-gold-500/10 transition-colors
                  ${pathname === link.href ? "text-gold-400" : "text-cream/70 hover:text-gold-400"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link href="/reservation" className="btn-gold w-full justify-center">
              Reserve a Table
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
