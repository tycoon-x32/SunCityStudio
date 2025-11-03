const CACHE_NAME = 'suncity-studio-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  'https://vasundhararealty.com/wp-content/uploads/2023/09/Happy-International-Literacy-Day-3.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request)
        .then(networkResponse => {
          // Put a copy in the cache
          return caches.open(CACHE_NAME).then(cache => {
            try {
              cache.put(event.request, networkResponse.clone());
            } catch (e) {
              // Some requests (opaque/cross-origin) may fail to cache - ignore
            }
            return networkResponse;
          });
        })
        .catch(() => caches.match('/index.html'));
    })
  );
});
