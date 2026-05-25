"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_SELECTOR = [
  ".reveal-on-scroll",
  ".reveal-on-scroll-1",
  ".reveal-on-scroll-2",
  ".reveal-on-scroll-3",
  ".reveal-up-lg",
  ".reveal-left",
  ".reveal-right",
  ".reveal-scale",
  ".reveal-scale-y",
]
  .map((c) => `${c}:not(.is-visible)`)
  .join(",");

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
    );
    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
