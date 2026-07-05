/* Grimoire service worker.
   HOW UPDATES WORK: bump CACHE_VERSION whenever you change any file,
   then reload the app twice (or close & reopen). */
const CACHE_VERSION = "grimoire-v3";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // let API calls (Open5e) hit the network directly

  if (e.request.mode === "navigate") {
    // network-first for the page itself, so new versions arrive quickly
    e.respondWith(
      fetch(e.request)
        .then(r => { const cp = r.clone(); caches.open(CACHE_VERSION).then(c => c.put(e.request, cp)); return r; })
        .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
    );
  } else {
    // cache-first for static assets
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(res => {
        const cp = res.clone(); caches.open(CACHE_VERSION).then(c => c.put(e.request, cp)); return res;
      }))
    );
  }
});
