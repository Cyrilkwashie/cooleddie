"use client";

import Image from "next/image";
import { useMemo, useState, type ReactNode } from "react";
import { formatGhc } from "@/lib/shop";
import {
  estimateValue,
  tradeBrands,
  tradeCategories,
  tradeConditions,
  tradeModels,
  tradeStorage,
} from "@/lib/trade-in";
import { IconArrow, IconInfo } from "@/components/ui/icons";

const selectClass =
  "h-12 w-full appearance-none rounded-[12px] border border-[#e8e9ec] bg-white px-4 pr-10 text-[14px] text-cd-ink outline-none focus:border-cd-blue focus:ring-2 focus:ring-cd-blue/15";

export function TradeInTool() {
  const [category, setCategory] = useState("phones");
  const [brand, setBrand] = useState("Apple");
  const [model, setModel] = useState("iPhone 14 Pro Max");
  const [storage, setStorage] = useState("256GB");
  const [condition, setCondition] = useState("good");
  const [quoted, setQuoted] = useState(false);

  const models = tradeModels[category] ?? tradeModels.phones;
  const value = useMemo(
    () => estimateValue(category, model, condition),
    [category, condition, model],
  );

  function onCategory(id: string) {
    setCategory(id);
    const nextModels = tradeModels[id] ?? tradeModels.phones;
    setModel(nextModels[0]);
    setQuoted(false);
  }

  return (
    <section id="trade-in-tool" className="container-cd py-12 md:py-16">
      <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div>
          <h2 className="font-display text-[28px] font-semibold tracking-[-0.03em] text-cd-ink md:text-[32px]">
            What would you like to trade in?
          </h2>
          <p className="mt-2 text-[14px] text-[#8b909a]">
            Select your device category to get started.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {tradeCategories.map((item) => {
              const active = item.id === category;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onCategory(item.id)}
                  className={`rounded-[18px] border bg-white p-4 text-left ${
                    active ? "border-cd-blue shadow-[0_0_0_1px_#3b6bff]" : "border-[#ececee] hover:border-[#cfd1d4]"
                  }`}
                >
                  <div className="mb-3 flex h-[88px] items-center justify-center overflow-hidden rounded-[12px]">
                    {item.images.map((img) => (
                      <Image
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        width={180}
                        height={88}
                        className="h-full w-full object-cover"
                      />
                    ))}
                  </div>
                  <p className="text-[14px] font-semibold text-cd-ink">{item.title}</p>
                  <p className="mt-1 text-[12px] leading-4 text-[#8b909a]">{item.body}</p>
                </button>
              );
            })}
          </div>
        </div>

        <aside className="rounded-[22px] border border-[#ececee] bg-white p-5 md:p-6">
          <h3 className="font-display text-[22px] font-semibold tracking-[-0.03em] text-cd-ink">
            Get an Instant Estimate
          </h3>
          <p className="mt-1 text-[13.5px] text-[#8b909a]">
            Fill in your device details to get its estimated value.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <Field label="Brand">
              <select className={selectClass} value={brand} onChange={(e) => setBrand(e.target.value)}>
                {tradeBrands.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </Field>
            <Field label="Model">
              <select className={selectClass} value={model} onChange={(e) => setModel(e.target.value)}>
                {models.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </Field>
            <Field label="Storage">
              <select className={selectClass} value={storage} onChange={(e) => setStorage(e.target.value)}>
                {tradeStorage.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </Field>
            <Field label="Condition">
              <select className={selectClass} value={condition} onChange={(e) => setCondition(e.target.value)}>
                {tradeConditions.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-6">
            <p className="text-[13px] text-[#8b909a]">Estimated Trade-in Value</p>
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <p className="font-display text-[32px] font-semibold tracking-[-0.03em] text-cd-ink">
                {formatGhc(value)}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#16a34a]">
                <span className="h-2 w-2 rounded-full bg-[#22c55e]" />
                Great Value!
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setQuoted(true)}
            className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-cd-blue text-[14px] font-semibold text-white hover:bg-cd-blue-deep"
          >
            Get Exact Quote <IconArrow size={16} />
          </button>
          {quoted ? (
            <p className="mt-3 text-[13px] font-medium text-[#16a34a]">
              Quote request sent. We&apos;ll confirm after inspection.
            </p>
          ) : null}
          <p className="mt-3 inline-flex items-start gap-1.5 text-[12.5px] leading-5 text-[#8b909a]">
            <IconInfo size={14} className="mt-0.5 shrink-0" />
            Final price may vary after device inspection.
          </p>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-medium text-cd-ink">{label}</span>
      <span className="relative block">
        {children}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9aa0a8]">
          ▾
        </span>
      </span>
    </label>
  );
}
