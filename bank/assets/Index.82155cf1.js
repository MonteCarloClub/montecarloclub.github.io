import{c as G,g as J,S as K,m as M,a as Q,B as U,I as _,b as X,d as D,e as Y,h as E,R as Z,f as H}from"./Blockchain.657c5188.js";import{_ as $}from"./index.222c0f97.js";import{d as j,r as c,v as ee,o as b,b as A,e as r,f as y,l as f,n as w,F as O,i as te,q as ue,s as le}from"./vendor.c2805c13.js";const se=B=>(ue("data-v-21f0b401"),B=B(),le(),B),ne={class:"fullscene"},oe={class:"fullscene"},ae=se(()=>r("div",{style:{margin:"-32px auto"}}," \u53D1\u8D77\u8F6C\u6362\u7533\u8BF7 ",-1)),re=[ae],ie={class:"fullscene"},ce=j({setup(B){const N=[{x:10,y:50,role:"block",title:"\u533A\u5757"},{x:35,y:50,role:"block",title:"\u533A\u5757"},{x:60,y:50,role:"block",title:"\u533A\u5757"},{x:85,y:50,role:"block",title:"\u533A\u5757"},{x:10,y:90,role:"institution",title:"\u4E0A\u6D77\u5E02\u6559\u80B2\u673A\u6784"},{x:85,y:90,role:"institution",title:"\u6D59\u6C5F\u7701\u6559\u80B2\u673A\u6784"},{x:35,y:10,role:"bank",title:"\u957F\u4E09\u89D2\u5B66\u5206\u94F6\u884C\uFF08\u4E0A\u6D77/\u6C5F\u82CF/\u6D59\u6C5F/\u5B89\u5FBD\uFF09"},{x:85,y:10,role:"user",title:"\u5B66\u4E60\u8005"}],R=c(null),S=c(null),{nodes:i,screenWidth:F,screenHeight:I}=G(S,R,N),v=c(null),p=c(null),k=c(null),C=c(null),x=c(null),h=c(null),g=c(null),d=c([]),W=1,L=[{title:"\u5B66\u5206\u94F6\u884C\u90E8\u7F72\u5B66\u5206\u8F6C\u6362\u7684\u667A\u80FD\u5408\u7EA6",handler:()=>new Promise((o,n)=>{const t=i.value.filter(a=>a.role==="bank");t.length===0&&n(1);const e=t[0],s=C.value;s.style.left=e.x+"px",s.style.top=e.y+"px",s.style.opacity="1";const u=i.value.filter(a=>a.role==="block");u.length===0&&n(1);const l=u[1];C.value&&D(C.value,{x:l.x,y:l.y-64},()=>{d.value[0]=[{x:e.x,y:e.y+64},{x:l.x,y:l.y-96}],o(1)})})},{title:"\u4E0A\u6D77\u5E02\u6559\u80B2\u673A\u6784\u5B58\u5165\u5B66\u4E60\u6210\u679C",handler:()=>new Promise((o,n)=>{const t=i.value.filter(a=>a.role==="institution");t.length===0&&n(1);const e=t[0],s=h.value;s.style.left=e.x+"px",s.style.top=e.y+"px",s.style.opacity="1";const u=i.value.filter(a=>a.role==="block");u.length===0&&n(1);const l=u[0];h.value&&D(h.value,{x:l.x,y:l.y-64},()=>{d.value[1]=[{x:e.x,y:e.y-64},{x:l.x,y:l.y+64}],o(1)})})},{title:"\u5B66\u4E60\u8005\u53D1\u8D77\u8F6C\u6362\u7533\u8BF7",handler:()=>new Promise((o,n)=>{const t=i.value.filter(a=>a.role==="bank");t.length===0&&n(1);const e=t[0],s=i.value.filter(a=>a.role==="user");s.length===0&&n(1);const u=s[0],l=v.value;l.style.right=F.value-u.x+64+"px",l.style.top=u.y+"px",l.style.opacity="1",v.value&&Y(v.value,{x:e.x+64},()=>{v.value&&H(v.value,()=>o(1)),d.value[2]=[{x:u.x-64,y:u.y},{x:e.x+64,y:e.y}]})})},{title:"\u5B66\u4E60\u8005\u83B7\u53D6\u94FE\u4E0B\u6570\u636E",handler:()=>new Promise((o,n)=>{const t=i.value.filter(u=>u.role==="user");t.length===0&&n(1);const e=t[0],s=p.value;s.style.left=e.x+"px",s.style.top=e.y+128+"px",d.value[3]=[{x:e.x,y:e.y+64},{x:e.x,y:e.y+128}],p.value&&E(p.value,()=>o(1))})},{title:"\u5B66\u4E60\u8005\u5C06\u94FE\u4E0B\u6570\u636E\u53D1\u9001\u4E0A\u94FE",handler:()=>new Promise((o,n)=>{const t=i.value.filter(l=>l.role==="block");t.length===0&&n(1);const e=t[2],s=i.value.filter(l=>l.role==="user");s.length===0&&n(1);const u=s[0];p.value&&D(p.value,{x:e.x,y:e.y-64},()=>{d.value[4]=[{x:u.x,y:u.y+128},{x:e.x,y:u.y+128},{x:e.x,y:e.y-64}],o(1)})})},{title:"\u6D59\u6C5F\u7701\u6559\u80B2\u673A\u6784\u9A8C\u8BC1\u5B66\u4E60\u6210\u679C\u5E76\u5B8C\u6210\u8F6C\u6362",handler:()=>new Promise((o,n)=>{const t=i.value.filter(m=>m.role==="institution");t.length===0&&n(1);const e=t[1],s=x.value;s.style.left=e.x+"px",s.style.top=e.y-64+"px";const u=g.value;u.style.left=e.x+96+"px",u.style.top=e.y-64+"px";const l=k.value;l.style.left=e.x+"px",l.style.top=e.y-64+"px";const a=i.value.filter(m=>m.role==="block");a.length===0&&n(1);const V=a[3];h.value&&D(h.value,{x:e.x-64,y:e.y-64},()=>{x.value&&E(x.value,()=>{x.value&&H(x.value,()=>{k.value&&E(k.value,()=>{g.value&&E(g.value,()=>{u.style.opacity="0",k.value.style.opacity="0",p.value.style.opacity="0",v.value.style.opacity="0",d.value[5]=[{x:e.x,y:e.y-32},{x:V.x,y:V.y+64}],o(1)})})})})})})}],{running:q,currentStep:P}=J(L,1);let T=!0;ee(P,o=>{if(T){T=!1;return}o===W&&(d.value=d.value.slice(0,W))});const z=c(window.innerWidth);return(o,n)=>(b(),A(O,null,[r("div",{class:"footer",style:w({flex:z.value>720?"none":"1"})},[y(K,{current:f(P),steps:L,disabled:f(q)},null,8,["current","disabled"])],4),r("div",{ref_key:"refDynamicWindow",ref:S,class:"scene-container"},[r("div",{class:"scene",ref_key:"refWindow",ref:R,style:w({minWidth:f(M)+"px",minHeight:f(Q)+"px"})},[r("div",ne,[(b(!0),A(O,null,te(f(i),(t,e)=>(b(),A("div",{class:"node",style:w({left:t.x+"px",top:t.y+"px"})},[y(Z,{role:t.role,title:t.title},null,8,["role","title"])],4))),256)),y(U,{nodes:f(i),width:f(F),height:f(I)},null,8,["nodes","width","height"])]),r("div",oe,[r("div",{ref_key:"refSmartContract",ref:C,style:{opacity:0},class:"node"},[y(_,{type:"contract",title:"\u667A\u80FD\u5408\u7EA6"})],512),r("div",{ref_key:"refLearningRecords",ref:h,style:{opacity:0},class:"node"},[y(_,{type:"record",title:"\u5B66\u4E60\u6210\u679C"})],512),r("div",{ref_key:"refTransferData",ref:k,style:{opacity:0},class:"node"},[y(_,{type:"transfer",title:"\u8F6C\u6362\u673A\u5236"})],512),r("div",{ref_key:"refOffChainData",ref:p,style:{opacity:0},class:"node"},[y(_,{type:"offChain",title:"\u94FE\u4E0B\u6570\u636E"})],512),r("div",{ref_key:"refVerifyRecords",ref:x,style:{opacity:0},class:"node"},[y(_,{type:"verified",title:"\u9A8C\u8BC1\u6210\u529F"})],512),r("div",{ref_key:"refTransferedLearningRecords",ref:g,style:{opacity:0},class:"node"},[y(_,{type:"transferred",title:"\u8F6C\u6362\u540E\u7684\u5B66\u4E60\u6210\u679C"})],512),r("div",{class:"line",ref_key:"refApplyArrow",ref:v,style:{opacity:0}},re,512)]),r("div",ie,[y(X,{pathes:d.value,width:f(F),height:f(I)},null,8,["pathes","width","height"])])],4)],512)],64))}});var ve=$(ce,[["__scopeId","data-v-21f0b401"]]);export{ve as default};
