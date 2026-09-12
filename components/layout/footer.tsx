import Link from "next/link";
import { footerColumns } from "@/lib/data";
import {
  SocialFacebook,
  SocialInstagram,
  SocialTikTok,
  SocialX,
  SocialYouTube,
} from "@/components/ui/icons";

const socials = [
  { href: "https://instagram.com", label: "Instagram", Icon: SocialInstagram },
  { href: "https://tiktok.com", label: "TikTok", Icon: SocialTikTok },
  { href: "https://x.com", label: "X", Icon: SocialX },
  { href: "https://facebook.com", label: "Facebook", Icon: SocialFacebook },
  { href: "https://youtube.com", label: "YouTube", Icon: SocialYouTube },
];

export function Footer() {
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
            {socials.map(({ href, label, Icon }) => (
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
