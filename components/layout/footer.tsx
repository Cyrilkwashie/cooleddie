"use client";

import Link from "next/link";
import { useState } from "react";
import { footerColumns } from "@/lib/data";
import {
  SocialFacebook,
  SocialInstagram,
  SocialTikTok,
  SocialYouTube,
} from "@/components/ui/icons";

const socials = [
  { href: "https://instagram.com", label: "Instagram", Icon: SocialInstagram },
  { href: "https://tiktok.com", label: "TikTok", Icon: SocialTikTok },
  { href: "https://facebook.com", label: "Facebook", Icon: SocialFacebook },
  { href: "https://youtube.com", label: "YouTube", Icon: SocialYouTube },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="mt-3 text-[13px] text-[#d5d6d8]">You&apos;re subscribed.</p>;
  }

  return (
    <form
      className="mt-3 flex max-w-[320px] items-center gap-2"
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
        placeholder="Email address"
        className="h-12 min-w-0 flex-1 rounded-full bg-white px-4 text-[13px] text-cd-ink outline-none placeholder:text-[#9aa0a8]"
      />
      <button type="submit" className="btn btn-primary shrink-0 bg-white text-cd-ink hover:bg-[#f3f4f6]">
        Join
      </button>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="bg-cd-black text-white">
      <div className="container-cd grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr] lg:gap-12 lg:py-12">
        <div className="max-w-[300px] sm:col-span-2 lg:col-span-1">
          <Link href="/" className="font-display text-[26px] font-semibold tracking-[-0.04em]">
            Cooleddie
          </Link>
          <p className="mt-3 text-[13.5px] leading-6 text-[#b4b6ba]">
            Phones, laptops, consoles and accessories. New and used. Always genuine.
          </p>
          <div className="mt-4 flex items-center gap-2 text-[#d5d6d8]">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="mt-5 text-[13px] font-medium">Get deal alerts</p>
          <NewsletterForm />
        </div>

        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-[14px] font-semibold">{col.title}</h3>
            <ul className="space-y-2 text-[13.5px] text-[#c4c6ca]">
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
        <div className="container-cd flex flex-col gap-2 py-4 text-[12px] text-[#9ea1a6] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 Cooleddie</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
          <p>Accra, Ghana</p>
        </div>
      </div>
    </footer>
  );
}
