

var dataCacheName = 'json-basic-serviceworker-v1';

var CacheTheseFiles = [
  '/',
  '/index.html',
  'ajax-files.js'
];


self.addEventListener('install', function(event) {
  console.log('[install] Kicking off service worker registration!');

  event.waitUntil(
    caches.open(dataCacheName)
      .then(function(cache) {
        return fetch('json-data.json').then(function(response) {
          return response.json();
        }).then(function(files) {
          // below code brings in the data from the json files
          console.log('[install] Adding files from JSON file: ', files.employees);
          return cache.addAll(files.employees);
        });
      })
      .then(function() {
        console.log(
          '[install] All required resources have been cached;',
          'the Service Worker was successfully installed!'
        );

        return self.skipWaiting();
      })
  );
});

// e.waitUntil(
//     caches.open(dataCacheName).then(function(cache) {
//       console.log('Caching the app shell');
//       return cache.addAll(filesToCache);
//     })
//   );

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return the response from the cached version
        if (response) {
          console.log(
            '[fetch] Returning from Service Worker cache: ',
            event.request.url
          );
          return response;
        }

        // Not in cache - return the result from the live server
        // `fetch` is essentially a "fallback"
        console.log('[fetch] Returning from server: ', event.request.url);
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  // Message to simply show the lifecycle flow
  console.log('[activate] Activating service worker!');

  // Claim the service work for this client, forcing `controllerchange` event
  console.log('[activate] Claiming this service worker!');
  event.waitUntil(self.clients.claim());
});



// var dataCacheName = 'json-basic-serviceworker-v1';

// var CacheTheseFiles = [
//   '/',
//   '/index.html',
//   'ajax-files.js'
// ];

// self.addEventListener('install', function(e) {
//   console.log('ServiceWorker is Installed');
//   e.waitUntil(
//     caches.open(dataCacheName).then(function(cache) {
//       console.log('Caching the app shell');
//       return cache.addAll(CacheTheseFiles);
//     })
//   );
// });





// self.addEventListener('activate', function(e) {
//   console.log('ServiceWorker is Activated');
//   e.waitUntil(
//     caches.keys().then(function(keyList) {
//       return Promise.all(keyList.map(function(key) {
//         if (key !== dataCacheName) {
//           console.log('ServiceWorker is Removing old cache', key);
//           return caches.delete(key);
//         }
//       }));
//     })
//   );
// });



// self.addEventListener('fetch', function(e) {
//   console.log('ServiceWorker is being Fetched', e.request.url);
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);
//     })
//   );
// });
