import{_ as u}from"./TransactionTable.ed94117b.js";import{T as m}from"./Title.8a7ad7d1.js";import{u as l}from"./useMock.795e7feb.js";import{e as d,x as f,r as _,o as p,c as b,a,w as r,d as T,u as n,F as j,y as v}from"./vendor.b3082d65.js";import"./index.977f9a00.js";import"./shuffle.cbddf0eb.js";function x(o,e){e===void 0&&(e=200);let t;return(...s)=>{clearTimeout(t),t=setTimeout(()=>{o(...s)},e)}}const h=v("\u5237\u65B0"),g=d({setup(o){const e=f({q:"time(2022-05-17 15:49:30..2022-05-18 15:49:30)",s:"internal_value_usd(desc)",limit:10,offset:0}),{data:t,error:s}=l(e),i=x(()=>{e.offset+=e.limit},500);return(k,C)=>{const c=_("a-button");return p(),b(j,null,[a(m,{title:"\u4EA4\u6613\u5217\u8868"},{default:r(()=>[a(c,{type:"primary",onClick:n(i)},{default:r(()=>[h]),_:1},8,["onClick"])]),_:1}),T("div",null,[a(u,{data:n(t)},null,8,["data"])])],64)}}});export{g as default};
