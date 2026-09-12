"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { IconClose, IconSearch } from "@/components/ui/icons";

export function StorefrontSearch({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();
  const params = useSearchParams();
  const router = useRouter();
  const urlQuery = pathname.startsWith("/search") ? (params.get("q") ?? "") : "";
  const [query, setQuery] = useState(urlQuery);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  function go(next: string) {
    const q = next.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        go(query);
      }}
      className={`relative ${mobile ? "" : "mx-auto hidden w-full max-w-[420px] flex-1 md:block"}`}
    >
      <IconSearch
        size={16}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa0a8]"
      />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for iPhones, MacBooks, PS5, accessories..."
        className={`h-12 w-full rounded-full bg-[#f3f4f6] pl-11 text-[13.5px] text-cd-ink outline-none placeholder:text-[#9aa0a8] focus:ring-2 focus:ring-cd-blue/20 md:h-11 ${
          query ? "pr-10" : "pr-4"
        }`}
      />
      {query ? (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => {
            setQuery("");
            if (pathname.startsWith("/search")) router.push("/search");
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9aa0a8] hover:text-cd-ink"
        >
          <IconClose size={14} />
        </button>
      ) : null}
    </form>
  );
}
