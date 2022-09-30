import{c as $,g as q,S as G,m as J,a as K,B as M,I as B,b as Q,d,f as P,R as U}from"./Blockchain.30a039c9.js";import{_ as X}from"./index.a0789f77.js";import{d as Y,r as k,s as V,o as A,b as D,e as y,f as x,l as f,v as N,F as z,i as Z}from"./vendor.45ad1cdd.js";const j={class:"footer"},ee={class:"fullscene"},te={class:"fullscene"},le={class:"fullscene"},ue=Y({setup(se){const O=[{x:16,y:50,role:"block",title:"\u533A\u5757"},{x:53,y:50,role:"block",title:"\u533A\u5757"},{x:90,y:50,role:"block",title:"\u533A\u5757"},{x:16,y:10,role:"user",title:"\u5B66\u4E60\u8005"},{x:90,y:90,role:"user",title:"\u62DB\u8058\u5355\u4F4DHR"},{x:53,y:10,role:"institution",title:"\u53D1\u8BC1\u673A\u6784"},{x:16,y:90,role:"bank",title:"\u957F\u4E09\u89D2\u5B66\u5206\u94F6\u884C\uFF08\u4E0A\u6D77/\u6C5F\u82CF/\u6D59\u6C5F/\u5B89\u5FBD\uFF09"}],E=k(null),R=k(null),{nodes:a,screenWidth:w,screenHeight:S,scaleRate:W}=$(R,E,O);V(W,()=>{const o=E.value;o.style.transform=`scale(${W.value})`});const m=k(null),p=k(null),c=k(null),g=k(null),C=k(null),h=k([]),F=1,L=[{title:"\u5B66\u5206\u94F6\u884C\u90E8\u7F72\u667A\u80FD\u5408\u7EA6",handler:()=>new Promise((o,n)=>{const u=a.value.filter(s=>s.role==="bank");u.length===0&&n(1);const e=u[0],l=m.value;l.style.left=e.x+"px",l.style.top=e.y-64+"px",l.style.opacity="1";const r=a.value.filter(s=>s.role==="block");r.length===0&&n(1);const t=r[0];m.value&&d(m.value,{x:t.x,y:t.y-64},()=>{h.value[0]=[{x:e.x,y:e.y-32},{x:t.x,y:t.y+64}],o(1)})})},{title:"\u5B66\u4E60\u8005\u6388\u6743\u673A\u6784\u9A8C\u8BC1\u5E76\u4E0A\u4F20\u5B66\u4E60\u6210\u679C",handler:()=>new Promise((o,n)=>{g.value&&P(g.value);const u=a.value.filter(v=>v.role==="user");u.length===0&&n(1);const e=u[0],l=c.value;l.style.left=e.x+"px",l.style.top=e.y+"px",l.style.opacity="1";const r=a.value.filter(v=>v.role==="institution");r.length===0&&n(1);const t=r[0],s=a.value.filter(v=>v.role==="block");s.length===0&&n(1);const i=s[1];let _=0;const b=()=>{_+=1,_===2&&(h.value[1]=[{x:t.x,y:t.y+64},{x:i.x,y:i.y-64}],o(1))};c.value&&d(c.value,{x:t.x-64,y:t.y},()=>{const v=p.value;v.style.left=t.x+"px",v.style.top=t.y+"px",v.style.opacity="1",p.value&&d(p.value,{x:i.x,y:i.y-64},b),c.value&&d(c.value,{x:i.x-64,y:i.y-64},b)})})},{title:"\u53D1\u9001\u5B66\u4E60\u6210\u679C\u7684\u5730\u5740",handler:()=>new Promise((o,n)=>{const u=a.value.filter(s=>s.role==="user");u.length===0&&n(1);const e=u[0],l=C.value;l.style.left=e.x-64+"px",l.style.top=e.y+"px",l.style.opacity="1";const r=a.value.filter(s=>s.role==="bank");r.length===0&&n(1);const t=r[0];C.value&&d(C.value,{x:t.x-64,y:t.y},()=>{h.value[2]=[{x:e.x-32,y:e.y},{x:e.x-96,y:e.y},{x:e.x-96,y:t.y},{x:t.x-32,y:t.y}],o(1)})})},{title:"\u5B66\u5206\u94F6\u884C\u901A\u8FC7\u667A\u80FD\u5408\u7EA6\u9A8C\u8BC1\u5E76\u5B58\u50A8\u5B66\u4E60\u6210\u679C",handler:()=>new Promise((o,n)=>{const u=a.value.filter(i=>i.role==="bank");u.length===0&&n(1);const e=u[0],l=a.value.filter(i=>i.role==="block");l.length===0&&n(1);let r=0;const t=()=>{r+=1,r===3&&(h.value[3]=[{x:e.x+32,y:e.y},{x:l[1].x,y:e.y},{x:l[1].x,y:l[1].y+64}],o(1))};C.value&&P(C.value,t);const s=l[0];p.value&&d(p.value,{x:s.x+64+64,y:s.y-64},t),c.value&&d(c.value,{x:s.x+64,y:s.y-64},t)})},{title:"\u62DB\u8058\u5355\u4F4DHR\u83B7\u53D6\u5B66\u4E60\u6210\u679C\u5E76\u9A8C\u8BC1",handler:()=>new Promise((o,n)=>{const u=a.value.filter(t=>t.role==="block");u.length===0&&n(1);const e=u[2];let l=0;const r=()=>{if(l+=1,l===2){const t=c.value,s=g.value;s.style.left=t.style.left,s.style.top=t.style.top,s.style.opacity="1";const i=a.value.filter(b=>b.role==="user");i.length===0&&n(1);const _=i[1];g.value&&d(g.value,{x:_.x,y:_.y-64},()=>{h.value[4]=[{x:e.x,y:e.y},{x:_.x,y:_.y-64}],o(1)})}};p.value&&d(p.value,{x:e.x+64,y:e.y-64},r),c.value&&d(c.value,{x:e.x,y:e.y-64},r)})}],{running:T,currentStep:H}=q(L,F);let I=!0;return V(H,o=>{if(I){I=!1;return}o===F&&(h.value=h.value.slice(0,F))}),(o,n)=>(A(),D(z,null,[y("div",j,[x(G,{current:f(H),steps:L,disabled:f(T)},null,8,["current","disabled"])]),y("div",{ref_key:"refDynamicWindow",ref:R,class:"scene-container"},[y("div",{class:"scene",ref_key:"refWindow",ref:E,style:N({minWidth:f(J)+"px",minHeight:f(K)+"px"})},[y("div",ee,[(A(!0),D(z,null,Z(f(a),(u,e)=>(A(),D("div",{class:"node",style:N({left:u.x+"px",top:u.y+"px"})},[x(U,{role:u.role,title:u.title},null,8,["role","title"])],4))),256)),x(M,{nodes:f(a),width:f(w),height:f(S)},null,8,["nodes","width","height"])]),y("div",te,[y("div",{ref_key:"refSmartContract",ref:m,style:{opacity:0},class:"node"},[x(B,{type:"contract",title:"\u667A\u80FD\u5408\u7EA6"})],512),y("div",{ref_key:"refLearningRecords",ref:c,style:{opacity:0},class:"node"},[x(B,{type:"record",title:"\u5B66\u4E60\u6210\u679C"})],512),y("div",{ref_key:"refVerifyRecords",ref:p,style:{opacity:0},class:"node"},[x(B,{type:"credential",title:"\u6210\u679C\u8BC1\u660E"})],512),y("div",{ref_key:"refLearningRecordsCopy",ref:g,style:{opacity:0},class:"node"},[x(B,{type:"record",title:"\u5B66\u4E60\u6210\u679C"})],512),y("div",{ref_key:"refLearningRecordAddress",ref:C,style:{opacity:0},class:"node"},[x(B,{type:"address",title:"\u5B66\u4E60\u6210\u679C\u94FE\u4E0A\u5730\u5740"})],512)]),y("div",le,[x(Q,{pathes:h.value,width:f(w),height:f(S)},null,8,["pathes","width","height"])])],4)],512)],64))}});var ae=X(ue,[["__scopeId","data-v-78292927"]]);export{ae as default};
