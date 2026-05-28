import type { Metadata } from "next";

import { TermsPanel } from "@/components/sections/terms-panel";

const TITLE = "terms";
const DESCRIPTION =
  "The rules for using snibcall: what we offer, what you can do with it, and what we expect from you in return.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: `${TITLE} · snibcall`,
    description: DESCRIPTION,
    url: "/terms",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · snibcall`,
    description: DESCRIPTION,
  },
};

export default function TermsPage() {
  return <TermsPanel />;
}
