import { shopProducts, type ShopProduct } from "@/lib/shop";

export type GalleryImage = {
  src: string;
  alt: string;
  kind?: "image" | "video";
};

export type ProductColor = {
  id: string;
  name: string;
  hex: string;
  sku: string;
};

export type ProductStorage = {
  id: string;
  label: string;
  sku: string;
};

export type ProductCondition = {
  id: string;
  label: string;
};

export type RelatedProduct = {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  imageAlt: string;
  href: string;
};

export type SpecHighlight = {
  title: string;
  body: string;
  icon: "chip" | "camera" | "display" | "battery";
};

export type ProductSpec = { label: string; value: string };

export type ProductDetail = {
  slug: string;
  name: string;
  sku: string;
  tagline: string;
  price: number;
  rating: number;
  reviews: number;
  sold: string;
  badge?: "Bestseller";
  inStock: boolean;
  description: string;
  overview: string;
  overviewPoints: string[];
  bannerTitle: string;
  bannerCaption: string;
  bannerImage: string;
  breadcrumbs: { label: string; href?: string }[];
  mainImage: string;
  mainImageAlt: string;
  images: GalleryImage[];
  storage: ProductStorage[];
  colors: ProductColor[];
  conditions: ProductCondition[];
  highlights: SpecHighlight[];
  specifications: ProductSpec[];
  boxContents: string[];
  shipping: string[];
  warranty: string[];
  related: RelatedProduct[];
};

const iphoneRelated: RelatedProduct[] = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    price: 10800,
    rating: 4.8,
    reviews: 36,
    image: "/images/iphones-hero.png",
    imageAlt: "iPhone 16 Pro",
    href: "/products/iphone-16-pro",
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    price: 2200,
    rating: 4.8,
    reviews: 110,
    image: "/images/accessories-hero.png",
    imageAlt: "AirPods Pro 2nd generation",
    href: "/products/airpods-pro-2",
  },
  {
    id: "apple-watch-s10",
    name: "Apple Watch Series 10",
    price: 3400,
    rating: 4.7,
    reviews: 58,
    image: "/images/png-watch.png",
    imageAlt: "Apple Watch Series 10",
    href: "/products/apple-watch-s10",
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air M3",
    price: 13800,
    rating: 4.8,
    reviews: 96,
    image: "/images/macbooks-hero.png",
    imageAlt: "MacBook Air M3",
    href: "/products/macbook-air-m3",
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    price: 9500,
    rating: 4.6,
    reviews: 72,
    image: "/images/iphones-lineup.png",
    imageAlt: "iPhone 15",
    href: "/products/iphone-15",
  },
];

export const productDetails: Record<string, ProductDetail> = {
  "iphone-16-pro-max": {
    slug: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    sku: "IP16PM-256-BK",
    tagline: "Titanium. So strong. So light. So Pro.",
    price: 12500,
    rating: 4.9,
    reviews: 128,
    sold: "1.2K+",
    badge: "Bestseller",
    inStock: true,
    description:
      "The most advanced iPhone ever. With a stunning titanium design, powerful A18 Pro chip, and a pro-grade camera system, iPhone 16 Pro Max takes everything further.",
    overview:
      "iPhone 16 Pro Max is built for those who want the very best. Featuring a stunning titanium design, the powerful A18 Pro chip, a pro-grade camera system, and industry-leading battery — everything you love about iPhone — taken further.",
    overviewPoints: [
      "Stunning titanium design with a durable build",
      "A18 Pro chip for next-level performance",
      "Pro camera system with 48MP main camera",
      "6.9\" Super Retina XDR display with ProMotion",
      "All-day battery life (up to 33 hours video playback)",
      "iOS 18 with powerful new features",
    ],
    bannerTitle: "Built for what's next.",
    bannerCaption: "iPhone 16 Pro Max",
    bannerImage: "/images/iphones-hero.png",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Phones", href: "/phones" },
      { label: "iPhones", href: "/shop/iphones" },
      { label: "iPhone 16 Pro Max" },
    ],
    mainImage: "/images/iphones-hero.png",
    mainImageAlt: "iPhone 16 Pro Max in Black Titanium, front and back",
    images: [
      { src: "/images/iphones-hero.png", alt: "iPhone 16 Pro Max titanium lifestyle" },
      { src: "/images/iphones-lineup.png", alt: "iPhone color lineup" },
      { src: "/images/iphone16pm-front.png", alt: "iPhone 16 Pro Max front" },
      { src: "/images/iphone16pm-back.png", alt: "iPhone 16 Pro Max back" },
      {
        src: "/images/iphone16pm-camera.png",
        alt: "iPhone 16 Pro Max camera video",
        kind: "video",
      },
    ],
    storage: [
      { id: "256", label: "256GB", sku: "256" },
      { id: "512", label: "512GB", sku: "512" },
      { id: "1tb", label: "1TB", sku: "1TB" },
    ],
    colors: [
      { id: "black", name: "Black Titanium", hex: "#2b2b2d", sku: "BK" },
      { id: "silver", name: "Silver", hex: "#e8e8ea", sku: "SL" },
      { id: "white", name: "White", hex: "#f7f4ee", sku: "WH" },
      { id: "gold", name: "Gold", hex: "#e4d0a8", sku: "GD" },
    ],
    conditions: [
      { id: "new", label: "New" },
      { id: "used", label: "Used (Like New)" },
      { id: "refurb", label: "Refurbished" },
    ],
    highlights: [
      {
        icon: "chip",
        title: "A18 Pro Chip",
        body: "Super fast. Super efficient.",
      },
      {
        icon: "camera",
        title: "Pro Camera System",
        body: "48MP. Stunning detail.",
      },
      {
        icon: "display",
        title: "6.9\" Super Retina XDR",
        body: "Brighter. Sharper. Smoother.",
      },
      {
        icon: "battery",
        title: "Up to 33 Hours",
        body: "All-day battery life.",
      },
    ],
    specifications: [
      { label: "Display", value: "6.9\" Super Retina XDR, ProMotion, always-on" },
      { label: "Chip", value: "A18 Pro with 6-core GPU" },
      { label: "Camera", value: "48MP Fusion, 48MP Ultra Wide, 5x Telephoto" },
      { label: "Front camera", value: "12MP Camera Control / Center Stage" },
      { label: "Battery", value: "Up to 33 hours video playback" },
      { label: "Material", value: "Grade 5 titanium, Ceramic Shield" },
      { label: "Resistance", value: "IP68 water and dust resistance" },
      { label: "OS", value: "iOS 18" },
      { label: "Connectivity", value: "5G, Wi-Fi 7, USB-C, USB 3" },
    ],
    boxContents: [
      "iPhone 16 Pro Max",
      "USB-C Charge Cable",
      "Documentation",
    ],
    shipping: [
      "Free delivery in Ghana on orders over GHC 500.",
      "Same-day dispatch from Accra on orders placed before 2pm.",
      "Nationwide courier delivery in 1–3 business days.",
      "Track your order anytime from your account.",
    ],
    warranty: [
      "12-month Cooleddie warranty on new devices.",
      "90-day warranty on used and refurbished devices.",
      "Easy returns within 7 days if the device is unused and sealed.",
      "Genuine Apple parts and unlocked units only.",
    ],
    related: iphoneRelated,
  },
};

function relatedFromShop(excludeId: string): RelatedProduct[] {
  return shopProducts
    .filter((p) => p.id !== excludeId)
    .slice(0, 5)
    .map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      rating: p.rating,
      reviews: p.reviews,
      image: p.image,
      imageAlt: p.imageAlt,
      href: p.href,
    }));
}

function fromShopProduct(product: ShopProduct): ProductDetail {
  const categoryLabel =
    product.category === "iphones"
      ? "iPhones"
      : product.category === "macbooks"
        ? "MacBooks"
        : product.category === "gaming"
          ? "Gaming"
          : product.name;
  return {
    slug: product.id,
    name: product.name,
    sku: product.id.replace(/-/g, "").toUpperCase().slice(0, 14),
    tagline: product.specs,
    price: product.price,
    rating: product.rating,
    reviews: product.reviews,
    sold: `${Math.max(product.reviews * 8, 120)}+`,
    badge: product.badge === "Bestseller" ? "Bestseller" : undefined,
    inStock: true,
    description: `Shop the ${product.name} at Cooleddie. ${product.specs}. Genuine products, fast delivery across Ghana.`,
    overview: `The ${product.name} is ready to shop at Cooleddie — new and used, always genuine, priced in GHC.`,
    overviewPoints: [
      "100% authentic, inspected devices",
      "Fast delivery across Ghana",
      "Easy returns and trusted warranty",
      product.specs,
    ],
    bannerTitle: "Buy smart. Tech better.",
    bannerCaption: product.name,
    bannerImage: "/images/iphones-hero.png",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Shop", href: "/shop" },
      { label: categoryLabel, href: `/shop/${product.category}` },
      { label: product.name },
    ],
    mainImage: product.image,
    mainImageAlt: product.imageAlt,
    images: [{ src: product.image, alt: product.imageAlt }],
    storage: [{ id: "default", label: product.specs.split("•")[0]?.trim() || "Standard", sku: "STD" }],
    colors: [{ id: "default", name: "As shown", hex: "#2b2b2d", sku: "BK" }],
    conditions: [
      { id: "new", label: "New" },
      { id: "used", label: "Used (Like New)" },
      { id: "refurb", label: "Refurbished" },
    ],
    highlights: [
      { icon: "chip", title: "Genuine", body: "Authenticated devices." },
      { icon: "camera", title: "Inspected", body: "Checked before shipping." },
      { icon: "display", title: "Ready", body: "Unlocked and set to go." },
      { icon: "battery", title: "Warranty", body: "Covered by Cooleddie." },
    ],
    specifications: [
      { label: "Condition", value: product.condition },
      { label: "Brand", value: product.brand },
      { label: "Details", value: product.specs },
    ],
    boxContents: [product.name],
    shipping: [
      "Free delivery in Ghana on orders over GHC 500.",
      "Nationwide courier delivery in 1–3 business days.",
    ],
    warranty: [
      "Warranty included on every device.",
      "Easy returns within 7 days.",
    ],
    related: relatedFromShop(product.id),
  };
}

const extraShopLike: ShopProduct[] = [
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    specs: "256GB • New",
    price: 10800,
    rating: 4.8,
    reviews: 36,
    image: "/images/iphones-hero.png",
    imageAlt: "iPhone 16 Pro",
    badge: "Bestseller",
    category: "iphones",
    condition: "New",
    brand: "Apple",
    href: "/products/iphone-16-pro",
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    specs: "128GB • New",
    price: 9500,
    rating: 4.6,
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
  {
    id: "iphone-16",
    name: "iPhone 16",
    specs: "128GB • Ultramarine • New",
    price: 9000,
    rating: 4.7,
    reviews: 72,
    image: "/images/iphones-lineup.png",
    imageAlt: "iPhone 16 Ultramarine",
    category: "iphones",
    condition: "New",
    brand: "Apple",
    href: "/products/iphone-16",
  },
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    specs: "256GB • White • New",
    price: 10800,
    rating: 4.8,
    reviews: 36,
    image: "/images/iphones-hero.png",
    imageAlt: "iPhone 16 Plus White",
    category: "iphones",
    condition: "New",
    brand: "Apple",
    href: "/products/iphone-16-plus",
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    specs: "64GB • Black • Used",
    price: 3100,
    rating: 4.4,
    reviews: 51,
    image: "/images/iphones-lineup.png",
    imageAlt: "iPhone 12 Black",
    category: "iphones",
    condition: "Used",
    brand: "Apple",
    href: "/products/iphone-12",
  },
  {
    id: "magsafe-charger",
    name: "Apple MagSafe Charger",
    specs: "White • New",
    price: 320,
    rating: 4.7,
    reviews: 20,
    image: "/images/accessories-hero.png",
    imageAlt: "Apple MagSafe Charger",
    category: "accessories",
    condition: "New",
    brand: "Apple",
    href: "/products/magsafe-charger",
  },
  {
    id: "apple-20w",
    name: "Apple 20W USB-C Adapter",
    specs: "White • New",
    price: 280,
    rating: 4.6,
    reviews: 90,
    image: "/images/accessories-hero.png",
    imageAlt: "Apple 20W USB-C power adapter",
    category: "accessories",
    condition: "New",
    brand: "Apple",
    href: "/products/apple-20w",
  },
  {
    id: "iphone-silicone-case",
    name: "iPhone Silicone Case",
    specs: "For iPhone 16 • Black",
    price: 350,
    rating: 4.7,
    reviews: 72,
    image: "/images/silicone-case-black.png",
    imageAlt: "Black iPhone silicone case",
    category: "accessories",
    condition: "New",
    brand: "Apple",
    href: "/products/iphone-silicone-case",
  },
  {
    id: "screen-protector",
    name: "Tempered Glass Screen Protector",
    specs: "For iPhone 16 • 2-Pack",
    price: 80,
    rating: 4.5,
    reviews: 120,
    image: "/images/screen-protector.png",
    imageAlt: "Tempered glass screen protector 2-pack",
    category: "accessories",
    condition: "New",
    brand: "Apple",
    href: "/products/screen-protector",
  },
];

export function getProductDetail(slug: string): ProductDetail | undefined {
  if (productDetails[slug]) return productDetails[slug];
  const shop = shopProducts.find((p) => p.id === slug) ?? extraShopLike.find((p) => p.id === slug);
  return shop ? fromShopProduct(shop) : undefined;
}

export function allProductSlugs() {
  return Array.from(
    new Set([
      ...Object.keys(productDetails),
      ...shopProducts.map((p) => p.id),
      ...extraShopLike.map((p) => p.id),
    ]),
  );
}
