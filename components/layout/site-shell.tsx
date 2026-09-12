"use client";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { TopBar } from "@/components/layout/top-bar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col overflow-x-clip bg-white">
      <TopBar />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
