import{h as l,r as c,o as e,c as o,w as d,D as m,t as p,j as _,u as f,C as x,d as k,e as h,F as w}from"./vendor.df1aa6d9.js";import{u as C}from"./useMock.2dd1732d.js";import{T as I}from"./Title.6b9fb196.js";import"./shuffle.9353e8bb.js";import"./request.e8322e00.js";import"./index.fd6211ef.js";const b=[{title:"\u9AD8\u5EA6",dataIndex:"id",width:100},{title:"\u51FA\u5757\u65F6\u95F4",dataIndex:"time",width:180},{title:"\u4EA4\u6613\u6570\u91CF",dataIndex:"transaction_count",width:80},{title:"\u8C03\u7528\u6570\u91CF",dataIndex:"call_count",width:80},{title:"\u77FF\u5DE5",dataIndex:"miner",ellipsis:!0},{title:"\u5956\u52B1 / Gas",dataIndex:"reward",width:180},{title:"\u6D88\u8017 / Gas",dataIndex:"gas_used",width:100},{title:"\u4E0A\u9650 / Gas",dataIndex:"gas_limit",width:120,align:"right"}],F=l({props:{data:Array},setup(n){return(i,r)=>{const a=c("router-link"),u=c("a-table");return e(),o(u,{columns:f(b),"data-source":n.data,size:"middle",pagination:{position:["bottomCenter"]}},{bodyCell:d(({column:s,text:t})=>[s.dataIndex==="id"?(e(),o(a,{key:0,to:"/block/"+t},{default:d(()=>[m(p(t),1)]),_:2},1032,["to"])):_("",!0),s.dataIndex==="miner"?(e(),o(a,{key:1,to:"/address/"+t},{default:d(()=>[m(p(t),1)]),_:2},1032,["to"])):_("",!0)]),_:1},8,["columns","data-source"])}}}),E=l({setup(n){const i=x({s:"id(desc)",limit:10,offset:0}),{data:r,error:a}=C(i);return(u,s)=>(e(),k(w,null,[h(I,{title:"\u533A\u5757\u5217\u8868"}),h(F,{data:f(r)},null,8,["data"])],64))}});export{E as default};
