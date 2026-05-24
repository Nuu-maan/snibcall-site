import {
  BubbleChatIcon,
  Call02Icon,
  CallEnd01Icon,
  FavouriteIcon,
  Shield01Icon,
  SparklesIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { GradientText } from "@/components/ui/gradient-text";
import { SectionHeading } from "@/components/ui/section-heading";

interface Feature {
  description: string;
  icon: IconSvgElement;
  tag: string;
  title: string;
}

const features: Feature[] = [
  {
    icon: Call02Icon,
    tag: "core",
    title: "cross-server calls",
    description: "run s.call in two servers — get paired and chat.",
  },
  {
    icon: UserMultipleIcon,
    tag: "relay",
    title: "webhook identity",
    description: "each message arrives wearing the sender's name + avatar.",
  },
  {
    icon: BubbleChatIcon,
    tag: "relay",
    title: "replies that travel",
    description:
      "reply to anyone — the original message is quoted on the other side.",
  },
  {
    icon: FavouriteIcon,
    tag: "social",
    title: "friend requests",
    description: "s.fr shares your discord handle as a copy-friendly embed.",
  },
  {
    icon: CallEnd01Icon,
    tag: "control",
    title: "skip & hangup",
    description: "s.skip finds a new server. s.hangup ends the call.",
  },
  {
    icon: Shield01Icon,
    tag: "mod",
    title: "admin block-list",
    description: "s.block to refuse a server forever — survives restarts.",
  },
];

export function WhatItDoes() {
  return (
    <section
      className="reveal-on-scroll cv-auto relative flex flex-col items-center gap-16 py-24 md:py-32"
      id="features"
    >
      <SectionHeading
        icon={SparklesIcon}
        subtitle="everything the bot does today, in eleven words or less."
        title={
          <>
            what <GradientText>snibcall</GradientText> does
          </>
        }
      />

      <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            className="group relative overflow-hidden rounded-3xl border border-border bg-card-tinted p-7 ring-pink-soft transition-colors duration-300 hover:border-pink-500/25"
            key={feature.title}
          >
            <div
              aria-hidden="true"
              className="absolute -top-px right-12 left-12 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent opacity-60"
            />
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-200 ring-soft transition-transform duration-500 group-hover:scale-110">
                  <HugeiconsIcon
                    className="size-5"
                    icon={feature.icon}
                    strokeWidth={1.6}
                  />
                </span>
                <span className="rounded-full border border-pink-500/15 bg-pink-500/8 px-2.5 py-0.5 font-medium font-mono text-[10px] text-pink-200 lowercase tracking-wider">
                  {feature.tag}
                </span>
              </div>
              <h3 className="font-semibold text-[18px] text-pink-100 lowercase tracking-tight">
                {feature.title}
              </h3>
              <p className="text-pretty font-medium text-[15px] text-muted-foreground leading-[170%] tracking-tight">
                {feature.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
