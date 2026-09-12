import Image from "next/image";

export function SearchHero({ query }: { query: string }) {
  const term = query.trim() || "iPhone";

  return (
    <section className="container-cd pt-5 md:pt-6">
      <div className="relative overflow-hidden rounded-[24px] bg-[#f4f5f7] px-6 py-8 md:px-10 md:py-10">
        <div className="relative z-10 max-w-[420px]">
          <p className="text-[12px] font-medium text-[#8b909a]">Search Results</p>
          <h1 className="mt-2 font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] text-cd-ink md:text-[40px]">
            Results for &lsquo;{term}&rsquo;
          </h1>
          <p className="mt-3 text-[14px] text-[#6b7280]">
            We found 124 products matching &lsquo;{term}&rsquo;
          </p>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-[18%] hidden items-center lg:flex">
          <Image
            src="/images/apple-iphone16pm.jpg"
            alt="iPhone 16 Pro Max"
            width={520}
            height={360}
            priority
            className="h-[220px] w-auto object-contain object-center"
          />
        </div>

        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:block">
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
