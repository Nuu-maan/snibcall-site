import {
  Add01Icon,
  Cancel01Icon,
  CheckmarkCircle01Icon,
  CrownIcon,
  EyeIcon,
  HashtagIcon,
  HeadphonesIcon,
  LockIcon,
  MagicWand02Icon,
  Mic01Icon,
  Settings02Icon,
  Speaker01Icon,
  UserMultipleIcon,
  ViewOffIcon,
  VolumeMute01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { GradientText } from "@/components/ui/gradient-text";
import { SectionHeading } from "@/components/ui/section-heading";

interface ControlButton {
  icon: IconSvgElement;
  label: string;
}

const controls: ControlButton[] = [
  { label: "Lock", icon: LockIcon },
  { label: "Hide", icon: EyeIcon },
  { label: "Unhide", icon: ViewOffIcon },
  { label: "Mute", icon: VolumeMute01Icon },
  { label: "Speak", icon: Mic01Icon },
  { label: "Settings", icon: Settings02Icon },
  { label: "Owner", icon: CrownIcon },
  { label: "Add user", icon: Add01Icon },
  { label: "Kick", icon: Cancel01Icon },
  { label: "Members", icon: UserMultipleIcon },
];

interface SetupStep {
  done?: boolean;
  label: string;
  mono: boolean;
}

const setupSteps: SetupStep[] = [
  { label: ";voicemaster setup", mono: true },
  { label: "Channels created", mono: false, done: true },
  { label: "Permissions configured", mono: false, done: true },
  { label: "Voicemaster ready", mono: false, done: true },
];

const channels = [
  { name: "Join to Create", locked: false, icon: Speaker01Icon },
  { name: "anish's channel", locked: false, icon: Speaker01Icon },
  { name: "private vc", locked: true, icon: Speaker01Icon },
];

const members = [
  { name: "anish", color: "oklch(0.7 0.27 350)" },
  { name: "jordan", color: "oklch(0.65 0.2 240)" },
  { name: "kai", color: "oklch(0.7 0.2 145)" },
];

function ControlsCard() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border bg-card-glow-tr p-8 ring-pink-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-px right-12 left-12 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"
      />
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-[22px] text-pink-200 tracking-tight">
            Voicemaster Interface
          </h3>
          <p className="max-w-md font-medium text-[16px] text-muted-foreground leading-[175%] tracking-tight">
            Lorem ipsum dolor sit amet. Powerful built-in controls for every
            personal voice channel, accessible from a single command.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-3">
          {controls.map((control) => (
            <button
              className="group relative flex size-12 items-center justify-center rounded-xl border bg-secondary/80 text-pink-200 ring-soft transition-all duration-200 hover:scale-105 hover:border-pink-500/30 hover:bg-pink-500/15 hover:text-pink-100"
              key={control.label}
              title={control.label}
              type="button"
            >
              <HugeiconsIcon
                className="size-5"
                icon={control.icon}
                strokeWidth={1.6}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function EasySetupCard() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border bg-card-glow-bl p-8 ring-pink-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-px right-12 left-12 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-[22px] text-pink-200 tracking-tight">
            Easy Setup
          </h3>
          <p className="font-medium text-[16px] text-muted-foreground leading-[175%] tracking-tight">
            Spend seconds, not hours. One command and you're ready to go.
          </p>
        </div>

        <ol className="flex flex-col gap-2.5">
          {setupSteps.map((step) => (
            <li
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/40 px-4 py-3 backdrop-blur-sm"
              key={step.label}
            >
              <span className="flex size-7 items-center justify-center rounded-md border border-pink-500/20 bg-pink-500/15 text-pink-200">
                <HugeiconsIcon
                  className="size-3.5"
                  icon={step.mono ? MagicWand02Icon : CheckmarkCircle01Icon}
                  strokeWidth={2}
                />
              </span>
              <span
                className={
                  step.mono
                    ? "font-medium font-mono text-[14px] text-foreground tracking-tight"
                    : "font-medium text-[14px] text-muted-foreground tracking-tight"
                }
              >
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function RolesCard() {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border bg-card-glow-br p-8 ring-pink-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-px right-12 left-12 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-[22px] text-pink-200 tracking-tight">
            Custom Roles
          </h3>
          <p className="font-medium text-[16px] text-muted-foreground leading-[175%] tracking-tight">
            Grant tailored roles to anyone who joins your personal voice
            channel.
          </p>
        </div>

        <div className="flex flex-col gap-1.5 rounded-2xl border border-border/60 bg-secondary/40 p-3 backdrop-blur-sm">
          <div className="px-3 py-2 font-mono font-semibold text-[10px] text-muted-foreground uppercase tracking-wider">
            Voice Channels
          </div>
          {channels.map((channel) => (
            <div
              className="flex items-center gap-2 rounded-md px-3 py-1.5 font-medium text-[14px] text-muted-foreground tracking-tight transition-colors hover:bg-pink-500/10 hover:text-foreground"
              key={channel.name}
            >
              <HugeiconsIcon
                className="size-4"
                icon={channel.locked ? LockIcon : channel.icon}
                strokeWidth={1.6}
              />
              <span className="font-mono">{channel.name}</span>
            </div>
          ))}

          <div className="mt-3 flex flex-col gap-1 border-t pt-3">
            {members.map((member) => (
              <div
                className="flex items-center gap-2.5 rounded-md px-3 py-1.5"
                key={member.name}
              >
                <span
                  aria-hidden="true"
                  className="size-6 rounded-full ring-2 ring-pink-500/20"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}, rgb(17 18 18))`,
                  }}
                />
                <span className="font-medium text-[14px] text-foreground tracking-tight">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Voicemaster() {
  return (
    <section className="flex flex-col items-center gap-16 py-24 md:py-32">
      <SectionHeading
        icon={HeadphonesIcon}
        subtitle="Lorem ipsum dolor sit amet. Temporary, personalized voice channels for any conversation in your community."
        title={
          <>
            Personal channels with <GradientText>Voicemaster</GradientText>
          </>
        }
      />

      <div className="grid w-full gap-6">
        <ControlsCard />
        <div className="grid gap-6 md:grid-cols-2">
          <EasySetupCard />
          <RolesCard />
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 font-medium text-[12px] text-pink-200 tracking-tight ring-soft">
        <HugeiconsIcon
          className="size-3.5"
          icon={HashtagIcon}
          strokeWidth={2}
        />
        20+ voice commands
      </div>
    </section>
  );
}
