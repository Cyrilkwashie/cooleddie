import Image from "next/image";
import Link from "next/link";
import { officialPhotos } from "@/lib/assets";
import { IconArrow } from "@/components/ui/icons";

export function FeaturedBento() {
  return (
    <section className="bg-white pb-6 md:pb-10">
      <div className="container-cd grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:grid-rows-[232px_232px]">
        <article className="relative min-h-[280px] overflow-hidden rounded-[28px] bg-[#0c0e10] text-white lg:row-span-2 lg:min-h-0">
          <Image
            src={officialPhotos.macbooks}
            alt="MacBook Pro on a desk"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-[78%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e10] via-[#0c0e10]/82 to-[#0c0e10]/20" />
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
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f5f7] via-[#f4f5f7]/88 to-transparent" />
          <div className="relative z-10 flex h-full min-h-[210px] max-w-[250px] flex-col justify-center px-6 py-7 sm:px-8 sm:py-8">
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
            fill
            sizes="(min-width: 1024px) 480px, 100vw"
            className="object-cover object-[78%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6f1ea] via-[#f6f1ea]/88 to-transparent" />
          <div className="relative z-10 flex h-full min-h-[210px] max-w-[280px] flex-col justify-center px-6 py-7 sm:px-8 sm:py-8">
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
