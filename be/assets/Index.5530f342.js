import{_ as i,r as c}from"./index.bac2a1a3.js";import{f as _,x as b,r as o,o as v,c as w,w as t,E as F,e as a,y as h}from"./vendor.fbe5f6a1.js";const S=_({setup(){return{formState:b({username:"",password:"",remember:!0}),onFinish:u=>{c.replace("/user/0x77777778c7577dc7629e48dd0590cc48be0314b4"),F.success("\u767B\u5F55\u6210\u529F",5)}}}}),B=h("\u767B\u5F55");function y(e,n,u,x,C,$){const m=o("a-input"),s=o("a-form-item"),p=o("a-input-password"),l=o("a-button"),d=o("a-form"),f=o("a-card");return v(),w(f,{hoverable:"",style:{width:"480px",margin:"10% auto"},title:"\u767B\u5F55"},{default:t(()=>[a(d,{model:e.formState,name:"basic","label-col":{span:4},"wrapper-col":{span:20},autocomplete:"off",onFinish:e.onFinish,labelAlign:"left"},{default:t(()=>[a(s,{label:"\u7528\u6237\u540D",name:"username"},{default:t(()=>[a(m,{value:e.formState.username,"onUpdate:value":n[0]||(n[0]=r=>e.formState.username=r)},null,8,["value"])]),_:1}),a(s,{label:"\u5BC6\u7801",name:"password"},{default:t(()=>[a(p,{value:e.formState.password,"onUpdate:value":n[1]||(n[1]=r=>e.formState.password=r)},null,8,["value"])]),_:1}),a(s,{"wrapper-col":{offset:4,span:20}},{default:t(()=>[a(l,{type:"primary","html-type":"submit"},{default:t(()=>[B]),_:1})]),_:1})]),_:1},8,["model","onFinish"])]),_:1})}var k=i(S,[["render",y]]);export{k as default};
