import{S as hg,s as gu,n as e4,i as vp,a as yp,t as t4,f as n4,c as r4,r as bp,b as i4,d as pg,g as s4,u as os,e as gg,h as mu,o as Xr,j as Sn,k as Ys,l as ul,p as _p,m as Xe,q as P,v as wt,w as xe,x as I,y as _,z as le,A as Ke,B as dl,C as o4,M as ze,D as a4,E as Bn,F as pr,G as l4,H as Pe,I as c4,J as yr,K as Ut,L as u4,N as _t,O as d4,P as f4,Q as qs,R as h4,T as p4}from"./index-130e9a53.js";import{c as Ki,u as Di,a as g4,b as m4,d as mg,r as Fu}from"./resolveAsset-ce8b6c21.js";class v4 extends hg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),wp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return vu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return vu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),gu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&xp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const c=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(e4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),vp||this.currentResult.isStale||!yp(this.options.staleTime))return;const n=t4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(vp||this.options.enabled===!1||!yp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||n4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,c=this.currentResultState,u=this.currentResultOptions,d=t!==i,p=d?t.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:m}=t;let{dataUpdatedAt:v,error:w,errorUpdatedAt:$,fetchStatus:S,status:k}=m,E=!1,M=!1,B;if(n._optimisticResults){const W=this.hasListeners(),ne=!W&&wp(t,n),V=W&&xp(t,i,n,o);(ne||V)&&(S=r4(t.options.networkMode)?"fetching":"paused",v||(k="loading")),n._optimisticResults==="isRestoring"&&(S="idle")}if(n.keepPreviousData&&!m.dataUpdatedAt&&h!=null&&h.isSuccess&&k!=="error")B=h.data,v=h.dataUpdatedAt,k=h.status,E=!0;else if(n.select&&typeof m.data<"u")if(a&&m.data===c?.data&&n.select===this.selectFn)B=this.selectResult;else try{this.selectFn=n.select,B=n.select(m.data),B=bp(a?.data,B,n),this.selectResult=B,this.selectError=null}catch(W){this.selectError=W}else B=m.data;if(typeof n.placeholderData<"u"&&typeof B>"u"&&k==="loading"){let W;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)W=a.data;else if(W=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof W<"u")try{W=n.select(W),this.selectError=null}catch(ne){this.selectError=ne}typeof W<"u"&&(k="success",B=bp(a?.data,W,n),M=!0)}this.selectError&&(w=this.selectError,B=this.selectResult,$=Date.now(),k="error");const A=S==="fetching",T=k==="loading",L=k==="error";return{status:k,fetchStatus:S,isLoading:T,isSuccess:k==="success",isError:L,isInitialLoading:T&&A,data:B,dataUpdatedAt:v,error:w,errorUpdatedAt:$,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>p.dataUpdateCount||m.errorUpdateCount>p.errorUpdateCount,isFetching:A,isRefetching:A&&!T,isLoadingError:L&&m.dataUpdatedAt===0,isPaused:S==="paused",isPlaceholderData:M,isPreviousData:E,isRefetchError:L&&m.dataUpdatedAt!==0,isStale:Wu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,gu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:c}=this.options;if(c==="all"||!c&&!this.trackedProps.size)return!0;const u=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const p=d;return this.currentResult[p]!==n[p]&&u.has(p)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!i4(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){pg.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var c,u,d,p;(c=(u=this.options).onError)==null||c.call(u,this.currentResult.error),(d=(p=this.options).onSettled)==null||d.call(p,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function y4(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function wp(e,t){return y4(e,t)||e.state.dataUpdatedAt>0&&vu(e,t,t.refetchOnMount)}function vu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Wu(e,t)}return!1}function xp(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Wu(e,n)}function Wu(e,t){return e.isStaleByTime(t.staleTime)}class b4 extends hg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),gu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:s4(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){pg.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var c,u,d,p;(c=(u=this.mutateOptions).onError)==null||c.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(p=this.mutateOptions).onSettled)==null||d.call(p,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)})})}}function _4(e){return typeof e=="function"}function $p(e,t,n){if(!_4(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function vg(e,t){return typeof e=="function"?e(...t):!!e}function w4(e,t){const n=os({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[c,u]=Ki(a.getOptimisticResult(o)),[d,{refetch:p,mutate:h}]=gg(()=>new Promise($=>{c.isFetching&&c.isLoading||(Di(c.data)===i&&$(void 0),$(Di(c.data)))}));mu(()=>{h(()=>Di(c.data)),p()});let m=[];const v=a.subscribe($=>{m.push(()=>{mu(()=>{const S={...Di($)};S.data===void 0&&(S.data=i),u(Di(S)),h(()=>Di($.data)),p()})}),queueMicrotask(()=>{const S=m.pop();S&&S(),m=[]})});Xr(()=>v()),Sn(()=>{a.setOptions(o,{listeners:!1})}),Ys(()=>{const $=n.defaultQueryOptions(e);a.setOptions($)}),Ys(ul(()=>c.status,()=>{if(c.isError&&!c.isFetching&&vg(a.options.useErrorBoundary,[c.error,a.getCurrentQuery()]))throw c.error}));const w={get($,S){return S==="data"?d():Reflect.get($,S)}};return new Proxy(c,w)}function as(e,t,n){const[i,o]=Ki($p(e,t,n));return Ys(()=>{const a=$p(e,t,n);o(a)}),w4(i,v4)}function pi(e,t,n){const[i,o]=Ki(_p(e,t,n)),a=os({context:i.context}),c=new b4(a,i),u=(m,v)=>{c.mutate(m,v).catch(x4)},[d,p]=Ki({...c.getCurrentResult(),mutate:u,mutateAsync:c.getCurrentResult().mutate});Ys(()=>{const m=_p(e,t,n);o(m),c.setOptions(m)}),Ys(ul(()=>d.status,()=>{if(d.isError&&vg(c.options.useErrorBoundary,[d.error]))throw d.error}));const h=c.subscribe(m=>{p({...m,mutate:u,mutateAsync:m.mutate})});return Xr(h),d}function x4(){}const $4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),yg=(e={})=>(()=>{const t=$4();return Xe(t,e,!0,!0),t})();var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function fl(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var ja={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ja.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",p=500,h="__lodash_placeholder__",m=1,v=2,w=4,$=1,S=2,k=1,E=2,M=4,B=8,A=16,T=32,L=64,D=128,W=256,ne=512,V=30,ie="...",Z=800,Q=16,se=1,We=2,Y=3,ye=1/0,Ee=9007199254740991,Et=17976931348623157e292,dt=0/0,ce=4294967295,re=ce-1,Me=ce>>>1,Ve=[["ary",D],["bind",k],["bindKey",E],["curry",B],["curryRight",A],["flip",ne],["partial",T],["partialRight",L],["rearg",W]],et="[object Arguments]",tt="[object Array]",xt="[object AsyncFunction]",ft="[object Boolean]",oe="[object Date]",$t="[object DOMException]",q="[object Error]",ht="[object Function]",hn="[object GeneratorFunction]",nt="[object Map]",qt="[object Number]",kr="[object Null]",mt="[object Object]",Dt="[object Promise]",er="[object Proxy]",ve="[object RegExp]",He="[object Set]",lt="[object String]",Tt="[object Symbol]",en="[object Undefined]",ue="[object WeakMap]",pn="[object WeakSet]",Re="[object ArrayBuffer]",st="[object DataView]",Kt="[object Float32Array]",Vt="[object Float64Array]",Nt="[object Int8Array]",En="[object Int16Array]",xi="[object Int32Array]",$i="[object Uint8Array]",ki="[object Uint8ClampedArray]",jl="[object Uint16Array]",Dl="[object Uint32Array]",wv=/\b__p \+= '';/g,xv=/\b(__p \+=) '' \+/g,$v=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Hd=/&(?:amp|lt|gt|quot|#39);/g,zd=/[&<>"']/g,kv=RegExp(Hd.source),Cv=RegExp(zd.source),Sv=/<%-([\s\S]+?)%>/g,Ev=/<%([\s\S]+?)%>/g,Fd=/<%=([\s\S]+?)%>/g,Tv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Av=/^\w*$/,Iv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nl=/[\\^$.*+?()[\]{}|]/g,Rv=RegExp(Nl.source),Hl=/^\s+/,Ov=/\s/,Lv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Pv=/\{\n\/\* \[wrapped with (.+)\] \*/,Mv=/,? & /,Bv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Uv=/[()=,{}\[\]\/\s]/,jv=/\\(\\)?/g,Dv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Wd=/\w*$/,Nv=/^[-+]0x[0-9a-f]+$/i,Hv=/^0b[01]+$/i,zv=/^\[object .+?Constructor\]$/,Fv=/^0o[0-7]+$/i,Wv=/^(?:0|[1-9]\d*)$/,Zv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,To=/($^)/,qv=/['\n\r\u2028\u2029\\]/g,Ao="\\ud800-\\udfff",Kv="\\u0300-\\u036f",Vv="\\ufe20-\\ufe2f",Gv="\\u20d0-\\u20ff",Zd=Kv+Vv+Gv,qd="\\u2700-\\u27bf",Kd="a-z\\xdf-\\xf6\\xf8-\\xff",Qv="\\xac\\xb1\\xd7\\xf7",Xv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Yv="\\u2000-\\u206f",Jv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Vd="A-Z\\xc0-\\xd6\\xd8-\\xde",Gd="\\ufe0e\\ufe0f",Qd=Qv+Xv+Yv+Jv,zl="['’]",e2="["+Ao+"]",Xd="["+Qd+"]",Io="["+Zd+"]",Yd="\\d+",t2="["+qd+"]",Jd="["+Kd+"]",ef="[^"+Ao+Qd+Yd+qd+Kd+Vd+"]",Fl="\\ud83c[\\udffb-\\udfff]",n2="(?:"+Io+"|"+Fl+")",tf="[^"+Ao+"]",Wl="(?:\\ud83c[\\udde6-\\uddff]){2}",Zl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ci="["+Vd+"]",nf="\\u200d",rf="(?:"+Jd+"|"+ef+")",r2="(?:"+Ci+"|"+ef+")",sf="(?:"+zl+"(?:d|ll|m|re|s|t|ve))?",of="(?:"+zl+"(?:D|LL|M|RE|S|T|VE))?",af=n2+"?",lf="["+Gd+"]?",i2="(?:"+nf+"(?:"+[tf,Wl,Zl].join("|")+")"+lf+af+")*",s2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",cf=lf+af+i2,a2="(?:"+[t2,Wl,Zl].join("|")+")"+cf,l2="(?:"+[tf+Io+"?",Io,Wl,Zl,e2].join("|")+")",c2=RegExp(zl,"g"),u2=RegExp(Io,"g"),ql=RegExp(Fl+"(?="+Fl+")|"+l2+cf,"g"),d2=RegExp([Ci+"?"+Jd+"+"+sf+"(?="+[Xd,Ci,"$"].join("|")+")",r2+"+"+of+"(?="+[Xd,Ci+rf,"$"].join("|")+")",Ci+"?"+rf+"+"+sf,Ci+"+"+of,o2,s2,Yd,a2].join("|"),"g"),f2=RegExp("["+nf+Ao+Zd+Gd+"]"),h2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,p2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],g2=-1,ot={};ot[Kt]=ot[Vt]=ot[Nt]=ot[En]=ot[xi]=ot[$i]=ot[ki]=ot[jl]=ot[Dl]=!0,ot[et]=ot[tt]=ot[Re]=ot[ft]=ot[st]=ot[oe]=ot[q]=ot[ht]=ot[nt]=ot[qt]=ot[mt]=ot[ve]=ot[He]=ot[lt]=ot[ue]=!1;var rt={};rt[et]=rt[tt]=rt[Re]=rt[st]=rt[ft]=rt[oe]=rt[Kt]=rt[Vt]=rt[Nt]=rt[En]=rt[xi]=rt[nt]=rt[qt]=rt[mt]=rt[ve]=rt[He]=rt[lt]=rt[Tt]=rt[$i]=rt[ki]=rt[jl]=rt[Dl]=!0,rt[q]=rt[ht]=rt[ue]=!1;var m2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},v2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},b2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},_2=parseFloat,w2=parseInt,uf=typeof fr=="object"&&fr&&fr.Object===Object&&fr,x2=typeof self=="object"&&self&&self.Object===Object&&self,Rt=uf||x2||Function("return this")(),Kl=t&&!t.nodeType&&t,ni=Kl&&!0&&e&&!e.nodeType&&e,df=ni&&ni.exports===Kl,Vl=df&&uf.process,gn=function(){try{var R=ni&&ni.require&&ni.require("util").types;return R||Vl&&Vl.binding&&Vl.binding("util")}catch{}}(),ff=gn&&gn.isArrayBuffer,hf=gn&&gn.isDate,pf=gn&&gn.isMap,gf=gn&&gn.isRegExp,mf=gn&&gn.isSet,vf=gn&&gn.isTypedArray;function tn(R,j,U){switch(U.length){case 0:return R.call(j);case 1:return R.call(j,U[0]);case 2:return R.call(j,U[0],U[1]);case 3:return R.call(j,U[0],U[1],U[2])}return R.apply(j,U)}function $2(R,j,U,ee){for(var be=-1,Ze=R==null?0:R.length;++be<Ze;){var Ct=R[be];j(ee,Ct,U(Ct),R)}return ee}function mn(R,j){for(var U=-1,ee=R==null?0:R.length;++U<ee&&j(R[U],U,R)!==!1;);return R}function k2(R,j){for(var U=R==null?0:R.length;U--&&j(R[U],U,R)!==!1;);return R}function yf(R,j){for(var U=-1,ee=R==null?0:R.length;++U<ee;)if(!j(R[U],U,R))return!1;return!0}function Cr(R,j){for(var U=-1,ee=R==null?0:R.length,be=0,Ze=[];++U<ee;){var Ct=R[U];j(Ct,U,R)&&(Ze[be++]=Ct)}return Ze}function Ro(R,j){var U=R==null?0:R.length;return!!U&&Si(R,j,0)>-1}function Gl(R,j,U){for(var ee=-1,be=R==null?0:R.length;++ee<be;)if(U(j,R[ee]))return!0;return!1}function ct(R,j){for(var U=-1,ee=R==null?0:R.length,be=Array(ee);++U<ee;)be[U]=j(R[U],U,R);return be}function Sr(R,j){for(var U=-1,ee=j.length,be=R.length;++U<ee;)R[be+U]=j[U];return R}function Ql(R,j,U,ee){var be=-1,Ze=R==null?0:R.length;for(ee&&Ze&&(U=R[++be]);++be<Ze;)U=j(U,R[be],be,R);return U}function C2(R,j,U,ee){var be=R==null?0:R.length;for(ee&&be&&(U=R[--be]);be--;)U=j(U,R[be],be,R);return U}function Xl(R,j){for(var U=-1,ee=R==null?0:R.length;++U<ee;)if(j(R[U],U,R))return!0;return!1}var S2=Yl("length");function E2(R){return R.split("")}function T2(R){return R.match(Bv)||[]}function bf(R,j,U){var ee;return U(R,function(be,Ze,Ct){if(j(be,Ze,Ct))return ee=Ze,!1}),ee}function Oo(R,j,U,ee){for(var be=R.length,Ze=U+(ee?1:-1);ee?Ze--:++Ze<be;)if(j(R[Ze],Ze,R))return Ze;return-1}function Si(R,j,U){return j===j?N2(R,j,U):Oo(R,_f,U)}function A2(R,j,U,ee){for(var be=U-1,Ze=R.length;++be<Ze;)if(ee(R[be],j))return be;return-1}function _f(R){return R!==R}function wf(R,j){var U=R==null?0:R.length;return U?ec(R,j)/U:dt}function Yl(R){return function(j){return j==null?n:j[R]}}function Jl(R){return function(j){return R==null?n:R[j]}}function xf(R,j,U,ee,be){return be(R,function(Ze,Ct,Je){U=ee?(ee=!1,Ze):j(U,Ze,Ct,Je)}),U}function I2(R,j){var U=R.length;for(R.sort(j);U--;)R[U]=R[U].value;return R}function ec(R,j){for(var U,ee=-1,be=R.length;++ee<be;){var Ze=j(R[ee]);Ze!==n&&(U=U===n?Ze:U+Ze)}return U}function tc(R,j){for(var U=-1,ee=Array(R);++U<R;)ee[U]=j(U);return ee}function R2(R,j){return ct(j,function(U){return[U,R[U]]})}function $f(R){return R&&R.slice(0,Ef(R)+1).replace(Hl,"")}function nn(R){return function(j){return R(j)}}function nc(R,j){return ct(j,function(U){return R[U]})}function ks(R,j){return R.has(j)}function kf(R,j){for(var U=-1,ee=R.length;++U<ee&&Si(j,R[U],0)>-1;);return U}function Cf(R,j){for(var U=R.length;U--&&Si(j,R[U],0)>-1;);return U}function O2(R,j){for(var U=R.length,ee=0;U--;)R[U]===j&&++ee;return ee}var L2=Jl(m2),P2=Jl(v2);function M2(R){return"\\"+b2[R]}function B2(R,j){return R==null?n:R[j]}function Ei(R){return f2.test(R)}function U2(R){return h2.test(R)}function j2(R){for(var j,U=[];!(j=R.next()).done;)U.push(j.value);return U}function rc(R){var j=-1,U=Array(R.size);return R.forEach(function(ee,be){U[++j]=[be,ee]}),U}function Sf(R,j){return function(U){return R(j(U))}}function Er(R,j){for(var U=-1,ee=R.length,be=0,Ze=[];++U<ee;){var Ct=R[U];(Ct===j||Ct===h)&&(R[U]=h,Ze[be++]=U)}return Ze}function Lo(R){var j=-1,U=Array(R.size);return R.forEach(function(ee){U[++j]=ee}),U}function D2(R){var j=-1,U=Array(R.size);return R.forEach(function(ee){U[++j]=[ee,ee]}),U}function N2(R,j,U){for(var ee=U-1,be=R.length;++ee<be;)if(R[ee]===j)return ee;return-1}function H2(R,j,U){for(var ee=U+1;ee--;)if(R[ee]===j)return ee;return ee}function Ti(R){return Ei(R)?F2(R):S2(R)}function Tn(R){return Ei(R)?W2(R):E2(R)}function Ef(R){for(var j=R.length;j--&&Ov.test(R.charAt(j)););return j}var z2=Jl(y2);function F2(R){for(var j=ql.lastIndex=0;ql.test(R);)++j;return j}function W2(R){return R.match(ql)||[]}function Z2(R){return R.match(d2)||[]}var q2=function R(j){j=j==null?Rt:Ai.defaults(Rt.Object(),j,Ai.pick(Rt,p2));var U=j.Array,ee=j.Date,be=j.Error,Ze=j.Function,Ct=j.Math,Je=j.Object,ic=j.RegExp,K2=j.String,vn=j.TypeError,Po=U.prototype,V2=Ze.prototype,Ii=Je.prototype,Mo=j["__core-js_shared__"],Bo=V2.toString,Qe=Ii.hasOwnProperty,G2=0,Tf=function(){var r=/[^.]+$/.exec(Mo&&Mo.keys&&Mo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Uo=Ii.toString,Q2=Bo.call(Je),X2=Rt._,Y2=ic("^"+Bo.call(Qe).replace(Nl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jo=df?j.Buffer:n,Tr=j.Symbol,Do=j.Uint8Array,Af=jo?jo.allocUnsafe:n,No=Sf(Je.getPrototypeOf,Je),If=Je.create,Rf=Ii.propertyIsEnumerable,Ho=Po.splice,Of=Tr?Tr.isConcatSpreadable:n,Cs=Tr?Tr.iterator:n,ri=Tr?Tr.toStringTag:n,zo=function(){try{var r=li(Je,"defineProperty");return r({},"",{}),r}catch{}}(),J2=j.clearTimeout!==Rt.clearTimeout&&j.clearTimeout,ey=ee&&ee.now!==Rt.Date.now&&ee.now,ty=j.setTimeout!==Rt.setTimeout&&j.setTimeout,Fo=Ct.ceil,Wo=Ct.floor,sc=Je.getOwnPropertySymbols,ny=jo?jo.isBuffer:n,Lf=j.isFinite,ry=Po.join,iy=Sf(Je.keys,Je),St=Ct.max,Pt=Ct.min,sy=ee.now,oy=j.parseInt,Pf=Ct.random,ay=Po.reverse,oc=li(j,"DataView"),Ss=li(j,"Map"),ac=li(j,"Promise"),Ri=li(j,"Set"),Es=li(j,"WeakMap"),Ts=li(Je,"create"),Zo=Es&&new Es,Oi={},ly=ci(oc),cy=ci(Ss),uy=ci(ac),dy=ci(Ri),fy=ci(Es),qo=Tr?Tr.prototype:n,As=qo?qo.valueOf:n,Mf=qo?qo.toString:n;function y(r){if(vt(r)&&!we(r)&&!(r instanceof Be)){if(r instanceof yn)return r;if(Qe.call(r,"__wrapped__"))return Bh(r)}return new yn(r)}var Li=function(){function r(){}return function(s){if(!pt(s))return{};if(If)return If(s);r.prototype=s;var l=new r;return r.prototype=n,l}}();function Ko(){}function yn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:Sv,evaluate:Ev,interpolate:Fd,variable:"",imports:{_:y}},y.prototype=Ko.prototype,y.prototype.constructor=y,yn.prototype=Li(Ko.prototype),yn.prototype.constructor=yn;function Be(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ce,this.__views__=[]}function hy(){var r=new Be(this.__wrapped__);return r.__actions__=Gt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Gt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Gt(this.__views__),r}function py(){if(this.__filtered__){var r=new Be(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function gy(){var r=this.__wrapped__.value(),s=this.__dir__,l=we(r),f=s<0,g=l?r.length:0,b=Eb(0,g,this.__views__),x=b.start,C=b.end,O=C-x,N=f?C:x-1,H=this.__iteratees__,F=H.length,G=0,ae=Pt(O,this.__takeCount__);if(!l||!f&&g==O&&ae==O)return sh(r,this.__actions__);var pe=[];e:for(;O--&&G<ae;){N+=s;for(var Ce=-1,ge=r[N];++Ce<F;){var Oe=H[Ce],Ue=Oe.iteratee,on=Oe.type,Ft=Ue(ge);if(on==We)ge=Ft;else if(!Ft){if(on==se)continue e;break e}}pe[G++]=ge}return pe}Be.prototype=Li(Ko.prototype),Be.prototype.constructor=Be;function ii(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function my(){this.__data__=Ts?Ts(null):{},this.size=0}function vy(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function yy(r){var s=this.__data__;if(Ts){var l=s[r];return l===d?n:l}return Qe.call(s,r)?s[r]:n}function by(r){var s=this.__data__;return Ts?s[r]!==n:Qe.call(s,r)}function _y(r,s){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=Ts&&s===n?d:s,this}ii.prototype.clear=my,ii.prototype.delete=vy,ii.prototype.get=yy,ii.prototype.has=by,ii.prototype.set=_y;function tr(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function wy(){this.__data__=[],this.size=0}function xy(r){var s=this.__data__,l=Vo(s,r);if(l<0)return!1;var f=s.length-1;return l==f?s.pop():Ho.call(s,l,1),--this.size,!0}function $y(r){var s=this.__data__,l=Vo(s,r);return l<0?n:s[l][1]}function ky(r){return Vo(this.__data__,r)>-1}function Cy(r,s){var l=this.__data__,f=Vo(l,r);return f<0?(++this.size,l.push([r,s])):l[f][1]=s,this}tr.prototype.clear=wy,tr.prototype.delete=xy,tr.prototype.get=$y,tr.prototype.has=ky,tr.prototype.set=Cy;function nr(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function Sy(){this.size=0,this.__data__={hash:new ii,map:new(Ss||tr),string:new ii}}function Ey(r){var s=oa(this,r).delete(r);return this.size-=s?1:0,s}function Ty(r){return oa(this,r).get(r)}function Ay(r){return oa(this,r).has(r)}function Iy(r,s){var l=oa(this,r),f=l.size;return l.set(r,s),this.size+=l.size==f?0:1,this}nr.prototype.clear=Sy,nr.prototype.delete=Ey,nr.prototype.get=Ty,nr.prototype.has=Ay,nr.prototype.set=Iy;function si(r){var s=-1,l=r==null?0:r.length;for(this.__data__=new nr;++s<l;)this.add(r[s])}function Ry(r){return this.__data__.set(r,d),this}function Oy(r){return this.__data__.has(r)}si.prototype.add=si.prototype.push=Ry,si.prototype.has=Oy;function An(r){var s=this.__data__=new tr(r);this.size=s.size}function Ly(){this.__data__=new tr,this.size=0}function Py(r){var s=this.__data__,l=s.delete(r);return this.size=s.size,l}function My(r){return this.__data__.get(r)}function By(r){return this.__data__.has(r)}function Uy(r,s){var l=this.__data__;if(l instanceof tr){var f=l.__data__;if(!Ss||f.length<o-1)return f.push([r,s]),this.size=++l.size,this;l=this.__data__=new nr(f)}return l.set(r,s),this.size=l.size,this}An.prototype.clear=Ly,An.prototype.delete=Py,An.prototype.get=My,An.prototype.has=By,An.prototype.set=Uy;function Bf(r,s){var l=we(r),f=!l&&ui(r),g=!l&&!f&&Lr(r),b=!l&&!f&&!g&&Ui(r),x=l||f||g||b,C=x?tc(r.length,K2):[],O=C.length;for(var N in r)(s||Qe.call(r,N))&&!(x&&(N=="length"||g&&(N=="offset"||N=="parent")||b&&(N=="buffer"||N=="byteLength"||N=="byteOffset")||or(N,O)))&&C.push(N);return C}function Uf(r){var s=r.length;return s?r[yc(0,s-1)]:n}function jy(r,s){return aa(Gt(r),oi(s,0,r.length))}function Dy(r){return aa(Gt(r))}function lc(r,s,l){(l!==n&&!In(r[s],l)||l===n&&!(s in r))&&rr(r,s,l)}function Is(r,s,l){var f=r[s];(!(Qe.call(r,s)&&In(f,l))||l===n&&!(s in r))&&rr(r,s,l)}function Vo(r,s){for(var l=r.length;l--;)if(In(r[l][0],s))return l;return-1}function Ny(r,s,l,f){return Ar(r,function(g,b,x){s(f,g,l(g),x)}),f}function jf(r,s){return r&&Fn(s,At(s),r)}function Hy(r,s){return r&&Fn(s,Xt(s),r)}function rr(r,s,l){s=="__proto__"&&zo?zo(r,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[s]=l}function cc(r,s){for(var l=-1,f=s.length,g=U(f),b=r==null;++l<f;)g[l]=b?n:Fc(r,s[l]);return g}function oi(r,s,l){return r===r&&(l!==n&&(r=r<=l?r:l),s!==n&&(r=r>=s?r:s)),r}function bn(r,s,l,f,g,b){var x,C=s&m,O=s&v,N=s&w;if(l&&(x=g?l(r,f,g,b):l(r)),x!==n)return x;if(!pt(r))return r;var H=we(r);if(H){if(x=Ab(r),!C)return Gt(r,x)}else{var F=Mt(r),G=F==ht||F==hn;if(Lr(r))return lh(r,C);if(F==mt||F==et||G&&!g){if(x=O||G?{}:Eh(r),!C)return O?yb(r,Hy(x,r)):vb(r,jf(x,r))}else{if(!rt[F])return g?r:{};x=Ib(r,F,C)}}b||(b=new An);var ae=b.get(r);if(ae)return ae;b.set(r,x),np(r)?r.forEach(function(ge){x.add(bn(ge,s,l,ge,r,b))}):ep(r)&&r.forEach(function(ge,Oe){x.set(Oe,bn(ge,s,l,Oe,r,b))});var pe=N?O?Ac:Tc:O?Xt:At,Ce=H?n:pe(r);return mn(Ce||r,function(ge,Oe){Ce&&(Oe=ge,ge=r[Oe]),Is(x,Oe,bn(ge,s,l,Oe,r,b))}),x}function zy(r){var s=At(r);return function(l){return Df(l,r,s)}}function Df(r,s,l){var f=l.length;if(r==null)return!f;for(r=Je(r);f--;){var g=l[f],b=s[g],x=r[g];if(x===n&&!(g in r)||!b(x))return!1}return!0}function Nf(r,s,l){if(typeof r!="function")throw new vn(c);return Us(function(){r.apply(n,l)},s)}function Rs(r,s,l,f){var g=-1,b=Ro,x=!0,C=r.length,O=[],N=s.length;if(!C)return O;l&&(s=ct(s,nn(l))),f?(b=Gl,x=!1):s.length>=o&&(b=ks,x=!1,s=new si(s));e:for(;++g<C;){var H=r[g],F=l==null?H:l(H);if(H=f||H!==0?H:0,x&&F===F){for(var G=N;G--;)if(s[G]===F)continue e;O.push(H)}else b(s,F,f)||O.push(H)}return O}var Ar=hh(zn),Hf=hh(dc,!0);function Fy(r,s){var l=!0;return Ar(r,function(f,g,b){return l=!!s(f,g,b),l}),l}function Go(r,s,l){for(var f=-1,g=r.length;++f<g;){var b=r[f],x=s(b);if(x!=null&&(C===n?x===x&&!sn(x):l(x,C)))var C=x,O=b}return O}function Wy(r,s,l,f){var g=r.length;for(l=$e(l),l<0&&(l=-l>g?0:g+l),f=f===n||f>g?g:$e(f),f<0&&(f+=g),f=l>f?0:ip(f);l<f;)r[l++]=s;return r}function zf(r,s){var l=[];return Ar(r,function(f,g,b){s(f,g,b)&&l.push(f)}),l}function Ot(r,s,l,f,g){var b=-1,x=r.length;for(l||(l=Ob),g||(g=[]);++b<x;){var C=r[b];s>0&&l(C)?s>1?Ot(C,s-1,l,f,g):Sr(g,C):f||(g[g.length]=C)}return g}var uc=ph(),Ff=ph(!0);function zn(r,s){return r&&uc(r,s,At)}function dc(r,s){return r&&Ff(r,s,At)}function Qo(r,s){return Cr(s,function(l){return ar(r[l])})}function ai(r,s){s=Rr(s,r);for(var l=0,f=s.length;r!=null&&l<f;)r=r[Wn(s[l++])];return l&&l==f?r:n}function Wf(r,s,l){var f=s(r);return we(r)?f:Sr(f,l(r))}function Ht(r){return r==null?r===n?en:kr:ri&&ri in Je(r)?Sb(r):Db(r)}function fc(r,s){return r>s}function Zy(r,s){return r!=null&&Qe.call(r,s)}function qy(r,s){return r!=null&&s in Je(r)}function Ky(r,s,l){return r>=Pt(s,l)&&r<St(s,l)}function hc(r,s,l){for(var f=l?Gl:Ro,g=r[0].length,b=r.length,x=b,C=U(b),O=1/0,N=[];x--;){var H=r[x];x&&s&&(H=ct(H,nn(s))),O=Pt(H.length,O),C[x]=!l&&(s||g>=120&&H.length>=120)?new si(x&&H):n}H=r[0];var F=-1,G=C[0];e:for(;++F<g&&N.length<O;){var ae=H[F],pe=s?s(ae):ae;if(ae=l||ae!==0?ae:0,!(G?ks(G,pe):f(N,pe,l))){for(x=b;--x;){var Ce=C[x];if(!(Ce?ks(Ce,pe):f(r[x],pe,l)))continue e}G&&G.push(pe),N.push(ae)}}return N}function Vy(r,s,l,f){return zn(r,function(g,b,x){s(f,l(g),b,x)}),f}function Os(r,s,l){s=Rr(s,r),r=Rh(r,s);var f=r==null?r:r[Wn(wn(s))];return f==null?n:tn(f,r,l)}function Zf(r){return vt(r)&&Ht(r)==et}function Gy(r){return vt(r)&&Ht(r)==Re}function Qy(r){return vt(r)&&Ht(r)==oe}function Ls(r,s,l,f,g){return r===s?!0:r==null||s==null||!vt(r)&&!vt(s)?r!==r&&s!==s:Xy(r,s,l,f,Ls,g)}function Xy(r,s,l,f,g,b){var x=we(r),C=we(s),O=x?tt:Mt(r),N=C?tt:Mt(s);O=O==et?mt:O,N=N==et?mt:N;var H=O==mt,F=N==mt,G=O==N;if(G&&Lr(r)){if(!Lr(s))return!1;x=!0,H=!1}if(G&&!H)return b||(b=new An),x||Ui(r)?kh(r,s,l,f,g,b):kb(r,s,O,l,f,g,b);if(!(l&$)){var ae=H&&Qe.call(r,"__wrapped__"),pe=F&&Qe.call(s,"__wrapped__");if(ae||pe){var Ce=ae?r.value():r,ge=pe?s.value():s;return b||(b=new An),g(Ce,ge,l,f,b)}}return G?(b||(b=new An),Cb(r,s,l,f,g,b)):!1}function Yy(r){return vt(r)&&Mt(r)==nt}function pc(r,s,l,f){var g=l.length,b=g,x=!f;if(r==null)return!b;for(r=Je(r);g--;){var C=l[g];if(x&&C[2]?C[1]!==r[C[0]]:!(C[0]in r))return!1}for(;++g<b;){C=l[g];var O=C[0],N=r[O],H=C[1];if(x&&C[2]){if(N===n&&!(O in r))return!1}else{var F=new An;if(f)var G=f(N,H,O,r,s,F);if(!(G===n?Ls(H,N,$|S,f,F):G))return!1}}return!0}function qf(r){if(!pt(r)||Pb(r))return!1;var s=ar(r)?Y2:zv;return s.test(ci(r))}function Jy(r){return vt(r)&&Ht(r)==ve}function eb(r){return vt(r)&&Mt(r)==He}function tb(r){return vt(r)&&ha(r.length)&&!!ot[Ht(r)]}function Kf(r){return typeof r=="function"?r:r==null?Yt:typeof r=="object"?we(r)?Qf(r[0],r[1]):Gf(r):gp(r)}function gc(r){if(!Bs(r))return iy(r);var s=[];for(var l in Je(r))Qe.call(r,l)&&l!="constructor"&&s.push(l);return s}function nb(r){if(!pt(r))return jb(r);var s=Bs(r),l=[];for(var f in r)f=="constructor"&&(s||!Qe.call(r,f))||l.push(f);return l}function mc(r,s){return r<s}function Vf(r,s){var l=-1,f=Qt(r)?U(r.length):[];return Ar(r,function(g,b,x){f[++l]=s(g,b,x)}),f}function Gf(r){var s=Rc(r);return s.length==1&&s[0][2]?Ah(s[0][0],s[0][1]):function(l){return l===r||pc(l,r,s)}}function Qf(r,s){return Lc(r)&&Th(s)?Ah(Wn(r),s):function(l){var f=Fc(l,r);return f===n&&f===s?Wc(l,r):Ls(s,f,$|S)}}function Xo(r,s,l,f,g){r!==s&&uc(s,function(b,x){if(g||(g=new An),pt(b))rb(r,s,x,l,Xo,f,g);else{var C=f?f(Mc(r,x),b,x+"",r,s,g):n;C===n&&(C=b),lc(r,x,C)}},Xt)}function rb(r,s,l,f,g,b,x){var C=Mc(r,l),O=Mc(s,l),N=x.get(O);if(N){lc(r,l,N);return}var H=b?b(C,O,l+"",r,s,x):n,F=H===n;if(F){var G=we(O),ae=!G&&Lr(O),pe=!G&&!ae&&Ui(O);H=O,G||ae||pe?we(C)?H=C:yt(C)?H=Gt(C):ae?(F=!1,H=lh(O,!0)):pe?(F=!1,H=ch(O,!0)):H=[]:js(O)||ui(O)?(H=C,ui(C)?H=sp(C):(!pt(C)||ar(C))&&(H=Eh(O))):F=!1}F&&(x.set(O,H),g(H,O,f,b,x),x.delete(O)),lc(r,l,H)}function Xf(r,s){var l=r.length;if(l)return s+=s<0?l:0,or(s,l)?r[s]:n}function Yf(r,s,l){s.length?s=ct(s,function(b){return we(b)?function(x){return ai(x,b.length===1?b[0]:b)}:b}):s=[Yt];var f=-1;s=ct(s,nn(fe()));var g=Vf(r,function(b,x,C){var O=ct(s,function(N){return N(b)});return{criteria:O,index:++f,value:b}});return I2(g,function(b,x){return mb(b,x,l)})}function ib(r,s){return Jf(r,s,function(l,f){return Wc(r,f)})}function Jf(r,s,l){for(var f=-1,g=s.length,b={};++f<g;){var x=s[f],C=ai(r,x);l(C,x)&&Ps(b,Rr(x,r),C)}return b}function sb(r){return function(s){return ai(s,r)}}function vc(r,s,l,f){var g=f?A2:Si,b=-1,x=s.length,C=r;for(r===s&&(s=Gt(s)),l&&(C=ct(r,nn(l)));++b<x;)for(var O=0,N=s[b],H=l?l(N):N;(O=g(C,H,O,f))>-1;)C!==r&&Ho.call(C,O,1),Ho.call(r,O,1);return r}function eh(r,s){for(var l=r?s.length:0,f=l-1;l--;){var g=s[l];if(l==f||g!==b){var b=g;or(g)?Ho.call(r,g,1):wc(r,g)}}return r}function yc(r,s){return r+Wo(Pf()*(s-r+1))}function ob(r,s,l,f){for(var g=-1,b=St(Fo((s-r)/(l||1)),0),x=U(b);b--;)x[f?b:++g]=r,r+=l;return x}function bc(r,s){var l="";if(!r||s<1||s>Ee)return l;do s%2&&(l+=r),s=Wo(s/2),s&&(r+=r);while(s);return l}function Te(r,s){return Bc(Ih(r,s,Yt),r+"")}function ab(r){return Uf(ji(r))}function lb(r,s){var l=ji(r);return aa(l,oi(s,0,l.length))}function Ps(r,s,l,f){if(!pt(r))return r;s=Rr(s,r);for(var g=-1,b=s.length,x=b-1,C=r;C!=null&&++g<b;){var O=Wn(s[g]),N=l;if(O==="__proto__"||O==="constructor"||O==="prototype")return r;if(g!=x){var H=C[O];N=f?f(H,O,C):n,N===n&&(N=pt(H)?H:or(s[g+1])?[]:{})}Is(C,O,N),C=C[O]}return r}var th=Zo?function(r,s){return Zo.set(r,s),r}:Yt,cb=zo?function(r,s){return zo(r,"toString",{configurable:!0,enumerable:!1,value:qc(s),writable:!0})}:Yt;function ub(r){return aa(ji(r))}function _n(r,s,l){var f=-1,g=r.length;s<0&&(s=-s>g?0:g+s),l=l>g?g:l,l<0&&(l+=g),g=s>l?0:l-s>>>0,s>>>=0;for(var b=U(g);++f<g;)b[f]=r[f+s];return b}function db(r,s){var l;return Ar(r,function(f,g,b){return l=s(f,g,b),!l}),!!l}function Yo(r,s,l){var f=0,g=r==null?f:r.length;if(typeof s=="number"&&s===s&&g<=Me){for(;f<g;){var b=f+g>>>1,x=r[b];x!==null&&!sn(x)&&(l?x<=s:x<s)?f=b+1:g=b}return g}return _c(r,s,Yt,l)}function _c(r,s,l,f){var g=0,b=r==null?0:r.length;if(b===0)return 0;s=l(s);for(var x=s!==s,C=s===null,O=sn(s),N=s===n;g<b;){var H=Wo((g+b)/2),F=l(r[H]),G=F!==n,ae=F===null,pe=F===F,Ce=sn(F);if(x)var ge=f||pe;else N?ge=pe&&(f||G):C?ge=pe&&G&&(f||!ae):O?ge=pe&&G&&!ae&&(f||!Ce):ae||Ce?ge=!1:ge=f?F<=s:F<s;ge?g=H+1:b=H}return Pt(b,re)}function nh(r,s){for(var l=-1,f=r.length,g=0,b=[];++l<f;){var x=r[l],C=s?s(x):x;if(!l||!In(C,O)){var O=C;b[g++]=x===0?0:x}}return b}function rh(r){return typeof r=="number"?r:sn(r)?dt:+r}function rn(r){if(typeof r=="string")return r;if(we(r))return ct(r,rn)+"";if(sn(r))return Mf?Mf.call(r):"";var s=r+"";return s=="0"&&1/r==-ye?"-0":s}function Ir(r,s,l){var f=-1,g=Ro,b=r.length,x=!0,C=[],O=C;if(l)x=!1,g=Gl;else if(b>=o){var N=s?null:xb(r);if(N)return Lo(N);x=!1,g=ks,O=new si}else O=s?[]:C;e:for(;++f<b;){var H=r[f],F=s?s(H):H;if(H=l||H!==0?H:0,x&&F===F){for(var G=O.length;G--;)if(O[G]===F)continue e;s&&O.push(F),C.push(H)}else g(O,F,l)||(O!==C&&O.push(F),C.push(H))}return C}function wc(r,s){return s=Rr(s,r),r=Rh(r,s),r==null||delete r[Wn(wn(s))]}function ih(r,s,l,f){return Ps(r,s,l(ai(r,s)),f)}function Jo(r,s,l,f){for(var g=r.length,b=f?g:-1;(f?b--:++b<g)&&s(r[b],b,r););return l?_n(r,f?0:b,f?b+1:g):_n(r,f?b+1:0,f?g:b)}function sh(r,s){var l=r;return l instanceof Be&&(l=l.value()),Ql(s,function(f,g){return g.func.apply(g.thisArg,Sr([f],g.args))},l)}function xc(r,s,l){var f=r.length;if(f<2)return f?Ir(r[0]):[];for(var g=-1,b=U(f);++g<f;)for(var x=r[g],C=-1;++C<f;)C!=g&&(b[g]=Rs(b[g]||x,r[C],s,l));return Ir(Ot(b,1),s,l)}function oh(r,s,l){for(var f=-1,g=r.length,b=s.length,x={};++f<g;){var C=f<b?s[f]:n;l(x,r[f],C)}return x}function $c(r){return yt(r)?r:[]}function kc(r){return typeof r=="function"?r:Yt}function Rr(r,s){return we(r)?r:Lc(r,s)?[r]:Mh(Ge(r))}var fb=Te;function Or(r,s,l){var f=r.length;return l=l===n?f:l,!s&&l>=f?r:_n(r,s,l)}var ah=J2||function(r){return Rt.clearTimeout(r)};function lh(r,s){if(s)return r.slice();var l=r.length,f=Af?Af(l):new r.constructor(l);return r.copy(f),f}function Cc(r){var s=new r.constructor(r.byteLength);return new Do(s).set(new Do(r)),s}function hb(r,s){var l=s?Cc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function pb(r){var s=new r.constructor(r.source,Wd.exec(r));return s.lastIndex=r.lastIndex,s}function gb(r){return As?Je(As.call(r)):{}}function ch(r,s){var l=s?Cc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function uh(r,s){if(r!==s){var l=r!==n,f=r===null,g=r===r,b=sn(r),x=s!==n,C=s===null,O=s===s,N=sn(s);if(!C&&!N&&!b&&r>s||b&&x&&O&&!C&&!N||f&&x&&O||!l&&O||!g)return 1;if(!f&&!b&&!N&&r<s||N&&l&&g&&!f&&!b||C&&l&&g||!x&&g||!O)return-1}return 0}function mb(r,s,l){for(var f=-1,g=r.criteria,b=s.criteria,x=g.length,C=l.length;++f<x;){var O=uh(g[f],b[f]);if(O){if(f>=C)return O;var N=l[f];return O*(N=="desc"?-1:1)}}return r.index-s.index}function dh(r,s,l,f){for(var g=-1,b=r.length,x=l.length,C=-1,O=s.length,N=St(b-x,0),H=U(O+N),F=!f;++C<O;)H[C]=s[C];for(;++g<x;)(F||g<b)&&(H[l[g]]=r[g]);for(;N--;)H[C++]=r[g++];return H}function fh(r,s,l,f){for(var g=-1,b=r.length,x=-1,C=l.length,O=-1,N=s.length,H=St(b-C,0),F=U(H+N),G=!f;++g<H;)F[g]=r[g];for(var ae=g;++O<N;)F[ae+O]=s[O];for(;++x<C;)(G||g<b)&&(F[ae+l[x]]=r[g++]);return F}function Gt(r,s){var l=-1,f=r.length;for(s||(s=U(f));++l<f;)s[l]=r[l];return s}function Fn(r,s,l,f){var g=!l;l||(l={});for(var b=-1,x=s.length;++b<x;){var C=s[b],O=f?f(l[C],r[C],C,l,r):n;O===n&&(O=r[C]),g?rr(l,C,O):Is(l,C,O)}return l}function vb(r,s){return Fn(r,Oc(r),s)}function yb(r,s){return Fn(r,Ch(r),s)}function ea(r,s){return function(l,f){var g=we(l)?$2:Ny,b=s?s():{};return g(l,r,fe(f,2),b)}}function Pi(r){return Te(function(s,l){var f=-1,g=l.length,b=g>1?l[g-1]:n,x=g>2?l[2]:n;for(b=r.length>3&&typeof b=="function"?(g--,b):n,x&&zt(l[0],l[1],x)&&(b=g<3?n:b,g=1),s=Je(s);++f<g;){var C=l[f];C&&r(s,C,f,b)}return s})}function hh(r,s){return function(l,f){if(l==null)return l;if(!Qt(l))return r(l,f);for(var g=l.length,b=s?g:-1,x=Je(l);(s?b--:++b<g)&&f(x[b],b,x)!==!1;);return l}}function ph(r){return function(s,l,f){for(var g=-1,b=Je(s),x=f(s),C=x.length;C--;){var O=x[r?C:++g];if(l(b[O],O,b)===!1)break}return s}}function bb(r,s,l){var f=s&k,g=Ms(r);function b(){var x=this&&this!==Rt&&this instanceof b?g:r;return x.apply(f?l:this,arguments)}return b}function gh(r){return function(s){s=Ge(s);var l=Ei(s)?Tn(s):n,f=l?l[0]:s.charAt(0),g=l?Or(l,1).join(""):s.slice(1);return f[r]()+g}}function Mi(r){return function(s){return Ql(hp(fp(s).replace(c2,"")),r,"")}}function Ms(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Li(r.prototype),f=r.apply(l,s);return pt(f)?f:l}}function _b(r,s,l){var f=Ms(r);function g(){for(var b=arguments.length,x=U(b),C=b,O=Bi(g);C--;)x[C]=arguments[C];var N=b<3&&x[0]!==O&&x[b-1]!==O?[]:Er(x,O);if(b-=N.length,b<l)return _h(r,s,ta,g.placeholder,n,x,N,n,n,l-b);var H=this&&this!==Rt&&this instanceof g?f:r;return tn(H,this,x)}return g}function mh(r){return function(s,l,f){var g=Je(s);if(!Qt(s)){var b=fe(l,3);s=At(s),l=function(C){return b(g[C],C,g)}}var x=r(s,l,f);return x>-1?g[b?s[x]:x]:n}}function vh(r){return sr(function(s){var l=s.length,f=l,g=yn.prototype.thru;for(r&&s.reverse();f--;){var b=s[f];if(typeof b!="function")throw new vn(c);if(g&&!x&&sa(b)=="wrapper")var x=new yn([],!0)}for(f=x?f:l;++f<l;){b=s[f];var C=sa(b),O=C=="wrapper"?Ic(b):n;O&&Pc(O[0])&&O[1]==(D|B|T|W)&&!O[4].length&&O[9]==1?x=x[sa(O[0])].apply(x,O[3]):x=b.length==1&&Pc(b)?x[C]():x.thru(b)}return function(){var N=arguments,H=N[0];if(x&&N.length==1&&we(H))return x.plant(H).value();for(var F=0,G=l?s[F].apply(this,N):H;++F<l;)G=s[F].call(this,G);return G}})}function ta(r,s,l,f,g,b,x,C,O,N){var H=s&D,F=s&k,G=s&E,ae=s&(B|A),pe=s&ne,Ce=G?n:Ms(r);function ge(){for(var Oe=arguments.length,Ue=U(Oe),on=Oe;on--;)Ue[on]=arguments[on];if(ae)var Ft=Bi(ge),an=O2(Ue,Ft);if(f&&(Ue=dh(Ue,f,g,ae)),b&&(Ue=fh(Ue,b,x,ae)),Oe-=an,ae&&Oe<N){var bt=Er(Ue,Ft);return _h(r,s,ta,ge.placeholder,l,Ue,bt,C,O,N-Oe)}var Rn=F?l:this,cr=G?Rn[r]:r;return Oe=Ue.length,C?Ue=Nb(Ue,C):pe&&Oe>1&&Ue.reverse(),H&&O<Oe&&(Ue.length=O),this&&this!==Rt&&this instanceof ge&&(cr=Ce||Ms(cr)),cr.apply(Rn,Ue)}return ge}function yh(r,s){return function(l,f){return Vy(l,r,s(f),{})}}function na(r,s){return function(l,f){var g;if(l===n&&f===n)return s;if(l!==n&&(g=l),f!==n){if(g===n)return f;typeof l=="string"||typeof f=="string"?(l=rn(l),f=rn(f)):(l=rh(l),f=rh(f)),g=r(l,f)}return g}}function Sc(r){return sr(function(s){return s=ct(s,nn(fe())),Te(function(l){var f=this;return r(s,function(g){return tn(g,f,l)})})})}function ra(r,s){s=s===n?" ":rn(s);var l=s.length;if(l<2)return l?bc(s,r):s;var f=bc(s,Fo(r/Ti(s)));return Ei(s)?Or(Tn(f),0,r).join(""):f.slice(0,r)}function wb(r,s,l,f){var g=s&k,b=Ms(r);function x(){for(var C=-1,O=arguments.length,N=-1,H=f.length,F=U(H+O),G=this&&this!==Rt&&this instanceof x?b:r;++N<H;)F[N]=f[N];for(;O--;)F[N++]=arguments[++C];return tn(G,g?l:this,F)}return x}function bh(r){return function(s,l,f){return f&&typeof f!="number"&&zt(s,l,f)&&(l=f=n),s=lr(s),l===n?(l=s,s=0):l=lr(l),f=f===n?s<l?1:-1:lr(f),ob(s,l,f,r)}}function ia(r){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=xn(s),l=xn(l)),r(s,l)}}function _h(r,s,l,f,g,b,x,C,O,N){var H=s&B,F=H?x:n,G=H?n:x,ae=H?b:n,pe=H?n:b;s|=H?T:L,s&=~(H?L:T),s&M||(s&=~(k|E));var Ce=[r,s,g,ae,F,pe,G,C,O,N],ge=l.apply(n,Ce);return Pc(r)&&Oh(ge,Ce),ge.placeholder=f,Lh(ge,r,s)}function Ec(r){var s=Ct[r];return function(l,f){if(l=xn(l),f=f==null?0:Pt($e(f),292),f&&Lf(l)){var g=(Ge(l)+"e").split("e"),b=s(g[0]+"e"+(+g[1]+f));return g=(Ge(b)+"e").split("e"),+(g[0]+"e"+(+g[1]-f))}return s(l)}}var xb=Ri&&1/Lo(new Ri([,-0]))[1]==ye?function(r){return new Ri(r)}:Gc;function wh(r){return function(s){var l=Mt(s);return l==nt?rc(s):l==He?D2(s):R2(s,r(s))}}function ir(r,s,l,f,g,b,x,C){var O=s&E;if(!O&&typeof r!="function")throw new vn(c);var N=f?f.length:0;if(N||(s&=~(T|L),f=g=n),x=x===n?x:St($e(x),0),C=C===n?C:$e(C),N-=g?g.length:0,s&L){var H=f,F=g;f=g=n}var G=O?n:Ic(r),ae=[r,s,l,f,g,H,F,b,x,C];if(G&&Ub(ae,G),r=ae[0],s=ae[1],l=ae[2],f=ae[3],g=ae[4],C=ae[9]=ae[9]===n?O?0:r.length:St(ae[9]-N,0),!C&&s&(B|A)&&(s&=~(B|A)),!s||s==k)var pe=bb(r,s,l);else s==B||s==A?pe=_b(r,s,C):(s==T||s==(k|T))&&!g.length?pe=wb(r,s,l,f):pe=ta.apply(n,ae);var Ce=G?th:Oh;return Lh(Ce(pe,ae),r,s)}function xh(r,s,l,f){return r===n||In(r,Ii[l])&&!Qe.call(f,l)?s:r}function $h(r,s,l,f,g,b){return pt(r)&&pt(s)&&(b.set(s,r),Xo(r,s,n,$h,b),b.delete(s)),r}function $b(r){return js(r)?n:r}function kh(r,s,l,f,g,b){var x=l&$,C=r.length,O=s.length;if(C!=O&&!(x&&O>C))return!1;var N=b.get(r),H=b.get(s);if(N&&H)return N==s&&H==r;var F=-1,G=!0,ae=l&S?new si:n;for(b.set(r,s),b.set(s,r);++F<C;){var pe=r[F],Ce=s[F];if(f)var ge=x?f(Ce,pe,F,s,r,b):f(pe,Ce,F,r,s,b);if(ge!==n){if(ge)continue;G=!1;break}if(ae){if(!Xl(s,function(Oe,Ue){if(!ks(ae,Ue)&&(pe===Oe||g(pe,Oe,l,f,b)))return ae.push(Ue)})){G=!1;break}}else if(!(pe===Ce||g(pe,Ce,l,f,b))){G=!1;break}}return b.delete(r),b.delete(s),G}function kb(r,s,l,f,g,b,x){switch(l){case st:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Re:return!(r.byteLength!=s.byteLength||!b(new Do(r),new Do(s)));case ft:case oe:case qt:return In(+r,+s);case q:return r.name==s.name&&r.message==s.message;case ve:case lt:return r==s+"";case nt:var C=rc;case He:var O=f&$;if(C||(C=Lo),r.size!=s.size&&!O)return!1;var N=x.get(r);if(N)return N==s;f|=S,x.set(r,s);var H=kh(C(r),C(s),f,g,b,x);return x.delete(r),H;case Tt:if(As)return As.call(r)==As.call(s)}return!1}function Cb(r,s,l,f,g,b){var x=l&$,C=Tc(r),O=C.length,N=Tc(s),H=N.length;if(O!=H&&!x)return!1;for(var F=O;F--;){var G=C[F];if(!(x?G in s:Qe.call(s,G)))return!1}var ae=b.get(r),pe=b.get(s);if(ae&&pe)return ae==s&&pe==r;var Ce=!0;b.set(r,s),b.set(s,r);for(var ge=x;++F<O;){G=C[F];var Oe=r[G],Ue=s[G];if(f)var on=x?f(Ue,Oe,G,s,r,b):f(Oe,Ue,G,r,s,b);if(!(on===n?Oe===Ue||g(Oe,Ue,l,f,b):on)){Ce=!1;break}ge||(ge=G=="constructor")}if(Ce&&!ge){var Ft=r.constructor,an=s.constructor;Ft!=an&&"constructor"in r&&"constructor"in s&&!(typeof Ft=="function"&&Ft instanceof Ft&&typeof an=="function"&&an instanceof an)&&(Ce=!1)}return b.delete(r),b.delete(s),Ce}function sr(r){return Bc(Ih(r,n,Dh),r+"")}function Tc(r){return Wf(r,At,Oc)}function Ac(r){return Wf(r,Xt,Ch)}var Ic=Zo?function(r){return Zo.get(r)}:Gc;function sa(r){for(var s=r.name+"",l=Oi[s],f=Qe.call(Oi,s)?l.length:0;f--;){var g=l[f],b=g.func;if(b==null||b==r)return g.name}return s}function Bi(r){var s=Qe.call(y,"placeholder")?y:r;return s.placeholder}function fe(){var r=y.iteratee||Kc;return r=r===Kc?Kf:r,arguments.length?r(arguments[0],arguments[1]):r}function oa(r,s){var l=r.__data__;return Lb(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Rc(r){for(var s=At(r),l=s.length;l--;){var f=s[l],g=r[f];s[l]=[f,g,Th(g)]}return s}function li(r,s){var l=B2(r,s);return qf(l)?l:n}function Sb(r){var s=Qe.call(r,ri),l=r[ri];try{r[ri]=n;var f=!0}catch{}var g=Uo.call(r);return f&&(s?r[ri]=l:delete r[ri]),g}var Oc=sc?function(r){return r==null?[]:(r=Je(r),Cr(sc(r),function(s){return Rf.call(r,s)}))}:Qc,Ch=sc?function(r){for(var s=[];r;)Sr(s,Oc(r)),r=No(r);return s}:Qc,Mt=Ht;(oc&&Mt(new oc(new ArrayBuffer(1)))!=st||Ss&&Mt(new Ss)!=nt||ac&&Mt(ac.resolve())!=Dt||Ri&&Mt(new Ri)!=He||Es&&Mt(new Es)!=ue)&&(Mt=function(r){var s=Ht(r),l=s==mt?r.constructor:n,f=l?ci(l):"";if(f)switch(f){case ly:return st;case cy:return nt;case uy:return Dt;case dy:return He;case fy:return ue}return s});function Eb(r,s,l){for(var f=-1,g=l.length;++f<g;){var b=l[f],x=b.size;switch(b.type){case"drop":r+=x;break;case"dropRight":s-=x;break;case"take":s=Pt(s,r+x);break;case"takeRight":r=St(r,s-x);break}}return{start:r,end:s}}function Tb(r){var s=r.match(Pv);return s?s[1].split(Mv):[]}function Sh(r,s,l){s=Rr(s,r);for(var f=-1,g=s.length,b=!1;++f<g;){var x=Wn(s[f]);if(!(b=r!=null&&l(r,x)))break;r=r[x]}return b||++f!=g?b:(g=r==null?0:r.length,!!g&&ha(g)&&or(x,g)&&(we(r)||ui(r)))}function Ab(r){var s=r.length,l=new r.constructor(s);return s&&typeof r[0]=="string"&&Qe.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function Eh(r){return typeof r.constructor=="function"&&!Bs(r)?Li(No(r)):{}}function Ib(r,s,l){var f=r.constructor;switch(s){case Re:return Cc(r);case ft:case oe:return new f(+r);case st:return hb(r,l);case Kt:case Vt:case Nt:case En:case xi:case $i:case ki:case jl:case Dl:return ch(r,l);case nt:return new f;case qt:case lt:return new f(r);case ve:return pb(r);case He:return new f;case Tt:return gb(r)}}function Rb(r,s){var l=s.length;if(!l)return r;var f=l-1;return s[f]=(l>1?"& ":"")+s[f],s=s.join(l>2?", ":" "),r.replace(Lv,`{
/* [wrapped with `+s+`] */
`)}function Ob(r){return we(r)||ui(r)||!!(Of&&r&&r[Of])}function or(r,s){var l=typeof r;return s=s??Ee,!!s&&(l=="number"||l!="symbol"&&Wv.test(r))&&r>-1&&r%1==0&&r<s}function zt(r,s,l){if(!pt(l))return!1;var f=typeof s;return(f=="number"?Qt(l)&&or(s,l.length):f=="string"&&s in l)?In(l[s],r):!1}function Lc(r,s){if(we(r))return!1;var l=typeof r;return l=="number"||l=="symbol"||l=="boolean"||r==null||sn(r)?!0:Av.test(r)||!Tv.test(r)||s!=null&&r in Je(s)}function Lb(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Pc(r){var s=sa(r),l=y[s];if(typeof l!="function"||!(s in Be.prototype))return!1;if(r===l)return!0;var f=Ic(l);return!!f&&r===f[0]}function Pb(r){return!!Tf&&Tf in r}var Mb=Mo?ar:Xc;function Bs(r){var s=r&&r.constructor,l=typeof s=="function"&&s.prototype||Ii;return r===l}function Th(r){return r===r&&!pt(r)}function Ah(r,s){return function(l){return l==null?!1:l[r]===s&&(s!==n||r in Je(l))}}function Bb(r){var s=da(r,function(f){return l.size===p&&l.clear(),f}),l=s.cache;return s}function Ub(r,s){var l=r[1],f=s[1],g=l|f,b=g<(k|E|D),x=f==D&&l==B||f==D&&l==W&&r[7].length<=s[8]||f==(D|W)&&s[7].length<=s[8]&&l==B;if(!(b||x))return r;f&k&&(r[2]=s[2],g|=l&k?0:M);var C=s[3];if(C){var O=r[3];r[3]=O?dh(O,C,s[4]):C,r[4]=O?Er(r[3],h):s[4]}return C=s[5],C&&(O=r[5],r[5]=O?fh(O,C,s[6]):C,r[6]=O?Er(r[5],h):s[6]),C=s[7],C&&(r[7]=C),f&D&&(r[8]=r[8]==null?s[8]:Pt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=g,r}function jb(r){var s=[];if(r!=null)for(var l in Je(r))s.push(l);return s}function Db(r){return Uo.call(r)}function Ih(r,s,l){return s=St(s===n?r.length-1:s,0),function(){for(var f=arguments,g=-1,b=St(f.length-s,0),x=U(b);++g<b;)x[g]=f[s+g];g=-1;for(var C=U(s+1);++g<s;)C[g]=f[g];return C[s]=l(x),tn(r,this,C)}}function Rh(r,s){return s.length<2?r:ai(r,_n(s,0,-1))}function Nb(r,s){for(var l=r.length,f=Pt(s.length,l),g=Gt(r);f--;){var b=s[f];r[f]=or(b,l)?g[b]:n}return r}function Mc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Oh=Ph(th),Us=ty||function(r,s){return Rt.setTimeout(r,s)},Bc=Ph(cb);function Lh(r,s,l){var f=s+"";return Bc(r,Rb(f,Hb(Tb(f),l)))}function Ph(r){var s=0,l=0;return function(){var f=sy(),g=Q-(f-l);if(l=f,g>0){if(++s>=Z)return arguments[0]}else s=0;return r.apply(n,arguments)}}function aa(r,s){var l=-1,f=r.length,g=f-1;for(s=s===n?f:s;++l<s;){var b=yc(l,g),x=r[b];r[b]=r[l],r[l]=x}return r.length=s,r}var Mh=Bb(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Iv,function(l,f,g,b){s.push(g?b.replace(jv,"$1"):f||l)}),s});function Wn(r){if(typeof r=="string"||sn(r))return r;var s=r+"";return s=="0"&&1/r==-ye?"-0":s}function ci(r){if(r!=null){try{return Bo.call(r)}catch{}try{return r+""}catch{}}return""}function Hb(r,s){return mn(Ve,function(l){var f="_."+l[0];s&l[1]&&!Ro(r,f)&&r.push(f)}),r.sort()}function Bh(r){if(r instanceof Be)return r.clone();var s=new yn(r.__wrapped__,r.__chain__);return s.__actions__=Gt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function zb(r,s,l){(l?zt(r,s,l):s===n)?s=1:s=St($e(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var g=0,b=0,x=U(Fo(f/s));g<f;)x[b++]=_n(r,g,g+=s);return x}function Fb(r){for(var s=-1,l=r==null?0:r.length,f=0,g=[];++s<l;){var b=r[s];b&&(g[f++]=b)}return g}function Wb(){var r=arguments.length;if(!r)return[];for(var s=U(r-1),l=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Sr(we(l)?Gt(l):[l],Ot(s,1))}var Zb=Te(function(r,s){return yt(r)?Rs(r,Ot(s,1,yt,!0)):[]}),qb=Te(function(r,s){var l=wn(s);return yt(l)&&(l=n),yt(r)?Rs(r,Ot(s,1,yt,!0),fe(l,2)):[]}),Kb=Te(function(r,s){var l=wn(s);return yt(l)&&(l=n),yt(r)?Rs(r,Ot(s,1,yt,!0),n,l):[]});function Vb(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:$e(s),_n(r,s<0?0:s,f)):[]}function Gb(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:$e(s),s=f-s,_n(r,0,s<0?0:s)):[]}function Qb(r,s){return r&&r.length?Jo(r,fe(s,3),!0,!0):[]}function Xb(r,s){return r&&r.length?Jo(r,fe(s,3),!0):[]}function Yb(r,s,l,f){var g=r==null?0:r.length;return g?(l&&typeof l!="number"&&zt(r,s,l)&&(l=0,f=g),Wy(r,s,l,f)):[]}function Uh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=l==null?0:$e(l);return g<0&&(g=St(f+g,0)),Oo(r,fe(s,3),g)}function jh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=f-1;return l!==n&&(g=$e(l),g=l<0?St(f+g,0):Pt(g,f-1)),Oo(r,fe(s,3),g,!0)}function Dh(r){var s=r==null?0:r.length;return s?Ot(r,1):[]}function Jb(r){var s=r==null?0:r.length;return s?Ot(r,ye):[]}function e_(r,s){var l=r==null?0:r.length;return l?(s=s===n?1:$e(s),Ot(r,s)):[]}function t_(r){for(var s=-1,l=r==null?0:r.length,f={};++s<l;){var g=r[s];f[g[0]]=g[1]}return f}function Nh(r){return r&&r.length?r[0]:n}function n_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=l==null?0:$e(l);return g<0&&(g=St(f+g,0)),Si(r,s,g)}function r_(r){var s=r==null?0:r.length;return s?_n(r,0,-1):[]}var i_=Te(function(r){var s=ct(r,$c);return s.length&&s[0]===r[0]?hc(s):[]}),s_=Te(function(r){var s=wn(r),l=ct(r,$c);return s===wn(l)?s=n:l.pop(),l.length&&l[0]===r[0]?hc(l,fe(s,2)):[]}),o_=Te(function(r){var s=wn(r),l=ct(r,$c);return s=typeof s=="function"?s:n,s&&l.pop(),l.length&&l[0]===r[0]?hc(l,n,s):[]});function a_(r,s){return r==null?"":ry.call(r,s)}function wn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function l_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=f;return l!==n&&(g=$e(l),g=g<0?St(f+g,0):Pt(g,f-1)),s===s?H2(r,s,g):Oo(r,_f,g,!0)}function c_(r,s){return r&&r.length?Xf(r,$e(s)):n}var u_=Te(Hh);function Hh(r,s){return r&&r.length&&s&&s.length?vc(r,s):r}function d_(r,s,l){return r&&r.length&&s&&s.length?vc(r,s,fe(l,2)):r}function f_(r,s,l){return r&&r.length&&s&&s.length?vc(r,s,n,l):r}var h_=sr(function(r,s){var l=r==null?0:r.length,f=cc(r,s);return eh(r,ct(s,function(g){return or(g,l)?+g:g}).sort(uh)),f});function p_(r,s){var l=[];if(!(r&&r.length))return l;var f=-1,g=[],b=r.length;for(s=fe(s,3);++f<b;){var x=r[f];s(x,f,r)&&(l.push(x),g.push(f))}return eh(r,g),l}function Uc(r){return r==null?r:ay.call(r)}function g_(r,s,l){var f=r==null?0:r.length;return f?(l&&typeof l!="number"&&zt(r,s,l)?(s=0,l=f):(s=s==null?0:$e(s),l=l===n?f:$e(l)),_n(r,s,l)):[]}function m_(r,s){return Yo(r,s)}function v_(r,s,l){return _c(r,s,fe(l,2))}function y_(r,s){var l=r==null?0:r.length;if(l){var f=Yo(r,s);if(f<l&&In(r[f],s))return f}return-1}function b_(r,s){return Yo(r,s,!0)}function __(r,s,l){return _c(r,s,fe(l,2),!0)}function w_(r,s){var l=r==null?0:r.length;if(l){var f=Yo(r,s,!0)-1;if(In(r[f],s))return f}return-1}function x_(r){return r&&r.length?nh(r):[]}function $_(r,s){return r&&r.length?nh(r,fe(s,2)):[]}function k_(r){var s=r==null?0:r.length;return s?_n(r,1,s):[]}function C_(r,s,l){return r&&r.length?(s=l||s===n?1:$e(s),_n(r,0,s<0?0:s)):[]}function S_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:$e(s),s=f-s,_n(r,s<0?0:s,f)):[]}function E_(r,s){return r&&r.length?Jo(r,fe(s,3),!1,!0):[]}function T_(r,s){return r&&r.length?Jo(r,fe(s,3)):[]}var A_=Te(function(r){return Ir(Ot(r,1,yt,!0))}),I_=Te(function(r){var s=wn(r);return yt(s)&&(s=n),Ir(Ot(r,1,yt,!0),fe(s,2))}),R_=Te(function(r){var s=wn(r);return s=typeof s=="function"?s:n,Ir(Ot(r,1,yt,!0),n,s)});function O_(r){return r&&r.length?Ir(r):[]}function L_(r,s){return r&&r.length?Ir(r,fe(s,2)):[]}function P_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Ir(r,n,s):[]}function jc(r){if(!(r&&r.length))return[];var s=0;return r=Cr(r,function(l){if(yt(l))return s=St(l.length,s),!0}),tc(s,function(l){return ct(r,Yl(l))})}function zh(r,s){if(!(r&&r.length))return[];var l=jc(r);return s==null?l:ct(l,function(f){return tn(s,n,f)})}var M_=Te(function(r,s){return yt(r)?Rs(r,s):[]}),B_=Te(function(r){return xc(Cr(r,yt))}),U_=Te(function(r){var s=wn(r);return yt(s)&&(s=n),xc(Cr(r,yt),fe(s,2))}),j_=Te(function(r){var s=wn(r);return s=typeof s=="function"?s:n,xc(Cr(r,yt),n,s)}),D_=Te(jc);function N_(r,s){return oh(r||[],s||[],Is)}function H_(r,s){return oh(r||[],s||[],Ps)}var z_=Te(function(r){var s=r.length,l=s>1?r[s-1]:n;return l=typeof l=="function"?(r.pop(),l):n,zh(r,l)});function Fh(r){var s=y(r);return s.__chain__=!0,s}function F_(r,s){return s(r),r}function la(r,s){return s(r)}var W_=sr(function(r){var s=r.length,l=s?r[0]:0,f=this.__wrapped__,g=function(b){return cc(b,r)};return s>1||this.__actions__.length||!(f instanceof Be)||!or(l)?this.thru(g):(f=f.slice(l,+l+(s?1:0)),f.__actions__.push({func:la,args:[g],thisArg:n}),new yn(f,this.__chain__).thru(function(b){return s&&!b.length&&b.push(n),b}))});function Z_(){return Fh(this)}function q_(){return new yn(this.value(),this.__chain__)}function K_(){this.__values__===n&&(this.__values__=rp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function V_(){return this}function G_(r){for(var s,l=this;l instanceof Ko;){var f=Bh(l);f.__index__=0,f.__values__=n,s?g.__wrapped__=f:s=f;var g=f;l=l.__wrapped__}return g.__wrapped__=r,s}function Q_(){var r=this.__wrapped__;if(r instanceof Be){var s=r;return this.__actions__.length&&(s=new Be(this)),s=s.reverse(),s.__actions__.push({func:la,args:[Uc],thisArg:n}),new yn(s,this.__chain__)}return this.thru(Uc)}function X_(){return sh(this.__wrapped__,this.__actions__)}var Y_=ea(function(r,s,l){Qe.call(r,l)?++r[l]:rr(r,l,1)});function J_(r,s,l){var f=we(r)?yf:Fy;return l&&zt(r,s,l)&&(s=n),f(r,fe(s,3))}function ew(r,s){var l=we(r)?Cr:zf;return l(r,fe(s,3))}var tw=mh(Uh),nw=mh(jh);function rw(r,s){return Ot(ca(r,s),1)}function iw(r,s){return Ot(ca(r,s),ye)}function sw(r,s,l){return l=l===n?1:$e(l),Ot(ca(r,s),l)}function Wh(r,s){var l=we(r)?mn:Ar;return l(r,fe(s,3))}function Zh(r,s){var l=we(r)?k2:Hf;return l(r,fe(s,3))}var ow=ea(function(r,s,l){Qe.call(r,l)?r[l].push(s):rr(r,l,[s])});function aw(r,s,l,f){r=Qt(r)?r:ji(r),l=l&&!f?$e(l):0;var g=r.length;return l<0&&(l=St(g+l,0)),pa(r)?l<=g&&r.indexOf(s,l)>-1:!!g&&Si(r,s,l)>-1}var lw=Te(function(r,s,l){var f=-1,g=typeof s=="function",b=Qt(r)?U(r.length):[];return Ar(r,function(x){b[++f]=g?tn(s,x,l):Os(x,s,l)}),b}),cw=ea(function(r,s,l){rr(r,l,s)});function ca(r,s){var l=we(r)?ct:Vf;return l(r,fe(s,3))}function uw(r,s,l,f){return r==null?[]:(we(s)||(s=s==null?[]:[s]),l=f?n:l,we(l)||(l=l==null?[]:[l]),Yf(r,s,l))}var dw=ea(function(r,s,l){r[l?0:1].push(s)},function(){return[[],[]]});function fw(r,s,l){var f=we(r)?Ql:xf,g=arguments.length<3;return f(r,fe(s,4),l,g,Ar)}function hw(r,s,l){var f=we(r)?C2:xf,g=arguments.length<3;return f(r,fe(s,4),l,g,Hf)}function pw(r,s){var l=we(r)?Cr:zf;return l(r,fa(fe(s,3)))}function gw(r){var s=we(r)?Uf:ab;return s(r)}function mw(r,s,l){(l?zt(r,s,l):s===n)?s=1:s=$e(s);var f=we(r)?jy:lb;return f(r,s)}function vw(r){var s=we(r)?Dy:ub;return s(r)}function yw(r){if(r==null)return 0;if(Qt(r))return pa(r)?Ti(r):r.length;var s=Mt(r);return s==nt||s==He?r.size:gc(r).length}function bw(r,s,l){var f=we(r)?Xl:db;return l&&zt(r,s,l)&&(s=n),f(r,fe(s,3))}var _w=Te(function(r,s){if(r==null)return[];var l=s.length;return l>1&&zt(r,s[0],s[1])?s=[]:l>2&&zt(s[0],s[1],s[2])&&(s=[s[0]]),Yf(r,Ot(s,1),[])}),ua=ey||function(){return Rt.Date.now()};function ww(r,s){if(typeof s!="function")throw new vn(c);return r=$e(r),function(){if(--r<1)return s.apply(this,arguments)}}function qh(r,s,l){return s=l?n:s,s=r&&s==null?r.length:s,ir(r,D,n,n,n,n,s)}function Kh(r,s){var l;if(typeof s!="function")throw new vn(c);return r=$e(r),function(){return--r>0&&(l=s.apply(this,arguments)),r<=1&&(s=n),l}}var Dc=Te(function(r,s,l){var f=k;if(l.length){var g=Er(l,Bi(Dc));f|=T}return ir(r,f,s,l,g)}),Vh=Te(function(r,s,l){var f=k|E;if(l.length){var g=Er(l,Bi(Vh));f|=T}return ir(s,f,r,l,g)});function Gh(r,s,l){s=l?n:s;var f=ir(r,B,n,n,n,n,n,s);return f.placeholder=Gh.placeholder,f}function Qh(r,s,l){s=l?n:s;var f=ir(r,A,n,n,n,n,n,s);return f.placeholder=Qh.placeholder,f}function Xh(r,s,l){var f,g,b,x,C,O,N=0,H=!1,F=!1,G=!0;if(typeof r!="function")throw new vn(c);s=xn(s)||0,pt(l)&&(H=!!l.leading,F="maxWait"in l,b=F?St(xn(l.maxWait)||0,s):b,G="trailing"in l?!!l.trailing:G);function ae(bt){var Rn=f,cr=g;return f=g=n,N=bt,x=r.apply(cr,Rn),x}function pe(bt){return N=bt,C=Us(Oe,s),H?ae(bt):x}function Ce(bt){var Rn=bt-O,cr=bt-N,mp=s-Rn;return F?Pt(mp,b-cr):mp}function ge(bt){var Rn=bt-O,cr=bt-N;return O===n||Rn>=s||Rn<0||F&&cr>=b}function Oe(){var bt=ua();if(ge(bt))return Ue(bt);C=Us(Oe,Ce(bt))}function Ue(bt){return C=n,G&&f?ae(bt):(f=g=n,x)}function on(){C!==n&&ah(C),N=0,f=O=g=C=n}function Ft(){return C===n?x:Ue(ua())}function an(){var bt=ua(),Rn=ge(bt);if(f=arguments,g=this,O=bt,Rn){if(C===n)return pe(O);if(F)return ah(C),C=Us(Oe,s),ae(O)}return C===n&&(C=Us(Oe,s)),x}return an.cancel=on,an.flush=Ft,an}var xw=Te(function(r,s){return Nf(r,1,s)}),$w=Te(function(r,s,l){return Nf(r,xn(s)||0,l)});function kw(r){return ir(r,ne)}function da(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new vn(c);var l=function(){var f=arguments,g=s?s.apply(this,f):f[0],b=l.cache;if(b.has(g))return b.get(g);var x=r.apply(this,f);return l.cache=b.set(g,x)||b,x};return l.cache=new(da.Cache||nr),l}da.Cache=nr;function fa(r){if(typeof r!="function")throw new vn(c);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Cw(r){return Kh(2,r)}var Sw=fb(function(r,s){s=s.length==1&&we(s[0])?ct(s[0],nn(fe())):ct(Ot(s,1),nn(fe()));var l=s.length;return Te(function(f){for(var g=-1,b=Pt(f.length,l);++g<b;)f[g]=s[g].call(this,f[g]);return tn(r,this,f)})}),Nc=Te(function(r,s){var l=Er(s,Bi(Nc));return ir(r,T,n,s,l)}),Yh=Te(function(r,s){var l=Er(s,Bi(Yh));return ir(r,L,n,s,l)}),Ew=sr(function(r,s){return ir(r,W,n,n,n,s)});function Tw(r,s){if(typeof r!="function")throw new vn(c);return s=s===n?s:$e(s),Te(r,s)}function Aw(r,s){if(typeof r!="function")throw new vn(c);return s=s==null?0:St($e(s),0),Te(function(l){var f=l[s],g=Or(l,0,s);return f&&Sr(g,f),tn(r,this,g)})}function Iw(r,s,l){var f=!0,g=!0;if(typeof r!="function")throw new vn(c);return pt(l)&&(f="leading"in l?!!l.leading:f,g="trailing"in l?!!l.trailing:g),Xh(r,s,{leading:f,maxWait:s,trailing:g})}function Rw(r){return qh(r,1)}function Ow(r,s){return Nc(kc(s),r)}function Lw(){if(!arguments.length)return[];var r=arguments[0];return we(r)?r:[r]}function Pw(r){return bn(r,w)}function Mw(r,s){return s=typeof s=="function"?s:n,bn(r,w,s)}function Bw(r){return bn(r,m|w)}function Uw(r,s){return s=typeof s=="function"?s:n,bn(r,m|w,s)}function jw(r,s){return s==null||Df(r,s,At(s))}function In(r,s){return r===s||r!==r&&s!==s}var Dw=ia(fc),Nw=ia(function(r,s){return r>=s}),ui=Zf(function(){return arguments}())?Zf:function(r){return vt(r)&&Qe.call(r,"callee")&&!Rf.call(r,"callee")},we=U.isArray,Hw=ff?nn(ff):Gy;function Qt(r){return r!=null&&ha(r.length)&&!ar(r)}function yt(r){return vt(r)&&Qt(r)}function zw(r){return r===!0||r===!1||vt(r)&&Ht(r)==ft}var Lr=ny||Xc,Fw=hf?nn(hf):Qy;function Ww(r){return vt(r)&&r.nodeType===1&&!js(r)}function Zw(r){if(r==null)return!0;if(Qt(r)&&(we(r)||typeof r=="string"||typeof r.splice=="function"||Lr(r)||Ui(r)||ui(r)))return!r.length;var s=Mt(r);if(s==nt||s==He)return!r.size;if(Bs(r))return!gc(r).length;for(var l in r)if(Qe.call(r,l))return!1;return!0}function qw(r,s){return Ls(r,s)}function Kw(r,s,l){l=typeof l=="function"?l:n;var f=l?l(r,s):n;return f===n?Ls(r,s,n,l):!!f}function Hc(r){if(!vt(r))return!1;var s=Ht(r);return s==q||s==$t||typeof r.message=="string"&&typeof r.name=="string"&&!js(r)}function Vw(r){return typeof r=="number"&&Lf(r)}function ar(r){if(!pt(r))return!1;var s=Ht(r);return s==ht||s==hn||s==xt||s==er}function Jh(r){return typeof r=="number"&&r==$e(r)}function ha(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Ee}function pt(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function vt(r){return r!=null&&typeof r=="object"}var ep=pf?nn(pf):Yy;function Gw(r,s){return r===s||pc(r,s,Rc(s))}function Qw(r,s,l){return l=typeof l=="function"?l:n,pc(r,s,Rc(s),l)}function Xw(r){return tp(r)&&r!=+r}function Yw(r){if(Mb(r))throw new be(a);return qf(r)}function Jw(r){return r===null}function e3(r){return r==null}function tp(r){return typeof r=="number"||vt(r)&&Ht(r)==qt}function js(r){if(!vt(r)||Ht(r)!=mt)return!1;var s=No(r);if(s===null)return!0;var l=Qe.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Bo.call(l)==Q2}var zc=gf?nn(gf):Jy;function t3(r){return Jh(r)&&r>=-Ee&&r<=Ee}var np=mf?nn(mf):eb;function pa(r){return typeof r=="string"||!we(r)&&vt(r)&&Ht(r)==lt}function sn(r){return typeof r=="symbol"||vt(r)&&Ht(r)==Tt}var Ui=vf?nn(vf):tb;function n3(r){return r===n}function r3(r){return vt(r)&&Mt(r)==ue}function i3(r){return vt(r)&&Ht(r)==pn}var s3=ia(mc),o3=ia(function(r,s){return r<=s});function rp(r){if(!r)return[];if(Qt(r))return pa(r)?Tn(r):Gt(r);if(Cs&&r[Cs])return j2(r[Cs]());var s=Mt(r),l=s==nt?rc:s==He?Lo:ji;return l(r)}function lr(r){if(!r)return r===0?r:0;if(r=xn(r),r===ye||r===-ye){var s=r<0?-1:1;return s*Et}return r===r?r:0}function $e(r){var s=lr(r),l=s%1;return s===s?l?s-l:s:0}function ip(r){return r?oi($e(r),0,ce):0}function xn(r){if(typeof r=="number")return r;if(sn(r))return dt;if(pt(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=pt(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=$f(r);var l=Hv.test(r);return l||Fv.test(r)?w2(r.slice(2),l?2:8):Nv.test(r)?dt:+r}function sp(r){return Fn(r,Xt(r))}function a3(r){return r?oi($e(r),-Ee,Ee):r===0?r:0}function Ge(r){return r==null?"":rn(r)}var l3=Pi(function(r,s){if(Bs(s)||Qt(s)){Fn(s,At(s),r);return}for(var l in s)Qe.call(s,l)&&Is(r,l,s[l])}),op=Pi(function(r,s){Fn(s,Xt(s),r)}),ga=Pi(function(r,s,l,f){Fn(s,Xt(s),r,f)}),c3=Pi(function(r,s,l,f){Fn(s,At(s),r,f)}),u3=sr(cc);function d3(r,s){var l=Li(r);return s==null?l:jf(l,s)}var f3=Te(function(r,s){r=Je(r);var l=-1,f=s.length,g=f>2?s[2]:n;for(g&&zt(s[0],s[1],g)&&(f=1);++l<f;)for(var b=s[l],x=Xt(b),C=-1,O=x.length;++C<O;){var N=x[C],H=r[N];(H===n||In(H,Ii[N])&&!Qe.call(r,N))&&(r[N]=b[N])}return r}),h3=Te(function(r){return r.push(n,$h),tn(ap,n,r)});function p3(r,s){return bf(r,fe(s,3),zn)}function g3(r,s){return bf(r,fe(s,3),dc)}function m3(r,s){return r==null?r:uc(r,fe(s,3),Xt)}function v3(r,s){return r==null?r:Ff(r,fe(s,3),Xt)}function y3(r,s){return r&&zn(r,fe(s,3))}function b3(r,s){return r&&dc(r,fe(s,3))}function _3(r){return r==null?[]:Qo(r,At(r))}function w3(r){return r==null?[]:Qo(r,Xt(r))}function Fc(r,s,l){var f=r==null?n:ai(r,s);return f===n?l:f}function x3(r,s){return r!=null&&Sh(r,s,Zy)}function Wc(r,s){return r!=null&&Sh(r,s,qy)}var $3=yh(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Uo.call(s)),r[s]=l},qc(Yt)),k3=yh(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Uo.call(s)),Qe.call(r,s)?r[s].push(l):r[s]=[l]},fe),C3=Te(Os);function At(r){return Qt(r)?Bf(r):gc(r)}function Xt(r){return Qt(r)?Bf(r,!0):nb(r)}function S3(r,s){var l={};return s=fe(s,3),zn(r,function(f,g,b){rr(l,s(f,g,b),f)}),l}function E3(r,s){var l={};return s=fe(s,3),zn(r,function(f,g,b){rr(l,g,s(f,g,b))}),l}var T3=Pi(function(r,s,l){Xo(r,s,l)}),ap=Pi(function(r,s,l,f){Xo(r,s,l,f)}),A3=sr(function(r,s){var l={};if(r==null)return l;var f=!1;s=ct(s,function(b){return b=Rr(b,r),f||(f=b.length>1),b}),Fn(r,Ac(r),l),f&&(l=bn(l,m|v|w,$b));for(var g=s.length;g--;)wc(l,s[g]);return l});function I3(r,s){return lp(r,fa(fe(s)))}var R3=sr(function(r,s){return r==null?{}:ib(r,s)});function lp(r,s){if(r==null)return{};var l=ct(Ac(r),function(f){return[f]});return s=fe(s),Jf(r,l,function(f,g){return s(f,g[0])})}function O3(r,s,l){s=Rr(s,r);var f=-1,g=s.length;for(g||(g=1,r=n);++f<g;){var b=r==null?n:r[Wn(s[f])];b===n&&(f=g,b=l),r=ar(b)?b.call(r):b}return r}function L3(r,s,l){return r==null?r:Ps(r,s,l)}function P3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:Ps(r,s,l,f)}var cp=wh(At),up=wh(Xt);function M3(r,s,l){var f=we(r),g=f||Lr(r)||Ui(r);if(s=fe(s,4),l==null){var b=r&&r.constructor;g?l=f?new b:[]:pt(r)?l=ar(b)?Li(No(r)):{}:l={}}return(g?mn:zn)(r,function(x,C,O){return s(l,x,C,O)}),l}function B3(r,s){return r==null?!0:wc(r,s)}function U3(r,s,l){return r==null?r:ih(r,s,kc(l))}function j3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:ih(r,s,kc(l),f)}function ji(r){return r==null?[]:nc(r,At(r))}function D3(r){return r==null?[]:nc(r,Xt(r))}function N3(r,s,l){return l===n&&(l=s,s=n),l!==n&&(l=xn(l),l=l===l?l:0),s!==n&&(s=xn(s),s=s===s?s:0),oi(xn(r),s,l)}function H3(r,s,l){return s=lr(s),l===n?(l=s,s=0):l=lr(l),r=xn(r),Ky(r,s,l)}function z3(r,s,l){if(l&&typeof l!="boolean"&&zt(r,s,l)&&(s=l=n),l===n&&(typeof s=="boolean"?(l=s,s=n):typeof r=="boolean"&&(l=r,r=n)),r===n&&s===n?(r=0,s=1):(r=lr(r),s===n?(s=r,r=0):s=lr(s)),r>s){var f=r;r=s,s=f}if(l||r%1||s%1){var g=Pf();return Pt(r+g*(s-r+_2("1e-"+((g+"").length-1))),s)}return yc(r,s)}var F3=Mi(function(r,s,l){return s=s.toLowerCase(),r+(l?dp(s):s)});function dp(r){return Zc(Ge(r).toLowerCase())}function fp(r){return r=Ge(r),r&&r.replace(Zv,L2).replace(u2,"")}function W3(r,s,l){r=Ge(r),s=rn(s);var f=r.length;l=l===n?f:oi($e(l),0,f);var g=l;return l-=s.length,l>=0&&r.slice(l,g)==s}function Z3(r){return r=Ge(r),r&&Cv.test(r)?r.replace(zd,P2):r}function q3(r){return r=Ge(r),r&&Rv.test(r)?r.replace(Nl,"\\$&"):r}var K3=Mi(function(r,s,l){return r+(l?"-":"")+s.toLowerCase()}),V3=Mi(function(r,s,l){return r+(l?" ":"")+s.toLowerCase()}),G3=gh("toLowerCase");function Q3(r,s,l){r=Ge(r),s=$e(s);var f=s?Ti(r):0;if(!s||f>=s)return r;var g=(s-f)/2;return ra(Wo(g),l)+r+ra(Fo(g),l)}function X3(r,s,l){r=Ge(r),s=$e(s);var f=s?Ti(r):0;return s&&f<s?r+ra(s-f,l):r}function Y3(r,s,l){r=Ge(r),s=$e(s);var f=s?Ti(r):0;return s&&f<s?ra(s-f,l)+r:r}function J3(r,s,l){return l||s==null?s=0:s&&(s=+s),oy(Ge(r).replace(Hl,""),s||0)}function ex(r,s,l){return(l?zt(r,s,l):s===n)?s=1:s=$e(s),bc(Ge(r),s)}function tx(){var r=arguments,s=Ge(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var nx=Mi(function(r,s,l){return r+(l?"_":"")+s.toLowerCase()});function rx(r,s,l){return l&&typeof l!="number"&&zt(r,s,l)&&(s=l=n),l=l===n?ce:l>>>0,l?(r=Ge(r),r&&(typeof s=="string"||s!=null&&!zc(s))&&(s=rn(s),!s&&Ei(r))?Or(Tn(r),0,l):r.split(s,l)):[]}var ix=Mi(function(r,s,l){return r+(l?" ":"")+Zc(s)});function sx(r,s,l){return r=Ge(r),l=l==null?0:oi($e(l),0,r.length),s=rn(s),r.slice(l,l+s.length)==s}function ox(r,s,l){var f=y.templateSettings;l&&zt(r,s,l)&&(s=n),r=Ge(r),s=ga({},s,f,xh);var g=ga({},s.imports,f.imports,xh),b=At(g),x=nc(g,b),C,O,N=0,H=s.interpolate||To,F="__p += '",G=ic((s.escape||To).source+"|"+H.source+"|"+(H===Fd?Dv:To).source+"|"+(s.evaluate||To).source+"|$","g"),ae="//# sourceURL="+(Qe.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++g2+"]")+`
`;r.replace(G,function(ge,Oe,Ue,on,Ft,an){return Ue||(Ue=on),F+=r.slice(N,an).replace(qv,M2),Oe&&(C=!0,F+=`' +
__e(`+Oe+`) +
'`),Ft&&(O=!0,F+=`';
`+Ft+`;
__p += '`),Ue&&(F+=`' +
((__t = (`+Ue+`)) == null ? '' : __t) +
'`),N=an+ge.length,ge}),F+=`';
`;var pe=Qe.call(s,"variable")&&s.variable;if(!pe)F=`with (obj) {
`+F+`
}
`;else if(Uv.test(pe))throw new be(u);F=(O?F.replace(wv,""):F).replace(xv,"$1").replace($v,"$1;"),F="function("+(pe||"obj")+`) {
`+(pe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(C?", __e = _.escape":"")+(O?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+F+`return __p
}`;var Ce=pp(function(){return Ze(b,ae+"return "+F).apply(n,x)});if(Ce.source=F,Hc(Ce))throw Ce;return Ce}function ax(r){return Ge(r).toLowerCase()}function lx(r){return Ge(r).toUpperCase()}function cx(r,s,l){if(r=Ge(r),r&&(l||s===n))return $f(r);if(!r||!(s=rn(s)))return r;var f=Tn(r),g=Tn(s),b=kf(f,g),x=Cf(f,g)+1;return Or(f,b,x).join("")}function ux(r,s,l){if(r=Ge(r),r&&(l||s===n))return r.slice(0,Ef(r)+1);if(!r||!(s=rn(s)))return r;var f=Tn(r),g=Cf(f,Tn(s))+1;return Or(f,0,g).join("")}function dx(r,s,l){if(r=Ge(r),r&&(l||s===n))return r.replace(Hl,"");if(!r||!(s=rn(s)))return r;var f=Tn(r),g=kf(f,Tn(s));return Or(f,g).join("")}function fx(r,s){var l=V,f=ie;if(pt(s)){var g="separator"in s?s.separator:g;l="length"in s?$e(s.length):l,f="omission"in s?rn(s.omission):f}r=Ge(r);var b=r.length;if(Ei(r)){var x=Tn(r);b=x.length}if(l>=b)return r;var C=l-Ti(f);if(C<1)return f;var O=x?Or(x,0,C).join(""):r.slice(0,C);if(g===n)return O+f;if(x&&(C+=O.length-C),zc(g)){if(r.slice(C).search(g)){var N,H=O;for(g.global||(g=ic(g.source,Ge(Wd.exec(g))+"g")),g.lastIndex=0;N=g.exec(H);)var F=N.index;O=O.slice(0,F===n?C:F)}}else if(r.indexOf(rn(g),C)!=C){var G=O.lastIndexOf(g);G>-1&&(O=O.slice(0,G))}return O+f}function hx(r){return r=Ge(r),r&&kv.test(r)?r.replace(Hd,z2):r}var px=Mi(function(r,s,l){return r+(l?" ":"")+s.toUpperCase()}),Zc=gh("toUpperCase");function hp(r,s,l){return r=Ge(r),s=l?n:s,s===n?U2(r)?Z2(r):T2(r):r.match(s)||[]}var pp=Te(function(r,s){try{return tn(r,n,s)}catch(l){return Hc(l)?l:new be(l)}}),gx=sr(function(r,s){return mn(s,function(l){l=Wn(l),rr(r,l,Dc(r[l],r))}),r});function mx(r){var s=r==null?0:r.length,l=fe();return r=s?ct(r,function(f){if(typeof f[1]!="function")throw new vn(c);return[l(f[0]),f[1]]}):[],Te(function(f){for(var g=-1;++g<s;){var b=r[g];if(tn(b[0],this,f))return tn(b[1],this,f)}})}function vx(r){return zy(bn(r,m))}function qc(r){return function(){return r}}function yx(r,s){return r==null||r!==r?s:r}var bx=vh(),_x=vh(!0);function Yt(r){return r}function Kc(r){return Kf(typeof r=="function"?r:bn(r,m))}function wx(r){return Gf(bn(r,m))}function xx(r,s){return Qf(r,bn(s,m))}var $x=Te(function(r,s){return function(l){return Os(l,r,s)}}),kx=Te(function(r,s){return function(l){return Os(r,l,s)}});function Vc(r,s,l){var f=At(s),g=Qo(s,f);l==null&&!(pt(s)&&(g.length||!f.length))&&(l=s,s=r,r=this,g=Qo(s,At(s)));var b=!(pt(l)&&"chain"in l)||!!l.chain,x=ar(r);return mn(g,function(C){var O=s[C];r[C]=O,x&&(r.prototype[C]=function(){var N=this.__chain__;if(b||N){var H=r(this.__wrapped__),F=H.__actions__=Gt(this.__actions__);return F.push({func:O,args:arguments,thisArg:r}),H.__chain__=N,H}return O.apply(r,Sr([this.value()],arguments))})}),r}function Cx(){return Rt._===this&&(Rt._=X2),this}function Gc(){}function Sx(r){return r=$e(r),Te(function(s){return Xf(s,r)})}var Ex=Sc(ct),Tx=Sc(yf),Ax=Sc(Xl);function gp(r){return Lc(r)?Yl(Wn(r)):sb(r)}function Ix(r){return function(s){return r==null?n:ai(r,s)}}var Rx=bh(),Ox=bh(!0);function Qc(){return[]}function Xc(){return!1}function Lx(){return{}}function Px(){return""}function Mx(){return!0}function Bx(r,s){if(r=$e(r),r<1||r>Ee)return[];var l=ce,f=Pt(r,ce);s=fe(s),r-=ce;for(var g=tc(f,s);++l<r;)s(l);return g}function Ux(r){return we(r)?ct(r,Wn):sn(r)?[r]:Gt(Mh(Ge(r)))}function jx(r){var s=++G2;return Ge(r)+s}var Dx=na(function(r,s){return r+s},0),Nx=Ec("ceil"),Hx=na(function(r,s){return r/s},1),zx=Ec("floor");function Fx(r){return r&&r.length?Go(r,Yt,fc):n}function Wx(r,s){return r&&r.length?Go(r,fe(s,2),fc):n}function Zx(r){return wf(r,Yt)}function qx(r,s){return wf(r,fe(s,2))}function Kx(r){return r&&r.length?Go(r,Yt,mc):n}function Vx(r,s){return r&&r.length?Go(r,fe(s,2),mc):n}var Gx=na(function(r,s){return r*s},1),Qx=Ec("round"),Xx=na(function(r,s){return r-s},0);function Yx(r){return r&&r.length?ec(r,Yt):0}function Jx(r,s){return r&&r.length?ec(r,fe(s,2)):0}return y.after=ww,y.ary=qh,y.assign=l3,y.assignIn=op,y.assignInWith=ga,y.assignWith=c3,y.at=u3,y.before=Kh,y.bind=Dc,y.bindAll=gx,y.bindKey=Vh,y.castArray=Lw,y.chain=Fh,y.chunk=zb,y.compact=Fb,y.concat=Wb,y.cond=mx,y.conforms=vx,y.constant=qc,y.countBy=Y_,y.create=d3,y.curry=Gh,y.curryRight=Qh,y.debounce=Xh,y.defaults=f3,y.defaultsDeep=h3,y.defer=xw,y.delay=$w,y.difference=Zb,y.differenceBy=qb,y.differenceWith=Kb,y.drop=Vb,y.dropRight=Gb,y.dropRightWhile=Qb,y.dropWhile=Xb,y.fill=Yb,y.filter=ew,y.flatMap=rw,y.flatMapDeep=iw,y.flatMapDepth=sw,y.flatten=Dh,y.flattenDeep=Jb,y.flattenDepth=e_,y.flip=kw,y.flow=bx,y.flowRight=_x,y.fromPairs=t_,y.functions=_3,y.functionsIn=w3,y.groupBy=ow,y.initial=r_,y.intersection=i_,y.intersectionBy=s_,y.intersectionWith=o_,y.invert=$3,y.invertBy=k3,y.invokeMap=lw,y.iteratee=Kc,y.keyBy=cw,y.keys=At,y.keysIn=Xt,y.map=ca,y.mapKeys=S3,y.mapValues=E3,y.matches=wx,y.matchesProperty=xx,y.memoize=da,y.merge=T3,y.mergeWith=ap,y.method=$x,y.methodOf=kx,y.mixin=Vc,y.negate=fa,y.nthArg=Sx,y.omit=A3,y.omitBy=I3,y.once=Cw,y.orderBy=uw,y.over=Ex,y.overArgs=Sw,y.overEvery=Tx,y.overSome=Ax,y.partial=Nc,y.partialRight=Yh,y.partition=dw,y.pick=R3,y.pickBy=lp,y.property=gp,y.propertyOf=Ix,y.pull=u_,y.pullAll=Hh,y.pullAllBy=d_,y.pullAllWith=f_,y.pullAt=h_,y.range=Rx,y.rangeRight=Ox,y.rearg=Ew,y.reject=pw,y.remove=p_,y.rest=Tw,y.reverse=Uc,y.sampleSize=mw,y.set=L3,y.setWith=P3,y.shuffle=vw,y.slice=g_,y.sortBy=_w,y.sortedUniq=x_,y.sortedUniqBy=$_,y.split=rx,y.spread=Aw,y.tail=k_,y.take=C_,y.takeRight=S_,y.takeRightWhile=E_,y.takeWhile=T_,y.tap=F_,y.throttle=Iw,y.thru=la,y.toArray=rp,y.toPairs=cp,y.toPairsIn=up,y.toPath=Ux,y.toPlainObject=sp,y.transform=M3,y.unary=Rw,y.union=A_,y.unionBy=I_,y.unionWith=R_,y.uniq=O_,y.uniqBy=L_,y.uniqWith=P_,y.unset=B3,y.unzip=jc,y.unzipWith=zh,y.update=U3,y.updateWith=j3,y.values=ji,y.valuesIn=D3,y.without=M_,y.words=hp,y.wrap=Ow,y.xor=B_,y.xorBy=U_,y.xorWith=j_,y.zip=D_,y.zipObject=N_,y.zipObjectDeep=H_,y.zipWith=z_,y.entries=cp,y.entriesIn=up,y.extend=op,y.extendWith=ga,Vc(y,y),y.add=Dx,y.attempt=pp,y.camelCase=F3,y.capitalize=dp,y.ceil=Nx,y.clamp=N3,y.clone=Pw,y.cloneDeep=Bw,y.cloneDeepWith=Uw,y.cloneWith=Mw,y.conformsTo=jw,y.deburr=fp,y.defaultTo=yx,y.divide=Hx,y.endsWith=W3,y.eq=In,y.escape=Z3,y.escapeRegExp=q3,y.every=J_,y.find=tw,y.findIndex=Uh,y.findKey=p3,y.findLast=nw,y.findLastIndex=jh,y.findLastKey=g3,y.floor=zx,y.forEach=Wh,y.forEachRight=Zh,y.forIn=m3,y.forInRight=v3,y.forOwn=y3,y.forOwnRight=b3,y.get=Fc,y.gt=Dw,y.gte=Nw,y.has=x3,y.hasIn=Wc,y.head=Nh,y.identity=Yt,y.includes=aw,y.indexOf=n_,y.inRange=H3,y.invoke=C3,y.isArguments=ui,y.isArray=we,y.isArrayBuffer=Hw,y.isArrayLike=Qt,y.isArrayLikeObject=yt,y.isBoolean=zw,y.isBuffer=Lr,y.isDate=Fw,y.isElement=Ww,y.isEmpty=Zw,y.isEqual=qw,y.isEqualWith=Kw,y.isError=Hc,y.isFinite=Vw,y.isFunction=ar,y.isInteger=Jh,y.isLength=ha,y.isMap=ep,y.isMatch=Gw,y.isMatchWith=Qw,y.isNaN=Xw,y.isNative=Yw,y.isNil=e3,y.isNull=Jw,y.isNumber=tp,y.isObject=pt,y.isObjectLike=vt,y.isPlainObject=js,y.isRegExp=zc,y.isSafeInteger=t3,y.isSet=np,y.isString=pa,y.isSymbol=sn,y.isTypedArray=Ui,y.isUndefined=n3,y.isWeakMap=r3,y.isWeakSet=i3,y.join=a_,y.kebabCase=K3,y.last=wn,y.lastIndexOf=l_,y.lowerCase=V3,y.lowerFirst=G3,y.lt=s3,y.lte=o3,y.max=Fx,y.maxBy=Wx,y.mean=Zx,y.meanBy=qx,y.min=Kx,y.minBy=Vx,y.stubArray=Qc,y.stubFalse=Xc,y.stubObject=Lx,y.stubString=Px,y.stubTrue=Mx,y.multiply=Gx,y.nth=c_,y.noConflict=Cx,y.noop=Gc,y.now=ua,y.pad=Q3,y.padEnd=X3,y.padStart=Y3,y.parseInt=J3,y.random=z3,y.reduce=fw,y.reduceRight=hw,y.repeat=ex,y.replace=tx,y.result=O3,y.round=Qx,y.runInContext=R,y.sample=gw,y.size=yw,y.snakeCase=nx,y.some=bw,y.sortedIndex=m_,y.sortedIndexBy=v_,y.sortedIndexOf=y_,y.sortedLastIndex=b_,y.sortedLastIndexBy=__,y.sortedLastIndexOf=w_,y.startCase=ix,y.startsWith=sx,y.subtract=Xx,y.sum=Yx,y.sumBy=Jx,y.template=ox,y.times=Bx,y.toFinite=lr,y.toInteger=$e,y.toLength=ip,y.toLower=ax,y.toNumber=xn,y.toSafeInteger=a3,y.toString=Ge,y.toUpper=lx,y.trim=cx,y.trimEnd=ux,y.trimStart=dx,y.truncate=fx,y.unescape=hx,y.uniqueId=jx,y.upperCase=px,y.upperFirst=Zc,y.each=Wh,y.eachRight=Zh,y.first=Nh,Vc(y,function(){var r={};return zn(y,function(s,l){Qe.call(y.prototype,l)||(r[l]=s)}),r}(),{chain:!1}),y.VERSION=i,mn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),mn(["drop","take"],function(r,s){Be.prototype[r]=function(l){l=l===n?1:St($e(l),0);var f=this.__filtered__&&!s?new Be(this):this.clone();return f.__filtered__?f.__takeCount__=Pt(l,f.__takeCount__):f.__views__.push({size:Pt(l,ce),type:r+(f.__dir__<0?"Right":"")}),f},Be.prototype[r+"Right"]=function(l){return this.reverse()[r](l).reverse()}}),mn(["filter","map","takeWhile"],function(r,s){var l=s+1,f=l==se||l==Y;Be.prototype[r]=function(g){var b=this.clone();return b.__iteratees__.push({iteratee:fe(g,3),type:l}),b.__filtered__=b.__filtered__||f,b}}),mn(["head","last"],function(r,s){var l="take"+(s?"Right":"");Be.prototype[r]=function(){return this[l](1).value()[0]}}),mn(["initial","tail"],function(r,s){var l="drop"+(s?"":"Right");Be.prototype[r]=function(){return this.__filtered__?new Be(this):this[l](1)}}),Be.prototype.compact=function(){return this.filter(Yt)},Be.prototype.find=function(r){return this.filter(r).head()},Be.prototype.findLast=function(r){return this.reverse().find(r)},Be.prototype.invokeMap=Te(function(r,s){return typeof r=="function"?new Be(this):this.map(function(l){return Os(l,r,s)})}),Be.prototype.reject=function(r){return this.filter(fa(fe(r)))},Be.prototype.slice=function(r,s){r=$e(r);var l=this;return l.__filtered__&&(r>0||s<0)?new Be(l):(r<0?l=l.takeRight(-r):r&&(l=l.drop(r)),s!==n&&(s=$e(s),l=s<0?l.dropRight(-s):l.take(s-r)),l)},Be.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Be.prototype.toArray=function(){return this.take(ce)},zn(Be.prototype,function(r,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),g=y[f?"take"+(s=="last"?"Right":""):s],b=f||/^find/.test(s);g&&(y.prototype[s]=function(){var x=this.__wrapped__,C=f?[1]:arguments,O=x instanceof Be,N=C[0],H=O||we(x),F=function(Oe){var Ue=g.apply(y,Sr([Oe],C));return f&&G?Ue[0]:Ue};H&&l&&typeof N=="function"&&N.length!=1&&(O=H=!1);var G=this.__chain__,ae=!!this.__actions__.length,pe=b&&!G,Ce=O&&!ae;if(!b&&H){x=Ce?x:new Be(this);var ge=r.apply(x,C);return ge.__actions__.push({func:la,args:[F],thisArg:n}),new yn(ge,G)}return pe&&Ce?r.apply(this,C):(ge=this.thru(F),pe?f?ge.value()[0]:ge.value():ge)})}),mn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Po[r],l=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var g=arguments;if(f&&!this.__chain__){var b=this.value();return s.apply(we(b)?b:[],g)}return this[l](function(x){return s.apply(we(x)?x:[],g)})}}),zn(Be.prototype,function(r,s){var l=y[s];if(l){var f=l.name+"";Qe.call(Oi,f)||(Oi[f]=[]),Oi[f].push({name:s,func:l})}}),Oi[ta(n,E).name]=[{name:"wrapper",func:n}],Be.prototype.clone=hy,Be.prototype.reverse=py,Be.prototype.value=gy,y.prototype.at=W_,y.prototype.chain=Z_,y.prototype.commit=q_,y.prototype.next=K_,y.prototype.plant=G_,y.prototype.reverse=Q_,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=X_,y.prototype.first=y.prototype.head,Cs&&(y.prototype[Cs]=V_),y},Ai=q2();ni?((ni.exports=Ai)._=Ai,Kl._=Ai):Rt._=Ai}).call(fr)})(ja,ja.exports);var k4=ja.exports;const C4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),bg=(e={})=>(()=>{const t=C4();return Xe(t,e,!0,!0),t})(),S4=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),E4=P('<span class="inline-block h-4 w-4 text-gray-700">'),vo=e=>{const[t,n]=xe(!1),i=()=>n(o=>!o);return(()=>{const o=S4(),a=o.firstChild,c=a.firstChild,u=c.firstChild,d=c.nextSibling;return I(c,_(le,{get when(){return e.icon},keyed:!0,children:p=>(()=>{const h=E4();return I(h,p),h})()}),u),I(u,()=>e.name),d.$$click=()=>i(),I(d,_(bg,{})),I(o,_(le,{get when(){return t()},get children(){return e.settings()}}),null),o})()};wt(["click"]);const T4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Zu=(e={})=>(()=>{const t=T4();return Xe(t,e,!0,!0),t})();var A4=typeof fr=="object"&&fr&&fr.Object===Object&&fr,_g=A4,I4=_g,R4=typeof self=="object"&&self&&self.Object===Object&&self,O4=I4||R4||Function("return this")(),Nn=O4,L4=Nn,P4=L4.Symbol,ls=P4,kp=ls,wg=Object.prototype,M4=wg.hasOwnProperty,B4=wg.toString,Ds=kp?kp.toStringTag:void 0;function U4(e){var t=M4.call(e,Ds),n=e[Ds];try{e[Ds]=void 0;var i=!0}catch{}var o=B4.call(e);return i&&(t?e[Ds]=n:delete e[Ds]),o}var j4=U4,D4=Object.prototype,N4=D4.toString;function H4(e){return N4.call(e)}var z4=H4,Cp=ls,F4=j4,W4=z4,Z4="[object Null]",q4="[object Undefined]",Sp=Cp?Cp.toStringTag:void 0;function K4(e){return e==null?e===void 0?q4:Z4:Sp&&Sp in Object(e)?F4(e):W4(e)}var cs=K4;function V4(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Qn=V4,G4=cs,Q4=Qn,X4="[object AsyncFunction]",Y4="[object Function]",J4="[object GeneratorFunction]",e5="[object Proxy]";function t5(e){if(!Q4(e))return!1;var t=G4(e);return t==Y4||t==J4||t==X4||t==e5}var xg=t5,n5=Nn,r5=n5["__core-js_shared__"],i5=r5,Yc=i5,Ep=function(){var e=/[^.]+$/.exec(Yc&&Yc.keys&&Yc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function s5(e){return!!Ep&&Ep in e}var o5=s5,a5=Function.prototype,l5=a5.toString;function c5(e){if(e!=null){try{return l5.call(e)}catch{}try{return e+""}catch{}}return""}var $g=c5,u5=xg,d5=o5,f5=Qn,h5=$g,p5=/[\\^$.*+?()[\]{}|]/g,g5=/^\[object .+?Constructor\]$/,m5=Function.prototype,v5=Object.prototype,y5=m5.toString,b5=v5.hasOwnProperty,_5=RegExp("^"+y5.call(b5).replace(p5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function w5(e){if(!f5(e)||d5(e))return!1;var t=u5(e)?_5:g5;return t.test(h5(e))}var x5=w5;function $5(e,t){return e?.[t]}var k5=$5,C5=x5,S5=k5;function E5(e,t){var n=S5(e,t);return C5(n)?n:void 0}var wi=E5,T5=wi,A5=T5(Object,"create"),hl=A5,Tp=hl;function I5(){this.__data__=Tp?Tp(null):{},this.size=0}var R5=I5;function O5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var L5=O5,P5=hl,M5="__lodash_hash_undefined__",B5=Object.prototype,U5=B5.hasOwnProperty;function j5(e){var t=this.__data__;if(P5){var n=t[e];return n===M5?void 0:n}return U5.call(t,e)?t[e]:void 0}var D5=j5,N5=hl,H5=Object.prototype,z5=H5.hasOwnProperty;function F5(e){var t=this.__data__;return N5?t[e]!==void 0:z5.call(t,e)}var W5=F5,Z5=hl,q5="__lodash_hash_undefined__";function K5(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Z5&&t===void 0?q5:t,this}var V5=K5,G5=R5,Q5=L5,X5=D5,Y5=W5,J5=V5;function us(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}us.prototype.clear=G5;us.prototype.delete=Q5;us.prototype.get=X5;us.prototype.has=Y5;us.prototype.set=J5;var e$=us;function t$(){this.__data__=[],this.size=0}var n$=t$;function r$(e,t){return e===t||e!==e&&t!==t}var qu=r$,i$=qu;function s$(e,t){for(var n=e.length;n--;)if(i$(e[n][0],t))return n;return-1}var pl=s$,o$=pl,a$=Array.prototype,l$=a$.splice;function c$(e){var t=this.__data__,n=o$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():l$.call(t,n,1),--this.size,!0}var u$=c$,d$=pl;function f$(e){var t=this.__data__,n=d$(t,e);return n<0?void 0:t[n][1]}var h$=f$,p$=pl;function g$(e){return p$(this.__data__,e)>-1}var m$=g$,v$=pl;function y$(e,t){var n=this.__data__,i=v$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var b$=y$,_$=n$,w$=u$,x$=h$,$$=m$,k$=b$;function ds(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ds.prototype.clear=_$;ds.prototype.delete=w$;ds.prototype.get=x$;ds.prototype.has=$$;ds.prototype.set=k$;var gl=ds,C$=wi,S$=Nn,E$=C$(S$,"Map"),Ku=E$,Ap=e$,T$=gl,A$=Ku;function I$(){this.size=0,this.__data__={hash:new Ap,map:new(A$||T$),string:new Ap}}var R$=I$;function O$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var L$=O$,P$=L$;function M$(e,t){var n=e.__data__;return P$(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ml=M$,B$=ml;function U$(e){var t=B$(this,e).delete(e);return this.size-=t?1:0,t}var j$=U$,D$=ml;function N$(e){return D$(this,e).get(e)}var H$=N$,z$=ml;function F$(e){return z$(this,e).has(e)}var W$=F$,Z$=ml;function q$(e,t){var n=Z$(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var K$=q$,V$=R$,G$=j$,Q$=H$,X$=W$,Y$=K$;function fs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}fs.prototype.clear=V$;fs.prototype.delete=G$;fs.prototype.get=Q$;fs.prototype.has=X$;fs.prototype.set=Y$;var Vu=fs,J$="__lodash_hash_undefined__";function e6(e){return this.__data__.set(e,J$),this}var t6=e6;function n6(e){return this.__data__.has(e)}var r6=n6,i6=Vu,s6=t6,o6=r6;function Da(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new i6;++t<n;)this.add(e[t])}Da.prototype.add=Da.prototype.push=s6;Da.prototype.has=o6;var kg=Da;function a6(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var l6=a6;function c6(e){return e!==e}var u6=c6;function d6(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var f6=d6,h6=l6,p6=u6,g6=f6;function m6(e,t,n){return t===t?g6(e,t,n):h6(e,p6,n)}var v6=m6,y6=v6;function b6(e,t){var n=e==null?0:e.length;return!!n&&y6(e,t,0)>-1}var _6=b6;function w6(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var x6=w6;function $6(e,t){return e.has(t)}var Cg=$6,k6=wi,C6=Nn,S6=k6(C6,"Set"),Sg=S6;function E6(){}var T6=E6;function A6(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Gu=A6,Jc=Sg,I6=T6,R6=Gu,O6=1/0,L6=Jc&&1/R6(new Jc([,-0]))[1]==O6?function(e){return new Jc(e)}:I6,P6=L6,M6=kg,B6=_6,U6=x6,j6=Cg,D6=P6,N6=Gu,H6=200;function z6(e,t,n){var i=-1,o=B6,a=e.length,c=!0,u=[],d=u;if(n)c=!1,o=U6;else if(a>=H6){var p=t?null:D6(e);if(p)return N6(p);c=!1,o=j6,d=new M6}else d=t?[]:u;e:for(;++i<a;){var h=e[i],m=t?t(h):h;if(h=n||h!==0?h:0,c&&m===m){for(var v=d.length;v--;)if(d[v]===m)continue e;t&&d.push(m),u.push(h)}else o(d,m,n)||(d!==u&&d.push(m),u.push(h))}return u}var Eg=z6,F6=Eg;function W6(e){return e&&e.length?F6(e):[]}var Z6=W6;const gr=mo(Z6),q6=P('<div class="block shrink-0 overflow-hidden border-b p-1">'),Ra=e=>(()=>{const t=q6();return I(t,()=>e.children),t})(),K6={},V6=Object.freeze(Object.defineProperty({__proto__:null,default:K6},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const De=BigInt(0),ut=BigInt(1),zr=BigInt(2),Ks=BigInt(3),Ip=BigInt(8),Ye=Object.freeze({a:De,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:ut,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),Rp=(e,t)=>(e+t/zr)/t,ma={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=Ye,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-ut*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,c=BigInt("0x100000000000000000000000000000000"),u=Rp(a*e,t),d=Rp(-i*e,t);let p=X(e-u*n-d*o,t),h=X(-u*i-d*a,t);const m=p>c,v=h>c;if(m&&(p=t-p),v&&(h=t-h),p>c||h>c)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:m,k1:p,k2neg:v,k2:h}}},Pn=32,Vi=32,G6=32,Na=Pn+1,Ha=2*Pn+1;function Op(e){const{a:t,b:n}=Ye,i=X(e*e),o=X(i*e);return X(o+t*e+n)}const va=Ye.a===De;class Qu extends Error{constructor(t){super(t)}}function Lp(e){if(!(e instanceof qe))throw new TypeError("JacobianPoint expected")}class qe{constructor(t,n,i){this.x=t,this.y=n,this.z=i}static fromAffine(t){if(!(t instanceof Ne))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(Ne.ZERO)?qe.ZERO:new qe(t.x,t.y,ut)}static toAffineBatch(t){const n=e8(t.map(i=>i.z));return t.map((i,o)=>i.toAffine(n[o]))}static normalizeZ(t){return qe.toAffineBatch(t).map(qe.fromAffine)}equals(t){Lp(t);const{x:n,y:i,z:o}=this,{x:a,y:c,z:u}=t,d=X(o*o),p=X(u*u),h=X(n*p),m=X(a*d),v=X(X(i*u)*p),w=X(X(c*o)*d);return h===m&&v===w}negate(){return new qe(this.x,X(-this.y),this.z)}double(){const{x:t,y:n,z:i}=this,o=X(t*t),a=X(n*n),c=X(a*a),u=t+a,d=X(zr*(X(u*u)-o-c)),p=X(Ks*o),h=X(p*p),m=X(h-zr*d),v=X(p*(d-m)-Ip*c),w=X(zr*n*i);return new qe(m,v,w)}add(t){Lp(t);const{x:n,y:i,z:o}=this,{x:a,y:c,z:u}=t;if(a===De||c===De)return this;if(n===De||i===De)return t;const d=X(o*o),p=X(u*u),h=X(n*p),m=X(a*d),v=X(X(i*u)*p),w=X(X(c*o)*d),$=X(m-h),S=X(w-v);if($===De)return S===De?this.double():qe.ZERO;const k=X($*$),E=X($*k),M=X(h*k),B=X(S*S-E-zr*M),A=X(S*(M-B)-v*E),T=X(o*u*$);return new qe(B,A,T)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const n=qe.ZERO;if(typeof t=="bigint"&&t===De)return n;let i=Bp(t);if(i===ut)return this;if(!va){let m=n,v=this;for(;i>De;)i&ut&&(m=m.add(v)),v=v.double(),i>>=ut;return m}let{k1neg:o,k1:a,k2neg:c,k2:u}=ma.splitScalar(i),d=n,p=n,h=this;for(;a>De||u>De;)a&ut&&(d=d.add(h)),u&ut&&(p=p.add(h)),h=h.double(),a>>=ut,u>>=ut;return o&&(d=d.negate()),c&&(p=p.negate()),p=new qe(X(p.x*ma.beta),p.y,p.z),d.add(p)}precomputeWindow(t){const n=va?128/t+1:256/t+1,i=[];let o=this,a=o;for(let c=0;c<n;c++){a=o,i.push(a);for(let u=1;u<2**(t-1);u++)a=a.add(o),i.push(a);o=a.double()}return i}wNAF(t,n){!n&&this.equals(qe.BASE)&&(n=Ne.BASE);const i=n&&n._WINDOW_SIZE||1;if(256%i)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=n&&yu.get(n);o||(o=this.precomputeWindow(i),n&&i!==1&&(o=qe.normalizeZ(o),yu.set(n,o)));let a=qe.ZERO,c=qe.BASE;const u=1+(va?128/i:256/i),d=2**(i-1),p=BigInt(2**i-1),h=2**i,m=BigInt(i);for(let v=0;v<u;v++){const w=v*d;let $=Number(t&p);t>>=m,$>d&&($-=h,t+=ut);const S=w,k=w+Math.abs($)-1,E=v%2!==0,M=$<0;$===0?c=c.add(ya(E,o[S])):a=a.add(ya(M,o[k]))}return{p:a,f:c}}multiply(t,n){let i=Bp(t),o,a;if(va){const{k1neg:c,k1:u,k2neg:d,k2:p}=ma.splitScalar(i);let{p:h,f:m}=this.wNAF(u,n),{p:v,f:w}=this.wNAF(p,n);h=ya(c,h),v=ya(d,v),v=new qe(X(v.x*ma.beta),v.y,v.z),o=h.add(v),a=m.add(w)}else{const{p:c,f:u}=this.wNAF(i,n);o=c,a=u}return qe.normalizeZ([o,a])[0]}toAffine(t){const{x:n,y:i,z:o}=this,a=this.equals(qe.ZERO);t==null&&(t=a?Ip:hs(o));const c=t,u=X(c*c),d=X(u*c),p=X(n*u),h=X(i*d),m=X(o*c);if(a)return Ne.ZERO;if(m!==ut)throw new Error("invZ was invalid");return new Ne(p,h)}}qe.BASE=new qe(Ye.Gx,Ye.Gy,ut);qe.ZERO=new qe(De,ut,De);function ya(e,t){const n=t.negate();return e?n:t}const yu=new WeakMap;class Ne{constructor(t,n){this.x=t,this.y=n}_setWindowSize(t){this._WINDOW_SIZE=t,yu.delete(this)}hasEvenY(){return this.y%zr===De}static fromCompressedHex(t){const n=t.length===32,i=fn(n?t:t.subarray(1));if(!Oa(i))throw new Error("Point is not on curve");const o=Op(i);let a=J6(o);const c=(a&ut)===ut;n?c&&(a=X(-a)):(t[0]&1)===1!==c&&(a=X(-a));const u=new Ne(i,a);return u.assertValidity(),u}static fromUncompressedHex(t){const n=fn(t.subarray(1,Pn+1)),i=fn(t.subarray(Pn+1,Pn*2+1)),o=new Ne(n,i);return o.assertValidity(),o}static fromHex(t){const n=qn(t),i=n.length,o=n[0];if(i===Pn)return this.fromCompressedHex(n);if(i===Na&&(o===2||o===3))return this.fromCompressedHex(n);if(i===Ha&&o===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Na} compressed bytes or ${Ha} uncompressed bytes, not ${i}`)}static fromPrivateKey(t){return Ne.BASE.multiply(vi(t))}static fromSignature(t,n,i){const{r:o,s:a}=Tg(n);if(![0,1,2,3].includes(i))throw new Error("Cannot recover: invalid recovery bit");const c=Xu(qn(t)),{n:u}=Ye,d=i===2||i===3?o+u:o,p=hs(d,u),h=X(-c*p,u),m=X(a*p,u),v=i&1?"03":"02",w=Ne.fromHex(v+Wr(d)),$=Ne.BASE.multiplyAndAddUnsafe(w,h,m);if(!$)throw new Error("Cannot recover signature: point at infinify");return $.assertValidity(),$}toRawBytes(t=!1){return Zr(this.toHex(t))}toHex(t=!1){const n=Wr(this.x);return t?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${Wr(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:n,y:i}=this;if(!Oa(n)||!Oa(i))throw new Error(t);const o=X(i*i),a=Op(n);if(X(o-a)!==De)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new Ne(this.x,X(-this.y))}double(){return qe.fromAffine(this).double().toAffine()}add(t){return qe.fromAffine(this).add(qe.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return qe.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,n,i){const o=qe.fromAffine(this),a=n===De||n===ut||this!==Ne.BASE?o.multiplyUnsafe(n):o.multiply(n),c=qe.fromAffine(t).multiplyUnsafe(i),u=a.add(c);return u.equals(qe.ZERO)?void 0:u.toAffine()}}Ne.BASE=new Ne(Ye.Gx,Ye.Gy);Ne.ZERO=new Ne(De,De);function Pp(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function Mp(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${Gi(e)}`);const t=e[1],n=e.subarray(2,t+2);if(!t||n.length!==t)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:fn(n),left:e.subarray(t+2)}}function Q6(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${Gi(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:n}=Mp(e.subarray(2)),{data:i,left:o}=Mp(n);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${Gi(o)}`);return{r:t,s:i}}class mr{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromCompact(t){const n=t instanceof Uint8Array,i="Signature.fromCompact";if(typeof t!="string"&&!n)throw new TypeError(`${i}: Expected string or Uint8Array`);const o=n?Gi(t):t;if(o.length!==128)throw new Error(`${i}: Expected 64-byte hex`);return new mr(za(o.slice(0,64)),za(o.slice(64,128)))}static fromDER(t){const n=t instanceof Uint8Array;if(typeof t!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:i,s:o}=Q6(n?t:Zr(t));return new mr(i,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:n}=this;if(!Xi(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Xi(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=Ye.n>>ut;return this.s>t}normalizeS(){return this.hasHighS()?new mr(this.r,X(-this.s,Ye.n)):this}toDERRawBytes(){return Zr(this.toDERHex())}toDERHex(){const t=Pp(Ns(this.s)),n=Pp(Ns(this.r)),i=t.length/2,o=n.length/2,a=Ns(i),c=Ns(o);return`30${Ns(o+i+4)}02${c}${n}02${a}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return Zr(this.toCompactHex())}toCompactHex(){return Wr(this.r)+Wr(this.s)}}function Dr(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}const X6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Gi(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let n=0;n<e.length;n++)t+=X6[e[n]];return t}const Y6=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function Wr(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(De<=e&&e<Y6))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function Qi(e){const t=Zr(Wr(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function Ns(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function za(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function Zr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}function fn(e){return za(Gi(e))}function qn(e){return e instanceof Uint8Array?Uint8Array.from(e):Zr(e)}function Bp(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&Xi(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function X(e,t=Ye.P){const n=e%t;return n>=De?n:t+n}function $n(e,t){const{P:n}=Ye;let i=e;for(;t-- >De;)i*=i,i%=n;return i}function J6(e){const{P:t}=Ye,n=BigInt(6),i=BigInt(11),o=BigInt(22),a=BigInt(23),c=BigInt(44),u=BigInt(88),d=e*e*e%t,p=d*d*e%t,h=$n(p,Ks)*p%t,m=$n(h,Ks)*p%t,v=$n(m,zr)*d%t,w=$n(v,i)*v%t,$=$n(w,o)*w%t,S=$n($,c)*$%t,k=$n(S,u)*S%t,E=$n(k,c)*$%t,M=$n(E,Ks)*p%t,B=$n(M,a)*w%t,A=$n(B,n)*d%t,T=$n(A,zr);if(T*T%t!==e)throw new Error("Cannot find square root");return T}function hs(e,t=Ye.P){if(e===De||t<=De)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=X(e,t),i=t,o=De,a=ut;for(;n!==De;){const u=i/n,d=i%n,p=o-a*u;i=n,n=d,o=a,a=p}if(i!==ut)throw new Error("invert: does not exist");return X(o,t)}function e8(e,t=Ye.P){const n=new Array(e.length),i=e.reduce((a,c,u)=>c===De?a:(n[u]=a,X(a*c,t)),ut),o=hs(i,t);return e.reduceRight((a,c,u)=>c===De?a:(n[u]=X(a*n[u],t),X(a*c,t)),o),n}function t8(e){const t=e.length*8-Vi*8,n=fn(e);return t>0?n>>BigInt(t):n}function Xu(e,t=!1){const n=t8(e);if(t)return n;const{n:i}=Ye;return n>=i?n-i:n}let Fi,Vs;class n8{constructor(t,n){if(this.hashLen=t,this.qByteLen=n,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return Ae.hmacSha256(this.k,...t)}hmacSync(...t){return Vs(this.k,...t)}checkSync(){if(typeof Vs!="function")throw new Qu("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const i=this.v.slice();n.push(i),t+=this.v.length}return Dr(...n)}generateSync(){this.checkSync(),this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const i=this.v.slice();n.push(i),t+=this.v.length}return Dr(...n)}}function Xi(e){return De<e&&e<Ye.n}function Oa(e){return De<e&&e<Ye.P}function r8(e,t,n,i=!0){const{n:o}=Ye,a=Xu(e,!0);if(!Xi(a))return;const c=hs(a,o),u=Ne.BASE.multiply(a),d=X(u.x,o);if(d===De)return;const p=X(c*X(t+n*d,o),o);if(p===De)return;let h=new mr(d,p),m=(u.x===h.r?0:2)|Number(u.y&ut);return i&&h.hasHighS()&&(h=h.normalizeS(),m^=1),{sig:h,recovery:m}}function vi(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*Vi)throw new Error("Expected 32 bytes of private key");t=za(e)}else if(e instanceof Uint8Array){if(e.length!==Vi)throw new Error("Expected 32 bytes of private key");t=fn(e)}else throw new TypeError("Expected valid private key");if(!Xi(t))throw new Error("Expected private key: 0 < key < n");return t}function Yu(e){return e instanceof Ne?(e.assertValidity(),e):Ne.fromHex(e)}function Tg(e){if(e instanceof mr)return e.assertValidity(),e;try{return mr.fromDER(e)}catch{return mr.fromCompact(e)}}function i8(e,t=!1){return Ne.fromPrivateKey(e).toRawBytes(t)}function Up(e){const t=e instanceof Uint8Array,n=typeof e=="string",i=(t||n)&&e.length;return t?i===Na||i===Ha:n?i===Na*2||i===Ha*2:e instanceof Ne}function Ag(e,t,n=!1){if(Up(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Up(t))throw new TypeError("getSharedSecret: second arg must be public key");const i=Yu(t);return i.assertValidity(),i.multiply(vi(e)).toRawBytes(n)}function Ig(e){const t=e.length>Pn?e.slice(0,Pn):e;return fn(t)}function s8(e){const t=Ig(e),n=X(t,Ye.n);return Rg(n<De?t:n)}function Rg(e){return Qi(e)}function o8(e,t,n){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const i=qn(e),o=vi(t),a=[Rg(o),s8(i)];if(n!=null){n===!0&&(n=Ae.randomBytes(Pn));const d=qn(n);if(d.length!==Pn)throw new Error(`sign: Expected ${Pn} bytes of extra data`);a.push(d)}const c=Dr(...a),u=Ig(i);return{seed:c,m:u,d:o}}function a8(e,t){const{sig:n,recovery:i}=e,{der:o,recovered:a}=Object.assign({canonical:!0,der:!0},t),c=o?n.toDERRawBytes():n.toCompactRawBytes();return a?[c,i]:c}function l8(e,t,n={}){const{seed:i,m:o,d:a}=o8(e,t,n.extraEntropy),c=new n8(G6,Vi);c.reseedSync(i);let u;for(;!(u=r8(c.generateSync(),o,a,n.canonical));)c.reseedSync();return a8(u,n)}const c8={strict:!0};function u8(e,t,n,i=c8){let o;try{o=Tg(e),t=qn(t)}catch{return!1}const{r:a,s:c}=o;if(i.strict&&o.hasHighS())return!1;const u=Xu(t);let d;try{d=Yu(n)}catch{return!1}const{n:p}=Ye,h=hs(c,p),m=X(u*h,p),v=X(a*h,p),w=Ne.BASE.multiplyAndAddUnsafe(d,m,v);return w?X(w.x,p)===a:!1}function Fa(e){return X(fn(e),Ye.n)}class Yi{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromHex(t){const n=qn(t);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);const i=fn(n.subarray(0,32)),o=fn(n.subarray(32,64));return new Yi(i,o)}assertValidity(){const{r:t,s:n}=this;if(!Oa(t)||!Xi(n))throw new Error("Invalid signature")}toHex(){return Wr(this.r)+Wr(this.s)}toRawBytes(){return Zr(this.toHex())}}function d8(e){return Ne.fromPrivateKey(e).toRawX()}class Og{constructor(t,n,i=Ae.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=qn(t);const{x:o,scalar:a}=this.getScalar(vi(n));if(this.px=o,this.d=a,this.rand=qn(i),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const n=Ne.fromPrivateKey(t),i=n.hasEvenY()?t:Ye.n-t;return{point:n,scalar:i,x:n.toRawX()}}initNonce(t,n){return Qi(t^fn(n))}finalizeNonce(t){const n=X(fn(t),Ye.n);if(n===De)throw new Error("sign: Creation of signature failed. k is zero");const{point:i,x:o,scalar:a}=this.getScalar(n);return{R:i,rx:o,k:a}}finalizeSig(t,n,i,o){return new Yi(t.x,X(n+i*o,Ye.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:n,px:i,rand:o}=this,a=Ae.taggedHash,c=this.initNonce(n,await a(jr.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(await a(jr.nonce,c,i,t)),h=Fa(await a(jr.challenge,d,i,t)),m=this.finalizeSig(u,p,h,n);return await Mg(m,t,i)||this.error(),m}calcSync(){const{m:t,d:n,px:i,rand:o}=this,a=Ae.taggedHashSync,c=this.initNonce(n,a(jr.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(a(jr.nonce,c,i,t)),h=Fa(a(jr.challenge,d,i,t)),m=this.finalizeSig(u,p,h,n);return Bg(m,t,i)||this.error(),m}}async function f8(e,t,n){return new Og(e,t,n).calc()}function h8(e,t,n){return new Og(e,t,n).calcSync()}function Lg(e,t,n){const i=e instanceof Yi,o=i?e:Yi.fromHex(e);return i&&o.assertValidity(),{...o,m:qn(t),P:Yu(n)}}function Pg(e,t,n,i){const o=Ne.BASE.multiplyAndAddUnsafe(t,vi(n),X(-i,Ye.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function Mg(e,t,n){try{const{r:i,s:o,m:a,P:c}=Lg(e,t,n),u=Fa(await Ae.taggedHash(jr.challenge,Qi(i),c.toRawX(),a));return Pg(i,c,o,u)}catch{return!1}}function Bg(e,t,n){try{const{r:i,s:o,m:a,P:c}=Lg(e,t,n),u=Fa(Ae.taggedHashSync(jr.challenge,Qi(i),c.toRawX(),a));return Pg(i,c,o,u)}catch(i){if(i instanceof Qu)throw i;return!1}}const vl={Signature:Yi,getPublicKey:d8,sign:f8,verify:Mg,signSync:h8,verifySync:Bg};Ne.BASE._setWindowSize(8);const ln={node:V6,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},jr={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},ba={},Ae={bytesToHex:Gi,hexToBytes:Zr,concatBytes:Dr,mod:X,invert:hs,isValidPrivateKey(e){try{return vi(e),!0}catch{return!1}},_bigintTo32Bytes:Qi,_normalizePrivateKey:vi,hashToPrivateKey:e=>{e=qn(e);const t=Vi+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const n=X(fn(e),Ye.n-ut)+ut;return Qi(n)},randomBytes:(e=32)=>{if(ln.web)return ln.web.getRandomValues(new Uint8Array(e));if(ln.node){const{randomBytes:t}=ln.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>Ae.hashToPrivateKey(Ae.randomBytes(Vi+8)),precompute(e=8,t=Ne.BASE){const n=t===Ne.BASE?t:new Ne(t.x,t.y);return n._setWindowSize(e),n.multiply(Ks),n},sha256:async(...e)=>{if(ln.web){const t=await ln.web.subtle.digest("SHA-256",Dr(...e));return new Uint8Array(t)}else if(ln.node){const{createHash:t}=ln.node,n=t("sha256");return e.forEach(i=>n.update(i)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(ln.web){const n=await ln.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),i=Dr(...t),o=await ln.web.subtle.sign("HMAC",n,i);return new Uint8Array(o)}else if(ln.node){const{createHmac:n}=ln.node,i=n("sha256",e);return t.forEach(o=>i.update(o)),Uint8Array.from(i.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let n=ba[e];if(n===void 0){const i=await Ae.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));n=Dr(i,i),ba[e]=n}return Ae.sha256(n,...t)},taggedHashSync:(e,...t)=>{if(typeof Fi!="function")throw new Qu("sha256Sync is undefined, you need to set it");let n=ba[e];if(n===void 0){const i=Fi(Uint8Array.from(e,o=>o.charCodeAt(0)));n=Dr(i,i),ba[e]=n}return Fi(n,...t)},_JacobianPoint:qe};Object.defineProperties(Ae,{sha256Sync:{configurable:!1,get(){return Fi},set(e){Fi||(Fi=e)}},hmacSha256Sync:{configurable:!1,get(){return Vs},set(e){Vs||(Vs=e)}}});function bu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function p8(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Ug(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function g8(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");bu(e.outputLen),bu(e.blockLen)}function m8(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function v8(e,t){Ug(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const hi={number:bu,bool:p8,bytes:Ug,hash:g8,exists:m8,output:v8},Ws={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},y8=Object.freeze(Object.defineProperty({__proto__:null,crypto:Ws},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const b8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),_8=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),On=(e,t)=>e<<32-t|e>>>t,jg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!jg)throw new Error("Non little-endian hardware is not supported");const w8=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Dg(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=w8[e[n]];return t}function Ng(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const Hg=async()=>{};async function x8(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await Hg(),i+=a)}}function Ju(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function yo(e){if(typeof e=="string"&&(e=Ju(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function Zs(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class ed{clone(){return this._cloneInto()}}const $8=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function k8(e,t){if(t!==void 0&&(typeof t!="object"||!$8(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function yl(e){const t=i=>e().update(yo(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function C8(e){const t=(i,o)=>e(o).update(yo(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function zg(e=32){if(Ws.web)return Ws.web.getRandomValues(new Uint8Array(e));if(Ws.node)return new Uint8Array(Ws.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}const S8=Object.freeze(Object.defineProperty({__proto__:null,Hash:ed,asyncLoop:x8,bytesToHex:Dg,checkOpts:k8,concatBytes:Zs,createView:gi,hexToBytes:Ng,isLE:jg,nextTick:Hg,randomBytes:zg,rotr:On,toBytes:yo,u32:_8,u8:b8,utf8ToBytes:Ju,wrapConstructor:yl,wrapConstructorWithOpts:C8},Symbol.toStringTag,{value:"Module"}));function E8(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,p=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+p,u,i)}let Fg=class extends ed{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){hi.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=yo(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=gi(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){hi.exists(this),hi.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let m=c;m<o;m++)n[m]=0;E8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<p;m++)u.setUint32(4*m,h[m],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}};const T8=(e,t,n)=>e&t^~e&n,A8=(e,t,n)=>e&t^e&n^t&n,I8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Pr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Mr=new Uint32Array(64);class Wg extends Fg{constructor(){super(64,32,8,!1),this.A=Pr[0]|0,this.B=Pr[1]|0,this.C=Pr[2]|0,this.D=Pr[3]|0,this.E=Pr[4]|0,this.F=Pr[5]|0,this.G=Pr[6]|0,this.H=Pr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:c,G:u,H:d}=this;return[t,n,i,o,a,c,u,d]}set(t,n,i,o,a,c,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=c|0,this.G=u|0,this.H=d|0}process(t,n){for(let m=0;m<16;m++,n+=4)Mr[m]=t.getUint32(n,!1);for(let m=16;m<64;m++){const v=Mr[m-15],w=Mr[m-2],$=On(v,7)^On(v,18)^v>>>3,S=On(w,17)^On(w,19)^w>>>10;Mr[m]=S+Mr[m-7]+$+Mr[m-16]|0}let{A:i,B:o,C:a,D:c,E:u,F:d,G:p,H:h}=this;for(let m=0;m<64;m++){const v=On(u,6)^On(u,11)^On(u,25),w=h+v+T8(u,d,p)+I8[m]+Mr[m]|0,S=(On(i,2)^On(i,13)^On(i,22))+A8(i,o,a)|0;h=p,p=d,d=u,u=c+w|0,c=a,a=o,o=i,i=w+S|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,c=c+this.D|0,u=u+this.E|0,d=d+this.F|0,p=p+this.G|0,h=h+this.H|0,this.set(i,o,a,c,u,d,p,h)}roundClean(){Mr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class R8 extends Wg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const _r=yl(()=>new Wg),O8=yl(()=>new R8),L8=Object.freeze(Object.defineProperty({__proto__:null,sha224:O8,sha256:_r},Symbol.toStringTag,{value:"Module"}));/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Yr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Hn(...e){const t=(o,a)=>c=>o(a(c)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Xn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Yr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Yn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function bo(e,t="="){if(Yr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function Zg(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function jp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(c=>{if(Yr(c),c<0||c>=t)throw new Error(`Wrong integer: ${c}`)});;){let c=0,u=!0;for(let d=i;d<a.length;d++){const p=a[d],h=t*c+p;if(!Number.isSafeInteger(h)||t*c/t!==c||h-p!==t*c)throw new Error("convertRadix: carry overflow");if(c=h%n,a[d]=Math.floor(h/n),!Number.isSafeInteger(a[d])||a[d]*n+c!==h)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(c),u)break}for(let c=0;c<e.length-1&&e[c]===0;c++)o.push(0);return o.reverse()}const qg=(e,t)=>t?qg(t,e%t):e,Wa=(e,t)=>e+(t-qg(e,t));function _u(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Wa(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Wa(t,n)}`);let o=0,a=0;const c=2**n-1,u=[];for(const d of e){if(Yr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&c)>>>0);o&=2**a-1}if(o=o<<n-a&c,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function Kg(e){return Yr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return jp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(jp(t,e,2**8))}}}function wr(e,t=!1){if(Yr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Wa(8,e)>32||Wa(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return _u(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(_u(n,e,8,t))}}}function Dp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function Vg(e,t){if(Yr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let c=0;c<e;c++)if(o[c]!==a[c])throw new Error("Invalid checksum");return i}}}const P8={alphabet:Xn,chain:Hn,checksum:Vg,radix:Kg,radix2:wr,join:Yn,padding:bo},Gg=Hn(wr(4),Xn("0123456789ABCDEF"),Yn("")),Qg=Hn(wr(5),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),bo(5),Yn("")),M8=Hn(wr(5),Xn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),bo(5),Yn("")),B8=Hn(wr(5),Xn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Yn(""),Zg(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Ji=Hn(wr(6),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),bo(6),Yn("")),Xg=Hn(wr(6),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),bo(6),Yn("")),td=e=>Hn(Kg(58),Xn(e),Yn("")),Js=td("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),U8=td("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),j8=td("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Np=[0,2,3,5,6,7,9,10,11],Yg={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Js.encode(i).padStart(Np[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Np.indexOf(i.length),a=Js.decode(i);for(let c=0;c<a.length-o;c++)if(a[c]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},Jg=e=>Hn(Vg(4,t=>e(e(t))),Js),wu=Hn(Xn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Yn("")),Hp=[996825010,642813549,513874426,1027748829,705979059];function Hs(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Hp.length;i++)(t>>i&1)===1&&(n^=Hp[i]);return n}function zp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const c=e.charCodeAt(a);if(c<33||c>126)throw new Error(`Invalid prefix (${e})`);o=Hs(o)^c>>5}o=Hs(o);for(let a=0;a<i;a++)o=Hs(o)^e.charCodeAt(a)&31;for(let a of t)o=Hs(o)^a;for(let a=0;a<6;a++)o=Hs(o);return o^=n,wu.encode(_u([o%2**30],30,5,!1))}function e1(e){const t=e==="bech32"?1:734539939,n=wr(5),i=n.decode,o=n.encode,a=Dp(i);function c(h,m,v=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(m)||m.length&&typeof m[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof m}`);const w=h.length+7+m.length;if(v!==!1&&w>v)throw new TypeError(`Length ${w} exceeds limit ${v}`);return h=h.toLowerCase(),`${h}1${wu.encode(m)}${zp(h,m,t)}`}function u(h,m=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||m!==!1&&h.length>m)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${m})`);const v=h.toLowerCase();if(h!==v&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=v;const w=h.lastIndexOf("1");if(w===0||w===-1)throw new Error('Letter "1" must be present between prefix and data only');const $=h.slice(0,w),S=h.slice(w+1);if(S.length<6)throw new Error("Data must be at least 6 characters long");const k=wu.decode(S).slice(0,-6),E=zp($,k,t);if(!S.endsWith(E))throw new Error(`Invalid checksum in ${h}: expected "${E}"`);return{prefix:$,words:k}}const d=Dp(u);function p(h){const{prefix:m,words:v}=u(h,!1);return{prefix:m,words:v,bytes:i(v)}}return{encode:c,decode:u,decodeToBytes:p,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Wt=e1("bech32"),D8=e1("bech32m"),t1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},n1=Hn(wr(4),Xn("0123456789abcdef"),Yn(""),Zg(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),eo={utf8:t1,hex:n1,base16:Gg,base32:Qg,base64:Ji,base64url:Xg,base58:Js,base58xmr:Yg},r1=`Invalid encoding type. Available types: ${Object.keys(eo).join(", ")}`,i1=(e,t)=>{if(typeof e!="string"||!eo.hasOwnProperty(e))throw new TypeError(r1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return eo[e].encode(t)},N8=i1,s1=(e,t)=>{if(!eo.hasOwnProperty(e))throw new TypeError(r1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return eo[e].decode(t)},H8=s1,z8=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Yr,base16:Gg,base32:Qg,base32crockford:B8,base32hex:M8,base58:Js,base58check:Jg,base58flickr:U8,base58xmr:Yg,base58xrp:j8,base64:Ji,base64url:Xg,bech32:Wt,bech32m:D8,bytes:H8,bytesToString:i1,hex:n1,str:N8,stringToBytes:s1,utf8:t1,utils:P8},Symbol.toStringTag,{value:"Module"}));var nd={};Object.defineProperty(nd,"__esModule",{value:!0});var rd=nd.wordlist=void 0;rd=nd.wordlist=`abandon
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
`);var un={},It={};Object.defineProperty(It,"__esModule",{value:!0});It.output=It.exists=It.hash=Hi=It.bytes=It.bool=It.number=void 0;function Za(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}It.number=Za;function o1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}It.bool=o1;function id(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Hi=It.bytes=id;function a1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Za(e.outputLen),Za(e.blockLen)}It.hash=a1;function l1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}It.exists=l1;function c1(e,t){id(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}It.output=c1;const F8={number:Za,bool:o1,bytes:id,hash:a1,exists:l1,output:c1};It.default=F8;var es={},u1={},_o={};const W8=fl(y8);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=W8,n=A=>new Uint8Array(A.buffer,A.byteOffset,A.byteLength);e.u8=n;const i=A=>new Uint32Array(A.buffer,A.byteOffset,Math.floor(A.byteLength/4));e.u32=i;const o=A=>new DataView(A.buffer,A.byteOffset,A.byteLength);e.createView=o;const a=(A,T)=>A<<32-T|A>>>T;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},(A,T)=>T.toString(16).padStart(2,"0"));function u(A){if(!(A instanceof Uint8Array))throw new Error("Uint8Array expected");let T="";for(let L=0;L<A.length;L++)T+=c[A[L]];return T}e.bytesToHex=u;function d(A){if(typeof A!="string")throw new TypeError("hexToBytes: expected string, got "+typeof A);if(A.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const T=new Uint8Array(A.length/2);for(let L=0;L<T.length;L++){const D=L*2,W=A.slice(D,D+2),ne=Number.parseInt(W,16);if(Number.isNaN(ne)||ne<0)throw new Error("Invalid byte sequence");T[L]=ne}return T}e.hexToBytes=d;const p=async()=>{};e.nextTick=p;async function h(A,T,L){let D=Date.now();for(let W=0;W<A;W++){L(W);const ne=Date.now()-D;ne>=0&&ne<T||(await(0,e.nextTick)(),D+=ne)}}e.asyncLoop=h;function m(A){if(typeof A!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof A}`);return new TextEncoder().encode(A)}e.utf8ToBytes=m;function v(A){if(typeof A=="string"&&(A=m(A)),!(A instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof A})`);return A}e.toBytes=v;function w(...A){if(!A.every(D=>D instanceof Uint8Array))throw new Error("Uint8Array list expected");if(A.length===1)return A[0];const T=A.reduce((D,W)=>D+W.length,0),L=new Uint8Array(T);for(let D=0,W=0;D<A.length;D++){const ne=A[D];L.set(ne,W),W+=ne.length}return L}e.concatBytes=w;class ${clone(){return this._cloneInto()}}e.Hash=$;const S=A=>Object.prototype.toString.call(A)==="[object Object]"&&A.constructor===Object;function k(A,T){if(T!==void 0&&(typeof T!="object"||!S(T)))throw new TypeError("Options should be object or undefined");return Object.assign(A,T)}e.checkOpts=k;function E(A){const T=D=>A().update(v(D)).digest(),L=A();return T.outputLen=L.outputLen,T.blockLen=L.blockLen,T.create=()=>A(),T}e.wrapConstructor=E;function M(A){const T=(D,W)=>A(W).update(v(D)).digest(),L=A({});return T.outputLen=L.outputLen,T.blockLen=L.blockLen,T.create=D=>A(D),T}e.wrapConstructorWithOpts=M;function B(A=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(A));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(A).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=B})(_o);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=It,n=_o;class i extends n.Hash{constructor(c,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(c);const d=(0,n.toBytes)(u);if(this.iHash=c.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const p=this.blockLen,h=new Uint8Array(p);h.set(d.length>p?c.create().update(d).digest():d);for(let m=0;m<h.length;m++)h[m]^=54;this.iHash.update(h),this.oHash=c.create();for(let m=0;m<h.length;m++)h[m]^=106;this.oHash.update(h),h.fill(0)}update(c){return t.default.exists(this),this.iHash.update(c),this}digestInto(c){t.default.exists(this),t.default.bytes(c,this.outputLen),this.finished=!0,this.iHash.digestInto(c),this.oHash.update(c),this.oHash.digestInto(c),this.destroy()}digest(){const c=new Uint8Array(this.oHash.outputLen);return this.digestInto(c),c}_cloneInto(c){c||(c=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:p,destroyed:h,blockLen:m,outputLen:v}=this;return c=c,c.finished=p,c.destroyed=h,c.blockLen=m,c.outputLen=v,c.oHash=u._cloneInto(c.oHash),c.iHash=d._cloneInto(c.iHash),c}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,c,u)=>new i(a,c).update(u).digest();e.hmac=o,e.hmac.create=(a,c)=>new i(a,c)})(u1);Object.defineProperty(es,"__esModule",{value:!0});es.pbkdf2Async=es.pbkdf2=void 0;const _a=It,Z8=u1,Wi=_o;function d1(e,t,n,i){_a.default.hash(e);const o=(0,Wi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:c,asyncTick:u}=o;if(_a.default.number(a),_a.default.number(c),_a.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Wi.toBytes)(t),p=(0,Wi.toBytes)(n),h=new Uint8Array(c),m=Z8.hmac.create(e,d),v=m._cloneInto().update(p);return{c:a,dkLen:c,asyncTick:u,DK:h,PRF:m,PRFSalt:v}}function f1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function q8(e,t,n,i){const{c:o,dkLen:a,DK:c,PRF:u,PRFSalt:d}=d1(e,t,n,i);let p;const h=new Uint8Array(4),m=(0,Wi.createView)(h),v=new Uint8Array(u.outputLen);for(let w=1,$=0;$<a;w++,$+=u.outputLen){const S=c.subarray($,$+u.outputLen);m.setInt32(0,w,!1),(p=d._cloneInto(p)).update(h).digestInto(v),S.set(v.subarray(0,S.length));for(let k=1;k<o;k++){u._cloneInto(p).update(v).digestInto(v);for(let E=0;E<S.length;E++)S[E]^=v[E]}}return f1(u,d,c,p,v)}es.pbkdf2=q8;async function K8(e,t,n,i){const{c:o,dkLen:a,asyncTick:c,DK:u,PRF:d,PRFSalt:p}=d1(e,t,n,i);let h;const m=new Uint8Array(4),v=(0,Wi.createView)(m),w=new Uint8Array(d.outputLen);for(let $=1,S=0;S<a;$++,S+=d.outputLen){const k=u.subarray(S,S+d.outputLen);v.setInt32(0,$,!1),(h=p._cloneInto(h)).update(m).digestInto(w),k.set(w.subarray(0,k.length)),await(0,Wi.asyncLoop)(o-1,c,E=>{d._cloneInto(h).update(w).digestInto(w);for(let M=0;M<k.length;M++)k[M]^=w[M]})}return f1(d,p,u,h,w)}es.pbkdf2Async=K8;const V8=fl(L8);var kn={},bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.SHA2=void 0;const eu=It,zs=_o;function G8(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,p=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+p,u,i)}class Q8 extends zs.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,zs.createView)(this.buffer)}update(t){eu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,zs.toBytes)(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=(0,zs.createView)(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){eu.default.exists(this),eu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let m=c;m<o;m++)n[m]=0;G8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,zs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<p;m++)u.setUint32(4*m,h[m],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}}bl.SHA2=Q8;var h1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(V,ie=!1){return ie?{h:Number(V&t),l:Number(V>>n&t)}:{h:Number(V>>n&t)|0,l:Number(V&t)|0}}e.fromBig=i;function o(V,ie=!1){let Z=new Uint32Array(V.length),Q=new Uint32Array(V.length);for(let se=0;se<V.length;se++){const{h:We,l:Y}=i(V[se],ie);[Z[se],Q[se]]=[We,Y]}return[Z,Q]}e.split=o;const a=(V,ie)=>BigInt(V>>>0)<<n|BigInt(ie>>>0);e.toBig=a;const c=(V,ie,Z)=>V>>>Z,u=(V,ie,Z)=>V<<32-Z|ie>>>Z,d=(V,ie,Z)=>V>>>Z|ie<<32-Z,p=(V,ie,Z)=>V<<32-Z|ie>>>Z,h=(V,ie,Z)=>V<<64-Z|ie>>>Z-32,m=(V,ie,Z)=>V>>>Z-32|ie<<64-Z,v=(V,ie)=>ie,w=(V,ie)=>V,$=(V,ie,Z)=>V<<Z|ie>>>32-Z,S=(V,ie,Z)=>ie<<Z|V>>>32-Z,k=(V,ie,Z)=>ie<<Z-32|V>>>64-Z,E=(V,ie,Z)=>V<<Z-32|ie>>>64-Z;function M(V,ie,Z,Q){const se=(ie>>>0)+(Q>>>0);return{h:V+Z+(se/2**32|0)|0,l:se|0}}e.add=M;const B=(V,ie,Z)=>(V>>>0)+(ie>>>0)+(Z>>>0),A=(V,ie,Z,Q)=>ie+Z+Q+(V/2**32|0)|0,T=(V,ie,Z,Q)=>(V>>>0)+(ie>>>0)+(Z>>>0)+(Q>>>0),L=(V,ie,Z,Q,se)=>ie+Z+Q+se+(V/2**32|0)|0,D=(V,ie,Z,Q,se)=>(V>>>0)+(ie>>>0)+(Z>>>0)+(Q>>>0)+(se>>>0),W=(V,ie,Z,Q,se,We)=>ie+Z+Q+se+We+(V/2**32|0)|0,ne={fromBig:i,split:o,toBig:e.toBig,shrSH:c,shrSL:u,rotrSH:d,rotrSL:p,rotrBH:h,rotrBL:m,rotr32H:v,rotr32L:w,rotlSH:$,rotlSL:S,rotlBH:k,rotlBL:E,add:M,add3L:B,add3H:A,add4L:T,add4H:L,add5H:W,add5L:D};e.default=ne})(h1);Object.defineProperty(kn,"__esModule",{value:!0});kn.sha384=kn.sha512_256=kn.sha512_224=xu=kn.sha512=kn.SHA512=void 0;const X8=bl,Se=h1,_l=_o,[Y8,J8]=Se.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Br=new Uint32Array(80),Ur=new Uint32Array(80);class wo extends X8.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:c,Dh:u,Dl:d,Eh:p,El:h,Fh:m,Fl:v,Gh:w,Gl:$,Hh:S,Hl:k}=this;return[t,n,i,o,a,c,u,d,p,h,m,v,w,$,S,k]}set(t,n,i,o,a,c,u,d,p,h,m,v,w,$,S,k){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=c|0,this.Dh=u|0,this.Dl=d|0,this.Eh=p|0,this.El=h|0,this.Fh=m|0,this.Fl=v|0,this.Gh=w|0,this.Gl=$|0,this.Hh=S|0,this.Hl=k|0}process(t,n){for(let B=0;B<16;B++,n+=4)Br[B]=t.getUint32(n),Ur[B]=t.getUint32(n+=4);for(let B=16;B<80;B++){const A=Br[B-15]|0,T=Ur[B-15]|0,L=Se.default.rotrSH(A,T,1)^Se.default.rotrSH(A,T,8)^Se.default.shrSH(A,T,7),D=Se.default.rotrSL(A,T,1)^Se.default.rotrSL(A,T,8)^Se.default.shrSL(A,T,7),W=Br[B-2]|0,ne=Ur[B-2]|0,V=Se.default.rotrSH(W,ne,19)^Se.default.rotrBH(W,ne,61)^Se.default.shrSH(W,ne,6),ie=Se.default.rotrSL(W,ne,19)^Se.default.rotrBL(W,ne,61)^Se.default.shrSL(W,ne,6),Z=Se.default.add4L(D,ie,Ur[B-7],Ur[B-16]),Q=Se.default.add4H(Z,L,V,Br[B-7],Br[B-16]);Br[B]=Q|0,Ur[B]=Z|0}let{Ah:i,Al:o,Bh:a,Bl:c,Ch:u,Cl:d,Dh:p,Dl:h,Eh:m,El:v,Fh:w,Fl:$,Gh:S,Gl:k,Hh:E,Hl:M}=this;for(let B=0;B<80;B++){const A=Se.default.rotrSH(m,v,14)^Se.default.rotrSH(m,v,18)^Se.default.rotrBH(m,v,41),T=Se.default.rotrSL(m,v,14)^Se.default.rotrSL(m,v,18)^Se.default.rotrBL(m,v,41),L=m&w^~m&S,D=v&$^~v&k,W=Se.default.add5L(M,T,D,J8[B],Ur[B]),ne=Se.default.add5H(W,E,A,L,Y8[B],Br[B]),V=W|0,ie=Se.default.rotrSH(i,o,28)^Se.default.rotrBH(i,o,34)^Se.default.rotrBH(i,o,39),Z=Se.default.rotrSL(i,o,28)^Se.default.rotrBL(i,o,34)^Se.default.rotrBL(i,o,39),Q=i&a^i&u^a&u,se=o&c^o&d^c&d;E=S|0,M=k|0,S=w|0,k=$|0,w=m|0,$=v|0,{h:m,l:v}=Se.default.add(p|0,h|0,ne|0,V|0),p=u|0,h=d|0,u=a|0,d=c|0,a=i|0,c=o|0;const We=Se.default.add3L(V,Z,se);i=Se.default.add3H(We,ne,ie,Q),o=We|0}({h:i,l:o}=Se.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l:c}=Se.default.add(this.Bh|0,this.Bl|0,a|0,c|0),{h:u,l:d}=Se.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:p,l:h}=Se.default.add(this.Dh|0,this.Dl|0,p|0,h|0),{h:m,l:v}=Se.default.add(this.Eh|0,this.El|0,m|0,v|0),{h:w,l:$}=Se.default.add(this.Fh|0,this.Fl|0,w|0,$|0),{h:S,l:k}=Se.default.add(this.Gh|0,this.Gl|0,S|0,k|0),{h:E,l:M}=Se.default.add(this.Hh|0,this.Hl|0,E|0,M|0),this.set(i,o,a,c,u,d,p,h,m,v,w,$,S,k,E,M)}roundClean(){Br.fill(0),Ur.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}kn.SHA512=wo;class e7 extends wo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class t7 extends wo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class n7 extends wo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var xu=kn.sha512=(0,_l.wrapConstructor)(()=>new wo);kn.sha512_224=(0,_l.wrapConstructor)(()=>new e7);kn.sha512_256=(0,_l.wrapConstructor)(()=>new t7);kn.sha384=(0,_l.wrapConstructor)(()=>new n7);const r7=fl(S8),i7=fl(z8);Object.defineProperty(un,"__esModule",{value:!0});var p1=un.mnemonicToSeedSync=un.mnemonicToSeed=k1=un.validateMnemonic=un.entropyToMnemonic=un.mnemonicToEntropy=_1=un.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const g1=It,m1=es,s7=V8,v1=kn,o7=r7,wa=i7,a7=e=>e[0]==="あいこくしん";function y1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function sd(e){const t=y1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function b1(e){g1.default.bytes(e,16,20,24,28,32)}function l7(e,t=128){if(g1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return $1((0,o7.randomBytes)(t/8),e)}var _1=un.generateMnemonic=l7;const c7=e=>{const t=8-e.length/4;return new Uint8Array([(0,s7.sha256)(e)[0]>>t<<t])};function w1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),wa.utils.chain(wa.utils.checksum(1,c7),wa.utils.radix2(11,!0),wa.utils.alphabet(e))}function x1(e,t){const{words:n}=sd(e),i=w1(t).decode(n);return b1(i),i}un.mnemonicToEntropy=x1;function $1(e,t){return b1(e),w1(t).encode(e).join(a7(t)?"　":" ")}un.entropyToMnemonic=$1;function u7(e,t){try{x1(e,t)}catch{return!1}return!0}var k1=un.validateMnemonic=u7;const C1=e=>y1(`mnemonic${e}`);function d7(e,t=""){return(0,m1.pbkdf2Async)(v1.sha512,sd(e).nfkd,C1(t),{c:2048,dkLen:64})}un.mnemonicToSeed=d7;function f7(e,t=""){return(0,m1.pbkdf2)(v1.sha512,sd(e).nfkd,C1(t),{c:2048,dkLen:64})}p1=un.mnemonicToSeedSync=f7;class S1 extends ed{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,hi.hash(t);const i=yo(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let c=0;c<a.length;c++)a[c]^=54;this.iHash.update(a),this.oHash=t.create();for(let c=0;c<a.length;c++)a[c]^=106;this.oHash.update(a),a.fill(0)}update(t){return hi.exists(this),this.iHash.update(t),this}digestInto(t){hi.exists(this),hi.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:c,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=c,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const to=(e,t,n)=>new S1(e,t).update(n).digest();to.create=(e,t)=>new S1(e,t);const h7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),E1=Uint8Array.from({length:16},(e,t)=>t),p7=E1.map(e=>(9*e+5)%16);let od=[E1],ad=[p7];for(let e=0;e<4;e++)for(let t of[od,ad])t.push(t[e].map(n=>h7[n]));const T1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),g7=od.map((e,t)=>e.map(n=>T1[t][n])),m7=ad.map((e,t)=>e.map(n=>T1[t][n])),v7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),y7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),xa=(e,t)=>e<<t|e>>>32-t;function Fp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const $a=new Uint32Array(16);class b7 extends Fg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let w=0;w<16;w++,n+=4)$a[w]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,c=a,u=this.h2|0,d=u,p=this.h3|0,h=p,m=this.h4|0,v=m;for(let w=0;w<5;w++){const $=4-w,S=v7[w],k=y7[w],E=od[w],M=ad[w],B=g7[w],A=m7[w];for(let T=0;T<16;T++){const L=xa(i+Fp(w,a,u,p)+$a[E[T]]+S,B[T])+m|0;i=m,m=p,p=xa(u,10)|0,u=a,a=L}for(let T=0;T<16;T++){const L=xa(o+Fp($,c,d,h)+$a[M[T]]+k,A[T])+v|0;o=v,v=h,h=xa(d,10)|0,d=c,c=L}}this.set(this.h1+u+h|0,this.h2+p+v|0,this.h3+m+o|0,this.h4+i+c|0,this.h0+a+d|0)}roundClean(){$a.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const _7=yl(()=>new b7);Ae.hmacSha256Sync=(e,...t)=>to(_r,e,Ae.concatBytes(...t));const tu=Jg(_r);function Wp(e){return BigInt(`0x${Dg(e)}`)}function w7(e){return Ng(e.toString(16).padStart(64,"0"))}const x7=Ju("Bitcoin seed"),nu={private:76066276,public:76067358},ru=2147483648,$7=e=>_7(_r(e)),k7=e=>gi(e).getUint32(0,!1),ka=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class fi{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||nu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Ae.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Wp(t.privateKey),this.privKeyBytes=w7(this.privKey),this.pubKey=i8(t.privateKey,!0)}else if(t.publicKey)this.pubKey=Ne.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=$7(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return k7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return tu.encode(this.serialize(this.versions.private,Zs(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return tu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=nu){if(Hi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=to(xu,x7,t);return new fi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=nu){const i=tu.decode(t),o=gi(i),a=o.getUint32(0,!1),c={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new fi({...c,privateKey:u.slice(1)}):new fi({...c,publicKey:u})}static fromJSON(t){return fi.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let c=+a[1];if(!Number.isSafeInteger(c)||c>=ru)throw new Error("Invalid index");a[2]==="'"&&(c+=ru),i=i.deriveChild(c)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ka(t);if(t>=ru){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=Zs(new Uint8Array([0]),u,n)}else n=Zs(this.pubKey,n);const i=to(xu,this.chainCode,n),o=Wp(i.slice(0,32)),a=i.slice(32);if(!Ae.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const c={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=Ae.mod(this.privKey+o,Ye.n);if(!Ae.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=u}else{const u=Ne.fromHex(this.pubKey).add(Ne.fromPrivateKey(o));if(u.equals(Ne.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=u.toRawBytes(!0)}return new fi(c)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Hi(t,32),l8(t,this.privKey,{canonical:!0,der:!1})}verify(t,n){if(Hi(t,32),Hi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=mr.fromCompact(n)}catch{return!1}return u8(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Hi(n,33),Zs(ka(t),new Uint8Array([this.depth]),ka(this.parentFingerprint),ka(this.index),this.chainCode,n)}}var C7=Object.defineProperty,Jt=(e,t)=>{for(var n in t)C7(e,n,{get:t[n],enumerable:!0})};function S7(e){return Ae.bytesToHex(vl.getPublicKey(e))}var E7={};Jt(E7,{insertEventIntoAscendingList:()=>A7,insertEventIntoDescendingList:()=>T7,normalizeURL:()=>$u,utf8Decoder:()=>Nr,utf8Encoder:()=>Kn});var Nr=new TextDecoder("utf-8"),Kn=new TextEncoder;function $u(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function T7(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function A7(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var kt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(kt||{});function I7(e){if(!ld(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function A1(e){let t=_r(Kn.encode(I7(e)));return Ae.bytesToHex(t)}var R7=e=>e instanceof Object;function ld(e){if(!R7(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function I1(e){return vl.verifySync(e.sig,A1(e),e.pubkey)}function O7(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,c])=>a===n.slice(1)&&o.indexOf(c)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function L7(e,t){for(let n=0;n<e.length;n++)if(O7(e[n],t))return!0;return!1}var P7={};Jt(P7,{getHex64:()=>wl,getInt:()=>R1,getSubscriptionId:()=>O1,matchEventId:()=>M7,matchEventKind:()=>U7,matchEventPubkey:()=>B7});function wl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function R1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function O1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function M7(e,t){return t===wl(e,"id")}function B7(e,t){return t===wl(e,"pubkey")}function U7(e,t){return t===R1(e,"kind")}var Zp=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function j7(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,c={},u=Zp(),d={},p={},h;async function m(){return h||(h=new Promise((E,M)=>{try{a=new WebSocket(e)}catch(L){M(L)}a.onopen=()=>{u.connect.forEach(L=>L()),E()},a.onerror=()=>{h=void 0,u.error.forEach(L=>L()),M()},a.onclose=async()=>{h=void 0,u.disconnect.forEach(L=>L())};let B=[],A;a.onmessage=L=>{B.push(L.data),A||(A=setInterval(T,0))};function T(){if(B.length===0){clearInterval(A),A=null;return}var L=B.shift();if(!L)return;let D=O1(L);if(D){let W=c[D];if(W&&W.alreadyHaveEvent&&W.alreadyHaveEvent(wl(L,"id"),e))return}try{let W=JSON.parse(L);switch(W[0]){case"EVENT":{let Z=W[1],Q=W[2];ld(Q)&&c[Z]&&(c[Z].skipVerification||I1(Q))&&L7(c[Z].filters,Q)&&(c[Z],(d[Z]?.event||[]).forEach(se=>se(Q)));return}case"COUNT":let ne=W[1],V=W[2];c[ne]&&(d[ne]?.count||[]).forEach(Z=>Z(V));return;case"EOSE":{let Z=W[1];Z in d&&(d[Z].eose.forEach(Q=>Q()),d[Z].eose=[]);return}case"OK":{let Z=W[1],Q=W[2],se=W[3]||"";Z in p&&(Q?p[Z].ok.forEach(We=>We()):p[Z].failed.forEach(We=>We(se)),p[Z].ok=[],p[Z].failed=[]);return}case"NOTICE":let ie=W[1];u.notice.forEach(Z=>Z(ie));return;case"AUTH":{let Z=W[1];u.auth?.forEach(Q=>Q(Z));return}}}catch{return}}}),h)}function v(){return a?.readyState===1}async function w(){v()||await m()}async function $(E){let M=JSON.stringify(E);if(!(!v()&&(await new Promise(B=>setTimeout(B,1e3)),!v())))try{a.send(M)}catch(B){console.log(B)}}const S=(E,{verb:M="REQ",skipVerification:B=!1,alreadyHaveEvent:A=null,id:T=Math.random().toString().slice(2)}={})=>{let L=T;return c[L]={id:L,filters:E,skipVerification:B,alreadyHaveEvent:A},$([M,L,...E]),{sub:(D,W={})=>S(D||E,{skipVerification:W.skipVerification||B,alreadyHaveEvent:W.alreadyHaveEvent||A,id:L}),unsub:()=>{delete c[L],delete d[L],$(["CLOSE",L])},on:(D,W)=>{d[L]=d[L]||{event:[],count:[],eose:[]},d[L][D].push(W)},off:(D,W)=>{let ne=d[L],V=ne[D].indexOf(W);V>=0&&ne[D].splice(V,1)}}};function k(E,M){if(!E.id)throw new Error(`event ${E} has no id`);let B=E.id;return $([M,E]),{on:(A,T)=>{p[B]=p[B]||{ok:[],failed:[]},p[B][A].push(T)},off:(A,T)=>{let L=p[B];if(!L)return;let D=L[A].indexOf(T);D>=0&&L[A].splice(D,1)}}}return{url:e,sub:S,on:(E,M)=>{u[E].push(M),E==="connect"&&a?.readyState===1&&M()},off:(E,M)=>{let B=u[E].indexOf(M);B!==-1&&u[E].splice(B,1)},list:(E,M)=>new Promise(B=>{let A=S(E,M),T=[],L=setTimeout(()=>{A.unsub(),B(T)},n);A.on("eose",()=>{A.unsub(),clearTimeout(L),B(T)}),A.on("event",D=>{T.push(D)})}),get:(E,M)=>new Promise(B=>{let A=S([E],M),T=setTimeout(()=>{A.unsub(),B(null)},i);A.on("event",L=>{A.unsub(),clearTimeout(T),B(L)})}),count:E=>new Promise(M=>{let B=S(E,{...S,verb:"COUNT"}),A=setTimeout(()=>{B.unsub(),M(null)},o);B.on("count",T=>{B.unsub(),clearTimeout(A),M(T)})}),publish(E){return k(E,"EVENT")},auth(E){return k(E,"AUTH")},connect:w,close(){u=Zp(),d={},p={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var D7=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[$u(t)];n&&n.close()})}async ensureRelay(e){const t=$u(e);this._conn[t]||(this._conn[t]=j7(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,w)=>{if(n?.alreadyHaveEvent?.(v,w))return!0;let $=this._seenOn[v]||new Set;return $.add(w),this._seenOn[v]=$,i.has(v)};let a=[],c=new Set,u=new Set,d=e.length,p=!1,h=setTimeout(()=>{p=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let w;try{w=await this.ensureRelay(v)}catch{S();return}if(!w)return;let $=w.sub(t,o);$.on("event",k=>{i.add(k.id);for(let E of c.values())E(k)}),$.on("eose",()=>{p||S()}),a.push($);function S(){if(d--,d===0){clearTimeout(h);for(let k of u.values())k()}}});let m={sub(v,w){return a.forEach($=>$.sub(v,w)),m},unsub(){a.forEach(v=>v.unsub())},on(v,w){v==="event"?c.add(w):v==="eose"&&u.add(w)},off(v,w){v==="event"?c.delete(w):v==="eose"&&u.delete(w)}};return m}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",c=>{i(c),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",c=>{o.push(c)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(c,u)=>{let d=await n[u],p=()=>a(c);i.set(a,p),d.on(o,p)})},off(o,a){e.forEach(async(c,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},xo={};Jt(xo,{decode:()=>xl,naddrEncode:()=>Z7,neventEncode:()=>W7,noteEncode:()=>z7,nprofileEncode:()=>F7,npubEncode:()=>H7,nrelayEncode:()=>q7,nsecEncode:()=>N7});var ps=5e3;function xl(e){let{prefix:t,words:n}=Wt.decode(e,ps),i=new Uint8Array(Wt.fromWords(n));switch(t){case"nprofile":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:Ae.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>Nr.decode(a)):[]}}}case"nevent":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:Ae.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>Nr.decode(a)):[],author:o[2]?.[0]?Ae.bytesToHex(o[2][0]):void 0}}}case"naddr":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Nr.decode(o[0][0]),pubkey:Ae.bytesToHex(o[2][0]),kind:parseInt(Ae.bytesToHex(o[3][0]),16),relays:o[1]?o[1].map(a=>Nr.decode(a)):[]}}}case"nrelay":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Nr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:Ae.bytesToHex(i)};default:throw new Error(`unknown prefix ${t}`)}}function Ca(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1],a=n.slice(2,2+o);n=n.slice(2+o),!(a.length<o)&&(t[i]=t[i]||[],t[i].push(a))}return t}function N7(e){return cd("nsec",e)}function H7(e){return cd("npub",e)}function z7(e){return cd("note",e)}function cd(e,t){let n=Ae.hexToBytes(t),i=Wt.toWords(n);return Wt.encode(e,i,ps)}function F7(e){let t=$l({0:[Ae.hexToBytes(e.pubkey)],1:(e.relays||[]).map(i=>Kn.encode(i))}),n=Wt.toWords(t);return Wt.encode("nprofile",n,ps)}function W7(e){let t=$l({0:[Ae.hexToBytes(e.id)],1:(e.relays||[]).map(i=>Kn.encode(i)),2:e.author?[Ae.hexToBytes(e.author)]:[]}),n=Wt.toWords(t);return Wt.encode("nevent",n,ps)}function Z7(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=$l({0:[Kn.encode(e.identifier)],1:(e.relays||[]).map(o=>Kn.encode(o)),2:[Ae.hexToBytes(e.pubkey)],3:[new Uint8Array(t)]}),i=Wt.toWords(n);return Wt.encode("naddr",i,ps)}function q7(e){let t=$l({0:[Kn.encode(e)]}),n=Wt.toWords(t);return Wt.encode("nrelay",n,ps)}function $l(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),Ae.concatBytes(...t)}var K7={};Jt(K7,{decrypt:()=>G7,encrypt:()=>V7});async function V7(e,t,n){const i=Ag(e,"02"+t),o=L1(i);let a=Uint8Array.from(zg(16)),c=Kn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,c),p=Ji.encode(new Uint8Array(d)),h=Ji.encode(new Uint8Array(a.buffer));return`${p}?iv=${h}`}async function G7(e,t,n){let[i,o]=n.split("?iv="),a=Ag(e,"02"+t),c=L1(a),u=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),d=Ji.decode(i),p=Ji.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:p},u,d);return Nr.decode(h)}function L1(e){return e.slice(1,33)}var P1={};Jt(P1,{queryProfile:()=>Y7,searchDomain:()=>X7,useFetchImplementation:()=>Q7});var kl;try{kl=fetch}catch{}function Q7(e){kl=e}async function X7(e,t=""){try{return(await(await kl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function Y7(e){let[t,n]=e.split("@");if(n||(n=t,t="_"),!t.match(/^[A-Za-z0-9-_.]+$/)||!n.includes("."))return null;let i;try{i=await(await kl(`https://${n}/.well-known/nostr.json?name=${t}`)).json()}catch{return null}if(!i?.names?.[t])return null;let o=i.names[t],a=i.relays?.[o]||[];return{pubkey:o,relays:a}}var J7={};Jt(J7,{generateSeedWords:()=>t9,privateKeyFromSeedWords:()=>e9,validateWords:()=>n9});function e9(e,t){let i=fi.fromMasterSeed(p1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return Ae.bytesToHex(i)}function t9(){return _1(rd)}function n9(e){return k1(e,rd)}var r9={};Jt(r9,{parse:()=>i9});function i9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,c,u,d]=o,p={id:c,relays:u?[u]:[]},h=i===0,m=i===n.length-1;if(d==="root"){t.root=p;continue}if(d==="reply"){t.reply=p;continue}if(d==="mention"){t.mentions.push(p);continue}if(h){t.root=p;continue}if(m){t.reply=p;continue}t.mentions.push(p)}return t}var s9={};Jt(s9,{getPow:()=>o9});function o9(e){return a9(Ae.hexToBytes(e))}function a9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=l9(e[n]),t+=i,i===8);n++);return t}function l9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var c9={};Jt(c9,{BECH32_REGEX:()=>M1,NOSTR_URI_REGEX:()=>Cl,parse:()=>d9,test:()=>u9});var M1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/,Cl=new RegExp(`nostr:(${M1.source})`);function u9(e){return typeof e=="string"&&new RegExp(`^${Cl.source}$`).test(e)}function d9(e){const t=e.match(new RegExp(`^${Cl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:xl(t[1])}}var f9={};Jt(f9,{createDelegation:()=>h9,getDelegator:()=>p9});function h9(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=_r(Kn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=Ae.bytesToHex(vl.signSync(o,e));return{from:S7(e),to:t.pubkey,cond:i,sig:a}}function p9(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,p,h]=a[u].split(/\b/);if(!(d==="kind"&&p==="="&&e.kind===parseInt(h))){if(d==="created_at"&&p==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&p===">"&&e.created_at>parseInt(h))continue;return null}}let c=_r(Kn.encode(`nostr:delegation:${e.pubkey}:${i}`));return vl.verifySync(o,c,n)?n:null}var g9={};Jt(g9,{matchAll:()=>m9,regex:()=>ud,replaceAll:()=>v9});var ud=()=>new RegExp(`\\b${Cl.source}\\b`,"g");function*m9(e){const t=e.matchAll(ud());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:xl(o),start:n.index,end:n.index+i.length}}}function v9(e,t){return e.replaceAll(ud(),(n,i)=>t({uri:n,value:i,decoded:xl(i)}))}var y9={};Jt(y9,{useFetchImplementation:()=>b9,validateGithub:()=>_9});var dd;try{dd=fetch}catch{}function b9(e){dd=e}async function _9(e,t,n){try{return await(await dd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var w9={};Jt(w9,{authenticate:()=>x9});var x9=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,c)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),c(d)})})},$9={};Jt($9,{getZapEndpoint:()=>C9,makeZapReceipt:()=>T9,makeZapRequest:()=>S9,useFetchImplementation:()=>k9,validateZapRequest:()=>E9});var fd;try{fd=fetch}catch{}function k9(e){fd=e}async function C9(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:c}=Wt.decode(n,1e3),u=Wt.fromWords(c);t=Nr.decode(u)}else if(i){let[c,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${c}`}else return null;let a=await(await fd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function S9({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function E9(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!ld(t))return"Zap request is not a valid Nostr event.";if(!I1(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,c])=>a==="p"&&c);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,c])=>a==="e"&&c);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,c])=>a==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function T9({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),c={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&c.tags.push(["preimage",t]),c}Ae.hmacSha256Sync=(e,...t)=>to(_r,e,Ae.concatBytes(...t));Ae.sha256Sync=(...e)=>_r(Ae.concatBytes(...e));const A9=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),B1=(e={})=>(()=>{const t=A9();return Xe(t,e,!0,!0),t})(),I9=P('<button class="text-blue-500 underline">'),{noteEncode:R9,neventEncode:O9}=xo,L9=e=>{try{return R9(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},P9=e=>{try{return O9({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},no=e=>(()=>{const t=I9();return I(t,_(le,{get when(){return e.kind==null||e.kind===kt.Text},get fallback(){return P9(e.eventId)},get children(){return L9(e.eventId)}})),t})(),M9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],U1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],B9=[...U1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],U9=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],j9=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},gs=()=>({id:j9(),width:"medium"}),j1=e=>({...gs(),columnType:"Following",...e}),D1=e=>({...gs(),columnType:"Notification",...e}),D9=e=>({...gs(),columnType:"Relays",...e}),N1=()=>D9({name:"日本語",relayUrls:U1,contentFilter:{filterType:"Regex",regex:"[\\p{scx=Hiragana}\\p{scx=Katakana}]",flag:"u"}}),H1=e=>({...gs(),columnType:"Posts",...e}),z1=e=>({...gs(),columnType:"Reactions",...e}),hd=e=>({...gs(),columnType:"Search",...e});var Fe;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const c of o)a[c]=c;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),c={};for(const u of a)c[u]=o[u];return e.objectValues(c)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const c in o)Object.prototype.hasOwnProperty.call(o,c)&&a.push(c);return a},e.find=(o,a)=>{for(const c of o)if(a(c))return c},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(c=>typeof c=="string"?`'${c}'`:c).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Fe||(Fe={}));var ku;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(ku||(ku={}));const J=Fe.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Hr=e=>{switch(typeof e){case"undefined":return J.undefined;case"string":return J.string;case"number":return isNaN(e)?J.nan:J.number;case"boolean":return J.boolean;case"function":return J.function;case"bigint":return J.bigint;case"symbol":return J.symbol;case"object":return Array.isArray(e)?J.array:e===null?J.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?J.promise:typeof Map<"u"&&e instanceof Map?J.map:typeof Set<"u"&&e instanceof Set?J.set:typeof Date<"u"&&e instanceof Date?J.date:J.object;default:return J.unknown}},K=Fe.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),N9=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Un extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const c of a.issues)if(c.code==="invalid_union")c.unionErrors.map(o);else if(c.code==="invalid_return_type")o(c.returnTypeError);else if(c.code==="invalid_arguments")o(c.argumentsError);else if(c.path.length===0)i._errors.push(n(c));else{let u=i,d=0;for(;d<c.path.length;){const p=c.path[d];d===c.path.length-1?(u[p]=u[p]||{_errors:[]},u[p]._errors.push(n(c))):u[p]=u[p]||{_errors:[]},u=u[p],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Fe.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Un.create=e=>new Un(e);const ro=(e,t)=>{let n;switch(e.code){case K.invalid_type:e.received===J.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case K.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Fe.jsonStringifyReplacer)}`;break;case K.unrecognized_keys:n=`Unrecognized key(s) in object: ${Fe.joinValues(e.keys,", ")}`;break;case K.invalid_union:n="Invalid input";break;case K.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Fe.joinValues(e.options)}`;break;case K.invalid_enum_value:n=`Invalid enum value. Expected ${Fe.joinValues(e.options)}, received '${e.received}'`;break;case K.invalid_arguments:n="Invalid function arguments";break;case K.invalid_return_type:n="Invalid function return type";break;case K.invalid_date:n="Invalid date";break;case K.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Fe.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case K.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case K.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case K.custom:n="Invalid input";break;case K.invalid_intersection_types:n="Intersection results could not be merged";break;case K.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case K.not_finite:n="Number must be finite";break;default:n=t.defaultError,Fe.assertNever(e)}return{message:n}};let F1=ro;function H9(e){F1=e}function qa(){return F1}const Ka=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],c={...o,path:a};let u="";const d=i.filter(p=>!!p).slice().reverse();for(const p of d)u=p(c,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},z9=[];function te(e,t){const n=Ka({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,qa(),ro].filter(i=>!!i)});e.common.issues.push(n)}class jt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return _e;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return jt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:c}=o;if(a.status==="aborted"||c.status==="aborted")return _e;a.status==="dirty"&&t.dirty(),c.status==="dirty"&&t.dirty(),(typeof c.value<"u"||o.alwaysSet)&&(i[a.value]=c.value)}return{status:t.value,value:i}}}const _e=Object.freeze({status:"aborted"}),W1=e=>({status:"dirty",value:e}),Zt=e=>({status:"valid",value:e}),Cu=e=>e.status==="aborted",Su=e=>e.status==="dirty",Va=e=>e.status==="valid",Ga=e=>typeof Promise<"u"&&e instanceof Promise;var de;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(de||(de={}));class Vn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const qp=(e,t)=>{if(Va(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Un(e.common.issues);return this._error=n,this._error}}};function ke(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(c,u)=>c.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Ie{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Hr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Hr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new jt,ctx:{common:t.parent.common,data:t.data,parsedType:Hr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Ga(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Hr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return qp(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Hr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Ga(o)?o:Promise.resolve(o));return qp(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const c=t(o),u=()=>a.addIssue({code:K.custom,...i(o)});return typeof Promise<"u"&&c instanceof Promise?c.then(d=>d?!0:(u(),!1)):c?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new Dn({schema:this,typeName:me.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return vr.create(this,this._def)}nullable(){return _i.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return jn.create(this,this._def)}promise(){return ns.create(this,this._def)}or(t){return ao.create([this,t],this._def)}and(t){return lo.create(this,t,this._def)}transform(t){return new Dn({...ke(this._def),schema:this,typeName:me.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new po({...ke(this._def),innerType:this,defaultValue:n,typeName:me.ZodDefault})}brand(){return new q1({typeName:me.ZodBranded,type:this,...ke(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Ja({...ke(this._def),innerType:this,catchValue:n,typeName:me.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return $o.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const F9=/^c[^\s-]{8,}$/i,W9=/^[a-z][a-z0-9]*$/,Z9=/[0-9A-HJKMNP-TV-Z]{26}/,q9=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,K9=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,V9=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,G9=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Q9=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,X9=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Y9(e,t){return!!((t==="v4"||!t)&&G9.test(e)||(t==="v6"||!t)&&Q9.test(e))}class Mn extends Ie{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:K.invalid_string,...de.errToObj(i)}),this.nonempty=t=>this.min(1,de.errToObj(t)),this.trim=()=>new Mn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Mn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Mn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==J.string){const a=this._getOrReturnCtx(t);return te(a,{code:K.invalid_type,expected:J.string,received:a.parsedType}),_e}const i=new jt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),te(o,{code:K.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),te(o,{code:K.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const c=t.data.length>a.value,u=t.data.length<a.value;(c||u)&&(o=this._getOrReturnCtx(t,o),c?te(o,{code:K.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&te(o,{code:K.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")K9.test(t.data)||(o=this._getOrReturnCtx(t,o),te(o,{validation:"email",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")V9.test(t.data)||(o=this._getOrReturnCtx(t,o),te(o,{validation:"emoji",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")q9.test(t.data)||(o=this._getOrReturnCtx(t,o),te(o,{validation:"uuid",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")F9.test(t.data)||(o=this._getOrReturnCtx(t,o),te(o,{validation:"cuid",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")W9.test(t.data)||(o=this._getOrReturnCtx(t,o),te(o,{validation:"cuid2",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")Z9.test(t.data)||(o=this._getOrReturnCtx(t,o),te(o,{validation:"ulid",code:K.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),te(o,{validation:"url",code:K.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),te(o,{validation:"regex",code:K.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),te(o,{code:K.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),te(o,{code:K.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),te(o,{code:K.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?X9(a).test(t.data)||(o=this._getOrReturnCtx(t,o),te(o,{code:K.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?Y9(t.data,a.version)||(o=this._getOrReturnCtx(t,o),te(o,{validation:"ip",code:K.invalid_string,message:a.message}),i.dirty()):Fe.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Mn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...de.errToObj(t)})}url(t){return this._addCheck({kind:"url",...de.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...de.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...de.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...de.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...de.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...de.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...de.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...de.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...de.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...de.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...de.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...de.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...de.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...de.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...de.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Mn.create=e=>{var t;return new Mn({checks:[],typeName:me.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...ke(e)})};function J9(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),c=parseInt(t.toFixed(o).replace(".",""));return a%c/Math.pow(10,o)}class Kr extends Ie{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==J.number){const a=this._getOrReturnCtx(t);return te(a,{code:K.invalid_type,expected:J.number,received:a.parsedType}),_e}let i;const o=new jt;for(const a of this._def.checks)a.kind==="int"?Fe.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),te(i,{code:K.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),te(i,{code:K.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),te(i,{code:K.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?J9(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),te(i,{code:K.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),te(i,{code:K.not_finite,message:a.message}),o.dirty()):Fe.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,de.toString(n))}gt(t,n){return this.setLimit("min",t,!1,de.toString(n))}lte(t,n){return this.setLimit("max",t,!0,de.toString(n))}lt(t,n){return this.setLimit("max",t,!1,de.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:de.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:de.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:de.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:de.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:de.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:de.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:de.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:de.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:de.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:de.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Fe.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Kr.create=e=>new Kr({checks:[],typeName:me.ZodNumber,coerce:e?.coerce||!1,...ke(e)});class Vr extends Ie{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==J.bigint){const a=this._getOrReturnCtx(t);return te(a,{code:K.invalid_type,expected:J.bigint,received:a.parsedType}),_e}let i;const o=new jt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),te(i,{code:K.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),te(i,{code:K.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),te(i,{code:K.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Fe.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,de.toString(n))}gt(t,n){return this.setLimit("min",t,!1,de.toString(n))}lte(t,n){return this.setLimit("max",t,!0,de.toString(n))}lt(t,n){return this.setLimit("max",t,!1,de.toString(n))}setLimit(t,n,i,o){return new Vr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:de.toString(o)}]})}_addCheck(t){return new Vr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:de.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:de.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:de.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:de.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:de.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Vr.create=e=>{var t;return new Vr({checks:[],typeName:me.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...ke(e)})};class io extends Ie{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==J.boolean){const i=this._getOrReturnCtx(t);return te(i,{code:K.invalid_type,expected:J.boolean,received:i.parsedType}),_e}return Zt(t.data)}}io.create=e=>new io({typeName:me.ZodBoolean,coerce:e?.coerce||!1,...ke(e)});class yi extends Ie{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==J.date){const a=this._getOrReturnCtx(t);return te(a,{code:K.invalid_type,expected:J.date,received:a.parsedType}),_e}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return te(a,{code:K.invalid_date}),_e}const i=new jt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),te(o,{code:K.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),te(o,{code:K.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Fe.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new yi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:de.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:de.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}yi.create=e=>new yi({checks:[],coerce:e?.coerce||!1,typeName:me.ZodDate,...ke(e)});class Qa extends Ie{_parse(t){if(this._getType(t)!==J.symbol){const i=this._getOrReturnCtx(t);return te(i,{code:K.invalid_type,expected:J.symbol,received:i.parsedType}),_e}return Zt(t.data)}}Qa.create=e=>new Qa({typeName:me.ZodSymbol,...ke(e)});class so extends Ie{_parse(t){if(this._getType(t)!==J.undefined){const i=this._getOrReturnCtx(t);return te(i,{code:K.invalid_type,expected:J.undefined,received:i.parsedType}),_e}return Zt(t.data)}}so.create=e=>new so({typeName:me.ZodUndefined,...ke(e)});class oo extends Ie{_parse(t){if(this._getType(t)!==J.null){const i=this._getOrReturnCtx(t);return te(i,{code:K.invalid_type,expected:J.null,received:i.parsedType}),_e}return Zt(t.data)}}oo.create=e=>new oo({typeName:me.ZodNull,...ke(e)});class ts extends Ie{constructor(){super(...arguments),this._any=!0}_parse(t){return Zt(t.data)}}ts.create=e=>new ts({typeName:me.ZodAny,...ke(e)});class mi extends Ie{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Zt(t.data)}}mi.create=e=>new mi({typeName:me.ZodUnknown,...ke(e)});class br extends Ie{_parse(t){const n=this._getOrReturnCtx(t);return te(n,{code:K.invalid_type,expected:J.never,received:n.parsedType}),_e}}br.create=e=>new br({typeName:me.ZodNever,...ke(e)});class Xa extends Ie{_parse(t){if(this._getType(t)!==J.undefined){const i=this._getOrReturnCtx(t);return te(i,{code:K.invalid_type,expected:J.void,received:i.parsedType}),_e}return Zt(t.data)}}Xa.create=e=>new Xa({typeName:me.ZodVoid,...ke(e)});class jn extends Ie{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==J.array)return te(n,{code:K.invalid_type,expected:J.array,received:n.parsedType}),_e;if(o.exactLength!==null){const c=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(c||u)&&(te(n,{code:c?K.too_big:K.too_small,minimum:u?o.exactLength.value:void 0,maximum:c?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(te(n,{code:K.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(te(n,{code:K.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((c,u)=>o.type._parseAsync(new Vn(n,c,n.path,u)))).then(c=>jt.mergeArray(i,c));const a=[...n.data].map((c,u)=>o.type._parseSync(new Vn(n,c,n.path,u)));return jt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new jn({...this._def,minLength:{value:t,message:de.toString(n)}})}max(t,n){return new jn({...this._def,maxLength:{value:t,message:de.toString(n)}})}length(t,n){return new jn({...this._def,exactLength:{value:t,message:de.toString(n)}})}nonempty(t){return this.min(1,t)}}jn.create=(e,t)=>new jn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:me.ZodArray,...ke(t)});function zi(e){if(e instanceof gt){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=vr.create(zi(i))}return new gt({...e._def,shape:()=>t})}else return e instanceof jn?new jn({...e._def,type:zi(e.element)}):e instanceof vr?vr.create(zi(e.unwrap())):e instanceof _i?_i.create(zi(e.unwrap())):e instanceof Gn?Gn.create(e.items.map(t=>zi(t))):e}class gt extends Ie{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=Fe.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==J.object){const p=this._getOrReturnCtx(t);return te(p,{code:K.invalid_type,expected:J.object,received:p.parsedType}),_e}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:c}=this._getCached(),u=[];if(!(this._def.catchall instanceof br&&this._def.unknownKeys==="strip"))for(const p in o.data)c.includes(p)||u.push(p);const d=[];for(const p of c){const h=a[p],m=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new Vn(o,m,o.path,p)),alwaysSet:p in o.data})}if(this._def.catchall instanceof br){const p=this._def.unknownKeys;if(p==="passthrough")for(const h of u)d.push({key:{status:"valid",value:h},value:{status:"valid",value:o.data[h]}});else if(p==="strict")u.length>0&&(te(o,{code:K.unrecognized_keys,keys:u}),i.dirty());else if(p!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const p=this._def.catchall;for(const h of u){const m=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new Vn(o,m,o.path,h)),alwaysSet:h in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const p=[];for(const h of d){const m=await h.key;p.push({key:m,value:await h.value,alwaysSet:h.alwaysSet})}return p}).then(p=>jt.mergeObjectSync(i,p)):jt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return de.errToObj,new gt({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,c,u;const d=(c=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&c!==void 0?c:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=de.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new gt({...this._def,unknownKeys:"strip"})}passthrough(){return new gt({...this._def,unknownKeys:"passthrough"})}extend(t){return new gt({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new gt({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:me.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new gt({...this._def,catchall:t})}pick(t){const n={};return Fe.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new gt({...this._def,shape:()=>n})}omit(t){const n={};return Fe.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new gt({...this._def,shape:()=>n})}deepPartial(){return zi(this)}partial(t){const n={};return Fe.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new gt({...this._def,shape:()=>n})}required(t){const n={};return Fe.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof vr;)a=a._def.innerType;n[i]=a}}),new gt({...this._def,shape:()=>n})}keyof(){return Z1(Fe.objectKeys(this.shape))}}gt.create=(e,t)=>new gt({shape:()=>e,unknownKeys:"strip",catchall:br.create(),typeName:me.ZodObject,...ke(t)});gt.strictCreate=(e,t)=>new gt({shape:()=>e,unknownKeys:"strict",catchall:br.create(),typeName:me.ZodObject,...ke(t)});gt.lazycreate=(e,t)=>new gt({shape:e,unknownKeys:"strip",catchall:br.create(),typeName:me.ZodObject,...ke(t)});class ao extends Ie{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const c=a.map(u=>new Un(u.ctx.common.issues));return te(n,{code:K.invalid_union,unionErrors:c}),_e}if(n.common.async)return Promise.all(i.map(async a=>{const c={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:c}),ctx:c}})).then(o);{let a;const c=[];for(const d of i){const p={...n,common:{...n.common,issues:[]},parent:null},h=d._parseSync({data:n.data,path:n.path,parent:p});if(h.status==="valid")return h;h.status==="dirty"&&!a&&(a={result:h,ctx:p}),p.common.issues.length&&c.push(p.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=c.map(d=>new Un(d));return te(n,{code:K.invalid_union,unionErrors:u}),_e}}get options(){return this._def.options}}ao.create=(e,t)=>new ao({options:e,typeName:me.ZodUnion,...ke(t)});const La=e=>e instanceof uo?La(e.schema):e instanceof Dn?La(e.innerType()):e instanceof fo?[e.value]:e instanceof Gr?e.options:e instanceof ho?Object.keys(e.enum):e instanceof po?La(e._def.innerType):e instanceof so?[void 0]:e instanceof oo?[null]:null;class Sl extends Ie{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==J.object)return te(n,{code:K.invalid_type,expected:J.object,received:n.parsedType}),_e;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(te(n,{code:K.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),_e)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const c=La(a.shape[t]);if(!c)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of c){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new Sl({typeName:me.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...ke(i)})}}function Eu(e,t){const n=Hr(e),i=Hr(t);if(e===t)return{valid:!0,data:e};if(n===J.object&&i===J.object){const o=Fe.objectKeys(t),a=Fe.objectKeys(e).filter(u=>o.indexOf(u)!==-1),c={...e,...t};for(const u of a){const d=Eu(e[u],t[u]);if(!d.valid)return{valid:!1};c[u]=d.data}return{valid:!0,data:c}}else if(n===J.array&&i===J.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const c=e[a],u=t[a],d=Eu(c,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===J.date&&i===J.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class lo extends Ie{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,c)=>{if(Cu(a)||Cu(c))return _e;const u=Eu(a.value,c.value);return u.valid?((Su(a)||Su(c))&&n.dirty(),{status:n.value,value:u.data}):(te(i,{code:K.invalid_intersection_types}),_e)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,c])=>o(a,c)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}lo.create=(e,t,n)=>new lo({left:e,right:t,typeName:me.ZodIntersection,...ke(n)});class Gn extends Ie{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==J.array)return te(i,{code:K.invalid_type,expected:J.array,received:i.parsedType}),_e;if(i.data.length<this._def.items.length)return te(i,{code:K.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),_e;!this._def.rest&&i.data.length>this._def.items.length&&(te(i,{code:K.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((c,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Vn(i,c,i.path,u)):null}).filter(c=>!!c);return i.common.async?Promise.all(a).then(c=>jt.mergeArray(n,c)):jt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Gn({...this._def,rest:t})}}Gn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Gn({items:e,typeName:me.ZodTuple,rest:null,...ke(t)})};class co extends Ie{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==J.object)return te(i,{code:K.invalid_type,expected:J.object,received:i.parsedType}),_e;const o=[],a=this._def.keyType,c=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Vn(i,u,i.path,u)),value:c._parse(new Vn(i,i.data[u],i.path,u))});return i.common.async?jt.mergeObjectAsync(n,o):jt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Ie?new co({keyType:t,valueType:n,typeName:me.ZodRecord,...ke(i)}):new co({keyType:Mn.create(),valueType:t,typeName:me.ZodRecord,...ke(n)})}}class Ya extends Ie{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==J.map)return te(i,{code:K.invalid_type,expected:J.map,received:i.parsedType}),_e;const o=this._def.keyType,a=this._def.valueType,c=[...i.data.entries()].map(([u,d],p)=>({key:o._parse(new Vn(i,u,i.path,[p,"key"])),value:a._parse(new Vn(i,d,i.path,[p,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of c){const p=await d.key,h=await d.value;if(p.status==="aborted"||h.status==="aborted")return _e;(p.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(p.value,h.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of c){const p=d.key,h=d.value;if(p.status==="aborted"||h.status==="aborted")return _e;(p.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(p.value,h.value)}return{status:n.value,value:u}}}}Ya.create=(e,t,n)=>new Ya({valueType:t,keyType:e,typeName:me.ZodMap,...ke(n)});class bi extends Ie{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==J.set)return te(i,{code:K.invalid_type,expected:J.set,received:i.parsedType}),_e;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(te(i,{code:K.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(te(i,{code:K.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function c(d){const p=new Set;for(const h of d){if(h.status==="aborted")return _e;h.status==="dirty"&&n.dirty(),p.add(h.value)}return{status:n.value,value:p}}const u=[...i.data.values()].map((d,p)=>a._parse(new Vn(i,d,i.path,p)));return i.common.async?Promise.all(u).then(d=>c(d)):c(u)}min(t,n){return new bi({...this._def,minSize:{value:t,message:de.toString(n)}})}max(t,n){return new bi({...this._def,maxSize:{value:t,message:de.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}bi.create=(e,t)=>new bi({valueType:e,minSize:null,maxSize:null,typeName:me.ZodSet,...ke(t)});class Zi extends Ie{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==J.function)return te(n,{code:K.invalid_type,expected:J.function,received:n.parsedType}),_e;function i(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,qa(),ro].filter(p=>!!p),issueData:{code:K.invalid_arguments,argumentsError:d}})}function o(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,qa(),ro].filter(p=>!!p),issueData:{code:K.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},c=n.data;return this._def.returns instanceof ns?Zt(async(...u)=>{const d=new Un([]),p=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),h=await c(...p);return await this._def.returns._def.type.parseAsync(h,a).catch(v=>{throw d.addIssue(o(h,v)),d})}):Zt((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Un([i(u,d.error)]);const p=c(...d.data),h=this._def.returns.safeParse(p,a);if(!h.success)throw new Un([o(p,h.error)]);return h.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Zi({...this._def,args:Gn.create(t).rest(mi.create())})}returns(t){return new Zi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Zi({args:t||Gn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:me.ZodFunction,...ke(i)})}}class uo extends Ie{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}uo.create=(e,t)=>new uo({getter:e,typeName:me.ZodLazy,...ke(t)});class fo extends Ie{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return te(n,{received:n.data,code:K.invalid_literal,expected:this._def.value}),_e}return{status:"valid",value:t.data}}get value(){return this._def.value}}fo.create=(e,t)=>new fo({value:e,typeName:me.ZodLiteral,...ke(t)});function Z1(e,t){return new Gr({values:e,typeName:me.ZodEnum,...ke(t)})}class Gr extends Ie{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return te(n,{expected:Fe.joinValues(i),received:n.parsedType,code:K.invalid_type}),_e}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return te(n,{received:n.data,code:K.invalid_enum_value,options:i}),_e}return Zt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Gr.create(t)}exclude(t){return Gr.create(this.options.filter(n=>!t.includes(n)))}}Gr.create=Z1;class ho extends Ie{_parse(t){const n=Fe.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==J.string&&i.parsedType!==J.number){const o=Fe.objectValues(n);return te(i,{expected:Fe.joinValues(o),received:i.parsedType,code:K.invalid_type}),_e}if(n.indexOf(t.data)===-1){const o=Fe.objectValues(n);return te(i,{received:i.data,code:K.invalid_enum_value,options:o}),_e}return Zt(t.data)}get enum(){return this._def.values}}ho.create=(e,t)=>new ho({values:e,typeName:me.ZodNativeEnum,...ke(t)});class ns extends Ie{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==J.promise&&n.common.async===!1)return te(n,{code:K.invalid_type,expected:J.promise,received:n.parsedType}),_e;const i=n.parsedType===J.promise?n.data:Promise.resolve(n.data);return Zt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ns.create=(e,t)=>new ns({type:e,typeName:me.ZodPromise,...ke(t)});class Dn extends Ie{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===me.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const c=o.transform(i.data);return i.common.async?Promise.resolve(c).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:c,path:i.path,parent:i})}const a={addIssue:c=>{te(i,c),c.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const c=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?_e:(u.status==="dirty"&&n.dirty(),c(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?_e:(u.status==="dirty"&&n.dirty(),c(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Va(c))return c;const u=o.transform(c.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>Va(c)?Promise.resolve(o.transform(c.value,a)).then(u=>({status:n.value,value:u})):c);Fe.assertNever(o)}}Dn.create=(e,t,n)=>new Dn({schema:e,typeName:me.ZodEffects,effect:t,...ke(n)});Dn.createWithPreprocess=(e,t,n)=>new Dn({schema:t,effect:{type:"preprocess",transform:e},typeName:me.ZodEffects,...ke(n)});class vr extends Ie{_parse(t){return this._getType(t)===J.undefined?Zt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}vr.create=(e,t)=>new vr({innerType:e,typeName:me.ZodOptional,...ke(t)});class _i extends Ie{_parse(t){return this._getType(t)===J.null?Zt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}_i.create=(e,t)=>new _i({innerType:e,typeName:me.ZodNullable,...ke(t)});class po extends Ie{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===J.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}po.create=(e,t)=>new po({innerType:e,typeName:me.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...ke(t)});class Ja extends Ie{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Ga(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Un(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Un(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Ja.create=(e,t)=>new Ja({innerType:e,typeName:me.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...ke(t)});class el extends Ie{_parse(t){if(this._getType(t)!==J.nan){const i=this._getOrReturnCtx(t);return te(i,{code:K.invalid_type,expected:J.nan,received:i.parsedType}),_e}return{status:"valid",value:t.data}}}el.create=e=>new el({typeName:me.ZodNaN,...ke(e)});const ek=Symbol("zod_brand");class q1 extends Ie{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class $o extends Ie{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?_e:a.status==="dirty"?(n.dirty(),W1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?_e:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new $o({in:t,out:n,typeName:me.ZodPipeline})}}const K1=(e,t={},n)=>e?ts.create().superRefine((i,o)=>{var a,c;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(c=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&c!==void 0?c:!0,p=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...p,fatal:d})}}):ts.create(),tk={object:gt.lazycreate};var me;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(me||(me={}));const nk=(e,t={message:`Input not instance of ${e.name}`})=>K1(n=>n instanceof e,t),V1=Mn.create,G1=Kr.create,rk=el.create,ik=Vr.create,Q1=io.create,sk=yi.create,ok=Qa.create,ak=so.create,lk=oo.create,ck=ts.create,uk=mi.create,dk=br.create,fk=Xa.create,hk=jn.create,pk=gt.create,gk=gt.strictCreate,mk=ao.create,vk=Sl.create,yk=lo.create,bk=Gn.create,_k=co.create,wk=Ya.create,xk=bi.create,$k=Zi.create,kk=uo.create,Ck=fo.create,Sk=Gr.create,Ek=ho.create,Tk=ns.create,Kp=Dn.create,Ak=vr.create,Ik=_i.create,Rk=Dn.createWithPreprocess,Ok=$o.create,Lk=()=>V1().optional(),Pk=()=>G1().optional(),Mk=()=>Q1().optional(),Bk={string:e=>Mn.create({...e,coerce:!0}),number:e=>Kr.create({...e,coerce:!0}),boolean:e=>io.create({...e,coerce:!0}),bigint:e=>Vr.create({...e,coerce:!0}),date:e=>yi.create({...e,coerce:!0})},Uk=_e;var Sa=Object.freeze({__proto__:null,defaultErrorMap:ro,setErrorMap:H9,getErrorMap:qa,makeIssue:Ka,EMPTY_PATH:z9,addIssueToContext:te,ParseStatus:jt,INVALID:_e,DIRTY:W1,OK:Zt,isAborted:Cu,isDirty:Su,isValid:Va,isAsync:Ga,get util(){return Fe},get objectUtil(){return ku},ZodParsedType:J,getParsedType:Hr,ZodType:Ie,ZodString:Mn,ZodNumber:Kr,ZodBigInt:Vr,ZodBoolean:io,ZodDate:yi,ZodSymbol:Qa,ZodUndefined:so,ZodNull:oo,ZodAny:ts,ZodUnknown:mi,ZodNever:br,ZodVoid:Xa,ZodArray:jn,ZodObject:gt,ZodUnion:ao,ZodDiscriminatedUnion:Sl,ZodIntersection:lo,ZodTuple:Gn,ZodRecord:co,ZodMap:Ya,ZodSet:bi,ZodFunction:Zi,ZodLazy:uo,ZodLiteral:fo,ZodEnum:Gr,ZodNativeEnum:ho,ZodPromise:ns,ZodEffects:Dn,ZodTransformer:Dn,ZodOptional:vr,ZodNullable:_i,ZodDefault:po,ZodCatch:Ja,ZodNaN:el,BRAND:ek,ZodBranded:q1,ZodPipeline:$o,custom:K1,Schema:Ie,ZodSchema:Ie,late:tk,get ZodFirstPartyTypeKind(){return me},coerce:Bk,any:ck,array:hk,bigint:ik,boolean:Q1,date:sk,discriminatedUnion:vk,effect:Kp,enum:Sk,function:$k,instanceof:nk,intersection:yk,lazy:kk,literal:Ck,map:wk,nan:rk,nativeEnum:Ek,never:dk,null:lk,nullable:Ik,number:G1,object:pk,oboolean:Mk,onumber:Pk,optional:Ak,ostring:Lk,pipeline:Ok,preprocess:Rk,promise:Tk,record:_k,set:xk,strictObject:gk,string:V1,symbol:ok,transformer:Kp,tuple:bk,undefined:ak,union:mk,unknown:uk,void:fk,NEVER:Uk,ZodIssueCode:K,quotelessJson:N9,ZodError:Un});const jk=/^[0-9a-f]{64}$/,Gs=e=>{const t=typeof e=="string"&&e.length===64&&jk.test(e);return t||console.warn("invalid id is ignored: ",e),t},Dk=Sa.tuple([Sa.literal("emoji"),Sa.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),Sa.string().url()]),Nk=e=>t=>e.safeParse(t).success,Cn=e=>{let t;return{get rawEvent(){return e},get id(){return e.id},get pubkey(){return e.pubkey},get createdAt(){return e.created_at},get content(){return e.content},get tags(){return e.tags},createdAtAsDate(){return new Date(e.created_at*1e3)},pTags(){return e.tags.filter(([n,i])=>n==="p"&&Gs(i))},eTags(){return e.tags.filter(([n,i])=>n==="e"&&Gs(i))},emojiTags(){return e.tags.filter(Nk(Dk))},taggedEventIds(){return this.eTags().map(([,n])=>n)},lastTaggedEventId(){const n=this.taggedEventIds();if(n.length!==0)return n[n.length-1]},markedEventTags(){if(e.kind!==kt.Text)throw new Error("kind should be 1");if(t!=null)return t;const n=e.tags.map((o,a)=>[o,a]).filter(([[o,a]])=>o==="e"&&Gs(a)),i=(o,a)=>{if(e.kind===1)return o==="root"||o==="reply"||o==="mention"?o:n.length===1?"reply":a===0?"root":n.length===2||a===n.length-1?"reply":"mention"};return t=n.map(([[,o,a,c],u],d)=>({id:o,relayUrl:a,marker:i(c,d),index:u})),t},replyingToEvent(){return this.markedEventTags().find(({marker:n})=>n==="reply")},rootEvent(){return this.markedEventTags().find(({marker:n})=>n==="root")},mentionedEvents(){return this.markedEventTags().filter(({marker:n})=>n==="mention")},mentionedPubkeys(){return gr(this.pTags().map(([,n])=>n))},contentWarning(){const n=e.tags.find(([o])=>o==="content-warning");return n==null?{contentWarning:!1}:{contentWarning:!0,reason:(n[1]?.length??0)>0?n[1]:void 0}},containsEventMention(n){const i=e.tags.findIndex(([o,a])=>o==="e"&&a===n);return i<0?!1:this.containsEventMentionIndex(i)},containsEventMentionIndex(n){return n<0||n>=e.tags.length?!1:e.content.includes(`#[${n}]`)},getEmojiUrl(n){const i=this.emojiTags().find(([,a])=>a===n);if(i==null)return null;const[,,o]=i;return o}}},Hk=()=>{const e=[...M9];return window.navigator.language.includes("ja")&&e.push(...B9),e},X1=()=>({relayUrls:Hk(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),zk=e=>JSON.stringify(e),Fk=e=>({...X1(),...JSON.parse(e)}),Wk=g4(()=>window.localStorage,zk,Fk),[Fs,cn]=m4("RabbitConfig",X1(),Wk),je=()=>{const e=k=>{cn("relayUrls",E=>gr([...E,k]))},t=k=>{cn("relayUrls",E=>E.filter(M=>M!==k))},n=k=>{cn("mutedPubkeys",E=>gr([...E,k]))},i=k=>{cn("mutedPubkeys",E=>E.filter(M=>M!==k))},o=k=>{cn("mutedKeywords",E=>gr([...E,k]))},a=k=>{cn("mutedKeywords",E=>E.filter(M=>M!==k))},c=k=>{cn("columns",E=>{const M=E.findIndex(B=>B.id===k.id);if(M>=0){const B=[...E];return B.splice(M,1,k),B}return[...E,k]})},u=(k,E)=>{cn("columns",M=>{const B=E-1,A=Math.max(Math.min(B,M.length),0),T=M.findIndex(W=>W.id===k);if(T<0||A===T)return M;console.log(T,A);const L=[...M],[D]=L.splice(T,1);return L.splice(A,0,D),L})},d=k=>{cn("columns",E=>E.filter(M=>M.id!==k))},p=k=>{cn("customEmojis",E=>({...E,[k.shortcode]:k}))},h=k=>{cn("customEmojis",E=>({...E,[k]:void 0}))},m=k=>Fs.customEmojis[k],v=k=>Fs.mutedPubkeys.includes(k),w=k=>k.kind===kt.Text?Fs.mutedKeywords.some(E=>k.content.includes(E)):!1;return{config:()=>Fs,setConfig:cn,addRelay:e,removeRelay:t,saveColumn:c,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:k})=>{if((Fs.columns?.length??0)>0)return;const E=[j1({width:"widest",pubkey:k}),D1({pubkey:k}),H1({name:"自分の投稿",pubkey:k}),z1({name:"自分のリアクション",pubkey:k})];navigator.language.includes("ja")&&E.splice(2,0,N1()),cn("columns",()=>[...E])},saveEmoji:p,removeEmoji:h,getEmoji:m,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:v,shouldMuteEvent:k=>{const E=Cn(k);return v(k.pubkey)||E.mentionedPubkeys().some(v)||w(k)}}},Zk=()=>{let e,t;const n=new Promise((i,o)=>{e=i,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:n,resolve:e,reject:t}},qk=e=>{const t=Ke(e),n=Ke(()=>t().batchSize??100),i=Ke(()=>t().interval??2e3),[o,a]=xe(0),[c,u]=xe([]);let d;const p=()=>{const{executor:S}=t(),k=c();k.length>0&&(u([]),S(k)),d!=null&&clearTimeout(d),d=void 0},h=()=>{const S=o();return a(k=>k+1),S},m=()=>{d==null&&(d=setTimeout(()=>{p()},i()))},v=S=>{c().length<n()?u(k=>[...k,S]):(p(),u([S]))},w=S=>{u(k=>k.filter(E=>E.id!==S))};return{exec:async(S,k)=>{const{promise:E,resolve:M,reject:B}=Zk(),A=h();return v({id:A,args:S,resolve:M,reject:B}),m(),k?.addEventListener("abort",()=>{w(A),B(new Error("AbortError"))}),E}}},[Kk]=xe(new D7),El=()=>Kk,[Vk,Vp]=Ki({activeSubscriptions:0,activeBatchSubscriptions:0}),Y1=()=>({stats:Vk,setActiveSubscriptions:n=>Vp("activeSubscriptions",n),setActiveBatchSubscriptions:n=>Vp("activeBatchSubscriptions",n)}),Jr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const c=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(c))},e)});return Promise.race([n,i])},Gk=/\p{Emoji_Presentation}/u;let Tu=0;const{setActiveBatchSubscriptions:Qk}=Y1();setInterval(()=>{Qk(Tu)},1e3);const Xk={events:[],completed:!0},Yk=()=>Xk,{exec:ko}=qk(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,c=new Map;e.forEach(T=>{if(T.args.type==="Event"){const L=n.get(T.args.eventId)??[];n.set(T.args.eventId,[...L,T])}else if(T.args.type==="Profile"){const L=t.get(T.args.pubkey)??[];t.set(T.args.pubkey,[...L,T])}else if(T.args.type==="Reactions"){const L=i.get(T.args.mentionedEventId)??[];i.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="Reposts"){const L=o.get(T.args.mentionedEventId)??[];o.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="ZapReceipts"){const L=a.get(T.args.mentionedEventId)??[];o.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="Followings"){const L=c.get(T.args.pubkey)??[];c.set(T.args.pubkey,[...L,T])}});const u=[...n.keys()],d=[...t.keys()],p=[...i.keys()],h=[...o.keys()],m=[...a.keys()],v=[...c.keys()],w=[];if(u.length>0&&w.push({ids:u}),d.length>0&&w.push({kinds:[kt.Metadata],authors:d}),p.length>0&&w.push({kinds:[kt.Reaction],"#e":p}),h.length>0&&w.push({kinds:[6],"#e":h}),m.length>0&&w.push({kinds:[9735],"#e":m}),v.length>0&&w.push({kinds:[kt.Contacts],authors:v}),w.length===0)return;const $=new Map,S=(T,L)=>{T.forEach(D=>{const W=$.get(D.id)??xe({events:[],completed:!1});$.set(D.id,W);const[ne,V]=W;V(ie=>({...ie,events:[...ie.events,L]})),D.resolve(ne)})},k=()=>{e.forEach(T=>{const L=$.get(T.id);if(L!=null){const D=L[1];D(W=>({...W,completed:!0}))}else T.resolve(Yk)})},{config:E,shouldMuteEvent:M}=je(),A=El()().sub(E().relayUrls,w,{});Tu+=1,A.on("event",T=>{if(T.kind===kt.Metadata){const L=t.get(T.pubkey)??[];S(L,T);return}if(T.kind===kt.Reaction){const L=Cn(T).lastTaggedEventId();if(L!=null){const D=i.get(L)??[];S(D,T)}}else if(T.kind===6){const L=Cn(T).lastTaggedEventId();if(L!=null){const D=o.get(L)??[];S(D,T)}}else if(T.kind===kt.Zap)Cn(T).eTags().forEach(([,D])=>{const W=o.get(D)??[];S(W,T)});else if(T.kind===kt.Contacts){const L=c.get(T.pubkey)??[];S(L,T)}else{const L=n.get(T.id)??[];L.length>0?S(L,T):console.warn("unknown event received")}}),A.on("eose",()=>{k(),A.unsub(),Tu-=1})}})),J1=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),ms=e=>{const t=os(),n=Ke(e),i=Ke(()=>["useProfile",n()]),o=as(i,({queryKey:u,signal:d})=>{const[,p]=u;if(p==null)return Promise.resolve(null);const{pubkey:h}=p;if(h.startsWith("npub1"))return Promise.resolve(null);const m=ko({type:"Profile",pubkey:h},d).then(v=>{const w=()=>{const $=J1(v().events);if($==null)throw new Error(`profile not found: ${h}`);return $};return dl(v).subscribe(()=>{try{t.setQueryData(u,w())}catch($){console.error("error occurred while updating profile cache: ",$)}}),w()});return Jr(15e3,`useProfile: ${h}`)(m)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3});return{profile:Ke(()=>{if(o.data==null)return null;const{content:u}=o.data;if(u==null||u.length===0)return null;try{return JSON.parse(u)}catch(d){return console.warn("failed to parse profile (kind 0): ",d,u),null}}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},em=e=>{const t=Ke(e),n=as(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return null;const{eventId:u}=c,d=ko({type:"Event",eventId:u},a).then(p=>{const h=p().events[0];if(h==null)throw new Error(`event not found: ${u}`);return h});return Jr(15e3,`useEvent: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},Jk=e=>{const t=os(),n=Ke(e),i=Ke(()=>["useReactions",n()]),o=as(i,({queryKey:h,signal:m})=>{const[,v]=h;if(v==null)return[];const{eventId:w}=v,$=ko({type:"Reactions",mentionedEventId:w},m).then(S=>{const k=()=>S().events;return dl(S).subscribe(()=>{t.setQueryData(h,k())}),k()});return Jr(15e3,`useReactions: ${w}`)($)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reactions:a,reactionsGroupedByContent:()=>{const h=new Map;return a().forEach(m=>{const v=h.get(m.content)??[];v.push(m),h.set(m.content,v)}),h},isReactedBy:h=>a().findIndex(m=>m.pubkey===h)!==-1,isReactedByWithEmoji:h=>a().findIndex(m=>m.pubkey===h&&Gk.test(m.content))!==-1,invalidateReactions:()=>t.invalidateQueries(i()),query:o}},eC=e=>{const t=os(),n=Ke(e),i=Ke(()=>["useReposts",n()]),o=as(i,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return[];const{eventId:m}=h,v=ko({type:"Reposts",mentionedEventId:m},p).then(w=>{const $=()=>w().events;return dl(w).subscribe(()=>{t.setQueryData(d,$())}),$()});return Jr(15e3,`useReposts: ${m}`)(v)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reposts:a,isRepostedBy:d=>a().findIndex(p=>p.pubkey===d)!==-1,invalidateReposts:()=>t.invalidateQueries(i()),query:o}},Au=e=>{const t=os(),n=Ke(e),i=()=>["useFollowings",n()],o=as(i,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return Promise.resolve(null);const{pubkey:m}=h,v=ko({type:"Followings",pubkey:m},p).then(w=>{const $=()=>{const S=J1(w().events);if(S==null)throw new Error(`followings not found: ${m}`);return S};return dl(w).subscribe(()=>{try{t.setQueryData(d,$())}catch(S){console.error("error occurred while updating followings cache: ",S)}}),$()});return Jr(15e3,`useFollowings: ${m}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return Cn(o.data).pTags().forEach(h=>{const[,m,v,w]=h,$={pubkey:m,petname:w};v!=null&&v.length>0&&($.mainRelayUrl=v),d.push($)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},dn=e=>t=>e.some(n=>n==null)?null:t(e),tC=P("<span>投稿が見つかりません"),nC=P('<div class="truncate">読み込み中 '),go=e=>{const[t,n]=o4(e,["eventId"]),{shouldMuteEvent:i}=je(),{event:o,query:a}=em(()=>dn([t.eventId])(([u])=>({eventId:u}))),c=()=>{const u=o();return u!=null&&i(u)};return _(Bn,{get fallback(){return(()=>{const u=tC();return u.firstChild,I(u,()=>e.eventId,null),u})()},get children(){return[_(ze,{get when(){return c()},children:null}),_(ze,{get when(){return o()},keyed:!0,children:u=>_(Fm,a4({event:u},n))}),_(ze,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=nC();return d.firstChild,I(d,_(no,{eventId:u}),null),d})()})]}})},{npubEncode:rC}=xo,Tl=e=>{try{return rC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Al=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return _(Bn,{get fallback(){return Tl(e.pubkey)},get children(){return[_(ze,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),_(ze,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",Ke(()=>t()?.name)]}})]}})},tm=e=>{const[t,n]=xe(new Date);return pr(()=>{const i=setInterval(()=>{n(new Date)},e().interval);Xr(()=>clearInterval(i))}),t},iC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},Gp=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,sC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleDateString()}},oC=e=>{switch(e.kind){case"today":return Gp(e.value);case"yesterday":return`昨日 ${Gp(e.value)}`;case"abs":default:return e.value.toLocaleString()}},aC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,lC=(e,t)=>{const n=aC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},Qp=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),cC=e=>new Date(+e-24*60*60*1e3),nm=(e,t,n)=>Qp(e,t)?n({kind:"today",value:e}):Qp(e,cC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),uC=(e,t=new Date)=>nm(e,t,sC),dC=(e,t=new Date)=>nm(e,t,oC),Xp=(e,t=new Date,n=iC)=>n(lC(e,t)),Yp=tm(()=>({interval:7e3})),Jp=tm(()=>({interval:60*1e3})),rm=()=>{const{config:e}=je();return t=>{switch(e().dateFormat){case"absolute-long":return uC(t,Jp());case"absolute-short":return dC(t,Jp());case"relative":return Xp(t,Yp());default:return Xp(t,Yp())}}},[fC,Ni]=xe({type:"Closed"}),ei=()=>({modalState:fC,setModalState:Ni,showProfile:a=>{Ni({type:"Profile",pubkey:a})},showProfileEdit:()=>{Ni({type:"ProfileEdit"})},showAddColumn:()=>{Ni({type:"AddColumn"})},showAbout:()=>{Ni({type:"About"})},closeModal:()=>{Ni({type:"Closed"})}}),hC=P('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),im=e=>{const{showProfile:t}=ei(),n=rm(),i=Ke(()=>Cn(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=hC(),c=a.firstChild,u=c.firstChild,d=u.nextSibling,p=d.firstChild,h=d.nextSibling,m=c.nextSibling;return I(u,_(B1,{})),p.$$click=()=>t(e.event.pubkey),I(p,_(Al,{get pubkey(){return e.event.pubkey}})),I(h,()=>n(i().createdAtAsDate())),I(m,_(go,{get eventId(){return o()}})),a})()};wt(["click"]);const pC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),gC=(e={})=>(()=>{const t=pC();return Xe(t,e,!0,!0),t})(),mC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),sm=(e={})=>(()=>{const t=mC();return Xe(t,e,!0,!0),t})(),vC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),pd=(e={})=>(()=>{const t=vC();return Xe(t,e,!0,!0),t})(),yC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),om=(e={})=>(()=>{const t=yC();return Xe(t,e,!0,!0),t})(),bC=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),gd=(e={})=>(()=>{const t=bC();return Xe(t,e,!0,!0),t})(),_C=P('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),md=e=>{let t,n;const[i,o]=xe(!1),[a,c]=xe({}),u=l4(()=>e.children),d=()=>o(!1),p=()=>o($=>!$),h=$=>{const S=$.target;S!=null&&!n?.contains(S)&&d()},m=()=>{document.addEventListener("mousedown",h)},v=()=>{document.removeEventListener("mousedown",h)},w=()=>{if(t==null||n==null)return;const $=t?.getBoundingClientRect(),S=n?.getBoundingClientRect();let{top:k,left:E}=$;e.position==="left"?E-=$.width:e.position==="right"?E+=$.width:e.position==="top"?(k-=$.height,E-=$.left+$.width/2):(k+=$.height,E+=$.width/2),k=Math.min(k,window.innerHeight-S.height),E=Math.min(E,window.innerWidth-S.width),c({left:`${E}px`,top:`${k}px`})};return pr(()=>{i()?(m(),e.onOpen?.()):(v(),e.onClose?.())}),pr(ul(u,()=>{w()})),pr(()=>{i()&&w()}),Sn(()=>{e.ref?.({close:d})}),Xr(()=>v()),(()=>{const $=_C(),S=$.firstChild,k=S.nextSibling;S.$$click=()=>{p(),w()};const E=t;typeof E=="function"?yr(E,S):t=S,I(S,()=>e.button);const M=n;return typeof M=="function"?yr(M,k):n=k,I(k,u),Pe(B=>{const A=!i(),T=!!i(),L=a();return A!==B._v$&&k.classList.toggle("hidden",B._v$=A),T!==B._v$2&&k.classList.toggle("block",B._v$2=T),B._v$3=c4(k,L,B._v$3),B},{_v$:void 0,_v$2:void 0,_v$3:void 0}),$})()};wt(["click"]);const wC=P('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),xC=P('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),$C=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=wC(),i=n.firstChild;return i.$$click=t,I(i,()=>e.item.content()),n})()},am=e=>{let t;const n=()=>t?.close();return _(md,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=xC();return I(i,_(Ut,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>_($C,{item:o,onClose:n})})),i}})};wt(["click"]);function lm(e){return e&&e.__esModule?e.default:e}function Ln(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Il,he,cm,Qs,um,e0,tl={},dm=[],kC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Fr(e,t){for(var n in t)e[n]=t[n];return e}function fm(e){var t=e.parentNode;t&&t.removeChild(e)}function Iu(e,t,n){var i,o,a,c={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?Il.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return Pa(e,c,i,o,null)}function Pa(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++cm};return o==null&&he.vnode!=null&&he.vnode(a),a}function ur(){return{current:null}}function rs(e){return e.children}function Zn(e,t){this.props=e,this.context=t}function is(e,t){if(t==null)return e.__?is(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?is(e):null}function hm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return hm(e)}}function t0(e){(!e.__d&&(e.__d=!0)&&Qs.push(e)&&!nl.__r++||e0!==he.debounceRendering)&&((e0=he.debounceRendering)||um)(nl)}function nl(){for(var e;nl.__r=Qs.length;)e=Qs.sort(function(t,n){return t.__v.__b-n.__v.__b}),Qs=[],e.some(function(t){var n,i,o,a,c,u;t.__d&&(c=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Fr({},a)).__v=a.__v+1,vd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[c]:null,i,c??is(a),a.__h),vm(i,a),a.__e!=c&&hm(a)))})}function pm(e,t,n,i,o,a,c,u,d,p){var h,m,v,w,$,S,k,E=i&&i.__k||dm,M=E.length;for(n.__k=[],h=0;h<t.length;h++)if((w=n.__k[h]=(w=t[h])==null||typeof w=="boolean"?null:typeof w=="string"||typeof w=="number"||typeof w=="bigint"?Pa(null,w,null,null,w):Array.isArray(w)?Pa(rs,{children:w},null,null,null):w.__b>0?Pa(w.type,w.props,w.key,null,w.__v):w)!=null){if(w.__=n,w.__b=n.__b+1,(v=E[h])===null||v&&w.key==v.key&&w.type===v.type)E[h]=void 0;else for(m=0;m<M;m++){if((v=E[m])&&w.key==v.key&&w.type===v.type){E[m]=void 0;break}v=null}vd(e,w,v=v||tl,o,a,c,u,d,p),$=w.__e,(m=w.ref)&&v.ref!=m&&(k||(k=[]),v.ref&&k.push(v.ref,null,w),k.push(m,w.__c||$,w)),$!=null?(S==null&&(S=$),typeof w.type=="function"&&w.__k===v.__k?w.__d=d=gm(w,d,e):d=mm(e,w,v,E,$,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=is(v))}for(n.__e=S,h=M;h--;)E[h]!=null&&(typeof n.type=="function"&&E[h].__e!=null&&E[h].__e==n.__d&&(n.__d=is(i,h+1)),bm(E[h],E[h]));if(k)for(h=0;h<k.length;h++)ym(k[h],k[++h],k[++h])}function gm(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?gm(i,t,n):mm(n,i,i,o,i.__e,t));return t}function rl(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){rl(n,t)}):t.push(e)),t}function mm(e,t,n,i,o,a){var c,u,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),c=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),c=a}return c!==void 0?c:o.nextSibling}function CC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||il(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||il(e,a,t[a],n[a],i)}function n0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||kC.test(t)?n:n+"px"}function il(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||n0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||n0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?i0:r0,a):e.removeEventListener(t,a?i0:r0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function r0(e){this.l[e.type+!1](he.event?he.event(e):e)}function i0(e){this.l[e.type+!0](he.event?he.event(e):e)}function vd(e,t,n,i,o,a,c,u,d){var p,h,m,v,w,$,S,k,E,M,B,A=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(p=he.__b)&&p(t);try{e:if(typeof A=="function"){if(k=t.props,E=(p=A.contextType)&&i[p.__c],M=p?E?E.props.value:p.__:i,n.__c?S=(h=t.__c=n.__c).__=h.__E:("prototype"in A&&A.prototype.render?t.__c=h=new A(k,M):(t.__c=h=new Zn(k,M),h.constructor=A,h.render=EC),E&&E.sub(h),h.props=k,h.state||(h.state={}),h.context=M,h.__n=i,m=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),A.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=Fr({},h.__s)),Fr(h.__s,A.getDerivedStateFromProps(k,h.__s))),v=h.props,w=h.state,m)A.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(A.getDerivedStateFromProps==null&&k!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(k,M),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(k,h.__s,M)===!1||t.__v===n.__v){h.props=k,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),h.__h.length&&c.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(k,h.__s,M),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,w,$)})}h.context=M,h.props=k,h.state=h.__s,(p=he.__r)&&p(t),h.__d=!1,h.__v=t,h.__P=e,p=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(i=Fr(Fr({},i),h.getChildContext())),m||h.getSnapshotBeforeUpdate==null||($=h.getSnapshotBeforeUpdate(v,w)),B=p!=null&&p.type===rs&&p.key==null?p.props.children:p,pm(e,Array.isArray(B)?B:[B],t,n,i,o,a,c,u,d),h.base=t.__e,t.__h=null,h.__h.length&&c.push(h),S&&(h.__E=h.__=null),h.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=SC(n.__e,t,n,i,o,a,c,d);(p=he.diffed)&&p(t)}catch(T){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),he.__e(T,t,n)}}function vm(e,t){he.__c&&he.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){he.__e(i,n.__v)}})}function SC(e,t,n,i,o,a,c,u){var d,p,h,m=n.props,v=t.props,w=t.type,$=0;if(w==="svg"&&(o=!0),a!=null){for(;$<a.length;$++)if((d=a[$])&&"setAttribute"in d==!!w&&(w?d.localName===w:d.nodeType===3)){e=d,a[$]=null;break}}if(e==null){if(w===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,v.is&&v),a=null,u=!1}if(w===null)m===v||u&&e.data===v||(e.data=v);else{if(a=a&&Il.call(e.childNodes),p=(m=n.props||tl).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!u){if(a!=null)for(m={},$=0;$<e.attributes.length;$++)m[e.attributes[$].name]=e.attributes[$].value;(h||p)&&(h&&(p&&h.__html==p.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(CC(e,v,m,o,u),h)t.__k=[];else if($=t.props.children,pm(e,Array.isArray($)?$:[$],t,n,i,o&&w!=="foreignObject",a,c,a?a[0]:n.__k&&is(n,0),u),a!=null)for($=a.length;$--;)a[$]!=null&&fm(a[$]);u||("value"in v&&($=v.value)!==void 0&&($!==m.value||$!==e.value||w==="progress"&&!$)&&il(e,"value",$,m.value,!1),"checked"in v&&($=v.checked)!==void 0&&$!==e.checked&&il(e,"checked",$,m.checked,!1))}return e}function ym(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){he.__e(i,n)}}function bm(e,t,n){var i,o;if(he.unmount&&he.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||ym(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){he.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&bm(i[o],t,typeof e.type!="function");n||e.__e==null||fm(e.__e),e.__e=e.__d=void 0}function EC(e,t,n){return this.constructor(e,n)}function _m(e,t,n){var i,o,a;he.__&&he.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],vd(t,e=(!i&&n||t).__k=Iu(rs,null,[e]),o||tl,tl,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Il.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),vm(a,e)}Il=dm.slice,he={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},cm=0,Zn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Fr({},this.state),typeof e=="function"&&(e=e(Fr({},n),this.props)),e&&Fr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),t0(this))},Zn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),t0(this))},Zn.prototype.render=rs,Qs=[],um=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nl.__r=0;var TC=0;function z(e,t,n,i,o){var a,c,u={};for(c in t)c=="ref"?a=t[c]:u[c]=t[c];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--TC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return he.vnode&&he.vnode(d),d}function AC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function IC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var qr={set:AC,get:IC};const iu=new Map,RC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function OC(){for(const{v:e,emoji:t}of RC)if(wm(t))return e}function LC(){return!wm("🇨🇦")}function wm(e){if(iu.has(e))return iu.get(e);const t=PC(e);return iu.set(e,t),t}const PC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,c=a.length;let u=0;for(;u<c&&!a[u+3];u+=4);if(u>=c)return!1;const d=n+u/4%n,p=Math.floor(u/4/n),h=e.getImageData(d,p,1,1).data;return!(a[u]!==h[0]||a[u+2]!==h[2]||e.measureText(o).width>=n)}})();var s0={latestVersion:OC,noCountryFlags:LC};const Ru=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Lt=null;function MC(e){Lt||(Lt=qr.get("frequently")||{});const t=e.id||e;t&&(Lt[t]||(Lt[t]=0),Lt[t]+=1,qr.set("last",t),qr.set("frequently",Lt))}function BC({maxFrequentRows:e,perLine:t}){if(!e)return[];Lt||(Lt=qr.get("frequently"));let n=[];if(!Lt){Lt={};for(let a in Ru.slice(0,t)){const c=Ru[a];Lt[c]=t-a,n.push(c)}return n}const i=e*t,o=qr.get("last");for(let a in Lt)n.push(a);if(n.sort((a,c)=>{const u=Lt[c],d=Lt[a];return u==d?a.localeCompare(c):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let c of a)c!=o&&delete Lt[c];o&&n.indexOf(o)==-1&&(delete Lt[n[n.length-1]],n.splice(-1,1,o)),qr.set("frequently",Lt)}return n}var xm={add:MC,get:BC,DEFAULTS:Ru},$m={};$m=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var hr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Bt=null,Le=null;const su={};async function o0(e){if(su[e])return su[e];const n=await(await fetch(e)).json();return su[e]=n,n}let ou=null,km=null,Cm=!1;function Rl(e,{caller:t}={}){return ou||(ou=new Promise(n=>{km=n})),e?UC(e):t&&!Cm&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),ou}async function UC(e){Cm=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=hr.emojiVersion.value),n||(n=hr.set.value),i||(i=hr.locale.value),Le)Le.categories=Le.categories.filter(d=>!d.name);else{Le=(typeof e.data=="function"?await e.data():e.data)||await o0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Le.emoticons={},Le.natives={},Le.categories.unshift({id:"frequent",emojis:[]});for(const d in Le.aliases){const p=Le.aliases[d],h=Le.emojis[p];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}Le.originalCategories=Le.categories}if(Bt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?lm($m):await o0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const p=e.custom[d],h=e.custom[d-1];if(!(!p.emojis||!p.emojis.length)){p.id||(p.id=`custom_${d+1}`),p.name||(p.name=Bt.categories.custom),h&&!p.icon&&(p.target=h.target||h),Le.categories.push(p);for(const m of p.emojis)Le.emojis[m.id]=m}}e.categories&&(Le.categories=Le.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,p)=>{const h=e.categories.indexOf(d.id),m=e.categories.indexOf(p.id);return h-m}));let o=null,a=null;n=="native"&&(o=s0.latestVersion(),a=e.noCountryFlags||s0.noCountryFlags());let c=Le.categories.length,u=!1;for(;c--;){const d=Le.categories[c];if(d.id=="frequent"){let{maxFrequentRows:m,perLine:v}=e;m=m>=0?m:hr.maxFrequentRows.value,v||(v=hr.perLine.value),d.emojis=xm.get({maxFrequentRows:m,perLine:v})}if(!d.emojis||!d.emojis.length){Le.categories.splice(c,1);continue}const{categoryIcons:p}=e;if(p){const m=p[d.id];m&&!d.icon&&(d.icon=m)}let h=d.emojis.length;for(;h--;){const m=d.emojis[h],v=m.id?m:Le.emojis[m],w=()=>{d.emojis.splice(h,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){w();continue}if(o&&v.version>o){w();continue}if(a&&d.id=="flags"&&!zC.includes(v.id)){w();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([S,k])=>{if(S)return(Array.isArray(S)?S:[S]).map(E=>(k?E.split(/[-|_|\s]+/):[E]).map(M=>M.toLowerCase())).flat()}).flat().filter(S=>S&&S.trim()).join(","),v.emoticons)for(const S of v.emoticons)Le.emoticons[S]||(Le.emoticons[S]=v.id);let $=0;for(const S of v.skins){if(!S)continue;$++;const{native:k}=S;k&&(Le.natives[k]=v.id,v.search+=`,${k}`);const E=$==1?"":`:skin-tone-${$}:`;S.shortcodes=`:${v.id}:${E}`}}}}u&&qi.reset(),km()}function Sm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Em(o,e,t,n);return i}function Em(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const jC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Ou=null;function DC(e){return e.id?e:Le.emojis[e]||Le.emojis[Le.aliases[e]]||Le.emojis[Le.natives[e]]}function NC(){Ou=null}async function HC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Rl(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,p)=>u.trim()&&p.indexOf(u)==d);if(!i.length)return;let o=Ou||(Ou=Object.values(Le.emojis)),a,c;for(const u of i){if(!o.length)break;a=[],c={};for(const d of o){if(!d.search)continue;const p=d.search.indexOf(`,${u}`);p!=-1&&(a.push(d),c[d.id]||(c[d.id]=0),c[d.id]+=d.id==u?0:p+1)}o=a}return a.length<2||(a.sort((u,d)=>{const p=c[u.id],h=c[d.id];return p==h?u.id.localeCompare(d.id):p-h}),a.length>t&&(a=a.slice(0,t))),a}var qi={search:HC,get:DC,reset:NC,SHORTCODES_REGEX:jC};const zC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function FC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function WC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function ZC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const qC={activity:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},KC={loupe:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var sl={categories:qC,search:KC};function Lu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(qi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=qi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),c=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${c})`,backgroundSize:`${100*Le.sheet.cols}% ${100*Le.sheet.rows}%`,backgroundPosition:`${100/(Le.sheet.cols-1)*o.x}% ${100/(Le.sheet.rows-1)*o.y}%`}})})}const VC=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Tm extends VC{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Em(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class GC extends Tm{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Am={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:hr.set,skin:hr.skin};class Im extends Tm{async connectedCallback(){const t=Sm(this.props,Am,this);t.element=this,t.ref=n=>{this.component=n},await Rl(),!this.disconnected&&_m(z(Lu,{...t}),this)}constructor(t){super(t)}}Ln(Im,"Props",Am);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Im);var a0,Pu=[],l0=he.__b,c0=he.__r,u0=he.diffed,d0=he.__c,f0=he.unmount;function QC(){var e;for(Pu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Pu.pop();)if(e.__P)try{e.__H.__h.forEach(Ma),e.__H.__h.forEach(Mu),e.__H.__h=[]}catch(t){e.__H.__h=[],he.__e(t,e.__v)}}he.__b=function(e){l0&&l0(e)},he.__r=function(e){c0&&c0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ma),t.__h.forEach(Mu),t.__h=[])},he.diffed=function(e){u0&&u0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Pu.push(t)!==1&&a0===he.requestAnimationFrame||((a0=he.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),h0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);h0&&(i=requestAnimationFrame(o))})(QC))},he.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ma),n.__h=n.__h.filter(function(i){return!i.__||Mu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],he.__e(i,n.__v)}}),d0&&d0(e,t)},he.unmount=function(e){f0&&f0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ma(i)}catch(o){t=o}}),t&&he.__e(t,n.__v))};var h0=typeof requestAnimationFrame=="function";function Ma(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Mu(e){e.__c=e.__()}function XC(e,t){for(var n in t)e[n]=t[n];return e}function p0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function ol(e){this.props=e}(ol.prototype=new Zn).isPureReactComponent=!0,ol.prototype.shouldComponentUpdate=function(e,t){return p0(this.props,e)||p0(this.state,t)};var g0=he.__b;he.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),g0&&g0(e)};var YC=he.__e;he.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}YC(e,t,n)};var m0=he.unmount;function au(){this.__u=0,this.t=null,this.__b=null}function Rm(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Ea(){this.u=null,this.o=null}he.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),m0&&m0(e)},(au.prototype=new Zn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Rm(i.__v),a=!1,c=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=c;var u=function(){if(!--i.__u){if(i.state.__e){var p=i.state.__e;i.__v.__k[0]=function m(v,w,$){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(S){return m(S,w,$)}),v.__c&&v.__c.__P===w&&(v.__e&&$.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=$)),v}(p,p.__c.__P,p.__c.__O)}var h;for(i.setState({__e:i.__b=null});h=i.t.pop();)h.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(c,c)},au.prototype.componentWillUnmount=function(){this.t=[]},au.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(c,u,d){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(p){typeof p.__c=="function"&&p.__c()}),c.__c.__H=null),(c=XC({},c)).__c!=null&&(c.__c.__P===d&&(c.__c.__P=u),c.__c=null),c.__k=c.__k&&c.__k.map(function(p){return a(p,u,d)})),c}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Iu(rs,null,e.fallback);return o&&(o.__h=null),[Iu(rs,null,t.__e?null:e.children),o]};var v0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Ea.prototype=new Zn).__e=function(e){var t=this,n=Rm(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),v0(t,e,i)):o()};n?n(a):a()}},Ea.prototype.render=function(e){this.u=null,this.o=new Map;var t=rl(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ea.prototype.componentDidUpdate=Ea.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){v0(e,n,t)})};var JC=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,eS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,tS=typeof document<"u",nS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Zn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Zn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var y0=he.event;function rS(){}function iS(){return this.cancelBubble}function sS(){return this.defaultPrevented}he.event=function(e){return y0&&(e=y0(e)),e.persist=rS,e.isPropagationStopped=iS,e.isDefaultPrevented=sS,e.nativeEvent=e};var b0={configurable:!0,get:function(){return this.class}},_0=he.vnode;he.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var c=n[a];tS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&c==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&c===!0?c="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!nS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&eS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():c===null&&(c=void 0),i[a]=c)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=rl(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=rl(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(b0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",b0))}e.$$typeof=JC,_0&&_0(e)};var w0=he.__r;he.__r=function(e){w0&&w0(e),e.__c};const oS={light:"outline",dark:"solid"};class aS extends ol{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return z("img",{src:n.src})}const i=sl.categories[t.id]||sl.categories.custom,o=this.props.icons=="auto"?oS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Bt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:c=>c.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Le.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class lS extends ol{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const Ta={rowsPerRender:10};class cS extends Zn{getInitialState(t=this.props){return{skin:qr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Bt.rtl?"rtl":"ltr",this.refs={menu:ur(),navigation:ur(),scroll:ur(),search:ur(),searchInput:ur(),skinToneButton:ur(),skinToneRadio:ur()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Rl(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Le;this.refs.categories=new Map;const n=Le.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const c=[];c.__categoryId=a.id,c.__index=o.length,this.grid.push(c);const u=this.grid.length-1,d=u%Ta.rowsPerRender?{}:ur();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),c};for(let o of t){const a=[];let c=i(a,o);for(let u of o.emojis)c.length==this.getPerLine()&&(c=i(a,o)),this.grid.setsize+=1,c.push(u);this.refs.categories.set(o.id,{root:ur(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:c}=n.getBoundingClientRect();return Math.floor(c/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return qi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=c=>{c!=t.state.categoryId&&t.setState({categoryId:c})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(c=>{for(const d of c){const p=d.target.dataset.id;n.set(p,d.intersectionRatio)}const u=[...n];for(const[d,p]of u)if(p){i(d);break}},o);for(const{root:c}of this.refs.categories.values())a.observe(c.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Ta.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Ta.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:c}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,p]=this.state.pos;const h=(()=>{if(d==0&&p==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||c)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let m=u[d];const v=i?-1:1;if(p+=v,!m[p]){if(d+=v,m=u[d],!m)return d=i?0:u.length-1,p=i?0:u[d].length-1,[d,p];p=i?m.length-1:0}return[d,p]}if(a||c){d+=a?-1:1;const m=u[d];return m?(m[p]||(p=m.length-1),[d,p]):(d=a?0:u.length-1,p=a?0:u[d].length-1,[d,p])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let c=0;if(n>=0&&(t=i[n].__categoryId),t&&(c=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)c=0;else{const u=i[n].__index,d=c+u*this.props.emojiButtonSize,p=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)c=d;else if(p>o.scrollTop+a.height)c=p-a.height;else return}this.ignoreMouse(),o.scrollTop=c}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=ZC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&xm.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),qr.set("skin",t)}renderNav(){return z(aS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[z("div",{class:"flex flex-middle flex-grow",children:[z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:z(Lu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),z("div",{class:`margin-${this.dir[0]}`,children:t||n?z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[z("div",{class:"preview-title ellipsis",children:t?t.name:Bt.search_no_results_1}),z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Bt.search_no_results_2})]}):z("div",{class:"preview-placeholder color-c",children:Bt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,c=this.state.tempSkin||this.state.skin,d=(t.skins[c-1]||t.skins[0]).native,p=FC(this.state.pos,n),h=n.concat(t.id).join("");return z(lS,{selected:p,skin:c,size:a,children:z("button",{"aria-label":d,"aria-selected":p||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:m=>this.handleEmojiClick({e:m,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),z(Lu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:c,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return z("div",{children:[z("div",{class:"spacer"}),z("div",{class:"flex flex-middle",children:[z("div",{class:"search relative flex-grow",children:[z("input",{type:"search",ref:this.refs.searchInput,placeholder:Bt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),z("span",{class:"icon loupe flex",children:sl.search.loupe}),this.state.searchResults&&z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:sl.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?z("div",{class:"category",ref:this.refs.search,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Bt.categories.search}),z("div",{children:t.length?t.map((n,i)=>z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&z("a",{onClick:this.props.onAddCustomEmoji,children:Bt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Le,n=!!this.state.searchResults,i=this.getPerLine();return z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:c}=this.refs.categories.get(o.id);return z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Bt.categories[o.id]}),z("div",{class:"relative",style:{height:c.length*this.props.emojiButtonSize},children:c.map((u,d)=>{const p=u.index-u.index%Ta.rowsPerRender,h=this.state.visibleRows[p],m="current"in u?u:void 0;if(!h&&!m)return null;const v=d*i,w=v+i,$=o.emojis.slice(v,w);return $.length<i&&$.push(...new Array(i-$.length)),z("div",{"data-index":u.index,ref:m,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&$.map((S,k)=>{if(!S)return z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const E=qi.get(S);return this.renderEmojiButton(E,{pos:[u.index,k],posinset:u.posinset+k,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Bt.skins.choose,title:Bt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Bt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const c=a+1,u=this.state.skin==c;return z("div",{children:[z("input",{type:"radio",name:"skin-tone",value:c,"aria-label":Bt.skins[c],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(c),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(c))}}),z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(c),onMouseEnter:()=>this.handleSkinMouseOver(c),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[z("span",{class:`skin-tone skin-tone-${c}`}),z("span",{class:"margin-small-lr",children:Bt.skins[c]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&z("div",{class:"padding-lr",children:this.renderSearch()}),z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),Ln(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Ln(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Ln(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Ln(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Ln(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await qi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const c=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let p of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(p);this.ignoreMouse(),this.setState({searchResults:u,pos:c},a)}),Ln(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Ln(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Ln(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Ln(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await WC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class yd extends GC{async connectedCallback(){const t=Sm(this.props,hr,this);t.element=this,t.ref=n=>{this.component=n},await Rl(t),!this.disconnected&&_m(z(cS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:lm(Om)})}}Ln(yd,"Props",hr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",yd);var Om={};Om=`:host {
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

`;const Lm=e=>{let t;const[n,i]=xe(void 0);return _(md,{ref:c=>{t=c},position:"bottom",get button(){return e.children},onOpen:()=>{const c=new yd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(c)},onClose:()=>{i(void 0)},get children(){return n()}})},uS=P("<div>"),dS=P('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),fS=P("<br>"),hS=P("<span>理由: "),pS=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),gS=e=>{const[t,n]=xe(!1);return _(le,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=pS();return i.firstChild,i.$$click=()=>n(!0),I(i,_(le,{get when(){return e.contentWarning.reason!=null},get children(){return[fS(),(()=>{const o=hS();return o.firstChild,I(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=uS();return I(i,()=>e.children),i})(),_(le,{get when(){return e.contentWarning.contentWarning},get children(){const i=dS();return i.$$click=()=>n(!1),i}})]}})};wt(["click"]);const Pm=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return _(le,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Tl(e.pubkey)}`},get children(){return["@",Ke(()=>t()?.name??e.pubkey)]}})},mS=P('<a target="_blank" rel="noreferrer noopener">'),Ol=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return _(le,{get when(){return t()},get fallback(){return e.href},get children(){const n=mS();return I(n,()=>e.children??e.href),Pe(i=>{const o=e.class,a=e.href;return o!==i._v$&&u4(n,i._v$=o),a!==i._v$2&&_t(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},vS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},yS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},bS=P('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),_S=P('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),wS=e=>{let t;const[n,i]=xe(e.initialHidden);return _(le,{get when(){return!n()},get fallback(){return(()=>{const o=_S();return o.$$click=()=>i(!1),o})()},get children(){return _(Ol,{class:"my-2 block",get href(){return e.url},get children(){const o=bS(),a=t;return typeof a=="function"?yr(a,o):t=o,Pe(c=>{const u=yS(e.url),d=e.url;return u!==c._v$&&_t(o,"src",c._v$=u),d!==c._v$2&&_t(o,"alt",c._v$2=d),c},{_v$:void 0,_v$2:void 0}),o}})}})};wt(["click"]);const xS=P('<div class="my-1 rounded border p-1">'),$S=e=>_(le,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return _(no,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=xS();return I(t,_(go,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[kt.Text]}})),t}}),kS=P('<button class="inline text-blue-500 underline">'),lu=e=>{const{showProfile:t}=ei(),n=()=>{t(e.pubkey)};return(()=>{const i=kS();return i.$$click=n,I(i,_(Pm,{get pubkey(){return e.pubkey}})),i})()};wt(["click"]);const[bd,CS]=xe({}),Mm=e=>{bd()[e]==null&&CS(t=>({...t,[e]:new MessageChannel}))},SS=e=>{const t=()=>bd()[e().id],n=(o,a)=>{const c={requestId:o,request:a};t().port1.postMessage(c)},i=(o,a=1e3)=>new Promise((c,u)=>{let d;const p=h=>{const m=h.data;m.requestId===o&&(t().port1.removeEventListener("message",p),m.ok?c(m.response):u(m.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",p),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",p,!1),t().port1.start()});return Sn(()=>{const{id:o}=e();Mm(o)}),async o=>{const a=Math.random().toString(),c=i(a);return n(a,o),c}},ES=e=>{const t=Ke(e),n=()=>bd()[t().id];Sn(()=>{const{id:i}=t();Mm(i);const o=n().port2,a=c=>{const{requestId:u,request:d}=c.data,p=t().handler(d);(p instanceof Promise?p:Promise.resolve(p)).then(m=>{const v={requestId:u,ok:!0,response:m};o.postMessage(v)}).catch(m=>{const v={requestId:u,ok:!1,error:m};o.postMessage(v)})};o.addEventListener("message",a),o.start(),Xr(()=>{o.removeEventListener("message",a)})})},Co=()=>SS(()=>({id:"CommandChannel"})),Bu=e=>{ES(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},{decode:TS}=xo,AS=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,IS=/(?:#\[(?<idx>\d+)\])/g,RS=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent)1[ac-hj-np-z02-9]+))/gi,OS=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,LS=/:(?<emoji>\w+):/gu,Bm=e=>{const t=[...e.matchAll(AS),...e.matchAll(IS),...e.matchAll(RS),...e.matchAll(OS),...e.matchAll(LS)].sort((a,c)=>a.index-c.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const c=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=c;else{const d={type:"PlainText",content:c};i.push(d)}n=a}};return t.forEach(a=>{const{index:c}=a;if(!(c<n)){if(a.groups?.url){o(c);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(c),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(c);try{const u=TS(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(c+a[0].length)}}else if(a.groups?.hashtag){o(c);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(c);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=c+a[0].length}}),n<e.length&&o(e.length),i},PS=({tagIndex:e,content:t},n)=>{const i=n.tags[e];if(i==null)return null;const o=i[0];if(o==="p"&&Gs(i[1]))return{type:"MentionedUser",tagIndex:e,content:t,pubkey:i[1]};if(o==="e"&&Gs(i[1])){const a=Cn(n).markedEventTags().find(c=>c.index===e);return{type:"MentionedEvent",tagIndex:e,content:t,eventId:i[1],marker:a?.marker}}return null},cu=P("<span>"),x0=P('<div class="my-1 rounded border p-1">'),MS=P('<span class="text-blue-500 underline">'),BS=P('<button class="text-blue-500 underline">'),US=P('<img class="inline-block h-8 max-w-[128px] align-middle">'),jS=e=>{const{config:t,saveColumn:n}=je(),i=Co(),o=()=>Cn(e.event),a=c=>{n(hd({query:c})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return _(Ut,{get each(){return Bm(e.event.content)},children:c=>{if(c.type==="PlainText")return(()=>{const u=cu();return I(u,()=>c.content),u})();if(c.type==="URL")return vS(c.content)?_(wS,{get url(){return c.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):_(Ol,{class:"text-blue-500 underline",get href(){return c.content}});if(c.type==="TagReference"){const u=PS(c,e.event);if(u==null)return(()=>{const d=cu();return I(d,()=>c.content),d})();if(u.type==="MentionedUser")return _(lu,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?_($S,{mentionedEvent:u}):_(no,{get eventId(){return u.eventId}})}if(c.type==="Bech32Entity")return c.data.type==="note"&&e.embedding?(()=>{const u=x0();return I(u,_(go,{get eventId(){return c.data.data},actions:!1,embedding:!1,get ensureKinds(){return[kt.Text]}})),u})():c.data.type==="nevent"&&e.embedding?(()=>{const u=x0();return I(u,_(go,{get eventId(){return c.data.data.id},actions:!1,embedding:!1})),u})():c.data.type==="npub"?_(lu,{get pubkey(){return c.data.data}}):c.data.type==="nprofile"?_(lu,{get pubkey(){return c.data.data.pubkey}}):(()=>{const u=MS();return I(u,()=>c.content),u})();if(c.type==="HashTag")return(()=>{const u=BS();return u.$$click=()=>a(c.content),I(u,()=>c.content),u})();if(c.type==="CustomEmoji"){const u=o().getEmojiUrl(c.shortcode);return u==null?(()=>{const d=cu();return I(d,()=>c.content),d})():(()=>{const d=US();return _t(d,"src",u),Pe(()=>_t(d,"alt",c.content)),d})()}return console.error("Not all ParsedTextNoteNodes are covered",c),null}})};wt(["click"]);const DS=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Um=(e={})=>(()=>{const t=DS();return Xe(t,e,!0,!0),t})(),NS=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),HS=(e={})=>(()=>{const t=NS();return Xe(t,e,!0,!0),t})(),zS=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),ss=(e={})=>(()=>{const t=zS();return Xe(t,e,!0,!0),t})(),FS=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),WS=(e={})=>(()=>{const t=FS();return Xe(t,e,!0,!0),t})(),ZS=e=>Math.floor(+e/1e3),dr=()=>ZS(new Date),qS=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),KS=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:c,tags:u})=>{const d=[],p=e?.map(m=>["p",m])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),n?.forEach(m=>d.push(["e",m,"","mention"])),i!=null&&d.push(["e",i,"","reply"]),a?.forEach(m=>h.push(["t",m])),c?.forEach(m=>h.push(["r",m])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...p,...h]},Ll=()=>{const e=El(),t=async(d,p)=>{const h={...p};if(h.id=A1(h),window.nostr==null)throw new Error("NIP-07 implementation not found");const m=await window.nostr.signEvent(h);return d.map(async v=>{const $=(await e().ensureRelay(v)).publish(m);return qS($,v)})};return{publishTextNote:async d=>{const{relayUrls:p,pubkey:h,content:m}=d,v=KS(d),w={kind:1,pubkey:h,created_at:dr(),tags:v,content:m};return t(p,w)},publishReaction:async({relayUrls:d,pubkey:p,eventId:h,content:m,notifyPubkey:v})=>{const w={kind:7,pubkey:p,created_at:dr(),tags:[["e",h,""],["p",v]],content:m};return t(d,w)},publishRepost:async({relayUrls:d,pubkey:p,eventId:h,notifyPubkey:m})=>{const v={kind:6,pubkey:p,created_at:dr(),tags:[["e",h,""],["p",m]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:p,profile:h,otherProperties:m})=>{const v={...h,...m},w={kind:kt.Metadata,pubkey:p,created_at:dr(),tags:[],content:JSON.stringify(v)};return t(d,w)},updateContacts:async({relayUrls:d,pubkey:p,followingPubkeys:h,content:m})=>{const v=h.map($=>["p",$]),w={kind:kt.Contacts,pubkey:p,created_at:dr(),tags:v,content:m};return t(d,w)},deleteEvent:async({relayUrls:d,pubkey:p,eventId:h})=>{const m={kind:kt.EventDeletion,pubkey:p,created_at:dr(),tags:[["e",h,""]],content:""};return t(d,m)}}};let uu=!1;const[Aa,VS]=xe(void 0),xr=()=>(Sn(()=>{if(Aa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),Aa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Aa()==null&&!uu&&(uu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),VS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{uu=!1})),e+=1},200)}),Aa),jm=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},GS={nostrBuild:{name:"nostr.build",tos:"https://nostr.build/tos/",upload:jm}},QS=e=>t=>Promise.allSettled(t.map(n=>e(n))),XS=e=>{const t=document.createElement("a");t.href=new URL(e).toString(),t.target="_blank",t.rel="noreferrer noopener",t.click()},YS=P("<div>に返信"),JS=P('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),eE=P('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),tE=P('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),nE=P('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),rE=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},iE=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(c=>{c.type==="URL"?o.push(c.content):c.type==="HashTag"?t.push(c.tagName):c.type==="Bech32Entity"?c.data.type==="npub"?n.push(c.data.data):c.data.type==="note"&&i.push(c.data.data):c.type==="CustomEmoji"&&!a.includes(c.shortcode)&&a.push(c.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},sE=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},Dm=e=>{let t,n;const[i,o]=xe(""),[a,c]=xe(!1),[u,d]=xe(""),p=re=>o(Me=>`${Me} ${re}`),h=()=>{o(""),d(""),c(!1)},m=()=>{t?.blur(),h(),e.onClose()},{config:v,getEmoji:w}=je(),{persistStatus:$,didAgreeToToS:S,agreeToToS:k}=mg(),E=xr(),M=Ll(),B=()=>e.replyTo&&Cn(e.replyTo),A=()=>e.mode??"normal",T=pi({mutationKey:["publishTextNote"],mutationFn:M.publishTextNote.bind(M),onSuccess:()=>{console.log("succeeded to post"),h(),e.onPost?.()},onError:re=>{console.error("error",re)}}),L=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},D=pi({mutationKey:["uploadFiles"],mutationFn:re=>QS(jm)(re).then(Me=>{Me.forEach(Ve=>{Ve.status==="fulfilled"?(console.log("succeeded to upload",Ve),p(Ve.value.imageUrl),L()):console.error("failed to upload",Ve)})}).catch(Me=>console.error(Me))}),W=Ke(()=>{const re=E();return B()?.mentionedPubkeys()?.filter(Me=>Me!==re)??[]}),ne=Ke(()=>e.replyTo==null?[]:gr([e.replyTo.pubkey,...W()])),V=re=>{const Me=[];return re.forEach(Ve=>{const et=w(Ve);et!=null&&Me.push(["emoji",Ve,et.url])}),Me},ie=()=>{if(i().length===0||T.isLoading)return;const re=E();if(re==null){console.error("pubkey is not available");return}const Me=Bm(i()),{hashtags:Ve,urlReferences:et,pubkeyReferences:tt,eventReferences:xt,emojis:ft}=iE(Me),oe=sE(Me),$t=V(ft);let q={relayUrls:v().relayUrls,pubkey:re,content:oe,notifyPubkeys:tt,mentionEventIds:xt,hashtags:Ve,urls:et,tags:$t};B()!=null&&(q={...q,notifyPubkeys:gr([...ne(),...tt]),rootEventId:B()?.rootEvent()?.id??B()?.id,replyEventId:B()?.id}),a()&&(q={...q,contentWarning:u()}),T.mutate(q),m()},Z=()=>{if(S("nostrBuild"))return!0;window.alert(`画像アップローダーの利用規約をお読みください。
（新しいタブで利用規約を開きます）`),XS(GS.nostrBuild.tos);const re=window.confirm("同意する場合はOKをクリックしてください。");return re&&k("nostrBuild"),re},Q=re=>{o(re.currentTarget.value),L()},se=re=>{re.preventDefault(),ie()},We=re=>{re.key==="Enter"&&(re.ctrlKey||re.metaKey)?ie():re.key==="Escape"&&(t?.blur(),m())},Y=re=>{if(re.preventDefault(),D.isLoading||!Z())return;const Me=[...re.currentTarget.files??[]];D.mutate(Me),re.currentTarget.value=""},ye=re=>{if(re.preventDefault(),D.isLoading||!Z())return;const Me=[...re?.dataTransfer?.files??[]];D.mutate(Me)},Ee=re=>{if(D.isLoading)return;const Me=[...re?.clipboardData?.items??[]],Ve=[];Me.forEach(et=>{if(et.kind==="file"){re.preventDefault();const tt=et.getAsFile();if(tt==null)return;Ve.push(tt)}}),Ve.length!==0&&Z()&&D.mutate(Ve)},Et=re=>{re.preventDefault()},dt=()=>i().trim().length===0||T.isLoading||D.isLoading,ce=()=>D.isLoading;return Sn(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const re=nE(),Me=re.firstChild,Ve=Me.firstChild,et=Ve.nextSibling,tt=et.firstChild,xt=tt.nextSibling,ft=xt.nextSibling,oe=et.nextSibling;I(re,_(le,{get when(){return e.replyTo!=null},get children(){const q=YS(),ht=q.firstChild;return I(q,_(Ut,{get each(){return ne()},children:(hn,nt)=>[_(Al,{pubkey:hn}),_(le,{get when(){return nt()!==ne().length-1},children:" と "})]}),ht),q}}),Me),Me.addEventListener("submit",se),I(Me,_(le,{get when(){return a()},get children(){const q=JS();return q.$$input=ht=>d(ht.currentTarget.value),Pe(()=>q.value=u()),q}}),Ve),Ve.addEventListener("paste",Ee),Ve.addEventListener("drop",ye),Ve.addEventListener("dragover",Et),Ve.$$keydown=We,Ve.$$input=Q,yr(q=>{t=q,e.textAreaRef?.(q)},Ve),I(et,_(le,{get when(){return A()==="reply"},get children(){const q=eE(),ht=q.firstChild;return ht.$$click=()=>m(),I(ht,_(ss,{})),q}}),tt),I(et,_(Lm,{customEmojis:!0,onEmojiSelect:q=>p(q),get children(){const q=tE();return I(q,_(Um,{})),q}}),tt),tt.$$click=()=>c(q=>!q),xt.$$click=()=>n?.click(),I(xt,_(HS,{})),I(ft,_(WS,{})),oe.addEventListener("change",Y);const $t=n;return typeof $t=="function"?yr($t,oe):n=oe,Pe(q=>{const ht=rE(A()),hn=!a(),nt=!!a(),qt=A()==="normal",kr=A()==="normal",mt=A()==="reply",Dt=A()==="reply",er=!!ce(),ve=!ce(),He=A()==="normal",lt=A()==="normal",Tt=A()==="reply",en=A()==="reply",ue=ce(),pn=!!dt(),Re=!dt(),st=A()==="normal",Kt=A()==="normal",Vt=A()==="reply",Nt=A()==="reply",En=dt();return ht!==q._v$&&_t(Ve,"placeholder",q._v$=ht),hn!==q._v$2&&tt.classList.toggle("bg-rose-300",q._v$2=hn),nt!==q._v$3&&tt.classList.toggle("bg-rose-400",q._v$3=nt),qt!==q._v$4&&tt.classList.toggle("h-8",q._v$4=qt),kr!==q._v$5&&tt.classList.toggle("w-8",q._v$5=kr),mt!==q._v$6&&tt.classList.toggle("h-7",q._v$6=mt),Dt!==q._v$7&&tt.classList.toggle("w-7",q._v$7=Dt),er!==q._v$8&&xt.classList.toggle("bg-primary-disabled",q._v$8=er),ve!==q._v$9&&xt.classList.toggle("bg-primary",q._v$9=ve),He!==q._v$10&&xt.classList.toggle("h-8",q._v$10=He),lt!==q._v$11&&xt.classList.toggle("w-8",q._v$11=lt),Tt!==q._v$12&&xt.classList.toggle("h-7",q._v$12=Tt),en!==q._v$13&&xt.classList.toggle("w-7",q._v$13=en),ue!==q._v$14&&(xt.disabled=q._v$14=ue),pn!==q._v$15&&ft.classList.toggle("bg-primary-disabled",q._v$15=pn),Re!==q._v$16&&ft.classList.toggle("bg-primary",q._v$16=Re),st!==q._v$17&&ft.classList.toggle("h-8",q._v$17=st),Kt!==q._v$18&&ft.classList.toggle("w-8",q._v$18=Kt),Vt!==q._v$19&&ft.classList.toggle("h-7",q._v$19=Vt),Nt!==q._v$20&&ft.classList.toggle("w-7",q._v$20=Nt),En!==q._v$21&&(ft.disabled=q._v$21=En),q},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Pe(()=>Ve.value=i()),re})()};wt(["input","keydown","click"]);const Nm=d4(),oE=()=>f4(Nm),aE=()=>{const[e,t]=Ki({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},lE=P('<div class="flex gap-2 py-1">'),cE=P('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),uE=P('<span class="ml-1 text-sm">'),dE=P('<button class="flex h-6 items-center rounded border px-1" type="button">'),fE=P('<span class="text-base">'),hE=P('<span class="text-red-500">削除'),pE=P('<img alt="icon" class="h-full w-full rounded object-cover">'),gE=P('<div class="author-name truncate pr-1 font-bold hover:underline">'),mE=P('<div class="text-xs">への返信'),vE=P('<div class="content whitespace-pre-wrap break-all">'),yE=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),$0=P('<div class="text-sm text-zinc-400">'),bE=P('<span class="inline-block h-4 w-4">'),_E=P('<div class="flex shrink-0 items-center gap-1">'),wE=P('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),xE=P('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),$E=P('<div class="nostr-textnote flex flex-col"><div class="flex w-full gap-1"><button class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></button><div class="created-at shrink-0"><a type="button" class="hover:underline"></a></div></div><div class="overflow-hidden">'),kE=P('<div class="mt-1 rounded border p-1">'),CE=P('<button class="pr-1 text-blue-500 hover:underline">'),{noteEncode:k0}=xo,SE=e=>{const{config:t}=je(),n=xr();return(()=>{const i=lE();return I(i,_(Ut,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const c=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=dE();return u.$$click=()=>e.onReaction(o),I(u,_(le,{when:o==="+",get fallback(){return(()=>{const d=fE();return I(d,o),d})()},get children(){const d=cE();return I(d,_(gd,{})),d}}),null),I(u,_(le,{get when(){return!t().hideCount},get children(){const d=uE();return I(d,()=>a.length),d}}),null),Pe(d=>qs(u,{"text-zinc-400":!c,"hover:bg-zinc-50":!c,"bg-rose-50":c,"border-rose-200":c,"text-rose-400":c},d)),u})()}})),i})()},Hm=e=>{let t;const{config:n}=je(),i=rm(),o=xr(),{showProfile:a}=ei(),c=oE(),[u,d]=xe(!1),[p,h]=xe(!1),[m,v]=xe(!1),w=()=>v(!1),[$,S]=xe(!1),[k,E]=xe(!1),M=Ke(()=>Cn(e.event)),B=()=>e.embedding??!0,A=()=>e.actions??!0,{profile:T}=ms(()=>({pubkey:e.event.pubkey})),{reactions:L,reactionsGroupedByContent:D,isReactedBy:W,isReactedByWithEmoji:ne,invalidateReactions:V,query:ie}=Jk(()=>({eventId:e.event.id})),{reposts:Z,isRepostedBy:Q,invalidateReposts:se,query:We}=eC(()=>({eventId:e.event.id})),Y=Ll(),ye=pi({mutationKey:["publishReaction",M().id],mutationFn:Y.publishReaction.bind(Y),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:oe=>{console.error("failed to publish reaction: ",oe)},onSettled:()=>{V().then(()=>ie.refetch()).catch(oe=>console.error("failed to refetch reactions",oe))}}),Ee=pi({mutationKey:["publishRepost",M().id],mutationFn:Y.publishRepost.bind(Y),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:oe=>{console.error("failed to publish repost: ",oe)},onSettled:()=>{se().then(()=>We.refetch()).catch(oe=>console.error("failed to refetch reposts",oe))}}),Et=pi({mutationKey:["deleteEvent",M().id],mutationFn:(...oe)=>Y.deleteEvent(...oe).then($t=>Promise.allSettled($t.map(Jr(1e4)))),onSuccess:oe=>{const $t=oe.filter(ht=>ht.status==="fulfilled").length,q=oe.length-$t;$t===oe.length?window.alert("削除しました（画面の反映にはリロード）"):$t>0?window.alert(`${q}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:oe=>{console.error("failed to delete",oe)}}),dt=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(k0(e.event.id)).catch(oe=>window.alert(oe))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event)).catch(oe=>window.alert(oe))}},{when:()=>M().pubkey===o(),content:()=>hE(),onSelect:()=>{const oe=o();oe!=null&&window.confirm("本当に削除しますか？")&&Et.mutate({relayUrls:n().relayUrls,pubkey:oe,eventId:M().id})}}],ce=Ke(()=>{const oe=o();return oe!=null&&W(oe)||u()}),re=Ke(()=>{const oe=o();return oe!=null&&ne(oe)}),Me=Ke(()=>{const oe=o();return oe!=null&&Q(oe)||p()}),Ve=()=>{const oe=M().replyingToEvent();if(B()&&oe!=null&&!M().containsEventMentionIndex(oe.index))return oe.id},et=()=>i(M().createdAtAsDate()),tt=oe=>{oe.stopPropagation(),!Me()&&dn([o(),e.event.id])(([$t,q])=>{Ee.mutate({relayUrls:n().relayUrls,pubkey:$t,eventId:q,notifyPubkey:e.event.pubkey}),h(!0)})},xt=oe=>{ce()||dn([o(),e.event.id])(([$t,q])=>{ye.mutate({relayUrls:n().relayUrls,pubkey:$t,content:oe??"+",eventId:q,notifyPubkey:e.event.pubkey}),d(!0)})},ft=oe=>{oe.stopPropagation(),xt()};return Sn(()=>{t!=null&&E(t.scrollHeight>t.clientHeight)}),(()=>{const oe=$E(),$t=oe.firstChild,q=$t.firstChild,ht=q.nextSibling,hn=ht.firstChild,nt=hn.firstChild,qt=nt.firstChild,kr=nt.nextSibling,mt=kr.firstChild,Dt=hn.nextSibling;q.$$click=ve=>{ve.stopPropagation(),a(M().pubkey)},I(q,_(le,{get when(){return T()?.picture},get children(){const ve=pE();return Pe(()=>_t(ve,"src",T()?.picture)),ve}})),nt.$$click=ve=>{ve.stopPropagation(),a(M().pubkey)},I(nt,_(le,{get when(){return(T()?.display_name?.length??0)>0},get children(){const ve=gE();return I(ve,()=>T()?.display_name),ve}}),qt),I(qt,_(le,{get when(){return T()?.name!=null},get fallback(){return`@${Tl(M().pubkey)}`},get children(){return["@",Ke(()=>T()?.name)]}})),mt.$$click=ve=>{ve.preventDefault(),c?.setTimeline({type:"Replies",event:e.event})},I(mt,et);const er=t;return typeof er=="function"?yr(er,Dt):t=Dt,I(Dt,_(le,{get when(){return Ve()},keyed:!0,children:ve=>(()=>{const He=kE();return I(He,_(go,{eventId:ve,actions:!1,embedding:!1})),He})()}),null),I(Dt,_(le,{get when(){return M().mentionedPubkeys().length>0},get children(){const ve=mE(),He=ve.firstChild;return I(ve,_(Ut,{get each(){return M().mentionedPubkeys()},children:lt=>(()=>{const Tt=CE();return Tt.$$click=en=>{en.stopPropagation(),a(lt)},I(Tt,_(Pm,{pubkey:lt})),Tt})()}),He),ve}}),null),I(Dt,_(gS,{get contentWarning(){return M().contentWarning()},get children(){const ve=vE();return I(ve,_(jS,{get event(){return e.event},get embedding(){return B()}})),ve}}),null),I(ht,_(le,{get when(){return k()},get children(){const ve=yE();return ve.$$click=He=>{He.stopPropagation(),S(lt=>!lt)},I(ve,_(le,{get when(){return!$()},fallback:"隠す",children:"続きを読む"})),ve}}),null),I(ht,_(le,{get when(){return A()},get children(){return[_(le,{get when(){return Ke(()=>!!n().showEmojiReaction)()&&L().length>0},get children(){return _(SE,{get reactionsGroupedByContent(){return D()},onReaction:xt})}}),(()=>{const ve=xE(),He=ve.firstChild,lt=He.nextSibling,Tt=lt.firstChild,en=lt.nextSibling,ue=en.firstChild,pn=en.nextSibling;return He.$$click=Re=>{Re.stopPropagation(),v(st=>!st)},I(He,_(gC,{})),Tt.$$click=tt,I(Tt,_(B1,{})),I(lt,_(le,{get when(){return Ke(()=>!n().hideCount)()&&Z().length>0},get children(){const Re=$0();return I(Re,()=>Z().length),Re}}),null),ue.$$click=ft,I(ue,_(le,{get when(){return Ke(()=>!!ce())()&&!re()},get fallback(){return _(pd,{})},get children(){return _(gd,{})}})),I(en,_(le,{get when(){return Ke(()=>!n().hideCount&&!n().showEmojiReaction)()&&L().length>0},get children(){const Re=$0();return I(Re,()=>L().length),Re}}),null),I(ve,_(le,{get when(){return n().useEmojiReaction},get children(){const Re=_E();return I(Re,_(Lm,{onEmojiSelect:st=>xt(st),get children(){const st=bE();return I(st,_(om,{})),st}})),Pe(st=>qs(Re,{"text-zinc-400":!ce()||!re(),"hover:text-rose-400":!ce()||!re(),"text-rose-400":ce()&&re()||ye.isLoading},st)),Re}}),pn),I(pn,_(am,{menu:dt,get children(){const Re=wE();return I(Re,_(sm,{})),Re}})),Pe(Re=>{const st={"text-zinc-400":!Me(),"hover:text-green-400":!Me(),"text-green-400":Me()||Ee.isLoading},Kt=Ee.isLoading,Vt={"text-zinc-400":!ce()||re(),"hover:text-rose-400":!ce()||re(),"text-rose-400":ce()&&!re()||ye.isLoading},Nt=ye.isLoading;return Re._v$=qs(lt,st,Re._v$),Kt!==Re._v$2&&(Tt.disabled=Re._v$2=Kt),Re._v$3=qs(en,Vt,Re._v$3),Nt!==Re._v$4&&(ue.disabled=Re._v$4=Nt),Re},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),ve})()]}}),null),I(oe,_(le,{get when(){return m()},get children(){return _(Dm,{mode:"reply",get replyTo(){return e.event},onClose:w,onPost:w})}}),null),Pe(ve=>{const He=`nostr:${k0(M().id)}`,lt=!$();return He!==ve._v$5&&_t(mt,"href",ve._v$5=He),lt!==ve._v$6&&Dt.classList.toggle("max-h-screen",ve._v$6=lt),ve},{_v$5:void 0,_v$6:void 0}),oe})()};wt(["click"]);const zm=e=>{const{shouldMuteEvent:t}=je();return _(le,{get when(){return!t(e.event)},get children(){return _(Hm,e)}})},EE=P("<span>予期しないイベント種別（<!>）"),TE=P("<span><span>未対応のイベント種別（<!>）"),Fm=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return _(Bn,{get fallback(){return(()=>{const n=TE(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,I(i,()=>e.event.kind,a),I(n,_(no,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[_(ze,{get when(){return!t()},keyed:!0,get children(){const n=EE(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,I(n,()=>e.event.kind,o),I(n,_(no,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),_(ze,{get when(){return e.event.kind===kt.Text},get children(){return _(zm,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),_(ze,{get when(){return e.event.kind===6},get children(){return _(im,{get event(){return e.event}})}})]}})},vs=e=>{const{shouldMuteEvent:t}=je();return _(Ut,{get each(){return e.events},children:n=>_(le,{get when(){return!t(n)},get children(){return _(Ra,{get children(){return _(Fm,{event:n})}})}})})};var AE=gl;function IE(){this.__data__=new AE,this.size=0}var RE=IE;function OE(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var LE=OE;function PE(e){return this.__data__.get(e)}var ME=PE;function BE(e){return this.__data__.has(e)}var UE=BE,jE=gl,DE=Ku,NE=Vu,HE=200;function zE(e,t){var n=this.__data__;if(n instanceof jE){var i=n.__data__;if(!DE||i.length<HE-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new NE(i)}return n.set(e,t),this.size=n.size,this}var FE=zE,WE=gl,ZE=RE,qE=LE,KE=ME,VE=UE,GE=FE;function ys(e){var t=this.__data__=new WE(e);this.size=t.size}ys.prototype.clear=ZE;ys.prototype.delete=qE;ys.prototype.get=KE;ys.prototype.has=VE;ys.prototype.set=GE;var _d=ys;function QE(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var XE=QE,YE=kg,JE=XE,eT=Cg,tT=1,nT=2;function rT(e,t,n,i,o,a){var c=n&tT,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var p=a.get(e),h=a.get(t);if(p&&h)return p==t&&h==e;var m=-1,v=!0,w=n&nT?new YE:void 0;for(a.set(e,t),a.set(t,e);++m<u;){var $=e[m],S=t[m];if(i)var k=c?i(S,$,m,t,e,a):i($,S,m,e,t,a);if(k!==void 0){if(k)continue;v=!1;break}if(w){if(!JE(t,function(E,M){if(!eT(w,M)&&($===E||o($,E,n,i,a)))return w.push(M)})){v=!1;break}}else if(!($===S||o($,S,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var Wm=rT,iT=Nn,sT=iT.Uint8Array,Zm=sT;function oT(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var aT=oT,C0=ls,S0=Zm,lT=qu,cT=Wm,uT=aT,dT=Gu,fT=1,hT=2,pT="[object Boolean]",gT="[object Date]",mT="[object Error]",vT="[object Map]",yT="[object Number]",bT="[object RegExp]",_T="[object Set]",wT="[object String]",xT="[object Symbol]",$T="[object ArrayBuffer]",kT="[object DataView]",E0=C0?C0.prototype:void 0,du=E0?E0.valueOf:void 0;function CT(e,t,n,i,o,a,c){switch(n){case kT:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case $T:return!(e.byteLength!=t.byteLength||!a(new S0(e),new S0(t)));case pT:case gT:case yT:return lT(+e,+t);case mT:return e.name==t.name&&e.message==t.message;case bT:case wT:return e==t+"";case vT:var u=uT;case _T:var d=i&fT;if(u||(u=dT),e.size!=t.size&&!d)return!1;var p=c.get(e);if(p)return p==t;i|=hT,c.set(e,t);var h=cT(u(e),u(t),i,o,a,c);return c.delete(e),h;case xT:if(du)return du.call(e)==du.call(t)}return!1}var ST=CT;function ET(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var wd=ET,TT=Array.isArray,Jn=TT,AT=wd,IT=Jn;function RT(e,t,n){var i=t(e);return IT(e)?i:AT(i,n(e))}var qm=RT;function OT(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var c=e[n];t(c,n,e)&&(a[o++]=c)}return a}var LT=OT;function PT(){return[]}var Km=PT,MT=LT,BT=Km,UT=Object.prototype,jT=UT.propertyIsEnumerable,T0=Object.getOwnPropertySymbols,DT=T0?function(e){return e==null?[]:(e=Object(e),MT(T0(e),function(t){return jT.call(e,t)}))}:BT,xd=DT;function NT(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var HT=NT;function zT(e){return e!=null&&typeof e=="object"}var ti=zT,FT=cs,WT=ti,ZT="[object Arguments]";function qT(e){return WT(e)&&FT(e)==ZT}var KT=qT,A0=KT,VT=ti,Vm=Object.prototype,GT=Vm.hasOwnProperty,QT=Vm.propertyIsEnumerable,XT=A0(function(){return arguments}())?A0:function(e){return VT(e)&&GT.call(e,"callee")&&!QT.call(e,"callee")},$d=XT,al={exports:{}};function YT(){return!1}var JT=YT;al.exports;(function(e,t){var n=Nn,i=JT,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,c=a&&a.exports===o,u=c?n.Buffer:void 0,d=u?u.isBuffer:void 0,p=d||i;e.exports=p})(al,al.exports);var kd=al.exports,eA=9007199254740991,tA=/^(?:0|[1-9]\d*)$/;function nA(e,t){var n=typeof e;return t=t??eA,!!t&&(n=="number"||n!="symbol"&&tA.test(e))&&e>-1&&e%1==0&&e<t}var Cd=nA,rA=9007199254740991;function iA(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=rA}var Sd=iA,sA=cs,oA=Sd,aA=ti,lA="[object Arguments]",cA="[object Array]",uA="[object Boolean]",dA="[object Date]",fA="[object Error]",hA="[object Function]",pA="[object Map]",gA="[object Number]",mA="[object Object]",vA="[object RegExp]",yA="[object Set]",bA="[object String]",_A="[object WeakMap]",wA="[object ArrayBuffer]",xA="[object DataView]",$A="[object Float32Array]",kA="[object Float64Array]",CA="[object Int8Array]",SA="[object Int16Array]",EA="[object Int32Array]",TA="[object Uint8Array]",AA="[object Uint8ClampedArray]",IA="[object Uint16Array]",RA="[object Uint32Array]",at={};at[$A]=at[kA]=at[CA]=at[SA]=at[EA]=at[TA]=at[AA]=at[IA]=at[RA]=!0;at[lA]=at[cA]=at[wA]=at[uA]=at[xA]=at[dA]=at[fA]=at[hA]=at[pA]=at[gA]=at[mA]=at[vA]=at[yA]=at[bA]=at[_A]=!1;function OA(e){return aA(e)&&oA(e.length)&&!!at[sA(e)]}var LA=OA;function PA(e){return function(t){return e(t)}}var Ed=PA,ll={exports:{}};ll.exports;(function(e,t){var n=_g,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||c&&c.binding&&c.binding("util")}catch{}}();e.exports=u})(ll,ll.exports);var Td=ll.exports,MA=LA,BA=Ed,I0=Td,R0=I0&&I0.isTypedArray,UA=R0?BA(R0):MA,Gm=UA,jA=HT,DA=$d,NA=Jn,HA=kd,zA=Cd,FA=Gm,WA=Object.prototype,ZA=WA.hasOwnProperty;function qA(e,t){var n=NA(e),i=!n&&DA(e),o=!n&&!i&&HA(e),a=!n&&!i&&!o&&FA(e),c=n||i||o||a,u=c?jA(e.length,String):[],d=u.length;for(var p in e)(t||ZA.call(e,p))&&!(c&&(p=="length"||o&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||zA(p,d)))&&u.push(p);return u}var Qm=qA,KA=Object.prototype;function VA(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||KA;return e===n}var Ad=VA;function GA(e,t){return function(n){return e(t(n))}}var Xm=GA,QA=Xm,XA=QA(Object.keys,Object),YA=XA,JA=Ad,eI=YA,tI=Object.prototype,nI=tI.hasOwnProperty;function rI(e){if(!JA(e))return eI(e);var t=[];for(var n in Object(e))nI.call(e,n)&&n!="constructor"&&t.push(n);return t}var iI=rI,sI=xg,oI=Sd;function aI(e){return e!=null&&oI(e.length)&&!sI(e)}var Ym=aI,lI=Qm,cI=iI,uI=Ym;function dI(e){return uI(e)?lI(e):cI(e)}var Pl=dI,fI=qm,hI=xd,pI=Pl;function gI(e){return fI(e,pI,hI)}var Jm=gI,O0=Jm,mI=1,vI=Object.prototype,yI=vI.hasOwnProperty;function bI(e,t,n,i,o,a){var c=n&mI,u=O0(e),d=u.length,p=O0(t),h=p.length;if(d!=h&&!c)return!1;for(var m=d;m--;){var v=u[m];if(!(c?v in t:yI.call(t,v)))return!1}var w=a.get(e),$=a.get(t);if(w&&$)return w==t&&$==e;var S=!0;a.set(e,t),a.set(t,e);for(var k=c;++m<d;){v=u[m];var E=e[v],M=t[v];if(i)var B=c?i(M,E,v,t,e,a):i(E,M,v,e,t,a);if(!(B===void 0?E===M||o(E,M,n,i,a):B)){S=!1;break}k||(k=v=="constructor")}if(S&&!k){var A=e.constructor,T=t.constructor;A!=T&&"constructor"in e&&"constructor"in t&&!(typeof A=="function"&&A instanceof A&&typeof T=="function"&&T instanceof T)&&(S=!1)}return a.delete(e),a.delete(t),S}var _I=bI,wI=wi,xI=Nn,$I=wI(xI,"DataView"),kI=$I,CI=wi,SI=Nn,EI=CI(SI,"Promise"),TI=EI,AI=wi,II=Nn,RI=AI(II,"WeakMap"),OI=RI,Uu=kI,ju=Ku,Du=TI,Nu=Sg,Hu=OI,ev=cs,bs=$g,L0="[object Map]",LI="[object Object]",P0="[object Promise]",M0="[object Set]",B0="[object WeakMap]",U0="[object DataView]",PI=bs(Uu),MI=bs(ju),BI=bs(Du),UI=bs(Nu),jI=bs(Hu),di=ev;(Uu&&di(new Uu(new ArrayBuffer(1)))!=U0||ju&&di(new ju)!=L0||Du&&di(Du.resolve())!=P0||Nu&&di(new Nu)!=M0||Hu&&di(new Hu)!=B0)&&(di=function(e){var t=ev(e),n=t==LI?e.constructor:void 0,i=n?bs(n):"";if(i)switch(i){case PI:return U0;case MI:return L0;case BI:return P0;case UI:return M0;case jI:return B0}return t});var Ml=di,fu=_d,DI=Wm,NI=ST,HI=_I,j0=Ml,D0=Jn,N0=kd,zI=Gm,FI=1,H0="[object Arguments]",z0="[object Array]",Ia="[object Object]",WI=Object.prototype,F0=WI.hasOwnProperty;function ZI(e,t,n,i,o,a){var c=D0(e),u=D0(t),d=c?z0:j0(e),p=u?z0:j0(t);d=d==H0?Ia:d,p=p==H0?Ia:p;var h=d==Ia,m=p==Ia,v=d==p;if(v&&N0(e)){if(!N0(t))return!1;c=!0,h=!1}if(v&&!h)return a||(a=new fu),c||zI(e)?DI(e,t,n,i,o,a):NI(e,t,d,n,i,o,a);if(!(n&FI)){var w=h&&F0.call(e,"__wrapped__"),$=m&&F0.call(t,"__wrapped__");if(w||$){var S=w?e.value():e,k=$?t.value():t;return a||(a=new fu),o(S,k,n,i,a)}}return v?(a||(a=new fu),HI(e,t,n,i,o,a)):!1}var qI=ZI,KI=qI,W0=ti;function tv(e,t,n,i,o){return e===t?!0:e==null||t==null||!W0(e)&&!W0(t)?e!==e&&t!==t:KI(e,t,n,i,tv,o)}var nv=tv,VI=_d,GI=nv,QI=1,XI=2;function YI(e,t,n,i){var o=n.length,a=o,c=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],p=e[d],h=u[1];if(c&&u[2]){if(p===void 0&&!(d in e))return!1}else{var m=new VI;if(i)var v=i(p,h,d,e,t,m);if(!(v===void 0?GI(h,p,QI|XI,i,m):v))return!1}}return!0}var JI=YI,eR=Qn;function tR(e){return e===e&&!eR(e)}var rv=tR,nR=rv,rR=Pl;function iR(e){for(var t=rR(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,nR(o)]}return t}var sR=iR;function oR(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var iv=oR,aR=JI,lR=sR,cR=iv;function uR(e){var t=lR(e);return t.length==1&&t[0][2]?cR(t[0][0],t[0][1]):function(n){return n===e||aR(n,e,t)}}var dR=uR,fR=cs,hR=ti,pR="[object Symbol]";function gR(e){return typeof e=="symbol"||hR(e)&&fR(e)==pR}var Bl=gR,mR=Jn,vR=Bl,yR=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,bR=/^\w*$/;function _R(e,t){if(mR(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||vR(e)?!0:bR.test(e)||!yR.test(e)||t!=null&&e in Object(t)}var Id=_R,sv=Vu,wR="Expected a function";function Rd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(wR);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var c=e.apply(this,i);return n.cache=a.set(o,c)||a,c};return n.cache=new(Rd.Cache||sv),n}Rd.Cache=sv;var xR=Rd,$R=xR,kR=500;function CR(e){var t=$R(e,function(i){return n.size===kR&&n.clear(),i}),n=t.cache;return t}var SR=CR,ER=SR,TR=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,AR=/\\(\\)?/g,IR=ER(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(TR,function(n,i,o,a){t.push(o?a.replace(AR,"$1"):i||n)}),t}),RR=IR;function OR(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Od=OR,Z0=ls,LR=Od,PR=Jn,MR=Bl,BR=1/0,q0=Z0?Z0.prototype:void 0,K0=q0?q0.toString:void 0;function ov(e){if(typeof e=="string")return e;if(PR(e))return LR(e,ov)+"";if(MR(e))return K0?K0.call(e):"";var t=e+"";return t=="0"&&1/e==-BR?"-0":t}var UR=ov,jR=UR;function DR(e){return e==null?"":jR(e)}var NR=DR,HR=Jn,zR=Id,FR=RR,WR=NR;function ZR(e,t){return HR(e)?e:zR(e,t)?[e]:FR(WR(e))}var _s=ZR,qR=Bl,KR=1/0;function VR(e){if(typeof e=="string"||qR(e))return e;var t=e+"";return t=="0"&&1/e==-KR?"-0":t}var ws=VR,GR=_s,QR=ws;function XR(e,t){t=GR(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[QR(t[n++])];return n&&n==i?e:void 0}var Ul=XR,YR=Ul;function JR(e,t,n){var i=e==null?void 0:YR(e,t);return i===void 0?n:i}var eO=JR;function tO(e,t){return e!=null&&t in Object(e)}var nO=tO,rO=_s,iO=$d,sO=Jn,oO=Cd,aO=Sd,lO=ws;function cO(e,t,n){t=rO(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var c=lO(t[i]);if(!(a=e!=null&&n(e,c)))break;e=e[c]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&aO(o)&&oO(c,o)&&(sO(e)||iO(e)))}var uO=cO,dO=nO,fO=uO;function hO(e,t){return e!=null&&fO(e,t,dO)}var pO=hO,gO=nv,mO=eO,vO=pO,yO=Id,bO=rv,_O=iv,wO=ws,xO=1,$O=2;function kO(e,t){return yO(e)&&bO(t)?_O(wO(e),t):function(n){var i=mO(n,e);return i===void 0&&i===t?vO(n,e):gO(t,i,xO|$O)}}var CO=kO;function SO(e){return e}var av=SO;function EO(e){return function(t){return t?.[e]}}var TO=EO,AO=Ul;function IO(e){return function(t){return AO(t,e)}}var RO=IO,OO=TO,LO=RO,PO=Id,MO=ws;function BO(e){return PO(e)?OO(MO(e)):LO(e)}var UO=BO,jO=dR,DO=CO,NO=av,HO=Jn,zO=UO;function FO(e){return typeof e=="function"?e:e==null?NO:typeof e=="object"?HO(e)?DO(e[0],e[1]):jO(e):zO(e)}var Ld=FO,WO=Ld,ZO=Eg;function qO(e,t){return e&&e.length?ZO(e,WO(t)):[]}var KO=qO;const VO=mo(KO),hu=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Ba=0;const{setActiveSubscriptions:GO}=Y1();setInterval(()=>{GO(Ba)},1e3);const $r=e=>{const{config:t,shouldMuteEvent:n}=je(),i=El(),[o,a]=xe([]);pr(ul(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(u=>u.filter(d=>!n(d)))},{defer:!0}));const c=()=>{const u=e();if(u==null)return;const{relayUrls:d,filters:p,options:h,onEvent:m,onEOSE:v,continuous:w=!0}=u,$=u.limit??50,S=i().sub(d,p,h);let k=!0;Ba+=1;let E=!1,M=!1;const B=[];S.on("event",T=>{m?.(T),!(u.clientEventFilter!=null&&!u.clientEventFilter(T))&&(M?a(L=>{const D=hu([T,...L].slice(0,$)),W=VO(D,ne=>ne.id);return W.length!==D.length&&console.warn("duplicated event",T),W}):(E=!0,B.push(T)))}),S.on("eose",()=>{v?.(),M=!0,a(hu(B)),w||(S.unsub(),k&&(k=!1,Ba-=1))});const A=setInterval(()=>{if(M){clearInterval(A);return}E&&(E=!1,a(hu(B)))},100);Xr(()=>{S.unsub(),k&&(k=!1,Ba-=1),clearInterval(A)})};return pr(()=>{c()}),{events:o}},QO=e=>{const t=()=>Cn(e),n=[e.id],i=t().rootEvent()?.id;i!=null&&n.push(i);const o=t().replyingToEvent()?.id;return o!=null&&n.push(o),gr(n)},XO=e=>{const{config:t}=je(),{events:n}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:QO(e.event),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return _(vs,{get events(){return[...n()].reverse()}})},YO=e=>_(Bn,{get children(){return _(ze,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>_(XO,{get event(){return t.event}})})}}),JO=P('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),eL=P('<div class="shrink-0 border-b">'),tL=P('<div class="flex flex-col overflow-y-scroll scroll-smooth">'),nL=P('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="flex h-full flex-col overflow-y-scroll scroll-smooth">'),xs=e=>{let t;const n=aE(),i=()=>e.width??"medium";return Bu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Bu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),_(Nm.Provider,{value:n,get children(){const o=JO(),a=t;return typeof a=="function"?yr(a,o):t=o,I(o,_(le,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=eL();return I(c,()=>e.header),c})(),(()=>{const c=tL();return I(c,()=>e.children),c})()]},children:c=>(()=>{const u=nL(),d=u.firstChild,p=d.firstChild,h=p.firstChild,m=d.nextSibling;return p.$$click=()=>n?.clearTimeline(),I(h,_(Zu,{})),I(m,_(YO,{timelineContent:c})),u})()})),Pe(c=>qs(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},c)),o}})};wt(["click"]);const rL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),iL=(e={})=>(()=>{const t=rL();return Xe(t,e,!0,!0),t})(),sL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),oL=(e={})=>(()=>{const t=sL();return Xe(t,e,!0,!0),t})(),aL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),lL=(e={})=>(()=>{const t=aL();return Xe(t,e,!0,!0),t})(),cL=P('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),uL=P('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),dL=P('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),fL=e=>(()=>{const t=cL(),n=t.firstChild,i=n.nextSibling;return I(n,()=>e.title),I(i,()=>e.children),t})(),$s=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=je(),o=Co(),a=u=>{t({...e.column,width:u})},c=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=dL(),d=u.firstChild,p=d.firstChild,h=p.firstChild,m=p.nextSibling,v=m.firstChild,w=m.nextSibling,$=w.nextSibling,S=$.firstChild;return I(u,_(fL,{title:"カラム幅",get children(){const k=uL(),E=k.firstChild,M=E.nextSibling,B=M.nextSibling,A=B.nextSibling;return E.$$click=()=>a("widest"),M.$$click=()=>a("wide"),B.$$click=()=>a("medium"),A.$$click=()=>a("narrow"),k}}),d),p.$$click=()=>c(e.columnIndex-1),I(h,_(iL,{})),m.$$click=()=>c(e.columnIndex+1),I(v,_(oL,{})),$.$$click=()=>n(e.column.id),I(S,_(lL,{})),u})()};wt(["click"]);const Qr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>Qr(n)(t));case"OR":return e.children.some(n=>Qr(n)(t));case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},hL=e=>{const{config:t,removeColumn:n}=je(),{followingPubkeys:i}=Au(()=>({pubkey:e.column.pubkey})),{events:o}=$r(()=>{const a=k4.uniq([...i()]);return a.length===0?null:{relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:dr()-4*60*60}],clientEventFilter:c=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(c.content)}});return pr(()=>{console.log("home",o())}),Sn(()=>console.log("home timeline mounted")),Xr(()=>console.log("home timeline unmounted")),_(xs,{get header(){return _(vo,{get name(){return e.column.name??"ホーム"},get icon(){return _(yg,{})},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(vs,{get events(){return o()}})}})},pL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),lv=(e={})=>(()=>{const t=pL();return Xe(t,e,!0,!0),t})(),gL=P('<span class="h-4 w-4 pt-[1px] text-rose-400">'),mL=P('<img alt="icon" class="rounded">'),vL=P('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),yL=P('<div class="notification-event py-1">'),bL=P('<div class="truncate">読み込み中 '),_L=e=>{const{shouldMuteEvent:t}=je(),{showProfile:n}=ei(),i=()=>Cn(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=ms(()=>({pubkey:e.event.pubkey})),{event:c,query:u}=em(()=>dn([o()])(([p])=>({eventId:p}))),d=()=>u.isSuccess&&c()==null;return _(le,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const p=vL(),h=p.firstChild,m=h.nextSibling,v=m.firstChild,w=v.nextSibling,$=w.firstChild;return I(h,_(Bn,{get fallback(){return e.event.content},get children(){return _(ze,{get when(){return e.event.content==="+"},get children(){const S=gL();return I(S,_(gd,{})),S}})}})),I(v,_(le,{get when(){return a()?.picture!=null},get children(){const S=mL();return Pe(()=>_t(S,"src",a()?.picture)),S}})),$.$$click=()=>n(e.event.pubkey),I($,_(Al,{get pubkey(){return e.event.pubkey}})),p})(),(()=>{const p=yL();return I(p,_(le,{get when(){return c()},get fallback(){return(()=>{const h=bL();return h.firstChild,I(h,o,null),h})()},keyed:!0,children:h=>_(Hm,{event:h})})),p})()]}})};wt(["click"]);const wL=P("<div>unknown event"),cv=e=>{const{shouldMuteEvent:t}=je();return _(Ut,{get each(){return e.events},children:n=>_(le,{get when(){return!t(n)},get children(){return _(Bn,{get fallback(){return wL()},get children(){return[_(ze,{get when(){return n.kind===kt.Text},get children(){return _(Ra,{get children(){return _(zm,{event:n})}})}}),_(ze,{get when(){return n.kind===kt.Reaction},get children(){return _(Ra,{get children(){return _(_L,{event:n})}})}}),_(ze,{get when(){return n.kind===6},get children(){return _(Ra,{get children(){return _(im,{event:n})}})}})]}})}})})},xL=e=>{const{config:t,removeColumn:n}=je(),{events:i}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return _(xs,{get header(){return _(vo,{get name(){return e.column.name??"通知"},get icon(){return _(lv,{})},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(cv,{get events(){return i()}})}})},$L=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Pd=(e={})=>(()=>{const t=$L();return Xe(t,e,!0,!0),t})(),kL=e=>{const{config:t,removeColumn:n}=je(),{events:i}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return _(xs,{get header(){return _(vo,{get name(){return e.column.name??"投稿"},get icon(){return _(Pd,{})},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(vs,{get events(){return i()}})}})},CL=e=>{const{config:t,removeColumn:n}=je(),{events:i}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return _(xs,{get header(){return _(vo,{get name(){return e.column.name??"リアクション"},get icon(){return _(pd,{})},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(cv,{get events(){return i()}})}})},SL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Md=(e={})=>(()=>{const t=SL();return Xe(t,e,!0,!0),t})(),EL=e=>{const{removeColumn:t}=je(),{events:n}=$r(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:dr()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(i.content)}));return _(xs,{get header(){return _(vo,{get name(){return e.column.name??"リレー"},get icon(){return _(Md,{})},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(vs,{get events(){return n()}})}})},TL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),uv=(e={})=>(()=>{const t=TL();return Xe(t,e,!0,!0),t})(),AL=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),IL=e=>{const[t,n]=xe(!1),[i,o]=xe(""),{saveColumn:a}=je(),c=()=>n(m=>!m),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},p=m=>{o(m.currentTarget.value)},h=m=>{m.preventDefault(),u()};return Sn(()=>{o(e.column.query)}),(()=>{const m=AL(),v=m.firstChild,w=v.firstChild,$=w.firstChild,S=w.nextSibling,k=S.firstChild,E=S.nextSibling;return I($,_(uv,{})),S.addEventListener("submit",h),k.addEventListener("blur",d),k.addEventListener("change",p),E.$$click=()=>c(),I(E,_(bg,{})),I(m,_(le,{get when(){return t()},get children(){return e.settings()}}),null),Pe(()=>k.value=i()),m})()},RL=e=>{const{removeColumn:t}=je(),{events:n}=$r(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:U9,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}});return _(xs,{get header(){return _(IL,{get column(){return e.column},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(vs,{get events(){return n()}})}})};wt(["click"]);const OL=P('<div class="flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),LL=()=>{const{config:e}=je();return(()=>{const t=OL();return I(t,_(Ut,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return _(Bn,{get children(){return[_(ze,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:c=>_(hL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(ze,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:c=>_(xL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(ze,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:c=>_(kL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(ze,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:c=>_(CL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(ze,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:c=>_(EL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(ze,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:c=>_(RL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},PL=P('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),ML=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=PL();i.$$click=n;const o=t;return typeof o=="function"?yr(o,i):t=i,I(i,()=>e.children),i})()};wt(["click"]);const BL=P('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),So=e=>_(ML,{onClose:()=>e.onClose?.(),get children(){const t=BL(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),I(i,_(le,{get when(){return e?.closeButton},get fallback(){return _(ss,{})},keyed:!0,children:a=>a()})),I(o,()=>e.children),t}});wt(["click"]);const UL=P('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),jL=P('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),DL=P('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),NL=async()=>{const t=await(await fetch(Fu("packageInfo.json"))).text();return JSON.parse(t)},HL=e=>{const[t]=gg(NL);return _(So,{get onClose(){return e.onClose},get children(){const n=UL(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;u.firstChild;const d=i.nextSibling,p=d.nextSibling,h=p.nextSibling,m=h.nextSibling,v=m.firstChild,w=v.nextSibling;w.nextSibling;const $=m.nextSibling,S=$.nextSibling,k=S.nextSibling,E=k.nextSibling,M=E.nextSibling,B=M.nextSibling,A=B.nextSibling;return A.nextSibling,I(u,()=>t()?.self?.version,null),I(m,_(Ol,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),w),I(A,()=>t()?.self.licenseText),I(n,_(Ut,{get each(){return t()?.packages??[]},fallback:"取得中",children:T=>[(()=>{const L=jL(),D=L.firstChild,W=D.nextSibling,ne=W.nextSibling,V=ne.nextSibling;return V.nextSibling,I(L,()=>T.name,D),I(L,()=>T.version,W),I(L,()=>T.licenseSpdx,V),L})(),(()=>{const L=DL();return I(L,()=>T.licenseText),L})()]}),null),Pe(()=>_t(o,"src",Fu("images/rabbit_app_256.png"))),n}})},zL=P('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),FL=e=>{const t=xr(),{saveColumn:n}=je(),i=Co(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(m=>console.error(m))},a=()=>{dn([t()])(([m])=>{n(j1({pubkey:m}))}),o()},c=()=>{dn([t()])(([m])=>{n(D1({pubkey:m}))}),o()},u=()=>{n(N1()),o()},d=()=>{n(hd({query:""})),o()},p=()=>{dn([t()])(([m])=>{n(H1({pubkey:m}))}),o()},h=()=>{dn([t()])(([m])=>{n(z1({pubkey:m}))}),o()};return _(So,{get onClose(){return e.onClose},get children(){const m=zL(),v=m.firstChild,w=v.firstChild,$=v.nextSibling,S=$.firstChild,k=$.nextSibling,E=k.firstChild,M=k.nextSibling,B=M.firstChild,A=M.nextSibling,T=A.firstChild,L=A.nextSibling,D=L.firstChild;return v.$$click=()=>a(),I(w,_(yg,{})),$.$$click=()=>c(),I(S,_(lv,{})),k.$$click=()=>u(),I(E,_(Md,{})),M.$$click=()=>d(),I(B,_(uv,{})),A.$$click=()=>p(),I(T,_(Pd,{})),L.$$click=()=>h(),I(D,_(pd,{})),m}})};wt(["click"]);const WL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),ZL=(e={})=>(()=>{const t=WL();return Xe(t,e,!0,!0),t})(),qL=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),KL=(e={})=>(()=>{const t=qL();return Xe(t,e,!0,!0),t})(),VL=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),GL=(e={})=>(()=>{const t=VL();return Xe(t,e,!0,!0),t})();function QL(e){const{config:t}=je(),n=Ke(e),{events:i}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[kt.Contacts],"#p":[n().pubkey]}],limit:1/0,continuous:!0})),o=()=>gr(i()?.map(c=>c.pubkey));return{followersPubkeys:o,count:()=>o().length}}const XL=e=>{const t=Ke(e),n=as(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return Promise.resolve(null);const{nip05:u}=c;return P1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},YL=P('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),JL=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),eP=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),tP=P('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),nP=P('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),rP=P('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),iP=P('<div class="shrink-0 text-xs">読み込み中'),sP=P('<div class="shrink-0 text-xs">フォローされています'),oP=P('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),aP=P('<div class="truncate text-xl font-bold">'),lP=P('<div class="truncate text-xs">@'),cP=P('<span class="inline-block h-3 w-3">'),uP=P('<span class="inline-block h-4 w-4 text-blue-400">'),dP=P('<div class="flex items-center text-xs">'),fP=P('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),hP=P('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),pP=P('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),gP=P('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),mP=P('<ul class="border-t px-5 py-2 text-xs">'),vP=P('<ul class="border-t p-1">'),yP=P('<div class="h-12 shrink-0">'),bP=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),_P=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),wP=P('<span class="inline-block h-4 w-4 text-rose-500">'),xP=P('<span class="text-sm">読み込み中'),$P=P('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),kP=P('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),CP=e=>{const{count:t}=QL(()=>({pubkey:e.pubkey}));return Ke(t)},SP=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=je(),a=Ll(),c=xr(),{showProfileEdit:u}=ei(),d=Ke(()=>Tl(e.pubkey)),[p,h]=xe(!1),[m,v]=xe(!1),{profile:w,query:$}=ms(()=>({pubkey:e.pubkey})),{verification:S,query:k}=XL(()=>dn([w()?.nip05])(([Y])=>({nip05:Y}))),E=()=>{const Y=w()?.nip05;if(Y==null)return null;const[ye,Ee]=Y.split("@");return Ee==null?null:ye==="_"?{domain:Ee,ident:Ee}:{user:ye,domain:Ee,ident:Y}},M=()=>S()?.pubkey===e.pubkey,B=()=>o(e.pubkey),{followingPubkeys:A,invalidateFollowings:T,query:L}=Au(()=>dn([c()])(([Y])=>({pubkey:Y}))),D=()=>A().includes(e.pubkey),{followingPubkeys:W,query:ne}=Au(()=>({pubkey:e.pubkey})),V=()=>{const Y=c();return Y!=null&&W().includes(Y)},ie=pi({mutationKey:["updateContacts"],mutationFn:(...Y)=>a.updateContacts(...Y).then(ye=>Promise.allSettled(ye.map(Jr(5e3)))),onSuccess:Y=>{const ye=Y.filter(Et=>Et.status==="fulfilled").length,Ee=Y.length-ye;ye===Y.length?console.log("succeeded to update contacts"):ye>0?console.log(`succeeded to update contacts for ${ye} relays but failed for ${Ee} relays`):console.error("failed to update contacts")},onError:Y=>{console.error("failed to update contacts: ",Y)},onSettled:()=>{T().then(()=>L.refetch()).catch(Y=>console.error("failed to refetch contacts",Y))}}),Z=()=>{const Y=c();Y!=null&&L.isFetched&&ie.mutate({relayUrls:t().relayUrls,pubkey:Y,content:L.data?.content??"",followingPubkeys:gr([...A(),e.pubkey])})},Q=()=>{const Y=c();Y!=null&&L.isFetched&&window.confirm("本当にフォロー解除しますか？")&&ie.mutate({relayUrls:t().relayUrls,pubkey:Y,content:L.data?.content??"",followingPubkeys:A().filter(ye=>ye!==e.pubkey)})},se=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(Y=>window.alert(Y))}},{content:()=>B()?"ミュート解除":"ミュート",onSelect:()=>{B()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===c(),content:()=>D()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{D()?Q():Z()}}],{events:We}=$r(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:dr()}],continuous:!1}));return _(So,{onClose:()=>e.onClose?.(),get children(){return[_(le,{get when(){return $.isFetched},get fallback(){return"loading"},get children(){return[_(le,{get when(){return w()?.banner},get fallback(){return yP()},keyed:!0,children:Y=>(()=>{const ye=bP(),Ee=ye.firstChild;return _t(Ee,"src",Y),ye})()}),(()=>{const Y=oP(),ye=Y.firstChild,Ee=ye.firstChild,Et=ye.nextSibling,dt=Et.firstChild;return I(Ee,_(le,{get when(){return w()?.picture},keyed:!0,children:ce=>(()=>{const re=_P();return _t(re,"src",ce),re})()})),I(dt,_(Bn,{get children(){return[_(ze,{get when(){return e.pubkey===c()},get children(){const ce=YL();return ce.$$click=()=>u(),ce}}),_(ze,{get when(){return L.isLoading||L.isFetching},get children(){return JL()}}),_(ze,{get when(){return ie.isLoading},get children(){return eP()}}),_(ze,{get when(){return D()},get children(){const ce=tP();return ce.$$click=()=>Q(),ce.addEventListener("mouseleave",()=>h(!1)),ce.addEventListener("mouseenter",()=>h(!0)),I(ce,_(le,{get when(){return!p()},fallback:"フォロー解除",children:"フォロー中"})),Pe(()=>ce.disabled=ie.isLoading),ce}}),_(ze,{get when(){return!D()},get children(){const ce=nP();return ce.$$click=()=>Z(),Pe(()=>ce.disabled=ie.isLoading),ce}})]}}),null),I(dt,_(am,{menu:se,get children(){const ce=rP();return I(ce,_(sm,{})),ce}}),null),I(Et,_(Bn,{get children(){return[_(ze,{get when(){return ne.isLoading},get children(){return iP()}}),_(ze,{get when(){return V()},get children(){return sP()}})]}}),null),Y})(),(()=>{const Y=fP(),ye=Y.firstChild,Ee=ye.firstChild,Et=Ee.nextSibling,dt=Et.firstChild;return I(ye,_(le,{get when(){return(w()?.display_name?.length??0)>0},get children(){const ce=aP();return I(ce,()=>w()?.display_name),ce}}),Ee),I(Ee,_(le,{get when(){return(w()?.name?.length??0)>0},get children(){const ce=lP();return ce.firstChild,I(ce,()=>w()?.name,null),ce}}),null),I(Ee,_(le,{get when(){return(w()?.nip05?.length??0)>0},get children(){const ce=dP();return I(ce,()=>E()?.ident,null),I(ce,_(Bn,{get fallback(){return(()=>{const re=wP();return I(re,_(GL,{})),re})()},get children(){return[_(ze,{get when(){return k.isLoading},get children(){const re=cP();return I(re,_(ZL,{})),re}}),_(ze,{get when(){return M()},get children(){const re=uP();return I(re,_(KL,{})),re}})]}}),null),ce}}),null),I(dt,d),Y})(),_(le,{get when(){return(w()?.about??"").length>0},get children(){const Y=hP();return I(Y,()=>w()?.about),Y}}),(()=>{const Y=gP(),ye=Y.firstChild,Ee=ye.firstChild,Et=Ee.nextSibling;return I(Et,_(le,{get when(){return ne.isFetched},get fallback(){return xP()},get children(){return W().length}})),I(Y,_(le,{get when(){return!t().hideCount},get children(){const dt=pP(),ce=dt.firstChild,re=ce.nextSibling;return I(re,_(le,{get when(){return m()},get fallback(){return(()=>{const Me=$P();return Me.$$click=()=>v(!0),Me})()},keyed:!0,get children(){return _(CP,{get pubkey(){return e.pubkey}})}})),dt}}),null),Y})(),_(le,{get when(){return(w()?.website??"").length>0},get children(){const Y=mP();return I(Y,_(le,{get when(){return w()?.website},keyed:!0,children:ye=>(()=>{const Ee=kP(),Et=Ee.firstChild;return I(Et,_(Md,{})),I(Ee,_(Ol,{class:"text-blue-500 underline",href:ye}),null),Ee})()})),Y}})]}}),(()=>{const Y=vP();return I(Y,_(vs,{get events(){return We()}})),Y})()]}})};wt(["click"]);function EP(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var TP=EP,AP=wi,IP=function(){try{var e=AP(Object,"defineProperty");return e({},"",{}),e}catch{}}(),dv=IP,V0=dv;function RP(e,t,n){t=="__proto__"&&V0?V0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var fv=RP,OP=fv,LP=qu,PP=Object.prototype,MP=PP.hasOwnProperty;function BP(e,t,n){var i=e[t];(!(MP.call(e,t)&&LP(i,n))||n===void 0&&!(t in e))&&OP(e,t,n)}var Bd=BP,UP=Bd,jP=fv;function DP(e,t,n,i){var o=!n;n||(n={});for(var a=-1,c=t.length;++a<c;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?jP(n,u,d):UP(n,u,d)}return n}var Eo=DP,NP=Eo,HP=Pl;function zP(e,t){return e&&NP(t,HP(t),e)}var FP=zP;function WP(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var ZP=WP,qP=Qn,KP=Ad,VP=ZP,GP=Object.prototype,QP=GP.hasOwnProperty;function XP(e){if(!qP(e))return VP(e);var t=KP(e),n=[];for(var i in e)i=="constructor"&&(t||!QP.call(e,i))||n.push(i);return n}var YP=XP,JP=Qm,eM=YP,tM=Ym;function nM(e){return tM(e)?JP(e,!0):eM(e)}var Ud=nM,rM=Eo,iM=Ud;function sM(e,t){return e&&rM(t,iM(t),e)}var oM=sM,cl={exports:{}};cl.exports;(function(e,t){var n=Nn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a?n.Buffer:void 0,u=c?c.allocUnsafe:void 0;function d(p,h){if(h)return p.slice();var m=p.length,v=u?u(m):new p.constructor(m);return p.copy(v),v}e.exports=d})(cl,cl.exports);var aM=cl.exports;function lM(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var cM=lM,uM=Eo,dM=xd;function fM(e,t){return uM(e,dM(e),t)}var hM=fM,pM=Xm,gM=pM(Object.getPrototypeOf,Object),jd=gM,mM=wd,vM=jd,yM=xd,bM=Km,_M=Object.getOwnPropertySymbols,wM=_M?function(e){for(var t=[];e;)mM(t,yM(e)),e=vM(e);return t}:bM,hv=wM,xM=Eo,$M=hv;function kM(e,t){return xM(e,$M(e),t)}var CM=kM,SM=qm,EM=hv,TM=Ud;function AM(e){return SM(e,TM,EM)}var Dd=AM,IM=Object.prototype,RM=IM.hasOwnProperty;function OM(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&RM.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var LM=OM,G0=Zm;function PM(e){var t=new e.constructor(e.byteLength);return new G0(t).set(new G0(e)),t}var Nd=PM,MM=Nd;function BM(e,t){var n=t?MM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var UM=BM,jM=/\w*$/;function DM(e){var t=new e.constructor(e.source,jM.exec(e));return t.lastIndex=e.lastIndex,t}var NM=DM,Q0=ls,X0=Q0?Q0.prototype:void 0,Y0=X0?X0.valueOf:void 0;function HM(e){return Y0?Object(Y0.call(e)):{}}var zM=HM,FM=Nd;function WM(e,t){var n=t?FM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var ZM=WM,qM=Nd,KM=UM,VM=NM,GM=zM,QM=ZM,XM="[object Boolean]",YM="[object Date]",JM="[object Map]",eB="[object Number]",tB="[object RegExp]",nB="[object Set]",rB="[object String]",iB="[object Symbol]",sB="[object ArrayBuffer]",oB="[object DataView]",aB="[object Float32Array]",lB="[object Float64Array]",cB="[object Int8Array]",uB="[object Int16Array]",dB="[object Int32Array]",fB="[object Uint8Array]",hB="[object Uint8ClampedArray]",pB="[object Uint16Array]",gB="[object Uint32Array]";function mB(e,t,n){var i=e.constructor;switch(t){case sB:return qM(e);case XM:case YM:return new i(+e);case oB:return KM(e,n);case aB:case lB:case cB:case uB:case dB:case fB:case hB:case pB:case gB:return QM(e,n);case JM:return new i;case eB:case rB:return new i(e);case tB:return VM(e);case nB:return new i;case iB:return GM(e)}}var vB=mB,yB=Qn,J0=Object.create,bB=function(){function e(){}return function(t){if(!yB(t))return{};if(J0)return J0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),_B=bB,wB=_B,xB=jd,$B=Ad;function kB(e){return typeof e.constructor=="function"&&!$B(e)?wB(xB(e)):{}}var CB=kB,SB=Ml,EB=ti,TB="[object Map]";function AB(e){return EB(e)&&SB(e)==TB}var IB=AB,RB=IB,OB=Ed,eg=Td,tg=eg&&eg.isMap,LB=tg?OB(tg):RB,PB=LB,MB=Ml,BB=ti,UB="[object Set]";function jB(e){return BB(e)&&MB(e)==UB}var DB=jB,NB=DB,HB=Ed,ng=Td,rg=ng&&ng.isSet,zB=rg?HB(rg):NB,FB=zB,WB=_d,ZB=TP,qB=Bd,KB=FP,VB=oM,GB=aM,QB=cM,XB=hM,YB=CM,JB=Jm,eU=Dd,tU=Ml,nU=LM,rU=vB,iU=CB,sU=Jn,oU=kd,aU=PB,lU=Qn,cU=FB,uU=Pl,dU=Ud,fU=1,hU=2,pU=4,pv="[object Arguments]",gU="[object Array]",mU="[object Boolean]",vU="[object Date]",yU="[object Error]",gv="[object Function]",bU="[object GeneratorFunction]",_U="[object Map]",wU="[object Number]",mv="[object Object]",xU="[object RegExp]",$U="[object Set]",kU="[object String]",CU="[object Symbol]",SU="[object WeakMap]",EU="[object ArrayBuffer]",TU="[object DataView]",AU="[object Float32Array]",IU="[object Float64Array]",RU="[object Int8Array]",OU="[object Int16Array]",LU="[object Int32Array]",PU="[object Uint8Array]",MU="[object Uint8ClampedArray]",BU="[object Uint16Array]",UU="[object Uint32Array]",it={};it[pv]=it[gU]=it[EU]=it[TU]=it[mU]=it[vU]=it[AU]=it[IU]=it[RU]=it[OU]=it[LU]=it[_U]=it[wU]=it[mv]=it[xU]=it[$U]=it[kU]=it[CU]=it[PU]=it[MU]=it[BU]=it[UU]=!0;it[yU]=it[gv]=it[SU]=!1;function Ua(e,t,n,i,o,a){var c,u=t&fU,d=t&hU,p=t&pU;if(n&&(c=o?n(e,i,o,a):n(e)),c!==void 0)return c;if(!lU(e))return e;var h=sU(e);if(h){if(c=nU(e),!u)return QB(e,c)}else{var m=tU(e),v=m==gv||m==bU;if(oU(e))return GB(e,u);if(m==mv||m==pv||v&&!o){if(c=d||v?{}:iU(e),!u)return d?YB(e,VB(c,e)):XB(e,KB(c,e))}else{if(!it[m])return o?e:{};c=rU(e,m,u)}}a||(a=new WB);var w=a.get(e);if(w)return w;a.set(e,c),cU(e)?e.forEach(function(k){c.add(Ua(k,t,n,k,e,a))}):aU(e)&&e.forEach(function(k,E){c.set(E,Ua(k,t,n,E,e,a))});var $=p?d?eU:JB:d?dU:uU,S=h?void 0:$(e);return ZB(S||e,function(k,E){S&&(E=k,k=e[E]),qB(c,E,Ua(k,t,n,E,e,a))}),c}var jU=Ua;function DU(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var NU=DU;function HU(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var zU=HU,FU=Ul,WU=zU;function ZU(e,t){return t.length<2?e:FU(e,WU(t,0,-1))}var qU=ZU,KU=_s,VU=NU,GU=qU,QU=ws;function XU(e,t){return t=KU(t,e),e=GU(e,t),e==null||delete e[QU(VU(t))]}var YU=XU,JU=cs,ej=jd,tj=ti,nj="[object Object]",rj=Function.prototype,ij=Object.prototype,vv=rj.toString,sj=ij.hasOwnProperty,oj=vv.call(Object);function aj(e){if(!tj(e)||JU(e)!=nj)return!1;var t=ej(e);if(t===null)return!0;var n=sj.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&vv.call(n)==oj}var lj=aj,cj=lj;function uj(e){return cj(e)?void 0:e}var dj=uj,ig=ls,fj=$d,hj=Jn,sg=ig?ig.isConcatSpreadable:void 0;function pj(e){return hj(e)||fj(e)||!!(sg&&e&&e[sg])}var gj=pj,mj=wd,vj=gj;function yv(e,t,n,i,o){var a=-1,c=e.length;for(n||(n=vj),o||(o=[]);++a<c;){var u=e[a];t>0&&n(u)?t>1?yv(u,t-1,n,i,o):mj(o,u):i||(o[o.length]=u)}return o}var yj=yv,bj=yj;function _j(e){var t=e==null?0:e.length;return t?bj(e,1):[]}var wj=_j;function xj(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var $j=xj,kj=$j,og=Math.max;function Cj(e,t,n){return t=og(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=og(i.length-t,0),c=Array(a);++o<a;)c[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(c),kj(e,this,u)}}var Sj=Cj;function Ej(e){return function(){return e}}var Tj=Ej,Aj=Tj,ag=dv,Ij=av,Rj=ag?function(e,t){return ag(e,"toString",{configurable:!0,enumerable:!1,value:Aj(t),writable:!0})}:Ij,Oj=Rj,Lj=800,Pj=16,Mj=Date.now;function Bj(e){var t=0,n=0;return function(){var i=Mj(),o=Pj-(i-n);if(n=i,o>0){if(++t>=Lj)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var Uj=Bj,jj=Oj,Dj=Uj,Nj=Dj(jj),Hj=Nj,zj=wj,Fj=Sj,Wj=Hj;function Zj(e){return Wj(Fj(e,void 0,zj),e+"")}var qj=Zj,Kj=Od,Vj=jU,Gj=YU,Qj=_s,Xj=Eo,Yj=dj,Jj=qj,eD=Dd,tD=1,nD=2,rD=4,iD=Jj(function(e,t){var n={};if(e==null)return n;var i=!1;t=Kj(t,function(a){return a=Qj(a,e),i||(i=a.length>1),a}),Xj(e,eD(e),n),i&&(n=Vj(n,tD|nD|rD,Yj));for(var o=t.length;o--;)Gj(n,t[o]);return n}),sD=iD;const oD=mo(sD);var aD="Expected a function";function lD(e){if(typeof e!="function")throw new TypeError(aD);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var cD=lD,uD=Bd,dD=_s,fD=Cd,lg=Qn,hD=ws;function pD(e,t,n,i){if(!lg(e))return e;t=dD(t,e);for(var o=-1,a=t.length,c=a-1,u=e;u!=null&&++o<a;){var d=hD(t[o]),p=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=c){var h=u[d];p=i?i(h,d,u):void 0,p===void 0&&(p=lg(h)?h:fD(t[o+1])?[]:{})}uD(u,d,p),u=u[d]}return e}var gD=pD,mD=Ul,vD=gD,yD=_s;function bD(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var c=t[i],u=mD(e,c);n(u,c)&&vD(a,yD(c,e),u)}return a}var _D=bD,wD=Od,xD=Ld,$D=_D,kD=Dd;function CD(e,t){if(e==null)return{};var n=wD(kD(e),function(i){return[i]});return t=xD(t),$D(e,n,function(i,o){return t(i,o[0])})}var SD=CD,ED=Ld,TD=cD,AD=SD;function ID(e,t){return AD(e,TD(ED(t)))}var RD=ID;const OD=mo(RD),LD=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),PD=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),MD=P('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),BD=P('<div class="px-4 pt-4">読み込み中...'),UD=P('<div><span class="font-bold">その他の項目</span><div>'),jD=P('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),DD=P('<div class="h-24 shrink-0">'),ND=P('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),HD="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",zD="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",FD=new RegExp(`^${HD}$`),bv=new RegExp(`^${zD}$`),WD=e=>FD.test(e),ZD=e=>bv.test(e),qD=e=>{const t=xr(),{config:n}=je(),[i,o]=xe(""),[a,c]=xe(""),[u,d]=xe(""),[p,h]=xe(""),[m,v]=xe(""),[w,$]=xe(""),[S,k]=xe(""),[E,M]=xe(""),{profile:B,invalidateProfile:A,query:T}=ms(()=>dn([t()])(([Q])=>({pubkey:Q}))),{updateProfile:L}=Ll(),D=pi({mutationKey:["updateProfile"],mutationFn:(...Q)=>L(...Q).then(se=>Promise.allSettled(se.map(Jr(1e4)))),onSuccess:Q=>{const se=Q.filter(Y=>Y.status==="fulfilled").length,We=Q.length-se;se===Q.length?window.alert("更新しました"):se>0?window.alert(`${We}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),A().then(()=>T.refetch()).catch(Y=>console.error(Y)),e.onClose()},onError:Q=>{console.error("failed to delete",Q)}}),W=()=>T.isLoading||D.isLoading,ne=()=>W(),V=()=>oD(B(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),ie=Q=>{Q.preventDefault();const se=t();if(se==null)return;const We=OD({picture:i(),banner:a(),name:u(),display_name:p(),about:m(),website:w(),nip05:S(),lud06:WD(E())?E():null,lud16:ZD(E())?E():null},Y=>Y==null||Y.length===0);D.mutate({relayUrls:n().relayUrls,pubkey:se,profile:We,otherProperties:V()})},Z=Q=>Q.key==="Enter"&&Q.preventDefault();return Sn(()=>{const Q=B();Q!=null&&(T.refetch().catch(se=>console.error(se)),mu(()=>{o(se=>Q.picture??se),c(se=>Q.banner??se),d(se=>Q.name??se),h(se=>Q.display_name??se),v(se=>Q.about??se),$(se=>Q.website??se),k(se=>Q.nip05??se),Q.lud16!=null?M(Q.lud16):Q.lud06!=null&&M(Q.lud06)}))}),_(So,{closeButton:()=>_(Zu,{}),get onClose(){return e.onClose},get children(){return[(()=>{const Q=MD(),se=Q.firstChild;return I(Q,_(le,{get when(){return a().length>0},get fallback(){return DD()},keyed:!0,get children(){const We=LD(),Y=We.firstChild;return Pe(()=>_t(Y,"src",a())),We}}),se),I(se,_(le,{get when(){return i().length>0},get children(){const We=PD();return Pe(()=>_t(We,"src",i())),We}})),Q})(),_(le,{get when(){return W()},get children(){return BD()}}),(()=>{const Q=jD(),se=Q.firstChild,We=se.firstChild,Y=We.firstChild,ye=Y.nextSibling,Ee=We.nextSibling,Et=Ee.firstChild,dt=Et.nextSibling,ce=Ee.nextSibling,re=ce.firstChild,Me=re.nextSibling,Ve=Me.firstChild,et=Ve.nextSibling,tt=ce.nextSibling,xt=tt.firstChild,ft=xt.nextSibling,oe=tt.nextSibling,$t=oe.firstChild,q=$t.nextSibling,ht=oe.nextSibling,hn=ht.firstChild,nt=hn.nextSibling,qt=ht.nextSibling,kr=qt.firstChild,mt=kr.nextSibling,Dt=qt.nextSibling,er=Dt.firstChild,ve=er.nextSibling,He=ve.nextSibling,lt=Dt.nextSibling,Tt=lt.firstChild,en=Tt.nextSibling;return se.addEventListener("submit",ie),ye.$$keydown=Z,ye.addEventListener("blur",ue=>o(ue.currentTarget.value)),dt.$$keydown=Z,dt.addEventListener("blur",ue=>c(ue.currentTarget.value)),et.$$keydown=Z,et.addEventListener("change",ue=>d(ue.currentTarget.value)),ft.$$keydown=Z,ft.addEventListener("change",ue=>h(ue.currentTarget.value)),q.addEventListener("change",ue=>v(ue.currentTarget.value)),nt.$$keydown=Z,nt.addEventListener("change",ue=>$(ue.currentTarget.value)),mt.$$keydown=Z,mt.addEventListener("change",ue=>k(ue.currentTarget.value)),He.$$keydown=Z,He.addEventListener("change",ue=>M(ue.currentTarget.value)),I(se,_(le,{get when(){return Object.entries(V()).length>0},get children(){const ue=UD(),pn=ue.firstChild,Re=pn.nextSibling;return I(Re,_(Ut,{get each(){return Object.entries(V())},children:([st,Kt])=>(()=>{const Vt=ND(),Nt=Vt.firstChild,En=Nt.nextSibling;return I(Nt,st),I(En,Kt),Vt})()})),ue}}),lt),en.$$click=()=>e.onClose(),I(se,_(le,{get when(){return D.isLoading},children:"保存中..."}),null),Pe(ue=>{const pn=ne(),Re=ne(),st=ne(),Kt=ne(),Vt=ne(),Nt=ne(),En=bv.source,xi=ne(),$i=ne(),ki=D.isLoading;return pn!==ue._v$&&(ye.disabled=ue._v$=pn),Re!==ue._v$2&&(dt.disabled=ue._v$2=Re),st!==ue._v$3&&(et.disabled=ue._v$3=st),Kt!==ue._v$4&&(ft.disabled=ue._v$4=Kt),Vt!==ue._v$5&&(q.disabled=ue._v$5=Vt),Nt!==ue._v$6&&(nt.disabled=ue._v$6=Nt),En!==ue._v$7&&_t(mt,"pattern",ue._v$7=En),xi!==ue._v$8&&(mt.disabled=ue._v$8=xi),$i!==ue._v$9&&(He.disabled=ue._v$9=$i),ki!==ue._v$10&&(Tt.disabled=ue._v$10=ki),ue},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Pe(()=>ye.value=i()),Pe(()=>dt.value=a()),Pe(()=>et.value=u()),Pe(()=>ft.value=p()),Pe(()=>q.value=m()),Pe(()=>nt.value=w()),Pe(()=>mt.value=S()),Pe(()=>He.value=E()),Q})()]}})};wt(["keydown","click"]);const KD=()=>{const e=xr(),{modalState:t,showProfile:n,closeModal:i}=ei();return _(le,{get when(){return t()},keyed:!0,children:o=>_(Bn,{get children(){return[_(ze,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>_(SP,{pubkey:a,onClose:i})}),_(ze,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return _(qD,{onClose:()=>dn([e()])(([a])=>{n(a)})})}}),_(ze,{get when(){return o.type==="AddColumn"},get children(){return _(FL,{onClose:i})}}),_(ze,{get when(){return o.type==="About"},get children(){return _(HL,{onClose:i})}})]}})})},VD=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),GD=(e={})=>(()=>{const t=VD();return Xe(t,e,!0,!0),t})(),QD=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),cg=(e={})=>(()=>{const t=QD();return Xe(t,e,!0,!0),t})(),XD=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),YD=(e={})=>(()=>{const t=XD();return Xe(t,e,!0,!0),t})(),JD=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),eN=(e={})=>(()=>{const t=JD();return Xe(t,e,!0,!0),t})(),tN=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),nN=(e={})=>(()=>{const t=tN();return Xe(t,e,!0,!0),t})(),rN=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),iN=(e={})=>(()=>{const t=rN();return Xe(t,e,!0,!0),t})(),sN=P('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),oN=P('<div class="py-2"><h3 class="font-bold">リレー</h3><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),zu=P('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),aN=P('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),lN=P('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),cN=P('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),uN=P('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),dN=P('<div class="py-2"><h3 class="font-bold">カスタム絵文字</h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9">名前</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9">URL</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://.../emoji.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">追加'),fN=P('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),hN=P('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),pN=P('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),gN=P('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),mN=P('<div class="p-4">'),vN=P('<h2 class="flex-1 text-center text-lg font-bold">設定'),yN=P('<ul class="flex flex-col">'),bN=P('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),_N=P('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),_v=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,wN=_v("https?"),xN=_v("wss?"),$N=()=>{const e=xr(),{showProfile:t,showProfileEdit:n}=ei();return(()=>{const i=sN(),o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;return c.$$click=()=>dn([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},kN=()=>{const{config:e,addRelay:t,removeRelay:n}=je(),[i,o]=xe(""),a=c=>{c.preventDefault(),i().length!==0&&(t(i()),o(""))};return(()=>{const c=oN(),u=c.firstChild,d=u.nextSibling,p=d.nextSibling,h=p.firstChild;return I(d,_(Ut,{get each(){return e().relayUrls},children:m=>(()=>{const v=zu(),w=v.firstChild,$=w.nextSibling;return I(w,m),$.$$click=()=>n(m),I($,_(ss,{})),v})()})),p.addEventListener("submit",a),h.addEventListener("change",m=>o(m.currentTarget.value)),_t(h,"pattern",xN),Pe(()=>h.value=i()),c})()},CN=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],SN=()=>{const{config:e,setConfig:t}=je(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=aN(),o=i.firstChild,a=o.nextSibling;return I(a,_(Ut,{each:CN,children:({id:c,name:u,example:d})=>(()=>{const p=lN(),h=p.firstChild,m=h.nextSibling;return h.$$click=()=>n(c),I(h,u),I(m,d),Pe(v=>{const w=e().dateFormat===c,$=e().dateFormat===c,S=e().dateFormat!==c,k=e().dateFormat!==c;return w!==v._v$&&h.classList.toggle("bg-rose-300",v._v$=w),$!==v._v$2&&h.classList.toggle("text-white",v._v$2=$),S!==v._v$3&&h.classList.toggle("bg-white",v._v$3=S),k!==v._v$4&&h.classList.toggle("text-rose-300",v._v$4=k),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()})),i})()},Xs=e=>(()=>{const t=cN();return t.$$click=n=>e.onClick(n),Pe(n=>{const i=!e.value,o=!e.value,a=!!e.value,c=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),c!==n._v$8&&t.classList.toggle("justify-end",n._v$8=c),u!==n._v$9&&_t(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),EN=()=>{const{config:e,setConfig:t}=je(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=uN(),a=o.firstChild,c=a.nextSibling,u=c.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,I(u,_(Xs,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),I(d,_(Xs,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},TN=()=>{const{config:e,saveEmoji:t,removeEmoji:n}=je(),[i,o]=xe(""),[a,c]=xe(""),u=d=>{d.preventDefault(),!(i().length===0||a().length===0)&&t({shortcode:i(),url:a()})};return(()=>{const d=dN(),p=d.firstChild,h=p.nextSibling,m=h.nextSibling,v=m.firstChild,w=v.firstChild,$=w.nextSibling,S=v.nextSibling,k=S.firstChild,E=k.nextSibling;return I(h,_(Ut,{get each(){return Object.values(e().customEmojis)},children:({shortcode:M,url:B})=>(()=>{const A=fN(),T=A.firstChild,L=T.nextSibling,D=L.nextSibling;return _t(T,"src",B),_t(T,"alt",M),I(L,M),D.$$click=()=>n(M),I(D,_(ss,{})),A})()})),m.addEventListener("submit",u),$.addEventListener("change",M=>o(M.currentTarget.value)),E.addEventListener("change",M=>c(M.currentTarget.value)),_t(E,"pattern",wN),Pe(()=>$.value=i()),Pe(()=>E.value=a()),d})()},AN=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=je(),[o,a]=xe(""),c=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=hN(),d=u.firstChild,p=d.nextSibling;return I(p,_(Ut,{get each(){return e().mutedPubkeys},children:h=>(()=>{const m=zu(),v=m.firstChild,w=v.nextSibling;return I(v,_(Al,{pubkey:h})),w.$$click=()=>t(h),I(w,_(ss,{})),m})()})),u})(),(()=>{const u=pN(),d=u.firstChild,p=d.nextSibling,h=p.nextSibling,m=h.firstChild;return I(p,_(Ut,{get each(){return e().mutedKeywords},children:v=>(()=>{const w=zu(),$=w.firstChild,S=$.nextSibling;return I($,v),S.$$click=()=>i(v),I(S,_(ss,{})),w})()})),h.addEventListener("submit",c),m.addEventListener("change",v=>a(v.currentTarget.value)),Pe(()=>m.value=o()),u})()]},IN=()=>{const{config:e,setConfig:t}=je(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=gN(),c=a.firstChild,u=c.nextSibling,d=u.firstChild;d.firstChild;const p=d.nextSibling;p.firstChild;const h=p.nextSibling;return h.firstChild,I(d,_(Xs,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),I(p,_(Xs,{get value(){return e().showImage},onClick:()=>i()}),null),I(h,_(Xs,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},RN=e=>{const[t,n]=xe(null),i=[{name:()=>"プロフィール",icon:()=>_(Pd,{}),render:()=>_($N,{})},{name:()=>"リレー",icon:()=>_(iN,{}),render:()=>_(kN,{})},{name:()=>"表示",icon:()=>_(nN,{}),render:()=>[_(SN,{}),_(EN,{}),_(IN,{})]},{name:()=>"カスタム絵文字",icon:()=>_(Um,{}),render:()=>_(TN,{})},{name:()=>"ミュート",icon:()=>_(eN,{}),render:()=>_(AN,{})}],o=()=>{const a=t();return a==null?null:i[a]};return _(So,{get onClose(){return e.onClose},get children(){const a=mN();return I(a,_(le,{get when(){return o()},get fallback(){return[vN(),(()=>{const c=yN();return I(c,_(Ut,{each:i,children:(u,d)=>(()=>{const p=bN(),h=p.firstChild,m=h.firstChild;return h.$$click=()=>n(d),I(m,()=>u.icon()),I(h,()=>u.name(),null),p})()})),c})()]},keyed:!0,children:c=>(()=>{const u=_N(),d=u.firstChild,p=d.nextSibling;return d.$$click=()=>n(null),I(d,_(Zu,{})),I(p,()=>c.render()),u})()})),a}})};wt(["click"]);const ON=P('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),LN=P('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),PN=P('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),MN=()=>{let e,t;const{saveColumn:n}=je(),i=Co(),[o,a]=xe(""),c=u=>{u.preventDefault(),n(hd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.log(d)),e?.close(),a("")};return _(md,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=LN();return I(u,_(cg,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=ON(),d=u.firstChild,p=d.nextSibling;u.addEventListener("submit",c),d.addEventListener("change",m=>a(m.currentTarget.value));const h=t;return typeof h=="function"?yr(h,d):t=d,I(p,_(cg,{})),Pe(()=>d.value=o()),u}})},BN=()=>{let e;const{showAddColumn:t,showAbout:n}=ei(),{config:i}=je(),[o,a]=xe(!1),[c,u]=xe(!1),d=()=>{e?.focus(),e?.click()},p=()=>a(!0),h=()=>a(!1),m=()=>a(v=>!v);return Bu(()=>({commandType:"openPostForm",handler:()=>{p(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=PN(),w=v.firstChild,$=w.firstChild,S=$.firstChild,k=$.nextSibling,E=k.nextSibling,M=E.firstChild,B=M.nextSibling,A=B.nextSibling,T=A.firstChild,L=w.nextSibling;return S.$$click=()=>m(),I(S,_(YD,{})),I($,_(MN,{}),null),M.$$click=()=>t(),I(M,_(om,{})),B.$$click=()=>u(D=>!D),I(B,_(GD,{})),A.$$click=()=>n(),I(L,_(Dm,{textAreaRef:D=>{e=D},onClose:h})),I(v,_(le,{get when(){return c()},get children(){return _(RN,{onClose:()=>u(!1)})}}),null),Pe(D=>{const W=Fu("images/rabbit_app_256.png"),ne=!!(o()||i().keepOpenPostForm),V=!(o()||i().keepOpenPostForm);return W!==D._v$&&_t(T,"src",D._v$=W),ne!==D._v$2&&L.classList.toggle("static",D._v$2=ne),V!==D._v$3&&L.classList.toggle("hidden",D._v$3=V),D},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};wt(["click"]);var UN=Nn,jN=function(){return UN.Date.now()},DN=jN,NN=/\s/;function HN(e){for(var t=e.length;t--&&NN.test(e.charAt(t)););return t}var zN=HN,FN=zN,WN=/^\s+/;function ZN(e){return e&&e.slice(0,FN(e)+1).replace(WN,"")}var qN=ZN,KN=qN,ug=Qn,VN=Bl,dg=0/0,GN=/^[-+]0x[0-9a-f]+$/i,QN=/^0b[01]+$/i,XN=/^0o[0-7]+$/i,YN=parseInt;function JN(e){if(typeof e=="number")return e;if(VN(e))return dg;if(ug(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ug(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=KN(e);var n=QN.test(e);return n||XN.test(e)?YN(e.slice(2),n?2:8):GN.test(e)?dg:+e}var eH=JN,tH=Qn,pu=DN,fg=eH,nH="Expected a function",rH=Math.max,iH=Math.min;function sH(e,t,n){var i,o,a,c,u,d,p=0,h=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(nH);t=fg(t)||0,tH(n)&&(h=!!n.leading,m="maxWait"in n,a=m?rH(fg(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function w(L){var D=i,W=o;return i=o=void 0,p=L,c=e.apply(W,D),c}function $(L){return p=L,u=setTimeout(E,t),h?w(L):c}function S(L){var D=L-d,W=L-p,ne=t-D;return m?iH(ne,a-W):ne}function k(L){var D=L-d,W=L-p;return d===void 0||D>=t||D<0||m&&W>=a}function E(){var L=pu();if(k(L))return M(L);u=setTimeout(E,S(L))}function M(L){return u=void 0,v&&i?w(L):(i=o=void 0,c)}function B(){u!==void 0&&clearTimeout(u),p=0,i=d=o=u=void 0}function A(){return u===void 0?c:M(pu())}function T(){var L=pu(),D=k(L);if(i=arguments,o=this,d=L,D){if(u===void 0)return $(d);if(m)return clearTimeout(u),u=setTimeout(E,t),w(d)}return u===void 0&&(u=setTimeout(E,t)),c}return T.cancel=B,T.flush=A,T}var oH=sH,aH=oH,lH=Qn,cH="Expected a function";function uH(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(cH);return lH(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),aH(e,t,{leading:i,maxWait:t,trailing:o})}var dH=uH;const fH=mo(dH),hH=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],pH=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},gH=({shortcuts:e=hH,onShortcut:t})=>{const n=pH(e);Sn(()=>{const i=fH(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),Xr(()=>{window.removeEventListener("keydown",i)})})},mH=()=>{const e=Co();gH({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},vH=P('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),wH=()=>{mH();const e=h4(),{persistStatus:t}=mg(),n=El(),{config:i,initializeColumns:o}=je(),a=xr();return pr(()=>{i().relayUrls.map(async c=>{(await n().ensureRelay(c)).on("notice",d=>{console.error(`NOTICE: ${c}: ${d}`)})})}),pr(()=>{const c=a();c!=null&&o({pubkey:c})}),Sn(()=>{t().loggedIn||e("/hello")}),p4(c=>{console.error("uncaught error: ",c)}),(()=>{const c=vH();return I(c,_(BN,{}),null),I(c,_(LL,{}),null),I(c,_(KD,{}),null),c})()};export{wH as default};
//# sourceMappingURL=Home-278361a7.js.map
