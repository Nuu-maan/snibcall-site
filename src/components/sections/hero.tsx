import {
  ArrowRight02Icon,
  HeadphonesIcon,
  Robot01Icon,
  Shield01Icon,
  SparklesIcon,
  StarIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

import { FloatingCard } from "@/components/decor/floating-card";
import { GradientBlob } from "@/components/decor/gradient-blob";
import { GradientText } from "@/components/ui/gradient-text";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-8 py-24 text-center md:py-32">
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 h-[42rem] w-full max-w-5xl -translate-x-1/2 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
      />
      <GradientBlob className="-top-32 -z-10" color="pink" size="lg" />

      <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 font-medium text-[12px] text-pink-200 tracking-tight ring-soft">
        <HugeiconsIcon className="size-3.5" icon={StarIcon} strokeWidth={2} />
        New in 2026 — Voicemaster v2
      </div>

      <h1 className="max-w-3xl text-balance font-bold text-[35px] text-foreground leading-[110%] tracking-tight md:text-[50px]">
        snibcall is Discord's premier <GradientText>voice & call</GradientText>{" "}
        bot
      </h1>

      <p className="max-w-lg text-balance font-medium text-[18px] text-muted-foreground leading-[175%] tracking-tight">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Built to
        elevate your community's voice experience, streamline server management,
        and unlock premium tooling for every conversation.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          className="glow-pink-sm inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-[16px] text-background tracking-tight transition-all hover:scale-[1.03]"
          href="/invite"
        >
          <HugeiconsIcon
            className="size-4"
            icon={SparklesIcon}
            strokeWidth={2.2}
          />
          Invite to Discord
        </Link>
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold text-[16px] text-foreground tracking-tight transition-all hover:border-pink-500/30"
          href="/purchase"
        >
          Purchase
          <HugeiconsIcon
            className="size-4"
            icon={ArrowRight02Icon}
            strokeWidth={2.2}
          />
        </Link>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-10 font-medium text-[14px] text-muted-foreground tracking-tight">
        <li className="inline-flex items-center gap-2">
          <HugeiconsIcon
            className="size-4 text-pink-300"
            icon={SparklesIcon}
            strokeWidth={2}
          />
          boost perks
        </li>
        <li className="inline-flex items-center gap-2">
          <HugeiconsIcon
            className="size-4 text-pink-300"
            icon={StarIcon}
            strokeWidth={2}
          />
          vanity rewards
        </li>
        <li className="inline-flex items-center gap-2">
          <HugeiconsIcon
            className="size-4 text-pink-300"
            icon={Robot01Icon}
            strokeWidth={2}
          />
          social media
        </li>
      </ul>

      <div className="grid w-full grid-cols-1 gap-3 pt-12 sm:grid-cols-3 md:hidden">
        <FloatingCard icon={Robot01Icon} label="auto moderation" />
        <FloatingCard icon={HeadphonesIcon} label="voice channels" />
        <FloatingCard icon={Shield01Icon} label="anti-raid" />
      </div>
    </section>
  );
}
