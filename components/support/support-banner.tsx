import { satisfactionPoints } from "@/lib/support";
import { HandwrittenNote } from "@/components/ui/handwritten-note";
import { IconHeadset, IconShield, IconTruck } from "@/components/ui/icons";

const icons = {
  shield: IconShield,
  truck: IconTruck,
  headset: IconHeadset,
} as const;

export function SupportBanner() {
  return (
    <section className="bg-[#eef3fb]">
      <div className="container-cd py-10 md:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.4fr)_auto]">
          <div>
            <h2 className="font-display text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] text-cd-ink md:text-[32px]">
              Your Satisfaction
              <br />
              Matters.
            </h2>
            <p className="mt-3 max-w-[280px] text-[14px] leading-6 text-[#6b7280]">
              We&apos;re committed to giving you the best shopping experience in Ghana.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {satisfactionPoints.map((item) => {
              const Icon = icons[item.icon];
              return (
                <div key={item.title} className="flex items-start gap-3">
                  <Icon size={20} className="mt-0.5 shrink-0 text-[#6b7280]" />
                  <div>
                    <p className="text-[14.5px] font-semibold text-cd-ink">{item.title}</p>
                    <p className="mt-1 text-[13px] leading-5 text-[#8b909a]">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <HandwrittenNote
            lines={["Tech Should Be", "Simple."]}
            tone="ink"
            arrow="swoosh"
            className="hidden justify-self-end lg:block"
          />
        </div>
      </div>
    </section>
  );
}
