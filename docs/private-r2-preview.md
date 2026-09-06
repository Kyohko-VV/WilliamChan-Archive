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
    "date": "2026-09-06",
    "category": "Other",
    "album": "本機私有相冊",
    "caption": "照片說明"
  }
]
```

`id` 必須唯一；`storageKey` 是原始 R2 key，不要 URL encode。影片使用 `type: "video"`。私有清單不採用 `url` 或 `imageUrl`，只以 key 簽名。檔案不存在時視為空清單，更新後重新整理頁面即可。

3. 執行 `npm exec astro dev -- --background`，開啟 `http://localhost:4321/media-library`。改動環境變數後，以 `npm exec astro dev stop` 停止再重啟。
4. 篩選 PRIVATE，點擊媒體取得預覽。每次點擊呼叫 `/api/media-library/private-preview?id=…`，只接受本機清單中的 ID，伺服器產生固定 300 秒的 presigned GET URL。關閉再開啟即可取得新連結。URL 是暫時的存取憑證，不要分享。

缺少設定會顯示提示；載入失敗請確認 bucket、key、讀取權限與瀏覽器支援的媒體格式。此流程不變更 R2 bucket 公開權限，也不會上傳或修改物件。

開發頁面與 API 只在 `astro dev` 注入，限 localhost / loopback host，拒絕跨來源請求並回傳 `no-store`。請維持 dev server 的預設 loopback 綁定。`.local/` 和 `.env.local` 已由 Git 忽略，且禁止 Vite 直接提供這些檔案。正式 `npm run build` 不需要 R2 憑證，不產生管理頁或 API。

簽名依 Cloudflare 官方設計：[R2 presigned URLs](https://developers.cloudflare.com/r2/api/s3/presigned-urls/)。
