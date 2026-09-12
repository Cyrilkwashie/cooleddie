export const officialPhotos = {
  ps5: "/images/ps5-hero.png",
  iphones: "/images/iphones-hero.png",
  iphonesLineup: "/images/iphones-lineup.png",
  macbooks: "/images/macbooks-hero.png",
  ipad: "/images/ipad-hero.png",
  accessories: "/images/accessories-hero.png",
} as const;

const officialSet = new Set<string>(Object.values(officialPhotos));

export function isOfficialPhoto(src: string) {
  return officialSet.has(src);
}

export function photoClass(src: string, cover: string, contain: string) {
  return isOfficialPhoto(src) ? cover : contain;
}
