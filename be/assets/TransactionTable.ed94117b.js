import{e as h,r as s,o as a,g as d,w as n,y as u,t as r,h as o,a as I,u as l,z as m}from"./vendor.b3082d65.js";const x=[{title:"\u4EA4\u6613\u54C8\u5E0C",dataIndex:"hash",ellipsis:!0},{title:"\u533A\u5757",dataIndex:"block_id",width:100},{title:"\u4EA4\u6613\u65E5\u671F",dataIndex:"time",width:180},{title:"\u4ED8\u6B3E\u65B9",dataIndex:"sender",ellipsis:!0},{title:" ",dataIndex:"to_icon",width:30},{title:"\u6536\u6B3E\u65B9",dataIndex:"recipient",ellipsis:!0},{title:"\u8F93\u5165\u5927\u5C0F / KB",dataIndex:"input_size",width:120,align:"center"},{title:"Gas \u6D88\u8017",dataIndex:"gas_used",width:100,align:"right"}],f=h({props:{data:Array},setup(c){return(k,C)=>{const i=s("router-link"),_=s("a-space"),p=s("a-table");return a(),d(p,{columns:l(x),"data-source":c.data,size:"middle",pagination:{position:["bottomCenter"]}},{bodyCell:n(({column:t,text:e})=>[t.dataIndex==="hash"?(a(),d(i,{key:0,to:"/transaction/"+e},{default:n(()=>[u(r(e),1)]),_:2},1032,["to"])):o("",!0),t.dataIndex==="block_id"?(a(),d(i,{key:1,to:"/block/"+e},{default:n(()=>[u(r(e),1)]),_:2},1032,["to"])):o("",!0),t.dataIndex==="to_icon"?(a(),d(_,{key:2},{default:n(()=>[I(l(m))]),_:1})):o("",!0),t.dataIndex==="sender"||t.dataIndex==="recipient"?(a(),d(i,{key:3,to:"/address/"+e},{default:n(()=>[u(r(e),1)]),_:2},1032,["to"])):o("",!0)]),_:1},8,["columns","data-source"])}}});export{f as _};
