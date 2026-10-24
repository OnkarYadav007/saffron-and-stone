"use client";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  duration = 2000,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [started, value, duration]);

  return (
    <div
      ref={ref}
      className="text-center p-6 sm:p-8 bg-[#141414] border border-[#D4AF37]/25 hover:border-[#D4AF37]/60 rounded-2xl transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] group"
    >
      <div className="font-serif text-4xl sm:text-5xl font-bold text-gold-shimmer mb-2 group-hover:scale-105 transition-transform duration-300">
        {count}
        {suffix}
      </div>
      <div className="text-[#FAF8F5] text-xs sm:text-sm font-semibold tracking-wider uppercase">
        {label}
      </div>
    </div>
  );
}
