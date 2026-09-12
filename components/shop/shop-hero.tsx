import Image from "next/image";
import { officialPhotos } from "@/lib/assets";
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

          <div className="relative hidden min-h-[270px] lg:block">
            <HandwrittenNote
              lines={["More Than Devices.", "A Better You."]}
              className="absolute right-0 top-0 z-20"
              align="right"
              arrow="down-left"
            />
            <Image
              src={officialPhotos.iphonesLineup}
              alt="iPhone color lineup"
              width={420}
              height={236}
              className="absolute left-[2%] top-[22%] h-[158px] w-[250px] -rotate-[8deg] rounded-[18px] object-cover shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            />
            <Image
              src={officialPhotos.macbooks}
              alt="MacBook Pro"
              width={420}
              height={236}
              className="absolute left-[28%] top-[6%] h-[148px] w-[240px] rotate-[6deg] rounded-[18px] object-cover shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            />
            <Image
              src={officialPhotos.ps5}
              alt="PlayStation 5"
              width={280}
              height={340}
              className="absolute bottom-0 right-[6%] h-[196px] w-[158px] rotate-[3deg] rounded-[18px] object-cover shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
