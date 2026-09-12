import Link from "next/link";
import {
  allProductsMenu,
  gamingMenu,
  navLinks,
} from "@/lib/data";
import { IconChevron, IconMenu } from "@/components/ui/icons";

export function CategoryNav({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  if (mobile) {
    return (
      <nav className="flex flex-col gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={onNavigate}
            className="rounded-xl px-2 py-2.5 text-[15px] font-medium text-cd-ink hover:bg-cd-soft"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="hidden border-b border-[#f0f1f3] bg-white lg:block">
      <div className="container-cd flex h-[46px] items-center justify-between gap-4 text-[13.5px] text-[#3f4450]">
        {navLinks.map((link) => {
          const menu =
            link.label === "All Products"
              ? allProductsMenu
              : link.label === "Gaming"
                ? gamingMenu
                : null;

          return (
            <div key={link.label} className="group relative">
              <Link
                href={link.href}
                className="inline-flex items-center gap-1.5 py-2 hover:text-cd-ink"
              >
                {"icon" in link && link.icon === "menu" ? (
                  <IconMenu size={15} />
                ) : null}
                {link.label}
                {"hasMenu" in link && link.hasMenu ? (
                  <IconChevron size={12} className="translate-y-px opacity-70" />
                ) : null}
              </Link>
              {menu ? (
                <div className="invisible absolute left-0 top-full z-20 min-w-[180px] translate-y-1 rounded-xl border border-cd-line bg-white p-2 opacity-0 shadow-[0_12px_30px_rgba(15,18,22,0.08)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {menu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-[13px] hover:bg-cd-soft"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
