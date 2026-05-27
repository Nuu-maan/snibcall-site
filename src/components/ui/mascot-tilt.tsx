"use client";

import { type ReactNode, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

// Maximum rotation when the cursor is at the far edge of the viewport.
// Wide enough that the head clearly swivels to face the cursor — not a
// subtle nod. Horizontal range is wider than vertical so the motion
// feels like turning rather than bobbing.
const MAX_ROTATE_Y_DEG = 32;
const MAX_ROTATE_X_DEG = 22;
// Small lateral lean — the body drifts a few pixels toward the cursor
// on top of the rotation, which sells "leaning to look" without the
// scale-up artifact you get from translateZ in a perspective frame.
const MAX_TRANSLATE_X_PX = 6;
const MAX_TRANSLATE_Y_PX = 4;
// Lerp factor per frame (~60fps). Lower = silkier but laggier follow;
// higher = snappier but jittery near the cursor. 0.11 keeps it
// responsive without overshooting.
const LERP = 0.11;
// Below this delta the rAF loop stops writing to the DOM — saves a
// frame's worth of work once the mascot has fully settled.
const SETTLE_EPSILON = 0.0008;

interface MascotTiltProps {
  children: ReactNode;
  className?: string;
}

// Tracks the cursor anywhere on the page (not just on hover) and lerps
// the mascot's rotation toward that target each frame. The mascot turns
// to face wherever the cursor is. Touch and reduced-motion users get
// the static mascot.
export function MascotTilt({ children, className }: MascotTiltProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    if (reduced.matches || coarse.matches) {
      return;
    }

    // Target = where we want to be (driven by cursor).
    // Current = where we actually are (lerps toward target each frame).
    // Values are normalized to [-1, 1] relative to viewport halves so
    // they're resolution-independent.
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let rafId = 0;
    let mounted = true;

    function handleMove(event: PointerEvent) {
      const wrapper = wrapperRef.current;
      if (!wrapper) {
        return;
      }
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      // Clamp to [-1, 1] so a cursor far outside the viewport (during
      // window resize, dragged-off-screen, etc.) can't push the angle
      // past the configured max.
      const dx = Math.max(-1, Math.min(1, (event.clientX - centerX) / halfW));
      const dy = Math.max(-1, Math.min(1, (event.clientY - centerY) / halfH));
      target.x = dx;
      target.y = dy;
    }

    function tick() {
      if (!mounted) {
        return;
      }
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      // Skip the DOM write when we're essentially at rest — keeps the
      // browser from invalidating composite layers on idle frames.
      if (Math.abs(dx) > SETTLE_EPSILON || Math.abs(dy) > SETTLE_EPSILON) {
        current.x += dx * LERP;
        current.y += dy * LERP;
        const inner = innerRef.current;
        if (inner) {
          // Positive rotateY swings the right side back (so the mascot
          // looks right when cursor is right). Vertical is inverted —
          // cursor up means tilt the top toward viewer = positive rotateX
          // in standard CSS terms is the OPPOSITE, so we negate dy.
          const rotateY = current.x * MAX_ROTATE_Y_DEG;
          const rotateX = -current.y * MAX_ROTATE_X_DEG;
          const translateX = current.x * MAX_TRANSLATE_X_PX;
          const translateY = current.y * MAX_TRANSLATE_Y_PX;
          inner.style.transform = `translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, 0) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        }
      }
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", handleMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      mounted = false;
      window.removeEventListener("pointermove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className={cn("inline-block [perspective:1100px]", className)}
      ref={wrapperRef}
    >
      <div
        className="motion-reduce:!transform-none will-change-transform [transform-style:preserve-3d]"
        ref={innerRef}
      >
        {children}
      </div>
    </div>
  );
}
