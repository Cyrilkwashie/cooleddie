export const officialPhotos = {
  ps5: "/images/ps5-hero.png",
  iphones: "/images/iphones-hero.png",
  iphonesWide: "/images/iphones-hero-wide.png",
  iphonesLineup: "/images/iphones-lineup.png",
  macbooks: "/images/macbooks-hero.png",
  ipad: "/images/ipad-hero.png",
  accessories: "/images/accessories-hero.png",
} as const;

const officialSet = new Set<string>(Object.values(officialPhotos));

export function isOfficialPhoto(src: string) {
  return officialSet.has(src);
}

export function photoClass(_src: string, cover: string, _contain?: string) {
  return cover;
}
