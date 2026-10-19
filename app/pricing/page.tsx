import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { FeeCalculator } from "@/components/fee-calculator";
import { FaqAccordion, FinalCta, PartnerPlanCard } from "@/components/sections";
import { alsoBuiltIn, pricingFaqs } from "@/lib/mock-data";

const builtInCards = [
  {
    title: "Taxes & invoicing",
    items: [
      "Automatic VAT, GST, and sales tax collection and remittance in 50+ countries.",
      "Professional invoices generated and sent automatically for every transaction.",
    ],
  },
  {
    title: "Revenue splits & payouts",
    items: [
      "Automatically split payments between co-founders, affiliates, and contractors.",
      "Payouts are processed on the 1st and 15th of every month to your bank account or crypto wallet.",
    ],
  },
  {
    title: "Payments & protection",
    items: [
      "Credit cards, debit cards, Apple Pay, Google Pay, and more.",
      "Advanced fraud detection and chargeback protection built into every transaction.",
    ],
  },
];

export const metadata = {
  title: "Pricing — Aurora Pay",
  description:
    "One simple price. 3.9% + $0.40 per successful transaction, with taxes, payouts and protection included.",
};

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
            <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] text-foreground">
              One simple price.
            </h1>

            <div className="mt-12">
              <h2 className="font-display text-2xl text-foreground">
                Pay as you go
              </h2>
              <p className="mt-3 text-lg text-muted-foreground">
                3.9 percent plus 40 US cents
              </p>
              <p className="text-sm text-muted-foreground">
                per successful transaction
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                The fixed fee is $0.40 USD.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <FeeCalculator />
          </div>
        </section>

        {/* What's included */}
        <section className="border-b border-[var(--border)] bg-card">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
              Built in, not bolted on.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Taxes, payouts, and protection are part of Aurora Pay itself. No
              plugins to install, no add-ons to configure. It all works out of
              the box.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {builtInCards.map((card) => (
                <div key={card.title}>
                  <h3 className="font-semibold text-foreground">{card.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {card.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent-text)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Also built in
              </h3>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
                {alsoBuiltIn.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span
                      className="grid size-5 place-items-center rounded-full bg-green-300 text-[10px] font-bold text-gray-900"
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Savings */}
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
              Less in fees. More for you.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              See how much you could save by switching to Aurora Pay.
            </p>
            <div className="mt-10">
              <FeeCalculator />
            </div>
          </div>
        </section>

        {/* Partner plan */}
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <PartnerPlanCard />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-card">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
              Got questions?
            </h2>
            <p className="mt-3 text-muted-foreground">
              More on fees, payments and getting paid.
            </p>
            <div className="mt-10">
              <FaqAccordion items={pricingFaqs} />
            </div>
            <div className="mt-8">
              <Button variant="outline">Talk to us</Button>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
