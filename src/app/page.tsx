import { CTA } from "@/components/sections/cta";
import { HelpPeek } from "@/components/sections/help-peek";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhatItDoes } from "@/components/sections/what-it-does";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatItDoes />
      <HowItWorks />
      <HelpPeek />
      <CTA />
    </>
  );
}
