"use client";

import Link from "next/link";
import { IconMenu2 } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  categories: string[];
  navLinks: {
    name: string;
    href: string;
  }[];
}

export default function DesktopNav({ categories, navLinks }: Props) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [hoverOpen, setHoverOpen] = useState(false);

  return (
    <nav
      className="hidden lg:flex w-full border-t"
      style={{ background: "var(--background)", borderColor: "var(--border)" }}
    >
      {/* CATEGORY BUTTON */}
      <div
        className="relative w-[280px] shrink-0"
        onMouseEnter={() => {
          if (!isHome) setHoverOpen(true);
        }}
        onMouseLeave={() => {
          if (!isHome) setHoverOpen(false);
        }}
      >
        <button
          className="w-full h-[60px] flex items-center gap-3 px-6 text-[13px] font-bold uppercase tracking-wide"
          style={{ background: "var(--primary)", color: "var(--text-on-dark)" }}
        >
          <IconMenu2 size={19} />
          Shop By Categories
        </button>

        {/* CATEGORY DROPDOWN */}
        {!isHome && hoverOpen && (
          <div
            className="absolute top-full left-0 w-full border shadow-xl z-50"
            style={{ background: "var(--input-bg)", borderColor: "var(--border)" }}
          >
            {categories.length > 0 ? (
              categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${encodeURIComponent(cat)}`}
                  className="block px-6 py-4 text-[14px] font-medium border-b transition hover:bg-[var(--surface)]"
                  style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                >
                  {cat}
                </Link>
              ))
            ) : (
              <div className="px-6 py-4 text-sm text-gray-500">
                No categories available
              </div>
            )}
          </div>
        )}
      </div>

      {/* RIGHT NAVIGATION */}
      <div className="flex-1 h-[60px] flex items-center justify-around">
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="h-full flex items-center px-5 text-[14px] font-semibold transition relative"
              style={{ color: active ? "var(--accent)" : "var(--foreground)" }}
            >
              {link.name}
              {active && (
                <span
                  className="absolute bottom-0 left-3 right-3 h-[2.5px] rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
