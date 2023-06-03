import{S as $g,s as mu,n as px,i as Sp,a as Tp,t as gx,f as mx,c as vx,r as Ap,b as bx,d as kg,g as yx,u as rs,e as Eg,h as vu,o as yr,j as fn,k as Fs,l as tl,p as Ip,m as Ge,q as j,v as bt,w as $e,x as O,y as $,z as fe,A as We,B as _x,M as ze,C as wx,D as Mn,E as nl,F as gr,G as xx,H as Le,I as $x,J as _r,K as Ut,L as kx,N as vt,O as Ex,P as Cx,Q as Ds,R as Sx,T as Tx}from"./index-4f2c244f.js";import{c as Ki,u as Di,a as Ax,b as Ix,r as Vu,d as Rx}from"./resolveAsset-e5676f51.js";class Ox extends $g{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Rp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return bu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return bu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),mu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Op(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const c=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(px)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Sp||this.currentResult.isStale||!Tp(this.options.staleTime))return;const n=gx(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Sp||this.options.enabled===!1||!Tp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||mx.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,c=this.currentResultState,u=this.currentResultOptions,d=t!==i,h=d?t.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:v,error:_,errorUpdatedAt:k,fetchStatus:x,status:E}=g,w=!1,T=!1,R;if(n._optimisticResults){const U=this.hasListeners(),ee=!U&&Rp(t,n),Z=U&&Op(t,i,n,o);(ee||Z)&&(x=vx(t.options.networkMode)?"fetching":"paused",v||(E="loading")),n._optimisticResults==="isRestoring"&&(x="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&E!=="error")R=p.data,v=p.dataUpdatedAt,E=p.status,w=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===c?.data&&n.select===this.selectFn)R=this.selectResult;else try{this.selectFn=n.select,R=n.select(g.data),R=Ap(a?.data,R,n),this.selectResult=R,this.selectError=null}catch(U){this.selectError=U}else R=g.data;if(typeof n.placeholderData<"u"&&typeof R>"u"&&E==="loading"){let U;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)U=a.data;else if(U=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof U<"u")try{U=n.select(U),this.selectError=null}catch(ee){this.selectError=ee}typeof U<"u"&&(E="success",R=Ap(a?.data,U,n),T=!0)}this.selectError&&(_=this.selectError,R=this.selectResult,k=Date.now(),E="error");const A=x==="fetching",B=E==="loading",C=E==="error";return{status:E,fetchStatus:x,isLoading:B,isSuccess:E==="success",isError:C,isInitialLoading:B&&A,data:R,dataUpdatedAt:v,error:_,errorUpdatedAt:k,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>h.dataUpdateCount||g.errorUpdateCount>h.errorUpdateCount,isFetching:A,isRefetching:A&&!B,isLoadingError:C&&g.dataUpdatedAt===0,isPaused:x==="paused",isPlaceholderData:T,isPreviousData:w,isRefetchError:C&&g.dataUpdatedAt!==0,isStale:Gu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,mu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:c}=this.options;if(c==="all"||!c&&!this.trackedProps.size)return!0;const u=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const h=d;return this.currentResult[h]!==n[h]&&u.has(h)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!bx(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){kg.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var c,u,d,h;(c=(u=this.options).onError)==null||c.call(u,this.currentResult.error),(d=(h=this.options).onSettled)==null||d.call(h,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Lx(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Rp(e,t){return Lx(e,t)||e.state.dataUpdatedAt>0&&bu(e,t,t.refetchOnMount)}function bu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Gu(e,t)}return!1}function Op(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Gu(e,n)}function Gu(e,t){return e.isStaleByTime(t.staleTime)}class Px extends $g{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),mu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:yx(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){kg.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var c,u,d,h;(c=(u=this.mutateOptions).onError)==null||c.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(h=this.mutateOptions).onSettled)==null||d.call(h,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function Bx(e){return typeof e=="function"}function Lp(e,t,n){if(!Bx(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Cg(e,t){return typeof e=="function"?e(...t):!!e}function Mx(e,t){const n=rs({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[c,u]=Ki(a.getOptimisticResult(o)),[d,{refetch:h,mutate:p}]=Eg(()=>new Promise(k=>{c.isFetching&&c.isLoading||(Di(c.data)===i&&k(void 0),k(Di(c.data)))}));vu(()=>{p(()=>Di(c.data)),h()});let g=[];const v=a.subscribe(k=>{g.push(()=>{vu(()=>{const x={...Di(k)};x.data===void 0&&(x.data=i),u(Di(x)),p(()=>Di(k.data)),h()})}),queueMicrotask(()=>{const x=g.pop();x&&x(),g=[]})});yr(()=>v()),fn(()=>{a.setOptions(o,{listeners:!1})}),Fs(()=>{const k=n.defaultQueryOptions(e);a.setOptions(k)}),Fs(tl(()=>c.status,()=>{if(c.isError&&!c.isFetching&&Cg(a.options.useErrorBoundary,[c.error,a.getCurrentQuery()]))throw c.error}));const _={get(k,x){return x==="data"?d():Reflect.get(k,x)}};return new Proxy(c,_)}function is(e,t,n){const[i,o]=Ki(Lp(e,t,n));return Fs(()=>{const a=Lp(e,t,n);o(a)}),Mx(i,Ox)}function mi(e,t,n){const[i,o]=Ki(Ip(e,t,n)),a=rs({context:i.context}),c=new Px(a,i),u=(g,v)=>{c.mutate(g,v).catch(jx)},[d,h]=Ki({...c.getCurrentResult(),mutate:u,mutateAsync:c.getCurrentResult().mutate});Fs(()=>{const g=Ip(e,t,n);o(g),c.setOptions(g)}),Fs(tl(()=>d.status,()=>{if(d.isError&&Cg(c.options.useErrorBoundary,[d.error]))throw d.error}));const p=c.subscribe(g=>{h({...g,mutate:u,mutateAsync:g.mutate})});return yr(p),d}function jx(){}const Ux=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),Sg=(e={})=>(()=>{const t=Ux();return Ge(t,e,!0,!0),t})();var hr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function rl(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var Ta={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ta.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",h=500,p="__lodash_placeholder__",g=1,v=2,_=4,k=1,x=2,E=1,w=2,T=4,R=8,A=16,B=32,C=64,P=128,U=256,ee=512,Z=30,Q="...",q=800,Y=16,ie=1,K=2,D=3,ne=1/0,G=9007199254740991,ae=17976931348623157e292,he=0/0,te=4294967295,ue=te-1,Ne=te>>>1,nt=[["ary",P],["bind",E],["bindKey",w],["curry",R],["curryRight",A],["flip",ee],["partial",B],["partialRight",C],["rearg",U]],Je="[object Arguments]",yt="[object Array]",J="[object AsyncFunction]",Xe="[object Boolean]",oe="[object Date]",Fe="[object DOMException]",ot="[object Error]",Qe="[object Function]",At="[object GeneratorFunction]",Ke="[object Map]",It="[object Number]",En="[object Null]",dt="[object Object]",zt="[object Promise]",er="[object Proxy]",we="[object RegExp]",De="[object Set]",at="[object String]",Et="[object Symbol]",en="[object Undefined]",pe="[object WeakMap]",hn="[object WeakSet]",Oe="[object ArrayBuffer]",rt="[object DataView]",Cn="[object Float32Array]",Sn="[object Float64Array]",pn="[object Int8Array]",Er="[object Int16Array]",$i="[object Int32Array]",ki="[object Uint8Array]",Ei="[object Uint8ClampedArray]",Ml="[object Uint16Array]",jl="[object Uint32Array]",Bv=/\b__p \+= '';/g,Mv=/\b(__p \+=) '' \+/g,jv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Yd=/&(?:amp|lt|gt|quot|#39);/g,Jd=/[&<>"']/g,Uv=RegExp(Yd.source),Nv=RegExp(Jd.source),Dv=/<%-([\s\S]+?)%>/g,zv=/<%([\s\S]+?)%>/g,Xd=/<%=([\s\S]+?)%>/g,Hv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Fv=/^\w*$/,qv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ul=/[\\^$.*+?()[\]{}|]/g,Wv=RegExp(Ul.source),Nl=/^\s+/,Zv=/\s/,Kv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Vv=/\{\n\/\* \[wrapped with (.+)\] \*/,Gv=/,? & /,Qv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Yv=/[()=,{}\[\]\/\s]/,Jv=/\\(\\)?/g,Xv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ef=/\w*$/,e2=/^[-+]0x[0-9a-f]+$/i,t2=/^0b[01]+$/i,n2=/^\[object .+?Constructor\]$/,r2=/^0o[0-7]+$/i,i2=/^(?:0|[1-9]\d*)$/,s2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,xo=/($^)/,o2=/['\n\r\u2028\u2029\\]/g,$o="\\ud800-\\udfff",a2="\\u0300-\\u036f",l2="\\ufe20-\\ufe2f",c2="\\u20d0-\\u20ff",tf=a2+l2+c2,nf="\\u2700-\\u27bf",rf="a-z\\xdf-\\xf6\\xf8-\\xff",u2="\\xac\\xb1\\xd7\\xf7",d2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",f2="\\u2000-\\u206f",h2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",sf="A-Z\\xc0-\\xd6\\xd8-\\xde",of="\\ufe0e\\ufe0f",af=u2+d2+f2+h2,Dl="['’]",p2="["+$o+"]",lf="["+af+"]",ko="["+tf+"]",cf="\\d+",g2="["+nf+"]",uf="["+rf+"]",df="[^"+$o+af+cf+nf+rf+sf+"]",zl="\\ud83c[\\udffb-\\udfff]",m2="(?:"+ko+"|"+zl+")",ff="[^"+$o+"]",Hl="(?:\\ud83c[\\udde6-\\uddff]){2}",Fl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ci="["+sf+"]",hf="\\u200d",pf="(?:"+uf+"|"+df+")",v2="(?:"+Ci+"|"+df+")",gf="(?:"+Dl+"(?:d|ll|m|re|s|t|ve))?",mf="(?:"+Dl+"(?:D|LL|M|RE|S|T|VE))?",vf=m2+"?",bf="["+of+"]?",b2="(?:"+hf+"(?:"+[ff,Hl,Fl].join("|")+")"+bf+vf+")*",y2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",yf=bf+vf+b2,w2="(?:"+[g2,Hl,Fl].join("|")+")"+yf,x2="(?:"+[ff+ko+"?",ko,Hl,Fl,p2].join("|")+")",$2=RegExp(Dl,"g"),k2=RegExp(ko,"g"),ql=RegExp(zl+"(?="+zl+")|"+x2+yf,"g"),E2=RegExp([Ci+"?"+uf+"+"+gf+"(?="+[lf,Ci,"$"].join("|")+")",v2+"+"+mf+"(?="+[lf,Ci+pf,"$"].join("|")+")",Ci+"?"+pf+"+"+gf,Ci+"+"+mf,_2,y2,cf,w2].join("|"),"g"),C2=RegExp("["+hf+$o+tf+of+"]"),S2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,T2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],A2=-1,it={};it[Cn]=it[Sn]=it[pn]=it[Er]=it[$i]=it[ki]=it[Ei]=it[Ml]=it[jl]=!0,it[Je]=it[yt]=it[Oe]=it[Xe]=it[rt]=it[oe]=it[ot]=it[Qe]=it[Ke]=it[It]=it[dt]=it[we]=it[De]=it[at]=it[pe]=!1;var et={};et[Je]=et[yt]=et[Oe]=et[rt]=et[Xe]=et[oe]=et[Cn]=et[Sn]=et[pn]=et[Er]=et[$i]=et[Ke]=et[It]=et[dt]=et[we]=et[De]=et[at]=et[Et]=et[ki]=et[Ei]=et[Ml]=et[jl]=!0,et[ot]=et[Qe]=et[pe]=!1;var I2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},R2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},O2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},L2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},P2=parseFloat,B2=parseInt,_f=typeof hr=="object"&&hr&&hr.Object===Object&&hr,M2=typeof self=="object"&&self&&self.Object===Object&&self,Rt=_f||M2||Function("return this")(),Wl=t&&!t.nodeType&&t,ti=Wl&&!0&&e&&!e.nodeType&&e,wf=ti&&ti.exports===Wl,Zl=wf&&_f.process,gn=function(){try{var L=ti&&ti.require&&ti.require("util").types;return L||Zl&&Zl.binding&&Zl.binding("util")}catch{}}(),xf=gn&&gn.isArrayBuffer,$f=gn&&gn.isDate,kf=gn&&gn.isMap,Ef=gn&&gn.isRegExp,Cf=gn&&gn.isSet,Sf=gn&&gn.isTypedArray;function tn(L,z,N){switch(N.length){case 0:return L.call(z);case 1:return L.call(z,N[0]);case 2:return L.call(z,N[0],N[1]);case 3:return L.call(z,N[0],N[1],N[2])}return L.apply(z,N)}function j2(L,z,N,le){for(var xe=-1,qe=L==null?0:L.length;++xe<qe;){var xt=L[xe];z(le,xt,N(xt),L)}return le}function mn(L,z){for(var N=-1,le=L==null?0:L.length;++N<le&&z(L[N],N,L)!==!1;);return L}function U2(L,z){for(var N=L==null?0:L.length;N--&&z(L[N],N,L)!==!1;);return L}function Tf(L,z){for(var N=-1,le=L==null?0:L.length;++N<le;)if(!z(L[N],N,L))return!1;return!0}function Cr(L,z){for(var N=-1,le=L==null?0:L.length,xe=0,qe=[];++N<le;){var xt=L[N];z(xt,N,L)&&(qe[xe++]=xt)}return qe}function Eo(L,z){var N=L==null?0:L.length;return!!N&&Si(L,z,0)>-1}function Kl(L,z,N){for(var le=-1,xe=L==null?0:L.length;++le<xe;)if(N(z,L[le]))return!0;return!1}function lt(L,z){for(var N=-1,le=L==null?0:L.length,xe=Array(le);++N<le;)xe[N]=z(L[N],N,L);return xe}function Sr(L,z){for(var N=-1,le=z.length,xe=L.length;++N<le;)L[xe+N]=z[N];return L}function Vl(L,z,N,le){var xe=-1,qe=L==null?0:L.length;for(le&&qe&&(N=L[++xe]);++xe<qe;)N=z(N,L[xe],xe,L);return N}function N2(L,z,N,le){var xe=L==null?0:L.length;for(le&&xe&&(N=L[--xe]);xe--;)N=z(N,L[xe],xe,L);return N}function Gl(L,z){for(var N=-1,le=L==null?0:L.length;++N<le;)if(z(L[N],N,L))return!0;return!1}var D2=Ql("length");function z2(L){return L.split("")}function H2(L){return L.match(Qv)||[]}function Af(L,z,N){var le;return N(L,function(xe,qe,xt){if(z(xe,qe,xt))return le=qe,!1}),le}function Co(L,z,N,le){for(var xe=L.length,qe=N+(le?1:-1);le?qe--:++qe<xe;)if(z(L[qe],qe,L))return qe;return-1}function Si(L,z,N){return z===z?eb(L,z,N):Co(L,If,N)}function F2(L,z,N,le){for(var xe=N-1,qe=L.length;++xe<qe;)if(le(L[xe],z))return xe;return-1}function If(L){return L!==L}function Rf(L,z){var N=L==null?0:L.length;return N?Jl(L,z)/N:he}function Ql(L){return function(z){return z==null?n:z[L]}}function Yl(L){return function(z){return L==null?n:L[z]}}function Of(L,z,N,le,xe){return xe(L,function(qe,xt,Ye){N=le?(le=!1,qe):z(N,qe,xt,Ye)}),N}function q2(L,z){var N=L.length;for(L.sort(z);N--;)L[N]=L[N].value;return L}function Jl(L,z){for(var N,le=-1,xe=L.length;++le<xe;){var qe=z(L[le]);qe!==n&&(N=N===n?qe:N+qe)}return N}function Xl(L,z){for(var N=-1,le=Array(L);++N<L;)le[N]=z(N);return le}function W2(L,z){return lt(z,function(N){return[N,L[N]]})}function Lf(L){return L&&L.slice(0,jf(L)+1).replace(Nl,"")}function nn(L){return function(z){return L(z)}}function ec(L,z){return lt(z,function(N){return L[N]})}function ws(L,z){return L.has(z)}function Pf(L,z){for(var N=-1,le=L.length;++N<le&&Si(z,L[N],0)>-1;);return N}function Bf(L,z){for(var N=L.length;N--&&Si(z,L[N],0)>-1;);return N}function Z2(L,z){for(var N=L.length,le=0;N--;)L[N]===z&&++le;return le}var K2=Yl(I2),V2=Yl(R2);function G2(L){return"\\"+L2[L]}function Q2(L,z){return L==null?n:L[z]}function Ti(L){return C2.test(L)}function Y2(L){return S2.test(L)}function J2(L){for(var z,N=[];!(z=L.next()).done;)N.push(z.value);return N}function tc(L){var z=-1,N=Array(L.size);return L.forEach(function(le,xe){N[++z]=[xe,le]}),N}function Mf(L,z){return function(N){return L(z(N))}}function Tr(L,z){for(var N=-1,le=L.length,xe=0,qe=[];++N<le;){var xt=L[N];(xt===z||xt===p)&&(L[N]=p,qe[xe++]=N)}return qe}function So(L){var z=-1,N=Array(L.size);return L.forEach(function(le){N[++z]=le}),N}function X2(L){var z=-1,N=Array(L.size);return L.forEach(function(le){N[++z]=[le,le]}),N}function eb(L,z,N){for(var le=N-1,xe=L.length;++le<xe;)if(L[le]===z)return le;return-1}function tb(L,z,N){for(var le=N+1;le--;)if(L[le]===z)return le;return le}function Ai(L){return Ti(L)?rb(L):D2(L)}function Tn(L){return Ti(L)?ib(L):z2(L)}function jf(L){for(var z=L.length;z--&&Zv.test(L.charAt(z)););return z}var nb=Yl(O2);function rb(L){for(var z=ql.lastIndex=0;ql.test(L);)++z;return z}function ib(L){return L.match(ql)||[]}function sb(L){return L.match(E2)||[]}var ob=function L(z){z=z==null?Rt:Ii.defaults(Rt.Object(),z,Ii.pick(Rt,T2));var N=z.Array,le=z.Date,xe=z.Error,qe=z.Function,xt=z.Math,Ye=z.Object,nc=z.RegExp,ab=z.String,vn=z.TypeError,To=N.prototype,lb=qe.prototype,Ri=Ye.prototype,Ao=z["__core-js_shared__"],Io=lb.toString,Ve=Ri.hasOwnProperty,cb=0,Uf=function(){var r=/[^.]+$/.exec(Ao&&Ao.keys&&Ao.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Ro=Ri.toString,ub=Io.call(Ye),db=Rt._,fb=nc("^"+Io.call(Ve).replace(Ul,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Oo=wf?z.Buffer:n,Ar=z.Symbol,Lo=z.Uint8Array,Nf=Oo?Oo.allocUnsafe:n,Po=Mf(Ye.getPrototypeOf,Ye),Df=Ye.create,zf=Ri.propertyIsEnumerable,Bo=To.splice,Hf=Ar?Ar.isConcatSpreadable:n,xs=Ar?Ar.iterator:n,ni=Ar?Ar.toStringTag:n,Mo=function(){try{var r=ai(Ye,"defineProperty");return r({},"",{}),r}catch{}}(),hb=z.clearTimeout!==Rt.clearTimeout&&z.clearTimeout,pb=le&&le.now!==Rt.Date.now&&le.now,gb=z.setTimeout!==Rt.setTimeout&&z.setTimeout,jo=xt.ceil,Uo=xt.floor,rc=Ye.getOwnPropertySymbols,mb=Oo?Oo.isBuffer:n,Ff=z.isFinite,vb=To.join,bb=Mf(Ye.keys,Ye),$t=xt.max,Bt=xt.min,yb=le.now,_b=z.parseInt,qf=xt.random,wb=To.reverse,ic=ai(z,"DataView"),$s=ai(z,"Map"),sc=ai(z,"Promise"),Oi=ai(z,"Set"),ks=ai(z,"WeakMap"),Es=ai(Ye,"create"),No=ks&&new ks,Li={},xb=li(ic),$b=li($s),kb=li(sc),Eb=li(Oi),Cb=li(ks),Do=Ar?Ar.prototype:n,Cs=Do?Do.valueOf:n,Wf=Do?Do.toString:n;function b(r){if(ft(r)&&!Ee(r)&&!(r instanceof Me)){if(r instanceof bn)return r;if(Ve.call(r,"__wrapped__"))return Zh(r)}return new bn(r)}var Pi=function(){function r(){}return function(s){if(!ct(s))return{};if(Df)return Df(s);r.prototype=s;var l=new r;return r.prototype=n,l}}();function zo(){}function bn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}b.templateSettings={escape:Dv,evaluate:zv,interpolate:Xd,variable:"",imports:{_:b}},b.prototype=zo.prototype,b.prototype.constructor=b,bn.prototype=Pi(zo.prototype),bn.prototype.constructor=bn;function Me(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=te,this.__views__=[]}function Sb(){var r=new Me(this.__wrapped__);return r.__actions__=Gt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Gt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Gt(this.__views__),r}function Tb(){if(this.__filtered__){var r=new Me(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Ab(){var r=this.__wrapped__.value(),s=this.__dir__,l=Ee(r),f=s<0,m=l?r.length:0,y=zy(0,m,this.__views__),S=y.start,I=y.end,M=I-S,H=f?I:S-1,F=this.__iteratees__,V=F.length,re=0,de=Bt(M,this.__takeCount__);if(!l||!f&&m==M&&de==M)return gh(r,this.__actions__);var be=[];e:for(;M--&&re<de;){H+=s;for(var Te=-1,ye=r[H];++Te<V;){var Pe=F[Te],Ue=Pe.iteratee,on=Pe.type,qt=Ue(ye);if(on==K)ye=qt;else if(!qt){if(on==ie)continue e;break e}}be[re++]=ye}return be}Me.prototype=Pi(zo.prototype),Me.prototype.constructor=Me;function ri(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function Ib(){this.__data__=Es?Es(null):{},this.size=0}function Rb(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Ob(r){var s=this.__data__;if(Es){var l=s[r];return l===d?n:l}return Ve.call(s,r)?s[r]:n}function Lb(r){var s=this.__data__;return Es?s[r]!==n:Ve.call(s,r)}function Pb(r,s){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=Es&&s===n?d:s,this}ri.prototype.clear=Ib,ri.prototype.delete=Rb,ri.prototype.get=Ob,ri.prototype.has=Lb,ri.prototype.set=Pb;function tr(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function Bb(){this.__data__=[],this.size=0}function Mb(r){var s=this.__data__,l=Ho(s,r);if(l<0)return!1;var f=s.length-1;return l==f?s.pop():Bo.call(s,l,1),--this.size,!0}function jb(r){var s=this.__data__,l=Ho(s,r);return l<0?n:s[l][1]}function Ub(r){return Ho(this.__data__,r)>-1}function Nb(r,s){var l=this.__data__,f=Ho(l,r);return f<0?(++this.size,l.push([r,s])):l[f][1]=s,this}tr.prototype.clear=Bb,tr.prototype.delete=Mb,tr.prototype.get=jb,tr.prototype.has=Ub,tr.prototype.set=Nb;function nr(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function Db(){this.size=0,this.__data__={hash:new ri,map:new($s||tr),string:new ri}}function zb(r){var s=ea(this,r).delete(r);return this.size-=s?1:0,s}function Hb(r){return ea(this,r).get(r)}function Fb(r){return ea(this,r).has(r)}function qb(r,s){var l=ea(this,r),f=l.size;return l.set(r,s),this.size+=l.size==f?0:1,this}nr.prototype.clear=Db,nr.prototype.delete=zb,nr.prototype.get=Hb,nr.prototype.has=Fb,nr.prototype.set=qb;function ii(r){var s=-1,l=r==null?0:r.length;for(this.__data__=new nr;++s<l;)this.add(r[s])}function Wb(r){return this.__data__.set(r,d),this}function Zb(r){return this.__data__.has(r)}ii.prototype.add=ii.prototype.push=Wb,ii.prototype.has=Zb;function An(r){var s=this.__data__=new tr(r);this.size=s.size}function Kb(){this.__data__=new tr,this.size=0}function Vb(r){var s=this.__data__,l=s.delete(r);return this.size=s.size,l}function Gb(r){return this.__data__.get(r)}function Qb(r){return this.__data__.has(r)}function Yb(r,s){var l=this.__data__;if(l instanceof tr){var f=l.__data__;if(!$s||f.length<o-1)return f.push([r,s]),this.size=++l.size,this;l=this.__data__=new nr(f)}return l.set(r,s),this.size=l.size,this}An.prototype.clear=Kb,An.prototype.delete=Vb,An.prototype.get=Gb,An.prototype.has=Qb,An.prototype.set=Yb;function Zf(r,s){var l=Ee(r),f=!l&&ci(r),m=!l&&!f&&Pr(r),y=!l&&!f&&!m&&Ui(r),S=l||f||m||y,I=S?Xl(r.length,ab):[],M=I.length;for(var H in r)(s||Ve.call(r,H))&&!(S&&(H=="length"||m&&(H=="offset"||H=="parent")||y&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||or(H,M)))&&I.push(H);return I}function Kf(r){var s=r.length;return s?r[mc(0,s-1)]:n}function Jb(r,s){return ta(Gt(r),si(s,0,r.length))}function Xb(r){return ta(Gt(r))}function oc(r,s,l){(l!==n&&!In(r[s],l)||l===n&&!(s in r))&&rr(r,s,l)}function Ss(r,s,l){var f=r[s];(!(Ve.call(r,s)&&In(f,l))||l===n&&!(s in r))&&rr(r,s,l)}function Ho(r,s){for(var l=r.length;l--;)if(In(r[l][0],s))return l;return-1}function ey(r,s,l,f){return Ir(r,function(m,y,S){s(f,m,l(m),S)}),f}function Vf(r,s){return r&&Fn(s,Ct(s),r)}function ty(r,s){return r&&Fn(s,Yt(s),r)}function rr(r,s,l){s=="__proto__"&&Mo?Mo(r,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[s]=l}function ac(r,s){for(var l=-1,f=s.length,m=N(f),y=r==null;++l<f;)m[l]=y?n:zc(r,s[l]);return m}function si(r,s,l){return r===r&&(l!==n&&(r=r<=l?r:l),s!==n&&(r=r>=s?r:s)),r}function yn(r,s,l,f,m,y){var S,I=s&g,M=s&v,H=s&_;if(l&&(S=m?l(r,f,m,y):l(r)),S!==n)return S;if(!ct(r))return r;var F=Ee(r);if(F){if(S=Fy(r),!I)return Gt(r,S)}else{var V=Mt(r),re=V==Qe||V==At;if(Pr(r))return bh(r,I);if(V==dt||V==Je||re&&!m){if(S=M||re?{}:jh(r),!I)return M?Oy(r,ty(S,r)):Ry(r,Vf(S,r))}else{if(!et[V])return m?r:{};S=qy(r,V,I)}}y||(y=new An);var de=y.get(r);if(de)return de;y.set(r,S),fp(r)?r.forEach(function(ye){S.add(yn(ye,s,l,ye,r,y))}):up(r)&&r.forEach(function(ye,Pe){S.set(Pe,yn(ye,s,l,Pe,r,y))});var be=H?M?Sc:Cc:M?Yt:Ct,Te=F?n:be(r);return mn(Te||r,function(ye,Pe){Te&&(Pe=ye,ye=r[Pe]),Ss(S,Pe,yn(ye,s,l,Pe,r,y))}),S}function ny(r){var s=Ct(r);return function(l){return Gf(l,r,s)}}function Gf(r,s,l){var f=l.length;if(r==null)return!f;for(r=Ye(r);f--;){var m=l[f],y=s[m],S=r[m];if(S===n&&!(m in r)||!y(S))return!1}return!0}function Qf(r,s,l){if(typeof r!="function")throw new vn(c);return Ps(function(){r.apply(n,l)},s)}function Ts(r,s,l,f){var m=-1,y=Eo,S=!0,I=r.length,M=[],H=s.length;if(!I)return M;l&&(s=lt(s,nn(l))),f?(y=Kl,S=!1):s.length>=o&&(y=ws,S=!1,s=new ii(s));e:for(;++m<I;){var F=r[m],V=l==null?F:l(F);if(F=f||F!==0?F:0,S&&V===V){for(var re=H;re--;)if(s[re]===V)continue e;M.push(F)}else y(s,V,f)||M.push(F)}return M}var Ir=$h(Hn),Yf=$h(cc,!0);function ry(r,s){var l=!0;return Ir(r,function(f,m,y){return l=!!s(f,m,y),l}),l}function Fo(r,s,l){for(var f=-1,m=r.length;++f<m;){var y=r[f],S=s(y);if(S!=null&&(I===n?S===S&&!sn(S):l(S,I)))var I=S,M=y}return M}function iy(r,s,l,f){var m=r.length;for(l=Ce(l),l<0&&(l=-l>m?0:m+l),f=f===n||f>m?m:Ce(f),f<0&&(f+=m),f=l>f?0:pp(f);l<f;)r[l++]=s;return r}function Jf(r,s){var l=[];return Ir(r,function(f,m,y){s(f,m,y)&&l.push(f)}),l}function Ot(r,s,l,f,m){var y=-1,S=r.length;for(l||(l=Zy),m||(m=[]);++y<S;){var I=r[y];s>0&&l(I)?s>1?Ot(I,s-1,l,f,m):Sr(m,I):f||(m[m.length]=I)}return m}var lc=kh(),Xf=kh(!0);function Hn(r,s){return r&&lc(r,s,Ct)}function cc(r,s){return r&&Xf(r,s,Ct)}function qo(r,s){return Cr(s,function(l){return ar(r[l])})}function oi(r,s){s=Or(s,r);for(var l=0,f=s.length;r!=null&&l<f;)r=r[qn(s[l++])];return l&&l==f?r:n}function eh(r,s,l){var f=s(r);return Ee(r)?f:Sr(f,l(r))}function Ht(r){return r==null?r===n?en:En:ni&&ni in Ye(r)?Dy(r):Xy(r)}function uc(r,s){return r>s}function sy(r,s){return r!=null&&Ve.call(r,s)}function oy(r,s){return r!=null&&s in Ye(r)}function ay(r,s,l){return r>=Bt(s,l)&&r<$t(s,l)}function dc(r,s,l){for(var f=l?Kl:Eo,m=r[0].length,y=r.length,S=y,I=N(y),M=1/0,H=[];S--;){var F=r[S];S&&s&&(F=lt(F,nn(s))),M=Bt(F.length,M),I[S]=!l&&(s||m>=120&&F.length>=120)?new ii(S&&F):n}F=r[0];var V=-1,re=I[0];e:for(;++V<m&&H.length<M;){var de=F[V],be=s?s(de):de;if(de=l||de!==0?de:0,!(re?ws(re,be):f(H,be,l))){for(S=y;--S;){var Te=I[S];if(!(Te?ws(Te,be):f(r[S],be,l)))continue e}re&&re.push(be),H.push(de)}}return H}function ly(r,s,l,f){return Hn(r,function(m,y,S){s(f,l(m),y,S)}),f}function As(r,s,l){s=Or(s,r),r=zh(r,s);var f=r==null?r:r[qn(wn(s))];return f==null?n:tn(f,r,l)}function th(r){return ft(r)&&Ht(r)==Je}function cy(r){return ft(r)&&Ht(r)==Oe}function uy(r){return ft(r)&&Ht(r)==oe}function Is(r,s,l,f,m){return r===s?!0:r==null||s==null||!ft(r)&&!ft(s)?r!==r&&s!==s:dy(r,s,l,f,Is,m)}function dy(r,s,l,f,m,y){var S=Ee(r),I=Ee(s),M=S?yt:Mt(r),H=I?yt:Mt(s);M=M==Je?dt:M,H=H==Je?dt:H;var F=M==dt,V=H==dt,re=M==H;if(re&&Pr(r)){if(!Pr(s))return!1;S=!0,F=!1}if(re&&!F)return y||(y=new An),S||Ui(r)?Ph(r,s,l,f,m,y):Uy(r,s,M,l,f,m,y);if(!(l&k)){var de=F&&Ve.call(r,"__wrapped__"),be=V&&Ve.call(s,"__wrapped__");if(de||be){var Te=de?r.value():r,ye=be?s.value():s;return y||(y=new An),m(Te,ye,l,f,y)}}return re?(y||(y=new An),Ny(r,s,l,f,m,y)):!1}function fy(r){return ft(r)&&Mt(r)==Ke}function fc(r,s,l,f){var m=l.length,y=m,S=!f;if(r==null)return!y;for(r=Ye(r);m--;){var I=l[m];if(S&&I[2]?I[1]!==r[I[0]]:!(I[0]in r))return!1}for(;++m<y;){I=l[m];var M=I[0],H=r[M],F=I[1];if(S&&I[2]){if(H===n&&!(M in r))return!1}else{var V=new An;if(f)var re=f(H,F,M,r,s,V);if(!(re===n?Is(F,H,k|x,f,V):re))return!1}}return!0}function nh(r){if(!ct(r)||Vy(r))return!1;var s=ar(r)?fb:n2;return s.test(li(r))}function hy(r){return ft(r)&&Ht(r)==we}function py(r){return ft(r)&&Mt(r)==De}function gy(r){return ft(r)&&aa(r.length)&&!!it[Ht(r)]}function rh(r){return typeof r=="function"?r:r==null?Jt:typeof r=="object"?Ee(r)?oh(r[0],r[1]):sh(r):Ep(r)}function hc(r){if(!Ls(r))return bb(r);var s=[];for(var l in Ye(r))Ve.call(r,l)&&l!="constructor"&&s.push(l);return s}function my(r){if(!ct(r))return Jy(r);var s=Ls(r),l=[];for(var f in r)f=="constructor"&&(s||!Ve.call(r,f))||l.push(f);return l}function pc(r,s){return r<s}function ih(r,s){var l=-1,f=Qt(r)?N(r.length):[];return Ir(r,function(m,y,S){f[++l]=s(m,y,S)}),f}function sh(r){var s=Ac(r);return s.length==1&&s[0][2]?Nh(s[0][0],s[0][1]):function(l){return l===r||fc(l,r,s)}}function oh(r,s){return Rc(r)&&Uh(s)?Nh(qn(r),s):function(l){var f=zc(l,r);return f===n&&f===s?Hc(l,r):Is(s,f,k|x)}}function Wo(r,s,l,f,m){r!==s&&lc(s,function(y,S){if(m||(m=new An),ct(y))vy(r,s,S,l,Wo,f,m);else{var I=f?f(Lc(r,S),y,S+"",r,s,m):n;I===n&&(I=y),oc(r,S,I)}},Yt)}function vy(r,s,l,f,m,y,S){var I=Lc(r,l),M=Lc(s,l),H=S.get(M);if(H){oc(r,l,H);return}var F=y?y(I,M,l+"",r,s,S):n,V=F===n;if(V){var re=Ee(M),de=!re&&Pr(M),be=!re&&!de&&Ui(M);F=M,re||de||be?Ee(I)?F=I:pt(I)?F=Gt(I):de?(V=!1,F=bh(M,!0)):be?(V=!1,F=yh(M,!0)):F=[]:Bs(M)||ci(M)?(F=I,ci(I)?F=gp(I):(!ct(I)||ar(I))&&(F=jh(M))):V=!1}V&&(S.set(M,F),m(F,M,f,y,S),S.delete(M)),oc(r,l,F)}function ah(r,s){var l=r.length;if(l)return s+=s<0?l:0,or(s,l)?r[s]:n}function lh(r,s,l){s.length?s=lt(s,function(y){return Ee(y)?function(S){return oi(S,y.length===1?y[0]:y)}:y}):s=[Jt];var f=-1;s=lt(s,nn(me()));var m=ih(r,function(y,S,I){var M=lt(s,function(H){return H(y)});return{criteria:M,index:++f,value:y}});return q2(m,function(y,S){return Iy(y,S,l)})}function by(r,s){return ch(r,s,function(l,f){return Hc(r,f)})}function ch(r,s,l){for(var f=-1,m=s.length,y={};++f<m;){var S=s[f],I=oi(r,S);l(I,S)&&Rs(y,Or(S,r),I)}return y}function yy(r){return function(s){return oi(s,r)}}function gc(r,s,l,f){var m=f?F2:Si,y=-1,S=s.length,I=r;for(r===s&&(s=Gt(s)),l&&(I=lt(r,nn(l)));++y<S;)for(var M=0,H=s[y],F=l?l(H):H;(M=m(I,F,M,f))>-1;)I!==r&&Bo.call(I,M,1),Bo.call(r,M,1);return r}function uh(r,s){for(var l=r?s.length:0,f=l-1;l--;){var m=s[l];if(l==f||m!==y){var y=m;or(m)?Bo.call(r,m,1):yc(r,m)}}return r}function mc(r,s){return r+Uo(qf()*(s-r+1))}function _y(r,s,l,f){for(var m=-1,y=$t(jo((s-r)/(l||1)),0),S=N(y);y--;)S[f?y:++m]=r,r+=l;return S}function vc(r,s){var l="";if(!r||s<1||s>G)return l;do s%2&&(l+=r),s=Uo(s/2),s&&(r+=r);while(s);return l}function Ie(r,s){return Pc(Dh(r,s,Jt),r+"")}function wy(r){return Kf(Ni(r))}function xy(r,s){var l=Ni(r);return ta(l,si(s,0,l.length))}function Rs(r,s,l,f){if(!ct(r))return r;s=Or(s,r);for(var m=-1,y=s.length,S=y-1,I=r;I!=null&&++m<y;){var M=qn(s[m]),H=l;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(m!=S){var F=I[M];H=f?f(F,M,I):n,H===n&&(H=ct(F)?F:or(s[m+1])?[]:{})}Ss(I,M,H),I=I[M]}return r}var dh=No?function(r,s){return No.set(r,s),r}:Jt,$y=Mo?function(r,s){return Mo(r,"toString",{configurable:!0,enumerable:!1,value:qc(s),writable:!0})}:Jt;function ky(r){return ta(Ni(r))}function _n(r,s,l){var f=-1,m=r.length;s<0&&(s=-s>m?0:m+s),l=l>m?m:l,l<0&&(l+=m),m=s>l?0:l-s>>>0,s>>>=0;for(var y=N(m);++f<m;)y[f]=r[f+s];return y}function Ey(r,s){var l;return Ir(r,function(f,m,y){return l=s(f,m,y),!l}),!!l}function Zo(r,s,l){var f=0,m=r==null?f:r.length;if(typeof s=="number"&&s===s&&m<=Ne){for(;f<m;){var y=f+m>>>1,S=r[y];S!==null&&!sn(S)&&(l?S<=s:S<s)?f=y+1:m=y}return m}return bc(r,s,Jt,l)}function bc(r,s,l,f){var m=0,y=r==null?0:r.length;if(y===0)return 0;s=l(s);for(var S=s!==s,I=s===null,M=sn(s),H=s===n;m<y;){var F=Uo((m+y)/2),V=l(r[F]),re=V!==n,de=V===null,be=V===V,Te=sn(V);if(S)var ye=f||be;else H?ye=be&&(f||re):I?ye=be&&re&&(f||!de):M?ye=be&&re&&!de&&(f||!Te):de||Te?ye=!1:ye=f?V<=s:V<s;ye?m=F+1:y=F}return Bt(y,ue)}function fh(r,s){for(var l=-1,f=r.length,m=0,y=[];++l<f;){var S=r[l],I=s?s(S):S;if(!l||!In(I,M)){var M=I;y[m++]=S===0?0:S}}return y}function hh(r){return typeof r=="number"?r:sn(r)?he:+r}function rn(r){if(typeof r=="string")return r;if(Ee(r))return lt(r,rn)+"";if(sn(r))return Wf?Wf.call(r):"";var s=r+"";return s=="0"&&1/r==-ne?"-0":s}function Rr(r,s,l){var f=-1,m=Eo,y=r.length,S=!0,I=[],M=I;if(l)S=!1,m=Kl;else if(y>=o){var H=s?null:My(r);if(H)return So(H);S=!1,m=ws,M=new ii}else M=s?[]:I;e:for(;++f<y;){var F=r[f],V=s?s(F):F;if(F=l||F!==0?F:0,S&&V===V){for(var re=M.length;re--;)if(M[re]===V)continue e;s&&M.push(V),I.push(F)}else m(M,V,l)||(M!==I&&M.push(V),I.push(F))}return I}function yc(r,s){return s=Or(s,r),r=zh(r,s),r==null||delete r[qn(wn(s))]}function ph(r,s,l,f){return Rs(r,s,l(oi(r,s)),f)}function Ko(r,s,l,f){for(var m=r.length,y=f?m:-1;(f?y--:++y<m)&&s(r[y],y,r););return l?_n(r,f?0:y,f?y+1:m):_n(r,f?y+1:0,f?m:y)}function gh(r,s){var l=r;return l instanceof Me&&(l=l.value()),Vl(s,function(f,m){return m.func.apply(m.thisArg,Sr([f],m.args))},l)}function _c(r,s,l){var f=r.length;if(f<2)return f?Rr(r[0]):[];for(var m=-1,y=N(f);++m<f;)for(var S=r[m],I=-1;++I<f;)I!=m&&(y[m]=Ts(y[m]||S,r[I],s,l));return Rr(Ot(y,1),s,l)}function mh(r,s,l){for(var f=-1,m=r.length,y=s.length,S={};++f<m;){var I=f<y?s[f]:n;l(S,r[f],I)}return S}function wc(r){return pt(r)?r:[]}function xc(r){return typeof r=="function"?r:Jt}function Or(r,s){return Ee(r)?r:Rc(r,s)?[r]:Wh(Ze(r))}var Cy=Ie;function Lr(r,s,l){var f=r.length;return l=l===n?f:l,!s&&l>=f?r:_n(r,s,l)}var vh=hb||function(r){return Rt.clearTimeout(r)};function bh(r,s){if(s)return r.slice();var l=r.length,f=Nf?Nf(l):new r.constructor(l);return r.copy(f),f}function $c(r){var s=new r.constructor(r.byteLength);return new Lo(s).set(new Lo(r)),s}function Sy(r,s){var l=s?$c(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function Ty(r){var s=new r.constructor(r.source,ef.exec(r));return s.lastIndex=r.lastIndex,s}function Ay(r){return Cs?Ye(Cs.call(r)):{}}function yh(r,s){var l=s?$c(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function _h(r,s){if(r!==s){var l=r!==n,f=r===null,m=r===r,y=sn(r),S=s!==n,I=s===null,M=s===s,H=sn(s);if(!I&&!H&&!y&&r>s||y&&S&&M&&!I&&!H||f&&S&&M||!l&&M||!m)return 1;if(!f&&!y&&!H&&r<s||H&&l&&m&&!f&&!y||I&&l&&m||!S&&m||!M)return-1}return 0}function Iy(r,s,l){for(var f=-1,m=r.criteria,y=s.criteria,S=m.length,I=l.length;++f<S;){var M=_h(m[f],y[f]);if(M){if(f>=I)return M;var H=l[f];return M*(H=="desc"?-1:1)}}return r.index-s.index}function wh(r,s,l,f){for(var m=-1,y=r.length,S=l.length,I=-1,M=s.length,H=$t(y-S,0),F=N(M+H),V=!f;++I<M;)F[I]=s[I];for(;++m<S;)(V||m<y)&&(F[l[m]]=r[m]);for(;H--;)F[I++]=r[m++];return F}function xh(r,s,l,f){for(var m=-1,y=r.length,S=-1,I=l.length,M=-1,H=s.length,F=$t(y-I,0),V=N(F+H),re=!f;++m<F;)V[m]=r[m];for(var de=m;++M<H;)V[de+M]=s[M];for(;++S<I;)(re||m<y)&&(V[de+l[S]]=r[m++]);return V}function Gt(r,s){var l=-1,f=r.length;for(s||(s=N(f));++l<f;)s[l]=r[l];return s}function Fn(r,s,l,f){var m=!l;l||(l={});for(var y=-1,S=s.length;++y<S;){var I=s[y],M=f?f(l[I],r[I],I,l,r):n;M===n&&(M=r[I]),m?rr(l,I,M):Ss(l,I,M)}return l}function Ry(r,s){return Fn(r,Ic(r),s)}function Oy(r,s){return Fn(r,Bh(r),s)}function Vo(r,s){return function(l,f){var m=Ee(l)?j2:ey,y=s?s():{};return m(l,r,me(f,2),y)}}function Bi(r){return Ie(function(s,l){var f=-1,m=l.length,y=m>1?l[m-1]:n,S=m>2?l[2]:n;for(y=r.length>3&&typeof y=="function"?(m--,y):n,S&&Ft(l[0],l[1],S)&&(y=m<3?n:y,m=1),s=Ye(s);++f<m;){var I=l[f];I&&r(s,I,f,y)}return s})}function $h(r,s){return function(l,f){if(l==null)return l;if(!Qt(l))return r(l,f);for(var m=l.length,y=s?m:-1,S=Ye(l);(s?y--:++y<m)&&f(S[y],y,S)!==!1;);return l}}function kh(r){return function(s,l,f){for(var m=-1,y=Ye(s),S=f(s),I=S.length;I--;){var M=S[r?I:++m];if(l(y[M],M,y)===!1)break}return s}}function Ly(r,s,l){var f=s&E,m=Os(r);function y(){var S=this&&this!==Rt&&this instanceof y?m:r;return S.apply(f?l:this,arguments)}return y}function Eh(r){return function(s){s=Ze(s);var l=Ti(s)?Tn(s):n,f=l?l[0]:s.charAt(0),m=l?Lr(l,1).join(""):s.slice(1);return f[r]()+m}}function Mi(r){return function(s){return Vl($p(xp(s).replace($2,"")),r,"")}}function Os(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Pi(r.prototype),f=r.apply(l,s);return ct(f)?f:l}}function Py(r,s,l){var f=Os(r);function m(){for(var y=arguments.length,S=N(y),I=y,M=ji(m);I--;)S[I]=arguments[I];var H=y<3&&S[0]!==M&&S[y-1]!==M?[]:Tr(S,M);if(y-=H.length,y<l)return Ih(r,s,Go,m.placeholder,n,S,H,n,n,l-y);var F=this&&this!==Rt&&this instanceof m?f:r;return tn(F,this,S)}return m}function Ch(r){return function(s,l,f){var m=Ye(s);if(!Qt(s)){var y=me(l,3);s=Ct(s),l=function(I){return y(m[I],I,m)}}var S=r(s,l,f);return S>-1?m[y?s[S]:S]:n}}function Sh(r){return sr(function(s){var l=s.length,f=l,m=bn.prototype.thru;for(r&&s.reverse();f--;){var y=s[f];if(typeof y!="function")throw new vn(c);if(m&&!S&&Xo(y)=="wrapper")var S=new bn([],!0)}for(f=S?f:l;++f<l;){y=s[f];var I=Xo(y),M=I=="wrapper"?Tc(y):n;M&&Oc(M[0])&&M[1]==(P|R|B|U)&&!M[4].length&&M[9]==1?S=S[Xo(M[0])].apply(S,M[3]):S=y.length==1&&Oc(y)?S[I]():S.thru(y)}return function(){var H=arguments,F=H[0];if(S&&H.length==1&&Ee(F))return S.plant(F).value();for(var V=0,re=l?s[V].apply(this,H):F;++V<l;)re=s[V].call(this,re);return re}})}function Go(r,s,l,f,m,y,S,I,M,H){var F=s&P,V=s&E,re=s&w,de=s&(R|A),be=s&ee,Te=re?n:Os(r);function ye(){for(var Pe=arguments.length,Ue=N(Pe),on=Pe;on--;)Ue[on]=arguments[on];if(de)var qt=ji(ye),an=Z2(Ue,qt);if(f&&(Ue=wh(Ue,f,m,de)),y&&(Ue=xh(Ue,y,S,de)),Pe-=an,de&&Pe<H){var gt=Tr(Ue,qt);return Ih(r,s,Go,ye.placeholder,l,Ue,gt,I,M,H-Pe)}var Rn=V?l:this,cr=re?Rn[r]:r;return Pe=Ue.length,I?Ue=e_(Ue,I):be&&Pe>1&&Ue.reverse(),F&&M<Pe&&(Ue.length=M),this&&this!==Rt&&this instanceof ye&&(cr=Te||Os(cr)),cr.apply(Rn,Ue)}return ye}function Th(r,s){return function(l,f){return ly(l,r,s(f),{})}}function Qo(r,s){return function(l,f){var m;if(l===n&&f===n)return s;if(l!==n&&(m=l),f!==n){if(m===n)return f;typeof l=="string"||typeof f=="string"?(l=rn(l),f=rn(f)):(l=hh(l),f=hh(f)),m=r(l,f)}return m}}function kc(r){return sr(function(s){return s=lt(s,nn(me())),Ie(function(l){var f=this;return r(s,function(m){return tn(m,f,l)})})})}function Yo(r,s){s=s===n?" ":rn(s);var l=s.length;if(l<2)return l?vc(s,r):s;var f=vc(s,jo(r/Ai(s)));return Ti(s)?Lr(Tn(f),0,r).join(""):f.slice(0,r)}function By(r,s,l,f){var m=s&E,y=Os(r);function S(){for(var I=-1,M=arguments.length,H=-1,F=f.length,V=N(F+M),re=this&&this!==Rt&&this instanceof S?y:r;++H<F;)V[H]=f[H];for(;M--;)V[H++]=arguments[++I];return tn(re,m?l:this,V)}return S}function Ah(r){return function(s,l,f){return f&&typeof f!="number"&&Ft(s,l,f)&&(l=f=n),s=lr(s),l===n?(l=s,s=0):l=lr(l),f=f===n?s<l?1:-1:lr(f),_y(s,l,f,r)}}function Jo(r){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=xn(s),l=xn(l)),r(s,l)}}function Ih(r,s,l,f,m,y,S,I,M,H){var F=s&R,V=F?S:n,re=F?n:S,de=F?y:n,be=F?n:y;s|=F?B:C,s&=~(F?C:B),s&T||(s&=~(E|w));var Te=[r,s,m,de,V,be,re,I,M,H],ye=l.apply(n,Te);return Oc(r)&&Hh(ye,Te),ye.placeholder=f,Fh(ye,r,s)}function Ec(r){var s=xt[r];return function(l,f){if(l=xn(l),f=f==null?0:Bt(Ce(f),292),f&&Ff(l)){var m=(Ze(l)+"e").split("e"),y=s(m[0]+"e"+(+m[1]+f));return m=(Ze(y)+"e").split("e"),+(m[0]+"e"+(+m[1]-f))}return s(l)}}var My=Oi&&1/So(new Oi([,-0]))[1]==ne?function(r){return new Oi(r)}:Kc;function Rh(r){return function(s){var l=Mt(s);return l==Ke?tc(s):l==De?X2(s):W2(s,r(s))}}function ir(r,s,l,f,m,y,S,I){var M=s&w;if(!M&&typeof r!="function")throw new vn(c);var H=f?f.length:0;if(H||(s&=~(B|C),f=m=n),S=S===n?S:$t(Ce(S),0),I=I===n?I:Ce(I),H-=m?m.length:0,s&C){var F=f,V=m;f=m=n}var re=M?n:Tc(r),de=[r,s,l,f,m,F,V,y,S,I];if(re&&Yy(de,re),r=de[0],s=de[1],l=de[2],f=de[3],m=de[4],I=de[9]=de[9]===n?M?0:r.length:$t(de[9]-H,0),!I&&s&(R|A)&&(s&=~(R|A)),!s||s==E)var be=Ly(r,s,l);else s==R||s==A?be=Py(r,s,I):(s==B||s==(E|B))&&!m.length?be=By(r,s,l,f):be=Go.apply(n,de);var Te=re?dh:Hh;return Fh(Te(be,de),r,s)}function Oh(r,s,l,f){return r===n||In(r,Ri[l])&&!Ve.call(f,l)?s:r}function Lh(r,s,l,f,m,y){return ct(r)&&ct(s)&&(y.set(s,r),Wo(r,s,n,Lh,y),y.delete(s)),r}function jy(r){return Bs(r)?n:r}function Ph(r,s,l,f,m,y){var S=l&k,I=r.length,M=s.length;if(I!=M&&!(S&&M>I))return!1;var H=y.get(r),F=y.get(s);if(H&&F)return H==s&&F==r;var V=-1,re=!0,de=l&x?new ii:n;for(y.set(r,s),y.set(s,r);++V<I;){var be=r[V],Te=s[V];if(f)var ye=S?f(Te,be,V,s,r,y):f(be,Te,V,r,s,y);if(ye!==n){if(ye)continue;re=!1;break}if(de){if(!Gl(s,function(Pe,Ue){if(!ws(de,Ue)&&(be===Pe||m(be,Pe,l,f,y)))return de.push(Ue)})){re=!1;break}}else if(!(be===Te||m(be,Te,l,f,y))){re=!1;break}}return y.delete(r),y.delete(s),re}function Uy(r,s,l,f,m,y,S){switch(l){case rt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Oe:return!(r.byteLength!=s.byteLength||!y(new Lo(r),new Lo(s)));case Xe:case oe:case It:return In(+r,+s);case ot:return r.name==s.name&&r.message==s.message;case we:case at:return r==s+"";case Ke:var I=tc;case De:var M=f&k;if(I||(I=So),r.size!=s.size&&!M)return!1;var H=S.get(r);if(H)return H==s;f|=x,S.set(r,s);var F=Ph(I(r),I(s),f,m,y,S);return S.delete(r),F;case Et:if(Cs)return Cs.call(r)==Cs.call(s)}return!1}function Ny(r,s,l,f,m,y){var S=l&k,I=Cc(r),M=I.length,H=Cc(s),F=H.length;if(M!=F&&!S)return!1;for(var V=M;V--;){var re=I[V];if(!(S?re in s:Ve.call(s,re)))return!1}var de=y.get(r),be=y.get(s);if(de&&be)return de==s&&be==r;var Te=!0;y.set(r,s),y.set(s,r);for(var ye=S;++V<M;){re=I[V];var Pe=r[re],Ue=s[re];if(f)var on=S?f(Ue,Pe,re,s,r,y):f(Pe,Ue,re,r,s,y);if(!(on===n?Pe===Ue||m(Pe,Ue,l,f,y):on)){Te=!1;break}ye||(ye=re=="constructor")}if(Te&&!ye){var qt=r.constructor,an=s.constructor;qt!=an&&"constructor"in r&&"constructor"in s&&!(typeof qt=="function"&&qt instanceof qt&&typeof an=="function"&&an instanceof an)&&(Te=!1)}return y.delete(r),y.delete(s),Te}function sr(r){return Pc(Dh(r,n,Gh),r+"")}function Cc(r){return eh(r,Ct,Ic)}function Sc(r){return eh(r,Yt,Bh)}var Tc=No?function(r){return No.get(r)}:Kc;function Xo(r){for(var s=r.name+"",l=Li[s],f=Ve.call(Li,s)?l.length:0;f--;){var m=l[f],y=m.func;if(y==null||y==r)return m.name}return s}function ji(r){var s=Ve.call(b,"placeholder")?b:r;return s.placeholder}function me(){var r=b.iteratee||Wc;return r=r===Wc?rh:r,arguments.length?r(arguments[0],arguments[1]):r}function ea(r,s){var l=r.__data__;return Ky(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Ac(r){for(var s=Ct(r),l=s.length;l--;){var f=s[l],m=r[f];s[l]=[f,m,Uh(m)]}return s}function ai(r,s){var l=Q2(r,s);return nh(l)?l:n}function Dy(r){var s=Ve.call(r,ni),l=r[ni];try{r[ni]=n;var f=!0}catch{}var m=Ro.call(r);return f&&(s?r[ni]=l:delete r[ni]),m}var Ic=rc?function(r){return r==null?[]:(r=Ye(r),Cr(rc(r),function(s){return zf.call(r,s)}))}:Vc,Bh=rc?function(r){for(var s=[];r;)Sr(s,Ic(r)),r=Po(r);return s}:Vc,Mt=Ht;(ic&&Mt(new ic(new ArrayBuffer(1)))!=rt||$s&&Mt(new $s)!=Ke||sc&&Mt(sc.resolve())!=zt||Oi&&Mt(new Oi)!=De||ks&&Mt(new ks)!=pe)&&(Mt=function(r){var s=Ht(r),l=s==dt?r.constructor:n,f=l?li(l):"";if(f)switch(f){case xb:return rt;case $b:return Ke;case kb:return zt;case Eb:return De;case Cb:return pe}return s});function zy(r,s,l){for(var f=-1,m=l.length;++f<m;){var y=l[f],S=y.size;switch(y.type){case"drop":r+=S;break;case"dropRight":s-=S;break;case"take":s=Bt(s,r+S);break;case"takeRight":r=$t(r,s-S);break}}return{start:r,end:s}}function Hy(r){var s=r.match(Vv);return s?s[1].split(Gv):[]}function Mh(r,s,l){s=Or(s,r);for(var f=-1,m=s.length,y=!1;++f<m;){var S=qn(s[f]);if(!(y=r!=null&&l(r,S)))break;r=r[S]}return y||++f!=m?y:(m=r==null?0:r.length,!!m&&aa(m)&&or(S,m)&&(Ee(r)||ci(r)))}function Fy(r){var s=r.length,l=new r.constructor(s);return s&&typeof r[0]=="string"&&Ve.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function jh(r){return typeof r.constructor=="function"&&!Ls(r)?Pi(Po(r)):{}}function qy(r,s,l){var f=r.constructor;switch(s){case Oe:return $c(r);case Xe:case oe:return new f(+r);case rt:return Sy(r,l);case Cn:case Sn:case pn:case Er:case $i:case ki:case Ei:case Ml:case jl:return yh(r,l);case Ke:return new f;case It:case at:return new f(r);case we:return Ty(r);case De:return new f;case Et:return Ay(r)}}function Wy(r,s){var l=s.length;if(!l)return r;var f=l-1;return s[f]=(l>1?"& ":"")+s[f],s=s.join(l>2?", ":" "),r.replace(Kv,`{
/* [wrapped with `+s+`] */
`)}function Zy(r){return Ee(r)||ci(r)||!!(Hf&&r&&r[Hf])}function or(r,s){var l=typeof r;return s=s??G,!!s&&(l=="number"||l!="symbol"&&i2.test(r))&&r>-1&&r%1==0&&r<s}function Ft(r,s,l){if(!ct(l))return!1;var f=typeof s;return(f=="number"?Qt(l)&&or(s,l.length):f=="string"&&s in l)?In(l[s],r):!1}function Rc(r,s){if(Ee(r))return!1;var l=typeof r;return l=="number"||l=="symbol"||l=="boolean"||r==null||sn(r)?!0:Fv.test(r)||!Hv.test(r)||s!=null&&r in Ye(s)}function Ky(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Oc(r){var s=Xo(r),l=b[s];if(typeof l!="function"||!(s in Me.prototype))return!1;if(r===l)return!0;var f=Tc(l);return!!f&&r===f[0]}function Vy(r){return!!Uf&&Uf in r}var Gy=Ao?ar:Gc;function Ls(r){var s=r&&r.constructor,l=typeof s=="function"&&s.prototype||Ri;return r===l}function Uh(r){return r===r&&!ct(r)}function Nh(r,s){return function(l){return l==null?!1:l[r]===s&&(s!==n||r in Ye(l))}}function Qy(r){var s=sa(r,function(f){return l.size===h&&l.clear(),f}),l=s.cache;return s}function Yy(r,s){var l=r[1],f=s[1],m=l|f,y=m<(E|w|P),S=f==P&&l==R||f==P&&l==U&&r[7].length<=s[8]||f==(P|U)&&s[7].length<=s[8]&&l==R;if(!(y||S))return r;f&E&&(r[2]=s[2],m|=l&E?0:T);var I=s[3];if(I){var M=r[3];r[3]=M?wh(M,I,s[4]):I,r[4]=M?Tr(r[3],p):s[4]}return I=s[5],I&&(M=r[5],r[5]=M?xh(M,I,s[6]):I,r[6]=M?Tr(r[5],p):s[6]),I=s[7],I&&(r[7]=I),f&P&&(r[8]=r[8]==null?s[8]:Bt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function Jy(r){var s=[];if(r!=null)for(var l in Ye(r))s.push(l);return s}function Xy(r){return Ro.call(r)}function Dh(r,s,l){return s=$t(s===n?r.length-1:s,0),function(){for(var f=arguments,m=-1,y=$t(f.length-s,0),S=N(y);++m<y;)S[m]=f[s+m];m=-1;for(var I=N(s+1);++m<s;)I[m]=f[m];return I[s]=l(S),tn(r,this,I)}}function zh(r,s){return s.length<2?r:oi(r,_n(s,0,-1))}function e_(r,s){for(var l=r.length,f=Bt(s.length,l),m=Gt(r);f--;){var y=s[f];r[f]=or(y,l)?m[y]:n}return r}function Lc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Hh=qh(dh),Ps=gb||function(r,s){return Rt.setTimeout(r,s)},Pc=qh($y);function Fh(r,s,l){var f=s+"";return Pc(r,Wy(f,t_(Hy(f),l)))}function qh(r){var s=0,l=0;return function(){var f=yb(),m=Y-(f-l);if(l=f,m>0){if(++s>=q)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ta(r,s){var l=-1,f=r.length,m=f-1;for(s=s===n?f:s;++l<s;){var y=mc(l,m),S=r[y];r[y]=r[l],r[l]=S}return r.length=s,r}var Wh=Qy(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(qv,function(l,f,m,y){s.push(m?y.replace(Jv,"$1"):f||l)}),s});function qn(r){if(typeof r=="string"||sn(r))return r;var s=r+"";return s=="0"&&1/r==-ne?"-0":s}function li(r){if(r!=null){try{return Io.call(r)}catch{}try{return r+""}catch{}}return""}function t_(r,s){return mn(nt,function(l){var f="_."+l[0];s&l[1]&&!Eo(r,f)&&r.push(f)}),r.sort()}function Zh(r){if(r instanceof Me)return r.clone();var s=new bn(r.__wrapped__,r.__chain__);return s.__actions__=Gt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function n_(r,s,l){(l?Ft(r,s,l):s===n)?s=1:s=$t(Ce(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var m=0,y=0,S=N(jo(f/s));m<f;)S[y++]=_n(r,m,m+=s);return S}function r_(r){for(var s=-1,l=r==null?0:r.length,f=0,m=[];++s<l;){var y=r[s];y&&(m[f++]=y)}return m}function i_(){var r=arguments.length;if(!r)return[];for(var s=N(r-1),l=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Sr(Ee(l)?Gt(l):[l],Ot(s,1))}var s_=Ie(function(r,s){return pt(r)?Ts(r,Ot(s,1,pt,!0)):[]}),o_=Ie(function(r,s){var l=wn(s);return pt(l)&&(l=n),pt(r)?Ts(r,Ot(s,1,pt,!0),me(l,2)):[]}),a_=Ie(function(r,s){var l=wn(s);return pt(l)&&(l=n),pt(r)?Ts(r,Ot(s,1,pt,!0),n,l):[]});function l_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),_n(r,s<0?0:s,f)):[]}function c_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),s=f-s,_n(r,0,s<0?0:s)):[]}function u_(r,s){return r&&r.length?Ko(r,me(s,3),!0,!0):[]}function d_(r,s){return r&&r.length?Ko(r,me(s,3),!0):[]}function f_(r,s,l,f){var m=r==null?0:r.length;return m?(l&&typeof l!="number"&&Ft(r,s,l)&&(l=0,f=m),iy(r,s,l,f)):[]}function Kh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var m=l==null?0:Ce(l);return m<0&&(m=$t(f+m,0)),Co(r,me(s,3),m)}function Vh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var m=f-1;return l!==n&&(m=Ce(l),m=l<0?$t(f+m,0):Bt(m,f-1)),Co(r,me(s,3),m,!0)}function Gh(r){var s=r==null?0:r.length;return s?Ot(r,1):[]}function h_(r){var s=r==null?0:r.length;return s?Ot(r,ne):[]}function p_(r,s){var l=r==null?0:r.length;return l?(s=s===n?1:Ce(s),Ot(r,s)):[]}function g_(r){for(var s=-1,l=r==null?0:r.length,f={};++s<l;){var m=r[s];f[m[0]]=m[1]}return f}function Qh(r){return r&&r.length?r[0]:n}function m_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var m=l==null?0:Ce(l);return m<0&&(m=$t(f+m,0)),Si(r,s,m)}function v_(r){var s=r==null?0:r.length;return s?_n(r,0,-1):[]}var b_=Ie(function(r){var s=lt(r,wc);return s.length&&s[0]===r[0]?dc(s):[]}),y_=Ie(function(r){var s=wn(r),l=lt(r,wc);return s===wn(l)?s=n:l.pop(),l.length&&l[0]===r[0]?dc(l,me(s,2)):[]}),__=Ie(function(r){var s=wn(r),l=lt(r,wc);return s=typeof s=="function"?s:n,s&&l.pop(),l.length&&l[0]===r[0]?dc(l,n,s):[]});function w_(r,s){return r==null?"":vb.call(r,s)}function wn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function x_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var m=f;return l!==n&&(m=Ce(l),m=m<0?$t(f+m,0):Bt(m,f-1)),s===s?tb(r,s,m):Co(r,If,m,!0)}function $_(r,s){return r&&r.length?ah(r,Ce(s)):n}var k_=Ie(Yh);function Yh(r,s){return r&&r.length&&s&&s.length?gc(r,s):r}function E_(r,s,l){return r&&r.length&&s&&s.length?gc(r,s,me(l,2)):r}function C_(r,s,l){return r&&r.length&&s&&s.length?gc(r,s,n,l):r}var S_=sr(function(r,s){var l=r==null?0:r.length,f=ac(r,s);return uh(r,lt(s,function(m){return or(m,l)?+m:m}).sort(_h)),f});function T_(r,s){var l=[];if(!(r&&r.length))return l;var f=-1,m=[],y=r.length;for(s=me(s,3);++f<y;){var S=r[f];s(S,f,r)&&(l.push(S),m.push(f))}return uh(r,m),l}function Bc(r){return r==null?r:wb.call(r)}function A_(r,s,l){var f=r==null?0:r.length;return f?(l&&typeof l!="number"&&Ft(r,s,l)?(s=0,l=f):(s=s==null?0:Ce(s),l=l===n?f:Ce(l)),_n(r,s,l)):[]}function I_(r,s){return Zo(r,s)}function R_(r,s,l){return bc(r,s,me(l,2))}function O_(r,s){var l=r==null?0:r.length;if(l){var f=Zo(r,s);if(f<l&&In(r[f],s))return f}return-1}function L_(r,s){return Zo(r,s,!0)}function P_(r,s,l){return bc(r,s,me(l,2),!0)}function B_(r,s){var l=r==null?0:r.length;if(l){var f=Zo(r,s,!0)-1;if(In(r[f],s))return f}return-1}function M_(r){return r&&r.length?fh(r):[]}function j_(r,s){return r&&r.length?fh(r,me(s,2)):[]}function U_(r){var s=r==null?0:r.length;return s?_n(r,1,s):[]}function N_(r,s,l){return r&&r.length?(s=l||s===n?1:Ce(s),_n(r,0,s<0?0:s)):[]}function D_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),s=f-s,_n(r,s<0?0:s,f)):[]}function z_(r,s){return r&&r.length?Ko(r,me(s,3),!1,!0):[]}function H_(r,s){return r&&r.length?Ko(r,me(s,3)):[]}var F_=Ie(function(r){return Rr(Ot(r,1,pt,!0))}),q_=Ie(function(r){var s=wn(r);return pt(s)&&(s=n),Rr(Ot(r,1,pt,!0),me(s,2))}),W_=Ie(function(r){var s=wn(r);return s=typeof s=="function"?s:n,Rr(Ot(r,1,pt,!0),n,s)});function Z_(r){return r&&r.length?Rr(r):[]}function K_(r,s){return r&&r.length?Rr(r,me(s,2)):[]}function V_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Rr(r,n,s):[]}function Mc(r){if(!(r&&r.length))return[];var s=0;return r=Cr(r,function(l){if(pt(l))return s=$t(l.length,s),!0}),Xl(s,function(l){return lt(r,Ql(l))})}function Jh(r,s){if(!(r&&r.length))return[];var l=Mc(r);return s==null?l:lt(l,function(f){return tn(s,n,f)})}var G_=Ie(function(r,s){return pt(r)?Ts(r,s):[]}),Q_=Ie(function(r){return _c(Cr(r,pt))}),Y_=Ie(function(r){var s=wn(r);return pt(s)&&(s=n),_c(Cr(r,pt),me(s,2))}),J_=Ie(function(r){var s=wn(r);return s=typeof s=="function"?s:n,_c(Cr(r,pt),n,s)}),X_=Ie(Mc);function ew(r,s){return mh(r||[],s||[],Ss)}function tw(r,s){return mh(r||[],s||[],Rs)}var nw=Ie(function(r){var s=r.length,l=s>1?r[s-1]:n;return l=typeof l=="function"?(r.pop(),l):n,Jh(r,l)});function Xh(r){var s=b(r);return s.__chain__=!0,s}function rw(r,s){return s(r),r}function na(r,s){return s(r)}var iw=sr(function(r){var s=r.length,l=s?r[0]:0,f=this.__wrapped__,m=function(y){return ac(y,r)};return s>1||this.__actions__.length||!(f instanceof Me)||!or(l)?this.thru(m):(f=f.slice(l,+l+(s?1:0)),f.__actions__.push({func:na,args:[m],thisArg:n}),new bn(f,this.__chain__).thru(function(y){return s&&!y.length&&y.push(n),y}))});function sw(){return Xh(this)}function ow(){return new bn(this.value(),this.__chain__)}function aw(){this.__values__===n&&(this.__values__=hp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function lw(){return this}function cw(r){for(var s,l=this;l instanceof zo;){var f=Zh(l);f.__index__=0,f.__values__=n,s?m.__wrapped__=f:s=f;var m=f;l=l.__wrapped__}return m.__wrapped__=r,s}function uw(){var r=this.__wrapped__;if(r instanceof Me){var s=r;return this.__actions__.length&&(s=new Me(this)),s=s.reverse(),s.__actions__.push({func:na,args:[Bc],thisArg:n}),new bn(s,this.__chain__)}return this.thru(Bc)}function dw(){return gh(this.__wrapped__,this.__actions__)}var fw=Vo(function(r,s,l){Ve.call(r,l)?++r[l]:rr(r,l,1)});function hw(r,s,l){var f=Ee(r)?Tf:ry;return l&&Ft(r,s,l)&&(s=n),f(r,me(s,3))}function pw(r,s){var l=Ee(r)?Cr:Jf;return l(r,me(s,3))}var gw=Ch(Kh),mw=Ch(Vh);function vw(r,s){return Ot(ra(r,s),1)}function bw(r,s){return Ot(ra(r,s),ne)}function yw(r,s,l){return l=l===n?1:Ce(l),Ot(ra(r,s),l)}function ep(r,s){var l=Ee(r)?mn:Ir;return l(r,me(s,3))}function tp(r,s){var l=Ee(r)?U2:Yf;return l(r,me(s,3))}var _w=Vo(function(r,s,l){Ve.call(r,l)?r[l].push(s):rr(r,l,[s])});function ww(r,s,l,f){r=Qt(r)?r:Ni(r),l=l&&!f?Ce(l):0;var m=r.length;return l<0&&(l=$t(m+l,0)),la(r)?l<=m&&r.indexOf(s,l)>-1:!!m&&Si(r,s,l)>-1}var xw=Ie(function(r,s,l){var f=-1,m=typeof s=="function",y=Qt(r)?N(r.length):[];return Ir(r,function(S){y[++f]=m?tn(s,S,l):As(S,s,l)}),y}),$w=Vo(function(r,s,l){rr(r,l,s)});function ra(r,s){var l=Ee(r)?lt:ih;return l(r,me(s,3))}function kw(r,s,l,f){return r==null?[]:(Ee(s)||(s=s==null?[]:[s]),l=f?n:l,Ee(l)||(l=l==null?[]:[l]),lh(r,s,l))}var Ew=Vo(function(r,s,l){r[l?0:1].push(s)},function(){return[[],[]]});function Cw(r,s,l){var f=Ee(r)?Vl:Of,m=arguments.length<3;return f(r,me(s,4),l,m,Ir)}function Sw(r,s,l){var f=Ee(r)?N2:Of,m=arguments.length<3;return f(r,me(s,4),l,m,Yf)}function Tw(r,s){var l=Ee(r)?Cr:Jf;return l(r,oa(me(s,3)))}function Aw(r){var s=Ee(r)?Kf:wy;return s(r)}function Iw(r,s,l){(l?Ft(r,s,l):s===n)?s=1:s=Ce(s);var f=Ee(r)?Jb:xy;return f(r,s)}function Rw(r){var s=Ee(r)?Xb:ky;return s(r)}function Ow(r){if(r==null)return 0;if(Qt(r))return la(r)?Ai(r):r.length;var s=Mt(r);return s==Ke||s==De?r.size:hc(r).length}function Lw(r,s,l){var f=Ee(r)?Gl:Ey;return l&&Ft(r,s,l)&&(s=n),f(r,me(s,3))}var Pw=Ie(function(r,s){if(r==null)return[];var l=s.length;return l>1&&Ft(r,s[0],s[1])?s=[]:l>2&&Ft(s[0],s[1],s[2])&&(s=[s[0]]),lh(r,Ot(s,1),[])}),ia=pb||function(){return Rt.Date.now()};function Bw(r,s){if(typeof s!="function")throw new vn(c);return r=Ce(r),function(){if(--r<1)return s.apply(this,arguments)}}function np(r,s,l){return s=l?n:s,s=r&&s==null?r.length:s,ir(r,P,n,n,n,n,s)}function rp(r,s){var l;if(typeof s!="function")throw new vn(c);return r=Ce(r),function(){return--r>0&&(l=s.apply(this,arguments)),r<=1&&(s=n),l}}var jc=Ie(function(r,s,l){var f=E;if(l.length){var m=Tr(l,ji(jc));f|=B}return ir(r,f,s,l,m)}),ip=Ie(function(r,s,l){var f=E|w;if(l.length){var m=Tr(l,ji(ip));f|=B}return ir(s,f,r,l,m)});function sp(r,s,l){s=l?n:s;var f=ir(r,R,n,n,n,n,n,s);return f.placeholder=sp.placeholder,f}function op(r,s,l){s=l?n:s;var f=ir(r,A,n,n,n,n,n,s);return f.placeholder=op.placeholder,f}function ap(r,s,l){var f,m,y,S,I,M,H=0,F=!1,V=!1,re=!0;if(typeof r!="function")throw new vn(c);s=xn(s)||0,ct(l)&&(F=!!l.leading,V="maxWait"in l,y=V?$t(xn(l.maxWait)||0,s):y,re="trailing"in l?!!l.trailing:re);function de(gt){var Rn=f,cr=m;return f=m=n,H=gt,S=r.apply(cr,Rn),S}function be(gt){return H=gt,I=Ps(Pe,s),F?de(gt):S}function Te(gt){var Rn=gt-M,cr=gt-H,Cp=s-Rn;return V?Bt(Cp,y-cr):Cp}function ye(gt){var Rn=gt-M,cr=gt-H;return M===n||Rn>=s||Rn<0||V&&cr>=y}function Pe(){var gt=ia();if(ye(gt))return Ue(gt);I=Ps(Pe,Te(gt))}function Ue(gt){return I=n,re&&f?de(gt):(f=m=n,S)}function on(){I!==n&&vh(I),H=0,f=M=m=I=n}function qt(){return I===n?S:Ue(ia())}function an(){var gt=ia(),Rn=ye(gt);if(f=arguments,m=this,M=gt,Rn){if(I===n)return be(M);if(V)return vh(I),I=Ps(Pe,s),de(M)}return I===n&&(I=Ps(Pe,s)),S}return an.cancel=on,an.flush=qt,an}var Mw=Ie(function(r,s){return Qf(r,1,s)}),jw=Ie(function(r,s,l){return Qf(r,xn(s)||0,l)});function Uw(r){return ir(r,ee)}function sa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new vn(c);var l=function(){var f=arguments,m=s?s.apply(this,f):f[0],y=l.cache;if(y.has(m))return y.get(m);var S=r.apply(this,f);return l.cache=y.set(m,S)||y,S};return l.cache=new(sa.Cache||nr),l}sa.Cache=nr;function oa(r){if(typeof r!="function")throw new vn(c);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Nw(r){return rp(2,r)}var Dw=Cy(function(r,s){s=s.length==1&&Ee(s[0])?lt(s[0],nn(me())):lt(Ot(s,1),nn(me()));var l=s.length;return Ie(function(f){for(var m=-1,y=Bt(f.length,l);++m<y;)f[m]=s[m].call(this,f[m]);return tn(r,this,f)})}),Uc=Ie(function(r,s){var l=Tr(s,ji(Uc));return ir(r,B,n,s,l)}),lp=Ie(function(r,s){var l=Tr(s,ji(lp));return ir(r,C,n,s,l)}),zw=sr(function(r,s){return ir(r,U,n,n,n,s)});function Hw(r,s){if(typeof r!="function")throw new vn(c);return s=s===n?s:Ce(s),Ie(r,s)}function Fw(r,s){if(typeof r!="function")throw new vn(c);return s=s==null?0:$t(Ce(s),0),Ie(function(l){var f=l[s],m=Lr(l,0,s);return f&&Sr(m,f),tn(r,this,m)})}function qw(r,s,l){var f=!0,m=!0;if(typeof r!="function")throw new vn(c);return ct(l)&&(f="leading"in l?!!l.leading:f,m="trailing"in l?!!l.trailing:m),ap(r,s,{leading:f,maxWait:s,trailing:m})}function Ww(r){return np(r,1)}function Zw(r,s){return Uc(xc(s),r)}function Kw(){if(!arguments.length)return[];var r=arguments[0];return Ee(r)?r:[r]}function Vw(r){return yn(r,_)}function Gw(r,s){return s=typeof s=="function"?s:n,yn(r,_,s)}function Qw(r){return yn(r,g|_)}function Yw(r,s){return s=typeof s=="function"?s:n,yn(r,g|_,s)}function Jw(r,s){return s==null||Gf(r,s,Ct(s))}function In(r,s){return r===s||r!==r&&s!==s}var Xw=Jo(uc),e3=Jo(function(r,s){return r>=s}),ci=th(function(){return arguments}())?th:function(r){return ft(r)&&Ve.call(r,"callee")&&!zf.call(r,"callee")},Ee=N.isArray,t3=xf?nn(xf):cy;function Qt(r){return r!=null&&aa(r.length)&&!ar(r)}function pt(r){return ft(r)&&Qt(r)}function n3(r){return r===!0||r===!1||ft(r)&&Ht(r)==Xe}var Pr=mb||Gc,r3=$f?nn($f):uy;function i3(r){return ft(r)&&r.nodeType===1&&!Bs(r)}function s3(r){if(r==null)return!0;if(Qt(r)&&(Ee(r)||typeof r=="string"||typeof r.splice=="function"||Pr(r)||Ui(r)||ci(r)))return!r.length;var s=Mt(r);if(s==Ke||s==De)return!r.size;if(Ls(r))return!hc(r).length;for(var l in r)if(Ve.call(r,l))return!1;return!0}function o3(r,s){return Is(r,s)}function a3(r,s,l){l=typeof l=="function"?l:n;var f=l?l(r,s):n;return f===n?Is(r,s,n,l):!!f}function Nc(r){if(!ft(r))return!1;var s=Ht(r);return s==ot||s==Fe||typeof r.message=="string"&&typeof r.name=="string"&&!Bs(r)}function l3(r){return typeof r=="number"&&Ff(r)}function ar(r){if(!ct(r))return!1;var s=Ht(r);return s==Qe||s==At||s==J||s==er}function cp(r){return typeof r=="number"&&r==Ce(r)}function aa(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=G}function ct(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ft(r){return r!=null&&typeof r=="object"}var up=kf?nn(kf):fy;function c3(r,s){return r===s||fc(r,s,Ac(s))}function u3(r,s,l){return l=typeof l=="function"?l:n,fc(r,s,Ac(s),l)}function d3(r){return dp(r)&&r!=+r}function f3(r){if(Gy(r))throw new xe(a);return nh(r)}function h3(r){return r===null}function p3(r){return r==null}function dp(r){return typeof r=="number"||ft(r)&&Ht(r)==It}function Bs(r){if(!ft(r)||Ht(r)!=dt)return!1;var s=Po(r);if(s===null)return!0;var l=Ve.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Io.call(l)==ub}var Dc=Ef?nn(Ef):hy;function g3(r){return cp(r)&&r>=-G&&r<=G}var fp=Cf?nn(Cf):py;function la(r){return typeof r=="string"||!Ee(r)&&ft(r)&&Ht(r)==at}function sn(r){return typeof r=="symbol"||ft(r)&&Ht(r)==Et}var Ui=Sf?nn(Sf):gy;function m3(r){return r===n}function v3(r){return ft(r)&&Mt(r)==pe}function b3(r){return ft(r)&&Ht(r)==hn}var y3=Jo(pc),_3=Jo(function(r,s){return r<=s});function hp(r){if(!r)return[];if(Qt(r))return la(r)?Tn(r):Gt(r);if(xs&&r[xs])return J2(r[xs]());var s=Mt(r),l=s==Ke?tc:s==De?So:Ni;return l(r)}function lr(r){if(!r)return r===0?r:0;if(r=xn(r),r===ne||r===-ne){var s=r<0?-1:1;return s*ae}return r===r?r:0}function Ce(r){var s=lr(r),l=s%1;return s===s?l?s-l:s:0}function pp(r){return r?si(Ce(r),0,te):0}function xn(r){if(typeof r=="number")return r;if(sn(r))return he;if(ct(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=ct(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Lf(r);var l=t2.test(r);return l||r2.test(r)?B2(r.slice(2),l?2:8):e2.test(r)?he:+r}function gp(r){return Fn(r,Yt(r))}function w3(r){return r?si(Ce(r),-G,G):r===0?r:0}function Ze(r){return r==null?"":rn(r)}var x3=Bi(function(r,s){if(Ls(s)||Qt(s)){Fn(s,Ct(s),r);return}for(var l in s)Ve.call(s,l)&&Ss(r,l,s[l])}),mp=Bi(function(r,s){Fn(s,Yt(s),r)}),ca=Bi(function(r,s,l,f){Fn(s,Yt(s),r,f)}),$3=Bi(function(r,s,l,f){Fn(s,Ct(s),r,f)}),k3=sr(ac);function E3(r,s){var l=Pi(r);return s==null?l:Vf(l,s)}var C3=Ie(function(r,s){r=Ye(r);var l=-1,f=s.length,m=f>2?s[2]:n;for(m&&Ft(s[0],s[1],m)&&(f=1);++l<f;)for(var y=s[l],S=Yt(y),I=-1,M=S.length;++I<M;){var H=S[I],F=r[H];(F===n||In(F,Ri[H])&&!Ve.call(r,H))&&(r[H]=y[H])}return r}),S3=Ie(function(r){return r.push(n,Lh),tn(vp,n,r)});function T3(r,s){return Af(r,me(s,3),Hn)}function A3(r,s){return Af(r,me(s,3),cc)}function I3(r,s){return r==null?r:lc(r,me(s,3),Yt)}function R3(r,s){return r==null?r:Xf(r,me(s,3),Yt)}function O3(r,s){return r&&Hn(r,me(s,3))}function L3(r,s){return r&&cc(r,me(s,3))}function P3(r){return r==null?[]:qo(r,Ct(r))}function B3(r){return r==null?[]:qo(r,Yt(r))}function zc(r,s,l){var f=r==null?n:oi(r,s);return f===n?l:f}function M3(r,s){return r!=null&&Mh(r,s,sy)}function Hc(r,s){return r!=null&&Mh(r,s,oy)}var j3=Th(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Ro.call(s)),r[s]=l},qc(Jt)),U3=Th(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Ro.call(s)),Ve.call(r,s)?r[s].push(l):r[s]=[l]},me),N3=Ie(As);function Ct(r){return Qt(r)?Zf(r):hc(r)}function Yt(r){return Qt(r)?Zf(r,!0):my(r)}function D3(r,s){var l={};return s=me(s,3),Hn(r,function(f,m,y){rr(l,s(f,m,y),f)}),l}function z3(r,s){var l={};return s=me(s,3),Hn(r,function(f,m,y){rr(l,m,s(f,m,y))}),l}var H3=Bi(function(r,s,l){Wo(r,s,l)}),vp=Bi(function(r,s,l,f){Wo(r,s,l,f)}),F3=sr(function(r,s){var l={};if(r==null)return l;var f=!1;s=lt(s,function(y){return y=Or(y,r),f||(f=y.length>1),y}),Fn(r,Sc(r),l),f&&(l=yn(l,g|v|_,jy));for(var m=s.length;m--;)yc(l,s[m]);return l});function q3(r,s){return bp(r,oa(me(s)))}var W3=sr(function(r,s){return r==null?{}:by(r,s)});function bp(r,s){if(r==null)return{};var l=lt(Sc(r),function(f){return[f]});return s=me(s),ch(r,l,function(f,m){return s(f,m[0])})}function Z3(r,s,l){s=Or(s,r);var f=-1,m=s.length;for(m||(m=1,r=n);++f<m;){var y=r==null?n:r[qn(s[f])];y===n&&(f=m,y=l),r=ar(y)?y.call(r):y}return r}function K3(r,s,l){return r==null?r:Rs(r,s,l)}function V3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:Rs(r,s,l,f)}var yp=Rh(Ct),_p=Rh(Yt);function G3(r,s,l){var f=Ee(r),m=f||Pr(r)||Ui(r);if(s=me(s,4),l==null){var y=r&&r.constructor;m?l=f?new y:[]:ct(r)?l=ar(y)?Pi(Po(r)):{}:l={}}return(m?mn:Hn)(r,function(S,I,M){return s(l,S,I,M)}),l}function Q3(r,s){return r==null?!0:yc(r,s)}function Y3(r,s,l){return r==null?r:ph(r,s,xc(l))}function J3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:ph(r,s,xc(l),f)}function Ni(r){return r==null?[]:ec(r,Ct(r))}function X3(r){return r==null?[]:ec(r,Yt(r))}function e4(r,s,l){return l===n&&(l=s,s=n),l!==n&&(l=xn(l),l=l===l?l:0),s!==n&&(s=xn(s),s=s===s?s:0),si(xn(r),s,l)}function t4(r,s,l){return s=lr(s),l===n?(l=s,s=0):l=lr(l),r=xn(r),ay(r,s,l)}function n4(r,s,l){if(l&&typeof l!="boolean"&&Ft(r,s,l)&&(s=l=n),l===n&&(typeof s=="boolean"?(l=s,s=n):typeof r=="boolean"&&(l=r,r=n)),r===n&&s===n?(r=0,s=1):(r=lr(r),s===n?(s=r,r=0):s=lr(s)),r>s){var f=r;r=s,s=f}if(l||r%1||s%1){var m=qf();return Bt(r+m*(s-r+P2("1e-"+((m+"").length-1))),s)}return mc(r,s)}var r4=Mi(function(r,s,l){return s=s.toLowerCase(),r+(l?wp(s):s)});function wp(r){return Fc(Ze(r).toLowerCase())}function xp(r){return r=Ze(r),r&&r.replace(s2,K2).replace(k2,"")}function i4(r,s,l){r=Ze(r),s=rn(s);var f=r.length;l=l===n?f:si(Ce(l),0,f);var m=l;return l-=s.length,l>=0&&r.slice(l,m)==s}function s4(r){return r=Ze(r),r&&Nv.test(r)?r.replace(Jd,V2):r}function o4(r){return r=Ze(r),r&&Wv.test(r)?r.replace(Ul,"\\$&"):r}var a4=Mi(function(r,s,l){return r+(l?"-":"")+s.toLowerCase()}),l4=Mi(function(r,s,l){return r+(l?" ":"")+s.toLowerCase()}),c4=Eh("toLowerCase");function u4(r,s,l){r=Ze(r),s=Ce(s);var f=s?Ai(r):0;if(!s||f>=s)return r;var m=(s-f)/2;return Yo(Uo(m),l)+r+Yo(jo(m),l)}function d4(r,s,l){r=Ze(r),s=Ce(s);var f=s?Ai(r):0;return s&&f<s?r+Yo(s-f,l):r}function f4(r,s,l){r=Ze(r),s=Ce(s);var f=s?Ai(r):0;return s&&f<s?Yo(s-f,l)+r:r}function h4(r,s,l){return l||s==null?s=0:s&&(s=+s),_b(Ze(r).replace(Nl,""),s||0)}function p4(r,s,l){return(l?Ft(r,s,l):s===n)?s=1:s=Ce(s),vc(Ze(r),s)}function g4(){var r=arguments,s=Ze(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var m4=Mi(function(r,s,l){return r+(l?"_":"")+s.toLowerCase()});function v4(r,s,l){return l&&typeof l!="number"&&Ft(r,s,l)&&(s=l=n),l=l===n?te:l>>>0,l?(r=Ze(r),r&&(typeof s=="string"||s!=null&&!Dc(s))&&(s=rn(s),!s&&Ti(r))?Lr(Tn(r),0,l):r.split(s,l)):[]}var b4=Mi(function(r,s,l){return r+(l?" ":"")+Fc(s)});function y4(r,s,l){return r=Ze(r),l=l==null?0:si(Ce(l),0,r.length),s=rn(s),r.slice(l,l+s.length)==s}function _4(r,s,l){var f=b.templateSettings;l&&Ft(r,s,l)&&(s=n),r=Ze(r),s=ca({},s,f,Oh);var m=ca({},s.imports,f.imports,Oh),y=Ct(m),S=ec(m,y),I,M,H=0,F=s.interpolate||xo,V="__p += '",re=nc((s.escape||xo).source+"|"+F.source+"|"+(F===Xd?Xv:xo).source+"|"+(s.evaluate||xo).source+"|$","g"),de="//# sourceURL="+(Ve.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++A2+"]")+`
`;r.replace(re,function(ye,Pe,Ue,on,qt,an){return Ue||(Ue=on),V+=r.slice(H,an).replace(o2,G2),Pe&&(I=!0,V+=`' +
__e(`+Pe+`) +
'`),qt&&(M=!0,V+=`';
`+qt+`;
__p += '`),Ue&&(V+=`' +
((__t = (`+Ue+`)) == null ? '' : __t) +
'`),H=an+ye.length,ye}),V+=`';
`;var be=Ve.call(s,"variable")&&s.variable;if(!be)V=`with (obj) {
`+V+`
}
`;else if(Yv.test(be))throw new xe(u);V=(M?V.replace(Bv,""):V).replace(Mv,"$1").replace(jv,"$1;"),V="function("+(be||"obj")+`) {
`+(be?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(I?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+V+`return __p
}`;var Te=kp(function(){return qe(y,de+"return "+V).apply(n,S)});if(Te.source=V,Nc(Te))throw Te;return Te}function w4(r){return Ze(r).toLowerCase()}function x4(r){return Ze(r).toUpperCase()}function $4(r,s,l){if(r=Ze(r),r&&(l||s===n))return Lf(r);if(!r||!(s=rn(s)))return r;var f=Tn(r),m=Tn(s),y=Pf(f,m),S=Bf(f,m)+1;return Lr(f,y,S).join("")}function k4(r,s,l){if(r=Ze(r),r&&(l||s===n))return r.slice(0,jf(r)+1);if(!r||!(s=rn(s)))return r;var f=Tn(r),m=Bf(f,Tn(s))+1;return Lr(f,0,m).join("")}function E4(r,s,l){if(r=Ze(r),r&&(l||s===n))return r.replace(Nl,"");if(!r||!(s=rn(s)))return r;var f=Tn(r),m=Pf(f,Tn(s));return Lr(f,m).join("")}function C4(r,s){var l=Z,f=Q;if(ct(s)){var m="separator"in s?s.separator:m;l="length"in s?Ce(s.length):l,f="omission"in s?rn(s.omission):f}r=Ze(r);var y=r.length;if(Ti(r)){var S=Tn(r);y=S.length}if(l>=y)return r;var I=l-Ai(f);if(I<1)return f;var M=S?Lr(S,0,I).join(""):r.slice(0,I);if(m===n)return M+f;if(S&&(I+=M.length-I),Dc(m)){if(r.slice(I).search(m)){var H,F=M;for(m.global||(m=nc(m.source,Ze(ef.exec(m))+"g")),m.lastIndex=0;H=m.exec(F);)var V=H.index;M=M.slice(0,V===n?I:V)}}else if(r.indexOf(rn(m),I)!=I){var re=M.lastIndexOf(m);re>-1&&(M=M.slice(0,re))}return M+f}function S4(r){return r=Ze(r),r&&Uv.test(r)?r.replace(Yd,nb):r}var T4=Mi(function(r,s,l){return r+(l?" ":"")+s.toUpperCase()}),Fc=Eh("toUpperCase");function $p(r,s,l){return r=Ze(r),s=l?n:s,s===n?Y2(r)?sb(r):H2(r):r.match(s)||[]}var kp=Ie(function(r,s){try{return tn(r,n,s)}catch(l){return Nc(l)?l:new xe(l)}}),A4=sr(function(r,s){return mn(s,function(l){l=qn(l),rr(r,l,jc(r[l],r))}),r});function I4(r){var s=r==null?0:r.length,l=me();return r=s?lt(r,function(f){if(typeof f[1]!="function")throw new vn(c);return[l(f[0]),f[1]]}):[],Ie(function(f){for(var m=-1;++m<s;){var y=r[m];if(tn(y[0],this,f))return tn(y[1],this,f)}})}function R4(r){return ny(yn(r,g))}function qc(r){return function(){return r}}function O4(r,s){return r==null||r!==r?s:r}var L4=Sh(),P4=Sh(!0);function Jt(r){return r}function Wc(r){return rh(typeof r=="function"?r:yn(r,g))}function B4(r){return sh(yn(r,g))}function M4(r,s){return oh(r,yn(s,g))}var j4=Ie(function(r,s){return function(l){return As(l,r,s)}}),U4=Ie(function(r,s){return function(l){return As(r,l,s)}});function Zc(r,s,l){var f=Ct(s),m=qo(s,f);l==null&&!(ct(s)&&(m.length||!f.length))&&(l=s,s=r,r=this,m=qo(s,Ct(s)));var y=!(ct(l)&&"chain"in l)||!!l.chain,S=ar(r);return mn(m,function(I){var M=s[I];r[I]=M,S&&(r.prototype[I]=function(){var H=this.__chain__;if(y||H){var F=r(this.__wrapped__),V=F.__actions__=Gt(this.__actions__);return V.push({func:M,args:arguments,thisArg:r}),F.__chain__=H,F}return M.apply(r,Sr([this.value()],arguments))})}),r}function N4(){return Rt._===this&&(Rt._=db),this}function Kc(){}function D4(r){return r=Ce(r),Ie(function(s){return ah(s,r)})}var z4=kc(lt),H4=kc(Tf),F4=kc(Gl);function Ep(r){return Rc(r)?Ql(qn(r)):yy(r)}function q4(r){return function(s){return r==null?n:oi(r,s)}}var W4=Ah(),Z4=Ah(!0);function Vc(){return[]}function Gc(){return!1}function K4(){return{}}function V4(){return""}function G4(){return!0}function Q4(r,s){if(r=Ce(r),r<1||r>G)return[];var l=te,f=Bt(r,te);s=me(s),r-=te;for(var m=Xl(f,s);++l<r;)s(l);return m}function Y4(r){return Ee(r)?lt(r,qn):sn(r)?[r]:Gt(Wh(Ze(r)))}function J4(r){var s=++cb;return Ze(r)+s}var X4=Qo(function(r,s){return r+s},0),ex=Ec("ceil"),tx=Qo(function(r,s){return r/s},1),nx=Ec("floor");function rx(r){return r&&r.length?Fo(r,Jt,uc):n}function ix(r,s){return r&&r.length?Fo(r,me(s,2),uc):n}function sx(r){return Rf(r,Jt)}function ox(r,s){return Rf(r,me(s,2))}function ax(r){return r&&r.length?Fo(r,Jt,pc):n}function lx(r,s){return r&&r.length?Fo(r,me(s,2),pc):n}var cx=Qo(function(r,s){return r*s},1),ux=Ec("round"),dx=Qo(function(r,s){return r-s},0);function fx(r){return r&&r.length?Jl(r,Jt):0}function hx(r,s){return r&&r.length?Jl(r,me(s,2)):0}return b.after=Bw,b.ary=np,b.assign=x3,b.assignIn=mp,b.assignInWith=ca,b.assignWith=$3,b.at=k3,b.before=rp,b.bind=jc,b.bindAll=A4,b.bindKey=ip,b.castArray=Kw,b.chain=Xh,b.chunk=n_,b.compact=r_,b.concat=i_,b.cond=I4,b.conforms=R4,b.constant=qc,b.countBy=fw,b.create=E3,b.curry=sp,b.curryRight=op,b.debounce=ap,b.defaults=C3,b.defaultsDeep=S3,b.defer=Mw,b.delay=jw,b.difference=s_,b.differenceBy=o_,b.differenceWith=a_,b.drop=l_,b.dropRight=c_,b.dropRightWhile=u_,b.dropWhile=d_,b.fill=f_,b.filter=pw,b.flatMap=vw,b.flatMapDeep=bw,b.flatMapDepth=yw,b.flatten=Gh,b.flattenDeep=h_,b.flattenDepth=p_,b.flip=Uw,b.flow=L4,b.flowRight=P4,b.fromPairs=g_,b.functions=P3,b.functionsIn=B3,b.groupBy=_w,b.initial=v_,b.intersection=b_,b.intersectionBy=y_,b.intersectionWith=__,b.invert=j3,b.invertBy=U3,b.invokeMap=xw,b.iteratee=Wc,b.keyBy=$w,b.keys=Ct,b.keysIn=Yt,b.map=ra,b.mapKeys=D3,b.mapValues=z3,b.matches=B4,b.matchesProperty=M4,b.memoize=sa,b.merge=H3,b.mergeWith=vp,b.method=j4,b.methodOf=U4,b.mixin=Zc,b.negate=oa,b.nthArg=D4,b.omit=F3,b.omitBy=q3,b.once=Nw,b.orderBy=kw,b.over=z4,b.overArgs=Dw,b.overEvery=H4,b.overSome=F4,b.partial=Uc,b.partialRight=lp,b.partition=Ew,b.pick=W3,b.pickBy=bp,b.property=Ep,b.propertyOf=q4,b.pull=k_,b.pullAll=Yh,b.pullAllBy=E_,b.pullAllWith=C_,b.pullAt=S_,b.range=W4,b.rangeRight=Z4,b.rearg=zw,b.reject=Tw,b.remove=T_,b.rest=Hw,b.reverse=Bc,b.sampleSize=Iw,b.set=K3,b.setWith=V3,b.shuffle=Rw,b.slice=A_,b.sortBy=Pw,b.sortedUniq=M_,b.sortedUniqBy=j_,b.split=v4,b.spread=Fw,b.tail=U_,b.take=N_,b.takeRight=D_,b.takeRightWhile=z_,b.takeWhile=H_,b.tap=rw,b.throttle=qw,b.thru=na,b.toArray=hp,b.toPairs=yp,b.toPairsIn=_p,b.toPath=Y4,b.toPlainObject=gp,b.transform=G3,b.unary=Ww,b.union=F_,b.unionBy=q_,b.unionWith=W_,b.uniq=Z_,b.uniqBy=K_,b.uniqWith=V_,b.unset=Q3,b.unzip=Mc,b.unzipWith=Jh,b.update=Y3,b.updateWith=J3,b.values=Ni,b.valuesIn=X3,b.without=G_,b.words=$p,b.wrap=Zw,b.xor=Q_,b.xorBy=Y_,b.xorWith=J_,b.zip=X_,b.zipObject=ew,b.zipObjectDeep=tw,b.zipWith=nw,b.entries=yp,b.entriesIn=_p,b.extend=mp,b.extendWith=ca,Zc(b,b),b.add=X4,b.attempt=kp,b.camelCase=r4,b.capitalize=wp,b.ceil=ex,b.clamp=e4,b.clone=Vw,b.cloneDeep=Qw,b.cloneDeepWith=Yw,b.cloneWith=Gw,b.conformsTo=Jw,b.deburr=xp,b.defaultTo=O4,b.divide=tx,b.endsWith=i4,b.eq=In,b.escape=s4,b.escapeRegExp=o4,b.every=hw,b.find=gw,b.findIndex=Kh,b.findKey=T3,b.findLast=mw,b.findLastIndex=Vh,b.findLastKey=A3,b.floor=nx,b.forEach=ep,b.forEachRight=tp,b.forIn=I3,b.forInRight=R3,b.forOwn=O3,b.forOwnRight=L3,b.get=zc,b.gt=Xw,b.gte=e3,b.has=M3,b.hasIn=Hc,b.head=Qh,b.identity=Jt,b.includes=ww,b.indexOf=m_,b.inRange=t4,b.invoke=N3,b.isArguments=ci,b.isArray=Ee,b.isArrayBuffer=t3,b.isArrayLike=Qt,b.isArrayLikeObject=pt,b.isBoolean=n3,b.isBuffer=Pr,b.isDate=r3,b.isElement=i3,b.isEmpty=s3,b.isEqual=o3,b.isEqualWith=a3,b.isError=Nc,b.isFinite=l3,b.isFunction=ar,b.isInteger=cp,b.isLength=aa,b.isMap=up,b.isMatch=c3,b.isMatchWith=u3,b.isNaN=d3,b.isNative=f3,b.isNil=p3,b.isNull=h3,b.isNumber=dp,b.isObject=ct,b.isObjectLike=ft,b.isPlainObject=Bs,b.isRegExp=Dc,b.isSafeInteger=g3,b.isSet=fp,b.isString=la,b.isSymbol=sn,b.isTypedArray=Ui,b.isUndefined=m3,b.isWeakMap=v3,b.isWeakSet=b3,b.join=w_,b.kebabCase=a4,b.last=wn,b.lastIndexOf=x_,b.lowerCase=l4,b.lowerFirst=c4,b.lt=y3,b.lte=_3,b.max=rx,b.maxBy=ix,b.mean=sx,b.meanBy=ox,b.min=ax,b.minBy=lx,b.stubArray=Vc,b.stubFalse=Gc,b.stubObject=K4,b.stubString=V4,b.stubTrue=G4,b.multiply=cx,b.nth=$_,b.noConflict=N4,b.noop=Kc,b.now=ia,b.pad=u4,b.padEnd=d4,b.padStart=f4,b.parseInt=h4,b.random=n4,b.reduce=Cw,b.reduceRight=Sw,b.repeat=p4,b.replace=g4,b.result=Z3,b.round=ux,b.runInContext=L,b.sample=Aw,b.size=Ow,b.snakeCase=m4,b.some=Lw,b.sortedIndex=I_,b.sortedIndexBy=R_,b.sortedIndexOf=O_,b.sortedLastIndex=L_,b.sortedLastIndexBy=P_,b.sortedLastIndexOf=B_,b.startCase=b4,b.startsWith=y4,b.subtract=dx,b.sum=fx,b.sumBy=hx,b.template=_4,b.times=Q4,b.toFinite=lr,b.toInteger=Ce,b.toLength=pp,b.toLower=w4,b.toNumber=xn,b.toSafeInteger=w3,b.toString=Ze,b.toUpper=x4,b.trim=$4,b.trimEnd=k4,b.trimStart=E4,b.truncate=C4,b.unescape=S4,b.uniqueId=J4,b.upperCase=T4,b.upperFirst=Fc,b.each=ep,b.eachRight=tp,b.first=Qh,Zc(b,function(){var r={};return Hn(b,function(s,l){Ve.call(b.prototype,l)||(r[l]=s)}),r}(),{chain:!1}),b.VERSION=i,mn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){b[r].placeholder=b}),mn(["drop","take"],function(r,s){Me.prototype[r]=function(l){l=l===n?1:$t(Ce(l),0);var f=this.__filtered__&&!s?new Me(this):this.clone();return f.__filtered__?f.__takeCount__=Bt(l,f.__takeCount__):f.__views__.push({size:Bt(l,te),type:r+(f.__dir__<0?"Right":"")}),f},Me.prototype[r+"Right"]=function(l){return this.reverse()[r](l).reverse()}}),mn(["filter","map","takeWhile"],function(r,s){var l=s+1,f=l==ie||l==D;Me.prototype[r]=function(m){var y=this.clone();return y.__iteratees__.push({iteratee:me(m,3),type:l}),y.__filtered__=y.__filtered__||f,y}}),mn(["head","last"],function(r,s){var l="take"+(s?"Right":"");Me.prototype[r]=function(){return this[l](1).value()[0]}}),mn(["initial","tail"],function(r,s){var l="drop"+(s?"":"Right");Me.prototype[r]=function(){return this.__filtered__?new Me(this):this[l](1)}}),Me.prototype.compact=function(){return this.filter(Jt)},Me.prototype.find=function(r){return this.filter(r).head()},Me.prototype.findLast=function(r){return this.reverse().find(r)},Me.prototype.invokeMap=Ie(function(r,s){return typeof r=="function"?new Me(this):this.map(function(l){return As(l,r,s)})}),Me.prototype.reject=function(r){return this.filter(oa(me(r)))},Me.prototype.slice=function(r,s){r=Ce(r);var l=this;return l.__filtered__&&(r>0||s<0)?new Me(l):(r<0?l=l.takeRight(-r):r&&(l=l.drop(r)),s!==n&&(s=Ce(s),l=s<0?l.dropRight(-s):l.take(s-r)),l)},Me.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Me.prototype.toArray=function(){return this.take(te)},Hn(Me.prototype,function(r,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),m=b[f?"take"+(s=="last"?"Right":""):s],y=f||/^find/.test(s);m&&(b.prototype[s]=function(){var S=this.__wrapped__,I=f?[1]:arguments,M=S instanceof Me,H=I[0],F=M||Ee(S),V=function(Pe){var Ue=m.apply(b,Sr([Pe],I));return f&&re?Ue[0]:Ue};F&&l&&typeof H=="function"&&H.length!=1&&(M=F=!1);var re=this.__chain__,de=!!this.__actions__.length,be=y&&!re,Te=M&&!de;if(!y&&F){S=Te?S:new Me(this);var ye=r.apply(S,I);return ye.__actions__.push({func:na,args:[V],thisArg:n}),new bn(ye,re)}return be&&Te?r.apply(this,I):(ye=this.thru(V),be?f?ye.value()[0]:ye.value():ye)})}),mn(["pop","push","shift","sort","splice","unshift"],function(r){var s=To[r],l=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);b.prototype[r]=function(){var m=arguments;if(f&&!this.__chain__){var y=this.value();return s.apply(Ee(y)?y:[],m)}return this[l](function(S){return s.apply(Ee(S)?S:[],m)})}}),Hn(Me.prototype,function(r,s){var l=b[s];if(l){var f=l.name+"";Ve.call(Li,f)||(Li[f]=[]),Li[f].push({name:s,func:l})}}),Li[Go(n,w).name]=[{name:"wrapper",func:n}],Me.prototype.clone=Sb,Me.prototype.reverse=Tb,Me.prototype.value=Ab,b.prototype.at=iw,b.prototype.chain=sw,b.prototype.commit=ow,b.prototype.next=aw,b.prototype.plant=cw,b.prototype.reverse=uw,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=dw,b.prototype.first=b.prototype.head,xs&&(b.prototype[xs]=lw),b},Ii=ob();ti?((ti.exports=Ii)._=Ii,Wl._=Ii):Rt._=Ii}).call(hr)})(Ta,Ta.exports);var Nx=Ta.exports;const Dx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),Tg=(e={})=>(()=>{const t=Dx();return Ge(t,e,!0,!0),t})(),zx=j('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),Hx=j('<span class="inline-block h-4 w-4 text-gray-700">'),co=e=>{const[t,n]=$e(!1),i=()=>n(o=>!o);return(()=>{const o=zx(),a=o.firstChild,c=a.firstChild,u=c.firstChild,d=c.nextSibling;return O(c,$(fe,{get when(){return e.icon},keyed:!0,children:h=>(()=>{const p=Hx();return O(p,h),p})()}),u),O(u,()=>e.name),d.$$click=()=>i(),O(d,$(Tg,{})),O(o,$(fe,{get when(){return t()},get children(){return e.settings()}}),null),o})()};bt(["click"]);const Fx=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Qu=(e={})=>(()=>{const t=Fx();return Ge(t,e,!0,!0),t})();var qx=typeof hr=="object"&&hr&&hr.Object===Object&&hr,Ag=qx,Wx=Ag,Zx=typeof self=="object"&&self&&self.Object===Object&&self,Kx=Wx||Zx||Function("return this")(),Dn=Kx,Vx=Dn,Gx=Vx.Symbol,ss=Gx,Pp=ss,Ig=Object.prototype,Qx=Ig.hasOwnProperty,Yx=Ig.toString,Ms=Pp?Pp.toStringTag:void 0;function Jx(e){var t=Qx.call(e,Ms),n=e[Ms];try{e[Ms]=void 0;var i=!0}catch{}var o=Yx.call(e);return i&&(t?e[Ms]=n:delete e[Ms]),o}var Xx=Jx,e5=Object.prototype,t5=e5.toString;function n5(e){return t5.call(e)}var r5=n5,Bp=ss,i5=Xx,s5=r5,o5="[object Null]",a5="[object Undefined]",Mp=Bp?Bp.toStringTag:void 0;function l5(e){return e==null?e===void 0?a5:o5:Mp&&Mp in Object(e)?i5(e):s5(e)}var os=l5;function c5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Qn=c5,u5=os,d5=Qn,f5="[object AsyncFunction]",h5="[object Function]",p5="[object GeneratorFunction]",g5="[object Proxy]";function m5(e){if(!d5(e))return!1;var t=u5(e);return t==h5||t==p5||t==f5||t==g5}var Rg=m5,v5=Dn,b5=v5["__core-js_shared__"],y5=b5,Qc=y5,jp=function(){var e=/[^.]+$/.exec(Qc&&Qc.keys&&Qc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function _5(e){return!!jp&&jp in e}var w5=_5,x5=Function.prototype,$5=x5.toString;function k5(e){if(e!=null){try{return $5.call(e)}catch{}try{return e+""}catch{}}return""}var Og=k5,E5=Rg,C5=w5,S5=Qn,T5=Og,A5=/[\\^$.*+?()[\]{}|]/g,I5=/^\[object .+?Constructor\]$/,R5=Function.prototype,O5=Object.prototype,L5=R5.toString,P5=O5.hasOwnProperty,B5=RegExp("^"+L5.call(P5).replace(A5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function M5(e){if(!S5(e)||C5(e))return!1;var t=E5(e)?B5:I5;return t.test(T5(e))}var j5=M5;function U5(e,t){return e?.[t]}var N5=U5,D5=j5,z5=N5;function H5(e,t){var n=z5(e,t);return D5(n)?n:void 0}var xi=H5,F5=xi,q5=F5(Object,"create"),il=q5,Up=il;function W5(){this.__data__=Up?Up(null):{},this.size=0}var Z5=W5;function K5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var V5=K5,G5=il,Q5="__lodash_hash_undefined__",Y5=Object.prototype,J5=Y5.hasOwnProperty;function X5(e){var t=this.__data__;if(G5){var n=t[e];return n===Q5?void 0:n}return J5.call(t,e)?t[e]:void 0}var e$=X5,t$=il,n$=Object.prototype,r$=n$.hasOwnProperty;function i$(e){var t=this.__data__;return t$?t[e]!==void 0:r$.call(t,e)}var s$=i$,o$=il,a$="__lodash_hash_undefined__";function l$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=o$&&t===void 0?a$:t,this}var c$=l$,u$=Z5,d$=V5,f$=e$,h$=s$,p$=c$;function as(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}as.prototype.clear=u$;as.prototype.delete=d$;as.prototype.get=f$;as.prototype.has=h$;as.prototype.set=p$;var g$=as;function m$(){this.__data__=[],this.size=0}var v$=m$;function b$(e,t){return e===t||e!==e&&t!==t}var Yu=b$,y$=Yu;function _$(e,t){for(var n=e.length;n--;)if(y$(e[n][0],t))return n;return-1}var sl=_$,w$=sl,x$=Array.prototype,$$=x$.splice;function k$(e){var t=this.__data__,n=w$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():$$.call(t,n,1),--this.size,!0}var E$=k$,C$=sl;function S$(e){var t=this.__data__,n=C$(t,e);return n<0?void 0:t[n][1]}var T$=S$,A$=sl;function I$(e){return A$(this.__data__,e)>-1}var R$=I$,O$=sl;function L$(e,t){var n=this.__data__,i=O$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var P$=L$,B$=v$,M$=E$,j$=T$,U$=R$,N$=P$;function ls(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ls.prototype.clear=B$;ls.prototype.delete=M$;ls.prototype.get=j$;ls.prototype.has=U$;ls.prototype.set=N$;var ol=ls,D$=xi,z$=Dn,H$=D$(z$,"Map"),Ju=H$,Np=g$,F$=ol,q$=Ju;function W$(){this.size=0,this.__data__={hash:new Np,map:new(q$||F$),string:new Np}}var Z$=W$;function K$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var V$=K$,G$=V$;function Q$(e,t){var n=e.__data__;return G$(t)?n[typeof t=="string"?"string":"hash"]:n.map}var al=Q$,Y$=al;function J$(e){var t=Y$(this,e).delete(e);return this.size-=t?1:0,t}var X$=J$,e8=al;function t8(e){return e8(this,e).get(e)}var n8=t8,r8=al;function i8(e){return r8(this,e).has(e)}var s8=i8,o8=al;function a8(e,t){var n=o8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var l8=a8,c8=Z$,u8=X$,d8=n8,f8=s8,h8=l8;function cs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}cs.prototype.clear=c8;cs.prototype.delete=u8;cs.prototype.get=d8;cs.prototype.has=f8;cs.prototype.set=h8;var Xu=cs,p8="__lodash_hash_undefined__";function g8(e){return this.__data__.set(e,p8),this}var m8=g8;function v8(e){return this.__data__.has(e)}var b8=v8,y8=Xu,_8=m8,w8=b8;function Aa(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new y8;++t<n;)this.add(e[t])}Aa.prototype.add=Aa.prototype.push=_8;Aa.prototype.has=w8;var Lg=Aa;function x8(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var $8=x8;function k8(e){return e!==e}var E8=k8;function C8(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var S8=C8,T8=$8,A8=E8,I8=S8;function R8(e,t,n){return t===t?I8(e,t,n):T8(e,A8,n)}var O8=R8,L8=O8;function P8(e,t){var n=e==null?0:e.length;return!!n&&L8(e,t,0)>-1}var B8=P8;function M8(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var j8=M8;function U8(e,t){return e.has(t)}var Pg=U8,N8=xi,D8=Dn,z8=N8(D8,"Set"),Bg=z8;function H8(){}var F8=H8;function q8(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var ed=q8,Yc=Bg,W8=F8,Z8=ed,K8=1/0,V8=Yc&&1/Z8(new Yc([,-0]))[1]==K8?function(e){return new Yc(e)}:W8,G8=V8,Q8=Lg,Y8=B8,J8=j8,X8=Pg,e6=G8,t6=ed,n6=200;function r6(e,t,n){var i=-1,o=Y8,a=e.length,c=!0,u=[],d=u;if(n)c=!1,o=J8;else if(a>=n6){var h=t?null:e6(e);if(h)return t6(h);c=!1,o=X8,d=new Q8}else d=t?[]:u;e:for(;++i<a;){var p=e[i],g=t?t(p):p;if(p=n||p!==0?p:0,c&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;t&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var Mg=r6,i6=Mg;function s6(e){return e&&e.length?i6(e):[]}var o6=s6;const mr=lo(o6),a6=j('<div class="block shrink-0 overflow-hidden border-b p-1">'),wa=e=>(()=>{const t=a6();return O(t,()=>e.children),t})();function yu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function l6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function jg(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function c6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");yu(e.outputLen),yu(e.blockLen)}function u6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function d6(e,t){jg(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const hi={number:yu,bool:l6,bytes:jg,hash:c6,exists:u6,output:d6},xa=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,f6=Object.freeze(Object.defineProperty({__proto__:null,crypto:xa},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const h6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),p6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),vi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),On=(e,t)=>e<<32-t|e>>>t,Ug=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Ug)throw new Error("Non little-endian hardware is not supported");const g6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function ln(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=g6[e[n]];return t}function Zr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const Ng=async()=>{};async function m6(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await Ng(),i+=a)}}function td(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function uo(e){if(typeof e=="string"&&(e=td(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function pi(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class nd{clone(){return this._cloneInto()}}const v6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function b6(e,t){if(t!==void 0&&(typeof t!="object"||!v6(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function ll(e){const t=i=>e().update(uo(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function y6(e){const t=(i,o)=>e(o).update(uo(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function cl(e=32){if(xa&&typeof xa.getRandomValues=="function")return xa.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const _6=Object.freeze(Object.defineProperty({__proto__:null,Hash:nd,asyncLoop:m6,bytesToHex:ln,checkOpts:b6,concatBytes:pi,createView:vi,hexToBytes:Zr,isLE:Ug,nextTick:Ng,randomBytes:cl,rotr:On,toBytes:uo,u32:p6,u8:h6,utf8ToBytes:td,wrapConstructor:ll,wrapConstructorWithOpts:y6},Symbol.toStringTag,{value:"Module"}));function w6(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+h,u,i)}let Dg=class extends nd{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=vi(this.buffer)}update(t){hi.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=uo(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=vi(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){hi.exists(this),hi.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let g=c;g<o;g++)n[g]=0;w6(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=vi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}};const x6=(e,t,n)=>e&t^~e&n,$6=(e,t,n)=>e&t^e&n^t&n,k6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Br=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Mr=new Uint32Array(64);class zg extends Dg{constructor(){super(64,32,8,!1),this.A=Br[0]|0,this.B=Br[1]|0,this.C=Br[2]|0,this.D=Br[3]|0,this.E=Br[4]|0,this.F=Br[5]|0,this.G=Br[6]|0,this.H=Br[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:c,G:u,H:d}=this;return[t,n,i,o,a,c,u,d]}set(t,n,i,o,a,c,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=c|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)Mr[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const v=Mr[g-15],_=Mr[g-2],k=On(v,7)^On(v,18)^v>>>3,x=On(_,17)^On(_,19)^_>>>10;Mr[g]=x+Mr[g-7]+k+Mr[g-16]|0}let{A:i,B:o,C:a,D:c,E:u,F:d,G:h,H:p}=this;for(let g=0;g<64;g++){const v=On(u,6)^On(u,11)^On(u,25),_=p+v+x6(u,d,h)+k6[g]+Mr[g]|0,x=(On(i,2)^On(i,13)^On(i,22))+$6(i,o,a)|0;p=h,h=d,d=u,u=c+_|0,c=a,a=o,o=i,i=_+x|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,c=c+this.D|0,u=u+this.E|0,d=d+this.F|0,h=h+this.G|0,p=p+this.H|0,this.set(i,o,a,c,u,d,h,p)}roundClean(){Mr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class E6 extends zg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Zn=ll(()=>new zg),C6=ll(()=>new E6),S6=Object.freeze(Object.defineProperty({__proto__:null,sha224:C6,sha256:Zn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Hg=BigInt(0),ul=BigInt(1),T6=BigInt(2),dl=e=>e instanceof Uint8Array,A6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Vi(e){if(!dl(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=A6[e[n]];return t}function Fg(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function rd(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function Gi(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function Zt(e){return rd(Vi(e))}function id(e){if(!dl(e))throw new Error("Uint8Array expected");return rd(Vi(Uint8Array.from(e).reverse()))}const qr=(e,t)=>Gi(e.toString(16).padStart(t*2,"0")),qg=(e,t)=>qr(e,t).reverse(),I6=e=>Gi(Fg(e));function Pt(e,t,n){let i;if(typeof t=="string")try{i=Gi(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(dl(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function cn(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!dl(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function R6(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function fl(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function O6(e){let t;for(t=0;e>Hg;e>>=ul,t+=1);return t}const L6=(e,t)=>e>>BigInt(t)&ul,P6=(e,t,n)=>e|(n?ul:Hg)<<BigInt(t),sd=e=>(T6<<BigInt(e-1))-ul,Jc=e=>new Uint8Array(e),Dp=e=>Uint8Array.from(e);function Wg(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Jc(e),o=Jc(e),a=0;const c=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=Jc())=>{o=u(Dp([0]),g),i=u(),g.length!==0&&(o=u(Dp([1]),g),i=u())},h=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<t;){i=u();const _=i.slice();v.push(_),g+=i.length}return cn(...v)};return(g,v)=>{c(),d(g);let _;for(;!(_=v(h()));)d();return c(),_}}const B6={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function us(e,t,n={}){const i=(o,a,c)=>{const u=B6[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(c&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const M6=Object.freeze(Object.defineProperty({__proto__:null,bitGet:L6,bitLen:O6,bitMask:sd,bitSet:P6,bytesToHex:Vi,bytesToNumberBE:Zt,bytesToNumberLE:id,concatBytes:cn,createHmacDrbg:Wg,ensureBytes:Pt,equalBytes:R6,hexToBytes:Gi,hexToNumber:rd,numberToBytesBE:qr,numberToBytesLE:qg,numberToHexUnpadded:Fg,numberToVarBytesBE:I6,utf8ToBytes:fl,validateObject:us},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Tt=BigInt(0),mt=BigInt(1),di=BigInt(2),j6=BigInt(3),_u=BigInt(4),zp=BigInt(5),Hp=BigInt(8);BigInt(9);BigInt(16);function kt(e,t){const n=e%t;return n>=Tt?n:t+n}function U6(e,t,n){if(n<=Tt||t<Tt)throw new Error("Expected power/modulo > 0");if(n===mt)return Tt;let i=mt;for(;t>Tt;)t&mt&&(i=i*e%n),e=e*e%n,t>>=mt;return i}function $n(e,t,n){let i=e;for(;t-- >Tt;)i*=i,i%=n;return i}function wu(e,t){if(e===Tt||t<=Tt)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=kt(e,t),i=t,o=Tt,a=mt;for(;n!==Tt;){const u=i/n,d=i%n,h=o-a*u;i=n,n=d,o=a,a=h}if(i!==mt)throw new Error("invert: does not exist");return kt(o,t)}function N6(e){const t=(e-mt)/di;let n,i,o;for(n=e-mt,i=0;n%di===Tt;n/=di,i++);for(o=di;o<e&&U6(o,t,e)!==e-mt;o++);if(i===1){const c=(e+mt)/_u;return function(d,h){const p=d.pow(h,c);if(!d.eql(d.sqr(p),h))throw new Error("Cannot find square root");return p}}const a=(n+mt)/di;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let h=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let _=1;for(let x=u.sqr(v);_<h&&!u.eql(x,u.ONE);_++)x=u.sqr(x);const k=u.pow(p,mt<<BigInt(h-_-1));p=u.sqr(k),g=u.mul(g,k),v=u.mul(v,p),h=_}return g}}function D6(e){if(e%_u===j6){const t=(e+mt)/_u;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%Hp===zp){const t=(e-zp)/Hp;return function(i,o){const a=i.mul(o,di),c=i.pow(a,t),u=i.mul(o,c),d=i.mul(i.mul(u,di),c),h=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(h),o))throw new Error("Cannot find square root");return h}}return N6(e)}const z6=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function Zg(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=z6.reduce((i,o)=>(i[o]="function",i),t);return us(e,n)}function H6(e,t,n){if(n<Tt)throw new Error("Expected power > 0");if(n===Tt)return e.ONE;if(n===mt)return t;let i=e.ONE,o=t;for(;n>Tt;)n&mt&&(i=e.mul(i,o)),o=e.sqr(o),n>>=mt;return i}function F6(e,t){const n=new Array(t.length),i=t.reduce((a,c,u)=>e.is0(c)?a:(n[u]=a,e.mul(a,c)),e.ONE),o=e.inv(i);return t.reduceRight((a,c,u)=>e.is0(c)?a:(n[u]=e.mul(a,n[u]),e.mul(a,c)),o),n}function od(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function q6(e,t,n=!1,i={}){if(e<=Tt)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=od(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const c=D6(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:sd(o),ZERO:Tt,ONE:mt,create:d=>kt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return Tt<=d&&d<e},is0:d=>d===Tt,isOdd:d=>(d&mt)===mt,neg:d=>kt(-d,e),eql:(d,h)=>d===h,sqr:d=>kt(d*d,e),add:(d,h)=>kt(d+h,e),sub:(d,h)=>kt(d-h,e),mul:(d,h)=>kt(d*h,e),pow:(d,h)=>H6(u,d,h),div:(d,h)=>kt(d*wu(h,e),e),sqrN:d=>d*d,addN:(d,h)=>d+h,subN:(d,h)=>d-h,mulN:(d,h)=>d*h,inv:d=>wu(d,e),sqrt:i.sqrt||(d=>c(u,d)),invertBatch:d=>F6(u,d),cmov:(d,h,p)=>p?h:d,toBytes:d=>n?qg(d,a):qr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?id(d):Zt(d)}});return Object.freeze(u)}function W6(e,t,n=!1){e=Pt("privateHash",e);const i=e.length,o=od(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?id(e):Zt(e);return kt(a,t-mt)+mt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Z6=BigInt(0),Xc=BigInt(1);function K6(e,t){const n=(o,a)=>{const c=a.negate();return o?c:a},i=o=>{const a=Math.ceil(t/o)+1,c=2**(o-1);return{windows:a,windowSize:c}};return{constTimeNegate:n,unsafeLadder(o,a){let c=e.ZERO,u=o;for(;a>Z6;)a&Xc&&(c=c.add(u)),u=u.double(),a>>=Xc;return c},precomputeWindow(o,a){const{windows:c,windowSize:u}=i(a),d=[];let h=o,p=h;for(let g=0;g<c;g++){p=h,d.push(p);for(let v=1;v<u;v++)p=p.add(h),d.push(p);h=p.double()}return d},wNAF(o,a,c){const{windows:u,windowSize:d}=i(o);let h=e.ZERO,p=e.BASE;const g=BigInt(2**o-1),v=2**o,_=BigInt(o);for(let k=0;k<u;k++){const x=k*d;let E=Number(c&g);c>>=_,E>d&&(E-=v,c+=Xc);const w=x,T=x+Math.abs(E)-1,R=k%2!==0,A=E<0;E===0?p=p.add(n(R,a[w])):h=h.add(n(A,a[T]))}return{p:h,f:p}},wNAFCached(o,a,c,u){const d=o._WINDOW_SIZE||1;let h=a.get(o);return h||(h=this.precomputeWindow(o,d),d!==1&&a.set(o,u(h))),this.wNAF(d,h,c)}}}function Kg(e){return Zg(e.Fp),us(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...od(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function V6(e){const t=Kg(e);us(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:G6,hexToBytes:Q6}=M6,gi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=gi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:G6(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=gi,n=typeof e=="string"?Q6(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=gi._parseInt(n.subarray(2)),{d:c,l:u}=gi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:c}},hexFromSig(e){const t=h=>Number.parseInt(h[0],16)&8?"00"+h:h,n=h=>{const p=h.toString(16);return p.length&1?`0${p}`:p},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,c=o.length/2,u=n(a),d=n(c);return`30${n(c+a+4)}02${d}${o}02${u}${i}`}},Pn=BigInt(0),_t=BigInt(1),ur=BigInt(2),Ia=BigInt(3),Fp=BigInt(4);function Y6(e){const t=V6(e),{Fp:n}=t,i=t.toBytes||((k,x,E)=>{const w=x.toAffine();return cn(Uint8Array.from([4]),n.toBytes(w.x),n.toBytes(w.y))}),o=t.fromBytes||(k=>{const x=k.subarray(1),E=n.fromBytes(x.subarray(0,n.BYTES)),w=n.fromBytes(x.subarray(n.BYTES,2*n.BYTES));return{x:E,y:w}});function a(k){const{a:x,b:E}=t,w=n.sqr(k),T=n.mul(w,k);return n.add(n.add(T,n.mul(k,x)),E)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function c(k){return typeof k=="bigint"&&Pn<k&&k<t.n}function u(k){if(!c(k))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(k){const{allowedPrivateKeyLengths:x,nByteLength:E,wrapPrivateKey:w,n:T}=t;if(x&&typeof k!="bigint"){if(k instanceof Uint8Array&&(k=Vi(k)),typeof k!="string"||!x.includes(k.length))throw new Error("Invalid key");k=k.padStart(E*2,"0")}let R;try{R=typeof k=="bigint"?k:Zt(Pt("private key",k,E))}catch{throw new Error(`private key must be ${E} bytes, hex or bigint, not ${typeof k}`)}return w&&(R=kt(R,T)),u(R),R}const h=new Map;function p(k){if(!(k instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(x,E,w){if(this.px=x,this.py=E,this.pz=w,x==null||!n.isValid(x))throw new Error("x required");if(E==null||!n.isValid(E))throw new Error("y required");if(w==null||!n.isValid(w))throw new Error("z required")}static fromAffine(x){const{x:E,y:w}=x||{};if(!x||!n.isValid(E)||!n.isValid(w))throw new Error("invalid affine point");if(x instanceof g)throw new Error("projective point not allowed");const T=R=>n.eql(R,n.ZERO);return T(E)&&T(w)?g.ZERO:new g(E,w,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(x){const E=n.invertBatch(x.map(w=>w.pz));return x.map((w,T)=>w.toAffine(E[T])).map(g.fromAffine)}static fromHex(x){const E=g.fromAffine(o(Pt("pointHex",x)));return E.assertValidity(),E}static fromPrivateKey(x){return g.BASE.multiply(d(x))}_setWindowSize(x){this._WINDOW_SIZE=x,h.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x,y:E}=this.toAffine();if(!n.isValid(x)||!n.isValid(E))throw new Error("bad point: x or y not FE");const w=n.sqr(E),T=a(x);if(!n.eql(w,T))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:x}=this.toAffine();if(n.isOdd)return!n.isOdd(x);throw new Error("Field doesn't support isOdd")}equals(x){p(x);const{px:E,py:w,pz:T}=this,{px:R,py:A,pz:B}=x,C=n.eql(n.mul(E,B),n.mul(R,T)),P=n.eql(n.mul(w,B),n.mul(A,T));return C&&P}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:x,b:E}=t,w=n.mul(E,Ia),{px:T,py:R,pz:A}=this;let B=n.ZERO,C=n.ZERO,P=n.ZERO,U=n.mul(T,T),ee=n.mul(R,R),Z=n.mul(A,A),Q=n.mul(T,R);return Q=n.add(Q,Q),P=n.mul(T,A),P=n.add(P,P),B=n.mul(x,P),C=n.mul(w,Z),C=n.add(B,C),B=n.sub(ee,C),C=n.add(ee,C),C=n.mul(B,C),B=n.mul(Q,B),P=n.mul(w,P),Z=n.mul(x,Z),Q=n.sub(U,Z),Q=n.mul(x,Q),Q=n.add(Q,P),P=n.add(U,U),U=n.add(P,U),U=n.add(U,Z),U=n.mul(U,Q),C=n.add(C,U),Z=n.mul(R,A),Z=n.add(Z,Z),U=n.mul(Z,Q),B=n.sub(B,U),P=n.mul(Z,ee),P=n.add(P,P),P=n.add(P,P),new g(B,C,P)}add(x){p(x);const{px:E,py:w,pz:T}=this,{px:R,py:A,pz:B}=x;let C=n.ZERO,P=n.ZERO,U=n.ZERO;const ee=t.a,Z=n.mul(t.b,Ia);let Q=n.mul(E,R),q=n.mul(w,A),Y=n.mul(T,B),ie=n.add(E,w),K=n.add(R,A);ie=n.mul(ie,K),K=n.add(Q,q),ie=n.sub(ie,K),K=n.add(E,T);let D=n.add(R,B);return K=n.mul(K,D),D=n.add(Q,Y),K=n.sub(K,D),D=n.add(w,T),C=n.add(A,B),D=n.mul(D,C),C=n.add(q,Y),D=n.sub(D,C),U=n.mul(ee,K),C=n.mul(Z,Y),U=n.add(C,U),C=n.sub(q,U),U=n.add(q,U),P=n.mul(C,U),q=n.add(Q,Q),q=n.add(q,Q),Y=n.mul(ee,Y),K=n.mul(Z,K),q=n.add(q,Y),Y=n.sub(Q,Y),Y=n.mul(ee,Y),K=n.add(K,Y),Q=n.mul(q,K),P=n.add(P,Q),Q=n.mul(D,K),C=n.mul(ie,C),C=n.sub(C,Q),Q=n.mul(ie,q),U=n.mul(D,U),U=n.add(U,Q),new g(C,P,U)}subtract(x){return this.add(x.negate())}is0(){return this.equals(g.ZERO)}wNAF(x){return _.wNAFCached(this,h,x,E=>{const w=n.invertBatch(E.map(T=>T.pz));return E.map((T,R)=>T.toAffine(w[R])).map(g.fromAffine)})}multiplyUnsafe(x){const E=g.ZERO;if(x===Pn)return E;if(u(x),x===_t)return this;const{endo:w}=t;if(!w)return _.unsafeLadder(this,x);let{k1neg:T,k1:R,k2neg:A,k2:B}=w.splitScalar(x),C=E,P=E,U=this;for(;R>Pn||B>Pn;)R&_t&&(C=C.add(U)),B&_t&&(P=P.add(U)),U=U.double(),R>>=_t,B>>=_t;return T&&(C=C.negate()),A&&(P=P.negate()),P=new g(n.mul(P.px,w.beta),P.py,P.pz),C.add(P)}multiply(x){u(x);let E=x,w,T;const{endo:R}=t;if(R){const{k1neg:A,k1:B,k2neg:C,k2:P}=R.splitScalar(E);let{p:U,f:ee}=this.wNAF(B),{p:Z,f:Q}=this.wNAF(P);U=_.constTimeNegate(A,U),Z=_.constTimeNegate(C,Z),Z=new g(n.mul(Z.px,R.beta),Z.py,Z.pz),w=U.add(Z),T=ee.add(Q)}else{const{p:A,f:B}=this.wNAF(E);w=A,T=B}return g.normalizeZ([w,T])[0]}multiplyAndAddUnsafe(x,E,w){const T=g.BASE,R=(B,C)=>C===Pn||C===_t||!B.equals(T)?B.multiplyUnsafe(C):B.multiply(C),A=R(this,E).add(R(x,w));return A.is0()?void 0:A}toAffine(x){const{px:E,py:w,pz:T}=this,R=this.is0();x==null&&(x=R?n.ONE:n.inv(T));const A=n.mul(E,x),B=n.mul(w,x),C=n.mul(T,x);if(R)return{x:n.ZERO,y:n.ZERO};if(!n.eql(C,n.ONE))throw new Error("invZ was invalid");return{x:A,y:B}}isTorsionFree(){const{h:x,isTorsionFree:E}=t;if(x===_t)return!0;if(E)return E(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:x,clearCofactor:E}=t;return x===_t?this:E?E(g,this):this.multiplyUnsafe(t.h)}toRawBytes(x=!0){return this.assertValidity(),i(g,this,x)}toHex(x=!0){return Vi(this.toRawBytes(x))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=t.nBitLength,_=K6(g,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:c}}function J6(e){const t=Kg(e);return us(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function X6(e){const t=J6(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function c(K){return Pn<K&&K<n.ORDER}function u(K){return kt(K,i)}function d(K){return wu(K,i)}const{ProjectivePoint:h,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:v}=Y6({...t,toBytes(K,D,ne){const G=D.toAffine(),ae=n.toBytes(G.x),he=cn;return ne?he(Uint8Array.from([D.hasEvenY()?2:3]),ae):he(Uint8Array.from([4]),ae,n.toBytes(G.y))},fromBytes(K){const D=K.length,ne=K[0],G=K.subarray(1);if(D===o&&(ne===2||ne===3)){const ae=Zt(G);if(!c(ae))throw new Error("Point is not on curve");const he=g(ae);let te=n.sqrt(he);const ue=(te&_t)===_t;return(ne&1)===1!==ue&&(te=n.neg(te)),{x:ae,y:te}}else if(D===a&&ne===4){const ae=n.fromBytes(G.subarray(0,n.BYTES)),he=n.fromBytes(G.subarray(n.BYTES,2*n.BYTES));return{x:ae,y:he}}else throw new Error(`Point of length ${D} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),_=K=>Vi(qr(K,t.nByteLength));function k(K){const D=i>>_t;return K>D}function x(K){return k(K)?u(-K):K}const E=(K,D,ne)=>Zt(K.slice(D,ne));class w{constructor(D,ne,G){this.r=D,this.s=ne,this.recovery=G,this.assertValidity()}static fromCompact(D){const ne=t.nByteLength;return D=Pt("compactSignature",D,ne*2),new w(E(D,0,ne),E(D,ne,2*ne))}static fromDER(D){const{r:ne,s:G}=gi.toSig(Pt("DER",D));return new w(ne,G)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(D){return new w(this.r,this.s,D)}recoverPublicKey(D){const{r:ne,s:G,recovery:ae}=this,he=P(Pt("msgHash",D));if(ae==null||![0,1,2,3].includes(ae))throw new Error("recovery id invalid");const te=ae===2||ae===3?ne+t.n:ne;if(te>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const ue=ae&1?"03":"02",Ne=h.fromHex(ue+_(te)),nt=d(te),Je=u(-he*nt),yt=u(G*nt),J=h.BASE.multiplyAndAddUnsafe(Ne,Je,yt);if(!J)throw new Error("point at infinify");return J.assertValidity(),J}hasHighS(){return k(this.s)}normalizeS(){return this.hasHighS()?new w(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return Gi(this.toDERHex())}toDERHex(){return gi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Gi(this.toCompactHex())}toCompactHex(){return _(this.r)+_(this.s)}}const T={isValidPrivateKey(K){try{return p(K),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const K=t.randomBytes(n.BYTES+8),D=W6(K,i);return qr(D,t.nByteLength)},precompute(K=8,D=h.BASE){return D._setWindowSize(K),D.multiply(BigInt(3)),D}};function R(K,D=!0){return h.fromPrivateKey(K).toRawBytes(D)}function A(K){const D=K instanceof Uint8Array,ne=typeof K=="string",G=(D||ne)&&K.length;return D?G===o||G===a:ne?G===2*o||G===2*a:K instanceof h}function B(K,D,ne=!0){if(A(K))throw new Error("first arg must be private key");if(!A(D))throw new Error("second arg must be public key");return h.fromHex(D).multiply(p(K)).toRawBytes(ne)}const C=t.bits2int||function(K){const D=Zt(K),ne=K.length*8-t.nBitLength;return ne>0?D>>BigInt(ne):D},P=t.bits2int_modN||function(K){return u(C(K))},U=sd(t.nBitLength);function ee(K){if(typeof K!="bigint")throw new Error("bigint expected");if(!(Pn<=K&&K<U))throw new Error(`bigint expected < 2^${t.nBitLength}`);return qr(K,t.nByteLength)}function Z(K,D,ne=Q){if(["recovered","canonical"].some(oe=>oe in ne))throw new Error("sign() legacy options not supported");const{hash:G,randomBytes:ae}=t;let{lowS:he,prehash:te,extraEntropy:ue}=ne;he==null&&(he=!0),K=Pt("msgHash",K),te&&(K=Pt("prehashed msgHash",G(K)));const Ne=P(K),nt=p(D),Je=[ee(nt),ee(Ne)];if(ue!=null){const oe=ue===!0?ae(n.BYTES):ue;Je.push(Pt("extraEntropy",oe,n.BYTES))}const yt=cn(...Je),J=Ne;function Xe(oe){const Fe=C(oe);if(!v(Fe))return;const ot=d(Fe),Qe=h.BASE.multiply(Fe).toAffine(),At=u(Qe.x);if(At===Pn)return;const Ke=u(ot*u(J+At*nt));if(Ke===Pn)return;let It=(Qe.x===At?0:2)|Number(Qe.y&_t),En=Ke;return he&&k(Ke)&&(En=x(Ke),It^=1),new w(At,En,It)}return{seed:yt,k2sig:Xe}}const Q={lowS:t.lowS,prehash:!1},q={lowS:t.lowS,prehash:!1};function Y(K,D,ne=Q){const{seed:G,k2sig:ae}=Z(K,D,ne);return Wg(t.hash.outputLen,t.nByteLength,t.hmac)(G,ae)}h.BASE._setWindowSize(8);function ie(K,D,ne,G=q){const ae=K;if(D=Pt("msgHash",D),ne=Pt("publicKey",ne),"strict"in G)throw new Error("options.strict was renamed to lowS");const{lowS:he,prehash:te}=G;let ue,Ne;try{if(typeof ae=="string"||ae instanceof Uint8Array)try{ue=w.fromDER(ae)}catch(Qe){if(!(Qe instanceof gi.Err))throw Qe;ue=w.fromCompact(ae)}else if(typeof ae=="object"&&typeof ae.r=="bigint"&&typeof ae.s=="bigint"){const{r:Qe,s:At}=ae;ue=new w(Qe,At)}else throw new Error("PARSE");Ne=h.fromHex(ne)}catch(Qe){if(Qe.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(he&&ue.hasHighS())return!1;te&&(D=t.hash(D));const{r:nt,s:Je}=ue,yt=P(D),J=d(Je),Xe=u(yt*J),oe=u(nt*J),Fe=h.BASE.multiplyAndAddUnsafe(Ne,Xe,oe)?.toAffine();return Fe?u(Fe.x)===nt:!1}return{CURVE:t,getPublicKey:R,getSharedSecret:B,sign:Y,verify:ie,ProjectivePoint:h,Signature:w,utils:T}}function e7(e,t){const n=e.ORDER;let i=Pn;for(let v=n-_t;v%ur===Pn;v/=ur)i+=_t;const o=i,a=(n-_t)/ur**o,c=(a-_t)/ur,u=ur**o-_t,d=ur**(o-_t),h=e.pow(t,a),p=e.pow(t,(a+_t)/ur);let g=(v,_)=>{let k=h,x=e.pow(_,u),E=e.sqr(x);E=e.mul(E,_);let w=e.mul(v,E);w=e.pow(w,c),w=e.mul(w,x),x=e.mul(w,_),E=e.mul(w,v);let T=e.mul(E,x);w=e.pow(T,d);let R=e.eql(w,e.ONE);x=e.mul(E,p),w=e.mul(T,k),E=e.cmov(x,E,R),T=e.cmov(w,T,R);for(let A=o;A>_t;A--){let B=ur**(A-ur),C=e.pow(T,B);const P=e.eql(C,e.ONE);x=e.mul(E,k),k=e.mul(k,k),C=e.mul(T,k),E=e.cmov(x,E,P),T=e.cmov(C,T,P)}return{isValid:R,value:E}};if(e.ORDER%Fp===Ia){const v=(e.ORDER-Ia)/Fp,_=e.sqrt(e.neg(t));g=(k,x)=>{let E=e.sqr(x);const w=e.mul(k,x);E=e.mul(E,w);let T=e.pow(E,v);T=e.mul(T,w);const R=e.mul(T,_),A=e.mul(e.sqr(T),x),B=e.eql(A,k);let C=e.cmov(R,T,B);return{isValid:B,value:C}}}return g}function t7(e,t){if(Zg(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=e7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,c,u,d,h,p,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),c=e.add(a,e.ONE),c=e.mul(c,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(c),h=e.sqr(u),d=e.mul(h,t.A),a=e.add(a,d),a=e.mul(a,c),h=e.mul(h,u),d=e.mul(h,t.B),a=e.add(a,d),p=e.mul(o,c);const{isValid:v,value:_}=n(a,h);g=e.mul(o,i),g=e.mul(g,_),p=e.cmov(p,c,v),g=e.cmov(g,_,v);const k=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,k),p=e.div(p,u),{x:p,y:g}}}function n7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return fl(e);throw new Error("DST must be Uint8Array or string")}const r7=Zt;function Nr(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function i7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function qs(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function ad(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function s7(e,t,n,i){qs(e),qs(t),ad(n),t.length>255&&(t=i(cn(fl("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,c=Math.ceil(n/o);if(c>255)throw new Error("Invalid xmd length");const u=cn(t,Nr(t.length,1)),d=Nr(0,a),h=Nr(n,2),p=new Array(c),g=i(cn(d,e,h,Nr(0,1),u));p[0]=i(cn(g,Nr(1,1),u));for(let _=1;_<=c;_++){const k=[i7(g,p[_-1]),Nr(_+1,1),u];p[_]=i(cn(...k))}return cn(...p).slice(0,n)}function o7(e,t,n,i,o){if(qs(e),qs(t),ad(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(fl("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(Nr(n,2)).update(t).update(Nr(t.length,1)).digest()}function qp(e,t,n){us(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:c,expand:u,DST:d}=n;qs(e),ad(t);const h=n7(d),p=i.toString(2).length,g=Math.ceil((p+o)/8),v=t*a*g;let _;if(u==="xmd")_=s7(e,h,v,c);else if(u==="xof")_=o7(e,h,v,o,c);else if(u==="_internal_pass")_=e;else throw new Error('expand must be "xmd" or "xof"');const k=new Array(t);for(let x=0;x<t;x++){const E=new Array(a);for(let w=0;w<a;w++){const T=g*(w+x*a),R=_.subarray(T,T+g);E[w]=kt(r7(R),i)}k[x]=E}return k}function a7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,c,u,d]=n.map(h=>h.reduce((p,g)=>e.add(e.mul(p,i),g)));return i=e.div(a,c),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function l7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=qp(i,2,{...n,DST:n.DST,...o}),c=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=c.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=qp(i,1,{...n,DST:n.encodeDST,...o}),c=e.fromAffine(t(a[0])).clearCofactor();return c.assertValidity(),c}}}class Vg extends nd{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,hi.hash(t);const i=uo(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let c=0;c<a.length;c++)a[c]^=54;this.iHash.update(a),this.oHash=t.create();for(let c=0;c<a.length;c++)a[c]^=106;this.oHash.update(a),a.fill(0)}update(t){return hi.exists(this),this.iHash.update(t),this}digestInto(t){hi.exists(this),hi.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:c,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=c,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Ra=(e,t,n)=>new Vg(e,t).update(n).digest();Ra.create=(e,t)=>new Vg(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function c7(e){return{hash:e,hmac:(t,...n)=>Ra(e,t,pi(...n)),randomBytes:cl}}function u7(e,t){const n=i=>X6({...e,...c7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const hl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Oa=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Gg=BigInt(1),La=BigInt(2),Wp=(e,t)=>(e+t/La)/t;function Qg(e){const t=hl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),c=BigInt(23),u=BigInt(44),d=BigInt(88),h=e*e*e%t,p=h*h*e%t,g=$n(p,n,t)*p%t,v=$n(g,n,t)*p%t,_=$n(v,La,t)*h%t,k=$n(_,o,t)*_%t,x=$n(k,a,t)*k%t,E=$n(x,u,t)*x%t,w=$n(E,d,t)*E%t,T=$n(w,u,t)*x%t,R=$n(T,n,t)*p%t,A=$n(R,c,t)*k%t,B=$n(A,i,t)*h%t,C=$n(B,La,t);if(!Kr.eql(Kr.sqr(C),e))throw new Error("Cannot find square root");return C}const Kr=q6(hl,void 0,void 0,{sqrt:Qg}),Wt=u7({a:BigInt(0),b:BigInt(7),Fp:Kr,n:Oa,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=Oa,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Gg*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,c=BigInt("0x100000000000000000000000000000000"),u=Wp(a*e,t),d=Wp(-i*e,t);let h=kt(e-u*n-d*o,t),p=kt(-u*i-d*a,t);const g=h>c,v=p>c;if(g&&(h=t-h),v&&(p=t-p),h>c||p>c)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:h,k2neg:v,k2:p}}}},Zn),pl=BigInt(0),Yg=e=>typeof e=="bigint"&&pl<e&&e<hl,d7=e=>typeof e=="bigint"&&pl<e&&e<Oa,Zp={};function Pa(e,...t){let n=Zp[e];if(n===void 0){const i=Zn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=cn(i,i),Zp[e]=n}return Zn(cn(n,...t))}const ld=e=>e.toRawBytes(!0).slice(1),xu=e=>qr(e,32),eu=e=>kt(e,hl),Ws=e=>kt(e,Oa),cd=Wt.ProjectivePoint,f7=(e,t,n)=>cd.BASE.multiplyAndAddUnsafe(e,t,n);function $u(e){let t=Wt.utils.normPrivateKeyToScalar(e),n=cd.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Ws(-t),bytes:ld(n)}}function Jg(e){if(!Yg(e))throw new Error("bad x: need 0 < x < p");const t=eu(e*e),n=eu(t*e+BigInt(7));let i=Qg(n);i%La!==pl&&(i=eu(-i));const o=new cd(e,i,Gg);return o.assertValidity(),o}function Xg(...e){return Ws(Zt(Pa("BIP0340/challenge",...e)))}function h7(e){return $u(e).bytes}function p7(e,t,n=cl(32)){const i=Pt("message",e),{bytes:o,scalar:a}=$u(t),c=Pt("auxRand",n,32),u=xu(a^Zt(Pa("BIP0340/aux",c))),d=Pa("BIP0340/nonce",u,o,i),h=Ws(Zt(d));if(h===pl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=$u(h),v=Xg(p,o,i),_=new Uint8Array(64);if(_.set(p,0),_.set(xu(Ws(g+v*a)),32),!e1(_,i,o))throw new Error("sign: Invalid signature produced");return _}function e1(e,t,n){const i=Pt("signature",e,64),o=Pt("message",t),a=Pt("publicKey",n,32);try{const c=Jg(Zt(a)),u=Zt(i.subarray(0,32));if(!Yg(u))return!1;const d=Zt(i.subarray(32,64));if(!d7(d))return!1;const h=Xg(xu(u),ld(c),o),p=f7(c,d,Ws(-h));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const fo={getPublicKey:h7,sign:p7,verify:e1,utils:{randomPrivateKey:Wt.utils.randomPrivateKey,lift_x:Jg,pointToBytes:ld,numberToBytesBE:qr,bytesToNumberBE:Zt,taggedHash:Pa,mod:kt}},g7=a7(Kr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),m7=t7(Kr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Kr.create(BigInt("-11"))});l7(Wt.ProjectivePoint,e=>{const{x:t,y:n}=m7(Kr.create(e[0]));return g7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Kr.ORDER,m:1,k:128,expand:"xmd",hash:Zn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Yr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function zn(...e){const t=(o,a)=>c=>o(a(c)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Yn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Yr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Jn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function ho(e,t="="){if(Yr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function t1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Kp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(c=>{if(Yr(c),c<0||c>=t)throw new Error(`Wrong integer: ${c}`)});;){let c=0,u=!0;for(let d=i;d<a.length;d++){const h=a[d],p=t*c+h;if(!Number.isSafeInteger(p)||t*c/t!==c||p-h!==t*c)throw new Error("convertRadix: carry overflow");if(c=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+c!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(c),u)break}for(let c=0;c<e.length-1&&e[c]===0;c++)o.push(0);return o.reverse()}const n1=(e,t)=>t?n1(t,e%t):e,Ba=(e,t)=>e+(t-n1(e,t));function ku(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Ba(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Ba(t,n)}`);let o=0,a=0;const c=2**n-1,u=[];for(const d of e){if(Yr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&c)>>>0);o&=2**a-1}if(o=o<<n-a&c,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function r1(e){return Yr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Kp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Kp(t,e,2**8))}}}function xr(e,t=!1){if(Yr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Ba(8,e)>32||Ba(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return ku(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(ku(n,e,8,t))}}}function Vp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function i1(e,t){if(Yr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let c=0;c<e;c++)if(o[c]!==a[c])throw new Error("Invalid checksum");return i}}}const v7={alphabet:Yn,chain:zn,checksum:i1,radix:r1,radix2:xr,join:Jn,padding:ho},s1=zn(xr(4),Yn("0123456789ABCDEF"),Jn("")),o1=zn(xr(5),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),ho(5),Jn("")),b7=zn(xr(5),Yn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),ho(5),Jn("")),y7=zn(xr(5),Yn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Jn(""),t1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Qi=zn(xr(6),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),ho(6),Jn("")),a1=zn(xr(6),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),ho(6),Jn("")),ud=e=>zn(r1(58),Yn(e),Jn("")),Zs=ud("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),_7=ud("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),w7=ud("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Gp=[0,2,3,5,6,7,9,10,11],l1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Zs.encode(i).padStart(Gp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Gp.indexOf(i.length),a=Zs.decode(i);for(let c=0;c<a.length-o;c++)if(a[c]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},c1=e=>zn(i1(4,t=>e(e(t))),Zs),Eu=zn(Yn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Jn("")),Qp=[996825010,642813549,513874426,1027748829,705979059];function js(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Qp.length;i++)(t>>i&1)===1&&(n^=Qp[i]);return n}function Yp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const c=e.charCodeAt(a);if(c<33||c>126)throw new Error(`Invalid prefix (${e})`);o=js(o)^c>>5}o=js(o);for(let a=0;a<i;a++)o=js(o)^e.charCodeAt(a)&31;for(let a of t)o=js(o)^a;for(let a=0;a<6;a++)o=js(o);return o^=n,Eu.encode(ku([o%2**30],30,5,!1))}function u1(e){const t=e==="bech32"?1:734539939,n=xr(5),i=n.decode,o=n.encode,a=Vp(i);function c(p,g,v=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const _=p.length+7+g.length;if(v!==!1&&_>v)throw new TypeError(`Length ${_} exceeds limit ${v}`);return p=p.toLowerCase(),`${p}1${Eu.encode(g)}${Yp(p,g,t)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const v=p.toLowerCase();if(p!==v&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=v;const _=p.lastIndexOf("1");if(_===0||_===-1)throw new Error('Letter "1" must be present between prefix and data only');const k=p.slice(0,_),x=p.slice(_+1);if(x.length<6)throw new Error("Data must be at least 6 characters long");const E=Eu.decode(x).slice(0,-6),w=Yp(k,E,t);if(!x.endsWith(w))throw new Error(`Invalid checksum in ${p}: expected "${w}"`);return{prefix:k,words:E}}const d=Vp(u);function h(p){const{prefix:g,words:v}=u(p,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:c,decode:u,decodeToBytes:h,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Kt=u1("bech32"),x7=u1("bech32m"),d1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},f1=zn(xr(4),Yn("0123456789abcdef"),Jn(""),t1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Ks={utf8:d1,hex:f1,base16:s1,base32:o1,base64:Qi,base64url:a1,base58:Zs,base58xmr:l1},h1=`Invalid encoding type. Available types: ${Object.keys(Ks).join(", ")}`,p1=(e,t)=>{if(typeof e!="string"||!Ks.hasOwnProperty(e))throw new TypeError(h1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Ks[e].encode(t)},$7=p1,g1=(e,t)=>{if(!Ks.hasOwnProperty(e))throw new TypeError(h1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Ks[e].decode(t)},k7=g1,E7=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Yr,base16:s1,base32:o1,base32crockford:y7,base32hex:b7,base58:Zs,base58check:c1,base58flickr:_7,base58xmr:l1,base58xrp:w7,base64:Qi,base64url:a1,bech32:Kt,bech32m:x7,bytes:k7,bytesToString:p1,hex:f1,str:$7,stringToBytes:g1,utf8:d1,utils:v7},Symbol.toStringTag,{value:"Module"}));var dd={};Object.defineProperty(dd,"__esModule",{value:!0});var fd=dd.wordlist=void 0;fd=dd.wordlist=`abandon
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
`);var un={},St={};Object.defineProperty(St,"__esModule",{value:!0});St.output=St.exists=St.hash=Hi=St.bytes=St.bool=St.number=void 0;function Ma(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}St.number=Ma;function m1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}St.bool=m1;function hd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Hi=St.bytes=hd;function v1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ma(e.outputLen),Ma(e.blockLen)}St.hash=v1;function b1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}St.exists=b1;function y1(e,t){hd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}St.output=y1;const C7={number:Ma,bool:m1,bytes:hd,hash:v1,exists:b1,output:y1};St.default=C7;var Yi={},_1={},po={};const S7=rl(f6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=S7,n=A=>new Uint8Array(A.buffer,A.byteOffset,A.byteLength);e.u8=n;const i=A=>new Uint32Array(A.buffer,A.byteOffset,Math.floor(A.byteLength/4));e.u32=i;const o=A=>new DataView(A.buffer,A.byteOffset,A.byteLength);e.createView=o;const a=(A,B)=>A<<32-B|A>>>B;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},(A,B)=>B.toString(16).padStart(2,"0"));function u(A){if(!(A instanceof Uint8Array))throw new Error("Uint8Array expected");let B="";for(let C=0;C<A.length;C++)B+=c[A[C]];return B}e.bytesToHex=u;function d(A){if(typeof A!="string")throw new TypeError("hexToBytes: expected string, got "+typeof A);if(A.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const B=new Uint8Array(A.length/2);for(let C=0;C<B.length;C++){const P=C*2,U=A.slice(P,P+2),ee=Number.parseInt(U,16);if(Number.isNaN(ee)||ee<0)throw new Error("Invalid byte sequence");B[C]=ee}return B}e.hexToBytes=d;const h=async()=>{};e.nextTick=h;async function p(A,B,C){let P=Date.now();for(let U=0;U<A;U++){C(U);const ee=Date.now()-P;ee>=0&&ee<B||(await(0,e.nextTick)(),P+=ee)}}e.asyncLoop=p;function g(A){if(typeof A!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof A}`);return new TextEncoder().encode(A)}e.utf8ToBytes=g;function v(A){if(typeof A=="string"&&(A=g(A)),!(A instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof A})`);return A}e.toBytes=v;function _(...A){if(!A.every(P=>P instanceof Uint8Array))throw new Error("Uint8Array list expected");if(A.length===1)return A[0];const B=A.reduce((P,U)=>P+U.length,0),C=new Uint8Array(B);for(let P=0,U=0;P<A.length;P++){const ee=A[P];C.set(ee,U),U+=ee.length}return C}e.concatBytes=_;class k{clone(){return this._cloneInto()}}e.Hash=k;const x=A=>Object.prototype.toString.call(A)==="[object Object]"&&A.constructor===Object;function E(A,B){if(B!==void 0&&(typeof B!="object"||!x(B)))throw new TypeError("Options should be object or undefined");return Object.assign(A,B)}e.checkOpts=E;function w(A){const B=P=>A().update(v(P)).digest(),C=A();return B.outputLen=C.outputLen,B.blockLen=C.blockLen,B.create=()=>A(),B}e.wrapConstructor=w;function T(A){const B=(P,U)=>A(U).update(v(P)).digest(),C=A({});return B.outputLen=C.outputLen,B.blockLen=C.blockLen,B.create=P=>A(P),B}e.wrapConstructorWithOpts=T;function R(A=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(A));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=R})(po);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=St,n=po;class i extends n.Hash{constructor(c,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(c);const d=(0,n.toBytes)(u);if(this.iHash=c.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const h=this.blockLen,p=new Uint8Array(h);p.set(d.length>h?c.create().update(d).digest():d);for(let g=0;g<p.length;g++)p[g]^=54;this.iHash.update(p),this.oHash=c.create();for(let g=0;g<p.length;g++)p[g]^=106;this.oHash.update(p),p.fill(0)}update(c){return t.default.exists(this),this.iHash.update(c),this}digestInto(c){t.default.exists(this),t.default.bytes(c,this.outputLen),this.finished=!0,this.iHash.digestInto(c),this.oHash.update(c),this.oHash.digestInto(c),this.destroy()}digest(){const c=new Uint8Array(this.oHash.outputLen);return this.digestInto(c),c}_cloneInto(c){c||(c=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:h,destroyed:p,blockLen:g,outputLen:v}=this;return c=c,c.finished=h,c.destroyed=p,c.blockLen=g,c.outputLen=v,c.oHash=u._cloneInto(c.oHash),c.iHash=d._cloneInto(c.iHash),c}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,c,u)=>new i(a,c).update(u).digest();e.hmac=o,e.hmac.create=(a,c)=>new i(a,c)})(_1);Object.defineProperty(Yi,"__esModule",{value:!0});Yi.pbkdf2Async=Yi.pbkdf2=void 0;const ua=St,T7=_1,qi=po;function w1(e,t,n,i){ua.default.hash(e);const o=(0,qi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:c,asyncTick:u}=o;if(ua.default.number(a),ua.default.number(c),ua.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,qi.toBytes)(t),h=(0,qi.toBytes)(n),p=new Uint8Array(c),g=T7.hmac.create(e,d),v=g._cloneInto().update(h);return{c:a,dkLen:c,asyncTick:u,DK:p,PRF:g,PRFSalt:v}}function x1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function A7(e,t,n,i){const{c:o,dkLen:a,DK:c,PRF:u,PRFSalt:d}=w1(e,t,n,i);let h;const p=new Uint8Array(4),g=(0,qi.createView)(p),v=new Uint8Array(u.outputLen);for(let _=1,k=0;k<a;_++,k+=u.outputLen){const x=c.subarray(k,k+u.outputLen);g.setInt32(0,_,!1),(h=d._cloneInto(h)).update(p).digestInto(v),x.set(v.subarray(0,x.length));for(let E=1;E<o;E++){u._cloneInto(h).update(v).digestInto(v);for(let w=0;w<x.length;w++)x[w]^=v[w]}}return x1(u,d,c,h,v)}Yi.pbkdf2=A7;async function I7(e,t,n,i){const{c:o,dkLen:a,asyncTick:c,DK:u,PRF:d,PRFSalt:h}=w1(e,t,n,i);let p;const g=new Uint8Array(4),v=(0,qi.createView)(g),_=new Uint8Array(d.outputLen);for(let k=1,x=0;x<a;k++,x+=d.outputLen){const E=u.subarray(x,x+d.outputLen);v.setInt32(0,k,!1),(p=h._cloneInto(p)).update(g).digestInto(_),E.set(_.subarray(0,E.length)),await(0,qi.asyncLoop)(o-1,c,w=>{d._cloneInto(p).update(_).digestInto(_);for(let T=0;T<E.length;T++)E[T]^=_[T]})}return x1(d,h,u,p,_)}Yi.pbkdf2Async=I7;const R7=rl(S6);var kn={},gl={};Object.defineProperty(gl,"__esModule",{value:!0});gl.SHA2=void 0;const tu=St,Us=po;function O7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,h=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+h,u,i)}class L7 extends Us.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Us.createView)(this.buffer)}update(t){tu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Us.toBytes)(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=(0,Us.createView)(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){tu.default.exists(this),tu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let g=c;g<o;g++)n[g]=0;O7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Us.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const h=d/4,p=this.get();if(h>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<h;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}}gl.SHA2=L7;var $1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(Z,Q=!1){return Q?{h:Number(Z&t),l:Number(Z>>n&t)}:{h:Number(Z>>n&t)|0,l:Number(Z&t)|0}}e.fromBig=i;function o(Z,Q=!1){let q=new Uint32Array(Z.length),Y=new Uint32Array(Z.length);for(let ie=0;ie<Z.length;ie++){const{h:K,l:D}=i(Z[ie],Q);[q[ie],Y[ie]]=[K,D]}return[q,Y]}e.split=o;const a=(Z,Q)=>BigInt(Z>>>0)<<n|BigInt(Q>>>0);e.toBig=a;const c=(Z,Q,q)=>Z>>>q,u=(Z,Q,q)=>Z<<32-q|Q>>>q,d=(Z,Q,q)=>Z>>>q|Q<<32-q,h=(Z,Q,q)=>Z<<32-q|Q>>>q,p=(Z,Q,q)=>Z<<64-q|Q>>>q-32,g=(Z,Q,q)=>Z>>>q-32|Q<<64-q,v=(Z,Q)=>Q,_=(Z,Q)=>Z,k=(Z,Q,q)=>Z<<q|Q>>>32-q,x=(Z,Q,q)=>Q<<q|Z>>>32-q,E=(Z,Q,q)=>Q<<q-32|Z>>>64-q,w=(Z,Q,q)=>Z<<q-32|Q>>>64-q;function T(Z,Q,q,Y){const ie=(Q>>>0)+(Y>>>0);return{h:Z+q+(ie/2**32|0)|0,l:ie|0}}e.add=T;const R=(Z,Q,q)=>(Z>>>0)+(Q>>>0)+(q>>>0),A=(Z,Q,q,Y)=>Q+q+Y+(Z/2**32|0)|0,B=(Z,Q,q,Y)=>(Z>>>0)+(Q>>>0)+(q>>>0)+(Y>>>0),C=(Z,Q,q,Y,ie)=>Q+q+Y+ie+(Z/2**32|0)|0,P=(Z,Q,q,Y,ie)=>(Z>>>0)+(Q>>>0)+(q>>>0)+(Y>>>0)+(ie>>>0),U=(Z,Q,q,Y,ie,K)=>Q+q+Y+ie+K+(Z/2**32|0)|0,ee={fromBig:i,split:o,toBig:e.toBig,shrSH:c,shrSL:u,rotrSH:d,rotrSL:h,rotrBH:p,rotrBL:g,rotr32H:v,rotr32L:_,rotlSH:k,rotlSL:x,rotlBH:E,rotlBL:w,add:T,add3L:R,add3H:A,add4L:B,add4H:C,add5H:U,add5L:P};e.default=ee})($1);Object.defineProperty(kn,"__esModule",{value:!0});kn.sha384=kn.sha512_256=kn.sha512_224=Cu=kn.sha512=kn.SHA512=void 0;const P7=gl,Ae=$1,ml=po,[B7,M7]=Ae.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),jr=new Uint32Array(80),Ur=new Uint32Array(80);class go extends P7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:c,Dh:u,Dl:d,Eh:h,El:p,Fh:g,Fl:v,Gh:_,Gl:k,Hh:x,Hl:E}=this;return[t,n,i,o,a,c,u,d,h,p,g,v,_,k,x,E]}set(t,n,i,o,a,c,u,d,h,p,g,v,_,k,x,E){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=c|0,this.Dh=u|0,this.Dl=d|0,this.Eh=h|0,this.El=p|0,this.Fh=g|0,this.Fl=v|0,this.Gh=_|0,this.Gl=k|0,this.Hh=x|0,this.Hl=E|0}process(t,n){for(let R=0;R<16;R++,n+=4)jr[R]=t.getUint32(n),Ur[R]=t.getUint32(n+=4);for(let R=16;R<80;R++){const A=jr[R-15]|0,B=Ur[R-15]|0,C=Ae.default.rotrSH(A,B,1)^Ae.default.rotrSH(A,B,8)^Ae.default.shrSH(A,B,7),P=Ae.default.rotrSL(A,B,1)^Ae.default.rotrSL(A,B,8)^Ae.default.shrSL(A,B,7),U=jr[R-2]|0,ee=Ur[R-2]|0,Z=Ae.default.rotrSH(U,ee,19)^Ae.default.rotrBH(U,ee,61)^Ae.default.shrSH(U,ee,6),Q=Ae.default.rotrSL(U,ee,19)^Ae.default.rotrBL(U,ee,61)^Ae.default.shrSL(U,ee,6),q=Ae.default.add4L(P,Q,Ur[R-7],Ur[R-16]),Y=Ae.default.add4H(q,C,Z,jr[R-7],jr[R-16]);jr[R]=Y|0,Ur[R]=q|0}let{Ah:i,Al:o,Bh:a,Bl:c,Ch:u,Cl:d,Dh:h,Dl:p,Eh:g,El:v,Fh:_,Fl:k,Gh:x,Gl:E,Hh:w,Hl:T}=this;for(let R=0;R<80;R++){const A=Ae.default.rotrSH(g,v,14)^Ae.default.rotrSH(g,v,18)^Ae.default.rotrBH(g,v,41),B=Ae.default.rotrSL(g,v,14)^Ae.default.rotrSL(g,v,18)^Ae.default.rotrBL(g,v,41),C=g&_^~g&x,P=v&k^~v&E,U=Ae.default.add5L(T,B,P,M7[R],Ur[R]),ee=Ae.default.add5H(U,w,A,C,B7[R],jr[R]),Z=U|0,Q=Ae.default.rotrSH(i,o,28)^Ae.default.rotrBH(i,o,34)^Ae.default.rotrBH(i,o,39),q=Ae.default.rotrSL(i,o,28)^Ae.default.rotrBL(i,o,34)^Ae.default.rotrBL(i,o,39),Y=i&a^i&u^a&u,ie=o&c^o&d^c&d;w=x|0,T=E|0,x=_|0,E=k|0,_=g|0,k=v|0,{h:g,l:v}=Ae.default.add(h|0,p|0,ee|0,Z|0),h=u|0,p=d|0,u=a|0,d=c|0,a=i|0,c=o|0;const K=Ae.default.add3L(Z,q,ie);i=Ae.default.add3H(K,ee,Q,Y),o=K|0}({h:i,l:o}=Ae.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l:c}=Ae.default.add(this.Bh|0,this.Bl|0,a|0,c|0),{h:u,l:d}=Ae.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h,l:p}=Ae.default.add(this.Dh|0,this.Dl|0,h|0,p|0),{h:g,l:v}=Ae.default.add(this.Eh|0,this.El|0,g|0,v|0),{h:_,l:k}=Ae.default.add(this.Fh|0,this.Fl|0,_|0,k|0),{h:x,l:E}=Ae.default.add(this.Gh|0,this.Gl|0,x|0,E|0),{h:w,l:T}=Ae.default.add(this.Hh|0,this.Hl|0,w|0,T|0),this.set(i,o,a,c,u,d,h,p,g,v,_,k,x,E,w,T)}roundClean(){jr.fill(0),Ur.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}kn.SHA512=go;class j7 extends go{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class U7 extends go{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class N7 extends go{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Cu=kn.sha512=(0,ml.wrapConstructor)(()=>new go);kn.sha512_224=(0,ml.wrapConstructor)(()=>new j7);kn.sha512_256=(0,ml.wrapConstructor)(()=>new U7);kn.sha384=(0,ml.wrapConstructor)(()=>new N7);const D7=rl(_6),z7=rl(E7);Object.defineProperty(un,"__esModule",{value:!0});var k1=un.mnemonicToSeedSync=un.mnemonicToSeed=P1=un.validateMnemonic=un.entropyToMnemonic=un.mnemonicToEntropy=I1=un.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const E1=St,C1=Yi,H7=R7,S1=kn,F7=D7,da=z7,q7=e=>e[0]==="あいこくしん";function T1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function pd(e){const t=T1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function A1(e){E1.default.bytes(e,16,20,24,28,32)}function W7(e,t=128){if(E1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return L1((0,F7.randomBytes)(t/8),e)}var I1=un.generateMnemonic=W7;const Z7=e=>{const t=8-e.length/4;return new Uint8Array([(0,H7.sha256)(e)[0]>>t<<t])};function R1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),da.utils.chain(da.utils.checksum(1,Z7),da.utils.radix2(11,!0),da.utils.alphabet(e))}function O1(e,t){const{words:n}=pd(e),i=R1(t).decode(n);return A1(i),i}un.mnemonicToEntropy=O1;function L1(e,t){return A1(e),R1(t).encode(e).join(q7(t)?"　":" ")}un.entropyToMnemonic=L1;function K7(e,t){try{O1(e,t)}catch{return!1}return!0}var P1=un.validateMnemonic=K7;const B1=e=>T1(`mnemonic${e}`);function V7(e,t=""){return(0,C1.pbkdf2Async)(S1.sha512,pd(e).nfkd,B1(t),{c:2048,dkLen:64})}un.mnemonicToSeed=V7;function G7(e,t=""){return(0,C1.pbkdf2)(S1.sha512,pd(e).nfkd,B1(t),{c:2048,dkLen:64})}k1=un.mnemonicToSeedSync=G7;const Q7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),M1=Uint8Array.from({length:16},(e,t)=>t),Y7=M1.map(e=>(9*e+5)%16);let gd=[M1],md=[Y7];for(let e=0;e<4;e++)for(let t of[gd,md])t.push(t[e].map(n=>Q7[n]));const j1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),J7=gd.map((e,t)=>e.map(n=>j1[t][n])),X7=md.map((e,t)=>e.map(n=>j1[t][n])),e9=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),t9=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),fa=(e,t)=>e<<t|e>>>32-t;function Jp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const ha=new Uint32Array(16);class n9 extends Dg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let _=0;_<16;_++,n+=4)ha[_]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,c=a,u=this.h2|0,d=u,h=this.h3|0,p=h,g=this.h4|0,v=g;for(let _=0;_<5;_++){const k=4-_,x=e9[_],E=t9[_],w=gd[_],T=md[_],R=J7[_],A=X7[_];for(let B=0;B<16;B++){const C=fa(i+Jp(_,a,u,h)+ha[w[B]]+x,R[B])+g|0;i=g,g=h,h=fa(u,10)|0,u=a,a=C}for(let B=0;B<16;B++){const C=fa(o+Jp(k,c,d,p)+ha[T[B]]+E,A[B])+v|0;o=v,v=p,p=fa(d,10)|0,d=c,c=C}}this.set(this.h1+u+p|0,this.h2+h+v|0,this.h3+g+o|0,this.h4+i+c|0,this.h0+a+d|0)}roundClean(){ha.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const r9=ll(()=>new n9),pa=Wt.ProjectivePoint,nu=c1(Zn);function Xp(e){return BigInt(`0x${ln(e)}`)}function i9(e){return Zr(e.toString(16).padStart(64,"0"))}const s9=td("Bitcoin seed"),ru={private:76066276,public:76067358},iu=2147483648,o9=e=>r9(Zn(e)),a9=e=>vi(e).getUint32(0,!1),ga=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return vi(t).setUint32(0,e,!1),t};class fi{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return a9(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return nu.encode(this.serialize(this.versions.private,pi(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return nu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=ru){if(Hi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Ra(Cu,s9,t);return new fi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=ru){const i=nu.decode(t),o=vi(i),a=o.getUint32(0,!1),c={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new fi({...c,privateKey:u.slice(1)}):new fi({...c,publicKey:u})}static fromJSON(t){return fi.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||ru,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Wt.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Xp(t.privateKey),this.privKeyBytes=i9(this.privKey),this.pubKey=Wt.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=pa.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=o9(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let c=+a[1];if(!Number.isSafeInteger(c)||c>=iu)throw new Error("Invalid index");a[2]==="'"&&(c+=iu),i=i.deriveChild(c)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ga(t);if(t>=iu){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=pi(new Uint8Array([0]),u,n)}else n=pi(this.pubKey,n);const i=Ra(Cu,this.chainCode,n),o=Xp(i.slice(0,32)),a=i.slice(32);if(!Wt.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const c={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=kt(this.privKey+o,Wt.CURVE.n);if(!Wt.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=u}else{const u=pa.fromHex(this.pubKey).add(pa.fromPrivateKey(o));if(u.equals(pa.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=u.toRawBytes(!0)}return new fi(c)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Hi(t,32),Wt.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Hi(t,32),Hi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Wt.Signature.fromCompact(n)}catch{return!1}return Wt.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Hi(n,33),pi(ga(t),new Uint8Array([this.depth]),ga(this.parentFingerprint),ga(this.index),this.chainCode,n)}}var l9=Object.defineProperty,Dt=(e,t)=>{for(var n in t)l9(e,n,{get:t[n],enumerable:!0})};function U1(e){return ln(fo.getPublicKey(e))}var c9={};Dt(c9,{insertEventIntoAscendingList:()=>d9,insertEventIntoDescendingList:()=>u9,normalizeURL:()=>Su,utf8Decoder:()=>Dr,utf8Encoder:()=>Kn});var Dr=new TextDecoder("utf-8"),Kn=new TextEncoder;function Su(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function u9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function d9(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var ht=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(ht||{});function N1(e,t){let n=e;return n.pubkey=U1(t),n.id=vl(n),n.sig=p9(n,t),n}function f9(e){if(!vd(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function vl(e){let t=Zn(Kn.encode(f9(e)));return ln(t)}var h9=e=>e instanceof Object;function vd(e){if(!h9(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function bd(e){try{return fo.verify(e.sig,vl(e),e.pubkey)}catch{return!1}}function p9(e,t){return ln(fo.sign(vl(e),t))}function g9(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,c])=>a===n.slice(1)&&o.indexOf(c)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function m9(e,t){for(let n=0;n<e.length;n++)if(g9(e[n],t))return!0;return!1}var v9={};Dt(v9,{getHex64:()=>bl,getInt:()=>D1,getSubscriptionId:()=>z1,matchEventId:()=>b9,matchEventKind:()=>_9,matchEventPubkey:()=>y9});function bl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function D1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function z1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function b9(e,t){return t===bl(e,"id")}function y9(e,t){return t===bl(e,"pubkey")}function _9(e,t){return t===D1(e,"kind")}var e0=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function w9(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,c={},u=e0(),d={},h={},p;async function g(){return p||(p=new Promise((w,T)=>{try{a=new WebSocket(e)}catch(C){T(C)}a.onopen=()=>{u.connect.forEach(C=>C()),w()},a.onerror=()=>{p=void 0,u.error.forEach(C=>C()),T()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(C=>C())};let R=[],A;a.onmessage=C=>{R.push(C.data),A||(A=setInterval(B,0))};function B(){if(R.length===0){clearInterval(A),A=null;return}var C=R.shift();if(!C)return;let P=z1(C);if(P){let U=c[P];if(U&&U.alreadyHaveEvent&&U.alreadyHaveEvent(bl(C,"id"),e))return}try{let U=JSON.parse(C);switch(U[0]){case"EVENT":{let q=U[1],Y=U[2];vd(Y)&&c[q]&&(c[q].skipVerification||bd(Y))&&m9(c[q].filters,Y)&&(c[q],(d[q]?.event||[]).forEach(ie=>ie(Y)));return}case"COUNT":let ee=U[1],Z=U[2];c[ee]&&(d[ee]?.count||[]).forEach(q=>q(Z));return;case"EOSE":{let q=U[1];q in d&&(d[q].eose.forEach(Y=>Y()),d[q].eose=[]);return}case"OK":{let q=U[1],Y=U[2],ie=U[3]||"";q in h&&(Y?h[q].ok.forEach(K=>K()):h[q].failed.forEach(K=>K(ie)),h[q].ok=[],h[q].failed=[]);return}case"NOTICE":let Q=U[1];u.notice.forEach(q=>q(Q));return;case"AUTH":{let q=U[1];u.auth?.forEach(Y=>Y(q));return}}}catch{return}}}),p)}function v(){return a?.readyState===1}async function _(){v()||await g()}async function k(w){let T=JSON.stringify(w);if(!(!v()&&(await new Promise(R=>setTimeout(R,1e3)),!v())))try{a.send(T)}catch(R){console.log(R)}}const x=(w,{verb:T="REQ",skipVerification:R=!1,alreadyHaveEvent:A=null,id:B=Math.random().toString().slice(2)}={})=>{let C=B;return c[C]={id:C,filters:w,skipVerification:R,alreadyHaveEvent:A},k([T,C,...w]),{sub:(P,U={})=>x(P||w,{skipVerification:U.skipVerification||R,alreadyHaveEvent:U.alreadyHaveEvent||A,id:C}),unsub:()=>{delete c[C],delete d[C],k(["CLOSE",C])},on:(P,U)=>{d[C]=d[C]||{event:[],count:[],eose:[]},d[C][P].push(U)},off:(P,U)=>{let ee=d[C],Z=ee[P].indexOf(U);Z>=0&&ee[P].splice(Z,1)}}};function E(w,T){if(!w.id)throw new Error(`event ${w} has no id`);let R=w.id;return k([T,w]),{on:(A,B)=>{h[R]=h[R]||{ok:[],failed:[]},h[R][A].push(B)},off:(A,B)=>{let C=h[R];if(!C)return;let P=C[A].indexOf(B);P>=0&&C[A].splice(P,1)}}}return{url:e,sub:x,on:(w,T)=>{u[w].push(T),w==="connect"&&a?.readyState===1&&T()},off:(w,T)=>{let R=u[w].indexOf(T);R!==-1&&u[w].splice(R,1)},list:(w,T)=>new Promise(R=>{let A=x(w,T),B=[],C=setTimeout(()=>{A.unsub(),R(B)},n);A.on("eose",()=>{A.unsub(),clearTimeout(C),R(B)}),A.on("event",P=>{B.push(P)})}),get:(w,T)=>new Promise(R=>{let A=x([w],T),B=setTimeout(()=>{A.unsub(),R(null)},i);A.on("event",C=>{A.unsub(),clearTimeout(B),R(C)})}),count:w=>new Promise(T=>{let R=x(w,{...x,verb:"COUNT"}),A=setTimeout(()=>{R.unsub(),T(null)},o);R.on("count",B=>{R.unsub(),clearTimeout(A),T(B)})}),publish(w){return E(w,"EVENT")},auth(w){return E(w,"AUTH")},connect:_,close(){u=e0(),d={},h={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var x9=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Su(t)];n&&n.close()})}async ensureRelay(e){const t=Su(e);this._conn[t]||(this._conn[t]=w9(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,_)=>{if(n?.alreadyHaveEvent?.(v,_))return!0;let k=this._seenOn[v]||new Set;return k.add(_),this._seenOn[v]=k,i.has(v)};let a=[],c=new Set,u=new Set,d=e.length,h=!1,p=setTimeout(()=>{h=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let _;try{_=await this.ensureRelay(v)}catch{x();return}if(!_)return;let k=_.sub(t,o);k.on("event",E=>{i.add(E.id);for(let w of c.values())w(E)}),k.on("eose",()=>{h||x()}),a.push(k);function x(){if(d--,d===0){clearTimeout(p);for(let E of u.values())E()}}});let g={sub(v,_){return a.forEach(k=>k.sub(v,_)),g},unsub(){a.forEach(v=>v.unsub())},on(v,_){v==="event"?c.add(_):v==="eose"&&u.add(_)},off(v,_){v==="event"?c.delete(_):v==="eose"&&u.delete(_)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",c=>{i(c),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",c=>{o.push(c)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(c,u)=>{let d=await n[u],h=()=>a(c);i.set(a,h),d.on(o,h)})},off(o,a){e.forEach(async(c,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},mo={};Dt(mo,{BECH32_REGEX:()=>H1,decode:()=>yl,naddrEncode:()=>T9,neventEncode:()=>S9,noteEncode:()=>E9,nprofileEncode:()=>C9,npubEncode:()=>k9,nrelayEncode:()=>A9,nsecEncode:()=>$9});var ds=5e3,H1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function yl(e){let{prefix:t,words:n}=Kt.decode(e,ds),i=new Uint8Array(Kt.fromWords(n));switch(t){case"nprofile":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:ln(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nevent":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:ln(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[],author:o[2]?.[0]?ln(o[2][0]):void 0}}}case"naddr":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Dr.decode(o[0][0]),pubkey:ln(o[2][0]),kind:parseInt(ln(o[3][0]),16),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nrelay":{let o=ma(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Dr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:ln(i)};default:throw new Error(`unknown prefix ${t}`)}}function ma(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1],a=n.slice(2,2+o);n=n.slice(2+o),!(a.length<o)&&(t[i]=t[i]||[],t[i].push(a))}return t}function $9(e){return yd("nsec",e)}function k9(e){return yd("npub",e)}function E9(e){return yd("note",e)}function yd(e,t){let n=Zr(t),i=Kt.toWords(n);return Kt.encode(e,i,ds)}function C9(e){let t=_l({0:[Zr(e.pubkey)],1:(e.relays||[]).map(i=>Kn.encode(i))}),n=Kt.toWords(t);return Kt.encode("nprofile",n,ds)}function S9(e){let t=_l({0:[Zr(e.id)],1:(e.relays||[]).map(i=>Kn.encode(i)),2:e.author?[Zr(e.author)]:[]}),n=Kt.toWords(t);return Kt.encode("nevent",n,ds)}function T9(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=_l({0:[Kn.encode(e.identifier)],1:(e.relays||[]).map(o=>Kn.encode(o)),2:[Zr(e.pubkey)],3:[new Uint8Array(t)]}),i=Kt.toWords(n);return Kt.encode("naddr",i,ds)}function A9(e){let t=_l({0:[Kn.encode(e)]}),n=Kt.toWords(t);return Kt.encode("nrelay",n,ds)}function _l(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),pi(...t)}var I9={};Dt(I9,{decrypt:()=>O9,encrypt:()=>R9});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function R9(e,t,n){const i=Wt.getSharedSecret(e,"02"+t),o=F1(i);let a=Uint8Array.from(cl(16)),c=Kn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,c),h=Qi.encode(new Uint8Array(d)),p=Qi.encode(new Uint8Array(a.buffer));return`${h}?iv=${p}`}async function O9(e,t,n){let[i,o]=n.split("?iv="),a=Wt.getSharedSecret(e,"02"+t),c=F1(a),u=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),d=Qi.decode(i),h=Qi.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:h},u,d);return Dr.decode(p)}function F1(e){return e.slice(1,33)}var q1={};Dt(q1,{NIP05_REGEX:()=>W1,queryProfile:()=>B9,searchDomain:()=>P9,useFetchImplementation:()=>L9});var W1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,wl;try{wl=fetch}catch{}function L9(e){wl=e}async function P9(e,t=""){try{return(await(await wl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function B9(e){const t=e.match(W1);if(!t)return null;const[n,i="_",o]=t;try{const a=await wl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:c,relays:u}=M9(await a.json()),d=c[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function M9(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var j9={};Dt(j9,{generateSeedWords:()=>N9,privateKeyFromSeedWords:()=>U9,validateWords:()=>D9});function U9(e,t){let i=fi.fromMasterSeed(k1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return ln(i)}function N9(){return I1(fd)}function D9(e){return P1(e,fd)}var z9={};Dt(z9,{parse:()=>H9});function H9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,c,u,d]=o,h={id:c,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){t.root=h;continue}if(d==="reply"){t.reply=h;continue}if(d==="mention"){t.mentions.push(h);continue}if(p){t.root=h;continue}if(g){t.reply=h;continue}t.mentions.push(h)}return t}var F9={};Dt(F9,{getPow:()=>q9});function q9(e){return W9(Zr(e))}function W9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=Z9(e[n]),t+=i,i===8);n++);return t}function Z9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var K9={};Dt(K9,{finishRepostEvent:()=>V9,getRepostedEvent:()=>G9,getRepostedEventPointer:()=>Z1});function V9(e,t,n,i){return N1({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function Z1(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function G9(e,{skipVerification:t}={}){const n=Z1(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!bd(i)))return i}var Q9={};Dt(Q9,{NOSTR_URI_REGEX:()=>xl,parse:()=>J9,test:()=>Y9});var xl=new RegExp(`nostr:(${H1.source})`);function Y9(e){return typeof e=="string"&&new RegExp(`^${xl.source}$`).test(e)}function J9(e){const t=e.match(new RegExp(`^${xl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:yl(t[1])}}var X9={};Dt(X9,{finishReactionEvent:()=>ek,getReactedEventPointer:()=>tk});function ek(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return N1({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function tk(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var nk={};Dt(nk,{createDelegation:()=>rk,getDelegator:()=>ik});function rk(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Zn(Kn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=ln(fo.sign(o,e));return{from:U1(e),to:t.pubkey,cond:i,sig:a}}function ik(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,h,p]=a[u].split(/\b/);if(!(d==="kind"&&h==="="&&e.kind===parseInt(p))){if(d==="created_at"&&h==="<"&&e.created_at<parseInt(p))continue;if(d==="created_at"&&h===">"&&e.created_at>parseInt(p))continue;return null}}let c=Zn(Kn.encode(`nostr:delegation:${e.pubkey}:${i}`));return fo.verify(o,c,n)?n:null}var sk={};Dt(sk,{matchAll:()=>ok,regex:()=>_d,replaceAll:()=>ak});var _d=()=>new RegExp(`\\b${xl.source}\\b`,"g");function*ok(e){const t=e.matchAll(_d());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:yl(o),start:n.index,end:n.index+i.length}}}function ak(e,t){return e.replaceAll(_d(),(n,i)=>t({uri:n,value:i,decoded:yl(i)}))}var lk={};Dt(lk,{useFetchImplementation:()=>ck,validateGithub:()=>uk});var wd;try{wd=fetch}catch{}function ck(e){wd=e}async function uk(e,t,n){try{return await(await wd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var dk={};Dt(dk,{authenticate:()=>fk});var fk=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,c)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),c(d)})})},hk={};Dt(hk,{getZapEndpoint:()=>gk,makeZapReceipt:()=>bk,makeZapRequest:()=>mk,useFetchImplementation:()=>pk,validateZapRequest:()=>vk});var xd;try{xd=fetch}catch{}function pk(e){xd=e}async function gk(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:c}=Kt.decode(n,1e3),u=Kt.fromWords(c);t=Dr.decode(u)}else if(i){let[c,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${c}`}else return null;let a=await(await xd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function mk({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function vk(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!vd(t))return"Zap request is not a valid Nostr event.";if(!bd(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,c])=>a==="p"&&c);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,c])=>a==="e"&&c);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,c])=>a==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function bk({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),c={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&c.tags.push(["preimage",t]),c}const yk=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),K1=(e={})=>(()=>{const t=yk();return Ge(t,e,!0,!0),t})(),_k=j('<button class="text-blue-500 underline">'),{noteEncode:wk,neventEncode:xk}=mo,$k=e=>{try{return wk(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},kk=e=>{try{return xk({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},Vs=e=>(()=>{const t=_k();return O(t,$(fe,{get when(){return e.kind==null||e.kind===ht.Text},get fallback(){return kk(e.eventId)},get children(){return $k(e.eventId)}})),t})(),Ek=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],V1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],Ck=[...V1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],Sk=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],Tk=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},fs=()=>({id:Tk(),width:"medium"}),G1=e=>({...fs(),columnType:"Following",...e}),Q1=e=>({...fs(),columnType:"Notification",...e}),Ak=e=>({...fs(),columnType:"Relays",...e}),Y1=()=>Ak({name:"日本語",relayUrls:V1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),J1=e=>({...fs(),columnType:"Posts",...e}),X1=e=>({...fs(),columnType:"Reactions",...e}),$d=e=>({...fs(),columnType:"Search",...e}),Ik=/^[0-9a-f]{64}$/,Gs=e=>{const t=typeof e=="string"&&e.length===64&&Ik.test(e);return t||console.warn("invalid id is ignored: ",e),t};class em{constructor(t){this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}findTagsByName(t){return this.rawEvent.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.rawEvent.tags.find(([n])=>n===t)}findLastTagByName(t){return this.rawEvent.tags.findLast(([n])=>n===t)}pTags(){return this.rawEvent.tags.filter(([t,n])=>t==="p"&&Gs(n))}eTags(){return this.rawEvent.tags.filter(([t,n])=>t==="e"&&Gs(n))}taggedPubkeys(){return mr(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}}var He;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const c of o)a[c]=c;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),c={};for(const u of a)c[u]=o[u];return e.objectValues(c)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const c in o)Object.prototype.hasOwnProperty.call(o,c)&&a.push(c);return a},e.find=(o,a)=>{for(const c of o)if(a(c))return c},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(c=>typeof c=="string"?`'${c}'`:c).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(He||(He={}));var Tu;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Tu||(Tu={}));const se=He.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),zr=e=>{switch(typeof e){case"undefined":return se.undefined;case"string":return se.string;case"number":return isNaN(e)?se.nan:se.number;case"boolean":return se.boolean;case"function":return se.function;case"bigint":return se.bigint;case"symbol":return se.symbol;case"object":return Array.isArray(e)?se.array:e===null?se.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?se.promise:typeof Map<"u"&&e instanceof Map?se.map:typeof Set<"u"&&e instanceof Set?se.set:typeof Date<"u"&&e instanceof Date?se.date:se.object;default:return se.unknown}},X=He.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Rk=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class jn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const c of a.issues)if(c.code==="invalid_union")c.unionErrors.map(o);else if(c.code==="invalid_return_type")o(c.returnTypeError);else if(c.code==="invalid_arguments")o(c.argumentsError);else if(c.path.length===0)i._errors.push(n(c));else{let u=i,d=0;for(;d<c.path.length;){const h=c.path[d];d===c.path.length-1?(u[h]=u[h]||{_errors:[]},u[h]._errors.push(n(c))):u[h]=u[h]||{_errors:[]},u=u[h],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,He.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}jn.create=e=>new jn(e);const Qs=(e,t)=>{let n;switch(e.code){case X.invalid_type:e.received===se.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case X.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,He.jsonStringifyReplacer)}`;break;case X.unrecognized_keys:n=`Unrecognized key(s) in object: ${He.joinValues(e.keys,", ")}`;break;case X.invalid_union:n="Invalid input";break;case X.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${He.joinValues(e.options)}`;break;case X.invalid_enum_value:n=`Invalid enum value. Expected ${He.joinValues(e.options)}, received '${e.received}'`;break;case X.invalid_arguments:n="Invalid function arguments";break;case X.invalid_return_type:n="Invalid function return type";break;case X.invalid_date:n="Invalid date";break;case X.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:He.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case X.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case X.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case X.custom:n="Invalid input";break;case X.invalid_intersection_types:n="Intersection results could not be merged";break;case X.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case X.not_finite:n="Number must be finite";break;default:n=t.defaultError,He.assertNever(e)}return{message:n}};let tm=Qs;function Ok(e){tm=e}function ja(){return tm}const Ua=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],c={...o,path:a};let u="";const d=i.filter(h=>!!h).slice().reverse();for(const h of d)u=h(c,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},Lk=[];function ce(e,t){const n=Ua({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,ja(),Qs].filter(i=>!!i)});e.common.issues.push(n)}class Nt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return ke;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Nt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:c}=o;if(a.status==="aborted"||c.status==="aborted")return ke;a.status==="dirty"&&t.dirty(),c.status==="dirty"&&t.dirty(),(typeof c.value<"u"||o.alwaysSet)&&(i[a.value]=c.value)}return{status:t.value,value:i}}}const ke=Object.freeze({status:"aborted"}),nm=e=>({status:"dirty",value:e}),Vt=e=>({status:"valid",value:e}),Au=e=>e.status==="aborted",Iu=e=>e.status==="dirty",Na=e=>e.status==="valid",Da=e=>typeof Promise<"u"&&e instanceof Promise;var ge;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(ge||(ge={}));class Vn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const t0=(e,t)=>{if(Na(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new jn(e.common.issues);return this._error=n,this._error}}};function Se(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(c,u)=>c.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Re{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return zr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Nt,ctx:{common:t.parent.common,data:t.data,parsedType:zr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Da(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return t0(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:zr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Da(o)?o:Promise.resolve(o));return t0(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const c=t(o),u=()=>a.addIssue({code:X.custom,...i(o)});return typeof Promise<"u"&&c instanceof Promise?c.then(d=>d?!0:(u(),!1)):c?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new Nn({schema:this,typeName:_e.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return vr.create(this,this._def)}nullable(){return wi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Un.create(this,this._def)}promise(){return Xi.create(this,this._def)}or(t){return eo.create([this,t],this._def)}and(t){return to.create(this,t,this._def)}transform(t){return new Nn({...Se(this._def),schema:this,typeName:_e.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new oo({...Se(this._def),innerType:this,defaultValue:n,typeName:_e.ZodDefault})}brand(){return new im({typeName:_e.ZodBranded,type:this,...Se(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new qa({...Se(this._def),innerType:this,catchValue:n,typeName:_e.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return vo.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Pk=/^c[^\s-]{8,}$/i,Bk=/^[a-z][a-z0-9]*$/,Mk=/[0-9A-HJKMNP-TV-Z]{26}/,jk=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,Uk=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,Nk=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,Dk=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,zk=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Hk=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Fk(e,t){return!!((t==="v4"||!t)&&Dk.test(e)||(t==="v6"||!t)&&zk.test(e))}class Bn extends Re{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:X.invalid_string,...ge.errToObj(i)}),this.nonempty=t=>this.min(1,ge.errToObj(t)),this.trim=()=>new Bn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Bn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Bn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==se.string){const a=this._getOrReturnCtx(t);return ce(a,{code:X.invalid_type,expected:se.string,received:a.parsedType}),ke}const i=new Nt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const c=t.data.length>a.value,u=t.data.length<a.value;(c||u)&&(o=this._getOrReturnCtx(t,o),c?ce(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ce(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")Uk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"email",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")Nk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"emoji",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")jk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"uuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")Pk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"cuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")Bk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"cuid2",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")Mk.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"ulid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ce(o,{validation:"url",code:X.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"regex",code:X.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ce(o,{code:X.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ce(o,{code:X.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ce(o,{code:X.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?Hk(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ce(o,{code:X.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?Fk(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ce(o,{validation:"ip",code:X.invalid_string,message:a.message}),i.dirty()):He.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Bn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...ge.errToObj(t)})}url(t){return this._addCheck({kind:"url",...ge.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...ge.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...ge.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...ge.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...ge.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...ge.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...ge.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...ge.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...ge.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...ge.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...ge.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...ge.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...ge.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...ge.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...ge.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Bn.create=e=>{var t;return new Bn({checks:[],typeName:_e.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};function qk(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),c=parseInt(t.toFixed(o).replace(".",""));return a%c/Math.pow(10,o)}class Vr extends Re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==se.number){const a=this._getOrReturnCtx(t);return ce(a,{code:X.invalid_type,expected:se.number,received:a.parsedType}),ke}let i;const o=new Nt;for(const a of this._def.checks)a.kind==="int"?He.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ce(i,{code:X.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?qk(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ce(i,{code:X.not_finite,message:a.message}),o.dirty()):He.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ge.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ge.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ge.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ge.toString(n))}setLimit(t,n,i,o){return new Vr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:ge.toString(o)}]})}_addCheck(t){return new Vr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:ge.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:ge.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:ge.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:ge.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:ge.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ge.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:ge.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:ge.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:ge.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&He.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Vr.create=e=>new Vr({checks:[],typeName:_e.ZodNumber,coerce:e?.coerce||!1,...Se(e)});class Gr extends Re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==se.bigint){const a=this._getOrReturnCtx(t);return ce(a,{code:X.invalid_type,expected:se.bigint,received:a.parsedType}),ke}let i;const o=new Nt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ce(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):He.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,ge.toString(n))}gt(t,n){return this.setLimit("min",t,!1,ge.toString(n))}lte(t,n){return this.setLimit("max",t,!0,ge.toString(n))}lt(t,n){return this.setLimit("max",t,!1,ge.toString(n))}setLimit(t,n,i,o){return new Gr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:ge.toString(o)}]})}_addCheck(t){return new Gr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:ge.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:ge.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:ge.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:ge.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:ge.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Gr.create=e=>{var t;return new Gr({checks:[],typeName:_e.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};class Ys extends Re{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==se.boolean){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:se.boolean,received:i.parsedType}),ke}return Vt(t.data)}}Ys.create=e=>new Ys({typeName:_e.ZodBoolean,coerce:e?.coerce||!1,...Se(e)});class yi extends Re{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==se.date){const a=this._getOrReturnCtx(t);return ce(a,{code:X.invalid_type,expected:se.date,received:a.parsedType}),ke}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ce(a,{code:X.invalid_date}),ke}const i=new Nt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:X.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ce(o,{code:X.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):He.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new yi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:ge.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:ge.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}yi.create=e=>new yi({checks:[],coerce:e?.coerce||!1,typeName:_e.ZodDate,...Se(e)});class za extends Re{_parse(t){if(this._getType(t)!==se.symbol){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:se.symbol,received:i.parsedType}),ke}return Vt(t.data)}}za.create=e=>new za({typeName:_e.ZodSymbol,...Se(e)});class Js extends Re{_parse(t){if(this._getType(t)!==se.undefined){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:se.undefined,received:i.parsedType}),ke}return Vt(t.data)}}Js.create=e=>new Js({typeName:_e.ZodUndefined,...Se(e)});class Xs extends Re{_parse(t){if(this._getType(t)!==se.null){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:se.null,received:i.parsedType}),ke}return Vt(t.data)}}Xs.create=e=>new Xs({typeName:_e.ZodNull,...Se(e)});class Ji extends Re{constructor(){super(...arguments),this._any=!0}_parse(t){return Vt(t.data)}}Ji.create=e=>new Ji({typeName:_e.ZodAny,...Se(e)});class bi extends Re{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Vt(t.data)}}bi.create=e=>new bi({typeName:_e.ZodUnknown,...Se(e)});class wr extends Re{_parse(t){const n=this._getOrReturnCtx(t);return ce(n,{code:X.invalid_type,expected:se.never,received:n.parsedType}),ke}}wr.create=e=>new wr({typeName:_e.ZodNever,...Se(e)});class Ha extends Re{_parse(t){if(this._getType(t)!==se.undefined){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:se.void,received:i.parsedType}),ke}return Vt(t.data)}}Ha.create=e=>new Ha({typeName:_e.ZodVoid,...Se(e)});class Un extends Re{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==se.array)return ce(n,{code:X.invalid_type,expected:se.array,received:n.parsedType}),ke;if(o.exactLength!==null){const c=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(c||u)&&(ce(n,{code:c?X.too_big:X.too_small,minimum:u?o.exactLength.value:void 0,maximum:c?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ce(n,{code:X.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ce(n,{code:X.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((c,u)=>o.type._parseAsync(new Vn(n,c,n.path,u)))).then(c=>Nt.mergeArray(i,c));const a=[...n.data].map((c,u)=>o.type._parseSync(new Vn(n,c,n.path,u)));return Nt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new Un({...this._def,minLength:{value:t,message:ge.toString(n)}})}max(t,n){return new Un({...this._def,maxLength:{value:t,message:ge.toString(n)}})}length(t,n){return new Un({...this._def,exactLength:{value:t,message:ge.toString(n)}})}nonempty(t){return this.min(1,t)}}Un.create=(e,t)=>new Un({type:e,minLength:null,maxLength:null,exactLength:null,typeName:_e.ZodArray,...Se(t)});function Fi(e){if(e instanceof ut){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=vr.create(Fi(i))}return new ut({...e._def,shape:()=>t})}else return e instanceof Un?new Un({...e._def,type:Fi(e.element)}):e instanceof vr?vr.create(Fi(e.unwrap())):e instanceof wi?wi.create(Fi(e.unwrap())):e instanceof Gn?Gn.create(e.items.map(t=>Fi(t))):e}class ut extends Re{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=He.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==se.object){const h=this._getOrReturnCtx(t);return ce(h,{code:X.invalid_type,expected:se.object,received:h.parsedType}),ke}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:c}=this._getCached(),u=[];if(!(this._def.catchall instanceof wr&&this._def.unknownKeys==="strip"))for(const h in o.data)c.includes(h)||u.push(h);const d=[];for(const h of c){const p=a[h],g=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new Vn(o,g,o.path,h)),alwaysSet:h in o.data})}if(this._def.catchall instanceof wr){const h=this._def.unknownKeys;if(h==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(h==="strict")u.length>0&&(ce(o,{code:X.unrecognized_keys,keys:u}),i.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new Vn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const h=[];for(const p of d){const g=await p.key;h.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return h}).then(h=>Nt.mergeObjectSync(i,h)):Nt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return ge.errToObj,new ut({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,c,u;const d=(c=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&c!==void 0?c:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=ge.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ut({...this._def,unknownKeys:"strip"})}passthrough(){return new ut({...this._def,unknownKeys:"passthrough"})}extend(t){return new ut({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ut({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:_e.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new ut({...this._def,catchall:t})}pick(t){const n={};return He.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ut({...this._def,shape:()=>n})}omit(t){const n={};return He.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new ut({...this._def,shape:()=>n})}deepPartial(){return Fi(this)}partial(t){const n={};return He.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new ut({...this._def,shape:()=>n})}required(t){const n={};return He.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof vr;)a=a._def.innerType;n[i]=a}}),new ut({...this._def,shape:()=>n})}keyof(){return rm(He.objectKeys(this.shape))}}ut.create=(e,t)=>new ut({shape:()=>e,unknownKeys:"strip",catchall:wr.create(),typeName:_e.ZodObject,...Se(t)});ut.strictCreate=(e,t)=>new ut({shape:()=>e,unknownKeys:"strict",catchall:wr.create(),typeName:_e.ZodObject,...Se(t)});ut.lazycreate=(e,t)=>new ut({shape:e,unknownKeys:"strip",catchall:wr.create(),typeName:_e.ZodObject,...Se(t)});class eo extends Re{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const c=a.map(u=>new jn(u.ctx.common.issues));return ce(n,{code:X.invalid_union,unionErrors:c}),ke}if(n.common.async)return Promise.all(i.map(async a=>{const c={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:c}),ctx:c}})).then(o);{let a;const c=[];for(const d of i){const h={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:h});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:h}),h.common.issues.length&&c.push(h.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=c.map(d=>new jn(d));return ce(n,{code:X.invalid_union,unionErrors:u}),ke}}get options(){return this._def.options}}eo.create=(e,t)=>new eo({options:e,typeName:_e.ZodUnion,...Se(t)});const $a=e=>e instanceof ro?$a(e.schema):e instanceof Nn?$a(e.innerType()):e instanceof io?[e.value]:e instanceof Qr?e.options:e instanceof so?Object.keys(e.enum):e instanceof oo?$a(e._def.innerType):e instanceof Js?[void 0]:e instanceof Xs?[null]:null;class $l extends Re{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.object)return ce(n,{code:X.invalid_type,expected:se.object,received:n.parsedType}),ke;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ce(n,{code:X.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),ke)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const c=$a(a.shape[t]);if(!c)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of c){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new $l({typeName:_e.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Se(i)})}}function Ru(e,t){const n=zr(e),i=zr(t);if(e===t)return{valid:!0,data:e};if(n===se.object&&i===se.object){const o=He.objectKeys(t),a=He.objectKeys(e).filter(u=>o.indexOf(u)!==-1),c={...e,...t};for(const u of a){const d=Ru(e[u],t[u]);if(!d.valid)return{valid:!1};c[u]=d.data}return{valid:!0,data:c}}else if(n===se.array&&i===se.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const c=e[a],u=t[a],d=Ru(c,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===se.date&&i===se.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class to extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,c)=>{if(Au(a)||Au(c))return ke;const u=Ru(a.value,c.value);return u.valid?((Iu(a)||Iu(c))&&n.dirty(),{status:n.value,value:u.data}):(ce(i,{code:X.invalid_intersection_types}),ke)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,c])=>o(a,c)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}to.create=(e,t,n)=>new to({left:e,right:t,typeName:_e.ZodIntersection,...Se(n)});class Gn extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.array)return ce(i,{code:X.invalid_type,expected:se.array,received:i.parsedType}),ke;if(i.data.length<this._def.items.length)return ce(i,{code:X.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ke;!this._def.rest&&i.data.length>this._def.items.length&&(ce(i,{code:X.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((c,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Vn(i,c,i.path,u)):null}).filter(c=>!!c);return i.common.async?Promise.all(a).then(c=>Nt.mergeArray(n,c)):Nt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Gn({...this._def,rest:t})}}Gn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Gn({items:e,typeName:_e.ZodTuple,rest:null,...Se(t)})};class no extends Re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.object)return ce(i,{code:X.invalid_type,expected:se.object,received:i.parsedType}),ke;const o=[],a=this._def.keyType,c=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Vn(i,u,i.path,u)),value:c._parse(new Vn(i,i.data[u],i.path,u))});return i.common.async?Nt.mergeObjectAsync(n,o):Nt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Re?new no({keyType:t,valueType:n,typeName:_e.ZodRecord,...Se(i)}):new no({keyType:Bn.create(),valueType:t,typeName:_e.ZodRecord,...Se(n)})}}class Fa extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.map)return ce(i,{code:X.invalid_type,expected:se.map,received:i.parsedType}),ke;const o=this._def.keyType,a=this._def.valueType,c=[...i.data.entries()].map(([u,d],h)=>({key:o._parse(new Vn(i,u,i.path,[h,"key"])),value:a._parse(new Vn(i,d,i.path,[h,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of c){const h=await d.key,p=await d.value;if(h.status==="aborted"||p.status==="aborted")return ke;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of c){const h=d.key,p=d.value;if(h.status==="aborted"||p.status==="aborted")return ke;(h.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(h.value,p.value)}return{status:n.value,value:u}}}}Fa.create=(e,t,n)=>new Fa({valueType:t,keyType:e,typeName:_e.ZodMap,...Se(n)});class _i extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.set)return ce(i,{code:X.invalid_type,expected:se.set,received:i.parsedType}),ke;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ce(i,{code:X.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ce(i,{code:X.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function c(d){const h=new Set;for(const p of d){if(p.status==="aborted")return ke;p.status==="dirty"&&n.dirty(),h.add(p.value)}return{status:n.value,value:h}}const u=[...i.data.values()].map((d,h)=>a._parse(new Vn(i,d,i.path,h)));return i.common.async?Promise.all(u).then(d=>c(d)):c(u)}min(t,n){return new _i({...this._def,minSize:{value:t,message:ge.toString(n)}})}max(t,n){return new _i({...this._def,maxSize:{value:t,message:ge.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}_i.create=(e,t)=>new _i({valueType:e,minSize:null,maxSize:null,typeName:_e.ZodSet,...Se(t)});class Wi extends Re{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.function)return ce(n,{code:X.invalid_type,expected:se.function,received:n.parsedType}),ke;function i(u,d){return Ua({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ja(),Qs].filter(h=>!!h),issueData:{code:X.invalid_arguments,argumentsError:d}})}function o(u,d){return Ua({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,ja(),Qs].filter(h=>!!h),issueData:{code:X.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},c=n.data;return this._def.returns instanceof Xi?Vt(async(...u)=>{const d=new jn([]),h=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),p=await c(...h);return await this._def.returns._def.type.parseAsync(p,a).catch(v=>{throw d.addIssue(o(p,v)),d})}):Vt((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new jn([i(u,d.error)]);const h=c(...d.data),p=this._def.returns.safeParse(h,a);if(!p.success)throw new jn([o(h,p.error)]);return p.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Wi({...this._def,args:Gn.create(t).rest(bi.create())})}returns(t){return new Wi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Wi({args:t||Gn.create([]).rest(bi.create()),returns:n||bi.create(),typeName:_e.ZodFunction,...Se(i)})}}class ro extends Re{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}ro.create=(e,t)=>new ro({getter:e,typeName:_e.ZodLazy,...Se(t)});class io extends Re{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ce(n,{received:n.data,code:X.invalid_literal,expected:this._def.value}),ke}return{status:"valid",value:t.data}}get value(){return this._def.value}}io.create=(e,t)=>new io({value:e,typeName:_e.ZodLiteral,...Se(t)});function rm(e,t){return new Qr({values:e,typeName:_e.ZodEnum,...Se(t)})}class Qr extends Re{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ce(n,{expected:He.joinValues(i),received:n.parsedType,code:X.invalid_type}),ke}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ce(n,{received:n.data,code:X.invalid_enum_value,options:i}),ke}return Vt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Qr.create(t)}exclude(t){return Qr.create(this.options.filter(n=>!t.includes(n)))}}Qr.create=rm;class so extends Re{_parse(t){const n=He.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==se.string&&i.parsedType!==se.number){const o=He.objectValues(n);return ce(i,{expected:He.joinValues(o),received:i.parsedType,code:X.invalid_type}),ke}if(n.indexOf(t.data)===-1){const o=He.objectValues(n);return ce(i,{received:i.data,code:X.invalid_enum_value,options:o}),ke}return Vt(t.data)}get enum(){return this._def.values}}so.create=(e,t)=>new so({values:e,typeName:_e.ZodNativeEnum,...Se(t)});class Xi extends Re{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.promise&&n.common.async===!1)return ce(n,{code:X.invalid_type,expected:se.promise,received:n.parsedType}),ke;const i=n.parsedType===se.promise?n.data:Promise.resolve(n.data);return Vt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Xi.create=(e,t)=>new Xi({type:e,typeName:_e.ZodPromise,...Se(t)});class Nn extends Re{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===_e.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const c=o.transform(i.data);return i.common.async?Promise.resolve(c).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:c,path:i.path,parent:i})}const a={addIssue:c=>{ce(i,c),c.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const c=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?ke:(u.status==="dirty"&&n.dirty(),c(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?ke:(u.status==="dirty"&&n.dirty(),c(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Na(c))return c;const u=o.transform(c.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>Na(c)?Promise.resolve(o.transform(c.value,a)).then(u=>({status:n.value,value:u})):c);He.assertNever(o)}}Nn.create=(e,t,n)=>new Nn({schema:e,typeName:_e.ZodEffects,effect:t,...Se(n)});Nn.createWithPreprocess=(e,t,n)=>new Nn({schema:t,effect:{type:"preprocess",transform:e},typeName:_e.ZodEffects,...Se(n)});class vr extends Re{_parse(t){return this._getType(t)===se.undefined?Vt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}vr.create=(e,t)=>new vr({innerType:e,typeName:_e.ZodOptional,...Se(t)});class wi extends Re{_parse(t){return this._getType(t)===se.null?Vt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}wi.create=(e,t)=>new wi({innerType:e,typeName:_e.ZodNullable,...Se(t)});class oo extends Re{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===se.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}oo.create=(e,t)=>new oo({innerType:e,typeName:_e.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Se(t)});class qa extends Re{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Da(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new jn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new jn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}qa.create=(e,t)=>new qa({innerType:e,typeName:_e.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Se(t)});class Wa extends Re{_parse(t){if(this._getType(t)!==se.nan){const i=this._getOrReturnCtx(t);return ce(i,{code:X.invalid_type,expected:se.nan,received:i.parsedType}),ke}return{status:"valid",value:t.data}}}Wa.create=e=>new Wa({typeName:_e.ZodNaN,...Se(e)});const Wk=Symbol("zod_brand");class im extends Re{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class vo extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?ke:a.status==="dirty"?(n.dirty(),nm(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?ke:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new vo({in:t,out:n,typeName:_e.ZodPipeline})}}const sm=(e,t={},n)=>e?Ji.create().superRefine((i,o)=>{var a,c;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(c=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&c!==void 0?c:!0,h=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...h,fatal:d})}}):Ji.create(),Zk={object:ut.lazycreate};var _e;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(_e||(_e={}));const Kk=(e,t={message:`Input not instance of ${e.name}`})=>sm(n=>n instanceof e,t),om=Bn.create,am=Vr.create,Vk=Wa.create,Gk=Gr.create,lm=Ys.create,Qk=yi.create,Yk=za.create,Jk=Js.create,Xk=Xs.create,eE=Ji.create,tE=bi.create,nE=wr.create,rE=Ha.create,iE=Un.create,sE=ut.create,oE=ut.strictCreate,aE=eo.create,lE=$l.create,cE=to.create,uE=Gn.create,dE=no.create,fE=Fa.create,hE=_i.create,pE=Wi.create,gE=ro.create,mE=io.create,vE=Qr.create,bE=so.create,yE=Xi.create,n0=Nn.create,_E=vr.create,wE=wi.create,xE=Nn.createWithPreprocess,$E=vo.create,kE=()=>om().optional(),EE=()=>am().optional(),CE=()=>lm().optional(),SE={string:e=>Bn.create({...e,coerce:!0}),number:e=>Vr.create({...e,coerce:!0}),boolean:e=>Ys.create({...e,coerce:!0}),bigint:e=>Gr.create({...e,coerce:!0}),date:e=>yi.create({...e,coerce:!0})},TE=ke;var wt=Object.freeze({__proto__:null,defaultErrorMap:Qs,setErrorMap:Ok,getErrorMap:ja,makeIssue:Ua,EMPTY_PATH:Lk,addIssueToContext:ce,ParseStatus:Nt,INVALID:ke,DIRTY:nm,OK:Vt,isAborted:Au,isDirty:Iu,isValid:Na,isAsync:Da,get util(){return He},get objectUtil(){return Tu},ZodParsedType:se,getParsedType:zr,ZodType:Re,ZodString:Bn,ZodNumber:Vr,ZodBigInt:Gr,ZodBoolean:Ys,ZodDate:yi,ZodSymbol:za,ZodUndefined:Js,ZodNull:Xs,ZodAny:Ji,ZodUnknown:bi,ZodNever:wr,ZodVoid:Ha,ZodArray:Un,ZodObject:ut,ZodUnion:eo,ZodDiscriminatedUnion:$l,ZodIntersection:to,ZodTuple:Gn,ZodRecord:no,ZodMap:Fa,ZodSet:_i,ZodFunction:Wi,ZodLazy:ro,ZodLiteral:io,ZodEnum:Qr,ZodNativeEnum:so,ZodPromise:Xi,ZodEffects:Nn,ZodTransformer:Nn,ZodOptional:vr,ZodNullable:wi,ZodDefault:oo,ZodCatch:qa,ZodNaN:Wa,BRAND:Wk,ZodBranded:im,ZodPipeline:vo,custom:sm,Schema:Re,ZodSchema:Re,late:Zk,get ZodFirstPartyTypeKind(){return _e},coerce:SE,any:eE,array:iE,bigint:Gk,boolean:lm,date:Qk,discriminatedUnion:lE,effect:n0,enum:vE,function:pE,instanceof:Kk,intersection:cE,lazy:gE,literal:mE,map:fE,nan:Vk,nativeEnum:bE,never:nE,null:Xk,nullable:wE,number:am,object:sE,oboolean:CE,onumber:EE,optional:_E,ostring:kE,pipeline:$E,preprocess:xE,promise:yE,record:dE,set:hE,strictObject:oE,string:om,symbol:Yk,transformer:n0,tuple:uE,undefined:Jk,union:aE,unknown:tE,void:rE,NEVER:TE,ZodIssueCode:X,quotelessJson:Rk,ZodError:jn});const{decode:AE}=mo,IE=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,RE=/(?:#\[(?<idx>\d+)\])/g,OE=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,LE=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,PE=/:(?<emoji>\w+):/gu,cm=e=>{const t=[...e.matchAll(IE),...e.matchAll(RE),...e.matchAll(OE),...e.matchAll(LE),...e.matchAll(PE)].sort((a,c)=>a.index-c.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const c=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=c;else{const d={type:"PlainText",content:c};i.push(d)}n=a}};return t.forEach(a=>{const{index:c}=a;if(!(c<n)){if(a.groups?.url){o(c);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(c),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(c);try{const u=AE(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(c+a[0].length)}}else if(a.groups?.hashtag){o(c);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(c);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=c+a[0].length}}),n<e.length&&o(e.length),i},BE=e=>t=>e.safeParse(t).success,ME=wt.tuple([wt.literal("emoji"),wt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),wt.string().url()]),jE=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&Gs(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],c],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:c}))};let UE=class extends em{#e;#t;constructor(t){if(t.kind!==ht.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=cm(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&Gs(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&Gs(i[1])){const a=this.markedEventTags().find(c=>c.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=jE(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}emojiTags(){return this.rawEvent.tags.filter(BE(ME))}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return null;const[,,i]=n;return i}};const Hr=e=>new em(e),kl=e=>new UE(e),NE=()=>{const e=[...Ek];return window.navigator.language.includes("ja")&&e.push(...Ck),e},um=()=>({relayUrls:NE(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),DE=e=>JSON.stringify(e),zE=e=>({...um(),...JSON.parse(e)}),HE=Ax(()=>window.localStorage,DE,zE),[Ns,Xt]=Ix("RabbitConfig",um(),HE),je=()=>{const e=w=>{Xt("relayUrls",T=>mr([...T,w]))},t=w=>{Xt("relayUrls",T=>T.filter(R=>R!==w))},n=w=>{Xt("mutedPubkeys",T=>mr([...T,w]))},i=w=>{Xt("mutedPubkeys",T=>T.filter(R=>R!==w))},o=w=>{Xt("mutedKeywords",T=>mr([...T,w]))},a=w=>{Xt("mutedKeywords",T=>T.filter(R=>R!==w))},c=w=>{Xt("columns",T=>{const R=T.findIndex(A=>A.id===w.id);if(R>=0){const A=[...T];return A.splice(R,1,w),A}return[...T,w]})},u=(w,T)=>{Xt("columns",R=>{const A=T-1,B=Math.max(Math.min(A,R.length),0),C=R.findIndex(ee=>ee.id===w);if(C<0||B===C)return R;console.log(C,B);const P=[...R],[U]=P.splice(C,1);return P.splice(B,0,U),P})},d=w=>{Xt("columns",T=>T.filter(R=>R.id!==w))},h=w=>{Xt("customEmojis",T=>({...T,[w.shortcode]:w}))},p=w=>{Xt("customEmojis",T=>{const R=Object.fromEntries(w.map(A=>[A.shortcode,A]));return{...T,...R}})},g=w=>{Xt("customEmojis",T=>({...T,[w]:void 0}))},v=w=>Ns.customEmojis[w],_=w=>Ns.mutedPubkeys.includes(w),k=w=>w.kind===ht.Text?Ns.mutedKeywords.some(T=>w.content.includes(T)):!1;return{config:()=>Ns,setConfig:Xt,addRelay:e,removeRelay:t,saveColumn:c,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:w})=>{if((Ns.columns?.length??0)>0)return;const T=[G1({width:"widest",pubkey:w}),Q1({pubkey:w}),J1({name:"自分の投稿",pubkey:w}),X1({name:"自分のリアクション",pubkey:w})];navigator.language.includes("ja")&&T.splice(2,0,Y1()),Xt("columns",()=>[...T])},saveEmoji:h,saveEmojis:p,removeEmoji:g,getEmoji:v,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:_,shouldMuteEvent:w=>{const T=Hr(w);return _(w.pubkey)||T.taggedPubkeys().some(_)||w.kind===ht.Text&&k(w)}}},FE=()=>{let e,t;const n=new Promise((i,o)=>{e=i,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:n,resolve:e,reject:t}},qE=e=>{const t=We(e),n=We(()=>t().batchSize??100),i=We(()=>t().interval??2e3),[o,a]=$e(0),[c,u]=$e([]);let d;const h=()=>{const{executor:x}=t(),E=c();E.length>0&&(u([]),x(E)),d!=null&&clearTimeout(d),d=void 0},p=()=>{const x=o();return a(E=>E+1),x},g=()=>{d==null&&(d=setTimeout(()=>{h()},i()))},v=x=>{c().length<n()?u(E=>[...E,x]):(h(),u([x]))},_=x=>{u(E=>E.filter(w=>w.id!==x))};return{exec:async(x,E)=>{const{promise:w,resolve:T,reject:R}=FE(),A=p();return v({id:A,args:x,resolve:T,reject:R}),g(),E?.addEventListener("abort",()=>{_(A),R(new Error("AbortError"))}),w}}},[WE]=$e(new x9),El=()=>WE,[dm,r0]=Ki({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...dm})},1e3);const fm=()=>({stats:dm,setActiveSubscriptions:n=>r0("activeSubscriptions",n),setActiveBatchSubscriptions:n=>r0("activeBatchSubscriptions",n)});let Ou=0;const{setActiveBatchSubscriptions:ZE}=fm();setInterval(()=>{ZE(Ou)},1e3);const KE={events:[],completed:!0},VE=()=>KE,GE=e=>e.kind>=3e4&&e.kind<4e4,QE=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{exec:bo}=qE(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,c=new Map,u=new Map;e.forEach(C=>{if(C.args.type==="Event"){const P=n.get(C.args.eventId)??[];n.set(C.args.eventId,[...P,C])}else if(C.args.type==="Profile"){const P=t.get(C.args.pubkey)??[];t.set(C.args.pubkey,[...P,C])}else if(C.args.type==="Reactions"){const P=i.get(C.args.mentionedEventId)??[];i.set(C.args.mentionedEventId,[...P,C])}else if(C.args.type==="Reposts"){const P=o.get(C.args.mentionedEventId)??[];o.set(C.args.mentionedEventId,[...P,C])}else if(C.args.type==="ZapReceipts"){const P=a.get(C.args.mentionedEventId)??[];o.set(C.args.mentionedEventId,[...P,C])}else if(C.args.type==="ParameterizedReplaceableEvent"){const P=QE(C.args),U=c.get(P)??[];c.set(P,[...U,C])}else if(C.args.type==="Followings"){const P=u.get(C.args.pubkey)??[];u.set(C.args.pubkey,[...P,C])}});const d=[...n.keys()],h=[...t.keys()],p=[...i.keys()],g=[...o.keys()],v=[...a.keys()],_=[...u.keys()],k=[];if(d.length>0&&k.push({ids:d}),h.length>0&&k.push({kinds:[ht.Metadata],authors:h}),p.length>0&&k.push({kinds:[ht.Reaction],"#e":p}),g.length>0&&k.push({kinds:[6],"#e":g}),v.length>0&&k.push({kinds:[9735],"#e":v}),_.length>0&&k.push({kinds:[ht.Contacts],authors:_}),c.size>0&&Array.from(c.values()).forEach(([C])=>{if(C.args.type!=="ParameterizedReplaceableEvent")return;const{args:{kind:P,author:U,identifier:ee}}=C;k.push({kinds:[ht.Contacts],authors:[U],"#d":[ee]})}),k.length===0)return;const x=new Map,E=(C,P)=>{C.forEach(U=>{const ee=x.get(U.id)??$e({events:[],completed:!1});x.set(U.id,ee);const[Z,Q]=ee;Q(q=>({...q,events:[...q.events,P]})),U.resolve(Z)})},w=()=>{e.forEach(C=>{const P=x.get(C.id);if(P!=null){const U=P[1];U(ee=>({...ee,completed:!0}))}else C.resolve(VE)})},{config:T,shouldMuteEvent:R}=je(),B=El()().sub(T().relayUrls,k,{});Ou+=1,B.on("event",C=>{if(C.kind===ht.Metadata){const P=t.get(C.pubkey)??[];E(P,C);return}if(C.kind===ht.Reaction){const P=Hr(C).lastTaggedEventId();if(P!=null){const U=i.get(P)??[];E(U,C)}}else if(C.kind===6){const P=Hr(C).lastTaggedEventId();if(P!=null){const U=o.get(P)??[];E(U,C)}}else if(C.kind===ht.Zap)Hr(C).eTags().forEach(([,U])=>{const ee=o.get(U)??[];E(ee,C)});else if(C.kind===ht.Contacts){const P=u.get(C.pubkey)??[];E(P,C)}else if(GE(C)){const P=Hr(C).findFirstTagByName("d")?.[1];if(P!=null){const U=`${C.kind}:${C.pubkey}:${P}`,ee=c.get(U)??[];E(ee,C)}else console.warn("identifier is undefined")}else{const P=n.get(C.id)??[];P.length>0?E(P,C):console.warn("unknown event received")}}),B.on("eose",()=>{w(),B.unsub(),Ou-=1})}})),hm=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),Jr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const c=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(c))},e)});return Promise.race([n,i])},pm=e=>{const t=We(e),n=is(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return null;const{eventId:u}=c,d=bo({type:"Event",eventId:u},a).then(h=>{const p=h().events[0];if(p==null)throw new Error(`event not found: ${u}`);return p});return Jr(15e3,`useEvent: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},dn=e=>t=>e.some(n=>n==null)?null:t(e),YE=j("<span>投稿が見つかりません"),JE=j('<div class="truncate">読み込み中 '),ao=e=>{const[t,n]=_x(e,["eventId"]),{shouldMuteEvent:i}=je(),{event:o,query:a}=pm(()=>dn([t.eventId])(([u])=>({eventId:u}))),c=()=>{const u=o();return u!=null&&i(u)};return $(Mn,{get fallback(){return(()=>{const u=YE();return u.firstChild,O(u,()=>e.eventId,null),u})()},get children(){return[$(ze,{get when(){return c()},children:null}),$(ze,{get when(){return o()},keyed:!0,children:u=>$(tv,wx({event:u},n))}),$(ze,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=JE();return d.firstChild,O(d,$(Vs,{eventId:u}),null),d})()})]}})},XE=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},eC=e=>{try{return XE(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},tC={staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3},nC=({queryKey:e,signal:t,queryClient:n})=>{const[,i]=e;if(i==null)return Promise.resolve(null);const{pubkey:o}=i,a=bo({type:"Profile",pubkey:o},t).then(c=>{const u=()=>{const d=hm(c().events);if(d==null)throw new Error(`profile not found: ${o}`);return d};return nl(c).subscribe(()=>{try{n.setQueryData(e,u())}catch(d){console.error("error occurred while updating profile cache: ",d)}}),u()});return Jr(15e3,`useProfile: ${o}`)(a)},hs=e=>{const t=rs(),n=We(e),i=We(()=>["useProfile",n()]),o=is(i,({queryKey:u,signal:d})=>nC({queryKey:u,signal:d,queryClient:t}),tC);return{profile:We(()=>{if(o.data==null)return null;const{content:u}=o.data;return eC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:rC}=mo,Cl=e=>{try{return rC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Sl=e=>{const{profile:t}=hs(()=>({pubkey:e.pubkey}));return $(Mn,{get fallback(){return Cl(e.pubkey)},get children(){return[$(ze,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),$(ze,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",We(()=>t()?.name)]}})]}})},gm=e=>{const[t,n]=$e(new Date);return gr(()=>{const i=setInterval(()=>{n(new Date)},e().interval);yr(()=>clearInterval(i))}),t},iC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},i0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,sC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},oC=e=>{switch(e.kind){case"today":return i0(e.value);case"yesterday":return`昨日 ${i0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},aC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,lC=(e,t)=>{const n=aC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},s0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),cC=e=>new Date(+e-24*60*60*1e3),mm=(e,t,n)=>s0(e,t)?n({kind:"today",value:e}):s0(e,cC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),uC=(e,t=new Date)=>mm(e,t,sC),dC=(e,t=new Date)=>mm(e,t,oC),o0=(e,t=new Date,n=iC)=>n(lC(e,t)),a0=gm(()=>({interval:7e3})),l0=gm(()=>({interval:60*1e3})),vm=()=>{const{config:e}=je();return t=>{switch(e().dateFormat){case"absolute-long":return uC(t,l0());case"absolute-short":return dC(t,l0());case"relative":return o0(t,a0());default:return o0(t,a0())}}},[fC,zi]=$e({type:"Closed"}),Xr=()=>({modalState:fC,setModalState:zi,showProfile:a=>{zi({type:"Profile",pubkey:a})},showProfileEdit:()=>{zi({type:"ProfileEdit"})},showAddColumn:()=>{zi({type:"AddColumn"})},showAbout:()=>{zi({type:"About"})},closeModal:()=>{zi({type:"Closed"})}}),hC=j('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),bm=e=>{const{showProfile:t}=Xr(),n=vm(),i=We(()=>Hr(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=hC(),c=a.firstChild,u=c.firstChild,d=u.nextSibling,h=d.firstChild,p=d.nextSibling,g=c.nextSibling;return O(u,$(K1,{})),h.$$click=()=>t(e.event.pubkey),O(h,$(Sl,{get pubkey(){return e.event.pubkey}})),O(p,()=>n(i().createdAtAsDate())),O(g,$(ao,{get eventId(){return o()}})),a})()};bt(["click"]);const pC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),gC=(e={})=>(()=>{const t=pC();return Ge(t,e,!0,!0),t})(),mC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),ym=(e={})=>(()=>{const t=mC();return Ge(t,e,!0,!0),t})(),vC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),kd=(e={})=>(()=>{const t=vC();return Ge(t,e,!0,!0),t})(),bC=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),_m=(e={})=>(()=>{const t=bC();return Ge(t,e,!0,!0),t})(),yC=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),Ed=(e={})=>(()=>{const t=yC();return Ge(t,e,!0,!0),t})(),_C=j('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),Cd=e=>{let t,n;const[i,o]=$e(!1),[a,c]=$e({}),u=xx(()=>e.children),d=()=>o(!1),h=()=>o(k=>!k),p=k=>{const x=k.target;x!=null&&!n?.contains(x)&&d()},g=()=>{document.addEventListener("mousedown",p)},v=()=>{document.removeEventListener("mousedown",p)},_=()=>{if(t==null||n==null)return;const k=t?.getBoundingClientRect(),x=n?.getBoundingClientRect();let{top:E,left:w}=k;e.position==="left"?w-=k.width:e.position==="right"?w+=k.width:e.position==="top"?(E-=k.height,w-=k.left+k.width/2):(E+=k.height,w+=k.width/2),E=Math.min(E,window.innerHeight-x.height),w=Math.min(w,window.innerWidth-x.width),c({left:`${w}px`,top:`${E}px`})};return gr(()=>{i()?(g(),e.onOpen?.()):(v(),e.onClose?.())}),gr(tl(u,()=>{_()})),gr(()=>{i()&&_()}),fn(()=>{e.ref?.({close:d})}),yr(()=>v()),(()=>{const k=_C(),x=k.firstChild,E=x.nextSibling;x.$$click=()=>{h(),_()};const w=t;typeof w=="function"?_r(w,x):t=x,O(x,()=>e.button);const T=n;return typeof T=="function"?_r(T,E):n=E,O(E,u),Le(R=>{const A=!i(),B=!!i(),C=a();return A!==R._v$&&E.classList.toggle("hidden",R._v$=A),B!==R._v$2&&E.classList.toggle("block",R._v$2=B),R._v$3=$x(E,C,R._v$3),R},{_v$:void 0,_v$2:void 0,_v$3:void 0}),k})()};bt(["click"]);const wC=j('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),xC=j('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),$C=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=wC(),i=n.firstChild;return i.$$click=t,O(i,()=>e.item.content()),n})()},wm=e=>{let t;const n=()=>t?.close();return $(Cd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=xC();return O(i,$(Ut,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>$($C,{item:o,onClose:n})})),i}})};bt(["click"]);function xm(e){return e&&e.__esModule?e.default:e}function Ln(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Tl,ve,$m,zs,km,c0,Za={},Em=[],kC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Fr(e,t){for(var n in t)e[n]=t[n];return e}function Cm(e){var t=e.parentNode;t&&t.removeChild(e)}function Lu(e,t,n){var i,o,a,c={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?Tl.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return ka(e,c,i,o,null)}function ka(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++$m};return o==null&&ve.vnode!=null&&ve.vnode(a),a}function dr(){return{current:null}}function es(e){return e.children}function Wn(e,t){this.props=e,this.context=t}function ts(e,t){if(t==null)return e.__?ts(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ts(e):null}function Sm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Sm(e)}}function u0(e){(!e.__d&&(e.__d=!0)&&zs.push(e)&&!Ka.__r++||c0!==ve.debounceRendering)&&((c0=ve.debounceRendering)||km)(Ka)}function Ka(){for(var e;Ka.__r=zs.length;)e=zs.sort(function(t,n){return t.__v.__b-n.__v.__b}),zs=[],e.some(function(t){var n,i,o,a,c,u;t.__d&&(c=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Fr({},a)).__v=a.__v+1,Sd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[c]:null,i,c??ts(a),a.__h),Rm(i,a),a.__e!=c&&Sm(a)))})}function Tm(e,t,n,i,o,a,c,u,d,h){var p,g,v,_,k,x,E,w=i&&i.__k||Em,T=w.length;for(n.__k=[],p=0;p<t.length;p++)if((_=n.__k[p]=(_=t[p])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?ka(null,_,null,null,_):Array.isArray(_)?ka(es,{children:_},null,null,null):_.__b>0?ka(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(v=w[p])===null||v&&_.key==v.key&&_.type===v.type)w[p]=void 0;else for(g=0;g<T;g++){if((v=w[g])&&_.key==v.key&&_.type===v.type){w[g]=void 0;break}v=null}Sd(e,_,v=v||Za,o,a,c,u,d,h),k=_.__e,(g=_.ref)&&v.ref!=g&&(E||(E=[]),v.ref&&E.push(v.ref,null,_),E.push(g,_.__c||k,_)),k!=null?(x==null&&(x=k),typeof _.type=="function"&&_.__k===v.__k?_.__d=d=Am(_,d,e):d=Im(e,_,v,w,k,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=ts(v))}for(n.__e=x,p=T;p--;)w[p]!=null&&(typeof n.type=="function"&&w[p].__e!=null&&w[p].__e==n.__d&&(n.__d=ts(i,p+1)),Lm(w[p],w[p]));if(E)for(p=0;p<E.length;p++)Om(E[p],E[++p],E[++p])}function Am(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?Am(i,t,n):Im(n,i,i,o,i.__e,t));return t}function Va(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Va(n,t)}):t.push(e)),t}function Im(e,t,n,i,o,a){var c,u,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),c=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),c=a}return c!==void 0?c:o.nextSibling}function EC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||Ga(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||Ga(e,a,t[a],n[a],i)}function d0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||kC.test(t)?n:n+"px"}function Ga(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||d0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||d0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?h0:f0,a):e.removeEventListener(t,a?h0:f0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function f0(e){this.l[e.type+!1](ve.event?ve.event(e):e)}function h0(e){this.l[e.type+!0](ve.event?ve.event(e):e)}function Sd(e,t,n,i,o,a,c,u,d){var h,p,g,v,_,k,x,E,w,T,R,A=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(h=ve.__b)&&h(t);try{e:if(typeof A=="function"){if(E=t.props,w=(h=A.contextType)&&i[h.__c],T=h?w?w.props.value:h.__:i,n.__c?x=(p=t.__c=n.__c).__=p.__E:("prototype"in A&&A.prototype.render?t.__c=p=new A(E,T):(t.__c=p=new Wn(E,T),p.constructor=A,p.render=SC),w&&w.sub(p),p.props=E,p.state||(p.state={}),p.context=T,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),A.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Fr({},p.__s)),Fr(p.__s,A.getDerivedStateFromProps(E,p.__s))),v=p.props,_=p.state,g)A.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(A.getDerivedStateFromProps==null&&E!==v&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(E,T),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(E,p.__s,T)===!1||t.__v===n.__v){p.props=E,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(B){B&&(B.__=t)}),p.__h.length&&c.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(E,p.__s,T),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(v,_,k)})}p.context=T,p.props=E,p.state=p.__s,(h=ve.__r)&&h(t),p.__d=!1,p.__v=t,p.__P=e,h=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Fr(Fr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(k=p.getSnapshotBeforeUpdate(v,_)),R=h!=null&&h.type===es&&h.key==null?h.props.children:h,Tm(e,Array.isArray(R)?R:[R],t,n,i,o,a,c,u,d),p.base=t.__e,t.__h=null,p.__h.length&&c.push(p),x&&(p.__E=p.__=null),p.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=CC(n.__e,t,n,i,o,a,c,d);(h=ve.diffed)&&h(t)}catch(B){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),ve.__e(B,t,n)}}function Rm(e,t){ve.__c&&ve.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){ve.__e(i,n.__v)}})}function CC(e,t,n,i,o,a,c,u){var d,h,p,g=n.props,v=t.props,_=t.type,k=0;if(_==="svg"&&(o=!0),a!=null){for(;k<a.length;k++)if((d=a[k])&&"setAttribute"in d==!!_&&(_?d.localName===_:d.nodeType===3)){e=d,a[k]=null;break}}if(e==null){if(_===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,v.is&&v),a=null,u=!1}if(_===null)g===v||u&&e.data===v||(e.data=v);else{if(a=a&&Tl.call(e.childNodes),h=(g=n.props||Za).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},k=0;k<e.attributes.length;k++)g[e.attributes[k].name]=e.attributes[k].value;(p||h)&&(p&&(h&&p.__html==h.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(EC(e,v,g,o,u),p)t.__k=[];else if(k=t.props.children,Tm(e,Array.isArray(k)?k:[k],t,n,i,o&&_!=="foreignObject",a,c,a?a[0]:n.__k&&ts(n,0),u),a!=null)for(k=a.length;k--;)a[k]!=null&&Cm(a[k]);u||("value"in v&&(k=v.value)!==void 0&&(k!==g.value||k!==e.value||_==="progress"&&!k)&&Ga(e,"value",k,g.value,!1),"checked"in v&&(k=v.checked)!==void 0&&k!==e.checked&&Ga(e,"checked",k,g.checked,!1))}return e}function Om(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){ve.__e(i,n)}}function Lm(e,t,n){var i,o;if(ve.unmount&&ve.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||Om(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){ve.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&Lm(i[o],t,typeof e.type!="function");n||e.__e==null||Cm(e.__e),e.__e=e.__d=void 0}function SC(e,t,n){return this.constructor(e,n)}function Pm(e,t,n){var i,o,a;ve.__&&ve.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Sd(t,e=(!i&&n||t).__k=Lu(es,null,[e]),o||Za,Za,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Tl.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),Rm(a,e)}Tl=Em.slice,ve={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},$m=0,Wn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Fr({},this.state),typeof e=="function"&&(e=e(Fr({},n),this.props)),e&&Fr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),u0(this))},Wn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),u0(this))},Wn.prototype.render=es,zs=[],km=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ka.__r=0;var TC=0;function W(e,t,n,i,o){var a,c,u={};for(c in t)c=="ref"?a=t[c]:u[c]=t[c];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--TC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return ve.vnode&&ve.vnode(d),d}function AC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function IC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Wr={set:AC,get:IC};const su=new Map,RC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function OC(){for(const{v:e,emoji:t}of RC)if(Bm(t))return e}function LC(){return!Bm("🇨🇦")}function Bm(e){if(su.has(e))return su.get(e);const t=PC(e);return su.set(e,t),t}const PC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,c=a.length;let u=0;for(;u<c&&!a[u+3];u+=4);if(u>=c)return!1;const d=n+u/4%n,h=Math.floor(u/4/n),p=e.getImageData(d,h,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||e.measureText(o).width>=n)}})();var p0={latestVersion:OC,noCountryFlags:LC};const Pu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Lt=null;function BC(e){Lt||(Lt=Wr.get("frequently")||{});const t=e.id||e;t&&(Lt[t]||(Lt[t]=0),Lt[t]+=1,Wr.set("last",t),Wr.set("frequently",Lt))}function MC({maxFrequentRows:e,perLine:t}){if(!e)return[];Lt||(Lt=Wr.get("frequently"));let n=[];if(!Lt){Lt={};for(let a in Pu.slice(0,t)){const c=Pu[a];Lt[c]=t-a,n.push(c)}return n}const i=e*t,o=Wr.get("last");for(let a in Lt)n.push(a);if(n.sort((a,c)=>{const u=Lt[c],d=Lt[a];return u==d?a.localeCompare(c):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let c of a)c!=o&&delete Lt[c];o&&n.indexOf(o)==-1&&(delete Lt[n[n.length-1]],n.splice(-1,1,o)),Wr.set("frequently",Lt)}return n}var Mm={add:BC,get:MC,DEFAULTS:Pu},jm={};jm=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var pr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let jt=null,Be=null;const ou={};async function g0(e){if(ou[e])return ou[e];const n=await(await fetch(e)).json();return ou[e]=n,n}let au=null,Um=null,Nm=!1;function Al(e,{caller:t}={}){return au||(au=new Promise(n=>{Um=n})),e?jC(e):t&&!Nm&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),au}async function jC(e){Nm=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=pr.emojiVersion.value),n||(n=pr.set.value),i||(i=pr.locale.value),Be)Be.categories=Be.categories.filter(d=>!d.name);else{Be=(typeof e.data=="function"?await e.data():e.data)||await g0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Be.emoticons={},Be.natives={},Be.categories.unshift({id:"frequent",emojis:[]});for(const d in Be.aliases){const h=Be.aliases[d],p=Be.emojis[h];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}Be.originalCategories=Be.categories}if(jt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?xm(jm):await g0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const h=e.custom[d],p=e.custom[d-1];if(!(!h.emojis||!h.emojis.length)){h.id||(h.id=`custom_${d+1}`),h.name||(h.name=jt.categories.custom),p&&!h.icon&&(h.target=p.target||p),Be.categories.push(h);for(const g of h.emojis)Be.emojis[g.id]=g}}e.categories&&(Be.categories=Be.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,h)=>{const p=e.categories.indexOf(d.id),g=e.categories.indexOf(h.id);return p-g}));let o=null,a=null;n=="native"&&(o=p0.latestVersion(),a=e.noCountryFlags||p0.noCountryFlags());let c=Be.categories.length,u=!1;for(;c--;){const d=Be.categories[c];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=e;g=g>=0?g:pr.maxFrequentRows.value,v||(v=pr.perLine.value),d.emojis=Mm.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){Be.categories.splice(c,1);continue}const{categoryIcons:h}=e;if(h){const g=h[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],v=g.id?g:Be.emojis[g],_=()=>{d.emojis.splice(p,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){_();continue}if(o&&v.version>o){_();continue}if(a&&d.id=="flags"&&!HC.includes(v.id)){_();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([x,E])=>{if(x)return(Array.isArray(x)?x:[x]).map(w=>(E?w.split(/[-|_|\s]+/):[w]).map(T=>T.toLowerCase())).flat()}).flat().filter(x=>x&&x.trim()).join(","),v.emoticons)for(const x of v.emoticons)Be.emoticons[x]||(Be.emoticons[x]=v.id);let k=0;for(const x of v.skins){if(!x)continue;k++;const{native:E}=x;E&&(Be.natives[E]=v.id,v.search+=`,${E}`);const w=k==1?"":`:skin-tone-${k}:`;x.shortcodes=`:${v.id}:${w}`}}}}u&&Zi.reset(),Um()}function Dm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=zm(o,e,t,n);return i}function zm(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const UC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Bu=null;function NC(e){return e.id?e:Be.emojis[e]||Be.emojis[Be.aliases[e]]||Be.emojis[Be.natives[e]]}function DC(){Bu=null}async function zC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Al(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,h)=>u.trim()&&h.indexOf(u)==d);if(!i.length)return;let o=Bu||(Bu=Object.values(Be.emojis)),a,c;for(const u of i){if(!o.length)break;a=[],c={};for(const d of o){if(!d.search)continue;const h=d.search.indexOf(`,${u}`);h!=-1&&(a.push(d),c[d.id]||(c[d.id]=0),c[d.id]+=d.id==u?0:h+1)}o=a}return a.length<2||(a.sort((u,d)=>{const h=c[u.id],p=c[d.id];return h==p?u.id.localeCompare(d.id):h-p}),a.length>t&&(a=a.slice(0,t))),a}var Zi={search:zC,get:NC,reset:DC,SHORTCODES_REGEX:UC};const HC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function FC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function qC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function WC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const ZC={activity:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:W("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:W("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:W("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:W("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[W("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),W("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[W("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),W("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:W("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[W("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),W("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:W("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[W("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),W("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[W("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),W("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:W("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:W("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},KC={loupe:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:W("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:W("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:W("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Qa={categories:ZC,search:KC};function Mu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Zi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Zi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),c=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return W("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?W("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?W("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):W("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${c})`,backgroundSize:`${100*Be.sheet.cols}% ${100*Be.sheet.rows}%`,backgroundPosition:`${100/(Be.sheet.cols-1)*o.x}% ${100/(Be.sheet.rows-1)*o.y}%`}})})}const VC=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Hm extends VC{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=zm(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class GC extends Hm{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Fm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:pr.set,skin:pr.skin};class qm extends Hm{async connectedCallback(){const t=Dm(this.props,Fm,this);t.element=this,t.ref=n=>{this.component=n},await Al(),!this.disconnected&&Pm(W(Mu,{...t}),this)}constructor(t){super(t)}}Ln(qm,"Props",Fm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",qm);var m0,ju=[],v0=ve.__b,b0=ve.__r,y0=ve.diffed,_0=ve.__c,w0=ve.unmount;function QC(){var e;for(ju.sort(function(t,n){return t.__v.__b-n.__v.__b});e=ju.pop();)if(e.__P)try{e.__H.__h.forEach(Ea),e.__H.__h.forEach(Uu),e.__H.__h=[]}catch(t){e.__H.__h=[],ve.__e(t,e.__v)}}ve.__b=function(e){v0&&v0(e)},ve.__r=function(e){b0&&b0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ea),t.__h.forEach(Uu),t.__h=[])},ve.diffed=function(e){y0&&y0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(ju.push(t)!==1&&m0===ve.requestAnimationFrame||((m0=ve.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),x0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);x0&&(i=requestAnimationFrame(o))})(QC))},ve.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ea),n.__h=n.__h.filter(function(i){return!i.__||Uu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],ve.__e(i,n.__v)}}),_0&&_0(e,t)},ve.unmount=function(e){w0&&w0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ea(i)}catch(o){t=o}}),t&&ve.__e(t,n.__v))};var x0=typeof requestAnimationFrame=="function";function Ea(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Uu(e){e.__c=e.__()}function YC(e,t){for(var n in t)e[n]=t[n];return e}function $0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Ya(e){this.props=e}(Ya.prototype=new Wn).isPureReactComponent=!0,Ya.prototype.shouldComponentUpdate=function(e,t){return $0(this.props,e)||$0(this.state,t)};var k0=ve.__b;ve.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),k0&&k0(e)};var JC=ve.__e;ve.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}JC(e,t,n)};var E0=ve.unmount;function lu(){this.__u=0,this.t=null,this.__b=null}function Wm(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function va(){this.u=null,this.o=null}ve.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),E0&&E0(e)},(lu.prototype=new Wn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Wm(i.__v),a=!1,c=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=c;var u=function(){if(!--i.__u){if(i.state.__e){var h=i.state.__e;i.__v.__k[0]=function g(v,_,k){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(x){return g(x,_,k)}),v.__c&&v.__c.__P===_&&(v.__e&&k.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=k)),v}(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(c,c)},lu.prototype.componentWillUnmount=function(){this.t=[]},lu.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(c,u,d){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),c.__c.__H=null),(c=YC({},c)).__c!=null&&(c.__c.__P===d&&(c.__c.__P=u),c.__c=null),c.__k=c.__k&&c.__k.map(function(h){return a(h,u,d)})),c}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Lu(es,null,e.fallback);return o&&(o.__h=null),[Lu(es,null,t.__e?null:e.children),o]};var C0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(va.prototype=new Wn).__e=function(e){var t=this,n=Wm(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),C0(t,e,i)):o()};n?n(a):a()}},va.prototype.render=function(e){this.u=null,this.o=new Map;var t=Va(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},va.prototype.componentDidUpdate=va.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){C0(e,n,t)})};var XC=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,eS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,tS=typeof document<"u",nS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Wn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Wn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var S0=ve.event;function rS(){}function iS(){return this.cancelBubble}function sS(){return this.defaultPrevented}ve.event=function(e){return S0&&(e=S0(e)),e.persist=rS,e.isPropagationStopped=iS,e.isDefaultPrevented=sS,e.nativeEvent=e};var T0={configurable:!0,get:function(){return this.class}},A0=ve.vnode;ve.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var c=n[a];tS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&c==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&c===!0?c="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!nS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&eS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():c===null&&(c=void 0),i[a]=c)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Va(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=Va(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(T0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",T0))}e.$$typeof=XC,A0&&A0(e)};var I0=ve.__r;ve.__r=function(e){I0&&I0(e),e.__c};const oS={light:"outline",dark:"solid"};class aS extends Ya{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return W("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return W("img",{src:n.src})}const i=Qa.categories[t.id]||Qa.categories.custom,o=this.props.icons=="auto"?oS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return W("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:W("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||jt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),W("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:c=>c.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),W("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Be.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class lS extends Ya{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const ba={rowsPerRender:10};class cS extends Wn{getInitialState(t=this.props){return{skin:Wr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=jt.rtl?"rtl":"ltr",this.refs={menu:dr(),navigation:dr(),scroll:dr(),search:dr(),searchInput:dr(),skinToneButton:dr(),skinToneRadio:dr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Al(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Be;this.refs.categories=new Map;const n=Be.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const c=[];c.__categoryId=a.id,c.__index=o.length,this.grid.push(c);const u=this.grid.length-1,d=u%ba.rowsPerRender?{}:dr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),c};for(let o of t){const a=[];let c=i(a,o);for(let u of o.emojis)c.length==this.getPerLine()&&(c=i(a,o)),this.grid.setsize+=1,c.push(u);this.refs.categories.set(o.id,{root:dr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:c}=n.getBoundingClientRect();return Math.floor(c/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Zi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=c=>{c!=t.state.categoryId&&t.setState({categoryId:c})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(c=>{for(const d of c){const h=d.target.dataset.id;n.set(h,d.intersectionRatio)}const u=[...n];for(const[d,h]of u)if(h){i(d);break}},o);for(const{root:c}of this.refs.categories.values())a.observe(c.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(ba.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*ba.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:c}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,h]=this.state.pos;const p=(()=>{if(d==0&&h==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||c)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(h+=v,!g[h]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,h=i?0:u[d].length-1,[d,h];h=i?g.length-1:0}return[d,h]}if(a||c){d+=a?-1:1;const g=u[d];return g?(g[h]||(h=g.length-1),[d,h]):(d=a?0:u.length-1,h=a?0:u[d].length-1,[d,h])}})();if(p)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let c=0;if(n>=0&&(t=i[n].__categoryId),t&&(c=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)c=0;else{const u=i[n].__index,d=c+u*this.props.emojiButtonSize,h=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)c=d;else if(h>o.scrollTop+a.height)c=h-a.height;else return}this.ignoreMouse(),o.scrollTop=c}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=WC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Mm.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Wr.set("skin",t)}renderNav(){return W(aS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return W("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[W("div",{class:"flex flex-middle flex-grow",children:[W("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:W(Mu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),W("div",{class:`margin-${this.dir[0]}`,children:t||n?W("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[W("div",{class:"preview-title ellipsis",children:t?t.name:jt.search_no_results_1}),W("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:jt.search_no_results_2})]}):W("div",{class:"preview-placeholder color-c",children:jt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,c=this.state.tempSkin||this.state.skin,d=(t.skins[c-1]||t.skins[0]).native,h=FC(this.state.pos,n),p=n.concat(t.id).join("");return W(lS,{selected:h,skin:c,size:a,children:W("button",{"aria-label":d,"aria-selected":h||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[W("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),W(Mu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:c,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return W("div",{children:[W("div",{class:"spacer"}),W("div",{class:"flex flex-middle",children:[W("div",{class:"search relative flex-grow",children:[W("input",{type:"search",ref:this.refs.searchInput,placeholder:jt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),W("span",{class:"icon loupe flex",children:Qa.search.loupe}),this.state.searchResults&&W("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Qa.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?W("div",{class:"category",ref:this.refs.search,children:[W("div",{class:`sticky padding-small align-${this.dir[0]}`,children:jt.categories.search}),W("div",{children:t.length?t.map((n,i)=>W("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):W("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&W("a",{onClick:this.props.onAddCustomEmoji,children:jt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Be,n=!!this.state.searchResults,i=this.getPerLine();return W("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:c}=this.refs.categories.get(o.id);return W("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[W("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||jt.categories[o.id]}),W("div",{class:"relative",style:{height:c.length*this.props.emojiButtonSize},children:c.map((u,d)=>{const h=u.index-u.index%ba.rowsPerRender,p=this.state.visibleRows[h],g="current"in u?u:void 0;if(!p&&!g)return null;const v=d*i,_=v+i,k=o.emojis.slice(v,_);return k.length<i&&k.push(...new Array(i-k.length)),W("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&k.map((x,E)=>{if(!x)return W("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const w=Zi.get(x);return this.renderEmojiButton(w,{pos:[u.index,E],posinset:u.posinset+E,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:W("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:W("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":jt.skins.choose,title:jt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:W("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return W("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),W("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":jt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const c=a+1,u=this.state.skin==c;return W("div",{children:[W("input",{type:"radio",name:"skin-tone",value:c,"aria-label":jt.skins[c],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(c),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(c))}}),W("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(c),onMouseEnter:()=>this.handleSkinMouseOver(c),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[W("span",{class:`skin-tone skin-tone-${c}`}),W("span",{class:"margin-small-lr",children:jt.skins[c]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return W("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&W("div",{class:"padding-lr",children:this.renderSearch()}),W("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:W("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),Ln(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Ln(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Ln(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Ln(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Ln(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Zi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const c=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let h of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(h);this.ignoreMouse(),this.setState({searchResults:u,pos:c},a)}),Ln(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Ln(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Ln(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Ln(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await qC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class Td extends GC{async connectedCallback(){const t=Dm(this.props,pr,this);t.element=this,t.ref=n=>{this.component=n},await Al(t),!this.disconnected&&Pm(W(cS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:xm(Zm)})}}Ln(Td,"Props",pr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Td);var Zm={};Zm=`:host {
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

`;const Km=e=>{let t;const[n,i]=$e(void 0);return $(Cd,{ref:c=>{t=c},position:"bottom",get button(){return e.children},onOpen:()=>{const c=new Td({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(c)},onClose:()=>{i(void 0)},get children(){return n()}})},uS=j("<div>"),dS=j('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),fS=j("<br>"),hS=j("<span>理由: "),pS=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),gS=e=>{const[t,n]=$e(!1);return $(fe,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=pS();return i.firstChild,i.$$click=()=>n(!0),O(i,$(fe,{get when(){return e.contentWarning.reason!=null},get children(){return[fS(),(()=>{const o=hS();return o.firstChild,O(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=uS();return O(i,()=>e.children),i})(),$(fe,{get when(){return e.contentWarning.contentWarning},get children(){const i=dS();return i.$$click=()=>n(!1),i}})]}})};bt(["click"]);const Vm=e=>{const{profile:t}=hs(()=>({pubkey:e.pubkey}));return $(fe,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Cl(e.pubkey)}`},get children(){return["@",We(()=>t()?.name??e.pubkey)]}})},mS=j('<a target="_blank" rel="noreferrer noopener">'),Il=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return $(fe,{get when(){return t()},get fallback(){return e.href},get children(){const n=mS();return O(n,()=>e.children??e.href),Le(i=>{const o=e.class,a=e.href;return o!==i._v$&&kx(n,i._v$=o),a!==i._v$2&&vt(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},vS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},bS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},yS=j('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),_S=j('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),wS=e=>{let t;const[n,i]=$e(e.initialHidden);return $(fe,{get when(){return!n()},get fallback(){return(()=>{const o=_S();return o.$$click=()=>i(!1),o})()},get children(){return $(Il,{class:"my-2 block",get href(){return e.url},get children(){const o=yS(),a=t;return typeof a=="function"?_r(a,o):t=o,Le(c=>{const u=bS(e.url),d=e.url;return u!==c._v$&&vt(o,"src",c._v$=u),d!==c._v$2&&vt(o,"alt",c._v$2=d),c},{_v$:void 0,_v$2:void 0}),o}})}})};bt(["click"]);const xS=j('<div class="my-1 rounded border p-1">'),$S=e=>$(fe,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return $(Vs,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=xS();return O(t,$(ao,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[ht.Text]}})),t}}),kS=j('<button class="inline text-blue-500 underline">'),cu=e=>{const{showProfile:t}=Xr(),n=()=>{t(e.pubkey)};return(()=>{const i=kS();return i.$$click=n,O(i,$(Vm,{get pubkey(){return e.pubkey}})),i})()};bt(["click"]);const[Ad,ES]=$e({}),Gm=e=>{Ad()[e]==null&&ES(t=>({...t,[e]:new MessageChannel}))},CS=e=>{const t=()=>Ad()[e().id],n=(o,a)=>{const c={requestId:o,request:a};t().port1.postMessage(c)},i=(o,a=1e3)=>new Promise((c,u)=>{let d;const h=p=>{const g=p.data;g.requestId===o&&(t().port1.removeEventListener("message",h),g.ok?c(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",h),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",h,!1),t().port1.start()});return fn(()=>{const{id:o}=e();Gm(o)}),async o=>{const a=Math.random().toString(),c=i(a);return n(a,o),c}},SS=e=>{const t=We(e),n=()=>Ad()[t().id];fn(()=>{const{id:i}=t();Gm(i);const o=n().port2,a=c=>{const{requestId:u,request:d}=c.data,h=t().handler(d);(h instanceof Promise?h:Promise.resolve(h)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),yr(()=>{o.removeEventListener("message",a)})})},yo=()=>CS(()=>({id:"CommandChannel"})),Nu=e=>{SS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},uu=j("<span>"),R0=j('<div class="my-1 rounded border p-1">'),TS=j('<span class="text-blue-500 underline">'),AS=j('<button class="text-blue-500 underline">'),IS=j('<img class="inline-block h-8 max-w-[128px] align-middle">'),RS=e=>{const{config:t,saveColumn:n}=je(),i=yo(),o=()=>kl(e.event),a=c=>{n($d({query:c})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return $(Ut,{get each(){return o().parsed()},children:c=>{if(c.type==="PlainText")return(()=>{const u=uu();return O(u,()=>c.content),u})();if(c.type==="URL")return vS(c.content)?$(wS,{get url(){return c.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):$(Il,{class:"text-blue-500 underline",get href(){return c.content}});if(c.type==="TagReference"){const u=o().resolveTagReference(c);if(u==null)return(()=>{const d=uu();return O(d,()=>c.content),d})();if(u.type==="MentionedUser")return $(cu,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?$($S,{mentionedEvent:u}):$(Vs,{get eventId(){return u.eventId}})}if(c.type==="Bech32Entity")return c.data.type==="note"&&e.embedding?(()=>{const u=R0();return O(u,$(ao,{get eventId(){return c.data.data},actions:!1,embedding:!1,get ensureKinds(){return[ht.Text]}})),u})():c.data.type==="nevent"&&e.embedding?(()=>{const u=R0();return O(u,$(ao,{get eventId(){return c.data.data.id},actions:!1,embedding:!1})),u})():c.data.type==="npub"?$(cu,{get pubkey(){return c.data.data}}):c.data.type==="nprofile"?$(cu,{get pubkey(){return c.data.data.pubkey}}):(()=>{const u=TS();return O(u,()=>c.content),u})();if(c.type==="HashTag")return(()=>{const u=AS();return u.$$click=()=>a(c.content),O(u,()=>c.content),u})();if(c.type==="CustomEmoji"){const u=o().getEmojiUrl(c.shortcode);return u==null?(()=>{const d=uu();return O(d,()=>c.content),d})():(()=>{const d=IS();return vt(d,"src",u),Le(()=>vt(d,"alt",c.content)),d})()}return console.error("Not all ParsedTextNoteNodes are covered",c),null}})};bt(["click"]);const OS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Qm=(e={})=>(()=>{const t=OS();return Ge(t,e,!0,!0),t})(),LS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),PS=(e={})=>(()=>{const t=LS();return Ge(t,e,!0,!0),t})(),BS=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),ns=(e={})=>(()=>{const t=BS();return Ge(t,e,!0,!0),t})(),MS=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),jS=(e={})=>(()=>{const t=MS();return Ge(t,e,!0,!0),t})(),US=e=>Math.floor(+e/1e3),fr=()=>US(new Date),NS=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),DS=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:c,tags:u})=>{const d=[],h=e?.map(g=>["p",g])??[],p=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),c?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...h,...p]},Rl=()=>{const e=El(),t=async(d,h)=>{const p={...h};if(p.id=vl(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async v=>{const k=(await e().ensureRelay(v)).publish(g);return NS(k,v)})};return{publishTextNote:async d=>{const{relayUrls:h,pubkey:p,content:g}=d,v=DS(d),_={kind:1,pubkey:p,created_at:fr(),tags:v,content:g};return t(h,_)},publishReaction:async({relayUrls:d,pubkey:h,eventId:p,content:g,notifyPubkey:v})=>{const _={kind:7,pubkey:h,created_at:fr(),tags:[["e",p,""],["p",v]],content:g};return t(d,_)},publishRepost:async({relayUrls:d,pubkey:h,eventId:p,notifyPubkey:g})=>{const v={kind:6,pubkey:h,created_at:fr(),tags:[["e",p,""],["p",g]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:h,profile:p,otherProperties:g})=>{const v={...p,...g},_={kind:ht.Metadata,pubkey:h,created_at:fr(),tags:[],content:JSON.stringify(v)};return t(d,_)},updateContacts:async({relayUrls:d,pubkey:h,followingPubkeys:p,content:g})=>{const v=p.map(k=>["p",k]),_={kind:ht.Contacts,pubkey:h,created_at:fr(),tags:v,content:g};return t(d,_)},deleteEvent:async({relayUrls:d,pubkey:h,eventId:p})=>{const g={kind:ht.EventDeletion,pubkey:h,created_at:fr(),tags:[["e",p,""]],content:""};return t(d,g)}}};let du=!1;const[ya,zS]=$e(void 0),$r=()=>(fn(()=>{if(ya()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),ya()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&ya()==null&&!du&&(du=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),zS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{du=!1})),e+=1},200)}),ya),HS=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},FS=e=>t=>Promise.allSettled(t.map(n=>e(n))),qS=j("<div>に返信"),WS=j('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),ZS=j('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),KS=j('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),VS=j('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),GS=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},QS=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(c=>{c.type==="URL"?o.push(c.content):c.type==="HashTag"?t.push(c.tagName):c.type==="Bech32Entity"?c.data.type==="npub"?n.push(c.data.data):c.data.type==="note"&&i.push(c.data.data):c.type==="CustomEmoji"&&!a.includes(c.shortcode)&&a.push(c.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},YS=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},Ym=e=>{let t,n;const[i,o]=$e(""),[a,c]=$e(!1),[u,d]=$e(""),h=G=>o(ae=>`${ae} ${G}`),p=()=>{o(""),d(""),c(!1)},g=()=>{t?.blur(),p(),e.onClose()},{config:v,getEmoji:_}=je(),k=$r(),x=Rl(),E=()=>e.replyTo&&kl(e.replyTo),w=()=>e.mode??"normal",T=mi({mutationKey:["publishTextNote"],mutationFn:x.publishTextNote.bind(x),onSuccess:()=>{console.log("succeeded to post"),p(),e.onPost?.()},onError:G=>{console.error("error",G)}}),R=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},A=mi({mutationKey:["uploadFiles"],mutationFn:async G=>{const ae=await FS(HS)(G),he=[];if(ae.forEach((te,ue)=>{te.status==="fulfilled"?(h(te.value.imageUrl),R()):he.push(G[ue])}),he.length>0){const te=he.map(ue=>ue.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${te}`)}}}),B=We(()=>{const G=k();return E()?.taggedPubkeys()?.filter(ae=>ae!==G)??[]}),C=We(()=>e.replyTo==null?[]:mr([e.replyTo.pubkey,...B()])),P=G=>{const ae=[];return G.forEach(he=>{const te=_(he);te!=null&&ae.push(["emoji",he,te.url])}),ae},U=()=>{if(i().length===0||T.isLoading)return;const G=k();if(G==null){console.error("pubkey is not available");return}const ae=cm(i()),{hashtags:he,urlReferences:te,pubkeyReferences:ue,eventReferences:Ne,emojis:nt}=QS(ae),Je=YS(ae),yt=P(nt);let J={relayUrls:v().relayUrls,pubkey:G,content:Je,notifyPubkeys:ue,mentionEventIds:Ne,hashtags:he,urls:te,tags:yt};E()!=null&&(J={...J,notifyPubkeys:mr([...C(),...ue]),rootEventId:E()?.rootEvent()?.id,replyEventId:E()?.id}),a()&&(J={...J,contentWarning:u()}),T.mutate(J),g()},ee=G=>{o(G.currentTarget.value),R()},Z=G=>{G.preventDefault(),U()},Q=G=>{G.key==="Enter"&&(G.ctrlKey||G.metaKey)?U():G.key==="Escape"&&(t?.blur(),g())},q=G=>{if(G.preventDefault(),A.isLoading)return;const ae=[...G.currentTarget.files??[]];A.mutate(ae),G.currentTarget.value=""},Y=G=>{if(G.preventDefault(),A.isLoading)return;const ae=[...G?.dataTransfer?.files??[]];A.mutate(ae)},ie=G=>{if(A.isLoading)return;const ae=[...G?.clipboardData?.items??[]],he=[];ae.forEach(te=>{if(te.kind==="file"){G.preventDefault();const ue=te.getAsFile();if(ue==null)return;he.push(ue)}}),he.length!==0&&A.mutate(he)},K=G=>{G.preventDefault()},D=()=>i().trim().length===0||T.isLoading||A.isLoading,ne=()=>A.isLoading;return fn(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const G=VS(),ae=G.firstChild,he=ae.firstChild,te=he.nextSibling,ue=te.firstChild,Ne=ue.nextSibling,nt=Ne.nextSibling,Je=te.nextSibling;O(G,$(fe,{get when(){return e.replyTo!=null},get children(){const J=qS(),Xe=J.firstChild;return O(J,$(Ut,{get each(){return C()},children:(oe,Fe)=>[$(Sl,{pubkey:oe}),$(fe,{get when(){return Fe()!==C().length-1},children:" と "})]}),Xe),J}}),ae),ae.addEventListener("submit",Z),O(ae,$(fe,{get when(){return a()},get children(){const J=WS();return J.$$input=Xe=>d(Xe.currentTarget.value),Le(()=>J.value=u()),J}}),he),he.addEventListener("paste",ie),he.addEventListener("drop",Y),he.addEventListener("dragover",K),he.$$keydown=Q,he.$$input=ee,_r(J=>{t=J,e.textAreaRef?.(J)},he),O(te,$(fe,{get when(){return w()==="reply"},get children(){const J=ZS(),Xe=J.firstChild;return Xe.$$click=()=>g(),O(Xe,$(ns,{})),J}}),ue),O(te,$(Km,{customEmojis:!0,onEmojiSelect:J=>h(J),get children(){const J=KS();return O(J,$(Qm,{})),J}}),ue),ue.$$click=()=>c(J=>!J),Ne.$$click=()=>n?.click(),O(Ne,$(PS,{})),O(nt,$(jS,{})),Je.addEventListener("change",q);const yt=n;return typeof yt=="function"?_r(yt,Je):n=Je,Le(J=>{const Xe=GS(w()),oe=!a(),Fe=!!a(),ot=w()==="normal",Qe=w()==="normal",At=w()==="reply",Ke=w()==="reply",It=!!ne(),En=!ne(),dt=w()==="normal",zt=w()==="normal",er=w()==="reply",we=w()==="reply",De=ne(),at=!!D(),Et=!D(),en=w()==="normal",pe=w()==="normal",hn=w()==="reply",Oe=w()==="reply",rt=D();return Xe!==J._v$&&vt(he,"placeholder",J._v$=Xe),oe!==J._v$2&&ue.classList.toggle("bg-rose-300",J._v$2=oe),Fe!==J._v$3&&ue.classList.toggle("bg-rose-400",J._v$3=Fe),ot!==J._v$4&&ue.classList.toggle("h-8",J._v$4=ot),Qe!==J._v$5&&ue.classList.toggle("w-8",J._v$5=Qe),At!==J._v$6&&ue.classList.toggle("h-7",J._v$6=At),Ke!==J._v$7&&ue.classList.toggle("w-7",J._v$7=Ke),It!==J._v$8&&Ne.classList.toggle("bg-primary-disabled",J._v$8=It),En!==J._v$9&&Ne.classList.toggle("bg-primary",J._v$9=En),dt!==J._v$10&&Ne.classList.toggle("h-8",J._v$10=dt),zt!==J._v$11&&Ne.classList.toggle("w-8",J._v$11=zt),er!==J._v$12&&Ne.classList.toggle("h-7",J._v$12=er),we!==J._v$13&&Ne.classList.toggle("w-7",J._v$13=we),De!==J._v$14&&(Ne.disabled=J._v$14=De),at!==J._v$15&&nt.classList.toggle("bg-primary-disabled",J._v$15=at),Et!==J._v$16&&nt.classList.toggle("bg-primary",J._v$16=Et),en!==J._v$17&&nt.classList.toggle("h-8",J._v$17=en),pe!==J._v$18&&nt.classList.toggle("w-8",J._v$18=pe),hn!==J._v$19&&nt.classList.toggle("h-7",J._v$19=hn),Oe!==J._v$20&&nt.classList.toggle("w-7",J._v$20=Oe),rt!==J._v$21&&(nt.disabled=J._v$21=rt),J},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Le(()=>he.value=i()),G})()};bt(["input","keydown","click"]);const Jm=Ex(),JS=()=>Cx(Jm),XS=()=>{const[e,t]=Ki({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},eT=/\p{Emoji_Presentation}/u,tT=e=>{const t=rs(),n=We(e),i=We(()=>["useReactions",n()]),o=is(i,({queryKey:p,signal:g})=>{const[,v]=p;if(v==null)return[];const{eventId:_}=v,k=bo({type:"Reactions",mentionedEventId:_},g).then(x=>{const E=()=>x().events;return nl(x).subscribe(()=>{t.setQueryData(p,E())}),E()});return Jr(15e3,`useReactions: ${_}`)(k)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reactions:a,reactionsGroupedByContent:()=>{const p=new Map;return a().forEach(g=>{const v=p.get(g.content)??[];v.push(g),p.set(g.content,v)}),p},isReactedBy:p=>a().findIndex(g=>g.pubkey===p)!==-1,isReactedByWithEmoji:p=>a().findIndex(g=>g.pubkey===p&&eT.test(g.content))!==-1,invalidateReactions:()=>t.invalidateQueries(i()),query:o}},nT=e=>{const t=rs(),n=We(e),i=We(()=>["useReposts",n()]),o=is(i,({queryKey:d,signal:h})=>{const[,p]=d;if(p==null)return[];const{eventId:g}=p,v=bo({type:"Reposts",mentionedEventId:g},h).then(_=>{const k=()=>_().events;return nl(_).subscribe(()=>{t.setQueryData(d,k())}),k()});return Jr(15e3,`useReposts: ${g}`)(v)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reposts:a,isRepostedBy:d=>a().findIndex(h=>h.pubkey===d)!==-1,invalidateReposts:()=>t.invalidateQueries(i()),query:o}},rT=j('<div class="flex gap-2 py-1">'),iT=j('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),sT=j('<span class="ml-1 text-sm">'),oT=j('<button class="flex h-6 items-center rounded border px-1" type="button">'),aT=j('<span class="text-base">'),lT=j('<span class="text-red-500">削除'),cT=j('<img alt="icon" class="h-full w-full rounded object-cover">'),uT=j('<div class="author-name truncate pr-1 font-bold hover:underline">'),dT=j('<div class="text-xs">への返信'),fT=j('<div class="content whitespace-pre-wrap break-all">'),hT=j('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),O0=j('<div class="text-sm text-zinc-400">'),pT=j('<span class="inline-block h-4 w-4">'),gT=j('<div class="flex shrink-0 items-center gap-1">'),mT=j('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),vT=j('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),bT=j('<div class="nostr-textnote flex flex-col"><div class="flex w-full gap-1"><button class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></button><div class="created-at shrink-0"><a type="button" class="hover:underline"></a></div></div><div class="overflow-hidden">'),yT=j('<div class="mt-1 rounded border p-1">'),_T=j('<button class="pr-1 text-blue-500 hover:underline">'),{noteEncode:L0}=mo,wT=e=>{const{config:t}=je(),n=$r();return(()=>{const i=rT();return O(i,$(Ut,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const c=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=oT();return u.$$click=()=>e.onReaction(o),O(u,$(fe,{when:o==="+",get fallback(){return(()=>{const d=aT();return O(d,o),d})()},get children(){const d=iT();return O(d,$(Ed,{})),d}}),null),O(u,$(fe,{get when(){return!t().hideCount},get children(){const d=sT();return O(d,()=>a.length),d}}),null),Le(d=>Ds(u,{"text-zinc-400":!c,"hover:bg-zinc-50":!c,"bg-rose-50":c,"border-rose-200":c,"text-rose-400":c},d)),u})()}})),i})()},Xm=e=>{let t;const{config:n}=je(),i=vm(),o=$r(),{showProfile:a}=Xr(),c=JS(),[u,d]=$e(!1),[h,p]=$e(!1),[g,v]=$e(!1),_=()=>v(!1),[k,x]=$e(!1),[E,w]=$e(!1),T=We(()=>kl(e.event)),R=()=>e.embedding??!0,A=()=>e.actions??!0,{profile:B}=hs(()=>({pubkey:e.event.pubkey})),{reactions:C,reactionsGroupedByContent:P,isReactedBy:U,isReactedByWithEmoji:ee,invalidateReactions:Z,query:Q}=tT(()=>({eventId:e.event.id})),{reposts:q,isRepostedBy:Y,invalidateReposts:ie,query:K}=nT(()=>({eventId:e.event.id})),D=Rl(),ne=mi({mutationKey:["publishReaction",T().id],mutationFn:D.publishReaction.bind(D),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:oe=>{console.error("failed to publish reaction: ",oe)},onSettled:()=>{Z().then(()=>Q.refetch()).catch(oe=>console.error("failed to refetch reactions",oe))}}),G=mi({mutationKey:["publishRepost",T().id],mutationFn:D.publishRepost.bind(D),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:oe=>{console.error("failed to publish repost: ",oe)},onSettled:()=>{ie().then(()=>K.refetch()).catch(oe=>console.error("failed to refetch reposts",oe))}}),ae=mi({mutationKey:["deleteEvent",T().id],mutationFn:(...oe)=>D.deleteEvent(...oe).then(Fe=>Promise.allSettled(Fe.map(Jr(1e4)))),onSuccess:oe=>{const Fe=oe.filter(Qe=>Qe.status==="fulfilled").length,ot=oe.length-Fe;Fe===oe.length?window.alert("削除しました（画面の反映にはリロード）"):Fe>0?window.alert(`${ot}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:oe=>{console.error("failed to delete",oe)}}),he=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(L0(e.event.id)).catch(oe=>window.alert(oe))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event,null,2)).catch(oe=>window.alert(oe))}},{when:()=>T().pubkey===o(),content:()=>lT(),onSelect:()=>{const oe=o();oe!=null&&window.confirm("本当に削除しますか？")&&ae.mutate({relayUrls:n().relayUrls,pubkey:oe,eventId:T().id})}}],te=We(()=>{const oe=o();return oe!=null&&U(oe)||u()}),ue=We(()=>{const oe=o();return oe!=null&&ee(oe)}),Ne=We(()=>{const oe=o();return oe!=null&&Y(oe)||h()}),nt=()=>{if(R()){const oe=T().replyingToEvent();if(oe!=null&&!T().containsEventMention(oe.id))return oe.id;const Fe=T().rootEvent();if(oe==null&&Fe!=null&&!T().containsEventMention(Fe.id))return Fe.id}},Je=()=>i(T().createdAtAsDate()),yt=oe=>{oe.stopPropagation(),!Ne()&&dn([o(),e.event.id])(([Fe,ot])=>{G.mutate({relayUrls:n().relayUrls,pubkey:Fe,eventId:ot,notifyPubkey:e.event.pubkey}),p(!0)})},J=oe=>{te()||dn([o(),e.event.id])(([Fe,ot])=>{ne.mutate({relayUrls:n().relayUrls,pubkey:Fe,content:oe??"+",eventId:ot,notifyPubkey:e.event.pubkey}),d(!0)})},Xe=oe=>{oe.stopPropagation(),J()};return fn(()=>{t!=null&&w(t.scrollHeight>t.clientHeight)}),(()=>{const oe=bT(),Fe=oe.firstChild,ot=Fe.firstChild,Qe=ot.nextSibling,At=Qe.firstChild,Ke=At.firstChild,It=Ke.firstChild,En=Ke.nextSibling,dt=En.firstChild,zt=At.nextSibling;ot.$$click=we=>{we.stopPropagation(),a(T().pubkey)},O(ot,$(fe,{get when(){return B()?.picture},get children(){const we=cT();return Le(()=>vt(we,"src",B()?.picture)),we}})),Ke.$$click=we=>{we.stopPropagation(),a(T().pubkey)},O(Ke,$(fe,{get when(){return(B()?.display_name?.length??0)>0},get children(){const we=uT();return O(we,()=>B()?.display_name),we}}),It),O(It,$(fe,{get when(){return B()?.name!=null},get fallback(){return`@${Cl(T().pubkey)}`},get children(){return["@",We(()=>B()?.name)]}})),dt.$$click=we=>{we.preventDefault(),c?.setTimeline({type:"Replies",event:e.event})},O(dt,Je);const er=t;return typeof er=="function"?_r(er,zt):t=zt,O(zt,$(fe,{get when(){return nt()},keyed:!0,children:we=>(()=>{const De=yT();return O(De,$(ao,{eventId:we,actions:!1,embedding:!1})),De})()}),null),O(zt,$(fe,{get when(){return T().taggedPubkeys().length>0},get children(){const we=dT(),De=we.firstChild;return O(we,$(Ut,{get each(){return T().taggedPubkeys()},children:at=>(()=>{const Et=_T();return Et.$$click=en=>{en.stopPropagation(),a(at)},O(Et,$(Vm,{pubkey:at})),Et})()}),De),we}}),null),O(zt,$(gS,{get contentWarning(){return T().contentWarning()},get children(){const we=fT();return O(we,$(RS,{get event(){return e.event},get embedding(){return R()}})),we}}),null),O(Qe,$(fe,{get when(){return E()},get children(){const we=hT();return we.$$click=De=>{De.stopPropagation(),x(at=>!at)},O(we,$(fe,{get when(){return!k()},fallback:"隠す",children:"続きを読む"})),we}}),null),O(Qe,$(fe,{get when(){return A()},get children(){return[$(fe,{get when(){return We(()=>!!n().showEmojiReaction)()&&C().length>0},get children(){return $(wT,{get reactionsGroupedByContent(){return P()},onReaction:J})}}),(()=>{const we=vT(),De=we.firstChild,at=De.nextSibling,Et=at.firstChild,en=at.nextSibling,pe=en.firstChild,hn=en.nextSibling;return De.$$click=Oe=>{Oe.stopPropagation(),v(rt=>!rt)},O(De,$(gC,{})),Et.$$click=yt,O(Et,$(K1,{})),O(at,$(fe,{get when(){return We(()=>!n().hideCount)()&&q().length>0},get children(){const Oe=O0();return O(Oe,()=>q().length),Oe}}),null),pe.$$click=Xe,O(pe,$(fe,{get when(){return We(()=>!!te())()&&!ue()},get fallback(){return $(kd,{})},get children(){return $(Ed,{})}})),O(en,$(fe,{get when(){return We(()=>!n().hideCount&&!n().showEmojiReaction)()&&C().length>0},get children(){const Oe=O0();return O(Oe,()=>C().length),Oe}}),null),O(we,$(fe,{get when(){return n().useEmojiReaction},get children(){const Oe=gT();return O(Oe,$(Km,{onEmojiSelect:rt=>J(rt),get children(){const rt=pT();return O(rt,$(_m,{})),rt}})),Le(rt=>Ds(Oe,{"text-zinc-400":!te()||!ue(),"hover:text-rose-400":!te()||!ue(),"text-rose-400":te()&&ue()||ne.isLoading},rt)),Oe}}),hn),O(hn,$(wm,{menu:he,get children(){const Oe=mT();return O(Oe,$(ym,{})),Oe}})),Le(Oe=>{const rt={"text-zinc-400":!Ne(),"hover:text-green-400":!Ne(),"text-green-400":Ne()||G.isLoading},Cn=G.isLoading,Sn={"text-zinc-400":!te()||ue(),"hover:text-rose-400":!te()||ue(),"text-rose-400":te()&&!ue()||ne.isLoading},pn=ne.isLoading;return Oe._v$=Ds(at,rt,Oe._v$),Cn!==Oe._v$2&&(Et.disabled=Oe._v$2=Cn),Oe._v$3=Ds(en,Sn,Oe._v$3),pn!==Oe._v$4&&(pe.disabled=Oe._v$4=pn),Oe},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),we})()]}}),null),O(oe,$(fe,{get when(){return g()},get children(){return $(Ym,{mode:"reply",get replyTo(){return e.event},onClose:_,onPost:_})}}),null),Le(we=>{const De=`nostr:${L0(T().id)}`,at=!k();return De!==we._v$5&&vt(dt,"href",we._v$5=De),at!==we._v$6&&zt.classList.toggle("max-h-screen",we._v$6=at),we},{_v$5:void 0,_v$6:void 0}),oe})()};bt(["click"]);const ev=e=>{const{shouldMuteEvent:t}=je();return $(fe,{get when(){return!t(e.event)},get children(){return $(Xm,e)}})},xT=j("<span>予期しないイベント種別（<!>）"),$T=j("<span><span>未対応のイベント種別（<!>）"),tv=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return $(Mn,{get fallback(){return(()=>{const n=$T(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,O(i,()=>e.event.kind,a),O(n,$(Vs,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[$(ze,{get when(){return!t()},keyed:!0,get children(){const n=xT(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,O(n,()=>e.event.kind,o),O(n,$(Vs,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),$(ze,{get when(){return e.event.kind===ht.Text},get children(){return $(ev,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),$(ze,{get when(){return e.event.kind===6},get children(){return $(bm,{get event(){return e.event}})}})]}})},ps=e=>{const{shouldMuteEvent:t}=je();return $(Ut,{get each(){return e.events},children:n=>$(fe,{get when(){return!t(n)},get children(){return $(wa,{get children(){return $(tv,{event:n})}})}})})};var kT=ol;function ET(){this.__data__=new kT,this.size=0}var CT=ET;function ST(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var TT=ST;function AT(e){return this.__data__.get(e)}var IT=AT;function RT(e){return this.__data__.has(e)}var OT=RT,LT=ol,PT=Ju,BT=Xu,MT=200;function jT(e,t){var n=this.__data__;if(n instanceof LT){var i=n.__data__;if(!PT||i.length<MT-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new BT(i)}return n.set(e,t),this.size=n.size,this}var UT=jT,NT=ol,DT=CT,zT=TT,HT=IT,FT=OT,qT=UT;function gs(e){var t=this.__data__=new NT(e);this.size=t.size}gs.prototype.clear=DT;gs.prototype.delete=zT;gs.prototype.get=HT;gs.prototype.has=FT;gs.prototype.set=qT;var Id=gs;function WT(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var ZT=WT,KT=Lg,VT=ZT,GT=Pg,QT=1,YT=2;function JT(e,t,n,i,o,a){var c=n&QT,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var h=a.get(e),p=a.get(t);if(h&&p)return h==t&&p==e;var g=-1,v=!0,_=n&YT?new KT:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var k=e[g],x=t[g];if(i)var E=c?i(x,k,g,t,e,a):i(k,x,g,e,t,a);if(E!==void 0){if(E)continue;v=!1;break}if(_){if(!VT(t,function(w,T){if(!GT(_,T)&&(k===w||o(k,w,n,i,a)))return _.push(T)})){v=!1;break}}else if(!(k===x||o(k,x,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var nv=JT,XT=Dn,eA=XT.Uint8Array,rv=eA;function tA(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var nA=tA,P0=ss,B0=rv,rA=Yu,iA=nv,sA=nA,oA=ed,aA=1,lA=2,cA="[object Boolean]",uA="[object Date]",dA="[object Error]",fA="[object Map]",hA="[object Number]",pA="[object RegExp]",gA="[object Set]",mA="[object String]",vA="[object Symbol]",bA="[object ArrayBuffer]",yA="[object DataView]",M0=P0?P0.prototype:void 0,fu=M0?M0.valueOf:void 0;function _A(e,t,n,i,o,a,c){switch(n){case yA:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case bA:return!(e.byteLength!=t.byteLength||!a(new B0(e),new B0(t)));case cA:case uA:case hA:return rA(+e,+t);case dA:return e.name==t.name&&e.message==t.message;case pA:case mA:return e==t+"";case fA:var u=sA;case gA:var d=i&aA;if(u||(u=oA),e.size!=t.size&&!d)return!1;var h=c.get(e);if(h)return h==t;i|=lA,c.set(e,t);var p=iA(u(e),u(t),i,o,a,c);return c.delete(e),p;case vA:if(fu)return fu.call(e)==fu.call(t)}return!1}var wA=_A;function xA(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Rd=xA,$A=Array.isArray,Xn=$A,kA=Rd,EA=Xn;function CA(e,t,n){var i=t(e);return EA(e)?i:kA(i,n(e))}var iv=CA;function SA(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var c=e[n];t(c,n,e)&&(a[o++]=c)}return a}var TA=SA;function AA(){return[]}var sv=AA,IA=TA,RA=sv,OA=Object.prototype,LA=OA.propertyIsEnumerable,j0=Object.getOwnPropertySymbols,PA=j0?function(e){return e==null?[]:(e=Object(e),IA(j0(e),function(t){return LA.call(e,t)}))}:RA,Od=PA;function BA(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var MA=BA;function jA(e){return e!=null&&typeof e=="object"}var ei=jA,UA=os,NA=ei,DA="[object Arguments]";function zA(e){return NA(e)&&UA(e)==DA}var HA=zA,U0=HA,FA=ei,ov=Object.prototype,qA=ov.hasOwnProperty,WA=ov.propertyIsEnumerable,ZA=U0(function(){return arguments}())?U0:function(e){return FA(e)&&qA.call(e,"callee")&&!WA.call(e,"callee")},Ld=ZA,Ja={exports:{}};function KA(){return!1}var VA=KA;Ja.exports;(function(e,t){var n=Dn,i=VA,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,c=a&&a.exports===o,u=c?n.Buffer:void 0,d=u?u.isBuffer:void 0,h=d||i;e.exports=h})(Ja,Ja.exports);var Pd=Ja.exports,GA=9007199254740991,QA=/^(?:0|[1-9]\d*)$/;function YA(e,t){var n=typeof e;return t=t??GA,!!t&&(n=="number"||n!="symbol"&&QA.test(e))&&e>-1&&e%1==0&&e<t}var Bd=YA,JA=9007199254740991;function XA(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=JA}var Md=XA,eI=os,tI=Md,nI=ei,rI="[object Arguments]",iI="[object Array]",sI="[object Boolean]",oI="[object Date]",aI="[object Error]",lI="[object Function]",cI="[object Map]",uI="[object Number]",dI="[object Object]",fI="[object RegExp]",hI="[object Set]",pI="[object String]",gI="[object WeakMap]",mI="[object ArrayBuffer]",vI="[object DataView]",bI="[object Float32Array]",yI="[object Float64Array]",_I="[object Int8Array]",wI="[object Int16Array]",xI="[object Int32Array]",$I="[object Uint8Array]",kI="[object Uint8ClampedArray]",EI="[object Uint16Array]",CI="[object Uint32Array]",st={};st[bI]=st[yI]=st[_I]=st[wI]=st[xI]=st[$I]=st[kI]=st[EI]=st[CI]=!0;st[rI]=st[iI]=st[mI]=st[sI]=st[vI]=st[oI]=st[aI]=st[lI]=st[cI]=st[uI]=st[dI]=st[fI]=st[hI]=st[pI]=st[gI]=!1;function SI(e){return nI(e)&&tI(e.length)&&!!st[eI(e)]}var TI=SI;function AI(e){return function(t){return e(t)}}var jd=AI,Xa={exports:{}};Xa.exports;(function(e,t){var n=Ag,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||c&&c.binding&&c.binding("util")}catch{}}();e.exports=u})(Xa,Xa.exports);var Ud=Xa.exports,II=TI,RI=jd,N0=Ud,D0=N0&&N0.isTypedArray,OI=D0?RI(D0):II,av=OI,LI=MA,PI=Ld,BI=Xn,MI=Pd,jI=Bd,UI=av,NI=Object.prototype,DI=NI.hasOwnProperty;function zI(e,t){var n=BI(e),i=!n&&PI(e),o=!n&&!i&&MI(e),a=!n&&!i&&!o&&UI(e),c=n||i||o||a,u=c?LI(e.length,String):[],d=u.length;for(var h in e)(t||DI.call(e,h))&&!(c&&(h=="length"||o&&(h=="offset"||h=="parent")||a&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||jI(h,d)))&&u.push(h);return u}var lv=zI,HI=Object.prototype;function FI(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||HI;return e===n}var Nd=FI;function qI(e,t){return function(n){return e(t(n))}}var cv=qI,WI=cv,ZI=WI(Object.keys,Object),KI=ZI,VI=Nd,GI=KI,QI=Object.prototype,YI=QI.hasOwnProperty;function JI(e){if(!VI(e))return GI(e);var t=[];for(var n in Object(e))YI.call(e,n)&&n!="constructor"&&t.push(n);return t}var XI=JI,eR=Rg,tR=Md;function nR(e){return e!=null&&tR(e.length)&&!eR(e)}var uv=nR,rR=lv,iR=XI,sR=uv;function oR(e){return sR(e)?rR(e):iR(e)}var Ol=oR,aR=iv,lR=Od,cR=Ol;function uR(e){return aR(e,cR,lR)}var dv=uR,z0=dv,dR=1,fR=Object.prototype,hR=fR.hasOwnProperty;function pR(e,t,n,i,o,a){var c=n&dR,u=z0(e),d=u.length,h=z0(t),p=h.length;if(d!=p&&!c)return!1;for(var g=d;g--;){var v=u[g];if(!(c?v in t:hR.call(t,v)))return!1}var _=a.get(e),k=a.get(t);if(_&&k)return _==t&&k==e;var x=!0;a.set(e,t),a.set(t,e);for(var E=c;++g<d;){v=u[g];var w=e[v],T=t[v];if(i)var R=c?i(T,w,v,t,e,a):i(w,T,v,e,t,a);if(!(R===void 0?w===T||o(w,T,n,i,a):R)){x=!1;break}E||(E=v=="constructor")}if(x&&!E){var A=e.constructor,B=t.constructor;A!=B&&"constructor"in e&&"constructor"in t&&!(typeof A=="function"&&A instanceof A&&typeof B=="function"&&B instanceof B)&&(x=!1)}return a.delete(e),a.delete(t),x}var gR=pR,mR=xi,vR=Dn,bR=mR(vR,"DataView"),yR=bR,_R=xi,wR=Dn,xR=_R(wR,"Promise"),$R=xR,kR=xi,ER=Dn,CR=kR(ER,"WeakMap"),SR=CR,Du=yR,zu=Ju,Hu=$R,Fu=Bg,qu=SR,fv=os,ms=Og,H0="[object Map]",TR="[object Object]",F0="[object Promise]",q0="[object Set]",W0="[object WeakMap]",Z0="[object DataView]",AR=ms(Du),IR=ms(zu),RR=ms(Hu),OR=ms(Fu),LR=ms(qu),ui=fv;(Du&&ui(new Du(new ArrayBuffer(1)))!=Z0||zu&&ui(new zu)!=H0||Hu&&ui(Hu.resolve())!=F0||Fu&&ui(new Fu)!=q0||qu&&ui(new qu)!=W0)&&(ui=function(e){var t=fv(e),n=t==TR?e.constructor:void 0,i=n?ms(n):"";if(i)switch(i){case AR:return Z0;case IR:return H0;case RR:return F0;case OR:return q0;case LR:return W0}return t});var Ll=ui,hu=Id,PR=nv,BR=wA,MR=gR,K0=Ll,V0=Xn,G0=Pd,jR=av,UR=1,Q0="[object Arguments]",Y0="[object Array]",_a="[object Object]",NR=Object.prototype,J0=NR.hasOwnProperty;function DR(e,t,n,i,o,a){var c=V0(e),u=V0(t),d=c?Y0:K0(e),h=u?Y0:K0(t);d=d==Q0?_a:d,h=h==Q0?_a:h;var p=d==_a,g=h==_a,v=d==h;if(v&&G0(e)){if(!G0(t))return!1;c=!0,p=!1}if(v&&!p)return a||(a=new hu),c||jR(e)?PR(e,t,n,i,o,a):BR(e,t,d,n,i,o,a);if(!(n&UR)){var _=p&&J0.call(e,"__wrapped__"),k=g&&J0.call(t,"__wrapped__");if(_||k){var x=_?e.value():e,E=k?t.value():t;return a||(a=new hu),o(x,E,n,i,a)}}return v?(a||(a=new hu),MR(e,t,n,i,o,a)):!1}var zR=DR,HR=zR,X0=ei;function hv(e,t,n,i,o){return e===t?!0:e==null||t==null||!X0(e)&&!X0(t)?e!==e&&t!==t:HR(e,t,n,i,hv,o)}var pv=hv,FR=Id,qR=pv,WR=1,ZR=2;function KR(e,t,n,i){var o=n.length,a=o,c=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],h=e[d],p=u[1];if(c&&u[2]){if(h===void 0&&!(d in e))return!1}else{var g=new FR;if(i)var v=i(h,p,d,e,t,g);if(!(v===void 0?qR(p,h,WR|ZR,i,g):v))return!1}}return!0}var VR=KR,GR=Qn;function QR(e){return e===e&&!GR(e)}var gv=QR,YR=gv,JR=Ol;function XR(e){for(var t=JR(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,YR(o)]}return t}var eO=XR;function tO(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var mv=tO,nO=VR,rO=eO,iO=mv;function sO(e){var t=rO(e);return t.length==1&&t[0][2]?iO(t[0][0],t[0][1]):function(n){return n===e||nO(n,e,t)}}var oO=sO,aO=os,lO=ei,cO="[object Symbol]";function uO(e){return typeof e=="symbol"||lO(e)&&aO(e)==cO}var Pl=uO,dO=Xn,fO=Pl,hO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pO=/^\w*$/;function gO(e,t){if(dO(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||fO(e)?!0:pO.test(e)||!hO.test(e)||t!=null&&e in Object(t)}var Dd=gO,vv=Xu,mO="Expected a function";function zd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(mO);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var c=e.apply(this,i);return n.cache=a.set(o,c)||a,c};return n.cache=new(zd.Cache||vv),n}zd.Cache=vv;var vO=zd,bO=vO,yO=500;function _O(e){var t=bO(e,function(i){return n.size===yO&&n.clear(),i}),n=t.cache;return t}var wO=_O,xO=wO,$O=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kO=/\\(\\)?/g,EO=xO(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace($O,function(n,i,o,a){t.push(o?a.replace(kO,"$1"):i||n)}),t}),CO=EO;function SO(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Hd=SO,eg=ss,TO=Hd,AO=Xn,IO=Pl,RO=1/0,tg=eg?eg.prototype:void 0,ng=tg?tg.toString:void 0;function bv(e){if(typeof e=="string")return e;if(AO(e))return TO(e,bv)+"";if(IO(e))return ng?ng.call(e):"";var t=e+"";return t=="0"&&1/e==-RO?"-0":t}var OO=bv,LO=OO;function PO(e){return e==null?"":LO(e)}var BO=PO,MO=Xn,jO=Dd,UO=CO,NO=BO;function DO(e,t){return MO(e)?e:jO(e,t)?[e]:UO(NO(e))}var vs=DO,zO=Pl,HO=1/0;function FO(e){if(typeof e=="string"||zO(e))return e;var t=e+"";return t=="0"&&1/e==-HO?"-0":t}var bs=FO,qO=vs,WO=bs;function ZO(e,t){t=qO(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[WO(t[n++])];return n&&n==i?e:void 0}var Bl=ZO,KO=Bl;function VO(e,t,n){var i=e==null?void 0:KO(e,t);return i===void 0?n:i}var GO=VO;function QO(e,t){return e!=null&&t in Object(e)}var YO=QO,JO=vs,XO=Ld,eL=Xn,tL=Bd,nL=Md,rL=bs;function iL(e,t,n){t=JO(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var c=rL(t[i]);if(!(a=e!=null&&n(e,c)))break;e=e[c]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&nL(o)&&tL(c,o)&&(eL(e)||XO(e)))}var sL=iL,oL=YO,aL=sL;function lL(e,t){return e!=null&&aL(e,t,oL)}var cL=lL,uL=pv,dL=GO,fL=cL,hL=Dd,pL=gv,gL=mv,mL=bs,vL=1,bL=2;function yL(e,t){return hL(e)&&pL(t)?gL(mL(e),t):function(n){var i=dL(n,e);return i===void 0&&i===t?fL(n,e):uL(t,i,vL|bL)}}var _L=yL;function wL(e){return e}var yv=wL;function xL(e){return function(t){return t?.[e]}}var $L=xL,kL=Bl;function EL(e){return function(t){return kL(t,e)}}var CL=EL,SL=$L,TL=CL,AL=Dd,IL=bs;function RL(e){return AL(e)?SL(IL(e)):TL(e)}var OL=RL,LL=oO,PL=_L,BL=yv,ML=Xn,jL=OL;function UL(e){return typeof e=="function"?e:e==null?BL:typeof e=="object"?ML(e)?PL(e[0],e[1]):LL(e):jL(e)}var Fd=UL,NL=Fd,DL=Mg;function zL(e,t){return e&&e.length?DL(e,NL(t)):[]}var HL=zL;const _v=lo(HL),pu=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Ca=0;const{setActiveSubscriptions:FL}=fm();setInterval(()=>{FL(Ca)},1e3);const kr=e=>{const{config:t,shouldMuteEvent:n}=je(),i=El(),[o,a]=$e([]);gr(tl(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(h=>!n(h)))},{defer:!0})),fn(()=>{console.debug("subscription mounted",e()?.debugId,e()),yr(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const c=d=>{const h=e()?.limit??50;a(p=>{const g=pu([d,...p].slice(0,h)),v=_v(g,_=>_.id);return v.length!==g.length&&console.warn("duplicated event",d),v})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:h,filters:p,options:g,onEvent:v,onEOSE:_,continuous:k=!0}=d,x=i().sub(h,p,g);let E=!0;Ca+=1;let w=!1,T=!1;const R=[];x.on("event",C=>{v?.(C),!(d.clientEventFilter!=null&&!d.clientEventFilter(C))&&(T?c(C):(w=!0,R.push(C)))}),x.on("eose",()=>{_?.(),T=!0,a(pu(R)),k||(x.unsub(),E&&(E=!1,Ca-=1))});let A=!1;const B=setInterval(()=>{if(!A){if(A=!0,T){clearInterval(B),A=!1;return}w&&(w=!1,a(pu(R))),A=!1}},100);yr(()=>{console.debug("startSubscription: end"),x.unsub(),E&&(E=!1,Ca-=1),clearInterval(B)})};return gr(()=>{u()}),{events:o}},qL=e=>{const t=[e.id],n=e.rootEvent()?.id;n!=null&&t.push(n);const i=e.replyingToEvent()?.id;return i!=null&&t.push(i),mr(t)},WL=e=>{const{config:t}=je(),n=()=>kl(e.event),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:qL(n()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return $(ps,{get events(){return[...i()].reverse()}})},ZL=e=>$(Mn,{get children(){return $(ze,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>$(WL,{get event(){return t.event}})})}}),KL=j('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),VL=j('<div class="shrink-0 border-b">'),GL=j('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),QL=j('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth">'),ys=e=>{let t;const n=XS(),i=()=>e.width??"medium";return Nu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Nu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),$(Jm.Provider,{value:n,get children(){const o=KL(),a=t;return typeof a=="function"?_r(a,o):t=o,O(o,$(fe,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=VL();return O(c,()=>e.header),c})(),(()=>{const c=GL();return O(c,()=>e.children),c})()]},children:c=>(()=>{const u=QL(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=d.nextSibling;return h.$$click=()=>n?.clearTimeline(),O(p,$(Qu,{})),O(g,$(ZL,{timelineContent:c})),u})()})),Le(c=>Ds(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},c)),o}})};bt(["click"]);const YL=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),JL=(e={})=>(()=>{const t=YL();return Ge(t,e,!0,!0),t})(),XL=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),eP=(e={})=>(()=>{const t=XL();return Ge(t,e,!0,!0),t})(),tP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),nP=(e={})=>(()=>{const t=tP();return Ge(t,e,!0,!0),t})(),rP=j('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),iP=j('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),sP=j('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),oP=e=>(()=>{const t=rP(),n=t.firstChild,i=n.nextSibling;return O(n,()=>e.title),O(i,()=>e.children),t})(),_s=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=je(),o=yo(),a=u=>{t({...e.column,width:u})},c=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=sP(),d=u.firstChild,h=d.firstChild,p=h.firstChild,g=h.nextSibling,v=g.firstChild,_=g.nextSibling,k=_.nextSibling,x=k.firstChild;return O(u,$(oP,{title:"カラム幅",get children(){const E=iP(),w=E.firstChild,T=w.nextSibling,R=T.nextSibling,A=R.nextSibling;return w.$$click=()=>a("widest"),T.$$click=()=>a("wide"),R.$$click=()=>a("medium"),A.$$click=()=>a("narrow"),E}}),d),h.$$click=()=>c(e.columnIndex-1),O(p,$(JL,{})),g.$$click=()=>c(e.columnIndex+1),O(v,$(eP,{})),k.$$click=()=>n(e.column.id),O(x,$(nP,{})),u})()};bt(["click"]);const br=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>br(n)(t));case"OR":return e.children.some(n=>br(n)(t));case"NOT":return!br(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},Wu=e=>{const t=rs(),n=We(e),i=()=>["useFollowings",n()],o=is(i,({queryKey:d,signal:h})=>{console.debug("useFollowings");const[,p]=d;if(p==null)return Promise.resolve(null);const{pubkey:g}=p,v=bo({type:"Followings",pubkey:g},h).then(_=>{const k=()=>{const x=hm(_().events);if(x==null)throw new Error(`followings not found: ${g}`);return x};return nl(_).subscribe(()=>{try{t.setQueryData(d,k())}catch(x){console.error("error occurred while updating followings cache: ",x)}}),k()});return Jr(15e3,`useFollowings: ${g}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return Hr(o.data).pTags().forEach(p=>{const[,g,v,_]=p,k={pubkey:g,petname:_};v!=null&&v.length>0&&(k.mainRelayUrl=v),d.push(k)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},aP=e=>{const{config:t,removeColumn:n}=je(),{followingPubkeys:i}=Wu(()=>({pubkey:e.column.pubkey})),{events:o}=kr(()=>{const a=Nx.uniq([...i()]);return a.length===0?null:{debugId:"following",relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:fr()-4*60*60}],clientEventFilter:c=>e.column.contentFilter==null?!0:br(e.column.contentFilter)(c.content)}});return gr(()=>{console.log("home",o())}),fn(()=>console.log("home timeline mounted")),yr(()=>console.log("home timeline unmounted")),$(ys,{get header(){return $(co,{get name(){return e.column.name??"ホーム"},get icon(){return $(Sg,{})},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ps,{get events(){return o()}})}})},lP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),wv=(e={})=>(()=>{const t=lP();return Ge(t,e,!0,!0),t})(),cP=j('<span class="h-4 w-4 pt-[1px] text-rose-400">'),uP=j('<img alt="icon" class="rounded">'),dP=j('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),fP=j('<div class="notification-event py-1">'),hP=j('<div class="truncate">読み込み中 '),pP=e=>{const{shouldMuteEvent:t}=je(),{showProfile:n}=Xr(),i=()=>Hr(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=hs(()=>({pubkey:e.event.pubkey})),{event:c,query:u}=pm(()=>dn([o()])(([h])=>({eventId:h}))),d=()=>u.isSuccess&&c()==null;return $(fe,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const h=dP(),p=h.firstChild,g=p.nextSibling,v=g.firstChild,_=v.nextSibling,k=_.firstChild;return O(p,$(Mn,{get fallback(){return e.event.content},get children(){return $(ze,{get when(){return e.event.content==="+"},get children(){const x=cP();return O(x,$(Ed,{})),x}})}})),O(v,$(fe,{get when(){return a()?.picture!=null},get children(){const x=uP();return Le(()=>vt(x,"src",a()?.picture)),x}})),k.$$click=()=>n(e.event.pubkey),O(k,$(Sl,{get pubkey(){return e.event.pubkey}})),h})(),(()=>{const h=fP();return O(h,$(fe,{get when(){return c()},get fallback(){return(()=>{const p=hP();return p.firstChild,O(p,o,null),p})()},keyed:!0,children:p=>$(Xm,{event:p})})),h})()]}})};bt(["click"]);const gP=j("<div>unknown event"),xv=e=>{const{shouldMuteEvent:t}=je();return $(Ut,{get each(){return e.events},children:n=>$(fe,{get when(){return!t(n)},get children(){return $(Mn,{get fallback(){return gP()},get children(){return[$(ze,{get when(){return n.kind===ht.Text},get children(){return $(wa,{get children(){return $(ev,{event:n})}})}}),$(ze,{get when(){return n.kind===ht.Reaction},get children(){return $(wa,{get children(){return $(pP,{event:n})}})}}),$(ze,{get when(){return n.kind===6},get children(){return $(wa,{get children(){return $(bm,{event:n})}})}})]}})}})})},mP=e=>{const{config:t,removeColumn:n}=je(),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:br(e.column.contentFilter)(o.content)}));return $(ys,{get header(){return $(co,{get name(){return e.column.name??"通知"},get icon(){return $(wv,{})},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(xv,{get events(){return i()}})}})},vP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),qd=(e={})=>(()=>{const t=vP();return Ge(t,e,!0,!0),t})(),bP=e=>{const{config:t,removeColumn:n}=je(),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:br(e.column.contentFilter)(o.content)}));return $(ys,{get header(){return $(co,{get name(){return e.column.name??"投稿"},get icon(){return $(qd,{})},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ps,{get events(){return i()}})}})},yP=e=>{const{config:t,removeColumn:n}=je(),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:br(e.column.contentFilter)(o.content)}));return $(ys,{get header(){return $(co,{get name(){return e.column.name??"リアクション"},get icon(){return $(kd,{})},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(xv,{get events(){return i()}})}})},_P=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Wd=(e={})=>(()=>{const t=_P();return Ge(t,e,!0,!0),t})(),wP=e=>{const{removeColumn:t}=je(),{events:n}=kr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:fr()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:br(e.column.contentFilter)(i.content)}));return $(ys,{get header(){return $(co,{get name(){return e.column.name??"リレー"},get icon(){return $(Wd,{})},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ps,{get events(){return n()}})}})},xP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),$v=(e={})=>(()=>{const t=xP();return Ge(t,e,!0,!0),t})(),$P=j('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),kP=e=>{const[t,n]=$e(!1),[i,o]=$e(""),{saveColumn:a}=je(),c=()=>n(g=>!g),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},h=g=>{o(g.currentTarget.value)},p=g=>{g.preventDefault(),u()};return fn(()=>{o(e.column.query)}),(()=>{const g=$P(),v=g.firstChild,_=v.firstChild,k=_.firstChild,x=_.nextSibling,E=x.firstChild,w=x.nextSibling;return O(k,$($v,{})),x.addEventListener("submit",p),E.addEventListener("blur",d),E.addEventListener("change",h),w.$$click=()=>c(),O(w,$(Tg,{})),O(g,$(fe,{get when(){return t()},get children(){return e.settings()}}),null),Le(()=>E.value=i()),g})()},EP=e=>{const{removeColumn:t}=je(),{events:n}=kr(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:Sk,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:br(e.column.contentFilter)(o.content)}});return $(ys,{get header(){return $(kP,{get column(){return e.column},settings:()=>$(_s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(ps,{get events(){return n()}})}})};bt(["click"]);const CP=j('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),SP=()=>{const{config:e}=je();return(()=>{const t=CP();return O(t,$(Ut,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return $(Mn,{get children(){return[$(ze,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:c=>$(aP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:c=>$(mP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:c=>$(bP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:c=>$(yP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:c=>$(wP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(ze,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:c=>$(EP,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},TP=j('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),AP=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=TP();i.$$click=n;const o=t;return typeof o=="function"?_r(o,i):t=i,O(i,()=>e.children),i})()};bt(["click"]);const IP=j('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),_o=e=>$(AP,{onClose:()=>e.onClose?.(),get children(){const t=IP(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),O(i,$(fe,{get when(){return e?.closeButton},get fallback(){return $(ns,{})},keyed:!0,children:a=>a()})),O(o,()=>e.children),t}});bt(["click"]);const RP=j('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),OP=j('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),LP=j('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),PP=async()=>{const t=await(await fetch(Vu("packageInfo.json"))).text();return JSON.parse(t)},BP=e=>{const[t]=Eg(PP);return $(_o,{get onClose(){return e.onClose},get children(){const n=RP(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;u.firstChild;const d=i.nextSibling,h=d.nextSibling,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,_=v.nextSibling;_.nextSibling;const k=g.nextSibling,x=k.nextSibling,E=x.nextSibling,w=E.nextSibling,T=w.nextSibling,R=T.nextSibling,A=R.nextSibling;return A.nextSibling,O(u,()=>t()?.self?.version,null),O(g,$(Il,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),_),O(A,()=>t()?.self.licenseText),O(n,$(Ut,{get each(){return t()?.packages??[]},fallback:"取得中",children:B=>[(()=>{const C=OP(),P=C.firstChild,U=P.nextSibling,ee=U.nextSibling,Z=ee.nextSibling;return Z.nextSibling,O(C,()=>B.name,P),O(C,()=>B.version,U),O(C,()=>B.licenseSpdx,Z),C})(),(()=>{const C=LP();return O(C,()=>B.licenseText),C})()]}),null),Le(()=>vt(o,"src",Vu("images/rabbit_app_256.png"))),n}})},MP=j('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),jP=e=>{const t=$r(),{saveColumn:n}=je(),i=yo(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(g=>console.error(g))},a=()=>{dn([t()])(([g])=>{n(G1({pubkey:g}))}),o()},c=()=>{dn([t()])(([g])=>{n(Q1({pubkey:g}))}),o()},u=()=>{n(Y1()),o()},d=()=>{n($d({query:""})),o()},h=()=>{dn([t()])(([g])=>{n(J1({pubkey:g}))}),o()},p=()=>{dn([t()])(([g])=>{n(X1({pubkey:g}))}),o()};return $(_o,{get onClose(){return e.onClose},get children(){const g=MP(),v=g.firstChild,_=v.firstChild,k=v.nextSibling,x=k.firstChild,E=k.nextSibling,w=E.firstChild,T=E.nextSibling,R=T.firstChild,A=T.nextSibling,B=A.firstChild,C=A.nextSibling,P=C.firstChild;return v.$$click=()=>a(),O(_,$(Sg,{})),k.$$click=()=>c(),O(x,$(wv,{})),E.$$click=()=>u(),O(w,$(Wd,{})),T.$$click=()=>d(),O(R,$($v,{})),A.$$click=()=>h(),O(B,$(qd,{})),C.$$click=()=>p(),O(P,$(kd,{})),g}})};bt(["click"]);const UP=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),NP=(e={})=>(()=>{const t=UP();return Ge(t,e,!0,!0),t})(),DP=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),zP=(e={})=>(()=>{const t=DP();return Ge(t,e,!0,!0),t})(),HP=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),FP=(e={})=>(()=>{const t=HP();return Ge(t,e,!0,!0),t})();function qP(e){const{config:t}=je(),n=We(e),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[ht.Contacts],"#p":[n().pubkey]}],limit:1/0,continuous:!0})),o=()=>mr(i()?.map(c=>c.pubkey));return{followersPubkeys:o,count:()=>o().length}}const WP=e=>{const t=We(e),n=is(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return Promise.resolve(null);const{nip05:u}=c;return q1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},ZP=j('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),KP=j('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),VP=j('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),GP=j('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),QP=j('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),YP=j('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),JP=j('<div class="shrink-0 text-xs">読み込み中'),XP=j('<div class="shrink-0 text-xs">フォローされています'),eB=j('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),tB=j('<div class="truncate text-xl font-bold">'),nB=j('<div class="truncate text-xs">@'),rB=j('<span class="inline-block h-3 w-3">'),iB=j('<span class="inline-block h-4 w-4 text-blue-400">'),sB=j('<div class="flex items-center text-xs">'),oB=j('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),aB=j('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),lB=j('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),cB=j('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),uB=j('<ul class="border-t px-5 py-2 text-xs">'),dB=j('<ul class="border-t p-1">'),fB=j('<div class="h-12 shrink-0">'),hB=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),pB=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),gB=j('<span class="inline-block h-4 w-4 text-rose-500">'),mB=j('<span class="text-sm">読み込み中'),vB=j('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),bB=j('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),yB=e=>{const{count:t}=qP(()=>({pubkey:e.pubkey}));return We(t)},_B=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=je(),a=Rl(),c=$r(),{showProfileEdit:u}=Xr(),d=We(()=>Cl(e.pubkey)),[h,p]=$e(!1),[g,v]=$e(!1),{profile:_,query:k}=hs(()=>({pubkey:e.pubkey})),{verification:x,query:E}=WP(()=>dn([_()?.nip05])(([D])=>({nip05:D}))),w=()=>{const D=_()?.nip05;if(D==null)return null;const[ne,G]=D.split("@");return G==null?null:ne==="_"?{domain:G,ident:G}:{user:ne,domain:G,ident:D}},T=()=>x()?.pubkey===e.pubkey,R=()=>o(e.pubkey),{followingPubkeys:A,invalidateFollowings:B,query:C}=Wu(()=>dn([c()])(([D])=>({pubkey:D}))),P=()=>A().includes(e.pubkey),{followingPubkeys:U,query:ee}=Wu(()=>({pubkey:e.pubkey})),Z=()=>{const D=c();return D!=null&&U().includes(D)},Q=mi({mutationKey:["updateContacts"],mutationFn:(...D)=>a.updateContacts(...D).then(ne=>Promise.allSettled(ne.map(Jr(5e3)))),onSuccess:D=>{const ne=D.filter(ae=>ae.status==="fulfilled").length,G=D.length-ne;ne===D.length?console.log("succeeded to update contacts"):ne>0?console.log(`succeeded to update contacts for ${ne} relays but failed for ${G} relays`):console.error("failed to update contacts")},onError:D=>{console.error("failed to update contacts: ",D)},onSettled:()=>{B().then(()=>C.refetch()).catch(D=>console.error("failed to refetch contacts",D))}}),q=()=>{const D=c();D!=null&&C.isFetched&&Q.mutate({relayUrls:t().relayUrls,pubkey:D,content:C.data?.content??"",followingPubkeys:mr([...A(),e.pubkey])})},Y=()=>{const D=c();D!=null&&C.isFetched&&window.confirm("本当にフォロー解除しますか？")&&Q.mutate({relayUrls:t().relayUrls,pubkey:D,content:C.data?.content??"",followingPubkeys:A().filter(ne=>ne!==e.pubkey)})},ie=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(D=>window.alert(D))}},{content:()=>R()?"ミュート解除":"ミュート",onSelect:()=>{R()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===c(),content:()=>P()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{P()?Y():q()}}],{events:K}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:fr()}],continuous:!1}));return $(_o,{onClose:()=>e.onClose?.(),get children(){return[$(fe,{get when(){return k.isFetched},get fallback(){return"loading"},get children(){return[$(fe,{get when(){return _()?.banner},get fallback(){return fB()},keyed:!0,children:D=>(()=>{const ne=hB(),G=ne.firstChild;return vt(G,"src",D),ne})()}),(()=>{const D=eB(),ne=D.firstChild,G=ne.firstChild,ae=ne.nextSibling,he=ae.firstChild;return O(G,$(fe,{get when(){return _()?.picture},keyed:!0,children:te=>(()=>{const ue=pB();return vt(ue,"src",te),ue})()})),O(he,$(Mn,{get children(){return[$(ze,{get when(){return e.pubkey===c()},get children(){const te=ZP();return te.$$click=()=>u(),te}}),$(ze,{get when(){return C.isLoading||C.isFetching},get children(){return KP()}}),$(ze,{get when(){return Q.isLoading},get children(){return VP()}}),$(ze,{get when(){return P()},get children(){const te=GP();return te.$$click=()=>Y(),te.addEventListener("mouseleave",()=>p(!1)),te.addEventListener("mouseenter",()=>p(!0)),O(te,$(fe,{get when(){return!h()},fallback:"フォロー解除",children:"フォロー中"})),Le(()=>te.disabled=Q.isLoading),te}}),$(ze,{get when(){return!P()},get children(){const te=QP();return te.$$click=()=>q(),Le(()=>te.disabled=Q.isLoading),te}})]}}),null),O(he,$(wm,{menu:ie,get children(){const te=YP();return O(te,$(ym,{})),te}}),null),O(ae,$(Mn,{get children(){return[$(ze,{get when(){return ee.isLoading},get children(){return JP()}}),$(ze,{get when(){return Z()},get children(){return XP()}})]}}),null),D})(),(()=>{const D=oB(),ne=D.firstChild,G=ne.firstChild,ae=G.nextSibling,he=ae.firstChild;return O(ne,$(fe,{get when(){return(_()?.display_name?.length??0)>0},get children(){const te=tB();return O(te,()=>_()?.display_name),te}}),G),O(G,$(fe,{get when(){return(_()?.name?.length??0)>0},get children(){const te=nB();return te.firstChild,O(te,()=>_()?.name,null),te}}),null),O(G,$(fe,{get when(){return(_()?.nip05?.length??0)>0},get children(){const te=sB();return O(te,()=>w()?.ident,null),O(te,$(Mn,{get fallback(){return(()=>{const ue=gB();return O(ue,$(FP,{})),ue})()},get children(){return[$(ze,{get when(){return E.isLoading},get children(){const ue=rB();return O(ue,$(NP,{})),ue}}),$(ze,{get when(){return T()},get children(){const ue=iB();return O(ue,$(zP,{})),ue}})]}}),null),te}}),null),O(he,d),D})(),$(fe,{get when(){return(_()?.about??"").length>0},get children(){const D=aB();return O(D,()=>_()?.about),D}}),(()=>{const D=cB(),ne=D.firstChild,G=ne.firstChild,ae=G.nextSibling;return O(ae,$(fe,{get when(){return ee.isFetched},get fallback(){return mB()},get children(){return U().length}})),O(D,$(fe,{get when(){return!t().hideCount},get children(){const he=lB(),te=he.firstChild,ue=te.nextSibling;return O(ue,$(fe,{get when(){return g()},get fallback(){return(()=>{const Ne=vB();return Ne.$$click=()=>v(!0),Ne})()},keyed:!0,get children(){return $(yB,{get pubkey(){return e.pubkey}})}})),he}}),null),D})(),$(fe,{get when(){return(_()?.website??"").length>0},get children(){const D=uB();return O(D,$(fe,{get when(){return _()?.website},keyed:!0,children:ne=>(()=>{const G=bB(),ae=G.firstChild;return O(ae,$(Wd,{})),O(G,$(Il,{class:"text-blue-500 underline",href:ne}),null),G})()})),D}})]}}),(()=>{const D=dB();return O(D,$(ps,{get events(){return K()}})),D})()]}})};bt(["click"]);function wB(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var xB=wB,$B=xi,kB=function(){try{var e=$B(Object,"defineProperty");return e({},"",{}),e}catch{}}(),kv=kB,rg=kv;function EB(e,t,n){t=="__proto__"&&rg?rg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Ev=EB,CB=Ev,SB=Yu,TB=Object.prototype,AB=TB.hasOwnProperty;function IB(e,t,n){var i=e[t];(!(AB.call(e,t)&&SB(i,n))||n===void 0&&!(t in e))&&CB(e,t,n)}var Zd=IB,RB=Zd,OB=Ev;function LB(e,t,n,i){var o=!n;n||(n={});for(var a=-1,c=t.length;++a<c;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?OB(n,u,d):RB(n,u,d)}return n}var wo=LB,PB=wo,BB=Ol;function MB(e,t){return e&&PB(t,BB(t),e)}var jB=MB;function UB(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var NB=UB,DB=Qn,zB=Nd,HB=NB,FB=Object.prototype,qB=FB.hasOwnProperty;function WB(e){if(!DB(e))return HB(e);var t=zB(e),n=[];for(var i in e)i=="constructor"&&(t||!qB.call(e,i))||n.push(i);return n}var ZB=WB,KB=lv,VB=ZB,GB=uv;function QB(e){return GB(e)?KB(e,!0):VB(e)}var Kd=QB,YB=wo,JB=Kd;function XB(e,t){return e&&YB(t,JB(t),e)}var eM=XB,el={exports:{}};el.exports;(function(e,t){var n=Dn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a?n.Buffer:void 0,u=c?c.allocUnsafe:void 0;function d(h,p){if(p)return h.slice();var g=h.length,v=u?u(g):new h.constructor(g);return h.copy(v),v}e.exports=d})(el,el.exports);var tM=el.exports;function nM(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var rM=nM,iM=wo,sM=Od;function oM(e,t){return iM(e,sM(e),t)}var aM=oM,lM=cv,cM=lM(Object.getPrototypeOf,Object),Vd=cM,uM=Rd,dM=Vd,fM=Od,hM=sv,pM=Object.getOwnPropertySymbols,gM=pM?function(e){for(var t=[];e;)uM(t,fM(e)),e=dM(e);return t}:hM,Cv=gM,mM=wo,vM=Cv;function bM(e,t){return mM(e,vM(e),t)}var yM=bM,_M=iv,wM=Cv,xM=Kd;function $M(e){return _M(e,xM,wM)}var Gd=$M,kM=Object.prototype,EM=kM.hasOwnProperty;function CM(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&EM.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var SM=CM,ig=rv;function TM(e){var t=new e.constructor(e.byteLength);return new ig(t).set(new ig(e)),t}var Qd=TM,AM=Qd;function IM(e,t){var n=t?AM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var RM=IM,OM=/\w*$/;function LM(e){var t=new e.constructor(e.source,OM.exec(e));return t.lastIndex=e.lastIndex,t}var PM=LM,sg=ss,og=sg?sg.prototype:void 0,ag=og?og.valueOf:void 0;function BM(e){return ag?Object(ag.call(e)):{}}var MM=BM,jM=Qd;function UM(e,t){var n=t?jM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var NM=UM,DM=Qd,zM=RM,HM=PM,FM=MM,qM=NM,WM="[object Boolean]",ZM="[object Date]",KM="[object Map]",VM="[object Number]",GM="[object RegExp]",QM="[object Set]",YM="[object String]",JM="[object Symbol]",XM="[object ArrayBuffer]",ej="[object DataView]",tj="[object Float32Array]",nj="[object Float64Array]",rj="[object Int8Array]",ij="[object Int16Array]",sj="[object Int32Array]",oj="[object Uint8Array]",aj="[object Uint8ClampedArray]",lj="[object Uint16Array]",cj="[object Uint32Array]";function uj(e,t,n){var i=e.constructor;switch(t){case XM:return DM(e);case WM:case ZM:return new i(+e);case ej:return zM(e,n);case tj:case nj:case rj:case ij:case sj:case oj:case aj:case lj:case cj:return qM(e,n);case KM:return new i;case VM:case YM:return new i(e);case GM:return HM(e);case QM:return new i;case JM:return FM(e)}}var dj=uj,fj=Qn,lg=Object.create,hj=function(){function e(){}return function(t){if(!fj(t))return{};if(lg)return lg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),pj=hj,gj=pj,mj=Vd,vj=Nd;function bj(e){return typeof e.constructor=="function"&&!vj(e)?gj(mj(e)):{}}var yj=bj,_j=Ll,wj=ei,xj="[object Map]";function $j(e){return wj(e)&&_j(e)==xj}var kj=$j,Ej=kj,Cj=jd,cg=Ud,ug=cg&&cg.isMap,Sj=ug?Cj(ug):Ej,Tj=Sj,Aj=Ll,Ij=ei,Rj="[object Set]";function Oj(e){return Ij(e)&&Aj(e)==Rj}var Lj=Oj,Pj=Lj,Bj=jd,dg=Ud,fg=dg&&dg.isSet,Mj=fg?Bj(fg):Pj,jj=Mj,Uj=Id,Nj=xB,Dj=Zd,zj=jB,Hj=eM,Fj=tM,qj=rM,Wj=aM,Zj=yM,Kj=dv,Vj=Gd,Gj=Ll,Qj=SM,Yj=dj,Jj=yj,Xj=Xn,eU=Pd,tU=Tj,nU=Qn,rU=jj,iU=Ol,sU=Kd,oU=1,aU=2,lU=4,Sv="[object Arguments]",cU="[object Array]",uU="[object Boolean]",dU="[object Date]",fU="[object Error]",Tv="[object Function]",hU="[object GeneratorFunction]",pU="[object Map]",gU="[object Number]",Av="[object Object]",mU="[object RegExp]",vU="[object Set]",bU="[object String]",yU="[object Symbol]",_U="[object WeakMap]",wU="[object ArrayBuffer]",xU="[object DataView]",$U="[object Float32Array]",kU="[object Float64Array]",EU="[object Int8Array]",CU="[object Int16Array]",SU="[object Int32Array]",TU="[object Uint8Array]",AU="[object Uint8ClampedArray]",IU="[object Uint16Array]",RU="[object Uint32Array]",tt={};tt[Sv]=tt[cU]=tt[wU]=tt[xU]=tt[uU]=tt[dU]=tt[$U]=tt[kU]=tt[EU]=tt[CU]=tt[SU]=tt[pU]=tt[gU]=tt[Av]=tt[mU]=tt[vU]=tt[bU]=tt[yU]=tt[TU]=tt[AU]=tt[IU]=tt[RU]=!0;tt[fU]=tt[Tv]=tt[_U]=!1;function Sa(e,t,n,i,o,a){var c,u=t&oU,d=t&aU,h=t&lU;if(n&&(c=o?n(e,i,o,a):n(e)),c!==void 0)return c;if(!nU(e))return e;var p=Xj(e);if(p){if(c=Qj(e),!u)return qj(e,c)}else{var g=Gj(e),v=g==Tv||g==hU;if(eU(e))return Fj(e,u);if(g==Av||g==Sv||v&&!o){if(c=d||v?{}:Jj(e),!u)return d?Zj(e,Hj(c,e)):Wj(e,zj(c,e))}else{if(!tt[g])return o?e:{};c=Yj(e,g,u)}}a||(a=new Uj);var _=a.get(e);if(_)return _;a.set(e,c),rU(e)?e.forEach(function(E){c.add(Sa(E,t,n,E,e,a))}):tU(e)&&e.forEach(function(E,w){c.set(w,Sa(E,t,n,w,e,a))});var k=h?d?Vj:Kj:d?sU:iU,x=p?void 0:k(e);return Nj(x||e,function(E,w){x&&(w=E,E=e[w]),Dj(c,w,Sa(E,t,n,w,e,a))}),c}var OU=Sa;function LU(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var PU=LU;function BU(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var MU=BU,jU=Bl,UU=MU;function NU(e,t){return t.length<2?e:jU(e,UU(t,0,-1))}var DU=NU,zU=vs,HU=PU,FU=DU,qU=bs;function WU(e,t){return t=zU(t,e),e=FU(e,t),e==null||delete e[qU(HU(t))]}var ZU=WU,KU=os,VU=Vd,GU=ei,QU="[object Object]",YU=Function.prototype,JU=Object.prototype,Iv=YU.toString,XU=JU.hasOwnProperty,eN=Iv.call(Object);function tN(e){if(!GU(e)||KU(e)!=QU)return!1;var t=VU(e);if(t===null)return!0;var n=XU.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Iv.call(n)==eN}var nN=tN,rN=nN;function iN(e){return rN(e)?void 0:e}var sN=iN,hg=ss,oN=Ld,aN=Xn,pg=hg?hg.isConcatSpreadable:void 0;function lN(e){return aN(e)||oN(e)||!!(pg&&e&&e[pg])}var cN=lN,uN=Rd,dN=cN;function Rv(e,t,n,i,o){var a=-1,c=e.length;for(n||(n=dN),o||(o=[]);++a<c;){var u=e[a];t>0&&n(u)?t>1?Rv(u,t-1,n,i,o):uN(o,u):i||(o[o.length]=u)}return o}var fN=Rv,hN=fN;function pN(e){var t=e==null?0:e.length;return t?hN(e,1):[]}var gN=pN;function mN(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var vN=mN,bN=vN,gg=Math.max;function yN(e,t,n){return t=gg(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=gg(i.length-t,0),c=Array(a);++o<a;)c[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(c),bN(e,this,u)}}var _N=yN;function wN(e){return function(){return e}}var xN=wN,$N=xN,mg=kv,kN=yv,EN=mg?function(e,t){return mg(e,"toString",{configurable:!0,enumerable:!1,value:$N(t),writable:!0})}:kN,CN=EN,SN=800,TN=16,AN=Date.now;function IN(e){var t=0,n=0;return function(){var i=AN(),o=TN-(i-n);if(n=i,o>0){if(++t>=SN)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var RN=IN,ON=CN,LN=RN,PN=LN(ON),BN=PN,MN=gN,jN=_N,UN=BN;function NN(e){return UN(jN(e,void 0,MN),e+"")}var DN=NN,zN=Hd,HN=OU,FN=ZU,qN=vs,WN=wo,ZN=sN,KN=DN,VN=Gd,GN=1,QN=2,YN=4,JN=KN(function(e,t){var n={};if(e==null)return n;var i=!1;t=zN(t,function(a){return a=qN(a,e),i||(i=a.length>1),a}),WN(e,VN(e),n),i&&(n=HN(n,GN|QN|YN,ZN));for(var o=t.length;o--;)FN(n,t[o]);return n}),XN=JN;const eD=lo(XN);var tD="Expected a function";function nD(e){if(typeof e!="function")throw new TypeError(tD);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var rD=nD,iD=Zd,sD=vs,oD=Bd,vg=Qn,aD=bs;function lD(e,t,n,i){if(!vg(e))return e;t=sD(t,e);for(var o=-1,a=t.length,c=a-1,u=e;u!=null&&++o<a;){var d=aD(t[o]),h=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=c){var p=u[d];h=i?i(p,d,u):void 0,h===void 0&&(h=vg(p)?p:oD(t[o+1])?[]:{})}iD(u,d,h),u=u[d]}return e}var cD=lD,uD=Bl,dD=cD,fD=vs;function hD(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var c=t[i],u=uD(e,c);n(u,c)&&dD(a,fD(c,e),u)}return a}var pD=hD,gD=Hd,mD=Fd,vD=pD,bD=Gd;function yD(e,t){if(e==null)return{};var n=gD(bD(e),function(i){return[i]});return t=mD(t),vD(e,n,function(i,o){return t(i,o[0])})}var _D=yD,wD=Fd,xD=rD,$D=_D;function kD(e,t){return $D(e,xD(wD(t)))}var ED=kD;const CD=lo(ED),SD=j('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),TD=j('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),AD=j('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),ID=j('<div class="px-4 pt-4">読み込み中...'),RD=j('<div><span class="font-bold">その他の項目</span><div>'),OD=j('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),LD=j('<div class="h-24 shrink-0">'),PD=j('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),BD="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",MD="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",jD=new RegExp(`^${BD}$`),Ov=new RegExp(`^${MD}$`),UD=e=>jD.test(e),ND=e=>Ov.test(e),DD=e=>{const t=$r(),{config:n}=je(),[i,o]=$e(""),[a,c]=$e(""),[u,d]=$e(""),[h,p]=$e(""),[g,v]=$e(""),[_,k]=$e(""),[x,E]=$e(""),[w,T]=$e(""),{profile:R,invalidateProfile:A,query:B}=hs(()=>dn([t()])(([Y])=>({pubkey:Y}))),{updateProfile:C}=Rl(),P=mi({mutationKey:["updateProfile"],mutationFn:(...Y)=>C(...Y).then(ie=>Promise.allSettled(ie.map(Jr(1e4)))),onSuccess:Y=>{const ie=Y.filter(D=>D.status==="fulfilled").length,K=Y.length-ie;ie===Y.length?window.alert("更新しました"):ie>0?window.alert(`${K}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),A().then(()=>B.refetch()).catch(D=>console.error(D)),e.onClose()},onError:Y=>{console.error("failed to delete",Y)}}),U=()=>B.isLoading||P.isLoading,ee=()=>U(),Z=()=>eD(R(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),Q=Y=>{Y.preventDefault();const ie=t();if(ie==null)return;const K=CD({picture:i(),banner:a(),name:u(),display_name:h(),about:g(),website:_(),nip05:x(),lud06:UD(w())?w():null,lud16:ND(w())?w():null},D=>D==null||D.length===0);P.mutate({relayUrls:n().relayUrls,pubkey:ie,profile:K,otherProperties:Z()})},q=Y=>Y.key==="Enter"&&Y.preventDefault();return fn(()=>{const Y=R();Y!=null&&(B.refetch().catch(ie=>console.error(ie)),vu(()=>{o(ie=>Y.picture??ie),c(ie=>Y.banner??ie),d(ie=>Y.name??ie),p(ie=>Y.display_name??ie),v(ie=>Y.about??ie),k(ie=>Y.website??ie),E(ie=>Y.nip05??ie),Y.lud16!=null?T(Y.lud16):Y.lud06!=null&&T(Y.lud06)}))}),$(_o,{closeButton:()=>$(Qu,{}),get onClose(){return e.onClose},get children(){return[(()=>{const Y=AD(),ie=Y.firstChild;return O(Y,$(fe,{get when(){return a().length>0},get fallback(){return LD()},keyed:!0,get children(){const K=SD(),D=K.firstChild;return Le(()=>vt(D,"src",a())),K}}),ie),O(ie,$(fe,{get when(){return i().length>0},get children(){const K=TD();return Le(()=>vt(K,"src",i())),K}})),Y})(),$(fe,{get when(){return U()},get children(){return ID()}}),(()=>{const Y=OD(),ie=Y.firstChild,K=ie.firstChild,D=K.firstChild,ne=D.nextSibling,G=K.nextSibling,ae=G.firstChild,he=ae.nextSibling,te=G.nextSibling,ue=te.firstChild,Ne=ue.nextSibling,nt=Ne.firstChild,Je=nt.nextSibling,yt=te.nextSibling,J=yt.firstChild,Xe=J.nextSibling,oe=yt.nextSibling,Fe=oe.firstChild,ot=Fe.nextSibling,Qe=oe.nextSibling,At=Qe.firstChild,Ke=At.nextSibling,It=Qe.nextSibling,En=It.firstChild,dt=En.nextSibling,zt=It.nextSibling,er=zt.firstChild,we=er.nextSibling,De=we.nextSibling,at=zt.nextSibling,Et=at.firstChild,en=Et.nextSibling;return ie.addEventListener("submit",Q),ne.$$keydown=q,ne.addEventListener("blur",pe=>o(pe.currentTarget.value)),he.$$keydown=q,he.addEventListener("blur",pe=>c(pe.currentTarget.value)),Je.$$keydown=q,Je.addEventListener("change",pe=>d(pe.currentTarget.value)),Xe.$$keydown=q,Xe.addEventListener("change",pe=>p(pe.currentTarget.value)),ot.addEventListener("change",pe=>v(pe.currentTarget.value)),Ke.$$keydown=q,Ke.addEventListener("change",pe=>k(pe.currentTarget.value)),dt.$$keydown=q,dt.addEventListener("change",pe=>E(pe.currentTarget.value)),De.$$keydown=q,De.addEventListener("change",pe=>T(pe.currentTarget.value)),O(ie,$(fe,{get when(){return Object.entries(Z()).length>0},get children(){const pe=RD(),hn=pe.firstChild,Oe=hn.nextSibling;return O(Oe,$(Ut,{get each(){return Object.entries(Z())},children:([rt,Cn])=>(()=>{const Sn=PD(),pn=Sn.firstChild,Er=pn.nextSibling;return O(pn,rt),O(Er,Cn),Sn})()})),pe}}),at),en.$$click=()=>e.onClose(),O(ie,$(fe,{get when(){return P.isLoading},children:"保存中..."}),null),Le(pe=>{const hn=ee(),Oe=ee(),rt=ee(),Cn=ee(),Sn=ee(),pn=ee(),Er=Ov.source,$i=ee(),ki=ee(),Ei=P.isLoading;return hn!==pe._v$&&(ne.disabled=pe._v$=hn),Oe!==pe._v$2&&(he.disabled=pe._v$2=Oe),rt!==pe._v$3&&(Je.disabled=pe._v$3=rt),Cn!==pe._v$4&&(Xe.disabled=pe._v$4=Cn),Sn!==pe._v$5&&(ot.disabled=pe._v$5=Sn),pn!==pe._v$6&&(Ke.disabled=pe._v$6=pn),Er!==pe._v$7&&vt(dt,"pattern",pe._v$7=Er),$i!==pe._v$8&&(dt.disabled=pe._v$8=$i),ki!==pe._v$9&&(De.disabled=pe._v$9=ki),Ei!==pe._v$10&&(Et.disabled=pe._v$10=Ei),pe},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Le(()=>ne.value=i()),Le(()=>he.value=a()),Le(()=>Je.value=u()),Le(()=>Xe.value=h()),Le(()=>ot.value=g()),Le(()=>Ke.value=_()),Le(()=>dt.value=x()),Le(()=>De.value=w()),Y})()]}})};bt(["keydown","click"]);const zD=()=>{const e=$r(),{modalState:t,showProfile:n,closeModal:i}=Xr();return $(fe,{get when(){return t()},keyed:!0,children:o=>$(Mn,{get children(){return[$(ze,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>$(_B,{pubkey:a,onClose:i})}),$(ze,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return $(DD,{onClose:()=>dn([e()])(([a])=>{n(a)})})}}),$(ze,{get when(){return o.type==="AddColumn"},get children(){return $(jP,{onClose:i})}}),$(ze,{get when(){return o.type==="About"},get children(){return $(BP,{onClose:i})}})]}})})},HD=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),FD=(e={})=>(()=>{const t=HD();return Ge(t,e,!0,!0),t})(),qD=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),bg=(e={})=>(()=>{const t=qD();return Ge(t,e,!0,!0),t})(),WD=j('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),ZD=(e={})=>(()=>{const t=WD();return Ge(t,e,!0,!0),t})(),KD=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),VD=(e={})=>(()=>{const t=KD();return Ge(t,e,!0,!0),t})(),GD=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),QD=(e={})=>(()=>{const t=GD();return Ge(t,e,!0,!0),t})(),YD=j('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),JD=(e={})=>(()=>{const t=YD();return Ge(t,e,!0,!0),t})(),yg=wt.string().length(64).regex(/^[0-9a-f]{64}$/),Zu=wt.string().regex(/^\w+$/),XD=wt.object({shortcode:Zu,url:wt.string().url(),keywords:wt.optional(wt.array(Zu))}),ez=wt.object({manifest:wt.literal("emojipack_v1"),name:wt.string(),emojis:wt.array(XD),description:wt.optional(wt.string()),author:wt.optional(yg),publisher:wt.optional(yg)}).refine(e=>_v(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),Lv=wt.record(Zu,wt.string().url());ez.or(Lv);const tz=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),nz=j('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),rz=j('<div class="py-2"><h3 class="font-bold">リレー</h3><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Ku=j('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),iz=j('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),sz=j('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),oz=j('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),az=j('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),lz=j('<div class="py-2"><h3 class="font-bold">カスタム絵文字</h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9">名前</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9">URL</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">追加'),cz=j('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),uz=j('<div class="py-2"><h3 class="font-bold">絵文字のインポート</h3><p>絵文字の名前をキー、画像のURLを値とするJSONを読み込むことができます。</p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">インポート'),dz=j('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),fz=j('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),hz=j('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),pz=j('<div class="p-4">'),gz=j('<h2 class="flex-1 text-center text-lg font-bold">設定'),mz=j('<ul class="flex flex-col">'),vz=j('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),bz=j('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Pv=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,yz=Pv("https?"),_z=Pv("wss?"),wz=()=>{const e=$r(),{showProfile:t,showProfileEdit:n}=Xr();return(()=>{const i=nz(),o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;return c.$$click=()=>dn([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},xz=()=>{const{config:e,addRelay:t,removeRelay:n}=je(),[i,o]=$e(""),a=c=>{c.preventDefault(),i().length!==0&&(t(i()),o(""))};return(()=>{const c=rz(),u=c.firstChild,d=u.nextSibling,h=d.nextSibling,p=h.firstChild;return O(d,$(Ut,{get each(){return e().relayUrls},children:g=>(()=>{const v=Ku(),_=v.firstChild,k=_.nextSibling;return O(_,g),k.$$click=()=>n(g),O(k,$(ns,{})),v})()})),h.addEventListener("submit",a),p.addEventListener("change",g=>o(g.currentTarget.value)),vt(p,"pattern",_z),Le(()=>p.value=i()),c})()},$z=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],kz=()=>{const{config:e,setConfig:t}=je(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=iz(),o=i.firstChild,a=o.nextSibling;return O(a,$(Ut,{each:$z,children:({id:c,name:u,example:d})=>(()=>{const h=sz(),p=h.firstChild,g=p.nextSibling;return p.$$click=()=>n(c),O(p,u),O(g,d),Le(v=>{const _=e().dateFormat===c,k=e().dateFormat===c,x=e().dateFormat!==c,E=e().dateFormat!==c;return _!==v._v$&&p.classList.toggle("bg-rose-300",v._v$=_),k!==v._v$2&&p.classList.toggle("text-white",v._v$2=k),x!==v._v$3&&p.classList.toggle("bg-white",v._v$3=x),E!==v._v$4&&p.classList.toggle("text-rose-300",v._v$4=E),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),h})()})),i})()},Hs=e=>(()=>{const t=oz();return t.$$click=n=>e.onClick(n),Le(n=>{const i=!e.value,o=!e.value,a=!!e.value,c=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),c!==n._v$8&&t.classList.toggle("justify-end",n._v$8=c),u!==n._v$9&&vt(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),Ez=()=>{const{config:e,setConfig:t}=je(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=az(),a=o.firstChild,c=a.nextSibling,u=c.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,O(u,$(Hs,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),O(d,$(Hs,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},Cz=()=>{const{config:e,saveEmoji:t,removeEmoji:n}=je(),[i,o]=$e(""),[a,c]=$e(""),u=d=>{d.preventDefault(),!(i().length===0||a().length===0)&&(t({shortcode:i(),url:a()}),o(""),c(""))};return(()=>{const d=lz(),h=d.firstChild,p=h.nextSibling,g=p.nextSibling,v=g.firstChild,_=v.firstChild,k=_.nextSibling,x=v.nextSibling,E=x.firstChild,w=E.nextSibling;return O(p,$(Ut,{get each(){return Object.values(e().customEmojis)},children:({shortcode:T,url:R})=>(()=>{const A=cz(),B=A.firstChild,C=B.nextSibling,P=C.nextSibling;return vt(B,"src",R),vt(B,"alt",T),O(C,T),P.$$click=()=>n(T),O(P,$(ns,{})),A})()})),g.addEventListener("submit",u),k.addEventListener("change",T=>o(T.currentTarget.value)),w.addEventListener("change",T=>c(T.currentTarget.value)),vt(w,"pattern",yz),Le(()=>k.value=i()),Le(()=>w.value=a()),d})()},Sz=()=>{const{saveEmojis:e}=je(),[t,n]=$e(""),i=o=>{if(o.preventDefault(),t().length!==0)try{const a=Lv.parse(JSON.parse(t())),c=tz(a);e(c),n("")}catch(a){const c=a instanceof Error?`:${a.message}`:"";window.alert(`JSONの読み込みに失敗しました${c}`)}};return(()=>{const o=uz(),a=o.firstChild,c=a.nextSibling,u=c.nextSibling,d=u.firstChild;return u.addEventListener("submit",i),d.addEventListener("change",h=>n(h.currentTarget.value)),Le(()=>d.value=t()),o})()},Tz=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=je(),[o,a]=$e(""),c=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=dz(),d=u.firstChild,h=d.nextSibling;return O(h,$(Ut,{get each(){return e().mutedPubkeys},children:p=>(()=>{const g=Ku(),v=g.firstChild,_=v.nextSibling;return O(v,$(Sl,{pubkey:p})),_.$$click=()=>t(p),O(_,$(ns,{})),g})()})),u})(),(()=>{const u=fz(),d=u.firstChild,h=d.nextSibling,p=h.nextSibling,g=p.firstChild;return O(h,$(Ut,{get each(){return e().mutedKeywords},children:v=>(()=>{const _=Ku(),k=_.firstChild,x=k.nextSibling;return O(k,v),x.$$click=()=>i(v),O(x,$(ns,{})),_})()})),p.addEventListener("submit",c),g.addEventListener("change",v=>a(v.currentTarget.value)),Le(()=>g.value=o()),u})()]},Az=()=>{const{config:e,setConfig:t}=je(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=hz(),c=a.firstChild,u=c.nextSibling,d=u.firstChild;d.firstChild;const h=d.nextSibling;h.firstChild;const p=h.nextSibling;return p.firstChild,O(d,$(Hs,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),O(h,$(Hs,{get value(){return e().showImage},onClick:()=>i()}),null),O(p,$(Hs,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},Iz=e=>{const[t,n]=$e(null),i=[{name:()=>"プロフィール",icon:()=>$(qd,{}),render:()=>$(wz,{})},{name:()=>"リレー",icon:()=>$(JD,{}),render:()=>$(xz,{})},{name:()=>"表示",icon:()=>$(QD,{}),render:()=>[$(kz,{}),$(Ez,{}),$(Az,{})]},{name:()=>"カスタム絵文字",icon:()=>$(Qm,{}),render:()=>[$(Cz,{}),$(Sz,{})]},{name:()=>"ミュート",icon:()=>$(VD,{}),render:()=>$(Tz,{})}],o=()=>{const a=t();return a==null?null:i[a]};return $(_o,{get onClose(){return e.onClose},get children(){const a=pz();return O(a,$(fe,{get when(){return o()},get fallback(){return[gz(),(()=>{const c=mz();return O(c,$(Ut,{each:i,children:(u,d)=>(()=>{const h=vz(),p=h.firstChild,g=p.firstChild;return p.$$click=()=>n(d),O(g,()=>u.icon()),O(p,()=>u.name(),null),h})()})),c})()]},keyed:!0,children:c=>(()=>{const u=bz(),d=u.firstChild,h=d.nextSibling;return d.$$click=()=>n(null),O(d,$(Qu,{})),O(h,()=>c.render()),u})()})),a}})};bt(["click"]);const Rz=j('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),Oz=j('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),Lz=j('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),Pz=()=>{let e,t;const{saveColumn:n}=je(),i=yo(),[o,a]=$e(""),c=u=>{u.preventDefault(),n($d({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return $(Cd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=Oz();return O(u,$(bg,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=Rz(),d=u.firstChild,h=d.nextSibling;u.addEventListener("submit",c),d.addEventListener("change",g=>a(g.currentTarget.value));const p=t;return typeof p=="function"?_r(p,d):t=d,O(h,$(bg,{})),Le(()=>d.value=o()),u}})},Bz=()=>{let e;const{showAddColumn:t,showAbout:n}=Xr(),{config:i}=je(),[o,a]=$e(!1),[c,u]=$e(!1),d=()=>{e?.focus(),e?.click()},h=()=>a(!0),p=()=>a(!1),g=()=>a(v=>!v);return Nu(()=>({commandType:"openPostForm",handler:()=>{h(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=Lz(),_=v.firstChild,k=_.firstChild,x=k.firstChild,E=k.nextSibling,w=E.nextSibling,T=w.firstChild,R=T.nextSibling,A=R.nextSibling,B=A.firstChild,C=_.nextSibling;return x.$$click=()=>g(),O(x,$(ZD,{})),O(k,$(Pz,{}),null),T.$$click=()=>t(),O(T,$(_m,{})),R.$$click=()=>u(P=>!P),O(R,$(FD,{})),A.$$click=()=>n(),O(C,$(Ym,{textAreaRef:P=>{e=P},onClose:p})),O(v,$(fe,{get when(){return c()},get children(){return $(Iz,{onClose:()=>u(!1)})}}),null),Le(P=>{const U=Vu("images/rabbit_app_256.png"),ee=!!(o()||i().keepOpenPostForm),Z=!(o()||i().keepOpenPostForm);return U!==P._v$&&vt(B,"src",P._v$=U),ee!==P._v$2&&C.classList.toggle("static",P._v$2=ee),Z!==P._v$3&&C.classList.toggle("hidden",P._v$3=Z),P},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};bt(["click"]);var Mz=Dn,jz=function(){return Mz.Date.now()},Uz=jz,Nz=/\s/;function Dz(e){for(var t=e.length;t--&&Nz.test(e.charAt(t)););return t}var zz=Dz,Hz=zz,Fz=/^\s+/;function qz(e){return e&&e.slice(0,Hz(e)+1).replace(Fz,"")}var Wz=qz,Zz=Wz,_g=Qn,Kz=Pl,wg=0/0,Vz=/^[-+]0x[0-9a-f]+$/i,Gz=/^0b[01]+$/i,Qz=/^0o[0-7]+$/i,Yz=parseInt;function Jz(e){if(typeof e=="number")return e;if(Kz(e))return wg;if(_g(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=_g(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Zz(e);var n=Gz.test(e);return n||Qz.test(e)?Yz(e.slice(2),n?2:8):Vz.test(e)?wg:+e}var Xz=Jz,eH=Qn,gu=Uz,xg=Xz,tH="Expected a function",nH=Math.max,rH=Math.min;function iH(e,t,n){var i,o,a,c,u,d,h=0,p=!1,g=!1,v=!0;if(typeof e!="function")throw new TypeError(tH);t=xg(t)||0,eH(n)&&(p=!!n.leading,g="maxWait"in n,a=g?nH(xg(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function _(C){var P=i,U=o;return i=o=void 0,h=C,c=e.apply(U,P),c}function k(C){return h=C,u=setTimeout(w,t),p?_(C):c}function x(C){var P=C-d,U=C-h,ee=t-P;return g?rH(ee,a-U):ee}function E(C){var P=C-d,U=C-h;return d===void 0||P>=t||P<0||g&&U>=a}function w(){var C=gu();if(E(C))return T(C);u=setTimeout(w,x(C))}function T(C){return u=void 0,v&&i?_(C):(i=o=void 0,c)}function R(){u!==void 0&&clearTimeout(u),h=0,i=d=o=u=void 0}function A(){return u===void 0?c:T(gu())}function B(){var C=gu(),P=E(C);if(i=arguments,o=this,d=C,P){if(u===void 0)return k(d);if(g)return clearTimeout(u),u=setTimeout(w,t),_(d)}return u===void 0&&(u=setTimeout(w,t)),c}return B.cancel=R,B.flush=A,B}var sH=iH,oH=sH,aH=Qn,lH="Expected a function";function cH(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(lH);return aH(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),oH(e,t,{leading:i,maxWait:t,trailing:o})}var uH=cH;const dH=lo(uH),fH=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],hH=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},pH=({shortcuts:e=fH,onShortcut:t})=>{const n=hH(e);fn(()=>{const i=dH(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),yr(()=>{window.removeEventListener("keydown",i)})})},gH=()=>{const e=yo();pH({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},mH=j('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),xH=()=>{gH();const e=Sx(),{persistStatus:t}=Rx(),n=El(),{config:i,initializeColumns:o}=je(),a=$r();return gr(()=>{i().relayUrls.map(async c=>{(await n().ensureRelay(c)).on("notice",d=>{console.error(`NOTICE: ${c}: ${d}`)})})}),gr(()=>{const c=a();c!=null&&o({pubkey:c})}),fn(()=>{t().loggedIn||e("/hello")}),Tx(c=>{console.error("uncaught error: ",c)}),(()=>{const c=mH();return O(c,$(Bz,{}),null),O(c,$(SP,{}),null),O(c,$(zD,{}),null),c})()};export{xH as default};
//# sourceMappingURL=Home-9e5dd43f.js.map
