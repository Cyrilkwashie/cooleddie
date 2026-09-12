"use client";

import Link from "next/link";
import { useState } from "react";
import { helpTopics } from "@/lib/support";
import {
  IconArrow,
  IconBag,
  IconBox,
  IconCard,
  IconRefresh,
  IconSettings,
  IconShield,
} from "@/components/ui/icons";

const icons = {
  bag: IconBag,
  box: IconBox,
  shield: IconShield,
  refresh: IconRefresh,
  card: IconCard,
  settings: IconSettings,
} as const;

export function SupportTopics() {
  const [active, setActive] = useState<(typeof helpTopics)[number]["id"]>("orders");

  return (
    <section className="container-cd pt-10 md:pt-14">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-[28px] font-semibold tracking-[-0.03em] text-cd-ink md:text-[32px]">
            How can we help you?
          </h2>
          <p className="mt-1 text-[14px] text-[#8b909a]">
            Choose a category to find the right support.
          </p>
        </div>
        <Link
          href="/faq"
          className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-cd-blue hover:underline"
        >
          View all help topics <IconArrow size={14} />
        </Link>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {helpTopics.map((topic) => {
          const Icon = icons[topic.icon];
          const selected = active === topic.id;
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => setActive(topic.id)}
              className={`flex min-h-[188px] flex-col rounded-[18px] border bg-white px-4 py-5 text-left transition-colors ${
                selected
                  ? "border-cd-blue"
                  : "border-[#ececee] hover:border-cd-blue"
              }`}
            >
              <Icon size={20} className="text-[#6b7280]" />
              <h3 className="mt-5 text-[14.5px] font-semibold leading-5 text-cd-ink">
                {topic.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-5 text-[#8b909a]">{topic.body}</p>
              <IconArrow
                size={16}
                className={`mt-auto pt-4 ${selected ? "text-cd-blue" : "text-[#c4c7ce]"}`}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
