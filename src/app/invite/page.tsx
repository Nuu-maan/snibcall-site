import type { Metadata } from "next";

import { Starfield } from "@/components/decor/starfield";
import { Footer } from "@/components/sections/footer";
import { InvitePanel } from "@/components/sections/invite-panel";
import { Nav } from "@/components/sections/nav";

export const metadata: Metadata = {
  title: "invite — snibcall",
  description:
    "add snibcall to your discord server. pick a server, confirm permissions, done.",
};

export default function InvitePage() {
  return (
    <>
      <Starfield />
      <main className="relative mx-auto w-full max-w-4xl px-6">
        <Nav />
        <InvitePanel />
      </main>
      <Footer />
    </>
  );
}
