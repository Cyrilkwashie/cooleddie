"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ProductDetail } from "@/lib/product";
import { formatGhc } from "@/lib/shop";
import {
  IconBadge,
  IconCart,
  IconHeart,
  IconMinus,
  IconPlus,
  IconRefresh,
  IconStar,
  IconTruck,
} from "@/components/ui/icons";

export function ProductInfo({ product }: { product: ProductDetail }) {
  const [storage, setStorage] = useState(product.storage[0]?.id ?? "");
  const [color, setColor] = useState(product.colors[0]?.id ?? "");
  const [condition, setCondition] = useState(product.conditions[0]?.id ?? "");
  const [qty, setQty] = useState(1);
  const [saved, setSaved] = useState(false);

  const selectedStorage = product.storage.find((s) => s.id === storage) ?? product.storage[0];
  const selectedColor = product.colors.find((c) => c.id === color) ?? product.colors[0];

  const sku = useMemo(() => {
    if (product.slug !== "iphone-16-pro-max") return product.sku;
    return `IP16PM-${selectedStorage?.sku ?? "256"}-${selectedColor?.sku ?? "BK"}`;
  }, [product.sku, product.slug, selectedStorage, selectedColor]);

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        {product.badge ? (
          <span className="rounded-full bg-[#dcfce7] px-2.5 py-1 text-[11px] font-semibold text-[#15803d]">
            {product.badge}
          </span>
        ) : (
          <span />
        )}
        <p className="text-[11.5px] text-[#9aa0a8]">SKU: {sku}</p>
      </div>

      <h1 className="mt-3 font-display text-[26px] font-semibold leading-[1.15] tracking-[-0.035em] text-cd-ink sm:text-[30px] md:text-[34px]">
        {product.name}
      </h1>
      <p className="mt-2 text-[14px] text-[#6b7280]">{product.tagline}</p>

      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px]">
        <span className="inline-flex items-center gap-0.5 text-cd-star">
          {Array.from({ length: 5 }).map((_, i) => (
            <IconStar key={i} size={13} />
          ))}
        </span>
        <span className="font-medium text-cd-ink">{product.rating.toFixed(1)}</span>
        <span className="text-[#8b909a]">({product.reviews} reviews)</span>
        <span className="text-[#c5c7cb]">|</span>
        <span className="text-[#8b909a]">{product.sold} sold</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <p className="font-display text-[30px] font-semibold tracking-[-0.03em] text-cd-ink md:text-[32px]">
          {formatGhc(product.price)}
        </p>
        {product.inStock ? (
          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#16a34a]">
            <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
            In Stock
          </span>
        ) : (
          <span className="text-[13px] font-medium text-cd-red">Out of Stock</span>
        )}
      </div>

      <p className="mt-3 max-w-[520px] text-[13.5px] leading-6 text-[#6b7280]">
        {product.description}
      </p>

      <div className="mt-6">
        <p className="text-[13px] font-medium text-cd-ink">
          Storage: <span className="font-normal text-[#6b7280]">{selectedStorage?.label}</span>
        </p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {product.storage.map((option) => {
            const selected = option.id === storage;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setStorage(option.id)}
                className={`h-12 min-w-[88px] rounded-full px-5 text-[14px] ${
                  selected
                    ? "bg-cd-ink font-semibold text-white"
                    : "border border-[#e4e4e7] bg-white text-[#3f4450] hover:border-cd-ink"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[13px] font-medium text-cd-ink">
          Color: <span className="font-normal text-[#6b7280]">{selectedColor?.name}</span>
        </p>
        <div className="mt-2.5 flex items-center gap-2.5">
          {product.colors.map((option) => {
            const selected = option.id === color;
            return (
              <button
                key={option.id}
                type="button"
                aria-label={option.name}
                onClick={() => setColor(option.id)}
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  selected ? "ring-1 ring-cd-ink" : ""
                }`}
              >
                <span
                  className="h-[18px] w-[18px] rounded-full border border-black/10"
                  style={{ backgroundColor: option.hex }}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-[13px] font-medium text-cd-ink">Condition:</p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {product.conditions.map((option) => {
            const selected = option.id === condition;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setCondition(option.id)}
                className={`h-12 rounded-full px-5 text-[14px] ${
                  selected
                    ? "bg-cd-ink font-semibold text-white"
                    : "border border-[#e4e4e7] bg-white text-[#3f4450] hover:border-cd-ink"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="inline-flex h-12 items-center rounded-full border border-[#e4e4e7]">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((n) => Math.max(1, n - 1))}
            className="inline-flex h-12 w-11 items-center justify-center text-[#6b7280] hover:text-cd-ink"
          >
            <IconMinus size={16} />
          </button>
          <span className="min-w-6 text-center text-[14px] font-medium">{qty}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((n) => n + 1)}
            className="inline-flex h-12 w-11 items-center justify-center text-[#6b7280] hover:text-cd-ink"
          >
            <IconPlus size={16} />
          </button>
        </div>
        <Link
          href="/cart"
          className="btn btn-blue flex-1"
        >
          <IconCart size={16} />
          Add to Cart
        </Link>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setSaved((v) => !v)}
          className={`btn ${
            saved
              ? "border border-[#fecdd3] bg-[#fff1f2] text-[#e11d48]"
              : "btn-outline"
          }`}
        >
          <IconHeart size={16} />
          Add to Wishlist
        </button>
        <Link
          href="/checkout"
          className="btn btn-primary"
        >
          Buy Now
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#f0f1f3] pt-5 sm:grid-cols-3 sm:gap-2">
        <div className="flex items-start gap-2">
          <IconTruck size={18} className="mt-0.5 shrink-0 text-[#6b7280]" />
          <div>
            <p className="text-[12.5px] font-semibold text-cd-ink">Fast Delivery</p>
            <p className="text-[11.5px] text-[#8b909a]">Across Ghana</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <IconBadge size={18} className="mt-0.5 shrink-0 text-[#6b7280]" />
          <div>
            <p className="text-[12.5px] font-semibold text-cd-ink">100% Authentic</p>
            <p className="text-[11.5px] text-[#8b909a]">Genuine products</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <IconRefresh size={18} className="mt-0.5 shrink-0 text-[#6b7280]" />
          <div>
            <p className="text-[12.5px] font-semibold text-cd-ink">Easy Returns</p>
            <p className="text-[11.5px] text-[#8b909a]">Hassle-free process</p>
          </div>
        </div>
      </div>
    </div>
  );
}
