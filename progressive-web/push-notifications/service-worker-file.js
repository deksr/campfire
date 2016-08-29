console.log('Started', self);

self.addEventListener('install', function(event) {
  self.skipWaiting();//When skipWaiting() is called (as in the code above) the service worker will skip the waiting state and immediately activate.


  console.log('Installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});

self.addEventListener('push', function(event) {
  console.log('Push message received', event);
  // TODO
});