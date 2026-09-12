import { services } from "@/lib/data";
import { Icon } from "@/components/ui/icons";

export function ServiceHighlights() {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="container-cd">
        <div className="grid grid-cols-2 gap-6 rounded-[28px] bg-[#f5f6f8] px-5 py-7 sm:grid-cols-3 md:grid-cols-5 md:px-8 md:py-8">
          {services.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 text-center"
            >
              <Icon name={item.icon} size={22} className="text-[#6b7280]" />
              <p className="max-w-[140px] text-[13px] leading-5 text-[#5c616b]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
