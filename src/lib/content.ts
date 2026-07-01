import data from "../data/content.json";

export type Lang = "de" | "en" | "zh";

// Reihenfolge = Anzeige-Reihenfolge im Sprachumschalter.
export const LANGS: Lang[] = ["de", "en", "zh"];

// Interner Lang-Code → URL-Präfix. de = kein Präfix, zh nutzt /cn (China-freundliche URL).
export function langPrefix(lang: Lang): string {
  return lang === "de" ? "" : lang === "en" ? "/en" : "/cn";
}
// Interner Lang-Code → hreflang / og:locale (zh = Simplified/Mainland).
export function hreflangCode(lang: Lang): string {
  return lang === "de" ? "de" : lang === "en" ? "en" : "zh-Hans";
}
export function ogLocale(lang: Lang): string {
  return lang === "de" ? "de_DE" : lang === "en" ? "en_US" : "zh_CN";
}
// Beschriftung im Sprachumschalter.
export const LANG_LABEL: Record<Lang, string> = { de: "DE", en: "EN", zh: "中文" };
// Kanonischen (DE-)Pfad aus einem beliebigen lokalisierten Pfad ableiten (Präfix strippen).
export function stripLangPrefix(path: string): string {
  return path.replace(/^\/(en|cn)(?=\/|$)/, "") || "/";
}

export interface Hook { headline: string; subline: string; body: string }
export interface Story { title: string; body: string }
export interface Deep { body: string; components: string[] }
export interface PillarLang { hook: Hook; story: Story; deep: Deep }
export interface Demo { url: string; login: string; status: "live" | "planned" }
export interface Pillar {
  slug: string;
  sequence: number;
  icon: string;
  color: number;
  demo: Demo;
  de: PillarLang;
  en: PillarLang;
  zh?: PillarLang; // optional bis pillars.yaml vollständig zh trägt (Fallback → en)
}
export interface Brand {
  codename: string;
  name: string;
  domain: string;
  url: string;
  tagline: Record<Lang, string>;
  claim: Record<Lang, string>;
}

export interface DemoEntry {
  slug: string;
  sequence: number;
  color: number;
  status: "live" | "planned";
  url: string;
  login: string;
  title: Record<Lang, string>;
  desc: Record<Lang, string>;
}

interface Content {
  generated_at: string;
  brand: Brand;
  meta: { pillars: number; demos: number; locales: Lang[]; default_locale: Lang };
  pillars: Pillar[];
  demos: DemoEntry[];
}

export const content = data as unknown as Content;
export const brand = content.brand;
export const pillars = content.pillars;
export const demos = content.demos ?? [];

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((p) => p.slug === slug);
}

// accent color from the stored hue
export function accent(p: Pillar, l = 52, s = 64): string {
  return `hsl(${p.color} ${s}% ${l}%)`;
}
