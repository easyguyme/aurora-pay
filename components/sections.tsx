import {
  ArrowRight,
  Banknote,
  CreditCard,
  FileText,
  Globe,
  Network,
  Receipt,
  Shield,
  Store,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  AgentNotificationCard,
  AffiliateIllustration,
  CheckoutMockup,
  CreditCardIllustration,
  DashboardMockup,
  LinkStatsIllustration,
  MeterChipsIllustration,
  MeterIllustration,
  ReceiptIllustration,
  ShortLinkIllustration,
  SkillIllustration,
  SplitIllustration,
  SplitPreviewIllustration,
  TerminalMockup,
  WalletIllustration,
} from "@/components/mockups";
import {
  activityFeed,
  bentoCards,
  billingFeatures,
  builtInItems,
  globalFeatures,
  homeFaqs,
  partnerFeatures,
  testimonials,
  trustItems,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-violet-300">
      <div className="arc-field pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-60" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <h1 className="font-display text-[clamp(2.5rem,6.5vw,4.5rem)]">
            <span className="block text-gray-400">Build with AI</span>
            <span className="block text-gray-900">Sell with Aurora</span>
          </h1>

          <p className="mt-6 text-lg font-semibold text-gray-900">
            Aurora Pay is the money platform for the AI era.
          </p>
          <p className="mt-3 max-w-md text-gray-700">
            Sell software and digital products globally, with payments, taxes,
            payouts, affiliates, usage billing, conversion attribution and
            analytics handled for you.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button size="lg">
              <Store />
              Start selling
            </Button>
            <Button size="lg" variant="outline">
              <Terminal />
              Set up with your agent
            </Button>
          </div>
        </div>

        {/* Overlapping mockup cluster */}
        <div className="relative mx-auto w-full max-w-md pb-24 lg:max-w-none">
          <TerminalMockup className="relative z-10 w-full lg:max-w-sm" />
          <CheckoutMockup className="absolute -right-2 -top-10 z-20 w-[15rem] lg:-right-10" />
          <AgentNotificationCard className="absolute bottom-[-3.5rem] left-2 z-30 w-[15rem] lg:-left-6" />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust row                                                           */
/* ------------------------------------------------------------------ */

const trustIcons = { globe: Globe, network: Network, shield: Shield };

export function TrustRow() {
  return (
    <section className="bg-violet-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 sm:grid-cols-3 lg:pb-20">
        {trustItems.map((item) => {
          const Icon = trustIcons[item.icon as keyof typeof trustIcons];
          return (
            <div key={item.title} className="flex gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-violet-400/60">
                <Icon className="size-5 text-gray-900" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Dark statement + dashboard                                          */
/* ------------------------------------------------------------------ */

export function DarkStatement() {
  return (
    <section className="relative bg-charcoal-900 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
        <div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)]">
            Ship in a weekend
            <br />
            Sell by Monday
          </h2>
          <p className="mt-6 max-w-md text-gray-300">
            Builders still stitch together a tax setup, a payouts flow, an
            affiliate tool and a billing system before they can charge a
            single customer.
          </p>
          <p className="mt-4 max-w-md text-gray-300">
            Aurora Pay is everything after the build: checkout, tax, billing,
            affiliates and payouts, so you can get paid faster.
          </p>
          <Button className="mt-8" size="lg">
            Start selling
          </Button>
        </div>

        <DashboardMockup className="w-full" />
      </div>

      {/* Wave transition into the next section */}
      <div
        className="wave-bottom h-16 w-full bg-background"
        style={{
          maskImage:
            "radial-gradient(120% 100% at 50% 0%, black 55%, transparent 56%)",
          WebkitMaskImage:
            "radial-gradient(120% 100% at 50% 0%, black 55%, transparent 56%)",
        }}
        aria-hidden
      />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Bento grid                                                          */
/* ------------------------------------------------------------------ */

const toneMap: Record<string, string> = {
  green: "bg-green-300",
  violet: "bg-violet-300",
  amber: "bg-amber-300",
  peach: "bg-peach-300",
  blue: "bg-blue-300",
};

const illustrations: Record<string, React.ReactNode> = {
  split: <SplitIllustration />,
  wallet: <WalletIllustration />,
  shortlink: <ShortLinkIllustration />,
  skill: <SkillIllustration />,
  receipt: <ReceiptIllustration />,
};

export function BentoGrid() {
  return (
    <section id="features" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
              Everything you need
            </h2>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Accepting payments is just the start. Customize your pricing
              based on metered billing, split revenue with partners, track
              sales through custom links and more.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {bentoCards.map((card, i) => (
              <article
                key={card.id}
                className={cn(
                  "flex flex-col justify-between gap-6 rounded-2xl p-6",
                  toneMap[card.tone],
                  i === 0 && "sm:col-span-2",
                )}
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-gray-800/90">
                    {card.body}
                  </p>
                </div>
                <div className="flex justify-start">{illustrations[card.illustration]}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Billing                                                              */
/* ------------------------------------------------------------------ */

const billingIllustrations: Record<string, React.ReactNode> = {
  creditcard: <CreditCardIllustration />,
  meter: <MeterIllustration />,
  chips: <MeterChipsIllustration />,
};

export function BillingSection() {
  return (
    <section id="billing" className="scroll-mt-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          Billing for the AI era
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {billingFeatures.map((f) => (
            <div key={f.title}>
              <h3 className="text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              <div className="mt-6">{billingIllustrations[f.illustration]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Global / merchant of record                                          */
/* ------------------------------------------------------------------ */

const globalIcons = {
  "credit-card": CreditCard,
  receipt: Receipt,
  "file-text": FileText,
  banknote: Banknote,
};

export function GlobalSection() {
  return (
    <section id="global" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          <span className="text-foreground">Sell globally</span>
          <br />
          <span className="text-muted-foreground">We handle the rest</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Aurora Pay is the merchant of record on every sale. We handle
          payments, taxes and compliance across 190+ countries, issue the
          invoices, take on fraud and chargebacks, and pay you out. You never
          register for VAT in a country you have never visited.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {globalFeatures.map((f) => {
            const Icon =
              globalIcons[f.icon as keyof typeof globalIcons] ?? Globe;
            return (
              <div key={f.title}>
                <Icon className="size-6 text-[var(--accent-text)]" />
                <h3 className="mt-3 font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Partners                                                             */
/* ------------------------------------------------------------------ */

const partnerIllustrations: Record<string, React.ReactNode> = {
  affiliate: <AffiliateIllustration />,
  splitpreview: <SplitPreviewIllustration />,
  linkstats: <LinkStatsIllustration />,
};

export function PartnersSection() {
  return (
    <section id="partners" className="scroll-mt-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          Grow through partners,
          <br />
          <span className="text-muted-foreground">not more software</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Affiliates, revenue splits and short links are built into every sale,
          so attribution, commissions and payouts never leave the platform.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {partnerFeatures.map((f) => (
            <div key={f.title}>
              <h3 className="text-xl font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              <div className="mt-6">{partnerIllustrations[f.illustration]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Agent section                                                       */
/* ------------------------------------------------------------------ */

export function AgentSection() {
  return (
    <section id="agents" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          Ask AI agent
          <br />
          <span className="text-muted-foreground">to set up your store</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          One command adds the Aurora Pay MCP server to your agent. From there
          it creates products, opens checkouts and wires verified webhooks by
          calling the real API with your key. Start in test mode.
        </p>

        <div className="mt-8 overflow-x-auto rounded-xl bg-charcoal-900 p-4 font-mono text-xs text-gray-200">
          <p className="whitespace-pre">
            <span className="text-gray-500">https://aurora.io/SKILL.md</span>
            {"\n"}
            <span className="text-peach-300">
              Create a new $99 credit pack with a 10% discount
            </span>
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[
            {
              t: "One line to install",
              b: "One command for your agent. The same config block for every MCP client. Nothing else to install.",
            },
            {
              t: "Skills to read, tools to run",
              b: "The skill file teaches your agent how Aurora Pay works. The MCP server gives it the tools to act on your store.",
            },
            {
              t: "Test before you launch",
              b: "Use AI to build and check your products and setup in test mode before switching your store to live payments.",
            },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="font-semibold text-foreground">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Activity feed                                                        */
/* ------------------------------------------------------------------ */

const statusTone = {
  success: "bg-green-300 text-gray-900",
  danger: "bg-red-300 text-gray-900",
  warning: "bg-amber-300 text-gray-900",
};

export function ActivityList() {
  return (
    <ul className="space-y-2">
      {activityFeed.map((item) => (
        <li
          key={item.title}
          className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-card px-3 py-2.5"
        >
          <span
            className={cn(
              "size-2 shrink-0 rounded-full",
              item.tone === "success"
                ? "bg-green-600"
                : item.tone === "danger"
                  ? "bg-red-600"
                  : "bg-amber-600",
            )}
            aria-hidden
          />
          <span className="text-sm font-medium text-foreground">{item.title}</span>
          <span className="text-sm text-muted-foreground">{item.detail}</span>
          <span
            className={cn(
              "ml-auto rounded px-1.5 py-0.5 text-[10px] font-medium",
              statusTone[item.tone],
            )}
          >
            {item.status}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function AgentOngoingSection() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          Your agent&apos;s job
          <br />
          <span className="text-muted-foreground">Doesn&apos;t end at launch</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Point the agent at your live store to get notified on a new sale, a
          renewal that failed or a customer who scheduled a cancellation for
          next month. Propose a win-back offer, create the code, send a billing
          portal link, issue a refund with a single click.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Recent activity
            </p>
            <ActivityList />
          </div>
          <div className="space-y-8">
            {[
              {
                t: "Only what’s important",
                b: "New sales, failed payments, cancellations, upgrades, and a churn spike if several cancel at once.",
              },
              {
                t: "Take the next step",
                b: "Ask your agent to generate a billing portal link, create a discount code or issue a refund.",
              },
              {
                t: "From wherever your agent lives",
                b: "Claude Code, a Slack bot, a cron job. CLI or plain API. Test key first, live key when you’re ready.",
              },
            ].map((f) => (
              <div key={f.t}>
                <h3 className="font-semibold text-foreground">{f.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Mobile apps                                                          */
/* ------------------------------------------------------------------ */

export function MobileAppsBand() {
  return (
    <section id="mobile" className="scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          Sell from anywhere
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Native apps for iPhone and Android with real-time push notifications.
          Every sale lands on your lock screen, no dashboard needed.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["iPhone app", "Android app"].map((label) => (
            <span
              key={label}
              className="rounded-lg border border-[var(--border)] bg-card px-5 py-2.5 text-sm font-medium text-foreground"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing teaser                                                       */
/* ------------------------------------------------------------------ */

export function PricingTeaser() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          Only pay when you earn.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          No monthly fees. No setup fees. Nothing until you sell. One rate on
          every successful sale — the same for one-time purchases and
          subscriptions, for every card type and every country.
        </p>

        <div className="mt-10 flex flex-wrap items-end gap-10">
          {[
            { big: "3.9%", small: "per successful transaction" },
            { big: "40¢", small: "per successful transaction" },
          ].map((s) => (
            <div key={s.big}>
              <p className="font-display text-6xl text-foreground">{s.big}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.small}</p>
            </div>
          ))}
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>One-time payments</p>
            <p>Subscriptions</p>
          </div>
          <Button variant="outline" asChild className="ml-auto">
            <a href="/pricing">
              See full pricing
              <ArrowRight />
            </a>
          </Button>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {builtInItems.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-foreground">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
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
      </div>
    </section>
  );
}

export function PartnerPlanCard() {
  return (
    <div className="mt-14 rounded-2xl bg-peach-300 p-7 text-gray-900">
      <h3 className="font-display text-2xl">Partner plan</h3>
      <p className="mt-2 max-w-md text-sm text-gray-800">
        Your whole payments team, without hiring it.
      </p>
      <div className="mt-8 grid gap-7 sm:grid-cols-3">
        {[
          {
            t: "A team that knows your name",
            b: "A dedicated account manager on phone and WhatsApp, 24/7. A private Slack channel with our team.",
          },
          {
            t: "Weekly concierge sessions",
            b: "Sit down with your payments concierge weekly to identify revenue opportunities.",
          },
          {
            t: "Money that moves your way",
            b: "On-demand payouts, a shorter risk hold, lower fees, and 0% fees on revenue splits.",
          },
        ].map((f) => (
          <div key={f.t}>
            <h4 className="font-semibold">{f.t}</h4>
            <p className="mt-1.5 text-sm text-gray-800/90">{f.b}</p>
          </div>
        ))}
      </div>
      <Button className="mt-8 bg-gray-900 text-white hover:bg-charcoal-800" asChild>
        <a href="/book-a-call">Book a call</a>
      </Button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                         */
/* ------------------------------------------------------------------ */

export function Testimonials() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          Trusted by builders worldwide.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Founders, indie hackers and agencies ship on Aurora Pay every day.
          Here is what they are saying.
        </p>

        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4">
          {testimonials.map((t) => (
            <figure
              key={t.handle}
              className="w-72 shrink-0 snap-start rounded-xl border border-[var(--border)] bg-card p-5"
            >
              <figcaption className="flex items-center gap-3">
                <span
                  className="size-9 rounded-full bg-linear-to-br from-violet-400 to-peach-400"
                  aria-hidden
                />
                <span>
                  <span className="block text-sm font-semibold text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {t.handle}
                  </span>
                </span>
              </figcaption>
              <blockquote className="mt-4 text-sm text-muted-foreground">
                “{t.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                  */
/* ------------------------------------------------------------------ */

export function FaqAccordion({
  items,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: number;
}) {
  return (
    <Accordion type="single" collapsible defaultValue={`item-${defaultOpen}`}>
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`item-${i}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function FaqSection() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          Questions, answered.
        </h2>
        <div className="mt-10">
          <FaqAccordion items={homeFaqs} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA                                                            */
/* ------------------------------------------------------------------ */

export function FinalCta() {
  return (
    <section className="bg-violet-300">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-[clamp(2rem,5.5vw,4rem)] text-gray-900">
          Your product is ready.
          <br />
          Make it a business.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-gray-800">
          Build with AI. Sell with Aurora. Set up with a single prompt, sell in
          190+ countries and only pay when you earn.
        </p>
        <Button size="lg" className="mt-8">
          Start selling
          <ArrowRight />
        </Button>
      </div>
    </section>
  );
}
