export type MediaVisibility = "private" | "public";

export interface MediaLibraryItem {
  fileName: string;
  imageUrl: string;
  event: string;
  date: string;
  source: string;
  sourceUrl: string;
  visibility: MediaVisibility;
}

export const mediaLibrary: MediaLibraryItem[] = [
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
    visibility: "private",
  },
  {
    fileName: "c2f4d075ly1iget3xktexj235s23w7wi.jpg",
    imageUrl: "https://media.williamchanfanpage.com/events/2026-tima/c2f4d075ly1iget3xktexj235s23w7wi.jpg",
    event: "2026 TIMA 國際音樂大賞",
    date: "2026-08-23",
    source: "英皇娛樂－北京（官方微博）",
    sourceUrl: "https://weibo.com/3270824053/ReRjPxOwS",
    visibility: "private",
  },
];
