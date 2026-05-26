"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_CLASSES = [
  "reveal-on-scroll",
  "reveal-on-scroll-1",
  "reveal-on-scroll-2",
  "reveal-on-scroll-3",
  "reveal-on-scroll-4",
  "reveal-on-scroll-5",
  "reveal-up-lg",
  "reveal-left",
  "reveal-right",
  "reveal-scale",
  "reveal-scale-y",
];

const REVEAL_SELECTOR = REVEAL_CLASSES.map(
  (c) => `.${c}:not(.is-visible)`
).join(",");

const DEFAULT_STAGGER_STEP_MS = 70;
const MAX_STAGGER_INDEX = 8;

function applyAutoStagger(): void {
  const groups = document.querySelectorAll<HTMLElement>(
    "[data-reveal-stagger]"
  );
  for (const group of groups) {
    const step = Number(group.dataset.revealStagger) || DEFAULT_STAGGER_STEP_MS;
    const base = Number(group.dataset.revealStaggerBase) || 0;
    let index = 0;
    for (const child of Array.from(group.children) as HTMLElement[]) {
      const hasReveal = REVEAL_CLASSES.some((c) => child.classList.contains(c));
      if (!hasReveal) {
        continue;
      }
      if (child.style.transitionDelay) {
        index += 1;
        continue;
      }
      const slot = Math.min(index, MAX_STAGGER_INDEX);
      child.style.transitionDelay = `${base + slot * step}ms`;
      index += 1;
    }
  }
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    applyAutoStagger();

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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    for (const el of elements) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
