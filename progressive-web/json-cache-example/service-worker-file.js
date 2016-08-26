
var dataCacheName = 'json-basic-serviceworker-v1';

var CacheTheseFiles = [
  '/',
  '/index.html',
  'ajax-files.js'
];

self.addEventListener('install', function(e) {
  console.log('ServiceWorker is Installed');
  e.waitUntil(
    caches.open(dataCacheName).then(function(cache) {
      console.log('Caching the app shell');
      return cache.addAll(CacheTheseFiles);
    })
  );
});





self.addEventListener('activate', function(e) {
  console.log('ServiceWorker is Activated');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== dataCacheName) {
          console.log('ServiceWorker is Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});



self.addEventListener('fetch', function(e) {
  console.log('ServiceWorker is being Fetched', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
