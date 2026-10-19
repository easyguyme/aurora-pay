import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Shared chrome                                                       */
/* ------------------------------------------------------------------ */

function TrafficLights({ className }: { className?: string }) {
  return (
    <span className={cn("flex gap-1.5", className)} aria-hidden>
      <span className="size-2.5 rounded-full bg-[#ff5f57]" />
      <span className="size-2.5 rounded-full bg-[#febc2e]" />
      <span className="size-2.5 rounded-full bg-[#28c840]" />
    </span>
  );
}

function WindowFrame({
  children,
  label,
  className,
  bodyClassName,
}: {
  children: React.ReactNode;
  label?: string;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-[var(--border)] shadow-xl",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-[var(--border)] px-3 py-2">
        <TrafficLights />
        {label ? (
          <span className="ml-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            {label}
          </span>
        ) : null}
      </div>
      <div className={cn("p-4", bodyClassName)}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero mockups                                                        */
/* ------------------------------------------------------------------ */

export function TerminalMockup({ className }: { className?: string }) {
  return (
    <WindowFrame
      label="Terminal"
      className={cn("bg-charcoal-900 text-gray-200", className)}
      bodyClassName="font-mono text-[11px] leading-relaxed"
    >
      <div className="flex flex-col gap-1.5">
        <p>
          <span className="text-gray-500">→</span>{" "}
          <span className="text-gray-100">
            Read https://aurora.io/SKILL.md
          </span>
          <br />
          <span className="text-gray-500">and set up the Aurora CLI for me</span>
        </p>
        <p className="text-green-400">✓ Installed &amp; authenticated</p>
        <p>
          <span className="text-gray-500">→</span>{" "}
          <span className="text-gray-100">
            Create a new $99 credit pack priced $99, with a 10% discount
          </span>
        </p>
        <p className="text-green-400">
          ✓ New product created. Here&apos;s the checkout link.
        </p>
      </div>
    </WindowFrame>
  );
}

export function CheckoutMockup({ className }: { className?: string }) {
  const field =
    "h-9 w-full rounded-lg border border-[var(--border)] bg-background px-3 text-xs text-foreground";

  return (
    <WindowFrame
      label="Checkout"
      className={cn("bg-white text-gray-900", className)}
      bodyClassName="space-y-3"
    >
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-semibold">Pack of 500 credits</span>
        <span className="text-sm font-semibold">$99</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-600">
        <span className="size-3.5 rounded-full bg-peach-300" />
        by My Awesome Store
      </div>
      <hr className="border-dashed border-gray-200" />
      <div className="space-y-2">
        <label className="block space-y-1 text-[11px] text-gray-600">
          Email
          <input className={field} defaultValue="johndoe@example.com" readOnly />
        </label>
        <label className="block space-y-1 text-[11px] text-gray-600">
          Full name
          <input className={field} defaultValue="John Doe" readOnly />
        </label>
        <label className="block space-y-1 text-[11px] text-gray-600">
          Billing address
          <input className={field} defaultValue="United States" readOnly />
        </label>
      </div>
      <hr className="border-dashed border-gray-200" />
      <dl className="space-y-1 text-xs">
        <div className="flex justify-between">
          <dt className="text-gray-600">Subtotal</dt>
          <dd>$75.24</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-gray-600">VAT (24%)</dt>
          <dd>$23.76</dd>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-1 font-semibold">
          <dt>Total</dt>
          <dd>$99.00</dd>
        </div>
      </dl>
      <div className="rounded-[10px] bg-peach-300 px-4 py-2.5 text-center text-sm font-medium text-gray-900">
        Continue to payment
      </div>
    </WindowFrame>
  );
}

export function AgentNotificationCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[var(--border)] bg-white p-3 shadow-lg",
        className,
      )}
    >
      <div className="flex items-start gap-2.5">
        <span
          className="size-8 shrink-0 rounded-lg bg-linear-to-br from-violet-400 to-peach-400"
          aria-hidden
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900">My Store Agent</p>
          <p className="text-xs text-gray-600">
            Checkout for Pack of 500 credits left unfinished.
          </p>
          <div className="mt-2.5 flex gap-2">
            <span className="rounded-[10px] border border-gray-200 px-2.5 py-1 text-[11px] font-medium text-gray-900">
              Offer a 30% discount
            </span>
            <span className="rounded-[10px] bg-peach-300 px-2.5 py-1 text-[11px] font-medium text-gray-900">
              Email
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Dashboard mockup                                                    */
/* ------------------------------------------------------------------ */

export function StatCard({
  label,
  value,
  delta,
  tone = "up",
  className,
}: {
  label: string;
  value: string;
  delta: string;
  tone?: "up" | "down";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-charcoal-1100 bg-charcoal-900/40 p-3",
        className,
      )}
    >
      <p className="text-[11px] text-gray-400">{label}</p>
      <div className="mt-1 flex items-baseline justify-between gap-2">
        <span className="text-2xl font-semibold text-white">{value}</span>
        <span
          className={cn(
            "text-[11px] font-medium",
            tone === "up" ? "text-green-400" : "text-red-400",
          )}
        >
          {tone === "up" ? "↗" : "↘"} {delta}
        </span>
      </div>
    </div>
  );
}

/** Smooth violet area chart drawn as an SVG path. */
export function RevenueChart({ className }: { className?: string }) {
  const solid =
    "M0,86 C30,84 40,60 62,58 C88,55 96,96 122,92 C150,88 158,40 182,44 C208,48 214,78 240,74 C268,70 276,26 302,30 C326,34 334,66 360,60";
  const dashed =
    "M0,104 C40,102 60,96 92,98 C124,100 140,92 176,94 C212,96 228,86 262,88 C296,90 316,80 360,82";

  return (
    <svg
      viewBox="0 0 360 110"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Revenue over the last 24 days"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="rea-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--chart-1)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${solid} L360,110 L0,110 Z`} fill="url(#rea-fill)" />
      <path
        d={dashed}
        fill="none"
        stroke="var(--color-charcoal-100)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d={solid}
        fill="none"
        stroke="var(--chart-1)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const dashboardNav = [
  { group: "", items: ["Home"] },
  {
    group: "Commerce",
    items: ["Products", "Meters", "Discounts", "Licenses"],
  },
  { group: "Finance", items: ["Payments", "Subscriptions", "Balance"] },
  { group: "Insights", items: ["Customers", "Analytics"] },
];

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-2xl border border-charcoal-1100 bg-charcoal-800 shadow-2xl",
        className,
      )}
    >
      {/* Sidebar */}
      <aside className="hidden w-52 shrink-0 flex-col gap-5 border-r border-charcoal-1100 p-4 md:flex">
        <div className="flex items-center gap-2 text-white">
          <svg viewBox="0 0 10 10" className="size-3 fill-current" aria-hidden>
            <path d="M0 0h10L5 10z" />
          </svg>
          <span className="text-sm font-bold tracking-tight">AURORA</span>
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-charcoal-1100 px-2.5 py-2 text-left">
          <span className="size-6 rounded-full bg-peach-300" aria-hidden />
          <span className="text-xs text-gray-300">My Awesome Store</span>
        </button>
        <nav className="flex flex-col gap-4">
          {dashboardNav.map((section) => (
            <div key={section.group || "root"}>
              {section.group ? (
                <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  {section.group}
                </p>
              ) : null}
              <ul className="space-y-0.5">
                {section.items.map((item, i) => (
                  <li key={item}>
                    <span
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-xs",
                        section.group === "" && i === 0
                          ? "bg-charcoal-1100 text-white"
                          : "text-gray-400",
                      )}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="min-w-0 flex-1 p-4">
        <p className="text-sm font-semibold text-white">My Awesome Store</p>
        <p className="text-[11px] text-gray-400">
          Your store&apos;s performance at a glance
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <StatCard label="Customers" value="253" delta="3.3%" tone="down" />
          <StatCard label="Sales" value="1,525" delta="421.0%" />
        </div>

        <div className="mt-2 rounded-xl border border-charcoal-1100 bg-charcoal-900/40 p-3">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] text-gray-400">Revenue Overview</span>
            <span className="text-[11px] font-medium text-green-400">
              ↗ 470.9%
            </span>
          </div>
          <p className="text-2xl font-semibold text-white">$15,362.34</p>
          <div className="mt-2 h-24">
            <RevenueChart />
          </div>
          <div className="mt-1 flex justify-between text-[9px] text-gray-500">
            {["Aug 20", "Aug 23", "Aug 26", "Aug 29", "Sep 1", "Sep 5", "Sep 12"].map(
              (d) => (
                <span key={d}>{d}</span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Bento grid illustrations                                            */
/* ------------------------------------------------------------------ */

export function SplitIllustration() {
  return (
    <div className="w-40 space-y-2 rounded-lg bg-white/70 p-2.5 shadow-sm">
      <p className="flex items-center gap-1.5 text-[10px] font-semibold text-gray-900">
        <span className="size-3 rounded bg-green-600" /> Subscription $99/mo
      </p>
      {[
        { label: "You", pct: 80, cls: "bg-green-600" },
        { label: "Partner", pct: 20, cls: "bg-green-400" },
      ].map((row) => (
        <div key={row.label} className="space-y-0.5">
          <div className="flex justify-between text-[9px] text-gray-700">
            <span>{row.label}</span>
            <span>{row.pct}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
            <div
              className={cn("h-full rounded-full", row.cls)}
              style={{ width: `${row.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function WalletIllustration() {
  return (
    <div className="w-40 space-y-1.5 rounded-lg bg-white/70 p-2.5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="rounded-md bg-violet-300 px-1.5 py-0.5 text-[9px] font-semibold text-gray-900">
          580 Balance
        </span>
        <span className="rounded-md border border-gray-200 px-1.5 py-0.5 text-[9px] text-gray-700">
          Refill
        </span>
      </div>
      <p className="text-[9px] text-gray-600">1,420 Credits used</p>
      <div className="flex h-10 items-end gap-1">
        {[40, 70, 30, 55, 85, 45, 25].map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t bg-violet-400"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <p className="text-[9px] text-gray-600">Total weekly usage</p>
    </div>
  );
}

export function ShortLinkIllustration() {
  return (
    <div className="w-40 space-y-1.5 rounded-lg bg-white/70 p-2.5 shadow-sm">
      <p className="truncate rounded-md bg-amber-300 px-1.5 py-1 text-[9px] font-medium text-gray-900">
        l.aurora.io/abc
      </p>
      <div className="flex gap-2">
        <div>
          <p className="text-sm font-semibold text-gray-900">7,514</p>
          <p className="text-[9px] text-gray-600">clicks</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">251</p>
          <p className="text-[9px] text-gray-600">checkouts</p>
        </div>
      </div>
      <div className="grid size-12 place-items-center rounded bg-gray-900/90 text-[7px] text-white">
        QR
      </div>
    </div>
  );
}

export function SkillIllustration() {
  return (
    <div className="w-40 space-y-1.5">
      <div className="rounded-lg bg-white/80 p-2 shadow-sm">
        <p className="font-mono text-[9px] text-gray-900">SKILL.md</p>
        <div className="mt-1 space-y-0.5">
          <span className="block h-1 w-full rounded bg-gray-200" />
          <span className="block h-1 w-4/5 rounded bg-gray-200" />
          <span className="block h-1 w-3/5 rounded bg-gray-200" />
        </div>
      </div>
      <div className="flex items-center gap-1.5 rounded-lg bg-gray-900 px-2 py-1.5">
        <span className="font-mono text-[10px] text-white">&gt;_</span>
        <span className="font-mono text-[9px] text-gray-400">creem create product</span>
      </div>
    </div>
  );
}

export function ReceiptIllustration() {
  return (
    <div className="w-36 rounded-lg bg-white/80 p-2 shadow-sm">
      <div className="flex gap-1 border-b border-gray-200 pb-1.5">
        {["Receipt", "Payment", "Tax"].map((t, i) => (
          <span
            key={t}
            className={cn(
              "rounded px-1.5 py-0.5 text-[9px]",
              i === 0
                ? "bg-blue-300 font-semibold text-gray-900"
                : "text-gray-600",
            )}
          >
            {t}
          </span>
        ))}
      </div>
      <p className="mt-1.5 text-[9px] text-gray-600">Invoice issued</p>
      <p className="text-[9px] text-gray-600">Tax collected</p>
      <span className="mt-1 inline-block rounded bg-green-300 px-1.5 py-0.5 text-[9px] font-medium text-gray-900">
        Handled
      </span>
    </div>
  );
}

export function AffiliateIllustration() {
  return (
    <div className="w-36 space-y-1.5 rounded-lg bg-white/80 p-2.5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold text-gray-900">Alex Morgan</span>
        <span className="rounded bg-green-300 px-1.5 py-0.5 text-[9px] text-gray-900">
          Active
        </span>
      </div>
      <p className="text-[9px] text-gray-600">Earnings (all time)</p>
      <p className="text-base font-semibold text-gray-900">$240.00</p>
      <div className="flex items-center gap-1.5">
        <span className="rounded bg-green-600 px-1.5 py-0.5 text-[9px] text-white">
          20%
        </span>
        <span className="text-[9px] text-gray-600">Commission</span>
      </div>
    </div>
  );
}

export function SplitPreviewIllustration() {
  return (
    <div className="w-40 rounded-lg bg-white/80 p-2.5 shadow-sm">
      <p className="text-[9px] font-semibold text-gray-900">Split Preview</p>
      <div className="mt-1 space-y-1">
        {[
          { label: "Pro plan $99/mo", pct: "70%", cls: "bg-violet-500" },
          { label: "My Store", pct: "70%", cls: "bg-violet-400" },
          { label: "Jamie Lee", pct: "10%", cls: "bg-peach-400" },
        ].map((r) => (
          <div key={r.label} className="flex items-center gap-1.5">
            <span className={cn("size-2 rounded-sm", r.cls)} />
            <span className="flex-1 truncate text-[9px] text-gray-700">
              {r.label}
            </span>
            <span className="text-[9px] font-medium text-gray-900">{r.pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LinkStatsIllustration() {
  return (
    <div className="w-36 rounded-lg bg-white/80 p-2.5 shadow-sm">
      <p className="truncate font-mono text-[9px] text-gray-900">l.aurora.io/launch</p>
      <div className="mt-1 flex gap-3">
        <div>
          <p className="text-sm font-semibold text-gray-900">7,514</p>
          <p className="text-[9px] text-gray-600">Total clicks</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">251</p>
          <p className="text-[9px] text-gray-600">Checkouts</p>
        </div>
      </div>
    </div>
  );
}

export function CreditCardIllustration() {
  return (
    <div className="w-40 space-y-1.5 rounded-lg bg-white/80 p-2.5 shadow-sm">
      <p className="text-[10px] font-semibold text-gray-900">Customer credits</p>
      <div className="grid grid-cols-2 gap-1 text-[9px] text-gray-600">
        <span>Credit amount</span>
        <span className="text-right font-medium text-gray-900">500</span>
        <span>Unit label</span>
        <span className="text-right font-medium text-gray-900">Credits</span>
      </div>
      <span className="inline-block rounded-[10px] bg-peach-300 px-2 py-1 text-[9px] font-medium text-gray-900">
        Create a new meter
      </span>
    </div>
  );
}

export function MeterIllustration() {
  return (
    <div className="w-40 space-y-1.5 rounded-lg bg-white/80 p-2.5 shadow-sm">
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] font-semibold text-gray-900">Meter</span>
        <span className="text-[9px] text-gray-600">LLM tokens</span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-[9px] text-gray-600">Price</span>
        <span className="text-sm font-semibold text-gray-900">$25.00</span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-[9px] text-gray-600">Per</span>
        <span className="text-[9px] text-gray-700">1,000 requests</span>
      </div>
    </div>
  );
}

export function MeterChipsIllustration() {
  const chips = [
    { label: "API requests", body: "Charge per call to your API endpoint" },
    { label: "Compute", body: "Meter background jobs" },
    { label: "Storage", body: "Bill for peak storage" },
    { label: "Active seats", body: "Charge for unique active users" },
  ];
  return (
    <div className="w-44 space-y-1.5">
      {chips.map((c) => (
        <div
          key={c.label}
          className="rounded-lg border border-[var(--border)] bg-white/80 p-2 shadow-sm"
        >
          <p className="text-[10px] font-semibold text-gray-900">{c.label}</p>
          <p className="text-[9px] text-gray-600">{c.body}</p>
        </div>
      ))}
    </div>
  );
}
