import Image from "next/image";
import Link from "next/link";
import { officialPhotos } from "@/lib/assets";
import { HandwrittenNote } from "@/components/ui/handwritten-note";
import { IconArrow, IconBadge, IconLock, IconShield, IconTruck } from "@/components/ui/icons";

const trust = [
  { icon: IconShield, label: "Genuine Products" },
  { icon: IconTruck, label: "Fast Delivery" },
  { icon: IconLock, label: "Secure Payments" },
  { icon: IconBadge, label: "Trusted by 10,000+" },
];

export function Hero() {
  return (
    <section className="relative min-h-[560px] overflow-hidden text-white sm:min-h-[600px] lg:min-h-[560px] xl:min-h-[620px]">
      <div className="absolute inset-0">
        <Image
          src={officialPhotos.iphonesWide}
          alt="The latest iPhones"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c0e10]/55 via-[#0c0e10]/35 to-[#0c0e10]/80 lg:bg-gradient-to-r lg:from-[#0c0e10]/80 lg:via-[#0c0e10]/35 lg:to-transparent" />
      </div>

      <div className="container-cd relative z-10 flex min-h-[560px] flex-col justify-center py-10 sm:min-h-[600px] sm:py-12 lg:min-h-[560px] lg:py-16 xl:min-h-[620px]">
        <div className="max-w-[560px]">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[#c5c6c9] sm:mb-5">
            Upgrade Your World.
          </p>
          <h1 className="font-display text-[32px] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-[44px] lg:text-[50px] xl:text-[56px] xl:leading-[1.04]">
            <span className="block">The Latest iPhones.</span>
            <span className="block">
              Now <span className="text-cd-blue">Closer Than Ever.</span>
            </span>
          </h1>
          <p className="mt-4 max-w-[440px] text-[14px] leading-6 text-[#b8bac0] sm:mt-5 sm:text-[15px] sm:leading-7">
            Brand new and pre-owned iPhones at the best prices in Ghana.
            Premium devices. Trusted quality. Fast delivery.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/shop/iphones"
              className="pill h-12 w-full bg-white px-6 text-[14px] text-cd-ink hover:bg-[#f3f3f3] sm:w-auto"
            >
              Shop iPhones <IconArrow size={16} />
            </Link>
            <Link
              href="/shop"
              className="pill h-12 w-full border border-white/35 bg-transparent px-6 text-[14px] text-white hover:border-white/70 sm:w-auto"
            >
              Explore All Products
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-3 text-[12px] text-[#c2c3c7] sm:mt-8 sm:gap-x-5">
            {trust.map(({ icon: IconCmp, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5">
                <IconCmp size={14} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <HandwrittenNote
          lines={["More Than a Phone.", "A Lifestyle."]}
          className="absolute right-0 top-10 z-20 hidden lg:block"
          align="right"
          arrow="down-left"
        />
      </div>
    </section>
  );
}
