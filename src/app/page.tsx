import { Starfield } from "@/components/decor/starfield";
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
      <Starfield />
      <main className="relative mx-auto w-full max-w-5xl px-6">
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
