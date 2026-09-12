"use client";

import { useMemo, useState } from "react";
import {
  SHOP_CATALOG_SIZE,
  filterBrands,
  filterCategories,
  filterConditions,
  formatGhc,
  shopCategories,
  shopProducts,
  type ShopProduct,
} from "@/lib/shop";
import { ShopProductCard } from "@/components/shop/shop-product-card";
import { MobileFilterDrawer } from "@/components/ui/mobile-filter-drawer";
import { IconChevron } from "@/components/ui/icons";

type Props = {
  category: string;
  query?: string;
};

export function ShopCatalog({ category, query = "" }: Props) {
  const [cats, setCats] = useState<string[]>(category !== "all" ? [category] : []);
  const [conditions, setConditions] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [sort, setSort] = useState("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  function toggle(list: string[], value: string, set: (v: string[]) => void) {
    set(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
  }

  function clearAll() {
    setCats(category !== "all" ? [category] : []);
    setConditions([]);
    setBrands([]);
    setMaxPrice(50000);
    setSort("featured");
  }

  const filtered = useMemo(() => {
    let list: ShopProduct[] = shopProducts.filter((p) => {
      const selected = cats.length ? cats : category === "all" ? [] : [category];
      const catOk =
        selected.length === 0 ||
        selected.some((slug) => {
          if (slug === "used") return p.condition === "Used";
          if (slug === "deals") return Boolean(p.compareAt || p.badge === "Sale");
          return p.category === slug;
        });
      const condOk = conditions.length === 0 || conditions.includes(p.condition);
      const brandOk = brands.length === 0 || brands.includes(p.brand);
      const priceOk = p.price <= maxPrice;
      const q = query.trim().toLowerCase();
      const searchOk =
        !q || `${p.name} ${p.specs} ${p.brand}`.toLowerCase().includes(q);
      return catOk && condOk && brandOk && priceOk && searchOk;
    });

    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [brands, cats, category, conditions, maxPrice, query, sort]);

  const showing = filtered.length;
  const unfiltered =
    cats.length === 0 &&
    conditions.length === 0 &&
    brands.length === 0 &&
    maxPrice === 50000 &&
    !query &&
    category === "all";

  const filterPanel = (
    <>
      <div className="mb-4 hidden items-center justify-between lg:flex">
        <h2 className="text-[16px] font-semibold">Filters</h2>
        <button
          type="button"
          onClick={clearAll}
          className="text-[13px] text-cd-muted hover:text-cd-ink"
        >
          Clear all
        </button>
      </div>

          <FilterGroup title="Category">
            {filterCategories.map((item) => (
              <CheckRow
                key={item.slug}
                label={`${item.label} (${item.count})`}
                checked={cats.includes(item.slug)}
                onChange={() => toggle(cats, item.slug, setCats)}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Condition">
            {filterConditions.map((item) => (
              <CheckRow
                key={item.slug}
                label={`${item.label} (${item.count})`}
                checked={conditions.includes(item.slug)}
                onChange={() => toggle(conditions, item.slug, setConditions)}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Price Range (GHC)">
            <input
              type="range"
              min={0}
              max={50000}
              step={100}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="mt-2 w-full accent-cd-ink"
            />
            <div className="mt-1 flex justify-between text-[12px] text-cd-subtle">
              <span>0</span>
              <span>{maxPrice >= 50000 ? "50,000+" : formatGhc(maxPrice)}</span>
            </div>
          </FilterGroup>

          <FilterGroup title="Brand">
            {filterBrands.map((item) => (
              <CheckRow
                key={item.slug}
                label={`${item.label} (${item.count})`}
                checked={brands.includes(item.slug)}
                onChange={() => toggle(brands, item.slug, setBrands)}
              />
            ))}
          </FilterGroup>
    </>
  );

  return (
    <section className="container-cd pb-10">
      <MobileFilterDrawer
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        onClear={clearAll}
      >
        {filterPanel}
      </MobileFilterDrawer>

      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden lg:block">{filterPanel}</aside>

        <div>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="font-display text-[24px] font-semibold tracking-[-0.03em] sm:text-[28px]">
                {shopCategories.find((c) => c.slug === category)?.label ??
                  "All Products"}
              </h2>
              <p className="mt-1 text-[13px] text-cd-subtle">
                {unfiltered
                  ? `Showing 1–12 of ${SHOP_CATALOG_SIZE} products`
                  : `Showing ${showing} of ${SHOP_CATALOG_SIZE} products`}
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="btn btn-outline px-5 text-[13.5px] lg:hidden"
            >
              Filters
            </button>
            <label className="inline-flex min-h-11 items-center gap-2 text-[13.5px] text-cd-ink">
              Sort by
              <span className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="h-12 appearance-none rounded-full border border-[#e5e6ea] bg-white py-2 pl-3 pr-8 text-[13.5px] outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <IconChevron
                  size={14}
                  className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-cd-muted"
                />
              </span>
            </label>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-2xl bg-cd-soft px-6 py-12 text-center text-cd-muted">
              No products match those filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 border-b border-[#f0f1f3] pb-5 last:border-b-0">
      <h3 className="mb-3 text-[13.5px] font-semibold">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex min-h-11 cursor-pointer items-center gap-2 text-[13px] text-[#4b5060]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-[#c5c8ce] accent-cd-ink"
      />
      {label}
    </label>
  );
}
