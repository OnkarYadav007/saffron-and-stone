import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark base palette
        surface: {
          base:   "#0A0A0A", // deepest background
          900:    "#0F0F0F",
          800:    "#141414",
          700:    "#1A1A1A",
          600:    "#222222",
          500:    "#2A2A2A",
          400:    "#333333",
        },
        // Gold accent palette
        gold: {
          50:   "#FFF9E6",
          100:  "#FFEDB3",
          200:  "#FFE080",
          300:  "#FFD24D",
          400:  "#FFC31A",
          500:  "#C9A84C", // primary gold
          600:  "#B8973E",
          700:  "#9A7B2E",
          800:  "#7C601E",
          900:  "#5E4510",
          DEFAULT: "#C9A84C",
        },
        // Cream text
        cream: {
          DEFAULT: "#F5ECD7",
          50:  "#FDFAF4",
          100: "#F5ECD7",
          200: "#EDD9B0",
          300: "#E5C689",
          400: "#DDC069",
        },
      },
      fontFamily: {
        serif:  ["var(--font-playfair)", "Georgia", "serif"],
        sans:   ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in":      "fadeIn 0.8s ease-out both",
        "slide-up":     "slideUp 0.8s ease-out both",
        "slide-left":   "slideLeft 0.8s ease-out both",
        "zoom-in":      "zoomIn 0.6s ease-out both",
        "gold-pulse":   "goldPulse 3s ease-in-out infinite",
        "shimmer":      "shimmer 2.5s linear infinite",
        "float":        "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn:    { "0%": { opacity: "0" },                                    "100%": { opacity: "1" } },
        slideUp:   { "0%": { opacity: "0", transform: "translateY(40px)" },     "100%": { opacity: "1", transform: "translateY(0)" } },
        slideLeft: { "0%": { opacity: "0", transform: "translateX(40px)" },     "100%": { opacity: "1", transform: "translateX(0)" } },
        zoomIn:    { "0%": { opacity: "0", transform: "scale(0.92)" },          "100%": { opacity: "1", transform: "scale(1)" } },
        goldPulse: { "0%, 100%": { opacity: "0.7" },                            "50%": { opacity: "1" } },
        shimmer:   { "0%": { backgroundPosition: "-200% 0" },                   "100%": { backgroundPosition: "200% 0" } },
        float:     { "0%, 100%": { transform: "translateY(0px)" },              "50%": { transform: "translateY(-8px)" } },
      },
      backgroundImage: {
        "gold-gradient":    "linear-gradient(135deg, #C9A84C 0%, #FFE080 50%, #C9A84C 100%)",
        "dark-gradient":    "linear-gradient(180deg, #0A0A0A 0%, #141414 100%)",
        "hero-overlay":     "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,0.3) 100%)",
        "card-shine":       "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 50%, rgba(201,168,76,0.04) 100%)",
      },
      boxShadow: {
        "gold":       "0 0 20px rgba(201,168,76,0.25)",
        "gold-lg":    "0 0 40px rgba(201,168,76,0.35)",
        "gold-inset": "inset 0 0 20px rgba(201,168,76,0.05)",
        "card":       "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6)",
      },
      borderColor: {
        "gold-dim": "rgba(201,168,76,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
