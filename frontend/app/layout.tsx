import type { Metadata } from "next";
import { Work_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/src/layout/LayoutWrapper";
import { Toaster } from "sonner";
import Script from "next/script";
import GlobalLoader from "@/src/components/common/GlobalLoader";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anart Pharmacy - Ayurvedic & Herbal Wellness",
  description:
    "Anart Pharmacy brings you authentic Ayurvedic, herbal and Shilajit wellness products — rooted in tradition, checked for quality, made for modern life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <GlobalLoader />

        <Toaster
          position="top-right"
          richColors
          closeButton
          expand={true}
          theme="light"
          toastOptions={{
            duration: 3500,
            unstyled: true,
            classNames: {
              toast:
                "group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--input-bg)] px-4 py-3 shadow-[0_10px_30px_rgba(15,33,23,0.14)]",
              title: "text-foreground font-semibold text-sm",
              description: "text-[var(--text-secondary)] text-xs",
              success: "!border-green-200 !bg-green-50",
              error: "!border-red-200 !bg-red-50",
              warning: "!border-amber-200 !bg-amber-50",
              info: "!border-blue-200 !bg-blue-50",
              closeButton:
                "!bg-white !border !border-[var(--border)] !text-foreground",
            },
          }}
        />

        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
