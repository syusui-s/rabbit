import{S as gg,s as gu,n as n4,i as yp,a as bp,t as r4,f as i4,c as s4,r as _p,b as o4,d as mg,g as a4,u as as,e as vg,h as mu,o as br,j as dn,k as Js,l as ul,p as wp,m as Xe,q as M,v as _t,w as we,x as I,y as _,z as le,A as Ve,B as dl,C as l4,M as Fe,D as c4,E as Mn,F as pr,G as u4,H as Pe,I as d4,J as _r,K as jt,L as f4,N as bt,O as h4,P as p4,Q as Ks,R as g4,T as m4}from"./index-eb31dddd.js";import{c as Vi,u as Ni,a as v4,b as y4,r as Wu,d as b4}from"./resolveAsset-e76eca01.js";class _4 extends gg{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),xp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return vu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return vu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),gu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&$p(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const c=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(n4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),yp||this.currentResult.isStale||!bp(this.options.staleTime))return;const n=r4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(yp||this.options.enabled===!1||!bp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||i4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,c=this.currentResultState,u=this.currentResultOptions,d=t!==i,p=d?t.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:m}=t;let{dataUpdatedAt:v,error:w,errorUpdatedAt:$,fetchStatus:S,status:A}=m,k=!1,P=!1,B;if(n._optimisticResults){const W=this.hasListeners(),ie=!W&&xp(t,n),K=W&&$p(t,i,n,o);(ie||K)&&(S=s4(t.options.networkMode)?"fetching":"paused",v||(A="loading")),n._optimisticResults==="isRestoring"&&(S="idle")}if(n.keepPreviousData&&!m.dataUpdatedAt&&h!=null&&h.isSuccess&&A!=="error")B=h.data,v=h.dataUpdatedAt,A=h.status,k=!0;else if(n.select&&typeof m.data<"u")if(a&&m.data===c?.data&&n.select===this.selectFn)B=this.selectResult;else try{this.selectFn=n.select,B=n.select(m.data),B=_p(a?.data,B,n),this.selectResult=B,this.selectError=null}catch(W){this.selectError=W}else B=m.data;if(typeof n.placeholderData<"u"&&typeof B>"u"&&A==="loading"){let W;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)W=a.data;else if(W=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof W<"u")try{W=n.select(W),this.selectError=null}catch(ie){this.selectError=ie}typeof W<"u"&&(A="success",B=_p(a?.data,W,n),P=!0)}this.selectError&&(w=this.selectError,B=this.selectResult,$=Date.now(),A="error");const E=S==="fetching",T=A==="loading",O=A==="error";return{status:A,fetchStatus:S,isLoading:T,isSuccess:A==="success",isError:O,isInitialLoading:T&&E,data:B,dataUpdatedAt:v,error:w,errorUpdatedAt:$,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>p.dataUpdateCount||m.errorUpdateCount>p.errorUpdateCount,isFetching:E,isRefetching:E&&!T,isLoadingError:O&&m.dataUpdatedAt===0,isPaused:S==="paused",isPlaceholderData:P,isPreviousData:k,isRefetchError:O&&m.dataUpdatedAt!==0,isStale:Zu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,gu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:c}=this.options;if(c==="all"||!c&&!this.trackedProps.size)return!0;const u=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const p=d;return this.currentResult[p]!==n[p]&&u.has(p)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!o4(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){mg.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var c,u,d,p;(c=(u=this.options).onError)==null||c.call(u,this.currentResult.error),(d=(p=this.options).onSettled)==null||d.call(p,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function w4(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function xp(e,t){return w4(e,t)||e.state.dataUpdatedAt>0&&vu(e,t,t.refetchOnMount)}function vu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Zu(e,t)}return!1}function $p(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Zu(e,n)}function Zu(e,t){return e.isStaleByTime(t.staleTime)}class x4 extends gg{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),gu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:a4(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){mg.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var c,u,d,p;(c=(u=this.mutateOptions).onError)==null||c.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(p=this.mutateOptions).onSettled)==null||d.call(p,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)})})}}function $4(e){return typeof e=="function"}function kp(e,t,n){if(!$4(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function yg(e,t){return typeof e=="function"?e(...t):!!e}function k4(e,t){const n=as({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[c,u]=Vi(a.getOptimisticResult(o)),[d,{refetch:p,mutate:h}]=vg(()=>new Promise($=>{c.isFetching&&c.isLoading||(Ni(c.data)===i&&$(void 0),$(Ni(c.data)))}));mu(()=>{h(()=>Ni(c.data)),p()});let m=[];const v=a.subscribe($=>{m.push(()=>{mu(()=>{const S={...Ni($)};S.data===void 0&&(S.data=i),u(Ni(S)),h(()=>Ni($.data)),p()})}),queueMicrotask(()=>{const S=m.pop();S&&S(),m=[]})});br(()=>v()),dn(()=>{a.setOptions(o,{listeners:!1})}),Js(()=>{const $=n.defaultQueryOptions(e);a.setOptions($)}),Js(ul(()=>c.status,()=>{if(c.isError&&!c.isFetching&&yg(a.options.useErrorBoundary,[c.error,a.getCurrentQuery()]))throw c.error}));const w={get($,S){return S==="data"?d():Reflect.get($,S)}};return new Proxy(c,w)}function ls(e,t,n){const[i,o]=Vi(kp(e,t,n));return Js(()=>{const a=kp(e,t,n);o(a)}),k4(i,_4)}function gi(e,t,n){const[i,o]=Vi(wp(e,t,n)),a=as({context:i.context}),c=new x4(a,i),u=(m,v)=>{c.mutate(m,v).catch(C4)},[d,p]=Vi({...c.getCurrentResult(),mutate:u,mutateAsync:c.getCurrentResult().mutate});Js(()=>{const m=wp(e,t,n);o(m),c.setOptions(m)}),Js(ul(()=>d.status,()=>{if(d.isError&&yg(c.options.useErrorBoundary,[d.error]))throw d.error}));const h=c.subscribe(m=>{p({...m,mutate:u,mutateAsync:m.mutate})});return br(h),d}function C4(){}const S4=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),bg=(e={})=>(()=>{const t=S4();return Xe(t,e,!0,!0),t})();var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function fl(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var Ua={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ua.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",p=500,h="__lodash_placeholder__",m=1,v=2,w=4,$=1,S=2,A=1,k=2,P=4,B=8,E=16,T=32,O=64,H=128,W=256,ie=512,K=30,se="...",Z=800,Y=16,oe=1,Ze=2,X=3,ve=1/0,G=9007199254740991,Ae=17976931348623157e292,$e=0/0,ee=4294967295,ye=ee-1,st=ee>>>1,Ot=[["ary",H],["bind",A],["bindKey",k],["curry",B],["curryRight",E],["flip",ie],["partial",T],["partialRight",O],["rearg",W]],$t="[object Arguments]",Zt="[object Array]",V="[object AsyncFunction]",ft="[object Boolean]",ce="[object Date]",wt="[object DOMException]",gt="[object Error]",Lt="[object Function]",Hn="[object GeneratorFunction]",ot="[object Map]",qt="[object Number]",Sr="[object Null]",ht="[object Object]",Dt="[object Promise]",er="[object Proxy]",be="[object RegExp]",ze="[object Set]",at="[object String]",St="[object Symbol]",Jt="[object Undefined]",ue="[object WeakMap]",fn="[object WeakSet]",Le="[object ArrayBuffer]",nt="[object DataView]",Cn="[object Float32Array]",Sn="[object Float64Array]",hn="[object Int8Array]",Er="[object Int16Array]",$i="[object Int32Array]",ki="[object Uint8Array]",Ci="[object Uint8ClampedArray]",Ul="[object Uint16Array]",Dl="[object Uint32Array]",$v=/\b__p \+= '';/g,kv=/\b(__p \+=) '' \+/g,Cv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,zd=/&(?:amp|lt|gt|quot|#39);/g,Fd=/[&<>"']/g,Sv=RegExp(zd.source),Ev=RegExp(Fd.source),Tv=/<%-([\s\S]+?)%>/g,Av=/<%([\s\S]+?)%>/g,Wd=/<%=([\s\S]+?)%>/g,Iv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rv=/^\w*$/,Ov=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Nl=/[\\^$.*+?()[\]{}|]/g,Lv=RegExp(Nl.source),Hl=/^\s+/,Pv=/\s/,Mv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Bv=/\{\n\/\* \[wrapped with (.+)\] \*/,jv=/,? & /,Uv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Dv=/[()=,{}\[\]\/\s]/,Nv=/\\(\\)?/g,Hv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zd=/\w*$/,zv=/^[-+]0x[0-9a-f]+$/i,Fv=/^0b[01]+$/i,Wv=/^\[object .+?Constructor\]$/,Zv=/^0o[0-7]+$/i,qv=/^(?:0|[1-9]\d*)$/,Kv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ao=/($^)/,Vv=/['\n\r\u2028\u2029\\]/g,Io="\\ud800-\\udfff",Gv="\\u0300-\\u036f",Qv="\\ufe20-\\ufe2f",Xv="\\u20d0-\\u20ff",qd=Gv+Qv+Xv,Kd="\\u2700-\\u27bf",Vd="a-z\\xdf-\\xf6\\xf8-\\xff",Yv="\\xac\\xb1\\xd7\\xf7",Jv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",e2="\\u2000-\\u206f",t2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Gd="A-Z\\xc0-\\xd6\\xd8-\\xde",Qd="\\ufe0e\\ufe0f",Xd=Yv+Jv+e2+t2,zl="['’]",n2="["+Io+"]",Yd="["+Xd+"]",Ro="["+qd+"]",Jd="\\d+",r2="["+Kd+"]",ef="["+Vd+"]",tf="[^"+Io+Xd+Jd+Kd+Vd+Gd+"]",Fl="\\ud83c[\\udffb-\\udfff]",i2="(?:"+Ro+"|"+Fl+")",nf="[^"+Io+"]",Wl="(?:\\ud83c[\\udde6-\\uddff]){2}",Zl="[\\ud800-\\udbff][\\udc00-\\udfff]",Si="["+Gd+"]",rf="\\u200d",sf="(?:"+ef+"|"+tf+")",s2="(?:"+Si+"|"+tf+")",of="(?:"+zl+"(?:d|ll|m|re|s|t|ve))?",af="(?:"+zl+"(?:D|LL|M|RE|S|T|VE))?",lf=i2+"?",cf="["+Qd+"]?",o2="(?:"+rf+"(?:"+[nf,Wl,Zl].join("|")+")"+cf+lf+")*",a2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",l2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",uf=cf+lf+o2,c2="(?:"+[r2,Wl,Zl].join("|")+")"+uf,u2="(?:"+[nf+Ro+"?",Ro,Wl,Zl,n2].join("|")+")",d2=RegExp(zl,"g"),f2=RegExp(Ro,"g"),ql=RegExp(Fl+"(?="+Fl+")|"+u2+uf,"g"),h2=RegExp([Si+"?"+ef+"+"+of+"(?="+[Yd,Si,"$"].join("|")+")",s2+"+"+af+"(?="+[Yd,Si+sf,"$"].join("|")+")",Si+"?"+sf+"+"+of,Si+"+"+af,l2,a2,Jd,c2].join("|"),"g"),p2=RegExp("["+rf+Io+qd+Qd+"]"),g2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,m2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],v2=-1,rt={};rt[Cn]=rt[Sn]=rt[hn]=rt[Er]=rt[$i]=rt[ki]=rt[Ci]=rt[Ul]=rt[Dl]=!0,rt[$t]=rt[Zt]=rt[Le]=rt[ft]=rt[nt]=rt[ce]=rt[gt]=rt[Lt]=rt[ot]=rt[qt]=rt[ht]=rt[be]=rt[ze]=rt[at]=rt[ue]=!1;var et={};et[$t]=et[Zt]=et[Le]=et[nt]=et[ft]=et[ce]=et[Cn]=et[Sn]=et[hn]=et[Er]=et[$i]=et[ot]=et[qt]=et[ht]=et[be]=et[ze]=et[at]=et[St]=et[ki]=et[Ci]=et[Ul]=et[Dl]=!0,et[gt]=et[Lt]=et[ue]=!1;var y2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},b2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},_2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},w2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},x2=parseFloat,$2=parseInt,df=typeof fr=="object"&&fr&&fr.Object===Object&&fr,k2=typeof self=="object"&&self&&self.Object===Object&&self,At=df||k2||Function("return this")(),Kl=t&&!t.nodeType&&t,ri=Kl&&!0&&e&&!e.nodeType&&e,ff=ri&&ri.exports===Kl,Vl=ff&&df.process,pn=function(){try{var R=ri&&ri.require&&ri.require("util").types;return R||Vl&&Vl.binding&&Vl.binding("util")}catch{}}(),hf=pn&&pn.isArrayBuffer,pf=pn&&pn.isDate,gf=pn&&pn.isMap,mf=pn&&pn.isRegExp,vf=pn&&pn.isSet,yf=pn&&pn.isTypedArray;function en(R,U,j){switch(j.length){case 0:return R.call(U);case 1:return R.call(U,j[0]);case 2:return R.call(U,j[0],j[1]);case 3:return R.call(U,j[0],j[1],j[2])}return R.apply(U,j)}function C2(R,U,j,ne){for(var _e=-1,qe=R==null?0:R.length;++_e<qe;){var kt=R[_e];U(ne,kt,j(kt),R)}return ne}function gn(R,U){for(var j=-1,ne=R==null?0:R.length;++j<ne&&U(R[j],j,R)!==!1;);return R}function S2(R,U){for(var j=R==null?0:R.length;j--&&U(R[j],j,R)!==!1;);return R}function bf(R,U){for(var j=-1,ne=R==null?0:R.length;++j<ne;)if(!U(R[j],j,R))return!1;return!0}function Tr(R,U){for(var j=-1,ne=R==null?0:R.length,_e=0,qe=[];++j<ne;){var kt=R[j];U(kt,j,R)&&(qe[_e++]=kt)}return qe}function Oo(R,U){var j=R==null?0:R.length;return!!j&&Ei(R,U,0)>-1}function Gl(R,U,j){for(var ne=-1,_e=R==null?0:R.length;++ne<_e;)if(j(U,R[ne]))return!0;return!1}function lt(R,U){for(var j=-1,ne=R==null?0:R.length,_e=Array(ne);++j<ne;)_e[j]=U(R[j],j,R);return _e}function Ar(R,U){for(var j=-1,ne=U.length,_e=R.length;++j<ne;)R[_e+j]=U[j];return R}function Ql(R,U,j,ne){var _e=-1,qe=R==null?0:R.length;for(ne&&qe&&(j=R[++_e]);++_e<qe;)j=U(j,R[_e],_e,R);return j}function E2(R,U,j,ne){var _e=R==null?0:R.length;for(ne&&_e&&(j=R[--_e]);_e--;)j=U(j,R[_e],_e,R);return j}function Xl(R,U){for(var j=-1,ne=R==null?0:R.length;++j<ne;)if(U(R[j],j,R))return!0;return!1}var T2=Yl("length");function A2(R){return R.split("")}function I2(R){return R.match(Uv)||[]}function _f(R,U,j){var ne;return j(R,function(_e,qe,kt){if(U(_e,qe,kt))return ne=qe,!1}),ne}function Lo(R,U,j,ne){for(var _e=R.length,qe=j+(ne?1:-1);ne?qe--:++qe<_e;)if(U(R[qe],qe,R))return qe;return-1}function Ei(R,U,j){return U===U?z2(R,U,j):Lo(R,wf,j)}function R2(R,U,j,ne){for(var _e=j-1,qe=R.length;++_e<qe;)if(ne(R[_e],U))return _e;return-1}function wf(R){return R!==R}function xf(R,U){var j=R==null?0:R.length;return j?ec(R,U)/j:$e}function Yl(R){return function(U){return U==null?n:U[R]}}function Jl(R){return function(U){return R==null?n:R[U]}}function $f(R,U,j,ne,_e){return _e(R,function(qe,kt,Je){j=ne?(ne=!1,qe):U(j,qe,kt,Je)}),j}function O2(R,U){var j=R.length;for(R.sort(U);j--;)R[j]=R[j].value;return R}function ec(R,U){for(var j,ne=-1,_e=R.length;++ne<_e;){var qe=U(R[ne]);qe!==n&&(j=j===n?qe:j+qe)}return j}function tc(R,U){for(var j=-1,ne=Array(R);++j<R;)ne[j]=U(j);return ne}function L2(R,U){return lt(U,function(j){return[j,R[j]]})}function kf(R){return R&&R.slice(0,Tf(R)+1).replace(Hl,"")}function tn(R){return function(U){return R(U)}}function nc(R,U){return lt(U,function(j){return R[j]})}function Cs(R,U){return R.has(U)}function Cf(R,U){for(var j=-1,ne=R.length;++j<ne&&Ei(U,R[j],0)>-1;);return j}function Sf(R,U){for(var j=R.length;j--&&Ei(U,R[j],0)>-1;);return j}function P2(R,U){for(var j=R.length,ne=0;j--;)R[j]===U&&++ne;return ne}var M2=Jl(y2),B2=Jl(b2);function j2(R){return"\\"+w2[R]}function U2(R,U){return R==null?n:R[U]}function Ti(R){return p2.test(R)}function D2(R){return g2.test(R)}function N2(R){for(var U,j=[];!(U=R.next()).done;)j.push(U.value);return j}function rc(R){var U=-1,j=Array(R.size);return R.forEach(function(ne,_e){j[++U]=[_e,ne]}),j}function Ef(R,U){return function(j){return R(U(j))}}function Ir(R,U){for(var j=-1,ne=R.length,_e=0,qe=[];++j<ne;){var kt=R[j];(kt===U||kt===h)&&(R[j]=h,qe[_e++]=j)}return qe}function Po(R){var U=-1,j=Array(R.size);return R.forEach(function(ne){j[++U]=ne}),j}function H2(R){var U=-1,j=Array(R.size);return R.forEach(function(ne){j[++U]=[ne,ne]}),j}function z2(R,U,j){for(var ne=j-1,_e=R.length;++ne<_e;)if(R[ne]===U)return ne;return-1}function F2(R,U,j){for(var ne=j+1;ne--;)if(R[ne]===U)return ne;return ne}function Ai(R){return Ti(R)?Z2(R):T2(R)}function En(R){return Ti(R)?q2(R):A2(R)}function Tf(R){for(var U=R.length;U--&&Pv.test(R.charAt(U)););return U}var W2=Jl(_2);function Z2(R){for(var U=ql.lastIndex=0;ql.test(R);)++U;return U}function q2(R){return R.match(ql)||[]}function K2(R){return R.match(h2)||[]}var V2=function R(U){U=U==null?At:Ii.defaults(At.Object(),U,Ii.pick(At,m2));var j=U.Array,ne=U.Date,_e=U.Error,qe=U.Function,kt=U.Math,Je=U.Object,ic=U.RegExp,G2=U.String,mn=U.TypeError,Mo=j.prototype,Q2=qe.prototype,Ri=Je.prototype,Bo=U["__core-js_shared__"],jo=Q2.toString,Qe=Ri.hasOwnProperty,X2=0,Af=function(){var r=/[^.]+$/.exec(Bo&&Bo.keys&&Bo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Uo=Ri.toString,Y2=jo.call(Je),J2=At._,ey=ic("^"+jo.call(Qe).replace(Nl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Do=ff?U.Buffer:n,Rr=U.Symbol,No=U.Uint8Array,If=Do?Do.allocUnsafe:n,Ho=Ef(Je.getPrototypeOf,Je),Rf=Je.create,Of=Ri.propertyIsEnumerable,zo=Mo.splice,Lf=Rr?Rr.isConcatSpreadable:n,Ss=Rr?Rr.iterator:n,ii=Rr?Rr.toStringTag:n,Fo=function(){try{var r=ci(Je,"defineProperty");return r({},"",{}),r}catch{}}(),ty=U.clearTimeout!==At.clearTimeout&&U.clearTimeout,ny=ne&&ne.now!==At.Date.now&&ne.now,ry=U.setTimeout!==At.setTimeout&&U.setTimeout,Wo=kt.ceil,Zo=kt.floor,sc=Je.getOwnPropertySymbols,iy=Do?Do.isBuffer:n,Pf=U.isFinite,sy=Mo.join,oy=Ef(Je.keys,Je),Ct=kt.max,Pt=kt.min,ay=ne.now,ly=U.parseInt,Mf=kt.random,cy=Mo.reverse,oc=ci(U,"DataView"),Es=ci(U,"Map"),ac=ci(U,"Promise"),Oi=ci(U,"Set"),Ts=ci(U,"WeakMap"),As=ci(Je,"create"),qo=Ts&&new Ts,Li={},uy=ui(oc),dy=ui(Es),fy=ui(ac),hy=ui(Oi),py=ui(Ts),Ko=Rr?Rr.prototype:n,Is=Ko?Ko.valueOf:n,Bf=Ko?Ko.toString:n;function y(r){if(pt(r)&&!ke(r)&&!(r instanceof je)){if(r instanceof vn)return r;if(Qe.call(r,"__wrapped__"))return jh(r)}return new vn(r)}var Pi=function(){function r(){}return function(s){if(!ut(s))return{};if(Rf)return Rf(s);r.prototype=s;var l=new r;return r.prototype=n,l}}();function Vo(){}function vn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:Tv,evaluate:Av,interpolate:Wd,variable:"",imports:{_:y}},y.prototype=Vo.prototype,y.prototype.constructor=y,vn.prototype=Pi(Vo.prototype),vn.prototype.constructor=vn;function je(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ee,this.__views__=[]}function gy(){var r=new je(this.__wrapped__);return r.__actions__=Kt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Kt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Kt(this.__views__),r}function my(){if(this.__filtered__){var r=new je(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function vy(){var r=this.__wrapped__.value(),s=this.__dir__,l=ke(r),f=s<0,g=l?r.length:0,b=Ab(0,g,this.__views__),x=b.start,C=b.end,L=C-x,D=f?C:x-1,N=this.__iteratees__,F=N.length,Q=0,ae=Pt(L,this.__takeCount__);if(!l||!f&&g==L&&ae==L)return oh(r,this.__actions__);var pe=[];e:for(;L--&&Q<ae;){D+=s;for(var Ee=-1,ge=r[D];++Ee<F;){var Me=N[Ee],De=Me.iteratee,sn=Me.type,zt=De(ge);if(sn==Ze)ge=zt;else if(!zt){if(sn==oe)continue e;break e}}pe[Q++]=ge}return pe}je.prototype=Pi(Vo.prototype),je.prototype.constructor=je;function si(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function yy(){this.__data__=As?As(null):{},this.size=0}function by(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function _y(r){var s=this.__data__;if(As){var l=s[r];return l===d?n:l}return Qe.call(s,r)?s[r]:n}function wy(r){var s=this.__data__;return As?s[r]!==n:Qe.call(s,r)}function xy(r,s){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=As&&s===n?d:s,this}si.prototype.clear=yy,si.prototype.delete=by,si.prototype.get=_y,si.prototype.has=wy,si.prototype.set=xy;function tr(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function $y(){this.__data__=[],this.size=0}function ky(r){var s=this.__data__,l=Go(s,r);if(l<0)return!1;var f=s.length-1;return l==f?s.pop():zo.call(s,l,1),--this.size,!0}function Cy(r){var s=this.__data__,l=Go(s,r);return l<0?n:s[l][1]}function Sy(r){return Go(this.__data__,r)>-1}function Ey(r,s){var l=this.__data__,f=Go(l,r);return f<0?(++this.size,l.push([r,s])):l[f][1]=s,this}tr.prototype.clear=$y,tr.prototype.delete=ky,tr.prototype.get=Cy,tr.prototype.has=Sy,tr.prototype.set=Ey;function nr(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function Ty(){this.size=0,this.__data__={hash:new si,map:new(Es||tr),string:new si}}function Ay(r){var s=aa(this,r).delete(r);return this.size-=s?1:0,s}function Iy(r){return aa(this,r).get(r)}function Ry(r){return aa(this,r).has(r)}function Oy(r,s){var l=aa(this,r),f=l.size;return l.set(r,s),this.size+=l.size==f?0:1,this}nr.prototype.clear=Ty,nr.prototype.delete=Ay,nr.prototype.get=Iy,nr.prototype.has=Ry,nr.prototype.set=Oy;function oi(r){var s=-1,l=r==null?0:r.length;for(this.__data__=new nr;++s<l;)this.add(r[s])}function Ly(r){return this.__data__.set(r,d),this}function Py(r){return this.__data__.has(r)}oi.prototype.add=oi.prototype.push=Ly,oi.prototype.has=Py;function Tn(r){var s=this.__data__=new tr(r);this.size=s.size}function My(){this.__data__=new tr,this.size=0}function By(r){var s=this.__data__,l=s.delete(r);return this.size=s.size,l}function jy(r){return this.__data__.get(r)}function Uy(r){return this.__data__.has(r)}function Dy(r,s){var l=this.__data__;if(l instanceof tr){var f=l.__data__;if(!Es||f.length<o-1)return f.push([r,s]),this.size=++l.size,this;l=this.__data__=new nr(f)}return l.set(r,s),this.size=l.size,this}Tn.prototype.clear=My,Tn.prototype.delete=By,Tn.prototype.get=jy,Tn.prototype.has=Uy,Tn.prototype.set=Dy;function jf(r,s){var l=ke(r),f=!l&&di(r),g=!l&&!f&&Br(r),b=!l&&!f&&!g&&Ui(r),x=l||f||g||b,C=x?tc(r.length,G2):[],L=C.length;for(var D in r)(s||Qe.call(r,D))&&!(x&&(D=="length"||g&&(D=="offset"||D=="parent")||b&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||or(D,L)))&&C.push(D);return C}function Uf(r){var s=r.length;return s?r[yc(0,s-1)]:n}function Ny(r,s){return la(Kt(r),ai(s,0,r.length))}function Hy(r){return la(Kt(r))}function lc(r,s,l){(l!==n&&!An(r[s],l)||l===n&&!(s in r))&&rr(r,s,l)}function Rs(r,s,l){var f=r[s];(!(Qe.call(r,s)&&An(f,l))||l===n&&!(s in r))&&rr(r,s,l)}function Go(r,s){for(var l=r.length;l--;)if(An(r[l][0],s))return l;return-1}function zy(r,s,l,f){return Or(r,function(g,b,x){s(f,g,l(g),x)}),f}function Df(r,s){return r&&Fn(s,Et(s),r)}function Fy(r,s){return r&&Fn(s,Gt(s),r)}function rr(r,s,l){s=="__proto__"&&Fo?Fo(r,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[s]=l}function cc(r,s){for(var l=-1,f=s.length,g=j(f),b=r==null;++l<f;)g[l]=b?n:Fc(r,s[l]);return g}function ai(r,s,l){return r===r&&(l!==n&&(r=r<=l?r:l),s!==n&&(r=r>=s?r:s)),r}function yn(r,s,l,f,g,b){var x,C=s&m,L=s&v,D=s&w;if(l&&(x=g?l(r,f,g,b):l(r)),x!==n)return x;if(!ut(r))return r;var N=ke(r);if(N){if(x=Rb(r),!C)return Kt(r,x)}else{var F=Mt(r),Q=F==Lt||F==Hn;if(Br(r))return ch(r,C);if(F==ht||F==$t||Q&&!g){if(x=L||Q?{}:Th(r),!C)return L?_b(r,Fy(x,r)):bb(r,Df(x,r))}else{if(!et[F])return g?r:{};x=Ob(r,F,C)}}b||(b=new Tn);var ae=b.get(r);if(ae)return ae;b.set(r,x),rp(r)?r.forEach(function(ge){x.add(yn(ge,s,l,ge,r,b))}):tp(r)&&r.forEach(function(ge,Me){x.set(Me,yn(ge,s,l,Me,r,b))});var pe=D?L?Ac:Tc:L?Gt:Et,Ee=N?n:pe(r);return gn(Ee||r,function(ge,Me){Ee&&(Me=ge,ge=r[Me]),Rs(x,Me,yn(ge,s,l,Me,r,b))}),x}function Wy(r){var s=Et(r);return function(l){return Nf(l,r,s)}}function Nf(r,s,l){var f=l.length;if(r==null)return!f;for(r=Je(r);f--;){var g=l[f],b=s[g],x=r[g];if(x===n&&!(g in r)||!b(x))return!1}return!0}function Hf(r,s,l){if(typeof r!="function")throw new mn(c);return Us(function(){r.apply(n,l)},s)}function Os(r,s,l,f){var g=-1,b=Oo,x=!0,C=r.length,L=[],D=s.length;if(!C)return L;l&&(s=lt(s,tn(l))),f?(b=Gl,x=!1):s.length>=o&&(b=Cs,x=!1,s=new oi(s));e:for(;++g<C;){var N=r[g],F=l==null?N:l(N);if(N=f||N!==0?N:0,x&&F===F){for(var Q=D;Q--;)if(s[Q]===F)continue e;L.push(N)}else b(s,F,f)||L.push(N)}return L}var Or=ph(zn),zf=ph(dc,!0);function Zy(r,s){var l=!0;return Or(r,function(f,g,b){return l=!!s(f,g,b),l}),l}function Qo(r,s,l){for(var f=-1,g=r.length;++f<g;){var b=r[f],x=s(b);if(x!=null&&(C===n?x===x&&!rn(x):l(x,C)))var C=x,L=b}return L}function qy(r,s,l,f){var g=r.length;for(l=Ce(l),l<0&&(l=-l>g?0:g+l),f=f===n||f>g?g:Ce(f),f<0&&(f+=g),f=l>f?0:sp(f);l<f;)r[l++]=s;return r}function Ff(r,s){var l=[];return Or(r,function(f,g,b){s(f,g,b)&&l.push(f)}),l}function It(r,s,l,f,g){var b=-1,x=r.length;for(l||(l=Pb),g||(g=[]);++b<x;){var C=r[b];s>0&&l(C)?s>1?It(C,s-1,l,f,g):Ar(g,C):f||(g[g.length]=C)}return g}var uc=gh(),Wf=gh(!0);function zn(r,s){return r&&uc(r,s,Et)}function dc(r,s){return r&&Wf(r,s,Et)}function Xo(r,s){return Tr(s,function(l){return ar(r[l])})}function li(r,s){s=Pr(s,r);for(var l=0,f=s.length;r!=null&&l<f;)r=r[Wn(s[l++])];return l&&l==f?r:n}function Zf(r,s,l){var f=s(r);return ke(r)?f:Ar(f,l(r))}function Nt(r){return r==null?r===n?Jt:Sr:ii&&ii in Je(r)?Tb(r):Hb(r)}function fc(r,s){return r>s}function Ky(r,s){return r!=null&&Qe.call(r,s)}function Vy(r,s){return r!=null&&s in Je(r)}function Gy(r,s,l){return r>=Pt(s,l)&&r<Ct(s,l)}function hc(r,s,l){for(var f=l?Gl:Oo,g=r[0].length,b=r.length,x=b,C=j(b),L=1/0,D=[];x--;){var N=r[x];x&&s&&(N=lt(N,tn(s))),L=Pt(N.length,L),C[x]=!l&&(s||g>=120&&N.length>=120)?new oi(x&&N):n}N=r[0];var F=-1,Q=C[0];e:for(;++F<g&&D.length<L;){var ae=N[F],pe=s?s(ae):ae;if(ae=l||ae!==0?ae:0,!(Q?Cs(Q,pe):f(D,pe,l))){for(x=b;--x;){var Ee=C[x];if(!(Ee?Cs(Ee,pe):f(r[x],pe,l)))continue e}Q&&Q.push(pe),D.push(ae)}}return D}function Qy(r,s,l,f){return zn(r,function(g,b,x){s(f,l(g),b,x)}),f}function Ls(r,s,l){s=Pr(s,r),r=Oh(r,s);var f=r==null?r:r[Wn(_n(s))];return f==null?n:en(f,r,l)}function qf(r){return pt(r)&&Nt(r)==$t}function Xy(r){return pt(r)&&Nt(r)==Le}function Yy(r){return pt(r)&&Nt(r)==ce}function Ps(r,s,l,f,g){return r===s?!0:r==null||s==null||!pt(r)&&!pt(s)?r!==r&&s!==s:Jy(r,s,l,f,Ps,g)}function Jy(r,s,l,f,g,b){var x=ke(r),C=ke(s),L=x?Zt:Mt(r),D=C?Zt:Mt(s);L=L==$t?ht:L,D=D==$t?ht:D;var N=L==ht,F=D==ht,Q=L==D;if(Q&&Br(r)){if(!Br(s))return!1;x=!0,N=!1}if(Q&&!N)return b||(b=new Tn),x||Ui(r)?Ch(r,s,l,f,g,b):Sb(r,s,L,l,f,g,b);if(!(l&$)){var ae=N&&Qe.call(r,"__wrapped__"),pe=F&&Qe.call(s,"__wrapped__");if(ae||pe){var Ee=ae?r.value():r,ge=pe?s.value():s;return b||(b=new Tn),g(Ee,ge,l,f,b)}}return Q?(b||(b=new Tn),Eb(r,s,l,f,g,b)):!1}function eb(r){return pt(r)&&Mt(r)==ot}function pc(r,s,l,f){var g=l.length,b=g,x=!f;if(r==null)return!b;for(r=Je(r);g--;){var C=l[g];if(x&&C[2]?C[1]!==r[C[0]]:!(C[0]in r))return!1}for(;++g<b;){C=l[g];var L=C[0],D=r[L],N=C[1];if(x&&C[2]){if(D===n&&!(L in r))return!1}else{var F=new Tn;if(f)var Q=f(D,N,L,r,s,F);if(!(Q===n?Ps(N,D,$|S,f,F):Q))return!1}}return!0}function Kf(r){if(!ut(r)||Bb(r))return!1;var s=ar(r)?ey:Wv;return s.test(ui(r))}function tb(r){return pt(r)&&Nt(r)==be}function nb(r){return pt(r)&&Mt(r)==ze}function rb(r){return pt(r)&&pa(r.length)&&!!rt[Nt(r)]}function Vf(r){return typeof r=="function"?r:r==null?Qt:typeof r=="object"?ke(r)?Xf(r[0],r[1]):Qf(r):mp(r)}function gc(r){if(!js(r))return oy(r);var s=[];for(var l in Je(r))Qe.call(r,l)&&l!="constructor"&&s.push(l);return s}function ib(r){if(!ut(r))return Nb(r);var s=js(r),l=[];for(var f in r)f=="constructor"&&(s||!Qe.call(r,f))||l.push(f);return l}function mc(r,s){return r<s}function Gf(r,s){var l=-1,f=Vt(r)?j(r.length):[];return Or(r,function(g,b,x){f[++l]=s(g,b,x)}),f}function Qf(r){var s=Rc(r);return s.length==1&&s[0][2]?Ih(s[0][0],s[0][1]):function(l){return l===r||pc(l,r,s)}}function Xf(r,s){return Lc(r)&&Ah(s)?Ih(Wn(r),s):function(l){var f=Fc(l,r);return f===n&&f===s?Wc(l,r):Ps(s,f,$|S)}}function Yo(r,s,l,f,g){r!==s&&uc(s,function(b,x){if(g||(g=new Tn),ut(b))sb(r,s,x,l,Yo,f,g);else{var C=f?f(Mc(r,x),b,x+"",r,s,g):n;C===n&&(C=b),lc(r,x,C)}},Gt)}function sb(r,s,l,f,g,b,x){var C=Mc(r,l),L=Mc(s,l),D=x.get(L);if(D){lc(r,l,D);return}var N=b?b(C,L,l+"",r,s,x):n,F=N===n;if(F){var Q=ke(L),ae=!Q&&Br(L),pe=!Q&&!ae&&Ui(L);N=L,Q||ae||pe?ke(C)?N=C:mt(C)?N=Kt(C):ae?(F=!1,N=ch(L,!0)):pe?(F=!1,N=uh(L,!0)):N=[]:Ds(L)||di(L)?(N=C,di(C)?N=op(C):(!ut(C)||ar(C))&&(N=Th(L))):F=!1}F&&(x.set(L,N),g(N,L,f,b,x),x.delete(L)),lc(r,l,N)}function Yf(r,s){var l=r.length;if(l)return s+=s<0?l:0,or(s,l)?r[s]:n}function Jf(r,s,l){s.length?s=lt(s,function(b){return ke(b)?function(x){return li(x,b.length===1?b[0]:b)}:b}):s=[Qt];var f=-1;s=lt(s,tn(fe()));var g=Gf(r,function(b,x,C){var L=lt(s,function(D){return D(b)});return{criteria:L,index:++f,value:b}});return O2(g,function(b,x){return yb(b,x,l)})}function ob(r,s){return eh(r,s,function(l,f){return Wc(r,f)})}function eh(r,s,l){for(var f=-1,g=s.length,b={};++f<g;){var x=s[f],C=li(r,x);l(C,x)&&Ms(b,Pr(x,r),C)}return b}function ab(r){return function(s){return li(s,r)}}function vc(r,s,l,f){var g=f?R2:Ei,b=-1,x=s.length,C=r;for(r===s&&(s=Kt(s)),l&&(C=lt(r,tn(l)));++b<x;)for(var L=0,D=s[b],N=l?l(D):D;(L=g(C,N,L,f))>-1;)C!==r&&zo.call(C,L,1),zo.call(r,L,1);return r}function th(r,s){for(var l=r?s.length:0,f=l-1;l--;){var g=s[l];if(l==f||g!==b){var b=g;or(g)?zo.call(r,g,1):wc(r,g)}}return r}function yc(r,s){return r+Zo(Mf()*(s-r+1))}function lb(r,s,l,f){for(var g=-1,b=Ct(Wo((s-r)/(l||1)),0),x=j(b);b--;)x[f?b:++g]=r,r+=l;return x}function bc(r,s){var l="";if(!r||s<1||s>G)return l;do s%2&&(l+=r),s=Zo(s/2),s&&(r+=r);while(s);return l}function Ie(r,s){return Bc(Rh(r,s,Qt),r+"")}function cb(r){return Uf(Di(r))}function ub(r,s){var l=Di(r);return la(l,ai(s,0,l.length))}function Ms(r,s,l,f){if(!ut(r))return r;s=Pr(s,r);for(var g=-1,b=s.length,x=b-1,C=r;C!=null&&++g<b;){var L=Wn(s[g]),D=l;if(L==="__proto__"||L==="constructor"||L==="prototype")return r;if(g!=x){var N=C[L];D=f?f(N,L,C):n,D===n&&(D=ut(N)?N:or(s[g+1])?[]:{})}Rs(C,L,D),C=C[L]}return r}var nh=qo?function(r,s){return qo.set(r,s),r}:Qt,db=Fo?function(r,s){return Fo(r,"toString",{configurable:!0,enumerable:!1,value:qc(s),writable:!0})}:Qt;function fb(r){return la(Di(r))}function bn(r,s,l){var f=-1,g=r.length;s<0&&(s=-s>g?0:g+s),l=l>g?g:l,l<0&&(l+=g),g=s>l?0:l-s>>>0,s>>>=0;for(var b=j(g);++f<g;)b[f]=r[f+s];return b}function hb(r,s){var l;return Or(r,function(f,g,b){return l=s(f,g,b),!l}),!!l}function Jo(r,s,l){var f=0,g=r==null?f:r.length;if(typeof s=="number"&&s===s&&g<=st){for(;f<g;){var b=f+g>>>1,x=r[b];x!==null&&!rn(x)&&(l?x<=s:x<s)?f=b+1:g=b}return g}return _c(r,s,Qt,l)}function _c(r,s,l,f){var g=0,b=r==null?0:r.length;if(b===0)return 0;s=l(s);for(var x=s!==s,C=s===null,L=rn(s),D=s===n;g<b;){var N=Zo((g+b)/2),F=l(r[N]),Q=F!==n,ae=F===null,pe=F===F,Ee=rn(F);if(x)var ge=f||pe;else D?ge=pe&&(f||Q):C?ge=pe&&Q&&(f||!ae):L?ge=pe&&Q&&!ae&&(f||!Ee):ae||Ee?ge=!1:ge=f?F<=s:F<s;ge?g=N+1:b=N}return Pt(b,ye)}function rh(r,s){for(var l=-1,f=r.length,g=0,b=[];++l<f;){var x=r[l],C=s?s(x):x;if(!l||!An(C,L)){var L=C;b[g++]=x===0?0:x}}return b}function ih(r){return typeof r=="number"?r:rn(r)?$e:+r}function nn(r){if(typeof r=="string")return r;if(ke(r))return lt(r,nn)+"";if(rn(r))return Bf?Bf.call(r):"";var s=r+"";return s=="0"&&1/r==-ve?"-0":s}function Lr(r,s,l){var f=-1,g=Oo,b=r.length,x=!0,C=[],L=C;if(l)x=!1,g=Gl;else if(b>=o){var D=s?null:kb(r);if(D)return Po(D);x=!1,g=Cs,L=new oi}else L=s?[]:C;e:for(;++f<b;){var N=r[f],F=s?s(N):N;if(N=l||N!==0?N:0,x&&F===F){for(var Q=L.length;Q--;)if(L[Q]===F)continue e;s&&L.push(F),C.push(N)}else g(L,F,l)||(L!==C&&L.push(F),C.push(N))}return C}function wc(r,s){return s=Pr(s,r),r=Oh(r,s),r==null||delete r[Wn(_n(s))]}function sh(r,s,l,f){return Ms(r,s,l(li(r,s)),f)}function ea(r,s,l,f){for(var g=r.length,b=f?g:-1;(f?b--:++b<g)&&s(r[b],b,r););return l?bn(r,f?0:b,f?b+1:g):bn(r,f?b+1:0,f?g:b)}function oh(r,s){var l=r;return l instanceof je&&(l=l.value()),Ql(s,function(f,g){return g.func.apply(g.thisArg,Ar([f],g.args))},l)}function xc(r,s,l){var f=r.length;if(f<2)return f?Lr(r[0]):[];for(var g=-1,b=j(f);++g<f;)for(var x=r[g],C=-1;++C<f;)C!=g&&(b[g]=Os(b[g]||x,r[C],s,l));return Lr(It(b,1),s,l)}function ah(r,s,l){for(var f=-1,g=r.length,b=s.length,x={};++f<g;){var C=f<b?s[f]:n;l(x,r[f],C)}return x}function $c(r){return mt(r)?r:[]}function kc(r){return typeof r=="function"?r:Qt}function Pr(r,s){return ke(r)?r:Lc(r,s)?[r]:Bh(Ge(r))}var pb=Ie;function Mr(r,s,l){var f=r.length;return l=l===n?f:l,!s&&l>=f?r:bn(r,s,l)}var lh=ty||function(r){return At.clearTimeout(r)};function ch(r,s){if(s)return r.slice();var l=r.length,f=If?If(l):new r.constructor(l);return r.copy(f),f}function Cc(r){var s=new r.constructor(r.byteLength);return new No(s).set(new No(r)),s}function gb(r,s){var l=s?Cc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function mb(r){var s=new r.constructor(r.source,Zd.exec(r));return s.lastIndex=r.lastIndex,s}function vb(r){return Is?Je(Is.call(r)):{}}function uh(r,s){var l=s?Cc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function dh(r,s){if(r!==s){var l=r!==n,f=r===null,g=r===r,b=rn(r),x=s!==n,C=s===null,L=s===s,D=rn(s);if(!C&&!D&&!b&&r>s||b&&x&&L&&!C&&!D||f&&x&&L||!l&&L||!g)return 1;if(!f&&!b&&!D&&r<s||D&&l&&g&&!f&&!b||C&&l&&g||!x&&g||!L)return-1}return 0}function yb(r,s,l){for(var f=-1,g=r.criteria,b=s.criteria,x=g.length,C=l.length;++f<x;){var L=dh(g[f],b[f]);if(L){if(f>=C)return L;var D=l[f];return L*(D=="desc"?-1:1)}}return r.index-s.index}function fh(r,s,l,f){for(var g=-1,b=r.length,x=l.length,C=-1,L=s.length,D=Ct(b-x,0),N=j(L+D),F=!f;++C<L;)N[C]=s[C];for(;++g<x;)(F||g<b)&&(N[l[g]]=r[g]);for(;D--;)N[C++]=r[g++];return N}function hh(r,s,l,f){for(var g=-1,b=r.length,x=-1,C=l.length,L=-1,D=s.length,N=Ct(b-C,0),F=j(N+D),Q=!f;++g<N;)F[g]=r[g];for(var ae=g;++L<D;)F[ae+L]=s[L];for(;++x<C;)(Q||g<b)&&(F[ae+l[x]]=r[g++]);return F}function Kt(r,s){var l=-1,f=r.length;for(s||(s=j(f));++l<f;)s[l]=r[l];return s}function Fn(r,s,l,f){var g=!l;l||(l={});for(var b=-1,x=s.length;++b<x;){var C=s[b],L=f?f(l[C],r[C],C,l,r):n;L===n&&(L=r[C]),g?rr(l,C,L):Rs(l,C,L)}return l}function bb(r,s){return Fn(r,Oc(r),s)}function _b(r,s){return Fn(r,Sh(r),s)}function ta(r,s){return function(l,f){var g=ke(l)?C2:zy,b=s?s():{};return g(l,r,fe(f,2),b)}}function Mi(r){return Ie(function(s,l){var f=-1,g=l.length,b=g>1?l[g-1]:n,x=g>2?l[2]:n;for(b=r.length>3&&typeof b=="function"?(g--,b):n,x&&Ht(l[0],l[1],x)&&(b=g<3?n:b,g=1),s=Je(s);++f<g;){var C=l[f];C&&r(s,C,f,b)}return s})}function ph(r,s){return function(l,f){if(l==null)return l;if(!Vt(l))return r(l,f);for(var g=l.length,b=s?g:-1,x=Je(l);(s?b--:++b<g)&&f(x[b],b,x)!==!1;);return l}}function gh(r){return function(s,l,f){for(var g=-1,b=Je(s),x=f(s),C=x.length;C--;){var L=x[r?C:++g];if(l(b[L],L,b)===!1)break}return s}}function wb(r,s,l){var f=s&A,g=Bs(r);function b(){var x=this&&this!==At&&this instanceof b?g:r;return x.apply(f?l:this,arguments)}return b}function mh(r){return function(s){s=Ge(s);var l=Ti(s)?En(s):n,f=l?l[0]:s.charAt(0),g=l?Mr(l,1).join(""):s.slice(1);return f[r]()+g}}function Bi(r){return function(s){return Ql(pp(hp(s).replace(d2,"")),r,"")}}function Bs(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Pi(r.prototype),f=r.apply(l,s);return ut(f)?f:l}}function xb(r,s,l){var f=Bs(r);function g(){for(var b=arguments.length,x=j(b),C=b,L=ji(g);C--;)x[C]=arguments[C];var D=b<3&&x[0]!==L&&x[b-1]!==L?[]:Ir(x,L);if(b-=D.length,b<l)return wh(r,s,na,g.placeholder,n,x,D,n,n,l-b);var N=this&&this!==At&&this instanceof g?f:r;return en(N,this,x)}return g}function vh(r){return function(s,l,f){var g=Je(s);if(!Vt(s)){var b=fe(l,3);s=Et(s),l=function(C){return b(g[C],C,g)}}var x=r(s,l,f);return x>-1?g[b?s[x]:x]:n}}function yh(r){return sr(function(s){var l=s.length,f=l,g=vn.prototype.thru;for(r&&s.reverse();f--;){var b=s[f];if(typeof b!="function")throw new mn(c);if(g&&!x&&oa(b)=="wrapper")var x=new vn([],!0)}for(f=x?f:l;++f<l;){b=s[f];var C=oa(b),L=C=="wrapper"?Ic(b):n;L&&Pc(L[0])&&L[1]==(H|B|T|W)&&!L[4].length&&L[9]==1?x=x[oa(L[0])].apply(x,L[3]):x=b.length==1&&Pc(b)?x[C]():x.thru(b)}return function(){var D=arguments,N=D[0];if(x&&D.length==1&&ke(N))return x.plant(N).value();for(var F=0,Q=l?s[F].apply(this,D):N;++F<l;)Q=s[F].call(this,Q);return Q}})}function na(r,s,l,f,g,b,x,C,L,D){var N=s&H,F=s&A,Q=s&k,ae=s&(B|E),pe=s&ie,Ee=Q?n:Bs(r);function ge(){for(var Me=arguments.length,De=j(Me),sn=Me;sn--;)De[sn]=arguments[sn];if(ae)var zt=ji(ge),on=P2(De,zt);if(f&&(De=fh(De,f,g,ae)),b&&(De=hh(De,b,x,ae)),Me-=on,ae&&Me<D){var vt=Ir(De,zt);return wh(r,s,na,ge.placeholder,l,De,vt,C,L,D-Me)}var In=F?l:this,cr=Q?In[r]:r;return Me=De.length,C?De=zb(De,C):pe&&Me>1&&De.reverse(),N&&L<Me&&(De.length=L),this&&this!==At&&this instanceof ge&&(cr=Ee||Bs(cr)),cr.apply(In,De)}return ge}function bh(r,s){return function(l,f){return Qy(l,r,s(f),{})}}function ra(r,s){return function(l,f){var g;if(l===n&&f===n)return s;if(l!==n&&(g=l),f!==n){if(g===n)return f;typeof l=="string"||typeof f=="string"?(l=nn(l),f=nn(f)):(l=ih(l),f=ih(f)),g=r(l,f)}return g}}function Sc(r){return sr(function(s){return s=lt(s,tn(fe())),Ie(function(l){var f=this;return r(s,function(g){return en(g,f,l)})})})}function ia(r,s){s=s===n?" ":nn(s);var l=s.length;if(l<2)return l?bc(s,r):s;var f=bc(s,Wo(r/Ai(s)));return Ti(s)?Mr(En(f),0,r).join(""):f.slice(0,r)}function $b(r,s,l,f){var g=s&A,b=Bs(r);function x(){for(var C=-1,L=arguments.length,D=-1,N=f.length,F=j(N+L),Q=this&&this!==At&&this instanceof x?b:r;++D<N;)F[D]=f[D];for(;L--;)F[D++]=arguments[++C];return en(Q,g?l:this,F)}return x}function _h(r){return function(s,l,f){return f&&typeof f!="number"&&Ht(s,l,f)&&(l=f=n),s=lr(s),l===n?(l=s,s=0):l=lr(l),f=f===n?s<l?1:-1:lr(f),lb(s,l,f,r)}}function sa(r){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=wn(s),l=wn(l)),r(s,l)}}function wh(r,s,l,f,g,b,x,C,L,D){var N=s&B,F=N?x:n,Q=N?n:x,ae=N?b:n,pe=N?n:b;s|=N?T:O,s&=~(N?O:T),s&P||(s&=~(A|k));var Ee=[r,s,g,ae,F,pe,Q,C,L,D],ge=l.apply(n,Ee);return Pc(r)&&Lh(ge,Ee),ge.placeholder=f,Ph(ge,r,s)}function Ec(r){var s=kt[r];return function(l,f){if(l=wn(l),f=f==null?0:Pt(Ce(f),292),f&&Pf(l)){var g=(Ge(l)+"e").split("e"),b=s(g[0]+"e"+(+g[1]+f));return g=(Ge(b)+"e").split("e"),+(g[0]+"e"+(+g[1]-f))}return s(l)}}var kb=Oi&&1/Po(new Oi([,-0]))[1]==ve?function(r){return new Oi(r)}:Gc;function xh(r){return function(s){var l=Mt(s);return l==ot?rc(s):l==ze?H2(s):L2(s,r(s))}}function ir(r,s,l,f,g,b,x,C){var L=s&k;if(!L&&typeof r!="function")throw new mn(c);var D=f?f.length:0;if(D||(s&=~(T|O),f=g=n),x=x===n?x:Ct(Ce(x),0),C=C===n?C:Ce(C),D-=g?g.length:0,s&O){var N=f,F=g;f=g=n}var Q=L?n:Ic(r),ae=[r,s,l,f,g,N,F,b,x,C];if(Q&&Db(ae,Q),r=ae[0],s=ae[1],l=ae[2],f=ae[3],g=ae[4],C=ae[9]=ae[9]===n?L?0:r.length:Ct(ae[9]-D,0),!C&&s&(B|E)&&(s&=~(B|E)),!s||s==A)var pe=wb(r,s,l);else s==B||s==E?pe=xb(r,s,C):(s==T||s==(A|T))&&!g.length?pe=$b(r,s,l,f):pe=na.apply(n,ae);var Ee=Q?nh:Lh;return Ph(Ee(pe,ae),r,s)}function $h(r,s,l,f){return r===n||An(r,Ri[l])&&!Qe.call(f,l)?s:r}function kh(r,s,l,f,g,b){return ut(r)&&ut(s)&&(b.set(s,r),Yo(r,s,n,kh,b),b.delete(s)),r}function Cb(r){return Ds(r)?n:r}function Ch(r,s,l,f,g,b){var x=l&$,C=r.length,L=s.length;if(C!=L&&!(x&&L>C))return!1;var D=b.get(r),N=b.get(s);if(D&&N)return D==s&&N==r;var F=-1,Q=!0,ae=l&S?new oi:n;for(b.set(r,s),b.set(s,r);++F<C;){var pe=r[F],Ee=s[F];if(f)var ge=x?f(Ee,pe,F,s,r,b):f(pe,Ee,F,r,s,b);if(ge!==n){if(ge)continue;Q=!1;break}if(ae){if(!Xl(s,function(Me,De){if(!Cs(ae,De)&&(pe===Me||g(pe,Me,l,f,b)))return ae.push(De)})){Q=!1;break}}else if(!(pe===Ee||g(pe,Ee,l,f,b))){Q=!1;break}}return b.delete(r),b.delete(s),Q}function Sb(r,s,l,f,g,b,x){switch(l){case nt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Le:return!(r.byteLength!=s.byteLength||!b(new No(r),new No(s)));case ft:case ce:case qt:return An(+r,+s);case gt:return r.name==s.name&&r.message==s.message;case be:case at:return r==s+"";case ot:var C=rc;case ze:var L=f&$;if(C||(C=Po),r.size!=s.size&&!L)return!1;var D=x.get(r);if(D)return D==s;f|=S,x.set(r,s);var N=Ch(C(r),C(s),f,g,b,x);return x.delete(r),N;case St:if(Is)return Is.call(r)==Is.call(s)}return!1}function Eb(r,s,l,f,g,b){var x=l&$,C=Tc(r),L=C.length,D=Tc(s),N=D.length;if(L!=N&&!x)return!1;for(var F=L;F--;){var Q=C[F];if(!(x?Q in s:Qe.call(s,Q)))return!1}var ae=b.get(r),pe=b.get(s);if(ae&&pe)return ae==s&&pe==r;var Ee=!0;b.set(r,s),b.set(s,r);for(var ge=x;++F<L;){Q=C[F];var Me=r[Q],De=s[Q];if(f)var sn=x?f(De,Me,Q,s,r,b):f(Me,De,Q,r,s,b);if(!(sn===n?Me===De||g(Me,De,l,f,b):sn)){Ee=!1;break}ge||(ge=Q=="constructor")}if(Ee&&!ge){var zt=r.constructor,on=s.constructor;zt!=on&&"constructor"in r&&"constructor"in s&&!(typeof zt=="function"&&zt instanceof zt&&typeof on=="function"&&on instanceof on)&&(Ee=!1)}return b.delete(r),b.delete(s),Ee}function sr(r){return Bc(Rh(r,n,Nh),r+"")}function Tc(r){return Zf(r,Et,Oc)}function Ac(r){return Zf(r,Gt,Sh)}var Ic=qo?function(r){return qo.get(r)}:Gc;function oa(r){for(var s=r.name+"",l=Li[s],f=Qe.call(Li,s)?l.length:0;f--;){var g=l[f],b=g.func;if(b==null||b==r)return g.name}return s}function ji(r){var s=Qe.call(y,"placeholder")?y:r;return s.placeholder}function fe(){var r=y.iteratee||Kc;return r=r===Kc?Vf:r,arguments.length?r(arguments[0],arguments[1]):r}function aa(r,s){var l=r.__data__;return Mb(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Rc(r){for(var s=Et(r),l=s.length;l--;){var f=s[l],g=r[f];s[l]=[f,g,Ah(g)]}return s}function ci(r,s){var l=U2(r,s);return Kf(l)?l:n}function Tb(r){var s=Qe.call(r,ii),l=r[ii];try{r[ii]=n;var f=!0}catch{}var g=Uo.call(r);return f&&(s?r[ii]=l:delete r[ii]),g}var Oc=sc?function(r){return r==null?[]:(r=Je(r),Tr(sc(r),function(s){return Of.call(r,s)}))}:Qc,Sh=sc?function(r){for(var s=[];r;)Ar(s,Oc(r)),r=Ho(r);return s}:Qc,Mt=Nt;(oc&&Mt(new oc(new ArrayBuffer(1)))!=nt||Es&&Mt(new Es)!=ot||ac&&Mt(ac.resolve())!=Dt||Oi&&Mt(new Oi)!=ze||Ts&&Mt(new Ts)!=ue)&&(Mt=function(r){var s=Nt(r),l=s==ht?r.constructor:n,f=l?ui(l):"";if(f)switch(f){case uy:return nt;case dy:return ot;case fy:return Dt;case hy:return ze;case py:return ue}return s});function Ab(r,s,l){for(var f=-1,g=l.length;++f<g;){var b=l[f],x=b.size;switch(b.type){case"drop":r+=x;break;case"dropRight":s-=x;break;case"take":s=Pt(s,r+x);break;case"takeRight":r=Ct(r,s-x);break}}return{start:r,end:s}}function Ib(r){var s=r.match(Bv);return s?s[1].split(jv):[]}function Eh(r,s,l){s=Pr(s,r);for(var f=-1,g=s.length,b=!1;++f<g;){var x=Wn(s[f]);if(!(b=r!=null&&l(r,x)))break;r=r[x]}return b||++f!=g?b:(g=r==null?0:r.length,!!g&&pa(g)&&or(x,g)&&(ke(r)||di(r)))}function Rb(r){var s=r.length,l=new r.constructor(s);return s&&typeof r[0]=="string"&&Qe.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function Th(r){return typeof r.constructor=="function"&&!js(r)?Pi(Ho(r)):{}}function Ob(r,s,l){var f=r.constructor;switch(s){case Le:return Cc(r);case ft:case ce:return new f(+r);case nt:return gb(r,l);case Cn:case Sn:case hn:case Er:case $i:case ki:case Ci:case Ul:case Dl:return uh(r,l);case ot:return new f;case qt:case at:return new f(r);case be:return mb(r);case ze:return new f;case St:return vb(r)}}function Lb(r,s){var l=s.length;if(!l)return r;var f=l-1;return s[f]=(l>1?"& ":"")+s[f],s=s.join(l>2?", ":" "),r.replace(Mv,`{
/* [wrapped with `+s+`] */
`)}function Pb(r){return ke(r)||di(r)||!!(Lf&&r&&r[Lf])}function or(r,s){var l=typeof r;return s=s??G,!!s&&(l=="number"||l!="symbol"&&qv.test(r))&&r>-1&&r%1==0&&r<s}function Ht(r,s,l){if(!ut(l))return!1;var f=typeof s;return(f=="number"?Vt(l)&&or(s,l.length):f=="string"&&s in l)?An(l[s],r):!1}function Lc(r,s){if(ke(r))return!1;var l=typeof r;return l=="number"||l=="symbol"||l=="boolean"||r==null||rn(r)?!0:Rv.test(r)||!Iv.test(r)||s!=null&&r in Je(s)}function Mb(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Pc(r){var s=oa(r),l=y[s];if(typeof l!="function"||!(s in je.prototype))return!1;if(r===l)return!0;var f=Ic(l);return!!f&&r===f[0]}function Bb(r){return!!Af&&Af in r}var jb=Bo?ar:Xc;function js(r){var s=r&&r.constructor,l=typeof s=="function"&&s.prototype||Ri;return r===l}function Ah(r){return r===r&&!ut(r)}function Ih(r,s){return function(l){return l==null?!1:l[r]===s&&(s!==n||r in Je(l))}}function Ub(r){var s=fa(r,function(f){return l.size===p&&l.clear(),f}),l=s.cache;return s}function Db(r,s){var l=r[1],f=s[1],g=l|f,b=g<(A|k|H),x=f==H&&l==B||f==H&&l==W&&r[7].length<=s[8]||f==(H|W)&&s[7].length<=s[8]&&l==B;if(!(b||x))return r;f&A&&(r[2]=s[2],g|=l&A?0:P);var C=s[3];if(C){var L=r[3];r[3]=L?fh(L,C,s[4]):C,r[4]=L?Ir(r[3],h):s[4]}return C=s[5],C&&(L=r[5],r[5]=L?hh(L,C,s[6]):C,r[6]=L?Ir(r[5],h):s[6]),C=s[7],C&&(r[7]=C),f&H&&(r[8]=r[8]==null?s[8]:Pt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=g,r}function Nb(r){var s=[];if(r!=null)for(var l in Je(r))s.push(l);return s}function Hb(r){return Uo.call(r)}function Rh(r,s,l){return s=Ct(s===n?r.length-1:s,0),function(){for(var f=arguments,g=-1,b=Ct(f.length-s,0),x=j(b);++g<b;)x[g]=f[s+g];g=-1;for(var C=j(s+1);++g<s;)C[g]=f[g];return C[s]=l(x),en(r,this,C)}}function Oh(r,s){return s.length<2?r:li(r,bn(s,0,-1))}function zb(r,s){for(var l=r.length,f=Pt(s.length,l),g=Kt(r);f--;){var b=s[f];r[f]=or(b,l)?g[b]:n}return r}function Mc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Lh=Mh(nh),Us=ry||function(r,s){return At.setTimeout(r,s)},Bc=Mh(db);function Ph(r,s,l){var f=s+"";return Bc(r,Lb(f,Fb(Ib(f),l)))}function Mh(r){var s=0,l=0;return function(){var f=ay(),g=Y-(f-l);if(l=f,g>0){if(++s>=Z)return arguments[0]}else s=0;return r.apply(n,arguments)}}function la(r,s){var l=-1,f=r.length,g=f-1;for(s=s===n?f:s;++l<s;){var b=yc(l,g),x=r[b];r[b]=r[l],r[l]=x}return r.length=s,r}var Bh=Ub(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Ov,function(l,f,g,b){s.push(g?b.replace(Nv,"$1"):f||l)}),s});function Wn(r){if(typeof r=="string"||rn(r))return r;var s=r+"";return s=="0"&&1/r==-ve?"-0":s}function ui(r){if(r!=null){try{return jo.call(r)}catch{}try{return r+""}catch{}}return""}function Fb(r,s){return gn(Ot,function(l){var f="_."+l[0];s&l[1]&&!Oo(r,f)&&r.push(f)}),r.sort()}function jh(r){if(r instanceof je)return r.clone();var s=new vn(r.__wrapped__,r.__chain__);return s.__actions__=Kt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function Wb(r,s,l){(l?Ht(r,s,l):s===n)?s=1:s=Ct(Ce(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var g=0,b=0,x=j(Wo(f/s));g<f;)x[b++]=bn(r,g,g+=s);return x}function Zb(r){for(var s=-1,l=r==null?0:r.length,f=0,g=[];++s<l;){var b=r[s];b&&(g[f++]=b)}return g}function qb(){var r=arguments.length;if(!r)return[];for(var s=j(r-1),l=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Ar(ke(l)?Kt(l):[l],It(s,1))}var Kb=Ie(function(r,s){return mt(r)?Os(r,It(s,1,mt,!0)):[]}),Vb=Ie(function(r,s){var l=_n(s);return mt(l)&&(l=n),mt(r)?Os(r,It(s,1,mt,!0),fe(l,2)):[]}),Gb=Ie(function(r,s){var l=_n(s);return mt(l)&&(l=n),mt(r)?Os(r,It(s,1,mt,!0),n,l):[]});function Qb(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),bn(r,s<0?0:s,f)):[]}function Xb(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),s=f-s,bn(r,0,s<0?0:s)):[]}function Yb(r,s){return r&&r.length?ea(r,fe(s,3),!0,!0):[]}function Jb(r,s){return r&&r.length?ea(r,fe(s,3),!0):[]}function e_(r,s,l,f){var g=r==null?0:r.length;return g?(l&&typeof l!="number"&&Ht(r,s,l)&&(l=0,f=g),qy(r,s,l,f)):[]}function Uh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=l==null?0:Ce(l);return g<0&&(g=Ct(f+g,0)),Lo(r,fe(s,3),g)}function Dh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=f-1;return l!==n&&(g=Ce(l),g=l<0?Ct(f+g,0):Pt(g,f-1)),Lo(r,fe(s,3),g,!0)}function Nh(r){var s=r==null?0:r.length;return s?It(r,1):[]}function t_(r){var s=r==null?0:r.length;return s?It(r,ve):[]}function n_(r,s){var l=r==null?0:r.length;return l?(s=s===n?1:Ce(s),It(r,s)):[]}function r_(r){for(var s=-1,l=r==null?0:r.length,f={};++s<l;){var g=r[s];f[g[0]]=g[1]}return f}function Hh(r){return r&&r.length?r[0]:n}function i_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=l==null?0:Ce(l);return g<0&&(g=Ct(f+g,0)),Ei(r,s,g)}function s_(r){var s=r==null?0:r.length;return s?bn(r,0,-1):[]}var o_=Ie(function(r){var s=lt(r,$c);return s.length&&s[0]===r[0]?hc(s):[]}),a_=Ie(function(r){var s=_n(r),l=lt(r,$c);return s===_n(l)?s=n:l.pop(),l.length&&l[0]===r[0]?hc(l,fe(s,2)):[]}),l_=Ie(function(r){var s=_n(r),l=lt(r,$c);return s=typeof s=="function"?s:n,s&&l.pop(),l.length&&l[0]===r[0]?hc(l,n,s):[]});function c_(r,s){return r==null?"":sy.call(r,s)}function _n(r){var s=r==null?0:r.length;return s?r[s-1]:n}function u_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=f;return l!==n&&(g=Ce(l),g=g<0?Ct(f+g,0):Pt(g,f-1)),s===s?F2(r,s,g):Lo(r,wf,g,!0)}function d_(r,s){return r&&r.length?Yf(r,Ce(s)):n}var f_=Ie(zh);function zh(r,s){return r&&r.length&&s&&s.length?vc(r,s):r}function h_(r,s,l){return r&&r.length&&s&&s.length?vc(r,s,fe(l,2)):r}function p_(r,s,l){return r&&r.length&&s&&s.length?vc(r,s,n,l):r}var g_=sr(function(r,s){var l=r==null?0:r.length,f=cc(r,s);return th(r,lt(s,function(g){return or(g,l)?+g:g}).sort(dh)),f});function m_(r,s){var l=[];if(!(r&&r.length))return l;var f=-1,g=[],b=r.length;for(s=fe(s,3);++f<b;){var x=r[f];s(x,f,r)&&(l.push(x),g.push(f))}return th(r,g),l}function jc(r){return r==null?r:cy.call(r)}function v_(r,s,l){var f=r==null?0:r.length;return f?(l&&typeof l!="number"&&Ht(r,s,l)?(s=0,l=f):(s=s==null?0:Ce(s),l=l===n?f:Ce(l)),bn(r,s,l)):[]}function y_(r,s){return Jo(r,s)}function b_(r,s,l){return _c(r,s,fe(l,2))}function __(r,s){var l=r==null?0:r.length;if(l){var f=Jo(r,s);if(f<l&&An(r[f],s))return f}return-1}function w_(r,s){return Jo(r,s,!0)}function x_(r,s,l){return _c(r,s,fe(l,2),!0)}function $_(r,s){var l=r==null?0:r.length;if(l){var f=Jo(r,s,!0)-1;if(An(r[f],s))return f}return-1}function k_(r){return r&&r.length?rh(r):[]}function C_(r,s){return r&&r.length?rh(r,fe(s,2)):[]}function S_(r){var s=r==null?0:r.length;return s?bn(r,1,s):[]}function E_(r,s,l){return r&&r.length?(s=l||s===n?1:Ce(s),bn(r,0,s<0?0:s)):[]}function T_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),s=f-s,bn(r,s<0?0:s,f)):[]}function A_(r,s){return r&&r.length?ea(r,fe(s,3),!1,!0):[]}function I_(r,s){return r&&r.length?ea(r,fe(s,3)):[]}var R_=Ie(function(r){return Lr(It(r,1,mt,!0))}),O_=Ie(function(r){var s=_n(r);return mt(s)&&(s=n),Lr(It(r,1,mt,!0),fe(s,2))}),L_=Ie(function(r){var s=_n(r);return s=typeof s=="function"?s:n,Lr(It(r,1,mt,!0),n,s)});function P_(r){return r&&r.length?Lr(r):[]}function M_(r,s){return r&&r.length?Lr(r,fe(s,2)):[]}function B_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Lr(r,n,s):[]}function Uc(r){if(!(r&&r.length))return[];var s=0;return r=Tr(r,function(l){if(mt(l))return s=Ct(l.length,s),!0}),tc(s,function(l){return lt(r,Yl(l))})}function Fh(r,s){if(!(r&&r.length))return[];var l=Uc(r);return s==null?l:lt(l,function(f){return en(s,n,f)})}var j_=Ie(function(r,s){return mt(r)?Os(r,s):[]}),U_=Ie(function(r){return xc(Tr(r,mt))}),D_=Ie(function(r){var s=_n(r);return mt(s)&&(s=n),xc(Tr(r,mt),fe(s,2))}),N_=Ie(function(r){var s=_n(r);return s=typeof s=="function"?s:n,xc(Tr(r,mt),n,s)}),H_=Ie(Uc);function z_(r,s){return ah(r||[],s||[],Rs)}function F_(r,s){return ah(r||[],s||[],Ms)}var W_=Ie(function(r){var s=r.length,l=s>1?r[s-1]:n;return l=typeof l=="function"?(r.pop(),l):n,Fh(r,l)});function Wh(r){var s=y(r);return s.__chain__=!0,s}function Z_(r,s){return s(r),r}function ca(r,s){return s(r)}var q_=sr(function(r){var s=r.length,l=s?r[0]:0,f=this.__wrapped__,g=function(b){return cc(b,r)};return s>1||this.__actions__.length||!(f instanceof je)||!or(l)?this.thru(g):(f=f.slice(l,+l+(s?1:0)),f.__actions__.push({func:ca,args:[g],thisArg:n}),new vn(f,this.__chain__).thru(function(b){return s&&!b.length&&b.push(n),b}))});function K_(){return Wh(this)}function V_(){return new vn(this.value(),this.__chain__)}function G_(){this.__values__===n&&(this.__values__=ip(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function Q_(){return this}function X_(r){for(var s,l=this;l instanceof Vo;){var f=jh(l);f.__index__=0,f.__values__=n,s?g.__wrapped__=f:s=f;var g=f;l=l.__wrapped__}return g.__wrapped__=r,s}function Y_(){var r=this.__wrapped__;if(r instanceof je){var s=r;return this.__actions__.length&&(s=new je(this)),s=s.reverse(),s.__actions__.push({func:ca,args:[jc],thisArg:n}),new vn(s,this.__chain__)}return this.thru(jc)}function J_(){return oh(this.__wrapped__,this.__actions__)}var ew=ta(function(r,s,l){Qe.call(r,l)?++r[l]:rr(r,l,1)});function tw(r,s,l){var f=ke(r)?bf:Zy;return l&&Ht(r,s,l)&&(s=n),f(r,fe(s,3))}function nw(r,s){var l=ke(r)?Tr:Ff;return l(r,fe(s,3))}var rw=vh(Uh),iw=vh(Dh);function sw(r,s){return It(ua(r,s),1)}function ow(r,s){return It(ua(r,s),ve)}function aw(r,s,l){return l=l===n?1:Ce(l),It(ua(r,s),l)}function Zh(r,s){var l=ke(r)?gn:Or;return l(r,fe(s,3))}function qh(r,s){var l=ke(r)?S2:zf;return l(r,fe(s,3))}var lw=ta(function(r,s,l){Qe.call(r,l)?r[l].push(s):rr(r,l,[s])});function cw(r,s,l,f){r=Vt(r)?r:Di(r),l=l&&!f?Ce(l):0;var g=r.length;return l<0&&(l=Ct(g+l,0)),ga(r)?l<=g&&r.indexOf(s,l)>-1:!!g&&Ei(r,s,l)>-1}var uw=Ie(function(r,s,l){var f=-1,g=typeof s=="function",b=Vt(r)?j(r.length):[];return Or(r,function(x){b[++f]=g?en(s,x,l):Ls(x,s,l)}),b}),dw=ta(function(r,s,l){rr(r,l,s)});function ua(r,s){var l=ke(r)?lt:Gf;return l(r,fe(s,3))}function fw(r,s,l,f){return r==null?[]:(ke(s)||(s=s==null?[]:[s]),l=f?n:l,ke(l)||(l=l==null?[]:[l]),Jf(r,s,l))}var hw=ta(function(r,s,l){r[l?0:1].push(s)},function(){return[[],[]]});function pw(r,s,l){var f=ke(r)?Ql:$f,g=arguments.length<3;return f(r,fe(s,4),l,g,Or)}function gw(r,s,l){var f=ke(r)?E2:$f,g=arguments.length<3;return f(r,fe(s,4),l,g,zf)}function mw(r,s){var l=ke(r)?Tr:Ff;return l(r,ha(fe(s,3)))}function vw(r){var s=ke(r)?Uf:cb;return s(r)}function yw(r,s,l){(l?Ht(r,s,l):s===n)?s=1:s=Ce(s);var f=ke(r)?Ny:ub;return f(r,s)}function bw(r){var s=ke(r)?Hy:fb;return s(r)}function _w(r){if(r==null)return 0;if(Vt(r))return ga(r)?Ai(r):r.length;var s=Mt(r);return s==ot||s==ze?r.size:gc(r).length}function ww(r,s,l){var f=ke(r)?Xl:hb;return l&&Ht(r,s,l)&&(s=n),f(r,fe(s,3))}var xw=Ie(function(r,s){if(r==null)return[];var l=s.length;return l>1&&Ht(r,s[0],s[1])?s=[]:l>2&&Ht(s[0],s[1],s[2])&&(s=[s[0]]),Jf(r,It(s,1),[])}),da=ny||function(){return At.Date.now()};function $w(r,s){if(typeof s!="function")throw new mn(c);return r=Ce(r),function(){if(--r<1)return s.apply(this,arguments)}}function Kh(r,s,l){return s=l?n:s,s=r&&s==null?r.length:s,ir(r,H,n,n,n,n,s)}function Vh(r,s){var l;if(typeof s!="function")throw new mn(c);return r=Ce(r),function(){return--r>0&&(l=s.apply(this,arguments)),r<=1&&(s=n),l}}var Dc=Ie(function(r,s,l){var f=A;if(l.length){var g=Ir(l,ji(Dc));f|=T}return ir(r,f,s,l,g)}),Gh=Ie(function(r,s,l){var f=A|k;if(l.length){var g=Ir(l,ji(Gh));f|=T}return ir(s,f,r,l,g)});function Qh(r,s,l){s=l?n:s;var f=ir(r,B,n,n,n,n,n,s);return f.placeholder=Qh.placeholder,f}function Xh(r,s,l){s=l?n:s;var f=ir(r,E,n,n,n,n,n,s);return f.placeholder=Xh.placeholder,f}function Yh(r,s,l){var f,g,b,x,C,L,D=0,N=!1,F=!1,Q=!0;if(typeof r!="function")throw new mn(c);s=wn(s)||0,ut(l)&&(N=!!l.leading,F="maxWait"in l,b=F?Ct(wn(l.maxWait)||0,s):b,Q="trailing"in l?!!l.trailing:Q);function ae(vt){var In=f,cr=g;return f=g=n,D=vt,x=r.apply(cr,In),x}function pe(vt){return D=vt,C=Us(Me,s),N?ae(vt):x}function Ee(vt){var In=vt-L,cr=vt-D,vp=s-In;return F?Pt(vp,b-cr):vp}function ge(vt){var In=vt-L,cr=vt-D;return L===n||In>=s||In<0||F&&cr>=b}function Me(){var vt=da();if(ge(vt))return De(vt);C=Us(Me,Ee(vt))}function De(vt){return C=n,Q&&f?ae(vt):(f=g=n,x)}function sn(){C!==n&&lh(C),D=0,f=L=g=C=n}function zt(){return C===n?x:De(da())}function on(){var vt=da(),In=ge(vt);if(f=arguments,g=this,L=vt,In){if(C===n)return pe(L);if(F)return lh(C),C=Us(Me,s),ae(L)}return C===n&&(C=Us(Me,s)),x}return on.cancel=sn,on.flush=zt,on}var kw=Ie(function(r,s){return Hf(r,1,s)}),Cw=Ie(function(r,s,l){return Hf(r,wn(s)||0,l)});function Sw(r){return ir(r,ie)}function fa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new mn(c);var l=function(){var f=arguments,g=s?s.apply(this,f):f[0],b=l.cache;if(b.has(g))return b.get(g);var x=r.apply(this,f);return l.cache=b.set(g,x)||b,x};return l.cache=new(fa.Cache||nr),l}fa.Cache=nr;function ha(r){if(typeof r!="function")throw new mn(c);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Ew(r){return Vh(2,r)}var Tw=pb(function(r,s){s=s.length==1&&ke(s[0])?lt(s[0],tn(fe())):lt(It(s,1),tn(fe()));var l=s.length;return Ie(function(f){for(var g=-1,b=Pt(f.length,l);++g<b;)f[g]=s[g].call(this,f[g]);return en(r,this,f)})}),Nc=Ie(function(r,s){var l=Ir(s,ji(Nc));return ir(r,T,n,s,l)}),Jh=Ie(function(r,s){var l=Ir(s,ji(Jh));return ir(r,O,n,s,l)}),Aw=sr(function(r,s){return ir(r,W,n,n,n,s)});function Iw(r,s){if(typeof r!="function")throw new mn(c);return s=s===n?s:Ce(s),Ie(r,s)}function Rw(r,s){if(typeof r!="function")throw new mn(c);return s=s==null?0:Ct(Ce(s),0),Ie(function(l){var f=l[s],g=Mr(l,0,s);return f&&Ar(g,f),en(r,this,g)})}function Ow(r,s,l){var f=!0,g=!0;if(typeof r!="function")throw new mn(c);return ut(l)&&(f="leading"in l?!!l.leading:f,g="trailing"in l?!!l.trailing:g),Yh(r,s,{leading:f,maxWait:s,trailing:g})}function Lw(r){return Kh(r,1)}function Pw(r,s){return Nc(kc(s),r)}function Mw(){if(!arguments.length)return[];var r=arguments[0];return ke(r)?r:[r]}function Bw(r){return yn(r,w)}function jw(r,s){return s=typeof s=="function"?s:n,yn(r,w,s)}function Uw(r){return yn(r,m|w)}function Dw(r,s){return s=typeof s=="function"?s:n,yn(r,m|w,s)}function Nw(r,s){return s==null||Nf(r,s,Et(s))}function An(r,s){return r===s||r!==r&&s!==s}var Hw=sa(fc),zw=sa(function(r,s){return r>=s}),di=qf(function(){return arguments}())?qf:function(r){return pt(r)&&Qe.call(r,"callee")&&!Of.call(r,"callee")},ke=j.isArray,Fw=hf?tn(hf):Xy;function Vt(r){return r!=null&&pa(r.length)&&!ar(r)}function mt(r){return pt(r)&&Vt(r)}function Ww(r){return r===!0||r===!1||pt(r)&&Nt(r)==ft}var Br=iy||Xc,Zw=pf?tn(pf):Yy;function qw(r){return pt(r)&&r.nodeType===1&&!Ds(r)}function Kw(r){if(r==null)return!0;if(Vt(r)&&(ke(r)||typeof r=="string"||typeof r.splice=="function"||Br(r)||Ui(r)||di(r)))return!r.length;var s=Mt(r);if(s==ot||s==ze)return!r.size;if(js(r))return!gc(r).length;for(var l in r)if(Qe.call(r,l))return!1;return!0}function Vw(r,s){return Ps(r,s)}function Gw(r,s,l){l=typeof l=="function"?l:n;var f=l?l(r,s):n;return f===n?Ps(r,s,n,l):!!f}function Hc(r){if(!pt(r))return!1;var s=Nt(r);return s==gt||s==wt||typeof r.message=="string"&&typeof r.name=="string"&&!Ds(r)}function Qw(r){return typeof r=="number"&&Pf(r)}function ar(r){if(!ut(r))return!1;var s=Nt(r);return s==Lt||s==Hn||s==V||s==er}function ep(r){return typeof r=="number"&&r==Ce(r)}function pa(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=G}function ut(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function pt(r){return r!=null&&typeof r=="object"}var tp=gf?tn(gf):eb;function Xw(r,s){return r===s||pc(r,s,Rc(s))}function Yw(r,s,l){return l=typeof l=="function"?l:n,pc(r,s,Rc(s),l)}function Jw(r){return np(r)&&r!=+r}function e3(r){if(jb(r))throw new _e(a);return Kf(r)}function t3(r){return r===null}function n3(r){return r==null}function np(r){return typeof r=="number"||pt(r)&&Nt(r)==qt}function Ds(r){if(!pt(r)||Nt(r)!=ht)return!1;var s=Ho(r);if(s===null)return!0;var l=Qe.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&jo.call(l)==Y2}var zc=mf?tn(mf):tb;function r3(r){return ep(r)&&r>=-G&&r<=G}var rp=vf?tn(vf):nb;function ga(r){return typeof r=="string"||!ke(r)&&pt(r)&&Nt(r)==at}function rn(r){return typeof r=="symbol"||pt(r)&&Nt(r)==St}var Ui=yf?tn(yf):rb;function i3(r){return r===n}function s3(r){return pt(r)&&Mt(r)==ue}function o3(r){return pt(r)&&Nt(r)==fn}var a3=sa(mc),l3=sa(function(r,s){return r<=s});function ip(r){if(!r)return[];if(Vt(r))return ga(r)?En(r):Kt(r);if(Ss&&r[Ss])return N2(r[Ss]());var s=Mt(r),l=s==ot?rc:s==ze?Po:Di;return l(r)}function lr(r){if(!r)return r===0?r:0;if(r=wn(r),r===ve||r===-ve){var s=r<0?-1:1;return s*Ae}return r===r?r:0}function Ce(r){var s=lr(r),l=s%1;return s===s?l?s-l:s:0}function sp(r){return r?ai(Ce(r),0,ee):0}function wn(r){if(typeof r=="number")return r;if(rn(r))return $e;if(ut(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=ut(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=kf(r);var l=Fv.test(r);return l||Zv.test(r)?$2(r.slice(2),l?2:8):zv.test(r)?$e:+r}function op(r){return Fn(r,Gt(r))}function c3(r){return r?ai(Ce(r),-G,G):r===0?r:0}function Ge(r){return r==null?"":nn(r)}var u3=Mi(function(r,s){if(js(s)||Vt(s)){Fn(s,Et(s),r);return}for(var l in s)Qe.call(s,l)&&Rs(r,l,s[l])}),ap=Mi(function(r,s){Fn(s,Gt(s),r)}),ma=Mi(function(r,s,l,f){Fn(s,Gt(s),r,f)}),d3=Mi(function(r,s,l,f){Fn(s,Et(s),r,f)}),f3=sr(cc);function h3(r,s){var l=Pi(r);return s==null?l:Df(l,s)}var p3=Ie(function(r,s){r=Je(r);var l=-1,f=s.length,g=f>2?s[2]:n;for(g&&Ht(s[0],s[1],g)&&(f=1);++l<f;)for(var b=s[l],x=Gt(b),C=-1,L=x.length;++C<L;){var D=x[C],N=r[D];(N===n||An(N,Ri[D])&&!Qe.call(r,D))&&(r[D]=b[D])}return r}),g3=Ie(function(r){return r.push(n,kh),en(lp,n,r)});function m3(r,s){return _f(r,fe(s,3),zn)}function v3(r,s){return _f(r,fe(s,3),dc)}function y3(r,s){return r==null?r:uc(r,fe(s,3),Gt)}function b3(r,s){return r==null?r:Wf(r,fe(s,3),Gt)}function _3(r,s){return r&&zn(r,fe(s,3))}function w3(r,s){return r&&dc(r,fe(s,3))}function x3(r){return r==null?[]:Xo(r,Et(r))}function $3(r){return r==null?[]:Xo(r,Gt(r))}function Fc(r,s,l){var f=r==null?n:li(r,s);return f===n?l:f}function k3(r,s){return r!=null&&Eh(r,s,Ky)}function Wc(r,s){return r!=null&&Eh(r,s,Vy)}var C3=bh(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Uo.call(s)),r[s]=l},qc(Qt)),S3=bh(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Uo.call(s)),Qe.call(r,s)?r[s].push(l):r[s]=[l]},fe),E3=Ie(Ls);function Et(r){return Vt(r)?jf(r):gc(r)}function Gt(r){return Vt(r)?jf(r,!0):ib(r)}function T3(r,s){var l={};return s=fe(s,3),zn(r,function(f,g,b){rr(l,s(f,g,b),f)}),l}function A3(r,s){var l={};return s=fe(s,3),zn(r,function(f,g,b){rr(l,g,s(f,g,b))}),l}var I3=Mi(function(r,s,l){Yo(r,s,l)}),lp=Mi(function(r,s,l,f){Yo(r,s,l,f)}),R3=sr(function(r,s){var l={};if(r==null)return l;var f=!1;s=lt(s,function(b){return b=Pr(b,r),f||(f=b.length>1),b}),Fn(r,Ac(r),l),f&&(l=yn(l,m|v|w,Cb));for(var g=s.length;g--;)wc(l,s[g]);return l});function O3(r,s){return cp(r,ha(fe(s)))}var L3=sr(function(r,s){return r==null?{}:ob(r,s)});function cp(r,s){if(r==null)return{};var l=lt(Ac(r),function(f){return[f]});return s=fe(s),eh(r,l,function(f,g){return s(f,g[0])})}function P3(r,s,l){s=Pr(s,r);var f=-1,g=s.length;for(g||(g=1,r=n);++f<g;){var b=r==null?n:r[Wn(s[f])];b===n&&(f=g,b=l),r=ar(b)?b.call(r):b}return r}function M3(r,s,l){return r==null?r:Ms(r,s,l)}function B3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:Ms(r,s,l,f)}var up=xh(Et),dp=xh(Gt);function j3(r,s,l){var f=ke(r),g=f||Br(r)||Ui(r);if(s=fe(s,4),l==null){var b=r&&r.constructor;g?l=f?new b:[]:ut(r)?l=ar(b)?Pi(Ho(r)):{}:l={}}return(g?gn:zn)(r,function(x,C,L){return s(l,x,C,L)}),l}function U3(r,s){return r==null?!0:wc(r,s)}function D3(r,s,l){return r==null?r:sh(r,s,kc(l))}function N3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:sh(r,s,kc(l),f)}function Di(r){return r==null?[]:nc(r,Et(r))}function H3(r){return r==null?[]:nc(r,Gt(r))}function z3(r,s,l){return l===n&&(l=s,s=n),l!==n&&(l=wn(l),l=l===l?l:0),s!==n&&(s=wn(s),s=s===s?s:0),ai(wn(r),s,l)}function F3(r,s,l){return s=lr(s),l===n?(l=s,s=0):l=lr(l),r=wn(r),Gy(r,s,l)}function W3(r,s,l){if(l&&typeof l!="boolean"&&Ht(r,s,l)&&(s=l=n),l===n&&(typeof s=="boolean"?(l=s,s=n):typeof r=="boolean"&&(l=r,r=n)),r===n&&s===n?(r=0,s=1):(r=lr(r),s===n?(s=r,r=0):s=lr(s)),r>s){var f=r;r=s,s=f}if(l||r%1||s%1){var g=Mf();return Pt(r+g*(s-r+x2("1e-"+((g+"").length-1))),s)}return yc(r,s)}var Z3=Bi(function(r,s,l){return s=s.toLowerCase(),r+(l?fp(s):s)});function fp(r){return Zc(Ge(r).toLowerCase())}function hp(r){return r=Ge(r),r&&r.replace(Kv,M2).replace(f2,"")}function q3(r,s,l){r=Ge(r),s=nn(s);var f=r.length;l=l===n?f:ai(Ce(l),0,f);var g=l;return l-=s.length,l>=0&&r.slice(l,g)==s}function K3(r){return r=Ge(r),r&&Ev.test(r)?r.replace(Fd,B2):r}function V3(r){return r=Ge(r),r&&Lv.test(r)?r.replace(Nl,"\\$&"):r}var G3=Bi(function(r,s,l){return r+(l?"-":"")+s.toLowerCase()}),Q3=Bi(function(r,s,l){return r+(l?" ":"")+s.toLowerCase()}),X3=mh("toLowerCase");function Y3(r,s,l){r=Ge(r),s=Ce(s);var f=s?Ai(r):0;if(!s||f>=s)return r;var g=(s-f)/2;return ia(Zo(g),l)+r+ia(Wo(g),l)}function J3(r,s,l){r=Ge(r),s=Ce(s);var f=s?Ai(r):0;return s&&f<s?r+ia(s-f,l):r}function ex(r,s,l){r=Ge(r),s=Ce(s);var f=s?Ai(r):0;return s&&f<s?ia(s-f,l)+r:r}function tx(r,s,l){return l||s==null?s=0:s&&(s=+s),ly(Ge(r).replace(Hl,""),s||0)}function nx(r,s,l){return(l?Ht(r,s,l):s===n)?s=1:s=Ce(s),bc(Ge(r),s)}function rx(){var r=arguments,s=Ge(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var ix=Bi(function(r,s,l){return r+(l?"_":"")+s.toLowerCase()});function sx(r,s,l){return l&&typeof l!="number"&&Ht(r,s,l)&&(s=l=n),l=l===n?ee:l>>>0,l?(r=Ge(r),r&&(typeof s=="string"||s!=null&&!zc(s))&&(s=nn(s),!s&&Ti(r))?Mr(En(r),0,l):r.split(s,l)):[]}var ox=Bi(function(r,s,l){return r+(l?" ":"")+Zc(s)});function ax(r,s,l){return r=Ge(r),l=l==null?0:ai(Ce(l),0,r.length),s=nn(s),r.slice(l,l+s.length)==s}function lx(r,s,l){var f=y.templateSettings;l&&Ht(r,s,l)&&(s=n),r=Ge(r),s=ma({},s,f,$h);var g=ma({},s.imports,f.imports,$h),b=Et(g),x=nc(g,b),C,L,D=0,N=s.interpolate||Ao,F="__p += '",Q=ic((s.escape||Ao).source+"|"+N.source+"|"+(N===Wd?Hv:Ao).source+"|"+(s.evaluate||Ao).source+"|$","g"),ae="//# sourceURL="+(Qe.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++v2+"]")+`
`;r.replace(Q,function(ge,Me,De,sn,zt,on){return De||(De=sn),F+=r.slice(D,on).replace(Vv,j2),Me&&(C=!0,F+=`' +
__e(`+Me+`) +
'`),zt&&(L=!0,F+=`';
`+zt+`;
__p += '`),De&&(F+=`' +
((__t = (`+De+`)) == null ? '' : __t) +
'`),D=on+ge.length,ge}),F+=`';
`;var pe=Qe.call(s,"variable")&&s.variable;if(!pe)F=`with (obj) {
`+F+`
}
`;else if(Dv.test(pe))throw new _e(u);F=(L?F.replace($v,""):F).replace(kv,"$1").replace(Cv,"$1;"),F="function("+(pe||"obj")+`) {
`+(pe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(C?", __e = _.escape":"")+(L?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+F+`return __p
}`;var Ee=gp(function(){return qe(b,ae+"return "+F).apply(n,x)});if(Ee.source=F,Hc(Ee))throw Ee;return Ee}function cx(r){return Ge(r).toLowerCase()}function ux(r){return Ge(r).toUpperCase()}function dx(r,s,l){if(r=Ge(r),r&&(l||s===n))return kf(r);if(!r||!(s=nn(s)))return r;var f=En(r),g=En(s),b=Cf(f,g),x=Sf(f,g)+1;return Mr(f,b,x).join("")}function fx(r,s,l){if(r=Ge(r),r&&(l||s===n))return r.slice(0,Tf(r)+1);if(!r||!(s=nn(s)))return r;var f=En(r),g=Sf(f,En(s))+1;return Mr(f,0,g).join("")}function hx(r,s,l){if(r=Ge(r),r&&(l||s===n))return r.replace(Hl,"");if(!r||!(s=nn(s)))return r;var f=En(r),g=Cf(f,En(s));return Mr(f,g).join("")}function px(r,s){var l=K,f=se;if(ut(s)){var g="separator"in s?s.separator:g;l="length"in s?Ce(s.length):l,f="omission"in s?nn(s.omission):f}r=Ge(r);var b=r.length;if(Ti(r)){var x=En(r);b=x.length}if(l>=b)return r;var C=l-Ai(f);if(C<1)return f;var L=x?Mr(x,0,C).join(""):r.slice(0,C);if(g===n)return L+f;if(x&&(C+=L.length-C),zc(g)){if(r.slice(C).search(g)){var D,N=L;for(g.global||(g=ic(g.source,Ge(Zd.exec(g))+"g")),g.lastIndex=0;D=g.exec(N);)var F=D.index;L=L.slice(0,F===n?C:F)}}else if(r.indexOf(nn(g),C)!=C){var Q=L.lastIndexOf(g);Q>-1&&(L=L.slice(0,Q))}return L+f}function gx(r){return r=Ge(r),r&&Sv.test(r)?r.replace(zd,W2):r}var mx=Bi(function(r,s,l){return r+(l?" ":"")+s.toUpperCase()}),Zc=mh("toUpperCase");function pp(r,s,l){return r=Ge(r),s=l?n:s,s===n?D2(r)?K2(r):I2(r):r.match(s)||[]}var gp=Ie(function(r,s){try{return en(r,n,s)}catch(l){return Hc(l)?l:new _e(l)}}),vx=sr(function(r,s){return gn(s,function(l){l=Wn(l),rr(r,l,Dc(r[l],r))}),r});function yx(r){var s=r==null?0:r.length,l=fe();return r=s?lt(r,function(f){if(typeof f[1]!="function")throw new mn(c);return[l(f[0]),f[1]]}):[],Ie(function(f){for(var g=-1;++g<s;){var b=r[g];if(en(b[0],this,f))return en(b[1],this,f)}})}function bx(r){return Wy(yn(r,m))}function qc(r){return function(){return r}}function _x(r,s){return r==null||r!==r?s:r}var wx=yh(),xx=yh(!0);function Qt(r){return r}function Kc(r){return Vf(typeof r=="function"?r:yn(r,m))}function $x(r){return Qf(yn(r,m))}function kx(r,s){return Xf(r,yn(s,m))}var Cx=Ie(function(r,s){return function(l){return Ls(l,r,s)}}),Sx=Ie(function(r,s){return function(l){return Ls(r,l,s)}});function Vc(r,s,l){var f=Et(s),g=Xo(s,f);l==null&&!(ut(s)&&(g.length||!f.length))&&(l=s,s=r,r=this,g=Xo(s,Et(s)));var b=!(ut(l)&&"chain"in l)||!!l.chain,x=ar(r);return gn(g,function(C){var L=s[C];r[C]=L,x&&(r.prototype[C]=function(){var D=this.__chain__;if(b||D){var N=r(this.__wrapped__),F=N.__actions__=Kt(this.__actions__);return F.push({func:L,args:arguments,thisArg:r}),N.__chain__=D,N}return L.apply(r,Ar([this.value()],arguments))})}),r}function Ex(){return At._===this&&(At._=J2),this}function Gc(){}function Tx(r){return r=Ce(r),Ie(function(s){return Yf(s,r)})}var Ax=Sc(lt),Ix=Sc(bf),Rx=Sc(Xl);function mp(r){return Lc(r)?Yl(Wn(r)):ab(r)}function Ox(r){return function(s){return r==null?n:li(r,s)}}var Lx=_h(),Px=_h(!0);function Qc(){return[]}function Xc(){return!1}function Mx(){return{}}function Bx(){return""}function jx(){return!0}function Ux(r,s){if(r=Ce(r),r<1||r>G)return[];var l=ee,f=Pt(r,ee);s=fe(s),r-=ee;for(var g=tc(f,s);++l<r;)s(l);return g}function Dx(r){return ke(r)?lt(r,Wn):rn(r)?[r]:Kt(Bh(Ge(r)))}function Nx(r){var s=++X2;return Ge(r)+s}var Hx=ra(function(r,s){return r+s},0),zx=Ec("ceil"),Fx=ra(function(r,s){return r/s},1),Wx=Ec("floor");function Zx(r){return r&&r.length?Qo(r,Qt,fc):n}function qx(r,s){return r&&r.length?Qo(r,fe(s,2),fc):n}function Kx(r){return xf(r,Qt)}function Vx(r,s){return xf(r,fe(s,2))}function Gx(r){return r&&r.length?Qo(r,Qt,mc):n}function Qx(r,s){return r&&r.length?Qo(r,fe(s,2),mc):n}var Xx=ra(function(r,s){return r*s},1),Yx=Ec("round"),Jx=ra(function(r,s){return r-s},0);function e4(r){return r&&r.length?ec(r,Qt):0}function t4(r,s){return r&&r.length?ec(r,fe(s,2)):0}return y.after=$w,y.ary=Kh,y.assign=u3,y.assignIn=ap,y.assignInWith=ma,y.assignWith=d3,y.at=f3,y.before=Vh,y.bind=Dc,y.bindAll=vx,y.bindKey=Gh,y.castArray=Mw,y.chain=Wh,y.chunk=Wb,y.compact=Zb,y.concat=qb,y.cond=yx,y.conforms=bx,y.constant=qc,y.countBy=ew,y.create=h3,y.curry=Qh,y.curryRight=Xh,y.debounce=Yh,y.defaults=p3,y.defaultsDeep=g3,y.defer=kw,y.delay=Cw,y.difference=Kb,y.differenceBy=Vb,y.differenceWith=Gb,y.drop=Qb,y.dropRight=Xb,y.dropRightWhile=Yb,y.dropWhile=Jb,y.fill=e_,y.filter=nw,y.flatMap=sw,y.flatMapDeep=ow,y.flatMapDepth=aw,y.flatten=Nh,y.flattenDeep=t_,y.flattenDepth=n_,y.flip=Sw,y.flow=wx,y.flowRight=xx,y.fromPairs=r_,y.functions=x3,y.functionsIn=$3,y.groupBy=lw,y.initial=s_,y.intersection=o_,y.intersectionBy=a_,y.intersectionWith=l_,y.invert=C3,y.invertBy=S3,y.invokeMap=uw,y.iteratee=Kc,y.keyBy=dw,y.keys=Et,y.keysIn=Gt,y.map=ua,y.mapKeys=T3,y.mapValues=A3,y.matches=$x,y.matchesProperty=kx,y.memoize=fa,y.merge=I3,y.mergeWith=lp,y.method=Cx,y.methodOf=Sx,y.mixin=Vc,y.negate=ha,y.nthArg=Tx,y.omit=R3,y.omitBy=O3,y.once=Ew,y.orderBy=fw,y.over=Ax,y.overArgs=Tw,y.overEvery=Ix,y.overSome=Rx,y.partial=Nc,y.partialRight=Jh,y.partition=hw,y.pick=L3,y.pickBy=cp,y.property=mp,y.propertyOf=Ox,y.pull=f_,y.pullAll=zh,y.pullAllBy=h_,y.pullAllWith=p_,y.pullAt=g_,y.range=Lx,y.rangeRight=Px,y.rearg=Aw,y.reject=mw,y.remove=m_,y.rest=Iw,y.reverse=jc,y.sampleSize=yw,y.set=M3,y.setWith=B3,y.shuffle=bw,y.slice=v_,y.sortBy=xw,y.sortedUniq=k_,y.sortedUniqBy=C_,y.split=sx,y.spread=Rw,y.tail=S_,y.take=E_,y.takeRight=T_,y.takeRightWhile=A_,y.takeWhile=I_,y.tap=Z_,y.throttle=Ow,y.thru=ca,y.toArray=ip,y.toPairs=up,y.toPairsIn=dp,y.toPath=Dx,y.toPlainObject=op,y.transform=j3,y.unary=Lw,y.union=R_,y.unionBy=O_,y.unionWith=L_,y.uniq=P_,y.uniqBy=M_,y.uniqWith=B_,y.unset=U3,y.unzip=Uc,y.unzipWith=Fh,y.update=D3,y.updateWith=N3,y.values=Di,y.valuesIn=H3,y.without=j_,y.words=pp,y.wrap=Pw,y.xor=U_,y.xorBy=D_,y.xorWith=N_,y.zip=H_,y.zipObject=z_,y.zipObjectDeep=F_,y.zipWith=W_,y.entries=up,y.entriesIn=dp,y.extend=ap,y.extendWith=ma,Vc(y,y),y.add=Hx,y.attempt=gp,y.camelCase=Z3,y.capitalize=fp,y.ceil=zx,y.clamp=z3,y.clone=Bw,y.cloneDeep=Uw,y.cloneDeepWith=Dw,y.cloneWith=jw,y.conformsTo=Nw,y.deburr=hp,y.defaultTo=_x,y.divide=Fx,y.endsWith=q3,y.eq=An,y.escape=K3,y.escapeRegExp=V3,y.every=tw,y.find=rw,y.findIndex=Uh,y.findKey=m3,y.findLast=iw,y.findLastIndex=Dh,y.findLastKey=v3,y.floor=Wx,y.forEach=Zh,y.forEachRight=qh,y.forIn=y3,y.forInRight=b3,y.forOwn=_3,y.forOwnRight=w3,y.get=Fc,y.gt=Hw,y.gte=zw,y.has=k3,y.hasIn=Wc,y.head=Hh,y.identity=Qt,y.includes=cw,y.indexOf=i_,y.inRange=F3,y.invoke=E3,y.isArguments=di,y.isArray=ke,y.isArrayBuffer=Fw,y.isArrayLike=Vt,y.isArrayLikeObject=mt,y.isBoolean=Ww,y.isBuffer=Br,y.isDate=Zw,y.isElement=qw,y.isEmpty=Kw,y.isEqual=Vw,y.isEqualWith=Gw,y.isError=Hc,y.isFinite=Qw,y.isFunction=ar,y.isInteger=ep,y.isLength=pa,y.isMap=tp,y.isMatch=Xw,y.isMatchWith=Yw,y.isNaN=Jw,y.isNative=e3,y.isNil=n3,y.isNull=t3,y.isNumber=np,y.isObject=ut,y.isObjectLike=pt,y.isPlainObject=Ds,y.isRegExp=zc,y.isSafeInteger=r3,y.isSet=rp,y.isString=ga,y.isSymbol=rn,y.isTypedArray=Ui,y.isUndefined=i3,y.isWeakMap=s3,y.isWeakSet=o3,y.join=c_,y.kebabCase=G3,y.last=_n,y.lastIndexOf=u_,y.lowerCase=Q3,y.lowerFirst=X3,y.lt=a3,y.lte=l3,y.max=Zx,y.maxBy=qx,y.mean=Kx,y.meanBy=Vx,y.min=Gx,y.minBy=Qx,y.stubArray=Qc,y.stubFalse=Xc,y.stubObject=Mx,y.stubString=Bx,y.stubTrue=jx,y.multiply=Xx,y.nth=d_,y.noConflict=Ex,y.noop=Gc,y.now=da,y.pad=Y3,y.padEnd=J3,y.padStart=ex,y.parseInt=tx,y.random=W3,y.reduce=pw,y.reduceRight=gw,y.repeat=nx,y.replace=rx,y.result=P3,y.round=Yx,y.runInContext=R,y.sample=vw,y.size=_w,y.snakeCase=ix,y.some=ww,y.sortedIndex=y_,y.sortedIndexBy=b_,y.sortedIndexOf=__,y.sortedLastIndex=w_,y.sortedLastIndexBy=x_,y.sortedLastIndexOf=$_,y.startCase=ox,y.startsWith=ax,y.subtract=Jx,y.sum=e4,y.sumBy=t4,y.template=lx,y.times=Ux,y.toFinite=lr,y.toInteger=Ce,y.toLength=sp,y.toLower=cx,y.toNumber=wn,y.toSafeInteger=c3,y.toString=Ge,y.toUpper=ux,y.trim=dx,y.trimEnd=fx,y.trimStart=hx,y.truncate=px,y.unescape=gx,y.uniqueId=Nx,y.upperCase=mx,y.upperFirst=Zc,y.each=Zh,y.eachRight=qh,y.first=Hh,Vc(y,function(){var r={};return zn(y,function(s,l){Qe.call(y.prototype,l)||(r[l]=s)}),r}(),{chain:!1}),y.VERSION=i,gn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),gn(["drop","take"],function(r,s){je.prototype[r]=function(l){l=l===n?1:Ct(Ce(l),0);var f=this.__filtered__&&!s?new je(this):this.clone();return f.__filtered__?f.__takeCount__=Pt(l,f.__takeCount__):f.__views__.push({size:Pt(l,ee),type:r+(f.__dir__<0?"Right":"")}),f},je.prototype[r+"Right"]=function(l){return this.reverse()[r](l).reverse()}}),gn(["filter","map","takeWhile"],function(r,s){var l=s+1,f=l==oe||l==X;je.prototype[r]=function(g){var b=this.clone();return b.__iteratees__.push({iteratee:fe(g,3),type:l}),b.__filtered__=b.__filtered__||f,b}}),gn(["head","last"],function(r,s){var l="take"+(s?"Right":"");je.prototype[r]=function(){return this[l](1).value()[0]}}),gn(["initial","tail"],function(r,s){var l="drop"+(s?"":"Right");je.prototype[r]=function(){return this.__filtered__?new je(this):this[l](1)}}),je.prototype.compact=function(){return this.filter(Qt)},je.prototype.find=function(r){return this.filter(r).head()},je.prototype.findLast=function(r){return this.reverse().find(r)},je.prototype.invokeMap=Ie(function(r,s){return typeof r=="function"?new je(this):this.map(function(l){return Ls(l,r,s)})}),je.prototype.reject=function(r){return this.filter(ha(fe(r)))},je.prototype.slice=function(r,s){r=Ce(r);var l=this;return l.__filtered__&&(r>0||s<0)?new je(l):(r<0?l=l.takeRight(-r):r&&(l=l.drop(r)),s!==n&&(s=Ce(s),l=s<0?l.dropRight(-s):l.take(s-r)),l)},je.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},je.prototype.toArray=function(){return this.take(ee)},zn(je.prototype,function(r,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),g=y[f?"take"+(s=="last"?"Right":""):s],b=f||/^find/.test(s);g&&(y.prototype[s]=function(){var x=this.__wrapped__,C=f?[1]:arguments,L=x instanceof je,D=C[0],N=L||ke(x),F=function(Me){var De=g.apply(y,Ar([Me],C));return f&&Q?De[0]:De};N&&l&&typeof D=="function"&&D.length!=1&&(L=N=!1);var Q=this.__chain__,ae=!!this.__actions__.length,pe=b&&!Q,Ee=L&&!ae;if(!b&&N){x=Ee?x:new je(this);var ge=r.apply(x,C);return ge.__actions__.push({func:ca,args:[F],thisArg:n}),new vn(ge,Q)}return pe&&Ee?r.apply(this,C):(ge=this.thru(F),pe?f?ge.value()[0]:ge.value():ge)})}),gn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Mo[r],l=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var g=arguments;if(f&&!this.__chain__){var b=this.value();return s.apply(ke(b)?b:[],g)}return this[l](function(x){return s.apply(ke(x)?x:[],g)})}}),zn(je.prototype,function(r,s){var l=y[s];if(l){var f=l.name+"";Qe.call(Li,f)||(Li[f]=[]),Li[f].push({name:s,func:l})}}),Li[na(n,k).name]=[{name:"wrapper",func:n}],je.prototype.clone=gy,je.prototype.reverse=my,je.prototype.value=vy,y.prototype.at=q_,y.prototype.chain=K_,y.prototype.commit=V_,y.prototype.next=G_,y.prototype.plant=X_,y.prototype.reverse=Y_,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=J_,y.prototype.first=y.prototype.head,Ss&&(y.prototype[Ss]=Q_),y},Ii=V2();ri?((ri.exports=Ii)._=Ii,Kl._=Ii):At._=Ii}).call(fr)})(Ua,Ua.exports);var E4=Ua.exports;const T4=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),_g=(e={})=>(()=>{const t=T4();return Xe(t,e,!0,!0),t})(),A4=M('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),I4=M('<span class="inline-block h-4 w-4 text-gray-700">'),yo=e=>{const[t,n]=we(!1),i=()=>n(o=>!o);return(()=>{const o=A4(),a=o.firstChild,c=a.firstChild,u=c.firstChild,d=c.nextSibling;return I(c,_(le,{get when(){return e.icon},keyed:!0,children:p=>(()=>{const h=I4();return I(h,p),h})()}),u),I(u,()=>e.name),d.$$click=()=>i(),I(d,_(_g,{})),I(o,_(le,{get when(){return t()},get children(){return e.settings()}}),null),o})()};_t(["click"]);const R4=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),qu=(e={})=>(()=>{const t=R4();return Xe(t,e,!0,!0),t})();var O4=typeof fr=="object"&&fr&&fr.Object===Object&&fr,wg=O4,L4=wg,P4=typeof self=="object"&&self&&self.Object===Object&&self,M4=L4||P4||Function("return this")(),Dn=M4,B4=Dn,j4=B4.Symbol,cs=j4,Cp=cs,xg=Object.prototype,U4=xg.hasOwnProperty,D4=xg.toString,Ns=Cp?Cp.toStringTag:void 0;function N4(e){var t=U4.call(e,Ns),n=e[Ns];try{e[Ns]=void 0;var i=!0}catch{}var o=D4.call(e);return i&&(t?e[Ns]=n:delete e[Ns]),o}var H4=N4,z4=Object.prototype,F4=z4.toString;function W4(e){return F4.call(e)}var Z4=W4,Sp=cs,q4=H4,K4=Z4,V4="[object Null]",G4="[object Undefined]",Ep=Sp?Sp.toStringTag:void 0;function Q4(e){return e==null?e===void 0?G4:V4:Ep&&Ep in Object(e)?q4(e):K4(e)}var us=Q4;function X4(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Qn=X4,Y4=us,J4=Qn,e5="[object AsyncFunction]",t5="[object Function]",n5="[object GeneratorFunction]",r5="[object Proxy]";function i5(e){if(!J4(e))return!1;var t=Y4(e);return t==t5||t==n5||t==e5||t==r5}var $g=i5,s5=Dn,o5=s5["__core-js_shared__"],a5=o5,Yc=a5,Tp=function(){var e=/[^.]+$/.exec(Yc&&Yc.keys&&Yc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function l5(e){return!!Tp&&Tp in e}var c5=l5,u5=Function.prototype,d5=u5.toString;function f5(e){if(e!=null){try{return d5.call(e)}catch{}try{return e+""}catch{}}return""}var kg=f5,h5=$g,p5=c5,g5=Qn,m5=kg,v5=/[\\^$.*+?()[\]{}|]/g,y5=/^\[object .+?Constructor\]$/,b5=Function.prototype,_5=Object.prototype,w5=b5.toString,x5=_5.hasOwnProperty,$5=RegExp("^"+w5.call(x5).replace(v5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function k5(e){if(!g5(e)||p5(e))return!1;var t=h5(e)?$5:y5;return t.test(m5(e))}var C5=k5;function S5(e,t){return e?.[t]}var E5=S5,T5=C5,A5=E5;function I5(e,t){var n=A5(e,t);return T5(n)?n:void 0}var xi=I5,R5=xi,O5=R5(Object,"create"),hl=O5,Ap=hl;function L5(){this.__data__=Ap?Ap(null):{},this.size=0}var P5=L5;function M5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var B5=M5,j5=hl,U5="__lodash_hash_undefined__",D5=Object.prototype,N5=D5.hasOwnProperty;function H5(e){var t=this.__data__;if(j5){var n=t[e];return n===U5?void 0:n}return N5.call(t,e)?t[e]:void 0}var z5=H5,F5=hl,W5=Object.prototype,Z5=W5.hasOwnProperty;function q5(e){var t=this.__data__;return F5?t[e]!==void 0:Z5.call(t,e)}var K5=q5,V5=hl,G5="__lodash_hash_undefined__";function Q5(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=V5&&t===void 0?G5:t,this}var X5=Q5,Y5=P5,J5=B5,e$=z5,t$=K5,n$=X5;function ds(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ds.prototype.clear=Y5;ds.prototype.delete=J5;ds.prototype.get=e$;ds.prototype.has=t$;ds.prototype.set=n$;var r$=ds;function i$(){this.__data__=[],this.size=0}var s$=i$;function o$(e,t){return e===t||e!==e&&t!==t}var Ku=o$,a$=Ku;function l$(e,t){for(var n=e.length;n--;)if(a$(e[n][0],t))return n;return-1}var pl=l$,c$=pl,u$=Array.prototype,d$=u$.splice;function f$(e){var t=this.__data__,n=c$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():d$.call(t,n,1),--this.size,!0}var h$=f$,p$=pl;function g$(e){var t=this.__data__,n=p$(t,e);return n<0?void 0:t[n][1]}var m$=g$,v$=pl;function y$(e){return v$(this.__data__,e)>-1}var b$=y$,_$=pl;function w$(e,t){var n=this.__data__,i=_$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var x$=w$,$$=s$,k$=h$,C$=m$,S$=b$,E$=x$;function fs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}fs.prototype.clear=$$;fs.prototype.delete=k$;fs.prototype.get=C$;fs.prototype.has=S$;fs.prototype.set=E$;var gl=fs,T$=xi,A$=Dn,I$=T$(A$,"Map"),Vu=I$,Ip=r$,R$=gl,O$=Vu;function L$(){this.size=0,this.__data__={hash:new Ip,map:new(O$||R$),string:new Ip}}var P$=L$;function M$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var B$=M$,j$=B$;function U$(e,t){var n=e.__data__;return j$(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ml=U$,D$=ml;function N$(e){var t=D$(this,e).delete(e);return this.size-=t?1:0,t}var H$=N$,z$=ml;function F$(e){return z$(this,e).get(e)}var W$=F$,Z$=ml;function q$(e){return Z$(this,e).has(e)}var K$=q$,V$=ml;function G$(e,t){var n=V$(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var Q$=G$,X$=P$,Y$=H$,J$=W$,e6=K$,t6=Q$;function hs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}hs.prototype.clear=X$;hs.prototype.delete=Y$;hs.prototype.get=J$;hs.prototype.has=e6;hs.prototype.set=t6;var Gu=hs,n6="__lodash_hash_undefined__";function r6(e){return this.__data__.set(e,n6),this}var i6=r6;function s6(e){return this.__data__.has(e)}var o6=s6,a6=Gu,l6=i6,c6=o6;function Da(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new a6;++t<n;)this.add(e[t])}Da.prototype.add=Da.prototype.push=l6;Da.prototype.has=c6;var Cg=Da;function u6(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var d6=u6;function f6(e){return e!==e}var h6=f6;function p6(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var g6=p6,m6=d6,v6=h6,y6=g6;function b6(e,t,n){return t===t?y6(e,t,n):m6(e,v6,n)}var _6=b6,w6=_6;function x6(e,t){var n=e==null?0:e.length;return!!n&&w6(e,t,0)>-1}var $6=x6;function k6(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var C6=k6;function S6(e,t){return e.has(t)}var Sg=S6,E6=xi,T6=Dn,A6=E6(T6,"Set"),Eg=A6;function I6(){}var R6=I6;function O6(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Qu=O6,Jc=Eg,L6=R6,P6=Qu,M6=1/0,B6=Jc&&1/P6(new Jc([,-0]))[1]==M6?function(e){return new Jc(e)}:L6,j6=B6,U6=Cg,D6=$6,N6=C6,H6=Sg,z6=j6,F6=Qu,W6=200;function Z6(e,t,n){var i=-1,o=D6,a=e.length,c=!0,u=[],d=u;if(n)c=!1,o=N6;else if(a>=W6){var p=t?null:z6(e);if(p)return F6(p);c=!1,o=H6,d=new U6}else d=t?[]:u;e:for(;++i<a;){var h=e[i],m=t?t(h):h;if(h=n||h!==0?h:0,c&&m===m){for(var v=d.length;v--;)if(d[v]===m)continue e;t&&d.push(m),u.push(h)}else o(d,m,n)||(d!==u&&d.push(m),u.push(h))}return u}var Tg=Z6,q6=Tg;function K6(e){return e&&e.length?q6(e):[]}var V6=K6;const gr=vo(V6),G6=M('<div class="block shrink-0 overflow-hidden border-b p-1">'),Ra=e=>(()=>{const t=G6();return I(t,()=>e.children),t})(),Q6={},X6=Object.freeze(Object.defineProperty({__proto__:null,default:Q6},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Ne=BigInt(0),ct=BigInt(1),Zr=BigInt(2),Vs=BigInt(3),Rp=BigInt(8),Ye=Object.freeze({a:Ne,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:ct,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),Op=(e,t)=>(e+t/Zr)/t,va={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=Ye,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-ct*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,c=BigInt("0x100000000000000000000000000000000"),u=Op(a*e,t),d=Op(-i*e,t);let p=J(e-u*n-d*o,t),h=J(-u*i-d*a,t);const m=p>c,v=h>c;if(m&&(p=t-p),v&&(h=t-h),p>c||h>c)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:m,k1:p,k2neg:v,k2:h}}},Ln=32,Gi=32,Y6=32,Na=Ln+1,Ha=2*Ln+1;function Lp(e){const{a:t,b:n}=Ye,i=J(e*e),o=J(i*e);return J(o+t*e+n)}const ya=Ye.a===Ne;class Xu extends Error{constructor(t){super(t)}}function Pp(e){if(!(e instanceof Ke))throw new TypeError("JacobianPoint expected")}class Ke{constructor(t,n,i){this.x=t,this.y=n,this.z=i}static fromAffine(t){if(!(t instanceof He))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(He.ZERO)?Ke.ZERO:new Ke(t.x,t.y,ct)}static toAffineBatch(t){const n=r8(t.map(i=>i.z));return t.map((i,o)=>i.toAffine(n[o]))}static normalizeZ(t){return Ke.toAffineBatch(t).map(Ke.fromAffine)}equals(t){Pp(t);const{x:n,y:i,z:o}=this,{x:a,y:c,z:u}=t,d=J(o*o),p=J(u*u),h=J(n*p),m=J(a*d),v=J(J(i*u)*p),w=J(J(c*o)*d);return h===m&&v===w}negate(){return new Ke(this.x,J(-this.y),this.z)}double(){const{x:t,y:n,z:i}=this,o=J(t*t),a=J(n*n),c=J(a*a),u=t+a,d=J(Zr*(J(u*u)-o-c)),p=J(Vs*o),h=J(p*p),m=J(h-Zr*d),v=J(p*(d-m)-Rp*c),w=J(Zr*n*i);return new Ke(m,v,w)}add(t){Pp(t);const{x:n,y:i,z:o}=this,{x:a,y:c,z:u}=t;if(a===Ne||c===Ne)return this;if(n===Ne||i===Ne)return t;const d=J(o*o),p=J(u*u),h=J(n*p),m=J(a*d),v=J(J(i*u)*p),w=J(J(c*o)*d),$=J(m-h),S=J(w-v);if($===Ne)return S===Ne?this.double():Ke.ZERO;const A=J($*$),k=J($*A),P=J(h*A),B=J(S*S-k-Zr*P),E=J(S*(P-B)-v*k),T=J(o*u*$);return new Ke(B,E,T)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const n=Ke.ZERO;if(typeof t=="bigint"&&t===Ne)return n;let i=jp(t);if(i===ct)return this;if(!ya){let m=n,v=this;for(;i>Ne;)i&ct&&(m=m.add(v)),v=v.double(),i>>=ct;return m}let{k1neg:o,k1:a,k2neg:c,k2:u}=va.splitScalar(i),d=n,p=n,h=this;for(;a>Ne||u>Ne;)a&ct&&(d=d.add(h)),u&ct&&(p=p.add(h)),h=h.double(),a>>=ct,u>>=ct;return o&&(d=d.negate()),c&&(p=p.negate()),p=new Ke(J(p.x*va.beta),p.y,p.z),d.add(p)}precomputeWindow(t){const n=ya?128/t+1:256/t+1,i=[];let o=this,a=o;for(let c=0;c<n;c++){a=o,i.push(a);for(let u=1;u<2**(t-1);u++)a=a.add(o),i.push(a);o=a.double()}return i}wNAF(t,n){!n&&this.equals(Ke.BASE)&&(n=He.BASE);const i=n&&n._WINDOW_SIZE||1;if(256%i)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=n&&yu.get(n);o||(o=this.precomputeWindow(i),n&&i!==1&&(o=Ke.normalizeZ(o),yu.set(n,o)));let a=Ke.ZERO,c=Ke.BASE;const u=1+(ya?128/i:256/i),d=2**(i-1),p=BigInt(2**i-1),h=2**i,m=BigInt(i);for(let v=0;v<u;v++){const w=v*d;let $=Number(t&p);t>>=m,$>d&&($-=h,t+=ct);const S=w,A=w+Math.abs($)-1,k=v%2!==0,P=$<0;$===0?c=c.add(ba(k,o[S])):a=a.add(ba(P,o[A]))}return{p:a,f:c}}multiply(t,n){let i=jp(t),o,a;if(ya){const{k1neg:c,k1:u,k2neg:d,k2:p}=va.splitScalar(i);let{p:h,f:m}=this.wNAF(u,n),{p:v,f:w}=this.wNAF(p,n);h=ba(c,h),v=ba(d,v),v=new Ke(J(v.x*va.beta),v.y,v.z),o=h.add(v),a=m.add(w)}else{const{p:c,f:u}=this.wNAF(i,n);o=c,a=u}return Ke.normalizeZ([o,a])[0]}toAffine(t){const{x:n,y:i,z:o}=this,a=this.equals(Ke.ZERO);t==null&&(t=a?Rp:ps(o));const c=t,u=J(c*c),d=J(u*c),p=J(n*u),h=J(i*d),m=J(o*c);if(a)return He.ZERO;if(m!==ct)throw new Error("invZ was invalid");return new He(p,h)}}Ke.BASE=new Ke(Ye.Gx,Ye.Gy,ct);Ke.ZERO=new Ke(Ne,ct,Ne);function ba(e,t){const n=t.negate();return e?n:t}const yu=new WeakMap;class He{constructor(t,n){this.x=t,this.y=n}_setWindowSize(t){this._WINDOW_SIZE=t,yu.delete(this)}hasEvenY(){return this.y%Zr===Ne}static fromCompressedHex(t){const n=t.length===32,i=un(n?t:t.subarray(1));if(!Oa(i))throw new Error("Point is not on curve");const o=Lp(i);let a=n8(o);const c=(a&ct)===ct;n?c&&(a=J(-a)):(t[0]&1)===1!==c&&(a=J(-a));const u=new He(i,a);return u.assertValidity(),u}static fromUncompressedHex(t){const n=un(t.subarray(1,Ln+1)),i=un(t.subarray(Ln+1,Ln*2+1)),o=new He(n,i);return o.assertValidity(),o}static fromHex(t){const n=qn(t),i=n.length,o=n[0];if(i===Ln)return this.fromCompressedHex(n);if(i===Na&&(o===2||o===3))return this.fromCompressedHex(n);if(i===Ha&&o===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Na} compressed bytes or ${Ha} uncompressed bytes, not ${i}`)}static fromPrivateKey(t){return He.BASE.multiply(yi(t))}static fromSignature(t,n,i){const{r:o,s:a}=Ag(n);if(![0,1,2,3].includes(i))throw new Error("Cannot recover: invalid recovery bit");const c=Yu(qn(t)),{n:u}=Ye,d=i===2||i===3?o+u:o,p=ps(d,u),h=J(-c*p,u),m=J(a*p,u),v=i&1?"03":"02",w=He.fromHex(v+Kr(d)),$=He.BASE.multiplyAndAddUnsafe(w,h,m);if(!$)throw new Error("Cannot recover signature: point at infinify");return $.assertValidity(),$}toRawBytes(t=!1){return Vr(this.toHex(t))}toHex(t=!1){const n=Kr(this.x);return t?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${Kr(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:n,y:i}=this;if(!Oa(n)||!Oa(i))throw new Error(t);const o=J(i*i),a=Lp(n);if(J(o-a)!==Ne)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new He(this.x,J(-this.y))}double(){return Ke.fromAffine(this).double().toAffine()}add(t){return Ke.fromAffine(this).add(Ke.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return Ke.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,n,i){const o=Ke.fromAffine(this),a=n===Ne||n===ct||this!==He.BASE?o.multiplyUnsafe(n):o.multiply(n),c=Ke.fromAffine(t).multiplyUnsafe(i),u=a.add(c);return u.equals(Ke.ZERO)?void 0:u.toAffine()}}He.BASE=new He(Ye.Gx,Ye.Gy);He.ZERO=new He(Ne,Ne);function Mp(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function Bp(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${Qi(e)}`);const t=e[1],n=e.subarray(2,t+2);if(!t||n.length!==t)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:un(n),left:e.subarray(t+2)}}function J6(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${Qi(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:n}=Bp(e.subarray(2)),{data:i,left:o}=Bp(n);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${Qi(o)}`);return{r:t,s:i}}class mr{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromCompact(t){const n=t instanceof Uint8Array,i="Signature.fromCompact";if(typeof t!="string"&&!n)throw new TypeError(`${i}: Expected string or Uint8Array`);const o=n?Qi(t):t;if(o.length!==128)throw new Error(`${i}: Expected 64-byte hex`);return new mr(za(o.slice(0,64)),za(o.slice(64,128)))}static fromDER(t){const n=t instanceof Uint8Array;if(typeof t!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:i,s:o}=J6(n?t:Vr(t));return new mr(i,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:n}=this;if(!Yi(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Yi(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=Ye.n>>ct;return this.s>t}normalizeS(){return this.hasHighS()?new mr(this.r,J(-this.s,Ye.n)):this}toDERRawBytes(){return Vr(this.toDERHex())}toDERHex(){const t=Mp(Hs(this.s)),n=Mp(Hs(this.r)),i=t.length/2,o=n.length/2,a=Hs(i),c=Hs(o);return`30${Hs(o+i+4)}02${c}${n}02${a}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return Vr(this.toCompactHex())}toCompactHex(){return Kr(this.r)+Kr(this.s)}}function zr(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}const e8=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Qi(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let n=0;n<e.length;n++)t+=e8[e[n]];return t}const t8=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function Kr(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(Ne<=e&&e<t8))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function Xi(e){const t=Vr(Kr(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function Hs(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function za(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function Vr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}function un(e){return za(Qi(e))}function qn(e){return e instanceof Uint8Array?Uint8Array.from(e):Vr(e)}function jp(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&Yi(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function J(e,t=Ye.P){const n=e%t;return n>=Ne?n:t+n}function xn(e,t){const{P:n}=Ye;let i=e;for(;t-- >Ne;)i*=i,i%=n;return i}function n8(e){const{P:t}=Ye,n=BigInt(6),i=BigInt(11),o=BigInt(22),a=BigInt(23),c=BigInt(44),u=BigInt(88),d=e*e*e%t,p=d*d*e%t,h=xn(p,Vs)*p%t,m=xn(h,Vs)*p%t,v=xn(m,Zr)*d%t,w=xn(v,i)*v%t,$=xn(w,o)*w%t,S=xn($,c)*$%t,A=xn(S,u)*S%t,k=xn(A,c)*$%t,P=xn(k,Vs)*p%t,B=xn(P,a)*w%t,E=xn(B,n)*d%t,T=xn(E,Zr);if(T*T%t!==e)throw new Error("Cannot find square root");return T}function ps(e,t=Ye.P){if(e===Ne||t<=Ne)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=J(e,t),i=t,o=Ne,a=ct;for(;n!==Ne;){const u=i/n,d=i%n,p=o-a*u;i=n,n=d,o=a,a=p}if(i!==ct)throw new Error("invert: does not exist");return J(o,t)}function r8(e,t=Ye.P){const n=new Array(e.length),i=e.reduce((a,c,u)=>c===Ne?a:(n[u]=a,J(a*c,t)),ct),o=ps(i,t);return e.reduceRight((a,c,u)=>c===Ne?a:(n[u]=J(a*n[u],t),J(a*c,t)),o),n}function i8(e){const t=e.length*8-Gi*8,n=un(e);return t>0?n>>BigInt(t):n}function Yu(e,t=!1){const n=i8(e);if(t)return n;const{n:i}=Ye;return n>=i?n-i:n}let Wi,Gs;class s8{constructor(t,n){if(this.hashLen=t,this.qByteLen=n,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return Re.hmacSha256(this.k,...t)}hmacSync(...t){return Gs(this.k,...t)}checkSync(){if(typeof Gs!="function")throw new Xu("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const i=this.v.slice();n.push(i),t+=this.v.length}return zr(...n)}generateSync(){this.checkSync(),this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const i=this.v.slice();n.push(i),t+=this.v.length}return zr(...n)}}function Yi(e){return Ne<e&&e<Ye.n}function Oa(e){return Ne<e&&e<Ye.P}function o8(e,t,n,i=!0){const{n:o}=Ye,a=Yu(e,!0);if(!Yi(a))return;const c=ps(a,o),u=He.BASE.multiply(a),d=J(u.x,o);if(d===Ne)return;const p=J(c*J(t+n*d,o),o);if(p===Ne)return;let h=new mr(d,p),m=(u.x===h.r?0:2)|Number(u.y&ct);return i&&h.hasHighS()&&(h=h.normalizeS(),m^=1),{sig:h,recovery:m}}function yi(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*Gi)throw new Error("Expected 32 bytes of private key");t=za(e)}else if(e instanceof Uint8Array){if(e.length!==Gi)throw new Error("Expected 32 bytes of private key");t=un(e)}else throw new TypeError("Expected valid private key");if(!Yi(t))throw new Error("Expected private key: 0 < key < n");return t}function Ju(e){return e instanceof He?(e.assertValidity(),e):He.fromHex(e)}function Ag(e){if(e instanceof mr)return e.assertValidity(),e;try{return mr.fromDER(e)}catch{return mr.fromCompact(e)}}function a8(e,t=!1){return He.fromPrivateKey(e).toRawBytes(t)}function Up(e){const t=e instanceof Uint8Array,n=typeof e=="string",i=(t||n)&&e.length;return t?i===Na||i===Ha:n?i===Na*2||i===Ha*2:e instanceof He}function Ig(e,t,n=!1){if(Up(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Up(t))throw new TypeError("getSharedSecret: second arg must be public key");const i=Ju(t);return i.assertValidity(),i.multiply(yi(e)).toRawBytes(n)}function Rg(e){const t=e.length>Ln?e.slice(0,Ln):e;return un(t)}function l8(e){const t=Rg(e),n=J(t,Ye.n);return Og(n<Ne?t:n)}function Og(e){return Xi(e)}function c8(e,t,n){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const i=qn(e),o=yi(t),a=[Og(o),l8(i)];if(n!=null){n===!0&&(n=Re.randomBytes(Ln));const d=qn(n);if(d.length!==Ln)throw new Error(`sign: Expected ${Ln} bytes of extra data`);a.push(d)}const c=zr(...a),u=Rg(i);return{seed:c,m:u,d:o}}function u8(e,t){const{sig:n,recovery:i}=e,{der:o,recovered:a}=Object.assign({canonical:!0,der:!0},t),c=o?n.toDERRawBytes():n.toCompactRawBytes();return a?[c,i]:c}function d8(e,t,n={}){const{seed:i,m:o,d:a}=c8(e,t,n.extraEntropy),c=new s8(Y6,Gi);c.reseedSync(i);let u;for(;!(u=o8(c.generateSync(),o,a,n.canonical));)c.reseedSync();return u8(u,n)}const f8={strict:!0};function h8(e,t,n,i=f8){let o;try{o=Ag(e),t=qn(t)}catch{return!1}const{r:a,s:c}=o;if(i.strict&&o.hasHighS())return!1;const u=Yu(t);let d;try{d=Ju(n)}catch{return!1}const{n:p}=Ye,h=ps(c,p),m=J(u*h,p),v=J(a*h,p),w=He.BASE.multiplyAndAddUnsafe(d,m,v);return w?J(w.x,p)===a:!1}function Fa(e){return J(un(e),Ye.n)}class Ji{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromHex(t){const n=qn(t);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);const i=un(n.subarray(0,32)),o=un(n.subarray(32,64));return new Ji(i,o)}assertValidity(){const{r:t,s:n}=this;if(!Oa(t)||!Yi(n))throw new Error("Invalid signature")}toHex(){return Kr(this.r)+Kr(this.s)}toRawBytes(){return Vr(this.toHex())}}function p8(e){return He.fromPrivateKey(e).toRawX()}class Lg{constructor(t,n,i=Re.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=qn(t);const{x:o,scalar:a}=this.getScalar(yi(n));if(this.px=o,this.d=a,this.rand=qn(i),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const n=He.fromPrivateKey(t),i=n.hasEvenY()?t:Ye.n-t;return{point:n,scalar:i,x:n.toRawX()}}initNonce(t,n){return Xi(t^un(n))}finalizeNonce(t){const n=J(un(t),Ye.n);if(n===Ne)throw new Error("sign: Creation of signature failed. k is zero");const{point:i,x:o,scalar:a}=this.getScalar(n);return{R:i,rx:o,k:a}}finalizeSig(t,n,i,o){return new Ji(t.x,J(n+i*o,Ye.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:n,px:i,rand:o}=this,a=Re.taggedHash,c=this.initNonce(n,await a(Hr.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(await a(Hr.nonce,c,i,t)),h=Fa(await a(Hr.challenge,d,i,t)),m=this.finalizeSig(u,p,h,n);return await Bg(m,t,i)||this.error(),m}calcSync(){const{m:t,d:n,px:i,rand:o}=this,a=Re.taggedHashSync,c=this.initNonce(n,a(Hr.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(a(Hr.nonce,c,i,t)),h=Fa(a(Hr.challenge,d,i,t)),m=this.finalizeSig(u,p,h,n);return jg(m,t,i)||this.error(),m}}async function g8(e,t,n){return new Lg(e,t,n).calc()}function m8(e,t,n){return new Lg(e,t,n).calcSync()}function Pg(e,t,n){const i=e instanceof Ji,o=i?e:Ji.fromHex(e);return i&&o.assertValidity(),{...o,m:qn(t),P:Ju(n)}}function Mg(e,t,n,i){const o=He.BASE.multiplyAndAddUnsafe(t,yi(n),J(-i,Ye.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function Bg(e,t,n){try{const{r:i,s:o,m:a,P:c}=Pg(e,t,n),u=Fa(await Re.taggedHash(Hr.challenge,Xi(i),c.toRawX(),a));return Mg(i,c,o,u)}catch{return!1}}function jg(e,t,n){try{const{r:i,s:o,m:a,P:c}=Pg(e,t,n),u=Fa(Re.taggedHashSync(Hr.challenge,Xi(i),c.toRawX(),a));return Mg(i,c,o,u)}catch(i){if(i instanceof Xu)throw i;return!1}}const vl={Signature:Ji,getPublicKey:p8,sign:g8,verify:Bg,signSync:m8,verifySync:jg};He.BASE._setWindowSize(8);const an={node:X6,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Hr={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},_a={},Re={bytesToHex:Qi,hexToBytes:Vr,concatBytes:zr,mod:J,invert:ps,isValidPrivateKey(e){try{return yi(e),!0}catch{return!1}},_bigintTo32Bytes:Xi,_normalizePrivateKey:yi,hashToPrivateKey:e=>{e=qn(e);const t=Gi+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const n=J(un(e),Ye.n-ct)+ct;return Xi(n)},randomBytes:(e=32)=>{if(an.web)return an.web.getRandomValues(new Uint8Array(e));if(an.node){const{randomBytes:t}=an.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>Re.hashToPrivateKey(Re.randomBytes(Gi+8)),precompute(e=8,t=He.BASE){const n=t===He.BASE?t:new He(t.x,t.y);return n._setWindowSize(e),n.multiply(Vs),n},sha256:async(...e)=>{if(an.web){const t=await an.web.subtle.digest("SHA-256",zr(...e));return new Uint8Array(t)}else if(an.node){const{createHash:t}=an.node,n=t("sha256");return e.forEach(i=>n.update(i)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(an.web){const n=await an.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),i=zr(...t),o=await an.web.subtle.sign("HMAC",n,i);return new Uint8Array(o)}else if(an.node){const{createHmac:n}=an.node,i=n("sha256",e);return t.forEach(o=>i.update(o)),Uint8Array.from(i.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let n=_a[e];if(n===void 0){const i=await Re.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));n=zr(i,i),_a[e]=n}return Re.sha256(n,...t)},taggedHashSync:(e,...t)=>{if(typeof Wi!="function")throw new Xu("sha256Sync is undefined, you need to set it");let n=_a[e];if(n===void 0){const i=Wi(Uint8Array.from(e,o=>o.charCodeAt(0)));n=zr(i,i),_a[e]=n}return Wi(n,...t)},_JacobianPoint:Ke};Object.defineProperties(Re,{sha256Sync:{configurable:!1,get(){return Wi},set(e){Wi||(Wi=e)}},hmacSha256Sync:{configurable:!1,get(){return Gs},set(e){Gs||(Gs=e)}}});function bu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function v8(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function Ug(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function y8(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");bu(e.outputLen),bu(e.blockLen)}function b8(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function _8(e,t){Ug(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const pi={number:bu,bool:v8,bytes:Ug,hash:y8,exists:b8,output:_8},Zs={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},w8=Object.freeze(Object.defineProperty({__proto__:null,crypto:Zs},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const x8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),$8=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),mi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Rn=(e,t)=>e<<32-t|e>>>t,Dg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Dg)throw new Error("Non little-endian hardware is not supported");const k8=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Ng(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=k8[e[n]];return t}function Hg(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const zg=async()=>{};async function C8(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await zg(),i+=a)}}function ed(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function bo(e){if(typeof e=="string"&&(e=ed(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function qs(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class td{clone(){return this._cloneInto()}}const S8=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function E8(e,t){if(t!==void 0&&(typeof t!="object"||!S8(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function yl(e){const t=i=>e().update(bo(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function T8(e){const t=(i,o)=>e(o).update(bo(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function Fg(e=32){if(Zs.web)return Zs.web.getRandomValues(new Uint8Array(e));if(Zs.node)return new Uint8Array(Zs.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}const A8=Object.freeze(Object.defineProperty({__proto__:null,Hash:td,asyncLoop:C8,bytesToHex:Ng,checkOpts:E8,concatBytes:qs,createView:mi,hexToBytes:Hg,isLE:Dg,nextTick:zg,randomBytes:Fg,rotr:Rn,toBytes:bo,u32:$8,u8:x8,utf8ToBytes:ed,wrapConstructor:yl,wrapConstructorWithOpts:T8},Symbol.toStringTag,{value:"Module"}));function I8(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,p=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+p,u,i)}let Wg=class extends td{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=mi(this.buffer)}update(t){pi.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=bo(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=mi(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){pi.exists(this),pi.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let m=c;m<o;m++)n[m]=0;I8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=mi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<p;m++)u.setUint32(4*m,h[m],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}};const R8=(e,t,n)=>e&t^~e&n,O8=(e,t,n)=>e&t^e&n^t&n,L8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),jr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Ur=new Uint32Array(64);class Zg extends Wg{constructor(){super(64,32,8,!1),this.A=jr[0]|0,this.B=jr[1]|0,this.C=jr[2]|0,this.D=jr[3]|0,this.E=jr[4]|0,this.F=jr[5]|0,this.G=jr[6]|0,this.H=jr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:c,G:u,H:d}=this;return[t,n,i,o,a,c,u,d]}set(t,n,i,o,a,c,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=c|0,this.G=u|0,this.H=d|0}process(t,n){for(let m=0;m<16;m++,n+=4)Ur[m]=t.getUint32(n,!1);for(let m=16;m<64;m++){const v=Ur[m-15],w=Ur[m-2],$=Rn(v,7)^Rn(v,18)^v>>>3,S=Rn(w,17)^Rn(w,19)^w>>>10;Ur[m]=S+Ur[m-7]+$+Ur[m-16]|0}let{A:i,B:o,C:a,D:c,E:u,F:d,G:p,H:h}=this;for(let m=0;m<64;m++){const v=Rn(u,6)^Rn(u,11)^Rn(u,25),w=h+v+R8(u,d,p)+L8[m]+Ur[m]|0,S=(Rn(i,2)^Rn(i,13)^Rn(i,22))+O8(i,o,a)|0;h=p,p=d,d=u,u=c+w|0,c=a,a=o,o=i,i=w+S|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,c=c+this.D|0,u=u+this.E|0,d=d+this.F|0,p=p+this.G|0,h=h+this.H|0,this.set(i,o,a,c,u,d,p,h)}roundClean(){Ur.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class P8 extends Zg{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const xr=yl(()=>new Zg),M8=yl(()=>new P8),B8=Object.freeze(Object.defineProperty({__proto__:null,sha224:M8,sha256:xr},Symbol.toStringTag,{value:"Module"}));/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Jr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Nn(...e){const t=(o,a)=>c=>o(a(c)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Xn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Jr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Yn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function _o(e,t="="){if(Jr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function qg(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Dp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(c=>{if(Jr(c),c<0||c>=t)throw new Error(`Wrong integer: ${c}`)});;){let c=0,u=!0;for(let d=i;d<a.length;d++){const p=a[d],h=t*c+p;if(!Number.isSafeInteger(h)||t*c/t!==c||h-p!==t*c)throw new Error("convertRadix: carry overflow");if(c=h%n,a[d]=Math.floor(h/n),!Number.isSafeInteger(a[d])||a[d]*n+c!==h)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(c),u)break}for(let c=0;c<e.length-1&&e[c]===0;c++)o.push(0);return o.reverse()}const Kg=(e,t)=>t?Kg(t,e%t):e,Wa=(e,t)=>e+(t-Kg(e,t));function _u(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Wa(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Wa(t,n)}`);let o=0,a=0;const c=2**n-1,u=[];for(const d of e){if(Jr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&c)>>>0);o&=2**a-1}if(o=o<<n-a&c,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function Vg(e){return Jr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Dp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Dp(t,e,2**8))}}}function $r(e,t=!1){if(Jr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Wa(8,e)>32||Wa(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return _u(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(_u(n,e,8,t))}}}function Np(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function Gg(e,t){if(Jr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let c=0;c<e;c++)if(o[c]!==a[c])throw new Error("Invalid checksum");return i}}}const j8={alphabet:Xn,chain:Nn,checksum:Gg,radix:Vg,radix2:$r,join:Yn,padding:_o},Qg=Nn($r(4),Xn("0123456789ABCDEF"),Yn("")),Xg=Nn($r(5),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),_o(5),Yn("")),U8=Nn($r(5),Xn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),_o(5),Yn("")),D8=Nn($r(5),Xn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Yn(""),qg(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),es=Nn($r(6),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),_o(6),Yn("")),Yg=Nn($r(6),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),_o(6),Yn("")),nd=e=>Nn(Vg(58),Xn(e),Yn("")),eo=nd("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),N8=nd("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),H8=nd("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Hp=[0,2,3,5,6,7,9,10,11],Jg={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=eo.encode(i).padStart(Hp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=Hp.indexOf(i.length),a=eo.decode(i);for(let c=0;c<a.length-o;c++)if(a[c]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},e1=e=>Nn(Gg(4,t=>e(e(t))),eo),wu=Nn(Xn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Yn("")),zp=[996825010,642813549,513874426,1027748829,705979059];function zs(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<zp.length;i++)(t>>i&1)===1&&(n^=zp[i]);return n}function Fp(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const c=e.charCodeAt(a);if(c<33||c>126)throw new Error(`Invalid prefix (${e})`);o=zs(o)^c>>5}o=zs(o);for(let a=0;a<i;a++)o=zs(o)^e.charCodeAt(a)&31;for(let a of t)o=zs(o)^a;for(let a=0;a<6;a++)o=zs(o);return o^=n,wu.encode(_u([o%2**30],30,5,!1))}function t1(e){const t=e==="bech32"?1:734539939,n=$r(5),i=n.decode,o=n.encode,a=Np(i);function c(h,m,v=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(m)||m.length&&typeof m[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof m}`);const w=h.length+7+m.length;if(v!==!1&&w>v)throw new TypeError(`Length ${w} exceeds limit ${v}`);return h=h.toLowerCase(),`${h}1${wu.encode(m)}${Fp(h,m,t)}`}function u(h,m=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||m!==!1&&h.length>m)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${m})`);const v=h.toLowerCase();if(h!==v&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=v;const w=h.lastIndexOf("1");if(w===0||w===-1)throw new Error('Letter "1" must be present between prefix and data only');const $=h.slice(0,w),S=h.slice(w+1);if(S.length<6)throw new Error("Data must be at least 6 characters long");const A=wu.decode(S).slice(0,-6),k=Fp($,A,t);if(!S.endsWith(k))throw new Error(`Invalid checksum in ${h}: expected "${k}"`);return{prefix:$,words:A}}const d=Np(u);function p(h){const{prefix:m,words:v}=u(h,!1);return{prefix:m,words:v,bytes:i(v)}}return{encode:c,decode:u,decodeToBytes:p,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Ft=t1("bech32"),z8=t1("bech32m"),n1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},r1=Nn($r(4),Xn("0123456789abcdef"),Yn(""),qg(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),to={utf8:n1,hex:r1,base16:Qg,base32:Xg,base64:es,base64url:Yg,base58:eo,base58xmr:Jg},i1=`Invalid encoding type. Available types: ${Object.keys(to).join(", ")}`,s1=(e,t)=>{if(typeof e!="string"||!to.hasOwnProperty(e))throw new TypeError(i1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return to[e].encode(t)},F8=s1,o1=(e,t)=>{if(!to.hasOwnProperty(e))throw new TypeError(i1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return to[e].decode(t)},W8=o1,Z8=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Jr,base16:Qg,base32:Xg,base32crockford:D8,base32hex:U8,base58:eo,base58check:e1,base58flickr:N8,base58xmr:Jg,base58xrp:H8,base64:es,base64url:Yg,bech32:Ft,bech32m:z8,bytes:W8,bytesToString:s1,hex:r1,str:F8,stringToBytes:o1,utf8:n1,utils:j8},Symbol.toStringTag,{value:"Module"}));var rd={};Object.defineProperty(rd,"__esModule",{value:!0});var id=rd.wordlist=void 0;id=rd.wordlist=`abandon
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
`);var ln={},Tt={};Object.defineProperty(Tt,"__esModule",{value:!0});Tt.output=Tt.exists=Tt.hash=zi=Tt.bytes=Tt.bool=Tt.number=void 0;function Za(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}Tt.number=Za;function a1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}Tt.bool=a1;function sd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var zi=Tt.bytes=sd;function l1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Za(e.outputLen),Za(e.blockLen)}Tt.hash=l1;function c1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}Tt.exists=c1;function u1(e,t){sd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Tt.output=u1;const q8={number:Za,bool:a1,bytes:sd,hash:l1,exists:c1,output:u1};Tt.default=q8;var ts={},d1={},wo={};const K8=fl(w8);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=K8,n=E=>new Uint8Array(E.buffer,E.byteOffset,E.byteLength);e.u8=n;const i=E=>new Uint32Array(E.buffer,E.byteOffset,Math.floor(E.byteLength/4));e.u32=i;const o=E=>new DataView(E.buffer,E.byteOffset,E.byteLength);e.createView=o;const a=(E,T)=>E<<32-T|E>>>T;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},(E,T)=>T.toString(16).padStart(2,"0"));function u(E){if(!(E instanceof Uint8Array))throw new Error("Uint8Array expected");let T="";for(let O=0;O<E.length;O++)T+=c[E[O]];return T}e.bytesToHex=u;function d(E){if(typeof E!="string")throw new TypeError("hexToBytes: expected string, got "+typeof E);if(E.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const T=new Uint8Array(E.length/2);for(let O=0;O<T.length;O++){const H=O*2,W=E.slice(H,H+2),ie=Number.parseInt(W,16);if(Number.isNaN(ie)||ie<0)throw new Error("Invalid byte sequence");T[O]=ie}return T}e.hexToBytes=d;const p=async()=>{};e.nextTick=p;async function h(E,T,O){let H=Date.now();for(let W=0;W<E;W++){O(W);const ie=Date.now()-H;ie>=0&&ie<T||(await(0,e.nextTick)(),H+=ie)}}e.asyncLoop=h;function m(E){if(typeof E!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof E}`);return new TextEncoder().encode(E)}e.utf8ToBytes=m;function v(E){if(typeof E=="string"&&(E=m(E)),!(E instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof E})`);return E}e.toBytes=v;function w(...E){if(!E.every(H=>H instanceof Uint8Array))throw new Error("Uint8Array list expected");if(E.length===1)return E[0];const T=E.reduce((H,W)=>H+W.length,0),O=new Uint8Array(T);for(let H=0,W=0;H<E.length;H++){const ie=E[H];O.set(ie,W),W+=ie.length}return O}e.concatBytes=w;class ${clone(){return this._cloneInto()}}e.Hash=$;const S=E=>Object.prototype.toString.call(E)==="[object Object]"&&E.constructor===Object;function A(E,T){if(T!==void 0&&(typeof T!="object"||!S(T)))throw new TypeError("Options should be object or undefined");return Object.assign(E,T)}e.checkOpts=A;function k(E){const T=H=>E().update(v(H)).digest(),O=E();return T.outputLen=O.outputLen,T.blockLen=O.blockLen,T.create=()=>E(),T}e.wrapConstructor=k;function P(E){const T=(H,W)=>E(W).update(v(H)).digest(),O=E({});return T.outputLen=O.outputLen,T.blockLen=O.blockLen,T.create=H=>E(H),T}e.wrapConstructorWithOpts=P;function B(E=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(E));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(E).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=B})(wo);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=Tt,n=wo;class i extends n.Hash{constructor(c,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(c);const d=(0,n.toBytes)(u);if(this.iHash=c.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const p=this.blockLen,h=new Uint8Array(p);h.set(d.length>p?c.create().update(d).digest():d);for(let m=0;m<h.length;m++)h[m]^=54;this.iHash.update(h),this.oHash=c.create();for(let m=0;m<h.length;m++)h[m]^=106;this.oHash.update(h),h.fill(0)}update(c){return t.default.exists(this),this.iHash.update(c),this}digestInto(c){t.default.exists(this),t.default.bytes(c,this.outputLen),this.finished=!0,this.iHash.digestInto(c),this.oHash.update(c),this.oHash.digestInto(c),this.destroy()}digest(){const c=new Uint8Array(this.oHash.outputLen);return this.digestInto(c),c}_cloneInto(c){c||(c=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:p,destroyed:h,blockLen:m,outputLen:v}=this;return c=c,c.finished=p,c.destroyed=h,c.blockLen=m,c.outputLen=v,c.oHash=u._cloneInto(c.oHash),c.iHash=d._cloneInto(c.iHash),c}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,c,u)=>new i(a,c).update(u).digest();e.hmac=o,e.hmac.create=(a,c)=>new i(a,c)})(d1);Object.defineProperty(ts,"__esModule",{value:!0});ts.pbkdf2Async=ts.pbkdf2=void 0;const wa=Tt,V8=d1,Zi=wo;function f1(e,t,n,i){wa.default.hash(e);const o=(0,Zi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:c,asyncTick:u}=o;if(wa.default.number(a),wa.default.number(c),wa.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Zi.toBytes)(t),p=(0,Zi.toBytes)(n),h=new Uint8Array(c),m=V8.hmac.create(e,d),v=m._cloneInto().update(p);return{c:a,dkLen:c,asyncTick:u,DK:h,PRF:m,PRFSalt:v}}function h1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function G8(e,t,n,i){const{c:o,dkLen:a,DK:c,PRF:u,PRFSalt:d}=f1(e,t,n,i);let p;const h=new Uint8Array(4),m=(0,Zi.createView)(h),v=new Uint8Array(u.outputLen);for(let w=1,$=0;$<a;w++,$+=u.outputLen){const S=c.subarray($,$+u.outputLen);m.setInt32(0,w,!1),(p=d._cloneInto(p)).update(h).digestInto(v),S.set(v.subarray(0,S.length));for(let A=1;A<o;A++){u._cloneInto(p).update(v).digestInto(v);for(let k=0;k<S.length;k++)S[k]^=v[k]}}return h1(u,d,c,p,v)}ts.pbkdf2=G8;async function Q8(e,t,n,i){const{c:o,dkLen:a,asyncTick:c,DK:u,PRF:d,PRFSalt:p}=f1(e,t,n,i);let h;const m=new Uint8Array(4),v=(0,Zi.createView)(m),w=new Uint8Array(d.outputLen);for(let $=1,S=0;S<a;$++,S+=d.outputLen){const A=u.subarray(S,S+d.outputLen);v.setInt32(0,$,!1),(h=p._cloneInto(h)).update(m).digestInto(w),A.set(w.subarray(0,A.length)),await(0,Zi.asyncLoop)(o-1,c,k=>{d._cloneInto(h).update(w).digestInto(w);for(let P=0;P<A.length;P++)A[P]^=w[P]})}return h1(d,p,u,h,w)}ts.pbkdf2Async=Q8;const X8=fl(B8);var $n={},bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.SHA2=void 0;const eu=Tt,Fs=wo;function Y8(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,p=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+p,u,i)}class J8 extends Fs.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Fs.createView)(this.buffer)}update(t){eu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Fs.toBytes)(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=(0,Fs.createView)(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){eu.default.exists(this),eu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let m=c;m<o;m++)n[m]=0;Y8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Fs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<p;m++)u.setUint32(4*m,h[m],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}}bl.SHA2=J8;var p1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(K,se=!1){return se?{h:Number(K&t),l:Number(K>>n&t)}:{h:Number(K>>n&t)|0,l:Number(K&t)|0}}e.fromBig=i;function o(K,se=!1){let Z=new Uint32Array(K.length),Y=new Uint32Array(K.length);for(let oe=0;oe<K.length;oe++){const{h:Ze,l:X}=i(K[oe],se);[Z[oe],Y[oe]]=[Ze,X]}return[Z,Y]}e.split=o;const a=(K,se)=>BigInt(K>>>0)<<n|BigInt(se>>>0);e.toBig=a;const c=(K,se,Z)=>K>>>Z,u=(K,se,Z)=>K<<32-Z|se>>>Z,d=(K,se,Z)=>K>>>Z|se<<32-Z,p=(K,se,Z)=>K<<32-Z|se>>>Z,h=(K,se,Z)=>K<<64-Z|se>>>Z-32,m=(K,se,Z)=>K>>>Z-32|se<<64-Z,v=(K,se)=>se,w=(K,se)=>K,$=(K,se,Z)=>K<<Z|se>>>32-Z,S=(K,se,Z)=>se<<Z|K>>>32-Z,A=(K,se,Z)=>se<<Z-32|K>>>64-Z,k=(K,se,Z)=>K<<Z-32|se>>>64-Z;function P(K,se,Z,Y){const oe=(se>>>0)+(Y>>>0);return{h:K+Z+(oe/2**32|0)|0,l:oe|0}}e.add=P;const B=(K,se,Z)=>(K>>>0)+(se>>>0)+(Z>>>0),E=(K,se,Z,Y)=>se+Z+Y+(K/2**32|0)|0,T=(K,se,Z,Y)=>(K>>>0)+(se>>>0)+(Z>>>0)+(Y>>>0),O=(K,se,Z,Y,oe)=>se+Z+Y+oe+(K/2**32|0)|0,H=(K,se,Z,Y,oe)=>(K>>>0)+(se>>>0)+(Z>>>0)+(Y>>>0)+(oe>>>0),W=(K,se,Z,Y,oe,Ze)=>se+Z+Y+oe+Ze+(K/2**32|0)|0,ie={fromBig:i,split:o,toBig:e.toBig,shrSH:c,shrSL:u,rotrSH:d,rotrSL:p,rotrBH:h,rotrBL:m,rotr32H:v,rotr32L:w,rotlSH:$,rotlSL:S,rotlBH:A,rotlBL:k,add:P,add3L:B,add3H:E,add4L:T,add4H:O,add5H:W,add5L:H};e.default=ie})(p1);Object.defineProperty($n,"__esModule",{value:!0});$n.sha384=$n.sha512_256=$n.sha512_224=xu=$n.sha512=$n.SHA512=void 0;const e7=bl,Te=p1,_l=wo,[t7,n7]=Te.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Dr=new Uint32Array(80),Nr=new Uint32Array(80);class xo extends e7.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:c,Dh:u,Dl:d,Eh:p,El:h,Fh:m,Fl:v,Gh:w,Gl:$,Hh:S,Hl:A}=this;return[t,n,i,o,a,c,u,d,p,h,m,v,w,$,S,A]}set(t,n,i,o,a,c,u,d,p,h,m,v,w,$,S,A){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=c|0,this.Dh=u|0,this.Dl=d|0,this.Eh=p|0,this.El=h|0,this.Fh=m|0,this.Fl=v|0,this.Gh=w|0,this.Gl=$|0,this.Hh=S|0,this.Hl=A|0}process(t,n){for(let B=0;B<16;B++,n+=4)Dr[B]=t.getUint32(n),Nr[B]=t.getUint32(n+=4);for(let B=16;B<80;B++){const E=Dr[B-15]|0,T=Nr[B-15]|0,O=Te.default.rotrSH(E,T,1)^Te.default.rotrSH(E,T,8)^Te.default.shrSH(E,T,7),H=Te.default.rotrSL(E,T,1)^Te.default.rotrSL(E,T,8)^Te.default.shrSL(E,T,7),W=Dr[B-2]|0,ie=Nr[B-2]|0,K=Te.default.rotrSH(W,ie,19)^Te.default.rotrBH(W,ie,61)^Te.default.shrSH(W,ie,6),se=Te.default.rotrSL(W,ie,19)^Te.default.rotrBL(W,ie,61)^Te.default.shrSL(W,ie,6),Z=Te.default.add4L(H,se,Nr[B-7],Nr[B-16]),Y=Te.default.add4H(Z,O,K,Dr[B-7],Dr[B-16]);Dr[B]=Y|0,Nr[B]=Z|0}let{Ah:i,Al:o,Bh:a,Bl:c,Ch:u,Cl:d,Dh:p,Dl:h,Eh:m,El:v,Fh:w,Fl:$,Gh:S,Gl:A,Hh:k,Hl:P}=this;for(let B=0;B<80;B++){const E=Te.default.rotrSH(m,v,14)^Te.default.rotrSH(m,v,18)^Te.default.rotrBH(m,v,41),T=Te.default.rotrSL(m,v,14)^Te.default.rotrSL(m,v,18)^Te.default.rotrBL(m,v,41),O=m&w^~m&S,H=v&$^~v&A,W=Te.default.add5L(P,T,H,n7[B],Nr[B]),ie=Te.default.add5H(W,k,E,O,t7[B],Dr[B]),K=W|0,se=Te.default.rotrSH(i,o,28)^Te.default.rotrBH(i,o,34)^Te.default.rotrBH(i,o,39),Z=Te.default.rotrSL(i,o,28)^Te.default.rotrBL(i,o,34)^Te.default.rotrBL(i,o,39),Y=i&a^i&u^a&u,oe=o&c^o&d^c&d;k=S|0,P=A|0,S=w|0,A=$|0,w=m|0,$=v|0,{h:m,l:v}=Te.default.add(p|0,h|0,ie|0,K|0),p=u|0,h=d|0,u=a|0,d=c|0,a=i|0,c=o|0;const Ze=Te.default.add3L(K,Z,oe);i=Te.default.add3H(Ze,ie,se,Y),o=Ze|0}({h:i,l:o}=Te.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l:c}=Te.default.add(this.Bh|0,this.Bl|0,a|0,c|0),{h:u,l:d}=Te.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:p,l:h}=Te.default.add(this.Dh|0,this.Dl|0,p|0,h|0),{h:m,l:v}=Te.default.add(this.Eh|0,this.El|0,m|0,v|0),{h:w,l:$}=Te.default.add(this.Fh|0,this.Fl|0,w|0,$|0),{h:S,l:A}=Te.default.add(this.Gh|0,this.Gl|0,S|0,A|0),{h:k,l:P}=Te.default.add(this.Hh|0,this.Hl|0,k|0,P|0),this.set(i,o,a,c,u,d,p,h,m,v,w,$,S,A,k,P)}roundClean(){Dr.fill(0),Nr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}$n.SHA512=xo;class r7 extends xo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class i7 extends xo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class s7 extends xo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var xu=$n.sha512=(0,_l.wrapConstructor)(()=>new xo);$n.sha512_224=(0,_l.wrapConstructor)(()=>new r7);$n.sha512_256=(0,_l.wrapConstructor)(()=>new i7);$n.sha384=(0,_l.wrapConstructor)(()=>new s7);const o7=fl(A8),a7=fl(Z8);Object.defineProperty(ln,"__esModule",{value:!0});var g1=ln.mnemonicToSeedSync=ln.mnemonicToSeed=C1=ln.validateMnemonic=ln.entropyToMnemonic=ln.mnemonicToEntropy=w1=ln.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const m1=Tt,v1=ts,l7=X8,y1=$n,c7=o7,xa=a7,u7=e=>e[0]==="あいこくしん";function b1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function od(e){const t=b1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function _1(e){m1.default.bytes(e,16,20,24,28,32)}function d7(e,t=128){if(m1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return k1((0,c7.randomBytes)(t/8),e)}var w1=ln.generateMnemonic=d7;const f7=e=>{const t=8-e.length/4;return new Uint8Array([(0,l7.sha256)(e)[0]>>t<<t])};function x1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),xa.utils.chain(xa.utils.checksum(1,f7),xa.utils.radix2(11,!0),xa.utils.alphabet(e))}function $1(e,t){const{words:n}=od(e),i=x1(t).decode(n);return _1(i),i}ln.mnemonicToEntropy=$1;function k1(e,t){return _1(e),x1(t).encode(e).join(u7(t)?"　":" ")}ln.entropyToMnemonic=k1;function h7(e,t){try{$1(e,t)}catch{return!1}return!0}var C1=ln.validateMnemonic=h7;const S1=e=>b1(`mnemonic${e}`);function p7(e,t=""){return(0,v1.pbkdf2Async)(y1.sha512,od(e).nfkd,S1(t),{c:2048,dkLen:64})}ln.mnemonicToSeed=p7;function g7(e,t=""){return(0,v1.pbkdf2)(y1.sha512,od(e).nfkd,S1(t),{c:2048,dkLen:64})}g1=ln.mnemonicToSeedSync=g7;class E1 extends td{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,pi.hash(t);const i=bo(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let c=0;c<a.length;c++)a[c]^=54;this.iHash.update(a),this.oHash=t.create();for(let c=0;c<a.length;c++)a[c]^=106;this.oHash.update(a),a.fill(0)}update(t){return pi.exists(this),this.iHash.update(t),this}digestInto(t){pi.exists(this),pi.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:c,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=c,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const no=(e,t,n)=>new E1(e,t).update(n).digest();no.create=(e,t)=>new E1(e,t);const m7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),T1=Uint8Array.from({length:16},(e,t)=>t),v7=T1.map(e=>(9*e+5)%16);let ad=[T1],ld=[v7];for(let e=0;e<4;e++)for(let t of[ad,ld])t.push(t[e].map(n=>m7[n]));const A1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),y7=ad.map((e,t)=>e.map(n=>A1[t][n])),b7=ld.map((e,t)=>e.map(n=>A1[t][n])),_7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),w7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),$a=(e,t)=>e<<t|e>>>32-t;function Wp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const ka=new Uint32Array(16);class x7 extends Wg{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let w=0;w<16;w++,n+=4)ka[w]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,c=a,u=this.h2|0,d=u,p=this.h3|0,h=p,m=this.h4|0,v=m;for(let w=0;w<5;w++){const $=4-w,S=_7[w],A=w7[w],k=ad[w],P=ld[w],B=y7[w],E=b7[w];for(let T=0;T<16;T++){const O=$a(i+Wp(w,a,u,p)+ka[k[T]]+S,B[T])+m|0;i=m,m=p,p=$a(u,10)|0,u=a,a=O}for(let T=0;T<16;T++){const O=$a(o+Wp($,c,d,h)+ka[P[T]]+A,E[T])+v|0;o=v,v=h,h=$a(d,10)|0,d=c,c=O}}this.set(this.h1+u+h|0,this.h2+p+v|0,this.h3+m+o|0,this.h4+i+c|0,this.h0+a+d|0)}roundClean(){ka.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const $7=yl(()=>new x7);Re.hmacSha256Sync=(e,...t)=>no(xr,e,Re.concatBytes(...t));const tu=e1(xr);function Zp(e){return BigInt(`0x${Ng(e)}`)}function k7(e){return Hg(e.toString(16).padStart(64,"0"))}const C7=ed("Bitcoin seed"),nu={private:76066276,public:76067358},ru=2147483648,S7=e=>$7(xr(e)),E7=e=>mi(e).getUint32(0,!1),Ca=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return mi(t).setUint32(0,e,!1),t};class hi{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||nu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Re.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Zp(t.privateKey),this.privKeyBytes=k7(this.privKey),this.pubKey=a8(t.privateKey,!0)}else if(t.publicKey)this.pubKey=He.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=S7(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return E7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return tu.encode(this.serialize(this.versions.private,qs(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return tu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=nu){if(zi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=no(xu,C7,t);return new hi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=nu){const i=tu.decode(t),o=mi(i),a=o.getUint32(0,!1),c={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new hi({...c,privateKey:u.slice(1)}):new hi({...c,publicKey:u})}static fromJSON(t){return hi.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let c=+a[1];if(!Number.isSafeInteger(c)||c>=ru)throw new Error("Invalid index");a[2]==="'"&&(c+=ru),i=i.deriveChild(c)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=Ca(t);if(t>=ru){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=qs(new Uint8Array([0]),u,n)}else n=qs(this.pubKey,n);const i=no(xu,this.chainCode,n),o=Zp(i.slice(0,32)),a=i.slice(32);if(!Re.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const c={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=Re.mod(this.privKey+o,Ye.n);if(!Re.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=u}else{const u=He.fromHex(this.pubKey).add(He.fromPrivateKey(o));if(u.equals(He.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=u.toRawBytes(!0)}return new hi(c)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return zi(t,32),d8(t,this.privKey,{canonical:!0,der:!1})}verify(t,n){if(zi(t,32),zi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=mr.fromCompact(n)}catch{return!1}return h8(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return zi(n,33),qs(Ca(t),new Uint8Array([this.depth]),Ca(this.parentFingerprint),Ca(this.index),this.chainCode,n)}}var T7=Object.defineProperty,Yt=(e,t)=>{for(var n in t)T7(e,n,{get:t[n],enumerable:!0})};function A7(e){return Re.bytesToHex(vl.getPublicKey(e))}var I7={};Yt(I7,{insertEventIntoAscendingList:()=>O7,insertEventIntoDescendingList:()=>R7,normalizeURL:()=>$u,utf8Decoder:()=>Fr,utf8Encoder:()=>Kn});var Fr=new TextDecoder("utf-8"),Kn=new TextEncoder;function $u(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function R7(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function O7(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var yt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(yt||{});function L7(e){if(!cd(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function I1(e){let t=xr(Kn.encode(L7(e)));return Re.bytesToHex(t)}var P7=e=>e instanceof Object;function cd(e){if(!P7(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function R1(e){return vl.verifySync(e.sig,I1(e),e.pubkey)}function M7(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,c])=>a===n.slice(1)&&o.indexOf(c)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function B7(e,t){for(let n=0;n<e.length;n++)if(M7(e[n],t))return!0;return!1}var j7={};Yt(j7,{getHex64:()=>wl,getInt:()=>O1,getSubscriptionId:()=>L1,matchEventId:()=>U7,matchEventKind:()=>N7,matchEventPubkey:()=>D7});function wl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function O1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function L1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function U7(e,t){return t===wl(e,"id")}function D7(e,t){return t===wl(e,"pubkey")}function N7(e,t){return t===O1(e,"kind")}var qp=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function H7(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,c={},u=qp(),d={},p={},h;async function m(){return h||(h=new Promise((k,P)=>{try{a=new WebSocket(e)}catch(O){P(O)}a.onopen=()=>{u.connect.forEach(O=>O()),k()},a.onerror=()=>{h=void 0,u.error.forEach(O=>O()),P()},a.onclose=async()=>{h=void 0,u.disconnect.forEach(O=>O())};let B=[],E;a.onmessage=O=>{B.push(O.data),E||(E=setInterval(T,0))};function T(){if(B.length===0){clearInterval(E),E=null;return}var O=B.shift();if(!O)return;let H=L1(O);if(H){let W=c[H];if(W&&W.alreadyHaveEvent&&W.alreadyHaveEvent(wl(O,"id"),e))return}try{let W=JSON.parse(O);switch(W[0]){case"EVENT":{let Z=W[1],Y=W[2];cd(Y)&&c[Z]&&(c[Z].skipVerification||R1(Y))&&B7(c[Z].filters,Y)&&(c[Z],(d[Z]?.event||[]).forEach(oe=>oe(Y)));return}case"COUNT":let ie=W[1],K=W[2];c[ie]&&(d[ie]?.count||[]).forEach(Z=>Z(K));return;case"EOSE":{let Z=W[1];Z in d&&(d[Z].eose.forEach(Y=>Y()),d[Z].eose=[]);return}case"OK":{let Z=W[1],Y=W[2],oe=W[3]||"";Z in p&&(Y?p[Z].ok.forEach(Ze=>Ze()):p[Z].failed.forEach(Ze=>Ze(oe)),p[Z].ok=[],p[Z].failed=[]);return}case"NOTICE":let se=W[1];u.notice.forEach(Z=>Z(se));return;case"AUTH":{let Z=W[1];u.auth?.forEach(Y=>Y(Z));return}}}catch{return}}}),h)}function v(){return a?.readyState===1}async function w(){v()||await m()}async function $(k){let P=JSON.stringify(k);if(!(!v()&&(await new Promise(B=>setTimeout(B,1e3)),!v())))try{a.send(P)}catch(B){console.log(B)}}const S=(k,{verb:P="REQ",skipVerification:B=!1,alreadyHaveEvent:E=null,id:T=Math.random().toString().slice(2)}={})=>{let O=T;return c[O]={id:O,filters:k,skipVerification:B,alreadyHaveEvent:E},$([P,O,...k]),{sub:(H,W={})=>S(H||k,{skipVerification:W.skipVerification||B,alreadyHaveEvent:W.alreadyHaveEvent||E,id:O}),unsub:()=>{delete c[O],delete d[O],$(["CLOSE",O])},on:(H,W)=>{d[O]=d[O]||{event:[],count:[],eose:[]},d[O][H].push(W)},off:(H,W)=>{let ie=d[O],K=ie[H].indexOf(W);K>=0&&ie[H].splice(K,1)}}};function A(k,P){if(!k.id)throw new Error(`event ${k} has no id`);let B=k.id;return $([P,k]),{on:(E,T)=>{p[B]=p[B]||{ok:[],failed:[]},p[B][E].push(T)},off:(E,T)=>{let O=p[B];if(!O)return;let H=O[E].indexOf(T);H>=0&&O[E].splice(H,1)}}}return{url:e,sub:S,on:(k,P)=>{u[k].push(P),k==="connect"&&a?.readyState===1&&P()},off:(k,P)=>{let B=u[k].indexOf(P);B!==-1&&u[k].splice(B,1)},list:(k,P)=>new Promise(B=>{let E=S(k,P),T=[],O=setTimeout(()=>{E.unsub(),B(T)},n);E.on("eose",()=>{E.unsub(),clearTimeout(O),B(T)}),E.on("event",H=>{T.push(H)})}),get:(k,P)=>new Promise(B=>{let E=S([k],P),T=setTimeout(()=>{E.unsub(),B(null)},i);E.on("event",O=>{E.unsub(),clearTimeout(T),B(O)})}),count:k=>new Promise(P=>{let B=S(k,{...S,verb:"COUNT"}),E=setTimeout(()=>{B.unsub(),P(null)},o);B.on("count",T=>{B.unsub(),clearTimeout(E),P(T)})}),publish(k){return A(k,"EVENT")},auth(k){return A(k,"AUTH")},connect:w,close(){u=qp(),d={},p={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var z7=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[$u(t)];n&&n.close()})}async ensureRelay(e){const t=$u(e);this._conn[t]||(this._conn[t]=H7(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,w)=>{if(n?.alreadyHaveEvent?.(v,w))return!0;let $=this._seenOn[v]||new Set;return $.add(w),this._seenOn[v]=$,i.has(v)};let a=[],c=new Set,u=new Set,d=e.length,p=!1,h=setTimeout(()=>{p=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let w;try{w=await this.ensureRelay(v)}catch{S();return}if(!w)return;let $=w.sub(t,o);$.on("event",A=>{i.add(A.id);for(let k of c.values())k(A)}),$.on("eose",()=>{p||S()}),a.push($);function S(){if(d--,d===0){clearTimeout(h);for(let A of u.values())A()}}});let m={sub(v,w){return a.forEach($=>$.sub(v,w)),m},unsub(){a.forEach(v=>v.unsub())},on(v,w){v==="event"?c.add(w):v==="eose"&&u.add(w)},off(v,w){v==="event"?c.delete(w):v==="eose"&&u.delete(w)}};return m}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",c=>{i(c),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",c=>{o.push(c)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(c,u)=>{let d=await n[u],p=()=>a(c);i.set(a,p),d.on(o,p)})},off(o,a){e.forEach(async(c,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},$o={};Yt($o,{decode:()=>xl,naddrEncode:()=>V7,neventEncode:()=>K7,noteEncode:()=>Z7,nprofileEncode:()=>q7,npubEncode:()=>W7,nrelayEncode:()=>G7,nsecEncode:()=>F7});var gs=5e3;function xl(e){let{prefix:t,words:n}=Ft.decode(e,gs),i=new Uint8Array(Ft.fromWords(n));switch(t){case"nprofile":{let o=Sa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:Re.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>Fr.decode(a)):[]}}}case"nevent":{let o=Sa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:Re.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>Fr.decode(a)):[],author:o[2]?.[0]?Re.bytesToHex(o[2][0]):void 0}}}case"naddr":{let o=Sa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Fr.decode(o[0][0]),pubkey:Re.bytesToHex(o[2][0]),kind:parseInt(Re.bytesToHex(o[3][0]),16),relays:o[1]?o[1].map(a=>Fr.decode(a)):[]}}}case"nrelay":{let o=Sa(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Fr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:Re.bytesToHex(i)};default:throw new Error(`unknown prefix ${t}`)}}function Sa(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1],a=n.slice(2,2+o);n=n.slice(2+o),!(a.length<o)&&(t[i]=t[i]||[],t[i].push(a))}return t}function F7(e){return ud("nsec",e)}function W7(e){return ud("npub",e)}function Z7(e){return ud("note",e)}function ud(e,t){let n=Re.hexToBytes(t),i=Ft.toWords(n);return Ft.encode(e,i,gs)}function q7(e){let t=$l({0:[Re.hexToBytes(e.pubkey)],1:(e.relays||[]).map(i=>Kn.encode(i))}),n=Ft.toWords(t);return Ft.encode("nprofile",n,gs)}function K7(e){let t=$l({0:[Re.hexToBytes(e.id)],1:(e.relays||[]).map(i=>Kn.encode(i)),2:e.author?[Re.hexToBytes(e.author)]:[]}),n=Ft.toWords(t);return Ft.encode("nevent",n,gs)}function V7(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=$l({0:[Kn.encode(e.identifier)],1:(e.relays||[]).map(o=>Kn.encode(o)),2:[Re.hexToBytes(e.pubkey)],3:[new Uint8Array(t)]}),i=Ft.toWords(n);return Ft.encode("naddr",i,gs)}function G7(e){let t=$l({0:[Kn.encode(e)]}),n=Ft.toWords(t);return Ft.encode("nrelay",n,gs)}function $l(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),Re.concatBytes(...t)}var Q7={};Yt(Q7,{decrypt:()=>Y7,encrypt:()=>X7});async function X7(e,t,n){const i=Ig(e,"02"+t),o=P1(i);let a=Uint8Array.from(Fg(16)),c=Kn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,c),p=es.encode(new Uint8Array(d)),h=es.encode(new Uint8Array(a.buffer));return`${p}?iv=${h}`}async function Y7(e,t,n){let[i,o]=n.split("?iv="),a=Ig(e,"02"+t),c=P1(a),u=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),d=es.decode(i),p=es.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:p},u,d);return Fr.decode(h)}function P1(e){return e.slice(1,33)}var M1={};Yt(M1,{queryProfile:()=>t9,searchDomain:()=>e9,useFetchImplementation:()=>J7});var kl;try{kl=fetch}catch{}function J7(e){kl=e}async function e9(e,t=""){try{return(await(await kl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function t9(e){let[t,n]=e.split("@");if(n||(n=t,t="_"),!t.match(/^[A-Za-z0-9-_.]+$/)||!n.includes("."))return null;let i;try{i=await(await kl(`https://${n}/.well-known/nostr.json?name=${t}`)).json()}catch{return null}if(!i?.names?.[t])return null;let o=i.names[t],a=i.relays?.[o]||[];return{pubkey:o,relays:a}}var n9={};Yt(n9,{generateSeedWords:()=>i9,privateKeyFromSeedWords:()=>r9,validateWords:()=>s9});function r9(e,t){let i=hi.fromMasterSeed(g1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return Re.bytesToHex(i)}function i9(){return w1(id)}function s9(e){return C1(e,id)}var o9={};Yt(o9,{parse:()=>a9});function a9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,c,u,d]=o,p={id:c,relays:u?[u]:[]},h=i===0,m=i===n.length-1;if(d==="root"){t.root=p;continue}if(d==="reply"){t.reply=p;continue}if(d==="mention"){t.mentions.push(p);continue}if(h){t.root=p;continue}if(m){t.reply=p;continue}t.mentions.push(p)}return t}var l9={};Yt(l9,{getPow:()=>c9});function c9(e){return u9(Re.hexToBytes(e))}function u9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=d9(e[n]),t+=i,i===8);n++);return t}function d9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var f9={};Yt(f9,{BECH32_REGEX:()=>B1,NOSTR_URI_REGEX:()=>Cl,parse:()=>p9,test:()=>h9});var B1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/,Cl=new RegExp(`nostr:(${B1.source})`);function h9(e){return typeof e=="string"&&new RegExp(`^${Cl.source}$`).test(e)}function p9(e){const t=e.match(new RegExp(`^${Cl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:xl(t[1])}}var g9={};Yt(g9,{createDelegation:()=>m9,getDelegator:()=>v9});function m9(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=xr(Kn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=Re.bytesToHex(vl.signSync(o,e));return{from:A7(e),to:t.pubkey,cond:i,sig:a}}function v9(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,p,h]=a[u].split(/\b/);if(!(d==="kind"&&p==="="&&e.kind===parseInt(h))){if(d==="created_at"&&p==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&p===">"&&e.created_at>parseInt(h))continue;return null}}let c=xr(Kn.encode(`nostr:delegation:${e.pubkey}:${i}`));return vl.verifySync(o,c,n)?n:null}var y9={};Yt(y9,{matchAll:()=>b9,regex:()=>dd,replaceAll:()=>_9});var dd=()=>new RegExp(`\\b${Cl.source}\\b`,"g");function*b9(e){const t=e.matchAll(dd());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:xl(o),start:n.index,end:n.index+i.length}}}function _9(e,t){return e.replaceAll(dd(),(n,i)=>t({uri:n,value:i,decoded:xl(i)}))}var w9={};Yt(w9,{useFetchImplementation:()=>x9,validateGithub:()=>$9});var fd;try{fd=fetch}catch{}function x9(e){fd=e}async function $9(e,t,n){try{return await(await fd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var k9={};Yt(k9,{authenticate:()=>C9});var C9=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,c)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),c(d)})})},S9={};Yt(S9,{getZapEndpoint:()=>T9,makeZapReceipt:()=>R9,makeZapRequest:()=>A9,useFetchImplementation:()=>E9,validateZapRequest:()=>I9});var hd;try{hd=fetch}catch{}function E9(e){hd=e}async function T9(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:c}=Ft.decode(n,1e3),u=Ft.fromWords(c);t=Fr.decode(u)}else if(i){let[c,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${c}`}else return null;let a=await(await hd(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function A9({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function I9(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!cd(t))return"Zap request is not a valid Nostr event.";if(!R1(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,c])=>a==="p"&&c);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,c])=>a==="e"&&c);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,c])=>a==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function R9({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),c={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&c.tags.push(["preimage",t]),c}Re.hmacSha256Sync=(e,...t)=>no(xr,e,Re.concatBytes(...t));Re.sha256Sync=(...e)=>xr(Re.concatBytes(...e));const O9=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),j1=(e={})=>(()=>{const t=O9();return Xe(t,e,!0,!0),t})(),L9=M('<button class="text-blue-500 underline">'),{noteEncode:P9,neventEncode:M9}=$o,B9=e=>{try{return P9(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},j9=e=>{try{return M9({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},ro=e=>(()=>{const t=L9();return I(t,_(le,{get when(){return e.kind==null||e.kind===yt.Text},get fallback(){return j9(e.eventId)},get children(){return B9(e.eventId)}})),t})(),U9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],U1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],D9=[...U1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],N9=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],H9=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ms=()=>({id:H9(),width:"medium"}),D1=e=>({...ms(),columnType:"Following",...e}),N1=e=>({...ms(),columnType:"Notification",...e}),z9=e=>({...ms(),columnType:"Relays",...e}),H1=()=>z9({name:"日本語",relayUrls:U1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),z1=e=>({...ms(),columnType:"Posts",...e}),F1=e=>({...ms(),columnType:"Reactions",...e}),pd=e=>({...ms(),columnType:"Search",...e});var We;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const c of o)a[c]=c;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),c={};for(const u of a)c[u]=o[u];return e.objectValues(c)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const c in o)Object.prototype.hasOwnProperty.call(o,c)&&a.push(c);return a},e.find=(o,a)=>{for(const c of o)if(a(c))return c},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(c=>typeof c=="string"?`'${c}'`:c).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(We||(We={}));var ku;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(ku||(ku={}));const te=We.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Wr=e=>{switch(typeof e){case"undefined":return te.undefined;case"string":return te.string;case"number":return isNaN(e)?te.nan:te.number;case"boolean":return te.boolean;case"function":return te.function;case"bigint":return te.bigint;case"symbol":return te.symbol;case"object":return Array.isArray(e)?te.array:e===null?te.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?te.promise:typeof Map<"u"&&e instanceof Map?te.map:typeof Set<"u"&&e instanceof Set?te.set:typeof Date<"u"&&e instanceof Date?te.date:te.object;default:return te.unknown}},q=We.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),F9=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Bn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const c of a.issues)if(c.code==="invalid_union")c.unionErrors.map(o);else if(c.code==="invalid_return_type")o(c.returnTypeError);else if(c.code==="invalid_arguments")o(c.argumentsError);else if(c.path.length===0)i._errors.push(n(c));else{let u=i,d=0;for(;d<c.path.length;){const p=c.path[d];d===c.path.length-1?(u[p]=u[p]||{_errors:[]},u[p]._errors.push(n(c))):u[p]=u[p]||{_errors:[]},u=u[p],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,We.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Bn.create=e=>new Bn(e);const io=(e,t)=>{let n;switch(e.code){case q.invalid_type:e.received===te.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case q.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,We.jsonStringifyReplacer)}`;break;case q.unrecognized_keys:n=`Unrecognized key(s) in object: ${We.joinValues(e.keys,", ")}`;break;case q.invalid_union:n="Invalid input";break;case q.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${We.joinValues(e.options)}`;break;case q.invalid_enum_value:n=`Invalid enum value. Expected ${We.joinValues(e.options)}, received '${e.received}'`;break;case q.invalid_arguments:n="Invalid function arguments";break;case q.invalid_return_type:n="Invalid function return type";break;case q.invalid_date:n="Invalid date";break;case q.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:We.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case q.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case q.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case q.custom:n="Invalid input";break;case q.invalid_intersection_types:n="Intersection results could not be merged";break;case q.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case q.not_finite:n="Number must be finite";break;default:n=t.defaultError,We.assertNever(e)}return{message:n}};let W1=io;function W9(e){W1=e}function qa(){return W1}const Ka=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],c={...o,path:a};let u="";const d=i.filter(p=>!!p).slice().reverse();for(const p of d)u=p(c,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},Z9=[];function re(e,t){const n=Ka({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,qa(),io].filter(i=>!!i)});e.common.issues.push(n)}class Ut{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return xe;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Ut.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:c}=o;if(a.status==="aborted"||c.status==="aborted")return xe;a.status==="dirty"&&t.dirty(),c.status==="dirty"&&t.dirty(),(typeof c.value<"u"||o.alwaysSet)&&(i[a.value]=c.value)}return{status:t.value,value:i}}}const xe=Object.freeze({status:"aborted"}),Z1=e=>({status:"dirty",value:e}),Wt=e=>({status:"valid",value:e}),Cu=e=>e.status==="aborted",Su=e=>e.status==="dirty",Va=e=>e.status==="valid",Ga=e=>typeof Promise<"u"&&e instanceof Promise;var de;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(de||(de={}));class Vn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Kp=(e,t)=>{if(Va(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Bn(e.common.issues);return this._error=n,this._error}}};function Se(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(c,u)=>c.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Oe{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Wr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Wr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Ut,ctx:{common:t.parent.common,data:t.data,parsedType:Wr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Ga(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Wr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return Kp(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Wr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Ga(o)?o:Promise.resolve(o));return Kp(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const c=t(o),u=()=>a.addIssue({code:q.custom,...i(o)});return typeof Promise<"u"&&c instanceof Promise?c.then(d=>d?!0:(u(),!1)):c?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new Un({schema:this,typeName:me.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return vr.create(this,this._def)}nullable(){return wi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return jn.create(this,this._def)}promise(){return rs.create(this,this._def)}or(t){return lo.create([this,t],this._def)}and(t){return co.create(this,t,this._def)}transform(t){return new Un({...Se(this._def),schema:this,typeName:me.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new go({...Se(this._def),innerType:this,defaultValue:n,typeName:me.ZodDefault})}brand(){return new K1({typeName:me.ZodBranded,type:this,...Se(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Ja({...Se(this._def),innerType:this,catchValue:n,typeName:me.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return ko.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const q9=/^c[^\s-]{8,}$/i,K9=/^[a-z][a-z0-9]*$/,V9=/[0-9A-HJKMNP-TV-Z]{26}/,G9=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,Q9=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,X9=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,Y9=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,J9=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,ek=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function tk(e,t){return!!((t==="v4"||!t)&&Y9.test(e)||(t==="v6"||!t)&&J9.test(e))}class Pn extends Oe{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:q.invalid_string,...de.errToObj(i)}),this.nonempty=t=>this.min(1,de.errToObj(t)),this.trim=()=>new Pn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Pn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Pn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==te.string){const a=this._getOrReturnCtx(t);return re(a,{code:q.invalid_type,expected:te.string,received:a.parsedType}),xe}const i=new Ut;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),re(o,{code:q.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),re(o,{code:q.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const c=t.data.length>a.value,u=t.data.length<a.value;(c||u)&&(o=this._getOrReturnCtx(t,o),c?re(o,{code:q.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&re(o,{code:q.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")Q9.test(t.data)||(o=this._getOrReturnCtx(t,o),re(o,{validation:"email",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")X9.test(t.data)||(o=this._getOrReturnCtx(t,o),re(o,{validation:"emoji",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")G9.test(t.data)||(o=this._getOrReturnCtx(t,o),re(o,{validation:"uuid",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")q9.test(t.data)||(o=this._getOrReturnCtx(t,o),re(o,{validation:"cuid",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")K9.test(t.data)||(o=this._getOrReturnCtx(t,o),re(o,{validation:"cuid2",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")V9.test(t.data)||(o=this._getOrReturnCtx(t,o),re(o,{validation:"ulid",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),re(o,{validation:"url",code:q.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),re(o,{validation:"regex",code:q.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),re(o,{code:q.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),re(o,{code:q.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),re(o,{code:q.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?ek(a).test(t.data)||(o=this._getOrReturnCtx(t,o),re(o,{code:q.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?tk(t.data,a.version)||(o=this._getOrReturnCtx(t,o),re(o,{validation:"ip",code:q.invalid_string,message:a.message}),i.dirty()):We.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Pn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...de.errToObj(t)})}url(t){return this._addCheck({kind:"url",...de.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...de.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...de.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...de.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...de.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...de.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...de.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...de.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...de.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...de.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...de.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...de.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...de.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...de.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...de.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Pn.create=e=>{var t;return new Pn({checks:[],typeName:me.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};function nk(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),c=parseInt(t.toFixed(o).replace(".",""));return a%c/Math.pow(10,o)}class Qr extends Oe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==te.number){const a=this._getOrReturnCtx(t);return re(a,{code:q.invalid_type,expected:te.number,received:a.parsedType}),xe}let i;const o=new Ut;for(const a of this._def.checks)a.kind==="int"?We.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),re(i,{code:q.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),re(i,{code:q.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),re(i,{code:q.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?nk(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),re(i,{code:q.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),re(i,{code:q.not_finite,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,de.toString(n))}gt(t,n){return this.setLimit("min",t,!1,de.toString(n))}lte(t,n){return this.setLimit("max",t,!0,de.toString(n))}lt(t,n){return this.setLimit("max",t,!1,de.toString(n))}setLimit(t,n,i,o){return new Qr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:de.toString(o)}]})}_addCheck(t){return new Qr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:de.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:de.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:de.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:de.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:de.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:de.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:de.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:de.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:de.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&We.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Qr.create=e=>new Qr({checks:[],typeName:me.ZodNumber,coerce:e?.coerce||!1,...Se(e)});class Xr extends Oe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==te.bigint){const a=this._getOrReturnCtx(t);return re(a,{code:q.invalid_type,expected:te.bigint,received:a.parsedType}),xe}let i;const o=new Ut;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),re(i,{code:q.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),re(i,{code:q.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),re(i,{code:q.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,de.toString(n))}gt(t,n){return this.setLimit("min",t,!1,de.toString(n))}lte(t,n){return this.setLimit("max",t,!0,de.toString(n))}lt(t,n){return this.setLimit("max",t,!1,de.toString(n))}setLimit(t,n,i,o){return new Xr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:de.toString(o)}]})}_addCheck(t){return new Xr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:de.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:de.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:de.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:de.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:de.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Xr.create=e=>{var t;return new Xr({checks:[],typeName:me.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};class so extends Oe{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==te.boolean){const i=this._getOrReturnCtx(t);return re(i,{code:q.invalid_type,expected:te.boolean,received:i.parsedType}),xe}return Wt(t.data)}}so.create=e=>new so({typeName:me.ZodBoolean,coerce:e?.coerce||!1,...Se(e)});class bi extends Oe{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==te.date){const a=this._getOrReturnCtx(t);return re(a,{code:q.invalid_type,expected:te.date,received:a.parsedType}),xe}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return re(a,{code:q.invalid_date}),xe}const i=new Ut;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),re(o,{code:q.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),re(o,{code:q.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):We.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new bi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:de.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:de.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}bi.create=e=>new bi({checks:[],coerce:e?.coerce||!1,typeName:me.ZodDate,...Se(e)});class Qa extends Oe{_parse(t){if(this._getType(t)!==te.symbol){const i=this._getOrReturnCtx(t);return re(i,{code:q.invalid_type,expected:te.symbol,received:i.parsedType}),xe}return Wt(t.data)}}Qa.create=e=>new Qa({typeName:me.ZodSymbol,...Se(e)});class oo extends Oe{_parse(t){if(this._getType(t)!==te.undefined){const i=this._getOrReturnCtx(t);return re(i,{code:q.invalid_type,expected:te.undefined,received:i.parsedType}),xe}return Wt(t.data)}}oo.create=e=>new oo({typeName:me.ZodUndefined,...Se(e)});class ao extends Oe{_parse(t){if(this._getType(t)!==te.null){const i=this._getOrReturnCtx(t);return re(i,{code:q.invalid_type,expected:te.null,received:i.parsedType}),xe}return Wt(t.data)}}ao.create=e=>new ao({typeName:me.ZodNull,...Se(e)});class ns extends Oe{constructor(){super(...arguments),this._any=!0}_parse(t){return Wt(t.data)}}ns.create=e=>new ns({typeName:me.ZodAny,...Se(e)});class vi extends Oe{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Wt(t.data)}}vi.create=e=>new vi({typeName:me.ZodUnknown,...Se(e)});class wr extends Oe{_parse(t){const n=this._getOrReturnCtx(t);return re(n,{code:q.invalid_type,expected:te.never,received:n.parsedType}),xe}}wr.create=e=>new wr({typeName:me.ZodNever,...Se(e)});class Xa extends Oe{_parse(t){if(this._getType(t)!==te.undefined){const i=this._getOrReturnCtx(t);return re(i,{code:q.invalid_type,expected:te.void,received:i.parsedType}),xe}return Wt(t.data)}}Xa.create=e=>new Xa({typeName:me.ZodVoid,...Se(e)});class jn extends Oe{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==te.array)return re(n,{code:q.invalid_type,expected:te.array,received:n.parsedType}),xe;if(o.exactLength!==null){const c=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(c||u)&&(re(n,{code:c?q.too_big:q.too_small,minimum:u?o.exactLength.value:void 0,maximum:c?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(re(n,{code:q.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(re(n,{code:q.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((c,u)=>o.type._parseAsync(new Vn(n,c,n.path,u)))).then(c=>Ut.mergeArray(i,c));const a=[...n.data].map((c,u)=>o.type._parseSync(new Vn(n,c,n.path,u)));return Ut.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new jn({...this._def,minLength:{value:t,message:de.toString(n)}})}max(t,n){return new jn({...this._def,maxLength:{value:t,message:de.toString(n)}})}length(t,n){return new jn({...this._def,exactLength:{value:t,message:de.toString(n)}})}nonempty(t){return this.min(1,t)}}jn.create=(e,t)=>new jn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:me.ZodArray,...Se(t)});function Fi(e){if(e instanceof dt){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=vr.create(Fi(i))}return new dt({...e._def,shape:()=>t})}else return e instanceof jn?new jn({...e._def,type:Fi(e.element)}):e instanceof vr?vr.create(Fi(e.unwrap())):e instanceof wi?wi.create(Fi(e.unwrap())):e instanceof Gn?Gn.create(e.items.map(t=>Fi(t))):e}class dt extends Oe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=We.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==te.object){const p=this._getOrReturnCtx(t);return re(p,{code:q.invalid_type,expected:te.object,received:p.parsedType}),xe}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:c}=this._getCached(),u=[];if(!(this._def.catchall instanceof wr&&this._def.unknownKeys==="strip"))for(const p in o.data)c.includes(p)||u.push(p);const d=[];for(const p of c){const h=a[p],m=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new Vn(o,m,o.path,p)),alwaysSet:p in o.data})}if(this._def.catchall instanceof wr){const p=this._def.unknownKeys;if(p==="passthrough")for(const h of u)d.push({key:{status:"valid",value:h},value:{status:"valid",value:o.data[h]}});else if(p==="strict")u.length>0&&(re(o,{code:q.unrecognized_keys,keys:u}),i.dirty());else if(p!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const p=this._def.catchall;for(const h of u){const m=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new Vn(o,m,o.path,h)),alwaysSet:h in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const p=[];for(const h of d){const m=await h.key;p.push({key:m,value:await h.value,alwaysSet:h.alwaysSet})}return p}).then(p=>Ut.mergeObjectSync(i,p)):Ut.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return de.errToObj,new dt({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,c,u;const d=(c=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&c!==void 0?c:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=de.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new dt({...this._def,unknownKeys:"strip"})}passthrough(){return new dt({...this._def,unknownKeys:"passthrough"})}extend(t){return new dt({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new dt({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:me.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new dt({...this._def,catchall:t})}pick(t){const n={};return We.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new dt({...this._def,shape:()=>n})}omit(t){const n={};return We.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new dt({...this._def,shape:()=>n})}deepPartial(){return Fi(this)}partial(t){const n={};return We.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new dt({...this._def,shape:()=>n})}required(t){const n={};return We.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof vr;)a=a._def.innerType;n[i]=a}}),new dt({...this._def,shape:()=>n})}keyof(){return q1(We.objectKeys(this.shape))}}dt.create=(e,t)=>new dt({shape:()=>e,unknownKeys:"strip",catchall:wr.create(),typeName:me.ZodObject,...Se(t)});dt.strictCreate=(e,t)=>new dt({shape:()=>e,unknownKeys:"strict",catchall:wr.create(),typeName:me.ZodObject,...Se(t)});dt.lazycreate=(e,t)=>new dt({shape:e,unknownKeys:"strip",catchall:wr.create(),typeName:me.ZodObject,...Se(t)});class lo extends Oe{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const c=a.map(u=>new Bn(u.ctx.common.issues));return re(n,{code:q.invalid_union,unionErrors:c}),xe}if(n.common.async)return Promise.all(i.map(async a=>{const c={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:c}),ctx:c}})).then(o);{let a;const c=[];for(const d of i){const p={...n,common:{...n.common,issues:[]},parent:null},h=d._parseSync({data:n.data,path:n.path,parent:p});if(h.status==="valid")return h;h.status==="dirty"&&!a&&(a={result:h,ctx:p}),p.common.issues.length&&c.push(p.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=c.map(d=>new Bn(d));return re(n,{code:q.invalid_union,unionErrors:u}),xe}}get options(){return this._def.options}}lo.create=(e,t)=>new lo({options:e,typeName:me.ZodUnion,...Se(t)});const La=e=>e instanceof fo?La(e.schema):e instanceof Un?La(e.innerType()):e instanceof ho?[e.value]:e instanceof Yr?e.options:e instanceof po?Object.keys(e.enum):e instanceof go?La(e._def.innerType):e instanceof oo?[void 0]:e instanceof ao?[null]:null;class Sl extends Oe{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==te.object)return re(n,{code:q.invalid_type,expected:te.object,received:n.parsedType}),xe;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(re(n,{code:q.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),xe)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const c=La(a.shape[t]);if(!c)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of c){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new Sl({typeName:me.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Se(i)})}}function Eu(e,t){const n=Wr(e),i=Wr(t);if(e===t)return{valid:!0,data:e};if(n===te.object&&i===te.object){const o=We.objectKeys(t),a=We.objectKeys(e).filter(u=>o.indexOf(u)!==-1),c={...e,...t};for(const u of a){const d=Eu(e[u],t[u]);if(!d.valid)return{valid:!1};c[u]=d.data}return{valid:!0,data:c}}else if(n===te.array&&i===te.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const c=e[a],u=t[a],d=Eu(c,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===te.date&&i===te.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class co extends Oe{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,c)=>{if(Cu(a)||Cu(c))return xe;const u=Eu(a.value,c.value);return u.valid?((Su(a)||Su(c))&&n.dirty(),{status:n.value,value:u.data}):(re(i,{code:q.invalid_intersection_types}),xe)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,c])=>o(a,c)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}co.create=(e,t,n)=>new co({left:e,right:t,typeName:me.ZodIntersection,...Se(n)});class Gn extends Oe{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==te.array)return re(i,{code:q.invalid_type,expected:te.array,received:i.parsedType}),xe;if(i.data.length<this._def.items.length)return re(i,{code:q.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),xe;!this._def.rest&&i.data.length>this._def.items.length&&(re(i,{code:q.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((c,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Vn(i,c,i.path,u)):null}).filter(c=>!!c);return i.common.async?Promise.all(a).then(c=>Ut.mergeArray(n,c)):Ut.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Gn({...this._def,rest:t})}}Gn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Gn({items:e,typeName:me.ZodTuple,rest:null,...Se(t)})};class uo extends Oe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==te.object)return re(i,{code:q.invalid_type,expected:te.object,received:i.parsedType}),xe;const o=[],a=this._def.keyType,c=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Vn(i,u,i.path,u)),value:c._parse(new Vn(i,i.data[u],i.path,u))});return i.common.async?Ut.mergeObjectAsync(n,o):Ut.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Oe?new uo({keyType:t,valueType:n,typeName:me.ZodRecord,...Se(i)}):new uo({keyType:Pn.create(),valueType:t,typeName:me.ZodRecord,...Se(n)})}}class Ya extends Oe{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==te.map)return re(i,{code:q.invalid_type,expected:te.map,received:i.parsedType}),xe;const o=this._def.keyType,a=this._def.valueType,c=[...i.data.entries()].map(([u,d],p)=>({key:o._parse(new Vn(i,u,i.path,[p,"key"])),value:a._parse(new Vn(i,d,i.path,[p,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of c){const p=await d.key,h=await d.value;if(p.status==="aborted"||h.status==="aborted")return xe;(p.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(p.value,h.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of c){const p=d.key,h=d.value;if(p.status==="aborted"||h.status==="aborted")return xe;(p.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(p.value,h.value)}return{status:n.value,value:u}}}}Ya.create=(e,t,n)=>new Ya({valueType:t,keyType:e,typeName:me.ZodMap,...Se(n)});class _i extends Oe{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==te.set)return re(i,{code:q.invalid_type,expected:te.set,received:i.parsedType}),xe;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(re(i,{code:q.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(re(i,{code:q.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function c(d){const p=new Set;for(const h of d){if(h.status==="aborted")return xe;h.status==="dirty"&&n.dirty(),p.add(h.value)}return{status:n.value,value:p}}const u=[...i.data.values()].map((d,p)=>a._parse(new Vn(i,d,i.path,p)));return i.common.async?Promise.all(u).then(d=>c(d)):c(u)}min(t,n){return new _i({...this._def,minSize:{value:t,message:de.toString(n)}})}max(t,n){return new _i({...this._def,maxSize:{value:t,message:de.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}_i.create=(e,t)=>new _i({valueType:e,minSize:null,maxSize:null,typeName:me.ZodSet,...Se(t)});class qi extends Oe{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==te.function)return re(n,{code:q.invalid_type,expected:te.function,received:n.parsedType}),xe;function i(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,qa(),io].filter(p=>!!p),issueData:{code:q.invalid_arguments,argumentsError:d}})}function o(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,qa(),io].filter(p=>!!p),issueData:{code:q.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},c=n.data;return this._def.returns instanceof rs?Wt(async(...u)=>{const d=new Bn([]),p=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),h=await c(...p);return await this._def.returns._def.type.parseAsync(h,a).catch(v=>{throw d.addIssue(o(h,v)),d})}):Wt((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Bn([i(u,d.error)]);const p=c(...d.data),h=this._def.returns.safeParse(p,a);if(!h.success)throw new Bn([o(p,h.error)]);return h.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new qi({...this._def,args:Gn.create(t).rest(vi.create())})}returns(t){return new qi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new qi({args:t||Gn.create([]).rest(vi.create()),returns:n||vi.create(),typeName:me.ZodFunction,...Se(i)})}}class fo extends Oe{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}fo.create=(e,t)=>new fo({getter:e,typeName:me.ZodLazy,...Se(t)});class ho extends Oe{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return re(n,{received:n.data,code:q.invalid_literal,expected:this._def.value}),xe}return{status:"valid",value:t.data}}get value(){return this._def.value}}ho.create=(e,t)=>new ho({value:e,typeName:me.ZodLiteral,...Se(t)});function q1(e,t){return new Yr({values:e,typeName:me.ZodEnum,...Se(t)})}class Yr extends Oe{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return re(n,{expected:We.joinValues(i),received:n.parsedType,code:q.invalid_type}),xe}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return re(n,{received:n.data,code:q.invalid_enum_value,options:i}),xe}return Wt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Yr.create(t)}exclude(t){return Yr.create(this.options.filter(n=>!t.includes(n)))}}Yr.create=q1;class po extends Oe{_parse(t){const n=We.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==te.string&&i.parsedType!==te.number){const o=We.objectValues(n);return re(i,{expected:We.joinValues(o),received:i.parsedType,code:q.invalid_type}),xe}if(n.indexOf(t.data)===-1){const o=We.objectValues(n);return re(i,{received:i.data,code:q.invalid_enum_value,options:o}),xe}return Wt(t.data)}get enum(){return this._def.values}}po.create=(e,t)=>new po({values:e,typeName:me.ZodNativeEnum,...Se(t)});class rs extends Oe{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==te.promise&&n.common.async===!1)return re(n,{code:q.invalid_type,expected:te.promise,received:n.parsedType}),xe;const i=n.parsedType===te.promise?n.data:Promise.resolve(n.data);return Wt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}rs.create=(e,t)=>new rs({type:e,typeName:me.ZodPromise,...Se(t)});class Un extends Oe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===me.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const c=o.transform(i.data);return i.common.async?Promise.resolve(c).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:c,path:i.path,parent:i})}const a={addIssue:c=>{re(i,c),c.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const c=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?xe:(u.status==="dirty"&&n.dirty(),c(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?xe:(u.status==="dirty"&&n.dirty(),c(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Va(c))return c;const u=o.transform(c.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>Va(c)?Promise.resolve(o.transform(c.value,a)).then(u=>({status:n.value,value:u})):c);We.assertNever(o)}}Un.create=(e,t,n)=>new Un({schema:e,typeName:me.ZodEffects,effect:t,...Se(n)});Un.createWithPreprocess=(e,t,n)=>new Un({schema:t,effect:{type:"preprocess",transform:e},typeName:me.ZodEffects,...Se(n)});class vr extends Oe{_parse(t){return this._getType(t)===te.undefined?Wt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}vr.create=(e,t)=>new vr({innerType:e,typeName:me.ZodOptional,...Se(t)});class wi extends Oe{_parse(t){return this._getType(t)===te.null?Wt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}wi.create=(e,t)=>new wi({innerType:e,typeName:me.ZodNullable,...Se(t)});class go extends Oe{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===te.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}go.create=(e,t)=>new go({innerType:e,typeName:me.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Se(t)});class Ja extends Oe{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Ga(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Bn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Bn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Ja.create=(e,t)=>new Ja({innerType:e,typeName:me.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Se(t)});class el extends Oe{_parse(t){if(this._getType(t)!==te.nan){const i=this._getOrReturnCtx(t);return re(i,{code:q.invalid_type,expected:te.nan,received:i.parsedType}),xe}return{status:"valid",value:t.data}}}el.create=e=>new el({typeName:me.ZodNaN,...Se(e)});const rk=Symbol("zod_brand");class K1 extends Oe{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class ko extends Oe{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?xe:a.status==="dirty"?(n.dirty(),Z1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?xe:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new ko({in:t,out:n,typeName:me.ZodPipeline})}}const V1=(e,t={},n)=>e?ns.create().superRefine((i,o)=>{var a,c;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(c=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&c!==void 0?c:!0,p=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...p,fatal:d})}}):ns.create(),ik={object:dt.lazycreate};var me;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(me||(me={}));const sk=(e,t={message:`Input not instance of ${e.name}`})=>V1(n=>n instanceof e,t),G1=Pn.create,Q1=Qr.create,ok=el.create,ak=Xr.create,X1=so.create,lk=bi.create,ck=Qa.create,uk=oo.create,dk=ao.create,fk=ns.create,hk=vi.create,pk=wr.create,gk=Xa.create,mk=jn.create,vk=dt.create,yk=dt.strictCreate,bk=lo.create,_k=Sl.create,wk=co.create,xk=Gn.create,$k=uo.create,kk=Ya.create,Ck=_i.create,Sk=qi.create,Ek=fo.create,Tk=ho.create,Ak=Yr.create,Ik=po.create,Rk=rs.create,Vp=Un.create,Ok=vr.create,Lk=wi.create,Pk=Un.createWithPreprocess,Mk=ko.create,Bk=()=>G1().optional(),jk=()=>Q1().optional(),Uk=()=>X1().optional(),Dk={string:e=>Pn.create({...e,coerce:!0}),number:e=>Qr.create({...e,coerce:!0}),boolean:e=>so.create({...e,coerce:!0}),bigint:e=>Xr.create({...e,coerce:!0}),date:e=>bi.create({...e,coerce:!0})},Nk=xe;var xt=Object.freeze({__proto__:null,defaultErrorMap:io,setErrorMap:W9,getErrorMap:qa,makeIssue:Ka,EMPTY_PATH:Z9,addIssueToContext:re,ParseStatus:Ut,INVALID:xe,DIRTY:Z1,OK:Wt,isAborted:Cu,isDirty:Su,isValid:Va,isAsync:Ga,get util(){return We},get objectUtil(){return ku},ZodParsedType:te,getParsedType:Wr,ZodType:Oe,ZodString:Pn,ZodNumber:Qr,ZodBigInt:Xr,ZodBoolean:so,ZodDate:bi,ZodSymbol:Qa,ZodUndefined:oo,ZodNull:ao,ZodAny:ns,ZodUnknown:vi,ZodNever:wr,ZodVoid:Xa,ZodArray:jn,ZodObject:dt,ZodUnion:lo,ZodDiscriminatedUnion:Sl,ZodIntersection:co,ZodTuple:Gn,ZodRecord:uo,ZodMap:Ya,ZodSet:_i,ZodFunction:qi,ZodLazy:fo,ZodLiteral:ho,ZodEnum:Yr,ZodNativeEnum:po,ZodPromise:rs,ZodEffects:Un,ZodTransformer:Un,ZodOptional:vr,ZodNullable:wi,ZodDefault:go,ZodCatch:Ja,ZodNaN:el,BRAND:rk,ZodBranded:K1,ZodPipeline:ko,custom:V1,Schema:Oe,ZodSchema:Oe,late:ik,get ZodFirstPartyTypeKind(){return me},coerce:Dk,any:fk,array:mk,bigint:ak,boolean:X1,date:lk,discriminatedUnion:_k,effect:Vp,enum:Ak,function:Sk,instanceof:sk,intersection:wk,lazy:Ek,literal:Tk,map:kk,nan:ok,nativeEnum:Ik,never:pk,null:dk,nullable:Lk,number:Q1,object:vk,oboolean:Uk,onumber:jk,optional:Ok,ostring:Bk,pipeline:Mk,preprocess:Pk,promise:Rk,record:$k,set:Ck,strictObject:yk,string:G1,symbol:ck,transformer:Vp,tuple:xk,undefined:uk,union:bk,unknown:hk,void:gk,NEVER:Nk,ZodIssueCode:q,quotelessJson:F9,ZodError:Bn});const Hk=/^[0-9a-f]{64}$/,Qs=e=>{const t=typeof e=="string"&&e.length===64&&Hk.test(e);return t||console.warn("invalid id is ignored: ",e),t},zk=xt.tuple([xt.literal("emoji"),xt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),xt.string().url()]),Fk=e=>t=>e.safeParse(t).success,kn=e=>{let t;return{get rawEvent(){return e},get id(){return e.id},get pubkey(){return e.pubkey},get createdAt(){return e.created_at},get content(){return e.content},get tags(){return e.tags},createdAtAsDate(){return new Date(e.created_at*1e3)},pTags(){return e.tags.filter(([n,i])=>n==="p"&&Qs(i))},eTags(){return e.tags.filter(([n,i])=>n==="e"&&Qs(i))},emojiTags(){return e.tags.filter(Fk(zk))},findTagsByName(n){return e.tags.filter(([i])=>i===n)},taggedEventIds(){return this.eTags().map(([,n])=>n)},lastTaggedEventId(){const n=this.taggedEventIds();if(n.length!==0)return n[n.length-1]},markedEventTags(){if(e.kind!==yt.Text)throw new Error("kind should be 1");if(t!=null)return t;const n=e.tags.map((o,a)=>[o,a]).filter(([[o,a]])=>o==="e"&&Qs(a)),i=(o,a)=>{if(e.kind===1)return o==="root"||o==="reply"||o==="mention"?o:n.length===1?"reply":a===0?"root":n.length===2||a===n.length-1?"reply":"mention"};return t=n.map(([[,o,a,c],u],d)=>({id:o,relayUrl:a,marker:i(c,d),index:u})),t},replyingToEvent(){return this.markedEventTags().find(({marker:n})=>n==="reply")},rootEvent(){return this.markedEventTags().find(({marker:n})=>n==="root")},mentionedEvents(){return this.markedEventTags().filter(({marker:n})=>n==="mention")},mentionedPubkeys(){return gr(this.pTags().map(([,n])=>n))},contentWarning(){const n=e.tags.find(([o])=>o==="content-warning");return n==null?{contentWarning:!1}:{contentWarning:!0,reason:(n[1]?.length??0)>0?n[1]:void 0}},containsEventMention(n){const i=e.tags.findIndex(([o,a])=>o==="e"&&a===n);return i<0?!1:this.containsEventMentionIndex(i)},containsEventMentionIndex(n){return n<0||n>=e.tags.length?!1:e.content.includes(`#[${n}]`)},getEmojiUrl(n){const i=this.emojiTags().find(([,a])=>a===n);if(i==null)return null;const[,,o]=i;return o}}},Wk=()=>{const e=[...U9];return window.navigator.language.includes("ja")&&e.push(...D9),e},Y1=()=>({relayUrls:Wk(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),Zk=e=>JSON.stringify(e),qk=e=>({...Y1(),...JSON.parse(e)}),Kk=v4(()=>window.localStorage,Zk,qk),[Ws,Xt]=y4("RabbitConfig",Y1(),Kk),Ue=()=>{const e=k=>{Xt("relayUrls",P=>gr([...P,k]))},t=k=>{Xt("relayUrls",P=>P.filter(B=>B!==k))},n=k=>{Xt("mutedPubkeys",P=>gr([...P,k]))},i=k=>{Xt("mutedPubkeys",P=>P.filter(B=>B!==k))},o=k=>{Xt("mutedKeywords",P=>gr([...P,k]))},a=k=>{Xt("mutedKeywords",P=>P.filter(B=>B!==k))},c=k=>{Xt("columns",P=>{const B=P.findIndex(E=>E.id===k.id);if(B>=0){const E=[...P];return E.splice(B,1,k),E}return[...P,k]})},u=(k,P)=>{Xt("columns",B=>{const E=P-1,T=Math.max(Math.min(E,B.length),0),O=B.findIndex(ie=>ie.id===k);if(O<0||T===O)return B;console.log(O,T);const H=[...B],[W]=H.splice(O,1);return H.splice(T,0,W),H})},d=k=>{Xt("columns",P=>P.filter(B=>B.id!==k))},p=k=>{Xt("customEmojis",P=>({...P,[k.shortcode]:k}))},h=k=>{Xt("customEmojis",P=>{const B=Object.fromEntries(k.map(E=>[E.shortcode,E]));return{...P,...B}})},m=k=>{Xt("customEmojis",P=>({...P,[k]:void 0}))},v=k=>Ws.customEmojis[k],w=k=>Ws.mutedPubkeys.includes(k),$=k=>k.kind===yt.Text?Ws.mutedKeywords.some(P=>k.content.includes(P)):!1;return{config:()=>Ws,setConfig:Xt,addRelay:e,removeRelay:t,saveColumn:c,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:k})=>{if((Ws.columns?.length??0)>0)return;const P=[D1({width:"widest",pubkey:k}),N1({pubkey:k}),z1({name:"自分の投稿",pubkey:k}),F1({name:"自分のリアクション",pubkey:k})];navigator.language.includes("ja")&&P.splice(2,0,H1()),Xt("columns",()=>[...P])},saveEmoji:p,saveEmojis:h,removeEmoji:m,getEmoji:v,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:w,shouldMuteEvent:k=>{const P=kn(k);return w(k.pubkey)||P.mentionedPubkeys().some(w)||k.kind===yt.Text&&$(k)}}},Vk=()=>{let e,t;const n=new Promise((i,o)=>{e=i,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:n,resolve:e,reject:t}},Gk=e=>{const t=Ve(e),n=Ve(()=>t().batchSize??100),i=Ve(()=>t().interval??2e3),[o,a]=we(0),[c,u]=we([]);let d;const p=()=>{const{executor:S}=t(),A=c();A.length>0&&(u([]),S(A)),d!=null&&clearTimeout(d),d=void 0},h=()=>{const S=o();return a(A=>A+1),S},m=()=>{d==null&&(d=setTimeout(()=>{p()},i()))},v=S=>{c().length<n()?u(A=>[...A,S]):(p(),u([S]))},w=S=>{u(A=>A.filter(k=>k.id!==S))};return{exec:async(S,A)=>{const{promise:k,resolve:P,reject:B}=Vk(),E=h();return v({id:E,args:S,resolve:P,reject:B}),m(),A?.addEventListener("abort",()=>{w(E),B(new Error("AbortError"))}),k}}},[Qk]=we(new z7),El=()=>Qk,[Xk,Gp]=Vi({activeSubscriptions:0,activeBatchSubscriptions:0}),J1=()=>({stats:Xk,setActiveSubscriptions:n=>Gp("activeSubscriptions",n),setActiveBatchSubscriptions:n=>Gp("activeBatchSubscriptions",n)}),ei=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const c=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(c))},e)});return Promise.race([n,i])},Yk=/\p{Emoji_Presentation}/u;let Tu=0;const{setActiveBatchSubscriptions:Jk}=J1();setInterval(()=>{Jk(Tu)},1e3);const eC={events:[],completed:!0},tC=()=>eC,{exec:Co}=Gk(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,c=new Map;e.forEach(T=>{if(T.args.type==="Event"){const O=n.get(T.args.eventId)??[];n.set(T.args.eventId,[...O,T])}else if(T.args.type==="Profile"){const O=t.get(T.args.pubkey)??[];t.set(T.args.pubkey,[...O,T])}else if(T.args.type==="Reactions"){const O=i.get(T.args.mentionedEventId)??[];i.set(T.args.mentionedEventId,[...O,T])}else if(T.args.type==="Reposts"){const O=o.get(T.args.mentionedEventId)??[];o.set(T.args.mentionedEventId,[...O,T])}else if(T.args.type==="ZapReceipts"){const O=a.get(T.args.mentionedEventId)??[];o.set(T.args.mentionedEventId,[...O,T])}else if(T.args.type==="Followings"){const O=c.get(T.args.pubkey)??[];c.set(T.args.pubkey,[...O,T])}});const u=[...n.keys()],d=[...t.keys()],p=[...i.keys()],h=[...o.keys()],m=[...a.keys()],v=[...c.keys()],w=[];if(u.length>0&&w.push({ids:u}),d.length>0&&w.push({kinds:[yt.Metadata],authors:d}),p.length>0&&w.push({kinds:[yt.Reaction],"#e":p}),h.length>0&&w.push({kinds:[6],"#e":h}),m.length>0&&w.push({kinds:[9735],"#e":m}),v.length>0&&w.push({kinds:[yt.Contacts],authors:v}),w.length===0)return;const $=new Map,S=(T,O)=>{T.forEach(H=>{const W=$.get(H.id)??we({events:[],completed:!1});$.set(H.id,W);const[ie,K]=W;K(se=>({...se,events:[...se.events,O]})),H.resolve(ie)})},A=()=>{e.forEach(T=>{const O=$.get(T.id);if(O!=null){const H=O[1];H(W=>({...W,completed:!0}))}else T.resolve(tC)})},{config:k,shouldMuteEvent:P}=Ue(),E=El()().sub(k().relayUrls,w,{});Tu+=1,E.on("event",T=>{if(T.kind===yt.Metadata){const O=t.get(T.pubkey)??[];S(O,T);return}if(T.kind===yt.Reaction){const O=kn(T).lastTaggedEventId();if(O!=null){const H=i.get(O)??[];S(H,T)}}else if(T.kind===6){const O=kn(T).lastTaggedEventId();if(O!=null){const H=o.get(O)??[];S(H,T)}}else if(T.kind===yt.Zap)kn(T).eTags().forEach(([,H])=>{const W=o.get(H)??[];S(W,T)});else if(T.kind===yt.Contacts){const O=c.get(T.pubkey)??[];S(O,T)}else{const O=n.get(T.id)??[];O.length>0?S(O,T):console.warn("unknown event received")}}),E.on("eose",()=>{A(),E.unsub(),Tu-=1})}})),em=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),vs=e=>{const t=as(),n=Ve(e),i=Ve(()=>["useProfile",n()]),o=ls(i,({queryKey:u,signal:d})=>{const[,p]=u;if(p==null)return Promise.resolve(null);const{pubkey:h}=p;if(h.startsWith("npub1"))return Promise.resolve(null);const m=Co({type:"Profile",pubkey:h},d).then(v=>{const w=()=>{const $=em(v().events);if($==null)throw new Error(`profile not found: ${h}`);return $};return dl(v).subscribe(()=>{try{t.setQueryData(u,w())}catch($){console.error("error occurred while updating profile cache: ",$)}}),w()});return ei(15e3,`useProfile: ${h}`)(m)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3});return{profile:Ve(()=>{if(o.data==null)return null;const{content:u}=o.data;if(u==null||u.length===0)return null;try{return JSON.parse(u)}catch(d){return console.warn("failed to parse profile (kind 0): ",d,u),null}}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},tm=e=>{const t=Ve(e),n=ls(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return null;const{eventId:u}=c,d=Co({type:"Event",eventId:u},a).then(p=>{const h=p().events[0];if(h==null)throw new Error(`event not found: ${u}`);return h});return ei(15e3,`useEvent: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},nC=e=>{const t=as(),n=Ve(e),i=Ve(()=>["useReactions",n()]),o=ls(i,({queryKey:h,signal:m})=>{const[,v]=h;if(v==null)return[];const{eventId:w}=v,$=Co({type:"Reactions",mentionedEventId:w},m).then(S=>{const A=()=>S().events;return dl(S).subscribe(()=>{t.setQueryData(h,A())}),A()});return ei(15e3,`useReactions: ${w}`)($)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reactions:a,reactionsGroupedByContent:()=>{const h=new Map;return a().forEach(m=>{const v=h.get(m.content)??[];v.push(m),h.set(m.content,v)}),h},isReactedBy:h=>a().findIndex(m=>m.pubkey===h)!==-1,isReactedByWithEmoji:h=>a().findIndex(m=>m.pubkey===h&&Yk.test(m.content))!==-1,invalidateReactions:()=>t.invalidateQueries(i()),query:o}},rC=e=>{const t=as(),n=Ve(e),i=Ve(()=>["useReposts",n()]),o=ls(i,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return[];const{eventId:m}=h,v=Co({type:"Reposts",mentionedEventId:m},p).then(w=>{const $=()=>w().events;return dl(w).subscribe(()=>{t.setQueryData(d,$())}),$()});return ei(15e3,`useReposts: ${m}`)(v)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reposts:a,isRepostedBy:d=>a().findIndex(p=>p.pubkey===d)!==-1,invalidateReposts:()=>t.invalidateQueries(i()),query:o}},Au=e=>{const t=as(),n=Ve(e),i=()=>["useFollowings",n()],o=ls(i,({queryKey:d,signal:p})=>{console.debug("useFollowings");const[,h]=d;if(h==null)return Promise.resolve(null);const{pubkey:m}=h,v=Co({type:"Followings",pubkey:m},p).then(w=>{const $=()=>{const S=em(w().events);if(S==null)throw new Error(`followings not found: ${m}`);return S};return dl(w).subscribe(()=>{try{t.setQueryData(d,$())}catch(S){console.error("error occurred while updating followings cache: ",S)}}),$()});return ei(15e3,`useFollowings: ${m}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return kn(o.data).pTags().forEach(h=>{const[,m,v,w]=h,$={pubkey:m,petname:w};v!=null&&v.length>0&&($.mainRelayUrl=v),d.push($)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},cn=e=>t=>e.some(n=>n==null)?null:t(e),iC=M("<span>投稿が見つかりません"),sC=M('<div class="truncate">読み込み中 '),mo=e=>{const[t,n]=l4(e,["eventId"]),{shouldMuteEvent:i}=Ue(),{event:o,query:a}=tm(()=>cn([t.eventId])(([u])=>({eventId:u}))),c=()=>{const u=o();return u!=null&&i(u)};return _(Mn,{get fallback(){return(()=>{const u=iC();return u.firstChild,I(u,()=>e.eventId,null),u})()},get children(){return[_(Fe,{get when(){return c()},children:null}),_(Fe,{get when(){return o()},keyed:!0,children:u=>_(Fm,c4({event:u},n))}),_(Fe,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=sC();return d.firstChild,I(d,_(ro,{eventId:u}),null),d})()})]}})},{npubEncode:oC}=$o,Tl=e=>{try{return oC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Al=e=>{const{profile:t}=vs(()=>({pubkey:e.pubkey}));return _(Mn,{get fallback(){return Tl(e.pubkey)},get children(){return[_(Fe,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),_(Fe,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",Ve(()=>t()?.name)]}})]}})},nm=e=>{const[t,n]=we(new Date);return pr(()=>{const i=setInterval(()=>{n(new Date)},e().interval);br(()=>clearInterval(i))}),t},aC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},Qp=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,lC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},cC=e=>{switch(e.kind){case"today":return Qp(e.value);case"yesterday":return`昨日 ${Qp(e.value)}`;case"abs":default:return e.value.toLocaleString()}},uC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,dC=(e,t)=>{const n=uC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},Xp=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),fC=e=>new Date(+e-24*60*60*1e3),rm=(e,t,n)=>Xp(e,t)?n({kind:"today",value:e}):Xp(e,fC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),hC=(e,t=new Date)=>rm(e,t,lC),pC=(e,t=new Date)=>rm(e,t,cC),Yp=(e,t=new Date,n=aC)=>n(dC(e,t)),Jp=nm(()=>({interval:7e3})),e0=nm(()=>({interval:60*1e3})),im=()=>{const{config:e}=Ue();return t=>{switch(e().dateFormat){case"absolute-long":return hC(t,e0());case"absolute-short":return pC(t,e0());case"relative":return Yp(t,Jp());default:return Yp(t,Jp())}}},[gC,Hi]=we({type:"Closed"}),ti=()=>({modalState:gC,setModalState:Hi,showProfile:a=>{Hi({type:"Profile",pubkey:a})},showProfileEdit:()=>{Hi({type:"ProfileEdit"})},showAddColumn:()=>{Hi({type:"AddColumn"})},showAbout:()=>{Hi({type:"About"})},closeModal:()=>{Hi({type:"Closed"})}}),mC=M('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),sm=e=>{const{showProfile:t}=ti(),n=im(),i=Ve(()=>kn(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=mC(),c=a.firstChild,u=c.firstChild,d=u.nextSibling,p=d.firstChild,h=d.nextSibling,m=c.nextSibling;return I(u,_(j1,{})),p.$$click=()=>t(e.event.pubkey),I(p,_(Al,{get pubkey(){return e.event.pubkey}})),I(h,()=>n(i().createdAtAsDate())),I(m,_(mo,{get eventId(){return o()}})),a})()};_t(["click"]);const vC=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),yC=(e={})=>(()=>{const t=vC();return Xe(t,e,!0,!0),t})(),bC=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),om=(e={})=>(()=>{const t=bC();return Xe(t,e,!0,!0),t})(),_C=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),gd=(e={})=>(()=>{const t=_C();return Xe(t,e,!0,!0),t})(),wC=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),am=(e={})=>(()=>{const t=wC();return Xe(t,e,!0,!0),t})(),xC=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),md=(e={})=>(()=>{const t=xC();return Xe(t,e,!0,!0),t})(),$C=M('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),vd=e=>{let t,n;const[i,o]=we(!1),[a,c]=we({}),u=u4(()=>e.children),d=()=>o(!1),p=()=>o($=>!$),h=$=>{const S=$.target;S!=null&&!n?.contains(S)&&d()},m=()=>{document.addEventListener("mousedown",h)},v=()=>{document.removeEventListener("mousedown",h)},w=()=>{if(t==null||n==null)return;const $=t?.getBoundingClientRect(),S=n?.getBoundingClientRect();let{top:A,left:k}=$;e.position==="left"?k-=$.width:e.position==="right"?k+=$.width:e.position==="top"?(A-=$.height,k-=$.left+$.width/2):(A+=$.height,k+=$.width/2),A=Math.min(A,window.innerHeight-S.height),k=Math.min(k,window.innerWidth-S.width),c({left:`${k}px`,top:`${A}px`})};return pr(()=>{i()?(m(),e.onOpen?.()):(v(),e.onClose?.())}),pr(ul(u,()=>{w()})),pr(()=>{i()&&w()}),dn(()=>{e.ref?.({close:d})}),br(()=>v()),(()=>{const $=$C(),S=$.firstChild,A=S.nextSibling;S.$$click=()=>{p(),w()};const k=t;typeof k=="function"?_r(k,S):t=S,I(S,()=>e.button);const P=n;return typeof P=="function"?_r(P,A):n=A,I(A,u),Pe(B=>{const E=!i(),T=!!i(),O=a();return E!==B._v$&&A.classList.toggle("hidden",B._v$=E),T!==B._v$2&&A.classList.toggle("block",B._v$2=T),B._v$3=d4(A,O,B._v$3),B},{_v$:void 0,_v$2:void 0,_v$3:void 0}),$})()};_t(["click"]);const kC=M('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),CC=M('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),SC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=kC(),i=n.firstChild;return i.$$click=t,I(i,()=>e.item.content()),n})()},lm=e=>{let t;const n=()=>t?.close();return _(vd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=CC();return I(i,_(jt,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>_(SC,{item:o,onClose:n})})),i}})};_t(["click"]);function cm(e){return e&&e.__esModule?e.default:e}function On(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Il,he,um,Xs,dm,t0,tl={},fm=[],EC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function qr(e,t){for(var n in t)e[n]=t[n];return e}function hm(e){var t=e.parentNode;t&&t.removeChild(e)}function Iu(e,t,n){var i,o,a,c={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?Il.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return Pa(e,c,i,o,null)}function Pa(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++um};return o==null&&he.vnode!=null&&he.vnode(a),a}function ur(){return{current:null}}function is(e){return e.children}function Zn(e,t){this.props=e,this.context=t}function ss(e,t){if(t==null)return e.__?ss(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ss(e):null}function pm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return pm(e)}}function n0(e){(!e.__d&&(e.__d=!0)&&Xs.push(e)&&!nl.__r++||t0!==he.debounceRendering)&&((t0=he.debounceRendering)||dm)(nl)}function nl(){for(var e;nl.__r=Xs.length;)e=Xs.sort(function(t,n){return t.__v.__b-n.__v.__b}),Xs=[],e.some(function(t){var n,i,o,a,c,u;t.__d&&(c=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=qr({},a)).__v=a.__v+1,yd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[c]:null,i,c??ss(a),a.__h),ym(i,a),a.__e!=c&&pm(a)))})}function gm(e,t,n,i,o,a,c,u,d,p){var h,m,v,w,$,S,A,k=i&&i.__k||fm,P=k.length;for(n.__k=[],h=0;h<t.length;h++)if((w=n.__k[h]=(w=t[h])==null||typeof w=="boolean"?null:typeof w=="string"||typeof w=="number"||typeof w=="bigint"?Pa(null,w,null,null,w):Array.isArray(w)?Pa(is,{children:w},null,null,null):w.__b>0?Pa(w.type,w.props,w.key,null,w.__v):w)!=null){if(w.__=n,w.__b=n.__b+1,(v=k[h])===null||v&&w.key==v.key&&w.type===v.type)k[h]=void 0;else for(m=0;m<P;m++){if((v=k[m])&&w.key==v.key&&w.type===v.type){k[m]=void 0;break}v=null}yd(e,w,v=v||tl,o,a,c,u,d,p),$=w.__e,(m=w.ref)&&v.ref!=m&&(A||(A=[]),v.ref&&A.push(v.ref,null,w),A.push(m,w.__c||$,w)),$!=null?(S==null&&(S=$),typeof w.type=="function"&&w.__k===v.__k?w.__d=d=mm(w,d,e):d=vm(e,w,v,k,$,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=ss(v))}for(n.__e=S,h=P;h--;)k[h]!=null&&(typeof n.type=="function"&&k[h].__e!=null&&k[h].__e==n.__d&&(n.__d=ss(i,h+1)),_m(k[h],k[h]));if(A)for(h=0;h<A.length;h++)bm(A[h],A[++h],A[++h])}function mm(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?mm(i,t,n):vm(n,i,i,o,i.__e,t));return t}function rl(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){rl(n,t)}):t.push(e)),t}function vm(e,t,n,i,o,a){var c,u,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),c=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),c=a}return c!==void 0?c:o.nextSibling}function TC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||il(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||il(e,a,t[a],n[a],i)}function r0(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||EC.test(t)?n:n+"px"}function il(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||r0(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||r0(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?s0:i0,a):e.removeEventListener(t,a?s0:i0,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function i0(e){this.l[e.type+!1](he.event?he.event(e):e)}function s0(e){this.l[e.type+!0](he.event?he.event(e):e)}function yd(e,t,n,i,o,a,c,u,d){var p,h,m,v,w,$,S,A,k,P,B,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(p=he.__b)&&p(t);try{e:if(typeof E=="function"){if(A=t.props,k=(p=E.contextType)&&i[p.__c],P=p?k?k.props.value:p.__:i,n.__c?S=(h=t.__c=n.__c).__=h.__E:("prototype"in E&&E.prototype.render?t.__c=h=new E(A,P):(t.__c=h=new Zn(A,P),h.constructor=E,h.render=IC),k&&k.sub(h),h.props=A,h.state||(h.state={}),h.context=P,h.__n=i,m=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),E.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=qr({},h.__s)),qr(h.__s,E.getDerivedStateFromProps(A,h.__s))),v=h.props,w=h.state,m)E.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(E.getDerivedStateFromProps==null&&A!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(A,P),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(A,h.__s,P)===!1||t.__v===n.__v){h.props=A,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),h.__h.length&&c.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(A,h.__s,P),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,w,$)})}h.context=P,h.props=A,h.state=h.__s,(p=he.__r)&&p(t),h.__d=!1,h.__v=t,h.__P=e,p=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(i=qr(qr({},i),h.getChildContext())),m||h.getSnapshotBeforeUpdate==null||($=h.getSnapshotBeforeUpdate(v,w)),B=p!=null&&p.type===is&&p.key==null?p.props.children:p,gm(e,Array.isArray(B)?B:[B],t,n,i,o,a,c,u,d),h.base=t.__e,t.__h=null,h.__h.length&&c.push(h),S&&(h.__E=h.__=null),h.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=AC(n.__e,t,n,i,o,a,c,d);(p=he.diffed)&&p(t)}catch(T){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),he.__e(T,t,n)}}function ym(e,t){he.__c&&he.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){he.__e(i,n.__v)}})}function AC(e,t,n,i,o,a,c,u){var d,p,h,m=n.props,v=t.props,w=t.type,$=0;if(w==="svg"&&(o=!0),a!=null){for(;$<a.length;$++)if((d=a[$])&&"setAttribute"in d==!!w&&(w?d.localName===w:d.nodeType===3)){e=d,a[$]=null;break}}if(e==null){if(w===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,v.is&&v),a=null,u=!1}if(w===null)m===v||u&&e.data===v||(e.data=v);else{if(a=a&&Il.call(e.childNodes),p=(m=n.props||tl).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!u){if(a!=null)for(m={},$=0;$<e.attributes.length;$++)m[e.attributes[$].name]=e.attributes[$].value;(h||p)&&(h&&(p&&h.__html==p.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(TC(e,v,m,o,u),h)t.__k=[];else if($=t.props.children,gm(e,Array.isArray($)?$:[$],t,n,i,o&&w!=="foreignObject",a,c,a?a[0]:n.__k&&ss(n,0),u),a!=null)for($=a.length;$--;)a[$]!=null&&hm(a[$]);u||("value"in v&&($=v.value)!==void 0&&($!==m.value||$!==e.value||w==="progress"&&!$)&&il(e,"value",$,m.value,!1),"checked"in v&&($=v.checked)!==void 0&&$!==e.checked&&il(e,"checked",$,m.checked,!1))}return e}function bm(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){he.__e(i,n)}}function _m(e,t,n){var i,o;if(he.unmount&&he.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||bm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){he.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&_m(i[o],t,typeof e.type!="function");n||e.__e==null||hm(e.__e),e.__e=e.__d=void 0}function IC(e,t,n){return this.constructor(e,n)}function wm(e,t,n){var i,o,a;he.__&&he.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],yd(t,e=(!i&&n||t).__k=Iu(is,null,[e]),o||tl,tl,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Il.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),ym(a,e)}Il=fm.slice,he={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},um=0,Zn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=qr({},this.state),typeof e=="function"&&(e=e(qr({},n),this.props)),e&&qr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),n0(this))},Zn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),n0(this))},Zn.prototype.render=is,Xs=[],dm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nl.__r=0;var RC=0;function z(e,t,n,i,o){var a,c,u={};for(c in t)c=="ref"?a=t[c]:u[c]=t[c];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--RC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return he.vnode&&he.vnode(d),d}function OC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function LC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Gr={set:OC,get:LC};const iu=new Map,PC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function MC(){for(const{v:e,emoji:t}of PC)if(xm(t))return e}function BC(){return!xm("🇨🇦")}function xm(e){if(iu.has(e))return iu.get(e);const t=jC(e);return iu.set(e,t),t}const jC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,c=a.length;let u=0;for(;u<c&&!a[u+3];u+=4);if(u>=c)return!1;const d=n+u/4%n,p=Math.floor(u/4/n),h=e.getImageData(d,p,1,1).data;return!(a[u]!==h[0]||a[u+2]!==h[2]||e.measureText(o).width>=n)}})();var o0={latestVersion:MC,noCountryFlags:BC};const Ru=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Rt=null;function UC(e){Rt||(Rt=Gr.get("frequently")||{});const t=e.id||e;t&&(Rt[t]||(Rt[t]=0),Rt[t]+=1,Gr.set("last",t),Gr.set("frequently",Rt))}function DC({maxFrequentRows:e,perLine:t}){if(!e)return[];Rt||(Rt=Gr.get("frequently"));let n=[];if(!Rt){Rt={};for(let a in Ru.slice(0,t)){const c=Ru[a];Rt[c]=t-a,n.push(c)}return n}const i=e*t,o=Gr.get("last");for(let a in Rt)n.push(a);if(n.sort((a,c)=>{const u=Rt[c],d=Rt[a];return u==d?a.localeCompare(c):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let c of a)c!=o&&delete Rt[c];o&&n.indexOf(o)==-1&&(delete Rt[n[n.length-1]],n.splice(-1,1,o)),Gr.set("frequently",Rt)}return n}var $m={add:UC,get:DC,DEFAULTS:Ru},km={};km=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var hr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Bt=null,Be=null;const su={};async function a0(e){if(su[e])return su[e];const n=await(await fetch(e)).json();return su[e]=n,n}let ou=null,Cm=null,Sm=!1;function Rl(e,{caller:t}={}){return ou||(ou=new Promise(n=>{Cm=n})),e?NC(e):t&&!Sm&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),ou}async function NC(e){Sm=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=hr.emojiVersion.value),n||(n=hr.set.value),i||(i=hr.locale.value),Be)Be.categories=Be.categories.filter(d=>!d.name);else{Be=(typeof e.data=="function"?await e.data():e.data)||await a0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Be.emoticons={},Be.natives={},Be.categories.unshift({id:"frequent",emojis:[]});for(const d in Be.aliases){const p=Be.aliases[d],h=Be.emojis[p];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}Be.originalCategories=Be.categories}if(Bt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?cm(km):await a0(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const p=e.custom[d],h=e.custom[d-1];if(!(!p.emojis||!p.emojis.length)){p.id||(p.id=`custom_${d+1}`),p.name||(p.name=Bt.categories.custom),h&&!p.icon&&(p.target=h.target||h),Be.categories.push(p);for(const m of p.emojis)Be.emojis[m.id]=m}}e.categories&&(Be.categories=Be.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,p)=>{const h=e.categories.indexOf(d.id),m=e.categories.indexOf(p.id);return h-m}));let o=null,a=null;n=="native"&&(o=o0.latestVersion(),a=e.noCountryFlags||o0.noCountryFlags());let c=Be.categories.length,u=!1;for(;c--;){const d=Be.categories[c];if(d.id=="frequent"){let{maxFrequentRows:m,perLine:v}=e;m=m>=0?m:hr.maxFrequentRows.value,v||(v=hr.perLine.value),d.emojis=$m.get({maxFrequentRows:m,perLine:v})}if(!d.emojis||!d.emojis.length){Be.categories.splice(c,1);continue}const{categoryIcons:p}=e;if(p){const m=p[d.id];m&&!d.icon&&(d.icon=m)}let h=d.emojis.length;for(;h--;){const m=d.emojis[h],v=m.id?m:Be.emojis[m],w=()=>{d.emojis.splice(h,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){w();continue}if(o&&v.version>o){w();continue}if(a&&d.id=="flags"&&!ZC.includes(v.id)){w();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([S,A])=>{if(S)return(Array.isArray(S)?S:[S]).map(k=>(A?k.split(/[-|_|\s]+/):[k]).map(P=>P.toLowerCase())).flat()}).flat().filter(S=>S&&S.trim()).join(","),v.emoticons)for(const S of v.emoticons)Be.emoticons[S]||(Be.emoticons[S]=v.id);let $=0;for(const S of v.skins){if(!S)continue;$++;const{native:A}=S;A&&(Be.natives[A]=v.id,v.search+=`,${A}`);const k=$==1?"":`:skin-tone-${$}:`;S.shortcodes=`:${v.id}:${k}`}}}}u&&Ki.reset(),Cm()}function Em(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Tm(o,e,t,n);return i}function Tm(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const HC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Ou=null;function zC(e){return e.id?e:Be.emojis[e]||Be.emojis[Be.aliases[e]]||Be.emojis[Be.natives[e]]}function FC(){Ou=null}async function WC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Rl(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,p)=>u.trim()&&p.indexOf(u)==d);if(!i.length)return;let o=Ou||(Ou=Object.values(Be.emojis)),a,c;for(const u of i){if(!o.length)break;a=[],c={};for(const d of o){if(!d.search)continue;const p=d.search.indexOf(`,${u}`);p!=-1&&(a.push(d),c[d.id]||(c[d.id]=0),c[d.id]+=d.id==u?0:p+1)}o=a}return a.length<2||(a.sort((u,d)=>{const p=c[u.id],h=c[d.id];return p==h?u.id.localeCompare(d.id):p-h}),a.length>t&&(a=a.slice(0,t))),a}var Ki={search:WC,get:zC,reset:FC,SHORTCODES_REGEX:HC};const ZC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function qC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function KC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function VC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const GC={activity:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},QC={loupe:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var sl={categories:GC,search:QC};function Lu(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(Ki.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=Ki.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),c=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${c})`,backgroundSize:`${100*Be.sheet.cols}% ${100*Be.sheet.rows}%`,backgroundPosition:`${100/(Be.sheet.cols-1)*o.x}% ${100/(Be.sheet.rows-1)*o.y}%`}})})}const XC=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Am extends XC{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Tm(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class YC extends Am{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Im={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:hr.set,skin:hr.skin};class Rm extends Am{async connectedCallback(){const t=Em(this.props,Im,this);t.element=this,t.ref=n=>{this.component=n},await Rl(),!this.disconnected&&wm(z(Lu,{...t}),this)}constructor(t){super(t)}}On(Rm,"Props",Im);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Rm);var l0,Pu=[],c0=he.__b,u0=he.__r,d0=he.diffed,f0=he.__c,h0=he.unmount;function JC(){var e;for(Pu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Pu.pop();)if(e.__P)try{e.__H.__h.forEach(Ma),e.__H.__h.forEach(Mu),e.__H.__h=[]}catch(t){e.__H.__h=[],he.__e(t,e.__v)}}he.__b=function(e){c0&&c0(e)},he.__r=function(e){u0&&u0(e);var t=e.__c.__H;t&&(t.__h.forEach(Ma),t.__h.forEach(Mu),t.__h=[])},he.diffed=function(e){d0&&d0(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Pu.push(t)!==1&&l0===he.requestAnimationFrame||((l0=he.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),p0&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);p0&&(i=requestAnimationFrame(o))})(JC))},he.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ma),n.__h=n.__h.filter(function(i){return!i.__||Mu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],he.__e(i,n.__v)}}),f0&&f0(e,t)},he.unmount=function(e){h0&&h0(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ma(i)}catch(o){t=o}}),t&&he.__e(t,n.__v))};var p0=typeof requestAnimationFrame=="function";function Ma(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Mu(e){e.__c=e.__()}function eS(e,t){for(var n in t)e[n]=t[n];return e}function g0(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function ol(e){this.props=e}(ol.prototype=new Zn).isPureReactComponent=!0,ol.prototype.shouldComponentUpdate=function(e,t){return g0(this.props,e)||g0(this.state,t)};var m0=he.__b;he.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),m0&&m0(e)};var tS=he.__e;he.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}tS(e,t,n)};var v0=he.unmount;function au(){this.__u=0,this.t=null,this.__b=null}function Om(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Ea(){this.u=null,this.o=null}he.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),v0&&v0(e)},(au.prototype=new Zn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Om(i.__v),a=!1,c=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=c;var u=function(){if(!--i.__u){if(i.state.__e){var p=i.state.__e;i.__v.__k[0]=function m(v,w,$){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(S){return m(S,w,$)}),v.__c&&v.__c.__P===w&&(v.__e&&$.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=$)),v}(p,p.__c.__P,p.__c.__O)}var h;for(i.setState({__e:i.__b=null});h=i.t.pop();)h.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(c,c)},au.prototype.componentWillUnmount=function(){this.t=[]},au.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(c,u,d){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(p){typeof p.__c=="function"&&p.__c()}),c.__c.__H=null),(c=eS({},c)).__c!=null&&(c.__c.__P===d&&(c.__c.__P=u),c.__c=null),c.__k=c.__k&&c.__k.map(function(p){return a(p,u,d)})),c}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Iu(is,null,e.fallback);return o&&(o.__h=null),[Iu(is,null,t.__e?null:e.children),o]};var y0=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Ea.prototype=new Zn).__e=function(e){var t=this,n=Om(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),y0(t,e,i)):o()};n?n(a):a()}},Ea.prototype.render=function(e){this.u=null,this.o=new Map;var t=rl(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ea.prototype.componentDidUpdate=Ea.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){y0(e,n,t)})};var nS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,rS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,iS=typeof document<"u",sS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Zn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Zn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var b0=he.event;function oS(){}function aS(){return this.cancelBubble}function lS(){return this.defaultPrevented}he.event=function(e){return b0&&(e=b0(e)),e.persist=oS,e.isPropagationStopped=aS,e.isDefaultPrevented=lS,e.nativeEvent=e};var _0={configurable:!0,get:function(){return this.class}},w0=he.vnode;he.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var c=n[a];iS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&c==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&c===!0?c="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!sS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&rS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():c===null&&(c=void 0),i[a]=c)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=rl(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=rl(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(_0.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",_0))}e.$$typeof=nS,w0&&w0(e)};var x0=he.__r;he.__r=function(e){x0&&x0(e),e.__c};const cS={light:"outline",dark:"solid"};class uS extends ol{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return z("img",{src:n.src})}const i=sl.categories[t.id]||sl.categories.custom,o=this.props.icons=="auto"?cS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Bt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:c=>c.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Be.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class dS extends ol{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const Ta={rowsPerRender:10};class fS extends Zn{getInitialState(t=this.props){return{skin:Gr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Bt.rtl?"rtl":"ltr",this.refs={menu:ur(),navigation:ur(),scroll:ur(),search:ur(),searchInput:ur(),skinToneButton:ur(),skinToneRadio:ur()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Rl(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Be;this.refs.categories=new Map;const n=Be.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const c=[];c.__categoryId=a.id,c.__index=o.length,this.grid.push(c);const u=this.grid.length-1,d=u%Ta.rowsPerRender?{}:ur();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),c};for(let o of t){const a=[];let c=i(a,o);for(let u of o.emojis)c.length==this.getPerLine()&&(c=i(a,o)),this.grid.setsize+=1,c.push(u);this.refs.categories.set(o.id,{root:ur(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:c}=n.getBoundingClientRect();return Math.floor(c/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return Ki.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=c=>{c!=t.state.categoryId&&t.setState({categoryId:c})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(c=>{for(const d of c){const p=d.target.dataset.id;n.set(p,d.intersectionRatio)}const u=[...n];for(const[d,p]of u)if(p){i(d);break}},o);for(const{root:c}of this.refs.categories.values())a.observe(c.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Ta.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Ta.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:c}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,p]=this.state.pos;const h=(()=>{if(d==0&&p==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||c)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let m=u[d];const v=i?-1:1;if(p+=v,!m[p]){if(d+=v,m=u[d],!m)return d=i?0:u.length-1,p=i?0:u[d].length-1,[d,p];p=i?m.length-1:0}return[d,p]}if(a||c){d+=a?-1:1;const m=u[d];return m?(m[p]||(p=m.length-1),[d,p]):(d=a?0:u.length-1,p=a?0:u[d].length-1,[d,p])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let c=0;if(n>=0&&(t=i[n].__categoryId),t&&(c=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)c=0;else{const u=i[n].__index,d=c+u*this.props.emojiButtonSize,p=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)c=d;else if(p>o.scrollTop+a.height)c=p-a.height;else return}this.ignoreMouse(),o.scrollTop=c}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=VC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&$m.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Gr.set("skin",t)}renderNav(){return z(uS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[z("div",{class:"flex flex-middle flex-grow",children:[z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:z(Lu,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),z("div",{class:`margin-${this.dir[0]}`,children:t||n?z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[z("div",{class:"preview-title ellipsis",children:t?t.name:Bt.search_no_results_1}),z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Bt.search_no_results_2})]}):z("div",{class:"preview-placeholder color-c",children:Bt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,c=this.state.tempSkin||this.state.skin,d=(t.skins[c-1]||t.skins[0]).native,p=qC(this.state.pos,n),h=n.concat(t.id).join("");return z(dS,{selected:p,skin:c,size:a,children:z("button",{"aria-label":d,"aria-selected":p||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:m=>this.handleEmojiClick({e:m,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),z(Lu,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:c,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return z("div",{children:[z("div",{class:"spacer"}),z("div",{class:"flex flex-middle",children:[z("div",{class:"search relative flex-grow",children:[z("input",{type:"search",ref:this.refs.searchInput,placeholder:Bt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),z("span",{class:"icon loupe flex",children:sl.search.loupe}),this.state.searchResults&&z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:sl.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?z("div",{class:"category",ref:this.refs.search,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Bt.categories.search}),z("div",{children:t.length?t.map((n,i)=>z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&z("a",{onClick:this.props.onAddCustomEmoji,children:Bt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Be,n=!!this.state.searchResults,i=this.getPerLine();return z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:c}=this.refs.categories.get(o.id);return z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Bt.categories[o.id]}),z("div",{class:"relative",style:{height:c.length*this.props.emojiButtonSize},children:c.map((u,d)=>{const p=u.index-u.index%Ta.rowsPerRender,h=this.state.visibleRows[p],m="current"in u?u:void 0;if(!h&&!m)return null;const v=d*i,w=v+i,$=o.emojis.slice(v,w);return $.length<i&&$.push(...new Array(i-$.length)),z("div",{"data-index":u.index,ref:m,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&$.map((S,A)=>{if(!S)return z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const k=Ki.get(S);return this.renderEmojiButton(k,{pos:[u.index,A],posinset:u.posinset+A,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Bt.skins.choose,title:Bt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Bt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const c=a+1,u=this.state.skin==c;return z("div",{children:[z("input",{type:"radio",name:"skin-tone",value:c,"aria-label":Bt.skins[c],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(c),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(c))}}),z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(c),onMouseEnter:()=>this.handleSkinMouseOver(c),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[z("span",{class:`skin-tone skin-tone-${c}`}),z("span",{class:"margin-small-lr",children:Bt.skins[c]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&z("div",{class:"padding-lr",children:this.renderSearch()}),z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),On(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),On(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),On(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),On(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),On(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Ki.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const c=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let p of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(p);this.ignoreMouse(),this.setState({searchResults:u,pos:c},a)}),On(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),On(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),On(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),On(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await KC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class bd extends YC{async connectedCallback(){const t=Em(this.props,hr,this);t.element=this,t.ref=n=>{this.component=n},await Rl(t),!this.disconnected&&wm(z(fS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:cm(Lm)})}}On(bd,"Props",hr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",bd);var Lm={};Lm=`:host {
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

`;const Pm=e=>{let t;const[n,i]=we(void 0);return _(vd,{ref:c=>{t=c},position:"bottom",get button(){return e.children},onOpen:()=>{const c=new bd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(c)},onClose:()=>{i(void 0)},get children(){return n()}})},hS=M("<div>"),pS=M('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),gS=M("<br>"),mS=M("<span>理由: "),vS=M('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),yS=e=>{const[t,n]=we(!1);return _(le,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=vS();return i.firstChild,i.$$click=()=>n(!0),I(i,_(le,{get when(){return e.contentWarning.reason!=null},get children(){return[gS(),(()=>{const o=mS();return o.firstChild,I(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=hS();return I(i,()=>e.children),i})(),_(le,{get when(){return e.contentWarning.contentWarning},get children(){const i=pS();return i.$$click=()=>n(!1),i}})]}})};_t(["click"]);const Mm=e=>{const{profile:t}=vs(()=>({pubkey:e.pubkey}));return _(le,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Tl(e.pubkey)}`},get children(){return["@",Ve(()=>t()?.name??e.pubkey)]}})},bS=M('<a target="_blank" rel="noreferrer noopener">'),Ol=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return _(le,{get when(){return t()},get fallback(){return e.href},get children(){const n=bS();return I(n,()=>e.children??e.href),Pe(i=>{const o=e.class,a=e.href;return o!==i._v$&&f4(n,i._v$=o),a!==i._v$2&&bt(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},_S=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},wS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},xS=M('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),$S=M('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),kS=e=>{let t;const[n,i]=we(e.initialHidden);return _(le,{get when(){return!n()},get fallback(){return(()=>{const o=$S();return o.$$click=()=>i(!1),o})()},get children(){return _(Ol,{class:"my-2 block",get href(){return e.url},get children(){const o=xS(),a=t;return typeof a=="function"?_r(a,o):t=o,Pe(c=>{const u=wS(e.url),d=e.url;return u!==c._v$&&bt(o,"src",c._v$=u),d!==c._v$2&&bt(o,"alt",c._v$2=d),c},{_v$:void 0,_v$2:void 0}),o}})}})};_t(["click"]);const CS=M('<div class="my-1 rounded border p-1">'),SS=e=>_(le,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return _(ro,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=CS();return I(t,_(mo,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[yt.Text]}})),t}}),ES=M('<button class="inline text-blue-500 underline">'),lu=e=>{const{showProfile:t}=ti(),n=()=>{t(e.pubkey)};return(()=>{const i=ES();return i.$$click=n,I(i,_(Mm,{get pubkey(){return e.pubkey}})),i})()};_t(["click"]);const[_d,TS]=we({}),Bm=e=>{_d()[e]==null&&TS(t=>({...t,[e]:new MessageChannel}))},AS=e=>{const t=()=>_d()[e().id],n=(o,a)=>{const c={requestId:o,request:a};t().port1.postMessage(c)},i=(o,a=1e3)=>new Promise((c,u)=>{let d;const p=h=>{const m=h.data;m.requestId===o&&(t().port1.removeEventListener("message",p),m.ok?c(m.response):u(m.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",p),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",p,!1),t().port1.start()});return dn(()=>{const{id:o}=e();Bm(o)}),async o=>{const a=Math.random().toString(),c=i(a);return n(a,o),c}},IS=e=>{const t=Ve(e),n=()=>_d()[t().id];dn(()=>{const{id:i}=t();Bm(i);const o=n().port2,a=c=>{const{requestId:u,request:d}=c.data,p=t().handler(d);(p instanceof Promise?p:Promise.resolve(p)).then(m=>{const v={requestId:u,ok:!0,response:m};o.postMessage(v)}).catch(m=>{const v={requestId:u,ok:!1,error:m};o.postMessage(v)})};o.addEventListener("message",a),o.start(),br(()=>{o.removeEventListener("message",a)})})},So=()=>AS(()=>({id:"CommandChannel"})),Bu=e=>{IS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},{decode:RS}=$o,OS=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,LS=/(?:#\[(?<idx>\d+)\])/g,PS=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent)1[ac-hj-np-z02-9]+))/gi,MS=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,BS=/:(?<emoji>\w+):/gu,jm=e=>{const t=[...e.matchAll(OS),...e.matchAll(LS),...e.matchAll(PS),...e.matchAll(MS),...e.matchAll(BS)].sort((a,c)=>a.index-c.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const c=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=c;else{const d={type:"PlainText",content:c};i.push(d)}n=a}};return t.forEach(a=>{const{index:c}=a;if(!(c<n)){if(a.groups?.url){o(c);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(c),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(c);try{const u=RS(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(c+a[0].length)}}else if(a.groups?.hashtag){o(c);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(c);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=c+a[0].length}}),n<e.length&&o(e.length),i},jS=({tagIndex:e,content:t},n)=>{const i=n.tags[e];if(i==null)return null;const o=i[0];if(o==="p"&&Qs(i[1]))return{type:"MentionedUser",tagIndex:e,content:t,pubkey:i[1]};if(o==="e"&&Qs(i[1])){const a=kn(n).markedEventTags().find(c=>c.index===e);return{type:"MentionedEvent",tagIndex:e,content:t,eventId:i[1],marker:a?.marker}}return null},cu=M("<span>"),$0=M('<div class="my-1 rounded border p-1">'),US=M('<span class="text-blue-500 underline">'),DS=M('<button class="text-blue-500 underline">'),NS=M('<img class="inline-block h-8 max-w-[128px] align-middle">'),HS=e=>{const{config:t,saveColumn:n}=Ue(),i=So(),o=()=>kn(e.event),a=c=>{n(pd({query:c})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return _(jt,{get each(){return jm(e.event.content)},children:c=>{if(c.type==="PlainText")return(()=>{const u=cu();return I(u,()=>c.content),u})();if(c.type==="URL")return _S(c.content)?_(kS,{get url(){return c.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):_(Ol,{class:"text-blue-500 underline",get href(){return c.content}});if(c.type==="TagReference"){const u=jS(c,e.event);if(u==null)return(()=>{const d=cu();return I(d,()=>c.content),d})();if(u.type==="MentionedUser")return _(lu,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?_(SS,{mentionedEvent:u}):_(ro,{get eventId(){return u.eventId}})}if(c.type==="Bech32Entity")return c.data.type==="note"&&e.embedding?(()=>{const u=$0();return I(u,_(mo,{get eventId(){return c.data.data},actions:!1,embedding:!1,get ensureKinds(){return[yt.Text]}})),u})():c.data.type==="nevent"&&e.embedding?(()=>{const u=$0();return I(u,_(mo,{get eventId(){return c.data.data.id},actions:!1,embedding:!1})),u})():c.data.type==="npub"?_(lu,{get pubkey(){return c.data.data}}):c.data.type==="nprofile"?_(lu,{get pubkey(){return c.data.data.pubkey}}):(()=>{const u=US();return I(u,()=>c.content),u})();if(c.type==="HashTag")return(()=>{const u=DS();return u.$$click=()=>a(c.content),I(u,()=>c.content),u})();if(c.type==="CustomEmoji"){const u=o().getEmojiUrl(c.shortcode);return u==null?(()=>{const d=cu();return I(d,()=>c.content),d})():(()=>{const d=NS();return bt(d,"src",u),Pe(()=>bt(d,"alt",c.content)),d})()}return console.error("Not all ParsedTextNoteNodes are covered",c),null}})};_t(["click"]);const zS=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Um=(e={})=>(()=>{const t=zS();return Xe(t,e,!0,!0),t})(),FS=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),WS=(e={})=>(()=>{const t=FS();return Xe(t,e,!0,!0),t})(),ZS=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),os=(e={})=>(()=>{const t=ZS();return Xe(t,e,!0,!0),t})(),qS=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),KS=(e={})=>(()=>{const t=qS();return Xe(t,e,!0,!0),t})(),VS=e=>Math.floor(+e/1e3),dr=()=>VS(new Date),GS=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),QS=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:c,tags:u})=>{const d=[],p=e?.map(m=>["p",m])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(m=>d.push(["e",m,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(m=>h.push(["t",m])),c?.forEach(m=>h.push(["r",m])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...p,...h]},Ll=()=>{const e=El(),t=async(d,p)=>{const h={...p};if(h.id=I1(h),window.nostr==null)throw new Error("NIP-07 implementation not found");const m=await window.nostr.signEvent(h);return d.map(async v=>{const $=(await e().ensureRelay(v)).publish(m);return GS($,v)})};return{publishTextNote:async d=>{const{relayUrls:p,pubkey:h,content:m}=d,v=QS(d),w={kind:1,pubkey:h,created_at:dr(),tags:v,content:m};return t(p,w)},publishReaction:async({relayUrls:d,pubkey:p,eventId:h,content:m,notifyPubkey:v})=>{const w={kind:7,pubkey:p,created_at:dr(),tags:[["e",h,""],["p",v]],content:m};return t(d,w)},publishRepost:async({relayUrls:d,pubkey:p,eventId:h,notifyPubkey:m})=>{const v={kind:6,pubkey:p,created_at:dr(),tags:[["e",h,""],["p",m]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:p,profile:h,otherProperties:m})=>{const v={...h,...m},w={kind:yt.Metadata,pubkey:p,created_at:dr(),tags:[],content:JSON.stringify(v)};return t(d,w)},updateContacts:async({relayUrls:d,pubkey:p,followingPubkeys:h,content:m})=>{const v=h.map($=>["p",$]),w={kind:yt.Contacts,pubkey:p,created_at:dr(),tags:v,content:m};return t(d,w)},deleteEvent:async({relayUrls:d,pubkey:p,eventId:h})=>{const m={kind:yt.EventDeletion,pubkey:p,created_at:dr(),tags:[["e",h,""]],content:""};return t(d,m)}}};let uu=!1;const[Aa,XS]=we(void 0),kr=()=>(dn(()=>{if(Aa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),Aa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Aa()==null&&!uu&&(uu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),XS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{uu=!1})),e+=1},200)}),Aa),YS=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},JS=e=>t=>Promise.allSettled(t.map(n=>e(n))),eE=M("<div>に返信"),tE=M('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),nE=M('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),rE=M('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),iE=M('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),sE=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},oE=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(c=>{c.type==="URL"?o.push(c.content):c.type==="HashTag"?t.push(c.tagName):c.type==="Bech32Entity"?c.data.type==="npub"?n.push(c.data.data):c.data.type==="note"&&i.push(c.data.data):c.type==="CustomEmoji"&&!a.includes(c.shortcode)&&a.push(c.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},aE=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},Dm=e=>{let t,n;const[i,o]=we(""),[a,c]=we(!1),[u,d]=we(""),p=G=>o(Ae=>`${Ae} ${G}`),h=()=>{o(""),d(""),c(!1)},m=()=>{t?.blur(),h(),e.onClose()},{config:v,getEmoji:w}=Ue(),$=kr(),S=Ll(),A=()=>e.replyTo&&kn(e.replyTo),k=()=>e.mode??"normal",P=gi({mutationKey:["publishTextNote"],mutationFn:S.publishTextNote.bind(S),onSuccess:()=>{console.log("succeeded to post"),h(),e.onPost?.()},onError:G=>{console.error("error",G)}}),B=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},E=gi({mutationKey:["uploadFiles"],mutationFn:async G=>{const Ae=await JS(YS)(G),$e=[];if(Ae.forEach((ee,ye)=>{ee.status==="fulfilled"?(p(ee.value.imageUrl),B()):$e.push(G[ye])}),$e.length>0){const ee=$e.map(ye=>ye.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${ee}`)}}}),T=Ve(()=>{const G=$();return A()?.mentionedPubkeys()?.filter(Ae=>Ae!==G)??[]}),O=Ve(()=>e.replyTo==null?[]:gr([e.replyTo.pubkey,...T()])),H=G=>{const Ae=[];return G.forEach($e=>{const ee=w($e);ee!=null&&Ae.push(["emoji",$e,ee.url])}),Ae},W=()=>{if(i().length===0||P.isLoading)return;const G=$();if(G==null){console.error("pubkey is not available");return}const Ae=jm(i()),{hashtags:$e,urlReferences:ee,pubkeyReferences:ye,eventReferences:st,emojis:Ot}=oE(Ae),$t=aE(Ae),Zt=H(Ot);let V={relayUrls:v().relayUrls,pubkey:G,content:$t,notifyPubkeys:ye,mentionEventIds:st,hashtags:$e,urls:ee,tags:Zt};A()!=null&&(V={...V,notifyPubkeys:gr([...O(),...ye]),rootEventId:A()?.rootEvent()?.id,replyEventId:A()?.id}),a()&&(V={...V,contentWarning:u()}),P.mutate(V),m()},ie=G=>{o(G.currentTarget.value),B()},K=G=>{G.preventDefault(),W()},se=G=>{G.key==="Enter"&&(G.ctrlKey||G.metaKey)?W():G.key==="Escape"&&(t?.blur(),m())},Z=G=>{if(G.preventDefault(),E.isLoading)return;const Ae=[...G.currentTarget.files??[]];E.mutate(Ae),G.currentTarget.value=""},Y=G=>{if(G.preventDefault(),E.isLoading)return;const Ae=[...G?.dataTransfer?.files??[]];E.mutate(Ae)},oe=G=>{if(E.isLoading)return;const Ae=[...G?.clipboardData?.items??[]],$e=[];Ae.forEach(ee=>{if(ee.kind==="file"){G.preventDefault();const ye=ee.getAsFile();if(ye==null)return;$e.push(ye)}}),$e.length!==0&&E.mutate($e)},Ze=G=>{G.preventDefault()},X=()=>i().trim().length===0||P.isLoading||E.isLoading,ve=()=>E.isLoading;return dn(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const G=iE(),Ae=G.firstChild,$e=Ae.firstChild,ee=$e.nextSibling,ye=ee.firstChild,st=ye.nextSibling,Ot=st.nextSibling,$t=ee.nextSibling;I(G,_(le,{get when(){return e.replyTo!=null},get children(){const V=eE(),ft=V.firstChild;return I(V,_(jt,{get each(){return O()},children:(ce,wt)=>[_(Al,{pubkey:ce}),_(le,{get when(){return wt()!==O().length-1},children:" と "})]}),ft),V}}),Ae),Ae.addEventListener("submit",K),I(Ae,_(le,{get when(){return a()},get children(){const V=tE();return V.$$input=ft=>d(ft.currentTarget.value),Pe(()=>V.value=u()),V}}),$e),$e.addEventListener("paste",oe),$e.addEventListener("drop",Y),$e.addEventListener("dragover",Ze),$e.$$keydown=se,$e.$$input=ie,_r(V=>{t=V,e.textAreaRef?.(V)},$e),I(ee,_(le,{get when(){return k()==="reply"},get children(){const V=nE(),ft=V.firstChild;return ft.$$click=()=>m(),I(ft,_(os,{})),V}}),ye),I(ee,_(Pm,{customEmojis:!0,onEmojiSelect:V=>p(V),get children(){const V=rE();return I(V,_(Um,{})),V}}),ye),ye.$$click=()=>c(V=>!V),st.$$click=()=>n?.click(),I(st,_(WS,{})),I(Ot,_(KS,{})),$t.addEventListener("change",Z);const Zt=n;return typeof Zt=="function"?_r(Zt,$t):n=$t,Pe(V=>{const ft=sE(k()),ce=!a(),wt=!!a(),gt=k()==="normal",Lt=k()==="normal",Hn=k()==="reply",ot=k()==="reply",qt=!!ve(),Sr=!ve(),ht=k()==="normal",Dt=k()==="normal",er=k()==="reply",be=k()==="reply",ze=ve(),at=!!X(),St=!X(),Jt=k()==="normal",ue=k()==="normal",fn=k()==="reply",Le=k()==="reply",nt=X();return ft!==V._v$&&bt($e,"placeholder",V._v$=ft),ce!==V._v$2&&ye.classList.toggle("bg-rose-300",V._v$2=ce),wt!==V._v$3&&ye.classList.toggle("bg-rose-400",V._v$3=wt),gt!==V._v$4&&ye.classList.toggle("h-8",V._v$4=gt),Lt!==V._v$5&&ye.classList.toggle("w-8",V._v$5=Lt),Hn!==V._v$6&&ye.classList.toggle("h-7",V._v$6=Hn),ot!==V._v$7&&ye.classList.toggle("w-7",V._v$7=ot),qt!==V._v$8&&st.classList.toggle("bg-primary-disabled",V._v$8=qt),Sr!==V._v$9&&st.classList.toggle("bg-primary",V._v$9=Sr),ht!==V._v$10&&st.classList.toggle("h-8",V._v$10=ht),Dt!==V._v$11&&st.classList.toggle("w-8",V._v$11=Dt),er!==V._v$12&&st.classList.toggle("h-7",V._v$12=er),be!==V._v$13&&st.classList.toggle("w-7",V._v$13=be),ze!==V._v$14&&(st.disabled=V._v$14=ze),at!==V._v$15&&Ot.classList.toggle("bg-primary-disabled",V._v$15=at),St!==V._v$16&&Ot.classList.toggle("bg-primary",V._v$16=St),Jt!==V._v$17&&Ot.classList.toggle("h-8",V._v$17=Jt),ue!==V._v$18&&Ot.classList.toggle("w-8",V._v$18=ue),fn!==V._v$19&&Ot.classList.toggle("h-7",V._v$19=fn),Le!==V._v$20&&Ot.classList.toggle("w-7",V._v$20=Le),nt!==V._v$21&&(Ot.disabled=V._v$21=nt),V},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Pe(()=>$e.value=i()),G})()};_t(["input","keydown","click"]);const Nm=h4(),lE=()=>p4(Nm),cE=()=>{const[e,t]=Vi({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},uE=M('<div class="flex gap-2 py-1">'),dE=M('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),fE=M('<span class="ml-1 text-sm">'),hE=M('<button class="flex h-6 items-center rounded border px-1" type="button">'),pE=M('<span class="text-base">'),gE=M('<span class="text-red-500">削除'),mE=M('<img alt="icon" class="h-full w-full rounded object-cover">'),vE=M('<div class="author-name truncate pr-1 font-bold hover:underline">'),yE=M('<div class="text-xs">への返信'),bE=M('<div class="content whitespace-pre-wrap break-all">'),_E=M('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),k0=M('<div class="text-sm text-zinc-400">'),wE=M('<span class="inline-block h-4 w-4">'),xE=M('<div class="flex shrink-0 items-center gap-1">'),$E=M('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),kE=M('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),CE=M('<div class="nostr-textnote flex flex-col"><div class="flex w-full gap-1"><button class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></button><div class="created-at shrink-0"><a type="button" class="hover:underline"></a></div></div><div class="overflow-hidden">'),SE=M('<div class="mt-1 rounded border p-1">'),EE=M('<button class="pr-1 text-blue-500 hover:underline">'),{noteEncode:C0}=$o,TE=e=>{const{config:t}=Ue(),n=kr();return(()=>{const i=uE();return I(i,_(jt,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const c=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=hE();return u.$$click=()=>e.onReaction(o),I(u,_(le,{when:o==="+",get fallback(){return(()=>{const d=pE();return I(d,o),d})()},get children(){const d=dE();return I(d,_(md,{})),d}}),null),I(u,_(le,{get when(){return!t().hideCount},get children(){const d=fE();return I(d,()=>a.length),d}}),null),Pe(d=>Ks(u,{"text-zinc-400":!c,"hover:bg-zinc-50":!c,"bg-rose-50":c,"border-rose-200":c,"text-rose-400":c},d)),u})()}})),i})()},Hm=e=>{let t;const{config:n}=Ue(),i=im(),o=kr(),{showProfile:a}=ti(),c=lE(),[u,d]=we(!1),[p,h]=we(!1),[m,v]=we(!1),w=()=>v(!1),[$,S]=we(!1),[A,k]=we(!1),P=Ve(()=>kn(e.event)),B=()=>e.embedding??!0,E=()=>e.actions??!0,{profile:T}=vs(()=>({pubkey:e.event.pubkey})),{reactions:O,reactionsGroupedByContent:H,isReactedBy:W,isReactedByWithEmoji:ie,invalidateReactions:K,query:se}=nC(()=>({eventId:e.event.id})),{reposts:Z,isRepostedBy:Y,invalidateReposts:oe,query:Ze}=rC(()=>({eventId:e.event.id})),X=Ll(),ve=gi({mutationKey:["publishReaction",P().id],mutationFn:X.publishReaction.bind(X),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:ce=>{console.error("failed to publish reaction: ",ce)},onSettled:()=>{K().then(()=>se.refetch()).catch(ce=>console.error("failed to refetch reactions",ce))}}),G=gi({mutationKey:["publishRepost",P().id],mutationFn:X.publishRepost.bind(X),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:ce=>{console.error("failed to publish repost: ",ce)},onSettled:()=>{oe().then(()=>Ze.refetch()).catch(ce=>console.error("failed to refetch reposts",ce))}}),Ae=gi({mutationKey:["deleteEvent",P().id],mutationFn:(...ce)=>X.deleteEvent(...ce).then(wt=>Promise.allSettled(wt.map(ei(1e4)))),onSuccess:ce=>{const wt=ce.filter(Lt=>Lt.status==="fulfilled").length,gt=ce.length-wt;wt===ce.length?window.alert("削除しました（画面の反映にはリロード）"):wt>0?window.alert(`${gt}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:ce=>{console.error("failed to delete",ce)}}),$e=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(C0(e.event.id)).catch(ce=>window.alert(ce))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event)).catch(ce=>window.alert(ce))}},{when:()=>P().pubkey===o(),content:()=>gE(),onSelect:()=>{const ce=o();ce!=null&&window.confirm("本当に削除しますか？")&&Ae.mutate({relayUrls:n().relayUrls,pubkey:ce,eventId:P().id})}}],ee=Ve(()=>{const ce=o();return ce!=null&&W(ce)||u()}),ye=Ve(()=>{const ce=o();return ce!=null&&ie(ce)}),st=Ve(()=>{const ce=o();return ce!=null&&Y(ce)||p()}),Ot=()=>{const ce=P().replyingToEvent();if(B()&&ce!=null&&!P().containsEventMentionIndex(ce.index))return ce.id},$t=()=>i(P().createdAtAsDate()),Zt=ce=>{ce.stopPropagation(),!st()&&cn([o(),e.event.id])(([wt,gt])=>{G.mutate({relayUrls:n().relayUrls,pubkey:wt,eventId:gt,notifyPubkey:e.event.pubkey}),h(!0)})},V=ce=>{ee()||cn([o(),e.event.id])(([wt,gt])=>{ve.mutate({relayUrls:n().relayUrls,pubkey:wt,content:ce??"+",eventId:gt,notifyPubkey:e.event.pubkey}),d(!0)})},ft=ce=>{ce.stopPropagation(),V()};return dn(()=>{t!=null&&k(t.scrollHeight>t.clientHeight)}),(()=>{const ce=CE(),wt=ce.firstChild,gt=wt.firstChild,Lt=gt.nextSibling,Hn=Lt.firstChild,ot=Hn.firstChild,qt=ot.firstChild,Sr=ot.nextSibling,ht=Sr.firstChild,Dt=Hn.nextSibling;gt.$$click=be=>{be.stopPropagation(),a(P().pubkey)},I(gt,_(le,{get when(){return T()?.picture},get children(){const be=mE();return Pe(()=>bt(be,"src",T()?.picture)),be}})),ot.$$click=be=>{be.stopPropagation(),a(P().pubkey)},I(ot,_(le,{get when(){return(T()?.display_name?.length??0)>0},get children(){const be=vE();return I(be,()=>T()?.display_name),be}}),qt),I(qt,_(le,{get when(){return T()?.name!=null},get fallback(){return`@${Tl(P().pubkey)}`},get children(){return["@",Ve(()=>T()?.name)]}})),ht.$$click=be=>{be.preventDefault(),c?.setTimeline({type:"Replies",event:e.event})},I(ht,$t);const er=t;return typeof er=="function"?_r(er,Dt):t=Dt,I(Dt,_(le,{get when(){return Ot()},keyed:!0,children:be=>(()=>{const ze=SE();return I(ze,_(mo,{eventId:be,actions:!1,embedding:!1})),ze})()}),null),I(Dt,_(le,{get when(){return P().mentionedPubkeys().length>0},get children(){const be=yE(),ze=be.firstChild;return I(be,_(jt,{get each(){return P().mentionedPubkeys()},children:at=>(()=>{const St=EE();return St.$$click=Jt=>{Jt.stopPropagation(),a(at)},I(St,_(Mm,{pubkey:at})),St})()}),ze),be}}),null),I(Dt,_(yS,{get contentWarning(){return P().contentWarning()},get children(){const be=bE();return I(be,_(HS,{get event(){return e.event},get embedding(){return B()}})),be}}),null),I(Lt,_(le,{get when(){return A()},get children(){const be=_E();return be.$$click=ze=>{ze.stopPropagation(),S(at=>!at)},I(be,_(le,{get when(){return!$()},fallback:"隠す",children:"続きを読む"})),be}}),null),I(Lt,_(le,{get when(){return E()},get children(){return[_(le,{get when(){return Ve(()=>!!n().showEmojiReaction)()&&O().length>0},get children(){return _(TE,{get reactionsGroupedByContent(){return H()},onReaction:V})}}),(()=>{const be=kE(),ze=be.firstChild,at=ze.nextSibling,St=at.firstChild,Jt=at.nextSibling,ue=Jt.firstChild,fn=Jt.nextSibling;return ze.$$click=Le=>{Le.stopPropagation(),v(nt=>!nt)},I(ze,_(yC,{})),St.$$click=Zt,I(St,_(j1,{})),I(at,_(le,{get when(){return Ve(()=>!n().hideCount)()&&Z().length>0},get children(){const Le=k0();return I(Le,()=>Z().length),Le}}),null),ue.$$click=ft,I(ue,_(le,{get when(){return Ve(()=>!!ee())()&&!ye()},get fallback(){return _(gd,{})},get children(){return _(md,{})}})),I(Jt,_(le,{get when(){return Ve(()=>!n().hideCount&&!n().showEmojiReaction)()&&O().length>0},get children(){const Le=k0();return I(Le,()=>O().length),Le}}),null),I(be,_(le,{get when(){return n().useEmojiReaction},get children(){const Le=xE();return I(Le,_(Pm,{onEmojiSelect:nt=>V(nt),get children(){const nt=wE();return I(nt,_(am,{})),nt}})),Pe(nt=>Ks(Le,{"text-zinc-400":!ee()||!ye(),"hover:text-rose-400":!ee()||!ye(),"text-rose-400":ee()&&ye()||ve.isLoading},nt)),Le}}),fn),I(fn,_(lm,{menu:$e,get children(){const Le=$E();return I(Le,_(om,{})),Le}})),Pe(Le=>{const nt={"text-zinc-400":!st(),"hover:text-green-400":!st(),"text-green-400":st()||G.isLoading},Cn=G.isLoading,Sn={"text-zinc-400":!ee()||ye(),"hover:text-rose-400":!ee()||ye(),"text-rose-400":ee()&&!ye()||ve.isLoading},hn=ve.isLoading;return Le._v$=Ks(at,nt,Le._v$),Cn!==Le._v$2&&(St.disabled=Le._v$2=Cn),Le._v$3=Ks(Jt,Sn,Le._v$3),hn!==Le._v$4&&(ue.disabled=Le._v$4=hn),Le},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),be})()]}}),null),I(ce,_(le,{get when(){return m()},get children(){return _(Dm,{mode:"reply",get replyTo(){return e.event},onClose:w,onPost:w})}}),null),Pe(be=>{const ze=`nostr:${C0(P().id)}`,at=!$();return ze!==be._v$5&&bt(ht,"href",be._v$5=ze),at!==be._v$6&&Dt.classList.toggle("max-h-screen",be._v$6=at),be},{_v$5:void 0,_v$6:void 0}),ce})()};_t(["click"]);const zm=e=>{const{shouldMuteEvent:t}=Ue();return _(le,{get when(){return!t(e.event)},get children(){return _(Hm,e)}})},AE=M("<span>予期しないイベント種別（<!>）"),IE=M("<span><span>未対応のイベント種別（<!>）"),Fm=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return _(Mn,{get fallback(){return(()=>{const n=IE(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,I(i,()=>e.event.kind,a),I(n,_(ro,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[_(Fe,{get when(){return!t()},keyed:!0,get children(){const n=AE(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,I(n,()=>e.event.kind,o),I(n,_(ro,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),_(Fe,{get when(){return e.event.kind===yt.Text},get children(){return _(zm,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),_(Fe,{get when(){return e.event.kind===6},get children(){return _(sm,{get event(){return e.event}})}})]}})},ys=e=>{const{shouldMuteEvent:t}=Ue();return _(jt,{get each(){return e.events},children:n=>_(le,{get when(){return!t(n)},get children(){return _(Ra,{get children(){return _(Fm,{event:n})}})}})})};var RE=gl;function OE(){this.__data__=new RE,this.size=0}var LE=OE;function PE(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var ME=PE;function BE(e){return this.__data__.get(e)}var jE=BE;function UE(e){return this.__data__.has(e)}var DE=UE,NE=gl,HE=Vu,zE=Gu,FE=200;function WE(e,t){var n=this.__data__;if(n instanceof NE){var i=n.__data__;if(!HE||i.length<FE-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new zE(i)}return n.set(e,t),this.size=n.size,this}var ZE=WE,qE=gl,KE=LE,VE=ME,GE=jE,QE=DE,XE=ZE;function bs(e){var t=this.__data__=new qE(e);this.size=t.size}bs.prototype.clear=KE;bs.prototype.delete=VE;bs.prototype.get=GE;bs.prototype.has=QE;bs.prototype.set=XE;var wd=bs;function YE(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var JE=YE,eT=Cg,tT=JE,nT=Sg,rT=1,iT=2;function sT(e,t,n,i,o,a){var c=n&rT,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var p=a.get(e),h=a.get(t);if(p&&h)return p==t&&h==e;var m=-1,v=!0,w=n&iT?new eT:void 0;for(a.set(e,t),a.set(t,e);++m<u;){var $=e[m],S=t[m];if(i)var A=c?i(S,$,m,t,e,a):i($,S,m,e,t,a);if(A!==void 0){if(A)continue;v=!1;break}if(w){if(!tT(t,function(k,P){if(!nT(w,P)&&($===k||o($,k,n,i,a)))return w.push(P)})){v=!1;break}}else if(!($===S||o($,S,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var Wm=sT,oT=Dn,aT=oT.Uint8Array,Zm=aT;function lT(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var cT=lT,S0=cs,E0=Zm,uT=Ku,dT=Wm,fT=cT,hT=Qu,pT=1,gT=2,mT="[object Boolean]",vT="[object Date]",yT="[object Error]",bT="[object Map]",_T="[object Number]",wT="[object RegExp]",xT="[object Set]",$T="[object String]",kT="[object Symbol]",CT="[object ArrayBuffer]",ST="[object DataView]",T0=S0?S0.prototype:void 0,du=T0?T0.valueOf:void 0;function ET(e,t,n,i,o,a,c){switch(n){case ST:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case CT:return!(e.byteLength!=t.byteLength||!a(new E0(e),new E0(t)));case mT:case vT:case _T:return uT(+e,+t);case yT:return e.name==t.name&&e.message==t.message;case wT:case $T:return e==t+"";case bT:var u=fT;case xT:var d=i&pT;if(u||(u=hT),e.size!=t.size&&!d)return!1;var p=c.get(e);if(p)return p==t;i|=gT,c.set(e,t);var h=dT(u(e),u(t),i,o,a,c);return c.delete(e),h;case kT:if(du)return du.call(e)==du.call(t)}return!1}var TT=ET;function AT(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var xd=AT,IT=Array.isArray,Jn=IT,RT=xd,OT=Jn;function LT(e,t,n){var i=t(e);return OT(e)?i:RT(i,n(e))}var qm=LT;function PT(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var c=e[n];t(c,n,e)&&(a[o++]=c)}return a}var MT=PT;function BT(){return[]}var Km=BT,jT=MT,UT=Km,DT=Object.prototype,NT=DT.propertyIsEnumerable,A0=Object.getOwnPropertySymbols,HT=A0?function(e){return e==null?[]:(e=Object(e),jT(A0(e),function(t){return NT.call(e,t)}))}:UT,$d=HT;function zT(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var FT=zT;function WT(e){return e!=null&&typeof e=="object"}var ni=WT,ZT=us,qT=ni,KT="[object Arguments]";function VT(e){return qT(e)&&ZT(e)==KT}var GT=VT,I0=GT,QT=ni,Vm=Object.prototype,XT=Vm.hasOwnProperty,YT=Vm.propertyIsEnumerable,JT=I0(function(){return arguments}())?I0:function(e){return QT(e)&&XT.call(e,"callee")&&!YT.call(e,"callee")},kd=JT,al={exports:{}};function eA(){return!1}var tA=eA;al.exports;(function(e,t){var n=Dn,i=tA,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,c=a&&a.exports===o,u=c?n.Buffer:void 0,d=u?u.isBuffer:void 0,p=d||i;e.exports=p})(al,al.exports);var Cd=al.exports,nA=9007199254740991,rA=/^(?:0|[1-9]\d*)$/;function iA(e,t){var n=typeof e;return t=t??nA,!!t&&(n=="number"||n!="symbol"&&rA.test(e))&&e>-1&&e%1==0&&e<t}var Sd=iA,sA=9007199254740991;function oA(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=sA}var Ed=oA,aA=us,lA=Ed,cA=ni,uA="[object Arguments]",dA="[object Array]",fA="[object Boolean]",hA="[object Date]",pA="[object Error]",gA="[object Function]",mA="[object Map]",vA="[object Number]",yA="[object Object]",bA="[object RegExp]",_A="[object Set]",wA="[object String]",xA="[object WeakMap]",$A="[object ArrayBuffer]",kA="[object DataView]",CA="[object Float32Array]",SA="[object Float64Array]",EA="[object Int8Array]",TA="[object Int16Array]",AA="[object Int32Array]",IA="[object Uint8Array]",RA="[object Uint8ClampedArray]",OA="[object Uint16Array]",LA="[object Uint32Array]",it={};it[CA]=it[SA]=it[EA]=it[TA]=it[AA]=it[IA]=it[RA]=it[OA]=it[LA]=!0;it[uA]=it[dA]=it[$A]=it[fA]=it[kA]=it[hA]=it[pA]=it[gA]=it[mA]=it[vA]=it[yA]=it[bA]=it[_A]=it[wA]=it[xA]=!1;function PA(e){return cA(e)&&lA(e.length)&&!!it[aA(e)]}var MA=PA;function BA(e){return function(t){return e(t)}}var Td=BA,ll={exports:{}};ll.exports;(function(e,t){var n=wg,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||c&&c.binding&&c.binding("util")}catch{}}();e.exports=u})(ll,ll.exports);var Ad=ll.exports,jA=MA,UA=Td,R0=Ad,O0=R0&&R0.isTypedArray,DA=O0?UA(O0):jA,Gm=DA,NA=FT,HA=kd,zA=Jn,FA=Cd,WA=Sd,ZA=Gm,qA=Object.prototype,KA=qA.hasOwnProperty;function VA(e,t){var n=zA(e),i=!n&&HA(e),o=!n&&!i&&FA(e),a=!n&&!i&&!o&&ZA(e),c=n||i||o||a,u=c?NA(e.length,String):[],d=u.length;for(var p in e)(t||KA.call(e,p))&&!(c&&(p=="length"||o&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||WA(p,d)))&&u.push(p);return u}var Qm=VA,GA=Object.prototype;function QA(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||GA;return e===n}var Id=QA;function XA(e,t){return function(n){return e(t(n))}}var Xm=XA,YA=Xm,JA=YA(Object.keys,Object),eI=JA,tI=Id,nI=eI,rI=Object.prototype,iI=rI.hasOwnProperty;function sI(e){if(!tI(e))return nI(e);var t=[];for(var n in Object(e))iI.call(e,n)&&n!="constructor"&&t.push(n);return t}var oI=sI,aI=$g,lI=Ed;function cI(e){return e!=null&&lI(e.length)&&!aI(e)}var Ym=cI,uI=Qm,dI=oI,fI=Ym;function hI(e){return fI(e)?uI(e):dI(e)}var Pl=hI,pI=qm,gI=$d,mI=Pl;function vI(e){return pI(e,mI,gI)}var Jm=vI,L0=Jm,yI=1,bI=Object.prototype,_I=bI.hasOwnProperty;function wI(e,t,n,i,o,a){var c=n&yI,u=L0(e),d=u.length,p=L0(t),h=p.length;if(d!=h&&!c)return!1;for(var m=d;m--;){var v=u[m];if(!(c?v in t:_I.call(t,v)))return!1}var w=a.get(e),$=a.get(t);if(w&&$)return w==t&&$==e;var S=!0;a.set(e,t),a.set(t,e);for(var A=c;++m<d;){v=u[m];var k=e[v],P=t[v];if(i)var B=c?i(P,k,v,t,e,a):i(k,P,v,e,t,a);if(!(B===void 0?k===P||o(k,P,n,i,a):B)){S=!1;break}A||(A=v=="constructor")}if(S&&!A){var E=e.constructor,T=t.constructor;E!=T&&"constructor"in e&&"constructor"in t&&!(typeof E=="function"&&E instanceof E&&typeof T=="function"&&T instanceof T)&&(S=!1)}return a.delete(e),a.delete(t),S}var xI=wI,$I=xi,kI=Dn,CI=$I(kI,"DataView"),SI=CI,EI=xi,TI=Dn,AI=EI(TI,"Promise"),II=AI,RI=xi,OI=Dn,LI=RI(OI,"WeakMap"),PI=LI,ju=SI,Uu=Vu,Du=II,Nu=Eg,Hu=PI,ev=us,_s=kg,P0="[object Map]",MI="[object Object]",M0="[object Promise]",B0="[object Set]",j0="[object WeakMap]",U0="[object DataView]",BI=_s(ju),jI=_s(Uu),UI=_s(Du),DI=_s(Nu),NI=_s(Hu),fi=ev;(ju&&fi(new ju(new ArrayBuffer(1)))!=U0||Uu&&fi(new Uu)!=P0||Du&&fi(Du.resolve())!=M0||Nu&&fi(new Nu)!=B0||Hu&&fi(new Hu)!=j0)&&(fi=function(e){var t=ev(e),n=t==MI?e.constructor:void 0,i=n?_s(n):"";if(i)switch(i){case BI:return U0;case jI:return P0;case UI:return M0;case DI:return B0;case NI:return j0}return t});var Ml=fi,fu=wd,HI=Wm,zI=TT,FI=xI,D0=Ml,N0=Jn,H0=Cd,WI=Gm,ZI=1,z0="[object Arguments]",F0="[object Array]",Ia="[object Object]",qI=Object.prototype,W0=qI.hasOwnProperty;function KI(e,t,n,i,o,a){var c=N0(e),u=N0(t),d=c?F0:D0(e),p=u?F0:D0(t);d=d==z0?Ia:d,p=p==z0?Ia:p;var h=d==Ia,m=p==Ia,v=d==p;if(v&&H0(e)){if(!H0(t))return!1;c=!0,h=!1}if(v&&!h)return a||(a=new fu),c||WI(e)?HI(e,t,n,i,o,a):zI(e,t,d,n,i,o,a);if(!(n&ZI)){var w=h&&W0.call(e,"__wrapped__"),$=m&&W0.call(t,"__wrapped__");if(w||$){var S=w?e.value():e,A=$?t.value():t;return a||(a=new fu),o(S,A,n,i,a)}}return v?(a||(a=new fu),FI(e,t,n,i,o,a)):!1}var VI=KI,GI=VI,Z0=ni;function tv(e,t,n,i,o){return e===t?!0:e==null||t==null||!Z0(e)&&!Z0(t)?e!==e&&t!==t:GI(e,t,n,i,tv,o)}var nv=tv,QI=wd,XI=nv,YI=1,JI=2;function eR(e,t,n,i){var o=n.length,a=o,c=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],p=e[d],h=u[1];if(c&&u[2]){if(p===void 0&&!(d in e))return!1}else{var m=new QI;if(i)var v=i(p,h,d,e,t,m);if(!(v===void 0?XI(h,p,YI|JI,i,m):v))return!1}}return!0}var tR=eR,nR=Qn;function rR(e){return e===e&&!nR(e)}var rv=rR,iR=rv,sR=Pl;function oR(e){for(var t=sR(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,iR(o)]}return t}var aR=oR;function lR(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var iv=lR,cR=tR,uR=aR,dR=iv;function fR(e){var t=uR(e);return t.length==1&&t[0][2]?dR(t[0][0],t[0][1]):function(n){return n===e||cR(n,e,t)}}var hR=fR,pR=us,gR=ni,mR="[object Symbol]";function vR(e){return typeof e=="symbol"||gR(e)&&pR(e)==mR}var Bl=vR,yR=Jn,bR=Bl,_R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wR=/^\w*$/;function xR(e,t){if(yR(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||bR(e)?!0:wR.test(e)||!_R.test(e)||t!=null&&e in Object(t)}var Rd=xR,sv=Gu,$R="Expected a function";function Od(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError($R);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var c=e.apply(this,i);return n.cache=a.set(o,c)||a,c};return n.cache=new(Od.Cache||sv),n}Od.Cache=sv;var kR=Od,CR=kR,SR=500;function ER(e){var t=CR(e,function(i){return n.size===SR&&n.clear(),i}),n=t.cache;return t}var TR=ER,AR=TR,IR=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,RR=/\\(\\)?/g,OR=AR(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(IR,function(n,i,o,a){t.push(o?a.replace(RR,"$1"):i||n)}),t}),LR=OR;function PR(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Ld=PR,q0=cs,MR=Ld,BR=Jn,jR=Bl,UR=1/0,K0=q0?q0.prototype:void 0,V0=K0?K0.toString:void 0;function ov(e){if(typeof e=="string")return e;if(BR(e))return MR(e,ov)+"";if(jR(e))return V0?V0.call(e):"";var t=e+"";return t=="0"&&1/e==-UR?"-0":t}var DR=ov,NR=DR;function HR(e){return e==null?"":NR(e)}var zR=HR,FR=Jn,WR=Rd,ZR=LR,qR=zR;function KR(e,t){return FR(e)?e:WR(e,t)?[e]:ZR(qR(e))}var ws=KR,VR=Bl,GR=1/0;function QR(e){if(typeof e=="string"||VR(e))return e;var t=e+"";return t=="0"&&1/e==-GR?"-0":t}var xs=QR,XR=ws,YR=xs;function JR(e,t){t=XR(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[YR(t[n++])];return n&&n==i?e:void 0}var jl=JR,eO=jl;function tO(e,t,n){var i=e==null?void 0:eO(e,t);return i===void 0?n:i}var nO=tO;function rO(e,t){return e!=null&&t in Object(e)}var iO=rO,sO=ws,oO=kd,aO=Jn,lO=Sd,cO=Ed,uO=xs;function dO(e,t,n){t=sO(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var c=uO(t[i]);if(!(a=e!=null&&n(e,c)))break;e=e[c]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&cO(o)&&lO(c,o)&&(aO(e)||oO(e)))}var fO=dO,hO=iO,pO=fO;function gO(e,t){return e!=null&&pO(e,t,hO)}var mO=gO,vO=nv,yO=nO,bO=mO,_O=Rd,wO=rv,xO=iv,$O=xs,kO=1,CO=2;function SO(e,t){return _O(e)&&wO(t)?xO($O(e),t):function(n){var i=yO(n,e);return i===void 0&&i===t?bO(n,e):vO(t,i,kO|CO)}}var EO=SO;function TO(e){return e}var av=TO;function AO(e){return function(t){return t?.[e]}}var IO=AO,RO=jl;function OO(e){return function(t){return RO(t,e)}}var LO=OO,PO=IO,MO=LO,BO=Rd,jO=xs;function UO(e){return BO(e)?PO(jO(e)):MO(e)}var DO=UO,NO=hR,HO=EO,zO=av,FO=Jn,WO=DO;function ZO(e){return typeof e=="function"?e:e==null?zO:typeof e=="object"?FO(e)?HO(e[0],e[1]):NO(e):WO(e)}var Pd=ZO,qO=Pd,KO=Tg;function VO(e,t){return e&&e.length?KO(e,qO(t)):[]}var GO=VO;const lv=vo(GO),hu=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Ba=0;const{setActiveSubscriptions:QO}=J1();setInterval(()=>{QO(Ba)},1e3);const Cr=e=>{const{config:t,shouldMuteEvent:n}=Ue(),i=El(),[o,a]=we([]);pr(ul(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(p=>!n(p)))},{defer:!0})),dn(()=>{console.debug("subscription mounted",e()?.debugId,e()),br(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const c=d=>{const p=e()?.limit??50;a(h=>{const m=hu([d,...h].slice(0,p)),v=lv(m,w=>w.id);return v.length!==m.length&&console.warn("duplicated event",d),v})},u=()=>{const d=e();if(d==null)return;const{relayUrls:p,filters:h,options:m,onEvent:v,onEOSE:w,continuous:$=!0}=d,S=i().sub(p,h,m);let A=!0;Ba+=1;let k=!1,P=!1;const B=[];S.on("event",O=>{v?.(O),!(d.clientEventFilter!=null&&!d.clientEventFilter(O))&&(P?c(O):(k=!0,B.push(O)))}),S.on("eose",()=>{w?.(),P=!0,a(hu(B)),$||(S.unsub(),A&&(A=!1,Ba-=1))});let E=!1;const T=setInterval(()=>{if(!E){if(E=!0,P){clearInterval(T),E=!1;return}k&&(k=!1,a(hu(B))),E=!1}},100);br(()=>{S.unsub(),A&&(A=!1,Ba-=1),clearInterval(T)})};return pr(()=>{u()}),{events:o}},XO=e=>{const t=()=>kn(e),n=[e.id],i=t().rootEvent()?.id;i!=null&&n.push(i);const o=t().replyingToEvent()?.id;return o!=null&&n.push(o),gr(n)},YO=e=>{const{config:t}=Ue(),{events:n}=Cr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:XO(e.event),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return _(ys,{get events(){return[...n()].reverse()}})},JO=e=>_(Mn,{get children(){return _(Fe,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>_(YO,{get event(){return t.event}})})}}),eL=M('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),tL=M('<div class="shrink-0 border-b">'),nL=M('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),rL=M('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth">'),$s=e=>{let t;const n=cE(),i=()=>e.width??"medium";return Bu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Bu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),_(Nm.Provider,{value:n,get children(){const o=eL(),a=t;return typeof a=="function"?_r(a,o):t=o,I(o,_(le,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=tL();return I(c,()=>e.header),c})(),(()=>{const c=nL();return I(c,()=>e.children),c})()]},children:c=>(()=>{const u=rL(),d=u.firstChild,p=d.firstChild,h=p.firstChild,m=d.nextSibling;return p.$$click=()=>n?.clearTimeline(),I(h,_(qu,{})),I(m,_(JO,{timelineContent:c})),u})()})),Pe(c=>Ks(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},c)),o}})};_t(["click"]);const iL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),sL=(e={})=>(()=>{const t=iL();return Xe(t,e,!0,!0),t})(),oL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),aL=(e={})=>(()=>{const t=oL();return Xe(t,e,!0,!0),t})(),lL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),cL=(e={})=>(()=>{const t=lL();return Xe(t,e,!0,!0),t})(),uL=M('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),dL=M('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),fL=M('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),hL=e=>(()=>{const t=uL(),n=t.firstChild,i=n.nextSibling;return I(n,()=>e.title),I(i,()=>e.children),t})(),ks=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=Ue(),o=So(),a=u=>{t({...e.column,width:u})},c=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=fL(),d=u.firstChild,p=d.firstChild,h=p.firstChild,m=p.nextSibling,v=m.firstChild,w=m.nextSibling,$=w.nextSibling,S=$.firstChild;return I(u,_(hL,{title:"カラム幅",get children(){const A=dL(),k=A.firstChild,P=k.nextSibling,B=P.nextSibling,E=B.nextSibling;return k.$$click=()=>a("widest"),P.$$click=()=>a("wide"),B.$$click=()=>a("medium"),E.$$click=()=>a("narrow"),A}}),d),p.$$click=()=>c(e.columnIndex-1),I(h,_(sL,{})),m.$$click=()=>c(e.columnIndex+1),I(v,_(aL,{})),$.$$click=()=>n(e.column.id),I(S,_(cL,{})),u})()};_t(["click"]);const yr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>yr(n)(t));case"OR":return e.children.some(n=>yr(n)(t));case"NOT":return!yr(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},pL=e=>{const{config:t,removeColumn:n}=Ue(),{followingPubkeys:i}=Au(()=>({pubkey:e.column.pubkey})),{events:o}=Cr(()=>{const a=E4.uniq([...i()]);return a.length===0?null:{debugId:"following",relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:dr()-4*60*60}],clientEventFilter:c=>e.column.contentFilter==null?!0:yr(e.column.contentFilter)(c.content)}});return pr(()=>{console.log("home",o())}),dn(()=>console.log("home timeline mounted")),br(()=>console.log("home timeline unmounted")),_($s,{get header(){return _(yo,{get name(){return e.column.name??"ホーム"},get icon(){return _(bg,{})},settings:()=>_(ks,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(ys,{get events(){return o()}})}})},gL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),cv=(e={})=>(()=>{const t=gL();return Xe(t,e,!0,!0),t})(),mL=M('<span class="h-4 w-4 pt-[1px] text-rose-400">'),vL=M('<img alt="icon" class="rounded">'),yL=M('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),bL=M('<div class="notification-event py-1">'),_L=M('<div class="truncate">読み込み中 '),wL=e=>{const{shouldMuteEvent:t}=Ue(),{showProfile:n}=ti(),i=()=>kn(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=vs(()=>({pubkey:e.event.pubkey})),{event:c,query:u}=tm(()=>cn([o()])(([p])=>({eventId:p}))),d=()=>u.isSuccess&&c()==null;return _(le,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const p=yL(),h=p.firstChild,m=h.nextSibling,v=m.firstChild,w=v.nextSibling,$=w.firstChild;return I(h,_(Mn,{get fallback(){return e.event.content},get children(){return _(Fe,{get when(){return e.event.content==="+"},get children(){const S=mL();return I(S,_(md,{})),S}})}})),I(v,_(le,{get when(){return a()?.picture!=null},get children(){const S=vL();return Pe(()=>bt(S,"src",a()?.picture)),S}})),$.$$click=()=>n(e.event.pubkey),I($,_(Al,{get pubkey(){return e.event.pubkey}})),p})(),(()=>{const p=bL();return I(p,_(le,{get when(){return c()},get fallback(){return(()=>{const h=_L();return h.firstChild,I(h,o,null),h})()},keyed:!0,children:h=>_(Hm,{event:h})})),p})()]}})};_t(["click"]);const xL=M("<div>unknown event"),uv=e=>{const{shouldMuteEvent:t}=Ue();return _(jt,{get each(){return e.events},children:n=>_(le,{get when(){return!t(n)},get children(){return _(Mn,{get fallback(){return xL()},get children(){return[_(Fe,{get when(){return n.kind===yt.Text},get children(){return _(Ra,{get children(){return _(zm,{event:n})}})}}),_(Fe,{get when(){return n.kind===yt.Reaction},get children(){return _(Ra,{get children(){return _(wL,{event:n})}})}}),_(Fe,{get when(){return n.kind===6},get children(){return _(Ra,{get children(){return _(sm,{event:n})}})}})]}})}})})},$L=e=>{const{config:t,removeColumn:n}=Ue(),{events:i}=Cr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:yr(e.column.contentFilter)(o.content)}));return _($s,{get header(){return _(yo,{get name(){return e.column.name??"通知"},get icon(){return _(cv,{})},settings:()=>_(ks,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(uv,{get events(){return i()}})}})},kL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Md=(e={})=>(()=>{const t=kL();return Xe(t,e,!0,!0),t})(),CL=e=>{const{config:t,removeColumn:n}=Ue(),{events:i}=Cr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:yr(e.column.contentFilter)(o.content)}));return _($s,{get header(){return _(yo,{get name(){return e.column.name??"投稿"},get icon(){return _(Md,{})},settings:()=>_(ks,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(ys,{get events(){return i()}})}})},SL=e=>{const{config:t,removeColumn:n}=Ue(),{events:i}=Cr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:yr(e.column.contentFilter)(o.content)}));return _($s,{get header(){return _(yo,{get name(){return e.column.name??"リアクション"},get icon(){return _(gd,{})},settings:()=>_(ks,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(uv,{get events(){return i()}})}})},EL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Bd=(e={})=>(()=>{const t=EL();return Xe(t,e,!0,!0),t})(),TL=e=>{const{removeColumn:t}=Ue(),{events:n}=Cr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:dr()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:yr(e.column.contentFilter)(i.content)}));return _($s,{get header(){return _(yo,{get name(){return e.column.name??"リレー"},get icon(){return _(Bd,{})},settings:()=>_(ks,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(ys,{get events(){return n()}})}})},AL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),dv=(e={})=>(()=>{const t=AL();return Xe(t,e,!0,!0),t})(),IL=M('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),RL=e=>{const[t,n]=we(!1),[i,o]=we(""),{saveColumn:a}=Ue(),c=()=>n(m=>!m),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},p=m=>{o(m.currentTarget.value)},h=m=>{m.preventDefault(),u()};return dn(()=>{o(e.column.query)}),(()=>{const m=IL(),v=m.firstChild,w=v.firstChild,$=w.firstChild,S=w.nextSibling,A=S.firstChild,k=S.nextSibling;return I($,_(dv,{})),S.addEventListener("submit",h),A.addEventListener("blur",d),A.addEventListener("change",p),k.$$click=()=>c(),I(k,_(_g,{})),I(m,_(le,{get when(){return t()},get children(){return e.settings()}}),null),Pe(()=>A.value=i()),m})()},OL=e=>{const{removeColumn:t}=Ue(),{events:n}=Cr(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:N9,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:yr(e.column.contentFilter)(o.content)}});return _($s,{get header(){return _(RL,{get column(){return e.column},settings:()=>_(ks,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return _(ys,{get events(){return n()}})}})};_t(["click"]);const LL=M('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),PL=()=>{const{config:e}=Ue();return(()=>{const t=LL();return I(t,_(jt,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return _(Mn,{get children(){return[_(Fe,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:c=>_(pL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:c=>_($L,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:c=>_(CL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:c=>_(SL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:c=>_(TL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),_(Fe,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:c=>_(OL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},ML=M('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),BL=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=ML();i.$$click=n;const o=t;return typeof o=="function"?_r(o,i):t=i,I(i,()=>e.children),i})()};_t(["click"]);const jL=M('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),Eo=e=>_(BL,{onClose:()=>e.onClose?.(),get children(){const t=jL(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),I(i,_(le,{get when(){return e?.closeButton},get fallback(){return _(os,{})},keyed:!0,children:a=>a()})),I(o,()=>e.children),t}});_t(["click"]);const UL=M('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),DL=M('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),NL=M('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),HL=async()=>{const t=await(await fetch(Wu("packageInfo.json"))).text();return JSON.parse(t)},zL=e=>{const[t]=vg(HL);return _(Eo,{get onClose(){return e.onClose},get children(){const n=UL(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;u.firstChild;const d=i.nextSibling,p=d.nextSibling,h=p.nextSibling,m=h.nextSibling,v=m.firstChild,w=v.nextSibling;w.nextSibling;const $=m.nextSibling,S=$.nextSibling,A=S.nextSibling,k=A.nextSibling,P=k.nextSibling,B=P.nextSibling,E=B.nextSibling;return E.nextSibling,I(u,()=>t()?.self?.version,null),I(m,_(Ol,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),w),I(E,()=>t()?.self.licenseText),I(n,_(jt,{get each(){return t()?.packages??[]},fallback:"取得中",children:T=>[(()=>{const O=DL(),H=O.firstChild,W=H.nextSibling,ie=W.nextSibling,K=ie.nextSibling;return K.nextSibling,I(O,()=>T.name,H),I(O,()=>T.version,W),I(O,()=>T.licenseSpdx,K),O})(),(()=>{const O=NL();return I(O,()=>T.licenseText),O})()]}),null),Pe(()=>bt(o,"src",Wu("images/rabbit_app_256.png"))),n}})},FL=M('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),WL=e=>{const t=kr(),{saveColumn:n}=Ue(),i=So(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(m=>console.error(m))},a=()=>{cn([t()])(([m])=>{n(D1({pubkey:m}))}),o()},c=()=>{cn([t()])(([m])=>{n(N1({pubkey:m}))}),o()},u=()=>{n(H1()),o()},d=()=>{n(pd({query:""})),o()},p=()=>{cn([t()])(([m])=>{n(z1({pubkey:m}))}),o()},h=()=>{cn([t()])(([m])=>{n(F1({pubkey:m}))}),o()};return _(Eo,{get onClose(){return e.onClose},get children(){const m=FL(),v=m.firstChild,w=v.firstChild,$=v.nextSibling,S=$.firstChild,A=$.nextSibling,k=A.firstChild,P=A.nextSibling,B=P.firstChild,E=P.nextSibling,T=E.firstChild,O=E.nextSibling,H=O.firstChild;return v.$$click=()=>a(),I(w,_(bg,{})),$.$$click=()=>c(),I(S,_(cv,{})),A.$$click=()=>u(),I(k,_(Bd,{})),P.$$click=()=>d(),I(B,_(dv,{})),E.$$click=()=>p(),I(T,_(Md,{})),O.$$click=()=>h(),I(H,_(gd,{})),m}})};_t(["click"]);const ZL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),qL=(e={})=>(()=>{const t=ZL();return Xe(t,e,!0,!0),t})(),KL=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),VL=(e={})=>(()=>{const t=KL();return Xe(t,e,!0,!0),t})(),GL=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),QL=(e={})=>(()=>{const t=GL();return Xe(t,e,!0,!0),t})();function XL(e){const{config:t}=Ue(),n=Ve(e),{events:i}=Cr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[yt.Contacts],"#p":[n().pubkey]}],limit:1/0,continuous:!0})),o=()=>gr(i()?.map(c=>c.pubkey));return{followersPubkeys:o,count:()=>o().length}}const YL=e=>{const t=Ve(e),n=ls(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return Promise.resolve(null);const{nip05:u}=c;return M1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},JL=M('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),eP=M('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),tP=M('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),nP=M('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),rP=M('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),iP=M('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),sP=M('<div class="shrink-0 text-xs">読み込み中'),oP=M('<div class="shrink-0 text-xs">フォローされています'),aP=M('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),lP=M('<div class="truncate text-xl font-bold">'),cP=M('<div class="truncate text-xs">@'),uP=M('<span class="inline-block h-3 w-3">'),dP=M('<span class="inline-block h-4 w-4 text-blue-400">'),fP=M('<div class="flex items-center text-xs">'),hP=M('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),pP=M('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),gP=M('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),mP=M('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),vP=M('<ul class="border-t px-5 py-2 text-xs">'),yP=M('<ul class="border-t p-1">'),bP=M('<div class="h-12 shrink-0">'),_P=M('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),wP=M('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),xP=M('<span class="inline-block h-4 w-4 text-rose-500">'),$P=M('<span class="text-sm">読み込み中'),kP=M('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),CP=M('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),SP=e=>{const{count:t}=XL(()=>({pubkey:e.pubkey}));return Ve(t)},EP=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=Ue(),a=Ll(),c=kr(),{showProfileEdit:u}=ti(),d=Ve(()=>Tl(e.pubkey)),[p,h]=we(!1),[m,v]=we(!1),{profile:w,query:$}=vs(()=>({pubkey:e.pubkey})),{verification:S,query:A}=YL(()=>cn([w()?.nip05])(([X])=>({nip05:X}))),k=()=>{const X=w()?.nip05;if(X==null)return null;const[ve,G]=X.split("@");return G==null?null:ve==="_"?{domain:G,ident:G}:{user:ve,domain:G,ident:X}},P=()=>S()?.pubkey===e.pubkey,B=()=>o(e.pubkey),{followingPubkeys:E,invalidateFollowings:T,query:O}=Au(()=>cn([c()])(([X])=>({pubkey:X}))),H=()=>E().includes(e.pubkey),{followingPubkeys:W,query:ie}=Au(()=>({pubkey:e.pubkey})),K=()=>{const X=c();return X!=null&&W().includes(X)},se=gi({mutationKey:["updateContacts"],mutationFn:(...X)=>a.updateContacts(...X).then(ve=>Promise.allSettled(ve.map(ei(5e3)))),onSuccess:X=>{const ve=X.filter(Ae=>Ae.status==="fulfilled").length,G=X.length-ve;ve===X.length?console.log("succeeded to update contacts"):ve>0?console.log(`succeeded to update contacts for ${ve} relays but failed for ${G} relays`):console.error("failed to update contacts")},onError:X=>{console.error("failed to update contacts: ",X)},onSettled:()=>{T().then(()=>O.refetch()).catch(X=>console.error("failed to refetch contacts",X))}}),Z=()=>{const X=c();X!=null&&O.isFetched&&se.mutate({relayUrls:t().relayUrls,pubkey:X,content:O.data?.content??"",followingPubkeys:gr([...E(),e.pubkey])})},Y=()=>{const X=c();X!=null&&O.isFetched&&window.confirm("本当にフォロー解除しますか？")&&se.mutate({relayUrls:t().relayUrls,pubkey:X,content:O.data?.content??"",followingPubkeys:E().filter(ve=>ve!==e.pubkey)})},oe=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(X=>window.alert(X))}},{content:()=>B()?"ミュート解除":"ミュート",onSelect:()=>{B()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===c(),content:()=>H()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{H()?Y():Z()}}],{events:Ze}=Cr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:dr()}],continuous:!1}));return _(Eo,{onClose:()=>e.onClose?.(),get children(){return[_(le,{get when(){return $.isFetched},get fallback(){return"loading"},get children(){return[_(le,{get when(){return w()?.banner},get fallback(){return bP()},keyed:!0,children:X=>(()=>{const ve=_P(),G=ve.firstChild;return bt(G,"src",X),ve})()}),(()=>{const X=aP(),ve=X.firstChild,G=ve.firstChild,Ae=ve.nextSibling,$e=Ae.firstChild;return I(G,_(le,{get when(){return w()?.picture},keyed:!0,children:ee=>(()=>{const ye=wP();return bt(ye,"src",ee),ye})()})),I($e,_(Mn,{get children(){return[_(Fe,{get when(){return e.pubkey===c()},get children(){const ee=JL();return ee.$$click=()=>u(),ee}}),_(Fe,{get when(){return O.isLoading||O.isFetching},get children(){return eP()}}),_(Fe,{get when(){return se.isLoading},get children(){return tP()}}),_(Fe,{get when(){return H()},get children(){const ee=nP();return ee.$$click=()=>Y(),ee.addEventListener("mouseleave",()=>h(!1)),ee.addEventListener("mouseenter",()=>h(!0)),I(ee,_(le,{get when(){return!p()},fallback:"フォロー解除",children:"フォロー中"})),Pe(()=>ee.disabled=se.isLoading),ee}}),_(Fe,{get when(){return!H()},get children(){const ee=rP();return ee.$$click=()=>Z(),Pe(()=>ee.disabled=se.isLoading),ee}})]}}),null),I($e,_(lm,{menu:oe,get children(){const ee=iP();return I(ee,_(om,{})),ee}}),null),I(Ae,_(Mn,{get children(){return[_(Fe,{get when(){return ie.isLoading},get children(){return sP()}}),_(Fe,{get when(){return K()},get children(){return oP()}})]}}),null),X})(),(()=>{const X=hP(),ve=X.firstChild,G=ve.firstChild,Ae=G.nextSibling,$e=Ae.firstChild;return I(ve,_(le,{get when(){return(w()?.display_name?.length??0)>0},get children(){const ee=lP();return I(ee,()=>w()?.display_name),ee}}),G),I(G,_(le,{get when(){return(w()?.name?.length??0)>0},get children(){const ee=cP();return ee.firstChild,I(ee,()=>w()?.name,null),ee}}),null),I(G,_(le,{get when(){return(w()?.nip05?.length??0)>0},get children(){const ee=fP();return I(ee,()=>k()?.ident,null),I(ee,_(Mn,{get fallback(){return(()=>{const ye=xP();return I(ye,_(QL,{})),ye})()},get children(){return[_(Fe,{get when(){return A.isLoading},get children(){const ye=uP();return I(ye,_(qL,{})),ye}}),_(Fe,{get when(){return P()},get children(){const ye=dP();return I(ye,_(VL,{})),ye}})]}}),null),ee}}),null),I($e,d),X})(),_(le,{get when(){return(w()?.about??"").length>0},get children(){const X=pP();return I(X,()=>w()?.about),X}}),(()=>{const X=mP(),ve=X.firstChild,G=ve.firstChild,Ae=G.nextSibling;return I(Ae,_(le,{get when(){return ie.isFetched},get fallback(){return $P()},get children(){return W().length}})),I(X,_(le,{get when(){return!t().hideCount},get children(){const $e=gP(),ee=$e.firstChild,ye=ee.nextSibling;return I(ye,_(le,{get when(){return m()},get fallback(){return(()=>{const st=kP();return st.$$click=()=>v(!0),st})()},keyed:!0,get children(){return _(SP,{get pubkey(){return e.pubkey}})}})),$e}}),null),X})(),_(le,{get when(){return(w()?.website??"").length>0},get children(){const X=vP();return I(X,_(le,{get when(){return w()?.website},keyed:!0,children:ve=>(()=>{const G=CP(),Ae=G.firstChild;return I(Ae,_(Bd,{})),I(G,_(Ol,{class:"text-blue-500 underline",href:ve}),null),G})()})),X}})]}}),(()=>{const X=yP();return I(X,_(ys,{get events(){return Ze()}})),X})()]}})};_t(["click"]);function TP(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var AP=TP,IP=xi,RP=function(){try{var e=IP(Object,"defineProperty");return e({},"",{}),e}catch{}}(),fv=RP,G0=fv;function OP(e,t,n){t=="__proto__"&&G0?G0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var hv=OP,LP=hv,PP=Ku,MP=Object.prototype,BP=MP.hasOwnProperty;function jP(e,t,n){var i=e[t];(!(BP.call(e,t)&&PP(i,n))||n===void 0&&!(t in e))&&LP(e,t,n)}var jd=jP,UP=jd,DP=hv;function NP(e,t,n,i){var o=!n;n||(n={});for(var a=-1,c=t.length;++a<c;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?DP(n,u,d):UP(n,u,d)}return n}var To=NP,HP=To,zP=Pl;function FP(e,t){return e&&HP(t,zP(t),e)}var WP=FP;function ZP(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var qP=ZP,KP=Qn,VP=Id,GP=qP,QP=Object.prototype,XP=QP.hasOwnProperty;function YP(e){if(!KP(e))return GP(e);var t=VP(e),n=[];for(var i in e)i=="constructor"&&(t||!XP.call(e,i))||n.push(i);return n}var JP=YP,eM=Qm,tM=JP,nM=Ym;function rM(e){return nM(e)?eM(e,!0):tM(e)}var Ud=rM,iM=To,sM=Ud;function oM(e,t){return e&&iM(t,sM(t),e)}var aM=oM,cl={exports:{}};cl.exports;(function(e,t){var n=Dn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a?n.Buffer:void 0,u=c?c.allocUnsafe:void 0;function d(p,h){if(h)return p.slice();var m=p.length,v=u?u(m):new p.constructor(m);return p.copy(v),v}e.exports=d})(cl,cl.exports);var lM=cl.exports;function cM(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var uM=cM,dM=To,fM=$d;function hM(e,t){return dM(e,fM(e),t)}var pM=hM,gM=Xm,mM=gM(Object.getPrototypeOf,Object),Dd=mM,vM=xd,yM=Dd,bM=$d,_M=Km,wM=Object.getOwnPropertySymbols,xM=wM?function(e){for(var t=[];e;)vM(t,bM(e)),e=yM(e);return t}:_M,pv=xM,$M=To,kM=pv;function CM(e,t){return $M(e,kM(e),t)}var SM=CM,EM=qm,TM=pv,AM=Ud;function IM(e){return EM(e,AM,TM)}var Nd=IM,RM=Object.prototype,OM=RM.hasOwnProperty;function LM(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&OM.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var PM=LM,Q0=Zm;function MM(e){var t=new e.constructor(e.byteLength);return new Q0(t).set(new Q0(e)),t}var Hd=MM,BM=Hd;function jM(e,t){var n=t?BM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var UM=jM,DM=/\w*$/;function NM(e){var t=new e.constructor(e.source,DM.exec(e));return t.lastIndex=e.lastIndex,t}var HM=NM,X0=cs,Y0=X0?X0.prototype:void 0,J0=Y0?Y0.valueOf:void 0;function zM(e){return J0?Object(J0.call(e)):{}}var FM=zM,WM=Hd;function ZM(e,t){var n=t?WM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var qM=ZM,KM=Hd,VM=UM,GM=HM,QM=FM,XM=qM,YM="[object Boolean]",JM="[object Date]",eB="[object Map]",tB="[object Number]",nB="[object RegExp]",rB="[object Set]",iB="[object String]",sB="[object Symbol]",oB="[object ArrayBuffer]",aB="[object DataView]",lB="[object Float32Array]",cB="[object Float64Array]",uB="[object Int8Array]",dB="[object Int16Array]",fB="[object Int32Array]",hB="[object Uint8Array]",pB="[object Uint8ClampedArray]",gB="[object Uint16Array]",mB="[object Uint32Array]";function vB(e,t,n){var i=e.constructor;switch(t){case oB:return KM(e);case YM:case JM:return new i(+e);case aB:return VM(e,n);case lB:case cB:case uB:case dB:case fB:case hB:case pB:case gB:case mB:return XM(e,n);case eB:return new i;case tB:case iB:return new i(e);case nB:return GM(e);case rB:return new i;case sB:return QM(e)}}var yB=vB,bB=Qn,eg=Object.create,_B=function(){function e(){}return function(t){if(!bB(t))return{};if(eg)return eg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),wB=_B,xB=wB,$B=Dd,kB=Id;function CB(e){return typeof e.constructor=="function"&&!kB(e)?xB($B(e)):{}}var SB=CB,EB=Ml,TB=ni,AB="[object Map]";function IB(e){return TB(e)&&EB(e)==AB}var RB=IB,OB=RB,LB=Td,tg=Ad,ng=tg&&tg.isMap,PB=ng?LB(ng):OB,MB=PB,BB=Ml,jB=ni,UB="[object Set]";function DB(e){return jB(e)&&BB(e)==UB}var NB=DB,HB=NB,zB=Td,rg=Ad,ig=rg&&rg.isSet,FB=ig?zB(ig):HB,WB=FB,ZB=wd,qB=AP,KB=jd,VB=WP,GB=aM,QB=lM,XB=uM,YB=pM,JB=SM,ej=Jm,tj=Nd,nj=Ml,rj=PM,ij=yB,sj=SB,oj=Jn,aj=Cd,lj=MB,cj=Qn,uj=WB,dj=Pl,fj=Ud,hj=1,pj=2,gj=4,gv="[object Arguments]",mj="[object Array]",vj="[object Boolean]",yj="[object Date]",bj="[object Error]",mv="[object Function]",_j="[object GeneratorFunction]",wj="[object Map]",xj="[object Number]",vv="[object Object]",$j="[object RegExp]",kj="[object Set]",Cj="[object String]",Sj="[object Symbol]",Ej="[object WeakMap]",Tj="[object ArrayBuffer]",Aj="[object DataView]",Ij="[object Float32Array]",Rj="[object Float64Array]",Oj="[object Int8Array]",Lj="[object Int16Array]",Pj="[object Int32Array]",Mj="[object Uint8Array]",Bj="[object Uint8ClampedArray]",jj="[object Uint16Array]",Uj="[object Uint32Array]",tt={};tt[gv]=tt[mj]=tt[Tj]=tt[Aj]=tt[vj]=tt[yj]=tt[Ij]=tt[Rj]=tt[Oj]=tt[Lj]=tt[Pj]=tt[wj]=tt[xj]=tt[vv]=tt[$j]=tt[kj]=tt[Cj]=tt[Sj]=tt[Mj]=tt[Bj]=tt[jj]=tt[Uj]=!0;tt[bj]=tt[mv]=tt[Ej]=!1;function ja(e,t,n,i,o,a){var c,u=t&hj,d=t&pj,p=t&gj;if(n&&(c=o?n(e,i,o,a):n(e)),c!==void 0)return c;if(!cj(e))return e;var h=oj(e);if(h){if(c=rj(e),!u)return XB(e,c)}else{var m=nj(e),v=m==mv||m==_j;if(aj(e))return QB(e,u);if(m==vv||m==gv||v&&!o){if(c=d||v?{}:sj(e),!u)return d?JB(e,GB(c,e)):YB(e,VB(c,e))}else{if(!tt[m])return o?e:{};c=ij(e,m,u)}}a||(a=new ZB);var w=a.get(e);if(w)return w;a.set(e,c),uj(e)?e.forEach(function(A){c.add(ja(A,t,n,A,e,a))}):lj(e)&&e.forEach(function(A,k){c.set(k,ja(A,t,n,k,e,a))});var $=p?d?tj:ej:d?fj:dj,S=h?void 0:$(e);return qB(S||e,function(A,k){S&&(k=A,A=e[k]),KB(c,k,ja(A,t,n,k,e,a))}),c}var Dj=ja;function Nj(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var Hj=Nj;function zj(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var Fj=zj,Wj=jl,Zj=Fj;function qj(e,t){return t.length<2?e:Wj(e,Zj(t,0,-1))}var Kj=qj,Vj=ws,Gj=Hj,Qj=Kj,Xj=xs;function Yj(e,t){return t=Vj(t,e),e=Qj(e,t),e==null||delete e[Xj(Gj(t))]}var Jj=Yj,eU=us,tU=Dd,nU=ni,rU="[object Object]",iU=Function.prototype,sU=Object.prototype,yv=iU.toString,oU=sU.hasOwnProperty,aU=yv.call(Object);function lU(e){if(!nU(e)||eU(e)!=rU)return!1;var t=tU(e);if(t===null)return!0;var n=oU.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&yv.call(n)==aU}var cU=lU,uU=cU;function dU(e){return uU(e)?void 0:e}var fU=dU,sg=cs,hU=kd,pU=Jn,og=sg?sg.isConcatSpreadable:void 0;function gU(e){return pU(e)||hU(e)||!!(og&&e&&e[og])}var mU=gU,vU=xd,yU=mU;function bv(e,t,n,i,o){var a=-1,c=e.length;for(n||(n=yU),o||(o=[]);++a<c;){var u=e[a];t>0&&n(u)?t>1?bv(u,t-1,n,i,o):vU(o,u):i||(o[o.length]=u)}return o}var bU=bv,_U=bU;function wU(e){var t=e==null?0:e.length;return t?_U(e,1):[]}var xU=wU;function $U(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var kU=$U,CU=kU,ag=Math.max;function SU(e,t,n){return t=ag(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=ag(i.length-t,0),c=Array(a);++o<a;)c[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(c),CU(e,this,u)}}var EU=SU;function TU(e){return function(){return e}}var AU=TU,IU=AU,lg=fv,RU=av,OU=lg?function(e,t){return lg(e,"toString",{configurable:!0,enumerable:!1,value:IU(t),writable:!0})}:RU,LU=OU,PU=800,MU=16,BU=Date.now;function jU(e){var t=0,n=0;return function(){var i=BU(),o=MU-(i-n);if(n=i,o>0){if(++t>=PU)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var UU=jU,DU=LU,NU=UU,HU=NU(DU),zU=HU,FU=xU,WU=EU,ZU=zU;function qU(e){return ZU(WU(e,void 0,FU),e+"")}var KU=qU,VU=Ld,GU=Dj,QU=Jj,XU=ws,YU=To,JU=fU,eD=KU,tD=Nd,nD=1,rD=2,iD=4,sD=eD(function(e,t){var n={};if(e==null)return n;var i=!1;t=VU(t,function(a){return a=XU(a,e),i||(i=a.length>1),a}),YU(e,tD(e),n),i&&(n=GU(n,nD|rD|iD,JU));for(var o=t.length;o--;)QU(n,t[o]);return n}),oD=sD;const aD=vo(oD);var lD="Expected a function";function cD(e){if(typeof e!="function")throw new TypeError(lD);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var uD=cD,dD=jd,fD=ws,hD=Sd,cg=Qn,pD=xs;function gD(e,t,n,i){if(!cg(e))return e;t=fD(t,e);for(var o=-1,a=t.length,c=a-1,u=e;u!=null&&++o<a;){var d=pD(t[o]),p=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=c){var h=u[d];p=i?i(h,d,u):void 0,p===void 0&&(p=cg(h)?h:hD(t[o+1])?[]:{})}dD(u,d,p),u=u[d]}return e}var mD=gD,vD=jl,yD=mD,bD=ws;function _D(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var c=t[i],u=vD(e,c);n(u,c)&&yD(a,bD(c,e),u)}return a}var wD=_D,xD=Ld,$D=Pd,kD=wD,CD=Nd;function SD(e,t){if(e==null)return{};var n=xD(CD(e),function(i){return[i]});return t=$D(t),kD(e,n,function(i,o){return t(i,o[0])})}var ED=SD,TD=Pd,AD=uD,ID=ED;function RD(e,t){return ID(e,AD(TD(t)))}var OD=RD;const LD=vo(OD),PD=M('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),MD=M('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),BD=M('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),jD=M('<div class="px-4 pt-4">読み込み中...'),UD=M('<div><span class="font-bold">その他の項目</span><div>'),DD=M('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),ND=M('<div class="h-24 shrink-0">'),HD=M('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),zD="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",FD="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",WD=new RegExp(`^${zD}$`),_v=new RegExp(`^${FD}$`),ZD=e=>WD.test(e),qD=e=>_v.test(e),KD=e=>{const t=kr(),{config:n}=Ue(),[i,o]=we(""),[a,c]=we(""),[u,d]=we(""),[p,h]=we(""),[m,v]=we(""),[w,$]=we(""),[S,A]=we(""),[k,P]=we(""),{profile:B,invalidateProfile:E,query:T}=vs(()=>cn([t()])(([Y])=>({pubkey:Y}))),{updateProfile:O}=Ll(),H=gi({mutationKey:["updateProfile"],mutationFn:(...Y)=>O(...Y).then(oe=>Promise.allSettled(oe.map(ei(1e4)))),onSuccess:Y=>{const oe=Y.filter(X=>X.status==="fulfilled").length,Ze=Y.length-oe;oe===Y.length?window.alert("更新しました"):oe>0?window.alert(`${Ze}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),E().then(()=>T.refetch()).catch(X=>console.error(X)),e.onClose()},onError:Y=>{console.error("failed to delete",Y)}}),W=()=>T.isLoading||H.isLoading,ie=()=>W(),K=()=>aD(B(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),se=Y=>{Y.preventDefault();const oe=t();if(oe==null)return;const Ze=LD({picture:i(),banner:a(),name:u(),display_name:p(),about:m(),website:w(),nip05:S(),lud06:ZD(k())?k():null,lud16:qD(k())?k():null},X=>X==null||X.length===0);H.mutate({relayUrls:n().relayUrls,pubkey:oe,profile:Ze,otherProperties:K()})},Z=Y=>Y.key==="Enter"&&Y.preventDefault();return dn(()=>{const Y=B();Y!=null&&(T.refetch().catch(oe=>console.error(oe)),mu(()=>{o(oe=>Y.picture??oe),c(oe=>Y.banner??oe),d(oe=>Y.name??oe),h(oe=>Y.display_name??oe),v(oe=>Y.about??oe),$(oe=>Y.website??oe),A(oe=>Y.nip05??oe),Y.lud16!=null?P(Y.lud16):Y.lud06!=null&&P(Y.lud06)}))}),_(Eo,{closeButton:()=>_(qu,{}),get onClose(){return e.onClose},get children(){return[(()=>{const Y=BD(),oe=Y.firstChild;return I(Y,_(le,{get when(){return a().length>0},get fallback(){return ND()},keyed:!0,get children(){const Ze=PD(),X=Ze.firstChild;return Pe(()=>bt(X,"src",a())),Ze}}),oe),I(oe,_(le,{get when(){return i().length>0},get children(){const Ze=MD();return Pe(()=>bt(Ze,"src",i())),Ze}})),Y})(),_(le,{get when(){return W()},get children(){return jD()}}),(()=>{const Y=DD(),oe=Y.firstChild,Ze=oe.firstChild,X=Ze.firstChild,ve=X.nextSibling,G=Ze.nextSibling,Ae=G.firstChild,$e=Ae.nextSibling,ee=G.nextSibling,ye=ee.firstChild,st=ye.nextSibling,Ot=st.firstChild,$t=Ot.nextSibling,Zt=ee.nextSibling,V=Zt.firstChild,ft=V.nextSibling,ce=Zt.nextSibling,wt=ce.firstChild,gt=wt.nextSibling,Lt=ce.nextSibling,Hn=Lt.firstChild,ot=Hn.nextSibling,qt=Lt.nextSibling,Sr=qt.firstChild,ht=Sr.nextSibling,Dt=qt.nextSibling,er=Dt.firstChild,be=er.nextSibling,ze=be.nextSibling,at=Dt.nextSibling,St=at.firstChild,Jt=St.nextSibling;return oe.addEventListener("submit",se),ve.$$keydown=Z,ve.addEventListener("blur",ue=>o(ue.currentTarget.value)),$e.$$keydown=Z,$e.addEventListener("blur",ue=>c(ue.currentTarget.value)),$t.$$keydown=Z,$t.addEventListener("change",ue=>d(ue.currentTarget.value)),ft.$$keydown=Z,ft.addEventListener("change",ue=>h(ue.currentTarget.value)),gt.addEventListener("change",ue=>v(ue.currentTarget.value)),ot.$$keydown=Z,ot.addEventListener("change",ue=>$(ue.currentTarget.value)),ht.$$keydown=Z,ht.addEventListener("change",ue=>A(ue.currentTarget.value)),ze.$$keydown=Z,ze.addEventListener("change",ue=>P(ue.currentTarget.value)),I(oe,_(le,{get when(){return Object.entries(K()).length>0},get children(){const ue=UD(),fn=ue.firstChild,Le=fn.nextSibling;return I(Le,_(jt,{get each(){return Object.entries(K())},children:([nt,Cn])=>(()=>{const Sn=HD(),hn=Sn.firstChild,Er=hn.nextSibling;return I(hn,nt),I(Er,Cn),Sn})()})),ue}}),at),Jt.$$click=()=>e.onClose(),I(oe,_(le,{get when(){return H.isLoading},children:"保存中..."}),null),Pe(ue=>{const fn=ie(),Le=ie(),nt=ie(),Cn=ie(),Sn=ie(),hn=ie(),Er=_v.source,$i=ie(),ki=ie(),Ci=H.isLoading;return fn!==ue._v$&&(ve.disabled=ue._v$=fn),Le!==ue._v$2&&($e.disabled=ue._v$2=Le),nt!==ue._v$3&&($t.disabled=ue._v$3=nt),Cn!==ue._v$4&&(ft.disabled=ue._v$4=Cn),Sn!==ue._v$5&&(gt.disabled=ue._v$5=Sn),hn!==ue._v$6&&(ot.disabled=ue._v$6=hn),Er!==ue._v$7&&bt(ht,"pattern",ue._v$7=Er),$i!==ue._v$8&&(ht.disabled=ue._v$8=$i),ki!==ue._v$9&&(ze.disabled=ue._v$9=ki),Ci!==ue._v$10&&(St.disabled=ue._v$10=Ci),ue},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Pe(()=>ve.value=i()),Pe(()=>$e.value=a()),Pe(()=>$t.value=u()),Pe(()=>ft.value=p()),Pe(()=>gt.value=m()),Pe(()=>ot.value=w()),Pe(()=>ht.value=S()),Pe(()=>ze.value=k()),Y})()]}})};_t(["keydown","click"]);const VD=()=>{const e=kr(),{modalState:t,showProfile:n,closeModal:i}=ti();return _(le,{get when(){return t()},keyed:!0,children:o=>_(Mn,{get children(){return[_(Fe,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>_(EP,{pubkey:a,onClose:i})}),_(Fe,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return _(KD,{onClose:()=>cn([e()])(([a])=>{n(a)})})}}),_(Fe,{get when(){return o.type==="AddColumn"},get children(){return _(WL,{onClose:i})}}),_(Fe,{get when(){return o.type==="About"},get children(){return _(zL,{onClose:i})}})]}})})},GD=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),QD=(e={})=>(()=>{const t=GD();return Xe(t,e,!0,!0),t})(),XD=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),ug=(e={})=>(()=>{const t=XD();return Xe(t,e,!0,!0),t})(),YD=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),JD=(e={})=>(()=>{const t=YD();return Xe(t,e,!0,!0),t})(),eN=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),tN=(e={})=>(()=>{const t=eN();return Xe(t,e,!0,!0),t})(),nN=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),rN=(e={})=>(()=>{const t=nN();return Xe(t,e,!0,!0),t})(),iN=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),sN=(e={})=>(()=>{const t=iN();return Xe(t,e,!0,!0),t})(),dg=xt.string().length(64).regex(/^[0-9a-f]{64}$/),zu=xt.string().regex(/^\w+$/),oN=xt.object({shortcode:zu,url:xt.string().url(),keywords:xt.optional(xt.array(zu))}),aN=xt.object({manifest:xt.literal("emojipack_v1"),name:xt.string(),emojis:xt.array(oN),description:xt.optional(xt.string()),author:xt.optional(dg),publisher:xt.optional(dg)}).refine(e=>lv(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),wv=xt.record(zu,xt.string().url());aN.or(wv);const lN=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),cN=M('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),uN=M('<div class="py-2"><h3 class="font-bold">リレー</h3><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Fu=M('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),dN=M('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),fN=M('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),hN=M('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),pN=M('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),gN=M('<div class="py-2"><h3 class="font-bold">カスタム絵文字</h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9">名前</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9">URL</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">追加'),mN=M('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),vN=M('<div class="py-2"><h3 class="font-bold">絵文字のインポート</h3><p>絵文字の名前をキー、画像のURLを値とするJSONを読み込むことができます。</p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">インポート'),yN=M('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),bN=M('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),_N=M('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),wN=M('<div class="p-4">'),xN=M('<h2 class="flex-1 text-center text-lg font-bold">設定'),$N=M('<ul class="flex flex-col">'),kN=M('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),CN=M('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),xv=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,SN=xv("https?"),EN=xv("wss?"),TN=()=>{const e=kr(),{showProfile:t,showProfileEdit:n}=ti();return(()=>{const i=cN(),o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;return c.$$click=()=>cn([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},AN=()=>{const{config:e,addRelay:t,removeRelay:n}=Ue(),[i,o]=we(""),a=c=>{c.preventDefault(),i().length!==0&&(t(i()),o(""))};return(()=>{const c=uN(),u=c.firstChild,d=u.nextSibling,p=d.nextSibling,h=p.firstChild;return I(d,_(jt,{get each(){return e().relayUrls},children:m=>(()=>{const v=Fu(),w=v.firstChild,$=w.nextSibling;return I(w,m),$.$$click=()=>n(m),I($,_(os,{})),v})()})),p.addEventListener("submit",a),h.addEventListener("change",m=>o(m.currentTarget.value)),bt(h,"pattern",EN),Pe(()=>h.value=i()),c})()},IN=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],RN=()=>{const{config:e,setConfig:t}=Ue(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=dN(),o=i.firstChild,a=o.nextSibling;return I(a,_(jt,{each:IN,children:({id:c,name:u,example:d})=>(()=>{const p=fN(),h=p.firstChild,m=h.nextSibling;return h.$$click=()=>n(c),I(h,u),I(m,d),Pe(v=>{const w=e().dateFormat===c,$=e().dateFormat===c,S=e().dateFormat!==c,A=e().dateFormat!==c;return w!==v._v$&&h.classList.toggle("bg-rose-300",v._v$=w),$!==v._v$2&&h.classList.toggle("text-white",v._v$2=$),S!==v._v$3&&h.classList.toggle("bg-white",v._v$3=S),A!==v._v$4&&h.classList.toggle("text-rose-300",v._v$4=A),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()})),i})()},Ys=e=>(()=>{const t=hN();return t.$$click=n=>e.onClick(n),Pe(n=>{const i=!e.value,o=!e.value,a=!!e.value,c=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),c!==n._v$8&&t.classList.toggle("justify-end",n._v$8=c),u!==n._v$9&&bt(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),ON=()=>{const{config:e,setConfig:t}=Ue(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=pN(),a=o.firstChild,c=a.nextSibling,u=c.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,I(u,_(Ys,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),I(d,_(Ys,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},LN=()=>{const{config:e,saveEmoji:t,removeEmoji:n}=Ue(),[i,o]=we(""),[a,c]=we(""),u=d=>{d.preventDefault(),!(i().length===0||a().length===0)&&(t({shortcode:i(),url:a()}),o(""),c(""))};return(()=>{const d=gN(),p=d.firstChild,h=p.nextSibling,m=h.nextSibling,v=m.firstChild,w=v.firstChild,$=w.nextSibling,S=v.nextSibling,A=S.firstChild,k=A.nextSibling;return I(h,_(jt,{get each(){return Object.values(e().customEmojis)},children:({shortcode:P,url:B})=>(()=>{const E=mN(),T=E.firstChild,O=T.nextSibling,H=O.nextSibling;return bt(T,"src",B),bt(T,"alt",P),I(O,P),H.$$click=()=>n(P),I(H,_(os,{})),E})()})),m.addEventListener("submit",u),$.addEventListener("change",P=>o(P.currentTarget.value)),k.addEventListener("change",P=>c(P.currentTarget.value)),bt(k,"pattern",SN),Pe(()=>$.value=i()),Pe(()=>k.value=a()),d})()},PN=()=>{const{saveEmojis:e}=Ue(),[t,n]=we(""),i=o=>{if(o.preventDefault(),t().length!==0)try{const a=wv.parse(JSON.parse(t())),c=lN(a);e(c),n("")}catch(a){const c=a instanceof Error?`:${a.message}`:"";window.alert(`JSONの読み込みに失敗しました${c}`)}};return(()=>{const o=vN(),a=o.firstChild,c=a.nextSibling,u=c.nextSibling,d=u.firstChild;return u.addEventListener("submit",i),d.addEventListener("change",p=>n(p.currentTarget.value)),Pe(()=>d.value=t()),o})()},MN=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=Ue(),[o,a]=we(""),c=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=yN(),d=u.firstChild,p=d.nextSibling;return I(p,_(jt,{get each(){return e().mutedPubkeys},children:h=>(()=>{const m=Fu(),v=m.firstChild,w=v.nextSibling;return I(v,_(Al,{pubkey:h})),w.$$click=()=>t(h),I(w,_(os,{})),m})()})),u})(),(()=>{const u=bN(),d=u.firstChild,p=d.nextSibling,h=p.nextSibling,m=h.firstChild;return I(p,_(jt,{get each(){return e().mutedKeywords},children:v=>(()=>{const w=Fu(),$=w.firstChild,S=$.nextSibling;return I($,v),S.$$click=()=>i(v),I(S,_(os,{})),w})()})),h.addEventListener("submit",c),m.addEventListener("change",v=>a(v.currentTarget.value)),Pe(()=>m.value=o()),u})()]},BN=()=>{const{config:e,setConfig:t}=Ue(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=_N(),c=a.firstChild,u=c.nextSibling,d=u.firstChild;d.firstChild;const p=d.nextSibling;p.firstChild;const h=p.nextSibling;return h.firstChild,I(d,_(Ys,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),I(p,_(Ys,{get value(){return e().showImage},onClick:()=>i()}),null),I(h,_(Ys,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},jN=e=>{const[t,n]=we(null),i=[{name:()=>"プロフィール",icon:()=>_(Md,{}),render:()=>_(TN,{})},{name:()=>"リレー",icon:()=>_(sN,{}),render:()=>_(AN,{})},{name:()=>"表示",icon:()=>_(rN,{}),render:()=>[_(RN,{}),_(ON,{}),_(BN,{})]},{name:()=>"カスタム絵文字",icon:()=>_(Um,{}),render:()=>[_(LN,{}),_(PN,{})]},{name:()=>"ミュート",icon:()=>_(tN,{}),render:()=>_(MN,{})}],o=()=>{const a=t();return a==null?null:i[a]};return _(Eo,{get onClose(){return e.onClose},get children(){const a=wN();return I(a,_(le,{get when(){return o()},get fallback(){return[xN(),(()=>{const c=$N();return I(c,_(jt,{each:i,children:(u,d)=>(()=>{const p=kN(),h=p.firstChild,m=h.firstChild;return h.$$click=()=>n(d),I(m,()=>u.icon()),I(h,()=>u.name(),null),p})()})),c})()]},keyed:!0,children:c=>(()=>{const u=CN(),d=u.firstChild,p=d.nextSibling;return d.$$click=()=>n(null),I(d,_(qu,{})),I(p,()=>c.render()),u})()})),a}})};_t(["click"]);const UN=M('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),DN=M('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),NN=M('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),HN=()=>{let e,t;const{saveColumn:n}=Ue(),i=So(),[o,a]=we(""),c=u=>{u.preventDefault(),n(pd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return _(vd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=DN();return I(u,_(ug,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=UN(),d=u.firstChild,p=d.nextSibling;u.addEventListener("submit",c),d.addEventListener("change",m=>a(m.currentTarget.value));const h=t;return typeof h=="function"?_r(h,d):t=d,I(p,_(ug,{})),Pe(()=>d.value=o()),u}})},zN=()=>{let e;const{showAddColumn:t,showAbout:n}=ti(),{config:i}=Ue(),[o,a]=we(!1),[c,u]=we(!1),d=()=>{e?.focus(),e?.click()},p=()=>a(!0),h=()=>a(!1),m=()=>a(v=>!v);return Bu(()=>({commandType:"openPostForm",handler:()=>{p(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=NN(),w=v.firstChild,$=w.firstChild,S=$.firstChild,A=$.nextSibling,k=A.nextSibling,P=k.firstChild,B=P.nextSibling,E=B.nextSibling,T=E.firstChild,O=w.nextSibling;return S.$$click=()=>m(),I(S,_(JD,{})),I($,_(HN,{}),null),P.$$click=()=>t(),I(P,_(am,{})),B.$$click=()=>u(H=>!H),I(B,_(QD,{})),E.$$click=()=>n(),I(O,_(Dm,{textAreaRef:H=>{e=H},onClose:h})),I(v,_(le,{get when(){return c()},get children(){return _(jN,{onClose:()=>u(!1)})}}),null),Pe(H=>{const W=Wu("images/rabbit_app_256.png"),ie=!!(o()||i().keepOpenPostForm),K=!(o()||i().keepOpenPostForm);return W!==H._v$&&bt(T,"src",H._v$=W),ie!==H._v$2&&O.classList.toggle("static",H._v$2=ie),K!==H._v$3&&O.classList.toggle("hidden",H._v$3=K),H},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};_t(["click"]);var FN=Dn,WN=function(){return FN.Date.now()},ZN=WN,qN=/\s/;function KN(e){for(var t=e.length;t--&&qN.test(e.charAt(t)););return t}var VN=KN,GN=VN,QN=/^\s+/;function XN(e){return e&&e.slice(0,GN(e)+1).replace(QN,"")}var YN=XN,JN=YN,fg=Qn,eH=Bl,hg=0/0,tH=/^[-+]0x[0-9a-f]+$/i,nH=/^0b[01]+$/i,rH=/^0o[0-7]+$/i,iH=parseInt;function sH(e){if(typeof e=="number")return e;if(eH(e))return hg;if(fg(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=fg(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=JN(e);var n=nH.test(e);return n||rH.test(e)?iH(e.slice(2),n?2:8):tH.test(e)?hg:+e}var oH=sH,aH=Qn,pu=ZN,pg=oH,lH="Expected a function",cH=Math.max,uH=Math.min;function dH(e,t,n){var i,o,a,c,u,d,p=0,h=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(lH);t=pg(t)||0,aH(n)&&(h=!!n.leading,m="maxWait"in n,a=m?cH(pg(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function w(O){var H=i,W=o;return i=o=void 0,p=O,c=e.apply(W,H),c}function $(O){return p=O,u=setTimeout(k,t),h?w(O):c}function S(O){var H=O-d,W=O-p,ie=t-H;return m?uH(ie,a-W):ie}function A(O){var H=O-d,W=O-p;return d===void 0||H>=t||H<0||m&&W>=a}function k(){var O=pu();if(A(O))return P(O);u=setTimeout(k,S(O))}function P(O){return u=void 0,v&&i?w(O):(i=o=void 0,c)}function B(){u!==void 0&&clearTimeout(u),p=0,i=d=o=u=void 0}function E(){return u===void 0?c:P(pu())}function T(){var O=pu(),H=A(O);if(i=arguments,o=this,d=O,H){if(u===void 0)return $(d);if(m)return clearTimeout(u),u=setTimeout(k,t),w(d)}return u===void 0&&(u=setTimeout(k,t)),c}return T.cancel=B,T.flush=E,T}var fH=dH,hH=fH,pH=Qn,gH="Expected a function";function mH(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(gH);return pH(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),hH(e,t,{leading:i,maxWait:t,trailing:o})}var vH=mH;const yH=vo(vH),bH=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],_H=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},wH=({shortcuts:e=bH,onShortcut:t})=>{const n=_H(e);dn(()=>{const i=yH(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),br(()=>{window.removeEventListener("keydown",i)})})},xH=()=>{const e=So();wH({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},$H=M('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),EH=()=>{xH();const e=g4(),{persistStatus:t}=b4(),n=El(),{config:i,initializeColumns:o}=Ue(),a=kr();return pr(()=>{i().relayUrls.map(async c=>{(await n().ensureRelay(c)).on("notice",d=>{console.error(`NOTICE: ${c}: ${d}`)})})}),pr(()=>{const c=a();c!=null&&o({pubkey:c})}),dn(()=>{t().loggedIn||e("/hello")}),m4(c=>{console.error("uncaught error: ",c)}),(()=>{const c=$H();return I(c,_(zN,{}),null),I(c,_(PL,{}),null),I(c,_(VD,{}),null),c})()};export{EH as default};
//# sourceMappingURL=Home-b21549dc.js.map
