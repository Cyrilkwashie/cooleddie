export const popularSearches = [
  "Track my order",
  "Return policy",
  "Warranty",
  "Trade-in",
  "Payment",
] as const;

export const helpTopics = [
  {
    id: "orders",
    title: "Orders & Delivery",
    body: "Track orders, delivery times, shipping info.",
    icon: "bag",
  },
  {
    id: "returns",
    title: "Returns & Refunds",
    body: "Return products, get a refund.",
    icon: "box",
  },
  {
    id: "warranty",
    title: "Warranty & Repairs",
    body: "Check warranty status, repair process.",
    icon: "shield",
  },
  {
    id: "trade-in",
    title: "Trade-in Support",
    body: "Get help with selling or trading in.",
    icon: "refresh",
  },
  {
    id: "payments",
    title: "Payments & Billing",
    body: "Payment methods, failed payments.",
    icon: "card",
  },
  {
    id: "account",
    title: "Account & Settings",
    body: "Manage your account, preferences.",
    icon: "settings",
  },
] as const;

export const supportFaqs = [
  {
    q: "How do I track my order?",
    a: "Use Track Order in the top bar or your account. We’ll email and SMS a tracking link as soon as your package leaves Accra.",
  },
  {
    q: "What is your return policy?",
    a: "Most new devices can be returned within 7 days if they’re unused and in original packaging. Used items are covered by our listed condition notes.",
  },
  {
    q: "Do you offer warranty on your products?",
    a: "Yes. New Apple products include the official warranty, and Cooleddie-backed cover is available on selected used and refurbished devices.",
  },
  {
    q: "How does the trade-in process work?",
    a: "Tell us your device and condition on the Sell/Trade-in page, get an instant estimate, then book a free pickup anywhere in Ghana.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Mobile Money, Visa, Mastercard, bank transfer, and cash on selected Accra deliveries.",
  },
  {
    q: "How long does delivery take in Ghana?",
    a: "Accra deliveries usually arrive the next day. Other regions typically take 1–3 working days after dispatch.",
  },
  {
    q: "Can I change or cancel my order?",
    a: "Yes, if it hasn’t shipped yet. Message support with your order number and we’ll update or cancel it for you.",
  },
] as const;

export const contactCards = [
  {
    id: "chat",
    title: "Live Chat",
    lines: ["Chat with us in real-time"],
    action: "Start Chat",
    href: "#live-chat",
    icon: "chat",
  },
  {
    id: "email",
    title: "Email Us",
    lines: ["support@cooleddie.com"],
    action: "Send Email",
    href: "mailto:support@cooleddie.com",
    icon: "mail",
  },
  {
    id: "call",
    title: "Call Us",
    lines: ["+233 24 123 4567", "Mon–Sat, 9am–8pm"],
    action: "Call Now",
    href: "tel:+233241234567",
    icon: "call",
  },
  {
    id: "store",
    title: "Visit Our Store",
    lines: ["Accra Mall, Accra, Ghana", "Mon – Sat, 9am–9pm"],
    action: "Get Directions",
    href: "https://maps.google.com/?q=Accra+Mall+Accra+Ghana",
    icon: "pin",
  },
] as const;

export const satisfactionPoints = [
  {
    title: "Safe Shopping",
    body: "Secure payments and data protection.",
    icon: "shield",
  },
  {
    title: "Fast Delivery",
    body: "Nationwide delivery across Ghana.",
    icon: "truck",
  },
  {
    title: "Dedicated Support",
    body: "Real people, real help.",
    icon: "headset",
  },
] as const;
