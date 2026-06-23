const CACHE_VERSION = 'v1.1.7';
const CACHE_NAME = `jrp-travels-${CACHE_VERSION}`;

// Core assets to cache immediately on installation
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/Logo.webp',
  '/apple-touch-icon.png',
  '/pwa-192x192.png',
  '/pwa-512x512.png',
];

// Install event: Precache core assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Precaching core assets');
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
});

// Activate event: Cache Busting (delete old caches)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Cache busting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event: Apply runtime caching strategies
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // 1. Skip caching for video files (they require Range requests and are large)
  if (url.pathname.includes('/videos/') || url.pathname.endsWith('.mp4') || url.pathname.endsWith('.webm')) {
    return;
  }

  // 2. Cache-First for Web Fonts (Google Fonts)
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        return fetch(event.request).then((networkResponse) => {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        });
      })
    );
    return;
  }

  // 3. Network-First / Stale-While-Revalidate for other local assets
  if (url.origin === self.location.origin) {
    // HTML / Index Page: Network-first to ensure fresh content
    if (url.pathname === '/' || url.pathname.endsWith('.html')) {
      event.respondWith(
        fetch(event.request)
          .then((networkResponse) => {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          })
          .catch(() => caches.match(event.request))
      );
      return;
    }

    // Static Assets (JS, CSS, Images): Stale-While-Revalidate
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        });
        return cachedResponse || fetchPromise;
      })
    );
  }
});
