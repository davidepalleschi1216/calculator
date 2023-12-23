const CACHE_NAME = 'Calculator-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    // Aggiungi qui le risorse che vuoi memorizzare in cache
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Memorizzazione nella cache delle risorse');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Restituisci la risorsa dalla cache o fallisci sulla rete
                return response || fetch(event.request);
            })
    );
});
