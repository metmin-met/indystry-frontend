import type { Lang } from "./content";

// FAQ-Inhalte (DE/EN). Tragen die Positionierung „OSS-Fundament, Wissen+Module = Mehrwert".
// Werden als Seite UND als FAQPage-JSON-LD (GEO/SEO) gerendert.
export interface QA { q: string; a: string }

// zh optional — Fallback auf en (faqsFor) bis die FAQ vollständig übersetzt ist.
export const faqsFor = (lang: Lang): QA[] => FAQS[lang] ?? FAQS.en;

export const FAQS: { de: QA[]; en: QA[]; zh?: QA[] } = {
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
    {
      q: "Macht ihr uns ISO-27001-/NIS2-fit?",
      a: "Ja. Wir richten ein gelebtes ISMS ein — Risikoregister mit Heatmap, Annex-A-Controls und Mappings auf NIS2, BSI und NIST. Ein Control wird einmal gepflegt und gilt für mehrere Normen. Dazu lückenlose technische Auditierbarkeit (SIEM, zentrale Logs). Kein Ordner, sondern ein laufender Betrieb.",
    },
    {
      q: "Und unser QM-System nach ISO 9001?",
      a: "Läuft im selben System: Dokumentenlenkung, interne Audits, Maßnahmen (CAPA), Abweichungen und Reklamationen (8D) — verknüpft mit Anlagen, Chargen und Prüfungen. Das Handbuch ist „lebendig“: einmal als Quelle gepflegt, fließt es automatisch ins ERP, ins Wiki und in die KI-Suche. Keine drei Stände, die auseinanderlaufen.",
    },
    {
      q: "Was, wenn der Server oder das Internet ausfällt?",
      a: "Dann wird aus einem Tag Stillstand eine Stunde Arbeit. Es gibt einen Out-of-Band-Zugang mit eigenem Mobilfunk (kommt rein, auch wenn das Netz tot ist), geprüfte Offsite-Backups mit echten Restore-Tests und selbstheilende Infrastruktur. Alles protokolliert.",
    },
    {
      q: "Können die Leute in der Halle mitmachen?",
      a: "Ja, über die Werker-App: stempeln, Zeit buchen, Fertigung quittieren und Behälter per NFC scannen — direkt an der Maschine, auch ohne Empfang (offline-first), ein Login per SSO.",
    },
    {
      q: "Wo liegen unsere Daten — und auch die KI?",
      a: "Bei euch. Alles läuft auf eurer Hardware oder eurem Server, in der EU oder on-prem. Auch die KI lässt sich self-hosted betreiben, sodass kein Prompt das Haus verlässt — ihr wählt den Punkt zwischen schneller Cloud-KI und eigenem Modell.",
    },
    {
      q: "Wie schnell sind wir umgestellt?",
      a: "Schritt für Schritt statt Big-Bang. Wir starten dort, wo der größte Schmerz ist, bringen euch schnell auf ein tragfähiges Niveau und bauen dann aus. Kein Stillstand, kein Risiko-Sprung.",
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
    {
      q: "Will you get us ISO 27001 / NIS2 ready?",
      a: "Yes. We set up a living ISMS — risk register with heatmap, Annex A controls and mappings to NIS2, BSI and NIST. A control is maintained once and counts for several standards. Plus seamless technical auditability (SIEM, central logs). Not a binder, a running operation.",
    },
    {
      q: "And our ISO 9001 quality system?",
      a: "It runs in the same system: document control, internal audits, corrective actions (CAPA), non-conformities and complaints (8D) — linked to assets, batches and inspections. The handbook is living: maintained once as a source, it flows automatically into the ERP, the wiki and the AI search. No three versions drifting apart.",
    },
    {
      q: "What if the server or the internet goes down?",
      a: "Then a day of downtime becomes an hour of work. There's out-of-band access with its own cellular link (gets in even when the network is dead), tested off-site backups with real restore drills, and self-healing infrastructure. All logged.",
    },
    {
      q: "Can the people on the floor take part?",
      a: "Yes, via the shop-floor app: clock in, book time, sign off manufacturing and scan containers by NFC — right at the machine, even without signal (offline-first), one login via SSO.",
    },
    {
      q: "Where does our data live — and the AI?",
      a: "With you. Everything runs on your hardware or your server, in the EU or on-prem. The AI can be self-hosted too, so no prompt leaves the house — you choose the point between fast cloud AI and your own model.",
    },
    {
      q: "How fast are we migrated?",
      a: "Step by step, not big bang. We start where the pain is greatest, get you to a solid level quickly, then expand. No standstill, no risky leap.",
    },
  ],
  zh: [
    {
      q: "这到底是什么？",
      a: "一个完全自托管的工业 4.0 技术栈的展示——从传感器到分析，不依赖任何云。所有模块都是开源的；真正的差别在于如何把它们组装成一个在工厂里真正撑得住的系统。",
    },
    {
      q: "这些全都是开源的吗？",
      a: "技术栈本身，是的——100%。这些模块都是开放且可自由获取的。不属于通用商品的部分是：来自真实工厂的集成知识，以及我们自己的模块，它们恰好在标准软件止步之处补上缺口。Build on open source. Build on our knowledge.",
    },
    {
      q: "为什么不直接用云 SaaS？",
      a: "因为那样一来，您的数据、许可成本和可用性都掌握在外部供应商手里。自托管意味着：数据留在厂内，没有按人头计费的许可，没有厂商锁定——隐私是被真正解决，而不是被转嫁出去。",
    },
    {
      q: "我可以试用吗？",
      a: "可以。在「在线演示」中，您会看到基于一家虚构样板公司合成数据的真实、可点击的系统——仪表盘、BI、ERP、数据科学、数字孪生、协同编辑。无需注册账号，直接打开即可。",
    },
    {
      q: "运行这套系统需要我们自己的 IT 团队吗？",
      a: "不需要——这正是关键所在。您获得的是集成好、可直接运行的技术栈；运维、更新和备份都是自动化的。背后的知识是我们的贡献。",
    },
    {
      q: "如果标准软件无法覆盖全部需求怎么办？",
      a: "那就轮到定制模块登场——为您的流程量身打造，而不是把您硬塞进别人的模板里。价值恰恰就在这里。",
    },
    {
      q: "数据——以及代码——归谁所有？",
      a: "归您。一切都运行在您的硬件或您的服务器上；数据永不离开厂内。技术栈是开源的，您自己的模块归您所有——没有任何供应商能把您锁在门外、随意定价或停掉产品。",
    },
    {
      q: "万一你们哪天不在了怎么办？",
      a: "那您的系统照常运行。它建立在拥有庞大社区、开放且有文档的模块之上——没有秘密代码，没有专用许可。一切都以代码形式版本化、可追溯，任何其他公司或您自己的 IT 都能接手。开源存在的意义正在于此。",
    },
    {
      q: "我该如何开始？",
      a: "通过联系表单简单告诉我们您的需求。我们一起看看哪些模块适合——并在开源加上我们的知识之上构建。",
    },
    {
      q: "你们能帮我们达到 ISO 27001 / NIS2 合规吗？",
      a: "可以。我们会搭建一套真正落地运行的 ISMS——带热力图的风险登记册、Annex A 控制项，以及到 NIS2、BSI 和 NIST 的映射。一个控制项只需维护一次，即可对应多项标准。再加上无缝的技术可审计性（SIEM、集中日志）。这不是一本文件夹，而是一项持续运行的工作。",
    },
    {
      q: "那我们符合 ISO 9001 的质量管理系统呢？",
      a: "在同一个系统里运行：文件管控、内部审核、纠正措施（CAPA）、不合格与投诉（8D）——与设备、批次和检验相互关联。手册是「活的」：作为唯一来源维护一次，它就会自动流入 ERP、Wiki 和 AI 搜索。不会再有三个版本各自漂移。",
    },
    {
      q: "如果服务器或网络中断了怎么办？",
      a: "那样一天的停机就会变成一小时的工作。系统配有自带蜂窝链路的带外访问（即使网络瘫痪也能进入）、带真实恢复演练的经验证异地备份，以及自愈基础设施。全部都有记录。",
    },
    {
      q: "车间里的人能参与进来吗？",
      a: "可以，通过车间应用：打卡、记工时、确认生产、用 NFC 扫描料箱——就在机器旁完成，即使没有信号也行（离线优先），通过 SSO 一次登录。",
    },
    {
      q: "我们的数据——以及 AI——放在哪里？",
      a: "放在您这里。一切都运行在您的硬件或您的服务器上，在欧盟境内或本地部署。AI 也可以自托管，因此没有任何提示词会离开厂内——您可以在快速的云端 AI 与您自己的模型之间自行选择平衡点。",
    },
    {
      q: "我们多快能完成切换？",
      a: "循序渐进，而非一步到位。我们从痛点最大的地方入手，让您快速达到一个稳固的水平，然后再逐步扩展。不停机，不冒险跃进。",
    },
  ],
};
