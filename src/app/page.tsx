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
      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Saffron & Stone restaurant ambiance"
            className="w-full h-full object-cover object-center"
          />
          {/* Multi-layer overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface-base/95 via-surface-base/70 to-surface-base/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-base/60 via-transparent to-surface-base/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="text-gold-400 text-xs tracking-[0.4em] uppercase font-sans font-medium mb-6 animate-fade-in">
              ✦ Koregaon Park, Pune ✦
            </p>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Where Every <br />
              <span className="text-gold-shimmer italic">Bite</span> Tells<br />
              a Story.
            </h1>

            {/* Tagline */}
            <p className="text-cream/60 text-lg font-light leading-relaxed mb-10 max-w-md animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Modern Indian &amp; Continental fine dining, crafted with heritage spices
              and a passion for the extraordinary.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Link href="/reservation" className="btn-gold">
                Reserve a Table
              </Link>
              <Link href="/menu" className="btn-outline-gold">
                Explore Menu
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex gap-10 mt-14 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              {[
                { value: "12+",    label: "Years" },
                { value: "4.9★",   label: "Rating" },
                { value: "50k+",   label: "Guests" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-gold-400 font-serif text-2xl font-bold">{s.value}</div>
                  <div className="text-cream/40 text-xs tracking-wider uppercase mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
          <span className="text-cream/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold-500/60 to-transparent" />
        </div>
      </section>

      {/* ══ SIGNATURE DISHES ══════════════════════════════════════════ */}
      <section className="section-wrapper">
        <div className="text-center mb-16 reveal">
          <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-3">Our Heritage</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">Signature Dishes</h2>
          <div className="gold-rule" />
          <p className="text-cream/50 mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Four dishes that define who we are — each a chapter in the Saffron &amp; Stone story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {signatureDishes.map((dish, i) => (
            <div
              key={dish.id}
              className="card-dark group cursor-pointer reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {dish.image && (
                <div className="relative overflow-hidden h-60">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-800/80 to-transparent" />
                  {/* Signature badge */}
                  <span className="absolute top-4 right-4 tag-gold">✦ Signature</span>
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl text-cream group-hover:text-gold-400 transition-colors">{dish.name}</h3>
                  <span className="text-gold-400 font-semibold font-sans">₹{dish.price}</span>
                </div>
                <p className="text-cream/50 text-sm leading-relaxed">{dish.description}</p>
                {dish.tags && (
                  <div className="flex gap-2 flex-wrap mt-4">
                    {dish.tags.filter((t) => t !== "Signature").map((tag) => (
                      <span key={tag} className={tag === "Chef's Pick" ? "tag-gold" : tag === "Vegetarian" ? "tag-green" : "tag-blue"}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <Link href="/menu" className="btn-outline-gold">
            View Full Menu
          </Link>
        </div>
      </section>

      {/* ══ WHY US ════════════════════════════════════════════════════ */}
      <section className="bg-surface-800 border-y border-gold-500/10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-3">Our Promise</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">The Saffron &amp; Stone Way</h2>
            <div className="gold-rule" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Farm-to-Fork",
                text: "Every ingredient is sourced from trusted farms across Maharashtra and the Western Ghats — fresh, seasonal, and traceable.",
              },
              {
                icon: "👨‍🍳",
                title: "Heritage Technique",
                text: "Our chefs trained in Delhi, Mumbai, and Europe, bringing traditional dum, tandoor, and French methods together in perfect harmony.",
              },
              {
                icon: "✦",
                title: "White-Glove Service",
                text: "From intimate dinners to corporate banquets, every guest receives our signature attentive, unhurried service.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="text-center p-8 rounded-2xl border border-gold-500/15 bg-card-shine hover:border-gold-500/30 transition-all duration-400 reveal"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="text-5xl mb-5 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-cream mb-3">{item.title}</h3>
                <div className="w-8 h-px bg-gold-500/50 mx-auto mb-3" />
                <p className="text-cream/50 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════════════════ */}
      <section className="section-wrapper">
        <div className="text-center mb-14 reveal">
          <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-3">Voices</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-4">What Our Guests Say</h2>
          <div className="gold-rule" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="card-dark p-8 reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <span key={si} className="text-gold-400 text-sm">★</span>
                ))}
              </div>
              <blockquote className="text-cream/70 text-sm leading-relaxed italic font-serif mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 border-t border-gold-500/10 pt-5">
                <div className="w-9 h-9 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400 font-serif font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-cream text-sm font-medium">{t.name}</p>
                  <p className="text-cream/40 text-xs">{t.role}</p>
                </div>
                <span className="ml-auto text-cream/30 text-xs">{t.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-surface-base/80" />
        </div>
        <div className="relative z-10 text-center py-24 px-4">
          <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-4">Make a Memory</p>
          <h2 className="font-serif text-4xl md:text-6xl text-cream mb-6 reveal">
            Your Table Awaits
          </h2>
          <p className="text-cream/50 mb-10 max-w-md mx-auto text-sm reveal">
            Perfect for romantic evenings, family celebrations, and distinguished business dining.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
            <Link href="/reservation" className="btn-gold">
              Reserve Now
            </Link>
            <Link href="/contact" className="btn-outline-gold">
              Call Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
