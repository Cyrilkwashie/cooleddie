"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { photoClass } from "@/lib/assets";
import { formatGhc, type ShopBadge, type ShopProduct } from "@/lib/shop";
import { IconCart, IconHeart, IconStar } from "@/components/ui/icons";

const badgeTone: Record<ShopBadge, string> = {
  Bestseller: "bg-[#dcfce7] text-[#15803d]",
  New: "bg-[#dbeafe] text-[#1d4ed8]",
  Sale: "bg-[#fee2e2] text-[#dc2626]",
  Popular: "bg-[#ede9fe] text-[#6d28d9]",
  Used: "bg-[#f3efe6] text-[#92400e]",
};

export function ShopProductCard({ product }: { product: ShopProduct }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="flex flex-col rounded-[18px] border border-[#ececee] bg-white p-3.5">
      <div className="relative mb-3 flex h-[168px] items-center justify-center overflow-hidden">
        {product.badge ? (
          <span
            className={`absolute left-0 top-0 z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold ${badgeTone[product.badge]}`}
          >
            {product.badge}
          </span>
        ) : null}
        <button
          type="button"
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => setSaved((v) => !v)}
          className={`absolute right-0 top-0 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full ${
            saved ? "text-[#f43f5e]" : "text-[#9aa0a8] hover:text-cd-ink"
          }`}
        >
          <IconHeart size={18} />
        </button>
        <Link href={product.href} className="flex h-full w-full items-center justify-center overflow-hidden rounded-[12px]">
          <Image
            src={product.image}
            alt={product.imageAlt}
            width={220}
            height={220}
            className={photoClass(
              product.image,
              "h-full w-full object-cover",
              "max-h-[148px] w-auto object-contain",
            )}
          />
        </Link>
      </div>
      <Link href={product.href} className="text-[14.5px] font-semibold tracking-tight text-cd-ink">
        {product.name}
      </Link>
      <p className="mt-1 text-[12px] text-cd-subtle">{product.specs}</p>
      <p className="mt-2 text-[16px] font-semibold text-cd-ink">
        {product.compareAt ? (
          <>
            <span className="text-cd-red">{formatGhc(product.price)}</span>{" "}
            <span className="text-[13px] font-normal text-[#9aa0a8] line-through">
              {formatGhc(product.compareAt)}
            </span>
          </>
        ) : (
          formatGhc(product.price)
        )}
      </p>
      <div className="mt-1.5 flex items-center gap-1 text-cd-star">
        <IconStar size={13} />
        <span className="text-[12px] font-medium text-cd-ink">
          {product.rating.toFixed(1)}
        </span>
        <span className="text-[12px] text-cd-subtle">({product.reviews})</span>
      </div>
      <Link
        href={product.cta === "Choose Options" ? product.href : "/cart"}
        className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[10px] bg-cd-ink text-[13px] font-medium text-white hover:bg-black"
      >
        <IconCart size={15} />
        {product.cta ?? "Add to Cart"}
      </Link>
    </article>
  );
}
