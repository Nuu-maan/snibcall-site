import {
  BubbleChatIcon,
  Call02Icon,
  CallEnd01Icon,
  FavouriteIcon,
  Shield01Icon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { SectionHeading } from "@/components/ui/section-heading";

interface Feature {
  description: string;
  icon: IconSvgElement;
  title: string;
}

const features: Feature[] = [
  {
    icon: Call02Icon,
    title: "Cross-server calls",
    description:
      "Run s.call in two servers, get paired and start chatting instantly.",
  },
  {
    icon: UserMultipleIcon,
    title: "Webhook identity",
    description:
      "Each message arrives wearing the original sender's name and avatar.",
  },
  {
    icon: BubbleChatIcon,
    title: "Replies that travel",
    description:
      "Reply to anyone, the original message is quoted on the other side.",
  },
  {
    icon: FavouriteIcon,
    title: "Friend requests",
    description:
      "s.fr shares your Discord handle as a clean, copy-friendly embed.",
  },
  {
    icon: CallEnd01Icon,
    title: "Skip & hangup",
    description: "s.skip finds a new server. s.hangup ends the call quietly.",
  },
  {
    icon: Shield01Icon,
    title: "Admin block-list",
    description:
      "s.block to refuse a server forever. Persists across restarts.",
  },
];

export function WhatItDoes() {
  return (
    <section
      className="cv-auto relative flex flex-col gap-12 border-border/60 border-t py-20 sm:gap-14 md:py-28"
      id="features"
    >
      <SectionHeading
        className="reveal-on-scroll"
        eyebrow="Features"
        subtitle="Everything the bot does today. No dashboards, no setup screens."
        title={
          <>
            What it <em className="font-medium italic">does.</em>
          </>
        }
      />

      <div
        className="grid w-full gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
        data-reveal-stagger="70"
      >
        {features.map((feature) => (
          <article
            className="reveal-on-scroll group flex flex-col items-start gap-3 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5"
            key={feature.title}
          >
            <span className="flex size-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-[transform,border-color,color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 group-hover:border-pink-500/40 group-hover:text-pink-400">
              <HugeiconsIcon
                className="size-4.5"
                icon={feature.icon}
                strokeWidth={1.8}
              />
            </span>
            <h3 className="font-sans font-semibold text-[15px] text-foreground tracking-[-0.01em]">
              {feature.title}
            </h3>
            <p className="text-[14px] text-muted-foreground leading-[1.65]">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
