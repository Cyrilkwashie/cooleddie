import type { ShopProduct } from "@/lib/shop";

export type CartLine = {
  id: string;
  name: string;
  specs: string;
  price: number;
  image: string;
  imageAlt: string;
  href: string;
  qty: number;
};

export const initialCartLines: CartLine[] = [
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    specs: "256GB • Black Titanium • New",
    price: 12500,
    image: "/images/iphones-hero.png",
    imageAlt: "iPhone 16 Pro Max Black Titanium",
    href: "/products/iphone-16-pro-max",
    qty: 1,
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air M3",
    specs: "256GB • Space Grey • New",
    price: 13800,
    image: "/images/macbooks-hero.png",
    imageAlt: "MacBook Air M3",
    href: "/products/macbook-air-m3",
    qty: 1,
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    specs: "White • New",
    price: 2200,
    image: "/images/accessories-hero.png",
    imageAlt: "AirPods Pro 2nd generation",
    href: "/products/airpods-pro-2",
    qty: 1,
  },
  {
    id: "ps5-disc",
    name: "PlayStation 5 (Disc Edition)",
    specs: "White • New",
    price: 6200,
    image: "/images/ps5-hero.png",
    imageAlt: "PlayStation 5 Disc Edition",
    href: "/products/ps5-disc",
    qty: 1,
  },
];

export const cartRelated: ShopProduct[] = [
  {
    id: "apple-watch-s10",
    name: "Apple Watch Series 10",
    specs: "GPS + 45mm • New",
    price: 3400,
    rating: 4.7,
    reviews: 58,
    image: "/images/png-watch.png",
    imageAlt: "Apple Watch Series 10",
    category: "apple-watch",
    condition: "New",
    brand: "Apple",
    href: "/products/apple-watch-s10",
  },
  {
    id: "anker-power-bank",
    name: "Anker Power Bank",
    specs: "20,000mAh • New",
    price: 320,
    rating: 4.6,
    reviews: 49,
    image: "/images/powerbank.png",
    imageAlt: "Anker 20000mAh power bank",
    category: "accessories",
    condition: "New",
    brand: "Anker",
    href: "/products/anker-power-bank",
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    specs: "128GB • New",
    price: 8900,
    rating: 4.8,
    reviews: 72,
    image: "/images/iphones-lineup.png",
    imageAlt: "iPhone 15",
    category: "iphones",
    condition: "New",
    brand: "Apple",
    href: "/products/iphone-15",
  },
  {
    id: "magic-keyboard",
    name: "Magic Keyboard",
    specs: "For iPad • New",
    price: 1200,
    rating: 4.8,
    reviews: 36,
    image: "/images/ipad-hero.png",
    imageAlt: "Magic Keyboard for iPad",
    category: "accessories",
    condition: "New",
    brand: "Apple",
    href: "/products/magic-keyboard",
  },
];

export const FREE_DELIVERY_THRESHOLD = 500;
