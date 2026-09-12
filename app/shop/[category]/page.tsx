import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryChips } from "@/components/shop/category-chips";
import { ShopCatalog } from "@/components/shop/shop-catalog";
import { ShopHero } from "@/components/shop/shop-hero";
import { ShopNewsletter } from "@/components/shop/shop-newsletter";
import { ShopTrust } from "@/components/shop/shop-trust";
import { isShopCategory, shopCategories } from "@/lib/shop";

export function generateStaticParams() {
  return shopCategories
    .filter((c) => c.slug !== "all")
    .map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = shopCategories.find((c) => c.slug === category);
  return {
    title: cat ? cat.label : "Shop",
    description: `Shop ${cat?.label ?? "products"} at Cooleddie.`,
  };
}

export default async function ShopCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isShopCategory(category) || category === "all") notFound();

  return (
    <>
      <ShopHero />
      <CategoryChips active={category} />
      <ShopCatalog category={category} />
      <ShopTrust />
      <ShopNewsletter />
    </>
  );
}
