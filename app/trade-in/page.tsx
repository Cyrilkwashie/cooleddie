import type { Metadata } from "next";
import { TradeInCta } from "@/components/trade-in/trade-in-cta";
import { TradeInHero } from "@/components/trade-in/trade-in-hero";
import { TradeInSteps } from "@/components/trade-in/trade-in-steps";
import { TradeInTool } from "@/components/trade-in/trade-in-tool";
import { TradeInWhy } from "@/components/trade-in/trade-in-why";

export const metadata: Metadata = {
  title: "Sell / Trade-in",
  description:
    "Upgrade smarter. Give tech a second life. Get an instant estimate and free pickup across Ghana.",
};

export default function TradeInPage() {
  return (
    <>
      <TradeInHero />
      <TradeInTool />
      <TradeInSteps />
      <TradeInWhy />
      <TradeInCta />
    </>
  );
}
