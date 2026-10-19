import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../public/fonts/GeistSans.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  fallback: ["Arial"],
  adjustFontFallback: "Arial",
});

const geistMono = localFont({
  src: "../public/fonts/GeistMono.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  fallback: ["monospace"],
  adjustFontFallback: "Arial",
});

const gasoek = localFont({
  src: "../public/fonts/gasoekOne.woff2",
  variable: "--font-gasoek",
  weight: "400",
  display: "swap",
  fallback: ["Arial"],
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  title: "Aurora Pay — Build with AI. Sell with Aurora.",
  description:
    "Aurora Pay is the money platform for the AI era. Sell software and digital products globally, with payments, taxes, payouts, affiliates, usage billing, conversion attribution and analytics handled for you.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Aurora Pay — Build with AI. Sell with Aurora.",
    description:
      "The all-in-one platform for software companies. Payments, taxes, affiliates, and revenue splits — all handled for you.",
    type: "website",
  },
};

/* Applies the stored theme before first paint to avoid a flash.
   `?theme=light` / `?theme=dark` overrides for QA and screenshots. */
const themeScript = `(function(){try{var q=new URLSearchParams(location.search).get("theme");var d=q?q==="dark":(localStorage.getItem("theme")?localStorage.getItem("theme")==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gasoek.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
