import type { Metadata } from "next";
import Link from "next/link";
import { menuCategories } from "@/data/menu";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Saffron & Stone — Fine Dining in Pune | Where Every Bite Tells a Story",
  description:
    "Experience Modern Indian & Continental fine dining at Saffron & Stone, Pune. Signature dishes crafted with heritage spices, artisanal technique, and a passion for storytelling through food.",
};

const signatureDishes = menuCategories
  .flatMap((c) => c.items)
  .filter((item) => item.isSignature);

export default function HomePage() {
  return (
    <>
      {/* ══ HERO SECTION ════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Background Image & Ambient Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Saffron & Stone restaurant ambiance"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-2xl">
            {/* Location Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FBBF24] animate-ping" />
              <span className="text-[#FBBF24] text-xs tracking-[0.3em] uppercase font-sans font-bold">
                Koregaon Park, Pune
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6 text-[#FFFFFF]">
              Where Every <br />
              <span className="text-gold-shimmer italic">Bite</span> Tells<br />
              a Story.
            </h1>

            {/* Tagline */}
            <p className="text-[#FAF8F5] text-lg sm:text-xl font-normal leading-relaxed mb-10 max-w-xl">
              Modern Indian &amp; Continental fine dining in Pune. Reimagining regal culinary heritage with contemporary artistry and passion.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/reservation" className="btn-gold text-sm py-4 px-8">
                ✦ Reserve a Table
              </Link>
              <Link href="/menu" className="btn-outline-gold text-sm py-4 px-8">
                Explore The Menu →
              </Link>
            </div>

            {/* Credibility Stats */}
            <div className="flex gap-8 sm:gap-12 mt-14 pt-8 border-t border-[#D4AF37]/25">
              {[
                { value: "14+",   label: "Years of Heritage" },
                { value: "4.9★",  label: "Guest Rating" },
                { value: "50k+",  label: "Guests Hosted" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-[#FBBF24] font-serif text-3xl font-bold">{s.value}</div>
                  <div className="text-[#D1C9BC] text-xs font-semibold tracking-wider uppercase mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SIGNATURE DISHES ════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16 reveal">
          <p className="text-[#FBBF24] text-xs tracking-[0.4em] uppercase font-sans font-bold mb-3">
            Culinary Masterpieces
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-4">
            Signature Creations
          </h2>
          <div className="gold-rule" />
          <p className="text-[#D1C9BC] mt-4 max-w-xl mx-auto text-base leading-relaxed">
            Four iconic dishes that define our kitchen — where time-honored slow cooking meets contemporary gastronomy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {signatureDishes.map((dish, i) => (
            <div
              key={dish.id}
              className="card-dark group overflow-hidden border-2 border-[#D4AF37]/25 hover:border-[#FBBF24] reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {dish.image && (
                <div className="relative overflow-hidden h-64 sm:h-72 bg-[#121212]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 tag-gold shadow-lg font-bold">
                    ✦ Chef Signature
                  </span>
                </div>
              )}
              <div className="p-7">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-2xl font-bold text-[#FFFFFF] group-hover:text-[#FBBF24] transition-colors">
                    {dish.name}
                  </h3>
                  <span className="text-[#FBBF24] font-bold font-sans text-xl ml-4 whitespace-nowrap">
                    ₹{dish.price}
                  </span>
                </div>
                <p className="text-[#FAF8F5] text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
                {dish.tags && (
                  <div className="flex gap-2 flex-wrap pt-2 border-t border-[#D4AF37]/15">
                    {dish.tags.filter((t) => t !== "Signature").map((tag) => (
                      <span
                        key={tag}
                        className={
                          tag === "Chef's Pick"
                            ? "tag-gold"
                            : tag === "Vegetarian"
                            ? "tag-green"
                            : "tag-red"
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <Link href="/menu" className="btn-outline-gold px-10 py-4 text-sm font-bold">
            View Complete Menu &amp; Wine List →
          </Link>
        </div>
      </section>

      {/* ══ THE EXPERIENCE (WHY US) ════════════════════════════════════ */}
      <section className="bg-[#111111] border-y border-[#D4AF37]/25 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="text-[#FBBF24] text-xs tracking-[0.4em] uppercase font-sans font-bold mb-3">
              Uncompromising Standards
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-4">
              The Saffron &amp; Stone Standard
            </h2>
            <div className="gold-rule" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Western Ghats Farm Sourcing",
                text: "Heirloom grains, stone-ground flours, and fresh herbs hand-selected from artisanal farms across Maharashtra and Sahyadri valleys.",
              },
              {
                icon: "🏺",
                title: "Clay Oven & French Technique",
                text: "Centuries-old slow Dum cooking and live charcoal tandoor fires fused with classical French reduction sauces and emulsions.",
              },
              {
                icon: "✨",
                title: "Royal White-Glove Hospitality",
                text: "From personalized table settings to curated wine pairings by our in-house sommelier, every dinner is treated as a grand celebration.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl border-2 border-[#D4AF37]/20 bg-[#161616] hover:border-[#D4AF37]/60 transition-all duration-300 shadow-xl reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="font-serif text-2xl font-bold text-[#FFFFFF] mb-3">{item.title}</h3>
                <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mb-4" />
                <p className="text-[#FAF8F5] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GUEST REVIEWS ══════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16 reveal">
          <p className="text-[#FBBF24] text-xs tracking-[0.4em] uppercase font-sans font-bold mb-3">
            Guest Testimonials
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-4">
            Words From Our Patrons
          </h2>
          <div className="gold-rule" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="card-dark p-8 border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-[#FBBF24] text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-[#FFFFFF] text-base leading-relaxed italic font-serif mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 border-t border-[#D4AF37]/20 pt-5">
                <div className="w-11 h-11 rounded-full bg-[#D4AF37]/25 border border-[#D4AF37]/50 flex items-center justify-center text-[#FBBF24] font-serif font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-[#FFFFFF] text-base font-bold">{t.name}</p>
                  <p className="text-[#D1C9BC] text-xs font-medium">{t.role}</p>
                </div>
                <span className="ml-auto text-[#8C8476] text-xs font-mono">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ RESERVATION CTA BANNER ═════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#111111] border-t border-[#D4AF37]/30">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#0A0A0A]/85" />
        </div>
        <div className="relative z-10 text-center py-24 px-4 max-w-4xl mx-auto">
          <p className="text-[#FBBF24] text-xs tracking-[0.4em] uppercase font-sans font-bold mb-4">
            An Unforgettable Evening
          </p>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[#FFFFFF] mb-6 reveal">
            Your Table Awaits in Koregaon Park
          </h2>
          <p className="text-[#FAF8F5] mb-10 max-w-xl mx-auto text-base leading-relaxed reveal">
            Whether an anniversary celebration, family milestone, or quiet evening with loved ones, allow us to host you in luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center reveal">
            <Link href="/reservation" className="btn-gold py-4 px-9 text-sm font-bold">
              ✦ Reserve Online Now
            </Link>
            <Link href="/contact" className="btn-outline-gold py-4 px-9 text-sm font-bold">
              📞 Direct Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
