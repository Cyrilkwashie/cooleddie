"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { officialPhotos } from "@/lib/assets";
import { initialCartLines } from "@/lib/cart";
import { checkoutTotals } from "@/lib/checkout";
import { formatGhc } from "@/lib/shop";
import {
  IconBadge,
  IconHeadset,
  IconInfo,
  IconLock,
  IconRefresh,
  IconTag,
  IconTruck,
} from "@/components/ui/icons";

const totals = checkoutTotals();

export function CheckoutSummary() {
  const [promo, setPromo] = useState("");
  const [applied, setApplied] = useState(false);

  return (
    <aside className="lg:sticky lg:top-6">
      <div className="rounded-[20px] border border-[#ececee] bg-white p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] text-cd-ink">
            Order Summary{" "}
            <span className="text-[14px] font-medium text-[#8b909a]">({totals.itemCount} items)</span>
          </h2>
          <Link href="/cart" className="text-[13px] font-medium text-cd-ink hover:opacity-70">
            Edit Cart
          </Link>
        </div>

        <ul className="mt-5 divide-y divide-[#f0f1f3]">
          {initialCartLines.map((line) => (
            <li key={line.id} className="flex items-start gap-3 py-3.5 first:pt-0">
              <Link
                href={line.href}
                className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[10px] bg-[#f7f8fa]"
              >
                <Image
                  src={line.image}
                  alt={line.imageAlt}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </Link>
              <div className="min-w-0 flex-1">
                <Link href={line.href} className="block text-[13.5px] font-semibold text-cd-ink">
                  {line.name}
                </Link>
                <p className="mt-0.5 text-[12px] text-[#8b909a]">{line.specs}</p>
                <p className="text-[12px] text-[#8b909a]">Qty: {line.qty}</p>
              </div>
              <p className="text-[13.5px] font-semibold text-cd-ink">{formatGhc(line.price * line.qty)}</p>
            </li>
          ))}
        </ul>

        <form
          className="mt-2 flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (promo.trim()) setApplied(true);
          }}
        >
          <div className="relative min-w-0 flex-1">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[13px] text-[#9aa0a8]">
              %
            </span>
            <input
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              placeholder="Enter promo code"
              className="h-11 w-full rounded-full border border-[#e8e9ec] bg-white pl-8 pr-4 text-[13px] outline-none placeholder:text-[#9aa0a8] focus:border-cd-blue"
            />
          </div>
          <button
            type="submit"
            className="h-11 shrink-0 rounded-full bg-cd-ink px-5 text-[13px] font-semibold text-white hover:bg-black"
          >
            Apply
          </button>
        </form>
        {applied ? <p className="mt-2 text-[12px] text-[#16a34a]">Promo code applied.</p> : null}

        <dl className="mt-5 space-y-3 text-[13.5px]">
          <div className="flex justify-between gap-4">
            <dt className="text-[#6b7280]">Subtotal</dt>
            <dd className="font-medium text-cd-ink">{formatGhc(totals.subtotal)}</dd>
          </div>
          <div>
            <div className="flex justify-between gap-4">
              <dt className="inline-flex items-center gap-1 text-[#6b7280]">
                Delivery Fee
                <IconInfo size={13} className="text-[#9aa0a8]" />
              </dt>
              <dd className="font-medium text-cd-ink">{formatGhc(totals.delivery)}</dd>
            </div>
            <p className="mt-1 text-[12px] text-[#9aa0a8]">
              Free delivery on orders over GHC{totals.threshold}
            </p>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[#6b7280]">Estimated Tax</dt>
            <dd className="font-medium text-cd-ink">{formatGhc(totals.tax)}</dd>
          </div>
        </dl>

        <div className="mt-4 flex items-center justify-between border-t border-[#f0f1f3] pt-4">
          <p className="text-[15px] font-semibold text-cd-ink">Total</p>
          <p className="font-display text-[22px] font-semibold tracking-[-0.03em] text-cd-ink">
            {formatGhc(totals.total)}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-3 rounded-[14px] bg-[#ecfdf3] px-4 py-3.5">
        <IconTruck size={18} className="mt-0.5 shrink-0 text-[#16a34a]" />
        <div>
          <p className="text-[13.5px] font-semibold text-[#166534]">You&apos;re eligible for free delivery!</p>
          <p className="mt-0.5 text-[12.5px] leading-5 text-[#3f7a54]">
            Awesome! Your order qualifies for free delivery in Ghana.
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4">
        <Trust icon={IconLock} title="Secure Payments" body="Your information is encrypted" />
        <Trust icon={IconBadge} title="100% Authentic" body="Genuine products, always" />
        <Trust icon={IconRefresh} title="Easy Returns" body="Hassle-free within 14 days" />
        <Trust icon={IconHeadset} title="Customer Support" body="Here to help, always" />
      </div>

      <div className="relative mt-6 overflow-hidden rounded-[20px] bg-cd-black px-5 py-6 text-white">
        <p className="relative z-10 max-w-[160px] font-display text-[22px] font-semibold leading-[1.15] tracking-[-0.035em]">
          More Than
          <br />
          Devices.
          <br />
          A Better You.
        </p>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-end gap-1.5 pr-2">
          <div className="relative mb-3 h-[52px] w-[84px] overflow-hidden rounded-[8px]">
            <Image src={officialPhotos.iphones} alt="" fill className="object-cover" sizes="84px" />
          </div>
          <div className="relative mb-8 h-10 w-[64px] overflow-hidden rounded-[8px]">
            <Image src={officialPhotos.accessories} alt="" fill className="object-cover" sizes="64px" />
          </div>
          <div className="relative mb-6 h-[46px] w-[74px] overflow-hidden rounded-[8px]">
            <Image src={officialPhotos.macbooks} alt="" fill className="object-cover" sizes="74px" />
          </div>
          <div className="relative mb-2 h-[72px] w-[56px] overflow-hidden rounded-[8px]">
            <Image src={officialPhotos.ps5} alt="" fill className="object-cover" sizes="56px" />
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        <Value icon={IconBadge} title="Top Brands" body="Apple, Sony & more" />
        <Value icon={IconTag} title="Best Prices" body="New & used products" />
        <Value icon={IconTruck} title="Fast Delivery" body="Across Ghana" />
      </div>
    </aside>
  );
}

function Trust({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof IconLock;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon size={18} className="mt-0.5 shrink-0 text-[#6b7280]" />
      <div>
        <p className="text-[13px] font-semibold text-cd-ink">{title}</p>
        <p className="text-[12px] leading-4 text-[#8b909a]">{body}</p>
      </div>
    </div>
  );
}

function Value({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof IconLock;
  title: string;
  body: string;
}) {
  return (
    <div className="text-center">
      <Icon size={18} className="mx-auto text-[#6b7280]" />
      <p className="mt-1.5 text-[12.5px] font-semibold text-cd-ink">{title}</p>
      <p className="text-[11.5px] leading-4 text-[#8b909a]">{body}</p>
    </div>
  );
}
