export type PeopleCharacterType = "person" | "character";

export interface RelatedLink {
  label: string;
  href?: string;
}

export interface RelatedEvent extends RelatedLink {
  date: string;
}

export interface PeopleCharacterEntry {
  id: string;
  name: string;
  type: PeopleCharacterType;
  englishName?: string;
  actor?: string;
  roles?: string[];
  description?: string;
  relatedWorks?: RelatedLink[];
  relatedEvents?: RelatedEvent[];
  links?: RelatedLink[];
  thumbnail?: {
    src: string;
    alt: string;
    source: string;
    sourceUrl: string;
  };
}

export const peopleCharacters: PeopleCharacterEntry[] = [
  {
    id: "william-chan",
    name: "陳偉霆",
    englishName: "William Chan",
    type: "person",
    roles: ["歌手", "演員"],
    description:
      "陳偉霆（William Chan），歌手、演員。本站透過作品、角色、舞台、時間線與官方來源整理其演藝記錄。",
    links: [
      { label: "官方來源", href: "/sources" },
      { label: "作品", href: "/works" },
      { label: "時間線", href: "/timeline" },
    ],
  },
  {
    id: "wahwah-liu",
    name: "廖志華",
    englishName: "WahWah Liu",
    type: "person",
    roles: ["音樂製作人", "作曲人", "A&R Director"],
    description:
      "廖志華（WahWah Liu），香港音樂製作人、作曲人及 A&R Director，任職英皇娛樂集團。長期參與香港流行音樂的唱片製作與藝人音樂企劃，工作範圍包括歌曲監製、作曲、配唱製作、錄音及聲音製作等。",
    relatedWorks: [{ label: "〈哪怕我們〉", href: "/works/music-na-pa-wo-men" }],
    links: [
      { label: "微博（本人）", href: "https://weibo.com/u/1729131313" },
      { label: "Instagram（本人）", href: "https://www.instagram.com/wahwahliu/" },
    ],
  },
  {
    id: "davy-yu",
    name: "Davy Yu",
    type: "person",
    roles: ["髮型師", "Hair Stylist", "AdmiX 藝術總監"],
    description:
      "Davy Yu，香港資深髮型師、AdmiX 藝術總監。自 2002 年起從事髮型造型工作，曾參與時裝及藝人髮型設計，多年來與陳偉霆保持長期合作，參與其影視宣傳、雜誌拍攝及公開活動等髮型造型工作。",
    relatedWorks: [{ label: "〈哪怕我們〉", href: "/works/music-na-pa-wo-men" }],
    links: [
      { label: "個人 Instagram", href: "https://www.instagram.com/davyyu_hair/" },
      { label: "AdmiX 官方網站", href: "https://www.admix.hk/" },
      { label: "AdmiX Instagram", href: "https://www.instagram.com/admixhairstyling/" },
    ],
  },
  {
    id: "khaki-yan",
    name: "Khaki Yan",
    type: "person",
    roles: ["化妝師", "Makeup Artist"],
    description:
      "Khaki Yan，香港化妝師（Makeup Artist）。長期參與藝人、雜誌及影視相關造型工作，亦曾多次擔任陳偉霆的化妝師。",
    relatedWorks: [{ label: "〈哪怕我們〉", href: "/works/music-na-pa-wo-men" }],
    links: [
      { label: "個人 Instagram", href: "https://www.instagram.com/khaki_yan/" },
    ],
  },
  {
    id: "wang-zhicheng",
    name: "王志誠",
    type: "character",
    actor: "陳偉霆",
    thumbnail: {
      src: "https://media.williamchanfanpage.com/work/aiqingmanman2026-09-23-01.jpg",
      alt: "《愛情慢慢》王志誠公開人物海報，陳偉霆飾王志誠",
      source: "陳偉霆本人微博",
      sourceUrl: "https://weibo.com/1712570933/5346261874247323",
    },
    description:
      "王志誠是《愛情慢慢》中由陳偉霆飾演的角色。陳偉霆本人於 2026 年 9 月 23 日在微博公開人物海報，海報明確標示「陳偉霆 飾 王志誠」。",
    relatedWorks: [{ label: "《愛情慢慢》", href: "/works/aiqingmanman" }],
    links: [
      { label: "飾演：陳偉霆", href: "/people-characters#william-chan" },
      { label: "第一手來源：陳偉霆本人微博", href: "https://weibo.com/1712570933/5346261874247323" },
      { label: "公開人物海報｜來源：陳偉霆本人微博", href: "https://media.williamchanfanpage.com/work/aiqingmanman2026-09-23-01.jpg" },
    ],
  },
  {
    id: "zhang-qishan",
    name: "張啟山",
    type: "character",
    actor: "陳偉霆",
    relatedWorks: [
      { label: "《老九門》" },
      { label: "《九門》" },
    ],
  },
  {
    id: "yang-guangyao",
    name: "楊光耀",
    type: "character",
    actor: "陳偉霆",
    relatedWorks: [{ label: "《太陽星辰》", href: "/works" }],
    relatedEvents: [
      {
        date: "2026-06-25",
        label: "日本首次播出開始",
        href: "/timeline#taiyo-to-hoshi-japan-premiere-2026-06-25",
      },
      {
        date: "2026-08-26",
        label: "日本再次播出開始",
        href: "/timeline#taiyo-to-hoshi-japan-rebroadcast-2026-08-26",
      },
    ],
  },
];
