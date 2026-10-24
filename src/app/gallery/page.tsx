"use client";
import { useState, useEffect } from "react";

const galleryItems = [
  { src: "/images/menu/butter-chicken.jpg",   alt: "Signature Old Delhi Butter Chicken",      category: "Dishes"   },
  { src: "/images/menu/truffle-paneer.jpg",   alt: "Truffle Paneer Tikka with Clay Oven Char",category: "Dishes"   },
  { src: "/images/menu/dum-biryani.jpg",      alt: "Awadhi Gosht Dum Biryani in Copper Handi",category: "Dishes"   },
  { src: "/images/menu/lava-cake.jpg",        alt: "Belgian Chocolate Lava Cake with 24k Gold",category: "Desserts" },
  { src: "/images/hero.jpg",                  alt: "Main Dining Room Under Warm Chandeliers",  category: "Ambiance" },
  { src: "/images/chef.jpg",                  alt: "Chef Arjun Mehra Plating at the Pass",     category: "Kitchen"  },
  { src: "/images/about.jpg",                 alt: "Private Dining Suite Table Setting",       category: "Ambiance" },
  { src: "/images/menu/butter-chicken.jpg",   alt: "Royal Saffron Gravy Deglaze",              category: "Dishes"   },
];

const categories = ["All", "Dishes", "Desserts", "Ambiance", "Kitchen"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImageIndex(null);
      if (e.key === "ArrowRight" && activeImageIndex !== null) {
        setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
      }
      if (e.key === "ArrowLeft" && activeImageIndex !== null) {
        setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, filteredItems.length]);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden bg-[#121212]">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#FBBF24] text-xs tracking-[0.4em] uppercase font-sans font-semibold mb-3">
            Visual Storytelling
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#FFFFFF]">Gallery</h1>
          <div className="gold-rule mt-4" />
          <p className="text-[#D1C9BC] text-sm md:text-base mt-2 max-w-xl mx-auto">
            Glimpse into the warmth, craftsmanship, and culinary spectacles of Saffron &amp; Stone.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter Tabs */}
        <div className="flex gap-3 flex-wrap justify-center mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#D4AF37] text-[#0A0A0A] shadow-[0_4px_20px_rgba(212,175,55,0.4)] scale-105"
                    : "bg-[#181818] border border-[#D4AF37]/30 text-[#FAF8F5] hover:border-[#D4AF37] hover:text-[#FBBF24]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((img, idx) => (
            <div
              key={`${img.alt}-${idx}`}
              onClick={() => setActiveImageIndex(idx)}
              className="card-dark group cursor-pointer overflow-hidden relative rounded-2xl border-2 border-[#D4AF37]/25 hover:border-[#FBBF24]"
            >
              <div className="relative h-72 overflow-hidden bg-[#141414]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="tag-gold self-start mb-2">{img.category}</span>
                  <p className="text-[#FFFFFF] text-base font-serif font-bold leading-snug drop-shadow-md">
                    {img.alt}
                  </p>
                  <p className="text-[#FBBF24] text-xs tracking-wider uppercase mt-2 font-medium flex items-center gap-1.5">
                    <span>🔍 Click to view full image</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout */}
        <div className="text-center mt-20 p-10 bg-[#141414] border border-[#D4AF37]/30 rounded-3xl max-w-2xl mx-auto">
          <p className="text-[#FBBF24] text-xs uppercase tracking-widest font-semibold mb-2">
            Follow Our Culinary Journey
          </p>
          <h3 className="font-serif text-2xl font-bold text-[#FFFFFF] mb-4">
            Tagged in Koregaon Park, Pune
          </h3>
          <p className="text-[#D1C9BC] text-sm mb-6">
            Share your dining memories with #SaffronAndStonePune for a chance to be featured in our monthly guest journal.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            📸 Follow @SaffronAndStone
          </a>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-[#000000]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#1A1A1A] text-[#FAF8F5] hover:text-[#FBBF24] border border-[#D4AF37]/40 flex items-center justify-center text-xl font-bold hover:scale-110 transition-all z-20"
            aria-label="Close image lightbox"
          >
            ✕
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((activeImageIndex - 1 + filteredItems.length) % filteredItems.length);
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1A1A]/80 text-[#FAF8F5] hover:text-[#FBBF24] border border-[#D4AF37]/40 flex items-center justify-center text-2xl transition-all z-20"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveImageIndex((activeImageIndex + 1) % filteredItems.length);
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#1A1A1A]/80 text-[#FAF8F5] hover:text-[#FBBF24] border border-[#D4AF37]/40 flex items-center justify-center text-2xl transition-all z-20"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Modal Content */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#D4AF37]/50 shadow-[0_0_50px_rgba(212,175,55,0.3)] bg-[#0C0C0C]">
              <img
                src={filteredItems[activeImageIndex].src}
                alt={filteredItems[activeImageIndex].alt}
                className="max-h-[70vh] w-auto object-contain rounded-xl"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="tag-gold mb-1 inline-block">
                {filteredItems[activeImageIndex].category}
              </span>
              <h4 className="text-xl font-serif font-bold text-[#FFFFFF] mt-1">
                {filteredItems[activeImageIndex].alt}
              </h4>
              <p className="text-xs text-[#8C8476] mt-1 font-mono">
                Image {activeImageIndex + 1} of {filteredItems.length} · Press ESC to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
