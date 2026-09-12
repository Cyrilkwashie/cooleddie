"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ShopProductCard } from "@/components/shop/shop-product-card";
import { formatGhc } from "@/lib/shop";
import {
  SEARCH_RESULT_COUNT,
  searchBrands,
  searchCategories,
  searchChips,
  searchColors,
  searchConditions,
  searchModels,
  searchProducts,
  searchStorage,
} from "@/lib/search";
import { IconChevron } from "@/components/ui/icons";

export function SearchResults() {
  const [chip, setChip] = useState("all");
  const [cats, setCats] = useState<string[]>(["iphones"]);
  const [models, setModels] = useState<string[]>([]);
  const [conditions, setConditions] = useState<string[]>([]);
  const [storage, setStorage] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>(["Apple"]);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [sort, setSort] = useState("relevance");
  const [page, setPage] = useState(1);

  function toggle(list: string[], value: string, set: (v: string[]) => void) {
    set(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
  }

  function clearAll() {
    setChip("all");
    setCats(["iphones"]);
    setModels([]);
    setConditions([]);
    setStorage([]);
    setColors([]);
    setBrands(["Apple"]);
    setMaxPrice(50000);
    setSort("relevance");
    setPage(1);
  }

  const filtered = useMemo(() => {
    let list = searchProducts.filter((p) => {
      const chipOk =
        chip === "all" ||
        p.chip === chip ||
        (chip === "accessories" && p.chip !== "iphones");
      const defaultCats = cats.length === 1 && cats[0] === "iphones";
      const catOk =
        defaultCats ||
        cats.length === 0 ||
        cats.includes(p.chip) ||
        cats.includes(p.category);
      const modelOk = models.length === 0 || (p.model ? models.includes(p.model) : models.includes("others"));
      const condOk = conditions.length === 0 || conditions.includes(p.condition);
      const storageOk = storage.length === 0 || (p.storage ? storage.includes(p.storage) : false);
      const colorOk = colors.length === 0 || (p.color ? colors.includes(p.color) : false);
      const brandOk = brands.length === 0 || brands.includes(p.brand) || (brands.includes("Others") && p.brand !== "Apple");
      const priceOk = p.price <= maxPrice;
      return chipOk && catOk && modelOk && condOk && storageOk && colorOk && brandOk && priceOk;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [brands, cats, chip, colors, conditions, maxPrice, models, sort, storage]);

  const pages = [1, 2, 3, 4, 5];

  return (
    <section className="container-cd py-6 md:py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#f0f1f3] pb-4">
        <div className="flex flex-wrap gap-2">
          {searchChips.map((item) => {
            const active = chip === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setChip(item.id);
                  setPage(1);
                }}
                className={`h-9 rounded-full px-3.5 text-[13px] ${
                  active
                    ? "bg-cd-blue font-medium text-white"
                    : "border border-[#e8e9ec] bg-white text-[#3f4450] hover:border-cd-ink"
                }`}
              >
                {item.label} ({item.count})
              </button>
            );
          })}
        </div>
        <label className="inline-flex items-center gap-2 text-[13.5px] text-cd-ink">
          Sort by
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none rounded-full border border-[#e5e6ea] bg-white py-2 pl-3 pr-8 text-[13.5px] outline-none"
            >
              <option value="relevance">Relevance</option>
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

      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[16px] font-semibold">Filters</h2>
            <button type="button" onClick={clearAll} className="text-[13px] text-cd-muted hover:text-cd-ink">
              Clear all
            </button>
          </div>

          <FilterGroup title="Category">
            {searchCategories.map((item) => (
              <CheckRow
                key={item.id}
                label={`${item.label} (${item.count})`}
                checked={cats.includes(item.id)}
                onChange={() => toggle(cats, item.id, setCats)}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Model">
            {searchModels.map((item) => (
              <CheckRow
                key={item.id}
                label={`${item.label} (${item.count})`}
                checked={models.includes(item.id)}
                onChange={() => toggle(models, item.id, setModels)}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Condition">
            {searchConditions.map((item) => (
              <CheckRow
                key={item.id}
                label={`${item.label} (${item.count})`}
                checked={conditions.includes(item.id)}
                onChange={() => toggle(conditions, item.id, setConditions)}
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

          <FilterGroup title="Storage">
            {searchStorage.map((item) => (
              <CheckRow
                key={item.id}
                label={`${item.label} (${item.count})`}
                checked={storage.includes(item.id)}
                onChange={() => toggle(storage, item.id, setStorage)}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Color">
            <div className="flex flex-wrap gap-2 pt-1">
              {searchColors.map((c) => {
                const selected = colors.includes(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    aria-label={c.label}
                    onClick={() => toggle(colors, c.id, setColors)}
                    className={`flex h-[26px] w-[26px] items-center justify-center rounded-full ${
                      selected ? "ring-1 ring-cd-ink" : ""
                    }`}
                  >
                    <span
                      className="h-[18px] w-[18px] rounded-full border border-black/10"
                      style={{ backgroundColor: c.hex }}
                    />
                  </button>
                );
              })}
            </div>
          </FilterGroup>

          <FilterGroup title="Brand">
            {searchBrands.map((item) => (
              <CheckRow
                key={item.id}
                label={`${item.label} (${item.count})`}
                checked={brands.includes(item.id)}
                onChange={() => toggle(brands, item.id, setBrands)}
              />
            ))}
          </FilterGroup>
        </aside>

        <div>
          {filtered.length === 0 ? (
            <p className="rounded-2xl bg-cd-soft px-6 py-12 text-center text-cd-muted">
              No products match those filters.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4 xl:grid-cols-4 lg:grid-cols-3">
              {filtered.map((product) => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[13px] text-[#8b909a]">
              Showing 1–{Math.min(filtered.length, 12)} of {SEARCH_RESULT_COUNT} products
            </p>
            <nav className="flex items-center gap-1" aria-label="Pagination">
              <button
                type="button"
                aria-label="Previous page"
                onClick={() => setPage((n) => Math.max(1, n - 1))}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#8b909a] hover:bg-cd-soft"
              >
                ‹
              </button>
              {pages.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-[13px] ${
                    page === n ? "bg-cd-blue font-semibold text-white" : "text-[#3f4450] hover:bg-cd-soft"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                aria-label="Next page"
                onClick={() => setPage((n) => Math.min(5, n + 1))}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#8b909a] hover:bg-cd-soft"
              >
                ›
              </button>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
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
    <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[#4b5060]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 rounded border-[#c5c8ce] accent-cd-ink"
      />
      {label}
    </label>
  );
}
