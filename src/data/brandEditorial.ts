export interface BrandEditorialSource {
  name: string;
  url: string;
  type: string;
  summary: string;
}

export interface BrandEditorialImage {
  url: string;
  alt: string;
}

export interface BrandEditorialEntry {
  id: string;
  date: string;
  brand: string;
  title: string;
  type: string;
  location: string;
  role: string;
  summary: string;
  images: BrandEditorialImage[];
  officialSources: BrandEditorialSource[];
  editorialSources: BrandEditorialSource[];
  mediaSources: BrandEditorialSource[];
}

export const brandEditorialEntries: BrandEditorialEntry[] = [
  {
    id: "chanel-signes-symboles-shanghai-2026",
    date: "2026-08-20",
    brand: "CHANEL 香奈兒",
    title: "SIGNES & SYMBOLES 臻品珠寶系列",
    type: "品牌活動 / 珠寶活動",
    location: "上海",
    role: "品牌形象大使",
    summary: "陳偉霆出席香奈兒於上海舉辦的 SIGNES & SYMBOLES 臻品珠寶系列活動。",
    images: [
      {
        url: "https://media.williamchanfanpage.com/Brand/chanel-20260820-1.jpg",
        alt: "陳偉霆出席 CHANEL SIGNES & SYMBOLES 臻品珠寶系列上海活動（一）",
      },
      {
        url: "https://media.williamchanfanpage.com/Brand/chanel-20260820-2.jpg",
        alt: "陳偉霆出席 CHANEL SIGNES & SYMBOLES 臻品珠寶系列上海活動（二）",
      },
      {
        url: "https://media.williamchanfanpage.com/Brand/chanel-20260820-3.jpg",
        alt: "陳偉霆出席 CHANEL SIGNES & SYMBOLES 臻品珠寶系列上海活動（三）",
      },
    ],
    officialSources: [
      {
        name: "CHANEL 品牌官方微博",
        url: "https://weibo.com/1892475055/5335483036991800",
        type: "品牌官方",
        summary: "CHANEL 品牌形象大使辛芷蕾與陳偉霆出席上海活動；系列重新演繹山茶花、星辰、太陽與獅子等象徵符號。",
      },
      {
        name: "陳偉霆本人微博",
        url: "https://weibo.com/1712570933/5334826380955991",
        type: "本人官方",
        summary: "從本人角度介紹獅子、星辰、山茶花與太陽等 CHANEL 符號。",
      },
      {
        name: "英皇娛樂--北京",
        url: "https://weibo.com/3270824053/5335097110694925",
        type: "公司官方",
        summary: "在山茶花詩意的符號間，釋放松弛矜貴。",
      },
    ],
    editorialSources: [
      {
        name: "VOGUE 服飾與美容",
        url: "https://weibo.com/1765870915/5334840334615939",
        type: "Editorial",
        summary: "報導辛芷蕾、陳偉霆佩戴 CHANEL SIGNES & SYMBOLES 系列出席上海發布活動。",
      },
      {
        name: "嘉人 marie claire",
        url: "https://weibo.com/1399746707/5335131816460754",
        type: "Editorial",
        summary: "報導兩人亮相上海系列預覽現場，並介紹珠寶系列的設計概念。",
      },
    ],
    mediaSources: [
      {
        name: "Chrison 克里森",
        url: "https://weibo.com/1614137095/5334842498615767",
        type: "造型 / 時尚 Editorial",
        summary: "記錄陳偉霆佩戴系列珠寶，並提及 CHANEL MONSIEUR LION BLACK EDITION 腕錶。",
      },
      {
        name: "小象王國",
        url: "https://weibo.com/1669197345/5335471521531516",
        type: "珠寶專題 / 時尚媒體",
        summary: "介紹系列設計概念，以及山茶花、星辰、太陽、獅子等符號。",
      },
      {
        name: "Xavier 杰斯君",
        url: "https://weibo.com/1762928124/5337967021526631",
        type: "延伸時尚內容",
        summary: "整理辛芷蕾、陳偉霆與香奈兒臻品珠寶的最新物料及視頻。",
      },
    ],
  },
];
