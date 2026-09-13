import type { Work } from "../data/works";

export const MUSIC_PAGE_SIZE = 7;

export function musicPages(entries: Work[]) {
  // Keep the existing string-date fallback and precision; never invent dates.
  const sorted = entries.filter((work) => work.category === "音樂")
    .sort((a, b) => (b.releaseDate || b.date).localeCompare(a.releaseDate || a.date));
  return Array.from({ length: Math.max(1, Math.ceil(sorted.length / MUSIC_PAGE_SIZE)) }, (_, index) =>
    sorted.slice(index * MUSIC_PAGE_SIZE, (index + 1) * MUSIC_PAGE_SIZE));
}

export function musicPageHref(page: number) {
  return `${page === 1 ? "/works" : `/works/music/page/${page}`}#music-heading`;
}
