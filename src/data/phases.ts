// Single Source für Phase→Tool→Demo (genutzt von Ablauf/PhaseMatrix + Landkarte).
// Externe Demo-URLs werden aus content.json (demos) aufgelöst, damit nichts driftet.
import { demos } from "../lib/content";
import type { Lang } from "../lib/content";

const url = (frag: string): string =>
  (demos.find((d) => d.status === "live" && d.url.includes(frag)) || ({} as any)).url || "#";

export interface Tool {
  key: string;
  name: Record<Lang, string>;
  color: string;        // var(--p-*)
  cat: "erp" | "bi" | "ops" | "twin" | "data" | "ai" | "knowledge" | "web";
  ext?: boolean;        // externer Demo-Link (↗) — sonst interne Route (→)
  href: string;         // extern: absolute URL · intern: Route (lang-Prefix kommt im Renderer dazu)
}

export const TOOLS: Record<string, Tool> = {
  erp:        { key: "erp",        name: { de: "ERP (Odoo)",          en: "ERP (Odoo)" },          color: "var(--p-erp)",        cat: "erp",       ext: true, href: url("erp-demo") },
  bi:         { key: "bi",         name: { de: "BI & Analytics",      en: "BI & analytics" },      color: "var(--p-bi)",         cat: "bi",        ext: true, href: url("bi-demo") },
  cockpit:    { key: "cockpit",    name: { de: "Live-Cockpit",        en: "Live cockpit" },        color: "var(--p-automation)", cat: "ops",       ext: true, href: url("grafana-demo") },
  twin:       { key: "twin",       name: { de: "Digital Twin",        en: "Digital twin" },        color: "var(--p-twin)",       cat: "twin",      ext: true, href: url("twin-demo") },
  app:        { key: "app",        name: { de: "Shopfloor-App",       en: "Shop-floor app" },      color: "var(--p-collab)",     cat: "ops",       ext: true, href: url("app-demo") },
  lab:        { key: "lab",        name: { de: "Data-Science-Lab",    en: "Data-science lab" },    color: "var(--p-ai)",         cat: "data",      ext: true, href: url("lab-demo") },
  leitstand:  { key: "leitstand",  name: { de: "Leitstand",           en: "Control room" },        color: "var(--p-ops)",        cat: "ops",       href: "/leitstand/" },
  anlage:     { key: "anlage",     name: { de: "Anlage & Schrank",    en: "Plant & cabinet" },     color: "var(--p-automation)", cat: "twin",      href: "/anlage/" },
  historian:  { key: "historian",  name: { de: "Historian",           en: "Historian" },           color: "var(--p-historian)",  cat: "data",      href: "/historian/" },
  analyse:    { key: "analyse",    name: { de: "Werkstoff-Analyse",   en: "Material analysis" },   color: "var(--p-historian)",  cat: "data",      href: "/analyse/" },
  graph:      { key: "graph",      name: { de: "Wissensgraph 3D",     en: "Knowledge graph 3D" },  color: "var(--p-knowledge)",  cat: "knowledge", href: "/graph/" },
  suche:      { key: "suche",      name: { de: "KI-Suche",            en: "AI search" },           color: "var(--p-ai)",         cat: "ai",        href: "/suche/" },
  wissen:     { key: "wissen",     name: { de: "Wissen & Kiosk",      en: "Knowledge & kiosk" },   color: "var(--p-knowledge)",  cat: "knowledge", href: "/wissen/" },
  zusammen:   { key: "zusammen",   name: { de: "Zusammenarbeit",      en: "Collaboration" },       color: "var(--p-collab)",     cat: "knowledge", href: "/zusammenarbeit/" },
  status:     { key: "status",     name: { de: "Status-Board",        en: "Status board" },        color: "var(--p-ops)",        cat: "ops",       href: "/status/" },
  portal:     { key: "portal",     name: { de: "Kundenportal",        en: "Customer portal" },     color: "var(--p-web)",        cat: "web",       href: "/portal/" },
};

export const CATS: Record<string, Record<Lang, string>> = {
  erp:       { de: "Auftrag & ERP",      en: "Orders & ERP" },
  ops:       { de: "Betrieb & Leitstand", en: "Ops & control" },
  twin:      { de: "Anlage & Twin",      en: "Plant & twin" },
  data:      { de: "Daten & Historian",  en: "Data & historian" },
  bi:        { de: "BI & Analytics",     en: "BI & analytics" },
  ai:        { de: "KI & Suche",         en: "AI & search" },
  knowledge: { de: "Wissen & Team",      en: "Knowledge & team" },
  web:       { de: "Web & Kunde",        en: "Web & customer" },
};

export const AKTE: Record<string, Record<Lang, string>> = {
  I:   { de: "Akt I · Anbahnung",            en: "Act I · Initiation" },
  II:  { de: "Akt II · Auftrag → Lieferung", en: "Act II · Order → delivery" },
  III: { de: "Akt III · Nach der Lieferung", en: "Act III · After delivery" },
};

export interface Phase {
  id: string;
  akt: "I" | "II" | "III";
  star?: boolean;
  titel: Record<Lang, string>;
  kurz: Record<Lang, string>;
  tools: string[];
}

export const PHASES: Phase[] = [
  { id: "P0–P1", akt: "I",  titel: { de: "Erstkontakt & Lead",        en: "First contact & lead" },     kurz: { de: "Anfrage rein, Lead qualifizieren, Bedarf verstehen.",            en: "Inquiry in, qualify the lead, understand the need." },             tools: ["erp", "suche"] },
  { id: "P2",    akt: "I",  titel: { de: "Angebot & Kalkulation",     en: "Quote & costing" },          kurz: { de: "Angebot rechnen, Machbarkeit per Twin durchspielen.",            en: "Cost the quote, sanity-check feasibility via the twin." },          tools: ["erp", "twin", "zusammen"] },
  { id: "P3",    akt: "I",  star: true, titel: { de: "Auftrag & Bestelleingang", en: "Order & intake" }, kurz: { de: "Bestellung wird Auftrag — der Startschuss.",                     en: "Order becomes a confirmed job — the kickoff." },                   tools: ["erp"] },
  { id: "P4",    akt: "II", titel: { de: "Arbeitsvorbereitung",       en: "Work preparation" },         kurz: { de: "Planung, Stückliste, Termine, Kapazität.",                       en: "Planning, BOM, dates, capacity." },                                tools: ["erp", "bi", "leitstand"] },
  { id: "P5",    akt: "II", titel: { de: "Beschaffung & Wareneingang", en: "Procurement & receiving" }, kurz: { de: "Material bestellen, prüfen, einbuchen.",                          en: "Order, inspect and book in material." },                          tools: ["erp", "wissen"] },
  { id: "P6",    akt: "II", titel: { de: "Fertigung & Leittechnik",   en: "Production & control" },     kurz: { de: "Maschinen laufen — live überwacht, simuliert, historisiert.",    en: "Machines run — live-monitored, simulated, historised." },          tools: ["leitstand", "anlage", "twin", "historian", "cockpit"] },
  { id: "P7",    akt: "II", titel: { de: "Qualitätssicherung",        en: "Quality assurance" },        kurz: { de: "Messen, prüfen, Gefüge & Kennwerte dokumentieren.",              en: "Measure, inspect, document structure & metrics." },                tools: ["bi", "historian", "analyse"] },
  { id: "P8",    akt: "II", titel: { de: "Lager & Versand",           en: "Warehouse & shipping" },     kurz: { de: "Kommissionieren, packen, versenden — mobil quittiert.",          en: "Pick, pack, ship — confirmed on mobile." },                        tools: ["erp", "app"] },
  { id: "P9",    akt: "II", star: true, titel: { de: "Lieferung & Rechnung", en: "Delivery & invoice" }, kurz: { de: "Ausliefern, fakturieren (PEPPOL), Kunde sieht alles im Portal.", en: "Deliver, invoice (PEPPOL), customer sees it all in the portal." }, tools: ["erp", "status", "portal"] },
  { id: "P10",   akt: "III", titel: { de: "Service & Wartung",        en: "Service & maintenance" },    kurz: { de: "Servicevertrag, Zustand überwachen, vorausschauend warten.",     en: "Service contract, condition monitoring, predictive maintenance." }, tools: ["erp", "historian", "anlage"] },
  { id: "P11",   akt: "III", titel: { de: "Reklamation & Schaden",    en: "Complaints & claims" },      kurz: { de: "Fall aufnehmen, Wissen nutzen, Ursache finden.",                 en: "Log the case, use the knowledge base, find the root cause." },      tools: ["erp", "wissen", "suche"] },
  { id: "P12",   akt: "III", titel: { de: "Auswertung & KVP",         en: "Analysis & improvement" },   kurz: { de: "KPIs, Trends, Data-Science — und zurück in den Kreislauf.",      en: "KPIs, trends, data science — and back into the loop." },           tools: ["bi", "cockpit", "lab", "graph"] },
];
