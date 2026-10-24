import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Saffron & Stone — find us at Koregaon Park, Pune. Call +91 20 4567 8900 or email reservations@saffronandstone.in.",
};

const contactDetails = [
  {
    icon: "📍",
    label: "Address",
    value: "42, MG Road, Koregaon Park\nPune, Maharashtra 411001",
    link: "https://maps.google.com/?q=Koregaon+Park+Pune",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 20 4567 8900",
    link: "tel:+912045678900",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "reservations@saffronandstone.in",
    link: "mailto:reservations@saffronandstone.in",
  },
  {
    icon: "🕐",
    label: "Hours",
    value: "Tuesday – Sunday\n12:00–15:00 & 19:00–23:30\nMonday: Closed",
    link: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-56 flex items-center justify-center overflow-hidden bg-surface-800">
        <img src="/images/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="relative z-10 text-center">
          <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-3">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream">Contact Us</h1>
          <div className="gold-rule mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Info */}
          <div>
            <h2 className="font-serif text-3xl text-cream mb-2 reveal-left">
              Find Us in Pune
            </h2>
            <div className="gold-rule-left mb-8 reveal-left" />

            <div className="space-y-7">
              {contactDetails.map((info, i) => (
                <div
                  key={info.label}
                  className="flex gap-5 items-start reveal-left"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-2xl mt-0.5 flex-shrink-0">{info.icon}</span>
                  <div>
                    <p className="text-gold-500/80 text-xs tracking-widest uppercase font-sans mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-cream/70 hover:text-gold-400 text-sm leading-relaxed whitespace-pre-line transition-colors"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-cream/70 text-sm leading-relaxed whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-10 pt-8 border-t border-gold-500/15 reveal-left">
              <p className="text-gold-500/70 text-xs tracking-widest uppercase font-sans mb-4">Follow Us</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: "Instagram",  href: "https://instagram.com"  },
                  { label: "Facebook",   href: "https://facebook.com"   },
                  { label: "Zomato",     href: "https://zomato.com"     },
                  { label: "Swiggy",     href: "https://swiggy.com"     },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full border border-gold-500/20 text-cream/60 hover:border-gold-500/50 hover:text-gold-400 text-xs font-medium tracking-wide transition-all duration-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-10 h-48 rounded-2xl overflow-hidden border border-gold-500/15 bg-surface-700 reveal-left flex items-center justify-center">
              <div className="text-center text-cream/30">
                <div className="text-3xl mb-2">🗺️</div>
                <p className="text-xs">Koregaon Park, Pune</p>
                <a
                  href="https://maps.google.com/?q=Koregaon+Park+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500/70 hover:text-gold-400 text-xs mt-2 inline-block transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="reveal-right">
            <h2 className="font-serif text-3xl text-cream mb-2">Send a Message</h2>
            <div className="gold-rule-left mb-8" />

            <form action="#" method="GET" className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Name</label>
                  <input id="contact-name" name="name" type="text" placeholder="Your full name" className="input-dark" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Email</label>
                  <input id="contact-email" name="email" type="email" placeholder="you@example.com" className="input-dark" />
                </div>
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Phone (Optional)</label>
                <input id="contact-phone" name="phone" type="tel" placeholder="+91 98765 43210" className="input-dark" />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Subject</label>
                <select id="contact-subject" name="subject" className="input-dark">
                  <option value="">Select a topic</option>
                  <option>General Enquiry</option>
                  <option>Event / Private Dining</option>
                  <option>Corporate Booking</option>
                  <option>Feedback</option>
                  <option>Media / Press</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help…"
                  className="input-dark resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full justify-center">
                Send Message
              </button>

              <p className="text-cream/30 text-xs text-center">
                Connect a form service (Formspree / Netlify Forms) for live submissions.
              </p>
            </form>

            {/* Quick reservation CTA */}
            <div className="mt-8 p-6 border border-gold-500/20 rounded-xl bg-gold-500/5 text-center">
              <p className="text-cream/60 text-sm mb-3">Looking to reserve a table?</p>
              <Link href="/reservation" className="btn-gold">
                Reserve Online
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
