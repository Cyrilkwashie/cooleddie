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
    <section className="relative overflow-hidden bg-[#0c0e10] text-white">
      <Image
        src={officialPhotos.iphonesWide}
        alt="The latest iPhones"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c0e10] via-[#0c0e10]/55 to-transparent sm:via-[#0c0e10]/35 lg:via-[#0c0e10]/15" />

      <div className="container-cd relative z-10 flex min-h-[420px] items-center py-12 sm:min-h-[500px] lg:min-h-[560px] lg:py-16 xl:min-h-[620px]">
        <div className="max-w-[560px]">
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-[#c5c6c9]">
            Upgrade Your World.
          </p>
          <h1 className="font-display text-[40px] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-[50px] xl:text-[56px]">
            <span className="block">The Latest iPhones.</span>
            <span className="block whitespace-nowrap">
              Now <span className="text-cd-blue">Closer Than Ever.</span>
            </span>
          </h1>
          <p className="mt-5 max-w-[440px] text-[15px] leading-7 text-[#b8bac0]">
            Brand new and pre-owned iPhones at the best prices in Ghana.
            Premium devices. Trusted quality. Fast delivery.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/shop/iphones"
              className="pill h-12 bg-white px-6 text-[14px] text-cd-ink hover:bg-[#f3f3f3]"
            >
              Shop iPhones <IconArrow size={16} />
            </Link>
            <Link
              href="/shop"
              className="pill h-12 border border-white/35 bg-transparent px-6 text-[14px] text-white hover:border-white/70"
            >
              Explore All Products
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-[12px] text-[#c2c3c7]">
            {trust.map(({ icon: IconCmp, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5">
                <IconCmp size={14} />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <HandwrittenNote
          lines={["More than a Phone.", "A Lifestyle."]}
          className="absolute right-0 top-10 z-20 hidden lg:block"
          align="right"
          arrow="down-left"
        />
      </div>

      <div className="relative z-10 flex justify-center gap-2 pb-6">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      </div>
    </section>
  );
}
