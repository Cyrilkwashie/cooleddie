"use client";

import { usePathname } from "next/navigation";
import { CategoryNav } from "@/components/layout/category-nav";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const isHome = usePathname() === "/";

  return (
    <div className="flex min-h-full flex-col bg-white">
      <TopBar />
      <Header />
      {isHome ? <CategoryNav /> : null}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
