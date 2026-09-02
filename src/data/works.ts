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

export interface WorkImage extends WorkCover {
  source: string;
  sourceUrl: string;
}

export interface WorkArchiveVideo {
  label: string;
  url: string;
  source: string;
  type: string;
}

export interface WorkRelatedPerformance {
  date?: string;
  title: string;
  song: string;
  videoUrl?: string;
  source?: string;
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
  status?: string;
  description?: string;
  cover?: WorkCover;
  images?: WorkImage[];
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
  relatedPerformances?: WorkRelatedPerformance[];
  archiveVideos?: WorkArchiveVideo[];
  credits?: { label: string; value: string }[];
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
    status: "已公開",
    description: "陳偉霆於 2026 年 8 月 2 日公開單曲〈哪怕我們〉。",
    href: "/works/music-na-pa-wo-men",
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
  {
    id: "music-le-ci-bu-pi",
    date: "2026-07-13",
    releaseDate: "2026-07-13",
    title: "〈樂此不疲〉",
    category: "音樂",
    type: "單曲",
    artist: "陳偉霆",
    status: "已公開",
    description:
      "陳偉霆於 2026 年 7 月 13 日公開單曲〈樂此不疲〉，後續同步推出 Official MV 與相關劇照、幕後內容。",
    href: "/works/music-le-ci-bu-pi",
    cover: {
      src: "https://media.williamchanfanpage.com/work/%E6%A8%82%E6%AD%A4%E4%B8%8D%E7%96%B2%E5%B0%81%E9%9D%A2.jpg",
      alt: "〈樂此不疲〉單曲封面",
    },
    images: [
      {
        src: "https://media.williamchanfanpage.com/work/%E6%A8%82%E6%AD%A4%E4%B8%8D%E7%96%B201.jpg",
        alt: "〈樂此不疲〉作品圖片 1",
        source: "陳偉霆微博（官方）",
        sourceUrl: "https://weibo.com/1712570933/R8VRGtg7t",
      },
      {
        src: "https://media.williamchanfanpage.com/work/%E6%A8%82%E6%AD%A4%E4%B8%8D%E7%96%B202.jpg",
        alt: "〈樂此不疲〉作品圖片 2",
        source: "陳偉霆微博（官方）",
        sourceUrl: "https://weibo.com/1712570933/R8VRGtg7t",
      },
      {
        src: "https://media.williamchanfanpage.com/work/%E6%A8%82%E6%AD%A4%E4%B8%8D%E7%96%B203.jpg",
        alt: "〈樂此不疲〉作品圖片 3",
        source: "陳偉霆微博（官方）",
        sourceUrl: "https://weibo.com/1712570933/R8VRGtg7t",
      },
    ],
    streamingLinks: [
      {
        label: "YouTube 音樂版",
        url: "https://youtu.be/PPMebEOeZtA?si=Bseqyk4Ic1FbFKRw",
      },
      {
        label: "Apple Music",
        url: "https://music.apple.com/jp/album/%E6%A8%82%E6%AD%A4%E4%B8%8D%E7%96%B2/6789498710?i=6789498712",
      },
    ],
    watchLinks: [
      {
        label: "YouTube Official MV（陳偉霆 YouTube 頻道）",
        url: "https://youtu.be/HstLwymv4rw?si=yxHO50Ovg3QG4hpu",
      },
    ],
    officialSources: [
      {
        displayName: "陳偉霆本人微博｜單曲公開",
        url: "https://weibo.com/1712570933/5320158232708044",
        type: "官方",
        note: "2026-07-13｜宣布新歌〈樂此不疲〉上線，附音樂平台連結。",
      },
      {
        displayName: "陳偉霆本人微博｜直播／宣傳",
        url: "https://weibo.com/1712570933/5320271978305357",
        type: "官方",
        note: "新歌宣傳直播相關內容。",
      },
      {
        displayName: "陳偉霆本人微博｜MV 特別鳴謝",
        url: "https://weibo.com/1712570933/5321245475471705",
        type: "官方",
        note: "提到 MV 內容，並鳴謝章若楠特別出演。",
      },
      {
        displayName: "陳偉霆本人微博｜單曲與 MV 上線後感想",
        url: "https://weibo.com/1712570933/5321290606973479",
        type: "官方",
        note: "分享對〈樂此不疲〉主題與歌曲想法的文字。",
      },
      {
        displayName: "英皇娛樂北京｜MV 劇照",
        url: "https://weibo.com/3270824053/5321246578574003",
        type: "官方",
        note: "發布〈樂此不疲〉MV 劇照。",
      },
      {
        displayName: "英皇娛樂北京｜MV 劇照／另一則",
        url: "https://weibo.com/3270824053/5321247824282971",
        type: "官方",
        note: "補充發布 MV 畫面與劇照。",
      },
      {
        displayName: "英皇娛樂北京｜MV 幕後",
        url: "https://weibo.com/3270824053/5321979747895926",
        type: "官方",
        note: "發布 MV 幕後花絮與幕後記錄。",
      },
    ],
    relatedStages: ["/events/2026-tima"],
    relatedPerformances: [
      {
        date: "2026-08-16",
        title: "TMEA 騰訊音樂娛樂盛典",
        song: "〈樂此不疲〉",
        videoUrl: "https://youtu.be/u-42FQfOos0",
        source: "KYOHKOの推し活（YouTube）",
      },
    ],
    archiveVideos: [
      {
        label: "〈樂此不疲〉錄音室花絮",
        url: "https://youtu.be/Y0T28ipk0YU",
        source: "KYOHKOの推し活｜YouTube",
        type: "非官方保存",
      },
      {
        label: "2026-08-16｜TMEA 騰訊音樂娛樂盛典〈樂此不疲〉",
        url: "https://youtu.be/u-42FQfOos0",
        source: "KYOHKOの推し活｜YouTube",
        type: "非官方保存",
      },
    ],
    credits: [
      { label: "製作人", value: "陸虎" },
      { label: "MV 特別出演", value: "章若楠" },
    ],
    notes: [
      "陳偉霆分享歌曲初衷：人生不必永遠只為追趕，也可以偶爾停下來，以另一種頻率感受當下。",
    ],
  },
];
