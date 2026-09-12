import Image from "next/image";
import { officialPhotos } from "@/lib/assets";

export function SearchHero({ query }: { query: string }) {
  const term = query.trim() || "iPhone";

  return (
    <section className="container-cd pt-5 md:pt-6">
      <div className="relative overflow-hidden rounded-[24px] bg-[#f4f5f7] px-6 py-8 md:px-10 md:py-10">
        <Image
          src={officialPhotos.iphones}
          alt="iPhone 16 Pro"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f5f7] via-[#f4f5f7]/72 to-transparent" />

        <div className="relative z-10 max-w-[420px]">
          <p className="text-[12px] font-medium text-[#8b909a]">Search Results</p>
          <h1 className="mt-2 break-words font-display text-[26px] font-semibold leading-[1.15] tracking-[-0.035em] text-cd-ink sm:text-[32px] md:text-[40px]">
            Results for &lsquo;{term}&rsquo;
          </h1>
          <p className="mt-3 text-[14px] text-[#6b7280]">
            We found 124 products matching &lsquo;{term}&rsquo;
          </p>
        </div>

        <div className="absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 rounded-[16px] bg-white/90 px-4 py-3 backdrop-blur-sm lg:block">
          <p className="font-display text-[22px] font-semibold tracking-[-0.03em] text-cd-ink">
            iPhone
          </p>
          <p className="mt-1 max-w-[140px] text-[13px] leading-5 text-[#8b909a]">
            Innovation in every detail.
          </p>
        </div>
      </div>
    </section>
  );
}
