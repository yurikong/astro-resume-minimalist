/**
 * Sort by most recent year.
 * @template T
 * @param {T} a - Item to compare.
 * @param {T} b - Item to compare.
 * @returns {number} Same as the return value of `compareFn` in `Array.sort()`.
 */
export function mostRecentYearComparator<T extends { startYear: number; endYear?: number | undefined }>(
  a: T,
  b: T
): number {
  if (a.endYear === b.endYear) {
    return b.startYear - a.startYear
  } else if (a.endYear === undefined) {
    return -1
  } else if (b.endYear === undefined) {
    return 1
  } else {
    return b.endYear - a.endYear
  }
}
