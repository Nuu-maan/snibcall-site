import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/commands", label: "Commands" },
  { href: "/#help", label: "Help" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-[100] mx-auto flex w-full max-w-5xl justify-center border-border/60 border-b bg-background/85 backdrop-blur-md">
      <nav
        aria-label="primary"
        className="flex w-full items-center justify-between gap-6 py-3"
      >
        <Link
          aria-label="snibcall home"
          className="group inline-flex shrink-0 items-center gap-2.5"
          href="/"
        >
          <span className="relative flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-pink-500/15 ring-1 ring-pink-500/30 ring-offset-2 ring-offset-background transition-transform group-hover:rotate-[-6deg]">
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

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className="inline-flex items-center rounded-md px-3 py-1.5 font-medium text-[13.5px] text-muted-foreground tracking-tight transition-colors hover:text-foreground"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-pink-500 px-4 py-1.5 font-semibold text-[13px] text-white tracking-tight transition-colors hover:bg-pink-600"
          href="/invite"
        >
          Add to Discord
          <HugeiconsIcon
            className="size-3.5 opacity-80 transition-transform group-hover:translate-x-0.5"
            icon={ArrowRight02Icon}
            strokeWidth={2.4}
          />
        </Link>
      </nav>
    </header>
  );
}
