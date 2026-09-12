export type ProductTag = {
  label: string;
  tone: "green" | "red" | "amber" | "purple";
};

export type Product = {
  id: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  href: string;
  image: string;
  imageAlt: string;
  tag: ProductTag;
};

export const navLinks = [
  { href: "/shop", label: "All Products", hasMenu: true, icon: "menu" },
  { href: "/phones", label: "Phones" },
  { href: "/laptops", label: "Laptops" },
  { href: "/gaming", label: "Gaming", hasMenu: true },
  { href: "/apple", label: "Apple" },
  { href: "/accessories", label: "Accessories" },
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/deals", label: "Deals" },
  { href: "/trade-in", label: "Sell / Trade-in" },
] as const;

export const allProductsMenu = [
  { href: "/phones", label: "Phones" },
  { href: "/laptops", label: "Laptops" },
  { href: "/gaming", label: "Gaming Consoles" },
  { href: "/apple", label: "Apple Gadgets" },
  { href: "/accessories", label: "Accessories" },
  { href: "/deals", label: "Deals" },
];

export const gamingMenu = [
  { href: "/gaming", label: "PlayStation" },
  { href: "/gaming", label: "Xbox" },
  { href: "/gaming", label: "Nintendo" },
  { href: "/gaming", label: "Games" },
];

export const categories = [
  { href: "/shop/iphones", label: "iPhones", image: "/images/iphones-lineup.png" },
  { href: "/shop/macbooks", label: "MacBooks", image: "/images/macbooks-hero.png" },
  { href: "/laptops", label: "Laptops", image: "/images/macbooks-hero.png" },
  { href: "/shop/gaming", label: "Gaming Consoles", image: "/images/ps5-hero.png" },
  { href: "/apple", label: "Apple Gadgets", image: "/images/ipad-hero.png" },
  {
    href: "/shop/accessories",
    label: "Accessories",
    image: "/images/accessories-hero.png",
  },
  { href: "/shop/deals", label: "Deals", image: null, icon: "percent" },
];

export const bestSellers: Product[] = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    price: "From GHS 9,500",
    rating: 4.8,
    reviews: 220,
    href: "/phones",
    image: "/images/iphones-lineup.png",
    imageAlt: "iPhone 15 Pro in Natural Titanium",
    tag: { label: "Best Seller", tone: "green" },
  },
  {
    id: "macbook-air-m2",
    name: "MacBook Air (M2)",
    price: "From GHS 8,800",
    rating: 4.7,
    reviews: 96,
    href: "/laptops",
    image: "/images/macbooks-hero.png",
    imageAlt: "MacBook Air M2",
    tag: { label: "New", tone: "green" },
  },
  {
    id: "ps5-disc",
    name: "PS5 Console (Disc Edition)",
    price: "GHS 6,500",
    rating: 4.8,
    reviews: 76,
    href: "/gaming",
    image: "/images/ps5-hero.png",
    imageAlt: "PlayStation 5 Disc Edition with DualSense",
    tag: { label: "Hot", tone: "red" },
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    price: "GHS 2,200",
    rating: 4.7,
    reviews: 150,
    href: "/apple",
    image: "/images/accessories-hero.png",
    imageAlt: "AirPods Pro 2nd generation",
    tag: { label: "Deal", tone: "amber" },
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    price: "From GHS 6,800",
    rating: 4.6,
    reviews: 92,
    href: "/phones",
    image: "/images/iphones-lineup.png",
    imageAlt: "iPhone 14 in Blue",
    tag: { label: "New", tone: "purple" },
  },
];

export const services = [
  { icon: "shield", label: "100% Authentic Products" },
  { icon: "refresh", label: "New & Used Options" },
  { icon: "truck", label: "Fast & Reliable Delivery" },
  { icon: "lock", label: "Secure Payments" },
  { icon: "badge", label: "Easy Returns & Warranty" },
] as const;

export const whyChoose = [
  {
    icon: "users",
    title: "Trusted by Thousands",
    body: "Real customers, real trust.",
    tint: "blue",
  },
  {
    icon: "tag",
    title: "Great Prices",
    body: "Premium tech, better value.",
    tint: "rose",
  },
  {
    icon: "headset",
    title: "Expert Support",
    body: "We're here to help.",
    tint: "cyan",
  },
  {
    icon: "truck",
    title: "Nationwide Delivery",
    body: "Get your tech, anywhere in Ghana.",
    tint: "violet",
  },
] as const;

export const footerColumns = [
  {
    title: "Shop",
    links: [
      { href: "/shop", label: "All Products" },
      { href: "/shop/iphones", label: "iPhones" },
      { href: "/shop/macbooks", label: "MacBooks" },
      { href: "/shop/gaming", label: "Gaming" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/support", label: "Support" },
      { href: "/trade-in", label: "Sell / Trade-in" },
      { href: "/about", label: "About" },
      { href: "/track-order", label: "Track Order" },
    ],
  },
];

export const placeholderPages: Record<
  string,
  { title: string; description: string }
> = {
  products: {
    title: "All Products",
    description: "Browse phones, laptops, consoles, and accessories.",
  },
  phones: {
    title: "Phones",
    description: "Brand new and pre-owned iPhones at the best prices in Ghana.",
  },
  laptops: {
    title: "Laptops",
    description: "MacBooks and Windows laptops for work, school, and play.",
  },
  gaming: {
    title: "Gaming",
    description: "PS5 consoles, games, and accessories.",
  },
  apple: {
    title: "Apple",
    description: "AirPods, Apple Watch, iPad, and more.",
  },
  accessories: {
    title: "Accessories",
    description: "Headphones, cases, chargers, and everyday extras.",
  },
  "new-arrivals": {
    title: "New Arrivals",
    description: "The latest devices just landed.",
  },
  deals: {
    title: "Deals",
    description: "Limited-time prices on premium tech.",
  },
  "trade-in": {
    title: "Sell / Trade-in",
    description: "Get a trusted quote for your old devices.",
  },
  account: {
    title: "Account",
    description: "Sign in to track orders and manage your wishlist.",
  },
  wishlist: {
    title: "Wishlist",
    description: "Save the devices you want for later.",
  },
  cart: {
    title: "Cart",
    description: "Your bag is empty. Start shopping premium tech.",
  },
  "track-order": {
    title: "Track Order",
    description: "Follow your delivery anywhere in Ghana.",
  },
  about: {
    title: "About Us",
    description: "Quality tech. Better prices. Always.",
  },
  careers: {
    title: "Careers",
    description: "Build a smarter tomorrow with Cooleddie.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "How we handle your information.",
  },
  terms: {
    title: "Terms & Conditions",
    description: "The rules of shopping with Cooleddie.",
  },
  faq: {
    title: "FAQ",
    description: "Answers to common questions.",
  },
  warranty: {
    title: "Warranty & Returns",
    description: "Easy returns and trusted warranty support.",
  },
};
