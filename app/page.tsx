import { BestSellers } from "@/components/home/best-sellers";
import { CategoryCircles } from "@/components/home/category-circles";
import { FeaturedBento } from "@/components/home/featured-bento";
import { Hero } from "@/components/home/hero";
import { Newsletter } from "@/components/home/newsletter";
import { ServiceHighlights } from "@/components/home/service-highlights";
import { TradeInBanner } from "@/components/home/trade-in-banner";
import { WhyChoose } from "@/components/home/why-choose";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryCircles />
      <FeaturedBento />
      <ServiceHighlights />
      <BestSellers />
      <TradeInBanner />
      <WhyChoose />
      <Newsletter />
    </>
  );
}
