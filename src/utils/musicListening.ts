import type { Work } from "../data/works";
import { musicPages } from "./musicPagination";

type ListeningLink = { title: string; url: string; cover?: Work["cover"] };

export function musicListening(entries: Work[]) {
  const groups = [
    { id: "audio", label: "YouTube 音源", links: [] as ListeningLink[] },
    { id: "apple", label: "Apple Music", links: [] as ListeningLink[] },
    { id: "mv", label: "YouTube 官方 MV", links: [] as ListeningLink[] },
  ];
  const unresolved: { title: string; label: string; url: string }[] = [];
  const seen = groups.map(() => new Set<string>());
  // Flatten every page: this directory is independent of the visible Works page.
  for (const work of musicPages(entries).flat()) {
    const workKey = work.id || work.href || work.title;
    for (const link of [...(work.streamingLinks ?? []), ...(work.watchLinks ?? [])]) {
      if (!link.url) continue;
      let url: URL;
      try { url = new URL(link.url); } catch { continue; }
      if (!["https:", "http:"].includes(url.protocol)) continue;
      const youtube = ["youtube.com", "www.youtube.com", "music.youtube.com", "youtu.be"].includes(url.hostname);
      const mv = /(?:official|官方).*\bMV\b|\bMV\b.*(?:official|官方)/i.test(link.label);
      const audio = /音源|音樂版|官方音樂/.test(link.label) && !/\bMV\b/i.test(link.label);
      const index = url.hostname === "music.apple.com" ? 1 : youtube && mv ? 2 : youtube && audio ? 0 : -1;
      if (index < 0) {
        if (youtube) unresolved.push({ title: work.title, label: link.label, url: link.url });
        continue;
      }
      if (seen[index].has(workKey)) continue;
      seen[index].add(workKey);
      groups[index].links.push({ title: work.title, url: link.url, cover: work.cover });
    }
  }
  return { groups, unresolved };
}
