var dataCacheName = 'breaking-news-cache-v1';

// var cacheName = 'breaking-news-cachev1';
var filesToCache = [
  '/',
  '/index.html',
  '/styles/style.css',
  '/scripts/app.js'
];

self.addEventListener('install', function(e) {
  console.log('ServiceWorker is Installed');
  e.waitUntil(
    caches.open(dataCacheName).then(function(cache) {
      console.log('Caching the app shell');
      return cache.addAll(filesToCache);
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
    var dataUrl = 'secret-key';
    if (e.request.url.indexOf(dataUrl) === 0) {
    // Put data handler code here
    console.log("data-handler code is runing");
      if("indexedDB" in window) { 

      }


    }else {
      e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
      );
    } 
});








