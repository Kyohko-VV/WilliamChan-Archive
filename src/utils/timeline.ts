interface TimelineEntry {
  date: string;
  id?: string;
  anchor?: string;
}

/** Sort date strings directly: preserve date precision and stable same-day order. */
export function buildTimeline<T extends TimelineEntry>(entries: readonly T[]) {
  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));
  const years = [...new Set(sorted.map((event) => event.date.slice(0, 4)))];
  const anchorYears = Object.fromEntries(entries.flatMap((event) =>
    [event.id, event.anchor].filter((id): id is string => !!id)
      .map((id) => [id, event.date.slice(0, 4)]),
  ));
  return {
    years,
    anchorYears,
    forYear(year: string) {
      const events = sorted.filter((event) => event.date.slice(0, 4) === year);
      const months = [...new Set(events.map((event) => event.date.slice(5, 7)))];
      return {
        events,
        groups: months.map((month) => ({
          month,
          label: month ? `${Number(month)} 月` : "月份未詳",
          events: events.filter((event) => event.date.slice(5, 7) === month),
        })),
      };
    },
  };
}
