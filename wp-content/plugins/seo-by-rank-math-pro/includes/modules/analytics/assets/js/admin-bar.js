!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=361)}({1:function(e,t){e.exports=wp.i18n},10:function(e,t){e.exports=wp.hooks},13:function(e,t){e.exports=wp.apiFetch},18:function(e,t,n){"use strict";var r=n(7),a=n.n(r);t.a=function(e){var t=e.className,n=e.children,r=a()("rank-math-tooltip",t);return wp.element.createElement("span",{className:r},wp.element.createElement("em",{className:"dashicons-before dashicons-editor-help"}),wp.element.createElement("span",null,n))}},20:function(e,t){e.exports=jQuery},27:function(e,t){e.exports=wp.htmlEntities},28:function(e,t,n){"use strict";var r=n(3),a=n(7),o=n.n(a),c=n(6);t.a=function(e){var t=e.total,n=void 0===t?0:t,a=e.difference,i=void 0===a?0:a,u=e.revert,s=void 0!==u&&u;n=Object(r.isUndefined)(n)?0:n,i=Object(r.isUndefined)(i)?0:i,s=!Object(r.isUndefined)(s)&&s;var d=Math.abs(i)!==i,l=o()("rank-math-item-difference",{up:!s&&!d&&i>0||s&&d,down:!s&&d||s&&!d&&i>0});return wp.element.createElement("div",{className:"rank-math-item-numbers"},wp.element.createElement("strong",{className:"text-large",title:Object(r.round)(n,2)},Object(c.m)(n)),wp.element.createElement("span",{className:l,title:Object(r.round)(i,2)},Object(c.m)(i)))}},3:function(e,t){e.exports=lodash},34:function(e,t){e.exports=wp.date},361:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(1),o=n(4),c=n(10),i=n(52),u=n(53),s=n(28);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}Object(c.addFilter)("rank_math_is_pro","rank-math-pro",(function(){return!0})),Object(c.addAction)("rank-math-analytics-stats","rank-math-pro",(function(e){if(Object(u.a)(),rankMath.isAnalyticsConnected){var t=Object(r.get)(e,"pageviews",0),n=wp.element.createElement(React.Fragment,null,wp.element.createElement("h3",null,Object(a.__)("Search Traffic","rank-math-pro"),wp.element.createElement("span",{className:"rank-math-tooltip"},wp.element.createElement("em",{className:"dashicons-before dashicons-editor-help"}),wp.element.createElement("span",null,Object(a.__)("This is the number of pageviews carried out by visitors from Google.","rank-math-pro")))),wp.element.createElement("div",{className:"score"},wp.element.createElement(s.a,t)));Object(o.render)(n,document.getElementById("rank-math-analytics-site-traffic"))}Object(o.render)(wp.element.createElement(i.a,d({},e,{isAdminBar:!0})),document.getElementById("rank-math-analytics-stats-pagespeed"))})),Object(c.addFilter)("rank-math-analytics-stats-index-verdict","rank-math-pro",(function(e,t){if(Object(r.isEmpty)(t.indexStatus))return"";var n=Object(r.lowerCase)(t.indexStatus.index_verdict),o="indexing_state verdict indexing allowed "+n;return wp.element.createElement("div",{className:"rank-math-item index-status"},wp.element.createElement("h3",null,Object(a.__)("Index Status","rank-math"),wp.element.createElement("span",{className:"rank-math-tooltip"},wp.element.createElement("em",{className:"dashicons-before dashicons-editor-help"}),wp.element.createElement("span",null,Object(a.__)("URL Inspection Status","rank-math")))),wp.element.createElement("div",{className:"verdict"},wp.element.createElement("i",{className:o}),wp.element.createElement("span",null,n)))}))},4:function(e,t){e.exports=wp.element},5:function(e,t){e.exports=wp.data},52:function(e,t,n){"use strict";var r=n(3),a=n(7),o=n.n(a),c=n(1),i=n(13),u=n.n(i),s=n(4),d=n(5),l=n(9),p=n(34),f=n(18);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=function(e){return Object(r.inRange)(e,0,3.81)?"interactive-good":Object(r.inRange)(e,3.81,7.31)?"interactive-fair":"interactive-bad"},g=function(e){return e>=90?"score-good":Object(r.inRange)(e,50,90)?"score-fair":"score-bad"};t.a=Object(d.withSelect)((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e("rank-math-pro-analytics").getPageSpeed(t.id,t))}))((function(e){var t=e.id,n=e.pagespeed_refreshed,a=e.object_id,i=e.desktop_pagescore,m=e.desktop_interactive,b=e.mobile_pagescore,h=e.mobile_interactive;m=Object(r.isUndefined)(m)?0:m,h=Object(r.isUndefined)(h)?0:h;var w=y(Object(s.useState)(!1),2),v=w[0],j=w[1],k=o()("button button-link button-small",{loading:v}),P=new Date,S=P.getFullYear()+"-"+parseInt(P.getMonth()+1)+"-"+P.getDate(),_=null===n?S:n.split(" ")[0];return v&&(i=0,m=0,b=0,h=0),Object(s.useEffect)((function(){j(Object(r.isUndefined)(e.isAdminBar)&&(null===n||"0000-00-00 00:00:00"===n))}),[n]),wp.element.createElement("div",{className:"rank-math-box rank-math-pagespeed-box"},wp.element.createElement("div",{className:"rank-math-pagespeed-header"},wp.element.createElement("h3",null,Object(c.__)("PageSpeed","rank-math-pro"),wp.element.createElement(f.a,null,Object(c.__)("Google PageSpeed score for desktop and mobile.","rank-math-pro"))),wp.element.createElement("span",null,null!==n&&"0000-00-00 00:00:00"!==n?Object(p.dateI18n)(rankMath.dateFormat,_):""),wp.element.createElement(l.Button,{icon:"image-rotate",iconSize:"16",size:"12",className:k,title:Object(c.__)("Refresh","rank-math-pro"),onClick:function(){j(!0),u()({method:"POST",path:"rankmath/v1/an/getPagespeed/",data:{id:t,objectID:a,force:!0}}).then((function(e){Object(d.dispatch)("rank-math-pro-analytics").updatePageSpeed(e),j(!1)}))}})),wp.element.createElement("div",{className:"grid"},wp.element.createElement("div",{className:"col pagespeed-desktop"},wp.element.createElement("i",{className:"rm-icon rm-icon-desktop"}),wp.element.createElement("strong",{className:"pagespeed "+O(m)},m+" s"),wp.element.createElement("small",{className:"pagescore "+g(i)},i)),wp.element.createElement("div",{className:"col pagespeed-mobile"},wp.element.createElement("i",{className:"rm-icon rm-icon-mobile"}),wp.element.createElement("strong",{className:"pagespeed "+O(h)},h+" s"),wp.element.createElement("small",{className:"pagescore "+g(b)},b))))}))},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return ie}));var r={};n.r(r),n.d(r,"updateTrackedKeywordsOverview",(function(){return f})),n.d(r,"updateTrackedKeywords",(function(){return m})),n.d(r,"updateTrackedKeywordsRows",(function(){return b})),n.d(r,"updateTrackedKeywordSummary",(function(){return y})),n.d(r,"updateAutoAddFK",(function(){return h})),n.d(r,"updateGraphKeywords",(function(){return O})),n.d(r,"updatePageSpeed",(function(){return g})),n.d(r,"updateSelectedPostType",(function(){return w})),n.d(r,"updatePostsRows",(function(){return k})),n.d(r,"updateIndexingFilter",(function(){return P})),n.d(r,"updateIndexingStats",(function(){return S}));var a={};n.r(a),n.d(a,"appData",(function(){return A})),n.d(a,"appUi",(function(){return F}));var o={};n.r(o),n.d(o,"getAppData",(function(){return I})),n.d(o,"getTrackedKeywordsOverview",(function(){return M})),n.d(o,"getTrackedKeywords",(function(){return G})),n.d(o,"getTrackedKeywordsAll",(function(){return q})),n.d(o,"getTrackedKeywordsRows",(function(){return B})),n.d(o,"getTrackedKeywordSummary",(function(){return C})),n.d(o,"getAutoAddFK",(function(){return H})),n.d(o,"getGraphKeywords",(function(){return z})),n.d(o,"getPageSpeed",(function(){return L})),n.d(o,"getSelectedPostType",(function(){return Q})),n.d(o,"getPostsRows",(function(){return Y})),n.d(o,"getPostsRowsAll",(function(){return X})),n.d(o,"getIndexingFilter",(function(){return $})),n.d(o,"getIndexingStats",(function(){return J}));var c={};n.r(c),n.d(c,"getTrackedKeywordsOverview",(function(){return Z})),n.d(c,"getTrackedKeywords",(function(){return ee})),n.d(c,"getTrackedKeywordsRows",(function(){return te})),n.d(c,"getTrackedKeywordSummary",(function(){return ne})),n.d(c,"getPageSpeed",(function(){return re})),n.d(c,"getPostsRows",(function(){return ae})),n.d(c,"getIndexingStats",(function(){return oe}));var i=n(5),u=n(3);function s(e,t){return{type:"RANK_MATH_APP_DATA",key:e,value:t}}function d(e,t){return{type:"RANK_MATH_APP_UI",key:e,value:t}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return s("trackedKeywordsOverview",e)}function m(e){return s("trackedKeywords",e)}function b(e,t,n){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(i.select)("rank-math-pro-analytics").getTrackedKeywordsAll());return Object(u.isUndefined)(r[e])&&(r[e]={}),r[e][n]=t,s("trackedKeywordsRows",r)}function y(e){return s("trackedKeywordSummary",e)}function h(e){return s("autoAddFK",e)}function O(e){return d("selectedGraphKeywords",e)}function g(e){return s("pageSpeed",e)}function w(e){return d("selectedPostType",e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t,n){var r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(i.select)("rank-math-pro-analytics").getPostsRowsAll());return r[e]=Object(u.isUndefined)(r[e])?{}:r[e],r[e][n]=t,s("postsRows",r)}function P(e){return d("indexingFilter",e)}function S(e){return s("indexingStats",e)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K={trackedKeywordsOverview:!1,trackedKeywords:{},trackedKeywordsRows:{},pageSpeed:{},trackedKeywordSummary:{},autoAddFK:rankMath.autoAddFK,postsRows:{}};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;return"RANK_MATH_APP_DATA"===t.type?T(T({},e),{},E({},t.key,t.value)):e}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N={selectedGraphKeywords:null,selectedPostType:"",indexingFilter:""};function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return"RANK_MATH_APP_UI"===t.type?x(x({},e),{},D({},t.key,t.value)):e}var U=n(6);function I(e){return e.appData}function M(e){return e.appData.trackedKeywordsOverview}function G(e){return e.appData.trackedKeywords}function q(e){return e.appData.trackedKeywordsRows}function B(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=Object(U.i)(n,!1);return a=a+"&search="+r,Object(u.isUndefined)(e.appData.trackedKeywordsRows[t])?{}:e.appData.trackedKeywordsRows[t][a]}function C(e){return e.appData.trackedKeywordSummary}function H(e){return e.appData.autoAddFK}function z(e,t){return Object(u.isNull)(e.appUi.selectedGraphKeywords)?((Object(u.isUndefined)(t)||Object(u.isNull)(t))&&(t={}),Object.keys(t).slice(0,3)):e.appUi.selectedGraphKeywords}function L(e){return e.appData.pageSpeed}function Q(e){return e.appUi.selectedPostType}function Y(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=Object(U.i)(n,!1);return a=""===a?"all":a,a=r?a+"&postType="+r:a,Object(u.isUndefined)(e.appData.postsRows[t])?{}:e.appData.postsRows[t][a]}function X(e){return e.appData.postsRows}function $(e){return e.appUi.indexingFilter}function J(e){return e.appData.indexingStats}var V=n(13),W=n.n(V);function Z(){W()({method:"GET",path:"rankmath/v1/an/trackedKeywordsOverview"}).then((function(e){Object(i.dispatch)("rank-math-pro-analytics").updateTrackedKeywordsOverview(e)}))}function ee(){W()({method:"GET",path:"rankmath/v1/an/getTrackedKeywords"}).then((function(e){Object(i.dispatch)("rank-math-pro-analytics").updateTrackedKeywords(e)}))}function te(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=Object(U.i)(t,!1)+"&search="+n;W()({method:"GET",path:"rankmath/v1/an/getTrackedKeywordsRows?page="+e+r}).then((function(t){Object(i.dispatch)("rank-math-pro-analytics").updateTrackedKeywordsRows(e,t,""===r?"all":r)}))}function ne(){W()({method:"GET",path:"rankmath/v1/an/getTrackedKeywordSummary"}).then((function(e){Object(i.dispatch)("rank-math-pro-analytics").updateTrackedKeywordSummary(e)}))}function re(e,t){if(!Object(u.isUndefined)(t)){var n=t.pagespeed_refreshed,r=t.object_id,a=!Object(u.isUndefined)(t.isAdminBar);null!==n&&"0000-00-00 00:00:00"!==n||W()({method:"POST",path:"rankmath/v1/an/getPagespeed/",data:{id:e,objectID:r,isAdminBar:a}}).then((function(e){Object(i.dispatch)("rank-math-pro-analytics").updatePageSpeed(e)})),Object(i.dispatch)("rank-math-pro-analytics").updatePageSpeed(t)}}function ae(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=Object(U.i)(t,!1);r+=n?"&postType=".concat(n):"",W()({method:"GET",path:"rankmath/v1/an/postsRows?page="+e+r}).then((function(t){Object(i.dispatch)("rank-math-pro-analytics").updatePostsRows(e,t,""===r?"all":r)}))}function oe(){W()({method:"GET",path:"rankmath/v1/an/inspectionStats"}).then((function(e){Object(i.dispatch)("rank-math-pro-analytics").updateIndexingStats(e)}))}var ce=Object(i.registerStore)("rank-math-pro-analytics",{reducer:Object(i.combineReducers)(a),selectors:o,actions:r,resolvers:c});function ie(){return ce}},6:function(e,t,n){"use strict";n.d(t,"n",(function(){return m})),n.d(t,"h",(function(){return b})),n.d(t,"q",(function(){return y})),n.d(t,"k",(function(){return h})),n.d(t,"m",(function(){return O})),n.d(t,"o",(function(){return g})),n.d(t,"i",(function(){return w})),n.d(t,"j",(function(){return v})),n.d(t,"d",(function(){return j})),n.d(t,"a",(function(){return k})),n.d(t,"s",(function(){return P})),n.d(t,"r",(function(){return S})),n.d(t,"l",(function(){return _})),n.d(t,"c",(function(){return T})),n.d(t,"b",(function(){return E})),n.d(t,"f",(function(){return K})),n.d(t,"e",(function(){return A})),n.d(t,"p",(function(){return R})),n.d(t,"g",(function(){return x}));var r=n(20),a=n.n(r),o=n(3),c=n(1),i=n(5),u=n(13),s=n.n(u),d=n(10),l=n(27),p=n(28);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function m(e,t,n){return e.splice(t-1,0,n),e}function b(e,t){return Object(d.applyFilters)("rank_math_filter_shown_headers",e,t)}function y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return Object(d.applyFilters)("rank_math_process_rows",e,t,n,r,a)}function h(e,t){return(e-1)*t}function O(e){return Object(d.applyFilters)("rank_math_humanNumber",e)}function g(e,t,n,r,a){var c=new URLSearchParams(a.location.search).get("search"),i=Object(o.isEmpty)(c)?"?orderby="+n+"&order="+r:"?orderby="+n+"&order="+r+"&search="+c;a.push("/"+e+"/"+t+i)}function w(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n="";return Object(o.map)(e,(function(e,r){e&&(n+="&"+r+"="+(!0===t?"1":e))})),n}function v(e){return Object(d.applyFilters)("rank_math_getFilterQuery",e)}function j(e,t){s()({method:"POST",path:"rankmath/v1/an/autoAddFocusKeywords",data:{data:e}}).then((function(e){if(!1===e)return t({autoAddingStep:"notfound"}),void setTimeout((function(){t({autoAddingStep:""})}),3e3);Object(i.dispatch)("rank-math-pro-analytics").invalidateResolutionForStoreSelector("getTrackedKeywordsRows"),Object(i.dispatch)("rank-math-pro-analytics").invalidateResolutionForStoreSelector("getTrackedKeywordSummary"),t({autoAddingStep:"success"}),setTimeout((function(){t({autoAddingStep:""})}),3e3)}))}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];s()({method:"POST",path:"rankmath/v1/an/addTrackKeyword",data:{keyword:e}}).then((function(e){if(!1===e){var r=['<div class="rank-math-popup-quota">','<button class="rank-math-popup-quota-close">X</button>',"<p>",Object(c.__)("Your keyword quota has expired. Please upgrade your plan to increase the limit.","rank-math-pro"),'<a href="https://rankmath.com/pro/">',Object(c.__)("Upgrade your plan!","rank-math-pro"),"</a>","</p>","</div>"];return a()(document.body).append(r.join("")),a()(".rank-math-popup-quota-close").on("click",(function(){a()(".rank-math-popup-quota").fadeOut(500,(function(){a()(".rank-math-popup-quota").remove()}))})),void("function"==typeof t&&t(0))}!0===n&&(Object(i.dispatch)("rank-math-pro-analytics").invalidateResolutionForStoreSelector("getTrackedKeywordsRows"),Object(i.dispatch)("rank-math-pro-analytics").invalidateResolutionForStoreSelector("getTrackedKeywordSummary"),Object(i.dispatch)("rank-math-pro-analytics").invalidateResolutionForStoreSelector("getTrackedKeywords")),"function"==typeof t&&(t(2),setTimeout((function(){t(0)}),2e3))})),"function"==typeof t&&t(1)}function P(e){s()({method:"POST",path:"rankmath/v1/an/removeTrackKeyword",data:{keyword:e}}).then((function(){window.location.reload()}))}function S(){confirm(Object(c.__)("Are you sure you want to delete all the Manually Tracked keywords from Rank Tracker? This action is irreversible.","rank-math-pro"))&&s()({method:"POST",path:"rankmath/v1/an/deleteTrackedKeywords"}).then((function(){window.location.reload()}))}function _(e){return Object(d.applyFilters)("rank_math_getSnippetIcon",e)}function T(e){return e.push({key:"positionHistory",label:Object(c.__)("Position History","rank-math-pro"),cellClassName:"rank-math-col-position-history"}),e}function E(e){return m(e,3,{key:"pageviews",label:Object(c.__)("Search Traffic","rank-math-pro"),isSortable:!0,cellClassName:"rank-math-col-pageviews"})}function K(e){return Object(o.map)(e,(function(e){return e.title=Object(l.decodeEntities)(e.query),e.content=wp.element.createElement(p.a,f({},e.position,{revert:!0})),e}))}function A(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];!0===e&&Object(i.dispatch)("rank-math").invalidateResolutionForStore(),Object(i.dispatch)("rank-math-pro-analytics").invalidateResolutionForStore()}function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"query",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"desc",r=["query","title","seo_score","impressions","clicks","pageviews","position","ctr","default"],a=Object(o.isEmpty)(e.toString()),c=t,i=n;return!1===a&&(Object(o.includes)(r,e.get("orderby"))&&(c=e.get("orderby")),i="asc"!==e.get("order")&&"desc"!==e.get("order")?"desc":e.get("order")),{orderby:c,order:i}}function x(e){return Object(o.map)(e,(function(e){return Object(o.includes)(["title","impressions","clicks","ctr","position"],e.key)&&(e.isSortable=!0),e}))}},7:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&e.push(c)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},9:function(e,t){e.exports=wp.components}});