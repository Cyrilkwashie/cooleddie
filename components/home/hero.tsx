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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_45%,rgba(80,80,80,0.28),transparent_55%)]" />
      <div className="container-cd relative grid items-center gap-8 py-12 lg:grid-cols-[1fr_1.05fr] lg:py-16 xl:py-[72px]">
        <div className="max-w-[560px]">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.18em] text-[#c5c6c9]">
            Upgrade Your World.
          </p>
          <h1 className="font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.045em] sm:text-[52px] lg:text-[58px]">
            The Latest iPhones.
            <br />
            Now <span className="text-cd-blue">Closer Than Ever.</span>
          </h1>
          <p className="mt-5 max-w-[460px] text-[15px] leading-7 text-[#b8bac0]">
            Brand new and pre-owned iPhones at the best prices in Ghana.
            Premium devices. Trusted quality. Fast delivery.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/phones"
              className="pill h-12 bg-white px-6 text-[14px] text-cd-ink hover:bg-[#f3f3f3]"
            >
              Shop iPhones <IconArrow size={16} />
            </Link>
            <Link
              href="/products"
              className="pill h-12 border border-white/25 px-6 text-[14px] text-white hover:border-white/50"
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

        <div className="relative mx-auto min-h-[320px] w-full max-w-[620px] lg:min-h-[430px]">
          <HandwrittenNote
            lines={["More than a Phone.", "A Lifestyle."]}
            className="absolute right-0 top-0 z-10 hidden sm:block"
            align="right"
            arrow="down-left"
          />
          <div className="absolute left-[8%] top-[8%] w-[42%] drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)] sm:left-[12%] sm:top-[6%] sm:w-[38%]">
            <Image
              src="/images/hero-iphone-back.png"
              alt="iPhone 16 Pro Desert Titanium back"
              width={320}
              height={640}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="absolute bottom-0 right-[6%] w-[48%] drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] sm:right-[10%] sm:w-[44%]">
            <Image
              src="/images/hero-iphone-front.png"
              alt="iPhone 16 Pro Desert Titanium front"
              width={360}
              height={680}
              className="h-auto w-full"
              priority
            />
          </div>
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
