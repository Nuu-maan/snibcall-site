import {
  ArrowLeft02Icon,
  ArrowRight02Icon,
  Book02Icon,
  BubbleChatIcon,
  Call02Icon,
  CheckmarkBadge02Icon,
  HelpCircleIcon,
  Image01Icon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import Link from "next/link";

const CLIENT_ID = "1508101748714377286";
const PERMISSIONS = "537218072";
const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&scope=bot&permissions=${PERMISSIONS}`;
const SUPPORT_URL = "https://discord.gg/As8TbHwhhP";

interface Permission {
  icon: IconSvgElement;
  name: string;
  why: string;
}

const permissions: Permission[] = [
  {
    icon: UserMultipleIcon,
    name: "manage webhooks",
    why: "so it can post relayed messages wearing each sender's name + avatar.",
  },
  {
    icon: BubbleChatIcon,
    name: "send messages",
    why: "to post system messages like 'connected' and 'call ended'.",
  },
  {
    icon: Image01Icon,
    name: "embed links",
    why: "for the reply previews and help / friend request cards.",
  },
  {
    icon: Book02Icon,
    name: "read message history",
    why: "to quote the message you replied to on the other side.",
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
    title: "pick a server",
    body: "discord shows you the permissions list and lets you choose where snibcall goes.",
  },
  {
    number: "02",
    icon: Call02Icon,
    title: "snibcall joins",
    body: "it slides into your server and says a friendly hello in the channel of your choice.",
  },
  {
    number: "03",
    icon: ArrowRight02Icon,
    title: "type s.call",
    body: "in any text channel — and you're queued for your first match.",
  },
];

export function InvitePanel() {
  return (
    <>
      {/* Header */}
      <section className="relative flex flex-col items-center gap-7 py-16 text-center md:py-20">
        {/* contained ambient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[28rem] w-[40rem] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center top, oklch(0.7 0.27 350 / 0.22) 0%, transparent 60%)",
          }}
        />

        <Link
          className="inline-flex items-center gap-1.5 font-medium text-[12px] text-muted-foreground tracking-tight transition-colors hover:text-pink-200"
          href="/"
        >
          <HugeiconsIcon
            className="size-3.5"
            icon={ArrowLeft02Icon}
            strokeWidth={2}
          />
          back to home
        </Link>

        {/* Ringing-phone visual with concentric pulse rings */}
        <div className="relative flex size-32 items-center justify-center">
          <span
            aria-hidden="true"
            className="absolute size-full animate-ping rounded-full bg-pink-500/15"
            style={{ animationDuration: "2.4s" }}
          />
          <span
            aria-hidden="true"
            className="absolute size-2/3 animate-ping rounded-full bg-pink-500/25"
            style={{ animationDuration: "2.4s", animationDelay: "0.6s" }}
          />
          <div className="glow-pink-sm relative flex size-20 items-center justify-center rounded-full bg-pink-500 text-white ring-soft">
            <HugeiconsIcon
              className="size-9"
              icon={Call02Icon}
              strokeWidth={1.8}
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 font-medium text-[12px] text-pink-200 tracking-tight ring-soft">
          <span className="size-1.5 animate-status-pulse rounded-full bg-pink-400" />
          one click away
        </div>

        <h1 className="max-w-2xl font-bold text-[40px] text-foreground lowercase leading-[105%] tracking-tight md:text-[56px]">
          add snibcall to your server
        </h1>

        <p className="max-w-lg text-pretty font-medium text-[16px] text-muted-foreground leading-[175%] tracking-tight">
          you&apos;ll be sent to discord to pick a server and confirm the
          permissions below. nothing happens until you say yes.
        </p>

        {/* The big button */}
        <a
          className="shimmer-sweep glow-pink-sm mt-2 inline-flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 font-semibold text-[17px] text-white tracking-tight transition-transform hover:scale-[1.03] active:scale-[0.97]"
          href={INVITE_URL}
          rel="noopener"
          target="_blank"
        >
          <HugeiconsIcon
            className="size-5"
            icon={Call02Icon}
            strokeWidth={2.2}
          />
          continue to discord
          <HugeiconsIcon
            className="size-4 opacity-80"
            icon={ArrowRight02Icon}
            strokeWidth={2.2}
          />
        </a>

        <p className="font-mono text-[11px] text-muted-foreground/70 lowercase tracking-[0.16em]">
          opens discord · no card · revocable any time
        </p>
      </section>

      {/* Permissions */}
      <section className="flex flex-col gap-6 py-14">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-pink-400"
          />
          <h2 className="font-semibold text-[20px] text-foreground lowercase tracking-tight">
            what it asks for & why
          </h2>
          <span
            aria-hidden="true"
            className="ml-auto h-px flex-1 bg-gradient-to-r from-pink-500/40 to-transparent"
          />
          <span className="font-mono font-semibold text-[11px] text-muted-foreground/70 tabular-nums tracking-wider">
            {permissions.length.toString().padStart(2, "0")}
          </span>
        </div>

        <p className="max-w-2xl font-medium text-[14px] text-muted-foreground leading-[175%] tracking-tight">
          snibcall asks for the bare minimum to make calls work. nothing weird,
          nothing data-mining. here&apos;s every permission, in plain language.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {permissions.map((perm) => (
            <article
              className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-border bg-card-tinted p-5 ring-pink-soft transition-colors duration-300 hover:border-pink-500/25"
              key={perm.name}
            >
              <div
                aria-hidden="true"
                className="absolute -top-px right-12 left-12 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent opacity-60"
              />
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-pink-500/20 bg-pink-500/10 text-pink-200 ring-soft transition-transform duration-500 group-hover:scale-110">
                  <HugeiconsIcon
                    className="size-4.5"
                    icon={perm.icon}
                    strokeWidth={1.8}
                  />
                </span>
                <span className="font-semibold text-[15px] text-foreground lowercase tracking-tight">
                  {perm.name}
                </span>
              </div>
              <p className="text-pretty font-medium text-[13.5px] text-muted-foreground leading-[170%] tracking-tight">
                {perm.why}
              </p>
            </article>
          ))}
        </div>

        <p className="font-medium text-[13px] text-muted-foreground/70 leading-[170%] tracking-tight">
          plus the usual basics: view channels and use external emojis. that
          really is the whole list.
        </p>
      </section>

      {/* What happens next */}
      <section className="flex flex-col gap-6 py-14">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-pink-400"
          />
          <h2 className="font-semibold text-[20px] text-foreground lowercase tracking-tight">
            what happens next
          </h2>
          <span
            aria-hidden="true"
            className="ml-auto h-px flex-1 bg-gradient-to-r from-pink-500/40 to-transparent"
          />
        </div>

        <div className="relative grid gap-4 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute top-1/2 right-10 left-10 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-pink-500/25 to-transparent md:block"
          />
          {steps.map((step) => (
            <article
              className="relative flex flex-col gap-3 rounded-2xl border border-border bg-card-tinted p-5 ring-pink-soft"
              key={step.number}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-semibold text-[11px] text-pink-300 tracking-[0.2em]">
                  {step.number}
                </span>
                <span className="flex size-9 items-center justify-center rounded-xl border border-pink-500/15 bg-pink-500/8 text-pink-200">
                  <HugeiconsIcon
                    className="size-4"
                    icon={step.icon}
                    strokeWidth={1.8}
                  />
                </span>
              </div>
              <h3 className="font-semibold text-[15px] text-foreground lowercase tracking-tight">
                {step.title}
              </h3>
              <p className="font-medium text-[13px] text-muted-foreground leading-[170%] tracking-tight">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Support strip */}
      <section className="py-12">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card-tinted p-6 ring-pink-soft md:p-8">
          <div
            aria-hidden="true"
            className="absolute -top-px right-16 left-16 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent"
          />
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-pink-500/20 bg-pink-500/10 text-pink-200 ring-soft">
                <HugeiconsIcon
                  className="size-5"
                  icon={HelpCircleIcon}
                  strokeWidth={1.8}
                />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-[16px] text-foreground lowercase tracking-tight">
                  need a hand?
                </h3>
                <p className="max-w-md font-medium text-[14px] text-muted-foreground leading-[170%] tracking-tight">
                  join the support server — real humans, fast replies, and a
                  place to suggest features or report bugs.
                </p>
              </div>
            </div>
            <a
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2.5 font-semibold text-[14px] text-pink-100 tracking-tight transition-colors hover:border-pink-500/50 hover:bg-pink-500/15 active:scale-[0.97]"
              href={SUPPORT_URL}
              rel="noopener"
              target="_blank"
            >
              <HugeiconsIcon
                className="size-4"
                icon={HelpCircleIcon}
                strokeWidth={2}
              />
              join support server
              <HugeiconsIcon
                className="size-3.5 opacity-70"
                icon={ArrowRight02Icon}
                strokeWidth={2.2}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Final mini-CTA at the bottom */}
      <section className="flex flex-col items-center gap-4 py-12 text-center">
        <p className="font-medium text-[14px] text-muted-foreground tracking-tight">
          still here? the button works both ways.
        </p>
        <a
          className="shimmer-sweep inline-flex items-center gap-2.5 rounded-full bg-pink-500 px-6 py-3 font-semibold text-[15px] text-white tracking-tight transition-transform hover:scale-[1.03] active:scale-[0.97]"
          href={INVITE_URL}
          rel="noopener"
          target="_blank"
        >
          <HugeiconsIcon
            className="size-4"
            icon={Call02Icon}
            strokeWidth={2.2}
          />
          add snibcall now
        </a>
      </section>
    </>
  );
}
