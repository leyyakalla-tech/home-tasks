// Lets the app open even with weak/no signal. Always tries the network first,
// so task changes you make on GitHub show up next time the phone is online.
const CACHE = "home-tasks-v5";
const FILES = ["./", "index.html", "tasks.json", "manifest.json", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request))
  );
});
