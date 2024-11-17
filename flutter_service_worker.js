'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1bd341722e3b32e9ed402a114f97b3bc",
".git/config": "00a63f1e44211f197f54d33d0500dbf9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4676c09fc80f55675a863dcd578db7b3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f9ad6c52861a1a4694dcfeffb4f47824",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6d0ddc32fffc142041619e4ba77d52e1",
".git/logs/refs/heads/main": "89b0a448b6ac25c4c49f089381593836",
".git/logs/refs/remotes/origin/HEAD": "eed621eea67098ff0028abc41c3bbccd",
".git/logs/refs/remotes/origin/main": "5ad1c561144a6d0ed38d9b138204c2aa",
".git/logs/refs/remotes/origin/master": "de695f8c18767544dda93815c35f0a63",
".git/objects/01/53ec3ebe2bc679c05aa2a0d31e7abff3f2f615": "6dc29d11daaf48231fd8380bfbd57877",
".git/objects/03/6bff7fe87302f4665e4c40838033a4a822097f": "d0788d7e7afd47c74ef2104f56243d5b",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/21fbee935edc1224858769b6ea606969ecb8fe": "b1947fd2c6ef51a0c3559d633ed44bb1",
".git/objects/1d/0c02385785d468da5f8f2295df1a5991729004": "9a50f2a9f3342e599b13c9316d6bfef9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/248199669968179e755ed245edb2d181aa1e9c": "7e6c36efa3400d0ec4b108ded1a7cc03",
".git/objects/2a/c9334b3a3578a44ff059feb226f371176472d1": "f02e56a3d4c389ad3c843e490de83b49",
".git/objects/2c/97a2f4812b3b3b0ae44ddd9e3e022923a321e6": "e24ce6a257e4975f30171c3438d10d8e",
".git/objects/31/e3cad0b34544dd62dcdb36e553bda8dda40e61": "0d5451ecf392bfbd4563511d4f166ff1",
".git/objects/40/bac48b9d5d108ce205b9c573fa99e69dda50b0": "07c9c7097f7b698ec92343260ad7955e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/8984971a946c8da04a766e511f5e825a9d6d49": "a58f639807e19955ec70aa4d57e4c349",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/54/cc55d339445ba11c131eba5448d8f5bb6f085f": "b5750f724883712dc867b284613af0a3",
".git/objects/57/a28289bf972444ebb30d21588313f1fd645379": "f73f4e0194e752793c542592d4af74c7",
".git/objects/58/5e393535358e89eeb89a52aef74367a2f6d30c": "291e6ddcf963687ec602fafe22fcbc4e",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5e/c0675a736ef7ecdf27737c896b539486a642e0": "b0f22bc0b39e6a2b2aff7d84ad4befe4",
".git/objects/5f/9ce65721361b98b48c5b8c207edffc04144f2f": "121cb7c14ae7437ce3383e9c756e7910",
".git/objects/60/f58e982cd0806872b3c6506f3054ccbe480718": "826d35df265812269f143dd603feced3",
".git/objects/6d/565365c38c877366bbdb8a8accfc9ddd62efb8": "0ed1397a6bab3325dd5d69bcb8f02e90",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/b2955131607396c42e330c8a93a2eb74805a16": "f38d3e1db2ff5f88300777770babb280",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/78/fb6bd3eeb4d68c9e69da11f88304eb11366bf1": "c75aae173116b92f98b1f45a9dd3d4ef",
".git/objects/7b/818484cadd41b6b01f8f90f882e4cb026a17cf": "bde1d13bf87c18418fc01dfc408b1b03",
".git/objects/7d/1357286b52829dcdf9c0dc8298496699724e0c": "32ff019ce9174d0971b604cb68290bdc",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/1c9fa646373f23faa5d5c9c494bab43db61bc0": "3c4a48cd04d1869dea101d9d526e9ce4",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/9e/6af40523146be68875bd38dc7437bee5e3d908": "232c58e84453057cdfc3cf58082d62b2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/af/adcd6c42890b628562d16a8a3c0844885b8dc5": "c94a366c5ab376003dc93ca8996ed0ef",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d0/149f52d346f291cdc976ce777d048975f2b4e6": "51077f218bf46eaff5a576657b098407",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/0c1faa56f09ebfa76112746944f963d1dad43a": "ebd6a0f06aec3c66bac1863c9ba8458c",
".git/objects/dc/6232313fe2f74b8c0c39bcbd7a5dbd885c06a2": "6a484d6cb2e909f3970158aa2d1a75e2",
".git/objects/e0/4ec933aef8388e81c43a0f4751651634e4f668": "a7c840a0210e4d4df37568e6fdb76f7c",
".git/objects/e0/dfa4c4310c9893a2253f5d33a0fdadd2d0b5e9": "d33d5a0c91c8d17bc3b73f7c7b149aa4",
".git/objects/e7/f9e384260e6c684cbd79c987affe4f84372ce1": "43c0252390dd2109284d3926a8a45ae5",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/16b5e70a09bf328b1a1dcd4ecfb1865a9c26ff": "e96245a2902d3b4914bdde0c30a90511",
".git/objects/e9/86efe51fa75746c4e64ef6dbe4f694d36fe9b1": "6aaa39568de4dba1fdd59b7ed6415d40",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/5b19d3763c8d394b0ab2b5a6bd725e4c132d32": "e842e45e981ccdbf51feee38a81b710b",
".git/objects/f1/8607d800383cff0cfc6b38c424b1af34395ebc": "95f33904a71c82cc7cd62bfabfa19fea",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/87985d6af34ca6ab7719205b51b2a9002f5189": "a2c73ffa6c006fb51b83335f79250c75",
".git/objects/f6/30228395e260443f611d385aae7cbc7d75061f": "6b5dae0448bc95bccd11a4fa4c66f330",
".git/objects/fa/79e3780d7d0bbc1172e134f1016cf9091d7c75": "99b80610483638d3a34fb23ab0c5710f",
".git/objects/fd/605a98a089cb8d3789d07672676c52719548b6": "69adb95b3238f6001b7fdfd22af74aac",
".git/refs/heads/main": "2170604ae14c18d7d0bff94fe438d030",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2170604ae14c18d7d0bff94fe438d030",
".git/refs/remotes/origin/master": "2170604ae14c18d7d0bff94fe438d030",
"assets/AssetManifest.bin": "c0b7092f1d179475ff330d8b638e24d6",
"assets/AssetManifest.bin.json": "631ace4d27b0e1ab59f7602085e11ec4",
"assets/AssetManifest.json": "3d7efc0d9e94c6ead0ee6e9258cf85d4",
"assets/assets/bottom1.png": "6b84f28383721d9658f43202fc05df65",
"assets/assets/bottom2.png": "d75870ab4305146f8f4098192422a4d2",
"assets/assets/flutter-background1.jpg": "5039aa828a415bcc98333059cfec3b78",
"assets/assets/flutter-background2.jpg": "79e05c5bc8ebc86a068e45ef72b32996",
"assets/assets/flutter-background3.jpg": "23cf38006990fdd2af20db805e7d94e6",
"assets/assets/flutter-background4.jpg": "378e02334124ce6dd09e4f48f3476d14",
"assets/assets/flutter-image10.jpg": "5a11e56eb75f53c03abc687aca311ac5",
"assets/assets/flutter-image11.jpg": "4c00a58e3a7865c666ec41b1a3f7327f",
"assets/assets/flutter-image12.png": "becf07c09f111d6d7f111b29674f053b",
"assets/assets/flutter-image13.png": "acd15891c417b9bfeade5661b1c2a5ac",
"assets/assets/flutter-image2.png": "614662bccf76569438e58c07db81b413",
"assets/assets/flutter-image3.jpg": "0b017aef61d2f2bf6cdddf9679c57e3d",
"assets/assets/flutter-image6.png": "e61386c123f92eaaecd4df85f738366b",
"assets/assets/flutter-image7.png": "835da6bd6dec3f10988f283df0c80838",
"assets/assets/flutter-image8.jpg": "cc80bdaf7817f7b371b6bbda7879fb95",
"assets/assets/main.png": "bc7af942e007f409ceffe1fd27fda658",
"assets/assets/top1.png": "b080bce9f5b1ea61f79200807d3d154d",
"assets/assets/top2.png": "5ba82c2d5a07482a351172f7b5ebcfb7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bd95903fbab1ac4bf2b743f96d94b615",
"assets/NOTICES": "0ce6217e25de15730838d6d50d1e3935",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7de7c1ecb6607d31b9f649a773d33be3",
"/": "7de7c1ecb6607d31b9f649a773d33be3",
"main.dart.js": "6634dc0da1491a9e8a8f3cfe083acca1",
"manifest.json": "4cecca804c485d92531dc055d9c72c9a",
"version.json": "8bbd11bbbab4d92a72d4ffa5bdcb6416"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
