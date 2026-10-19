import Link from "next/link";
import { ArrowRight, Globe, Shield, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  aboutIntegrations,
  aboutPrinciples,
  aboutStats,
  aboutTeam,
  aboutTimeline,
} from "@/lib/mock-data";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-violet-300">
      <div className="arc-field pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-700">
          About Aurora Pay
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,4.5rem)] text-gray-900">
          Built for people who build software
        </h1>
        <p className="mt-6 max-w-xl text-lg font-semibold text-gray-900">
          We are the money layer for the AI era.
        </p>
        <p className="mt-3 max-w-xl text-gray-700">
          We started Aurora Pay because the hardest part of shipping software was
          rarely the software. It was becoming a payments company before you
          could charge anyone for the thing you just built.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg">
            Start selling
            <ArrowRight />
          </Button>
          <Button size="lg" variant="outline">
            <Terminal />
            Read the docs
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

export function AboutStats() {
  return (
    <section className="border-b border-[var(--border)] bg-card">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {aboutStats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl text-foreground">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Mission                                                             */
/* ------------------------------------------------------------------ */

export function AboutMission() {
  return (
    <section>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
            Why we exist
          </h2>
          <p className="mt-5 text-muted-foreground">
            Every developer who wants to charge for their work hits the same
            wall. Registering for VAT in five countries. Wiring a tax engine.
            Reconciling payouts by hand. Answering a chargeback at midnight.
          </p>
          <p className="mt-4 text-muted-foreground">
            None of that is the product. A payments layer should let you keep
            building, and take the regulated, expensive, boring parts off your
            plate entirely.
          </p>
          <p className="mt-4 font-medium text-foreground">
            So we became the legal seller on every transaction. You keep the
            customer relationship, the product and the upside. We take on tax,
            compliance, fraud and chargeback liability.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-2xl bg-charcoal-900 p-7 text-white shadow-2xl">
            <Globe className="size-6 text-peach-300" />
            <p className="mt-4 font-display text-2xl leading-[1.1]">
              One integration,
              <br />
              every market
            </p>
            <p className="mt-3 text-sm text-gray-300">
              You integrate once. Your customers then see local payment methods,
              prices in their own currency, and an invoice that is already
              correct — because we are the seller.
            </p>
            <dl className="mt-6 space-y-3 border-t border-charcoal-1100 pt-6 text-sm">
              {[
                ["Countries", "190+"],
                ["Currencies", "30"],
                ["Tax regimes handled", "190+"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <dt className="text-gray-400">{label}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Principles                                                          */
/* ------------------------------------------------------------------ */

export function AboutPrinciples() {
  const icons = [Shield, Sparkles, Globe, Terminal];

  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          How we work
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Four principles we actually use to settle arguments.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {aboutPrinciples.map((principle, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={principle.title}
                className="rounded-2xl border border-[var(--border)] bg-background p-6"
              >
                <Icon className="size-5 text-[var(--accent-text)]" />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {principle.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Timeline                                                            */
/* ------------------------------------------------------------------ */

export function AboutTimeline() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          How we got here
        </h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {aboutTimeline.map((entry, i) => (
            <li key={entry.year} className="relative">
              <div className="flex items-center gap-3">
                <span
                  className="size-2.5 shrink-0 rounded-full bg-[var(--accent-text)]"
                  aria-hidden
                />
                {i < aboutTimeline.length - 1 ? (
                  <span
                    className="hidden h-px flex-1 bg-[var(--border)] md:block"
                    aria-hidden
                  />
                ) : null}
              </div>
              <p className="mt-4 font-mono text-sm text-muted-foreground">
                {entry.year}
              </p>
              <h3 className="mt-1 font-semibold text-foreground">{entry.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{entry.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

export function AboutTeam() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
              The team
            </h2>
            <p className="mt-4 text-muted-foreground">
              Payment engineers, compliance leads and product people who would
              rather be building than filing returns.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Distributed across 11 countries. Two days a week with no meetings.
            </p>
            <Button variant="outline" className="mt-6" asChild>
              <Link href="/careers">
                See open roles
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {aboutTeam.map((person) => (
              <li
                key={person.name}
                className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-background p-4"
              >
                <span
                  className="size-11 shrink-0 rounded-full bg-linear-to-br from-violet-400 to-peach-400"
                  aria-hidden
                />
                <span className="min-w-0">
                  <span className="block font-semibold text-foreground">
                    {person.name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {person.role} · since {person.since}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Integrations                                                         */
/* ------------------------------------------------------------------ */

export function AboutIntegrations() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] text-foreground">
          Everywhere you build
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          If it can talk HTTP, it can sell. Most people start with one of these.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {aboutIntegrations.map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-[var(--accent-text)]"
                      aria-hidden
                    />
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

/* ------------------------------------------------------------------ */
/* CTA                                                                 */
/* ------------------------------------------------------------------ */

export function AboutCta() {
  return (
    <section className="bg-violet-300">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-[clamp(2rem,5.5vw,4rem)] text-gray-900">
          Come build with us
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-gray-800">
          Whether you are shipping your first product or your hundredth, there
          is a much better way to get paid.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg">
            Start selling
            <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className={cn("bg-transparent")}
            asChild
          >
            <Link href="/contact">Talk to us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
