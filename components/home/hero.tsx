import Image from "next/image";
import Link from "next/link";
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_48%,rgba(90,90,90,0.26),transparent_56%)]" />
      <div className="container-cd relative grid items-center gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6 lg:py-14 xl:py-16">
        <div className="max-w-[580px]">
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

        <div className="relative mx-auto flex min-h-[360px] w-full max-w-[520px] items-end justify-center pb-2 sm:min-h-[420px]">
          <HandwrittenNote
            lines={["More than a Phone.", "A Lifestyle."]}
            className="absolute right-0 top-0 z-20 hidden sm:block"
            align="right"
            arrow="down-left"
          />
          <Image
            src="/images/hero-iphone-back.png"
            alt="iPhone 16 Pro Desert Titanium back"
            width={180}
            height={620}
            className="relative z-10 -mr-8 h-[320px] w-auto drop-shadow-[0_28px_40px_rgba(0,0,0,0.45)] sm:h-[360px] lg:h-[400px]"
            priority
          />
          <Image
            src="/images/hero-iphone-front.png"
            alt="iPhone 16 Pro Desert Titanium front"
            width={220}
            height={620}
            className="relative z-20 h-[340px] w-auto drop-shadow-[0_28px_50px_rgba(0,0,0,0.5)] sm:h-[380px] lg:h-[420px]"
            priority
          />
        </div>
      </div>
      <div className="flex justify-center gap-2 pb-6">
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
      </div>
    </section>
  );
}
