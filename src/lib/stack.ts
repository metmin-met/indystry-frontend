// Untechnische Erklärung der OSS-Lösungen je Säule + bekannte Mit-Nutzer ("das Umfeld").
// Bewusst frontend-lokal (kein CMS-/Pipeline-Durchstich nötig).
// who_*: NUR belegbare, gut dokumentierte Nutzer — im Zweifel weglassen statt erfinden.
export interface StackItem {
  name: string;
  de: string;
  en: string;
  who_de?: string;
  who_en?: string;
}

// Wiederverwendete Einträge (Tools tauchen in mehreren Säulen auf)
const POSTGRES: StackItem = {
  name: "PostgreSQL",
  de: "Die Datenbank, auf der alles aufsetzt — seit über 30 Jahren der verlässliche Standard.",
  en: "The database everything sits on — the reliable standard for 30+ years.",
  who_de: "Apple, Spotify und Instagram bauen darauf.",
  who_en: "Apple, Spotify and Instagram build on it.",
};
const GRAFANA: StackItem = {
  name: "Grafana",
  de: "Das Cockpit: zeigt in Echtzeit, ob alles läuft — und schlägt Alarm, bevor etwas ausfällt.",
  en: "The cockpit: shows in real time whether everything's running — and alerts before things fail.",
  who_de: "Standard-Cockpit in Monitoring-Stacks weltweit.",
  who_en: "The standard cockpit in monitoring stacks worldwide.",
};
const JUPYTER: StackItem = {
  name: "JupyterLab",
  de: "Der Rechen-Notizblock der Datenprofis — Analyse, Diagramme und Erklärung an einem Ort.",
  en: "The data pro's computational notebook — analysis, charts and explanation in one place.",
  who_de: "NASA und Netflix nutzen es.",
  who_en: "NASA and Netflix use it.",
};

export const STACK: Record<string, StackItem[]> = {
  "basis-betrieb": [
    {
      name: "Proxmox VE",
      de: "Die Grundlage: macht aus einem Server viele — eure ganze IT läuft virtuell, sauber getrennt, jederzeit umziehbar.",
      en: "The foundation: turns one server into many — your whole IT runs virtual, cleanly separated, movable any time.",
      who_de: "Open Source aus Wien — in Rechenzentren weltweit.",
      who_en: "Open source from Vienna — in data centres worldwide.",
    },
    GRAFANA,
    {
      name: "GitLab",
      de: "Alles als Code, nachvollziehbar versioniert — Schluss mit „der Kollege weiß, wie's eingerichtet ist\".",
      en: "Everything as code, traceably versioned — no more \"only one colleague knows how it's set up\".",
      who_de: "Von Behörden und Konzernen weltweit genutzt.",
      who_en: "Used by governments and large enterprises worldwide.",
    },
    {
      name: "WireGuard",
      de: "Verschlüsselt eure Standorte zu einem privaten Netz — schlank, schnell, ohne offene Ports ins Internet.",
      en: "Encrypts your sites into one private network — lean, fast, no open ports to the internet.",
      who_de: "Teil des Linux-Kernels — Basis von Cloudflare WARP.",
      who_en: "Part of the Linux kernel — the basis of Cloudflare WARP.",
    },
    {
      name: "Authentik (SSO)",
      de: "Ein Login für alles: zentrale Anmeldung mit Zwei-Faktor, statt zehn Passwörter im Umlauf.",
      en: "One login for everything: central sign-on with two-factor, instead of ten passwords floating around.",
      who_de: "Open-Source Single-Sign-On.",
      who_en: "Open-source single sign-on.",
    },
    {
      name: "Wazuh (SIEM)",
      de: "Wacht über Angriffe, ungewöhnliches Verhalten und Compliance — die Sicherheits-Zentrale, die früh Alarm schlägt.",
      en: "Watches for attacks, unusual behaviour and compliance — the security hub that raises the alarm early.",
      who_de: "Open-Source-SIEM.",
      who_en: "Open-source SIEM.",
    },
    POSTGRES,
  ],
  "automatisierung-leittechnik": [
    {
      name: "OPC UA",
      de: "Die gemeinsame Sprache der Maschinen: verbindet Steuerungen verschiedener Hersteller herstellerneutral.",
      en: "The shared language of machines: connects controllers from different vendors, vendor-neutral.",
      who_de: "Industrie-Standard — weltweit von praktisch allen großen Automatisierern unterstützt.",
      who_en: "Industry standard — supported by virtually every major automation vendor worldwide.",
    },
    GRAFANA,
  ],
  "digital-twin-simulation": [
    {
      name: "R Shiny",
      de: "Macht aus Daten interaktive Was-wäre-wenn-Apps im Browser — Regler schieben, Ergebnis sofort sehen.",
      en: "Turns data into interactive what-if apps in the browser — move a slider, see the result instantly.",
      who_de: "In Pharma und Finanz weit verbreitet.",
      who_en: "Widely used in pharma and finance.",
    },
    {
      name: "scikit-learn",
      de: "Die Werkzeugkiste fürs maschinelle Lernen — erkennt Muster und sagt Ergebnisse voraus.",
      en: "The machine-learning toolbox — spots patterns and predicts outcomes.",
      who_de: "J.P. Morgan und Spotify bauen darauf.",
      who_en: "J.P. Morgan and Spotify build on it.",
    },
    JUPYTER,
  ],
  "historian-datalake": [
    {
      name: "TimescaleDB",
      de: "Eine Datenbank, die für Zeitreihen gebaut ist — Millionen Messpunkte, blitzschnell ausgewertet.",
      en: "A database built for time series — millions of data points, analysed in a flash.",
      who_de: "Zeitreihen-Erweiterung des bewährten PostgreSQL.",
      who_en: "The time-series extension of proven PostgreSQL.",
    },
    POSTGRES,
    {
      name: "SeaweedFS",
      de: "Riesiges Objekt-Archiv für Bilder, Reports und Rohdaten — günstig und praktisch endlos erweiterbar.",
      en: "A vast object archive for images, reports and raw data — cheap and practically endless to grow.",
    },
  ],
  "bi-analytics": [
    {
      name: "Metabase",
      de: "Fragen an die Daten in normaler Sprache — Dashboards, die jeder im Team versteht, ganz ohne SQL.",
      en: "Ask your data in plain language — dashboards everyone on the team understands, no SQL needed.",
      who_de: "Über 80.000 Organisationen — u. a. Gojek.",
      who_en: "Over 80,000 organisations — incl. Gojek.",
    },
    GRAFANA,
    JUPYTER,
    POSTGRES,
  ],
  "erp-betrieb": [
    {
      name: "Odoo",
      de: "Das offene ERP-Herz: Aufträge, Lager, Fertigung, Rechnungen — ein System statt zehn Tabellen.",
      en: "The open ERP heart: orders, stock, manufacturing, invoices — one system instead of ten spreadsheets.",
      who_de: "Über 12 Mio. Nutzer — u. a. Toyota und Sodexo.",
      who_en: "Over 12M users — incl. Toyota and Sodexo.",
    },
    POSTGRES,
  ],
  "ki-suche-nlp": [
    {
      name: "Meilisearch",
      de: "Eine blitzschnelle Suche, die versteht, was du meinst — auch mit Tippfehlern. Durchforstet Dokumente, Notizen und Dateien auf einmal.",
      en: "A lightning-fast search that understands what you mean — even with typos. Scans documents, notes and files all at once.",
    },
    { ...POSTGRES,
      de: "Die Datenbank, auf der alles aufsetzt — seit über 30 Jahren der Standard. Sie merkt sich auch die „Bedeutung\" von Texten, damit die KI passende Antworten findet.",
      en: "The database everything sits on — the standard for 30+ years. It even stores the \"meaning\" of text so the AI finds the right answers.",
    },
    {
      name: "n8n",
      de: "Verbindet eure Programme und erledigt wiederkehrende Abläufe von selbst — ganz ohne Programmieren.",
      en: "Connects your programs and handles recurring tasks on its own — no coding.",
      who_de: "Open Source aus Berlin, im Einsatz bei tausenden Teams.",
      who_en: "Open source from Berlin, used by thousands of teams.",
    },
    {
      name: "Mistral (On-Prem-KI)",
      de: "Dieselbe Klasse Sprach-KI wie die bekannten Chatbots — nur läuft sie bei euch im Haus statt in fremder Cloud.",
      en: "The same class of language AI as the well-known chatbots — but it runs in your house, not someone else's cloud.",
      who_de: "Europäische KI aus Paris.",
      who_en: "European AI from Paris.",
    },
  ],
  "zusammenarbeit": [
    {
      name: "Matrix / Element",
      de: "Chat & Videocalls auf eurem eigenen Server, Ende-zu-Ende-verschlüsselt — föderiert wie E-Mail.",
      en: "Chat & video calls on your own server, end-to-end encrypted — federated like email.",
      who_de: "Die französische Regierung und die Bundeswehr setzen darauf.",
      who_en: "The French government and the German armed forces rely on it.",
    },
    {
      name: "Nextcloud",
      de: "Eure eigene Datei-Cloud mit Sync, Teilen und Kalender — wie die bekannten Cloud-Speicher, nur bei euch.",
      en: "Your own file cloud with sync, sharing and calendar — like the well-known cloud drives, but yours.",
      who_de: "Die deutsche Bundesverwaltung und Siemens setzen darauf.",
      who_en: "The German federal administration and Siemens rely on it.",
    },
    {
      name: "OnlyOffice",
      de: "Dokumente, Tabellen und Präsentationen gemeinsam im Browser bearbeiten — kompatibel zu den gängigen Office-Formaten.",
      en: "Edit documents, spreadsheets and slides together in the browser — compatible with the common office formats.",
    },
  ],
  "wissen-compliance-kiosk": [
    {
      name: "Wiki & Living-Handbuch",
      de: "Wissen, das nicht im Kopf einzelner steckt, sondern auffindbar und aktuell für alle — Anleitungen, Abläufe, Nachschlagewerk.",
      en: "Knowledge that doesn't live in one person's head but is findable and current for everyone — guides, procedures, reference.",
    },
    {
      name: "Headwind MDM",
      de: "Verwaltet Tablets & Handys aus der Ferne — App drauf, Konfig drauf, ohne dass jemand das Gerät anfassen muss.",
      en: "Manages tablets & phones remotely — push an app, push a config, without anyone touching the device.",
      who_de: "Open Source Mobile-Device-Management.",
      who_en: "Open-source mobile device management.",
    },
  ],
  "web-aussenauftritt": [
    {
      name: "Astro",
      de: "Baut blitzschnelle Websites (wie diese hier) — Top-Ladezeiten, gut auffindbar bei Google.",
      en: "Builds lightning-fast websites (like this one) — top load times, easy for Google to find.",
      who_de: "Porsche, IKEA und The Guardian setzen darauf.",
      who_en: "Porsche, IKEA and The Guardian rely on it.",
    },
    {
      name: "Directus",
      de: "Der Redaktions-Baukasten dahinter: Inhalte pflegen ohne Programmieren, mehrsprachig.",
      en: "The editorial toolkit behind it: maintain content without coding, multilingual.",
    },
  ],
};
