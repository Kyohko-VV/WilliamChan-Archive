export type WorkCategory = "影視" | "音樂" | "舞台・活動";

export interface Work {
  date: string;
  title: string;
  category: WorkCategory;
  location: string;
  href: string;
}

export const works: Work[] = [
  {
    date: "2026.08.23",
    title: "2026 TIMA 國際音樂大賞",
    category: "舞台・活動",
    location: "香港・啟德主場館",
    href: "/events/2026-tima",
  },
];
