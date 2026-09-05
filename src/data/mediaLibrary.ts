export type MediaVisibility = "private" | "public";
export const mediaCategories = ["Music", "Brand / Editorial", "Works", "Event / Stage", "Fan Activities", "Other"] as const;
export type MediaCategory = typeof mediaCategories[number];

export interface MediaLibraryItem {
  id?: string;
  type?: "image" | "video";
  fileName?: string;
  /** Legacy readable URL. Never derive a URL from storageKey. */
  imageUrl?: string;
  url?: string;
  storageKey?: string;
  event?: string;
  category?: MediaCategory;
  album?: string;
  relatedType?: string;
  relatedId?: string;
  relatedTitle?: string;
  date: string;
  source?: string;
  sourceUrl?: string;
  visibility: MediaVisibility;
  caption?: string;
  tags?: string[];
  notes?: string;
}

/** Read-only compatibility adapter for the local library; not a public gallery feed. */
export function normalizeMediaItem(item: MediaLibraryItem) {
  const readableUrl = item.url ?? item.imageUrl;
  const category = item.category ?? (item.event?.includes("TIMA") ? "Event / Stage" : item.fileName?.startsWith("fan-activities") ? "Fan Activities" : "Other");
  const album = item.album ?? item.event ?? item.relatedTitle ?? "未分類相冊";
  return {
    ...item,
    type: item.type ?? "image",
    fileName: item.fileName ?? item.storageKey?.split("/").pop() ?? item.id ?? "未命名媒體",
    url: readableUrl,
    category,
    album,
    // Category is part of the key so same-named albums never mix across categories.
    albumKey: JSON.stringify([category, album]),
  };
}

// Server/build-time input only. Public consumers must use mediaIndex's public projection.
export const mediaItems: MediaLibraryItem[] = [
  {
    fileName: "006Qii3Rgy1ige3vbhhbhj36qo8zk7wj.jpg",
    imageUrl: "https://media.williamchanfanpage.com/events/2026-tima/006Qii3Rgy1ige3vbhhbhj36qo8zk7wj.jpg",
    event: "2026 TIMA 國際音樂大賞",
    date: "2026-08-23",
    source: "英皇娛樂－北京（官方微博）",
    sourceUrl: "https://weibo.com/3270824053/ReLCagXPd",
    visibility: "public",
  },
  {
    fileName: "006Qii3Rgy1ige4s305axj30qv0zt7kg.jpg",
    imageUrl: "https://media.williamchanfanpage.com/events/2026-tima/006Qii3Rgy1ige4s305axj30qv0zt7kg.jpg",
    event: "2026 TIMA 國際音樂大賞",
    date: "2026-08-23",
    source: "w-Daily／陳偉霆工作室（官方微博）",
    sourceUrl: "https://weibo.com/6269525799/ReLNXtGia",
    visibility: "public",
  },
  {
    fileName: "c2f4d075ly1iget3urpg4j267y45du14.jpg",
    imageUrl: "https://media.williamchanfanpage.com/events/2026-tima/c2f4d075ly1iget3urpg4j267y45du14.jpg",
    event: "2026 TIMA 國際音樂大賞",
    date: "2026-08-23",
    source: "英皇娛樂－北京（官方微博）",
    sourceUrl: "https://weibo.com/3270824053/ReRjPxOwS",
    visibility: "public",
  },
  {
    fileName: "c2f4d075ly1iget3xktexj235s23w7wi.jpg",
    imageUrl: "https://media.williamchanfanpage.com/events/2026-tima/c2f4d075ly1iget3xktexj235s23w7wi.jpg",
    event: "2026 TIMA 國際音樂大賞",
    date: "2026-08-23",
    source: "英皇娛樂－北京（官方微博）",
    sourceUrl: "https://weibo.com/3270824053/ReRjPxOwS",
    visibility: "public",
  },
  {
    fileName: "fan-activities2025-03-12-people.webp",
    imageUrl: "https://media.williamchanfanpage.com/fan-activities/fan-activities2025-03-12-people.webp",
    event: "遠くからの友｜推し活でつながった5年越しの初対面",
    date: "2025-03-12",
    source: "Kyohko",
    sourceUrl: "https://note.com/kk_kyoto_vv/n/n1475d47a1f28?sub_rt=share_b",
    visibility: "public",
  },
  {
    fileName: "fan-activities2024-08-17 cnw.webp",
    imageUrl: "https://media.williamchanfanpage.com/fan-activities/fan-activities2024-08-17%20cnw.webp",
    event: "大阪｜2G OSAKA BE@RBRICK CANOTWAIT_ 400％・1000％発売記念",
    date: "2024-08-17",
    source: "Kyohko",
    sourceUrl: "https://note.com/kk_kyoto_vv/n/n433ccdb60cdc",
    visibility: "public",
  },
  {
    fileName: "fan-activities2024-08-17 mise.webp",
    imageUrl: "https://media.williamchanfanpage.com/fan-activities/fan-activities2024-08-17%20mise.webp",
    event: "大阪｜2G OSAKA BE@RBRICK CANOTWAIT_ 400％・1000％発売記念",
    date: "2024-08-17",
    source: "Kyohko",
    sourceUrl: "https://note.com/kk_kyoto_vv/n/n433ccdb60cdc",
    visibility: "public",
  },
  {
    fileName: "fan-activities2024-09-11hana.webp",
    imageUrl: "https://media.williamchanfanpage.com/fan-activities/fan-activities2024-09-11hana.webp",
    event: "東京遠征｜CANOTWAIT_ 初の海外ポップアップストア",
    date: "2024-01-20",
    source: "Kyohko",
    sourceUrl: "https://note.com/kk_kyoto_vv/n/n2e09cc2e8837?sub_rt=share_b",
    visibility: "public",
  },
  {
    fileName: "fan-activities2024-09-11william.jpg",
    imageUrl: "https://media.williamchanfanpage.com/fan-activities/fan-activities2024-09-11william.jpg",
    event: "東京遠征｜CANOTWAIT_ 初の海外ポップアップストア",
    date: "2024-01-20",
    source: "Kyohko",
    sourceUrl: "https://note.com/kk_kyoto_vv/n/n2e09cc2e8837?sub_rt=share_b",
    visibility: "public",
  },
  {
    fileName: "fan-activities2023-12-02-people.webp",
    imageUrl: "https://media.williamchanfanpage.com/fan-activities/fan-activities2023-12-02-people.webp",
    event: "深圳遠征｜映画『爆烈点』鑑賞・舞台挨拶",
    date: "2023-12-02",
    source: "Kyohko",
    sourceUrl: "https://note.com/kk_kyoto_vv/n/n403831e079f1?sub_rt=share_b",
    visibility: "public",
  },
  {
    fileName: "fan-activities2023-12-02-ticket.webp",
    imageUrl: "https://media.williamchanfanpage.com/fan-activities/fan-activities2023-12-02-ticket.webp",
    event: "深圳遠征｜映画『爆烈点』鑑賞・舞台挨拶",
    date: "2023-12-02",
    source: "Kyohko",
    sourceUrl: "https://note.com/kk_kyoto_vv/n/n403831e079f1?sub_rt=share_b",
    visibility: "public",
  },
  {
    fileName: "fan-activities2023-10-01-birthday-cake.webp",
    imageUrl: "https://media.williamchanfanpage.com/fan-activities/fan-activities2023-10-01-birthday-cake.webp",
    event: "大阪｜William 誕生日お祝い動画撮影会",
    date: "2023-10-01",
    source: "Kyohko",
    sourceUrl: "https://note.com/kk_kyoto_vv/n/n32a01aff6f18",
    visibility: "public",
  },
  {
    fileName: "fan-activities2023-10-01-group-photo.webp",
    imageUrl: "https://media.williamchanfanpage.com/fan-activities/fan-activities2023-10-01-group-photo.webp",
    event: "大阪｜William 誕生日お祝い動画撮影会",
    date: "2023-10-01",
    source: "Kyohko",
    sourceUrl: "https://note.com/kk_kyoto_vv/n/n32a01aff6f18",
    visibility: "public",
  },
];

// The complete management catalog remains development-only.
export const mediaLibrary: MediaLibraryItem[] = import.meta.env.DEV ? mediaItems : [];

/** Server/build-time public projection. Never spread management records into public props. */
export function selectPublicMedia(items: MediaLibraryItem[]) {
  return items.filter((item) => item.visibility === "public").map((item) => {
    const normalized = normalizeMediaItem(item);
    return {
      type: normalized.type,
      date: item.date,
      category: normalized.category,
      album: normalized.album,
      albumKey: normalized.albumKey,
      url: normalized.url,
      caption: item.caption,
      source: item.source,
      sourceUrl: item.sourceUrl,
      relatedType: item.relatedType,
      relatedId: item.relatedId,
      relatedTitle: item.relatedTitle,
    };
  });
}
