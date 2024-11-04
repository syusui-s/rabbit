import{s as me,t as $,a6 as q,aP as we,aJ as it,aL as xt,u as St,c as et,q as Kt,a as C,i as B,h as x,r as z,b as Y,d as ye,j as Bt,ab as ve,M as D,f as K,S as Ft,Z as pe,o as be,ak as Ee,v as Ce,n as _e}from"./index-BVf4r0yG.js";import{i as Pe,B as Se,u as Be}from"./useFollowings-C79CIKfh.js";import{B as Me}from"./BasicModal-BYqMjDE2.js";import{y as qt,e as Te,b as Ie,f as Yt,U as Ne,D as Ae}from"./SideBar-DnU0BYoq.js";import{C as Le}from"./Copy-BDBCcDSV.js";import{b as Gt,L as Re,p as $e,l as Ue,a as ke,u as De,Z as ze}from"./lud16ToLnurlPayUrl-apBcZTIG.js";import"./LazyLoad-Css1G575.js";import"./SafeLink-BwTb9jlA.js";import"./url-DPIb-kBm.js";import"./resolveAsset-kpI0-Peu.js";import"./_baseClone-NdSDvMYL.js";const xe=$('<svg xmlns=http://www.w3.org/2000/svg fill=currentColor aria-hidden=true data-slot=icon viewBox="0 0 24 24"><path fill-rule=evenodd d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207"clip-rule=evenodd>'),Fe=(t={})=>(()=>{const e=xe();return me(e,t,!0),e})();var rt={},je=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Zt={},L={};let Mt;const Oe=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];L.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};L.getSymbolTotalCodewords=function(e){return Oe[e]};L.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};L.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');Mt=e};L.isKanjiModeEnabled=function(){return typeof Mt<"u"};L.toSJIS=function(e){return Mt(e)};var ct={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+o)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,n){if(t.isValid(r))return r;try{return e(r)}catch{return n}}})(ct);function Qt(){this.buffer=[],this.length=0}Qt.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let o=0;o<e;o++)this.putBit((t>>>e-o-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var Ve=Qt;function ot(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}ot.prototype.set=function(t,e,o,r){const n=t*this.size+e;this.data[n]=o,r&&(this.reservedBit[n]=!0)};ot.prototype.get=function(t,e){return this.data[t*this.size+e]};ot.prototype.xor=function(t,e,o){this.data[t*this.size+e]^=o};ot.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var He=ot,Wt={};(function(t){const e=L.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const n=Math.floor(r/7)+2,i=e(r),s=i===145?26:Math.ceil((i-13)/(2*n-2))*2,l=[i-7];for(let a=1;a<n-1;a++)l[a]=l[a-1]-s;return l.push(6),l.reverse()},t.getPositions=function(r){const n=[],i=t.getRowColCoords(r),s=i.length;for(let l=0;l<s;l++)for(let a=0;a<s;a++)l===0&&a===0||l===0&&a===s-1||l===s-1&&a===0||n.push([i[l],i[a]]);return n}})(Wt);var Xt={};const Je=L.getSymbolSize,jt=7;Xt.getPositions=function(e){const o=Je(e);return[[0,0],[o-jt,0],[0,o-jt]]};var te={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},t.from=function(n){return t.isValid(n)?parseInt(n,10):void 0},t.getPenaltyN1=function(n){const i=n.size;let s=0,l=0,a=0,u=null,c=null;for(let b=0;b<i;b++){l=a=0,u=c=null;for(let d=0;d<i;d++){let f=n.get(b,d);f===u?l++:(l>=5&&(s+=e.N1+(l-5)),u=f,l=1),f=n.get(d,b),f===c?a++:(a>=5&&(s+=e.N1+(a-5)),c=f,a=1)}l>=5&&(s+=e.N1+(l-5)),a>=5&&(s+=e.N1+(a-5))}return s},t.getPenaltyN2=function(n){const i=n.size;let s=0;for(let l=0;l<i-1;l++)for(let a=0;a<i-1;a++){const u=n.get(l,a)+n.get(l,a+1)+n.get(l+1,a)+n.get(l+1,a+1);(u===4||u===0)&&s++}return s*e.N2},t.getPenaltyN3=function(n){const i=n.size;let s=0,l=0,a=0;for(let u=0;u<i;u++){l=a=0;for(let c=0;c<i;c++)l=l<<1&2047|n.get(u,c),c>=10&&(l===1488||l===93)&&s++,a=a<<1&2047|n.get(c,u),c>=10&&(a===1488||a===93)&&s++}return s*e.N3},t.getPenaltyN4=function(n){let i=0;const s=n.data.length;for(let a=0;a<s;a++)i+=n.data[a];return Math.abs(Math.ceil(i*100/s/5)-10)*e.N4};function o(r,n,i){switch(r){case t.Patterns.PATTERN000:return(n+i)%2===0;case t.Patterns.PATTERN001:return n%2===0;case t.Patterns.PATTERN010:return i%3===0;case t.Patterns.PATTERN011:return(n+i)%3===0;case t.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(i/3))%2===0;case t.Patterns.PATTERN101:return n*i%2+n*i%3===0;case t.Patterns.PATTERN110:return(n*i%2+n*i%3)%2===0;case t.Patterns.PATTERN111:return(n*i%3+(n+i)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(n,i){const s=i.size;for(let l=0;l<s;l++)for(let a=0;a<s;a++)i.isReserved(a,l)||i.xor(a,l,o(n,a,l))},t.getBestMask=function(n,i){const s=Object.keys(t.Patterns).length;let l=0,a=1/0;for(let u=0;u<s;u++){i(u),t.applyMask(u,n);const c=t.getPenaltyN1(n)+t.getPenaltyN2(n)+t.getPenaltyN3(n)+t.getPenaltyN4(n);t.applyMask(u,n),c<a&&(a=c,l=u)}return l}})(te);var dt={};const F=ct,st=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],at=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];dt.getBlocksCount=function(e,o){switch(o){case F.L:return st[(e-1)*4+0];case F.M:return st[(e-1)*4+1];case F.Q:return st[(e-1)*4+2];case F.H:return st[(e-1)*4+3];default:return}};dt.getTotalCodewordsCount=function(e,o){switch(o){case F.L:return at[(e-1)*4+0];case F.M:return at[(e-1)*4+1];case F.Q:return at[(e-1)*4+2];case F.H:return at[(e-1)*4+3];default:return}};var ee={},ft={};const tt=new Uint8Array(512),lt=new Uint8Array(256);(function(){let e=1;for(let o=0;o<255;o++)tt[o]=e,lt[e]=o,e<<=1,e&256&&(e^=285);for(let o=255;o<512;o++)tt[o]=tt[o-255]})();ft.log=function(e){if(e<1)throw new Error("log("+e+")");return lt[e]};ft.exp=function(e){return tt[e]};ft.mul=function(e,o){return e===0||o===0?0:tt[lt[e]+lt[o]]};(function(t){const e=ft;t.mul=function(r,n){const i=new Uint8Array(r.length+n.length-1);for(let s=0;s<r.length;s++)for(let l=0;l<n.length;l++)i[s+l]^=e.mul(r[s],n[l]);return i},t.mod=function(r,n){let i=new Uint8Array(r);for(;i.length-n.length>=0;){const s=i[0];for(let a=0;a<n.length;a++)i[a]^=e.mul(n[a],s);let l=0;for(;l<i.length&&i[l]===0;)l++;i=i.slice(l)}return i},t.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let i=0;i<r;i++)n=t.mul(n,new Uint8Array([1,e.exp(i)]));return n}})(ee);const ne=ee;function Tt(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Tt.prototype.initialize=function(e){this.degree=e,this.genPoly=ne.generateECPolynomial(this.degree)};Tt.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const o=new Uint8Array(e.length+this.degree);o.set(e);const r=ne.mod(o,this.genPoly),n=this.degree-r.length;if(n>0){const i=new Uint8Array(this.degree);return i.set(r,n),i}return r};var Ke=Tt,re={},j={},It={};It.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var U={};const oe="[0-9]+",qe="[A-Z $%*+\\-./:]+";let nt="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";nt=nt.replace(/u/g,"\\u");const Ye="(?:(?![A-Z0-9 $%*+\\-./:]|"+nt+`)(?:.|[\r
]))+`;U.KANJI=new RegExp(nt,"g");U.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");U.BYTE=new RegExp(Ye,"g");U.NUMERIC=new RegExp(oe,"g");U.ALPHANUMERIC=new RegExp(qe,"g");const Ge=new RegExp("^"+nt+"$"),Ze=new RegExp("^"+oe+"$"),Qe=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");U.testKanji=function(e){return Ge.test(e)};U.testNumeric=function(e){return Ze.test(e)};U.testAlphanumeric=function(e){return Qe.test(e)};(function(t){const e=It,o=U;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(i,s){if(!i.ccBits)throw new Error("Invalid mode: "+i);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?i.ccBits[0]:s<27?i.ccBits[1]:i.ccBits[2]},t.getBestModeForData=function(i){return o.testNumeric(i)?t.NUMERIC:o.testAlphanumeric(i)?t.ALPHANUMERIC:o.testKanji(i)?t.KANJI:t.BYTE},t.toString=function(i){if(i&&i.id)return i.id;throw new Error("Invalid mode")},t.isValid=function(i){return i&&i.bit&&i.ccBits};function r(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+n)}}t.from=function(i,s){if(t.isValid(i))return i;try{return r(i)}catch{return s}}})(j);(function(t){const e=L,o=dt,r=ct,n=j,i=It,s=7973,l=e.getBCHDigit(s);function a(d,f,y){for(let p=1;p<=40;p++)if(f<=t.getCapacity(p,y,d))return p}function u(d,f){return n.getCharCountIndicator(d,f)+4}function c(d,f){let y=0;return d.forEach(function(p){const S=u(p.mode,f);y+=S+p.getBitsLength()}),y}function b(d,f){for(let y=1;y<=40;y++)if(c(d,y)<=t.getCapacity(y,f,n.MIXED))return y}t.from=function(f,y){return i.isValid(f)?parseInt(f,10):y},t.getCapacity=function(f,y,p){if(!i.isValid(f))throw new Error("Invalid QR Code version");typeof p>"u"&&(p=n.BYTE);const S=e.getSymbolTotalCodewords(f),m=o.getTotalCodewordsCount(f,y),v=(S-m)*8;if(p===n.MIXED)return v;const h=v-u(p,f);switch(p){case n.NUMERIC:return Math.floor(h/10*3);case n.ALPHANUMERIC:return Math.floor(h/11*2);case n.KANJI:return Math.floor(h/13);case n.BYTE:default:return Math.floor(h/8)}},t.getBestVersionForData=function(f,y){let p;const S=r.from(y,r.M);if(Array.isArray(f)){if(f.length>1)return b(f,S);if(f.length===0)return 1;p=f[0]}else p=f;return a(p.mode,p.getLength(),S)},t.getEncodedBits=function(f){if(!i.isValid(f)||f<7)throw new Error("Invalid QR Code version");let y=f<<12;for(;e.getBCHDigit(y)-l>=0;)y^=s<<e.getBCHDigit(y)-l;return f<<12|y}})(re);var ie={};const bt=L,se=1335,We=21522,Ot=bt.getBCHDigit(se);ie.getEncodedBits=function(e,o){const r=e.bit<<3|o;let n=r<<10;for(;bt.getBCHDigit(n)-Ot>=0;)n^=se<<bt.getBCHDigit(n)-Ot;return(r<<10|n)^We};var ae={};const Xe=j;function G(t){this.mode=Xe.NUMERIC,this.data=t.toString()}G.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};G.prototype.getLength=function(){return this.data.length};G.prototype.getBitsLength=function(){return G.getBitsLength(this.data.length)};G.prototype.write=function(e){let o,r,n;for(o=0;o+3<=this.data.length;o+=3)r=this.data.substr(o,3),n=parseInt(r,10),e.put(n,10);const i=this.data.length-o;i>0&&(r=this.data.substr(o),n=parseInt(r,10),e.put(n,i*3+1))};var tn=G;const en=j,mt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Z(t){this.mode=en.ALPHANUMERIC,this.data=t}Z.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Z.prototype.getLength=function(){return this.data.length};Z.prototype.getBitsLength=function(){return Z.getBitsLength(this.data.length)};Z.prototype.write=function(e){let o;for(o=0;o+2<=this.data.length;o+=2){let r=mt.indexOf(this.data[o])*45;r+=mt.indexOf(this.data[o+1]),e.put(r,11)}this.data.length%2&&e.put(mt.indexOf(this.data[o]),6)};var nn=Z;const rn=j;function Q(t){this.mode=rn.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}Q.getBitsLength=function(e){return e*8};Q.prototype.getLength=function(){return this.data.length};Q.prototype.getBitsLength=function(){return Q.getBitsLength(this.data.length)};Q.prototype.write=function(t){for(let e=0,o=this.data.length;e<o;e++)t.put(this.data[e],8)};var on=Q;const sn=j,an=L;function W(t){this.mode=sn.KANJI,this.data=t}W.getBitsLength=function(e){return e*13};W.prototype.getLength=function(){return this.data.length};W.prototype.getBitsLength=function(){return W.getBitsLength(this.data.length)};W.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let o=an.toSJIS(this.data[e]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),t.put(o,13)}};var ln=W,le={exports:{}};(function(t){var e={single_source_shortest_paths:function(o,r,n){var i={},s={};s[r]=0;var l=e.PriorityQueue.make();l.push(r,0);for(var a,u,c,b,d,f,y,p,S;!l.empty();){a=l.pop(),u=a.value,b=a.cost,d=o[u]||{};for(c in d)d.hasOwnProperty(c)&&(f=d[c],y=b+f,p=s[c],S=typeof s[c]>"u",(S||p>y)&&(s[c]=y,l.push(c,y),i[c]=u))}if(typeof n<"u"&&typeof s[n]>"u"){var m=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(m)}return i},extract_shortest_path_from_predecessor_list:function(o,r){for(var n=[],i=r;i;)n.push(i),o[i],i=o[i];return n.reverse(),n},find_path:function(o,r,n){var i=e.single_source_shortest_paths(o,r,n);return e.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(o){var r=e.PriorityQueue,n={},i;o=o||{};for(i in r)r.hasOwnProperty(i)&&(n[i]=r[i]);return n.queue=[],n.sorter=o.sorter||r.default_sorter,n},default_sorter:function(o,r){return o.cost-r.cost},push:function(o,r){var n={value:o,cost:r};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(le);var un=le.exports;(function(t){const e=j,o=tn,r=nn,n=on,i=ln,s=U,l=L,a=un;function u(m){return unescape(encodeURIComponent(m)).length}function c(m,v,h){const g=[];let _;for(;(_=m.exec(h))!==null;)g.push({data:_[0],index:_.index,mode:v,length:_[0].length});return g}function b(m){const v=c(s.NUMERIC,e.NUMERIC,m),h=c(s.ALPHANUMERIC,e.ALPHANUMERIC,m);let g,_;return l.isKanjiModeEnabled()?(g=c(s.BYTE,e.BYTE,m),_=c(s.KANJI,e.KANJI,m)):(g=c(s.BYTE_KANJI,e.BYTE,m),_=[]),v.concat(h,g,_).sort(function(P,M){return P.index-M.index}).map(function(P){return{data:P.data,mode:P.mode,length:P.length}})}function d(m,v){switch(v){case e.NUMERIC:return o.getBitsLength(m);case e.ALPHANUMERIC:return r.getBitsLength(m);case e.KANJI:return i.getBitsLength(m);case e.BYTE:return n.getBitsLength(m)}}function f(m){return m.reduce(function(v,h){const g=v.length-1>=0?v[v.length-1]:null;return g&&g.mode===h.mode?(v[v.length-1].data+=h.data,v):(v.push(h),v)},[])}function y(m){const v=[];for(let h=0;h<m.length;h++){const g=m[h];switch(g.mode){case e.NUMERIC:v.push([g,{data:g.data,mode:e.ALPHANUMERIC,length:g.length},{data:g.data,mode:e.BYTE,length:g.length}]);break;case e.ALPHANUMERIC:v.push([g,{data:g.data,mode:e.BYTE,length:g.length}]);break;case e.KANJI:v.push([g,{data:g.data,mode:e.BYTE,length:u(g.data)}]);break;case e.BYTE:v.push([{data:g.data,mode:e.BYTE,length:u(g.data)}])}}return v}function p(m,v){const h={},g={start:{}};let _=["start"];for(let w=0;w<m.length;w++){const P=m[w],M=[];for(let A=0;A<P.length;A++){const I=P[A],R=""+w+A;M.push(R),h[R]={node:I,lastCount:0},g[R]={};for(let k=0;k<_.length;k++){const N=_[k];h[N]&&h[N].node.mode===I.mode?(g[N][R]=d(h[N].lastCount+I.length,I.mode)-d(h[N].lastCount,I.mode),h[N].lastCount+=I.length):(h[N]&&(h[N].lastCount=I.length),g[N][R]=d(I.length,I.mode)+4+e.getCharCountIndicator(I.mode,v))}}_=M}for(let w=0;w<_.length;w++)g[_[w]].end=0;return{map:g,table:h}}function S(m,v){let h;const g=e.getBestModeForData(m);if(h=e.from(v,g),h!==e.BYTE&&h.bit<g.bit)throw new Error('"'+m+'" cannot be encoded with mode '+e.toString(h)+`.
 Suggested mode is: `+e.toString(g));switch(h===e.KANJI&&!l.isKanjiModeEnabled()&&(h=e.BYTE),h){case e.NUMERIC:return new o(m);case e.ALPHANUMERIC:return new r(m);case e.KANJI:return new i(m);case e.BYTE:return new n(m)}}t.fromArray=function(v){return v.reduce(function(h,g){return typeof g=="string"?h.push(S(g,null)):g.data&&h.push(S(g.data,g.mode)),h},[])},t.fromString=function(v,h){const g=b(v,l.isKanjiModeEnabled()),_=y(g),w=p(_,h),P=a.find_path(w.map,"start","end"),M=[];for(let A=1;A<P.length-1;A++)M.push(w.table[P[A]].node);return t.fromArray(f(M))},t.rawSplit=function(v){return t.fromArray(b(v,l.isKanjiModeEnabled()))}})(ae);const gt=L,wt=ct,cn=Ve,dn=He,fn=Wt,gn=Xt,Et=te,Ct=dt,hn=Ke,ut=re,mn=ie,wn=j,yt=ae;function yn(t,e){const o=t.size,r=gn.getPositions(e);for(let n=0;n<r.length;n++){const i=r[n][0],s=r[n][1];for(let l=-1;l<=7;l++)if(!(i+l<=-1||o<=i+l))for(let a=-1;a<=7;a++)s+a<=-1||o<=s+a||(l>=0&&l<=6&&(a===0||a===6)||a>=0&&a<=6&&(l===0||l===6)||l>=2&&l<=4&&a>=2&&a<=4?t.set(i+l,s+a,!0,!0):t.set(i+l,s+a,!1,!0))}}function vn(t){const e=t.size;for(let o=8;o<e-8;o++){const r=o%2===0;t.set(o,6,r,!0),t.set(6,o,r,!0)}}function pn(t,e){const o=fn.getPositions(e);for(let r=0;r<o.length;r++){const n=o[r][0],i=o[r][1];for(let s=-2;s<=2;s++)for(let l=-2;l<=2;l++)s===-2||s===2||l===-2||l===2||s===0&&l===0?t.set(n+s,i+l,!0,!0):t.set(n+s,i+l,!1,!0)}}function bn(t,e){const o=t.size,r=ut.getEncodedBits(e);let n,i,s;for(let l=0;l<18;l++)n=Math.floor(l/3),i=l%3+o-8-3,s=(r>>l&1)===1,t.set(n,i,s,!0),t.set(i,n,s,!0)}function vt(t,e,o){const r=t.size,n=mn.getEncodedBits(e,o);let i,s;for(i=0;i<15;i++)s=(n>>i&1)===1,i<6?t.set(i,8,s,!0):i<8?t.set(i+1,8,s,!0):t.set(r-15+i,8,s,!0),i<8?t.set(8,r-i-1,s,!0):i<9?t.set(8,15-i-1+1,s,!0):t.set(8,15-i-1,s,!0);t.set(r-8,8,1,!0)}function En(t,e){const o=t.size;let r=-1,n=o-1,i=7,s=0;for(let l=o-1;l>0;l-=2)for(l===6&&l--;;){for(let a=0;a<2;a++)if(!t.isReserved(n,l-a)){let u=!1;s<e.length&&(u=(e[s]>>>i&1)===1),t.set(n,l-a,u),i--,i===-1&&(s++,i=7)}if(n+=r,n<0||o<=n){n-=r,r=-r;break}}}function Cn(t,e,o){const r=new cn;o.forEach(function(a){r.put(a.mode.bit,4),r.put(a.getLength(),wn.getCharCountIndicator(a.mode,t)),a.write(r)});const n=gt.getSymbolTotalCodewords(t),i=Ct.getTotalCodewordsCount(t,e),s=(n-i)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const l=(s-r.getLengthInBits())/8;for(let a=0;a<l;a++)r.put(a%2?17:236,8);return _n(r,t,e)}function _n(t,e,o){const r=gt.getSymbolTotalCodewords(e),n=Ct.getTotalCodewordsCount(e,o),i=r-n,s=Ct.getBlocksCount(e,o),l=r%s,a=s-l,u=Math.floor(r/s),c=Math.floor(i/s),b=c+1,d=u-c,f=new hn(d);let y=0;const p=new Array(s),S=new Array(s);let m=0;const v=new Uint8Array(t.buffer);for(let P=0;P<s;P++){const M=P<a?c:b;p[P]=v.slice(y,y+M),S[P]=f.encode(p[P]),y+=M,m=Math.max(m,M)}const h=new Uint8Array(r);let g=0,_,w;for(_=0;_<m;_++)for(w=0;w<s;w++)_<p[w].length&&(h[g++]=p[w][_]);for(_=0;_<d;_++)for(w=0;w<s;w++)h[g++]=S[w][_];return h}function Pn(t,e,o,r){let n;if(Array.isArray(t))n=yt.fromArray(t);else if(typeof t=="string"){let u=e;if(!u){const c=yt.rawSplit(t);u=ut.getBestVersionForData(c,o)}n=yt.fromString(t,u||40)}else throw new Error("Invalid data");const i=ut.getBestVersionForData(n,o);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=i;else if(e<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=Cn(e,o,n),l=gt.getSymbolSize(e),a=new dn(l);return yn(a,e),vn(a),pn(a,e),vt(a,o,0),e>=7&&bn(a,e),En(a,s),isNaN(r)&&(r=Et.getBestMask(a,vt.bind(null,a,o))),Et.applyMask(r,a),vt(a,o,r),{modules:a,version:e,errorCorrectionLevel:o,maskPattern:r,segments:n}}Zt.create=function(e,o){if(typeof e>"u"||e==="")throw new Error("No input text");let r=wt.M,n,i;return typeof o<"u"&&(r=wt.from(o.errorCorrectionLevel,wt.M),n=ut.from(o.version),i=Et.from(o.maskPattern),o.toSJISFunc&&gt.setToSJISFunction(o.toSJISFunc)),Pn(e,n,r,i)};var ue={},Nt={};(function(t){function e(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let r=o.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+o);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(i){return[i,i]}))),r.length===6&&r.push("F","F");const n=parseInt(r.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:n&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const n=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,i=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:i,scale:i?4:s,margin:n,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,n){return n.width&&n.width>=r+n.margin*2?n.width/(r+n.margin*2):n.scale},t.getImageWidth=function(r,n){const i=t.getScale(r,n);return Math.floor((r+n.margin*2)*i)},t.qrToImageData=function(r,n,i){const s=n.modules.size,l=n.modules.data,a=t.getScale(s,i),u=Math.floor((s+i.margin*2)*a),c=i.margin*a,b=[i.color.light,i.color.dark];for(let d=0;d<u;d++)for(let f=0;f<u;f++){let y=(d*u+f)*4,p=i.color.light;if(d>=c&&f>=c&&d<u-c&&f<u-c){const S=Math.floor((d-c)/a),m=Math.floor((f-c)/a);p=b[l[S*s+m]?1:0]}r[y++]=p.r,r[y++]=p.g,r[y++]=p.b,r[y]=p.a}}})(Nt);(function(t){const e=Nt;function o(n,i,s){n.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(i,s,l){let a=l,u=s;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),s||(u=r()),a=e.getOptions(a);const c=e.getImageWidth(i.modules.size,a),b=u.getContext("2d"),d=b.createImageData(c,c);return e.qrToImageData(d.data,i,a),o(b,u,c),b.putImageData(d,0,0),u},t.renderToDataURL=function(i,s,l){let a=l;typeof a>"u"&&(!s||!s.getContext)&&(a=s,s=void 0),a||(a={});const u=t.render(i,s,a),c=a.type||"image/png",b=a.rendererOpts||{};return u.toDataURL(c,b.quality)}})(ue);var ce={};const Sn=Nt;function Vt(t,e){const o=t.a/255,r=e+'="'+t.hex+'"';return o<1?r+" "+e+'-opacity="'+o.toFixed(2).slice(1)+'"':r}function pt(t,e,o){let r=t+e;return typeof o<"u"&&(r+=" "+o),r}function Bn(t,e,o){let r="",n=0,i=!1,s=0;for(let l=0;l<t.length;l++){const a=Math.floor(l%e),u=Math.floor(l/e);!a&&!i&&(i=!0),t[l]?(s++,l>0&&a>0&&t[l-1]||(r+=i?pt("M",a+o,.5+u+o):pt("m",n,0),n=0,i=!1),a+1<e&&t[l+1]||(r+=pt("h",s),s=0)):n++}return r}ce.render=function(e,o,r){const n=Sn.getOptions(o),i=e.modules.size,s=e.modules.data,l=i+n.margin*2,a=n.color.light.a?"<path "+Vt(n.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",u="<path "+Vt(n.color.dark,"stroke")+' d="'+Bn(s,i,n.margin)+'"/>',c='viewBox="0 0 '+l+" "+l+'"',d='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+c+' shape-rendering="crispEdges">'+a+u+`</svg>
`;return typeof r=="function"&&r(null,d),d};const Mn=je,_t=Zt,de=ue,Tn=ce;function At(t,e,o,r,n){const i=[].slice.call(arguments,1),s=i.length,l=typeof i[s-1]=="function";if(!l&&!Mn())throw new Error("Callback required as last argument");if(l){if(s<2)throw new Error("Too few arguments provided");s===2?(n=o,o=e,e=r=void 0):s===3&&(e.getContext&&typeof n>"u"?(n=r,r=void 0):(n=r,r=o,o=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(o=e,e=r=void 0):s===2&&!e.getContext&&(r=o,o=e,e=void 0),new Promise(function(a,u){try{const c=_t.create(o,r);a(t(c,e,r))}catch(c){u(c)}})}try{const a=_t.create(o,r);n(null,t(a,e,r))}catch(a){n(a)}}rt.create=_t.create;rt.toCanvas=At.bind(null,de.render);rt.toDataURL=At.bind(null,de.renderToDataURL);rt.toString=At.bind(null,function(t,e,o){return Tn.render(t,o)});var fe={},ht={},T={},V=q&&q.__extends||function(){var t=function(e,o){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])},t(e,o)};return function(e,o){if(typeof o!="function"&&o!==null)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");t(e,o);function r(){this.constructor=e}e.prototype=o===null?Object.create(o):(r.prototype=o.prototype,new r)}}();Object.defineProperty(T,"__esModule",{value:!0});T.InternalError=T.InvalidDataError=T.RoutingError=T.UnsupportedMethodError=T.ConnectionError=T.RejectionError=T.MissingProviderError=void 0;function H(t,e,o){if(Object.setPrototypeOf(t,o.prototype),e===o)if(t.name=e.name,Error.captureStackTrace)Error.captureStackTrace(t,o);else{var r=new Error(t.message).stack;r&&(t.stack=In(r,"new ".concat(e.name)))}}function In(t,e){if(!t||!e)return t;var o=new RegExp("\\s+at\\s".concat(e,"\\s")),r=t.split(`
`),n=r.filter(function(i){return!i.match(o)});return n.join(`
`)}var Nn=function(t){V(e,t);function e(o){var r=this.constructor,n=t.call(this,o)||this;return H(n,r,e),n}return e}(Error);T.MissingProviderError=Nn;var An=function(t){V(e,t);function e(o){var r=this.constructor,n=t.call(this,o)||this;return H(n,r,e),n}return e}(Error);T.RejectionError=An;var Ln=function(t){V(e,t);function e(o){var r=this.constructor,n=t.call(this,o)||this;return H(n,r,e),n}return e}(Error);T.ConnectionError=Ln;var Rn=function(t){V(e,t);function e(o){var r=this.constructor,n=t.call(this,o)||this;return H(n,r,e),n}return e}(Error);T.UnsupportedMethodError=Rn;var $n=function(t){V(e,t);function e(o){var r=this.constructor,n=t.call(this,o)||this;return H(n,r,e),n}return e}(Error);T.RoutingError=$n;var Un=function(t){V(e,t);function e(o){var r=this.constructor,n=t.call(this,o)||this;return H(n,r,e),n}return e}(Error);T.InvalidDataError=Un;var kn=function(t){V(e,t);function e(o){var r=this.constructor,n=t.call(this,o)||this;return H(n,r,e),n}return e}(Error);T.InternalError=kn;Object.defineProperty(ht,"__esModule",{value:!0});ht.requestProvider=void 0;var Dn=T;function zn(t){return new Promise(function(e,o){if(typeof window>"u")return o(new Error("Must be called in a browser context"));var r=window.webln;if(!r)return o(new Dn.MissingProviderError("Your browser has no WebLN provider"));r.enable().then(function(){return e(r)}).catch(function(n){return o(n)})})}ht.requestProvider=zn;var ge={};Object.defineProperty(ge,"__esModule",{value:!0});(function(t){var e=q&&q.__createBinding||(Object.create?function(r,n,i,s){s===void 0&&(s=i);var l=Object.getOwnPropertyDescriptor(n,i);(!l||("get"in l?!n.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return n[i]}}),Object.defineProperty(r,s,l)}:function(r,n,i,s){s===void 0&&(s=i),r[s]=n[i]}),o=q&&q.__exportStar||function(r,n){for(var i in r)i!=="default"&&!Object.prototype.hasOwnProperty.call(n,i)&&e(n,r,i)};Object.defineProperty(t,"__esModule",{value:!0}),o(ht,t),o(ge,t),o(T,t)})(fe);const xn=({pubkey:t,content:e,relays:o,recipientPubkey:r,eventId:n,amountMilliSats:i,lnurlPayUrl:s})=>{if(parseInt(i,10)===0)throw new Error("amount is zero");if(o.length===0)throw new Error("relays is empty");const l=[["relays",...o],["amount",i],["lnurl",Gt(s)],["p",r]];return n!=null&&l.push(["e",n]),{kind:we,pubkey:t,created_at:qt(),tags:l,content:e}},Fn=it.object({pr:it.string(),routes:it.array(it.any()).length(0)}),jn=async({callback:t,lnurlPayUrl:e,amountMilliSats:o,comment:r,zapRequest:n})=>{const i=new URL(t);i.searchParams.set("amount",o.toString()),i.searchParams.set("lnurl",Gt(e)),r!=null&&r.length>0&&i.searchParams.set("comment",r),n!=null&&i.searchParams.set("nostr",JSON.stringify(n));const l=await(await fetch(i,{mode:"cors",redirect:"error"})).json();if(xt(Re)(l))return l;if(!xt(Fn)(l))throw new Error("invalid form of callback response");return l},On=(t,e)=>{const o=$e(t);if(o.millisatoshis!=null&&o.millisatoshis!==e.amountMilliSats)throw new Error("invalid invoice: amount didn't match")},Vn=$("<canvas width=256 height=256>"),Hn=$('<button type=button class="inline-block rounded bg-primary p-4 font-bold text-primary-fg hover:bg-primary-hover">'),Jn=$('<div class="flex flex-col items-center gap-4"><div class=p-8></div><div class="flex items-center gap-2 ps-5"><textarea class="h-12 w-80 flex-1 select-all whitespace-pre-wrap break-all rounded-md border border-border bg-bg font-mono text-sm ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"readonly></textarea></div><a class="inline-block rounded bg-primary p-4 font-bold text-primary-fg hover:bg-primary-hover">'),Kn=$('<div class="flex flex-col items-center gap-4 py-8"><span class="inline-block size-28 rounded-full border-4 border-primary p-4 text-primary"></span><div class="text-secondary text-xl">'),Ht=$('<div class="pb-8 text-center">'),qn=$('<div class="flex flex-col items-center"><div class="flex flex-col items-center overflow-hidden rounded px-8 py-2 text-fg-secondary"><div class=font-bold></div><div></div><div></div></div><div class="w-96 rounded-lg border border-border p-2"></div><form class="mt-4 flex w-64 flex-col items-center gap-1"><label class="flex w-full items-center gap-2"><input type=number name=amountSats class="min-w-0 flex-1 rounded-md border border-border bg-bg text-center text-3xl ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"required><div class="text-center text-xl text-fg-secondary">sats</div></label><input type=text name=comment class="w-full rounded-md border border-border bg-bg ring-border placeholder:text-fg-secondary focus:border-border focus:ring-primary"><button type=submit class="flex w-full items-center justify-center rounded bg-primary py-4 text-primary-fg hover:bg-primary-hover"><span class="inline-block size-6">'),Yn=$('<img class="max-h-64 w-64 rounded object-cover"alt="LNURL service icon">'),Gn=$('<div class="flex justify-center gap-3 pb-2"><button type=button class="rounded border-2 border-primary p-2"></button><button type=button class="rounded border-2 border-primary p-2">'),Zn=$('<div class="px-8 py-12">'),Pt=t=>{if("event"in t)return t.event.pubkey;if("pubkey"in t)return t.pubkey;throw new Error("unexpected ZapTarget")},Qn=t=>"event"in t?t.event:void 0,Wn=()=>{const[t,e]=et(),[o,r]=et("checking");return be(()=>{fe.requestProvider().then(n=>{Ee(()=>{e(n),r("available")})}).catch(n=>{console.warn("failed to request provider",n),r("unavailable")})}),{provider:t,status:o}},Xn=t=>{let e;const{getColorTheme:o}=Bt();return Kt(()=>{if(e==null)return;const r=o();rt.toCanvas(e,t.text,{margin:2,color:{dark:r.brightness==="dark"?"#ffffffff":"#000000ff",light:"#00000000"}}).catch(n=>{console.error(n)})}),(()=>{const r=Vn(),n=e;return typeof n=="function"?_e(n,r):e=r,r})()},tr=t=>{const e=St(),{config:o}=Bt(),r=Wn(),n=()=>`lightning:${t.invoice}`,{events:i}=Be(()=>Yt([t.lnurlPubkey])(([a])=>({relayUrls:o().relayUrls,filters:[{kinds:[pe],authors:a!=null?[a]:void 0,"#p":[t.recipientPubkey],since:qt()}],continuous:!0}))),s=()=>i().find(a=>new ze(a).bolt11().paymentRequest===t.invoice),l=()=>{const a=r.provider();a?.sendPayment(t.invoice).then(()=>{window.alert("success")}).catch(u=>{const c=u instanceof Error?`:${u.message}`:"";window.alert(`failed to send zap: ${c}`)})};return C(x,{get when(){return!s()},get fallback(){return(()=>{const a=Kn(),u=a.firstChild,c=u.nextSibling;return B(u,C(Fe,{})),B(c,()=>e.t("zap.completed")),a})()},get children(){const a=Jn(),u=a.firstChild,c=u.nextSibling,b=c.firstChild,d=c.nextSibling;return B(u,C(Xn,{get text(){return n()}})),B(c,C(Le,{class:"size-5 hover:text-primary",get text(){return t.invoice}}),null),B(d,()=>e.t("zap.sendViaWallet")),B(a,C(x,{get when(){return r.status()==="available"},get children(){const f=Hn();return f.$$click=l,B(f,()=>e.t("zap.sendViaWebLN")),f}}),null),Y(()=>K(d,"href",n())),Y(()=>b.value=t.invoice),a}})},Jt=t=>{const e=St(),o=Ie(),{config:r}=Bt(),[n,i]=et(1),[s,l]=et(""),{endpoint:a,error:u,allowsNostr:c,commentAllowed:b,query:d}=De(()=>Yt([t.lnurlPayUrl])(([w])=>({lnurlPayUrl:w}))),f=()=>{const w=Qn(t.zapTo);if(w!=null)return Ce(w)},y=()=>{const w=f();return w==null?!1:w.findTagsByName("zap").length>0},p=()=>t.lnurlPayUrl==null?null:new URL(t.lnurlPayUrl).host,S=()=>a()?.decodedMetadata?.imageJPEG||a()?.decodedMetadata?.imagePNG,m=()=>Math.ceil((a()?.minSendable??1)/1e3),v=()=>Math.floor((a()?.maxSendable??1)/1e3),h=async()=>{const w=o();if(w==null)return;const P=a();if(P==null||t.lnurlPayUrl==null||n()<m()||n()>v())return;const M=Math.floor(n()*1e3).toString(),{callback:A}=P,I={lnurlPayUrl:t.lnurlPayUrl,callback:A,amountMilliSats:M};if(b()>0&&s().length>0&&s().length<=b()&&(I.comment=s()),c()){const N=xn({amountMilliSats:M,content:s(),pubkey:w,recipientPubkey:Pt(t.zapTo),eventId:f()?.id,relays:r().relayUrls,lnurlPayUrl:t.lnurlPayUrl}),O=await Ae(N);I.zapRequest=O}const R=await jn(I);if(!("pr"in R))throw new Error("failed to get invoice");const k=R.pr;return On(k,{amountMilliSats:M}),k},g=ve(()=>({mutationKey:["getInvoiceMutation",t.zapTo],mutationFn:()=>h()})),_=w=>{w.preventDefault(),g.mutate()};return C(Ft,{get children(){return[C(D,{get when(){return d.isError},get children(){return[z(()=>e.t("zap.fetchingLnUrlEndpointError")),": ",z(()=>d?.error?.message)]}}),C(D,{get when(){return u()},keyed:!0,children:w=>[z(()=>e.t("zap.lnUrlEndpointError")),": ",z(()=>w.reason)]}),C(D,{get when(){return d.isFetching},get children(){return e.t("zap.fetchingLnUrlEndpoint")}}),C(D,{get when(){return g.isPending},get children(){return e.t("zap.fetchingLnUrlInvoice")}}),C(D,{get when(){return g.isError},get children(){return[z(()=>e.t("zap.fetchingLnUrlInvoiceError")),": ",z(()=>g?.error?.message)]}}),C(D,{get when(){return g.isSuccess&&g.data},keyed:!0,children:w=>C(tr,{invoice:w,get recipientPubkey(){return Pt(t.zapTo)},get lnurlPubkey(){return a()?.nostrPubkey}})}),C(D,{get when(){return d.isSuccess},get children(){const w=qn(),P=w.firstChild,M=P.firstChild,A=M.nextSibling,I=A.nextSibling,R=P.nextSibling,k=R.nextSibling,N=k.firstChild,O=N.firstChild,J=N.nextSibling,Lt=J.nextSibling,he=Lt.firstChild;return B(w,C(x,{get when(){return!c()},get children(){const E=Ht();return B(E,()=>e.t("zap.lnurlServiceDoesNotAllowNostr")),E}}),P),B(w,C(x,{get when(){return y()},get children(){const E=Ht();return B(E,()=>e.t("zap.zapSplitIsNotSupported")),E}}),P),B(P,C(x,{get when(){return S()},keyed:!0,children:E=>(()=>{const X=Yn();return K(X,"src",E),X})()}),M),B(M,p),B(A,()=>a()?.decodedMetadata?.textPlain),B(I,()=>a()?.decodedMetadata?.textLongDesc),B(R,C(Ft,{get children(){return[C(D,{get when(){return"event"in t.zapTo&&t.zapTo},keyed:!0,children:E=>C(Pe,{get event(){return E.event},actions:!1,embedding:!1})}),C(D,{get when(){return"pubkey"in t.zapTo&&t.zapTo},keyed:!0,children:E=>C(Ne,{get pubkey(){return E.pubkey}})})]}})),k.addEventListener("submit",_),O.addEventListener("change",E=>i(parseInt(E.target.value,10))),J.addEventListener("change",E=>l(E.target.value)),B(he,C(Se,{})),Y(E=>{const X=m(),Rt=v(),$t=d.isPending,Ut=b()>0?b():70,kt=e.t("zap.comment"),Dt=d.isPending,zt=g.isPending;return X!==E._v$&&K(O,"min",E._v$=X),Rt!==E._v$2&&K(O,"max",E._v$2=Rt),$t!==E._v$3&&(O.disabled=E._v$3=$t),Ut!==E._v$4&&K(J,"maxlength",E._v$4=Ut),kt!==E._v$5&&K(J,"placeholder",E._v$5=kt),Dt!==E._v$6&&(J.disabled=E._v$6=Dt),zt!==E._v$7&&(Lt.disabled=E._v$7=zt),E},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),Y(()=>O.value=n()),Y(()=>J.value=s()),w}})]}})},fr=t=>{const e=St(),o=()=>Pt(t.zapTo),{lud06:r,lud16:n,isZapConfigured:i}=Te(()=>({pubkey:o()})),[s,l]=et();return Kt(()=>{r()!=null?l("lud06"):n()!=null&&l("lud16")}),C(Me,{get onClose(){return t.onClose},get children(){const a=Zn();return B(a,C(x,{get when(){return i()},get fallback(){return e.t("zap.userDidNotConfigureZap")},get children(){return[C(x,{get when(){return z(()=>r()!=null)()&&n()!=null},get children(){const u=Gn(),c=u.firstChild,b=c.nextSibling;return c.$$click=()=>l("lud06"),B(c,()=>e.t("zap.lud06")),b.$$click=()=>l("lud16"),B(b,()=>e.t("zap.lud16")),Y(d=>{const f=s()==="lud06",y=s()==="lud06",p=s()!=="lud06",S=s()!=="lud06",m=s()==="lud16",v=s()==="lud16",h=s()!=="lud16",g=s()!=="lud16";return f!==d._v$8&&c.classList.toggle("bg-primary",d._v$8=f),y!==d._v$9&&c.classList.toggle("text-primary-fg",d._v$9=y),p!==d._v$10&&c.classList.toggle("bg-bg",d._v$10=p),S!==d._v$11&&c.classList.toggle("text-primary",d._v$11=S),m!==d._v$12&&b.classList.toggle("bg-primary",d._v$12=m),v!==d._v$13&&b.classList.toggle("text-primary-fg",d._v$13=v),h!==d._v$14&&b.classList.toggle("bg-bg",d._v$14=h),g!==d._v$15&&b.classList.toggle("text-primary",d._v$15=g),d},{_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0}),u}}),C(x,{get when(){return z(()=>s()==="lud06")()&&r()},keyed:!0,children:u=>C(Jt,{get lnurlPayUrl(){return Ue(u)},get zapTo(){return t.zapTo}})}),C(x,{get when(){return z(()=>s()==="lud16")()&&n()},keyed:!0,children:u=>C(Jt,{get lnurlPayUrl(){return ke(u)},get zapTo(){return t.zapTo}})})]}})),a}})};ye(["click"]);export{fr as default};
//# sourceMappingURL=ZapRequestModal-DW9vZQyR.js.map
