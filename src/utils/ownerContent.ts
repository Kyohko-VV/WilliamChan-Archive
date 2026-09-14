/** Shared validation for owner-authored files; safe in Today's browser bundle. */
export function contentFields(path: string, data: Record<string, unknown>) {
  const fail = (message: string): never => { throw new Error(`內容檔案 ${path}：${message}`); };
  const text = (key: string, required = false): string => {
    const value = data?.[key];
    if (value == null || value === '') {
      if (required) fail(`請填寫必填欄位 ${key}。`);
      return '';
    }
    if (typeof value !== 'string') fail(`${key} 請使用文字並加上引號，例如 date: "2026-09-14"。`);
    const result = (value as string).trim();
    if (required && !result) fail(`請填寫必填欄位 ${key}。`);
    return result;
  };
  const slug = (key: string) => {
    const value = text(key, true);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) fail(`${key} 只能使用小寫英文字母、數字及中間的連字號，例如 first-note。`);
    return value;
  };
  const date = text('date', true);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date) {
    fail('date 請填寫有效日期 YYYY-MM-DD，例如 "2026-09-14"。');
  }
  const url = (key: string) => {
    const value = text(key);
    if (value) {
      try { if (!['http:', 'https:'].includes(new URL(value).protocol)) fail(`${key} 請填寫完整 http(s) 公開網址。`); }
      catch { fail(`${key} 請填寫完整 http(s) 公開網址。`); }
    }
    return value;
  };
  return { text, slug, date, url, fail };
}

export function claimId(seen: Map<string, string>, id: string, path: string) {
  if (seen.has(id)) throw new Error(`內容 id / slug 重複：「${id}」同時出現在 ${seen.get(id)} 與 ${path}。請修改尚未發布的新檔案 id / slug；不要更改已發布內容。`);
  seen.set(id, path);
}
