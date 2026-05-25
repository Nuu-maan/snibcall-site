import { GithubIcon, HelpCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import Image from "next/image";
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
    title: "Bot",
    links: [
      { href: "/invite", label: "Invite" },
      { href: "/commands", label: "Commands" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: SUPPORT_URL, label: "Support server", external: true },
      { href: GITHUB_URL, label: "GitHub", external: true },
    ],
  },
  {
    title: "Legal",
    links: [{ href: "/privacy", label: "Privacy" }],
  },
];

const socials: { href: string; icon: IconSvgElement; label: string }[] = [
  { href: GITHUB_URL, icon: GithubIcon, label: "GitHub" },
  { href: SUPPORT_URL, icon: HelpCircleIcon, label: "Support server" },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-border/60 border-t bg-background">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-5 py-16 sm:gap-12 sm:px-6 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:py-20">
        <div className="flex flex-col gap-5">
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
            <span className="size-1.5 animate-status-pulse rounded-full bg-pink-500" />
            <span className="font-medium text-[11.5px] text-muted-foreground tracking-tight">
              Online — taking calls
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <Link
                aria-label={social.label}
                className="flex size-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
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
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 py-6 sm:px-6 md:flex-row">
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
