"use strict";(self.webpackChunkneve_pro_addon=self.webpackChunkneve_pro_addon||[]).push([[372],{182:function(e,n,t){t.r(n);var c=t(196),o=t.n(c),r=t(307),a=t(736),s=t(881),i=t(609),l=t(606);n.default=({onChange:e,icon:n,closePicker:t})=>{const{icons:c}=window.nvMegaMenu,u=(0,r.useRef)(null);(0,l.Z)(u,(()=>{t()})),(0,r.useEffect)((()=>{null!==u.current&&u.current.getBoundingClientRect().bottom>(window.innerHeight||document.documentElement.clientHeight)&&(u.current.style.top="unset",u.current.style.bottom="100%")}),[]);const[m,d]=(0,r.useState)(""),v={themeisle:(0,a.__)("Theme Icons","neve"),dashicons:(0,a.__)("WordPress","neve"),fontawesome:(0,a.__)("FontAwesome","neve")};return o().createElement("div",{ref:u,className:"nv-iconpicker"},o().createElement("div",{className:"icon-picker-header"},o().createElement("input",{type:"search",value:m,onChange:e=>{d(e.target.value)},placeholder:(0,a.__)("Search","neve")+"..."}),o().createElement(i.Button,{isSecondary:!0,isDestructive:!0,disabled:!n,onClick:()=>{e(""),t()},icon:"no-alt"},(0,a.__)("Remove Icon","neve")),o().createElement(i.Button,{isSecondary:!0,onClick:t},(0,a.__)("Close","neve"))),o().createElement("div",{className:"icon-picker-body"},Object.keys(v).map((n=>{return o().createElement("div",{key:n},o().createElement("h4",null,v[n]),o().createElement("div",{className:"icon-set"},o().createElement("div",{className:"icons"},(r=c[n],m?r.filter((e=>e.indexOf(m.toLowerCase())>-1)):r).map((c=>o().createElement("button",{key:`${c}-${n}`,onClick:n=>{n.preventDefault(),n.stopPropagation(),e(c),t()}},o().createElement("span",{className:(0,s.rd)(c)})))))));var r}))))}},606:function(e,n,t){var c=t(307);n.Z=(e,n)=>{(0,c.useEffect)((()=>{const t=t=>{e.current&&(e.current.contains(t.target)||n(t))};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[e,n])}}}]);