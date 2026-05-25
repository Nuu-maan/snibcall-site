import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { HelpPeek } from "@/components/sections/help-peek";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Nav } from "@/components/sections/nav";
import { WhatItDoes } from "@/components/sections/what-it-does";

export default function Home() {
  return (
    <>
      <main className="relative mx-auto w-full max-w-5xl px-5 sm:px-6">
        <Nav />
        <Hero />
        <WhatItDoes />
        <HowItWorks />
        <HelpPeek />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
