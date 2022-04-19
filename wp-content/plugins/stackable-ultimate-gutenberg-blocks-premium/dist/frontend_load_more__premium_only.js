var frontend_load_more__premium_only;(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);var e="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==e&&e,r="URLSearchParams"in e,o="Symbol"in e&&"iterator"in Symbol,n="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in e,i="ArrayBuffer"in e;if(i)var a=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(t){return t&&a.indexOf(Object.prototype.toString.call(t))>-1};function d(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function h(t){return"string"!=typeof t&&(t=String(t)),t}function c(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return o&&(e[Symbol.iterator]=function(){return e}),e}function l(t){this.map={},t instanceof l?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function y(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function p(t){var e=new FileReader,r=y(e);return e.readAsArrayBuffer(t),r}function b(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:n&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():i&&n&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=b(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):i&&(ArrayBuffer.prototype.isPrototypeOf(t)||u(t))?this._bodyArrayBuffer=b(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(p)}),this.text=function(){var t,e,r,o=f(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,r=y(e=new FileReader),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}l.prototype.append=function(t,e){t=d(t),e=h(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[d(t)]},l.prototype.get=function(t){return t=d(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(d(t))},l.prototype.set=function(t,e){this.map[d(t)]=h(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),c(t)},l.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),c(t)},l.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),c(t)},o&&(l.prototype[Symbol.iterator]=l.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(t,e){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,n=(e=e||{}).body;if(t instanceof _){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(o=(r=e.method||this.method||"GET").toUpperCase(),w.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var s=/([?&])_=[^&]*/;s.test(this.url)?this.url=this.url.replace(s,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function v(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function g(t,e){if(!(this instanceof g))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},m.call(_.prototype),m.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var T=[301,302,303,307,308];g.redirect=function(t,e){if(-1===T.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})};var A,E=e.DOMException;try{new E}catch(t){(E=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function B(t,r){return new Promise((function(o,s){var a=new _(t,r);if(a.signal&&a.signal.aborted)return s(new E("Aborted","AbortError"));var u=new XMLHttpRequest;function d(){u.abort()}u.onload=function(){var t,e,r={status:u.status,statusText:u.statusText,headers:(t=u.getAllResponseHeaders()||"",e=new l,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};r.url="responseURL"in u?u.responseURL:r.headers.get("X-Request-URL");var n="response"in u?u.response:u.responseText;setTimeout((function(){o(new g(n,r))}),0)},u.onerror=function(){setTimeout((function(){s(new TypeError("Network request failed"))}),0)},u.ontimeout=function(){setTimeout((function(){s(new TypeError("Network request failed"))}),0)},u.onabort=function(){setTimeout((function(){s(new E("Aborted","AbortError"))}),0)},u.open(a.method,function(t){try{return""===t&&e.location.href?e.location.href:t}catch(e){return t}}(a.url),!0),"include"===a.credentials?u.withCredentials=!0:"omit"===a.credentials&&(u.withCredentials=!1),"responseType"in u&&(n?u.responseType="blob":i&&a.headers.get("Content-Type")&&-1!==a.headers.get("Content-Type").indexOf("application/octet-stream")&&(u.responseType="arraybuffer")),!r||"object"!=typeof r.headers||r.headers instanceof l?a.headers.forEach((function(t,e){u.setRequestHeader(e,t)})):Object.getOwnPropertyNames(r.headers).forEach((function(t){u.setRequestHeader(t,h(r.headers[t]))})),a.signal&&(a.signal.addEventListener("abort",d),u.onreadystatechange=function(){4===u.readyState&&a.signal.removeEventListener("abort",d)}),u.send(void 0===a._bodyInit?null:a._bodyInit)}))}B.polyfill=!0,e.fetch||(e.fetch=B,e.Headers=l,e.Request=_,e.Response=g),window.stackableLoadMore=new class{init(){const t=document.querySelectorAll(".stk-block-load-more__button .stk-button");[].forEach.call(t,(t=>{t.addEventListener("click",(t=>{const e=t.target,r=e.closest("[data-query-id]");if(!r)return null;const o=r.getAttribute("data-query-id"),n=r.getAttribute("data-load-items"),s=(parseInt(e.getAttribute("data-page"),10)||1)+1;e.closest(".stk-block-load-more__button").classList.add(".is-busy"),function(t=""){if(window.wp&&"function"==typeof window.wp.apiRequest)return window.wp.apiRequest({path:t}).then(((t,e,r)=>[t,parseInt(r.getResponseHeader("X-STK-Total_Posts"),10)]));let e=null;return window.fetch(window.stackable.restUrl+t).then((t=>(e=t.headers.get("X-STK-Total_Posts",10),t.json()))).then((t=>[t,e]))}(`stackable/v3/load-more?stkQueryId=${o}&page=${s}&num=${n}`).then((([t,r])=>{const o=e.closest(".stk-block-posts").querySelector(".stk-block-posts__items"),n=document.createElement("div");for(n.innerHTML=t;n.querySelector(".stk-block-posts__item");){const t=n.querySelector(".stk-block-posts__item");t.classList.add("stk-block-posts__item-hide"),o.insertBefore(t,n.querySelector(".stk-block-posts__item:last-of-type").nextSibling),setTimeout((()=>{t.classList.remove("stk-block-posts__item-hide")}),10)}e.setAttribute("data-page",s),o.querySelectorAll(".stk-block-posts__item").length===parseInt(r)&&e.closest(".stk-block-load-more").remove(),e&&e.closest(".stk-block-load-more__button").classList.remove(".is-busy")}))}))}))}},A=window.stackableLoadMore.init,"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",A):A()),frontend_load_more__premium_only=t})();