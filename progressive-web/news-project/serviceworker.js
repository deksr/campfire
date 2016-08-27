var dataCacheName = 'breaking-news-v2';

var cacheName = 'breaking-news-v1';
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



self.addEventListener('fetch', function(e) {
  console.log('ServiceWorker is being Fetched', e.request.url);
  var url = new URL(e.request.url);

  if (url.origin == location.origin && url.pathname == '/'){
    e.respondWith(caches.match('/index.html'))
    console.log("kaskaskashdkjshdkajhsdkahsdkahs")
    return;
  }

  // e.respondWith(
  //   caches.match(e.request).then(function(response) {
  //     return response || fetch(e.request);
  //   })
  // );

  e.respondWith(
      fetch(e.request)
        .then(function(response) {
          return caches.open(dataCacheName).then(function(cache) {
            cache.put(e.request.url, response.clone());
            console.log('ServiceWorker Fetched & Cached the Data' + response);
            return response;
          });
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
  // debugger;

  var dataUrl = 'secret key';
  if (e.request.url.indexOf(dataUrl) === 0) {
    // Put data handler code here
  } else {
   e.respondWith(
      fetch(e.request)
        .then(function(response) {
          return caches.open(dataCacheName).then(function(cache) {
            cache.put(e.request.url, response.clone());
            console.log('ServiceWorker Fetched & Cached the Data');
            return response;
          });
        })
    );
  }
});



