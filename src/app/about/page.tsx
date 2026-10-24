import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Saffron & Stone — from a dream of extraordinary dining in Pune to becoming Maharashtra's most celebrated fine dining destination.",
};

const milestones = [
  { year: "2012", event: "Founded by Chef Arjun Mehra in Koregaon Park, Pune" },
  { year: "2015", event: "Awarded Best New Restaurant — Times Food Guide" },
  { year: "2018", event: "Continental Kitchen wing inaugurated with Chef Isabelle Ferrand" },
  { year: "2021", event: "Ranked #1 Fine Dining Restaurant in Pune by Zomato Awards" },
  { year: "2024", event: "Expanded to Private Dining Suites and Rooftop Terrace" },
  { year: "2026", event: "Celebrating 14 years of extraordinary dining" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-64 md:h-96 flex items-end overflow-hidden">
        <img
          src="/images/about.jpg"
          alt="Saffron & Stone restaurant interior"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-base to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-3">Est. 2012 · Pune</p>
          <h1 className="font-serif text-5xl md:text-6xl text-cream">Our Story</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Story section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="reveal-left">
            <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-4">Who We Are</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-2">
              A Kitchen Born of <br /><span className="italic text-gold-shimmer">Passion &amp; Heritage</span>
            </h2>
            <div className="gold-rule-left mb-6" />
            <p className="text-cream/60 leading-relaxed mb-5 text-sm">
              Saffron &amp; Stone began as a dream — to create a space where the rich tapestry of Indian culinary
              heritage could meet the precision of Continental cuisine. Founded in 2012 by Chef Arjun Mehra in the
              heart of Koregaon Park, the restaurant quickly became the definitive fine dining address in Pune.
            </p>
            <p className="text-cream/60 leading-relaxed text-sm">
              Every dish on our menu is a chapter in our story. We draw on ancient recipes passed down through
              generations, reimagined with modern technique, seasonal ingredients, and an unwavering commitment
              to excellence. Saffron — for the golden threads of tradition. Stone — for the solidity of craft.
            </p>
          </div>

          <div className="reveal-right">
            <img
              src="/images/chef.jpg"
              alt="Chef Arjun Mehra at Saffron & Stone"
              className="rounded-2xl w-full h-[420px] object-cover shadow-card border border-gold-500/15"
            />
          </div>
        </div>

        {/* Chef profile */}
        <div className="bg-surface-800 border border-gold-500/15 rounded-2xl p-10 md:p-14 mb-24 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-4">The Craftsman</p>
              <h2 className="font-serif text-3xl md:text-4xl text-cream mb-2">Chef Arjun Mehra</h2>
              <div className="gold-rule-left mb-5" />
              <p className="text-gold-400 font-sans text-sm mb-5">Executive Chef &amp; Founder</p>
              <p className="text-cream/60 leading-relaxed text-sm mb-4">
                With over 20 years of culinary experience spanning the Taj group, Michelin-starred kitchens in
                Paris, and Gordon Ramsay's London properties, Chef Arjun brings a rare blend of Indian soul and
                European finesse to every plate.
              </p>
              <p className="text-cream/60 leading-relaxed text-sm">
                &ldquo;Food is memory, culture, and love — all on one plate. At Saffron &amp; Stone, we don't just cook;
                we tell the story of who we are through every bite.&rdquo;
              </p>
            </div>
            <div className="flex flex-col gap-5">
              {[
                { label: "Training",      value: "Taj Hotels · Le Cordon Bleu, Paris" },
                { label: "Awards",        value: "Chef of the Year, India Food Awards 2019" },
                { label: "Philosophy",    value: "Farm-sourced · Heritage recipes · Zero waste kitchen" },
                { label: "Speciality",    value: "Dum Cuisine · Modern Indian Tasting Menus" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-gold-500/40 pl-4">
                  <p className="text-gold-500/70 text-xs uppercase tracking-widest">{item.label}</p>
                  <p className="text-cream/70 text-sm mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { value: "12+",   label: "Years of Excellence" },
            { value: "80+",   label: "Menu Creations" },
            { value: "50k+",  label: "Happy Guests" },
            { value: "8",     label: "Industry Awards" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 border border-gold-500/15 rounded-2xl reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-serif text-4xl font-bold text-gold-shimmer mb-2">{stat.value}</div>
              <div className="text-cream/50 text-xs tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="reveal">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-xs tracking-[0.4em] uppercase font-sans mb-3">Our Journey</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">Milestones</h2>
            <div className="gold-rule" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold-500/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`flex items-center gap-6 md:gap-0 reveal ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Text side */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}>
                    <p className="text-gold-400 font-serif text-2xl font-bold">{m.year}</p>
                    <p className="text-cream/60 text-sm mt-1">{m.event}</p>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-gold-500 shadow-gold flex-shrink-0 z-10" />

                  {/* Empty side */}
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
