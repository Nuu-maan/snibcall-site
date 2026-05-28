import {
  ArrowUpRight01Icon,
  Book02Icon,
  BubbleChatIcon,
  Call02Icon,
  CheckmarkBadge02Icon,
  HelpCircleIcon,
  Image01Icon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

import { buttonStyles } from "@/components/ui/button";
import { Mascot3D } from "@/components/ui/mascot-3d";

const CLIENT_ID = "1508101748714377286";
const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}`;
const SUPPORT_URL = "https://discord.gg/As8TbHwhhP";

interface Permission {
  icon: IconSvgElement;
  name: string;
  why: string;
}

const permissions: Permission[] = [
  {
    icon: UserMultipleIcon,
    name: "Manage webhooks",
    why: "So it can post relayed messages wearing each sender's name and avatar.",
  },
  {
    icon: BubbleChatIcon,
    name: "Send messages",
    why: "To post system messages like 'connected' and 'call ended'.",
  },
  {
    icon: Image01Icon,
    name: "Embed links",
    why: "For reply previews and help / friend request cards.",
  },
  {
    icon: Book02Icon,
    name: "Read message history",
    why: "To quote the message you replied to on the other side.",
  },
];

interface Step {
  body: string;
  icon: IconSvgElement;
  number: string;
  title: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: CheckmarkBadge02Icon,
    title: "Pick a server",
    body: "Discord shows the permissions list and lets you choose where snibcall goes.",
  },
  {
    number: "02",
    icon: Call02Icon,
    title: "snibcall joins",
    body: "It slides into your server and says hello in the channel of your choice.",
  },
  {
    number: "03",
    icon: ArrowUpRight01Icon,
    title: "Type s.call",
    body: "In any text channel, and you're queued for your first match.",
  },
];

export function InvitePanel() {
  return (
    <>
      <section className="relative flex flex-col items-center gap-6 py-20 text-center md:py-28">
        <div className="relative flex animate-mascot-float items-center justify-center [transform-origin:50%_80%]">
          <Mascot3D alt="snibcall mascot" className="w-52 sm:w-64" />
        </div>

        <span className="reveal-on-scroll inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-medium text-[11.5px] text-muted-foreground tracking-tight">
          <span className="relative flex size-1.5">
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping-ring rounded-full bg-pink-500"
            />
            <span className="relative size-1.5 animate-status-pulse rounded-full bg-pink-500" />
          </span>
          One click away
        </span>

        <h1 className="reveal-up-lg max-w-2xl font-normal text-[44px] text-foreground leading-[1.05] tracking-[-0.03em] md:text-[60px]">
          Add snibcall to <em className="font-medium italic">your server.</em>
        </h1>

        <p className="reveal-on-scroll-1 max-w-lg text-[15.5px] text-muted-foreground leading-[1.65] sm:text-[16px]">
          You&apos;ll be sent to Discord to pick a server and confirm the
          permissions below. Nothing happens until you say yes.
        </p>

        <a
          className={buttonStyles({
            variant: "primary",
            size: "lg",
            className: "reveal-scale mt-2",
          })}
          href={INVITE_URL}
          rel="noopener"
          target="_blank"
        >
          <HugeiconsIcon
            className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:rotate-[8deg]"
            icon={Call02Icon}
            strokeWidth={2.2}
          />
          Continue to Discord
          <HugeiconsIcon
            className="size-3.5 opacity-80 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            icon={ArrowUpRight01Icon}
            strokeWidth={2.2}
          />
        </a>

        <p className="reveal-on-scroll-2 font-mono text-[11.5px] text-muted-foreground/80 tracking-tight">
          Opens Discord · No card · Revocable any time
        </p>
      </section>

      <section className="flex flex-col gap-8 border-border/60 border-t py-16">
        <div className="reveal-on-scroll flex items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 font-medium text-[12px] text-pink-400 tracking-tight">
              Permissions
            </span>
            <h2 className="font-semibold text-[24px] text-foreground tracking-[-0.02em] sm:text-[28px]">
              What it asks for &amp; why
            </h2>
            <p className="max-w-xl text-[14.5px] text-muted-foreground leading-[1.65]">
              snibcall asks for the bare minimum to make calls work. Here&apos;s
              every permission, in plain language.
            </p>
          </div>
          <span className="hidden font-mono font-semibold text-[12px] text-muted-foreground tabular-nums tracking-wider md:block">
            {permissions.length.toString().padStart(2, "0")}
          </span>
        </div>

        <div
          className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2"
          data-reveal-stagger="60"
        >
          {permissions.map((perm) => (
            <article
              className="reveal-on-scroll group flex flex-col gap-3 bg-card p-5 transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-card/70"
              key={perm.name}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground transition-[transform,border-color,color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5 group-hover:border-pink-500/40 group-hover:text-pink-400">
                  <HugeiconsIcon
                    className="size-4"
                    icon={perm.icon}
                    strokeWidth={1.8}
                  />
                </span>
                <span className="font-semibold text-[14.5px] text-foreground tracking-tight">
                  {perm.name}
                </span>
              </div>
              <p className="text-[13.5px] text-muted-foreground leading-[1.65]">
                {perm.why}
              </p>
            </article>
          ))}
        </div>

        <p className="reveal-on-scroll-2 text-[13px] text-muted-foreground/80 leading-[1.65]">
          Plus the usual basics: view channels and use external emojis. That
          really is the whole list.
        </p>
      </section>

      <section className="flex flex-col gap-8 border-border/60 border-t py-16">
        <div className="reveal-on-scroll flex flex-col gap-2">
          <span className="inline-flex items-center gap-2 font-medium text-[12px] text-pink-400 tracking-tight">
            Next
          </span>
          <h2 className="font-semibold text-[24px] text-foreground tracking-[-0.02em] sm:text-[28px]">
            What happens next
          </h2>
        </div>

        <div
          className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3"
          data-reveal-stagger="80"
        >
          {steps.map((step) => (
            <article
              className="reveal-on-scroll group flex flex-col gap-3 bg-card p-6 transition-[background-color,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-card/70"
              key={step.number}
            >
              <div className="flex items-center justify-between">
                <span className="display-numeral text-[26px] text-pink-500 leading-none transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-0.5">
                  {step.number}
                </span>
                <span className="flex size-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-[transform,border-color,color] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-[-6deg] group-hover:border-pink-500/40 group-hover:text-pink-400">
                  <HugeiconsIcon
                    className="size-4"
                    icon={step.icon}
                    strokeWidth={1.8}
                  />
                </span>
              </div>
              <h3 className="font-sans font-semibold text-[15px] text-foreground tracking-[-0.01em]">
                {step.title}
              </h3>
              <p className="text-[13.5px] text-muted-foreground leading-[1.65]">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-border/60 border-t py-16">
        <div className="reveal-scale rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground">
                <HugeiconsIcon
                  className="size-4.5"
                  icon={HelpCircleIcon}
                  strokeWidth={1.8}
                />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-sans font-semibold text-[15.5px] text-foreground tracking-[-0.01em]">
                  Need a hand?
                </h3>
                <p className="max-w-md text-[13.5px] text-muted-foreground leading-[1.65]">
                  Join the support server, real humans, fast replies, and a
                  place to suggest features or report bugs.
                </p>
              </div>
            </div>
            <a
              className={buttonStyles({ variant: "secondary", size: "md" })}
              href={SUPPORT_URL}
              rel="noopener"
              target="_blank"
            >
              Join support server
              <HugeiconsIcon
                className="size-3.5 opacity-70 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                icon={ArrowUpRight01Icon}
                strokeWidth={2.2}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-4 border-border/60 border-t py-16 text-center">
        <p className="reveal-on-scroll text-[14px] text-muted-foreground tracking-tight">
          Still here? The button works both ways.
        </p>
        <a
          className={buttonStyles({
            variant: "primary",
            size: "md",
            className: "reveal-scale",
          })}
          href={INVITE_URL}
          rel="noopener"
          target="_blank"
        >
          <HugeiconsIcon
            className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:rotate-[8deg]"
            icon={Call02Icon}
            strokeWidth={2.2}
          />
          Add snibcall now
        </a>
      </section>
    </>
  );
}
