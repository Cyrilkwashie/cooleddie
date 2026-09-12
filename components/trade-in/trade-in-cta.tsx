import Image from "next/image";
import { HandwrittenNote } from "@/components/ui/handwritten-note";
import { IconArrow } from "@/components/ui/icons";

export function TradeInCta() {
  return (
    <section className="bg-cd-black text-white">
      <div className="container-cd relative overflow-hidden py-12 md:py-16">
        <div className="relative z-10 max-w-[460px]">
          <h2 className="font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] md:text-[40px]">
            Same Passion.
            <br />
            A Better Tomorrow.
          </h2>
          <p className="mt-4 text-[14.5px] leading-6 text-[#c2c3c7]">
            Trade in today and get closer to the devices you really want.
          </p>
          <a
            href="#trade-in-tool"
            className="pill mt-7 h-12 border border-white/80 bg-transparent px-6 text-[14px] text-white hover:bg-white hover:text-cd-ink"
          >
            Start Trade-in <IconArrow size={16} />
          </a>
        </div>

        <HandwrittenNote
          lines={["Tech Lives On."]}
          align="right"
          arrow="down-left"
          className="absolute right-6 top-10 z-20 hidden lg:block"
        />

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-end lg:flex">
          <Image
            src="/images/iphone16pm-front.png"
            alt=""
            width={150}
            height={300}
            className="mb-8 h-[200px] w-auto object-contain"
          />
          <Image
            src="/images/airpods-pro.png"
            alt=""
            width={120}
            height={120}
            className="mb-16 h-[84px] w-auto object-contain"
          />
          <Image
            src="/images/mba-open.png"
            alt=""
            width={240}
            height={160}
            className="mb-14 h-[110px] w-auto object-contain"
          />
          <Image
            src="/images/ps5-bw.png"
            alt=""
            width={160}
            height={220}
            className="mb-6 mr-4 h-[190px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
