"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",            label: "Home"        },
  { href: "/menu",        label: "Menu"        },
  { href: "/about",       label: "About"       },
  { href: "/gallery",     label: "Gallery"     },
  { href: "/reservation", label: "Reservation" },
  { href: "/contact",     label: "Contact"     },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#D4AF37]/35 shadow-[0_10px_35px_rgba(0,0,0,0.85)] py-3.5"
          : "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-[0_4px_25px_rgba(0,0,0,0.6)] py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col leading-none group py-1" aria-label="Saffron & Stone Home">
          <span className="font-serif text-2xl font-bold tracking-wider text-gold-shimmer group-hover:scale-[1.02] transition-transform">
            Saffron &amp; Stone
          </span>
          <span className="text-[10px] text-[#D1C9BC] tracking-[0.25em] uppercase mt-1 font-sans font-medium">
            Pune · Modern Indian &amp; Continental
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-[13px] font-semibold tracking-widest uppercase transition-all duration-200 py-1.5 px-1 block ${
                      isActive
                        ? "text-[#FBBF24] font-bold"
                        : "text-[#FAF8F5] hover:text-[#FBBF24]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#FBBF24] rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Header Action Button */}
          <Link
            href="/reservation"
            className="btn-gold text-xs py-2.5 px-6 font-bold"
          >
            ✦ Book a Table
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2.5 text-[#FAF8F5] hover:text-[#FBBF24] bg-[#161616] border border-[#D4AF37]/30 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-[2px] w-full bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2 bg-[#FBBF24]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-current transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2 bg-[#FBBF24]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Slide-in Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100 border-t border-[#D4AF37]/20 mt-3" : "max-h-0 opacity-0"
        } bg-[#111111]/98 backdrop-blur-xl shadow-2xl`}
      >
        <ul className="flex flex-col px-6 py-5 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between py-3 text-sm font-semibold tracking-wider uppercase border-b border-[#D4AF37]/10 transition-colors ${
                    isActive ? "text-[#FBBF24] pl-2" : "text-[#FAF8F5] hover:text-[#FBBF24]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="text-xs text-[#FBBF24]">●</span>
                  ) : (
                    <span className="text-xs text-[#8C8476]">→</span>
                  )}
                </Link>
              </li>
            );
          })}

          <li className="pt-4 pb-2">
            <Link
              href="/reservation"
              onClick={() => setMenuOpen(false)}
              className="btn-gold w-full justify-center text-xs py-3"
            >
              ✦ Book a Table Online
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
