export type ShopBadge = "Bestseller" | "New" | "Sale" | "Popular" | "Used";

export type ShopProduct = {
  id: string;
  name: string;
  specs: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  image: string;
  imageAlt: string;
  badge?: ShopBadge;
  category: string;
  condition: "New" | "Used" | "Refurbished";
  brand: string;
  href: string;
  cta?: "Add to Cart" | "Choose Options";
};

export const shopNav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/trade-in", label: "Sell/Trade-in" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
] as const;

export const shopCategories = [
  { slug: "all", label: "All Products", icon: "grid", href: "/shop" },
  { slug: "iphones", label: "iPhones", icon: "phone", href: "/shop/iphones" },
  { slug: "macbooks", label: "MacBooks", icon: "laptop", href: "/shop/macbooks" },
  { slug: "ipads", label: "iPads", icon: "tablet", href: "/shop/ipads" },
  { slug: "apple-watch", label: "Apple Watch", icon: "watch", href: "/shop/apple-watch" },
  { slug: "airpods", label: "AirPods", icon: "earbuds", href: "/shop/airpods" },
  { slug: "gaming", label: "Gaming Consoles", icon: "gamepad", href: "/shop/gaming" },
  { slug: "accessories", label: "Accessories", icon: "headphone", href: "/shop/accessories" },
  { slug: "used", label: "Used Devices", icon: "tag", href: "/shop/used" },
  { slug: "deals", label: "Deals", icon: "percent", href: "/shop/deals" },
] as const;

export const filterCategories = [
  { slug: "iphones", label: "iPhones", count: 124 },
  { slug: "macbooks", label: "MacBooks", count: 58 },
  { slug: "ipads", label: "iPads", count: 32 },
  { slug: "apple-watch", label: "Apple Watch", count: 28 },
  { slug: "airpods", label: "AirPods", count: 40 },
  { slug: "gaming", label: "Gaming Consoles", count: 36 },
  { slug: "accessories", label: "Accessories", count: 112 },
  { slug: "used", label: "Used Devices", count: 65 },
] as const;

export const filterConditions = [
  { slug: "New", label: "New", count: 318 },
  { slug: "Used", label: "Used", count: 177 },
  { slug: "Refurbished", label: "Refurbished", count: 24 },
] as const;

export const filterBrands = [
  { slug: "Apple", label: "Apple", count: 356 },
  { slug: "Sony", label: "Sony", count: 36 },
  { slug: "Samsung", label: "Samsung", count: 22 },
  { slug: "Anker", label: "Anker", count: 18 },
  { slug: "Other", label: "Other Brands", count: 45 },
] as const;

export const SHOP_CATALOG_SIZE = 519;

export const shopProducts: ShopProduct[] = [
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    specs: "256GB • New",
    price: 12500,
    rating: 4.9,
    reviews: 128,
    image: "/images/iphones-hero.png",
    imageAlt: "iPhone 16 Pro Max Black Titanium",
    badge: "Bestseller",
    category: "iphones",
    condition: "New",
    brand: "Apple",
    href: "/products/iphone-16-pro-max",
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air M3",
    specs: "256GB • New",
    price: 13800,
    rating: 4.8,
    reviews: 96,
    image: "/images/macbooks-hero.png",
    imageAlt: "MacBook Air M3",
    badge: "New",
    category: "macbooks",
    condition: "New",
    brand: "Apple",
    href: "/products/macbook-air-m3",
  },
  {
    id: "ps5-disc",
    name: "PlayStation 5 (Disc Edition)",
    specs: "New",
    price: 6200,
    compareAt: 6800,
    rating: 4.7,
    reviews: 74,
    image: "/images/ps5-hero.png",
    imageAlt: "PlayStation 5 Disc Edition",
    badge: "Sale",
    category: "gaming",
    condition: "New",
    brand: "Sony",
    href: "/products/ps5-disc",
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    specs: "New",
    price: 2200,
    rating: 4.8,
    reviews: 110,
    image: "/images/accessories-hero.png",
    imageAlt: "AirPods Pro 2nd generation",
    badge: "Popular",
    category: "airpods",
    condition: "New",
    brand: "Apple",
    href: "/products/airpods-pro-2",
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    specs: "128GB • Used (Like New)",
    price: 5300,
    rating: 4.6,
    reviews: 62,
    image: "/images/iphones-lineup.png",
    imageAlt: "iPhone 14",
    badge: "New",
    category: "iphones",
    condition: "Used",
    brand: "Apple",
    href: "/products/iphone-14",
  },
  {
    id: "apple-watch-s10",
    name: "Apple Watch Series 10",
    specs: "GPS + 45mm • New",
    price: 3400,
    rating: 4.7,
    reviews: 58,
    image: "/images/accessories-hero.png",
    imageAlt: "Apple Watch Series 10",
    badge: "New",
    category: "apple-watch",
    condition: "New",
    brand: "Apple",
    href: "/products/apple-watch-s10",
  },
  {
    id: "macbook-pro-m4",
    name: "MacBook Pro M4",
    specs: "512GB • New",
    price: 18900,
    rating: 4.9,
    reviews: 37,
    image: "/images/macbooks-hero.png",
    imageAlt: "MacBook Pro M4",
    badge: "New",
    category: "macbooks",
    condition: "New",
    brand: "Apple",
    href: "/products/macbook-pro-m4",
  },
  {
    id: "ipad-air-m2",
    name: "iPad Air M2",
    specs: "256GB • New",
    price: 7900,
    rating: 4.8,
    reviews: 41,
    image: "/images/ipad-hero.png",
    imageAlt: "iPad Air M2",
    badge: "Sale",
    category: "ipads",
    condition: "New",
    brand: "Apple",
    href: "/products/ipad-air-m2",
  },
  {
    id: "dualsense",
    name: "DualSense Controller",
    specs: "PS5 • New",
    price: 850,
    rating: 4.7,
    reviews: 93,
    image: "/images/ps5-hero.png",
    imageAlt: "DualSense wireless controller",
    badge: "Bestseller",
    category: "gaming",
    condition: "New",
    brand: "Sony",
    href: "/products/dualsense",
  },
  {
    id: "samsung-t7",
    name: "Samsung T7 SSD",
    specs: "1TB • New",
    price: 1100,
    rating: 4.8,
    reviews: 26,
    image: "/images/accessories-hero.png",
    imageAlt: "Samsung T7 portable SSD",
    category: "accessories",
    condition: "New",
    brand: "Samsung",
    href: "/products/samsung-t7",
  },
  {
    id: "anker-power-bank",
    name: "Anker Power Bank",
    specs: "20,000mAh • New",
    price: 320,
    compareAt: 380,
    rating: 4.6,
    reviews: 49,
    image: "/images/accessories-hero.png",
    imageAlt: "Anker 20000mAh power bank",
    badge: "Sale",
    category: "accessories",
    condition: "New",
    brand: "Anker",
    href: "/products/anker-power-bank",
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    specs: "128GB • Used (Good)",
    price: 4200,
    rating: 4.5,
    reviews: 68,
    image: "/images/iphones-hero.png",
    imageAlt: "iPhone 13",
    badge: "Used",
    category: "iphones",
    condition: "Used",
    brand: "Apple",
    href: "/products/iphone-13",
  },
];

export function formatGhc(amount: number) {
  return `GHC ${amount.toLocaleString("en-US")}`;
}

export function isShopCategory(slug: string) {
  return shopCategories.some((c) => c.slug === slug);
}
