import type { Metadata } from "next";
import { menuCategories } from "@/data/menu";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Browse the full menu at Saffron & Stone — starters, mains, breads, desserts & beverages crafted with Modern Indian & Continental flair.",
};

const TAG_COLOR: Record<string, string> = {
  "Signature":    "tag-gold",
  "Chef's Pick":  "tag-gold",
  "Vegetarian":   "tag-green",
  "Seafood":      "tag-blue",
  "Non-Veg":      "tag-red",
  "Continental":  "tag-blue",
  "Mocktail":     "tag-green",
  "Cocktail":     "tag-gold",
  "Seasonal":     "tag-blue",
  "Spirits":      "tag-red",
  "Gluten-Free":  "tag-green",
};

export default function MenuPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="relative h-56 md:h-72 flex items-center justify-center overflow-hidden bg-surface-800">
        <img
          src="/images/hero.jpg"
          alt="Menu background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-3">Saffron &amp; Stone</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream">Our Menu</h1>
          <div className="gold-rule mt-4" />
          <p className="text-cream/50 mt-4 text-sm">Seasonal ingredients · Heritage spices · Artisanal technique</p>
        </div>
      </div>

      {/* Category Nav */}
      <div className="sticky top-20 z-30 bg-surface-900/95 backdrop-blur-md border-b border-gold-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-none">
            {menuCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex-shrink-0 px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase
                           text-cream/60 hover:text-gold-400 hover:bg-gold-500/10
                           transition-all duration-200"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {menuCategories.map((category, catIdx) => (
          <section
            key={category.id}
            id={category.id}
            className="mb-20 scroll-mt-32"
          >
            {/* Category Header */}
            <div className="mb-10 reveal">
              <p className="text-gold-500/70 text-xs tracking-[0.3em] uppercase font-sans mb-1">
                0{catIdx + 1}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream">{category.name}</h2>
              {category.description && (
                <p className="text-cream/40 text-sm mt-2 italic font-serif">{category.description}</p>
              )}
              <div className="gold-rule-left mt-4" />
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {category.items.map((item, itemIdx) => (
                <article
                  key={item.id}
                  className={`card-dark reveal group ${item.isSignature ? "md:col-span-2 lg:col-span-1" : ""}`}
                  style={{ transitionDelay: `${itemIdx * 80}ms` }}
                >
                  {/* Image (only if available) */}
                  {item.image && (
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-800/70 to-transparent" />
                      {item.isSignature && (
                        <span className="absolute top-3 right-3 tag-gold">✦ Signature</span>
                      )}
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h3 className="font-serif text-lg text-cream group-hover:text-gold-400 transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="text-gold-400 font-semibold font-sans text-base flex-shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-cream/50 text-sm leading-relaxed">{item.description}</p>

                    {item.tags && (
                      <div className="flex gap-2 flex-wrap mt-4">
                        {item.tags.map((tag) => (
                          <span key={tag} className={TAG_COLOR[tag] ?? "tag-blue"}>
                            {/* text tag: dietary/category label */}
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
      </div>

      {/* Allergen note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="border border-gold-500/20 rounded-xl p-5 text-cream/40 text-xs leading-relaxed">
          <strong className="text-gold-500/80">Allergen Notice:</strong> Our dishes may contain nuts, dairy, gluten, and other allergens.
          Please inform your server of any dietary requirements before ordering. All prices are inclusive of applicable taxes.
        </div>
      </div>
    </>
  );
}
