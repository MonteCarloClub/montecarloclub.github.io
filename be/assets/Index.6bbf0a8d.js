import{c as B}from"./useMock.aee5a14d.js";import{A as i}from"./AntListItem.4728299b.js";import{L as b}from"./ListItem.dfa0758f.js";import{S as m}from"./SubTitle.3fce1d27.js";import{_ as F}from"./index.898767ad.js";import{e as k,x as y,r as n,o as _,c as f,a as t,w as a,d as D,F as p,y as r,t as d,u as s,v as j,g as I}from"./vendor.b3082d65.js";import"./shuffle.cbddf0eb.js";const L={class:"container"},S=k({props:{height:String},setup(c){const h=c,x={title:{index:"hash"},subTitle:{index:"time"},desc:{index:"value_usd",process:l=>l+" USD"},subDesc:{index:"gas_used",process:l=>l+" Gas"}},A=y({id:h.height||"123"}),{data:u,error:T}=B(A);return(l,w)=>{const E=n("router-link"),C=n("a-list"),g=n("a-timeline-item"),v=n("a-timeline");return _(),f(p,null,[t(m,{title:"\u533A\u5757\u8BE6\u60C5",type:"h1"}),t(C,{bordered:""},{default:a(()=>[t(i,{title:"\u533A\u5757\u9AD8\u5EA6"},{default:a(()=>[r(d(c.height),1)]),_:1}),t(i,{title:"\u54C8\u5E0C"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.hash),1)]}),_:1}),t(i,{title:"\u51FA\u5757\u65F6\u95F4"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.timestamp),1)]}),_:1}),t(i,{title:"\u77FF\u5DE5"},{default:a(()=>{var e;return[t(E,{to:"/address/"+((e=s(u))==null?void 0:e.header.miner)},{default:a(()=>{var o;return[r(d((o=s(u))==null?void 0:o.header.miner),1)]}),_:1},8,["to"])]}),_:1}),t(i,{title:"\u5956\u52B1"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.blockReward),1)]}),_:1}),t(i,{title:"\u4EA4\u6613\u6570\u91CF"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.transactionCount),1)]}),_:1}),t(i,{title:"\u96BE\u5EA6"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.difficulty),1)]}),_:1}),t(i,{title:"\u603B\u96BE\u5EA6"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.totalDifficulty),1)]}),_:1}),t(i,{title:"\u5927\u5C0F"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.size),1)]}),_:1}),t(i,{title:"\u72B6\u6001\u54C8\u5E0C"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.stateRoot),1)]}),_:1}),t(i,{title:"\u7236\u533A\u5757\u54C8\u5E0C"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.parentHash),1)]}),_:1}),t(i,{title:"Gas \u4E0A\u9650"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.gasLimit),1)]}),_:1}),t(i,{title:"Gas \u6D88\u8017"},{default:a(()=>{var e;return[r(d((e=s(u))==null?void 0:e.header.gasUsed),1)]}),_:1})]),_:1}),t(m,{title:"\u4EA4\u6613\u5217\u8868",type:"h2"}),D("div",L,[t(v,null,{default:a(()=>{var e;return[(_(!0),f(p,null,j((e=s(u))==null?void 0:e.transactions,(o,G)=>(_(),I(g,null,{default:a(()=>[t(b,{data:o,map:x},null,8,["data"])]),_:2},1024))),256))]}),_:1})])],64)}}});var q=F(S,[["__scopeId","data-v-14504026"]]);export{q as default};
