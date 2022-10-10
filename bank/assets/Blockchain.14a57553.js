import{c as xe,s as Xe,m as et,_ as W,r as be,i as tt}from"./index.e278d5fd.js";import{r as P,x as _e,y as rt,v as X,z as we,o as D,b as A,e as H,u as Me,n as ke,t as Ie,B as Te,F as ee,d as te,f as nt,g as at,i as Pe,j as it,k as ot}from"./vendor.be07e58e.js";var Se={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},re={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},st=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],q={CSS:{},springs:{}};function C(e,t,r){return Math.min(Math.max(e,t),r)}function $(e,t){return e.indexOf(t)>-1}function ne(e,t){return e.apply(null,t)}var d={arr:function(e){return Array.isArray(e)},obj:function(e){return $(Object.prototype.toString.call(e),"Object")},pth:function(e){return d.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||d.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e=="undefined"},nil:function(e){return d.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return d.hex(e)||d.rgb(e)||d.hsl(e)},key:function(e){return!Se.hasOwnProperty(e)&&!re.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function Ce(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map(function(r){return parseFloat(r)}):[]}function Be(e,t){var r=Ce(e),a=C(d.und(r[0])?1:r[0],.1,100),n=C(d.und(r[1])?100:r[1],.1,100),o=C(d.und(r[2])?10:r[2],.1,100),s=C(d.und(r[3])?0:r[3],.1,100),u=Math.sqrt(n/a),i=o/(2*Math.sqrt(n*a)),g=i<1?u*Math.sqrt(1-i*i):0,c=1,l=i<1?(i*u+-s)/g:-s+u;function v(h){var f=t?t*h/1e3:h;return i<1?f=Math.exp(-f*i*u)*(c*Math.cos(g*f)+l*Math.sin(g*f)):f=(c+l*f)*Math.exp(-f*u),h===0||h===1?h:1-f}function m(){var h=q.springs[e];if(h)return h;for(var f=1/6,w=0,M=0;;)if(w+=f,v(w)===1){if(M++,M>=16)break}else M=0;var p=w*f*1e3;return q.springs[e]=p,p}return t?v:m}function ut(e){return e===void 0&&(e=10),function(t){return Math.ceil(C(t,1e-6,1)*e)*(1/e)}}var ct=function(){var e=11,t=1/(e-1);function r(c,l){return 1-3*l+3*c}function a(c,l){return 3*l-6*c}function n(c){return 3*c}function o(c,l,v){return((r(l,v)*c+a(l,v))*c+n(l))*c}function s(c,l,v){return 3*r(l,v)*c*c+2*a(l,v)*c+n(l)}function u(c,l,v,m,h){var f,w,M=0;do w=l+(v-l)/2,f=o(w,m,h)-c,f>0?v=w:l=w;while(Math.abs(f)>1e-7&&++M<10);return w}function i(c,l,v,m){for(var h=0;h<4;++h){var f=s(l,v,m);if(f===0)return l;var w=o(l,v,m)-c;l-=w/f}return l}function g(c,l,v,m){if(!(0<=c&&c<=1&&0<=v&&v<=1))return;var h=new Float32Array(e);if(c!==l||v!==m)for(var f=0;f<e;++f)h[f]=o(f*t,c,v);function w(M){for(var p=0,y=1,x=e-1;y!==x&&h[y]<=M;++y)p+=t;--y;var I=(M-h[y])/(h[y+1]-h[y]),_=p+I*t,O=s(_,c,v);return O>=.001?i(M,_,c,v):O===0?_:u(M,p,p+t,c,v)}return function(M){return c===l&&v===m||M===0||M===1?M:o(w(M),l,m)}}return g}(),De=function(){var e={linear:function(){return function(a){return a}}},t={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var n,o=4;a<((n=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((n*3-2)/22-a,2)}},Elastic:function(a,n){a===void 0&&(a=1),n===void 0&&(n=.5);var o=C(a,1,10),s=C(n,.1,2);return function(u){return u===0||u===1?u:-o*Math.pow(2,10*(u-1))*Math.sin((u-1-s/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/s)}}},r=["Quad","Cubic","Quart","Quint","Expo"];return r.forEach(function(a,n){t[a]=function(){return function(o){return Math.pow(o,n+2)}}}),Object.keys(t).forEach(function(a){var n=t[a];e["easeIn"+a]=n,e["easeOut"+a]=function(o,s){return function(u){return 1-n(o,s)(1-u)}},e["easeInOut"+a]=function(o,s){return function(u){return u<.5?n(o,s)(u*2)/2:1-n(o,s)(u*-2+2)/2}},e["easeOutIn"+a]=function(o,s){return function(u){return u<.5?(1-n(o,s)(1-u*2))/2:(n(o,s)(u*2-1)+1)/2}}}),e}();function ae(e,t){if(d.fnc(e))return e;var r=e.split("(")[0],a=De[r],n=Ce(e);switch(r){case"spring":return Be(e,t);case"cubicBezier":return ne(ct,n);case"steps":return ne(ut,n);default:return ne(a,n)}}function Ee(e){try{var t=document.querySelectorAll(e);return t}catch{return}}function Z(e,t){for(var r=e.length,a=arguments.length>=2?arguments[1]:void 0,n=[],o=0;o<r;o++)if(o in e){var s=e[o];t.call(a,s,o,e)&&n.push(s)}return n}function Q(e){return e.reduce(function(t,r){return t.concat(d.arr(r)?Q(r):r)},[])}function Ae(e){return d.arr(e)?e:(d.str(e)&&(e=Ee(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function ie(e,t){return e.some(function(r){return r===t})}function oe(e){var t={};for(var r in e)t[r]=e[r];return t}function se(e,t){var r=oe(e);for(var a in e)r[a]=t.hasOwnProperty(a)?t[a]:e[a];return r}function K(e,t){var r=oe(e);for(var a in t)r[a]=d.und(e[a])?t[a]:e[a];return r}function lt(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function ft(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=e.replace(t,function(u,i,g,c){return i+i+g+g+c+c}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r),n=parseInt(a[1],16),o=parseInt(a[2],16),s=parseInt(a[3],16);return"rgba("+n+","+o+","+s+",1)"}function dt(e){var t=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),r=parseInt(t[1],10)/360,a=parseInt(t[2],10)/100,n=parseInt(t[3],10)/100,o=t[4]||1;function s(v,m,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?v+(m-v)*6*h:h<1/2?m:h<2/3?v+(m-v)*(2/3-h)*6:v}var u,i,g;if(a==0)u=i=g=n;else{var c=n<.5?n*(1+a):n+a-n*a,l=2*n-c;u=s(l,c,r+1/3),i=s(l,c,r),g=s(l,c,r-1/3)}return"rgba("+u*255+","+i*255+","+g*255+","+o+")"}function vt(e){if(d.rgb(e))return lt(e);if(d.hex(e))return ft(e);if(d.hsl(e))return dt(e)}function E(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function ht(e){if($(e,"translate")||e==="perspective")return"px";if($(e,"rotate")||$(e,"skew"))return"deg"}function ue(e,t){return d.fnc(e)?e(t.target,t.id,t.total):e}function B(e,t){return e.getAttribute(t)}function ce(e,t,r){var a=E(t);if(ie([r,"deg","rad","turn"],a))return t;var n=q.CSS[t+r];if(!d.und(n))return n;var o=100,s=document.createElement(e.tagName),u=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;u.appendChild(s),s.style.position="absolute",s.style.width=o+r;var i=o/s.offsetWidth;u.removeChild(s);var g=i*parseFloat(t);return q.CSS[t+r]=g,g}function Oe(e,t,r){if(t in e.style){var a=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=e.style[t]||getComputedStyle(e).getPropertyValue(a)||"0";return r?ce(e,n,r):n}}function le(e,t){if(d.dom(e)&&!d.inp(e)&&(!d.nil(B(e,t))||d.svg(e)&&e[t]))return"attribute";if(d.dom(e)&&ie(st,t))return"transform";if(d.dom(e)&&t!=="transform"&&Oe(e,t))return"css";if(e[t]!=null)return"object"}function Le(e){if(!!d.dom(e)){for(var t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map,n;n=r.exec(t);)a.set(n[1],n[2]);return a}}function gt(e,t,r,a){var n=$(t,"scale")?1:0+ht(t),o=Le(e).get(t)||n;return r&&(r.transforms.list.set(t,o),r.transforms.last=t),a?ce(e,o,a):o}function fe(e,t,r,a){switch(le(e,t)){case"transform":return gt(e,t,a,r);case"css":return Oe(e,t,r);case"attribute":return B(e,t);default:return e[t]||0}}function de(e,t){var r=/^(\*=|\+=|-=)/.exec(e);if(!r)return e;var a=E(e)||0,n=parseFloat(t),o=parseFloat(e.replace(r[0],""));switch(r[0][0]){case"+":return n+o+a;case"-":return n-o+a;case"*":return n*o+a}}function Fe(e,t){if(d.col(e))return vt(e);if(/\s/g.test(e))return e;var r=E(e),a=r?e.substr(0,e.length-r.length):e;return t?a+t:a}function ve(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function pt(e){return Math.PI*2*B(e,"r")}function yt(e){return B(e,"width")*2+B(e,"height")*2}function mt(e){return ve({x:B(e,"x1"),y:B(e,"y1")},{x:B(e,"x2"),y:B(e,"y2")})}function Ve(e){for(var t=e.points,r=0,a,n=0;n<t.numberOfItems;n++){var o=t.getItem(n);n>0&&(r+=ve(a,o)),a=o}return r}function xt(e){var t=e.points;return Ve(e)+ve(t.getItem(t.numberOfItems-1),t.getItem(0))}function ze(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return pt(e);case"rect":return yt(e);case"line":return mt(e);case"polyline":return Ve(e);case"polygon":return xt(e)}}function bt(e){var t=ze(e);return e.setAttribute("stroke-dasharray",t),t}function _t(e){for(var t=e.parentNode;d.svg(t)&&d.svg(t.parentNode);)t=t.parentNode;return t}function Re(e,t){var r=t||{},a=r.el||_t(e),n=a.getBoundingClientRect(),o=B(a,"viewBox"),s=n.width,u=n.height,i=r.viewBox||(o?o.split(" "):[0,0,s,u]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:s,h:u,vW:i[2],vH:i[3]}}function wt(e,t){var r=d.str(e)?Ee(e)[0]:e,a=t||100;return function(n){return{property:n,el:r,svg:Re(r),totalLength:ze(r)*(a/100)}}}function Mt(e,t,r){function a(c){c===void 0&&(c=0);var l=t+c>=1?t+c:0;return e.el.getPointAtLength(l)}var n=Re(e.el,e.svg),o=a(),s=a(-1),u=a(1),i=r?1:n.w/n.vW,g=r?1:n.h/n.vH;switch(e.property){case"x":return(o.x-n.x)*i;case"y":return(o.y-n.y)*g;case"angle":return Math.atan2(u.y-s.y,u.x-s.x)*180/Math.PI}}function je(e,t){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Fe(d.pth(e)?e.totalLength:e,t)+"";return{original:a,numbers:a.match(r)?a.match(r).map(Number):[0],strings:d.str(e)||t?a.split(r):[]}}function he(e){var t=e?Q(d.arr(e)?e.map(Ae):Ae(e)):[];return Z(t,function(r,a,n){return n.indexOf(r)===a})}function Ne(e){var t=he(e);return t.map(function(r,a){return{target:r,id:a,total:t.length,transforms:{list:Le(r)}}})}function kt(e,t){var r=oe(t);if(/^spring/.test(r.easing)&&(r.duration=Be(r.easing)),d.arr(e)){var a=e.length,n=a===2&&!d.obj(e[0]);n?e={value:e}:d.fnc(t.duration)||(r.duration=t.duration/a)}var o=d.arr(e)?e:[e];return o.map(function(s,u){var i=d.obj(s)&&!d.pth(s)?s:{value:s};return d.und(i.delay)&&(i.delay=u?0:t.delay),d.und(i.endDelay)&&(i.endDelay=u===o.length-1?t.endDelay:0),i}).map(function(s){return K(s,r)})}function It(e){for(var t=Z(Q(e.map(function(o){return Object.keys(o)})),function(o){return d.key(o)}).reduce(function(o,s){return o.indexOf(s)<0&&o.push(s),o},[]),r={},a=function(o){var s=t[o];r[s]=e.map(function(u){var i={};for(var g in u)d.key(g)?g==s&&(i.value=u[g]):i[g]=u[g];return i})},n=0;n<t.length;n++)a(n);return r}function Tt(e,t){var r=[],a=t.keyframes;a&&(t=K(It(a),t));for(var n in t)d.key(n)&&r.push({name:n,tweens:kt(t[n],e)});return r}function Pt(e,t){var r={};for(var a in e){var n=ue(e[a],t);d.arr(n)&&(n=n.map(function(o){return ue(o,t)}),n.length===1&&(n=n[0])),r[a]=n}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function St(e,t){var r;return e.tweens.map(function(a){var n=Pt(a,t),o=n.value,s=d.arr(o)?o[1]:o,u=E(s),i=fe(t.target,e.name,u,t),g=r?r.to.original:i,c=d.arr(o)?o[0]:g,l=E(c)||E(i),v=u||l;return d.und(s)&&(s=g),n.from=je(c,v),n.to=je(de(s,c),v),n.start=r?r.end:0,n.end=n.start+n.delay+n.duration+n.endDelay,n.easing=ae(n.easing,n.duration),n.isPath=d.pth(o),n.isPathTargetInsideSVG=n.isPath&&d.svg(t.target),n.isColor=d.col(n.from.original),n.isColor&&(n.round=1),r=n,n})}var We={css:function(e,t,r){return e.style[t]=r},attribute:function(e,t,r){return e.setAttribute(t,r)},object:function(e,t,r){return e[t]=r},transform:function(e,t,r,a,n){if(a.list.set(t,r),t===a.last||n){var o="";a.list.forEach(function(s,u){o+=u+"("+s+") "}),e.style.transform=o}}};function He(e,t){var r=Ne(e);r.forEach(function(a){for(var n in t){var o=ue(t[n],a),s=a.target,u=E(o),i=fe(s,n,u,a),g=u||E(i),c=de(Fe(o,g),i),l=le(s,n);We[l](s,n,c,a.transforms,!0)}})}function Ct(e,t){var r=le(e.target,t.name);if(r){var a=St(t,e),n=a[a.length-1];return{type:r,property:t.name,animatable:e,tweens:a,duration:n.end,delay:a[0].delay,endDelay:n.endDelay}}}function Bt(e,t){return Z(Q(e.map(function(r){return t.map(function(a){return Ct(r,a)})})),function(r){return!d.und(r)})}function $e(e,t){var r=e.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},n={};return n.duration=r?Math.max.apply(Math,e.map(function(o){return a(o)+o.duration})):t.duration,n.delay=r?Math.min.apply(Math,e.map(function(o){return a(o)+o.delay})):t.delay,n.endDelay=r?n.duration-Math.max.apply(Math,e.map(function(o){return a(o)+o.duration-o.endDelay})):t.endDelay,n}var Ue=0;function Dt(e){var t=se(Se,e),r=se(re,e),a=Tt(r,e),n=Ne(e.targets),o=Bt(n,a),s=$e(o,r),u=Ue;return Ue++,K(t,{id:u,children:[],animatables:n,animations:o,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}var S=[],qe=function(){var e;function t(){!e&&(!Ze()||!b.suspendWhenDocumentHidden)&&S.length>0&&(e=requestAnimationFrame(r))}function r(n){for(var o=S.length,s=0;s<o;){var u=S[s];u.paused?(S.splice(s,1),o--):(u.tick(n),s++)}e=s>0?requestAnimationFrame(r):void 0}function a(){!b.suspendWhenDocumentHidden||(Ze()?e=cancelAnimationFrame(e):(S.forEach(function(n){return n._onDocumentVisibility()}),qe()))}return typeof document!="undefined"&&document.addEventListener("visibilitychange",a),t}();function Ze(){return!!document&&document.hidden}function b(e){e===void 0&&(e={});var t=0,r=0,a=0,n,o=0,s=null;function u(p){var y=window.Promise&&new Promise(function(x){return s=x});return p.finished=y,y}var i=Dt(e);u(i);function g(){var p=i.direction;p!=="alternate"&&(i.direction=p!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,n.forEach(function(y){return y.reversed=i.reversed})}function c(p){return i.reversed?i.duration-p:p}function l(){t=0,r=c(i.currentTime)*(1/b.speed)}function v(p,y){y&&y.seek(p-y.timelineOffset)}function m(p){if(i.reversePlayback)for(var x=o;x--;)v(p,n[x]);else for(var y=0;y<o;y++)v(p,n[y])}function h(p){for(var y=0,x=i.animations,I=x.length;y<I;){var _=x[y],O=_.animatable,z=_.tweens,L=z.length-1,k=z[L];L&&(k=Z(z,function(Ge){return p<Ge.end})[0]||k);for(var F=C(p-k.start-k.delay,0,k.duration)/k.duration,U=isNaN(F)?1:k.easing(F),T=k.to.strings,J=k.round,Y=[],Ye=k.to.numbers.length,V=void 0,R=0;R<Ye;R++){var j=void 0,ge=k.to.numbers[R],pe=k.from.numbers[R]||0;k.isPath?j=Mt(k.value,U*ge,k.isPathTargetInsideSVG):j=pe+U*(ge-pe),J&&(k.isColor&&R>2||(j=Math.round(j*J)/J)),Y.push(j)}var ye=T.length;if(!ye)V=Y[0];else{V=T[0];for(var N=0;N<ye;N++){T[N];var me=T[N+1],G=Y[N];isNaN(G)||(me?V+=G+me:V+=G+" ")}}We[_.type](O.target,_.property,V,O.transforms),_.currentValue=V,y++}}function f(p){i[p]&&!i.passThrough&&i[p](i)}function w(){i.remaining&&i.remaining!==!0&&i.remaining--}function M(p){var y=i.duration,x=i.delay,I=y-i.endDelay,_=c(p);i.progress=C(_/y*100,0,100),i.reversePlayback=_<i.currentTime,n&&m(_),!i.began&&i.currentTime>0&&(i.began=!0,f("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,f("loopBegin")),_<=x&&i.currentTime!==0&&h(0),(_>=I&&i.currentTime!==y||!y)&&h(y),_>x&&_<I?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,f("changeBegin")),f("change"),h(_)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,f("changeComplete")),i.currentTime=C(_,0,y),i.began&&f("update"),p>=y&&(r=0,w(),i.remaining?(t=a,f("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&g()):(i.paused=!0,i.completed||(i.completed=!0,f("loopComplete"),f("complete"),!i.passThrough&&"Promise"in window&&(s(),u(i)))))}return i.reset=function(){var p=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=p==="reverse",i.remaining=i.loop,n=i.children,o=n.length;for(var y=o;y--;)i.children[y].reset();(i.reversed&&i.loop!==!0||p==="alternate"&&i.loop===1)&&i.remaining++,h(i.reversed?i.duration:0)},i._onDocumentVisibility=l,i.set=function(p,y){return He(p,y),i},i.tick=function(p){a=p,t||(t=a),M((a+(r-t))*b.speed)},i.seek=function(p){M(c(p))},i.pause=function(){i.paused=!0,l()},i.play=function(){!i.paused||(i.completed&&i.reset(),i.paused=!1,S.push(i),l(),qe())},i.reverse=function(){g(),i.completed=!i.reversed,l()},i.restart=function(){i.reset(),i.play()},i.remove=function(p){var y=he(p);Ke(y,i)},i.reset(),i.autoplay&&i.play(),i}function Qe(e,t){for(var r=t.length;r--;)ie(e,t[r].animatable.target)&&t.splice(r,1)}function Ke(e,t){var r=t.animations,a=t.children;Qe(e,r);for(var n=a.length;n--;){var o=a[n],s=o.animations;Qe(e,s),!s.length&&!o.children.length&&a.splice(n,1)}!r.length&&!a.length&&t.pause()}function Et(e){for(var t=he(e),r=S.length;r--;){var a=S[r];Ke(t,a)}}function At(e,t){t===void 0&&(t={});var r=t.direction||"normal",a=t.easing?ae(t.easing):null,n=t.grid,o=t.axis,s=t.from||0,u=s==="first",i=s==="center",g=s==="last",c=d.arr(e),l=parseFloat(c?e[0]:e),v=c?parseFloat(e[1]):0,m=E(c?e[1]:e)||0,h=t.start||0+(c?l:0),f=[],w=0;return function(M,p,y){if(u&&(s=0),i&&(s=(y-1)/2),g&&(s=y-1),!f.length){for(var x=0;x<y;x++){if(!n)f.push(Math.abs(s-x));else{var I=i?(n[0]-1)/2:s%n[0],_=i?(n[1]-1)/2:Math.floor(s/n[0]),O=x%n[0],z=Math.floor(x/n[0]),L=I-O,k=_-z,F=Math.sqrt(L*L+k*k);o==="x"&&(F=-L),o==="y"&&(F=-k),f.push(F)}w=Math.max.apply(Math,f)}a&&(f=f.map(function(T){return a(T/w)*w})),r==="reverse"&&(f=f.map(function(T){return o?T<0?T*-1:-T:Math.abs(w-T)}))}var U=c?(v-l)/w:l;return h+U*(Math.round(f[p]*100)/100)+m}}function Ot(e){e===void 0&&(e={});var t=b(e);return t.duration=0,t.add=function(r,a){var n=S.indexOf(t),o=t.children;n>-1&&S.splice(n,1);function s(v){v.passThrough=!0}for(var u=0;u<o.length;u++)s(o[u]);var i=K(r,se(re,e));i.targets=i.targets||e.targets;var g=t.duration;i.autoplay=!1,i.direction=t.direction,i.timelineOffset=d.und(a)?g:de(a,g),s(t),t.seek(i.timelineOffset);var c=b(i);s(c),o.push(c);var l=$e(o,e);return t.delay=l.delay,t.endDelay=l.endDelay,t.duration=l.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}b.version="3.2.1";b.speed=1;b.suspendWhenDocumentHidden=!0;b.running=S;b.remove=Et;b.get=fe;b.set=He;b.convertPx=ce;b.path=wt;b.setDashoffset=bt;b.stagger=At;b.timeline=Ot;b.easing=ae;b.penner=De;b.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};function cr(e,t,r){b({targets:e,left:t.x,top:t.y,easing:"easeInOutExpo",duration:xe,complete:r})}function lr(e,t){b({targets:e,opacity:0,complete:t})}function fr(e,t){b({targets:e,opacity:1,complete:t})}function dr(e,t,r){b({targets:e,left:t.x,easing:"easeInOutExpo",duration:xe,complete:r})}function vr(e,t){const r=P(0),a=P(!1),n=P(!0);let o;const s=()=>{a.value=!0,o=setTimeout(()=>{r.value===e.length&&(r.value=t),e[r.value].handler().then(()=>{r.value+=1,a.value=!1,n.value&&s()})},Xe)},u=()=>{n.value=!n.value,n.value&&s()};return _e(()=>{n.value&&s()}),rt(()=>{n.value=!1,clearTimeout(o)}),{auto:n,running:a,currentStep:r,nextStep:s,toggleAuto:u}}var Lt="/bank/assets/bank.5808ba22.svg",Ft="/bank/assets/user.3db05741.svg",Vt="/bank/assets/block.a6672ab0.svg",zt="/bank/assets/institution.a57439a1.svg";const Rt={bank:Lt,user:Ft,block:Vt,institution:zt};function jt(e,t,r){for(let a=0;a<e.length;a++){const n=e[a];n.x=Math.round(n.x/100*t),n.y=Math.round(n.y/100*r)}return e}function hr(e,t,r){let a=P(0),n=P(0),o=P([]),s=P(0);return _e(()=>{var i,g;const u=(i=t.value)==null?void 0:i.getClientRects();if(u&&(u==null?void 0:u.length)>0){const{width:c,height:l}=u[0];o.value=jt(r,c,l),n.value=l,a.value=c;const v=(g=e.value)==null?void 0:g.getClientRects(),m=v[0].width,h=v[0].height,f=Math.min(m/c,h/l);s.value=f<1?f:1,window.innerWidth<et&&(s.value=m/c)}}),X(s,()=>{const u=t.value;u.style.transform=`scale(${s.value})`;const i=e.value;i.style.flex="none",i.style.height=n.value*s.value+"px"}),{screenWidth:a,screenHeight:n,nodes:o}}const Nt=["src","alt"],Wt={key:0,class:"title"},Ht={props:{roleSize:{type:Number,default:be.roleImageSize},title:{type:String,default:""},role:{type:String,default:"black"}},setup(e){const t=e,r=we(()=>Rt[t.role]);return(a,n)=>(D(),A(ee,null,[H("div",{class:"role",style:ke({width:e.roleSize})},[H("img",{src:Me(r),alt:e.title},null,8,Nt)],4),e.title?(D(),A("div",Wt,Ie(e.title),1)):Te("",!0)],64))}};var gr=W(Ht,[["__scopeId","data-v-0e3468ff"]]),$t="/bank/assets/contract.a35f86e6.svg",Ut="/bank/assets/records.73191a15.svg",qt="/bank/assets/verified.f03895bf.svg",Zt="/bank/assets/credential.ac894034.svg",Qt="/bank/assets/off-chain.f8518b60.svg",Kt="/bank/assets/transfer.bc2d9fff.svg",Jt="/bank/assets/transferred.2f307d42.svg",Yt="/bank/assets/address.2f41da18.svg",Gt="/bank/assets/oracle.3b1d1a93.svg";const Xt={contract:$t,record:Ut,verified:qt,offChain:Qt,transfer:Kt,transferred:Jt,credential:Zt,address:Yt,oracle:Gt};const er={key:0,class:"title"},tr=["src","alt","width"],rr={props:{size:{type:Number,default:tt.size},title:{type:String,default:""},type:{type:String,default:""}},setup(e){const t=e,r=we(()=>Xt[t.type]);return(a,n)=>(D(),A("div",null,[e.title?(D(),A("div",er,Ie(e.title),1)):Te("",!0),H("img",{src:Me(r),alt:e.title,width:e.size,style:{filter:"drop-shadow(10000px 0 0 red)",transform:"translate(-10000px)"}},null,8,tr)]))}};var pr=W(rr,[["__scopeId","data-v-76666c01"]]);const nr={class:"steps"},ar=te({props:{current:{type:Number,default:0},steps:{type:Array,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1}},setup(e){return(t,r)=>{const a=Pe("a-step"),n=Pe("a-steps");return D(),A("div",nr,[nt(n,{current:e.current,direction:"vertical",class:"custom-ant-steps"},{default:at(()=>[(D(!0),A(ee,null,it(e.steps,o=>(D(),ot(a,{key:o.title,title:o.title,class:"step"},null,8,["title"]))),128))]),_:1},8,["current"])])}}});var yr=W(ar,[["__scopeId","data-v-d4003f7a"]]);function Je(e,t,r,a=3){const n=10,o="black",s=Math.atan2(r.y-t.y,r.x-t.x);e.save(),e.strokeStyle=o,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(r.x,r.y),e.lineWidth=a,e.stroke(),e.beginPath(),e.moveTo(r.x,r.y),e.lineTo(r.x-n*Math.cos(s-Math.PI/7),r.y-n*Math.sin(s-Math.PI/7)),e.lineTo(r.x-n*Math.cos(s+Math.PI/7),r.y-n*Math.sin(s+Math.PI/7)),e.lineTo(r.x,r.y),e.lineTo(r.x-n*Math.cos(s-Math.PI/7),r.y-n*Math.sin(s-Math.PI/7)),e.stroke(),e.restore()}const ir=te({props:{width:{type:Number,default:800},height:{type:Number,default:500},pathes:{type:Array,default:null}},setup(e){const t=e,r=P(null);X(()=>t.pathes.length,()=>{const o=r.value;!o||(o.width=t.width,o.height=t.height,a(o))});const a=o=>{const s=o.getContext("2d");if(!s)return;s.clearRect(0,0,o.width,o.height);const u=window.devicePixelRatio||1,i=o.width,g=o.height;o.width=Math.round(i*u),o.height=Math.round(g*u),o.style.width=i+"px",o.style.height=g+"px",s.scale(u,u),t.pathes.map((c,l)=>{const v=c.length;for(let m=0;m<c.length-1;m++)if(m===v-2){const h=c[m],f=c[m+1];Je(s,h,f,1),s.font="16px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText((l+1).toString(),20+(h.x+f.x)/2,20+(h.y+f.y)/2)}else n(s,c[m],c[m+1])})};function n(o,s,u,i=1){o.beginPath(),o.moveTo(s.x,s.y),o.lineTo(u.x,u.y),o.stroke()}return(o,s)=>(D(),A("canvas",{ref_key:"canvasEl",ref:r,class:"path-canvas"},null,512))}});var mr=W(ir,[["__scopeId","data-v-729a721e"]]);const or=te({props:{width:{type:Number,default:800},height:{type:Number,default:500},nodes:{type:Array,default:null}},setup(e){const t=e,r=P(null);X(()=>t.nodes.length,()=>{const s=r.value;!s||(s.width=t.width,s.height=t.height,o(s))});const a=P(0),n=P(0),o=s=>{const u=s.getContext("2d"),i=window.devicePixelRatio||1,g=s.width,c=s.height;s.width=Math.round(g*i),s.height=Math.round(c*i),s.style.width=g+"px",s.style.height=c+"px",u.scale(i,i);const l=t.nodes.filter(x=>x.role==="block");if(l.sort((x,I)=>x.x-I.x),l.length<2||!u)return;for(let x=0;x<l.length-1;x++){const I=l[x],_=l[x+1];Je(u,{x:I.x+32,y:I.y},{x:_.x-32,y:_.y})}u.setLineDash([6]);const v=l[0],m=l[l.length-1],h=be.roleImageSize,f=48,w=m.x-v.x+f*2+h,M=h+f*2,p={x:v.x-f-h/2,y:v.y-f-h/2};u.strokeRect(p.x,p.y,w,M);const y=(v.x+m.x)/2;a.value=y,n.value=v.y+h+32};return(s,u)=>(D(),A(ee,null,[H("canvas",{ref_key:"canvasEl",ref:r,class:"path-canvas"},null,512),H("div",{class:"title",style:ke({left:a.value+"px",top:n.value+"px"})},"\u957F\u4E09\u89D2\u5B66\u5206\u94F6\u884C\u533A\u5757\u94FE",4)],64))}});var xr=W(or,[["__scopeId","data-v-97978e1c"]]);export{xr as B,pr as I,gr as R,yr as S,mr as a,fr as b,hr as c,dr as e,lr as f,vr as g,cr as m};
