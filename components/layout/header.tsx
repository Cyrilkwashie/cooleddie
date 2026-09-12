"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { headerBadges, isShopNavActive } from "@/lib/chrome";
import { shopNav } from "@/lib/shop";
import {
  IconClose,
  IconHeart,
  IconMenu,
  IconSearch,
  IconUser,
} from "@/components/ui/icons";
import { CategoryNav } from "@/components/layout/category-nav";
import { StorefrontSearch } from "@/components/layout/storefront-search";

function IconBadges({ wishlist = 0, cart = 0 }: { wishlist?: number; cart?: number }) {
  return (
    <>
      <Link
        href="/account"
        aria-label="Account"
        className="hidden h-10 w-10 items-center justify-center rounded-full text-cd-ink hover:bg-cd-soft sm:inline-flex"
      >
        <IconUser size={22} />
      </Link>
      <Link
        href="/wishlist"
        aria-label="Wishlist"
        className="relative hidden h-10 w-10 items-center justify-center rounded-full text-cd-ink hover:bg-cd-soft sm:inline-flex"
      >
        <IconHeart size={22} />
        <span className="absolute right-1 top-1 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-cd-blue px-1 text-[9px] font-bold leading-none text-white">
          {wishlist}
        </span>
      </Link>
      <Link
        href="/cart"
        aria-label="Cart"
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-cd-ink hover:bg-cd-soft"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="9" cy="20" r="1.15" fill="currentColor" stroke="none" />
          <circle cx="17" cy="20" r="1.15" fill="currentColor" stroke="none" />
          <path d="M3.5 5h2.1l1.55 11.2h11.1l1.7-8.2H7" />
        </svg>
        <span className="absolute right-1 top-1 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-cd-blue px-1 text-[9px] font-bold leading-none text-white">
          {cart}
        </span>
      </Link>
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
    setOpen(false);
  }

  const shopActive = isShopNavActive(pathname);
  const badges = headerBadges(pathname);

  if (!isHome) {
    return (
      <header className="border-b border-[#f0f1f3] bg-white">
        <div className="container-cd flex h-[72px] items-center gap-5 lg:h-[78px] lg:gap-8">
          <Link
            href="/"
            className="shrink-0 font-display text-[26px] font-semibold tracking-[-0.04em] text-cd-ink md:text-[28px]"
          >
            Cooleddie
          </Link>

          <nav className="hidden items-center gap-5 text-[14px] text-[#3f4450] lg:flex">
            {shopNav.map((link) => {
              const active =
                link.href === "/shop"
                  ? shopActive
                  : link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-2 ${
                    active ? "font-semibold text-cd-ink" : "hover:text-cd-ink"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <span className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full bg-cd-blue" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <Suspense fallback={<div className="mx-auto hidden h-11 w-full max-w-[420px] flex-1 md:block" />}>
            <StorefrontSearch />
          </Suspense>

          <div className="ml-auto flex items-center gap-0.5">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden"
              aria-label="Search"
              onClick={() => setOpen(true)}
            >
              <IconSearch size={22} />
            </button>
            <IconBadges wishlist={badges.wishlist} cart={badges.cart} />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IconClose size={22} /> : <IconMenu size={22} />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-t border-cd-line bg-white px-5 py-4 lg:hidden">
            <div className="mb-4 md:hidden">
              <Suspense fallback={<div className="h-11" />}>
                <StorefrontSearch mobile />
              </Suspense>
            </div>
            <nav className="flex flex-col gap-1">
              {shopNav.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-2 py-2.5 text-[15px] font-medium hover:bg-cd-soft"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </header>
    );
  }

  return (
    <header className="border-b border-transparent bg-white">
      <div className="container-cd flex h-[72px] items-center gap-4 lg:h-[80px] lg:gap-8">
        <Link
          href="/"
          className="shrink-0 font-display text-[26px] font-semibold tracking-[-0.04em] text-cd-ink md:text-[28px]"
        >
          Cooleddie
        </Link>

        <form onSubmit={onSearch} className="relative mx-auto hidden w-full max-w-[640px] md:block">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for phones, laptops, consoles and more..."
            className="h-12 w-full rounded-full bg-[#f3f4f6] pl-5 pr-14 text-[14px] text-cd-ink outline-none placeholder:text-[#9aa0a8] focus:ring-2 focus:ring-cd-blue/20"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-1.5 top-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cd-ink text-white"
          >
            <IconSearch size={16} />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-cd-ink md:hidden"
            aria-label="Search"
            onClick={() => setOpen(true)}
          >
            <IconSearch size={22} />
          </button>
          <IconBadges wishlist={0} cart={0} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-cd-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-cd-line bg-white px-5 py-4 lg:hidden">
          <form onSubmit={onSearch} className="relative mb-4 md:hidden">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for phones, laptops, consoles and more..."
              className="h-12 w-full rounded-full bg-[#f3f4f6] pl-5 pr-14 text-[14px] outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1.5 top-1.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cd-ink text-white"
            >
              <IconSearch size={16} />
            </button>
          </form>
          <CategoryNav mobile onNavigate={() => setOpen(false)} />
        </div>
      ) : null}
    </header>
  );
}
