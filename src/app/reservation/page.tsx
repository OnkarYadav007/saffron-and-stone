import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Saffron & Stone, Pune. Book online for romantic dinners, family celebrations, or corporate events.",
};

export default function ReservationPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-56 flex items-center justify-center overflow-hidden bg-surface-800">
        <img src="/images/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base/60 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-3">Secure Your Seat</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream">Reservations</h1>
          <div className="gold-rule mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Sidebar info */}
          <div className="lg:col-span-1 space-y-6 reveal-left">

            <div className="card-dark p-6">
              <h3 className="font-serif text-lg text-gold-400 mb-4">Dining Hours</h3>
              <div className="space-y-3 text-cream/60 text-sm">
                <div className="flex justify-between border-b border-gold-500/10 pb-2">
                  <span>Lunch</span>
                  <span className="text-cream/80">12:00 – 15:00</span>
                </div>
                <div className="flex justify-between border-b border-gold-500/10 pb-2">
                  <span>Dinner</span>
                  <span className="text-cream/80">19:00 – 23:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Closed</span>
                  <span className="text-red-400/80">Monday</span>
                </div>
              </div>
            </div>

            <div className="card-dark p-6">
              <h3 className="font-serif text-lg text-gold-400 mb-4">Dining Spaces</h3>
              <ul className="space-y-3 text-cream/60 text-sm">
                {[
                  { label: "Main Dining Room",   seats: "Up to 80" },
                  { label: "Rooftop Terrace",    seats: "Up to 40" },
                  { label: "Private Suite",      seats: "Up to 20" },
                  { label: "Chef's Table",       seats: "Up to 8"  },
                ].map((space) => (
                  <li key={space.label} className="flex justify-between items-center border-b border-gold-500/10 pb-2 last:border-0 last:pb-0">
                    <span>{space.label}</span>
                    <span className="tag-gold">{space.seats}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-dark p-6">
              <h3 className="font-serif text-lg text-gold-400 mb-3">Need Help?</h3>
              <p className="text-cream/50 text-sm leading-relaxed mb-4">
                For large groups (12+), private events, or special arrangements, call us directly.
              </p>
              <a href="tel:+912045678900" className="btn-outline-gold w-full justify-center text-xs">
                📞 +91 20 4567 8900
              </a>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2 reveal-right">
            <div className="card-dark p-8 md:p-10">
              <h2 className="font-serif text-2xl text-cream mb-2">Book Your Table</h2>
              <p className="text-cream/40 text-sm mb-8">
                Reservations recommended — especially for weekends and festival seasons.
              </p>

              <form action="#" method="GET" className="space-y-6">
                {/* Personal info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="res-name" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Full Name *</label>
                    <input id="res-name" name="name" type="text" placeholder="Jane Doe" className="input-dark" required />
                  </div>
                  <div>
                    <label htmlFor="res-phone" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Phone *</label>
                    <input id="res-phone" name="phone" type="tel" placeholder="+91 98765 43210" className="input-dark" required />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="res-email" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Email</label>
                    <input id="res-email" name="email" type="email" placeholder="you@example.com" className="input-dark" />
                  </div>
                </div>

                <div className="h-px bg-gold-500/10" />

                {/* Booking details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="res-date" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Date *</label>
                    <input id="res-date" name="date" type="date" className="input-dark" required />
                  </div>
                  <div>
                    <label htmlFor="res-time" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Time *</label>
                    <select id="res-time" name="time" className="input-dark" required>
                      <option value="">Select</option>
                      <optgroup label="Lunch">
                        {["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"].map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Dinner">
                        {["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="res-guests" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Guests *</label>
                    <select id="res-guests" name="guests" className="input-dark" required>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="res-section" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Seating Preference</label>
                    <select id="res-section" name="section" className="input-dark">
                      <option>Main Dining Room</option>
                      <option>Rooftop Terrace</option>
                      <option>Private Suite</option>
                      <option>Chef&apos;s Table</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="res-occasion" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Occasion</label>
                    <select id="res-occasion" name="occasion" className="input-dark">
                      <option value="">None</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Business Dinner</option>
                      <option>Proposal</option>
                      <option>Family Gathering</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="res-notes" className="block text-xs text-cream/50 uppercase tracking-widest mb-2">Special Requests</label>
                  <textarea
                    id="res-notes"
                    name="notes"
                    rows={4}
                    placeholder="Dietary requirements, allergies, accessibility needs, decoration requests…"
                    className="input-dark resize-none"
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center text-sm py-4">
                  ✦ Confirm Reservation
                </button>

                <p className="text-cream/25 text-xs text-center leading-relaxed">
                  Your reservation request will be confirmed via email or phone within 2 hours.
                  Connect a form backend (Formspree / Netlify Forms) for live booking submissions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
