import Link from "next/link";
// import Logo from "@/src/components/common/Logo";
import {
  IconLeaf,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandWhatsapp,
  IconMapPin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="w-full bg-footer text-[var(--text-on-dark)]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div>
            <img
  src="/anartlogo.png"
  alt="Logo"
  className="w-auto h-[45px] object-contain"
 />

            <span className="leaf-divider block mt-5" />

            <p className="mt-4 text-sm leading-8 text-[var(--text-on-dark-muted)] max-w-[300px]">
              Authentic Ayurvedic, herbal and Shilajit wellness — sourced with
              care, checked for quality, and made for everyday well-being.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[var(--accent)] transition"
              >
                <IconBrandInstagram size={17} />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[var(--accent)] transition"
              >
                <IconBrandFacebook size={17} />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[var(--accent)] transition"
              >
                <IconBrandYoutube size={17} />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[var(--accent)] transition"
              >
                <IconBrandWhatsapp size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent-light)] mb-6">
              Shop
            </h4>

            <ul className="space-y-4 text-[var(--text-on-dark-muted)] text-sm">
              <li>
                <Link href="/products" className="hover:text-white transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories/ayurvedic-products" className="hover:text-white transition">
                  Ayurvedic Products
                </Link>
              </li>
              <li>
                <Link href="/categories/shilajit" className="hover:text-white transition">
                  Shilajit
                </Link>
              </li>
              <li>
                <Link href="/categories/herbal-wellness" className="hover:text-white transition">
                  Herbal Wellness
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="hover:text-white transition">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-white transition">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent-light)] mb-6">
              Customer Care
            </h4>

            <ul className="space-y-4 text-[var(--text-on-dark-muted)] text-sm">
              <li>
                <Link href="/contact-us" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping-delivery" className="hover:text-white transition">
                  Shipping &amp; Delivery
                </Link>
              </li>
              <li>
                <Link href="/return-refund" className="hover:text-white transition">
                  Returns &amp; Refunds
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-white transition">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  Help &amp; FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach us */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent-light)] mb-6">
              Reach Us
            </h4>

            <ul className="space-y-4 text-[var(--text-on-dark-muted)] text-sm">
              <li className="flex items-start gap-3">
                <IconMapPin size={18} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                <span>Anart Pharmacy, India</span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone size={16} className="shrink-0" style={{ color: "var(--accent)" }} />
                <span>+91 99999 99999</span>
              </li>
              <li className="flex items-center gap-3">
                <IconMail size={16} className="shrink-0" style={{ color: "var(--accent)" }} />
                <span>care@anartpharmacy.com</span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2 text-xs text-[var(--text-on-dark-muted)]">
              <IconLeaf size={14} style={{ color: "var(--gold)" }} />
              100% Herbal &amp; Quality Checked
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-sm text-[var(--text-on-dark-muted)]">
          <span>© 2026 Anart Pharmacy. All Rights Reserved.</span>
          <span>Powered by Ujjwal Household Pvt. Ltd.</span>
        </div>
      </div>
    </footer>
  );
}
