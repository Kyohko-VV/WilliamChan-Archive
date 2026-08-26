const START_DATE = "2026-08-26";
const END_DATE = "2026-09-18";
const FINAL_EPISODE = 18;
const BROADCAST_DAY_ROLLOVER_HOUR = 1;

const japaneseDateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  weekday: "short",
});

const weekdayLabels = {
  Mon: "月",
  Tue: "火",
  Wed: "水",
  Thu: "木",
  Fri: "金",
  Sat: "土",
  Sun: "日",
};

function getJapaneseDate(date) {
  // Official 24:00–25:00 notation belongs to the preceding broadcast day.
  const broadcastDate = new Date(
    date.getTime() - BROADCAST_DAY_ROLLOVER_HOUR * 60 * 60 * 1000,
  );
  const parts = Object.fromEntries(
    japaneseDateFormatter
      .formatToParts(broadcastDate)
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, value]),
  );

  return {
    dateKey: `${parts.year}-${parts.month}-${parts.day}`,
    month: Number(parts.month),
    day: Number(parts.day),
    weekday: parts.weekday,
  };
}

function countWeekdaysThrough(dateKey) {
  const start = new Date(`${START_DATE}T00:00:00Z`);
  const end = new Date(`${dateKey}T00:00:00Z`);
  let count = 0;

  for (let date = start; date <= end; date.setUTCDate(date.getUTCDate() + 1)) {
    const weekday = date.getUTCDay();
    if (weekday >= 1 && weekday <= 5) count += 1;
  }

  return count;
}

export function getTaiyoToHoshiBroadcast(date = new Date()) {
  const japaneseDate = getJapaneseDate(date);

  if (
    japaneseDate.dateKey < START_DATE ||
    japaneseDate.dateKey > END_DATE ||
    japaneseDate.weekday === "Sat" ||
    japaneseDate.weekday === "Sun"
  ) {
    return null;
  }

  const episode = countWeekdaysThrough(japaneseDate.dateKey);
  if (episode < 1 || episode > FINAL_EPISODE) return null;

  return {
    episode: `#${episode}${episode === FINAL_EPISODE ? "（終）" : ""}`,
    officialTime: `${japaneseDate.month}/${japaneseDate.day}（${weekdayLabels[japaneseDate.weekday]}）24:00～25:00`,
  };
}
