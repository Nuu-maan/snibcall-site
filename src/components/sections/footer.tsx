import {
  ArrowUpRight01Icon,
  Call02Icon,
  HelpCircleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";

const SUPPORT_URL = "https://discord.gg/As8TbHwhhP";

interface FooterLink {
  external?: boolean;
  href: string;
  label: string;
}

const linkColumns: { links: FooterLink[]; title: string }[] = [
  {
    title: "Bot",
    links: [
      { href: "/invite", label: "Invite" },
      { href: "/commands", label: "Commands" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-border/60 border-t bg-background">
      <div className="mx-auto grid w-full max-w-5xl gap-12 px-5 py-16 sm:px-6 md:grid-cols-[2fr_1fr_1fr] md:py-20">
        <div className="reveal-on-scroll flex flex-col gap-5">
          <Link className="flex items-center gap-2.5" href="/">
            <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-pink-500/15 ring-1 ring-pink-500/30">
              <Image
                alt=""
                aria-hidden="true"
                className="size-8 object-cover"
                height={64}
                src="/bot.png"
                width={64}
              />
            </span>
            <span className="font-display font-medium text-[20px] text-foreground italic leading-none tracking-[-0.02em]">
              snibcall
            </span>
          </Link>

          <p className="max-w-sm text-[13.5px] text-muted-foreground leading-[1.65]">
            A tiny phone for your server. Connect two Discord servers and chat
            across them.
          </p>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
            <span className="relative flex size-1.5">
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping-ring rounded-full bg-pink-500"
              />
              <span className="relative size-1.5 animate-status-pulse rounded-full bg-pink-500" />
            </span>
            <span className="font-medium text-[11.5px] text-muted-foreground tracking-tight">
              Online, taking calls
            </span>
          </div>

          <div className="mt-1 flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <Link
              className={buttonStyles({ variant: "primary", size: "sm" })}
              href="/invite"
            >
              <HugeiconsIcon
                className="size-3.5 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:rotate-[8deg]"
                icon={Call02Icon}
                strokeWidth={2.2}
              />
              Invite bot
              <HugeiconsIcon
                className="size-3.5 opacity-80 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                icon={ArrowUpRight01Icon}
                strokeWidth={2.4}
              />
            </Link>
            <a
              className={buttonStyles({ variant: "secondary", size: "sm" })}
              href={SUPPORT_URL}
              rel="noopener"
              target="_blank"
            >
              <HugeiconsIcon
                className="size-3.5 text-muted-foreground"
                icon={HelpCircleIcon}
                strokeWidth={2}
              />
              Join support server
            </a>
          </div>
        </div>

        {linkColumns.map((column, idx) => (
          <nav
            className={`flex flex-col gap-4 ${
              idx === 0 ? "reveal-on-scroll-1" : "reveal-on-scroll-2"
            }`}
            key={column.title}
          >
            <h3 className="font-semibold text-[12px] text-foreground tracking-tight">
              {column.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-[13.5px] text-muted-foreground tracking-tight transition-colors hover:text-foreground"
                    href={link.href}
                    rel={link.external ? "noopener" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-border/60 border-t">
        <div className="reveal-on-scroll mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 py-6 sm:px-6 md:flex-row">
          <p className="text-[12.5px] text-muted-foreground tabular-nums tracking-tight">
            © 2026 snibcall. All rights reserved.
          </p>
          <p className="text-[12.5px] text-muted-foreground tracking-tight">
            Built for tiny servers.
          </p>
        </div>
      </div>
    </footer>
  );
}
