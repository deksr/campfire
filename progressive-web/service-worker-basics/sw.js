console.log("this is a sw.js");

// If you want to import any external script in the Service Worker, you can do it using importScripts()
// used for older browser that doesnt support this feature
// importScripts('js/cache-polyfill.js');


// cache files can be wriiten like this
// var CACHE_FILES = [
//     '/',
//     'images/background.jpeg',
//     'js/app.js',
//     'css/styles.css',
//     'https://fonts.googleapis.com/css?family=Roboto:100'
// ];



var CACHE_VERSION = 'cache-data-v1';
var CACHE_FILES = [
  '/',
  'style.css'
];



self.addEventListener('install', function(event){
	console.log(event);
	// first open the cacheversion, then add all the caches to the browser and after all that install
	event.waitUntil(
    caches.open(CACHE_VERSION)
    .then(function (cache) {
      console.log('Opened cache');
      return cache.addAll(CACHE_FILES);
    })
  );
});




self.addEventListener('fetch', function(event){
  console.log("this is the url" + event.request.url);
  // First we open the cache and match the request url we are planning to send from the browser with the ones present in the cache. If they match, we return the data from the cache. If the request doesn’t match, we redirect the request to the server.
  // When the data is received successfully from the server, we return that data.
  // Then we open the cache and save that data here using cache.put() so that it can be accessed directly from the cache in following attempts.

  event.respondWith(
    caches.match(event.request).then(function(res){
      if(res){
        return res;
      }
      requestBackend(event);
    })
  )
  // return something for each interception
});

function requestBackend(event){
	// always clone the request you are sending. 
  var url = event.request.clone();
  return fetch(url).then(function(res){
  //if the requested url has a reponse or does exisit then remember that url and put it in a cache. if not a valid response send the error
	  if(!res || res.status !== 200 || res.type !== 'basic'){
	    return res;
	  }

    var response = res.clone();

	  caches.open(CACHE_VERSION).then(function(cache){
	    cache.put(event.request, response);
	  });

    return res;
  })
}



// activate will check to see if there are any changes to the service worker file. if so then it will keep a copy of a new service worker in the waiting list of the browser. Once the page is closed the new service worker will take effect.

self.addEventListener('activate', function(event){
  console.log(event);
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(key, i){
        if(key !== CACHE_VERSION){
          return caches.delete(keys[i]);
        }
      }))
    })
  )
});