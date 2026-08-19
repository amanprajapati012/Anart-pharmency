import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "FAQs | Anart Pharmacy",
  description:
    "Frequently Asked Questions about Anart Pharmacy products, shipping, payments, returns, and support.",
};

export default function Page() {
  return <FAQClient />;
}