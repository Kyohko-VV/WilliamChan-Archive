export const watashiNoKanpekiNaKekkonBroadcastSchedule = {
  startDate: "2026-07-06",
  endDate: "2026-10-26",
  broadcastWeekday: 1,
  episodesPerDay: 2,
  finalEpisode: 32,
  excludedDates: ["2026-09-28"],
};

const japaneseDateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function getJapaneseDateKey(date) {
  const parts = Object.fromEntries(
    japaneseDateFormatter
      .formatToParts(date)
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, value]),
  );

  return `${parts.year}-${parts.month}-${parts.day}`;
}

function isScheduledBroadcastDate(dateKey) {
  const schedule = watashiNoKanpekiNaKekkonBroadcastSchedule;
  if (
    dateKey < schedule.startDate ||
    dateKey > schedule.endDate ||
    schedule.excludedDates.includes(dateKey)
  ) {
    return false;
  }

  return new Date(`${dateKey}T00:00:00Z`).getUTCDay() === schedule.broadcastWeekday;
}

function countBroadcastDaysThrough(dateKey) {
  const schedule = watashiNoKanpekiNaKekkonBroadcastSchedule;
  const date = new Date(`${schedule.startDate}T00:00:00Z`);
  const end = new Date(`${dateKey}T00:00:00Z`);
  let count = 0;

  for (; date <= end; date.setUTCDate(date.getUTCDate() + 1)) {
    const currentDateKey = date.toISOString().slice(0, 10);
    if (isScheduledBroadcastDate(currentDateKey)) count += 1;
  }

  return count;
}

export function getWatashiNoKanpekiNaKekkonBroadcast(date = new Date()) {
  const dateKey = getJapaneseDateKey(date);
  if (!isScheduledBroadcastDate(dateKey)) return null;

  const schedule = watashiNoKanpekiNaKekkonBroadcastSchedule;
  const firstEpisode =
    (countBroadcastDaysThrough(dateKey) - 1) * schedule.episodesPerDay + 1;
  const secondEpisode = firstEpisode + 1;

  if (firstEpisode < 1 || secondEpisode > schedule.finalEpisode) return null;

  return {
    firstEpisode: `#${firstEpisode}`,
    secondEpisode: `#${secondEpisode}${secondEpisode === schedule.finalEpisode ? "（最終話）" : ""}`,
  };
}
