"use client";
import { useState } from "react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Home",        href: "/"            },
      { label: "Our Menu",    href: "/menu"        },
      { label: "Our Story",   href: "/about"       },
      { label: "Gallery",     href: "/gallery"     },
      { label: "Reserve",     href: "/reservation" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us",  href: "/contact"              },
      { label: "Instagram",   href: "https://instagram.com" },
      { label: "Facebook",    href: "https://facebook.com"  },
      { label: "Zomato",      href: "https://zomato.com"    },
      { label: "Swiggy",      href: "https://swiggy.com"    },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0C0C0C] border-t border-[#D4AF37]/25 text-[#FAF8F5]">
      {/* Newsletter Signup Banner */}
      <div className="border-b border-[#D4AF37]/15 bg-gradient-to-b from-[#141414] to-[#0C0C0C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[#FBBF24] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
                The Epicurean Circle
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
                Receive Exclusive Tasting Invitations
              </h3>
              <p className="text-[#D1C9BC] text-sm mt-2 max-w-lg">
                Subscribe for seasonal menu launches, secret chef dinners, and priority holiday reservations in Pune.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="bg-[#10B981]/15 border border-[#10B981]/40 rounded-xl p-4 text-[#34D399] text-sm flex items-center gap-3">
                  <span className="text-xl">✓</span>
                  <span>Thank you for subscribing! We look forward to welcoming you soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3.5 rounded-full bg-[#1C1C1C] border border-[#D4AF37]/35 text-[#FAF8F5] placeholder-[#8C8476] text-sm focus:outline-none focus:border-[#FBBF24] focus:ring-1 focus:ring-[#FBBF24]"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    className="btn-gold py-3.5 px-7 text-xs font-bold whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl font-bold text-gold-shimmer mb-3">
            Saffron &amp; Stone
          </h3>
          <p className="text-[#FAF8F5] font-serif italic text-lg mb-4">
            &ldquo;Where Every Bite Tells a Story.&rdquo;
          </p>
          <p className="text-[#D1C9BC] text-sm leading-relaxed mb-6 max-w-md">
            Modern Indian &amp; Continental fine dining crafted with heritage spices, artisanal techniques, and passion in Koregaon Park, Pune.
          </p>

          <div className="space-y-2 text-[#FAF8F5] text-sm">
            <p className="flex items-center gap-3">
              <span className="text-[#FBBF24]">📍</span>
              <span>42, MG Road, Koregaon Park, Pune, Maharashtra 411001</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#FBBF24]">📞</span>
              <a href="tel:+912045678900" className="hover:text-[#FBBF24] transition-colors underline-offset-4 hover:underline">
                +91 20 4567 8900
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#FBBF24]">✉️</span>
              <a href="mailto:reservations@saffronandstone.in" className="hover:text-[#FBBF24] transition-colors underline-offset-4 hover:underline">
                reservations@saffronandstone.in
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-[#FBBF24]">🕐</span>
              <span>Tue–Sun: 12:00–15:00 &amp; 19:00–23:30 (Mon Closed)</span>
            </p>
          </div>
        </div>

        {/* Links Columns */}
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 className="text-[#FBBF24] uppercase tracking-widest text-xs font-bold mb-5 pb-1 border-b border-[#D4AF37]/20 inline-block">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#D1C9BC] hover:text-[#FBBF24] text-sm transition-colors duration-200 block"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Gold Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#FAF8F5]/80 text-xs">
        <span>© {new Date().getFullYear()} Saffron &amp; Stone. All rights reserved. Crafted for Pune.</span>
        <div className="flex gap-6">
          <Link href="/contact" className="hover:text-[#FBBF24] transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-[#FBBF24] transition-colors">Terms of Service</Link>
          <Link href="/reservation" className="text-[#FBBF24] hover:underline transition-colors font-medium">Table Booking</Link>
        </div>
      </div>
    </footer>
  );
}
