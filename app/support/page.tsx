import type { Metadata } from "next";
import { SupportBanner } from "@/components/support/support-banner";
import { SupportContact } from "@/components/support/support-contact";
import { SupportFaq } from "@/components/support/support-faq";
import { SupportHero } from "@/components/support/support-hero";
import { SupportTopics } from "@/components/support/support-topics";

export const metadata: Metadata = {
  title: "Help & Support",
  description:
    "Real support from real people. Find help with orders, returns, warranty, trade-in, and more.",
};

export default function SupportPage() {
  return (
    <>
      <SupportHero />
      <SupportTopics />
      <section className="container-cd grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
        <SupportFaq />
        <SupportContact />
      </section>
      <SupportBanner />
    </>
  );
}
