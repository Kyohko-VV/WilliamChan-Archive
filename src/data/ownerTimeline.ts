import { load, JSON_SCHEMA } from 'js-yaml';
import { claimId, contentFields } from '../utils/ownerContent';

const files = import.meta.glob<string>('../content/timeline/*.yaml', { eager: true, query: '?raw', import: 'default' });
const relatedPages = new Set(Object.keys(import.meta.glob('../pages/{works,brand-editorial}/*.astro'))
  .map((path) => path.replace('../pages', '').replace(/\.astro$/, '')));
const eventPages = new Set(Object.keys(import.meta.glob('../pages/events/*.astro'))
  .map((path) => path.replace('../pages', '').replace(/\.astro$/, '')));

export function readOwnerTimeline(existing: readonly { id?: string; anchor?: string }[]) {
  const seen = new Map<string, string>();
  existing.forEach((event, index) => {
    for (const id of new Set([event.id, event.anchor].filter(Boolean))) {
      claimId(seen, id!, `src/data/events.ts 第 ${index + 1} 筆`);
    }
  });
  return Object.entries(files).map(([path, raw]) => {
    let data: unknown;
    try { data = load(raw, { schema: JSON_SCHEMA }); }
    catch (error) { throw new Error(`內容檔案 ${path}：YAML 格式錯誤，請保留「欄位: 空格 值」格式。${error}`); }
    if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error(`內容檔案 ${path}：請複製 Timeline 範本並填寫欄位。`);
    const fields = contentFields(path, data as Record<string, unknown>);
    const id = fields.slug('id');
    claimId(seen, id, path);
    const relatedHref = fields.text('relatedHref');
    if (relatedHref && !/^\/(works|brand-editorial)\/[a-z0-9-]+\/?$/.test(relatedHref)) fields.fail('relatedHref 請填既有 /works/… 或 /brand-editorial/… 的站內路徑。');
    if (relatedHref && !relatedPages.has(relatedHref.replace(/\/$/, ''))) fields.fail(`relatedHref 找不到既有頁面「${relatedHref}」，請從 localhost 的 Work / Brand 頁面複製路徑。`);
    const sourceUrl = fields.url('sourceUrl');
    const rawSources = (data as Record<string, unknown>).additionalSources;
    if (rawSources != null && !Array.isArray(rawSources)) fields.fail('additionalSources 請使用包含 label 與 url 的清單。');
    const additionalSources = ((rawSources ?? []) as unknown[]).map((source, index) => {
      if (!source || typeof source !== 'object' || Array.isArray(source)) fields.fail(`additionalSources 第 ${index + 1} 筆請填寫 label 與 url。`);
      const sourceFields = contentFields(`${path} additionalSources 第 ${index + 1} 筆`, { ...(source as Record<string, unknown>), date: fields.date });
      const label = sourceFields.text('label', true);
      const url = sourceFields.url('url');
      if (!url) fields.fail(`additionalSources 第 ${index + 1} 筆請填寫 url。`);
      return { label, url };
    });
    const sourceUrls = [sourceUrl, ...additionalSources.map((source) => source.url)].filter(Boolean);
    if (new Set(sourceUrls).size !== sourceUrls.length) fields.fail('官方來源 URL 重複，請沿用同一筆來源。');
    const href = fields.text('href').replace(/\/$/, '');
    if (href && !eventPages.has(href)) fields.fail(`href 找不到既有 Event 頁面「${href}」。`);
    const image = fields.url('image');
    return {
      id, date: fields.date, title: fields.text('title', true),
      category: fields.text('category') || '一般事件',
      description: fields.text('description'),
      source: fields.text('source') || (sourceUrl ? new URL(sourceUrl).hostname : ''),
      sourceUrl,
      ...(additionalSources.length ? { additionalSources } : {}),
      ...(href ? { href } : {}),
      ...(image ? { image, imageAlt: fields.text('imageAlt', true), imageSource: fields.text('imageSource', true) } : {}),
      relatedHref: relatedHref.replace(/\/$/, ''),
      relatedLabel: relatedHref ? fields.text('relatedLabel') || '查看相關資料 →' : '',
    };
  });
}
