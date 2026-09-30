import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { youtubeVideoUrl, uniqueLoungeMedia } from '../src/utils/loungeMedia.ts';

test('YouTube aliases deduplicate while other platforms, playlists and credentials are rejected', () => {
  const id = 'abcdefghijk';
  for (const url of [`https://youtu.be/${id}?si=tracking`, `https://www.youtube.com/shorts/${id}`, `https://www.youtube.com/watch?v=${id}&t=30`]) {
    assert.equal(youtubeVideoUrl(url), `https://www.youtube.com/watch?v=${id}`);
  }
  for (const url of ['https://instagram.com/abcdefghijk', 'https://youtube.com.evil.test/watch?v=abcdefghijk', 'https://youtube.com/playlist?list=abc', 'https://youtube.com/@channel', 'https://secret@youtu.be/abcdefghijk', 'https://youtu.be/short', 'not a URL']) {
    assert.equal(youtubeVideoUrl(url), undefined);
  }
  const entry = { title: 'Video', youtubeUrl: `https://youtu.be/${id}`, archiveUrl: '/works/example', type: 'music' };
  const result = uniqueLoungeMedia([entry, { ...entry, youtubeUrl: `https://www.youtube.com/watch?v=${id}`, archiveUrl: '/timeline/2026#example' }]);
  assert.equal(result.length, 1);
  assert.equal(result[0].archiveUrl, '/works/example');
});

test('built feed contains only unique videos actually linked on their public Archive pages', () => {
  const entries = JSON.parse(readFileSync(new URL('../dist/data/lounge-media.json', import.meta.url), 'utf8'));
  assert.ok(entries.length > 0);
  assert.equal(new Set(entries.map((entry) => entry.youtubeUrl)).size, entries.length);
  for (const entry of entries) {
    assert.deepEqual(Object.keys(entry).sort(), ['archiveUrl', 'title', 'type', 'youtubeUrl']);
    assert.equal(youtubeVideoUrl(entry.youtubeUrl), entry.youtubeUrl);
    assert.ok(['music', 'stage', 'trailer', 'interview', 'other'].includes(entry.type));
    const route = new URL(entry.archiveUrl, 'https://williamchanfanpage.com');
    assert.equal(route.origin, 'https://williamchanfanpage.com');
    const html = readFileSync(new URL(`../dist${route.pathname}/index.html`, import.meta.url), 'utf8');
    const publicUrls = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => youtubeVideoUrl(match[1].replaceAll('&amp;', '&')));
    assert.ok(publicUrls.includes(entry.youtubeUrl), `${entry.youtubeUrl} must be rendered on ${entry.archiveUrl}`);
    if (route.hash) assert.ok(html.includes(`id="${route.hash.slice(1)}"`));
  }
});
