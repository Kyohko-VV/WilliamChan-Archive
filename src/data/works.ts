export type WorkCategory = "影視" | "音樂" | "舞台・活動";

export interface WorkSource {
  name?: string;
  displayName: string;
  platform?: string;
  uid?: string;
  url: string;
  type: "官方";
  note?: string;
}

export interface WorkWatchLink {
  label: string;
  url?: string;
}

export interface WorkCover {
  src: string;
  alt: string;
}

export interface Work {
  id?: string;
  date: string;
  title: string;
  category: WorkCategory;
  type?: string;
  japaneseTitle?: string;
  platform?: string;
  internationalPlatform?: string;
  episodes?: number;
  artist?: string;
  releaseDate?: string;
  cover?: WorkCover;
  leadActor?: string;
  role?: string;
  characterId?: string;
  premiereTime?: string;
  distribution?: string;
  location?: string;
  href?: string;
  relatedEvents?: string[];
  sources?: WorkSource[];
  watchLinks?: WorkWatchLink[];
  streamingLinks?: WorkWatchLink[];
  officialSources?: WorkSource[];
  relatedStages?: string[];
  notes?: string[];
}

export const works: Work[] = [
  {
    date: "2026.08.25",
    title: "《我們的宿舍》宿舍友情 Party",
    category: "影視",
    location: "芒果TV",
    href: "/events/2026-our-dormitory-party",
  },
  {
    date: "2026-07-30",
    title: "《九門》",
    category: "影視",
    type: "劇集",
    leadActor: "陳偉霆",
    characterId: "zhang-qishan",
    premiereTime: "12:00（北京時間）",
    platform: "優酷",
    distribution: "全網獨播",
    episodes: 30,
    sources: [
      {
        name: "《九門》官方微博",
        displayName: "九門官微",
        platform: "微博",
        uid: "7743789823",
        url: "https://weibo.com/u/7743789823",
        type: "官方",
      },
    ],
    watchLinks: [
      { label: "優酷｜全網獨播" },
      {
        label: "YouTube 官方播放清單",
        url: "https://youtube.com/playlist?list=PLbwXeEh5Ev4Y&si=2zDu5GxSm1gxFlYu",
      },
    ],
    relatedEvents: [
      "jiu-men-premiere-2026-07-30",
      "jiu-men-finale-2026-08-22",
      "jiu-men-celebration-2026-08-26",
    ],
  },
  {
    date: "2024.11.20",
    title: "《太陽星辰》",
    category: "影視",
    type: "電視劇",
    platform: "騰訊視頻",
    internationalPlatform: "Netflix",
    episodes: 18,
    role: "楊光耀",
    japaneseTitle: "《太陽と星辰（ほし）－時を越える追跡者－》",
    relatedEvents: [
      "taiyo-to-hoshi-japan-premiere-2026-06-25",
      "taiyo-to-hoshi-japan-rebroadcast-2026-08-26",
    ],
  },
  {
    date: "2026.08.23",
    title: "2026 TIMA 國際音樂大賞",
    category: "舞台・活動",
    location: "香港・啟德主場館",
    href: "/events/2026-tima",
  },
  {
    id: "na-pa-wo-men-2026",
    date: "2026-08-02",
    releaseDate: "2026-08-02",
    title: "〈哪怕我們〉",
    category: "音樂",
    type: "單曲",
    artist: "陳偉霆",
    cover: {
      src: "https://media.williamchanfanpage.com/work/%E5%93%AA%E6%80%95%E6%88%91%E5%80%91%20%E5%B0%81%E9%9D%A2.jpg",
      alt: "〈哪怕我們〉單曲封面",
    },
    streamingLinks: [
      {
        label: "YouTube 官方音樂",
        url: "https://youtube.com/playlist?list=OLAK5uy_ntK1dfM-Gi4hR23RXKhxgYUa9AwmHQtNQ&si=MruwT5Xco9vnOPp7",
      },
      {
        label: "Apple Music",
        url: "https://music.apple.com/jp/album/%E5%93%AA%E6%80%95%E6%88%91%E5%80%91/6796698156?i=6796698164",
      },
    ],
    officialSources: [
      {
        displayName: "陳偉霆本人微博",
        url: "https://weibo.com/1712570933/RbuXfA3G5",
        type: "官方",
        note: "從《我門》到《哪怕我們》，不變的是我。",
      },
    ],
    relatedStages: ["/events/2026-tima"],
  },
];
