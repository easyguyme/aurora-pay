import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const TITLES: Record<string, string> = {
  cases: "Customers",
  blog: "Blog",
  "sign-in": "Sign in",
  "book-a-call": "Book a call",
  "payment-fee-calculator": "Fee calculator",
  careers: "Careers",
  contact: "Contact",
};

export default async function PlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = TITLES[slug];
  if (!title) notFound();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] text-foreground">
          {title}
        </h1>
        <p className="mt-4 text-muted-foreground">
          This page is a placeholder in the starter scaffold.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
