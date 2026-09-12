"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  IconClose,
  IconHeart,
  IconMenu,
  IconSearch,
  IconUser,
} from "@/components/ui/icons";
import { CategoryNav } from "@/components/layout/category-nav";

export function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/products?q=${encodeURIComponent(q)}` : "/products");
    setOpen(false);
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
            className="hidden h-10 w-10 items-center justify-center rounded-full text-cd-ink hover:bg-cd-soft sm:inline-flex"
          >
            <IconHeart size={22} />
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-cd-ink hover:bg-cd-soft"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="20" r="1.15" fill="currentColor" stroke="none" />
              <circle cx="17" cy="20" r="1.15" fill="currentColor" stroke="none" />
              <path d="M3.5 5h2.1l1.55 11.2h11.1l1.7-8.2H7" />
            </svg>
            <span className="absolute right-1 top-1 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-cd-blue px-1 text-[9px] font-bold leading-none text-white">
              0
            </span>
          </Link>
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
