/** Project an event into Today using the page's Asia/Tokyo YYYY-MM-DD date. */
export function getCountdownEvent(event, currentDate) {
  const countdown = event.countdown;
  if (!countdown || currentDate < countdown.startDate || currentDate > countdown.targetDate) return null;
  // Compare calendar days at UTC midnight, avoiding browser timezone/DST offsets.
  const days = (Date.parse(`${countdown.targetDate}T00:00:00Z`) - Date.parse(`${currentDate}T00:00:00Z`)) / 86400000;
  if (!Number.isInteger(days) || days < 0) return null;
  return {
    ...event,
    title: countdown.title,
    description: countdown.description,
    countdownText: days === 0 ? countdown.releaseDayTitle : countdown.countdownTitle.replaceAll('{days}', String(days)),
  };
}
