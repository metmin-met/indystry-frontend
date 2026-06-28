import type { APIRoute } from "astro";
import { machineFull } from "../lib/ki";
export const GET: APIRoute = () =>
  new Response(machineFull() + "\n", { headers: { "content-type": "text/plain; charset=utf-8" } });
