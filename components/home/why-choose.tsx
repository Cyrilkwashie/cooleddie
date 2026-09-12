import { whyChoose } from "@/lib/data";
import { Icon } from "@/components/ui/icons";

const tints = {
  blue: "bg-[#edf2ff] text-[#3b6bff]",
  rose: "bg-[#ffe8ee] text-[#f43f5e]",
  cyan: "bg-[#e7f8fb] text-[#22b8cf]",
  violet: "bg-[#eee8ff] text-[#7c3aed]",
};

export function WhyChoose() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="container-cd grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#9aa0a8]">
            Why Choose Cooleddie
          </p>
          <h2 className="mt-3 font-display text-[34px] font-semibold leading-[1.12] tracking-[-0.04em] text-cd-ink md:text-[44px]">
            More Than a Store.
            <br />
            <span className="text-cd-blue">A Better Tech Experience</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <div key={item.title} className="flex gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${tints[item.tint]}`}
              >
                <Icon name={item.icon} size={20} />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-cd-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13.5px] text-cd-muted">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
