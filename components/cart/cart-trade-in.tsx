import Image from "next/image";
import Link from "next/link";
import { officialPhotos } from "@/lib/assets";
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

        <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-end gap-3 lg:flex">
          <div className="relative mb-10 h-[100px] w-[164px] -rotate-[6deg] overflow-hidden rounded-[14px]">
            <Image src={officialPhotos.iphones} alt="" fill className="object-cover" sizes="164px" />
          </div>
          <div className="relative mb-16 h-[78px] w-[128px] overflow-hidden rounded-[14px]">
            <Image src={officialPhotos.accessories} alt="" fill className="object-cover" sizes="128px" />
          </div>
          <div className="relative mb-12 h-[102px] w-[168px] rotate-[5deg] overflow-hidden rounded-[14px]">
            <Image src={officialPhotos.macbooks} alt="" fill className="object-cover" sizes="168px" />
          </div>
          <div className="relative mb-6 mr-4 h-[168px] w-[132px] overflow-hidden rounded-[14px]">
            <Image src={officialPhotos.ps5} alt="" fill className="object-cover" sizes="132px" />
          </div>
        </div>
      </div>
    </section>
  );
}
