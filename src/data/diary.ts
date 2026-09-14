import type { MarkdownInstance } from 'astro';
import { claimId, contentFields } from '../utils/ownerContent';

const files = import.meta.glob<MarkdownInstance<Record<string, unknown>>>('../content/diary/*.md', { eager: true });

export const diaryEntries = Object.entries(files).map(([path, article]) => {
  const fields = contentFields(path, article.frontmatter);
  const slug = fields.slug('slug');
  if (!article.rawContent().trim()) fields.fail('請在第二行 --- 分隔線之後填寫正文。');
  return {
    path, slug, article,
    date: fields.date,
    title: fields.text('title', true),
    category: '建站記錄',
    description: fields.text('summary'),
    cover: fields.url('cover'),
    detailUrl: `/fan-activities/${slug}`,
    detailLabel: '閱讀全文 →',
  };
});

export function validateDiaryUrls(existingUrls: string[]) {
  const seen = new Map(existingUrls.map((url) => [url, '既有日記 / Astro 頁面']));
  for (const entry of diaryEntries) claimId(seen, entry.detailUrl, entry.path);
}
