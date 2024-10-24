export function throttle(func: Function, delay: number): (...args: unknown[]) => void {
  let prev: number = 0
  return (...args: unknown[]): void => {
    const now: number = new Date().getTime()
    if (now - prev > delay) {
      func(...args)
      prev = now
    }
  }
}
