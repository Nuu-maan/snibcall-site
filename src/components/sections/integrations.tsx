import {
  GithubIcon,
  Plug02Icon,
  SpotifyIcon,
  TwitchIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { GradientText } from "@/components/ui/gradient-text";
import { SectionHeading } from "@/components/ui/section-heading";

interface IntegrationCard {
  description: string;
  glow: string;
  icon: IconSvgElement;
  iconBg: string;
  iconClass: string;
  name: string;
  tagline: string;
}

const integrations: IntegrationCard[] = [
  {
    name: "Spotify",
    tagline: "Music",
    description:
      "Lorem ipsum dolor sit amet. Search and stream tracks from any voice channel.",
    icon: SpotifyIcon,
    glow: "oklch(0.7 0.22 145 / 0.4)",
    iconClass: "text-[oklch(0.78_0.2_145)]",
    iconBg: "oklch(0.7 0.22 145 / 0.12)",
  },
  {
    name: "Twitch",
    tagline: "Streaming",
    description:
      "Consectetur adipiscing elit. Live notifications for any streamer your community follows.",
    icon: TwitchIcon,
    glow: "oklch(0.6 0.22 295 / 0.4)",
    iconClass: "text-[oklch(0.75_0.22_295)]",
    iconBg: "oklch(0.6 0.22 295 / 0.12)",
  },
  {
    name: "GitHub",
    tagline: "Code",
    description:
      "Sed do eiusmod tempor. Track repo activity, pull requests, and releases without leaving Discord.",
    icon: GithubIcon,
    glow: "oklch(0.85 0 0 / 0.25)",
    iconClass: "text-foreground",
    iconBg: "oklch(0.2 0 0)",
  },
];

export function Integrations() {
  return (
    <section className="relative flex flex-col items-center gap-16 py-24 md:py-32">
      <SectionHeading
        icon={Plug02Icon}
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Effortlessly track, view, and notify across every platform that matters."
        title={
          <>
            Integrations with your favorite{" "}
            <GradientText>Platforms</GradientText>
          </>
        }
      />

      <div className="grid w-full gap-6 md:grid-cols-3">
        {integrations.map((integration) => (
          <article
            className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card-tinted p-8 ring-pink-soft transition-all duration-500 hover:-translate-y-1 hover:border-pink-500/20"
            key={integration.name}
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-32 -left-16 size-72 rounded-full opacity-70 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle, ${integration.glow} 0%, transparent 70%)`,
              }}
            />
            <div
              aria-hidden="true"
              className="absolute -top-px right-12 left-12 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"
            />

            <div className="relative flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div
                  className="flex size-14 items-center justify-center rounded-2xl border ring-soft"
                  style={{ background: integration.iconBg }}
                >
                  <HugeiconsIcon
                    className={`size-7 ${integration.iconClass}`}
                    icon={integration.icon}
                    strokeWidth={1.5}
                  />
                </div>
                <span className="rounded-full border bg-secondary/60 px-2.5 py-0.5 font-medium font-mono text-[12px] text-muted-foreground uppercase tracking-wider">
                  {integration.tagline}
                </span>
              </div>
              <h3 className="font-semibold text-[22px] text-foreground tracking-tight">
                {integration.name}
              </h3>
              <p className="font-medium text-[16px] text-muted-foreground leading-[175%] tracking-tight">
                {integration.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
