import { HandwrittenNote } from "@/components/ui/handwritten-note";
import { IconLeaf, IconLock, IconTag, IconTruck } from "@/components/ui/icons";

const items = [
  {
    icon: IconTag,
    title: "Competitive Prices",
    body: "Get the best value for your devices.",
  },
  {
    icon: IconLock,
    title: "Safe & Secure Process",
    body: "Your data is wiped and protected.",
  },
  {
    icon: IconTruck,
    title: "Free & Convenient Pickup",
    body: "We come to you, anywhere in Ghana.",
  },
  {
    icon: IconLeaf,
    title: "Environmentally Friendly",
    body: "Help reduce e-waste.",
  },
];

export function TradeInWhy() {
  return (
    <section className="container-cd pb-12 md:pb-16">
      <h2 className="font-display text-[28px] font-semibold tracking-[-0.03em] text-cd-ink md:text-[32px]">
        Why Trade-In with Cooleddie?
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto]">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f5f7] text-[#6b7280]">
              <item.icon size={18} />
            </span>
            <div>
              <h3 className="text-[14.5px] font-semibold text-cd-ink">{item.title}</h3>
              <p className="mt-1 text-[13px] leading-5 text-[#8b909a]">{item.body}</p>
            </div>
          </div>
        ))}
        <HandwrittenNote
          lines={["Good Tech.", "A Greener Tomorrow."]}
          arrow="down-left"
          className="hidden self-start lg:block"
        />
      </div>
    </section>
  );
}
