import{r as A,v as pe,x as Ke,y as ye,o as D,b as O,e as G,l as me,s as Je,t as be,z as xe,F as Me,d as _e,f as Ye,g as Ge,h as ke,i as Xe,j as et,B as tt}from"./vendor.2e2e4d27.js";import{_ as W}from"./index.27017b01.js";var Ie={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},X={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},rt=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],U={CSS:{},springs:{}};function S(e,t,n){return Math.min(Math.max(e,t),n)}function $(e,t){return e.indexOf(t)>-1}function ee(e,t){return e.apply(null,t)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return $(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e=="undefined"},nil:function(e){return l.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!Ie.hasOwnProperty(e)&&!X.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Te(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(n){return parseFloat(n)}):[]}function we(e,t){var n=Te(e),a=S(l.und(n[0])?1:n[0],.1,100),r=S(l.und(n[1])?100:n[1],.1,100),o=S(l.und(n[2])?10:n[2],.1,100),u=S(l.und(n[3])?0:n[3],.1,100),s=Math.sqrt(r/a),i=o/(2*Math.sqrt(r*a)),d=i<1?s*Math.sqrt(1-i*i):0,c=1,f=i<1?(i*s+-u)/d:-u+s;function p(y){var v=t?t*y/1e3:y;return i<1?v=Math.exp(-v*i*s)*(c*Math.cos(d*v)+f*Math.sin(d*v)):v=(c+f*v)*Math.exp(-v*s),y===0||y===1?y:1-v}function x(){var y=U.springs[e];if(y)return y;for(var v=1/6,b=0,_=0;;)if(b+=v,p(b)===1){if(_++,_>=16)break}else _=0;var h=b*v*1e3;return U.springs[e]=h,h}return t?p:x}function nt(e){return e===void 0&&(e=10),function(t){return Math.ceil(S(t,1e-6,1)*e)*(1/e)}}var at=function(){var e=11,t=1/(e-1);function n(c,f){return 1-3*f+3*c}function a(c,f){return 3*f-6*c}function r(c){return 3*c}function o(c,f,p){return((n(f,p)*c+a(f,p))*c+r(f))*c}function u(c,f,p){return 3*n(f,p)*c*c+2*a(f,p)*c+r(f)}function s(c,f,p,x,y){var v,b,_=0;do b=f+(p-f)/2,v=o(b,x,y)-c,v>0?p=b:f=b;while(Math.abs(v)>1e-7&&++_<10);return b}function i(c,f,p,x){for(var y=0;y<4;++y){var v=u(f,p,x);if(v===0)return f;var b=o(f,p,x)-c;f-=b/v}return f}function d(c,f,p,x){if(!(0<=c&&c<=1&&0<=p&&p<=1))return;var y=new Float32Array(e);if(c!==f||p!==x)for(var v=0;v<e;++v)y[v]=o(v*t,c,p);function b(_){for(var h=0,g=1,I=e-1;g!==I&&y[g]<=_;++g)h+=t;--g;var B=(_-y[g])/(y[g+1]-y[g]),M=h+B*t,E=u(M,c,p);return E>=.001?i(_,M,c,p):E===0?M:s(_,h,h+t,c,p)}return function(_){return c===f&&p===x||_===0||_===1?_:o(b(_),f,x)}}return d}(),Se=function(){var e={linear:function(){return function(a){return a}}},t={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var r,o=4;a<((r=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((r*3-2)/22-a,2)}},Elastic:function(a,r){a===void 0&&(a=1),r===void 0&&(r=.5);var o=S(a,1,10),u=S(r,.1,2);return function(s){return s===0||s===1?s:-o*Math.pow(2,10*(s-1))*Math.sin((s-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(a,r){t[a]=function(){return function(o){return Math.pow(o,r+2)}}}),Object.keys(t).forEach(function(a){var r=t[a];e["easeIn"+a]=r,e["easeOut"+a]=function(o,u){return function(s){return 1-r(o,u)(1-s)}},e["easeInOut"+a]=function(o,u){return function(s){return s<.5?r(o,u)(s*2)/2:1-r(o,u)(s*-2+2)/2}},e["easeOutIn"+a]=function(o,u){return function(s){return s<.5?(1-r(o,u)(1-s*2))/2:(r(o,u)(s*2-1)+1)/2}}}),e}();function te(e,t){if(l.fnc(e))return e;var n=e.split("(")[0],a=Se[n],r=Te(e);switch(n){case"spring":return we(e,t);case"cubicBezier":return ee(at,r);case"steps":return ee(nt,r);default:return ee(a,r)}}function Pe(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function q(e,t){for(var n=e.length,a=arguments.length>=2?arguments[1]:void 0,r=[],o=0;o<n;o++)if(o in e){var u=e[o];t.call(a,u,o,e)&&r.push(u)}return r}function Z(e){return e.reduce(function(t,n){return t.concat(l.arr(n)?Z(n):n)},[])}function Ce(e){return l.arr(e)?e:(l.str(e)&&(e=Pe(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function re(e,t){return e.some(function(n){return n===t})}function ne(e){var t={};for(var n in e)t[n]=e[n];return t}function ae(e,t){var n=ne(e);for(var a in e)n[a]=t.hasOwnProperty(a)?t[a]:e[a];return n}function Q(e,t){var n=ne(e);for(var a in t)n[a]=l.und(e[a])?t[a]:e[a];return n}function it(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function ot(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,function(s,i,d,c){return i+i+d+d+c+c}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),r=parseInt(a[1],16),o=parseInt(a[2],16),u=parseInt(a[3],16);return"rgba("+r+","+o+","+u+",1)"}function ut(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(t[1],10)/360,a=parseInt(t[2],10)/100,r=parseInt(t[3],10)/100,o=t[4]||1;function u(p,x,y){return y<0&&(y+=1),y>1&&(y-=1),y<1/6?p+(x-p)*6*y:y<1/2?x:y<2/3?p+(x-p)*(2/3-y)*6:p}var s,i,d;if(a==0)s=i=d=r;else{var c=r<.5?r*(1+a):r+a-r*a,f=2*r-c;s=u(f,c,n+1/3),i=u(f,c,n),d=u(f,c,n-1/3)}return"rgba("+s*255+","+i*255+","+d*255+","+o+")"}function st(e){if(l.rgb(e))return it(e);if(l.hex(e))return ot(e);if(l.hsl(e))return ut(e)}function C(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function ct(e){if($(e,"translate")||e==="perspective")return"px";if($(e,"rotate")||$(e,"skew"))return"deg"}function ie(e,t){return l.fnc(e)?e(t.target,t.id,t.total):e}function P(e,t){return e.getAttribute(t)}function oe(e,t,n){var a=C(t);if(re([n,"deg","rad","turn"],a))return t;var r=U.CSS[t+n];if(!l.und(r))return r;var o=100,u=document.createElement(e.tagName),s=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;s.appendChild(u),u.style.position="absolute",u.style.width=o+n;var i=o/u.offsetWidth;s.removeChild(u);var d=i*parseFloat(t);return U.CSS[t+n]=d,d}function Be(e,t,n){if(t in e.style){var a=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=e.style[t]||getComputedStyle(e).getPropertyValue(a)||"0";return n?oe(e,r,n):r}}function ue(e,t){if(l.dom(e)&&!l.inp(e)&&(!l.nil(P(e,t))||l.svg(e)&&e[t]))return"attribute";if(l.dom(e)&&re(rt,t))return"transform";if(l.dom(e)&&t!=="transform"&&Be(e,t))return"css";if(e[t]!=null)return"object"}function De(e){if(!!l.dom(e)){for(var t=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,a=new Map,r;r=n.exec(t);)a.set(r[1],r[2]);return a}}function ft(e,t,n,a){var r=$(t,"scale")?1:0+ct(t),o=De(e).get(t)||r;return n&&(n.transforms.list.set(t,o),n.transforms.last=t),a?oe(e,o,a):o}function se(e,t,n,a){switch(ue(e,t)){case"transform":return ft(e,t,a,n);case"css":return Be(e,t,n);case"attribute":return P(e,t);default:return e[t]||0}}function ce(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var a=C(e)||0,r=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return r+o+a;case"-":return r-o+a;case"*":return r*o+a}}function Ee(e,t){if(l.col(e))return st(e);if(/\s/g.test(e))return e;var n=C(e),a=n?e.substr(0,e.length-n.length):e;return t?a+t:a}function fe(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function lt(e){return Math.PI*2*P(e,"r")}function vt(e){return P(e,"width")*2+P(e,"height")*2}function dt(e){return fe({x:P(e,"x1"),y:P(e,"y1")},{x:P(e,"x2"),y:P(e,"y2")})}function Ae(e){for(var t=e.points,n=0,a,r=0;r<t.numberOfItems;r++){var o=t.getItem(r);r>0&&(n+=fe(a,o)),a=o}return n}function gt(e){var t=e.points;return Ae(e)+fe(t.getItem(t.numberOfItems-1),t.getItem(0))}function Oe(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return lt(e);case"rect":return vt(e);case"line":return dt(e);case"polyline":return Ae(e);case"polygon":return gt(e)}}function ht(e){var t=Oe(e);return e.setAttribute("stroke-dasharray",t),t}function pt(e){for(var t=e.parentNode;l.svg(t)&&l.svg(t.parentNode);)t=t.parentNode;return t}function Fe(e,t){var n=t||{},a=n.el||pt(e),r=a.getBoundingClientRect(),o=P(a,"viewBox"),u=r.width,s=r.height,i=n.viewBox||(o?o.split(" "):[0,0,u,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:s,vW:i[2],vH:i[3]}}function yt(e,t){var n=l.str(e)?Pe(e)[0]:e,a=t||100;return function(r){return{property:r,el:n,svg:Fe(n),totalLength:Oe(n)*(a/100)}}}function mt(e,t,n){function a(c){c===void 0&&(c=0);var f=t+c>=1?t+c:0;return e.el.getPointAtLength(f)}var r=Fe(e.el,e.svg),o=a(),u=a(-1),s=a(1),i=n?1:r.w/r.vW,d=n?1:r.h/r.vH;switch(e.property){case"x":return(o.x-r.x)*i;case"y":return(o.y-r.y)*d;case"angle":return Math.atan2(s.y-u.y,s.x-u.x)*180/Math.PI}}function Le(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Ee(l.pth(e)?e.totalLength:e,t)+"";return{original:a,numbers:a.match(n)?a.match(n).map(Number):[0],strings:l.str(e)||t?a.split(n):[]}}function le(e){var t=e?Z(l.arr(e)?e.map(Ce):Ce(e)):[];return q(t,function(n,a,r){return r.indexOf(n)===a})}function ze(e){var t=le(e);return t.map(function(n,a){return{target:n,id:a,total:t.length,transforms:{list:De(n)}}})}function bt(e,t){var n=ne(t);if(/^spring/.test(n.easing)&&(n.duration=we(n.easing)),l.arr(e)){var a=e.length,r=a===2&&!l.obj(e[0]);r?e={value:e}:l.fnc(t.duration)||(n.duration=t.duration/a)}var o=l.arr(e)?e:[e];return o.map(function(u,s){var i=l.obj(u)&&!l.pth(u)?u:{value:u};return l.und(i.delay)&&(i.delay=s?0:t.delay),l.und(i.endDelay)&&(i.endDelay=s===o.length-1?t.endDelay:0),i}).map(function(u){return Q(u,n)})}function xt(e){for(var t=q(Z(e.map(function(o){return Object.keys(o)})),function(o){return l.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),n={},a=function(o){var u=t[o];n[u]=e.map(function(s){var i={};for(var d in s)l.key(d)?d==u&&(i.value=s[d]):i[d]=s[d];return i})},r=0;r<t.length;r++)a(r);return n}function Mt(e,t){var n=[],a=t.keyframes;a&&(t=Q(xt(a),t));for(var r in t)l.key(r)&&n.push({name:r,tweens:bt(t[r],e)});return n}function _t(e,t){var n={};for(var a in e){var r=ie(e[a],t);l.arr(r)&&(r=r.map(function(o){return ie(o,t)}),r.length===1&&(r=r[0])),n[a]=r}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function kt(e,t){var n;return e.tweens.map(function(a){var r=_t(a,t),o=r.value,u=l.arr(o)?o[1]:o,s=C(u),i=se(t.target,e.name,s,t),d=n?n.to.original:i,c=l.arr(o)?o[0]:d,f=C(c)||C(i),p=s||f;return l.und(u)&&(u=d),r.from=Le(c,p),r.to=Le(ce(u,c),p),r.start=n?n.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=te(r.easing,r.duration),r.isPath=l.pth(o),r.isPathTargetInsideSVG=r.isPath&&l.svg(t.target),r.isColor=l.col(r.from.original),r.isColor&&(r.round=1),n=r,r})}var Ve={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,a,r){if(a.list.set(t,n),t===a.last||r){var o="";a.list.forEach(function(u,s){o+=s+"("+u+") "}),e.style.transform=o}}};function je(e,t){var n=ze(e);n.forEach(function(a){for(var r in t){var o=ie(t[r],a),u=a.target,s=C(o),i=se(u,r,s,a),d=s||C(i),c=ce(Ee(o,d),i),f=ue(u,r);Ve[f](u,r,c,a.transforms,!0)}})}function It(e,t){var n=ue(e.target,t.name);if(n){var a=kt(t,e),r=a[a.length-1];return{type:n,property:t.name,animatable:e,tweens:a,duration:r.end,delay:a[0].delay,endDelay:r.endDelay}}}function Tt(e,t){return q(Z(e.map(function(n){return t.map(function(a){return It(n,a)})})),function(n){return!l.und(n)})}function Re(e,t){var n=e.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},r={};return r.duration=n?Math.max.apply(Math,e.map(function(o){return a(o)+o.duration})):t.duration,r.delay=n?Math.min.apply(Math,e.map(function(o){return a(o)+o.delay})):t.delay,r.endDelay=n?r.duration-Math.max.apply(Math,e.map(function(o){return a(o)+o.duration-o.endDelay})):t.endDelay,r}var Ne=0;function wt(e){var t=ae(Ie,e),n=ae(X,e),a=Mt(n,e),r=ze(e.targets),o=Tt(r,a),u=Re(o,n),s=Ne;return Ne++,Q(t,{id:s,children:[],animatables:r,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var w=[],$e=function(){var e;function t(){!e&&(!He()||!m.suspendWhenDocumentHidden)&&w.length>0&&(e=requestAnimationFrame(n))}function n(r){for(var o=w.length,u=0;u<o;){var s=w[u];s.paused?(w.splice(u,1),o--):(s.tick(r),u++)}e=u>0?requestAnimationFrame(n):void 0}function a(){!m.suspendWhenDocumentHidden||(He()?e=cancelAnimationFrame(e):(w.forEach(function(r){return r._onDocumentVisibility()}),$e()))}return typeof document!="undefined"&&document.addEventListener("visibilitychange",a),t}();function He(){return!!document&&document.hidden}function m(e){e===void 0&&(e={});var t=0,n=0,a=0,r,o=0,u=null;function s(h){var g=window.Promise&&new Promise(function(I){return u=I});return h.finished=g,g}var i=wt(e);s(i);function d(){var h=i.direction;h!=="alternate"&&(i.direction=h!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,r.forEach(function(g){return g.reversed=i.reversed})}function c(h){return i.reversed?i.duration-h:h}function f(){t=0,n=c(i.currentTime)*(1/m.speed)}function p(h,g){g&&g.seek(h-g.timelineOffset)}function x(h){if(i.reversePlayback)for(var I=o;I--;)p(h,r[I]);else for(var g=0;g<o;g++)p(h,r[g])}function y(h){for(var g=0,I=i.animations,B=I.length;g<B;){var M=I[g],E=M.animatable,V=M.tweens,F=V.length-1,k=V[F];F&&(k=q(V,function(Qe){return h<Qe.end})[0]||k);for(var L=S(h-k.start-k.delay,0,k.duration)/k.duration,H=isNaN(L)?1:k.easing(L),T=k.to.strings,K=k.round,J=[],Ze=k.to.numbers.length,z=void 0,j=0;j<Ze;j++){var R=void 0,ve=k.to.numbers[j],de=k.from.numbers[j]||0;k.isPath?R=mt(k.value,H*ve,k.isPathTargetInsideSVG):R=de+H*(ve-de),K&&(k.isColor&&j>2||(R=Math.round(R*K)/K)),J.push(R)}var ge=T.length;if(!ge)z=J[0];else{z=T[0];for(var N=0;N<ge;N++){T[N];var he=T[N+1],Y=J[N];isNaN(Y)||(he?z+=Y+he:z+=Y+" ")}}Ve[M.type](E.target,M.property,z,E.transforms),M.currentValue=z,g++}}function v(h){i[h]&&!i.passThrough&&i[h](i)}function b(){i.remaining&&i.remaining!==!0&&i.remaining--}function _(h){var g=i.duration,I=i.delay,B=g-i.endDelay,M=c(h);i.progress=S(M/g*100,0,100),i.reversePlayback=M<i.currentTime,r&&x(M),!i.began&&i.currentTime>0&&(i.began=!0,v("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,v("loopBegin")),M<=I&&i.currentTime!==0&&y(0),(M>=B&&i.currentTime!==g||!g)&&y(g),M>I&&M<B?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,v("changeBegin")),v("change"),y(M)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,v("changeComplete")),i.currentTime=S(M,0,g),i.began&&v("update"),h>=g&&(n=0,b(),i.remaining?(t=a,v("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&d()):(i.paused=!0,i.completed||(i.completed=!0,v("loopComplete"),v("complete"),!i.passThrough&&"Promise"in window&&(u(),s(i)))))}return i.reset=function(){var h=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=h==="reverse",i.remaining=i.loop,r=i.children,o=r.length;for(var g=o;g--;)i.children[g].reset();(i.reversed&&i.loop!==!0||h==="alternate"&&i.loop===1)&&i.remaining++,y(i.reversed?i.duration:0)},i._onDocumentVisibility=f,i.set=function(h,g){return je(h,g),i},i.tick=function(h){a=h,t||(t=a),_((a+(n-t))*m.speed)},i.seek=function(h){_(c(h))},i.pause=function(){i.paused=!0,f()},i.play=function(){!i.paused||(i.completed&&i.reset(),i.paused=!1,w.push(i),f(),$e())},i.reverse=function(){d(),i.completed=!i.reversed,f()},i.restart=function(){i.reset(),i.play()},i.remove=function(h){var g=le(h);Ue(g,i)},i.reset(),i.autoplay&&i.play(),i}function We(e,t){for(var n=t.length;n--;)re(e,t[n].animatable.target)&&t.splice(n,1)}function Ue(e,t){var n=t.animations,a=t.children;We(e,n);for(var r=a.length;r--;){var o=a[r],u=o.animations;We(e,u),!u.length&&!o.children.length&&a.splice(r,1)}!n.length&&!a.length&&t.pause()}function St(e){for(var t=le(e),n=w.length;n--;){var a=w[n];Ue(t,a)}}function Pt(e,t){t===void 0&&(t={});var n=t.direction||"normal",a=t.easing?te(t.easing):null,r=t.grid,o=t.axis,u=t.from||0,s=u==="first",i=u==="center",d=u==="last",c=l.arr(e),f=parseFloat(c?e[0]:e),p=c?parseFloat(e[1]):0,x=C(c?e[1]:e)||0,y=t.start||0+(c?f:0),v=[],b=0;return function(_,h,g){if(s&&(u=0),i&&(u=(g-1)/2),d&&(u=g-1),!v.length){for(var I=0;I<g;I++){if(!r)v.push(Math.abs(u-I));else{var B=i?(r[0]-1)/2:u%r[0],M=i?(r[1]-1)/2:Math.floor(u/r[0]),E=I%r[0],V=Math.floor(I/r[0]),F=B-E,k=M-V,L=Math.sqrt(F*F+k*k);o==="x"&&(L=-F),o==="y"&&(L=-k),v.push(L)}b=Math.max.apply(Math,v)}a&&(v=v.map(function(T){return a(T/b)*b})),n==="reverse"&&(v=v.map(function(T){return o?T<0?T*-1:-T:Math.abs(b-T)}))}var H=c?(p-f)/b:f;return y+H*(Math.round(v[h]*100)/100)+x}}function Ct(e){e===void 0&&(e={});var t=m(e);return t.duration=0,t.add=function(n,a){var r=w.indexOf(t),o=t.children;r>-1&&w.splice(r,1);function u(p){p.passThrough=!0}for(var s=0;s<o.length;s++)u(o[s]);var i=Q(n,ae(X,e));i.targets=i.targets||e.targets;var d=t.duration;i.autoplay=!1,i.direction=t.direction,i.timelineOffset=l.und(a)?d:ce(a,d),u(t),t.seek(i.timelineOffset);var c=m(i);u(c),o.push(c);var f=Re(o,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}m.version="3.2.1";m.speed=1;m.suspendWhenDocumentHidden=!0;m.running=w;m.remove=St;m.get=se;m.set=je;m.convertPx=oe;m.path=yt;m.setDashoffset=ht;m.stagger=Pt;m.timeline=Ct;m.easing=te;m.penner=Se;m.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};function ir(e,t,n){m({targets:e,left:t.x,top:t.y,easing:"easeInOutExpo",complete:n})}function or(e,t){m({targets:e,opacity:0,complete:t})}function ur(e,t){m({targets:e,opacity:1,complete:t})}const qe={roleImageSize:64},Bt={size:32},Dt=2e3;function sr(e,t){const n=A(0),a=A(!1),r=A(!0);let o;const u=()=>{a.value=!0,n.value===e.length&&(n.value=t),o=setTimeout(()=>{e[n.value].handler().then(()=>{n.value+=1,a.value=!1,r.value&&u()})},Dt)},s=()=>{r.value=!r.value,r.value&&u()};return pe(()=>{r.value&&u()}),Ke(()=>{r.value=!1,clearTimeout(o)}),{auto:r,running:a,currentStep:n,nextStep:u,toggleAuto:s}}var Et="/bank/assets/bank.4c65892f.svg",At="/bank/assets/user.d6002a18.svg",Ot="/bank/assets/block.a6672ab0.svg",Ft="/bank/assets/institution.53347f4f.svg",Lt="/bank/assets/ins-blue.e581a268.svg";const zt={bank:Et,user:At,block:Ot,institution:Ft,institutionBlue:Lt};function Vt(e,t,n){for(let a=0;a<e.length;a++){const r=e[a];r.x=Math.round(r.x/100*t),r.y=Math.round(r.y/100*n)}return e}function cr(e,t){let n=A(0),a=A(0),r=A([]);return pe(()=>{var u;const o=(u=e.value)==null?void 0:u.getClientRects();if(o&&(o==null?void 0:o.length)>0){const{width:s,height:i}=o[0];r.value=Vt(t,s,i),a.value=i,n.value=s}}),{screenWidth:n,screenHeight:a,nodes:r}}const jt=["src","alt"],Rt={key:0,class:"title"},Nt={props:{roleSize:{type:Number,default:qe.roleImageSize},title:{type:String,default:""},role:{type:String,default:"black"}},setup(e){const t=e,n=ye(()=>zt[t.role]);return(a,r)=>(D(),O(Me,null,[G("div",{class:"role",style:Je({width:e.roleSize})},[G("img",{src:me(n),alt:e.title},null,8,jt)],4),e.title?(D(),O("div",Rt,be(e.title),1)):xe("",!0)],64))}};var fr=W(Nt,[["__scopeId","data-v-0e3468ff"]]),$t="/bank/assets/contract.cff27a41.svg",Ht="/bank/assets/records.8aa7b441.svg",Wt="/bank/assets/verify.ac894034.svg",Ut="/bank/assets/off-chain.cbef024e.svg",qt="/bank/assets/transfer.bc2d9fff.svg",Zt="/bank/assets/transferred.2f307d42.svg",Qt="/bank/assets/address.2f41da18.svg";const Kt={contract:$t,record:Ht,credential:Wt,offChain:Ut,transfer:qt,transferred:Zt,address:Qt};const Jt={key:0,class:"title"},Yt=["src","alt","width"],Gt={props:{size:{type:Number,default:Bt.size},title:{type:String,default:""},type:{type:String,default:""}},setup(e){const t=e,n=ye(()=>Kt[t.type]);return(a,r)=>(D(),O("div",null,[e.title?(D(),O("div",Jt,be(e.title),1)):xe("",!0),G("img",{src:me(n),alt:e.title,width:e.size},null,8,Yt)]))}};var lr=W(Gt,[["__scopeId","data-v-6fd19fcd"]]);const Xt={class:"steps"},er=_e({props:{current:{type:Number,default:0},steps:{type:Array,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1}},setup(e){return(t,n)=>{const a=ke("a-step"),r=ke("a-steps");return D(),O("div",Xt,[Ye(r,{current:e.current},{default:Ge(()=>[(D(!0),O(Me,null,Xe(e.steps,o=>(D(),et(a,{key:o.title,title:o.title},null,8,["title"]))),128))]),_:1},8,["current"])])}}});var vr=W(er,[["__scopeId","data-v-90f47008"]]);function tr(e,t,n){const a=10,r=3,o="black",u=Math.atan2(n.y-t.y,n.x-t.x),s=36,i=t.x+s,d=t.y,c=n.x-s,f=n.y;e.save(),e.strokeStyle=o,e.beginPath(),e.moveTo(i,d),e.lineTo(c,f),e.lineWidth=r,e.stroke(),e.beginPath(),e.moveTo(c,f),e.lineTo(c-a*Math.cos(u-Math.PI/7),f-a*Math.sin(u-Math.PI/7)),e.lineTo(c-a*Math.cos(u+Math.PI/7),f-a*Math.sin(u+Math.PI/7)),e.lineTo(c,f),e.lineTo(c-a*Math.cos(u-Math.PI/7),f-a*Math.sin(u-Math.PI/7)),e.stroke(),e.restore()}const rr=_e({props:{width:{type:Number,default:800},height:{type:Number,default:500},nodes:{type:Array,default:null}},setup(e){const t=e,n=A(null);tt(()=>t.nodes.length,()=>{const r=n.value;!r||(r.width=t.width,r.height=t.height,a(r))});const a=r=>{const o=r.getContext("2d"),u=t.nodes.filter(v=>v.role==="block");if(u.sort((v,b)=>v.x-b.x),u.length<2||!o)return;for(let v=0;v<u.length-1;v++)tr(o,u[v],u[v+1]);o.setLineDash([6]);const s=u[0],i=u[u.length-1],d=qe.roleImageSize,c=32,f=i.x-s.x+c*2+d,p=d+c*2,x={x:s.x-c-d/2,y:s.y-c-d/2};o.strokeRect(x.x,x.y,f,p),o.font="14px Arial",o.textBaseline="top",o.textAlign="center";const y=(s.x+i.x)/2;o.fillText("\u957F\u4E09\u89D2\u5B66\u5206\u94F6\u884C\u533A\u5757\u94FE",y,s.y+d+12)};return(r,o)=>(D(),O("canvas",{ref_key:"canvasEl",ref:n,class:"path-canvas"},null,512))}});var dr=W(rr,[["__scopeId","data-v-33624ea1"]]);export{dr as B,lr as I,fr as R,vr as S,ur as a,cr as c,or as f,sr as g,ir as m};
