import data from "../data/content.json";

export type Lang = "de" | "en";

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
