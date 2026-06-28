import type { APIRoute } from "astro";
import { machineDoc } from "../lib/ki";
export const GET: APIRoute = () =>
  new Response(machineDoc() + "\n", { headers: { "content-type": "text/plain; charset=utf-8" } });
