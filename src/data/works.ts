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
  publishedDate?: string;
  tags?: string[];
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

export interface WorkVisualHighlight {
  title: string;
  description: string;
  sourceUrl: string;
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
  introduction?: string[];
  mvReleaseDate?: string;
  mvBand?: { label: string; value: string }[];
  promotion?: WorkSource[];
  seoDescription?: string;
  cover?: WorkCover;
  mediaAlbum?: string;
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
  cardLinks?: WorkWatchLink[];
  officialSources?: WorkSource[];
  visualHighlights?: WorkVisualHighlight[];
  relatedStages?: string[];
  relatedPerformances?: WorkRelatedPerformance[];
  archiveVideos?: WorkArchiveVideo[];
  credits?: { label: string; value: string }[];
  notes?: string[];
}

export const works: Work[] = [
  {
    id: "music-my-lady",
    date: "2019-09-23",
    // 發行日期核對：Apple Music 列出 2019-09-23。
    // https://music.apple.com/us/album/my-lady-single/1480664044
    releaseDate: "2019-09-23",
    title: "〈My Lady〉",
    category: "音樂",
    type: "單曲",
    artist: "陳偉霆",
    status: "已公開",
    href: "/works/music-my-lady",
    mediaAlbum: "〈My Lady〉",
    cover: {"src":"https://media.williamchanfanpage.com/work/mylady00.jpg","alt":"〈My Lady〉單曲封面"},
    // Cover date follows releaseDate; no cover source was provided.
    images: [
      {
        "src": "https://media.williamchanfanpage.com/work/mylady00.jpg",
        "alt": "〈My Lady〉單曲封面",
        "publishedDate": "2019-09-23",
        "tags": [
          "Cover"
        ],
        "source": "",
        "sourceUrl": ""
      },
      {
        "src": "https://media.williamchanfanpage.com/work/mylady02.jpg",
        "alt": "〈My Lady〉官方宣傳圖片 02",
        "publishedDate": "2019-09-23",
        "tags": [
          "Promotion"
        ],
        "source": "英皇娛樂–北京",
        "sourceUrl": "https://weibo.com/3270824053/I8eUsro58"
      },
      {
        "src": "https://media.williamchanfanpage.com/work/mylady01.jpg",
        "alt": "〈My Lady〉官方宣傳圖片 01",
        "publishedDate": "2019-09-23",
        "tags": [
          "Promotion"
        ],
        "source": "英皇娛樂–北京",
        "sourceUrl": "https://weibo.com/3270824053/I8eUsro58"
      },
      {
        "src": "https://media.williamchanfanpage.com/work/mylady08.jpg",
        "alt": "〈My Lady〉官方宣傳圖片 08",
        "publishedDate": "2019-09-28",
        "tags": [
          "Promotion"
        ],
        "source": "英皇娛樂–北京",
        "sourceUrl": "https://weibo.com/3270824053/I90l5E5kT"
      },
      {
        "src": "https://media.williamchanfanpage.com/work/mylady09.jpg",
        "alt": "〈My Lady〉官方宣傳圖片 09",
        "publishedDate": "2019-09-28",
        "tags": [
          "Promotion"
        ],
        "source": "英皇娛樂–北京",
        "sourceUrl": "https://weibo.com/3270824053/I90l5E5kT"
      }
    ],
    description: "〈My Lady〉是陳偉霆於 2019 年 9 月 23 日發布的音樂作品。官方宣傳期間先後公開 MV 劇照、九宮格場景視覺及宣傳造型照，相關內容由陳偉霆本人微博及英皇娛樂–北京發布。",
    seoDescription: "整理陳偉霆單曲〈My Lady〉的作品資料、Official MV、YouTube 官方音源、Apple Music、官方宣傳記錄及相關時間線。",
    watchLinks: [
      { label: "Official MV", url: "https://youtu.be/ot4OhKZRvDw?si=-T1ejUIXN54qbLSR" },
    ],
    streamingLinks: [
      { label: "YouTube 官方音源", url: "https://youtube.com/watch?v=OiqfQftnIeM" },
      { label: "Apple Music", url: "https://music.apple.com/jp/album/my-lady/1480664044?i=1480664045" },
    ],
    promotion: [
      {
        displayName: "2019-09-23｜英皇娛樂–北京",
        url: "https://weibo.com/3270824053/4419639406527430",
        type: "官方",
        note: "Promotion / MV Visual｜〈My Lady〉新歌／MV 宣傳，公開九宮格 MV 劇情及場景劇照。原文：「一段都市烟火中的爱情独白，一场以分手告终的深情故事」。",
      },
      {
        displayName: "2019-09-23｜陳偉霆本人微博",
        url: "https://weibo.com/1712570933/4419623623513535",
        type: "官方",
        note: "Official Promotion / Release Promotion｜原文：「学会享受遗憾，先从《My Lady》开始。」〈My Lady〉正式宣傳與收聽入口，附 QQ 音樂、酷狗音樂、酷我音樂入口及影片。",
      },
      {
        displayName: "2019-09-28｜英皇娛樂–北京",
        url: "https://weibo.com/3270824053/4421462599553635",
        type: "官方",
        note: "Promotion / Fashion Visual｜〈My Lady〉相關宣傳，公開 9 張宣傳造型照，主題為復古潮酷造型與秋季時尚穿搭。原文標籤：#陈伟霆mylady#、#陈伟霆花衬衫搭配高领毛衣#。",
      },
    ],
    officialSources: [
      {
        displayName: "陳偉霆本人微博｜〈My Lady〉發布",
        url: "https://weibo.com/1712570933/4419623623513535",
        type: "官方",
        note: "2019-09-23｜陳偉霆本人分享〈My Lady〉影片及音樂平台收聽入口。",
      },
    ],
  },
  {
    id: "music-hu-hang",
    date: "2021-12-20",
    releaseDate: "2021-12-20",
    title: "〈護航〉",
    category: "音樂",
    type: "單曲",
    artist: "陳偉霆",
    status: "已公開",
    href: "/works/music-hu-hang",
    mediaAlbum: "〈護航〉",
    cover: {
      src: "https://media.williamchanfanpage.com/work/hu-hang00.jpg",
      alt: "〈護航〉單曲封面",
    },
    images: [
      // Cover date follows the owner-specified release date; no source was provided.
      {
        src: "https://media.williamchanfanpage.com/work/hu-hang00.jpg",
        alt: "〈護航〉單曲封面",
        publishedDate: "2021-12-20",
        tags: ["Cover"],
        source: "",
        sourceUrl: "",
      },
      {
        src: "https://media.williamchanfanpage.com/work/hu-hang13.jpg",
        alt: "〈護航〉官方圖片 13",
        publishedDate: "2021-12-20",
        source: "英皇娛樂–北京",
        sourceUrl: "https://weibo.com/3270824053/L6TJtx6Zb",
      },
      {
        src: "https://media.williamchanfanpage.com/work/hu-hang15.jpg",
        alt: "〈護航〉官方圖片 15",
        publishedDate: "2021-12-20",
        source: "英皇娛樂–北京",
        sourceUrl: "https://weibo.com/3270824053/L6TJtx6Zb",
      },
      {
        src: "https://media.williamchanfanpage.com/work/hu-hang18.jpg",
        alt: "〈護航〉官方圖片 18",
        publishedDate: "2021-12-17",
        source: "英皇娛樂–北京",
        sourceUrl: "https://weibo.com/3270824053/L6qTl5zSm",
      },
      {
        src: "https://media.williamchanfanpage.com/work/hu-hang20.jpg",
        alt: "〈護航〉官方圖片 20",
        publishedDate: "2021-12-17",
        source: "英皇娛樂–北京",
        sourceUrl: "https://weibo.com/3270824053/L6qTl5zSm",
      },
      {
        src: "https://media.williamchanfanpage.com/work/hu-hang22.jpg",
        alt: "〈護航〉官方圖片 22",
        publishedDate: "2021-12-17",
        source: "英皇娛樂–北京",
        sourceUrl: "https://weibo.com/3270824053/L6qTl5zSm",
      },
      {
        src: "https://media.williamchanfanpage.com/work/hu-hang27.jpg",
        alt: "〈護航〉官方圖片 27",
        publishedDate: "2021-12-17",
        source: "英皇娛樂–北京",
        sourceUrl: "https://weibo.com/3270824053/L6qTl5zSm",
      },
    ],
    description: "〈護航〉是陳偉霆於 2021 年 12 月推出的粵語單曲。作品在正式發布前以一組 MV 場景照揭開序幕：舊式招牌、狹窄街巷、洗髮屋、老式家具與室內陳設，構成帶有濃厚舊香港氣息的視覺空間。",
    introduction: [
      "〈護航〉是陳偉霆於 2021 年 12 月推出的粵語單曲。作品在正式發布前以一組 MV 場景照揭開序幕：舊式招牌、狹窄街巷、洗髮屋、老式家具與室內陳設，構成帶有濃厚舊香港氣息的視覺空間。",
      "官方預告亦特別以「九宮格空鏡頭」介紹 MV 場景，從環境、物件到家居擺設，都刻意保留老香港的生活質感。12 月 20 日歌曲正式上線，同日 MV 及相關拍攝花絮陸續公開；其後陳偉霆本人亦透過微博分享幕後內容。",
    ],
    seoDescription: "陳偉霆粵語單曲〈護航〉於 2021 年 12 月 20 日正式發布。整理作品介紹、Official MV、YouTube 官方音源、Apple Music、官方宣傳與幕後花絮來源，以及相關時間線。",
    credits: [
      { label: "語言", value: "粵語" },
      { label: "官方預告上線時間", value: "英皇娛樂–北京於 2021-12-16 預告，歌曲將於 2021-12-20 10:00 在 QQ 音樂、酷狗音樂、酷我音樂上線。" },
    ],
    watchLinks: [
      { label: "YouTube Official MV", url: "https://youtu.be/wxfybICSl5Y?si=lpSFuJ1stVq61rsf" },
    ],
    streamingLinks: [
      { label: "YouTube 官方音源", url: "https://youtube.com/watch?v=m_kWH3rZSn0&si=russxgcQpgkZNeAC" },
      { label: "Apple Music", url: "https://music.apple.com/jp/album/%E8%AD%B7%E8%88%AA/1600188161?i=1600188163" },
    ],
    promotion: [
      {
        displayName: "2021-12-16 11:20｜陳偉霆本人微博",
        url: "https://weibo.com/1712570933/4714975597693585",
        type: "官方",
        note: "預熱／宣傳／MV 視覺｜原文：「先给你们剧透一点点。」以 9 張場景照片預熱〈護航〉MV 的環境視覺。",
      },
      {
        displayName: "2021-12-17 11:01｜陳偉霆本人微博",
        url: "https://weibo.com/1712570933/4715333136683025",
        type: "官方",
        note: "宣傳／MV 視覺｜原文：「答应你们的18宫格，安排！」公開 18 宮格〈護航〉相關照片。",
      },
      {
        displayName: "2021-12-20 11:13｜陳偉霆本人微博",
        url: "https://weibo.com/1712570933/4716423350321398",
        type: "官方",
        note: "正式發行｜文案核心：「终于终于终于发粤语新歌了，《护航》一起听🎵」正式宣布粵語新歌〈護航〉發布，當時附 QQ 音樂、酷狗音樂、酷我音樂入口，話題包含 #亚洲新歌榜#、#陈伟霆护航#。",
      },
      {
        displayName: "2021-12-20 12:28｜英皇娛樂–北京",
        url: "https://weibo.com/3270824053/4716442077891681",
        type: "官方",
        note: "宣傳／幕後花絮｜粵語新歌〈護航〉持續載入驚喜，公開 18 宮格 MV 相關花絮，並詢問歌迷是否已聽新歌、觀看 MV。",
      },
      {
        displayName: "2021-12-21 11:05｜陳偉霆本人微博",
        url: "https://weibo.com/1712570933/4716783715748109",
        type: "官方",
        note: "幕後花絮｜原文：「关于《护航》，我想说的。」分享〈護航〉MV／拍攝幕後內容。",
      },
    ],
    officialSources: [
      {
        displayName: "陳偉霆本人微博｜〈護航〉正式發行",
        url: "https://weibo.com/1712570933/4716423350321398",
        type: "官方",
        note: "2021-12-20 11:13｜本人正式宣布粵語新歌發布，作為本作品的主要正式發行來源。",
      },
    ],
  },
  {
    id: "music-yi-bi-jiang-hu",
    date: "2018-04-20",
    releaseDate: "2018-04-20",
    title: "〈一筆江湖〉",
    category: "音樂",
    type: "單曲",
    artist: "陳偉霆",
    status: "已公開",
    description: "陳偉霆於 2018 年 4 月 20 日推出中國風單曲〈一筆江湖〉，以舞為核心延續中華舞魂；Official MV 於 2018 年 6 月 9 日公開，以「立地成我」為主題，呈現不問天命問自我的態度。",
    seoDescription: "整理陳偉霆 2018 年單曲〈一筆江湖〉的官方音樂版、Official MV、Apple Music、官方微博來源與 MV 圖片資料。",
    href: "/works/music-yi-bi-jiang-hu",
    cover: {
      src: "https://media.williamchanfanpage.com/work/yibijianghu00.jpg",
      alt: "〈一筆江湖〉單曲封面",
    },
    images: [
      {
        src: "https://media.williamchanfanpage.com/work/yibijianghu01.jpg",
        alt: "〈一筆江湖〉作品圖片 1",
        source: "英皇娛樂--北京｜官方",
        sourceUrl: "https://weibo.com/3270824053/GcVNJtYJW",
      },
      {
        src: "https://media.williamchanfanpage.com/work/yibijianghu02.jpg",
        alt: "〈一筆江湖〉作品圖片 2",
        source: "英皇娛樂--北京｜官方",
        sourceUrl: "https://weibo.com/3270824053/GcVNJtYJW",
      },
      {
        src: "https://media.williamchanfanpage.com/work/yibijianghu03.jpg",
        alt: "〈一筆江湖〉作品圖片 3",
        source: "英皇娛樂--北京｜官方",
        sourceUrl: "https://weibo.com/3270824053/GcVNJtYJW",
      },
      {
        src: "https://media.williamchanfanpage.com/work/yibijianghu04.jpg",
        alt: "〈一筆江湖〉作品圖片 4",
        source: "陳偉霆本人微博｜官方",
        sourceUrl: "https://weibo.com/1712570933/GkzbUvjme",
      },
      {
        src: "https://media.williamchanfanpage.com/work/yibijianghu05.jpg",
        alt: "〈一筆江湖〉作品圖片 5",
        source: "陳偉霆本人微博｜官方",
        sourceUrl: "https://weibo.com/1712570933/GkzbUvjme",
      },
    ],
    streamingLinks: [
      {
        label: "YouTube 音樂版",
        url: "https://youtu.be/dxJ0pMxvw_s?si=zcCow_rsnRfvj6R_",
      },
      {
        label: "Apple Music",
        url: "https://music.apple.com/jp/album/%E4%B8%80%E7%AD%86%E6%B1%9F%E6%B9%96/1374090135?i=1374091333",
      },
    ],
    watchLinks: [
      {
        label: "YouTube Official MV｜2018-06-09 公開",
        url: "https://youtu.be/hB0Qa7nAdZc?si=NIFBQBPFRVasO6lb",
      },
    ],
    credits: [
      { label: "定位製作人", value: "劉洲" },
      { label: "作詞", value: "臨渡" },
      { label: "作曲", value: "劉洲" },
      { label: "編曲", value: "劉洲" },
      { label: "Official MV", value: "2018-06-09" },
    ],
    officialSources: [
      {
        displayName: "英皇娛樂--北京｜新歌正式上線",
        url: "https://weibo.com/3270824053/GcVNJtYJW",
        type: "官方",
        note: "2018-04-20｜公司官方 / 新歌發行｜英皇娛樂--北京宣布陳偉霆全新中國風單曲〈一筆江湖〉於當日上午 10:00 正式上線，介紹歌曲以激情潑墨揮毫、勾勒熱血舞林江湖。",
      },
      {
        displayName: "英皇娛樂--北京｜MV 上線倒數",
        url: "https://weibo.com/3270824053/GkpuhBWRq",
        type: "官方",
        note: "公司官方 / MV 宣傳｜英皇娛樂--北京發布〈一筆江湖〉MV 上線倒數 1 天宣傳，介紹 MV 以「立地成我」為主題，表達不問天命問自我的態度。",
      },
      {
        displayName: "英皇娛樂--北京｜MV 花絮",
        url: "https://weibo.com/3270824053/GkIMzj9ss",
        type: "官方",
        note: "公司官方 / MV 花絮｜英皇娛樂--北京公開〈一筆江湖〉MV 拍攝花絮圖，記錄拍攝過程中的精彩瞬間。",
      },
      {
        displayName: "陳偉霆本人微博｜官方",
        url: "https://weibo.com/1712570933/GkzbUvjme",
        type: "官方",
        note: "本人官方 / MV 相關內容｜Gallery 圖片 04、05 的原始來源。",
      },
    ],
  },
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
    id: "music-dear-future-lover",
    date: "2021-08-11",
    releaseDate: "2021-08-11",
    title: "〈Dear Future Lover〉",
    category: "音樂",
    type: "單曲",
    artist: "陳偉霆",
    status: "已公開",
    description: "陳偉霆於 2021 年 8 月 11 日推出單曲〈Dear Future Lover〉，並同步公開 MV 與多組官方造型宣傳內容。",
    seoDescription: "陳偉霆 2021 年單曲〈Dear Future Lover〉，整理官方 MV、Apple Music 與本人及工作室宣傳來源。",
    href: "/works/music-dear-future-lover",
    cover: {
      src: "https://media.williamchanfanpage.com/work/dearfuturelover00.jpg",
      alt: "〈Dear Future Lover〉單曲封面",
    },
    images: [
      {
        src: "https://media.williamchanfanpage.com/work/dearfuturelover01.jpg",
        alt: "〈Dear Future Lover〉作品圖片 1",
        source: "官方宣傳圖片",
        sourceUrl: "https://media.williamchanfanpage.com/work/dearfuturelover01.jpg",
      },
      {
        src: "https://media.williamchanfanpage.com/work/dearfuturelover02.jpg",
        alt: "〈Dear Future Lover〉作品圖片 2",
        source: "官方宣傳圖片",
        sourceUrl: "https://media.williamchanfanpage.com/work/dearfuturelover02.jpg",
      },
      {
        src: "https://media.williamchanfanpage.com/work/dearfuturelover03.jpg",
        alt: "〈Dear Future Lover〉作品圖片 3",
        source: "官方宣傳圖片",
        sourceUrl: "https://media.williamchanfanpage.com/work/dearfuturelover03.jpg",
      },
      {
        src: "https://media.williamchanfanpage.com/work/dearfuturelover04.jpg",
        alt: "〈Dear Future Lover〉作品圖片 4",
        source: "官方宣傳圖片",
        sourceUrl: "https://media.williamchanfanpage.com/work/dearfuturelover04.jpg",
      },
    ],
    streamingLinks: [
      {
        label: "YouTube 音樂版",
        url: "https://youtu.be/Q83uf-4CsHM?si=TlAMq4Zc6rCWUpP5",
      },
      {
        label: "Apple Music",
        url: "https://music.apple.com/jp/album/dear-future-lover/1579265345?i=1579265556",
      },
    ],
    watchLinks: [
      {
        label: "YouTube Official MV",
        url: "https://youtu.be/pA--RD6P5vc?si=Rg1sh3PZuTcCpLNb",
      },
    ],
    cardLinks: [
      {
        label: "YouTube 音樂版",
        url: "https://youtu.be/Q83uf-4CsHM?si=TlAMq4Zc6rCWUpP5",
      },
      {
        label: "Apple Music",
        url: "https://music.apple.com/jp/album/dear-future-lover/1579265345?i=1579265556",
      },
    ],
    officialSources: [
      {
        displayName: "陳偉霆本人微博｜官方",
        url: "https://weibo.com/1712570933/4668947456333012",
        type: "官方",
        note: "2021-08-11｜本人官方｜陳偉霆宣傳新歌〈Dear Future Lover〉，並以限定版橙色頭髮造型配合歌曲宣傳。",
      },
      {
        displayName: "W-Daily｜官方",
        url: "https://weibo.com/6269525799/4668972719674798",
        type: "官方",
        note: "2021-08-11 12:41｜工作室官方 / 新歌宣傳 / MV 造型｜工作室發布新歌宣傳內容，重點呈現限定版橙色頭髮與綠色外套、紅色拳擊手套造型。",
      },
      {
        displayName: "W-Daily｜官方",
        url: "https://weibo.com/6269525799/4668962249642509",
        type: "官方",
        note: "2021-08-11 12:00｜工作室官方 / MV 宣傳｜工作室發布〈Dear Future Lover〉MV 九宮格花絮，展示眺望台場景與橙髮造型。",
      },
      {
        displayName: "W-Daily｜官方",
        url: "https://weibo.com/6269525799/4669311202885978",
        type: "官方",
        note: "2021-08-12｜工作室官方 / MV 造型｜工作室分享〈Dear Future Lover〉MV 中粉紅牛仔帽與橘紫印花襯衫造型。",
      },
    ],
    visualHighlights: [
      {
        title: "眺望台場景與橙髮造型",
        description: "MV 九宮格花絮呈現眺望台場景與限定版橙色頭髮造型。",
        sourceUrl: "https://weibo.com/6269525799/4668962249642509",
      },
      {
        title: "綠色外套與紅色拳擊手套造型",
        description: "新歌宣傳內容呈現橙色頭髮、綠色外套與紅色拳擊手套的視覺搭配。",
        sourceUrl: "https://weibo.com/6269525799/4668972719674798",
      },
      {
        title: "粉紅牛仔帽與印花襯衫造型",
        description: "MV 造型以粉紅牛仔帽搭配橘紫印花襯衫。",
        sourceUrl: "https://weibo.com/6269525799/4669311202885978",
      },
    ],
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
    introduction: [
      "〈哪怕我們〉以強烈鼓點、電吉他與搖滾編制展開，MV 以荒原、熔岩、巨獸與傷痕等意象構築帶有末世感的世界。作品沒有迴避受傷、困境與失敗，而是把重點放在即使身處裂痕之中，仍選擇保持信念、繼續向前。",
      "MV 中，陳偉霆組成一支虛構樂隊，自己擔任主唱 William，並以不同角色構成鍵盤手菲彈 Fizz、吉他手銀影 Silver、鼓手刺仔 Spike 與貝斯手泰坦 Titan。音樂與視覺共同呈現出「在困境中重新出發」的力量感，也呼應官方宣傳中「裂痕之上，不是終點，是新生之地」的概念。",
    ],
    mvReleaseDate: "2026-09-10",
    mvBand: [
      { label: "主唱", value: "陳偉霆 William" },
      { label: "鍵盤手", value: "菲彈 Fizz" },
      { label: "吉他手", value: "銀影 Silver" },
      { label: "鼓手", value: "刺仔 Spike" },
      { label: "貝斯手", value: "泰坦 Titan" },
    ],
    watchLinks: [{ label: "Official MV｜YouTube", url: "https://youtu.be/Acb7ME91XJg?si=bMLeyEwOYnrKyfjY" }],
    promotion: [
      {
        displayName: "w-Daily／陳偉霆工作室｜MV 拍攝記錄",
        url: "https://weibo.com/6269525799/5341542782600127",
        type: "官方",
        note: "2026-09-10｜〈哪怕我們〉MV 拍攝／幕後照片組。",
      },
      {
        displayName: "陳偉霆本人微博｜18 宮格與直播預告",
        url: "https://weibo.com/1712570933/5341593386356404",
        type: "官方",
        note: "2026-09-10 14:36｜發布〈哪怕我們〉相關 18 宮格照片，並預告「晚上 18:30 直播聊」。",
      },
      {
        displayName: "陳偉霆本人微博｜當晚微博直播",
        url: "https://weibo.com/1712570933/5341667470084903",
        type: "官方",
        note: "2026-09-10 19:30 相關微博｜直播開始階段先由陳偉霆本人單獨談〈哪怕我們〉MV，之後才進入粉絲連線／互動環節。",
      },
    ],
    href: "/works/music-na-pa-wo-men",
    mediaAlbum: "《哪怕我們》",
    images: [
      {
        src: "https://media.williamchanfanpage.com/work/napawomen20260910-3.jpg",
        alt: "《哪怕我們》MV 公開日照片 3",
        publishedDate: "2026-09-10",
        tags: ["MV", "Promotion"],
        source: "陳偉霆本人微博｜官方",
        sourceUrl: "https://weibo.com/1712570933/Rhs26qFAE",
      },
      {
        src: "https://media.williamchanfanpage.com/work/napawomen20260910-5.jpg",
        alt: "《哪怕我們》MV 公開日照片 5",
        publishedDate: "2026-09-10",
        tags: ["MV", "Promotion"],
        source: "陳偉霆本人微博｜官方",
        sourceUrl: "https://weibo.com/1712570933/Rhs26qFAE",
      },
      {
        src: "https://media.williamchanfanpage.com/work/napawomen20260910-6.jpg",
        alt: "《哪怕我們》MV 公開日照片 6",
        publishedDate: "2026-09-10",
        tags: ["MV", "Promotion"],
        source: "陳偉霆本人微博｜官方",
        sourceUrl: "https://weibo.com/1712570933/Rhs26qFAE",
      },
    ],
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
      {
        displayName: "陳偉霆本人微博｜MV 正式公開與樂隊設定",
        url: "https://weibo.com/1712570933/5341539146400636",
        type: "官方",
        note: "2026-09-10 11:00｜正式宣布〈哪怕我們〉MV 上線，並介紹樂隊成員。",
      },
      {
        displayName: "英皇娛樂--北京｜MV 正式公開",
        url: "https://weibo.com/3270824053/5341539430564305",
        type: "官方",
        note: "2026-09-10 11:01｜〈哪怕我們〉MV 正式上線宣傳：「裂痕之上，不是終點，是新生之地。」",
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
