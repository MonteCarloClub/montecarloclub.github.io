import{d as f,T as b}from"./useMock.bd5cdeff.js";import{_ as B}from"./TransactionsTable.609ecbc0.js";import{e as y,x as v,r as l,o as C,c as F,a as e,d as i,w as s,u as o,F as j,y as u,t as n}from"./vendor.a082a7f9.js";import"./index.0bcc51fc.js";import"./transactions.598263c4.js";import"./blocks.1a1a22a4.js";const x=i("h2",null,"\u4EA4\u6613\u5217\u8868",-1),w=y({props:{address:String},setup(c){const m=v({id:c.address||"123"}),{data:t,error:E}=f(m);return(T,k)=>{var d;const r=l("a-descriptions-item"),p=l("a-descriptions"),_=l("a-divider");return C(),F(j,null,[e(b,{title:"\u5730\u5740\u8BE6\u60C5"}),i("div",null,[e(p,{title:c.address,bordered:""},{default:s(()=>[e(r,{label:"\u4F59\u989D"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.balance),1)]}),_:1}),e(r,{label:"\u4EA4\u6613\u6570"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.transactionCount),1)]}),_:1}),e(r,{label:"\u603B\u652F\u51FA"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.totalSent),1)]}),_:1}),e(r,{label:"\u603B\u6536\u5165"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.totalReceived),1)]}),_:1}),e(r,{label:"\u603B\u624B\u7EED\u8D39"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.totalFees),1)]}),_:1}),e(r,{label:"\u8F6C\u8D26\u6B21\u6570"},{default:s(()=>{var a;return[u(n((a=o(t))==null?void 0:a.summary.tokenTransferCount),1)]}),_:1})]),_:1},8,["title"])]),e(_),x,e(B,{data:(d=o(t))==null?void 0:d.transactions},null,8,["data"])],64)}}});export{w as default};
