import{c as x,a as C,d as L,r as h,w as O,o as _,b as g,e as k,f as m,g as f,n as w,F as b,u as P,h as v,i as F,j as R,k as E,t as B,l as D,A as N,m as S,p as V}from"./vendor.c2805c13.js";const T=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}};T();var $="/bank/assets/lad.8b879e8a.png",K="/bank/assets/jar.54b9947a.png",W="/bank/assets/act.a4c8d382.png";const c={lad:{title:"\u5B66\u4E60\u6210\u679C\u4E0A\u94FE",image:$},act:{title:"\u5B66\u5206\u8F6C\u6362\u573A\u666F",image:W},jar:{title:"\u6C42\u804C/\u62DB\u8058\u573A\u666F",image:K}},te=()=>Object.keys(c).map(n=>({title:c[n].title,image:c[n].image,router:"/"+n,name:n})),q="modulepreload",A={},z="/bank/",d=function(a,s){return!s||s.length===0?a():Promise.all(s.map(o=>{if(o=`${z}${o}`,o in A)return;A[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":q,e||(t.as="script",t.crossOrigin=""),t.href=o,document.head.appendChild(t),e)return new Promise((u,i)=>{t.addEventListener("load",u),t.addEventListener("error",i)})})).then(()=>a())},y=x({history:C("/bank/"),routes:[{path:"/",component:()=>d(()=>import("./Index.bac8d894.js"),["assets/Index.bac8d894.js","assets/Index.21b0036e.css","assets/vendor.c2805c13.js"])},{path:"/lad",name:"lad",component:()=>d(()=>import("./Index.4364b407.js"),["assets/Index.4364b407.js","assets/Index.865a807c.css","assets/Blockchain.57e09ba9.js","assets/Blockchain.4c910d77.css","assets/vendor.c2805c13.js"])},{path:"/jar",name:"jar",component:()=>d(()=>import("./Index.7bae0ec4.js"),["assets/Index.7bae0ec4.js","assets/Index.b9d3405c.css","assets/Blockchain.57e09ba9.js","assets/Blockchain.4c910d77.css","assets/vendor.c2805c13.js"])},{path:"/act",name:"act",component:()=>d(()=>import("./Index.6e2960e2.js"),["assets/Index.6e2960e2.js","assets/Index.f3a6e6b3.css","assets/Blockchain.57e09ba9.js","assets/Blockchain.4c910d77.css","assets/vendor.c2805c13.js"])}]});function H(n){n.use(y)}var U=(n,a)=>{const s=n.__vccOpts||n;for(const[o,e]of a)s[o]=e;return s};const G={class:"header"},J=E(" \u9996\u9875 "),M=L({setup(n){const a=P(),s=h(["/"]),o=t=>{y.push(`/${t.key}`)},e=Object.keys(c).map(t=>({title:c[t].title,router:"/"+t,key:t}));O(()=>{const t=a.path.substring(1);s.value=[t];const u=c[t];document.title=u&&u.title||"\u957F\u4E09\u89D2\u5B66\u5206\u94F6\u884C"});const r=h(window.innerWidth);return(t,u)=>{const i=v("a-menu-item"),j=v("a-menu"),I=v("router-view");return _(),g(b,null,[k("div",G,[m(j,{selectedKeys:s.value,"onUpdate:selectedKeys":u[0]||(u[0]=l=>s.value=l),mode:"horizontal",onClick:o},{default:f(()=>[m(i,{key:"/"},{default:f(()=>[J]),_:1}),(_(!0),g(b,null,F(D(e),l=>(_(),R(i,{key:l.key},{default:f(()=>[E(B(l.title),1)]),_:2},1024))),128))]),_:1},8,["selectedKeys"])]),k("div",{class:"container",style:w({flexDirection:r.value>720?"row":"column-reverse"})},[m(I)],4)],64)}}});var Q=U(M,[["__scopeId","data-v-a81783ce"]]);function X(n){n.use(N)}const Y=S();function Z(n){n.use(Y)}const p=V(Q);H(p);X(p);Z(p);y.isReady().then(()=>{p.mount("#app")});export{U as _,te as g};
