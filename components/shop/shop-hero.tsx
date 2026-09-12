import Image from "next/image";
import { HandwrittenNote } from "@/components/ui/handwritten-note";
import { IconBadge, IconShield, IconTag, IconTruck } from "@/components/ui/icons";

const trust = [
  { icon: IconTag, label: "Great Prices" },
  { icon: IconShield, label: "Genuine Products" },
  { icon: IconTruck, label: "Fast Delivery" },
  { icon: IconBadge, label: "Trusted Seller" },
];

export function ShopHero() {
  return (
    <section className="container-cd pt-5 md:pt-6">
      <div className="relative overflow-hidden rounded-[28px] bg-[#0c0e10] px-6 py-10 text-white md:px-12 md:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_50%,rgba(80,80,90,0.28),transparent_55%)]" />
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="max-w-[520px]">
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-[#c5c6c9]">
              Shop All Products
            </p>
            <h1 className="mt-3 font-display text-[36px] font-semibold leading-[1.06] tracking-[-0.04em] sm:text-[48px]">
              The Tech You Love,
              <br />
              <span className="text-cd-blue">All in One Place.</span>
            </h1>
            <p className="mt-4 max-w-[400px] text-[14.5px] leading-6 text-[#c2c3c7]">
              New & used. Phones, laptops, consoles, accessories and more.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-[#d0d1d4]">
              {trust.map(({ icon: IconCmp, label }) => (
                <li key={label} className="inline-flex items-center gap-1.5">
                  <IconCmp size={14} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden min-h-[260px] lg:block">
            <HandwrittenNote
              lines={["More Than Devices.", "A Better You."]}
              className="absolute right-0 top-0 z-20"
              align="right"
              arrow="down-left"
            />
            <Image
              src="/images/ipad-back.png"
              alt=""
              width={160}
              height={200}
              className="absolute left-[2%] top-[28%] h-[120px] w-auto -rotate-[18deg] object-contain"
            />
            <Image
              src="/images/iphone16pm-back.png"
              alt=""
              width={140}
              height={280}
              className="absolute left-[18%] bottom-[4%] h-[200px] w-auto object-contain"
            />
            <Image
              src="/images/cutout-macbook.png"
              alt=""
              width={240}
              height={160}
              className="absolute left-[32%] top-[18%] h-[130px] w-auto rotate-[8deg] object-contain"
            />
            <Image
              src="/images/ps5-bw.png"
              alt=""
              width={160}
              height={220}
              className="absolute right-[22%] top-2 h-[170px] w-auto object-contain"
            />
            <Image
              src="/images/cutout-airpods.png"
              alt=""
              width={100}
              height={100}
              className="absolute bottom-6 right-[28%] h-[72px] w-auto object-contain"
            />
            <Image
              src="/images/dualsense.png"
              alt=""
              width={160}
              height={120}
              className="absolute bottom-4 right-[8%] h-[90px] w-auto object-contain"
            />
            <Image
              src="/images/png-watch.png"
              alt=""
              width={90}
              height={110}
              className="absolute bottom-6 right-0 h-[88px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
