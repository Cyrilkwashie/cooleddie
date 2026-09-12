import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "@/components/ui/icons";

export function FeaturedBento() {
  return (
    <section className="bg-white pb-6 md:pb-10">
      <div className="container-cd grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:grid-rows-[232px_232px]">
        <article className="relative overflow-hidden rounded-[28px] bg-[#0c0e10] text-white lg:row-span-2">
          <div className="relative z-10 flex h-full min-h-[320px] max-w-[360px] flex-col justify-center px-8 py-10 md:px-12 lg:min-h-0">
            <h2 className="font-display text-[30px] font-semibold leading-[1.12] tracking-[-0.035em] md:text-[38px]">
              MacBooks for Creators, Students and Professionals.
            </h2>
            <p className="mt-4 text-[14px] leading-6 text-[#c4c5c8]">
              Power. Performance. Portability.
              <br />
              New & used MacBooks at great prices.
            </p>
            <Link
              href="/shop/macbooks"
              className="pill mt-7 h-11 w-fit bg-white px-5 text-[13.5px] text-cd-ink"
            >
              Shop MacBooks <IconArrow size={15} />
            </Link>
          </div>
          <Image
            src="/images/macbook-open.png"
            alt="Space Gray MacBook"
            width={720}
            height={440}
            className="pointer-events-none absolute -right-8 top-1/2 hidden h-[200px] w-auto -translate-y-1/2 object-contain drop-shadow-[0_24px_40px_rgba(0,0,0,0.4)] md:block lg:-right-4 lg:h-[230px]"
          />
        </article>

        <article className="relative min-h-[210px] overflow-hidden rounded-[28px] bg-[#f4f5f7]">
          <div className="relative z-10 flex h-full max-w-[250px] flex-col justify-center px-8 py-8">
            <h3 className="font-display text-[26px] font-semibold leading-tight tracking-[-0.03em] text-cd-ink md:text-[30px]">
              Play Without Limits.
            </h3>
            <p className="mt-2 text-[13.5px] text-cd-muted">PS5 Consoles & Games</p>
            <Link
              href="/shop/gaming"
              className="pill mt-5 h-10 w-fit bg-cd-ink px-4 text-[13px] text-white"
            >
              Shop Gaming <IconArrow size={14} />
            </Link>
          </div>
          <Image
            src="/images/ps5-bw.png"
            alt="PlayStation 5 and DualSense"
            width={360}
            height={420}
            className="pointer-events-none absolute bottom-0 right-4 h-[200px] w-auto object-contain sm:right-8"
          />
        </article>

        <article className="relative min-h-[210px] overflow-hidden rounded-[28px] bg-[#f6f1ea]">
          <div className="relative z-10 flex h-full max-w-[280px] flex-col justify-center px-8 py-8">
            <h3 className="font-display text-[26px] font-semibold leading-tight tracking-[-0.03em] text-cd-ink md:text-[30px]">
              Small Gadgets.
              <br />
              Big Possibilities.
            </h3>
            <p className="mt-2 text-[13.5px] text-cd-muted">
              AirPods, Apple Watch, iPad & more.
            </p>
            <Link
              href="/apple"
              className="pill mt-5 h-10 w-fit bg-cd-ink px-4 text-[13px] text-white"
            >
              Shop Apple <IconArrow size={14} />
            </Link>
          </div>
          <div className="pointer-events-none absolute bottom-5 right-5 flex items-end gap-3 sm:right-8">
            <Image
              src="/images/cutout-airpods.png"
              alt="AirPods"
              width={120}
              height={120}
              className="h-[88px] w-auto object-contain sm:h-[104px]"
            />
            <Image
              src="/images/png-watch.png"
              alt="Apple Watch"
              width={140}
              height={180}
              className="h-[118px] w-auto object-contain sm:h-[140px]"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
