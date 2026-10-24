"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside
      className={`fixed bottom-6 left-6 z-40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll back to top"
    >
      <button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full bg-[#1A1A1A]/90 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0A0A0A] border border-[#D4AF37]/40 hover:border-[#D4AF37] flex items-center justify-center shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 group"
        aria-label="Scroll to top of page"
      >
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </aside>
  );
}
