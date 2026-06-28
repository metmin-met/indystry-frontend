import type { APIRoute } from "astro";
import { brand } from "../lib/content";

// Öffentliche Seite = voll indexierbar (das ist der Sinn). Sitemap + llms.txt verlinkt.
export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${brand.url}/sitemap-index.xml`,
    `# llms: ${brand.url}/llms.txt`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
};
