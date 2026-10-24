import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photo gallery of Saffron & Stone — our dishes, ambiance, private dining rooms, and events in Pune.",
};

// Using generated dish images as gallery until real photos are available
const galleryItems = [
  { src: "/images/menu/butter-chicken.jpg",   alt: "Signature Butter Chicken",          category: "Dishes"   },
  { src: "/images/menu/truffle-paneer.jpg",   alt: "Truffle Paneer Tikka",              category: "Dishes"   },
  { src: "/images/menu/dum-biryani.jpg",      alt: "Dum Biryani — Copper Handi",        category: "Dishes"   },
  { src: "/images/menu/lava-cake.jpg",        alt: "Chocolate Lava Cake with Gold",     category: "Desserts" },
  { src: "/images/hero.jpg",                  alt: "Restaurant dining room",            category: "Ambiance" },
  { src: "/images/chef.jpg",                  alt: "Chef Arjun Mehra in the kitchen",   category: "Kitchen"  },
  { src: "/images/about.jpg",                 alt: "Fine dining table setting",         category: "Ambiance" },
  { src: "/images/menu/butter-chicken.jpg",   alt: "Heritage recipe presentation",      category: "Dishes"   },
];

const categories = ["All", "Dishes", "Desserts", "Ambiance", "Kitchen"];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-56 md:h-72 flex items-center justify-center overflow-hidden bg-surface-800">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative z-10 text-center">
          <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-3">Visual Stories</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream">Gallery</h1>
          <div className="gold-rule mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter tabs (visual only — JS filtering can be added) */}
        <div className="flex gap-2 flex-wrap justify-center mb-12 reveal">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 ${
                i === 0
                  ? "bg-gold-500 text-surface-base"
                  : "border border-gold-500/20 text-cream/60 hover:border-gold-500/50 hover:text-gold-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-ish gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid card-dark group cursor-zoom-in overflow-hidden reveal"
              style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-surface-base/0 group-hover:bg-surface-base/50 transition-all duration-400 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    <p className="text-cream text-sm font-serif">{img.alt}</p>
                    <span className="tag-gold mt-2 inline-block">{img.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 reveal">
          <p className="text-cream/40 text-sm mb-6">Follow us for more behind-the-scenes stories</p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            📸 Follow on Instagram
          </a>
        </div>
      </div>
    </>
  );
}
