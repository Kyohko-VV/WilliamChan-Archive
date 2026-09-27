import { works } from '../../data/works';
import { events } from '../../data/events';
import { brandEditorialEntries } from '../../data/brandEditorial';
import { uniqueLoungeMedia, type LoungeMedia, type LoungeMediaType } from '../../utils/loungeMedia';

export const prerender = true;

export function GET() {
  const candidates: LoungeMedia[] = [];
  const add = (title: string, youtubeUrl: string | undefined, archiveUrl: string, type: LoungeMediaType = 'other') => {
    if (youtubeUrl) candidates.push({ title, youtubeUrl, archiveUrl, type });
  };
  // Explicit public fields only. Never import mediaLibrary, private media or R2 data.
  // Dedicated Work pages win over Timeline references to the same video.
  for (const work of works) {
    if (!work.href?.startsWith('/works/')) continue;
    for (const link of [...(work.watchLinks ?? []), ...(work.streamingLinks ?? [])]) {
      add(`${work.title}｜${link.label}`, link.url, work.href, work.category === '音樂' ? 'music' : 'other');
    }
    for (const stage of work.relatedPerformances ?? []) {
      add(`${stage.title}｜${stage.song}`, stage.videoUrl, work.href, 'stage');
    }
    for (const video of work.archiveVideos ?? []) add(video.label, video.url, work.href);
  }
  for (const entry of brandEditorialEntries) {
    if (!entry.href?.startsWith('/brand-editorial/')) continue;
    for (const video of entry.videos ?? []) add(video.title, video.url, entry.href);
  }
  for (const event of events) {
    const anchor = event.id ?? event.anchor;
    if (!anchor) continue;
    const archiveUrl = `/timeline/${event.date.slice(0, 4)}#${anchor}`;
    add(`${event.title}｜Official MV`, event.officialMvUrl, archiveUrl, 'music');
    add(event.title, event.sourceUrl, archiveUrl);
    for (const source of event.additionalSources ?? []) add(`${event.title}｜${source.label}`, source.url, archiveUrl);
  }
  return new Response(`${JSON.stringify(uniqueLoungeMedia(candidates), null, 2)}\n`, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
