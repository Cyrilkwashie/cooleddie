import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";
import { IconPercent } from "@/components/ui/icons";

export function CategoryCircles() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-cd">
        <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-7 md:gap-6 md:overflow-visible">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group flex min-w-[96px] flex-col items-center gap-3"
            >
              <span className="relative h-[92px] w-[92px] overflow-hidden rounded-full bg-[#f3f4f6] transition-transform group-hover:-translate-y-0.5 md:h-[104px] md:w-[104px]">
                {cat.image ? (
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    sizes="104px"
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <IconPercent size={32} className="text-cd-ink" />
                  </span>
                )}
              </span>
              <span className="text-center text-[13px] text-[#5b616c]">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
