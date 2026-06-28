import cfg from "../data/search.json";

// search.json wird vom Build erzeugt (index-search.mjs). Ohne echten Key → Suche aus.
export const search = cfg as { host: string; index: string; key: string; semantic?: boolean };
export const searchEnabled = !!search.key;
export const semanticEnabled = !!search.semantic;
