import Link from "next/link";
import { bestSellers } from "@/lib/data";
import { ProductCard } from "@/components/ui/product-card";
import { IconArrow } from "@/components/ui/icons";

export function BestSellers() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container-cd">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9aa0a8]">
              Popular Products
            </p>
            <h2 className="mt-2 font-display text-[32px] font-semibold tracking-[-0.035em] text-cd-ink md:text-[40px]">
              Best Sellers
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-1 text-[14px] font-medium text-cd-ink hover:opacity-70 sm:inline-flex"
          >
            View All Products <IconArrow size={15} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Link href="/shop" className="text-[14px] font-medium">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
