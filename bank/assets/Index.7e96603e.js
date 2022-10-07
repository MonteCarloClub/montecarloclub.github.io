import{c as q,g as G,S as J,m as K,a as M,B as Q,I as _,b as U,d as x,f as b,R as X}from"./Blockchain.657c5188.js";import{_ as Y}from"./index.222c0f97.js";import{d as Z,r as p,v as $,o as F,b as w,e as c,f as h,l as y,n as A,F as L,i as j}from"./vendor.c2805c13.js";const ee={class:"fullscene"},te={class:"fullscene"},le={class:"fullscene"},ue=Z({setup(se){const N=[{x:15,y:50,role:"block",title:"\u533A\u5757"},{x:50,y:50,role:"block",title:"\u533A\u5757"},{x:85,y:50,role:"block",title:"\u533A\u5757"},{x:85,y:90,role:"user",title:"\u5B66\u4E60\u8005"},{x:50,y:90,role:"institution",title:"\u53D1\u8BC1\u673A\u6784"},{x:50,y:10,role:"bank",title:"\u957F\u4E09\u89D2\u5B66\u5206\u94F6\u884C\uFF08\u4E0A\u6D77/\u6C5F\u82CF/\u6D59\u6C5F/\u5B89\u5FBD\uFF09"}],D=p(null),R=p(null),{nodes:i,screenWidth:I,screenHeight:W}=q(R,D,N),B=p(null),r=p(null),v=p(null),d=p(null),f=p([]),m=1,S=[{title:"\u5B66\u5206\u94F6\u884C\u90E8\u7F72\u667A\u80FD\u5408\u7EA6",handler:()=>new Promise((a,n)=>{const t=i.value.filter(o=>o.role==="bank");t.length===0&&n(1);const e=t[0],u=B.value;u.style.left=e.x+"px",u.style.top=e.y+"px",u.style.opacity="1";const s=i.value.filter(o=>o.role==="block");s.length===0&&n(1);const l=s[0];B.value&&x(B.value,{x:l.x,y:l.y-64},()=>{f.value[0]=[{x:e.x-32,y:e.y},{x:l.x,y:e.y},{x:l.x,y:l.y-112}],a(1)})})},{title:"\u5B66\u4E60\u8005\u6388\u6743\u673A\u6784\u516C\u5F00\u5B66\u4E60\u6210\u679C",handler:()=>new Promise((a,n)=>{d.value&&b(d.value);const t=i.value.filter(o=>o.role==="user");t.length===0&&n(1);const e=t[0],u=r.value;u.style.left=e.x+"px",u.style.top=e.y+"px",u.style.opacity="1";const s=i.value.filter(o=>o.role==="institution");s.length===0&&n(1);const l=s[0];r.value&&x(r.value,{x:l.x,y:l.y-64},()=>{f.value[1]=[{x:e.x-32,y:e.y},{x:l.x+48,y:l.y}],a(1)})})},{title:"\u53D1\u8BC1\u673A\u6784\u9A8C\u8BC1\u5B66\u4E60\u6210\u679C\u540E\u5C06\u5176\u4E0A\u94FE",handler:()=>new Promise((a,n)=>{const t=r.value,e=v.value;e.style.left=t.style.left,e.style.top=t.style.top,e.style.opacity="1";const u=i.value.filter(C=>C.role==="block");u.length===0&&n(1);const s=u[1];let l=0;const o=()=>{l+=1,l===2&&a(1)};v.value&&x(v.value,{x:s.x,y:s.y-64},()=>{f.value[2]=[{x:parseInt(t.style.left),y:parseInt(t.style.top)},{x:s.x,y:s.y+64}],o()}),r.value&&b(r.value,o)})},{title:"\u5B66\u4E60\u8005\u516C\u5F00\u5B66\u4E60\u6210\u679C",handler:()=>new Promise((a,n)=>{const t=i.value.filter(o=>o.role==="user");t.length===0&&n(1);const e=t[0],u=r.value;u.style.left=e.x+"px",u.style.top=e.y+"px",u.style.opacity="1";const s=i.value.filter(o=>o.role==="block");s.length===0&&n(1);const l=s[2];r.value&&x(r.value,{x:l.x,y:l.y-64},()=>{f.value[3]=[{x:e.x,y:e.y-32},{x:l.x,y:l.y+64}],a(1)})})},{title:"\u5B66\u4E60\u6210\u679C\u7ECF\u8FC7\u667A\u80FD\u5408\u7EA6\u9A8C\u8BC1\u540E\u88AB\u5BFC\u5165\u5B66\u5206\u94F6\u884C",handler:()=>new Promise((a,n)=>{const t=i.value.filter(k=>k.role==="bank");t.length===0&&n(1);const e=t[0],u=B.value,s=parseInt(u.style.left),l=parseInt(u.style.top);let o=0;const C=()=>{if(o+=1,o===2){const k=r.value,E=d.value;E.style.left=k.style.left,E.style.top=k.style.top,E.style.opacity="1",r.value&&b(r.value,C),v.value&&b(v.value,C),d.value&&x(d.value,{x:e.x-96,y:e.y},()=>{const H=i.value.filter(T=>T.role==="block");H.length===0&&n(1);const g=H[2];f.value[4]=[{x:g.x,y:g.y-64},{x:g.x,y:e.y},{x:e.x+32,y:e.y}],a(1)})}};r.value&&x(r.value,{x:s+128+64,y:l},C),v.value&&x(v.value,{x:s+96,y:l},C)})},{title:"\u5B66\u4E60\u8005\u4ECE\u5B66\u5206\u94F6\u884C\u4E2D\u8BBF\u95EE\u5B66\u4E60\u6210\u679C",handler:()=>new Promise((a,n)=>{const t=i.value.filter(u=>u.role==="user");t.length===0&&n(1);const e=t[0];d.value&&x(d.value,{x:e.x,y:e.y-64},()=>{const u=i.value.filter(l=>l.role==="bank");u.length===0&&n(1);const s=u[0];f.value[5]=[{x:s.x,y:s.y-32},{x:s.x,y:s.y-64},{x:e.x+64,y:s.y-64},{x:e.x+64,y:e.y},{x:e.x+32,y:e.y}],a(1)})})}],{running:z,currentStep:P}=G(S,m);let V=!0;$(P,a=>{if(V){V=!1;return}a===m&&(f.value=f.value.slice(0,m))});const O=p(window.innerWidth);return(a,n)=>(F(),w(L,null,[c("div",{class:"footer",style:A({flex:O.value>720?"none":"1"})},[h(J,{current:y(P),steps:S,disabled:y(z)},null,8,["current","disabled"])],4),c("div",{ref_key:"refDynamicWindow",ref:R,class:"scene-container"},[c("div",{class:"scene",ref_key:"refWindow",ref:D,style:A({minWidth:y(K)+"px",minHeight:y(M)+"px"})},[c("div",ee,[(F(!0),w(L,null,j(y(i),(t,e)=>(F(),w("div",{class:"node",style:A({left:t.x+"px",top:t.y+"px"})},[h(X,{role:t.role,title:t.title},null,8,["role","title"])],4))),256)),h(Q,{nodes:y(i),width:y(I),height:y(W)},null,8,["nodes","width","height"])]),c("div",te,[c("div",{ref_key:"refSmartContract",ref:B,style:{opacity:0},class:"node"},[h(_,{type:"contract",title:"\u667A\u80FD\u5408\u7EA6"})],512),c("div",{ref_key:"refLearningRecords",ref:r,style:{opacity:0},class:"node"},[h(_,{type:"record",title:"\u5B66\u4E60\u6210\u679C"})],512),c("div",{ref_key:"refVerifyRecords",ref:v,style:{opacity:0},class:"node"},[h(_,{type:"credential",title:"\u9A8C\u8BC1\u8BC1\u660E"})],512),c("div",{ref_key:"refVerifiedRecordsCopy",ref:d,style:{opacity:0},class:"node"},[h(_,{type:"verified",title:"\u5B66\u4E60\u6210\u679C\u3010\u5DF2\u9A8C\u8BC1\u3011"})],512)]),c("div",le,[h(U,{pathes:f.value,width:y(I),height:y(W)},null,8,["pathes","width","height"])])],4)],512)],64))}});var ae=Y(ue,[["__scopeId","data-v-228c64ae"]]);export{ae as default};
