import type { Work } from "../data/works";
import { workDateKey } from "./workDisplay";

export const MUSIC_PAGE_SIZE = 7;

export function musicPages(entries: Work[]) {
  // Keep the existing release-date fallback and precision, normalizing separators only.
  const sorted = entries.filter((work) => work.category === "音樂")
    .sort((a, b) => workDateKey(b.releaseDate || b.date).localeCompare(workDateKey(a.releaseDate || a.date)));
  return Array.from({ length: Math.max(1, Math.ceil(sorted.length / MUSIC_PAGE_SIZE)) }, (_, index) =>
    sorted.slice(index * MUSIC_PAGE_SIZE, (index + 1) * MUSIC_PAGE_SIZE));
}

export function musicPageHref(page: number) {
  return `${page === 1 ? "/works" : `/works/music/page/${page}`}#music-heading`;
}
