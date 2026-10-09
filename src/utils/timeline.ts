interface TimelineEntry {
  date: string;
  id?: string;
  anchor?: string;
}

export const TIMELINE_PAGE_SIZE = 12;

export function timelinePageHref(page: number) {
  return page === 1 ? "/timeline/" : `/timeline/page/${page}/`;
}

/** Sort date strings directly: preserve date precision and stable same-day order. */
export function buildTimeline<T extends TimelineEntry>(entries: readonly T[]) {
  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));
  const years = [...new Set(sorted.map((event) => event.date.slice(0, 4)))];
  const anchorYears = Object.fromEntries(entries.flatMap((event) =>
    [event.id, event.anchor].filter((id): id is string => !!id)
      .map((id) => [id, event.date.slice(0, 4)]),
  ));
  const pageCount = Math.max(1, Math.ceil(sorted.length / TIMELINE_PAGE_SIZE));
  const groupEvents = (events: T[]) => {
    const periods = [...new Set(events.map((event) => event.date.slice(0, 7)))];
    return periods.map((period) => {
      const year = period.slice(0, 4);
      const month = period.slice(5, 7);
      return {
        year,
        month,
        label: month ? `${Number(month)} 月` : "月份未詳",
        events: events.filter((event) => event.date.slice(0, 7) === period),
      };
    });
  };
  return {
    events: sorted,
    years,
    anchorYears,
    pageCount,
    forPage(page: number) {
      const events = sorted.slice((page - 1) * TIMELINE_PAGE_SIZE, page * TIMELINE_PAGE_SIZE);
      return { events, groups: groupEvents(events) };
    },
    forYear(year: string) {
      const events = sorted.filter((event) => event.date.slice(0, 4) === year);
      return {
        events,
        groups: groupEvents(events),
      };
    },
  };
}
