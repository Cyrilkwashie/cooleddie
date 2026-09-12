import Link from "next/link";
import { shopCategories } from "@/lib/shop";
import {
  IconEarbuds,
  IconGamepad,
  IconGrid,
  IconHeadphone,
  IconLaptop,
  IconPercent,
  IconPhone,
  IconTablet,
  IconTag,
  IconWatch,
} from "@/components/ui/icons";

const icons = {
  grid: IconGrid,
  phone: IconPhone,
  laptop: IconLaptop,
  tablet: IconTablet,
  watch: IconWatch,
  earbuds: IconEarbuds,
  gamepad: IconGamepad,
  headphone: IconHeadphone,
  tag: IconTag,
  percent: IconPercent,
};

export function CategoryChips({ active }: { active: string }) {
  return (
    <section className="container-cd py-6 md:py-8">
      <div className="flex gap-2 overflow-x-auto pb-1 md:justify-between">
        {shopCategories.map((cat) => {
          const IconCmp = icons[cat.icon];
          const isActive = cat.slug === active;
          const isDeal = cat.slug === "deals";
          return (
            <Link
              key={cat.slug}
              href={cat.href}
              className={`flex min-h-[88px] min-w-[76px] flex-col items-center justify-center gap-2 rounded-[18px] px-2 py-2 text-center ${
                isActive ? "border border-cd-blue bg-[#f4f7ff]" : ""
              }`}
            >
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                  isDeal ? "bg-[#fff1f2] text-[#f43f5e]" : "text-[#4b5060]"
                }`}
              >
                <IconCmp size={20} />
              </span>
              <span className="whitespace-nowrap text-[12px] text-[#5b616c]">
                {cat.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
