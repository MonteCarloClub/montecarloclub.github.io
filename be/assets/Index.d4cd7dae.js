import{a as x,T as k}from"./useMock.bd5cdeff.js";import{e as w,x as I,r as a,o,c as b,a as s,w as t,d as C,u as r,g as c,y as d,t as l,h as _}from"./vendor.a082a7f9.js";import"./index.0bcc51fc.js";import"./transactions.598263c4.js";import"./blocks.1a1a22a4.js";const g=[{title:"\u9AD8\u5EA6",dataIndex:"id",width:100},{title:"\u51FA\u5757\u65F6\u95F4",dataIndex:"time",width:160},{title:"\u4EA4\u6613\u6570\u91CF",dataIndex:"transaction_count",width:80},{title:"\u8C03\u7528\u6570\u91CF",dataIndex:"call_count",width:80},{title:"\u77FF\u5DE5",dataIndex:"miner",ellipsis:!0},{title:"\u5956\u52B1 / USD",dataIndex:"reward_usd",width:180},{title:"\u8D39\u7528 / USD",dataIndex:"fee_total_usd",width:180},{title:"\u6D88\u8017 / Gas",dataIndex:"gas_used",width:100},{title:"\u4E0A\u9650 / Gas",dataIndex:"gas_limit",width:120,align:"right"}],y=d("\u5237\u65B0"),S=w({setup(B){const n=I({s:"id(desc)",limit:10,offset:0}),{data:m,error:D}=x(n);function p(){n.offset+=10}return(F,A)=>{const f=a("a-button"),i=a("router-link"),h=a("a-table");return o(),b("div",null,[s(k,{title:"\u533A\u5757\u5217\u8868"},{default:t(()=>[s(f,{type:"primary",onClick:p},{default:t(()=>[y]),_:1})]),_:1}),C("div",null,[s(h,{columns:r(g),"data-source":r(m),size:"middle",pagination:{position:["bottomCenter"]}},{bodyCell:t(({column:u,text:e})=>[u.dataIndex==="id"?(o(),c(i,{key:0,to:"/block/"+e},{default:t(()=>[d(l(e),1)]),_:2},1032,["to"])):_("",!0),u.dataIndex==="miner"?(o(),c(i,{key:1,to:"/address/"+e},{default:t(()=>[d(l(e),1)]),_:2},1032,["to"])):_("",!0)]),_:1},8,["columns","data-source"])])])}}});export{S as default};
