export function headerBadges(pathname: string): { wishlist: number; cart: number } {
  if (pathname.startsWith("/cart")) return { wishlist: 0, cart: 4 };
  if (pathname.startsWith("/checkout")) return { wishlist: 2, cart: 4 };
  if (
    pathname.startsWith("/products") ||
    pathname.startsWith("/search") ||
    pathname.startsWith("/trade-in") ||
    pathname.startsWith("/sell") ||
    pathname.startsWith("/support")
  ) {
    return { wishlist: 3, cart: 2 };
  }
  return { wishlist: 0, cart: 0 };
}

export function isShopNavActive(pathname: string) {
  return (
    pathname === "/shop" ||
    pathname.startsWith("/shop/") ||
    pathname.startsWith("/products") ||
    pathname.startsWith("/cart") ||
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/search")
  );
}
