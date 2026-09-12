import { FREE_DELIVERY_THRESHOLD, initialCartLines } from "@/lib/cart";

export const checkoutSteps = [
  { id: 1, label: "Shipping" },
  { id: 2, label: "Payment" },
  { id: 3, label: "Review & Place Order" },
] as const;

export const ghanaRegions = [
  {
    id: "greater-accra",
    label: "Greater Accra",
    cities: ["Accra", "Tema", "Madina", "Adenta", "Kasoa", "Spintex"],
  },
  {
    id: "ashanti",
    label: "Ashanti",
    cities: ["Kumasi", "Obuasi", "Ejisu", "Konongo"],
  },
  {
    id: "central",
    label: "Central",
    cities: ["Cape Coast", "Winneba", "Kasoa", "Elmina"],
  },
  {
    id: "eastern",
    label: "Eastern",
    cities: ["Koforidua", "Nkawkaw", "Akosombo"],
  },
  {
    id: "western",
    label: "Western",
    cities: ["Takoradi", "Tarkwa", "Axim"],
  },
  {
    id: "volta",
    label: "Volta",
    cities: ["Ho", "Hohoe", "Keta"],
  },
  {
    id: "northern",
    label: "Northern",
    cities: ["Tamale", "Yendi", "Savelugu"],
  },
] as const;

export const checkoutReview = {
  name: "Kwame Mensah",
  phone: "+233 24 123 4567",
  address: "Near Mall, East Legon",
  city: "Accra",
  region: "Greater Accra",
  cardBrand: "VISA",
  cardLast4: "3456",
  cardExpiry: "12/27",
};

export function checkoutTotals() {
  const itemCount = initialCartLines.reduce((n, line) => n + line.qty, 0);
  const subtotal = initialCartLines.reduce((n, line) => n + line.price * line.qty, 0);
  const delivery = 0;
  const tax = 0;
  return {
    itemCount,
    subtotal,
    delivery,
    tax,
    total: subtotal + delivery + tax,
    threshold: FREE_DELIVERY_THRESHOLD,
  };
}
