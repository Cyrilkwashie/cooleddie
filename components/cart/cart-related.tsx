"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ShopProduct } from "@/lib/shop";
import { formatGhc } from "@/lib/shop";
import { IconCart, IconHeart, IconStar } from "@/components/ui/icons";

export function CartRelated({ products }: { products: ShopProduct[] }) {
  const [saved, setSaved] = useState<string[]>([]);

  return (
    <section className="pt-10 md:pt-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-[24px] font-semibold tracking-[-0.03em] text-cd-ink md:text-[28px]">
            You Might Also Like
          </h2>
          <p className="mt-1 text-[13.5px] text-[#8b909a]">
            Other customers also added these products.
          </p>
        </div>
        <Link href="/shop" className="shrink-0 text-[13.5px] font-medium text-cd-ink hover:opacity-70">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {products.map((product) => {
          const liked = saved.includes(product.id);
          return (
            <article key={product.id} className="flex flex-col">
              <div className="relative mb-3 h-[140px] overflow-hidden rounded-[12px] bg-[#f4f5f7]">
                <button
                  type="button"
                  aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
                  onClick={() =>
                    setSaved((prev) =>
                      prev.includes(product.id)
                        ? prev.filter((id) => id !== product.id)
                        : [...prev, product.id],
                    )
                  }
                  className={`absolute right-1.5 top-1.5 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 ${
                    liked ? "text-[#f43f5e]" : "text-[#9aa0a8] hover:text-cd-ink"
                  }`}
                >
                  <IconHeart size={18} />
                </button>
                <Link href={product.href} className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </Link>
              </div>
              <Link href={product.href} className="text-[13.5px] font-semibold tracking-tight text-cd-ink">
                {product.name}
              </Link>
              <p className="mt-1 text-[12px] text-cd-subtle">{product.specs}</p>
              <p className="mt-1.5 text-[15px] font-semibold text-cd-ink">{formatGhc(product.price)}</p>
              <div className="mt-1 flex items-center gap-1 text-cd-star">
                <IconStar size={12} />
                <span className="text-[12px] font-medium text-cd-ink">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-[12px] text-cd-subtle">({product.reviews})</span>
              </div>
              <Link
                href="/cart"
                className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 rounded-[10px] bg-cd-ink text-[13px] font-medium text-white hover:bg-black"
              >
                <IconCart size={15} />
                Add to Cart
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
