import{S as hg,s as gu,n as Yx,i as vp,a as yp,t as Jx,f as e4,c as t4,r as bp,b as n4,d as pg,g as r4,u as os,e as gg,h as mu,o as Xr,j as kn,k as Ys,l as ul,p as _p,m as Xe,q as P,v as bt,w as $e,x as I,y as _,z as le,A as Ve,B as dl,C as i4,M as Fe,D as s4,E as Pn,F as hr,G as o4,H as Be,I as a4,J as mr,K as Mt,L as l4,N as yt,O as c4,P as u4,Q as qs,R as d4,T as f4}from"./index-10b5238b.js";import{c as Ki,u as Di,a as h4,b as p4,r as Fu,d as g4}from"./usePersistStatus-2fe88405.js";class m4 extends hg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),wp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return vu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return vu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),gu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&xp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const c=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Yx)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),vp||this.currentResult.isStale||!yp(this.options.staleTime))return;const n=Jx(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(vp||this.options.enabled===!1||!yp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||e4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,c=this.currentResultState,u=this.currentResultOptions,d=t!==i,p=d?t.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:m}=t;let{dataUpdatedAt:v,error:w,errorUpdatedAt:$,fetchStatus:E,status:k}=m,C=!1,M=!1,B;if(n._optimisticResults){const W=this.hasListeners(),re=!W&&wp(t,n),V=W&&xp(t,i,n,o);(re||V)&&(E=t4(t.options.networkMode)?"fetching":"paused",v||(k="loading")),n._optimisticResults==="isRestoring"&&(E="idle")}if(n.keepPreviousData&&!m.dataUpdatedAt&&h!=null&&h.isSuccess&&k!=="error")B=h.data,v=h.dataUpdatedAt,k=h.status,C=!0;else if(n.select&&typeof m.data<"u")if(a&&m.data===c?.data&&n.select===this.selectFn)B=this.selectResult;else try{this.selectFn=n.select,B=n.select(m.data),B=bp(a?.data,B,n),this.selectResult=B,this.selectError=null}catch(W){this.selectError=W}else B=m.data;if(typeof n.placeholderData<"u"&&typeof B>"u"&&k==="loading"){let W;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)W=a.data;else if(W=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof W<"u")try{W=n.select(W),this.selectError=null}catch(re){this.selectError=re}typeof W<"u"&&(k="success",B=bp(a?.data,W,n),M=!0)}this.selectError&&(w=this.selectError,B=this.selectResult,$=Date.now(),k="error");const R=E==="fetching",T=k==="loading",L=k==="error";return{status:k,fetchStatus:E,isLoading:T,isSuccess:k==="success",isError:L,isInitialLoading:T&&R,data:B,dataUpdatedAt:v,error:w,errorUpdatedAt:$,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>p.dataUpdateCount||m.errorUpdateCount>p.errorUpdateCount,isFetching:R,isRefetching:R&&!T,isLoadingError:L&&m.dataUpdatedAt===0,isPaused:E==="paused",isPlaceholderData:M,isPreviousData:C,isRefetchError:L&&m.dataUpdatedAt!==0,isStale:Wu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,gu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:c}=this.options;if(c==="all"||!c&&!this.trackedProps.size)return!0;const u=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const p=d;return this.currentResult[p]!==n[p]&&u.has(p)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!n4(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){pg.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var c,u,d,p;(c=(u=this.options).onError)==null||c.call(u,this.currentResult.error),(d=(p=this.options).onSettled)==null||d.call(p,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function v4(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function wp(e,t){return v4(e,t)||e.state.dataUpdatedAt>0&&vu(e,t,t.refetchOnMount)}function vu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Wu(e,t)}return!1}function xp(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Wu(e,n)}function Wu(e,t){return e.isStaleByTime(t.staleTime)}class y4 extends hg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),gu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:r4(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){pg.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var c,u,d,p;(c=(u=this.mutateOptions).onError)==null||c.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(p=this.mutateOptions).onSettled)==null||d.call(p,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)})})}}function b4(e){return typeof e=="function"}function $p(e,t,n){if(!b4(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function mg(e,t){return typeof e=="function"?e(...t):!!e}function _4(e,t){const n=os({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[c,u]=Ki(a.getOptimisticResult(o)),[d,{refetch:p,mutate:h}]=gg(()=>new Promise($=>{c.isFetching&&c.isLoading||(Di(c.data)===i&&$(void 0),$(Di(c.data)))}));mu(()=>{h(()=>Di(c.data)),p()});let m=[];const v=a.subscribe($=>{m.push(()=>{mu(()=>{const E={...Di($)};E.data===void 0&&(E.data=i),u(Di(E)),h(()=>Di($.data)),p()})}),queueMicrotask(()=>{const E=m.pop();E&&E(),m=[]})});Xr(()=>v()),kn(()=>{a.setOptions(o,{listeners:!1})}),Ys(()=>{const $=n.defaultQueryOptions(e);a.setOptions($)}),Ys(ul(()=>c.status,()=>{if(c.isError&&!c.isFetching&&mg(a.options.useErrorBoundary,[c.error,a.getCurrentQuery()]))throw c.error}));const w={get($,E){return E==="data"?d():Reflect.get($,E)}};return new Proxy(c,w)}function as(e,t,n){const[i,o]=Ki($p(e,t,n));return Ys(()=>{const a=$p(e,t,n);o(a)}),_4(i,m4)}function pi(e,t,n){const[i,o]=Ki(_p(e,t,n)),a=os({context:i.context}),c=new y4(a,i),u=(m,v)=>{c.mutate(m,v).catch(w4)},[d,p]=Ki({...c.getCurrentResult(),mutate:u,mutateAsync:c.getCurrentResult().mutate});Ys(()=>{const m=_p(e,t,n);o(m),c.setOptions(m)}),Ys(ul(()=>d.status,()=>{if(d.isError&&mg(c.options.useErrorBoundary,[d.error]))throw d.error}));const h=c.subscribe(m=>{p({...m,mutate:u,mutateAsync:m.mutate})});return Xr(h),d}function w4(){}const x4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),vg=(e={})=>(()=>{const t=x4();return Xe(t,e,!0,!0),t})();var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function fl(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var Ua={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ua.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",p=500,h="__lodash_placeholder__",m=1,v=2,w=4,$=1,E=2,k=1,C=2,M=4,B=8,R=16,T=32,L=64,H=128,W=256,re=512,V=30,ie="...",Z=800,X=16,oe=1,Ze=2,J=3,ve=1/0,ke=9007199254740991,ce=17976931348623157e292,ye=0/0,G=4294967295,Oe=G-1,Ye=G>>>1,kt=[["ary",H],["bind",k],["bindKey",C],["curry",B],["curryRight",R],["flip",re],["partial",T],["partialRight",L],["rearg",W]],ot="[object Arguments]",jt="[object Array]",un="[object AsyncFunction]",K="[object Boolean]",se="[object Date]",_t="[object DOMException]",gt="[object Error]",Rt="[object Function]",Nn="[object GeneratorFunction]",at="[object Map]",Wt="[object Number]",xr="[object Null]",ht="[object Object]",Ut="[object Promise]",Jn="[object Proxy]",be="[object RegExp]",ze="[object Set]",lt="[object String]",Ct="[object Symbol]",Xt="[object Undefined]",ue="[object WeakMap]",dn="[object WeakSet]",Le="[object ArrayBuffer]",rt="[object DataView]",Zt="[object Float32Array]",Cn="[object Float64Array]",fn="[object Int8Array]",$r="[object Int16Array]",xi="[object Int32Array]",$i="[object Uint8Array]",ki="[object Uint8ClampedArray]",Ul="[object Uint16Array]",Dl="[object Uint32Array]",bv=/\b__p \+= '';/g,_v=/\b(__p \+=) '' \+/g,wv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Hd=/&(?:amp|lt|gt|quot|#39);/g,zd=/[&<>"']/g,xv=RegExp(Hd.source),$v=RegExp(zd.source),kv=/<%-([\s\S]+?)%>/g,Cv=/<%([\s\S]+?)%>/g,Fd=/<%=([\s\S]+?)%>/g,Sv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ev=/^\w*$/,Tv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nl=/[\\^$.*+?()[\]{}|]/g,Av=RegExp(Nl.source),Hl=/^\s+/,Iv=/\s/,Rv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ov=/\{\n\/\* \[wrapped with (.+)\] \*/,Lv=/,? & /,Pv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Mv=/[()=,{}\[\]\/\s]/,Bv=/\\(\\)?/g,jv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Wd=/\w*$/,Uv=/^[-+]0x[0-9a-f]+$/i,Dv=/^0b[01]+$/i,Nv=/^\[object .+?Constructor\]$/,Hv=/^0o[0-7]+$/i,zv=/^(?:0|[1-9]\d*)$/,Fv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,To=/($^)/,Wv=/['\n\r\u2028\u2029\\]/g,Ao="\\ud800-\\udfff",Zv="\\u0300-\\u036f",qv="\\ufe20-\\ufe2f",Kv="\\u20d0-\\u20ff",Zd=Zv+qv+Kv,qd="\\u2700-\\u27bf",Kd="a-z\\xdf-\\xf6\\xf8-\\xff",Vv="\\xac\\xb1\\xd7\\xf7",Gv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Qv="\\u2000-\\u206f",Xv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Vd="A-Z\\xc0-\\xd6\\xd8-\\xde",Gd="\\ufe0e\\ufe0f",Qd=Vv+Gv+Qv+Xv,zl="['’]",Yv="["+Ao+"]",Xd="["+Qd+"]",Io="["+Zd+"]",Yd="\\d+",Jv="["+qd+"]",Jd="["+Kd+"]",ef="[^"+Ao+Qd+Yd+qd+Kd+Vd+"]",Fl="\\ud83c[\\udffb-\\udfff]",e2="(?:"+Io+"|"+Fl+")",tf="[^"+Ao+"]",Wl="(?:\\ud83c[\\udde6-\\uddff]){2}",Zl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ci="["+Vd+"]",nf="\\u200d",rf="(?:"+Jd+"|"+ef+")",t2="(?:"+Ci+"|"+ef+")",sf="(?:"+zl+"(?:d|ll|m|re|s|t|ve))?",of="(?:"+zl+"(?:D|LL|M|RE|S|T|VE))?",af=e2+"?",lf="["+Gd+"]?",n2="(?:"+nf+"(?:"+[tf,Wl,Zl].join("|")+")"+lf+af+")*",r2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",cf=lf+af+n2,s2="(?:"+[Jv,Wl,Zl].join("|")+")"+cf,o2="(?:"+[tf+Io+"?",Io,Wl,Zl,Yv].join("|")+")",a2=RegExp(zl,"g"),l2=RegExp(Io,"g"),ql=RegExp(Fl+"(?="+Fl+")|"+o2+cf,"g"),c2=RegExp([Ci+"?"+Jd+"+"+sf+"(?="+[Xd,Ci,"$"].join("|")+")",t2+"+"+of+"(?="+[Xd,Ci+rf,"$"].join("|")+")",Ci+"?"+rf+"+"+sf,Ci+"+"+of,i2,r2,Yd,s2].join("|"),"g"),u2=RegExp("["+nf+Ao+Zd+Gd+"]"),d2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,f2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],h2=-1,it={};it[Zt]=it[Cn]=it[fn]=it[$r]=it[xi]=it[$i]=it[ki]=it[Ul]=it[Dl]=!0,it[ot]=it[jt]=it[Le]=it[K]=it[rt]=it[se]=it[gt]=it[Rt]=it[at]=it[Wt]=it[ht]=it[be]=it[ze]=it[lt]=it[ue]=!1;var tt={};tt[ot]=tt[jt]=tt[Le]=tt[rt]=tt[K]=tt[se]=tt[Zt]=tt[Cn]=tt[fn]=tt[$r]=tt[xi]=tt[at]=tt[Wt]=tt[ht]=tt[be]=tt[ze]=tt[lt]=tt[Ct]=tt[$i]=tt[ki]=tt[Ul]=tt[Dl]=!0,tt[gt]=tt[Rt]=tt[ue]=!1;var p2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},g2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},m2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},v2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},y2=parseFloat,b2=parseInt,uf=typeof dr=="object"&&dr&&dr.Object===Object&&dr,_2=typeof self=="object"&&self&&self.Object===Object&&self,Tt=uf||_2||Function("return this")(),Kl=t&&!t.nodeType&&t,ni=Kl&&!0&&e&&!e.nodeType&&e,df=ni&&ni.exports===Kl,Vl=df&&uf.process,hn=function(){try{var A=ni&&ni.require&&ni.require("util").types;return A||Vl&&Vl.binding&&Vl.binding("util")}catch{}}(),ff=hn&&hn.isArrayBuffer,hf=hn&&hn.isDate,pf=hn&&hn.isMap,gf=hn&&hn.isRegExp,mf=hn&&hn.isSet,vf=hn&&hn.isTypedArray;function Yt(A,U,j){switch(j.length){case 0:return A.call(U);case 1:return A.call(U,j[0]);case 2:return A.call(U,j[0],j[1]);case 3:return A.call(U,j[0],j[1],j[2])}return A.apply(U,j)}function w2(A,U,j,te){for(var _e=-1,qe=A==null?0:A.length;++_e<qe;){var xt=A[_e];U(te,xt,j(xt),A)}return te}function pn(A,U){for(var j=-1,te=A==null?0:A.length;++j<te&&U(A[j],j,A)!==!1;);return A}function x2(A,U){for(var j=A==null?0:A.length;j--&&U(A[j],j,A)!==!1;);return A}function yf(A,U){for(var j=-1,te=A==null?0:A.length;++j<te;)if(!U(A[j],j,A))return!1;return!0}function kr(A,U){for(var j=-1,te=A==null?0:A.length,_e=0,qe=[];++j<te;){var xt=A[j];U(xt,j,A)&&(qe[_e++]=xt)}return qe}function Ro(A,U){var j=A==null?0:A.length;return!!j&&Si(A,U,0)>-1}function Gl(A,U,j){for(var te=-1,_e=A==null?0:A.length;++te<_e;)if(j(U,A[te]))return!0;return!1}function ct(A,U){for(var j=-1,te=A==null?0:A.length,_e=Array(te);++j<te;)_e[j]=U(A[j],j,A);return _e}function Cr(A,U){for(var j=-1,te=U.length,_e=A.length;++j<te;)A[_e+j]=U[j];return A}function Ql(A,U,j,te){var _e=-1,qe=A==null?0:A.length;for(te&&qe&&(j=A[++_e]);++_e<qe;)j=U(j,A[_e],_e,A);return j}function $2(A,U,j,te){var _e=A==null?0:A.length;for(te&&_e&&(j=A[--_e]);_e--;)j=U(j,A[_e],_e,A);return j}function Xl(A,U){for(var j=-1,te=A==null?0:A.length;++j<te;)if(U(A[j],j,A))return!0;return!1}var k2=Yl("length");function C2(A){return A.split("")}function S2(A){return A.match(Pv)||[]}function bf(A,U,j){var te;return j(A,function(_e,qe,xt){if(U(_e,qe,xt))return te=qe,!1}),te}function Oo(A,U,j,te){for(var _e=A.length,qe=j+(te?1:-1);te?qe--:++qe<_e;)if(U(A[qe],qe,A))return qe;return-1}function Si(A,U,j){return U===U?U2(A,U,j):Oo(A,_f,j)}function E2(A,U,j,te){for(var _e=j-1,qe=A.length;++_e<qe;)if(te(A[_e],U))return _e;return-1}function _f(A){return A!==A}function wf(A,U){var j=A==null?0:A.length;return j?ec(A,U)/j:ye}function Yl(A){return function(U){return U==null?n:U[A]}}function Jl(A){return function(U){return A==null?n:A[U]}}function xf(A,U,j,te,_e){return _e(A,function(qe,xt,et){j=te?(te=!1,qe):U(j,qe,xt,et)}),j}function T2(A,U){var j=A.length;for(A.sort(U);j--;)A[j]=A[j].value;return A}function ec(A,U){for(var j,te=-1,_e=A.length;++te<_e;){var qe=U(A[te]);qe!==n&&(j=j===n?qe:j+qe)}return j}function tc(A,U){for(var j=-1,te=Array(A);++j<A;)te[j]=U(j);return te}function A2(A,U){return ct(U,function(j){return[j,A[j]]})}function $f(A){return A&&A.slice(0,Ef(A)+1).replace(Hl,"")}function Jt(A){return function(U){return A(U)}}function nc(A,U){return ct(U,function(j){return A[j]})}function ks(A,U){return A.has(U)}function kf(A,U){for(var j=-1,te=A.length;++j<te&&Si(U,A[j],0)>-1;);return j}function Cf(A,U){for(var j=A.length;j--&&Si(U,A[j],0)>-1;);return j}function I2(A,U){for(var j=A.length,te=0;j--;)A[j]===U&&++te;return te}var R2=Jl(p2),O2=Jl(g2);function L2(A){return"\\"+v2[A]}function P2(A,U){return A==null?n:A[U]}function Ei(A){return u2.test(A)}function M2(A){return d2.test(A)}function B2(A){for(var U,j=[];!(U=A.next()).done;)j.push(U.value);return j}function rc(A){var U=-1,j=Array(A.size);return A.forEach(function(te,_e){j[++U]=[_e,te]}),j}function Sf(A,U){return function(j){return A(U(j))}}function Sr(A,U){for(var j=-1,te=A.length,_e=0,qe=[];++j<te;){var xt=A[j];(xt===U||xt===h)&&(A[j]=h,qe[_e++]=j)}return qe}function Lo(A){var U=-1,j=Array(A.size);return A.forEach(function(te){j[++U]=te}),j}function j2(A){var U=-1,j=Array(A.size);return A.forEach(function(te){j[++U]=[te,te]}),j}function U2(A,U,j){for(var te=j-1,_e=A.length;++te<_e;)if(A[te]===U)return te;return-1}function D2(A,U,j){for(var te=j+1;te--;)if(A[te]===U)return te;return te}function Ti(A){return Ei(A)?H2(A):k2(A)}function Sn(A){return Ei(A)?z2(A):C2(A)}function Ef(A){for(var U=A.length;U--&&Iv.test(A.charAt(U)););return U}var N2=Jl(m2);function H2(A){for(var U=ql.lastIndex=0;ql.test(A);)++U;return U}function z2(A){return A.match(ql)||[]}function F2(A){return A.match(c2)||[]}var W2=function A(U){U=U==null?Tt:Ai.defaults(Tt.Object(),U,Ai.pick(Tt,f2));var j=U.Array,te=U.Date,_e=U.Error,qe=U.Function,xt=U.Math,et=U.Object,ic=U.RegExp,Z2=U.String,gn=U.TypeError,Po=j.prototype,q2=qe.prototype,Ii=et.prototype,Mo=U["__core-js_shared__"],Bo=q2.toString,Qe=Ii.hasOwnProperty,K2=0,Tf=function(){var r=/[^.]+$/.exec(Mo&&Mo.keys&&Mo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),jo=Ii.toString,V2=Bo.call(et),G2=Tt._,Q2=ic("^"+Bo.call(Qe).replace(Nl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Uo=df?U.Buffer:n,Er=U.Symbol,Do=U.Uint8Array,Af=Uo?Uo.allocUnsafe:n,No=Sf(et.getPrototypeOf,et),If=et.create,Rf=Ii.propertyIsEnumerable,Ho=Po.splice,Of=Er?Er.isConcatSpreadable:n,Cs=Er?Er.iterator:n,ri=Er?Er.toStringTag:n,zo=function(){try{var r=li(et,"defineProperty");return r({},"",{}),r}catch{}}(),X2=U.clearTimeout!==Tt.clearTimeout&&U.clearTimeout,Y2=te&&te.now!==Tt.Date.now&&te.now,J2=U.setTimeout!==Tt.setTimeout&&U.setTimeout,Fo=xt.ceil,Wo=xt.floor,sc=et.getOwnPropertySymbols,ey=Uo?Uo.isBuffer:n,Lf=U.isFinite,ty=Po.join,ny=Sf(et.keys,et),$t=xt.max,Ot=xt.min,ry=te.now,iy=U.parseInt,Pf=xt.random,sy=Po.reverse,oc=li(U,"DataView"),Ss=li(U,"Map"),ac=li(U,"Promise"),Ri=li(U,"Set"),Es=li(U,"WeakMap"),Ts=li(et,"create"),Zo=Es&&new Es,Oi={},oy=ci(oc),ay=ci(Ss),ly=ci(ac),cy=ci(Ri),uy=ci(Es),qo=Er?Er.prototype:n,As=qo?qo.valueOf:n,Mf=qo?qo.toString:n;function y(r){if(pt(r)&&!xe(r)&&!(r instanceof je)){if(r instanceof mn)return r;if(Qe.call(r,"__wrapped__"))return Bh(r)}return new mn(r)}var Li=function(){function r(){}return function(s){if(!dt(s))return{};if(If)return If(s);r.prototype=s;var l=new r;return r.prototype=n,l}}();function Ko(){}function mn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:kv,evaluate:Cv,interpolate:Fd,variable:"",imports:{_:y}},y.prototype=Ko.prototype,y.prototype.constructor=y,mn.prototype=Li(Ko.prototype),mn.prototype.constructor=mn;function je(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=G,this.__views__=[]}function dy(){var r=new je(this.__wrapped__);return r.__actions__=qt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=qt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=qt(this.__views__),r}function fy(){if(this.__filtered__){var r=new je(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function hy(){var r=this.__wrapped__.value(),s=this.__dir__,l=xe(r),f=s<0,g=l?r.length:0,b=Cb(0,g,this.__views__),x=b.start,S=b.end,O=S-x,D=f?S:x-1,N=this.__iteratees__,F=N.length,Q=0,ae=Ot(O,this.__takeCount__);if(!l||!f&&g==O&&ae==O)return sh(r,this.__actions__);var pe=[];e:for(;O--&&Q<ae;){D+=s;for(var Ee=-1,ge=r[D];++Ee<F;){var Pe=N[Ee],Ue=Pe.iteratee,nn=Pe.type,Ht=Ue(ge);if(nn==Ze)ge=Ht;else if(!Ht){if(nn==oe)continue e;break e}}pe[Q++]=ge}return pe}je.prototype=Li(Ko.prototype),je.prototype.constructor=je;function ii(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function py(){this.__data__=Ts?Ts(null):{},this.size=0}function gy(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function my(r){var s=this.__data__;if(Ts){var l=s[r];return l===d?n:l}return Qe.call(s,r)?s[r]:n}function vy(r){var s=this.__data__;return Ts?s[r]!==n:Qe.call(s,r)}function yy(r,s){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=Ts&&s===n?d:s,this}ii.prototype.clear=py,ii.prototype.delete=gy,ii.prototype.get=my,ii.prototype.has=vy,ii.prototype.set=yy;function er(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function by(){this.__data__=[],this.size=0}function _y(r){var s=this.__data__,l=Vo(s,r);if(l<0)return!1;var f=s.length-1;return l==f?s.pop():Ho.call(s,l,1),--this.size,!0}function wy(r){var s=this.__data__,l=Vo(s,r);return l<0?n:s[l][1]}function xy(r){return Vo(this.__data__,r)>-1}function $y(r,s){var l=this.__data__,f=Vo(l,r);return f<0?(++this.size,l.push([r,s])):l[f][1]=s,this}er.prototype.clear=by,er.prototype.delete=_y,er.prototype.get=wy,er.prototype.has=xy,er.prototype.set=$y;function tr(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function ky(){this.size=0,this.__data__={hash:new ii,map:new(Ss||er),string:new ii}}function Cy(r){var s=oa(this,r).delete(r);return this.size-=s?1:0,s}function Sy(r){return oa(this,r).get(r)}function Ey(r){return oa(this,r).has(r)}function Ty(r,s){var l=oa(this,r),f=l.size;return l.set(r,s),this.size+=l.size==f?0:1,this}tr.prototype.clear=ky,tr.prototype.delete=Cy,tr.prototype.get=Sy,tr.prototype.has=Ey,tr.prototype.set=Ty;function si(r){var s=-1,l=r==null?0:r.length;for(this.__data__=new tr;++s<l;)this.add(r[s])}function Ay(r){return this.__data__.set(r,d),this}function Iy(r){return this.__data__.has(r)}si.prototype.add=si.prototype.push=Ay,si.prototype.has=Iy;function En(r){var s=this.__data__=new er(r);this.size=s.size}function Ry(){this.__data__=new er,this.size=0}function Oy(r){var s=this.__data__,l=s.delete(r);return this.size=s.size,l}function Ly(r){return this.__data__.get(r)}function Py(r){return this.__data__.has(r)}function My(r,s){var l=this.__data__;if(l instanceof er){var f=l.__data__;if(!Ss||f.length<o-1)return f.push([r,s]),this.size=++l.size,this;l=this.__data__=new tr(f)}return l.set(r,s),this.size=l.size,this}En.prototype.clear=Ry,En.prototype.delete=Oy,En.prototype.get=Ly,En.prototype.has=Py,En.prototype.set=My;function Bf(r,s){var l=xe(r),f=!l&&ui(r),g=!l&&!f&&Or(r),b=!l&&!f&&!g&&ji(r),x=l||f||g||b,S=x?tc(r.length,Z2):[],O=S.length;for(var D in r)(s||Qe.call(r,D))&&!(x&&(D=="length"||g&&(D=="offset"||D=="parent")||b&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||sr(D,O)))&&S.push(D);return S}function jf(r){var s=r.length;return s?r[yc(0,s-1)]:n}function By(r,s){return aa(qt(r),oi(s,0,r.length))}function jy(r){return aa(qt(r))}function lc(r,s,l){(l!==n&&!Tn(r[s],l)||l===n&&!(s in r))&&nr(r,s,l)}function Is(r,s,l){var f=r[s];(!(Qe.call(r,s)&&Tn(f,l))||l===n&&!(s in r))&&nr(r,s,l)}function Vo(r,s){for(var l=r.length;l--;)if(Tn(r[l][0],s))return l;return-1}function Uy(r,s,l,f){return Tr(r,function(g,b,x){s(f,g,l(g),x)}),f}function Uf(r,s){return r&&zn(s,St(s),r)}function Dy(r,s){return r&&zn(s,Vt(s),r)}function nr(r,s,l){s=="__proto__"&&zo?zo(r,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[s]=l}function cc(r,s){for(var l=-1,f=s.length,g=j(f),b=r==null;++l<f;)g[l]=b?n:Fc(r,s[l]);return g}function oi(r,s,l){return r===r&&(l!==n&&(r=r<=l?r:l),s!==n&&(r=r>=s?r:s)),r}function vn(r,s,l,f,g,b){var x,S=s&m,O=s&v,D=s&w;if(l&&(x=g?l(r,f,g,b):l(r)),x!==n)return x;if(!dt(r))return r;var N=xe(r);if(N){if(x=Eb(r),!S)return qt(r,x)}else{var F=Lt(r),Q=F==Rt||F==Nn;if(Or(r))return lh(r,S);if(F==ht||F==ot||Q&&!g){if(x=O||Q?{}:Eh(r),!S)return O?mb(r,Dy(x,r)):gb(r,Uf(x,r))}else{if(!tt[F])return g?r:{};x=Tb(r,F,S)}}b||(b=new En);var ae=b.get(r);if(ae)return ae;b.set(r,x),np(r)?r.forEach(function(ge){x.add(vn(ge,s,l,ge,r,b))}):ep(r)&&r.forEach(function(ge,Pe){x.set(Pe,vn(ge,s,l,Pe,r,b))});var pe=D?O?Ac:Tc:O?Vt:St,Ee=N?n:pe(r);return pn(Ee||r,function(ge,Pe){Ee&&(Pe=ge,ge=r[Pe]),Is(x,Pe,vn(ge,s,l,Pe,r,b))}),x}function Ny(r){var s=St(r);return function(l){return Df(l,r,s)}}function Df(r,s,l){var f=l.length;if(r==null)return!f;for(r=et(r);f--;){var g=l[f],b=s[g],x=r[g];if(x===n&&!(g in r)||!b(x))return!1}return!0}function Nf(r,s,l){if(typeof r!="function")throw new gn(c);return js(function(){r.apply(n,l)},s)}function Rs(r,s,l,f){var g=-1,b=Ro,x=!0,S=r.length,O=[],D=s.length;if(!S)return O;l&&(s=ct(s,Jt(l))),f?(b=Gl,x=!1):s.length>=o&&(b=ks,x=!1,s=new si(s));e:for(;++g<S;){var N=r[g],F=l==null?N:l(N);if(N=f||N!==0?N:0,x&&F===F){for(var Q=D;Q--;)if(s[Q]===F)continue e;O.push(N)}else b(s,F,f)||O.push(N)}return O}var Tr=hh(Hn),Hf=hh(dc,!0);function Hy(r,s){var l=!0;return Tr(r,function(f,g,b){return l=!!s(f,g,b),l}),l}function Go(r,s,l){for(var f=-1,g=r.length;++f<g;){var b=r[f],x=s(b);if(x!=null&&(S===n?x===x&&!tn(x):l(x,S)))var S=x,O=b}return O}function zy(r,s,l,f){var g=r.length;for(l=Ce(l),l<0&&(l=-l>g?0:g+l),f=f===n||f>g?g:Ce(f),f<0&&(f+=g),f=l>f?0:ip(f);l<f;)r[l++]=s;return r}function zf(r,s){var l=[];return Tr(r,function(f,g,b){s(f,g,b)&&l.push(f)}),l}function At(r,s,l,f,g){var b=-1,x=r.length;for(l||(l=Ib),g||(g=[]);++b<x;){var S=r[b];s>0&&l(S)?s>1?At(S,s-1,l,f,g):Cr(g,S):f||(g[g.length]=S)}return g}var uc=ph(),Ff=ph(!0);function Hn(r,s){return r&&uc(r,s,St)}function dc(r,s){return r&&Ff(r,s,St)}function Qo(r,s){return kr(s,function(l){return or(r[l])})}function ai(r,s){s=Ir(s,r);for(var l=0,f=s.length;r!=null&&l<f;)r=r[Fn(s[l++])];return l&&l==f?r:n}function Wf(r,s,l){var f=s(r);return xe(r)?f:Cr(f,l(r))}function Dt(r){return r==null?r===n?Xt:xr:ri&&ri in et(r)?kb(r):jb(r)}function fc(r,s){return r>s}function Fy(r,s){return r!=null&&Qe.call(r,s)}function Wy(r,s){return r!=null&&s in et(r)}function Zy(r,s,l){return r>=Ot(s,l)&&r<$t(s,l)}function hc(r,s,l){for(var f=l?Gl:Ro,g=r[0].length,b=r.length,x=b,S=j(b),O=1/0,D=[];x--;){var N=r[x];x&&s&&(N=ct(N,Jt(s))),O=Ot(N.length,O),S[x]=!l&&(s||g>=120&&N.length>=120)?new si(x&&N):n}N=r[0];var F=-1,Q=S[0];e:for(;++F<g&&D.length<O;){var ae=N[F],pe=s?s(ae):ae;if(ae=l||ae!==0?ae:0,!(Q?ks(Q,pe):f(D,pe,l))){for(x=b;--x;){var Ee=S[x];if(!(Ee?ks(Ee,pe):f(r[x],pe,l)))continue e}Q&&Q.push(pe),D.push(ae)}}return D}function qy(r,s,l,f){return Hn(r,function(g,b,x){s(f,l(g),b,x)}),f}function Os(r,s,l){s=Ir(s,r),r=Rh(r,s);var f=r==null?r:r[Fn(bn(s))];return f==null?n:Yt(f,r,l)}function Zf(r){return pt(r)&&Dt(r)==ot}function Ky(r){return pt(r)&&Dt(r)==Le}function Vy(r){return pt(r)&&Dt(r)==se}function Ls(r,s,l,f,g){return r===s?!0:r==null||s==null||!pt(r)&&!pt(s)?r!==r&&s!==s:Gy(r,s,l,f,Ls,g)}function Gy(r,s,l,f,g,b){var x=xe(r),S=xe(s),O=x?jt:Lt(r),D=S?jt:Lt(s);O=O==ot?ht:O,D=D==ot?ht:D;var N=O==ht,F=D==ht,Q=O==D;if(Q&&Or(r)){if(!Or(s))return!1;x=!0,N=!1}if(Q&&!N)return b||(b=new En),x||ji(r)?kh(r,s,l,f,g,b):xb(r,s,O,l,f,g,b);if(!(l&$)){var ae=N&&Qe.call(r,"__wrapped__"),pe=F&&Qe.call(s,"__wrapped__");if(ae||pe){var Ee=ae?r.value():r,ge=pe?s.value():s;return b||(b=new En),g(Ee,ge,l,f,b)}}return Q?(b||(b=new En),$b(r,s,l,f,g,b)):!1}function Qy(r){return pt(r)&&Lt(r)==at}function pc(r,s,l,f){var g=l.length,b=g,x=!f;if(r==null)return!b;for(r=et(r);g--;){var S=l[g];if(x&&S[2]?S[1]!==r[S[0]]:!(S[0]in r))return!1}for(;++g<b;){S=l[g];var O=S[0],D=r[O],N=S[1];if(x&&S[2]){if(D===n&&!(O in r))return!1}else{var F=new En;if(f)var Q=f(D,N,O,r,s,F);if(!(Q===n?Ls(N,D,$|E,f,F):Q))return!1}}return!0}function qf(r){if(!dt(r)||Ob(r))return!1;var s=or(r)?Q2:Nv;return s.test(ci(r))}function Xy(r){return pt(r)&&Dt(r)==be}function Yy(r){return pt(r)&&Lt(r)==ze}function Jy(r){return pt(r)&&ha(r.length)&&!!it[Dt(r)]}function Kf(r){return typeof r=="function"?r:r==null?Gt:typeof r=="object"?xe(r)?Qf(r[0],r[1]):Gf(r):gp(r)}function gc(r){if(!Bs(r))return ny(r);var s=[];for(var l in et(r))Qe.call(r,l)&&l!="constructor"&&s.push(l);return s}function eb(r){if(!dt(r))return Bb(r);var s=Bs(r),l=[];for(var f in r)f=="constructor"&&(s||!Qe.call(r,f))||l.push(f);return l}function mc(r,s){return r<s}function Vf(r,s){var l=-1,f=Kt(r)?j(r.length):[];return Tr(r,function(g,b,x){f[++l]=s(g,b,x)}),f}function Gf(r){var s=Rc(r);return s.length==1&&s[0][2]?Ah(s[0][0],s[0][1]):function(l){return l===r||pc(l,r,s)}}function Qf(r,s){return Lc(r)&&Th(s)?Ah(Fn(r),s):function(l){var f=Fc(l,r);return f===n&&f===s?Wc(l,r):Ls(s,f,$|E)}}function Xo(r,s,l,f,g){r!==s&&uc(s,function(b,x){if(g||(g=new En),dt(b))tb(r,s,x,l,Xo,f,g);else{var S=f?f(Mc(r,x),b,x+"",r,s,g):n;S===n&&(S=b),lc(r,x,S)}},Vt)}function tb(r,s,l,f,g,b,x){var S=Mc(r,l),O=Mc(s,l),D=x.get(O);if(D){lc(r,l,D);return}var N=b?b(S,O,l+"",r,s,x):n,F=N===n;if(F){var Q=xe(O),ae=!Q&&Or(O),pe=!Q&&!ae&&ji(O);N=O,Q||ae||pe?xe(S)?N=S:mt(S)?N=qt(S):ae?(F=!1,N=lh(O,!0)):pe?(F=!1,N=ch(O,!0)):N=[]:Us(O)||ui(O)?(N=S,ui(S)?N=sp(S):(!dt(S)||or(S))&&(N=Eh(O))):F=!1}F&&(x.set(O,N),g(N,O,f,b,x),x.delete(O)),lc(r,l,N)}function Xf(r,s){var l=r.length;if(l)return s+=s<0?l:0,sr(s,l)?r[s]:n}function Yf(r,s,l){s.length?s=ct(s,function(b){return xe(b)?function(x){return ai(x,b.length===1?b[0]:b)}:b}):s=[Gt];var f=-1;s=ct(s,Jt(fe()));var g=Vf(r,function(b,x,S){var O=ct(s,function(D){return D(b)});return{criteria:O,index:++f,value:b}});return T2(g,function(b,x){return pb(b,x,l)})}function nb(r,s){return Jf(r,s,function(l,f){return Wc(r,f)})}function Jf(r,s,l){for(var f=-1,g=s.length,b={};++f<g;){var x=s[f],S=ai(r,x);l(S,x)&&Ps(b,Ir(x,r),S)}return b}function rb(r){return function(s){return ai(s,r)}}function vc(r,s,l,f){var g=f?E2:Si,b=-1,x=s.length,S=r;for(r===s&&(s=qt(s)),l&&(S=ct(r,Jt(l)));++b<x;)for(var O=0,D=s[b],N=l?l(D):D;(O=g(S,N,O,f))>-1;)S!==r&&Ho.call(S,O,1),Ho.call(r,O,1);return r}function eh(r,s){for(var l=r?s.length:0,f=l-1;l--;){var g=s[l];if(l==f||g!==b){var b=g;sr(g)?Ho.call(r,g,1):wc(r,g)}}return r}function yc(r,s){return r+Wo(Pf()*(s-r+1))}function ib(r,s,l,f){for(var g=-1,b=$t(Fo((s-r)/(l||1)),0),x=j(b);b--;)x[f?b:++g]=r,r+=l;return x}function bc(r,s){var l="";if(!r||s<1||s>ke)return l;do s%2&&(l+=r),s=Wo(s/2),s&&(r+=r);while(s);return l}function Ae(r,s){return Bc(Ih(r,s,Gt),r+"")}function sb(r){return jf(Ui(r))}function ob(r,s){var l=Ui(r);return aa(l,oi(s,0,l.length))}function Ps(r,s,l,f){if(!dt(r))return r;s=Ir(s,r);for(var g=-1,b=s.length,x=b-1,S=r;S!=null&&++g<b;){var O=Fn(s[g]),D=l;if(O==="__proto__"||O==="constructor"||O==="prototype")return r;if(g!=x){var N=S[O];D=f?f(N,O,S):n,D===n&&(D=dt(N)?N:sr(s[g+1])?[]:{})}Is(S,O,D),S=S[O]}return r}var th=Zo?function(r,s){return Zo.set(r,s),r}:Gt,ab=zo?function(r,s){return zo(r,"toString",{configurable:!0,enumerable:!1,value:qc(s),writable:!0})}:Gt;function lb(r){return aa(Ui(r))}function yn(r,s,l){var f=-1,g=r.length;s<0&&(s=-s>g?0:g+s),l=l>g?g:l,l<0&&(l+=g),g=s>l?0:l-s>>>0,s>>>=0;for(var b=j(g);++f<g;)b[f]=r[f+s];return b}function cb(r,s){var l;return Tr(r,function(f,g,b){return l=s(f,g,b),!l}),!!l}function Yo(r,s,l){var f=0,g=r==null?f:r.length;if(typeof s=="number"&&s===s&&g<=Ye){for(;f<g;){var b=f+g>>>1,x=r[b];x!==null&&!tn(x)&&(l?x<=s:x<s)?f=b+1:g=b}return g}return _c(r,s,Gt,l)}function _c(r,s,l,f){var g=0,b=r==null?0:r.length;if(b===0)return 0;s=l(s);for(var x=s!==s,S=s===null,O=tn(s),D=s===n;g<b;){var N=Wo((g+b)/2),F=l(r[N]),Q=F!==n,ae=F===null,pe=F===F,Ee=tn(F);if(x)var ge=f||pe;else D?ge=pe&&(f||Q):S?ge=pe&&Q&&(f||!ae):O?ge=pe&&Q&&!ae&&(f||!Ee):ae||Ee?ge=!1:ge=f?F<=s:F<s;ge?g=N+1:b=N}return Ot(b,Oe)}function nh(r,s){for(var l=-1,f=r.length,g=0,b=[];++l<f;){var x=r[l],S=s?s(x):x;if(!l||!Tn(S,O)){var O=S;b[g++]=x===0?0:x}}return b}function rh(r){return typeof r=="number"?r:tn(r)?ye:+r}function en(r){if(typeof r=="string")return r;if(xe(r))return ct(r,en)+"";if(tn(r))return Mf?Mf.call(r):"";var s=r+"";return s=="0"&&1/r==-ve?"-0":s}function Ar(r,s,l){var f=-1,g=Ro,b=r.length,x=!0,S=[],O=S;if(l)x=!1,g=Gl;else if(b>=o){var D=s?null:_b(r);if(D)return Lo(D);x=!1,g=ks,O=new si}else O=s?[]:S;e:for(;++f<b;){var N=r[f],F=s?s(N):N;if(N=l||N!==0?N:0,x&&F===F){for(var Q=O.length;Q--;)if(O[Q]===F)continue e;s&&O.push(F),S.push(N)}else g(O,F,l)||(O!==S&&O.push(F),S.push(N))}return S}function wc(r,s){return s=Ir(s,r),r=Rh(r,s),r==null||delete r[Fn(bn(s))]}function ih(r,s,l,f){return Ps(r,s,l(ai(r,s)),f)}function Jo(r,s,l,f){for(var g=r.length,b=f?g:-1;(f?b--:++b<g)&&s(r[b],b,r););return l?yn(r,f?0:b,f?b+1:g):yn(r,f?b+1:0,f?g:b)}function sh(r,s){var l=r;return l instanceof je&&(l=l.value()),Ql(s,function(f,g){return g.func.apply(g.thisArg,Cr([f],g.args))},l)}function xc(r,s,l){var f=r.length;if(f<2)return f?Ar(r[0]):[];for(var g=-1,b=j(f);++g<f;)for(var x=r[g],S=-1;++S<f;)S!=g&&(b[g]=Rs(b[g]||x,r[S],s,l));return Ar(At(b,1),s,l)}function oh(r,s,l){for(var f=-1,g=r.length,b=s.length,x={};++f<g;){var S=f<b?s[f]:n;l(x,r[f],S)}return x}function $c(r){return mt(r)?r:[]}function kc(r){return typeof r=="function"?r:Gt}function Ir(r,s){return xe(r)?r:Lc(r,s)?[r]:Mh(Ge(r))}var ub=Ae;function Rr(r,s,l){var f=r.length;return l=l===n?f:l,!s&&l>=f?r:yn(r,s,l)}var ah=X2||function(r){return Tt.clearTimeout(r)};function lh(r,s){if(s)return r.slice();var l=r.length,f=Af?Af(l):new r.constructor(l);return r.copy(f),f}function Cc(r){var s=new r.constructor(r.byteLength);return new Do(s).set(new Do(r)),s}function db(r,s){var l=s?Cc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function fb(r){var s=new r.constructor(r.source,Wd.exec(r));return s.lastIndex=r.lastIndex,s}function hb(r){return As?et(As.call(r)):{}}function ch(r,s){var l=s?Cc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function uh(r,s){if(r!==s){var l=r!==n,f=r===null,g=r===r,b=tn(r),x=s!==n,S=s===null,O=s===s,D=tn(s);if(!S&&!D&&!b&&r>s||b&&x&&O&&!S&&!D||f&&x&&O||!l&&O||!g)return 1;if(!f&&!b&&!D&&r<s||D&&l&&g&&!f&&!b||S&&l&&g||!x&&g||!O)return-1}return 0}function pb(r,s,l){for(var f=-1,g=r.criteria,b=s.criteria,x=g.length,S=l.length;++f<x;){var O=uh(g[f],b[f]);if(O){if(f>=S)return O;var D=l[f];return O*(D=="desc"?-1:1)}}return r.index-s.index}function dh(r,s,l,f){for(var g=-1,b=r.length,x=l.length,S=-1,O=s.length,D=$t(b-x,0),N=j(O+D),F=!f;++S<O;)N[S]=s[S];for(;++g<x;)(F||g<b)&&(N[l[g]]=r[g]);for(;D--;)N[S++]=r[g++];return N}function fh(r,s,l,f){for(var g=-1,b=r.length,x=-1,S=l.length,O=-1,D=s.length,N=$t(b-S,0),F=j(N+D),Q=!f;++g<N;)F[g]=r[g];for(var ae=g;++O<D;)F[ae+O]=s[O];for(;++x<S;)(Q||g<b)&&(F[ae+l[x]]=r[g++]);return F}function qt(r,s){var l=-1,f=r.length;for(s||(s=j(f));++l<f;)s[l]=r[l];return s}function zn(r,s,l,f){var g=!l;l||(l={});for(var b=-1,x=s.length;++b<x;){var S=s[b],O=f?f(l[S],r[S],S,l,r):n;O===n&&(O=r[S]),g?nr(l,S,O):Is(l,S,O)}return l}function gb(r,s){return zn(r,Oc(r),s)}function mb(r,s){return zn(r,Ch(r),s)}function ea(r,s){return function(l,f){var g=xe(l)?w2:Uy,b=s?s():{};return g(l,r,fe(f,2),b)}}function Pi(r){return Ae(function(s,l){var f=-1,g=l.length,b=g>1?l[g-1]:n,x=g>2?l[2]:n;for(b=r.length>3&&typeof b=="function"?(g--,b):n,x&&Nt(l[0],l[1],x)&&(b=g<3?n:b,g=1),s=et(s);++f<g;){var S=l[f];S&&r(s,S,f,b)}return s})}function hh(r,s){return function(l,f){if(l==null)return l;if(!Kt(l))return r(l,f);for(var g=l.length,b=s?g:-1,x=et(l);(s?b--:++b<g)&&f(x[b],b,x)!==!1;);return l}}function ph(r){return function(s,l,f){for(var g=-1,b=et(s),x=f(s),S=x.length;S--;){var O=x[r?S:++g];if(l(b[O],O,b)===!1)break}return s}}function vb(r,s,l){var f=s&k,g=Ms(r);function b(){var x=this&&this!==Tt&&this instanceof b?g:r;return x.apply(f?l:this,arguments)}return b}function gh(r){return function(s){s=Ge(s);var l=Ei(s)?Sn(s):n,f=l?l[0]:s.charAt(0),g=l?Rr(l,1).join(""):s.slice(1);return f[r]()+g}}function Mi(r){return function(s){return Ql(hp(fp(s).replace(a2,"")),r,"")}}function Ms(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Li(r.prototype),f=r.apply(l,s);return dt(f)?f:l}}function yb(r,s,l){var f=Ms(r);function g(){for(var b=arguments.length,x=j(b),S=b,O=Bi(g);S--;)x[S]=arguments[S];var D=b<3&&x[0]!==O&&x[b-1]!==O?[]:Sr(x,O);if(b-=D.length,b<l)return _h(r,s,ta,g.placeholder,n,x,D,n,n,l-b);var N=this&&this!==Tt&&this instanceof g?f:r;return Yt(N,this,x)}return g}function mh(r){return function(s,l,f){var g=et(s);if(!Kt(s)){var b=fe(l,3);s=St(s),l=function(S){return b(g[S],S,g)}}var x=r(s,l,f);return x>-1?g[b?s[x]:x]:n}}function vh(r){return ir(function(s){var l=s.length,f=l,g=mn.prototype.thru;for(r&&s.reverse();f--;){var b=s[f];if(typeof b!="function")throw new gn(c);if(g&&!x&&sa(b)=="wrapper")var x=new mn([],!0)}for(f=x?f:l;++f<l;){b=s[f];var S=sa(b),O=S=="wrapper"?Ic(b):n;O&&Pc(O[0])&&O[1]==(H|B|T|W)&&!O[4].length&&O[9]==1?x=x[sa(O[0])].apply(x,O[3]):x=b.length==1&&Pc(b)?x[S]():x.thru(b)}return function(){var D=arguments,N=D[0];if(x&&D.length==1&&xe(N))return x.plant(N).value();for(var F=0,Q=l?s[F].apply(this,D):N;++F<l;)Q=s[F].call(this,Q);return Q}})}function ta(r,s,l,f,g,b,x,S,O,D){var N=s&H,F=s&k,Q=s&C,ae=s&(B|R),pe=s&re,Ee=Q?n:Ms(r);function ge(){for(var Pe=arguments.length,Ue=j(Pe),nn=Pe;nn--;)Ue[nn]=arguments[nn];if(ae)var Ht=Bi(ge),rn=I2(Ue,Ht);if(f&&(Ue=dh(Ue,f,g,ae)),b&&(Ue=fh(Ue,b,x,ae)),Pe-=rn,ae&&Pe<D){var vt=Sr(Ue,Ht);return _h(r,s,ta,ge.placeholder,l,Ue,vt,S,O,D-Pe)}var An=F?l:this,lr=Q?An[r]:r;return Pe=Ue.length,S?Ue=Ub(Ue,S):pe&&Pe>1&&Ue.reverse(),N&&O<Pe&&(Ue.length=O),this&&this!==Tt&&this instanceof ge&&(lr=Ee||Ms(lr)),lr.apply(An,Ue)}return ge}function yh(r,s){return function(l,f){return qy(l,r,s(f),{})}}function na(r,s){return function(l,f){var g;if(l===n&&f===n)return s;if(l!==n&&(g=l),f!==n){if(g===n)return f;typeof l=="string"||typeof f=="string"?(l=en(l),f=en(f)):(l=rh(l),f=rh(f)),g=r(l,f)}return g}}function Sc(r){return ir(function(s){return s=ct(s,Jt(fe())),Ae(function(l){var f=this;return r(s,function(g){return Yt(g,f,l)})})})}function ra(r,s){s=s===n?" ":en(s);var l=s.length;if(l<2)return l?bc(s,r):s;var f=bc(s,Fo(r/Ti(s)));return Ei(s)?Rr(Sn(f),0,r).join(""):f.slice(0,r)}function bb(r,s,l,f){var g=s&k,b=Ms(r);function x(){for(var S=-1,O=arguments.length,D=-1,N=f.length,F=j(N+O),Q=this&&this!==Tt&&this instanceof x?b:r;++D<N;)F[D]=f[D];for(;O--;)F[D++]=arguments[++S];return Yt(Q,g?l:this,F)}return x}function bh(r){return function(s,l,f){return f&&typeof f!="number"&&Nt(s,l,f)&&(l=f=n),s=ar(s),l===n?(l=s,s=0):l=ar(l),f=f===n?s<l?1:-1:ar(f),ib(s,l,f,r)}}function ia(r){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=_n(s),l=_n(l)),r(s,l)}}function _h(r,s,l,f,g,b,x,S,O,D){var N=s&B,F=N?x:n,Q=N?n:x,ae=N?b:n,pe=N?n:b;s|=N?T:L,s&=~(N?L:T),s&M||(s&=~(k|C));var Ee=[r,s,g,ae,F,pe,Q,S,O,D],ge=l.apply(n,Ee);return Pc(r)&&Oh(ge,Ee),ge.placeholder=f,Lh(ge,r,s)}function Ec(r){var s=xt[r];return function(l,f){if(l=_n(l),f=f==null?0:Ot(Ce(f),292),f&&Lf(l)){var g=(Ge(l)+"e").split("e"),b=s(g[0]+"e"+(+g[1]+f));return g=(Ge(b)+"e").split("e"),+(g[0]+"e"+(+g[1]-f))}return s(l)}}var _b=Ri&&1/Lo(new Ri([,-0]))[1]==ve?function(r){return new Ri(r)}:Gc;function wh(r){return function(s){var l=Lt(s);return l==at?rc(s):l==ze?j2(s):A2(s,r(s))}}function rr(r,s,l,f,g,b,x,S){var O=s&C;if(!O&&typeof r!="function")throw new gn(c);var D=f?f.length:0;if(D||(s&=~(T|L),f=g=n),x=x===n?x:$t(Ce(x),0),S=S===n?S:Ce(S),D-=g?g.length:0,s&L){var N=f,F=g;f=g=n}var Q=O?n:Ic(r),ae=[r,s,l,f,g,N,F,b,x,S];if(Q&&Mb(ae,Q),r=ae[0],s=ae[1],l=ae[2],f=ae[3],g=ae[4],S=ae[9]=ae[9]===n?O?0:r.length:$t(ae[9]-D,0),!S&&s&(B|R)&&(s&=~(B|R)),!s||s==k)var pe=vb(r,s,l);else s==B||s==R?pe=yb(r,s,S):(s==T||s==(k|T))&&!g.length?pe=bb(r,s,l,f):pe=ta.apply(n,ae);var Ee=Q?th:Oh;return Lh(Ee(pe,ae),r,s)}function xh(r,s,l,f){return r===n||Tn(r,Ii[l])&&!Qe.call(f,l)?s:r}function $h(r,s,l,f,g,b){return dt(r)&&dt(s)&&(b.set(s,r),Xo(r,s,n,$h,b),b.delete(s)),r}function wb(r){return Us(r)?n:r}function kh(r,s,l,f,g,b){var x=l&$,S=r.length,O=s.length;if(S!=O&&!(x&&O>S))return!1;var D=b.get(r),N=b.get(s);if(D&&N)return D==s&&N==r;var F=-1,Q=!0,ae=l&E?new si:n;for(b.set(r,s),b.set(s,r);++F<S;){var pe=r[F],Ee=s[F];if(f)var ge=x?f(Ee,pe,F,s,r,b):f(pe,Ee,F,r,s,b);if(ge!==n){if(ge)continue;Q=!1;break}if(ae){if(!Xl(s,function(Pe,Ue){if(!ks(ae,Ue)&&(pe===Pe||g(pe,Pe,l,f,b)))return ae.push(Ue)})){Q=!1;break}}else if(!(pe===Ee||g(pe,Ee,l,f,b))){Q=!1;break}}return b.delete(r),b.delete(s),Q}function xb(r,s,l,f,g,b,x){switch(l){case rt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Le:return!(r.byteLength!=s.byteLength||!b(new Do(r),new Do(s)));case K:case se:case Wt:return Tn(+r,+s);case gt:return r.name==s.name&&r.message==s.message;case be:case lt:return r==s+"";case at:var S=rc;case ze:var O=f&$;if(S||(S=Lo),r.size!=s.size&&!O)return!1;var D=x.get(r);if(D)return D==s;f|=E,x.set(r,s);var N=kh(S(r),S(s),f,g,b,x);return x.delete(r),N;case Ct:if(As)return As.call(r)==As.call(s)}return!1}function $b(r,s,l,f,g,b){var x=l&$,S=Tc(r),O=S.length,D=Tc(s),N=D.length;if(O!=N&&!x)return!1;for(var F=O;F--;){var Q=S[F];if(!(x?Q in s:Qe.call(s,Q)))return!1}var ae=b.get(r),pe=b.get(s);if(ae&&pe)return ae==s&&pe==r;var Ee=!0;b.set(r,s),b.set(s,r);for(var ge=x;++F<O;){Q=S[F];var Pe=r[Q],Ue=s[Q];if(f)var nn=x?f(Ue,Pe,Q,s,r,b):f(Pe,Ue,Q,r,s,b);if(!(nn===n?Pe===Ue||g(Pe,Ue,l,f,b):nn)){Ee=!1;break}ge||(ge=Q=="constructor")}if(Ee&&!ge){var Ht=r.constructor,rn=s.constructor;Ht!=rn&&"constructor"in r&&"constructor"in s&&!(typeof Ht=="function"&&Ht instanceof Ht&&typeof rn=="function"&&rn instanceof rn)&&(Ee=!1)}return b.delete(r),b.delete(s),Ee}function ir(r){return Bc(Ih(r,n,Dh),r+"")}function Tc(r){return Wf(r,St,Oc)}function Ac(r){return Wf(r,Vt,Ch)}var Ic=Zo?function(r){return Zo.get(r)}:Gc;function sa(r){for(var s=r.name+"",l=Oi[s],f=Qe.call(Oi,s)?l.length:0;f--;){var g=l[f],b=g.func;if(b==null||b==r)return g.name}return s}function Bi(r){var s=Qe.call(y,"placeholder")?y:r;return s.placeholder}function fe(){var r=y.iteratee||Kc;return r=r===Kc?Kf:r,arguments.length?r(arguments[0],arguments[1]):r}function oa(r,s){var l=r.__data__;return Rb(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Rc(r){for(var s=St(r),l=s.length;l--;){var f=s[l],g=r[f];s[l]=[f,g,Th(g)]}return s}function li(r,s){var l=P2(r,s);return qf(l)?l:n}function kb(r){var s=Qe.call(r,ri),l=r[ri];try{r[ri]=n;var f=!0}catch{}var g=jo.call(r);return f&&(s?r[ri]=l:delete r[ri]),g}var Oc=sc?function(r){return r==null?[]:(r=et(r),kr(sc(r),function(s){return Rf.call(r,s)}))}:Qc,Ch=sc?function(r){for(var s=[];r;)Cr(s,Oc(r)),r=No(r);return s}:Qc,Lt=Dt;(oc&&Lt(new oc(new ArrayBuffer(1)))!=rt||Ss&&Lt(new Ss)!=at||ac&&Lt(ac.resolve())!=Ut||Ri&&Lt(new Ri)!=ze||Es&&Lt(new Es)!=ue)&&(Lt=function(r){var s=Dt(r),l=s==ht?r.constructor:n,f=l?ci(l):"";if(f)switch(f){case oy:return rt;case ay:return at;case ly:return Ut;case cy:return ze;case uy:return ue}return s});function Cb(r,s,l){for(var f=-1,g=l.length;++f<g;){var b=l[f],x=b.size;switch(b.type){case"drop":r+=x;break;case"dropRight":s-=x;break;case"take":s=Ot(s,r+x);break;case"takeRight":r=$t(r,s-x);break}}return{start:r,end:s}}function Sb(r){var s=r.match(Ov);return s?s[1].split(Lv):[]}function Sh(r,s,l){s=Ir(s,r);for(var f=-1,g=s.length,b=!1;++f<g;){var x=Fn(s[f]);if(!(b=r!=null&&l(r,x)))break;r=r[x]}return b||++f!=g?b:(g=r==null?0:r.length,!!g&&ha(g)&&sr(x,g)&&(xe(r)||ui(r)))}function Eb(r){var s=r.length,l=new r.constructor(s);return s&&typeof r[0]=="string"&&Qe.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function Eh(r){return typeof r.constructor=="function"&&!Bs(r)?Li(No(r)):{}}function Tb(r,s,l){var f=r.constructor;switch(s){case Le:return Cc(r);case K:case se:return new f(+r);case rt:return db(r,l);case Zt:case Cn:case fn:case $r:case xi:case $i:case ki:case Ul:case Dl:return ch(r,l);case at:return new f;case Wt:case lt:return new f(r);case be:return fb(r);case ze:return new f;case Ct:return hb(r)}}function Ab(r,s){var l=s.length;if(!l)return r;var f=l-1;return s[f]=(l>1?"& ":"")+s[f],s=s.join(l>2?", ":" "),r.replace(Rv,`{
/* [wrapped with `+s+`] */
`)}function Ib(r){return xe(r)||ui(r)||!!(Of&&r&&r[Of])}function sr(r,s){var l=typeof r;return s=s??ke,!!s&&(l=="number"||l!="symbol"&&zv.test(r))&&r>-1&&r%1==0&&r<s}function Nt(r,s,l){if(!dt(l))return!1;var f=typeof s;return(f=="number"?Kt(l)&&sr(s,l.length):f=="string"&&s in l)?Tn(l[s],r):!1}function Lc(r,s){if(xe(r))return!1;var l=typeof r;return l=="number"||l=="symbol"||l=="boolean"||r==null||tn(r)?!0:Ev.test(r)||!Sv.test(r)||s!=null&&r in et(s)}function Rb(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Pc(r){var s=sa(r),l=y[s];if(typeof l!="function"||!(s in je.prototype))return!1;if(r===l)return!0;var f=Ic(l);return!!f&&r===f[0]}function Ob(r){return!!Tf&&Tf in r}var Lb=Mo?or:Xc;function Bs(r){var s=r&&r.constructor,l=typeof s=="function"&&s.prototype||Ii;return r===l}function Th(r){return r===r&&!dt(r)}function Ah(r,s){return function(l){return l==null?!1:l[r]===s&&(s!==n||r in et(l))}}function Pb(r){var s=da(r,function(f){return l.size===p&&l.clear(),f}),l=s.cache;return s}function Mb(r,s){var l=r[1],f=s[1],g=l|f,b=g<(k|C|H),x=f==H&&l==B||f==H&&l==W&&r[7].length<=s[8]||f==(H|W)&&s[7].length<=s[8]&&l==B;if(!(b||x))return r;f&k&&(r[2]=s[2],g|=l&k?0:M);var S=s[3];if(S){var O=r[3];r[3]=O?dh(O,S,s[4]):S,r[4]=O?Sr(r[3],h):s[4]}return S=s[5],S&&(O=r[5],r[5]=O?fh(O,S,s[6]):S,r[6]=O?Sr(r[5],h):s[6]),S=s[7],S&&(r[7]=S),f&H&&(r[8]=r[8]==null?s[8]:Ot(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=g,r}function Bb(r){var s=[];if(r!=null)for(var l in et(r))s.push(l);return s}function jb(r){return jo.call(r)}function Ih(r,s,l){return s=$t(s===n?r.length-1:s,0),function(){for(var f=arguments,g=-1,b=$t(f.length-s,0),x=j(b);++g<b;)x[g]=f[s+g];g=-1;for(var S=j(s+1);++g<s;)S[g]=f[g];return S[s]=l(x),Yt(r,this,S)}}function Rh(r,s){return s.length<2?r:ai(r,yn(s,0,-1))}function Ub(r,s){for(var l=r.length,f=Ot(s.length,l),g=qt(r);f--;){var b=s[f];r[f]=sr(b,l)?g[b]:n}return r}function Mc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Oh=Ph(th),js=J2||function(r,s){return Tt.setTimeout(r,s)},Bc=Ph(ab);function Lh(r,s,l){var f=s+"";return Bc(r,Ab(f,Db(Sb(f),l)))}function Ph(r){var s=0,l=0;return function(){var f=ry(),g=X-(f-l);if(l=f,g>0){if(++s>=Z)return arguments[0]}else s=0;return r.apply(n,arguments)}}function aa(r,s){var l=-1,f=r.length,g=f-1;for(s=s===n?f:s;++l<s;){var b=yc(l,g),x=r[b];r[b]=r[l],r[l]=x}return r.length=s,r}var Mh=Pb(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Tv,function(l,f,g,b){s.push(g?b.replace(Bv,"$1"):f||l)}),s});function Fn(r){if(typeof r=="string"||tn(r))return r;var s=r+"";return s=="0"&&1/r==-ve?"-0":s}function ci(r){if(r!=null){try{return Bo.call(r)}catch{}try{return r+""}catch{}}return""}function Db(r,s){return pn(kt,function(l){var f="_."+l[0];s&l[1]&&!Ro(r,f)&&r.push(f)}),r.sort()}function Bh(r){if(r instanceof je)return r.clone();var s=new mn(r.__wrapped__,r.__chain__);return s.__actions__=qt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function Nb(r,s,l){(l?Nt(r,s,l):s===n)?s=1:s=$t(Ce(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var g=0,b=0,x=j(Fo(f/s));g<f;)x[b++]=yn(r,g,g+=s);return x}function Hb(r){for(var s=-1,l=r==null?0:r.length,f=0,g=[];++s<l;){var b=r[s];b&&(g[f++]=b)}return g}function zb(){var r=arguments.length;if(!r)return[];for(var s=j(r-1),l=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Cr(xe(l)?qt(l):[l],At(s,1))}var Fb=Ae(function(r,s){return mt(r)?Rs(r,At(s,1,mt,!0)):[]}),Wb=Ae(function(r,s){var l=bn(s);return mt(l)&&(l=n),mt(r)?Rs(r,At(s,1,mt,!0),fe(l,2)):[]}),Zb=Ae(function(r,s){var l=bn(s);return mt(l)&&(l=n),mt(r)?Rs(r,At(s,1,mt,!0),n,l):[]});function qb(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),yn(r,s<0?0:s,f)):[]}function Kb(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),s=f-s,yn(r,0,s<0?0:s)):[]}function Vb(r,s){return r&&r.length?Jo(r,fe(s,3),!0,!0):[]}function Gb(r,s){return r&&r.length?Jo(r,fe(s,3),!0):[]}function Qb(r,s,l,f){var g=r==null?0:r.length;return g?(l&&typeof l!="number"&&Nt(r,s,l)&&(l=0,f=g),zy(r,s,l,f)):[]}function jh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=l==null?0:Ce(l);return g<0&&(g=$t(f+g,0)),Oo(r,fe(s,3),g)}function Uh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=f-1;return l!==n&&(g=Ce(l),g=l<0?$t(f+g,0):Ot(g,f-1)),Oo(r,fe(s,3),g,!0)}function Dh(r){var s=r==null?0:r.length;return s?At(r,1):[]}function Xb(r){var s=r==null?0:r.length;return s?At(r,ve):[]}function Yb(r,s){var l=r==null?0:r.length;return l?(s=s===n?1:Ce(s),At(r,s)):[]}function Jb(r){for(var s=-1,l=r==null?0:r.length,f={};++s<l;){var g=r[s];f[g[0]]=g[1]}return f}function Nh(r){return r&&r.length?r[0]:n}function e_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=l==null?0:Ce(l);return g<0&&(g=$t(f+g,0)),Si(r,s,g)}function t_(r){var s=r==null?0:r.length;return s?yn(r,0,-1):[]}var n_=Ae(function(r){var s=ct(r,$c);return s.length&&s[0]===r[0]?hc(s):[]}),r_=Ae(function(r){var s=bn(r),l=ct(r,$c);return s===bn(l)?s=n:l.pop(),l.length&&l[0]===r[0]?hc(l,fe(s,2)):[]}),i_=Ae(function(r){var s=bn(r),l=ct(r,$c);return s=typeof s=="function"?s:n,s&&l.pop(),l.length&&l[0]===r[0]?hc(l,n,s):[]});function s_(r,s){return r==null?"":ty.call(r,s)}function bn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function o_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=f;return l!==n&&(g=Ce(l),g=g<0?$t(f+g,0):Ot(g,f-1)),s===s?D2(r,s,g):Oo(r,_f,g,!0)}function a_(r,s){return r&&r.length?Xf(r,Ce(s)):n}var l_=Ae(Hh);function Hh(r,s){return r&&r.length&&s&&s.length?vc(r,s):r}function c_(r,s,l){return r&&r.length&&s&&s.length?vc(r,s,fe(l,2)):r}function u_(r,s,l){return r&&r.length&&s&&s.length?vc(r,s,n,l):r}var d_=ir(function(r,s){var l=r==null?0:r.length,f=cc(r,s);return eh(r,ct(s,function(g){return sr(g,l)?+g:g}).sort(uh)),f});function f_(r,s){var l=[];if(!(r&&r.length))return l;var f=-1,g=[],b=r.length;for(s=fe(s,3);++f<b;){var x=r[f];s(x,f,r)&&(l.push(x),g.push(f))}return eh(r,g),l}function jc(r){return r==null?r:sy.call(r)}function h_(r,s,l){var f=r==null?0:r.length;return f?(l&&typeof l!="number"&&Nt(r,s,l)?(s=0,l=f):(s=s==null?0:Ce(s),l=l===n?f:Ce(l)),yn(r,s,l)):[]}function p_(r,s){return Yo(r,s)}function g_(r,s,l){return _c(r,s,fe(l,2))}function m_(r,s){var l=r==null?0:r.length;if(l){var f=Yo(r,s);if(f<l&&Tn(r[f],s))return f}return-1}function v_(r,s){return Yo(r,s,!0)}function y_(r,s,l){return _c(r,s,fe(l,2),!0)}function b_(r,s){var l=r==null?0:r.length;if(l){var f=Yo(r,s,!0)-1;if(Tn(r[f],s))return f}return-1}function __(r){return r&&r.length?nh(r):[]}function w_(r,s){return r&&r.length?nh(r,fe(s,2)):[]}function x_(r){var s=r==null?0:r.length;return s?yn(r,1,s):[]}function $_(r,s,l){return r&&r.length?(s=l||s===n?1:Ce(s),yn(r,0,s<0?0:s)):[]}function k_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),s=f-s,yn(r,s<0?0:s,f)):[]}function C_(r,s){return r&&r.length?Jo(r,fe(s,3),!1,!0):[]}function S_(r,s){return r&&r.length?Jo(r,fe(s,3)):[]}var E_=Ae(function(r){return Ar(At(r,1,mt,!0))}),T_=Ae(function(r){var s=bn(r);return mt(s)&&(s=n),Ar(At(r,1,mt,!0),fe(s,2))}),A_=Ae(function(r){var s=bn(r);return s=typeof s=="function"?s:n,Ar(At(r,1,mt,!0),n,s)});function I_(r){return r&&r.length?Ar(r):[]}function R_(r,s){return r&&r.length?Ar(r,fe(s,2)):[]}function O_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Ar(r,n,s):[]}function Uc(r){if(!(r&&r.length))return[];var s=0;return r=kr(r,function(l){if(mt(l))return s=$t(l.length,s),!0}),tc(s,function(l){return ct(r,Yl(l))})}function zh(r,s){if(!(r&&r.length))return[];var l=Uc(r);return s==null?l:ct(l,function(f){return Yt(s,n,f)})}var L_=Ae(function(r,s){return mt(r)?Rs(r,s):[]}),P_=Ae(function(r){return xc(kr(r,mt))}),M_=Ae(function(r){var s=bn(r);return mt(s)&&(s=n),xc(kr(r,mt),fe(s,2))}),B_=Ae(function(r){var s=bn(r);return s=typeof s=="function"?s:n,xc(kr(r,mt),n,s)}),j_=Ae(Uc);function U_(r,s){return oh(r||[],s||[],Is)}function D_(r,s){return oh(r||[],s||[],Ps)}var N_=Ae(function(r){var s=r.length,l=s>1?r[s-1]:n;return l=typeof l=="function"?(r.pop(),l):n,zh(r,l)});function Fh(r){var s=y(r);return s.__chain__=!0,s}function H_(r,s){return s(r),r}function la(r,s){return s(r)}var z_=ir(function(r){var s=r.length,l=s?r[0]:0,f=this.__wrapped__,g=function(b){return cc(b,r)};return s>1||this.__actions__.length||!(f instanceof je)||!sr(l)?this.thru(g):(f=f.slice(l,+l+(s?1:0)),f.__actions__.push({func:la,args:[g],thisArg:n}),new mn(f,this.__chain__).thru(function(b){return s&&!b.length&&b.push(n),b}))});function F_(){return Fh(this)}function W_(){return new mn(this.value(),this.__chain__)}function Z_(){this.__values__===n&&(this.__values__=rp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function q_(){return this}function K_(r){for(var s,l=this;l instanceof Ko;){var f=Bh(l);f.__index__=0,f.__values__=n,s?g.__wrapped__=f:s=f;var g=f;l=l.__wrapped__}return g.__wrapped__=r,s}function V_(){var r=this.__wrapped__;if(r instanceof je){var s=r;return this.__actions__.length&&(s=new je(this)),s=s.reverse(),s.__actions__.push({func:la,args:[jc],thisArg:n}),new mn(s,this.__chain__)}return this.thru(jc)}function G_(){return sh(this.__wrapped__,this.__actions__)}var Q_=ea(function(r,s,l){Qe.call(r,l)?++r[l]:nr(r,l,1)});function X_(r,s,l){var f=xe(r)?yf:Hy;return l&&Nt(r,s,l)&&(s=n),f(r,fe(s,3))}function Y_(r,s){var l=xe(r)?kr:zf;return l(r,fe(s,3))}var J_=mh(jh),ew=mh(Uh);function tw(r,s){return At(ca(r,s),1)}function nw(r,s){return At(ca(r,s),ve)}function rw(r,s,l){return l=l===n?1:Ce(l),At(ca(r,s),l)}function Wh(r,s){var l=xe(r)?pn:Tr;return l(r,fe(s,3))}function Zh(r,s){var l=xe(r)?x2:Hf;return l(r,fe(s,3))}var iw=ea(function(r,s,l){Qe.call(r,l)?r[l].push(s):nr(r,l,[s])});function sw(r,s,l,f){r=Kt(r)?r:Ui(r),l=l&&!f?Ce(l):0;var g=r.length;return l<0&&(l=$t(g+l,0)),pa(r)?l<=g&&r.indexOf(s,l)>-1:!!g&&Si(r,s,l)>-1}var ow=Ae(function(r,s,l){var f=-1,g=typeof s=="function",b=Kt(r)?j(r.length):[];return Tr(r,function(x){b[++f]=g?Yt(s,x,l):Os(x,s,l)}),b}),aw=ea(function(r,s,l){nr(r,l,s)});function ca(r,s){var l=xe(r)?ct:Vf;return l(r,fe(s,3))}function lw(r,s,l,f){return r==null?[]:(xe(s)||(s=s==null?[]:[s]),l=f?n:l,xe(l)||(l=l==null?[]:[l]),Yf(r,s,l))}var cw=ea(function(r,s,l){r[l?0:1].push(s)},function(){return[[],[]]});function uw(r,s,l){var f=xe(r)?Ql:xf,g=arguments.length<3;return f(r,fe(s,4),l,g,Tr)}function dw(r,s,l){var f=xe(r)?$2:xf,g=arguments.length<3;return f(r,fe(s,4),l,g,Hf)}function fw(r,s){var l=xe(r)?kr:zf;return l(r,fa(fe(s,3)))}function hw(r){var s=xe(r)?jf:sb;return s(r)}function pw(r,s,l){(l?Nt(r,s,l):s===n)?s=1:s=Ce(s);var f=xe(r)?By:ob;return f(r,s)}function gw(r){var s=xe(r)?jy:lb;return s(r)}function mw(r){if(r==null)return 0;if(Kt(r))return pa(r)?Ti(r):r.length;var s=Lt(r);return s==at||s==ze?r.size:gc(r).length}function vw(r,s,l){var f=xe(r)?Xl:cb;return l&&Nt(r,s,l)&&(s=n),f(r,fe(s,3))}var yw=Ae(function(r,s){if(r==null)return[];var l=s.length;return l>1&&Nt(r,s[0],s[1])?s=[]:l>2&&Nt(s[0],s[1],s[2])&&(s=[s[0]]),Yf(r,At(s,1),[])}),ua=Y2||function(){return Tt.Date.now()};function bw(r,s){if(typeof s!="function")throw new gn(c);return r=Ce(r),function(){if(--r<1)return s.apply(this,arguments)}}function qh(r,s,l){return s=l?n:s,s=r&&s==null?r.length:s,rr(r,H,n,n,n,n,s)}function Kh(r,s){var l;if(typeof s!="function")throw new gn(c);return r=Ce(r),function(){return--r>0&&(l=s.apply(this,arguments)),r<=1&&(s=n),l}}var Dc=Ae(function(r,s,l){var f=k;if(l.length){var g=Sr(l,Bi(Dc));f|=T}return rr(r,f,s,l,g)}),Vh=Ae(function(r,s,l){var f=k|C;if(l.length){var g=Sr(l,Bi(Vh));f|=T}return rr(s,f,r,l,g)});function Gh(r,s,l){s=l?n:s;var f=rr(r,B,n,n,n,n,n,s);return f.placeholder=Gh.placeholder,f}function Qh(r,s,l){s=l?n:s;var f=rr(r,R,n,n,n,n,n,s);return f.placeholder=Qh.placeholder,f}function Xh(r,s,l){var f,g,b,x,S,O,D=0,N=!1,F=!1,Q=!0;if(typeof r!="function")throw new gn(c);s=_n(s)||0,dt(l)&&(N=!!l.leading,F="maxWait"in l,b=F?$t(_n(l.maxWait)||0,s):b,Q="trailing"in l?!!l.trailing:Q);function ae(vt){var An=f,lr=g;return f=g=n,D=vt,x=r.apply(lr,An),x}function pe(vt){return D=vt,S=js(Pe,s),N?ae(vt):x}function Ee(vt){var An=vt-O,lr=vt-D,mp=s-An;return F?Ot(mp,b-lr):mp}function ge(vt){var An=vt-O,lr=vt-D;return O===n||An>=s||An<0||F&&lr>=b}function Pe(){var vt=ua();if(ge(vt))return Ue(vt);S=js(Pe,Ee(vt))}function Ue(vt){return S=n,Q&&f?ae(vt):(f=g=n,x)}function nn(){S!==n&&ah(S),D=0,f=O=g=S=n}function Ht(){return S===n?x:Ue(ua())}function rn(){var vt=ua(),An=ge(vt);if(f=arguments,g=this,O=vt,An){if(S===n)return pe(O);if(F)return ah(S),S=js(Pe,s),ae(O)}return S===n&&(S=js(Pe,s)),x}return rn.cancel=nn,rn.flush=Ht,rn}var _w=Ae(function(r,s){return Nf(r,1,s)}),ww=Ae(function(r,s,l){return Nf(r,_n(s)||0,l)});function xw(r){return rr(r,re)}function da(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new gn(c);var l=function(){var f=arguments,g=s?s.apply(this,f):f[0],b=l.cache;if(b.has(g))return b.get(g);var x=r.apply(this,f);return l.cache=b.set(g,x)||b,x};return l.cache=new(da.Cache||tr),l}da.Cache=tr;function fa(r){if(typeof r!="function")throw new gn(c);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function $w(r){return Kh(2,r)}var kw=ub(function(r,s){s=s.length==1&&xe(s[0])?ct(s[0],Jt(fe())):ct(At(s,1),Jt(fe()));var l=s.length;return Ae(function(f){for(var g=-1,b=Ot(f.length,l);++g<b;)f[g]=s[g].call(this,f[g]);return Yt(r,this,f)})}),Nc=Ae(function(r,s){var l=Sr(s,Bi(Nc));return rr(r,T,n,s,l)}),Yh=Ae(function(r,s){var l=Sr(s,Bi(Yh));return rr(r,L,n,s,l)}),Cw=ir(function(r,s){return rr(r,W,n,n,n,s)});function Sw(r,s){if(typeof r!="function")throw new gn(c);return s=s===n?s:Ce(s),Ae(r,s)}function Ew(r,s){if(typeof r!="function")throw new gn(c);return s=s==null?0:$t(Ce(s),0),Ae(function(l){var f=l[s],g=Rr(l,0,s);return f&&Cr(g,f),Yt(r,this,g)})}function Tw(r,s,l){var f=!0,g=!0;if(typeof r!="function")throw new gn(c);return dt(l)&&(f="leading"in l?!!l.leading:f,g="trailing"in l?!!l.trailing:g),Xh(r,s,{leading:f,maxWait:s,trailing:g})}function Aw(r){return qh(r,1)}function Iw(r,s){return Nc(kc(s),r)}function Rw(){if(!arguments.length)return[];var r=arguments[0];return xe(r)?r:[r]}function Ow(r){return vn(r,w)}function Lw(r,s){return s=typeof s=="function"?s:n,vn(r,w,s)}function Pw(r){return vn(r,m|w)}function Mw(r,s){return s=typeof s=="function"?s:n,vn(r,m|w,s)}function Bw(r,s){return s==null||Df(r,s,St(s))}function Tn(r,s){return r===s||r!==r&&s!==s}var jw=ia(fc),Uw=ia(function(r,s){return r>=s}),ui=Zf(function(){return arguments}())?Zf:function(r){return pt(r)&&Qe.call(r,"callee")&&!Rf.call(r,"callee")},xe=j.isArray,Dw=ff?Jt(ff):Ky;function Kt(r){return r!=null&&ha(r.length)&&!or(r)}function mt(r){return pt(r)&&Kt(r)}function Nw(r){return r===!0||r===!1||pt(r)&&Dt(r)==K}var Or=ey||Xc,Hw=hf?Jt(hf):Vy;function zw(r){return pt(r)&&r.nodeType===1&&!Us(r)}function Fw(r){if(r==null)return!0;if(Kt(r)&&(xe(r)||typeof r=="string"||typeof r.splice=="function"||Or(r)||ji(r)||ui(r)))return!r.length;var s=Lt(r);if(s==at||s==ze)return!r.size;if(Bs(r))return!gc(r).length;for(var l in r)if(Qe.call(r,l))return!1;return!0}function Ww(r,s){return Ls(r,s)}function Zw(r,s,l){l=typeof l=="function"?l:n;var f=l?l(r,s):n;return f===n?Ls(r,s,n,l):!!f}function Hc(r){if(!pt(r))return!1;var s=Dt(r);return s==gt||s==_t||typeof r.message=="string"&&typeof r.name=="string"&&!Us(r)}function qw(r){return typeof r=="number"&&Lf(r)}function or(r){if(!dt(r))return!1;var s=Dt(r);return s==Rt||s==Nn||s==un||s==Jn}function Jh(r){return typeof r=="number"&&r==Ce(r)}function ha(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ke}function dt(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function pt(r){return r!=null&&typeof r=="object"}var ep=pf?Jt(pf):Qy;function Kw(r,s){return r===s||pc(r,s,Rc(s))}function Vw(r,s,l){return l=typeof l=="function"?l:n,pc(r,s,Rc(s),l)}function Gw(r){return tp(r)&&r!=+r}function Qw(r){if(Lb(r))throw new _e(a);return qf(r)}function Xw(r){return r===null}function Yw(r){return r==null}function tp(r){return typeof r=="number"||pt(r)&&Dt(r)==Wt}function Us(r){if(!pt(r)||Dt(r)!=ht)return!1;var s=No(r);if(s===null)return!0;var l=Qe.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Bo.call(l)==V2}var zc=gf?Jt(gf):Xy;function Jw(r){return Jh(r)&&r>=-ke&&r<=ke}var np=mf?Jt(mf):Yy;function pa(r){return typeof r=="string"||!xe(r)&&pt(r)&&Dt(r)==lt}function tn(r){return typeof r=="symbol"||pt(r)&&Dt(r)==Ct}var ji=vf?Jt(vf):Jy;function e3(r){return r===n}function t3(r){return pt(r)&&Lt(r)==ue}function n3(r){return pt(r)&&Dt(r)==dn}var r3=ia(mc),i3=ia(function(r,s){return r<=s});function rp(r){if(!r)return[];if(Kt(r))return pa(r)?Sn(r):qt(r);if(Cs&&r[Cs])return B2(r[Cs]());var s=Lt(r),l=s==at?rc:s==ze?Lo:Ui;return l(r)}function ar(r){if(!r)return r===0?r:0;if(r=_n(r),r===ve||r===-ve){var s=r<0?-1:1;return s*ce}return r===r?r:0}function Ce(r){var s=ar(r),l=s%1;return s===s?l?s-l:s:0}function ip(r){return r?oi(Ce(r),0,G):0}function _n(r){if(typeof r=="number")return r;if(tn(r))return ye;if(dt(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=dt(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=$f(r);var l=Dv.test(r);return l||Hv.test(r)?b2(r.slice(2),l?2:8):Uv.test(r)?ye:+r}function sp(r){return zn(r,Vt(r))}function s3(r){return r?oi(Ce(r),-ke,ke):r===0?r:0}function Ge(r){return r==null?"":en(r)}var o3=Pi(function(r,s){if(Bs(s)||Kt(s)){zn(s,St(s),r);return}for(var l in s)Qe.call(s,l)&&Is(r,l,s[l])}),op=Pi(function(r,s){zn(s,Vt(s),r)}),ga=Pi(function(r,s,l,f){zn(s,Vt(s),r,f)}),a3=Pi(function(r,s,l,f){zn(s,St(s),r,f)}),l3=ir(cc);function c3(r,s){var l=Li(r);return s==null?l:Uf(l,s)}var u3=Ae(function(r,s){r=et(r);var l=-1,f=s.length,g=f>2?s[2]:n;for(g&&Nt(s[0],s[1],g)&&(f=1);++l<f;)for(var b=s[l],x=Vt(b),S=-1,O=x.length;++S<O;){var D=x[S],N=r[D];(N===n||Tn(N,Ii[D])&&!Qe.call(r,D))&&(r[D]=b[D])}return r}),d3=Ae(function(r){return r.push(n,$h),Yt(ap,n,r)});function f3(r,s){return bf(r,fe(s,3),Hn)}function h3(r,s){return bf(r,fe(s,3),dc)}function p3(r,s){return r==null?r:uc(r,fe(s,3),Vt)}function g3(r,s){return r==null?r:Ff(r,fe(s,3),Vt)}function m3(r,s){return r&&Hn(r,fe(s,3))}function v3(r,s){return r&&dc(r,fe(s,3))}function y3(r){return r==null?[]:Qo(r,St(r))}function b3(r){return r==null?[]:Qo(r,Vt(r))}function Fc(r,s,l){var f=r==null?n:ai(r,s);return f===n?l:f}function _3(r,s){return r!=null&&Sh(r,s,Fy)}function Wc(r,s){return r!=null&&Sh(r,s,Wy)}var w3=yh(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=jo.call(s)),r[s]=l},qc(Gt)),x3=yh(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=jo.call(s)),Qe.call(r,s)?r[s].push(l):r[s]=[l]},fe),$3=Ae(Os);function St(r){return Kt(r)?Bf(r):gc(r)}function Vt(r){return Kt(r)?Bf(r,!0):eb(r)}function k3(r,s){var l={};return s=fe(s,3),Hn(r,function(f,g,b){nr(l,s(f,g,b),f)}),l}function C3(r,s){var l={};return s=fe(s,3),Hn(r,function(f,g,b){nr(l,g,s(f,g,b))}),l}var S3=Pi(function(r,s,l){Xo(r,s,l)}),ap=Pi(function(r,s,l,f){Xo(r,s,l,f)}),E3=ir(function(r,s){var l={};if(r==null)return l;var f=!1;s=ct(s,function(b){return b=Ir(b,r),f||(f=b.length>1),b}),zn(r,Ac(r),l),f&&(l=vn(l,m|v|w,wb));for(var g=s.length;g--;)wc(l,s[g]);return l});function T3(r,s){return lp(r,fa(fe(s)))}var A3=ir(function(r,s){return r==null?{}:nb(r,s)});function lp(r,s){if(r==null)return{};var l=ct(Ac(r),function(f){return[f]});return s=fe(s),Jf(r,l,function(f,g){return s(f,g[0])})}function I3(r,s,l){s=Ir(s,r);var f=-1,g=s.length;for(g||(g=1,r=n);++f<g;){var b=r==null?n:r[Fn(s[f])];b===n&&(f=g,b=l),r=or(b)?b.call(r):b}return r}function R3(r,s,l){return r==null?r:Ps(r,s,l)}function O3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:Ps(r,s,l,f)}var cp=wh(St),up=wh(Vt);function L3(r,s,l){var f=xe(r),g=f||Or(r)||ji(r);if(s=fe(s,4),l==null){var b=r&&r.constructor;g?l=f?new b:[]:dt(r)?l=or(b)?Li(No(r)):{}:l={}}return(g?pn:Hn)(r,function(x,S,O){return s(l,x,S,O)}),l}function P3(r,s){return r==null?!0:wc(r,s)}function M3(r,s,l){return r==null?r:ih(r,s,kc(l))}function B3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:ih(r,s,kc(l),f)}function Ui(r){return r==null?[]:nc(r,St(r))}function j3(r){return r==null?[]:nc(r,Vt(r))}function U3(r,s,l){return l===n&&(l=s,s=n),l!==n&&(l=_n(l),l=l===l?l:0),s!==n&&(s=_n(s),s=s===s?s:0),oi(_n(r),s,l)}function D3(r,s,l){return s=ar(s),l===n?(l=s,s=0):l=ar(l),r=_n(r),Zy(r,s,l)}function N3(r,s,l){if(l&&typeof l!="boolean"&&Nt(r,s,l)&&(s=l=n),l===n&&(typeof s=="boolean"?(l=s,s=n):typeof r=="boolean"&&(l=r,r=n)),r===n&&s===n?(r=0,s=1):(r=ar(r),s===n?(s=r,r=0):s=ar(s)),r>s){var f=r;r=s,s=f}if(l||r%1||s%1){var g=Pf();return Ot(r+g*(s-r+y2("1e-"+((g+"").length-1))),s)}return yc(r,s)}var H3=Mi(function(r,s,l){return s=s.toLowerCase(),r+(l?dp(s):s)});function dp(r){return Zc(Ge(r).toLowerCase())}function fp(r){return r=Ge(r),r&&r.replace(Fv,R2).replace(l2,"")}function z3(r,s,l){r=Ge(r),s=en(s);var f=r.length;l=l===n?f:oi(Ce(l),0,f);var g=l;return l-=s.length,l>=0&&r.slice(l,g)==s}function F3(r){return r=Ge(r),r&&$v.test(r)?r.replace(zd,O2):r}function W3(r){return r=Ge(r),r&&Av.test(r)?r.replace(Nl,"\\$&"):r}var Z3=Mi(function(r,s,l){return r+(l?"-":"")+s.toLowerCase()}),q3=Mi(function(r,s,l){return r+(l?" ":"")+s.toLowerCase()}),K3=gh("toLowerCase");function V3(r,s,l){r=Ge(r),s=Ce(s);var f=s?Ti(r):0;if(!s||f>=s)return r;var g=(s-f)/2;return ra(Wo(g),l)+r+ra(Fo(g),l)}function G3(r,s,l){r=Ge(r),s=Ce(s);var f=s?Ti(r):0;return s&&f<s?r+ra(s-f,l):r}function Q3(r,s,l){r=Ge(r),s=Ce(s);var f=s?Ti(r):0;return s&&f<s?ra(s-f,l)+r:r}function X3(r,s,l){return l||s==null?s=0:s&&(s=+s),iy(Ge(r).replace(Hl,""),s||0)}function Y3(r,s,l){return(l?Nt(r,s,l):s===n)?s=1:s=Ce(s),bc(Ge(r),s)}function J3(){var r=arguments,s=Ge(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var ex=Mi(function(r,s,l){return r+(l?"_":"")+s.toLowerCase()});function tx(r,s,l){return l&&typeof l!="number"&&Nt(r,s,l)&&(s=l=n),l=l===n?G:l>>>0,l?(r=Ge(r),r&&(typeof s=="string"||s!=null&&!zc(s))&&(s=en(s),!s&&Ei(r))?Rr(Sn(r),0,l):r.split(s,l)):[]}var nx=Mi(function(r,s,l){return r+(l?" ":"")+Zc(s)});function rx(r,s,l){return r=Ge(r),l=l==null?0:oi(Ce(l),0,r.length),s=en(s),r.slice(l,l+s.length)==s}function ix(r,s,l){var f=y.templateSettings;l&&Nt(r,s,l)&&(s=n),r=Ge(r),s=ga({},s,f,xh);var g=ga({},s.imports,f.imports,xh),b=St(g),x=nc(g,b),S,O,D=0,N=s.interpolate||To,F="__p += '",Q=ic((s.escape||To).source+"|"+N.source+"|"+(N===Fd?jv:To).source+"|"+(s.evaluate||To).source+"|$","g"),ae="//# sourceURL="+(Qe.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++h2+"]")+`
`;r.replace(Q,function(ge,Pe,Ue,nn,Ht,rn){return Ue||(Ue=nn),F+=r.slice(D,rn).replace(Wv,L2),Pe&&(S=!0,F+=`' +
__e(`+Pe+`) +
'`),Ht&&(O=!0,F+=`';
`+Ht+`;
__p += '`),Ue&&(F+=`' +
((__t = (`+Ue+`)) == null ? '' : __t) +
'`),D=rn+ge.length,ge}),F+=`';
`;var pe=Qe.call(s,"variable")&&s.variable;if(!pe)F=`with (obj) {
`+F+`
}
`;else if(Mv.test(pe))throw new _e(u);F=(O?F.replace(bv,""):F).replace(_v,"$1").replace(wv,"$1;"),F="function("+(pe||"obj")+`) {
`+(pe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(S?", __e = _.escape":"")+(O?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+F+`return __p
}`;var Ee=pp(function(){return qe(b,ae+"return "+F).apply(n,x)});if(Ee.source=F,Hc(Ee))throw Ee;return Ee}function sx(r){return Ge(r).toLowerCase()}function ox(r){return Ge(r).toUpperCase()}function ax(r,s,l){if(r=Ge(r),r&&(l||s===n))return $f(r);if(!r||!(s=en(s)))return r;var f=Sn(r),g=Sn(s),b=kf(f,g),x=Cf(f,g)+1;return Rr(f,b,x).join("")}function lx(r,s,l){if(r=Ge(r),r&&(l||s===n))return r.slice(0,Ef(r)+1);if(!r||!(s=en(s)))return r;var f=Sn(r),g=Cf(f,Sn(s))+1;return Rr(f,0,g).join("")}function cx(r,s,l){if(r=Ge(r),r&&(l||s===n))return r.replace(Hl,"");if(!r||!(s=en(s)))return r;var f=Sn(r),g=kf(f,Sn(s));return Rr(f,g).join("")}function ux(r,s){var l=V,f=ie;if(dt(s)){var g="separator"in s?s.separator:g;l="length"in s?Ce(s.length):l,f="omission"in s?en(s.omission):f}r=Ge(r);var b=r.length;if(Ei(r)){var x=Sn(r);b=x.length}if(l>=b)return r;var S=l-Ti(f);if(S<1)return f;var O=x?Rr(x,0,S).join(""):r.slice(0,S);if(g===n)return O+f;if(x&&(S+=O.length-S),zc(g)){if(r.slice(S).search(g)){var D,N=O;for(g.global||(g=ic(g.source,Ge(Wd.exec(g))+"g")),g.lastIndex=0;D=g.exec(N);)var F=D.index;O=O.slice(0,F===n?S:F)}}else if(r.indexOf(en(g),S)!=S){var Q=O.lastIndexOf(g);Q>-1&&(O=O.slice(0,Q))}return O+f}function dx(r){return r=Ge(r),r&&xv.test(r)?r.replace(Hd,N2):r}var fx=Mi(function(r,s,l){return r+(l?" ":"")+s.toUpperCase()}),Zc=gh("toUpperCase");function hp(r,s,l){return r=Ge(r),s=l?n:s,s===n?M2(r)?F2(r):S2(r):r.match(s)||[]}var pp=Ae(function(r,s){try{return Yt(r,n,s)}catch(l){return Hc(l)?l:new _e(l)}}),hx=ir(function(r,s){return pn(s,function(l){l=Fn(l),nr(r,l,Dc(r[l],r))}),r});function px(r){var s=r==null?0:r.length,l=fe();return r=s?ct(r,function(f){if(typeof f[1]!="function")throw new gn(c);return[l(f[0]),f[1]]}):[],Ae(function(f){for(var g=-1;++g<s;){var b=r[g];if(Yt(b[0],this,f))return Yt(b[1],this,f)}})}function gx(r){return Ny(vn(r,m))}function qc(r){return function(){return r}}function mx(r,s){return r==null||r!==r?s:r}var vx=vh(),yx=vh(!0);function Gt(r){return r}function Kc(r){return Kf(typeof r=="function"?r:vn(r,m))}function bx(r){return Gf(vn(r,m))}function _x(r,s){return Qf(r,vn(s,m))}var wx=Ae(function(r,s){return function(l){return Os(l,r,s)}}),xx=Ae(function(r,s){return function(l){return Os(r,l,s)}});function Vc(r,s,l){var f=St(s),g=Qo(s,f);l==null&&!(dt(s)&&(g.length||!f.length))&&(l=s,s=r,r=this,g=Qo(s,St(s)));var b=!(dt(l)&&"chain"in l)||!!l.chain,x=or(r);return pn(g,function(S){var O=s[S];r[S]=O,x&&(r.prototype[S]=function(){var D=this.__chain__;if(b||D){var N=r(this.__wrapped__),F=N.__actions__=qt(this.__actions__);return F.push({func:O,args:arguments,thisArg:r}),N.__chain__=D,N}return O.apply(r,Cr([this.value()],arguments))})}),r}function $x(){return Tt._===this&&(Tt._=G2),this}function Gc(){}function kx(r){return r=Ce(r),Ae(function(s){return Xf(s,r)})}var Cx=Sc(ct),Sx=Sc(yf),Ex=Sc(Xl);function gp(r){return Lc(r)?Yl(Fn(r)):rb(r)}function Tx(r){return function(s){return r==null?n:ai(r,s)}}var Ax=bh(),Ix=bh(!0);function Qc(){return[]}function Xc(){return!1}function Rx(){return{}}function Ox(){return""}function Lx(){return!0}function Px(r,s){if(r=Ce(r),r<1||r>ke)return[];var l=G,f=Ot(r,G);s=fe(s),r-=G;for(var g=tc(f,s);++l<r;)s(l);return g}function Mx(r){return xe(r)?ct(r,Fn):tn(r)?[r]:qt(Mh(Ge(r)))}function Bx(r){var s=++K2;return Ge(r)+s}var jx=na(function(r,s){return r+s},0),Ux=Ec("ceil"),Dx=na(function(r,s){return r/s},1),Nx=Ec("floor");function Hx(r){return r&&r.length?Go(r,Gt,fc):n}function zx(r,s){return r&&r.length?Go(r,fe(s,2),fc):n}function Fx(r){return wf(r,Gt)}function Wx(r,s){return wf(r,fe(s,2))}function Zx(r){return r&&r.length?Go(r,Gt,mc):n}function qx(r,s){return r&&r.length?Go(r,fe(s,2),mc):n}var Kx=na(function(r,s){return r*s},1),Vx=Ec("round"),Gx=na(function(r,s){return r-s},0);function Qx(r){return r&&r.length?ec(r,Gt):0}function Xx(r,s){return r&&r.length?ec(r,fe(s,2)):0}return y.after=bw,y.ary=qh,y.assign=o3,y.assignIn=op,y.assignInWith=ga,y.assignWith=a3,y.at=l3,y.before=Kh,y.bind=Dc,y.bindAll=hx,y.bindKey=Vh,y.castArray=Rw,y.chain=Fh,y.chunk=Nb,y.compact=Hb,y.concat=zb,y.cond=px,y.conforms=gx,y.constant=qc,y.countBy=Q_,y.create=c3,y.curry=Gh,y.curryRight=Qh,y.debounce=Xh,y.defaults=u3,y.defaultsDeep=d3,y.defer=_w,y.delay=ww,y.difference=Fb,y.differenceBy=Wb,y.differenceWith=Zb,y.drop=qb,y.dropRight=Kb,y.dropRightWhile=Vb,y.dropWhile=Gb,y.fill=Qb,y.filter=Y_,y.flatMap=tw,y.flatMapDeep=nw,y.flatMapDepth=rw,y.flatten=Dh,y.flattenDeep=Xb,y.flattenDepth=Yb,y.flip=xw,y.flow=vx,y.flowRight=yx,y.fromPairs=Jb,y.functions=y3,y.functionsIn=b3,y.groupBy=iw,y.initial=t_,y.intersection=n_,y.intersectionBy=r_,y.intersectionWith=i_,y.invert=w3,y.invertBy=x3,y.invokeMap=ow,y.iteratee=Kc,y.keyBy=aw,y.keys=St,y.keysIn=Vt,y.map=ca,y.mapKeys=k3,y.mapValues=C3,y.matches=bx,y.matchesProperty=_x,y.memoize=da,y.merge=S3,y.mergeWith=ap,y.method=wx,y.methodOf=xx,y.mixin=Vc,y.negate=fa,y.nthArg=kx,y.omit=E3,y.omitBy=T3,y.once=$w,y.orderBy=lw,y.over=Cx,y.overArgs=kw,y.overEvery=Sx,y.overSome=Ex,y.partial=Nc,y.partialRight=Yh,y.partition=cw,y.pick=A3,y.pickBy=lp,y.property=gp,y.propertyOf=Tx,y.pull=l_,y.pullAll=Hh,y.pullAllBy=c_,y.pullAllWith=u_,y.pullAt=d_,y.range=Ax,y.rangeRight=Ix,y.rearg=Cw,y.reject=fw,y.remove=f_,y.rest=Sw,y.reverse=jc,y.sampleSize=pw,y.set=R3,y.setWith=O3,y.shuffle=gw,y.slice=h_,y.sortBy=yw,y.sortedUniq=__,y.sortedUniqBy=w_,y.split=tx,y.spread=Ew,y.tail=x_,y.take=$_,y.takeRight=k_,y.takeRightWhile=C_,y.takeWhile=S_,y.tap=H_,y.throttle=Tw,y.thru=la,y.toArray=rp,y.toPairs=cp,y.toPairsIn=up,y.toPath=Mx,y.toPlainObject=sp,y.transform=L3,y.unary=Aw,y.union=E_,y.unionBy=T_,y.unionWith=A_,y.uniq=I_,y.uniqBy=R_,y.uniqWith=O_,y.unset=P3,y.unzip=Uc,y.unzipWith=zh,y.update=M3,y.updateWith=B3,y.values=Ui,y.valuesIn=j3,y.without=L_,y.words=hp,y.wrap=Iw,y.xor=P_,y.xorBy=M_,y.xorWith=B_,y.zip=j_,y.zipObject=U_,y.zipObjectDeep=D_,y.zipWith=N_,y.entries=cp,y.entriesIn=up,y.extend=op,y.extendWith=ga,Vc(y,y),y.add=jx,y.attempt=pp,y.camelCase=H3,y.capitalize=dp,y.ceil=Ux,y.clamp=U3,y.clone=Ow,y.cloneDeep=Pw,y.cloneDeepWith=Mw,y.cloneWith=Lw,y.conformsTo=Bw,y.deburr=fp,y.defaultTo=mx,y.divide=Dx,y.endsWith=z3,y.eq=Tn,y.escape=F3,y.escapeRegExp=W3,y.every=X_,y.find=J_,y.findIndex=jh,y.findKey=f3,y.findLast=ew,y.findLastIndex=Uh,y.findLastKey=h3,y.floor=Nx,y.forEach=Wh,y.forEachRight=Zh,y.forIn=p3,y.forInRight=g3,y.forOwn=m3,y.forOwnRight=v3,y.get=Fc,y.gt=jw,y.gte=Uw,y.has=_3,y.hasIn=Wc,y.head=Nh,y.identity=Gt,y.includes=sw,y.indexOf=e_,y.inRange=D3,y.invoke=$3,y.isArguments=ui,y.isArray=xe,y.isArrayBuffer=Dw,y.isArrayLike=Kt,y.isArrayLikeObject=mt,y.isBoolean=Nw,y.isBuffer=Or,y.isDate=Hw,y.isElement=zw,y.isEmpty=Fw,y.isEqual=Ww,y.isEqualWith=Zw,y.isError=Hc,y.isFinite=qw,y.isFunction=or,y.isInteger=Jh,y.isLength=ha,y.isMap=ep,y.isMatch=Kw,y.isMatchWith=Vw,y.isNaN=Gw,y.isNative=Qw,y.isNil=Yw,y.isNull=Xw,y.isNumber=tp,y.isObject=dt,y.isObjectLike=pt,y.isPlainObject=Us,y.isRegExp=zc,y.isSafeInteger=Jw,y.isSet=np,y.isString=pa,y.isSymbol=tn,y.isTypedArray=ji,y.isUndefined=e3,y.isWeakMap=t3,y.isWeakSet=n3,y.join=s_,y.kebabCase=Z3,y.last=bn,y.lastIndexOf=o_,y.lowerCase=q3,y.lowerFirst=K3,y.lt=r3,y.lte=i3,y.max=Hx,y.maxBy=zx,y.mean=Fx,y.meanBy=Wx,y.min=Zx,y.minBy=qx,y.stubArray=Qc,y.stubFalse=Xc,y.stubObject=Rx,y.stubString=Ox,y.stubTrue=Lx,y.multiply=Kx,y.nth=a_,y.noConflict=$x,y.noop=Gc,y.now=ua,y.pad=V3,y.padEnd=G3,y.padStart=Q3,y.parseInt=X3,y.random=N3,y.reduce=uw,y.reduceRight=dw,y.repeat=Y3,y.replace=J3,y.result=I3,y.round=Vx,y.runInContext=A,y.sample=hw,y.size=mw,y.snakeCase=ex,y.some=vw,y.sortedIndex=p_,y.sortedIndexBy=g_,y.sortedIndexOf=m_,y.sortedLastIndex=v_,y.sortedLastIndexBy=y_,y.sortedLastIndexOf=b_,y.startCase=nx,y.startsWith=rx,y.subtract=Gx,y.sum=Qx,y.sumBy=Xx,y.template=ix,y.times=Px,y.toFinite=ar,y.toInteger=Ce,y.toLength=ip,y.toLower=sx,y.toNumber=_n,y.toSafeInteger=s3,y.toString=Ge,y.toUpper=ox,y.trim=ax,y.trimEnd=lx,y.trimStart=cx,y.truncate=ux,y.unescape=dx,y.uniqueId=Bx,y.upperCase=fx,y.upperFirst=Zc,y.each=Wh,y.eachRight=Zh,y.first=Nh,Vc(y,function(){var r={};return Hn(y,function(s,l){Qe.call(y.prototype,l)||(r[l]=s)}),r}(),{chain:!1}),y.VERSION=i,pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),pn(["drop","take"],function(r,s){je.prototype[r]=function(l){l=l===n?1:$t(Ce(l),0);var f=this.__filtered__&&!s?new je(this):this.clone();return f.__filtered__?f.__takeCount__=Ot(l,f.__takeCount__):f.__views__.push({size:Ot(l,G),type:r+(f.__dir__<0?"Right":"")}),f},je.prototype[r+"Right"]=function(l){return this.reverse()[r](l).reverse()}}),pn(["filter","map","takeWhile"],function(r,s){var l=s+1,f=l==oe||l==J;je.prototype[r]=function(g){var b=this.clone();return b.__iteratees__.push({iteratee:fe(g,3),type:l}),b.__filtered__=b.__filtered__||f,b}}),pn(["head","last"],function(r,s){var l="take"+(s?"Right":"");je.prototype[r]=function(){return this[l](1).value()[0]}}),pn(["initial","tail"],function(r,s){var l="drop"+(s?"":"Right");je.prototype[r]=function(){return this.__filtered__?new je(this):this[l](1)}}),je.prototype.compact=function(){return this.filter(Gt)},je.prototype.find=function(r){return this.filter(r).head()},je.prototype.findLast=function(r){return this.reverse().find(r)},je.prototype.invokeMap=Ae(function(r,s){return typeof r=="function"?new je(this):this.map(function(l){return Os(l,r,s)})}),je.prototype.reject=function(r){return this.filter(fa(fe(r)))},je.prototype.slice=function(r,s){r=Ce(r);var l=this;return l.__filtered__&&(r>0||s<0)?new je(l):(r<0?l=l.takeRight(-r):r&&(l=l.drop(r)),s!==n&&(s=Ce(s),l=s<0?l.dropRight(-s):l.take(s-r)),l)},je.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},je.prototype.toArray=function(){return this.take(G)},Hn(je.prototype,function(r,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),g=y[f?"take"+(s=="last"?"Right":""):s],b=f||/^find/.test(s);g&&(y.prototype[s]=function(){var x=this.__wrapped__,S=f?[1]:arguments,O=x instanceof je,D=S[0],N=O||xe(x),F=function(Pe){var Ue=g.apply(y,Cr([Pe],S));return f&&Q?Ue[0]:Ue};N&&l&&typeof D=="function"&&D.length!=1&&(O=N=!1);var Q=this.__chain__,ae=!!this.__actions__.length,pe=b&&!Q,Ee=O&&!ae;if(!b&&N){x=Ee?x:new je(this);var ge=r.apply(x,S);return ge.__actions__.push({func:la,args:[F],thisArg:n}),new mn(ge,Q)}return pe&&Ee?r.apply(this,S):(ge=this.thru(F),pe?f?ge.value()[0]:ge.value():ge)})}),pn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Po[r],l=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var g=arguments;if(f&&!this.__chain__){var b=this.value();return s.apply(xe(b)?b:[],g)}return this[l](function(x){return s.apply(xe(x)?x:[],g)})}}),Hn(je.prototype,function(r,s){var l=y[s];if(l){var f=l.name+"";Qe.call(Oi,f)||(Oi[f]=[]),Oi[f].push({name:s,func:l})}}),Oi[ta(n,C).name]=[{name:"wrapper",func:n}],je.prototype.clone=dy,je.prototype.reverse=fy,je.prototype.value=hy,y.prototype.at=z_,y.prototype.chain=F_,y.prototype.commit=W_,y.prototype.next=Z_,y.prototype.plant=K_,y.prototype.reverse=V_,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=G_,y.prototype.first=y.prototype.head,Cs&&(y.prototype[Cs]=q_),y},Ai=W2();ni?((ni.exports=Ai)._=Ai,Kl._=Ai):Tt._=Ai}).call(dr)})(Ua,Ua.exports);var $4=Ua.exports;const k4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),yg=(e={})=>(()=>{const t=k4();return Xe(t,e,!0,!0),t})(),C4=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),S4=P('<span class="inline-block h-4 w-4 text-gray-700">'),vo=e=>{const[t,n]=$e(!1),i=()=>n(o=>!o);return(()=>{const o=C4(),a=o.firstChild,c=a.firstChild,u=c.firstChild,d=c.nextSibling;return I(c,_(le,{get when(){return e.icon},keyed:!0,children:p=>(()=>{const h=S4();return I(h,p),h})()}),u),I(u,()=>e.name),d.$$click=()=>i(),I(d,_(yg,{})),I(o,_(le,{get when(){return t()},get children(){return e.settings()}}),null),o})()};bt(["click"]);const E4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),Zu=(e={})=>(()=>{const t=E4();return Xe(t,e,!0,!0),t})();var T4=typeof dr=="object"&&dr&&dr.Object===Object&&dr,bg=T4,A4=bg,I4=typeof self=="object"&&self&&self.Object===Object&&self,R4=A4||I4||Function("return this")(),Un=R4,O4=Un,L4=O4.Symbol,ls=L4,kp=ls,_g=Object.prototype,P4=_g.hasOwnProperty,M4=_g.toString,Ds=kp?kp.toStringTag:void 0;function B4(e){var t=P4.call(e,Ds),n=e[Ds];try{e[Ds]=void 0;var i=!0}catch{}var o=M4.call(e);return i&&(t?e[Ds]=n:delete e[Ds]),o}var j4=B4,U4=Object.prototype,D4=U4.toString;function N4(e){return D4.call(e)}var H4=N4,Cp=ls,z4=j4,F4=H4,W4="[object Null]",Z4="[object Undefined]",Sp=Cp?Cp.toStringTag:void 0;function q4(e){return e==null?e===void 0?Z4:W4:Sp&&Sp in Object(e)?z4(e):F4(e)}var cs=q4;function K4(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Gn=K4,V4=cs,G4=Gn,Q4="[object AsyncFunction]",X4="[object Function]",Y4="[object GeneratorFunction]",J4="[object Proxy]";function e5(e){if(!G4(e))return!1;var t=V4(e);return t==X4||t==Y4||t==Q4||t==J4}var wg=e5,t5=Un,n5=t5["__core-js_shared__"],r5=n5,Yc=r5,Ep=function(){var e=/[^.]+$/.exec(Yc&&Yc.keys&&Yc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function i5(e){return!!Ep&&Ep in e}var s5=i5,o5=Function.prototype,a5=o5.toString;function l5(e){if(e!=null){try{return a5.call(e)}catch{}try{return e+""}catch{}}return""}var xg=l5,c5=wg,u5=s5,d5=Gn,f5=xg,h5=/[\\^$.*+?()[\]{}|]/g,p5=/^\[object .+?Constructor\]$/,g5=Function.prototype,m5=Object.prototype,v5=g5.toString,y5=m5.hasOwnProperty,b5=RegExp("^"+v5.call(y5).replace(h5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _5(e){if(!d5(e)||u5(e))return!1;var t=c5(e)?b5:p5;return t.test(f5(e))}var w5=_5;function x5(e,t){return e?.[t]}var $5=x5,k5=w5,C5=$5;function S5(e,t){var n=C5(e,t);return k5(n)?n:void 0}var wi=S5,E5=wi,T5=E5(Object,"create"),hl=T5,Tp=hl;function A5(){this.__data__=Tp?Tp(null):{},this.size=0}var I5=A5;function R5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var O5=R5,L5=hl,P5="__lodash_hash_undefined__",M5=Object.prototype,B5=M5.hasOwnProperty;function j5(e){var t=this.__data__;if(L5){var n=t[e];return n===P5?void 0:n}return B5.call(t,e)?t[e]:void 0}var U5=j5,D5=hl,N5=Object.prototype,H5=N5.hasOwnProperty;function z5(e){var t=this.__data__;return D5?t[e]!==void 0:H5.call(t,e)}var F5=z5,W5=hl,Z5="__lodash_hash_undefined__";function q5(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=W5&&t===void 0?Z5:t,this}var K5=q5,V5=I5,G5=O5,Q5=U5,X5=F5,Y5=K5;function us(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}us.prototype.clear=V5;us.prototype.delete=G5;us.prototype.get=Q5;us.prototype.has=X5;us.prototype.set=Y5;var J5=us;function e$(){this.__data__=[],this.size=0}var t$=e$;function n$(e,t){return e===t||e!==e&&t!==t}var qu=n$,r$=qu;function i$(e,t){for(var n=e.length;n--;)if(r$(e[n][0],t))return n;return-1}var pl=i$,s$=pl,o$=Array.prototype,a$=o$.splice;function l$(e){var t=this.__data__,n=s$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():a$.call(t,n,1),--this.size,!0}var c$=l$,u$=pl;function d$(e){var t=this.__data__,n=u$(t,e);return n<0?void 0:t[n][1]}var f$=d$,h$=pl;function p$(e){return h$(this.__data__,e)>-1}var g$=p$,m$=pl;function v$(e,t){var n=this.__data__,i=m$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var y$=v$,b$=t$,_$=c$,w$=f$,x$=g$,$$=y$;function ds(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ds.prototype.clear=b$;ds.prototype.delete=_$;ds.prototype.get=w$;ds.prototype.has=x$;ds.prototype.set=$$;var gl=ds,k$=wi,C$=Un,S$=k$(C$,"Map"),Ku=S$,Ap=J5,E$=gl,T$=Ku;function A$(){this.size=0,this.__data__={hash:new Ap,map:new(T$||E$),string:new Ap}}var I$=A$;function R$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var O$=R$,L$=O$;function P$(e,t){var n=e.__data__;return L$(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ml=P$,M$=ml;function B$(e){var t=M$(this,e).delete(e);return this.size-=t?1:0,t}var j$=B$,U$=ml;function D$(e){return U$(this,e).get(e)}var N$=D$,H$=ml;function z$(e){return H$(this,e).has(e)}var F$=z$,W$=ml;function Z$(e,t){var n=W$(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var q$=Z$,K$=I$,V$=j$,G$=N$,Q$=F$,X$=q$;function fs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}fs.prototype.clear=K$;fs.prototype.delete=V$;fs.prototype.get=G$;fs.prototype.has=Q$;fs.prototype.set=X$;var Vu=fs,Y$="__lodash_hash_undefined__";function J$(e){return this.__data__.set(e,Y$),this}var e6=J$;function t6(e){return this.__data__.has(e)}var n6=t6,r6=Vu,i6=e6,s6=n6;function Da(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new r6;++t<n;)this.add(e[t])}Da.prototype.add=Da.prototype.push=i6;Da.prototype.has=s6;var $g=Da;function o6(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var a6=o6;function l6(e){return e!==e}var c6=l6;function u6(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var d6=u6,f6=a6,h6=c6,p6=d6;function g6(e,t,n){return t===t?p6(e,t,n):f6(e,h6,n)}var m6=g6,v6=m6;function y6(e,t){var n=e==null?0:e.length;return!!n&&v6(e,t,0)>-1}var b6=y6;function _6(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var w6=_6;function x6(e,t){return e.has(t)}var kg=x6,$6=wi,k6=Un,C6=$6(k6,"Set"),Cg=C6;function S6(){}var E6=S6;function T6(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Gu=T6,Jc=Cg,A6=E6,I6=Gu,R6=1/0,O6=Jc&&1/I6(new Jc([,-0]))[1]==R6?function(e){return new Jc(e)}:A6,L6=O6,P6=$g,M6=b6,B6=w6,j6=kg,U6=L6,D6=Gu,N6=200;function H6(e,t,n){var i=-1,o=M6,a=e.length,c=!0,u=[],d=u;if(n)c=!1,o=B6;else if(a>=N6){var p=t?null:U6(e);if(p)return D6(p);c=!1,o=j6,d=new P6}else d=t?[]:u;e:for(;++i<a;){var h=e[i],m=t?t(h):h;if(h=n||h!==0?h:0,c&&m===m){for(var v=d.length;v--;)if(d[v]===m)continue e;t&&d.push(m),u.push(h)}else o(d,m,n)||(d!==u&&d.push(m),u.push(h))}return u}var Sg=H6,z6=Sg;function F6(e){return e&&e.length?z6(e):[]}var W6=F6;const Fr=mo(W6),Z6=P('<div class="block shrink-0 overflow-hidden border-b p-1">'),Ra=e=>(()=>{const t=Z6();return I(t,()=>e.children),t})(),q6={},K6=Object.freeze(Object.defineProperty({__proto__:null,default:q6},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Ne=BigInt(0),ut=BigInt(1),Hr=BigInt(2),Ks=BigInt(3),Ip=BigInt(8),Je=Object.freeze({a:Ne,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:ut,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),Rp=(e,t)=>(e+t/Hr)/t,ma={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=Je,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-ut*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,c=BigInt("0x100000000000000000000000000000000"),u=Rp(a*e,t),d=Rp(-i*e,t);let p=Y(e-u*n-d*o,t),h=Y(-u*i-d*a,t);const m=p>c,v=h>c;if(m&&(p=t-p),v&&(h=t-h),p>c||h>c)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:m,k1:p,k2neg:v,k2:h}}},On=32,Vi=32,V6=32,Na=On+1,Ha=2*On+1;function Op(e){const{a:t,b:n}=Je,i=Y(e*e),o=Y(i*e);return Y(o+t*e+n)}const va=Je.a===Ne;class Qu extends Error{constructor(t){super(t)}}function Lp(e){if(!(e instanceof Ke))throw new TypeError("JacobianPoint expected")}class Ke{constructor(t,n,i){this.x=t,this.y=n,this.z=i}static fromAffine(t){if(!(t instanceof He))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(He.ZERO)?Ke.ZERO:new Ke(t.x,t.y,ut)}static toAffineBatch(t){const n=J6(t.map(i=>i.z));return t.map((i,o)=>i.toAffine(n[o]))}static normalizeZ(t){return Ke.toAffineBatch(t).map(Ke.fromAffine)}equals(t){Lp(t);const{x:n,y:i,z:o}=this,{x:a,y:c,z:u}=t,d=Y(o*o),p=Y(u*u),h=Y(n*p),m=Y(a*d),v=Y(Y(i*u)*p),w=Y(Y(c*o)*d);return h===m&&v===w}negate(){return new Ke(this.x,Y(-this.y),this.z)}double(){const{x:t,y:n,z:i}=this,o=Y(t*t),a=Y(n*n),c=Y(a*a),u=t+a,d=Y(Hr*(Y(u*u)-o-c)),p=Y(Ks*o),h=Y(p*p),m=Y(h-Hr*d),v=Y(p*(d-m)-Ip*c),w=Y(Hr*n*i);return new Ke(m,v,w)}add(t){Lp(t);const{x:n,y:i,z:o}=this,{x:a,y:c,z:u}=t;if(a===Ne||c===Ne)return this;if(n===Ne||i===Ne)return t;const d=Y(o*o),p=Y(u*u),h=Y(n*p),m=Y(a*d),v=Y(Y(i*u)*p),w=Y(Y(c*o)*d),$=Y(m-h),E=Y(w-v);if($===Ne)return E===Ne?this.double():Ke.ZERO;const k=Y($*$),C=Y($*k),M=Y(h*k),B=Y(E*E-C-Hr*M),R=Y(E*(M-B)-v*C),T=Y(o*u*$);return new Ke(B,R,T)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const n=Ke.ZERO;if(typeof t=="bigint"&&t===Ne)return n;let i=Bp(t);if(i===ut)return this;if(!va){let m=n,v=this;for(;i>Ne;)i&ut&&(m=m.add(v)),v=v.double(),i>>=ut;return m}let{k1neg:o,k1:a,k2neg:c,k2:u}=ma.splitScalar(i),d=n,p=n,h=this;for(;a>Ne||u>Ne;)a&ut&&(d=d.add(h)),u&ut&&(p=p.add(h)),h=h.double(),a>>=ut,u>>=ut;return o&&(d=d.negate()),c&&(p=p.negate()),p=new Ke(Y(p.x*ma.beta),p.y,p.z),d.add(p)}precomputeWindow(t){const n=va?128/t+1:256/t+1,i=[];let o=this,a=o;for(let c=0;c<n;c++){a=o,i.push(a);for(let u=1;u<2**(t-1);u++)a=a.add(o),i.push(a);o=a.double()}return i}wNAF(t,n){!n&&this.equals(Ke.BASE)&&(n=He.BASE);const i=n&&n._WINDOW_SIZE||1;if(256%i)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=n&&yu.get(n);o||(o=this.precomputeWindow(i),n&&i!==1&&(o=Ke.normalizeZ(o),yu.set(n,o)));let a=Ke.ZERO,c=Ke.BASE;const u=1+(va?128/i:256/i),d=2**(i-1),p=BigInt(2**i-1),h=2**i,m=BigInt(i);for(let v=0;v<u;v++){const w=v*d;let $=Number(t&p);t>>=m,$>d&&($-=h,t+=ut);const E=w,k=w+Math.abs($)-1,C=v%2!==0,M=$<0;$===0?c=c.add(ya(C,o[E])):a=a.add(ya(M,o[k]))}return{p:a,f:c}}multiply(t,n){let i=Bp(t),o,a;if(va){const{k1neg:c,k1:u,k2neg:d,k2:p}=ma.splitScalar(i);let{p:h,f:m}=this.wNAF(u,n),{p:v,f:w}=this.wNAF(p,n);h=ya(c,h),v=ya(d,v),v=new Ke(Y(v.x*ma.beta),v.y,v.z),o=h.add(v),a=m.add(w)}else{const{p:c,f:u}=this.wNAF(i,n);o=c,a=u}return Ke.normalizeZ([o,a])[0]}toAffine(t){const{x:n,y:i,z:o}=this,a=this.equals(Ke.ZERO);t==null&&(t=a?Ip:hs(o));const c=t,u=Y(c*c),d=Y(u*c),p=Y(n*u),h=Y(i*d),m=Y(o*c);if(a)return He.ZERO;if(m!==ut)throw new Error("invZ was invalid");return new He(p,h)}}Ke.BASE=new Ke(Je.Gx,Je.Gy,ut);Ke.ZERO=new Ke(Ne,ut,Ne);function ya(e,t){const n=t.negate();return e?n:t}const yu=new WeakMap;class He{constructor(t,n){this.x=t,this.y=n}_setWindowSize(t){this._WINDOW_SIZE=t,yu.delete(this)}hasEvenY(){return this.y%Hr===Ne}static fromCompressedHex(t){const n=t.length===32,i=cn(n?t:t.subarray(1));if(!Oa(i))throw new Error("Point is not on curve");const o=Op(i);let a=Y6(o);const c=(a&ut)===ut;n?c&&(a=Y(-a)):(t[0]&1)===1!==c&&(a=Y(-a));const u=new He(i,a);return u.assertValidity(),u}static fromUncompressedHex(t){const n=cn(t.subarray(1,On+1)),i=cn(t.subarray(On+1,On*2+1)),o=new He(n,i);return o.assertValidity(),o}static fromHex(t){const n=Zn(t),i=n.length,o=n[0];if(i===On)return this.fromCompressedHex(n);if(i===Na&&(o===2||o===3))return this.fromCompressedHex(n);if(i===Ha&&o===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Na} compressed bytes or ${Ha} uncompressed bytes, not ${i}`)}static fromPrivateKey(t){return He.BASE.multiply(vi(t))}static fromSignature(t,n,i){const{r:o,s:a}=Eg(n);if(![0,1,2,3].includes(i))throw new Error("Cannot recover: invalid recovery bit");const c=Xu(Zn(t)),{n:u}=Je,d=i===2||i===3?o+u:o,p=hs(d,u),h=Y(-c*p,u),m=Y(a*p,u),v=i&1?"03":"02",w=He.fromHex(v+Wr(d)),$=He.BASE.multiplyAndAddUnsafe(w,h,m);if(!$)throw new Error("Cannot recover signature: point at infinify");return $.assertValidity(),$}toRawBytes(t=!1){return Zr(this.toHex(t))}toHex(t=!1){const n=Wr(this.x);return t?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${Wr(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:n,y:i}=this;if(!Oa(n)||!Oa(i))throw new Error(t);const o=Y(i*i),a=Op(n);if(Y(o-a)!==Ne)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new He(this.x,Y(-this.y))}double(){return Ke.fromAffine(this).double().toAffine()}add(t){return Ke.fromAffine(this).add(Ke.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return Ke.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,n,i){const o=Ke.fromAffine(this),a=n===Ne||n===ut||this!==He.BASE?o.multiplyUnsafe(n):o.multiply(n),c=Ke.fromAffine(t).multiplyUnsafe(i),u=a.add(c);return u.equals(Ke.ZERO)?void 0:u.toAffine()}}He.BASE=new He(Je.Gx,Je.Gy);He.ZERO=new He(Ne,Ne);function Pp(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function Mp(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${Gi(e)}`);const t=e[1],n=e.subarray(2,t+2);if(!t||n.length!==t)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:cn(n),left:e.subarray(t+2)}}function G6(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${Gi(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:n}=Mp(e.subarray(2)),{data:i,left:o}=Mp(n);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${Gi(o)}`);return{r:t,s:i}}class pr{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromCompact(t){const n=t instanceof Uint8Array,i="Signature.fromCompact";if(typeof t!="string"&&!n)throw new TypeError(`${i}: Expected string or Uint8Array`);const o=n?Gi(t):t;if(o.length!==128)throw new Error(`${i}: Expected 64-byte hex`);return new pr(za(o.slice(0,64)),za(o.slice(64,128)))}static fromDER(t){const n=t instanceof Uint8Array;if(typeof t!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:i,s:o}=G6(n?t:Zr(t));return new pr(i,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:n}=this;if(!Xi(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Xi(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=Je.n>>ut;return this.s>t}normalizeS(){return this.hasHighS()?new pr(this.r,Y(-this.s,Je.n)):this}toDERRawBytes(){return Zr(this.toDERHex())}toDERHex(){const t=Pp(Ns(this.s)),n=Pp(Ns(this.r)),i=t.length/2,o=n.length/2,a=Ns(i),c=Ns(o);return`30${Ns(o+i+4)}02${c}${n}02${a}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return Zr(this.toCompactHex())}toCompactHex(){return Wr(this.r)+Wr(this.s)}}function Ur(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}const Q6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Gi(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let n=0;n<e.length;n++)t+=Q6[e[n]];return t}const X6=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function Wr(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(Ne<=e&&e<X6))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function Qi(e){const t=Zr(Wr(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function Ns(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function za(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function Zr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}function cn(e){return za(Gi(e))}function Zn(e){return e instanceof Uint8Array?Uint8Array.from(e):Zr(e)}function Bp(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&Xi(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function Y(e,t=Je.P){const n=e%t;return n>=Ne?n:t+n}function wn(e,t){const{P:n}=Je;let i=e;for(;t-- >Ne;)i*=i,i%=n;return i}function Y6(e){const{P:t}=Je,n=BigInt(6),i=BigInt(11),o=BigInt(22),a=BigInt(23),c=BigInt(44),u=BigInt(88),d=e*e*e%t,p=d*d*e%t,h=wn(p,Ks)*p%t,m=wn(h,Ks)*p%t,v=wn(m,Hr)*d%t,w=wn(v,i)*v%t,$=wn(w,o)*w%t,E=wn($,c)*$%t,k=wn(E,u)*E%t,C=wn(k,c)*$%t,M=wn(C,Ks)*p%t,B=wn(M,a)*w%t,R=wn(B,n)*d%t,T=wn(R,Hr);if(T*T%t!==e)throw new Error("Cannot find square root");return T}function hs(e,t=Je.P){if(e===Ne||t<=Ne)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=Y(e,t),i=t,o=Ne,a=ut;for(;n!==Ne;){const u=i/n,d=i%n,p=o-a*u;i=n,n=d,o=a,a=p}if(i!==ut)throw new Error("invert: does not exist");return Y(o,t)}function J6(e,t=Je.P){const n=new Array(e.length),i=e.reduce((a,c,u)=>c===Ne?a:(n[u]=a,Y(a*c,t)),ut),o=hs(i,t);return e.reduceRight((a,c,u)=>c===Ne?a:(n[u]=Y(a*n[u],t),Y(a*c,t)),o),n}function e8(e){const t=e.length*8-Vi*8,n=cn(e);return t>0?n>>BigInt(t):n}function Xu(e,t=!1){const n=e8(e);if(t)return n;const{n:i}=Je;return n>=i?n-i:n}let Fi,Vs;class t8{constructor(t,n){if(this.hashLen=t,this.qByteLen=n,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return Ie.hmacSha256(this.k,...t)}hmacSync(...t){return Vs(this.k,...t)}checkSync(){if(typeof Vs!="function")throw new Qu("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const i=this.v.slice();n.push(i),t+=this.v.length}return Ur(...n)}generateSync(){this.checkSync(),this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const i=this.v.slice();n.push(i),t+=this.v.length}return Ur(...n)}}function Xi(e){return Ne<e&&e<Je.n}function Oa(e){return Ne<e&&e<Je.P}function n8(e,t,n,i=!0){const{n:o}=Je,a=Xu(e,!0);if(!Xi(a))return;const c=hs(a,o),u=He.BASE.multiply(a),d=Y(u.x,o);if(d===Ne)return;const p=Y(c*Y(t+n*d,o),o);if(p===Ne)return;let h=new pr(d,p),m=(u.x===h.r?0:2)|Number(u.y&ut);return i&&h.hasHighS()&&(h=h.normalizeS(),m^=1),{sig:h,recovery:m}}function vi(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*Vi)throw new Error("Expected 32 bytes of private key");t=za(e)}else if(e instanceof Uint8Array){if(e.length!==Vi)throw new Error("Expected 32 bytes of private key");t=cn(e)}else throw new TypeError("Expected valid private key");if(!Xi(t))throw new Error("Expected private key: 0 < key < n");return t}function Yu(e){return e instanceof He?(e.assertValidity(),e):He.fromHex(e)}function Eg(e){if(e instanceof pr)return e.assertValidity(),e;try{return pr.fromDER(e)}catch{return pr.fromCompact(e)}}function r8(e,t=!1){return He.fromPrivateKey(e).toRawBytes(t)}function jp(e){const t=e instanceof Uint8Array,n=typeof e=="string",i=(t||n)&&e.length;return t?i===Na||i===Ha:n?i===Na*2||i===Ha*2:e instanceof He}function Tg(e,t,n=!1){if(jp(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!jp(t))throw new TypeError("getSharedSecret: second arg must be public key");const i=Yu(t);return i.assertValidity(),i.multiply(vi(e)).toRawBytes(n)}function Ag(e){const t=e.length>On?e.slice(0,On):e;return cn(t)}function i8(e){const t=Ag(e),n=Y(t,Je.n);return Ig(n<Ne?t:n)}function Ig(e){return Qi(e)}function s8(e,t,n){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const i=Zn(e),o=vi(t),a=[Ig(o),i8(i)];if(n!=null){n===!0&&(n=Ie.randomBytes(On));const d=Zn(n);if(d.length!==On)throw new Error(`sign: Expected ${On} bytes of extra data`);a.push(d)}const c=Ur(...a),u=Ag(i);return{seed:c,m:u,d:o}}function o8(e,t){const{sig:n,recovery:i}=e,{der:o,recovered:a}=Object.assign({canonical:!0,der:!0},t),c=o?n.toDERRawBytes():n.toCompactRawBytes();return a?[c,i]:c}function a8(e,t,n={}){const{seed:i,m:o,d:a}=s8(e,t,n.extraEntropy),c=new t8(V6,Vi);c.reseedSync(i);let u;for(;!(u=n8(c.generateSync(),o,a,n.canonical));)c.reseedSync();return o8(u,n)}const l8={strict:!0};function c8(e,t,n,i=l8){let o;try{o=Eg(e),t=Zn(t)}catch{return!1}const{r:a,s:c}=o;if(i.strict&&o.hasHighS())return!1;const u=Xu(t);let d;try{d=Yu(n)}catch{return!1}const{n:p}=Je,h=hs(c,p),m=Y(u*h,p),v=Y(a*h,p),w=He.BASE.multiplyAndAddUnsafe(d,m,v);return w?Y(w.x,p)===a:!1}function Fa(e){return Y(cn(e),Je.n)}class Yi{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromHex(t){const n=Zn(t);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);const i=cn(n.subarray(0,32)),o=cn(n.subarray(32,64));return new Yi(i,o)}assertValidity(){const{r:t,s:n}=this;if(!Oa(t)||!Xi(n))throw new Error("Invalid signature")}toHex(){return Wr(this.r)+Wr(this.s)}toRawBytes(){return Zr(this.toHex())}}function u8(e){return He.fromPrivateKey(e).toRawX()}class Rg{constructor(t,n,i=Ie.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=Zn(t);const{x:o,scalar:a}=this.getScalar(vi(n));if(this.px=o,this.d=a,this.rand=Zn(i),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const n=He.fromPrivateKey(t),i=n.hasEvenY()?t:Je.n-t;return{point:n,scalar:i,x:n.toRawX()}}initNonce(t,n){return Qi(t^cn(n))}finalizeNonce(t){const n=Y(cn(t),Je.n);if(n===Ne)throw new Error("sign: Creation of signature failed. k is zero");const{point:i,x:o,scalar:a}=this.getScalar(n);return{R:i,rx:o,k:a}}finalizeSig(t,n,i,o){return new Yi(t.x,Y(n+i*o,Je.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:n,px:i,rand:o}=this,a=Ie.taggedHash,c=this.initNonce(n,await a(jr.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(await a(jr.nonce,c,i,t)),h=Fa(await a(jr.challenge,d,i,t)),m=this.finalizeSig(u,p,h,n);return await Pg(m,t,i)||this.error(),m}calcSync(){const{m:t,d:n,px:i,rand:o}=this,a=Ie.taggedHashSync,c=this.initNonce(n,a(jr.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(a(jr.nonce,c,i,t)),h=Fa(a(jr.challenge,d,i,t)),m=this.finalizeSig(u,p,h,n);return Mg(m,t,i)||this.error(),m}}async function d8(e,t,n){return new Rg(e,t,n).calc()}function f8(e,t,n){return new Rg(e,t,n).calcSync()}function Og(e,t,n){const i=e instanceof Yi,o=i?e:Yi.fromHex(e);return i&&o.assertValidity(),{...o,m:Zn(t),P:Yu(n)}}function Lg(e,t,n,i){const o=He.BASE.multiplyAndAddUnsafe(t,vi(n),Y(-i,Je.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function Pg(e,t,n){try{const{r:i,s:o,m:a,P:c}=Og(e,t,n),u=Fa(await Ie.taggedHash(jr.challenge,Qi(i),c.toRawX(),a));return Lg(i,c,o,u)}catch{return!1}}function Mg(e,t,n){try{const{r:i,s:o,m:a,P:c}=Og(e,t,n),u=Fa(Ie.taggedHashSync(jr.challenge,Qi(i),c.toRawX(),a));return Lg(i,c,o,u)}catch(i){if(i instanceof Qu)throw i;return!1}}const vl={Signature:Yi,getPublicKey:u8,sign:d8,verify:Pg,signSync:f8,verifySync:Mg};He.BASE._setWindowSize(8);const sn={node:K6,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},jr={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},ba={},Ie={bytesToHex:Gi,hexToBytes:Zr,concatBytes:Ur,mod:Y,invert:hs,isValidPrivateKey(e){try{return vi(e),!0}catch{return!1}},_bigintTo32Bytes:Qi,_normalizePrivateKey:vi,hashToPrivateKey:e=>{e=Zn(e);const t=Vi+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const n=Y(cn(e),Je.n-ut)+ut;return Qi(n)},randomBytes:(e=32)=>{if(sn.web)return sn.web.getRandomValues(new Uint8Array(e));if(sn.node){const{randomBytes:t}=sn.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>Ie.hashToPrivateKey(Ie.randomBytes(Vi+8)),precompute(e=8,t=He.BASE){const n=t===He.BASE?t:new He(t.x,t.y);return n._setWindowSize(e),n.multiply(Ks),n},sha256:async(...e)=>{if(sn.web){const t=await sn.web.subtle.digest("SHA-256",Ur(...e));return new Uint8Array(t)}else if(sn.node){const{createHash:t}=sn.node,n=t("sha256");return e.forEach(i=>n.update(i)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(sn.web){const n=await sn.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),i=Ur(...t),o=await sn.web.subtle.sign("HMAC",n,i);return new Uint8Array(o)}else if(sn.node){const{createHmac:n}=sn.node,i=n("sha256",e);return t.forEach(o=>i.update(o)),Uint8Array.from(i.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let n=ba[e];if(n===void 0){const i=await Ie.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));n=Ur(i,i),ba[e]=n}return Ie.sha256(n,...t)},taggedHashSync:(e,...t)=>{if(typeof Fi!="function")throw new Qu("sha256Sync is undefined, you need to set it");let n=ba[e];if(n===void 0){const i=Fi(Uint8Array.from(e,o=>o.charCodeAt(0)));n=Ur(i,i),ba[e]=n}return Fi(n,...t)},_JacobianPoint:Ke};Object.defineProperties(Ie,{sha256Sync:{configurable:!1,get(){return Fi},set(e){Fi||(Fi=e)}},hmacSha256Sync:{configurable:!1,get(){return Vs},set(e){Vs||(Vs=e)}}});function bu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function h8(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Bg(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function p8(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");bu(e.outputLen),bu(e.blockLen)}function g8(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function m8(e,t){Bg(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const hi={number:bu,bool:h8,bytes:Bg,hash:p8,exists:g8,output:m8},Ws={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},v8=Object.freeze(Object.defineProperty({__proto__:null,crypto:Ws},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const y8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),b8=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),In=(e,t)=>e<<32-t|e>>>t,jg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!jg)throw new Error("Non little-endian hardware is not supported");const _8=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Ug(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=_8[e[n]];return t}function Dg(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const Ng=async()=>{};async function w8(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await Ng(),i+=a)}}function Ju(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function yo(e){if(typeof e=="string"&&(e=Ju(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function Zs(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class ed{clone(){return this._cloneInto()}}const x8=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function $8(e,t){if(t!==void 0&&(typeof t!="object"||!x8(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function yl(e){const t=i=>e().update(yo(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function k8(e){const t=(i,o)=>e(o).update(yo(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function Hg(e=32){if(Ws.web)return Ws.web.getRandomValues(new Uint8Array(e));if(Ws.node)return new Uint8Array(Ws.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}const C8=Object.freeze(Object.defineProperty({__proto__:null,Hash:ed,asyncLoop:w8,bytesToHex:Ug,checkOpts:$8,concatBytes:Zs,createView:gi,hexToBytes:Dg,isLE:jg,nextTick:Ng,randomBytes:Hg,rotr:In,toBytes:yo,u32:b8,u8:y8,utf8ToBytes:Ju,wrapConstructor:yl,wrapConstructorWithOpts:k8},Symbol.toStringTag,{value:"Module"}));function S8(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,p=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+p,u,i)}let zg=class extends ed{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){hi.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=yo(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=gi(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){hi.exists(this),hi.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let m=c;m<o;m++)n[m]=0;S8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<p;m++)u.setUint32(4*m,h[m],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}};const E8=(e,t,n)=>e&t^~e&n,T8=(e,t,n)=>e&t^e&n^t&n,A8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Lr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Pr=new Uint32Array(64);class Fg extends zg{constructor(){super(64,32,8,!1),this.A=Lr[0]|0,this.B=Lr[1]|0,this.C=Lr[2]|0,this.D=Lr[3]|0,this.E=Lr[4]|0,this.F=Lr[5]|0,this.G=Lr[6]|0,this.H=Lr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:c,G:u,H:d}=this;return[t,n,i,o,a,c,u,d]}set(t,n,i,o,a,c,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=c|0,this.G=u|0,this.H=d|0}process(t,n){for(let m=0;m<16;m++,n+=4)Pr[m]=t.getUint32(n,!1);for(let m=16;m<64;m++){const v=Pr[m-15],w=Pr[m-2],$=In(v,7)^In(v,18)^v>>>3,E=In(w,17)^In(w,19)^w>>>10;Pr[m]=E+Pr[m-7]+$+Pr[m-16]|0}let{A:i,B:o,C:a,D:c,E:u,F:d,G:p,H:h}=this;for(let m=0;m<64;m++){const v=In(u,6)^In(u,11)^In(u,25),w=h+v+E8(u,d,p)+A8[m]+Pr[m]|0,E=(In(i,2)^In(i,13)^In(i,22))+T8(i,o,a)|0;h=p,p=d,d=u,u=c+w|0,c=a,a=o,o=i,i=w+E|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,c=c+this.D|0,u=u+this.E|0,d=d+this.F|0,p=p+this.G|0,h=h+this.H|0,this.set(i,o,a,c,u,d,p,h)}roundClean(){Pr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class I8 extends Fg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const yr=yl(()=>new Fg),R8=yl(()=>new I8),O8=Object.freeze(Object.defineProperty({__proto__:null,sha224:R8,sha256:yr},Symbol.toStringTag,{value:"Module"}));/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Yr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Dn(...e){const t=(o,a)=>c=>o(a(c)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Qn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Yr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Xn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function bo(e,t="="){if(Yr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function Wg(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Up(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(c=>{if(Yr(c),c<0||c>=t)throw new Error(`Wrong integer: ${c}`)});;){let c=0,u=!0;for(let d=i;d<a.length;d++){const p=a[d],h=t*c+p;if(!Number.isSafeInteger(h)||t*c/t!==c||h-p!==t*c)throw new Error("convertRadix: carry overflow");if(c=h%n,a[d]=Math.floor(h/n),!Number.isSafeInteger(a[d])||a[d]*n+c!==h)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(c),u)break}for(let c=0;c<e.length-1&&e[c]===0;c++)o.push(0);return o.reverse()}const Zg=(e,t)=>t?Zg(t,e%t):e,Wa=(e,t)=>e+(t-Zg(e,t));function _u(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Wa(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Wa(t,n)}`);let o=0,a=0;const c=2**n-1,u=[];for(const d of e){if(Yr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&c)>>>0);o&=2**a-1}if(o=o<<n-a&c,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function qg(e){return Yr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Up(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Up(t,e,2**8))}}}function br(e,t=!1){if(Yr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Wa(8,e)>32||Wa(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return _u(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(_u(n,e,8,t))}}}function Dp(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function Kg(e,t){if(Yr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let c=0;c<e;c++)if(o[c]!==a[c])throw new Error("Invalid checksum");return i}}}const L8={alphabet:Qn,chain:Dn,checksum:Kg,radix:qg,radix2:br,join:Xn,padding:bo},Vg=Dn(br(4),Qn("0123456789ABCDEF"),Xn("")),Gg=Dn(br(5),Qn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),bo(5),Xn("")),P8=Dn(br(5),Qn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),bo(5),Xn("")),M8=Dn(br(5),Qn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Xn(""),Wg(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Ji=Dn(br(6),Qn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),bo(6),Xn("")),Qg=Dn(br(6),Qn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),bo(6),Xn("")),td=e=>Dn(qg(58),Qn(e),Xn("")),Js=td("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),B8=td("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),j8=td("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Np=[0,2,3,5,6,7,9,10,11],Xg={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Js.encode(i).padStart(Np[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Np.indexOf(i.length),a=Js.decode(i);for(let c=0;c<a.length-o;c++)if(a[c]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},Yg=e=>Dn(Kg(4,t=>e(e(t))),Js),wu=Dn(Qn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Xn("")),Hp=[996825010,642813549,513874426,1027748829,705979059];function Hs(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Hp.length;i++)(t>>i&1)===1&&(n^=Hp[i]);return n}function zp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const c=e.charCodeAt(a);if(c<33||c>126)throw new Error(`Invalid prefix (${e})`);o=Hs(o)^c>>5}o=Hs(o);for(let a=0;a<i;a++)o=Hs(o)^e.charCodeAt(a)&31;for(let a of t)o=Hs(o)^a;for(let a=0;a<6;a++)o=Hs(o);return o^=n,wu.encode(_u([o%2**30],30,5,!1))}function Jg(e){const t=e==="bech32"?1:734539939,n=br(5),i=n.decode,o=n.encode,a=Dp(i);function c(h,m,v=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(m)||m.length&&typeof m[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof m}`);const w=h.length+7+m.length;if(v!==!1&&w>v)throw new TypeError(`Length ${w} exceeds limit ${v}`);return h=h.toLowerCase(),`${h}1${wu.encode(m)}${zp(h,m,t)}`}function u(h,m=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||m!==!1&&h.length>m)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${m})`);const v=h.toLowerCase();if(h!==v&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=v;const w=h.lastIndexOf("1");if(w===0||w===-1)throw new Error('Letter "1" must be present between prefix and data only');const $=h.slice(0,w),E=h.slice(w+1);if(E.length<6)throw new Error("Data must be at least 6 characters long");const k=wu.decode(E).slice(0,-6),C=zp($,k,t);if(!E.endsWith(C))throw new Error(`Invalid checksum in ${h}: expected "${C}"`);return{prefix:$,words:k}}const d=Dp(u);function p(h){const{prefix:m,words:v}=u(h,!1);return{prefix:m,words:v,bytes:i(v)}}return{encode:c,decode:u,decodeToBytes:p,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const zt=Jg("bech32"),U8=Jg("bech32m"),e1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},t1=Dn(br(4),Qn("0123456789abcdef"),Xn(""),Wg(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),eo={utf8:e1,hex:t1,base16:Vg,base32:Gg,base64:Ji,base64url:Qg,base58:Js,base58xmr:Xg},n1=`Invalid encoding type. Available types: ${Object.keys(eo).join(", ")}`,r1=(e,t)=>{if(typeof e!="string"||!eo.hasOwnProperty(e))throw new TypeError(n1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return eo[e].encode(t)},D8=r1,i1=(e,t)=>{if(!eo.hasOwnProperty(e))throw new TypeError(n1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return eo[e].decode(t)},N8=i1,H8=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Yr,base16:Vg,base32:Gg,base32crockford:M8,base32hex:P8,base58:Js,base58check:Yg,base58flickr:B8,base58xmr:Xg,base58xrp:j8,base64:Ji,base64url:Qg,bech32:zt,bech32m:U8,bytes:N8,bytesToString:r1,hex:t1,str:D8,stringToBytes:i1,utf8:e1,utils:L8},Symbol.toStringTag,{value:"Module"}));var nd={};Object.defineProperty(nd,"__esModule",{value:!0});var rd=nd.wordlist=void 0;rd=nd.wordlist=`abandon
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
`);var an={},Et={};Object.defineProperty(Et,"__esModule",{value:!0});Et.output=Et.exists=Et.hash=Hi=Et.bytes=Et.bool=Et.number=void 0;function Za(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}Et.number=Za;function s1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}Et.bool=s1;function id(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Hi=Et.bytes=id;function o1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Za(e.outputLen),Za(e.blockLen)}Et.hash=o1;function a1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}Et.exists=a1;function l1(e,t){id(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Et.output=l1;const z8={number:Za,bool:s1,bytes:id,hash:o1,exists:a1,output:l1};Et.default=z8;var es={},c1={},_o={};const F8=fl(v8);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=F8,n=R=>new Uint8Array(R.buffer,R.byteOffset,R.byteLength);e.u8=n;const i=R=>new Uint32Array(R.buffer,R.byteOffset,Math.floor(R.byteLength/4));e.u32=i;const o=R=>new DataView(R.buffer,R.byteOffset,R.byteLength);e.createView=o;const a=(R,T)=>R<<32-T|R>>>T;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},(R,T)=>T.toString(16).padStart(2,"0"));function u(R){if(!(R instanceof Uint8Array))throw new Error("Uint8Array expected");let T="";for(let L=0;L<R.length;L++)T+=c[R[L]];return T}e.bytesToHex=u;function d(R){if(typeof R!="string")throw new TypeError("hexToBytes: expected string, got "+typeof R);if(R.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const T=new Uint8Array(R.length/2);for(let L=0;L<T.length;L++){const H=L*2,W=R.slice(H,H+2),re=Number.parseInt(W,16);if(Number.isNaN(re)||re<0)throw new Error("Invalid byte sequence");T[L]=re}return T}e.hexToBytes=d;const p=async()=>{};e.nextTick=p;async function h(R,T,L){let H=Date.now();for(let W=0;W<R;W++){L(W);const re=Date.now()-H;re>=0&&re<T||(await(0,e.nextTick)(),H+=re)}}e.asyncLoop=h;function m(R){if(typeof R!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof R}`);return new TextEncoder().encode(R)}e.utf8ToBytes=m;function v(R){if(typeof R=="string"&&(R=m(R)),!(R instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof R})`);return R}e.toBytes=v;function w(...R){if(!R.every(H=>H instanceof Uint8Array))throw new Error("Uint8Array list expected");if(R.length===1)return R[0];const T=R.reduce((H,W)=>H+W.length,0),L=new Uint8Array(T);for(let H=0,W=0;H<R.length;H++){const re=R[H];L.set(re,W),W+=re.length}return L}e.concatBytes=w;class ${clone(){return this._cloneInto()}}e.Hash=$;const E=R=>Object.prototype.toString.call(R)==="[object Object]"&&R.constructor===Object;function k(R,T){if(T!==void 0&&(typeof T!="object"||!E(T)))throw new TypeError("Options should be object or undefined");return Object.assign(R,T)}e.checkOpts=k;function C(R){const T=H=>R().update(v(H)).digest(),L=R();return T.outputLen=L.outputLen,T.blockLen=L.blockLen,T.create=()=>R(),T}e.wrapConstructor=C;function M(R){const T=(H,W)=>R(W).update(v(H)).digest(),L=R({});return T.outputLen=L.outputLen,T.blockLen=L.blockLen,T.create=H=>R(H),T}e.wrapConstructorWithOpts=M;function B(R=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(R));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(R).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=B})(_o);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=Et,n=_o;class i extends n.Hash{constructor(c,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(c);const d=(0,n.toBytes)(u);if(this.iHash=c.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const p=this.blockLen,h=new Uint8Array(p);h.set(d.length>p?c.create().update(d).digest():d);for(let m=0;m<h.length;m++)h[m]^=54;this.iHash.update(h),this.oHash=c.create();for(let m=0;m<h.length;m++)h[m]^=106;this.oHash.update(h),h.fill(0)}update(c){return t.default.exists(this),this.iHash.update(c),this}digestInto(c){t.default.exists(this),t.default.bytes(c,this.outputLen),this.finished=!0,this.iHash.digestInto(c),this.oHash.update(c),this.oHash.digestInto(c),this.destroy()}digest(){const c=new Uint8Array(this.oHash.outputLen);return this.digestInto(c),c}_cloneInto(c){c||(c=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:p,destroyed:h,blockLen:m,outputLen:v}=this;return c=c,c.finished=p,c.destroyed=h,c.blockLen=m,c.outputLen=v,c.oHash=u._cloneInto(c.oHash),c.iHash=d._cloneInto(c.iHash),c}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,c,u)=>new i(a,c).update(u).digest();e.hmac=o,e.hmac.create=(a,c)=>new i(a,c)})(c1);Object.defineProperty(es,"__esModule",{value:!0});es.pbkdf2Async=es.pbkdf2=void 0;const _a=Et,W8=c1,Wi=_o;function u1(e,t,n,i){_a.default.hash(e);const o=(0,Wi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:c,asyncTick:u}=o;if(_a.default.number(a),_a.default.number(c),_a.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Wi.toBytes)(t),p=(0,Wi.toBytes)(n),h=new Uint8Array(c),m=W8.hmac.create(e,d),v=m._cloneInto().update(p);return{c:a,dkLen:c,asyncTick:u,DK:h,PRF:m,PRFSalt:v}}function d1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function Z8(e,t,n,i){const{c:o,dkLen:a,DK:c,PRF:u,PRFSalt:d}=u1(e,t,n,i);let p;const h=new Uint8Array(4),m=(0,Wi.createView)(h),v=new Uint8Array(u.outputLen);for(let w=1,$=0;$<a;w++,$+=u.outputLen){const E=c.subarray($,$+u.outputLen);m.setInt32(0,w,!1),(p=d._cloneInto(p)).update(h).digestInto(v),E.set(v.subarray(0,E.length));for(let k=1;k<o;k++){u._cloneInto(p).update(v).digestInto(v);for(let C=0;C<E.length;C++)E[C]^=v[C]}}return d1(u,d,c,p,v)}es.pbkdf2=Z8;async function q8(e,t,n,i){const{c:o,dkLen:a,asyncTick:c,DK:u,PRF:d,PRFSalt:p}=u1(e,t,n,i);let h;const m=new Uint8Array(4),v=(0,Wi.createView)(m),w=new Uint8Array(d.outputLen);for(let $=1,E=0;E<a;$++,E+=d.outputLen){const k=u.subarray(E,E+d.outputLen);v.setInt32(0,$,!1),(h=p._cloneInto(h)).update(m).digestInto(w),k.set(w.subarray(0,k.length)),await(0,Wi.asyncLoop)(o-1,c,C=>{d._cloneInto(h).update(w).digestInto(w);for(let M=0;M<k.length;M++)k[M]^=w[M]})}return d1(d,p,u,h,w)}es.pbkdf2Async=q8;const K8=fl(O8);var xn={},bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.SHA2=void 0;const eu=Et,zs=_o;function V8(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,p=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+p,u,i)}class G8 extends zs.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,zs.createView)(this.buffer)}update(t){eu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,zs.toBytes)(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=(0,zs.createView)(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){eu.default.exists(this),eu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let m=c;m<o;m++)n[m]=0;V8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,zs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<p;m++)u.setUint32(4*m,h[m],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}}bl.SHA2=G8;var f1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(V,ie=!1){return ie?{h:Number(V&t),l:Number(V>>n&t)}:{h:Number(V>>n&t)|0,l:Number(V&t)|0}}e.fromBig=i;function o(V,ie=!1){let Z=new Uint32Array(V.length),X=new Uint32Array(V.length);for(let oe=0;oe<V.length;oe++){const{h:Ze,l:J}=i(V[oe],ie);[Z[oe],X[oe]]=[Ze,J]}return[Z,X]}e.split=o;const a=(V,ie)=>BigInt(V>>>0)<<n|BigInt(ie>>>0);e.toBig=a;const c=(V,ie,Z)=>V>>>Z,u=(V,ie,Z)=>V<<32-Z|ie>>>Z,d=(V,ie,Z)=>V>>>Z|ie<<32-Z,p=(V,ie,Z)=>V<<32-Z|ie>>>Z,h=(V,ie,Z)=>V<<64-Z|ie>>>Z-32,m=(V,ie,Z)=>V>>>Z-32|ie<<64-Z,v=(V,ie)=>ie,w=(V,ie)=>V,$=(V,ie,Z)=>V<<Z|ie>>>32-Z,E=(V,ie,Z)=>ie<<Z|V>>>32-Z,k=(V,ie,Z)=>ie<<Z-32|V>>>64-Z,C=(V,ie,Z)=>V<<Z-32|ie>>>64-Z;function M(V,ie,Z,X){const oe=(ie>>>0)+(X>>>0);return{h:V+Z+(oe/2**32|0)|0,l:oe|0}}e.add=M;const B=(V,ie,Z)=>(V>>>0)+(ie>>>0)+(Z>>>0),R=(V,ie,Z,X)=>ie+Z+X+(V/2**32|0)|0,T=(V,ie,Z,X)=>(V>>>0)+(ie>>>0)+(Z>>>0)+(X>>>0),L=(V,ie,Z,X,oe)=>ie+Z+X+oe+(V/2**32|0)|0,H=(V,ie,Z,X,oe)=>(V>>>0)+(ie>>>0)+(Z>>>0)+(X>>>0)+(oe>>>0),W=(V,ie,Z,X,oe,Ze)=>ie+Z+X+oe+Ze+(V/2**32|0)|0,re={fromBig:i,split:o,toBig:e.toBig,shrSH:c,shrSL:u,rotrSH:d,rotrSL:p,rotrBH:h,rotrBL:m,rotr32H:v,rotr32L:w,rotlSH:$,rotlSL:E,rotlBH:k,rotlBL:C,add:M,add3L:B,add3H:R,add4L:T,add4H:L,add5H:W,add5L:H};e.default=re})(f1);Object.defineProperty(xn,"__esModule",{value:!0});xn.sha384=xn.sha512_256=xn.sha512_224=xu=xn.sha512=xn.SHA512=void 0;const Q8=bl,Te=f1,_l=_o,[X8,Y8]=Te.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Mr=new Uint32Array(80),Br=new Uint32Array(80);class wo extends Q8.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:c,Dh:u,Dl:d,Eh:p,El:h,Fh:m,Fl:v,Gh:w,Gl:$,Hh:E,Hl:k}=this;return[t,n,i,o,a,c,u,d,p,h,m,v,w,$,E,k]}set(t,n,i,o,a,c,u,d,p,h,m,v,w,$,E,k){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=c|0,this.Dh=u|0,this.Dl=d|0,this.Eh=p|0,this.El=h|0,this.Fh=m|0,this.Fl=v|0,this.Gh=w|0,this.Gl=$|0,this.Hh=E|0,this.Hl=k|0}process(t,n){for(let B=0;B<16;B++,n+=4)Mr[B]=t.getUint32(n),Br[B]=t.getUint32(n+=4);for(let B=16;B<80;B++){const R=Mr[B-15]|0,T=Br[B-15]|0,L=Te.default.rotrSH(R,T,1)^Te.default.rotrSH(R,T,8)^Te.default.shrSH(R,T,7),H=Te.default.rotrSL(R,T,1)^Te.default.rotrSL(R,T,8)^Te.default.shrSL(R,T,7),W=Mr[B-2]|0,re=Br[B-2]|0,V=Te.default.rotrSH(W,re,19)^Te.default.rotrBH(W,re,61)^Te.default.shrSH(W,re,6),ie=Te.default.rotrSL(W,re,19)^Te.default.rotrBL(W,re,61)^Te.default.shrSL(W,re,6),Z=Te.default.add4L(H,ie,Br[B-7],Br[B-16]),X=Te.default.add4H(Z,L,V,Mr[B-7],Mr[B-16]);Mr[B]=X|0,Br[B]=Z|0}let{Ah:i,Al:o,Bh:a,Bl:c,Ch:u,Cl:d,Dh:p,Dl:h,Eh:m,El:v,Fh:w,Fl:$,Gh:E,Gl:k,Hh:C,Hl:M}=this;for(let B=0;B<80;B++){const R=Te.default.rotrSH(m,v,14)^Te.default.rotrSH(m,v,18)^Te.default.rotrBH(m,v,41),T=Te.default.rotrSL(m,v,14)^Te.default.rotrSL(m,v,18)^Te.default.rotrBL(m,v,41),L=m&w^~m&E,H=v&$^~v&k,W=Te.default.add5L(M,T,H,Y8[B],Br[B]),re=Te.default.add5H(W,C,R,L,X8[B],Mr[B]),V=W|0,ie=Te.default.rotrSH(i,o,28)^Te.default.rotrBH(i,o,34)^Te.default.rotrBH(i,o,39),Z=Te.default.rotrSL(i,o,28)^Te.default.rotrBL(i,o,34)^Te.default.rotrBL(i,o,39),X=i&a^i&u^a&u,oe=o&c^o&d^c&d;C=E|0,M=k|0,E=w|0,k=$|0,w=m|0,$=v|0,{h:m,l:v}=Te.default.add(p|0,h|0,re|0,V|0),p=u|0,h=d|0,u=a|0,d=c|0,a=i|0,c=o|0;const Ze=Te.default.add3L(V,Z,oe);i=Te.default.add3H(Ze,re,ie,X),o=Ze|0}({h:i,l:o}=Te.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l:c}=Te.default.add(this.Bh|0,this.Bl|0,a|0,c|0),{h:u,l:d}=Te.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:p,l:h}=Te.default.add(this.Dh|0,this.Dl|0,p|0,h|0),{h:m,l:v}=Te.default.add(this.Eh|0,this.El|0,m|0,v|0),{h:w,l:$}=Te.default.add(this.Fh|0,this.Fl|0,w|0,$|0),{h:E,l:k}=Te.default.add(this.Gh|0,this.Gl|0,E|0,k|0),{h:C,l:M}=Te.default.add(this.Hh|0,this.Hl|0,C|0,M|0),this.set(i,o,a,c,u,d,p,h,m,v,w,$,E,k,C,M)}roundClean(){Mr.fill(0),Br.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}xn.SHA512=wo;class J8 extends wo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class e7 extends wo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class t7 extends wo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var xu=xn.sha512=(0,_l.wrapConstructor)(()=>new wo);xn.sha512_224=(0,_l.wrapConstructor)(()=>new J8);xn.sha512_256=(0,_l.wrapConstructor)(()=>new e7);xn.sha384=(0,_l.wrapConstructor)(()=>new t7);const n7=fl(C8),r7=fl(H8);Object.defineProperty(an,"__esModule",{value:!0});var h1=an.mnemonicToSeedSync=an.mnemonicToSeed=$1=an.validateMnemonic=an.entropyToMnemonic=an.mnemonicToEntropy=b1=an.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const p1=Et,g1=es,i7=K8,m1=xn,s7=n7,wa=r7,o7=e=>e[0]==="あいこくしん";function v1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function sd(e){const t=v1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function y1(e){p1.default.bytes(e,16,20,24,28,32)}function a7(e,t=128){if(p1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return x1((0,s7.randomBytes)(t/8),e)}var b1=an.generateMnemonic=a7;const l7=e=>{const t=8-e.length/4;return new Uint8Array([(0,i7.sha256)(e)[0]>>t<<t])};function _1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),wa.utils.chain(wa.utils.checksum(1,l7),wa.utils.radix2(11,!0),wa.utils.alphabet(e))}function w1(e,t){const{words:n}=sd(e),i=_1(t).decode(n);return y1(i),i}an.mnemonicToEntropy=w1;function x1(e,t){return y1(e),_1(t).encode(e).join(o7(t)?"　":" ")}an.entropyToMnemonic=x1;function c7(e,t){try{w1(e,t)}catch{return!1}return!0}var $1=an.validateMnemonic=c7;const k1=e=>v1(`mnemonic${e}`);function u7(e,t=""){return(0,g1.pbkdf2Async)(m1.sha512,sd(e).nfkd,k1(t),{c:2048,dkLen:64})}an.mnemonicToSeed=u7;function d7(e,t=""){return(0,g1.pbkdf2)(m1.sha512,sd(e).nfkd,k1(t),{c:2048,dkLen:64})}h1=an.mnemonicToSeedSync=d7;class C1 extends ed{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,hi.hash(t);const i=yo(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let c=0;c<a.length;c++)a[c]^=54;this.iHash.update(a),this.oHash=t.create();for(let c=0;c<a.length;c++)a[c]^=106;this.oHash.update(a),a.fill(0)}update(t){return hi.exists(this),this.iHash.update(t),this}digestInto(t){hi.exists(this),hi.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:c,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=c,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const to=(e,t,n)=>new C1(e,t).update(n).digest();to.create=(e,t)=>new C1(e,t);const f7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),S1=Uint8Array.from({length:16},(e,t)=>t),h7=S1.map(e=>(9*e+5)%16);let od=[S1],ad=[h7];for(let e=0;e<4;e++)for(let t of[od,ad])t.push(t[e].map(n=>f7[n]));const E1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),p7=od.map((e,t)=>e.map(n=>E1[t][n])),g7=ad.map((e,t)=>e.map(n=>E1[t][n])),m7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),v7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),xa=(e,t)=>e<<t|e>>>32-t;function Fp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const $a=new Uint32Array(16);class y7 extends zg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let w=0;w<16;w++,n+=4)$a[w]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,c=a,u=this.h2|0,d=u,p=this.h3|0,h=p,m=this.h4|0,v=m;for(let w=0;w<5;w++){const $=4-w,E=m7[w],k=v7[w],C=od[w],M=ad[w],B=p7[w],R=g7[w];for(let T=0;T<16;T++){const L=xa(i+Fp(w,a,u,p)+$a[C[T]]+E,B[T])+m|0;i=m,m=p,p=xa(u,10)|0,u=a,a=L}for(let T=0;T<16;T++){const L=xa(o+Fp($,c,d,h)+$a[M[T]]+k,R[T])+v|0;o=v,v=h,h=xa(d,10)|0,d=c,c=L}}this.set(this.h1+u+h|0,this.h2+p+v|0,this.h3+m+o|0,this.h4+i+c|0,this.h0+a+d|0)}roundClean(){$a.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const b7=yl(()=>new y7);Ie.hmacSha256Sync=(e,...t)=>to(yr,e,Ie.concatBytes(...t));const tu=Yg(yr);function Wp(e){return BigInt(`0x${Ug(e)}`)}function _7(e){return Dg(e.toString(16).padStart(64,"0"))}const w7=Ju("Bitcoin seed"),nu={private:76066276,public:76067358},ru=2147483648,x7=e=>b7(yr(e)),$7=e=>gi(e).getUint32(0,!1),ka=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class fi{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||nu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Ie.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Wp(t.privateKey),this.privKeyBytes=_7(this.privKey),this.pubKey=r8(t.privateKey,!0)}else if(t.publicKey)this.pubKey=He.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=x7(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return $7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return tu.encode(this.serialize(this.versions.private,Zs(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return tu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=nu){if(Hi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=to(xu,w7,t);return new fi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=nu){const i=tu.decode(t),o=gi(i),a=o.getUint32(0,!1),c={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new fi({...c,privateKey:u.slice(1)}):new fi({...c,publicKey:u})}static fromJSON(t){return fi.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let c=+a[1];if(!Number.isSafeInteger(c)||c>=ru)throw new Error("Invalid index");a[2]==="'"&&(c+=ru),i=i.deriveChild(c)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ka(t);if(t>=ru){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=Zs(new Uint8Array([0]),u,n)}else n=Zs(this.pubKey,n);const i=to(xu,this.chainCode,n),o=Wp(i.slice(0,32)),a=i.slice(32);if(!Ie.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const c={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=Ie.mod(this.privKey+o,Je.n);if(!Ie.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=u}else{const u=He.fromHex(this.pubKey).add(He.fromPrivateKey(o));if(u.equals(He.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=u.toRawBytes(!0)}return new fi(c)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Hi(t,32),a8(t,this.privKey,{canonical:!0,der:!1})}verify(t,n){if(Hi(t,32),Hi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=pr.fromCompact(n)}catch{return!1}return c8(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Hi(n,33),Zs(ka(t),new Uint8Array([this.depth]),ka(this.parentFingerprint),ka(this.index),this.chainCode,n)}}var k7=Object.defineProperty,Qt=(e,t)=>{for(var n in t)k7(e,n,{get:t[n],enumerable:!0})};function C7(e){return Ie.bytesToHex(vl.getPublicKey(e))}var S7={};Qt(S7,{insertEventIntoAscendingList:()=>T7,insertEventIntoDescendingList:()=>E7,normalizeURL:()=>$u,utf8Decoder:()=>Dr,utf8Encoder:()=>qn});var Dr=new TextDecoder("utf-8"),qn=new TextEncoder;function $u(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function E7(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function T7(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var wt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(wt||{});function A7(e){if(!ld(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function T1(e){let t=yr(qn.encode(A7(e)));return Ie.bytesToHex(t)}var I7=e=>e instanceof Object;function ld(e){if(!I7(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function A1(e){return vl.verifySync(e.sig,T1(e),e.pubkey)}function R7(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,c])=>a===n.slice(1)&&o.indexOf(c)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function O7(e,t){for(let n=0;n<e.length;n++)if(R7(e[n],t))return!0;return!1}var L7={};Qt(L7,{getHex64:()=>wl,getInt:()=>I1,getSubscriptionId:()=>R1,matchEventId:()=>P7,matchEventKind:()=>B7,matchEventPubkey:()=>M7});function wl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function I1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function R1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function P7(e,t){return t===wl(e,"id")}function M7(e,t){return t===wl(e,"pubkey")}function B7(e,t){return t===I1(e,"kind")}var Zp=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function j7(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,c={},u=Zp(),d={},p={},h;async function m(){return h||(h=new Promise((C,M)=>{try{a=new WebSocket(e)}catch(L){M(L)}a.onopen=()=>{u.connect.forEach(L=>L()),C()},a.onerror=()=>{h=void 0,u.error.forEach(L=>L()),M()},a.onclose=async()=>{h=void 0,u.disconnect.forEach(L=>L())};let B=[],R;a.onmessage=L=>{B.push(L.data),R||(R=setInterval(T,0))};function T(){if(B.length===0){clearInterval(R),R=null;return}var L=B.shift();if(!L)return;let H=R1(L);if(H){let W=c[H];if(W&&W.alreadyHaveEvent&&W.alreadyHaveEvent(wl(L,"id"),e))return}try{let W=JSON.parse(L);switch(W[0]){case"EVENT":{let Z=W[1],X=W[2];ld(X)&&c[Z]&&(c[Z].skipVerification||A1(X))&&O7(c[Z].filters,X)&&(c[Z],(d[Z]?.event||[]).forEach(oe=>oe(X)));return}case"COUNT":let re=W[1],V=W[2];c[re]&&(d[re]?.count||[]).forEach(Z=>Z(V));return;case"EOSE":{let Z=W[1];Z in d&&(d[Z].eose.forEach(X=>X()),d[Z].eose=[]);return}case"OK":{let Z=W[1],X=W[2],oe=W[3]||"";Z in p&&(X?p[Z].ok.forEach(Ze=>Ze()):p[Z].failed.forEach(Ze=>Ze(oe)),p[Z].ok=[],p[Z].failed=[]);return}case"NOTICE":let ie=W[1];u.notice.forEach(Z=>Z(ie));return;case"AUTH":{let Z=W[1];u.auth?.forEach(X=>X(Z));return}}}catch{return}}}),h)}function v(){return a?.readyState===1}async function w(){v()||await m()}async function $(C){let M=JSON.stringify(C);if(!(!v()&&(await new Promise(B=>setTimeout(B,1e3)),!v())))try{a.send(M)}catch(B){console.log(B)}}const E=(C,{verb:M="REQ",skipVerification:B=!1,alreadyHaveEvent:R=null,id:T=Math.random().toString().slice(2)}={})=>{let L=T;return c[L]={id:L,filters:C,skipVerification:B,alreadyHaveEvent:R},$([M,L,...C]),{sub:(H,W={})=>E(H||C,{skipVerification:W.skipVerification||B,alreadyHaveEvent:W.alreadyHaveEvent||R,id:L}),unsub:()=>{delete c[L],delete d[L],$(["CLOSE",L])},on:(H,W)=>{d[L]=d[L]||{event:[],count:[],eose:[]},d[L][H].push(W)},off:(H,W)=>{let re=d[L],V=re[H].indexOf(W);V>=0&&re[H].splice(V,1)}}};function k(C,M){if(!C.id)throw new Error(`event ${C} has no id`);let B=C.id;return $([M,C]),{on:(R,T)=>{p[B]=p[B]||{ok:[],failed:[]},p[B][R].push(T)},off:(R,T)=>{let L=p[B];if(!L)return;let H=L[R].indexOf(T);H>=0&&L[R].splice(H,1)}}}return{url:e,sub:E,on:(C,M)=>{u[C].push(M),C==="connect"&&a?.readyState===1&&M()},off:(C,M)=>{let B=u[C].indexOf(M);B!==-1&&u[C].splice(B,1)},list:(C,M)=>new Promise(B=>{let R=E(C,M),T=[],L=setTimeout(()=>{R.unsub(),B(T)},n);R.on("eose",()=>{R.unsub(),clearTimeout(L),B(T)}),R.on("event",H=>{T.push(H)})}),get:(C,M)=>new Promise(B=>{let R=E([C],M),T=setTimeout(()=>{R.unsub(),B(null)},i);R.on("event",L=>{R.unsub(),clearTimeout(T),B(L)})}),count:C=>new Promise(M=>{let B=E(C,{...E,verb:"COUNT"}),R=setTimeout(()=>{B.unsub(),M(null)},o);B.on("count",T=>{B.unsub(),clearTimeout(R),M(T)})}),publish(C){return k(C,"EVENT")},auth(C){return k(C,"AUTH")},connect:w,close(){u=Zp(),d={},p={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var U7=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[$u(t)];n&&n.close()})}async ensureRelay(e){const t=$u(e);this._conn[t]||(this._conn[t]=j7(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,w)=>{if(n?.alreadyHaveEvent?.(v,w))return!0;let $=this._seenOn[v]||new Set;return $.add(w),this._seenOn[v]=$,i.has(v)};let a=[],c=new Set,u=new Set,d=e.length,p=!1,h=setTimeout(()=>{p=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let w;try{w=await this.ensureRelay(v)}catch{E();return}if(!w)return;let $=w.sub(t,o);$.on("event",k=>{i.add(k.id);for(let C of c.values())C(k)}),$.on("eose",()=>{p||E()}),a.push($);function E(){if(d--,d===0){clearTimeout(h);for(let k of u.values())k()}}});let m={sub(v,w){return a.forEach($=>$.sub(v,w)),m},unsub(){a.forEach(v=>v.unsub())},on(v,w){v==="event"?c.add(w):v==="eose"&&u.add(w)},off(v,w){v==="event"?c.delete(w):v==="eose"&&u.delete(w)}};return m}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",c=>{i(c),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",c=>{o.push(c)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(c,u)=>{let d=await n[u],p=()=>a(c);i.set(a,p),d.on(o,p)})},off(o,a){e.forEach(async(c,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},xo={};Qt(xo,{decode:()=>xl,naddrEncode:()=>W7,neventEncode:()=>F7,noteEncode:()=>H7,nprofileEncode:()=>z7,npubEncode:()=>N7,nrelayEncode:()=>Z7,nsecEncode:()=>D7});var ps=5e3;function xl(e){let{prefix:t,words:n}=zt.decode(e,ps),i=new Uint8Array(zt.fromWords(n));switch(t){case"nprofile":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:Ie.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nevent":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:Ie.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[],author:o[2]?.[0]?Ie.bytesToHex(o[2][0]):void 0}}}case"naddr":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Dr.decode(o[0][0]),pubkey:Ie.bytesToHex(o[2][0]),kind:parseInt(Ie.bytesToHex(o[3][0]),16),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nrelay":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Dr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:Ie.bytesToHex(i)};default:throw new Error(`unknown prefix ${t}`)}}function Ca(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1],a=n.slice(2,2+o);n=n.slice(2+o),!(a.length<o)&&(t[i]=t[i]||[],t[i].push(a))}return t}function D7(e){return cd("nsec",e)}function N7(e){return cd("npub",e)}function H7(e){return cd("note",e)}function cd(e,t){let n=Ie.hexToBytes(t),i=zt.toWords(n);return zt.encode(e,i,ps)}function z7(e){let t=$l({0:[Ie.hexToBytes(e.pubkey)],1:(e.relays||[]).map(i=>qn.encode(i))}),n=zt.toWords(t);return zt.encode("nprofile",n,ps)}function F7(e){let t=$l({0:[Ie.hexToBytes(e.id)],1:(e.relays||[]).map(i=>qn.encode(i)),2:e.author?[Ie.hexToBytes(e.author)]:[]}),n=zt.toWords(t);return zt.encode("nevent",n,ps)}function W7(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=$l({0:[qn.encode(e.identifier)],1:(e.relays||[]).map(o=>qn.encode(o)),2:[Ie.hexToBytes(e.pubkey)],3:[new Uint8Array(t)]}),i=zt.toWords(n);return zt.encode("naddr",i,ps)}function Z7(e){let t=$l({0:[qn.encode(e)]}),n=zt.toWords(t);return zt.encode("nrelay",n,ps)}function $l(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),Ie.concatBytes(...t)}var q7={};Qt(q7,{decrypt:()=>V7,encrypt:()=>K7});async function K7(e,t,n){const i=Tg(e,"02"+t),o=O1(i);let a=Uint8Array.from(Hg(16)),c=qn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,c),p=Ji.encode(new Uint8Array(d)),h=Ji.encode(new Uint8Array(a.buffer));return`${p}?iv=${h}`}async function V7(e,t,n){let[i,o]=n.split("?iv="),a=Tg(e,"02"+t),c=O1(a),u=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),d=Ji.decode(i),p=Ji.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:p},u,d);return Dr.decode(h)}function O1(e){return e.slice(1,33)}var L1={};Qt(L1,{queryProfile:()=>X7,searchDomain:()=>Q7,useFetchImplementation:()=>G7});var kl;try{kl=fetch}catch{}function G7(e){kl=e}async function Q7(e,t=""){try{return(await(await kl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function X7(e){let[t,n]=e.split("@");if(n||(n=t,t="_"),!t.match(/^[A-Za-z0-9-_.]+$/)||!n.includes("."))return null;let i;try{i=await(await kl(`https://${n}/.well-known/nostr.json?name=${t}`)).json()}catch{return null}if(!i?.names?.[t])return null;let o=i.names[t],a=i.relays?.[o]||[];return{pubkey:o,relays:a}}var Y7={};Qt(Y7,{generateSeedWords:()=>e9,privateKeyFromSeedWords:()=>J7,validateWords:()=>t9});function J7(e,t){let i=fi.fromMasterSeed(h1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return Ie.bytesToHex(i)}function e9(){return b1(rd)}function t9(e){return $1(e,rd)}var n9={};Qt(n9,{parse:()=>r9});function r9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,c,u,d]=o,p={id:c,relays:u?[u]:[]},h=i===0,m=i===n.length-1;if(d==="root"){t.root=p;continue}if(d==="reply"){t.reply=p;continue}if(d==="mention"){t.mentions.push(p);continue}if(h){t.root=p;continue}if(m){t.reply=p;continue}t.mentions.push(p)}return t}var i9={};Qt(i9,{getPow:()=>s9});function s9(e){return o9(Ie.hexToBytes(e))}function o9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=a9(e[n]),t+=i,i===8);n++);return t}function a9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var l9={};Qt(l9,{BECH32_REGEX:()=>P1,NOSTR_URI_REGEX:()=>Cl,parse:()=>u9,test:()=>c9});var P1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/,Cl=new RegExp(`nostr:(${P1.source})`);function c9(e){return typeof e=="string"&&new RegExp(`^${Cl.source}$`).test(e)}function u9(e){const t=e.match(new RegExp(`^${Cl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:xl(t[1])}}var d9={};Qt(d9,{createDelegation:()=>f9,getDelegator:()=>h9});function f9(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=yr(qn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=Ie.bytesToHex(vl.signSync(o,e));return{from:C7(e),to:t.pubkey,cond:i,sig:a}}function h9(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,p,h]=a[u].split(/\b/);if(!(d==="kind"&&p==="="&&e.kind===parseInt(h))){if(d==="created_at"&&p==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&p===">"&&e.created_at>parseInt(h))continue;return null}}let c=yr(qn.encode(`nostr:delegation:${e.pubkey}:${i}`));return vl.verifySync(o,c,n)?n:null}var p9={};Qt(p9,{matchAll:()=>g9,regex:()=>ud,replaceAll:()=>m9});var ud=()=>new RegExp(`\\b${Cl.source}\\b`,"g");function*g9(e){const t=e.matchAll(ud());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:xl(o),start:n.index,end:n.index+i.length}}}function m9(e,t){return e.replaceAll(ud(),(n,i)=>t({uri:n,value:i,decoded:xl(i)}))}var v9={};Qt(v9,{useFetchImplementation:()=>y9,validateGithub:()=>b9});var dd;try{dd=fetch}catch{}function y9(e){dd=e}async function b9(e,t,n){try{return await(await dd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var _9={};Qt(_9,{authenticate:()=>w9});var w9=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,c)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),c(d)})})},x9={};Qt(x9,{getZapEndpoint:()=>k9,makeZapReceipt:()=>E9,makeZapRequest:()=>C9,useFetchImplementation:()=>$9,validateZapRequest:()=>S9});var fd;try{fd=fetch}catch{}function $9(e){fd=e}async function k9(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:c}=zt.decode(n,1e3),u=zt.fromWords(c);t=Dr.decode(u)}else if(i){let[c,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${c}`}else return null;let a=await(await fd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function C9({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function S9(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!ld(t))return"Zap request is not a valid Nostr event.";if(!A1(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,c])=>a==="p"&&c);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,c])=>a==="e"&&c);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,c])=>a==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function E9({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),c={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&c.tags.push(["preimage",t]),c}Ie.hmacSha256Sync=(e,...t)=>to(yr,e,Ie.concatBytes(...t));Ie.sha256Sync=(...e)=>yr(Ie.concatBytes(...e));const T9=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),M1=(e={})=>(()=>{const t=T9();return Xe(t,e,!0,!0),t})(),A9=P('<button class="text-blue-500 underline">'),{noteEncode:I9,neventEncode:R9}=xo,O9=e=>{try{return I9(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},L9=e=>{try{return R9({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},no=e=>(()=>{const t=A9();return I(t,_(le,{get when(){return e.kind==null||e.kind===wt.Text},get fallback(){return L9(e.eventId)},get children(){return O9(e.eventId)}})),t})(),P9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],B1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],M9=[...B1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],B9=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],j9=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},gs=()=>({id:j9(),width:"medium"}),j1=e=>({...gs(),columnType:"Following",...e}),U1=e=>({...gs(),columnType:"Notification",...e}),U9=e=>({...gs(),columnType:"Relays",...e}),D1=()=>U9({name:"日本語",relayUrls:B1,contentFilter:{filterType:"Regex",regex:"[\\p{scx=Hiragana}\\p{scx=Katakana}]",flag:"u"}}),N1=e=>({...gs(),columnType:"Posts",...e}),H1=e=>({...gs(),columnType:"Reactions",...e}),hd=e=>({...gs(),columnType:"Search",...e});var We;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const c of o)a[c]=c;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),c={};for(const u of a)c[u]=o[u];return e.objectValues(c)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const c in o)Object.prototype.hasOwnProperty.call(o,c)&&a.push(c);return a},e.find=(o,a)=>{for(const c of o)if(a(c))return c},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(c=>typeof c=="string"?`'${c}'`:c).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(We||(We={}));var ku;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(ku||(ku={}));const ee=We.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Nr=e=>{switch(typeof e){case"undefined":return ee.undefined;case"string":return ee.string;case"number":return isNaN(e)?ee.nan:ee.number;case"boolean":return ee.boolean;case"function":return ee.function;case"bigint":return ee.bigint;case"symbol":return ee.symbol;case"object":return Array.isArray(e)?ee.array:e===null?ee.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?ee.promise:typeof Map<"u"&&e instanceof Map?ee.map:typeof Set<"u"&&e instanceof Set?ee.set:typeof Date<"u"&&e instanceof Date?ee.date:ee.object;default:return ee.unknown}},q=We.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),D9=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Mn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const c of a.issues)if(c.code==="invalid_union")c.unionErrors.map(o);else if(c.code==="invalid_return_type")o(c.returnTypeError);else if(c.code==="invalid_arguments")o(c.argumentsError);else if(c.path.length===0)i._errors.push(n(c));else{let u=i,d=0;for(;d<c.path.length;){const p=c.path[d];d===c.path.length-1?(u[p]=u[p]||{_errors:[]},u[p]._errors.push(n(c))):u[p]=u[p]||{_errors:[]},u=u[p],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,We.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Mn.create=e=>new Mn(e);const ro=(e,t)=>{let n;switch(e.code){case q.invalid_type:e.received===ee.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case q.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,We.jsonStringifyReplacer)}`;break;case q.unrecognized_keys:n=`Unrecognized key(s) in object: ${We.joinValues(e.keys,", ")}`;break;case q.invalid_union:n="Invalid input";break;case q.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${We.joinValues(e.options)}`;break;case q.invalid_enum_value:n=`Invalid enum value. Expected ${We.joinValues(e.options)}, received '${e.received}'`;break;case q.invalid_arguments:n="Invalid function arguments";break;case q.invalid_return_type:n="Invalid function return type";break;case q.invalid_date:n="Invalid date";break;case q.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:We.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case q.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case q.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case q.custom:n="Invalid input";break;case q.invalid_intersection_types:n="Intersection results could not be merged";break;case q.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case q.not_finite:n="Number must be finite";break;default:n=t.defaultError,We.assertNever(e)}return{message:n}};let z1=ro;function N9(e){z1=e}function qa(){return z1}const Ka=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],c={...o,path:a};let u="";const d=i.filter(p=>!!p).slice().reverse();for(const p of d)u=p(c,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},H9=[];function ne(e,t){const n=Ka({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,qa(),ro].filter(i=>!!i)});e.common.issues.push(n)}class Bt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return we;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Bt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:c}=o;if(a.status==="aborted"||c.status==="aborted")return we;a.status==="dirty"&&t.dirty(),c.status==="dirty"&&t.dirty(),(typeof c.value<"u"||o.alwaysSet)&&(i[a.value]=c.value)}return{status:t.value,value:i}}}const we=Object.freeze({status:"aborted"}),F1=e=>({status:"dirty",value:e}),Ft=e=>({status:"valid",value:e}),Cu=e=>e.status==="aborted",Su=e=>e.status==="dirty",Va=e=>e.status==="valid",Ga=e=>typeof Promise<"u"&&e instanceof Promise;var de;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(de||(de={}));class Kn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const qp=(e,t)=>{if(Va(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Mn(e.common.issues);return this._error=n,this._error}}};function Se(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(c,u)=>c.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Re{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Nr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Nr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Bt,ctx:{common:t.parent.common,data:t.data,parsedType:Nr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Ga(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Nr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return qp(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Nr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Ga(o)?o:Promise.resolve(o));return qp(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const c=t(o),u=()=>a.addIssue({code:q.custom,...i(o)});return typeof Promise<"u"&&c instanceof Promise?c.then(d=>d?!0:(u(),!1)):c?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new jn({schema:this,typeName:me.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return gr.create(this,this._def)}nullable(){return _i.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Bn.create(this,this._def)}promise(){return ns.create(this,this._def)}or(t){return ao.create([this,t],this._def)}and(t){return lo.create(this,t,this._def)}transform(t){return new jn({...Se(this._def),schema:this,typeName:me.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new po({...Se(this._def),innerType:this,defaultValue:n,typeName:me.ZodDefault})}brand(){return new Z1({typeName:me.ZodBranded,type:this,...Se(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Ja({...Se(this._def),innerType:this,catchValue:n,typeName:me.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return $o.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const z9=/^c[^\s-]{8,}$/i,F9=/^[a-z][a-z0-9]*$/,W9=/[0-9A-HJKMNP-TV-Z]{26}/,Z9=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,q9=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,K9=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,V9=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,G9=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Q9=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function X9(e,t){return!!((t==="v4"||!t)&&V9.test(e)||(t==="v6"||!t)&&G9.test(e))}class Ln extends Re{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:q.invalid_string,...de.errToObj(i)}),this.nonempty=t=>this.min(1,de.errToObj(t)),this.trim=()=>new Ln({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Ln({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Ln({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==ee.string){const a=this._getOrReturnCtx(t);return ne(a,{code:q.invalid_type,expected:ee.string,received:a.parsedType}),we}const i=new Bt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:q.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:q.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const c=t.data.length>a.value,u=t.data.length<a.value;(c||u)&&(o=this._getOrReturnCtx(t,o),c?ne(o,{code:q.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ne(o,{code:q.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")q9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"email",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")K9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"emoji",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")Z9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"uuid",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")z9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"cuid",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")F9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"cuid2",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")W9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"ulid",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ne(o,{validation:"url",code:q.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"regex",code:q.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ne(o,{code:q.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ne(o,{code:q.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ne(o,{code:q.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?Q9(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{code:q.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?X9(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"ip",code:q.invalid_string,message:a.message}),i.dirty()):We.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Ln({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...de.errToObj(t)})}url(t){return this._addCheck({kind:"url",...de.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...de.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...de.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...de.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...de.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...de.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...de.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...de.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...de.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...de.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...de.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...de.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...de.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...de.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...de.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Ln.create=e=>{var t;return new Ln({checks:[],typeName:me.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};function Y9(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),c=parseInt(t.toFixed(o).replace(".",""));return a%c/Math.pow(10,o)}class Kr extends Re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==ee.number){const a=this._getOrReturnCtx(t);return ne(a,{code:q.invalid_type,expected:ee.number,received:a.parsedType}),we}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="int"?We.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{code:q.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?Y9(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{code:q.not_finite,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,de.toString(n))}gt(t,n){return this.setLimit("min",t,!1,de.toString(n))}lte(t,n){return this.setLimit("max",t,!0,de.toString(n))}lt(t,n){return this.setLimit("max",t,!1,de.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:de.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:de.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:de.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:de.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:de.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:de.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:de.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:de.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:de.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:de.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&We.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Kr.create=e=>new Kr({checks:[],typeName:me.ZodNumber,coerce:e?.coerce||!1,...Se(e)});class Vr extends Re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==ee.bigint){const a=this._getOrReturnCtx(t);return ne(a,{code:q.invalid_type,expected:ee.bigint,received:a.parsedType}),we}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,de.toString(n))}gt(t,n){return this.setLimit("min",t,!1,de.toString(n))}lte(t,n){return this.setLimit("max",t,!0,de.toString(n))}lt(t,n){return this.setLimit("max",t,!1,de.toString(n))}setLimit(t,n,i,o){return new Vr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:de.toString(o)}]})}_addCheck(t){return new Vr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:de.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:de.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:de.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:de.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:de.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Vr.create=e=>{var t;return new Vr({checks:[],typeName:me.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};class io extends Re{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==ee.boolean){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.boolean,received:i.parsedType}),we}return Ft(t.data)}}io.create=e=>new io({typeName:me.ZodBoolean,coerce:e?.coerce||!1,...Se(e)});class yi extends Re{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==ee.date){const a=this._getOrReturnCtx(t);return ne(a,{code:q.invalid_type,expected:ee.date,received:a.parsedType}),we}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ne(a,{code:q.invalid_date}),we}const i=new Bt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:q.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:q.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):We.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new yi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:de.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:de.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}yi.create=e=>new yi({checks:[],coerce:e?.coerce||!1,typeName:me.ZodDate,...Se(e)});class Qa extends Re{_parse(t){if(this._getType(t)!==ee.symbol){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.symbol,received:i.parsedType}),we}return Ft(t.data)}}Qa.create=e=>new Qa({typeName:me.ZodSymbol,...Se(e)});class so extends Re{_parse(t){if(this._getType(t)!==ee.undefined){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.undefined,received:i.parsedType}),we}return Ft(t.data)}}so.create=e=>new so({typeName:me.ZodUndefined,...Se(e)});class oo extends Re{_parse(t){if(this._getType(t)!==ee.null){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.null,received:i.parsedType}),we}return Ft(t.data)}}oo.create=e=>new oo({typeName:me.ZodNull,...Se(e)});class ts extends Re{constructor(){super(...arguments),this._any=!0}_parse(t){return Ft(t.data)}}ts.create=e=>new ts({typeName:me.ZodAny,...Se(e)});class mi extends Re{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Ft(t.data)}}mi.create=e=>new mi({typeName:me.ZodUnknown,...Se(e)});class vr extends Re{_parse(t){const n=this._getOrReturnCtx(t);return ne(n,{code:q.invalid_type,expected:ee.never,received:n.parsedType}),we}}vr.create=e=>new vr({typeName:me.ZodNever,...Se(e)});class Xa extends Re{_parse(t){if(this._getType(t)!==ee.undefined){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.void,received:i.parsedType}),we}return Ft(t.data)}}Xa.create=e=>new Xa({typeName:me.ZodVoid,...Se(e)});class Bn extends Re{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==ee.array)return ne(n,{code:q.invalid_type,expected:ee.array,received:n.parsedType}),we;if(o.exactLength!==null){const c=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(c||u)&&(ne(n,{code:c?q.too_big:q.too_small,minimum:u?o.exactLength.value:void 0,maximum:c?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ne(n,{code:q.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ne(n,{code:q.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((c,u)=>o.type._parseAsync(new Kn(n,c,n.path,u)))).then(c=>Bt.mergeArray(i,c));const a=[...n.data].map((c,u)=>o.type._parseSync(new Kn(n,c,n.path,u)));return Bt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new Bn({...this._def,minLength:{value:t,message:de.toString(n)}})}max(t,n){return new Bn({...this._def,maxLength:{value:t,message:de.toString(n)}})}length(t,n){return new Bn({...this._def,exactLength:{value:t,message:de.toString(n)}})}nonempty(t){return this.min(1,t)}}Bn.create=(e,t)=>new Bn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:me.ZodArray,...Se(t)});function zi(e){if(e instanceof ft){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=gr.create(zi(i))}return new ft({...e._def,shape:()=>t})}else return e instanceof Bn?new Bn({...e._def,type:zi(e.element)}):e instanceof gr?gr.create(zi(e.unwrap())):e instanceof _i?_i.create(zi(e.unwrap())):e instanceof Vn?Vn.create(e.items.map(t=>zi(t))):e}class ft extends Re{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=We.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==ee.object){const p=this._getOrReturnCtx(t);return ne(p,{code:q.invalid_type,expected:ee.object,received:p.parsedType}),we}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:c}=this._getCached(),u=[];if(!(this._def.catchall instanceof vr&&this._def.unknownKeys==="strip"))for(const p in o.data)c.includes(p)||u.push(p);const d=[];for(const p of c){const h=a[p],m=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new Kn(o,m,o.path,p)),alwaysSet:p in o.data})}if(this._def.catchall instanceof vr){const p=this._def.unknownKeys;if(p==="passthrough")for(const h of u)d.push({key:{status:"valid",value:h},value:{status:"valid",value:o.data[h]}});else if(p==="strict")u.length>0&&(ne(o,{code:q.unrecognized_keys,keys:u}),i.dirty());else if(p!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const p=this._def.catchall;for(const h of u){const m=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new Kn(o,m,o.path,h)),alwaysSet:h in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const p=[];for(const h of d){const m=await h.key;p.push({key:m,value:await h.value,alwaysSet:h.alwaysSet})}return p}).then(p=>Bt.mergeObjectSync(i,p)):Bt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return de.errToObj,new ft({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,c,u;const d=(c=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&c!==void 0?c:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=de.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ft({...this._def,unknownKeys:"strip"})}passthrough(){return new ft({...this._def,unknownKeys:"passthrough"})}extend(t){return new ft({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ft({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:me.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new ft({...this._def,catchall:t})}pick(t){const n={};return We.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ft({...this._def,shape:()=>n})}omit(t){const n={};return We.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new ft({...this._def,shape:()=>n})}deepPartial(){return zi(this)}partial(t){const n={};return We.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new ft({...this._def,shape:()=>n})}required(t){const n={};return We.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof gr;)a=a._def.innerType;n[i]=a}}),new ft({...this._def,shape:()=>n})}keyof(){return W1(We.objectKeys(this.shape))}}ft.create=(e,t)=>new ft({shape:()=>e,unknownKeys:"strip",catchall:vr.create(),typeName:me.ZodObject,...Se(t)});ft.strictCreate=(e,t)=>new ft({shape:()=>e,unknownKeys:"strict",catchall:vr.create(),typeName:me.ZodObject,...Se(t)});ft.lazycreate=(e,t)=>new ft({shape:e,unknownKeys:"strip",catchall:vr.create(),typeName:me.ZodObject,...Se(t)});class ao extends Re{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const c=a.map(u=>new Mn(u.ctx.common.issues));return ne(n,{code:q.invalid_union,unionErrors:c}),we}if(n.common.async)return Promise.all(i.map(async a=>{const c={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:c}),ctx:c}})).then(o);{let a;const c=[];for(const d of i){const p={...n,common:{...n.common,issues:[]},parent:null},h=d._parseSync({data:n.data,path:n.path,parent:p});if(h.status==="valid")return h;h.status==="dirty"&&!a&&(a={result:h,ctx:p}),p.common.issues.length&&c.push(p.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=c.map(d=>new Mn(d));return ne(n,{code:q.invalid_union,unionErrors:u}),we}}get options(){return this._def.options}}ao.create=(e,t)=>new ao({options:e,typeName:me.ZodUnion,...Se(t)});const La=e=>e instanceof uo?La(e.schema):e instanceof jn?La(e.innerType()):e instanceof fo?[e.value]:e instanceof Gr?e.options:e instanceof ho?Object.keys(e.enum):e instanceof po?La(e._def.innerType):e instanceof so?[void 0]:e instanceof oo?[null]:null;class Sl extends Re{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ee.object)return ne(n,{code:q.invalid_type,expected:ee.object,received:n.parsedType}),we;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ne(n,{code:q.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),we)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const c=La(a.shape[t]);if(!c)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of c){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new Sl({typeName:me.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Se(i)})}}function Eu(e,t){const n=Nr(e),i=Nr(t);if(e===t)return{valid:!0,data:e};if(n===ee.object&&i===ee.object){const o=We.objectKeys(t),a=We.objectKeys(e).filter(u=>o.indexOf(u)!==-1),c={...e,...t};for(const u of a){const d=Eu(e[u],t[u]);if(!d.valid)return{valid:!1};c[u]=d.data}return{valid:!0,data:c}}else if(n===ee.array&&i===ee.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const c=e[a],u=t[a],d=Eu(c,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===ee.date&&i===ee.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class lo extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,c)=>{if(Cu(a)||Cu(c))return we;const u=Eu(a.value,c.value);return u.valid?((Su(a)||Su(c))&&n.dirty(),{status:n.value,value:u.data}):(ne(i,{code:q.invalid_intersection_types}),we)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,c])=>o(a,c)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}lo.create=(e,t,n)=>new lo({left:e,right:t,typeName:me.ZodIntersection,...Se(n)});class Vn extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ee.array)return ne(i,{code:q.invalid_type,expected:ee.array,received:i.parsedType}),we;if(i.data.length<this._def.items.length)return ne(i,{code:q.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),we;!this._def.rest&&i.data.length>this._def.items.length&&(ne(i,{code:q.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((c,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Kn(i,c,i.path,u)):null}).filter(c=>!!c);return i.common.async?Promise.all(a).then(c=>Bt.mergeArray(n,c)):Bt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Vn({...this._def,rest:t})}}Vn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Vn({items:e,typeName:me.ZodTuple,rest:null,...Se(t)})};class co extends Re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ee.object)return ne(i,{code:q.invalid_type,expected:ee.object,received:i.parsedType}),we;const o=[],a=this._def.keyType,c=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Kn(i,u,i.path,u)),value:c._parse(new Kn(i,i.data[u],i.path,u))});return i.common.async?Bt.mergeObjectAsync(n,o):Bt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Re?new co({keyType:t,valueType:n,typeName:me.ZodRecord,...Se(i)}):new co({keyType:Ln.create(),valueType:t,typeName:me.ZodRecord,...Se(n)})}}class Ya extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ee.map)return ne(i,{code:q.invalid_type,expected:ee.map,received:i.parsedType}),we;const o=this._def.keyType,a=this._def.valueType,c=[...i.data.entries()].map(([u,d],p)=>({key:o._parse(new Kn(i,u,i.path,[p,"key"])),value:a._parse(new Kn(i,d,i.path,[p,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of c){const p=await d.key,h=await d.value;if(p.status==="aborted"||h.status==="aborted")return we;(p.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(p.value,h.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of c){const p=d.key,h=d.value;if(p.status==="aborted"||h.status==="aborted")return we;(p.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(p.value,h.value)}return{status:n.value,value:u}}}}Ya.create=(e,t,n)=>new Ya({valueType:t,keyType:e,typeName:me.ZodMap,...Se(n)});class bi extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ee.set)return ne(i,{code:q.invalid_type,expected:ee.set,received:i.parsedType}),we;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ne(i,{code:q.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ne(i,{code:q.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function c(d){const p=new Set;for(const h of d){if(h.status==="aborted")return we;h.status==="dirty"&&n.dirty(),p.add(h.value)}return{status:n.value,value:p}}const u=[...i.data.values()].map((d,p)=>a._parse(new Kn(i,d,i.path,p)));return i.common.async?Promise.all(u).then(d=>c(d)):c(u)}min(t,n){return new bi({...this._def,minSize:{value:t,message:de.toString(n)}})}max(t,n){return new bi({...this._def,maxSize:{value:t,message:de.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}bi.create=(e,t)=>new bi({valueType:e,minSize:null,maxSize:null,typeName:me.ZodSet,...Se(t)});class Zi extends Re{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ee.function)return ne(n,{code:q.invalid_type,expected:ee.function,received:n.parsedType}),we;function i(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,qa(),ro].filter(p=>!!p),issueData:{code:q.invalid_arguments,argumentsError:d}})}function o(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,qa(),ro].filter(p=>!!p),issueData:{code:q.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},c=n.data;return this._def.returns instanceof ns?Ft(async(...u)=>{const d=new Mn([]),p=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),h=await c(...p);return await this._def.returns._def.type.parseAsync(h,a).catch(v=>{throw d.addIssue(o(h,v)),d})}):Ft((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Mn([i(u,d.error)]);const p=c(...d.data),h=this._def.returns.safeParse(p,a);if(!h.success)throw new Mn([o(p,h.error)]);return h.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Zi({...this._def,args:Vn.create(t).rest(mi.create())})}returns(t){return new Zi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Zi({args:t||Vn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:me.ZodFunction,...Se(i)})}}class uo extends Re{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}uo.create=(e,t)=>new uo({getter:e,typeName:me.ZodLazy,...Se(t)});class fo extends Re{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ne(n,{received:n.data,code:q.invalid_literal,expected:this._def.value}),we}return{status:"valid",value:t.data}}get value(){return this._def.value}}fo.create=(e,t)=>new fo({value:e,typeName:me.ZodLiteral,...Se(t)});function W1(e,t){return new Gr({values:e,typeName:me.ZodEnum,...Se(t)})}class Gr extends Re{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ne(n,{expected:We.joinValues(i),received:n.parsedType,code:q.invalid_type}),we}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ne(n,{received:n.data,code:q.invalid_enum_value,options:i}),we}return Ft(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Gr.create(t)}exclude(t){return Gr.create(this.options.filter(n=>!t.includes(n)))}}Gr.create=W1;class ho extends Re{_parse(t){const n=We.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==ee.string&&i.parsedType!==ee.number){const o=We.objectValues(n);return ne(i,{expected:We.joinValues(o),received:i.parsedType,code:q.invalid_type}),we}if(n.indexOf(t.data)===-1){const o=We.objectValues(n);return ne(i,{received:i.data,code:q.invalid_enum_value,options:o}),we}return Ft(t.data)}get enum(){return this._def.values}}ho.create=(e,t)=>new ho({values:e,typeName:me.ZodNativeEnum,...Se(t)});class ns extends Re{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ee.promise&&n.common.async===!1)return ne(n,{code:q.invalid_type,expected:ee.promise,received:n.parsedType}),we;const i=n.parsedType===ee.promise?n.data:Promise.resolve(n.data);return Ft(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ns.create=(e,t)=>new ns({type:e,typeName:me.ZodPromise,...Se(t)});class jn extends Re{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===me.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const c=o.transform(i.data);return i.common.async?Promise.resolve(c).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:c,path:i.path,parent:i})}const a={addIssue:c=>{ne(i,c),c.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const c=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?we:(u.status==="dirty"&&n.dirty(),c(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?we:(u.status==="dirty"&&n.dirty(),c(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Va(c))return c;const u=o.transform(c.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>Va(c)?Promise.resolve(o.transform(c.value,a)).then(u=>({status:n.value,value:u})):c);We.assertNever(o)}}jn.create=(e,t,n)=>new jn({schema:e,typeName:me.ZodEffects,effect:t,...Se(n)});jn.createWithPreprocess=(e,t,n)=>new jn({schema:t,effect:{type:"preprocess",transform:e},typeName:me.ZodEffects,...Se(n)});class gr extends Re{_parse(t){return this._getType(t)===ee.undefined?Ft(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}gr.create=(e,t)=>new gr({innerType:e,typeName:me.ZodOptional,...Se(t)});class _i extends Re{_parse(t){return this._getType(t)===ee.null?Ft(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}_i.create=(e,t)=>new _i({innerType:e,typeName:me.ZodNullable,...Se(t)});class po extends Re{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===ee.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}po.create=(e,t)=>new po({innerType:e,typeName:me.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Se(t)});class Ja extends Re{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Ga(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Ja.create=(e,t)=>new Ja({innerType:e,typeName:me.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Se(t)});class el extends Re{_parse(t){if(this._getType(t)!==ee.nan){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.nan,received:i.parsedType}),we}return{status:"valid",value:t.data}}}el.create=e=>new el({typeName:me.ZodNaN,...Se(e)});const J9=Symbol("zod_brand");class Z1 extends Re{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class $o extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?we:a.status==="dirty"?(n.dirty(),F1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?we:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new $o({in:t,out:n,typeName:me.ZodPipeline})}}const q1=(e,t={},n)=>e?ts.create().superRefine((i,o)=>{var a,c;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(c=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&c!==void 0?c:!0,p=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...p,fatal:d})}}):ts.create(),ek={object:ft.lazycreate};var me;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(me||(me={}));const tk=(e,t={message:`Input not instance of ${e.name}`})=>q1(n=>n instanceof e,t),K1=Ln.create,V1=Kr.create,nk=el.create,rk=Vr.create,G1=io.create,ik=yi.create,sk=Qa.create,ok=so.create,ak=oo.create,lk=ts.create,ck=mi.create,uk=vr.create,dk=Xa.create,fk=Bn.create,hk=ft.create,pk=ft.strictCreate,gk=ao.create,mk=Sl.create,vk=lo.create,yk=Vn.create,bk=co.create,_k=Ya.create,wk=bi.create,xk=Zi.create,$k=uo.create,kk=fo.create,Ck=Gr.create,Sk=ho.create,Ek=ns.create,Kp=jn.create,Tk=gr.create,Ak=_i.create,Ik=jn.createWithPreprocess,Rk=$o.create,Ok=()=>K1().optional(),Lk=()=>V1().optional(),Pk=()=>G1().optional(),Mk={string:e=>Ln.create({...e,coerce:!0}),number:e=>Kr.create({...e,coerce:!0}),boolean:e=>io.create({...e,coerce:!0}),bigint:e=>Vr.create({...e,coerce:!0}),date:e=>yi.create({...e,coerce:!0})},Bk=we;var Sa=Object.freeze({__proto__:null,defaultErrorMap:ro,setErrorMap:N9,getErrorMap:qa,makeIssue:Ka,EMPTY_PATH:H9,addIssueToContext:ne,ParseStatus:Bt,INVALID:we,DIRTY:F1,OK:Ft,isAborted:Cu,isDirty:Su,isValid:Va,isAsync:Ga,get util(){return We},get objectUtil(){return ku},ZodParsedType:ee,getParsedType:Nr,ZodType:Re,ZodString:Ln,ZodNumber:Kr,ZodBigInt:Vr,ZodBoolean:io,ZodDate:yi,ZodSymbol:Qa,ZodUndefined:so,ZodNull:oo,ZodAny:ts,ZodUnknown:mi,ZodNever:vr,ZodVoid:Xa,ZodArray:Bn,ZodObject:ft,ZodUnion:ao,ZodDiscriminatedUnion:Sl,ZodIntersection:lo,ZodTuple:Vn,ZodRecord:co,ZodMap:Ya,ZodSet:bi,ZodFunction:Zi,ZodLazy:uo,ZodLiteral:fo,ZodEnum:Gr,ZodNativeEnum:ho,ZodPromise:ns,ZodEffects:jn,ZodTransformer:jn,ZodOptional:gr,ZodNullable:_i,ZodDefault:po,ZodCatch:Ja,ZodNaN:el,BRAND:J9,ZodBranded:Z1,ZodPipeline:$o,custom:q1,Schema:Re,ZodSchema:Re,late:ek,get ZodFirstPartyTypeKind(){return me},coerce:Mk,any:lk,array:fk,bigint:rk,boolean:G1,date:ik,discriminatedUnion:mk,effect:Kp,enum:Ck,function:xk,instanceof:tk,intersection:vk,lazy:$k,literal:kk,map:_k,nan:nk,nativeEnum:Sk,never:uk,null:ak,nullable:Ak,number:V1,object:hk,oboolean:Pk,onumber:Lk,optional:Tk,ostring:Ok,pipeline:Rk,preprocess:Ik,promise:Ek,record:bk,set:wk,strictObject:pk,string:K1,symbol:sk,transformer:Kp,tuple:yk,undefined:ok,union:gk,unknown:ck,void:dk,NEVER:Bk,ZodIssueCode:q,quotelessJson:D9,ZodError:Mn});const jk=/^[0-9a-f]{64}$/,Gs=e=>{const t=typeof e=="string"&&e.length===64&&jk.test(e);return t||console.warn("invalid id is ignored: ",e),t},Uk=Sa.tuple([Sa.literal("emoji"),Sa.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),Sa.string().url()]),Dk=e=>t=>e.safeParse(t).success,$n=e=>{let t;return{get rawEvent(){return e},get id(){return e.id},get pubkey(){return e.pubkey},get createdAt(){return e.created_at},get content(){return e.content},get tags(){return e.tags},createdAtAsDate(){return new Date(e.created_at*1e3)},pTags(){return e.tags.filter(([n,i])=>n==="p"&&Gs(i))},eTags(){return e.tags.filter(([n,i])=>n==="e"&&Gs(i))},emojiTags(){return e.tags.filter(Dk(Uk))},taggedEventIds(){return this.eTags().map(([,n])=>n)},lastTaggedEventId(){const n=this.taggedEventIds();if(n.length!==0)return n[n.length-1]},markedEventTags(){if(e.kind!==wt.Text)throw new Error("kind should be 1");if(t!=null)return t;const n=e.tags.map((o,a)=>[o,a]).filter(([[o,a]])=>o==="e"&&Gs(a)),i=(o,a)=>{if(e.kind===1)return o==="root"||o==="reply"||o==="mention"?o:n.length===1?"reply":a===0?"root":n.length===2||a===n.length-1?"reply":"mention"};return t=n.map(([[,o,a,c],u],d)=>({id:o,relayUrl:a,marker:i(c,d),index:u})),t},replyingToEvent(){return this.markedEventTags().find(({marker:n})=>n==="reply")},rootEvent(){return this.markedEventTags().find(({marker:n})=>n==="root")},mentionedEvents(){return this.markedEventTags().filter(({marker:n})=>n==="mention")},mentionedPubkeys(){return Fr(this.pTags().map(([,n])=>n))},mentionedPubkeysWithoutAuthor(){return this.mentionedPubkeys().filter(n=>n!==e.pubkey)},contentWarning(){const n=e.tags.find(([o])=>o==="content-warning");return n==null?{contentWarning:!1}:{contentWarning:!0,reason:(n[1]?.length??0)>0?n[1]:void 0}},containsEventMention(n){const i=e.tags.findIndex(([o,a])=>o==="e"&&a===n);return i<0?!1:this.containsEventMentionIndex(i)},containsEventMentionIndex(n){return n<0||n>=e.tags.length?!1:e.content.includes(`#[${n}]`)},getEmojiUrl(n){const i=this.emojiTags().find(([,a])=>a===n);if(i==null)return null;const[,,o]=i;return o}}},Nk=()=>{const e=[...P9];return window.navigator.language.includes("ja")&&e.push(...M9),e},Q1=()=>({relayUrls:Nk(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),Hk=e=>JSON.stringify(e),zk=e=>({...Q1(),...JSON.parse(e)}),Fk=h4(()=>window.localStorage,Hk,zk),[Fs,on]=p4("RabbitConfig",Q1(),Fk),De=()=>{const e=k=>{on("relayUrls",C=>Fr([...C,k]))},t=k=>{on("relayUrls",C=>C.filter(M=>M!==k))},n=k=>{on("mutedPubkeys",C=>Fr([...C,k]))},i=k=>{on("mutedPubkeys",C=>C.filter(M=>M!==k))},o=k=>{on("mutedKeywords",C=>Fr([...C,k]))},a=k=>{on("mutedKeywords",C=>C.filter(M=>M!==k))},c=k=>{on("columns",C=>{const M=C.findIndex(B=>B.id===k.id);if(M>=0){const B=[...C];return B.splice(M,1,k),B}return[...C,k]})},u=(k,C)=>{on("columns",M=>{const B=C-1,R=Math.max(Math.min(B,M.length),0),T=M.findIndex(W=>W.id===k);if(T<0||R===T)return M;console.log(T,R);const L=[...M],[H]=L.splice(T,1);return L.splice(R,0,H),L})},d=k=>{on("columns",C=>C.filter(M=>M.id!==k))},p=k=>{on("customEmojis",C=>({...C,[k.shortcode]:k}))},h=k=>{on("customEmojis",C=>({...C,[k]:void 0}))},m=k=>Fs.customEmojis[k],v=k=>Fs.mutedPubkeys.includes(k),w=k=>k.kind===wt.Text?Fs.mutedKeywords.some(C=>k.content.includes(C)):!1;return{config:()=>Fs,setConfig:on,addRelay:e,removeRelay:t,saveColumn:c,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:k})=>{if((Fs.columns?.length??0)>0)return;const C=[j1({width:"widest",pubkey:k}),U1({pubkey:k}),N1({name:"自分の投稿",pubkey:k}),H1({name:"自分のリアクション",pubkey:k})];navigator.language.includes("ja")&&C.splice(2,0,D1()),on("columns",()=>[...C])},saveEmoji:p,removeEmoji:h,getEmoji:m,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:v,shouldMuteEvent:k=>{const C=$n(k);return v(k.pubkey)||C.mentionedPubkeys().some(v)||w(k)}}},Wk=()=>{let e,t;const n=new Promise((i,o)=>{e=i,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:n,resolve:e,reject:t}},Zk=e=>{const t=Ve(e),n=Ve(()=>t().batchSize??100),i=Ve(()=>t().interval??2e3),[o,a]=$e(0),[c,u]=$e([]);let d;const p=()=>{const{executor:E}=t(),k=c();k.length>0&&(u([]),E(k)),d!=null&&clearTimeout(d),d=void 0},h=()=>{const E=o();return a(k=>k+1),E},m=()=>{d==null&&(d=setTimeout(()=>{p()},i()))},v=E=>{c().length<n()?u(k=>[...k,E]):(p(),u([E]))},w=E=>{u(k=>k.filter(C=>C.id!==E))};return{exec:async(E,k)=>{const{promise:C,resolve:M,reject:B}=Wk(),R=h();return v({id:R,args:E,resolve:M,reject:B}),m(),k?.addEventListener("abort",()=>{w(R),B(new Error("AbortError"))}),C}}},[qk]=$e(new U7),El=()=>qk,[Kk,Vp]=Ki({activeSubscriptions:0,activeBatchSubscriptions:0}),X1=()=>({stats:Kk,setActiveSubscriptions:n=>Vp("activeSubscriptions",n),setActiveBatchSubscriptions:n=>Vp("activeBatchSubscriptions",n)}),Jr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const c=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(c))},e)});return Promise.race([n,i])},Vk=/\p{Emoji_Presentation}/u;let Tu=0;const{setActiveBatchSubscriptions:Gk}=X1();setInterval(()=>{Gk(Tu)},1e3);const Qk={events:[],completed:!0},Xk=()=>Qk,{exec:ko}=Zk(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,c=new Map;e.forEach(T=>{if(T.args.type==="Event"){const L=n.get(T.args.eventId)??[];n.set(T.args.eventId,[...L,T])}else if(T.args.type==="Profile"){const L=t.get(T.args.pubkey)??[];t.set(T.args.pubkey,[...L,T])}else if(T.args.type==="Reactions"){const L=i.get(T.args.mentionedEventId)??[];i.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="Reposts"){const L=o.get(T.args.mentionedEventId)??[];o.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="ZapReceipts"){const L=a.get(T.args.mentionedEventId)??[];o.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="Followings"){const L=c.get(T.args.pubkey)??[];c.set(T.args.pubkey,[...L,T])}});const u=[...n.keys()],d=[...t.keys()],p=[...i.keys()],h=[...o.keys()],m=[...a.keys()],v=[...c.keys()],w=[];if(u.length>0&&w.push({ids:u}),d.length>0&&w.push({kinds:[wt.Metadata],authors:d}),p.length>0&&w.push({kinds:[wt.Reaction],"#e":p}),h.length>0&&w.push({kinds:[6],"#e":h}),m.length>0&&w.push({kinds:[9735],"#e":m}),v.length>0&&w.push({kinds:[wt.Contacts],authors:v}),w.length===0)return;const $=new Map,E=(T,L)=>{T.forEach(H=>{const W=$.get(H.id)??$e({events:[],completed:!1});$.set(H.id,W);const[re,V]=W;V(ie=>({...ie,events:[...ie.events,L]})),H.resolve(re)})},k=()=>{e.forEach(T=>{const L=$.get(T.id);if(L!=null){const H=L[1];H(W=>({...W,completed:!0}))}else T.resolve(Xk)})},{config:C,shouldMuteEvent:M}=De(),R=El()().sub(C().relayUrls,w,{});Tu+=1,R.on("event",T=>{if(T.kind===wt.Metadata){const L=t.get(T.pubkey)??[];E(L,T);return}if(T.kind===wt.Reaction){const L=$n(T).lastTaggedEventId();if(L!=null){const H=i.get(L)??[];E(H,T)}}else if(T.kind===6){const L=$n(T).lastTaggedEventId();if(L!=null){const H=o.get(L)??[];E(H,T)}}else if(T.kind===wt.Zap)$n(T).eTags().forEach(([,H])=>{const W=o.get(H)??[];E(W,T)});else if(T.kind===wt.Contacts){const L=c.get(T.pubkey)??[];E(L,T)}else{const L=n.get(T.id)??[];L.length>0?E(L,T):console.warn("unknown event received")}}),R.on("eose",()=>{k(),R.unsub(),Tu-=1})}})),Y1=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),ms=e=>{const t=os(),n=Ve(e),i=Ve(()=>["useProfile",n()]),o=as(i,({queryKey:u,signal:d})=>{const[,p]=u;if(p==null)return Promise.resolve(null);const{pubkey:h}=p;if(h.startsWith("npub1"))return Promise.resolve(null);const m=ko({type:"Profile",pubkey:h},d).then(v=>{const w=()=>{const $=Y1(v().events);if($==null)throw new Error(`profile not found: ${h}`);return $};return dl(v).subscribe(()=>{try{t.setQueryData(u,w())}catch($){console.error("error occurred while updating profile cache: ",$)}}),w()});return Jr(15e3,`useProfile: ${h}`)(m)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3});return{profile:Ve(()=>{if(o.data==null)return null;const{content:u}=o.data;if(u==null||u.length===0)return null;try{return JSON.parse(u)}catch(d){return console.warn("failed to parse profile (kind 0): ",d,u),null}}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},J1=e=>{const t=Ve(e),n=as(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return null;const{eventId:u}=c,d=ko({type:"Event",eventId:u},a).then(p=>{const h=p().events[0];if(h==null)throw new Error(`event not found: ${u}`);return h});return Jr(15e3,`useEvent: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},Yk=e=>{const t=os(),n=Ve(e),i=Ve(()=>["useReactions",n()]),o=as(i,({queryKey:h,signal:m})=>{const[,v]=h;if(v==null)return[];const{eventId:w}=v,$=ko({type:"Reactions",mentionedEventId:w},m).then(E=>{const k=()=>E().events;return dl(E).subscribe(()=>{t.setQueryData(h,k())}),k()});return Jr(15e3,`useReactions: ${w}`)($)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reactions:a,reactionsGroupedByContent:()=>{const h=new Map;return a().forEach(m=>{const v=h.get(m.content)??[];v.push(m),h.set(m.content,v)}),h},isReactedBy:h=>a().findIndex(m=>m.pubkey===h)!==-1,isReactedByWithEmoji:h=>a().findIndex(m=>m.pubkey===h&&Vk.test(m.content))!==-1,invalidateReactions:()=>t.invalidateQueries(i()),query:o}},Jk=e=>{const t=os(),n=Ve(e),i=Ve(()=>["useReposts",n()]),o=as(i,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return[];const{eventId:m}=h,v=ko({type:"Reposts",mentionedEventId:m},p).then(w=>{const $=()=>w().events;return dl(w).subscribe(()=>{t.setQueryData(d,$())}),$()});return Jr(15e3,`useReposts: ${m}`)(v)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reposts:a,isRepostedBy:d=>a().findIndex(p=>p.pubkey===d)!==-1,invalidateReposts:()=>t.invalidateQueries(i()),query:o}},Au=e=>{const t=os(),n=Ve(e),i=()=>["useFollowings",n()],o=as(i,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return Promise.resolve(null);const{pubkey:m}=h,v=ko({type:"Followings",pubkey:m},p).then(w=>{const $=()=>{const E=Y1(w().events);if(E==null)throw new Error(`followings not found: ${m}`);return E};return dl(w).subscribe(()=>{try{t.setQueryData(d,$())}catch(E){console.error("error occurred while updating followings cache: ",E)}}),$()});return Jr(15e3,`useFollowings: ${m}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return $n(o.data).pTags().forEach(h=>{const[,m,v,w]=h,$={pubkey:m,petname:w};v!=null&&v.length>0&&($.mainRelayUrl=v),d.push($)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},ln=e=>t=>e.some(n=>n==null)?null:t(e),eC=P('<div class="truncate">読み込み中 '),go=e=>{const[t,n]=i4(e,["eventId"]),{shouldMuteEvent:i}=De(),{event:o,query:a}=J1(()=>ln([t.eventId])(([u])=>({eventId:u}))),c=()=>{const u=o();return u!=null&&i(u)};return _(Pn,{fallback:"投稿が見つかりません",get children(){return[_(Fe,{get when(){return c()},children:null}),_(Fe,{get when(){return o()},keyed:!0,children:u=>_(Hm,s4({event:u},n))}),_(Fe,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=eC();return d.firstChild,I(d,_(no,{eventId:u}),null),d})()})]}})},{npubEncode:tC}=xo,Tl=e=>{try{return tC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Al=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return _(Pn,{get fallback(){return Tl(e.pubkey)},get children(){return[_(Fe,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),_(Fe,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",Ve(()=>t()?.name)]}})]}})},em=e=>{const[t,n]=$e(new Date);return hr(()=>{const i=setInterval(()=>{n(new Date)},e().interval);Xr(()=>clearInterval(i))}),t},nC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},Gp=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,rC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleDateString()}},iC=e=>{switch(e.kind){case"today":return Gp(e.value);case"yesterday":return`昨日 ${Gp(e.value)}`;case"abs":default:return e.value.toLocaleString()}},sC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,oC=(e,t)=>{const n=sC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},Qp=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),aC=e=>new Date(+e-24*60*60*1e3),tm=(e,t,n)=>Qp(e,t)?n({kind:"today",value:e}):Qp(e,aC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),lC=(e,t=new Date)=>tm(e,t,rC),cC=(e,t=new Date)=>tm(e,t,iC),Xp=(e,t=new Date,n=nC)=>n(oC(e,t)),Yp=em(()=>({interval:7e3})),Jp=em(()=>({interval:60*1e3})),nm=()=>{const{config:e}=De();return t=>{switch(e().dateFormat){case"absolute-long":return lC(t,Jp());case"absolute-short":return cC(t,Jp());case"relative":return Xp(t,Yp());default:return Xp(t,Yp())}}},[uC,Ni]=$e({type:"Closed"}),ei=()=>({modalState:uC,setModalState:Ni,showProfile:a=>{Ni({type:"Profile",pubkey:a})},showProfileEdit:()=>{Ni({type:"ProfileEdit"})},showAddColumn:()=>{Ni({type:"AddColumn"})},showAbout:()=>{Ni({type:"About"})},closeModal:()=>{Ni({type:"Closed"})}}),dC=P('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),rm=e=>{const{showProfile:t}=ei(),n=nm(),i=Ve(()=>$n(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=dC(),c=a.firstChild,u=c.firstChild,d=u.nextSibling,p=d.firstChild,h=d.nextSibling,m=c.nextSibling;return I(u,_(M1,{})),p.$$click=()=>t(e.event.pubkey),I(p,_(Al,{get pubkey(){return e.event.pubkey}})),I(h,()=>n(i().createdAtAsDate())),I(m,_(go,{get eventId(){return o()}})),a})()};bt(["click"]);const fC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),hC=(e={})=>(()=>{const t=fC();return Xe(t,e,!0,!0),t})(),pC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),im=(e={})=>(()=>{const t=pC();return Xe(t,e,!0,!0),t})(),gC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),pd=(e={})=>(()=>{const t=gC();return Xe(t,e,!0,!0),t})(),mC=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),sm=(e={})=>(()=>{const t=mC();return Xe(t,e,!0,!0),t})(),vC=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),gd=(e={})=>(()=>{const t=vC();return Xe(t,e,!0,!0),t})(),yC=P('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),md=e=>{let t,n;const[i,o]=$e(!1),[a,c]=$e({}),u=o4(()=>e.children),d=()=>o(!1),p=()=>o($=>!$),h=$=>{const E=$.target;E!=null&&!n?.contains(E)&&d()},m=()=>{document.addEventListener("mousedown",h)},v=()=>{document.removeEventListener("mousedown",h)},w=()=>{if(t==null||n==null)return;const $=t?.getBoundingClientRect(),E=n?.getBoundingClientRect();let{top:k,left:C}=$;e.position==="left"?C-=$.width:e.position==="right"?C+=$.width:e.position==="top"?(k-=$.height,C-=$.left+$.width/2):(k+=$.height,C+=$.width/2),k=Math.min(k,window.innerHeight-E.height),C=Math.min(C,window.innerWidth-E.width),c({left:`${C}px`,top:`${k}px`})};return hr(()=>{i()?(m(),e.onOpen?.()):(v(),e.onClose?.())}),hr(ul(u,()=>{w()})),hr(()=>{i()&&w()}),kn(()=>{e.ref?.({close:d})}),Xr(()=>v()),(()=>{const $=yC(),E=$.firstChild,k=E.nextSibling;E.$$click=()=>{p(),w()};const C=t;typeof C=="function"?mr(C,E):t=E,I(E,()=>e.button);const M=n;return typeof M=="function"?mr(M,k):n=k,I(k,u),Be(B=>{const R=!i(),T=!!i(),L=a();return R!==B._v$&&k.classList.toggle("hidden",B._v$=R),T!==B._v$2&&k.classList.toggle("block",B._v$2=T),B._v$3=a4(k,L,B._v$3),B},{_v$:void 0,_v$2:void 0,_v$3:void 0}),$})()};bt(["click"]);const bC=P('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),_C=P('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),wC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=bC(),i=n.firstChild;return i.$$click=t,I(i,()=>e.item.content()),n})()},om=e=>{let t;const n=()=>t?.close();return _(md,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=_C();return I(i,_(Mt,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>_(wC,{item:o,onClose:n})})),i}})};bt(["click"]);function am(e){return e&&e.__esModule?e.default:e}function Rn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Il,he,lm,Qs,cm,e0,tl={},um=[],xC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function zr(e,t){for(var n in t)e[n]=t[n];return e}function dm(e){var t=e.parentNode;t&&t.removeChild(e)}function Iu(e,t,n){var i,o,a,c={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?Il.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return Pa(e,c,i,o,null)}function Pa(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++lm};return o==null&&he.vnode!=null&&he.vnode(a),a}function cr(){return{current:null}}function rs(e){return e.children}function Wn(e,t){this.props=e,this.context=t}function is(e,t){if(t==null)return e.__?is(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?is(e):null}function fm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return fm(e)}}function t0(e){(!e.__d&&(e.__d=!0)&&Qs.push(e)&&!nl.__r++||e0!==he.debounceRendering)&&((e0=he.debounceRendering)||cm)(nl)}function nl(){for(var e;nl.__r=Qs.length;)e=Qs.sort(function(t,n){return t.__v.__b-n.__v.__b}),Qs=[],e.some(function(t){var n,i,o,a,c,u;t.__d&&(c=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=zr({},a)).__v=a.__v+1,vd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[c]:null,i,c??is(a),a.__h),mm(i,a),a.__e!=c&&fm(a)))})}function hm(e,t,n,i,o,a,c,u,d,p){var h,m,v,w,$,E,k,C=i&&i.__k||um,M=C.length;for(n.__k=[],h=0;h<t.length;h++)if((w=n.__k[h]=(w=t[h])==null||typeof w=="boolean"?null:typeof w=="string"||typeof w=="number"||typeof w=="bigint"?Pa(null,w,null,null,w):Array.isArray(w)?Pa(rs,{children:w},null,null,null):w.__b>0?Pa(w.type,w.props,w.key,null,w.__v):w)!=null){if(w.__=n,w.__b=n.__b+1,(v=C[h])===null||v&&w.key==v.key&&w.type===v.type)C[h]=void 0;else for(m=0;m<M;m++){if((v=C[m])&&w.key==v.key&&w.type===v.type){C[m]=void 0;break}v=null}vd(e,w,v=v||tl,o,a,c,u,d,p),$=w.__e,(m=w.ref)&&v.ref!=m&&(k||(k=[]),v.ref&&k.push(v.ref,null,w),k.push(m,w.__c||$,w)),$!=null?(E==null&&(E=$),typeof w.type=="function"&&w.__k===v.__k?w.__d=d=pm(w,d,e):d=gm(e,w,v,C,$,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=is(v))}for(n.__e=E,h=M;h--;)C[h]!=null&&(typeof n.type=="function"&&C[h].__e!=null&&C[h].__e==n.__d&&(n.__d=is(i,h+1)),ym(C[h],C[h]));if(k)for(h=0;h<k.length;h++)vm(k[h],k[++h],k[++h])}function pm(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?pm(i,t,n):gm(n,i,i,o,i.__e,t));return t}function rl(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){rl(n,t)}):t.push(e)),t}function gm(e,t,n,i,o,a){var c,u,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),c=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),c=a}return c!==void 0?c:o.nextSibling}function $C(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||il(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||il(e,a,t[a],n[a],i)}function n0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||xC.test(t)?n:n+"px"}function il(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||n0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||n0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?i0:r0,a):e.removeEventListener(t,a?i0:r0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function r0(e){this.l[e.type+!1](he.event?he.event(e):e)}function i0(e){this.l[e.type+!0](he.event?he.event(e):e)}function vd(e,t,n,i,o,a,c,u,d){var p,h,m,v,w,$,E,k,C,M,B,R=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(p=he.__b)&&p(t);try{e:if(typeof R=="function"){if(k=t.props,C=(p=R.contextType)&&i[p.__c],M=p?C?C.props.value:p.__:i,n.__c?E=(h=t.__c=n.__c).__=h.__E:("prototype"in R&&R.prototype.render?t.__c=h=new R(k,M):(t.__c=h=new Wn(k,M),h.constructor=R,h.render=CC),C&&C.sub(h),h.props=k,h.state||(h.state={}),h.context=M,h.__n=i,m=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),R.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=zr({},h.__s)),zr(h.__s,R.getDerivedStateFromProps(k,h.__s))),v=h.props,w=h.state,m)R.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(R.getDerivedStateFromProps==null&&k!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(k,M),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(k,h.__s,M)===!1||t.__v===n.__v){h.props=k,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),h.__h.length&&c.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(k,h.__s,M),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,w,$)})}h.context=M,h.props=k,h.state=h.__s,(p=he.__r)&&p(t),h.__d=!1,h.__v=t,h.__P=e,p=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(i=zr(zr({},i),h.getChildContext())),m||h.getSnapshotBeforeUpdate==null||($=h.getSnapshotBeforeUpdate(v,w)),B=p!=null&&p.type===rs&&p.key==null?p.props.children:p,hm(e,Array.isArray(B)?B:[B],t,n,i,o,a,c,u,d),h.base=t.__e,t.__h=null,h.__h.length&&c.push(h),E&&(h.__E=h.__=null),h.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=kC(n.__e,t,n,i,o,a,c,d);(p=he.diffed)&&p(t)}catch(T){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),he.__e(T,t,n)}}function mm(e,t){he.__c&&he.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){he.__e(i,n.__v)}})}function kC(e,t,n,i,o,a,c,u){var d,p,h,m=n.props,v=t.props,w=t.type,$=0;if(w==="svg"&&(o=!0),a!=null){for(;$<a.length;$++)if((d=a[$])&&"setAttribute"in d==!!w&&(w?d.localName===w:d.nodeType===3)){e=d,a[$]=null;break}}if(e==null){if(w===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,v.is&&v),a=null,u=!1}if(w===null)m===v||u&&e.data===v||(e.data=v);else{if(a=a&&Il.call(e.childNodes),p=(m=n.props||tl).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!u){if(a!=null)for(m={},$=0;$<e.attributes.length;$++)m[e.attributes[$].name]=e.attributes[$].value;(h||p)&&(h&&(p&&h.__html==p.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if($C(e,v,m,o,u),h)t.__k=[];else if($=t.props.children,hm(e,Array.isArray($)?$:[$],t,n,i,o&&w!=="foreignObject",a,c,a?a[0]:n.__k&&is(n,0),u),a!=null)for($=a.length;$--;)a[$]!=null&&dm(a[$]);u||("value"in v&&($=v.value)!==void 0&&($!==m.value||$!==e.value||w==="progress"&&!$)&&il(e,"value",$,m.value,!1),"checked"in v&&($=v.checked)!==void 0&&$!==e.checked&&il(e,"checked",$,m.checked,!1))}return e}function vm(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){he.__e(i,n)}}function ym(e,t,n){var i,o;if(he.unmount&&he.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||vm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){he.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&ym(i[o],t,typeof e.type!="function");n||e.__e==null||dm(e.__e),e.__e=e.__d=void 0}function CC(e,t,n){return this.constructor(e,n)}function bm(e,t,n){var i,o,a;he.__&&he.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],vd(t,e=(!i&&n||t).__k=Iu(rs,null,[e]),o||tl,tl,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Il.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),mm(a,e)}Il=um.slice,he={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},lm=0,Wn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=zr({},this.state),typeof e=="function"&&(e=e(zr({},n),this.props)),e&&zr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),t0(this))},Wn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),t0(this))},Wn.prototype.render=rs,Qs=[],cm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nl.__r=0;var SC=0;function z(e,t,n,i,o){var a,c,u={};for(c in t)c=="ref"?a=t[c]:u[c]=t[c];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--SC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return he.vnode&&he.vnode(d),d}function EC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function TC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var qr={set:EC,get:TC};const iu=new Map,AC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function IC(){for(const{v:e,emoji:t}of AC)if(_m(t))return e}function RC(){return!_m("🇨🇦")}function _m(e){if(iu.has(e))return iu.get(e);const t=OC(e);return iu.set(e,t),t}const OC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,c=a.length;let u=0;for(;u<c&&!a[u+3];u+=4);if(u>=c)return!1;const d=n+u/4%n,p=Math.floor(u/4/n),h=e.getImageData(d,p,1,1).data;return!(a[u]!==h[0]||a[u+2]!==h[2]||e.measureText(o).width>=n)}})();var s0={latestVersion:IC,noCountryFlags:RC};const Ru=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let It=null;function LC(e){It||(It=qr.get("frequently")||{});const t=e.id||e;t&&(It[t]||(It[t]=0),It[t]+=1,qr.set("last",t),qr.set("frequently",It))}function PC({maxFrequentRows:e,perLine:t}){if(!e)return[];It||(It=qr.get("frequently"));let n=[];if(!It){It={};for(let a in Ru.slice(0,t)){const c=Ru[a];It[c]=t-a,n.push(c)}return n}const i=e*t,o=qr.get("last");for(let a in It)n.push(a);if(n.sort((a,c)=>{const u=It[c],d=It[a];return u==d?a.localeCompare(c):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let c of a)c!=o&&delete It[c];o&&n.indexOf(o)==-1&&(delete It[n[n.length-1]],n.splice(-1,1,o)),qr.set("frequently",It)}return n}var wm={add:LC,get:PC,DEFAULTS:Ru},xm={};xm=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var fr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Pt=null,Me=null;const su={};async function o0(e){if(su[e])return su[e];const n=await(await fetch(e)).json();return su[e]=n,n}let ou=null,$m=null,km=!1;function Rl(e,{caller:t}={}){return ou||(ou=new Promise(n=>{$m=n})),e?MC(e):t&&!km&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),ou}async function MC(e){km=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=fr.emojiVersion.value),n||(n=fr.set.value),i||(i=fr.locale.value),Me)Me.categories=Me.categories.filter(d=>!d.name);else{Me=(typeof e.data=="function"?await e.data():e.data)||await o0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Me.emoticons={},Me.natives={},Me.categories.unshift({id:"frequent",emojis:[]});for(const d in Me.aliases){const p=Me.aliases[d],h=Me.emojis[p];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}Me.originalCategories=Me.categories}if(Pt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?am(xm):await o0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const p=e.custom[d],h=e.custom[d-1];if(!(!p.emojis||!p.emojis.length)){p.id||(p.id=`custom_${d+1}`),p.name||(p.name=Pt.categories.custom),h&&!p.icon&&(p.target=h.target||h),Me.categories.push(p);for(const m of p.emojis)Me.emojis[m.id]=m}}e.categories&&(Me.categories=Me.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,p)=>{const h=e.categories.indexOf(d.id),m=e.categories.indexOf(p.id);return h-m}));let o=null,a=null;n=="native"&&(o=s0.latestVersion(),a=e.noCountryFlags||s0.noCountryFlags());let c=Me.categories.length,u=!1;for(;c--;){const d=Me.categories[c];if(d.id=="frequent"){let{maxFrequentRows:m,perLine:v}=e;m=m>=0?m:fr.maxFrequentRows.value,v||(v=fr.perLine.value),d.emojis=wm.get({maxFrequentRows:m,perLine:v})}if(!d.emojis||!d.emojis.length){Me.categories.splice(c,1);continue}const{categoryIcons:p}=e;if(p){const m=p[d.id];m&&!d.icon&&(d.icon=m)}let h=d.emojis.length;for(;h--;){const m=d.emojis[h],v=m.id?m:Me.emojis[m],w=()=>{d.emojis.splice(h,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){w();continue}if(o&&v.version>o){w();continue}if(a&&d.id=="flags"&&!NC.includes(v.id)){w();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([E,k])=>{if(E)return(Array.isArray(E)?E:[E]).map(C=>(k?C.split(/[-|_|\s]+/):[C]).map(M=>M.toLowerCase())).flat()}).flat().filter(E=>E&&E.trim()).join(","),v.emoticons)for(const E of v.emoticons)Me.emoticons[E]||(Me.emoticons[E]=v.id);let $=0;for(const E of v.skins){if(!E)continue;$++;const{native:k}=E;k&&(Me.natives[k]=v.id,v.search+=`,${k}`);const C=$==1?"":`:skin-tone-${$}:`;E.shortcodes=`:${v.id}:${C}`}}}}u&&qi.reset(),$m()}function Cm(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Sm(o,e,t,n);return i}function Sm(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const BC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Ou=null;function jC(e){return e.id?e:Me.emojis[e]||Me.emojis[Me.aliases[e]]||Me.emojis[Me.natives[e]]}function UC(){Ou=null}async function DC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Rl(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,p)=>u.trim()&&p.indexOf(u)==d);if(!i.length)return;let o=Ou||(Ou=Object.values(Me.emojis)),a,c;for(const u of i){if(!o.length)break;a=[],c={};for(const d of o){if(!d.search)continue;const p=d.search.indexOf(`,${u}`);p!=-1&&(a.push(d),c[d.id]||(c[d.id]=0),c[d.id]+=d.id==u?0:p+1)}o=a}return a.length<2||(a.sort((u,d)=>{const p=c[u.id],h=c[d.id];return p==h?u.id.localeCompare(d.id):p-h}),a.length>t&&(a=a.slice(0,t))),a}var qi={search:DC,get:jC,reset:UC,SHORTCODES_REGEX:BC};const NC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function HC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function zC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function FC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const WC={activity:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},ZC={loupe:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var sl={categories:WC,search:ZC};function Lu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(qi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=qi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),c=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${c})`,backgroundSize:`${100*Me.sheet.cols}% ${100*Me.sheet.rows}%`,backgroundPosition:`${100/(Me.sheet.cols-1)*o.x}% ${100/(Me.sheet.rows-1)*o.y}%`}})})}const qC=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Em extends qC{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Sm(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class KC extends Em{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Tm={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:fr.set,skin:fr.skin};class Am extends Em{async connectedCallback(){const t=Cm(this.props,Tm,this);t.element=this,t.ref=n=>{this.component=n},await Rl(),!this.disconnected&&bm(z(Lu,{...t}),this)}constructor(t){super(t)}}Rn(Am,"Props",Tm);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Am);var a0,Pu=[],l0=he.__b,c0=he.__r,u0=he.diffed,d0=he.__c,f0=he.unmount;function VC(){var e;for(Pu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Pu.pop();)if(e.__P)try{e.__H.__h.forEach(Ma),e.__H.__h.forEach(Mu),e.__H.__h=[]}catch(t){e.__H.__h=[],he.__e(t,e.__v)}}he.__b=function(e){l0&&l0(e)},he.__r=function(e){c0&&c0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ma),t.__h.forEach(Mu),t.__h=[])},he.diffed=function(e){u0&&u0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Pu.push(t)!==1&&a0===he.requestAnimationFrame||((a0=he.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),h0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);h0&&(i=requestAnimationFrame(o))})(VC))},he.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ma),n.__h=n.__h.filter(function(i){return!i.__||Mu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],he.__e(i,n.__v)}}),d0&&d0(e,t)},he.unmount=function(e){f0&&f0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ma(i)}catch(o){t=o}}),t&&he.__e(t,n.__v))};var h0=typeof requestAnimationFrame=="function";function Ma(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Mu(e){e.__c=e.__()}function GC(e,t){for(var n in t)e[n]=t[n];return e}function p0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function ol(e){this.props=e}(ol.prototype=new Wn).isPureReactComponent=!0,ol.prototype.shouldComponentUpdate=function(e,t){return p0(this.props,e)||p0(this.state,t)};var g0=he.__b;he.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),g0&&g0(e)};var QC=he.__e;he.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}QC(e,t,n)};var m0=he.unmount;function au(){this.__u=0,this.t=null,this.__b=null}function Im(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Ea(){this.u=null,this.o=null}he.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),m0&&m0(e)},(au.prototype=new Wn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Im(i.__v),a=!1,c=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=c;var u=function(){if(!--i.__u){if(i.state.__e){var p=i.state.__e;i.__v.__k[0]=function m(v,w,$){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(E){return m(E,w,$)}),v.__c&&v.__c.__P===w&&(v.__e&&$.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=$)),v}(p,p.__c.__P,p.__c.__O)}var h;for(i.setState({__e:i.__b=null});h=i.t.pop();)h.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(c,c)},au.prototype.componentWillUnmount=function(){this.t=[]},au.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(c,u,d){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(p){typeof p.__c=="function"&&p.__c()}),c.__c.__H=null),(c=GC({},c)).__c!=null&&(c.__c.__P===d&&(c.__c.__P=u),c.__c=null),c.__k=c.__k&&c.__k.map(function(p){return a(p,u,d)})),c}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Iu(rs,null,e.fallback);return o&&(o.__h=null),[Iu(rs,null,t.__e?null:e.children),o]};var v0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Ea.prototype=new Wn).__e=function(e){var t=this,n=Im(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),v0(t,e,i)):o()};n?n(a):a()}},Ea.prototype.render=function(e){this.u=null,this.o=new Map;var t=rl(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ea.prototype.componentDidUpdate=Ea.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){v0(e,n,t)})};var XC=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,YC=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,JC=typeof document<"u",eS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Wn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Wn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var y0=he.event;function tS(){}function nS(){return this.cancelBubble}function rS(){return this.defaultPrevented}he.event=function(e){return y0&&(e=y0(e)),e.persist=tS,e.isPropagationStopped=nS,e.isDefaultPrevented=rS,e.nativeEvent=e};var b0={configurable:!0,get:function(){return this.class}},_0=he.vnode;he.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var c=n[a];JC&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&c==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&c===!0?c="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!eS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&YC.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():c===null&&(c=void 0),i[a]=c)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=rl(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=rl(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(b0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",b0))}e.$$typeof=XC,_0&&_0(e)};var w0=he.__r;he.__r=function(e){w0&&w0(e),e.__c};const iS={light:"outline",dark:"solid"};class sS extends ol{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return z("img",{src:n.src})}const i=sl.categories[t.id]||sl.categories.custom,o=this.props.icons=="auto"?iS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Pt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:c=>c.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Me.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class oS extends ol{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const Ta={rowsPerRender:10};class aS extends Wn{getInitialState(t=this.props){return{skin:qr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Pt.rtl?"rtl":"ltr",this.refs={menu:cr(),navigation:cr(),scroll:cr(),search:cr(),searchInput:cr(),skinToneButton:cr(),skinToneRadio:cr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Rl(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Me;this.refs.categories=new Map;const n=Me.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const c=[];c.__categoryId=a.id,c.__index=o.length,this.grid.push(c);const u=this.grid.length-1,d=u%Ta.rowsPerRender?{}:cr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),c};for(let o of t){const a=[];let c=i(a,o);for(let u of o.emojis)c.length==this.getPerLine()&&(c=i(a,o)),this.grid.setsize+=1,c.push(u);this.refs.categories.set(o.id,{root:cr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:c}=n.getBoundingClientRect();return Math.floor(c/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return qi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=c=>{c!=t.state.categoryId&&t.setState({categoryId:c})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(c=>{for(const d of c){const p=d.target.dataset.id;n.set(p,d.intersectionRatio)}const u=[...n];for(const[d,p]of u)if(p){i(d);break}},o);for(const{root:c}of this.refs.categories.values())a.observe(c.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Ta.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Ta.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:c}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,p]=this.state.pos;const h=(()=>{if(d==0&&p==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||c)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let m=u[d];const v=i?-1:1;if(p+=v,!m[p]){if(d+=v,m=u[d],!m)return d=i?0:u.length-1,p=i?0:u[d].length-1,[d,p];p=i?m.length-1:0}return[d,p]}if(a||c){d+=a?-1:1;const m=u[d];return m?(m[p]||(p=m.length-1),[d,p]):(d=a?0:u.length-1,p=a?0:u[d].length-1,[d,p])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let c=0;if(n>=0&&(t=i[n].__categoryId),t&&(c=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)c=0;else{const u=i[n].__index,d=c+u*this.props.emojiButtonSize,p=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)c=d;else if(p>o.scrollTop+a.height)c=p-a.height;else return}this.ignoreMouse(),o.scrollTop=c}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=FC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&wm.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),qr.set("skin",t)}renderNav(){return z(sS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[z("div",{class:"flex flex-middle flex-grow",children:[z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:z(Lu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),z("div",{class:`margin-${this.dir[0]}`,children:t||n?z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[z("div",{class:"preview-title ellipsis",children:t?t.name:Pt.search_no_results_1}),z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Pt.search_no_results_2})]}):z("div",{class:"preview-placeholder color-c",children:Pt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,c=this.state.tempSkin||this.state.skin,d=(t.skins[c-1]||t.skins[0]).native,p=HC(this.state.pos,n),h=n.concat(t.id).join("");return z(oS,{selected:p,skin:c,size:a,children:z("button",{"aria-label":d,"aria-selected":p||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:m=>this.handleEmojiClick({e:m,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),z(Lu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:c,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return z("div",{children:[z("div",{class:"spacer"}),z("div",{class:"flex flex-middle",children:[z("div",{class:"search relative flex-grow",children:[z("input",{type:"search",ref:this.refs.searchInput,placeholder:Pt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),z("span",{class:"icon loupe flex",children:sl.search.loupe}),this.state.searchResults&&z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:sl.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?z("div",{class:"category",ref:this.refs.search,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Pt.categories.search}),z("div",{children:t.length?t.map((n,i)=>z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&z("a",{onClick:this.props.onAddCustomEmoji,children:Pt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Me,n=!!this.state.searchResults,i=this.getPerLine();return z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:c}=this.refs.categories.get(o.id);return z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Pt.categories[o.id]}),z("div",{class:"relative",style:{height:c.length*this.props.emojiButtonSize},children:c.map((u,d)=>{const p=u.index-u.index%Ta.rowsPerRender,h=this.state.visibleRows[p],m="current"in u?u:void 0;if(!h&&!m)return null;const v=d*i,w=v+i,$=o.emojis.slice(v,w);return $.length<i&&$.push(...new Array(i-$.length)),z("div",{"data-index":u.index,ref:m,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&$.map((E,k)=>{if(!E)return z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=qi.get(E);return this.renderEmojiButton(C,{pos:[u.index,k],posinset:u.posinset+k,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Pt.skins.choose,title:Pt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Pt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const c=a+1,u=this.state.skin==c;return z("div",{children:[z("input",{type:"radio",name:"skin-tone",value:c,"aria-label":Pt.skins[c],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(c),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(c))}}),z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(c),onMouseEnter:()=>this.handleSkinMouseOver(c),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[z("span",{class:`skin-tone skin-tone-${c}`}),z("span",{class:"margin-small-lr",children:Pt.skins[c]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&z("div",{class:"padding-lr",children:this.renderSearch()}),z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),Rn(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Rn(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Rn(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Rn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Rn(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await qi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const c=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let p of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(p);this.ignoreMouse(),this.setState({searchResults:u,pos:c},a)}),Rn(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Rn(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Rn(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Rn(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await zC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class yd extends KC{async connectedCallback(){const t=Cm(this.props,fr,this);t.element=this,t.ref=n=>{this.component=n},await Rl(t),!this.disconnected&&bm(z(aS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:am(Rm)})}}Rn(yd,"Props",fr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",yd);var Rm={};Rm=`:host {
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

`;const Om=e=>{let t;const[n,i]=$e(void 0);return _(md,{ref:c=>{t=c},position:"bottom",get button(){return e.children},onOpen:()=>{const c=new yd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(c)},onClose:()=>{i(void 0)},get children(){return n()}})},lS=P("<div>"),cS=P('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),uS=P("<br>"),dS=P("<span>理由: "),fS=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),hS=e=>{const[t,n]=$e(!1);return _(le,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=fS();return i.firstChild,i.$$click=()=>n(!0),I(i,_(le,{get when(){return e.contentWarning.reason!=null},get children(){return[uS(),(()=>{const o=dS();return o.firstChild,I(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=lS();return I(i,()=>e.children),i})(),_(le,{get when(){return e.contentWarning.contentWarning},get children(){const i=cS();return i.$$click=()=>n(!1),i}})]}})};bt(["click"]);const Lm=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return _(le,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Tl(e.pubkey)}`},get children(){return["@",Ve(()=>t()?.name??e.pubkey)]}})},pS=P('<a target="_blank" rel="noreferrer noopener">'),Ol=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return _(le,{get when(){return t()},get fallback(){return e.href},get children(){const n=pS();return I(n,()=>e.children??e.href),Be(i=>{const o=e.class,a=e.href;return o!==i._v$&&l4(n,i._v$=o),a!==i._v$2&&yt(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},gS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},mS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},vS=P('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),yS=P('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),bS=e=>{let t;const[n,i]=$e(e.initialHidden);return _(le,{get when(){return!n()},get fallback(){return(()=>{const o=yS();return o.$$click=()=>i(!1),o})()},get children(){return _(Ol,{class:"my-2 block",get href(){return e.url},get children(){const o=vS(),a=t;return typeof a=="function"?mr(a,o):t=o,Be(c=>{const u=mS(e.url),d=e.url;return u!==c._v$&&yt(o,"src",c._v$=u),d!==c._v$2&&yt(o,"alt",c._v$2=d),c},{_v$:void 0,_v$2:void 0}),o}})}})};bt(["click"]);const _S=P('<div class="my-1 rounded border p-1">'),wS=e=>_(le,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return _(no,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=_S();return I(t,_(go,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[wt.Text]}})),t}}),xS=P('<button class="inline text-blue-500 underline">'),lu=e=>{const{showProfile:t}=ei(),n=()=>{t(e.pubkey)};return(()=>{const i=xS();return i.$$click=n,I(i,_(Lm,{get pubkey(){return e.pubkey}})),i})()};bt(["click"]);const[bd,$S]=$e({}),Pm=e=>{bd()[e]==null&&$S(t=>({...t,[e]:new MessageChannel}))},kS=e=>{const t=()=>bd()[e().id],n=(o,a)=>{const c={requestId:o,request:a};t().port1.postMessage(c)},i=(o,a=1e3)=>new Promise((c,u)=>{let d;const p=h=>{const m=h.data;m.requestId===o&&(t().port1.removeEventListener("message",p),m.ok?c(m.response):u(m.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",p),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",p,!1),t().port1.start()});return kn(()=>{const{id:o}=e();Pm(o)}),async o=>{const a=Math.random().toString(),c=i(a);return n(a,o),c}},CS=e=>{const t=Ve(e),n=()=>bd()[t().id];kn(()=>{const{id:i}=t();Pm(i);const o=n().port2,a=c=>{const{requestId:u,request:d}=c.data,p=t().handler(d);(p instanceof Promise?p:Promise.resolve(p)).then(m=>{const v={requestId:u,ok:!0,response:m};o.postMessage(v)}).catch(m=>{const v={requestId:u,ok:!1,error:m};o.postMessage(v)})};o.addEventListener("message",a),o.start(),Xr(()=>{o.removeEventListener("message",a)})})},Co=()=>kS(()=>({id:"CommandChannel"})),Bu=e=>{CS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},{decode:SS}=xo,ES=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,TS=/(?:#\[(?<idx>\d+)\])/g,AS=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent)1[ac-hj-np-z02-9]+))/gi,IS=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,RS=/:(?<emoji>\w+):/gu,Mm=e=>{const t=[...e.matchAll(ES),...e.matchAll(TS),...e.matchAll(AS),...e.matchAll(IS),...e.matchAll(RS)].sort((a,c)=>a.index-c.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const c=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=c;else{const d={type:"PlainText",content:c};i.push(d)}n=a}};return t.forEach(a=>{const{index:c}=a;if(!(c<n)){if(a.groups?.url){o(c);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(c),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(c);try{const u=SS(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(c+a[0].length)}}else if(a.groups?.hashtag){o(c);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(c);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=c+a[0].length}}),n<e.length&&o(e.length),i},OS=({tagIndex:e,content:t},n)=>{const i=n.tags[e];if(i==null)return null;const o=i[0];if(o==="p"&&Gs(i[1]))return{type:"MentionedUser",tagIndex:e,content:t,pubkey:i[1]};if(o==="e"&&Gs(i[1])){const a=$n(n).markedEventTags().find(c=>c.index===e);return{type:"MentionedEvent",tagIndex:e,content:t,eventId:i[1],marker:a?.marker}}return null},cu=P("<span>"),x0=P('<div class="my-1 rounded border p-1">'),LS=P('<span class="text-blue-500 underline">'),PS=P('<button class="text-blue-500 underline">'),MS=P('<img class="inline-block h-8 max-w-[128px] align-middle">'),BS=e=>{const{config:t,saveColumn:n}=De(),i=Co(),o=()=>$n(e.event),a=c=>{n(hd({query:c})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return _(Mt,{get each(){return Mm(e.event.content)},children:c=>{if(c.type==="PlainText")return(()=>{const u=cu();return I(u,()=>c.content),u})();if(c.type==="URL")return gS(c.content)?_(bS,{get url(){return c.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):_(Ol,{class:"text-blue-500 underline",get href(){return c.content}});if(c.type==="TagReference"){const u=OS(c,e.event);if(u==null)return(()=>{const d=cu();return I(d,()=>c.content),d})();if(u.type==="MentionedUser")return _(lu,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?_(wS,{mentionedEvent:u}):_(no,{get eventId(){return u.eventId}})}if(c.type==="Bech32Entity")return c.data.type==="note"&&e.embedding?(()=>{const u=x0();return I(u,_(go,{get eventId(){return c.data.data},actions:!1,embedding:!1,get ensureKinds(){return[wt.Text]}})),u})():c.data.type==="nevent"&&e.embedding?(()=>{const u=x0();return I(u,_(go,{get eventId(){return c.data.data.id},actions:!1,embedding:!1})),u})():c.data.type==="npub"?_(lu,{get pubkey(){return c.data.data}}):c.data.type==="nprofile"?_(lu,{get pubkey(){return c.data.data.pubkey}}):(()=>{const u=LS();return I(u,()=>c.content),u})();if(c.type==="HashTag")return(()=>{const u=PS();return u.$$click=()=>a(c.content),I(u,()=>c.content),u})();if(c.type==="CustomEmoji"){const u=o().getEmojiUrl(c.shortcode);return u==null?(()=>{const d=cu();return I(d,()=>c.content),d})():(()=>{const d=MS();return yt(d,"src",u),Be(()=>yt(d,"alt",c.content)),d})()}return console.error("Not all ParsedTextNoteNodes are covered",c),null}})};bt(["click"]);const jS=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Bm=(e={})=>(()=>{const t=jS();return Xe(t,e,!0,!0),t})(),US=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),DS=(e={})=>(()=>{const t=US();return Xe(t,e,!0,!0),t})(),NS=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),ss=(e={})=>(()=>{const t=NS();return Xe(t,e,!0,!0),t})(),HS=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),zS=(e={})=>(()=>{const t=HS();return Xe(t,e,!0,!0),t})(),FS=e=>Math.floor(+e/1e3),ur=()=>FS(new Date),WS=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),ZS=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:c,tags:u})=>{const d=[],p=e?.map(m=>["p",m])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),n?.forEach(m=>d.push(["e",m,"","mention"])),i!=null&&d.push(["e",i,"","reply"]),a?.forEach(m=>h.push(["t",m])),c?.forEach(m=>h.push(["r",m])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...p,...h]},Ll=()=>{const e=El(),t=async(d,p)=>{const h={...p};if(h.id=T1(h),window.nostr==null)throw new Error("NIP-07 implementation not found");const m=await window.nostr.signEvent(h);return d.map(async v=>{const $=(await e().ensureRelay(v)).publish(m);return WS($,v)})};return{publishTextNote:async d=>{const{relayUrls:p,pubkey:h,content:m}=d,v=ZS(d),w={kind:1,pubkey:h,created_at:ur(),tags:v,content:m};return t(p,w)},publishReaction:async({relayUrls:d,pubkey:p,eventId:h,content:m,notifyPubkey:v})=>{const w={kind:7,pubkey:p,created_at:ur(),tags:[["e",h,""],["p",v]],content:m};return t(d,w)},publishRepost:async({relayUrls:d,pubkey:p,eventId:h,notifyPubkey:m})=>{const v={kind:6,pubkey:p,created_at:ur(),tags:[["e",h,""],["p",m]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:p,profile:h,otherProperties:m})=>{const v={...h,...m},w={kind:wt.Metadata,pubkey:p,created_at:ur(),tags:[],content:JSON.stringify(v)};return t(d,w)},updateContacts:async({relayUrls:d,pubkey:p,followingPubkeys:h,content:m})=>{const v=h.map($=>["p",$]),w={kind:wt.Contacts,pubkey:p,created_at:ur(),tags:v,content:m};return t(d,w)},deleteEvent:async({relayUrls:d,pubkey:p,eventId:h})=>{const m={kind:wt.EventDeletion,pubkey:p,created_at:ur(),tags:[["e",h,""]],content:""};return t(d,m)}}};let uu=!1;const[Aa,qS]=$e(void 0),_r=()=>(kn(()=>{if(Aa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),Aa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Aa()==null&&!uu&&(uu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),qS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{uu=!1})),e+=1},200)}),Aa),KS=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},VS=e=>t=>Promise.allSettled(t.map(n=>e(n))),GS=P("<div>に返信"),QS=P('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),XS=P('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),YS=P('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),JS=P('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),eE=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},tE=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(c=>{c.type==="URL"?o.push(c.content):c.type==="HashTag"?t.push(c.tagName):c.type==="Bech32Entity"?c.data.type==="npub"?n.push(c.data.data):c.data.type==="note"&&i.push(c.data.data):c.type==="CustomEmoji"&&!a.includes(c.shortcode)&&a.push(c.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},nE=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},jm=e=>{let t,n;const[i,o]=$e(""),[a,c]=$e(!1),[u,d]=$e(""),p=ce=>o(ye=>`${ye} ${ce}`),h=()=>{o(""),d(""),c(!1)},m=()=>{t?.blur(),h(),e.onClose()},{config:v,getEmoji:w}=De(),$=_r(),E=Ll(),k=()=>e.replyTo&&$n(e.replyTo),C=()=>e.mode??"normal",M=pi({mutationKey:["publishTextNote"],mutationFn:E.publishTextNote.bind(E),onSuccess:()=>{console.log("succeeded to post"),h(),e.onPost?.()},onError:ce=>{console.error("error",ce)}}),B=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},R=pi({mutationKey:["uploadFiles"],mutationFn:ce=>VS(KS)(ce).then(ye=>{ye.forEach(G=>{G.status==="fulfilled"?(console.log("succeeded to upload",G),p(G.value.imageUrl),B()):console.error("failed to upload",G)})}).catch(ye=>console.error(ye))}),T=Ve(()=>k()?.mentionedPubkeysWithoutAuthor()??[]),L=Ve(()=>T().filter(ce=>ce!==$())),H=(ce,ye)=>e.replyTo==null?ye:Fr([e.replyTo.pubkey,...L(),...ye]),W=ce=>{const ye=[];return ce.forEach(G=>{const Oe=w(G);Oe!=null&&ye.push(["emoji",G,Oe.url])}),ye},re=()=>{if(i().length===0||M.isLoading)return;const ce=$();if(ce==null){console.error("pubkey is not available");return}const ye=Mm(i()),{hashtags:G,urlReferences:Oe,pubkeyReferences:Ye,eventReferences:kt,emojis:ot}=tE(ye),jt=nE(ye),un=W(ot);let K={relayUrls:v().relayUrls,pubkey:ce,content:jt,notifyPubkeys:Ye,mentionEventIds:kt,hashtags:G,urls:Oe,tags:un};k()!=null&&(K={...K,notifyPubkeys:H(ce,Ye),rootEventId:k()?.rootEvent()?.id??k()?.id,replyEventId:k()?.id}),a()&&(K={...K,contentWarning:u()}),M.mutate(K),m()},V=ce=>{o(ce.currentTarget.value),B()},ie=ce=>{ce.preventDefault(),re()},Z=ce=>{ce.key==="Enter"&&(ce.ctrlKey||ce.metaKey)?re():ce.key==="Escape"&&(t?.blur(),m())},X=ce=>{ce.preventDefault();const ye=[...ce.currentTarget.files??[]];R.mutate(ye),ce.currentTarget.value=""},oe=ce=>{if(ce.preventDefault(),R.isLoading)return;const ye=[...ce?.dataTransfer?.files??[]];R.mutate(ye)},Ze=ce=>{if(R.isLoading)return;const ye=[...ce?.clipboardData?.items??[]],G=[];ye.forEach(Oe=>{if(Oe.kind==="file"){ce.preventDefault();const Ye=Oe.getAsFile();if(Ye==null)return;G.push(Ye)}}),G.length!==0&&R.mutate(G)},J=ce=>{ce.preventDefault()},ve=()=>i().trim().length===0||M.isLoading||R.isLoading,ke=()=>R.isLoading;return kn(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const ce=JS(),ye=ce.firstChild,G=ye.firstChild,Oe=G.nextSibling,Ye=Oe.firstChild,kt=Ye.nextSibling,ot=kt.nextSibling,jt=Oe.nextSibling;I(ce,_(le,{get when(){return T().length>0},get children(){const K=GS(),se=K.firstChild;return I(K,_(Mt,{get each(){return T()},children:_t=>[_(Al,{pubkey:_t})," "]}),se),K}}),ye),ye.addEventListener("submit",ie),I(ye,_(le,{get when(){return a()},get children(){const K=QS();return K.$$input=se=>d(se.currentTarget.value),Be(()=>K.value=u()),K}}),G),G.addEventListener("paste",Ze),G.addEventListener("drop",oe),G.addEventListener("dragover",J),G.$$keydown=Z,G.$$input=V,mr(K=>{t=K,e.textAreaRef?.(K)},G),I(Oe,_(le,{get when(){return C()==="reply"},get children(){const K=XS(),se=K.firstChild;return se.$$click=()=>m(),I(se,_(ss,{})),K}}),Ye),I(Oe,_(Om,{customEmojis:!0,onEmojiSelect:K=>p(K),get children(){const K=YS();return I(K,_(Bm,{})),K}}),Ye),Ye.$$click=()=>c(K=>!K),kt.$$click=()=>n?.click(),I(kt,_(DS,{})),I(ot,_(zS,{})),jt.addEventListener("change",X);const un=n;return typeof un=="function"?mr(un,jt):n=jt,Be(K=>{const se=eE(C()),_t=!a(),gt=!!a(),Rt=C()==="normal",Nn=C()==="normal",at=C()==="reply",Wt=C()==="reply",xr=!!ke(),ht=!ke(),Ut=C()==="normal",Jn=C()==="normal",be=C()==="reply",ze=C()==="reply",lt=ke(),Ct=!!ve(),Xt=!ve(),ue=C()==="normal",dn=C()==="normal",Le=C()==="reply",rt=C()==="reply",Zt=ve();return se!==K._v$&&yt(G,"placeholder",K._v$=se),_t!==K._v$2&&Ye.classList.toggle("bg-rose-300",K._v$2=_t),gt!==K._v$3&&Ye.classList.toggle("bg-rose-400",K._v$3=gt),Rt!==K._v$4&&Ye.classList.toggle("h-8",K._v$4=Rt),Nn!==K._v$5&&Ye.classList.toggle("w-8",K._v$5=Nn),at!==K._v$6&&Ye.classList.toggle("h-7",K._v$6=at),Wt!==K._v$7&&Ye.classList.toggle("w-7",K._v$7=Wt),xr!==K._v$8&&kt.classList.toggle("bg-primary-disabled",K._v$8=xr),ht!==K._v$9&&kt.classList.toggle("bg-primary",K._v$9=ht),Ut!==K._v$10&&kt.classList.toggle("h-8",K._v$10=Ut),Jn!==K._v$11&&kt.classList.toggle("w-8",K._v$11=Jn),be!==K._v$12&&kt.classList.toggle("h-7",K._v$12=be),ze!==K._v$13&&kt.classList.toggle("w-7",K._v$13=ze),lt!==K._v$14&&(kt.disabled=K._v$14=lt),Ct!==K._v$15&&ot.classList.toggle("bg-primary-disabled",K._v$15=Ct),Xt!==K._v$16&&ot.classList.toggle("bg-primary",K._v$16=Xt),ue!==K._v$17&&ot.classList.toggle("h-8",K._v$17=ue),dn!==K._v$18&&ot.classList.toggle("w-8",K._v$18=dn),Le!==K._v$19&&ot.classList.toggle("h-7",K._v$19=Le),rt!==K._v$20&&ot.classList.toggle("w-7",K._v$20=rt),Zt!==K._v$21&&(ot.disabled=K._v$21=Zt),K},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Be(()=>G.value=i()),ce})()};bt(["input","keydown","click"]);const Um=c4(),rE=()=>u4(Um),iE=()=>{const[e,t]=Ki({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},sE=P('<div class="flex gap-2 py-1">'),oE=P('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),aE=P('<span class="ml-1 text-sm">'),lE=P('<button class="flex h-6 items-center rounded border px-1" type="button">'),cE=P('<span class="text-base">'),uE=P('<span class="text-red-500">削除'),dE=P('<img alt="icon" class="h-full w-full rounded object-cover">'),fE=P('<div class="author-name truncate pr-1 font-bold hover:underline">'),hE=P('<div class="text-xs">への返信'),pE=P('<div class="content whitespace-pre-wrap break-all">'),gE=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),$0=P('<div class="text-sm text-zinc-400">'),mE=P('<span class="inline-block h-4 w-4">'),vE=P('<div class="flex shrink-0 items-center gap-1">'),yE=P('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),bE=P('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),_E=P('<div class="nostr-textnote flex flex-col"><div class="flex w-full gap-1"><button class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></button><div class="created-at shrink-0"><a type="button" class="hover:underline"></a></div></div><div class="overflow-hidden">'),wE=P('<div class="mt-1 rounded border p-1">'),xE=P('<button class="pr-1 text-blue-500 hover:underline">'),{noteEncode:k0}=xo,$E=e=>{const{config:t}=De(),n=_r();return(()=>{const i=sE();return I(i,_(Mt,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const c=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=lE();return u.$$click=()=>e.onReaction(o),I(u,_(le,{when:o==="+",get fallback(){return(()=>{const d=cE();return I(d,o),d})()},get children(){const d=oE();return I(d,_(gd,{})),d}}),null),I(u,_(le,{get when(){return!t().hideCount},get children(){const d=aE();return I(d,()=>a.length),d}}),null),Be(d=>qs(u,{"text-zinc-400":!c,"hover:bg-zinc-50":!c,"bg-rose-50":c,"border-rose-200":c,"text-rose-400":c},d)),u})()}})),i})()},Dm=e=>{let t;const{config:n}=De(),i=nm(),o=_r(),{showProfile:a}=ei(),c=rE(),[u,d]=$e(!1),[p,h]=$e(!1),[m,v]=$e(!1),w=()=>v(!1),[$,E]=$e(!1),[k,C]=$e(!1),M=Ve(()=>$n(e.event)),B=()=>e.embedding??!0,R=()=>e.actions??!0,{profile:T}=ms(()=>({pubkey:e.event.pubkey})),{reactions:L,reactionsGroupedByContent:H,isReactedBy:W,isReactedByWithEmoji:re,invalidateReactions:V,query:ie}=Yk(()=>({eventId:e.event.id})),{reposts:Z,isRepostedBy:X,invalidateReposts:oe,query:Ze}=Jk(()=>({eventId:e.event.id})),J=Ll(),ve=pi({mutationKey:["publishReaction",M().id],mutationFn:J.publishReaction.bind(J),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:se=>{console.error("failed to publish reaction: ",se)},onSettled:()=>{V().then(()=>ie.refetch()).catch(se=>console.error("failed to refetch reactions",se))}}),ke=pi({mutationKey:["publishRepost",M().id],mutationFn:J.publishRepost.bind(J),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:se=>{console.error("failed to publish repost: ",se)},onSettled:()=>{oe().then(()=>Ze.refetch()).catch(se=>console.error("failed to refetch reposts",se))}}),ce=pi({mutationKey:["deleteEvent",M().id],mutationFn:(...se)=>J.deleteEvent(...se).then(_t=>Promise.allSettled(_t.map(Jr(1e4)))),onSuccess:se=>{const _t=se.filter(Rt=>Rt.status==="fulfilled").length,gt=se.length-_t;_t===se.length?window.alert("削除しました（画面の反映にはリロード）"):_t>0?window.alert(`${gt}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:se=>{console.error("failed to delete",se)}}),ye=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(k0(e.event.id)).catch(se=>window.alert(se))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event)).catch(se=>window.alert(se))}},{when:()=>M().pubkey===o(),content:()=>uE(),onSelect:()=>{const se=o();se!=null&&window.confirm("本当に削除しますか？")&&ce.mutate({relayUrls:n().relayUrls,pubkey:se,eventId:M().id})}}],G=Ve(()=>{const se=o();return se!=null&&W(se)||u()}),Oe=Ve(()=>{const se=o();return se!=null&&re(se)}),Ye=Ve(()=>{const se=o();return se!=null&&X(se)||p()}),kt=()=>{const se=M().replyingToEvent();if(B()&&se!=null&&!M().containsEventMentionIndex(se.index))return se.id},ot=()=>i(M().createdAtAsDate()),jt=se=>{se.stopPropagation(),!Ye()&&ln([o(),e.event.id])(([_t,gt])=>{ke.mutate({relayUrls:n().relayUrls,pubkey:_t,eventId:gt,notifyPubkey:e.event.pubkey}),h(!0)})},un=se=>{G()||ln([o(),e.event.id])(([_t,gt])=>{ve.mutate({relayUrls:n().relayUrls,pubkey:_t,content:se??"+",eventId:gt,notifyPubkey:e.event.pubkey}),d(!0)})},K=se=>{se.stopPropagation(),un()};return kn(()=>{t!=null&&C(t.scrollHeight>t.clientHeight)}),(()=>{const se=_E(),_t=se.firstChild,gt=_t.firstChild,Rt=gt.nextSibling,Nn=Rt.firstChild,at=Nn.firstChild,Wt=at.firstChild,xr=at.nextSibling,ht=xr.firstChild,Ut=Nn.nextSibling;gt.$$click=be=>{be.stopPropagation(),a(M().pubkey)},I(gt,_(le,{get when(){return T()?.picture},get children(){const be=dE();return Be(()=>yt(be,"src",T()?.picture)),be}})),at.$$click=be=>{be.stopPropagation(),a(M().pubkey)},I(at,_(le,{get when(){return(T()?.display_name?.length??0)>0},get children(){const be=fE();return I(be,()=>T()?.display_name),be}}),Wt),I(Wt,_(le,{get when(){return T()?.name!=null},get fallback(){return`@${Tl(M().pubkey)}`},get children(){return["@",Ve(()=>T()?.name)]}})),ht.$$click=be=>{be.preventDefault(),c?.setTimeline({type:"Replies",event:e.event})},I(ht,ot);const Jn=t;return typeof Jn=="function"?mr(Jn,Ut):t=Ut,I(Ut,_(le,{get when(){return kt()},keyed:!0,children:be=>(()=>{const ze=wE();return I(ze,_(go,{eventId:be,actions:!1,embedding:!1})),ze})()}),null),I(Ut,_(le,{get when(){return M().mentionedPubkeys().length>0},get children(){const be=hE(),ze=be.firstChild;return I(be,_(Mt,{get each(){return M().mentionedPubkeys()},children:lt=>(()=>{const Ct=xE();return Ct.$$click=Xt=>{Xt.stopPropagation(),a(lt)},I(Ct,_(Lm,{pubkey:lt})),Ct})()}),ze),be}}),null),I(Ut,_(hS,{get contentWarning(){return M().contentWarning()},get children(){const be=pE();return I(be,_(BS,{get event(){return e.event},get embedding(){return B()}})),be}}),null),I(Rt,_(le,{get when(){return k()},get children(){const be=gE();return be.$$click=ze=>{ze.stopPropagation(),E(lt=>!lt)},I(be,_(le,{get when(){return!$()},fallback:"隠す",children:"続きを読む"})),be}}),null),I(Rt,_(le,{get when(){return R()},get children(){return[_(le,{get when(){return Ve(()=>!!n().showEmojiReaction)()&&L().length>0},get children(){return _($E,{get reactionsGroupedByContent(){return H()},onReaction:un})}}),(()=>{const be=bE(),ze=be.firstChild,lt=ze.nextSibling,Ct=lt.firstChild,Xt=lt.nextSibling,ue=Xt.firstChild,dn=Xt.nextSibling;return ze.$$click=Le=>{Le.stopPropagation(),v(rt=>!rt)},I(ze,_(hC,{})),Ct.$$click=jt,I(Ct,_(M1,{})),I(lt,_(le,{get when(){return Ve(()=>!n().hideCount)()&&Z().length>0},get children(){const Le=$0();return I(Le,()=>Z().length),Le}}),null),ue.$$click=K,I(ue,_(le,{get when(){return Ve(()=>!!G())()&&!Oe()},get fallback(){return _(pd,{})},get children(){return _(gd,{})}})),I(Xt,_(le,{get when(){return Ve(()=>!n().hideCount&&!n().showEmojiReaction)()&&L().length>0},get children(){const Le=$0();return I(Le,()=>L().length),Le}}),null),I(be,_(le,{get when(){return n().useEmojiReaction},get children(){const Le=vE();return I(Le,_(Om,{onEmojiSelect:rt=>un(rt),get children(){const rt=mE();return I(rt,_(sm,{})),rt}})),Be(rt=>qs(Le,{"text-zinc-400":!G()||!Oe(),"hover:text-rose-400":!G()||!Oe(),"text-rose-400":G()&&Oe()||ve.isLoading},rt)),Le}}),dn),I(dn,_(om,{menu:ye,get children(){const Le=yE();return I(Le,_(im,{})),Le}})),Be(Le=>{const rt={"text-zinc-400":!Ye(),"hover:text-green-400":!Ye(),"text-green-400":Ye()||ke.isLoading},Zt=ke.isLoading,Cn={"text-zinc-400":!G()||Oe(),"hover:text-rose-400":!G()||Oe(),"text-rose-400":G()&&!Oe()||ve.isLoading},fn=ve.isLoading;return Le._v$=qs(lt,rt,Le._v$),Zt!==Le._v$2&&(Ct.disabled=Le._v$2=Zt),Le._v$3=qs(Xt,Cn,Le._v$3),fn!==Le._v$4&&(ue.disabled=Le._v$4=fn),Le},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),be})()]}}),null),I(se,_(le,{get when(){return m()},get children(){return _(jm,{mode:"reply",get replyTo(){return e.event},onClose:w,onPost:w})}}),null),Be(be=>{const ze=`nostr:${k0(M().id)}`,lt=!$();return ze!==be._v$5&&yt(ht,"href",be._v$5=ze),lt!==be._v$6&&Ut.classList.toggle("max-h-screen",be._v$6=lt),be},{_v$5:void 0,_v$6:void 0}),se})()};bt(["click"]);const Nm=e=>{const{shouldMuteEvent:t}=De();return _(le,{get when(){return!t(e.event)},get children(){return _(Dm,e)}})},kE=P("<span>予期しないイベント種別（<!>）"),CE=P("<span><span>未対応のイベント種別（<!>）"),Hm=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return _(Pn,{get fallback(){return(()=>{const n=CE(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,I(i,()=>e.event.kind,a),I(n,_(no,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[_(Fe,{get when(){return!t()},keyed:!0,get children(){const n=kE(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,I(n,()=>e.event.kind,o),I(n,_(no,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),_(Fe,{get when(){return e.event.kind===wt.Text},get children(){return _(Nm,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),_(Fe,{get when(){return e.event.kind===6},get children(){return _(rm,{get event(){return e.event}})}})]}})},vs=e=>{const{shouldMuteEvent:t}=De();return _(Mt,{get each(){return e.events},children:n=>_(le,{get when(){return!t(n)},get children(){return _(Ra,{get children(){return _(Hm,{event:n})}})}})})};var SE=gl;function EE(){this.__data__=new SE,this.size=0}var TE=EE;function AE(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var IE=AE;function RE(e){return this.__data__.get(e)}var OE=RE;function LE(e){return this.__data__.has(e)}var PE=LE,ME=gl,BE=Ku,jE=Vu,UE=200;function DE(e,t){var n=this.__data__;if(n instanceof ME){var i=n.__data__;if(!BE||i.length<UE-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new jE(i)}return n.set(e,t),this.size=n.size,this}var NE=DE,HE=gl,zE=TE,FE=IE,WE=OE,ZE=PE,qE=NE;function ys(e){var t=this.__data__=new HE(e);this.size=t.size}ys.prototype.clear=zE;ys.prototype.delete=FE;ys.prototype.get=WE;ys.prototype.has=ZE;ys.prototype.set=qE;var _d=ys;function KE(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var VE=KE,GE=$g,QE=VE,XE=kg,YE=1,JE=2;function eT(e,t,n,i,o,a){var c=n&YE,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var p=a.get(e),h=a.get(t);if(p&&h)return p==t&&h==e;var m=-1,v=!0,w=n&JE?new GE:void 0;for(a.set(e,t),a.set(t,e);++m<u;){var $=e[m],E=t[m];if(i)var k=c?i(E,$,m,t,e,a):i($,E,m,e,t,a);if(k!==void 0){if(k)continue;v=!1;break}if(w){if(!QE(t,function(C,M){if(!XE(w,M)&&($===C||o($,C,n,i,a)))return w.push(M)})){v=!1;break}}else if(!($===E||o($,E,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var zm=eT,tT=Un,nT=tT.Uint8Array,Fm=nT;function rT(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var iT=rT,C0=ls,S0=Fm,sT=qu,oT=zm,aT=iT,lT=Gu,cT=1,uT=2,dT="[object Boolean]",fT="[object Date]",hT="[object Error]",pT="[object Map]",gT="[object Number]",mT="[object RegExp]",vT="[object Set]",yT="[object String]",bT="[object Symbol]",_T="[object ArrayBuffer]",wT="[object DataView]",E0=C0?C0.prototype:void 0,du=E0?E0.valueOf:void 0;function xT(e,t,n,i,o,a,c){switch(n){case wT:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case _T:return!(e.byteLength!=t.byteLength||!a(new S0(e),new S0(t)));case dT:case fT:case gT:return sT(+e,+t);case hT:return e.name==t.name&&e.message==t.message;case mT:case yT:return e==t+"";case pT:var u=aT;case vT:var d=i&cT;if(u||(u=lT),e.size!=t.size&&!d)return!1;var p=c.get(e);if(p)return p==t;i|=uT,c.set(e,t);var h=oT(u(e),u(t),i,o,a,c);return c.delete(e),h;case bT:if(du)return du.call(e)==du.call(t)}return!1}var $T=xT;function kT(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var wd=kT,CT=Array.isArray,Yn=CT,ST=wd,ET=Yn;function TT(e,t,n){var i=t(e);return ET(e)?i:ST(i,n(e))}var Wm=TT;function AT(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var c=e[n];t(c,n,e)&&(a[o++]=c)}return a}var IT=AT;function RT(){return[]}var Zm=RT,OT=IT,LT=Zm,PT=Object.prototype,MT=PT.propertyIsEnumerable,T0=Object.getOwnPropertySymbols,BT=T0?function(e){return e==null?[]:(e=Object(e),OT(T0(e),function(t){return MT.call(e,t)}))}:LT,xd=BT;function jT(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var UT=jT;function DT(e){return e!=null&&typeof e=="object"}var ti=DT,NT=cs,HT=ti,zT="[object Arguments]";function FT(e){return HT(e)&&NT(e)==zT}var WT=FT,A0=WT,ZT=ti,qm=Object.prototype,qT=qm.hasOwnProperty,KT=qm.propertyIsEnumerable,VT=A0(function(){return arguments}())?A0:function(e){return ZT(e)&&qT.call(e,"callee")&&!KT.call(e,"callee")},$d=VT,al={exports:{}};function GT(){return!1}var QT=GT;al.exports;(function(e,t){var n=Un,i=QT,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,c=a&&a.exports===o,u=c?n.Buffer:void 0,d=u?u.isBuffer:void 0,p=d||i;e.exports=p})(al,al.exports);var kd=al.exports,XT=9007199254740991,YT=/^(?:0|[1-9]\d*)$/;function JT(e,t){var n=typeof e;return t=t??XT,!!t&&(n=="number"||n!="symbol"&&YT.test(e))&&e>-1&&e%1==0&&e<t}var Cd=JT,eA=9007199254740991;function tA(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=eA}var Sd=tA,nA=cs,rA=Sd,iA=ti,sA="[object Arguments]",oA="[object Array]",aA="[object Boolean]",lA="[object Date]",cA="[object Error]",uA="[object Function]",dA="[object Map]",fA="[object Number]",hA="[object Object]",pA="[object RegExp]",gA="[object Set]",mA="[object String]",vA="[object WeakMap]",yA="[object ArrayBuffer]",bA="[object DataView]",_A="[object Float32Array]",wA="[object Float64Array]",xA="[object Int8Array]",$A="[object Int16Array]",kA="[object Int32Array]",CA="[object Uint8Array]",SA="[object Uint8ClampedArray]",EA="[object Uint16Array]",TA="[object Uint32Array]",st={};st[_A]=st[wA]=st[xA]=st[$A]=st[kA]=st[CA]=st[SA]=st[EA]=st[TA]=!0;st[sA]=st[oA]=st[yA]=st[aA]=st[bA]=st[lA]=st[cA]=st[uA]=st[dA]=st[fA]=st[hA]=st[pA]=st[gA]=st[mA]=st[vA]=!1;function AA(e){return iA(e)&&rA(e.length)&&!!st[nA(e)]}var IA=AA;function RA(e){return function(t){return e(t)}}var Ed=RA,ll={exports:{}};ll.exports;(function(e,t){var n=bg,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||c&&c.binding&&c.binding("util")}catch{}}();e.exports=u})(ll,ll.exports);var Td=ll.exports,OA=IA,LA=Ed,I0=Td,R0=I0&&I0.isTypedArray,PA=R0?LA(R0):OA,Km=PA,MA=UT,BA=$d,jA=Yn,UA=kd,DA=Cd,NA=Km,HA=Object.prototype,zA=HA.hasOwnProperty;function FA(e,t){var n=jA(e),i=!n&&BA(e),o=!n&&!i&&UA(e),a=!n&&!i&&!o&&NA(e),c=n||i||o||a,u=c?MA(e.length,String):[],d=u.length;for(var p in e)(t||zA.call(e,p))&&!(c&&(p=="length"||o&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||DA(p,d)))&&u.push(p);return u}var Vm=FA,WA=Object.prototype;function ZA(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||WA;return e===n}var Ad=ZA;function qA(e,t){return function(n){return e(t(n))}}var Gm=qA,KA=Gm,VA=KA(Object.keys,Object),GA=VA,QA=Ad,XA=GA,YA=Object.prototype,JA=YA.hasOwnProperty;function eI(e){if(!QA(e))return XA(e);var t=[];for(var n in Object(e))JA.call(e,n)&&n!="constructor"&&t.push(n);return t}var tI=eI,nI=wg,rI=Sd;function iI(e){return e!=null&&rI(e.length)&&!nI(e)}var Qm=iI,sI=Vm,oI=tI,aI=Qm;function lI(e){return aI(e)?sI(e):oI(e)}var Pl=lI,cI=Wm,uI=xd,dI=Pl;function fI(e){return cI(e,dI,uI)}var Xm=fI,O0=Xm,hI=1,pI=Object.prototype,gI=pI.hasOwnProperty;function mI(e,t,n,i,o,a){var c=n&hI,u=O0(e),d=u.length,p=O0(t),h=p.length;if(d!=h&&!c)return!1;for(var m=d;m--;){var v=u[m];if(!(c?v in t:gI.call(t,v)))return!1}var w=a.get(e),$=a.get(t);if(w&&$)return w==t&&$==e;var E=!0;a.set(e,t),a.set(t,e);for(var k=c;++m<d;){v=u[m];var C=e[v],M=t[v];if(i)var B=c?i(M,C,v,t,e,a):i(C,M,v,e,t,a);if(!(B===void 0?C===M||o(C,M,n,i,a):B)){E=!1;break}k||(k=v=="constructor")}if(E&&!k){var R=e.constructor,T=t.constructor;R!=T&&"constructor"in e&&"constructor"in t&&!(typeof R=="function"&&R instanceof R&&typeof T=="function"&&T instanceof T)&&(E=!1)}return a.delete(e),a.delete(t),E}var vI=mI,yI=wi,bI=Un,_I=yI(bI,"DataView"),wI=_I,xI=wi,$I=Un,kI=xI($I,"Promise"),CI=kI,SI=wi,EI=Un,TI=SI(EI,"WeakMap"),AI=TI,ju=wI,Uu=Ku,Du=CI,Nu=Cg,Hu=AI,Ym=cs,bs=xg,L0="[object Map]",II="[object Object]",P0="[object Promise]",M0="[object Set]",B0="[object WeakMap]",j0="[object DataView]",RI=bs(ju),OI=bs(Uu),LI=bs(Du),PI=bs(Nu),MI=bs(Hu),di=Ym;(ju&&di(new ju(new ArrayBuffer(1)))!=j0||Uu&&di(new Uu)!=L0||Du&&di(Du.resolve())!=P0||Nu&&di(new Nu)!=M0||Hu&&di(new Hu)!=B0)&&(di=function(e){var t=Ym(e),n=t==II?e.constructor:void 0,i=n?bs(n):"";if(i)switch(i){case RI:return j0;case OI:return L0;case LI:return P0;case PI:return M0;case MI:return B0}return t});var Ml=di,fu=_d,BI=zm,jI=$T,UI=vI,U0=Ml,D0=Yn,N0=kd,DI=Km,NI=1,H0="[object Arguments]",z0="[object Array]",Ia="[object Object]",HI=Object.prototype,F0=HI.hasOwnProperty;function zI(e,t,n,i,o,a){var c=D0(e),u=D0(t),d=c?z0:U0(e),p=u?z0:U0(t);d=d==H0?Ia:d,p=p==H0?Ia:p;var h=d==Ia,m=p==Ia,v=d==p;if(v&&N0(e)){if(!N0(t))return!1;c=!0,h=!1}if(v&&!h)return a||(a=new fu),c||DI(e)?BI(e,t,n,i,o,a):jI(e,t,d,n,i,o,a);if(!(n&NI)){var w=h&&F0.call(e,"__wrapped__"),$=m&&F0.call(t,"__wrapped__");if(w||$){var E=w?e.value():e,k=$?t.value():t;return a||(a=new fu),o(E,k,n,i,a)}}return v?(a||(a=new fu),UI(e,t,n,i,o,a)):!1}var FI=zI,WI=FI,W0=ti;function Jm(e,t,n,i,o){return e===t?!0:e==null||t==null||!W0(e)&&!W0(t)?e!==e&&t!==t:WI(e,t,n,i,Jm,o)}var ev=Jm,ZI=_d,qI=ev,KI=1,VI=2;function GI(e,t,n,i){var o=n.length,a=o,c=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],p=e[d],h=u[1];if(c&&u[2]){if(p===void 0&&!(d in e))return!1}else{var m=new ZI;if(i)var v=i(p,h,d,e,t,m);if(!(v===void 0?qI(h,p,KI|VI,i,m):v))return!1}}return!0}var QI=GI,XI=Gn;function YI(e){return e===e&&!XI(e)}var tv=YI,JI=tv,eR=Pl;function tR(e){for(var t=eR(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,JI(o)]}return t}var nR=tR;function rR(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var nv=rR,iR=QI,sR=nR,oR=nv;function aR(e){var t=sR(e);return t.length==1&&t[0][2]?oR(t[0][0],t[0][1]):function(n){return n===e||iR(n,e,t)}}var lR=aR,cR=cs,uR=ti,dR="[object Symbol]";function fR(e){return typeof e=="symbol"||uR(e)&&cR(e)==dR}var Bl=fR,hR=Yn,pR=Bl,gR=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mR=/^\w*$/;function vR(e,t){if(hR(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||pR(e)?!0:mR.test(e)||!gR.test(e)||t!=null&&e in Object(t)}var Id=vR,rv=Vu,yR="Expected a function";function Rd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(yR);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var c=e.apply(this,i);return n.cache=a.set(o,c)||a,c};return n.cache=new(Rd.Cache||rv),n}Rd.Cache=rv;var bR=Rd,_R=bR,wR=500;function xR(e){var t=_R(e,function(i){return n.size===wR&&n.clear(),i}),n=t.cache;return t}var $R=xR,kR=$R,CR=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,SR=/\\(\\)?/g,ER=kR(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(CR,function(n,i,o,a){t.push(o?a.replace(SR,"$1"):i||n)}),t}),TR=ER;function AR(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Od=AR,Z0=ls,IR=Od,RR=Yn,OR=Bl,LR=1/0,q0=Z0?Z0.prototype:void 0,K0=q0?q0.toString:void 0;function iv(e){if(typeof e=="string")return e;if(RR(e))return IR(e,iv)+"";if(OR(e))return K0?K0.call(e):"";var t=e+"";return t=="0"&&1/e==-LR?"-0":t}var PR=iv,MR=PR;function BR(e){return e==null?"":MR(e)}var jR=BR,UR=Yn,DR=Id,NR=TR,HR=jR;function zR(e,t){return UR(e)?e:DR(e,t)?[e]:NR(HR(e))}var _s=zR,FR=Bl,WR=1/0;function ZR(e){if(typeof e=="string"||FR(e))return e;var t=e+"";return t=="0"&&1/e==-WR?"-0":t}var ws=ZR,qR=_s,KR=ws;function VR(e,t){t=qR(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[KR(t[n++])];return n&&n==i?e:void 0}var jl=VR,GR=jl;function QR(e,t,n){var i=e==null?void 0:GR(e,t);return i===void 0?n:i}var XR=QR;function YR(e,t){return e!=null&&t in Object(e)}var JR=YR,eO=_s,tO=$d,nO=Yn,rO=Cd,iO=Sd,sO=ws;function oO(e,t,n){t=eO(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var c=sO(t[i]);if(!(a=e!=null&&n(e,c)))break;e=e[c]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&iO(o)&&rO(c,o)&&(nO(e)||tO(e)))}var aO=oO,lO=JR,cO=aO;function uO(e,t){return e!=null&&cO(e,t,lO)}var dO=uO,fO=ev,hO=XR,pO=dO,gO=Id,mO=tv,vO=nv,yO=ws,bO=1,_O=2;function wO(e,t){return gO(e)&&mO(t)?vO(yO(e),t):function(n){var i=hO(n,e);return i===void 0&&i===t?pO(n,e):fO(t,i,bO|_O)}}var xO=wO;function $O(e){return e}var sv=$O;function kO(e){return function(t){return t?.[e]}}var CO=kO,SO=jl;function EO(e){return function(t){return SO(t,e)}}var TO=EO,AO=CO,IO=TO,RO=Id,OO=ws;function LO(e){return RO(e)?AO(OO(e)):IO(e)}var PO=LO,MO=lR,BO=xO,jO=sv,UO=Yn,DO=PO;function NO(e){return typeof e=="function"?e:e==null?jO:typeof e=="object"?UO(e)?BO(e[0],e[1]):MO(e):DO(e)}var Ld=NO,HO=Ld,zO=Sg;function FO(e,t){return e&&e.length?zO(e,HO(t)):[]}var WO=FO;const ZO=mo(WO),hu=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Ba=0;const{setActiveSubscriptions:qO}=X1();setInterval(()=>{qO(Ba)},1e3);const wr=e=>{const{config:t,shouldMuteEvent:n}=De(),i=El(),[o,a]=$e([]);hr(ul(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(u=>u.filter(d=>!n(d)))},{defer:!0}));const c=()=>{const u=e();if(u==null)return;const{relayUrls:d,filters:p,options:h,onEvent:m,onEOSE:v,continuous:w=!0}=u,$=u.limit??50,E=i().sub(d,p,h);let k=!0;Ba+=1;let C=!1,M=!1;const B=[];E.on("event",T=>{m?.(T),!(u.clientEventFilter!=null&&!u.clientEventFilter(T))&&(M?a(L=>{const H=hu([T,...L].slice(0,$)),W=ZO(H,re=>re.id);return W.length!==H.length&&console.warn("duplicated event",T),W}):(C=!0,B.push(T)))}),E.on("eose",()=>{v?.(),M=!0,a(hu(B)),w||(E.unsub(),k&&(k=!1,Ba-=1))});const R=setInterval(()=>{if(M){clearInterval(R);return}C&&(C=!1,a(hu(B)))},100);Xr(()=>{E.unsub(),k&&(k=!1,Ba-=1),clearInterval(R)})};return hr(()=>{c()}),{events:o}},KO=e=>{const t=()=>$n(e),n=[e.id],i=t().rootEvent()?.id;i!=null&&n.push(i);const o=t().replyingToEvent()?.id;return o!=null&&n.push(o),Fr(n)},VO=e=>{const{config:t}=De(),{events:n}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:KO(e.event),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return _(vs,{get events(){return[...n()].reverse()}})},GO=e=>_(Pn,{get children(){return _(Fe,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>_(VO,{get event(){return t.event}})})}}),QO=P('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),XO=P('<div class="shrink-0 border-b">'),YO=P('<div class="flex flex-col overflow-y-scroll scroll-smooth">'),JO=P('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="flex h-full flex-col overflow-y-scroll scroll-smooth">'),xs=e=>{let t;const n=iE(),i=()=>e.width??"medium";return Bu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Bu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),_(Um.Provider,{value:n,get children(){const o=QO(),a=t;return typeof a=="function"?mr(a,o):t=o,I(o,_(le,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=XO();return I(c,()=>e.header),c})(),(()=>{const c=YO();return I(c,()=>e.children),c})()]},children:c=>(()=>{const u=JO(),d=u.firstChild,p=d.firstChild,h=p.firstChild,m=d.nextSibling;return p.$$click=()=>n?.clearTimeline(),I(h,_(Zu,{})),I(m,_(GO,{timelineContent:c})),u})()})),Be(c=>qs(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},c)),o}})};bt(["click"]);const eL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),tL=(e={})=>(()=>{const t=eL();return Xe(t,e,!0,!0),t})(),nL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),rL=(e={})=>(()=>{const t=nL();return Xe(t,e,!0,!0),t})(),iL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),sL=(e={})=>(()=>{const t=iL();return Xe(t,e,!0,!0),t})(),oL=P('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),aL=P('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),lL=P('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),cL=e=>(()=>{const t=oL(),n=t.firstChild,i=n.nextSibling;return I(n,()=>e.title),I(i,()=>e.children),t})(),$s=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=De(),o=Co(),a=u=>{t({...e.column,width:u})},c=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=lL(),d=u.firstChild,p=d.firstChild,h=p.firstChild,m=p.nextSibling,v=m.firstChild,w=m.nextSibling,$=w.nextSibling,E=$.firstChild;return I(u,_(cL,{title:"カラム幅",get children(){const k=aL(),C=k.firstChild,M=C.nextSibling,B=M.nextSibling,R=B.nextSibling;return C.$$click=()=>a("widest"),M.$$click=()=>a("wide"),B.$$click=()=>a("medium"),R.$$click=()=>a("narrow"),k}}),d),p.$$click=()=>c(e.columnIndex-1),I(h,_(tL,{})),m.$$click=()=>c(e.columnIndex+1),I(v,_(rL,{})),$.$$click=()=>n(e.column.id),I(E,_(sL,{})),u})()};bt(["click"]);const Qr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>Qr(n)(t));case"OR":return e.children.some(n=>Qr(n)(t));case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},uL=e=>{const{config:t,removeColumn:n}=De(),{followingPubkeys:i}=Au(()=>({pubkey:e.column.pubkey})),{events:o}=wr(()=>{const a=$4.uniq([...i()]);return a.length===0?null:{relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:ur()-4*60*60}],clientEventFilter:c=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(c.content)}});return hr(()=>{console.log("home",o())}),kn(()=>console.log("home timeline mounted")),Xr(()=>console.log("home timeline unmounted")),_(xs,{get header(){return _(vo,{get name(){return e.column.name??"ホーム"},get icon(){return _(vg,{})},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(vs,{get events(){return o()}})}})},dL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),ov=(e={})=>(()=>{const t=dL();return Xe(t,e,!0,!0),t})(),fL=P('<span class="h-4 w-4 pt-[1px] text-rose-400">'),hL=P('<img alt="icon" class="rounded">'),pL=P('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),gL=P('<div class="notification-event py-1">'),mL=P('<div class="truncate">読み込み中 '),vL=e=>{const{shouldMuteEvent:t}=De(),{showProfile:n}=ei(),i=()=>$n(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=ms(()=>({pubkey:e.event.pubkey})),{event:c,query:u}=J1(()=>ln([o()])(([p])=>({eventId:p}))),d=()=>u.isSuccess&&c()==null;return _(le,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const p=pL(),h=p.firstChild,m=h.nextSibling,v=m.firstChild,w=v.nextSibling,$=w.firstChild;return I(h,_(Pn,{get fallback(){return e.event.content},get children(){return _(Fe,{get when(){return e.event.content==="+"},get children(){const E=fL();return I(E,_(gd,{})),E}})}})),I(v,_(le,{get when(){return a()?.picture!=null},get children(){const E=hL();return Be(()=>yt(E,"src",a()?.picture)),E}})),$.$$click=()=>n(e.event.pubkey),I($,_(Al,{get pubkey(){return e.event.pubkey}})),p})(),(()=>{const p=gL();return I(p,_(le,{get when(){return c()},get fallback(){return(()=>{const h=mL();return h.firstChild,I(h,o,null),h})()},keyed:!0,children:h=>_(Dm,{event:h})})),p})()]}})};bt(["click"]);const yL=P("<div>unknown event"),av=e=>{const{shouldMuteEvent:t}=De();return _(Mt,{get each(){return e.events},children:n=>_(le,{get when(){return!t(n)},get children(){return _(Pn,{get fallback(){return yL()},get children(){return[_(Fe,{get when(){return n.kind===wt.Text},get children(){return _(Ra,{get children(){return _(Nm,{event:n})}})}}),_(Fe,{get when(){return n.kind===wt.Reaction},get children(){return _(Ra,{get children(){return _(vL,{event:n})}})}}),_(Fe,{get when(){return n.kind===6},get children(){return _(Ra,{get children(){return _(rm,{event:n})}})}})]}})}})})},bL=e=>{const{config:t,removeColumn:n}=De(),{events:i}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return _(xs,{get header(){return _(vo,{get name(){return e.column.name??"通知"},get icon(){return _(ov,{})},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(av,{get events(){return i()}})}})},_L=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Pd=(e={})=>(()=>{const t=_L();return Xe(t,e,!0,!0),t})(),wL=e=>{const{config:t,removeColumn:n}=De(),{events:i}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return _(xs,{get header(){return _(vo,{get name(){return e.column.name??"投稿"},get icon(){return _(Pd,{})},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(vs,{get events(){return i()}})}})},xL=e=>{const{config:t,removeColumn:n}=De(),{events:i}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return _(xs,{get header(){return _(vo,{get name(){return e.column.name??"リアクション"},get icon(){return _(pd,{})},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(av,{get events(){return i()}})}})},$L=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Md=(e={})=>(()=>{const t=$L();return Xe(t,e,!0,!0),t})(),kL=e=>{const{removeColumn:t}=De(),{events:n}=wr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:ur()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(i.content)}));return _(xs,{get header(){return _(vo,{get name(){return e.column.name??"リレー"},get icon(){return _(Md,{})},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(vs,{get events(){return n()}})}})},CL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),lv=(e={})=>(()=>{const t=CL();return Xe(t,e,!0,!0),t})(),SL=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),EL=e=>{const[t,n]=$e(!1),[i,o]=$e(""),{saveColumn:a}=De(),c=()=>n(m=>!m),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},p=m=>{o(m.currentTarget.value)},h=m=>{m.preventDefault(),u()};return kn(()=>{o(e.column.query)}),(()=>{const m=SL(),v=m.firstChild,w=v.firstChild,$=w.firstChild,E=w.nextSibling,k=E.firstChild,C=E.nextSibling;return I($,_(lv,{})),E.addEventListener("submit",h),k.addEventListener("blur",d),k.addEventListener("change",p),C.$$click=()=>c(),I(C,_(yg,{})),I(m,_(le,{get when(){return t()},get children(){return e.settings()}}),null),Be(()=>k.value=i()),m})()},TL=e=>{const{removeColumn:t}=De(),{events:n}=wr(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:B9,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}});return _(xs,{get header(){return _(EL,{get column(){return e.column},settings:()=>_($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(vs,{get events(){return n()}})}})};bt(["click"]);const AL=P('<div class="flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),IL=()=>{const{config:e}=De();return(()=>{const t=AL();return I(t,_(Mt,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return _(Pn,{get children(){return[_(Fe,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:c=>_(uL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:c=>_(bL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:c=>_(wL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:c=>_(xL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:c=>_(kL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:c=>_(TL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},RL=P('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),OL=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=RL();i.$$click=n;const o=t;return typeof o=="function"?mr(o,i):t=i,I(i,()=>e.children),i})()};bt(["click"]);const LL=P('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),So=e=>_(OL,{onClose:()=>e.onClose?.(),get children(){const t=LL(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),I(i,_(le,{get when(){return e?.closeButton},get fallback(){return _(ss,{})},keyed:!0,children:a=>a()})),I(o,()=>e.children),t}});bt(["click"]);const PL=P('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),ML=P('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),BL=P('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),jL=async()=>{const t=await(await fetch(Fu("packageInfo.json"))).text();return JSON.parse(t)},UL=e=>{const[t]=gg(jL);return _(So,{get onClose(){return e.onClose},get children(){const n=PL(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;u.firstChild;const d=i.nextSibling,p=d.nextSibling,h=p.nextSibling,m=h.nextSibling,v=m.firstChild,w=v.nextSibling;w.nextSibling;const $=m.nextSibling,E=$.nextSibling,k=E.nextSibling,C=k.nextSibling,M=C.nextSibling,B=M.nextSibling,R=B.nextSibling;return R.nextSibling,I(u,()=>t()?.self?.version,null),I(m,_(Ol,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),w),I(R,()=>t()?.self.licenseText),I(n,_(Mt,{get each(){return t()?.packages??[]},fallback:"取得中",children:T=>[(()=>{const L=ML(),H=L.firstChild,W=H.nextSibling,re=W.nextSibling,V=re.nextSibling;return V.nextSibling,I(L,()=>T.name,H),I(L,()=>T.version,W),I(L,()=>T.licenseSpdx,V),L})(),(()=>{const L=BL();return I(L,()=>T.licenseText),L})()]}),null),Be(()=>yt(o,"src",Fu("images/rabbit_app_256.png"))),n}})},DL=P('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),NL=e=>{const t=_r(),{saveColumn:n}=De(),i=Co(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(m=>console.error(m))},a=()=>{ln([t()])(([m])=>{n(j1({pubkey:m}))}),o()},c=()=>{ln([t()])(([m])=>{n(U1({pubkey:m}))}),o()},u=()=>{n(D1()),o()},d=()=>{n(hd({query:""})),o()},p=()=>{ln([t()])(([m])=>{n(N1({pubkey:m}))}),o()},h=()=>{ln([t()])(([m])=>{n(H1({pubkey:m}))}),o()};return _(So,{get onClose(){return e.onClose},get children(){const m=DL(),v=m.firstChild,w=v.firstChild,$=v.nextSibling,E=$.firstChild,k=$.nextSibling,C=k.firstChild,M=k.nextSibling,B=M.firstChild,R=M.nextSibling,T=R.firstChild,L=R.nextSibling,H=L.firstChild;return v.$$click=()=>a(),I(w,_(vg,{})),$.$$click=()=>c(),I(E,_(ov,{})),k.$$click=()=>u(),I(C,_(Md,{})),M.$$click=()=>d(),I(B,_(lv,{})),R.$$click=()=>p(),I(T,_(Pd,{})),L.$$click=()=>h(),I(H,_(pd,{})),m}})};bt(["click"]);const HL=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),zL=(e={})=>(()=>{const t=HL();return Xe(t,e,!0,!0),t})(),FL=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),WL=(e={})=>(()=>{const t=FL();return Xe(t,e,!0,!0),t})(),ZL=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),qL=(e={})=>(()=>{const t=ZL();return Xe(t,e,!0,!0),t})();function KL(e){const{config:t}=De(),n=Ve(e),{events:i}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[wt.Contacts],"#p":[n().pubkey]}],limit:1/0,continuous:!0})),o=()=>Fr(i()?.map(c=>c.pubkey));return{followersPubkeys:o,count:()=>o().length}}const VL=e=>{const t=Ve(e),n=as(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return Promise.resolve(null);const{nip05:u}=c;return L1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},GL=P('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),QL=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),XL=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),YL=P('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),JL=P('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),eP=P('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),tP=P('<div class="shrink-0 text-xs">読み込み中'),nP=P('<div class="shrink-0 text-xs">フォローされています'),rP=P('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),iP=P('<div class="truncate text-xl font-bold">'),sP=P('<div class="truncate text-xs">@'),oP=P('<span class="inline-block h-3 w-3">'),aP=P('<span class="inline-block h-4 w-4 text-blue-400">'),lP=P('<div class="flex items-center text-xs">'),cP=P('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),uP=P('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),dP=P('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),fP=P('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),hP=P('<ul class="border-t px-5 py-2 text-xs">'),pP=P('<ul class="border-t p-1">'),gP=P('<div class="h-12 shrink-0">'),mP=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),vP=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),yP=P('<span class="inline-block h-4 w-4 text-rose-500">'),bP=P('<span class="text-sm">読み込み中'),_P=P('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),wP=P('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),xP=e=>{const{count:t}=KL(()=>({pubkey:e.pubkey}));return Ve(t)},$P=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=De(),a=Ll(),c=_r(),{showProfileEdit:u}=ei(),d=Ve(()=>Tl(e.pubkey)),[p,h]=$e(!1),[m,v]=$e(!1),{profile:w,query:$}=ms(()=>({pubkey:e.pubkey})),{verification:E,query:k}=VL(()=>ln([w()?.nip05])(([J])=>({nip05:J}))),C=()=>{const J=w()?.nip05;if(J==null)return null;const[ve,ke]=J.split("@");return ke==null?null:ve==="_"?{domain:ke,ident:ke}:{user:ve,domain:ke,ident:J}},M=()=>E()?.pubkey===e.pubkey,B=()=>o(e.pubkey),{followingPubkeys:R,invalidateFollowings:T,query:L}=Au(()=>ln([c()])(([J])=>({pubkey:J}))),H=()=>R().includes(e.pubkey),{followingPubkeys:W,query:re}=Au(()=>({pubkey:e.pubkey})),V=()=>{const J=c();return J!=null&&W().includes(J)},ie=pi({mutationKey:["updateContacts"],mutationFn:(...J)=>a.updateContacts(...J).then(ve=>Promise.allSettled(ve.map(Jr(5e3)))),onSuccess:J=>{const ve=J.filter(ce=>ce.status==="fulfilled").length,ke=J.length-ve;ve===J.length?console.log("succeeded to update contacts"):ve>0?console.log(`succeeded to update contacts for ${ve} relays but failed for ${ke} relays`):console.error("failed to update contacts")},onError:J=>{console.error("failed to update contacts: ",J)},onSettled:()=>{T().then(()=>L.refetch()).catch(J=>console.error("failed to refetch contacts",J))}}),Z=()=>{const J=c();J!=null&&L.isFetched&&ie.mutate({relayUrls:t().relayUrls,pubkey:J,content:L.data?.content??"",followingPubkeys:Fr([...R(),e.pubkey])})},X=()=>{const J=c();J!=null&&L.isFetched&&window.confirm("本当にフォロー解除しますか？")&&ie.mutate({relayUrls:t().relayUrls,pubkey:J,content:L.data?.content??"",followingPubkeys:R().filter(ve=>ve!==e.pubkey)})},oe=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(J=>window.alert(J))}},{content:()=>B()?"ミュート解除":"ミュート",onSelect:()=>{B()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===c(),content:()=>H()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{H()?X():Z()}}],{events:Ze}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:ur()}],continuous:!1}));return _(So,{onClose:()=>e.onClose?.(),get children(){return[_(le,{get when(){return $.isFetched},get fallback(){return"loading"},get children(){return[_(le,{get when(){return w()?.banner},get fallback(){return gP()},keyed:!0,children:J=>(()=>{const ve=mP(),ke=ve.firstChild;return yt(ke,"src",J),ve})()}),(()=>{const J=rP(),ve=J.firstChild,ke=ve.firstChild,ce=ve.nextSibling,ye=ce.firstChild;return I(ke,_(le,{get when(){return w()?.picture},keyed:!0,children:G=>(()=>{const Oe=vP();return yt(Oe,"src",G),Oe})()})),I(ye,_(Pn,{get children(){return[_(Fe,{get when(){return e.pubkey===c()},get children(){const G=GL();return G.$$click=()=>u(),G}}),_(Fe,{get when(){return L.isLoading||L.isFetching},get children(){return QL()}}),_(Fe,{get when(){return ie.isLoading},get children(){return XL()}}),_(Fe,{get when(){return H()},get children(){const G=YL();return G.$$click=()=>X(),G.addEventListener("mouseleave",()=>h(!1)),G.addEventListener("mouseenter",()=>h(!0)),I(G,_(le,{get when(){return!p()},fallback:"フォロー解除",children:"フォロー中"})),Be(()=>G.disabled=ie.isLoading),G}}),_(Fe,{get when(){return!H()},get children(){const G=JL();return G.$$click=()=>Z(),Be(()=>G.disabled=ie.isLoading),G}})]}}),null),I(ye,_(om,{menu:oe,get children(){const G=eP();return I(G,_(im,{})),G}}),null),I(ce,_(Pn,{get children(){return[_(Fe,{get when(){return re.isLoading},get children(){return tP()}}),_(Fe,{get when(){return V()},get children(){return nP()}})]}}),null),J})(),(()=>{const J=cP(),ve=J.firstChild,ke=ve.firstChild,ce=ke.nextSibling,ye=ce.firstChild;return I(ve,_(le,{get when(){return(w()?.display_name?.length??0)>0},get children(){const G=iP();return I(G,()=>w()?.display_name),G}}),ke),I(ke,_(le,{get when(){return(w()?.name?.length??0)>0},get children(){const G=sP();return G.firstChild,I(G,()=>w()?.name,null),G}}),null),I(ke,_(le,{get when(){return(w()?.nip05?.length??0)>0},get children(){const G=lP();return I(G,()=>C()?.ident,null),I(G,_(Pn,{get fallback(){return(()=>{const Oe=yP();return I(Oe,_(qL,{})),Oe})()},get children(){return[_(Fe,{get when(){return k.isLoading},get children(){const Oe=oP();return I(Oe,_(zL,{})),Oe}}),_(Fe,{get when(){return M()},get children(){const Oe=aP();return I(Oe,_(WL,{})),Oe}})]}}),null),G}}),null),I(ye,d),J})(),_(le,{get when(){return(w()?.about??"").length>0},get children(){const J=uP();return I(J,()=>w()?.about),J}}),(()=>{const J=fP(),ve=J.firstChild,ke=ve.firstChild,ce=ke.nextSibling;return I(ce,_(le,{get when(){return re.isFetched},get fallback(){return bP()},get children(){return W().length}})),I(J,_(le,{get when(){return!t().hideCount},get children(){const ye=dP(),G=ye.firstChild,Oe=G.nextSibling;return I(Oe,_(le,{get when(){return m()},get fallback(){return(()=>{const Ye=_P();return Ye.$$click=()=>v(!0),Ye})()},keyed:!0,get children(){return _(xP,{get pubkey(){return e.pubkey}})}})),ye}}),null),J})(),_(le,{get when(){return(w()?.website??"").length>0},get children(){const J=hP();return I(J,_(le,{get when(){return w()?.website},keyed:!0,children:ve=>(()=>{const ke=wP(),ce=ke.firstChild;return I(ce,_(Md,{})),I(ke,_(Ol,{class:"text-blue-500 underline",href:ve}),null),ke})()})),J}})]}}),(()=>{const J=pP();return I(J,_(vs,{get events(){return Ze()}})),J})()]}})};bt(["click"]);function kP(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var CP=kP,SP=wi,EP=function(){try{var e=SP(Object,"defineProperty");return e({},"",{}),e}catch{}}(),cv=EP,V0=cv;function TP(e,t,n){t=="__proto__"&&V0?V0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var uv=TP,AP=uv,IP=qu,RP=Object.prototype,OP=RP.hasOwnProperty;function LP(e,t,n){var i=e[t];(!(OP.call(e,t)&&IP(i,n))||n===void 0&&!(t in e))&&AP(e,t,n)}var Bd=LP,PP=Bd,MP=uv;function BP(e,t,n,i){var o=!n;n||(n={});for(var a=-1,c=t.length;++a<c;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?MP(n,u,d):PP(n,u,d)}return n}var Eo=BP,jP=Eo,UP=Pl;function DP(e,t){return e&&jP(t,UP(t),e)}var NP=DP;function HP(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var zP=HP,FP=Gn,WP=Ad,ZP=zP,qP=Object.prototype,KP=qP.hasOwnProperty;function VP(e){if(!FP(e))return ZP(e);var t=WP(e),n=[];for(var i in e)i=="constructor"&&(t||!KP.call(e,i))||n.push(i);return n}var GP=VP,QP=Vm,XP=GP,YP=Qm;function JP(e){return YP(e)?QP(e,!0):XP(e)}var jd=JP,eM=Eo,tM=jd;function nM(e,t){return e&&eM(t,tM(t),e)}var rM=nM,cl={exports:{}};cl.exports;(function(e,t){var n=Un,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a?n.Buffer:void 0,u=c?c.allocUnsafe:void 0;function d(p,h){if(h)return p.slice();var m=p.length,v=u?u(m):new p.constructor(m);return p.copy(v),v}e.exports=d})(cl,cl.exports);var iM=cl.exports;function sM(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var oM=sM,aM=Eo,lM=xd;function cM(e,t){return aM(e,lM(e),t)}var uM=cM,dM=Gm,fM=dM(Object.getPrototypeOf,Object),Ud=fM,hM=wd,pM=Ud,gM=xd,mM=Zm,vM=Object.getOwnPropertySymbols,yM=vM?function(e){for(var t=[];e;)hM(t,gM(e)),e=pM(e);return t}:mM,dv=yM,bM=Eo,_M=dv;function wM(e,t){return bM(e,_M(e),t)}var xM=wM,$M=Wm,kM=dv,CM=jd;function SM(e){return $M(e,CM,kM)}var Dd=SM,EM=Object.prototype,TM=EM.hasOwnProperty;function AM(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&TM.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var IM=AM,G0=Fm;function RM(e){var t=new e.constructor(e.byteLength);return new G0(t).set(new G0(e)),t}var Nd=RM,OM=Nd;function LM(e,t){var n=t?OM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var PM=LM,MM=/\w*$/;function BM(e){var t=new e.constructor(e.source,MM.exec(e));return t.lastIndex=e.lastIndex,t}var jM=BM,Q0=ls,X0=Q0?Q0.prototype:void 0,Y0=X0?X0.valueOf:void 0;function UM(e){return Y0?Object(Y0.call(e)):{}}var DM=UM,NM=Nd;function HM(e,t){var n=t?NM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var zM=HM,FM=Nd,WM=PM,ZM=jM,qM=DM,KM=zM,VM="[object Boolean]",GM="[object Date]",QM="[object Map]",XM="[object Number]",YM="[object RegExp]",JM="[object Set]",eB="[object String]",tB="[object Symbol]",nB="[object ArrayBuffer]",rB="[object DataView]",iB="[object Float32Array]",sB="[object Float64Array]",oB="[object Int8Array]",aB="[object Int16Array]",lB="[object Int32Array]",cB="[object Uint8Array]",uB="[object Uint8ClampedArray]",dB="[object Uint16Array]",fB="[object Uint32Array]";function hB(e,t,n){var i=e.constructor;switch(t){case nB:return FM(e);case VM:case GM:return new i(+e);case rB:return WM(e,n);case iB:case sB:case oB:case aB:case lB:case cB:case uB:case dB:case fB:return KM(e,n);case QM:return new i;case XM:case eB:return new i(e);case YM:return ZM(e);case JM:return new i;case tB:return qM(e)}}var pB=hB,gB=Gn,J0=Object.create,mB=function(){function e(){}return function(t){if(!gB(t))return{};if(J0)return J0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),vB=mB,yB=vB,bB=Ud,_B=Ad;function wB(e){return typeof e.constructor=="function"&&!_B(e)?yB(bB(e)):{}}var xB=wB,$B=Ml,kB=ti,CB="[object Map]";function SB(e){return kB(e)&&$B(e)==CB}var EB=SB,TB=EB,AB=Ed,eg=Td,tg=eg&&eg.isMap,IB=tg?AB(tg):TB,RB=IB,OB=Ml,LB=ti,PB="[object Set]";function MB(e){return LB(e)&&OB(e)==PB}var BB=MB,jB=BB,UB=Ed,ng=Td,rg=ng&&ng.isSet,DB=rg?UB(rg):jB,NB=DB,HB=_d,zB=CP,FB=Bd,WB=NP,ZB=rM,qB=iM,KB=oM,VB=uM,GB=xM,QB=Xm,XB=Dd,YB=Ml,JB=IM,ej=pB,tj=xB,nj=Yn,rj=kd,ij=RB,sj=Gn,oj=NB,aj=Pl,lj=jd,cj=1,uj=2,dj=4,fv="[object Arguments]",fj="[object Array]",hj="[object Boolean]",pj="[object Date]",gj="[object Error]",hv="[object Function]",mj="[object GeneratorFunction]",vj="[object Map]",yj="[object Number]",pv="[object Object]",bj="[object RegExp]",_j="[object Set]",wj="[object String]",xj="[object Symbol]",$j="[object WeakMap]",kj="[object ArrayBuffer]",Cj="[object DataView]",Sj="[object Float32Array]",Ej="[object Float64Array]",Tj="[object Int8Array]",Aj="[object Int16Array]",Ij="[object Int32Array]",Rj="[object Uint8Array]",Oj="[object Uint8ClampedArray]",Lj="[object Uint16Array]",Pj="[object Uint32Array]",nt={};nt[fv]=nt[fj]=nt[kj]=nt[Cj]=nt[hj]=nt[pj]=nt[Sj]=nt[Ej]=nt[Tj]=nt[Aj]=nt[Ij]=nt[vj]=nt[yj]=nt[pv]=nt[bj]=nt[_j]=nt[wj]=nt[xj]=nt[Rj]=nt[Oj]=nt[Lj]=nt[Pj]=!0;nt[gj]=nt[hv]=nt[$j]=!1;function ja(e,t,n,i,o,a){var c,u=t&cj,d=t&uj,p=t&dj;if(n&&(c=o?n(e,i,o,a):n(e)),c!==void 0)return c;if(!sj(e))return e;var h=nj(e);if(h){if(c=JB(e),!u)return KB(e,c)}else{var m=YB(e),v=m==hv||m==mj;if(rj(e))return qB(e,u);if(m==pv||m==fv||v&&!o){if(c=d||v?{}:tj(e),!u)return d?GB(e,ZB(c,e)):VB(e,WB(c,e))}else{if(!nt[m])return o?e:{};c=ej(e,m,u)}}a||(a=new HB);var w=a.get(e);if(w)return w;a.set(e,c),oj(e)?e.forEach(function(k){c.add(ja(k,t,n,k,e,a))}):ij(e)&&e.forEach(function(k,C){c.set(C,ja(k,t,n,C,e,a))});var $=p?d?XB:QB:d?lj:aj,E=h?void 0:$(e);return zB(E||e,function(k,C){E&&(C=k,k=e[C]),FB(c,C,ja(k,t,n,C,e,a))}),c}var Mj=ja;function Bj(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var jj=Bj;function Uj(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var Dj=Uj,Nj=jl,Hj=Dj;function zj(e,t){return t.length<2?e:Nj(e,Hj(t,0,-1))}var Fj=zj,Wj=_s,Zj=jj,qj=Fj,Kj=ws;function Vj(e,t){return t=Wj(t,e),e=qj(e,t),e==null||delete e[Kj(Zj(t))]}var Gj=Vj,Qj=cs,Xj=Ud,Yj=ti,Jj="[object Object]",eU=Function.prototype,tU=Object.prototype,gv=eU.toString,nU=tU.hasOwnProperty,rU=gv.call(Object);function iU(e){if(!Yj(e)||Qj(e)!=Jj)return!1;var t=Xj(e);if(t===null)return!0;var n=nU.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&gv.call(n)==rU}var sU=iU,oU=sU;function aU(e){return oU(e)?void 0:e}var lU=aU,ig=ls,cU=$d,uU=Yn,sg=ig?ig.isConcatSpreadable:void 0;function dU(e){return uU(e)||cU(e)||!!(sg&&e&&e[sg])}var fU=dU,hU=wd,pU=fU;function mv(e,t,n,i,o){var a=-1,c=e.length;for(n||(n=pU),o||(o=[]);++a<c;){var u=e[a];t>0&&n(u)?t>1?mv(u,t-1,n,i,o):hU(o,u):i||(o[o.length]=u)}return o}var gU=mv,mU=gU;function vU(e){var t=e==null?0:e.length;return t?mU(e,1):[]}var yU=vU;function bU(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var _U=bU,wU=_U,og=Math.max;function xU(e,t,n){return t=og(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=og(i.length-t,0),c=Array(a);++o<a;)c[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(c),wU(e,this,u)}}var $U=xU;function kU(e){return function(){return e}}var CU=kU,SU=CU,ag=cv,EU=sv,TU=ag?function(e,t){return ag(e,"toString",{configurable:!0,enumerable:!1,value:SU(t),writable:!0})}:EU,AU=TU,IU=800,RU=16,OU=Date.now;function LU(e){var t=0,n=0;return function(){var i=OU(),o=RU-(i-n);if(n=i,o>0){if(++t>=IU)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var PU=LU,MU=AU,BU=PU,jU=BU(MU),UU=jU,DU=yU,NU=$U,HU=UU;function zU(e){return HU(NU(e,void 0,DU),e+"")}var FU=zU,WU=Od,ZU=Mj,qU=Gj,KU=_s,VU=Eo,GU=lU,QU=FU,XU=Dd,YU=1,JU=2,eD=4,tD=QU(function(e,t){var n={};if(e==null)return n;var i=!1;t=WU(t,function(a){return a=KU(a,e),i||(i=a.length>1),a}),VU(e,XU(e),n),i&&(n=ZU(n,YU|JU|eD,GU));for(var o=t.length;o--;)qU(n,t[o]);return n}),nD=tD;const rD=mo(nD);var iD="Expected a function";function sD(e){if(typeof e!="function")throw new TypeError(iD);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var oD=sD,aD=Bd,lD=_s,cD=Cd,lg=Gn,uD=ws;function dD(e,t,n,i){if(!lg(e))return e;t=lD(t,e);for(var o=-1,a=t.length,c=a-1,u=e;u!=null&&++o<a;){var d=uD(t[o]),p=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=c){var h=u[d];p=i?i(h,d,u):void 0,p===void 0&&(p=lg(h)?h:cD(t[o+1])?[]:{})}aD(u,d,p),u=u[d]}return e}var fD=dD,hD=jl,pD=fD,gD=_s;function mD(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var c=t[i],u=hD(e,c);n(u,c)&&pD(a,gD(c,e),u)}return a}var vD=mD,yD=Od,bD=Ld,_D=vD,wD=Dd;function xD(e,t){if(e==null)return{};var n=yD(wD(e),function(i){return[i]});return t=bD(t),_D(e,n,function(i,o){return t(i,o[0])})}var $D=xD,kD=Ld,CD=oD,SD=$D;function ED(e,t){return SD(e,CD(kD(t)))}var TD=ED;const AD=mo(TD),ID=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),RD=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),OD=P('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),LD=P('<div class="px-4 pt-4">読み込み中...'),PD=P('<div><span class="font-bold">その他の項目</span><div>'),MD=P('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),BD=P('<div class="h-24 shrink-0">'),jD=P('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),UD="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",DD="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",ND=new RegExp(`^${UD}$`),vv=new RegExp(`^${DD}$`),HD=e=>ND.test(e),zD=e=>vv.test(e),FD=e=>{const t=_r(),{config:n}=De(),[i,o]=$e(""),[a,c]=$e(""),[u,d]=$e(""),[p,h]=$e(""),[m,v]=$e(""),[w,$]=$e(""),[E,k]=$e(""),[C,M]=$e(""),{profile:B,invalidateProfile:R,query:T}=ms(()=>ln([t()])(([X])=>({pubkey:X}))),{updateProfile:L}=Ll(),H=pi({mutationKey:["updateProfile"],mutationFn:(...X)=>L(...X).then(oe=>Promise.allSettled(oe.map(Jr(1e4)))),onSuccess:X=>{const oe=X.filter(J=>J.status==="fulfilled").length,Ze=X.length-oe;oe===X.length?window.alert("更新しました"):oe>0?window.alert(`${Ze}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),R().then(()=>T.refetch()).catch(J=>console.error(J)),e.onClose()},onError:X=>{console.error("failed to delete",X)}}),W=()=>T.isLoading||H.isLoading,re=()=>W(),V=()=>rD(B(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),ie=X=>{X.preventDefault();const oe=t();if(oe==null)return;const Ze=AD({picture:i(),banner:a(),name:u(),display_name:p(),about:m(),website:w(),nip05:E(),lud06:HD(C())?C():null,lud16:zD(C())?C():null},J=>J==null||J.length===0);H.mutate({relayUrls:n().relayUrls,pubkey:oe,profile:Ze,otherProperties:V()})},Z=X=>X.key==="Enter"&&X.preventDefault();return kn(()=>{const X=B();X!=null&&(T.refetch().catch(oe=>console.error(oe)),mu(()=>{o(oe=>X.picture??oe),c(oe=>X.banner??oe),d(oe=>X.name??oe),h(oe=>X.display_name??oe),v(oe=>X.about??oe),$(oe=>X.website??oe),k(oe=>X.nip05??oe),X.lud16!=null?M(X.lud16):X.lud06!=null&&M(X.lud06)}))}),_(So,{closeButton:()=>_(Zu,{}),get onClose(){return e.onClose},get children(){return[(()=>{const X=OD(),oe=X.firstChild;return I(X,_(le,{get when(){return a().length>0},get fallback(){return BD()},keyed:!0,get children(){const Ze=ID(),J=Ze.firstChild;return Be(()=>yt(J,"src",a())),Ze}}),oe),I(oe,_(le,{get when(){return i().length>0},get children(){const Ze=RD();return Be(()=>yt(Ze,"src",i())),Ze}})),X})(),_(le,{get when(){return W()},get children(){return LD()}}),(()=>{const X=MD(),oe=X.firstChild,Ze=oe.firstChild,J=Ze.firstChild,ve=J.nextSibling,ke=Ze.nextSibling,ce=ke.firstChild,ye=ce.nextSibling,G=ke.nextSibling,Oe=G.firstChild,Ye=Oe.nextSibling,kt=Ye.firstChild,ot=kt.nextSibling,jt=G.nextSibling,un=jt.firstChild,K=un.nextSibling,se=jt.nextSibling,_t=se.firstChild,gt=_t.nextSibling,Rt=se.nextSibling,Nn=Rt.firstChild,at=Nn.nextSibling,Wt=Rt.nextSibling,xr=Wt.firstChild,ht=xr.nextSibling,Ut=Wt.nextSibling,Jn=Ut.firstChild,be=Jn.nextSibling,ze=be.nextSibling,lt=Ut.nextSibling,Ct=lt.firstChild,Xt=Ct.nextSibling;return oe.addEventListener("submit",ie),ve.$$keydown=Z,ve.addEventListener("blur",ue=>o(ue.currentTarget.value)),ye.$$keydown=Z,ye.addEventListener("blur",ue=>c(ue.currentTarget.value)),ot.$$keydown=Z,ot.addEventListener("change",ue=>d(ue.currentTarget.value)),K.$$keydown=Z,K.addEventListener("change",ue=>h(ue.currentTarget.value)),gt.addEventListener("change",ue=>v(ue.currentTarget.value)),at.$$keydown=Z,at.addEventListener("change",ue=>$(ue.currentTarget.value)),ht.$$keydown=Z,ht.addEventListener("change",ue=>k(ue.currentTarget.value)),ze.$$keydown=Z,ze.addEventListener("change",ue=>M(ue.currentTarget.value)),I(oe,_(le,{get when(){return Object.entries(V()).length>0},get children(){const ue=PD(),dn=ue.firstChild,Le=dn.nextSibling;return I(Le,_(Mt,{get each(){return Object.entries(V())},children:([rt,Zt])=>(()=>{const Cn=jD(),fn=Cn.firstChild,$r=fn.nextSibling;return I(fn,rt),I($r,Zt),Cn})()})),ue}}),lt),Xt.$$click=()=>e.onClose(),I(oe,_(le,{get when(){return H.isLoading},children:"保存中..."}),null),Be(ue=>{const dn=re(),Le=re(),rt=re(),Zt=re(),Cn=re(),fn=re(),$r=vv.source,xi=re(),$i=re(),ki=H.isLoading;return dn!==ue._v$&&(ve.disabled=ue._v$=dn),Le!==ue._v$2&&(ye.disabled=ue._v$2=Le),rt!==ue._v$3&&(ot.disabled=ue._v$3=rt),Zt!==ue._v$4&&(K.disabled=ue._v$4=Zt),Cn!==ue._v$5&&(gt.disabled=ue._v$5=Cn),fn!==ue._v$6&&(at.disabled=ue._v$6=fn),$r!==ue._v$7&&yt(ht,"pattern",ue._v$7=$r),xi!==ue._v$8&&(ht.disabled=ue._v$8=xi),$i!==ue._v$9&&(ze.disabled=ue._v$9=$i),ki!==ue._v$10&&(Ct.disabled=ue._v$10=ki),ue},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Be(()=>ve.value=i()),Be(()=>ye.value=a()),Be(()=>ot.value=u()),Be(()=>K.value=p()),Be(()=>gt.value=m()),Be(()=>at.value=w()),Be(()=>ht.value=E()),Be(()=>ze.value=C()),X})()]}})};bt(["keydown","click"]);const WD=()=>{const e=_r(),{modalState:t,showProfile:n,closeModal:i}=ei();return _(le,{get when(){return t()},keyed:!0,children:o=>_(Pn,{get children(){return[_(Fe,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>_($P,{pubkey:a,onClose:i})}),_(Fe,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return _(FD,{onClose:()=>ln([e()])(([a])=>{n(a)})})}}),_(Fe,{get when(){return o.type==="AddColumn"},get children(){return _(NL,{onClose:i})}}),_(Fe,{get when(){return o.type==="About"},get children(){return _(UL,{onClose:i})}})]}})})},ZD=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),qD=(e={})=>(()=>{const t=ZD();return Xe(t,e,!0,!0),t})(),KD=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),cg=(e={})=>(()=>{const t=KD();return Xe(t,e,!0,!0),t})(),VD=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),GD=(e={})=>(()=>{const t=VD();return Xe(t,e,!0,!0),t})(),QD=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),XD=(e={})=>(()=>{const t=QD();return Xe(t,e,!0,!0),t})(),YD=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),JD=(e={})=>(()=>{const t=YD();return Xe(t,e,!0,!0),t})(),eN=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),tN=(e={})=>(()=>{const t=eN();return Xe(t,e,!0,!0),t})(),nN=P('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),rN=P('<div class="py-2"><h3 class="font-bold">リレー</h3><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),zu=P('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),iN=P('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),sN=P('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),oN=P('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),aN=P('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),lN=P('<div class="py-2"><h3 class="font-bold">カスタム絵文字</h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9">名前</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9">URL</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://.../emoji.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">追加'),cN=P('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),uN=P('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),dN=P('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),fN=P('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),hN=P('<div class="p-4">'),pN=P('<h2 class="flex-1 text-center text-lg font-bold">設定'),gN=P('<ul class="flex flex-col">'),mN=P('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),vN=P('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),yv=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,yN=yv("https?"),bN=yv("wss?"),_N=()=>{const e=_r(),{showProfile:t,showProfileEdit:n}=ei();return(()=>{const i=nN(),o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;return c.$$click=()=>ln([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},wN=()=>{const{config:e,addRelay:t,removeRelay:n}=De(),[i,o]=$e(""),a=c=>{c.preventDefault(),i().length!==0&&(t(i()),o(""))};return(()=>{const c=rN(),u=c.firstChild,d=u.nextSibling,p=d.nextSibling,h=p.firstChild;return I(d,_(Mt,{get each(){return e().relayUrls},children:m=>(()=>{const v=zu(),w=v.firstChild,$=w.nextSibling;return I(w,m),$.$$click=()=>n(m),I($,_(ss,{})),v})()})),p.addEventListener("submit",a),h.addEventListener("change",m=>o(m.currentTarget.value)),yt(h,"pattern",bN),Be(()=>h.value=i()),c})()},xN=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],$N=()=>{const{config:e,setConfig:t}=De(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=iN(),o=i.firstChild,a=o.nextSibling;return I(a,_(Mt,{each:xN,children:({id:c,name:u,example:d})=>(()=>{const p=sN(),h=p.firstChild,m=h.nextSibling;return h.$$click=()=>n(c),I(h,u),I(m,d),Be(v=>{const w=e().dateFormat===c,$=e().dateFormat===c,E=e().dateFormat!==c,k=e().dateFormat!==c;return w!==v._v$&&h.classList.toggle("bg-rose-300",v._v$=w),$!==v._v$2&&h.classList.toggle("text-white",v._v$2=$),E!==v._v$3&&h.classList.toggle("bg-white",v._v$3=E),k!==v._v$4&&h.classList.toggle("text-rose-300",v._v$4=k),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()})),i})()},Xs=e=>(()=>{const t=oN();return t.$$click=n=>e.onClick(n),Be(n=>{const i=!e.value,o=!e.value,a=!!e.value,c=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),c!==n._v$8&&t.classList.toggle("justify-end",n._v$8=c),u!==n._v$9&&yt(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),kN=()=>{const{config:e,setConfig:t}=De(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=aN(),a=o.firstChild,c=a.nextSibling,u=c.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,I(u,_(Xs,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),I(d,_(Xs,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},CN=()=>{const{config:e,saveEmoji:t,removeEmoji:n}=De(),[i,o]=$e(""),[a,c]=$e(""),u=d=>{d.preventDefault(),!(i().length===0||a().length===0)&&t({shortcode:i(),url:a()})};return(()=>{const d=lN(),p=d.firstChild,h=p.nextSibling,m=h.nextSibling,v=m.firstChild,w=v.firstChild,$=w.nextSibling,E=v.nextSibling,k=E.firstChild,C=k.nextSibling;return I(h,_(Mt,{get each(){return Object.values(e().customEmojis)},children:({shortcode:M,url:B})=>(()=>{const R=cN(),T=R.firstChild,L=T.nextSibling,H=L.nextSibling;return yt(T,"src",B),yt(T,"alt",M),I(L,M),H.$$click=()=>n(M),I(H,_(ss,{})),R})()})),m.addEventListener("submit",u),$.addEventListener("change",M=>o(M.currentTarget.value)),C.addEventListener("change",M=>c(M.currentTarget.value)),yt(C,"pattern",yN),Be(()=>$.value=i()),Be(()=>C.value=a()),d})()},SN=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=De(),[o,a]=$e(""),c=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=uN(),d=u.firstChild,p=d.nextSibling;return I(p,_(Mt,{get each(){return e().mutedPubkeys},children:h=>(()=>{const m=zu(),v=m.firstChild,w=v.nextSibling;return I(v,_(Al,{pubkey:h})),w.$$click=()=>t(h),I(w,_(ss,{})),m})()})),u})(),(()=>{const u=dN(),d=u.firstChild,p=d.nextSibling,h=p.nextSibling,m=h.firstChild;return I(p,_(Mt,{get each(){return e().mutedKeywords},children:v=>(()=>{const w=zu(),$=w.firstChild,E=$.nextSibling;return I($,v),E.$$click=()=>i(v),I(E,_(ss,{})),w})()})),h.addEventListener("submit",c),m.addEventListener("change",v=>a(v.currentTarget.value)),Be(()=>m.value=o()),u})()]},EN=()=>{const{config:e,setConfig:t}=De(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=fN(),c=a.firstChild,u=c.nextSibling,d=u.firstChild;d.firstChild;const p=d.nextSibling;p.firstChild;const h=p.nextSibling;return h.firstChild,I(d,_(Xs,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),I(p,_(Xs,{get value(){return e().showImage},onClick:()=>i()}),null),I(h,_(Xs,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},TN=e=>{const[t,n]=$e(null),i=[{name:()=>"プロフィール",icon:()=>_(Pd,{}),render:()=>_(_N,{})},{name:()=>"リレー",icon:()=>_(tN,{}),render:()=>_(wN,{})},{name:()=>"表示",icon:()=>_(JD,{}),render:()=>[_($N,{}),_(kN,{}),_(EN,{})]},{name:()=>"カスタム絵文字",icon:()=>_(Bm,{}),render:()=>_(CN,{})},{name:()=>"ミュート",icon:()=>_(XD,{}),render:()=>_(SN,{})}],o=()=>{const a=t();return a==null?null:i[a]};return _(So,{get onClose(){return e.onClose},get children(){const a=hN();return I(a,_(le,{get when(){return o()},get fallback(){return[pN(),(()=>{const c=gN();return I(c,_(Mt,{each:i,children:(u,d)=>(()=>{const p=mN(),h=p.firstChild,m=h.firstChild;return h.$$click=()=>n(d),I(m,()=>u.icon()),I(h,()=>u.name(),null),p})()})),c})()]},keyed:!0,children:c=>(()=>{const u=vN(),d=u.firstChild,p=d.nextSibling;return d.$$click=()=>n(null),I(d,_(Zu,{})),I(p,()=>c.render()),u})()})),a}})};bt(["click"]);const AN=P('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),IN=P('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),RN=P('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),ON=()=>{let e,t;const{saveColumn:n}=De(),i=Co(),[o,a]=$e(""),c=u=>{u.preventDefault(),n(hd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.log(d)),e?.close(),a("")};return _(md,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=IN();return I(u,_(cg,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=AN(),d=u.firstChild,p=d.nextSibling;u.addEventListener("submit",c),d.addEventListener("change",m=>a(m.currentTarget.value));const h=t;return typeof h=="function"?mr(h,d):t=d,I(p,_(cg,{})),Be(()=>d.value=o()),u}})},LN=()=>{let e;const{showAddColumn:t,showAbout:n}=ei(),{config:i}=De(),[o,a]=$e(!1),[c,u]=$e(!1),d=()=>{e?.focus(),e?.click()},p=()=>a(!0),h=()=>a(!1),m=()=>a(v=>!v);return Bu(()=>({commandType:"openPostForm",handler:()=>{p(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=RN(),w=v.firstChild,$=w.firstChild,E=$.firstChild,k=$.nextSibling,C=k.nextSibling,M=C.firstChild,B=M.nextSibling,R=B.nextSibling,T=R.firstChild,L=w.nextSibling;return E.$$click=()=>m(),I(E,_(GD,{})),I($,_(ON,{}),null),M.$$click=()=>t(),I(M,_(sm,{})),B.$$click=()=>u(H=>!H),I(B,_(qD,{})),R.$$click=()=>n(),I(L,_(jm,{textAreaRef:H=>{e=H},onClose:h})),I(v,_(le,{get when(){return c()},get children(){return _(TN,{onClose:()=>u(!1)})}}),null),Be(H=>{const W=Fu("images/rabbit_app_256.png"),re=!!(o()||i().keepOpenPostForm),V=!(o()||i().keepOpenPostForm);return W!==H._v$&&yt(T,"src",H._v$=W),re!==H._v$2&&L.classList.toggle("static",H._v$2=re),V!==H._v$3&&L.classList.toggle("hidden",H._v$3=V),H},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};bt(["click"]);var PN=Un,MN=function(){return PN.Date.now()},BN=MN,jN=/\s/;function UN(e){for(var t=e.length;t--&&jN.test(e.charAt(t)););return t}var DN=UN,NN=DN,HN=/^\s+/;function zN(e){return e&&e.slice(0,NN(e)+1).replace(HN,"")}var FN=zN,WN=FN,ug=Gn,ZN=Bl,dg=0/0,qN=/^[-+]0x[0-9a-f]+$/i,KN=/^0b[01]+$/i,VN=/^0o[0-7]+$/i,GN=parseInt;function QN(e){if(typeof e=="number")return e;if(ZN(e))return dg;if(ug(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ug(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=WN(e);var n=KN.test(e);return n||VN.test(e)?GN(e.slice(2),n?2:8):qN.test(e)?dg:+e}var XN=QN,YN=Gn,pu=BN,fg=XN,JN="Expected a function",eH=Math.max,tH=Math.min;function nH(e,t,n){var i,o,a,c,u,d,p=0,h=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(JN);t=fg(t)||0,YN(n)&&(h=!!n.leading,m="maxWait"in n,a=m?eH(fg(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function w(L){var H=i,W=o;return i=o=void 0,p=L,c=e.apply(W,H),c}function $(L){return p=L,u=setTimeout(C,t),h?w(L):c}function E(L){var H=L-d,W=L-p,re=t-H;return m?tH(re,a-W):re}function k(L){var H=L-d,W=L-p;return d===void 0||H>=t||H<0||m&&W>=a}function C(){var L=pu();if(k(L))return M(L);u=setTimeout(C,E(L))}function M(L){return u=void 0,v&&i?w(L):(i=o=void 0,c)}function B(){u!==void 0&&clearTimeout(u),p=0,i=d=o=u=void 0}function R(){return u===void 0?c:M(pu())}function T(){var L=pu(),H=k(L);if(i=arguments,o=this,d=L,H){if(u===void 0)return $(d);if(m)return clearTimeout(u),u=setTimeout(C,t),w(d)}return u===void 0&&(u=setTimeout(C,t)),c}return T.cancel=B,T.flush=R,T}var rH=nH,iH=rH,sH=Gn,oH="Expected a function";function aH(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(oH);return sH(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),iH(e,t,{leading:i,maxWait:t,trailing:o})}var lH=aH;const cH=mo(lH),uH=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],dH=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},fH=({shortcuts:e=uH,onShortcut:t})=>{const n=dH(e);kn(()=>{const i=cH(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),Xr(()=>{window.removeEventListener("keydown",i)})})},hH=()=>{const e=Co();fH({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},pH=P('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),yH=()=>{hH();const e=d4(),{persistStatus:t}=g4(),n=El(),{config:i,initializeColumns:o}=De(),a=_r();return hr(()=>{i().relayUrls.map(async c=>{(await n().ensureRelay(c)).on("notice",d=>{console.error(`NOTICE: ${c}: ${d}`)})})}),hr(()=>{const c=a();c!=null&&o({pubkey:c})}),kn(()=>{t().loggedIn||e("/hello")}),f4(c=>{console.error("uncaught error: ",c)}),(()=>{const c=pH();return I(c,_(LN,{}),null),I(c,_(IL,{}),null),I(c,_(WD,{}),null),c})()};export{yH as default};
//# sourceMappingURL=Home-30702d71.js.map
