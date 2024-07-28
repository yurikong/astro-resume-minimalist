import type { APIRoute } from "astro"

const robotsTxt: string = `
User-agent: *
Allow: /

Sitemap: ${
  new URL(
    "sitemap-index.xml",
    new URL(import.meta.env.BASE_URL, import.meta.env.SITE).href
  ).href
}
`.trim()

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
