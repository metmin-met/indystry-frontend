import type { Lang } from "./content";

// FAQ-Inhalte (DE/EN). Tragen die Positionierung „OSS-Fundament, Wissen+Module = Mehrwert".
// Werden als Seite UND als FAQPage-JSON-LD (GEO/SEO) gerendert.
export interface QA { q: string; a: string }

export const FAQS: Record<Lang, QA[]> = {
  de: [
    {
      q: "Was ist das hier eigentlich?",
      a: "Ein Showcase für einen komplett selbst gehosteten Industrie-4.0-Stack — vom Sensor bis zur Auswertung, ohne Cloud-Abhängigkeit. Alle Bausteine sind Open Source; den Unterschied macht, wie man sie zu einem System zusammenbaut, das im Werk wirklich trägt.",
    },
    {
      q: "Ist das alles Open Source?",
      a: "Der Stack ja — zu 100 %. Die Bausteine sind offen und frei verfügbar. Was nicht Commodity ist: das Integrations-Wissen aus echten Anlagen und die eigenen Module, die genau dort die Lücken schließen, wo Standard-Software aufhört. Build on open source. Build on our knowledge.",
    },
    {
      q: "Warum nicht einfach Cloud-SaaS?",
      a: "Weil dann Daten, Lizenzkosten und Verfügbarkeit bei einem fremden Anbieter liegen. Self-hosted heißt: Daten im Haus, keine Lizenz pro Kopf, kein Vendor-Lock-in — Datenschutz ist gelöst statt delegiert.",
    },
    {
      q: "Kann ich das ausprobieren?",
      a: "Ja. Unter „Live-Demos“ laufen echte, klickbare Systeme auf synthetischen Daten einer fiktiven Musterfirma — Dashboards, BI, ERP, Data-Science, Digital-Twin, gemeinsames Arbeiten. Kein Konto nötig, einfach öffnen.",
    },
    {
      q: "Brauche ich eigene IT, um das zu betreiben?",
      a: "Nein — das ist der Punkt. Ihr bekommt den Stack betriebsfertig integriert; Betrieb, Updates und Backups laufen automatisiert. Das Wissen, das dahintersteht, ist unser Beitrag.",
    },
    {
      q: "Was, wenn Standard-Software nicht alles abdeckt?",
      a: "Dann kommen eigene Module ins Spiel — passgenau für eure Prozesse, statt euch in fremde Schemata zu zwängen. Genau hier sitzt der Mehrwert.",
    },
    {
      q: "Wem gehören die Daten — und der Code?",
      a: "Euch. Alles läuft auf eurer Hardware oder eurem Server, die Daten verlassen das Haus nicht. Der Stack ist Open Source, eure eigenen Module gehören euch — kein Anbieter kann euch aussperren, die Preise diktieren oder das Produkt einstellen.",
    },
    {
      q: "Was, wenn ihr mal wegfallt?",
      a: "Dann läuft euer System weiter. Es steht auf offenen, dokumentierten Bausteinen mit großen Communities — kein Geheim-Code, keine Spezial-Lizenz. Alles ist als Code versioniert und nachvollziehbar, jede andere Firma oder eure eigene IT kann übernehmen. Genau dafür ist Open Source da.",
    },
    {
      q: "Wie fange ich an?",
      a: "Schreib uns über das Kontaktformular kurz, worum es geht. Wir schauen gemeinsam, welche Bausteine passen — und bauen auf Open Source plus unserem Wissen auf.",
    },
  ],
  en: [
    {
      q: "What is this, actually?",
      a: "A showcase for a fully self-hosted Industry 4.0 stack — from sensor to insight, without cloud lock-in. Every building block is open source; the difference is how you wire them into a system that actually holds up on the shop floor.",
    },
    {
      q: "Is all of this open source?",
      a: "The stack, yes — 100 %. The building blocks are open and freely available. What isn't a commodity: the integration knowledge from real plants and our own modules that close the gaps exactly where standard software stops. Build on open source. Build on our knowledge.",
    },
    {
      q: "Why not just use cloud SaaS?",
      a: "Because then your data, licence costs and availability sit with an external vendor. Self-hosted means: data in-house, no per-seat licence, no vendor lock-in — privacy solved rather than delegated.",
    },
    {
      q: "Can I try it out?",
      a: "Yes. Under “Live demos” you'll find real, clickable systems on synthetic data from a fictional sample company — dashboards, BI, ERP, data science, a digital twin, collaborative editing. No account needed, just open them.",
    },
    {
      q: "Do I need my own IT team to run this?",
      a: "No — that's the point. You get the stack integrated and ready to run; operations, updates and backups are automated. The knowledge behind it is our contribution.",
    },
    {
      q: "What if standard software doesn't cover everything?",
      a: "Then custom modules come in — tailored to your processes instead of forcing you into someone else's schema. This is exactly where the value sits.",
    },
    {
      q: "Who owns the data — and the code?",
      a: "You do. Everything runs on your hardware or your server; the data never leaves the house. The stack is open source and your own modules are yours — no vendor can lock you out, dictate the price or discontinue the product.",
    },
    {
      q: "What if you disappear one day?",
      a: "Then your system keeps running. It's built on open, documented building blocks with large communities — no secret code, no special licence. Everything is versioned and traceable as code, so any other firm or your own IT can take over. That's exactly what open source is for.",
    },
    {
      q: "How do I get started?",
      a: "Drop us a line via the contact form about what you need. We'll look together at which building blocks fit — and build on open source plus our knowledge.",
    },
  ],
};
