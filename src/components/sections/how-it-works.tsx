import {
  BubbleChatIcon,
  Call02Icon,
  CheckmarkBadge02Icon,
  SparklesIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { GradientText } from "@/components/ui/gradient-text";
import { SectionHeading } from "@/components/ui/section-heading";

interface Step {
  badge: string;
  body: string;
  icon: IconSvgElement;
  number: string;
  title: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Call02Icon,
    title: "server a runs s.call",
    body: "the channel joins a queue and waits for a match.",
    badge: "queued",
  },
  {
    number: "02",
    icon: CheckmarkBadge02Icon,
    title: "server b runs s.call",
    body: "instantly paired — a webhook is set up on both ends.",
    badge: "paired",
  },
  {
    number: "03",
    icon: BubbleChatIcon,
    title: "messages relay both ways",
    body: "every message comes through wearing the sender's name + avatar.",
    badge: "live",
  },
];

export function HowItWorks() {
  return (
    <section
      className="reveal-on-scroll cv-auto relative flex flex-col items-center gap-16 py-24 md:py-32"
      id="how"
    >
      <SectionHeading
        icon={SparklesIcon}
        subtitle="three steps, no dashboards, no setup screens — it all happens in discord."
        title={
          <>
            how <GradientText>it works</GradientText>
          </>
        }
      />

      <div className="relative grid w-full gap-5 md:grid-cols-3">
        {/* connector line behind the cards on desktop */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 right-12 left-12 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent md:block"
        />
        {steps.map((step) => (
          <article
            className="relative flex flex-col gap-4 rounded-3xl border border-border bg-card-tinted p-7 ring-pink-soft"
            key={step.number}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono font-semibold text-[12px] text-pink-300 tracking-[0.2em]">
                {step.number}
              </span>
              <span className="rounded-full border border-pink-500/20 bg-pink-500/10 px-2.5 py-0.5 font-medium font-mono text-[10px] text-pink-200 lowercase tracking-wider">
                {step.badge}
              </span>
            </div>
            <span className="flex size-14 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-200 ring-soft">
              <HugeiconsIcon
                className="size-6"
                icon={step.icon}
                strokeWidth={1.6}
              />
            </span>
            <h3 className="font-semibold text-[18px] text-foreground lowercase tracking-tight">
              {step.title}
            </h3>
            <p className="font-medium text-[14px] text-muted-foreground leading-[170%] tracking-tight">
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
