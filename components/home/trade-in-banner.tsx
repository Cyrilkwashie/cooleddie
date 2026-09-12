import Image from "next/image";
import Link from "next/link";
import { HandwrittenNote } from "@/components/ui/handwritten-note";
import { IconArrow } from "@/components/ui/icons";

export function TradeInBanner() {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="container-cd">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0c0e10] px-8 py-10 text-white md:px-12 md:py-14">
          <div className="relative z-10 max-w-[420px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#c5c6c9]">
              Sell or Trade-in
            </p>
            <h2 className="mt-3 font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.035em] md:text-[44px]">
              Your Old Devices
            </h2>
            <p className="mt-4 max-w-[360px] text-[14.5px] leading-6 text-[#c2c3c7]">
              Get the best value for your old phones, laptops or consoles.
              Easy, fast and hassle-free.
            </p>
            <Link
              href="/trade-in"
              className="pill mt-7 h-12 bg-white px-6 text-[14px] text-cd-ink"
            >
              Get a Quote <IconArrow size={16} />
            </Link>
          </div>

          <HandwrittenNote
            lines={["Upgrade Smarter."]}
            arrow="left"
            align="right"
            className="absolute right-8 top-10 z-10 hidden md:block"
          />

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] md:block">
            <Image
              src="/images/png-iphone12-black.png"
              alt=""
              width={280}
              height={360}
              className="absolute bottom-[-8%] left-[8%] w-[38%] rotate-[-18deg] object-contain opacity-95"
            />
            <Image
              src="/images/cutout-iphone.png"
              alt="Pacific Blue iPhone"
              width={300}
              height={380}
              className="absolute bottom-[-6%] left-[34%] w-[40%] rotate-[-8deg] object-contain"
            />
            <Image
              src="/images/hero-iphone-back.png"
              alt="Graphite iPhone"
              width={220}
              height={400}
              className="absolute bottom-[-4%] right-[8%] w-[28%] rotate-[8deg] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
