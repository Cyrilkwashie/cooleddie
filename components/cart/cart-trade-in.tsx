import Image from "next/image";
import Link from "next/link";
import { HandwrittenNote } from "@/components/ui/handwritten-note";
import { IconArrow } from "@/components/ui/icons";

export function CartTradeIn() {
  return (
    <section className="mt-12 bg-cd-black text-white md:mt-16">
      <div className="container-cd relative overflow-hidden py-12 md:py-16">
        <div className="relative z-10 max-w-[460px]">
          <h2 className="font-display text-[32px] font-semibold leading-[1.1] tracking-[-0.035em] md:text-[40px]">
            Trade In. Upgrade.
            <br />
            Save More.
          </h2>
          <p className="mt-4 text-[14.5px] leading-6 text-[#c2c3c7]">
            Get the best value for your older devices.
          </p>
          <Link
            href="/trade-in"
            className="pill mt-7 h-12 border border-white/80 bg-transparent px-6 text-[14px] text-white hover:bg-white hover:text-cd-ink"
          >
            Start Trade-in <IconArrow size={16} />
          </Link>
        </div>

        <HandwrittenNote
          lines={["Same Devices.", "A Brighter You."]}
          align="right"
          arrow="down-left"
          className="absolute right-6 top-8 z-20 hidden lg:block"
        />

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-end lg:flex">
          <Image
            src="/images/iphone16pm-front.png"
            alt=""
            width={160}
            height={320}
            className="mb-8 mr-[-8px] h-[210px] w-auto object-contain"
          />
          <Image
            src="/images/airpods-pro.png"
            alt=""
            width={140}
            height={140}
            className="mb-16 mr-2 h-[92px] w-auto object-contain"
          />
          <Image
            src="/images/mba-open.png"
            alt=""
            width={260}
            height={170}
            className="mb-14 h-[120px] w-auto object-contain"
          />
          <Image
            src="/images/ps5-bw.png"
            alt=""
            width={180}
            height={240}
            className="mb-6 mr-4 h-[200px] w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
