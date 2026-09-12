import type { Metadata } from "next";
import { CategoryChips } from "@/components/shop/category-chips";
import { ShopCatalog } from "@/components/shop/shop-catalog";
import { ShopHero } from "@/components/shop/shop-hero";
import { ShopNewsletter } from "@/components/shop/shop-newsletter";
import { ShopTrust } from "@/components/shop/shop-trust";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Browse new and used iPhones, MacBooks, PS5s, Apple gadgets, and accessories at Cooleddie. Prices in GHC.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <>
      <ShopHero />
      <CategoryChips active="all" />
      <ShopCatalog category="all" query={q ?? ""} />
      <ShopTrust />
      <ShopNewsletter />
    </>
  );
}
