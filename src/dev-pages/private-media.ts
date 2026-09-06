import { readFile } from 'node:fs/promises';
import { normalizeMediaItem, mediaCategories, type MediaLibraryItem } from '../data/mediaLibrary';

export function isLocalRequest(request: Request) {
  const url = new URL(request.url);
  return ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname)
    && (!request.headers.get('origin') || request.headers.get('origin') === url.origin)
    && !['cross-site', 'same-site'].includes(request.headers.get('sec-fetch-site') ?? '');
}

export async function readPrivateMedia() {
  let contents: string;
  try {
    contents = await readFile(new URL('../../.local/media-library.private.json', import.meta.url), 'utf8');
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw new Error('無法讀取本機私有媒體清單。');
  }
  const entries: unknown = JSON.parse(contents.replace(/^\uFEFF/, ''));
  if (!Array.isArray(entries)) throw new Error('私有媒體清單必須是 JSON 陣列。');
  const ids = new Set<string>();
  return entries.map((entry) => {
    if (!entry || typeof entry !== 'object' || typeof entry.id !== 'string' || !entry.id.trim()
      || ids.has(entry.id) || entry.visibility !== 'private'
      || typeof entry.storageKey !== 'string' || !entry.storageKey.trim()
      || typeof entry.date !== 'string'
      || (entry.type !== undefined && !['image', 'video'].includes(entry.type))
      || (entry.category !== undefined && !mediaCategories.includes(entry.category))) {
      throw new Error('私有媒體項目需要唯一 id、private visibility、storageKey 與 date。');
    }
    ids.add(entry.id);
    const item: MediaLibraryItem = { id: entry.id, storageKey: entry.storageKey, date: entry.date, visibility: 'private', type: entry.type, category: entry.category };
    for (const key of ['fileName', 'event', 'album', 'relatedType', 'relatedId', 'relatedTitle', 'source', 'caption', 'notes'] as const) {
      if (typeof entry[key] === 'string') item[key] = entry[key];
    }
    if (Array.isArray(entry.tags) && entry.tags.every((tag: unknown) => typeof tag === 'string')) item.tags = entry.tags;
    if (typeof entry.sourceUrl === 'string' && /^https?:\/\//i.test(entry.sourceUrl)) item.sourceUrl = entry.sourceUrl;
    return normalizeMediaItem(item);
  });
}
