import{d as f,T as b}from"./useMock.dd71c11f.js";import{_ as B}from"./TransactionsTable.609ecbc0.js";import{e as y,x as j,r as d,o as v,c as C,a as e,d as c,w as s,u as o,F,y as u,t as n}from"./vendor.a082a7f9.js";import"./index.81865a55.js";import"./shuffle.cbddf0eb.js";import"./transactions.598263c4.js";import"./blocks.1a1a22a4.js";const x=c("h2",null,"\u4EA4\u6613\u5217\u8868",-1),M=y({props:{address:String},setup(l){const m=j({id:l.address||"123"}),{data:t,error:E}=f(m);return(T,h)=>{var i;const r=d("a-descriptions-item"),p=d("a-descriptions"),_=d("a-divider");return v(),C(F,null,[e(b,{title:"\u5730\u5740\u8BE6\u60C5"}),c("div",null,[e(p,{title:l.address,bordered:""},{default:s(()=>[e(r,{label:"\u4F59\u989D"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.balance),1)]}),_:1}),e(r,{label:"\u4EA4\u6613\u6570"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.transactionCount),1)]}),_:1}),e(r,{label:"\u603B\u652F\u51FA"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.totalSent),1)]}),_:1}),e(r,{label:"\u603B\u6536\u5165"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.totalReceived),1)]}),_:1}),e(r,{label:"\u603B\u624B\u7EED\u8D39"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.totalFees),1)]}),_:1}),e(r,{label:"\u8F6C\u8D26\u6B21\u6570"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.tokenTransferCount),1)]}),_:1})]),_:1},8,["title"])]),e(_),x,e(B,{data:(i=o(t))==null?void 0:i.transactions},null,8,["data"])],64)}}});export{M as default};
