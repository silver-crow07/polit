import { About } from "@/components/about";
import { ContactSection } from "@/components/contact";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { LeadershipJourney } from "@/components/leadership-journey";
import { News } from "@/components/news";
import { PublicService } from "@/components/public-service";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <LeadershipJourney />
        <PublicService />
        <Gallery />
        <News />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
