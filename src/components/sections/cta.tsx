import { ArrowRight02Icon, SparklesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { GradientBlob } from "@/components/decor/gradient-blob";
import { GradientText } from "@/components/ui/gradient-text";

export function CTA() {
  return (
    <section className="relative flex flex-col items-center gap-8 overflow-hidden py-32 text-center">
      <GradientBlob
        className="bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/3"
        color="pink"
        size="xl"
      />

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 left-1/2 -z-10 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent"
      />

      <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 font-medium text-[12px] text-pink-200 tracking-tight ring-soft">
        <HugeiconsIcon
          className="size-3.5"
          icon={SparklesIcon}
          strokeWidth={2}
        />
        Ready when you are
      </div>

      <h2 className="max-w-3xl text-balance font-bold text-[35px] text-foreground leading-[110%] tracking-tight md:text-[50px]">
        Get <GradientText>snibcall</GradientText> in your server today.
      </h2>

      <p className="max-w-lg text-balance font-medium text-[18px] text-muted-foreground leading-[175%] tracking-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Free to start,
        upgrade whenever.
      </p>

      <Link
        className="glow-pink inline-flex items-center gap-2.5 rounded-full bg-foreground px-7 py-3.5 font-semibold text-[16px] text-background tracking-tight transition-all duration-300 hover:scale-[1.03]"
        href="/invite"
      >
        Get started
        <HugeiconsIcon
          className="size-4"
          icon={ArrowRight02Icon}
          strokeWidth={2.2}
        />
      </Link>
    </section>
  );
}
