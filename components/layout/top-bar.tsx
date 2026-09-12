import Link from "next/link";
import { GhanaFlag, IconHeadset, IconPin } from "@/components/ui/icons";

export function TopBar() {
  return (
    <div className="bg-cd-black text-[11px] text-[#c8c9cc] sm:text-[12px]">
      <div className="container-cd flex h-8 items-center justify-between gap-4 sm:h-[34px]">
        <p className="truncate tracking-wide">
          Quality Tech. Better Prices. Always.
        </p>
        <div className="flex items-center gap-4 sm:gap-5">
          <button
            type="button"
            className="hidden items-center gap-1.5 hover:text-white sm:inline-flex"
          >
            <GhanaFlag className="h-3 w-[18px] rounded-[2px]" />
            <span>Ghana (GHS)</span>
            <span className="text-[9px]">▾</span>
          </button>
          <Link
            href="/track-order"
            className="hidden items-center gap-1.5 hover:text-white sm:inline-flex"
          >
            <IconPin size={13} />
            Track Order
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <IconHeadset size={13} />
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}
