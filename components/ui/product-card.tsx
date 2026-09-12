import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";
import { IconCart, IconStar } from "@/components/ui/icons";

const tagTone: Record<Product["tag"]["tone"], string> = {
  green: "bg-[#dcfce7] text-[#15803d]",
  red: "bg-[#fee2e2] text-[#dc2626]",
  amber: "bg-[#fef3c7] text-[#b45309]",
  purple: "bg-[#ede9fe] text-[#6d28d9]",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <Link
        href={product.href}
        className="relative mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-[22px] bg-cd-soft"
      >
        <span
          className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold ${tagTone[product.tag.tone]}`}
        >
          {product.tag.label}
        </span>
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={320}
          height={320}
          className="h-[72%] w-[72%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </Link>
      <Link href={product.href} className="text-[15px] font-semibold tracking-tight text-cd-ink">
        {product.name}
      </Link>
      <p className="mt-1 text-[13px] text-cd-muted">{product.price}</p>
      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center gap-1 text-cd-star">
          {Array.from({ length: 5 }).map((_, i) => (
            <IconStar key={i} size={13} />
          ))}
          <span className="ml-1 text-[12px] text-cd-subtle">
            {product.rating.toFixed(1)} ({product.reviews})
          </span>
        </div>
        <Link
          href="/cart"
          aria-label={`Add ${product.name} to cart`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#e4e4e7] text-cd-ink transition-colors hover:bg-cd-ink hover:text-white"
        >
          <IconCart size={16} />
        </Link>
      </div>
    </article>
  );
}
