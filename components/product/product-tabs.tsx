"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProductDetail } from "@/lib/product";
import { IconCheckCircle, IconStar } from "@/components/ui/icons";

const tabIds = [
  "overview",
  "specifications",
  "box",
  "shipping",
  "warranty",
  "reviews",
] as const;

export function ProductTabs({ product }: { product: ProductDetail }) {
  const [tab, setTab] = useState<(typeof tabIds)[number]>("overview");

  const tabs: { id: (typeof tabIds)[number]; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "specifications", label: "Specifications" },
    { id: "box", label: "What's in the Box" },
    { id: "shipping", label: "Shipping & Delivery" },
    { id: "warranty", label: "Warranty & Returns" },
    { id: "reviews", label: `Reviews (${product.reviews})` },
  ];

  return (
    <section className="container-cd py-8 md:py-10">
      <div className="flex gap-6 overflow-x-auto border-b border-[#f0f1f3] text-[14px]">
        {tabs.map((item) => {
          const active = item.id === tab;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`relative shrink-0 pb-3 ${
                active ? "font-semibold text-cd-blue" : "text-[#6b7280] hover:text-cd-ink"
              }`}
            >
              {item.label}
              {active ? (
                <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-cd-blue" />
              ) : null}
            </button>
          );
        })}
      </div>

      {tab === "overview" ? (
        <div className="grid items-center gap-8 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <h2 className="font-display text-[24px] font-semibold tracking-[-0.03em] text-cd-ink">
              Product Overview
            </h2>
            <p className="mt-3 text-[14px] leading-7 text-[#5c616a]">{product.overview}</p>
            <ul className="mt-5 space-y-2.5">
              {product.overviewPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[14px] text-[#3f4450]">
                  <IconCheckCircle size={18} className="mt-0.5 shrink-0 text-[#16a34a]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-[22px] bg-black text-white md:min-h-[340px]">
            <Image
              src={product.bannerImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
            <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between p-7 md:min-h-[340px] md:p-9">
              <p className="max-w-[220px] font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.035em] md:text-[32px]">
                {product.bannerTitle}
              </p>
              <p className="text-[13px] text-[#d5d6d8]">{product.bannerCaption}</p>
            </div>
          </div>
        </div>
      ) : null}

      {tab === "specifications" ? (
        <dl className="divide-y divide-[#f0f1f3] py-8">
          {product.specifications.map((row) => (
            <div key={row.label} className="grid grid-cols-[160px_1fr] gap-4 py-3 text-[14px] md:grid-cols-[220px_1fr]">
              <dt className="font-medium text-cd-ink">{row.label}</dt>
              <dd className="text-[#5c616a]">{row.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      {tab === "box" ? (
        <ul className="space-y-2 py-8 text-[14px] text-[#3f4450]">
          {product.boxContents.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <IconCheckCircle size={18} className="text-[#16a34a]" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      {tab === "shipping" ? (
        <ul className="space-y-2 py-8 text-[14px] leading-7 text-[#5c616a]">
          {product.shipping.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {tab === "warranty" ? (
        <ul className="space-y-2 py-8 text-[14px] leading-7 text-[#5c616a]">
          {product.warranty.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {tab === "reviews" ? (
        <div className="py-8">
          <div className="flex items-center gap-3">
            <p className="font-display text-[36px] font-semibold tracking-[-0.04em]">{product.rating.toFixed(1)}</p>
            <div>
              <div className="flex text-cd-star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} size={14} />
                ))}
              </div>
              <p className="mt-1 text-[13px] text-[#8b909a]">Based on {product.reviews} reviews</p>
            </div>
          </div>
          <p className="mt-5 text-[14px] text-[#5c616a]">
            Customers love the {product.name} for build quality, battery life, and how quickly Cooleddie delivers in Ghana.
          </p>
        </div>
      ) : null}
    </section>
  );
}
