import Image from "next/image";
import Link from "next/link";
import { shopCategories } from "@/lib/shop";
import { IconGrid, IconPercent } from "@/components/ui/icons";

const imageCrop: Record<string, string> = {
  iphones: "object-[center_40%]",
  macbooks: "object-[78%_center]",
  ipads: "object-[75%_center]",
  "apple-watch": "object-[28%_16%]",
  airpods: "object-[62%_58%]",
  gaming: "object-[70%_center]",
  accessories: "object-[78%_42%]",
  used: "object-[72%_center]",
};

export function CategoryChips({ active }: { active: string }) {
  return (
    <section className="container-cd py-6 md:py-8">
      <div className="flex gap-3 overflow-x-auto pb-2 md:gap-4">
        {shopCategories.map((cat) => {
          const isActive = cat.slug === active;
          return (
            <Link
              key={cat.slug}
              href={cat.href}
              className="group flex w-[76px] shrink-0 flex-col items-center gap-2 sm:w-[84px]"
            >
              <span
                className={`relative h-[72px] w-[72px] overflow-hidden rounded-full bg-[#f3f4f6] transition-transform group-hover:-translate-y-0.5 sm:h-[80px] sm:w-[80px] md:h-[84px] md:w-[84px] ${
                  isActive ? "ring-2 ring-cd-blue ring-offset-2" : ""
                }`}
              >
                {cat.image ? (
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    sizes="84px"
                    className={`object-cover ${imageCrop[cat.slug] ?? ""}`}
                  />
                ) : cat.slug === "deals" ? (
                  <span className="absolute inset-0 flex items-center justify-center bg-[#fff1f2] text-[#f43f5e]">
                    <IconPercent size={28} />
                  </span>
                ) : (
                  <span
                    className={`absolute inset-0 flex items-center justify-center ${
                      isActive ? "bg-[#eef2ff] text-cd-blue" : "text-cd-ink"
                    }`}
                  >
                    <IconGrid size={26} />
                  </span>
                )}
              </span>
              <span
                className={`text-center text-[12px] leading-4 ${
                  isActive ? "font-semibold text-cd-blue" : "text-[#5b616c]"
                }`}
              >
                {cat.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
