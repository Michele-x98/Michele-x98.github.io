'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e6af4538251282cda9d488aa28386db2",
"index.html": "f984fa9a39c956d1f522f7b31cc57c40",
"/": "f984fa9a39c956d1f522f7b31cc57c40",
"main.dart.js": "bb7001858ee221d5523a9a3a5f314a94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "832d8566d0fa370dbe422e7728b7dedd",
".git/config": "62ec4158a71382df8d6fa55677ecef66",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/377bc57c667007467323764fc3149c8ea01ab5": "69dd4d95169709ea45b2fa3219334077",
".git/objects/94/bf929561091841a115992342d31ea597416637": "1af1bae406f0c8c7730a7c6993f9d6c7",
".git/objects/a3/22b2e948ad9e03bfe95cdd2e2e47e086cdd064": "a049843e054a36a01a72480bbcd259be",
".git/objects/bb/2fb70917feeb50020a026c1f20fde2f7bbba75": "5f17aa5ee9941b6074eb39df4790888f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ca/db398c381cf848c037dcbf407167cc586c9a49": "230a4268635771a0d5608a6ee8041c31",
".git/objects/e4/10fe562de0286df4e8c08b718433e853957e23": "4d73e65a1f12e99801077e3e26a1bf42",
".git/objects/c8/a09c035ca5ce9b167dfdb3bddc71d6e20f61a3": "1c1a99c70924d35526e6ef4f0bda22a4",
".git/objects/ed/2537cde7e66a8ad38681146c80b81683dc3ee0": "ff406de16aa31172abeaa8113c06690e",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/16/b9dfabe410181a59c694ecb7616256442f1495": "c7c539dc66c4e7764cc439aceeb0cd48",
".git/objects/1a/ecd22e75181cbd6cdc6cf413808a24607ad1d9": "a3cc4a0dc9f38a1fb9e2e9fcfe05931f",
".git/objects/7b/d362fd7ebfea913fb558f05bccbb069ee17faf": "29d81864bbfdd35a193921bf7c38201c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/75/6b039a44c5a256e265239260b1553258b7d3f1": "d21ce21f27f18382c3e84644679b8b89",
".git/objects/43/ef0264f4bfb05cd74af2161bef2e6ef3745005": "5b3c3beea4b9c75b0b578e087f3834fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/f086fce12939b0f6a8eb02e709be685fab356d": "9a032f13ff4ca56ebc6149293afc11aa",
".git/objects/5c/e2534f113fd788d743415bd8d3921b15659a30": "eeff34d4ed1271deae44109c2ad9f22b",
".git/objects/91/aeb0d0a47b144381770bf10b592a9cf2a8a7af": "e3b7ecaea2032cab8102b6c91ed2b19c",
".git/objects/62/98ebc3acab7024a3ecabb537bac967dafb8072": "f00c41e9b079d685a539414375f27a0b",
".git/objects/98/a6809a67a4fef8242f4dd493faa4d3f9c57206": "87c6c5e5067cd2c979ef74c7baa6e541",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/37/89b42db04bfd94276f475b2a72145335d2b342": "f1d1a21b64eb00e9727c4ac0d5f2804c",
".git/objects/37/edd1900ee23949662c4a0bc2611daa0e0b83d6": "3877f2ae22e6dc5ce5f3cd56c9d3b496",
".git/objects/0f/e43418fe0ba9baa518c1c5c5d0915b547be0f7": "c0102a859ab271c728ad408c73ac5f31",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/d4/ef71670fa20e4c304ad011a2cb42cb069d35b0": "1d6816a9dafcb7e5cce6545406ed2a48",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f0/9c68bd3b5360ef1545860826ae8bac9d126d9e": "fc2a435aace7a939fdce75ef099e9e80",
".git/objects/f7/c189292a202f4799c1cfcc949adb8594be58d6": "8bd5d6f5b3b3fda53ede8f9a8095da8f",
".git/objects/f8/c7fcef494199065a25a0a672336980da6a162a": "745233b67ab99863392fa4d4dd82d0e2",
".git/objects/e0/889a0df7088d246921ca7c11fa909540d51a1f": "5107215735a265e53af306139412f93e",
".git/objects/46/41d76141f883d19fca087b420a28ed69bb1801": "6fc0535aa014deed06ef211ab14360a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1fddaa56769e71aa8e3927116a423c66",
".git/logs/refs/heads/main": "c33d213cf2f21707cb2b4ba05c7ed056",
".git/logs/refs/remotes/origin/main": "2b3a1a056fdb4878457d6c18840b40f8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "22b1912b8e170d91e6cc95e8bddb3b60",
".git/refs/remotes/origin/main": "22b1912b8e170d91e6cc95e8bddb3b60",
".git/index": "de889e669315522374a392e61b11cf2a",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "a936b690e26c0d809590c5fcb93cc6f4",
"assets/NOTICES": "6419769848c085a5f87415d18281db22",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "cc90f9ea1bf926d9d8ee1fe568a63d99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_widget_from_html_core/test/images/logo.png": "57838d52c318faff743130c3fcfae0c6",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/me.jpeg": "dc3d8dd38eaed00e8b975664d10dec72",
"assets/assets/develop.png": "bf07fef3f060d4324c5d2fcc8eda26d2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
