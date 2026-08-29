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
