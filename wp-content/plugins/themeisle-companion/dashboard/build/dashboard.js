(window.webpackJsonp_themeisle_companion=window.webpackJsonp_themeisle_companion||[]).push([[1],{6:function(e,t,n){}}]),function(e){function t(t){for(var a,o,l=t[0],r=t[1],i=t[2],m=0,d=[];m<l.length;m++)o=l[m],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(u&&u(t);d.length;)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,l=1;l<n.length;l++){var r=n[l];0!==c[r]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},c={0:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp_themeisle_companion=window.webpackJsonp_themeisle_companion||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=r;s.push([7,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var o=c.apply(null,a);o&&e.push(o)}}else if("object"===s)if(a.toString===Object.prototype.toString)for(var l in a)n.call(a,l)&&a[l]&&e.push(l);else e.push(a.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(a=function(){return c}.apply(t,[]))||(e.exports=a)}()},function(e,t,n){"use strict";var a=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==a)return a;throw new Error("unable to locate global object")}();e.exports=t=a.fetch,a.fetch&&(t.default=a.fetch.bind(a)),t.Headers=a.Headers,t.Request=a.Request,t.Response=a.Response},function(e,t){e.exports=window.lodash},,function(e,t,n){"use strict";n.r(t);var a=n(0);n(6);const c=Object(a.createContext)(),s=Object(a.createContext)(),o=Object(a.createContext)();var l=n(4),r=n.n(l);const i=async(e,t=!1,n={},a=!1,c="POST")=>{const s={method:c,headers:{Accept:"application/json","Content-Type":a?"application/x-www-form-urlencoded":"application/json","x-wp-nonce":obfxDash.nonce}};return"POST"===c&&(s.body=a?n:JSON.stringify(n)),await r()(e,s).then(e=>t?e:e.json())};var u=n(3),m=n.n(u),d=n(5),b=n(2),p=n(1);const{options:O,root:j,setSettingsRoute:h}=obfxDash;var f=({slug:e})=>{const{modulesData:t,setModulesData:n}=Object(a.useContext)(c),{setToast:s}=Object(a.useContext)(o),[l,r]=Object(a.useState)(!1),[u,f]=Object(a.useState)(!1),v=t.module_settings[e]||{},[g,E]=Object(a.useState)({...v}),_=Object(a.createElement)(b.Dashicon,{size:18,icon:"update",className:"is-loading"}),y=(e,t)=>{const n=g;n[e]=t,E({...n})};return Object(a.createElement)("div",{className:m()(["module-settings",l?"open":"closed"])},Object(a.createElement)("button",{"aria-expanded":l,className:"accordion-header",onClick:()=>r(!l)},Object(a.createElement)("div",{className:"accordion-title"}," Settings "),Object(a.createElement)(b.Dashicon,{icon:l?"arrow-up-alt2":"arrow-down-alt2"})),l&&Object(a.createElement)("div",{className:m()(["accordion-content",u?"loading":""])},(()=>{const t=[];for(let n=0;n<O[e].length;n++){let c=O[e][n];if(c.title&&c.label&&t.push(Object(a.createElement)("p",{className:"title"}," ",c.title," ")),c.hasOwnProperty("before_wrap")){const o=[],l="1"===g[c.id]||!g[c.id]&&"1"===c.default;for(;o.push(P(c,g,y,s)),!c.hasOwnProperty("after_wrap");)c=O[e][++n];const r=m()(["settings-row",l&&"active"]);t.push(Object(a.createElement)("div",{className:r}," ",o," "))}else if("checkbox"!==c.type)t.push(P(c,g,y,s));else{const o=[];for(;"checkbox"===c.type;)o.push(P(c,g,y,s)),c=O[e][++n];t.push(Object(a.createElement)("div",{className:"checkboxes-row"}," ",o," "))}}return t})(),Object(a.createElement)("div",{className:"buttons-container"},Object(a.createElement)(b.Button,{isSecondary:!0,className:"obfx-button",onClick:()=>r(!1)},Object(p.__)("Close","themeisle-companion")),Object(a.createElement)(b.Button,{isPrimary:!0,disabled:Object(d.isEqual)(g,v),className:"obfx-button",onClick:()=>{f(!0),i(j+h,!1,{slug:e,value:g}).then(a=>{if("success"!==a.type)return E({...v}),f(!1),void s(Object(p.__)("Could not update options. Please try again.","themeisle-companion"));t.module_settings[e]={...g},n({...t}),f(!1),s(Object(p.__)("Options updated successfully.","themeisle-companion"))})}},u?_:Object(p.__)("Save","themeisle-companion")))))};const{root:v,toggleStateRoute:g,options:E}=obfxDash;var _=({slug:e,details:t})=>{const n=t.refresh_after_enabled,s=t.active_default,[l,r]=Object(a.useState)(!1),{modulesData:u,setModulesData:d}=Object(a.useContext)(c),{setToast:O}=Object(a.useContext)(o),j=u.module_status,h=j[e]&&void 0!==j[e].active?j[e].active:s,_=m()("module-card",{active:h});return Object(a.createElement)("div",{className:_},Object(a.createElement)("div",{className:"module-card-header"},Object(a.createElement)("h3",{className:"title"},t.name),Object(a.createElement)("div",{className:"toggle-wrap"},l&&Object(a.createElement)(b.Dashicon,{size:18,icon:"update",className:"is-loading"}),Object(a.createElement)(b.ToggleControl,{checked:h,onChange:a=>{r(!0),i(v+g,!1,{slug:e,value:a}).then(c=>{((a,c)=>{if("success"!==a.type)return r(!1),void O(Object(p.__)("Could not activate module. Please try again.","themeisle-companion"));n&&window.location.reload(),j[e]||(j[e]={}),j[e].active=c,d(u),r(!1),O((c?Object(p.__)("Module activated","themeisle-companion"):Object(p.__)("Module deactivated","themeisle-companion"))+` (${t.name})`)})(c,a)})}}))),Object(a.createElement)("div",{className:"module-card-content"},(e=>{const t=[];if(e.indexOf("neve-pro-notice")>=0)return Object(a.createElement)("p",{className:"description",dangerouslySetInnerHTML:{__html:e}});for(;e.indexOf("<a")>=0;){const n=e.indexOf("<a"),c=e.indexOf("</a>");t.push(e.slice(0,n));const s=e.indexOf('href="')+'href="'.length,o=e.indexOf('"',s),l=e.slice(s,o),r=e.slice(e.indexOf(">",n)+1,c);t.push(Object(a.renderToString)(Object(a.createElement)(b.ExternalLink,{href:l},r))),e=e.slice(c+"</a>".length)}return t.push(e),Object(a.createElement)("p",{className:"description",dangerouslySetInnerHTML:{__html:t.join(" ")}})})(t.description)),h&&E[e].length>0&&Object(a.createElement)(f,{slug:e}))};const{modules:y,data:w}=obfxDash;var x=()=>{const[e,t]=Object(a.useState)(""===w?{module_status:{},module_settings:{}}:{...w});return e.module_settings||t({...e,module_settings:{}}),e.module_status||t({...e,module_status:{}}),Object(a.createElement)(c.Provider,{value:{modulesData:e,setModulesData:t}},Object(a.createElement)("div",{className:"modules-container"},Object.entries(y).map(([e,t])=>Object(a.createElement)(_,{slug:e,details:t,key:e}))))};var N=({slug:e,data:t})=>{const{banner:n,name:c,description:l,version:r,author:u,url:d,premium:O}=t,{pluginsData:j,setPluginsData:h}=Object(a.useContext)(s),{setToast:f}=Object(a.useContext)(o),[v,g]=Object(a.useState)(!1),E=j[e].action,_=t=>{j[e].action=t,h(j)},y=Object(p.__)("Something went wrong. Please try again.","themeisle-companion"),w={install:{static:Object(p.__)("Install","themeisle-companion"),progress:Object(p.__)("Installing","themeisle-companion")},activate:{static:Object(p.__)("Activate","themeisle-companion"),progress:Object(p.__)("Activating","themeisle-companion")},deactivate:{static:Object(p.__)("Deactivate","themeisle-companion"),progress:Object(p.__)("Deactivating","themeisle-companion")},external:Object(p.__)("See more details","themeisle-companion")};return Object(a.createElement)("div",{className:m()(["card","plugin",e])},Object(a.createElement)("div",{className:"card-header"},Object(a.createElement)("img",{src:n,alt:Object(p.__)("Banner Image","name")}),O&&Object(a.createElement)("span",{className:"premium-label"},Object(p.__)("Premium","themeisle-companion"))),Object(a.createElement)("div",{className:"card-body"},Object(a.createElement)("h3",{className:"card-title"},c),Object(a.createElement)("p",{className:"card-description"},l)),Object(a.createElement)("div",{className:"card-footer"},Object(a.createElement)("div",{className:"plugin-data"},r&&Object(a.createElement)("span",{className:"version"},"v",r),u&&Object(a.createElement)("span",{className:"author"},u)),"external"!==E&&Object(a.createElement)(b.Button,{className:"plugin-action",isPrimary:["install","activate"].includes(E),isSecondary:"deactivate"===E,disabled:v,onClick:()=>{var n;g(!0),"install"!==E?(n=t[E],!0,i(n,!0,{},"GET")).then(e=>{if(!e.ok)return g(!1),void f(y);_("activate"===E?"deactivate":"activate"),g(!1)}):(e=>new Promise(t=>{wp.updates.ajax("install-plugin",{slug:e,success:()=>{t({success:!0})},error:()=>{t({success:!1})}})}))(e).then(e=>{if(!e.success)return g(!1),void f(y);_("activate"),g(!1)})}},!v&&w[E].static,v&&Object(a.createElement)("span",{style:{display:"flex",alignItems:"center"}},Object(a.createElement)(b.Dashicon,{icon:"update"}),w[E].progress+"...")),"external"===E&&Object(a.createElement)(b.ExternalLink,{href:d},w[E])))},S=()=>{const{plugins:e}=obfxDash,[t,n]=Object(a.useState)(e);return e?Object(a.createElement)(s.Provider,{value:{pluginsData:t,setPluginsData:n}},Object(a.createElement)("div",{className:"plugins-grid"},Object.keys(e).map(t=>Object(a.createElement)(N,{key:t,slug:t,data:e[t]})))):null};const C={modules:{label:Object(p.__)("Available Modules","themeisle-companion"),render:()=>Object(a.createElement)(x,null)},plugins:{label:Object(p.__)("Recommended Plugins","themeisle-companion"),render:()=>Object(a.createElement)(S,null)}},k=e=>{const t=document.createElement("textarea");return t.innerHTML=e,t.value},P=(e,t,n,c)=>{const s=void 0!==t[e.id]?t[e.id]:e.default;switch(e.type){case"checkbox":return Object(a.createElement)(b.CheckboxControl,{label:e.label,checked:"1"===s,onChange:t=>n(e.id,t?"1":"0")});case"radio":return Object(a.createElement)(b.RadioControl,{label:e.title,options:e.options.map((e,t)=>({label:e,value:t})),selected:parseInt(s),onChange:t=>n(e.id,t)});case"toggle":return Object(a.createElement)(b.ToggleControl,{label:Object(a.createElement)("div",{dangerouslySetInnerHTML:{__html:e.label}}),checked:"1"===s,onChange:t=>n(e.id,t?"1":"0")});case"select":return Object(a.createElement)("div",{className:"select-wrap"},Object(a.createElement)(b.SelectControl,{label:e.title,value:s,options:Object.entries(e.options).map(([e,t])=>({value:e,label:t})),onChange:t=>n(e.id,t)}));case"text":return Object(a.createElement)(b.TextControl,{label:e.title,value:k(s),onChange:t=>n(e.id,t)});case"link":const t="analytics_accounts_unregister"===e.id;return Object(a.createElement)("div",{className:"select-wrap"},Object(a.createElement)(b.Button,{isPrimary:!t,isDestructive:t,href:e.url?e.url:null,onClick:t&&(()=>{((e,t)=>{var n;(n=e,"deactivate=unregister",i(n,!1,"deactivate=unregister",!0)).then(e=>{!1!==e?window.location.reload():t(Object(p.__)("Could not unregister the site. Please try again.","themeisle-companion"))})})(e.unregisterURL,c)})},Object(a.createElement)("div",{dangerouslySetInnerHTML:{__html:e.text}})))}};var T=({activeTab:e,setActiveTab:t})=>Object(a.createElement)("header",null,Object(a.createElement)("div",{className:"container"},Object(a.createElement)("div",{className:"top"},Object(a.createElement)("img",{src:obfxDash.path+"assets/orbit-fox.png",alt:"logo"}),Object(a.createElement)("h1",null,"Orbit Fox")),Object(a.createElement)("nav",{className:"navigation"},Object.keys(C).map((n,c)=>Object(a.createElement)("li",{key:"tab"+c,className:n===e?"active":""},Object(a.createElement)("a",{href:"#"+n,onClick:()=>t(n)},C[n].label)))))),D=()=>{const{toast:e,setToast:t}=Object(a.useContext)(o);Object(a.useEffect)(()=>{setTimeout(()=>{t(null)},3e3)},[]);const n={opacity:null===e?0:1};return Object(a.createElement)("div",{style:n},Object(a.createElement)(b.Snackbar,{className:"dash-notice"},e))},M=()=>{const e=(()=>{let e=window.location.hash;return"string"!=typeof window.location.hash?null:(e=e.substring(1),Object.keys(C).includes(e)?e:null)})(),[t,n]=Object(a.useState)(e||"modules"),[c,s]=Object(a.useState)();return Object(a.createElement)(o.Provider,{value:{toast:c,setToast:s}},Object(a.createElement)(T,{activeTab:t,setActiveTab:n}),Object(a.createElement)("div",{className:"container"},C[t].render()),c&&Object(a.createElement)(D,null))};Object(a.render)(Object(a.createElement)(()=>Object(a.createElement)(M,null),null),document.getElementById("obfx-dash"))}]);