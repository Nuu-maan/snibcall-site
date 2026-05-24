import { ArrowRight02Icon, HeadphonesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

const navLinks = [
  { href: "/commands", label: "Commands" },
  { href: "/status", label: "Status" },
  { href: "/docs", label: "Docs" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-[30px] z-[100] flex items-center justify-between gap-4 py-4">
      <div className="flex flex-grow basis-0 items-center">
        <Link className="inline-flex items-center gap-2.5" href="/">
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
      </div>

      <nav
        className="hidden items-center gap-x-10 px-6 py-4 backdrop-blur-[7.5px] sm:flex"
        style={{
          borderRadius: "1.25rem",
          background:
            "radial-gradient(1161.83% 494.55% at 50% 49.09%, rgb(17 18 18) 5.32%, rgb(27 28 28) 30.31%)",
        }}
      >
        {navLinks.map((link) => (
          <Link
            className="border-transparent border-b font-semibold text-[16px] text-foreground tracking-tight transition-colors duration-200 ease-linear hover:border-muted"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-grow basis-0 items-center justify-end">
        <div className="relative">
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-semibold text-[14px] text-background tracking-tight transition-all hover:scale-[1.03]"
            href="/dashboard"
          >
            <span>Dashboard</span>
            <HugeiconsIcon
              className="size-4"
              icon={ArrowRight02Icon}
              strokeWidth={2.2}
            />
          </Link>
          <span className="absolute -top-3 -right-4 rotate-12 rounded-md bg-pink-500 px-2 py-0.5 font-bold text-[10px] text-primary-foreground uppercase tracking-wider shadow-lg shadow-pink-500/30">
            Coming Soon
          </span>
        </div>
      </div>
    </header>
  );
}
