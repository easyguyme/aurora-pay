import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const PROVIDERS: Record<string, string> = {
  stripe: "Stripe",
  "lemon-squeezy": "Lemon Squeezy",
  paddle: "Paddle",
  gumroad: "Gumroad",
  whop: "Whop",
};

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = PROVIDERS[slug];
  if (!name) notFound();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-[clamp(2rem,6vw,4rem)] text-foreground">
          Aurora Pay vs {name}
        </h1>
        <p className="mt-4 text-muted-foreground">
          This comparison page is a placeholder in the starter scaffold.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
