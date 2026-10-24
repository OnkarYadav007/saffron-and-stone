"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = [".reveal", ".reveal-left", ".reveal-right"];
    const elements: Element[] = [];

    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => elements.push(el));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Re-observe on DOM mutations (for dynamic content)
    const mutObserver = new MutationObserver(() => {
      selectors.forEach((sel) => {
        document.querySelectorAll(`${sel}:not(.visible)`).forEach((el) => {
          observer.observe(el);
        });
      });
    });
    mutObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObserver.disconnect();
    };
  }, []);

  return null;
}
