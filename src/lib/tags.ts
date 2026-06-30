// Single Source der Tag-Taxonomie. Pills auf der Seite werden zu Tag-Links → /suche/?tag=<slug>.
// Slugs sind stabile ASCII-Keys; Labels bilingual. groups steuern die Facetten-Sidebar in /suche/.
export type Lang = "de" | "en";
export type TagGroup = "interface" | "tool" | "standard" | "branche" | "thema" | "persona";

export const GROUPS: Record<TagGroup, Record<Lang, string>> = {
  interface: { de: "Schnittstellen", en: "Interfaces" },
  tool:      { de: "Bausteine", en: "Building blocks" },
  standard:  { de: "Normen & Recht", en: "Standards & law" },
  branche:   { de: "Branchen", en: "Industries" },
  thema:     { de: "Themen", en: "Topics" },
  persona:   { de: "Rollen", en: "Roles" },
};

export interface TagDef { group: TagGroup; de: string; en: string; }

export const TAGS: Record<string, TagDef> = {
  // Schnittstellen / Protokolle
  "opc-ua":   { group:"interface", de:"OPC-UA", en:"OPC-UA" },
  "sps":      { group:"interface", de:"SPS", en:"PLC" },
  "beckhoff": { group:"interface", de:"Beckhoff / TwinCAT", en:"Beckhoff / TwinCAT" },
  "profinet": { group:"interface", de:"PROFINET", en:"PROFINET" },
  "mqtt":     { group:"interface", de:"MQTT", en:"MQTT" },
  "rest-api": { group:"interface", de:"REST-API", en:"REST API" },
  "mcp":      { group:"interface", de:"MCP", en:"MCP" },
  "etl":      { group:"interface", de:"ETL / Excel", en:"ETL / Excel" },
  "peppol":   { group:"interface", de:"PEPPOL", en:"PEPPOL" },
  "datev":    { group:"interface", de:"DATEV", en:"DATEV" },
  "bmd":      { group:"interface", de:"BMD", en:"BMD" },
  "uva":      { group:"interface", de:"UVA / Steuer", en:"VAT return" },
  // Bausteine / Tools
  "erp":        { group:"tool", de:"ERP", en:"ERP" },
  "bi":         { group:"tool", de:"BI & Analytics", en:"BI & analytics" },
  "historian":  { group:"tool", de:"Historian", en:"Historian" },
  "leitstand":  { group:"tool", de:"Leitstand / SCADA", en:"Control room / SCADA" },
  "twin":       { group:"tool", de:"Digital Twin", en:"Digital twin" },
  "app":        { group:"tool", de:"Werker-App", en:"Shop-floor app" },
  "suche":      { group:"tool", de:"KI-Suche", en:"AI search" },
  "wissen":     { group:"tool", de:"Wissen & Kiosk", en:"Knowledge & kiosk" },
  "anlage":     { group:"tool", de:"Anlage & Schrank", en:"Plant & cabinet" },
  "analyse":    { group:"tool", de:"Werkstoff-Analyse", en:"Material analysis" },
  "simulation": { group:"tool", de:"Prozess-Simulation", en:"Process simulation" },
  "cmdb":       { group:"tool", de:"CMDB / Netz-BIM", en:"CMDB / network BIM" },
  "mdm":        { group:"tool", de:"MDM", en:"MDM" },
  "sso":        { group:"tool", de:"SSO", en:"SSO" },
  "backup":     { group:"tool", de:"Backup & Restore", en:"Backup & restore" },
  // Normen & Recht
  "iso-9001":   { group:"standard", de:"ISO 9001", en:"ISO 9001" },
  "iso-27001":  { group:"standard", de:"ISO 27001", en:"ISO 27001" },
  "nis2":       { group:"standard", de:"NIS2", en:"NIS2" },
  "bsi":        { group:"standard", de:"BSI", en:"BSI" },
  "ped":        { group:"standard", de:"PED (Druckgeräte)", en:"PED (pressure)" },
  "dsgvo":      { group:"standard", de:"DSGVO", en:"GDPR" },
  // Branchen
  "zerspanung":     { group:"branche", de:"Zerspanung", en:"Machining" },
  "maschinenbau":   { group:"branche", de:"Maschinen- & Anlagenbau", en:"Machinery & plant" },
  "serienfertigung":{ group:"branche", de:"Serien- & Variantenfertigung", en:"Series & variants" },
  "prozesstechnik": { group:"branche", de:"Verfahrenstechnik", en:"Process tech" },
  "blech-schweiss": { group:"branche", de:"Blech & Schweiß", en:"Sheet & welding" },
  "kunststoff":     { group:"branche", de:"Kunststoff", en:"Plastics" },
  "elektronik":     { group:"branche", de:"Elektronik", en:"Electronics" },
  "lohnfertigung":  { group:"branche", de:"Lohnfertigung", en:"Contract mfg" },
  "lebensmittel":   { group:"branche", de:"Lebensmittel", en:"Food & beverage" },
  "holz-papier":    { group:"branche", de:"Holz & Papier", en:"Wood & paper" },
  "automotive":     { group:"branche", de:"Automotive", en:"Automotive" },
  // Themen
  "fertigung":     { group:"thema", de:"Fertigung / MES", en:"Manufacturing / MES" },
  "instandhaltung":{ group:"thema", de:"Instandhaltung", en:"Maintenance" },
  "qualitaet":     { group:"thema", de:"Qualität / QM", en:"Quality / QM" },
  "kosten":        { group:"thema", de:"Kosten & Controlling", en:"Costing" },
  "kennzahlen":    { group:"thema", de:"Kennzahlen / KPI", en:"KPIs" },
  "compliance":    { group:"thema", de:"Compliance & Sicherheit", en:"Compliance & security" },
  "resilienz":     { group:"thema", de:"Resilienz & Backup", en:"Resilience & backup" },
  "rollout":       { group:"thema", de:"Software-Rollout", en:"Software rollout" },
  "datenhoheit":   { group:"thema", de:"Datenhoheit & KI", en:"Data sovereignty & AI" },
  "ki":            { group:"thema", de:"Künstliche Intelligenz", en:"Artificial intelligence" },
  "mobile":        { group:"thema", de:"Mobil", en:"Mobile" },
  "souveraenitaet":{ group:"thema", de:"Souveränität", en:"Sovereignty" },
  // Personas / Rollen
  "produktionsleitung":{ group:"persona", de:"Produktionsleitung", en:"Production lead" },
  "schichtleitung":{ group:"persona", de:"Schichtleitung", en:"Shift lead" },
  "produktionsplanung-disposition":{ group:"persona", de:"Produktionsplanung / Disposition", en:"Production planning" },
  "operator-werker":{ group:"persona", de:"Operator / Werker", en:"Operator" },
  "verfahrenstechnik-r-d":{ group:"persona", de:"Verfahrenstechnik / R&D", en:"Process engineering / R&D" },
  "qm-manager":{ group:"persona", de:"QM-Manager", en:"QM manager" },
  "qualitaetspruefer":{ group:"persona", de:"Qualitätsprüfer", en:"Quality inspector" },
  "interner-auditor-isms":{ group:"persona", de:"Interner Auditor / ISMS", en:"Internal auditor / ISMS" },
  "lager-logistik-verantwortlicher":{ group:"persona", de:"Lager- / Logistik-Verantwortlicher", en:"Warehouse / logistics lead" },
  "vertriebs-innendienst":{ group:"persona", de:"Vertriebs-Innendienst", en:"Sales back-office" },
  "einkauf":{ group:"persona", de:"Einkauf", en:"Purchasing" },
  "buchhaltung":{ group:"persona", de:"Buchhaltung", en:"Accounting" },
  "controller":{ group:"persona", de:"Controller", en:"Controller" },
  "geschaeftsleitung-gf":{ group:"persona", de:"Geschäftsleitung (GF)", en:"Management (MD)" },
  "it-administrator":{ group:"persona", de:"IT-Administrator", en:"IT administrator" },
  "maintenance-instandhaltung":{ group:"persona", de:"Maintenance / Instandhaltung", en:"Maintenance" },
  "sps-programmierer":{ group:"persona", de:"SPS-Programmierer", en:"PLC programmer" },
  "leittechnik-programmierer":{ group:"persona", de:"Leittechnik-Programmierer", en:"Control-system engineer" },
  "personal-hr":{ group:"persona", de:"Personal (HR)", en:"HR" },
  "kunde":{ group:"persona", de:"Kunde", en:"Customer" },
  "lieferant":{ group:"persona", de:"Lieferant", en:"Supplier" },
  "steuerberater-extern":{ group:"persona", de:"Steuerberater (extern)", en:"Tax advisor (external)" },
};

export const slugify = (s: string): string =>
  s.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")
   .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");

export const tagLabel = (slug: string, lang: Lang): string => (TAGS[slug] ? TAGS[slug][lang] : slug);
export const tagHref  = (slug: string, lang: Lang): string => (lang === "de" ? "" : "/en") + "/suche/?tag=" + slug;

// Auto-Mapping Begriff/Label → Slug (für Glossar/Stack-Pills ohne Einzel-Pflege).
const _norm = (s: string): string => s.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9äöüß ]/g, " ").replace(/\s+/g, " ").trim();
const _labelMap: Record<string, string> = (() => {
  const m: Record<string, string> = {};
  for (const slug of Object.keys(TAGS)) { m[_norm(TAGS[slug].de)] = slug; m[_norm(TAGS[slug].en)] = slug; }
  return m;
})();
const ALIAS: Record<string, string> = {
  "digitaler zwilling":"twin","digital twin":"twin","anlagen twin":"anlage","plant twin":"anlage",
  "leitstand scada":"leitstand","control room scada":"leitstand","zeitreihe":"historian","time series":"historian",
  "oee":"kennzahlen","process drift":"kennzahlen","massenbilanz":"fertigung","mass balance":"fertigung",
  "make to order":"fertigung","mrp":"fertigung","stückliste bom":"fertigung","bill of materials bom":"fertigung",
  "charge los":"fertigung","batch lot":"fertigung","kommissionierung picking":"fertigung","picking":"fertigung",
  "lead opportunity":"erp","servicevertrag sla":"instandhaltung","service contract sla":"instandhaltung",
  "reklamation 8d":"qualitaet","complaint 8d":"qualitaet","vorausschauende wartung":"instandhaltung","predictive maintenance":"instandhaltung",
  "ki antwort rag":"ki","ai answer rag":"ki","ki mensch":"ki","ai humans":"ki",
  "lock in":"souveraenitaet","souveränität":"souveraenitaet","sovereignty":"souveraenitaet",
  "frequenzumrichter":"sps","variable frequency drive":"sps","stromlaufplan":"anlage","wiring plan":"anlage",
  "schaltschrank":"anlage","control cabinet":"anlage","sps cpu":"sps","cmdb netz bim":"cmdb","cmdb network bim":"cmdb",
};
export const tagForLabel = (label: string): string | null => {
  const n = _norm(label);
  return ALIAS[n] || _labelMap[n] || (TAGS[n.replace(/ /g,"-")] ? n.replace(/ /g,"-") : null);
};
export const PERSONA_SLUGS: string[] = ["produktionsleitung", "schichtleitung", "produktionsplanung-disposition", "operator-werker", "verfahrenstechnik-r-d", "qm-manager", "qualitaetspruefer", "interner-auditor-isms", "lager-logistik-verantwortlicher", "vertriebs-innendienst", "einkauf", "buchhaltung", "controller", "geschaeftsleitung-gf", "it-administrator", "maintenance-instandhaltung", "sps-programmierer", "leittechnik-programmierer", "personal-hr", "kunde", "lieferant", "steuerberater-extern"];
