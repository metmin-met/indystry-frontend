// Macht Demo-Referenzen im pandoc-HTML klickbar: <code>erp-demo…</code> / <code>/leitstand/</code>
// → gestylte Anchor-„Demo-Chips" (Pillar-Farbe, ↗ extern / → intern). Single Source: TOOLS.
import { TOOLS } from "../data/phases";
import type { Lang } from "./content";

const HOSTS: [string, string][] = [
  ["erp-demo", "erp"], ["bi-demo", "bi"], ["grafana-demo", "cockpit"],
  ["twin-demo", "twin"], ["app-demo", "app"], ["lab-demo", "lab"],
];
const ROUTES: Record<string, string> = {
  "/leitstand/": "leitstand", "/anlage/": "anlage", "/historian/": "historian",
  "/analyse/": "analyse", "/graph/": "graph", "/suche/": "suche",
  "/wissen/": "wissen", "/zusammenarbeit/": "zusammen", "/status/": "status",
  "/portal/": "portal",
};

function chip(label: string, href: string, color: string, ext: boolean): string {
  const arrow = ext ? " ↗" : " →";
  const attr = ext ? ' target="_blank" rel="noopener"' : "";
  return `<a class="demo-chip" style="--cc:${color}" href="${href}"${attr}>${label}${arrow}</a>`;
}

export function linkifyDemos(html: string, lang: Lang): string {
  const b = lang === "de" ? "" : "/en";
  return html.replace(/<code>([^<]+)<\/code>/g, (m, raw) => {
    const inner = String(raw).trim();
    for (const [frag, key] of HOSTS) {
      if (inner.includes(frag)) {
        const t = TOOLS[key];
        const href = inner.startsWith("http") ? inner : "https://" + inner;
        return chip(inner, href, t.color, true);
      }
    }
    if (ROUTES[inner]) return chip(inner, b + inner, TOOLS[ROUTES[inner]].color, false);
    if (/^\/[a-z-]+\/$/.test(inner)) return chip(inner, b + inner, "var(--accent)", false);
    return m;
  });
}
