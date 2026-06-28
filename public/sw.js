const C = "indystry-v1";
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil((async () => {
  const ks = await caches.keys();
  await Promise.all(ks.filter((k) => k !== C).map((k) => caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener("fetch", (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return;
  e.respondWith((async () => {
    try {
      const r = await fetch(e.request);
      if (r && r.status === 200 && (r.type === "basic")) { const c = await caches.open(C); c.put(e.request, r.clone()); }
      return r;
    } catch {
      const cached = await caches.match(e.request);
      return cached || caches.match("/") || Response.error();
    }
  })());
});
