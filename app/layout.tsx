import type { Metadata } from "next";
import { Caveat, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Cooleddie — Quality Tech. Better Prices. Always.",
    template: "%s · Cooleddie",
  },
  description:
    "Ghana’s store for brand-new and pre-owned iPhones, MacBooks, PS5s, Apple gadgets, and accessories. Prices in GHS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GH"
      className={`${inter.variable} ${jakarta.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-cd-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
