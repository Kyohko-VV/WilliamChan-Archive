import { load, JSON_SCHEMA } from 'js-yaml';
import { claimId, contentFields } from '../utils/ownerContent';

const files = import.meta.glob<string>('../content/timeline/*.yaml', { eager: true, query: '?raw', import: 'default' });
const relatedPages = new Set(Object.keys(import.meta.glob('../pages/{works,brand-editorial}/*.astro'))
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
    return {
      id, date: fields.date, title: fields.text('title', true),
      category: fields.text('category') || '一般事件',
      description: fields.text('description'),
      source: fields.text('source') || (sourceUrl ? new URL(sourceUrl).hostname : ''),
      sourceUrl,
      relatedHref: relatedHref.replace(/\/$/, ''),
      relatedLabel: relatedHref ? fields.text('relatedLabel') || '查看相關資料 →' : '',
    };
  });
}
