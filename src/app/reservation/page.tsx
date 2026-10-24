"use client";
import { useState } from "react";
import Link from "next/link";

export default function ReservationPage() {
  const [confirmed, setConfirmed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "20:00",
    guests: "2",
    section: "Main Dining Room",
    occasion: "Dinner",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden bg-[#121212]">
        <img
          src="/images/hero.jpg"
          alt="Reservation background"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#FBBF24] text-xs tracking-[0.4em] uppercase font-sans font-bold mb-3">
            Table Reservations
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#FFFFFF]">Reserve Your Experience</h1>
          <div className="gold-rule mt-4" />
          <p className="text-[#FAF8F5] text-sm md:text-base mt-3 max-w-xl mx-auto font-medium">
            Join us for an extraordinary culinary journey in Koregaon Park, Pune.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column — Hours & Dining Spaces */}
          <div className="lg:col-span-1 space-y-6 reveal-left">

            <div className="card-dark p-7 border-2 border-[#D4AF37]/25">
              <h3 className="font-serif text-xl font-bold text-[#FBBF24] mb-4 pb-2 border-b border-[#D4AF37]/20">
                Dining Hours
              </h3>
              <div className="space-y-4 text-sm font-medium">
                <div className="flex justify-between border-b border-[#D4AF37]/15 pb-2.5">
                  <span className="text-[#FAF8F5]">Lunch Service</span>
                  <span className="text-[#FBBF24] font-bold">12:00 – 15:00</span>
                </div>
                <div className="flex justify-between border-b border-[#D4AF37]/15 pb-2.5">
                  <span className="text-[#FAF8F5]">Dinner Service</span>
                  <span className="text-[#FBBF24] font-bold">19:00 – 23:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#FAF8F5]">Monday</span>
                  <span className="text-[#F87171] font-bold">Closed for Prep</span>
                </div>
              </div>
            </div>

            <div className="card-dark p-7 border-2 border-[#D4AF37]/25">
              <h3 className="font-serif text-xl font-bold text-[#FBBF24] mb-4 pb-2 border-b border-[#D4AF37]/20">
                Dining Enclaves
              </h3>
              <ul className="space-y-3.5 text-sm">
                {[
                  { label: "Main Dining Room",   seats: "Up to 80 Guests" },
                  { label: "Rooftop Terrace",    seats: "Up to 40 Guests" },
                  { label: "Private Suite",      seats: "Up to 20 Guests" },
                  { label: "Chef's Tasting Bar", seats: "Up to 8 Guests"  },
                ].map((space) => (
                  <li key={space.label} className="flex justify-between items-center border-b border-[#D4AF37]/15 pb-2.5 last:border-0 last:pb-0">
                    <span className="text-[#FAF8F5] font-medium">{space.label}</span>
                    <span className="tag-gold font-bold">{space.seats}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-dark p-7 border-2 border-[#D4AF37]/25 bg-[#141414]">
              <h3 className="font-serif text-xl font-bold text-[#FBBF24] mb-2">
                Large Parties &amp; Events
              </h3>
              <p className="text-[#D1C9BC] text-sm leading-relaxed mb-5">
                For gatherings exceeding 10 guests or custom tasting menu orchestrations, please contact our hospitality concierge.
              </p>
              <a href="tel:+912045678900" className="btn-outline-gold w-full justify-center text-xs font-bold py-3">
                📞 Call Concierge: +91 20 4567 8900
              </a>
            </div>
          </div>

          {/* Right Column — Reservation Booking Form */}
          <div className="lg:col-span-2 reveal-right">
            <div className="card-dark p-8 sm:p-12 border-2 border-[#D4AF37]/35 shadow-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFFFF] mb-2">
                Book Your Table
              </h2>
              <p className="text-[#D1C9BC] text-sm mb-8">
                Confirmations sent immediately via SMS and WhatsApp.
              </p>

              {confirmed ? (
                <div className="p-8 sm:p-12 rounded-2xl bg-[#10B981]/15 border-2 border-[#10B981]/40 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/25 border-2 border-[#10B981] text-[#34D399] flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    ✓
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#FFFFFF] mb-2">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-[#FAF8F5] text-base leading-relaxed mb-6 max-w-lg mx-auto">
                    Thank you, <span className="font-bold text-[#FBBF24]">{formData.name || "Guest"}</span>. We have reserved a table for <span className="font-bold text-[#FBBF24]">{formData.guests} guests</span> on <span className="font-bold text-[#FBBF24]">{formData.date || "your selected date"}</span> at <span className="font-bold text-[#FBBF24]">{formData.time}</span> in our <span className="font-bold text-[#FBBF24]">{formData.section}</span>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/menu" className="btn-gold text-xs py-3 px-6">
                      View Menu While Waiting →
                    </Link>
                    <button
                      onClick={() => setConfirmed(false)}
                      className="btn-outline-gold text-xs py-3 px-6"
                    >
                      Make Another Booking
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Guest Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="res-name" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                        Full Name *
                      </label>
                      <input
                        id="res-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ananya Roy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-dark"
                      />
                    </div>
                    <div>
                      <label htmlFor="res-phone" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                        WhatsApp / Mobile Number *
                      </label>
                      <input
                        id="res-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98200 54321"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-dark"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="res-email" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                        Email Address (Optional)
                      </label>
                      <input
                        id="res-email"
                        name="email"
                        type="email"
                        placeholder="ananya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-dark"
                      />
                    </div>
                  </div>

                  <div className="h-[1px] bg-[#D4AF37]/20 my-6" />

                  {/* Date, Time, Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="res-date" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                        Date *
                      </label>
                      <input
                        id="res-date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="input-dark"
                      />
                    </div>
                    <div>
                      <label htmlFor="res-time" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                        Time Slot *
                      </label>
                      <select
                        id="res-time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="input-dark"
                      >
                        <optgroup label="Lunch Service">
                          {["12:00", "12:30", "13:00", "13:30", "14:00"].map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </optgroup>
                        <optgroup label="Dinner Service">
                          {["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </optgroup>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="res-guests" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                        Party Size *
                      </label>
                      <select
                        id="res-guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="input-dark"
                      >
                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n.toString()}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Seating & Occasion */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="res-section" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                        Preferred Seating Area
                      </label>
                      <select
                        id="res-section"
                        name="section"
                        value={formData.section}
                        onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                        className="input-dark"
                      >
                        <option>Main Dining Room</option>
                        <option>Rooftop Terrace</option>
                        <option>Private Dining Suite</option>
                        <option>Chef&apos;s Tasting Bar</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="res-occasion" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                        Occasion
                      </label>
                      <select
                        id="res-occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="input-dark"
                      >
                        <option>Dinner / Leisure</option>
                        <option>Birthday Celebration</option>
                        <option>Anniversary</option>
                        <option>Romantic Date</option>
                        <option>Corporate Dinner</option>
                        <option>Family Gathering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="res-notes" className="block text-xs font-bold text-[#FBBF24] uppercase tracking-widest mb-2">
                      Special Requests / Dietary Needs
                    </label>
                    <textarea
                      id="res-notes"
                      name="notes"
                      rows={3}
                      placeholder="e.g. Vegetarian preference, anniversary flower arrangement, quiet corner table…"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="input-dark resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full justify-center text-sm py-4 font-bold"
                  >
                    ✦ Confirm Table Reservation
                  </button>

                  <p className="text-center text-xs text-[#FAF8F5]/80 font-medium">
                    No cancellation charges up to 2 hours before dining time.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
