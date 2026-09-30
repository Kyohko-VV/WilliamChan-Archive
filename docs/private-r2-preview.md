# Private R2 localhost 預覽

1. 將 `.env.example` 複製為 `.env.local`，設定 `R2_PRIVATE_ACCOUNT_ID`、`R2_PRIVATE_ACCESS_KEY_ID`、`R2_PRIVATE_SECRET_ACCESS_KEY` 與 `R2_PRIVATE_BUCKET=williamchan-private`。Account ID 使用 Cloudflare 的 32 位十六進位 ID（接受大小寫），不是 API token 或 endpoint URL。使用限該 bucket 的 Object Read 憑證；不要使用 `PUBLIC_` 前綴。
2. 編輯 `.local/media-library.private.json`（JSON 陣列）：

```json
[
  {
    "id": "private-photo-001",
    "visibility": "private",
    "storageKey": "album/original photo.jpg",
    "type": "image",
    "addedAt": "2026-09-06",
    "category": "Other",
    "album": "本機私有相冊",
    "caption": "照片說明"
  }
]
```

`id` 必須唯一；`storageKey` 是原始 R2 key，不要 URL encode。影片使用 `type: "video"`。私有清單不採用 `url` 或 `imageUrl`，只以 key 簽名。檔案不存在時視為空清單，更新後重新整理頁面即可。

相冊歸屬只讀取明確的 `category`、`album` 與可選的 `subAlbum`，不從檔名、key 或關聯作品名稱推斷。未指定 album 時顯示「未分類相冊」。例如 `category: "Music"`、`album: "一筆江湖"`、`subAlbum: "MV"` 會歸入 Music → 一筆江湖 → MV，不受檔名影響。

Music 若明確指定 `relatedType: "work"` 與 `relatedId`，則優先按作品 ID 分組；work slug 會解析為正式 ID，顯示名稱沿用 Music Work 的正式標題。私人〈一筆江湖〉使用 `relatedId: "music-yi-bi-jiang-hu"`，與公開圖片同屬 Music → 〈一筆江湖〉。不依書名號或相似標題自動建立作品關聯，以免合併不同作品。

`subAlbum` 支援 `Cover`（封面）、`MV`、`Behind the Scenes`（幕後）、`Promotion`（宣傳）、`Stage`（舞台）、`Other`（其他）。這是可選的進階欄位，主要分類使用 Category + Album；MV、Cover、幕後、宣傳、舞台等性質優先填入 tags。不填 subAlbum 時卡片不顯示子相冊欄位；只有目前分類／相冊中實際使用的子相冊才提供篩選。

日期欄位皆可省略或留空：

- `publishedDate`：物料原始公開日期，優先用於卡片、年份篩選及排序。
- `eventDate`：已知的活動／拍攝日期；公開日未知時使用，卡片明確標示日期性質。
- `addedAt`：加入資料庫日期，只在日期詳細資訊顯示，絕不作歷史日期的替代值。
- `datePrecision`：公開日精度，可填 `day`、`month`、`year` 或 `unknown`。例如 `publishedDate: "2020-05-12"` 配 `day`、`"2020-05"` 配 `month`、`"2020"` 配 `year`；不要為年月補上虛構的日。`unknown` 不採用 publishedDate。

公開日優先顯示及排序，舊公開資料已有的 date 保持使用並標示為既有日期，不要求重新確認，也不改寫為 publishedDate。再無既有日期時可使用活動／拍攝日；真正沒有歷史日期才顯示「日期未確認」，升序／降序都排在已知日期之後。eventDate 與 addedAt 保留在折疊的日期詳細資訊中。私人資料不將舊 date 或 addedAt 當成歷史日期。

私人測試圖 `work/yibijianghu-private06.jpg` 保留 Music → 一筆江湖，tags 包含 MV，已確認 publishedDate 為 2018-06-10；addedAt 為 2026-09-06，eventDate 與 subAlbum 留空，visibility 維持 private。

3. 執行 `npm exec astro dev -- --background`，開啟 `http://localhost:4321/media-library`。改動環境變數後，以 `npm exec astro dev stop` 停止再重啟。
4. 篩選 PRIVATE，點擊媒體取得預覽。每次點擊呼叫 `/api/media-library/private-preview?id=…`，只接受本機清單中的 ID，伺服器產生固定 300 秒的 presigned GET URL。關閉再開啟即可取得新連結。URL 是暫時的存取憑證，不要分享。

缺少設定會顯示提示；載入失敗請確認 bucket、key、讀取權限與瀏覽器支援的媒體格式。此流程不變更 R2 bucket 公開權限，也不會上傳或修改物件。

開發頁面與 API 只在 `astro dev` 注入，限 localhost / loopback host，拒絕跨來源請求並回傳 `no-store`。請維持 dev server 的預設 loopback 綁定。`.local/` 和 `.env.local` 已由 Git 忽略，且禁止 Vite 直接提供這些檔案。正式 `npm run build` 不需要 R2 憑證，不產生管理頁或 API。

簽名依 Cloudflare 官方設計：[R2 presigned URLs](https://developers.cloudflare.com/r2/api/s3/presigned-urls/)。
