import{_ as c,r as f}from"./index.0ea5da9c.js";import{e as _,x as b,r as o,o as v,g as w,w as t,E as F,a,y as h}from"./vendor.08ac5dc4.js";const S=_({setup(){return{formState:b({username:"",password:"",remember:!0}),onFinish:u=>{f.replace("/user/0x77777778c7577dc7629e48dd0590cc48be0314b4"),F.success("\u767B\u5F55\u6210\u529F",5)}}}}),B=h("\u767B\u5F55");function y(e,n,u,g,x,C){const m=o("a-input"),s=o("a-form-item"),p=o("a-input-password"),l=o("a-button"),d=o("a-form"),i=o("a-card");return v(),w(i,{hoverable:"",style:{width:"480px",margin:"10% auto"},title:"\u767B\u5F55"},{default:t(()=>[a(d,{model:e.formState,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:e.onFinish,labelAlign:"left"},{default:t(()=>[a(s,{label:"\u7528\u6237\u540D",name:"username"},{default:t(()=>[a(m,{value:e.formState.username,"onUpdate:value":n[0]||(n[0]=r=>e.formState.username=r)},null,8,["value"])]),_:1}),a(s,{label:"\u5BC6\u7801",name:"password"},{default:t(()=>[a(p,{value:e.formState.password,"onUpdate:value":n[1]||(n[1]=r=>e.formState.password=r)},null,8,["value"])]),_:1}),a(s,{"wrapper-col":{offset:4,span:20}},{default:t(()=>[a(l,{type:"primary","html-type":"submit"},{default:t(()=>[B]),_:1})]),_:1})]),_:1},8,["model","onFinish"])]),_:1})}var k=c(S,[["render",y]]);export{k as default};
