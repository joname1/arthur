"use strict";var precacheConfig=[["./index.html","623e1ac7f465524531cd3bfd591d5190"],["./static/css/main.653da357.css","653da3570c09d7638cb34e05e5fa0f0b"],["./static/media/acorn.222268ea.mjs","222268ead405ea3b1e0c5a78704d6470"],["./static/media/banner.8b9be929.jpg","8b9be9291199ff0892911a2717e72af6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){e=new URL(e);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){e=new URL(e);return r&&e.pathname.match(r)||(e.search+=(e.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),e.toString()},isPathWhitelisted=function(e,t){var n;return 0===e.length||(n=new URL(t).pathname,e.some(function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,n){e=new URL(e);return e.hash="",e.search=e.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],e=e[1],t=new URL(t,self.location),e=createCacheKey(t,hashParamName,e,/\.\w{8}\./);return[t.toString(),e]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){var e;if(!n.has(t))return e=new Request(t,{credentials:"same-origin"}),fetch(e).then(function(e){if(e.ok)return cleanResponse(e).then(function(e){return r.put(t,e)});throw new Error("Request for "+t+" returned a response with status "+e.status)})}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){var n,e,r;"GET"===t.request.method&&(n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html",(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n)),r="./index.html",!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e)&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))});