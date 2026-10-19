/**
 * All page content lives here so copy can be edited without touching layout.
 * Figures, names and testimonials are illustrative placeholders.
 */

export const nav = {
  product: [
    { label: "Checkout & payment links", href: "/#features" },
    { label: "Billing & credit wallets", href: "/#billing" },
    { label: "Affiliates & splits", href: "/#partners" },
    { label: "Mobile app", href: "/#mobile" },
    { label: "Fee calculator", href: "/payment-fee-calculator" },
  ],
  developers: [
    { label: "Documentation", href: "https://docs.example.com" },
    { label: "API reference", href: "https://docs.example.com/api-reference" },
    { label: "SDKs", href: "https://docs.example.com/code/sdks/typescript" },
    { label: "CLI & agents", href: "/#agents" },
    { label: "Status", href: "https://status.example.com" },
  ],
} as const;

export const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Checkout & payment links", href: "/#features" },
      { label: "Billing & credit wallets", href: "/#billing" },
      { label: "Affiliates & splits", href: "/#partners" },
      { label: "Mobile app", href: "/#mobile" },
      { label: "Fee calculator", href: "/payment-fee-calculator" },
      { label: "Documentation", href: "https://docs.example.com" },
      { label: "API reference", href: "https://docs.example.com/api-reference" },
      { label: "SDKs", href: "https://docs.example.com/code/sdks/typescript" },
      { label: "CLI & agents", href: "/#agents" },
      { label: "Status", href: "https://status.example.com" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs Stripe", href: "/comparisons/stripe" },
      { label: "vs Lemon Squeezy", href: "/comparisons/lemon-squeezy" },
      { label: "vs Paddle", href: "/comparisons/paddle" },
      { label: "vs Gumroad", href: "/comparisons/gumroad" },
      { label: "vs Whop", href: "/comparisons/whop" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy notice", href: "/privacy" },
      { label: "Merchant terms", href: "/terms" },
      { label: "Buyer terms", href: "/buyer-terms" },
      { label: "Data processing agreement", href: "/dpa" },
      { label: "Acceptable products", href: "https://docs.example.com" },
    ],
  },
];

export const trustItems = [
  {
    icon: "globe",
    title: "Get paid globally",
    body: "Take payments from customers in 190+ countries, in their currency and with their payment methods.",
  },
  {
    icon: "network",
    title: "Grow through partners",
    body: "Affiliates, revenue splits and short links. Recruit partners, track every click and pay them from the same balance.",
  },
  {
    icon: "shield",
    title: "Stay compliant",
    body: "Aurora Pay is the merchant of record. Taxes, invoices, fraud and chargebacks are handled on every sale.",
  },
];

export const bentoCards = [
  {
    id: "affiliates",
    tone: "green",
    title: "Affiliates and revenue splits",
    body: "Flexible commission per product and per affiliate. Set a share of every sale that is routed to partners automatically.",
    illustration: "split",
  },
  {
    id: "billing",
    tone: "violet",
    title: "Billing for the AI era",
    body: "Credit wallets, usage based pricing and custom meters. Charge per generation, call or minute, with usage visible per customer and per period.",
    illustration: "wallet",
  },
  {
    id: "shortlinks",
    tone: "amber",
    title: "Short links",
    body: "Track every click and conversion with QR codes, password, geo & device targeting and more.",
    illustration: "shortlink",
  },
  {
    id: "devtools",
    tone: "peach",
    title: "MCP, API & CLI",
    body: "Everything in the dashboard is scriptable and ready for your agent.",
    illustration: "skill",
  },
  {
    id: "mor",
    tone: "blue",
    title: "Merchant of record",
    body: "Sell globally. Aurora Pay handles payments, taxes, invoices, fraud and chargebacks.",
    illustration: "receipt",
  },
] as const;

export const billingFeatures = [
  {
    title: "Credit wallets",
    body: "Sell prepaid credit packs. Customers pay up front, your app debits the balance per generation, call or minute, and auto-refill tops them up.",
    illustration: "creditcard",
  },
  {
    title: "Usage based pricing",
    body: "Attach a per-unit price to any product, with a free allowance and an optional cap. Customers see what they used. You see it per customer and per period.",
    illustration: "meter",
  },
  {
    title: "Custom meters",
    body: "Define the unit: tokens, images, minutes or API calls, with filters and aggregations. Send usage events to the API and Aurora Pay does the counting.",
    illustration: "chips",
  },
] as const;

export const globalFeatures = [
  {
    icon: "credit-card",
    title: "Payments",
    body: "Cards, PayPal, Apple Pay and Google Pay, charged in your customer’s currency.",
  },
  {
    icon: "receipt",
    title: "Taxes and compliance",
    body: "VAT, GST and sales tax calculated, collected, filed and remitted — across 190+ countries.",
  },
  {
    icon: "file-text",
    title: "Invoices, fraud and chargebacks",
    body: "A compliant invoice on every sale. Fraud screening and chargeback liability sit with Aurora Pay, not with you.",
  },
  {
    icon: "banknote",
    title: "Payouts",
    body: "Your earnings, paid out to your bank account on a predictable schedule.",
  },
] as const;

export const partnerFeatures = [
  {
    title: "Affiliates",
    body: "Flexible commission per product and per affiliate. Approve who joins, verify partners, and pay them from the same balance.",
    illustration: "affiliate",
  },
  {
    title: "Revenue splits",
    body: "Route a share of every sale to co-founders, collaborators or licensors automatically. No spreadsheet reconciliation.",
    illustration: "splitpreview",
  },
  {
    title: "Short links",
    body: "Track every click and conversion with QR codes, password, geo & device targeting and more.",
    illustration: "linkstats",
  },
] as const;

export const activityFeed = [
  { title: "New sale", detail: "SaaS Kit · $129", status: "Success", tone: "success" },
  { title: "Renewal failed", detail: "Pro plan · Past due", status: "Failed", tone: "danger" },
  {
    title: "Cancellation scheduled",
    detail: "Pro plan · At period end",
    status: "Scheduled",
    tone: "warning",
  },
] as const;

export const builtInItems = [
  {
    title: "Sell anywhere",
    items: ["Global taxes and compliance", "Checkout, payment links and storefront"],
  },
  {
    title: "Every way to earn",
    items: [
      "Single payments and subscriptions",
      "Credit wallets and usage based billing",
      "Affiliates, revenue splits and short links",
    ],
  },
  {
    title: "The operations, handled",
    items: [
      "Invoices, fraud and chargeback handling",
      "API, SDKs, CLI and webhooks",
      "Human support",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Marko Denic",
    handle: "@denicmarko",
    quote:
      "We needed two things to launch: a payment processor that did not fight us, and automatic revenue splits. Aurora Pay handled both out of the box.",
  },
  {
    name: "Tibo",
    handle: "@tibo_maker",
    quote:
      "After years of payments platforms, I had one hard rule. Today I am making my first exception. I handled my community launch in an afternoon.",
  },
  {
    name: "Daniel Smidstrup",
    handle: "@DanielSmidstrup",
    quote:
      "Account approvals took hours, not days. They are reachable in their app, and their AI support agent actually answers.",
  },
  {
    name: "Florin Pop",
    handle: "@FlorinPop17",
    quote:
      "I moved payments for all my products over, and I could not be happier. Revenue splits are next — that is the one I am most excited about.",
  },
  {
    name: "Thomas Sanlis",
    handle: "@T_Zahil",
    quote:
      "I suggested a feature a few weeks ago and it shipped. I am generating discount codes for a side project and it just works.",
  },
  {
    name: "Marc Lou",
    handle: "@marclou",
    quote:
      "Three new sponsors overnight on my marketplace. A payments provider helping a little marketplace reach new highs. Thank you.",
  },
] as const;

export const homeFaqs = [
  {
    q: "What is a merchant of record?",
    a: "Aurora Pay is the legal seller on every transaction. We process the payment, calculate and collect the right tax, issue the invoice, file and remit, and handle fraud and chargebacks. You keep building the product.",
  },
  {
    q: "How is this different from taking payments directly?",
    a: "A payment processor just moves the money. You stay the seller, so registering for tax, filing returns and fighting chargebacks in every market falls on you. As merchant of record, that all moves to us.",
  },
  {
    q: "Which countries can I sell to?",
    a: "Sell to customers worldwide. We handle tax and compliance across 190+ countries, including the EU, UK, US, South Korea and more, with local payment methods shown automatically.",
  },
  {
    q: "Do I need a registered company to sell?",
    a: "No. You can sell as an individual or a registered business. You complete a quick identity or business verification when you onboard, and we handle the seller-side compliance.",
  },
  {
    q: "How do credit wallets and usage based billing work?",
    a: "Meter what your customers use, then bill it two ways: prepaid, where usage draws down a credit balance that can auto-recharge, or postpaid, where usage adds up and is billed at the end of the period.",
  },
  {
    q: "What can my agent do with Aurora Pay?",
    a: "Everything the dashboard does. Aurora Pay is API and CLI first, so an agent can create products, spin up checkouts, read billing and manage subscriptions programmatically, using the same API and your key.",
  },
];

export const pricingFaqs = [
  {
    q: "Are there any hidden fees?",
    a: "No hidden fees, ever. You pay 3.9% + $0.40 per successful transaction. No setup fees, no monthly fees. What you see is what you pay.",
  },
  {
    q: "How does Aurora Pay compare to Stripe?",
    a: "Stripe charges 2.9% + $0.30 but you still handle taxes, compliance and usually need third-party tools for subscriptions. With Aurora Pay, those are included in the rate.",
  },
  {
    q: "When do I get paid?",
    a: "Payouts are processed on the 1st and 15th of each month, whether you choose a bank account or a USDC wallet. Arrival time depends on your payout method.",
  },
  {
    q: "What payment methods do you support?",
    a: "All major credit and debit cards (Visa, Mastercard, Amex, Discover), Apple Pay, Google Pay, and more methods coming soon.",
  },
  {
    q: "Do you handle refunds and chargebacks?",
    a: "Yes. As your merchant of record, we handle all refunds and chargebacks on your behalf. You focus on building the product.",
  },
  {
    q: "Is there a minimum volume requirement?",
    a: "There is no minimum volume requirement for standard pay-as-you-go pricing. Higher-volume businesses can contact us about custom Enterprise pricing.",
  },
];

export const alsoBuiltIn = [
  "Credit wallets",
  "Usage-based billing",
  "Custom meters",
  "API, SDKs, CLI & webhooks",
  "Multi-currency support",
  "Subscription management",
  "No international card fees",
  "Stablecoin payouts",
];

/** Provider fee rates used by the calculator. Order matters for the chart. */
export const providers = [
  { id: "aurora", label: "Aurora Pay", percent: 0.039, fixed: 0.4, color: "var(--chart-1)" },
  { id: "paddle", label: "Paddle", percent: 0.05, fixed: 0.5, color: "var(--chart-2)" },
  { id: "lemonsqueezy", label: "Lemon Squeezy", percent: 0.05, fixed: 0.5, color: "var(--chart-3)" },
  { id: "gumroad", label: "Gumroad", percent: 0.1, fixed: 0, color: "var(--chart-4)" },
] as const;

export const AVERAGE_ORDER_VALUE = 50;

/* ------------------------------------------------------------------ */
/* About page                                                          */
/* ------------------------------------------------------------------ */

export const aboutStats = [
  { value: "190+", label: "countries supported" },
  { value: "$2.4B", label: "processed to date" },
  { value: "12,400", label: "developers building on it" },
  { value: "99.99%", label: "checkout uptime" },
] as const;

export const aboutPrinciples = [
  {
    title: "Own the hard part",
    body: "Tax, fraud, chargebacks and cross-border compliance are not features we bolted on. They are the product. If it is difficult, regulated or expensive, it belongs with us so it does not belong with you.",
  },
  {
    title: "Ship before you sell",
    body: "Everything in the dashboard is API and CLI first. An agent should be able to create a product, open a checkout and wire a webhook before a human has clicked publish.",
  },
  {
    title: "Transparent by default",
    body: "One rate on every successful sale. No monthly fees, no setup fees, no tier that hides the number you actually care about. If it costs money, it is on the page.",
  },
  {
    title: "Boring on purpose",
    body: "Money movement should be predictable and dull. We optimise for the boring parts working every time, not for the exciting part working most of the time.",
  },
] as const;

export const aboutTimeline = [
  {
    year: "2023",
    title: "Founded in Tallinn",
    body: "Three engineers and one stubborn idea: that charging for software should not require becoming a payments company first.",
  },
  {
    year: "2024",
    title: "Merchant of record, live in 40 countries",
    body: "We became the legal seller on every transaction and handled the tax, invoicing and chargeback work end to end.",
  },
  {
    year: "2025",
    title: "One flat rate, no monthly fees",
    body: "We dropped subscription pricing entirely. One rate on every successful sale, the same for one-time purchases and subscriptions.",
  },
  {
    year: "2026",
    title: "Agents get a seat at the table",
    body: "The MCP server, CLI and skills shipped, so an agent can run a store rather than just read about one.",
  },
] as const;

export const aboutTeam = [
  { name: "Ines Kask", role: "Co-founder & CEO", since: "2023" },
  { name: "Ravi Menon", role: "Co-founder & CTO", since: "2023" },
  { name: "Sofia Lindqvist", role: "Head of Compliance", since: "2024" },
  { name: "Marcus Bell", role: "Head of Product", since: "2024" },
  { name: "Aisha Okafor", role: "Head of Risk", since: "2025" },
  { name: "Tomas Havel", role: "Head of Developer Experience", since: "2025" },
] as const;

export const aboutIntegrations = [
  { label: "MCP clients", items: ["Claude Code", "Cursor", "Claude Desktop", "VS Code"] },
  { label: "SDKs", items: ["TypeScript", "Python", "Go", "Ruby"] },
  { label: "Rails", items: ["Stripe Connect", "Slack", "GitHub Apps", "Webhooks"] },
] as const;
