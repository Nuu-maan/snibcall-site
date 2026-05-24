import { HeadphonesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const linkColumns = [
  {
    title: "Bot",
    links: [
      { href: "/invite", label: "Invite" },
      { href: "/docs", label: "Documentation" },
      { href: "/support", label: "Support Server" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/refund", label: "Refund Policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t bg-card-tinted">
      <div
        aria-hidden="true"
        className="absolute -top-px left-1/2 h-px w-full max-w-3xl -translate-x-1/2 bg-gradient-to-r from-transparent via-pink-500/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/2 size-96 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Link className="flex items-center gap-2.5" href="/">
            <span className="flex size-7 items-center justify-center rounded-xl border border-pink-500/20 bg-pink-500/10 text-pink-200 ring-soft">
              <HugeiconsIcon
                className="size-4"
                icon={HeadphonesIcon}
                strokeWidth={1.8}
              />
            </span>
            <span className="font-semibold text-[18px] text-foreground tracking-tight">
              snibcall
            </span>
          </Link>
          <p className="max-w-sm font-medium text-[14px] text-muted-foreground leading-[175%] tracking-tight">
            Lorem ipsum dolor sit amet. The premier voice and call bot for
            Discord communities.
          </p>
        </div>

        {linkColumns.map((column) => (
          <nav className="flex flex-col gap-4" key={column.title}>
            <h3 className="font-semibold text-[14px] text-foreground tracking-tight">
              {column.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="font-medium text-[14px] text-muted-foreground tracking-tight transition-colors hover:text-pink-200"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="relative border-t">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
          <p className="font-medium text-[12px] text-muted-foreground tracking-tight">
            Copyright &copy; 2026 snibcall.bot, All rights reserved.
          </p>
          <p className="font-mono text-[12px] text-muted-foreground tracking-tight">
            Crafted with <span className="text-pink-400">&#9829;</span> in the
            cloud
          </p>
        </div>
      </div>
    </footer>
  );
}
