export type TradeCategory = {
  id: string;
  title: string;
  body: string;
  images: { src: string; alt: string; className?: string }[];
};

export const tradeCategories: TradeCategory[] = [
  {
    id: "phones",
    title: "Phones",
    body: "iPhone, Samsung, Google, etc.",
    images: [{ src: "/images/iphones-hero.png", alt: "iPhone" }],
  },
  {
    id: "laptops",
    title: "Laptops",
    body: "MacBook, Windows, etc.",
    images: [{ src: "/images/macbooks-hero.png", alt: "MacBook" }],
  },
  {
    id: "tablets",
    title: "Tablets",
    body: "iPad, Samsung Tab, etc.",
    images: [{ src: "/images/ipad-hero.png", alt: "iPad" }],
  },
  {
    id: "gaming",
    title: "Gaming Consoles",
    body: "PlayStation, Xbox, Nintendo, etc.",
    images: [{ src: "/images/ps5-hero.png", alt: "PlayStation 5" }],
  },
  {
    id: "accessories",
    title: "Accessories",
    body: "Apple Watch, AirPods, Chargers, etc.",
    images: [{ src: "/images/accessories-hero.png", alt: "Accessories" }],
  },
  {
    id: "other",
    title: "Other Devices",
    body: "Smartwatches, Monitors, and more.",
    images: [{ src: "/images/accessories-hero.png", alt: "Other devices" }],
  },
];

export const tradeBrands = ["Apple", "Samsung", "Google", "Sony", "Other"] as const;

export const tradeModels: Record<string, string[]> = {
  phones: [
    "iPhone 16 Pro Max",
    "iPhone 16 Pro",
    "iPhone 15 Pro Max",
    "iPhone 14 Pro Max",
    "iPhone 14",
    "iPhone 13",
  ],
  laptops: ["MacBook Air M3", "MacBook Pro M4", "Windows Laptop"],
  tablets: ["iPad Air M2", "iPad Pro", "Samsung Tab"],
  gaming: ["PlayStation 5 (Disc)", "Xbox Series X", "Nintendo Switch"],
  accessories: ["AirPods Pro", "Apple Watch Series 10", "MagSafe Charger"],
  other: ["Monitor", "Smartwatch", "Other"],
};

export const tradeStorage = ["64GB", "128GB", "256GB", "512GB", "1TB"] as const;

export const tradeConditions = [
  { id: "excellent", label: "Excellent (Like new)" },
  { id: "good", label: "Good (Minor signs of use)" },
  { id: "fair", label: "Fair (Visible wear)" },
  { id: "poor", label: "Poor (Needs repair)" },
] as const;

export function estimateValue(category: string, model: string, condition: string) {
  if (category === "phones" && model === "iPhone 14 Pro Max" && condition === "good") {
    return 5800;
  }
  const base: Record<string, number> = {
    phones: 4200,
    laptops: 6200,
    tablets: 2800,
    gaming: 2400,
    accessories: 700,
    other: 400,
  };
  const condMul = { excellent: 1.15, good: 1, fair: 0.72, poor: 0.4 }[condition] ?? 1;
  const modelBonus = model.includes("Pro Max") ? 1400 : model.includes("Pro") ? 800 : 0;
  return Math.round(((base[category] ?? 400) + modelBonus) * condMul);
}
