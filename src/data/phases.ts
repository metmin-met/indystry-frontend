// Single Source für Phase→Tool→Demo (genutzt von Ablauf/PhaseMatrix + Landkarte).
// Externe Demo-URLs werden aus content.json (demos) aufgelöst, damit nichts driftet.
import { demos } from "../lib/content";
import type { Lang } from "../lib/content";

const url = (frag: string): string =>
  (demos.find((d) => d.status === "live" && d.url.includes(frag)) || ({} as any)).url || "#";

export interface Tool {
  key: string;
  name: Record<Lang, string>;
  desc: Record<Lang, string>;
  color: string;        // var(--p-*)
  cat: "erp" | "bi" | "ops" | "twin" | "data" | "ai" | "knowledge" | "web";
  ext?: boolean;        // externer Demo-Link (↗) — sonst interne Route (→)
  href: string;         // extern: absolute URL · intern: Route (lang-Prefix kommt im Renderer dazu)
}

export const TOOLS: Record<string, Tool> = {
  erp:        { key: "erp",        name: { de: "ERP (Odoo)",          en: "ERP (Odoo)" }, desc: { de: "Das zentrale Firmenprogramm: Aufträge, Lager, Einkauf, Fertigung und Rechnungen an EINEM Ort statt in vielen Tabellen.", en: "The central company system: orders, stock, purchasing, production and invoices in ONE place instead of many spreadsheets." },          color: "var(--p-erp)",        cat: "erp",       ext: true, href: url("erp-demo") },
  bi:         { key: "bi",         name: { de: "BI & Analytics",      en: "BI & analytics" }, desc: { de: "Macht aus Rohdaten verständliche Zahlen, Diagramme und Dashboards — wer hat wann was produziert, wo läuft's, wo nicht.", en: "Turns raw data into clear numbers, charts and dashboards — who produced what when, what's going well and what isn't." },      color: "var(--p-bi)",         cat: "bi",        ext: true, href: url("bi-demo") },
  cockpit:    { key: "cockpit",    name: { de: "Live-Cockpit",        en: "Live cockpit" }, desc: { de: "Echtzeit-Monitor: zeigt auf einen Blick, ob alles läuft, und schlägt Alarm, bevor etwas ausfällt.", en: "Real-time monitor: shows at a glance whether everything's running and raises the alarm before something fails." },        color: "var(--p-automation)", cat: "ops",       ext: true, href: url("grafana-demo") },
  twin:       { key: "twin",       name: { de: "Digital Twin",        en: "Digital twin" }, desc: { de: "Ein digitales Abbild der Anlage — man kann Änderungen risikofrei am Bildschirm durchspielen, bevor man sie real umsetzt.", en: "A digital replica of the plant — you can trial changes risk-free on screen before doing them for real." },        color: "var(--p-twin)",       cat: "twin",      ext: true, href: url("twin-demo") },
  app:        { key: "app",        name: { de: "Shopfloor-App",       en: "Shop-floor app" }, desc: { de: "Die App für die Werkshalle: Aufträge quittieren, Material buchen, Status melden — direkt an der Maschine, mit dem Handy.", en: "The app for the shop floor: confirm jobs, book material, report status — right at the machine, on a phone." },      color: "var(--p-collab)",     cat: "ops",       ext: true, href: url("app-demo") },
  lab:        { key: "lab",        name: { de: "Data-Science-Lab",    en: "Data-science lab" }, desc: { de: "Eine Werkbank für tiefe Datenanalysen und Experimente (Notebooks) — für Spezialfragen jenseits der Standard-Auswertungen.", en: "A workbench for deep data analysis and experiments (notebooks) — for special questions beyond the standard reports." },    color: "var(--p-ai)",         cat: "data",      ext: true, href: url("lab-demo") },
  leitstand:  { key: "leitstand",  name: { de: "Leitstand",           en: "Control room" }, desc: { de: "Die Schaltzentrale der Produktion: der Live-Zustand aller Maschinen auf einem Bildschirm — wie der Tower am Flughafen.", en: "The production control room: the live state of every machine on one screen — like an airport tower." },        color: "var(--p-ops)",        cat: "ops",       href: "/leitstand/" },
  anlage:     { key: "anlage",     name: { de: "Anlage & Schrank",    en: "Plant & cabinet" }, desc: { de: "Die Maschine bzw. Anlage selbst samt Schaltschrank — Aufbau, Zustand und Steuerung sichtbar und verständlich gemacht.", en: "The machine or plant itself incl. its control cabinet — its build, state and controls made visible and understandable." },     color: "var(--p-automation)", cat: "twin",      href: "/anlage/" },
  historian:  { key: "historian",  name: { de: "Historian",           en: "Historian" }, desc: { de: "Das Langzeitgedächtnis der Maschinen: speichert Millionen Messwerte über die Zeit, damit man Verläufe und Trends sieht.", en: "The machines' long-term memory: stores millions of measurements over time so you can see trends and history." },           color: "var(--p-historian)",  cat: "data",      href: "/historian/" },
  analyse:    { key: "analyse",    name: { de: "Werkstoff-Analyse",   en: "Material analysis" }, desc: { de: "Prüfung von Material und Bauteilen — Maße, Oberfläche, Gefüge, Härte — dokumentiert für jede Charge.", en: "Inspection of material and parts — dimensions, surface, structure, hardness — documented for every batch." },   color: "var(--p-historian)",  cat: "data",      href: "/analyse/" },
  graph:      { key: "graph",      name: { de: "Wissensgraph 3D",     en: "Knowledge graph 3D" }, desc: { de: "Zeigt, wie alles zusammenhängt — Aufträge, Teile, Maschinen, Kunden — als vernetzte, drehbare 3D-Karte.", en: "Shows how everything connects — orders, parts, machines, customers — as a linked, rotatable 3D map." },  color: "var(--p-knowledge)",  cat: "knowledge", href: "/graph/" },
  suche:      { key: "suche",      name: { de: "KI-Suche",            en: "AI search" }, desc: { de: "Eine Suche über ALLE Firmendaten, die versteht, was du meinst, und in normaler Sprache antwortet — auch mit Tippfehlern.", en: "A search across ALL company data that understands what you mean and answers in plain language — even with typos." },           color: "var(--p-ai)",         cat: "ai",        href: "/suche/" },
  wissen:     { key: "wissen",     name: { de: "Wissen & Kiosk",      en: "Knowledge & kiosk" }, desc: { de: "Handbuch, Anleitungen und Nachschlagewerk: Firmenwissen auffindbar für alle, plus ein Selbstbedienungs-Kiosk.", en: "Handbook, guides and reference: company knowledge findable for everyone, plus a self-service kiosk." },   color: "var(--p-knowledge)",  cat: "knowledge", href: "/wissen/" },
  zusammen:   { key: "zusammen",   name: { de: "Zusammenarbeit",      en: "Collaboration" }, desc: { de: "Chat, Videocalls, Dateien und gemeinsames Office — alles im eigenen Haus, ohne fremde Cloud.", en: "Chat, video calls, files and shared office — all in your own house, without someone else's cloud." },       color: "var(--p-collab)",     cat: "knowledge", href: "/zusammenarbeit/" },
  status:     { key: "status",     name: { de: "Status-Board",        en: "Status board" }, desc: { de: "Überblick, ob die Dienste laufen, wann zuletzt gesichert wurde und wie stabil alles ist.", en: "An overview of whether services are running, when the last backup ran and how stable everything is." },        color: "var(--p-ops)",        cat: "ops",       href: "/status/" },
  portal:     { key: "portal",     name: { de: "Kundenportal",        en: "Customer portal" }, desc: { de: "Der Online-Zugang für Kunden: Auftragsstatus, Rechnungen, Service und Reklamationen jederzeit selbst einsehbar.", en: "The online access for customers: order status, invoices, service and complaints viewable any time, self-service." },     color: "var(--p-web)",        cat: "web",       href: "/portal/" },
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
