import type { APIRoute } from "astro";
import { kiData } from "../lib/ki";
export const GET: APIRoute = () =>
  new Response(JSON.stringify(kiData(), null, 2), {
    headers: { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*" },
  });
