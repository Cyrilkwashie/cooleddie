"use client";

import Image from "next/image";
import { useState } from "react";
import { popularSearches } from "@/lib/support";
import { HandwrittenNote } from "@/components/ui/handwritten-note";
import { GhanaFlag, IconClock, IconHeadset, IconSearch } from "@/components/ui/icons";

const highlights = [
  {
    title: "Fast Response",
    body: "We typically reply within 1 hour",
    icon: IconClock,
  },
  {
    title: "Multiple Channels",
    body: "Chat, Email, Phone",
    icon: IconHeadset,
  },
];

export function SupportHero() {
  const [query, setQuery] = useState("");

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    document.getElementById("support-faq")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="container-cd pt-8 md:pt-10">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-6">
        <div className="max-w-[520px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9aa0a8]">
            Help & Support
          </p>
          <h1 className="mt-3 font-display text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] text-cd-ink sm:text-[44px] lg:text-[56px] lg:leading-[1.05]">
            We&apos;re Here for <span className="text-cd-blue">You</span>.
          </h1>
          <p className="mt-4 max-w-[440px] text-[15px] leading-7 text-[#5c616a]">
            Got a question? We&apos;ve got answers. Find help with orders, products,
            returns, warranty and more.
          </p>

          <form onSubmit={onSearch} className="relative mt-7">
            <IconSearch
              size={16}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa0a8]"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for help (e.g. returns, warranty, delivery...)"
              className="h-12 w-full rounded-full bg-[#f3f4f6] pl-11 pr-4 text-[14px] text-cd-ink outline-none placeholder:text-[#9aa0a8] focus:ring-2 focus:ring-cd-blue/20 sm:h-12"
            />
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[13px] text-[#8b909a]">Popular searches:</span>
            {popularSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  document.getElementById("support-faq")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="min-h-11 rounded-full bg-[#f3f4f6] px-3 py-2 text-[12.5px] text-[#4b4f57] hover:bg-[#ebecef]"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <HandwrittenNote
            lines={["Real Support.", "Real People."]}
            tone="ink"
            arrow="swoosh"
            className="absolute left-0 top-2 z-20 hidden md:block lg:left-2"
          />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-[#f4f5f7] sm:aspect-[5/6]">
            <Image
              src="/images/support-agent.jpg"
              alt="Cooleddie support specialist"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover object-[center_18%]"
            />
          </div>

          <div className="absolute right-0 top-[14%] z-20 hidden w-[230px] rounded-[18px] bg-white p-4 shadow-[0_16px_48px_rgba(15,18,22,0.10)] lg:block">
            <ul className="space-y-3.5">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <item.icon size={16} className="mt-0.5 shrink-0 text-[#6b7280]" />
                  <div>
                    <p className="text-[13.5px] font-semibold text-cd-ink">{item.title}</p>
                    <p className="text-[12px] leading-4 text-[#8b909a]">{item.body}</p>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <GhanaFlag className="mt-1 h-3 w-[18px] shrink-0 rounded-[2px]" />
                <div>
                  <p className="text-[13.5px] font-semibold text-cd-ink">Ghana Based</p>
                  <p className="text-[12px] leading-4 text-[#8b909a]">
                    Local support, local solutions
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
