export type LoungeMediaType = 'music' | 'stage' | 'trailer' | 'interview' | 'other';
export interface LoungeMedia {
  title: string;
  youtubeUrl: string;
  archiveUrl: string;
  type: LoungeMediaType;
}

/** Accept individual YouTube videos only; discard tracking parameters for deduplication. */
export function youtubeVideoUrl(raw?: string): string | undefined {
  if (!raw) return;
  let url: URL;
  try { url = new URL(raw); } catch { return; }
  if (url.protocol !== 'https:' || url.username || url.password || url.port) return;
  let id: string | null | undefined;
  if (url.hostname === 'youtu.be') id = /^\/([\w-]{11})\/?$/.exec(url.pathname)?.[1];
  else if (['youtube-nocookie.com', 'www.youtube-nocookie.com'].includes(url.hostname)) {
    id = /^\/embed\/([\w-]{11})\/?$/.exec(url.pathname)?.[1];
  } else if (['youtube.com', 'www.youtube.com', 'm.youtube.com', 'music.youtube.com'].includes(url.hostname)) {
    id = url.pathname === '/watch' ? url.searchParams.get('v')
      : /^\/(?:embed|shorts|live)\/([\w-]{11})\/?$/.exec(url.pathname)?.[1];
  }
  if (id && /^[\w-]{11}$/.test(id)) return `https://www.youtube.com/watch?v=${id}`;
}

/** Callers order candidates from the most specific public page to general listings. */
export function uniqueLoungeMedia(candidates: LoungeMedia[]): LoungeMedia[] {
  const seen = new Set<string>();
  return candidates.flatMap((entry) => {
    const youtubeUrl = youtubeVideoUrl(entry.youtubeUrl);
    if (!youtubeUrl || seen.has(youtubeUrl) || !entry.title.trim()
      || !/^\/(?!\/)[^\s\\]*$/.test(entry.archiveUrl)) return [];
    seen.add(youtubeUrl);
    return [{ ...entry, youtubeUrl }];
  });
}
