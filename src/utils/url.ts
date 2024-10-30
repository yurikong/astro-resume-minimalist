import { posix } from "node:path"

/**
 * Gets a url relative to `BASE_URL`
 * @param {string} url
 * @returns {string}
 */
export function fromBaseURL(url: string): string {
  return posix.join(import.meta.env.BASE_URL, url)
}
