import type { Metadata } from "next";
import { CheckoutView } from "@/components/checkout/checkout-view";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout. Fast delivery. Happy tech life.",
};

export default function CheckoutPage() {
  return <CheckoutView />;
}
