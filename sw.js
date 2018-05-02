    if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
var CACHE_NAME = "my_cache";
   var urlsToCache = [
    '/index.html',
    '/css/style.css',
    '/js/script.js'
   ];

self.addEventListener('install', function(event) {

event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
             console.log('Opendhe : ',cache);
            return cache.addAll(urlsToCache);
      })
    );
});