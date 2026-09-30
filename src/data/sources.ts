export const sourceCategories = [
  "陳偉霆本人",
  "工作室／公司",
] as const;

export type SourceCategory = (typeof sourceCategories)[number];

export interface ArchiveSource {
  name: string;
  category: SourceCategory;
  platform: string;
  url: string;
  description: string;
  official: boolean;
  accountName?: string;
  accountId?: string;
  accountIdLabel?: string;
}

export const sources: ArchiveSource[] = [
  {
    name: "陳偉霆 微博",
    category: "陳偉霆本人",
    platform: "微博",
    url: "https://weibo.com/u/1712570933",
    description: "陳偉霆本人發布近況、作品與活動資訊的官方微博。",
    official: true,
    accountName: "William威廉陳偉霆",
    accountId: "1712570933",
    accountIdLabel: "UID",
  },
  {
    name: "陳偉霆 Instagram",
    category: "陳偉霆本人",
    platform: "Instagram",
    url: "https://www.instagram.com/williamchanwaiting",
    description: "陳偉霆本人 Instagram 官方帳號。",
    official: true,
    accountName: "williamchanwaiting",
    accountId: "@williamchanwaiting",
    accountIdLabel: "Handle",
  },
  {
    name: "陳偉霆 小紅書",
    category: "陳偉霆本人",
    platform: "小紅書",
    url: "https://xhslink.cn/m/6cT7gRUtdgL",
    description: "陳偉霆本人小紅書帳號。",
    official: true,
    accountName: "William 威廉陈伟霆",
    accountId: "1037758838",
    accountIdLabel: "小紅書號",
  },
  {
    name: "陳偉霆 Douyin／抖音",
    category: "陳偉霆本人",
    platform: "Douyin／抖音",
    url: "https://www.douyin.com/user/MS4wLjABAAAAKRuu0pU59oO4j7wDK_AC-BKXXpsjYindYzkcvxQMtkljXgUezRAE3hkJNgFpg6JA",
    description: "陳偉霆本人抖音帳號。",
    official: true,
    accountName: "William威廉陳偉霆",
    accountId: "Williamchanwaitii",
    accountIdLabel: "抖音號",
  },
  {
    name: "陳偉霆 YouTube",
    category: "陳偉霆本人",
    platform: "YouTube",
    url: "https://www.youtube.com/@williamchan6092",
    description: "陳偉霆本人 YouTube 頻道。",
    official: true,
    accountName: "陳偉霆 William Chan",
    accountId: "@williamchan6092",
    accountIdLabel: "Handle",
  },
  {
    name: "w-Daily／陳偉霆工作室",
    category: "工作室／公司",
    platform: "微博",
    url: "https://weibo.com/6269525799/5335751145295252",
    description: "工作室發布行程、活動、作品與幕後內容的官方來源。",
    official: true,
  },
  {
    name: "英皇娛樂－北京",
    category: "工作室／公司",
    platform: "微博",
    url: "https://weibo.com/3270824053/ReLCagXPd",
    description: "經紀公司發布演藝活動、作品宣傳與相關消息的官方來源。",
    official: true,
  },
];
