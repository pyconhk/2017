"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/about/coc.html","c3471a646a7027fb622fb6d1ceed4379"],["/about/index.html","122ede02679568189c34f7237aa9db86"],["/about/patron-programme.html","025e4f607d432486c4335f0e768c5865"],["/about/staff.html","f585768060fb0706880e1046e7025527"],["/app.css","1d4636e2018c946400145d1e0b8a57b5"],["/app.css.map","1bd70a8fa117f8daa98783a8005c91c5"],["/cfp/index.html","34f469e3a7197db995798bd7fa310f4d"],["/images/favicon-v2.png","d2bd7896062654c0e7161b88dfdfe57e"],["/images/favicon.ico","531b35364e8e387eaa23307630e7c262"],["/images/page-about-patron-theme.png","1e0df45a8d831efeb1d40258efcf6b12"],["/images/page-cfp-results-theme.jpg","615e979e6d7c45c111b63b15815284be"],["/images/page-sponsor-theme.png","94e2ac0694cfb0324dc10991de34ee7e"],["/images/pycon-keyvisual-v2.png","1ae14355daebe81f4d16fadc92fba5e3"],["/images/pycon-logo-v2.png","8a8b799f20f7b77939a2d08927ff48e0"],["/images/theme-business-day.jpg","13cb3377ba86beed0311a3dd0e998ca8"],["/images/theme-community-day.jpg","3fb5d6a221acc9b5d40188dc02636e6a"],["/index.html","66a2969f43a0127d9e40e79a80bef12e"],["/schedule/index.html","54b68dd8b8dfde63a33402e6982999f5"],["/sponsor/index.html","fc2e50c21178530d573510df4206730a"],["/topics/ai-learn-to-Drive-introduction-to-reinforcement-learning-with-python/index.html","fbe72b22dde6a8522a84a17f0f547633"],["/topics/applying-serverless-architecture-pattern-to-distributed-data-processing/index.html","827cce3c118a0d6eea218f2e34bee030"],["/topics/boosting-command-line-data-manipulation-with-python-and-awk/index.html","3de86bdb20a22c6265091a8be5113ba1"],["/topics/ha-capability-with-document-store-using-mysql-shell-running-python/index.html","4f35bc5c3c633c9bd9c0ac823b98f639"],["/topics/how-i-battle-with-hong-kong-open-data-in-python/index.html","7087dd0c229818737ade2638056a87d5"],["/topics/how-to-approach-a-machine-learning-problem-with-python-youtube-like-count-prediction/index.html","1b91a873c6b97bd6ec027855aec429ae"],["/topics/how-to-reinvent-the-wheel-and-build-the-most-popular-JSON-RPC-library/index.html","b4ee11d222bddb124361e2afbdf72523"],["/topics/machine-learning-on-energy-consumption-prediction/index.html","a9e21b87202baa3705fc724427e537de"],["/topics/matplotlib-2-by-example/index.html","ca18ce72bfa8f8505af1bf9acd74a88e"],["/topics/micropython/index.html","73933f3cc1a3d720869c9c7855dcd553"],["/topics/python-blockchain-application-in-less-than-24hrs/index.html","256e539b1f09ef996815695a2bbd438d"],["/topics/python-for-data-analysis/index.html","288d079a6034a738a21937a161b8826a"],["/topics/recurrent-neural-networks-in-python-keras-and-tensorFlow-for-time-series-analysis/index.html","e8c20595c2b06ceec75ebcf8b21bd792"],["/topics/resurrecting-the-dead-with-deep-learning/index.html","9f4d831a9ad8c2d0125d95428cbcd1a0"],["/topics/ticketing-chatbot/index.html","87768fd074199ee189b1e9d8518af870"],["/topics/using-gradient-boosting-machines-in-python/index.html","d1f95ea87bc6ac6300d685258080cc55"],["/venue/index.html","cd2377fd4184e14ec767777d4cfe6d7e"]],cacheName="sw-precache-v3-HKOSCon-2017-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(i,c){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!c&&s)return s(i,!0);if(a)return a(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var h=n[i]={exports:{}};t[i][0].call(h.exports,function(e){var n=t[i][1][e];return o(n||e)},h,h.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||u.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||u.cache.name,caches.open(t)}function a(e,t,n){var r=i.bind(null,e,t,n);s=s?s.then(r):r()}function i(e,t,n){var o=e.url,a=n.maxAgeSeconds,i=n.maxEntries,c=n.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+i+", max age is "+a),h.getDb(c).then(function(e){return h.setTimestampForUrl(e,o,s)}).then(function(e){return h.expireEntries(e,i,a,s)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function c(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,u=e("./options"),h=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||u.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||u.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&a(e,n,r)})}),r.clone()})},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return o(t).then(function(t){return t.add(e)})},uncache:function(e,t){return o(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||c(e),u.preCacheItems=u.preCacheItems.concat(e)},validatePrecacheInput:c,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){function r(e){return new Promise(function(t,n){var r=indexedDB.open(i+e,c);r.onupgradeneeded=function(){r.result.createObjectStore(s,{keyPath:u}).createIndex(h,h,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e,t,n){return t?new Promise(function(r,o){var a=1e3*t,i=[],c=e.transaction(s,"readwrite"),f=c.objectStore(s);f.index(h).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-a>t.value[h]){var r=t.value[u];i.push(r),f.delete(r),t.continue()}},c.oncomplete=function(){r(i)},c.onabort=o}):Promise.resolve([])}function a(e,t){return t?new Promise(function(n,r){var o=[],a=e.transaction(s,"readwrite"),i=a.objectStore(s),c=i.index(h),f=c.count();c.count().onsuccess=function(){var e=f.result;e>t&&(c.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[u];o.push(a),i.delete(a),e-o.length>t&&r.continue()}})},a.oncomplete=function(){n(o)},a.onabort=r}):Promise.resolve([])}var i="sw-toolbox-",c=1,s="store",u="url",h="timestamp",f={};t.exports={getDb:function(e){return e in f||(f[e]=r(e)),f[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,o){var a=e.transaction(s,"readwrite");a.objectStore(s).put({url:t,timestamp:n}),a.oncomplete=function(){r(e)},a.onabort=function(){o(a.error)}})},expireEntries:function(e,t,n,r){return o(e,n,r).then(function(n){return a(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),i=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=i.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,i.cache.name))},installListener:function(e){var t=i.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(e){return Promise.all(i.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(t){return o.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),a=e("./helpers"),i=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;)new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next();return o},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,i){i=i||{};var c;t instanceof RegExp?c=RegExp:(c=i.origin||self.location.origin,c=c instanceof RegExp?c.source:r(c)),e=e.toLowerCase();var s=new o(e,t,n,i);this.routes.has(c)||this.routes.set(c,new Map);var u=this.routes.get(c);u.has(e)||u.set(e,new Map);var h=u.get(e),f=s.regexp||s.fullUrlRegExp;h.has(f.source)&&a.debug('"'+t+'" resolves to same regex as existing route.'),h.set(f.source,s)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,i(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],a=o&&o.get(e.toLowerCase());if(a){var c=i(a,n);if(c.length>0)return c[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||r.cache,i=Date.now();return o.isResponseFresh(t,a.maxAgeSeconds,i)?t:o.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,i){var c=!1,s=[],u=function(e){s.push(e.toString()),c?i(new Error('Both cache and network failed: "'+s.join('", "')+'"')):c=!0},h=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(h,u),o(e,t,n).then(h,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,i=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var c,s,u=[];if(i){var h=new Promise(function(a){c=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,i=Date.now(),c=t.maxAgeSeconds;o.isResponseFresh(e,c,i)&&a(e)})},1e3*i)});u.push(h)}var f=o.fetchAndCache(e,n).then(function(e){if(c&&clearTimeout(c),a.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return u.push(f),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),i=e("./strategies"),c=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),t.exports={networkOnly:i.networkOnly,networkFirst:i.networkFirst,cacheOnly:i.cacheOnly,cacheFirst:i.cacheFirst,fastest:i.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,a=0,i="",u=t&&t.delimiter||"/";null!=(n=v.exec(e));){var h=n[0],f=n[1],p=n.index;if(i+=e.slice(a,p),a=p+h.length,f)i+=f[1];else{var l=e[a],d=n[2],m=n[3],g=n[4],b=n[5],x=n[6],w=n[7];i&&(r.push(i),i="");var y=null!=d&&null!=l&&l!==d,R="+"===x||"*"===x,E="?"===x||"*"===x,k=n[2]||u,C=g||b;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:E,repeat:R,partial:y,asterisk:!!w,pattern:C?s(C):w?".*":"[^"+c(k)+"]+?"})}}return a<e.length&&(i+=e.substr(a)),i&&r.push(i),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function i(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var i="",c=n||{},s=(r||{}).pretty?o:encodeURIComponent,u=0;u<e.length;u++){var h=e[u];if("string"!=typeof h){var f,p=c[h.name];if(null==p){if(h.optional){h.partial&&(i+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(g(p)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(f=s(p[l]),!t[u].test(f))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===l?h.prefix:h.delimiter)+f}}else{if(f=h.asterisk?a(p):s(p),!t[u].test(f))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+f+'"');i+=h.prefix+f}}else i+=h}return i}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function f(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}function p(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(m(e[o],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",h(n)),t)}function l(e,t,n){return d(r(e,n),t,n)}function d(e,t,n){g(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",i=0;i<e.length;i++){var s=e[i];if("string"==typeof s)a+=c(s);else{var f=c(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+f+p+")*"),a+=p=s.optional?s.partial?f+"("+p+")?":"(?:"+f+"("+p+"))?":f+"("+p+")"}}var l=c(n.delimiter||"/"),d=a.slice(-l.length)===l;return r||(a=(d?a.slice(0,-l.length):a)+"(?:"+l+"(?=$))?"),a+=o?"$":r&&d?"":"(?="+l+"|$)",u(new RegExp("^"+a,h(n)),t)}function m(e,t,n){return g(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?f(e,t):g(e)?p(e,t,n):l(e,t,n)}var g=e("isarray");t.exports=m,t.exports.parse=r,t.exports.compile=function(e,t){return i(r(e,t))},t.exports.tokensToFunction=i,t.exports.tokensToRegExp=d;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/2017/,toolbox.fastest,{});