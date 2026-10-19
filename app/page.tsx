import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  AgentOngoingSection,
  AgentSection,
  BentoGrid,
  BillingSection,
  DarkStatement,
  FaqSection,
  FinalCta,
  GlobalSection,
  Hero,
  MobileAppsBand,
  PartnerPlanCard,
  PartnersSection,
  PricingTeaser,
  Testimonials,
  TrustRow,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustRow />
        <DarkStatement />
        <BentoGrid />
        <BillingSection />
        <GlobalSection />
        <PartnersSection />
        <AgentSection />
        <AgentOngoingSection />
        <MobileAppsBand />
        <PricingTeaser />
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <PartnerPlanCard />
        </div>
        <Testimonials />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
