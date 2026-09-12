"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import { checkoutReview, checkoutSteps, checkoutTotals, ghanaRegions } from "@/lib/checkout";
import { formatGhc } from "@/lib/shop";
import { CheckoutSummary } from "@/components/checkout/checkout-summary";
import { PayAmex, PayMastercard, PayVisa } from "@/components/ui/payment-marks";
import {
  GhanaFlag,
  IconBank,
  IconCard,
  IconChevron,
  IconLock,
  IconMobile,
} from "@/components/ui/icons";

const fieldClass =
  "h-12 w-full rounded-[12px] border border-[#e8e9ec] bg-white px-4 text-[14px] text-cd-ink outline-none placeholder:text-[#b0b3b8] focus:border-cd-blue focus:ring-2 focus:ring-cd-blue/15";
const labelClass = "mb-1.5 block text-[13px] font-medium text-cd-ink";

type PayMethod = "card" | "momo" | "bank";

export function CheckoutView() {
  const [region, setRegion] = useState("");
  const [pay, setPay] = useState<PayMethod>("card");
  const [placed, setPlaced] = useState(false);
  const totals = checkoutTotals();
  const cities = useMemo(
    () => ghanaRegions.find((r) => r.id === region)?.cities ?? [],
    [region],
  );

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="container-cd pb-14 pt-8 md:pt-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9aa0a8]">
            Checkout
          </p>
          <h1 className="mt-2 font-display text-[28px] font-semibold tracking-[-0.04em] text-cd-ink sm:text-[36px] md:text-[44px]">
            Complete Your Order
          </h1>
          <p className="mt-2 text-[14px] text-[#6b7280]">
            Secure checkout. Fast delivery. Happy tech life.
          </p>
        </div>
        <ol className="flex w-full max-w-full items-start gap-0 lg:max-w-[420px]">
          {checkoutSteps.map((step, i) => {
            const active = step.id === 1;
            return (
              <li key={step.id} className="flex flex-1 items-start">
                <div className="flex min-w-0 flex-col items-center text-center">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-semibold ${
                      active
                        ? "bg-cd-blue text-white"
                        : "border border-[#e4e4e7] bg-white text-[#8b909a]"
                    }`}
                  >
                    {step.id}
                  </span>
                  <span
                      className={`mt-2 max-w-[90px] text-[11px] leading-4 sm:max-w-[110px] sm:text-[12.5px] ${
                      active ? "font-medium text-cd-ink" : "text-[#8b909a]"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < checkoutSteps.length - 1 ? (
                  <span className="mt-5 h-px min-w-2 flex-1 bg-[#e8e9ec]" />
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_380px] lg:gap-10">
        <div className="space-y-5">
          <article id="shipping" className="rounded-[20px] border border-[#ececee] bg-white p-5 md:p-6">
            <Header n={1} title="Shipping Information" sub="Where should we deliver your order?" />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" required>
                <input className={fieldClass} placeholder="Enter your full name" autoComplete="name" />
              </Field>
              <Field label="Phone Number" required>
                <div className="flex overflow-hidden rounded-[12px] border border-[#e8e9ec] focus-within:border-cd-blue focus-within:ring-2 focus-within:ring-cd-blue/15">
                  <span className="inline-flex items-center gap-1.5 border-r border-[#e8e9ec] bg-[#fafafa] px-3 text-[13px] text-cd-ink">
                    <GhanaFlag className="h-3 w-[16px] rounded-[1px]" />
                    +233
                    <IconChevron size={12} className="text-[#9aa0a8]" />
                  </span>
                  <input
                    className="h-12 min-w-0 flex-1 px-3 text-[14px] outline-none placeholder:text-[#b0b3b8]"
                    placeholder="Enter your phone number"
                    inputMode="tel"
                    autoComplete="tel"
                  />
                </div>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Email Address" required>
                  <input
                    type="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Delivery Address" required>
                  <input
                    className={fieldClass}
                    placeholder="House number, street name"
                    autoComplete="street-address"
                  />
                </Field>
              </div>
              <Field label="Region" required>
                <div className="relative">
                  <select
                    className={`${fieldClass} appearance-none pr-10 text-[#6b7280]`}
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option value="">Select region</option>
                    {ghanaRegions.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                  <IconChevron size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9aa0a8]" />
                </div>
              </Field>
              <Field label="City/Town" required>
                <div className="relative">
                  <select className={`${fieldClass} appearance-none pr-10 text-[#6b7280]`} defaultValue="">
                    <option value="">Select city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <IconChevron size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9aa0a8]" />
                </div>
              </Field>
              <Field label="Landmark" optional>
                <input className={fieldClass} placeholder="E.g. Near Mall, East Legon" />
              </Field>
            </div>
            <label className="mt-4 flex items-center gap-2.5 text-[13.5px] text-[#3f4450]">
              <input type="checkbox" className="h-4 w-4 rounded border-[#cfd1d4] text-cd-blue" />
              Save this address for future orders
            </label>
          </article>

          <article id="payment" className="rounded-[20px] border border-[#ececee] bg-white p-5 md:p-6">
            <Header n={2} title="Payment Method" sub="Choose how you'd like to pay." />
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <PayTab
                active={pay === "card"}
                onClick={() => setPay("card")}
                icon={IconCard}
                title="Card Payment"
                sub="Visa, Mastercard, etc."
              />
              <PayTab
                active={pay === "momo"}
                onClick={() => setPay("momo")}
                icon={IconMobile}
                title="Mobile Money"
                sub="MTN, Vodafone, AirtelTigo"
              />
              <PayTab
                active={pay === "bank"}
                onClick={() => setPay("bank")}
                icon={IconBank}
                title="Bank Transfer"
                sub="Direct bank transfer"
              />
            </div>

            {pay === "card" ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-3">
                  <Field label="Card Number" required>
                    <div className="relative">
                      <input
                        className={`${fieldClass} pr-28`}
                        placeholder="1234 5678 9012 3456"
                        inputMode="numeric"
                        autoComplete="cc-number"
                      />
                      <span className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
                        <PayVisa />
                        <PayMastercard />
                        <PayAmex />
                      </span>
                    </div>
                  </Field>
                </div>
                <Field label="Expiry Date" required>
                  <input className={fieldClass} placeholder="MM / YY" autoComplete="cc-exp" />
                </Field>
                <Field label="CVV" required>
                  <input className={fieldClass} placeholder="123" autoComplete="cc-csc" />
                </Field>
                <Field label="Name on Card" required>
                  <input className={fieldClass} placeholder="Enter name as it appears on card" autoComplete="cc-name" />
                </Field>
              </div>
            ) : null}

            {pay === "momo" ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Field label="Network" required>
                  <select className={`${fieldClass} appearance-none`} defaultValue="mtn">
                    <option value="mtn">MTN MoMo</option>
                    <option value="telecel">Telecel Cash</option>
                    <option value="at">AirtelTigo Money</option>
                  </select>
                </Field>
                <Field label="Mobile Number" required>
                  <input className={fieldClass} placeholder="024 123 4567" inputMode="tel" />
                </Field>
              </div>
            ) : null}

            {pay === "bank" ? (
              <div className="mt-5 rounded-[12px] bg-[#f7f8fa] px-4 py-3 text-[13.5px] leading-6 text-[#5c616a]">
                Transfer to Cooleddie Ltd, GCB Bank, Accra Mall Branch. Account 1234567890123. Use your
                order name as the reference.
              </div>
            ) : null}

            <label className="mt-4 flex items-center gap-2.5 text-[13.5px] text-[#3f4450]">
              <input type="checkbox" className="h-4 w-4 rounded border-[#cfd1d4] text-cd-blue" />
              Save this card for future purchases
            </label>
          </article>

          <article id="review" className="rounded-[20px] border border-[#ececee] bg-white p-5 md:p-6">
            <Header n={3} title="Review & Place Order" sub="Please review your details before placing your order." />
            <div className="mt-5 space-y-3">
              <div className="flex items-start justify-between gap-4 rounded-[14px] bg-[#f7f8fa] px-4 py-4">
                <div>
                  <p className="text-[12px] font-medium text-[#8b909a]">Shipping Address</p>
                  <p className="mt-1 text-[14px] font-semibold text-cd-ink">{checkoutReview.name}</p>
                  <p className="mt-1 text-[13px] leading-5 text-[#5c616a]">
                    {checkoutReview.phone}
                    <br />
                    {checkoutReview.address}
                    <br />
                    {checkoutReview.city}, {checkoutReview.region}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => goTo("shipping")}
                  className="text-[13px] font-medium text-cd-ink hover:opacity-70"
                >
                  Edit
                </button>
              </div>
              <div className="flex items-start justify-between gap-4 rounded-[14px] bg-[#f7f8fa] px-4 py-4">
                <div>
                  <p className="text-[12px] font-medium text-[#8b909a]">Payment Method</p>
                  <p className="mt-1 inline-flex items-center gap-2 text-[14px] font-semibold text-cd-ink">
                    <PayVisa />
                    **** {checkoutReview.cardLast4}
                  </p>
                  <p className="mt-1 text-[13px] text-[#5c616a]">Expiry {checkoutReview.cardExpiry}</p>
                </div>
                <button
                  type="button"
                  onClick={() => goTo("payment")}
                  className="text-[13px] font-medium text-cd-ink hover:opacity-70"
                >
                  Edit
                </button>
              </div>
            </div>

            {placed ? (
              <p className="mt-5 rounded-[14px] bg-[#ecfdf3] px-4 py-3 text-[14px] font-medium text-[#166534]">
                Order placed. Thank you, {checkoutReview.name}.
              </p>
            ) : (
              <button
                type="button"
                onClick={() => setPlaced(true)}
                className="btn btn-blue mt-5 w-full"
              >
                <IconLock size={15} />
                Place Order – {formatGhc(totals.total)}
              </button>
            )}
            <p className="mt-3 text-center text-[12px] text-[#8b909a]">
              By placing your order, you agree to our{" "}
              <Link href="/terms" className="text-cd-ink underline-offset-2 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-cd-ink underline-offset-2 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </article>
        </div>

        <CheckoutSummary />
      </div>
    </section>
  );
}

function Header({ n, title, sub }: { n: number; title: string; sub: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cd-blue text-[13px] font-semibold text-white">
        {n}
      </span>
      <div>
        <h2 className="font-display text-[18px] font-semibold tracking-[-0.03em] text-cd-ink">
          {title}
        </h2>
        <p className="mt-0.5 text-[13.5px] text-[#8b909a]">{sub}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  optional,
  children,
}: {
  label: string;
  required?: boolean;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label}
        {required ? <span className="text-cd-ink"> *</span> : null}
        {optional ? <span className="font-normal text-[#8b909a]"> (Optional)</span> : null}
      </span>
      {children}
    </label>
  );
}

function PayTab({
  active,
  onClick,
  icon: Icon,
  title,
  sub,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof IconCard;
  title: string;
  sub: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-start gap-3 rounded-[14px] border px-3.5 py-3 text-left ${
        active ? "border-cd-blue bg-[#f4f7ff]" : "border-[#e8e9ec] bg-white hover:border-[#cfd1d4]"
      }`}
    >
      <span
        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
          active ? "border-cd-blue" : "border-[#c5c7cb]"
        }`}
      >
        {active ? <span className="h-2 w-2 rounded-full bg-cd-blue" /> : null}
      </span>
      <span>
        <span className="flex items-center gap-1.5 text-[13.5px] font-semibold text-cd-ink">
          <Icon size={16} className="text-[#6b7280]" />
          {title}
        </span>
        <span className="mt-0.5 block text-[11.5px] text-[#8b909a]">{sub}</span>
      </span>
    </button>
  );
}
