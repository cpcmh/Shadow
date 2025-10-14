self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('shadow-map-cache').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './service-worker.js',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
        'https://unpkg.com/suncalc@1.9.0/suncalc.js',
        'https://unpkg.com/@turf/turf@6.5.0/turf.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
