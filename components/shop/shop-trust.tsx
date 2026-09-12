import { IconBadge, IconCard, IconRefresh, IconTruck } from "@/components/ui/icons";

const items = [
  { icon: IconBadge, title: "100% Authentic", body: "Genuine products, always" },
  { icon: IconTruck, title: "Fast Delivery", body: "Across Ghana" },
  { icon: IconCard, title: "Secure Payments", body: "Pay safely and easily" },
  { icon: IconRefresh, title: "Easy Returns", body: "Hassle-free process" },
];

export function ShopTrust() {
  return (
    <section className="container-cd pb-8">
      <div className="grid grid-cols-2 gap-6 rounded-[22px] bg-[#f5f6f8] px-5 py-7 md:grid-cols-4 md:px-8">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <item.icon size={20} className="mt-0.5 shrink-0 text-[#6b7280]" />
            <div>
              <p className="text-[14px] font-semibold text-cd-ink">{item.title}</p>
              <p className="text-[12.5px] text-cd-muted">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
