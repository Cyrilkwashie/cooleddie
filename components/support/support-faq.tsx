"use client";

import Link from "next/link";
import { useState } from "react";
import { supportFaqs } from "@/lib/support";
import { IconArrow, IconChevron } from "@/components/ui/icons";

export function SupportFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div id="support-faq">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-[26px] font-semibold tracking-[-0.03em] text-cd-ink md:text-[30px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-[14px] text-[#8b909a]">
            Quick answers to the questions we get most.
          </p>
        </div>
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-cd-blue hover:underline"
        >
          View all FAQs <IconArrow size={14} />
        </Link>
      </div>

      <div className="mt-6">
        {supportFaqs.map((item, index) => {
          const expanded = open === index;
          return (
            <div key={item.q} className="border-b border-[#ececee]">
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="text-[14.5px] font-medium text-cd-ink">{item.q}</span>
                <IconChevron
                  size={16}
                  className={`shrink-0 text-[#9aa0a8] transition-transform ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expanded ? (
                <p className="pb-4 text-[13.5px] leading-6 text-[#5c616a]">{item.a}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
