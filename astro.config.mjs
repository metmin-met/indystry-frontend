import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "node:fs";

// Marke/Domain kommen aus der zentralen brand.json (eine Stelle).
const brand = JSON.parse(readFileSync(new URL("../brand.json", import.meta.url), "utf8"));

// DE an der Root (kein Prefix), EN unter /en/. Statischer Output (SSG) — "self-updating"
// passiert über periodischen Rebuild (deploy/systemd/*-build.timer).
export default defineConfig({
  site: process.env.SITE_URL || brand.url,
  output: "static",
  i18n: {
    // URL-Segmente: DE an der Root, EN unter /en/, Chinesisch unter /cn/ (hreflang zh-Hans).
    defaultLocale: "de",
    locales: ["de", "en", "cn"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({
    i18n: { defaultLocale: "de", locales: { de: "de", en: "en", cn: "zh-Hans" } },
  })],
  vite: { plugins: [tailwindcss()] },
});
