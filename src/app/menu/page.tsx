import type { Metadata } from "next";
import { menuCategories } from "@/data/menu";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A La Carte Menu",
  description:
    "Browse the full menu at Saffron & Stone — starters, mains, breads, desserts & beverages crafted with Modern Indian & Continental flair.",
};

export default function MenuPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden bg-[#121212]">
        <img
          src="/images/hero.jpg"
          alt="Menu background"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#FBBF24] text-xs tracking-[0.4em] uppercase font-sans font-bold mb-3">
            Saffron &amp; Stone Pune
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#FFFFFF]">A La Carte Menu</h1>
          <div className="gold-rule mt-4" />
          <p className="text-[#FAF8F5] text-sm md:text-base mt-3 max-w-xl mx-auto font-medium">
            Heirloom ingredients · Artisanal spices · Slow-fired culinary excellence
          </p>
        </div>
      </div>

      {/* Sticky Category Quick Nav */}
      <div className="sticky top-[73px] z-30 bg-[#0E0E0E]/95 backdrop-blur-md border-y border-[#D4AF37]/25 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3.5 scrollbar-none">
            {menuCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase
                           text-[#FAF8F5] bg-[#181818] border border-[#D4AF37]/30 hover:border-[#FBBF24] hover:text-[#FBBF24] hover:bg-[#D4AF37]/15
                           transition-all duration-200"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {menuCategories.map((category, catIdx) => (
          <section
            key={category.id}
            id={category.id}
            className="mb-24 scroll-mt-36"
          >
            {/* Category Header */}
            <div className="mb-10 reveal">
              <span className="text-[#FBBF24] text-xs font-bold tracking-[0.3em] uppercase block mb-1">
                Course 0{catIdx + 1}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFFFF]">{category.name}</h2>
              {category.description && (
                <p className="text-[#D1C9BC] text-base mt-2 italic font-serif max-w-2xl">{category.description}</p>
              )}
              <div className="gold-rule-left mt-4" />
            </div>

            {/* Dishes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, itemIdx) => (
                <article
                  key={item.id}
                  className="card-dark reveal group border-2 border-[#D4AF37]/20 hover:border-[#D4AF37]/60 overflow-hidden"
                  style={{ transitionDelay: `${(itemIdx % 4) * 80}ms` }}
                >
                  {/* Dish Image if present */}
                  {item.image && (
                    <div className="relative h-56 overflow-hidden bg-[#121212]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                      {item.isSignature && (
                        <span className="absolute top-3 right-3 tag-gold shadow-md">✦ Signature</span>
                      )}
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFFFFF] group-hover:text-[#FBBF24] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-[#FBBF24] font-bold font-sans text-xl whitespace-nowrap">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-[#FAF8F5] text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {item.tags && (
                      <div className="flex gap-2 flex-wrap pt-3 border-t border-[#D4AF37]/15">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={
                              tag === "Signature" || tag === "Chef's Pick"
                                ? "tag-gold"
                                : tag === "Vegetarian" || tag === "Mocktail"
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
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Dietary / Chef note banner */}
        <div className="mt-16 p-8 rounded-2xl bg-[#141414] border-2 border-[#D4AF37]/30 text-center max-w-3xl mx-auto reveal">
          <p className="text-[#FBBF24] text-xs font-bold uppercase tracking-widest mb-2">
            Dietary &amp; Allergy Inquiries
          </p>
          <h4 className="font-serif text-2xl font-bold text-[#FFFFFF] mb-3">
            Customised Dining for Your Party
          </h4>
          <p className="text-[#FAF8F5] text-sm leading-relaxed mb-6">
            We are glad to accommodate vegan, Jain, gluten-free, or specific food allergen requests with advance notice. Please speak with your captain or mention requirements in your reservation.
          </p>
          <Link href="/reservation" className="btn-gold">
            Reserve a Table
          </Link>
        </div>
      </div>
    </>
  );
}
