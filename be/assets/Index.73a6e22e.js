import{e as m,r as u,o as a,g as i,w as e,y as r,t as p,h as f,u as h,x as b,c as k,a as l,d as w}from"./vendor.a082a7f9.js";import{a as I}from"./useMock.ba79867d.js";import{T as C}from"./Title.f3812390.js";import"./shuffle.cbddf0eb.js";import"./transactions.598263c4.js";import"./index.be8273c2.js";const y=[{title:"\u9AD8\u5EA6",dataIndex:"id",width:100},{title:"\u51FA\u5757\u65F6\u95F4",dataIndex:"time",width:180},{title:"\u4EA4\u6613\u6570\u91CF",dataIndex:"transaction_count",width:80},{title:"\u8C03\u7528\u6570\u91CF",dataIndex:"call_count",width:80},{title:"\u77FF\u5DE5",dataIndex:"miner",ellipsis:!0},{title:"\u5956\u52B1 / USD",dataIndex:"reward_usd",width:180},{title:"\u8D39\u7528 / USD",dataIndex:"fee_total_usd",width:180},{title:"\u6D88\u8017 / Gas",dataIndex:"gas_used",width:100},{title:"\u4E0A\u9650 / Gas",dataIndex:"gas_limit",width:120,align:"right"}],g=m({props:{data:Array},setup(c){return(o,_)=>{const s=u("router-link"),d=u("a-table");return a(),i(d,{columns:h(y),"data-source":c.data,size:"middle",pagination:{position:["bottomCenter"]}},{bodyCell:e(({column:n,text:t})=>[n.dataIndex==="id"?(a(),i(s,{key:0,to:"/block/"+t},{default:e(()=>[r(p(t),1)]),_:2},1032,["to"])):f("",!0),n.dataIndex==="miner"?(a(),i(s,{key:1,to:"/address/"+t},{default:e(()=>[r(p(t),1)]),_:2},1032,["to"])):f("",!0)]),_:1},8,["columns","data-source"])}}}),A=r("\u5237\u65B0"),N=m({setup(c){const o=b({s:"id(desc)",limit:10,offset:0}),{data:_,error:s}=I(o);function d(){o.offset+=10}return(n,t)=>{const x=u("a-button");return a(),k("div",null,[l(C,{title:"\u533A\u5757\u5217\u8868"},{default:e(()=>[l(x,{type:"primary",onClick:d},{default:e(()=>[A]),_:1})]),_:1}),w("div",null,[l(g,{data:h(_)},null,8,["data"])])])}}});export{N as default};
