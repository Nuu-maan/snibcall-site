import {
  BubbleChatIcon,
  Call02Icon,
  CallEnd01Icon,
  CheckmarkBadge02Icon,
  FavouriteIcon,
  GithubIcon,
  HelpCircleIcon,
  Shield01Icon,
  SparklesIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import Link from "next/link";

const SUPPORT_URL = "https://discord.gg/As8TbHwhhP";
const GITHUB_URL = "https://github.com";

interface FooterLink {
  external?: boolean;
  href: string;
  label: string;
}

const linkColumns: { links: FooterLink[]; title: string }[] = [
  {
    title: "bot",
    links: [
      { href: "/invite", label: "invite" },
      { href: "/commands", label: "commands" },
    ],
  },
  {
    title: "community",
    links: [
      { href: SUPPORT_URL, label: "support server", external: true },
      { href: GITHUB_URL, label: "github", external: true },
    ],
  },
  {
    title: "legal",
    links: [{ href: "/privacy", label: "privacy" }],
  },
];

const socials: { href: string; icon: IconSvgElement; label: string }[] = [
  { href: GITHUB_URL, icon: GithubIcon, label: "github" },
  { href: SUPPORT_URL, icon: HelpCircleIcon, label: "support server" },
];

interface MarqueeItem {
  icon: IconSvgElement | null;
  label: string;
}

const marqueeItems: MarqueeItem[] = [
  { icon: SparklesIcon, label: "a tiny phone for your server" },
  { icon: Call02Icon, label: "cross-server calls" },
  { icon: UserMultipleIcon, label: "webhook identity" },
  { icon: BubbleChatIcon, label: "replies that travel" },
  { icon: FavouriteIcon, label: "friend requests" },
  { icon: CallEnd01Icon, label: "skip & hangup" },
  { icon: Shield01Icon, label: "admin block-list" },
  { icon: CheckmarkBadge02Icon, label: "prefix: s." },
];

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-white/5 border-t bg-card-tinted">
      {/* animated gradient seam */}
      <div
        aria-hidden="true"
        className="absolute -top-px left-1/2 h-px w-full max-w-4xl -translate-x-1/2 animate-seam"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.7 0.27 350 / 0.9) 50%, transparent 100%)",
        }}
      />

      {/* soft halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/2 size-[44rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.27 350 / 0.18) 0%, transparent 65%)",
        }}
      />

      {/* marquee */}
      <div className="relative overflow-hidden border-white/5 border-b">
        <div className="flex w-max animate-marquee items-center gap-10 py-5 font-medium font-mono text-[12px] text-muted-foreground lowercase tracking-[0.14em]">
          {["a", "b"].flatMap((group) =>
            marqueeItems.map((item) => (
              <span
                className="flex shrink-0 items-center gap-10"
                key={`${group}-${item.label}`}
              >
                <span className="inline-flex items-center gap-2">
                  {item.icon ? (
                    <HugeiconsIcon
                      className="size-3.5 text-pink-300/80"
                      icon={item.icon}
                      strokeWidth={1.8}
                    />
                  ) : null}
                  {item.label}
                </span>
                <span className="text-pink-300/50">·</span>
              </span>
            ))
          )}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[rgb(18_18_19)] to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[rgb(18_18_19)] to-transparent"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl gap-12 px-6 py-20 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Link className="flex items-center gap-2.5" href="/">
            <span className="flex size-8 items-center justify-center rounded-xl border border-pink-500/25 bg-pink-500/10 text-pink-200 ring-soft">
              <HugeiconsIcon
                className="size-4"
                icon={Call02Icon}
                strokeWidth={1.8}
              />
            </span>
            <span className="flex items-baseline gap-1.5 font-semibold text-[20px] text-foreground tracking-tight">
              <span className="text-pink-300">✦</span>
              snibcall
            </span>
          </Link>

          <p className="max-w-sm font-medium text-[14px] text-muted-foreground italic leading-[175%] tracking-tight">
            a tiny phone for your server.
          </p>

          {/* status badge */}
          <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-pink-500/15 bg-secondary/60 px-3.5 py-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-2 animate-status-pulse rounded-full bg-pink-400" />
              <span className="relative inline-flex size-2 rounded-full bg-pink-400" />
            </span>
            <span className="font-medium text-[12px] text-foreground tracking-tight">
              online · taking calls
            </span>
          </div>

          {/* socials */}
          <div className="flex items-center gap-2.5">
            {socials.map((social) => (
              <Link
                aria-label={social.label}
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-secondary text-muted-foreground ring-soft transition-colors duration-200 hover:border-pink-500/30 hover:text-pink-200 active:scale-[0.96]"
                href={social.href}
                key={social.label}
                rel="noopener"
                target="_blank"
              >
                <HugeiconsIcon
                  className="size-4"
                  icon={social.icon}
                  strokeWidth={1.8}
                />
              </Link>
            ))}
          </div>
        </div>

        {linkColumns.map((column) => (
          <nav className="flex flex-col gap-4" key={column.title}>
            <h3 className="font-mono font-semibold text-[11px] text-pink-300/80 lowercase tracking-[0.18em]">
              {column.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="group inline-flex items-center gap-1.5 font-medium text-[14px] text-muted-foreground tracking-tight transition-colors hover:text-pink-200"
                    href={link.href}
                    rel={link.external ? "noopener" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-pink-400/70 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* giant background wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative mx-auto w-full max-w-6xl select-none px-6"
      >
        <div
          className="text-center font-extrabold text-gradient-wordmark lowercase tracking-tighter"
          style={{ fontSize: "clamp(80px, 18vw, 260px)", lineHeight: 0.85 }}
        >
          snibcall
        </div>
      </div>

      <div className="relative border-white/5 border-t">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 md:flex-row">
          <p className="font-medium text-[12px] text-muted-foreground tabular-nums tracking-tight">
            © 2026 snibcall — all rights reserved.
          </p>
          <p className="font-mono text-[12px] text-muted-foreground lowercase tracking-tight">
            made with <span className="text-pink-400">♡</span> for tiny servers
          </p>
        </div>
      </div>
    </footer>
  );
}
