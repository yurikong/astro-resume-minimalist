/**
 * Sort by most recent year.
 * @template T
 * @param {T} a - Item to compare.
 * @param {T} b - Item to compare.
 * @returns {number} Same as the return value of `compareFn` in `Array.sort()`.
 */
export function mostRecentYearComparator<T extends { startYear: number; endYear: number }>(a: T, b: T): number {
  if (b.endYear === a.endYear) {
    return b.startYear - a.startYear
  }
  return b.endYear - a.endYear
}
