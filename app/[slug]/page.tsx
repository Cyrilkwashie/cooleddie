import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/ui/placeholder-page";
import { placeholderPages } from "@/lib/data";

export function generateStaticParams() {
  return Object.keys(placeholderPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = placeholderPages[slug];
  if (!page) return {};
  return { title: page.title, description: page.description };
}

export default async function CatalogPlaceholder({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = placeholderPages[slug];
  if (!page) notFound();
  return <PlaceholderPage title={page.title} description={page.description} />;
}
