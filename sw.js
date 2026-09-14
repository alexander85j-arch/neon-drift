// Minimal service worker — just enough to satisfy PWA installability
// requirements. The game needs a live connection anyway (leaderboard),
// so this doesn't attempt real offline caching.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
