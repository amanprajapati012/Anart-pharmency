"use client";

import Link from "next/link";

import Logo from "@/src/components/common/Logo";
import {
  IconArrowLeft,
  IconChevronRight,
  IconX,
  IconUser,
  IconPackage,
  IconHeart,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandWhatsapp,
  IconLogin,
  IconLogout,
  IconLeaf,
  IconMedicineSyrup,
} from "@tabler/icons-react";

interface Props {
  user: any;
  logout: () => void;

  isDrawerOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;

  showCategories: boolean;
  setShowCategories: (value: boolean) => void;

  categories: string[];

  navLinks: {
    name: string;
    href: string;
  }[];
}

export default function MobileDrawer({
  user,
  logout,
  isDrawerOpen,
  setIsDrawerOpen,
  showCategories,
  setShowCategories,
  categories,
  navLinks,
}: Props) {
  return (
    <div
      className={`
        fixed
        inset-0
        z-[2000]
        md:hidden
        ${
          isDrawerOpen
            ? "visible"
            : "invisible"
        }
      `}
    >

      {/* OVERLAY */}

      <div
        className={`
          absolute
          inset-0
          bg-black/50
          backdrop-blur-sm
          transition-opacity
          duration-300
          ${
            isDrawerOpen
              ? "opacity-100"
              : "opacity-0"
          }
        `}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* DRAWER */}

      <div
        className={`
          absolute
          left-0
          top-0
          h-full
          w-[88%]
          bg-[var(--background)]
          shadow-2xl
          transform
          transition-transform
          duration-300
          flex
          flex-col
          ${
            isDrawerOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >

        {/* HEADER */}

        <div
          className="px-5 pt-6 pb-5"
          style={{ background: "var(--primary-dark)", color: "var(--text-on-dark)" }}
        >

          <div className="flex items-center justify-between">

            <div>
              <Logo variant="light" markSize={36} />

              <p className="text-xs mt-2" style={{ color: "var(--text-on-dark-muted)" }}>
                Herbal Wellness & Ayurvedic Store
              </p>

            </div>

            <button
              onClick={() => setIsDrawerOpen(false)}
              className="
                w-10
                h-10
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
              "
            >
              <IconX size={22} />
            </button>

          </div>

          {/* USER */}

          {user ? (
            <Link
              href="/account/profile"
              onClick={() => setIsDrawerOpen(false)}
              className="
                mt-6
                flex
                items-center
                gap-4
                rounded-2xl
                bg-white/10
                backdrop-blur
                p-4
              "
            >

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  overflow-hidden
                  bg-white/20
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                "
              >

                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  user?.name
                    ?.charAt(0)
                    ?.toUpperCase()
                )}

              </div>

              <div>

                <p className="text-xs text-[var(--text-on-dark-muted)]">
                  Welcome Back
                </p>

                <h3 className="font-semibold text-lg">
                  {user.name}
                </h3>

                <p className="text-xs text-[var(--text-on-dark-muted)]">
                  Manage your account
                </p>

              </div>

            </Link>
          ) : (
            <Link
              href="/auth/login"
              onClick={() => setIsDrawerOpen(false)}
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
                h-12
                rounded-xl
                bg-[var(--accent-light)]
                text-[var(--primary)]
                font-semibold
              "
            >
              <IconLogin size={18} />
              Login / Register
            </Link>
          )}

        </div>

        {/* SCROLL AREA */}

        <div className="flex-1 overflow-y-auto px-3 py-3">

          {!showCategories ? (
            <>

              {/* USER MENU */}

              {user && (
                <>

                  <Link
                    href="/account/profile"
                    onClick={() =>
                      setIsDrawerOpen(false)
                    }
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      px-4
                      py-4
                      hover:bg-[var(--surface)]
                      transition
                    "
                  >
                    <IconUser size={22} />
                    <span className="font-medium">
                      My Profile
                    </span>
                  </Link>

                  <Link
                    href="/account/orders"
                    onClick={() =>
                      setIsDrawerOpen(false)
                    }
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      px-4
                      py-4
                      hover:bg-[var(--surface)]
                      transition
                    "
                  >
                    <IconPackage size={22} />

                    <span className="font-medium">
                      My Orders
                    </span>
                  </Link>

                  <Link
                    href="/wishlist"
                    onClick={() =>
                      setIsDrawerOpen(false)
                    }
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      px-4
                      py-4
                      hover:bg-[var(--surface)]
                      transition
                    "
                  >
                    <IconHeart size={22} />

                    <span className="font-medium">
                      Wishlist
                    </span>
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setIsDrawerOpen(false);
                    }}
                    className="
                      w-full
                      flex
                      items-center
                      gap-4
                      rounded-xl
                      px-4
                      py-4
                      hover:bg-red-50
                      text-red-600
                      transition
                    "
                  >
                    <IconLogout size={22} />

                    <span className="font-medium">
                      Logout
                    </span>
                  </button>

                  <div className="my-3 border-t border-[var(--border)]" />

                </>
              )}

              {/* CATEGORIES */}

              <button
                onClick={() =>
                  setShowCategories(true)
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-4
                  hover:bg-[var(--surface)]
                  transition
                  font-semibold
                  text-[var(--primary)]
                "
              >

                <span className="flex items-center gap-3">

                  <IconMedicineSyrup size={22} />

                  Shop By Categories

                </span>

                <IconChevronRight size={20} />

              </button>

              {/* NAV LINKS */}

              <div className="mt-2 space-y-1">

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() =>
                      setIsDrawerOpen(false)
                    }
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-4
                      text-[15px]
                      font-medium
                      text-[var(--foreground)]
                      hover:bg-[var(--surface)]
                      transition
                    "
                  >

                    {link.name}

                    <IconChevronRight
                      size={18}
                    />

                  </Link>
                ))}

              </div>

              {/* EXTRA PHARMACY LINKS */}

              <div className="mt-3 border-t border-[var(--border)] pt-3">

                <Link
                  href="/support"
                  onClick={() =>
                    setIsDrawerOpen(false)
                  }
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-4
                    font-medium
                    hover:bg-[var(--surface)]
                  "
                >
                  Customer Support
                  <IconChevronRight size={18} />
                </Link>

                <Link
                  href="/about"
                  onClick={() =>
                    setIsDrawerOpen(false)
                  }
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-4
                    font-medium
                    hover:bg-[var(--surface)]
                  "
                >
                  About Our Store
                  <IconChevronRight size={18} />
                </Link>

              </div>

            </>
          ) : (

            /* CATEGORY SCREEN */

            <>

              <button
                onClick={() =>
                  setShowCategories(false)
                }
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-4
                  font-semibold
                  hover:bg-[var(--surface)]
                  transition
                "
              >
                <IconArrowLeft size={20} />
                Back
              </button>

              <div className="mt-2 space-y-1">

                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/categories/${encodeURIComponent(cat)}`}
                    onClick={() => {
                      setIsDrawerOpen(false);
                      setShowCategories(false);
                    }}
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-4
                      text-[15px]
                      hover:bg-[var(--surface)]
                      transition
                    "
                  >

                    <span>
                      {cat}
                    </span>

                    <IconChevronRight
                      size={18}
                    />

                  </Link>
                ))}

              </div>

            </>

          )}

        </div>

        {/* BOTTOM */}

        <div
          className="
            border-t
            border-[var(--border)]
            px-5
            py-5
            bg-[var(--surface)]
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[2px]
              text-gray-500
              font-semibold
              mb-4
            "
          >
            Follow Us
          </p>

          <div className="flex items-center justify-between">

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11
                h-11
                rounded-full
                bg-[var(--surface-2)]
                flex
                items-center
                justify-center
              "
            >
              <IconBrandInstagram size={21} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11
                h-11
                rounded-full
                bg-[var(--surface-2)]
                flex
                items-center
                justify-center
              "
            >
              <IconBrandFacebook size={21} />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11
                h-11
                rounded-full
                bg-[var(--surface-2)]
                flex
                items-center
                justify-center
              "
            >
              <IconBrandYoutube size={21} />
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11
                h-11
                rounded-full
                bg-[var(--surface-2)]
                flex
                items-center
                justify-center
              "
            >
              <IconBrandWhatsapp size={21} />
            </a>

          </div>

          <div className="mt-5 text-center">

            <h3
              className="
                font-bold
                tracking-widest
                text-[var(--primary)]
              "
            >
              ANART PHARMACY
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              Ayurvedic • Herbal • Natural Wellness
            </p>

            <p className="text-[11px] text-gray-400 mt-3">
              © 2026 Anart Pharmacy. All Rights Reserved.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}