import type * as React from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  align?: "center" | "left";
  className?: string;
  eyebrow?: string;
  subtitle?: React.ReactNode;
  title: React.ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 font-medium text-[12px] text-pink-400 tracking-tight">
          <span aria-hidden className="size-1 rounded-full bg-pink-500" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-normal text-[30px] text-foreground leading-[1.1] tracking-[-0.025em] sm:text-[36px] md:text-[40px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-xl text-[15px] text-muted-foreground leading-[1.6] sm:text-[16px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
