"use client";
import { useState } from "react";
import Link from "next/link";

const contactDetails = [
  {
    icon: "📍",
    label: "Our Address",
    value: "42, MG Road, Koregaon Park\nPune, Maharashtra 411001",
    link: "https://maps.google.com/?q=Koregaon+Park+Pune",
  },
  {
    icon: "📞",
    label: "Phone / Booking Concierge",
    value: "+91 20 4567 8900\n+91 98230 12345",
    link: "tel:+912045678900",
  },
  {
    icon: "✉️",
    label: "Email Enquiries",
    value: "reservations@saffronandstone.in\nevents@saffronandstone.in",
    link: "mailto:reservations@saffronandstone.in",
  },
  {
    icon: "🕐",
    label: "Dining Hours",
    value: "Lunch: 12:00 – 15:00\nDinner: 19:00 – 23:30\n(Tuesday to Sunday · Monday Closed)",
    link: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden bg-[#121212]">
        <img
          src="/images/hero.jpg"
          alt="Contact us background"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#FBBF24] text-xs tracking-[0.4em] uppercase font-sans font-bold mb-3">
            Concierge &amp; Inquiries
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#FFFFFF]">Contact Us</h1>
          <div className="gold-rule mt-4" />
          <p className="text-[#FAF8F5] text-sm md:text-base mt-3 max-w-xl mx-auto font-medium">
            We are here to assist with dining reservations, private dining suites, and private events in Pune.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column — Information */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFFFF] mb-2 reveal-left">
              Find Us in Koregaon Park
            </h2>
            <div className="gold-rule-left mb-8 reveal-left" />

            <div className="space-y-8">
              {contactDetails.map((info, i) => (
                <div
                  key={info.label}
                  className="flex gap-5 items-start reveal-left p-5 rounded-2xl bg-[#141414] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-3xl mt-0.5 flex-shrink-0">{info.icon}</span>
                  <div>
                    <p className="text-[#FBBF24] text-xs font-bold tracking-widest uppercase font-sans mb-1.5">
                      {info.label}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-[#FAF8F5] hover:text-[#FBBF24] text-base leading-relaxed whitespace-pre-line font-medium transition-colors"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#FAF8F5] text-base leading-relaxed whitespace-pre-line font-medium">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Channels */}
            <div className="mt-10 pt-8 border-t border-[#D4AF37]/25 reveal-left">
              <p className="text-[#FBBF24] text-xs tracking-widest uppercase font-bold font-sans mb-4">
                Connect on Social Channels
              </p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { label: "Instagram",  href: "https://instagram.com"  },
                  { label: "Facebook",   href: "https://facebook.com"   },
                  { label: "Zomato",     href: "https://zomato.com"     },
                  { label: "Google Maps",href: "https://maps.google.com/?q=Koregaon+Park+Pune" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-[#D4AF37]/30 bg-[#161616] text-[#FAF8F5] hover:border-[#FBBF24] hover:text-[#FBBF24] text-xs font-bold tracking-wider uppercase transition-all duration-200"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map Box */}
            <div className="mt-10 h-56 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/25 bg-[#141414] reveal-left flex flex-col items-center justify-center p-6 text-center shadow-lg">
              <div className="text-4xl mb-2">🗺️</div>
              <h3 className="font-serif text-lg font-bold text-[#FFFFFF] mb-1">
                Koregaon Park Dining Hub
              </h3>
              <p className="text-[#D1C9BC] text-xs mb-4">
                Valet parking available at the main gate.
              </p>
              <a
                href="https://maps.google.com/?q=Koregaon+Park+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-xs py-2 px-5"
              >
                Open Google Maps Navigation →
              </a>
            </div>
          </div>

          {/* Right Column — Message Form */}
          <div className="reveal-right">
            <div className="card-dark p-8 sm:p-10 border-2 border-[#D4AF37]/30">
              <h2 className="font-serif text-3xl font-bold text-[#FFFFFF] mb-2">
                Send a Message
              </h2>
              <p className="text-[#D1C9BC] text-sm mb-6">
                Our hospitality director typically responds within 2 business hours.
              </p>
              <div className="gold-rule-left mb-8" />

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#10B981]/15 border border-[#10B981]/40 text-center animate-fade-in">
                  <div className="text-4xl mb-3">✓</div>
                  <h3 className="font-serif text-2xl font-bold text-[#FFFFFF] mb-2">
                    Message Received
                  </h3>
                  <p className="text-[#FAF8F5] text-sm leading-relaxed mb-6">
                    Thank you for reaching out to Saffron &amp; Stone. Our concierge team has received your note and will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline-gold text-xs py-2.5 px-6"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="input-dark"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="rahul@example.com"
                        className="input-dark"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="input-dark"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                      Topic of Inquiry *
                    </label>
                    <select id="contact-subject" name="subject" required className="input-dark">
                      <option value="">Select an option</option>
                      <option>General Table Inquiry</option>
                      <option>Private Dining Suite / Celebration</option>
                      <option>Corporate Dinner Booking</option>
                      <option>Chef&apos;s Tasting Experience</option>
                      <option>Feedback &amp; Reviews</option>
                      <option>Media &amp; Press Relations</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="How may our kitchen and concierge serve you?"
                      className="input-dark resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full justify-center text-sm py-4 font-bold">
                    ✦ Send Message
                  </button>
                </form>
              )}

              {/* Instant Table Booking Box */}
              <div className="mt-10 p-6 border-2 border-[#D4AF37]/25 rounded-2xl bg-[#1C1C1C] text-center">
                <p className="text-[#FFFFFF] font-serif text-lg font-bold mb-1">
                  Ready to Book a Table Tonight?
                </p>
                <p className="text-[#D1C9BC] text-xs mb-4">
                  Instant table reservations with preferred seating selections.
                </p>
                <Link href="/reservation" className="btn-gold text-xs py-2.5 px-6 font-bold">
                  ✦ Online Reservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
