"use client";

import Image from "next/image";
import { useState } from "react";
import { isOfficialPhoto } from "@/lib/assets";
import type { ProductDetail } from "@/lib/product";
import { IconChevron, IconExpand, IconPlay } from "@/components/ui/icons";

export function ProductGallery({ product }: { product: ProductDetail }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = product.images[active] ?? product.images[0];
  const isHero = active === 0 && Boolean(product.mainImage);
  const displaySrc = isHero ? product.mainImage : current.src;
  const displayAlt = isHero ? product.mainImageAlt : current.alt;
  const start = 0;
  const visible = product.images.slice(start, start + 5);

  return (
    <div className="flex gap-3 md:gap-4">
      <div className="flex shrink-0 flex-col items-center gap-2.5">
        {visible.map((img, i) => {
          const selected = i === active;
          return (
            <button
              key={`${img.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={img.alt}
              className={`relative flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-[12px] border bg-white ${
                selected ? "border-cd-blue" : "border-[#ececee] hover:border-[#d4d5d8]"
              }`}
            >
              <Image
                src={img.src}
                alt=""
                width={56}
                height={56}
                className={
                  isOfficialPhoto(img.src)
                    ? "h-full w-full object-cover"
                    : "max-h-[46px] w-auto object-contain"
                }
              />
              {img.kind === "video" ? (
                <span className="absolute inset-0 flex items-center justify-center bg-black/25">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-cd-ink">
                    <IconPlay size={12} />
                  </span>
                </span>
              ) : null}
            </button>
          );
        })}
        {product.images.length > 5 ? (
          <button
            type="button"
            aria-label="More images"
            className="inline-flex h-7 w-7 items-center justify-center text-[#9aa0a8]"
          >
            <IconChevron size={16} />
          </button>
        ) : (
          <span className="inline-flex h-7 w-7 items-center justify-center text-[#c5c7cb]">
            <IconChevron size={16} />
          </span>
        )}
      </div>

      <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-[8px] bg-white md:min-h-[460px]">
        <Image
          src={displaySrc}
          alt={displayAlt}
          fill
          priority
          sizes="(min-width: 1024px) 520px, 90vw"
          className={
            isOfficialPhoto(displaySrc)
              ? "object-cover"
              : "object-contain p-2 md:p-4"
          }
        />
        <button
          type="button"
          aria-label="Expand image"
          onClick={() => setOpen(true)}
          className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#ececee] bg-white text-[#6b7280] shadow-sm hover:text-cd-ink"
        >
          <IconExpand size={16} />
        </button>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setOpen(false)}
        >
          <Image
            src={displaySrc}
            alt={displayAlt}
            width={1100}
            height={900}
            className="max-h-[88vh] w-auto max-w-full object-contain"
          />
        </div>
      ) : null}
    </div>
  );
}
