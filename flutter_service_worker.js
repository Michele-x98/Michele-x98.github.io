'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e6af4538251282cda9d488aa28386db2",
"index.html": "d65f563a7474c5348af0f144b0a6ba8a",
"/": "d65f563a7474c5348af0f144b0a6ba8a",
"main.dart.js": "180495c5390934543f55557ae444a85a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "832d8566d0fa370dbe422e7728b7dedd",
".git/REBASE_HEAD": "fb346499d04a79f30a62cff1b7dd93c7",
".git/ORIG_HEAD": "e17256aab08e1ce127ad819b6df8ea48",
".git/config": "c6aa3741405277786044eccdfbe99c17",
".git/objects/3e/1ca83771c42806d0b8ffa5ac24c89e51904cc3": "20bfb2623418bcf08f4329453a25ce86",
".git/objects/03/bfc6d99c77fdcc6c23110be37aa04369adbced": "515f3f42f81cb5bc98f65de3a0c54060",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3d/377bc57c667007467323764fc3149c8ea01ab5": "69dd4d95169709ea45b2fa3219334077",
".git/objects/0e/7a324e7f4ce267228843a610c42a52f9c7c45f": "2b60d4a50e0f58cbd8aa23e83be8832d",
".git/objects/5a/f1030897f60f866526cc863690ebb7ca6605e1": "dc4832a59a6b60d41a63d23e51171887",
".git/objects/5f/8df8794ae7c2f0158f7994a422439fcf15a01e": "24d535ad58c4e4e2c2ed8c964df86b3d",
".git/objects/9c/54817d9a9c875db9c45eea746977a1a94bcab3": "5120997240b1daeb07679097a5f820e7",
".git/objects/a3/22b2e948ad9e03bfe95cdd2e2e47e086cdd064": "a049843e054a36a01a72480bbcd259be",
".git/objects/bb/2fb70917feeb50020a026c1f20fde2f7bbba75": "5f17aa5ee9941b6074eb39df4790888f",
".git/objects/df/ced5372c6f6a115dda361b6cf0b5a88d36495c": "1281e7c24720d7916a4af3b849ad81ce",
".git/objects/da/b5208a50962c41b7e5d344b97872872d4851a5": "64087789e9240d055ba1248c569d030e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c0/bc35a2d427b56644bf88c5c09dc59a2a095c60": "a0e7d8091bede6019f2be24b70bf6c19",
".git/objects/c0/b69b11233ee6f7d4ce333cd3f64853de7b923c": "4b4484369049469927b23cd2c8bd7b07",
".git/objects/c0/d238764c4d8c41ddcba6b83255dcac18065417": "3583572a40f8607e9f8bd6e155360640",
".git/objects/ee/e646866303e4a652b593f83c9aa7d3d0e69e55": "cbb34513218b4b9ffe8a22b725d9202e",
".git/objects/fd/aa5998e1480992de33fd068c20d643e7a17b2e": "681df908dd678719ade1cd43b204d20e",
".git/objects/fd/99fb2304f8b3175ee9d929970c6bf3a8655fab": "07dd8e8d33ad80c74205b7520206f33a",
".git/objects/ca/db398c381cf848c037dcbf407167cc586c9a49": "230a4268635771a0d5608a6ee8041c31",
".git/objects/e4/10fe562de0286df4e8c08b718433e853957e23": "4d73e65a1f12e99801077e3e26a1bf42",
".git/objects/c8/a09c035ca5ce9b167dfdb3bddc71d6e20f61a3": "1c1a99c70924d35526e6ef4f0bda22a4",
".git/objects/c8/6bd3ff33961796fc75c1167d1665a998471b88": "b655168c77f1a830e4700a60be092971",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/dbb9063d26cd1ceacb3a57cacc6e2f54f43f4d": "680c2eed1fafd327b360c96fad7954ec",
".git/objects/27/e238a1f5e1d60964e3bfc23393b7e9e0ef41b4": "7a285c2c4d41b151f8804aa30af21d97",
".git/objects/7d/fa518e6d1121a0ac0d3d64befe57c796631d69": "9259bd5a80515af1dd1a6ed8b2d99548",
".git/objects/29/fc224203a12e3586868190e8591ea8ba2bd90c": "6d134bb1093aee48066b8350ca26028b",
".git/objects/16/b9dfabe410181a59c694ecb7616256442f1495": "c7c539dc66c4e7764cc439aceeb0cd48",
".git/objects/45/67b72618a66e4c5748742b237c6de402749983": "78a0d47e01a352ff7a897b8b2cf472aa",
".git/objects/80/bf6898d93632e49e80b89cb02cc4d720cf2a8c": "90960cdf072393f76ac63a3bd7cc00b3",
".git/objects/1a/ecd22e75181cbd6cdc6cf413808a24607ad1d9": "a3cc4a0dc9f38a1fb9e2e9fcfe05931f",
".git/objects/7b/d362fd7ebfea913fb558f05bccbb069ee17faf": "29d81864bbfdd35a193921bf7c38201c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/99582d49cd11c450ca393524a117ed1ae99082": "1e80096d11cc4165bf4d1eecf7fd4946",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/75/6b039a44c5a256e265239260b1553258b7d3f1": "d21ce21f27f18382c3e84644679b8b89",
".git/objects/72/c09ff2209d32649f7a3776735f86ff71d81c37": "542e527f77e2bccfe3c6db7612a339c2",
".git/objects/43/05f5569cdd2fe30603827b633ce409bc14a175": "6d5157a89d79dd2614e80dc299716a6c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/f086fce12939b0f6a8eb02e709be685fab356d": "9a032f13ff4ca56ebc6149293afc11aa",
".git/objects/5c/e2534f113fd788d743415bd8d3921b15659a30": "eeff34d4ed1271deae44109c2ad9f22b",
".git/objects/5c/ee18c5a92052c1b725a93f01782b5bd457423f": "90b59f2d692e187b2bbf3a856d63f9ec",
".git/objects/31/234fbf144f38b663c108de162eb0c82c2c3fb0": "c8a0199b7c0a5af4ba27c4409080fad5",
".git/objects/91/aeb0d0a47b144381770bf10b592a9cf2a8a7af": "e3b7ecaea2032cab8102b6c91ed2b19c",
".git/objects/65/1957ad1146a1f557ab62439a57f878596e9c3d": "d0c8c4704be56ced279e5ae544b91598",
".git/objects/62/77ea4abe236565c621d84f8a052dbdd2129d6f": "bd6740528e8411e76a85e15d0d86f72e",
".git/objects/62/98ebc3acab7024a3ecabb537bac967dafb8072": "f00c41e9b079d685a539414375f27a0b",
".git/objects/96/6cecac0879b39f2d2e20a012ea37a92b8c151f": "8575682ce5d44d7105b2f80c676a0077",
".git/objects/98/a6809a67a4fef8242f4dd493faa4d3f9c57206": "87c6c5e5067cd2c979ef74c7baa6e541",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/37/89b42db04bfd94276f475b2a72145335d2b342": "f1d1a21b64eb00e9727c4ac0d5f2804c",
".git/objects/37/edd1900ee23949662c4a0bc2611daa0e0b83d6": "3877f2ae22e6dc5ce5f3cd56c9d3b496",
".git/objects/08/625b831486180fa7025976303ddc2689190abc": "e2850c60b04d6f70b1a53e579a6a92f6",
".git/objects/0f/e43418fe0ba9baa518c1c5c5d0915b547be0f7": "c0102a859ab271c728ad408c73ac5f31",
".git/objects/d3/2f09957b991c28476e69e9ca94c355e1becd3b": "c3f1cba2e91d92dcf74ae005345ed36c",
".git/objects/d4/feb5269fe29d40849ca52f6580101172744a38": "08f62444f6b84bf4dd05e7cc4faee0b1",
".git/objects/d4/ef71670fa20e4c304ad011a2cb42cb069d35b0": "1d6816a9dafcb7e5cce6545406ed2a48",
".git/objects/b8/ce6f0bba11782d8fca4dcc7721a1fb0a4bf170": "9296cc381bc07edfe505c214db87bc63",
".git/objects/dc/1a34d8d484fb96d5037185b8b88f89c3e6aacc": "cf6e62f6f435a0db4d05a0b51e3424fb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/5a3c91bd2d775cc4e8802254a0c8ca403111db": "3b4b7056fb12279eb8795af017d24fe4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/b67fe757511811ebd89eb75bae95d535ddacfb": "62e755f521997d2b47e464aa1336528d",
".git/objects/f0/9c68bd3b5360ef1545860826ae8bac9d126d9e": "fc2a435aace7a939fdce75ef099e9e80",
".git/objects/f7/afd29cbb2d0c870c79d5acae0c9ecb687d1008": "1955ef28556eec84a51c3af85228d72c",
".git/objects/f7/c189292a202f4799c1cfcc949adb8594be58d6": "8bd5d6f5b3b3fda53ede8f9a8095da8f",
".git/objects/e8/454ab1dc8d24b3ce3c6585472c98e777e23369": "121fb9cd79da2409d263fe12282f8fa5",
".git/objects/f8/3529d5b939af35ca6566e4103c9ec02747ad63": "b988197102585977c29d2cd4c87dd076",
".git/objects/f8/c7fcef494199065a25a0a672336980da6a162a": "745233b67ab99863392fa4d4dd82d0e2",
".git/objects/46/41d76141f883d19fca087b420a28ed69bb1801": "6fc0535aa014deed06ef211ab14360a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/46b362a782e7c0bcb860bde9070a845c415404": "bd52606e4cde985e081f4eabdd378b1d",
".git/objects/1b/a14bdf5047690c2bdddbe4b2e1909c6af303f5": "db99153d803f2177db6630d11808261d",
".git/objects/1e/9fb7e402208f2996f7d0c908dd3ece9df741e2": "6f4c0a4d07f23ae2866f3e71b734711a",
".git/objects/4a/8034089f21a41d7cac13614caf00d50f54fde7": "c0f892a59c56fee88229f35749003245",
".git/objects/15/bc4589ca56991344c6d36569a6dd36bb03a423": "e190b71a8d22153c7c91e5bdbf13c4b4",
".git/objects/12/23ba0dcba4c6fccd00ba9c5b35365820cfe940": "f191e29f0e5c7aa78a0ffe0da5f4deaf",
".git/objects/71/c440bfb652e12ded752bca1b9830c1212bcae2": "9a0da242f12c0feb23ce3c6649f8b12c",
".git/objects/1c/2d31ecc303ca729d4d8d26e061886174d5a617": "1a33fb95caa86abf691823f00c1a9c1a",
".git/objects/2e/a25b93c7174c6e09a82876e10435a70ce00a33": "da206e85fa95aab794843a2a5236004c",
".git/objects/47/820b0ea3e7f3cf23803f1a3c017ca35ccf59c9": "6b0c91d3045d57ef52d6235ff9bd30ec",
".git/objects/22/2e13a9d5335e2cc8ad7af590e2ae87f80b93b3": "125a252c7393a52a0c18a58cd15c3421",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "794c018018c91022f9b324306239b798",
".git/logs/refs/heads/main": "dabb2006d942120730381a187ad04bcb",
".git/logs/refs/remotes/origin/main": "9a5d93e898ee7b41bb7560ee72c18184",
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
".git/refs/heads/main": "f29f072a3e021e47279c10355a57f316",
".git/refs/remotes/origin/main": "f29f072a3e021e47279c10355a57f316",
".git/index": "afb1c0adc64eb4e329f22677511de8f0",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/FETCH_HEAD": "f368b6d42fa2891ed93158593497e651",
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
