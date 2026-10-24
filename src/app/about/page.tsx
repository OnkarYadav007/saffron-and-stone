import type { Metadata } from "next";
import StatCounter from "@/components/ui/StatCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of Saffron & Stone — from a dream of extraordinary dining in Pune to becoming Maharashtra's most celebrated fine dining destination.",
};

const milestones = [
  { year: "2012", event: "Founded by Chef Arjun Mehra in Koregaon Park, Pune" },
  { year: "2015", event: "Awarded Best New Restaurant — Times Food Guide" },
  { year: "2018", event: "Continental Kitchen wing inaugurated with Chef Isabelle Ferrand" },
  { year: "2021", event: "Ranked #1 Fine Dining Restaurant in Pune by Zomato Awards" },
  { year: "2024", event: "Expanded to Private Dining Suites and Rooftop Terrace" },
  { year: "2026", event: "Celebrating 14 years of extraordinary dining with Michelin-trained kitchen" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Header */}
      <div className="relative h-72 md:h-96 flex items-end overflow-hidden bg-[#121212]">
        <img
          src="/images/about.jpg"
          alt="Saffron & Stone restaurant interior"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
          <p className="text-[#FBBF24] text-xs tracking-[0.4em] uppercase font-sans font-semibold mb-3">
            Est. 2012 · Pune, Maharashtra
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#FFFFFF]">Our Story</h1>
          <div className="gold-rule-left" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="reveal-left">
            <p className="text-[#FBBF24] text-xs tracking-[0.35em] uppercase font-sans font-semibold mb-3">
              Who We Are
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FFFFFF] mb-4 leading-tight">
              A Kitchen Born of <br />
              <span className="italic text-gold-shimmer">Passion &amp; Heritage</span>
            </h2>
            <div className="gold-rule-left mb-6" />
            <p className="text-[#FAF8F5] leading-relaxed mb-5 text-base font-normal">
              Saffron &amp; Stone began as a dream — to create a sanctuary where the rich, storied tapestry of Indian royal culinary heritage could intertwine with the precision and artistry of Continental fine dining.
            </p>
            <p className="text-[#D1C9BC] leading-relaxed text-base font-normal mb-8">
              Founded in 2012 by Chef Arjun Mehra in the leafy lanes of Koregaon Park, we set out to craft an unforgettable multisensory experience. Saffron stands for the sacred golden threads of tradition, warmth, and aroma. Stone represents the timeless foundation, earth, and discipline of classical culinary craft.
            </p>

            <Link href="/menu" className="btn-outline-gold inline-flex">
              Explore Our Dishes →
            </Link>
          </div>

          <div className="reveal-right">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37]/30 to-[#FBBF24]/20 rounded-3xl blur-xl group-hover:opacity-100 opacity-60 transition duration-500" />
              <img
                src="/images/chef.jpg"
                alt="Chef Arjun Mehra at Saffron & Stone"
                className="relative rounded-2xl w-full h-[450px] object-cover shadow-2xl border-2 border-[#D4AF37]/35"
              />
            </div>
          </div>
        </div>

        {/* Animated Stats Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-[#FBBF24] text-xs tracking-[0.3em] uppercase font-semibold mb-2">
              Our Journey in Numbers
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFFFF]">A Legacy of Excellence</h2>
            <div className="gold-rule" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCounter value={14} suffix="+" label="Years of Excellence" />
            <StatCounter value={80} suffix="+" label="Curated Dishes" />
            <StatCounter value={50} suffix="k+" label="Delighted Guests" />
            <StatCounter value={8} suffix=" Awards" label="Culinary Honors" />
          </div>
        </div>

        {/* Executive Chef Profile */}
        <div className="bg-[#141414] border-2 border-[#D4AF37]/30 rounded-3xl p-8 sm:p-14 mb-24 reveal shadow-[0_12px_45px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#FBBF24] text-xs tracking-[0.35em] uppercase font-sans font-semibold mb-3">
                The Visionary
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#FFFFFF] mb-2">Chef Arjun Mehra</h2>
              <p className="text-[#FBBF24] font-medium text-base mb-6">Executive Chef &amp; Founder</p>
              <div className="gold-rule-left mb-6" />
              <p className="text-[#FAF8F5] leading-relaxed text-base mb-5">
                With over two decades of culinary mastery spanning the kitchens of Taj Mahal Palace, Michelin-starred bistros in Paris, and private dining clubs in London, Chef Arjun brings a boundless curiosity and reverence to every plate.
              </p>
              <blockquote className="border-l-2 border-[#FBBF24] pl-4 italic text-[#FBBF24] text-lg font-serif">
                &ldquo;Food is memory, sacred culture, and love. At Saffron &amp; Stone, we don&apos;t just prepare meals — we curate experiences that linger in the heart.&rdquo;
              </blockquote>
            </div>

            <div className="flex flex-col gap-5 bg-[#1B1B1B] p-8 rounded-2xl border border-[#D4AF37]/20">
              {[
                { label: "Classical Training", value: "Taj Group of Hotels · Le Cordon Bleu, Paris" },
                { label: "Recognitions",        value: "Chef of the Year — India Culinary Guild 2019" },
                { label: "Kitchen Ethics",      value: "Farm-to-fork sourcing · Zero plastic · Slow cooking" },
                { label: "Signature Technique", value: "Modern Awadhi Dum Pukht & French Emulsion Pairing" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#D4AF37] pl-4">
                  <p className="text-[#FBBF24] text-xs uppercase tracking-widest font-semibold">{item.label}</p>
                  <p className="text-[#FFFFFF] text-sm sm:text-base font-medium mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="reveal">
          <div className="text-center mb-16">
            <p className="text-[#FBBF24] text-xs tracking-[0.35em] uppercase font-sans font-semibold mb-3">
              The Path We Walked
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#FFFFFF] mb-4">Milestones &amp; Honors</h2>
            <div className="gold-rule" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/40 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-center gap-6 md:gap-0 reveal ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <span className="inline-block px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#FBBF24] font-serif text-xl sm:text-2xl font-bold mb-2 border border-[#D4AF37]/40">
                      {m.year}
                    </span>
                    <p className="text-[#FAF8F5] text-base sm:text-lg font-medium leading-relaxed">{m.event}</p>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)] border-4 border-[#0A0A0A] flex-shrink-0 z-10" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
