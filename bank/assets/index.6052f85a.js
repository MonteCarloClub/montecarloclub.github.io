import{d,c as m,r as p,o as h,a as y,b as _,A as v,e as g,f as L}from"./vendor.e46ea381.js";const b=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};b();const k=d({setup(n){return(s,c)=>{const r=p("router-view");return h(),m(r)}}}),A="modulepreload",u={},E="/",O=function(s,c){return!c||c.length===0?s():Promise.all(c.map(r=>{if(r=`${E}${r}`,r in u)return;u[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":A,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((l,f)=>{o.addEventListener("load",l),o.addEventListener("error",f)})})).then(()=>s())},a=y({history:_(),routes:[{path:"/",component:()=>O(()=>import("./Index.438e9eca.js"),["assets/Index.438e9eca.js","assets/Index.4127ffc3.css","assets/vendor.e46ea381.js"])}]});function P(n){n.use(a)}function S(n){n.use(v)}const R=g({state(){return{count:0}},mutations:{increment(n){n.count++}}}),w=Symbol();function C(n){n.use(R,w)}const i=L(k);P(i);S(i);C(i);a.isReady().then(()=>{i.mount("#app")});
