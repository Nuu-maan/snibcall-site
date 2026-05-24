import {
  FilterIcon,
  HashtagIcon,
  LinkBackwardIcon,
  LockIcon,
  MagicWand02Icon,
  Shield01Icon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { FeatureCard } from "@/components/ui/feature-card";
import { GradientText } from "@/components/ui/gradient-text";
import { SectionHeading } from "@/components/ui/section-heading";

interface FilterChip {
  icon: IconSvgElement;
  label: string;
  x: number;
  y: number;
}

const filterChips: FilterChip[] = [
  { label: "Links", icon: LinkBackwardIcon, x: 40, y: 40 },
  { label: "Mentions", icon: UserMultipleIcon, x: 200, y: 30 },
  { label: "Invites", icon: HashtagIcon, x: 60, y: 140 },
  { label: "Spam", icon: FilterIcon, x: 200, y: 150 },
];

function FiltersDiagram() {
  return (
    <div className="relative h-full w-full">
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full text-pink-500/50"
        viewBox="0 0 320 220"
      >
        <title>Filters network diagram</title>
        <defs>
          <radialGradient cx="50%" cy="50%" id="filter-glow" r="50%">
            <stop offset="0%" stopColor="oklch(0.7 0.27 350 / 0.4)" />
            <stop offset="100%" stopColor="oklch(0.7 0.27 350 / 0)" />
          </radialGradient>
        </defs>
        <circle cx="160" cy="110" fill="url(#filter-glow)" r="60" />
        <path
          d="M 90 60 Q 145 30 230 50"
          fill="none"
          stroke="currentColor"
          strokeDasharray="3 4"
          strokeLinecap="round"
        />
        <path
          d="M 90 60 Q 80 100 110 160"
          fill="none"
          stroke="currentColor"
          strokeDasharray="3 4"
          strokeLinecap="round"
        />
        <path
          d="M 230 50 Q 260 110 240 170"
          fill="none"
          stroke="currentColor"
          strokeDasharray="3 4"
          strokeLinecap="round"
        />
        <path
          d="M 110 160 Q 175 190 240 170"
          fill="none"
          stroke="currentColor"
          strokeDasharray="3 4"
          strokeLinecap="round"
        />
        <circle cx="160" cy="110" fill="oklch(0.7 0.27 350 / 0.3)" r="10" />
        <circle cx="160" cy="110" fill="oklch(0.7 0.27 350)" r="3.5" />
      </svg>

      {filterChips.map((chip) => (
        <div
          className="absolute inline-flex items-center gap-1.5 rounded-full border border-pink-500/20 bg-secondary/80 px-3 py-1.5 font-medium font-mono text-[12px] text-foreground tracking-tight ring-soft backdrop-blur-sm"
          key={chip.label}
          style={{ left: `${chip.x}px`, top: `${chip.y}px` }}
        >
          <HugeiconsIcon
            className="size-3.5 text-pink-300"
            icon={chip.icon}
            strokeWidth={2}
          />
          {chip.label}
        </div>
      ))}
    </div>
  );
}

interface RadarDot {
  r: number;
  x: number;
  y: number;
}

interface RadarProps {
  color?: "pink" | "soft";
  dots?: RadarDot[];
}

function Radar({
  color = "pink",
  dots = [
    { x: 70, y: 60, r: 2 },
    { x: 140, y: 90, r: 3 },
    { x: 100, y: 140, r: 2.5 },
    { x: 60, y: 160, r: 2 },
  ],
}: RadarProps) {
  const sweepStroke =
    color === "pink" ? "oklch(0.75 0.27 350)" : "oklch(1 0 0)";
  const ringStroke =
    color === "pink" ? "oklch(0.7 0.27 350 / 0.25)" : "oklch(1 0 0 / 0.12)";
  const dotFill = color === "pink" ? "oklch(0.78 0.27 350)" : "oklch(1 0 0)";
  const glowColor =
    color === "pink" ? "oklch(0.7 0.27 350 / 0.15)" : "oklch(1 0 0 / 0.08)";

  return (
    <svg aria-hidden="true" className="size-56" viewBox="0 0 220 220">
      <title>Radar visualization</title>
      <defs>
        <radialGradient cx="50%" cy="50%" id={`radar-glow-${color}`} r="50%">
          <stop offset="0%" stopColor={glowColor} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id={`sweep-${color}`} x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor={sweepStroke} stopOpacity="0" />
          <stop offset="100%" stopColor={sweepStroke} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="110" fill={`url(#radar-glow-${color})`} r="100" />
      <circle
        cx="110"
        cy="110"
        fill="none"
        r="40"
        stroke={ringStroke}
        strokeWidth="1"
      />
      <circle
        cx="110"
        cy="110"
        fill="none"
        r="70"
        stroke={ringStroke}
        strokeWidth="1"
      />
      <circle
        cx="110"
        cy="110"
        fill="none"
        r="100"
        stroke={ringStroke}
        strokeWidth="1"
      />
      <line
        stroke={ringStroke}
        strokeDasharray="2 4"
        strokeWidth="0.5"
        x1="10"
        x2="210"
        y1="110"
        y2="110"
      />
      <line
        stroke={ringStroke}
        strokeDasharray="2 4"
        strokeWidth="0.5"
        x1="110"
        x2="110"
        y1="10"
        y2="210"
      />
      <g
        className="animate-radar-sweep"
        style={{ transformOrigin: "110px 110px" }}
      >
        <path
          d="M 110 110 L 210 110 A 100 100 0 0 0 180 40 Z"
          fill={`url(#sweep-${color})`}
        />
      </g>
      {dots.map((dot) => (
        <g key={`${dot.x}-${dot.y}`}>
          <circle
            cx={dot.x}
            cy={dot.y}
            fill={dotFill}
            opacity="0.3"
            r={dot.r * 2.5}
          />
          <circle cx={dot.x} cy={dot.y} fill={dotFill} r={dot.r} />
        </g>
      ))}
    </svg>
  );
}

export function Moderation() {
  return (
    <section className="flex flex-col items-center gap-16 py-24 md:py-32">
      <SectionHeading
        icon={LockIcon}
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
        title={
          <>
            Premium <GradientText>Moderation</GradientText> and{" "}
            <GradientText>Security</GradientText>
          </>
        }
      />

      <div className="grid w-full gap-6 md:grid-cols-2">
        <FeatureCard
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Keep any channel clean with automated filtering options."
          title="Smart Filters"
          tone="tr"
          visual={<FiltersDiagram />}
        />
        <FeatureCard
          description="Lorem ipsum dolor sit amet. Remove all dangerous permissions that can be abused through the API."
          title="Fake Permissions"
          tone="tl"
          visual={
            <div className="relative flex size-44 items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-pink-500/10 blur-2xl"
              />
              <div className="relative flex size-44 items-center justify-center rounded-3xl border border-pink-500/20 bg-card-glow-center text-pink-200 ring-pink-soft">
                <HugeiconsIcon
                  className="size-20"
                  icon={Shield01Icon}
                  strokeWidth={1.2}
                />
              </div>
            </div>
          }
        />
        <FeatureCard
          description="Lorem ipsum dolor sit amet. Detect and neutralize coordinated raid attempts with mass-join, avatar, and account-age filters."
          title="Anti-Raid"
          tone="bl"
          visual={<Radar color="pink" />}
        />
        <FeatureCard
          description="Lorem ipsum dolor sit amet. Prevent malicious actors from nuking your server with a customizable threshold."
          title="Anti-Nuke"
          tone="br"
          visual={<Radar color="pink" />}
        />
      </div>

      <span className="glow-pink-sm inline-flex cursor-pointer items-center gap-2 rounded-full border border-pink-500/40 bg-pink-500/15 px-5 py-2.5 font-semibold text-[14px] text-pink-100 tracking-tight ring-soft transition-colors hover:bg-pink-500/25">
        <HugeiconsIcon
          className="size-4"
          icon={MagicWand02Icon}
          strokeWidth={2}
        />
        100+ more commands
      </span>
    </section>
  );
}
