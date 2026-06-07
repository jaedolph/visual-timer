const CACHE = 'visual-timer-v1';
const ASSETS = [
  '/',
  '/manifest.json',
  '/sw.js',
  '/icons/app-192.svg',
  '/icons/app-512.svg',
  '/icons/app-maskable.svg',
  '/icons/shortcut-1m.svg',
  '/icons/shortcut-5m.svg',
  '/icons/shortcut-10m.svg',
  '/icons/shortcut-15m.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached ?? fetch(event.request))
  );
});
