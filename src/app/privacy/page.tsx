import type { Metadata } from "next";

import { PrivacyPanel } from "@/components/sections/privacy-panel";

const TITLE = "privacy";
const DESCRIPTION =
  "snibcall never stores your messages, never tracks you, and never shares anything. the long version, in plain words.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `${TITLE} · snibcall`,
    description: DESCRIPTION,
    url: "/privacy",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · snibcall`,
    description: DESCRIPTION,
  },
};

export default function PrivacyPage() {
  return <PrivacyPanel />;
}
