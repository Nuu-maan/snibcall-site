import type * as React from "react";

import { cn } from "@/lib/utils";

type CardTone = "tl" | "tr" | "bl" | "br" | "center" | "tinted" | "soft";

const toneClass: Record<CardTone, string> = {
  tl: "bg-card-glow-tl",
  tr: "bg-card-glow-tr",
  bl: "bg-card-glow-bl",
  br: "bg-card-glow-br",
  center: "bg-card-glow-center",
  tinted: "bg-card-tinted",
  soft: "bg-card-soft",
};

interface FeatureCardProps extends React.ComponentProps<"div"> {
  description: React.ReactNode;
  glow?: boolean;
  title: React.ReactNode;
  tone?: CardTone;
  visual?: React.ReactNode;
  visualPosition?: "top" | "right";
}

export function FeatureCard({
  className,
  visual,
  title,
  description,
  visualPosition = "top",
  glow = false,
  tone = "tinted",
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-[2.5rem] border p-8 ring-pink-soft transition-all duration-300 hover:border-pink-500/20",
        toneClass[tone],
        glow && "glow-pink-sm",
        visualPosition === "right" && "flex flex-col md:flex-row md:gap-8",
        className
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-px right-12 left-12 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent opacity-60"
      />

      {visual && visualPosition === "top" ? (
        <div className="mb-8 flex h-56 items-center justify-center">
          {visual}
        </div>
      ) : null}

      <div
        className={cn(
          "relative flex flex-col gap-3",
          visualPosition === "right" && "md:flex-1 md:justify-center"
        )}
      >
        <h3 className="font-semibold text-[22px] text-pink-200 tracking-tight">
          {title}
        </h3>
        <p className="max-w-md font-medium text-[16px] text-muted-foreground leading-[175%] tracking-tight">
          {description}
        </p>
      </div>

      {visual && visualPosition === "right" ? (
        <div className="mt-8 flex h-56 items-center justify-center md:order-first md:mt-0 md:h-auto md:flex-1">
          {visual}
        </div>
      ) : null}
    </div>
  );
}
