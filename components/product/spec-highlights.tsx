import type { ProductDetail } from "@/lib/product";
import { IconBattery, IconCamera, IconChip, IconPhone } from "@/components/ui/icons";

const icons = {
  chip: IconChip,
  camera: IconCamera,
  display: IconPhone,
  battery: IconBattery,
};

export function SpecHighlights({ product }: { product: ProductDetail }) {
  return (
    <section className="border-y border-[#f0f1f3]">
      <div className="container-cd grid grid-cols-2 gap-6 py-7 md:grid-cols-4 md:py-8">
        {product.highlights.map((item) => {
          const Icon = icons[item.icon];
          return (
            <div key={item.title} className="flex items-start gap-3">
              <Icon size={22} className="mt-0.5 shrink-0 text-[#6b7280]" />
              <div>
                <p className="text-[14px] font-semibold text-cd-ink">{item.title}</p>
                <p className="mt-0.5 text-[12.5px] text-[#8b909a]">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
