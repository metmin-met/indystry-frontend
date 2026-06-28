// Farbleitsystem: stark entsättigte Signaturfarbe je Säule.
// NUR als Mini-Marker (Punkt/Hairline) — nie als Farbfläche. Bewusst gedämpft
// (niedrige Sättigung, ähnliche Helligkeit) → die Seite wirkt weiter monochrom.
export const PILLAR_COLOR: Record<string, string> = {
  "basis-betrieb": "var(--p-ops)",
  "automatisierung-leittechnik": "var(--p-automation)",
  "digital-twin-simulation": "var(--p-twin)",
  "historian-datalake": "var(--p-historian)",
  "bi-analytics": "var(--p-bi)",
  "erp-betrieb": "var(--p-erp)",
  "ki-suche-nlp": "var(--p-ai)",
  "zusammenarbeit": "var(--p-collab)",
  "wissen-compliance-kiosk": "var(--p-knowledge)",
  "web-aussenauftritt": "var(--p-web)",
};
export const pillarColor = (slug: string): string => PILLAR_COLOR[slug] ?? "var(--muted)";

// Kurz-Labels fürs Hero-Stack-Motiv (bilingual).
export const PILLAR_SHORT: Record<string, { de: string; en: string }> = {
  "basis-betrieb": { de: "Betrieb & Infrastruktur", en: "Ops & infrastructure" },
  "automatisierung-leittechnik": { de: "Automatisierung & Leittechnik", en: "Automation & control" },
  "digital-twin-simulation": { de: "Digital Twin & Simulation", en: "Digital twin & simulation" },
  "historian-datalake": { de: "Historian & Data-Lake", en: "Historian & data lake" },
  "bi-analytics": { de: "BI & Analytics", en: "BI & analytics" },
  "erp-betrieb": { de: "ERP & Betrieb", en: "ERP & operations" },
  "ki-suche-nlp": { de: "KI-Suche & NLP", en: "AI search & NLP" },
  "zusammenarbeit": { de: "Zusammenarbeit", en: "Collaboration" },
  "wissen-compliance-kiosk": { de: "Wissen, Compliance & Kiosk", en: "Knowledge, compliance & kiosk" },
  "web-aussenauftritt": { de: "Web & Außenauftritt", en: "Web & presence" },
};
