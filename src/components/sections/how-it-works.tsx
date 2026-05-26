import {
  BubbleChatIcon,
  Call02Icon,
  CheckmarkBadge02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { SectionHeading } from "@/components/ui/section-heading";

interface Step {
  body: string;
  icon: IconSvgElement;
  number: string;
  title: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Call02Icon,
    title: "Server A runs s.call",
    body: "The channel joins a queue and waits for a match.",
  },
  {
    number: "02",
    icon: CheckmarkBadge02Icon,
    title: "Server B runs s.call",
    body: "Instantly paired — a webhook is set up on both ends.",
  },
  {
    number: "03",
    icon: BubbleChatIcon,
    title: "Messages relay both ways",
    body: "Every message comes through wearing the sender's name and avatar.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="cv-auto relative flex flex-col gap-12 border-border/60 border-t py-20 sm:gap-14 md:py-28"
      id="how"
    >
      <SectionHeading
        className="reveal-on-scroll"
        eyebrow="How it works"
        subtitle="Three steps. No dashboards, no setup screens — it all happens in Discord."
        title={
          <>
            From command to call{" "}
            <em className="font-medium italic">in seconds.</em>
          </>
        }
      />

      <div
        className="grid w-full gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3"
        data-reveal-stagger="80"
      >
        {steps.map((step) => (
          <article
            className="reveal-on-scroll group relative flex flex-col gap-4 bg-card p-6 transition-[background-color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-card/70 md:p-7"
            key={step.number}
          >
            <div className="flex items-center justify-between">
              <span className="display-numeral text-[28px] text-pink-500 leading-none">
                {step.number}
              </span>
              <span className="flex size-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-[border-color,color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-pink-500/40 group-hover:text-pink-400">
                <HugeiconsIcon
                  className="size-4"
                  icon={step.icon}
                  strokeWidth={1.8}
                />
              </span>
            </div>
            <h3 className="font-sans font-semibold text-[16px] text-foreground tracking-[-0.01em]">
              {step.title}
            </h3>
            <p className="text-[14px] text-muted-foreground leading-[1.65]">
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
