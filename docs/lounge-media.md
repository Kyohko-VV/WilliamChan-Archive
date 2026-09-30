# VV Lounge public media feed

`npm run build` generates `dist/data/lounge-media.json` via the prerendered
`src/pages/data/lounge-media.json.ts` endpoint. No separate media list is maintained.

Version 1 reads explicit public fields from Works (watchLinks, streamingLinks,
relatedPerformances, archiveVideos), Brand / Editorial (videos), and Timeline
(officialMvUrl, sourceUrl, additionalSources). It does not import Media Library,
private R2, local preview data, or credentials, or search external video sources.
Videos embedded only in page templates and fan diary videos are outside this first
version's structured source scope. Existing content is not changed.

Only individual HTTPS YouTube videos are accepted. URLs are normalized to
`https://www.youtube.com/watch?v=VIDEO_ID`, removing tracking parameters. Playlists,
channels and other platforms are excluded. Duplicate video IDs retain the first
candidate: Work detail pages first, then Brand detail pages, then Timeline anchors.
Music listening/MV fields on music Works map to `music`; relatedPerformances maps
to `stage`; Timeline officialMvUrl maps to `music`. Other fields map to `other`.
Public Archive inclusion is the source of eligibility; no claim is made that
YouTube playback availability or embedding restrictions were checked externally.

After building, run `node --test tests/lounge-media.test.mjs` to check URL filtering,
deduplication, and that every output video is linked on its built public page.

The JSON file is a static asset. With owner approval, `public/_headers` sets
`Access-Control-Allow-Origin: https://lounge.williamchanfanpage.com` only for
`/data/lounge-media.json`. Astro copies this file to `dist/_headers` for Cloudflare
static asset hosting. Lounge should use a normal GET fetch without credentials or
custom request headers. CORS controls browser access, not access to the public file.
No Cloudflare dashboard or R2 settings are changed. Production fetch can only be
verified after an authorized deployment; Astro preview does not apply `_headers`.
