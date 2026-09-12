import Image from "next/image";
import { officialPhotos } from "@/lib/assets";
import { HandwrittenNote } from "@/components/ui/handwritten-note";
import { IconArrow, IconLock, IconPlayCircle, IconTruck, IconZap } from "@/components/ui/icons";

const benefits = [
  { icon: IconZap, title: "Fast Quotes", body: "Know your value in minutes" },
  { icon: IconTruck, title: "Free Pickup", body: "We collect from your doorstep" },
  { icon: IconLock, title: "Safe & Secure", body: "Your data is protected with us" },
];

export function TradeInHero() {
  return (
    <section className="container-cd pt-8 md:pt-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9aa0a8]">
            Sell or Trade-in
          </p>
          <h1 className="mt-3 font-display text-[36px] font-semibold leading-[1.08] tracking-[-0.04em] text-cd-ink sm:text-[48px] lg:text-[52px]">
            Upgrade <span className="text-cd-blue">Smarter</span>.
            <br />
            Give Tech a <span className="text-cd-blue">Second Life</span>.
          </h1>
          <p className="mt-4 max-w-[460px] text-[15px] leading-7 text-[#5c616a]">
            Turn your old devices into cash or store credit. It&apos;s quick, easy and
            secure with Cooleddie.
          </p>
          <ul className="mt-6 space-y-3">
            {benefits.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4f5f7] text-[#6b7280]">
                  <item.icon size={16} />
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-cd-ink">{item.title}</p>
                  <p className="text-[13px] text-[#8b909a]">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#trade-in-tool"
              className="pill h-12 bg-cd-blue px-6 text-[14px] text-white hover:bg-cd-blue-deep"
            >
              Get Started <IconArrow size={16} />
            </a>
            <a
              href="#how-it-works"
              className="pill h-12 border border-[#e4e4e7] bg-white px-6 text-[14px] text-cd-ink hover:border-cd-ink"
            >
              <IconPlayCircle size={16} />
              How It Works
            </a>
          </div>
        </div>

        <div className="relative min-h-[340px] sm:min-h-[420px]">
          <HandwrittenNote
            lines={["Old Tech.", "New Possibilities."]}
            className="absolute left-0 top-0 z-20 hidden md:block"
            arrow="down"
          />
          <div className="absolute right-0 top-2 z-20 hidden h-[118px] w-[118px] items-center justify-center rounded-full bg-[#f6f0e4] text-center shadow-sm lg:flex">
            <p className="px-3 font-display text-[11px] font-semibold uppercase leading-[1.25] tracking-[0.08em] text-cd-ink">
              Good Devices
              <br />
              Brighter
              <br />
              Tomorrows
            </p>
          </div>

          <Image
            src={officialPhotos.ipad}
            alt="iPad Pro"
            width={220}
            height={124}
            className="absolute left-[6%] top-[10%] h-[110px] w-[176px] -rotate-[10deg] rounded-[16px] object-cover shadow-md"
          />
          <Image
            src={officialPhotos.macbooks}
            alt="MacBook Pro"
            width={280}
            height={158}
            className="absolute left-[26%] top-[6%] h-[128px] w-[210px] rotate-[6deg] rounded-[16px] object-cover shadow-md"
          />
          <Image
            src={officialPhotos.ps5}
            alt="PlayStation 5"
            width={160}
            height={196}
            className="absolute right-[6%] top-[10%] h-[168px] w-[132px] rounded-[16px] object-cover shadow-md"
          />
          <Image
            src={officialPhotos.iphones}
            alt="iPhones"
            width={240}
            height={135}
            className="absolute bottom-[8%] left-[14%] h-[128px] w-[210px] -rotate-[4deg] rounded-[16px] object-cover shadow-md"
          />
          <Image
            src={officialPhotos.accessories}
            alt="Apple accessories"
            width={180}
            height={101}
            className="absolute bottom-[10%] right-[14%] h-[92px] w-[150px] rotate-[5deg] rounded-[16px] object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
