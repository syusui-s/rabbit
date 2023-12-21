import{s as it,t as B,i as k,a as E,S as pe,u as dt,c as Ce,w as k0,j as c4,k as _r,l as Fe,n as Ti,x as u4,M as Ye,y as d4,b as Ln,m as cs,p as xr,d as vt,z as f4,A as C0,o as kr,P as h4,g as jn,e as Le,B as p4,F as Ft,h as Ue,C as Hu,D as $i,f as Aa,E as g4,G as v4,H as m4,I as S0}from"./index-9effffd7.js";import{c as b4,a as y4,r as Wu}from"./usePersistStatus-cc90c624.js";const _4=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),T0=(e={})=>(()=>{const t=_4();return it(t,e,!0,!0),t})();var wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function oo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function w4(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){return this instanceof i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var x4=typeof wt=="object"&&wt&&wt.Object===Object&&wt,A0=x4,$4=A0,E4=typeof self=="object"&&self&&self.Object===Object&&self,k4=$4||E4||Function("return this")(),Dn=k4,C4=Dn,S4=C4.Symbol,us=S4,Ep=us,I0=Object.prototype,T4=I0.hasOwnProperty,A4=I0.toString,Ds=Ep?Ep.toStringTag:void 0;function I4(e){var t=T4.call(e,Ds),n=e[Ds];try{e[Ds]=void 0;var i=!0}catch{}var o=A4.call(e);return i&&(t?e[Ds]=n:delete e[Ds]),o}var R4=I4,O4=Object.prototype,L4=O4.toString;function P4(e){return L4.call(e)}var M4=P4,kp=us,B4=R4,j4=M4,N4="[object Null]",D4="[object Undefined]",Cp=kp?kp.toStringTag:void 0;function U4(e){return e==null?e===void 0?D4:N4:Cp&&Cp in Object(e)?B4(e):j4(e)}var ds=U4;function F4(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var er=F4,z4=ds,H4=er,W4="[object AsyncFunction]",q4="[object Function]",Z4="[object GeneratorFunction]",K4="[object Proxy]";function V4(e){if(!H4(e))return!1;var t=z4(e);return t==q4||t==Z4||t==W4||t==K4}var R0=V4,G4=Dn,Y4=G4["__core-js_shared__"],J4=Y4,qc=J4,Sp=function(){var e=/[^.]+$/.exec(qc&&qc.keys&&qc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function X4(e){return!!Sp&&Sp in e}var Q4=X4,e5=Function.prototype,t5=e5.toString;function n5(e){if(e!=null){try{return t5.call(e)}catch{}try{return e+""}catch{}}return""}var O0=n5,r5=R0,i5=Q4,s5=er,o5=O0,a5=/[\\^$.*+?()[\]{}|]/g,l5=/^\[object .+?Constructor\]$/,c5=Function.prototype,u5=Object.prototype,d5=c5.toString,f5=u5.hasOwnProperty,h5=RegExp("^"+d5.call(f5).replace(a5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p5(e){if(!s5(e)||i5(e))return!1;var t=r5(e)?h5:l5;return t.test(o5(e))}var g5=p5;function v5(e,t){return e?.[t]}var m5=v5,b5=g5,y5=m5;function _5(e,t){var n=y5(e,t);return b5(n)?n:void 0}var Ai=_5,w5=Ai,x5=w5(Object,"create"),nl=x5,Tp=nl;function $5(){this.__data__=Tp?Tp(null):{},this.size=0}var E5=$5;function k5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var C5=k5,S5=nl,T5="__lodash_hash_undefined__",A5=Object.prototype,I5=A5.hasOwnProperty;function R5(e){var t=this.__data__;if(S5){var n=t[e];return n===T5?void 0:n}return I5.call(t,e)?t[e]:void 0}var O5=R5,L5=nl,P5=Object.prototype,M5=P5.hasOwnProperty;function B5(e){var t=this.__data__;return L5?t[e]!==void 0:M5.call(t,e)}var j5=B5,N5=nl,D5="__lodash_hash_undefined__";function U5(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=N5&&t===void 0?D5:t,this}var F5=U5,z5=E5,H5=C5,W5=O5,q5=j5,Z5=F5;function fs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}fs.prototype.clear=z5;fs.prototype.delete=H5;fs.prototype.get=W5;fs.prototype.has=q5;fs.prototype.set=Z5;var K5=fs;function V5(){this.__data__=[],this.size=0}var G5=V5;function Y5(e,t){return e===t||e!==e&&t!==t}var qu=Y5,J5=qu;function X5(e,t){for(var n=e.length;n--;)if(J5(e[n][0],t))return n;return-1}var rl=X5,Q5=rl,e$=Array.prototype,t$=e$.splice;function n$(e){var t=this.__data__,n=Q5(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():t$.call(t,n,1),--this.size,!0}var r$=n$,i$=rl;function s$(e){var t=this.__data__,n=i$(t,e);return n<0?void 0:t[n][1]}var o$=s$,a$=rl;function l$(e){return a$(this.__data__,e)>-1}var c$=l$,u$=rl;function d$(e,t){var n=this.__data__,i=u$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var f$=d$,h$=G5,p$=r$,g$=o$,v$=c$,m$=f$;function hs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}hs.prototype.clear=h$;hs.prototype.delete=p$;hs.prototype.get=g$;hs.prototype.has=v$;hs.prototype.set=m$;var il=hs,b$=Ai,y$=Dn,_$=b$(y$,"Map"),Zu=_$,Ap=K5,w$=il,x$=Zu;function $$(){this.size=0,this.__data__={hash:new Ap,map:new(x$||w$),string:new Ap}}var E$=$$;function k$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var C$=k$,S$=C$;function T$(e,t){var n=e.__data__;return S$(t)?n[typeof t=="string"?"string":"hash"]:n.map}var sl=T$,A$=sl;function I$(e){var t=A$(this,e).delete(e);return this.size-=t?1:0,t}var R$=I$,O$=sl;function L$(e){return O$(this,e).get(e)}var P$=L$,M$=sl;function B$(e){return M$(this,e).has(e)}var j$=B$,N$=sl;function D$(e,t){var n=N$(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var U$=D$,F$=E$,z$=R$,H$=P$,W$=j$,q$=U$;function ps(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ps.prototype.clear=F$;ps.prototype.delete=z$;ps.prototype.get=H$;ps.prototype.has=W$;ps.prototype.set=q$;var Ku=ps,Z$="__lodash_hash_undefined__";function K$(e){return this.__data__.set(e,Z$),this}var V$=K$;function G$(e){return this.__data__.has(e)}var Y$=G$,J$=Ku,X$=V$,Q$=Y$;function Ia(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new J$;++t<n;)this.add(e[t])}Ia.prototype.add=Ia.prototype.push=X$;Ia.prototype.has=Q$;var L0=Ia;function e6(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var t6=e6;function n6(e){return e!==e}var r6=n6;function i6(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var s6=i6,o6=t6,a6=r6,l6=s6;function c6(e,t,n){return t===t?l6(e,t,n):o6(e,a6,n)}var u6=c6,d6=u6;function f6(e,t){var n=e==null?0:e.length;return!!n&&d6(e,t,0)>-1}var h6=f6;function p6(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var g6=p6;function v6(e,t){return e.has(t)}var P0=v6,m6=Ai,b6=Dn,y6=m6(b6,"Set"),M0=y6;function _6(){}var w6=_6;function x6(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Vu=x6,Zc=M0,$6=w6,E6=Vu,k6=1/0,C6=Zc&&1/E6(new Zc([,-0]))[1]==k6?function(e){return new Zc(e)}:$6,S6=C6,T6=L0,A6=h6,I6=g6,R6=P0,O6=S6,L6=Vu,P6=200;function M6(e,t,n){var i=-1,o=A6,a=e.length,l=!0,u=[],d=u;if(n)l=!1,o=I6;else if(a>=P6){var f=t?null:O6(e);if(f)return L6(f);l=!1,o=R6,d=new T6}else d=t?[]:u;e:for(;++i<a;){var h=e[i],g=t?t(h):h;if(h=n||h!==0?h:0,l&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;t&&d.push(g),u.push(h)}else o(d,g,n)||(d!==u&&d.push(g),u.push(h))}return u}var B0=M6,B6=B0;function j6(e){return e&&e.length?B6(e):[]}var N6=j6;const _i=oo(N6),D6=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),U6=e=>(()=>{const t=D6();return k(t,()=>e.children),t})();function du(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function F6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function vi(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function z6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");du(e.outputLen),du(e.blockLen)}function H6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function W6(e,t){vi(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const an={number:du,bool:F6,bytes:vi,hash:z6,exists:H6,output:W6},Kc=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Gu=e=>e instanceof Uint8Array,wi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Zn=(e,t)=>e<<32-t|e>>>t,q6=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!q6)throw new Error("Non little-endian hardware is not supported");const Z6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function on(e){if(!Gu(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=Z6[e[n]];return t}function es(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const t=e.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(t/2);for(let i=0;i<n.length;i++){const o=i*2,a=e.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function j0(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function zs(e){if(typeof e=="string"&&(e=j0(e)),!Gu(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}function Ji(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!Gu(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}class N0{clone(){return this._cloneInto()}}const K6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function V6(e,t){if(t!==void 0&&(typeof t!="object"||!K6(t)))throw new Error("Options should be object or undefined");return Object.assign(e,t)}function Ii(e){const t=i=>e().update(zs(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function ao(e=32){if(Kc&&typeof Kc.getRandomValues=="function")return Kc.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}function G6(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+f,u,i)}class Yu extends N0{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=wi(this.buffer)}update(t){an.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=zs(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=wi(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){an.exists(this),an.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;G6(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=wi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,h=this.get();if(f>h.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,h[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}}const Y6=(e,t,n)=>e&t^~e&n,J6=(e,t,n)=>e&t^e&n^t&n,X6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),jr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Nr=new Uint32Array(64);class D0 extends Yu{constructor(){super(64,32,8,!1),this.A=jr[0]|0,this.B=jr[1]|0,this.C=jr[2]|0,this.D=jr[3]|0,this.E=jr[4]|0,this.F=jr[5]|0,this.G=jr[6]|0,this.H=jr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[t,n,i,o,a,l,u,d]}set(t,n,i,o,a,l,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)Nr[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const v=Nr[g-15],y=Nr[g-2],w=Zn(v,7)^Zn(v,18)^v>>>3,x=Zn(y,17)^Zn(y,19)^y>>>10;Nr[g]=x+Nr[g-7]+w+Nr[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:f,H:h}=this;for(let g=0;g<64;g++){const v=Zn(u,6)^Zn(u,11)^Zn(u,25),y=h+v+Y6(u,d,f)+X6[g]+Nr[g]|0,x=(Zn(i,2)^Zn(i,13)^Zn(i,22))+J6(i,o,a)|0;h=f,f=d,d=u,u=l+y|0,l=a,a=o,o=i,i=y+x|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,f=f+this.G|0,h=h+this.H|0,this.set(i,o,a,l,u,d,f,h)}roundClean(){Nr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class Q6 extends D0{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Yn=Ii(()=>new D0);Ii(()=>new Q6);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const U0=BigInt(0),ol=BigInt(1),e8=BigInt(2),al=e=>e instanceof Uint8Array,t8=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function ts(e){if(!al(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=t8[e[n]];return t}function F0(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function Ju(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function ns(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const t=e.length;if(t%2)throw new Error("padded hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(t/2);for(let i=0;i<n.length;i++){const o=i*2,a=e.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function Yt(e){return Ju(ts(e))}function Xu(e){if(!al(e))throw new Error("Uint8Array expected");return Ju(ts(Uint8Array.from(e).reverse()))}function qr(e,t){return ns(e.toString(16).padStart(t*2,"0"))}function z0(e,t){return qr(e,t).reverse()}function n8(e){return ns(F0(e))}function Rt(e,t,n){let i;if(typeof t=="string")try{i=ns(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(al(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function Ei(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!al(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function r8(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function i8(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function s8(e){let t;for(t=0;e>U0;e>>=ol,t+=1);return t}function o8(e,t){return e>>BigInt(t)&ol}const a8=(e,t,n)=>e|(n?ol:U0)<<BigInt(t),Qu=e=>(e8<<BigInt(e-1))-ol,Vc=e=>new Uint8Array(e),Ip=e=>Uint8Array.from(e);function H0(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Vc(e),o=Vc(e),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=Vc())=>{o=u(Ip([0]),g),i=u(),g.length!==0&&(o=u(Ip([1]),g),i=u())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<t;){i=u();const y=i.slice();v.push(y),g+=i.length}return Ei(...v)};return(g,v)=>{l(),d(g);let y;for(;!(y=v(f()));)d();return l(),y}}const l8={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function lo(e,t,n={}){const i=(o,a,l)=>{const u=l8[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(l&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const c8=Object.freeze(Object.defineProperty({__proto__:null,bitGet:o8,bitLen:s8,bitMask:Qu,bitSet:a8,bytesToHex:ts,bytesToNumberBE:Yt,bytesToNumberLE:Xu,concatBytes:Ei,createHmacDrbg:H0,ensureBytes:Rt,equalBytes:r8,hexToBytes:ns,hexToNumber:Ju,numberToBytesBE:qr,numberToBytesLE:z0,numberToHexUnpadded:F0,numberToVarBytesBE:n8,utf8ToBytes:i8,validateObject:lo},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),gt=BigInt(1),mi=BigInt(2),u8=BigInt(3),fu=BigInt(4),Rp=BigInt(5),Op=BigInt(8);BigInt(9);BigInt(16);function Et(e,t){const n=e%t;return n>=kt?n:t+n}function d8(e,t,n){if(n<=kt||t<kt)throw new Error("Expected power/modulo > 0");if(n===gt)return kt;let i=gt;for(;t>kt;)t&gt&&(i=i*e%n),e=e*e%n,t>>=gt;return i}function yn(e,t,n){let i=e;for(;t-- >kt;)i*=i,i%=n;return i}function hu(e,t){if(e===kt||t<=kt)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=Et(e,t),i=t,o=kt,a=gt;for(;n!==kt;){const u=i/n,d=i%n,f=o-a*u;i=n,n=d,o=a,a=f}if(i!==gt)throw new Error("invert: does not exist");return Et(o,t)}function f8(e){const t=(e-gt)/mi;let n,i,o;for(n=e-gt,i=0;n%mi===kt;n/=mi,i++);for(o=mi;o<e&&d8(o,t,e)!==e-gt;o++);if(i===1){const l=(e+gt)/fu;return function(d,f){const h=d.pow(f,l);if(!d.eql(d.sqr(h),f))throw new Error("Cannot find square root");return h}}const a=(n+gt)/mi;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let f=i,h=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let y=1;for(let x=u.sqr(v);y<f&&!u.eql(x,u.ONE);y++)x=u.sqr(x);const w=u.pow(h,gt<<BigInt(f-y-1));h=u.sqr(w),g=u.mul(g,w),v=u.mul(v,h),f=y}return g}}function h8(e){if(e%fu===u8){const t=(e+gt)/fu;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%Op===Rp){const t=(e-Rp)/Op;return function(i,o){const a=i.mul(o,mi),l=i.pow(a,t),u=i.mul(o,l),d=i.mul(i.mul(u,mi),l),f=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return f8(e)}const p8=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function g8(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=p8.reduce((i,o)=>(i[o]="function",i),t);return lo(e,n)}function v8(e,t,n){if(n<kt)throw new Error("Expected power > 0");if(n===kt)return e.ONE;if(n===gt)return t;let i=e.ONE,o=t;for(;n>kt;)n&gt&&(i=e.mul(i,o)),o=e.sqr(o),n>>=gt;return i}function m8(e,t){const n=new Array(t.length),i=t.reduce((a,l,u)=>e.is0(l)?a:(n[u]=a,e.mul(a,l)),e.ONE),o=e.inv(i);return t.reduceRight((a,l,u)=>e.is0(l)?a:(n[u]=e.mul(a,n[u]),e.mul(a,l)),o),n}function ed(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function b8(e,t,n=!1,i={}){if(e<=kt)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=ed(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=h8(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:Qu(o),ZERO:kt,ONE:gt,create:d=>Et(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return kt<=d&&d<e},is0:d=>d===kt,isOdd:d=>(d&gt)===gt,neg:d=>Et(-d,e),eql:(d,f)=>d===f,sqr:d=>Et(d*d,e),add:(d,f)=>Et(d+f,e),sub:(d,f)=>Et(d-f,e),mul:(d,f)=>Et(d*f,e),pow:(d,f)=>v8(u,d,f),div:(d,f)=>Et(d*hu(f,e),e),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>hu(d,e),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>m8(u,d),cmov:(d,f,h)=>h?f:d,toBytes:d=>n?z0(d,a):qr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?Xu(d):Yt(d)}});return Object.freeze(u)}function y8(e,t,n=!1){e=Rt("privateHash",e);const i=e.length,o=ed(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?Xu(e):Yt(e);return Et(a,t-gt)+gt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const _8=BigInt(0),Gc=BigInt(1);function w8(e,t){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(t/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=e.ZERO,u=o;for(;a>_8;)a&Gc&&(l=l.add(u)),u=u.double(),a>>=Gc;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let f=o,h=f;for(let g=0;g<l;g++){h=f,d.push(h);for(let v=1;v<u;v++)h=h.add(f),d.push(h);f=h.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let f=e.ZERO,h=e.BASE;const g=BigInt(2**o-1),v=2**o,y=BigInt(o);for(let w=0;w<u;w++){const x=w*d;let $=Number(l&g);l>>=y,$>d&&($-=v,l+=Gc);const S=x,L=x+Math.abs($)-1,C=w%2!==0,R=$<0;$===0?h=h.add(n(C,a[S])):f=f.add(n(R,a[L]))}return{p:f,f:h}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,u(f))),this.wNAF(d,f,l)}}}function W0(e){return g8(e.Fp),lo(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...ed(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function x8(e){const t=W0(e);lo(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:$8,hexToBytes:E8}=c8,yi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=yi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:$8(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=yi,n=typeof e=="string"?E8(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=yi._parseInt(n.subarray(2)),{d:l,l:u}=yi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(e){const t=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const h=f.toString(16);return h.length&1?`0${h}`:h},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},br=BigInt(0),_n=BigInt(1);BigInt(2);const Lp=BigInt(3);BigInt(4);function k8(e){const t=x8(e),{Fp:n}=t,i=t.toBytes||((w,x,$)=>{const S=x.toAffine();return Ei(Uint8Array.from([4]),n.toBytes(S.x),n.toBytes(S.y))}),o=t.fromBytes||(w=>{const x=w.subarray(1),$=n.fromBytes(x.subarray(0,n.BYTES)),S=n.fromBytes(x.subarray(n.BYTES,2*n.BYTES));return{x:$,y:S}});function a(w){const{a:x,b:$}=t,S=n.sqr(w),L=n.mul(S,w);return n.add(n.add(L,n.mul(w,x)),$)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function l(w){return typeof w=="bigint"&&br<w&&w<t.n}function u(w){if(!l(w))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(w){const{allowedPrivateKeyLengths:x,nByteLength:$,wrapPrivateKey:S,n:L}=t;if(x&&typeof w!="bigint"){if(w instanceof Uint8Array&&(w=ts(w)),typeof w!="string"||!x.includes(w.length))throw new Error("Invalid key");w=w.padStart($*2,"0")}let C;try{C=typeof w=="bigint"?w:Yt(Rt("private key",w,$))}catch{throw new Error(`private key must be ${$} bytes, hex or bigint, not ${typeof w}`)}return S&&(C=Et(C,L)),u(C),C}const f=new Map;function h(w){if(!(w instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(x,$,S){if(this.px=x,this.py=$,this.pz=S,x==null||!n.isValid(x))throw new Error("x required");if($==null||!n.isValid($))throw new Error("y required");if(S==null||!n.isValid(S))throw new Error("z required")}static fromAffine(x){const{x:$,y:S}=x||{};if(!x||!n.isValid($)||!n.isValid(S))throw new Error("invalid affine point");if(x instanceof g)throw new Error("projective point not allowed");const L=C=>n.eql(C,n.ZERO);return L($)&&L(S)?g.ZERO:new g($,S,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(x){const $=n.invertBatch(x.map(S=>S.pz));return x.map((S,L)=>S.toAffine($[L])).map(g.fromAffine)}static fromHex(x){const $=g.fromAffine(o(Rt("pointHex",x)));return $.assertValidity(),$}static fromPrivateKey(x){return g.BASE.multiply(d(x))}_setWindowSize(x){this._WINDOW_SIZE=x,f.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x,y:$}=this.toAffine();if(!n.isValid(x)||!n.isValid($))throw new Error("bad point: x or y not FE");const S=n.sqr($),L=a(x);if(!n.eql(S,L))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:x}=this.toAffine();if(n.isOdd)return!n.isOdd(x);throw new Error("Field doesn't support isOdd")}equals(x){h(x);const{px:$,py:S,pz:L}=this,{px:C,py:R,pz:P}=x,A=n.eql(n.mul($,P),n.mul(C,L)),D=n.eql(n.mul(S,P),n.mul(R,L));return A&&D}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:x,b:$}=t,S=n.mul($,Lp),{px:L,py:C,pz:R}=this;let P=n.ZERO,A=n.ZERO,D=n.ZERO,U=n.mul(L,L),q=n.mul(C,C),Q=n.mul(R,R),te=n.mul(L,C);return te=n.add(te,te),D=n.mul(L,R),D=n.add(D,D),P=n.mul(x,D),A=n.mul(S,Q),A=n.add(P,A),P=n.sub(q,A),A=n.add(q,A),A=n.mul(P,A),P=n.mul(te,P),D=n.mul(S,D),Q=n.mul(x,Q),te=n.sub(U,Q),te=n.mul(x,te),te=n.add(te,D),D=n.add(U,U),U=n.add(D,U),U=n.add(U,Q),U=n.mul(U,te),A=n.add(A,U),Q=n.mul(C,R),Q=n.add(Q,Q),U=n.mul(Q,te),P=n.sub(P,U),D=n.mul(Q,q),D=n.add(D,D),D=n.add(D,D),new g(P,A,D)}add(x){h(x);const{px:$,py:S,pz:L}=this,{px:C,py:R,pz:P}=x;let A=n.ZERO,D=n.ZERO,U=n.ZERO;const q=t.a,Q=n.mul(t.b,Lp);let te=n.mul($,C),ne=n.mul(S,R),se=n.mul(L,P),ee=n.add($,S),j=n.add(C,R);ee=n.mul(ee,j),j=n.add(te,ne),ee=n.sub(ee,j),j=n.add($,L);let W=n.add(C,P);return j=n.mul(j,W),W=n.add(te,se),j=n.sub(j,W),W=n.add(S,L),A=n.add(R,P),W=n.mul(W,A),A=n.add(ne,se),W=n.sub(W,A),U=n.mul(q,j),A=n.mul(Q,se),U=n.add(A,U),A=n.sub(ne,U),U=n.add(ne,U),D=n.mul(A,U),ne=n.add(te,te),ne=n.add(ne,te),se=n.mul(q,se),j=n.mul(Q,j),ne=n.add(ne,se),se=n.sub(te,se),se=n.mul(q,se),j=n.add(j,se),te=n.mul(ne,j),D=n.add(D,te),te=n.mul(W,j),A=n.mul(ee,A),A=n.sub(A,te),te=n.mul(ee,ne),U=n.mul(W,U),U=n.add(U,te),new g(A,D,U)}subtract(x){return this.add(x.negate())}is0(){return this.equals(g.ZERO)}wNAF(x){return y.wNAFCached(this,f,x,$=>{const S=n.invertBatch($.map(L=>L.pz));return $.map((L,C)=>L.toAffine(S[C])).map(g.fromAffine)})}multiplyUnsafe(x){const $=g.ZERO;if(x===br)return $;if(u(x),x===_n)return this;const{endo:S}=t;if(!S)return y.unsafeLadder(this,x);let{k1neg:L,k1:C,k2neg:R,k2:P}=S.splitScalar(x),A=$,D=$,U=this;for(;C>br||P>br;)C&_n&&(A=A.add(U)),P&_n&&(D=D.add(U)),U=U.double(),C>>=_n,P>>=_n;return L&&(A=A.negate()),R&&(D=D.negate()),D=new g(n.mul(D.px,S.beta),D.py,D.pz),A.add(D)}multiply(x){u(x);let $=x,S,L;const{endo:C}=t;if(C){const{k1neg:R,k1:P,k2neg:A,k2:D}=C.splitScalar($);let{p:U,f:q}=this.wNAF(P),{p:Q,f:te}=this.wNAF(D);U=y.constTimeNegate(R,U),Q=y.constTimeNegate(A,Q),Q=new g(n.mul(Q.px,C.beta),Q.py,Q.pz),S=U.add(Q),L=q.add(te)}else{const{p:R,f:P}=this.wNAF($);S=R,L=P}return g.normalizeZ([S,L])[0]}multiplyAndAddUnsafe(x,$,S){const L=g.BASE,C=(P,A)=>A===br||A===_n||!P.equals(L)?P.multiplyUnsafe(A):P.multiply(A),R=C(this,$).add(C(x,S));return R.is0()?void 0:R}toAffine(x){const{px:$,py:S,pz:L}=this,C=this.is0();x==null&&(x=C?n.ONE:n.inv(L));const R=n.mul($,x),P=n.mul(S,x),A=n.mul(L,x);if(C)return{x:n.ZERO,y:n.ZERO};if(!n.eql(A,n.ONE))throw new Error("invZ was invalid");return{x:R,y:P}}isTorsionFree(){const{h:x,isTorsionFree:$}=t;if(x===_n)return!0;if($)return $(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:x,clearCofactor:$}=t;return x===_n?this:$?$(g,this):this.multiplyUnsafe(t.h)}toRawBytes(x=!0){return this.assertValidity(),i(g,this,x)}toHex(x=!0){return ts(this.toRawBytes(x))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=t.nBitLength,y=w8(g,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function C8(e){const t=W0(e);return lo(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function S8(e){const t=C8(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function l(j){return br<j&&j<n.ORDER}function u(j){return Et(j,i)}function d(j){return hu(j,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:h,weierstrassEquation:g,isWithinCurveOrder:v}=k8({...t,toBytes(j,W,J){const le=W.toAffine(),Y=n.toBytes(le.x),me=Ei;return J?me(Uint8Array.from([W.hasEvenY()?2:3]),Y):me(Uint8Array.from([4]),Y,n.toBytes(le.y))},fromBytes(j){const W=j.length,J=j[0],le=j.subarray(1);if(W===o&&(J===2||J===3)){const Y=Yt(le);if(!l(Y))throw new Error("Point is not on curve");const me=g(Y);let ve=n.sqrt(me);const $e=(ve&_n)===_n;return(J&1)===1!==$e&&(ve=n.neg(ve)),{x:Y,y:ve}}else if(W===a&&J===4){const Y=n.fromBytes(le.subarray(0,n.BYTES)),me=n.fromBytes(le.subarray(n.BYTES,2*n.BYTES));return{x:Y,y:me}}else throw new Error(`Point of length ${W} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),y=j=>ts(qr(j,t.nByteLength));function w(j){const W=i>>_n;return j>W}function x(j){return w(j)?u(-j):j}const $=(j,W,J)=>Yt(j.slice(W,J));class S{constructor(W,J,le){this.r=W,this.s=J,this.recovery=le,this.assertValidity()}static fromCompact(W){const J=t.nByteLength;return W=Rt("compactSignature",W,J*2),new S($(W,0,J),$(W,J,2*J))}static fromDER(W){const{r:J,s:le}=yi.toSig(Rt("DER",W));return new S(J,le)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(W){return new S(this.r,this.s,W)}recoverPublicKey(W){const{r:J,s:le,recovery:Y}=this,me=D(Rt("msgHash",W));if(Y==null||![0,1,2,3].includes(Y))throw new Error("recovery id invalid");const ve=Y===2||Y===3?J+t.n:J;if(ve>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const $e=Y&1?"03":"02",Je=f.fromHex($e+y(ve)),ue=d(ve),Se=u(-me*ue),Ee=u(le*ue),G=f.BASE.multiplyAndAddUnsafe(Je,Se,Ee);if(!G)throw new Error("point at infinify");return G.assertValidity(),G}hasHighS(){return w(this.s)}normalizeS(){return this.hasHighS()?new S(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return ns(this.toDERHex())}toDERHex(){return yi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return ns(this.toCompactHex())}toCompactHex(){return y(this.r)+y(this.s)}}const L={isValidPrivateKey(j){try{return h(j),!0}catch{return!1}},normPrivateKeyToScalar:h,randomPrivateKey:()=>{const j=t.randomBytes(n.BYTES+8),W=y8(j,i);return qr(W,t.nByteLength)},precompute(j=8,W=f.BASE){return W._setWindowSize(j),W.multiply(BigInt(3)),W}};function C(j,W=!0){return f.fromPrivateKey(j).toRawBytes(W)}function R(j){const W=j instanceof Uint8Array,J=typeof j=="string",le=(W||J)&&j.length;return W?le===o||le===a:J?le===2*o||le===2*a:j instanceof f}function P(j,W,J=!0){if(R(j))throw new Error("first arg must be private key");if(!R(W))throw new Error("second arg must be public key");return f.fromHex(W).multiply(h(j)).toRawBytes(J)}const A=t.bits2int||function(j){const W=Yt(j),J=j.length*8-t.nBitLength;return J>0?W>>BigInt(J):W},D=t.bits2int_modN||function(j){return u(A(j))},U=Qu(t.nBitLength);function q(j){if(typeof j!="bigint")throw new Error("bigint expected");if(!(br<=j&&j<U))throw new Error(`bigint expected < 2^${t.nBitLength}`);return qr(j,t.nByteLength)}function Q(j,W,J=te){if(["recovered","canonical"].some(ae=>ae in J))throw new Error("sign() legacy options not supported");const{hash:le,randomBytes:Y}=t;let{lowS:me,prehash:ve,extraEntropy:$e}=J;me==null&&(me=!0),j=Rt("msgHash",j),ve&&(j=Rt("prehashed msgHash",le(j)));const Je=D(j),ue=h(W),Se=[q(ue),q(Je)];if($e!=null){const ae=$e===!0?Y(n.BYTES):$e;Se.push(Rt("extraEntropy",ae,n.BYTES))}const Ee=Ei(...Se),G=Je;function re(ae){const Te=A(ae);if(!v(Te))return;const Ke=d(Te),oe=f.BASE.multiply(Te).toAffine(),Z=u(oe.x);if(Z===br)return;const qe=u(Ke*u(G+Z*ue));if(qe===br)return;let xt=(oe.x===Z?0:2)|Number(oe.y&_n),Fn=qe;return me&&w(qe)&&(Fn=x(qe),xt^=1),new S(Z,Fn,xt)}return{seed:Ee,k2sig:re}}const te={lowS:t.lowS,prehash:!1},ne={lowS:t.lowS,prehash:!1};function se(j,W,J=te){const{seed:le,k2sig:Y}=Q(j,W,J),me=t;return H0(me.hash.outputLen,me.nByteLength,me.hmac)(le,Y)}f.BASE._setWindowSize(8);function ee(j,W,J,le=ne){const Y=j;if(W=Rt("msgHash",W),J=Rt("publicKey",J),"strict"in le)throw new Error("options.strict was renamed to lowS");const{lowS:me,prehash:ve}=le;let $e,Je;try{if(typeof Y=="string"||Y instanceof Uint8Array)try{$e=S.fromDER(Y)}catch(oe){if(!(oe instanceof yi.Err))throw oe;$e=S.fromCompact(Y)}else if(typeof Y=="object"&&typeof Y.r=="bigint"&&typeof Y.s=="bigint"){const{r:oe,s:Z}=Y;$e=new S(oe,Z)}else throw new Error("PARSE");Je=f.fromHex(J)}catch(oe){if(oe.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(me&&$e.hasHighS())return!1;ve&&(W=t.hash(W));const{r:ue,s:Se}=$e,Ee=D(W),G=d(Se),re=u(Ee*G),ae=u(ue*G),Te=f.BASE.multiplyAndAddUnsafe(Je,re,ae)?.toAffine();return Te?u(Te.x)===ue:!1}return{CURVE:t,getPublicKey:C,getSharedSecret:P,sign:se,verify:ee,ProjectivePoint:f,Signature:S,utils:L}}class q0 extends N0{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,an.hash(t);const i=zs(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=t.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(t){return an.exists(this),this.iHash.update(t),this}digestInto(t){an.exists(this),an.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=l,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Hs=(e,t,n)=>new q0(e,t).update(n).digest();Hs.create=(e,t)=>new q0(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function T8(e){return{hash:e,hmac:(t,...n)=>Hs(e,t,Ji(...n)),randomBytes:ao}}function A8(e,t){const n=i=>S8({...e,...T8(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const ll=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ra=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Z0=BigInt(1),Oa=BigInt(2),Pp=(e,t)=>(e+t/Oa)/t;function K0(e){const t=ll,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),f=e*e*e%t,h=f*f*e%t,g=yn(h,n,t)*h%t,v=yn(g,n,t)*h%t,y=yn(v,Oa,t)*f%t,w=yn(y,o,t)*y%t,x=yn(w,a,t)*w%t,$=yn(x,u,t)*x%t,S=yn($,d,t)*$%t,L=yn(S,u,t)*x%t,C=yn(L,n,t)*h%t,R=yn(C,l,t)*w%t,P=yn(R,i,t)*f%t,A=yn(P,Oa,t);if(!pu.eql(pu.sqr(A),e))throw new Error("Cannot find square root");return A}const pu=b8(ll,void 0,void 0,{sqrt:K0}),Ut=A8({a:BigInt(0),b:BigInt(7),Fp:pu,n:Ra,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=Ra,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Z0*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Pp(a*e,t),d=Pp(-i*e,t);let f=Et(e-u*n-d*o,t),h=Et(-u*i-d*a,t);const g=f>l,v=h>l;if(g&&(f=t-f),v&&(h=t-h),f>l||h>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:f,k2neg:v,k2:h}}}},Yn),cl=BigInt(0),V0=e=>typeof e=="bigint"&&cl<e&&e<ll,I8=e=>typeof e=="bigint"&&cl<e&&e<Ra,Mp={};function La(e,...t){let n=Mp[e];if(n===void 0){const i=Yn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=Ei(i,i),Mp[e]=n}return Yn(Ei(n,...t))}const td=e=>e.toRawBytes(!0).slice(1),gu=e=>qr(e,32),Yc=e=>Et(e,ll),Ws=e=>Et(e,Ra),nd=Ut.ProjectivePoint,R8=(e,t,n)=>nd.BASE.multiplyAndAddUnsafe(e,t,n);function vu(e){let t=Ut.utils.normPrivateKeyToScalar(e),n=nd.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Ws(-t),bytes:td(n)}}function G0(e){if(!V0(e))throw new Error("bad x: need 0 < x < p");const t=Yc(e*e),n=Yc(t*e+BigInt(7));let i=K0(n);i%Oa!==cl&&(i=Yc(-i));const o=new nd(e,i,Z0);return o.assertValidity(),o}function Y0(...e){return Ws(Yt(La("BIP0340/challenge",...e)))}function O8(e){return vu(e).bytes}function L8(e,t,n=ao(32)){const i=Rt("message",e),{bytes:o,scalar:a}=vu(t),l=Rt("auxRand",n,32),u=gu(a^Yt(La("BIP0340/aux",l))),d=La("BIP0340/nonce",u,o,i),f=Ws(Yt(d));if(f===cl)throw new Error("sign failed: k is zero");const{bytes:h,scalar:g}=vu(f),v=Y0(h,o,i),y=new Uint8Array(64);if(y.set(h,0),y.set(gu(Ws(g+v*a)),32),!J0(y,i,o))throw new Error("sign: Invalid signature produced");return y}function J0(e,t,n){const i=Rt("signature",e,64),o=Rt("message",t),a=Rt("publicKey",n,32);try{const l=G0(Yt(a)),u=Yt(i.subarray(0,32));if(!V0(u))return!1;const d=Yt(i.subarray(32,64));if(!I8(d))return!1;const f=Y0(gu(u),td(l),o),h=R8(l,d,Ws(-f));return!(!h||!h.hasEvenY()||h.toAffine().x!==u)}catch{return!1}}const co=(()=>({getPublicKey:O8,sign:L8,verify:J0,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:G0,pointToBytes:td,numberToBytesBE:qr,bytesToNumberBE:Yt,taggedHash:La,mod:Et}}))();/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ri(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Un(...e){const t=(o,a)=>l=>o(a(l)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function tr(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Ri(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function nr(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function uo(e,t="="){if(Ri(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function X0(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Bp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(l=>{if(Ri(l),l<0||l>=t)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const f=a[d],h=t*l+f;if(!Number.isSafeInteger(h)||t*l/t!==l||h-f!==t*l)throw new Error("convertRadix: carry overflow");if(l=h%n,a[d]=Math.floor(h/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==h)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<e.length-1&&e[l]===0;l++)o.push(0);return o.reverse()}const Q0=(e,t)=>t?Q0(t,e%t):e,Pa=(e,t)=>e+(t-Q0(e,t));function mu(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Pa(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Pa(t,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of e){if(Ri(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function e1(e){return Ri(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Bp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Bp(t,e,2**8))}}}function Cr(e,t=!1){if(Ri(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Pa(8,e)>32||Pa(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return mu(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(mu(n,e,8,t))}}}function jp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function t1(e,t){if(Ri(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let l=0;l<e;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const fa={alphabet:tr,chain:Un,checksum:t1,radix:e1,radix2:Cr,join:nr,padding:uo},P8=Un(Cr(4),tr("0123456789ABCDEF"),nr("")),M8=Un(Cr(5),tr("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),uo(5),nr(""));Un(Cr(5),tr("0123456789ABCDEFGHIJKLMNOPQRSTUV"),uo(5),nr(""));Un(Cr(5),tr("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),nr(""),X0(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));const $r=Un(Cr(6),tr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),uo(6),nr("")),B8=Un(Cr(6),tr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),uo(6),nr("")),rd=e=>Un(e1(58),tr(e),nr("")),Ma=rd("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");rd("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");rd("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");const Np=[0,2,3,5,6,7,9,10,11],j8={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Ma.encode(i).padStart(Np[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Np.indexOf(i.length),a=Ma.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},N8=e=>Un(t1(4,t=>e(e(t))),Ma),bu=Un(tr("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),nr("")),Dp=[996825010,642813549,513874426,1027748829,705979059];function Us(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Dp.length;i++)(t>>i&1)===1&&(n^=Dp[i]);return n}function Up(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const l=e.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${e})`);o=Us(o)^l>>5}o=Us(o);for(let a=0;a<i;a++)o=Us(o)^e.charCodeAt(a)&31;for(let a of t)o=Us(o)^a;for(let a=0;a<6;a++)o=Us(o);return o^=n,bu.encode(mu([o%2**30],30,5,!1))}function n1(e){const t=e==="bech32"?1:734539939,n=Cr(5),i=n.decode,o=n.encode,a=jp(i);function l(h,g,v=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const y=h.length+7+g.length;if(v!==!1&&y>v)throw new TypeError(`Length ${y} exceeds limit ${v}`);return h=h.toLowerCase(),`${h}1${bu.encode(g)}${Up(h,g,t)}`}function u(h,g=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||g!==!1&&h.length>g)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${g})`);const v=h.toLowerCase();if(h!==v&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=v;const y=h.lastIndexOf("1");if(y===0||y===-1)throw new Error('Letter "1" must be present between prefix and data only');const w=h.slice(0,y),x=h.slice(y+1);if(x.length<6)throw new Error("Data must be at least 6 characters long");const $=bu.decode(x).slice(0,-6),S=Up(w,$,t);if(!x.endsWith(S))throw new Error(`Invalid checksum in ${h}: expected "${S}"`);return{prefix:w,words:$}}const d=jp(u);function f(h){const{prefix:g,words:v}=u(h,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:l,decode:u,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const rs=n1("bech32");n1("bech32m");const D8={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},U8=Un(Cr(4),tr("0123456789abcdef"),nr(""),X0(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),F8={utf8:D8,hex:U8,base16:P8,base32:M8,base64:$r,base64url:B8,base58:Ma,base58xmr:j8};`${Object.keys(F8).join(", ")}`;const r1=`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`);function z8(e,t,n,i){an.hash(e);const o=V6({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(an.number(a),an.number(l),an.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=zs(t),f=zs(n),h=new Uint8Array(l),g=Hs.create(e,d),v=g._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:u,DK:h,PRF:g,PRFSalt:v}}function H8(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function W8(e,t,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=z8(e,t,n,i);let f;const h=new Uint8Array(4),g=wi(h),v=new Uint8Array(u.outputLen);for(let y=1,w=0;w<a;y++,w+=u.outputLen){const x=l.subarray(w,w+u.outputLen);g.setInt32(0,y,!1),(f=d._cloneInto(f)).update(h).digestInto(v),x.set(v.subarray(0,x.length));for(let $=1;$<o;$++){u._cloneInto(f).update(v).digestInto(v);for(let S=0;S<x.length;S++)x[S]^=v[S]}}return H8(u,d,l,f,v)}const ha=BigInt(2**32-1),yu=BigInt(32);function i1(e,t=!1){return t?{h:Number(e&ha),l:Number(e>>yu&ha)}:{h:Number(e>>yu&ha)|0,l:Number(e&ha)|0}}function q8(e,t=!1){let n=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let o=0;o<e.length;o++){const{h:a,l}=i1(e[o],t);[n[o],i[o]]=[a,l]}return[n,i]}const Z8=(e,t)=>BigInt(e>>>0)<<yu|BigInt(t>>>0),K8=(e,t,n)=>e>>>n,V8=(e,t,n)=>e<<32-n|t>>>n,G8=(e,t,n)=>e>>>n|t<<32-n,Y8=(e,t,n)=>e<<32-n|t>>>n,J8=(e,t,n)=>e<<64-n|t>>>n-32,X8=(e,t,n)=>e>>>n-32|t<<64-n,Q8=(e,t)=>t,e7=(e,t)=>e,t7=(e,t,n)=>e<<n|t>>>32-n,n7=(e,t,n)=>t<<n|e>>>32-n,r7=(e,t,n)=>t<<n-32|e>>>64-n,i7=(e,t,n)=>e<<n-32|t>>>64-n;function s7(e,t,n,i){const o=(t>>>0)+(i>>>0);return{h:e+n+(o/2**32|0)|0,l:o|0}}const o7=(e,t,n)=>(e>>>0)+(t>>>0)+(n>>>0),a7=(e,t,n,i)=>t+n+i+(e/2**32|0)|0,l7=(e,t,n,i)=>(e>>>0)+(t>>>0)+(n>>>0)+(i>>>0),c7=(e,t,n,i,o)=>t+n+i+o+(e/2**32|0)|0,u7=(e,t,n,i,o)=>(e>>>0)+(t>>>0)+(n>>>0)+(i>>>0)+(o>>>0),d7=(e,t,n,i,o,a)=>t+n+i+o+a+(e/2**32|0)|0,je={fromBig:i1,split:q8,toBig:Z8,shrSH:K8,shrSL:V8,rotrSH:G8,rotrSL:Y8,rotrBH:J8,rotrBL:X8,rotr32H:Q8,rotr32L:e7,rotlSH:t7,rotlSL:n7,rotlBH:r7,rotlBL:i7,add:s7,add3L:o7,add3H:a7,add4L:l7,add4H:c7,add5H:d7,add5L:u7},[f7,h7]=je.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Dr=new Uint32Array(80),Ur=new Uint32Array(80);class ul extends Yu{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:f,El:h,Fh:g,Fl:v,Gh:y,Gl:w,Hh:x,Hl:$}=this;return[t,n,i,o,a,l,u,d,f,h,g,v,y,w,x,$]}set(t,n,i,o,a,l,u,d,f,h,g,v,y,w,x,$){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=f|0,this.El=h|0,this.Fh=g|0,this.Fl=v|0,this.Gh=y|0,this.Gl=w|0,this.Hh=x|0,this.Hl=$|0}process(t,n){for(let C=0;C<16;C++,n+=4)Dr[C]=t.getUint32(n),Ur[C]=t.getUint32(n+=4);for(let C=16;C<80;C++){const R=Dr[C-15]|0,P=Ur[C-15]|0,A=je.rotrSH(R,P,1)^je.rotrSH(R,P,8)^je.shrSH(R,P,7),D=je.rotrSL(R,P,1)^je.rotrSL(R,P,8)^je.shrSL(R,P,7),U=Dr[C-2]|0,q=Ur[C-2]|0,Q=je.rotrSH(U,q,19)^je.rotrBH(U,q,61)^je.shrSH(U,q,6),te=je.rotrSL(U,q,19)^je.rotrBL(U,q,61)^je.shrSL(U,q,6),ne=je.add4L(D,te,Ur[C-7],Ur[C-16]),se=je.add4H(ne,A,Q,Dr[C-7],Dr[C-16]);Dr[C]=se|0,Ur[C]=ne|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:f,Dl:h,Eh:g,El:v,Fh:y,Fl:w,Gh:x,Gl:$,Hh:S,Hl:L}=this;for(let C=0;C<80;C++){const R=je.rotrSH(g,v,14)^je.rotrSH(g,v,18)^je.rotrBH(g,v,41),P=je.rotrSL(g,v,14)^je.rotrSL(g,v,18)^je.rotrBL(g,v,41),A=g&y^~g&x,D=v&w^~v&$,U=je.add5L(L,P,D,h7[C],Ur[C]),q=je.add5H(U,S,R,A,f7[C],Dr[C]),Q=U|0,te=je.rotrSH(i,o,28)^je.rotrBH(i,o,34)^je.rotrBH(i,o,39),ne=je.rotrSL(i,o,28)^je.rotrBL(i,o,34)^je.rotrBL(i,o,39),se=i&a^i&u^a&u,ee=o&l^o&d^l&d;S=x|0,L=$|0,x=y|0,$=w|0,y=g|0,w=v|0,{h:g,l:v}=je.add(f|0,h|0,q|0,Q|0),f=u|0,h=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const j=je.add3L(Q,ne,ee);i=je.add3H(j,q,te,se),o=j|0}({h:i,l:o}=je.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=je.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=je.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:f,l:h}=je.add(this.Dh|0,this.Dl|0,f|0,h|0),{h:g,l:v}=je.add(this.Eh|0,this.El|0,g|0,v|0),{h:y,l:w}=je.add(this.Fh|0,this.Fl|0,y|0,w|0),{h:x,l:$}=je.add(this.Gh|0,this.Gl|0,x|0,$|0),{h:S,l:L}=je.add(this.Hh|0,this.Hl|0,S|0,L|0),this.set(i,o,a,l,u,d,f,h,g,v,y,w,x,$,S,L)}roundClean(){Dr.fill(0),Ur.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class p7 extends ul{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class g7 extends ul{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class v7 extends ul{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const _u=Ii(()=>new ul);Ii(()=>new p7);Ii(()=>new g7);Ii(()=>new v7);const m7=e=>e[0]==="あいこくしん";function s1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function o1(e){const t=s1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function a1(e){an.bytes(e,16,20,24,28,32)}function b7(e,t=128){if(an.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return w7(ao(t/8),e)}const y7=e=>{const t=8-e.length/4;return new Uint8Array([Yn(e)[0]>>t<<t])};function l1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),fa.chain(fa.checksum(1,y7),fa.radix2(11,!0),fa.alphabet(e))}function _7(e,t){const{words:n}=o1(e),i=l1(t).decode(n);return a1(i),i}function w7(e,t){return a1(e),l1(t).encode(e).join(m7(t)?"　":" ")}function x7(e,t){try{_7(e,t)}catch{return!1}return!0}const $7=e=>s1(`mnemonic${e}`);function E7(e,t=""){return W8(_u,o1(e).nfkd,$7(t),{c:2048,dkLen:64})}const k7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),c1=Uint8Array.from({length:16},(e,t)=>t),C7=c1.map(e=>(9*e+5)%16);let id=[c1],sd=[C7];for(let e=0;e<4;e++)for(let t of[id,sd])t.push(t[e].map(n=>k7[n]));const u1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),S7=id.map((e,t)=>e.map(n=>u1[t][n])),T7=sd.map((e,t)=>e.map(n=>u1[t][n])),A7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),I7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),pa=(e,t)=>e<<t|e>>>32-t;function Fp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const ga=new Uint32Array(16);class R7 extends Yu{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let y=0;y<16;y++,n+=4)ga[y]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,f=this.h3|0,h=f,g=this.h4|0,v=g;for(let y=0;y<5;y++){const w=4-y,x=A7[y],$=I7[y],S=id[y],L=sd[y],C=S7[y],R=T7[y];for(let P=0;P<16;P++){const A=pa(i+Fp(y,a,u,f)+ga[S[P]]+x,C[P])+g|0;i=g,g=f,f=pa(u,10)|0,u=a,a=A}for(let P=0;P<16;P++){const A=pa(o+Fp(w,l,d,h)+ga[L[P]]+$,R[P])+v|0;o=v,v=h,h=pa(d,10)|0,d=l,l=A}}this.set(this.h1+u+h|0,this.h2+f+v|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){ga.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const O7=Ii(()=>new R7),va=Ut.ProjectivePoint,Jc=N8(Yn);function zp(e){return BigInt(`0x${on(e)}`)}function L7(e){return es(e.toString(16).padStart(64,"0"))}const P7=j0("Bitcoin seed"),Xc={private:76066276,public:76067358},Qc=2147483648,M7=e=>O7(Yn(e)),B7=e=>wi(e).getUint32(0,!1),ma=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return wi(t).setUint32(0,e,!1),t};class bi{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return B7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return Jc.encode(this.serialize(this.versions.private,Ji(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Jc.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=Xc){if(vi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Hs(_u,P7,t);return new bi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=Xc){const i=Jc.decode(t),o=wi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new bi({...l,privateKey:u.slice(1)}):new bi({...l,publicKey:u})}static fromJSON(t){return bi.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||Xc,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Ut.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:zp(t.privateKey),this.privKeyBytes=L7(this.privKey),this.pubKey=Ut.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=va.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=M7(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=Qc)throw new Error("Invalid index");a[2]==="'"&&(l+=Qc),i=i.deriveChild(l)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ma(t);if(t>=Qc){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=Ji(new Uint8Array([0]),u,n)}else n=Ji(this.pubKey,n);const i=Hs(_u,this.chainCode,n),o=zp(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=Et(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=va.fromHex(this.pubKey).add(va.fromPrivateKey(o));if(u.equals(va.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new bi(l)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return vi(t,32),Ut.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(vi(t,32),vi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return vi(n,33),Ji(ma(t),new Uint8Array([this.depth]),ma(this.parentFingerprint),ma(this.index),this.chainCode,n)}}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */const j7=e=>e instanceof Uint8Array,Kn=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),N7=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!N7)throw new Error("Non little-endian hardware is not supported");function od(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function wu(e){if(typeof e=="string"&&(e=od(e)),!j7(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}const D7=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function U7(e,t){if(t!==void 0&&(typeof t!="object"||!D7(t)))throw new Error("options must be object or undefined");return Object.assign(e,t)}function F7(e,t){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");if(typeof t=="number"&&e.length!==t)throw new Error(`Uint8Array length ${t} expected`)}function xu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function z7(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function d1(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function H7(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("hash must be wrapped by utils.wrapConstructor");xu(e.outputLen),xu(e.blockLen)}function W7(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function q7(e,t){d1(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const sn={number:xu,bool:z7,bytes:d1,hash:H7,exists:W7,output:q7},At=(e,t)=>e[t++]&255|(e[t++]&255)<<8;class Z7{constructor(t){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,t=wu(t),F7(t,32);const n=At(t,0),i=At(t,2),o=At(t,4),a=At(t,6),l=At(t,8),u=At(t,10),d=At(t,12),f=At(t,14);this.r[0]=n&8191,this.r[1]=(n>>>13|i<<3)&8191,this.r[2]=(i>>>10|o<<6)&7939,this.r[3]=(o>>>7|a<<9)&8191,this.r[4]=(a>>>4|l<<12)&255,this.r[5]=l>>>1&8190,this.r[6]=(l>>>14|u<<2)&8191,this.r[7]=(u>>>11|d<<5)&8065,this.r[8]=(d>>>8|f<<8)&8191,this.r[9]=f>>>5&127;for(let h=0;h<8;h++)this.pad[h]=At(t,16+2*h)}process(t,n,i=!1){const o=i?0:2048,{h:a,r:l}=this,u=l[0],d=l[1],f=l[2],h=l[3],g=l[4],v=l[5],y=l[6],w=l[7],x=l[8],$=l[9],S=At(t,n+0),L=At(t,n+2),C=At(t,n+4),R=At(t,n+6),P=At(t,n+8),A=At(t,n+10),D=At(t,n+12),U=At(t,n+14);let q=a[0]+(S&8191),Q=a[1]+((S>>>13|L<<3)&8191),te=a[2]+((L>>>10|C<<6)&8191),ne=a[3]+((C>>>7|R<<9)&8191),se=a[4]+((R>>>4|P<<12)&8191),ee=a[5]+(P>>>1&8191),j=a[6]+((P>>>14|A<<2)&8191),W=a[7]+((A>>>11|D<<5)&8191),J=a[8]+((D>>>8|U<<8)&8191),le=a[9]+(U>>>5|o),Y=0,me=Y+q*u+Q*(5*$)+te*(5*x)+ne*(5*w)+se*(5*y);Y=me>>>13,me&=8191,me+=ee*(5*v)+j*(5*g)+W*(5*h)+J*(5*f)+le*(5*d),Y+=me>>>13,me&=8191;let ve=Y+q*d+Q*u+te*(5*$)+ne*(5*x)+se*(5*w);Y=ve>>>13,ve&=8191,ve+=ee*(5*y)+j*(5*v)+W*(5*g)+J*(5*h)+le*(5*f),Y+=ve>>>13,ve&=8191;let $e=Y+q*f+Q*d+te*u+ne*(5*$)+se*(5*x);Y=$e>>>13,$e&=8191,$e+=ee*(5*w)+j*(5*y)+W*(5*v)+J*(5*g)+le*(5*h),Y+=$e>>>13,$e&=8191;let Je=Y+q*h+Q*f+te*d+ne*u+se*(5*$);Y=Je>>>13,Je&=8191,Je+=ee*(5*x)+j*(5*w)+W*(5*y)+J*(5*v)+le*(5*g),Y+=Je>>>13,Je&=8191;let ue=Y+q*g+Q*h+te*f+ne*d+se*u;Y=ue>>>13,ue&=8191,ue+=ee*(5*$)+j*(5*x)+W*(5*w)+J*(5*y)+le*(5*v),Y+=ue>>>13,ue&=8191;let Se=Y+q*v+Q*g+te*h+ne*f+se*d;Y=Se>>>13,Se&=8191,Se+=ee*u+j*(5*$)+W*(5*x)+J*(5*w)+le*(5*y),Y+=Se>>>13,Se&=8191;let Ee=Y+q*y+Q*v+te*g+ne*h+se*f;Y=Ee>>>13,Ee&=8191,Ee+=ee*d+j*u+W*(5*$)+J*(5*x)+le*(5*w),Y+=Ee>>>13,Ee&=8191;let G=Y+q*w+Q*y+te*v+ne*g+se*h;Y=G>>>13,G&=8191,G+=ee*f+j*d+W*u+J*(5*$)+le*(5*x),Y+=G>>>13,G&=8191;let re=Y+q*x+Q*w+te*y+ne*v+se*g;Y=re>>>13,re&=8191,re+=ee*h+j*f+W*d+J*u+le*(5*$),Y+=re>>>13,re&=8191;let ae=Y+q*$+Q*x+te*w+ne*y+se*v;Y=ae>>>13,ae&=8191,ae+=ee*g+j*h+W*f+J*d+le*u,Y+=ae>>>13,ae&=8191,Y=(Y<<2)+Y|0,Y=Y+me|0,me=Y&8191,Y=Y>>>13,ve+=Y,a[0]=me,a[1]=ve,a[2]=$e,a[3]=Je,a[4]=ue,a[5]=Se,a[6]=Ee,a[7]=G,a[8]=re,a[9]=ae}finalize(){const{h:t,pad:n}=this,i=new Uint16Array(10);let o=t[1]>>>13;t[1]&=8191;for(let u=2;u<10;u++)t[u]+=o,o=t[u]>>>13,t[u]&=8191;t[0]+=o*5,o=t[0]>>>13,t[0]&=8191,t[1]+=o,o=t[1]>>>13,t[1]&=8191,t[2]+=o,i[0]=t[0]+5,o=i[0]>>>13,i[0]&=8191;for(let u=1;u<10;u++)i[u]=t[u]+o,o=i[u]>>>13,i[u]&=8191;i[9]-=8192;let a=(o^1)-1;for(let u=0;u<10;u++)i[u]&=a;a=~a;for(let u=0;u<10;u++)t[u]=t[u]&a|i[u];t[0]=(t[0]|t[1]<<13)&65535,t[1]=(t[1]>>>3|t[2]<<10)&65535,t[2]=(t[2]>>>6|t[3]<<7)&65535,t[3]=(t[3]>>>9|t[4]<<4)&65535,t[4]=(t[4]>>>12|t[5]<<1|t[6]<<14)&65535,t[5]=(t[6]>>>2|t[7]<<11)&65535,t[6]=(t[7]>>>5|t[8]<<8)&65535,t[7]=(t[8]>>>8|t[9]<<5)&65535;let l=t[0]+n[0];t[0]=l&65535;for(let u=1;u<8;u++)l=(t[u]+n[u]|0)+(l>>>16)|0,t[u]=l&65535}update(t){sn.exists(this);const{buffer:n,blockLen:i}=this;t=wu(t);const o=t.length;for(let a=0;a<o;){const l=Math.min(i-this.pos,o-a);if(l===i){for(;i<=o-a;a+=i)this.process(t,a);continue}n.set(t.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===i&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){this.h.fill(0),this.r.fill(0),this.buffer.fill(0),this.pad.fill(0)}digestInto(t){sn.exists(this),sn.output(t,this),this.finished=!0;const{buffer:n,h:i}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let a=0;for(let l=0;l<8;l++)t[a++]=i[l]>>>0,t[a++]=i[l]>>>8;return t}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}}function K7(e){const t=(i,o)=>e(o).update(wu(i)).digest(),n=e(new Uint8Array(32));return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}K7(e=>new Z7(e));const V7=od("expand 16-byte k"),G7=od("expand 32-byte k"),Y7=Kn(V7),J7=Kn(G7),Hp=e=>!(e.byteOffset%4),X7=e=>{const{core:t,rounds:n,counterRight:i,counterLen:o,allow128bitKeys:a,extendNonceFn:l,blockLen:u}=U7({rounds:20,counterRight:!1,counterLen:8,allow128bitKeys:!0,blockLen:64},e);sn.number(o),sn.number(n),sn.number(u),sn.bool(i),sn.bool(a);const d=u/4;if(u%4!==0)throw new Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");return(f,h,g,v,y=0)=>{if(sn.bytes(f),sn.bytes(h),sn.bytes(g),v||(v=new Uint8Array(g.length)),sn.bytes(v),sn.number(y),y<0||y>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");if(v.length<g.length)throw new Error(`Salsa/ChaCha: output (${v.length}) is shorter than data (${g.length})`);const w=[];let x,$;if(f.length===32)x=f,$=J7;else if(f.length===16&&a)x=new Uint8Array(32),x.set(f),x.set(f,16),$=Y7,w.push(x);else throw new Error(`Salsa/ChaCha: invalid 32-byte key, got length=${f.length}`);if(l){if(h.length<=16)throw new Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");x=l($,x,h.subarray(0,16),new Uint8Array(32)),w.push(x),h=h.subarray(16)}const S=16-o;if(h.length!==S)throw new Error(`Salsa/ChaCha: nonce must be ${S} or 16 bytes`);if(S!==12){const q=new Uint8Array(12);q.set(h,i?0:12-h.length),w.push(h=q)}const L=new Uint8Array(u),C=Kn(L),R=Kn(x),P=Kn(h),A=Hp(g)&&Kn(g),D=Hp(v)&&Kn(v);w.push(C);const U=g.length;for(let q=0,Q=y;q<U;Q++){if(t($,R,P,C,Q,n),Q>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");const te=Math.min(u,U-q);if(te===u&&D&&A){const ne=q/4;if(q%4!==0)throw new Error("Salsa/ChaCha: invalid block position");for(let se=0;se<d;se++)D[ne+se]=A[ne+se]^C[se];q+=u;continue}for(let ne=0;ne<te;ne++)v[q+ne]=g[q+ne]^L[ne];q+=te}for(let q=0;q<w.length;q++)w[q].fill(0);return v}},he=(e,t)=>e<<t|e>>>32-t;function Q7(e,t,n,i,o,a=20){let l=e[0],u=e[1],d=e[2],f=e[3],h=t[0],g=t[1],v=t[2],y=t[3],w=t[4],x=t[5],$=t[6],S=t[7],L=o,C=n[0],R=n[1],P=n[2],A=l,D=u,U=d,q=f,Q=h,te=g,ne=v,se=y,ee=w,j=x,W=$,J=S,le=L,Y=C,me=R,ve=P;for(let Je=0;Je<a;Je+=2)A=A+Q|0,le=he(le^A,16),ee=ee+le|0,Q=he(Q^ee,12),A=A+Q|0,le=he(le^A,8),ee=ee+le|0,Q=he(Q^ee,7),D=D+te|0,Y=he(Y^D,16),j=j+Y|0,te=he(te^j,12),D=D+te|0,Y=he(Y^D,8),j=j+Y|0,te=he(te^j,7),U=U+ne|0,me=he(me^U,16),W=W+me|0,ne=he(ne^W,12),U=U+ne|0,me=he(me^U,8),W=W+me|0,ne=he(ne^W,7),q=q+se|0,ve=he(ve^q,16),J=J+ve|0,se=he(se^J,12),q=q+se|0,ve=he(ve^q,8),J=J+ve|0,se=he(se^J,7),A=A+te|0,ve=he(ve^A,16),W=W+ve|0,te=he(te^W,12),A=A+te|0,ve=he(ve^A,8),W=W+ve|0,te=he(te^W,7),D=D+ne|0,le=he(le^D,16),J=J+le|0,ne=he(ne^J,12),D=D+ne|0,le=he(le^D,8),J=J+le|0,ne=he(ne^J,7),U=U+se|0,Y=he(Y^U,16),ee=ee+Y|0,se=he(se^ee,12),U=U+se|0,Y=he(Y^U,8),ee=ee+Y|0,se=he(se^ee,7),q=q+Q|0,me=he(me^q,16),j=j+me|0,Q=he(Q^j,12),q=q+Q|0,me=he(me^q,8),j=j+me|0,Q=he(Q^j,7);let $e=0;i[$e++]=l+A|0,i[$e++]=u+D|0,i[$e++]=d+U|0,i[$e++]=f+q|0,i[$e++]=h+Q|0,i[$e++]=g+te|0,i[$e++]=v+ne|0,i[$e++]=y+se|0,i[$e++]=w+ee|0,i[$e++]=x+j|0,i[$e++]=$+W|0,i[$e++]=S+J|0,i[$e++]=L+le|0,i[$e++]=C+Y|0,i[$e++]=R+me|0,i[$e++]=P+ve|0}function eE(e,t,n,i){const o=Kn(t),a=Kn(n),l=Kn(i);let u=e[0],d=e[1],f=e[2],h=e[3],g=o[0],v=o[1],y=o[2],w=o[3],x=o[4],$=o[5],S=o[6],L=o[7],C=a[0],R=a[1],P=a[2],A=a[3];for(let D=0;D<20;D+=2)u=u+g|0,C=he(C^u,16),x=x+C|0,g=he(g^x,12),u=u+g|0,C=he(C^u,8),x=x+C|0,g=he(g^x,7),d=d+v|0,R=he(R^d,16),$=$+R|0,v=he(v^$,12),d=d+v|0,R=he(R^d,8),$=$+R|0,v=he(v^$,7),f=f+y|0,P=he(P^f,16),S=S+P|0,y=he(y^S,12),f=f+y|0,P=he(P^f,8),S=S+P|0,y=he(y^S,7),h=h+w|0,A=he(A^h,16),L=L+A|0,w=he(w^L,12),h=h+w|0,A=he(A^h,8),L=L+A|0,w=he(w^L,7),u=u+v|0,A=he(A^u,16),S=S+A|0,v=he(v^S,12),u=u+v|0,A=he(A^u,8),S=S+A|0,v=he(v^S,7),d=d+y|0,C=he(C^d,16),L=L+C|0,y=he(y^L,12),d=d+y|0,C=he(C^d,8),L=L+C|0,y=he(y^L,7),f=f+w|0,R=he(R^f,16),x=x+R|0,w=he(w^x,12),f=f+w|0,R=he(R^f,8),x=x+R|0,w=he(w^x,7),h=h+g|0,P=he(P^h,16),$=$+P|0,g=he(g^$,12),h=h+g|0,P=he(P^h,8),$=$+P|0,g=he(g^$,7);return l[0]=u,l[1]=d,l[2]=f,l[3]=h,l[4]=C,l[5]=R,l[6]=P,l[7]=A,i}const f1=X7({core:Q7,counterRight:!1,counterLen:8,extendNonceFn:eE,allow128bitKeys:!1});var tE=Object.defineProperty,bt=(e,t)=>{for(var n in t)tE(e,n,{get:t[n],enumerable:!0})};function h1(e){return on(co.getPublicKey(e))}var ad={};bt(ad,{MessageNode:()=>p1,MessageQueue:()=>g1,insertEventIntoAscendingList:()=>rE,insertEventIntoDescendingList:()=>nE,normalizeURL:()=>$u,utf8Decoder:()=>Vn,utf8Encoder:()=>wn});var Vn=new TextDecoder("utf-8"),wn=new TextEncoder;function $u(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function nE(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function rE(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var p1=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},g1=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new p1(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},Gi=Symbol("verified"),at=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.NwcRequest=23194]="NwcRequest",e[e.HttpAuth=27235]="HttpAuth",e[e.ProfileBadge=30008]="ProfileBadge",e[e.BadgeDefinition=30009]="BadgeDefinition",e[e.Article=30023]="Article",e[e.FileMetadata=1063]="FileMetadata",e))(at||{});function iE(e=255){return{kind:e,content:"",tags:[],created_at:0}}function Xr(e,t){const n=e;return n.pubkey=h1(t),n.id=fo(n),n.sig=aE(n,t),n[Gi]=!0,n}function sE(e){if(!ld(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function fo(e){let t=Yn(wn.encode(sE(e)));return on(t)}var oE=e=>e instanceof Object;function ld(e){if(!oE(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function ho(e){if(typeof e[Gi]=="boolean")return e[Gi];const t=fo(e);if(t!==e.id)return e[Gi]=!1;try{return e[Gi]=co.verify(e.sig,t,e.pubkey)}catch{return e[Gi]=!1}}function aE(e,t){return on(co.sign(fo(e),t))}function lE(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>e.until)}function v1(e,t){for(let n=0;n<e.length;n++)if(lE(e[n],t))return!0;return!1}function cE(...e){let t={};for(let n=0;n<e.length;n++){let i=e[n];Object.entries(i).forEach(([o,a])=>{if(o==="kinds"||o==="ids"||o==="authors"||o[0]==="#"){t[o]=t[o]||[];for(let l=0;l<a.length;l++){let u=a[l];t[o].includes(u)||t[o].push(u)}}}),i.limit&&(!t.limit||i.limit>t.limit)&&(t.limit=i.limit),i.until&&(!t.until||i.until>t.until)&&(t.until=i.until),i.since&&(!t.since||i.since<t.since)&&(t.since=i.since)}return t}var uE={};bt(uE,{getHex64:()=>dl,getInt:()=>m1,getSubscriptionId:()=>b1,matchEventId:()=>dE,matchEventKind:()=>hE,matchEventPubkey:()=>fE});function dl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function m1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function b1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function dE(e,t){return t===dl(e,"id")}function fE(e,t){return t===dl(e,"pubkey")}function hE(e,t){return t===m1(e,"kind")}var Wp=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function pE(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,l={},u=Wp(),d={},f={},h;async function g(){return h||(h=new Promise((S,L)=>{try{a=new WebSocket(e)}catch(A){L(A)}a.onopen=()=>{u.connect.forEach(A=>A()),S()},a.onerror=()=>{h=void 0,u.error.forEach(A=>A()),L()},a.onclose=async()=>{h=void 0,u.disconnect.forEach(A=>A())};let C=new g1,R;a.onmessage=A=>{C.enqueue(A.data),R||(R=setInterval(P,0))};function P(){if(C.size===0){clearInterval(R),R=null;return}var A=C.dequeue();if(!A)return;let D=b1(A);if(D){let U=l[D];if(U&&U.alreadyHaveEvent&&U.alreadyHaveEvent(dl(A,"id"),e))return}try{let U=JSON.parse(A);switch(U[0]){case"EVENT":{let ne=U[1],se=U[2];ld(se)&&l[ne]&&(l[ne].skipVerification||ho(se))&&v1(l[ne].filters,se)&&(l[ne],(d[ne]?.event||[]).forEach(ee=>ee(se)));return}case"COUNT":let q=U[1],Q=U[2];l[q]&&(d[q]?.count||[]).forEach(ne=>ne(Q));return;case"EOSE":{let ne=U[1];ne in d&&(d[ne].eose.forEach(se=>se()),d[ne].eose=[]);return}case"OK":{let ne=U[1],se=U[2],ee=U[3]||"";if(ne in f){let{resolve:j,reject:W}=f[ne];se?j(null):W(new Error(ee))}return}case"NOTICE":let te=U[1];u.notice.forEach(ne=>ne(te));return;case"AUTH":{let ne=U[1];u.auth?.forEach(se=>se(ne));return}}}catch{return}}}),h)}function v(){return a?.readyState===1}async function y(){v()||await g()}async function w(S){let L=JSON.stringify(S);if(!(!v()&&(await new Promise(C=>setTimeout(C,1e3)),!v())))try{a.send(L)}catch(C){console.log(C)}}const x=(S,{verb:L="REQ",skipVerification:C=!1,alreadyHaveEvent:R=null,id:P=Math.random().toString().slice(2)}={})=>{let A=P;l[A]={id:A,filters:S,skipVerification:C,alreadyHaveEvent:R},w([L,A,...S]);let D={sub:(U,q={})=>x(U||S,{skipVerification:q.skipVerification||C,alreadyHaveEvent:q.alreadyHaveEvent||R,id:A}),unsub:()=>{delete l[A],delete d[A],w(["CLOSE",A])},on:(U,q)=>{d[A]=d[A]||{event:[],count:[],eose:[]},d[A][U].push(q)},off:(U,q)=>{let Q=d[A],te=Q[U].indexOf(q);te>=0&&Q[U].splice(te,1)},get events(){return y1(D)}};return D};function $(S,L){return new Promise((C,R)=>{if(!S.id){R(new Error(`event ${S} has no id`));return}let P=S.id;w([L,S]),f[P]={resolve:C,reject:R}})}return{url:e,sub:x,on:(S,L)=>{u[S].push(L),S==="connect"&&a?.readyState===1&&L()},off:(S,L)=>{let C=u[S].indexOf(L);C!==-1&&u[S].splice(C,1)},list:(S,L)=>new Promise(C=>{let R=x(S,L),P=[],A=setTimeout(()=>{R.unsub(),C(P)},n);R.on("eose",()=>{R.unsub(),clearTimeout(A),C(P)}),R.on("event",D=>{P.push(D)})}),get:(S,L)=>new Promise(C=>{let R=x([S],L),P=setTimeout(()=>{R.unsub(),C(null)},i);R.on("event",A=>{R.unsub(),clearTimeout(P),C(A)})}),count:S=>new Promise(L=>{let C=x(S,{...x,verb:"COUNT"}),R=setTimeout(()=>{C.unsub(),L(null)},o);C.on("count",P=>{C.unsub(),clearTimeout(R),L(P)})}),async publish(S){await $(S,"EVENT")},async auth(S){await $(S,"AUTH")},connect:y,close(){u=Wp(),d={},f={},a?.readyState===WebSocket.OPEN&&a.close()},get status(){return a?.readyState??3}}}async function*y1(e){let t;const n=[],i=o=>{t?(t(o),t=void 0):n.push(o)};e.on("event",i);try{for(;;)n.length>0?yield n.shift():yield await new Promise(a=>{t=a})}finally{e.off("event",i)}}var gE=class{_conn;_seenOn={};batchedByKey={};eoseSubTimeout;getTimeout;seenOnEnabled=!0;batchInterval=100;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400,this.seenOnEnabled=e.seenOnEnabled!==!1,this.batchInterval=e.batchInterval||100}close(e){e.forEach(t=>{let n=this._conn[$u(t)];n&&n.close()})}async ensureRelay(e){const t=$u(e);this._conn[t]||(this._conn[t]=pE(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,y)=>{if(n?.alreadyHaveEvent?.(v,y))return!0;if(this.seenOnEnabled){let w=this._seenOn[v]||new Set;w.add(y),this._seenOn[v]=w}return i.has(v)};let a=[],l=new Set,u=new Set,d=e.length,f=!1,h=setTimeout(()=>{f=!0;for(let v of u.values())v()},n?.eoseSubTimeout||this.eoseSubTimeout);e.filter((v,y,w)=>w.indexOf(v)===y).forEach(async v=>{let y;try{y=await this.ensureRelay(v)}catch{x();return}if(!y)return;let w=y.sub(t,o);w.on("event",$=>{i.add($.id);for(let S of l.values())S($)}),w.on("eose",()=>{f||x()}),a.push(w);function x(){if(d--,d===0){clearTimeout(h);for(let $ of u.values())$()}}});let g={sub(v,y){return a.forEach(w=>w.sub(v,y)),g},unsub(){a.forEach(v=>v.unsub())},on(v,y){v==="event"?l.add(y):v==="eose"&&u.add(y)},off(v,y){v==="event"?l.delete(y):v==="eose"&&u.delete(y)},get events(){return y1(g)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}batchedList(e,t,n){return new Promise(i=>{this.batchedByKey[e]?this.batchedByKey[e].push({filters:n,relays:t,resolve:i,events:[]}):(this.batchedByKey[e]=[{filters:n,relays:t,resolve:i,events:[]}],setTimeout(()=>{Object.keys(this.batchedByKey).forEach(async o=>{const a=this.batchedByKey[o],l=[],u=[];a.forEach(f=>{l.push(...f.filters),u.push(...f.relays)});const d=this.sub(u,[cE(...l)]);d.on("event",f=>{a.forEach(h=>v1(h.filters,f)&&h.events.push(f))}),d.on("eose",()=>{d.unsub(),a.forEach(f=>f.resolve(f.events))}),delete this.batchedByKey[o]})},this.batchInterval))})}publish(e,t){return e.map(async n=>(await this.ensureRelay(n)).publish(t))}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},po={};bt(po,{BECH32_REGEX:()=>w1,decode:()=>fl,naddrEncode:()=>xE,neventEncode:()=>wE,noteEncode:()=>yE,nprofileEncode:()=>_E,npubEncode:()=>bE,nrelayEncode:()=>$E,nsecEncode:()=>mE});var _1=5e3,w1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function vE(e){const t=new Uint8Array(4);return t[0]=e>>24&255,t[1]=e>>16&255,t[2]=e>>8&255,t[3]=e&255,t}function fl(e){let{prefix:t,words:n}=rs.decode(e,_1),i=new Uint8Array(rs.fromWords(n));switch(t){case"nprofile":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:on(o[0][0]),relays:o[1]?o[1].map(a=>Vn.decode(a)):[]}}}case"nevent":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(o[3]&&o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"nevent",data:{id:on(o[0][0]),relays:o[1]?o[1].map(a=>Vn.decode(a)):[],author:o[2]?.[0]?on(o[2][0]):void 0,kind:o[3]?.[0]?parseInt(on(o[3][0]),16):void 0}}}case"naddr":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Vn.decode(o[0][0]),pubkey:on(o[2][0]),kind:parseInt(on(o[3][0]),16),relays:o[1]?o[1].map(a=>Vn.decode(a)):[]}}}case"nrelay":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Vn.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:on(i)};default:throw new Error(`unknown prefix ${t}`)}}function ba(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function mE(e){return cd("nsec",e)}function bE(e){return cd("npub",e)}function yE(e){return cd("note",e)}function go(e,t){let n=rs.toWords(t);return rs.encode(e,n,_1)}function cd(e,t){let n=es(t);return go(e,n)}function _E(e){let t=hl({0:[es(e.pubkey)],1:(e.relays||[]).map(n=>wn.encode(n))});return go("nprofile",t)}function wE(e){let t;e.kind!=null&&(t=vE(e.kind));let n=hl({0:[es(e.id)],1:(e.relays||[]).map(i=>wn.encode(i)),2:e.author?[es(e.author)]:[],3:t?[new Uint8Array(t)]:[]});return go("nevent",n)}function xE(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=hl({0:[wn.encode(e.identifier)],1:(e.relays||[]).map(i=>wn.encode(i)),2:[es(e.pubkey)],3:[new Uint8Array(t)]});return go("naddr",n)}function $E(e){let t=hl({0:[wn.encode(e)]});return go("nrelay",t)}function hl(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),Ji(...t)}var EE={};bt(EE,{decrypt:()=>kE,encrypt:()=>x1});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function x1(e,t,n){const i=Ut.getSharedSecret(e,"02"+t),o=$1(i);let a=Uint8Array.from(ao(16)),l=wn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),f=$r.encode(new Uint8Array(d)),h=$r.encode(new Uint8Array(a.buffer));return`${f}?iv=${h}`}async function kE(e,t,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(e,"02"+t),l=$1(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=$r.decode(i),f=$r.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},u,d);return Vn.decode(h)}function $1(e){return e.slice(1,33)}var E1={};bt(E1,{NIP05_REGEX:()=>k1,queryProfile:()=>TE,searchDomain:()=>SE,useFetchImplementation:()=>CE});var k1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,pl;try{pl=fetch}catch{}function CE(e){pl=e}async function SE(e,t=""){try{return(await(await pl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function TE(e){const t=e.match(k1);if(!t)return null;const[n,i="_",o]=t;try{const a=await pl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=AE(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function AE(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var IE={};bt(IE,{generateSeedWords:()=>OE,privateKeyFromSeedWords:()=>RE,validateWords:()=>LE});function RE(e,t){let i=bi.fromMasterSeed(E7(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return on(i)}function OE(){return b7(r1)}function LE(e){return x7(e,r1)}var PE={};bt(PE,{parse:()=>ME});function ME(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,f={id:l,relays:u?[u]:[]},h=i===0,g=i===n.length-1;if(d==="root"){t.root=f;continue}if(d==="reply"){t.reply=f;continue}if(d==="mention"){t.mentions.push(f);continue}if(h){t.root=f;continue}if(g){t.reply=f;continue}t.mentions.push(f)}return t}var BE={};bt(BE,{getPow:()=>C1,minePow:()=>jE});function C1(e){let t=0;for(let n=0;n<e.length;n++){const i=parseInt(e[n],16);if(i===0)t+=4;else{t+=Math.clz32(i)-28;break}}return t}function jE(e,t){let n=0;const i=e,o=["nonce",n.toString(),t.toString()];for(i.tags.push(o);;){const a=Math.floor(new Date().getTime()/1e3);if(a!==i.created_at&&(n=0,i.created_at=a),o[1]=(++n).toString(),i.id=fo(i),C1(i.id)>=t)break}return i}var NE={};bt(NE,{finishRepostEvent:()=>DE,getRepostedEvent:()=>UE,getRepostedEventPointer:()=>S1});function DE(e,t,n,i){return Xr({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function S1(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function UE(e,{skipVerification:t}={}){const n=S1(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!ho(i)))return i}var FE={};bt(FE,{NOSTR_URI_REGEX:()=>gl,parse:()=>HE,test:()=>zE});var gl=new RegExp(`nostr:(${w1.source})`);function zE(e){return typeof e=="string"&&new RegExp(`^${gl.source}$`).test(e)}function HE(e){const t=e.match(new RegExp(`^${gl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:fl(t[1])}}var WE={};bt(WE,{finishReactionEvent:()=>qE,getReactedEventPointer:()=>ZE});function qE(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return Xr({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function ZE(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var KE={};bt(KE,{createDelegation:()=>VE,getDelegator:()=>GE});function VE(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Yn(wn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=on(co.sign(o,e));return{from:h1(e),to:t.pubkey,cond:i,sig:a}}function GE(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,f,h]=a[u].split(/\b/);if(!(d==="kind"&&f==="="&&e.kind===parseInt(h))){if(d==="created_at"&&f==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&f===">"&&e.created_at>parseInt(h))continue;return null}}let l=Yn(wn.encode(`nostr:delegation:${e.pubkey}:${i}`));return co.verify(o,l,n)?n:null}var YE={};bt(YE,{matchAll:()=>JE,regex:()=>ud,replaceAll:()=>XE});var ud=()=>new RegExp(`\\b${gl.source}\\b`,"g");function*JE(e){const t=e.matchAll(ud());for(const n of t)try{const[i,o]=n;yield{uri:i,value:o,decoded:fl(o),start:n.index,end:n.index+i.length}}catch{}}function XE(e,t){return e.replaceAll(ud(),(n,i)=>t({uri:n,value:i,decoded:fl(i)}))}var QE={};bt(QE,{channelCreateEvent:()=>e9,channelHideMessageEvent:()=>r9,channelMessageEvent:()=>n9,channelMetadataEvent:()=>t9,channelMuteUserEvent:()=>i9});var e9=(e,t)=>{let n;if(typeof e.content=="object")n=JSON.stringify(e.content);else if(typeof e.content=="string")n=e.content;else return;return Xr({kind:40,tags:[...e.tags??[]],content:n,created_at:e.created_at},t)},t9=(e,t)=>{let n;if(typeof e.content=="object")n=JSON.stringify(e.content);else if(typeof e.content=="string")n=e.content;else return;return Xr({kind:41,tags:[["e",e.channel_create_event_id],...e.tags??[]],content:n,created_at:e.created_at},t)},n9=(e,t)=>{const n=[["e",e.channel_create_event_id,e.relay_url,"root"]];return e.reply_to_channel_message_event_id&&n.push(["e",e.reply_to_channel_message_event_id,e.relay_url,"reply"]),Xr({kind:42,tags:[...n,...e.tags??[]],content:e.content,created_at:e.created_at},t)},r9=(e,t)=>{let n;if(typeof e.content=="object")n=JSON.stringify(e.content);else if(typeof e.content=="string")n=e.content;else return;return Xr({kind:43,tags:[["e",e.channel_message_event_id],...e.tags??[]],content:n,created_at:e.created_at},t)},i9=(e,t)=>{let n;if(typeof e.content=="object")n=JSON.stringify(e.content);else if(typeof e.content=="string")n=e.content;else return;return Xr({kind:44,tags:[["p",e.pubkey_to_mute],...e.tags??[]],content:n,created_at:e.created_at},t)},s9={};bt(s9,{useFetchImplementation:()=>o9,validateGithub:()=>a9});var dd;try{dd=fetch}catch{}function o9(e){dd=e}async function a9(e,t,n){try{return await(await dd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var l9={};bt(l9,{authenticate:()=>c9});var c9=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""};return t.auth(await n(i))},u9={};bt(u9,{decrypt:()=>h9,encrypt:()=>f9,getSharedSecret:()=>d9});var d9=(e,t)=>Yn(Ut.getSharedSecret(e,"02"+t).subarray(1,33));function f9(e,t,n=1){if(n!==1)throw new Error("NIP44: unknown encryption version");const i=ao(24),o=wn.encode(t),a=f1(e,i,o),l=new Uint8Array(25+a.length);return l.set([n],0),l.set(i,1),l.set(a,25),$r.encode(l)}function h9(e,t){let n=$r.decode(t);if(n[0]!==1)throw new Error(`NIP44: unknown encryption version: ${n[0]}`);const i=n.slice(1,25),o=n.slice(25),a=f1(e,i,o);return Vn.decode(a)}var p9={};bt(p9,{makeNwcRequestEvent:()=>v9,parseConnectionString:()=>g9});function g9(e){const{pathname:t,searchParams:n}=new URL(e),i=t,o=n.get("relay"),a=n.get("secret");if(!i||!o||!a)throw new Error("invalid connection string");return{pubkey:i,relay:o,secret:a}}async function v9({pubkey:e,secret:t,invoice:n}){const o=await x1(t,e,JSON.stringify({method:"pay_invoice",params:{invoice:n}})),a={kind:23194,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e]]};return Xr(a,t)}var m9={};bt(m9,{getZapEndpoint:()=>y9,makeZapReceipt:()=>x9,makeZapRequest:()=>_9,useFetchImplementation:()=>b9,validateZapRequest:()=>w9});var fd;try{fd=fetch}catch{}function b9(e){fd=e}async function y9(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:l}=rs.decode(n,1e3),u=rs.fromWords(l);t=Vn.decode(u)}else if(i){let[l,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await fd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function _9({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function w9(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!ld(t))return"Zap request is not a valid Nostr event.";if(!ho(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function x9({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&l.tags.push(["preimage",t]),l}var $9={};bt($9,{getToken:()=>E9,unpackEventFromToken:()=>A1,validateEvent:()=>I1,validateToken:()=>k9});var T1="Nostr ";async function E9(e,t,n,i=!1){if(!e||!t)throw new Error("Missing loginUrl or httpMethod");const o=iE(27235);o.tags=[["u",e],["method",t]],o.created_at=Math.round(new Date().getTime()/1e3);const a=await n(o);return(i?T1:"")+$r.encode(wn.encode(JSON.stringify(a)))}async function k9(e,t,n){const i=await A1(e).catch(a=>{throw a});return await I1(i,t,n).catch(a=>{throw a})}async function A1(e){if(!e)throw new Error("Missing token");e=e.replace(T1,"");const t=Vn.decode($r.decode(e));if(!t||t.length===0||!t.startsWith("{"))throw new Error("Invalid token");return JSON.parse(t)}async function I1(e,t,n){if(!e)throw new Error("Invalid nostr event");if(!ho(e))throw new Error("Invalid nostr event, signature invalid");if(e.kind!==27235)throw new Error("Invalid nostr event, kind invalid");if(!e.created_at)throw new Error("Invalid nostr event, created_at invalid");if(Math.round(new Date().getTime()/1e3)-e.created_at>60)throw new Error("Invalid nostr event, expired");const i=e.tags.find(a=>a[0]==="u");if(i?.length!==1&&i?.[1]!==t)throw new Error("Invalid nostr event, url tag invalid");const o=e.tags.find(a=>a[0]==="method");if(o?.length!==1&&o?.[1].toLowerCase()!==n.toLowerCase())throw new Error("Invalid nostr event, method tag invalid");return!0}const C9=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),R1=(e={})=>(()=>{const t=C9();return it(t,e,!0,!0),t})(),S9=B('<button class="text-blue-500 underline">'),{noteEncode:T9,neventEncode:A9}=po,I9=e=>{try{return T9(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},R9=e=>{try{return A9({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},qs=e=>(()=>{const t=S9();return k(t,E(pe,{get when(){return e.kind==null||e.kind===at.Text},get fallback(){return R9(e.eventId)},get children(){return I9(e.eventId)}})),t})();var Ba={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ba.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,h="__lodash_placeholder__",g=1,v=2,y=4,w=1,x=2,$=1,S=2,L=4,C=8,R=16,P=32,A=64,D=128,U=256,q=512,Q=30,te="...",ne=800,se=16,ee=1,j=2,W=3,J=1/0,le=9007199254740991,Y=17976931348623157e292,me=0/0,ve=4294967295,$e=ve-1,Je=ve>>>1,ue=[["ary",D],["bind",$],["bindKey",S],["curry",C],["curryRight",R],["flip",q],["partial",P],["partialRight",A],["rearg",U]],Se="[object Arguments]",Ee="[object Array]",G="[object AsyncFunction]",re="[object Boolean]",ae="[object Date]",Te="[object DOMException]",Ke="[object Error]",oe="[object Function]",Z="[object GeneratorFunction]",qe="[object Map]",xt="[object Number]",Fn="[object Null]",Bt="[object Object]",xn="[object Promise]",ni="[object Proxy]",$n="[object RegExp]",Ct="[object Set]",Jt="[object String]",zn="[object Symbol]",Sr="[object Undefined]",En="[object WeakMap]",Ae="[object WeakSet]",Ht="[object ArrayBuffer]",Wt="[object DataView]",kn="[object Float32Array]",Cn="[object Float64Array]",cn="[object Int8Array]",un="[object Int16Array]",Sn="[object Int32Array]",sr="[object Uint8Array]",or="[object Uint8ClampedArray]",ar="[object Uint16Array]",Li="[object Uint32Array]",wo=/\b__p \+= '';/g,xo=/\b(__p \+=) '' \+/g,$o=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Vd=/&(?:amp|lt|gt|quot|#39);/g,Gd=/[&<>"']/g,Lm=RegExp(Vd.source),Pm=RegExp(Gd.source),Mm=/<%-([\s\S]+?)%>/g,Bm=/<%([\s\S]+?)%>/g,Yd=/<%=([\s\S]+?)%>/g,jm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Nm=/^\w*$/,Dm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ll=/[\\^$.*+?()[\]{}|]/g,Um=RegExp(Ll.source),Pl=/^\s+/,Fm=/\s/,zm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Hm=/\{\n\/\* \[wrapped with (.+)\] \*/,Wm=/,? & /,qm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Zm=/[()=,{}\[\]\/\s]/,Km=/\\(\\)?/g,Vm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Jd=/\w*$/,Gm=/^[-+]0x[0-9a-f]+$/i,Ym=/^0b[01]+$/i,Jm=/^\[object .+?Constructor\]$/,Xm=/^0o[0-7]+$/i,Qm=/^(?:0|[1-9]\d*)$/,e2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Eo=/($^)/,t2=/['\n\r\u2028\u2029\\]/g,ko="\\ud800-\\udfff",n2="\\u0300-\\u036f",r2="\\ufe20-\\ufe2f",i2="\\u20d0-\\u20ff",Xd=n2+r2+i2,Qd="\\u2700-\\u27bf",ef="a-z\\xdf-\\xf6\\xf8-\\xff",s2="\\xac\\xb1\\xd7\\xf7",o2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",a2="\\u2000-\\u206f",l2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tf="A-Z\\xc0-\\xd6\\xd8-\\xde",nf="\\ufe0e\\ufe0f",rf=s2+o2+a2+l2,Ml="['’]",c2="["+ko+"]",sf="["+rf+"]",Co="["+Xd+"]",of="\\d+",u2="["+Qd+"]",af="["+ef+"]",lf="[^"+ko+rf+of+Qd+ef+tf+"]",Bl="\\ud83c[\\udffb-\\udfff]",d2="(?:"+Co+"|"+Bl+")",cf="[^"+ko+"]",jl="(?:\\ud83c[\\udde6-\\uddff]){2}",Nl="[\\ud800-\\udbff][\\udc00-\\udfff]",Pi="["+tf+"]",uf="\\u200d",df="(?:"+af+"|"+lf+")",f2="(?:"+Pi+"|"+lf+")",ff="(?:"+Ml+"(?:d|ll|m|re|s|t|ve))?",hf="(?:"+Ml+"(?:D|LL|M|RE|S|T|VE))?",pf=d2+"?",gf="["+nf+"]?",h2="(?:"+uf+"(?:"+[cf,jl,Nl].join("|")+")"+gf+pf+")*",p2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",g2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",vf=gf+pf+h2,v2="(?:"+[u2,jl,Nl].join("|")+")"+vf,m2="(?:"+[cf+Co+"?",Co,jl,Nl,c2].join("|")+")",b2=RegExp(Ml,"g"),y2=RegExp(Co,"g"),Dl=RegExp(Bl+"(?="+Bl+")|"+m2+vf,"g"),_2=RegExp([Pi+"?"+af+"+"+ff+"(?="+[sf,Pi,"$"].join("|")+")",f2+"+"+hf+"(?="+[sf,Pi+df,"$"].join("|")+")",Pi+"?"+df+"+"+ff,Pi+"+"+hf,g2,p2,of,v2].join("|"),"g"),w2=RegExp("["+uf+ko+Xd+nf+"]"),x2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,$2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],E2=-1,st={};st[kn]=st[Cn]=st[cn]=st[un]=st[Sn]=st[sr]=st[or]=st[ar]=st[Li]=!0,st[Se]=st[Ee]=st[Ht]=st[re]=st[Wt]=st[ae]=st[Ke]=st[oe]=st[qe]=st[xt]=st[Bt]=st[$n]=st[Ct]=st[Jt]=st[En]=!1;var nt={};nt[Se]=nt[Ee]=nt[Ht]=nt[Wt]=nt[re]=nt[ae]=nt[kn]=nt[Cn]=nt[cn]=nt[un]=nt[Sn]=nt[qe]=nt[xt]=nt[Bt]=nt[$n]=nt[Ct]=nt[Jt]=nt[zn]=nt[sr]=nt[or]=nt[ar]=nt[Li]=!0,nt[Ke]=nt[oe]=nt[En]=!1;var k2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},C2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},S2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},T2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},A2=parseFloat,I2=parseInt,mf=typeof wt=="object"&&wt&&wt.Object===Object&&wt,R2=typeof self=="object"&&self&&self.Object===Object&&self,St=mf||R2||Function("return this")(),Ul=t&&!t.nodeType&&t,ri=Ul&&!0&&e&&!e.nodeType&&e,bf=ri&&ri.exports===Ul,Fl=bf&&mf.process,dn=function(){try{var O=ri&&ri.require&&ri.require("util").types;return O||Fl&&Fl.binding&&Fl.binding("util")}catch{}}(),yf=dn&&dn.isArrayBuffer,_f=dn&&dn.isDate,wf=dn&&dn.isMap,xf=dn&&dn.isRegExp,$f=dn&&dn.isSet,Ef=dn&&dn.isTypedArray;function Xt(O,F,N){switch(N.length){case 0:return O.call(F);case 1:return O.call(F,N[0]);case 2:return O.call(F,N[0],N[1]);case 3:return O.call(F,N[0],N[1],N[2])}return O.apply(F,N)}function O2(O,F,N,de){for(var Ie=-1,Ge=O==null?0:O.length;++Ie<Ge;){var yt=O[Ie];F(de,yt,N(yt),O)}return de}function fn(O,F){for(var N=-1,de=O==null?0:O.length;++N<de&&F(O[N],N,O)!==!1;);return O}function L2(O,F){for(var N=O==null?0:O.length;N--&&F(O[N],N,O)!==!1;);return O}function kf(O,F){for(var N=-1,de=O==null?0:O.length;++N<de;)if(!F(O[N],N,O))return!1;return!0}function Tr(O,F){for(var N=-1,de=O==null?0:O.length,Ie=0,Ge=[];++N<de;){var yt=O[N];F(yt,N,O)&&(Ge[Ie++]=yt)}return Ge}function So(O,F){var N=O==null?0:O.length;return!!N&&Mi(O,F,0)>-1}function zl(O,F,N){for(var de=-1,Ie=O==null?0:O.length;++de<Ie;)if(N(F,O[de]))return!0;return!1}function lt(O,F){for(var N=-1,de=O==null?0:O.length,Ie=Array(de);++N<de;)Ie[N]=F(O[N],N,O);return Ie}function Ar(O,F){for(var N=-1,de=F.length,Ie=O.length;++N<de;)O[Ie+N]=F[N];return O}function Hl(O,F,N,de){var Ie=-1,Ge=O==null?0:O.length;for(de&&Ge&&(N=O[++Ie]);++Ie<Ge;)N=F(N,O[Ie],Ie,O);return N}function P2(O,F,N,de){var Ie=O==null?0:O.length;for(de&&Ie&&(N=O[--Ie]);Ie--;)N=F(N,O[Ie],Ie,O);return N}function Wl(O,F){for(var N=-1,de=O==null?0:O.length;++N<de;)if(F(O[N],N,O))return!0;return!1}var M2=ql("length");function B2(O){return O.split("")}function j2(O){return O.match(qm)||[]}function Cf(O,F,N){var de;return N(O,function(Ie,Ge,yt){if(F(Ie,Ge,yt))return de=Ge,!1}),de}function To(O,F,N,de){for(var Ie=O.length,Ge=N+(de?1:-1);de?Ge--:++Ge<Ie;)if(F(O[Ge],Ge,O))return Ge;return-1}function Mi(O,F,N){return F===F?G2(O,F,N):To(O,Sf,N)}function N2(O,F,N,de){for(var Ie=N-1,Ge=O.length;++Ie<Ge;)if(de(O[Ie],F))return Ie;return-1}function Sf(O){return O!==O}function Tf(O,F){var N=O==null?0:O.length;return N?Kl(O,F)/N:me}function ql(O){return function(F){return F==null?n:F[O]}}function Zl(O){return function(F){return O==null?n:O[F]}}function Af(O,F,N,de,Ie){return Ie(O,function(Ge,yt,tt){N=de?(de=!1,Ge):F(N,Ge,yt,tt)}),N}function D2(O,F){var N=O.length;for(O.sort(F);N--;)O[N]=O[N].value;return O}function Kl(O,F){for(var N,de=-1,Ie=O.length;++de<Ie;){var Ge=F(O[de]);Ge!==n&&(N=N===n?Ge:N+Ge)}return N}function Vl(O,F){for(var N=-1,de=Array(O);++N<O;)de[N]=F(N);return de}function U2(O,F){return lt(F,function(N){return[N,O[N]]})}function If(O){return O&&O.slice(0,Pf(O)+1).replace(Pl,"")}function Qt(O){return function(F){return O(F)}}function Gl(O,F){return lt(F,function(N){return O[N]})}function Es(O,F){return O.has(F)}function Rf(O,F){for(var N=-1,de=O.length;++N<de&&Mi(F,O[N],0)>-1;);return N}function Of(O,F){for(var N=O.length;N--&&Mi(F,O[N],0)>-1;);return N}function F2(O,F){for(var N=O.length,de=0;N--;)O[N]===F&&++de;return de}var z2=Zl(k2),H2=Zl(C2);function W2(O){return"\\"+T2[O]}function q2(O,F){return O==null?n:O[F]}function Bi(O){return w2.test(O)}function Z2(O){return x2.test(O)}function K2(O){for(var F,N=[];!(F=O.next()).done;)N.push(F.value);return N}function Yl(O){var F=-1,N=Array(O.size);return O.forEach(function(de,Ie){N[++F]=[Ie,de]}),N}function Lf(O,F){return function(N){return O(F(N))}}function Ir(O,F){for(var N=-1,de=O.length,Ie=0,Ge=[];++N<de;){var yt=O[N];(yt===F||yt===h)&&(O[N]=h,Ge[Ie++]=N)}return Ge}function Ao(O){var F=-1,N=Array(O.size);return O.forEach(function(de){N[++F]=de}),N}function V2(O){var F=-1,N=Array(O.size);return O.forEach(function(de){N[++F]=[de,de]}),N}function G2(O,F,N){for(var de=N-1,Ie=O.length;++de<Ie;)if(O[de]===F)return de;return-1}function Y2(O,F,N){for(var de=N+1;de--;)if(O[de]===F)return de;return de}function ji(O){return Bi(O)?X2(O):M2(O)}function Tn(O){return Bi(O)?Q2(O):B2(O)}function Pf(O){for(var F=O.length;F--&&Fm.test(O.charAt(F)););return F}var J2=Zl(S2);function X2(O){for(var F=Dl.lastIndex=0;Dl.test(O);)++F;return F}function Q2(O){return O.match(Dl)||[]}function eb(O){return O.match(_2)||[]}var tb=function O(F){F=F==null?St:Ni.defaults(St.Object(),F,Ni.pick(St,$2));var N=F.Array,de=F.Date,Ie=F.Error,Ge=F.Function,yt=F.Math,tt=F.Object,Jl=F.RegExp,nb=F.String,hn=F.TypeError,Io=N.prototype,rb=Ge.prototype,Di=tt.prototype,Ro=F["__core-js_shared__"],Oo=rb.toString,et=Di.hasOwnProperty,ib=0,Mf=function(){var r=/[^.]+$/.exec(Ro&&Ro.keys&&Ro.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Lo=Di.toString,sb=Oo.call(tt),ob=St._,ab=Jl("^"+Oo.call(et).replace(Ll,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Po=bf?F.Buffer:n,Rr=F.Symbol,Mo=F.Uint8Array,Bf=Po?Po.allocUnsafe:n,Bo=Lf(tt.getPrototypeOf,tt),jf=tt.create,Nf=Di.propertyIsEnumerable,jo=Io.splice,Df=Rr?Rr.isConcatSpreadable:n,ks=Rr?Rr.iterator:n,ii=Rr?Rr.toStringTag:n,No=function(){try{var r=ci(tt,"defineProperty");return r({},"",{}),r}catch{}}(),lb=F.clearTimeout!==St.clearTimeout&&F.clearTimeout,cb=de&&de.now!==St.Date.now&&de.now,ub=F.setTimeout!==St.setTimeout&&F.setTimeout,Do=yt.ceil,Uo=yt.floor,Xl=tt.getOwnPropertySymbols,db=Po?Po.isBuffer:n,Uf=F.isFinite,fb=Io.join,hb=Lf(tt.keys,tt),_t=yt.max,Ot=yt.min,pb=de.now,gb=F.parseInt,Ff=yt.random,vb=Io.reverse,Ql=ci(F,"DataView"),Cs=ci(F,"Map"),ec=ci(F,"Promise"),Ui=ci(F,"Set"),Ss=ci(F,"WeakMap"),Ts=ci(tt,"create"),Fo=Ss&&new Ss,Fi={},mb=ui(Ql),bb=ui(Cs),yb=ui(ec),_b=ui(Ui),wb=ui(Ss),zo=Rr?Rr.prototype:n,As=zo?zo.valueOf:n,zf=zo?zo.toString:n;function b(r){if(ft(r)&&!Oe(r)&&!(r instanceof We)){if(r instanceof pn)return r;if(et.call(r,"__wrapped__"))return Hh(r)}return new pn(r)}var zi=function(){function r(){}return function(s){if(!ct(s))return{};if(jf)return jf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Ho(){}function pn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}b.templateSettings={escape:Mm,evaluate:Bm,interpolate:Yd,variable:"",imports:{_:b}},b.prototype=Ho.prototype,b.prototype.constructor=b,pn.prototype=zi(Ho.prototype),pn.prototype.constructor=pn;function We(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ve,this.__views__=[]}function xb(){var r=new We(this.__wrapped__);return r.__actions__=qt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=qt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=qt(this.__views__),r}function $b(){if(this.__filtered__){var r=new We(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Eb(){var r=this.__wrapped__.value(),s=this.__dir__,c=Oe(r),p=s<0,m=c?r.length:0,_=By(0,m,this.__views__),T=_.start,I=_.end,M=I-T,z=p?I:T-1,H=this.__iteratees__,V=H.length,ie=0,ge=Ot(M,this.__takeCount__);if(!c||!p&&m==M&&ge==M)return fh(r,this.__actions__);var we=[];e:for(;M--&&ie<ge;){z+=s;for(var Be=-1,xe=r[z];++Be<V;){var ze=H[Be],Ze=ze.iteratee,nn=ze.type,Dt=Ze(xe);if(nn==j)xe=Dt;else if(!Dt){if(nn==ee)continue e;break e}}we[ie++]=xe}return we}We.prototype=zi(Ho.prototype),We.prototype.constructor=We;function si(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var p=r[s];this.set(p[0],p[1])}}function kb(){this.__data__=Ts?Ts(null):{},this.size=0}function Cb(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Sb(r){var s=this.__data__;if(Ts){var c=s[r];return c===d?n:c}return et.call(s,r)?s[r]:n}function Tb(r){var s=this.__data__;return Ts?s[r]!==n:et.call(s,r)}function Ab(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Ts&&s===n?d:s,this}si.prototype.clear=kb,si.prototype.delete=Cb,si.prototype.get=Sb,si.prototype.has=Tb,si.prototype.set=Ab;function lr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var p=r[s];this.set(p[0],p[1])}}function Ib(){this.__data__=[],this.size=0}function Rb(r){var s=this.__data__,c=Wo(s,r);if(c<0)return!1;var p=s.length-1;return c==p?s.pop():jo.call(s,c,1),--this.size,!0}function Ob(r){var s=this.__data__,c=Wo(s,r);return c<0?n:s[c][1]}function Lb(r){return Wo(this.__data__,r)>-1}function Pb(r,s){var c=this.__data__,p=Wo(c,r);return p<0?(++this.size,c.push([r,s])):c[p][1]=s,this}lr.prototype.clear=Ib,lr.prototype.delete=Rb,lr.prototype.get=Ob,lr.prototype.has=Lb,lr.prototype.set=Pb;function cr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var p=r[s];this.set(p[0],p[1])}}function Mb(){this.size=0,this.__data__={hash:new si,map:new(Cs||lr),string:new si}}function Bb(r){var s=na(this,r).delete(r);return this.size-=s?1:0,s}function jb(r){return na(this,r).get(r)}function Nb(r){return na(this,r).has(r)}function Db(r,s){var c=na(this,r),p=c.size;return c.set(r,s),this.size+=c.size==p?0:1,this}cr.prototype.clear=Mb,cr.prototype.delete=Bb,cr.prototype.get=jb,cr.prototype.has=Nb,cr.prototype.set=Db;function oi(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new cr;++s<c;)this.add(r[s])}function Ub(r){return this.__data__.set(r,d),this}function Fb(r){return this.__data__.has(r)}oi.prototype.add=oi.prototype.push=Ub,oi.prototype.has=Fb;function An(r){var s=this.__data__=new lr(r);this.size=s.size}function zb(){this.__data__=new lr,this.size=0}function Hb(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function Wb(r){return this.__data__.get(r)}function qb(r){return this.__data__.has(r)}function Zb(r,s){var c=this.__data__;if(c instanceof lr){var p=c.__data__;if(!Cs||p.length<o-1)return p.push([r,s]),this.size=++c.size,this;c=this.__data__=new cr(p)}return c.set(r,s),this.size=c.size,this}An.prototype.clear=zb,An.prototype.delete=Hb,An.prototype.get=Wb,An.prototype.has=qb,An.prototype.set=Zb;function Hf(r,s){var c=Oe(r),p=!c&&di(r),m=!c&&!p&&Br(r),_=!c&&!p&&!m&&Zi(r),T=c||p||m||_,I=T?Vl(r.length,nb):[],M=I.length;for(var z in r)(s||et.call(r,z))&&!(T&&(z=="length"||m&&(z=="offset"||z=="parent")||_&&(z=="buffer"||z=="byteLength"||z=="byteOffset")||hr(z,M)))&&I.push(z);return I}function Wf(r){var s=r.length;return s?r[dc(0,s-1)]:n}function Kb(r,s){return ra(qt(r),ai(s,0,r.length))}function Vb(r){return ra(qt(r))}function tc(r,s,c){(c!==n&&!In(r[s],c)||c===n&&!(s in r))&&ur(r,s,c)}function Is(r,s,c){var p=r[s];(!(et.call(r,s)&&In(p,c))||c===n&&!(s in r))&&ur(r,s,c)}function Wo(r,s){for(var c=r.length;c--;)if(In(r[c][0],s))return c;return-1}function Gb(r,s,c,p){return Or(r,function(m,_,T){s(p,m,c(m),T)}),p}function qf(r,s){return r&&Wn(s,$t(s),r)}function Yb(r,s){return r&&Wn(s,Kt(s),r)}function ur(r,s,c){s=="__proto__"&&No?No(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function nc(r,s){for(var c=-1,p=s.length,m=N(p),_=r==null;++c<p;)m[c]=_?n:Bc(r,s[c]);return m}function ai(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function gn(r,s,c,p,m,_){var T,I=s&g,M=s&v,z=s&y;if(c&&(T=m?c(r,p,m,_):c(r)),T!==n)return T;if(!ct(r))return r;var H=Oe(r);if(H){if(T=Ny(r),!I)return qt(r,T)}else{var V=Lt(r),ie=V==oe||V==Z;if(Br(r))return gh(r,I);if(V==Bt||V==Se||ie&&!m){if(T=M||ie?{}:Ph(r),!I)return M?Sy(r,Yb(T,r)):Cy(r,qf(T,r))}else{if(!nt[V])return m?r:{};T=Dy(r,V,I)}}_||(_=new An);var ge=_.get(r);if(ge)return ge;_.set(r,T),cp(r)?r.forEach(function(xe){T.add(gn(xe,s,c,xe,r,_))}):ap(r)&&r.forEach(function(xe,ze){T.set(ze,gn(xe,s,c,ze,r,_))});var we=z?M?xc:wc:M?Kt:$t,Be=H?n:we(r);return fn(Be||r,function(xe,ze){Be&&(ze=xe,xe=r[ze]),Is(T,ze,gn(xe,s,c,ze,r,_))}),T}function Jb(r){var s=$t(r);return function(c){return Zf(c,r,s)}}function Zf(r,s,c){var p=c.length;if(r==null)return!p;for(r=tt(r);p--;){var m=c[p],_=s[m],T=r[m];if(T===n&&!(m in r)||!_(T))return!1}return!0}function Kf(r,s,c){if(typeof r!="function")throw new hn(l);return js(function(){r.apply(n,c)},s)}function Rs(r,s,c,p){var m=-1,_=So,T=!0,I=r.length,M=[],z=s.length;if(!I)return M;c&&(s=lt(s,Qt(c))),p?(_=zl,T=!1):s.length>=o&&(_=Es,T=!1,s=new oi(s));e:for(;++m<I;){var H=r[m],V=c==null?H:c(H);if(H=p||H!==0?H:0,T&&V===V){for(var ie=z;ie--;)if(s[ie]===V)continue e;M.push(H)}else _(s,V,p)||M.push(H)}return M}var Or=_h(Hn),Vf=_h(ic,!0);function Xb(r,s){var c=!0;return Or(r,function(p,m,_){return c=!!s(p,m,_),c}),c}function qo(r,s,c){for(var p=-1,m=r.length;++p<m;){var _=r[p],T=s(_);if(T!=null&&(I===n?T===T&&!tn(T):c(T,I)))var I=T,M=_}return M}function Qb(r,s,c,p){var m=r.length;for(c=Me(c),c<0&&(c=-c>m?0:m+c),p=p===n||p>m?m:Me(p),p<0&&(p+=m),p=c>p?0:dp(p);c<p;)r[c++]=s;return r}function Gf(r,s){var c=[];return Or(r,function(p,m,_){s(p,m,_)&&c.push(p)}),c}function Tt(r,s,c,p,m){var _=-1,T=r.length;for(c||(c=Fy),m||(m=[]);++_<T;){var I=r[_];s>0&&c(I)?s>1?Tt(I,s-1,c,p,m):Ar(m,I):p||(m[m.length]=I)}return m}var rc=wh(),Yf=wh(!0);function Hn(r,s){return r&&rc(r,s,$t)}function ic(r,s){return r&&Yf(r,s,$t)}function Zo(r,s){return Tr(s,function(c){return pr(r[c])})}function li(r,s){s=Pr(s,r);for(var c=0,p=s.length;r!=null&&c<p;)r=r[qn(s[c++])];return c&&c==p?r:n}function Jf(r,s,c){var p=s(r);return Oe(r)?p:Ar(p,c(r))}function jt(r){return r==null?r===n?Sr:Fn:ii&&ii in tt(r)?My(r):Vy(r)}function sc(r,s){return r>s}function ey(r,s){return r!=null&&et.call(r,s)}function ty(r,s){return r!=null&&s in tt(r)}function ny(r,s,c){return r>=Ot(s,c)&&r<_t(s,c)}function oc(r,s,c){for(var p=c?zl:So,m=r[0].length,_=r.length,T=_,I=N(_),M=1/0,z=[];T--;){var H=r[T];T&&s&&(H=lt(H,Qt(s))),M=Ot(H.length,M),I[T]=!c&&(s||m>=120&&H.length>=120)?new oi(T&&H):n}H=r[0];var V=-1,ie=I[0];e:for(;++V<m&&z.length<M;){var ge=H[V],we=s?s(ge):ge;if(ge=c||ge!==0?ge:0,!(ie?Es(ie,we):p(z,we,c))){for(T=_;--T;){var Be=I[T];if(!(Be?Es(Be,we):p(r[T],we,c)))continue e}ie&&ie.push(we),z.push(ge)}}return z}function ry(r,s,c,p){return Hn(r,function(m,_,T){s(p,c(m),_,T)}),p}function Os(r,s,c){s=Pr(s,r),r=Nh(r,s);var p=r==null?r:r[qn(mn(s))];return p==null?n:Xt(p,r,c)}function Xf(r){return ft(r)&&jt(r)==Se}function iy(r){return ft(r)&&jt(r)==Ht}function sy(r){return ft(r)&&jt(r)==ae}function Ls(r,s,c,p,m){return r===s?!0:r==null||s==null||!ft(r)&&!ft(s)?r!==r&&s!==s:oy(r,s,c,p,Ls,m)}function oy(r,s,c,p,m,_){var T=Oe(r),I=Oe(s),M=T?Ee:Lt(r),z=I?Ee:Lt(s);M=M==Se?Bt:M,z=z==Se?Bt:z;var H=M==Bt,V=z==Bt,ie=M==z;if(ie&&Br(r)){if(!Br(s))return!1;T=!0,H=!1}if(ie&&!H)return _||(_=new An),T||Zi(r)?Rh(r,s,c,p,m,_):Ly(r,s,M,c,p,m,_);if(!(c&w)){var ge=H&&et.call(r,"__wrapped__"),we=V&&et.call(s,"__wrapped__");if(ge||we){var Be=ge?r.value():r,xe=we?s.value():s;return _||(_=new An),m(Be,xe,c,p,_)}}return ie?(_||(_=new An),Py(r,s,c,p,m,_)):!1}function ay(r){return ft(r)&&Lt(r)==qe}function ac(r,s,c,p){var m=c.length,_=m,T=!p;if(r==null)return!_;for(r=tt(r);m--;){var I=c[m];if(T&&I[2]?I[1]!==r[I[0]]:!(I[0]in r))return!1}for(;++m<_;){I=c[m];var M=I[0],z=r[M],H=I[1];if(T&&I[2]){if(z===n&&!(M in r))return!1}else{var V=new An;if(p)var ie=p(z,H,M,r,s,V);if(!(ie===n?Ls(H,z,w|x,p,V):ie))return!1}}return!0}function Qf(r){if(!ct(r)||Hy(r))return!1;var s=pr(r)?ab:Jm;return s.test(ui(r))}function ly(r){return ft(r)&&jt(r)==$n}function cy(r){return ft(r)&&Lt(r)==Ct}function uy(r){return ft(r)&&ca(r.length)&&!!st[jt(r)]}function eh(r){return typeof r=="function"?r:r==null?Vt:typeof r=="object"?Oe(r)?rh(r[0],r[1]):nh(r):xp(r)}function lc(r){if(!Bs(r))return hb(r);var s=[];for(var c in tt(r))et.call(r,c)&&c!="constructor"&&s.push(c);return s}function dy(r){if(!ct(r))return Ky(r);var s=Bs(r),c=[];for(var p in r)p=="constructor"&&(s||!et.call(r,p))||c.push(p);return c}function cc(r,s){return r<s}function th(r,s){var c=-1,p=Zt(r)?N(r.length):[];return Or(r,function(m,_,T){p[++c]=s(m,_,T)}),p}function nh(r){var s=Ec(r);return s.length==1&&s[0][2]?Bh(s[0][0],s[0][1]):function(c){return c===r||ac(c,r,s)}}function rh(r,s){return Cc(r)&&Mh(s)?Bh(qn(r),s):function(c){var p=Bc(c,r);return p===n&&p===s?jc(c,r):Ls(s,p,w|x)}}function Ko(r,s,c,p,m){r!==s&&rc(s,function(_,T){if(m||(m=new An),ct(_))fy(r,s,T,c,Ko,p,m);else{var I=p?p(Tc(r,T),_,T+"",r,s,m):n;I===n&&(I=_),tc(r,T,I)}},Kt)}function fy(r,s,c,p,m,_,T){var I=Tc(r,c),M=Tc(s,c),z=T.get(M);if(z){tc(r,c,z);return}var H=_?_(I,M,c+"",r,s,T):n,V=H===n;if(V){var ie=Oe(M),ge=!ie&&Br(M),we=!ie&&!ge&&Zi(M);H=M,ie||ge||we?Oe(I)?H=I:ht(I)?H=qt(I):ge?(V=!1,H=gh(M,!0)):we?(V=!1,H=vh(M,!0)):H=[]:Ns(M)||di(M)?(H=I,di(I)?H=fp(I):(!ct(I)||pr(I))&&(H=Ph(M))):V=!1}V&&(T.set(M,H),m(H,M,p,_,T),T.delete(M)),tc(r,c,H)}function ih(r,s){var c=r.length;if(c)return s+=s<0?c:0,hr(s,c)?r[s]:n}function sh(r,s,c){s.length?s=lt(s,function(_){return Oe(_)?function(T){return li(T,_.length===1?_[0]:_)}:_}):s=[Vt];var p=-1;s=lt(s,Qt(ye()));var m=th(r,function(_,T,I){var M=lt(s,function(z){return z(_)});return{criteria:M,index:++p,value:_}});return D2(m,function(_,T){return ky(_,T,c)})}function hy(r,s){return oh(r,s,function(c,p){return jc(r,p)})}function oh(r,s,c){for(var p=-1,m=s.length,_={};++p<m;){var T=s[p],I=li(r,T);c(I,T)&&Ps(_,Pr(T,r),I)}return _}function py(r){return function(s){return li(s,r)}}function uc(r,s,c,p){var m=p?N2:Mi,_=-1,T=s.length,I=r;for(r===s&&(s=qt(s)),c&&(I=lt(r,Qt(c)));++_<T;)for(var M=0,z=s[_],H=c?c(z):z;(M=m(I,H,M,p))>-1;)I!==r&&jo.call(I,M,1),jo.call(r,M,1);return r}function ah(r,s){for(var c=r?s.length:0,p=c-1;c--;){var m=s[c];if(c==p||m!==_){var _=m;hr(m)?jo.call(r,m,1):pc(r,m)}}return r}function dc(r,s){return r+Uo(Ff()*(s-r+1))}function gy(r,s,c,p){for(var m=-1,_=_t(Do((s-r)/(c||1)),0),T=N(_);_--;)T[p?_:++m]=r,r+=c;return T}function fc(r,s){var c="";if(!r||s<1||s>le)return c;do s%2&&(c+=r),s=Uo(s/2),s&&(r+=r);while(s);return c}function De(r,s){return Ac(jh(r,s,Vt),r+"")}function vy(r){return Wf(Ki(r))}function my(r,s){var c=Ki(r);return ra(c,ai(s,0,c.length))}function Ps(r,s,c,p){if(!ct(r))return r;s=Pr(s,r);for(var m=-1,_=s.length,T=_-1,I=r;I!=null&&++m<_;){var M=qn(s[m]),z=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(m!=T){var H=I[M];z=p?p(H,M,I):n,z===n&&(z=ct(H)?H:hr(s[m+1])?[]:{})}Is(I,M,z),I=I[M]}return r}var lh=Fo?function(r,s){return Fo.set(r,s),r}:Vt,by=No?function(r,s){return No(r,"toString",{configurable:!0,enumerable:!1,value:Dc(s),writable:!0})}:Vt;function yy(r){return ra(Ki(r))}function vn(r,s,c){var p=-1,m=r.length;s<0&&(s=-s>m?0:m+s),c=c>m?m:c,c<0&&(c+=m),m=s>c?0:c-s>>>0,s>>>=0;for(var _=N(m);++p<m;)_[p]=r[p+s];return _}function _y(r,s){var c;return Or(r,function(p,m,_){return c=s(p,m,_),!c}),!!c}function Vo(r,s,c){var p=0,m=r==null?p:r.length;if(typeof s=="number"&&s===s&&m<=Je){for(;p<m;){var _=p+m>>>1,T=r[_];T!==null&&!tn(T)&&(c?T<=s:T<s)?p=_+1:m=_}return m}return hc(r,s,Vt,c)}function hc(r,s,c,p){var m=0,_=r==null?0:r.length;if(_===0)return 0;s=c(s);for(var T=s!==s,I=s===null,M=tn(s),z=s===n;m<_;){var H=Uo((m+_)/2),V=c(r[H]),ie=V!==n,ge=V===null,we=V===V,Be=tn(V);if(T)var xe=p||we;else z?xe=we&&(p||ie):I?xe=we&&ie&&(p||!ge):M?xe=we&&ie&&!ge&&(p||!Be):ge||Be?xe=!1:xe=p?V<=s:V<s;xe?m=H+1:_=H}return Ot(_,$e)}function ch(r,s){for(var c=-1,p=r.length,m=0,_=[];++c<p;){var T=r[c],I=s?s(T):T;if(!c||!In(I,M)){var M=I;_[m++]=T===0?0:T}}return _}function uh(r){return typeof r=="number"?r:tn(r)?me:+r}function en(r){if(typeof r=="string")return r;if(Oe(r))return lt(r,en)+"";if(tn(r))return zf?zf.call(r):"";var s=r+"";return s=="0"&&1/r==-J?"-0":s}function Lr(r,s,c){var p=-1,m=So,_=r.length,T=!0,I=[],M=I;if(c)T=!1,m=zl;else if(_>=o){var z=s?null:Ry(r);if(z)return Ao(z);T=!1,m=Es,M=new oi}else M=s?[]:I;e:for(;++p<_;){var H=r[p],V=s?s(H):H;if(H=c||H!==0?H:0,T&&V===V){for(var ie=M.length;ie--;)if(M[ie]===V)continue e;s&&M.push(V),I.push(H)}else m(M,V,c)||(M!==I&&M.push(V),I.push(H))}return I}function pc(r,s){return s=Pr(s,r),r=Nh(r,s),r==null||delete r[qn(mn(s))]}function dh(r,s,c,p){return Ps(r,s,c(li(r,s)),p)}function Go(r,s,c,p){for(var m=r.length,_=p?m:-1;(p?_--:++_<m)&&s(r[_],_,r););return c?vn(r,p?0:_,p?_+1:m):vn(r,p?_+1:0,p?m:_)}function fh(r,s){var c=r;return c instanceof We&&(c=c.value()),Hl(s,function(p,m){return m.func.apply(m.thisArg,Ar([p],m.args))},c)}function gc(r,s,c){var p=r.length;if(p<2)return p?Lr(r[0]):[];for(var m=-1,_=N(p);++m<p;)for(var T=r[m],I=-1;++I<p;)I!=m&&(_[m]=Rs(_[m]||T,r[I],s,c));return Lr(Tt(_,1),s,c)}function hh(r,s,c){for(var p=-1,m=r.length,_=s.length,T={};++p<m;){var I=p<_?s[p]:n;c(T,r[p],I)}return T}function vc(r){return ht(r)?r:[]}function mc(r){return typeof r=="function"?r:Vt}function Pr(r,s){return Oe(r)?r:Cc(r,s)?[r]:zh(Xe(r))}var wy=De;function Mr(r,s,c){var p=r.length;return c=c===n?p:c,!s&&c>=p?r:vn(r,s,c)}var ph=lb||function(r){return St.clearTimeout(r)};function gh(r,s){if(s)return r.slice();var c=r.length,p=Bf?Bf(c):new r.constructor(c);return r.copy(p),p}function bc(r){var s=new r.constructor(r.byteLength);return new Mo(s).set(new Mo(r)),s}function xy(r,s){var c=s?bc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function $y(r){var s=new r.constructor(r.source,Jd.exec(r));return s.lastIndex=r.lastIndex,s}function Ey(r){return As?tt(As.call(r)):{}}function vh(r,s){var c=s?bc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function mh(r,s){if(r!==s){var c=r!==n,p=r===null,m=r===r,_=tn(r),T=s!==n,I=s===null,M=s===s,z=tn(s);if(!I&&!z&&!_&&r>s||_&&T&&M&&!I&&!z||p&&T&&M||!c&&M||!m)return 1;if(!p&&!_&&!z&&r<s||z&&c&&m&&!p&&!_||I&&c&&m||!T&&m||!M)return-1}return 0}function ky(r,s,c){for(var p=-1,m=r.criteria,_=s.criteria,T=m.length,I=c.length;++p<T;){var M=mh(m[p],_[p]);if(M){if(p>=I)return M;var z=c[p];return M*(z=="desc"?-1:1)}}return r.index-s.index}function bh(r,s,c,p){for(var m=-1,_=r.length,T=c.length,I=-1,M=s.length,z=_t(_-T,0),H=N(M+z),V=!p;++I<M;)H[I]=s[I];for(;++m<T;)(V||m<_)&&(H[c[m]]=r[m]);for(;z--;)H[I++]=r[m++];return H}function yh(r,s,c,p){for(var m=-1,_=r.length,T=-1,I=c.length,M=-1,z=s.length,H=_t(_-I,0),V=N(H+z),ie=!p;++m<H;)V[m]=r[m];for(var ge=m;++M<z;)V[ge+M]=s[M];for(;++T<I;)(ie||m<_)&&(V[ge+c[T]]=r[m++]);return V}function qt(r,s){var c=-1,p=r.length;for(s||(s=N(p));++c<p;)s[c]=r[c];return s}function Wn(r,s,c,p){var m=!c;c||(c={});for(var _=-1,T=s.length;++_<T;){var I=s[_],M=p?p(c[I],r[I],I,c,r):n;M===n&&(M=r[I]),m?ur(c,I,M):Is(c,I,M)}return c}function Cy(r,s){return Wn(r,kc(r),s)}function Sy(r,s){return Wn(r,Oh(r),s)}function Yo(r,s){return function(c,p){var m=Oe(c)?O2:Gb,_=s?s():{};return m(c,r,ye(p,2),_)}}function Hi(r){return De(function(s,c){var p=-1,m=c.length,_=m>1?c[m-1]:n,T=m>2?c[2]:n;for(_=r.length>3&&typeof _=="function"?(m--,_):n,T&&Nt(c[0],c[1],T)&&(_=m<3?n:_,m=1),s=tt(s);++p<m;){var I=c[p];I&&r(s,I,p,_)}return s})}function _h(r,s){return function(c,p){if(c==null)return c;if(!Zt(c))return r(c,p);for(var m=c.length,_=s?m:-1,T=tt(c);(s?_--:++_<m)&&p(T[_],_,T)!==!1;);return c}}function wh(r){return function(s,c,p){for(var m=-1,_=tt(s),T=p(s),I=T.length;I--;){var M=T[r?I:++m];if(c(_[M],M,_)===!1)break}return s}}function Ty(r,s,c){var p=s&$,m=Ms(r);function _(){var T=this&&this!==St&&this instanceof _?m:r;return T.apply(p?c:this,arguments)}return _}function xh(r){return function(s){s=Xe(s);var c=Bi(s)?Tn(s):n,p=c?c[0]:s.charAt(0),m=c?Mr(c,1).join(""):s.slice(1);return p[r]()+m}}function Wi(r){return function(s){return Hl(_p(yp(s).replace(b2,"")),r,"")}}function Ms(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=zi(r.prototype),p=r.apply(c,s);return ct(p)?p:c}}function Ay(r,s,c){var p=Ms(r);function m(){for(var _=arguments.length,T=N(_),I=_,M=qi(m);I--;)T[I]=arguments[I];var z=_<3&&T[0]!==M&&T[_-1]!==M?[]:Ir(T,M);if(_-=z.length,_<c)return Sh(r,s,Jo,m.placeholder,n,T,z,n,n,c-_);var H=this&&this!==St&&this instanceof m?p:r;return Xt(H,this,T)}return m}function $h(r){return function(s,c,p){var m=tt(s);if(!Zt(s)){var _=ye(c,3);s=$t(s),c=function(I){return _(m[I],I,m)}}var T=r(s,c,p);return T>-1?m[_?s[T]:T]:n}}function Eh(r){return fr(function(s){var c=s.length,p=c,m=pn.prototype.thru;for(r&&s.reverse();p--;){var _=s[p];if(typeof _!="function")throw new hn(l);if(m&&!T&&ta(_)=="wrapper")var T=new pn([],!0)}for(p=T?p:c;++p<c;){_=s[p];var I=ta(_),M=I=="wrapper"?$c(_):n;M&&Sc(M[0])&&M[1]==(D|C|P|U)&&!M[4].length&&M[9]==1?T=T[ta(M[0])].apply(T,M[3]):T=_.length==1&&Sc(_)?T[I]():T.thru(_)}return function(){var z=arguments,H=z[0];if(T&&z.length==1&&Oe(H))return T.plant(H).value();for(var V=0,ie=c?s[V].apply(this,z):H;++V<c;)ie=s[V].call(this,ie);return ie}})}function Jo(r,s,c,p,m,_,T,I,M,z){var H=s&D,V=s&$,ie=s&S,ge=s&(C|R),we=s&q,Be=ie?n:Ms(r);function xe(){for(var ze=arguments.length,Ze=N(ze),nn=ze;nn--;)Ze[nn]=arguments[nn];if(ge)var Dt=qi(xe),rn=F2(Ze,Dt);if(p&&(Ze=bh(Ze,p,m,ge)),_&&(Ze=yh(Ze,_,T,ge)),ze-=rn,ge&&ze<z){var pt=Ir(Ze,Dt);return Sh(r,s,Jo,xe.placeholder,c,Ze,pt,I,M,z-ze)}var Rn=V?c:this,vr=ie?Rn[r]:r;return ze=Ze.length,I?Ze=Gy(Ze,I):we&&ze>1&&Ze.reverse(),H&&M<ze&&(Ze.length=M),this&&this!==St&&this instanceof xe&&(vr=Be||Ms(vr)),vr.apply(Rn,Ze)}return xe}function kh(r,s){return function(c,p){return ry(c,r,s(p),{})}}function Xo(r,s){return function(c,p){var m;if(c===n&&p===n)return s;if(c!==n&&(m=c),p!==n){if(m===n)return p;typeof c=="string"||typeof p=="string"?(c=en(c),p=en(p)):(c=uh(c),p=uh(p)),m=r(c,p)}return m}}function yc(r){return fr(function(s){return s=lt(s,Qt(ye())),De(function(c){var p=this;return r(s,function(m){return Xt(m,p,c)})})})}function Qo(r,s){s=s===n?" ":en(s);var c=s.length;if(c<2)return c?fc(s,r):s;var p=fc(s,Do(r/ji(s)));return Bi(s)?Mr(Tn(p),0,r).join(""):p.slice(0,r)}function Iy(r,s,c,p){var m=s&$,_=Ms(r);function T(){for(var I=-1,M=arguments.length,z=-1,H=p.length,V=N(H+M),ie=this&&this!==St&&this instanceof T?_:r;++z<H;)V[z]=p[z];for(;M--;)V[z++]=arguments[++I];return Xt(ie,m?c:this,V)}return T}function Ch(r){return function(s,c,p){return p&&typeof p!="number"&&Nt(s,c,p)&&(c=p=n),s=gr(s),c===n?(c=s,s=0):c=gr(c),p=p===n?s<c?1:-1:gr(p),gy(s,c,p,r)}}function ea(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=bn(s),c=bn(c)),r(s,c)}}function Sh(r,s,c,p,m,_,T,I,M,z){var H=s&C,V=H?T:n,ie=H?n:T,ge=H?_:n,we=H?n:_;s|=H?P:A,s&=~(H?A:P),s&L||(s&=~($|S));var Be=[r,s,m,ge,V,we,ie,I,M,z],xe=c.apply(n,Be);return Sc(r)&&Dh(xe,Be),xe.placeholder=p,Uh(xe,r,s)}function _c(r){var s=yt[r];return function(c,p){if(c=bn(c),p=p==null?0:Ot(Me(p),292),p&&Uf(c)){var m=(Xe(c)+"e").split("e"),_=s(m[0]+"e"+(+m[1]+p));return m=(Xe(_)+"e").split("e"),+(m[0]+"e"+(+m[1]-p))}return s(c)}}var Ry=Ui&&1/Ao(new Ui([,-0]))[1]==J?function(r){return new Ui(r)}:zc;function Th(r){return function(s){var c=Lt(s);return c==qe?Yl(s):c==Ct?V2(s):U2(s,r(s))}}function dr(r,s,c,p,m,_,T,I){var M=s&S;if(!M&&typeof r!="function")throw new hn(l);var z=p?p.length:0;if(z||(s&=~(P|A),p=m=n),T=T===n?T:_t(Me(T),0),I=I===n?I:Me(I),z-=m?m.length:0,s&A){var H=p,V=m;p=m=n}var ie=M?n:$c(r),ge=[r,s,c,p,m,H,V,_,T,I];if(ie&&Zy(ge,ie),r=ge[0],s=ge[1],c=ge[2],p=ge[3],m=ge[4],I=ge[9]=ge[9]===n?M?0:r.length:_t(ge[9]-z,0),!I&&s&(C|R)&&(s&=~(C|R)),!s||s==$)var we=Ty(r,s,c);else s==C||s==R?we=Ay(r,s,I):(s==P||s==($|P))&&!m.length?we=Iy(r,s,c,p):we=Jo.apply(n,ge);var Be=ie?lh:Dh;return Uh(Be(we,ge),r,s)}function Ah(r,s,c,p){return r===n||In(r,Di[c])&&!et.call(p,c)?s:r}function Ih(r,s,c,p,m,_){return ct(r)&&ct(s)&&(_.set(s,r),Ko(r,s,n,Ih,_),_.delete(s)),r}function Oy(r){return Ns(r)?n:r}function Rh(r,s,c,p,m,_){var T=c&w,I=r.length,M=s.length;if(I!=M&&!(T&&M>I))return!1;var z=_.get(r),H=_.get(s);if(z&&H)return z==s&&H==r;var V=-1,ie=!0,ge=c&x?new oi:n;for(_.set(r,s),_.set(s,r);++V<I;){var we=r[V],Be=s[V];if(p)var xe=T?p(Be,we,V,s,r,_):p(we,Be,V,r,s,_);if(xe!==n){if(xe)continue;ie=!1;break}if(ge){if(!Wl(s,function(ze,Ze){if(!Es(ge,Ze)&&(we===ze||m(we,ze,c,p,_)))return ge.push(Ze)})){ie=!1;break}}else if(!(we===Be||m(we,Be,c,p,_))){ie=!1;break}}return _.delete(r),_.delete(s),ie}function Ly(r,s,c,p,m,_,T){switch(c){case Wt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Ht:return!(r.byteLength!=s.byteLength||!_(new Mo(r),new Mo(s)));case re:case ae:case xt:return In(+r,+s);case Ke:return r.name==s.name&&r.message==s.message;case $n:case Jt:return r==s+"";case qe:var I=Yl;case Ct:var M=p&w;if(I||(I=Ao),r.size!=s.size&&!M)return!1;var z=T.get(r);if(z)return z==s;p|=x,T.set(r,s);var H=Rh(I(r),I(s),p,m,_,T);return T.delete(r),H;case zn:if(As)return As.call(r)==As.call(s)}return!1}function Py(r,s,c,p,m,_){var T=c&w,I=wc(r),M=I.length,z=wc(s),H=z.length;if(M!=H&&!T)return!1;for(var V=M;V--;){var ie=I[V];if(!(T?ie in s:et.call(s,ie)))return!1}var ge=_.get(r),we=_.get(s);if(ge&&we)return ge==s&&we==r;var Be=!0;_.set(r,s),_.set(s,r);for(var xe=T;++V<M;){ie=I[V];var ze=r[ie],Ze=s[ie];if(p)var nn=T?p(Ze,ze,ie,s,r,_):p(ze,Ze,ie,r,s,_);if(!(nn===n?ze===Ze||m(ze,Ze,c,p,_):nn)){Be=!1;break}xe||(xe=ie=="constructor")}if(Be&&!xe){var Dt=r.constructor,rn=s.constructor;Dt!=rn&&"constructor"in r&&"constructor"in s&&!(typeof Dt=="function"&&Dt instanceof Dt&&typeof rn=="function"&&rn instanceof rn)&&(Be=!1)}return _.delete(r),_.delete(s),Be}function fr(r){return Ac(jh(r,n,Zh),r+"")}function wc(r){return Jf(r,$t,kc)}function xc(r){return Jf(r,Kt,Oh)}var $c=Fo?function(r){return Fo.get(r)}:zc;function ta(r){for(var s=r.name+"",c=Fi[s],p=et.call(Fi,s)?c.length:0;p--;){var m=c[p],_=m.func;if(_==null||_==r)return m.name}return s}function qi(r){var s=et.call(b,"placeholder")?b:r;return s.placeholder}function ye(){var r=b.iteratee||Uc;return r=r===Uc?eh:r,arguments.length?r(arguments[0],arguments[1]):r}function na(r,s){var c=r.__data__;return zy(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Ec(r){for(var s=$t(r),c=s.length;c--;){var p=s[c],m=r[p];s[c]=[p,m,Mh(m)]}return s}function ci(r,s){var c=q2(r,s);return Qf(c)?c:n}function My(r){var s=et.call(r,ii),c=r[ii];try{r[ii]=n;var p=!0}catch{}var m=Lo.call(r);return p&&(s?r[ii]=c:delete r[ii]),m}var kc=Xl?function(r){return r==null?[]:(r=tt(r),Tr(Xl(r),function(s){return Nf.call(r,s)}))}:Hc,Oh=Xl?function(r){for(var s=[];r;)Ar(s,kc(r)),r=Bo(r);return s}:Hc,Lt=jt;(Ql&&Lt(new Ql(new ArrayBuffer(1)))!=Wt||Cs&&Lt(new Cs)!=qe||ec&&Lt(ec.resolve())!=xn||Ui&&Lt(new Ui)!=Ct||Ss&&Lt(new Ss)!=En)&&(Lt=function(r){var s=jt(r),c=s==Bt?r.constructor:n,p=c?ui(c):"";if(p)switch(p){case mb:return Wt;case bb:return qe;case yb:return xn;case _b:return Ct;case wb:return En}return s});function By(r,s,c){for(var p=-1,m=c.length;++p<m;){var _=c[p],T=_.size;switch(_.type){case"drop":r+=T;break;case"dropRight":s-=T;break;case"take":s=Ot(s,r+T);break;case"takeRight":r=_t(r,s-T);break}}return{start:r,end:s}}function jy(r){var s=r.match(Hm);return s?s[1].split(Wm):[]}function Lh(r,s,c){s=Pr(s,r);for(var p=-1,m=s.length,_=!1;++p<m;){var T=qn(s[p]);if(!(_=r!=null&&c(r,T)))break;r=r[T]}return _||++p!=m?_:(m=r==null?0:r.length,!!m&&ca(m)&&hr(T,m)&&(Oe(r)||di(r)))}function Ny(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&et.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Ph(r){return typeof r.constructor=="function"&&!Bs(r)?zi(Bo(r)):{}}function Dy(r,s,c){var p=r.constructor;switch(s){case Ht:return bc(r);case re:case ae:return new p(+r);case Wt:return xy(r,c);case kn:case Cn:case cn:case un:case Sn:case sr:case or:case ar:case Li:return vh(r,c);case qe:return new p;case xt:case Jt:return new p(r);case $n:return $y(r);case Ct:return new p;case zn:return Ey(r)}}function Uy(r,s){var c=s.length;if(!c)return r;var p=c-1;return s[p]=(c>1?"& ":"")+s[p],s=s.join(c>2?", ":" "),r.replace(zm,`{
/* [wrapped with `+s+`] */
`)}function Fy(r){return Oe(r)||di(r)||!!(Df&&r&&r[Df])}function hr(r,s){var c=typeof r;return s=s??le,!!s&&(c=="number"||c!="symbol"&&Qm.test(r))&&r>-1&&r%1==0&&r<s}function Nt(r,s,c){if(!ct(c))return!1;var p=typeof s;return(p=="number"?Zt(c)&&hr(s,c.length):p=="string"&&s in c)?In(c[s],r):!1}function Cc(r,s){if(Oe(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||tn(r)?!0:Nm.test(r)||!jm.test(r)||s!=null&&r in tt(s)}function zy(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Sc(r){var s=ta(r),c=b[s];if(typeof c!="function"||!(s in We.prototype))return!1;if(r===c)return!0;var p=$c(c);return!!p&&r===p[0]}function Hy(r){return!!Mf&&Mf in r}var Wy=Ro?pr:Wc;function Bs(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Di;return r===c}function Mh(r){return r===r&&!ct(r)}function Bh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in tt(c))}}function qy(r){var s=aa(r,function(p){return c.size===f&&c.clear(),p}),c=s.cache;return s}function Zy(r,s){var c=r[1],p=s[1],m=c|p,_=m<($|S|D),T=p==D&&c==C||p==D&&c==U&&r[7].length<=s[8]||p==(D|U)&&s[7].length<=s[8]&&c==C;if(!(_||T))return r;p&$&&(r[2]=s[2],m|=c&$?0:L);var I=s[3];if(I){var M=r[3];r[3]=M?bh(M,I,s[4]):I,r[4]=M?Ir(r[3],h):s[4]}return I=s[5],I&&(M=r[5],r[5]=M?yh(M,I,s[6]):I,r[6]=M?Ir(r[5],h):s[6]),I=s[7],I&&(r[7]=I),p&D&&(r[8]=r[8]==null?s[8]:Ot(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function Ky(r){var s=[];if(r!=null)for(var c in tt(r))s.push(c);return s}function Vy(r){return Lo.call(r)}function jh(r,s,c){return s=_t(s===n?r.length-1:s,0),function(){for(var p=arguments,m=-1,_=_t(p.length-s,0),T=N(_);++m<_;)T[m]=p[s+m];m=-1;for(var I=N(s+1);++m<s;)I[m]=p[m];return I[s]=c(T),Xt(r,this,I)}}function Nh(r,s){return s.length<2?r:li(r,vn(s,0,-1))}function Gy(r,s){for(var c=r.length,p=Ot(s.length,c),m=qt(r);p--;){var _=s[p];r[p]=hr(_,c)?m[_]:n}return r}function Tc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Dh=Fh(lh),js=ub||function(r,s){return St.setTimeout(r,s)},Ac=Fh(by);function Uh(r,s,c){var p=s+"";return Ac(r,Uy(p,Yy(jy(p),c)))}function Fh(r){var s=0,c=0;return function(){var p=pb(),m=se-(p-c);if(c=p,m>0){if(++s>=ne)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ra(r,s){var c=-1,p=r.length,m=p-1;for(s=s===n?p:s;++c<s;){var _=dc(c,m),T=r[_];r[_]=r[c],r[c]=T}return r.length=s,r}var zh=qy(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Dm,function(c,p,m,_){s.push(m?_.replace(Km,"$1"):p||c)}),s});function qn(r){if(typeof r=="string"||tn(r))return r;var s=r+"";return s=="0"&&1/r==-J?"-0":s}function ui(r){if(r!=null){try{return Oo.call(r)}catch{}try{return r+""}catch{}}return""}function Yy(r,s){return fn(ue,function(c){var p="_."+c[0];s&c[1]&&!So(r,p)&&r.push(p)}),r.sort()}function Hh(r){if(r instanceof We)return r.clone();var s=new pn(r.__wrapped__,r.__chain__);return s.__actions__=qt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function Jy(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=_t(Me(s),0);var p=r==null?0:r.length;if(!p||s<1)return[];for(var m=0,_=0,T=N(Do(p/s));m<p;)T[_++]=vn(r,m,m+=s);return T}function Xy(r){for(var s=-1,c=r==null?0:r.length,p=0,m=[];++s<c;){var _=r[s];_&&(m[p++]=_)}return m}function Qy(){var r=arguments.length;if(!r)return[];for(var s=N(r-1),c=arguments[0],p=r;p--;)s[p-1]=arguments[p];return Ar(Oe(c)?qt(c):[c],Tt(s,1))}var e_=De(function(r,s){return ht(r)?Rs(r,Tt(s,1,ht,!0)):[]}),t_=De(function(r,s){var c=mn(s);return ht(c)&&(c=n),ht(r)?Rs(r,Tt(s,1,ht,!0),ye(c,2)):[]}),n_=De(function(r,s){var c=mn(s);return ht(c)&&(c=n),ht(r)?Rs(r,Tt(s,1,ht,!0),n,c):[]});function r_(r,s,c){var p=r==null?0:r.length;return p?(s=c||s===n?1:Me(s),vn(r,s<0?0:s,p)):[]}function i_(r,s,c){var p=r==null?0:r.length;return p?(s=c||s===n?1:Me(s),s=p-s,vn(r,0,s<0?0:s)):[]}function s_(r,s){return r&&r.length?Go(r,ye(s,3),!0,!0):[]}function o_(r,s){return r&&r.length?Go(r,ye(s,3),!0):[]}function a_(r,s,c,p){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&Nt(r,s,c)&&(c=0,p=m),Qb(r,s,c,p)):[]}function Wh(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=c==null?0:Me(c);return m<0&&(m=_t(p+m,0)),To(r,ye(s,3),m)}function qh(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=p-1;return c!==n&&(m=Me(c),m=c<0?_t(p+m,0):Ot(m,p-1)),To(r,ye(s,3),m,!0)}function Zh(r){var s=r==null?0:r.length;return s?Tt(r,1):[]}function l_(r){var s=r==null?0:r.length;return s?Tt(r,J):[]}function c_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Me(s),Tt(r,s)):[]}function u_(r){for(var s=-1,c=r==null?0:r.length,p={};++s<c;){var m=r[s];p[m[0]]=m[1]}return p}function Kh(r){return r&&r.length?r[0]:n}function d_(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=c==null?0:Me(c);return m<0&&(m=_t(p+m,0)),Mi(r,s,m)}function f_(r){var s=r==null?0:r.length;return s?vn(r,0,-1):[]}var h_=De(function(r){var s=lt(r,vc);return s.length&&s[0]===r[0]?oc(s):[]}),p_=De(function(r){var s=mn(r),c=lt(r,vc);return s===mn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?oc(c,ye(s,2)):[]}),g_=De(function(r){var s=mn(r),c=lt(r,vc);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?oc(c,n,s):[]});function v_(r,s){return r==null?"":fb.call(r,s)}function mn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function m_(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=p;return c!==n&&(m=Me(c),m=m<0?_t(p+m,0):Ot(m,p-1)),s===s?Y2(r,s,m):To(r,Sf,m,!0)}function b_(r,s){return r&&r.length?ih(r,Me(s)):n}var y_=De(Vh);function Vh(r,s){return r&&r.length&&s&&s.length?uc(r,s):r}function __(r,s,c){return r&&r.length&&s&&s.length?uc(r,s,ye(c,2)):r}function w_(r,s,c){return r&&r.length&&s&&s.length?uc(r,s,n,c):r}var x_=fr(function(r,s){var c=r==null?0:r.length,p=nc(r,s);return ah(r,lt(s,function(m){return hr(m,c)?+m:m}).sort(mh)),p});function $_(r,s){var c=[];if(!(r&&r.length))return c;var p=-1,m=[],_=r.length;for(s=ye(s,3);++p<_;){var T=r[p];s(T,p,r)&&(c.push(T),m.push(p))}return ah(r,m),c}function Ic(r){return r==null?r:vb.call(r)}function E_(r,s,c){var p=r==null?0:r.length;return p?(c&&typeof c!="number"&&Nt(r,s,c)?(s=0,c=p):(s=s==null?0:Me(s),c=c===n?p:Me(c)),vn(r,s,c)):[]}function k_(r,s){return Vo(r,s)}function C_(r,s,c){return hc(r,s,ye(c,2))}function S_(r,s){var c=r==null?0:r.length;if(c){var p=Vo(r,s);if(p<c&&In(r[p],s))return p}return-1}function T_(r,s){return Vo(r,s,!0)}function A_(r,s,c){return hc(r,s,ye(c,2),!0)}function I_(r,s){var c=r==null?0:r.length;if(c){var p=Vo(r,s,!0)-1;if(In(r[p],s))return p}return-1}function R_(r){return r&&r.length?ch(r):[]}function O_(r,s){return r&&r.length?ch(r,ye(s,2)):[]}function L_(r){var s=r==null?0:r.length;return s?vn(r,1,s):[]}function P_(r,s,c){return r&&r.length?(s=c||s===n?1:Me(s),vn(r,0,s<0?0:s)):[]}function M_(r,s,c){var p=r==null?0:r.length;return p?(s=c||s===n?1:Me(s),s=p-s,vn(r,s<0?0:s,p)):[]}function B_(r,s){return r&&r.length?Go(r,ye(s,3),!1,!0):[]}function j_(r,s){return r&&r.length?Go(r,ye(s,3)):[]}var N_=De(function(r){return Lr(Tt(r,1,ht,!0))}),D_=De(function(r){var s=mn(r);return ht(s)&&(s=n),Lr(Tt(r,1,ht,!0),ye(s,2))}),U_=De(function(r){var s=mn(r);return s=typeof s=="function"?s:n,Lr(Tt(r,1,ht,!0),n,s)});function F_(r){return r&&r.length?Lr(r):[]}function z_(r,s){return r&&r.length?Lr(r,ye(s,2)):[]}function H_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Lr(r,n,s):[]}function Rc(r){if(!(r&&r.length))return[];var s=0;return r=Tr(r,function(c){if(ht(c))return s=_t(c.length,s),!0}),Vl(s,function(c){return lt(r,ql(c))})}function Gh(r,s){if(!(r&&r.length))return[];var c=Rc(r);return s==null?c:lt(c,function(p){return Xt(s,n,p)})}var W_=De(function(r,s){return ht(r)?Rs(r,s):[]}),q_=De(function(r){return gc(Tr(r,ht))}),Z_=De(function(r){var s=mn(r);return ht(s)&&(s=n),gc(Tr(r,ht),ye(s,2))}),K_=De(function(r){var s=mn(r);return s=typeof s=="function"?s:n,gc(Tr(r,ht),n,s)}),V_=De(Rc);function G_(r,s){return hh(r||[],s||[],Is)}function Y_(r,s){return hh(r||[],s||[],Ps)}var J_=De(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,Gh(r,c)});function Yh(r){var s=b(r);return s.__chain__=!0,s}function X_(r,s){return s(r),r}function ia(r,s){return s(r)}var Q_=fr(function(r){var s=r.length,c=s?r[0]:0,p=this.__wrapped__,m=function(_){return nc(_,r)};return s>1||this.__actions__.length||!(p instanceof We)||!hr(c)?this.thru(m):(p=p.slice(c,+c+(s?1:0)),p.__actions__.push({func:ia,args:[m],thisArg:n}),new pn(p,this.__chain__).thru(function(_){return s&&!_.length&&_.push(n),_}))});function ew(){return Yh(this)}function tw(){return new pn(this.value(),this.__chain__)}function nw(){this.__values__===n&&(this.__values__=up(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function rw(){return this}function iw(r){for(var s,c=this;c instanceof Ho;){var p=Hh(c);p.__index__=0,p.__values__=n,s?m.__wrapped__=p:s=p;var m=p;c=c.__wrapped__}return m.__wrapped__=r,s}function sw(){var r=this.__wrapped__;if(r instanceof We){var s=r;return this.__actions__.length&&(s=new We(this)),s=s.reverse(),s.__actions__.push({func:ia,args:[Ic],thisArg:n}),new pn(s,this.__chain__)}return this.thru(Ic)}function ow(){return fh(this.__wrapped__,this.__actions__)}var aw=Yo(function(r,s,c){et.call(r,c)?++r[c]:ur(r,c,1)});function lw(r,s,c){var p=Oe(r)?kf:Xb;return c&&Nt(r,s,c)&&(s=n),p(r,ye(s,3))}function cw(r,s){var c=Oe(r)?Tr:Gf;return c(r,ye(s,3))}var uw=$h(Wh),dw=$h(qh);function fw(r,s){return Tt(sa(r,s),1)}function hw(r,s){return Tt(sa(r,s),J)}function pw(r,s,c){return c=c===n?1:Me(c),Tt(sa(r,s),c)}function Jh(r,s){var c=Oe(r)?fn:Or;return c(r,ye(s,3))}function Xh(r,s){var c=Oe(r)?L2:Vf;return c(r,ye(s,3))}var gw=Yo(function(r,s,c){et.call(r,c)?r[c].push(s):ur(r,c,[s])});function vw(r,s,c,p){r=Zt(r)?r:Ki(r),c=c&&!p?Me(c):0;var m=r.length;return c<0&&(c=_t(m+c,0)),ua(r)?c<=m&&r.indexOf(s,c)>-1:!!m&&Mi(r,s,c)>-1}var mw=De(function(r,s,c){var p=-1,m=typeof s=="function",_=Zt(r)?N(r.length):[];return Or(r,function(T){_[++p]=m?Xt(s,T,c):Os(T,s,c)}),_}),bw=Yo(function(r,s,c){ur(r,c,s)});function sa(r,s){var c=Oe(r)?lt:th;return c(r,ye(s,3))}function yw(r,s,c,p){return r==null?[]:(Oe(s)||(s=s==null?[]:[s]),c=p?n:c,Oe(c)||(c=c==null?[]:[c]),sh(r,s,c))}var _w=Yo(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function ww(r,s,c){var p=Oe(r)?Hl:Af,m=arguments.length<3;return p(r,ye(s,4),c,m,Or)}function xw(r,s,c){var p=Oe(r)?P2:Af,m=arguments.length<3;return p(r,ye(s,4),c,m,Vf)}function $w(r,s){var c=Oe(r)?Tr:Gf;return c(r,la(ye(s,3)))}function Ew(r){var s=Oe(r)?Wf:vy;return s(r)}function kw(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=Me(s);var p=Oe(r)?Kb:my;return p(r,s)}function Cw(r){var s=Oe(r)?Vb:yy;return s(r)}function Sw(r){if(r==null)return 0;if(Zt(r))return ua(r)?ji(r):r.length;var s=Lt(r);return s==qe||s==Ct?r.size:lc(r).length}function Tw(r,s,c){var p=Oe(r)?Wl:_y;return c&&Nt(r,s,c)&&(s=n),p(r,ye(s,3))}var Aw=De(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Nt(r,s[0],s[1])?s=[]:c>2&&Nt(s[0],s[1],s[2])&&(s=[s[0]]),sh(r,Tt(s,1),[])}),oa=cb||function(){return St.Date.now()};function Iw(r,s){if(typeof s!="function")throw new hn(l);return r=Me(r),function(){if(--r<1)return s.apply(this,arguments)}}function Qh(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,dr(r,D,n,n,n,n,s)}function ep(r,s){var c;if(typeof s!="function")throw new hn(l);return r=Me(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Oc=De(function(r,s,c){var p=$;if(c.length){var m=Ir(c,qi(Oc));p|=P}return dr(r,p,s,c,m)}),tp=De(function(r,s,c){var p=$|S;if(c.length){var m=Ir(c,qi(tp));p|=P}return dr(s,p,r,c,m)});function np(r,s,c){s=c?n:s;var p=dr(r,C,n,n,n,n,n,s);return p.placeholder=np.placeholder,p}function rp(r,s,c){s=c?n:s;var p=dr(r,R,n,n,n,n,n,s);return p.placeholder=rp.placeholder,p}function ip(r,s,c){var p,m,_,T,I,M,z=0,H=!1,V=!1,ie=!0;if(typeof r!="function")throw new hn(l);s=bn(s)||0,ct(c)&&(H=!!c.leading,V="maxWait"in c,_=V?_t(bn(c.maxWait)||0,s):_,ie="trailing"in c?!!c.trailing:ie);function ge(pt){var Rn=p,vr=m;return p=m=n,z=pt,T=r.apply(vr,Rn),T}function we(pt){return z=pt,I=js(ze,s),H?ge(pt):T}function Be(pt){var Rn=pt-M,vr=pt-z,$p=s-Rn;return V?Ot($p,_-vr):$p}function xe(pt){var Rn=pt-M,vr=pt-z;return M===n||Rn>=s||Rn<0||V&&vr>=_}function ze(){var pt=oa();if(xe(pt))return Ze(pt);I=js(ze,Be(pt))}function Ze(pt){return I=n,ie&&p?ge(pt):(p=m=n,T)}function nn(){I!==n&&ph(I),z=0,p=M=m=I=n}function Dt(){return I===n?T:Ze(oa())}function rn(){var pt=oa(),Rn=xe(pt);if(p=arguments,m=this,M=pt,Rn){if(I===n)return we(M);if(V)return ph(I),I=js(ze,s),ge(M)}return I===n&&(I=js(ze,s)),T}return rn.cancel=nn,rn.flush=Dt,rn}var Rw=De(function(r,s){return Kf(r,1,s)}),Ow=De(function(r,s,c){return Kf(r,bn(s)||0,c)});function Lw(r){return dr(r,q)}function aa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new hn(l);var c=function(){var p=arguments,m=s?s.apply(this,p):p[0],_=c.cache;if(_.has(m))return _.get(m);var T=r.apply(this,p);return c.cache=_.set(m,T)||_,T};return c.cache=new(aa.Cache||cr),c}aa.Cache=cr;function la(r){if(typeof r!="function")throw new hn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Pw(r){return ep(2,r)}var Mw=wy(function(r,s){s=s.length==1&&Oe(s[0])?lt(s[0],Qt(ye())):lt(Tt(s,1),Qt(ye()));var c=s.length;return De(function(p){for(var m=-1,_=Ot(p.length,c);++m<_;)p[m]=s[m].call(this,p[m]);return Xt(r,this,p)})}),Lc=De(function(r,s){var c=Ir(s,qi(Lc));return dr(r,P,n,s,c)}),sp=De(function(r,s){var c=Ir(s,qi(sp));return dr(r,A,n,s,c)}),Bw=fr(function(r,s){return dr(r,U,n,n,n,s)});function jw(r,s){if(typeof r!="function")throw new hn(l);return s=s===n?s:Me(s),De(r,s)}function Nw(r,s){if(typeof r!="function")throw new hn(l);return s=s==null?0:_t(Me(s),0),De(function(c){var p=c[s],m=Mr(c,0,s);return p&&Ar(m,p),Xt(r,this,m)})}function Dw(r,s,c){var p=!0,m=!0;if(typeof r!="function")throw new hn(l);return ct(c)&&(p="leading"in c?!!c.leading:p,m="trailing"in c?!!c.trailing:m),ip(r,s,{leading:p,maxWait:s,trailing:m})}function Uw(r){return Qh(r,1)}function Fw(r,s){return Lc(mc(s),r)}function zw(){if(!arguments.length)return[];var r=arguments[0];return Oe(r)?r:[r]}function Hw(r){return gn(r,y)}function Ww(r,s){return s=typeof s=="function"?s:n,gn(r,y,s)}function qw(r){return gn(r,g|y)}function Zw(r,s){return s=typeof s=="function"?s:n,gn(r,g|y,s)}function Kw(r,s){return s==null||Zf(r,s,$t(s))}function In(r,s){return r===s||r!==r&&s!==s}var Vw=ea(sc),Gw=ea(function(r,s){return r>=s}),di=Xf(function(){return arguments}())?Xf:function(r){return ft(r)&&et.call(r,"callee")&&!Nf.call(r,"callee")},Oe=N.isArray,Yw=yf?Qt(yf):iy;function Zt(r){return r!=null&&ca(r.length)&&!pr(r)}function ht(r){return ft(r)&&Zt(r)}function Jw(r){return r===!0||r===!1||ft(r)&&jt(r)==re}var Br=db||Wc,Xw=_f?Qt(_f):sy;function Qw(r){return ft(r)&&r.nodeType===1&&!Ns(r)}function e3(r){if(r==null)return!0;if(Zt(r)&&(Oe(r)||typeof r=="string"||typeof r.splice=="function"||Br(r)||Zi(r)||di(r)))return!r.length;var s=Lt(r);if(s==qe||s==Ct)return!r.size;if(Bs(r))return!lc(r).length;for(var c in r)if(et.call(r,c))return!1;return!0}function t3(r,s){return Ls(r,s)}function n3(r,s,c){c=typeof c=="function"?c:n;var p=c?c(r,s):n;return p===n?Ls(r,s,n,c):!!p}function Pc(r){if(!ft(r))return!1;var s=jt(r);return s==Ke||s==Te||typeof r.message=="string"&&typeof r.name=="string"&&!Ns(r)}function r3(r){return typeof r=="number"&&Uf(r)}function pr(r){if(!ct(r))return!1;var s=jt(r);return s==oe||s==Z||s==G||s==ni}function op(r){return typeof r=="number"&&r==Me(r)}function ca(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=le}function ct(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ft(r){return r!=null&&typeof r=="object"}var ap=wf?Qt(wf):ay;function i3(r,s){return r===s||ac(r,s,Ec(s))}function s3(r,s,c){return c=typeof c=="function"?c:n,ac(r,s,Ec(s),c)}function o3(r){return lp(r)&&r!=+r}function a3(r){if(Wy(r))throw new Ie(a);return Qf(r)}function l3(r){return r===null}function c3(r){return r==null}function lp(r){return typeof r=="number"||ft(r)&&jt(r)==xt}function Ns(r){if(!ft(r)||jt(r)!=Bt)return!1;var s=Bo(r);if(s===null)return!0;var c=et.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Oo.call(c)==sb}var Mc=xf?Qt(xf):ly;function u3(r){return op(r)&&r>=-le&&r<=le}var cp=$f?Qt($f):cy;function ua(r){return typeof r=="string"||!Oe(r)&&ft(r)&&jt(r)==Jt}function tn(r){return typeof r=="symbol"||ft(r)&&jt(r)==zn}var Zi=Ef?Qt(Ef):uy;function d3(r){return r===n}function f3(r){return ft(r)&&Lt(r)==En}function h3(r){return ft(r)&&jt(r)==Ae}var p3=ea(cc),g3=ea(function(r,s){return r<=s});function up(r){if(!r)return[];if(Zt(r))return ua(r)?Tn(r):qt(r);if(ks&&r[ks])return K2(r[ks]());var s=Lt(r),c=s==qe?Yl:s==Ct?Ao:Ki;return c(r)}function gr(r){if(!r)return r===0?r:0;if(r=bn(r),r===J||r===-J){var s=r<0?-1:1;return s*Y}return r===r?r:0}function Me(r){var s=gr(r),c=s%1;return s===s?c?s-c:s:0}function dp(r){return r?ai(Me(r),0,ve):0}function bn(r){if(typeof r=="number")return r;if(tn(r))return me;if(ct(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=ct(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=If(r);var c=Ym.test(r);return c||Xm.test(r)?I2(r.slice(2),c?2:8):Gm.test(r)?me:+r}function fp(r){return Wn(r,Kt(r))}function v3(r){return r?ai(Me(r),-le,le):r===0?r:0}function Xe(r){return r==null?"":en(r)}var m3=Hi(function(r,s){if(Bs(s)||Zt(s)){Wn(s,$t(s),r);return}for(var c in s)et.call(s,c)&&Is(r,c,s[c])}),hp=Hi(function(r,s){Wn(s,Kt(s),r)}),da=Hi(function(r,s,c,p){Wn(s,Kt(s),r,p)}),b3=Hi(function(r,s,c,p){Wn(s,$t(s),r,p)}),y3=fr(nc);function _3(r,s){var c=zi(r);return s==null?c:qf(c,s)}var w3=De(function(r,s){r=tt(r);var c=-1,p=s.length,m=p>2?s[2]:n;for(m&&Nt(s[0],s[1],m)&&(p=1);++c<p;)for(var _=s[c],T=Kt(_),I=-1,M=T.length;++I<M;){var z=T[I],H=r[z];(H===n||In(H,Di[z])&&!et.call(r,z))&&(r[z]=_[z])}return r}),x3=De(function(r){return r.push(n,Ih),Xt(pp,n,r)});function $3(r,s){return Cf(r,ye(s,3),Hn)}function E3(r,s){return Cf(r,ye(s,3),ic)}function k3(r,s){return r==null?r:rc(r,ye(s,3),Kt)}function C3(r,s){return r==null?r:Yf(r,ye(s,3),Kt)}function S3(r,s){return r&&Hn(r,ye(s,3))}function T3(r,s){return r&&ic(r,ye(s,3))}function A3(r){return r==null?[]:Zo(r,$t(r))}function I3(r){return r==null?[]:Zo(r,Kt(r))}function Bc(r,s,c){var p=r==null?n:li(r,s);return p===n?c:p}function R3(r,s){return r!=null&&Lh(r,s,ey)}function jc(r,s){return r!=null&&Lh(r,s,ty)}var O3=kh(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),r[s]=c},Dc(Vt)),L3=kh(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Lo.call(s)),et.call(r,s)?r[s].push(c):r[s]=[c]},ye),P3=De(Os);function $t(r){return Zt(r)?Hf(r):lc(r)}function Kt(r){return Zt(r)?Hf(r,!0):dy(r)}function M3(r,s){var c={};return s=ye(s,3),Hn(r,function(p,m,_){ur(c,s(p,m,_),p)}),c}function B3(r,s){var c={};return s=ye(s,3),Hn(r,function(p,m,_){ur(c,m,s(p,m,_))}),c}var j3=Hi(function(r,s,c){Ko(r,s,c)}),pp=Hi(function(r,s,c,p){Ko(r,s,c,p)}),N3=fr(function(r,s){var c={};if(r==null)return c;var p=!1;s=lt(s,function(_){return _=Pr(_,r),p||(p=_.length>1),_}),Wn(r,xc(r),c),p&&(c=gn(c,g|v|y,Oy));for(var m=s.length;m--;)pc(c,s[m]);return c});function D3(r,s){return gp(r,la(ye(s)))}var U3=fr(function(r,s){return r==null?{}:hy(r,s)});function gp(r,s){if(r==null)return{};var c=lt(xc(r),function(p){return[p]});return s=ye(s),oh(r,c,function(p,m){return s(p,m[0])})}function F3(r,s,c){s=Pr(s,r);var p=-1,m=s.length;for(m||(m=1,r=n);++p<m;){var _=r==null?n:r[qn(s[p])];_===n&&(p=m,_=c),r=pr(_)?_.call(r):_}return r}function z3(r,s,c){return r==null?r:Ps(r,s,c)}function H3(r,s,c,p){return p=typeof p=="function"?p:n,r==null?r:Ps(r,s,c,p)}var vp=Th($t),mp=Th(Kt);function W3(r,s,c){var p=Oe(r),m=p||Br(r)||Zi(r);if(s=ye(s,4),c==null){var _=r&&r.constructor;m?c=p?new _:[]:ct(r)?c=pr(_)?zi(Bo(r)):{}:c={}}return(m?fn:Hn)(r,function(T,I,M){return s(c,T,I,M)}),c}function q3(r,s){return r==null?!0:pc(r,s)}function Z3(r,s,c){return r==null?r:dh(r,s,mc(c))}function K3(r,s,c,p){return p=typeof p=="function"?p:n,r==null?r:dh(r,s,mc(c),p)}function Ki(r){return r==null?[]:Gl(r,$t(r))}function V3(r){return r==null?[]:Gl(r,Kt(r))}function G3(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=bn(c),c=c===c?c:0),s!==n&&(s=bn(s),s=s===s?s:0),ai(bn(r),s,c)}function Y3(r,s,c){return s=gr(s),c===n?(c=s,s=0):c=gr(c),r=bn(r),ny(r,s,c)}function J3(r,s,c){if(c&&typeof c!="boolean"&&Nt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=gr(r),s===n?(s=r,r=0):s=gr(s)),r>s){var p=r;r=s,s=p}if(c||r%1||s%1){var m=Ff();return Ot(r+m*(s-r+A2("1e-"+((m+"").length-1))),s)}return dc(r,s)}var X3=Wi(function(r,s,c){return s=s.toLowerCase(),r+(c?bp(s):s)});function bp(r){return Nc(Xe(r).toLowerCase())}function yp(r){return r=Xe(r),r&&r.replace(e2,z2).replace(y2,"")}function Q3(r,s,c){r=Xe(r),s=en(s);var p=r.length;c=c===n?p:ai(Me(c),0,p);var m=c;return c-=s.length,c>=0&&r.slice(c,m)==s}function ex(r){return r=Xe(r),r&&Pm.test(r)?r.replace(Gd,H2):r}function tx(r){return r=Xe(r),r&&Um.test(r)?r.replace(Ll,"\\$&"):r}var nx=Wi(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),rx=Wi(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),ix=xh("toLowerCase");function sx(r,s,c){r=Xe(r),s=Me(s);var p=s?ji(r):0;if(!s||p>=s)return r;var m=(s-p)/2;return Qo(Uo(m),c)+r+Qo(Do(m),c)}function ox(r,s,c){r=Xe(r),s=Me(s);var p=s?ji(r):0;return s&&p<s?r+Qo(s-p,c):r}function ax(r,s,c){r=Xe(r),s=Me(s);var p=s?ji(r):0;return s&&p<s?Qo(s-p,c)+r:r}function lx(r,s,c){return c||s==null?s=0:s&&(s=+s),gb(Xe(r).replace(Pl,""),s||0)}function cx(r,s,c){return(c?Nt(r,s,c):s===n)?s=1:s=Me(s),fc(Xe(r),s)}function ux(){var r=arguments,s=Xe(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var dx=Wi(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function fx(r,s,c){return c&&typeof c!="number"&&Nt(r,s,c)&&(s=c=n),c=c===n?ve:c>>>0,c?(r=Xe(r),r&&(typeof s=="string"||s!=null&&!Mc(s))&&(s=en(s),!s&&Bi(r))?Mr(Tn(r),0,c):r.split(s,c)):[]}var hx=Wi(function(r,s,c){return r+(c?" ":"")+Nc(s)});function px(r,s,c){return r=Xe(r),c=c==null?0:ai(Me(c),0,r.length),s=en(s),r.slice(c,c+s.length)==s}function gx(r,s,c){var p=b.templateSettings;c&&Nt(r,s,c)&&(s=n),r=Xe(r),s=da({},s,p,Ah);var m=da({},s.imports,p.imports,Ah),_=$t(m),T=Gl(m,_),I,M,z=0,H=s.interpolate||Eo,V="__p += '",ie=Jl((s.escape||Eo).source+"|"+H.source+"|"+(H===Yd?Vm:Eo).source+"|"+(s.evaluate||Eo).source+"|$","g"),ge="//# sourceURL="+(et.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++E2+"]")+`
`;r.replace(ie,function(xe,ze,Ze,nn,Dt,rn){return Ze||(Ze=nn),V+=r.slice(z,rn).replace(t2,W2),ze&&(I=!0,V+=`' +
__e(`+ze+`) +
'`),Dt&&(M=!0,V+=`';
`+Dt+`;
__p += '`),Ze&&(V+=`' +
((__t = (`+Ze+`)) == null ? '' : __t) +
'`),z=rn+xe.length,xe}),V+=`';
`;var we=et.call(s,"variable")&&s.variable;if(!we)V=`with (obj) {
`+V+`
}
`;else if(Zm.test(we))throw new Ie(u);V=(M?V.replace(wo,""):V).replace(xo,"$1").replace($o,"$1;"),V="function("+(we||"obj")+`) {
`+(we?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(I?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var Be=wp(function(){return Ge(_,ge+"return "+V).apply(n,T)});if(Be.source=V,Pc(Be))throw Be;return Be}function vx(r){return Xe(r).toLowerCase()}function mx(r){return Xe(r).toUpperCase()}function bx(r,s,c){if(r=Xe(r),r&&(c||s===n))return If(r);if(!r||!(s=en(s)))return r;var p=Tn(r),m=Tn(s),_=Rf(p,m),T=Of(p,m)+1;return Mr(p,_,T).join("")}function yx(r,s,c){if(r=Xe(r),r&&(c||s===n))return r.slice(0,Pf(r)+1);if(!r||!(s=en(s)))return r;var p=Tn(r),m=Of(p,Tn(s))+1;return Mr(p,0,m).join("")}function _x(r,s,c){if(r=Xe(r),r&&(c||s===n))return r.replace(Pl,"");if(!r||!(s=en(s)))return r;var p=Tn(r),m=Rf(p,Tn(s));return Mr(p,m).join("")}function wx(r,s){var c=Q,p=te;if(ct(s)){var m="separator"in s?s.separator:m;c="length"in s?Me(s.length):c,p="omission"in s?en(s.omission):p}r=Xe(r);var _=r.length;if(Bi(r)){var T=Tn(r);_=T.length}if(c>=_)return r;var I=c-ji(p);if(I<1)return p;var M=T?Mr(T,0,I).join(""):r.slice(0,I);if(m===n)return M+p;if(T&&(I+=M.length-I),Mc(m)){if(r.slice(I).search(m)){var z,H=M;for(m.global||(m=Jl(m.source,Xe(Jd.exec(m))+"g")),m.lastIndex=0;z=m.exec(H);)var V=z.index;M=M.slice(0,V===n?I:V)}}else if(r.indexOf(en(m),I)!=I){var ie=M.lastIndexOf(m);ie>-1&&(M=M.slice(0,ie))}return M+p}function xx(r){return r=Xe(r),r&&Lm.test(r)?r.replace(Vd,J2):r}var $x=Wi(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),Nc=xh("toUpperCase");function _p(r,s,c){return r=Xe(r),s=c?n:s,s===n?Z2(r)?eb(r):j2(r):r.match(s)||[]}var wp=De(function(r,s){try{return Xt(r,n,s)}catch(c){return Pc(c)?c:new Ie(c)}}),Ex=fr(function(r,s){return fn(s,function(c){c=qn(c),ur(r,c,Oc(r[c],r))}),r});function kx(r){var s=r==null?0:r.length,c=ye();return r=s?lt(r,function(p){if(typeof p[1]!="function")throw new hn(l);return[c(p[0]),p[1]]}):[],De(function(p){for(var m=-1;++m<s;){var _=r[m];if(Xt(_[0],this,p))return Xt(_[1],this,p)}})}function Cx(r){return Jb(gn(r,g))}function Dc(r){return function(){return r}}function Sx(r,s){return r==null||r!==r?s:r}var Tx=Eh(),Ax=Eh(!0);function Vt(r){return r}function Uc(r){return eh(typeof r=="function"?r:gn(r,g))}function Ix(r){return nh(gn(r,g))}function Rx(r,s){return rh(r,gn(s,g))}var Ox=De(function(r,s){return function(c){return Os(c,r,s)}}),Lx=De(function(r,s){return function(c){return Os(r,c,s)}});function Fc(r,s,c){var p=$t(s),m=Zo(s,p);c==null&&!(ct(s)&&(m.length||!p.length))&&(c=s,s=r,r=this,m=Zo(s,$t(s)));var _=!(ct(c)&&"chain"in c)||!!c.chain,T=pr(r);return fn(m,function(I){var M=s[I];r[I]=M,T&&(r.prototype[I]=function(){var z=this.__chain__;if(_||z){var H=r(this.__wrapped__),V=H.__actions__=qt(this.__actions__);return V.push({func:M,args:arguments,thisArg:r}),H.__chain__=z,H}return M.apply(r,Ar([this.value()],arguments))})}),r}function Px(){return St._===this&&(St._=ob),this}function zc(){}function Mx(r){return r=Me(r),De(function(s){return ih(s,r)})}var Bx=yc(lt),jx=yc(kf),Nx=yc(Wl);function xp(r){return Cc(r)?ql(qn(r)):py(r)}function Dx(r){return function(s){return r==null?n:li(r,s)}}var Ux=Ch(),Fx=Ch(!0);function Hc(){return[]}function Wc(){return!1}function zx(){return{}}function Hx(){return""}function Wx(){return!0}function qx(r,s){if(r=Me(r),r<1||r>le)return[];var c=ve,p=Ot(r,ve);s=ye(s),r-=ve;for(var m=Vl(p,s);++c<r;)s(c);return m}function Zx(r){return Oe(r)?lt(r,qn):tn(r)?[r]:qt(zh(Xe(r)))}function Kx(r){var s=++ib;return Xe(r)+s}var Vx=Xo(function(r,s){return r+s},0),Gx=_c("ceil"),Yx=Xo(function(r,s){return r/s},1),Jx=_c("floor");function Xx(r){return r&&r.length?qo(r,Vt,sc):n}function Qx(r,s){return r&&r.length?qo(r,ye(s,2),sc):n}function e4(r){return Tf(r,Vt)}function t4(r,s){return Tf(r,ye(s,2))}function n4(r){return r&&r.length?qo(r,Vt,cc):n}function r4(r,s){return r&&r.length?qo(r,ye(s,2),cc):n}var i4=Xo(function(r,s){return r*s},1),s4=_c("round"),o4=Xo(function(r,s){return r-s},0);function a4(r){return r&&r.length?Kl(r,Vt):0}function l4(r,s){return r&&r.length?Kl(r,ye(s,2)):0}return b.after=Iw,b.ary=Qh,b.assign=m3,b.assignIn=hp,b.assignInWith=da,b.assignWith=b3,b.at=y3,b.before=ep,b.bind=Oc,b.bindAll=Ex,b.bindKey=tp,b.castArray=zw,b.chain=Yh,b.chunk=Jy,b.compact=Xy,b.concat=Qy,b.cond=kx,b.conforms=Cx,b.constant=Dc,b.countBy=aw,b.create=_3,b.curry=np,b.curryRight=rp,b.debounce=ip,b.defaults=w3,b.defaultsDeep=x3,b.defer=Rw,b.delay=Ow,b.difference=e_,b.differenceBy=t_,b.differenceWith=n_,b.drop=r_,b.dropRight=i_,b.dropRightWhile=s_,b.dropWhile=o_,b.fill=a_,b.filter=cw,b.flatMap=fw,b.flatMapDeep=hw,b.flatMapDepth=pw,b.flatten=Zh,b.flattenDeep=l_,b.flattenDepth=c_,b.flip=Lw,b.flow=Tx,b.flowRight=Ax,b.fromPairs=u_,b.functions=A3,b.functionsIn=I3,b.groupBy=gw,b.initial=f_,b.intersection=h_,b.intersectionBy=p_,b.intersectionWith=g_,b.invert=O3,b.invertBy=L3,b.invokeMap=mw,b.iteratee=Uc,b.keyBy=bw,b.keys=$t,b.keysIn=Kt,b.map=sa,b.mapKeys=M3,b.mapValues=B3,b.matches=Ix,b.matchesProperty=Rx,b.memoize=aa,b.merge=j3,b.mergeWith=pp,b.method=Ox,b.methodOf=Lx,b.mixin=Fc,b.negate=la,b.nthArg=Mx,b.omit=N3,b.omitBy=D3,b.once=Pw,b.orderBy=yw,b.over=Bx,b.overArgs=Mw,b.overEvery=jx,b.overSome=Nx,b.partial=Lc,b.partialRight=sp,b.partition=_w,b.pick=U3,b.pickBy=gp,b.property=xp,b.propertyOf=Dx,b.pull=y_,b.pullAll=Vh,b.pullAllBy=__,b.pullAllWith=w_,b.pullAt=x_,b.range=Ux,b.rangeRight=Fx,b.rearg=Bw,b.reject=$w,b.remove=$_,b.rest=jw,b.reverse=Ic,b.sampleSize=kw,b.set=z3,b.setWith=H3,b.shuffle=Cw,b.slice=E_,b.sortBy=Aw,b.sortedUniq=R_,b.sortedUniqBy=O_,b.split=fx,b.spread=Nw,b.tail=L_,b.take=P_,b.takeRight=M_,b.takeRightWhile=B_,b.takeWhile=j_,b.tap=X_,b.throttle=Dw,b.thru=ia,b.toArray=up,b.toPairs=vp,b.toPairsIn=mp,b.toPath=Zx,b.toPlainObject=fp,b.transform=W3,b.unary=Uw,b.union=N_,b.unionBy=D_,b.unionWith=U_,b.uniq=F_,b.uniqBy=z_,b.uniqWith=H_,b.unset=q3,b.unzip=Rc,b.unzipWith=Gh,b.update=Z3,b.updateWith=K3,b.values=Ki,b.valuesIn=V3,b.without=W_,b.words=_p,b.wrap=Fw,b.xor=q_,b.xorBy=Z_,b.xorWith=K_,b.zip=V_,b.zipObject=G_,b.zipObjectDeep=Y_,b.zipWith=J_,b.entries=vp,b.entriesIn=mp,b.extend=hp,b.extendWith=da,Fc(b,b),b.add=Vx,b.attempt=wp,b.camelCase=X3,b.capitalize=bp,b.ceil=Gx,b.clamp=G3,b.clone=Hw,b.cloneDeep=qw,b.cloneDeepWith=Zw,b.cloneWith=Ww,b.conformsTo=Kw,b.deburr=yp,b.defaultTo=Sx,b.divide=Yx,b.endsWith=Q3,b.eq=In,b.escape=ex,b.escapeRegExp=tx,b.every=lw,b.find=uw,b.findIndex=Wh,b.findKey=$3,b.findLast=dw,b.findLastIndex=qh,b.findLastKey=E3,b.floor=Jx,b.forEach=Jh,b.forEachRight=Xh,b.forIn=k3,b.forInRight=C3,b.forOwn=S3,b.forOwnRight=T3,b.get=Bc,b.gt=Vw,b.gte=Gw,b.has=R3,b.hasIn=jc,b.head=Kh,b.identity=Vt,b.includes=vw,b.indexOf=d_,b.inRange=Y3,b.invoke=P3,b.isArguments=di,b.isArray=Oe,b.isArrayBuffer=Yw,b.isArrayLike=Zt,b.isArrayLikeObject=ht,b.isBoolean=Jw,b.isBuffer=Br,b.isDate=Xw,b.isElement=Qw,b.isEmpty=e3,b.isEqual=t3,b.isEqualWith=n3,b.isError=Pc,b.isFinite=r3,b.isFunction=pr,b.isInteger=op,b.isLength=ca,b.isMap=ap,b.isMatch=i3,b.isMatchWith=s3,b.isNaN=o3,b.isNative=a3,b.isNil=c3,b.isNull=l3,b.isNumber=lp,b.isObject=ct,b.isObjectLike=ft,b.isPlainObject=Ns,b.isRegExp=Mc,b.isSafeInteger=u3,b.isSet=cp,b.isString=ua,b.isSymbol=tn,b.isTypedArray=Zi,b.isUndefined=d3,b.isWeakMap=f3,b.isWeakSet=h3,b.join=v_,b.kebabCase=nx,b.last=mn,b.lastIndexOf=m_,b.lowerCase=rx,b.lowerFirst=ix,b.lt=p3,b.lte=g3,b.max=Xx,b.maxBy=Qx,b.mean=e4,b.meanBy=t4,b.min=n4,b.minBy=r4,b.stubArray=Hc,b.stubFalse=Wc,b.stubObject=zx,b.stubString=Hx,b.stubTrue=Wx,b.multiply=i4,b.nth=b_,b.noConflict=Px,b.noop=zc,b.now=oa,b.pad=sx,b.padEnd=ox,b.padStart=ax,b.parseInt=lx,b.random=J3,b.reduce=ww,b.reduceRight=xw,b.repeat=cx,b.replace=ux,b.result=F3,b.round=s4,b.runInContext=O,b.sample=Ew,b.size=Sw,b.snakeCase=dx,b.some=Tw,b.sortedIndex=k_,b.sortedIndexBy=C_,b.sortedIndexOf=S_,b.sortedLastIndex=T_,b.sortedLastIndexBy=A_,b.sortedLastIndexOf=I_,b.startCase=hx,b.startsWith=px,b.subtract=o4,b.sum=a4,b.sumBy=l4,b.template=gx,b.times=qx,b.toFinite=gr,b.toInteger=Me,b.toLength=dp,b.toLower=vx,b.toNumber=bn,b.toSafeInteger=v3,b.toString=Xe,b.toUpper=mx,b.trim=bx,b.trimEnd=yx,b.trimStart=_x,b.truncate=wx,b.unescape=xx,b.uniqueId=Kx,b.upperCase=$x,b.upperFirst=Nc,b.each=Jh,b.eachRight=Xh,b.first=Kh,Fc(b,function(){var r={};return Hn(b,function(s,c){et.call(b.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),b.VERSION=i,fn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),fn(["drop","take"],function(r,s){We.prototype[r]=function(c){c=c===n?1:_t(Me(c),0);var p=this.__filtered__&&!s?new We(this):this.clone();return p.__filtered__?p.__takeCount__=Ot(c,p.__takeCount__):p.__views__.push({size:Ot(c,ve),type:r+(p.__dir__<0?"Right":"")}),p},We.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),fn(["filter","map","takeWhile"],function(r,s){var c=s+1,p=c==ee||c==W;We.prototype[r]=function(m){var _=this.clone();return _.__iteratees__.push({iteratee:ye(m,3),type:c}),_.__filtered__=_.__filtered__||p,_}}),fn(["head","last"],function(r,s){var c="take"+(s?"Right":"");We.prototype[r]=function(){return this[c](1).value()[0]}}),fn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");We.prototype[r]=function(){return this.__filtered__?new We(this):this[c](1)}}),We.prototype.compact=function(){return this.filter(Vt)},We.prototype.find=function(r){return this.filter(r).head()},We.prototype.findLast=function(r){return this.reverse().find(r)},We.prototype.invokeMap=De(function(r,s){return typeof r=="function"?new We(this):this.map(function(c){return Os(c,r,s)})}),We.prototype.reject=function(r){return this.filter(la(ye(r)))},We.prototype.slice=function(r,s){r=Me(r);var c=this;return c.__filtered__&&(r>0||s<0)?new We(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Me(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},We.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},We.prototype.toArray=function(){return this.take(ve)},Hn(We.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),p=/^(?:head|last)$/.test(s),m=b[p?"take"+(s=="last"?"Right":""):s],_=p||/^find/.test(s);m&&(b.prototype[s]=function(){var T=this.__wrapped__,I=p?[1]:arguments,M=T instanceof We,z=I[0],H=M||Oe(T),V=function(ze){var Ze=m.apply(b,Ar([ze],I));return p&&ie?Ze[0]:Ze};H&&c&&typeof z=="function"&&z.length!=1&&(M=H=!1);var ie=this.__chain__,ge=!!this.__actions__.length,we=_&&!ie,Be=M&&!ge;if(!_&&H){T=Be?T:new We(this);var xe=r.apply(T,I);return xe.__actions__.push({func:ia,args:[V],thisArg:n}),new pn(xe,ie)}return we&&Be?r.apply(this,I):(xe=this.thru(V),we?p?xe.value()[0]:xe.value():xe)})}),fn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Io[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",p=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var m=arguments;if(p&&!this.__chain__){var _=this.value();return s.apply(Oe(_)?_:[],m)}return this[c](function(T){return s.apply(Oe(T)?T:[],m)})}}),Hn(We.prototype,function(r,s){var c=b[s];if(c){var p=c.name+"";et.call(Fi,p)||(Fi[p]=[]),Fi[p].push({name:s,func:c})}}),Fi[Jo(n,S).name]=[{name:"wrapper",func:n}],We.prototype.clone=xb,We.prototype.reverse=$b,We.prototype.value=Eb,b.prototype.at=Q_,b.prototype.chain=ew,b.prototype.commit=tw,b.prototype.next=nw,b.prototype.plant=iw,b.prototype.reverse=sw,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=ow,b.prototype.first=b.prototype.head,ks&&(b.prototype[ks]=rw),b},Ni=tb();ri?((ri.exports=Ni)._=Ni,Ul._=Ni):St._=Ni}).call(wt)})(Ba,Ba.exports);var O1=Ba.exports;const O9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],L1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com","wss://r.kojira.io","wss://yabu.me"],L9=[...L1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],TH=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],P9=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},gs=()=>({id:P9(),width:"medium"}),hd=e=>({...gs(),columnType:"Following",...e}),P1=e=>({...gs(),columnType:"Notification",...e}),M1=e=>({...gs(),columnType:"Relays",...e}),B1=()=>M1({name:"日本語",relayUrls:L1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),pd=e=>({...gs(),columnType:"Posts",...e}),j1=e=>({...gs(),columnType:"Reactions",...e}),gd=e=>({...gs(),columnType:"Search",...e});var Ve;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return e.objectValues(l)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},e.find=(o,a)=>{for(const l of o)if(a(l))return l},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ve||(Ve={}));var Eu;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Eu||(Eu={}));const ce=Ve.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),zr=e=>{switch(typeof e){case"undefined":return ce.undefined;case"string":return ce.string;case"number":return isNaN(e)?ce.nan:ce.number;case"boolean":return ce.boolean;case"function":return ce.function;case"bigint":return ce.bigint;case"symbol":return ce.symbol;case"object":return Array.isArray(e)?ce.array:e===null?ce.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?ce.promise:typeof Map<"u"&&e instanceof Map?ce.map:typeof Set<"u"&&e instanceof Set?ce.set:typeof Date<"u"&&e instanceof Date?ce.date:ce.object;default:return ce.unknown}},X=Ve.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),M9=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Mn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(u[f]=u[f]||{_errors:[]},u[f]._errors.push(n(l))):u[f]=u[f]||{_errors:[]},u=u[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ve.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Mn.create=e=>new Mn(e);const Zs=(e,t)=>{let n;switch(e.code){case X.invalid_type:e.received===ce.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case X.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Ve.jsonStringifyReplacer)}`;break;case X.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ve.joinValues(e.keys,", ")}`;break;case X.invalid_union:n="Invalid input";break;case X.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ve.joinValues(e.options)}`;break;case X.invalid_enum_value:n=`Invalid enum value. Expected ${Ve.joinValues(e.options)}, received '${e.received}'`;break;case X.invalid_arguments:n="Invalid function arguments";break;case X.invalid_return_type:n="Invalid function return type";break;case X.invalid_date:n="Invalid date";break;case X.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Ve.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case X.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case X.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case X.custom:n="Invalid input";break;case X.invalid_intersection_types:n="Intersection results could not be merged";break;case X.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case X.not_finite:n="Number must be finite";break;default:n=t.defaultError,Ve.assertNever(e)}return{message:n}};let N1=Zs;function B9(e){N1=e}function ja(){return N1}const Na=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)u=f(l,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},j9=[];function fe(e,t){const n=Na({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,ja(),Zs].filter(i=>!!i)});e.common.issues.push(n)}class Mt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return Re;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Mt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Re;a.status==="dirty"&&t.dirty(),l.status==="dirty"&&t.dirty(),a.value!=="__proto__"&&(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:t.value,value:i}}}const Re=Object.freeze({status:"aborted"}),D1=e=>({status:"dirty",value:e}),zt=e=>({status:"valid",value:e}),ku=e=>e.status==="aborted",Cu=e=>e.status==="dirty",Ks=e=>e.status==="valid",Da=e=>typeof Promise<"u"&&e instanceof Promise;var be;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(be||(be={}));class Jn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const qp=(e,t)=>{if(Ks(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Mn(e.common.issues);return this._error=n,this._error}}};function Pe(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Ne{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return zr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Mt,ctx:{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Da(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return qp(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Da(o)?o:Promise.resolve(o));return qp(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=t(o),u=()=>a.addIssue({code:X.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new Nn({schema:this,typeName:ke.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return wr.create(this,this._def)}nullable(){return Si.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Bn.create(this,this._def)}promise(){return ss.create(this,this._def)}or(t){return Js.create([this,t],this._def)}and(t){return Xs.create(this,t,this._def)}transform(t){return new Nn({...Pe(this._def),schema:this,typeName:ke.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new ro({...Pe(this._def),innerType:this,defaultValue:n,typeName:ke.ZodDefault})}brand(){return new F1({typeName:ke.ZodBranded,type:this,...Pe(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Ha({...Pe(this._def),innerType:this,catchValue:n,typeName:ke.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return vo.create(this,t)}readonly(){return qa.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const N9=/^c[^\s-]{8,}$/i,D9=/^[a-z][a-z0-9]*$/,U9=/^[0-9A-HJKMNP-TV-Z]{26}$/,F9=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,z9=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,H9="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let eu;const W9=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,q9=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Z9=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function K9(e,t){return!!((t==="v4"||!t)&&W9.test(e)||(t==="v6"||!t)&&q9.test(e))}class Pn extends Ne{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==ce.string){const a=this._getOrReturnCtx(t);return fe(a,{code:X.invalid_type,expected:ce.string,received:a.parsedType}),Re}const i=new Mt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),fe(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),fe(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=t.data.length>a.value,u=t.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(t,o),l?fe(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&fe(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")z9.test(t.data)||(o=this._getOrReturnCtx(t,o),fe(o,{validation:"email",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")eu||(eu=new RegExp(H9,"u")),eu.test(t.data)||(o=this._getOrReturnCtx(t,o),fe(o,{validation:"emoji",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")F9.test(t.data)||(o=this._getOrReturnCtx(t,o),fe(o,{validation:"uuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")N9.test(t.data)||(o=this._getOrReturnCtx(t,o),fe(o,{validation:"cuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")D9.test(t.data)||(o=this._getOrReturnCtx(t,o),fe(o,{validation:"cuid2",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")U9.test(t.data)||(o=this._getOrReturnCtx(t,o),fe(o,{validation:"ulid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),fe(o,{validation:"url",code:X.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),fe(o,{validation:"regex",code:X.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),fe(o,{code:X.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),fe(o,{code:X.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),fe(o,{code:X.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?Z9(a).test(t.data)||(o=this._getOrReturnCtx(t,o),fe(o,{code:X.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?K9(t.data,a.version)||(o=this._getOrReturnCtx(t,o),fe(o,{validation:"ip",code:X.invalid_string,message:a.message}),i.dirty()):Ve.assertNever(a);return{status:i.value,value:t.data}}_regex(t,n,i){return this.refinement(o=>t.test(o),{validation:n,code:X.invalid_string,...be.errToObj(i)})}_addCheck(t){return new Pn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...be.errToObj(t)})}url(t){return this._addCheck({kind:"url",...be.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...be.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...be.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...be.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...be.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...be.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...be.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...be.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...be.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...be.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...be.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...be.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...be.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...be.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...be.errToObj(n)})}nonempty(t){return this.min(1,be.errToObj(t))}trim(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Pn.create=e=>{var t;return new Pn({checks:[],typeName:ke.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Pe(e)})};function V9(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),l=parseInt(t.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Vr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==ce.number){const a=this._getOrReturnCtx(t);return fe(a,{code:X.invalid_type,expected:ce.number,received:a.parsedType}),Re}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="int"?Ve.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),fe(i,{code:X.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),fe(i,{code:X.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),fe(i,{code:X.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?V9(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),fe(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),fe(i,{code:X.not_finite,message:a.message}),o.dirty()):Ve.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,be.toString(n))}gt(t,n){return this.setLimit("min",t,!1,be.toString(n))}lte(t,n){return this.setLimit("max",t,!0,be.toString(n))}lt(t,n){return this.setLimit("max",t,!1,be.toString(n))}setLimit(t,n,i,o){return new Vr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:be.toString(o)}]})}_addCheck(t){return new Vr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:be.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:be.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:be.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:be.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:be.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:be.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:be.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:be.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:be.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Ve.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Vr.create=e=>new Vr({checks:[],typeName:ke.ZodNumber,coerce:e?.coerce||!1,...Pe(e)});class Gr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==ce.bigint){const a=this._getOrReturnCtx(t);return fe(a,{code:X.invalid_type,expected:ce.bigint,received:a.parsedType}),Re}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),fe(i,{code:X.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),fe(i,{code:X.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),fe(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ve.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,be.toString(n))}gt(t,n){return this.setLimit("min",t,!1,be.toString(n))}lte(t,n){return this.setLimit("max",t,!0,be.toString(n))}lt(t,n){return this.setLimit("max",t,!1,be.toString(n))}setLimit(t,n,i,o){return new Gr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:be.toString(o)}]})}_addCheck(t){return new Gr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:be.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:be.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:be.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:be.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:be.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Gr.create=e=>{var t;return new Gr({checks:[],typeName:ke.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Pe(e)})};class Vs extends Ne{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==ce.boolean){const i=this._getOrReturnCtx(t);return fe(i,{code:X.invalid_type,expected:ce.boolean,received:i.parsedType}),Re}return zt(t.data)}}Vs.create=e=>new Vs({typeName:ke.ZodBoolean,coerce:e?.coerce||!1,...Pe(e)});class ki extends Ne{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==ce.date){const a=this._getOrReturnCtx(t);return fe(a,{code:X.invalid_type,expected:ce.date,received:a.parsedType}),Re}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return fe(a,{code:X.invalid_date}),Re}const i=new Mt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),fe(o,{code:X.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),fe(o,{code:X.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ve.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new ki({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:be.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:be.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}ki.create=e=>new ki({checks:[],coerce:e?.coerce||!1,typeName:ke.ZodDate,...Pe(e)});class Ua extends Ne{_parse(t){if(this._getType(t)!==ce.symbol){const i=this._getOrReturnCtx(t);return fe(i,{code:X.invalid_type,expected:ce.symbol,received:i.parsedType}),Re}return zt(t.data)}}Ua.create=e=>new Ua({typeName:ke.ZodSymbol,...Pe(e)});class Gs extends Ne{_parse(t){if(this._getType(t)!==ce.undefined){const i=this._getOrReturnCtx(t);return fe(i,{code:X.invalid_type,expected:ce.undefined,received:i.parsedType}),Re}return zt(t.data)}}Gs.create=e=>new Gs({typeName:ke.ZodUndefined,...Pe(e)});class Ys extends Ne{_parse(t){if(this._getType(t)!==ce.null){const i=this._getOrReturnCtx(t);return fe(i,{code:X.invalid_type,expected:ce.null,received:i.parsedType}),Re}return zt(t.data)}}Ys.create=e=>new Ys({typeName:ke.ZodNull,...Pe(e)});class is extends Ne{constructor(){super(...arguments),this._any=!0}_parse(t){return zt(t.data)}}is.create=e=>new is({typeName:ke.ZodAny,...Pe(e)});class xi extends Ne{constructor(){super(...arguments),this._unknown=!0}_parse(t){return zt(t.data)}}xi.create=e=>new xi({typeName:ke.ZodUnknown,...Pe(e)});class Er extends Ne{_parse(t){const n=this._getOrReturnCtx(t);return fe(n,{code:X.invalid_type,expected:ce.never,received:n.parsedType}),Re}}Er.create=e=>new Er({typeName:ke.ZodNever,...Pe(e)});class Fa extends Ne{_parse(t){if(this._getType(t)!==ce.undefined){const i=this._getOrReturnCtx(t);return fe(i,{code:X.invalid_type,expected:ce.void,received:i.parsedType}),Re}return zt(t.data)}}Fa.create=e=>new Fa({typeName:ke.ZodVoid,...Pe(e)});class Bn extends Ne{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==ce.array)return fe(n,{code:X.invalid_type,expected:ce.array,received:n.parsedType}),Re;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(fe(n,{code:l?X.too_big:X.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(fe(n,{code:X.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(fe(n,{code:X.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Jn(n,l,n.path,u)))).then(l=>Mt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Jn(n,l,n.path,u)));return Mt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new Bn({...this._def,minLength:{value:t,message:be.toString(n)}})}max(t,n){return new Bn({...this._def,maxLength:{value:t,message:be.toString(n)}})}length(t,n){return new Bn({...this._def,exactLength:{value:t,message:be.toString(n)}})}nonempty(t){return this.min(1,t)}}Bn.create=(e,t)=>new Bn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ke.ZodArray,...Pe(t)});function Yi(e){if(e instanceof ut){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=wr.create(Yi(i))}return new ut({...e._def,shape:()=>t})}else return e instanceof Bn?new Bn({...e._def,type:Yi(e.element)}):e instanceof wr?wr.create(Yi(e.unwrap())):e instanceof Si?Si.create(Yi(e.unwrap())):e instanceof Xn?Xn.create(e.items.map(t=>Yi(t))):e}class ut extends Ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=Ve.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==ce.object){const f=this._getOrReturnCtx(t);return fe(f,{code:X.invalid_type,expected:ce.object,received:f.parsedType}),Re}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof Er&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||u.push(f);const d=[];for(const f of l){const h=a[f],g=o.data[f];d.push({key:{status:"valid",value:f},value:h._parse(new Jn(o,g,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof Er){const f=this._def.unknownKeys;if(f==="passthrough")for(const h of u)d.push({key:{status:"valid",value:h},value:{status:"valid",value:o.data[h]}});else if(f==="strict")u.length>0&&(fe(o,{code:X.unrecognized_keys,keys:u}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const h of u){const g=o.data[h];d.push({key:{status:"valid",value:h},value:f._parse(new Jn(o,g,o.path,h)),alwaysSet:h in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const h of d){const g=await h.key;f.push({key:g,value:await h.value,alwaysSet:h.alwaysSet})}return f}).then(f=>Mt.mergeObjectSync(i,f)):Mt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return be.errToObj,new ut({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=be.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ut({...this._def,unknownKeys:"strip"})}passthrough(){return new ut({...this._def,unknownKeys:"passthrough"})}extend(t){return new ut({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ut({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ke.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new ut({...this._def,catchall:t})}pick(t){const n={};return Ve.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ut({...this._def,shape:()=>n})}omit(t){const n={};return Ve.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new ut({...this._def,shape:()=>n})}deepPartial(){return Yi(this)}partial(t){const n={};return Ve.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new ut({...this._def,shape:()=>n})}required(t){const n={};return Ve.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof wr;)a=a._def.innerType;n[i]=a}}),new ut({...this._def,shape:()=>n})}keyof(){return U1(Ve.objectKeys(this.shape))}}ut.create=(e,t)=>new ut({shape:()=>e,unknownKeys:"strip",catchall:Er.create(),typeName:ke.ZodObject,...Pe(t)});ut.strictCreate=(e,t)=>new ut({shape:()=>e,unknownKeys:"strict",catchall:Er.create(),typeName:ke.ZodObject,...Pe(t)});ut.lazycreate=(e,t)=>new ut({shape:e,unknownKeys:"strip",catchall:Er.create(),typeName:ke.ZodObject,...Pe(t)});class Js extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new Mn(u.ctx.common.issues));return fe(n,{code:X.invalid_union,unionErrors:l}),Re}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},h=d._parseSync({data:n.data,path:n.path,parent:f});if(h.status==="valid")return h;h.status==="dirty"&&!a&&(a={result:h,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new Mn(d));return fe(n,{code:X.invalid_union,unionErrors:u}),Re}}get options(){return this._def.options}}Js.create=(e,t)=>new Js({options:e,typeName:ke.ZodUnion,...Pe(t)});const Ea=e=>e instanceof eo?Ea(e.schema):e instanceof Nn?Ea(e.innerType()):e instanceof to?[e.value]:e instanceof Yr?e.options:e instanceof no?Object.keys(e.enum):e instanceof ro?Ea(e._def.innerType):e instanceof Gs?[void 0]:e instanceof Ys?[null]:null;class vl extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ce.object)return fe(n,{code:X.invalid_type,expected:ce.object,received:n.parsedType}),Re;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(fe(n,{code:X.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Re)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const l=Ea(a.shape[t]);if(!l)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new vl({typeName:ke.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Pe(i)})}}function Su(e,t){const n=zr(e),i=zr(t);if(e===t)return{valid:!0,data:e};if(n===ce.object&&i===ce.object){const o=Ve.objectKeys(t),a=Ve.objectKeys(e).filter(u=>o.indexOf(u)!==-1),l={...e,...t};for(const u of a){const d=Su(e[u],t[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===ce.array&&i===ce.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const l=e[a],u=t[a],d=Su(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===ce.date&&i===ce.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class Xs extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,l)=>{if(ku(a)||ku(l))return Re;const u=Su(a.value,l.value);return u.valid?((Cu(a)||Cu(l))&&n.dirty(),{status:n.value,value:u.data}):(fe(i,{code:X.invalid_intersection_types}),Re)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Xs.create=(e,t,n)=>new Xs({left:e,right:t,typeName:ke.ZodIntersection,...Pe(n)});class Xn extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ce.array)return fe(i,{code:X.invalid_type,expected:ce.array,received:i.parsedType}),Re;if(i.data.length<this._def.items.length)return fe(i,{code:X.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Re;!this._def.rest&&i.data.length>this._def.items.length&&(fe(i,{code:X.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Jn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Mt.mergeArray(n,l)):Mt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Xn({...this._def,rest:t})}}Xn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Xn({items:e,typeName:ke.ZodTuple,rest:null,...Pe(t)})};class Qs extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ce.object)return fe(i,{code:X.invalid_type,expected:ce.object,received:i.parsedType}),Re;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Jn(i,u,i.path,u)),value:l._parse(new Jn(i,i.data[u],i.path,u))});return i.common.async?Mt.mergeObjectAsync(n,o):Mt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Ne?new Qs({keyType:t,valueType:n,typeName:ke.ZodRecord,...Pe(i)}):new Qs({keyType:Pn.create(),valueType:t,typeName:ke.ZodRecord,...Pe(n)})}}class za extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ce.map)return fe(i,{code:X.invalid_type,expected:ce.map,received:i.parsedType}),Re;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],f)=>({key:o._parse(new Jn(i,u,i.path,[f,"key"])),value:a._parse(new Jn(i,d,i.path,[f,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,h=await d.value;if(f.status==="aborted"||h.status==="aborted")return Re;(f.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(f.value,h.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const f=d.key,h=d.value;if(f.status==="aborted"||h.status==="aborted")return Re;(f.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(f.value,h.value)}return{status:n.value,value:u}}}}za.create=(e,t,n)=>new za({valueType:t,keyType:e,typeName:ke.ZodMap,...Pe(n)});class Ci extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ce.set)return fe(i,{code:X.invalid_type,expected:ce.set,received:i.parsedType}),Re;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(fe(i,{code:X.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(fe(i,{code:X.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const h of d){if(h.status==="aborted")return Re;h.status==="dirty"&&n.dirty(),f.add(h.value)}return{status:n.value,value:f}}const u=[...i.data.values()].map((d,f)=>a._parse(new Jn(i,d,i.path,f)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(t,n){return new Ci({...this._def,minSize:{value:t,message:be.toString(n)}})}max(t,n){return new Ci({...this._def,maxSize:{value:t,message:be.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}Ci.create=(e,t)=>new Ci({valueType:e,minSize:null,maxSize:null,typeName:ke.ZodSet,...Pe(t)});class Xi extends Ne{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ce.function)return fe(n,{code:X.invalid_type,expected:ce.function,received:n.parsedType}),Re;function i(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ja(),Zs].filter(f=>!!f),issueData:{code:X.invalid_arguments,argumentsError:d}})}function o(u,d){return Na({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ja(),Zs].filter(f=>!!f),issueData:{code:X.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;if(this._def.returns instanceof ss){const u=this;return zt(async function(...d){const f=new Mn([]),h=await u._def.args.parseAsync(d,a).catch(y=>{throw f.addIssue(i(d,y)),f}),g=await Reflect.apply(l,this,h);return await u._def.returns._def.type.parseAsync(g,a).catch(y=>{throw f.addIssue(o(g,y)),f})})}else{const u=this;return zt(function(...d){const f=u._def.args.safeParse(d,a);if(!f.success)throw new Mn([i(d,f.error)]);const h=Reflect.apply(l,this,f.data),g=u._def.returns.safeParse(h,a);if(!g.success)throw new Mn([o(h,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Xi({...this._def,args:Xn.create(t).rest(xi.create())})}returns(t){return new Xi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Xi({args:t||Xn.create([]).rest(xi.create()),returns:n||xi.create(),typeName:ke.ZodFunction,...Pe(i)})}}class eo extends Ne{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}eo.create=(e,t)=>new eo({getter:e,typeName:ke.ZodLazy,...Pe(t)});class to extends Ne{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return fe(n,{received:n.data,code:X.invalid_literal,expected:this._def.value}),Re}return{status:"valid",value:t.data}}get value(){return this._def.value}}to.create=(e,t)=>new to({value:e,typeName:ke.ZodLiteral,...Pe(t)});function U1(e,t){return new Yr({values:e,typeName:ke.ZodEnum,...Pe(t)})}class Yr extends Ne{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return fe(n,{expected:Ve.joinValues(i),received:n.parsedType,code:X.invalid_type}),Re}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return fe(n,{received:n.data,code:X.invalid_enum_value,options:i}),Re}return zt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Yr.create(t)}exclude(t){return Yr.create(this.options.filter(n=>!t.includes(n)))}}Yr.create=U1;class no extends Ne{_parse(t){const n=Ve.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==ce.string&&i.parsedType!==ce.number){const o=Ve.objectValues(n);return fe(i,{expected:Ve.joinValues(o),received:i.parsedType,code:X.invalid_type}),Re}if(n.indexOf(t.data)===-1){const o=Ve.objectValues(n);return fe(i,{received:i.data,code:X.invalid_enum_value,options:o}),Re}return zt(t.data)}get enum(){return this._def.values}}no.create=(e,t)=>new no({values:e,typeName:ke.ZodNativeEnum,...Pe(t)});class ss extends Ne{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ce.promise&&n.common.async===!1)return fe(n,{code:X.invalid_type,expected:ce.promise,received:n.parsedType}),Re;const i=n.parsedType===ce.promise?n.data:Promise.resolve(n.data);return zt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ss.create=(e,t)=>new ss({type:e,typeName:ke.ZodPromise,...Pe(t)});class Nn extends Ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ke.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null,a={addIssue:l=>{fe(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="preprocess"){const l=o.transform(i.data,a);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}if(o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Re:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Re:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ks(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Ks(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);Ve.assertNever(o)}}Nn.create=(e,t,n)=>new Nn({schema:e,typeName:ke.ZodEffects,effect:t,...Pe(n)});Nn.createWithPreprocess=(e,t,n)=>new Nn({schema:t,effect:{type:"preprocess",transform:e},typeName:ke.ZodEffects,...Pe(n)});class wr extends Ne{_parse(t){return this._getType(t)===ce.undefined?zt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}wr.create=(e,t)=>new wr({innerType:e,typeName:ke.ZodOptional,...Pe(t)});class Si extends Ne{_parse(t){return this._getType(t)===ce.null?zt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Si.create=(e,t)=>new Si({innerType:e,typeName:ke.ZodNullable,...Pe(t)});class ro extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===ce.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}ro.create=(e,t)=>new ro({innerType:e,typeName:ke.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Pe(t)});class Ha extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Da(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Ha.create=(e,t)=>new Ha({innerType:e,typeName:ke.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Pe(t)});class Wa extends Ne{_parse(t){if(this._getType(t)!==ce.nan){const i=this._getOrReturnCtx(t);return fe(i,{code:X.invalid_type,expected:ce.nan,received:i.parsedType}),Re}return{status:"valid",value:t.data}}}Wa.create=e=>new Wa({typeName:ke.ZodNaN,...Pe(e)});const G9=Symbol("zod_brand");class F1 extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class vo extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Re:a.status==="dirty"?(n.dirty(),D1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Re:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new vo({in:t,out:n,typeName:ke.ZodPipeline})}}class qa extends Ne{_parse(t){const n=this._def.innerType._parse(t);return Ks(n)&&(n.value=Object.freeze(n.value)),n}}qa.create=(e,t)=>new qa({innerType:e,typeName:ke.ZodReadonly,...Pe(t)});const z1=(e,t={},n)=>e?is.create().superRefine((i,o)=>{var a,l;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...f,fatal:d})}}):is.create(),Y9={object:ut.lazycreate};var ke;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(ke||(ke={}));const J9=(e,t={message:`Input not instance of ${e.name}`})=>z1(n=>n instanceof e,t),H1=Pn.create,W1=Vr.create,X9=Wa.create,Q9=Gr.create,q1=Vs.create,ek=ki.create,tk=Ua.create,nk=Gs.create,rk=Ys.create,ik=is.create,sk=xi.create,ok=Er.create,ak=Fa.create,lk=Bn.create,ck=ut.create,uk=ut.strictCreate,dk=Js.create,fk=vl.create,hk=Xs.create,pk=Xn.create,gk=Qs.create,vk=za.create,mk=Ci.create,bk=Xi.create,yk=eo.create,_k=to.create,wk=Yr.create,xk=no.create,$k=ss.create,Zp=Nn.create,Ek=wr.create,kk=Si.create,Ck=Nn.createWithPreprocess,Sk=vo.create,Tk=()=>H1().optional(),Ak=()=>W1().optional(),Ik=()=>q1().optional(),Rk={string:e=>Pn.create({...e,coerce:!0}),number:e=>Vr.create({...e,coerce:!0}),boolean:e=>Vs.create({...e,coerce:!0}),bigint:e=>Gr.create({...e,coerce:!0}),date:e=>ki.create({...e,coerce:!0})},Ok=Re;var mt=Object.freeze({__proto__:null,defaultErrorMap:Zs,setErrorMap:B9,getErrorMap:ja,makeIssue:Na,EMPTY_PATH:j9,addIssueToContext:fe,ParseStatus:Mt,INVALID:Re,DIRTY:D1,OK:zt,isAborted:ku,isDirty:Cu,isValid:Ks,isAsync:Da,get util(){return Ve},get objectUtil(){return Eu},ZodParsedType:ce,getParsedType:zr,ZodType:Ne,ZodString:Pn,ZodNumber:Vr,ZodBigInt:Gr,ZodBoolean:Vs,ZodDate:ki,ZodSymbol:Ua,ZodUndefined:Gs,ZodNull:Ys,ZodAny:is,ZodUnknown:xi,ZodNever:Er,ZodVoid:Fa,ZodArray:Bn,ZodObject:ut,ZodUnion:Js,ZodDiscriminatedUnion:vl,ZodIntersection:Xs,ZodTuple:Xn,ZodRecord:Qs,ZodMap:za,ZodSet:Ci,ZodFunction:Xi,ZodLazy:eo,ZodLiteral:to,ZodEnum:Yr,ZodNativeEnum:no,ZodPromise:ss,ZodEffects:Nn,ZodTransformer:Nn,ZodOptional:wr,ZodNullable:Si,ZodDefault:ro,ZodCatch:Ha,ZodNaN:Wa,BRAND:G9,ZodBranded:F1,ZodPipeline:vo,ZodReadonly:qa,custom:z1,Schema:Ne,ZodSchema:Ne,late:Y9,get ZodFirstPartyTypeKind(){return ke},coerce:Rk,any:ik,array:lk,bigint:Q9,boolean:q1,date:ek,discriminatedUnion:fk,effect:Zp,enum:wk,function:bk,instanceof:J9,intersection:hk,lazy:yk,literal:_k,map:vk,nan:X9,nativeEnum:xk,never:ok,null:rk,nullable:kk,number:W1,object:ck,oboolean:Ik,onumber:Ak,optional:Ek,ostring:Tk,pipeline:Sk,preprocess:Ck,promise:$k,record:gk,set:mk,strictObject:uk,string:H1,symbol:tk,transformer:Zp,tuple:pk,undefined:nk,union:dk,unknown:sk,void:ak,NEVER:Ok,ZodIssueCode:X,quotelessJson:M9,ZodError:Mn});const Lk=/^[0-9a-f]{64}$/,io=e=>{const t=typeof e=="string"&&e.length===64&&Lk.test(e);return t||console.warn("invalid id is ignored: ",e),t},Pk=e=>t=>e.safeParse(t).success,Mk=mt.tuple([mt.literal("emoji"),mt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),mt.string().url()]);class Bk{findTagsByName(t){return this.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.tags.find(([n])=>n===t)}findLastTagByName(t){return this.tags.findLast(([n])=>n===t)}pTags(){return this.tags.filter(([t,n])=>t==="p"&&io(n))}eTags(){return this.tags.filter(([t,n])=>t==="e"&&io(n))}emojiTags(){return this.tags.filter(Pk(Mk))}taggedPubkeys(){return _i(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return;const[,,i]=n;return i}}class vd extends Bk{constructor(t){super(),this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}const jk=/^\p{Emoji}[\p{Emoji_Component}\p{Emoji_Modifier}\p{Emoji_Presentation}]*$/u,Kp=/^:(\w+):$/,Nk=e=>{if(e.isLikeOrDislike())return{type:"LikeDislike",content:e.content};if(e.isEmoji())return{type:"Emoji",content:e.content};if(e.isCustomEmoji()){const t=e.getShortcode(),n=e.getUrl();if(t!=null&&n!=null)return{type:"CustomEmoji",content:e.content,shortcode:t,url:n}}return{type:"Unknown",content:e.content}};class Dk extends vd{constructor(t){if(t.kind!==at.Reaction)throw new TypeError("kind should be 7");super(t)}isLike(){return this.content==="+"}isDislike(){return this.content==="-"}isLikeOrDislike(){return this.isLike()||this.isDislike()}isEmoji(){return jk.test(this.content)}isCustomEmoji(){return Kp.test(this.content)}getShortcode(){return this.content.match(Kp)?.[1]}getUrl(){const t=this.getShortcode();if(t!=null)return this.getEmojiUrl(t)}toReactionTypes(){return Nk(this)}}const{decode:Uk}=po,Fk=["reply","root","mention"],zk=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,Hk=/(?:#\[(?<idx>\d+)\])/g,Wk=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,qk=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,Zk=/:(?<emoji>\w+):/gu,md=e=>{const t=[...e.matchAll(zk),...e.matchAll(Hk),...e.matchAll(Wk),...e.matchAll(qk),...e.matchAll(Zk)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return t.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=Uk(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<e.length&&o(e.length),i},Kk=e=>e==null?!1:Fk.includes(e),Vk=(e,{tagIndex:t,content:n})=>{const i=e.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&io(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&io(i[1])){const a=Kk(i[3])?i[3]:void 0;return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a}}},Z1=(e,t)=>e.map(n=>{if(n.type==="TagReference"){const i=Vk(t,n);return{...n,type:"TagReferenceResolved",reference:i}}if(n.type==="CustomEmoji"){const i=t.getEmojiUrl(n.shortcode);return{...n,type:"CustomEmojiResolved",url:i}}return n}),Gk=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&io(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};class Yk extends vd{#e;#t;parsed(){if(this.#t!=null)return this.#t;const t=md(this.content),n=Z1(t,this);return this.#t=n,n}markedEventTags(){return this.#e!=null?this.#e:(this.#e=Gk(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReferenceResolved"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}}let Jk=class extends Yk{constructor(t){if(t.kind!==at.Text)throw new TypeError("kind should be 1");super(t)}};const Hr=e=>new vd(e),K1=e=>new Jk(e),Za=e=>new Dk(e),Xk=()=>{const e=[...O9];return window.navigator.language.includes("ja")&&e.push(...L9),e},V1=()=>({relayUrls:Xk(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!0,showEmojiReaction:!0,showMedia:!0,embedding:{twitter:!0,youtube:!0,ogp:!0},hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),Qk=e=>JSON.stringify(e),eC=e=>({...V1(),...JSON.parse(e)}),tC=b4(()=>window.localStorage,Qk,eC),[Vi,Gt]=y4("RabbitConfig",V1(),tC),Qe=()=>{const e=dt(),t=C=>{Gt("relayUrls",R=>_i([...R,C]))},n=C=>{Gt("relayUrls",R=>R.filter(P=>P!==C))},i=C=>{Gt("mutedPubkeys",R=>_i([...R,C]))},o=C=>{Gt("mutedPubkeys",R=>R.filter(P=>P!==C))},a=C=>{Gt("mutedKeywords",R=>_i([...R,C]))},l=C=>{Gt("mutedKeywords",R=>R.filter(P=>P!==C))},u=C=>{Gt("columns",R=>{const P=R.findIndex(A=>A.id===C.id);if(P>=0){const A=[...R];return A.splice(P,1,C),A}return[...R,C]})},d=(C,R)=>{Gt("columns",P=>{const A=R-1,D=Math.max(Math.min(A,P.length),0),U=P.findIndex(te=>te.id===C);if(U<0||D===U)return P;console.log(U,D);const q=[...P],[Q]=q.splice(U,1);return q.splice(D,0,Q),q})},f=C=>{Gt("columns",R=>R.filter(P=>P.id!==C))},h=C=>{Gt("customEmojis",R=>({...R,[C.shortcode]:C}))},g=C=>{Gt("customEmojis",R=>{const P=Object.fromEntries(C.map(A=>[A.shortcode,A]));return{...R,...P}})},v=C=>{Gt("customEmojis",R=>({...R,[C]:void 0}))},y=C=>Vi.customEmojis[C],w=C=>O1.sortBy(Object.values(Vi.customEmojis).filter(({shortcode:R})=>R.includes(C)),[R=>R.shortcode.length]),x=C=>Vi.mutedPubkeys.includes(C),$=C=>C.kind===at.Text?Vi.mutedKeywords.some(R=>C.content.includes(R)):!1;return{config:()=>Vi,setConfig:Gt,addRelay:t,removeRelay:n,saveColumn:u,moveColumn:d,removeColumn:f,initializeColumns:({pubkey:C})=>{if((Vi.columns?.length??0)>0)return;const R=[hd({width:"widest",pubkey:C}),P1({pubkey:C}),pd({name:e()("column.myPosts"),pubkey:C}),j1({name:e()("column.myReactions"),pubkey:C})];navigator.language.includes("ja")&&R.splice(2,0,B1()),Gt("columns",()=>[...R])},saveEmoji:h,saveEmojis:g,removeEmoji:v,getEmoji:y,searchEmojis:w,addMutedPubkey:i,removeMutedPubkey:o,addMutedKeyword:a,removeMutedKeyword:l,isPubkeyMuted:x,shouldMuteEvent:C=>{const R=Hr(C);return x(C.pubkey)||R.taggedPubkeys().some(x)||C.kind===at.Text&&$(C)}}},bd=(e,t)=>{const n=e.created_at-t.created_at;return n!==0?n:e.id===t.id?0:e.id>t.id?1:-1},G1=e=>{if(e.length!==0)return e.length===1?e[0]:e.reduce((t,n)=>bd(t,n)>0?t:n)},Tu=e=>Array.from(e).sort((t,n)=>-bd(t,n)),[nC]=Ce(new gE({eoseSubTimeout:12e3})),ml=()=>nC,[Y1,Vp]=k0({activeSubscriptions:0,activeBatchSubscriptions:0});c4(()=>{_r(()=>{console.debug("stats",{...Y1})})});const J1=()=>({stats:Y1,setActiveSubscriptions:n=>Vp("activeSubscriptions",n),setActiveBatchSubscriptions:n=>Vp("activeBatchSubscriptions",n)});let Gp=0;const rC=()=>{const e=Gp;return Gp+=1,e};class iC{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(t){this.id=rC(),this.req=t}#n(t){this.#e.forEach(n=>{n(t)})}#r(){this.#t.forEach(t=>{t()})}update(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=t,this.#n(t)}updateWith(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(t(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(t){this.#e.push(t)}subscribe(t){this.onUpdate(t)}onComplete(t){this.#t.push(t)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const t=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([t,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((t,n)=>{this.onComplete(()=>{this.res!=null?t(this.res):n(new Error("result was not set"))})})}}const sC=e=>{const t=Fe(e),n=Fe(()=>t().batchSize??100),i=Fe(()=>t().interval??2e3),[o,a]=Ce([]);let l;const u=()=>{const{executor:g}=t(),v=o();v.length>0&&(a([]),g(v)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(v=>[...v,g]):(u(),a([g])),d()},removeTask:g=>{a(v=>v.filter(y=>y!==g))}}};class vs extends iC{addEvent(t){this.updateWith(n=>ad.insertEventIntoDescendingList(n??[],t))}firstEventPromise(){return this.toUpdatePromise().then(t=>t[0])}latestEventPromise(){return this.toCompletePromise().then(t=>{const n=G1(t);if(n==null)throw new Error("event not found");return n})}}const fi=e=>t=>t.req.type===e;let Au=0;const{setActiveBatchSubscriptions:oC}=J1();setInterval(()=>{oC(Au)},1e3);const aC=e=>e.kind>=3e4&&e.kind<4e4,Yp=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,hi=({keyExtractor:e,filtersBuilder:t,eventKeyExtractor:n})=>{const i=new Map;return{tasks:i,add:u=>{const d=e(u.req),f=i.get(d)??[];i.set(d,[...f,u])},buildFilter:()=>{const u=Array.from(i.keys());return u.length===0?[]:t(u)},resolve:u=>{const d=n(u);if(d==null)return!1;const f=i.get(d)??[];return f.length===0?!1:(f.forEach(h=>{h.addEvent(u)}),!0)}}},lC=e=>{const t=hi({keyExtractor:g=>g.eventId,filtersBuilder:g=>[{ids:g}],eventKeyExtractor:g=>g.id}),n=hi({keyExtractor:g=>g.pubkey,filtersBuilder:g=>[{kinds:[at.Metadata],authors:g}],eventKeyExtractor:g=>g.pubkey}),i=hi({keyExtractor:g=>g.pubkey,filtersBuilder:g=>[{kinds:[at.Contacts],authors:g}],eventKeyExtractor:g=>g.pubkey}),o=hi({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[at.Repost],"#e":g}],eventKeyExtractor:g=>Hr(g).lastTaggedEventId()}),a=hi({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[at.Reaction],"#e":g}],eventKeyExtractor:g=>Hr(g).lastTaggedEventId()}),l=hi({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[at.Zap],"#e":g}],eventKeyExtractor:g=>Hr(g).lastTaggedEventId()}),u=hi({keyExtractor:Yp,filtersBuilder:g=>{const v=[];return g.forEach(y=>{const w=u.tasks.get(y)?.[0];if(w==null)return;const{kind:x,author:$,identifier:S}=w.req;v.push({kinds:[x],authors:[$],"#d":[S]})}),v},eventKeyExtractor:g=>{const v=Hr(g).findFirstTagByName("d")?.[1];if(v!=null)return Yp({kind:g.kind,author:g.pubkey,identifier:v})}}),d=g=>{if(fi("Event")(g))t.add(g);else if(fi("Profile")(g))n.add(g);else if(fi("Followings")(g))i.add(g);else if(fi("Reposts")(g))o.add(g);else if(fi("Reactions")(g))a.add(g);else if(fi("ZapReceipts")(g))l.add(g);else if(fi("ParameterizedReplaceableEvent")(g))u.add(g);else throw new Error(`unknown task: ${g.req.type}`)},f=()=>[...t.buildFilter(),...n.buildFilter(),...i.buildFilter(),...o.buildFilter(),...a.buildFilter(),...l.buildFilter(),...u.buildFilter()],h=g=>{g.kind===at.Metadata&&n.resolve(g)||g.kind===at.Contacts&&i.resolve(g)||g.kind===at.Repost&&o.resolve(g)||g.kind===at.Reaction&&a.resolve(g)||g.kind===at.Zap&&l.resolve(g)||aC(g)&&u.resolve(g)||t.resolve(g)};return e.forEach(g=>{d(g)}),{tasks:{eventTasks:t,profileTasks:n,followingsTasks:i,repostsTasks:o,reactionsTasks:a,zapReceiptsTasks:l,parameterizedReplaceableEventsTasks:u},add:d,buildFilters:f,resolve:h}},{addTask:cC,removeTask:uC}=sC(()=>({interval:2e3,batchSize:150,executor:e=>{const t=lC(e),n=t.buildFilters();if(n.length===0)return;const i=()=>{e.forEach(u=>{u.complete()})},{config:o}=Qe(),l=ml()().sub(o().relayUrls,n,{});Au+=1,l.on("event",u=>{t.resolve(u)}),l.on("eose",()=>{i(),l.unsub(),Au-=1})}})),bl=({task:e,signal:t})=>{cC(e),t?.addEventListener("abort",()=>uC(e))};class dC extends Error{}const Qr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new dC(l))},e)});return Promise.race([n,i])},fC=e=>{const t=Fe(e),n=Ti(()=>({queryKey:["useEvent",t()],queryFn:({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new vs({type:"Event",eventId:u}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return bl({task:d,signal:a}),Qr(15e3,`useEvent: ${u}`)(f)},staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1}));return{event:()=>n.data??null,query:n}},ln=e=>t=>e.some(n=>n==null)?null:t(e),hC=B("<span>"),pC=B("<div class=truncate> "),so=e=>{const t=dt(),[n,i]=u4(e,["eventId"]),{shouldMuteEvent:o}=Qe(),{event:a,query:l}=fC(()=>ln([n.eventId])(([d])=>({eventId:d}))),u=()=>{const d=a();return d!=null&&o(d)};return E(Ln,{get fallback(){return(()=>{const d=hC();return k(d,()=>t()("post.failedToFetchEvent"),null),k(d,()=>e.eventId,null),d})()},get children(){return[E(Ye,{get when(){return u()},children:null}),E(Ye,{get when(){return a()},keyed:!0,children:d=>E(Xv,d4({event:d},i))}),E(Ye,{get when(){return l.isLoading&&n.eventId},keyed:!0,children:d=>(()=>{const f=pC(),h=f.firstChild;return k(f,()=>t()("general.loading"),h),k(f,E(qs,{eventId:d}),null),f})()})]}})},gC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},vC=e=>{try{return gC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},X1=({taskProvider:e,queryClient:t})=>({queryKey:n,signal:i})=>{const o=e(n);if(o==null)return Promise.resolve(null);const a=o.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return o.onUpdate(l=>{const u=G1(l);t.setQueriesData({queryKey:n,stale:!0},d=>{if(u!=null&&(d==null||bd(u,d)>=0))return u})}),bl({task:o,signal:i}),Qr(15e3,`${JSON.stringify(n)}`)(a)},Q1=({taskProvider:e,queryClient:t})=>({queryKey:n,signal:i})=>{const o=e(n);if(o==null)return Promise.resolve([]);const a=o.toUpdatePromise().catch(()=>[]);return o.onUpdate(l=>{t.setQueriesData({queryKey:n,stale:!0},u=>{if(u==null)return l;const d=O1.uniqBy([...u,...l],f=>f.id);return Tu(d)})}),bl({task:o,signal:i}),Qr(15e3,`${JSON.stringify(n)}`)(a)},ms=e=>{const t=cs(),n=Fe(e),i=Fe(()=>["useProfile",n()]),o=Ti(()=>({queryKey:i(),queryFn:X1({taskProvider:([,d])=>{if(d==null)return null;const{pubkey:f}=d;return new vs({type:"Profile",pubkey:f})},queryClient:t}),staleTime:5*60*1e3,cacheTime:3*24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1})),a=()=>o.data;return{profile:Fe(()=>{if(o.data==null)return null;const{content:d}=o.data;return vC(d)}),event:a,invalidateProfile:()=>t.invalidateQueries({queryKey:i()}),query:o}},{npubEncode:mC}=po,mo=e=>{try{return mC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},yd=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return E(Ln,{get fallback(){return mo(e.pubkey)},get children(){return[E(Ye,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),E(Ye,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",Fe(()=>t()?.name)]}})]}})},ev=e=>{const[t,n]=Ce(new Date);return _r(()=>{const i=setInterval(()=>{n(new Date)},e().interval);xr(()=>clearInterval(i))}),t},bC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},Jp=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,yC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},_C=e=>{switch(e.kind){case"today":return Jp(e.value);case"yesterday":return`昨日 ${Jp(e.value)}`;case"abs":default:return e.value.toLocaleString()}},wC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,xC=(e,t)=>{const n=wC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},Xp=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),$C=e=>new Date(+e-24*60*60*1e3),tv=(e,t,n)=>Xp(e,t)?n({kind:"today",value:e}):Xp(e,$C(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),EC=(e,t=new Date)=>tv(e,t,yC),kC=(e,t=new Date)=>tv(e,t,_C),Qp=(e,t=new Date,n=bC)=>n(xC(e,t)),eg=ev(()=>({interval:7e3})),tg=ev(()=>({interval:60*1e3})),nv=()=>{const{config:e}=Qe();return t=>{switch(e().dateFormat){case"absolute-long":return EC(t,tg());case"absolute-short":return kC(t,tg());case"relative":return Qp(t,eg());default:return Qp(t,eg())}}},[CC,pi]=Ce({type:"Closed"}),ei=()=>({modalState:CC,setModalState:pi,showLogin:()=>{pi({type:"Login"})},showProfile:l=>{pi({type:"Profile",pubkey:l})},showProfileEdit:()=>{pi({type:"ProfileEdit"})},showAddColumn:()=>{pi({type:"AddColumn"})},showAbout:()=>{pi({type:"About"})},closeModal:()=>{pi({type:"Closed"})}}),SC=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500"aria-hidden=true></div><div class="flex-1 truncate break-all"><button class="select-text hover:text-blue-500 hover:underline"></button></div><div></div></div><div class=pt-1>'),TC=e=>{const t=dt(),{showProfile:n}=ei(),i=nv(),o=Fe(()=>Hr(e.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=SC(),u=l.firstChild,d=u.firstChild,f=d.nextSibling,h=f.firstChild,g=f.nextSibling,v=u.nextSibling;return k(d,E(R1,{})),h.$$click=()=>n(e.event.pubkey),k(h,E(yd,{get pubkey(){return e.event.pubkey}})),k(f,()=>t()("notification.reposted"),null),k(g,()=>i(o().createdAtAsDate())),k(v,E(so,{get eventId(){return a()}})),l})()};vt(["click"]);const AC=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741z">'),IC=(e={})=>(()=>{const t=AC();return it(t,e,!0,!0),t})(),RC=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0">'),rv=(e={})=>(()=>{const t=RC();return it(t,e,!0,!0),t})(),OC=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12">'),iv=(e={})=>(()=>{const t=OC();return it(t,e,!0,!0),t})(),LC=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 4.5v15m7.5-7.5h-15">'),sv=(e={})=>(()=>{const t=LC();return it(t,e,!0,!0),t})(),PC=B('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z">'),ov=(e={})=>(()=>{const t=PC();return it(t,e,!0,!0),t})(),MC=B('<div class="absolute z-20">'),BC=B('<div><button type=button class="flex items-center">'),_d=e=>{let t;const[n,i]=Ce(),[o,a]=Ce(!1),[l,u]=Ce({}),d=f4(()=>e.children),f=()=>a(!1),h=()=>a(x=>!x),g=x=>{const $=x.target;$!=null&&!n()?.contains($)&&f()},v=()=>{document.addEventListener("mousedown",g)},y=()=>{document.removeEventListener("mousedown",g)},w=()=>{const x=n();if(t==null||x==null)return;const $=t?.getBoundingClientRect(),S=x.getBoundingClientRect();let{top:L,left:C}=$;e.position==="left"?C-=$.width:e.position==="right"?C+=$.width:e.position==="top"?(L-=$.height,C-=$.left+$.width/2):(L+=$.height,C+=$.width/2),L=Math.min(L,window.innerHeight-S.height),C=Math.min(C,window.innerWidth-S.width),u({left:`${C}px`,top:`${L}px`})};return _r(()=>{o()?(v(),e.onOpen?.()):(y(),e.onClose?.())}),_r(C0(d,()=>{w()})),_r(()=>{o()&&w()}),kr(()=>{e.ref?.({close:f,elem:n})}),xr(()=>y()),(()=>{const x=BC(),$=x.firstChild;$.$$click=()=>{h(),w()};const S=t;return typeof S=="function"?jn(S,$):t=$,k($,()=>e.button),k(x,E(pe,{get when(){return o()},get children(){return E(h4,{get children(){const L=MC();return jn(i,L),k(L,d),Le(C=>p4(L,l(),C)),L}})}}),null),x})()};vt(["click"]);const jC=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),NC=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),DC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=jC(),i=n.firstChild;return i.$$click=t,k(i,()=>e.item.content()),n})()},av=e=>{let t;const n=()=>t?.close();return E(_d,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=NC();return k(i,E(Ft,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>E(DC,{item:o,onClose:n})})),i}})};vt(["click"]);const UC=B('<span class="inline-block h-4 w-4 pt-[1px] text-rose-400">'),ng=B("<span class=truncate>"),FC=B('<img class="h-4 max-w-[3rem]">'),zC=e=>e.type==="LikeDislike"&&e.content==="+",lv=e=>E(Ln,{get fallback(){return(()=>{const t=ng();return k(t,()=>e.reactionTypes.content),t})()},get children(){return[E(Ye,{get when(){return zC(e.reactionTypes)},get children(){const t=UC();return k(t,E(ov,{})),t}}),E(Ye,{get when(){return e.reactionTypes.type==="Emoji"&&e.reactionTypes},keyed:!0,children:({content:t})=>(()=>{const n=ng();return k(n,t),n})()}),E(Ye,{get when(){return e.reactionTypes.type==="CustomEmoji"&&e.reactionTypes},keyed:!0,children:({shortcode:t,url:n})=>(()=>{const i=FC();return Ue(i,"src",n),Ue(i,"alt",`:${t}:`),i})()})]}});function cv(e){return e&&e.__esModule?e.default:e}function On(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var yl,_e,uv,Fs,dv,rg,Ka={},fv=[],HC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Wr(e,t){for(var n in t)e[n]=t[n];return e}function hv(e){var t=e.parentNode;t&&t.removeChild(e)}function Iu(e,t,n){var i,o,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?yl.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return ka(e,l,i,o,null)}function ka(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++uv};return o==null&&_e.vnode!=null&&_e.vnode(a),a}function mr(){return{current:null}}function os(e){return e.children}function Gn(e,t){this.props=e,this.context=t}function as(e,t){if(t==null)return e.__?as(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?as(e):null}function pv(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return pv(e)}}function ig(e){(!e.__d&&(e.__d=!0)&&Fs.push(e)&&!Va.__r++||rg!==_e.debounceRendering)&&((rg=_e.debounceRendering)||dv)(Va)}function Va(){for(var e;Va.__r=Fs.length;)e=Fs.sort(function(t,n){return t.__v.__b-n.__v.__b}),Fs=[],e.some(function(t){var n,i,o,a,l,u;t.__d&&(l=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Wr({},a)).__v=a.__v+1,wd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??as(a),a.__h),bv(i,a),a.__e!=l&&pv(a)))})}function gv(e,t,n,i,o,a,l,u,d,f){var h,g,v,y,w,x,$,S=i&&i.__k||fv,L=S.length;for(n.__k=[],h=0;h<t.length;h++)if((y=n.__k[h]=(y=t[h])==null||typeof y=="boolean"?null:typeof y=="string"||typeof y=="number"||typeof y=="bigint"?ka(null,y,null,null,y):Array.isArray(y)?ka(os,{children:y},null,null,null):y.__b>0?ka(y.type,y.props,y.key,null,y.__v):y)!=null){if(y.__=n,y.__b=n.__b+1,(v=S[h])===null||v&&y.key==v.key&&y.type===v.type)S[h]=void 0;else for(g=0;g<L;g++){if((v=S[g])&&y.key==v.key&&y.type===v.type){S[g]=void 0;break}v=null}wd(e,y,v=v||Ka,o,a,l,u,d,f),w=y.__e,(g=y.ref)&&v.ref!=g&&($||($=[]),v.ref&&$.push(v.ref,null,y),$.push(g,y.__c||w,y)),w!=null?(x==null&&(x=w),typeof y.type=="function"&&y.__k===v.__k?y.__d=d=vv(y,d,e):d=mv(e,y,v,S,w,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=as(v))}for(n.__e=x,h=L;h--;)S[h]!=null&&(typeof n.type=="function"&&S[h].__e!=null&&S[h].__e==n.__d&&(n.__d=as(i,h+1)),_v(S[h],S[h]));if($)for(h=0;h<$.length;h++)yv($[h],$[++h],$[++h])}function vv(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?vv(i,t,n):mv(n,i,i,o,i.__e,t));return t}function Ga(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Ga(n,t)}):t.push(e)),t}function mv(e,t,n,i,o,a){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function WC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||Ya(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Ya(e,a,t[a],n[a],i)}function sg(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||HC.test(t)?n:n+"px"}function Ya(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||sg(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||sg(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?ag:og,a):e.removeEventListener(t,a?ag:og,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function og(e){this.l[e.type+!1](_e.event?_e.event(e):e)}function ag(e){this.l[e.type+!0](_e.event?_e.event(e):e)}function wd(e,t,n,i,o,a,l,u,d){var f,h,g,v,y,w,x,$,S,L,C,R=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(f=_e.__b)&&f(t);try{e:if(typeof R=="function"){if($=t.props,S=(f=R.contextType)&&i[f.__c],L=f?S?S.props.value:f.__:i,n.__c?x=(h=t.__c=n.__c).__=h.__E:("prototype"in R&&R.prototype.render?t.__c=h=new R($,L):(t.__c=h=new Gn($,L),h.constructor=R,h.render=ZC),S&&S.sub(h),h.props=$,h.state||(h.state={}),h.context=L,h.__n=i,g=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),R.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=Wr({},h.__s)),Wr(h.__s,R.getDerivedStateFromProps($,h.__s))),v=h.props,y=h.state,g)R.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(R.getDerivedStateFromProps==null&&$!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps($,L),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate($,h.__s,L)===!1||t.__v===n.__v){h.props=$,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(P){P&&(P.__=t)}),h.__h.length&&l.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate($,h.__s,L),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,y,w)})}h.context=L,h.props=$,h.state=h.__s,(f=_e.__r)&&f(t),h.__d=!1,h.__v=t,h.__P=e,f=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(i=Wr(Wr({},i),h.getChildContext())),g||h.getSnapshotBeforeUpdate==null||(w=h.getSnapshotBeforeUpdate(v,y)),C=f!=null&&f.type===os&&f.key==null?f.props.children:f,gv(e,Array.isArray(C)?C:[C],t,n,i,o,a,l,u,d),h.base=t.__e,t.__h=null,h.__h.length&&l.push(h),x&&(h.__E=h.__=null),h.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=qC(n.__e,t,n,i,o,a,l,d);(f=_e.diffed)&&f(t)}catch(P){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),_e.__e(P,t,n)}}function bv(e,t){_e.__c&&_e.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){_e.__e(i,n.__v)}})}function qC(e,t,n,i,o,a,l,u){var d,f,h,g=n.props,v=t.props,y=t.type,w=0;if(y==="svg"&&(o=!0),a!=null){for(;w<a.length;w++)if((d=a[w])&&"setAttribute"in d==!!y&&(y?d.localName===y:d.nodeType===3)){e=d,a[w]=null;break}}if(e==null){if(y===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),a=null,u=!1}if(y===null)g===v||u&&e.data===v||(e.data=v);else{if(a=a&&yl.call(e.childNodes),f=(g=n.props||Ka).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},w=0;w<e.attributes.length;w++)g[e.attributes[w].name]=e.attributes[w].value;(h||f)&&(h&&(f&&h.__html==f.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(WC(e,v,g,o,u),h)t.__k=[];else if(w=t.props.children,gv(e,Array.isArray(w)?w:[w],t,n,i,o&&y!=="foreignObject",a,l,a?a[0]:n.__k&&as(n,0),u),a!=null)for(w=a.length;w--;)a[w]!=null&&hv(a[w]);u||("value"in v&&(w=v.value)!==void 0&&(w!==g.value||w!==e.value||y==="progress"&&!w)&&Ya(e,"value",w,g.value,!1),"checked"in v&&(w=v.checked)!==void 0&&w!==e.checked&&Ya(e,"checked",w,g.checked,!1))}return e}function yv(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){_e.__e(i,n)}}function _v(e,t,n){var i,o;if(_e.unmount&&_e.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||yv(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){_e.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&_v(i[o],t,typeof e.type!="function");n||e.__e==null||hv(e.__e),e.__e=e.__d=void 0}function ZC(e,t,n){return this.constructor(e,n)}function wv(e,t,n){var i,o,a;_e.__&&_e.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],wd(t,e=(!i&&n||t).__k=Iu(os,null,[e]),o||Ka,Ka,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?yl.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),bv(a,e)}yl=fv.slice,_e={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},uv=0,Gn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Wr({},this.state),typeof e=="function"&&(e=e(Wr({},n),this.props)),e&&Wr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),ig(this))},Gn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ig(this))},Gn.prototype.render=os,Fs=[],dv=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Va.__r=0;var KC=0;function K(e,t,n,i,o){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--KC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return _e.vnode&&_e.vnode(d),d}function VC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function GC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Zr={set:VC,get:GC};const tu=new Map,YC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function JC(){for(const{v:e,emoji:t}of YC)if(xv(t))return e}function XC(){return!xv("🇨🇦")}function xv(e){if(tu.has(e))return tu.get(e);const t=QC(e);return tu.set(e,t),t}const QC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,f=Math.floor(u/4/n),h=e.getImageData(d,f,1,1).data;return!(a[u]!==h[0]||a[u+2]!==h[2]||e.measureText(o).width>=n)}})();var lg={latestVersion:JC,noCountryFlags:XC};const Ru=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let It=null;function eS(e){It||(It=Zr.get("frequently")||{});const t=e.id||e;t&&(It[t]||(It[t]=0),It[t]+=1,Zr.set("last",t),Zr.set("frequently",It))}function tS({maxFrequentRows:e,perLine:t}){if(!e)return[];It||(It=Zr.get("frequently"));let n=[];if(!It){It={};for(let a in Ru.slice(0,t)){const l=Ru[a];It[l]=t-a,n.push(l)}return n}const i=e*t,o=Zr.get("last");for(let a in It)n.push(a);if(n.sort((a,l)=>{const u=It[l],d=It[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete It[l];o&&n.indexOf(o)==-1&&(delete It[n[n.length-1]],n.splice(-1,1,o)),Zr.set("frequently",It)}return n}var $v={add:eS,get:tS,DEFAULTS:Ru},Ev={};Ev=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var yr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Pt=null,He=null;const nu={};async function cg(e){if(nu[e])return nu[e];const n=await(await fetch(e)).json();return nu[e]=n,n}let ru=null,kv=null,Cv=!1;function _l(e,{caller:t}={}){return ru||(ru=new Promise(n=>{kv=n})),e?nS(e):t&&!Cv&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),ru}async function nS(e){Cv=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=yr.emojiVersion.value),n||(n=yr.set.value),i||(i=yr.locale.value),He)He.categories=He.categories.filter(d=>!d.name);else{He=(typeof e.data=="function"?await e.data():e.data)||await cg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),He.emoticons={},He.natives={},He.categories.unshift({id:"frequent",emojis:[]});for(const d in He.aliases){const f=He.aliases[d],h=He.emojis[f];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}He.originalCategories=He.categories}if(Pt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?cv(Ev):await cg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const f=e.custom[d],h=e.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Pt.categories.custom),h&&!f.icon&&(f.target=h.target||h),He.categories.push(f);for(const g of f.emojis)He.emojis[g.id]=g}}e.categories&&(He.categories=He.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,f)=>{const h=e.categories.indexOf(d.id),g=e.categories.indexOf(f.id);return h-g}));let o=null,a=null;n=="native"&&(o=lg.latestVersion(),a=e.noCountryFlags||lg.noCountryFlags());let l=He.categories.length,u=!1;for(;l--;){const d=He.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=e;g=g>=0?g:yr.maxFrequentRows.value,v||(v=yr.perLine.value),d.emojis=$v.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){He.categories.splice(l,1);continue}const{categoryIcons:f}=e;if(f){const g=f[d.id];g&&!d.icon&&(d.icon=g)}let h=d.emojis.length;for(;h--;){const g=d.emojis[h],v=g.id?g:He.emojis[g],y=()=>{d.emojis.splice(h,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){y();continue}if(o&&v.version>o){y();continue}if(a&&d.id=="flags"&&!aS.includes(v.id)){y();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([x,$])=>{if(x)return(Array.isArray(x)?x:[x]).map(S=>($?S.split(/[-|_|\s]+/):[S]).map(L=>L.toLowerCase())).flat()}).flat().filter(x=>x&&x.trim()).join(","),v.emoticons)for(const x of v.emoticons)He.emoticons[x]||(He.emoticons[x]=v.id);let w=0;for(const x of v.skins){if(!x)continue;w++;const{native:$}=x;$&&(He.natives[$]=v.id,v.search+=`,${$}`);const S=w==1?"":`:skin-tone-${w}:`;x.shortcodes=`:${v.id}:${S}`}}}}u&&Qi.reset(),kv()}function Sv(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Tv(o,e,t,n);return i}function Tv(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const rS=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Ou=null;function iS(e){return e.id?e:He.emojis[e]||He.emojis[He.aliases[e]]||He.emojis[He.natives[e]]}function sS(){Ou=null}async function oS(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await _l(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,f)=>u.trim()&&f.indexOf(u)==d);if(!i.length)return;let o=Ou||(Ou=Object.values(He.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${u}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:f+1)}o=a}return a.length<2||(a.sort((u,d)=>{const f=l[u.id],h=l[d.id];return f==h?u.id.localeCompare(d.id):f-h}),a.length>t&&(a=a.slice(0,t))),a}var Qi={search:oS,get:iS,reset:sS,SHORTCODES_REGEX:rS};const aS=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function lS(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function cS(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function uS(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const dS={activity:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:K("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),K("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),K("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:K("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),K("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:K("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),K("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),K("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},fS={loupe:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:K("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:K("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Ja={categories:dS,search:fS};function Lu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Qi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Qi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),l=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return K("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?K("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?K("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):K("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${l})`,backgroundSize:`${100*He.sheet.cols}% ${100*He.sheet.rows}%`,backgroundPosition:`${100/(He.sheet.cols-1)*o.x}% ${100/(He.sheet.rows-1)*o.y}%`}})})}const hS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Av extends hS{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Tv(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class pS extends Av{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Iv={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:yr.set,skin:yr.skin};class Rv extends Av{async connectedCallback(){const t=Sv(this.props,Iv,this);t.element=this,t.ref=n=>{this.component=n},await _l(),!this.disconnected&&wv(K(Lu,{...t}),this)}constructor(t){super(t)}}On(Rv,"Props",Iv);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Rv);var ug,Pu=[],dg=_e.__b,fg=_e.__r,hg=_e.diffed,pg=_e.__c,gg=_e.unmount;function gS(){var e;for(Pu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Pu.pop();)if(e.__P)try{e.__H.__h.forEach(Ca),e.__H.__h.forEach(Mu),e.__H.__h=[]}catch(t){e.__H.__h=[],_e.__e(t,e.__v)}}_e.__b=function(e){dg&&dg(e)},_e.__r=function(e){fg&&fg(e);var t=e.__c.__H;t&&(t.__h.forEach(Ca),t.__h.forEach(Mu),t.__h=[])},_e.diffed=function(e){hg&&hg(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Pu.push(t)!==1&&ug===_e.requestAnimationFrame||((ug=_e.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),vg&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);vg&&(i=requestAnimationFrame(o))})(gS))},_e.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ca),n.__h=n.__h.filter(function(i){return!i.__||Mu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],_e.__e(i,n.__v)}}),pg&&pg(e,t)},_e.unmount=function(e){gg&&gg(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ca(i)}catch(o){t=o}}),t&&_e.__e(t,n.__v))};var vg=typeof requestAnimationFrame=="function";function Ca(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Mu(e){e.__c=e.__()}function vS(e,t){for(var n in t)e[n]=t[n];return e}function mg(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Xa(e){this.props=e}(Xa.prototype=new Gn).isPureReactComponent=!0,Xa.prototype.shouldComponentUpdate=function(e,t){return mg(this.props,e)||mg(this.state,t)};var bg=_e.__b;_e.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),bg&&bg(e)};var mS=_e.__e;_e.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}mS(e,t,n)};var yg=_e.unmount;function iu(){this.__u=0,this.t=null,this.__b=null}function Ov(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function ya(){this.u=null,this.o=null}_e.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),yg&&yg(e)},(iu.prototype=new Gn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Ov(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function g(v,y,w){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(x){return g(x,y,w)}),v.__c&&v.__c.__P===y&&(v.__e&&w.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=w)),v}(f,f.__c.__P,f.__c.__O)}var h;for(i.setState({__e:i.__b=null});h=i.t.pop();)h.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(l,l)},iu.prototype.componentWillUnmount=function(){this.t=[]},iu.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=vS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Iu(os,null,e.fallback);return o&&(o.__h=null),[Iu(os,null,t.__e?null:e.children),o]};var _g=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(ya.prototype=new Gn).__e=function(e){var t=this,n=Ov(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),_g(t,e,i)):o()};n?n(a):a()}},ya.prototype.render=function(e){this.u=null,this.o=new Map;var t=Ga(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},ya.prototype.componentDidUpdate=ya.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){_g(e,n,t)})};var bS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,yS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,_S=typeof document<"u",wS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Gn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Gn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var wg=_e.event;function xS(){}function $S(){return this.cancelBubble}function ES(){return this.defaultPrevented}_e.event=function(e){return wg&&(e=wg(e)),e.persist=xS,e.isPropagationStopped=$S,e.isDefaultPrevented=ES,e.nativeEvent=e};var xg={configurable:!0,get:function(){return this.class}},$g=_e.vnode;_e.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var l=n[a];_S&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!wS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&yS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=Ga(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(xg.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",xg))}e.$$typeof=bS,$g&&$g(e)};var Eg=_e.__r;_e.__r=function(e){Eg&&Eg(e),e.__c};const kS={light:"outline",dark:"solid"};class CS extends Xa{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return K("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return K("img",{src:n.src})}const i=Ja.categories[t.id]||Ja.categories.custom,o=this.props.icons=="auto"?kS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return K("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:K("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Pt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),K("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),K("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=He.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class SS extends Xa{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const _a={rowsPerRender:10};class TS extends Gn{getInitialState(t=this.props){return{skin:Zr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Pt.rtl?"rtl":"ltr",this.refs={menu:mr(),navigation:mr(),scroll:mr(),search:mr(),searchInput:mr(),skinToneButton:mr(),skinToneRadio:mr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await _l(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=He;this.refs.categories=new Map;const n=He.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%_a.rowsPerRender?{}:mr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of t){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:mr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Qi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=l=>{l!=t.state.categoryId&&t.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const u=[...n];for(const[d,f]of u)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(_a.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*_a.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,f]=this.state.pos;const h=(()=>{if(d==0&&f==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(f+=v,!g[f]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,f=i?0:u[d].length-1,[d,f];f=i?g.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[f]||(f=g.length-1),[d,f]):(d=a?0:u.length-1,f=a?0:u[d].length-1,[d,f])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(t=i[n].__categoryId),t&&(l=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=uS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&$v.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Zr.set("skin",t)}renderNav(){return K(CS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return K("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[K("div",{class:"flex flex-middle flex-grow",children:[K("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:K(Lu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),K("div",{class:`margin-${this.dir[0]}`,children:t||n?K("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[K("div",{class:"preview-title ellipsis",children:t?t.name:Pt.search_no_results_1}),K("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Pt.search_no_results_2})]}):K("div",{class:"preview-placeholder color-c",children:Pt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(t.skins[l-1]||t.skins[0]).native,f=lS(this.state.pos,n),h=n.concat(t.id).join("");return K(SS,{selected:f,skin:l,size:a,children:K("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[K("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),K(Lu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return K("div",{children:[K("div",{class:"spacer"}),K("div",{class:"flex flex-middle",children:[K("div",{class:"search relative flex-grow",children:[K("input",{type:"search",ref:this.refs.searchInput,placeholder:Pt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),K("span",{class:"icon loupe flex",children:Ja.search.loupe}),this.state.searchResults&&K("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Ja.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?K("div",{class:"category",ref:this.refs.search,children:[K("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Pt.categories.search}),K("div",{children:t.length?t.map((n,i)=>K("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):K("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&K("a",{onClick:this.props.onAddCustomEmoji,children:Pt.add_custom})})})]}):null}renderCategories(){const{categories:t}=He,n=!!this.state.searchResults,i=this.getPerLine();return K("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return K("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[K("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Pt.categories[o.id]}),K("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const f=u.index-u.index%_a.rowsPerRender,h=this.state.visibleRows[f],g="current"in u?u:void 0;if(!h&&!g)return null;const v=d*i,y=v+i,w=o.emojis.slice(v,y);return w.length<i&&w.push(...new Array(i-w.length)),K("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&w.map((x,$)=>{if(!x)return K("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const S=Qi.get(x);return this.renderEmojiButton(S,{pos:[u.index,$],posinset:u.posinset+$,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:K("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:K("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Pt.skins.choose,title:Pt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:K("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return K("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),K("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Pt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return K("div",{children:[K("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Pt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),K("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[K("span",{class:`skin-tone skin-tone-${l}`}),K("span",{class:"margin-small-lr",children:Pt.skins[l]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return K("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&K("div",{class:"padding-lr",children:this.renderSearch()}),K("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:K("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),On(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),On(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),On(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),On(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),On(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Qi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let f of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),On(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),On(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),On(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),On(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await cS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class xd extends pS{async connectedCallback(){const t=Sv(this.props,yr,this);t.element=this,t.ref=n=>{this.component=n},await _l(t),!this.disconnected&&wv(K(TS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:cv(Lv)})}}On(xd,"Props",yr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",xd);var Lv={};Lv=`:host {
  width: min-content;
  height: 435px;
  min-height: 230px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  --border-radius: 10px;
  --category-icon-size: 18px;
  --font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  --font-size: 15px;
  --preview-placeholder-size: 21px;
  --preview-title-size: 1.1em;
  --preview-subtitle-size: .9em;
  --shadow-color: 0deg 0% 0%;
  --shadow: .3px .5px 2.7px hsl(var(--shadow-color) / .14), .4px .8px 1px -3.2px hsl(var(--shadow-color) / .14), 1px 2px 2.5px -4.5px hsl(var(--shadow-color) / .14);
  display: flex;
}

[data-theme="light"] {
  --em-rgb-color: var(--rgb-color, 34, 36, 39);
  --em-rgb-accent: var(--rgb-accent, 34, 102, 237);
  --em-rgb-background: var(--rgb-background, 255, 255, 255);
  --em-rgb-input: var(--rgb-input, 255, 255, 255);
  --em-color-border: var(--color-border, rgba(0, 0, 0, .05));
  --em-color-border-over: var(--color-border-over, rgba(0, 0, 0, .1));
}

[data-theme="dark"] {
  --em-rgb-color: var(--rgb-color, 222, 222, 221);
  --em-rgb-accent: var(--rgb-accent, 58, 130, 247);
  --em-rgb-background: var(--rgb-background, 21, 22, 23);
  --em-rgb-input: var(--rgb-input, 0, 0, 0);
  --em-color-border: var(--color-border, rgba(255, 255, 255, .1));
  --em-color-border-over: var(--color-border-over, rgba(255, 255, 255, .2));
}

#root {
  --color-a: rgb(var(--em-rgb-color));
  --color-b: rgba(var(--em-rgb-color), .65);
  --color-c: rgba(var(--em-rgb-color), .45);
  --padding: 12px;
  --padding-small: calc(var(--padding) / 2);
  --sidebar-width: 16px;
  --duration: 225ms;
  --duration-fast: 125ms;
  --duration-instant: 50ms;
  --easing: cubic-bezier(.4, 0, .2, 1);
  width: 100%;
  text-align: left;
  border-radius: var(--border-radius);
  background-color: rgb(var(--em-rgb-background));
  position: relative;
}

@media (prefers-reduced-motion) {
  #root {
    --duration: 0;
    --duration-fast: 0;
    --duration-instant: 0;
  }
}

#root[data-menu] button {
  cursor: auto;
}

#root[data-menu] .menu button {
  cursor: pointer;
}

:host, #root, input, button {
  color: rgb(var(--em-rgb-color));
  font-family: var(--font-family);
  font-size: var(--font-size);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: normal;
}

*, :before, :after {
  box-sizing: border-box;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.relative {
  position: relative;
}

.flex {
  display: flex;
}

.flex-auto {
  flex: none;
}

.flex-center {
  justify-content: center;
}

.flex-column {
  flex-direction: column;
}

.flex-grow {
  flex: auto;
}

.flex-middle {
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.padding {
  padding: var(--padding);
}

.padding-t {
  padding-top: var(--padding);
}

.padding-lr {
  padding-left: var(--padding);
  padding-right: var(--padding);
}

.padding-r {
  padding-right: var(--padding);
}

.padding-small {
  padding: var(--padding-small);
}

.padding-small-b {
  padding-bottom: var(--padding-small);
}

.padding-small-lr {
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
}

.margin {
  margin: var(--padding);
}

.margin-r {
  margin-right: var(--padding);
}

.margin-l {
  margin-left: var(--padding);
}

.margin-small-l {
  margin-left: var(--padding-small);
}

.margin-small-lr {
  margin-left: var(--padding-small);
  margin-right: var(--padding-small);
}

.align-l {
  text-align: left;
}

.align-r {
  text-align: right;
}

.color-a {
  color: var(--color-a);
}

.color-b {
  color: var(--color-b);
}

.color-c {
  color: var(--color-c);
}

.ellipsis {
  white-space: nowrap;
  max-width: 100%;
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.sr-only {
  width: 1px;
  height: 1px;
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
}

a {
  cursor: pointer;
  color: rgb(var(--em-rgb-accent));
}

a:hover {
  text-decoration: underline;
}

.spacer {
  height: 10px;
}

[dir="rtl"] .scroll {
  padding-left: 0;
  padding-right: var(--padding);
}

.scroll {
  padding-right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.scroll::-webkit-scrollbar {
  width: var(--sidebar-width);
  height: var(--sidebar-width);
}

.scroll::-webkit-scrollbar-track {
  border: 0;
}

.scroll::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.scroll::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
}

.scroll::-webkit-scrollbar-thumb {
  min-height: 20%;
  min-height: 65px;
  border: 4px solid rgb(var(--em-rgb-background));
  border-radius: 8px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background-color: var(--em-color-border-over) !important;
}

.scroll:hover::-webkit-scrollbar-thumb {
  background-color: var(--em-color-border);
}

.sticky {
  z-index: 1;
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  font-weight: 500;
  position: sticky;
  top: -1px;
}

[dir="rtl"] .search input[type="search"] {
  padding: 10px 2.2em 10px 2em;
}

[dir="rtl"] .search .loupe {
  left: auto;
  right: .7em;
}

[dir="rtl"] .search .delete {
  left: .7em;
  right: auto;
}

.search {
  z-index: 2;
  position: relative;
}

.search input, .search button {
  font-size: calc(var(--font-size)  - 1px);
}

.search input[type="search"] {
  width: 100%;
  background-color: var(--em-color-border);
  transition-duration: var(--duration);
  transition-property: background-color, box-shadow;
  transition-timing-function: var(--easing);
  border: 0;
  border-radius: 10px;
  outline: 0;
  padding: 10px 2em 10px 2.2em;
  display: block;
}

.search input[type="search"]::-ms-input-placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"]::placeholder {
  color: inherit;
  opacity: .6;
}

.search input[type="search"], .search input[type="search"]::-webkit-search-decoration, .search input[type="search"]::-webkit-search-cancel-button, .search input[type="search"]::-webkit-search-results-button, .search input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
}

.search input[type="search"]:focus {
  background-color: rgb(var(--em-rgb-input));
  box-shadow: inset 0 0 0 1px rgb(var(--em-rgb-accent)), 0 1px 3px rgba(65, 69, 73, .2);
}

.search .icon {
  z-index: 1;
  color: rgba(var(--em-rgb-color), .7);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.search .loupe {
  pointer-events: none;
  left: .7em;
}

.search .delete {
  right: .7em;
}

svg {
  fill: currentColor;
  width: 1em;
  height: 1em;
}

button {
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  cursor: pointer;
  color: currentColor;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}

#nav {
  z-index: 2;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: var(--sidebar-width);
  position: relative;
}

#nav button {
  color: var(--color-b);
  transition: color var(--duration) var(--easing);
}

#nav button:hover {
  color: var(--color-a);
}

#nav svg, #nav img {
  width: var(--category-icon-size);
  height: var(--category-icon-size);
}

#nav[dir="rtl"] .bar {
  left: auto;
  right: 0;
}

#nav .bar {
  width: 100%;
  height: 3px;
  background-color: rgb(var(--em-rgb-accent));
  transition: transform var(--duration) var(--easing);
  border-radius: 3px 3px 0 0;
  position: absolute;
  bottom: -12px;
  left: 0;
}

#nav button[aria-selected] {
  color: rgb(var(--em-rgb-accent));
}

#preview {
  z-index: 2;
  padding: calc(var(--padding)  + 4px) var(--padding);
  padding-right: var(--sidebar-width);
  position: relative;
}

#preview .preview-placeholder {
  font-size: var(--preview-placeholder-size);
}

#preview .preview-title {
  font-size: var(--preview-title-size);
}

#preview .preview-subtitle {
  font-size: var(--preview-subtitle-size);
}

#nav:before, #preview:before {
  content: "";
  height: 2px;
  position: absolute;
  left: 0;
  right: 0;
}

#nav[data-position="top"]:before, #preview[data-position="top"]:before {
  background: linear-gradient(to bottom, var(--em-color-border), transparent);
  top: 100%;
}

#nav[data-position="bottom"]:before, #preview[data-position="bottom"]:before {
  background: linear-gradient(to top, var(--em-color-border), transparent);
  bottom: 100%;
}

.category:last-child {
  min-height: calc(100% + 1px);
}

.category button {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif;
  position: relative;
}

.category button > * {
  position: relative;
}

.category button .background {
  opacity: 0;
  background-color: var(--em-color-border);
  transition: opacity var(--duration-fast) var(--easing) var(--duration-instant);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.category button:hover .background {
  transition-duration: var(--duration-instant);
  transition-delay: 0s;
}

.category button[aria-selected] .background {
  opacity: 1;
}

.category button[data-keyboard] .background {
  transition: none;
}

.row {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.skin-tone-button {
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 100%;
}

.skin-tone-button:hover {
  border-color: var(--em-color-border);
}

.skin-tone-button:active .skin-tone {
  transform: scale(.85) !important;
}

.skin-tone-button .skin-tone {
  transition: transform var(--duration) var(--easing);
}

.skin-tone-button[aria-selected] {
  background-color: var(--em-color-border);
  border-top-color: rgba(0, 0, 0, .05);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-width: 0;
  border-right-width: 0;
}

.skin-tone-button[aria-selected] .skin-tone {
  transform: scale(.9);
}

.menu {
  z-index: 2;
  white-space: nowrap;
  border: 1px solid var(--em-color-border);
  background-color: rgba(var(--em-rgb-background), .9);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition-property: opacity, transform;
  transition-duration: var(--duration);
  transition-timing-function: var(--easing);
  border-radius: 10px;
  padding: 4px;
  position: absolute;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .05);
}

.menu.hidden {
  opacity: 0;
}

.menu[data-position="bottom"] {
  transform-origin: 100% 100%;
}

.menu[data-position="bottom"].hidden {
  transform: scale(.9)rotate(-3deg)translateY(5%);
}

.menu[data-position="top"] {
  transform-origin: 100% 0;
}

.menu[data-position="top"].hidden {
  transform: scale(.9)rotate(3deg)translateY(-5%);
}

.menu input[type="radio"] {
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  overflow: hidden;
}

.menu input[type="radio"]:checked + .option {
  box-shadow: 0 0 0 2px rgb(var(--em-rgb-accent));
}

.option {
  width: 100%;
  border-radius: 6px;
  padding: 4px 6px;
}

.option:hover {
  color: #fff;
  background-color: rgb(var(--em-rgb-accent));
}

.skin-tone {
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.skin-tone:after {
  content: "";
  mix-blend-mode: overlay;
  background: linear-gradient(rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
  border: 1px solid rgba(0, 0, 0, .8);
  border-radius: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 2px #fff;
}

.skin-tone-1 {
  background-color: #ffc93a;
}

.skin-tone-2 {
  background-color: #ffdab7;
}

.skin-tone-3 {
  background-color: #e7b98f;
}

.skin-tone-4 {
  background-color: #c88c61;
}

.skin-tone-5 {
  background-color: #a46134;
}

.skin-tone-6 {
  background-color: #5d4437;
}

[data-index] {
  justify-content: space-between;
}

[data-emoji-set="twitter"] .skin-tone:after {
  box-shadow: none;
  border-color: rgba(0, 0, 0, .5);
}

[data-emoji-set="twitter"] .skin-tone-1 {
  background-color: #fade72;
}

[data-emoji-set="twitter"] .skin-tone-2 {
  background-color: #f3dfd0;
}

[data-emoji-set="twitter"] .skin-tone-3 {
  background-color: #eed3a8;
}

[data-emoji-set="twitter"] .skin-tone-4 {
  background-color: #cfad8d;
}

[data-emoji-set="twitter"] .skin-tone-5 {
  background-color: #a8805d;
}

[data-emoji-set="twitter"] .skin-tone-6 {
  background-color: #765542;
}

[data-emoji-set="google"] .skin-tone:after {
  box-shadow: inset 0 0 2px 2px rgba(0, 0, 0, .4);
}

[data-emoji-set="google"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="google"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="google"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="google"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="google"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="google"] .skin-tone-6 {
  background-color: #61493f;
}

[data-emoji-set="facebook"] .skin-tone:after {
  border-color: rgba(0, 0, 0, .4);
  box-shadow: inset 0 -2px 3px #000, inset 0 1px 4px #fff;
}

[data-emoji-set="facebook"] .skin-tone-1 {
  background-color: #f5c748;
}

[data-emoji-set="facebook"] .skin-tone-2 {
  background-color: #f1d5aa;
}

[data-emoji-set="facebook"] .skin-tone-3 {
  background-color: #d4b48d;
}

[data-emoji-set="facebook"] .skin-tone-4 {
  background-color: #aa876b;
}

[data-emoji-set="facebook"] .skin-tone-5 {
  background-color: #916544;
}

[data-emoji-set="facebook"] .skin-tone-6 {
  background-color: #61493f;
}

`;const Pv=e=>{let t,n;const{config:i}=Qe(),o=()=>{n!=null&&(n.remove(),n=void 0)},a=()=>{n!=null&&console.error("unexpected state"),o();const l=Object.entries(i().customEmojis).map(([d,{url:f}])=>({id:d,name:d,keywords:[d],skins:[{src:f}]}));n=new xd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),custom:[{id:"custom",name:"Custom Emojis",emojis:l}],autoFocus:!1,theme:"light",onEmojiSelect:d=>{console.log(d),e.onEmojiSelect?.(d),t?.close()}}),t?.elem()?.appendChild(n)};return xr(()=>{o()}),E(_d,{ref:l=>{t=l},position:"bottom",get button(){return e.children},onOpen:a,onClose:o})},AS=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M6 18 18 6M6 6l12 12">'),ls=(e={})=>(()=>{const t=AS();return it(t,e,!0,!0),t})(),IS=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),RS=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=IS();i.$$click=n;const o=t;return typeof o=="function"?jn(o,i):t=i,k(i,()=>e.children),i})()};vt(["click"]);const OS=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800"aria-label=Close><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-6em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),Oi=e=>E(RS,{onClose:()=>e.onClose?.(),get children(){const t=OS(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),k(i,E(pe,{get when(){return e?.closeButton},get fallback(){return E(ls,{})},keyed:!0,children:a=>a()})),k(o,()=>e.children),t}});vt(["click"]);const LS=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9">'),PS=(e={})=>(()=>{const t=LS();return it(t,e,!0,!0),t})(),MS=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),BS=B('<div class="relative inline-block"><button type=button>'),jS=e=>{const[t,n]=Ce(!1),i=()=>{navigator.clipboard.writeText(e.text).then(()=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=BS(),a=o.firstChild;return a.$$click=i,k(a,E(PS,{})),k(o,E(pe,{get when(){return t()},get children(){return MS()}}),null),Le(()=>Hu(a,e.class)),o})()};vt(["click"]);const NS=B('<div class=p-2><h2 class="text-lg font-bold">JSON</h2><pre class="whitespace-pre-wrap break-all rounded-lg border p-4 text-xs"></pre><div class="flex justify-end">'),DS=B('<div class=p-2><h2 class="text-lg font-bold">Found in these relays</h2><pre class="whitespace-pre-wrap break-all rounded-lg border p-2 text-xs">'),US=e=>{const t=ml(),n=Fe(()=>JSON.stringify(e.event,null,2)),i=Fe(()=>t().seenOn(e.event.id).join(`
`));return E(Oi,{get onClose(){return e.onClose},get children(){return[(()=>{const o=NS(),a=o.firstChild,l=a.nextSibling,u=l.nextSibling;return k(l,n),k(u,E(jS,{class:"h-4 w-4",get text(){return n()}})),o})(),(()=>{const o=DS(),a=o.firstChild,l=a.nextSibling;return k(l,i),o})()]}})},FS=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),zS=B('<div class="flex w-full items-center gap-1"><button type=button class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type=button class="profile flex min-w-0 select-text truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),HS=B('<img alt=icon class="h-full w-full rounded object-cover">'),WS=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return(()=>{const n=zS(),i=n.firstChild,o=i.nextSibling,a=o.firstChild,l=a.firstChild,u=l.firstChild,d=u.firstChild;return i.$$click=f=>{f.preventDefault(),e.onShowProfile?.()},k(i,E(pe,{get when(){return t()?.picture},keyed:!0,children:f=>(()=>{const h=HS();return Ue(h,"src",f),h})()})),l.$$click=f=>{f.preventDefault(),e?.onShowProfile?.()},k(u,E(pe,{get when(){return(t()?.display_name?.length??0)>0},get children(){const f=FS();return k(f,()=>t()?.display_name),f}}),d),k(d,E(pe,{get when(){return t()?.name},get fallback(){return`@${mo(e.pubkey)}`},keyed:!0,children:f=>`@${f}`})),n})()};vt(["click"]);const qS=B("<div>"),Jr=e=>{let t;const[n,i]=Ce(!1);return kr(()=>{const o=new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&i(!0)})},{threshold:e.threshold??0});t!=null&&o.observe(t),xr(()=>{o.disconnect()})}),[(()=>{const o=qS(),a=t;return typeof a=="function"?jn(a,o):t=o,o})(),E(pe,{get when(){return n()},get fallback(){return e.fallback},keyed:!0,children:o=>e.children()})]},ZS=B('<div class="px-4 py-2"><div> 件</div><div>'),KS=B('<div class="flex border-t py-1">'),VS=B("<div class=h-6>"),$d=e=>{const{showProfile:t}=ei();return E(Oi,{get onClose(){return e.onClose},get children(){const n=ZS(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return k(i,()=>e.data.length,o),k(a,E(Ft,{get each(){return e.data},children:l=>{const u=()=>e.pubkeyExtractor(l);return(()=>{const d=KS();return k(d,E(pe,{get when(){return e.renderInfo},keyed:!0,children:f=>f(l)}),null),k(d,E(Jr,{get fallback(){return VS()},children:()=>E(WS,{get pubkey(){return u()},onShowProfile:()=>t(u())})}),null),d})()}})),n}})},GS=e=>Math.floor(+e/1e3),Fr=()=>GS(new Date),YS=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],f=e?.map(g=>["p",g])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>h.push(["t",g])),l?.forEach(g=>h.push(["r",g])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...f,...h]},bs=()=>{const e=ml(),t=async(d,f)=>{const h={...f},g=fo(h);if(h.id=g,window.nostr==null)throw new Error("NIP-07 implementation not found");const v=await window.nostr.signEvent(h);if(!ho({...v,id:g}))throw new Error("nostr.signEvent returned invalid data");return d.map(async y=>{const w=await e().ensureRelay(y);try{await w.publish(v),console.log(`${y} has accepted our event`)}catch(x){const $=x instanceof Error?x.message:JSON.stringify(x);console.warn(`failed to publish to ${y}: ${$}`)}})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:h,content:g}=d,v=YS(d),y={kind:1,pubkey:h,created_at:Fr(),tags:v,content:g};return t(f,y)},publishReaction:async({relayUrls:d,pubkey:f,eventId:h,kind:g,reactionTypes:v,notifyPubkey:y})=>{const w=[["e",h,""],["p",y],["k",g.toString()]];v.type==="CustomEmoji"&&w.push(["emoji",v.shortcode,v.url]);const x={kind:7,pubkey:f,created_at:Fr(),tags:w,content:v.content};return t(d,x)},publishRepost:async({relayUrls:d,pubkey:f,eventId:h,kind:g,notifyPubkey:v})=>{const y={kind:g===1?at.Repost:16,pubkey:f,created_at:Fr(),tags:[["e",h,""],["p",v],["k",g.toString()]],content:""};return t(d,y)},updateProfile:async({relayUrls:d,pubkey:f,profile:h,otherProperties:g})=>{const v={...h,...g},y={kind:at.Metadata,pubkey:f,created_at:Fr(),tags:[],content:JSON.stringify(v)};return t(d,y)},updateContacts:async({relayUrls:d,pubkey:f,updatedTags:h,content:g})=>{const v={kind:at.Contacts,pubkey:f,created_at:Fr(),tags:h,content:g};return t(d,v)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:h})=>{const g={kind:at.EventDeletion,pubkey:f,created_at:Fr(),tags:[["e",h,""]],content:""};return t(d,g)}}},JS=/\p{Emoji_Presentation}/u,Mv=e=>["useReactions",e],Ed=e=>{const{shouldMuteEvent:t}=Qe(),n=cs(),i=Fe(()=>Mv(e())),o=Ti(()=>({queryKey:i(),queryFn:Q1({taskProvider:([,f])=>{if(f==null)return null;const{eventId:h}=f;return new vs({type:"Reactions",mentionedEventId:h})},queryClient:n}),staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3})),a=()=>(o.data??[]).filter(h=>!t(h));return{reactions:a,reactionsGrouped:()=>{const f=new Map;return a().forEach(h=>{const g=Za(h).isCustomEmoji()?`${h.content}${Za(h).getUrl()??""}`:h.content,v=f.get(g)??[];v.push(h),f.set(g,v)}),f},isReactedBy:f=>a().findIndex(h=>h.pubkey===f)!==-1,isReactedByWithEmoji:f=>a().findIndex(h=>h.pubkey===f&&JS.test(h.content))!==-1,query:o}},Bv=e=>{const t=cs(),n=Fe(e),i=bs();return $i(()=>({mutationKey:["useReactionMutation",n().eventId],mutationFn:(...a)=>i.publishReaction(...a).then(l=>Promise.allSettled(l.map(Qr(5e3)))),onSuccess:a=>{const l=a.filter(d=>d.status==="fulfilled").length,u=a.length-l;l===a.length?console.log("Succeeded to publish a reaction"):l>0?console.warn(`failed to publish a reaction on ${u} relays`):console.error("failed to publish reaction on all relays")},onError:a=>{console.error("failed to publish reaction: ",a)},onSettled:()=>{const a=Mv({eventId:n().eventId});t.refetchQueries({queryKey:a}).then(()=>t.invalidateQueries({queryKey:a})).catch(l=>console.error("failed to refetch reactions",l))}}))},jv=e=>["useReposts",e],Nv=e=>{const{shouldMuteEvent:t}=Qe(),n=cs(),i=Fe(e),o=Fe(()=>jv(i())),a=Ti(()=>({queryKey:o(),queryFn:Q1({taskProvider:([,d])=>{if(d==null)return null;const{eventId:f}=d;return new vs({type:"Reposts",mentionedEventId:f})},queryClient:n}),staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3})),l=()=>(a.data??[]).filter(f=>!t(f));return{reposts:l,isRepostedBy:d=>l().findIndex(f=>f.pubkey===d)!==-1,query:a}},XS=e=>{const t=cs(),n=Fe(e),i=bs();return $i(()=>({mutationKey:["useRepostMutation",n().eventId],mutationFn:(...a)=>i.publishRepost(...a).then(l=>Promise.allSettled(l.map(Qr(1e4)))),onSuccess:a=>{const l=a.filter(d=>d.status==="fulfilled").length,u=a.length-l;l===a.length?console.log("Succeeded to publish a repost"):l>0?console.warn(`Failed to publish a repost on ${u} relays`):console.error("Failed to publish a repost on all relays")},onError:a=>{console.error("failed to publish repost: ",a)},onSettled:()=>{const a=jv({eventId:n().eventId});t.refetchQueries({queryKey:a}).then(()=>t.invalidateQueries({queryKey:a})).catch(l=>console.error("failed to refetch repost",l))}}))};let su=!1;const[wa,QS]=Ce(void 0),rr=()=>(kr(()=>{if(wa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),wa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&wa()==null&&!su&&(su=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),QS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{su=!1})),e+=1},200)}),wa),Dv=B('<div class="text-sm text-zinc-400">'),Uv=B('<div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4">'),eT=B('<span class="inline-block h-4 w-4">'),tT=B('<div class="flex shrink-0 items-center gap-1">'),nT=B("<div class=w-6>"),rT=B('<div class="flex gap-2 overflow-x-auto py-1">'),iT=B('<span class="ml-1 text-sm">'),sT=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1"type=button>'),oT=B("<span class=text-red-500>"),aT=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),lT=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500">'),{noteEncode:cT}=po,uT=e=>{if(e.native!=null)return{type:"Emoji",content:e.native};if(e.src!=null)return{type:"CustomEmoji",content:`:${e.id}:`,shortcode:e.id,url:e.src};throw new Error("unknown emoji")},dT=e=>{const{config:t}=Qe(),n=rr(),[i,o]=Ce(!1),{reactions:a,isReactedByWithEmoji:l,isReactedBy:u}=Ed(()=>({eventId:e.event.id})),d=Fe(()=>{const w=n();return w!=null&&u(w)||i()}),f=Fe(()=>{const w=n();return w!=null&&l(w)}),h=Bv(()=>({eventId:e.event.id})),g=w=>{d()||ln([n(),e.event.id])(([x,$])=>{h.mutate({relayUrls:t().relayUrls,pubkey:x,reactionTypes:w??{type:"LikeDislike",content:"+"},eventId:$,kind:e.event.kind,notifyPubkey:e.event.pubkey}),o(!0)})},v=w=>{w.stopPropagation(),g()},y=w=>{g(uT(w))};return[(()=>{const w=Uv(),x=w.firstChild;return x.$$click=v,k(x,E(pe,{get when(){return Fe(()=>!!d())()&&!f()},get fallback(){return E(iv,{})},get children(){return E(ov,{})}})),k(w,E(pe,{get when(){return Fe(()=>!t().hideCount&&!t().showEmojiReaction)()&&a().length>0},get children(){const $=Dv();return k($,()=>a().length),$}}),null),Le($=>{const S={"text-zinc-400":!d()||f(),"hover:text-rose-400":!d()||f(),"text-rose-400":d()&&!f()||h.isPending},L=h.isPending;return $._v$=Aa(w,S,$._v$),L!==$._v$2&&(x.disabled=$._v$2=L),$},{_v$:void 0,_v$2:void 0}),w})(),E(pe,{get when(){return t().useEmojiReaction},get children(){const w=tT();return k(w,E(Pv,{onEmojiSelect:y,get children(){const x=eT();return k(x,E(sv,{})),x}})),Le(x=>Aa(w,{"text-zinc-400":!d()||!f(),"hover:text-rose-400":!d()||!f(),"text-rose-400":d()&&f()||h.isPending},x)),w}})]},fT=e=>{const{config:t}=Qe(),n=rr(),[i,o]=Ce(!1),{reposts:a,isRepostedBy:l}=Nv(()=>({eventId:e.event.id})),u=Fe(()=>{const h=n();return h!=null&&l(h)||i()}),d=XS(()=>({eventId:e.event.id})),f=h=>{h.stopPropagation(),!u()&&ln([n(),e.event.id])(([g,v])=>{d.mutate({relayUrls:t().relayUrls,pubkey:g,eventId:v,kind:e.event.kind,notifyPubkey:e.event.pubkey}),o(!0)})};return(()=>{const h=Uv(),g=h.firstChild;return g.$$click=f,k(g,E(R1,{})),k(h,E(pe,{get when(){return Fe(()=>!t().hideCount)()&&a().length>0},get children(){const v=Dv();return k(v,()=>a().length),v}}),null),Le(v=>{const y={"text-zinc-400":!u(),"hover:text-green-400":!u(),"text-green-400":u()||d.isPending},w=d.isPending;return v._v$3=Aa(h,y,v._v$3),w!==v._v$4&&(g.disabled=v._v$4=w),v},{_v$3:void 0,_v$4:void 0}),h})()},hT=e=>{const{reactions:t}=Ed(()=>({eventId:e.event.id}));return E($d,{get data(){return t()},pubkeyExtractor:n=>n.pubkey,renderInfo:n=>(()=>{const i=nT();return k(i,E(lv,{get reactionTypes(){return Za(n).toReactionTypes()}})),i})(),get onClose(){return e.onClose}})},pT=e=>{const{reposts:t}=Nv(()=>({eventId:e.event.id}));return E($d,{get data(){return t()},pubkeyExtractor:n=>n.pubkey,get onClose(){return e.onClose}})},gT=e=>{const{config:t}=Qe(),n=rr(),[i,o]=Ce(!1),{reactions:a,reactionsGrouped:l,isReactedBy:u}=Ed(()=>({eventId:e.event.id})),d=Bv(()=>({eventId:e.event.id})),f=()=>{const g=n();return g==null?i():i()||u(g)},h=g=>{f()||ln([n(),e.event.id])(([v,y])=>{d.mutate({relayUrls:t().relayUrls,pubkey:v,reactionTypes:g??{type:"LikeDislike",content:"+"},eventId:y,kind:e.event.kind,notifyPubkey:e.event.pubkey}),o(!0)})};return E(pe,{get when(){return Fe(()=>!!t().showEmojiReaction)()&&a().length>0},get children(){const g=rT();return k(g,E(Ft,{get each(){return[...l().entries()]},children:([,v])=>{const y=v.findIndex(x=>x.pubkey===n())>=0,w=Za(v[0]).toReactionTypes();return(()=>{const x=sT();return x.$$click=$=>{$.stopPropagation(),h(w)},k(x,E(lv,{reactionTypes:w}),null),k(x,E(pe,{get when(){return!t().hideCount},get children(){const $=iT();return k($,()=>v.length),$}}),null),Le($=>{const S={"text-zinc-400":!y,"hover:bg-zinc-50":!y,"bg-rose-50":y,"border-rose-200":y,"text-rose-400":y},L=f();return $._v$5=Aa(x,S,$._v$5),L!==$._v$6&&(x.disabled=$._v$6=L),$},{_v$5:void 0,_v$6:void 0}),x})()}})),g}})},vT=e=>{const t=dt(),{config:n}=Qe(),i=rr(),o=bs(),[a,l]=Ce(null),u=()=>l(null),d=$i(()=>({mutationKey:["deleteEvent",e.event.id],mutationFn:(...h)=>o.deleteEvent(...h).then(g=>Promise.allSettled(g.map(Qr(1e4)))),onSuccess:h=>{const g=h.filter(y=>y.status==="fulfilled").length,v=h.length-g;g===h.length?window.alert(t()("post.deletedSuccessfully")):g>0?window.alert(t()("post.failedToDeletePartially",{count:v})):window.alert(t()("post.failedToDelete"))},onError:h=>{console.error("failed to delete",h)}})),f=[{content:()=>t()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(cT(e.event.id)).catch(h=>window.alert(h))}},{content:()=>t()("post.showJSON"),onSelect:()=>{l("EventDebugModal")}},{content:()=>t()("post.showReposts"),onSelect:()=>{l("Reposts")}},{content:()=>t()("post.showReactions"),onSelect:()=>{l("Reactions")}},{when:()=>e.event.pubkey===i(),content:()=>(()=>{const h=oT();return k(h,()=>t()("post.deletePost")),h})(),onSelect:()=>{const h=i();h!=null&&window.confirm(t()("post.confirmDelete"))&&d.mutate({relayUrls:n().relayUrls,pubkey:h,eventId:e.event.id})}}];return[E(gT,{get event(){return e.event}}),(()=>{const h=lT(),g=h.firstChild;return g.$$click=v=>{v.stopPropagation(),e.onClickReply()},k(g,E(IC,{})),k(h,E(fT,{get event(){return e.event}}),null),k(h,E(dT,{get event(){return e.event}}),null),k(h,E(av,{menu:f,get children(){const v=aT();return k(v,E(rv,{})),v}}),null),h})(),E(Ln,{get children(){return[E(Ye,{get when(){return a()==="EventDebugModal"},get children(){return E(US,{get event(){return e.event},onClose:u})}}),E(Ye,{get when(){return a()==="Reactions"},get children(){return E(hT,{get event(){return e.event},onClose:u})}}),E(Ye,{get when(){return a()==="Reposts"},get children(){return E(pT,{get event(){return e.event},onClose:u})}})]}})]};vt(["click"]);const mT=B("<div>"),bT=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),yT=B("<br>"),_T=B("<span>: "),wT=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),xT=e=>{const t=dt(),[n,i]=Ce(!1);return E(pe,{get when(){return!e.contentWarning.contentWarning||n()},get fallback(){return(()=>{const o=wT();return o.$$click=()=>i(!0),k(o,()=>t()("post.contentWarning.show"),null),k(o,E(pe,{get when(){return e.contentWarning.reason!=null},get children(){return[yT(),(()=>{const a=_T(),l=a.firstChild;return k(a,()=>t()("post.contentWarning.reason"),l),k(a,()=>e.contentWarning.reason,null),a})()]}}),null),o})()},get children(){return[(()=>{const o=mT();return k(o,()=>e.children),o})(),E(pe,{get when(){return e.contentWarning.contentWarning},get children(){const o=bT();return o.$$click=()=>i(!1),o}})]}})};vt(["click"]);const Fv=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return E(pe,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${mo(e.pubkey)}`},get children(){return["@",Fe(()=>t()?.name??e.pubkey)]}})},$T=B('<a target=_blank rel="noreferrer noopener">'),Qn=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return E(pe,{get when(){return t()},get fallback(){return e.href},get children(){const n=$T();return k(n,()=>e.children??e.href),Le(i=>{const o=e.class,a=e.href;return o!==i._v$&&Hu(n,i._v$=o),a!==i._v$2&&Ue(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},ET=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|avif|apng|svg)$/i.test(t.pathname)}catch{return!1}},kT=e=>{try{const t=new URL(e);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(t.pathname)}catch{return!1}},CT=e=>{try{const t=new URL(e);return/^wss?:$/.test(t.protocol)}catch{return!1}},ST=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640${t.pathname}`,n.toString()}return t.toString()}catch{return e}},zv=e=>{try{const t=new URL(e);return t.protocol==="https:"&&(t.host==="twitter.com"||t.host==="x.com")}catch{return!1}},TT=["www.youtube.com","m.youtube.com","youtube.com"],AT=e=>{try{const t=new URL(e);if(t.protocol!=="https:")return null;if(TT.includes(t.host)){if(t.pathname==="/watch"){const n=t.searchParams.get("v");if(n!=null)return{videoId:n}}if(t.pathname.startsWith("/shorts/")){const n=t.pathname.match(/^\/shorts\/([0-9a-zA-Z_-]*)$/);if(n)return{videoId:n[1]}}}return t.host==="youtu.be"&&t.pathname.lastIndexOf("/")===0?{videoId:t.pathname}:null}catch{return null}},IT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),RT=B('<div class="aspect-video max-w-full">'),OT=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),LT=e=>{let t;const n=dt(),[i,o]=Ce(e.initialHidden);return E(pe,{get when(){return!i()},get fallback(){return(()=>{const a=IT();return a.$$click=()=>o(!1),k(a,()=>n()("post.showImage")),a})()},get children(){return E(Jr,{get fallback(){return(()=>{const a=RT();return k(a,E(Qn,{get href(){return e.url}})),a})()},children:()=>E(Qn,{class:"my-2 block",get href(){return e.url},get children(){const a=OT(),l=t;return typeof l=="function"?jn(l,a):t=a,Le(u=>{const d=ST(e.url),f=e.url;return d!==u._v$&&Ue(a,"src",u._v$=d),f!==u._v$2&&Ue(a,"alt",u._v$2=f),u},{_v$:void 0,_v$2:void 0}),a}})})}})};vt(["click"]);const PT=B('<div class="my-1 rounded border p-1">'),MT=e=>E(pe,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return E(qs,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=PT();return k(t,E(Jr,{children:()=>E(so,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[at.Text]}})})),t}}),BT=B('<button class="inline select-text text-blue-500 underline">'),ou=e=>{const{showProfile:t}=ei(),n=()=>{t(e.pubkey)};return(()=>{const i=BT();return i.$$click=n,k(i,E(Fv,{get pubkey(){return e.pubkey}})),i})()};vt(["click"]);const jT=e=>{const t={};return Array.from(e.head.querySelectorAll("meta")).forEach(n=>{const i=n.getAttribute("property"),o=n.getAttribute("content");i!=null&&o!=null&&(t[i]=o)}),t["og:image"]!=null&&t["og:title"]!=null&&t["og:description"]!=null&&t["og:url"]?{title:t["og:title"],description:t["og:description"],image:t["og:image"],url:t["og:url"]}:null},NT=e=>{const t=new DOMParser().parseFromString(e,"text/html");return jT(t)},DT=async e=>{const t=["www3.nhk.or.jp"],n=new URL(e);if(!t.includes(n.host))return null;const o=await(await fetch(n,{headers:{Accept:"text/html"}})).text();return NT(o)},UT=e=>{const t=()=>["useOgp",e().url],n=Ti(()=>({queryKey:t(),queryFn:({queryKey:[,o]})=>DT(o),staleTime:144e5,cacheTime:144e5,refetchOnWindowFocus:!1,refetchOnMount:!1}));return{query:n,ogp:()=>n.data}},FT=B('<blockquote class=twitter-tweet><a target=_blank rel="noreferrer noopener">'),zT=B('<div class="my-2 rounded-lg border transition-colors hover:bg-slate-100"><img class="max-w-full rounded-t-lg object-contain shadow"><div class="mb-1 p-1"><div class="text-xs text-slate-500"></div><div class=text-sm></div><div class="text-xs text-slate-500">'),HT=B('<div class="aspect-video max-w-full">'),WT=B('<div class="my-2 aspect-video w-full"><iframe loading=lazy title=YouTube class="my-2 h-full w-full"allowfullscreen>'),kg=e=>{try{const t=new URL(e);return t.host="twitter.com",t.href}catch{return e}},qT=e=>{const t=new URL("https://www.youtube.com/embed/");return t.pathname+=e,t.searchParams.set("origin",window.location.origin),t.href},ZT=e=>{let t;return _r(()=>{zv(e.href)&&window.twttr?.widgets?.load(t)}),(()=>{const n=FT(),i=n.firstChild,o=t;return typeof o=="function"?jn(o,n):t=n,k(i,()=>kg(e.href)),Le(a=>{const l=e.class,u=kg(e.href);return l!==a._v$&&Hu(i,a._v$=l),u!==a._v$2&&Ue(i,"href",a._v$2=u),a},{_v$:void 0,_v$2:void 0}),n})()},KT=e=>{const{ogp:t}=UT(()=>({url:e.url}));return E(pe,{get when(){return t()},get fallback(){return E(Qn,{get class(){return e.class},get href(){return e.url}})},keyed:!0,children:n=>E(Qn,{get href(){return e.url},get children(){const i=zT(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling,d=u.nextSibling;return k(l,()=>new URL(n.url).host),k(u,()=>n.title),k(d,()=>n.description),Le(f=>{const h=n.title,g=n.image;return h!==f._v$3&&Ue(o,"alt",f._v$3=h),g!==f._v$4&&Ue(o,"src",f._v$4=g),f},{_v$3:void 0,_v$4:void 0}),i}})})},VT=e=>{const{config:t}=Qe();return E(Ln,{get fallback(){return E(Qn,{get class(){return e.class},get href(){return e.href}})},get children(){return[E(Ye,{get when(){return Fe(()=>!!t().embedding.twitter)()&&zv(e.href)},get children(){return E(ZT,{get class(){return e.class},get href(){return e.href}})}}),E(Ye,{get when(){return Fe(()=>!!t().embedding.youtube)()&&AT(e.href)},keyed:!0,children:({videoId:n})=>E(Jr,{get fallback(){return(()=>{const i=HT();return k(i,E(Qn,{get href(){return e.href}})),i})()},children:()=>(()=>{const i=WT(),o=i.firstChild;return Le(()=>Ue(o,"src",qT(n))),i})()})}),E(Ye,{get when(){return t().embedding.ogp},get children(){return E(Jr,{children:()=>E(KT,{get class(){return e.class},get url(){return e.href}})})}})]}})},GT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),YT=B('<div class="aspect-video max-w-full">'),JT=B('<video class="max-h-64 max-w-full rounded-sm object-contain shadow"controls><a>'),XT=e=>{let t;const n=dt(),[i,o]=Ce(e.initialHidden);return E(pe,{get when(){return!i()},get fallback(){return(()=>{const a=GT();return a.$$click=()=>o(!1),k(a,()=>n()("post.showVideo")),a})()},get children(){return E(Jr,{get fallback(){return YT()},children:()=>E(Qn,{class:"my-2 block",get href(){return e.url},get children(){const a=JT(),l=a.firstChild,u=t;return typeof u=="function"?jn(u,a):t=a,k(l,()=>n()("post.download")),Le(d=>{const f=e.url,h=e.url;return f!==d._v$&&Ue(a,"src",d._v$=f),h!==d._v$2&&Ue(l,"href",d._v$2=h),d},{_v$:void 0,_v$2:void 0}),a}})})}})};vt(["click"]);const[kd,QT]=Ce({}),Hv=e=>{kd()[e]==null&&QT(t=>({...t,[e]:new MessageChannel}))},eA=e=>{const t=()=>kd()[e().id],n=(o,a)=>{const l={requestId:o,request:a};t().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const f=h=>{const g=h.data;g.requestId===o&&(t().port1.removeEventListener("message",f),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",f),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",f,!1),t().port1.start()});return kr(()=>{const{id:o}=e();Hv(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},tA=e=>{const t=Fe(e),n=()=>kd()[t().id];kr(()=>{const{id:i}=t();Hv(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,f=t().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),xr(()=>{o.removeEventListener("message",a)})})},wl=()=>eA(()=>({id:"CommandChannel"})),nA=e=>{tA(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},au=B("<span>"),Cg=B('<button class="select-text text-blue-500 underline">'),Sg=B('<div class="my-1 rounded border p-1">'),rA=B('<button class="select-text text-blue-500 underline"> (<!>)'),iA=B('<span class="text-blue-500 underline">'),sA=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),Wv=e=>{const{config:t,saveColumn:n}=Qe(),i=wl(),o=l=>{n(gd({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))},a=l=>{n(M1({name:l,relayUrls:[l]})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return E(Ft,{get each(){return e.parsed},children:l=>{if(l.type==="PlainText")return(()=>{const u=au();return k(u,()=>l.content),u})();if(l.type==="URL"){const u=()=>!t().showMedia||!e.embedding||(e.initialHidden??!1);return ET(l.content)?E(LT,{get url(){return l.content},get initialHidden(){return u()}}):kT(l.content)?E(XT,{get url(){return l.content},get initialHidden(){return u()}}):CT(l.content)?(()=>{const d=Cg();return d.$$click=()=>a(l.content),k(d,()=>l.content),d})():E(VT,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReferenceResolved"){if(l.reference==null)return(()=>{const u=au();return k(u,()=>l.content),u})();if(l.reference.type==="MentionedUser")return E(ou,{get pubkey(){return l.reference.pubkey}});if(l.reference.type==="MentionedEvent")return e.embedding?E(MT,{get mentionedEvent(){return l.reference}}):E(qs,{get eventId(){return l.reference.eventId}})}if(l.type==="Bech32Entity"){if(l.data.type==="note"&&e.embedding)return(()=>{const u=Sg();return k(u,E(so,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[at.Text]}})),u})();if(l.data.type==="nevent"&&e.embedding)return(()=>{const u=Sg();return k(u,E(so,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})();if(l.data.type==="npub")return E(ou,{get pubkey(){return l.data.data}});if(l.data.type==="nprofile")return E(ou,{get pubkey(){return l.data.data.pubkey}});if(l.data.type==="nrelay"){const u=l.data.data;return(()=>{const d=rA(),f=d.firstChild,h=f.nextSibling;return h.nextSibling,d.$$click=()=>a(u),k(d,u,f),k(d,()=>l.content,h),d})()}return(()=>{const u=iA();return k(u,()=>l.content),u})()}return l.type==="HashTag"?(()=>{const u=Cg();return u.$$click=()=>o(l.content),k(u,()=>l.content),u})():l.type==="CustomEmojiResolved"?l.url==null?(()=>{const u=au();return k(u,()=>l.content),u})():(()=>{const u=sA();return Le(d=>{const f=l.url,h=l.content,g=l.shortcode;return f!==d._v$&&Ue(u,"src",d._v$=f),h!==d._v$2&&Ue(u,"alt",d._v$2=h),g!==d._v$3&&Ue(u,"title",d._v$3=g),d},{_v$:void 0,_v$2:void 0,_v$3:void 0}),u})():(console.error("Not all ParsedTextNoteNodes are covered",l),null)}})};vt(["click"]);const oA=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75m-.375 0h.008v.015h-.008zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75m-.375 0h.008v.015h-.008z">'),qv=(e={})=>(()=>{const t=oA();return it(t,e,!0,!0),t})(),aA=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5m10.5-11.25h.008v.008h-.008zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0">'),lA=(e={})=>(()=>{const t=aA();return it(t,e,!0,!0),t})(),cA=B('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404">'),uA=(e={})=>(()=>{const t=cA();return it(t,e,!0,!0),t})();var Cd={},bo={},Zv={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,h){this.fn=d,this.context=f,this.once=h||!1}function a(d,f,h,g,v){if(typeof h!="function")throw new TypeError("The listener must be a function");var y=new o(h,g||d,v),w=n?n+f:f;return d._events[w]?d._events[w].fn?d._events[w]=[d._events[w],y]:d._events[w].push(y):(d._events[w]=y,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function u(){this._events=new i,this._eventsCount=0}u.prototype.eventNames=function(){var f=[],h,g;if(this._eventsCount===0)return f;for(g in h=this._events)t.call(h,g)&&f.push(n?g.slice(1):g);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(h)):f},u.prototype.listeners=function(f){var h=n?n+f:f,g=this._events[h];if(!g)return[];if(g.fn)return[g.fn];for(var v=0,y=g.length,w=new Array(y);v<y;v++)w[v]=g[v].fn;return w},u.prototype.listenerCount=function(f){var h=n?n+f:f,g=this._events[h];return g?g.fn?1:g.length:0},u.prototype.emit=function(f,h,g,v,y,w){var x=n?n+f:f;if(!this._events[x])return!1;var $=this._events[x],S=arguments.length,L,C;if($.fn){switch($.once&&this.removeListener(f,$.fn,void 0,!0),S){case 1:return $.fn.call($.context),!0;case 2:return $.fn.call($.context,h),!0;case 3:return $.fn.call($.context,h,g),!0;case 4:return $.fn.call($.context,h,g,v),!0;case 5:return $.fn.call($.context,h,g,v,y),!0;case 6:return $.fn.call($.context,h,g,v,y,w),!0}for(C=1,L=new Array(S-1);C<S;C++)L[C-1]=arguments[C];$.fn.apply($.context,L)}else{var R=$.length,P;for(C=0;C<R;C++)switch($[C].once&&this.removeListener(f,$[C].fn,void 0,!0),S){case 1:$[C].fn.call($[C].context);break;case 2:$[C].fn.call($[C].context,h);break;case 3:$[C].fn.call($[C].context,h,g);break;case 4:$[C].fn.call($[C].context,h,g,v);break;default:if(!L)for(P=1,L=new Array(S-1);P<S;P++)L[P-1]=arguments[P];$[C].fn.apply($[C].context,L)}}return!0},u.prototype.on=function(f,h,g){return a(this,f,h,g,!1)},u.prototype.once=function(f,h,g){return a(this,f,h,g,!0)},u.prototype.removeListener=function(f,h,g,v){var y=n?n+f:f;if(!this._events[y])return this;if(!h)return l(this,y),this;var w=this._events[y];if(w.fn)w.fn===h&&(!v||w.once)&&(!g||w.context===g)&&l(this,y);else{for(var x=0,$=[],S=w.length;x<S;x++)(w[x].fn!==h||v&&!w[x].once||g&&w[x].context!==g)&&$.push(w[x]);$.length?this._events[y]=$.length===1?$[0]:$:l(this,y)}return this},u.prototype.removeAllListeners=function(f){var h;return f?(h=n?n+f:f,this._events[h]&&l(this,h)):(this._events=new i,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,e.exports=u})(Zv);var xl=Zv.exports,Sd={},yo={};Object.defineProperty(yo,"__esModule",{value:!0});yo.SearchResult=void 0;const dA=/\$&/g,fA=/\$(\d)/g;class hA{constructor(t,n,i){this.data=t,this.term=n,this.strategy=i}getReplacementData(t){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(t);if(o==null||o.index==null)return null;const a=n.replace(dA,o[0]).replace(fA,(l,u)=>o[parseInt(u)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(t,n){const i=this.getReplacementData(t);if(i!==null)return n=i.afterCursor+n,[[t.slice(0,i.start),i.beforeCursor,t.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}yo.SearchResult=hA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Strategy=e.DEFAULT_INDEX=void 0;const t=yo;e.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const u=this.matchWithContext(o);if(!u)return!1;const d=u[(l=this.props.index)!==null&&l!==void 0?l:e.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(h=>new t.SearchResult(h,d,this)))},u),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,u=>{this.cache[o]=u,a(u)},l)}}e.Strategy=n})(Sd);Object.defineProperty(bo,"__esModule",{value:!0});bo.Completer=void 0;const pA=xl,gA=Sd;class vA extends pA.EventEmitter{constructor(t){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=t.map(n=>new gA.Strategy(n))}destroy(){return this.strategies.forEach(t=>t.destroy()),this}run(t){for(const n of this.strategies)if(n.execute(t,this.handleQueryResult))return;this.handleQueryResult([])}}bo.Completer=vA;var Td={},ys={};Object.defineProperty(ys,"__esModule",{value:!0});ys.createCustomEvent=void 0;const mA=typeof window<"u"&&!!window.CustomEvent,bA=(e,t)=>{if(mA)return new CustomEvent(e,t);const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,t?.cancelable||!1,t?.detail||void 0),n};ys.createCustomEvent=bA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Dropdown=e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=e.DEFAULT_DROPDOWN_CLASS_NAME=e.DEFAULT_DROPDOWN_PLACEMENT=e.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const t=xl,n=ys;e.DEFAULT_DROPDOWN_MAX_COUNT=10,e.DEFAULT_DROPDOWN_PLACEMENT="auto",e.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends t.EventEmitter{static create(l){const u=document.createElement("ul");u.className=l.className||e.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(u.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(u),new i(u,l)}constructor(l,u){super(),this.el=l,this.option=u,this.shown=!1,this.items=[],this.activeIndex=null}render(l,u){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||e.DEFAULT_DROPDOWN_MAX_COUNT).map((f,h)=>{var g;return new o(this,h,f,((g=this.option)===null||g===void 0?void 0:g.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(u).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const u={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:u});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:u})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,u){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),u.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const u=document.documentElement;if(u){const d=this.el.offsetWidth;if(l.left){const g=this.option.dynamicWidth?u.scrollWidth:u.clientWidth;l.left+d>g&&(l.left=g-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const h=this.option.placement||e.DEFAULT_DROPDOWN_PLACEMENT;if(h==="auto"){const g=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+g>u.clientHeight}h==="top"||f?(this.el.style.bottom=`${u.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const u of this.items)l.appendChild(u.el);return this.el.appendChild(l),this}setStrategyId(l){const u=l.getStrategyId();return u&&(this.el.dataset.strategy=u),this}renderEdge(l,u){const d=this.option[u],f=document.createElement("li");return f.className=`textcomplete-${u}`,f.innerHTML=typeof d=="function"?d(l.map(h=>h.data)):d||"",this.el.appendChild(f),this}}e.Dropdown=i;class o{constructor(l,u,d,f){this.dropdown=l,this.index=u,this.searchResult=d,this.props=f,this.active=!1,this.onClick=v=>{v.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const h=document.createElement("li");h.className=this.active?this.activeClassName:this.className;const g=document.createElement("span");g.tabIndex=-1,g.innerHTML=this.searchResult.render(),h.appendChild(g),h.addEventListener("click",this.onClick),this.el=h}destroy(){var l;const u=this.el;return(l=u.parentNode)===null||l===void 0||l.removeChild(u),u.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(Td);var $l={};Object.defineProperty($l,"__esModule",{value:!0});$l.Editor=void 0;const yA=xl,xa=ys;class _A extends yA.EventEmitter{destroy(){return this}applySearchResult(t){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(t){const n=(0,xa.createCustomEvent)("move",{cancelable:!0,detail:{code:t}});return this.emit("move",n),n}emitEnterEvent(){const t=(0,xa.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",t),t}emitChangeEvent(){const t=(0,xa.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",t),t}emitEscEvent(){const t=(0,xa.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",t),t}getCode(t){switch(t.keyCode){case 9:case 13:return"ENTER";case 27:return"ESC";case 38:return"UP";case 40:return"DOWN";case 78:if(t.ctrlKey)return"DOWN";break;case 80:if(t.ctrlKey)return"UP";break}return"OTHER"}}$l.Editor=_A;var El={};Object.defineProperty(El,"__esModule",{value:!0});El.Textcomplete=void 0;const wA=xl,xA=Td,$A=bo,EA=["show","shown","render","rendered","selected","hidden","hide"];class kA extends wA.EventEmitter{constructor(t,n,i){super(),this.editor=t,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new $A.Completer(n),this.dropdown=xA.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(t=!0){return this.completer.destroy(),this.dropdown.destroy(),t&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(t){return this.isQueryInFlight?this.nextPendingQuery=t:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(t)),this}startListening(){var t;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of EA)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(t=this.dropdown.el.ownerDocument.defaultView)===null||t===void 0||t.addEventListener("resize",this.handleResize)}stopListening(){var t;(t=this.dropdown.el.ownerDocument.defaultView)===null||t===void 0||t.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}El.Textcomplete=kA;(function(e){var t=wt&&wt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=wt&&wt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&t(o,i,a)};Object.defineProperty(e,"__esModule",{value:!0}),n(bo,e),n(Td,e),n($l,e),n(yo,e),n(Sd,e),n(El,e),n(ys,e)})(Cd);var Kv={},kl={};function Vv(e,t,n){const i=e.value,o=t+(n||""),a=document.activeElement;let l=0,u=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-u-1>=0&&o.length-u-1>=0&&i[i.length-u-1]===o[o.length-u-1];)u++;l=Math.min(l,Math.min(i.length,o.length)-u),e.setSelectionRange(l,i.length-u);const d=o.substring(l,o.length-u);if(e.focus(),!document.execCommand("insertText",!1,d)){e.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),e.dispatchEvent(f)}return e.setSelectionRange(t.length,t.length),a.focus(),e}function CA(e,t,n){const i=e.selectionEnd,o=e.value.substr(0,e.selectionStart)+t,a=e.value.substring(e.selectionStart,i)+(n||"")+e.value.substr(i);return Vv(e,o,a),e.selectionEnd=i+t.length,e}const SA=Object.freeze(Object.defineProperty({__proto__:null,update:Vv,wrapCursor:CA},Symbol.toStringTag,{value:"Module"})),TA=w4(SA);var Gv={exports:{}};(function(e){(function(){var t=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,u){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=u&&u.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var h=document.createElement("div");h.id="input-textarea-caret-position-mirror-div",document.body.appendChild(h);var g=h.style,v=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,y=a.nodeName==="INPUT";g.whiteSpace="pre-wrap",y||(g.wordWrap="break-word"),g.position="absolute",d||(g.visibility="hidden"),t.forEach(function($){y&&$==="lineHeight"?g.lineHeight=v.height:g[$]=v[$]}),i?a.scrollHeight>parseInt(v.height)&&(g.overflowY="scroll"):g.overflow="hidden",h.textContent=a.value.substring(0,l),y&&(h.textContent=h.textContent.replace(/\s/g," "));var w=document.createElement("span");w.textContent=a.value.substring(l)||".",h.appendChild(w);var x={top:w.offsetTop+parseInt(v.borderTopWidth),left:w.offsetLeft+parseInt(v.borderLeftWidth),height:parseInt(v.lineHeight)};return d?w.style.backgroundColor="#aaa":document.body.removeChild(h),x}e.exports=o})()})(Gv);var AA=Gv.exports,Yv={},Cl={};Object.defineProperty(Cl,"__esModule",{value:!0});Cl.calculateElementOffset=void 0;const IA=e=>{const t=e.getBoundingClientRect(),n=e.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:t.top+i.pageYOffset,left:t.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};Cl.calculateElementOffset=IA;var Sl={};Object.defineProperty(Sl,"__esModule",{value:!0});Sl.getLineHeightPx=void 0;const RA="0".charCodeAt(0),OA="9".charCodeAt(0),Tg=e=>RA<=e&&e<=OA,LA=e=>{const t=getComputedStyle(e),n=t.lineHeight;if(Tg(n.charCodeAt(0))){const i=parseFloat(n);return Tg(n.charCodeAt(n.length-1))?i*parseFloat(t.fontSize):i}return PA(e.nodeName,t)};Sl.getLineHeightPx=LA;const PA=(e,t)=>{const n=document.body;if(!n)return 0;const i=document.createElement(e);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:t.fontSize,fontFamily:t.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var Tl={};Object.defineProperty(Tl,"__esModule",{value:!0});Tl.isSafari=void 0;const MA=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);Tl.isSafari=MA;(function(e){var t=wt&&wt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=wt&&wt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&t(o,i,a)};Object.defineProperty(e,"__esModule",{value:!0}),n(Cl,e),n(Sl,e),n(Tl,e)})(Yv);var BA=wt&&wt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(kl,"__esModule",{value:!0});kl.TextareaEditor=void 0;const jA=TA,NA=BA(AA),Ag=Cd,Ig=Yv;class DA extends Ag.Editor{constructor(t){super(),this.el=t,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(t){const n=this.getBeforeCursor();if(n!=null){const i=t.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,jA.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,Ag.createCustomEvent)("input")))}}getCursorOffset(){const t=(0,Ig.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,Ig.getLineHeightPx)(this.el),a=t.top-n.top+i.top+o,l=t.left-n.left+i.left,u=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:u};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:u}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,NA.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}kl.TextareaEditor=DA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.TextareaEditor=void 0;var t=kl;Object.defineProperty(e,"TextareaEditor",{enumerable:!0,get:function(){return t.TextareaEditor}})})(Kv);const UA=B('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),FA=()=>{const{searchEmojis:e}=Qe(),[t,n]=Ce();return _r(()=>{const i=t();if(i==null)return;const o=new Kv.TextareaEditor(i),a=new Cd.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,u)=>{u(e(l))},template:l=>(()=>{const d=UA(),f=d.firstChild,h=f.nextSibling;return k(h,()=>l.shortcode),Le(g=>{const v=l.url,y=l.shortcode;return v!==g._v$&&Ue(f,"src",g._v$=v),y!==g._v$2&&Ue(f,"alt",g._v$2=y),g},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});xr(()=>{a.destroy()})}),{elementRef:n}},zA=async e=>{const t=new FormData;t.set("file",e);const n=await fetch("https://nostr.build/api/v2/upload/files",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");const i=await n.json();if(i.status!=="success")throw new Error(`failed to post image: ${i.message}`);return{imageUrl:i.data[0].url}},HA=e=>t=>Promise.allSettled(t.map(n=>e(n))),WA=B("<div>"),qA=B("<input type=text class=rounded maxlength=32>"),ZA=B('<div class=flex-1><button class="h-5 w-5 text-stone-500">'),KA=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),VA=B('<div class=p-1><form class="flex flex-col gap-1"><textarea name=text class="min-h-[40px] rounded-md border-none focus:ring-rose-300"rows=4></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white"type=button><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white"type=button></button><button class="rounded bg-primary p-2 font-bold text-white"type=submit></button></div><input class="rounded bg-primary"type=file hidden name=image accept=image/jpeg,image/png,image/gif,image/webp>'),GA=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?t.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},YA=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},Jv=e=>{const t=dt();let n,i;const{elementRef:o}=FA(),[a,l]=Ce(""),[u,d]=Ce(!1),[f,h]=Ce(""),[g,v]=Ce([]),y=ue=>l(Se=>`${Se} ${ue}`),w=()=>{l(g().map(ue=>` #${ue}`).join("")),h(""),d(!1)},x=()=>{n?.blur(),w(),e.onClose()},$=ue=>{switch(ue){case"reply":return t()("posting.placeholderReply");case"normal":default:return t()("posting.placeholder")}},{config:S,getEmoji:L}=Qe(),C=rr(),R=bs(),P=()=>e.replyTo&&K1(e.replyTo),A=()=>e.mode??"normal",D=$i(()=>({mutationKey:["publishTextNote"],mutationFn:R.publishTextNote.bind(R),onSuccess:()=>{console.log("succeeded to post"),w(),e.onPost?.()},onError:ue=>{console.error("error",ue)}})),U=()=>{n!=null&&(n.style.height="auto",n.style.height=`${n.scrollHeight}px`)},q=$i(()=>({mutationKey:["uploadFiles"],mutationFn:async ue=>{const Se=await HA(zA)(ue),Ee=[];if(Se.forEach((G,re)=>{G.status==="fulfilled"?(y(G.value.imageUrl),U()):Ee.push(ue[re])}),Ee.length>0){const G=Ee.map(re=>re.name).join(", ");window.alert(t()("posting.failedToUploadFile",{filenames:G}))}}})),Q=Fe(()=>{const ue=C();return P()?.taggedPubkeys()?.filter(Se=>Se!==ue)??[]}),te=Fe(()=>e.replyTo==null?[]:_i([e.replyTo.pubkey,...Q()])),ne=ue=>{const Se=[];return ue.forEach(Ee=>{const G=L(Ee);G!=null&&Se.push(["emoji",Ee,G.url])}),Se},se=()=>{if(a().length===0||D.isPending)return;if(/nsec1[0-9a-zA-Z]+/.test(a())){window.alert(t()("posting.forbiddenToIncludeNsec"));return}const ue=C();if(ue==null){console.error("pubkey is not available");return}const Se=md(a()),{hashtags:Ee,urlReferences:G,pubkeyReferences:re,eventReferences:ae,emojis:Te}=GA(Se),Ke=YA(Se),oe=ne(Te);v(Ee);let Z={relayUrls:S().relayUrls,pubkey:ue,content:Ke,notifyPubkeys:re,mentionEventIds:ae,hashtags:Ee,urls:G,tags:oe};P()!=null&&(Z={...Z,notifyPubkeys:_i([...te(),...re]),rootEventId:P()?.rootEvent()?.id??P()?.replyingToEvent()?.id,replyEventId:P()?.id}),u()&&(Z={...Z,contentWarning:f()}),D.mutate(Z),x()},ee=ue=>{l(ue.currentTarget.value),U()},j=ue=>{y(ue.native??`:${ue.id}:`)},W=ue=>{ue.preventDefault(),se()},J=ue=>{ue.key==="Enter"&&(ue.ctrlKey||ue.metaKey)?se():ue.key==="Escape"&&(n?.blur(),x())},le=ue=>{if(ue.preventDefault(),q.isPending)return;const Se=[...ue.currentTarget.files??[]];q.mutate(Se),ue.currentTarget.value=""},Y=ue=>{if(ue.preventDefault(),q.isPending)return;const Se=[...ue?.dataTransfer?.files??[]];q.mutate(Se)},me=ue=>{if(q.isPending)return;const Se=[...ue?.clipboardData?.items??[]],Ee=[];Se.forEach(G=>{if(G.kind==="file"){ue.preventDefault();const re=G.getAsFile();if(re==null)return;Ee.push(re)}}),Ee.length!==0&&q.mutate(Ee)},ve=ue=>{ue.preventDefault()},$e=()=>a().trim().length===0||D.isPending||q.isPending,Je=()=>q.isPending;return kr(()=>{setTimeout(()=>{n?.click(),n?.focus()},50)}),(()=>{const ue=VA(),Se=ue.firstChild,Ee=Se.firstChild,G=Ee.nextSibling,re=G.firstChild,ae=re.nextSibling,Te=ae.nextSibling,Ke=G.nextSibling;k(ue,E(pe,{get when(){return e.replyTo!=null},get children(){const Z=WA();return k(Z,()=>t()("posting.replyToPre"),null),k(Z,E(Ft,{get each(){return te()},children:(qe,xt)=>[E(yd,{pubkey:qe}),E(pe,{get when(){return xt()!==te().length-1},children:" と "})]}),null),k(Z,()=>t()("posting.replyToPost"),null),Z}}),Se),Se.addEventListener("submit",W),k(Se,E(pe,{get when(){return u()},get children(){const Z=qA();return Z.$$input=qe=>h(qe.currentTarget.value),Le(()=>Ue(Z,"placeholder",t()("posting.contentWarningReason"))),Le(()=>Z.value=f()),Z}}),Ee),Ee.addEventListener("paste",me),Ee.addEventListener("drop",Y),Ee.addEventListener("dragover",ve),Ee.$$keydown=J,Ee.$$input=ee,jn(Z=>{n=Z,e.textAreaRef?.(Z),o(Z)},Ee),k(G,E(pe,{get when(){return A()==="reply"},get children(){const Z=ZA(),qe=Z.firstChild;return qe.$$click=()=>x(),k(qe,E(ls,{})),Z}}),re),k(G,E(Pv,{customEmojis:!0,onEmojiSelect:j,get children(){const Z=KA();return k(Z,E(qv,{})),Z}}),re),re.$$click=()=>d(Z=>!Z),ae.$$click=()=>i?.click(),k(ae,E(lA,{})),k(Te,E(uA,{})),Ke.addEventListener("change",le);const oe=i;return typeof oe=="function"?jn(oe,Ke):i=Ke,Le(Z=>{const qe=$(A()),xt=!u(),Fn=!!u(),Bt=A()==="normal",xn=A()==="normal",ni=A()==="reply",$n=A()==="reply",Ct=t()("posting.contentWarning"),Jt=t()("posting.contentWarning"),zn=!!Je(),Sr=!Je(),En=A()==="normal",Ae=A()==="normal",Ht=A()==="reply",Wt=A()==="reply",kn=t()("posting.uploadImage"),Cn=t()("posting.uploadImage"),cn=Je(),un=!!$e(),Sn=!$e(),sr=A()==="normal",or=A()==="normal",ar=A()==="reply",Li=A()==="reply",wo=t()("posting.submit"),xo=t()("posting.submit"),$o=$e();return qe!==Z._v$&&Ue(Ee,"placeholder",Z._v$=qe),xt!==Z._v$2&&re.classList.toggle("bg-rose-300",Z._v$2=xt),Fn!==Z._v$3&&re.classList.toggle("bg-rose-400",Z._v$3=Fn),Bt!==Z._v$4&&re.classList.toggle("h-8",Z._v$4=Bt),xn!==Z._v$5&&re.classList.toggle("w-8",Z._v$5=xn),ni!==Z._v$6&&re.classList.toggle("h-7",Z._v$6=ni),$n!==Z._v$7&&re.classList.toggle("w-7",Z._v$7=$n),Ct!==Z._v$8&&Ue(re,"aria-label",Z._v$8=Ct),Jt!==Z._v$9&&Ue(re,"title",Z._v$9=Jt),zn!==Z._v$10&&ae.classList.toggle("bg-primary-disabled",Z._v$10=zn),Sr!==Z._v$11&&ae.classList.toggle("bg-primary",Z._v$11=Sr),En!==Z._v$12&&ae.classList.toggle("h-8",Z._v$12=En),Ae!==Z._v$13&&ae.classList.toggle("w-8",Z._v$13=Ae),Ht!==Z._v$14&&ae.classList.toggle("h-7",Z._v$14=Ht),Wt!==Z._v$15&&ae.classList.toggle("w-7",Z._v$15=Wt),kn!==Z._v$16&&Ue(ae,"title",Z._v$16=kn),Cn!==Z._v$17&&Ue(ae,"aria-label",Z._v$17=Cn),cn!==Z._v$18&&(ae.disabled=Z._v$18=cn),un!==Z._v$19&&Te.classList.toggle("bg-primary-disabled",Z._v$19=un),Sn!==Z._v$20&&Te.classList.toggle("bg-primary",Z._v$20=Sn),sr!==Z._v$21&&Te.classList.toggle("h-8",Z._v$21=sr),or!==Z._v$22&&Te.classList.toggle("w-8",Z._v$22=or),ar!==Z._v$23&&Te.classList.toggle("h-7",Z._v$23=ar),Li!==Z._v$24&&Te.classList.toggle("w-7",Z._v$24=Li),wo!==Z._v$25&&Ue(Te,"aria-label",Z._v$25=wo),xo!==Z._v$26&&Ue(Te,"title",Z._v$26=xo),$o!==Z._v$27&&(Te.disabled=Z._v$27=$o),Z},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0}),Le(()=>Ee.value=a()),ue})()};vt(["input","keydown","click"]);var JA=Dn,XA=function(){return JA.Date.now()},QA=XA,eI=/\s/;function tI(e){for(var t=e.length;t--&&eI.test(e.charAt(t)););return t}var nI=tI,rI=nI,iI=/^\s+/;function sI(e){return e&&e.slice(0,rI(e)+1).replace(iI,"")}var oI=sI;function aI(e){return e!=null&&typeof e=="object"}var ti=aI,lI=ds,cI=ti,uI="[object Symbol]";function dI(e){return typeof e=="symbol"||cI(e)&&lI(e)==uI}var Al=dI,fI=oI,Rg=er,hI=Al,Og=0/0,pI=/^[-+]0x[0-9a-f]+$/i,gI=/^0b[01]+$/i,vI=/^0o[0-7]+$/i,mI=parseInt;function bI(e){if(typeof e=="number")return e;if(hI(e))return Og;if(Rg(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Rg(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=fI(e);var n=gI.test(e);return n||vI.test(e)?mI(e.slice(2),n?2:8):pI.test(e)?Og:+e}var yI=bI,_I=er,lu=QA,Lg=yI,wI="Expected a function",xI=Math.max,$I=Math.min;function EI(e,t,n){var i,o,a,l,u,d,f=0,h=!1,g=!1,v=!0;if(typeof e!="function")throw new TypeError(wI);t=Lg(t)||0,_I(n)&&(h=!!n.leading,g="maxWait"in n,a=g?xI(Lg(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function y(A){var D=i,U=o;return i=o=void 0,f=A,l=e.apply(U,D),l}function w(A){return f=A,u=setTimeout(S,t),h?y(A):l}function x(A){var D=A-d,U=A-f,q=t-D;return g?$I(q,a-U):q}function $(A){var D=A-d,U=A-f;return d===void 0||D>=t||D<0||g&&U>=a}function S(){var A=lu();if($(A))return L(A);u=setTimeout(S,x(A))}function L(A){return u=void 0,v&&i?y(A):(i=o=void 0,l)}function C(){u!==void 0&&clearTimeout(u),f=0,i=d=o=u=void 0}function R(){return u===void 0?l:L(lu())}function P(){var A=lu(),D=$(A);if(i=arguments,o=this,d=A,D){if(u===void 0)return w(d);if(g)return clearTimeout(u),u=setTimeout(S,t),y(d)}return u===void 0&&(u=setTimeout(S,t)),l}return P.cancel=C,P.flush=R,P}var kI=EI,CI=kI,SI=er,TI="Expected a function";function AI(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(TI);return SI(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),CI(e,t,{leading:i,maxWait:t,trailing:o})}var II=AI;const RI=oo(II),Pg=2,OI=200,LI=()=>{let e;const[t,n]=Ce(!1),i=a=>{e=a},o=RI(()=>{e!=null&&n(e.scrollHeight>e.clientHeight+Pg||e.scrollHeight>document.documentElement.clientHeight+Pg)},OI);return kr(()=>{if(e!=null){o();const a=new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting&&o()})},{threshold:0});a.observe(e);const l=()=>o();window.addEventListener("resize",l),xr(()=>{a.disconnect(),window.removeEventListener("resize",l)})}}),{overflow:t,elementRef:i}},PI=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),MI=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),BI=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type=button class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type=button class="author flex min-w-0 select-text truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type=button class="select-text hover:underline"></button></div></div><div class=overflow-hidden></div><div class=actions>'),jI=B('<img alt=icon class="h-full w-full rounded object-cover">'),NI=e=>{const t=dt(),{overflow:n,elementRef:i}=LI(),o=nv(),[a,l]=Ce(!1),u=()=>o(e.createdAt),d=()=>e.createdAt.toLocaleString(),{profile:f}=ms(()=>({pubkey:e.authorPubkey}));return(()=>{const h=BI(),g=h.firstChild,v=g.firstChild,y=v.nextSibling,w=y.firstChild,x=w.firstChild,$=x.firstChild,S=$.firstChild,L=x.nextSibling,C=L.firstChild,R=w.nextSibling,P=R.nextSibling;return v.$$click=A=>{A.preventDefault(),e.onShowProfile?.()},k(v,E(pe,{get when(){return f()?.picture},keyed:!0,children:A=>(()=>{const D=jI();return Ue(D,"src",A),D})()})),x.$$click=A=>{A.preventDefault(),e?.onShowProfile?.()},k($,E(pe,{get when(){return(f()?.display_name?.length??0)>0},get children(){const A=PI();return k(A,()=>f()?.display_name),A}}),S),k(S,E(pe,{get when(){return f()?.name!=null},get fallback(){return`@${mo(e.authorPubkey)}`},get children(){return["@",Fe(()=>f()?.name)]}})),C.$$click=A=>{A.preventDefault(),e.onShowEvent?.()},k(C,u),jn(i,R),k(R,()=>e.content),k(y,E(pe,{get when(){return n()},get children(){const A=MI();return A.$$click=D=>{D.stopPropagation(),l(U=>!U)},k(A,E(pe,{get when(){return!a()},get fallback(){return t()("post.hideOverflow")},get children(){return t()("post.showOverflow")}})),A}}),P),k(P,()=>e.actions),k(h,E(pe,{get when(){return e.footer},get children(){return e.footer}}),null),Le(A=>{const D=d(),U=!a(),q=!!a();return D!==A._v$&&Ue(C,"title",A._v$=D),U!==A._v$2&&R.classList.toggle("max-h-screen",A._v$2=U),q!==A._v$3&&R.classList.toggle("max-h-none",A._v$3=q),A},{_v$:void 0,_v$2:void 0,_v$3:void 0}),h})()};vt(["click"]);const DI=g4(),UI=()=>v4(DI),IH=()=>{const[e,t]=k0({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},FI=B("<div class=nostr-textnote>"),zI=B("<div class=text-xs>"),HI=B('<div class="content whitespace-pre-wrap break-all">'),WI=B("<div class=textnote-content>"),qI=B('<div class="mt-1 rounded border p-1">'),ZI=B("<div class=h-12>"),KI=B('<button class="select-text pr-1 text-blue-500 hover:underline">'),VI=B("<div class=h-5>"),GI=e=>{const t=dt(),{showProfile:n}=ei(),i=UI(),[o,a]=Ce(!1),l=()=>a(!1),u=()=>a(v=>!v),d=Fe(()=>K1(e.event)),f=()=>e.embedding??!0,h=()=>e.actions??!0,g=()=>{if(f()){const v=d().replyingToEvent();if(v!=null&&!d().containsEventMention(v.id))return v.id;const y=d().rootEvent();if(v==null&&y!=null&&!d().containsEventMention(y.id))return y.id}};return(()=>{const v=FI();return k(v,E(NI,{get authorPubkey(){return d().pubkey},get createdAt(){return d().createdAtAsDate()},get content(){return(()=>{const y=WI();return k(y,E(pe,{get when(){return g()},keyed:!0,children:w=>(()=>{const x=qI();return k(x,E(Jr,{get fallback(){return ZI()},children:()=>E(so,{eventId:w,actions:!1,embedding:!1})})),x})()}),null),k(y,E(pe,{get when(){return d().taggedPubkeys().length>0},get children(){const w=zI();return k(w,()=>t()("post.replyToPre"),null),k(w,E(Ft,{get each(){return d().taggedPubkeys()},children:x=>(()=>{const $=KI();return $.$$click=S=>{S.stopPropagation(),n(x)},k($,E(Fv,{pubkey:x})),$})()}),null),k(w,()=>t()("post.replyToPost"),null),w}}),null),k(y,E(xT,{get contentWarning(){return d().contentWarning()},get children(){const w=HI();return k(w,E(Wv,{get parsed(){return d().parsed()},get embedding(){return f()},get initialHidden(){return d().contentWarning().contentWarning}})),w}}),null),y})()},get actions(){return E(pe,{get when(){return h()},get children(){return E(Jr,{get fallback(){return VI()},children:()=>E(vT,{get event(){return e.event},onClickReply:u})})}})},get footer(){return E(pe,{get when(){return o()},get children(){return E(Jv,{mode:"reply",get replyTo(){return e.event},onClose:l,onPost:l})}})},onShowProfile:()=>{n(d().pubkey)},onShowEvent:()=>{i?.setTimeline({type:"Replies",event:e.event})}})),v})()};vt(["click"]);const YI=B("<span>予期しないイベント種別（<!>）"),JI=B("<span><span>未対応のイベント種別（<!>）"),Xv=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return E(Ln,{get fallback(){return(()=>{const n=JI(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,k(i,()=>e.event.kind,a),k(n,E(qs,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[E(Ye,{get when(){return!t()},keyed:!0,get children(){const n=YI(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,k(n,()=>e.event.kind,o),k(n,E(qs,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),E(Ye,{get when(){return e.event.kind===at.Text},get children(){return E(GI,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),E(Ye,{get when(){return e.event.kind===at.Repost},get children(){return E(TC,{get event(){return e.event}})}})]}})},XI=e=>{const{shouldMuteEvent:t}=Qe();return E(Ft,{get each(){return e.events},children:n=>E(pe,{get when(){return!t(n)},get children(){return E(U6,{get children(){return E(Xv,{event:n})}})}})})};var QI=il;function eR(){this.__data__=new QI,this.size=0}var tR=eR;function nR(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var rR=nR;function iR(e){return this.__data__.get(e)}var sR=iR;function oR(e){return this.__data__.has(e)}var aR=oR,lR=il,cR=Zu,uR=Ku,dR=200;function fR(e,t){var n=this.__data__;if(n instanceof lR){var i=n.__data__;if(!cR||i.length<dR-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new uR(i)}return n.set(e,t),this.size=n.size,this}var hR=fR,pR=il,gR=tR,vR=rR,mR=sR,bR=aR,yR=hR;function _s(e){var t=this.__data__=new pR(e);this.size=t.size}_s.prototype.clear=gR;_s.prototype.delete=vR;_s.prototype.get=mR;_s.prototype.has=bR;_s.prototype.set=yR;var Ad=_s;function _R(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var wR=_R,xR=L0,$R=wR,ER=P0,kR=1,CR=2;function SR(e,t,n,i,o,a){var l=n&kR,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var f=a.get(e),h=a.get(t);if(f&&h)return f==t&&h==e;var g=-1,v=!0,y=n&CR?new xR:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var w=e[g],x=t[g];if(i)var $=l?i(x,w,g,t,e,a):i(w,x,g,e,t,a);if($!==void 0){if($)continue;v=!1;break}if(y){if(!$R(t,function(S,L){if(!ER(y,L)&&(w===S||o(w,S,n,i,a)))return y.push(L)})){v=!1;break}}else if(!(w===x||o(w,x,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var Qv=SR,TR=Dn,AR=TR.Uint8Array,em=AR;function IR(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var RR=IR,Mg=us,Bg=em,OR=qu,LR=Qv,PR=RR,MR=Vu,BR=1,jR=2,NR="[object Boolean]",DR="[object Date]",UR="[object Error]",FR="[object Map]",zR="[object Number]",HR="[object RegExp]",WR="[object Set]",qR="[object String]",ZR="[object Symbol]",KR="[object ArrayBuffer]",VR="[object DataView]",jg=Mg?Mg.prototype:void 0,cu=jg?jg.valueOf:void 0;function GR(e,t,n,i,o,a,l){switch(n){case VR:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case KR:return!(e.byteLength!=t.byteLength||!a(new Bg(e),new Bg(t)));case NR:case DR:case zR:return OR(+e,+t);case UR:return e.name==t.name&&e.message==t.message;case HR:case qR:return e==t+"";case FR:var u=PR;case WR:var d=i&BR;if(u||(u=MR),e.size!=t.size&&!d)return!1;var f=l.get(e);if(f)return f==t;i|=jR,l.set(e,t);var h=LR(u(e),u(t),i,o,a,l);return l.delete(e),h;case ZR:if(cu)return cu.call(e)==cu.call(t)}return!1}var YR=GR;function JR(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Id=JR,XR=Array.isArray,ir=XR,QR=Id,eO=ir;function tO(e,t,n){var i=t(e);return eO(e)?i:QR(i,n(e))}var tm=tO;function nO(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}var rO=nO;function iO(){return[]}var nm=iO,sO=rO,oO=nm,aO=Object.prototype,lO=aO.propertyIsEnumerable,Ng=Object.getOwnPropertySymbols,cO=Ng?function(e){return e==null?[]:(e=Object(e),sO(Ng(e),function(t){return lO.call(e,t)}))}:oO,Rd=cO;function uO(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var dO=uO,fO=ds,hO=ti,pO="[object Arguments]";function gO(e){return hO(e)&&fO(e)==pO}var vO=gO,Dg=vO,mO=ti,rm=Object.prototype,bO=rm.hasOwnProperty,yO=rm.propertyIsEnumerable,_O=Dg(function(){return arguments}())?Dg:function(e){return mO(e)&&bO.call(e,"callee")&&!yO.call(e,"callee")},Od=_O,Qa={exports:{}};function wO(){return!1}var xO=wO;Qa.exports;(function(e,t){var n=Dn,i=xO,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,f=d||i;e.exports=f})(Qa,Qa.exports);var Ld=Qa.exports,$O=9007199254740991,EO=/^(?:0|[1-9]\d*)$/;function kO(e,t){var n=typeof e;return t=t??$O,!!t&&(n=="number"||n!="symbol"&&EO.test(e))&&e>-1&&e%1==0&&e<t}var Pd=kO,CO=9007199254740991;function SO(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=CO}var Md=SO,TO=ds,AO=Md,IO=ti,RO="[object Arguments]",OO="[object Array]",LO="[object Boolean]",PO="[object Date]",MO="[object Error]",BO="[object Function]",jO="[object Map]",NO="[object Number]",DO="[object Object]",UO="[object RegExp]",FO="[object Set]",zO="[object String]",HO="[object WeakMap]",WO="[object ArrayBuffer]",qO="[object DataView]",ZO="[object Float32Array]",KO="[object Float64Array]",VO="[object Int8Array]",GO="[object Int16Array]",YO="[object Int32Array]",JO="[object Uint8Array]",XO="[object Uint8ClampedArray]",QO="[object Uint16Array]",eL="[object Uint32Array]",ot={};ot[ZO]=ot[KO]=ot[VO]=ot[GO]=ot[YO]=ot[JO]=ot[XO]=ot[QO]=ot[eL]=!0;ot[RO]=ot[OO]=ot[WO]=ot[LO]=ot[qO]=ot[PO]=ot[MO]=ot[BO]=ot[jO]=ot[NO]=ot[DO]=ot[UO]=ot[FO]=ot[zO]=ot[HO]=!1;function tL(e){return IO(e)&&AO(e.length)&&!!ot[TO(e)]}var nL=tL;function rL(e){return function(t){return e(t)}}var Bd=rL,el={exports:{}};el.exports;(function(e,t){var n=A0,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();e.exports=u})(el,el.exports);var jd=el.exports,iL=nL,sL=Bd,Ug=jd,Fg=Ug&&Ug.isTypedArray,oL=Fg?sL(Fg):iL,im=oL,aL=dO,lL=Od,cL=ir,uL=Ld,dL=Pd,fL=im,hL=Object.prototype,pL=hL.hasOwnProperty;function gL(e,t){var n=cL(e),i=!n&&lL(e),o=!n&&!i&&uL(e),a=!n&&!i&&!o&&fL(e),l=n||i||o||a,u=l?aL(e.length,String):[],d=u.length;for(var f in e)(t||pL.call(e,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||dL(f,d)))&&u.push(f);return u}var sm=gL,vL=Object.prototype;function mL(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||vL;return e===n}var Nd=mL;function bL(e,t){return function(n){return e(t(n))}}var om=bL,yL=om,_L=yL(Object.keys,Object),wL=_L,xL=Nd,$L=wL,EL=Object.prototype,kL=EL.hasOwnProperty;function CL(e){if(!xL(e))return $L(e);var t=[];for(var n in Object(e))kL.call(e,n)&&n!="constructor"&&t.push(n);return t}var SL=CL,TL=R0,AL=Md;function IL(e){return e!=null&&AL(e.length)&&!TL(e)}var am=IL,RL=sm,OL=SL,LL=am;function PL(e){return LL(e)?RL(e):OL(e)}var Il=PL,ML=tm,BL=Rd,jL=Il;function NL(e){return ML(e,jL,BL)}var lm=NL,zg=lm,DL=1,UL=Object.prototype,FL=UL.hasOwnProperty;function zL(e,t,n,i,o,a){var l=n&DL,u=zg(e),d=u.length,f=zg(t),h=f.length;if(d!=h&&!l)return!1;for(var g=d;g--;){var v=u[g];if(!(l?v in t:FL.call(t,v)))return!1}var y=a.get(e),w=a.get(t);if(y&&w)return y==t&&w==e;var x=!0;a.set(e,t),a.set(t,e);for(var $=l;++g<d;){v=u[g];var S=e[v],L=t[v];if(i)var C=l?i(L,S,v,t,e,a):i(S,L,v,e,t,a);if(!(C===void 0?S===L||o(S,L,n,i,a):C)){x=!1;break}$||($=v=="constructor")}if(x&&!$){var R=e.constructor,P=t.constructor;R!=P&&"constructor"in e&&"constructor"in t&&!(typeof R=="function"&&R instanceof R&&typeof P=="function"&&P instanceof P)&&(x=!1)}return a.delete(e),a.delete(t),x}var HL=zL,WL=Ai,qL=Dn,ZL=WL(qL,"DataView"),KL=ZL,VL=Ai,GL=Dn,YL=VL(GL,"Promise"),JL=YL,XL=Ai,QL=Dn,eP=XL(QL,"WeakMap"),tP=eP,Bu=KL,ju=Zu,Nu=JL,Du=M0,Uu=tP,cm=ds,ws=O0,Hg="[object Map]",nP="[object Object]",Wg="[object Promise]",qg="[object Set]",Zg="[object WeakMap]",Kg="[object DataView]",rP=ws(Bu),iP=ws(ju),sP=ws(Nu),oP=ws(Du),aP=ws(Uu),gi=cm;(Bu&&gi(new Bu(new ArrayBuffer(1)))!=Kg||ju&&gi(new ju)!=Hg||Nu&&gi(Nu.resolve())!=Wg||Du&&gi(new Du)!=qg||Uu&&gi(new Uu)!=Zg)&&(gi=function(e){var t=cm(e),n=t==nP?e.constructor:void 0,i=n?ws(n):"";if(i)switch(i){case rP:return Kg;case iP:return Hg;case sP:return Wg;case oP:return qg;case aP:return Zg}return t});var Rl=gi,uu=Ad,lP=Qv,cP=YR,uP=HL,Vg=Rl,Gg=ir,Yg=Ld,dP=im,fP=1,Jg="[object Arguments]",Xg="[object Array]",$a="[object Object]",hP=Object.prototype,Qg=hP.hasOwnProperty;function pP(e,t,n,i,o,a){var l=Gg(e),u=Gg(t),d=l?Xg:Vg(e),f=u?Xg:Vg(t);d=d==Jg?$a:d,f=f==Jg?$a:f;var h=d==$a,g=f==$a,v=d==f;if(v&&Yg(e)){if(!Yg(t))return!1;l=!0,h=!1}if(v&&!h)return a||(a=new uu),l||dP(e)?lP(e,t,n,i,o,a):cP(e,t,d,n,i,o,a);if(!(n&fP)){var y=h&&Qg.call(e,"__wrapped__"),w=g&&Qg.call(t,"__wrapped__");if(y||w){var x=y?e.value():e,$=w?t.value():t;return a||(a=new uu),o(x,$,n,i,a)}}return v?(a||(a=new uu),uP(e,t,n,i,o,a)):!1}var gP=pP,vP=gP,e0=ti;function um(e,t,n,i,o){return e===t?!0:e==null||t==null||!e0(e)&&!e0(t)?e!==e&&t!==t:vP(e,t,n,i,um,o)}var dm=um,mP=Ad,bP=dm,yP=1,_P=2;function wP(e,t,n,i){var o=n.length,a=o,l=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],f=e[d],h=u[1];if(l&&u[2]){if(f===void 0&&!(d in e))return!1}else{var g=new mP;if(i)var v=i(f,h,d,e,t,g);if(!(v===void 0?bP(h,f,yP|_P,i,g):v))return!1}}return!0}var xP=wP,$P=er;function EP(e){return e===e&&!$P(e)}var fm=EP,kP=fm,CP=Il;function SP(e){for(var t=CP(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,kP(o)]}return t}var TP=SP;function AP(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var hm=AP,IP=xP,RP=TP,OP=hm;function LP(e){var t=RP(e);return t.length==1&&t[0][2]?OP(t[0][0],t[0][1]):function(n){return n===e||IP(n,e,t)}}var PP=LP,MP=ir,BP=Al,jP=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,NP=/^\w*$/;function DP(e,t){if(MP(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||BP(e)?!0:NP.test(e)||!jP.test(e)||t!=null&&e in Object(t)}var Dd=DP,pm=Ku,UP="Expected a function";function Ud(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(UP);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Ud.Cache||pm),n}Ud.Cache=pm;var FP=Ud,zP=FP,HP=500;function WP(e){var t=zP(e,function(i){return n.size===HP&&n.clear(),i}),n=t.cache;return t}var qP=WP,ZP=qP,KP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,VP=/\\(\\)?/g,GP=ZP(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(KP,function(n,i,o,a){t.push(o?a.replace(VP,"$1"):i||n)}),t}),YP=GP;function JP(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Fd=JP,t0=us,XP=Fd,QP=ir,eM=Al,tM=1/0,n0=t0?t0.prototype:void 0,r0=n0?n0.toString:void 0;function gm(e){if(typeof e=="string")return e;if(QP(e))return XP(e,gm)+"";if(eM(e))return r0?r0.call(e):"";var t=e+"";return t=="0"&&1/e==-tM?"-0":t}var nM=gm,rM=nM;function iM(e){return e==null?"":rM(e)}var sM=iM,oM=ir,aM=Dd,lM=YP,cM=sM;function uM(e,t){return oM(e)?e:aM(e,t)?[e]:lM(cM(e))}var xs=uM,dM=Al,fM=1/0;function hM(e){if(typeof e=="string"||dM(e))return e;var t=e+"";return t=="0"&&1/e==-fM?"-0":t}var $s=hM,pM=xs,gM=$s;function vM(e,t){t=pM(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[gM(t[n++])];return n&&n==i?e:void 0}var Ol=vM,mM=Ol;function bM(e,t,n){var i=e==null?void 0:mM(e,t);return i===void 0?n:i}var yM=bM;function _M(e,t){return e!=null&&t in Object(e)}var wM=_M,xM=xs,$M=Od,EM=ir,kM=Pd,CM=Md,SM=$s;function TM(e,t,n){t=xM(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var l=SM(t[i]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&CM(o)&&kM(l,o)&&(EM(e)||$M(e)))}var AM=TM,IM=wM,RM=AM;function OM(e,t){return e!=null&&RM(e,t,IM)}var LM=OM,PM=dm,MM=yM,BM=LM,jM=Dd,NM=fm,DM=hm,UM=$s,FM=1,zM=2;function HM(e,t){return jM(e)&&NM(t)?DM(UM(e),t):function(n){var i=MM(n,e);return i===void 0&&i===t?BM(n,e):PM(t,i,FM|zM)}}var WM=HM;function qM(e){return e}var vm=qM;function ZM(e){return function(t){return t?.[e]}}var KM=ZM,VM=Ol;function GM(e){return function(t){return VM(t,e)}}var YM=GM,JM=KM,XM=YM,QM=Dd,eB=$s;function tB(e){return QM(e)?JM(eB(e)):XM(e)}var nB=tB,rB=PP,iB=WM,sB=vm,oB=ir,aB=nB;function lB(e){return typeof e=="function"?e:e==null?sB:typeof e=="object"?oB(e)?iB(e[0],e[1]):rB(e):aB(e)}var zd=lB,cB=zd,uB=B0;function dB(e,t){return e&&e.length?uB(e,cB(t)):[]}var fB=dB;const mm=oo(fB);let Sa=0;const{setActiveSubscriptions:hB}=J1();setInterval(()=>{hB(Sa)},1e3);const bm=e=>{const{config:t,shouldMuteEvent:n}=Qe(),i=ml(),[o,a]=Ce([]);_r(C0(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),kr(()=>{console.debug("subscription mounted",e()?.debugId,e()),xr(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const l=d=>{const h=e()?.limit??50,g=d.created_at-Fr();if(!(g>300)){if(g>0){setTimeout(()=>l(d),g*1e3);return}a(v=>{const y=ad.insertEventIntoDescendingList(v,d).slice(0,h),w=mm(y,x=>x.id);return w.length!==y.length&&console.warn("duplicated event",d),w})}},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:f,filters:h,options:g,onEvent:v,onEOSE:y,continuous:w=!0}=d,x=i().sub(f,h,g);let $=!0;Sa+=1;let S=!1,L=!1;const C=[];x.on("event",A=>{v?.(A),!(d.clientEventFilter!=null&&!d.clientEventFilter(A))&&(L?l(A):(S=!0,C.push(A)))}),x.on("eose",()=>{y?.(),L=!0,a(Tu(C)),w||(x.unsub(),$&&($=!1,Sa-=1))});let R=!1;const P=setInterval(()=>{if(!R){if(R=!0,L){clearInterval(P),R=!1;return}S&&(S=!1,a(Tu(C))),R=!1}},100);xr(()=>{console.debug("startSubscription: end"),x.unsub(),$&&($=!1,Sa-=1),clearInterval(P)})};return _r(()=>{u()}),{events:o}},pB=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),gB=(e={})=>(()=>{const t=pB();return it(t,e,!0,!0),t})(),ym=e=>{const t=()=>{const i=e();if(i==null)return[];const o=[];return Hr(i).pTags().forEach(l=>{const[,u,d,f]=l,h={pubkey:u,petname:f};d!=null&&d.length>0&&(h.mainRelayUrl=d),o.push(h)}),o};return{followings:t,followingPubkeys:()=>t().map(i=>i.pubkey),data:e}},vB=async({pubkey:e},t)=>{const n=new vs({type:"Followings",pubkey:e});bl({task:n,signal:t});const i=await n.latestEventPromise();return ym(()=>i)},i0=e=>{const t=cs(),n=Fe(e),i=()=>["useFollowings",n()],o=Ti(()=>({queryKey:i(),queryFn:X1({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:u}=l;return new vs({type:"Followings",pubkey:u})},queryClient:t}),staleTime:5*60*1e3,cacheTime:3*24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0})),a=()=>t.invalidateQueries({queryKey:i()});return{...ym(()=>o.data),invalidateFollowings:a,query:o}},mB=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),bB=(e={})=>(()=>{const t=mB();return it(t,e,!0,!0),t})(),yB=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632">'),_m=(e={})=>(()=>{const t=yB();return it(t,e,!0,!0),t})(),_B=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),wm=(e={})=>(()=>{const t=_B();return it(t,e,!0,!0),t})(),wB=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607">'),xB=(e={})=>(()=>{const t=wB();return it(t,e,!0,!0),t})(),$B=B('<div class=p-8><div class="flex flex-col items-center pt-8"><img alt=Logo width=64 height=64><h1 class=my-4>Rabbit <span id=app-version>v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class=my-4>おかしな動作を見つけたら<a class="text-blue-500 underline"href=https://github.com/syusui-s/rabbit/issues/new/choose target=_blank rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class=my-4>ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class=my-4>Copyright (C) 2023 Shusui Moyatani and </p><p class=my-4>このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class=my-4>このプログラムは役立つことを願って頒布されていますが、<strong class=font-bold>いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class=my-4>あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class=link href=https://www.gnu.org/licenses/>https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline"href=https://gpl.mhatta.org/agpl.ja.html>参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),EB=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),kB=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),CB=async()=>{const t=await(await fetch(Wu("packageInfo.json"))).text();return JSON.parse(t)},s0="533f67e",SB=e=>{const[t]=m4(CB);return E(Oi,{get onClose(){return e.onClose},get children(){const n=$B(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,f=d.nextSibling,h=f.nextSibling,g=h.nextSibling,v=g.firstChild,y=v.nextSibling;y.nextSibling;const w=g.nextSibling,x=w.nextSibling;x.firstChild;const $=x.nextSibling,S=$.nextSibling,L=S.nextSibling,C=L.nextSibling,R=C.nextSibling;return R.nextSibling,k(u,()=>t()?.self?.version,null),k(u,E(pe,{when:s0,get children(){return[" (",s0,")"]}}),null),k(g,E(Qn,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),y),k(x,E(Qn,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit/graphs/contributors",children:"Rabbit contributors"}),null),k(R,()=>t()?.self.licenseText),k(n,E(Ft,{get each(){return t()?.packages??[]},fallback:"取得中",children:P=>[(()=>{const A=EB(),D=A.firstChild,U=D.nextSibling,q=U.nextSibling,Q=q.nextSibling;return Q.nextSibling,k(A,()=>P.name,D),k(A,()=>P.version,U),k(A,()=>P.licenseSpdx,Q),A})(),(()=>{const A=kB();return k(A,()=>P.licenseText),A})()]}),null),Le(()=>Ue(o,"src",Wu("images/rabbit_app_256.png"))),n}})},TB=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),AB=e=>{const t=dt(),n=rr(),{saveColumn:i}=Qe(),o=wl(),a=()=>{e.onClose(),o({command:"moveToLastColumn"}).catch(v=>console.error(v))},l=()=>{ln([n()])(([v])=>{i(hd({pubkey:v}))}),a()},u=()=>{ln([n()])(([v])=>{i(P1({pubkey:v}))}),a()},d=()=>{i(B1()),a()},f=()=>{i(gd({query:""})),a()},h=()=>{ln([n()])(([v])=>{i(pd({pubkey:v}))}),a()},g=()=>{ln([n()])(([v])=>{i(j1({pubkey:v}))}),a()};return E(Oi,{get onClose(){return e.onClose},get children(){const v=TB(),y=v.firstChild,w=y.firstChild,x=y.nextSibling,$=x.firstChild,S=x.nextSibling,L=S.firstChild,C=S.nextSibling,R=C.firstChild,P=C.nextSibling,A=P.firstChild,D=P.nextSibling,U=D.firstChild;return y.$$click=()=>l(),k(w,E(gB,{})),k(y,()=>t()("column.home"),null),x.$$click=()=>u(),k($,E(bB,{})),k(x,()=>t()("column.notification"),null),S.$$click=()=>d(),k(L,E(wm,{})),k(S,()=>t()("column.japanese"),null),C.$$click=()=>f(),k(R,E(xB,{})),k(C,()=>t()("column.search"),null),P.$$click=()=>h(),k(A,E(_m,{})),k(P,()=>t()("column.myPosts"),null),D.$$click=()=>g(),k(U,E(iv,{})),k(D,()=>t()("column.myReactions"),null),v}})};vt(["click"]);const IB=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),RB=(e={})=>(()=>{const t=IB();return it(t,e,!0,!0),t})(),OB=B('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094z"clip-rule=evenodd>'),LB=(e={})=>(()=>{const t=OB();return it(t,e,!0,!0),t})(),PB=B('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"clip-rule=evenodd>'),MB=(e={})=>(()=>{const t=PB();return it(t,e,!0,!0),t})();function BB(e){const{config:t}=Qe(),n=Fe(e),{events:i}=bm(()=>({relayUrls:t().relayUrls,filters:[{kinds:[at.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>_i(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const jB=e=>{const t=Fe(e),n=()=>["useVerification",t()],i=Ti(()=>({queryKey:n(),queryFn:({queryKey:a})=>{const[,l]=a;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return E1.queryProfile(u)},staleTime:30*60*1e3,cacheTime:24*60*60*1e3}));return{verification:()=>i?.data??null,query:i}},NB=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),o0=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),DB=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),UB=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),FB=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),a0=B('<div class="shrink-0 text-xs">'),zB=B('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),HB=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md">'),WB=B('<div class="truncate text-xl font-bold">'),qB=B('<div class="truncate text-xs">@'),ZB=B('<span class="inline-block h-3 w-3">'),KB=B('<span class="inline-block h-4 w-4 text-blue-400">'),VB=B('<div class="flex items-center text-xs">'),GB=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),YB=B('<div class="flex flex-1 flex-col items-start"><div class=text-sm></div><div class=text-xl>'),JB=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class=text-sm></div><div class=text-xl>'),XB=B('<ul class="border-t px-5 py-2 text-xs">'),QB=B('<ul class="border-t p-1">'),ej=B('<div class="h-12 shrink-0">'),tj=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt=header class="h-full w-full object-cover">'),nj=B('<img alt="user icon"class="h-full w-full rounded-lg object-cover">'),rj=B('<span class="inline-block h-4 w-4 text-rose-500">'),ij=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),sj=B("<span class=text-sm>"),oj=B('<button class="text-sm hover:text-stone-800 hover:underline">'),aj=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4"area-label=website title=website>'),lj=e=>{const{count:t}=BB(()=>({pubkey:e.pubkey}));return Fe(t)},cj=e=>{const t=dt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a,saveColumn:l}=Qe(),u=wl(),d=bs(),f=rr(),{showProfileEdit:h}=ei(),g=Fe(()=>mo(e.pubkey)),[v,y]=Ce(!1),[w,x]=Ce(!1),[$,S]=Ce(!1),[L,C]=Ce(null),R=()=>C(null),{profile:P,event:A,query:D}=ms(()=>({pubkey:e.pubkey})),{verification:U,query:q}=jB(()=>ln([P()?.nip05])(([G])=>({nip05:G}))),Q=()=>{const G=P()?.nip05;if(G==null)return null;const[re,ae]=G.split("@");return ae==null?null:re==="_"?{domain:ae,ident:ae}:{user:re,domain:ae,ident:G}},te=()=>U()?.pubkey===e.pubkey,ne=()=>a(e.pubkey),se=Fe(()=>{const G=A(),re=P()?.about;if(G==null||re==null)return;const ae=md(re);return Z1(ae,Hr(G))}),{followingPubkeys:ee,invalidateFollowings:j,query:W}=i0(()=>ln([f()])(([G])=>({pubkey:G}))),J=()=>ee().includes(e.pubkey),{followingPubkeys:le,query:Y}=i0(()=>({pubkey:e.pubkey})),me=()=>{const G=f();return G!=null&&le().includes(G)},ve=$i(()=>({mutationKey:["updateContacts"],mutationFn:(...G)=>d.updateContacts(...G).then(re=>Promise.allSettled(re.map(Qr(5e3)))),onSuccess:G=>{const re=G.filter(Te=>Te.status==="fulfilled").length,ae=G.length-re;re===G.length?console.log("succeeded to update contacts"):re>0?console.log(`succeeded to update contacts for ${re} relays but failed for ${ae} relays`):console.error("failed to update contacts")},onError:G=>{console.error("failed to update contacts: ",G)},onSettled:()=>{j().then(()=>W.refetch()).catch(G=>console.error("failed to refetch contacts",G))}})),$e=async(G,re)=>{try{const ae=f();if(ae==null)return;y(!0);const Te=await vB({pubkey:ae});if((Te.data()==null||Te.followingPubkeys().length===0)&&!window.confirm(t()("profile.confirmUpdateEvenIfEmpty")))return;if((Te?.data()?.created_at??0)<(W.data?.created_at??0)){window.alert(t()("profile.failedToFetchLatestFollowList"));return}const Ke=Te.data()?.tags??[];let oe;switch(G){case"follow":oe=[...Ke,["p",re]];break;case"unfollow":oe=Ke.filter(([Z,qe])=>!(Z==="p"&&qe===re));break;default:console.error("updateContacts: invalid operation",G);return}await ve.mutateAsync({relayUrls:n().relayUrls,pubkey:ae,updatedTags:oe,content:Te.data()?.content??""})}catch(ae){console.error("failed to update contact list",ae),window.alert(t()("profile.failedToUpdateFollowList"))}finally{y(!1)}},Je=()=>{$e("follow",e.pubkey).catch(G=>{console.log("failed to follow",G)})},ue=()=>{window.confirm(t()("profile.confirmUnfollow"))&&$e("unfollow",e.pubkey).catch(G=>{console.log("failed to unfollow",G)})},Se=[{content:()=>t()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(g()).catch(G=>window.alert(G))}},{content:()=>t()("profile.addUserColumn"),onSelect:()=>{const G=P()?.name??g();l(pd({name:G,pubkey:e.pubkey})),u({command:"moveToLastColumn"}).catch(re=>console.error(re)),e.onClose?.()}},{content:()=>t()("profile.addUserHomeColumn"),onSelect:()=>{const G=`${t()("column.home")} / ${P()?.name??g()}`;l(hd({name:G,pubkey:e.pubkey})),u({command:"moveToLastColumn"}).catch(re=>console.error(re)),e.onClose?.()}},{content:()=>ne()?t()("profile.unmute"):t()("profile.mute"),onSelect:()=>{ne()?o(e.pubkey):i(e.pubkey)}},{when:()=>e.pubkey===f(),content:()=>J()?t()("profile.unfollowMyself"):t()("profile.followMyself"),onSelect:()=>{J()?ue():Je()}}],{events:Ee}=bm(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:Fr()}],continuous:!1}));return E(Oi,{onClose:()=>e.onClose?.(),get children(){return[E(pe,{get when(){return Fe(()=>!!D.isFetched)()&&P()?.banner},get fallback(){return ej()},keyed:!0,children:G=>(()=>{const re=tj(),ae=re.firstChild;return Ue(ae,"src",G),re})()}),(()=>{const G=HB(),re=G.firstChild,ae=re.firstChild;return k(ae,E(pe,{get when(){return Fe(()=>!!D.isFetched)()&&P()?.picture},keyed:!0,children:Te=>(()=>{const Ke=nj();return Ue(Ke,"src",Te),Ke})()})),k(G,E(pe,{get when(){return f()!=null},get children(){const Te=zB(),Ke=Te.firstChild;return k(Ke,E(Ln,{get children(){return[E(Ye,{get when(){return e.pubkey===f()},get children(){const oe=NB();return oe.$$click=()=>h(),k(oe,()=>t()("profile.editProfile")),oe}}),E(Ye,{get when(){return ve.isPending||v()},get children(){const oe=o0();return k(oe,()=>t()("general.updating")),oe}}),E(Ye,{get when(){return W.isPending||W.isFetching},get children(){const oe=o0();return k(oe,()=>t()("general.loading")),oe}}),E(Ye,{get when(){return J()},get children(){const oe=DB();return oe.$$click=()=>ue(),oe.addEventListener("mouseleave",()=>x(!1)),oe.addEventListener("mouseenter",()=>x(!0)),k(oe,E(pe,{get when(){return!w()},get fallback(){return t()("profile.unfollow")},get children(){return t()("profile.followingCurrently")}})),Le(()=>oe.disabled=ve.isPending),oe}}),E(Ye,{get when(){return!J()},get children(){const oe=UB();return oe.$$click=()=>Je(),k(oe,()=>t()("profile.follow")),Le(()=>oe.disabled=ve.isPending),oe}})]}}),null),k(Ke,E(av,{menu:Se,get children(){const oe=FB();return k(oe,E(rv,{})),oe}}),null),k(Te,E(Ln,{get children(){return[E(Ye,{get when(){return Y.isPending},get children(){const oe=a0();return k(oe,()=>t()("general.loading")),oe}}),E(Ye,{get when(){return me()},get children(){const oe=a0();return k(oe,()=>t()("profile.followsYou")),oe}})]}}),null),Te}}),null),G})(),(()=>{const G=GB(),re=G.firstChild,ae=re.firstChild,Te=ae.nextSibling,Ke=Te.firstChild;return k(re,E(pe,{get when(){return D.isPending},get children(){return t()("general.loading")}}),ae),k(re,E(pe,{get when(){return(P()?.display_name?.length??0)>0},get children(){const oe=WB();return k(oe,()=>P()?.display_name),oe}}),ae),k(ae,E(pe,{get when(){return(P()?.name?.length??0)>0},get children(){const oe=qB();return oe.firstChild,k(oe,()=>P()?.name,null),oe}}),null),k(ae,E(pe,{get when(){return(P()?.nip05?.length??0)>0},get children(){const oe=VB();return k(oe,()=>Q()?.ident,null),k(oe,E(Ln,{get fallback(){return(()=>{const Z=rj();return k(Z,E(MB,{})),Z})()},get children(){return[E(Ye,{get when(){return q.isPending},get children(){const Z=ZB();return k(Z,E(RB,{})),Z}}),E(Ye,{get when(){return te()},get children(){const Z=KB();return k(Z,E(LB,{})),Z}})]}}),null),oe}}),null),k(Ke,g),G})(),E(pe,{get when(){return se()},keyed:!0,children:G=>(()=>{const re=ij();return k(re,E(Wv,{parsed:G,embedding:!1,initialHidden:!0})),re})()}),(()=>{const G=JB(),re=G.firstChild,ae=re.firstChild,Te=ae.nextSibling;return re.$$click=()=>C("Following"),k(ae,()=>t()("profile.following")),k(Te,E(pe,{get when(){return Y.isFetched},get fallback(){return(()=>{const Ke=sj();return k(Ke,()=>t()("general.loading")),Ke})()},get children(){return le().length}})),k(G,E(pe,{get when(){return!n().hideCount},get children(){const Ke=YB(),oe=Ke.firstChild,Z=oe.nextSibling;return k(oe,()=>t()("profile.followers")),k(Z,E(pe,{get when(){return $()},get fallback(){return(()=>{const qe=oj();return qe.$$click=()=>S(!0),k(qe,()=>t()("profile.loadFollowers")),qe})()},keyed:!0,get children(){return E(lj,{get pubkey(){return e.pubkey}})}})),Ke}}),null),G})(),E(pe,{get when(){return(P()?.website??"").length>0},get children(){const G=XB();return k(G,E(pe,{get when(){return P()?.website},keyed:!0,children:re=>(()=>{const ae=aj(),Te=ae.firstChild;return k(Te,E(wm,{})),k(ae,E(Qn,{class:"text-blue-500 underline",href:re}),null),ae})()})),G}}),E(Ln,{get children(){return E(Ye,{get when(){return L()==="Following"},get children(){return E($d,{get data(){return le()},pubkeyExtractor:G=>G,onClose:R})}})}}),(()=>{const G=QB();return k(G,E(XI,{get events(){return Ee()}})),G})()]}})};vt(["click"]);function uj(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var dj=uj,fj=Ai,hj=function(){try{var e=fj(Object,"defineProperty");return e({},"",{}),e}catch{}}(),xm=hj,l0=xm;function pj(e,t,n){t=="__proto__"&&l0?l0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var $m=pj,gj=$m,vj=qu,mj=Object.prototype,bj=mj.hasOwnProperty;function yj(e,t,n){var i=e[t];(!(bj.call(e,t)&&vj(i,n))||n===void 0&&!(t in e))&&gj(e,t,n)}var Hd=yj,_j=Hd,wj=$m;function xj(e,t,n,i){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?wj(n,u,d):_j(n,u,d)}return n}var _o=xj,$j=_o,Ej=Il;function kj(e,t){return e&&$j(t,Ej(t),e)}var Cj=kj;function Sj(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Tj=Sj,Aj=er,Ij=Nd,Rj=Tj,Oj=Object.prototype,Lj=Oj.hasOwnProperty;function Pj(e){if(!Aj(e))return Rj(e);var t=Ij(e),n=[];for(var i in e)i=="constructor"&&(t||!Lj.call(e,i))||n.push(i);return n}var Mj=Pj,Bj=sm,jj=Mj,Nj=am;function Dj(e){return Nj(e)?Bj(e,!0):jj(e)}var Wd=Dj,Uj=_o,Fj=Wd;function zj(e,t){return e&&Uj(t,Fj(t),e)}var Hj=zj,tl={exports:{}};tl.exports;(function(e,t){var n=Dn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(f,h){if(h)return f.slice();var g=f.length,v=u?u(g):new f.constructor(g);return f.copy(v),v}e.exports=d})(tl,tl.exports);var Wj=tl.exports;function qj(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var Zj=qj,Kj=_o,Vj=Rd;function Gj(e,t){return Kj(e,Vj(e),t)}var Yj=Gj,Jj=om,Xj=Jj(Object.getPrototypeOf,Object),qd=Xj,Qj=Id,eN=qd,tN=Rd,nN=nm,rN=Object.getOwnPropertySymbols,iN=rN?function(e){for(var t=[];e;)Qj(t,tN(e)),e=eN(e);return t}:nN,Em=iN,sN=_o,oN=Em;function aN(e,t){return sN(e,oN(e),t)}var lN=aN,cN=tm,uN=Em,dN=Wd;function fN(e){return cN(e,dN,uN)}var Zd=fN,hN=Object.prototype,pN=hN.hasOwnProperty;function gN(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&pN.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var vN=gN,c0=em;function mN(e){var t=new e.constructor(e.byteLength);return new c0(t).set(new c0(e)),t}var Kd=mN,bN=Kd;function yN(e,t){var n=t?bN(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var _N=yN,wN=/\w*$/;function xN(e){var t=new e.constructor(e.source,wN.exec(e));return t.lastIndex=e.lastIndex,t}var $N=xN,u0=us,d0=u0?u0.prototype:void 0,f0=d0?d0.valueOf:void 0;function EN(e){return f0?Object(f0.call(e)):{}}var kN=EN,CN=Kd;function SN(e,t){var n=t?CN(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var TN=SN,AN=Kd,IN=_N,RN=$N,ON=kN,LN=TN,PN="[object Boolean]",MN="[object Date]",BN="[object Map]",jN="[object Number]",NN="[object RegExp]",DN="[object Set]",UN="[object String]",FN="[object Symbol]",zN="[object ArrayBuffer]",HN="[object DataView]",WN="[object Float32Array]",qN="[object Float64Array]",ZN="[object Int8Array]",KN="[object Int16Array]",VN="[object Int32Array]",GN="[object Uint8Array]",YN="[object Uint8ClampedArray]",JN="[object Uint16Array]",XN="[object Uint32Array]";function QN(e,t,n){var i=e.constructor;switch(t){case zN:return AN(e);case PN:case MN:return new i(+e);case HN:return IN(e,n);case WN:case qN:case ZN:case KN:case VN:case GN:case YN:case JN:case XN:return LN(e,n);case BN:return new i;case jN:case UN:return new i(e);case NN:return RN(e);case DN:return new i;case FN:return ON(e)}}var eD=QN,tD=er,h0=Object.create,nD=function(){function e(){}return function(t){if(!tD(t))return{};if(h0)return h0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),rD=nD,iD=rD,sD=qd,oD=Nd;function aD(e){return typeof e.constructor=="function"&&!oD(e)?iD(sD(e)):{}}var lD=aD,cD=Rl,uD=ti,dD="[object Map]";function fD(e){return uD(e)&&cD(e)==dD}var hD=fD,pD=hD,gD=Bd,p0=jd,g0=p0&&p0.isMap,vD=g0?gD(g0):pD,mD=vD,bD=Rl,yD=ti,_D="[object Set]";function wD(e){return yD(e)&&bD(e)==_D}var xD=wD,$D=xD,ED=Bd,v0=jd,m0=v0&&v0.isSet,kD=m0?ED(m0):$D,CD=kD,SD=Ad,TD=dj,AD=Hd,ID=Cj,RD=Hj,OD=Wj,LD=Zj,PD=Yj,MD=lN,BD=lm,jD=Zd,ND=Rl,DD=vN,UD=eD,FD=lD,zD=ir,HD=Ld,WD=mD,qD=er,ZD=CD,KD=Il,VD=Wd,GD=1,YD=2,JD=4,km="[object Arguments]",XD="[object Array]",QD="[object Boolean]",eU="[object Date]",tU="[object Error]",Cm="[object Function]",nU="[object GeneratorFunction]",rU="[object Map]",iU="[object Number]",Sm="[object Object]",sU="[object RegExp]",oU="[object Set]",aU="[object String]",lU="[object Symbol]",cU="[object WeakMap]",uU="[object ArrayBuffer]",dU="[object DataView]",fU="[object Float32Array]",hU="[object Float64Array]",pU="[object Int8Array]",gU="[object Int16Array]",vU="[object Int32Array]",mU="[object Uint8Array]",bU="[object Uint8ClampedArray]",yU="[object Uint16Array]",_U="[object Uint32Array]",rt={};rt[km]=rt[XD]=rt[uU]=rt[dU]=rt[QD]=rt[eU]=rt[fU]=rt[hU]=rt[pU]=rt[gU]=rt[vU]=rt[rU]=rt[iU]=rt[Sm]=rt[sU]=rt[oU]=rt[aU]=rt[lU]=rt[mU]=rt[bU]=rt[yU]=rt[_U]=!0;rt[tU]=rt[Cm]=rt[cU]=!1;function Ta(e,t,n,i,o,a){var l,u=t&GD,d=t&YD,f=t&JD;if(n&&(l=o?n(e,i,o,a):n(e)),l!==void 0)return l;if(!qD(e))return e;var h=zD(e);if(h){if(l=DD(e),!u)return LD(e,l)}else{var g=ND(e),v=g==Cm||g==nU;if(HD(e))return OD(e,u);if(g==Sm||g==km||v&&!o){if(l=d||v?{}:FD(e),!u)return d?MD(e,RD(l,e)):PD(e,ID(l,e))}else{if(!rt[g])return o?e:{};l=UD(e,g,u)}}a||(a=new SD);var y=a.get(e);if(y)return y;a.set(e,l),ZD(e)?e.forEach(function($){l.add(Ta($,t,n,$,e,a))}):WD(e)&&e.forEach(function($,S){l.set(S,Ta($,t,n,S,e,a))});var w=f?d?jD:BD:d?VD:KD,x=h?void 0:w(e);return TD(x||e,function($,S){x&&(S=$,$=e[S]),AD(l,S,Ta($,t,n,S,e,a))}),l}var wU=Ta;function xU(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var $U=xU;function EU(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var kU=EU,CU=Ol,SU=kU;function TU(e,t){return t.length<2?e:CU(e,SU(t,0,-1))}var AU=TU,IU=xs,RU=$U,OU=AU,LU=$s;function PU(e,t){return t=IU(t,e),e=OU(e,t),e==null||delete e[LU(RU(t))]}var MU=PU,BU=ds,jU=qd,NU=ti,DU="[object Object]",UU=Function.prototype,FU=Object.prototype,Tm=UU.toString,zU=FU.hasOwnProperty,HU=Tm.call(Object);function WU(e){if(!NU(e)||BU(e)!=DU)return!1;var t=jU(e);if(t===null)return!0;var n=zU.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Tm.call(n)==HU}var qU=WU,ZU=qU;function KU(e){return ZU(e)?void 0:e}var VU=KU,b0=us,GU=Od,YU=ir,y0=b0?b0.isConcatSpreadable:void 0;function JU(e){return YU(e)||GU(e)||!!(y0&&e&&e[y0])}var XU=JU,QU=Id,eF=XU;function Am(e,t,n,i,o){var a=-1,l=e.length;for(n||(n=eF),o||(o=[]);++a<l;){var u=e[a];t>0&&n(u)?t>1?Am(u,t-1,n,i,o):QU(o,u):i||(o[o.length]=u)}return o}var tF=Am,nF=tF;function rF(e){var t=e==null?0:e.length;return t?nF(e,1):[]}var iF=rF;function sF(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var oF=sF,aF=oF,_0=Math.max;function lF(e,t,n){return t=_0(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=_0(i.length-t,0),l=Array(a);++o<a;)l[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(l),aF(e,this,u)}}var cF=lF;function uF(e){return function(){return e}}var dF=uF,fF=dF,w0=xm,hF=vm,pF=w0?function(e,t){return w0(e,"toString",{configurable:!0,enumerable:!1,value:fF(t),writable:!0})}:hF,gF=pF,vF=800,mF=16,bF=Date.now;function yF(e){var t=0,n=0;return function(){var i=bF(),o=mF-(i-n);if(n=i,o>0){if(++t>=vF)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var _F=yF,wF=gF,xF=_F,$F=xF(wF),EF=$F,kF=iF,CF=cF,SF=EF;function TF(e){return SF(CF(e,void 0,kF),e+"")}var AF=TF,IF=Fd,RF=wU,OF=MU,LF=xs,PF=_o,MF=VU,BF=AF,jF=Zd,NF=1,DF=2,UF=4,FF=BF(function(e,t){var n={};if(e==null)return n;var i=!1;t=IF(t,function(a){return a=LF(a,e),i||(i=a.length>1),a}),PF(e,jF(e),n),i&&(n=RF(n,NF|DF|UF,MF));for(var o=t.length;o--;)OF(n,t[o]);return n}),zF=FF;const HF=oo(zF);var WF="Expected a function";function qF(e){if(typeof e!="function")throw new TypeError(WF);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var ZF=qF,KF=Hd,VF=xs,GF=Pd,x0=er,YF=$s;function JF(e,t,n,i){if(!x0(e))return e;t=VF(t,e);for(var o=-1,a=t.length,l=a-1,u=e;u!=null&&++o<a;){var d=YF(t[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=l){var h=u[d];f=i?i(h,d,u):void 0,f===void 0&&(f=x0(h)?h:GF(t[o+1])?[]:{})}KF(u,d,f),u=u[d]}return e}var XF=JF,QF=Ol,ez=XF,tz=xs;function nz(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var l=t[i],u=QF(e,l);n(u,l)&&ez(a,tz(l,e),u)}return a}var rz=nz,iz=Fd,sz=zd,oz=rz,az=Zd;function lz(e,t){if(e==null)return{};var n=iz(az(e),function(i){return[i]});return t=sz(t),oz(e,n,function(i,o){return t(i,o[0])})}var cz=lz,uz=zd,dz=ZF,fz=cz;function hz(e,t){return fz(e,dz(uz(t)))}var pz=hz;const gz=oo(pz),vz=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt=header class="h-full w-full object-cover">'),mz=B('<img alt="user icon"class="h-full w-full rounded-lg object-cover">'),bz=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),yz=B('<div class="px-4 pt-4">'),_z=B("<div><span class=font-bold></span><div>"),wz=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class=font-bold for=picture></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"type=text id=picture name=picture placeholder=https://....../picture.png></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=picture></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"type=text id=banner name=banner placeholder=https://....../banner.png></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"type=text id=name name=name maxlength=32 required></div></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"type=text name=displayName maxlength=32></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"name=about rows=5></textarea></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"type=text name=website placeholder=https://....../></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"type=text name=nip05 placeholder=yourname@domain.example.com></div><div class="flex flex-col items-start gap-1"><label class=font-bold for=name></label><span class=text-xs></span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300"type=text name=website pattern=^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$ placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type=submit class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400"></button><button type=button class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">'),xz=B('<div class="h-24 shrink-0">'),$z=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),Ez="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",kz="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",Cz=new RegExp(`^${Ez}$`),Im=new RegExp(`^${kz}$`),Sz=e=>Cz.test(e),Tz=e=>Im.test(e),Az=e=>{const t=dt(),n=rr(),{config:i}=Qe(),[o,a]=Ce(""),[l,u]=Ce(""),[d,f]=Ce(""),[h,g]=Ce(""),[v,y]=Ce(""),[w,x]=Ce(""),[$,S]=Ce(""),[L,C]=Ce(""),{profile:R,invalidateProfile:P,query:A}=ms(()=>ln([n()])(([ee])=>({pubkey:ee}))),{updateProfile:D}=bs(),U=$i(()=>({mutationKey:["updateProfile"],mutationFn:(...ee)=>D(...ee).then(j=>Promise.allSettled(j.map(Qr(1e4)))),onSuccess:ee=>{const j=ee.filter(J=>J.status==="fulfilled").length,W=ee.length-j;j===ee.length?window.alert(t()("profile.edit.updateSucceeded")):j>0?window.alert(t()("profile.edit.failedToUpdatePartially",{count:W})):window.alert(t()("profile.edit.failedToUpdate")),P().then(()=>A.refetch()).catch(J=>console.error(J)),e.onClose()},onError:ee=>{console.error("failed to delete",ee)}})),q=()=>A.isPending||U.isPending,Q=()=>q();setInterval(()=>console.log(A.isPending,U.isPending),1e3);const te=()=>HF(R(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),ne=ee=>{ee.preventDefault();const j=n();if(j==null)return;const W=gz({picture:o(),banner:l(),name:d(),display_name:h(),about:v(),website:w(),nip05:$(),lud06:Sz(L())?L():null,lud16:Tz(L())?L():null},J=>J==null||J.length===0);U.mutate({relayUrls:i().relayUrls,pubkey:j,profile:W,otherProperties:te()})},se=ee=>ee.key==="Enter"&&ee.preventDefault();return kr(()=>{const ee=R();ee!=null&&(A.refetch().catch(j=>console.error(j)),S0(()=>{a(j=>ee.picture??j),u(j=>ee.banner??j),f(j=>ee.name??j),g(j=>ee.display_name??j),y(j=>ee.about??j),x(j=>ee.website??j),S(j=>ee.nip05??j),ee.lud16!=null?C(ee.lud16):ee.lud06!=null&&C(ee.lud06)}))}),E(Oi,{closeButton:()=>E(T0,{}),get onClose(){return e.onClose},get children(){return[(()=>{const ee=bz(),j=ee.firstChild;return k(ee,E(pe,{get when(){return l().length>0},get fallback(){return xz()},keyed:!0,get children(){const W=vz(),J=W.firstChild;return Le(()=>Ue(J,"src",l())),W}}),j),k(j,E(pe,{get when(){return o().length>0},get children(){const W=mz();return Le(()=>Ue(W,"src",o())),W}})),ee})(),E(pe,{get when(){return q()},get children(){const ee=yz();return k(ee,()=>t()("general.loading")),ee}}),(()=>{const ee=wz(),j=ee.firstChild,W=j.firstChild,J=W.firstChild,le=J.nextSibling,Y=W.nextSibling,me=Y.firstChild,ve=me.nextSibling,$e=Y.nextSibling,Je=$e.firstChild,ue=Je.nextSibling,Se=ue.firstChild,Ee=Se.nextSibling,G=$e.nextSibling,re=G.firstChild,ae=re.nextSibling,Te=G.nextSibling,Ke=Te.firstChild,oe=Ke.nextSibling,Z=Te.nextSibling,qe=Z.firstChild,xt=qe.nextSibling,Fn=Z.nextSibling,Bt=Fn.firstChild,xn=Bt.nextSibling,ni=Fn.nextSibling,$n=ni.firstChild,Ct=$n.nextSibling,Jt=Ct.nextSibling,zn=ni.nextSibling,Sr=zn.firstChild,En=Sr.nextSibling;return j.addEventListener("submit",ne),k(J,()=>t()("profile.edit.icon")),le.$$keydown=se,le.addEventListener("blur",Ae=>a(Ae.currentTarget.value)),k(me,()=>t()("profile.edit.banner")),ve.$$keydown=se,ve.addEventListener("blur",Ae=>u(Ae.currentTarget.value)),k(Je,()=>t()("profile.edit.name")),Ee.$$keydown=se,Ee.addEventListener("change",Ae=>f(Ae.currentTarget.value)),k(re,()=>t()("profile.edit.displayName")),ae.$$keydown=se,ae.addEventListener("change",Ae=>g(Ae.currentTarget.value)),k(Ke,()=>t()("profile.edit.about")),oe.addEventListener("change",Ae=>y(Ae.currentTarget.value)),k(qe,()=>t()("profile.edit.website")),xt.$$keydown=se,xt.addEventListener("change",Ae=>x(Ae.currentTarget.value)),k(Bt,()=>t()("profile.edit.nip05")),xn.$$keydown=se,xn.addEventListener("change",Ae=>S(Ae.currentTarget.value)),k($n,()=>t()("profile.edit.lightningAddress")),k(Ct,()=>t()("profile.edit.lightningAddressDescription")),Jt.$$keydown=se,Jt.addEventListener("change",Ae=>C(Ae.currentTarget.value)),k(j,E(pe,{get when(){return Object.entries(te()).length>0},get children(){const Ae=_z(),Ht=Ae.firstChild,Wt=Ht.nextSibling;return k(Ht,()=>t()("profile.edit.otherProperties")),k(Wt,E(Ft,{get each(){return Object.entries(te())},children:([kn,Cn])=>(()=>{const cn=$z(),un=cn.firstChild,Sn=un.nextSibling;return k(un,kn),k(Sn,Cn),cn})()})),Ae}}),zn),k(Sr,()=>t()("profile.edit.save")),En.$$click=()=>e.onClose(),k(En,()=>t()("profile.edit.cancel")),k(j,E(pe,{get when(){return U.isPending},get children(){return t()("profile.edit.updating")}}),null),Le(Ae=>{const Ht=Q(),Wt=Q(),kn=Q(),Cn=Q(),cn=Q(),un=Q(),Sn=Im.source,sr=Q(),or=Q(),ar=U.isPending;return Ht!==Ae._v$&&(le.disabled=Ae._v$=Ht),Wt!==Ae._v$2&&(ve.disabled=Ae._v$2=Wt),kn!==Ae._v$3&&(Ee.disabled=Ae._v$3=kn),Cn!==Ae._v$4&&(ae.disabled=Ae._v$4=Cn),cn!==Ae._v$5&&(oe.disabled=Ae._v$5=cn),un!==Ae._v$6&&(xt.disabled=Ae._v$6=un),Sn!==Ae._v$7&&Ue(xn,"pattern",Ae._v$7=Sn),sr!==Ae._v$8&&(xn.disabled=Ae._v$8=sr),or!==Ae._v$9&&(Jt.disabled=Ae._v$9=or),ar!==Ae._v$10&&(Sr.disabled=Ae._v$10=ar),Ae},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Le(()=>le.value=o()),Le(()=>ve.value=l()),Le(()=>Ee.value=d()),Le(()=>ae.value=h()),Le(()=>oe.value=v()),Le(()=>xt.value=w()),Le(()=>xn.value=$()),Le(()=>Jt.value=L()),ee})()]}})};vt(["keydown","click"]);const RH=()=>{const e=rr(),{modalState:t,showProfile:n,closeModal:i}=ei();return E(pe,{get when(){return t()},keyed:!0,children:o=>E(Ln,{get children(){return[E(Ye,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>E(cj,{pubkey:a,onClose:i})}),E(Ye,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return E(Az,{onClose:()=>ln([e()])(([a])=>{n(a)})})}}),E(Ye,{get when(){return o.type==="AddColumn"},get children(){return E(AB,{onClose:i})}}),E(Ye,{get when(){return o.type==="About"},get children(){return E(SB,{onClose:i})}})]}})})},Iz=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869z"></path><path stroke-linecap=round stroke-linejoin=round d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0">'),Rz=(e={})=>(()=>{const t=Iz();return it(t,e,!0,!0),t})(),Oz=B('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5M2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5"clip-rule=evenodd>'),$0=(e={})=>(()=>{const t=Oz();return it(t,e,!0,!0),t})(),Lz=B('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712m-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5z">'),Pz=(e={})=>(()=>{const t=Lz();return it(t,e,!0,!0),t})(),Mz=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),Bz=(e={})=>(()=>{const t=Mz();return it(t,e,!0,!0),t})(),jz=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128m0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),Nz=(e={})=>(()=>{const t=jz();return it(t,e,!0,!0),t})(),Dz=B('<svg xmlns=http://www.w3.org/2000/svg fill=none stroke=currentColor stroke-width=1.5 aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path stroke-linecap=round stroke-linejoin=round d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008zm0-6h.008v.008h-.008zm-3 6h.008v.008h-.008zm0-6h.008v.008h-.008z">'),Uz=(e={})=>(()=>{const t=Dz();return it(t,e,!0,!0),t})(),E0=mt.string().length(64).regex(/^[0-9a-f]{64}$/),Fu=mt.string().regex(/^\w+$/),Fz=mt.object({shortcode:Fu,url:mt.string().url(),keywords:mt.optional(mt.array(Fu))}),zz=mt.object({manifest:mt.literal("emojipack_v1"),name:mt.string(),emojis:mt.array(Fz),description:mt.optional(mt.string()),author:mt.optional(E0),publisher:mt.optional(E0)}).refine(e=>mm(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),Rm=mt.record(Fu,mt.string().url());zz.or(Rm);const Hz=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),Wz=B('<div class=py-2><h3 class=font-bold></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),qz=B('<div class=py-2><h3 class=font-bold></h3><p class=py-1></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"type=text name=relayUrl><button type=submit class="rounded bg-rose-300 p-2 font-bold text-white">'),Zz=B('<div class=py-2><h3 class="pb-1 font-bold"></h3><button type=button class="rounded bg-rose-300 p-2 font-bold text-white">'),zu=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Kz=B('<div class=py-2><h3 class=font-bold></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),Vz=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type=button class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class=text-xs>'),Gz=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Yz=B('<div class=py-2><h3 class=font-bold></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class=flex-1></div></div><div class="flex w-full"><div class=flex-1>'),Jz=B('<div class=py-2><h3 class=font-bold></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class=w-9></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"type=text name=shortcode placeholder=smiley pattern=^\\w+$ required></label><label class="flex flex-1 items-center gap-1"><div class=w-9></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"type=text name=url placeholder=https://example.com/smiley.png required></label><button type=submit class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),Xz=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Qz=B('<div class=py-2><h3 class=font-bold></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"name=json placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type=submit class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),eH=B('<div class=py-2><h3 class=font-bold></h3><ul class="flex flex-col">'),tH=B('<div class=py-2><h3 class=font-bold></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300"type=text name=keyword><button type=submit class="rounded bg-rose-300 p-2 font-bold text-white">'),nH=B('<div class=py-2><h3 class=font-bold></h3><p></p><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class=flex-1>YouTube</div></div><div class="flex w-full"><div class=flex-1>X (Twitter)</div></div><div class="flex w-full"><div class=flex-1>OGP'),rH=B('<div class=py-2><h3 class=font-bold></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class=flex-1></div></div><div class="flex w-full"><div class=flex-1></div></div><div class="flex w-full"><div class=flex-1>'),iH=B("<div class=p-4>"),sH=B('<h2 class="flex-1 text-center text-lg font-bold">'),oH=B('<ul class="flex flex-col">'),aH=B('<li class=w-full><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),lH=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Om=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,cH=Om("https?"),uH=Om("wss?"),dH=()=>{const e=dt(),t=rr(),{showProfile:n,showProfileEdit:i}=ei();return(()=>{const o=Wz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild,d=u.nextSibling;return k(a,()=>e()("config.profile.profile")),u.$$click=()=>ln([t()])(([f])=>{n(f)}),k(u,()=>e()("config.profile.openProfile")),d.$$click=()=>i(),k(d,()=>e()("config.profile.editProfile")),o})()},fH=()=>{const e=dt(),{config:t,addRelay:n,removeRelay:i}=Qe(),[o,a]=Ce(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},u=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([y])=>y).join(`
`);if(d.length===0){window.alert(e()("config.relays.notConfigured"));return}if(!window.confirm(`${e()("config.relays.askImport")}

${f}`))return;const h=t().relayUrls.length;S0(()=>{d.forEach(([y])=>{n(y)})});const v=t().relayUrls.length-h;window.alert(e()("config.relays.imported",{count:v}))};return[(()=>{const d=qz(),f=d.firstChild,h=f.nextSibling,g=h.nextSibling,v=g.nextSibling,y=v.firstChild,w=y.nextSibling;return k(f,()=>e()("config.relays.relays")),k(h,()=>e()("config.relays.numOfRelays",{count:t().relayUrls.length})),k(g,E(Ft,{get each(){return t().relayUrls},children:x=>(()=>{const $=zu(),S=$.firstChild,L=S.nextSibling;return k(S,x),L.$$click=()=>i(x),k(L,E(ls,{})),$})()})),v.addEventListener("submit",l),y.addEventListener("change",x=>a(x.currentTarget.value)),Ue(y,"pattern",uH),k(w,()=>e()("config.relays.addRelay")),Le(()=>y.value=o()),d})(),(()=>{const d=Zz(),f=d.firstChild,h=f.nextSibling;return k(f,()=>e()("config.relays.importRelays")),h.$$click=()=>{u().catch(g=>{console.error("failed to import relays",g),window.alert(e()("config.relays.failedToImport"))})},k(h,()=>e()("config.relays.importFromExtension")),d})()]},hH=()=>{const e=dt(),{config:t,setConfig:n}=Qe(),i=[{id:"relative",name:e()("config.display.relativeTimeNotation"),example:e()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:e()("config.display.absoluteTimeNotationShort"),example:e()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:e()("config.display.absoluteTimeNotationLong"),example:e()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=Kz(),l=a.firstChild,u=l.nextSibling;return k(l,()=>e()("config.display.timeNotation")),k(u,E(Ft,{each:i,children:({id:d,name:f,example:h})=>(()=>{const g=Vz(),v=g.firstChild,y=v.nextSibling;return v.$$click=()=>o(d),k(v,f),k(y,h),Le(w=>{const x=t().dateFormat===d,$=t().dateFormat===d,S=t().dateFormat!==d,L=t().dateFormat!==d;return x!==w._v$&&v.classList.toggle("bg-rose-300",w._v$=x),$!==w._v$2&&v.classList.toggle("text-white",w._v$2=$),S!==w._v$3&&v.classList.toggle("bg-white",w._v$3=S),L!==w._v$4&&v.classList.toggle("text-rose-300",w._v$4=L),w},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},Kr=e=>(()=>{const t=Gz();return t.$$click=n=>e.onClick(n),Le(n=>{const i=!e.value,o=!e.value,a=!!e.value,l=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&t.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&Ue(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),pH=()=>{const e=dt(),{config:t,setConfig:n}=Qe(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=Yz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,f=d.firstChild,h=d.nextSibling,g=h.firstChild;return k(l,()=>e()("config.display.reaction")),k(f,()=>e()("config.display.enableEmojiReaction")),k(d,E(Kr,{get value(){return t().useEmojiReaction},onClick:()=>i()}),null),k(g,()=>e()("config.display.showEmojiReaction")),k(h,E(Kr,{get value(){return t().showEmojiReaction},onClick:()=>o()}),null),a})()},gH=()=>{const e=dt(),{config:t,saveEmoji:n,removeEmoji:i}=Qe(),[o,a]=Ce(""),[l,u]=Ce(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),u(""))};return(()=>{const f=Jz(),h=f.firstChild,g=h.nextSibling,v=g.nextSibling,y=v.firstChild,w=y.firstChild,x=w.nextSibling,$=y.nextSibling,S=$.firstChild,L=S.nextSibling,C=$.nextSibling;return k(h,()=>e()("config.customEmoji.customEmoji")),k(g,E(Ft,{get each(){return Object.values(t().customEmojis)},children:({shortcode:R,url:P})=>(()=>{const A=Xz(),D=A.firstChild,U=D.nextSibling,q=U.nextSibling;return Ue(D,"src",P),Ue(D,"alt",R),k(U,R),q.$$click=()=>i(R),k(q,E(ls,{})),A})()})),v.addEventListener("submit",d),k(w,()=>e()("config.customEmoji.shortcode")),x.addEventListener("change",R=>a(R.currentTarget.value)),k(S,()=>e()("config.customEmoji.url")),L.addEventListener("change",R=>u(R.currentTarget.value)),Ue(L,"pattern",cH),k(C,()=>e()("config.customEmoji.addEmoji")),Le(()=>x.value=o()),Le(()=>L.value=l()),f})()},vH=()=>{const e=dt(),{saveEmojis:t}=Qe(),[n,i]=Ce(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=Rm.parse(JSON.parse(n())),u=Hz(l);t(u),i("")}catch(l){const u=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${u}`)}};return(()=>{const a=Qz(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,f=d.firstChild,h=f.nextSibling;return k(l,()=>e()("config.customEmoji.emojiImport")),k(u,()=>e()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",g=>i(g.currentTarget.value)),k(h,()=>e()("config.customEmoji.importEmoji")),Le(()=>f.value=n()),a})()},mH=()=>{const e=dt(),{config:t,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=Qe(),[a,l]=Ce(""),u=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=eH(),f=d.firstChild,h=f.nextSibling;return k(f,()=>e()("config.mute.mutedUsers")),k(h,E(Ft,{get each(){return t().mutedPubkeys},children:g=>(()=>{const v=zu(),y=v.firstChild,w=y.nextSibling;return k(y,E(yd,{pubkey:g})),w.$$click=()=>n(g),k(w,E(ls,{})),v})()})),d})(),(()=>{const d=tH(),f=d.firstChild,h=f.nextSibling,g=h.nextSibling,v=g.firstChild,y=v.nextSibling;return k(f,()=>e()("config.mute.mutedKeywords")),k(h,E(Ft,{get each(){return t().mutedKeywords},children:w=>(()=>{const x=zu(),$=x.firstChild,S=$.nextSibling;return k($,w),S.$$click=()=>o(w),k(S,E(ls,{})),x})()})),g.addEventListener("submit",u),v.addEventListener("change",w=>l(w.currentTarget.value)),k(y,()=>e()("config.mute.add")),Le(()=>v.value=a()),d})()]},bH=()=>{const e=dt(),{config:t,setConfig:n}=Qe(),i=o=>{n(a=>({...a,embedding:{...a.embedding,[o]:!a.embedding[o]}}))};return(()=>{const o=nH(),a=o.firstChild,l=a.nextSibling,u=l.nextSibling,d=u.firstChild;d.firstChild;const f=d.nextSibling;f.firstChild;const h=f.nextSibling;return h.firstChild,k(a,()=>e()("config.display.embedding")),k(l,()=>e()("config.display.embeddingDescription")),k(d,E(Kr,{get value(){return t().embedding.youtube},onClick:()=>i("youtube")}),null),k(f,E(Kr,{get value(){return t().embedding.twitter},onClick:()=>i("twitter")}),null),k(h,E(Kr,{get value(){return t().embedding.ogp},onClick:()=>i("ogp")}),null),o})()},yH=()=>{const e=dt(),{config:t,setConfig:n}=Qe(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=rH(),u=l.firstChild,d=u.nextSibling,f=d.firstChild,h=f.firstChild,g=f.nextSibling,v=g.firstChild,y=g.nextSibling,w=y.firstChild;return k(u,()=>e()("config.display.others")),k(h,()=>e()("config.display.keepOpenPostForm")),k(f,E(Kr,{get value(){return t().keepOpenPostForm},onClick:()=>i()}),null),k(v,()=>e()("config.display.showMediaByDefault")),k(g,E(Kr,{get value(){return t().showMedia},onClick:()=>o()}),null),k(w,()=>e()("config.display.hideNumbers")),k(y,E(Kr,{get value(){return t().hideCount},onClick:()=>a()}),null),l})()},_H=e=>{const t=dt(),[n,i]=Ce(null),o=[{name:()=>t()("config.profile.profile"),icon:()=>E(_m,{}),render:()=>E(dH,{})},{name:()=>t()("config.relays.relays"),icon:()=>E(Uz,{}),render:()=>E(fH,{})},{name:()=>t()("config.display.display"),icon:()=>E(Nz,{}),render:()=>[E(hH,{}),E(pH,{}),E(bH,{}),E(yH,{})]},{name:()=>t()("config.customEmoji.customEmoji"),icon:()=>E(qv,{}),render:()=>[E(gH,{}),E(vH,{})]},{name:()=>t()("config.mute.mute"),icon:()=>E(Bz,{}),render:()=>E(mH,{})}],a=()=>{const l=n();return l==null?null:o[l]};return E(Oi,{get onClose(){return e.onClose},get children(){const l=iH();return k(l,E(pe,{get when(){return a()},get fallback(){return[(()=>{const u=sH();return k(u,()=>t()("config.config")),u})(),(()=>{const u=oH();return k(u,E(Ft,{each:o,children:(d,f)=>(()=>{const h=aH(),g=h.firstChild,v=g.firstChild;return g.$$click=()=>i(f),k(v,()=>d.icon()),k(g,()=>d.name(),null),h})()})),u})()]},keyed:!0,children:u=>(()=>{const d=lH(),f=d.firstChild,h=f.nextSibling;return f.$$click=()=>i(null),k(f,E(T0,{})),k(h,()=>u.render()),d})()})),l}})};vt(["click"]);const wH=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300"type=text><button class="h-8 w-8 rounded bg-primary p-1 text-white"type=submit>'),xH=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),$H=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class=grow></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class=pt-2><img class="h-8 w-8"alt="About rabbit"></button></div></div><div>'),EH=()=>{let e,t;const{saveColumn:n}=Qe(),i=wl(),[o,a]=Ce(""),l=u=>{u.preventDefault(),n(gd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return E(_d,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=xH();return k(u,E($0,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=wH(),d=u.firstChild,f=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const h=t;return typeof h=="function"?jn(h,d):t=d,k(f,E($0,{})),Le(()=>d.value=o()),u}})},OH=()=>{let e;const{showAddColumn:t,showAbout:n}=ei(),{config:i}=Qe(),[o,a]=Ce(!1),[l,u]=Ce(!1),d=()=>{e?.focus(),e?.click(),e?.setSelectionRange(0,0)},f=()=>a(!0),h=()=>a(!1),g=()=>a(v=>!v);return nA(()=>({commandType:"openPostForm",handler:()=>{f(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=$H(),y=v.firstChild,w=y.firstChild,x=w.firstChild,$=w.nextSibling,S=$.nextSibling,L=S.firstChild,C=L.nextSibling,R=C.nextSibling,P=R.firstChild,A=y.nextSibling;return x.$$click=()=>g(),k(x,E(Pz,{})),k(w,E(EH,{}),null),L.$$click=()=>t(),k(L,E(sv,{})),C.$$click=()=>u(D=>!D),k(C,E(Rz,{})),R.$$click=()=>n(),k(A,E(Jv,{textAreaRef:D=>{e=D},onClose:h})),k(v,E(pe,{get when(){return l()},get children(){return E(_H,{onClose:()=>u(!1)})}}),null),Le(D=>{const U=Wu("images/rabbit_app_256.png"),q=!!(o()||i().keepOpenPostForm),Q=!(o()||i().keepOpenPostForm);return U!==D._v$&&Ue(P,"src",D._v$=U),q!==D._v$2&&A.classList.toggle("static",D._v$2=q),Q!==D._v$3&&A.classList.toggle("hidden",D._v$3=Q),D},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};vt(["click"]);export{T0 as A,vs as B,U6 as C,_m as D,so as E,iv as F,wm as G,gB as H,TH as I,RI as J,at as K,RH as L,xB as M,ml as N,po as O,TC as R,OH as S,XI as T,yd as U,bm as a,_i as b,IH as c,nA as d,DI as e,wl as f,Bk as g,rr as h,Hr as i,Qr as j,i0 as k,O1 as l,Fr as m,ms as n,fC as o,G1 as p,lv as q,bl as r,GI as s,K1 as t,Qe as u,ei as v,Za as w,ln as x,bB as y,mt as z};
//# sourceMappingURL=SideBar-1a41b09b.js.map
