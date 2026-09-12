import Link from "next/link";
import type { ProductDetail as ProductDetailType } from "@/lib/product";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { ProductTabs } from "@/components/product/product-tabs";
import { RelatedProducts } from "@/components/product/related-products";
import { SpecHighlights } from "@/components/product/spec-highlights";

export function ProductDetail({ product }: { product: ProductDetailType }) {
  return (
    <>
      <div className="container-cd pt-5 md:pt-6">
        <nav aria-label="Breadcrumb" className="text-[12.5px] text-[#8b909a]">
          <ol className="flex flex-wrap items-center gap-1.5">
            {product.breadcrumbs.map((crumb, i) => {
              const last = i === product.breadcrumbs.length - 1;
              return (
                <li key={crumb.label} className="inline-flex items-center gap-1.5">
                  {i > 0 ? <span className="text-[#c5c7cb]">›</span> : null}
                  {crumb.href && !last ? (
                    <Link href={crumb.href} className="hover:text-cd-ink">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className={last ? "text-cd-ink" : undefined}>{crumb.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="grid items-start gap-8 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-8">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
      <SpecHighlights product={product} />
      <ProductTabs product={product} />
      <RelatedProducts products={product.related} />
    </>
  );
}
