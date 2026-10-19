"use client";

import * as React from "react";
import { ProviderComparisonChart } from "@/components/provider-comparison-chart";
import {
  AVERAGE_ORDER_VALUE,
  providers,
} from "@/lib/mock-data";

/** Fees for a provider at a given monthly gross volume. */
function feesFor(
  provider: (typeof providers)[number],
  gross: number,
): { transactions: number; fees: number; net: number } {
  const transactions = Math.max(
    1,
    Math.ceil(gross / AVERAGE_ORDER_VALUE),
  );
  const fees =
    transactions * (provider.percent * AVERAGE_ORDER_VALUE + provider.fixed);
  return { transactions, fees, net: gross - fees };
}

const MARKETS = ["USD", "EUR", "GBP"] as const;

export function FeeCalculator() {
  const [volume, setVolume] = React.useState(5000);
  const [market, setMarket] = React.useState<(typeof MARKETS)[number]>("USD");

  const aurora = providers[0];
  const auroraFees = feesFor(aurora, volume);
  const others = providers
    .slice(1)
    .map((p) => ({ provider: p, ...feesFor(p, volume) }));

  const bestSaving = Math.max(...others.map((o) => o.fees - auroraFees.fees));
  const monthlySaving = Math.max(0, bestSaving);
  const yearlySaving = monthlySaving * 12;

  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      {/* Controls */}
      <div className="space-y-7">
        <div>
          <label
            htmlFor="market"
            className="block text-sm font-medium text-foreground"
          >
            Currency
          </label>
          <select
            id="market"
            value={market}
            onChange={(e) =>
              setMarket(e.target.value as (typeof MARKETS)[number])
            }
            className="mt-2 h-11 w-40 rounded-[10px] border border-[var(--border)] bg-card px-3 text-sm text-foreground"
          >
            {MARKETS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="volume"
            className="block text-sm font-medium text-foreground"
          >
            Monthly sales volume
          </label>
          <input
            id="volume"
            type="range"
            min={100}
            max={50000}
            step={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            aria-valuetext={`$${volume.toLocaleString()} ${market} per month`}
            className="mt-3 w-full accent-[var(--accent-text)]"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {["$1k", "$5k", "$10k", "$50k"].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setVolume(Number(label.replace("$", "")) * 1000)}
                className="rounded border border-[var(--border)] px-2 py-0.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </button>
            ))}
          </div>
          <p className="mt-3 font-mono text-sm text-foreground">
            ${volume.toLocaleString()} {market} / month
          </p>
        </div>

        <div className="rounded-xl border border-[var(--border)] bg-card p-5">
          <p className="text-sm text-muted-foreground">After Aurora fees</p>
          <p className="mt-1 font-display text-4xl text-foreground">
            ${auroraFees.net.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <dl className="mt-4 space-y-1 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Gross</dt>
              <dd className="text-foreground">
                ${volume.toLocaleString()}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">
                Fees ({auroraFees.transactions} transactions)
              </dt>
              <dd className="text-foreground">
                $
                {auroraFees.fees.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl bg-peach-300 p-5 text-gray-900">
          <p className="text-sm text-gray-800">Save up to</p>
          <p className="font-display text-3xl">
            ${monthlySaving.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            <span className="text-base font-normal"> / month</span>
          </p>
          <p className="mt-2 text-sm text-gray-800">
            That&apos;s ${yearlySaving.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            a year compared with the most expensive alternative, at this volume.
          </p>
        </div>
      </div>

      {/* Comparison */}
      <div>
        <h3 className="text-sm font-medium text-foreground">
          Estimated monthly fees
        </h3>
        <ProviderComparisonChart
          providers={providers.map((p) => ({
            id: p.id,
            label: p.label,
            color: p.color,
            fees: feesFor(p, volume).fees,
          }))}
        />
        <p className="mt-4 text-xs text-muted-foreground">
          Estimates assume a ${AVERAGE_ORDER_VALUE} average order value, with
          the number of transactions rounded up. Comparison rates reflect
          international subscriptions paid with a card.
        </p>
        <a
          href="/payment-fee-calculator"
          className="mt-4 inline-block text-sm font-medium text-[var(--accent-text)] underline underline-offset-4"
        >
          Open advanced calculator
        </a>
      </div>
    </div>
  );
}
