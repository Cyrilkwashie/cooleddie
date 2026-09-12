import { IconCash, IconClipboard, IconShield, IconTruck } from "@/components/ui/icons";

const steps = [
  {
    icon: IconClipboard,
    title: "Get a Quote",
    body: "Select your device and get an instant estimate.",
  },
  {
    icon: IconTruck,
    title: "Schedule Pickup",
    body: "We collect your device from your location.",
  },
  {
    icon: IconShield,
    title: "Device Inspection",
    body: "Our team verifies the condition.",
  },
  {
    icon: IconCash,
    title: "Get Paid",
    body: "Receive cash or store credit instantly.",
  },
];

export function TradeInSteps() {
  return (
    <section id="how-it-works" className="container-cd pb-12 md:pb-16">
      <h2 className="font-display text-[28px] font-semibold tracking-[-0.03em] text-cd-ink md:text-[32px]">
        How Trade-In Works
      </h2>
      <p className="mt-2 text-[14px] text-[#8b909a]">
        A simple process, from your doorstep to your wallet.
      </p>
      <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            {i < steps.length - 1 ? (
              <span className="absolute right-[-12%] top-5 hidden text-[#c5c7cb] lg:block">→</span>
            ) : null}
            <div className="flex items-start gap-3">
              <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f5f7] text-[#6b7280]">
                <step.icon size={18} />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-cd-blue text-[10px] font-bold text-white">
                  {i + 1}
                </span>
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-cd-ink">{step.title}</h3>
                <p className="mt-1 text-[13px] leading-5 text-[#8b909a]">{step.body}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
