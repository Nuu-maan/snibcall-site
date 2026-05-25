import type { Metadata } from "next";

import { Footer } from "@/components/sections/footer";
import { InvitePanel } from "@/components/sections/invite-panel";
import { Nav } from "@/components/sections/nav";

const TITLE = "invite";
const DESCRIPTION =
  "add snibcall to your discord server. pick a server, confirm permissions, done. free, revocable any time.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/invite" },
  openGraph: {
    title: `${TITLE} snibcall — add it to your server`,
    description: DESCRIPTION,
    url: "/invite",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} snibcall — add it to your server`,
    description: DESCRIPTION,
  },
};

export default function InvitePage() {
  return (
    <>
      <main className="relative mx-auto w-full max-w-4xl px-5 sm:px-6">
        <Nav />
        <InvitePanel />
      </main>
      <Footer />
    </>
  );
}
