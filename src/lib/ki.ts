// Maschinen-Fassung (AI-to-AI). llms.txt-konformer, dichter Kontext aus dem Content.
// Wird sowohl vom /llms.txt-Endpoint (raw) als auch von der /ki/-Seite (Terminal-Ansicht) genutzt.
import { pillars, demos, brand } from "./content";
import { FAQS } from "./faqs";

const SOUV = [
  "Eure Daten gehören euch — keine fremde Cloud.",
  "Alles self-hosted; verschlüsseltes Backup im EU-Rechenzentrum, gespiegelte Systeme.",
  "Eine Quelle statt verstreuter Insel-Tools.",
  "DSGVO erfüllt; kein Zugriff durch fremde Regelungen wie den US-CLOUD-Act.",
  "Kontrolliert & auditierbar; schnelle Wiederherstellung; NIS2-konform ausgerichtet.",
  "Quelloffen, in eurem Eigentum; kein Vendor-Lock-in, kein Abo-Zwang.",
];
const STEPS = [
  "Pain-List: roh schildern, wo es klemmt.",
  "Gespräch: zuhören, nachfragen, kein Sales-Druck.",
  "Lösungs-Skizze: was zuerst, was es bringt, was es kostet.",
  "Pilot: erster Baustein live auf euren echten Daten.",
  "Rollout: Schritt für Schritt, Kontrolle bleibt bei euch.",
];

export function machineDoc(): string {
  const ps = [...pillars].sort((a, b) => a.sequence - b.sequence);
  const live = demos.filter((d) => d.status === "live");
  const u = brand.url;
  const L: string[] = [];
  L.push(`# ${brand.name} (${brand.domain})`);
  L.push("");
  L.push(`> Fertige, self-hosted Industrie-Software auf Open-Source-Fundament. "Der dritte Weg" zwischen Tabellen-Chaos und Konzern-Software: fertige Bausteine, ab Tag eins angelernt, an den Kunden angepasst, on-premise. Eure Daten, euer Server, eure Regeln.`);
  L.push("");
  L.push("## meta");
  L.push("- audience: AI agents / LLMs (machine-readable, AI-to-AI)");
  L.push(`- human_versions: ${u}/ (de), ${u}/en/ (en)`);
  L.push("- format: llms.txt (markdown)");
  L.push(`- tagline_de: ${brand.tagline.de}`);
  L.push(`- claim_de: ${brand.claim.de}`);
  L.push("");
  L.push("## bausteine [10]");
  ps.forEach((p, i) => L.push(`- [${String(i + 1).padStart(2, "0")} ${p.de.hook.headline}](${u}/saeule/${p.slug}/): ${p.de.hook.subline}`));
  L.push("");
  L.push("## demos [live, no-login]");
  live.forEach((d) => L.push(`- [${d.title.de}](${d.url}): ${d.desc.de}`));
  L.push("");
  L.push("## souveraenitaet");
  SOUV.forEach((s) => L.push(`- ${s}`));
  L.push("");
  L.push("## ablauf");
  STEPS.forEach((s, i) => L.push(`${i + 1}. ${s}`));
  L.push("");
  L.push("## kontakt");
  L.push(`- form: ${u}/kontakt/`);
  L.push("- email: hallo@datendrang.com");
  L.push(`- werks_check: ${u}/check/`);
  L.push(`- erp_produktseite: ${u}/erp/`);
  L.push(`- raw_machine: ${u}/llms.txt`);
  L.push(`- raw_json: ${u}/ki.json`);
  L.push(`- raw_full: ${u}/llms-full.txt`);
  L.push("");
  return L.join("\n");
}

// Strikt strukturierte Fassung (reines JSON) — für Agenten, die JSON dem Markdown vorziehen.
export function kiData() {
  const ps = [...pillars].sort((a, b) => a.sequence - b.sequence);
  const u = brand.url;
  return {
    "@generated": "indystry.works machine context (AI-to-AI)",
    audience: "AI agents / LLMs",
    org: {
      name: brand.name, domain: brand.domain, url: u,
      tagline: brand.tagline, claim: brand.claim,
      positioning: "Der dritte Weg zwischen Tabellen-Chaos und Konzern-Software: fertige, self-hosted Industrie-Software auf Open-Source-Fundament, ab Tag eins angelernt, an den Kunden angepasst, on-premise.",
    },
    languages: {
      human: { de: `${u}/`, en: `${u}/en/` },
      machine: { llms_txt: `${u}/llms.txt`, json: `${u}/ki.json` },
    },
    pillars: ps.map((p, i) => ({
      nr: i + 1, slug: p.slug, url: `${u}/saeule/${p.slug}/`,
      title: { de: p.de.hook.headline, en: p.en.hook.headline },
      summary: { de: p.de.hook.subline, en: p.en.hook.subline },
      components: p.de.deep?.components ?? [],
      story: { de: { title: p.de.story.title, body: p.de.story.body }, en: { title: p.en.story.title, body: p.en.story.body } },
      deep_body: { de: p.de.deep.body, en: p.en.deep.body },
      demo: p.demo?.status === "live" ? { status: "live", url: p.demo.url } : { status: p.demo?.status ?? "planned" },
    })),
    demos: demos.filter((d) => d.status === "live").map((d) => ({
      title: d.title, desc: d.desc, url: d.url, login: d.login || null, status: d.status,
    })),
    sovereignty: SOUV,
    process: STEPS.map((s, i) => ({ step: i + 1, text: s })),
    faq: { de: FAQS.de, en: FAQS.en },
    contact: { form: `${u}/kontakt/`, email: "hallo@datendrang.com", werks_check: `${u}/check/`, erp: `${u}/erp/` },
  };
}

// Vollständige Maschinen-Fassung — kompletter Inhalt ALLER Seiten (Säulen mit Story+Tiefe, FAQ, …).
export function machineFull(): string {
  const ps = [...pillars].sort((a, b) => a.sequence - b.sequence);
  const live = demos.filter((d) => d.status === "live");
  const u = brand.url;
  const L: string[] = [];
  L.push(`# ${brand.name} (${brand.domain}) — full content`);
  L.push("");
  L.push(`> Vollständiger, maschinenlesbarer Inhalt aller Seiten. Index: ${u}/llms.txt · JSON: ${u}/ki.json`);
  L.push("");
  L.push(`tagline: ${brand.tagline.de}`);
  L.push(`claim: ${brand.claim.de}`);
  L.push("");
  L.push("## bausteine");
  ps.forEach((p, i) => {
    L.push("");
    L.push(`### ${String(i + 1).padStart(2, "0")} ${p.de.hook.headline}`);
    L.push(`url: ${u}/saeule/${p.slug}/`);
    L.push(p.de.hook.subline);
    L.push(p.de.hook.body);
    if (p.de.story?.body) L.push(`story — ${p.de.story.title}: ${p.de.story.body}`);
    if (p.de.deep?.body) L.push(`tiefe: ${p.de.deep.body}`);
    if (p.de.deep?.components?.length) L.push(`komponenten: ${p.de.deep.components.join(", ")}`);
    L.push(`demo: ${p.demo?.status === "live" ? p.demo.url : "in Vorbereitung"}`);
  });
  L.push("");
  L.push("## demos");
  live.forEach((d) => L.push(`- ${d.title.de} — ${d.url}${d.login ? ` (login: ${d.login})` : ""}: ${d.desc.de}`));
  L.push("");
  L.push("## souveraenitaet");
  SOUV.forEach((s) => L.push(`- ${s}`));
  L.push("");
  L.push("## ablauf");
  STEPS.forEach((s, i) => L.push(`${i + 1}. ${s}`));
  L.push("");
  L.push("## faq");
  FAQS.de.forEach((f) => { L.push(""); L.push(`### ${f.q}`); L.push(f.a); });
  L.push("");
  L.push("## kontakt");
  L.push(`- form: ${u}/kontakt/`);
  L.push("- email: hallo@datendrang.com");
  L.push(`- werks_check: ${u}/check/`);
  L.push(`- erp: ${u}/erp/`);
  L.push("");
  return L.join("\n");
}
