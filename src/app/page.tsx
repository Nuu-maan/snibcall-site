import { Starfield } from "@/components/decor/starfield";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Integrations } from "@/components/sections/integrations";
import { Moderation } from "@/components/sections/moderation";
import { MoreFeatures } from "@/components/sections/more-features";
import { Nav } from "@/components/sections/nav";
import { Stats } from "@/components/sections/stats";
import { Voicemaster } from "@/components/sections/voicemaster";

export default function Home() {
  return (
    <>
      <Starfield />
      <main className="relative mx-auto w-full max-w-5xl px-6">
        <Nav />
        <Hero />
        <Stats />
        <Moderation />
        <Integrations />
        <Voicemaster />
        <MoreFeatures />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
