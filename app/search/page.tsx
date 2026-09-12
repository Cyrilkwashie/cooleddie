import type { Metadata } from "next";
import { SearchHero } from "@/components/search/search-hero";
import { SearchResults } from "@/components/search/search-results";
import { SearchTrust } from "@/components/search/search-trust";

export const metadata: Metadata = {
  title: "Search Results",
  description: "Search iPhones, accessories, and more at Cooleddie.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return (
    <>
      <SearchHero query={q ?? "iPhone"} />
      <SearchResults />
      <SearchTrust />
    </>
  );
}
