import{S as dg,s as pu,n as Qx,i as gp,a as mp,t as Xx,f as Yx,c as Jx,r as vp,b as e4,d as fg,g as t4,u as ss,e as hg,h as gu,o as Xr,j as wn,k as Qs,l as ul,p as yp,m as rt,q as P,v as vt,w as $e,x as A,y as w,z as ue,A as Ke,B as dl,C as n4,M as Fe,D as r4,E as Ln,F as hr,G as i4,H as Pe,I as s4,J as Wn,K as Kt,L as o4,N as At,O as a4,P as l4,Q as Ws,R as c4,T as u4}from"./index-0dafe284.js";import{c as Ki,u as ji,a as d4,b as f4,r as zu,d as h4}from"./usePersistStatus-5f6bb2a8.js";class p4 extends dg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),bp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return mu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return mu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),pu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&_p(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const c=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Qx)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),gp||this.currentResult.isStale||!mp(this.options.staleTime))return;const n=Xx(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(gp||this.options.enabled===!1||!mp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Yx.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,c=this.currentResultState,u=this.currentResultOptions,d=t!==i,p=d?t.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:m}=t;let{dataUpdatedAt:v,error:_,errorUpdatedAt:x,fetchStatus:k,status:S}=m,O=!1,U=!1,M;if(n._optimisticResults){const Z=this.hasListeners(),oe=!Z&&bp(t,n),G=Z&&_p(t,i,n,o);(oe||G)&&(k=Jx(t.options.networkMode)?"fetching":"paused",v||(S="loading")),n._optimisticResults==="isRestoring"&&(k="idle")}if(n.keepPreviousData&&!m.dataUpdatedAt&&h!=null&&h.isSuccess&&S!=="error")M=h.data,v=h.dataUpdatedAt,S=h.status,O=!0;else if(n.select&&typeof m.data<"u")if(a&&m.data===c?.data&&n.select===this.selectFn)M=this.selectResult;else try{this.selectFn=n.select,M=n.select(m.data),M=vp(a?.data,M,n),this.selectResult=M,this.selectError=null}catch(Z){this.selectError=Z}else M=m.data;if(typeof n.placeholderData<"u"&&typeof M>"u"&&S==="loading"){let Z;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)Z=a.data;else if(Z=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof Z<"u")try{Z=n.select(Z),this.selectError=null}catch(oe){this.selectError=oe}typeof Z<"u"&&(S="success",M=vp(a?.data,Z,n),U=!0)}this.selectError&&(_=this.selectError,M=this.selectResult,x=Date.now(),S="error");const R=k==="fetching",T=S==="loading",L=S==="error";return{status:S,fetchStatus:k,isLoading:T,isSuccess:S==="success",isError:L,isInitialLoading:T&&R,data:M,dataUpdatedAt:v,error:_,errorUpdatedAt:x,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>p.dataUpdateCount||m.errorUpdateCount>p.errorUpdateCount,isFetching:R,isRefetching:R&&!T,isLoadingError:L&&m.dataUpdatedAt===0,isPaused:k==="paused",isPlaceholderData:U,isPreviousData:O,isRefetchError:L&&m.dataUpdatedAt!==0,isStale:Fu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,pu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:c}=this.options;if(c==="all"||!c&&!this.trackedProps.size)return!0;const u=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const p=d;return this.currentResult[p]!==n[p]&&u.has(p)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!e4(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){fg.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var c,u,d,p;(c=(u=this.options).onError)==null||c.call(u,this.currentResult.error),(d=(p=this.options).onSettled)==null||d.call(p,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function g4(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function bp(e,t){return g4(e,t)||e.state.dataUpdatedAt>0&&mu(e,t,t.refetchOnMount)}function mu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Fu(e,t)}return!1}function _p(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Fu(e,n)}function Fu(e,t){return e.isStaleByTime(t.staleTime)}class m4 extends dg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),pu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:t4(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){fg.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var c,u,d,p;(c=(u=this.mutateOptions).onError)==null||c.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(p=this.mutateOptions).onSettled)==null||d.call(p,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)})})}}function v4(e){return typeof e=="function"}function wp(e,t,n){if(!v4(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function pg(e,t){return typeof e=="function"?e(...t):!!e}function y4(e,t){const n=ss({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[c,u]=Ki(a.getOptimisticResult(o)),[d,{refetch:p,mutate:h}]=hg(()=>new Promise(x=>{c.isFetching&&c.isLoading||(ji(c.data)===i&&x(void 0),x(ji(c.data)))}));gu(()=>{h(()=>ji(c.data)),p()});let m=[];const v=a.subscribe(x=>{m.push(()=>{gu(()=>{const k={...ji(x)};k.data===void 0&&(k.data=i),u(ji(k)),h(()=>ji(x.data)),p()})}),queueMicrotask(()=>{const k=m.pop();k&&k(),m=[]})});Xr(()=>v()),wn(()=>{a.setOptions(o,{listeners:!1})}),Qs(()=>{const x=n.defaultQueryOptions(e);a.setOptions(x)}),Qs(ul(()=>c.status,()=>{if(c.isError&&!c.isFetching&&pg(a.options.useErrorBoundary,[c.error,a.getCurrentQuery()]))throw c.error}));const _={get(x,k){return k==="data"?d():Reflect.get(x,k)}};return new Proxy(c,_)}function os(e,t,n){const[i,o]=Ki(wp(e,t,n));return Qs(()=>{const a=wp(e,t,n);o(a)}),y4(i,p4)}function pi(e,t,n){const[i,o]=Ki(yp(e,t,n)),a=ss({context:i.context}),c=new m4(a,i),u=(m,v)=>{c.mutate(m,v).catch(b4)},[d,p]=Ki({...c.getCurrentResult(),mutate:u,mutateAsync:c.getCurrentResult().mutate});Qs(()=>{const m=yp(e,t,n);o(m),c.setOptions(m)}),Qs(ul(()=>d.status,()=>{if(d.isError&&pg(c.options.useErrorBoundary,[d.error]))throw d.error}));const h=c.subscribe(m=>{p({...m,mutate:u,mutateAsync:m.mutate})});return Xr(h),d}function b4(){}const _4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),gg=(e={})=>(()=>{const t=_4();return rt(t,e,!0,!0),t})();var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function go(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function fl(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var Da={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Da.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",p=500,h="__lodash_placeholder__",m=1,v=2,_=4,x=1,k=2,S=1,O=2,U=4,M=8,R=16,T=32,L=64,F=128,Z=256,oe=512,G=30,re="...",q=800,Q=16,ie=1,Ne=2,H=3,se=1/0,le=9007199254740991,Qe=17976931348623157e292,Ue=0/0,ee=4294967295,Oe=ee-1,ht=ee>>>1,wr=[["ary",F],["bind",S],["bindKey",O],["curry",M],["curryRight",R],["flip",oe],["partial",T],["partialRight",L],["rearg",Z]],X="[object Arguments]",yt="[object Array]",an="[object AsyncFunction]",Mt="[object Boolean]",ce="[object Date]",xt="[object DOMException]",pt="[object Error]",It="[object Function]",jn="[object GeneratorFunction]",it="[object Map]",zt="[object Number]",xr="[object Null]",ut="[object Object]",Bt="[object Promise]",Jn="[object Proxy]",ye="[object RegExp]",He="[object Set]",st="[object String]",$t="[object Symbol]",Vt="[object Undefined]",de="[object WeakMap]",ln="[object WeakSet]",Me="[object ArrayBuffer]",dt="[object DataView]",xn="[object Float32Array]",$n="[object Float64Array]",cn="[object Int8Array]",$r="[object Int16Array]",xi="[object Int32Array]",$i="[object Uint8Array]",ki="[object Uint8ClampedArray]",Ul="[object Uint16Array]",Dl="[object Uint32Array]",vv=/\b__p \+= '';/g,yv=/\b(__p \+=) '' \+/g,bv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,jd=/&(?:amp|lt|gt|quot|#39);/g,Nd=/[&<>"']/g,_v=RegExp(jd.source),wv=RegExp(Nd.source),xv=/<%-([\s\S]+?)%>/g,$v=/<%([\s\S]+?)%>/g,Hd=/<%=([\s\S]+?)%>/g,kv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Cv=/^\w*$/,Sv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jl=/[\\^$.*+?()[\]{}|]/g,Ev=RegExp(jl.source),Nl=/^\s+/,Tv=/\s/,Av=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Iv=/\{\n\/\* \[wrapped with (.+)\] \*/,Rv=/,? & /,Ov=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Lv=/[()=,{}\[\]\/\s]/,Pv=/\\(\\)?/g,Mv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,zd=/\w*$/,Bv=/^[-+]0x[0-9a-f]+$/i,Uv=/^0b[01]+$/i,Dv=/^\[object .+?Constructor\]$/,jv=/^0o[0-7]+$/i,Nv=/^(?:0|[1-9]\d*)$/,Hv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Eo=/($^)/,zv=/['\n\r\u2028\u2029\\]/g,To="\\ud800-\\udfff",Fv="\\u0300-\\u036f",Wv="\\ufe20-\\ufe2f",Zv="\\u20d0-\\u20ff",Fd=Fv+Wv+Zv,Wd="\\u2700-\\u27bf",Zd="a-z\\xdf-\\xf6\\xf8-\\xff",qv="\\xac\\xb1\\xd7\\xf7",Kv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Gv="\\u2000-\\u206f",Vv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",qd="A-Z\\xc0-\\xd6\\xd8-\\xde",Kd="\\ufe0e\\ufe0f",Gd=qv+Kv+Gv+Vv,Hl="['’]",Qv="["+To+"]",Vd="["+Gd+"]",Ao="["+Fd+"]",Qd="\\d+",Xv="["+Wd+"]",Xd="["+Zd+"]",Yd="[^"+To+Gd+Qd+Wd+Zd+qd+"]",zl="\\ud83c[\\udffb-\\udfff]",Yv="(?:"+Ao+"|"+zl+")",Jd="[^"+To+"]",Fl="(?:\\ud83c[\\udde6-\\uddff]){2}",Wl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ci="["+qd+"]",ef="\\u200d",tf="(?:"+Xd+"|"+Yd+")",Jv="(?:"+Ci+"|"+Yd+")",nf="(?:"+Hl+"(?:d|ll|m|re|s|t|ve))?",rf="(?:"+Hl+"(?:D|LL|M|RE|S|T|VE))?",sf=Yv+"?",of="["+Kd+"]?",e2="(?:"+ef+"(?:"+[Jd,Fl,Wl].join("|")+")"+of+sf+")*",t2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",n2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",af=of+sf+e2,r2="(?:"+[Xv,Fl,Wl].join("|")+")"+af,i2="(?:"+[Jd+Ao+"?",Ao,Fl,Wl,Qv].join("|")+")",s2=RegExp(Hl,"g"),o2=RegExp(Ao,"g"),Zl=RegExp(zl+"(?="+zl+")|"+i2+af,"g"),a2=RegExp([Ci+"?"+Xd+"+"+nf+"(?="+[Vd,Ci,"$"].join("|")+")",Jv+"+"+rf+"(?="+[Vd,Ci+tf,"$"].join("|")+")",Ci+"?"+tf+"+"+nf,Ci+"+"+rf,n2,t2,Qd,r2].join("|"),"g"),l2=RegExp("["+ef+To+Fd+Kd+"]"),c2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,u2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],d2=-1,tt={};tt[xn]=tt[$n]=tt[cn]=tt[$r]=tt[xi]=tt[$i]=tt[ki]=tt[Ul]=tt[Dl]=!0,tt[X]=tt[yt]=tt[Me]=tt[Mt]=tt[dt]=tt[ce]=tt[pt]=tt[It]=tt[it]=tt[zt]=tt[ut]=tt[ye]=tt[He]=tt[st]=tt[de]=!1;var Je={};Je[X]=Je[yt]=Je[Me]=Je[dt]=Je[Mt]=Je[ce]=Je[xn]=Je[$n]=Je[cn]=Je[$r]=Je[xi]=Je[it]=Je[zt]=Je[ut]=Je[ye]=Je[He]=Je[st]=Je[$t]=Je[$i]=Je[ki]=Je[Ul]=Je[Dl]=!0,Je[pt]=Je[It]=Je[de]=!1;var f2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},h2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},g2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},m2=parseFloat,v2=parseInt,lf=typeof dr=="object"&&dr&&dr.Object===Object&&dr,y2=typeof self=="object"&&self&&self.Object===Object&&self,St=lf||y2||Function("return this")(),ql=t&&!t.nodeType&&t,ni=ql&&!0&&e&&!e.nodeType&&e,cf=ni&&ni.exports===ql,Kl=cf&&lf.process,un=function(){try{var E=ni&&ni.require&&ni.require("util").types;return E||Kl&&Kl.binding&&Kl.binding("util")}catch{}}(),uf=un&&un.isArrayBuffer,df=un&&un.isDate,ff=un&&un.isMap,hf=un&&un.isRegExp,pf=un&&un.isSet,gf=un&&un.isTypedArray;function Qt(E,D,B){switch(B.length){case 0:return E.call(D);case 1:return E.call(D,B[0]);case 2:return E.call(D,B[0],B[1]);case 3:return E.call(D,B[0],B[1],B[2])}return E.apply(D,B)}function b2(E,D,B,te){for(var be=-1,Ze=E==null?0:E.length;++be<Ze;){var bt=E[be];D(te,bt,B(bt),E)}return te}function dn(E,D){for(var B=-1,te=E==null?0:E.length;++B<te&&D(E[B],B,E)!==!1;);return E}function _2(E,D){for(var B=E==null?0:E.length;B--&&D(E[B],B,E)!==!1;);return E}function mf(E,D){for(var B=-1,te=E==null?0:E.length;++B<te;)if(!D(E[B],B,E))return!1;return!0}function kr(E,D){for(var B=-1,te=E==null?0:E.length,be=0,Ze=[];++B<te;){var bt=E[B];D(bt,B,E)&&(Ze[be++]=bt)}return Ze}function Io(E,D){var B=E==null?0:E.length;return!!B&&Si(E,D,0)>-1}function Gl(E,D,B){for(var te=-1,be=E==null?0:E.length;++te<be;)if(B(D,E[te]))return!0;return!1}function ot(E,D){for(var B=-1,te=E==null?0:E.length,be=Array(te);++B<te;)be[B]=D(E[B],B,E);return be}function Cr(E,D){for(var B=-1,te=D.length,be=E.length;++B<te;)E[be+B]=D[B];return E}function Vl(E,D,B,te){var be=-1,Ze=E==null?0:E.length;for(te&&Ze&&(B=E[++be]);++be<Ze;)B=D(B,E[be],be,E);return B}function w2(E,D,B,te){var be=E==null?0:E.length;for(te&&be&&(B=E[--be]);be--;)B=D(B,E[be],be,E);return B}function Ql(E,D){for(var B=-1,te=E==null?0:E.length;++B<te;)if(D(E[B],B,E))return!0;return!1}var x2=Xl("length");function $2(E){return E.split("")}function k2(E){return E.match(Ov)||[]}function vf(E,D,B){var te;return B(E,function(be,Ze,bt){if(D(be,Ze,bt))return te=Ze,!1}),te}function Ro(E,D,B,te){for(var be=E.length,Ze=B+(te?1:-1);te?Ze--:++Ze<be;)if(D(E[Ze],Ze,E))return Ze;return-1}function Si(E,D,B){return D===D?B2(E,D,B):Ro(E,yf,B)}function C2(E,D,B,te){for(var be=B-1,Ze=E.length;++be<Ze;)if(te(E[be],D))return be;return-1}function yf(E){return E!==E}function bf(E,D){var B=E==null?0:E.length;return B?Jl(E,D)/B:Ue}function Xl(E){return function(D){return D==null?n:D[E]}}function Yl(E){return function(D){return E==null?n:E[D]}}function _f(E,D,B,te,be){return be(E,function(Ze,bt,Ye){B=te?(te=!1,Ze):D(B,Ze,bt,Ye)}),B}function S2(E,D){var B=E.length;for(E.sort(D);B--;)E[B]=E[B].value;return E}function Jl(E,D){for(var B,te=-1,be=E.length;++te<be;){var Ze=D(E[te]);Ze!==n&&(B=B===n?Ze:B+Ze)}return B}function ec(E,D){for(var B=-1,te=Array(E);++B<E;)te[B]=D(B);return te}function E2(E,D){return ot(D,function(B){return[B,E[B]]})}function wf(E){return E&&E.slice(0,Cf(E)+1).replace(Nl,"")}function Xt(E){return function(D){return E(D)}}function tc(E,D){return ot(D,function(B){return E[B]})}function $s(E,D){return E.has(D)}function xf(E,D){for(var B=-1,te=E.length;++B<te&&Si(D,E[B],0)>-1;);return B}function $f(E,D){for(var B=E.length;B--&&Si(D,E[B],0)>-1;);return B}function T2(E,D){for(var B=E.length,te=0;B--;)E[B]===D&&++te;return te}var A2=Yl(f2),I2=Yl(h2);function R2(E){return"\\"+g2[E]}function O2(E,D){return E==null?n:E[D]}function Ei(E){return l2.test(E)}function L2(E){return c2.test(E)}function P2(E){for(var D,B=[];!(D=E.next()).done;)B.push(D.value);return B}function nc(E){var D=-1,B=Array(E.size);return E.forEach(function(te,be){B[++D]=[be,te]}),B}function kf(E,D){return function(B){return E(D(B))}}function Sr(E,D){for(var B=-1,te=E.length,be=0,Ze=[];++B<te;){var bt=E[B];(bt===D||bt===h)&&(E[B]=h,Ze[be++]=B)}return Ze}function Oo(E){var D=-1,B=Array(E.size);return E.forEach(function(te){B[++D]=te}),B}function M2(E){var D=-1,B=Array(E.size);return E.forEach(function(te){B[++D]=[te,te]}),B}function B2(E,D,B){for(var te=B-1,be=E.length;++te<be;)if(E[te]===D)return te;return-1}function U2(E,D,B){for(var te=B+1;te--;)if(E[te]===D)return te;return te}function Ti(E){return Ei(E)?j2(E):x2(E)}function kn(E){return Ei(E)?N2(E):$2(E)}function Cf(E){for(var D=E.length;D--&&Tv.test(E.charAt(D)););return D}var D2=Yl(p2);function j2(E){for(var D=Zl.lastIndex=0;Zl.test(E);)++D;return D}function N2(E){return E.match(Zl)||[]}function H2(E){return E.match(a2)||[]}var z2=function E(D){D=D==null?St:Ai.defaults(St.Object(),D,Ai.pick(St,u2));var B=D.Array,te=D.Date,be=D.Error,Ze=D.Function,bt=D.Math,Ye=D.Object,rc=D.RegExp,F2=D.String,fn=D.TypeError,Lo=B.prototype,W2=Ze.prototype,Ii=Ye.prototype,Po=D["__core-js_shared__"],Mo=W2.toString,Ve=Ii.hasOwnProperty,Z2=0,Sf=function(){var r=/[^.]+$/.exec(Po&&Po.keys&&Po.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Bo=Ii.toString,q2=Mo.call(Ye),K2=St._,G2=rc("^"+Mo.call(Ve).replace(jl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Uo=cf?D.Buffer:n,Er=D.Symbol,Do=D.Uint8Array,Ef=Uo?Uo.allocUnsafe:n,jo=kf(Ye.getPrototypeOf,Ye),Tf=Ye.create,Af=Ii.propertyIsEnumerable,No=Lo.splice,If=Er?Er.isConcatSpreadable:n,ks=Er?Er.iterator:n,ri=Er?Er.toStringTag:n,Ho=function(){try{var r=li(Ye,"defineProperty");return r({},"",{}),r}catch{}}(),V2=D.clearTimeout!==St.clearTimeout&&D.clearTimeout,Q2=te&&te.now!==St.Date.now&&te.now,X2=D.setTimeout!==St.setTimeout&&D.setTimeout,zo=bt.ceil,Fo=bt.floor,ic=Ye.getOwnPropertySymbols,Y2=Uo?Uo.isBuffer:n,Rf=D.isFinite,J2=Lo.join,ey=kf(Ye.keys,Ye),_t=bt.max,Rt=bt.min,ty=te.now,ny=D.parseInt,Of=bt.random,ry=Lo.reverse,sc=li(D,"DataView"),Cs=li(D,"Map"),oc=li(D,"Promise"),Ri=li(D,"Set"),Ss=li(D,"WeakMap"),Es=li(Ye,"create"),Wo=Ss&&new Ss,Oi={},iy=ci(sc),sy=ci(Cs),oy=ci(oc),ay=ci(Ri),ly=ci(Ss),Zo=Er?Er.prototype:n,Ts=Zo?Zo.valueOf:n,Lf=Zo?Zo.toString:n;function y(r){if(ft(r)&&!we(r)&&!(r instanceof Le)){if(r instanceof hn)return r;if(Ve.call(r,"__wrapped__"))return Ph(r)}return new hn(r)}var Li=function(){function r(){}return function(s){if(!lt(s))return{};if(Tf)return Tf(s);r.prototype=s;var l=new r;return r.prototype=n,l}}();function qo(){}function hn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:xv,evaluate:$v,interpolate:Hd,variable:"",imports:{_:y}},y.prototype=qo.prototype,y.prototype.constructor=y,hn.prototype=Li(qo.prototype),hn.prototype.constructor=hn;function Le(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ee,this.__views__=[]}function cy(){var r=new Le(this.__wrapped__);return r.__actions__=Ft(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Ft(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Ft(this.__views__),r}function uy(){if(this.__filtered__){var r=new Le(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function dy(){var r=this.__wrapped__.value(),s=this.__dir__,l=we(r),f=s<0,g=l?r.length:0,b=$b(0,g,this.__views__),$=b.start,C=b.end,I=C-$,j=f?C:$-1,N=this.__iteratees__,W=N.length,V=0,ae=Rt(I,this.__takeCount__);if(!l||!f&&g==I&&ae==I)return rh(r,this.__actions__);var ge=[];e:for(;I--&&V<ae;){j+=s;for(var Ce=-1,me=r[j];++Ce<W;){var Ie=N[Ce],Be=Ie.iteratee,en=Ie.type,jt=Be(me);if(en==Ne)me=jt;else if(!jt){if(en==ie)continue e;break e}}ge[V++]=me}return ge}Le.prototype=Li(qo.prototype),Le.prototype.constructor=Le;function ii(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function fy(){this.__data__=Es?Es(null):{},this.size=0}function hy(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function py(r){var s=this.__data__;if(Es){var l=s[r];return l===d?n:l}return Ve.call(s,r)?s[r]:n}function gy(r){var s=this.__data__;return Es?s[r]!==n:Ve.call(s,r)}function my(r,s){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=Es&&s===n?d:s,this}ii.prototype.clear=fy,ii.prototype.delete=hy,ii.prototype.get=py,ii.prototype.has=gy,ii.prototype.set=my;function er(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function vy(){this.__data__=[],this.size=0}function yy(r){var s=this.__data__,l=Ko(s,r);if(l<0)return!1;var f=s.length-1;return l==f?s.pop():No.call(s,l,1),--this.size,!0}function by(r){var s=this.__data__,l=Ko(s,r);return l<0?n:s[l][1]}function _y(r){return Ko(this.__data__,r)>-1}function wy(r,s){var l=this.__data__,f=Ko(l,r);return f<0?(++this.size,l.push([r,s])):l[f][1]=s,this}er.prototype.clear=vy,er.prototype.delete=yy,er.prototype.get=by,er.prototype.has=_y,er.prototype.set=wy;function tr(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function xy(){this.size=0,this.__data__={hash:new ii,map:new(Cs||er),string:new ii}}function $y(r){var s=sa(this,r).delete(r);return this.size-=s?1:0,s}function ky(r){return sa(this,r).get(r)}function Cy(r){return sa(this,r).has(r)}function Sy(r,s){var l=sa(this,r),f=l.size;return l.set(r,s),this.size+=l.size==f?0:1,this}tr.prototype.clear=xy,tr.prototype.delete=$y,tr.prototype.get=ky,tr.prototype.has=Cy,tr.prototype.set=Sy;function si(r){var s=-1,l=r==null?0:r.length;for(this.__data__=new tr;++s<l;)this.add(r[s])}function Ey(r){return this.__data__.set(r,d),this}function Ty(r){return this.__data__.has(r)}si.prototype.add=si.prototype.push=Ey,si.prototype.has=Ty;function Cn(r){var s=this.__data__=new er(r);this.size=s.size}function Ay(){this.__data__=new er,this.size=0}function Iy(r){var s=this.__data__,l=s.delete(r);return this.size=s.size,l}function Ry(r){return this.__data__.get(r)}function Oy(r){return this.__data__.has(r)}function Ly(r,s){var l=this.__data__;if(l instanceof er){var f=l.__data__;if(!Cs||f.length<o-1)return f.push([r,s]),this.size=++l.size,this;l=this.__data__=new tr(f)}return l.set(r,s),this.size=l.size,this}Cn.prototype.clear=Ay,Cn.prototype.delete=Iy,Cn.prototype.get=Ry,Cn.prototype.has=Oy,Cn.prototype.set=Ly;function Pf(r,s){var l=we(r),f=!l&&ui(r),g=!l&&!f&&Or(r),b=!l&&!f&&!g&&Ui(r),$=l||f||g||b,C=$?ec(r.length,F2):[],I=C.length;for(var j in r)(s||Ve.call(r,j))&&!($&&(j=="length"||g&&(j=="offset"||j=="parent")||b&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||sr(j,I)))&&C.push(j);return C}function Mf(r){var s=r.length;return s?r[vc(0,s-1)]:n}function Py(r,s){return oa(Ft(r),oi(s,0,r.length))}function My(r){return oa(Ft(r))}function ac(r,s,l){(l!==n&&!Sn(r[s],l)||l===n&&!(s in r))&&nr(r,s,l)}function As(r,s,l){var f=r[s];(!(Ve.call(r,s)&&Sn(f,l))||l===n&&!(s in r))&&nr(r,s,l)}function Ko(r,s){for(var l=r.length;l--;)if(Sn(r[l][0],s))return l;return-1}function By(r,s,l,f){return Tr(r,function(g,b,$){s(f,g,l(g),$)}),f}function Bf(r,s){return r&&Hn(s,kt(s),r)}function Uy(r,s){return r&&Hn(s,Zt(s),r)}function nr(r,s,l){s=="__proto__"&&Ho?Ho(r,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[s]=l}function lc(r,s){for(var l=-1,f=s.length,g=B(f),b=r==null;++l<f;)g[l]=b?n:zc(r,s[l]);return g}function oi(r,s,l){return r===r&&(l!==n&&(r=r<=l?r:l),s!==n&&(r=r>=s?r:s)),r}function pn(r,s,l,f,g,b){var $,C=s&m,I=s&v,j=s&_;if(l&&($=g?l(r,f,g,b):l(r)),$!==n)return $;if(!lt(r))return r;var N=we(r);if(N){if($=Cb(r),!C)return Ft(r,$)}else{var W=Ot(r),V=W==It||W==jn;if(Or(r))return oh(r,C);if(W==ut||W==X||V&&!g){if($=I||V?{}:Ch(r),!C)return I?pb(r,Uy($,r)):hb(r,Bf($,r))}else{if(!Je[W])return g?r:{};$=Sb(r,W,C)}}b||(b=new Cn);var ae=b.get(r);if(ae)return ae;b.set(r,$),ep(r)?r.forEach(function(me){$.add(pn(me,s,l,me,r,b))}):Yh(r)&&r.forEach(function(me,Ie){$.set(Ie,pn(me,s,l,Ie,r,b))});var ge=j?I?Tc:Ec:I?Zt:kt,Ce=N?n:ge(r);return dn(Ce||r,function(me,Ie){Ce&&(Ie=me,me=r[Ie]),As($,Ie,pn(me,s,l,Ie,r,b))}),$}function Dy(r){var s=kt(r);return function(l){return Uf(l,r,s)}}function Uf(r,s,l){var f=l.length;if(r==null)return!f;for(r=Ye(r);f--;){var g=l[f],b=s[g],$=r[g];if($===n&&!(g in r)||!b($))return!1}return!0}function Df(r,s,l){if(typeof r!="function")throw new fn(c);return Bs(function(){r.apply(n,l)},s)}function Is(r,s,l,f){var g=-1,b=Io,$=!0,C=r.length,I=[],j=s.length;if(!C)return I;l&&(s=ot(s,Xt(l))),f?(b=Gl,$=!1):s.length>=o&&(b=$s,$=!1,s=new si(s));e:for(;++g<C;){var N=r[g],W=l==null?N:l(N);if(N=f||N!==0?N:0,$&&W===W){for(var V=j;V--;)if(s[V]===W)continue e;I.push(N)}else b(s,W,f)||I.push(N)}return I}var Tr=dh(Nn),jf=dh(uc,!0);function jy(r,s){var l=!0;return Tr(r,function(f,g,b){return l=!!s(f,g,b),l}),l}function Go(r,s,l){for(var f=-1,g=r.length;++f<g;){var b=r[f],$=s(b);if($!=null&&(C===n?$===$&&!Jt($):l($,C)))var C=$,I=b}return I}function Ny(r,s,l,f){var g=r.length;for(l=xe(l),l<0&&(l=-l>g?0:g+l),f=f===n||f>g?g:xe(f),f<0&&(f+=g),f=l>f?0:np(f);l<f;)r[l++]=s;return r}function Nf(r,s){var l=[];return Tr(r,function(f,g,b){s(f,g,b)&&l.push(f)}),l}function Et(r,s,l,f,g){var b=-1,$=r.length;for(l||(l=Tb),g||(g=[]);++b<$;){var C=r[b];s>0&&l(C)?s>1?Et(C,s-1,l,f,g):Cr(g,C):f||(g[g.length]=C)}return g}var cc=fh(),Hf=fh(!0);function Nn(r,s){return r&&cc(r,s,kt)}function uc(r,s){return r&&Hf(r,s,kt)}function Vo(r,s){return kr(s,function(l){return or(r[l])})}function ai(r,s){s=Ir(s,r);for(var l=0,f=s.length;r!=null&&l<f;)r=r[zn(s[l++])];return l&&l==f?r:n}function zf(r,s,l){var f=s(r);return we(r)?f:Cr(f,l(r))}function Ut(r){return r==null?r===n?Vt:xr:ri&&ri in Ye(r)?xb(r):Mb(r)}function dc(r,s){return r>s}function Hy(r,s){return r!=null&&Ve.call(r,s)}function zy(r,s){return r!=null&&s in Ye(r)}function Fy(r,s,l){return r>=Rt(s,l)&&r<_t(s,l)}function fc(r,s,l){for(var f=l?Gl:Io,g=r[0].length,b=r.length,$=b,C=B(b),I=1/0,j=[];$--;){var N=r[$];$&&s&&(N=ot(N,Xt(s))),I=Rt(N.length,I),C[$]=!l&&(s||g>=120&&N.length>=120)?new si($&&N):n}N=r[0];var W=-1,V=C[0];e:for(;++W<g&&j.length<I;){var ae=N[W],ge=s?s(ae):ae;if(ae=l||ae!==0?ae:0,!(V?$s(V,ge):f(j,ge,l))){for($=b;--$;){var Ce=C[$];if(!(Ce?$s(Ce,ge):f(r[$],ge,l)))continue e}V&&V.push(ge),j.push(ae)}}return j}function Wy(r,s,l,f){return Nn(r,function(g,b,$){s(f,l(g),b,$)}),f}function Rs(r,s,l){s=Ir(s,r),r=Ah(r,s);var f=r==null?r:r[zn(mn(s))];return f==null?n:Qt(f,r,l)}function Ff(r){return ft(r)&&Ut(r)==X}function Zy(r){return ft(r)&&Ut(r)==Me}function qy(r){return ft(r)&&Ut(r)==ce}function Os(r,s,l,f,g){return r===s?!0:r==null||s==null||!ft(r)&&!ft(s)?r!==r&&s!==s:Ky(r,s,l,f,Os,g)}function Ky(r,s,l,f,g,b){var $=we(r),C=we(s),I=$?yt:Ot(r),j=C?yt:Ot(s);I=I==X?ut:I,j=j==X?ut:j;var N=I==ut,W=j==ut,V=I==j;if(V&&Or(r)){if(!Or(s))return!1;$=!0,N=!1}if(V&&!N)return b||(b=new Cn),$||Ui(r)?xh(r,s,l,f,g,b):_b(r,s,I,l,f,g,b);if(!(l&x)){var ae=N&&Ve.call(r,"__wrapped__"),ge=W&&Ve.call(s,"__wrapped__");if(ae||ge){var Ce=ae?r.value():r,me=ge?s.value():s;return b||(b=new Cn),g(Ce,me,l,f,b)}}return V?(b||(b=new Cn),wb(r,s,l,f,g,b)):!1}function Gy(r){return ft(r)&&Ot(r)==it}function hc(r,s,l,f){var g=l.length,b=g,$=!f;if(r==null)return!b;for(r=Ye(r);g--;){var C=l[g];if($&&C[2]?C[1]!==r[C[0]]:!(C[0]in r))return!1}for(;++g<b;){C=l[g];var I=C[0],j=r[I],N=C[1];if($&&C[2]){if(j===n&&!(I in r))return!1}else{var W=new Cn;if(f)var V=f(j,N,I,r,s,W);if(!(V===n?Os(N,j,x|k,f,W):V))return!1}}return!0}function Wf(r){if(!lt(r)||Ib(r))return!1;var s=or(r)?G2:Dv;return s.test(ci(r))}function Vy(r){return ft(r)&&Ut(r)==ye}function Qy(r){return ft(r)&&Ot(r)==He}function Xy(r){return ft(r)&&fa(r.length)&&!!tt[Ut(r)]}function Zf(r){return typeof r=="function"?r:r==null?qt:typeof r=="object"?we(r)?Gf(r[0],r[1]):Kf(r):hp(r)}function pc(r){if(!Ms(r))return ey(r);var s=[];for(var l in Ye(r))Ve.call(r,l)&&l!="constructor"&&s.push(l);return s}function Yy(r){if(!lt(r))return Pb(r);var s=Ms(r),l=[];for(var f in r)f=="constructor"&&(s||!Ve.call(r,f))||l.push(f);return l}function gc(r,s){return r<s}function qf(r,s){var l=-1,f=Wt(r)?B(r.length):[];return Tr(r,function(g,b,$){f[++l]=s(g,b,$)}),f}function Kf(r){var s=Ic(r);return s.length==1&&s[0][2]?Eh(s[0][0],s[0][1]):function(l){return l===r||hc(l,r,s)}}function Gf(r,s){return Oc(r)&&Sh(s)?Eh(zn(r),s):function(l){var f=zc(l,r);return f===n&&f===s?Fc(l,r):Os(s,f,x|k)}}function Qo(r,s,l,f,g){r!==s&&cc(s,function(b,$){if(g||(g=new Cn),lt(b))Jy(r,s,$,l,Qo,f,g);else{var C=f?f(Pc(r,$),b,$+"",r,s,g):n;C===n&&(C=b),ac(r,$,C)}},Zt)}function Jy(r,s,l,f,g,b,$){var C=Pc(r,l),I=Pc(s,l),j=$.get(I);if(j){ac(r,l,j);return}var N=b?b(C,I,l+"",r,s,$):n,W=N===n;if(W){var V=we(I),ae=!V&&Or(I),ge=!V&&!ae&&Ui(I);N=I,V||ae||ge?we(C)?N=C:gt(C)?N=Ft(C):ae?(W=!1,N=oh(I,!0)):ge?(W=!1,N=ah(I,!0)):N=[]:Us(I)||ui(I)?(N=C,ui(C)?N=rp(C):(!lt(C)||or(C))&&(N=Ch(I))):W=!1}W&&($.set(I,N),g(N,I,f,b,$),$.delete(I)),ac(r,l,N)}function Vf(r,s){var l=r.length;if(l)return s+=s<0?l:0,sr(s,l)?r[s]:n}function Qf(r,s,l){s.length?s=ot(s,function(b){return we(b)?function($){return ai($,b.length===1?b[0]:b)}:b}):s=[qt];var f=-1;s=ot(s,Xt(he()));var g=qf(r,function(b,$,C){var I=ot(s,function(j){return j(b)});return{criteria:I,index:++f,value:b}});return S2(g,function(b,$){return fb(b,$,l)})}function eb(r,s){return Xf(r,s,function(l,f){return Fc(r,f)})}function Xf(r,s,l){for(var f=-1,g=s.length,b={};++f<g;){var $=s[f],C=ai(r,$);l(C,$)&&Ls(b,Ir($,r),C)}return b}function tb(r){return function(s){return ai(s,r)}}function mc(r,s,l,f){var g=f?C2:Si,b=-1,$=s.length,C=r;for(r===s&&(s=Ft(s)),l&&(C=ot(r,Xt(l)));++b<$;)for(var I=0,j=s[b],N=l?l(j):j;(I=g(C,N,I,f))>-1;)C!==r&&No.call(C,I,1),No.call(r,I,1);return r}function Yf(r,s){for(var l=r?s.length:0,f=l-1;l--;){var g=s[l];if(l==f||g!==b){var b=g;sr(g)?No.call(r,g,1):_c(r,g)}}return r}function vc(r,s){return r+Fo(Of()*(s-r+1))}function nb(r,s,l,f){for(var g=-1,b=_t(zo((s-r)/(l||1)),0),$=B(b);b--;)$[f?b:++g]=r,r+=l;return $}function yc(r,s){var l="";if(!r||s<1||s>le)return l;do s%2&&(l+=r),s=Fo(s/2),s&&(r+=r);while(s);return l}function Ee(r,s){return Mc(Th(r,s,qt),r+"")}function rb(r){return Mf(Di(r))}function ib(r,s){var l=Di(r);return oa(l,oi(s,0,l.length))}function Ls(r,s,l,f){if(!lt(r))return r;s=Ir(s,r);for(var g=-1,b=s.length,$=b-1,C=r;C!=null&&++g<b;){var I=zn(s[g]),j=l;if(I==="__proto__"||I==="constructor"||I==="prototype")return r;if(g!=$){var N=C[I];j=f?f(N,I,C):n,j===n&&(j=lt(N)?N:sr(s[g+1])?[]:{})}As(C,I,j),C=C[I]}return r}var Jf=Wo?function(r,s){return Wo.set(r,s),r}:qt,sb=Ho?function(r,s){return Ho(r,"toString",{configurable:!0,enumerable:!1,value:Zc(s),writable:!0})}:qt;function ob(r){return oa(Di(r))}function gn(r,s,l){var f=-1,g=r.length;s<0&&(s=-s>g?0:g+s),l=l>g?g:l,l<0&&(l+=g),g=s>l?0:l-s>>>0,s>>>=0;for(var b=B(g);++f<g;)b[f]=r[f+s];return b}function ab(r,s){var l;return Tr(r,function(f,g,b){return l=s(f,g,b),!l}),!!l}function Xo(r,s,l){var f=0,g=r==null?f:r.length;if(typeof s=="number"&&s===s&&g<=ht){for(;f<g;){var b=f+g>>>1,$=r[b];$!==null&&!Jt($)&&(l?$<=s:$<s)?f=b+1:g=b}return g}return bc(r,s,qt,l)}function bc(r,s,l,f){var g=0,b=r==null?0:r.length;if(b===0)return 0;s=l(s);for(var $=s!==s,C=s===null,I=Jt(s),j=s===n;g<b;){var N=Fo((g+b)/2),W=l(r[N]),V=W!==n,ae=W===null,ge=W===W,Ce=Jt(W);if($)var me=f||ge;else j?me=ge&&(f||V):C?me=ge&&V&&(f||!ae):I?me=ge&&V&&!ae&&(f||!Ce):ae||Ce?me=!1:me=f?W<=s:W<s;me?g=N+1:b=N}return Rt(b,Oe)}function eh(r,s){for(var l=-1,f=r.length,g=0,b=[];++l<f;){var $=r[l],C=s?s($):$;if(!l||!Sn(C,I)){var I=C;b[g++]=$===0?0:$}}return b}function th(r){return typeof r=="number"?r:Jt(r)?Ue:+r}function Yt(r){if(typeof r=="string")return r;if(we(r))return ot(r,Yt)+"";if(Jt(r))return Lf?Lf.call(r):"";var s=r+"";return s=="0"&&1/r==-se?"-0":s}function Ar(r,s,l){var f=-1,g=Io,b=r.length,$=!0,C=[],I=C;if(l)$=!1,g=Gl;else if(b>=o){var j=s?null:yb(r);if(j)return Oo(j);$=!1,g=$s,I=new si}else I=s?[]:C;e:for(;++f<b;){var N=r[f],W=s?s(N):N;if(N=l||N!==0?N:0,$&&W===W){for(var V=I.length;V--;)if(I[V]===W)continue e;s&&I.push(W),C.push(N)}else g(I,W,l)||(I!==C&&I.push(W),C.push(N))}return C}function _c(r,s){return s=Ir(s,r),r=Ah(r,s),r==null||delete r[zn(mn(s))]}function nh(r,s,l,f){return Ls(r,s,l(ai(r,s)),f)}function Yo(r,s,l,f){for(var g=r.length,b=f?g:-1;(f?b--:++b<g)&&s(r[b],b,r););return l?gn(r,f?0:b,f?b+1:g):gn(r,f?b+1:0,f?g:b)}function rh(r,s){var l=r;return l instanceof Le&&(l=l.value()),Vl(s,function(f,g){return g.func.apply(g.thisArg,Cr([f],g.args))},l)}function wc(r,s,l){var f=r.length;if(f<2)return f?Ar(r[0]):[];for(var g=-1,b=B(f);++g<f;)for(var $=r[g],C=-1;++C<f;)C!=g&&(b[g]=Is(b[g]||$,r[C],s,l));return Ar(Et(b,1),s,l)}function ih(r,s,l){for(var f=-1,g=r.length,b=s.length,$={};++f<g;){var C=f<b?s[f]:n;l($,r[f],C)}return $}function xc(r){return gt(r)?r:[]}function $c(r){return typeof r=="function"?r:qt}function Ir(r,s){return we(r)?r:Oc(r,s)?[r]:Lh(Ge(r))}var lb=Ee;function Rr(r,s,l){var f=r.length;return l=l===n?f:l,!s&&l>=f?r:gn(r,s,l)}var sh=V2||function(r){return St.clearTimeout(r)};function oh(r,s){if(s)return r.slice();var l=r.length,f=Ef?Ef(l):new r.constructor(l);return r.copy(f),f}function kc(r){var s=new r.constructor(r.byteLength);return new Do(s).set(new Do(r)),s}function cb(r,s){var l=s?kc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function ub(r){var s=new r.constructor(r.source,zd.exec(r));return s.lastIndex=r.lastIndex,s}function db(r){return Ts?Ye(Ts.call(r)):{}}function ah(r,s){var l=s?kc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function lh(r,s){if(r!==s){var l=r!==n,f=r===null,g=r===r,b=Jt(r),$=s!==n,C=s===null,I=s===s,j=Jt(s);if(!C&&!j&&!b&&r>s||b&&$&&I&&!C&&!j||f&&$&&I||!l&&I||!g)return 1;if(!f&&!b&&!j&&r<s||j&&l&&g&&!f&&!b||C&&l&&g||!$&&g||!I)return-1}return 0}function fb(r,s,l){for(var f=-1,g=r.criteria,b=s.criteria,$=g.length,C=l.length;++f<$;){var I=lh(g[f],b[f]);if(I){if(f>=C)return I;var j=l[f];return I*(j=="desc"?-1:1)}}return r.index-s.index}function ch(r,s,l,f){for(var g=-1,b=r.length,$=l.length,C=-1,I=s.length,j=_t(b-$,0),N=B(I+j),W=!f;++C<I;)N[C]=s[C];for(;++g<$;)(W||g<b)&&(N[l[g]]=r[g]);for(;j--;)N[C++]=r[g++];return N}function uh(r,s,l,f){for(var g=-1,b=r.length,$=-1,C=l.length,I=-1,j=s.length,N=_t(b-C,0),W=B(N+j),V=!f;++g<N;)W[g]=r[g];for(var ae=g;++I<j;)W[ae+I]=s[I];for(;++$<C;)(V||g<b)&&(W[ae+l[$]]=r[g++]);return W}function Ft(r,s){var l=-1,f=r.length;for(s||(s=B(f));++l<f;)s[l]=r[l];return s}function Hn(r,s,l,f){var g=!l;l||(l={});for(var b=-1,$=s.length;++b<$;){var C=s[b],I=f?f(l[C],r[C],C,l,r):n;I===n&&(I=r[C]),g?nr(l,C,I):As(l,C,I)}return l}function hb(r,s){return Hn(r,Rc(r),s)}function pb(r,s){return Hn(r,$h(r),s)}function Jo(r,s){return function(l,f){var g=we(l)?b2:By,b=s?s():{};return g(l,r,he(f,2),b)}}function Pi(r){return Ee(function(s,l){var f=-1,g=l.length,b=g>1?l[g-1]:n,$=g>2?l[2]:n;for(b=r.length>3&&typeof b=="function"?(g--,b):n,$&&Dt(l[0],l[1],$)&&(b=g<3?n:b,g=1),s=Ye(s);++f<g;){var C=l[f];C&&r(s,C,f,b)}return s})}function dh(r,s){return function(l,f){if(l==null)return l;if(!Wt(l))return r(l,f);for(var g=l.length,b=s?g:-1,$=Ye(l);(s?b--:++b<g)&&f($[b],b,$)!==!1;);return l}}function fh(r){return function(s,l,f){for(var g=-1,b=Ye(s),$=f(s),C=$.length;C--;){var I=$[r?C:++g];if(l(b[I],I,b)===!1)break}return s}}function gb(r,s,l){var f=s&S,g=Ps(r);function b(){var $=this&&this!==St&&this instanceof b?g:r;return $.apply(f?l:this,arguments)}return b}function hh(r){return function(s){s=Ge(s);var l=Ei(s)?kn(s):n,f=l?l[0]:s.charAt(0),g=l?Rr(l,1).join(""):s.slice(1);return f[r]()+g}}function Mi(r){return function(s){return Vl(dp(up(s).replace(s2,"")),r,"")}}function Ps(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Li(r.prototype),f=r.apply(l,s);return lt(f)?f:l}}function mb(r,s,l){var f=Ps(r);function g(){for(var b=arguments.length,$=B(b),C=b,I=Bi(g);C--;)$[C]=arguments[C];var j=b<3&&$[0]!==I&&$[b-1]!==I?[]:Sr($,I);if(b-=j.length,b<l)return yh(r,s,ea,g.placeholder,n,$,j,n,n,l-b);var N=this&&this!==St&&this instanceof g?f:r;return Qt(N,this,$)}return g}function ph(r){return function(s,l,f){var g=Ye(s);if(!Wt(s)){var b=he(l,3);s=kt(s),l=function(C){return b(g[C],C,g)}}var $=r(s,l,f);return $>-1?g[b?s[$]:$]:n}}function gh(r){return ir(function(s){var l=s.length,f=l,g=hn.prototype.thru;for(r&&s.reverse();f--;){var b=s[f];if(typeof b!="function")throw new fn(c);if(g&&!$&&ia(b)=="wrapper")var $=new hn([],!0)}for(f=$?f:l;++f<l;){b=s[f];var C=ia(b),I=C=="wrapper"?Ac(b):n;I&&Lc(I[0])&&I[1]==(F|M|T|Z)&&!I[4].length&&I[9]==1?$=$[ia(I[0])].apply($,I[3]):$=b.length==1&&Lc(b)?$[C]():$.thru(b)}return function(){var j=arguments,N=j[0];if($&&j.length==1&&we(N))return $.plant(N).value();for(var W=0,V=l?s[W].apply(this,j):N;++W<l;)V=s[W].call(this,V);return V}})}function ea(r,s,l,f,g,b,$,C,I,j){var N=s&F,W=s&S,V=s&O,ae=s&(M|R),ge=s&oe,Ce=V?n:Ps(r);function me(){for(var Ie=arguments.length,Be=B(Ie),en=Ie;en--;)Be[en]=arguments[en];if(ae)var jt=Bi(me),tn=T2(Be,jt);if(f&&(Be=ch(Be,f,g,ae)),b&&(Be=uh(Be,b,$,ae)),Ie-=tn,ae&&Ie<j){var mt=Sr(Be,jt);return yh(r,s,ea,me.placeholder,l,Be,mt,C,I,j-Ie)}var En=W?l:this,lr=V?En[r]:r;return Ie=Be.length,C?Be=Bb(Be,C):ge&&Ie>1&&Be.reverse(),N&&I<Ie&&(Be.length=I),this&&this!==St&&this instanceof me&&(lr=Ce||Ps(lr)),lr.apply(En,Be)}return me}function mh(r,s){return function(l,f){return Wy(l,r,s(f),{})}}function ta(r,s){return function(l,f){var g;if(l===n&&f===n)return s;if(l!==n&&(g=l),f!==n){if(g===n)return f;typeof l=="string"||typeof f=="string"?(l=Yt(l),f=Yt(f)):(l=th(l),f=th(f)),g=r(l,f)}return g}}function Cc(r){return ir(function(s){return s=ot(s,Xt(he())),Ee(function(l){var f=this;return r(s,function(g){return Qt(g,f,l)})})})}function na(r,s){s=s===n?" ":Yt(s);var l=s.length;if(l<2)return l?yc(s,r):s;var f=yc(s,zo(r/Ti(s)));return Ei(s)?Rr(kn(f),0,r).join(""):f.slice(0,r)}function vb(r,s,l,f){var g=s&S,b=Ps(r);function $(){for(var C=-1,I=arguments.length,j=-1,N=f.length,W=B(N+I),V=this&&this!==St&&this instanceof $?b:r;++j<N;)W[j]=f[j];for(;I--;)W[j++]=arguments[++C];return Qt(V,g?l:this,W)}return $}function vh(r){return function(s,l,f){return f&&typeof f!="number"&&Dt(s,l,f)&&(l=f=n),s=ar(s),l===n?(l=s,s=0):l=ar(l),f=f===n?s<l?1:-1:ar(f),nb(s,l,f,r)}}function ra(r){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=vn(s),l=vn(l)),r(s,l)}}function yh(r,s,l,f,g,b,$,C,I,j){var N=s&M,W=N?$:n,V=N?n:$,ae=N?b:n,ge=N?n:b;s|=N?T:L,s&=~(N?L:T),s&U||(s&=~(S|O));var Ce=[r,s,g,ae,W,ge,V,C,I,j],me=l.apply(n,Ce);return Lc(r)&&Ih(me,Ce),me.placeholder=f,Rh(me,r,s)}function Sc(r){var s=bt[r];return function(l,f){if(l=vn(l),f=f==null?0:Rt(xe(f),292),f&&Rf(l)){var g=(Ge(l)+"e").split("e"),b=s(g[0]+"e"+(+g[1]+f));return g=(Ge(b)+"e").split("e"),+(g[0]+"e"+(+g[1]-f))}return s(l)}}var yb=Ri&&1/Oo(new Ri([,-0]))[1]==se?function(r){return new Ri(r)}:Gc;function bh(r){return function(s){var l=Ot(s);return l==it?nc(s):l==He?M2(s):E2(s,r(s))}}function rr(r,s,l,f,g,b,$,C){var I=s&O;if(!I&&typeof r!="function")throw new fn(c);var j=f?f.length:0;if(j||(s&=~(T|L),f=g=n),$=$===n?$:_t(xe($),0),C=C===n?C:xe(C),j-=g?g.length:0,s&L){var N=f,W=g;f=g=n}var V=I?n:Ac(r),ae=[r,s,l,f,g,N,W,b,$,C];if(V&&Lb(ae,V),r=ae[0],s=ae[1],l=ae[2],f=ae[3],g=ae[4],C=ae[9]=ae[9]===n?I?0:r.length:_t(ae[9]-j,0),!C&&s&(M|R)&&(s&=~(M|R)),!s||s==S)var ge=gb(r,s,l);else s==M||s==R?ge=mb(r,s,C):(s==T||s==(S|T))&&!g.length?ge=vb(r,s,l,f):ge=ea.apply(n,ae);var Ce=V?Jf:Ih;return Rh(Ce(ge,ae),r,s)}function _h(r,s,l,f){return r===n||Sn(r,Ii[l])&&!Ve.call(f,l)?s:r}function wh(r,s,l,f,g,b){return lt(r)&&lt(s)&&(b.set(s,r),Qo(r,s,n,wh,b),b.delete(s)),r}function bb(r){return Us(r)?n:r}function xh(r,s,l,f,g,b){var $=l&x,C=r.length,I=s.length;if(C!=I&&!($&&I>C))return!1;var j=b.get(r),N=b.get(s);if(j&&N)return j==s&&N==r;var W=-1,V=!0,ae=l&k?new si:n;for(b.set(r,s),b.set(s,r);++W<C;){var ge=r[W],Ce=s[W];if(f)var me=$?f(Ce,ge,W,s,r,b):f(ge,Ce,W,r,s,b);if(me!==n){if(me)continue;V=!1;break}if(ae){if(!Ql(s,function(Ie,Be){if(!$s(ae,Be)&&(ge===Ie||g(ge,Ie,l,f,b)))return ae.push(Be)})){V=!1;break}}else if(!(ge===Ce||g(ge,Ce,l,f,b))){V=!1;break}}return b.delete(r),b.delete(s),V}function _b(r,s,l,f,g,b,$){switch(l){case dt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Me:return!(r.byteLength!=s.byteLength||!b(new Do(r),new Do(s)));case Mt:case ce:case zt:return Sn(+r,+s);case pt:return r.name==s.name&&r.message==s.message;case ye:case st:return r==s+"";case it:var C=nc;case He:var I=f&x;if(C||(C=Oo),r.size!=s.size&&!I)return!1;var j=$.get(r);if(j)return j==s;f|=k,$.set(r,s);var N=xh(C(r),C(s),f,g,b,$);return $.delete(r),N;case $t:if(Ts)return Ts.call(r)==Ts.call(s)}return!1}function wb(r,s,l,f,g,b){var $=l&x,C=Ec(r),I=C.length,j=Ec(s),N=j.length;if(I!=N&&!$)return!1;for(var W=I;W--;){var V=C[W];if(!($?V in s:Ve.call(s,V)))return!1}var ae=b.get(r),ge=b.get(s);if(ae&&ge)return ae==s&&ge==r;var Ce=!0;b.set(r,s),b.set(s,r);for(var me=$;++W<I;){V=C[W];var Ie=r[V],Be=s[V];if(f)var en=$?f(Be,Ie,V,s,r,b):f(Ie,Be,V,r,s,b);if(!(en===n?Ie===Be||g(Ie,Be,l,f,b):en)){Ce=!1;break}me||(me=V=="constructor")}if(Ce&&!me){var jt=r.constructor,tn=s.constructor;jt!=tn&&"constructor"in r&&"constructor"in s&&!(typeof jt=="function"&&jt instanceof jt&&typeof tn=="function"&&tn instanceof tn)&&(Ce=!1)}return b.delete(r),b.delete(s),Ce}function ir(r){return Mc(Th(r,n,Uh),r+"")}function Ec(r){return zf(r,kt,Rc)}function Tc(r){return zf(r,Zt,$h)}var Ac=Wo?function(r){return Wo.get(r)}:Gc;function ia(r){for(var s=r.name+"",l=Oi[s],f=Ve.call(Oi,s)?l.length:0;f--;){var g=l[f],b=g.func;if(b==null||b==r)return g.name}return s}function Bi(r){var s=Ve.call(y,"placeholder")?y:r;return s.placeholder}function he(){var r=y.iteratee||qc;return r=r===qc?Zf:r,arguments.length?r(arguments[0],arguments[1]):r}function sa(r,s){var l=r.__data__;return Ab(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Ic(r){for(var s=kt(r),l=s.length;l--;){var f=s[l],g=r[f];s[l]=[f,g,Sh(g)]}return s}function li(r,s){var l=O2(r,s);return Wf(l)?l:n}function xb(r){var s=Ve.call(r,ri),l=r[ri];try{r[ri]=n;var f=!0}catch{}var g=Bo.call(r);return f&&(s?r[ri]=l:delete r[ri]),g}var Rc=ic?function(r){return r==null?[]:(r=Ye(r),kr(ic(r),function(s){return Af.call(r,s)}))}:Vc,$h=ic?function(r){for(var s=[];r;)Cr(s,Rc(r)),r=jo(r);return s}:Vc,Ot=Ut;(sc&&Ot(new sc(new ArrayBuffer(1)))!=dt||Cs&&Ot(new Cs)!=it||oc&&Ot(oc.resolve())!=Bt||Ri&&Ot(new Ri)!=He||Ss&&Ot(new Ss)!=de)&&(Ot=function(r){var s=Ut(r),l=s==ut?r.constructor:n,f=l?ci(l):"";if(f)switch(f){case iy:return dt;case sy:return it;case oy:return Bt;case ay:return He;case ly:return de}return s});function $b(r,s,l){for(var f=-1,g=l.length;++f<g;){var b=l[f],$=b.size;switch(b.type){case"drop":r+=$;break;case"dropRight":s-=$;break;case"take":s=Rt(s,r+$);break;case"takeRight":r=_t(r,s-$);break}}return{start:r,end:s}}function kb(r){var s=r.match(Iv);return s?s[1].split(Rv):[]}function kh(r,s,l){s=Ir(s,r);for(var f=-1,g=s.length,b=!1;++f<g;){var $=zn(s[f]);if(!(b=r!=null&&l(r,$)))break;r=r[$]}return b||++f!=g?b:(g=r==null?0:r.length,!!g&&fa(g)&&sr($,g)&&(we(r)||ui(r)))}function Cb(r){var s=r.length,l=new r.constructor(s);return s&&typeof r[0]=="string"&&Ve.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function Ch(r){return typeof r.constructor=="function"&&!Ms(r)?Li(jo(r)):{}}function Sb(r,s,l){var f=r.constructor;switch(s){case Me:return kc(r);case Mt:case ce:return new f(+r);case dt:return cb(r,l);case xn:case $n:case cn:case $r:case xi:case $i:case ki:case Ul:case Dl:return ah(r,l);case it:return new f;case zt:case st:return new f(r);case ye:return ub(r);case He:return new f;case $t:return db(r)}}function Eb(r,s){var l=s.length;if(!l)return r;var f=l-1;return s[f]=(l>1?"& ":"")+s[f],s=s.join(l>2?", ":" "),r.replace(Av,`{
/* [wrapped with `+s+`] */
`)}function Tb(r){return we(r)||ui(r)||!!(If&&r&&r[If])}function sr(r,s){var l=typeof r;return s=s??le,!!s&&(l=="number"||l!="symbol"&&Nv.test(r))&&r>-1&&r%1==0&&r<s}function Dt(r,s,l){if(!lt(l))return!1;var f=typeof s;return(f=="number"?Wt(l)&&sr(s,l.length):f=="string"&&s in l)?Sn(l[s],r):!1}function Oc(r,s){if(we(r))return!1;var l=typeof r;return l=="number"||l=="symbol"||l=="boolean"||r==null||Jt(r)?!0:Cv.test(r)||!kv.test(r)||s!=null&&r in Ye(s)}function Ab(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Lc(r){var s=ia(r),l=y[s];if(typeof l!="function"||!(s in Le.prototype))return!1;if(r===l)return!0;var f=Ac(l);return!!f&&r===f[0]}function Ib(r){return!!Sf&&Sf in r}var Rb=Po?or:Qc;function Ms(r){var s=r&&r.constructor,l=typeof s=="function"&&s.prototype||Ii;return r===l}function Sh(r){return r===r&&!lt(r)}function Eh(r,s){return function(l){return l==null?!1:l[r]===s&&(s!==n||r in Ye(l))}}function Ob(r){var s=ua(r,function(f){return l.size===p&&l.clear(),f}),l=s.cache;return s}function Lb(r,s){var l=r[1],f=s[1],g=l|f,b=g<(S|O|F),$=f==F&&l==M||f==F&&l==Z&&r[7].length<=s[8]||f==(F|Z)&&s[7].length<=s[8]&&l==M;if(!(b||$))return r;f&S&&(r[2]=s[2],g|=l&S?0:U);var C=s[3];if(C){var I=r[3];r[3]=I?ch(I,C,s[4]):C,r[4]=I?Sr(r[3],h):s[4]}return C=s[5],C&&(I=r[5],r[5]=I?uh(I,C,s[6]):C,r[6]=I?Sr(r[5],h):s[6]),C=s[7],C&&(r[7]=C),f&F&&(r[8]=r[8]==null?s[8]:Rt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=g,r}function Pb(r){var s=[];if(r!=null)for(var l in Ye(r))s.push(l);return s}function Mb(r){return Bo.call(r)}function Th(r,s,l){return s=_t(s===n?r.length-1:s,0),function(){for(var f=arguments,g=-1,b=_t(f.length-s,0),$=B(b);++g<b;)$[g]=f[s+g];g=-1;for(var C=B(s+1);++g<s;)C[g]=f[g];return C[s]=l($),Qt(r,this,C)}}function Ah(r,s){return s.length<2?r:ai(r,gn(s,0,-1))}function Bb(r,s){for(var l=r.length,f=Rt(s.length,l),g=Ft(r);f--;){var b=s[f];r[f]=sr(b,l)?g[b]:n}return r}function Pc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Ih=Oh(Jf),Bs=X2||function(r,s){return St.setTimeout(r,s)},Mc=Oh(sb);function Rh(r,s,l){var f=s+"";return Mc(r,Eb(f,Ub(kb(f),l)))}function Oh(r){var s=0,l=0;return function(){var f=ty(),g=Q-(f-l);if(l=f,g>0){if(++s>=q)return arguments[0]}else s=0;return r.apply(n,arguments)}}function oa(r,s){var l=-1,f=r.length,g=f-1;for(s=s===n?f:s;++l<s;){var b=vc(l,g),$=r[b];r[b]=r[l],r[l]=$}return r.length=s,r}var Lh=Ob(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Sv,function(l,f,g,b){s.push(g?b.replace(Pv,"$1"):f||l)}),s});function zn(r){if(typeof r=="string"||Jt(r))return r;var s=r+"";return s=="0"&&1/r==-se?"-0":s}function ci(r){if(r!=null){try{return Mo.call(r)}catch{}try{return r+""}catch{}}return""}function Ub(r,s){return dn(wr,function(l){var f="_."+l[0];s&l[1]&&!Io(r,f)&&r.push(f)}),r.sort()}function Ph(r){if(r instanceof Le)return r.clone();var s=new hn(r.__wrapped__,r.__chain__);return s.__actions__=Ft(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function Db(r,s,l){(l?Dt(r,s,l):s===n)?s=1:s=_t(xe(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var g=0,b=0,$=B(zo(f/s));g<f;)$[b++]=gn(r,g,g+=s);return $}function jb(r){for(var s=-1,l=r==null?0:r.length,f=0,g=[];++s<l;){var b=r[s];b&&(g[f++]=b)}return g}function Nb(){var r=arguments.length;if(!r)return[];for(var s=B(r-1),l=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Cr(we(l)?Ft(l):[l],Et(s,1))}var Hb=Ee(function(r,s){return gt(r)?Is(r,Et(s,1,gt,!0)):[]}),zb=Ee(function(r,s){var l=mn(s);return gt(l)&&(l=n),gt(r)?Is(r,Et(s,1,gt,!0),he(l,2)):[]}),Fb=Ee(function(r,s){var l=mn(s);return gt(l)&&(l=n),gt(r)?Is(r,Et(s,1,gt,!0),n,l):[]});function Wb(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:xe(s),gn(r,s<0?0:s,f)):[]}function Zb(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:xe(s),s=f-s,gn(r,0,s<0?0:s)):[]}function qb(r,s){return r&&r.length?Yo(r,he(s,3),!0,!0):[]}function Kb(r,s){return r&&r.length?Yo(r,he(s,3),!0):[]}function Gb(r,s,l,f){var g=r==null?0:r.length;return g?(l&&typeof l!="number"&&Dt(r,s,l)&&(l=0,f=g),Ny(r,s,l,f)):[]}function Mh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=l==null?0:xe(l);return g<0&&(g=_t(f+g,0)),Ro(r,he(s,3),g)}function Bh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=f-1;return l!==n&&(g=xe(l),g=l<0?_t(f+g,0):Rt(g,f-1)),Ro(r,he(s,3),g,!0)}function Uh(r){var s=r==null?0:r.length;return s?Et(r,1):[]}function Vb(r){var s=r==null?0:r.length;return s?Et(r,se):[]}function Qb(r,s){var l=r==null?0:r.length;return l?(s=s===n?1:xe(s),Et(r,s)):[]}function Xb(r){for(var s=-1,l=r==null?0:r.length,f={};++s<l;){var g=r[s];f[g[0]]=g[1]}return f}function Dh(r){return r&&r.length?r[0]:n}function Yb(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=l==null?0:xe(l);return g<0&&(g=_t(f+g,0)),Si(r,s,g)}function Jb(r){var s=r==null?0:r.length;return s?gn(r,0,-1):[]}var e_=Ee(function(r){var s=ot(r,xc);return s.length&&s[0]===r[0]?fc(s):[]}),t_=Ee(function(r){var s=mn(r),l=ot(r,xc);return s===mn(l)?s=n:l.pop(),l.length&&l[0]===r[0]?fc(l,he(s,2)):[]}),n_=Ee(function(r){var s=mn(r),l=ot(r,xc);return s=typeof s=="function"?s:n,s&&l.pop(),l.length&&l[0]===r[0]?fc(l,n,s):[]});function r_(r,s){return r==null?"":J2.call(r,s)}function mn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function i_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=f;return l!==n&&(g=xe(l),g=g<0?_t(f+g,0):Rt(g,f-1)),s===s?U2(r,s,g):Ro(r,yf,g,!0)}function s_(r,s){return r&&r.length?Vf(r,xe(s)):n}var o_=Ee(jh);function jh(r,s){return r&&r.length&&s&&s.length?mc(r,s):r}function a_(r,s,l){return r&&r.length&&s&&s.length?mc(r,s,he(l,2)):r}function l_(r,s,l){return r&&r.length&&s&&s.length?mc(r,s,n,l):r}var c_=ir(function(r,s){var l=r==null?0:r.length,f=lc(r,s);return Yf(r,ot(s,function(g){return sr(g,l)?+g:g}).sort(lh)),f});function u_(r,s){var l=[];if(!(r&&r.length))return l;var f=-1,g=[],b=r.length;for(s=he(s,3);++f<b;){var $=r[f];s($,f,r)&&(l.push($),g.push(f))}return Yf(r,g),l}function Bc(r){return r==null?r:ry.call(r)}function d_(r,s,l){var f=r==null?0:r.length;return f?(l&&typeof l!="number"&&Dt(r,s,l)?(s=0,l=f):(s=s==null?0:xe(s),l=l===n?f:xe(l)),gn(r,s,l)):[]}function f_(r,s){return Xo(r,s)}function h_(r,s,l){return bc(r,s,he(l,2))}function p_(r,s){var l=r==null?0:r.length;if(l){var f=Xo(r,s);if(f<l&&Sn(r[f],s))return f}return-1}function g_(r,s){return Xo(r,s,!0)}function m_(r,s,l){return bc(r,s,he(l,2),!0)}function v_(r,s){var l=r==null?0:r.length;if(l){var f=Xo(r,s,!0)-1;if(Sn(r[f],s))return f}return-1}function y_(r){return r&&r.length?eh(r):[]}function b_(r,s){return r&&r.length?eh(r,he(s,2)):[]}function __(r){var s=r==null?0:r.length;return s?gn(r,1,s):[]}function w_(r,s,l){return r&&r.length?(s=l||s===n?1:xe(s),gn(r,0,s<0?0:s)):[]}function x_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:xe(s),s=f-s,gn(r,s<0?0:s,f)):[]}function $_(r,s){return r&&r.length?Yo(r,he(s,3),!1,!0):[]}function k_(r,s){return r&&r.length?Yo(r,he(s,3)):[]}var C_=Ee(function(r){return Ar(Et(r,1,gt,!0))}),S_=Ee(function(r){var s=mn(r);return gt(s)&&(s=n),Ar(Et(r,1,gt,!0),he(s,2))}),E_=Ee(function(r){var s=mn(r);return s=typeof s=="function"?s:n,Ar(Et(r,1,gt,!0),n,s)});function T_(r){return r&&r.length?Ar(r):[]}function A_(r,s){return r&&r.length?Ar(r,he(s,2)):[]}function I_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Ar(r,n,s):[]}function Uc(r){if(!(r&&r.length))return[];var s=0;return r=kr(r,function(l){if(gt(l))return s=_t(l.length,s),!0}),ec(s,function(l){return ot(r,Xl(l))})}function Nh(r,s){if(!(r&&r.length))return[];var l=Uc(r);return s==null?l:ot(l,function(f){return Qt(s,n,f)})}var R_=Ee(function(r,s){return gt(r)?Is(r,s):[]}),O_=Ee(function(r){return wc(kr(r,gt))}),L_=Ee(function(r){var s=mn(r);return gt(s)&&(s=n),wc(kr(r,gt),he(s,2))}),P_=Ee(function(r){var s=mn(r);return s=typeof s=="function"?s:n,wc(kr(r,gt),n,s)}),M_=Ee(Uc);function B_(r,s){return ih(r||[],s||[],As)}function U_(r,s){return ih(r||[],s||[],Ls)}var D_=Ee(function(r){var s=r.length,l=s>1?r[s-1]:n;return l=typeof l=="function"?(r.pop(),l):n,Nh(r,l)});function Hh(r){var s=y(r);return s.__chain__=!0,s}function j_(r,s){return s(r),r}function aa(r,s){return s(r)}var N_=ir(function(r){var s=r.length,l=s?r[0]:0,f=this.__wrapped__,g=function(b){return lc(b,r)};return s>1||this.__actions__.length||!(f instanceof Le)||!sr(l)?this.thru(g):(f=f.slice(l,+l+(s?1:0)),f.__actions__.push({func:aa,args:[g],thisArg:n}),new hn(f,this.__chain__).thru(function(b){return s&&!b.length&&b.push(n),b}))});function H_(){return Hh(this)}function z_(){return new hn(this.value(),this.__chain__)}function F_(){this.__values__===n&&(this.__values__=tp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function W_(){return this}function Z_(r){for(var s,l=this;l instanceof qo;){var f=Ph(l);f.__index__=0,f.__values__=n,s?g.__wrapped__=f:s=f;var g=f;l=l.__wrapped__}return g.__wrapped__=r,s}function q_(){var r=this.__wrapped__;if(r instanceof Le){var s=r;return this.__actions__.length&&(s=new Le(this)),s=s.reverse(),s.__actions__.push({func:aa,args:[Bc],thisArg:n}),new hn(s,this.__chain__)}return this.thru(Bc)}function K_(){return rh(this.__wrapped__,this.__actions__)}var G_=Jo(function(r,s,l){Ve.call(r,l)?++r[l]:nr(r,l,1)});function V_(r,s,l){var f=we(r)?mf:jy;return l&&Dt(r,s,l)&&(s=n),f(r,he(s,3))}function Q_(r,s){var l=we(r)?kr:Nf;return l(r,he(s,3))}var X_=ph(Mh),Y_=ph(Bh);function J_(r,s){return Et(la(r,s),1)}function ew(r,s){return Et(la(r,s),se)}function tw(r,s,l){return l=l===n?1:xe(l),Et(la(r,s),l)}function zh(r,s){var l=we(r)?dn:Tr;return l(r,he(s,3))}function Fh(r,s){var l=we(r)?_2:jf;return l(r,he(s,3))}var nw=Jo(function(r,s,l){Ve.call(r,l)?r[l].push(s):nr(r,l,[s])});function rw(r,s,l,f){r=Wt(r)?r:Di(r),l=l&&!f?xe(l):0;var g=r.length;return l<0&&(l=_t(g+l,0)),ha(r)?l<=g&&r.indexOf(s,l)>-1:!!g&&Si(r,s,l)>-1}var iw=Ee(function(r,s,l){var f=-1,g=typeof s=="function",b=Wt(r)?B(r.length):[];return Tr(r,function($){b[++f]=g?Qt(s,$,l):Rs($,s,l)}),b}),sw=Jo(function(r,s,l){nr(r,l,s)});function la(r,s){var l=we(r)?ot:qf;return l(r,he(s,3))}function ow(r,s,l,f){return r==null?[]:(we(s)||(s=s==null?[]:[s]),l=f?n:l,we(l)||(l=l==null?[]:[l]),Qf(r,s,l))}var aw=Jo(function(r,s,l){r[l?0:1].push(s)},function(){return[[],[]]});function lw(r,s,l){var f=we(r)?Vl:_f,g=arguments.length<3;return f(r,he(s,4),l,g,Tr)}function cw(r,s,l){var f=we(r)?w2:_f,g=arguments.length<3;return f(r,he(s,4),l,g,jf)}function uw(r,s){var l=we(r)?kr:Nf;return l(r,da(he(s,3)))}function dw(r){var s=we(r)?Mf:rb;return s(r)}function fw(r,s,l){(l?Dt(r,s,l):s===n)?s=1:s=xe(s);var f=we(r)?Py:ib;return f(r,s)}function hw(r){var s=we(r)?My:ob;return s(r)}function pw(r){if(r==null)return 0;if(Wt(r))return ha(r)?Ti(r):r.length;var s=Ot(r);return s==it||s==He?r.size:pc(r).length}function gw(r,s,l){var f=we(r)?Ql:ab;return l&&Dt(r,s,l)&&(s=n),f(r,he(s,3))}var mw=Ee(function(r,s){if(r==null)return[];var l=s.length;return l>1&&Dt(r,s[0],s[1])?s=[]:l>2&&Dt(s[0],s[1],s[2])&&(s=[s[0]]),Qf(r,Et(s,1),[])}),ca=Q2||function(){return St.Date.now()};function vw(r,s){if(typeof s!="function")throw new fn(c);return r=xe(r),function(){if(--r<1)return s.apply(this,arguments)}}function Wh(r,s,l){return s=l?n:s,s=r&&s==null?r.length:s,rr(r,F,n,n,n,n,s)}function Zh(r,s){var l;if(typeof s!="function")throw new fn(c);return r=xe(r),function(){return--r>0&&(l=s.apply(this,arguments)),r<=1&&(s=n),l}}var Dc=Ee(function(r,s,l){var f=S;if(l.length){var g=Sr(l,Bi(Dc));f|=T}return rr(r,f,s,l,g)}),qh=Ee(function(r,s,l){var f=S|O;if(l.length){var g=Sr(l,Bi(qh));f|=T}return rr(s,f,r,l,g)});function Kh(r,s,l){s=l?n:s;var f=rr(r,M,n,n,n,n,n,s);return f.placeholder=Kh.placeholder,f}function Gh(r,s,l){s=l?n:s;var f=rr(r,R,n,n,n,n,n,s);return f.placeholder=Gh.placeholder,f}function Vh(r,s,l){var f,g,b,$,C,I,j=0,N=!1,W=!1,V=!0;if(typeof r!="function")throw new fn(c);s=vn(s)||0,lt(l)&&(N=!!l.leading,W="maxWait"in l,b=W?_t(vn(l.maxWait)||0,s):b,V="trailing"in l?!!l.trailing:V);function ae(mt){var En=f,lr=g;return f=g=n,j=mt,$=r.apply(lr,En),$}function ge(mt){return j=mt,C=Bs(Ie,s),N?ae(mt):$}function Ce(mt){var En=mt-I,lr=mt-j,pp=s-En;return W?Rt(pp,b-lr):pp}function me(mt){var En=mt-I,lr=mt-j;return I===n||En>=s||En<0||W&&lr>=b}function Ie(){var mt=ca();if(me(mt))return Be(mt);C=Bs(Ie,Ce(mt))}function Be(mt){return C=n,V&&f?ae(mt):(f=g=n,$)}function en(){C!==n&&sh(C),j=0,f=I=g=C=n}function jt(){return C===n?$:Be(ca())}function tn(){var mt=ca(),En=me(mt);if(f=arguments,g=this,I=mt,En){if(C===n)return ge(I);if(W)return sh(C),C=Bs(Ie,s),ae(I)}return C===n&&(C=Bs(Ie,s)),$}return tn.cancel=en,tn.flush=jt,tn}var yw=Ee(function(r,s){return Df(r,1,s)}),bw=Ee(function(r,s,l){return Df(r,vn(s)||0,l)});function _w(r){return rr(r,oe)}function ua(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new fn(c);var l=function(){var f=arguments,g=s?s.apply(this,f):f[0],b=l.cache;if(b.has(g))return b.get(g);var $=r.apply(this,f);return l.cache=b.set(g,$)||b,$};return l.cache=new(ua.Cache||tr),l}ua.Cache=tr;function da(r){if(typeof r!="function")throw new fn(c);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function ww(r){return Zh(2,r)}var xw=lb(function(r,s){s=s.length==1&&we(s[0])?ot(s[0],Xt(he())):ot(Et(s,1),Xt(he()));var l=s.length;return Ee(function(f){for(var g=-1,b=Rt(f.length,l);++g<b;)f[g]=s[g].call(this,f[g]);return Qt(r,this,f)})}),jc=Ee(function(r,s){var l=Sr(s,Bi(jc));return rr(r,T,n,s,l)}),Qh=Ee(function(r,s){var l=Sr(s,Bi(Qh));return rr(r,L,n,s,l)}),$w=ir(function(r,s){return rr(r,Z,n,n,n,s)});function kw(r,s){if(typeof r!="function")throw new fn(c);return s=s===n?s:xe(s),Ee(r,s)}function Cw(r,s){if(typeof r!="function")throw new fn(c);return s=s==null?0:_t(xe(s),0),Ee(function(l){var f=l[s],g=Rr(l,0,s);return f&&Cr(g,f),Qt(r,this,g)})}function Sw(r,s,l){var f=!0,g=!0;if(typeof r!="function")throw new fn(c);return lt(l)&&(f="leading"in l?!!l.leading:f,g="trailing"in l?!!l.trailing:g),Vh(r,s,{leading:f,maxWait:s,trailing:g})}function Ew(r){return Wh(r,1)}function Tw(r,s){return jc($c(s),r)}function Aw(){if(!arguments.length)return[];var r=arguments[0];return we(r)?r:[r]}function Iw(r){return pn(r,_)}function Rw(r,s){return s=typeof s=="function"?s:n,pn(r,_,s)}function Ow(r){return pn(r,m|_)}function Lw(r,s){return s=typeof s=="function"?s:n,pn(r,m|_,s)}function Pw(r,s){return s==null||Uf(r,s,kt(s))}function Sn(r,s){return r===s||r!==r&&s!==s}var Mw=ra(dc),Bw=ra(function(r,s){return r>=s}),ui=Ff(function(){return arguments}())?Ff:function(r){return ft(r)&&Ve.call(r,"callee")&&!Af.call(r,"callee")},we=B.isArray,Uw=uf?Xt(uf):Zy;function Wt(r){return r!=null&&fa(r.length)&&!or(r)}function gt(r){return ft(r)&&Wt(r)}function Dw(r){return r===!0||r===!1||ft(r)&&Ut(r)==Mt}var Or=Y2||Qc,jw=df?Xt(df):qy;function Nw(r){return ft(r)&&r.nodeType===1&&!Us(r)}function Hw(r){if(r==null)return!0;if(Wt(r)&&(we(r)||typeof r=="string"||typeof r.splice=="function"||Or(r)||Ui(r)||ui(r)))return!r.length;var s=Ot(r);if(s==it||s==He)return!r.size;if(Ms(r))return!pc(r).length;for(var l in r)if(Ve.call(r,l))return!1;return!0}function zw(r,s){return Os(r,s)}function Fw(r,s,l){l=typeof l=="function"?l:n;var f=l?l(r,s):n;return f===n?Os(r,s,n,l):!!f}function Nc(r){if(!ft(r))return!1;var s=Ut(r);return s==pt||s==xt||typeof r.message=="string"&&typeof r.name=="string"&&!Us(r)}function Ww(r){return typeof r=="number"&&Rf(r)}function or(r){if(!lt(r))return!1;var s=Ut(r);return s==It||s==jn||s==an||s==Jn}function Xh(r){return typeof r=="number"&&r==xe(r)}function fa(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=le}function lt(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ft(r){return r!=null&&typeof r=="object"}var Yh=ff?Xt(ff):Gy;function Zw(r,s){return r===s||hc(r,s,Ic(s))}function qw(r,s,l){return l=typeof l=="function"?l:n,hc(r,s,Ic(s),l)}function Kw(r){return Jh(r)&&r!=+r}function Gw(r){if(Rb(r))throw new be(a);return Wf(r)}function Vw(r){return r===null}function Qw(r){return r==null}function Jh(r){return typeof r=="number"||ft(r)&&Ut(r)==zt}function Us(r){if(!ft(r)||Ut(r)!=ut)return!1;var s=jo(r);if(s===null)return!0;var l=Ve.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Mo.call(l)==q2}var Hc=hf?Xt(hf):Vy;function Xw(r){return Xh(r)&&r>=-le&&r<=le}var ep=pf?Xt(pf):Qy;function ha(r){return typeof r=="string"||!we(r)&&ft(r)&&Ut(r)==st}function Jt(r){return typeof r=="symbol"||ft(r)&&Ut(r)==$t}var Ui=gf?Xt(gf):Xy;function Yw(r){return r===n}function Jw(r){return ft(r)&&Ot(r)==de}function e3(r){return ft(r)&&Ut(r)==ln}var t3=ra(gc),n3=ra(function(r,s){return r<=s});function tp(r){if(!r)return[];if(Wt(r))return ha(r)?kn(r):Ft(r);if(ks&&r[ks])return P2(r[ks]());var s=Ot(r),l=s==it?nc:s==He?Oo:Di;return l(r)}function ar(r){if(!r)return r===0?r:0;if(r=vn(r),r===se||r===-se){var s=r<0?-1:1;return s*Qe}return r===r?r:0}function xe(r){var s=ar(r),l=s%1;return s===s?l?s-l:s:0}function np(r){return r?oi(xe(r),0,ee):0}function vn(r){if(typeof r=="number")return r;if(Jt(r))return Ue;if(lt(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=lt(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=wf(r);var l=Uv.test(r);return l||jv.test(r)?v2(r.slice(2),l?2:8):Bv.test(r)?Ue:+r}function rp(r){return Hn(r,Zt(r))}function r3(r){return r?oi(xe(r),-le,le):r===0?r:0}function Ge(r){return r==null?"":Yt(r)}var i3=Pi(function(r,s){if(Ms(s)||Wt(s)){Hn(s,kt(s),r);return}for(var l in s)Ve.call(s,l)&&As(r,l,s[l])}),ip=Pi(function(r,s){Hn(s,Zt(s),r)}),pa=Pi(function(r,s,l,f){Hn(s,Zt(s),r,f)}),s3=Pi(function(r,s,l,f){Hn(s,kt(s),r,f)}),o3=ir(lc);function a3(r,s){var l=Li(r);return s==null?l:Bf(l,s)}var l3=Ee(function(r,s){r=Ye(r);var l=-1,f=s.length,g=f>2?s[2]:n;for(g&&Dt(s[0],s[1],g)&&(f=1);++l<f;)for(var b=s[l],$=Zt(b),C=-1,I=$.length;++C<I;){var j=$[C],N=r[j];(N===n||Sn(N,Ii[j])&&!Ve.call(r,j))&&(r[j]=b[j])}return r}),c3=Ee(function(r){return r.push(n,wh),Qt(sp,n,r)});function u3(r,s){return vf(r,he(s,3),Nn)}function d3(r,s){return vf(r,he(s,3),uc)}function f3(r,s){return r==null?r:cc(r,he(s,3),Zt)}function h3(r,s){return r==null?r:Hf(r,he(s,3),Zt)}function p3(r,s){return r&&Nn(r,he(s,3))}function g3(r,s){return r&&uc(r,he(s,3))}function m3(r){return r==null?[]:Vo(r,kt(r))}function v3(r){return r==null?[]:Vo(r,Zt(r))}function zc(r,s,l){var f=r==null?n:ai(r,s);return f===n?l:f}function y3(r,s){return r!=null&&kh(r,s,Hy)}function Fc(r,s){return r!=null&&kh(r,s,zy)}var b3=mh(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Bo.call(s)),r[s]=l},Zc(qt)),_3=mh(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Bo.call(s)),Ve.call(r,s)?r[s].push(l):r[s]=[l]},he),w3=Ee(Rs);function kt(r){return Wt(r)?Pf(r):pc(r)}function Zt(r){return Wt(r)?Pf(r,!0):Yy(r)}function x3(r,s){var l={};return s=he(s,3),Nn(r,function(f,g,b){nr(l,s(f,g,b),f)}),l}function $3(r,s){var l={};return s=he(s,3),Nn(r,function(f,g,b){nr(l,g,s(f,g,b))}),l}var k3=Pi(function(r,s,l){Qo(r,s,l)}),sp=Pi(function(r,s,l,f){Qo(r,s,l,f)}),C3=ir(function(r,s){var l={};if(r==null)return l;var f=!1;s=ot(s,function(b){return b=Ir(b,r),f||(f=b.length>1),b}),Hn(r,Tc(r),l),f&&(l=pn(l,m|v|_,bb));for(var g=s.length;g--;)_c(l,s[g]);return l});function S3(r,s){return op(r,da(he(s)))}var E3=ir(function(r,s){return r==null?{}:eb(r,s)});function op(r,s){if(r==null)return{};var l=ot(Tc(r),function(f){return[f]});return s=he(s),Xf(r,l,function(f,g){return s(f,g[0])})}function T3(r,s,l){s=Ir(s,r);var f=-1,g=s.length;for(g||(g=1,r=n);++f<g;){var b=r==null?n:r[zn(s[f])];b===n&&(f=g,b=l),r=or(b)?b.call(r):b}return r}function A3(r,s,l){return r==null?r:Ls(r,s,l)}function I3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:Ls(r,s,l,f)}var ap=bh(kt),lp=bh(Zt);function R3(r,s,l){var f=we(r),g=f||Or(r)||Ui(r);if(s=he(s,4),l==null){var b=r&&r.constructor;g?l=f?new b:[]:lt(r)?l=or(b)?Li(jo(r)):{}:l={}}return(g?dn:Nn)(r,function($,C,I){return s(l,$,C,I)}),l}function O3(r,s){return r==null?!0:_c(r,s)}function L3(r,s,l){return r==null?r:nh(r,s,$c(l))}function P3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:nh(r,s,$c(l),f)}function Di(r){return r==null?[]:tc(r,kt(r))}function M3(r){return r==null?[]:tc(r,Zt(r))}function B3(r,s,l){return l===n&&(l=s,s=n),l!==n&&(l=vn(l),l=l===l?l:0),s!==n&&(s=vn(s),s=s===s?s:0),oi(vn(r),s,l)}function U3(r,s,l){return s=ar(s),l===n?(l=s,s=0):l=ar(l),r=vn(r),Fy(r,s,l)}function D3(r,s,l){if(l&&typeof l!="boolean"&&Dt(r,s,l)&&(s=l=n),l===n&&(typeof s=="boolean"?(l=s,s=n):typeof r=="boolean"&&(l=r,r=n)),r===n&&s===n?(r=0,s=1):(r=ar(r),s===n?(s=r,r=0):s=ar(s)),r>s){var f=r;r=s,s=f}if(l||r%1||s%1){var g=Of();return Rt(r+g*(s-r+m2("1e-"+((g+"").length-1))),s)}return vc(r,s)}var j3=Mi(function(r,s,l){return s=s.toLowerCase(),r+(l?cp(s):s)});function cp(r){return Wc(Ge(r).toLowerCase())}function up(r){return r=Ge(r),r&&r.replace(Hv,A2).replace(o2,"")}function N3(r,s,l){r=Ge(r),s=Yt(s);var f=r.length;l=l===n?f:oi(xe(l),0,f);var g=l;return l-=s.length,l>=0&&r.slice(l,g)==s}function H3(r){return r=Ge(r),r&&wv.test(r)?r.replace(Nd,I2):r}function z3(r){return r=Ge(r),r&&Ev.test(r)?r.replace(jl,"\\$&"):r}var F3=Mi(function(r,s,l){return r+(l?"-":"")+s.toLowerCase()}),W3=Mi(function(r,s,l){return r+(l?" ":"")+s.toLowerCase()}),Z3=hh("toLowerCase");function q3(r,s,l){r=Ge(r),s=xe(s);var f=s?Ti(r):0;if(!s||f>=s)return r;var g=(s-f)/2;return na(Fo(g),l)+r+na(zo(g),l)}function K3(r,s,l){r=Ge(r),s=xe(s);var f=s?Ti(r):0;return s&&f<s?r+na(s-f,l):r}function G3(r,s,l){r=Ge(r),s=xe(s);var f=s?Ti(r):0;return s&&f<s?na(s-f,l)+r:r}function V3(r,s,l){return l||s==null?s=0:s&&(s=+s),ny(Ge(r).replace(Nl,""),s||0)}function Q3(r,s,l){return(l?Dt(r,s,l):s===n)?s=1:s=xe(s),yc(Ge(r),s)}function X3(){var r=arguments,s=Ge(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var Y3=Mi(function(r,s,l){return r+(l?"_":"")+s.toLowerCase()});function J3(r,s,l){return l&&typeof l!="number"&&Dt(r,s,l)&&(s=l=n),l=l===n?ee:l>>>0,l?(r=Ge(r),r&&(typeof s=="string"||s!=null&&!Hc(s))&&(s=Yt(s),!s&&Ei(r))?Rr(kn(r),0,l):r.split(s,l)):[]}var ex=Mi(function(r,s,l){return r+(l?" ":"")+Wc(s)});function tx(r,s,l){return r=Ge(r),l=l==null?0:oi(xe(l),0,r.length),s=Yt(s),r.slice(l,l+s.length)==s}function nx(r,s,l){var f=y.templateSettings;l&&Dt(r,s,l)&&(s=n),r=Ge(r),s=pa({},s,f,_h);var g=pa({},s.imports,f.imports,_h),b=kt(g),$=tc(g,b),C,I,j=0,N=s.interpolate||Eo,W="__p += '",V=rc((s.escape||Eo).source+"|"+N.source+"|"+(N===Hd?Mv:Eo).source+"|"+(s.evaluate||Eo).source+"|$","g"),ae="//# sourceURL="+(Ve.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++d2+"]")+`
`;r.replace(V,function(me,Ie,Be,en,jt,tn){return Be||(Be=en),W+=r.slice(j,tn).replace(zv,R2),Ie&&(C=!0,W+=`' +
__e(`+Ie+`) +
'`),jt&&(I=!0,W+=`';
`+jt+`;
__p += '`),Be&&(W+=`' +
((__t = (`+Be+`)) == null ? '' : __t) +
'`),j=tn+me.length,me}),W+=`';
`;var ge=Ve.call(s,"variable")&&s.variable;if(!ge)W=`with (obj) {
`+W+`
}
`;else if(Lv.test(ge))throw new be(u);W=(I?W.replace(vv,""):W).replace(yv,"$1").replace(bv,"$1;"),W="function("+(ge||"obj")+`) {
`+(ge?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(C?", __e = _.escape":"")+(I?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+W+`return __p
}`;var Ce=fp(function(){return Ze(b,ae+"return "+W).apply(n,$)});if(Ce.source=W,Nc(Ce))throw Ce;return Ce}function rx(r){return Ge(r).toLowerCase()}function ix(r){return Ge(r).toUpperCase()}function sx(r,s,l){if(r=Ge(r),r&&(l||s===n))return wf(r);if(!r||!(s=Yt(s)))return r;var f=kn(r),g=kn(s),b=xf(f,g),$=$f(f,g)+1;return Rr(f,b,$).join("")}function ox(r,s,l){if(r=Ge(r),r&&(l||s===n))return r.slice(0,Cf(r)+1);if(!r||!(s=Yt(s)))return r;var f=kn(r),g=$f(f,kn(s))+1;return Rr(f,0,g).join("")}function ax(r,s,l){if(r=Ge(r),r&&(l||s===n))return r.replace(Nl,"");if(!r||!(s=Yt(s)))return r;var f=kn(r),g=xf(f,kn(s));return Rr(f,g).join("")}function lx(r,s){var l=G,f=re;if(lt(s)){var g="separator"in s?s.separator:g;l="length"in s?xe(s.length):l,f="omission"in s?Yt(s.omission):f}r=Ge(r);var b=r.length;if(Ei(r)){var $=kn(r);b=$.length}if(l>=b)return r;var C=l-Ti(f);if(C<1)return f;var I=$?Rr($,0,C).join(""):r.slice(0,C);if(g===n)return I+f;if($&&(C+=I.length-C),Hc(g)){if(r.slice(C).search(g)){var j,N=I;for(g.global||(g=rc(g.source,Ge(zd.exec(g))+"g")),g.lastIndex=0;j=g.exec(N);)var W=j.index;I=I.slice(0,W===n?C:W)}}else if(r.indexOf(Yt(g),C)!=C){var V=I.lastIndexOf(g);V>-1&&(I=I.slice(0,V))}return I+f}function cx(r){return r=Ge(r),r&&_v.test(r)?r.replace(jd,D2):r}var ux=Mi(function(r,s,l){return r+(l?" ":"")+s.toUpperCase()}),Wc=hh("toUpperCase");function dp(r,s,l){return r=Ge(r),s=l?n:s,s===n?L2(r)?H2(r):k2(r):r.match(s)||[]}var fp=Ee(function(r,s){try{return Qt(r,n,s)}catch(l){return Nc(l)?l:new be(l)}}),dx=ir(function(r,s){return dn(s,function(l){l=zn(l),nr(r,l,Dc(r[l],r))}),r});function fx(r){var s=r==null?0:r.length,l=he();return r=s?ot(r,function(f){if(typeof f[1]!="function")throw new fn(c);return[l(f[0]),f[1]]}):[],Ee(function(f){for(var g=-1;++g<s;){var b=r[g];if(Qt(b[0],this,f))return Qt(b[1],this,f)}})}function hx(r){return Dy(pn(r,m))}function Zc(r){return function(){return r}}function px(r,s){return r==null||r!==r?s:r}var gx=gh(),mx=gh(!0);function qt(r){return r}function qc(r){return Zf(typeof r=="function"?r:pn(r,m))}function vx(r){return Kf(pn(r,m))}function yx(r,s){return Gf(r,pn(s,m))}var bx=Ee(function(r,s){return function(l){return Rs(l,r,s)}}),_x=Ee(function(r,s){return function(l){return Rs(r,l,s)}});function Kc(r,s,l){var f=kt(s),g=Vo(s,f);l==null&&!(lt(s)&&(g.length||!f.length))&&(l=s,s=r,r=this,g=Vo(s,kt(s)));var b=!(lt(l)&&"chain"in l)||!!l.chain,$=or(r);return dn(g,function(C){var I=s[C];r[C]=I,$&&(r.prototype[C]=function(){var j=this.__chain__;if(b||j){var N=r(this.__wrapped__),W=N.__actions__=Ft(this.__actions__);return W.push({func:I,args:arguments,thisArg:r}),N.__chain__=j,N}return I.apply(r,Cr([this.value()],arguments))})}),r}function wx(){return St._===this&&(St._=K2),this}function Gc(){}function xx(r){return r=xe(r),Ee(function(s){return Vf(s,r)})}var $x=Cc(ot),kx=Cc(mf),Cx=Cc(Ql);function hp(r){return Oc(r)?Xl(zn(r)):tb(r)}function Sx(r){return function(s){return r==null?n:ai(r,s)}}var Ex=vh(),Tx=vh(!0);function Vc(){return[]}function Qc(){return!1}function Ax(){return{}}function Ix(){return""}function Rx(){return!0}function Ox(r,s){if(r=xe(r),r<1||r>le)return[];var l=ee,f=Rt(r,ee);s=he(s),r-=ee;for(var g=ec(f,s);++l<r;)s(l);return g}function Lx(r){return we(r)?ot(r,zn):Jt(r)?[r]:Ft(Lh(Ge(r)))}function Px(r){var s=++Z2;return Ge(r)+s}var Mx=ta(function(r,s){return r+s},0),Bx=Sc("ceil"),Ux=ta(function(r,s){return r/s},1),Dx=Sc("floor");function jx(r){return r&&r.length?Go(r,qt,dc):n}function Nx(r,s){return r&&r.length?Go(r,he(s,2),dc):n}function Hx(r){return bf(r,qt)}function zx(r,s){return bf(r,he(s,2))}function Fx(r){return r&&r.length?Go(r,qt,gc):n}function Wx(r,s){return r&&r.length?Go(r,he(s,2),gc):n}var Zx=ta(function(r,s){return r*s},1),qx=Sc("round"),Kx=ta(function(r,s){return r-s},0);function Gx(r){return r&&r.length?Jl(r,qt):0}function Vx(r,s){return r&&r.length?Jl(r,he(s,2)):0}return y.after=vw,y.ary=Wh,y.assign=i3,y.assignIn=ip,y.assignInWith=pa,y.assignWith=s3,y.at=o3,y.before=Zh,y.bind=Dc,y.bindAll=dx,y.bindKey=qh,y.castArray=Aw,y.chain=Hh,y.chunk=Db,y.compact=jb,y.concat=Nb,y.cond=fx,y.conforms=hx,y.constant=Zc,y.countBy=G_,y.create=a3,y.curry=Kh,y.curryRight=Gh,y.debounce=Vh,y.defaults=l3,y.defaultsDeep=c3,y.defer=yw,y.delay=bw,y.difference=Hb,y.differenceBy=zb,y.differenceWith=Fb,y.drop=Wb,y.dropRight=Zb,y.dropRightWhile=qb,y.dropWhile=Kb,y.fill=Gb,y.filter=Q_,y.flatMap=J_,y.flatMapDeep=ew,y.flatMapDepth=tw,y.flatten=Uh,y.flattenDeep=Vb,y.flattenDepth=Qb,y.flip=_w,y.flow=gx,y.flowRight=mx,y.fromPairs=Xb,y.functions=m3,y.functionsIn=v3,y.groupBy=nw,y.initial=Jb,y.intersection=e_,y.intersectionBy=t_,y.intersectionWith=n_,y.invert=b3,y.invertBy=_3,y.invokeMap=iw,y.iteratee=qc,y.keyBy=sw,y.keys=kt,y.keysIn=Zt,y.map=la,y.mapKeys=x3,y.mapValues=$3,y.matches=vx,y.matchesProperty=yx,y.memoize=ua,y.merge=k3,y.mergeWith=sp,y.method=bx,y.methodOf=_x,y.mixin=Kc,y.negate=da,y.nthArg=xx,y.omit=C3,y.omitBy=S3,y.once=ww,y.orderBy=ow,y.over=$x,y.overArgs=xw,y.overEvery=kx,y.overSome=Cx,y.partial=jc,y.partialRight=Qh,y.partition=aw,y.pick=E3,y.pickBy=op,y.property=hp,y.propertyOf=Sx,y.pull=o_,y.pullAll=jh,y.pullAllBy=a_,y.pullAllWith=l_,y.pullAt=c_,y.range=Ex,y.rangeRight=Tx,y.rearg=$w,y.reject=uw,y.remove=u_,y.rest=kw,y.reverse=Bc,y.sampleSize=fw,y.set=A3,y.setWith=I3,y.shuffle=hw,y.slice=d_,y.sortBy=mw,y.sortedUniq=y_,y.sortedUniqBy=b_,y.split=J3,y.spread=Cw,y.tail=__,y.take=w_,y.takeRight=x_,y.takeRightWhile=$_,y.takeWhile=k_,y.tap=j_,y.throttle=Sw,y.thru=aa,y.toArray=tp,y.toPairs=ap,y.toPairsIn=lp,y.toPath=Lx,y.toPlainObject=rp,y.transform=R3,y.unary=Ew,y.union=C_,y.unionBy=S_,y.unionWith=E_,y.uniq=T_,y.uniqBy=A_,y.uniqWith=I_,y.unset=O3,y.unzip=Uc,y.unzipWith=Nh,y.update=L3,y.updateWith=P3,y.values=Di,y.valuesIn=M3,y.without=R_,y.words=dp,y.wrap=Tw,y.xor=O_,y.xorBy=L_,y.xorWith=P_,y.zip=M_,y.zipObject=B_,y.zipObjectDeep=U_,y.zipWith=D_,y.entries=ap,y.entriesIn=lp,y.extend=ip,y.extendWith=pa,Kc(y,y),y.add=Mx,y.attempt=fp,y.camelCase=j3,y.capitalize=cp,y.ceil=Bx,y.clamp=B3,y.clone=Iw,y.cloneDeep=Ow,y.cloneDeepWith=Lw,y.cloneWith=Rw,y.conformsTo=Pw,y.deburr=up,y.defaultTo=px,y.divide=Ux,y.endsWith=N3,y.eq=Sn,y.escape=H3,y.escapeRegExp=z3,y.every=V_,y.find=X_,y.findIndex=Mh,y.findKey=u3,y.findLast=Y_,y.findLastIndex=Bh,y.findLastKey=d3,y.floor=Dx,y.forEach=zh,y.forEachRight=Fh,y.forIn=f3,y.forInRight=h3,y.forOwn=p3,y.forOwnRight=g3,y.get=zc,y.gt=Mw,y.gte=Bw,y.has=y3,y.hasIn=Fc,y.head=Dh,y.identity=qt,y.includes=rw,y.indexOf=Yb,y.inRange=U3,y.invoke=w3,y.isArguments=ui,y.isArray=we,y.isArrayBuffer=Uw,y.isArrayLike=Wt,y.isArrayLikeObject=gt,y.isBoolean=Dw,y.isBuffer=Or,y.isDate=jw,y.isElement=Nw,y.isEmpty=Hw,y.isEqual=zw,y.isEqualWith=Fw,y.isError=Nc,y.isFinite=Ww,y.isFunction=or,y.isInteger=Xh,y.isLength=fa,y.isMap=Yh,y.isMatch=Zw,y.isMatchWith=qw,y.isNaN=Kw,y.isNative=Gw,y.isNil=Qw,y.isNull=Vw,y.isNumber=Jh,y.isObject=lt,y.isObjectLike=ft,y.isPlainObject=Us,y.isRegExp=Hc,y.isSafeInteger=Xw,y.isSet=ep,y.isString=ha,y.isSymbol=Jt,y.isTypedArray=Ui,y.isUndefined=Yw,y.isWeakMap=Jw,y.isWeakSet=e3,y.join=r_,y.kebabCase=F3,y.last=mn,y.lastIndexOf=i_,y.lowerCase=W3,y.lowerFirst=Z3,y.lt=t3,y.lte=n3,y.max=jx,y.maxBy=Nx,y.mean=Hx,y.meanBy=zx,y.min=Fx,y.minBy=Wx,y.stubArray=Vc,y.stubFalse=Qc,y.stubObject=Ax,y.stubString=Ix,y.stubTrue=Rx,y.multiply=Zx,y.nth=s_,y.noConflict=wx,y.noop=Gc,y.now=ca,y.pad=q3,y.padEnd=K3,y.padStart=G3,y.parseInt=V3,y.random=D3,y.reduce=lw,y.reduceRight=cw,y.repeat=Q3,y.replace=X3,y.result=T3,y.round=qx,y.runInContext=E,y.sample=dw,y.size=pw,y.snakeCase=Y3,y.some=gw,y.sortedIndex=f_,y.sortedIndexBy=h_,y.sortedIndexOf=p_,y.sortedLastIndex=g_,y.sortedLastIndexBy=m_,y.sortedLastIndexOf=v_,y.startCase=ex,y.startsWith=tx,y.subtract=Kx,y.sum=Gx,y.sumBy=Vx,y.template=nx,y.times=Ox,y.toFinite=ar,y.toInteger=xe,y.toLength=np,y.toLower=rx,y.toNumber=vn,y.toSafeInteger=r3,y.toString=Ge,y.toUpper=ix,y.trim=sx,y.trimEnd=ox,y.trimStart=ax,y.truncate=lx,y.unescape=cx,y.uniqueId=Px,y.upperCase=ux,y.upperFirst=Wc,y.each=zh,y.eachRight=Fh,y.first=Dh,Kc(y,function(){var r={};return Nn(y,function(s,l){Ve.call(y.prototype,l)||(r[l]=s)}),r}(),{chain:!1}),y.VERSION=i,dn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),dn(["drop","take"],function(r,s){Le.prototype[r]=function(l){l=l===n?1:_t(xe(l),0);var f=this.__filtered__&&!s?new Le(this):this.clone();return f.__filtered__?f.__takeCount__=Rt(l,f.__takeCount__):f.__views__.push({size:Rt(l,ee),type:r+(f.__dir__<0?"Right":"")}),f},Le.prototype[r+"Right"]=function(l){return this.reverse()[r](l).reverse()}}),dn(["filter","map","takeWhile"],function(r,s){var l=s+1,f=l==ie||l==H;Le.prototype[r]=function(g){var b=this.clone();return b.__iteratees__.push({iteratee:he(g,3),type:l}),b.__filtered__=b.__filtered__||f,b}}),dn(["head","last"],function(r,s){var l="take"+(s?"Right":"");Le.prototype[r]=function(){return this[l](1).value()[0]}}),dn(["initial","tail"],function(r,s){var l="drop"+(s?"":"Right");Le.prototype[r]=function(){return this.__filtered__?new Le(this):this[l](1)}}),Le.prototype.compact=function(){return this.filter(qt)},Le.prototype.find=function(r){return this.filter(r).head()},Le.prototype.findLast=function(r){return this.reverse().find(r)},Le.prototype.invokeMap=Ee(function(r,s){return typeof r=="function"?new Le(this):this.map(function(l){return Rs(l,r,s)})}),Le.prototype.reject=function(r){return this.filter(da(he(r)))},Le.prototype.slice=function(r,s){r=xe(r);var l=this;return l.__filtered__&&(r>0||s<0)?new Le(l):(r<0?l=l.takeRight(-r):r&&(l=l.drop(r)),s!==n&&(s=xe(s),l=s<0?l.dropRight(-s):l.take(s-r)),l)},Le.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Le.prototype.toArray=function(){return this.take(ee)},Nn(Le.prototype,function(r,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),g=y[f?"take"+(s=="last"?"Right":""):s],b=f||/^find/.test(s);g&&(y.prototype[s]=function(){var $=this.__wrapped__,C=f?[1]:arguments,I=$ instanceof Le,j=C[0],N=I||we($),W=function(Ie){var Be=g.apply(y,Cr([Ie],C));return f&&V?Be[0]:Be};N&&l&&typeof j=="function"&&j.length!=1&&(I=N=!1);var V=this.__chain__,ae=!!this.__actions__.length,ge=b&&!V,Ce=I&&!ae;if(!b&&N){$=Ce?$:new Le(this);var me=r.apply($,C);return me.__actions__.push({func:aa,args:[W],thisArg:n}),new hn(me,V)}return ge&&Ce?r.apply(this,C):(me=this.thru(W),ge?f?me.value()[0]:me.value():me)})}),dn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Lo[r],l=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var g=arguments;if(f&&!this.__chain__){var b=this.value();return s.apply(we(b)?b:[],g)}return this[l](function($){return s.apply(we($)?$:[],g)})}}),Nn(Le.prototype,function(r,s){var l=y[s];if(l){var f=l.name+"";Ve.call(Oi,f)||(Oi[f]=[]),Oi[f].push({name:s,func:l})}}),Oi[ea(n,O).name]=[{name:"wrapper",func:n}],Le.prototype.clone=cy,Le.prototype.reverse=uy,Le.prototype.value=dy,y.prototype.at=N_,y.prototype.chain=H_,y.prototype.commit=z_,y.prototype.next=F_,y.prototype.plant=Z_,y.prototype.reverse=q_,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=K_,y.prototype.first=y.prototype.head,ks&&(y.prototype[ks]=W_),y},Ai=z2();ni?((ni.exports=Ai)._=Ai,ql._=Ai):St._=Ai}).call(dr)})(Da,Da.exports);var w4=Da.exports;const x4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),mg=(e={})=>(()=>{const t=x4();return rt(t,e,!0,!0),t})(),$4=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),k4=P('<span class="inline-block h-4 w-4 text-gray-700">'),mo=e=>{const[t,n]=$e(!1),i=()=>n(o=>!o);return(()=>{const o=$4(),a=o.firstChild,c=a.firstChild,u=c.firstChild,d=c.nextSibling;return A(c,w(ue,{get when(){return e.icon},keyed:!0,children:p=>(()=>{const h=k4();return A(h,p),h})()}),u),A(u,()=>e.name),d.$$click=()=>i(),A(d,w(mg,{})),A(o,w(ue,{get when(){return t()},get children(){return e.settings()}}),null),o})()};vt(["click"]);const C4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),vg=(e={})=>(()=>{const t=C4();return rt(t,e,!0,!0),t})();var S4=typeof dr=="object"&&dr&&dr.Object===Object&&dr,yg=S4,E4=yg,T4=typeof self=="object"&&self&&self.Object===Object&&self,A4=E4||T4||Function("return this")(),Un=A4,I4=Un,R4=I4.Symbol,as=R4,xp=as,bg=Object.prototype,O4=bg.hasOwnProperty,L4=bg.toString,Ds=xp?xp.toStringTag:void 0;function P4(e){var t=O4.call(e,Ds),n=e[Ds];try{e[Ds]=void 0;var i=!0}catch{}var o=L4.call(e);return i&&(t?e[Ds]=n:delete e[Ds]),o}var M4=P4,B4=Object.prototype,U4=B4.toString;function D4(e){return U4.call(e)}var j4=D4,$p=as,N4=M4,H4=j4,z4="[object Null]",F4="[object Undefined]",kp=$p?$p.toStringTag:void 0;function W4(e){return e==null?e===void 0?F4:z4:kp&&kp in Object(e)?N4(e):H4(e)}var ls=W4;function Z4(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Vn=Z4,q4=ls,K4=Vn,G4="[object AsyncFunction]",V4="[object Function]",Q4="[object GeneratorFunction]",X4="[object Proxy]";function Y4(e){if(!K4(e))return!1;var t=q4(e);return t==V4||t==Q4||t==G4||t==X4}var _g=Y4,J4=Un,e5=J4["__core-js_shared__"],t5=e5,Xc=t5,Cp=function(){var e=/[^.]+$/.exec(Xc&&Xc.keys&&Xc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function n5(e){return!!Cp&&Cp in e}var r5=n5,i5=Function.prototype,s5=i5.toString;function o5(e){if(e!=null){try{return s5.call(e)}catch{}try{return e+""}catch{}}return""}var wg=o5,a5=_g,l5=r5,c5=Vn,u5=wg,d5=/[\\^$.*+?()[\]{}|]/g,f5=/^\[object .+?Constructor\]$/,h5=Function.prototype,p5=Object.prototype,g5=h5.toString,m5=p5.hasOwnProperty,v5=RegExp("^"+g5.call(m5).replace(d5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function y5(e){if(!c5(e)||l5(e))return!1;var t=a5(e)?v5:f5;return t.test(u5(e))}var b5=y5;function _5(e,t){return e?.[t]}var w5=_5,x5=b5,$5=w5;function k5(e,t){var n=$5(e,t);return x5(n)?n:void 0}var wi=k5,C5=wi,S5=C5(Object,"create"),hl=S5,Sp=hl;function E5(){this.__data__=Sp?Sp(null):{},this.size=0}var T5=E5;function A5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var I5=A5,R5=hl,O5="__lodash_hash_undefined__",L5=Object.prototype,P5=L5.hasOwnProperty;function M5(e){var t=this.__data__;if(R5){var n=t[e];return n===O5?void 0:n}return P5.call(t,e)?t[e]:void 0}var B5=M5,U5=hl,D5=Object.prototype,j5=D5.hasOwnProperty;function N5(e){var t=this.__data__;return U5?t[e]!==void 0:j5.call(t,e)}var H5=N5,z5=hl,F5="__lodash_hash_undefined__";function W5(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=z5&&t===void 0?F5:t,this}var Z5=W5,q5=T5,K5=I5,G5=B5,V5=H5,Q5=Z5;function cs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}cs.prototype.clear=q5;cs.prototype.delete=K5;cs.prototype.get=G5;cs.prototype.has=V5;cs.prototype.set=Q5;var X5=cs;function Y5(){this.__data__=[],this.size=0}var J5=Y5;function e$(e,t){return e===t||e!==e&&t!==t}var Wu=e$,t$=Wu;function n$(e,t){for(var n=e.length;n--;)if(t$(e[n][0],t))return n;return-1}var pl=n$,r$=pl,i$=Array.prototype,s$=i$.splice;function o$(e){var t=this.__data__,n=r$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():s$.call(t,n,1),--this.size,!0}var a$=o$,l$=pl;function c$(e){var t=this.__data__,n=l$(t,e);return n<0?void 0:t[n][1]}var u$=c$,d$=pl;function f$(e){return d$(this.__data__,e)>-1}var h$=f$,p$=pl;function g$(e,t){var n=this.__data__,i=p$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var m$=g$,v$=J5,y$=a$,b$=u$,_$=h$,w$=m$;function us(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}us.prototype.clear=v$;us.prototype.delete=y$;us.prototype.get=b$;us.prototype.has=_$;us.prototype.set=w$;var gl=us,x$=wi,$$=Un,k$=x$($$,"Map"),Zu=k$,Ep=X5,C$=gl,S$=Zu;function E$(){this.size=0,this.__data__={hash:new Ep,map:new(S$||C$),string:new Ep}}var T$=E$;function A$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var I$=A$,R$=I$;function O$(e,t){var n=e.__data__;return R$(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ml=O$,L$=ml;function P$(e){var t=L$(this,e).delete(e);return this.size-=t?1:0,t}var M$=P$,B$=ml;function U$(e){return B$(this,e).get(e)}var D$=U$,j$=ml;function N$(e){return j$(this,e).has(e)}var H$=N$,z$=ml;function F$(e,t){var n=z$(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var W$=F$,Z$=T$,q$=M$,K$=D$,G$=H$,V$=W$;function ds(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ds.prototype.clear=Z$;ds.prototype.delete=q$;ds.prototype.get=K$;ds.prototype.has=G$;ds.prototype.set=V$;var qu=ds,Q$="__lodash_hash_undefined__";function X$(e){return this.__data__.set(e,Q$),this}var Y$=X$;function J$(e){return this.__data__.has(e)}var e6=J$,t6=qu,n6=Y$,r6=e6;function ja(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new t6;++t<n;)this.add(e[t])}ja.prototype.add=ja.prototype.push=n6;ja.prototype.has=r6;var xg=ja;function i6(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var s6=i6;function o6(e){return e!==e}var a6=o6;function l6(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var c6=l6,u6=s6,d6=a6,f6=c6;function h6(e,t,n){return t===t?f6(e,t,n):u6(e,d6,n)}var p6=h6,g6=p6;function m6(e,t){var n=e==null?0:e.length;return!!n&&g6(e,t,0)>-1}var v6=m6;function y6(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var b6=y6;function _6(e,t){return e.has(t)}var $g=_6,w6=wi,x6=Un,$6=w6(x6,"Set"),kg=$6;function k6(){}var C6=k6;function S6(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Ku=S6,Yc=kg,E6=C6,T6=Ku,A6=1/0,I6=Yc&&1/T6(new Yc([,-0]))[1]==A6?function(e){return new Yc(e)}:E6,R6=I6,O6=xg,L6=v6,P6=b6,M6=$g,B6=R6,U6=Ku,D6=200;function j6(e,t,n){var i=-1,o=L6,a=e.length,c=!0,u=[],d=u;if(n)c=!1,o=P6;else if(a>=D6){var p=t?null:B6(e);if(p)return U6(p);c=!1,o=M6,d=new O6}else d=t?[]:u;e:for(;++i<a;){var h=e[i],m=t?t(h):h;if(h=n||h!==0?h:0,c&&m===m){for(var v=d.length;v--;)if(d[v]===m)continue e;t&&d.push(m),u.push(h)}else o(d,m,n)||(d!==u&&d.push(m),u.push(h))}return u}var Cg=j6,N6=Cg;function H6(e){return e&&e.length?N6(e):[]}var z6=H6;const Fr=go(z6),F6=P('<div class="block shrink-0 overflow-hidden border-b p-1">'),Ra=e=>(()=>{const t=F6();return A(t,()=>e.children),t})(),W6={},Z6=Object.freeze(Object.defineProperty({__proto__:null,default:W6},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const De=BigInt(0),at=BigInt(1),Hr=BigInt(2),Zs=BigInt(3),Tp=BigInt(8),Xe=Object.freeze({a:De,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:at,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),Ap=(e,t)=>(e+t/Hr)/t,ga={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=Xe,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-at*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,c=BigInt("0x100000000000000000000000000000000"),u=Ap(a*e,t),d=Ap(-i*e,t);let p=Y(e-u*n-d*o,t),h=Y(-u*i-d*a,t);const m=p>c,v=h>c;if(m&&(p=t-p),v&&(h=t-h),p>c||h>c)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:m,k1:p,k2neg:v,k2:h}}},Rn=32,Gi=32,q6=32,Na=Rn+1,Ha=2*Rn+1;function Ip(e){const{a:t,b:n}=Xe,i=Y(e*e),o=Y(i*e);return Y(o+t*e+n)}const ma=Xe.a===De;class Gu extends Error{constructor(t){super(t)}}function Rp(e){if(!(e instanceof qe))throw new TypeError("JacobianPoint expected")}class qe{constructor(t,n,i){this.x=t,this.y=n,this.z=i}static fromAffine(t){if(!(t instanceof je))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(je.ZERO)?qe.ZERO:new qe(t.x,t.y,at)}static toAffineBatch(t){const n=X6(t.map(i=>i.z));return t.map((i,o)=>i.toAffine(n[o]))}static normalizeZ(t){return qe.toAffineBatch(t).map(qe.fromAffine)}equals(t){Rp(t);const{x:n,y:i,z:o}=this,{x:a,y:c,z:u}=t,d=Y(o*o),p=Y(u*u),h=Y(n*p),m=Y(a*d),v=Y(Y(i*u)*p),_=Y(Y(c*o)*d);return h===m&&v===_}negate(){return new qe(this.x,Y(-this.y),this.z)}double(){const{x:t,y:n,z:i}=this,o=Y(t*t),a=Y(n*n),c=Y(a*a),u=t+a,d=Y(Hr*(Y(u*u)-o-c)),p=Y(Zs*o),h=Y(p*p),m=Y(h-Hr*d),v=Y(p*(d-m)-Tp*c),_=Y(Hr*n*i);return new qe(m,v,_)}add(t){Rp(t);const{x:n,y:i,z:o}=this,{x:a,y:c,z:u}=t;if(a===De||c===De)return this;if(n===De||i===De)return t;const d=Y(o*o),p=Y(u*u),h=Y(n*p),m=Y(a*d),v=Y(Y(i*u)*p),_=Y(Y(c*o)*d),x=Y(m-h),k=Y(_-v);if(x===De)return k===De?this.double():qe.ZERO;const S=Y(x*x),O=Y(x*S),U=Y(h*S),M=Y(k*k-O-Hr*U),R=Y(k*(U-M)-v*O),T=Y(o*u*x);return new qe(M,R,T)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const n=qe.ZERO;if(typeof t=="bigint"&&t===De)return n;let i=Pp(t);if(i===at)return this;if(!ma){let m=n,v=this;for(;i>De;)i&at&&(m=m.add(v)),v=v.double(),i>>=at;return m}let{k1neg:o,k1:a,k2neg:c,k2:u}=ga.splitScalar(i),d=n,p=n,h=this;for(;a>De||u>De;)a&at&&(d=d.add(h)),u&at&&(p=p.add(h)),h=h.double(),a>>=at,u>>=at;return o&&(d=d.negate()),c&&(p=p.negate()),p=new qe(Y(p.x*ga.beta),p.y,p.z),d.add(p)}precomputeWindow(t){const n=ma?128/t+1:256/t+1,i=[];let o=this,a=o;for(let c=0;c<n;c++){a=o,i.push(a);for(let u=1;u<2**(t-1);u++)a=a.add(o),i.push(a);o=a.double()}return i}wNAF(t,n){!n&&this.equals(qe.BASE)&&(n=je.BASE);const i=n&&n._WINDOW_SIZE||1;if(256%i)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=n&&vu.get(n);o||(o=this.precomputeWindow(i),n&&i!==1&&(o=qe.normalizeZ(o),vu.set(n,o)));let a=qe.ZERO,c=qe.BASE;const u=1+(ma?128/i:256/i),d=2**(i-1),p=BigInt(2**i-1),h=2**i,m=BigInt(i);for(let v=0;v<u;v++){const _=v*d;let x=Number(t&p);t>>=m,x>d&&(x-=h,t+=at);const k=_,S=_+Math.abs(x)-1,O=v%2!==0,U=x<0;x===0?c=c.add(va(O,o[k])):a=a.add(va(U,o[S]))}return{p:a,f:c}}multiply(t,n){let i=Pp(t),o,a;if(ma){const{k1neg:c,k1:u,k2neg:d,k2:p}=ga.splitScalar(i);let{p:h,f:m}=this.wNAF(u,n),{p:v,f:_}=this.wNAF(p,n);h=va(c,h),v=va(d,v),v=new qe(Y(v.x*ga.beta),v.y,v.z),o=h.add(v),a=m.add(_)}else{const{p:c,f:u}=this.wNAF(i,n);o=c,a=u}return qe.normalizeZ([o,a])[0]}toAffine(t){const{x:n,y:i,z:o}=this,a=this.equals(qe.ZERO);t==null&&(t=a?Tp:fs(o));const c=t,u=Y(c*c),d=Y(u*c),p=Y(n*u),h=Y(i*d),m=Y(o*c);if(a)return je.ZERO;if(m!==at)throw new Error("invZ was invalid");return new je(p,h)}}qe.BASE=new qe(Xe.Gx,Xe.Gy,at);qe.ZERO=new qe(De,at,De);function va(e,t){const n=t.negate();return e?n:t}const vu=new WeakMap;class je{constructor(t,n){this.x=t,this.y=n}_setWindowSize(t){this._WINDOW_SIZE=t,vu.delete(this)}hasEvenY(){return this.y%Hr===De}static fromCompressedHex(t){const n=t.length===32,i=on(n?t:t.subarray(1));if(!Oa(i))throw new Error("Point is not on curve");const o=Ip(i);let a=Q6(o);const c=(a&at)===at;n?c&&(a=Y(-a)):(t[0]&1)===1!==c&&(a=Y(-a));const u=new je(i,a);return u.assertValidity(),u}static fromUncompressedHex(t){const n=on(t.subarray(1,Rn+1)),i=on(t.subarray(Rn+1,Rn*2+1)),o=new je(n,i);return o.assertValidity(),o}static fromHex(t){const n=Zn(t),i=n.length,o=n[0];if(i===Rn)return this.fromCompressedHex(n);if(i===Na&&(o===2||o===3))return this.fromCompressedHex(n);if(i===Ha&&o===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Na} compressed bytes or ${Ha} uncompressed bytes, not ${i}`)}static fromPrivateKey(t){return je.BASE.multiply(vi(t))}static fromSignature(t,n,i){const{r:o,s:a}=Sg(n);if(![0,1,2,3].includes(i))throw new Error("Cannot recover: invalid recovery bit");const c=Vu(Zn(t)),{n:u}=Xe,d=i===2||i===3?o+u:o,p=fs(d,u),h=Y(-c*p,u),m=Y(a*p,u),v=i&1?"03":"02",_=je.fromHex(v+Wr(d)),x=je.BASE.multiplyAndAddUnsafe(_,h,m);if(!x)throw new Error("Cannot recover signature: point at infinify");return x.assertValidity(),x}toRawBytes(t=!1){return Zr(this.toHex(t))}toHex(t=!1){const n=Wr(this.x);return t?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${Wr(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:n,y:i}=this;if(!Oa(n)||!Oa(i))throw new Error(t);const o=Y(i*i),a=Ip(n);if(Y(o-a)!==De)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new je(this.x,Y(-this.y))}double(){return qe.fromAffine(this).double().toAffine()}add(t){return qe.fromAffine(this).add(qe.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return qe.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,n,i){const o=qe.fromAffine(this),a=n===De||n===at||this!==je.BASE?o.multiplyUnsafe(n):o.multiply(n),c=qe.fromAffine(t).multiplyUnsafe(i),u=a.add(c);return u.equals(qe.ZERO)?void 0:u.toAffine()}}je.BASE=new je(Xe.Gx,Xe.Gy);je.ZERO=new je(De,De);function Op(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function Lp(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${Vi(e)}`);const t=e[1],n=e.subarray(2,t+2);if(!t||n.length!==t)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:on(n),left:e.subarray(t+2)}}function K6(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${Vi(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:n}=Lp(e.subarray(2)),{data:i,left:o}=Lp(n);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${Vi(o)}`);return{r:t,s:i}}class pr{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromCompact(t){const n=t instanceof Uint8Array,i="Signature.fromCompact";if(typeof t!="string"&&!n)throw new TypeError(`${i}: Expected string or Uint8Array`);const o=n?Vi(t):t;if(o.length!==128)throw new Error(`${i}: Expected 64-byte hex`);return new pr(za(o.slice(0,64)),za(o.slice(64,128)))}static fromDER(t){const n=t instanceof Uint8Array;if(typeof t!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:i,s:o}=K6(n?t:Zr(t));return new pr(i,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:n}=this;if(!Xi(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Xi(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=Xe.n>>at;return this.s>t}normalizeS(){return this.hasHighS()?new pr(this.r,Y(-this.s,Xe.n)):this}toDERRawBytes(){return Zr(this.toDERHex())}toDERHex(){const t=Op(js(this.s)),n=Op(js(this.r)),i=t.length/2,o=n.length/2,a=js(i),c=js(o);return`30${js(o+i+4)}02${c}${n}02${a}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return Zr(this.toCompactHex())}toCompactHex(){return Wr(this.r)+Wr(this.s)}}function Dr(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}const G6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Vi(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let n=0;n<e.length;n++)t+=G6[e[n]];return t}const V6=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function Wr(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(De<=e&&e<V6))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function Qi(e){const t=Zr(Wr(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function js(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function za(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function Zr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}function on(e){return za(Vi(e))}function Zn(e){return e instanceof Uint8Array?Uint8Array.from(e):Zr(e)}function Pp(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&Xi(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function Y(e,t=Xe.P){const n=e%t;return n>=De?n:t+n}function yn(e,t){const{P:n}=Xe;let i=e;for(;t-- >De;)i*=i,i%=n;return i}function Q6(e){const{P:t}=Xe,n=BigInt(6),i=BigInt(11),o=BigInt(22),a=BigInt(23),c=BigInt(44),u=BigInt(88),d=e*e*e%t,p=d*d*e%t,h=yn(p,Zs)*p%t,m=yn(h,Zs)*p%t,v=yn(m,Hr)*d%t,_=yn(v,i)*v%t,x=yn(_,o)*_%t,k=yn(x,c)*x%t,S=yn(k,u)*k%t,O=yn(S,c)*x%t,U=yn(O,Zs)*p%t,M=yn(U,a)*_%t,R=yn(M,n)*d%t,T=yn(R,Hr);if(T*T%t!==e)throw new Error("Cannot find square root");return T}function fs(e,t=Xe.P){if(e===De||t<=De)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=Y(e,t),i=t,o=De,a=at;for(;n!==De;){const u=i/n,d=i%n,p=o-a*u;i=n,n=d,o=a,a=p}if(i!==at)throw new Error("invert: does not exist");return Y(o,t)}function X6(e,t=Xe.P){const n=new Array(e.length),i=e.reduce((a,c,u)=>c===De?a:(n[u]=a,Y(a*c,t)),at),o=fs(i,t);return e.reduceRight((a,c,u)=>c===De?a:(n[u]=Y(a*n[u],t),Y(a*c,t)),o),n}function Y6(e){const t=e.length*8-Gi*8,n=on(e);return t>0?n>>BigInt(t):n}function Vu(e,t=!1){const n=Y6(e);if(t)return n;const{n:i}=Xe;return n>=i?n-i:n}let Fi,qs;class J6{constructor(t,n){if(this.hashLen=t,this.qByteLen=n,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return Te.hmacSha256(this.k,...t)}hmacSync(...t){return qs(this.k,...t)}checkSync(){if(typeof qs!="function")throw new Gu("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const i=this.v.slice();n.push(i),t+=this.v.length}return Dr(...n)}generateSync(){this.checkSync(),this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const i=this.v.slice();n.push(i),t+=this.v.length}return Dr(...n)}}function Xi(e){return De<e&&e<Xe.n}function Oa(e){return De<e&&e<Xe.P}function e8(e,t,n,i=!0){const{n:o}=Xe,a=Vu(e,!0);if(!Xi(a))return;const c=fs(a,o),u=je.BASE.multiply(a),d=Y(u.x,o);if(d===De)return;const p=Y(c*Y(t+n*d,o),o);if(p===De)return;let h=new pr(d,p),m=(u.x===h.r?0:2)|Number(u.y&at);return i&&h.hasHighS()&&(h=h.normalizeS(),m^=1),{sig:h,recovery:m}}function vi(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*Gi)throw new Error("Expected 32 bytes of private key");t=za(e)}else if(e instanceof Uint8Array){if(e.length!==Gi)throw new Error("Expected 32 bytes of private key");t=on(e)}else throw new TypeError("Expected valid private key");if(!Xi(t))throw new Error("Expected private key: 0 < key < n");return t}function Qu(e){return e instanceof je?(e.assertValidity(),e):je.fromHex(e)}function Sg(e){if(e instanceof pr)return e.assertValidity(),e;try{return pr.fromDER(e)}catch{return pr.fromCompact(e)}}function t8(e,t=!1){return je.fromPrivateKey(e).toRawBytes(t)}function Mp(e){const t=e instanceof Uint8Array,n=typeof e=="string",i=(t||n)&&e.length;return t?i===Na||i===Ha:n?i===Na*2||i===Ha*2:e instanceof je}function Eg(e,t,n=!1){if(Mp(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Mp(t))throw new TypeError("getSharedSecret: second arg must be public key");const i=Qu(t);return i.assertValidity(),i.multiply(vi(e)).toRawBytes(n)}function Tg(e){const t=e.length>Rn?e.slice(0,Rn):e;return on(t)}function n8(e){const t=Tg(e),n=Y(t,Xe.n);return Ag(n<De?t:n)}function Ag(e){return Qi(e)}function r8(e,t,n){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const i=Zn(e),o=vi(t),a=[Ag(o),n8(i)];if(n!=null){n===!0&&(n=Te.randomBytes(Rn));const d=Zn(n);if(d.length!==Rn)throw new Error(`sign: Expected ${Rn} bytes of extra data`);a.push(d)}const c=Dr(...a),u=Tg(i);return{seed:c,m:u,d:o}}function i8(e,t){const{sig:n,recovery:i}=e,{der:o,recovered:a}=Object.assign({canonical:!0,der:!0},t),c=o?n.toDERRawBytes():n.toCompactRawBytes();return a?[c,i]:c}function s8(e,t,n={}){const{seed:i,m:o,d:a}=r8(e,t,n.extraEntropy),c=new J6(q6,Gi);c.reseedSync(i);let u;for(;!(u=e8(c.generateSync(),o,a,n.canonical));)c.reseedSync();return i8(u,n)}const o8={strict:!0};function a8(e,t,n,i=o8){let o;try{o=Sg(e),t=Zn(t)}catch{return!1}const{r:a,s:c}=o;if(i.strict&&o.hasHighS())return!1;const u=Vu(t);let d;try{d=Qu(n)}catch{return!1}const{n:p}=Xe,h=fs(c,p),m=Y(u*h,p),v=Y(a*h,p),_=je.BASE.multiplyAndAddUnsafe(d,m,v);return _?Y(_.x,p)===a:!1}function Fa(e){return Y(on(e),Xe.n)}class Yi{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromHex(t){const n=Zn(t);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);const i=on(n.subarray(0,32)),o=on(n.subarray(32,64));return new Yi(i,o)}assertValidity(){const{r:t,s:n}=this;if(!Oa(t)||!Xi(n))throw new Error("Invalid signature")}toHex(){return Wr(this.r)+Wr(this.s)}toRawBytes(){return Zr(this.toHex())}}function l8(e){return je.fromPrivateKey(e).toRawX()}class Ig{constructor(t,n,i=Te.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=Zn(t);const{x:o,scalar:a}=this.getScalar(vi(n));if(this.px=o,this.d=a,this.rand=Zn(i),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const n=je.fromPrivateKey(t),i=n.hasEvenY()?t:Xe.n-t;return{point:n,scalar:i,x:n.toRawX()}}initNonce(t,n){return Qi(t^on(n))}finalizeNonce(t){const n=Y(on(t),Xe.n);if(n===De)throw new Error("sign: Creation of signature failed. k is zero");const{point:i,x:o,scalar:a}=this.getScalar(n);return{R:i,rx:o,k:a}}finalizeSig(t,n,i,o){return new Yi(t.x,Y(n+i*o,Xe.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:n,px:i,rand:o}=this,a=Te.taggedHash,c=this.initNonce(n,await a(Ur.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(await a(Ur.nonce,c,i,t)),h=Fa(await a(Ur.challenge,d,i,t)),m=this.finalizeSig(u,p,h,n);return await Lg(m,t,i)||this.error(),m}calcSync(){const{m:t,d:n,px:i,rand:o}=this,a=Te.taggedHashSync,c=this.initNonce(n,a(Ur.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(a(Ur.nonce,c,i,t)),h=Fa(a(Ur.challenge,d,i,t)),m=this.finalizeSig(u,p,h,n);return Pg(m,t,i)||this.error(),m}}async function c8(e,t,n){return new Ig(e,t,n).calc()}function u8(e,t,n){return new Ig(e,t,n).calcSync()}function Rg(e,t,n){const i=e instanceof Yi,o=i?e:Yi.fromHex(e);return i&&o.assertValidity(),{...o,m:Zn(t),P:Qu(n)}}function Og(e,t,n,i){const o=je.BASE.multiplyAndAddUnsafe(t,vi(n),Y(-i,Xe.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function Lg(e,t,n){try{const{r:i,s:o,m:a,P:c}=Rg(e,t,n),u=Fa(await Te.taggedHash(Ur.challenge,Qi(i),c.toRawX(),a));return Og(i,c,o,u)}catch{return!1}}function Pg(e,t,n){try{const{r:i,s:o,m:a,P:c}=Rg(e,t,n),u=Fa(Te.taggedHashSync(Ur.challenge,Qi(i),c.toRawX(),a));return Og(i,c,o,u)}catch(i){if(i instanceof Gu)throw i;return!1}}const vl={Signature:Yi,getPublicKey:l8,sign:c8,verify:Lg,signSync:u8,verifySync:Pg};je.BASE._setWindowSize(8);const nn={node:Z6,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Ur={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},ya={},Te={bytesToHex:Vi,hexToBytes:Zr,concatBytes:Dr,mod:Y,invert:fs,isValidPrivateKey(e){try{return vi(e),!0}catch{return!1}},_bigintTo32Bytes:Qi,_normalizePrivateKey:vi,hashToPrivateKey:e=>{e=Zn(e);const t=Gi+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const n=Y(on(e),Xe.n-at)+at;return Qi(n)},randomBytes:(e=32)=>{if(nn.web)return nn.web.getRandomValues(new Uint8Array(e));if(nn.node){const{randomBytes:t}=nn.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>Te.hashToPrivateKey(Te.randomBytes(Gi+8)),precompute(e=8,t=je.BASE){const n=t===je.BASE?t:new je(t.x,t.y);return n._setWindowSize(e),n.multiply(Zs),n},sha256:async(...e)=>{if(nn.web){const t=await nn.web.subtle.digest("SHA-256",Dr(...e));return new Uint8Array(t)}else if(nn.node){const{createHash:t}=nn.node,n=t("sha256");return e.forEach(i=>n.update(i)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(nn.web){const n=await nn.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),i=Dr(...t),o=await nn.web.subtle.sign("HMAC",n,i);return new Uint8Array(o)}else if(nn.node){const{createHmac:n}=nn.node,i=n("sha256",e);return t.forEach(o=>i.update(o)),Uint8Array.from(i.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let n=ya[e];if(n===void 0){const i=await Te.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));n=Dr(i,i),ya[e]=n}return Te.sha256(n,...t)},taggedHashSync:(e,...t)=>{if(typeof Fi!="function")throw new Gu("sha256Sync is undefined, you need to set it");let n=ya[e];if(n===void 0){const i=Fi(Uint8Array.from(e,o=>o.charCodeAt(0)));n=Dr(i,i),ya[e]=n}return Fi(n,...t)},_JacobianPoint:qe};Object.defineProperties(Te,{sha256Sync:{configurable:!1,get(){return Fi},set(e){Fi||(Fi=e)}},hmacSha256Sync:{configurable:!1,get(){return qs},set(e){qs||(qs=e)}}});function yu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function d8(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Mg(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function f8(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");yu(e.outputLen),yu(e.blockLen)}function h8(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function p8(e,t){Mg(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const hi={number:yu,bool:d8,bytes:Mg,hash:f8,exists:h8,output:p8},zs={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},g8=Object.freeze(Object.defineProperty({__proto__:null,crypto:zs},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const m8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),v8=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),An=(e,t)=>e<<32-t|e>>>t,Bg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Bg)throw new Error("Non little-endian hardware is not supported");const y8=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Ug(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=y8[e[n]];return t}function Dg(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const jg=async()=>{};async function b8(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await jg(),i+=a)}}function Xu(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function vo(e){if(typeof e=="string"&&(e=Xu(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function Fs(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class Yu{clone(){return this._cloneInto()}}const _8=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function w8(e,t){if(t!==void 0&&(typeof t!="object"||!_8(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function yl(e){const t=i=>e().update(vo(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function x8(e){const t=(i,o)=>e(o).update(vo(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function Ng(e=32){if(zs.web)return zs.web.getRandomValues(new Uint8Array(e));if(zs.node)return new Uint8Array(zs.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}const $8=Object.freeze(Object.defineProperty({__proto__:null,Hash:Yu,asyncLoop:b8,bytesToHex:Ug,checkOpts:w8,concatBytes:Fs,createView:gi,hexToBytes:Dg,isLE:Bg,nextTick:jg,randomBytes:Ng,rotr:An,toBytes:vo,u32:v8,u8:m8,utf8ToBytes:Xu,wrapConstructor:yl,wrapConstructorWithOpts:x8},Symbol.toStringTag,{value:"Module"}));function k8(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,p=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+p,u,i)}let Hg=class extends Yu{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){hi.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=vo(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=gi(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){hi.exists(this),hi.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let m=c;m<o;m++)n[m]=0;k8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<p;m++)u.setUint32(4*m,h[m],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}};const C8=(e,t,n)=>e&t^~e&n,S8=(e,t,n)=>e&t^e&n^t&n,E8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Lr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Pr=new Uint32Array(64);class zg extends Hg{constructor(){super(64,32,8,!1),this.A=Lr[0]|0,this.B=Lr[1]|0,this.C=Lr[2]|0,this.D=Lr[3]|0,this.E=Lr[4]|0,this.F=Lr[5]|0,this.G=Lr[6]|0,this.H=Lr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:c,G:u,H:d}=this;return[t,n,i,o,a,c,u,d]}set(t,n,i,o,a,c,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=c|0,this.G=u|0,this.H=d|0}process(t,n){for(let m=0;m<16;m++,n+=4)Pr[m]=t.getUint32(n,!1);for(let m=16;m<64;m++){const v=Pr[m-15],_=Pr[m-2],x=An(v,7)^An(v,18)^v>>>3,k=An(_,17)^An(_,19)^_>>>10;Pr[m]=k+Pr[m-7]+x+Pr[m-16]|0}let{A:i,B:o,C:a,D:c,E:u,F:d,G:p,H:h}=this;for(let m=0;m<64;m++){const v=An(u,6)^An(u,11)^An(u,25),_=h+v+C8(u,d,p)+E8[m]+Pr[m]|0,k=(An(i,2)^An(i,13)^An(i,22))+S8(i,o,a)|0;h=p,p=d,d=u,u=c+_|0,c=a,a=o,o=i,i=_+k|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,c=c+this.D|0,u=u+this.E|0,d=d+this.F|0,p=p+this.G|0,h=h+this.H|0,this.set(i,o,a,c,u,d,p,h)}roundClean(){Pr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class T8 extends zg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const vr=yl(()=>new zg),A8=yl(()=>new T8),I8=Object.freeze(Object.defineProperty({__proto__:null,sha224:A8,sha256:vr},Symbol.toStringTag,{value:"Module"}));/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Yr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Dn(...e){const t=(o,a)=>c=>o(a(c)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Qn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Yr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Xn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function yo(e,t="="){if(Yr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function Fg(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Bp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(c=>{if(Yr(c),c<0||c>=t)throw new Error(`Wrong integer: ${c}`)});;){let c=0,u=!0;for(let d=i;d<a.length;d++){const p=a[d],h=t*c+p;if(!Number.isSafeInteger(h)||t*c/t!==c||h-p!==t*c)throw new Error("convertRadix: carry overflow");if(c=h%n,a[d]=Math.floor(h/n),!Number.isSafeInteger(a[d])||a[d]*n+c!==h)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(c),u)break}for(let c=0;c<e.length-1&&e[c]===0;c++)o.push(0);return o.reverse()}const Wg=(e,t)=>t?Wg(t,e%t):e,Wa=(e,t)=>e+(t-Wg(e,t));function bu(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Wa(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Wa(t,n)}`);let o=0,a=0;const c=2**n-1,u=[];for(const d of e){if(Yr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&c)>>>0);o&=2**a-1}if(o=o<<n-a&c,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function Zg(e){return Yr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Bp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Bp(t,e,2**8))}}}function yr(e,t=!1){if(Yr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Wa(8,e)>32||Wa(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return bu(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(bu(n,e,8,t))}}}function Up(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function qg(e,t){if(Yr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let c=0;c<e;c++)if(o[c]!==a[c])throw new Error("Invalid checksum");return i}}}const R8={alphabet:Qn,chain:Dn,checksum:qg,radix:Zg,radix2:yr,join:Xn,padding:yo},Kg=Dn(yr(4),Qn("0123456789ABCDEF"),Xn("")),Gg=Dn(yr(5),Qn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),yo(5),Xn("")),O8=Dn(yr(5),Qn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),yo(5),Xn("")),L8=Dn(yr(5),Qn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Xn(""),Fg(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Ji=Dn(yr(6),Qn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),yo(6),Xn("")),Vg=Dn(yr(6),Qn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),yo(6),Xn("")),Ju=e=>Dn(Zg(58),Qn(e),Xn("")),Xs=Ju("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),P8=Ju("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),M8=Ju("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Dp=[0,2,3,5,6,7,9,10,11],Qg={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Xs.encode(i).padStart(Dp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Dp.indexOf(i.length),a=Xs.decode(i);for(let c=0;c<a.length-o;c++)if(a[c]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},Xg=e=>Dn(qg(4,t=>e(e(t))),Xs),_u=Dn(Qn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Xn("")),jp=[996825010,642813549,513874426,1027748829,705979059];function Ns(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<jp.length;i++)(t>>i&1)===1&&(n^=jp[i]);return n}function Np(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const c=e.charCodeAt(a);if(c<33||c>126)throw new Error(`Invalid prefix (${e})`);o=Ns(o)^c>>5}o=Ns(o);for(let a=0;a<i;a++)o=Ns(o)^e.charCodeAt(a)&31;for(let a of t)o=Ns(o)^a;for(let a=0;a<6;a++)o=Ns(o);return o^=n,_u.encode(bu([o%2**30],30,5,!1))}function Yg(e){const t=e==="bech32"?1:734539939,n=yr(5),i=n.decode,o=n.encode,a=Up(i);function c(h,m,v=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(m)||m.length&&typeof m[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof m}`);const _=h.length+7+m.length;if(v!==!1&&_>v)throw new TypeError(`Length ${_} exceeds limit ${v}`);return h=h.toLowerCase(),`${h}1${_u.encode(m)}${Np(h,m,t)}`}function u(h,m=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||m!==!1&&h.length>m)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${m})`);const v=h.toLowerCase();if(h!==v&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=v;const _=h.lastIndexOf("1");if(_===0||_===-1)throw new Error('Letter "1" must be present between prefix and data only');const x=h.slice(0,_),k=h.slice(_+1);if(k.length<6)throw new Error("Data must be at least 6 characters long");const S=_u.decode(k).slice(0,-6),O=Np(x,S,t);if(!k.endsWith(O))throw new Error(`Invalid checksum in ${h}: expected "${O}"`);return{prefix:x,words:S}}const d=Up(u);function p(h){const{prefix:m,words:v}=u(h,!1);return{prefix:m,words:v,bytes:i(v)}}return{encode:c,decode:u,decodeToBytes:p,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Nt=Yg("bech32"),B8=Yg("bech32m"),Jg={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},e1=Dn(yr(4),Qn("0123456789abcdef"),Xn(""),Fg(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),Ys={utf8:Jg,hex:e1,base16:Kg,base32:Gg,base64:Ji,base64url:Vg,base58:Xs,base58xmr:Qg},t1=`Invalid encoding type. Available types: ${Object.keys(Ys).join(", ")}`,n1=(e,t)=>{if(typeof e!="string"||!Ys.hasOwnProperty(e))throw new TypeError(t1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return Ys[e].encode(t)},U8=n1,r1=(e,t)=>{if(!Ys.hasOwnProperty(e))throw new TypeError(t1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return Ys[e].decode(t)},D8=r1,j8=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Yr,base16:Kg,base32:Gg,base32crockford:L8,base32hex:O8,base58:Xs,base58check:Xg,base58flickr:P8,base58xmr:Qg,base58xrp:M8,base64:Ji,base64url:Vg,bech32:Nt,bech32m:B8,bytes:D8,bytesToString:n1,hex:e1,str:U8,stringToBytes:r1,utf8:Jg,utils:R8},Symbol.toStringTag,{value:"Module"}));var ed={};Object.defineProperty(ed,"__esModule",{value:!0});var td=ed.wordlist=void 0;td=ed.wordlist=`abandon
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
`);var rn={},Ct={};Object.defineProperty(Ct,"__esModule",{value:!0});Ct.output=Ct.exists=Ct.hash=Hi=Ct.bytes=Ct.bool=Ct.number=void 0;function Za(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}Ct.number=Za;function i1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}Ct.bool=i1;function nd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Hi=Ct.bytes=nd;function s1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Za(e.outputLen),Za(e.blockLen)}Ct.hash=s1;function o1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}Ct.exists=o1;function a1(e,t){nd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Ct.output=a1;const N8={number:Za,bool:i1,bytes:nd,hash:s1,exists:o1,output:a1};Ct.default=N8;var es={},l1={},bo={};const H8=fl(g8);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=H8,n=R=>new Uint8Array(R.buffer,R.byteOffset,R.byteLength);e.u8=n;const i=R=>new Uint32Array(R.buffer,R.byteOffset,Math.floor(R.byteLength/4));e.u32=i;const o=R=>new DataView(R.buffer,R.byteOffset,R.byteLength);e.createView=o;const a=(R,T)=>R<<32-T|R>>>T;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},(R,T)=>T.toString(16).padStart(2,"0"));function u(R){if(!(R instanceof Uint8Array))throw new Error("Uint8Array expected");let T="";for(let L=0;L<R.length;L++)T+=c[R[L]];return T}e.bytesToHex=u;function d(R){if(typeof R!="string")throw new TypeError("hexToBytes: expected string, got "+typeof R);if(R.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const T=new Uint8Array(R.length/2);for(let L=0;L<T.length;L++){const F=L*2,Z=R.slice(F,F+2),oe=Number.parseInt(Z,16);if(Number.isNaN(oe)||oe<0)throw new Error("Invalid byte sequence");T[L]=oe}return T}e.hexToBytes=d;const p=async()=>{};e.nextTick=p;async function h(R,T,L){let F=Date.now();for(let Z=0;Z<R;Z++){L(Z);const oe=Date.now()-F;oe>=0&&oe<T||(await(0,e.nextTick)(),F+=oe)}}e.asyncLoop=h;function m(R){if(typeof R!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof R}`);return new TextEncoder().encode(R)}e.utf8ToBytes=m;function v(R){if(typeof R=="string"&&(R=m(R)),!(R instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof R})`);return R}e.toBytes=v;function _(...R){if(!R.every(F=>F instanceof Uint8Array))throw new Error("Uint8Array list expected");if(R.length===1)return R[0];const T=R.reduce((F,Z)=>F+Z.length,0),L=new Uint8Array(T);for(let F=0,Z=0;F<R.length;F++){const oe=R[F];L.set(oe,Z),Z+=oe.length}return L}e.concatBytes=_;class x{clone(){return this._cloneInto()}}e.Hash=x;const k=R=>Object.prototype.toString.call(R)==="[object Object]"&&R.constructor===Object;function S(R,T){if(T!==void 0&&(typeof T!="object"||!k(T)))throw new TypeError("Options should be object or undefined");return Object.assign(R,T)}e.checkOpts=S;function O(R){const T=F=>R().update(v(F)).digest(),L=R();return T.outputLen=L.outputLen,T.blockLen=L.blockLen,T.create=()=>R(),T}e.wrapConstructor=O;function U(R){const T=(F,Z)=>R(Z).update(v(F)).digest(),L=R({});return T.outputLen=L.outputLen,T.blockLen=L.blockLen,T.create=F=>R(F),T}e.wrapConstructorWithOpts=U;function M(R=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(R));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(R).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=M})(bo);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=Ct,n=bo;class i extends n.Hash{constructor(c,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(c);const d=(0,n.toBytes)(u);if(this.iHash=c.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const p=this.blockLen,h=new Uint8Array(p);h.set(d.length>p?c.create().update(d).digest():d);for(let m=0;m<h.length;m++)h[m]^=54;this.iHash.update(h),this.oHash=c.create();for(let m=0;m<h.length;m++)h[m]^=106;this.oHash.update(h),h.fill(0)}update(c){return t.default.exists(this),this.iHash.update(c),this}digestInto(c){t.default.exists(this),t.default.bytes(c,this.outputLen),this.finished=!0,this.iHash.digestInto(c),this.oHash.update(c),this.oHash.digestInto(c),this.destroy()}digest(){const c=new Uint8Array(this.oHash.outputLen);return this.digestInto(c),c}_cloneInto(c){c||(c=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:p,destroyed:h,blockLen:m,outputLen:v}=this;return c=c,c.finished=p,c.destroyed=h,c.blockLen=m,c.outputLen=v,c.oHash=u._cloneInto(c.oHash),c.iHash=d._cloneInto(c.iHash),c}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,c,u)=>new i(a,c).update(u).digest();e.hmac=o,e.hmac.create=(a,c)=>new i(a,c)})(l1);Object.defineProperty(es,"__esModule",{value:!0});es.pbkdf2Async=es.pbkdf2=void 0;const ba=Ct,z8=l1,Wi=bo;function c1(e,t,n,i){ba.default.hash(e);const o=(0,Wi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:c,asyncTick:u}=o;if(ba.default.number(a),ba.default.number(c),ba.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Wi.toBytes)(t),p=(0,Wi.toBytes)(n),h=new Uint8Array(c),m=z8.hmac.create(e,d),v=m._cloneInto().update(p);return{c:a,dkLen:c,asyncTick:u,DK:h,PRF:m,PRFSalt:v}}function u1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function F8(e,t,n,i){const{c:o,dkLen:a,DK:c,PRF:u,PRFSalt:d}=c1(e,t,n,i);let p;const h=new Uint8Array(4),m=(0,Wi.createView)(h),v=new Uint8Array(u.outputLen);for(let _=1,x=0;x<a;_++,x+=u.outputLen){const k=c.subarray(x,x+u.outputLen);m.setInt32(0,_,!1),(p=d._cloneInto(p)).update(h).digestInto(v),k.set(v.subarray(0,k.length));for(let S=1;S<o;S++){u._cloneInto(p).update(v).digestInto(v);for(let O=0;O<k.length;O++)k[O]^=v[O]}}return u1(u,d,c,p,v)}es.pbkdf2=F8;async function W8(e,t,n,i){const{c:o,dkLen:a,asyncTick:c,DK:u,PRF:d,PRFSalt:p}=c1(e,t,n,i);let h;const m=new Uint8Array(4),v=(0,Wi.createView)(m),_=new Uint8Array(d.outputLen);for(let x=1,k=0;k<a;x++,k+=d.outputLen){const S=u.subarray(k,k+d.outputLen);v.setInt32(0,x,!1),(h=p._cloneInto(h)).update(m).digestInto(_),S.set(_.subarray(0,S.length)),await(0,Wi.asyncLoop)(o-1,c,O=>{d._cloneInto(h).update(_).digestInto(_);for(let U=0;U<S.length;U++)S[U]^=_[U]})}return u1(d,p,u,h,_)}es.pbkdf2Async=W8;const Z8=fl(I8);var bn={},bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.SHA2=void 0;const Jc=Ct,Hs=bo;function q8(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,p=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+p,u,i)}class K8 extends Hs.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Hs.createView)(this.buffer)}update(t){Jc.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Hs.toBytes)(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=(0,Hs.createView)(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Jc.default.exists(this),Jc.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let m=c;m<o;m++)n[m]=0;q8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Hs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<p;m++)u.setUint32(4*m,h[m],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}}bl.SHA2=K8;var d1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(G,re=!1){return re?{h:Number(G&t),l:Number(G>>n&t)}:{h:Number(G>>n&t)|0,l:Number(G&t)|0}}e.fromBig=i;function o(G,re=!1){let q=new Uint32Array(G.length),Q=new Uint32Array(G.length);for(let ie=0;ie<G.length;ie++){const{h:Ne,l:H}=i(G[ie],re);[q[ie],Q[ie]]=[Ne,H]}return[q,Q]}e.split=o;const a=(G,re)=>BigInt(G>>>0)<<n|BigInt(re>>>0);e.toBig=a;const c=(G,re,q)=>G>>>q,u=(G,re,q)=>G<<32-q|re>>>q,d=(G,re,q)=>G>>>q|re<<32-q,p=(G,re,q)=>G<<32-q|re>>>q,h=(G,re,q)=>G<<64-q|re>>>q-32,m=(G,re,q)=>G>>>q-32|re<<64-q,v=(G,re)=>re,_=(G,re)=>G,x=(G,re,q)=>G<<q|re>>>32-q,k=(G,re,q)=>re<<q|G>>>32-q,S=(G,re,q)=>re<<q-32|G>>>64-q,O=(G,re,q)=>G<<q-32|re>>>64-q;function U(G,re,q,Q){const ie=(re>>>0)+(Q>>>0);return{h:G+q+(ie/2**32|0)|0,l:ie|0}}e.add=U;const M=(G,re,q)=>(G>>>0)+(re>>>0)+(q>>>0),R=(G,re,q,Q)=>re+q+Q+(G/2**32|0)|0,T=(G,re,q,Q)=>(G>>>0)+(re>>>0)+(q>>>0)+(Q>>>0),L=(G,re,q,Q,ie)=>re+q+Q+ie+(G/2**32|0)|0,F=(G,re,q,Q,ie)=>(G>>>0)+(re>>>0)+(q>>>0)+(Q>>>0)+(ie>>>0),Z=(G,re,q,Q,ie,Ne)=>re+q+Q+ie+Ne+(G/2**32|0)|0,oe={fromBig:i,split:o,toBig:e.toBig,shrSH:c,shrSL:u,rotrSH:d,rotrSL:p,rotrBH:h,rotrBL:m,rotr32H:v,rotr32L:_,rotlSH:x,rotlSL:k,rotlBH:S,rotlBL:O,add:U,add3L:M,add3H:R,add4L:T,add4H:L,add5H:Z,add5L:F};e.default=oe})(d1);Object.defineProperty(bn,"__esModule",{value:!0});bn.sha384=bn.sha512_256=bn.sha512_224=wu=bn.sha512=bn.SHA512=void 0;const G8=bl,Se=d1,_l=bo,[V8,Q8]=Se.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Mr=new Uint32Array(80),Br=new Uint32Array(80);class _o extends G8.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:c,Dh:u,Dl:d,Eh:p,El:h,Fh:m,Fl:v,Gh:_,Gl:x,Hh:k,Hl:S}=this;return[t,n,i,o,a,c,u,d,p,h,m,v,_,x,k,S]}set(t,n,i,o,a,c,u,d,p,h,m,v,_,x,k,S){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=c|0,this.Dh=u|0,this.Dl=d|0,this.Eh=p|0,this.El=h|0,this.Fh=m|0,this.Fl=v|0,this.Gh=_|0,this.Gl=x|0,this.Hh=k|0,this.Hl=S|0}process(t,n){for(let M=0;M<16;M++,n+=4)Mr[M]=t.getUint32(n),Br[M]=t.getUint32(n+=4);for(let M=16;M<80;M++){const R=Mr[M-15]|0,T=Br[M-15]|0,L=Se.default.rotrSH(R,T,1)^Se.default.rotrSH(R,T,8)^Se.default.shrSH(R,T,7),F=Se.default.rotrSL(R,T,1)^Se.default.rotrSL(R,T,8)^Se.default.shrSL(R,T,7),Z=Mr[M-2]|0,oe=Br[M-2]|0,G=Se.default.rotrSH(Z,oe,19)^Se.default.rotrBH(Z,oe,61)^Se.default.shrSH(Z,oe,6),re=Se.default.rotrSL(Z,oe,19)^Se.default.rotrBL(Z,oe,61)^Se.default.shrSL(Z,oe,6),q=Se.default.add4L(F,re,Br[M-7],Br[M-16]),Q=Se.default.add4H(q,L,G,Mr[M-7],Mr[M-16]);Mr[M]=Q|0,Br[M]=q|0}let{Ah:i,Al:o,Bh:a,Bl:c,Ch:u,Cl:d,Dh:p,Dl:h,Eh:m,El:v,Fh:_,Fl:x,Gh:k,Gl:S,Hh:O,Hl:U}=this;for(let M=0;M<80;M++){const R=Se.default.rotrSH(m,v,14)^Se.default.rotrSH(m,v,18)^Se.default.rotrBH(m,v,41),T=Se.default.rotrSL(m,v,14)^Se.default.rotrSL(m,v,18)^Se.default.rotrBL(m,v,41),L=m&_^~m&k,F=v&x^~v&S,Z=Se.default.add5L(U,T,F,Q8[M],Br[M]),oe=Se.default.add5H(Z,O,R,L,V8[M],Mr[M]),G=Z|0,re=Se.default.rotrSH(i,o,28)^Se.default.rotrBH(i,o,34)^Se.default.rotrBH(i,o,39),q=Se.default.rotrSL(i,o,28)^Se.default.rotrBL(i,o,34)^Se.default.rotrBL(i,o,39),Q=i&a^i&u^a&u,ie=o&c^o&d^c&d;O=k|0,U=S|0,k=_|0,S=x|0,_=m|0,x=v|0,{h:m,l:v}=Se.default.add(p|0,h|0,oe|0,G|0),p=u|0,h=d|0,u=a|0,d=c|0,a=i|0,c=o|0;const Ne=Se.default.add3L(G,q,ie);i=Se.default.add3H(Ne,oe,re,Q),o=Ne|0}({h:i,l:o}=Se.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l:c}=Se.default.add(this.Bh|0,this.Bl|0,a|0,c|0),{h:u,l:d}=Se.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:p,l:h}=Se.default.add(this.Dh|0,this.Dl|0,p|0,h|0),{h:m,l:v}=Se.default.add(this.Eh|0,this.El|0,m|0,v|0),{h:_,l:x}=Se.default.add(this.Fh|0,this.Fl|0,_|0,x|0),{h:k,l:S}=Se.default.add(this.Gh|0,this.Gl|0,k|0,S|0),{h:O,l:U}=Se.default.add(this.Hh|0,this.Hl|0,O|0,U|0),this.set(i,o,a,c,u,d,p,h,m,v,_,x,k,S,O,U)}roundClean(){Mr.fill(0),Br.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}bn.SHA512=_o;class X8 extends _o{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class Y8 extends _o{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class J8 extends _o{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var wu=bn.sha512=(0,_l.wrapConstructor)(()=>new _o);bn.sha512_224=(0,_l.wrapConstructor)(()=>new X8);bn.sha512_256=(0,_l.wrapConstructor)(()=>new Y8);bn.sha384=(0,_l.wrapConstructor)(()=>new J8);const e7=fl($8),t7=fl(j8);Object.defineProperty(rn,"__esModule",{value:!0});var f1=rn.mnemonicToSeedSync=rn.mnemonicToSeed=x1=rn.validateMnemonic=rn.entropyToMnemonic=rn.mnemonicToEntropy=y1=rn.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const h1=Ct,p1=es,n7=Z8,g1=bn,r7=e7,_a=t7,i7=e=>e[0]==="あいこくしん";function m1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function rd(e){const t=m1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function v1(e){h1.default.bytes(e,16,20,24,28,32)}function s7(e,t=128){if(h1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return w1((0,r7.randomBytes)(t/8),e)}var y1=rn.generateMnemonic=s7;const o7=e=>{const t=8-e.length/4;return new Uint8Array([(0,n7.sha256)(e)[0]>>t<<t])};function b1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),_a.utils.chain(_a.utils.checksum(1,o7),_a.utils.radix2(11,!0),_a.utils.alphabet(e))}function _1(e,t){const{words:n}=rd(e),i=b1(t).decode(n);return v1(i),i}rn.mnemonicToEntropy=_1;function w1(e,t){return v1(e),b1(t).encode(e).join(i7(t)?"　":" ")}rn.entropyToMnemonic=w1;function a7(e,t){try{_1(e,t)}catch{return!1}return!0}var x1=rn.validateMnemonic=a7;const $1=e=>m1(`mnemonic${e}`);function l7(e,t=""){return(0,p1.pbkdf2Async)(g1.sha512,rd(e).nfkd,$1(t),{c:2048,dkLen:64})}rn.mnemonicToSeed=l7;function c7(e,t=""){return(0,p1.pbkdf2)(g1.sha512,rd(e).nfkd,$1(t),{c:2048,dkLen:64})}f1=rn.mnemonicToSeedSync=c7;class k1 extends Yu{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,hi.hash(t);const i=vo(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let c=0;c<a.length;c++)a[c]^=54;this.iHash.update(a),this.oHash=t.create();for(let c=0;c<a.length;c++)a[c]^=106;this.oHash.update(a),a.fill(0)}update(t){return hi.exists(this),this.iHash.update(t),this}digestInto(t){hi.exists(this),hi.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:c,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=c,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Js=(e,t,n)=>new k1(e,t).update(n).digest();Js.create=(e,t)=>new k1(e,t);const u7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),C1=Uint8Array.from({length:16},(e,t)=>t),d7=C1.map(e=>(9*e+5)%16);let id=[C1],sd=[d7];for(let e=0;e<4;e++)for(let t of[id,sd])t.push(t[e].map(n=>u7[n]));const S1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),f7=id.map((e,t)=>e.map(n=>S1[t][n])),h7=sd.map((e,t)=>e.map(n=>S1[t][n])),p7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),g7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),wa=(e,t)=>e<<t|e>>>32-t;function Hp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const xa=new Uint32Array(16);class m7 extends Hg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let _=0;_<16;_++,n+=4)xa[_]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,c=a,u=this.h2|0,d=u,p=this.h3|0,h=p,m=this.h4|0,v=m;for(let _=0;_<5;_++){const x=4-_,k=p7[_],S=g7[_],O=id[_],U=sd[_],M=f7[_],R=h7[_];for(let T=0;T<16;T++){const L=wa(i+Hp(_,a,u,p)+xa[O[T]]+k,M[T])+m|0;i=m,m=p,p=wa(u,10)|0,u=a,a=L}for(let T=0;T<16;T++){const L=wa(o+Hp(x,c,d,h)+xa[U[T]]+S,R[T])+v|0;o=v,v=h,h=wa(d,10)|0,d=c,c=L}}this.set(this.h1+u+h|0,this.h2+p+v|0,this.h3+m+o|0,this.h4+i+c|0,this.h0+a+d|0)}roundClean(){xa.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const v7=yl(()=>new m7);Te.hmacSha256Sync=(e,...t)=>Js(vr,e,Te.concatBytes(...t));const eu=Xg(vr);function zp(e){return BigInt(`0x${Ug(e)}`)}function y7(e){return Dg(e.toString(16).padStart(64,"0"))}const b7=Xu("Bitcoin seed"),tu={private:76066276,public:76067358},nu=2147483648,_7=e=>v7(vr(e)),w7=e=>gi(e).getUint32(0,!1),$a=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class fi{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||tu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Te.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:zp(t.privateKey),this.privKeyBytes=y7(this.privKey),this.pubKey=t8(t.privateKey,!0)}else if(t.publicKey)this.pubKey=je.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=_7(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return w7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return eu.encode(this.serialize(this.versions.private,Fs(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return eu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=tu){if(Hi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Js(wu,b7,t);return new fi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=tu){const i=eu.decode(t),o=gi(i),a=o.getUint32(0,!1),c={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new fi({...c,privateKey:u.slice(1)}):new fi({...c,publicKey:u})}static fromJSON(t){return fi.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let c=+a[1];if(!Number.isSafeInteger(c)||c>=nu)throw new Error("Invalid index");a[2]==="'"&&(c+=nu),i=i.deriveChild(c)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=$a(t);if(t>=nu){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=Fs(new Uint8Array([0]),u,n)}else n=Fs(this.pubKey,n);const i=Js(wu,this.chainCode,n),o=zp(i.slice(0,32)),a=i.slice(32);if(!Te.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const c={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=Te.mod(this.privKey+o,Xe.n);if(!Te.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=u}else{const u=je.fromHex(this.pubKey).add(je.fromPrivateKey(o));if(u.equals(je.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=u.toRawBytes(!0)}return new fi(c)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Hi(t,32),s8(t,this.privKey,{canonical:!0,der:!1})}verify(t,n){if(Hi(t,32),Hi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=pr.fromCompact(n)}catch{return!1}return a8(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Hi(n,33),Fs($a(t),new Uint8Array([this.depth]),$a(this.parentFingerprint),$a(this.index),this.chainCode,n)}}var x7=Object.defineProperty,Gt=(e,t)=>{for(var n in t)x7(e,n,{get:t[n],enumerable:!0})};function $7(e){return Te.bytesToHex(vl.getPublicKey(e))}var k7={};Gt(k7,{insertEventIntoAscendingList:()=>S7,insertEventIntoDescendingList:()=>C7,normalizeURL:()=>xu,utf8Decoder:()=>jr,utf8Encoder:()=>qn});var jr=new TextDecoder("utf-8"),qn=new TextEncoder;function xu(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function C7(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function S7(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var wt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(wt||{});function E7(e){if(!od(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function E1(e){let t=vr(qn.encode(E7(e)));return Te.bytesToHex(t)}var T7=e=>e instanceof Object;function od(e){if(!T7(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function T1(e){return vl.verifySync(e.sig,E1(e),e.pubkey)}function A7(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,c])=>a===n.slice(1)&&o.indexOf(c)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function I7(e,t){for(let n=0;n<e.length;n++)if(A7(e[n],t))return!0;return!1}var R7={};Gt(R7,{getHex64:()=>wl,getInt:()=>A1,getSubscriptionId:()=>I1,matchEventId:()=>O7,matchEventKind:()=>P7,matchEventPubkey:()=>L7});function wl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function A1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function I1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function O7(e,t){return t===wl(e,"id")}function L7(e,t){return t===wl(e,"pubkey")}function P7(e,t){return t===A1(e,"kind")}var Fp=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function M7(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,c={},u=Fp(),d={},p={},h;async function m(){return h||(h=new Promise((O,U)=>{try{a=new WebSocket(e)}catch(L){U(L)}a.onopen=()=>{u.connect.forEach(L=>L()),O()},a.onerror=()=>{h=void 0,u.error.forEach(L=>L()),U()},a.onclose=async()=>{h=void 0,u.disconnect.forEach(L=>L())};let M=[],R;a.onmessage=L=>{M.push(L.data),R||(R=setInterval(T,0))};function T(){if(M.length===0){clearInterval(R),R=null;return}var L=M.shift();if(!L)return;let F=I1(L);if(F){let Z=c[F];if(Z&&Z.alreadyHaveEvent&&Z.alreadyHaveEvent(wl(L,"id"),e))return}try{let Z=JSON.parse(L);switch(Z[0]){case"EVENT":{let q=Z[1],Q=Z[2];od(Q)&&c[q]&&(c[q].skipVerification||T1(Q))&&I7(c[q].filters,Q)&&(c[q],(d[q]?.event||[]).forEach(ie=>ie(Q)));return}case"COUNT":let oe=Z[1],G=Z[2];c[oe]&&(d[oe]?.count||[]).forEach(q=>q(G));return;case"EOSE":{let q=Z[1];q in d&&(d[q].eose.forEach(Q=>Q()),d[q].eose=[]);return}case"OK":{let q=Z[1],Q=Z[2],ie=Z[3]||"";q in p&&(Q?p[q].ok.forEach(Ne=>Ne()):p[q].failed.forEach(Ne=>Ne(ie)),p[q].ok=[],p[q].failed=[]);return}case"NOTICE":let re=Z[1];u.notice.forEach(q=>q(re));return;case"AUTH":{let q=Z[1];u.auth?.forEach(Q=>Q(q));return}}}catch{return}}}),h)}function v(){return a?.readyState===1}async function _(){v()||await m()}async function x(O){let U=JSON.stringify(O);if(!(!v()&&(await new Promise(M=>setTimeout(M,1e3)),!v())))try{a.send(U)}catch(M){console.log(M)}}const k=(O,{verb:U="REQ",skipVerification:M=!1,alreadyHaveEvent:R=null,id:T=Math.random().toString().slice(2)}={})=>{let L=T;return c[L]={id:L,filters:O,skipVerification:M,alreadyHaveEvent:R},x([U,L,...O]),{sub:(F,Z={})=>k(F||O,{skipVerification:Z.skipVerification||M,alreadyHaveEvent:Z.alreadyHaveEvent||R,id:L}),unsub:()=>{delete c[L],delete d[L],x(["CLOSE",L])},on:(F,Z)=>{d[L]=d[L]||{event:[],count:[],eose:[]},d[L][F].push(Z)},off:(F,Z)=>{let oe=d[L],G=oe[F].indexOf(Z);G>=0&&oe[F].splice(G,1)}}};function S(O,U){if(!O.id)throw new Error(`event ${O} has no id`);let M=O.id;return x([U,O]),{on:(R,T)=>{p[M]=p[M]||{ok:[],failed:[]},p[M][R].push(T)},off:(R,T)=>{let L=p[M];if(!L)return;let F=L[R].indexOf(T);F>=0&&L[R].splice(F,1)}}}return{url:e,sub:k,on:(O,U)=>{u[O].push(U),O==="connect"&&a?.readyState===1&&U()},off:(O,U)=>{let M=u[O].indexOf(U);M!==-1&&u[O].splice(M,1)},list:(O,U)=>new Promise(M=>{let R=k(O,U),T=[],L=setTimeout(()=>{R.unsub(),M(T)},n);R.on("eose",()=>{R.unsub(),clearTimeout(L),M(T)}),R.on("event",F=>{T.push(F)})}),get:(O,U)=>new Promise(M=>{let R=k([O],U),T=setTimeout(()=>{R.unsub(),M(null)},i);R.on("event",L=>{R.unsub(),clearTimeout(T),M(L)})}),count:O=>new Promise(U=>{let M=k(O,{...k,verb:"COUNT"}),R=setTimeout(()=>{M.unsub(),U(null)},o);M.on("count",T=>{M.unsub(),clearTimeout(R),U(T)})}),publish(O){return S(O,"EVENT")},auth(O){return S(O,"AUTH")},connect:_,close(){u=Fp(),d={},p={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var B7=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[xu(t)];n&&n.close()})}async ensureRelay(e){const t=xu(e);this._conn[t]||(this._conn[t]=M7(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,_)=>{if(n?.alreadyHaveEvent?.(v,_))return!0;let x=this._seenOn[v]||new Set;return x.add(_),this._seenOn[v]=x,i.has(v)};let a=[],c=new Set,u=new Set,d=e.length,p=!1,h=setTimeout(()=>{p=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let _;try{_=await this.ensureRelay(v)}catch{k();return}if(!_)return;let x=_.sub(t,o);x.on("event",S=>{i.add(S.id);for(let O of c.values())O(S)}),x.on("eose",()=>{p||k()}),a.push(x);function k(){if(d--,d===0){clearTimeout(h);for(let S of u.values())S()}}});let m={sub(v,_){return a.forEach(x=>x.sub(v,_)),m},unsub(){a.forEach(v=>v.unsub())},on(v,_){v==="event"?c.add(_):v==="eose"&&u.add(_)},off(v,_){v==="event"?c.delete(_):v==="eose"&&u.delete(_)}};return m}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",c=>{i(c),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",c=>{o.push(c)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(c,u)=>{let d=await n[u],p=()=>a(c);i.set(a,p),d.on(o,p)})},off(o,a){e.forEach(async(c,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},wo={};Gt(wo,{decode:()=>xl,naddrEncode:()=>z7,neventEncode:()=>H7,noteEncode:()=>j7,nprofileEncode:()=>N7,npubEncode:()=>D7,nrelayEncode:()=>F7,nsecEncode:()=>U7});var hs=5e3;function xl(e){let{prefix:t,words:n}=Nt.decode(e,hs),i=new Uint8Array(Nt.fromWords(n));switch(t){case"nprofile":{let o=ka(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:Te.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>jr.decode(a)):[]}}}case"nevent":{let o=ka(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:Te.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>jr.decode(a)):[],author:o[2]?.[0]?Te.bytesToHex(o[2][0]):void 0}}}case"naddr":{let o=ka(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:jr.decode(o[0][0]),pubkey:Te.bytesToHex(o[2][0]),kind:parseInt(Te.bytesToHex(o[3][0]),16),relays:o[1]?o[1].map(a=>jr.decode(a)):[]}}}case"nrelay":{let o=ka(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:jr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:Te.bytesToHex(i)};default:throw new Error(`unknown prefix ${t}`)}}function ka(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1],a=n.slice(2,2+o);n=n.slice(2+o),!(a.length<o)&&(t[i]=t[i]||[],t[i].push(a))}return t}function U7(e){return ad("nsec",e)}function D7(e){return ad("npub",e)}function j7(e){return ad("note",e)}function ad(e,t){let n=Te.hexToBytes(t),i=Nt.toWords(n);return Nt.encode(e,i,hs)}function N7(e){let t=$l({0:[Te.hexToBytes(e.pubkey)],1:(e.relays||[]).map(i=>qn.encode(i))}),n=Nt.toWords(t);return Nt.encode("nprofile",n,hs)}function H7(e){let t=$l({0:[Te.hexToBytes(e.id)],1:(e.relays||[]).map(i=>qn.encode(i)),2:e.author?[Te.hexToBytes(e.author)]:[]}),n=Nt.toWords(t);return Nt.encode("nevent",n,hs)}function z7(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=$l({0:[qn.encode(e.identifier)],1:(e.relays||[]).map(o=>qn.encode(o)),2:[Te.hexToBytes(e.pubkey)],3:[new Uint8Array(t)]}),i=Nt.toWords(n);return Nt.encode("naddr",i,hs)}function F7(e){let t=$l({0:[qn.encode(e)]}),n=Nt.toWords(t);return Nt.encode("nrelay",n,hs)}function $l(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),Te.concatBytes(...t)}var W7={};Gt(W7,{decrypt:()=>q7,encrypt:()=>Z7});async function Z7(e,t,n){const i=Eg(e,"02"+t),o=R1(i);let a=Uint8Array.from(Ng(16)),c=qn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,c),p=Ji.encode(new Uint8Array(d)),h=Ji.encode(new Uint8Array(a.buffer));return`${p}?iv=${h}`}async function q7(e,t,n){let[i,o]=n.split("?iv="),a=Eg(e,"02"+t),c=R1(a),u=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),d=Ji.decode(i),p=Ji.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:p},u,d);return jr.decode(h)}function R1(e){return e.slice(1,33)}var O1={};Gt(O1,{queryProfile:()=>V7,searchDomain:()=>G7,useFetchImplementation:()=>K7});var kl;try{kl=fetch}catch{}function K7(e){kl=e}async function G7(e,t=""){try{return(await(await kl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function V7(e){let[t,n]=e.split("@");if(n||(n=t,t="_"),!t.match(/^[A-Za-z0-9-_.]+$/)||!n.includes("."))return null;let i;try{i=await(await kl(`https://${n}/.well-known/nostr.json?name=${t}`)).json()}catch{return null}if(!i?.names?.[t])return null;let o=i.names[t],a=i.relays?.[o]||[];return{pubkey:o,relays:a}}var Q7={};Gt(Q7,{generateSeedWords:()=>Y7,privateKeyFromSeedWords:()=>X7,validateWords:()=>J7});function X7(e,t){let i=fi.fromMasterSeed(f1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return Te.bytesToHex(i)}function Y7(){return y1(td)}function J7(e){return x1(e,td)}var e9={};Gt(e9,{parse:()=>t9});function t9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,c,u,d]=o,p={id:c,relays:u?[u]:[]},h=i===0,m=i===n.length-1;if(d==="root"){t.root=p;continue}if(d==="reply"){t.reply=p;continue}if(d==="mention"){t.mentions.push(p);continue}if(h){t.root=p;continue}if(m){t.reply=p;continue}t.mentions.push(p)}return t}var n9={};Gt(n9,{getPow:()=>r9});function r9(e){return i9(Te.hexToBytes(e))}function i9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=s9(e[n]),t+=i,i===8);n++);return t}function s9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var o9={};Gt(o9,{BECH32_REGEX:()=>L1,NOSTR_URI_REGEX:()=>Cl,parse:()=>l9,test:()=>a9});var L1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/,Cl=new RegExp(`nostr:(${L1.source})`);function a9(e){return typeof e=="string"&&new RegExp(`^${Cl.source}$`).test(e)}function l9(e){const t=e.match(new RegExp(`^${Cl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:xl(t[1])}}var c9={};Gt(c9,{createDelegation:()=>u9,getDelegator:()=>d9});function u9(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=vr(qn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=Te.bytesToHex(vl.signSync(o,e));return{from:$7(e),to:t.pubkey,cond:i,sig:a}}function d9(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,p,h]=a[u].split(/\b/);if(!(d==="kind"&&p==="="&&e.kind===parseInt(h))){if(d==="created_at"&&p==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&p===">"&&e.created_at>parseInt(h))continue;return null}}let c=vr(qn.encode(`nostr:delegation:${e.pubkey}:${i}`));return vl.verifySync(o,c,n)?n:null}var f9={};Gt(f9,{matchAll:()=>h9,regex:()=>ld,replaceAll:()=>p9});var ld=()=>new RegExp(`\\b${Cl.source}\\b`,"g");function*h9(e){const t=e.matchAll(ld());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:xl(o),start:n.index,end:n.index+i.length}}}function p9(e,t){return e.replaceAll(ld(),(n,i)=>t({uri:n,value:i,decoded:xl(i)}))}var g9={};Gt(g9,{useFetchImplementation:()=>m9,validateGithub:()=>v9});var cd;try{cd=fetch}catch{}function m9(e){cd=e}async function v9(e,t,n){try{return await(await cd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var y9={};Gt(y9,{authenticate:()=>b9});var b9=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,c)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),c(d)})})},_9={};Gt(_9,{getZapEndpoint:()=>x9,makeZapReceipt:()=>C9,makeZapRequest:()=>$9,useFetchImplementation:()=>w9,validateZapRequest:()=>k9});var ud;try{ud=fetch}catch{}function w9(e){ud=e}async function x9(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:c}=Nt.decode(n,1e3),u=Nt.fromWords(c);t=jr.decode(u)}else if(i){let[c,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${c}`}else return null;let a=await(await ud(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function $9({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function k9(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!od(t))return"Zap request is not a valid Nostr event.";if(!T1(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,c])=>a==="p"&&c);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,c])=>a==="e"&&c);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,c])=>a==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function C9({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),c={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&c.tags.push(["preimage",t]),c}Te.hmacSha256Sync=(e,...t)=>Js(vr,e,Te.concatBytes(...t));Te.sha256Sync=(...e)=>vr(Te.concatBytes(...e));const S9=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),P1=(e={})=>(()=>{const t=S9();return rt(t,e,!0,!0),t})(),E9=P('<button class="text-blue-500 underline">'),{noteEncode:T9,neventEncode:A9}=wo,I9=e=>{try{return T9(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},R9=e=>{try{return A9({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},eo=e=>(()=>{const t=E9();return A(t,w(ue,{get when(){return e.kind==null||e.kind===wt.Text},get fallback(){return R9(e.eventId)},get children(){return I9(e.eventId)}})),t})(),O9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],M1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],L9=[...M1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],P9=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],M9=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ps=()=>({id:M9(),width:"medium"}),B1=e=>({...ps(),columnType:"Following",...e}),U1=e=>({...ps(),columnType:"Notification",...e}),B9=e=>({...ps(),columnType:"Relays",...e}),D1=()=>B9({name:"日本語",relayUrls:M1,contentFilter:{filterType:"Regex",regex:"[\\p{scx=Hiragana}\\p{scx=Katakana}]",flag:"u"}}),j1=e=>({...ps(),columnType:"Posts",...e}),N1=e=>({...ps(),columnType:"Reactions",...e}),dd=e=>({...ps(),columnType:"Search",...e});var We;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const c of o)a[c]=c;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),c={};for(const u of a)c[u]=o[u];return e.objectValues(c)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const c in o)Object.prototype.hasOwnProperty.call(o,c)&&a.push(c);return a},e.find=(o,a)=>{for(const c of o)if(a(c))return c},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(c=>typeof c=="string"?`'${c}'`:c).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(We||(We={}));var $u;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})($u||($u={}));const J=We.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Nr=e=>{switch(typeof e){case"undefined":return J.undefined;case"string":return J.string;case"number":return isNaN(e)?J.nan:J.number;case"boolean":return J.boolean;case"function":return J.function;case"bigint":return J.bigint;case"symbol":return J.symbol;case"object":return Array.isArray(e)?J.array:e===null?J.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?J.promise:typeof Map<"u"&&e instanceof Map?J.map:typeof Set<"u"&&e instanceof Set?J.set:typeof Date<"u"&&e instanceof Date?J.date:J.object;default:return J.unknown}},K=We.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),U9=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Pn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const c of a.issues)if(c.code==="invalid_union")c.unionErrors.map(o);else if(c.code==="invalid_return_type")o(c.returnTypeError);else if(c.code==="invalid_arguments")o(c.argumentsError);else if(c.path.length===0)i._errors.push(n(c));else{let u=i,d=0;for(;d<c.path.length;){const p=c.path[d];d===c.path.length-1?(u[p]=u[p]||{_errors:[]},u[p]._errors.push(n(c))):u[p]=u[p]||{_errors:[]},u=u[p],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,We.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Pn.create=e=>new Pn(e);const to=(e,t)=>{let n;switch(e.code){case K.invalid_type:e.received===J.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case K.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,We.jsonStringifyReplacer)}`;break;case K.unrecognized_keys:n=`Unrecognized key(s) in object: ${We.joinValues(e.keys,", ")}`;break;case K.invalid_union:n="Invalid input";break;case K.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${We.joinValues(e.options)}`;break;case K.invalid_enum_value:n=`Invalid enum value. Expected ${We.joinValues(e.options)}, received '${e.received}'`;break;case K.invalid_arguments:n="Invalid function arguments";break;case K.invalid_return_type:n="Invalid function return type";break;case K.invalid_date:n="Invalid date";break;case K.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:We.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case K.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case K.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case K.custom:n="Invalid input";break;case K.invalid_intersection_types:n="Intersection results could not be merged";break;case K.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case K.not_finite:n="Number must be finite";break;default:n=t.defaultError,We.assertNever(e)}return{message:n}};let H1=to;function D9(e){H1=e}function qa(){return H1}const Ka=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],c={...o,path:a};let u="";const d=i.filter(p=>!!p).slice().reverse();for(const p of d)u=p(c,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},j9=[];function ne(e,t){const n=Ka({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,qa(),to].filter(i=>!!i)});e.common.issues.push(n)}class Pt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return _e;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Pt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:c}=o;if(a.status==="aborted"||c.status==="aborted")return _e;a.status==="dirty"&&t.dirty(),c.status==="dirty"&&t.dirty(),(typeof c.value<"u"||o.alwaysSet)&&(i[a.value]=c.value)}return{status:t.value,value:i}}}const _e=Object.freeze({status:"aborted"}),z1=e=>({status:"dirty",value:e}),Ht=e=>({status:"valid",value:e}),ku=e=>e.status==="aborted",Cu=e=>e.status==="dirty",Ga=e=>e.status==="valid",Va=e=>typeof Promise<"u"&&e instanceof Promise;var fe;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(fe||(fe={}));class Kn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Wp=(e,t)=>{if(Ga(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Pn(e.common.issues);return this._error=n,this._error}}};function ke(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(c,u)=>c.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Ae{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Nr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Nr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Pt,ctx:{common:t.parent.common,data:t.data,parsedType:Nr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Va(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Nr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return Wp(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Nr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Va(o)?o:Promise.resolve(o));return Wp(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const c=t(o),u=()=>a.addIssue({code:K.custom,...i(o)});return typeof Promise<"u"&&c instanceof Promise?c.then(d=>d?!0:(u(),!1)):c?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new Bn({schema:this,typeName:ve.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return gr.create(this,this._def)}nullable(){return _i.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Mn.create(this,this._def)}promise(){return ns.create(this,this._def)}or(t){return so.create([this,t],this._def)}and(t){return oo.create(this,t,this._def)}transform(t){return new Bn({...ke(this._def),schema:this,typeName:ve.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new fo({...ke(this._def),innerType:this,defaultValue:n,typeName:ve.ZodDefault})}brand(){return new W1({typeName:ve.ZodBranded,type:this,...ke(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Ja({...ke(this._def),innerType:this,catchValue:n,typeName:ve.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return xo.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const N9=/^c[^\s-]{8,}$/i,H9=/^[a-z][a-z0-9]*$/,z9=/[0-9A-HJKMNP-TV-Z]{26}/,F9=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,W9=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,Z9=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,q9=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,K9=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,G9=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function V9(e,t){return!!((t==="v4"||!t)&&q9.test(e)||(t==="v6"||!t)&&K9.test(e))}class On extends Ae{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:K.invalid_string,...fe.errToObj(i)}),this.nonempty=t=>this.min(1,fe.errToObj(t)),this.trim=()=>new On({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new On({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new On({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==J.string){const a=this._getOrReturnCtx(t);return ne(a,{code:K.invalid_type,expected:J.string,received:a.parsedType}),_e}const i=new Pt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:K.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:K.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const c=t.data.length>a.value,u=t.data.length<a.value;(c||u)&&(o=this._getOrReturnCtx(t,o),c?ne(o,{code:K.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ne(o,{code:K.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")W9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"email",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")Z9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"emoji",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")F9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"uuid",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")N9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"cuid",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")H9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"cuid2",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")z9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"ulid",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ne(o,{validation:"url",code:K.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"regex",code:K.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ne(o,{code:K.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ne(o,{code:K.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ne(o,{code:K.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?G9(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{code:K.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?V9(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"ip",code:K.invalid_string,message:a.message}),i.dirty()):We.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new On({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...fe.errToObj(t)})}url(t){return this._addCheck({kind:"url",...fe.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...fe.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...fe.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...fe.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...fe.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...fe.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...fe.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...fe.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...fe.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...fe.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...fe.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...fe.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...fe.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...fe.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...fe.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}On.create=e=>{var t;return new On({checks:[],typeName:ve.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...ke(e)})};function Q9(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),c=parseInt(t.toFixed(o).replace(".",""));return a%c/Math.pow(10,o)}class Kr extends Ae{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==J.number){const a=this._getOrReturnCtx(t);return ne(a,{code:K.invalid_type,expected:J.number,received:a.parsedType}),_e}let i;const o=new Pt;for(const a of this._def.checks)a.kind==="int"?We.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{code:K.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:K.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:K.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?Q9(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ne(i,{code:K.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{code:K.not_finite,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,fe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,fe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,fe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,fe.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:fe.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:fe.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:fe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:fe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:fe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:fe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:fe.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:fe.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:fe.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:fe.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&We.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Kr.create=e=>new Kr({checks:[],typeName:ve.ZodNumber,coerce:e?.coerce||!1,...ke(e)});class Gr extends Ae{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==J.bigint){const a=this._getOrReturnCtx(t);return ne(a,{code:K.invalid_type,expected:J.bigint,received:a.parsedType}),_e}let i;const o=new Pt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:K.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:K.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:K.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,fe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,fe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,fe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,fe.toString(n))}setLimit(t,n,i,o){return new Gr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:fe.toString(o)}]})}_addCheck(t){return new Gr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:fe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:fe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:fe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:fe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:fe.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Gr.create=e=>{var t;return new Gr({checks:[],typeName:ve.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...ke(e)})};class no extends Ae{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==J.boolean){const i=this._getOrReturnCtx(t);return ne(i,{code:K.invalid_type,expected:J.boolean,received:i.parsedType}),_e}return Ht(t.data)}}no.create=e=>new no({typeName:ve.ZodBoolean,coerce:e?.coerce||!1,...ke(e)});class yi extends Ae{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==J.date){const a=this._getOrReturnCtx(t);return ne(a,{code:K.invalid_type,expected:J.date,received:a.parsedType}),_e}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ne(a,{code:K.invalid_date}),_e}const i=new Pt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:K.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:K.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):We.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new yi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:fe.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:fe.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}yi.create=e=>new yi({checks:[],coerce:e?.coerce||!1,typeName:ve.ZodDate,...ke(e)});class Qa extends Ae{_parse(t){if(this._getType(t)!==J.symbol){const i=this._getOrReturnCtx(t);return ne(i,{code:K.invalid_type,expected:J.symbol,received:i.parsedType}),_e}return Ht(t.data)}}Qa.create=e=>new Qa({typeName:ve.ZodSymbol,...ke(e)});class ro extends Ae{_parse(t){if(this._getType(t)!==J.undefined){const i=this._getOrReturnCtx(t);return ne(i,{code:K.invalid_type,expected:J.undefined,received:i.parsedType}),_e}return Ht(t.data)}}ro.create=e=>new ro({typeName:ve.ZodUndefined,...ke(e)});class io extends Ae{_parse(t){if(this._getType(t)!==J.null){const i=this._getOrReturnCtx(t);return ne(i,{code:K.invalid_type,expected:J.null,received:i.parsedType}),_e}return Ht(t.data)}}io.create=e=>new io({typeName:ve.ZodNull,...ke(e)});class ts extends Ae{constructor(){super(...arguments),this._any=!0}_parse(t){return Ht(t.data)}}ts.create=e=>new ts({typeName:ve.ZodAny,...ke(e)});class mi extends Ae{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Ht(t.data)}}mi.create=e=>new mi({typeName:ve.ZodUnknown,...ke(e)});class mr extends Ae{_parse(t){const n=this._getOrReturnCtx(t);return ne(n,{code:K.invalid_type,expected:J.never,received:n.parsedType}),_e}}mr.create=e=>new mr({typeName:ve.ZodNever,...ke(e)});class Xa extends Ae{_parse(t){if(this._getType(t)!==J.undefined){const i=this._getOrReturnCtx(t);return ne(i,{code:K.invalid_type,expected:J.void,received:i.parsedType}),_e}return Ht(t.data)}}Xa.create=e=>new Xa({typeName:ve.ZodVoid,...ke(e)});class Mn extends Ae{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==J.array)return ne(n,{code:K.invalid_type,expected:J.array,received:n.parsedType}),_e;if(o.exactLength!==null){const c=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(c||u)&&(ne(n,{code:c?K.too_big:K.too_small,minimum:u?o.exactLength.value:void 0,maximum:c?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ne(n,{code:K.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ne(n,{code:K.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((c,u)=>o.type._parseAsync(new Kn(n,c,n.path,u)))).then(c=>Pt.mergeArray(i,c));const a=[...n.data].map((c,u)=>o.type._parseSync(new Kn(n,c,n.path,u)));return Pt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new Mn({...this._def,minLength:{value:t,message:fe.toString(n)}})}max(t,n){return new Mn({...this._def,maxLength:{value:t,message:fe.toString(n)}})}length(t,n){return new Mn({...this._def,exactLength:{value:t,message:fe.toString(n)}})}nonempty(t){return this.min(1,t)}}Mn.create=(e,t)=>new Mn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ve.ZodArray,...ke(t)});function zi(e){if(e instanceof ct){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=gr.create(zi(i))}return new ct({...e._def,shape:()=>t})}else return e instanceof Mn?new Mn({...e._def,type:zi(e.element)}):e instanceof gr?gr.create(zi(e.unwrap())):e instanceof _i?_i.create(zi(e.unwrap())):e instanceof Gn?Gn.create(e.items.map(t=>zi(t))):e}class ct extends Ae{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=We.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==J.object){const p=this._getOrReturnCtx(t);return ne(p,{code:K.invalid_type,expected:J.object,received:p.parsedType}),_e}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:c}=this._getCached(),u=[];if(!(this._def.catchall instanceof mr&&this._def.unknownKeys==="strip"))for(const p in o.data)c.includes(p)||u.push(p);const d=[];for(const p of c){const h=a[p],m=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new Kn(o,m,o.path,p)),alwaysSet:p in o.data})}if(this._def.catchall instanceof mr){const p=this._def.unknownKeys;if(p==="passthrough")for(const h of u)d.push({key:{status:"valid",value:h},value:{status:"valid",value:o.data[h]}});else if(p==="strict")u.length>0&&(ne(o,{code:K.unrecognized_keys,keys:u}),i.dirty());else if(p!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const p=this._def.catchall;for(const h of u){const m=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new Kn(o,m,o.path,h)),alwaysSet:h in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const p=[];for(const h of d){const m=await h.key;p.push({key:m,value:await h.value,alwaysSet:h.alwaysSet})}return p}).then(p=>Pt.mergeObjectSync(i,p)):Pt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return fe.errToObj,new ct({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,c,u;const d=(c=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&c!==void 0?c:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=fe.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ct({...this._def,unknownKeys:"strip"})}passthrough(){return new ct({...this._def,unknownKeys:"passthrough"})}extend(t){return new ct({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ct({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ve.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new ct({...this._def,catchall:t})}pick(t){const n={};return We.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ct({...this._def,shape:()=>n})}omit(t){const n={};return We.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new ct({...this._def,shape:()=>n})}deepPartial(){return zi(this)}partial(t){const n={};return We.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new ct({...this._def,shape:()=>n})}required(t){const n={};return We.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof gr;)a=a._def.innerType;n[i]=a}}),new ct({...this._def,shape:()=>n})}keyof(){return F1(We.objectKeys(this.shape))}}ct.create=(e,t)=>new ct({shape:()=>e,unknownKeys:"strip",catchall:mr.create(),typeName:ve.ZodObject,...ke(t)});ct.strictCreate=(e,t)=>new ct({shape:()=>e,unknownKeys:"strict",catchall:mr.create(),typeName:ve.ZodObject,...ke(t)});ct.lazycreate=(e,t)=>new ct({shape:e,unknownKeys:"strip",catchall:mr.create(),typeName:ve.ZodObject,...ke(t)});class so extends Ae{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const c=a.map(u=>new Pn(u.ctx.common.issues));return ne(n,{code:K.invalid_union,unionErrors:c}),_e}if(n.common.async)return Promise.all(i.map(async a=>{const c={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:c}),ctx:c}})).then(o);{let a;const c=[];for(const d of i){const p={...n,common:{...n.common,issues:[]},parent:null},h=d._parseSync({data:n.data,path:n.path,parent:p});if(h.status==="valid")return h;h.status==="dirty"&&!a&&(a={result:h,ctx:p}),p.common.issues.length&&c.push(p.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=c.map(d=>new Pn(d));return ne(n,{code:K.invalid_union,unionErrors:u}),_e}}get options(){return this._def.options}}so.create=(e,t)=>new so({options:e,typeName:ve.ZodUnion,...ke(t)});const La=e=>e instanceof lo?La(e.schema):e instanceof Bn?La(e.innerType()):e instanceof co?[e.value]:e instanceof Vr?e.options:e instanceof uo?Object.keys(e.enum):e instanceof fo?La(e._def.innerType):e instanceof ro?[void 0]:e instanceof io?[null]:null;class Sl extends Ae{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==J.object)return ne(n,{code:K.invalid_type,expected:J.object,received:n.parsedType}),_e;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ne(n,{code:K.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),_e)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const c=La(a.shape[t]);if(!c)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of c){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new Sl({typeName:ve.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...ke(i)})}}function Su(e,t){const n=Nr(e),i=Nr(t);if(e===t)return{valid:!0,data:e};if(n===J.object&&i===J.object){const o=We.objectKeys(t),a=We.objectKeys(e).filter(u=>o.indexOf(u)!==-1),c={...e,...t};for(const u of a){const d=Su(e[u],t[u]);if(!d.valid)return{valid:!1};c[u]=d.data}return{valid:!0,data:c}}else if(n===J.array&&i===J.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const c=e[a],u=t[a],d=Su(c,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===J.date&&i===J.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class oo extends Ae{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,c)=>{if(ku(a)||ku(c))return _e;const u=Su(a.value,c.value);return u.valid?((Cu(a)||Cu(c))&&n.dirty(),{status:n.value,value:u.data}):(ne(i,{code:K.invalid_intersection_types}),_e)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,c])=>o(a,c)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}oo.create=(e,t,n)=>new oo({left:e,right:t,typeName:ve.ZodIntersection,...ke(n)});class Gn extends Ae{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==J.array)return ne(i,{code:K.invalid_type,expected:J.array,received:i.parsedType}),_e;if(i.data.length<this._def.items.length)return ne(i,{code:K.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),_e;!this._def.rest&&i.data.length>this._def.items.length&&(ne(i,{code:K.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((c,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Kn(i,c,i.path,u)):null}).filter(c=>!!c);return i.common.async?Promise.all(a).then(c=>Pt.mergeArray(n,c)):Pt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Gn({...this._def,rest:t})}}Gn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Gn({items:e,typeName:ve.ZodTuple,rest:null,...ke(t)})};class ao extends Ae{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==J.object)return ne(i,{code:K.invalid_type,expected:J.object,received:i.parsedType}),_e;const o=[],a=this._def.keyType,c=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Kn(i,u,i.path,u)),value:c._parse(new Kn(i,i.data[u],i.path,u))});return i.common.async?Pt.mergeObjectAsync(n,o):Pt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Ae?new ao({keyType:t,valueType:n,typeName:ve.ZodRecord,...ke(i)}):new ao({keyType:On.create(),valueType:t,typeName:ve.ZodRecord,...ke(n)})}}class Ya extends Ae{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==J.map)return ne(i,{code:K.invalid_type,expected:J.map,received:i.parsedType}),_e;const o=this._def.keyType,a=this._def.valueType,c=[...i.data.entries()].map(([u,d],p)=>({key:o._parse(new Kn(i,u,i.path,[p,"key"])),value:a._parse(new Kn(i,d,i.path,[p,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of c){const p=await d.key,h=await d.value;if(p.status==="aborted"||h.status==="aborted")return _e;(p.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(p.value,h.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of c){const p=d.key,h=d.value;if(p.status==="aborted"||h.status==="aborted")return _e;(p.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(p.value,h.value)}return{status:n.value,value:u}}}}Ya.create=(e,t,n)=>new Ya({valueType:t,keyType:e,typeName:ve.ZodMap,...ke(n)});class bi extends Ae{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==J.set)return ne(i,{code:K.invalid_type,expected:J.set,received:i.parsedType}),_e;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ne(i,{code:K.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ne(i,{code:K.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function c(d){const p=new Set;for(const h of d){if(h.status==="aborted")return _e;h.status==="dirty"&&n.dirty(),p.add(h.value)}return{status:n.value,value:p}}const u=[...i.data.values()].map((d,p)=>a._parse(new Kn(i,d,i.path,p)));return i.common.async?Promise.all(u).then(d=>c(d)):c(u)}min(t,n){return new bi({...this._def,minSize:{value:t,message:fe.toString(n)}})}max(t,n){return new bi({...this._def,maxSize:{value:t,message:fe.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}bi.create=(e,t)=>new bi({valueType:e,minSize:null,maxSize:null,typeName:ve.ZodSet,...ke(t)});class Zi extends Ae{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==J.function)return ne(n,{code:K.invalid_type,expected:J.function,received:n.parsedType}),_e;function i(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,qa(),to].filter(p=>!!p),issueData:{code:K.invalid_arguments,argumentsError:d}})}function o(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,qa(),to].filter(p=>!!p),issueData:{code:K.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},c=n.data;return this._def.returns instanceof ns?Ht(async(...u)=>{const d=new Pn([]),p=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),h=await c(...p);return await this._def.returns._def.type.parseAsync(h,a).catch(v=>{throw d.addIssue(o(h,v)),d})}):Ht((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Pn([i(u,d.error)]);const p=c(...d.data),h=this._def.returns.safeParse(p,a);if(!h.success)throw new Pn([o(p,h.error)]);return h.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Zi({...this._def,args:Gn.create(t).rest(mi.create())})}returns(t){return new Zi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Zi({args:t||Gn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:ve.ZodFunction,...ke(i)})}}class lo extends Ae{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}lo.create=(e,t)=>new lo({getter:e,typeName:ve.ZodLazy,...ke(t)});class co extends Ae{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ne(n,{received:n.data,code:K.invalid_literal,expected:this._def.value}),_e}return{status:"valid",value:t.data}}get value(){return this._def.value}}co.create=(e,t)=>new co({value:e,typeName:ve.ZodLiteral,...ke(t)});function F1(e,t){return new Vr({values:e,typeName:ve.ZodEnum,...ke(t)})}class Vr extends Ae{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ne(n,{expected:We.joinValues(i),received:n.parsedType,code:K.invalid_type}),_e}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ne(n,{received:n.data,code:K.invalid_enum_value,options:i}),_e}return Ht(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Vr.create(t)}exclude(t){return Vr.create(this.options.filter(n=>!t.includes(n)))}}Vr.create=F1;class uo extends Ae{_parse(t){const n=We.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==J.string&&i.parsedType!==J.number){const o=We.objectValues(n);return ne(i,{expected:We.joinValues(o),received:i.parsedType,code:K.invalid_type}),_e}if(n.indexOf(t.data)===-1){const o=We.objectValues(n);return ne(i,{received:i.data,code:K.invalid_enum_value,options:o}),_e}return Ht(t.data)}get enum(){return this._def.values}}uo.create=(e,t)=>new uo({values:e,typeName:ve.ZodNativeEnum,...ke(t)});class ns extends Ae{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==J.promise&&n.common.async===!1)return ne(n,{code:K.invalid_type,expected:J.promise,received:n.parsedType}),_e;const i=n.parsedType===J.promise?n.data:Promise.resolve(n.data);return Ht(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ns.create=(e,t)=>new ns({type:e,typeName:ve.ZodPromise,...ke(t)});class Bn extends Ae{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ve.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const c=o.transform(i.data);return i.common.async?Promise.resolve(c).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:c,path:i.path,parent:i})}const a={addIssue:c=>{ne(i,c),c.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const c=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?_e:(u.status==="dirty"&&n.dirty(),c(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?_e:(u.status==="dirty"&&n.dirty(),c(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ga(c))return c;const u=o.transform(c.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>Ga(c)?Promise.resolve(o.transform(c.value,a)).then(u=>({status:n.value,value:u})):c);We.assertNever(o)}}Bn.create=(e,t,n)=>new Bn({schema:e,typeName:ve.ZodEffects,effect:t,...ke(n)});Bn.createWithPreprocess=(e,t,n)=>new Bn({schema:t,effect:{type:"preprocess",transform:e},typeName:ve.ZodEffects,...ke(n)});class gr extends Ae{_parse(t){return this._getType(t)===J.undefined?Ht(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}gr.create=(e,t)=>new gr({innerType:e,typeName:ve.ZodOptional,...ke(t)});class _i extends Ae{_parse(t){return this._getType(t)===J.null?Ht(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}_i.create=(e,t)=>new _i({innerType:e,typeName:ve.ZodNullable,...ke(t)});class fo extends Ae{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===J.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}fo.create=(e,t)=>new fo({innerType:e,typeName:ve.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...ke(t)});class Ja extends Ae{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Va(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Pn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Pn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Ja.create=(e,t)=>new Ja({innerType:e,typeName:ve.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...ke(t)});class el extends Ae{_parse(t){if(this._getType(t)!==J.nan){const i=this._getOrReturnCtx(t);return ne(i,{code:K.invalid_type,expected:J.nan,received:i.parsedType}),_e}return{status:"valid",value:t.data}}}el.create=e=>new el({typeName:ve.ZodNaN,...ke(e)});const X9=Symbol("zod_brand");class W1 extends Ae{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class xo extends Ae{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?_e:a.status==="dirty"?(n.dirty(),z1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?_e:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new xo({in:t,out:n,typeName:ve.ZodPipeline})}}const Z1=(e,t={},n)=>e?ts.create().superRefine((i,o)=>{var a,c;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(c=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&c!==void 0?c:!0,p=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...p,fatal:d})}}):ts.create(),Y9={object:ct.lazycreate};var ve;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(ve||(ve={}));const J9=(e,t={message:`Input not instance of ${e.name}`})=>Z1(n=>n instanceof e,t),q1=On.create,K1=Kr.create,ek=el.create,tk=Gr.create,G1=no.create,nk=yi.create,rk=Qa.create,ik=ro.create,sk=io.create,ok=ts.create,ak=mi.create,lk=mr.create,ck=Xa.create,uk=Mn.create,dk=ct.create,fk=ct.strictCreate,hk=so.create,pk=Sl.create,gk=oo.create,mk=Gn.create,vk=ao.create,yk=Ya.create,bk=bi.create,_k=Zi.create,wk=lo.create,xk=co.create,$k=Vr.create,kk=uo.create,Ck=ns.create,Zp=Bn.create,Sk=gr.create,Ek=_i.create,Tk=Bn.createWithPreprocess,Ak=xo.create,Ik=()=>q1().optional(),Rk=()=>K1().optional(),Ok=()=>G1().optional(),Lk={string:e=>On.create({...e,coerce:!0}),number:e=>Kr.create({...e,coerce:!0}),boolean:e=>no.create({...e,coerce:!0}),bigint:e=>Gr.create({...e,coerce:!0}),date:e=>yi.create({...e,coerce:!0})},Pk=_e;var Ca=Object.freeze({__proto__:null,defaultErrorMap:to,setErrorMap:D9,getErrorMap:qa,makeIssue:Ka,EMPTY_PATH:j9,addIssueToContext:ne,ParseStatus:Pt,INVALID:_e,DIRTY:z1,OK:Ht,isAborted:ku,isDirty:Cu,isValid:Ga,isAsync:Va,get util(){return We},get objectUtil(){return $u},ZodParsedType:J,getParsedType:Nr,ZodType:Ae,ZodString:On,ZodNumber:Kr,ZodBigInt:Gr,ZodBoolean:no,ZodDate:yi,ZodSymbol:Qa,ZodUndefined:ro,ZodNull:io,ZodAny:ts,ZodUnknown:mi,ZodNever:mr,ZodVoid:Xa,ZodArray:Mn,ZodObject:ct,ZodUnion:so,ZodDiscriminatedUnion:Sl,ZodIntersection:oo,ZodTuple:Gn,ZodRecord:ao,ZodMap:Ya,ZodSet:bi,ZodFunction:Zi,ZodLazy:lo,ZodLiteral:co,ZodEnum:Vr,ZodNativeEnum:uo,ZodPromise:ns,ZodEffects:Bn,ZodTransformer:Bn,ZodOptional:gr,ZodNullable:_i,ZodDefault:fo,ZodCatch:Ja,ZodNaN:el,BRAND:X9,ZodBranded:W1,ZodPipeline:xo,custom:Z1,Schema:Ae,ZodSchema:Ae,late:Y9,get ZodFirstPartyTypeKind(){return ve},coerce:Lk,any:ok,array:uk,bigint:tk,boolean:G1,date:nk,discriminatedUnion:pk,effect:Zp,enum:$k,function:_k,instanceof:J9,intersection:gk,lazy:wk,literal:xk,map:yk,nan:ek,nativeEnum:kk,never:lk,null:sk,nullable:Ek,number:K1,object:dk,oboolean:Ok,onumber:Rk,optional:Sk,ostring:Ik,pipeline:Ak,preprocess:Tk,promise:Ck,record:vk,set:bk,strictObject:fk,string:q1,symbol:rk,transformer:Zp,tuple:mk,undefined:ik,union:hk,unknown:ak,void:ck,NEVER:Pk,ZodIssueCode:K,quotelessJson:U9,ZodError:Pn});const V1=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng)$/i.test(t.pathname)}catch{return!1}},Mk=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},Bk=/^[0-9a-f]{64}$/,Ks=e=>{const t=typeof e=="string"&&e.length===64&&Bk.test(e);return t||console.warn("invalid id is ignored: ",e),t},Uk=Ca.tuple([Ca.literal("emoji"),Ca.string().regex(/^[a-zA-Z0-9]+$/,{message:"shortcode should be alpahnumeric"}),Ca.string().url().refine(V1)]),Dk=e=>t=>{const n=e.safeParse(t);return n.success||console.warn("failed to parse value",t,e),n.success},_n=e=>{let t;return{get rawEvent(){return e},get id(){return e.id},get pubkey(){return e.pubkey},get createdAt(){return e.created_at},get content(){return e.content},get tags(){return e.tags},createdAtAsDate(){return new Date(e.created_at*1e3)},pTags(){return e.tags.filter(([n,i])=>n==="p"&&Ks(i))},eTags(){return e.tags.filter(([n,i])=>n==="e"&&Ks(i))},emojiTags(){return e.tags.filter(Dk(Uk))},taggedEventIds(){return this.eTags().map(([,n])=>n)},lastTaggedEventId(){const n=this.taggedEventIds();if(n.length!==0)return n[n.length-1]},markedEventTags(){if(e.kind!==wt.Text)throw new Error("kind should be 1");if(t!=null)return t;const n=e.tags.map((o,a)=>[o,a]).filter(([[o,a]])=>o==="e"&&Ks(a)),i=(o,a)=>{if(e.kind===1)return o==="root"||o==="reply"||o==="mention"?o:n.length===1?"reply":a===0?"root":n.length===2||a===n.length-1?"reply":"mention"};return t=n.map(([[,o,a,c],u],d)=>({id:o,relayUrl:a,marker:i(c,d),index:u})),t},replyingToEvent(){return this.markedEventTags().find(({marker:n})=>n==="reply")},rootEvent(){return this.markedEventTags().find(({marker:n})=>n==="root")},mentionedEvents(){return this.markedEventTags().filter(({marker:n})=>n==="mention")},mentionedPubkeys(){return Fr(this.pTags().map(([,n])=>n))},mentionedPubkeysWithoutAuthor(){return this.mentionedPubkeys().filter(n=>n!==e.pubkey)},contentWarning(){const n=e.tags.find(([o])=>o==="content-warning");return n==null?{contentWarning:!1}:{contentWarning:!0,reason:(n[1]?.length??0)>0?n[1]:void 0}},containsEventMention(n){const i=e.tags.findIndex(([o,a])=>o==="e"&&a===n);return i<0?!1:this.containsEventMentionIndex(i)},containsEventMentionIndex(n){return n<0||n>=e.tags.length?!1:e.content.includes(`#[${n}]`)},getEmojiUrl(n){const i=this.emojiTags().find(([,a])=>a===n);if(i==null)return null;const[,,o]=i;return o}}},jk=()=>{const e=[...O9];return window.navigator.language.includes("ja")&&e.push(...L9),e},Q1=()=>({relayUrls:jk(),columns:[],dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),Nk=e=>JSON.stringify(e),Hk=e=>({...Q1(),...JSON.parse(e)}),zk=d4(()=>window.localStorage,Nk,Hk),[Sa,Tn]=f4("RabbitConfig",Q1(),zk),ze=()=>{const e=_=>{Tn("relayUrls",x=>Fr([...x,_]))},t=_=>{Tn("relayUrls",x=>x.filter(k=>k!==_))},n=_=>{Tn("mutedPubkeys",x=>Fr([...x,_]))},i=_=>{Tn("mutedPubkeys",x=>x.filter(k=>k!==_))},o=_=>{Tn("mutedKeywords",x=>Fr([...x,_]))},a=_=>{Tn("mutedKeywords",x=>x.filter(k=>k!==_))},c=_=>{Tn("columns",x=>{const k=x.findIndex(S=>S.id===_.id);if(k>=0){const S=[...x];return S.splice(k,1,_),S}return[...x,_]})},u=(_,x)=>{Tn("columns",k=>{const S=x-1,O=Math.max(Math.min(S,k.length),0),U=k.findIndex(T=>T.id===_);if(U<0||O===U)return k;console.log(U,O);const M=[...k],[R]=M.splice(U,1);return M.splice(O,0,R),M})},d=_=>{Tn("columns",x=>x.filter(k=>k.id!==_))},p=_=>Sa.mutedPubkeys.includes(_),h=_=>_.kind===wt.Text?Sa.mutedKeywords.some(x=>_.content.includes(x)):!1;return{config:()=>Sa,setConfig:Tn,addRelay:e,removeRelay:t,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,saveColumn:c,moveColumn:u,removeColumn:d,isPubkeyMuted:p,shouldMuteEvent:_=>{const x=_n(_);return p(_.pubkey)||x.mentionedPubkeys().some(p)||h(_)},initializeColumns:({pubkey:_})=>{if((Sa.columns?.length??0)>0)return;const x=[B1({width:"widest",pubkey:_}),U1({pubkey:_}),j1({name:"自分の投稿",pubkey:_}),N1({name:"自分のリアクション",pubkey:_})];navigator.language.includes("ja")&&x.splice(2,0,D1()),Tn("columns",()=>[...x])}}},Fk=()=>{let e,t;const n=new Promise((i,o)=>{e=i,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:n,resolve:e,reject:t}},Wk=e=>{const t=Ke(e),n=Ke(()=>t().batchSize??100),i=Ke(()=>t().interval??2e3),[o,a]=$e(0),[c,u]=$e([]);let d;const p=()=>{const{executor:k}=t(),S=c();S.length>0&&(u([]),k(S)),d!=null&&clearTimeout(d),d=void 0},h=()=>{const k=o();return a(S=>S+1),k},m=()=>{d==null&&(d=setTimeout(()=>{p()},i()))},v=k=>{c().length<n()?u(S=>[...S,k]):(p(),u([k]))},_=k=>{u(S=>S.filter(O=>O.id!==k))};return{exec:async(k,S)=>{const{promise:O,resolve:U,reject:M}=Fk(),R=h();return v({id:R,args:k,resolve:U,reject:M}),m(),S?.addEventListener("abort",()=>{_(R),M(new Error("AbortError"))}),O}}},[Zk]=$e(new B7),El=()=>Zk,[qk,qp]=Ki({activeSubscriptions:0,activeBatchSubscriptions:0}),X1=()=>({stats:qk,setActiveSubscriptions:n=>qp("activeSubscriptions",n),setActiveBatchSubscriptions:n=>qp("activeBatchSubscriptions",n)}),Jr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const c=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(c))},e)});return Promise.race([n,i])},Kk=/\p{Emoji_Presentation}/u;let Eu=0;const{setActiveBatchSubscriptions:Gk}=X1();setInterval(()=>{Gk(Eu)},1e3);const Vk={events:[],completed:!0},Qk=()=>Vk,{exec:$o}=Wk(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,c=new Map;e.forEach(T=>{if(T.args.type==="Event"){const L=n.get(T.args.eventId)??[];n.set(T.args.eventId,[...L,T])}else if(T.args.type==="Profile"){const L=t.get(T.args.pubkey)??[];t.set(T.args.pubkey,[...L,T])}else if(T.args.type==="Reactions"){const L=i.get(T.args.mentionedEventId)??[];i.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="Reposts"){const L=o.get(T.args.mentionedEventId)??[];o.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="ZapReceipts"){const L=a.get(T.args.mentionedEventId)??[];o.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="Followings"){const L=c.get(T.args.pubkey)??[];c.set(T.args.pubkey,[...L,T])}});const u=[...n.keys()],d=[...t.keys()],p=[...i.keys()],h=[...o.keys()],m=[...a.keys()],v=[...c.keys()],_=[];if(u.length>0&&_.push({ids:u}),d.length>0&&_.push({kinds:[wt.Metadata],authors:d}),p.length>0&&_.push({kinds:[wt.Reaction],"#e":p}),h.length>0&&_.push({kinds:[6],"#e":h}),m.length>0&&_.push({kinds:[9735],"#e":m}),v.length>0&&_.push({kinds:[wt.Contacts],authors:v}),_.length===0)return;const x=new Map,k=(T,L)=>{T.forEach(F=>{const Z=x.get(F.id)??$e({events:[],completed:!1});x.set(F.id,Z);const[oe,G]=Z;G(re=>({...re,events:[...re.events,L]})),F.resolve(oe)})},S=()=>{e.forEach(T=>{const L=x.get(T.id);if(L!=null){const F=L[1];F(Z=>({...Z,completed:!0}))}else T.resolve(Qk)})},{config:O,shouldMuteEvent:U}=ze(),R=El()().sub(O().relayUrls,_,{});Eu+=1,R.on("event",T=>{if(T.kind===wt.Metadata){const L=t.get(T.pubkey)??[];k(L,T);return}if(T.kind===wt.Reaction){const L=_n(T).lastTaggedEventId();if(L!=null){const F=i.get(L)??[];k(F,T)}}else if(T.kind===6){const L=_n(T).lastTaggedEventId();if(L!=null){const F=o.get(L)??[];k(F,T)}}else if(T.kind===wt.Zap)_n(T).eTags().forEach(([,F])=>{const Z=o.get(F)??[];k(Z,T)});else if(T.kind===wt.Contacts){const L=c.get(T.pubkey)??[];k(L,T)}else{const L=n.get(T.id)??[];L.length>0?k(L,T):console.warn("unknown event received")}}),R.on("eose",()=>{S(),R.unsub(),Eu-=1})}})),Y1=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),gs=e=>{const t=ss(),n=Ke(e),i=Ke(()=>["useProfile",n()]),o=os(i,({queryKey:u,signal:d})=>{const[,p]=u;if(p==null)return Promise.resolve(null);const{pubkey:h}=p;if(h.startsWith("npub1"))return Promise.resolve(null);const m=$o({type:"Profile",pubkey:h},d).then(v=>{const _=()=>{const x=Y1(v().events);if(x==null)throw new Error(`profile not found: ${h}`);return x};return dl(v).subscribe(()=>{try{t.setQueryData(u,_())}catch(x){console.error("error occurred while updating profile cache: ",x)}}),_()});return Jr(15e3,`useProfile: ${h}`)(m)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3});return{profile:Ke(()=>{if(o.data==null)return null;const{content:u}=o.data;if(u==null||u.length===0)return null;try{return JSON.parse(u)}catch(d){return console.warn("failed to parse profile (kind 0): ",d,u),null}}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},J1=e=>{const t=Ke(e),n=os(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return null;const{eventId:u}=c,d=$o({type:"Event",eventId:u},a).then(p=>{const h=p().events[0];if(h==null)throw new Error(`event not found: ${u}`);return h});return Jr(15e3,`useEvent: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},Xk=e=>{const t=ss(),n=Ke(e),i=Ke(()=>["useReactions",n()]),o=os(i,({queryKey:h,signal:m})=>{const[,v]=h;if(v==null)return[];const{eventId:_}=v,x=$o({type:"Reactions",mentionedEventId:_},m).then(k=>{const S=()=>k().events;return dl(k).subscribe(()=>{t.setQueryData(h,S())}),S()});return Jr(15e3,`useReactions: ${_}`)(x)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reactions:a,reactionsGroupedByContent:()=>{const h=new Map;return a().forEach(m=>{const v=h.get(m.content)??[];v.push(m),h.set(m.content,v)}),h},isReactedBy:h=>a().findIndex(m=>m.pubkey===h)!==-1,isReactedByWithEmoji:h=>a().findIndex(m=>m.pubkey===h&&Kk.test(m.content))!==-1,invalidateReactions:()=>t.invalidateQueries(i()),query:o}},Yk=e=>{const t=ss(),n=Ke(e),i=Ke(()=>["useReposts",n()]),o=os(i,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return[];const{eventId:m}=h,v=$o({type:"Reposts",mentionedEventId:m},p).then(_=>{const x=()=>_().events;return dl(_).subscribe(()=>{t.setQueryData(d,x())}),x()});return Jr(15e3,`useReposts: ${m}`)(v)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reposts:a,isRepostedBy:d=>a().findIndex(p=>p.pubkey===d)!==-1,invalidateReposts:()=>t.invalidateQueries(i()),query:o}},Tu=e=>{const t=ss(),n=Ke(e),i=()=>["useFollowings",n()],o=os(i,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return Promise.resolve(null);const{pubkey:m}=h,v=$o({type:"Followings",pubkey:m},p).then(_=>{const x=()=>{const k=Y1(_().events);if(k==null)throw new Error(`followings not found: ${m}`);return k};return dl(_).subscribe(()=>{try{t.setQueryData(d,x())}catch(k){console.error("error occurred while updating followings cache: ",k)}}),x()});return Jr(15e3,`useFollowings: ${m}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return _n(o.data).pTags().forEach(h=>{const[,m,v,_]=h,x={pubkey:m,petname:_};v!=null&&v.length>0&&(x.mainRelayUrl=v),d.push(x)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},sn=e=>t=>e.some(n=>n==null)?null:t(e),Jk=P('<div class="truncate">読み込み中 '),ho=e=>{const[t,n]=n4(e,["eventId"]),{shouldMuteEvent:i}=ze(),{event:o,query:a}=J1(()=>sn([t.eventId])(([u])=>({eventId:u}))),c=()=>{const u=o();return u!=null&&i(u)};return w(Ln,{fallback:"投稿が見つかりません",get children(){return[w(Fe,{get when(){return c()},children:null}),w(Fe,{get when(){return o()},keyed:!0,children:u=>w(jm,r4({event:u},n))}),w(Fe,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=Jk();return d.firstChild,A(d,w(eo,{eventId:u}),null),d})()})]}})},{npubEncode:eC}=wo,Tl=e=>{try{return eC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Al=e=>{const{profile:t}=gs(()=>({pubkey:e.pubkey}));return w(Ln,{get fallback(){return Tl(e.pubkey)},get children(){return[w(Fe,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),w(Fe,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",Ke(()=>t()?.name)]}})]}})},em=e=>{const[t,n]=$e(new Date);return hr(()=>{const i=setInterval(()=>{n(new Date)},e().interval);Xr(()=>clearInterval(i))}),t},tC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},Kp=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,nC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleDateString()}},rC=e=>{switch(e.kind){case"today":return Kp(e.value);case"yesterday":return`昨日 ${Kp(e.value)}`;case"abs":default:return e.value.toLocaleString()}},iC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,sC=(e,t)=>{const n=iC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},Gp=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),oC=e=>new Date(+e-24*60*60*1e3),tm=(e,t,n)=>Gp(e,t)?n({kind:"today",value:e}):Gp(e,oC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),aC=(e,t=new Date)=>tm(e,t,nC),lC=(e,t=new Date)=>tm(e,t,rC),Vp=(e,t=new Date,n=tC)=>n(sC(e,t)),Qp=em(()=>({interval:7e3})),Xp=em(()=>({interval:60*1e3})),nm=()=>{const{config:e}=ze();return t=>{switch(e().dateFormat){case"absolute-long":return aC(t,Xp());case"absolute-short":return lC(t,Xp());case"relative":return Vp(t,Qp());default:return Vp(t,Qp())}}},[cC,Ni]=$e({type:"Closed"}),ei=()=>({modalState:cC,setModalState:Ni,showProfile:a=>{Ni({type:"Profile",pubkey:a})},showProfileEdit:()=>{Ni({type:"ProfileEdit"})},showAddColumn:()=>{Ni({type:"AddColumn"})},showAbout:()=>{Ni({type:"About"})},closeModal:()=>{Ni({type:"Closed"})}}),uC=P('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),rm=e=>{const{showProfile:t}=ei(),n=nm(),i=Ke(()=>_n(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=uC(),c=a.firstChild,u=c.firstChild,d=u.nextSibling,p=d.firstChild,h=d.nextSibling,m=c.nextSibling;return A(u,w(P1,{})),p.$$click=()=>t(e.event.pubkey),A(p,w(Al,{get pubkey(){return e.event.pubkey}})),A(h,()=>n(i().createdAtAsDate())),A(m,w(ho,{get eventId(){return o()}})),a})()};vt(["click"]);const dC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),fC=(e={})=>(()=>{const t=dC();return rt(t,e,!0,!0),t})(),hC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),im=(e={})=>(()=>{const t=hC();return rt(t,e,!0,!0),t})(),pC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),fd=(e={})=>(()=>{const t=pC();return rt(t,e,!0,!0),t})(),gC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),sm=(e={})=>(()=>{const t=gC();return rt(t,e,!0,!0),t})(),mC=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),hd=(e={})=>(()=>{const t=mC();return rt(t,e,!0,!0),t})(),vC=P('<div><button class="flex items-center"></button><div class="absolute z-20">'),pd=e=>{let t,n;const[i,o]=$e(!1),[a,c]=$e({}),u=i4(()=>e.children),d=()=>o(!1),p=()=>o(x=>!x),h=x=>{const k=x.target;k!=null&&!n?.contains(k)&&d()},m=()=>{document.addEventListener("mousedown",h)},v=()=>{document.removeEventListener("mousedown",h)},_=()=>{if(t==null||n==null)return;const x=t?.getBoundingClientRect(),k=n?.getBoundingClientRect();let{top:S,left:O}=x;e.position==="left"?O-=x.width:e.position==="right"?O+=x.width:e.position==="top"?(S-=x.height,O-=x.left+x.width/2):(S+=x.height,O+=x.width/2),S=Math.min(S,window.innerHeight-k.height),O=Math.min(O,window.innerWidth-k.width),c({left:`${O}px`,top:`${S}px`})};return hr(()=>{i()?(m(),e.onOpen?.()):(v(),e.onClose?.())}),hr(ul(u,()=>{_()})),hr(()=>{i()&&_()}),wn(()=>{e.ref?.({close:d})}),Xr(()=>v()),(()=>{const x=vC(),k=x.firstChild,S=k.nextSibling;k.$$click=()=>{p(),_()};const O=t;typeof O=="function"?Wn(O,k):t=k,A(k,()=>e.button);const U=n;return typeof U=="function"?Wn(U,S):n=S,A(S,u),Pe(M=>{const R=!i(),T=!!i(),L=a();return R!==M._v$&&S.classList.toggle("hidden",M._v$=R),T!==M._v$2&&S.classList.toggle("block",M._v$2=T),M._v$3=s4(S,L,M._v$3),M},{_v$:void 0,_v$2:void 0,_v$3:void 0}),x})()};vt(["click"]);const yC=P('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),bC=P('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),_C=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=yC(),i=n.firstChild;return i.$$click=t,A(i,()=>e.item.content()),n})()},om=e=>{let t;const n=()=>t?.close();return w(pd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=bC();return A(i,w(Kt,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>w(_C,{item:o,onClose:n})})),i}})};vt(["click"]);function am(e){return e&&e.__esModule?e.default:e}function In(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Il,pe,lm,Gs,cm,Yp,tl={},um=[],wC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function zr(e,t){for(var n in t)e[n]=t[n];return e}function dm(e){var t=e.parentNode;t&&t.removeChild(e)}function Au(e,t,n){var i,o,a,c={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?Il.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return Pa(e,c,i,o,null)}function Pa(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++lm};return o==null&&pe.vnode!=null&&pe.vnode(a),a}function cr(){return{current:null}}function rs(e){return e.children}function Fn(e,t){this.props=e,this.context=t}function is(e,t){if(t==null)return e.__?is(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?is(e):null}function fm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return fm(e)}}function Jp(e){(!e.__d&&(e.__d=!0)&&Gs.push(e)&&!nl.__r++||Yp!==pe.debounceRendering)&&((Yp=pe.debounceRendering)||cm)(nl)}function nl(){for(var e;nl.__r=Gs.length;)e=Gs.sort(function(t,n){return t.__v.__b-n.__v.__b}),Gs=[],e.some(function(t){var n,i,o,a,c,u;t.__d&&(c=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=zr({},a)).__v=a.__v+1,gd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[c]:null,i,c??is(a),a.__h),mm(i,a),a.__e!=c&&fm(a)))})}function hm(e,t,n,i,o,a,c,u,d,p){var h,m,v,_,x,k,S,O=i&&i.__k||um,U=O.length;for(n.__k=[],h=0;h<t.length;h++)if((_=n.__k[h]=(_=t[h])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?Pa(null,_,null,null,_):Array.isArray(_)?Pa(rs,{children:_},null,null,null):_.__b>0?Pa(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(v=O[h])===null||v&&_.key==v.key&&_.type===v.type)O[h]=void 0;else for(m=0;m<U;m++){if((v=O[m])&&_.key==v.key&&_.type===v.type){O[m]=void 0;break}v=null}gd(e,_,v=v||tl,o,a,c,u,d,p),x=_.__e,(m=_.ref)&&v.ref!=m&&(S||(S=[]),v.ref&&S.push(v.ref,null,_),S.push(m,_.__c||x,_)),x!=null?(k==null&&(k=x),typeof _.type=="function"&&_.__k===v.__k?_.__d=d=pm(_,d,e):d=gm(e,_,v,O,x,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=is(v))}for(n.__e=k,h=U;h--;)O[h]!=null&&(typeof n.type=="function"&&O[h].__e!=null&&O[h].__e==n.__d&&(n.__d=is(i,h+1)),ym(O[h],O[h]));if(S)for(h=0;h<S.length;h++)vm(S[h],S[++h],S[++h])}function pm(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?pm(i,t,n):gm(n,i,i,o,i.__e,t));return t}function rl(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){rl(n,t)}):t.push(e)),t}function gm(e,t,n,i,o,a){var c,u,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),c=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),c=a}return c!==void 0?c:o.nextSibling}function xC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||il(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||il(e,a,t[a],n[a],i)}function e0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||wC.test(t)?n:n+"px"}function il(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||e0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||e0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?n0:t0,a):e.removeEventListener(t,a?n0:t0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function t0(e){this.l[e.type+!1](pe.event?pe.event(e):e)}function n0(e){this.l[e.type+!0](pe.event?pe.event(e):e)}function gd(e,t,n,i,o,a,c,u,d){var p,h,m,v,_,x,k,S,O,U,M,R=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(p=pe.__b)&&p(t);try{e:if(typeof R=="function"){if(S=t.props,O=(p=R.contextType)&&i[p.__c],U=p?O?O.props.value:p.__:i,n.__c?k=(h=t.__c=n.__c).__=h.__E:("prototype"in R&&R.prototype.render?t.__c=h=new R(S,U):(t.__c=h=new Fn(S,U),h.constructor=R,h.render=kC),O&&O.sub(h),h.props=S,h.state||(h.state={}),h.context=U,h.__n=i,m=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),R.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=zr({},h.__s)),zr(h.__s,R.getDerivedStateFromProps(S,h.__s))),v=h.props,_=h.state,m)R.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(R.getDerivedStateFromProps==null&&S!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(S,U),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(S,h.__s,U)===!1||t.__v===n.__v){h.props=S,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),h.__h.length&&c.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(S,h.__s,U),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,_,x)})}h.context=U,h.props=S,h.state=h.__s,(p=pe.__r)&&p(t),h.__d=!1,h.__v=t,h.__P=e,p=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(i=zr(zr({},i),h.getChildContext())),m||h.getSnapshotBeforeUpdate==null||(x=h.getSnapshotBeforeUpdate(v,_)),M=p!=null&&p.type===rs&&p.key==null?p.props.children:p,hm(e,Array.isArray(M)?M:[M],t,n,i,o,a,c,u,d),h.base=t.__e,t.__h=null,h.__h.length&&c.push(h),k&&(h.__E=h.__=null),h.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=$C(n.__e,t,n,i,o,a,c,d);(p=pe.diffed)&&p(t)}catch(T){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),pe.__e(T,t,n)}}function mm(e,t){pe.__c&&pe.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){pe.__e(i,n.__v)}})}function $C(e,t,n,i,o,a,c,u){var d,p,h,m=n.props,v=t.props,_=t.type,x=0;if(_==="svg"&&(o=!0),a!=null){for(;x<a.length;x++)if((d=a[x])&&"setAttribute"in d==!!_&&(_?d.localName===_:d.nodeType===3)){e=d,a[x]=null;break}}if(e==null){if(_===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,v.is&&v),a=null,u=!1}if(_===null)m===v||u&&e.data===v||(e.data=v);else{if(a=a&&Il.call(e.childNodes),p=(m=n.props||tl).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!u){if(a!=null)for(m={},x=0;x<e.attributes.length;x++)m[e.attributes[x].name]=e.attributes[x].value;(h||p)&&(h&&(p&&h.__html==p.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(xC(e,v,m,o,u),h)t.__k=[];else if(x=t.props.children,hm(e,Array.isArray(x)?x:[x],t,n,i,o&&_!=="foreignObject",a,c,a?a[0]:n.__k&&is(n,0),u),a!=null)for(x=a.length;x--;)a[x]!=null&&dm(a[x]);u||("value"in v&&(x=v.value)!==void 0&&(x!==m.value||x!==e.value||_==="progress"&&!x)&&il(e,"value",x,m.value,!1),"checked"in v&&(x=v.checked)!==void 0&&x!==e.checked&&il(e,"checked",x,m.checked,!1))}return e}function vm(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){pe.__e(i,n)}}function ym(e,t,n){var i,o;if(pe.unmount&&pe.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||vm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){pe.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&ym(i[o],t,typeof e.type!="function");n||e.__e==null||dm(e.__e),e.__e=e.__d=void 0}function kC(e,t,n){return this.constructor(e,n)}function bm(e,t,n){var i,o,a;pe.__&&pe.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],gd(t,e=(!i&&n||t).__k=Au(rs,null,[e]),o||tl,tl,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Il.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),mm(a,e)}Il=um.slice,pe={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},lm=0,Fn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=zr({},this.state),typeof e=="function"&&(e=e(zr({},n),this.props)),e&&zr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Jp(this))},Fn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Jp(this))},Fn.prototype.render=rs,Gs=[],cm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nl.__r=0;var CC=0;function z(e,t,n,i,o){var a,c,u={};for(c in t)c=="ref"?a=t[c]:u[c]=t[c];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--CC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return pe.vnode&&pe.vnode(d),d}function SC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function EC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var qr={set:SC,get:EC};const ru=new Map,TC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function AC(){for(const{v:e,emoji:t}of TC)if(_m(t))return e}function IC(){return!_m("🇨🇦")}function _m(e){if(ru.has(e))return ru.get(e);const t=RC(e);return ru.set(e,t),t}const RC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,c=a.length;let u=0;for(;u<c&&!a[u+3];u+=4);if(u>=c)return!1;const d=n+u/4%n,p=Math.floor(u/4/n),h=e.getImageData(d,p,1,1).data;return!(a[u]!==h[0]||a[u+2]!==h[2]||e.measureText(o).width>=n)}})();var r0={latestVersion:AC,noCountryFlags:IC};const Iu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Tt=null;function OC(e){Tt||(Tt=qr.get("frequently")||{});const t=e.id||e;t&&(Tt[t]||(Tt[t]=0),Tt[t]+=1,qr.set("last",t),qr.set("frequently",Tt))}function LC({maxFrequentRows:e,perLine:t}){if(!e)return[];Tt||(Tt=qr.get("frequently"));let n=[];if(!Tt){Tt={};for(let a in Iu.slice(0,t)){const c=Iu[a];Tt[c]=t-a,n.push(c)}return n}const i=e*t,o=qr.get("last");for(let a in Tt)n.push(a);if(n.sort((a,c)=>{const u=Tt[c],d=Tt[a];return u==d?a.localeCompare(c):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let c of a)c!=o&&delete Tt[c];o&&n.indexOf(o)==-1&&(delete Tt[n[n.length-1]],n.splice(-1,1,o)),qr.set("frequently",Tt)}return n}var wm={add:OC,get:LC,DEFAULTS:Iu},xm={};xm=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var fr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Lt=null,Re=null;const iu={};async function i0(e){if(iu[e])return iu[e];const n=await(await fetch(e)).json();return iu[e]=n,n}let su=null,$m=null,km=!1;function Rl(e,{caller:t}={}){return su||(su=new Promise(n=>{$m=n})),e?PC(e):t&&!km&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),su}async function PC(e){km=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=fr.emojiVersion.value),n||(n=fr.set.value),i||(i=fr.locale.value),Re)Re.categories=Re.categories.filter(d=>!d.name);else{Re=(typeof e.data=="function"?await e.data():e.data)||await i0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Re.emoticons={},Re.natives={},Re.categories.unshift({id:"frequent",emojis:[]});for(const d in Re.aliases){const p=Re.aliases[d],h=Re.emojis[p];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}Re.originalCategories=Re.categories}if(Lt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?am(xm):await i0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const p=e.custom[d],h=e.custom[d-1];if(!(!p.emojis||!p.emojis.length)){p.id||(p.id=`custom_${d+1}`),p.name||(p.name=Lt.categories.custom),h&&!p.icon&&(p.target=h.target||h),Re.categories.push(p);for(const m of p.emojis)Re.emojis[m.id]=m}}e.categories&&(Re.categories=Re.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,p)=>{const h=e.categories.indexOf(d.id),m=e.categories.indexOf(p.id);return h-m}));let o=null,a=null;n=="native"&&(o=r0.latestVersion(),a=e.noCountryFlags||r0.noCountryFlags());let c=Re.categories.length,u=!1;for(;c--;){const d=Re.categories[c];if(d.id=="frequent"){let{maxFrequentRows:m,perLine:v}=e;m=m>=0?m:fr.maxFrequentRows.value,v||(v=fr.perLine.value),d.emojis=wm.get({maxFrequentRows:m,perLine:v})}if(!d.emojis||!d.emojis.length){Re.categories.splice(c,1);continue}const{categoryIcons:p}=e;if(p){const m=p[d.id];m&&!d.icon&&(d.icon=m)}let h=d.emojis.length;for(;h--;){const m=d.emojis[h],v=m.id?m:Re.emojis[m],_=()=>{d.emojis.splice(h,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){_();continue}if(o&&v.version>o){_();continue}if(a&&d.id=="flags"&&!jC.includes(v.id)){_();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([k,S])=>{if(k)return(Array.isArray(k)?k:[k]).map(O=>(S?O.split(/[-|_|\s]+/):[O]).map(U=>U.toLowerCase())).flat()}).flat().filter(k=>k&&k.trim()).join(","),v.emoticons)for(const k of v.emoticons)Re.emoticons[k]||(Re.emoticons[k]=v.id);let x=0;for(const k of v.skins){if(!k)continue;x++;const{native:S}=k;S&&(Re.natives[S]=v.id,v.search+=`,${S}`);const O=x==1?"":`:skin-tone-${x}:`;k.shortcodes=`:${v.id}:${O}`}}}}u&&qi.reset(),$m()}function Cm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Sm(o,e,t,n);return i}function Sm(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const MC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Ru=null;function BC(e){return e.id?e:Re.emojis[e]||Re.emojis[Re.aliases[e]]||Re.emojis[Re.natives[e]]}function UC(){Ru=null}async function DC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Rl(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,p)=>u.trim()&&p.indexOf(u)==d);if(!i.length)return;let o=Ru||(Ru=Object.values(Re.emojis)),a,c;for(const u of i){if(!o.length)break;a=[],c={};for(const d of o){if(!d.search)continue;const p=d.search.indexOf(`,${u}`);p!=-1&&(a.push(d),c[d.id]||(c[d.id]=0),c[d.id]+=d.id==u?0:p+1)}o=a}return a.length<2||(a.sort((u,d)=>{const p=c[u.id],h=c[d.id];return p==h?u.id.localeCompare(d.id):p-h}),a.length>t&&(a=a.slice(0,t))),a}var qi={search:DC,get:BC,reset:UC,SHORTCODES_REGEX:MC};const jC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function NC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function HC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function zC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const FC={activity:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},WC={loupe:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var sl={categories:FC,search:WC};function Ou(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(qi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=qi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),c=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${c})`,backgroundSize:`${100*Re.sheet.cols}% ${100*Re.sheet.rows}%`,backgroundPosition:`${100/(Re.sheet.cols-1)*o.x}% ${100/(Re.sheet.rows-1)*o.y}%`}})})}const ZC=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Em extends ZC{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Sm(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class qC extends Em{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Tm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:fr.set,skin:fr.skin};class Am extends Em{async connectedCallback(){const t=Cm(this.props,Tm,this);t.element=this,t.ref=n=>{this.component=n},await Rl(),!this.disconnected&&bm(z(Ou,{...t}),this)}constructor(t){super(t)}}In(Am,"Props",Tm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Am);var s0,Lu=[],o0=pe.__b,a0=pe.__r,l0=pe.diffed,c0=pe.__c,u0=pe.unmount;function KC(){var e;for(Lu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Lu.pop();)if(e.__P)try{e.__H.__h.forEach(Ma),e.__H.__h.forEach(Pu),e.__H.__h=[]}catch(t){e.__H.__h=[],pe.__e(t,e.__v)}}pe.__b=function(e){o0&&o0(e)},pe.__r=function(e){a0&&a0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ma),t.__h.forEach(Pu),t.__h=[])},pe.diffed=function(e){l0&&l0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Lu.push(t)!==1&&s0===pe.requestAnimationFrame||((s0=pe.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),d0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);d0&&(i=requestAnimationFrame(o))})(KC))},pe.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ma),n.__h=n.__h.filter(function(i){return!i.__||Pu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],pe.__e(i,n.__v)}}),c0&&c0(e,t)},pe.unmount=function(e){u0&&u0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ma(i)}catch(o){t=o}}),t&&pe.__e(t,n.__v))};var d0=typeof requestAnimationFrame=="function";function Ma(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Pu(e){e.__c=e.__()}function GC(e,t){for(var n in t)e[n]=t[n];return e}function f0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function ol(e){this.props=e}(ol.prototype=new Fn).isPureReactComponent=!0,ol.prototype.shouldComponentUpdate=function(e,t){return f0(this.props,e)||f0(this.state,t)};var h0=pe.__b;pe.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),h0&&h0(e)};var VC=pe.__e;pe.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}VC(e,t,n)};var p0=pe.unmount;function ou(){this.__u=0,this.t=null,this.__b=null}function Im(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Ea(){this.u=null,this.o=null}pe.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),p0&&p0(e)},(ou.prototype=new Fn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Im(i.__v),a=!1,c=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=c;var u=function(){if(!--i.__u){if(i.state.__e){var p=i.state.__e;i.__v.__k[0]=function m(v,_,x){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(k){return m(k,_,x)}),v.__c&&v.__c.__P===_&&(v.__e&&x.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=x)),v}(p,p.__c.__P,p.__c.__O)}var h;for(i.setState({__e:i.__b=null});h=i.t.pop();)h.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(c,c)},ou.prototype.componentWillUnmount=function(){this.t=[]},ou.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(c,u,d){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(p){typeof p.__c=="function"&&p.__c()}),c.__c.__H=null),(c=GC({},c)).__c!=null&&(c.__c.__P===d&&(c.__c.__P=u),c.__c=null),c.__k=c.__k&&c.__k.map(function(p){return a(p,u,d)})),c}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Au(rs,null,e.fallback);return o&&(o.__h=null),[Au(rs,null,t.__e?null:e.children),o]};var g0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Ea.prototype=new Fn).__e=function(e){var t=this,n=Im(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),g0(t,e,i)):o()};n?n(a):a()}},Ea.prototype.render=function(e){this.u=null,this.o=new Map;var t=rl(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ea.prototype.componentDidUpdate=Ea.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){g0(e,n,t)})};var QC=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,XC=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,YC=typeof document<"u",JC=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Fn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Fn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var m0=pe.event;function eS(){}function tS(){return this.cancelBubble}function nS(){return this.defaultPrevented}pe.event=function(e){return m0&&(e=m0(e)),e.persist=eS,e.isPropagationStopped=tS,e.isDefaultPrevented=nS,e.nativeEvent=e};var v0={configurable:!0,get:function(){return this.class}},y0=pe.vnode;pe.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var c=n[a];YC&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&c==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&c===!0?c="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!JC(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&XC.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():c===null&&(c=void 0),i[a]=c)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=rl(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=rl(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(v0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",v0))}e.$$typeof=QC,y0&&y0(e)};var b0=pe.__r;pe.__r=function(e){b0&&b0(e),e.__c};const rS={light:"outline",dark:"solid"};class iS extends ol{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return z("img",{src:n.src})}const i=sl.categories[t.id]||sl.categories.custom,o=this.props.icons=="auto"?rS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Lt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:c=>c.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Re.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class sS extends ol{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const Ta={rowsPerRender:10};class oS extends Fn{getInitialState(t=this.props){return{skin:qr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Lt.rtl?"rtl":"ltr",this.refs={menu:cr(),navigation:cr(),scroll:cr(),search:cr(),searchInput:cr(),skinToneButton:cr(),skinToneRadio:cr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Rl(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Re;this.refs.categories=new Map;const n=Re.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const c=[];c.__categoryId=a.id,c.__index=o.length,this.grid.push(c);const u=this.grid.length-1,d=u%Ta.rowsPerRender?{}:cr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),c};for(let o of t){const a=[];let c=i(a,o);for(let u of o.emojis)c.length==this.getPerLine()&&(c=i(a,o)),this.grid.setsize+=1,c.push(u);this.refs.categories.set(o.id,{root:cr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:c}=n.getBoundingClientRect();return Math.floor(c/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return qi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=c=>{c!=t.state.categoryId&&t.setState({categoryId:c})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(c=>{for(const d of c){const p=d.target.dataset.id;n.set(p,d.intersectionRatio)}const u=[...n];for(const[d,p]of u)if(p){i(d);break}},o);for(const{root:c}of this.refs.categories.values())a.observe(c.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Ta.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Ta.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:c}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,p]=this.state.pos;const h=(()=>{if(d==0&&p==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||c)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let m=u[d];const v=i?-1:1;if(p+=v,!m[p]){if(d+=v,m=u[d],!m)return d=i?0:u.length-1,p=i?0:u[d].length-1,[d,p];p=i?m.length-1:0}return[d,p]}if(a||c){d+=a?-1:1;const m=u[d];return m?(m[p]||(p=m.length-1),[d,p]):(d=a?0:u.length-1,p=a?0:u[d].length-1,[d,p])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let c=0;if(n>=0&&(t=i[n].__categoryId),t&&(c=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)c=0;else{const u=i[n].__index,d=c+u*this.props.emojiButtonSize,p=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)c=d;else if(p>o.scrollTop+a.height)c=p-a.height;else return}this.ignoreMouse(),o.scrollTop=c}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=zC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&wm.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),qr.set("skin",t)}renderNav(){return z(iS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[z("div",{class:"flex flex-middle flex-grow",children:[z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:z(Ou,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),z("div",{class:`margin-${this.dir[0]}`,children:t||n?z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[z("div",{class:"preview-title ellipsis",children:t?t.name:Lt.search_no_results_1}),z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Lt.search_no_results_2})]}):z("div",{class:"preview-placeholder color-c",children:Lt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,c=this.state.tempSkin||this.state.skin,d=(t.skins[c-1]||t.skins[0]).native,p=NC(this.state.pos,n),h=n.concat(t.id).join("");return z(sS,{selected:p,skin:c,size:a,children:z("button",{"aria-label":d,"aria-selected":p||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:m=>this.handleEmojiClick({e:m,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),z(Ou,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:c,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return z("div",{children:[z("div",{class:"spacer"}),z("div",{class:"flex flex-middle",children:[z("div",{class:"search relative flex-grow",children:[z("input",{type:"search",ref:this.refs.searchInput,placeholder:Lt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),z("span",{class:"icon loupe flex",children:sl.search.loupe}),this.state.searchResults&&z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:sl.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?z("div",{class:"category",ref:this.refs.search,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Lt.categories.search}),z("div",{children:t.length?t.map((n,i)=>z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&z("a",{onClick:this.props.onAddCustomEmoji,children:Lt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Re,n=!!this.state.searchResults,i=this.getPerLine();return z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:c}=this.refs.categories.get(o.id);return z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Lt.categories[o.id]}),z("div",{class:"relative",style:{height:c.length*this.props.emojiButtonSize},children:c.map((u,d)=>{const p=u.index-u.index%Ta.rowsPerRender,h=this.state.visibleRows[p],m="current"in u?u:void 0;if(!h&&!m)return null;const v=d*i,_=v+i,x=o.emojis.slice(v,_);return x.length<i&&x.push(...new Array(i-x.length)),z("div",{"data-index":u.index,ref:m,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&x.map((k,S)=>{if(!k)return z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const O=qi.get(k);return this.renderEmojiButton(O,{pos:[u.index,S],posinset:u.posinset+S,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Lt.skins.choose,title:Lt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Lt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const c=a+1,u=this.state.skin==c;return z("div",{children:[z("input",{type:"radio",name:"skin-tone",value:c,"aria-label":Lt.skins[c],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(c),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(c))}}),z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(c),onMouseEnter:()=>this.handleSkinMouseOver(c),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[z("span",{class:`skin-tone skin-tone-${c}`}),z("span",{class:"margin-small-lr",children:Lt.skins[c]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&z("div",{class:"padding-lr",children:this.renderSearch()}),z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),In(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),In(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),In(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),In(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),In(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await qi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const c=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let p of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(p);this.ignoreMouse(),this.setState({searchResults:u,pos:c},a)}),In(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),In(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),In(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),In(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await HC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class md extends qC{async connectedCallback(){const t=Cm(this.props,fr,this);t.element=this,t.ref=n=>{this.component=n},await Rl(t),!this.disconnected&&bm(z(oS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:am(Rm)})}}In(md,"Props",fr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",md);var Rm={};Rm=`:host {
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

`;const aS=e=>{let t;const[n,i]=$e(void 0);return w(pd,{ref:c=>{t=c},position:"bottom",get button(){return e.children},onOpen:()=>{const c=new md({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native),t?.close()}});i(c)},onClose:()=>{i(void 0)},get children(){return n()}})},lS=P("<div>"),cS=P('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),uS=P("<br>"),dS=P("<span>理由: "),fS=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),hS=e=>{const[t,n]=$e(!1);return w(ue,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=fS();return i.firstChild,i.$$click=()=>n(!0),A(i,w(ue,{get when(){return e.contentWarning.reason!=null},get children(){return[uS(),(()=>{const o=dS();return o.firstChild,A(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=lS();return A(i,()=>e.children),i})(),w(ue,{get when(){return e.contentWarning.contentWarning},get children(){const i=cS();return i.$$click=()=>n(!1),i}})]}})};vt(["click"]);const Om=e=>{const{profile:t}=gs(()=>({pubkey:e.pubkey}));return w(ue,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Tl(e.pubkey)}`},get children(){return["@",Ke(()=>t()?.name??e.pubkey)]}})},pS=P('<a target="_blank" rel="noreferrer noopener">'),vd=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return w(ue,{get when(){return t()},get fallback(){return e.href},get children(){const n=pS();return A(n,()=>e.children??e.href),Pe(i=>{const o=e.class,a=e.href;return o!==i._v$&&o4(n,i._v$=o),a!==i._v$2&&At(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},gS=P('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),mS=P('<canvas class="inline-block max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),vS=P('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),yS=e=>{let t,n;const[i,o]=$e(e.initialHidden),[a,c]=$e(!0),u=()=>{c(!0)};return w(ue,{get when(){return!i()},get fallback(){return(()=>{const d=vS();return d.$$click=()=>o(!1),d})()},get children(){return w(vd,{class:"my-2 block",get href(){return e.url},get children(){return[(()=>{const d=gS(),p=t;return typeof p=="function"?Wn(p,d):t=d,Pe(h=>{const m=!!a(),v=!a(),_=a()?Mk(e.url):void 0,x=e.url;return m!==h._v$&&d.classList.toggle("inline-block",h._v$=m),v!==h._v$2&&d.classList.toggle("hidden",h._v$2=v),_!==h._v$3&&At(d,"src",h._v$3=_),x!==h._v$4&&At(d,"alt",h._v$4=x),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})(),(()=>{const d=mS();d.$$click=h=>{h.preventDefault(),u()};const p=n;return typeof p=="function"?Wn(p,d):n=d,Pe(h=>{const m=!!a(),v=!!a(),_=!a(),x=!a();return m!==h._v$5&&d.classList.toggle("w-0",h._v$5=m),v!==h._v$6&&d.classList.toggle("h-0",h._v$6=v),_!==h._v$7&&d.classList.toggle("w-auto",h._v$7=_),x!==h._v$8&&d.classList.toggle("h-auto",h._v$8=x),h},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),d})()]}})}})};vt(["click"]);const bS=P('<div class="my-1 rounded border p-1">'),_S=e=>w(ue,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return w(eo,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=bS();return A(t,w(ho,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1})),t}}),wS=P('<button class="inline text-blue-500 underline">'),au=e=>{const{showProfile:t}=ei(),n=()=>{t(e.pubkey)};return(()=>{const i=wS();return i.$$click=n,A(i,w(Om,{get pubkey(){return e.pubkey}})),i})()};vt(["click"]);const[yd,xS]=$e({}),Lm=e=>{yd()[e]==null&&xS(t=>({...t,[e]:new MessageChannel}))},$S=e=>{const t=()=>yd()[e().id],n=(o,a)=>{const c={requestId:o,request:a};t().port1.postMessage(c)},i=(o,a=1e3)=>new Promise((c,u)=>{let d;const p=h=>{const m=h.data;m.requestId===o&&(t().port1.removeEventListener("message",p),m.ok?c(m.response):u(m.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",p),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",p,!1),t().port1.start()});return wn(()=>{const{id:o}=e();Lm(o)}),async o=>{const a=Math.random().toString(),c=i(a);return n(a,o),c}},kS=e=>{const t=Ke(e),n=()=>yd()[t().id];wn(()=>{const{id:i}=t();Lm(i);const o=n().port2,a=c=>{const{requestId:u,request:d}=c.data,p=t().handler(d);(p instanceof Promise?p:Promise.resolve(p)).then(m=>{const v={requestId:u,ok:!0,response:m};o.postMessage(v)}).catch(m=>{const v={requestId:u,ok:!1,error:m};o.postMessage(v)})};o.addEventListener("message",a),o.start(),Xr(()=>{o.removeEventListener("message",a)})})},ko=()=>$S(()=>({id:"CommandChannel"})),Mu=e=>{kS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},{decode:CS}=wo,SS=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,ES=/(?:#\[(?<idx>\d+)\])/g,TS=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent)1[ac-hj-np-z02-9]+))/gi,AS=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,IS=/:(?<emoji>[a-zA-Z0-9]+):/gu,Pm=e=>{const t=[...e.matchAll(SS),...e.matchAll(ES),...e.matchAll(TS),...e.matchAll(AS),...e.matchAll(IS)].sort((a,c)=>a.index-c.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const c=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=c;else{const d={type:"PlainText",content:c};i.push(d)}n=a}};return t.forEach(a=>{const{index:c}=a;if(!(c<n)){if(a.groups?.url){o(c);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(c),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(c);try{const u=CS(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(c+a[0].length)}}else if(a.groups?.hashtag){o(c);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(c);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=c+a[0].length}}),n<e.length&&o(e.length),i},RS=({tagIndex:e,content:t},n)=>{const i=n.tags[e];if(i==null)return null;const o=i[0];if(o==="p"&&Ks(i[1]))return{type:"MentionedUser",tagIndex:e,content:t,pubkey:i[1]};if(o==="e"&&Ks(i[1])){const a=_n(n).markedEventTags().find(c=>c.index===e);return{type:"MentionedEvent",tagIndex:e,content:t,eventId:i[1],marker:a?.marker}}return null},lu=P("<span>"),_0=P('<div class="my-1 rounded border p-1">'),OS=P('<span class="text-blue-500 underline">'),LS=P('<button class="text-blue-500 underline">'),PS=P('<img class="inline-block h-7 max-w-[64px] align-middle">'),MS=e=>{const{config:t,saveColumn:n}=ze(),i=ko(),o=()=>_n(e.event),a=c=>{n(dd({query:c})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return w(Kt,{get each(){return Pm(e.event.content)},children:c=>{if(c.type==="PlainText")return(()=>{const u=lu();return A(u,()=>c.content),u})();if(c.type==="URL")return V1(c.content)?w(yS,{get url(){return c.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):w(vd,{class:"text-blue-500 underline",get href(){return c.content}});if(c.type==="TagReference"){const u=RS(c,e.event);if(u==null)return(()=>{const d=lu();return A(d,()=>c.content),d})();if(u.type==="MentionedUser")return w(au,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?w(_S,{mentionedEvent:u}):w(eo,{get eventId(){return u.eventId}})}if(c.type==="Bech32Entity")return c.data.type==="note"&&e.embedding?(()=>{const u=_0();return A(u,w(ho,{get eventId(){return c.data.data},actions:!1,embedding:!1,get ensureKinds(){return[wt.Text]}})),u})():c.data.type==="nevent"&&e.embedding?(()=>{const u=_0();return A(u,w(ho,{get eventId(){return c.data.data.id},actions:!1,embedding:!1})),u})():c.data.type==="npub"?w(au,{get pubkey(){return c.data.data}}):c.data.type==="nprofile"?w(au,{get pubkey(){return c.data.data.pubkey}}):(()=>{const u=OS();return A(u,()=>c.content),u})();if(c.type==="HashTag")return(()=>{const u=LS();return u.$$click=()=>a(c.content),A(u,()=>c.content),u})();if(c.type==="CustomEmoji"){const u=o().getEmojiUrl(c.shortcode);return u==null?(()=>{const d=lu();return A(d,()=>c.content),d})():(()=>{const d=PS();return At(d,"src",u),Pe(()=>At(d,"alt",c.shortcode)),d})()}return console.error("Not all ParsedTextNoteNodes are covered",c),null}})};vt(["click"]);const BS=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),US=(e={})=>(()=>{const t=BS();return rt(t,e,!0,!0),t})(),DS=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),po=(e={})=>(()=>{const t=DS();return rt(t,e,!0,!0),t})(),jS=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),NS=(e={})=>(()=>{const t=jS();return rt(t,e,!0,!0),t})(),HS=e=>Math.floor(+e/1e3),ur=()=>HS(new Date),zS=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),FS=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:c,tags:u})=>{const d=[],p=e?.map(m=>["p",m])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),n?.forEach(m=>d.push(["e",m,"","mention"])),i!=null&&d.push(["e",i,"","reply"]),a?.forEach(m=>h.push(["t",m])),c?.forEach(m=>h.push(["r",m])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...p,...h]},Ol=()=>{const e=El(),t=async(d,p)=>{const h={...p};if(h.id=E1(h),window.nostr==null)throw new Error("NIP-07 implementation not found");const m=await window.nostr.signEvent(h);return d.map(async v=>{const x=(await e().ensureRelay(v)).publish(m);return zS(x,v)})};return{publishTextNote:async d=>{const{relayUrls:p,pubkey:h,content:m}=d,v=FS(d),_={kind:1,pubkey:h,created_at:ur(),tags:v,content:m};return t(p,_)},publishReaction:async({relayUrls:d,pubkey:p,eventId:h,content:m,notifyPubkey:v})=>{const _={kind:7,pubkey:p,created_at:ur(),tags:[["e",h,""],["p",v]],content:m};return t(d,_)},publishRepost:async({relayUrls:d,pubkey:p,eventId:h,notifyPubkey:m})=>{const v={kind:6,pubkey:p,created_at:ur(),tags:[["e",h,""],["p",m]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:p,profile:h,otherProperties:m})=>{const v={...h,...m},_={kind:wt.Metadata,pubkey:p,created_at:ur(),tags:[],content:JSON.stringify(v)};return t(d,_)},updateContacts:async({relayUrls:d,pubkey:p,followingPubkeys:h,content:m})=>{const v=h.map(x=>["p",x]),_={kind:wt.Contacts,pubkey:p,created_at:ur(),tags:v,content:m};return t(d,_)},deleteEvent:async({relayUrls:d,pubkey:p,eventId:h})=>{const m={kind:wt.EventDeletion,pubkey:p,created_at:ur(),tags:[["e",h,""]],content:""};return t(d,m)}}};let cu=!1;const[Aa,WS]=$e(void 0),br=()=>(wn(()=>{if(Aa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),Aa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Aa()==null&&!cu&&(cu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),WS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{cu=!1})),e+=1},200)}),Aa),ZS=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},qS=e=>t=>Promise.allSettled(t.map(n=>e(n))),KS=P("<div>に返信"),GS=P('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),VS=P('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),QS=P('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),XS=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},YS=e=>{const t=[],n=[],i=[],o=[];return e.forEach(a=>{a.type==="HashTag"?t.push(a.tagName):a.type==="URL"?o.push(a.content):a.type==="Bech32Entity"&&(a.data.type==="npub"?n.push(a.data.data):a.data.type==="note"&&i.push(a.data.data))}),{hashtags:t,pubkeyReferences:n,eventReferences:i,urlReferences:o}},JS=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},Mm=e=>{let t,n;const[i,o]=$e(""),[a,c]=$e(!1),[u,d]=$e(""),p=()=>{o(""),d(""),c(!1)},h=()=>{t?.blur(),p(),e.onClose()},{config:m}=ze(),v=br(),_=Ol(),x=()=>e.replyTo&&_n(e.replyTo),k=()=>e.mode??"normal",S=pi({mutationKey:["publishTextNote"],mutationFn:_.publishTextNote.bind(_),onSuccess:()=>{console.log("succeeded to post"),p(),e.onPost?.()},onError:H=>{console.error("error",H)}}),O=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},U=pi({mutationKey:["uploadFiles"],mutationFn:H=>qS(ZS)(H).then(se=>{se.forEach(le=>{le.status==="fulfilled"?(console.log("succeeded to upload",le),o(Qe=>`${Qe} ${le.value.imageUrl}`),O()):console.error("failed to upload",le)})}).catch(se=>console.error(se))}),M=Ke(()=>x()?.mentionedPubkeysWithoutAuthor()??[]),R=Ke(()=>M().filter(H=>H!==v())),T=(H,se)=>e.replyTo==null?se:Fr([e.replyTo.pubkey,...R(),...se]),L=()=>{if(i().length===0||S.isLoading)return;const H=v();if(H==null){console.error("pubkey is not available");return}const se=Pm(i()),{hashtags:le,pubkeyReferences:Qe,eventReferences:Ue,urlReferences:ee}=YS(se),Oe=JS(se);let ht={relayUrls:m().relayUrls,pubkey:H,content:Oe,notifyPubkeys:Qe,mentionEventIds:Ue,hashtags:le,urls:ee};x()!=null&&(ht={...ht,notifyPubkeys:T(H,Qe),rootEventId:x()?.rootEvent()?.id??x()?.id,replyEventId:x()?.id}),a()&&(ht={...ht,contentWarning:u()}),S.mutate(ht),h()},F=H=>{o(H.currentTarget.value),O()},Z=H=>{H.preventDefault(),L()},oe=H=>{H.key==="Enter"&&(H.ctrlKey||H.metaKey)?L():H.key==="Escape"&&(t?.blur(),h())},G=H=>{H.preventDefault();const se=[...H.currentTarget.files??[]];U.mutate(se),H.currentTarget.value=""},re=H=>{if(H.preventDefault(),U.isLoading)return;const se=[...H?.dataTransfer?.files??[]];U.mutate(se)},q=H=>{if(U.isLoading)return;const se=[...H?.clipboardData?.items??[]],le=[];se.forEach(Qe=>{if(Qe.kind==="file"){H.preventDefault();const Ue=Qe.getAsFile();if(Ue==null)return;le.push(Ue)}}),le.length!==0&&U.mutate(le)},Q=H=>{H.preventDefault()},ie=()=>i().trim().length===0||S.isLoading||U.isLoading,Ne=()=>U.isLoading;return wn(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const H=QS(),se=H.firstChild,le=se.firstChild,Qe=le.nextSibling,Ue=Qe.firstChild,ee=Ue.nextSibling,Oe=ee.nextSibling,ht=Qe.nextSibling;A(H,w(ue,{get when(){return M().length>0},get children(){const X=KS(),yt=X.firstChild;return A(X,w(Kt,{get each(){return M()},children:an=>[w(Al,{pubkey:an})," "]}),yt),X}}),se),se.addEventListener("submit",Z),A(se,w(ue,{get when(){return a()},get children(){const X=GS();return X.$$input=yt=>d(yt.currentTarget.value),Pe(()=>X.value=u()),X}}),le),le.addEventListener("paste",q),le.addEventListener("drop",re),le.addEventListener("dragover",Q),le.$$keydown=oe,le.$$input=F,Wn(X=>{t=X,e.textAreaRef?.(X)},le),A(Qe,w(ue,{get when(){return k()==="reply"},get children(){const X=VS(),yt=X.firstChild;return yt.$$click=()=>h(),A(yt,w(po,{})),X}}),Ue),Ue.$$click=()=>c(X=>!X),ee.$$click=()=>n?.click(),A(ee,w(US,{})),A(Oe,w(NS,{})),ht.addEventListener("change",G);const wr=n;return typeof wr=="function"?Wn(wr,ht):n=ht,Pe(X=>{const yt=XS(k()),an=!a(),Mt=!!a(),ce=k()==="normal",xt=k()==="normal",pt=k()==="reply",It=k()==="reply",jn=!!Ne(),it=!Ne(),zt=k()==="normal",xr=k()==="normal",ut=k()==="reply",Bt=k()==="reply",Jn=Ne(),ye=!!ie(),He=!ie(),st=k()==="normal",$t=k()==="normal",Vt=k()==="reply",de=k()==="reply",ln=ie();return yt!==X._v$&&At(le,"placeholder",X._v$=yt),an!==X._v$2&&Ue.classList.toggle("bg-rose-300",X._v$2=an),Mt!==X._v$3&&Ue.classList.toggle("bg-rose-400",X._v$3=Mt),ce!==X._v$4&&Ue.classList.toggle("h-8",X._v$4=ce),xt!==X._v$5&&Ue.classList.toggle("w-8",X._v$5=xt),pt!==X._v$6&&Ue.classList.toggle("h-7",X._v$6=pt),It!==X._v$7&&Ue.classList.toggle("w-7",X._v$7=It),jn!==X._v$8&&ee.classList.toggle("bg-primary-disabled",X._v$8=jn),it!==X._v$9&&ee.classList.toggle("bg-primary",X._v$9=it),zt!==X._v$10&&ee.classList.toggle("h-8",X._v$10=zt),xr!==X._v$11&&ee.classList.toggle("w-8",X._v$11=xr),ut!==X._v$12&&ee.classList.toggle("h-7",X._v$12=ut),Bt!==X._v$13&&ee.classList.toggle("w-7",X._v$13=Bt),Jn!==X._v$14&&(ee.disabled=X._v$14=Jn),ye!==X._v$15&&Oe.classList.toggle("bg-primary-disabled",X._v$15=ye),He!==X._v$16&&Oe.classList.toggle("bg-primary",X._v$16=He),st!==X._v$17&&Oe.classList.toggle("h-8",X._v$17=st),$t!==X._v$18&&Oe.classList.toggle("w-8",X._v$18=$t),Vt!==X._v$19&&Oe.classList.toggle("h-7",X._v$19=Vt),de!==X._v$20&&Oe.classList.toggle("w-7",X._v$20=de),ln!==X._v$21&&(Oe.disabled=X._v$21=ln),X},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Pe(()=>le.value=i()),H})()};vt(["input","keydown","click"]);const Bm=a4(),eE=()=>l4(Bm),tE=()=>{const[e,t]=Ki({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},nE=P('<div class="flex gap-2 py-1">'),rE=P('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),iE=P('<span class="ml-1 text-sm">'),sE=P('<button class="flex h-6 items-center rounded border px-1" type="button">'),oE=P('<span class="text-base">'),aE=P('<span class="text-red-500">削除'),lE=P('<img alt="icon" class="h-full w-full rounded object-cover">'),cE=P('<div class="author-name truncate pr-1 font-bold hover:underline">'),uE=P('<div class="text-xs">への返信'),dE=P('<div class="content whitespace-pre-wrap break-all">'),fE=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),w0=P('<div class="text-sm text-zinc-400">'),hE=P('<span class="inline-block h-4 w-4">'),pE=P('<div class="flex shrink-0 items-center gap-1">'),gE=P('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),mE=P('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),vE=P('<div class="nostr-textnote flex flex-col"><div class="flex w-full gap-1"><button class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></button><div class="created-at shrink-0"><a type="button" class="hover:underline"></a></div></div><div class="overflow-hidden">'),yE=P('<div class="mt-1 rounded border p-1">'),bE=P('<button class="pr-1 text-blue-500 hover:underline">'),{noteEncode:x0}=wo,_E=e=>{const{config:t}=ze(),n=br();return(()=>{const i=nE();return A(i,w(Kt,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const c=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=sE();return u.$$click=()=>e.onReaction(o),A(u,w(ue,{when:o==="+",get fallback(){return(()=>{const d=oE();return A(d,o),d})()},get children(){const d=rE();return A(d,w(hd,{})),d}}),null),A(u,w(ue,{get when(){return!t().hideCount},get children(){const d=iE();return A(d,()=>a.length),d}}),null),Pe(d=>Ws(u,{"text-zinc-400":!c,"hover:bg-zinc-50":!c,"bg-rose-50":c,"border-rose-200":c,"text-rose-400":c},d)),u})()}})),i})()},Um=e=>{let t;const{config:n}=ze(),i=nm(),o=br(),{showProfile:a}=ei(),c=eE(),[u,d]=$e(!1),[p,h]=$e(!1),[m,v]=$e(!1),_=()=>v(!1),[x,k]=$e(!1),[S,O]=$e(!1),U=Ke(()=>_n(e.event)),M=()=>e.embedding??!0,R=()=>e.actions??!0,{profile:T}=gs(()=>({pubkey:e.event.pubkey})),{reactions:L,reactionsGroupedByContent:F,isReactedBy:Z,isReactedByWithEmoji:oe,invalidateReactions:G,query:re}=Xk(()=>({eventId:e.event.id})),{reposts:q,isRepostedBy:Q,invalidateReposts:ie,query:Ne}=Yk(()=>({eventId:e.event.id})),H=Ol(),se=pi({mutationKey:["publishReaction",U().id],mutationFn:H.publishReaction.bind(H),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:ce=>{console.error("failed to publish reaction: ",ce)},onSettled:()=>{G().then(()=>re.refetch()).catch(ce=>console.error("failed to refetch reactions",ce))}}),le=pi({mutationKey:["publishRepost",U().id],mutationFn:H.publishRepost.bind(H),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:ce=>{console.error("failed to publish repost: ",ce)},onSettled:()=>{ie().then(()=>Ne.refetch()).catch(ce=>console.error("failed to refetch reposts",ce))}}),Qe=pi({mutationKey:["deleteEvent",U().id],mutationFn:(...ce)=>H.deleteEvent(...ce).then(xt=>Promise.allSettled(xt.map(Jr(1e4)))),onSuccess:ce=>{const xt=ce.filter(It=>It.status==="fulfilled").length,pt=ce.length-xt;xt===ce.length?window.alert("削除しました（画面の反映にはリロード）"):xt>0?window.alert(`${pt}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:ce=>{console.error("failed to delete",ce)}}),Ue=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(x0(e.event.id)).catch(ce=>window.alert(ce))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event)).catch(ce=>window.alert(ce))}},{when:()=>U().pubkey===o(),content:()=>aE(),onSelect:()=>{const ce=o();ce!=null&&window.confirm("本当に削除しますか？")&&Qe.mutate({relayUrls:n().relayUrls,pubkey:ce,eventId:U().id})}}],ee=Ke(()=>{const ce=o();return ce!=null&&Z(ce)||u()}),Oe=Ke(()=>{const ce=o();return ce!=null&&oe(ce)}),ht=Ke(()=>{const ce=o();return ce!=null&&Q(ce)||p()}),wr=()=>{const ce=U().replyingToEvent();if(M()&&ce!=null&&!U().containsEventMentionIndex(ce.index))return ce.id},X=()=>i(U().createdAtAsDate()),yt=ce=>{ce.stopPropagation(),!ht()&&sn([o(),e.event.id])(([xt,pt])=>{le.mutate({relayUrls:n().relayUrls,pubkey:xt,eventId:pt,notifyPubkey:e.event.pubkey}),h(!0)})},an=ce=>{ee()||sn([o(),e.event.id])(([xt,pt])=>{se.mutate({relayUrls:n().relayUrls,pubkey:xt,content:ce??"+",eventId:pt,notifyPubkey:e.event.pubkey}),d(!0)})},Mt=ce=>{ce.stopPropagation(),an()};return wn(()=>{t!=null&&O(t.scrollHeight>t.clientHeight)}),(()=>{const ce=vE(),xt=ce.firstChild,pt=xt.firstChild,It=pt.nextSibling,jn=It.firstChild,it=jn.firstChild,zt=it.firstChild,xr=it.nextSibling,ut=xr.firstChild,Bt=jn.nextSibling;pt.$$click=ye=>{ye.stopPropagation(),a(U().pubkey)},A(pt,w(ue,{get when(){return T()?.picture},get children(){const ye=lE();return Pe(()=>At(ye,"src",T()?.picture)),ye}})),it.$$click=ye=>{ye.stopPropagation(),a(U().pubkey)},A(it,w(ue,{get when(){return(T()?.display_name?.length??0)>0},get children(){const ye=cE();return A(ye,()=>T()?.display_name),ye}}),zt),A(zt,w(ue,{get when(){return T()?.name!=null},get fallback(){return`@${Tl(U().pubkey)}`},get children(){return["@",Ke(()=>T()?.name)]}})),ut.$$click=ye=>{ye.preventDefault(),c?.setTimeline({type:"Replies",event:e.event})},A(ut,X);const Jn=t;return typeof Jn=="function"?Wn(Jn,Bt):t=Bt,A(Bt,w(ue,{get when(){return wr()},keyed:!0,children:ye=>(()=>{const He=yE();return A(He,w(ho,{eventId:ye,actions:!1,embedding:!1})),He})()}),null),A(Bt,w(ue,{get when(){return U().mentionedPubkeys().length>0},get children(){const ye=uE(),He=ye.firstChild;return A(ye,w(Kt,{get each(){return U().mentionedPubkeys()},children:st=>(()=>{const $t=bE();return $t.$$click=Vt=>{Vt.stopPropagation(),a(st)},A($t,w(Om,{pubkey:st})),$t})()}),He),ye}}),null),A(Bt,w(hS,{get contentWarning(){return U().contentWarning()},get children(){const ye=dE();return A(ye,w(MS,{get event(){return e.event},get embedding(){return M()}})),ye}}),null),A(It,w(ue,{get when(){return S()},get children(){const ye=fE();return ye.$$click=He=>{He.stopPropagation(),k(st=>!st)},A(ye,w(ue,{get when(){return!x()},fallback:"隠す",children:"続きを読む"})),ye}}),null),A(It,w(ue,{get when(){return R()},get children(){return[w(ue,{get when(){return Ke(()=>!!n().showEmojiReaction)()&&L().length>0},get children(){return w(_E,{get reactionsGroupedByContent(){return F()},onReaction:an})}}),(()=>{const ye=mE(),He=ye.firstChild,st=He.nextSibling,$t=st.firstChild,Vt=st.nextSibling,de=Vt.firstChild,ln=Vt.nextSibling;return He.$$click=Me=>{Me.stopPropagation(),v(dt=>!dt)},A(He,w(fC,{})),$t.$$click=yt,A($t,w(P1,{})),A(st,w(ue,{get when(){return Ke(()=>!n().hideCount)()&&q().length>0},get children(){const Me=w0();return A(Me,()=>q().length),Me}}),null),de.$$click=Mt,A(de,w(ue,{get when(){return Ke(()=>!!ee())()&&!Oe()},get fallback(){return w(fd,{})},get children(){return w(hd,{})}})),A(Vt,w(ue,{get when(){return Ke(()=>!n().hideCount&&!n().showEmojiReaction)()&&L().length>0},get children(){const Me=w0();return A(Me,()=>L().length),Me}}),null),A(ye,w(ue,{get when(){return n().useEmojiReaction},get children(){const Me=pE();return A(Me,w(aS,{onEmojiSelect:dt=>an(dt),get children(){const dt=hE();return A(dt,w(sm,{})),dt}})),Pe(dt=>Ws(Me,{"text-zinc-400":!ee()||!Oe(),"hover:text-rose-400":!ee()||!Oe(),"text-rose-400":ee()&&Oe()||se.isLoading},dt)),Me}}),ln),A(ln,w(om,{menu:Ue,get children(){const Me=gE();return A(Me,w(im,{})),Me}})),Pe(Me=>{const dt={"text-zinc-400":!ht(),"hover:text-green-400":!ht(),"text-green-400":ht()||le.isLoading},xn=le.isLoading,$n={"text-zinc-400":!ee()||Oe(),"hover:text-rose-400":!ee()||Oe(),"text-rose-400":ee()&&!Oe()||se.isLoading},cn=se.isLoading;return Me._v$=Ws(st,dt,Me._v$),xn!==Me._v$2&&($t.disabled=Me._v$2=xn),Me._v$3=Ws(Vt,$n,Me._v$3),cn!==Me._v$4&&(de.disabled=Me._v$4=cn),Me},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),ye})()]}}),null),A(ce,w(ue,{get when(){return m()},get children(){return w(Mm,{mode:"reply",get replyTo(){return e.event},onClose:_,onPost:_})}}),null),Pe(ye=>{const He=`nostr:${x0(U().id)}`,st=!x();return He!==ye._v$5&&At(ut,"href",ye._v$5=He),st!==ye._v$6&&Bt.classList.toggle("max-h-screen",ye._v$6=st),ye},{_v$5:void 0,_v$6:void 0}),ce})()};vt(["click"]);const Dm=e=>{const{shouldMuteEvent:t}=ze();return w(ue,{get when(){return!t(e.event)},get children(){return w(Um,e)}})},wE=P("<span>予期しないイベント種別（<!>）"),xE=P("<span><span>未対応のイベント種別（<!>）"),jm=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return w(Ln,{get fallback(){return(()=>{const n=xE(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,A(i,()=>e.event.kind,a),A(n,w(eo,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[w(Fe,{get when(){return!t()},keyed:!0,get children(){const n=wE(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,A(n,()=>e.event.kind,o),A(n,w(eo,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),w(Fe,{get when(){return e.event.kind===wt.Text},get children(){return w(Dm,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),w(Fe,{get when(){return e.event.kind===6},get children(){return w(rm,{get event(){return e.event}})}})]}})},ms=e=>{const{shouldMuteEvent:t}=ze();return w(Kt,{get each(){return e.events},children:n=>w(ue,{get when(){return!t(n)},get children(){return w(Ra,{get children(){return w(jm,{event:n})}})}})})};var $E=gl;function kE(){this.__data__=new $E,this.size=0}var CE=kE;function SE(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var EE=SE;function TE(e){return this.__data__.get(e)}var AE=TE;function IE(e){return this.__data__.has(e)}var RE=IE,OE=gl,LE=Zu,PE=qu,ME=200;function BE(e,t){var n=this.__data__;if(n instanceof OE){var i=n.__data__;if(!LE||i.length<ME-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new PE(i)}return n.set(e,t),this.size=n.size,this}var UE=BE,DE=gl,jE=CE,NE=EE,HE=AE,zE=RE,FE=UE;function vs(e){var t=this.__data__=new DE(e);this.size=t.size}vs.prototype.clear=jE;vs.prototype.delete=NE;vs.prototype.get=HE;vs.prototype.has=zE;vs.prototype.set=FE;var bd=vs;function WE(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var ZE=WE,qE=xg,KE=ZE,GE=$g,VE=1,QE=2;function XE(e,t,n,i,o,a){var c=n&VE,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var p=a.get(e),h=a.get(t);if(p&&h)return p==t&&h==e;var m=-1,v=!0,_=n&QE?new qE:void 0;for(a.set(e,t),a.set(t,e);++m<u;){var x=e[m],k=t[m];if(i)var S=c?i(k,x,m,t,e,a):i(x,k,m,e,t,a);if(S!==void 0){if(S)continue;v=!1;break}if(_){if(!KE(t,function(O,U){if(!GE(_,U)&&(x===O||o(x,O,n,i,a)))return _.push(U)})){v=!1;break}}else if(!(x===k||o(x,k,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var Nm=XE,YE=Un,JE=YE.Uint8Array,Hm=JE;function eT(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var tT=eT,$0=as,k0=Hm,nT=Wu,rT=Nm,iT=tT,sT=Ku,oT=1,aT=2,lT="[object Boolean]",cT="[object Date]",uT="[object Error]",dT="[object Map]",fT="[object Number]",hT="[object RegExp]",pT="[object Set]",gT="[object String]",mT="[object Symbol]",vT="[object ArrayBuffer]",yT="[object DataView]",C0=$0?$0.prototype:void 0,uu=C0?C0.valueOf:void 0;function bT(e,t,n,i,o,a,c){switch(n){case yT:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case vT:return!(e.byteLength!=t.byteLength||!a(new k0(e),new k0(t)));case lT:case cT:case fT:return nT(+e,+t);case uT:return e.name==t.name&&e.message==t.message;case hT:case gT:return e==t+"";case dT:var u=iT;case pT:var d=i&oT;if(u||(u=sT),e.size!=t.size&&!d)return!1;var p=c.get(e);if(p)return p==t;i|=aT,c.set(e,t);var h=rT(u(e),u(t),i,o,a,c);return c.delete(e),h;case mT:if(uu)return uu.call(e)==uu.call(t)}return!1}var _T=bT;function wT(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var _d=wT,xT=Array.isArray,Yn=xT,$T=_d,kT=Yn;function CT(e,t,n){var i=t(e);return kT(e)?i:$T(i,n(e))}var zm=CT;function ST(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var c=e[n];t(c,n,e)&&(a[o++]=c)}return a}var ET=ST;function TT(){return[]}var Fm=TT,AT=ET,IT=Fm,RT=Object.prototype,OT=RT.propertyIsEnumerable,S0=Object.getOwnPropertySymbols,LT=S0?function(e){return e==null?[]:(e=Object(e),AT(S0(e),function(t){return OT.call(e,t)}))}:IT,wd=LT;function PT(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var MT=PT;function BT(e){return e!=null&&typeof e=="object"}var ti=BT,UT=ls,DT=ti,jT="[object Arguments]";function NT(e){return DT(e)&&UT(e)==jT}var HT=NT,E0=HT,zT=ti,Wm=Object.prototype,FT=Wm.hasOwnProperty,WT=Wm.propertyIsEnumerable,ZT=E0(function(){return arguments}())?E0:function(e){return zT(e)&&FT.call(e,"callee")&&!WT.call(e,"callee")},xd=ZT,al={exports:{}};function qT(){return!1}var KT=qT;al.exports;(function(e,t){var n=Un,i=KT,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,c=a&&a.exports===o,u=c?n.Buffer:void 0,d=u?u.isBuffer:void 0,p=d||i;e.exports=p})(al,al.exports);var $d=al.exports,GT=9007199254740991,VT=/^(?:0|[1-9]\d*)$/;function QT(e,t){var n=typeof e;return t=t??GT,!!t&&(n=="number"||n!="symbol"&&VT.test(e))&&e>-1&&e%1==0&&e<t}var kd=QT,XT=9007199254740991;function YT(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=XT}var Cd=YT,JT=ls,eA=Cd,tA=ti,nA="[object Arguments]",rA="[object Array]",iA="[object Boolean]",sA="[object Date]",oA="[object Error]",aA="[object Function]",lA="[object Map]",cA="[object Number]",uA="[object Object]",dA="[object RegExp]",fA="[object Set]",hA="[object String]",pA="[object WeakMap]",gA="[object ArrayBuffer]",mA="[object DataView]",vA="[object Float32Array]",yA="[object Float64Array]",bA="[object Int8Array]",_A="[object Int16Array]",wA="[object Int32Array]",xA="[object Uint8Array]",$A="[object Uint8ClampedArray]",kA="[object Uint16Array]",CA="[object Uint32Array]",nt={};nt[vA]=nt[yA]=nt[bA]=nt[_A]=nt[wA]=nt[xA]=nt[$A]=nt[kA]=nt[CA]=!0;nt[nA]=nt[rA]=nt[gA]=nt[iA]=nt[mA]=nt[sA]=nt[oA]=nt[aA]=nt[lA]=nt[cA]=nt[uA]=nt[dA]=nt[fA]=nt[hA]=nt[pA]=!1;function SA(e){return tA(e)&&eA(e.length)&&!!nt[JT(e)]}var EA=SA;function TA(e){return function(t){return e(t)}}var Sd=TA,ll={exports:{}};ll.exports;(function(e,t){var n=yg,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||c&&c.binding&&c.binding("util")}catch{}}();e.exports=u})(ll,ll.exports);var Ed=ll.exports,AA=EA,IA=Sd,T0=Ed,A0=T0&&T0.isTypedArray,RA=A0?IA(A0):AA,Zm=RA,OA=MT,LA=xd,PA=Yn,MA=$d,BA=kd,UA=Zm,DA=Object.prototype,jA=DA.hasOwnProperty;function NA(e,t){var n=PA(e),i=!n&&LA(e),o=!n&&!i&&MA(e),a=!n&&!i&&!o&&UA(e),c=n||i||o||a,u=c?OA(e.length,String):[],d=u.length;for(var p in e)(t||jA.call(e,p))&&!(c&&(p=="length"||o&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||BA(p,d)))&&u.push(p);return u}var qm=NA,HA=Object.prototype;function zA(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||HA;return e===n}var Td=zA;function FA(e,t){return function(n){return e(t(n))}}var Km=FA,WA=Km,ZA=WA(Object.keys,Object),qA=ZA,KA=Td,GA=qA,VA=Object.prototype,QA=VA.hasOwnProperty;function XA(e){if(!KA(e))return GA(e);var t=[];for(var n in Object(e))QA.call(e,n)&&n!="constructor"&&t.push(n);return t}var YA=XA,JA=_g,eI=Cd;function tI(e){return e!=null&&eI(e.length)&&!JA(e)}var Gm=tI,nI=qm,rI=YA,iI=Gm;function sI(e){return iI(e)?nI(e):rI(e)}var Ll=sI,oI=zm,aI=wd,lI=Ll;function cI(e){return oI(e,lI,aI)}var Vm=cI,I0=Vm,uI=1,dI=Object.prototype,fI=dI.hasOwnProperty;function hI(e,t,n,i,o,a){var c=n&uI,u=I0(e),d=u.length,p=I0(t),h=p.length;if(d!=h&&!c)return!1;for(var m=d;m--;){var v=u[m];if(!(c?v in t:fI.call(t,v)))return!1}var _=a.get(e),x=a.get(t);if(_&&x)return _==t&&x==e;var k=!0;a.set(e,t),a.set(t,e);for(var S=c;++m<d;){v=u[m];var O=e[v],U=t[v];if(i)var M=c?i(U,O,v,t,e,a):i(O,U,v,e,t,a);if(!(M===void 0?O===U||o(O,U,n,i,a):M)){k=!1;break}S||(S=v=="constructor")}if(k&&!S){var R=e.constructor,T=t.constructor;R!=T&&"constructor"in e&&"constructor"in t&&!(typeof R=="function"&&R instanceof R&&typeof T=="function"&&T instanceof T)&&(k=!1)}return a.delete(e),a.delete(t),k}var pI=hI,gI=wi,mI=Un,vI=gI(mI,"DataView"),yI=vI,bI=wi,_I=Un,wI=bI(_I,"Promise"),xI=wI,$I=wi,kI=Un,CI=$I(kI,"WeakMap"),SI=CI,Bu=yI,Uu=Zu,Du=xI,ju=kg,Nu=SI,Qm=ls,ys=wg,R0="[object Map]",EI="[object Object]",O0="[object Promise]",L0="[object Set]",P0="[object WeakMap]",M0="[object DataView]",TI=ys(Bu),AI=ys(Uu),II=ys(Du),RI=ys(ju),OI=ys(Nu),di=Qm;(Bu&&di(new Bu(new ArrayBuffer(1)))!=M0||Uu&&di(new Uu)!=R0||Du&&di(Du.resolve())!=O0||ju&&di(new ju)!=L0||Nu&&di(new Nu)!=P0)&&(di=function(e){var t=Qm(e),n=t==EI?e.constructor:void 0,i=n?ys(n):"";if(i)switch(i){case TI:return M0;case AI:return R0;case II:return O0;case RI:return L0;case OI:return P0}return t});var Pl=di,du=bd,LI=Nm,PI=_T,MI=pI,B0=Pl,U0=Yn,D0=$d,BI=Zm,UI=1,j0="[object Arguments]",N0="[object Array]",Ia="[object Object]",DI=Object.prototype,H0=DI.hasOwnProperty;function jI(e,t,n,i,o,a){var c=U0(e),u=U0(t),d=c?N0:B0(e),p=u?N0:B0(t);d=d==j0?Ia:d,p=p==j0?Ia:p;var h=d==Ia,m=p==Ia,v=d==p;if(v&&D0(e)){if(!D0(t))return!1;c=!0,h=!1}if(v&&!h)return a||(a=new du),c||BI(e)?LI(e,t,n,i,o,a):PI(e,t,d,n,i,o,a);if(!(n&UI)){var _=h&&H0.call(e,"__wrapped__"),x=m&&H0.call(t,"__wrapped__");if(_||x){var k=_?e.value():e,S=x?t.value():t;return a||(a=new du),o(k,S,n,i,a)}}return v?(a||(a=new du),MI(e,t,n,i,o,a)):!1}var NI=jI,HI=NI,z0=ti;function Xm(e,t,n,i,o){return e===t?!0:e==null||t==null||!z0(e)&&!z0(t)?e!==e&&t!==t:HI(e,t,n,i,Xm,o)}var Ym=Xm,zI=bd,FI=Ym,WI=1,ZI=2;function qI(e,t,n,i){var o=n.length,a=o,c=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],p=e[d],h=u[1];if(c&&u[2]){if(p===void 0&&!(d in e))return!1}else{var m=new zI;if(i)var v=i(p,h,d,e,t,m);if(!(v===void 0?FI(h,p,WI|ZI,i,m):v))return!1}}return!0}var KI=qI,GI=Vn;function VI(e){return e===e&&!GI(e)}var Jm=VI,QI=Jm,XI=Ll;function YI(e){for(var t=XI(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,QI(o)]}return t}var JI=YI;function eR(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var ev=eR,tR=KI,nR=JI,rR=ev;function iR(e){var t=nR(e);return t.length==1&&t[0][2]?rR(t[0][0],t[0][1]):function(n){return n===e||tR(n,e,t)}}var sR=iR,oR=ls,aR=ti,lR="[object Symbol]";function cR(e){return typeof e=="symbol"||aR(e)&&oR(e)==lR}var Ml=cR,uR=Yn,dR=Ml,fR=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hR=/^\w*$/;function pR(e,t){if(uR(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||dR(e)?!0:hR.test(e)||!fR.test(e)||t!=null&&e in Object(t)}var Ad=pR,tv=qu,gR="Expected a function";function Id(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(gR);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var c=e.apply(this,i);return n.cache=a.set(o,c)||a,c};return n.cache=new(Id.Cache||tv),n}Id.Cache=tv;var mR=Id,vR=mR,yR=500;function bR(e){var t=vR(e,function(i){return n.size===yR&&n.clear(),i}),n=t.cache;return t}var _R=bR,wR=_R,xR=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$R=/\\(\\)?/g,kR=wR(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(xR,function(n,i,o,a){t.push(o?a.replace($R,"$1"):i||n)}),t}),CR=kR;function SR(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Rd=SR,F0=as,ER=Rd,TR=Yn,AR=Ml,IR=1/0,W0=F0?F0.prototype:void 0,Z0=W0?W0.toString:void 0;function nv(e){if(typeof e=="string")return e;if(TR(e))return ER(e,nv)+"";if(AR(e))return Z0?Z0.call(e):"";var t=e+"";return t=="0"&&1/e==-IR?"-0":t}var RR=nv,OR=RR;function LR(e){return e==null?"":OR(e)}var PR=LR,MR=Yn,BR=Ad,UR=CR,DR=PR;function jR(e,t){return MR(e)?e:BR(e,t)?[e]:UR(DR(e))}var bs=jR,NR=Ml,HR=1/0;function zR(e){if(typeof e=="string"||NR(e))return e;var t=e+"";return t=="0"&&1/e==-HR?"-0":t}var _s=zR,FR=bs,WR=_s;function ZR(e,t){t=FR(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[WR(t[n++])];return n&&n==i?e:void 0}var Bl=ZR,qR=Bl;function KR(e,t,n){var i=e==null?void 0:qR(e,t);return i===void 0?n:i}var GR=KR;function VR(e,t){return e!=null&&t in Object(e)}var QR=VR,XR=bs,YR=xd,JR=Yn,eO=kd,tO=Cd,nO=_s;function rO(e,t,n){t=XR(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var c=nO(t[i]);if(!(a=e!=null&&n(e,c)))break;e=e[c]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&tO(o)&&eO(c,o)&&(JR(e)||YR(e)))}var iO=rO,sO=QR,oO=iO;function aO(e,t){return e!=null&&oO(e,t,sO)}var lO=aO,cO=Ym,uO=GR,dO=lO,fO=Ad,hO=Jm,pO=ev,gO=_s,mO=1,vO=2;function yO(e,t){return fO(e)&&hO(t)?pO(gO(e),t):function(n){var i=uO(n,e);return i===void 0&&i===t?dO(n,e):cO(t,i,mO|vO)}}var bO=yO;function _O(e){return e}var rv=_O;function wO(e){return function(t){return t?.[e]}}var xO=wO,$O=Bl;function kO(e){return function(t){return $O(t,e)}}var CO=kO,SO=xO,EO=CO,TO=Ad,AO=_s;function IO(e){return TO(e)?SO(AO(e)):EO(e)}var RO=IO,OO=sR,LO=bO,PO=rv,MO=Yn,BO=RO;function UO(e){return typeof e=="function"?e:e==null?PO:typeof e=="object"?MO(e)?LO(e[0],e[1]):OO(e):BO(e)}var Od=UO,DO=Od,jO=Cg;function NO(e,t){return e&&e.length?jO(e,DO(t)):[]}var HO=NO;const zO=go(HO),fu=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Ba=0;const{setActiveSubscriptions:FO}=X1();setInterval(()=>{FO(Ba)},1e3);const _r=e=>{const{config:t,shouldMuteEvent:n}=ze(),i=El(),[o,a]=$e([]);hr(ul(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(u=>u.filter(d=>!n(d)))},{defer:!0}));const c=()=>{const u=e();if(u==null)return;const{relayUrls:d,filters:p,options:h,onEvent:m,onEOSE:v,continuous:_=!0}=u,x=u.limit??50,k=i().sub(d,p,h);let S=!0;Ba+=1;let O=!1,U=!1;const M=[];k.on("event",T=>{m?.(T),!(u.clientEventFilter!=null&&!u.clientEventFilter(T))&&(U?a(L=>{const F=fu([T,...L].slice(0,x)),Z=zO(F,oe=>oe.id);return Z.length!==F.length&&console.warn("duplicated event",T),Z}):(O=!0,M.push(T)))}),k.on("eose",()=>{v?.(),U=!0,a(fu(M)),_||(k.unsub(),S&&(S=!1,Ba-=1))});const R=setInterval(()=>{if(U){clearInterval(R);return}O&&(O=!1,a(fu(M)))},100);Xr(()=>{k.unsub(),S&&(S=!1,Ba-=1),clearInterval(R)})};return hr(()=>{c()}),{events:o}},WO=e=>{const t=()=>_n(e),n=[e.id],i=t().rootEvent()?.id;i!=null&&n.push(i);const o=t().replyingToEvent()?.id;return o!=null&&n.push(o),Fr(n)},ZO=e=>{const{config:t}=ze(),{events:n}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:WO(e.event),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return w(ms,{get events(){return[...n()].reverse()}})},qO=e=>w(Ln,{get children(){return w(Fe,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>w(ZO,{get event(){return t.event}})})}}),KO=P('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),GO=P('<div class="shrink-0 border-b">'),VO=P('<div class="flex flex-col overflow-y-scroll scroll-smooth">'),QO=P('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="flex h-full flex-col overflow-y-scroll scroll-smooth">'),ws=e=>{let t;const n=tE(),i=()=>e.width??"medium";return Mu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Mu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),w(Bm.Provider,{value:n,get children(){const o=KO(),a=t;return typeof a=="function"?Wn(a,o):t=o,A(o,w(ue,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=GO();return A(c,()=>e.header),c})(),(()=>{const c=VO();return A(c,()=>e.children),c})()]},children:c=>(()=>{const u=QO(),d=u.firstChild,p=d.firstChild,h=p.firstChild,m=d.nextSibling;return p.$$click=()=>n?.clearTimeline(),A(h,w(vg,{})),A(m,w(qO,{timelineContent:c})),u})()})),Pe(c=>Ws(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},c)),o}})};vt(["click"]);const XO=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),YO=(e={})=>(()=>{const t=XO();return rt(t,e,!0,!0),t})(),JO=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),eL=(e={})=>(()=>{const t=JO();return rt(t,e,!0,!0),t})(),tL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),nL=(e={})=>(()=>{const t=tL();return rt(t,e,!0,!0),t})(),rL=P('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),iL=P('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),sL=P('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),oL=e=>(()=>{const t=rL(),n=t.firstChild,i=n.nextSibling;return A(n,()=>e.title),A(i,()=>e.children),t})(),xs=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=ze(),o=ko(),a=u=>{t({...e.column,width:u})},c=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=sL(),d=u.firstChild,p=d.firstChild,h=p.firstChild,m=p.nextSibling,v=m.firstChild,_=m.nextSibling,x=_.nextSibling,k=x.firstChild;return A(u,w(oL,{title:"カラム幅",get children(){const S=iL(),O=S.firstChild,U=O.nextSibling,M=U.nextSibling,R=M.nextSibling;return O.$$click=()=>a("widest"),U.$$click=()=>a("wide"),M.$$click=()=>a("medium"),R.$$click=()=>a("narrow"),S}}),d),p.$$click=()=>c(e.columnIndex-1),A(h,w(YO,{})),m.$$click=()=>c(e.columnIndex+1),A(v,w(eL,{})),x.$$click=()=>n(e.column.id),A(k,w(nL,{})),u})()};vt(["click"]);const Qr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>Qr(n)(t));case"OR":return e.children.some(n=>Qr(n)(t));case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},aL=e=>{const{config:t,removeColumn:n}=ze(),{followingPubkeys:i}=Tu(()=>({pubkey:e.column.pubkey})),{events:o}=_r(()=>{const a=w4.uniq([...i()]);return a.length===0?null:{relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:ur()-4*60*60}],clientEventFilter:c=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(c.content)}});return hr(()=>{console.log("home",o())}),wn(()=>console.log("home timeline mounted")),Xr(()=>console.log("home timeline unmounted")),w(ws,{get header(){return w(mo,{get name(){return e.column.name??"ホーム"},get icon(){return w(gg,{})},settings:()=>w(xs,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(ms,{get events(){return o()}})}})},lL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),iv=(e={})=>(()=>{const t=lL();return rt(t,e,!0,!0),t})(),cL=P('<span class="h-4 w-4 pt-[1px] text-rose-400">'),uL=P('<img alt="icon" class="rounded">'),dL=P('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),fL=P('<div class="notification-event py-1">'),hL=P('<div class="truncate">読み込み中 '),pL=e=>{const{shouldMuteEvent:t}=ze(),{showProfile:n}=ei(),i=()=>_n(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=gs(()=>({pubkey:e.event.pubkey})),{event:c,query:u}=J1(()=>sn([o()])(([p])=>({eventId:p}))),d=()=>u.isSuccess&&c()==null;return w(ue,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const p=dL(),h=p.firstChild,m=h.nextSibling,v=m.firstChild,_=v.nextSibling,x=_.firstChild;return A(h,w(Ln,{get fallback(){return e.event.content},get children(){return w(Fe,{get when(){return e.event.content==="+"},get children(){const k=cL();return A(k,w(hd,{})),k}})}})),A(v,w(ue,{get when(){return a()?.picture!=null},get children(){const k=uL();return Pe(()=>At(k,"src",a()?.picture)),k}})),x.$$click=()=>n(e.event.pubkey),A(x,w(Al,{get pubkey(){return e.event.pubkey}})),p})(),(()=>{const p=fL();return A(p,w(ue,{get when(){return c()},get fallback(){return(()=>{const h=hL();return h.firstChild,A(h,o,null),h})()},keyed:!0,children:h=>w(Um,{event:h})})),p})()]}})};vt(["click"]);const gL=P("<div>unknown event"),sv=e=>w(Kt,{get each(){return e.events},children:t=>w(Ln,{get fallback(){return gL()},get children(){return[w(Fe,{get when(){return t.kind===wt.Text},get children(){return w(Ra,{get children(){return w(Dm,{event:t})}})}}),w(Fe,{get when(){return t.kind===wt.Reaction},get children(){return w(Ra,{get children(){return w(pL,{event:t})}})}}),w(Fe,{get when(){return t.kind===6},get children(){return w(Ra,{get children(){return w(rm,{event:t})}})}})]}})}),mL=e=>{const{config:t,removeColumn:n}=ze(),{events:i}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return w(ws,{get header(){return w(mo,{get name(){return e.column.name??"通知"},get icon(){return w(iv,{})},settings:()=>w(xs,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(sv,{get events(){return i()}})}})},vL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),ov=(e={})=>(()=>{const t=vL();return rt(t,e,!0,!0),t})(),yL=e=>{const{config:t,removeColumn:n}=ze(),{events:i}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return w(ws,{get header(){return w(mo,{get name(){return e.column.name??"投稿"},get icon(){return w(ov,{})},settings:()=>w(xs,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(ms,{get events(){return i()}})}})},bL=e=>{const{config:t,removeColumn:n}=ze(),{events:i}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return w(ws,{get header(){return w(mo,{get name(){return e.column.name??"リアクション"},get icon(){return w(fd,{})},settings:()=>w(xs,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(sv,{get events(){return i()}})}})},_L=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Ld=(e={})=>(()=>{const t=_L();return rt(t,e,!0,!0),t})(),wL=e=>{const{removeColumn:t}=ze(),{events:n}=_r(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:ur()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(i.content)}));return w(ws,{get header(){return w(mo,{get name(){return e.column.name??"リレー"},get icon(){return w(Ld,{})},settings:()=>w(xs,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(ms,{get events(){return n()}})}})},xL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),av=(e={})=>(()=>{const t=xL();return rt(t,e,!0,!0),t})(),$L=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),kL=e=>{const[t,n]=$e(!1),[i,o]=$e(""),{saveColumn:a}=ze(),c=()=>n(m=>!m),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},p=m=>{o(m.currentTarget.value)},h=m=>{m.preventDefault(),u()};return wn(()=>{o(e.column.query)}),(()=>{const m=$L(),v=m.firstChild,_=v.firstChild,x=_.firstChild,k=_.nextSibling,S=k.firstChild,O=k.nextSibling;return A(x,w(av,{})),k.addEventListener("submit",h),S.addEventListener("blur",d),S.addEventListener("change",p),O.$$click=()=>c(),A(O,w(mg,{})),A(m,w(ue,{get when(){return t()},get children(){return e.settings()}}),null),Pe(()=>S.value=i()),m})()},CL=e=>{const{removeColumn:t}=ze(),{events:n}=_r(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:P9,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}});return w(ws,{get header(){return w(kL,{get column(){return e.column},settings:()=>w(xs,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(ms,{get events(){return n()}})}})};vt(["click"]);const SL=P('<div class="flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),EL=()=>{const{config:e}=ze();return(()=>{const t=SL();return A(t,w(Kt,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return w(Ln,{get children(){return[w(Fe,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:c=>w(aL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),w(Fe,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:c=>w(mL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),w(Fe,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:c=>w(yL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),w(Fe,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:c=>w(bL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),w(Fe,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:c=>w(wL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),w(Fe,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:c=>w(CL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},TL=P('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),AL=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=TL();i.$$click=n;const o=t;return typeof o=="function"?Wn(o,i):t=i,A(i,()=>e.children),i})()};vt(["click"]);const IL=P('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),Co=e=>w(AL,{onClose:()=>e.onClose?.(),get children(){const t=IL(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),A(i,w(ue,{get when(){return e?.closeButton},get fallback(){return w(po,{})},keyed:!0,children:a=>a()})),A(o,()=>e.children),t}});vt(["click"]);const RL=P('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),OL=P('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),LL=P('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),PL=async()=>{const t=await(await fetch(zu("packageInfo.json"))).text();return JSON.parse(t)},ML=e=>{const[t]=hg(PL);return w(Co,{get onClose(){return e.onClose},get children(){const n=RL(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;u.firstChild;const d=i.nextSibling,p=d.nextSibling,h=p.nextSibling,m=h.nextSibling,v=m.nextSibling,_=v.nextSibling,x=_.nextSibling;return x.nextSibling,A(u,()=>t()?.self?.version,null),A(x,()=>t()?.self.licenseText),A(n,w(Kt,{get each(){return t()?.packages??[]},fallback:"取得中",children:k=>[(()=>{const S=OL(),O=S.firstChild,U=O.nextSibling,M=U.nextSibling,R=M.nextSibling;return R.nextSibling,A(S,()=>k.name,O),A(S,()=>k.version,U),A(S,()=>k.licenseSpdx,R),S})(),(()=>{const S=LL();return A(S,()=>k.licenseText),S})()]}),null),Pe(()=>At(o,"src",zu("images/rabbit_app_256.png"))),n}})},BL=P('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),UL=e=>{const t=br(),{saveColumn:n}=ze(),i=ko(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(m=>console.error(m))},a=()=>{sn([t()])(([m])=>{n(B1({pubkey:m}))}),o()},c=()=>{sn([t()])(([m])=>{n(U1({pubkey:m}))}),o()},u=()=>{n(D1()),o()},d=()=>{n(dd({query:""})),o()},p=()=>{sn([t()])(([m])=>{n(j1({pubkey:m}))}),o()},h=()=>{sn([t()])(([m])=>{n(N1({pubkey:m}))}),o()};return w(Co,{get onClose(){return e.onClose},get children(){const m=BL(),v=m.firstChild,_=v.firstChild,x=v.nextSibling,k=x.firstChild,S=x.nextSibling,O=S.firstChild,U=S.nextSibling,M=U.firstChild,R=U.nextSibling,T=R.firstChild,L=R.nextSibling,F=L.firstChild;return v.$$click=()=>a(),A(_,w(gg,{})),x.$$click=()=>c(),A(k,w(iv,{})),S.$$click=()=>u(),A(O,w(Ld,{})),U.$$click=()=>d(),A(M,w(av,{})),R.$$click=()=>p(),A(T,w(ov,{})),L.$$click=()=>h(),A(F,w(fd,{})),m}})};vt(["click"]);const DL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),jL=(e={})=>(()=>{const t=DL();return rt(t,e,!0,!0),t})(),NL=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),HL=(e={})=>(()=>{const t=NL();return rt(t,e,!0,!0),t})(),zL=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),FL=(e={})=>(()=>{const t=zL();return rt(t,e,!0,!0),t})();function WL(e){const{config:t}=ze(),n=Ke(e),{events:i}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[wt.Contacts],"#p":[n().pubkey]}],limit:1/0,continuous:!0})),o=()=>Fr(i()?.map(c=>c.pubkey));return{followersPubkeys:o,count:()=>o().length}}const ZL=e=>{const t=Ke(e),n=os(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return Promise.resolve(null);const{nip05:u}=c;return O1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},qL=P('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),KL=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),GL=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),VL=P('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),QL=P('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),XL=P('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),YL=P('<div class="shrink-0 text-xs">読み込み中'),JL=P('<div class="shrink-0 text-xs">フォローされています'),eP=P('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),tP=P('<div class="truncate text-xl font-bold">'),nP=P('<div class="truncate text-xs">@'),rP=P('<span class="inline-block h-3 w-3">'),iP=P('<span class="inline-block h-4 w-4 text-blue-400">'),sP=P('<div class="flex items-center text-xs">'),oP=P('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),aP=P('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),lP=P('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),cP=P('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),uP=P('<ul class="border-t px-5 py-2 text-xs">'),dP=P('<ul class="border-t p-1">'),fP=P('<div class="h-12 shrink-0">'),hP=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),pP=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),gP=P('<span class="inline-block h-4 w-4 text-rose-500">'),mP=P('<span class="text-sm">読み込み中'),vP=P('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),yP=P('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),bP=e=>{const{count:t}=WL(()=>({pubkey:e.pubkey}));return Ke(t)},_P=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=ze(),a=Ol(),c=br(),{showProfileEdit:u}=ei(),d=Ke(()=>Tl(e.pubkey)),[p,h]=$e(!1),[m,v]=$e(!1),{profile:_,query:x}=gs(()=>({pubkey:e.pubkey})),{verification:k,query:S}=ZL(()=>sn([_()?.nip05])(([H])=>({nip05:H}))),O=()=>{const H=_()?.nip05;if(H==null)return null;const[se,le]=H.split("@");return le==null?null:se==="_"?{domain:le,ident:le}:{user:se,domain:le,ident:H}},U=()=>k()?.pubkey===e.pubkey,M=()=>o(e.pubkey),{followingPubkeys:R,invalidateFollowings:T,query:L}=Tu(()=>sn([c()])(([H])=>({pubkey:H}))),F=()=>R().includes(e.pubkey),{followingPubkeys:Z,query:oe}=Tu(()=>({pubkey:e.pubkey})),G=()=>{const H=c();return H!=null&&Z().includes(H)},re=pi({mutationKey:["updateContacts"],mutationFn:(...H)=>a.updateContacts(...H).then(se=>Promise.allSettled(se.map(Jr(5e3)))),onSuccess:H=>{const se=H.filter(Qe=>Qe.status==="fulfilled").length,le=H.length-se;se===H.length?console.log("succeeded to update contacts"):se>0?console.log(`succeeded to update contacts for ${se} relays but failed for ${le} relays`):console.error("failed to update contacts")},onError:H=>{console.error("failed to update contacts: ",H)},onSettled:()=>{T().then(()=>L.refetch()).catch(H=>console.error("failed to refetch contacts",H))}}),q=()=>{const H=c();H!=null&&L.isFetched&&re.mutate({relayUrls:t().relayUrls,pubkey:H,content:L.data?.content??"",followingPubkeys:Fr([...R(),e.pubkey])})},Q=()=>{const H=c();H!=null&&L.isFetched&&window.confirm("本当にフォロー解除しますか？")&&re.mutate({relayUrls:t().relayUrls,pubkey:H,content:L.data?.content??"",followingPubkeys:R().filter(se=>se!==e.pubkey)})},ie=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(H=>window.alert(H))}},{content:()=>M()?"ミュート解除":"ミュート",onSelect:()=>{M()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===c(),content:()=>F()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{F()?Q():q()}}],{events:Ne}=_r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:ur()}],continuous:!1}));return w(Co,{onClose:()=>e.onClose?.(),get children(){return[w(ue,{get when(){return x.isFetched},get fallback(){return"loading"},get children(){return[w(ue,{get when(){return _()?.banner},get fallback(){return fP()},keyed:!0,children:H=>(()=>{const se=hP(),le=se.firstChild;return At(le,"src",H),se})()}),(()=>{const H=eP(),se=H.firstChild,le=se.firstChild,Qe=se.nextSibling,Ue=Qe.firstChild;return A(le,w(ue,{get when(){return _()?.picture},keyed:!0,children:ee=>(()=>{const Oe=pP();return At(Oe,"src",ee),Oe})()})),A(Ue,w(Ln,{get children(){return[w(Fe,{get when(){return e.pubkey===c()},get children(){const ee=qL();return ee.$$click=()=>u(),ee}}),w(Fe,{get when(){return L.isLoading||L.isFetching},get children(){return KL()}}),w(Fe,{get when(){return re.isLoading},get children(){return GL()}}),w(Fe,{get when(){return F()},get children(){const ee=VL();return ee.$$click=()=>Q(),ee.addEventListener("mouseleave",()=>h(!1)),ee.addEventListener("mouseenter",()=>h(!0)),A(ee,w(ue,{get when(){return!p()},fallback:"フォロー解除",children:"フォロー中"})),Pe(()=>ee.disabled=re.isLoading),ee}}),w(Fe,{get when(){return!F()},get children(){const ee=QL();return ee.$$click=()=>q(),Pe(()=>ee.disabled=re.isLoading),ee}})]}}),null),A(Ue,w(om,{menu:ie,get children(){const ee=XL();return A(ee,w(im,{})),ee}}),null),A(Qe,w(Ln,{get children(){return[w(Fe,{get when(){return oe.isLoading},get children(){return YL()}}),w(Fe,{get when(){return G()},get children(){return JL()}})]}}),null),H})(),(()=>{const H=oP(),se=H.firstChild,le=se.firstChild,Qe=le.nextSibling,Ue=Qe.firstChild;return A(se,w(ue,{get when(){return(_()?.display_name?.length??0)>0},get children(){const ee=tP();return A(ee,()=>_()?.display_name),ee}}),le),A(le,w(ue,{get when(){return(_()?.name?.length??0)>0},get children(){const ee=nP();return ee.firstChild,A(ee,()=>_()?.name,null),ee}}),null),A(le,w(ue,{get when(){return(_()?.nip05?.length??0)>0},get children(){const ee=sP();return A(ee,()=>O()?.ident,null),A(ee,w(Ln,{get fallback(){return(()=>{const Oe=gP();return A(Oe,w(FL,{})),Oe})()},get children(){return[w(Fe,{get when(){return S.isLoading},get children(){const Oe=rP();return A(Oe,w(jL,{})),Oe}}),w(Fe,{get when(){return U()},get children(){const Oe=iP();return A(Oe,w(HL,{})),Oe}})]}}),null),ee}}),null),A(Ue,d),H})(),w(ue,{get when(){return(_()?.about??"").length>0},get children(){const H=aP();return A(H,()=>_()?.about),H}}),(()=>{const H=cP(),se=H.firstChild,le=se.firstChild,Qe=le.nextSibling;return A(Qe,w(ue,{get when(){return oe.isFetched},get fallback(){return mP()},get children(){return Z().length}})),A(H,w(ue,{get when(){return!t().hideCount},get children(){const Ue=lP(),ee=Ue.firstChild,Oe=ee.nextSibling;return A(Oe,w(ue,{get when(){return m()},get fallback(){return(()=>{const ht=vP();return ht.$$click=()=>v(!0),ht})()},keyed:!0,get children(){return w(bP,{get pubkey(){return e.pubkey}})}})),Ue}}),null),H})(),w(ue,{get when(){return(_()?.website??"").length>0},get children(){const H=uP();return A(H,w(ue,{get when(){return _()?.website},keyed:!0,children:se=>(()=>{const le=yP(),Qe=le.firstChild;return A(Qe,w(Ld,{})),A(le,w(vd,{class:"text-blue-500 underline",href:se}),null),le})()})),H}})]}}),(()=>{const H=dP();return A(H,w(ms,{get events(){return Ne()}})),H})()]}})};vt(["click"]);function wP(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var xP=wP,$P=wi,kP=function(){try{var e=$P(Object,"defineProperty");return e({},"",{}),e}catch{}}(),lv=kP,q0=lv;function CP(e,t,n){t=="__proto__"&&q0?q0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var cv=CP,SP=cv,EP=Wu,TP=Object.prototype,AP=TP.hasOwnProperty;function IP(e,t,n){var i=e[t];(!(AP.call(e,t)&&EP(i,n))||n===void 0&&!(t in e))&&SP(e,t,n)}var Pd=IP,RP=Pd,OP=cv;function LP(e,t,n,i){var o=!n;n||(n={});for(var a=-1,c=t.length;++a<c;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?OP(n,u,d):RP(n,u,d)}return n}var So=LP,PP=So,MP=Ll;function BP(e,t){return e&&PP(t,MP(t),e)}var UP=BP;function DP(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var jP=DP,NP=Vn,HP=Td,zP=jP,FP=Object.prototype,WP=FP.hasOwnProperty;function ZP(e){if(!NP(e))return zP(e);var t=HP(e),n=[];for(var i in e)i=="constructor"&&(t||!WP.call(e,i))||n.push(i);return n}var qP=ZP,KP=qm,GP=qP,VP=Gm;function QP(e){return VP(e)?KP(e,!0):GP(e)}var Md=QP,XP=So,YP=Md;function JP(e,t){return e&&XP(t,YP(t),e)}var eM=JP,cl={exports:{}};cl.exports;(function(e,t){var n=Un,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a?n.Buffer:void 0,u=c?c.allocUnsafe:void 0;function d(p,h){if(h)return p.slice();var m=p.length,v=u?u(m):new p.constructor(m);return p.copy(v),v}e.exports=d})(cl,cl.exports);var tM=cl.exports;function nM(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var rM=nM,iM=So,sM=wd;function oM(e,t){return iM(e,sM(e),t)}var aM=oM,lM=Km,cM=lM(Object.getPrototypeOf,Object),Bd=cM,uM=_d,dM=Bd,fM=wd,hM=Fm,pM=Object.getOwnPropertySymbols,gM=pM?function(e){for(var t=[];e;)uM(t,fM(e)),e=dM(e);return t}:hM,uv=gM,mM=So,vM=uv;function yM(e,t){return mM(e,vM(e),t)}var bM=yM,_M=zm,wM=uv,xM=Md;function $M(e){return _M(e,xM,wM)}var Ud=$M,kM=Object.prototype,CM=kM.hasOwnProperty;function SM(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&CM.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var EM=SM,K0=Hm;function TM(e){var t=new e.constructor(e.byteLength);return new K0(t).set(new K0(e)),t}var Dd=TM,AM=Dd;function IM(e,t){var n=t?AM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var RM=IM,OM=/\w*$/;function LM(e){var t=new e.constructor(e.source,OM.exec(e));return t.lastIndex=e.lastIndex,t}var PM=LM,G0=as,V0=G0?G0.prototype:void 0,Q0=V0?V0.valueOf:void 0;function MM(e){return Q0?Object(Q0.call(e)):{}}var BM=MM,UM=Dd;function DM(e,t){var n=t?UM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var jM=DM,NM=Dd,HM=RM,zM=PM,FM=BM,WM=jM,ZM="[object Boolean]",qM="[object Date]",KM="[object Map]",GM="[object Number]",VM="[object RegExp]",QM="[object Set]",XM="[object String]",YM="[object Symbol]",JM="[object ArrayBuffer]",eB="[object DataView]",tB="[object Float32Array]",nB="[object Float64Array]",rB="[object Int8Array]",iB="[object Int16Array]",sB="[object Int32Array]",oB="[object Uint8Array]",aB="[object Uint8ClampedArray]",lB="[object Uint16Array]",cB="[object Uint32Array]";function uB(e,t,n){var i=e.constructor;switch(t){case JM:return NM(e);case ZM:case qM:return new i(+e);case eB:return HM(e,n);case tB:case nB:case rB:case iB:case sB:case oB:case aB:case lB:case cB:return WM(e,n);case KM:return new i;case GM:case XM:return new i(e);case VM:return zM(e);case QM:return new i;case YM:return FM(e)}}var dB=uB,fB=Vn,X0=Object.create,hB=function(){function e(){}return function(t){if(!fB(t))return{};if(X0)return X0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),pB=hB,gB=pB,mB=Bd,vB=Td;function yB(e){return typeof e.constructor=="function"&&!vB(e)?gB(mB(e)):{}}var bB=yB,_B=Pl,wB=ti,xB="[object Map]";function $B(e){return wB(e)&&_B(e)==xB}var kB=$B,CB=kB,SB=Sd,Y0=Ed,J0=Y0&&Y0.isMap,EB=J0?SB(J0):CB,TB=EB,AB=Pl,IB=ti,RB="[object Set]";function OB(e){return IB(e)&&AB(e)==RB}var LB=OB,PB=LB,MB=Sd,eg=Ed,tg=eg&&eg.isSet,BB=tg?MB(tg):PB,UB=BB,DB=bd,jB=xP,NB=Pd,HB=UP,zB=eM,FB=tM,WB=rM,ZB=aM,qB=bM,KB=Vm,GB=Ud,VB=Pl,QB=EM,XB=dB,YB=bB,JB=Yn,eU=$d,tU=TB,nU=Vn,rU=UB,iU=Ll,sU=Md,oU=1,aU=2,lU=4,dv="[object Arguments]",cU="[object Array]",uU="[object Boolean]",dU="[object Date]",fU="[object Error]",fv="[object Function]",hU="[object GeneratorFunction]",pU="[object Map]",gU="[object Number]",hv="[object Object]",mU="[object RegExp]",vU="[object Set]",yU="[object String]",bU="[object Symbol]",_U="[object WeakMap]",wU="[object ArrayBuffer]",xU="[object DataView]",$U="[object Float32Array]",kU="[object Float64Array]",CU="[object Int8Array]",SU="[object Int16Array]",EU="[object Int32Array]",TU="[object Uint8Array]",AU="[object Uint8ClampedArray]",IU="[object Uint16Array]",RU="[object Uint32Array]",et={};et[dv]=et[cU]=et[wU]=et[xU]=et[uU]=et[dU]=et[$U]=et[kU]=et[CU]=et[SU]=et[EU]=et[pU]=et[gU]=et[hv]=et[mU]=et[vU]=et[yU]=et[bU]=et[TU]=et[AU]=et[IU]=et[RU]=!0;et[fU]=et[fv]=et[_U]=!1;function Ua(e,t,n,i,o,a){var c,u=t&oU,d=t&aU,p=t&lU;if(n&&(c=o?n(e,i,o,a):n(e)),c!==void 0)return c;if(!nU(e))return e;var h=JB(e);if(h){if(c=QB(e),!u)return WB(e,c)}else{var m=VB(e),v=m==fv||m==hU;if(eU(e))return FB(e,u);if(m==hv||m==dv||v&&!o){if(c=d||v?{}:YB(e),!u)return d?qB(e,zB(c,e)):ZB(e,HB(c,e))}else{if(!et[m])return o?e:{};c=XB(e,m,u)}}a||(a=new DB);var _=a.get(e);if(_)return _;a.set(e,c),rU(e)?e.forEach(function(S){c.add(Ua(S,t,n,S,e,a))}):tU(e)&&e.forEach(function(S,O){c.set(O,Ua(S,t,n,O,e,a))});var x=p?d?GB:KB:d?sU:iU,k=h?void 0:x(e);return jB(k||e,function(S,O){k&&(O=S,S=e[O]),NB(c,O,Ua(S,t,n,O,e,a))}),c}var OU=Ua;function LU(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var PU=LU;function MU(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var BU=MU,UU=Bl,DU=BU;function jU(e,t){return t.length<2?e:UU(e,DU(t,0,-1))}var NU=jU,HU=bs,zU=PU,FU=NU,WU=_s;function ZU(e,t){return t=HU(t,e),e=FU(e,t),e==null||delete e[WU(zU(t))]}var qU=ZU,KU=ls,GU=Bd,VU=ti,QU="[object Object]",XU=Function.prototype,YU=Object.prototype,pv=XU.toString,JU=YU.hasOwnProperty,eD=pv.call(Object);function tD(e){if(!VU(e)||KU(e)!=QU)return!1;var t=GU(e);if(t===null)return!0;var n=JU.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&pv.call(n)==eD}var nD=tD,rD=nD;function iD(e){return rD(e)?void 0:e}var sD=iD,ng=as,oD=xd,aD=Yn,rg=ng?ng.isConcatSpreadable:void 0;function lD(e){return aD(e)||oD(e)||!!(rg&&e&&e[rg])}var cD=lD,uD=_d,dD=cD;function gv(e,t,n,i,o){var a=-1,c=e.length;for(n||(n=dD),o||(o=[]);++a<c;){var u=e[a];t>0&&n(u)?t>1?gv(u,t-1,n,i,o):uD(o,u):i||(o[o.length]=u)}return o}var fD=gv,hD=fD;function pD(e){var t=e==null?0:e.length;return t?hD(e,1):[]}var gD=pD;function mD(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var vD=mD,yD=vD,ig=Math.max;function bD(e,t,n){return t=ig(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=ig(i.length-t,0),c=Array(a);++o<a;)c[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(c),yD(e,this,u)}}var _D=bD;function wD(e){return function(){return e}}var xD=wD,$D=xD,sg=lv,kD=rv,CD=sg?function(e,t){return sg(e,"toString",{configurable:!0,enumerable:!1,value:$D(t),writable:!0})}:kD,SD=CD,ED=800,TD=16,AD=Date.now;function ID(e){var t=0,n=0;return function(){var i=AD(),o=TD-(i-n);if(n=i,o>0){if(++t>=ED)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var RD=ID,OD=SD,LD=RD,PD=LD(OD),MD=PD,BD=gD,UD=_D,DD=MD;function jD(e){return DD(UD(e,void 0,BD),e+"")}var ND=jD,HD=Rd,zD=OU,FD=qU,WD=bs,ZD=So,qD=sD,KD=ND,GD=Ud,VD=1,QD=2,XD=4,YD=KD(function(e,t){var n={};if(e==null)return n;var i=!1;t=HD(t,function(a){return a=WD(a,e),i||(i=a.length>1),a}),ZD(e,GD(e),n),i&&(n=zD(n,VD|QD|XD,qD));for(var o=t.length;o--;)FD(n,t[o]);return n}),JD=YD;const ej=go(JD);var tj="Expected a function";function nj(e){if(typeof e!="function")throw new TypeError(tj);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var rj=nj,ij=Pd,sj=bs,oj=kd,og=Vn,aj=_s;function lj(e,t,n,i){if(!og(e))return e;t=sj(t,e);for(var o=-1,a=t.length,c=a-1,u=e;u!=null&&++o<a;){var d=aj(t[o]),p=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=c){var h=u[d];p=i?i(h,d,u):void 0,p===void 0&&(p=og(h)?h:oj(t[o+1])?[]:{})}ij(u,d,p),u=u[d]}return e}var cj=lj,uj=Bl,dj=cj,fj=bs;function hj(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var c=t[i],u=uj(e,c);n(u,c)&&dj(a,fj(c,e),u)}return a}var pj=hj,gj=Rd,mj=Od,vj=pj,yj=Ud;function bj(e,t){if(e==null)return{};var n=gj(yj(e),function(i){return[i]});return t=mj(t),vj(e,n,function(i,o){return t(i,o[0])})}var _j=bj,wj=Od,xj=rj,$j=_j;function kj(e,t){return $j(e,xj(wj(t)))}var Cj=kj;const Sj=go(Cj),Ej=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),Tj=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),Aj=P('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),Ij=P('<div class="px-4 pt-4">読み込み中...'),Rj=P('<div><span class="font-bold">その他の項目</span><div>'),Oj=P('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),Lj=P('<div class="h-24 shrink-0">'),Pj=P('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),Mj="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",Bj="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",Uj=new RegExp(`^${Mj}$`),mv=new RegExp(`^${Bj}$`),Dj=e=>Uj.test(e),jj=e=>mv.test(e),Nj=e=>{const t=br(),{config:n}=ze(),[i,o]=$e(""),[a,c]=$e(""),[u,d]=$e(""),[p,h]=$e(""),[m,v]=$e(""),[_,x]=$e(""),[k,S]=$e(""),[O,U]=$e(""),{profile:M,invalidateProfile:R,query:T}=gs(()=>sn([t()])(([Q])=>({pubkey:Q}))),{updateProfile:L}=Ol(),F=pi({mutationKey:["updateProfile"],mutationFn:(...Q)=>L(...Q).then(ie=>Promise.allSettled(ie.map(Jr(1e4)))),onSuccess:Q=>{const ie=Q.filter(H=>H.status==="fulfilled").length,Ne=Q.length-ie;ie===Q.length?window.alert("更新しました"):ie>0?window.alert(`${Ne}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),R().then(()=>T.refetch()).catch(H=>console.error(H)),e.onClose()},onError:Q=>{console.error("failed to delete",Q)}}),Z=()=>T.isLoading||F.isLoading,oe=()=>Z(),G=()=>ej(M(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),re=Q=>{Q.preventDefault();const ie=t();if(ie==null)return;const Ne=Sj({picture:i(),banner:a(),name:u(),display_name:p(),about:m(),website:_(),nip05:k(),lud06:Dj(O())?O():null,lud16:jj(O())?O():null},H=>H==null||H.length===0);F.mutate({relayUrls:n().relayUrls,pubkey:ie,profile:Ne,otherProperties:G()})},q=Q=>Q.key==="Enter"&&Q.preventDefault();return wn(()=>{const Q=M();Q!=null&&(T.refetch().catch(ie=>console.error(ie)),gu(()=>{o(ie=>Q.picture??ie),c(ie=>Q.banner??ie),d(ie=>Q.name??ie),h(ie=>Q.display_name??ie),v(ie=>Q.about??ie),x(ie=>Q.website??ie),S(ie=>Q.nip05??ie),Q.lud16!=null?U(Q.lud16):Q.lud06!=null&&U(Q.lud06)}))}),w(Co,{closeButton:()=>w(vg,{}),get onClose(){return e.onClose},get children(){return[(()=>{const Q=Aj(),ie=Q.firstChild;return A(Q,w(ue,{get when(){return a().length>0},get fallback(){return Lj()},keyed:!0,get children(){const Ne=Ej(),H=Ne.firstChild;return Pe(()=>At(H,"src",a())),Ne}}),ie),A(ie,w(ue,{get when(){return i().length>0},get children(){const Ne=Tj();return Pe(()=>At(Ne,"src",i())),Ne}})),Q})(),w(ue,{get when(){return Z()},get children(){return Ij()}}),(()=>{const Q=Oj(),ie=Q.firstChild,Ne=ie.firstChild,H=Ne.firstChild,se=H.nextSibling,le=Ne.nextSibling,Qe=le.firstChild,Ue=Qe.nextSibling,ee=le.nextSibling,Oe=ee.firstChild,ht=Oe.nextSibling,wr=ht.firstChild,X=wr.nextSibling,yt=ee.nextSibling,an=yt.firstChild,Mt=an.nextSibling,ce=yt.nextSibling,xt=ce.firstChild,pt=xt.nextSibling,It=ce.nextSibling,jn=It.firstChild,it=jn.nextSibling,zt=It.nextSibling,xr=zt.firstChild,ut=xr.nextSibling,Bt=zt.nextSibling,Jn=Bt.firstChild,ye=Jn.nextSibling,He=ye.nextSibling,st=Bt.nextSibling,$t=st.firstChild,Vt=$t.nextSibling;return ie.addEventListener("submit",re),se.$$keydown=q,se.addEventListener("blur",de=>o(de.currentTarget.value)),Ue.$$keydown=q,Ue.addEventListener("blur",de=>c(de.currentTarget.value)),X.$$keydown=q,X.addEventListener("change",de=>d(de.currentTarget.value)),Mt.$$keydown=q,Mt.addEventListener("change",de=>h(de.currentTarget.value)),pt.addEventListener("change",de=>v(de.currentTarget.value)),it.$$keydown=q,it.addEventListener("change",de=>x(de.currentTarget.value)),ut.$$keydown=q,ut.addEventListener("change",de=>S(de.currentTarget.value)),He.$$keydown=q,He.addEventListener("change",de=>U(de.currentTarget.value)),A(ie,w(ue,{get when(){return Object.entries(G()).length>0},get children(){const de=Rj(),ln=de.firstChild,Me=ln.nextSibling;return A(Me,w(Kt,{get each(){return Object.entries(G())},children:([dt,xn])=>(()=>{const $n=Pj(),cn=$n.firstChild,$r=cn.nextSibling;return A(cn,dt),A($r,xn),$n})()})),de}}),st),Vt.$$click=()=>e.onClose(),A(ie,w(ue,{get when(){return F.isLoading},children:"保存中..."}),null),Pe(de=>{const ln=oe(),Me=oe(),dt=oe(),xn=oe(),$n=oe(),cn=oe(),$r=mv.source,xi=oe(),$i=oe(),ki=F.isLoading;return ln!==de._v$&&(se.disabled=de._v$=ln),Me!==de._v$2&&(Ue.disabled=de._v$2=Me),dt!==de._v$3&&(X.disabled=de._v$3=dt),xn!==de._v$4&&(Mt.disabled=de._v$4=xn),$n!==de._v$5&&(pt.disabled=de._v$5=$n),cn!==de._v$6&&(it.disabled=de._v$6=cn),$r!==de._v$7&&At(ut,"pattern",de._v$7=$r),xi!==de._v$8&&(ut.disabled=de._v$8=xi),$i!==de._v$9&&(He.disabled=de._v$9=$i),ki!==de._v$10&&($t.disabled=de._v$10=ki),de},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Pe(()=>se.value=i()),Pe(()=>Ue.value=a()),Pe(()=>X.value=u()),Pe(()=>Mt.value=p()),Pe(()=>pt.value=m()),Pe(()=>it.value=_()),Pe(()=>ut.value=k()),Pe(()=>He.value=O()),Q})()]}})};vt(["keydown","click"]);const Hj=()=>{const e=br(),{modalState:t,showProfile:n,closeModal:i}=ei();return w(ue,{get when(){return t()},keyed:!0,children:o=>w(Ln,{get children(){return[w(Fe,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>w(_P,{pubkey:a,onClose:i})}),w(Fe,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return w(Nj,{onClose:()=>sn([e()])(([a])=>{n(a)})})}}),w(Fe,{get when(){return o.type==="AddColumn"},get children(){return w(UL,{onClose:i})}}),w(Fe,{get when(){return o.type==="About"},get children(){return w(ML,{onClose:i})}})]}})})},zj=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),Fj=(e={})=>(()=>{const t=zj();return rt(t,e,!0,!0),t})(),Wj=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),ag=(e={})=>(()=>{const t=Wj();return rt(t,e,!0,!0),t})(),Zj=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),qj=(e={})=>(()=>{const t=Zj();return rt(t,e,!0,!0),t})(),Kj=P('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),Gj=P('<div class="py-2"><h3 class="font-bold">リレー</h3><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Hu=P('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Vj=P('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),Qj=P('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),Xj=P('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Yj=P('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),Jj=P('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),eN=P('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),tN=P('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),nN=P('<div class="p-4"><h2 class="flex-1 text-center text-lg font-bold">設定'),rN=()=>{const e=br(),{showProfile:t,showProfileEdit:n}=ei();return(()=>{const i=Kj(),o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;return c.$$click=()=>sn([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},iN=()=>{const{config:e,addRelay:t,removeRelay:n}=ze(),[i,o]=$e(""),a=c=>{c.preventDefault(),i().length!==0&&(t(i()),o(""))};return(()=>{const c=Gj(),u=c.firstChild,d=u.nextSibling,p=d.nextSibling,h=p.firstChild;return A(d,w(Kt,{get each(){return e().relayUrls},children:m=>(()=>{const v=Hu(),_=v.firstChild,x=_.nextSibling;return A(_,m),x.$$click=()=>n(m),A(x,w(po,{})),v})()})),p.addEventListener("submit",a),h.addEventListener("change",m=>o(m.currentTarget.value)),Pe(()=>h.value=i()),c})()},sN=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],oN=()=>{const{config:e,setConfig:t}=ze(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=Vj(),o=i.firstChild,a=o.nextSibling;return A(a,w(Kt,{each:sN,children:({id:c,name:u,example:d})=>(()=>{const p=Qj(),h=p.firstChild,m=h.nextSibling;return h.$$click=()=>n(c),A(h,u),A(m,d),Pe(v=>{const _=e().dateFormat===c,x=e().dateFormat===c,k=e().dateFormat!==c,S=e().dateFormat!==c;return _!==v._v$&&h.classList.toggle("bg-rose-300",v._v$=_),x!==v._v$2&&h.classList.toggle("text-white",v._v$2=x),k!==v._v$3&&h.classList.toggle("bg-white",v._v$3=k),S!==v._v$4&&h.classList.toggle("text-rose-300",v._v$4=S),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()})),i})()},Vs=e=>(()=>{const t=Xj();return t.$$click=n=>e.onClick(n),Pe(n=>{const i=!e.value,o=!e.value,a=!!e.value,c=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),c!==n._v$8&&t.classList.toggle("justify-end",n._v$8=c),u!==n._v$9&&At(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),aN=()=>{const{config:e,setConfig:t}=ze(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=Yj(),a=o.firstChild,c=a.nextSibling,u=c.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,A(u,w(Vs,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),A(d,w(Vs,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},lN=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=ze(),[o,a]=$e(""),c=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=Jj(),d=u.firstChild,p=d.nextSibling;return A(p,w(Kt,{get each(){return e().mutedPubkeys},children:h=>(()=>{const m=Hu(),v=m.firstChild,_=v.nextSibling;return A(v,w(Al,{pubkey:h})),_.$$click=()=>t(h),A(_,w(po,{})),m})()})),u})(),(()=>{const u=eN(),d=u.firstChild,p=d.nextSibling,h=p.nextSibling,m=h.firstChild;return A(p,w(Kt,{get each(){return e().mutedKeywords},children:v=>(()=>{const _=Hu(),x=_.firstChild,k=x.nextSibling;return A(x,v),k.$$click=()=>i(v),A(k,w(po,{})),_})()})),h.addEventListener("submit",c),m.addEventListener("change",v=>a(v.currentTarget.value)),Pe(()=>m.value=o()),u})()]},cN=()=>{const{config:e,setConfig:t}=ze(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=tN(),c=a.firstChild,u=c.nextSibling,d=u.firstChild;d.firstChild;const p=d.nextSibling;p.firstChild;const h=p.nextSibling;return h.firstChild,A(d,w(Vs,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),A(p,w(Vs,{get value(){return e().showImage},onClick:()=>i()}),null),A(h,w(Vs,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},uN=e=>w(Co,{get onClose(){return e.onClose},get children(){const t=nN();return t.firstChild,A(t,w(rN,{}),null),A(t,w(iN,{}),null),A(t,w(oN,{}),null),A(t,w(aN,{}),null),A(t,w(cN,{}),null),A(t,w(lN,{}),null),t}});vt(["click"]);const dN=P('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),fN=P('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),hN=P('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),pN=()=>{let e,t;const{saveColumn:n}=ze(),i=ko(),[o,a]=$e(""),c=u=>{u.preventDefault(),n(dd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.log(d)),e?.close(),a("")};return w(pd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=fN();return A(u,w(ag,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=dN(),d=u.firstChild,p=d.nextSibling;u.addEventListener("submit",c),d.addEventListener("change",m=>a(m.currentTarget.value));const h=t;return typeof h=="function"?Wn(h,d):t=d,A(p,w(ag,{})),Pe(()=>d.value=o()),u}})},gN=()=>{let e;const{showAddColumn:t,showAbout:n}=ei(),{config:i}=ze(),[o,a]=$e(!1),[c,u]=$e(!1),d=()=>{e?.focus(),e?.click()},p=()=>a(!0),h=()=>a(!1),m=()=>a(v=>!v);return Mu(()=>({commandType:"openPostForm",handler:()=>{p(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=hN(),_=v.firstChild,x=_.firstChild,k=x.firstChild,S=x.nextSibling,O=S.nextSibling,U=O.firstChild,M=U.nextSibling,R=M.nextSibling,T=R.firstChild,L=_.nextSibling;return k.$$click=()=>m(),A(k,w(qj,{})),A(x,w(pN,{}),null),U.$$click=()=>t(),A(U,w(sm,{})),M.$$click=()=>u(F=>!F),A(M,w(Fj,{})),R.$$click=()=>n(),A(L,w(Mm,{textAreaRef:F=>{e=F},onClose:h})),A(v,w(ue,{get when(){return c()},get children(){return w(uN,{onClose:()=>u(!1)})}}),null),Pe(F=>{const Z=zu("images/rabbit_app_256.png"),oe=!!(o()||i().keepOpenPostForm),G=!(o()||i().keepOpenPostForm);return Z!==F._v$&&At(T,"src",F._v$=Z),oe!==F._v$2&&L.classList.toggle("static",F._v$2=oe),G!==F._v$3&&L.classList.toggle("hidden",F._v$3=G),F},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};vt(["click"]);var mN=Un,vN=function(){return mN.Date.now()},yN=vN,bN=/\s/;function _N(e){for(var t=e.length;t--&&bN.test(e.charAt(t)););return t}var wN=_N,xN=wN,$N=/^\s+/;function kN(e){return e&&e.slice(0,xN(e)+1).replace($N,"")}var CN=kN,SN=CN,lg=Vn,EN=Ml,cg=0/0,TN=/^[-+]0x[0-9a-f]+$/i,AN=/^0b[01]+$/i,IN=/^0o[0-7]+$/i,RN=parseInt;function ON(e){if(typeof e=="number")return e;if(EN(e))return cg;if(lg(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=lg(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=SN(e);var n=AN.test(e);return n||IN.test(e)?RN(e.slice(2),n?2:8):TN.test(e)?cg:+e}var LN=ON,PN=Vn,hu=yN,ug=LN,MN="Expected a function",BN=Math.max,UN=Math.min;function DN(e,t,n){var i,o,a,c,u,d,p=0,h=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(MN);t=ug(t)||0,PN(n)&&(h=!!n.leading,m="maxWait"in n,a=m?BN(ug(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function _(L){var F=i,Z=o;return i=o=void 0,p=L,c=e.apply(Z,F),c}function x(L){return p=L,u=setTimeout(O,t),h?_(L):c}function k(L){var F=L-d,Z=L-p,oe=t-F;return m?UN(oe,a-Z):oe}function S(L){var F=L-d,Z=L-p;return d===void 0||F>=t||F<0||m&&Z>=a}function O(){var L=hu();if(S(L))return U(L);u=setTimeout(O,k(L))}function U(L){return u=void 0,v&&i?_(L):(i=o=void 0,c)}function M(){u!==void 0&&clearTimeout(u),p=0,i=d=o=u=void 0}function R(){return u===void 0?c:U(hu())}function T(){var L=hu(),F=S(L);if(i=arguments,o=this,d=L,F){if(u===void 0)return x(d);if(m)return clearTimeout(u),u=setTimeout(O,t),_(d)}return u===void 0&&(u=setTimeout(O,t)),c}return T.cancel=M,T.flush=R,T}var jN=DN,NN=jN,HN=Vn,zN="Expected a function";function FN(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(zN);return HN(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),NN(e,t,{leading:i,maxWait:t,trailing:o})}var WN=FN;const ZN=go(WN),qN=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],KN=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},GN=({shortcuts:e=qN,onShortcut:t})=>{const n=KN(e);wn(()=>{const i=ZN(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),Xr(()=>{window.removeEventListener("keydown",i)})})},VN=()=>{const e=ko();GN({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},QN=P('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),eH=()=>{VN();const e=c4(),{persistStatus:t}=h4(),n=El(),{config:i,initializeColumns:o}=ze(),a=br();return hr(()=>{i().relayUrls.map(async c=>{(await n().ensureRelay(c)).on("notice",d=>{console.error(`NOTICE: ${c}: ${d}`)})})}),hr(()=>{const c=a();c!=null&&o({pubkey:c})}),wn(()=>{t().loggedIn||e("/hello")}),u4(c=>{console.error("uncaught error: ",c)}),(()=>{const c=QN();return A(c,w(gN,{}),null),A(c,w(EL,{}),null),A(c,w(Hj,{}),null),c})()};export{eH as default};
//# sourceMappingURL=Home-f6465dda.js.map
