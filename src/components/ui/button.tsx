import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

// Unified button language for the site. Keep variants narrow —
// every additional knob makes the system harder to use consistently.
//
//   primary    — pink, the one true "do the thing" action.
//   secondary  — dark glass with a border, used when there are two
//                co-equal actions next to a primary.
//   ghost      — text-only, for low-stakes links and inline triggers.
//   icon       — square, content-free button for icon-only triggers.
//
// Shared chrome lives in the base: a single radius, a single easing,
// a single focus ring. That's where the "looks like one app" feel
// comes from — not from the variants themselves.
export const buttonStyles = cva(
  [
    "group/btn inline-flex shrink-0 select-none items-center justify-center gap-2",
    "whitespace-nowrap rounded-md font-semibold tracking-tight",
    "transition-[background-color,border-color,box-shadow,color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        // Liquid-glass pink: a translucent pink surface with a top
        // specular highlight and saturated backdrop blur, so the button
        // reads as a refractive chip lifting off the page rather than a
        // flat fill. The hover utility deepens the tint + spreads the
        // outer wash so the surface feels like it leans toward the cursor.
        primary: [
          "liquid-glass-pink text-white",
          "hover:liquid-glass-pink-hover",
          "focus-visible:ring-pink-500/50",
        ].join(" "),
        secondary: [
          "border border-border bg-card text-foreground",
          "hover:border-border/100 hover:bg-secondary",
          "focus-visible:ring-ring",
        ].join(" "),
        ghost: [
          "text-muted-foreground",
          "hover:bg-secondary hover:text-foreground",
          "focus-visible:ring-ring",
        ].join(" "),
        icon: [
          "border border-border bg-card text-foreground",
          "hover:bg-secondary",
          "focus-visible:ring-ring",
        ].join(" "),
      },
      size: {
        sm: "h-8 gap-1.5 px-3 text-[12.5px]",
        md: "h-9 gap-1.5 px-4 text-[13.5px]",
        lg: "h-11 gap-2 px-5 text-[14.5px]",
        // The icon size enforces a square footprint and ignores px-*.
        icon: "size-9 gap-0 p-0",
      },
    },
    compoundVariants: [
      {
        variant: "icon",
        size: ["sm", "md", "lg"],
        // Re-zero padding on icon variant regardless of which size token
        // is applied, so callers can pair `variant="icon"` with the size
        // utility purely for height intent.
        className: "gap-0 p-0",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonStyles>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {}

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ variant, size }), className)}
      type={type}
      {...props}
    />
  );
}
