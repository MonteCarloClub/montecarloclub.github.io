import{T as x}from"./Title.e86c8ba8.js";import{_ as y}from"./TransactionTable.bce31510.js";import{m}from"./address.4bc481fa.js";import{e as u,r as n,o as t,g as l,w as _,c as f,v as k,u as s,F as b,h as v,y as T,t as B,x as C,a as r,d as g}from"./vendor.b3082d65.js";import{d as N}from"./useMock.aee5a14d.js";import"./index.898767ad.js";import"./shuffle.cbddf0eb.js";const V=u({props:{data:{type:Object},maps:{type:Object,required:!0}},setup(e){return(j,d)=>{const a=n("a-descriptions-item"),c=n("a-descriptions");return e.data?(t(),l(c,{key:0,bordered:""},{default:_(()=>[(t(!0),f(b,null,k(s(m),o=>(t(),l(a,{label:o.label},{default:_(()=>[T(B(e.data[o.key]),1)]),_:2},1032,["label"]))),256))]),_:1})):v("",!0)}}}),E=g("h2",null,"\u4EA4\u6613\u5217\u8868",-1),L=u({props:{address:String},setup(e){const d=C({id:e.address||"123"}),{data:a,error:c}=N(d);return(o,w)=>{var i,p;const h=n("a-divider");return t(),f(b,null,[r(x,{title:"\u5730\u5740\u8BE6\u60C5"}),r(V,{data:(i=s(a))==null?void 0:i.summary,maps:s(m)},null,8,["data","maps"]),r(h),E,r(y,{data:(p=s(a))==null?void 0:p.transactions},null,8,["data"])],64)}}});export{L as default};
