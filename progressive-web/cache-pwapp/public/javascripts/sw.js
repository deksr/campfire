console.log("hi from sw.js");

// The files we want to cache
var CACHE_NAME = 'devs-site-cache-v1-yoho';
var urlsToCache = [
  '/',
  '/stylesheets/style.css',
  '/javascripts/rough.js'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});



