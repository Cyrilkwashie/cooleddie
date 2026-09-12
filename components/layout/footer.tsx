"use client";

import Link from "next/link";
import { useState } from "react";
import { footerColumns, storefrontFooterColumns } from "@/lib/data";
import {
  SocialFacebook,
  SocialInstagram,
  SocialTikTok,
  SocialX,
  SocialYouTube,
} from "@/components/ui/icons";

const homeSocials = [
  { href: "https://instagram.com", label: "Instagram", Icon: SocialInstagram },
  { href: "https://tiktok.com", label: "TikTok", Icon: SocialTikTok },
  { href: "https://x.com", label: "X", Icon: SocialX },
  { href: "https://facebook.com", label: "Facebook", Icon: SocialFacebook },
  { href: "https://youtube.com", label: "YouTube", Icon: SocialYouTube },
];

const storefrontSocials = [
  { href: "https://instagram.com", label: "Instagram", Icon: SocialInstagram },
  { href: "https://tiktok.com", label: "TikTok", Icon: SocialTikTok },
  { href: "https://youtube.com", label: "YouTube", Icon: SocialYouTube },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="mt-4 text-[13px] text-[#d5d6d8]">You&apos;re subscribed.</p>;
  }

  return (
    <form
      className="mt-4 flex items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="h-10 min-w-0 flex-1 rounded-full bg-white px-4 text-[13px] text-cd-ink outline-none placeholder:text-[#9aa0a8]"
      />
      <button
        type="submit"
        className="h-10 shrink-0 rounded-full bg-[#111] px-4 text-[13px] font-semibold text-white ring-1 ring-white/20 hover:bg-black"
      >
        Subscribe
      </button>
    </form>
  );
}

export function Footer({ variant = "home" }: { variant?: "home" | "storefront" }) {
  if (variant === "storefront") {
    return (
      <footer className="bg-cd-black text-white">
        <div className="container-cd grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr_1.25fr] lg:gap-8 lg:py-14">
          <div className="max-w-[260px]">
            <Link
              href="/"
              className="font-display text-[26px] font-semibold tracking-[-0.04em]"
            >
              Cooleddie
            </Link>
            <p className="mt-3 text-[13px] leading-6 text-[#b4b6ba]">
              Phones, Laptops, Consoles, Accessories. More.
            </p>
            <div className="mt-5 flex items-center gap-4 text-[#d5d6d8]">
              {storefrontSocials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {storefrontFooterColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-[14px] font-semibold">{col.title}</h3>
              <ul className="space-y-2.5 text-[13.5px] text-[#c4c6ca]">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-2 text-[14px] font-semibold">Subscribe to newsletter</h3>
            <p className="text-[13px] leading-5 text-[#b4b6ba]">
              Get the latest deals and updates.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-cd flex flex-col gap-2 py-5 text-[12px] text-[#9ea1a6] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2024 Cooleddie. All rights reserved.</p>
            <p className="sm:text-center">Buy Smart. Tech Better.</p>
            <p>Accra, Ghana</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-cd-black text-white">
      <div className="container-cd grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-16">
        <div className="max-w-sm">
          <Link
            href="/"
            className="font-display text-[28px] font-semibold tracking-[-0.04em]"
          >
            Cooleddie
          </Link>
          <p className="mt-4 max-w-[280px] text-[13.5px] leading-6 text-[#b4b6ba]">
            Your trusted source for phones, laptops, gaming consoles and more.
            New and used. Always genuine.
          </p>
          <div className="mt-6 flex items-center gap-4 text-[#d5d6d8]">
            {homeSocials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-[14px] font-semibold">{col.title}</h3>
            <ul className="space-y-2.5 text-[13.5px] text-[#c4c6ca]">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-cd flex flex-col gap-2 py-5 text-[12px] text-[#9ea1a6] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Cooleddie. All rights reserved.</p>
          <p>
            Designed for a smarter tomorrow.{" "}
            <span className="text-[#ff4d6d]">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
