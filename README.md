# Cooleddie

E-commerce storefront for **Cooleddie** — a Ghana-based shop (prices in GHS) for new and used phones, laptops, gaming consoles, and accessories. Primary focus: iPhones, plus MacBooks, PS5s, Apple gadgets, and accessories.

This repo currently ships a pixel-faithful homepage and a shared layout/design system so additional catalog pages can reuse the same look.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Inter, Plus Jakarta Sans, and Caveat (handwritten annotations)

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Routes

| Path | Status |
| --- | --- |
| `/` | Homepage (all marketing sections) |
| `/products`, `/phones`, `/laptops`, `/gaming`, `/apple`, `/accessories`, `/new-arrivals`, `/deals`, `/trade-in` | Placeholder catalog pages |
| `/account`, `/wishlist`, `/cart`, `/track-order`, `/support`, `/about`, `/careers`, `/faq`, `/warranty`, `/privacy`, `/terms` | Placeholder utility pages |

Nav and footer links already point at these routes.

## Design tokens

Tokens live in `app/globals.css` as CSS variables and Tailwind theme colors (`bg-cd-black`, `text-cd-blue`, etc.).

| Token | Value | Use |
| --- | --- | --- |
| `--cd-black` | `#0c0e10` | Top bar, hero, trade-in, footer, ink buttons |
| `--cd-ink` | `#111111` | Primary text, logo |
| `--cd-body` / `--cd-muted` | `#4b4f57` / `#6b7280` | Body copy |
| `--cd-soft` | `#f4f5f7` | Search field, category circles, product wells |
| `--cd-blue` | `#3b6bff` | Highlighted headline words, cart badge |
| `--cd-beige` | `#f4efe6` | Apple gadgets bento card |
| `--cd-star` | `#f5b400` | Ratings |
| `--radius-pill` | `9999px` | CTAs, search, subscribe |
| `--radius-panel` | `28px` | Bento, banners, newsletter |

### UI patterns to reuse

- **Pill buttons** — `.pill` plus black/white/ghost variants
- **Circular category icons** — soft gray circles, product cutouts
- **Product cards** — status tag, image well, “From GHS” price, stars, square cart button
- **Handwritten notes** — `HandwrittenNote` (Caveat + SVG arrows) on hero, trade-in, and newsletter

Shared chrome (top bar, header, category nav, footer) is in `components/layout` via `SiteShell`. Homepage sections are in `components/home`. Add future pages under `app/` and they inherit the same shell automatically.
