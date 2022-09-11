import{b as v}from"./useMock.94222097.js";import{T as g}from"./Title.eb06949d.js";import{I as d}from"./Item.76cc78db.js";import{_ as x}from"./index.dc65e433.js";import{e as D,x as y,r as p,o as n,c as k,a as s,d as r,w as e,F as B,y as a,t as l,u as o,g as m}from"./vendor.08ac5dc4.js";import"./shuffle.cbddf0eb.js";const E={class:"info"},b=a(" \u6210\u529F "),C=a(" \u5931\u8D25 "),I=a("r : "),j={style:{margin:"6px 0"}},F=a("s : "),T=a("v : "),A={style:{"border-left":"lightgray 2px solid","padding-left":"6px",color:"gray"}},G=D({props:{hash:String},setup(c){const h=y({id:c.hash||"123"}),{data:u,error:N}=v(h);return(V,w)=>{const i=p("a-tag"),f=p("router-link");return n(),k(B,null,[s(g,{title:"\u4EA4\u6613\u8BE6\u60C5"}),r("div",E,[s(d,{title:"\u54C8\u5E0C"},{default:e(()=>[a(l(c.hash),1)]),_:1}),s(d,{title:"\u72B6\u6001"},{default:e(()=>{var t;return[((t=o(u))==null?void 0:t.status)==="success"?(n(),m(i,{key:0,color:"#000"},{default:e(()=>[b]),_:1})):(n(),m(i,{key:1,color:"default"},{default:e(()=>[C]),_:1}))]}),_:1}),s(d,{title:"\u533A\u5757 id"},{default:e(()=>{var t;return[a(l((t=o(u))==null?void 0:t.block_id),1)]}),_:1}),s(d,{title:"\u65F6\u95F4"},{default:e(()=>{var t;return[a(l((t=o(u))==null?void 0:t.time),1)]}),_:1}),s(d,{title:"\u53D1\u9001\u8005"},{default:e(()=>{var t;return[s(f,{to:"/address/"+((t=o(u))==null?void 0:t.sender)},{default:e(()=>{var _;return[a(l((_=o(u))==null?void 0:_.sender),1)]}),_:1},8,["to"])]}),_:1}),s(d,{title:"\u63A5\u6536\u65B9"},{default:e(()=>{var t;return[s(f,{to:"/address/"+((t=o(u))==null?void 0:t.recipient)},{default:e(()=>{var _;return[a(l((_=o(u))==null?void 0:_.recipient),1)]}),_:1},8,["to"])]}),_:1}),s(d,{title:"\u7B7E\u540D"},{default:e(()=>[r("div",null,[I,s(i,null,{default:e(()=>{var t;return[a(l((t=o(u))==null?void 0:t.r),1)]}),_:1})]),r("div",j,[F,s(i,null,{default:e(()=>{var t;return[a(l((t=o(u))==null?void 0:t.s),1)]}),_:1})]),r("div",null,[T,s(i,null,{default:e(()=>{var t;return[a(l((t=o(u))==null?void 0:t.v),1)]}),_:1})])]),_:1}),s(d,{title:"\u91D1\u989D"},{default:e(()=>{var t;return[a(l((t=o(u))==null?void 0:t.value_usd)+" (USD)",1)]}),_:1}),s(d,{title:"\u624B\u7EED\u8D39"},{default:e(()=>{var t;return[a(l((t=o(u))==null?void 0:t.fee_usd)+" (USD)",1)]}),_:1}),s(d,{title:"Gas \u6D88\u8017"},{default:e(()=>{var t;return[a(l((t=o(u))==null?void 0:t.gas_used)+" (Gas)",1)]}),_:1}),s(d,{title:"Gas \u4EF7\u683C"},{default:e(()=>{var t;return[a(l((t=o(u))==null?void 0:t.gas_price),1)]}),_:1}),s(d,{title:"Gas \u4E0A\u9650"},{default:e(()=>{var t;return[a(l((t=o(u))==null?void 0:t.gas_limit),1)]}),_:1}),s(d,{title:"Input Data"},{default:e(()=>{var t;return[r("div",A,l((t=o(u))==null?void 0:t.input_hex),1)]}),_:1})])],64)}}});var K=x(G,[["__scopeId","data-v-7da37127"]]);export{K as default};
