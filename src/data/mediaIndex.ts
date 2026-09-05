import { mediaItems, normalizeMediaItem, selectPublicMedia, type MediaLibraryItem } from "./mediaLibrary";
import { works, type Work } from "./works";

/** Derive from the original works; never persist copies in the manual catalog. */
export function musicMediaItems(entries: Work[]): MediaLibraryItem[] {
  return entries.filter((work) => work.category === "音樂").flatMap((work) => {
    const relatedId = work.id ?? work.href?.split("/").filter(Boolean).pop();
    const images = [...(work.images ?? [])];
    if (work.cover && !images.some((image) => image.src === work.cover?.src)) {
      // Match MusicWorkDetail's source fallback, without its media-URL fallback.
      const source = work.images?.[0]?.source ?? work.officialSources?.[0]?.displayName;
      const sourceUrl = work.images?.[0]?.sourceUrl ?? work.officialSources?.[0]?.url;
      images.unshift({ ...work.cover, source: source ?? "", sourceUrl: sourceUrl ?? "" });
    }
    return images.map((image) => ({
      id: `music:${relatedId ?? work.title}:${image.src}`,
      type: "image",
      date: work.releaseDate ?? work.date.replaceAll(".", "-"),
      category: "Music",
      album: work.title,
      relatedType: "work",
      relatedId,
      relatedTitle: work.title,
      visibility: "public",
      url: image.src,
      fileName: image.src.split("/").pop(),
      source: image.source || undefined,
      // Legacy work records may use the asset itself as attribution; do not publish that link.
      sourceUrl: image.sourceUrl && image.sourceUrl !== image.src && image.sourceUrl !== work.cover?.src ? image.sourceUrl : undefined,
      caption: image.alt,
    }));
  });
}

/** URL or explicit ID identifies a duplicate; filenames and storage keys do not. */
export function deduplicateMedia(items: MediaLibraryItem[]): MediaLibraryItem[] {
  const groups: { entries: MediaLibraryItem[]; keys: Set<string> }[] = [];
  const byKey = new Map<string, typeof groups[number]>();
  for (const item of items) {
    const url = item.url ?? item.imageUrl;
    const keys = [url ? `url:${url}` : undefined, item.id ? `id:${item.id}` : undefined].filter((key): key is string => !!key);
    const matches = [...new Set(keys.map((key) => byKey.get(key)).filter((group): group is typeof groups[number] => !!group))];
    const group = matches[0] ?? { entries: [], keys: new Set<string>() };
    if (!matches.length) groups.push(group);
    for (const other of matches.slice(1)) {
      group.entries.push(...other.entries);
      for (const key of other.keys) { group.keys.add(key); byKey.set(key, group); }
      groups.splice(groups.indexOf(other), 1);
    }
    group.entries.push(item);
    for (const key of keys) { group.keys.add(key); byKey.set(key, group); }
  }
  return groups.map((group) => {
    // A restricted/manual record must never be promoted to public by a derived duplicate.
    return group.entries.find((item) => item.visibility !== "public") ?? group.entries[0];
  });
}

/** Add future source adapters here, keeping both pages on the same aggregation path. */
export function buildMediaIndex(manual: MediaLibraryItem[], musicWorks: Work[]) {
  return deduplicateMedia([...manual, ...musicMediaItems(musicWorks)]).map(normalizeMediaItem);
}

const aggregatedMedia = buildMediaIndex(mediaItems, works);
export const mediaIndex = import.meta.env.DEV ? aggregatedMedia : [];
// Filter strictly after dedupe, then explicitly project only public fields.
export const publicMediaIndex = selectPublicMedia(aggregatedMedia);
