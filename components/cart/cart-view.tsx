"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  FREE_DELIVERY_THRESHOLD,
  cartRelated,
  initialCartLines,
  type CartLine,
} from "@/lib/cart";
import { formatGhc } from "@/lib/shop";
import { CartRelated } from "@/components/cart/cart-related";
import { CartTradeIn } from "@/components/cart/cart-trade-in";
import {
  PayApple,
  PayMastercard,
  PayMtn,
  PayTelecel,
  PayVisa,
} from "@/components/ui/payment-marks";
import {
  IconArrowLeft,
  IconBadge,
  IconChevron,
  IconClose,
  IconHeart,
  IconInfo,
  IconLock,
  IconMinus,
  IconPlus,
  IconRefresh,
  IconTruck,
} from "@/components/ui/icons";

export function CartView() {
  const [lines, setLines] = useState<CartLine[]>(initialCartLines);
  const [saved, setSaved] = useState<string[]>([]);
  const [promoOpen, setPromoOpen] = useState(false);
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const itemCount = lines.reduce((n, line) => n + line.qty, 0);
  const subtotal = lines.reduce((n, line) => n + line.price * line.qty, 0);
  const delivery = subtotal >= FREE_DELIVERY_THRESHOLD || subtotal === 0 ? 0 : 40;
  const tax = 0;
  const total = subtotal + delivery + tax;

  const summary = useMemo(
    () => ({ itemCount, subtotal, delivery, tax, total }),
    [itemCount, subtotal, delivery, tax, total],
  );

  function setQty(id: string, qty: number) {
    setLines((prev) =>
      prev.map((line) => (line.id === id ? { ...line, qty: Math.max(1, qty) } : line)),
    );
  }

  function removeLine(id: string) {
    setLines((prev) => prev.filter((line) => line.id !== id));
  }

  function saveForLater(id: string) {
    setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  return (
    <>
      <section className="container-cd pt-8 md:pt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9aa0a8]">
              Your Cart
            </p>
            <h1 className="mt-2 font-display text-[36px] font-semibold tracking-[-0.04em] text-cd-ink md:text-[44px]">
              Your Cart
            </h1>
            <p className="mt-2 text-[14px] text-[#6b7280]">
              Review your items and proceed to checkout.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex h-11 items-center justify-center gap-2 self-start rounded-full border border-[#e4e4e7] px-5 text-[14px] font-medium text-cd-ink hover:border-cd-ink"
          >
            <IconArrowLeft size={16} />
            Continue Shopping
          </Link>
        </div>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
          <div>
            <div className="hidden grid-cols-[minmax(0,1fr)_110px_140px_110px] gap-3 border-b border-[#f0f1f3] pb-3 text-[12px] font-medium uppercase tracking-[0.06em] text-[#9aa0a8] md:grid">
              <span>Product</span>
              <span>Price</span>
              <span className="text-center">Quantity</span>
              <span className="text-right">Total</span>
            </div>

            {lines.length === 0 ? (
              <p className="py-12 text-[14px] text-[#6b7280]">Your cart is empty.</p>
            ) : (
              <ul>
                {lines.map((line) => (
                  <li
                    key={line.id}
                    className="grid items-center gap-4 border-b border-[#f0f1f3] py-6 md:grid-cols-[minmax(0,1fr)_110px_140px_110px]"
                  >
                    <div className="flex items-start gap-4">
                      <Link
                        href={line.href}
                        className="flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-[#f7f8fa]"
                      >
                        <Image
                          src={line.image}
                          alt={line.imageAlt}
                          width={72}
                          height={72}
                          className="max-h-[58px] w-auto object-contain"
                        />
                      </Link>
                      <div className="min-w-0">
                        <Link
                          href={line.href}
                          className="text-[15px] font-semibold tracking-tight text-cd-ink hover:opacity-70"
                        >
                          {line.name}
                        </Link>
                        <p className="mt-1 text-[12.5px] text-[#8b909a]">{line.specs}</p>
                        <p className="mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#16a34a]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
                          In Stock
                        </p>
                        <div className="mt-2.5 flex items-center gap-4 text-[12.5px] text-[#6b7280]">
                          <button
                            type="button"
                            onClick={() => removeLine(line.id)}
                            className="inline-flex items-center gap-1 hover:text-cd-ink"
                          >
                            <IconClose size={12} />
                            Remove
                          </button>
                          <button
                            type="button"
                            onClick={() => saveForLater(line.id)}
                            className={`inline-flex items-center gap-1 hover:text-cd-ink ${
                              saved.includes(line.id) ? "text-[#e11d48]" : ""
                            }`}
                          >
                            <IconHeart size={13} />
                            Save for Later
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-[14px] font-medium text-cd-ink">
                      <span className="mr-2 text-[12px] text-[#9aa0a8] md:hidden">Price</span>
                      {formatGhc(line.price)}
                    </p>

                    <div className="inline-flex h-10 items-center justify-center rounded-full border border-[#e4e4e7]">
                      <button
                        type="button"
                        aria-label={`Decrease ${line.name} quantity`}
                        onClick={() => setQty(line.id, line.qty - 1)}
                        className="inline-flex h-10 w-10 items-center justify-center text-[#6b7280] hover:text-cd-ink"
                      >
                        <IconMinus size={14} />
                      </button>
                      <span className="min-w-4 text-center text-[13.5px] font-medium">
                        {line.qty}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase ${line.name} quantity`}
                        onClick={() => setQty(line.id, line.qty + 1)}
                        className="inline-flex h-10 w-10 items-center justify-center text-[#6b7280] hover:text-cd-ink"
                      >
                        <IconPlus size={14} />
                      </button>
                    </div>

                    <p className="text-right text-[14px] font-semibold text-cd-ink">
                      {formatGhc(line.price * line.qty)}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            <CartRelated products={cartRelated} />
          </div>

          <aside className="lg:sticky lg:top-6">
            <div className="rounded-[20px] border border-[#ececee] bg-white p-5 md:p-6">
              <h2 className="font-display text-[20px] font-semibold tracking-[-0.03em] text-cd-ink">
                Order Summary
              </h2>
              <dl className="mt-5 space-y-3 text-[13.5px]">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#6b7280]">Subtotal ({summary.itemCount} items)</dt>
                  <dd className="font-medium text-cd-ink">{formatGhc(summary.subtotal)}</dd>
                </div>
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="inline-flex items-center gap-1 text-[#6b7280]">
                      Delivery
                      <IconInfo size={13} className="text-[#9aa0a8]" />
                    </dt>
                    <dd className="font-medium text-cd-ink">{formatGhc(summary.delivery)}</dd>
                  </div>
                  <p className="mt-1 text-[12px] text-[#9aa0a8]">
                    Free delivery on orders over GHC{FREE_DELIVERY_THRESHOLD}
                  </p>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-[#6b7280]">Estimated Tax</dt>
                  <dd className="font-medium text-cd-ink">{formatGhc(summary.tax)}</dd>
                </div>
              </dl>
              <div className="mt-4 flex items-center justify-between border-t border-[#f0f1f3] pt-4">
                <p className="text-[15px] font-semibold text-cd-ink">Total</p>
                <p className="font-display text-[22px] font-semibold tracking-[-0.03em] text-cd-ink">
                  {formatGhc(summary.total)}
                </p>
              </div>
              <Link
                href="/checkout"
                className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-cd-blue text-[14px] font-semibold text-white hover:bg-cd-blue-deep"
              >
                <IconLock size={15} />
                Proceed to Checkout
              </Link>

              <p className="mt-5 text-[12px] text-[#8b909a]">We accept</p>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                <PayVisa />
                <PayMastercard />
                <PayMtn />
                <PayTelecel />
                <PayApple />
              </div>

              <div className="mt-4 rounded-[14px] border border-[#ececee]">
                <button
                  type="button"
                  onClick={() => setPromoOpen((v) => !v)}
                  className="flex h-12 w-full items-center justify-between px-4 text-left text-[13.5px] text-cd-ink"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#d4d5d8] text-[11px] text-[#6b7280]">
                      %
                    </span>
                    Have a promo code?
                  </span>
                  <IconChevron
                    size={16}
                    className={`text-[#9aa0a8] transition-transform ${promoOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {promoOpen ? (
                  <form
                    className="flex gap-2 border-t border-[#ececee] p-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (promo.trim()) setPromoApplied(true);
                    }}
                  >
                    <input
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      placeholder="Enter code"
                      className="h-10 min-w-0 flex-1 rounded-full bg-[#f3f4f6] px-4 text-[13px] outline-none"
                    />
                    <button
                      type="submit"
                      className="h-10 rounded-full bg-cd-ink px-4 text-[13px] font-medium text-white"
                    >
                      Apply
                    </button>
                  </form>
                ) : null}
                {promoApplied ? (
                  <p className="px-4 pb-3 text-[12px] text-[#16a34a]">Promo code applied.</p>
                ) : null}
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-[14px] border border-[#c7d7ff] bg-[#f4f7ff] px-4 py-3">
                <IconBadge size={18} className="mt-0.5 shrink-0 text-cd-blue" />
                <div>
                  <p className="text-[13.5px] font-semibold text-cd-ink">Secure Checkout</p>
                  <p className="mt-0.5 text-[12px] leading-5 text-[#6b7280]">
                    Your information is encrypted and secure.
                  </p>
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <IconTruck size={20} className="mt-0.5 shrink-0 text-[#6b7280]" />
                <div>
                  <p className="text-[13.5px] font-semibold text-cd-ink">Free Delivery</p>
                  <p className="text-[12.5px] text-[#8b909a]">on orders over GHC{FREE_DELIVERY_THRESHOLD}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconRefresh size={20} className="mt-0.5 shrink-0 text-[#6b7280]" />
                <div>
                  <p className="text-[13.5px] font-semibold text-cd-ink">Easy Returns</p>
                  <p className="text-[12.5px] text-[#8b909a]">Hassle-free within 14 days</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconBadge size={20} className="mt-0.5 shrink-0 text-[#6b7280]" />
                <div>
                  <p className="text-[13.5px] font-semibold text-cd-ink">100% Authentic</p>
                  <p className="text-[12.5px] text-[#8b909a]">Genuine products, always</p>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </section>
      <CartTradeIn />
    </>
  );
}
