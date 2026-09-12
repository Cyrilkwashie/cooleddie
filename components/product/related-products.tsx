"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { photoClass } from "@/lib/assets";
import type { RelatedProduct } from "@/lib/product";
import { formatGhc } from "@/lib/shop";
import { IconChevronLeft, IconChevronRight, IconStar } from "@/components/ui/icons";

export function RelatedProducts({ products }: { products: RelatedProduct[] }) {
  const scroller = useRef<HTMLDivElement>(null);

  function scroll(dir: -1 | 1) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.7, 320), behavior: "smooth" });
  }

  return (
    <section className="container-cd pb-12 md:pb-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="font-display text-[24px] font-semibold tracking-[-0.03em] text-cd-ink md:text-[28px]">
          You Might Also Like
        </h2>
        <Link href="/shop" className="text-[13.5px] font-medium text-cd-ink hover:opacity-70">
          View all
        </Link>
      </div>

      <div className="relative">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scroll(-1)}
          className="absolute -left-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ececee] bg-white shadow-sm hover:border-cd-ink md:inline-flex lg:-left-5"
        >
          <IconChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scroll(1)}
          className="absolute -right-3 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#ececee] bg-white shadow-sm hover:border-cd-ink md:inline-flex lg:-right-5"
        >
          <IconChevronRight size={18} />
        </button>

        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <article
              key={product.id}
              className="w-[220px] shrink-0 snap-start"
            >
              <Link
                href={product.href}
                className="mb-3 flex h-[168px] items-center justify-center overflow-hidden rounded-[14px]"
              >
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={200}
                  height={200}
                  className={photoClass(
                    product.image,
                    "h-full w-full object-cover",
                    "max-h-[148px] w-auto object-contain",
                  )}
                />
              </Link>
              <Link href={product.href} className="block text-[14px] font-medium text-cd-ink">
                {product.name}
              </Link>
              <p className="mt-1 text-[14px] font-semibold text-cd-ink">{formatGhc(product.price)}</p>
              <div className="mt-1 flex items-center gap-1 text-cd-star">
                <IconStar size={12} />
                <span className="text-[12px] font-medium text-cd-ink">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-[12px] text-[#8b909a]">({product.reviews})</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
