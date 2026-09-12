"use client";

import { useMemo, useState, type ReactNode } from "react";
import { ShopProductCard } from "@/components/shop/shop-product-card";
import { MobileFilterDrawer } from "@/components/ui/mobile-filter-drawer";
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
  const [filtersOpen, setFiltersOpen] = useState(false);

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
        <div className="flex w-full flex-wrap gap-2 lg:w-auto">
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
                className={`h-12 rounded-full px-4 text-[13.5px] ${
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
      </div>

      <MobileFilterDrawer
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        onClear={clearAll}
      >
        <SearchFilters
          cats={cats}
          setCats={setCats}
          models={models}
          setModels={setModels}
          conditions={conditions}
          setConditions={setConditions}
          storage={storage}
          setStorage={setStorage}
          colors={colors}
          setColors={setColors}
          brands={brands}
          setBrands={setBrands}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          toggle={toggle}
        />
      </MobileFilterDrawer>

      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[16px] font-semibold">Filters</h2>
            <button type="button" onClick={clearAll} className="text-[13px] text-cd-muted hover:text-cd-ink">
              Clear all
            </button>
          </div>
          <SearchFilters
            cats={cats}
            setCats={setCats}
            models={models}
            setModels={setModels}
            conditions={conditions}
            setConditions={setConditions}
            storage={storage}
            setStorage={setStorage}
            colors={colors}
            setColors={setColors}
            brands={brands}
            setBrands={setBrands}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            toggle={toggle}
          />
        </aside>

        <div>
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

          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[13px] text-[#8b909a]">
              Showing 1–{Math.min(filtered.length, 12)} of {SEARCH_RESULT_COUNT} products
            </p>
            <nav className="flex items-center gap-1" aria-label="Pagination">
              <button
                type="button"
                aria-label="Previous page"
                onClick={() => setPage((n) => Math.max(1, n - 1))}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#8b909a] hover:bg-cd-soft"
              >
                ‹
              </button>
              {pages.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-[13px] ${
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
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#8b909a] hover:bg-cd-soft"
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

type FilterToggle = (list: string[], value: string, set: (v: string[]) => void) => void;

function SearchFilters({
  cats,
  setCats,
  models,
  setModels,
  conditions,
  setConditions,
  storage,
  setStorage,
  colors,
  setColors,
  brands,
  setBrands,
  maxPrice,
  setMaxPrice,
  toggle,
}: {
  cats: string[];
  setCats: (v: string[]) => void;
  models: string[];
  setModels: (v: string[]) => void;
  conditions: string[];
  setConditions: (v: string[]) => void;
  storage: string[];
  setStorage: (v: string[]) => void;
  colors: string[];
  setColors: (v: string[]) => void;
  brands: string[];
  setBrands: (v: string[]) => void;
  maxPrice: number;
  setMaxPrice: (v: number) => void;
  toggle: FilterToggle;
}) {
  return (
    <>
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
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
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
    </>
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
