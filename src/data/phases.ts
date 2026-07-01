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
  erp:        { key: "erp",        name: { de: "ERP (Odoo)",          en: "ERP (Odoo)", zh: "ERP（Odoo）" }, desc: { de: "Das zentrale Firmenprogramm: Aufträge, Lager, Einkauf, Fertigung und Rechnungen an EINEM Ort statt in vielen Tabellen.", en: "The central company system: orders, stock, purchasing, production and invoices in ONE place instead of many spreadsheets.", zh: "企业核心系统：订单、库存、采购、生产与发票都集中在一处，而非散落在众多表格中。" },          color: "var(--p-erp)",        cat: "erp",       ext: true, href: url("erp-demo") },
  bi:         { key: "bi",         name: { de: "BI & Analytics",      en: "BI & analytics", zh: "BI 与分析" }, desc: { de: "Macht aus Rohdaten verständliche Zahlen, Diagramme und Dashboards — wer hat wann was produziert, wo läuft's, wo nicht.", en: "Turns raw data into clear numbers, charts and dashboards — who produced what when, what's going well and what isn't.", zh: "把原始数据变成清晰的数字、图表与仪表盘——谁在何时生产了什么，哪里顺利、哪里不顺。" },      color: "var(--p-bi)",         cat: "bi",        ext: true, href: url("bi-demo") },
  cockpit:    { key: "cockpit",    name: { de: "Live-Cockpit",        en: "Live cockpit", zh: "实时驾驶舱" }, desc: { de: "Echtzeit-Monitor: zeigt auf einen Blick, ob alles läuft, und schlägt Alarm, bevor etwas ausfällt.", en: "Real-time monitor: shows at a glance whether everything's running and raises the alarm before something fails.", zh: "实时监视器：一眼看清一切是否正常运行，并在故障发生前发出告警。" },        color: "var(--p-automation)", cat: "ops",       ext: true, href: url("grafana-demo") },
  twin:       { key: "twin",       name: { de: "Digital Twin",        en: "Digital twin", zh: "数字孪生" }, desc: { de: "Ein digitales Abbild der Anlage — man kann Änderungen risikofrei am Bildschirm durchspielen, bevor man sie real umsetzt.", en: "A digital replica of the plant — you can trial changes risk-free on screen before doing them for real.", zh: "设备的数字复制体——可在屏幕上无风险地试运行变更，再落实到现实中。" },        color: "var(--p-twin)",       cat: "twin",      ext: true, href: url("twin-demo") },
  app:        { key: "app",        name: { de: "Shopfloor-App",       en: "Shop-floor app", zh: "车间应用" }, desc: { de: "Die App für die Werkshalle: Aufträge quittieren, Material buchen, Status melden — direkt an der Maschine, mit dem Handy.", en: "The app for the shop floor: confirm jobs, book material, report status — right at the machine, on a phone.", zh: "面向车间的应用：确认订单、登记物料、上报状态——就在机器旁，用手机完成。" },      color: "var(--p-collab)",     cat: "ops",       ext: true, href: url("app-demo") },
  lab:        { key: "lab",        name: { de: "Data-Science-Lab",    en: "Data-science lab", zh: "数据科学实验室" }, desc: { de: "Eine Werkbank für tiefe Datenanalysen und Experimente (Notebooks) — für Spezialfragen jenseits der Standard-Auswertungen.", en: "A workbench for deep data analysis and experiments (notebooks) — for special questions beyond the standard reports.", zh: "用于深度数据分析与实验（Notebook）的工作台——应对超出标准分析范围的专门问题。" },    color: "var(--p-ai)",         cat: "data",      ext: true, href: url("lab-demo") },
  leitstand:  { key: "leitstand",  name: { de: "Leitstand",           en: "Control room", zh: "中控室" }, desc: { de: "Die Schaltzentrale der Produktion: der Live-Zustand aller Maschinen auf einem Bildschirm — wie der Tower am Flughafen.", en: "The production control room: the live state of every machine on one screen — like an airport tower.", zh: "生产的指挥中枢：所有机器的实时状态汇聚于一屏——如同机场塔台。" },        color: "var(--p-ops)",        cat: "ops",       href: "/leitstand/" },
  anlage:     { key: "anlage",     name: { de: "Anlage & Schrank",    en: "Plant & cabinet", zh: "设备与电柜" }, desc: { de: "Die Maschine bzw. Anlage selbst samt Schaltschrank — Aufbau, Zustand und Steuerung sichtbar und verständlich gemacht.", en: "The machine or plant itself incl. its control cabinet — its build, state and controls made visible and understandable.", zh: "机器或设备本体连同其控制电柜——把结构、状态与控制变得可见、易懂。" },     color: "var(--p-automation)", cat: "twin",      href: "/anlage/" },
  historian:  { key: "historian",  name: { de: "Historian",           en: "Historian", zh: "历史数据库" }, desc: { de: "Das Langzeitgedächtnis der Maschinen: speichert Millionen Messwerte über die Zeit, damit man Verläufe und Trends sieht.", en: "The machines' long-term memory: stores millions of measurements over time so you can see trends and history.", zh: "机器的长期记忆：随时间存储数百万条测量值，让您看清历程与趋势。" },           color: "var(--p-historian)",  cat: "data",      href: "/historian/" },
  analyse:    { key: "analyse",    name: { de: "Werkstoff-Analyse",   en: "Material analysis", zh: "材料分析" }, desc: { de: "Prüfung von Material und Bauteilen — Maße, Oberfläche, Gefüge, Härte — dokumentiert für jede Charge.", en: "Inspection of material and parts — dimensions, surface, structure, hardness — documented for every batch.", zh: "对材料与零部件的检验——尺寸、表面、组织、硬度——每一批次都有记录。" },   color: "var(--p-historian)",  cat: "data",      href: "/analyse/" },
  graph:      { key: "graph",      name: { de: "Wissensgraph 3D",     en: "Knowledge graph 3D", zh: "知识图谱 3D" }, desc: { de: "Zeigt, wie alles zusammenhängt — Aufträge, Teile, Maschinen, Kunden — als vernetzte, drehbare 3D-Karte.", en: "Shows how everything connects — orders, parts, machines, customers — as a linked, rotatable 3D map.", zh: "展示万物如何关联——订单、零件、机器、客户——化为互联、可旋转的 3D 图。" },  color: "var(--p-knowledge)",  cat: "knowledge", href: "/graph/" },
  suche:      { key: "suche",      name: { de: "KI-Suche",            en: "AI search", zh: "AI 搜索" }, desc: { de: "Eine Suche über ALLE Firmendaten, die versteht, was du meinst, und in normaler Sprache antwortet — auch mit Tippfehlern.", en: "A search across ALL company data that understands what you mean and answers in plain language — even with typos.", zh: "一个覆盖全部企业数据的搜索，能理解您的意图并用日常语言作答——即便有拼写错误。" },           color: "var(--p-ai)",         cat: "ai",        href: "/suche/" },
  wissen:     { key: "wissen",     name: { de: "Wissen & Kiosk",      en: "Knowledge & kiosk", zh: "知识与自助终端" }, desc: { de: "Handbuch, Anleitungen und Nachschlagewerk: Firmenwissen auffindbar für alle, plus ein Selbstbedienungs-Kiosk.", en: "Handbook, guides and reference: company knowledge findable for everyone, plus a self-service kiosk.", zh: "手册、指南与参考资料：让企业知识人人可查，另配一个自助终端。" },   color: "var(--p-knowledge)",  cat: "knowledge", href: "/wissen/" },
  zusammen:   { key: "zusammen",   name: { de: "Zusammenarbeit",      en: "Collaboration", zh: "协作" }, desc: { de: "Chat, Videocalls, Dateien und gemeinsames Office — alles im eigenen Haus, ohne fremde Cloud.", en: "Chat, video calls, files and shared office — all in your own house, without someone else's cloud.", zh: "聊天、视频通话、文件与共享办公——全部自托管，不依赖外部云。" },       color: "var(--p-collab)",     cat: "knowledge", href: "/zusammenarbeit/" },
  status:     { key: "status",     name: { de: "Status-Board",        en: "Status board", zh: "状态看板" }, desc: { de: "Überblick, ob die Dienste laufen, wann zuletzt gesichert wurde und wie stabil alles ist.", en: "An overview of whether services are running, when the last backup ran and how stable everything is.", zh: "一览各项服务是否运行、上次备份于何时、整体是否稳定。" },        color: "var(--p-ops)",        cat: "ops",       href: "/status/" },
  portal:     { key: "portal",     name: { de: "Kundenportal",        en: "Customer portal", zh: "客户门户" }, desc: { de: "Der Online-Zugang für Kunden: Auftragsstatus, Rechnungen, Service und Reklamationen jederzeit selbst einsehbar.", en: "The online access for customers: order status, invoices, service and complaints viewable any time, self-service.", zh: "面向客户的在线入口：订单状态、发票、服务与投诉均可随时自助查看。" },     color: "var(--p-web)",        cat: "web",       href: "/portal/" },
};

export const CATS: Record<string, Record<Lang, string>> = {
  erp:       { de: "Auftrag & ERP",      en: "Orders & ERP", zh: "订单与 ERP" },
  ops:       { de: "Betrieb & Leitstand", en: "Ops & control", zh: "运营与中控" },
  twin:      { de: "Anlage & Twin",      en: "Plant & twin", zh: "设备与孪生" },
  data:      { de: "Daten & Historian",  en: "Data & historian", zh: "数据与历史数据库" },
  bi:        { de: "BI & Analytics",     en: "BI & analytics", zh: "BI 与分析" },
  ai:        { de: "KI & Suche",         en: "AI & search", zh: "AI 与搜索" },
  knowledge: { de: "Wissen & Team",      en: "Knowledge & team", zh: "知识与团队" },
  web:       { de: "Web & Kunde",        en: "Web & customer", zh: "网站与客户" },
};

export const AKTE: Record<string, Record<Lang, string>> = {
  I:   { de: "Akt I · Anbahnung",            en: "Act I · Initiation", zh: "第一幕 · 前期洽谈" },
  II:  { de: "Akt II · Auftrag → Lieferung", en: "Act II · Order → delivery", zh: "第二幕 · 订单 → 交付" },
  III: { de: "Akt III · Nach der Lieferung", en: "Act III · After delivery", zh: "第三幕 · 交付之后" },
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
  { id: "P0–P1", akt: "I",  titel: { de: "Erstkontakt & Lead",        en: "First contact & lead", zh: "首次接触与线索" },     kurz: { de: "Anfrage rein, Lead qualifizieren, Bedarf verstehen.",            en: "Inquiry in, qualify the lead, understand the need.", zh: "询盘进入，甄别线索，理解需求。" },             tools: ["erp", "suche"] },
  { id: "P2",    akt: "I",  titel: { de: "Angebot & Kalkulation",     en: "Quote & costing", zh: "报价与成本核算" },          kurz: { de: "Angebot rechnen, Machbarkeit per Twin durchspielen.",            en: "Cost the quote, sanity-check feasibility via the twin.", zh: "核算报价，借助孪生体推演可行性。" },          tools: ["erp", "twin", "zusammen"] },
  { id: "P3",    akt: "I",  star: true, titel: { de: "Auftrag & Bestelleingang", en: "Order & intake", zh: "订单与受理" }, kurz: { de: "Bestellung wird Auftrag — der Startschuss.",                     en: "Order becomes a confirmed job — the kickoff.", zh: "订购转为确认订单——正式启动。" },                   tools: ["erp"] },
  { id: "P4",    akt: "II", titel: { de: "Arbeitsvorbereitung",       en: "Work preparation", zh: "生产准备" },         kurz: { de: "Planung, Stückliste, Termine, Kapazität.",                       en: "Planning, BOM, dates, capacity.", zh: "计划、物料清单、交期、产能。" },                                tools: ["erp", "bi", "leitstand"] },
  { id: "P5",    akt: "II", titel: { de: "Beschaffung & Wareneingang", en: "Procurement & receiving", zh: "采购与收货" }, kurz: { de: "Material bestellen, prüfen, einbuchen.",                          en: "Order, inspect and book in material.", zh: "订购物料、检验、入库登记。" },                          tools: ["erp", "wissen"] },
  { id: "P6",    akt: "II", titel: { de: "Fertigung & Leittechnik",   en: "Production & control", zh: "生产与控制" },     kurz: { de: "Maschinen laufen — live überwacht, simuliert, historisiert.",    en: "Machines run — live-monitored, simulated, historised.", zh: "机器运转——实时监控、仿真、存入历史数据库。" },          tools: ["leitstand", "anlage", "twin", "historian", "cockpit"] },
  { id: "P7",    akt: "II", titel: { de: "Qualitätssicherung",        en: "Quality assurance", zh: "质量保证" },        kurz: { de: "Messen, prüfen, Gefüge & Kennwerte dokumentieren.",              en: "Measure, inspect, document structure & metrics.", zh: "测量、检验、记录组织与关键指标。" },                tools: ["bi", "historian", "analyse"] },
  { id: "P8",    akt: "II", titel: { de: "Lager & Versand",           en: "Warehouse & shipping", zh: "库存与发运" },     kurz: { de: "Kommissionieren, packen, versenden — mobil quittiert.",          en: "Pick, pack, ship — confirmed on mobile.", zh: "拣货、包装、发运——在移动端确认。" },                        tools: ["erp", "app"] },
  { id: "P9",    akt: "II", star: true, titel: { de: "Lieferung & Rechnung", en: "Delivery & invoice", zh: "交付与开票" }, kurz: { de: "Ausliefern, fakturieren (PEPPOL), Kunde sieht alles im Portal.", en: "Deliver, invoice (PEPPOL), customer sees it all in the portal.", zh: "交付、开票（PEPPOL），客户在门户中一览无余。" }, tools: ["erp", "status", "portal"] },
  { id: "P10",   akt: "III", titel: { de: "Service & Wartung",        en: "Service & maintenance", zh: "服务与维护" },    kurz: { de: "Servicevertrag, Zustand überwachen, vorausschauend warten.",     en: "Service contract, condition monitoring, predictive maintenance.", zh: "服务合同、状态监测、预测性维护。" }, tools: ["erp", "historian", "anlage"] },
  { id: "P11",   akt: "III", titel: { de: "Reklamation & Schaden",    en: "Complaints & claims", zh: "投诉与索赔" },      kurz: { de: "Fall aufnehmen, Wissen nutzen, Ursache finden.",                 en: "Log the case, use the knowledge base, find the root cause.", zh: "登记案例、调用知识库、查明根因。" },      tools: ["erp", "wissen", "suche"] },
  { id: "P12",   akt: "III", titel: { de: "Auswertung & KVP",         en: "Analysis & improvement", zh: "分析与持续改进" },   kurz: { de: "KPIs, Trends, Data-Science — und zurück in den Kreislauf.",      en: "KPIs, trends, data science — and back into the loop.", zh: "关键指标、趋势、数据科学——再反哺回整个闭环。" },           tools: ["bi", "cockpit", "lab", "graph"] },
];
