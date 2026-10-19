# Aurora Pay

A Next.js 15 marketing site scaffold built to match the structure, layout
system and design language of <https://www.creem.io/>.

Generated with [REA](https://github.com/morluto/rea) against the live site. The
full build brief lives in `../creem-rebuild-prompt.md`.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run typecheck    # tsc --noEmit
```

Requires Node 20.9+ (developed against Node 24).

## What's here

| Route | Status |
| --- | --- |
| `/` | Full marketing homepage — 16 sections |
| `/pricing` | Full pricing page with a live fee calculator |
| `/cases`, `/blog`, `/sign-in`, `/about`, `/careers`, `/contact`, `/book-a-call`, `/payment-fee-calculator` | Placeholder (one `<h1>`, shared header/footer) |
| `/comparisons/[stripe\|lemon-squeezy\|paddle\|gumroad\|whop]` | Placeholder |

## Stack

- **Next.js 15** App Router, React 19, TypeScript strict
- **Tailwind CSS v4** — CSS-first config. All tokens live in
  `app/globals.css` under `@theme`. There is no `tailwind.config.js`.
- **shadcn/ui** conventions (`data-slot`, semantic CSS variables) on **Radix UI**
  primitives. Only `button` and `accordion` are vendored in `components/ui/`.
  Add more with `npx shadcn@latest add <name>`.
- **lucide-react** icons
- Fonts self-hosted via `next/font/local` from `public/fonts/`

## Design tokens

Colors are **OKLCH**, taken verbatim from the reference stylesheets. Semantic
tokens (`--background`, `--card`, `--border`, `--accent`, `--chart-*`) are
defined for light in `:root` and dark in `.dark`, then re-exported into
Tailwind via `@theme inline`.

Three neutral ramps: `gray-*` (light surfaces), `charcoal-*` (dark surfaces),
plus accents `peach`, `green`, `blue`, `violet`, `amber`, `red`.

### Typography

| Role | Font | Use |
| --- | --- | --- |
| Display | `gasoekOne` | Hero H1 and big statement headings only. Always uppercase, `font-weight: 400`, tight tracking, line-height ~0.95. **This is the strongest brand signal — do not substitute.** |
| Body | `GeistSans` | Everything else |
| Mono | `GeistMono` | Code blocks, prices, metrics, terminal mockups |

The `.font-display` utility applies the display treatment.

### Theme toggle

A tiny inline script in `app/layout.tsx` applies the stored theme before first
paint (no flash). `components/theme-toggle.tsx` toggles `.dark` on `<html>`
and persists to `localStorage`.

## Content

All copy, figures and testimonials live in `lib/mock-data.ts` — edit there,
not in the components. The brand is **Aurora Pay**, a fictional developer
payments platform. Copy is deliberately original rather than lifted from the
reference site.

## Structure

```
app/
  layout.tsx              fonts, metadata, theme script
  globals.css             design tokens + base layer
  page.tsx                home
  pricing/page.tsx        pricing
  [slug]/page.tsx         placeholder pages
  comparisons/[slug]/     comparison placeholders
components/
  mockups.tsx             every UI mockup (terminal, checkout, dashboard, …)
  sections.tsx            every homepage section
  site-header.tsx         sticky nav + mobile drawer
  site-footer.tsx         four link columns
  fee-calculator.tsx      client component, fee math
  provider-comparison-chart.tsx   SVG bar chart, no chart dependency
  theme-toggle.tsx
  ui/button.tsx           cva variants
  ui/accordion.tsx        Radix wrapper
lib/
  mock-data.ts            all content
  utils.ts                cn()
public/fonts/             GeistSans, GeistMono, gasoekOne (woff2)
```

## Known gaps

- **No backend.** Every figure is static mock data.
- **The fee calculator** compares four providers with hardcoded rates. The
  reference site's advanced calculator compares nine-plus providers with FX and
  international surcharge modelling — not implemented here.
- **Charts are hand-rolled SVG**, not a charting library, to keep the
  dependency list short.
- **Placeholders** for cases, blog, comparison and company pages.
- **Legal pages** (`/privacy`, `/terms`, `/buyer-terms`, `/dpa`) are linked but
  not routed yet.

## Licensing note

`public/fonts/gasoekOne.woff2` was pulled from the reference site's public
static assets for local development. **gasoekOne is a commercially licensed
face** — verify its license before shipping this publicly, or swap it for a
similar open alternative. Geist Sans and Geist Mono are open source (SIL OFL).

All code and copy in this scaffold is original. The design tokens, layout
structure and section rhythm are derived from observation of a public
marketing site.
