import type { Metadata } from "next";
import { CartView } from "@/components/cart/cart-view";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your items and proceed to checkout at Cooleddie.",
};

export default function CartPage() {
  return <CartView />;
}
