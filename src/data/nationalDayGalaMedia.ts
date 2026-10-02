// Shared metadata for this event gallery and its explicit Media Archive opt-in.
export const nationalDayGalaMedia = ["01", "02", "03", "04"].map((number) => ({
  id: `2026-china-national-day-gala-${number}`,
  title: `2026-10-01 · Promotion / Stage · ${number}`,
  image: `https://media.williamchanfanpage.com/events/2026guoqing-${number}.jpg`,
  alt: `2026 國慶特別節目｜陳偉霆舞台照片 ${number}`,
  source: "w-Daily／陳偉霆工作室",
  sourceUrl: "https://weibo.com/6269525799/RkEFQbuLc",
  publishedDate: "2026-10-01",
  category: "Event / Stage" as const,
  album: "央視國慶晚會｜2026-10-01",
  tags: ["Stage", "Promotion"],
  relatedType: "event",
  relatedId: "2026-china-national-day-gala",
}));
