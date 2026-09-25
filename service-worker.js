/* Service Worker di Baratto.
   Obiettivo: rendere l'app installabile e permettere l'avvio (guscio dell'app)
   anche offline o con connessione instabile. I dati (inventari, chat, scambi)
   restano gestiti da Firebase e richiedono comunque una connessione. */

var CACHE_VERSION = "baratto-v1";
var APP_SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      /* cache.addAll fallirebbe (e annullerebbe l'intera installazione) se anche un solo
         file non fosse raggiungibile: mettiamo ogni file in cache singolarmente cosi'
         un problema isolato non impedisce all'app di avere comunque una cache offline */
      return Promise.all(APP_SHELL.map(function (url) {
        return cache.add(url).catch(function (err) {
          console.warn("Service worker: impossibile mettere in cache " + url, err);
        });
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE_VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* strategia:
   - navigazioni (apertura app): network-first, con fallback su index.html in cache (per funzionare offline)
   - file dello "shell" (stessa origine: html/css/js/icone/manifest): cache-first, poi rete
   - richieste verso Firebase (auth/database) e altre API: mai intercettate, sempre in rete */
self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);
  var isFirebase = /firebaseio\.com|firebasedatabase\.app|googleapis\.com|gstatic\.com\/firebasejs/.test(url.hostname + url.pathname);
  if (isFirebase) return; /* lascia passare: dati live, mai dalla cache */

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).catch(function () {
        return caches.match("./index.html");
      })
    );
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then(function (cached) {
        var network = fetch(req).then(function (resp) {
          if (resp && resp.ok) {
            var copy = resp.clone();
            caches.open(CACHE_VERSION).then(function (cache) { cache.put(req, copy); });
          }
          return resp;
        }).catch(function () { return cached; });
        return cached || network;
      })
    );
  }
  /* risorse esterne (font Google, script Firebase gia' esclusi sopra): passano dalla rete normale */
});
