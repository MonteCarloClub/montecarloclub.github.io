import{b as v}from"./useMock.aee5a14d.js";import{T as g}from"./Title.3ec1fd38.js";import{I as d}from"./Item.991ad426.js";import{_ as x}from"./index.53d3be81.js";import{e as D,x as y,r as p,o as n,c as k,a,d as r,w as t,F as B,y as s,t as l,u as o,g as m}from"./vendor.b3082d65.js";import"./shuffle.cbddf0eb.js";const E={class:"info"},b=s(" \u5931\u8D25 "),C=s(" \u6210\u529F "),I=s("r : "),j={style:{margin:"6px 0"}},F=s("s : "),T=s("v : "),A={style:{"border-left":"lightgray 2px solid","padding-left":"6px",color:"gray"}},G=D({props:{hash:String},setup(c){const h=y({id:c.hash||"123"}),{data:u,error:N}=v(h);return(V,w)=>{const i=p("a-tag"),f=p("router-link");return n(),k(B,null,[a(g,{title:"\u4EA4\u6613\u8BE6\u60C5"}),r("div",E,[a(d,{title:"\u54C8\u5E0C"},{default:t(()=>[s(l(c.hash),1)]),_:1}),a(d,{title:"\u72B6\u6001"},{default:t(()=>{var e;return[((e=o(u))==null?void 0:e.failed)?(n(),m(i,{key:0,color:"default"},{default:t(()=>[b]),_:1})):(n(),m(i,{key:1,color:"#000"},{default:t(()=>[C]),_:1}))]}),_:1}),a(d,{title:"\u533A\u5757 id"},{default:t(()=>{var e;return[s(l((e=o(u))==null?void 0:e.block_id),1)]}),_:1}),a(d,{title:"\u65F6\u95F4"},{default:t(()=>{var e;return[s(l((e=o(u))==null?void 0:e.time),1)]}),_:1}),a(d,{title:"\u53D1\u9001\u8005"},{default:t(()=>{var e;return[a(f,{to:"/address/"+((e=o(u))==null?void 0:e.sender)},{default:t(()=>{var _;return[s(l((_=o(u))==null?void 0:_.sender),1)]}),_:1},8,["to"])]}),_:1}),a(d,{title:"\u63A5\u6536\u65B9"},{default:t(()=>{var e;return[a(f,{to:"/address/"+((e=o(u))==null?void 0:e.recipient)},{default:t(()=>{var _;return[s(l((_=o(u))==null?void 0:_.recipient),1)]}),_:1},8,["to"])]}),_:1}),a(d,{title:"\u7B7E\u540D"},{default:t(()=>[r("div",null,[I,a(i,null,{default:t(()=>{var e;return[s(l((e=o(u))==null?void 0:e.r),1)]}),_:1})]),r("div",j,[F,a(i,null,{default:t(()=>{var e;return[s(l((e=o(u))==null?void 0:e.s),1)]}),_:1})]),r("div",null,[T,a(i,null,{default:t(()=>{var e;return[s(l((e=o(u))==null?void 0:e.v),1)]}),_:1})])]),_:1}),a(d,{title:"\u91D1\u989D"},{default:t(()=>{var e;return[s(l((e=o(u))==null?void 0:e.value_usd)+" (USD)",1)]}),_:1}),a(d,{title:"\u624B\u7EED\u8D39"},{default:t(()=>{var e;return[s(l((e=o(u))==null?void 0:e.fee_usd)+" (USD)",1)]}),_:1}),a(d,{title:"Gas \u6D88\u8017"},{default:t(()=>{var e;return[s(l((e=o(u))==null?void 0:e.gas_used)+" (Gas)",1)]}),_:1}),a(d,{title:"Gas \u4EF7\u683C"},{default:t(()=>{var e;return[s(l((e=o(u))==null?void 0:e.gas_price),1)]}),_:1}),a(d,{title:"Gas \u4E0A\u9650"},{default:t(()=>{var e;return[s(l((e=o(u))==null?void 0:e.gas_limit),1)]}),_:1}),a(d,{title:"Input Data"},{default:t(()=>{var e;return[r("div",A,l((e=o(u))==null?void 0:e.input_hex),1)]}),_:1})])],64)}}});var K=x(G,[["__scopeId","data-v-c9f82050"]]);export{K as default};
