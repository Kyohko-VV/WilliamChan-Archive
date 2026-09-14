# 自行新增網站日記與一句話 Timeline

日常新增不需要 AI，也不用修改 TypeScript。複製範本、填寫、儲存後，localhost 就會更新；正式發布仍使用 Git 提交、push，觸發既有 Cloudflare 自動部署。

## 1. 網站日記

1. 在 VS Code 開啟整個 `WilliamChan-Archive` 專案。
2. 複製 `templates/diary.md` 到 `src/content/diary/`。
3. 將副本命名為 `YYYY-MM-DD-簡短英文名稱.md`，例如 `2026-09-14-my-first-note.md`。確認副檔名是 `.md`，不是 `.md.txt`。
4. 填寫開頭兩條 `---` 之間的欄位，再將第二條 `---` 之後的示例換成自己的正文。
5. 按 Ctrl+S 儲存，前往 `http://localhost:4321/fan-activities`，點「閱讀全文」。首頁最新記錄也會依日期顯示最新三筆。

| 欄位 | 必填 | 寫法 |
| --- | --- | --- |
| `title` | 是 | 文章標題 |
| `date` | 是 | 有效日期，例如 `"2026-09-14"` |
| `slug` | 是 | 小寫英文、數字與連字號，例如 `"my-first-note"`；不可重複 |
| 正文 | 是 | 第二條 `---` 之後的 Markdown |
| `summary` | 否 | 簡短摘要；不填保留 `""`，不會自動編造摘要 |
| `cover` | 否 | 公開圖片的完整 `https://…` 網址；不填保留 `""` |

分類自動使用「建站記錄」，不需另填。日記沿用 Fan Activities 列表及現有文章風格，列表保留原本按年份、日期由舊至新的順序；首頁仍由新至舊。

新文章網址由 **slug** 決定，例如 `/fan-activities/my-first-note`；檔名只是管理用，不會額外加上日期。slug 同時是新文章的穩定識別碼，不需再填 id。

### 完整日記示例（只在本文件，不是正式內容）

檔名：`src/content/diary/2026-09-14-my-first-note.md`

```markdown
---
title: "第一次自己更新網站"
date: "2026-09-14"
slug: "my-first-note"
summary: "記錄今天自己新增日記、整理連結的小進展。"
cover: "https://media.williamchanfanpage.com/fan-activities/fan-activities2025-03-12-people.webp"
---

今天試著自己新增一篇網站日記，想把整理資料時的感想留下來。

## 今天完成的事

- 整理一個來源連結。
- 確認文章在手機上也能閱讀。

## 一張回憶照片

![和朋友相聚的回憶](https://media.williamchanfanpage.com/fan-activities/fan-activities2025-03-12-people.webp)

照片 © Kyohko。

接下來想繼續整理[網站時間線](/timeline)。
```

段落之間空一行；`##` 是小標題；`- ` 是列表；`[文字](網址)` 是連結；`![圖片說明](圖片網址)` 是圖片。文章標題已由 `title` 顯示，正文從段落或 `##` 開始即可。

## 2. 一句話 Timeline

1. 複製 `templates/timeline.yaml` 到 `src/content/timeline/`。
2. 將副本命名為 `YYYY-MM-DD-簡短英文名稱.yaml`，例如 `2026-09-14-first-timeline-note.yaml`。
3. 只填 `date`、`title`、`id` 就能顯示。其餘欄位可以保留範本預設值，也可以刪除整行。
4. 儲存後前往 `http://localhost:4321/timeline/2026/`。其他年份把 `2026` 換成填寫的年份；新年份會自動加入選單，事件依日期由新至舊排列。
5. 事件直接在年份頁閱讀，網址為 `/timeline/2026/#first-timeline-note`，不另建詳細頁。舊形式 `/timeline#first-timeline-note` 也會由既有功能導向所屬年份。

YAML 是逐行填欄位的文字檔，不用逗號、括號或陣列。冒號後保留一個空格；建議保留引號，在引號裡填文字。日期務必保留 `"YYYY-MM-DD"` 格式。雙引號內若要寫雙引號，使用 `\"`，或直接用中文「」。

| 欄位 | 必填 | 說明 |
| --- | --- | --- |
| `date` | 是 | 日期 YYYY-MM-DD |
| `title` | 是 | 一句話事件標題 |
| `id` | 是 | 小寫英文、數字與連字號；不可與新舊事件的 id 或 anchor 重複 |
| `category` | 否 | 預設「一般事件」；可填「音樂」「劇集」「品牌活動」「網站紀錄」等文字 |
| `source` | 否 | 實際來源名稱；單填名稱會在 Timeline 顯示純文字 |
| `sourceUrl` | 否 | 完整公開 http(s) 網址；只填 URL 時以該網址的網域顯示連結 |
| `description` | 否 | 補充說明，純文字；不填也能顯示事件 |
| `relatedHref` | 否 | 既有 Work / Brand 頁面的站內路徑，例如 `/works/music-na-pa-wo-men` 或 `/brand-editorial/descente` |
| `relatedLabel` | 否 | 關聯連結文字；有關聯而未填時顯示「查看相關資料 →」 |

沒有來源就保留 `source: ""`、`sourceUrl: ""`，不會產生來源連結；沒有關聯則將兩個 related 欄位留空。Work / Brand 路徑請從已存在的頁面網址複製，去掉 `http://localhost:4321`，不要填作品標題或另造 id。這會沿用現有 `relatedHref` 關聯方式；不會自動改寫作品資料裡人工維護的事件 id 清單。

### 完整 Timeline 示例（只在本文件，不是正式事件）

以下是站主操作練習，不代表陳偉霆的實際活動。檔名：`src/content/timeline/2026-09-14-first-timeline-note.yaml`

```yaml
date: "2026-09-14"
title: "試著自行新增一筆 Timeline 記錄"
id: "first-timeline-note"
category: "網站紀錄"
source: ""
sourceUrl: ""
description: "今天完成第一次手動新增練習。"
relatedHref: ""
relatedLabel: ""
```

如果練習只填必填欄位，可刪除 `category` 以下所有行。真實事件有來源時，將來源名稱填入 `source`，將瀏覽器中實際來源文章的完整網址貼入 `sourceUrl`，例如 `source: "陳偉霆本人微博"`；不要用示例網址代替真實來源。

## 3. 公開圖片與來源連結

- 圖片必須是可以直接在瀏覽器開啟的公開圖片網址，例如既有 `https://media.williamchanfanpage.com/…`。可先在未登入的瀏覽器視窗確認。
- 不要填 `C:\…` 本機路徑、Private R2 網址或會到期的私人預覽連結；這個流程不需修改 R2、Wrangler 或 `.env.local`。
- 封面放在 `cover`，正文圖片用 Markdown 圖片寫法；圖片下方可寫來源或攝影者。
- 來源連結應連到實際貼文、新聞或公告頁；`sourceUrl` 只放 URL，名稱放在 `source`。日記正文的來源可寫成 `[來源名稱](完整網址)`。

## 4. 開啟 localhost 與檢查 build

在 VS Code 選「終端機 → 新增終端機」，確認位於專案根目錄。首次取得專案或依賴變動時先執行 `npm install`。

```sh
npm run dev -- --background
```

這會使用專案要求的 `astro dev --background`。以終端機顯示的網址為準，通常是 `http://localhost:4321`。儲存內容後會自動更新；若瀏覽器沒刷新，按 Ctrl+R。管理背景伺服器：

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

確認 localhost 內容正確後執行：

```sh
npm run build
```

看到 `build Complete!` 才準備發布。這個指令只在本機產生 `dist/`，不會 push 或部署。Windows PowerShell 如果說 `npm.ps1` 無法執行，將以上 `npm` 改為 `npm.cmd`（例如 `npm.cmd run build`），不需更改系統執行原則。

如果提示 id / slug 重複，錯誤會列出衝突檔案。請更改**尚未發布的新檔案**的 id / slug。日期或必填欄位錯誤會指出檔名及欄位；修正並儲存後再檢查。

範本留在根目錄 `templates/`，不在 `public/` 或 `src/pages/`；讀取入口只收 `src/content/diary/*.md` 與 `src/content/timeline/*.yaml`，因此空白範本、這份文件及示例都不會變成網站內容。不要把尚未填好的副本留在正式內容資料夾；未填必填欄位會阻止 build。草稿可暫存在內容資料夾以外。

## 5. 用 VS Code 提交與推送

1. 確認預覽及 `npm run build` 成功。
2. 點左側「原始檔控制」（Ctrl+Shift+G）。
3. 點開變更逐一檢查；只在這次要發布的檔案旁按 `+` 暫存。專案可能有其他尚未提交的工作，不要直接暫存全部。
4. 輸入訊息，例如「新增網站日記：第一次自己更新網站」，按「提交」。提交先保存在本機。
5. 準備正式發布時，在原始檔控制的 `…` 選單選「推送 / Push」。依現有專案設定推送到已連接 Cloudflare 的部署分支；不要另建部署設定。
6. Cloudflare 收到 push 後會自動 build 與部署。在既有 Cloudflare 專案查看是否成功，再到正式網站確認。若失敗，先看部署紀錄修正，再提交、推送。

第一次發布這個新流程時，需連同本次內容讀取程式、路由、`package.json`、`package-lock.json` 等配套變更一起提交；之後日常新增只需提交自己的 `.md` / `.yaml` 檔案。

## 6. 修改已發布內容

新流程建立的日記：直接編輯 `src/content/diary/` 原檔；Timeline：直接編輯 `src/content/timeline/` 原檔。修改標題、正文、摘要、連結或日期後，照相同預覽、build、提交、push 流程發布。不要為了修改而再複製一筆。

發布後不要隨意改日記 `slug` 或 Timeline `id`：它們決定文章網址、事件錨點與資料關聯，改掉會讓書籤、外部連結或既有引用失效。只改檔名不改 slug / id 不會改變新內容的識別碼。Timeline 日期跨年份修改會改變年份頁位置，舊 `/timeline#id` 仍可定位，但已分享的特定年份網址需留意更新。

原有三篇日記為了保留內容與網址，仍在 `src/pages/fan-activities/` 的三個具名 `.astro` 檔案，列表摘要在 `src/data/fanActivities.ts`；若要修改那些舊文章，編輯原檔及對應摘要，**不要重新建立同一篇 Markdown**。其他舊 Timeline 仍在 `src/data/events.ts`，修改時保留原 id、anchor、Work 關聯與倒數設定；所有新的一句話事件均使用 YAML。

## 維護備註

本次檢查確認原專案沒有 Markdown 日記或 content collection schema；日記使用 `FanActivity` 介面加靜態 Astro 頁面，Timeline 是 TypeScript 陣列。最少改動做法是保留舊資料，在 `src/data/fanActivities.ts` 與 `src/data/events.ts` 統一合併新內容；日記由 `[slug].astro` 產生頁面，Timeline 沿用 `[year].astro`、`buildTimeline` 及 Today 既有讀取。新增欄位驗證位於 `src/utils/ownerContent.ts`。YAML 解析使用專案原本已有版本的 `js-yaml`，列為直接依賴，沒有新增服務。

實作參考：[Astro 路由](https://docs.astro.build/en/guides/routing/)、[Astro 元件](https://docs.astro.build/en/basics/astro-components/)、[內容集合指南](https://docs.astro.build/en/guides/content-collections/)。
