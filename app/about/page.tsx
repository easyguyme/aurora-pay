import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  AboutCta,
  AboutHero,
  AboutIntegrations,
  AboutMission,
  AboutPrinciples,
  AboutStats,
  AboutTeam,
  AboutTimeline,
} from "@/components/about-sections";

export const metadata = {
  title: "About — Aurora Pay",
  description:
    "Aurora Pay is the money layer for the AI era. We take on tax, compliance, fraud and chargebacks so software companies can stay software companies.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <AboutHero />
        <AboutStats />
        <AboutMission />
        <AboutPrinciples />
        <AboutTimeline />
        <AboutTeam />
        <AboutIntegrations />
        <AboutCta />
      </main>
      <SiteFooter />
    </>
  );
}
