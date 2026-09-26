import type { Work } from "../data/works";

/** Keep the stored Music Work type reusable while presenting its Chinese label. */
export function musicWorkTypeLabel(type: Work["type"]) {
  if (type === "single") return "單曲";
  if (type === "album") return "專輯";
  return type;
}

/** Normalize existing date separators for comparison without inventing date precision. */
export function workDateKey(date: string) {
  return date.replaceAll(".", "-").split("-").map((part) => part.padStart(2, "0")).join("-");
}

export function newestWorkFirst(a: Work, b: Work) {
  return workDateKey(b.date).localeCompare(workDateKey(a.date));
}

/** Display categories only; preserve the stored Work categories and content. */
export function workDisplayCategory(work: Work) {
  if (work.category !== "影視") return work.category;
  // Retain the existing page's identification of this untyped variety programme.
  if (work.href === "/events/2026-our-dormitory-party" || work.type?.includes("綜藝")) return "綜藝節目";
  if (work.type?.includes("電影")) return "電影";
  return "影視";
}
