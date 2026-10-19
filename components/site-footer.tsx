import Link from "next/link";
import { footerColumns } from "@/lib/mock-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 10 10" className="size-3 fill-current" aria-hidden>
                <path d="M0 0h10L5 10z" />
              </svg>
              <span className="text-base font-bold uppercase tracking-tight text-foreground">
                Aurora
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The all-in-one platform for software companies. Payments, taxes,
              affiliates, and revenue splits — all handled for you.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              © 2026 Aurora Labs OÜ
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
