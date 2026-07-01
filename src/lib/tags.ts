// Single Source der Tag-Taxonomie. Pills auf der Seite werden zu Tag-Links → /suche/?tag=<slug>.
// Slugs sind stabile ASCII-Keys; Labels bilingual. groups steuern die Facetten-Sidebar in /suche/.
export type Lang = "de" | "en" | "zh";
export type TagGroup = "interface" | "tool" | "standard" | "branche" | "thema" | "persona";

// zh optional — Fallback auf en bis die Taxonomie vollständig übersetzt ist.
export const GROUPS: Record<TagGroup, { de: string; en: string; zh?: string }> = {
  interface: { de: "Schnittstellen", en: "Interfaces", zh: "接口" },
  tool:      { de: "Bausteine", en: "Building blocks", zh: "模块" },
  standard:  { de: "Normen & Recht", en: "Standards & law", zh: "标准与法规" },
  branche:   { de: "Branchen", en: "Industries", zh: "行业" },
  thema:     { de: "Themen", en: "Topics", zh: "主题" },
  persona:   { de: "Rollen", en: "Roles", zh: "角色" },
};

export interface TagDef { group: TagGroup; de: string; en: string; zh?: string; }

export const TAGS: Record<string, TagDef> = {
  // Schnittstellen / Protokolle
  "opc-ua":   { group:"interface", de:"OPC-UA", en:"OPC-UA", zh:"OPC-UA" },
  "sps":      { group:"interface", de:"SPS", en:"PLC", zh:"SPS/PLC" },
  "beckhoff": { group:"interface", de:"Beckhoff / TwinCAT", en:"Beckhoff / TwinCAT", zh:"Beckhoff / TwinCAT" },
  "profinet": { group:"interface", de:"PROFINET", en:"PROFINET", zh:"PROFINET" },
  "opc-ua-fx": { group:"interface", de:"OPC-UA FX", en:"OPC-UA FX", zh:"OPC-UA FX" },
  "mqtt":     { group:"interface", de:"MQTT", en:"MQTT", zh:"MQTT" },
  "rest-api": { group:"interface", de:"REST-API", en:"REST API", zh:"REST API" },
  "mcp":      { group:"interface", de:"MCP", en:"MCP", zh:"MCP" },
  "etl":      { group:"interface", de:"ETL / Excel", en:"ETL / Excel", zh:"ETL / Excel" },
  "peppol":   { group:"interface", de:"PEPPOL", en:"PEPPOL", zh:"PEPPOL" },
  "datev":    { group:"interface", de:"DATEV", en:"DATEV", zh:"DATEV" },
  "bmd":      { group:"interface", de:"BMD", en:"BMD", zh:"BMD" },
  "uva":      { group:"interface", de:"UVA / Steuer", en:"VAT return", zh:"增值税申报" },
  // Bausteine / Tools
  "erp":        { group:"tool", de:"ERP", en:"ERP", zh:"ERP" },
  "bi":         { group:"tool", de:"BI & Analytics", en:"BI & analytics", zh:"BI 与分析" },
  "historian":  { group:"tool", de:"Historian", en:"Historian", zh:"历史数据库" },
  "leitstand":  { group:"tool", de:"Leitstand / SCADA", en:"Control room / SCADA", zh:"中控室 / SCADA" },
  "twin":       { group:"tool", de:"Digital Twin", en:"Digital twin", zh:"数字孪生" },
  "app":        { group:"tool", de:"Werker-App", en:"Shop-floor app", zh:"车间应用" },
  "suche":      { group:"tool", de:"KI-Suche", en:"AI search", zh:"AI 搜索" },
  "wissen":     { group:"tool", de:"Wissen & Kiosk", en:"Knowledge & kiosk", zh:"知识与自助终端" },
  "anlage":     { group:"tool", de:"Anlage & Schrank", en:"Plant & cabinet", zh:"设备与电柜" },
  "analyse":    { group:"tool", de:"Werkstoff-Analyse", en:"Material analysis", zh:"材料分析" },
  "simulation": { group:"tool", de:"Prozess-Simulation", en:"Process simulation", zh:"工艺仿真" },
  "cmdb":       { group:"tool", de:"CMDB / Netz-BIM", en:"CMDB / network BIM", zh:"CMDB / 网络 BIM" },
  "mdm":        { group:"tool", de:"MDM", en:"MDM", zh:"MDM" },
  "sso":        { group:"tool", de:"SSO", en:"SSO", zh:"SSO" },
  "backup":     { group:"tool", de:"Backup & Restore", en:"Backup & restore", zh:"备份与恢复" },
  // Normen & Recht
  "iso-9001":   { group:"standard", de:"ISO 9001", en:"ISO 9001", zh:"ISO 9001" },
  "iso-27001":  { group:"standard", de:"ISO 27001", en:"ISO 27001", zh:"ISO 27001" },
  "nis2":       { group:"standard", de:"NIS2", en:"NIS2", zh:"NIS2" },
  "bsi":        { group:"standard", de:"BSI", en:"BSI", zh:"BSI" },
  "ped":        { group:"standard", de:"PED (Druckgeräte)", en:"PED (pressure)", zh:"PED（压力设备）" },
  "dsgvo":      { group:"standard", de:"DSGVO", en:"GDPR", zh:"GDPR（DSGVO）" },
  // Branchen
  "zerspanung":     { group:"branche", de:"Zerspanung", en:"Machining", zh:"机械加工" },
  "maschinenbau":   { group:"branche", de:"Maschinen- & Anlagenbau", en:"Machinery & plant", zh:"机械与成套设备制造" },
  "serienfertigung":{ group:"branche", de:"Serien- & Variantenfertigung", en:"Series & variants", zh:"批量与多品种生产" },
  "prozesstechnik": { group:"branche", de:"Verfahrenstechnik", en:"Process tech", zh:"工艺技术" },
  "blech-schweiss": { group:"branche", de:"Blech & Schweiß", en:"Sheet & welding", zh:"钣金与焊接" },
  "kunststoff":     { group:"branche", de:"Kunststoff", en:"Plastics", zh:"塑料" },
  "elektronik":     { group:"branche", de:"Elektronik", en:"Electronics", zh:"电子" },
  "lohnfertigung":  { group:"branche", de:"Lohnfertigung", en:"Contract mfg", zh:"代工生产" },
  "lebensmittel":   { group:"branche", de:"Lebensmittel", en:"Food & beverage", zh:"食品饮料" },
  "holz-papier":    { group:"branche", de:"Holz & Papier", en:"Wood & paper", zh:"木材与造纸" },
  "automotive":     { group:"branche", de:"Automotive", en:"Automotive", zh:"汽车" },
  // Themen
  "fertigung":     { group:"thema", de:"Fertigung / MES", en:"Manufacturing / MES", zh:"生产 / MES" },
  "instandhaltung":{ group:"thema", de:"Instandhaltung", en:"Maintenance", zh:"维护" },
  "qualitaet":     { group:"thema", de:"Qualität / QM", en:"Quality / QM", zh:"质量 / QM" },
  "kosten":        { group:"thema", de:"Kosten & Controlling", en:"Costing", zh:"成本与管控" },
  "kennzahlen":    { group:"thema", de:"Kennzahlen / KPI", en:"KPIs", zh:"关键指标（KPI）" },
  "compliance":    { group:"thema", de:"Compliance & Sicherheit", en:"Compliance & security", zh:"合规与安全" },
  "resilienz":     { group:"thema", de:"Resilienz & Backup", en:"Resilience & backup", zh:"韧性与备份" },
  "rollout":       { group:"thema", de:"Software-Rollout", en:"Software rollout", zh:"软件部署" },
  "datenhoheit":   { group:"thema", de:"Datenhoheit & KI", en:"Data sovereignty & AI", zh:"数据主权与 AI" },
  "ki":            { group:"thema", de:"Künstliche Intelligenz", en:"Artificial intelligence", zh:"人工智能" },
  "mobile":        { group:"thema", de:"Mobil", en:"Mobile", zh:"移动端" },
  "souveraenitaet":{ group:"thema", de:"Souveränität", en:"Sovereignty", zh:"自主可控（数据主权）" },
  // Personas / Rollen
  "produktionsleitung":{ group:"persona", de:"Produktionsleitung", en:"Production lead", zh:"生产负责人" },
  "schichtleitung":{ group:"persona", de:"Schichtleitung", en:"Shift lead", zh:"班组长" },
  "produktionsplanung-disposition":{ group:"persona", de:"Produktionsplanung / Disposition", en:"Production planning", zh:"生产计划 / 调度" },
  "operator-werker":{ group:"persona", de:"Operator / Werker", en:"Operator", zh:"操作员 / 车间工人" },
  "verfahrenstechnik-r-d":{ group:"persona", de:"Verfahrenstechnik / R&D", en:"Process engineering / R&D", zh:"工艺工程 / 研发" },
  "qm-manager":{ group:"persona", de:"QM-Manager", en:"QM manager", zh:"质量经理" },
  "qualitaetspruefer":{ group:"persona", de:"Qualitätsprüfer", en:"Quality inspector", zh:"质检员" },
  "interner-auditor-isms":{ group:"persona", de:"Interner Auditor / ISMS", en:"Internal auditor / ISMS", zh:"内部审核员 / ISMS" },
  "lager-logistik-verantwortlicher":{ group:"persona", de:"Lager- / Logistik-Verantwortlicher", en:"Warehouse / logistics lead", zh:"库存 / 物流负责人" },
  "vertriebs-innendienst":{ group:"persona", de:"Vertriebs-Innendienst", en:"Sales back-office", zh:"销售内勤" },
  "einkauf":{ group:"persona", de:"Einkauf", en:"Purchasing", zh:"采购" },
  "buchhaltung":{ group:"persona", de:"Buchhaltung", en:"Accounting", zh:"会计" },
  "controller":{ group:"persona", de:"Controller", en:"Controller", zh:"管控 / 财务分析" },
  "geschaeftsleitung-gf":{ group:"persona", de:"Geschäftsleitung (GF)", en:"Management (MD)", zh:"管理层（总经理）" },
  "it-administrator":{ group:"persona", de:"IT-Administrator", en:"IT administrator", zh:"IT 管理员" },
  "maintenance-instandhaltung":{ group:"persona", de:"Maintenance / Instandhaltung", en:"Maintenance", zh:"维护" },
  "sps-programmierer":{ group:"persona", de:"SPS-Programmierer", en:"PLC programmer", zh:"SPS/PLC 编程员" },
  "leittechnik-programmierer":{ group:"persona", de:"Leittechnik-Programmierer", en:"Control-system engineer", zh:"控制系统工程师" },
  "personal-hr":{ group:"persona", de:"Personal (HR)", en:"HR", zh:"人力资源（HR）" },
  "kunde":{ group:"persona", de:"Kunde", en:"Customer", zh:"客户" },
  "lieferant":{ group:"persona", de:"Lieferant", en:"Supplier", zh:"供应商" },
  "steuerberater-extern":{ group:"persona", de:"Steuerberater (extern)", en:"Tax advisor (external)", zh:"税务顾问（外部）" },
};

export const slugify = (s: string): string =>
  s.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")
   .replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"");

export const tagLabel = (slug: string, lang: Lang): string => (TAGS[slug] ? (TAGS[slug][lang] ?? TAGS[slug].en) : slug);
export const tagHref  = (slug: string, lang: Lang): string => (lang === "de" ? "" : lang === "en" ? "/en" : "/cn") + "/suche/?tag=" + slug;

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
