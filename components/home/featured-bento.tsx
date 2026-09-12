import Image from "next/image";
import Link from "next/link";
import { officialPhotos } from "@/lib/assets";
import { IconArrow } from "@/components/ui/icons";

export function FeaturedBento() {
  return (
    <section className="bg-white pb-6 md:pb-10">
      <div className="container-cd grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:grid-rows-[232px_232px]">
        <article className="relative overflow-hidden rounded-[28px] bg-[#0c0e10] text-white lg:row-span-2">
          <Image
            src={officialPhotos.macbooks}
            alt="MacBook Pro on a desk"
            width={720}
            height={480}
            className="pointer-events-none absolute -right-8 bottom-0 h-[46%] w-auto object-contain object-right opacity-90 drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)] sm:h-[58%] md:h-[72%] lg:h-[78%]"
          />
          <div className="relative z-10 flex h-full min-h-[280px] max-w-[360px] flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 md:px-12 lg:min-h-0">
            <h2 className="font-display text-[26px] font-semibold leading-[1.12] tracking-[-0.035em] sm:text-[30px] md:text-[38px]">
              MacBooks for Creators, Students and Professionals.
            </h2>
            <p className="mt-4 text-[14px] leading-6 text-[#c4c5c8]">
              Power. Performance. Portability.
              <br />
              New & used MacBooks at great prices.
            </p>
            <Link
              href="/shop/macbooks"
              className="pill mt-6 h-12 w-full bg-white px-5 text-[13.5px] text-cd-ink sm:mt-7 sm:h-11 sm:w-fit"
            >
              Shop MacBooks <IconArrow size={15} />
            </Link>
          </div>
        </article>

        <article className="relative min-h-[210px] overflow-hidden rounded-[28px] bg-[#f4f5f7]">
          <Image
            src={officialPhotos.ps5}
            alt="PlayStation 5 and DualSense"
            width={420}
            height={320}
            className="pointer-events-none absolute bottom-0 right-0 h-[70%] w-[42%] object-cover object-[center_top] sm:h-[92%] sm:w-[48%]"
          />
          <div className="relative z-10 flex h-full max-w-[250px] flex-col justify-center px-6 py-7 sm:px-8 sm:py-8">
            <h3 className="font-display text-[24px] font-semibold leading-tight tracking-[-0.03em] text-cd-ink sm:text-[26px] md:text-[30px]">
              Play Without Limits.
            </h3>
            <p className="mt-2 text-[13.5px] text-cd-muted">PS5 Consoles & Games</p>
            <Link
              href="/shop/gaming"
              className="pill mt-5 h-11 w-full bg-cd-ink px-4 text-[13px] text-white sm:h-10 sm:w-fit"
            >
              Shop Gaming <IconArrow size={14} />
            </Link>
          </div>
        </article>

        <article className="relative min-h-[210px] overflow-hidden rounded-[28px] bg-[#f6f1ea]">
          <Image
            src={officialPhotos.ipad}
            alt="iPad Pro and Apple Pencil"
            width={420}
            height={320}
            className="pointer-events-none absolute bottom-0 right-0 h-[70%] w-[42%] object-cover object-[70%_center] sm:h-[88%] sm:w-[50%]"
          />
          <div className="relative z-10 flex h-full max-w-[280px] flex-col justify-center px-6 py-7 sm:px-8 sm:py-8">
            <h3 className="font-display text-[24px] font-semibold leading-tight tracking-[-0.03em] text-cd-ink sm:text-[26px] md:text-[30px]">
              Small Gadgets.
              <br />
              Big Possibilities.
            </h3>
            <p className="mt-2 text-[13.5px] text-cd-muted">
              AirPods, Apple Watch, iPad & more.
            </p>
            <Link
              href="/apple"
              className="pill mt-5 h-11 w-full bg-cd-ink px-4 text-[13px] text-white sm:h-10 sm:w-fit"
            >
              Shop Apple <IconArrow size={14} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
