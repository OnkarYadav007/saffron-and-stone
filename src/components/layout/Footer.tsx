import Link from "next/link";

const footerLinks = [
  {
    title: "Visit Us",
    links: [
      { label: "Menu",        href: "/menu"        },
      { label: "About",       href: "/about"       },
      { label: "Gallery",     href: "/gallery"     },
      { label: "Reserve",     href: "/reservation" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us",  href: "/contact"                           },
      { label: "Instagram",   href: "https://instagram.com"              },
      { label: "Facebook",    href: "https://facebook.com"               },
      { label: "Zomato",      href: "https://zomato.com"                 },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-900 border-t border-gold-500/10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl text-gold-shimmer mb-3">Saffron &amp; Stone</h3>
          <p className="text-cream/40 text-sm leading-relaxed mb-6">
            Where Every Bite Tells a Story.<br />
            Modern Indian &amp; Continental Fine Dining, Pune.
          </p>
          <div className="space-y-2 text-cream/50 text-sm">
            <p>📍 MG Road, Koregaon Park, Pune 411001</p>
            <p>📞 +91 20 4567 8900</p>
            <p>✉️ reservations@saffronandstone.in</p>
            <p>🕐 Tue–Sun: 12:00–15:00 &amp; 19:00–23:30</p>
          </div>
        </div>

        {/* Nav columns */}
        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 className="text-gold-500 uppercase tracking-widest text-xs font-semibold mb-5">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/50 hover:text-gold-400 text-sm transition-colors duration-200"
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

      {/* Gold divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-cream/30 text-xs">
        <span>© {new Date().getFullYear()} Saffron &amp; Stone. All rights reserved.</span>
        <span className="flex gap-4">
          <Link href="/contact" className="hover:text-gold-400 transition-colors">Privacy</Link>
          <Link href="/contact" className="hover:text-gold-400 transition-colors">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
