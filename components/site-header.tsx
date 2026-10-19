"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Aurora Pay home">
      <svg viewBox="0 0 10 10" className="size-3 fill-current" aria-hidden>
        <path d="M0 0h10L5 10z" />
      </svg>
      <span className="text-base font-bold uppercase tracking-tight text-foreground">
        Aurora
      </span>
    </Link>
  );
}

function NavDropdown({
  label,
  items,
}: {
  label: string;
  items: readonly { label: string; href: string }[];
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground">
        {label}
        <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 w-56 pt-2 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
        <div className="rounded-xl border border-[var(--border)] bg-card p-1.5 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
        <Wordmark />

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          <NavDropdown label="Product" items={nav.product} />
          <NavDropdown label="Developers" items={nav.developers} />
          <Link href="/pricing" className="text-sm text-foreground/80 hover:text-foreground">
            Pricing
          </Link>
          <Link href="/cases" className="text-sm text-foreground/80 hover:text-foreground">
            Customers
          </Link>
          <Link href="/blog" className="text-sm text-foreground/80 hover:text-foreground">
            Blog
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/sign-in">Get started</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "border-t border-[var(--border)] bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto max-w-7xl space-y-1 px-6 py-4" aria-label="Mobile">
          {[...nav.product, ...nav.developers].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-2 text-sm text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-3">
            <Link href="/pricing" className="text-sm text-foreground">
              Pricing
            </Link>
            <Link href="/cases" className="text-sm text-foreground">
              Customers
            </Link>
            <Link href="/blog" className="text-sm text-foreground">
              Blog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
