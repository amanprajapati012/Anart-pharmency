"use client";

import Link from "next/link";

import {
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconChevronDown,
  IconLeaf,
  IconShieldCheck,
} from "@tabler/icons-react";

import { useEffect, useRef, useState } from "react";

import { getImageUrl } from "@/src/lib/image";
import API from "@/src/lib/api";
import Logo from "@/src/components/common/Logo";

interface Props {
  user: any;
  logout: () => void;
  cartItems: any[];
  setShowSearch: (value: boolean) => void;
  setIsDrawerOpen: (value: boolean) => void;
}

export default function TopBar({
  user,
  logout,
  cartItems,
  setShowSearch,
  setIsDrawerOpen,
}: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setOpenSearch(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const value = query.trim();

      if (!value) {
        setResults([]);
        setOpenSearch(false);
        return;
      }

      try {
        setLoading(true);
        const slug = value.replace(/\s+/g, "-");
        const res = await API.get(`/search/${slug}`);
        setResults(res.data?.products || []);
        setOpenSearch(true);
      } catch (err) {
        console.log(err);
        setResults([]);
        setOpenSearch(false);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="w-full bg-[var(--background)]">
      {/* TRUST STRIP */}
      <div
        className="hidden lg:flex h-[36px] items-center justify-center gap-10 text-[11px] font-medium tracking-wide"
        style={{ background: "var(--primary-dark)", color: "var(--text-on-dark)" }}
      >
        <span className="flex items-center gap-2">
          <IconLeaf size={14} style={{ color: "var(--gold)" }} />
          100% Herbal Wellness
        </span>
        <span className="opacity-70">|</span>
        <span>Ayurvedic &amp; Natural Products</span>
        <span className="opacity-70">|</span>
        <span className="flex items-center gap-2">
          <IconShieldCheck size={14} style={{ color: "var(--gold)" }} />
          Quality Checked Products
        </span>
        <span className="opacity-70">|</span>
        <span>Secure Online Shopping</span>
      </div>

      {/* MAIN HEADER */}
      <div
        className="flex items-center justify-between h-[76px] lg:h-[98px] w-full border-b px-4 lg:px-0"
        style={{ borderColor: "var(--border)" }}
      >
        {/* LOGO / BRAND */}
        <Link
          href="/"
          className="w-auto lg:w-[280px] h-full flex items-center justify-center lg:justify-start lg:border-r lg:pl-6"
          style={{ borderColor: "var(--border)" }}
        >
          <Logo markSize={44} />
        </Link>

        {/* SEARCH */}
        <div ref={searchRef} className="hidden lg:flex flex-1 px-10 relative">
          <div
            className="w-full h-[54px] flex rounded-full overflow-hidden border shadow-sm"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <button
              className="w-[180px] flex items-center justify-center gap-2 font-medium border-r"
              style={{ color: "var(--foreground)", borderColor: "var(--border)" }}
            >
              All Products
              <IconChevronDown size={16} />
            </button>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => query && setOpenSearch(true)}
              placeholder="Search Ayurvedic, Herbal, Shilajit..."
              className="flex-1 px-6 outline-none bg-transparent text-[14px]"
              style={{ color: "var(--foreground)" }}
            />

            <button
              className="w-[64px] flex items-center justify-center transition"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              <IconSearch size={20} />
            </button>
          </div>

          {/* SEARCH RESULTS */}
          {openSearch && (
            <div
              className="absolute top-[62px] left-10 right-10 rounded-2xl border shadow-xl overflow-hidden z-[999]"
              style={{ background: "var(--input-bg)", borderColor: "var(--border)" }}
            >
              {loading ? (
                <div className="p-5 text-center text-sm">Searching products...</div>
              ) : results.length === 0 ? (
                <div className="p-5 text-center text-sm">No products found</div>
              ) : (
                <div className="max-h-[350px] overflow-y-auto">
                  {results.map((product: any) => (
                    <Link
                      key={product._id}
                      href={`/product/${product._id}`}
                      onClick={() => {
                        setOpenSearch(false);
                        setQuery("");
                      }}
                      className="flex gap-3 p-3 border-b transition hover:bg-[var(--surface)]"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <img
                        src={getImageUrl(product.images?.[0])}
                        alt={product.product_name || product.name}
                        className="w-14 h-14 rounded-lg object-cover"
                        style={{ background: "var(--surface)" }}
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">
                          {product.product_name || product.name}
                        </h4>

                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold" style={{ color: "var(--accent)" }}>
                            ₹{product.discountedPrice || product.price}
                          </span>

                          {product.discountedPrice && product.price && (
                            <span className="line-through text-xs text-gray-500">
                              ₹{product.price}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* DESKTOP ACCOUNT + CART */}
        <div className="hidden lg:flex items-center gap-8 px-8 shrink-0">
          {user ? (
            <Link href="/account/profile" className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-bold overflow-hidden"
                style={{ background: "var(--primary)", color: "var(--text-on-dark)" }}
              >
                {user.profileImage ? (
                  <img src={user.profileImage} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  user.name?.charAt(0)?.toUpperCase()
                )}
              </div>

              <div>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Welcome</p>
                <p className="font-semibold whitespace-nowrap">{user.name}</p>
              </div>
            </Link>
          ) : (
            <Link href="/auth/login" className="flex items-center gap-2">
              <IconUser size={24} />
              <div>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Welcome</p>
                <p className="font-semibold">Login / Register</p>
              </div>
            </Link>
          )}

          {/* CART */}
          <Link href="/cart" className="relative">
            <IconShoppingCart size={28} />
            <span
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {cartItems.length > 9 ? "9+" : cartItems.length}
            </span>
          </Link>
        </div>

        {/* MOBILE */}
        <div className="flex lg:hidden items-center gap-4 px-2 shrink-0">
          <button onClick={() => setShowSearch(true)}>
            <IconSearch size={24} />
          </button>

          <Link href="/cart" className="relative">
            <IconShoppingCart size={26} />
            <span
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {cartItems.length > 9 ? "9+" : cartItems.length}
            </span>
          </Link>

          <button onClick={() => setIsDrawerOpen(true)}>
            <IconMenu2 size={27} />
          </button>
        </div>
      </div>

      {/* MOBILE PHARMACY TAGLINE */}
      <div
        className="lg:hidden h-[32px] flex items-center justify-center text-[10px] font-semibold tracking-wide"
        style={{ background: "var(--surface)", color: "var(--primary)" }}
      >
        AYURVEDIC • HERBAL • SHILAJIT • WELLNESS
      </div>
    </div>
  );
}
