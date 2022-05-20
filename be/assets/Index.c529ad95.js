import{b as v,T as g}from"./useMock.36fc44f3.js";import{I as d}from"./Item.f7c714b1.js";import{_ as x}from"./index.ddb9a71a.js";import{e as D,x as k,r as p,o as n,c as y,a,d as r,w as e,F as B,y as s,t as l,u as o,g as m}from"./vendor.a082a7f9.js";import"./shuffle.cbddf0eb.js";import"./transactions.598263c4.js";import"./blocks.1a1a22a4.js";const E={class:"info"},b=s(" \u5931\u8D25 "),j=s(" \u6210\u529F "),C=s("r : "),I={style:{margin:"6px 0"}},F=s("s : "),A=s("v : "),G={style:{"border-left":"lightgray 2px solid","padding-left":"6px",color:"gray"}},S=D({props:{hash:String},setup(c){const h=k({id:c.hash||"123"}),{data:u,error:N}=v(h);return(V,w)=>{const i=p("a-tag"),f=p("router-link");return n(),y(B,null,[a(g,{title:"\u4EA4\u6613\u8BE6\u60C5"}),r("div",E,[a(d,{title:"\u54C8\u5E0C"},{default:e(()=>[s(l(c.hash),1)]),_:1}),a(d,{title:"\u72B6\u6001"},{default:e(()=>{var t;return[((t=o(u))==null?void 0:t.failed)?(n(),m(i,{key:0,color:"default"},{default:e(()=>[b]),_:1})):(n(),m(i,{key:1,color:"#000"},{default:e(()=>[j]),_:1}))]}),_:1}),a(d,{title:"\u533A\u5757 id"},{default:e(()=>{var t;return[s(l((t=o(u))==null?void 0:t.block_id),1)]}),_:1}),a(d,{title:"\u65F6\u95F4"},{default:e(()=>{var t;return[s(l((t=o(u))==null?void 0:t.time),1)]}),_:1}),a(d,{title:"\u53D1\u9001\u8005"},{default:e(()=>{var t;return[a(f,{to:"/address/"+((t=o(u))==null?void 0:t.sender)},{default:e(()=>{var _;return[s(l((_=o(u))==null?void 0:_.sender),1)]}),_:1},8,["to"])]}),_:1}),a(d,{title:"\u63A5\u6536\u65B9"},{default:e(()=>{var t;return[a(f,{to:"/address/"+((t=o(u))==null?void 0:t.recipient)},{default:e(()=>{var _;return[s(l((_=o(u))==null?void 0:_.recipient),1)]}),_:1},8,["to"])]}),_:1}),a(d,{title:"\u7B7E\u540D"},{default:e(()=>[r("div",null,[C,a(i,null,{default:e(()=>{var t;return[s(l((t=o(u))==null?void 0:t.r),1)]}),_:1})]),r("div",I,[F,a(i,null,{default:e(()=>{var t;return[s(l((t=o(u))==null?void 0:t.s),1)]}),_:1})]),r("div",null,[A,a(i,null,{default:e(()=>{var t;return[s(l((t=o(u))==null?void 0:t.v),1)]}),_:1})])]),_:1}),a(d,{title:"\u91D1\u989D"},{default:e(()=>{var t;return[s(l((t=o(u))==null?void 0:t.value_usd)+" (USD)",1)]}),_:1}),a(d,{title:"\u624B\u7EED\u8D39"},{default:e(()=>{var t;return[s(l((t=o(u))==null?void 0:t.fee_usd)+" (USD)",1)]}),_:1}),a(d,{title:"Gas \u6D88\u8017"},{default:e(()=>{var t;return[s(l((t=o(u))==null?void 0:t.gas_used)+" (Gas)",1)]}),_:1}),a(d,{title:"Gas \u4EF7\u683C"},{default:e(()=>{var t;return[s(l((t=o(u))==null?void 0:t.gas_price),1)]}),_:1}),a(d,{title:"Gas \u4E0A\u9650"},{default:e(()=>{var t;return[s(l((t=o(u))==null?void 0:t.gas_limit),1)]}),_:1}),a(d,{title:"Input Data"},{default:e(()=>{var t;return[r("div",G,l((t=o(u))==null?void 0:t.input_hex),1)]}),_:1})])],64)}}});var L=x(S,[["__scopeId","data-v-54d51350"]]);export{L as default};
