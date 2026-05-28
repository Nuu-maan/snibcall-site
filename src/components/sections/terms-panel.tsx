import {
  Alert01Icon,
  ArrowLeft02Icon,
  ArrowUpRight01Icon,
  Book02Icon,
  BubbleChatIcon,
  Cancel01Icon,
  CheckmarkBadge02Icon,
  CopyrightIcon,
  HelpCircleIcon,
  Shield01Icon,
  StopCircleIcon,
  UserMultipleIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import Link from "next/link";

import { buttonStyles } from "@/components/ui/button";

const SUPPORT_URL = "https://discord.gg/As8TbHwhhP";
const LAST_UPDATED = "2026-05-25";

interface TermsSection {
  body: React.ReactNode;
  icon: IconSvgElement;
  id: string;
  title: string;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        aria-hidden
        className="mt-2 size-1 shrink-0 rounded-full bg-pink-500"
      />
      <span>{children}</span>
    </li>
  );
}

const sections: TermsSection[] = [
  {
    id: "what-it-is",
    icon: CheckmarkBadge02Icon,
    title: "What snibcall is",
    body: (
      <>
        <p>
          snibcall (&ldquo;the bot,&rdquo; &ldquo;the service,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us&rdquo;) is a free Discord bot that pairs
          two server channels and relays messages between them via webhook. It
          is operated by an individual developer and lives entirely inside
          Discord.
        </p>
        <p>
          By inviting snibcall to a Discord server or by sending messages
          through a channel that uses snibcall, you agree to these terms. If you
          do not agree, do not use the bot.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    icon: UserMultipleIcon,
    title: "Who can use it",
    body: (
      <ul className="flex flex-col gap-2.5">
        <Bullet>
          You must be at least <strong className="text-foreground">13</strong>{" "}
          years old (or the minimum age required to use Discord in your country,
          whichever is higher).
        </Bullet>
        <Bullet>
          You must comply with{" "}
          <a
            className="text-foreground underline decoration-pink-500/40 underline-offset-2 hover:decoration-pink-500"
            href="https://discord.com/terms"
            rel="noopener"
            target="_blank"
          >
            Discord&apos;s Terms of Service
          </a>{" "}
          and{" "}
          <a
            className="text-foreground underline decoration-pink-500/40 underline-offset-2 hover:decoration-pink-500"
            href="https://discord.com/guidelines"
            rel="noopener"
            target="_blank"
          >
            Community Guidelines
          </a>
          . Violating Discord&apos;s rules also violates ours.
        </Bullet>
        <Bullet>
          If you invite snibcall to a server, you confirm you have the authority
          to do so on behalf of that server&apos;s owner.
        </Bullet>
      </ul>
    ),
  },
  {
    id: "acceptable",
    icon: CheckmarkBadge02Icon,
    title: "What you can do",
    body: (
      <ul className="flex flex-col gap-2.5">
        <Bullet>
          Use snibcall to chat with other servers, make new friends, run casual
          community events, or just hang out.
        </Bullet>
        <Bullet>
          Configure permissions, set up the bot for your server, and moderate
          calls using{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">
            s.block
          </code>{" "}
          /{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">
            s.unblock
          </code>
          .
        </Bullet>
        <Bullet>Leave a call at any time, kick the bot at any time.</Bullet>
      </ul>
    ),
  },
  {
    id: "prohibited",
    icon: Alert01Icon,
    title: "What you can't do",
    body: (
      <>
        <p>
          You agree not to use snibcall, directly or indirectly, to do any of
          the following. This list is not exhaustive, anything that&apos;s
          obviously harmful, illegal, or designed to abuse the relay belongs
          here.
        </p>
        <ul className="mt-3 flex flex-col gap-2.5">
          <Bullet>
            Send, request, or facilitate{" "}
            <strong className="text-foreground">illegal content</strong> of any
            kind, including sexual content involving minors, doxxing, threats of
            violence, terrorism, fraud, or content that violates anyone&apos;s
            rights.
          </Bullet>
          <Bullet>
            Harass, threaten, dox, stalk, impersonate, or otherwise harm another
            person, whether on your side of the call or the other.
          </Bullet>
          <Bullet>
            Spam, flood, mass-mention, advertise, scam, phish, or distribute
            malware or any link that leads to those things.
          </Bullet>
          <Bullet>
            Send sexually explicit content to anyone who has not opted in, or in
            channels not marked NSFW on both sides of the call.
          </Bullet>
          <Bullet>
            Attempt to exploit, reverse-engineer, abuse rate limits,
            denial-of-service, scrape, or otherwise interfere with how the bot
            or its webhooks work.
          </Bullet>
          <Bullet>
            Misuse the relay&apos;s identity feature (webhook impersonation,{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">
              s.mask
            </code>
            ) to commit fraud, defamation, or impersonate a real person, brand,
            or official Discord communication.
          </Bullet>
          <Bullet>
            Use the service to violate any applicable law, regulation, export
            control, or sanctions regime.
          </Bullet>
          <Bullet>
            Resell, rebrand, or pass off snibcall as your own product.
          </Bullet>
        </ul>
        <p className="mt-3">
          We take this seriously. If you violate this section we may immediately
          block your server, ban you from future use, and report the incident to
          Discord or relevant authorities.
        </p>
      </>
    ),
  },
  {
    id: "your-content",
    icon: BubbleChatIcon,
    title: "Your content",
    body: (
      <>
        <p>
          The messages, images, and links you send through snibcall are{" "}
          <strong className="text-foreground">yours</strong>. We do not claim
          ownership of any of it. The bot does not store message contents, see
          the{" "}
          <Link
            className="text-foreground underline decoration-pink-500/40 underline-offset-2 hover:decoration-pink-500"
            href="/privacy"
          >
            privacy policy
          </Link>{" "}
          for the full picture.
        </p>
        <p className="mt-3">
          That said, by sending a message in a snibcall-enabled channel you
          grant us a strictly limited license to relay that message to the
          paired server&apos;s channel for the duration of the call. The license
          ends the moment the message has been delivered.
        </p>
        <p className="mt-3">
          You are solely responsible for the content you transmit. We are not a
          publisher, editor, or moderator of cross-server conversations beyond
          the safeguards described in these terms.
        </p>
      </>
    ),
  },
  {
    id: "admin-responsibility",
    icon: Shield01Icon,
    title: "Server admins",
    body: (
      <ul className="flex flex-col gap-2.5">
        <Bullet>
          If you invite snibcall to a server, you accept responsibility for how
          your members use it inside that server.
        </Bullet>
        <Bullet>
          You agree to moderate your own community, kick, ban, or restrict
          members who misuse the relay.
        </Bullet>
        <Bullet>
          You can use{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[12px] text-foreground">
            s.block
          </code>{" "}
          to refuse calls from specific servers, and remove the bot at any time
          to fully opt out.
        </Bullet>
        <Bullet>
          You agree not to grant snibcall access to private staff channels or
          channels containing sensitive content that should not leave the
          server.
        </Bullet>
      </ul>
    ),
  },
  {
    id: "enforcement",
    icon: StopCircleIcon,
    title: "Reports and enforcement",
    body: (
      <>
        <p>
          If you experience abuse, harassment, or any other violation, please
          report it in the{" "}
          <a
            className="text-foreground underline decoration-pink-500/40 underline-offset-2 hover:decoration-pink-500"
            href={SUPPORT_URL}
            rel="noopener"
            target="_blank"
          >
            support server
          </a>{" "}
          with as much detail as possible (server ID, approximate time,
          screenshots if you have them).
        </p>
        <p className="mt-3">
          We reserve the right to investigate, block individual users or entire
          servers, refuse service, and cooperate with Discord&apos;s Trust &amp;
          Safety team or law enforcement when appropriate. We do not promise a
          specific response time and we may act on credible evidence without
          prior notice.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    icon: Alert01Icon,
    title: "Availability and changes to the service",
    body: (
      <ul className="flex flex-col gap-2.5">
        <Bullet>
          snibcall is provided{" "}
          <strong className="text-foreground">as-is</strong>, free of charge,
          with no service-level agreement. It may go offline, lag, lose messages
          mid-relay, or behave unexpectedly.
        </Bullet>
        <Bullet>
          We may add, remove, or change commands and features at any time
          without notice.
        </Bullet>
        <Bullet>
          We may suspend or shut down the entire service permanently if we
          choose to stop running it.
        </Bullet>
      </ul>
    ),
  },
  {
    id: "ip",
    icon: CopyrightIcon,
    title: "Intellectual property",
    body: (
      <>
        <p>
          The snibcall name, logo, mascot, command set, source code, interface
          design, and this website are owned by the operator. You may not copy,
          rebrand, or distribute them without permission.
        </p>
        <p className="mt-3">
          References to Discord, the Discord logo, and related marks belong to
          Discord, Inc. and are used here for descriptive purposes only.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    icon: Book02Icon,
    title: "Disclaimers and limitation of liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, snibcall is provided{" "}
          <strong className="text-foreground">
            without warranty of any kind
          </strong>
          , express or implied, including but not limited to merchantability,
          fitness for a particular purpose, accuracy, uptime, or
          non-infringement. Using it is at your own risk.
        </p>
        <p className="mt-3">
          To the maximum extent permitted by law, the operator&apos;s total
          aggregate liability arising out of or in connection with snibcall is
          limited to the amount you paid us in the 12 months preceding the
          claim, which, since the service is free, is{" "}
          <strong className="text-foreground">US&nbsp;$0</strong>.
        </p>
        <p className="mt-3">
          We are not liable for indirect, incidental, special, consequential,
          exemplary, or punitive damages, including but not limited to loss of
          profits, data, goodwill, or messages, even if we have been advised of
          the possibility of such damages.
        </p>
        <p className="mt-3">
          You agree to indemnify and hold harmless the operator from any claim,
          demand, or loss arising out of (a) your use of snibcall, (b) your
          violation of these terms, or (c) your violation of any third-party
          rights, including any other Discord user&apos;s rights.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    icon: Cancel01Icon,
    title: "Termination",
    body: (
      <ul className="flex flex-col gap-2.5">
        <Bullet>
          You can stop using snibcall at any time by hanging up the call,
          kicking the bot, or both.
        </Bullet>
        <Bullet>
          We can suspend or terminate your access, for an individual user, a
          single server, or all servers, at any time, with or without notice,
          for any reason we consider sufficient (including but not limited to
          violating these terms).
        </Bullet>
        <Bullet>
          Sections that by their nature should survive termination (intellectual
          property, disclaimers, limitation of liability, governing law) survive
          after the bot leaves your server.
        </Bullet>
      </ul>
    ),
  },
  {
    id: "changes",
    icon: BubbleChatIcon,
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms from time to time. When we do, we&apos;ll
        update the &ldquo;last updated&rdquo; date below and announce material
        changes in the support server. Your continued use of snibcall after a
        change takes effect means you accept the new terms. If you don&apos;t
        agree, kick the bot, that&apos;s the off switch.
      </p>
    ),
  },
  {
    id: "law",
    icon: Book02Icon,
    title: "Governing law and disputes",
    body: (
      <>
        <p>
          These terms are governed by the laws applicable to the operator&apos;s
          place of residence, without regard to its conflict of law principles.
        </p>
        <p className="mt-3">
          Before pursuing formal legal action, both parties agree to attempt to
          resolve any dispute informally by contacting the operator through the
          support server. Most issues are misunderstandings and get sorted out
          the same day.
        </p>
        <p className="mt-3">
          Nothing in these terms restricts your statutory rights under your
          local consumer-protection laws.
        </p>
      </>
    ),
  },
];

export function TermsPanel() {
  return (
    <>
      <section className="relative flex flex-col items-start gap-5 py-20 md:py-28">
        <Link
          className="reveal-on-scroll group inline-flex items-center gap-1.5 font-medium text-[12px] text-muted-foreground tracking-tight transition-colors hover:text-foreground"
          href="/"
        >
          <HugeiconsIcon
            className="size-3.5 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-0.5"
            icon={ArrowLeft02Icon}
            strokeWidth={2}
          />
          Back to home
        </Link>

        <div className="reveal-on-scroll inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-medium text-[11.5px] text-muted-foreground tracking-tight">
          <HugeiconsIcon
            className="size-3.5 text-pink-500"
            icon={Book02Icon}
            strokeWidth={2}
          />
          Last updated ·{" "}
          <span className="font-mono tabular-nums">{LAST_UPDATED}</span>
        </div>

        <h1 className="reveal-up-lg font-normal text-[48px] text-foreground leading-[1.05] tracking-[-0.03em] md:text-[64px]">
          Terms of Service
        </h1>

        <p className="reveal-on-scroll-1 max-w-xl text-[15.5px] text-muted-foreground leading-[1.65] sm:text-[16px]">
          The rules for using snibcall, what we offer, what you can do with it,
          and what we expect from you in return. Written in plain words, but
          binding.
        </p>
      </section>

      <section className="border-border/60 border-t py-12">
        <div className="reveal-scale rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground">
              <HugeiconsIcon
                className="size-4.5"
                icon={CheckmarkBadge02Icon}
                strokeWidth={1.8}
              />
            </span>
            <div className="flex flex-col gap-3">
              <h2 className="font-sans font-semibold text-[18px] text-foreground tracking-[-0.01em]">
                The short version
              </h2>
              <ul className="flex flex-col gap-2 text-[14px] text-muted-foreground leading-[1.65]">
                <Bullet>
                  Be 13 or older and follow Discord&apos;s rules, they apply
                  here too.
                </Bullet>
                <Bullet>
                  Don&apos;t use snibcall to harass, scam, spam, or break the
                  law. We will block your server if you do.
                </Bullet>
                <Bullet>
                  Your messages are yours. We don&apos;t save them. The bot is
                  free and provided as-is, with no guarantees.
                </Bullet>
                <Bullet>
                  You can kick the bot at any time. We can do the same to your
                  server if you break the rules.
                </Bullet>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col gap-6 border-border/60 border-t py-12 pb-16"
        data-reveal-stagger="70"
      >
        {sections.map((section, idx) => (
          <article
            className="reveal-on-scroll flex flex-col gap-4 rounded-xl border border-border bg-card p-6 md:p-8"
            id={section.id}
            key={section.id}
          >
            <header className="flex items-center gap-3">
              <span className="display-numeral text-[24px] text-pink-500 leading-none">
                {(idx + 1).toString().padStart(2, "0")}
              </span>
              <span className="flex size-8 items-center justify-center rounded-md border border-border bg-background text-foreground">
                <HugeiconsIcon
                  className="size-4"
                  icon={section.icon}
                  strokeWidth={1.8}
                />
              </span>
              <h2 className="font-sans font-semibold text-[17px] text-foreground tracking-[-0.01em]">
                {section.title}
              </h2>
            </header>
            <div className="flex flex-col gap-2 text-[14px] text-muted-foreground leading-[1.7]">
              {section.body}
            </div>
          </article>
        ))}
      </section>

      <section className="border-border/60 border-t py-12 pb-20">
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
                  Questions, disputes, or report a violation?
                </h3>
                <p className="max-w-md text-[13.5px] text-muted-foreground leading-[1.65]">
                  Open a ticket in the support server, the operator reads
                  everything personally.
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
    </>
  );
}
