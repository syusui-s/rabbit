import{S as d0,s as pu,n as Qx,i as gp,a as mp,t as Xx,f as Yx,c as Jx,r as vp,b as e4,d as f0,g as t4,u as os,e as h0,h as gu,o as Xr,j as kn,k as Ys,l as ul,p as yp,m as st,q as M,v as bt,w as $e,x as I,y as w,z as le,A as Ge,B as dl,C as n4,M as Fe,D as r4,E as Pn,F as pr,G as i4,H as Le,I as s4,J as Zn,K as Ht,L as o4,N as yt,O as a4,P as l4,Q as qs,R as c4,T as u4}from"./index-055651ca.js";import{c as Ki,u as Di,a as d4,b as f4,r as zu,d as h4}from"./usePersistStatus-3f57f57e.js";class p4 extends d0{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),bp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return mu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return mu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),pu(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&_p(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const c=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(Qx)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),gp||this.currentResult.isStale||!mp(this.options.staleTime))return;const n=Xx(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(gp||this.options.enabled===!1||!mp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Yx.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,c=this.currentResultState,u=this.currentResultOptions,d=t!==i,p=d?t.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:m}=t;let{dataUpdatedAt:v,error:_,errorUpdatedAt:x,fetchStatus:E,status:k}=m,C=!1,P=!1,B;if(n._optimisticResults){const W=this.hasListeners(),se=!W&&bp(t,n),V=W&&_p(t,i,n,o);(se||V)&&(E=Jx(t.options.networkMode)?"fetching":"paused",v||(k="loading")),n._optimisticResults==="isRestoring"&&(E="idle")}if(n.keepPreviousData&&!m.dataUpdatedAt&&h!=null&&h.isSuccess&&k!=="error")B=h.data,v=h.dataUpdatedAt,k=h.status,C=!0;else if(n.select&&typeof m.data<"u")if(a&&m.data===c?.data&&n.select===this.selectFn)B=this.selectResult;else try{this.selectFn=n.select,B=n.select(m.data),B=vp(a?.data,B,n),this.selectResult=B,this.selectError=null}catch(W){this.selectError=W}else B=m.data;if(typeof n.placeholderData<"u"&&typeof B>"u"&&k==="loading"){let W;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)W=a.data;else if(W=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof W<"u")try{W=n.select(W),this.selectError=null}catch(se){this.selectError=se}typeof W<"u"&&(k="success",B=vp(a?.data,W,n),P=!0)}this.selectError&&(_=this.selectError,B=this.selectResult,x=Date.now(),k="error");const R=E==="fetching",T=k==="loading",L=k==="error";return{status:k,fetchStatus:E,isLoading:T,isSuccess:k==="success",isError:L,isInitialLoading:T&&R,data:B,dataUpdatedAt:v,error:_,errorUpdatedAt:x,failureCount:m.fetchFailureCount,failureReason:m.fetchFailureReason,errorUpdateCount:m.errorUpdateCount,isFetched:m.dataUpdateCount>0||m.errorUpdateCount>0,isFetchedAfterMount:m.dataUpdateCount>p.dataUpdateCount||m.errorUpdateCount>p.errorUpdateCount,isFetching:R,isRefetching:R&&!T,isLoadingError:L&&m.dataUpdatedAt===0,isPaused:E==="paused",isPlaceholderData:P,isPreviousData:C,isRefetchError:L&&m.dataUpdatedAt!==0,isStale:Fu(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,pu(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:c}=this.options;if(c==="all"||!c&&!this.trackedProps.size)return!0;const u=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const p=d;return this.currentResult[p]!==n[p]&&u.has(p)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!e4(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){f0.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var c,u,d,p;(c=(u=this.options).onError)==null||c.call(u,this.currentResult.error),(d=(p=this.options).onSettled)==null||d.call(p,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function g4(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function bp(e,t){return g4(e,t)||e.state.dataUpdatedAt>0&&mu(e,t,t.refetchOnMount)}function mu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&Fu(e,t)}return!1}function _p(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&Fu(e,n)}function Fu(e,t){return e.isStaleByTime(t.staleTime)}class m4 extends d0{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),pu(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:t4(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){f0.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var c,u,d,p;(c=(u=this.mutateOptions).onError)==null||c.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(p=this.mutateOptions).onSettled)==null||d.call(p,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)})})}}function v4(e){return typeof e=="function"}function wp(e,t,n){if(!v4(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function p0(e,t){return typeof e=="function"?e(...t):!!e}function y4(e,t){const n=os({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[c,u]=Ki(a.getOptimisticResult(o)),[d,{refetch:p,mutate:h}]=h0(()=>new Promise(x=>{c.isFetching&&c.isLoading||(Di(c.data)===i&&x(void 0),x(Di(c.data)))}));gu(()=>{h(()=>Di(c.data)),p()});let m=[];const v=a.subscribe(x=>{m.push(()=>{gu(()=>{const E={...Di(x)};E.data===void 0&&(E.data=i),u(Di(E)),h(()=>Di(x.data)),p()})}),queueMicrotask(()=>{const E=m.pop();E&&E(),m=[]})});Xr(()=>v()),kn(()=>{a.setOptions(o,{listeners:!1})}),Ys(()=>{const x=n.defaultQueryOptions(e);a.setOptions(x)}),Ys(ul(()=>c.status,()=>{if(c.isError&&!c.isFetching&&p0(a.options.useErrorBoundary,[c.error,a.getCurrentQuery()]))throw c.error}));const _={get(x,E){return E==="data"?d():Reflect.get(x,E)}};return new Proxy(c,_)}function as(e,t,n){const[i,o]=Ki(wp(e,t,n));return Ys(()=>{const a=wp(e,t,n);o(a)}),y4(i,p4)}function pi(e,t,n){const[i,o]=Ki(yp(e,t,n)),a=os({context:i.context}),c=new m4(a,i),u=(m,v)=>{c.mutate(m,v).catch(b4)},[d,p]=Ki({...c.getCurrentResult(),mutate:u,mutateAsync:c.getCurrentResult().mutate});Ys(()=>{const m=yp(e,t,n);o(m),c.setOptions(m)}),Ys(ul(()=>d.status,()=>{if(d.isError&&p0(c.options.useErrorBoundary,[d.error]))throw d.error}));const h=c.subscribe(m=>{p({...m,mutate:u,mutateAsync:m.mutate})});return Xr(h),d}function b4(){}const _4=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),g0=(e={})=>(()=>{const t=_4();return st(t,e,!0,!0),t})();var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function fl(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var ja={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ja.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",p=500,h="__lodash_placeholder__",m=1,v=2,_=4,x=1,E=2,k=1,C=2,P=4,B=8,R=16,T=32,L=64,H=128,W=256,se=512,V=30,re="...",Z=800,X=16,oe=1,Ze=2,J=3,ve=1/0,ke=9007199254740991,ce=17976931348623157e292,ye=0/0,K=4294967295,Pe=K-1,Ye=K>>>1,kt=[["ary",H],["bind",k],["bindKey",C],["curry",B],["curryRight",R],["flip",se],["partial",T],["partialRight",L],["rearg",W]],ot="[object Arguments]",Bt="[object Array]",un="[object AsyncFunction]",G="[object Boolean]",ie="[object Date]",_t="[object DOMException]",gt="[object Error]",Rt="[object Function]",Nn="[object GeneratorFunction]",at="[object Map]",Wt="[object Number]",xr="[object Null]",ht="[object Object]",Ut="[object Promise]",er="[object Proxy]",be="[object RegExp]",ze="[object Set]",lt="[object String]",Ct="[object Symbol]",Xt="[object Undefined]",ue="[object WeakMap]",dn="[object WeakSet]",Oe="[object ArrayBuffer]",nt="[object DataView]",Zt="[object Float32Array]",Cn="[object Float64Array]",fn="[object Int8Array]",$r="[object Int16Array]",xi="[object Int32Array]",$i="[object Uint8Array]",ki="[object Uint8ClampedArray]",Ul="[object Uint16Array]",jl="[object Uint32Array]",vv=/\b__p \+= '';/g,yv=/\b(__p \+=) '' \+/g,bv=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Dd=/&(?:amp|lt|gt|quot|#39);/g,Nd=/[&<>"']/g,_v=RegExp(Dd.source),wv=RegExp(Nd.source),xv=/<%-([\s\S]+?)%>/g,$v=/<%([\s\S]+?)%>/g,Hd=/<%=([\s\S]+?)%>/g,kv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Cv=/^\w*$/,Sv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Dl=/[\\^$.*+?()[\]{}|]/g,Ev=RegExp(Dl.source),Nl=/^\s+/,Tv=/\s/,Av=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Iv=/\{\n\/\* \[wrapped with (.+)\] \*/,Rv=/,? & /,Ov=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Lv=/[()=,{}\[\]\/\s]/,Pv=/\\(\\)?/g,Mv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,zd=/\w*$/,Bv=/^[-+]0x[0-9a-f]+$/i,Uv=/^0b[01]+$/i,jv=/^\[object .+?Constructor\]$/,Dv=/^0o[0-7]+$/i,Nv=/^(?:0|[1-9]\d*)$/,Hv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,To=/($^)/,zv=/['\n\r\u2028\u2029\\]/g,Ao="\\ud800-\\udfff",Fv="\\u0300-\\u036f",Wv="\\ufe20-\\ufe2f",Zv="\\u20d0-\\u20ff",Fd=Fv+Wv+Zv,Wd="\\u2700-\\u27bf",Zd="a-z\\xdf-\\xf6\\xf8-\\xff",qv="\\xac\\xb1\\xd7\\xf7",Kv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Gv="\\u2000-\\u206f",Vv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",qd="A-Z\\xc0-\\xd6\\xd8-\\xde",Kd="\\ufe0e\\ufe0f",Gd=qv+Kv+Gv+Vv,Hl="['’]",Qv="["+Ao+"]",Vd="["+Gd+"]",Io="["+Fd+"]",Qd="\\d+",Xv="["+Wd+"]",Xd="["+Zd+"]",Yd="[^"+Ao+Gd+Qd+Wd+Zd+qd+"]",zl="\\ud83c[\\udffb-\\udfff]",Yv="(?:"+Io+"|"+zl+")",Jd="[^"+Ao+"]",Fl="(?:\\ud83c[\\udde6-\\uddff]){2}",Wl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ci="["+qd+"]",ef="\\u200d",tf="(?:"+Xd+"|"+Yd+")",Jv="(?:"+Ci+"|"+Yd+")",nf="(?:"+Hl+"(?:d|ll|m|re|s|t|ve))?",rf="(?:"+Hl+"(?:D|LL|M|RE|S|T|VE))?",sf=Yv+"?",of="["+Kd+"]?",e2="(?:"+ef+"(?:"+[Jd,Fl,Wl].join("|")+")"+of+sf+")*",t2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",n2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",af=of+sf+e2,r2="(?:"+[Xv,Fl,Wl].join("|")+")"+af,i2="(?:"+[Jd+Io+"?",Io,Fl,Wl,Qv].join("|")+")",s2=RegExp(Hl,"g"),o2=RegExp(Io,"g"),Zl=RegExp(zl+"(?="+zl+")|"+i2+af,"g"),a2=RegExp([Ci+"?"+Xd+"+"+nf+"(?="+[Vd,Ci,"$"].join("|")+")",Jv+"+"+rf+"(?="+[Vd,Ci+tf,"$"].join("|")+")",Ci+"?"+tf+"+"+nf,Ci+"+"+rf,n2,t2,Qd,r2].join("|"),"g"),l2=RegExp("["+ef+Ao+Fd+Kd+"]"),c2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,u2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],d2=-1,rt={};rt[Zt]=rt[Cn]=rt[fn]=rt[$r]=rt[xi]=rt[$i]=rt[ki]=rt[Ul]=rt[jl]=!0,rt[ot]=rt[Bt]=rt[Oe]=rt[G]=rt[nt]=rt[ie]=rt[gt]=rt[Rt]=rt[at]=rt[Wt]=rt[ht]=rt[be]=rt[ze]=rt[lt]=rt[ue]=!1;var et={};et[ot]=et[Bt]=et[Oe]=et[nt]=et[G]=et[ie]=et[Zt]=et[Cn]=et[fn]=et[$r]=et[xi]=et[at]=et[Wt]=et[ht]=et[be]=et[ze]=et[lt]=et[Ct]=et[$i]=et[ki]=et[Ul]=et[jl]=!0,et[gt]=et[Rt]=et[ue]=!1;var f2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},h2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},g2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},m2=parseFloat,v2=parseInt,lf=typeof fr=="object"&&fr&&fr.Object===Object&&fr,y2=typeof self=="object"&&self&&self.Object===Object&&self,Tt=lf||y2||Function("return this")(),ql=t&&!t.nodeType&&t,ni=ql&&!0&&e&&!e.nodeType&&e,cf=ni&&ni.exports===ql,Kl=cf&&lf.process,hn=function(){try{var A=ni&&ni.require&&ni.require("util").types;return A||Kl&&Kl.binding&&Kl.binding("util")}catch{}}(),uf=hn&&hn.isArrayBuffer,df=hn&&hn.isDate,ff=hn&&hn.isMap,hf=hn&&hn.isRegExp,pf=hn&&hn.isSet,gf=hn&&hn.isTypedArray;function Yt(A,j,U){switch(U.length){case 0:return A.call(j);case 1:return A.call(j,U[0]);case 2:return A.call(j,U[0],U[1]);case 3:return A.call(j,U[0],U[1],U[2])}return A.apply(j,U)}function b2(A,j,U,te){for(var _e=-1,qe=A==null?0:A.length;++_e<qe;){var xt=A[_e];j(te,xt,U(xt),A)}return te}function pn(A,j){for(var U=-1,te=A==null?0:A.length;++U<te&&j(A[U],U,A)!==!1;);return A}function _2(A,j){for(var U=A==null?0:A.length;U--&&j(A[U],U,A)!==!1;);return A}function mf(A,j){for(var U=-1,te=A==null?0:A.length;++U<te;)if(!j(A[U],U,A))return!1;return!0}function kr(A,j){for(var U=-1,te=A==null?0:A.length,_e=0,qe=[];++U<te;){var xt=A[U];j(xt,U,A)&&(qe[_e++]=xt)}return qe}function Ro(A,j){var U=A==null?0:A.length;return!!U&&Si(A,j,0)>-1}function Gl(A,j,U){for(var te=-1,_e=A==null?0:A.length;++te<_e;)if(U(j,A[te]))return!0;return!1}function ct(A,j){for(var U=-1,te=A==null?0:A.length,_e=Array(te);++U<te;)_e[U]=j(A[U],U,A);return _e}function Cr(A,j){for(var U=-1,te=j.length,_e=A.length;++U<te;)A[_e+U]=j[U];return A}function Vl(A,j,U,te){var _e=-1,qe=A==null?0:A.length;for(te&&qe&&(U=A[++_e]);++_e<qe;)U=j(U,A[_e],_e,A);return U}function w2(A,j,U,te){var _e=A==null?0:A.length;for(te&&_e&&(U=A[--_e]);_e--;)U=j(U,A[_e],_e,A);return U}function Ql(A,j){for(var U=-1,te=A==null?0:A.length;++U<te;)if(j(A[U],U,A))return!0;return!1}var x2=Xl("length");function $2(A){return A.split("")}function k2(A){return A.match(Ov)||[]}function vf(A,j,U){var te;return U(A,function(_e,qe,xt){if(j(_e,qe,xt))return te=qe,!1}),te}function Oo(A,j,U,te){for(var _e=A.length,qe=U+(te?1:-1);te?qe--:++qe<_e;)if(j(A[qe],qe,A))return qe;return-1}function Si(A,j,U){return j===j?B2(A,j,U):Oo(A,yf,U)}function C2(A,j,U,te){for(var _e=U-1,qe=A.length;++_e<qe;)if(te(A[_e],j))return _e;return-1}function yf(A){return A!==A}function bf(A,j){var U=A==null?0:A.length;return U?Jl(A,j)/U:ye}function Xl(A){return function(j){return j==null?n:j[A]}}function Yl(A){return function(j){return A==null?n:A[j]}}function _f(A,j,U,te,_e){return _e(A,function(qe,xt,Je){U=te?(te=!1,qe):j(U,qe,xt,Je)}),U}function S2(A,j){var U=A.length;for(A.sort(j);U--;)A[U]=A[U].value;return A}function Jl(A,j){for(var U,te=-1,_e=A.length;++te<_e;){var qe=j(A[te]);qe!==n&&(U=U===n?qe:U+qe)}return U}function ec(A,j){for(var U=-1,te=Array(A);++U<A;)te[U]=j(U);return te}function E2(A,j){return ct(j,function(U){return[U,A[U]]})}function wf(A){return A&&A.slice(0,Cf(A)+1).replace(Nl,"")}function Jt(A){return function(j){return A(j)}}function tc(A,j){return ct(j,function(U){return A[U]})}function ks(A,j){return A.has(j)}function xf(A,j){for(var U=-1,te=A.length;++U<te&&Si(j,A[U],0)>-1;);return U}function $f(A,j){for(var U=A.length;U--&&Si(j,A[U],0)>-1;);return U}function T2(A,j){for(var U=A.length,te=0;U--;)A[U]===j&&++te;return te}var A2=Yl(f2),I2=Yl(h2);function R2(A){return"\\"+g2[A]}function O2(A,j){return A==null?n:A[j]}function Ei(A){return l2.test(A)}function L2(A){return c2.test(A)}function P2(A){for(var j,U=[];!(j=A.next()).done;)U.push(j.value);return U}function nc(A){var j=-1,U=Array(A.size);return A.forEach(function(te,_e){U[++j]=[_e,te]}),U}function kf(A,j){return function(U){return A(j(U))}}function Sr(A,j){for(var U=-1,te=A.length,_e=0,qe=[];++U<te;){var xt=A[U];(xt===j||xt===h)&&(A[U]=h,qe[_e++]=U)}return qe}function Lo(A){var j=-1,U=Array(A.size);return A.forEach(function(te){U[++j]=te}),U}function M2(A){var j=-1,U=Array(A.size);return A.forEach(function(te){U[++j]=[te,te]}),U}function B2(A,j,U){for(var te=U-1,_e=A.length;++te<_e;)if(A[te]===j)return te;return-1}function U2(A,j,U){for(var te=U+1;te--;)if(A[te]===j)return te;return te}function Ti(A){return Ei(A)?D2(A):x2(A)}function Sn(A){return Ei(A)?N2(A):$2(A)}function Cf(A){for(var j=A.length;j--&&Tv.test(A.charAt(j)););return j}var j2=Yl(p2);function D2(A){for(var j=Zl.lastIndex=0;Zl.test(A);)++j;return j}function N2(A){return A.match(Zl)||[]}function H2(A){return A.match(a2)||[]}var z2=function A(j){j=j==null?Tt:Ai.defaults(Tt.Object(),j,Ai.pick(Tt,u2));var U=j.Array,te=j.Date,_e=j.Error,qe=j.Function,xt=j.Math,Je=j.Object,rc=j.RegExp,F2=j.String,gn=j.TypeError,Po=U.prototype,W2=qe.prototype,Ii=Je.prototype,Mo=j["__core-js_shared__"],Bo=W2.toString,Qe=Ii.hasOwnProperty,Z2=0,Sf=function(){var r=/[^.]+$/.exec(Mo&&Mo.keys&&Mo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Uo=Ii.toString,q2=Bo.call(Je),K2=Tt._,G2=rc("^"+Bo.call(Qe).replace(Dl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jo=cf?j.Buffer:n,Er=j.Symbol,Do=j.Uint8Array,Ef=jo?jo.allocUnsafe:n,No=kf(Je.getPrototypeOf,Je),Tf=Je.create,Af=Ii.propertyIsEnumerable,Ho=Po.splice,If=Er?Er.isConcatSpreadable:n,Cs=Er?Er.iterator:n,ri=Er?Er.toStringTag:n,zo=function(){try{var r=li(Je,"defineProperty");return r({},"",{}),r}catch{}}(),V2=j.clearTimeout!==Tt.clearTimeout&&j.clearTimeout,Q2=te&&te.now!==Tt.Date.now&&te.now,X2=j.setTimeout!==Tt.setTimeout&&j.setTimeout,Fo=xt.ceil,Wo=xt.floor,ic=Je.getOwnPropertySymbols,Y2=jo?jo.isBuffer:n,Rf=j.isFinite,J2=Po.join,ey=kf(Je.keys,Je),$t=xt.max,Ot=xt.min,ty=te.now,ny=j.parseInt,Of=xt.random,ry=Po.reverse,sc=li(j,"DataView"),Ss=li(j,"Map"),oc=li(j,"Promise"),Ri=li(j,"Set"),Es=li(j,"WeakMap"),Ts=li(Je,"create"),Zo=Es&&new Es,Oi={},iy=ci(sc),sy=ci(Ss),oy=ci(oc),ay=ci(Ri),ly=ci(Es),qo=Er?Er.prototype:n,As=qo?qo.valueOf:n,Lf=qo?qo.toString:n;function y(r){if(pt(r)&&!xe(r)&&!(r instanceof Ue)){if(r instanceof mn)return r;if(Qe.call(r,"__wrapped__"))return Ph(r)}return new mn(r)}var Li=function(){function r(){}return function(s){if(!dt(s))return{};if(Tf)return Tf(s);r.prototype=s;var l=new r;return r.prototype=n,l}}();function Ko(){}function mn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:xv,evaluate:$v,interpolate:Hd,variable:"",imports:{_:y}},y.prototype=Ko.prototype,y.prototype.constructor=y,mn.prototype=Li(Ko.prototype),mn.prototype.constructor=mn;function Ue(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=K,this.__views__=[]}function cy(){var r=new Ue(this.__wrapped__);return r.__actions__=qt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=qt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=qt(this.__views__),r}function uy(){if(this.__filtered__){var r=new Ue(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function dy(){var r=this.__wrapped__.value(),s=this.__dir__,l=xe(r),f=s<0,g=l?r.length:0,b=$b(0,g,this.__views__),$=b.start,S=b.end,O=S-$,D=f?S:$-1,N=this.__iteratees__,F=N.length,Q=0,ae=Ot(O,this.__takeCount__);if(!l||!f&&g==O&&ae==O)return rh(r,this.__actions__);var pe=[];e:for(;O--&&Q<ae;){D+=s;for(var Ee=-1,ge=r[D];++Ee<F;){var Me=N[Ee],je=Me.iteratee,nn=Me.type,Nt=je(ge);if(nn==Ze)ge=Nt;else if(!Nt){if(nn==oe)continue e;break e}}pe[Q++]=ge}return pe}Ue.prototype=Li(Ko.prototype),Ue.prototype.constructor=Ue;function ii(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function fy(){this.__data__=Ts?Ts(null):{},this.size=0}function hy(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function py(r){var s=this.__data__;if(Ts){var l=s[r];return l===d?n:l}return Qe.call(s,r)?s[r]:n}function gy(r){var s=this.__data__;return Ts?s[r]!==n:Qe.call(s,r)}function my(r,s){var l=this.__data__;return this.size+=this.has(r)?0:1,l[r]=Ts&&s===n?d:s,this}ii.prototype.clear=fy,ii.prototype.delete=hy,ii.prototype.get=py,ii.prototype.has=gy,ii.prototype.set=my;function tr(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function vy(){this.__data__=[],this.size=0}function yy(r){var s=this.__data__,l=Go(s,r);if(l<0)return!1;var f=s.length-1;return l==f?s.pop():Ho.call(s,l,1),--this.size,!0}function by(r){var s=this.__data__,l=Go(s,r);return l<0?n:s[l][1]}function _y(r){return Go(this.__data__,r)>-1}function wy(r,s){var l=this.__data__,f=Go(l,r);return f<0?(++this.size,l.push([r,s])):l[f][1]=s,this}tr.prototype.clear=vy,tr.prototype.delete=yy,tr.prototype.get=by,tr.prototype.has=_y,tr.prototype.set=wy;function nr(r){var s=-1,l=r==null?0:r.length;for(this.clear();++s<l;){var f=r[s];this.set(f[0],f[1])}}function xy(){this.size=0,this.__data__={hash:new ii,map:new(Ss||tr),string:new ii}}function $y(r){var s=oa(this,r).delete(r);return this.size-=s?1:0,s}function ky(r){return oa(this,r).get(r)}function Cy(r){return oa(this,r).has(r)}function Sy(r,s){var l=oa(this,r),f=l.size;return l.set(r,s),this.size+=l.size==f?0:1,this}nr.prototype.clear=xy,nr.prototype.delete=$y,nr.prototype.get=ky,nr.prototype.has=Cy,nr.prototype.set=Sy;function si(r){var s=-1,l=r==null?0:r.length;for(this.__data__=new nr;++s<l;)this.add(r[s])}function Ey(r){return this.__data__.set(r,d),this}function Ty(r){return this.__data__.has(r)}si.prototype.add=si.prototype.push=Ey,si.prototype.has=Ty;function En(r){var s=this.__data__=new tr(r);this.size=s.size}function Ay(){this.__data__=new tr,this.size=0}function Iy(r){var s=this.__data__,l=s.delete(r);return this.size=s.size,l}function Ry(r){return this.__data__.get(r)}function Oy(r){return this.__data__.has(r)}function Ly(r,s){var l=this.__data__;if(l instanceof tr){var f=l.__data__;if(!Ss||f.length<o-1)return f.push([r,s]),this.size=++l.size,this;l=this.__data__=new nr(f)}return l.set(r,s),this.size=l.size,this}En.prototype.clear=Ay,En.prototype.delete=Iy,En.prototype.get=Ry,En.prototype.has=Oy,En.prototype.set=Ly;function Pf(r,s){var l=xe(r),f=!l&&ui(r),g=!l&&!f&&Or(r),b=!l&&!f&&!g&&Ui(r),$=l||f||g||b,S=$?ec(r.length,F2):[],O=S.length;for(var D in r)(s||Qe.call(r,D))&&!($&&(D=="length"||g&&(D=="offset"||D=="parent")||b&&(D=="buffer"||D=="byteLength"||D=="byteOffset")||or(D,O)))&&S.push(D);return S}function Mf(r){var s=r.length;return s?r[vc(0,s-1)]:n}function Py(r,s){return aa(qt(r),oi(s,0,r.length))}function My(r){return aa(qt(r))}function ac(r,s,l){(l!==n&&!Tn(r[s],l)||l===n&&!(s in r))&&rr(r,s,l)}function Is(r,s,l){var f=r[s];(!(Qe.call(r,s)&&Tn(f,l))||l===n&&!(s in r))&&rr(r,s,l)}function Go(r,s){for(var l=r.length;l--;)if(Tn(r[l][0],s))return l;return-1}function By(r,s,l,f){return Tr(r,function(g,b,$){s(f,g,l(g),$)}),f}function Bf(r,s){return r&&zn(s,St(s),r)}function Uy(r,s){return r&&zn(s,Gt(s),r)}function rr(r,s,l){s=="__proto__"&&zo?zo(r,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):r[s]=l}function lc(r,s){for(var l=-1,f=s.length,g=U(f),b=r==null;++l<f;)g[l]=b?n:zc(r,s[l]);return g}function oi(r,s,l){return r===r&&(l!==n&&(r=r<=l?r:l),s!==n&&(r=r>=s?r:s)),r}function vn(r,s,l,f,g,b){var $,S=s&m,O=s&v,D=s&_;if(l&&($=g?l(r,f,g,b):l(r)),$!==n)return $;if(!dt(r))return r;var N=xe(r);if(N){if($=Cb(r),!S)return qt(r,$)}else{var F=Lt(r),Q=F==Rt||F==Nn;if(Or(r))return oh(r,S);if(F==ht||F==ot||Q&&!g){if($=O||Q?{}:Ch(r),!S)return O?pb(r,Uy($,r)):hb(r,Bf($,r))}else{if(!et[F])return g?r:{};$=Sb(r,F,S)}}b||(b=new En);var ae=b.get(r);if(ae)return ae;b.set(r,$),ep(r)?r.forEach(function(ge){$.add(vn(ge,s,l,ge,r,b))}):Yh(r)&&r.forEach(function(ge,Me){$.set(Me,vn(ge,s,l,Me,r,b))});var pe=D?O?Tc:Ec:O?Gt:St,Ee=N?n:pe(r);return pn(Ee||r,function(ge,Me){Ee&&(Me=ge,ge=r[Me]),Is($,Me,vn(ge,s,l,Me,r,b))}),$}function jy(r){var s=St(r);return function(l){return Uf(l,r,s)}}function Uf(r,s,l){var f=l.length;if(r==null)return!f;for(r=Je(r);f--;){var g=l[f],b=s[g],$=r[g];if($===n&&!(g in r)||!b($))return!1}return!0}function jf(r,s,l){if(typeof r!="function")throw new gn(c);return Us(function(){r.apply(n,l)},s)}function Rs(r,s,l,f){var g=-1,b=Ro,$=!0,S=r.length,O=[],D=s.length;if(!S)return O;l&&(s=ct(s,Jt(l))),f?(b=Gl,$=!1):s.length>=o&&(b=ks,$=!1,s=new si(s));e:for(;++g<S;){var N=r[g],F=l==null?N:l(N);if(N=f||N!==0?N:0,$&&F===F){for(var Q=D;Q--;)if(s[Q]===F)continue e;O.push(N)}else b(s,F,f)||O.push(N)}return O}var Tr=dh(Hn),Df=dh(uc,!0);function Dy(r,s){var l=!0;return Tr(r,function(f,g,b){return l=!!s(f,g,b),l}),l}function Vo(r,s,l){for(var f=-1,g=r.length;++f<g;){var b=r[f],$=s(b);if($!=null&&(S===n?$===$&&!tn($):l($,S)))var S=$,O=b}return O}function Ny(r,s,l,f){var g=r.length;for(l=Ce(l),l<0&&(l=-l>g?0:g+l),f=f===n||f>g?g:Ce(f),f<0&&(f+=g),f=l>f?0:np(f);l<f;)r[l++]=s;return r}function Nf(r,s){var l=[];return Tr(r,function(f,g,b){s(f,g,b)&&l.push(f)}),l}function At(r,s,l,f,g){var b=-1,$=r.length;for(l||(l=Tb),g||(g=[]);++b<$;){var S=r[b];s>0&&l(S)?s>1?At(S,s-1,l,f,g):Cr(g,S):f||(g[g.length]=S)}return g}var cc=fh(),Hf=fh(!0);function Hn(r,s){return r&&cc(r,s,St)}function uc(r,s){return r&&Hf(r,s,St)}function Qo(r,s){return kr(s,function(l){return ar(r[l])})}function ai(r,s){s=Ir(s,r);for(var l=0,f=s.length;r!=null&&l<f;)r=r[Fn(s[l++])];return l&&l==f?r:n}function zf(r,s,l){var f=s(r);return xe(r)?f:Cr(f,l(r))}function jt(r){return r==null?r===n?Xt:xr:ri&&ri in Je(r)?xb(r):Mb(r)}function dc(r,s){return r>s}function Hy(r,s){return r!=null&&Qe.call(r,s)}function zy(r,s){return r!=null&&s in Je(r)}function Fy(r,s,l){return r>=Ot(s,l)&&r<$t(s,l)}function fc(r,s,l){for(var f=l?Gl:Ro,g=r[0].length,b=r.length,$=b,S=U(b),O=1/0,D=[];$--;){var N=r[$];$&&s&&(N=ct(N,Jt(s))),O=Ot(N.length,O),S[$]=!l&&(s||g>=120&&N.length>=120)?new si($&&N):n}N=r[0];var F=-1,Q=S[0];e:for(;++F<g&&D.length<O;){var ae=N[F],pe=s?s(ae):ae;if(ae=l||ae!==0?ae:0,!(Q?ks(Q,pe):f(D,pe,l))){for($=b;--$;){var Ee=S[$];if(!(Ee?ks(Ee,pe):f(r[$],pe,l)))continue e}Q&&Q.push(pe),D.push(ae)}}return D}function Wy(r,s,l,f){return Hn(r,function(g,b,$){s(f,l(g),b,$)}),f}function Os(r,s,l){s=Ir(s,r),r=Ah(r,s);var f=r==null?r:r[Fn(bn(s))];return f==null?n:Yt(f,r,l)}function Ff(r){return pt(r)&&jt(r)==ot}function Zy(r){return pt(r)&&jt(r)==Oe}function qy(r){return pt(r)&&jt(r)==ie}function Ls(r,s,l,f,g){return r===s?!0:r==null||s==null||!pt(r)&&!pt(s)?r!==r&&s!==s:Ky(r,s,l,f,Ls,g)}function Ky(r,s,l,f,g,b){var $=xe(r),S=xe(s),O=$?Bt:Lt(r),D=S?Bt:Lt(s);O=O==ot?ht:O,D=D==ot?ht:D;var N=O==ht,F=D==ht,Q=O==D;if(Q&&Or(r)){if(!Or(s))return!1;$=!0,N=!1}if(Q&&!N)return b||(b=new En),$||Ui(r)?xh(r,s,l,f,g,b):_b(r,s,O,l,f,g,b);if(!(l&x)){var ae=N&&Qe.call(r,"__wrapped__"),pe=F&&Qe.call(s,"__wrapped__");if(ae||pe){var Ee=ae?r.value():r,ge=pe?s.value():s;return b||(b=new En),g(Ee,ge,l,f,b)}}return Q?(b||(b=new En),wb(r,s,l,f,g,b)):!1}function Gy(r){return pt(r)&&Lt(r)==at}function hc(r,s,l,f){var g=l.length,b=g,$=!f;if(r==null)return!b;for(r=Je(r);g--;){var S=l[g];if($&&S[2]?S[1]!==r[S[0]]:!(S[0]in r))return!1}for(;++g<b;){S=l[g];var O=S[0],D=r[O],N=S[1];if($&&S[2]){if(D===n&&!(O in r))return!1}else{var F=new En;if(f)var Q=f(D,N,O,r,s,F);if(!(Q===n?Ls(N,D,x|E,f,F):Q))return!1}}return!0}function Wf(r){if(!dt(r)||Ib(r))return!1;var s=ar(r)?G2:jv;return s.test(ci(r))}function Vy(r){return pt(r)&&jt(r)==be}function Qy(r){return pt(r)&&Lt(r)==ze}function Xy(r){return pt(r)&&ha(r.length)&&!!rt[jt(r)]}function Zf(r){return typeof r=="function"?r:r==null?Vt:typeof r=="object"?xe(r)?Gf(r[0],r[1]):Kf(r):hp(r)}function pc(r){if(!Bs(r))return ey(r);var s=[];for(var l in Je(r))Qe.call(r,l)&&l!="constructor"&&s.push(l);return s}function Yy(r){if(!dt(r))return Pb(r);var s=Bs(r),l=[];for(var f in r)f=="constructor"&&(s||!Qe.call(r,f))||l.push(f);return l}function gc(r,s){return r<s}function qf(r,s){var l=-1,f=Kt(r)?U(r.length):[];return Tr(r,function(g,b,$){f[++l]=s(g,b,$)}),f}function Kf(r){var s=Ic(r);return s.length==1&&s[0][2]?Eh(s[0][0],s[0][1]):function(l){return l===r||hc(l,r,s)}}function Gf(r,s){return Oc(r)&&Sh(s)?Eh(Fn(r),s):function(l){var f=zc(l,r);return f===n&&f===s?Fc(l,r):Ls(s,f,x|E)}}function Xo(r,s,l,f,g){r!==s&&cc(s,function(b,$){if(g||(g=new En),dt(b))Jy(r,s,$,l,Xo,f,g);else{var S=f?f(Pc(r,$),b,$+"",r,s,g):n;S===n&&(S=b),ac(r,$,S)}},Gt)}function Jy(r,s,l,f,g,b,$){var S=Pc(r,l),O=Pc(s,l),D=$.get(O);if(D){ac(r,l,D);return}var N=b?b(S,O,l+"",r,s,$):n,F=N===n;if(F){var Q=xe(O),ae=!Q&&Or(O),pe=!Q&&!ae&&Ui(O);N=O,Q||ae||pe?xe(S)?N=S:mt(S)?N=qt(S):ae?(F=!1,N=oh(O,!0)):pe?(F=!1,N=ah(O,!0)):N=[]:js(O)||ui(O)?(N=S,ui(S)?N=rp(S):(!dt(S)||ar(S))&&(N=Ch(O))):F=!1}F&&($.set(O,N),g(N,O,f,b,$),$.delete(O)),ac(r,l,N)}function Vf(r,s){var l=r.length;if(l)return s+=s<0?l:0,or(s,l)?r[s]:n}function Qf(r,s,l){s.length?s=ct(s,function(b){return xe(b)?function($){return ai($,b.length===1?b[0]:b)}:b}):s=[Vt];var f=-1;s=ct(s,Jt(fe()));var g=qf(r,function(b,$,S){var O=ct(s,function(D){return D(b)});return{criteria:O,index:++f,value:b}});return S2(g,function(b,$){return fb(b,$,l)})}function eb(r,s){return Xf(r,s,function(l,f){return Fc(r,f)})}function Xf(r,s,l){for(var f=-1,g=s.length,b={};++f<g;){var $=s[f],S=ai(r,$);l(S,$)&&Ps(b,Ir($,r),S)}return b}function tb(r){return function(s){return ai(s,r)}}function mc(r,s,l,f){var g=f?C2:Si,b=-1,$=s.length,S=r;for(r===s&&(s=qt(s)),l&&(S=ct(r,Jt(l)));++b<$;)for(var O=0,D=s[b],N=l?l(D):D;(O=g(S,N,O,f))>-1;)S!==r&&Ho.call(S,O,1),Ho.call(r,O,1);return r}function Yf(r,s){for(var l=r?s.length:0,f=l-1;l--;){var g=s[l];if(l==f||g!==b){var b=g;or(g)?Ho.call(r,g,1):_c(r,g)}}return r}function vc(r,s){return r+Wo(Of()*(s-r+1))}function nb(r,s,l,f){for(var g=-1,b=$t(Fo((s-r)/(l||1)),0),$=U(b);b--;)$[f?b:++g]=r,r+=l;return $}function yc(r,s){var l="";if(!r||s<1||s>ke)return l;do s%2&&(l+=r),s=Wo(s/2),s&&(r+=r);while(s);return l}function Ae(r,s){return Mc(Th(r,s,Vt),r+"")}function rb(r){return Mf(ji(r))}function ib(r,s){var l=ji(r);return aa(l,oi(s,0,l.length))}function Ps(r,s,l,f){if(!dt(r))return r;s=Ir(s,r);for(var g=-1,b=s.length,$=b-1,S=r;S!=null&&++g<b;){var O=Fn(s[g]),D=l;if(O==="__proto__"||O==="constructor"||O==="prototype")return r;if(g!=$){var N=S[O];D=f?f(N,O,S):n,D===n&&(D=dt(N)?N:or(s[g+1])?[]:{})}Is(S,O,D),S=S[O]}return r}var Jf=Zo?function(r,s){return Zo.set(r,s),r}:Vt,sb=zo?function(r,s){return zo(r,"toString",{configurable:!0,enumerable:!1,value:Zc(s),writable:!0})}:Vt;function ob(r){return aa(ji(r))}function yn(r,s,l){var f=-1,g=r.length;s<0&&(s=-s>g?0:g+s),l=l>g?g:l,l<0&&(l+=g),g=s>l?0:l-s>>>0,s>>>=0;for(var b=U(g);++f<g;)b[f]=r[f+s];return b}function ab(r,s){var l;return Tr(r,function(f,g,b){return l=s(f,g,b),!l}),!!l}function Yo(r,s,l){var f=0,g=r==null?f:r.length;if(typeof s=="number"&&s===s&&g<=Ye){for(;f<g;){var b=f+g>>>1,$=r[b];$!==null&&!tn($)&&(l?$<=s:$<s)?f=b+1:g=b}return g}return bc(r,s,Vt,l)}function bc(r,s,l,f){var g=0,b=r==null?0:r.length;if(b===0)return 0;s=l(s);for(var $=s!==s,S=s===null,O=tn(s),D=s===n;g<b;){var N=Wo((g+b)/2),F=l(r[N]),Q=F!==n,ae=F===null,pe=F===F,Ee=tn(F);if($)var ge=f||pe;else D?ge=pe&&(f||Q):S?ge=pe&&Q&&(f||!ae):O?ge=pe&&Q&&!ae&&(f||!Ee):ae||Ee?ge=!1:ge=f?F<=s:F<s;ge?g=N+1:b=N}return Ot(b,Pe)}function eh(r,s){for(var l=-1,f=r.length,g=0,b=[];++l<f;){var $=r[l],S=s?s($):$;if(!l||!Tn(S,O)){var O=S;b[g++]=$===0?0:$}}return b}function th(r){return typeof r=="number"?r:tn(r)?ye:+r}function en(r){if(typeof r=="string")return r;if(xe(r))return ct(r,en)+"";if(tn(r))return Lf?Lf.call(r):"";var s=r+"";return s=="0"&&1/r==-ve?"-0":s}function Ar(r,s,l){var f=-1,g=Ro,b=r.length,$=!0,S=[],O=S;if(l)$=!1,g=Gl;else if(b>=o){var D=s?null:yb(r);if(D)return Lo(D);$=!1,g=ks,O=new si}else O=s?[]:S;e:for(;++f<b;){var N=r[f],F=s?s(N):N;if(N=l||N!==0?N:0,$&&F===F){for(var Q=O.length;Q--;)if(O[Q]===F)continue e;s&&O.push(F),S.push(N)}else g(O,F,l)||(O!==S&&O.push(F),S.push(N))}return S}function _c(r,s){return s=Ir(s,r),r=Ah(r,s),r==null||delete r[Fn(bn(s))]}function nh(r,s,l,f){return Ps(r,s,l(ai(r,s)),f)}function Jo(r,s,l,f){for(var g=r.length,b=f?g:-1;(f?b--:++b<g)&&s(r[b],b,r););return l?yn(r,f?0:b,f?b+1:g):yn(r,f?b+1:0,f?g:b)}function rh(r,s){var l=r;return l instanceof Ue&&(l=l.value()),Vl(s,function(f,g){return g.func.apply(g.thisArg,Cr([f],g.args))},l)}function wc(r,s,l){var f=r.length;if(f<2)return f?Ar(r[0]):[];for(var g=-1,b=U(f);++g<f;)for(var $=r[g],S=-1;++S<f;)S!=g&&(b[g]=Rs(b[g]||$,r[S],s,l));return Ar(At(b,1),s,l)}function ih(r,s,l){for(var f=-1,g=r.length,b=s.length,$={};++f<g;){var S=f<b?s[f]:n;l($,r[f],S)}return $}function xc(r){return mt(r)?r:[]}function $c(r){return typeof r=="function"?r:Vt}function Ir(r,s){return xe(r)?r:Oc(r,s)?[r]:Lh(Ve(r))}var lb=Ae;function Rr(r,s,l){var f=r.length;return l=l===n?f:l,!s&&l>=f?r:yn(r,s,l)}var sh=V2||function(r){return Tt.clearTimeout(r)};function oh(r,s){if(s)return r.slice();var l=r.length,f=Ef?Ef(l):new r.constructor(l);return r.copy(f),f}function kc(r){var s=new r.constructor(r.byteLength);return new Do(s).set(new Do(r)),s}function cb(r,s){var l=s?kc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.byteLength)}function ub(r){var s=new r.constructor(r.source,zd.exec(r));return s.lastIndex=r.lastIndex,s}function db(r){return As?Je(As.call(r)):{}}function ah(r,s){var l=s?kc(r.buffer):r.buffer;return new r.constructor(l,r.byteOffset,r.length)}function lh(r,s){if(r!==s){var l=r!==n,f=r===null,g=r===r,b=tn(r),$=s!==n,S=s===null,O=s===s,D=tn(s);if(!S&&!D&&!b&&r>s||b&&$&&O&&!S&&!D||f&&$&&O||!l&&O||!g)return 1;if(!f&&!b&&!D&&r<s||D&&l&&g&&!f&&!b||S&&l&&g||!$&&g||!O)return-1}return 0}function fb(r,s,l){for(var f=-1,g=r.criteria,b=s.criteria,$=g.length,S=l.length;++f<$;){var O=lh(g[f],b[f]);if(O){if(f>=S)return O;var D=l[f];return O*(D=="desc"?-1:1)}}return r.index-s.index}function ch(r,s,l,f){for(var g=-1,b=r.length,$=l.length,S=-1,O=s.length,D=$t(b-$,0),N=U(O+D),F=!f;++S<O;)N[S]=s[S];for(;++g<$;)(F||g<b)&&(N[l[g]]=r[g]);for(;D--;)N[S++]=r[g++];return N}function uh(r,s,l,f){for(var g=-1,b=r.length,$=-1,S=l.length,O=-1,D=s.length,N=$t(b-S,0),F=U(N+D),Q=!f;++g<N;)F[g]=r[g];for(var ae=g;++O<D;)F[ae+O]=s[O];for(;++$<S;)(Q||g<b)&&(F[ae+l[$]]=r[g++]);return F}function qt(r,s){var l=-1,f=r.length;for(s||(s=U(f));++l<f;)s[l]=r[l];return s}function zn(r,s,l,f){var g=!l;l||(l={});for(var b=-1,$=s.length;++b<$;){var S=s[b],O=f?f(l[S],r[S],S,l,r):n;O===n&&(O=r[S]),g?rr(l,S,O):Is(l,S,O)}return l}function hb(r,s){return zn(r,Rc(r),s)}function pb(r,s){return zn(r,$h(r),s)}function ea(r,s){return function(l,f){var g=xe(l)?b2:By,b=s?s():{};return g(l,r,fe(f,2),b)}}function Pi(r){return Ae(function(s,l){var f=-1,g=l.length,b=g>1?l[g-1]:n,$=g>2?l[2]:n;for(b=r.length>3&&typeof b=="function"?(g--,b):n,$&&Dt(l[0],l[1],$)&&(b=g<3?n:b,g=1),s=Je(s);++f<g;){var S=l[f];S&&r(s,S,f,b)}return s})}function dh(r,s){return function(l,f){if(l==null)return l;if(!Kt(l))return r(l,f);for(var g=l.length,b=s?g:-1,$=Je(l);(s?b--:++b<g)&&f($[b],b,$)!==!1;);return l}}function fh(r){return function(s,l,f){for(var g=-1,b=Je(s),$=f(s),S=$.length;S--;){var O=$[r?S:++g];if(l(b[O],O,b)===!1)break}return s}}function gb(r,s,l){var f=s&k,g=Ms(r);function b(){var $=this&&this!==Tt&&this instanceof b?g:r;return $.apply(f?l:this,arguments)}return b}function hh(r){return function(s){s=Ve(s);var l=Ei(s)?Sn(s):n,f=l?l[0]:s.charAt(0),g=l?Rr(l,1).join(""):s.slice(1);return f[r]()+g}}function Mi(r){return function(s){return Vl(dp(up(s).replace(s2,"")),r,"")}}function Ms(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var l=Li(r.prototype),f=r.apply(l,s);return dt(f)?f:l}}function mb(r,s,l){var f=Ms(r);function g(){for(var b=arguments.length,$=U(b),S=b,O=Bi(g);S--;)$[S]=arguments[S];var D=b<3&&$[0]!==O&&$[b-1]!==O?[]:Sr($,O);if(b-=D.length,b<l)return yh(r,s,ta,g.placeholder,n,$,D,n,n,l-b);var N=this&&this!==Tt&&this instanceof g?f:r;return Yt(N,this,$)}return g}function ph(r){return function(s,l,f){var g=Je(s);if(!Kt(s)){var b=fe(l,3);s=St(s),l=function(S){return b(g[S],S,g)}}var $=r(s,l,f);return $>-1?g[b?s[$]:$]:n}}function gh(r){return sr(function(s){var l=s.length,f=l,g=mn.prototype.thru;for(r&&s.reverse();f--;){var b=s[f];if(typeof b!="function")throw new gn(c);if(g&&!$&&sa(b)=="wrapper")var $=new mn([],!0)}for(f=$?f:l;++f<l;){b=s[f];var S=sa(b),O=S=="wrapper"?Ac(b):n;O&&Lc(O[0])&&O[1]==(H|B|T|W)&&!O[4].length&&O[9]==1?$=$[sa(O[0])].apply($,O[3]):$=b.length==1&&Lc(b)?$[S]():$.thru(b)}return function(){var D=arguments,N=D[0];if($&&D.length==1&&xe(N))return $.plant(N).value();for(var F=0,Q=l?s[F].apply(this,D):N;++F<l;)Q=s[F].call(this,Q);return Q}})}function ta(r,s,l,f,g,b,$,S,O,D){var N=s&H,F=s&k,Q=s&C,ae=s&(B|R),pe=s&se,Ee=Q?n:Ms(r);function ge(){for(var Me=arguments.length,je=U(Me),nn=Me;nn--;)je[nn]=arguments[nn];if(ae)var Nt=Bi(ge),rn=T2(je,Nt);if(f&&(je=ch(je,f,g,ae)),b&&(je=uh(je,b,$,ae)),Me-=rn,ae&&Me<D){var vt=Sr(je,Nt);return yh(r,s,ta,ge.placeholder,l,je,vt,S,O,D-Me)}var An=F?l:this,cr=Q?An[r]:r;return Me=je.length,S?je=Bb(je,S):pe&&Me>1&&je.reverse(),N&&O<Me&&(je.length=O),this&&this!==Tt&&this instanceof ge&&(cr=Ee||Ms(cr)),cr.apply(An,je)}return ge}function mh(r,s){return function(l,f){return Wy(l,r,s(f),{})}}function na(r,s){return function(l,f){var g;if(l===n&&f===n)return s;if(l!==n&&(g=l),f!==n){if(g===n)return f;typeof l=="string"||typeof f=="string"?(l=en(l),f=en(f)):(l=th(l),f=th(f)),g=r(l,f)}return g}}function Cc(r){return sr(function(s){return s=ct(s,Jt(fe())),Ae(function(l){var f=this;return r(s,function(g){return Yt(g,f,l)})})})}function ra(r,s){s=s===n?" ":en(s);var l=s.length;if(l<2)return l?yc(s,r):s;var f=yc(s,Fo(r/Ti(s)));return Ei(s)?Rr(Sn(f),0,r).join(""):f.slice(0,r)}function vb(r,s,l,f){var g=s&k,b=Ms(r);function $(){for(var S=-1,O=arguments.length,D=-1,N=f.length,F=U(N+O),Q=this&&this!==Tt&&this instanceof $?b:r;++D<N;)F[D]=f[D];for(;O--;)F[D++]=arguments[++S];return Yt(Q,g?l:this,F)}return $}function vh(r){return function(s,l,f){return f&&typeof f!="number"&&Dt(s,l,f)&&(l=f=n),s=lr(s),l===n?(l=s,s=0):l=lr(l),f=f===n?s<l?1:-1:lr(f),nb(s,l,f,r)}}function ia(r){return function(s,l){return typeof s=="string"&&typeof l=="string"||(s=_n(s),l=_n(l)),r(s,l)}}function yh(r,s,l,f,g,b,$,S,O,D){var N=s&B,F=N?$:n,Q=N?n:$,ae=N?b:n,pe=N?n:b;s|=N?T:L,s&=~(N?L:T),s&P||(s&=~(k|C));var Ee=[r,s,g,ae,F,pe,Q,S,O,D],ge=l.apply(n,Ee);return Lc(r)&&Ih(ge,Ee),ge.placeholder=f,Rh(ge,r,s)}function Sc(r){var s=xt[r];return function(l,f){if(l=_n(l),f=f==null?0:Ot(Ce(f),292),f&&Rf(l)){var g=(Ve(l)+"e").split("e"),b=s(g[0]+"e"+(+g[1]+f));return g=(Ve(b)+"e").split("e"),+(g[0]+"e"+(+g[1]-f))}return s(l)}}var yb=Ri&&1/Lo(new Ri([,-0]))[1]==ve?function(r){return new Ri(r)}:Gc;function bh(r){return function(s){var l=Lt(s);return l==at?nc(s):l==ze?M2(s):E2(s,r(s))}}function ir(r,s,l,f,g,b,$,S){var O=s&C;if(!O&&typeof r!="function")throw new gn(c);var D=f?f.length:0;if(D||(s&=~(T|L),f=g=n),$=$===n?$:$t(Ce($),0),S=S===n?S:Ce(S),D-=g?g.length:0,s&L){var N=f,F=g;f=g=n}var Q=O?n:Ac(r),ae=[r,s,l,f,g,N,F,b,$,S];if(Q&&Lb(ae,Q),r=ae[0],s=ae[1],l=ae[2],f=ae[3],g=ae[4],S=ae[9]=ae[9]===n?O?0:r.length:$t(ae[9]-D,0),!S&&s&(B|R)&&(s&=~(B|R)),!s||s==k)var pe=gb(r,s,l);else s==B||s==R?pe=mb(r,s,S):(s==T||s==(k|T))&&!g.length?pe=vb(r,s,l,f):pe=ta.apply(n,ae);var Ee=Q?Jf:Ih;return Rh(Ee(pe,ae),r,s)}function _h(r,s,l,f){return r===n||Tn(r,Ii[l])&&!Qe.call(f,l)?s:r}function wh(r,s,l,f,g,b){return dt(r)&&dt(s)&&(b.set(s,r),Xo(r,s,n,wh,b),b.delete(s)),r}function bb(r){return js(r)?n:r}function xh(r,s,l,f,g,b){var $=l&x,S=r.length,O=s.length;if(S!=O&&!($&&O>S))return!1;var D=b.get(r),N=b.get(s);if(D&&N)return D==s&&N==r;var F=-1,Q=!0,ae=l&E?new si:n;for(b.set(r,s),b.set(s,r);++F<S;){var pe=r[F],Ee=s[F];if(f)var ge=$?f(Ee,pe,F,s,r,b):f(pe,Ee,F,r,s,b);if(ge!==n){if(ge)continue;Q=!1;break}if(ae){if(!Ql(s,function(Me,je){if(!ks(ae,je)&&(pe===Me||g(pe,Me,l,f,b)))return ae.push(je)})){Q=!1;break}}else if(!(pe===Ee||g(pe,Ee,l,f,b))){Q=!1;break}}return b.delete(r),b.delete(s),Q}function _b(r,s,l,f,g,b,$){switch(l){case nt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Oe:return!(r.byteLength!=s.byteLength||!b(new Do(r),new Do(s)));case G:case ie:case Wt:return Tn(+r,+s);case gt:return r.name==s.name&&r.message==s.message;case be:case lt:return r==s+"";case at:var S=nc;case ze:var O=f&x;if(S||(S=Lo),r.size!=s.size&&!O)return!1;var D=$.get(r);if(D)return D==s;f|=E,$.set(r,s);var N=xh(S(r),S(s),f,g,b,$);return $.delete(r),N;case Ct:if(As)return As.call(r)==As.call(s)}return!1}function wb(r,s,l,f,g,b){var $=l&x,S=Ec(r),O=S.length,D=Ec(s),N=D.length;if(O!=N&&!$)return!1;for(var F=O;F--;){var Q=S[F];if(!($?Q in s:Qe.call(s,Q)))return!1}var ae=b.get(r),pe=b.get(s);if(ae&&pe)return ae==s&&pe==r;var Ee=!0;b.set(r,s),b.set(s,r);for(var ge=$;++F<O;){Q=S[F];var Me=r[Q],je=s[Q];if(f)var nn=$?f(je,Me,Q,s,r,b):f(Me,je,Q,r,s,b);if(!(nn===n?Me===je||g(Me,je,l,f,b):nn)){Ee=!1;break}ge||(ge=Q=="constructor")}if(Ee&&!ge){var Nt=r.constructor,rn=s.constructor;Nt!=rn&&"constructor"in r&&"constructor"in s&&!(typeof Nt=="function"&&Nt instanceof Nt&&typeof rn=="function"&&rn instanceof rn)&&(Ee=!1)}return b.delete(r),b.delete(s),Ee}function sr(r){return Mc(Th(r,n,Uh),r+"")}function Ec(r){return zf(r,St,Rc)}function Tc(r){return zf(r,Gt,$h)}var Ac=Zo?function(r){return Zo.get(r)}:Gc;function sa(r){for(var s=r.name+"",l=Oi[s],f=Qe.call(Oi,s)?l.length:0;f--;){var g=l[f],b=g.func;if(b==null||b==r)return g.name}return s}function Bi(r){var s=Qe.call(y,"placeholder")?y:r;return s.placeholder}function fe(){var r=y.iteratee||qc;return r=r===qc?Zf:r,arguments.length?r(arguments[0],arguments[1]):r}function oa(r,s){var l=r.__data__;return Ab(s)?l[typeof s=="string"?"string":"hash"]:l.map}function Ic(r){for(var s=St(r),l=s.length;l--;){var f=s[l],g=r[f];s[l]=[f,g,Sh(g)]}return s}function li(r,s){var l=O2(r,s);return Wf(l)?l:n}function xb(r){var s=Qe.call(r,ri),l=r[ri];try{r[ri]=n;var f=!0}catch{}var g=Uo.call(r);return f&&(s?r[ri]=l:delete r[ri]),g}var Rc=ic?function(r){return r==null?[]:(r=Je(r),kr(ic(r),function(s){return Af.call(r,s)}))}:Vc,$h=ic?function(r){for(var s=[];r;)Cr(s,Rc(r)),r=No(r);return s}:Vc,Lt=jt;(sc&&Lt(new sc(new ArrayBuffer(1)))!=nt||Ss&&Lt(new Ss)!=at||oc&&Lt(oc.resolve())!=Ut||Ri&&Lt(new Ri)!=ze||Es&&Lt(new Es)!=ue)&&(Lt=function(r){var s=jt(r),l=s==ht?r.constructor:n,f=l?ci(l):"";if(f)switch(f){case iy:return nt;case sy:return at;case oy:return Ut;case ay:return ze;case ly:return ue}return s});function $b(r,s,l){for(var f=-1,g=l.length;++f<g;){var b=l[f],$=b.size;switch(b.type){case"drop":r+=$;break;case"dropRight":s-=$;break;case"take":s=Ot(s,r+$);break;case"takeRight":r=$t(r,s-$);break}}return{start:r,end:s}}function kb(r){var s=r.match(Iv);return s?s[1].split(Rv):[]}function kh(r,s,l){s=Ir(s,r);for(var f=-1,g=s.length,b=!1;++f<g;){var $=Fn(s[f]);if(!(b=r!=null&&l(r,$)))break;r=r[$]}return b||++f!=g?b:(g=r==null?0:r.length,!!g&&ha(g)&&or($,g)&&(xe(r)||ui(r)))}function Cb(r){var s=r.length,l=new r.constructor(s);return s&&typeof r[0]=="string"&&Qe.call(r,"index")&&(l.index=r.index,l.input=r.input),l}function Ch(r){return typeof r.constructor=="function"&&!Bs(r)?Li(No(r)):{}}function Sb(r,s,l){var f=r.constructor;switch(s){case Oe:return kc(r);case G:case ie:return new f(+r);case nt:return cb(r,l);case Zt:case Cn:case fn:case $r:case xi:case $i:case ki:case Ul:case jl:return ah(r,l);case at:return new f;case Wt:case lt:return new f(r);case be:return ub(r);case ze:return new f;case Ct:return db(r)}}function Eb(r,s){var l=s.length;if(!l)return r;var f=l-1;return s[f]=(l>1?"& ":"")+s[f],s=s.join(l>2?", ":" "),r.replace(Av,`{
/* [wrapped with `+s+`] */
`)}function Tb(r){return xe(r)||ui(r)||!!(If&&r&&r[If])}function or(r,s){var l=typeof r;return s=s??ke,!!s&&(l=="number"||l!="symbol"&&Nv.test(r))&&r>-1&&r%1==0&&r<s}function Dt(r,s,l){if(!dt(l))return!1;var f=typeof s;return(f=="number"?Kt(l)&&or(s,l.length):f=="string"&&s in l)?Tn(l[s],r):!1}function Oc(r,s){if(xe(r))return!1;var l=typeof r;return l=="number"||l=="symbol"||l=="boolean"||r==null||tn(r)?!0:Cv.test(r)||!kv.test(r)||s!=null&&r in Je(s)}function Ab(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Lc(r){var s=sa(r),l=y[s];if(typeof l!="function"||!(s in Ue.prototype))return!1;if(r===l)return!0;var f=Ac(l);return!!f&&r===f[0]}function Ib(r){return!!Sf&&Sf in r}var Rb=Mo?ar:Qc;function Bs(r){var s=r&&r.constructor,l=typeof s=="function"&&s.prototype||Ii;return r===l}function Sh(r){return r===r&&!dt(r)}function Eh(r,s){return function(l){return l==null?!1:l[r]===s&&(s!==n||r in Je(l))}}function Ob(r){var s=da(r,function(f){return l.size===p&&l.clear(),f}),l=s.cache;return s}function Lb(r,s){var l=r[1],f=s[1],g=l|f,b=g<(k|C|H),$=f==H&&l==B||f==H&&l==W&&r[7].length<=s[8]||f==(H|W)&&s[7].length<=s[8]&&l==B;if(!(b||$))return r;f&k&&(r[2]=s[2],g|=l&k?0:P);var S=s[3];if(S){var O=r[3];r[3]=O?ch(O,S,s[4]):S,r[4]=O?Sr(r[3],h):s[4]}return S=s[5],S&&(O=r[5],r[5]=O?uh(O,S,s[6]):S,r[6]=O?Sr(r[5],h):s[6]),S=s[7],S&&(r[7]=S),f&H&&(r[8]=r[8]==null?s[8]:Ot(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=g,r}function Pb(r){var s=[];if(r!=null)for(var l in Je(r))s.push(l);return s}function Mb(r){return Uo.call(r)}function Th(r,s,l){return s=$t(s===n?r.length-1:s,0),function(){for(var f=arguments,g=-1,b=$t(f.length-s,0),$=U(b);++g<b;)$[g]=f[s+g];g=-1;for(var S=U(s+1);++g<s;)S[g]=f[g];return S[s]=l($),Yt(r,this,S)}}function Ah(r,s){return s.length<2?r:ai(r,yn(s,0,-1))}function Bb(r,s){for(var l=r.length,f=Ot(s.length,l),g=qt(r);f--;){var b=s[f];r[f]=or(b,l)?g[b]:n}return r}function Pc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Ih=Oh(Jf),Us=X2||function(r,s){return Tt.setTimeout(r,s)},Mc=Oh(sb);function Rh(r,s,l){var f=s+"";return Mc(r,Eb(f,Ub(kb(f),l)))}function Oh(r){var s=0,l=0;return function(){var f=ty(),g=X-(f-l);if(l=f,g>0){if(++s>=Z)return arguments[0]}else s=0;return r.apply(n,arguments)}}function aa(r,s){var l=-1,f=r.length,g=f-1;for(s=s===n?f:s;++l<s;){var b=vc(l,g),$=r[b];r[b]=r[l],r[l]=$}return r.length=s,r}var Lh=Ob(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Sv,function(l,f,g,b){s.push(g?b.replace(Pv,"$1"):f||l)}),s});function Fn(r){if(typeof r=="string"||tn(r))return r;var s=r+"";return s=="0"&&1/r==-ve?"-0":s}function ci(r){if(r!=null){try{return Bo.call(r)}catch{}try{return r+""}catch{}}return""}function Ub(r,s){return pn(kt,function(l){var f="_."+l[0];s&l[1]&&!Ro(r,f)&&r.push(f)}),r.sort()}function Ph(r){if(r instanceof Ue)return r.clone();var s=new mn(r.__wrapped__,r.__chain__);return s.__actions__=qt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function jb(r,s,l){(l?Dt(r,s,l):s===n)?s=1:s=$t(Ce(s),0);var f=r==null?0:r.length;if(!f||s<1)return[];for(var g=0,b=0,$=U(Fo(f/s));g<f;)$[b++]=yn(r,g,g+=s);return $}function Db(r){for(var s=-1,l=r==null?0:r.length,f=0,g=[];++s<l;){var b=r[s];b&&(g[f++]=b)}return g}function Nb(){var r=arguments.length;if(!r)return[];for(var s=U(r-1),l=arguments[0],f=r;f--;)s[f-1]=arguments[f];return Cr(xe(l)?qt(l):[l],At(s,1))}var Hb=Ae(function(r,s){return mt(r)?Rs(r,At(s,1,mt,!0)):[]}),zb=Ae(function(r,s){var l=bn(s);return mt(l)&&(l=n),mt(r)?Rs(r,At(s,1,mt,!0),fe(l,2)):[]}),Fb=Ae(function(r,s){var l=bn(s);return mt(l)&&(l=n),mt(r)?Rs(r,At(s,1,mt,!0),n,l):[]});function Wb(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),yn(r,s<0?0:s,f)):[]}function Zb(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),s=f-s,yn(r,0,s<0?0:s)):[]}function qb(r,s){return r&&r.length?Jo(r,fe(s,3),!0,!0):[]}function Kb(r,s){return r&&r.length?Jo(r,fe(s,3),!0):[]}function Gb(r,s,l,f){var g=r==null?0:r.length;return g?(l&&typeof l!="number"&&Dt(r,s,l)&&(l=0,f=g),Ny(r,s,l,f)):[]}function Mh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=l==null?0:Ce(l);return g<0&&(g=$t(f+g,0)),Oo(r,fe(s,3),g)}function Bh(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=f-1;return l!==n&&(g=Ce(l),g=l<0?$t(f+g,0):Ot(g,f-1)),Oo(r,fe(s,3),g,!0)}function Uh(r){var s=r==null?0:r.length;return s?At(r,1):[]}function Vb(r){var s=r==null?0:r.length;return s?At(r,ve):[]}function Qb(r,s){var l=r==null?0:r.length;return l?(s=s===n?1:Ce(s),At(r,s)):[]}function Xb(r){for(var s=-1,l=r==null?0:r.length,f={};++s<l;){var g=r[s];f[g[0]]=g[1]}return f}function jh(r){return r&&r.length?r[0]:n}function Yb(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=l==null?0:Ce(l);return g<0&&(g=$t(f+g,0)),Si(r,s,g)}function Jb(r){var s=r==null?0:r.length;return s?yn(r,0,-1):[]}var e_=Ae(function(r){var s=ct(r,xc);return s.length&&s[0]===r[0]?fc(s):[]}),t_=Ae(function(r){var s=bn(r),l=ct(r,xc);return s===bn(l)?s=n:l.pop(),l.length&&l[0]===r[0]?fc(l,fe(s,2)):[]}),n_=Ae(function(r){var s=bn(r),l=ct(r,xc);return s=typeof s=="function"?s:n,s&&l.pop(),l.length&&l[0]===r[0]?fc(l,n,s):[]});function r_(r,s){return r==null?"":J2.call(r,s)}function bn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function i_(r,s,l){var f=r==null?0:r.length;if(!f)return-1;var g=f;return l!==n&&(g=Ce(l),g=g<0?$t(f+g,0):Ot(g,f-1)),s===s?U2(r,s,g):Oo(r,yf,g,!0)}function s_(r,s){return r&&r.length?Vf(r,Ce(s)):n}var o_=Ae(Dh);function Dh(r,s){return r&&r.length&&s&&s.length?mc(r,s):r}function a_(r,s,l){return r&&r.length&&s&&s.length?mc(r,s,fe(l,2)):r}function l_(r,s,l){return r&&r.length&&s&&s.length?mc(r,s,n,l):r}var c_=sr(function(r,s){var l=r==null?0:r.length,f=lc(r,s);return Yf(r,ct(s,function(g){return or(g,l)?+g:g}).sort(lh)),f});function u_(r,s){var l=[];if(!(r&&r.length))return l;var f=-1,g=[],b=r.length;for(s=fe(s,3);++f<b;){var $=r[f];s($,f,r)&&(l.push($),g.push(f))}return Yf(r,g),l}function Bc(r){return r==null?r:ry.call(r)}function d_(r,s,l){var f=r==null?0:r.length;return f?(l&&typeof l!="number"&&Dt(r,s,l)?(s=0,l=f):(s=s==null?0:Ce(s),l=l===n?f:Ce(l)),yn(r,s,l)):[]}function f_(r,s){return Yo(r,s)}function h_(r,s,l){return bc(r,s,fe(l,2))}function p_(r,s){var l=r==null?0:r.length;if(l){var f=Yo(r,s);if(f<l&&Tn(r[f],s))return f}return-1}function g_(r,s){return Yo(r,s,!0)}function m_(r,s,l){return bc(r,s,fe(l,2),!0)}function v_(r,s){var l=r==null?0:r.length;if(l){var f=Yo(r,s,!0)-1;if(Tn(r[f],s))return f}return-1}function y_(r){return r&&r.length?eh(r):[]}function b_(r,s){return r&&r.length?eh(r,fe(s,2)):[]}function __(r){var s=r==null?0:r.length;return s?yn(r,1,s):[]}function w_(r,s,l){return r&&r.length?(s=l||s===n?1:Ce(s),yn(r,0,s<0?0:s)):[]}function x_(r,s,l){var f=r==null?0:r.length;return f?(s=l||s===n?1:Ce(s),s=f-s,yn(r,s<0?0:s,f)):[]}function $_(r,s){return r&&r.length?Jo(r,fe(s,3),!1,!0):[]}function k_(r,s){return r&&r.length?Jo(r,fe(s,3)):[]}var C_=Ae(function(r){return Ar(At(r,1,mt,!0))}),S_=Ae(function(r){var s=bn(r);return mt(s)&&(s=n),Ar(At(r,1,mt,!0),fe(s,2))}),E_=Ae(function(r){var s=bn(r);return s=typeof s=="function"?s:n,Ar(At(r,1,mt,!0),n,s)});function T_(r){return r&&r.length?Ar(r):[]}function A_(r,s){return r&&r.length?Ar(r,fe(s,2)):[]}function I_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Ar(r,n,s):[]}function Uc(r){if(!(r&&r.length))return[];var s=0;return r=kr(r,function(l){if(mt(l))return s=$t(l.length,s),!0}),ec(s,function(l){return ct(r,Xl(l))})}function Nh(r,s){if(!(r&&r.length))return[];var l=Uc(r);return s==null?l:ct(l,function(f){return Yt(s,n,f)})}var R_=Ae(function(r,s){return mt(r)?Rs(r,s):[]}),O_=Ae(function(r){return wc(kr(r,mt))}),L_=Ae(function(r){var s=bn(r);return mt(s)&&(s=n),wc(kr(r,mt),fe(s,2))}),P_=Ae(function(r){var s=bn(r);return s=typeof s=="function"?s:n,wc(kr(r,mt),n,s)}),M_=Ae(Uc);function B_(r,s){return ih(r||[],s||[],Is)}function U_(r,s){return ih(r||[],s||[],Ps)}var j_=Ae(function(r){var s=r.length,l=s>1?r[s-1]:n;return l=typeof l=="function"?(r.pop(),l):n,Nh(r,l)});function Hh(r){var s=y(r);return s.__chain__=!0,s}function D_(r,s){return s(r),r}function la(r,s){return s(r)}var N_=sr(function(r){var s=r.length,l=s?r[0]:0,f=this.__wrapped__,g=function(b){return lc(b,r)};return s>1||this.__actions__.length||!(f instanceof Ue)||!or(l)?this.thru(g):(f=f.slice(l,+l+(s?1:0)),f.__actions__.push({func:la,args:[g],thisArg:n}),new mn(f,this.__chain__).thru(function(b){return s&&!b.length&&b.push(n),b}))});function H_(){return Hh(this)}function z_(){return new mn(this.value(),this.__chain__)}function F_(){this.__values__===n&&(this.__values__=tp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function W_(){return this}function Z_(r){for(var s,l=this;l instanceof Ko;){var f=Ph(l);f.__index__=0,f.__values__=n,s?g.__wrapped__=f:s=f;var g=f;l=l.__wrapped__}return g.__wrapped__=r,s}function q_(){var r=this.__wrapped__;if(r instanceof Ue){var s=r;return this.__actions__.length&&(s=new Ue(this)),s=s.reverse(),s.__actions__.push({func:la,args:[Bc],thisArg:n}),new mn(s,this.__chain__)}return this.thru(Bc)}function K_(){return rh(this.__wrapped__,this.__actions__)}var G_=ea(function(r,s,l){Qe.call(r,l)?++r[l]:rr(r,l,1)});function V_(r,s,l){var f=xe(r)?mf:Dy;return l&&Dt(r,s,l)&&(s=n),f(r,fe(s,3))}function Q_(r,s){var l=xe(r)?kr:Nf;return l(r,fe(s,3))}var X_=ph(Mh),Y_=ph(Bh);function J_(r,s){return At(ca(r,s),1)}function ew(r,s){return At(ca(r,s),ve)}function tw(r,s,l){return l=l===n?1:Ce(l),At(ca(r,s),l)}function zh(r,s){var l=xe(r)?pn:Tr;return l(r,fe(s,3))}function Fh(r,s){var l=xe(r)?_2:Df;return l(r,fe(s,3))}var nw=ea(function(r,s,l){Qe.call(r,l)?r[l].push(s):rr(r,l,[s])});function rw(r,s,l,f){r=Kt(r)?r:ji(r),l=l&&!f?Ce(l):0;var g=r.length;return l<0&&(l=$t(g+l,0)),pa(r)?l<=g&&r.indexOf(s,l)>-1:!!g&&Si(r,s,l)>-1}var iw=Ae(function(r,s,l){var f=-1,g=typeof s=="function",b=Kt(r)?U(r.length):[];return Tr(r,function($){b[++f]=g?Yt(s,$,l):Os($,s,l)}),b}),sw=ea(function(r,s,l){rr(r,l,s)});function ca(r,s){var l=xe(r)?ct:qf;return l(r,fe(s,3))}function ow(r,s,l,f){return r==null?[]:(xe(s)||(s=s==null?[]:[s]),l=f?n:l,xe(l)||(l=l==null?[]:[l]),Qf(r,s,l))}var aw=ea(function(r,s,l){r[l?0:1].push(s)},function(){return[[],[]]});function lw(r,s,l){var f=xe(r)?Vl:_f,g=arguments.length<3;return f(r,fe(s,4),l,g,Tr)}function cw(r,s,l){var f=xe(r)?w2:_f,g=arguments.length<3;return f(r,fe(s,4),l,g,Df)}function uw(r,s){var l=xe(r)?kr:Nf;return l(r,fa(fe(s,3)))}function dw(r){var s=xe(r)?Mf:rb;return s(r)}function fw(r,s,l){(l?Dt(r,s,l):s===n)?s=1:s=Ce(s);var f=xe(r)?Py:ib;return f(r,s)}function hw(r){var s=xe(r)?My:ob;return s(r)}function pw(r){if(r==null)return 0;if(Kt(r))return pa(r)?Ti(r):r.length;var s=Lt(r);return s==at||s==ze?r.size:pc(r).length}function gw(r,s,l){var f=xe(r)?Ql:ab;return l&&Dt(r,s,l)&&(s=n),f(r,fe(s,3))}var mw=Ae(function(r,s){if(r==null)return[];var l=s.length;return l>1&&Dt(r,s[0],s[1])?s=[]:l>2&&Dt(s[0],s[1],s[2])&&(s=[s[0]]),Qf(r,At(s,1),[])}),ua=Q2||function(){return Tt.Date.now()};function vw(r,s){if(typeof s!="function")throw new gn(c);return r=Ce(r),function(){if(--r<1)return s.apply(this,arguments)}}function Wh(r,s,l){return s=l?n:s,s=r&&s==null?r.length:s,ir(r,H,n,n,n,n,s)}function Zh(r,s){var l;if(typeof s!="function")throw new gn(c);return r=Ce(r),function(){return--r>0&&(l=s.apply(this,arguments)),r<=1&&(s=n),l}}var jc=Ae(function(r,s,l){var f=k;if(l.length){var g=Sr(l,Bi(jc));f|=T}return ir(r,f,s,l,g)}),qh=Ae(function(r,s,l){var f=k|C;if(l.length){var g=Sr(l,Bi(qh));f|=T}return ir(s,f,r,l,g)});function Kh(r,s,l){s=l?n:s;var f=ir(r,B,n,n,n,n,n,s);return f.placeholder=Kh.placeholder,f}function Gh(r,s,l){s=l?n:s;var f=ir(r,R,n,n,n,n,n,s);return f.placeholder=Gh.placeholder,f}function Vh(r,s,l){var f,g,b,$,S,O,D=0,N=!1,F=!1,Q=!0;if(typeof r!="function")throw new gn(c);s=_n(s)||0,dt(l)&&(N=!!l.leading,F="maxWait"in l,b=F?$t(_n(l.maxWait)||0,s):b,Q="trailing"in l?!!l.trailing:Q);function ae(vt){var An=f,cr=g;return f=g=n,D=vt,$=r.apply(cr,An),$}function pe(vt){return D=vt,S=Us(Me,s),N?ae(vt):$}function Ee(vt){var An=vt-O,cr=vt-D,pp=s-An;return F?Ot(pp,b-cr):pp}function ge(vt){var An=vt-O,cr=vt-D;return O===n||An>=s||An<0||F&&cr>=b}function Me(){var vt=ua();if(ge(vt))return je(vt);S=Us(Me,Ee(vt))}function je(vt){return S=n,Q&&f?ae(vt):(f=g=n,$)}function nn(){S!==n&&sh(S),D=0,f=O=g=S=n}function Nt(){return S===n?$:je(ua())}function rn(){var vt=ua(),An=ge(vt);if(f=arguments,g=this,O=vt,An){if(S===n)return pe(O);if(F)return sh(S),S=Us(Me,s),ae(O)}return S===n&&(S=Us(Me,s)),$}return rn.cancel=nn,rn.flush=Nt,rn}var yw=Ae(function(r,s){return jf(r,1,s)}),bw=Ae(function(r,s,l){return jf(r,_n(s)||0,l)});function _w(r){return ir(r,se)}function da(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new gn(c);var l=function(){var f=arguments,g=s?s.apply(this,f):f[0],b=l.cache;if(b.has(g))return b.get(g);var $=r.apply(this,f);return l.cache=b.set(g,$)||b,$};return l.cache=new(da.Cache||nr),l}da.Cache=nr;function fa(r){if(typeof r!="function")throw new gn(c);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function ww(r){return Zh(2,r)}var xw=lb(function(r,s){s=s.length==1&&xe(s[0])?ct(s[0],Jt(fe())):ct(At(s,1),Jt(fe()));var l=s.length;return Ae(function(f){for(var g=-1,b=Ot(f.length,l);++g<b;)f[g]=s[g].call(this,f[g]);return Yt(r,this,f)})}),Dc=Ae(function(r,s){var l=Sr(s,Bi(Dc));return ir(r,T,n,s,l)}),Qh=Ae(function(r,s){var l=Sr(s,Bi(Qh));return ir(r,L,n,s,l)}),$w=sr(function(r,s){return ir(r,W,n,n,n,s)});function kw(r,s){if(typeof r!="function")throw new gn(c);return s=s===n?s:Ce(s),Ae(r,s)}function Cw(r,s){if(typeof r!="function")throw new gn(c);return s=s==null?0:$t(Ce(s),0),Ae(function(l){var f=l[s],g=Rr(l,0,s);return f&&Cr(g,f),Yt(r,this,g)})}function Sw(r,s,l){var f=!0,g=!0;if(typeof r!="function")throw new gn(c);return dt(l)&&(f="leading"in l?!!l.leading:f,g="trailing"in l?!!l.trailing:g),Vh(r,s,{leading:f,maxWait:s,trailing:g})}function Ew(r){return Wh(r,1)}function Tw(r,s){return Dc($c(s),r)}function Aw(){if(!arguments.length)return[];var r=arguments[0];return xe(r)?r:[r]}function Iw(r){return vn(r,_)}function Rw(r,s){return s=typeof s=="function"?s:n,vn(r,_,s)}function Ow(r){return vn(r,m|_)}function Lw(r,s){return s=typeof s=="function"?s:n,vn(r,m|_,s)}function Pw(r,s){return s==null||Uf(r,s,St(s))}function Tn(r,s){return r===s||r!==r&&s!==s}var Mw=ia(dc),Bw=ia(function(r,s){return r>=s}),ui=Ff(function(){return arguments}())?Ff:function(r){return pt(r)&&Qe.call(r,"callee")&&!Af.call(r,"callee")},xe=U.isArray,Uw=uf?Jt(uf):Zy;function Kt(r){return r!=null&&ha(r.length)&&!ar(r)}function mt(r){return pt(r)&&Kt(r)}function jw(r){return r===!0||r===!1||pt(r)&&jt(r)==G}var Or=Y2||Qc,Dw=df?Jt(df):qy;function Nw(r){return pt(r)&&r.nodeType===1&&!js(r)}function Hw(r){if(r==null)return!0;if(Kt(r)&&(xe(r)||typeof r=="string"||typeof r.splice=="function"||Or(r)||Ui(r)||ui(r)))return!r.length;var s=Lt(r);if(s==at||s==ze)return!r.size;if(Bs(r))return!pc(r).length;for(var l in r)if(Qe.call(r,l))return!1;return!0}function zw(r,s){return Ls(r,s)}function Fw(r,s,l){l=typeof l=="function"?l:n;var f=l?l(r,s):n;return f===n?Ls(r,s,n,l):!!f}function Nc(r){if(!pt(r))return!1;var s=jt(r);return s==gt||s==_t||typeof r.message=="string"&&typeof r.name=="string"&&!js(r)}function Ww(r){return typeof r=="number"&&Rf(r)}function ar(r){if(!dt(r))return!1;var s=jt(r);return s==Rt||s==Nn||s==un||s==er}function Xh(r){return typeof r=="number"&&r==Ce(r)}function ha(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ke}function dt(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function pt(r){return r!=null&&typeof r=="object"}var Yh=ff?Jt(ff):Gy;function Zw(r,s){return r===s||hc(r,s,Ic(s))}function qw(r,s,l){return l=typeof l=="function"?l:n,hc(r,s,Ic(s),l)}function Kw(r){return Jh(r)&&r!=+r}function Gw(r){if(Rb(r))throw new _e(a);return Wf(r)}function Vw(r){return r===null}function Qw(r){return r==null}function Jh(r){return typeof r=="number"||pt(r)&&jt(r)==Wt}function js(r){if(!pt(r)||jt(r)!=ht)return!1;var s=No(r);if(s===null)return!0;var l=Qe.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&Bo.call(l)==q2}var Hc=hf?Jt(hf):Vy;function Xw(r){return Xh(r)&&r>=-ke&&r<=ke}var ep=pf?Jt(pf):Qy;function pa(r){return typeof r=="string"||!xe(r)&&pt(r)&&jt(r)==lt}function tn(r){return typeof r=="symbol"||pt(r)&&jt(r)==Ct}var Ui=gf?Jt(gf):Xy;function Yw(r){return r===n}function Jw(r){return pt(r)&&Lt(r)==ue}function e3(r){return pt(r)&&jt(r)==dn}var t3=ia(gc),n3=ia(function(r,s){return r<=s});function tp(r){if(!r)return[];if(Kt(r))return pa(r)?Sn(r):qt(r);if(Cs&&r[Cs])return P2(r[Cs]());var s=Lt(r),l=s==at?nc:s==ze?Lo:ji;return l(r)}function lr(r){if(!r)return r===0?r:0;if(r=_n(r),r===ve||r===-ve){var s=r<0?-1:1;return s*ce}return r===r?r:0}function Ce(r){var s=lr(r),l=s%1;return s===s?l?s-l:s:0}function np(r){return r?oi(Ce(r),0,K):0}function _n(r){if(typeof r=="number")return r;if(tn(r))return ye;if(dt(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=dt(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=wf(r);var l=Uv.test(r);return l||Dv.test(r)?v2(r.slice(2),l?2:8):Bv.test(r)?ye:+r}function rp(r){return zn(r,Gt(r))}function r3(r){return r?oi(Ce(r),-ke,ke):r===0?r:0}function Ve(r){return r==null?"":en(r)}var i3=Pi(function(r,s){if(Bs(s)||Kt(s)){zn(s,St(s),r);return}for(var l in s)Qe.call(s,l)&&Is(r,l,s[l])}),ip=Pi(function(r,s){zn(s,Gt(s),r)}),ga=Pi(function(r,s,l,f){zn(s,Gt(s),r,f)}),s3=Pi(function(r,s,l,f){zn(s,St(s),r,f)}),o3=sr(lc);function a3(r,s){var l=Li(r);return s==null?l:Bf(l,s)}var l3=Ae(function(r,s){r=Je(r);var l=-1,f=s.length,g=f>2?s[2]:n;for(g&&Dt(s[0],s[1],g)&&(f=1);++l<f;)for(var b=s[l],$=Gt(b),S=-1,O=$.length;++S<O;){var D=$[S],N=r[D];(N===n||Tn(N,Ii[D])&&!Qe.call(r,D))&&(r[D]=b[D])}return r}),c3=Ae(function(r){return r.push(n,wh),Yt(sp,n,r)});function u3(r,s){return vf(r,fe(s,3),Hn)}function d3(r,s){return vf(r,fe(s,3),uc)}function f3(r,s){return r==null?r:cc(r,fe(s,3),Gt)}function h3(r,s){return r==null?r:Hf(r,fe(s,3),Gt)}function p3(r,s){return r&&Hn(r,fe(s,3))}function g3(r,s){return r&&uc(r,fe(s,3))}function m3(r){return r==null?[]:Qo(r,St(r))}function v3(r){return r==null?[]:Qo(r,Gt(r))}function zc(r,s,l){var f=r==null?n:ai(r,s);return f===n?l:f}function y3(r,s){return r!=null&&kh(r,s,Hy)}function Fc(r,s){return r!=null&&kh(r,s,zy)}var b3=mh(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Uo.call(s)),r[s]=l},Zc(Vt)),_3=mh(function(r,s,l){s!=null&&typeof s.toString!="function"&&(s=Uo.call(s)),Qe.call(r,s)?r[s].push(l):r[s]=[l]},fe),w3=Ae(Os);function St(r){return Kt(r)?Pf(r):pc(r)}function Gt(r){return Kt(r)?Pf(r,!0):Yy(r)}function x3(r,s){var l={};return s=fe(s,3),Hn(r,function(f,g,b){rr(l,s(f,g,b),f)}),l}function $3(r,s){var l={};return s=fe(s,3),Hn(r,function(f,g,b){rr(l,g,s(f,g,b))}),l}var k3=Pi(function(r,s,l){Xo(r,s,l)}),sp=Pi(function(r,s,l,f){Xo(r,s,l,f)}),C3=sr(function(r,s){var l={};if(r==null)return l;var f=!1;s=ct(s,function(b){return b=Ir(b,r),f||(f=b.length>1),b}),zn(r,Tc(r),l),f&&(l=vn(l,m|v|_,bb));for(var g=s.length;g--;)_c(l,s[g]);return l});function S3(r,s){return op(r,fa(fe(s)))}var E3=sr(function(r,s){return r==null?{}:eb(r,s)});function op(r,s){if(r==null)return{};var l=ct(Tc(r),function(f){return[f]});return s=fe(s),Xf(r,l,function(f,g){return s(f,g[0])})}function T3(r,s,l){s=Ir(s,r);var f=-1,g=s.length;for(g||(g=1,r=n);++f<g;){var b=r==null?n:r[Fn(s[f])];b===n&&(f=g,b=l),r=ar(b)?b.call(r):b}return r}function A3(r,s,l){return r==null?r:Ps(r,s,l)}function I3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:Ps(r,s,l,f)}var ap=bh(St),lp=bh(Gt);function R3(r,s,l){var f=xe(r),g=f||Or(r)||Ui(r);if(s=fe(s,4),l==null){var b=r&&r.constructor;g?l=f?new b:[]:dt(r)?l=ar(b)?Li(No(r)):{}:l={}}return(g?pn:Hn)(r,function($,S,O){return s(l,$,S,O)}),l}function O3(r,s){return r==null?!0:_c(r,s)}function L3(r,s,l){return r==null?r:nh(r,s,$c(l))}function P3(r,s,l,f){return f=typeof f=="function"?f:n,r==null?r:nh(r,s,$c(l),f)}function ji(r){return r==null?[]:tc(r,St(r))}function M3(r){return r==null?[]:tc(r,Gt(r))}function B3(r,s,l){return l===n&&(l=s,s=n),l!==n&&(l=_n(l),l=l===l?l:0),s!==n&&(s=_n(s),s=s===s?s:0),oi(_n(r),s,l)}function U3(r,s,l){return s=lr(s),l===n?(l=s,s=0):l=lr(l),r=_n(r),Fy(r,s,l)}function j3(r,s,l){if(l&&typeof l!="boolean"&&Dt(r,s,l)&&(s=l=n),l===n&&(typeof s=="boolean"?(l=s,s=n):typeof r=="boolean"&&(l=r,r=n)),r===n&&s===n?(r=0,s=1):(r=lr(r),s===n?(s=r,r=0):s=lr(s)),r>s){var f=r;r=s,s=f}if(l||r%1||s%1){var g=Of();return Ot(r+g*(s-r+m2("1e-"+((g+"").length-1))),s)}return vc(r,s)}var D3=Mi(function(r,s,l){return s=s.toLowerCase(),r+(l?cp(s):s)});function cp(r){return Wc(Ve(r).toLowerCase())}function up(r){return r=Ve(r),r&&r.replace(Hv,A2).replace(o2,"")}function N3(r,s,l){r=Ve(r),s=en(s);var f=r.length;l=l===n?f:oi(Ce(l),0,f);var g=l;return l-=s.length,l>=0&&r.slice(l,g)==s}function H3(r){return r=Ve(r),r&&wv.test(r)?r.replace(Nd,I2):r}function z3(r){return r=Ve(r),r&&Ev.test(r)?r.replace(Dl,"\\$&"):r}var F3=Mi(function(r,s,l){return r+(l?"-":"")+s.toLowerCase()}),W3=Mi(function(r,s,l){return r+(l?" ":"")+s.toLowerCase()}),Z3=hh("toLowerCase");function q3(r,s,l){r=Ve(r),s=Ce(s);var f=s?Ti(r):0;if(!s||f>=s)return r;var g=(s-f)/2;return ra(Wo(g),l)+r+ra(Fo(g),l)}function K3(r,s,l){r=Ve(r),s=Ce(s);var f=s?Ti(r):0;return s&&f<s?r+ra(s-f,l):r}function G3(r,s,l){r=Ve(r),s=Ce(s);var f=s?Ti(r):0;return s&&f<s?ra(s-f,l)+r:r}function V3(r,s,l){return l||s==null?s=0:s&&(s=+s),ny(Ve(r).replace(Nl,""),s||0)}function Q3(r,s,l){return(l?Dt(r,s,l):s===n)?s=1:s=Ce(s),yc(Ve(r),s)}function X3(){var r=arguments,s=Ve(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var Y3=Mi(function(r,s,l){return r+(l?"_":"")+s.toLowerCase()});function J3(r,s,l){return l&&typeof l!="number"&&Dt(r,s,l)&&(s=l=n),l=l===n?K:l>>>0,l?(r=Ve(r),r&&(typeof s=="string"||s!=null&&!Hc(s))&&(s=en(s),!s&&Ei(r))?Rr(Sn(r),0,l):r.split(s,l)):[]}var ex=Mi(function(r,s,l){return r+(l?" ":"")+Wc(s)});function tx(r,s,l){return r=Ve(r),l=l==null?0:oi(Ce(l),0,r.length),s=en(s),r.slice(l,l+s.length)==s}function nx(r,s,l){var f=y.templateSettings;l&&Dt(r,s,l)&&(s=n),r=Ve(r),s=ga({},s,f,_h);var g=ga({},s.imports,f.imports,_h),b=St(g),$=tc(g,b),S,O,D=0,N=s.interpolate||To,F="__p += '",Q=rc((s.escape||To).source+"|"+N.source+"|"+(N===Hd?Mv:To).source+"|"+(s.evaluate||To).source+"|$","g"),ae="//# sourceURL="+(Qe.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++d2+"]")+`
`;r.replace(Q,function(ge,Me,je,nn,Nt,rn){return je||(je=nn),F+=r.slice(D,rn).replace(zv,R2),Me&&(S=!0,F+=`' +
__e(`+Me+`) +
'`),Nt&&(O=!0,F+=`';
`+Nt+`;
__p += '`),je&&(F+=`' +
((__t = (`+je+`)) == null ? '' : __t) +
'`),D=rn+ge.length,ge}),F+=`';
`;var pe=Qe.call(s,"variable")&&s.variable;if(!pe)F=`with (obj) {
`+F+`
}
`;else if(Lv.test(pe))throw new _e(u);F=(O?F.replace(vv,""):F).replace(yv,"$1").replace(bv,"$1;"),F="function("+(pe||"obj")+`) {
`+(pe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(S?", __e = _.escape":"")+(O?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+F+`return __p
}`;var Ee=fp(function(){return qe(b,ae+"return "+F).apply(n,$)});if(Ee.source=F,Nc(Ee))throw Ee;return Ee}function rx(r){return Ve(r).toLowerCase()}function ix(r){return Ve(r).toUpperCase()}function sx(r,s,l){if(r=Ve(r),r&&(l||s===n))return wf(r);if(!r||!(s=en(s)))return r;var f=Sn(r),g=Sn(s),b=xf(f,g),$=$f(f,g)+1;return Rr(f,b,$).join("")}function ox(r,s,l){if(r=Ve(r),r&&(l||s===n))return r.slice(0,Cf(r)+1);if(!r||!(s=en(s)))return r;var f=Sn(r),g=$f(f,Sn(s))+1;return Rr(f,0,g).join("")}function ax(r,s,l){if(r=Ve(r),r&&(l||s===n))return r.replace(Nl,"");if(!r||!(s=en(s)))return r;var f=Sn(r),g=xf(f,Sn(s));return Rr(f,g).join("")}function lx(r,s){var l=V,f=re;if(dt(s)){var g="separator"in s?s.separator:g;l="length"in s?Ce(s.length):l,f="omission"in s?en(s.omission):f}r=Ve(r);var b=r.length;if(Ei(r)){var $=Sn(r);b=$.length}if(l>=b)return r;var S=l-Ti(f);if(S<1)return f;var O=$?Rr($,0,S).join(""):r.slice(0,S);if(g===n)return O+f;if($&&(S+=O.length-S),Hc(g)){if(r.slice(S).search(g)){var D,N=O;for(g.global||(g=rc(g.source,Ve(zd.exec(g))+"g")),g.lastIndex=0;D=g.exec(N);)var F=D.index;O=O.slice(0,F===n?S:F)}}else if(r.indexOf(en(g),S)!=S){var Q=O.lastIndexOf(g);Q>-1&&(O=O.slice(0,Q))}return O+f}function cx(r){return r=Ve(r),r&&_v.test(r)?r.replace(Dd,j2):r}var ux=Mi(function(r,s,l){return r+(l?" ":"")+s.toUpperCase()}),Wc=hh("toUpperCase");function dp(r,s,l){return r=Ve(r),s=l?n:s,s===n?L2(r)?H2(r):k2(r):r.match(s)||[]}var fp=Ae(function(r,s){try{return Yt(r,n,s)}catch(l){return Nc(l)?l:new _e(l)}}),dx=sr(function(r,s){return pn(s,function(l){l=Fn(l),rr(r,l,jc(r[l],r))}),r});function fx(r){var s=r==null?0:r.length,l=fe();return r=s?ct(r,function(f){if(typeof f[1]!="function")throw new gn(c);return[l(f[0]),f[1]]}):[],Ae(function(f){for(var g=-1;++g<s;){var b=r[g];if(Yt(b[0],this,f))return Yt(b[1],this,f)}})}function hx(r){return jy(vn(r,m))}function Zc(r){return function(){return r}}function px(r,s){return r==null||r!==r?s:r}var gx=gh(),mx=gh(!0);function Vt(r){return r}function qc(r){return Zf(typeof r=="function"?r:vn(r,m))}function vx(r){return Kf(vn(r,m))}function yx(r,s){return Gf(r,vn(s,m))}var bx=Ae(function(r,s){return function(l){return Os(l,r,s)}}),_x=Ae(function(r,s){return function(l){return Os(r,l,s)}});function Kc(r,s,l){var f=St(s),g=Qo(s,f);l==null&&!(dt(s)&&(g.length||!f.length))&&(l=s,s=r,r=this,g=Qo(s,St(s)));var b=!(dt(l)&&"chain"in l)||!!l.chain,$=ar(r);return pn(g,function(S){var O=s[S];r[S]=O,$&&(r.prototype[S]=function(){var D=this.__chain__;if(b||D){var N=r(this.__wrapped__),F=N.__actions__=qt(this.__actions__);return F.push({func:O,args:arguments,thisArg:r}),N.__chain__=D,N}return O.apply(r,Cr([this.value()],arguments))})}),r}function wx(){return Tt._===this&&(Tt._=K2),this}function Gc(){}function xx(r){return r=Ce(r),Ae(function(s){return Vf(s,r)})}var $x=Cc(ct),kx=Cc(mf),Cx=Cc(Ql);function hp(r){return Oc(r)?Xl(Fn(r)):tb(r)}function Sx(r){return function(s){return r==null?n:ai(r,s)}}var Ex=vh(),Tx=vh(!0);function Vc(){return[]}function Qc(){return!1}function Ax(){return{}}function Ix(){return""}function Rx(){return!0}function Ox(r,s){if(r=Ce(r),r<1||r>ke)return[];var l=K,f=Ot(r,K);s=fe(s),r-=K;for(var g=ec(f,s);++l<r;)s(l);return g}function Lx(r){return xe(r)?ct(r,Fn):tn(r)?[r]:qt(Lh(Ve(r)))}function Px(r){var s=++Z2;return Ve(r)+s}var Mx=na(function(r,s){return r+s},0),Bx=Sc("ceil"),Ux=na(function(r,s){return r/s},1),jx=Sc("floor");function Dx(r){return r&&r.length?Vo(r,Vt,dc):n}function Nx(r,s){return r&&r.length?Vo(r,fe(s,2),dc):n}function Hx(r){return bf(r,Vt)}function zx(r,s){return bf(r,fe(s,2))}function Fx(r){return r&&r.length?Vo(r,Vt,gc):n}function Wx(r,s){return r&&r.length?Vo(r,fe(s,2),gc):n}var Zx=na(function(r,s){return r*s},1),qx=Sc("round"),Kx=na(function(r,s){return r-s},0);function Gx(r){return r&&r.length?Jl(r,Vt):0}function Vx(r,s){return r&&r.length?Jl(r,fe(s,2)):0}return y.after=vw,y.ary=Wh,y.assign=i3,y.assignIn=ip,y.assignInWith=ga,y.assignWith=s3,y.at=o3,y.before=Zh,y.bind=jc,y.bindAll=dx,y.bindKey=qh,y.castArray=Aw,y.chain=Hh,y.chunk=jb,y.compact=Db,y.concat=Nb,y.cond=fx,y.conforms=hx,y.constant=Zc,y.countBy=G_,y.create=a3,y.curry=Kh,y.curryRight=Gh,y.debounce=Vh,y.defaults=l3,y.defaultsDeep=c3,y.defer=yw,y.delay=bw,y.difference=Hb,y.differenceBy=zb,y.differenceWith=Fb,y.drop=Wb,y.dropRight=Zb,y.dropRightWhile=qb,y.dropWhile=Kb,y.fill=Gb,y.filter=Q_,y.flatMap=J_,y.flatMapDeep=ew,y.flatMapDepth=tw,y.flatten=Uh,y.flattenDeep=Vb,y.flattenDepth=Qb,y.flip=_w,y.flow=gx,y.flowRight=mx,y.fromPairs=Xb,y.functions=m3,y.functionsIn=v3,y.groupBy=nw,y.initial=Jb,y.intersection=e_,y.intersectionBy=t_,y.intersectionWith=n_,y.invert=b3,y.invertBy=_3,y.invokeMap=iw,y.iteratee=qc,y.keyBy=sw,y.keys=St,y.keysIn=Gt,y.map=ca,y.mapKeys=x3,y.mapValues=$3,y.matches=vx,y.matchesProperty=yx,y.memoize=da,y.merge=k3,y.mergeWith=sp,y.method=bx,y.methodOf=_x,y.mixin=Kc,y.negate=fa,y.nthArg=xx,y.omit=C3,y.omitBy=S3,y.once=ww,y.orderBy=ow,y.over=$x,y.overArgs=xw,y.overEvery=kx,y.overSome=Cx,y.partial=Dc,y.partialRight=Qh,y.partition=aw,y.pick=E3,y.pickBy=op,y.property=hp,y.propertyOf=Sx,y.pull=o_,y.pullAll=Dh,y.pullAllBy=a_,y.pullAllWith=l_,y.pullAt=c_,y.range=Ex,y.rangeRight=Tx,y.rearg=$w,y.reject=uw,y.remove=u_,y.rest=kw,y.reverse=Bc,y.sampleSize=fw,y.set=A3,y.setWith=I3,y.shuffle=hw,y.slice=d_,y.sortBy=mw,y.sortedUniq=y_,y.sortedUniqBy=b_,y.split=J3,y.spread=Cw,y.tail=__,y.take=w_,y.takeRight=x_,y.takeRightWhile=$_,y.takeWhile=k_,y.tap=D_,y.throttle=Sw,y.thru=la,y.toArray=tp,y.toPairs=ap,y.toPairsIn=lp,y.toPath=Lx,y.toPlainObject=rp,y.transform=R3,y.unary=Ew,y.union=C_,y.unionBy=S_,y.unionWith=E_,y.uniq=T_,y.uniqBy=A_,y.uniqWith=I_,y.unset=O3,y.unzip=Uc,y.unzipWith=Nh,y.update=L3,y.updateWith=P3,y.values=ji,y.valuesIn=M3,y.without=R_,y.words=dp,y.wrap=Tw,y.xor=O_,y.xorBy=L_,y.xorWith=P_,y.zip=M_,y.zipObject=B_,y.zipObjectDeep=U_,y.zipWith=j_,y.entries=ap,y.entriesIn=lp,y.extend=ip,y.extendWith=ga,Kc(y,y),y.add=Mx,y.attempt=fp,y.camelCase=D3,y.capitalize=cp,y.ceil=Bx,y.clamp=B3,y.clone=Iw,y.cloneDeep=Ow,y.cloneDeepWith=Lw,y.cloneWith=Rw,y.conformsTo=Pw,y.deburr=up,y.defaultTo=px,y.divide=Ux,y.endsWith=N3,y.eq=Tn,y.escape=H3,y.escapeRegExp=z3,y.every=V_,y.find=X_,y.findIndex=Mh,y.findKey=u3,y.findLast=Y_,y.findLastIndex=Bh,y.findLastKey=d3,y.floor=jx,y.forEach=zh,y.forEachRight=Fh,y.forIn=f3,y.forInRight=h3,y.forOwn=p3,y.forOwnRight=g3,y.get=zc,y.gt=Mw,y.gte=Bw,y.has=y3,y.hasIn=Fc,y.head=jh,y.identity=Vt,y.includes=rw,y.indexOf=Yb,y.inRange=U3,y.invoke=w3,y.isArguments=ui,y.isArray=xe,y.isArrayBuffer=Uw,y.isArrayLike=Kt,y.isArrayLikeObject=mt,y.isBoolean=jw,y.isBuffer=Or,y.isDate=Dw,y.isElement=Nw,y.isEmpty=Hw,y.isEqual=zw,y.isEqualWith=Fw,y.isError=Nc,y.isFinite=Ww,y.isFunction=ar,y.isInteger=Xh,y.isLength=ha,y.isMap=Yh,y.isMatch=Zw,y.isMatchWith=qw,y.isNaN=Kw,y.isNative=Gw,y.isNil=Qw,y.isNull=Vw,y.isNumber=Jh,y.isObject=dt,y.isObjectLike=pt,y.isPlainObject=js,y.isRegExp=Hc,y.isSafeInteger=Xw,y.isSet=ep,y.isString=pa,y.isSymbol=tn,y.isTypedArray=Ui,y.isUndefined=Yw,y.isWeakMap=Jw,y.isWeakSet=e3,y.join=r_,y.kebabCase=F3,y.last=bn,y.lastIndexOf=i_,y.lowerCase=W3,y.lowerFirst=Z3,y.lt=t3,y.lte=n3,y.max=Dx,y.maxBy=Nx,y.mean=Hx,y.meanBy=zx,y.min=Fx,y.minBy=Wx,y.stubArray=Vc,y.stubFalse=Qc,y.stubObject=Ax,y.stubString=Ix,y.stubTrue=Rx,y.multiply=Zx,y.nth=s_,y.noConflict=wx,y.noop=Gc,y.now=ua,y.pad=q3,y.padEnd=K3,y.padStart=G3,y.parseInt=V3,y.random=j3,y.reduce=lw,y.reduceRight=cw,y.repeat=Q3,y.replace=X3,y.result=T3,y.round=qx,y.runInContext=A,y.sample=dw,y.size=pw,y.snakeCase=Y3,y.some=gw,y.sortedIndex=f_,y.sortedIndexBy=h_,y.sortedIndexOf=p_,y.sortedLastIndex=g_,y.sortedLastIndexBy=m_,y.sortedLastIndexOf=v_,y.startCase=ex,y.startsWith=tx,y.subtract=Kx,y.sum=Gx,y.sumBy=Vx,y.template=nx,y.times=Ox,y.toFinite=lr,y.toInteger=Ce,y.toLength=np,y.toLower=rx,y.toNumber=_n,y.toSafeInteger=r3,y.toString=Ve,y.toUpper=ix,y.trim=sx,y.trimEnd=ox,y.trimStart=ax,y.truncate=lx,y.unescape=cx,y.uniqueId=Px,y.upperCase=ux,y.upperFirst=Wc,y.each=zh,y.eachRight=Fh,y.first=jh,Kc(y,function(){var r={};return Hn(y,function(s,l){Qe.call(y.prototype,l)||(r[l]=s)}),r}(),{chain:!1}),y.VERSION=i,pn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),pn(["drop","take"],function(r,s){Ue.prototype[r]=function(l){l=l===n?1:$t(Ce(l),0);var f=this.__filtered__&&!s?new Ue(this):this.clone();return f.__filtered__?f.__takeCount__=Ot(l,f.__takeCount__):f.__views__.push({size:Ot(l,K),type:r+(f.__dir__<0?"Right":"")}),f},Ue.prototype[r+"Right"]=function(l){return this.reverse()[r](l).reverse()}}),pn(["filter","map","takeWhile"],function(r,s){var l=s+1,f=l==oe||l==J;Ue.prototype[r]=function(g){var b=this.clone();return b.__iteratees__.push({iteratee:fe(g,3),type:l}),b.__filtered__=b.__filtered__||f,b}}),pn(["head","last"],function(r,s){var l="take"+(s?"Right":"");Ue.prototype[r]=function(){return this[l](1).value()[0]}}),pn(["initial","tail"],function(r,s){var l="drop"+(s?"":"Right");Ue.prototype[r]=function(){return this.__filtered__?new Ue(this):this[l](1)}}),Ue.prototype.compact=function(){return this.filter(Vt)},Ue.prototype.find=function(r){return this.filter(r).head()},Ue.prototype.findLast=function(r){return this.reverse().find(r)},Ue.prototype.invokeMap=Ae(function(r,s){return typeof r=="function"?new Ue(this):this.map(function(l){return Os(l,r,s)})}),Ue.prototype.reject=function(r){return this.filter(fa(fe(r)))},Ue.prototype.slice=function(r,s){r=Ce(r);var l=this;return l.__filtered__&&(r>0||s<0)?new Ue(l):(r<0?l=l.takeRight(-r):r&&(l=l.drop(r)),s!==n&&(s=Ce(s),l=s<0?l.dropRight(-s):l.take(s-r)),l)},Ue.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Ue.prototype.toArray=function(){return this.take(K)},Hn(Ue.prototype,function(r,s){var l=/^(?:filter|find|map|reject)|While$/.test(s),f=/^(?:head|last)$/.test(s),g=y[f?"take"+(s=="last"?"Right":""):s],b=f||/^find/.test(s);g&&(y.prototype[s]=function(){var $=this.__wrapped__,S=f?[1]:arguments,O=$ instanceof Ue,D=S[0],N=O||xe($),F=function(Me){var je=g.apply(y,Cr([Me],S));return f&&Q?je[0]:je};N&&l&&typeof D=="function"&&D.length!=1&&(O=N=!1);var Q=this.__chain__,ae=!!this.__actions__.length,pe=b&&!Q,Ee=O&&!ae;if(!b&&N){$=Ee?$:new Ue(this);var ge=r.apply($,S);return ge.__actions__.push({func:la,args:[F],thisArg:n}),new mn(ge,Q)}return pe&&Ee?r.apply(this,S):(ge=this.thru(F),pe?f?ge.value()[0]:ge.value():ge)})}),pn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Po[r],l=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",f=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var g=arguments;if(f&&!this.__chain__){var b=this.value();return s.apply(xe(b)?b:[],g)}return this[l](function($){return s.apply(xe($)?$:[],g)})}}),Hn(Ue.prototype,function(r,s){var l=y[s];if(l){var f=l.name+"";Qe.call(Oi,f)||(Oi[f]=[]),Oi[f].push({name:s,func:l})}}),Oi[ta(n,C).name]=[{name:"wrapper",func:n}],Ue.prototype.clone=cy,Ue.prototype.reverse=uy,Ue.prototype.value=dy,y.prototype.at=N_,y.prototype.chain=H_,y.prototype.commit=z_,y.prototype.next=F_,y.prototype.plant=Z_,y.prototype.reverse=q_,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=K_,y.prototype.first=y.prototype.head,Cs&&(y.prototype[Cs]=W_),y},Ai=z2();ni?((ni.exports=Ai)._=Ai,ql._=Ai):Tt._=Ai}).call(fr)})(ja,ja.exports);var w4=ja.exports;const x4=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),m0=(e={})=>(()=>{const t=x4();return st(t,e,!0,!0),t})(),$4=M('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),k4=M('<span class="inline-block h-4 w-4 text-gray-700">'),vo=e=>{const[t,n]=$e(!1),i=()=>n(o=>!o);return(()=>{const o=$4(),a=o.firstChild,c=a.firstChild,u=c.firstChild,d=c.nextSibling;return I(c,w(le,{get when(){return e.icon},keyed:!0,children:p=>(()=>{const h=k4();return I(h,p),h})()}),u),I(u,()=>e.name),d.$$click=()=>i(),I(d,w(m0,{})),I(o,w(le,{get when(){return t()},get children(){return e.settings()}}),null),o})()};bt(["click"]);const C4=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),v0=(e={})=>(()=>{const t=C4();return st(t,e,!0,!0),t})();var S4=typeof fr=="object"&&fr&&fr.Object===Object&&fr,y0=S4,E4=y0,T4=typeof self=="object"&&self&&self.Object===Object&&self,A4=E4||T4||Function("return this")(),jn=A4,I4=jn,R4=I4.Symbol,ls=R4,xp=ls,b0=Object.prototype,O4=b0.hasOwnProperty,L4=b0.toString,Ds=xp?xp.toStringTag:void 0;function P4(e){var t=O4.call(e,Ds),n=e[Ds];try{e[Ds]=void 0;var i=!0}catch{}var o=L4.call(e);return i&&(t?e[Ds]=n:delete e[Ds]),o}var M4=P4,B4=Object.prototype,U4=B4.toString;function j4(e){return U4.call(e)}var D4=j4,$p=ls,N4=M4,H4=D4,z4="[object Null]",F4="[object Undefined]",kp=$p?$p.toStringTag:void 0;function W4(e){return e==null?e===void 0?F4:z4:kp&&kp in Object(e)?N4(e):H4(e)}var cs=W4;function Z4(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Qn=Z4,q4=cs,K4=Qn,G4="[object AsyncFunction]",V4="[object Function]",Q4="[object GeneratorFunction]",X4="[object Proxy]";function Y4(e){if(!K4(e))return!1;var t=q4(e);return t==V4||t==Q4||t==G4||t==X4}var _0=Y4,J4=jn,e5=J4["__core-js_shared__"],t5=e5,Xc=t5,Cp=function(){var e=/[^.]+$/.exec(Xc&&Xc.keys&&Xc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function n5(e){return!!Cp&&Cp in e}var r5=n5,i5=Function.prototype,s5=i5.toString;function o5(e){if(e!=null){try{return s5.call(e)}catch{}try{return e+""}catch{}}return""}var w0=o5,a5=_0,l5=r5,c5=Qn,u5=w0,d5=/[\\^$.*+?()[\]{}|]/g,f5=/^\[object .+?Constructor\]$/,h5=Function.prototype,p5=Object.prototype,g5=h5.toString,m5=p5.hasOwnProperty,v5=RegExp("^"+g5.call(m5).replace(d5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function y5(e){if(!c5(e)||l5(e))return!1;var t=a5(e)?v5:f5;return t.test(u5(e))}var b5=y5;function _5(e,t){return e?.[t]}var w5=_5,x5=b5,$5=w5;function k5(e,t){var n=$5(e,t);return x5(n)?n:void 0}var wi=k5,C5=wi,S5=C5(Object,"create"),hl=S5,Sp=hl;function E5(){this.__data__=Sp?Sp(null):{},this.size=0}var T5=E5;function A5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var I5=A5,R5=hl,O5="__lodash_hash_undefined__",L5=Object.prototype,P5=L5.hasOwnProperty;function M5(e){var t=this.__data__;if(R5){var n=t[e];return n===O5?void 0:n}return P5.call(t,e)?t[e]:void 0}var B5=M5,U5=hl,j5=Object.prototype,D5=j5.hasOwnProperty;function N5(e){var t=this.__data__;return U5?t[e]!==void 0:D5.call(t,e)}var H5=N5,z5=hl,F5="__lodash_hash_undefined__";function W5(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=z5&&t===void 0?F5:t,this}var Z5=W5,q5=T5,K5=I5,G5=B5,V5=H5,Q5=Z5;function us(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}us.prototype.clear=q5;us.prototype.delete=K5;us.prototype.get=G5;us.prototype.has=V5;us.prototype.set=Q5;var X5=us;function Y5(){this.__data__=[],this.size=0}var J5=Y5;function e$(e,t){return e===t||e!==e&&t!==t}var Wu=e$,t$=Wu;function n$(e,t){for(var n=e.length;n--;)if(t$(e[n][0],t))return n;return-1}var pl=n$,r$=pl,i$=Array.prototype,s$=i$.splice;function o$(e){var t=this.__data__,n=r$(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():s$.call(t,n,1),--this.size,!0}var a$=o$,l$=pl;function c$(e){var t=this.__data__,n=l$(t,e);return n<0?void 0:t[n][1]}var u$=c$,d$=pl;function f$(e){return d$(this.__data__,e)>-1}var h$=f$,p$=pl;function g$(e,t){var n=this.__data__,i=p$(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var m$=g$,v$=J5,y$=a$,b$=u$,_$=h$,w$=m$;function ds(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ds.prototype.clear=v$;ds.prototype.delete=y$;ds.prototype.get=b$;ds.prototype.has=_$;ds.prototype.set=w$;var gl=ds,x$=wi,$$=jn,k$=x$($$,"Map"),Zu=k$,Ep=X5,C$=gl,S$=Zu;function E$(){this.size=0,this.__data__={hash:new Ep,map:new(S$||C$),string:new Ep}}var T$=E$;function A$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var I$=A$,R$=I$;function O$(e,t){var n=e.__data__;return R$(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ml=O$,L$=ml;function P$(e){var t=L$(this,e).delete(e);return this.size-=t?1:0,t}var M$=P$,B$=ml;function U$(e){return B$(this,e).get(e)}var j$=U$,D$=ml;function N$(e){return D$(this,e).has(e)}var H$=N$,z$=ml;function F$(e,t){var n=z$(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var W$=F$,Z$=T$,q$=M$,K$=j$,G$=H$,V$=W$;function fs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}fs.prototype.clear=Z$;fs.prototype.delete=q$;fs.prototype.get=K$;fs.prototype.has=G$;fs.prototype.set=V$;var qu=fs,Q$="__lodash_hash_undefined__";function X$(e){return this.__data__.set(e,Q$),this}var Y$=X$;function J$(e){return this.__data__.has(e)}var e6=J$,t6=qu,n6=Y$,r6=e6;function Da(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new t6;++t<n;)this.add(e[t])}Da.prototype.add=Da.prototype.push=n6;Da.prototype.has=r6;var x0=Da;function i6(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var s6=i6;function o6(e){return e!==e}var a6=o6;function l6(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var c6=l6,u6=s6,d6=a6,f6=c6;function h6(e,t,n){return t===t?f6(e,t,n):u6(e,d6,n)}var p6=h6,g6=p6;function m6(e,t){var n=e==null?0:e.length;return!!n&&g6(e,t,0)>-1}var v6=m6;function y6(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var b6=y6;function _6(e,t){return e.has(t)}var $0=_6,w6=wi,x6=jn,$6=w6(x6,"Set"),k0=$6;function k6(){}var C6=k6;function S6(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var Ku=S6,Yc=k0,E6=C6,T6=Ku,A6=1/0,I6=Yc&&1/T6(new Yc([,-0]))[1]==A6?function(e){return new Yc(e)}:E6,R6=I6,O6=x0,L6=v6,P6=b6,M6=$0,B6=R6,U6=Ku,j6=200;function D6(e,t,n){var i=-1,o=L6,a=e.length,c=!0,u=[],d=u;if(n)c=!1,o=P6;else if(a>=j6){var p=t?null:B6(e);if(p)return U6(p);c=!1,o=M6,d=new O6}else d=t?[]:u;e:for(;++i<a;){var h=e[i],m=t?t(h):h;if(h=n||h!==0?h:0,c&&m===m){for(var v=d.length;v--;)if(d[v]===m)continue e;t&&d.push(m),u.push(h)}else o(d,m,n)||(d!==u&&d.push(m),u.push(h))}return u}var C0=D6,N6=C0;function H6(e){return e&&e.length?N6(e):[]}var z6=H6;const Fr=mo(z6),F6=M('<div class="block shrink-0 overflow-hidden border-b p-1">'),Ra=e=>(()=>{const t=F6();return I(t,()=>e.children),t})(),W6={},Z6=Object.freeze(Object.defineProperty({__proto__:null,default:W6},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Ne=BigInt(0),ut=BigInt(1),Hr=BigInt(2),Ks=BigInt(3),Tp=BigInt(8),Xe=Object.freeze({a:Ne,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:ut,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),Ap=(e,t)=>(e+t/Hr)/t,ma={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=Xe,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-ut*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,c=BigInt("0x100000000000000000000000000000000"),u=Ap(a*e,t),d=Ap(-i*e,t);let p=Y(e-u*n-d*o,t),h=Y(-u*i-d*a,t);const m=p>c,v=h>c;if(m&&(p=t-p),v&&(h=t-h),p>c||h>c)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:m,k1:p,k2neg:v,k2:h}}},On=32,Gi=32,q6=32,Na=On+1,Ha=2*On+1;function Ip(e){const{a:t,b:n}=Xe,i=Y(e*e),o=Y(i*e);return Y(o+t*e+n)}const va=Xe.a===Ne;class Gu extends Error{constructor(t){super(t)}}function Rp(e){if(!(e instanceof Ke))throw new TypeError("JacobianPoint expected")}class Ke{constructor(t,n,i){this.x=t,this.y=n,this.z=i}static fromAffine(t){if(!(t instanceof He))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(He.ZERO)?Ke.ZERO:new Ke(t.x,t.y,ut)}static toAffineBatch(t){const n=X6(t.map(i=>i.z));return t.map((i,o)=>i.toAffine(n[o]))}static normalizeZ(t){return Ke.toAffineBatch(t).map(Ke.fromAffine)}equals(t){Rp(t);const{x:n,y:i,z:o}=this,{x:a,y:c,z:u}=t,d=Y(o*o),p=Y(u*u),h=Y(n*p),m=Y(a*d),v=Y(Y(i*u)*p),_=Y(Y(c*o)*d);return h===m&&v===_}negate(){return new Ke(this.x,Y(-this.y),this.z)}double(){const{x:t,y:n,z:i}=this,o=Y(t*t),a=Y(n*n),c=Y(a*a),u=t+a,d=Y(Hr*(Y(u*u)-o-c)),p=Y(Ks*o),h=Y(p*p),m=Y(h-Hr*d),v=Y(p*(d-m)-Tp*c),_=Y(Hr*n*i);return new Ke(m,v,_)}add(t){Rp(t);const{x:n,y:i,z:o}=this,{x:a,y:c,z:u}=t;if(a===Ne||c===Ne)return this;if(n===Ne||i===Ne)return t;const d=Y(o*o),p=Y(u*u),h=Y(n*p),m=Y(a*d),v=Y(Y(i*u)*p),_=Y(Y(c*o)*d),x=Y(m-h),E=Y(_-v);if(x===Ne)return E===Ne?this.double():Ke.ZERO;const k=Y(x*x),C=Y(x*k),P=Y(h*k),B=Y(E*E-C-Hr*P),R=Y(E*(P-B)-v*C),T=Y(o*u*x);return new Ke(B,R,T)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const n=Ke.ZERO;if(typeof t=="bigint"&&t===Ne)return n;let i=Pp(t);if(i===ut)return this;if(!va){let m=n,v=this;for(;i>Ne;)i&ut&&(m=m.add(v)),v=v.double(),i>>=ut;return m}let{k1neg:o,k1:a,k2neg:c,k2:u}=ma.splitScalar(i),d=n,p=n,h=this;for(;a>Ne||u>Ne;)a&ut&&(d=d.add(h)),u&ut&&(p=p.add(h)),h=h.double(),a>>=ut,u>>=ut;return o&&(d=d.negate()),c&&(p=p.negate()),p=new Ke(Y(p.x*ma.beta),p.y,p.z),d.add(p)}precomputeWindow(t){const n=va?128/t+1:256/t+1,i=[];let o=this,a=o;for(let c=0;c<n;c++){a=o,i.push(a);for(let u=1;u<2**(t-1);u++)a=a.add(o),i.push(a);o=a.double()}return i}wNAF(t,n){!n&&this.equals(Ke.BASE)&&(n=He.BASE);const i=n&&n._WINDOW_SIZE||1;if(256%i)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=n&&vu.get(n);o||(o=this.precomputeWindow(i),n&&i!==1&&(o=Ke.normalizeZ(o),vu.set(n,o)));let a=Ke.ZERO,c=Ke.BASE;const u=1+(va?128/i:256/i),d=2**(i-1),p=BigInt(2**i-1),h=2**i,m=BigInt(i);for(let v=0;v<u;v++){const _=v*d;let x=Number(t&p);t>>=m,x>d&&(x-=h,t+=ut);const E=_,k=_+Math.abs(x)-1,C=v%2!==0,P=x<0;x===0?c=c.add(ya(C,o[E])):a=a.add(ya(P,o[k]))}return{p:a,f:c}}multiply(t,n){let i=Pp(t),o,a;if(va){const{k1neg:c,k1:u,k2neg:d,k2:p}=ma.splitScalar(i);let{p:h,f:m}=this.wNAF(u,n),{p:v,f:_}=this.wNAF(p,n);h=ya(c,h),v=ya(d,v),v=new Ke(Y(v.x*ma.beta),v.y,v.z),o=h.add(v),a=m.add(_)}else{const{p:c,f:u}=this.wNAF(i,n);o=c,a=u}return Ke.normalizeZ([o,a])[0]}toAffine(t){const{x:n,y:i,z:o}=this,a=this.equals(Ke.ZERO);t==null&&(t=a?Tp:hs(o));const c=t,u=Y(c*c),d=Y(u*c),p=Y(n*u),h=Y(i*d),m=Y(o*c);if(a)return He.ZERO;if(m!==ut)throw new Error("invZ was invalid");return new He(p,h)}}Ke.BASE=new Ke(Xe.Gx,Xe.Gy,ut);Ke.ZERO=new Ke(Ne,ut,Ne);function ya(e,t){const n=t.negate();return e?n:t}const vu=new WeakMap;class He{constructor(t,n){this.x=t,this.y=n}_setWindowSize(t){this._WINDOW_SIZE=t,vu.delete(this)}hasEvenY(){return this.y%Hr===Ne}static fromCompressedHex(t){const n=t.length===32,i=cn(n?t:t.subarray(1));if(!Oa(i))throw new Error("Point is not on curve");const o=Ip(i);let a=Q6(o);const c=(a&ut)===ut;n?c&&(a=Y(-a)):(t[0]&1)===1!==c&&(a=Y(-a));const u=new He(i,a);return u.assertValidity(),u}static fromUncompressedHex(t){const n=cn(t.subarray(1,On+1)),i=cn(t.subarray(On+1,On*2+1)),o=new He(n,i);return o.assertValidity(),o}static fromHex(t){const n=qn(t),i=n.length,o=n[0];if(i===On)return this.fromCompressedHex(n);if(i===Na&&(o===2||o===3))return this.fromCompressedHex(n);if(i===Ha&&o===4)return this.fromUncompressedHex(n);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Na} compressed bytes or ${Ha} uncompressed bytes, not ${i}`)}static fromPrivateKey(t){return He.BASE.multiply(vi(t))}static fromSignature(t,n,i){const{r:o,s:a}=S0(n);if(![0,1,2,3].includes(i))throw new Error("Cannot recover: invalid recovery bit");const c=Vu(qn(t)),{n:u}=Xe,d=i===2||i===3?o+u:o,p=hs(d,u),h=Y(-c*p,u),m=Y(a*p,u),v=i&1?"03":"02",_=He.fromHex(v+Wr(d)),x=He.BASE.multiplyAndAddUnsafe(_,h,m);if(!x)throw new Error("Cannot recover signature: point at infinify");return x.assertValidity(),x}toRawBytes(t=!1){return Zr(this.toHex(t))}toHex(t=!1){const n=Wr(this.x);return t?`${this.hasEvenY()?"02":"03"}${n}`:`04${n}${Wr(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:n,y:i}=this;if(!Oa(n)||!Oa(i))throw new Error(t);const o=Y(i*i),a=Ip(n);if(Y(o-a)!==Ne)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new He(this.x,Y(-this.y))}double(){return Ke.fromAffine(this).double().toAffine()}add(t){return Ke.fromAffine(this).add(Ke.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return Ke.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,n,i){const o=Ke.fromAffine(this),a=n===Ne||n===ut||this!==He.BASE?o.multiplyUnsafe(n):o.multiply(n),c=Ke.fromAffine(t).multiplyUnsafe(i),u=a.add(c);return u.equals(Ke.ZERO)?void 0:u.toAffine()}}He.BASE=new He(Xe.Gx,Xe.Gy);He.ZERO=new He(Ne,Ne);function Op(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function Lp(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${Vi(e)}`);const t=e[1],n=e.subarray(2,t+2);if(!t||n.length!==t)throw new Error("Invalid signature integer: wrong length");if(n[0]===0&&n[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:cn(n),left:e.subarray(t+2)}}function K6(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${Vi(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:n}=Lp(e.subarray(2)),{data:i,left:o}=Lp(n);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${Vi(o)}`);return{r:t,s:i}}class gr{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromCompact(t){const n=t instanceof Uint8Array,i="Signature.fromCompact";if(typeof t!="string"&&!n)throw new TypeError(`${i}: Expected string or Uint8Array`);const o=n?Vi(t):t;if(o.length!==128)throw new Error(`${i}: Expected 64-byte hex`);return new gr(za(o.slice(0,64)),za(o.slice(64,128)))}static fromDER(t){const n=t instanceof Uint8Array;if(typeof t!="string"&&!n)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:i,s:o}=K6(n?t:Zr(t));return new gr(i,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:n}=this;if(!Xi(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!Xi(n))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=Xe.n>>ut;return this.s>t}normalizeS(){return this.hasHighS()?new gr(this.r,Y(-this.s,Xe.n)):this}toDERRawBytes(){return Zr(this.toDERHex())}toDERHex(){const t=Op(Ns(this.s)),n=Op(Ns(this.r)),i=t.length/2,o=n.length/2,a=Ns(i),c=Ns(o);return`30${Ns(o+i+4)}02${c}${n}02${a}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return Zr(this.toCompactHex())}toCompactHex(){return Wr(this.r)+Wr(this.s)}}function jr(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}const G6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Vi(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let n=0;n<e.length;n++)t+=G6[e[n]];return t}const V6=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function Wr(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(Ne<=e&&e<V6))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function Qi(e){const t=Zr(Wr(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function Ns(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function za(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function Zr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}function cn(e){return za(Vi(e))}function qn(e){return e instanceof Uint8Array?Uint8Array.from(e):Zr(e)}function Pp(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&Xi(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function Y(e,t=Xe.P){const n=e%t;return n>=Ne?n:t+n}function wn(e,t){const{P:n}=Xe;let i=e;for(;t-- >Ne;)i*=i,i%=n;return i}function Q6(e){const{P:t}=Xe,n=BigInt(6),i=BigInt(11),o=BigInt(22),a=BigInt(23),c=BigInt(44),u=BigInt(88),d=e*e*e%t,p=d*d*e%t,h=wn(p,Ks)*p%t,m=wn(h,Ks)*p%t,v=wn(m,Hr)*d%t,_=wn(v,i)*v%t,x=wn(_,o)*_%t,E=wn(x,c)*x%t,k=wn(E,u)*E%t,C=wn(k,c)*x%t,P=wn(C,Ks)*p%t,B=wn(P,a)*_%t,R=wn(B,n)*d%t,T=wn(R,Hr);if(T*T%t!==e)throw new Error("Cannot find square root");return T}function hs(e,t=Xe.P){if(e===Ne||t<=Ne)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=Y(e,t),i=t,o=Ne,a=ut;for(;n!==Ne;){const u=i/n,d=i%n,p=o-a*u;i=n,n=d,o=a,a=p}if(i!==ut)throw new Error("invert: does not exist");return Y(o,t)}function X6(e,t=Xe.P){const n=new Array(e.length),i=e.reduce((a,c,u)=>c===Ne?a:(n[u]=a,Y(a*c,t)),ut),o=hs(i,t);return e.reduceRight((a,c,u)=>c===Ne?a:(n[u]=Y(a*n[u],t),Y(a*c,t)),o),n}function Y6(e){const t=e.length*8-Gi*8,n=cn(e);return t>0?n>>BigInt(t):n}function Vu(e,t=!1){const n=Y6(e);if(t)return n;const{n:i}=Xe;return n>=i?n-i:n}let Fi,Gs;class J6{constructor(t,n){if(this.hashLen=t,this.qByteLen=n,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof n!="number"||n<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return Ie.hmacSha256(this.k,...t)}hmacSync(...t){return Gs(this.k,...t)}checkSync(){if(typeof Gs!="function")throw new Gu("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const i=this.v.slice();n.push(i),t+=this.v.length}return jr(...n)}generateSync(){this.checkSync(),this.incr();let t=0;const n=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const i=this.v.slice();n.push(i),t+=this.v.length}return jr(...n)}}function Xi(e){return Ne<e&&e<Xe.n}function Oa(e){return Ne<e&&e<Xe.P}function e8(e,t,n,i=!0){const{n:o}=Xe,a=Vu(e,!0);if(!Xi(a))return;const c=hs(a,o),u=He.BASE.multiply(a),d=Y(u.x,o);if(d===Ne)return;const p=Y(c*Y(t+n*d,o),o);if(p===Ne)return;let h=new gr(d,p),m=(u.x===h.r?0:2)|Number(u.y&ut);return i&&h.hasHighS()&&(h=h.normalizeS(),m^=1),{sig:h,recovery:m}}function vi(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*Gi)throw new Error("Expected 32 bytes of private key");t=za(e)}else if(e instanceof Uint8Array){if(e.length!==Gi)throw new Error("Expected 32 bytes of private key");t=cn(e)}else throw new TypeError("Expected valid private key");if(!Xi(t))throw new Error("Expected private key: 0 < key < n");return t}function Qu(e){return e instanceof He?(e.assertValidity(),e):He.fromHex(e)}function S0(e){if(e instanceof gr)return e.assertValidity(),e;try{return gr.fromDER(e)}catch{return gr.fromCompact(e)}}function t8(e,t=!1){return He.fromPrivateKey(e).toRawBytes(t)}function Mp(e){const t=e instanceof Uint8Array,n=typeof e=="string",i=(t||n)&&e.length;return t?i===Na||i===Ha:n?i===Na*2||i===Ha*2:e instanceof He}function E0(e,t,n=!1){if(Mp(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Mp(t))throw new TypeError("getSharedSecret: second arg must be public key");const i=Qu(t);return i.assertValidity(),i.multiply(vi(e)).toRawBytes(n)}function T0(e){const t=e.length>On?e.slice(0,On):e;return cn(t)}function n8(e){const t=T0(e),n=Y(t,Xe.n);return A0(n<Ne?t:n)}function A0(e){return Qi(e)}function r8(e,t,n){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const i=qn(e),o=vi(t),a=[A0(o),n8(i)];if(n!=null){n===!0&&(n=Ie.randomBytes(On));const d=qn(n);if(d.length!==On)throw new Error(`sign: Expected ${On} bytes of extra data`);a.push(d)}const c=jr(...a),u=T0(i);return{seed:c,m:u,d:o}}function i8(e,t){const{sig:n,recovery:i}=e,{der:o,recovered:a}=Object.assign({canonical:!0,der:!0},t),c=o?n.toDERRawBytes():n.toCompactRawBytes();return a?[c,i]:c}function s8(e,t,n={}){const{seed:i,m:o,d:a}=r8(e,t,n.extraEntropy),c=new J6(q6,Gi);c.reseedSync(i);let u;for(;!(u=e8(c.generateSync(),o,a,n.canonical));)c.reseedSync();return i8(u,n)}const o8={strict:!0};function a8(e,t,n,i=o8){let o;try{o=S0(e),t=qn(t)}catch{return!1}const{r:a,s:c}=o;if(i.strict&&o.hasHighS())return!1;const u=Vu(t);let d;try{d=Qu(n)}catch{return!1}const{n:p}=Xe,h=hs(c,p),m=Y(u*h,p),v=Y(a*h,p),_=He.BASE.multiplyAndAddUnsafe(d,m,v);return _?Y(_.x,p)===a:!1}function Fa(e){return Y(cn(e),Xe.n)}class Yi{constructor(t,n){this.r=t,this.s=n,this.assertValidity()}static fromHex(t){const n=qn(t);if(n.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${n.length}`);const i=cn(n.subarray(0,32)),o=cn(n.subarray(32,64));return new Yi(i,o)}assertValidity(){const{r:t,s:n}=this;if(!Oa(t)||!Xi(n))throw new Error("Invalid signature")}toHex(){return Wr(this.r)+Wr(this.s)}toRawBytes(){return Zr(this.toHex())}}function l8(e){return He.fromPrivateKey(e).toRawX()}class I0{constructor(t,n,i=Ie.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=qn(t);const{x:o,scalar:a}=this.getScalar(vi(n));if(this.px=o,this.d=a,this.rand=qn(i),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const n=He.fromPrivateKey(t),i=n.hasEvenY()?t:Xe.n-t;return{point:n,scalar:i,x:n.toRawX()}}initNonce(t,n){return Qi(t^cn(n))}finalizeNonce(t){const n=Y(cn(t),Xe.n);if(n===Ne)throw new Error("sign: Creation of signature failed. k is zero");const{point:i,x:o,scalar:a}=this.getScalar(n);return{R:i,rx:o,k:a}}finalizeSig(t,n,i,o){return new Yi(t.x,Y(n+i*o,Xe.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:n,px:i,rand:o}=this,a=Ie.taggedHash,c=this.initNonce(n,await a(Ur.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(await a(Ur.nonce,c,i,t)),h=Fa(await a(Ur.challenge,d,i,t)),m=this.finalizeSig(u,p,h,n);return await L0(m,t,i)||this.error(),m}calcSync(){const{m:t,d:n,px:i,rand:o}=this,a=Ie.taggedHashSync,c=this.initNonce(n,a(Ur.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(a(Ur.nonce,c,i,t)),h=Fa(a(Ur.challenge,d,i,t)),m=this.finalizeSig(u,p,h,n);return P0(m,t,i)||this.error(),m}}async function c8(e,t,n){return new I0(e,t,n).calc()}function u8(e,t,n){return new I0(e,t,n).calcSync()}function R0(e,t,n){const i=e instanceof Yi,o=i?e:Yi.fromHex(e);return i&&o.assertValidity(),{...o,m:qn(t),P:Qu(n)}}function O0(e,t,n,i){const o=He.BASE.multiplyAndAddUnsafe(t,vi(n),Y(-i,Xe.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function L0(e,t,n){try{const{r:i,s:o,m:a,P:c}=R0(e,t,n),u=Fa(await Ie.taggedHash(Ur.challenge,Qi(i),c.toRawX(),a));return O0(i,c,o,u)}catch{return!1}}function P0(e,t,n){try{const{r:i,s:o,m:a,P:c}=R0(e,t,n),u=Fa(Ie.taggedHashSync(Ur.challenge,Qi(i),c.toRawX(),a));return O0(i,c,o,u)}catch(i){if(i instanceof Gu)throw i;return!1}}const vl={Signature:Yi,getPublicKey:l8,sign:c8,verify:L0,signSync:u8,verifySync:P0};He.BASE._setWindowSize(8);const sn={node:Z6,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Ur={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},ba={},Ie={bytesToHex:Vi,hexToBytes:Zr,concatBytes:jr,mod:Y,invert:hs,isValidPrivateKey(e){try{return vi(e),!0}catch{return!1}},_bigintTo32Bytes:Qi,_normalizePrivateKey:vi,hashToPrivateKey:e=>{e=qn(e);const t=Gi+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const n=Y(cn(e),Xe.n-ut)+ut;return Qi(n)},randomBytes:(e=32)=>{if(sn.web)return sn.web.getRandomValues(new Uint8Array(e));if(sn.node){const{randomBytes:t}=sn.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>Ie.hashToPrivateKey(Ie.randomBytes(Gi+8)),precompute(e=8,t=He.BASE){const n=t===He.BASE?t:new He(t.x,t.y);return n._setWindowSize(e),n.multiply(Ks),n},sha256:async(...e)=>{if(sn.web){const t=await sn.web.subtle.digest("SHA-256",jr(...e));return new Uint8Array(t)}else if(sn.node){const{createHash:t}=sn.node,n=t("sha256");return e.forEach(i=>n.update(i)),Uint8Array.from(n.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(sn.web){const n=await sn.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),i=jr(...t),o=await sn.web.subtle.sign("HMAC",n,i);return new Uint8Array(o)}else if(sn.node){const{createHmac:n}=sn.node,i=n("sha256",e);return t.forEach(o=>i.update(o)),Uint8Array.from(i.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let n=ba[e];if(n===void 0){const i=await Ie.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));n=jr(i,i),ba[e]=n}return Ie.sha256(n,...t)},taggedHashSync:(e,...t)=>{if(typeof Fi!="function")throw new Gu("sha256Sync is undefined, you need to set it");let n=ba[e];if(n===void 0){const i=Fi(Uint8Array.from(e,o=>o.charCodeAt(0)));n=jr(i,i),ba[e]=n}return Fi(n,...t)},_JacobianPoint:Ke};Object.defineProperties(Ie,{sha256Sync:{configurable:!1,get(){return Fi},set(e){Fi||(Fi=e)}},hmacSha256Sync:{configurable:!1,get(){return Gs},set(e){Gs||(Gs=e)}}});function yu(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function d8(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function M0(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function f8(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");yu(e.outputLen),yu(e.blockLen)}function h8(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function p8(e,t){M0(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const hi={number:yu,bool:d8,bytes:M0,hash:f8,exists:h8,output:p8},Ws={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},g8=Object.freeze(Object.defineProperty({__proto__:null,crypto:Ws},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const m8=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),v8=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),In=(e,t)=>e<<32-t|e>>>t,B0=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!B0)throw new Error("Non little-endian hardware is not supported");const y8=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function U0(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=y8[e[n]];return t}function j0(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const D0=async()=>{};async function b8(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await D0(),i+=a)}}function Xu(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function yo(e){if(typeof e=="string"&&(e=Xu(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function Zs(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class Yu{clone(){return this._cloneInto()}}const _8=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function w8(e,t){if(t!==void 0&&(typeof t!="object"||!_8(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function yl(e){const t=i=>e().update(yo(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function x8(e){const t=(i,o)=>e(o).update(yo(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function N0(e=32){if(Ws.web)return Ws.web.getRandomValues(new Uint8Array(e));if(Ws.node)return new Uint8Array(Ws.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}const $8=Object.freeze(Object.defineProperty({__proto__:null,Hash:Yu,asyncLoop:b8,bytesToHex:U0,checkOpts:w8,concatBytes:Zs,createView:gi,hexToBytes:j0,isLE:B0,nextTick:D0,randomBytes:N0,rotr:In,toBytes:yo,u32:v8,u8:m8,utf8ToBytes:Xu,wrapConstructor:yl,wrapConstructorWithOpts:x8},Symbol.toStringTag,{value:"Module"}));function k8(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,p=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+p,u,i)}let H0=class extends Yu{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){hi.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=yo(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=gi(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){hi.exists(this),hi.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let m=c;m<o;m++)n[m]=0;k8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<p;m++)u.setUint32(4*m,h[m],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}};const C8=(e,t,n)=>e&t^~e&n,S8=(e,t,n)=>e&t^e&n^t&n,E8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Lr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Pr=new Uint32Array(64);class z0 extends H0{constructor(){super(64,32,8,!1),this.A=Lr[0]|0,this.B=Lr[1]|0,this.C=Lr[2]|0,this.D=Lr[3]|0,this.E=Lr[4]|0,this.F=Lr[5]|0,this.G=Lr[6]|0,this.H=Lr[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:c,G:u,H:d}=this;return[t,n,i,o,a,c,u,d]}set(t,n,i,o,a,c,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=c|0,this.G=u|0,this.H=d|0}process(t,n){for(let m=0;m<16;m++,n+=4)Pr[m]=t.getUint32(n,!1);for(let m=16;m<64;m++){const v=Pr[m-15],_=Pr[m-2],x=In(v,7)^In(v,18)^v>>>3,E=In(_,17)^In(_,19)^_>>>10;Pr[m]=E+Pr[m-7]+x+Pr[m-16]|0}let{A:i,B:o,C:a,D:c,E:u,F:d,G:p,H:h}=this;for(let m=0;m<64;m++){const v=In(u,6)^In(u,11)^In(u,25),_=h+v+C8(u,d,p)+E8[m]+Pr[m]|0,E=(In(i,2)^In(i,13)^In(i,22))+S8(i,o,a)|0;h=p,p=d,d=u,u=c+_|0,c=a,a=o,o=i,i=_+E|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,c=c+this.D|0,u=u+this.E|0,d=d+this.F|0,p=p+this.G|0,h=h+this.H|0,this.set(i,o,a,c,u,d,p,h)}roundClean(){Pr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class T8 extends z0{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const yr=yl(()=>new z0),A8=yl(()=>new T8),I8=Object.freeze(Object.defineProperty({__proto__:null,sha224:A8,sha256:yr},Symbol.toStringTag,{value:"Module"}));/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Yr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Dn(...e){const t=(o,a)=>c=>o(a(c)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Xn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Yr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Yn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function bo(e,t="="){if(Yr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function F0(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Bp(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(c=>{if(Yr(c),c<0||c>=t)throw new Error(`Wrong integer: ${c}`)});;){let c=0,u=!0;for(let d=i;d<a.length;d++){const p=a[d],h=t*c+p;if(!Number.isSafeInteger(h)||t*c/t!==c||h-p!==t*c)throw new Error("convertRadix: carry overflow");if(c=h%n,a[d]=Math.floor(h/n),!Number.isSafeInteger(a[d])||a[d]*n+c!==h)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(c),u)break}for(let c=0;c<e.length-1&&e[c]===0;c++)o.push(0);return o.reverse()}const W0=(e,t)=>t?W0(t,e%t):e,Wa=(e,t)=>e+(t-W0(e,t));function bu(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Wa(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Wa(t,n)}`);let o=0,a=0;const c=2**n-1,u=[];for(const d of e){if(Yr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&c)>>>0);o&=2**a-1}if(o=o<<n-a&c,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function Z0(e){return Yr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Bp(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Bp(t,e,2**8))}}}function br(e,t=!1){if(Yr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Wa(8,e)>32||Wa(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return bu(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(bu(n,e,8,t))}}}function Up(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function q0(e,t){if(Yr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let c=0;c<e;c++)if(o[c]!==a[c])throw new Error("Invalid checksum");return i}}}const R8={alphabet:Xn,chain:Dn,checksum:q0,radix:Z0,radix2:br,join:Yn,padding:bo},K0=Dn(br(4),Xn("0123456789ABCDEF"),Yn("")),G0=Dn(br(5),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),bo(5),Yn("")),O8=Dn(br(5),Xn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),bo(5),Yn("")),L8=Dn(br(5),Xn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Yn(""),F0(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),Ji=Dn(br(6),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),bo(6),Yn("")),V0=Dn(br(6),Xn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),bo(6),Yn("")),Ju=e=>Dn(Z0(58),Xn(e),Yn("")),Js=Ju("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),P8=Ju("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),M8=Ju("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),jp=[0,2,3,5,6,7,9,10,11],Q0={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Js.encode(i).padStart(jp[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=jp.indexOf(i.length),a=Js.decode(i);for(let c=0;c<a.length-o;c++)if(a[c]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},X0=e=>Dn(q0(4,t=>e(e(t))),Js),_u=Dn(Xn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Yn("")),Dp=[996825010,642813549,513874426,1027748829,705979059];function Hs(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<Dp.length;i++)(t>>i&1)===1&&(n^=Dp[i]);return n}function Np(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const c=e.charCodeAt(a);if(c<33||c>126)throw new Error(`Invalid prefix (${e})`);o=Hs(o)^c>>5}o=Hs(o);for(let a=0;a<i;a++)o=Hs(o)^e.charCodeAt(a)&31;for(let a of t)o=Hs(o)^a;for(let a=0;a<6;a++)o=Hs(o);return o^=n,_u.encode(bu([o%2**30],30,5,!1))}function Y0(e){const t=e==="bech32"?1:734539939,n=br(5),i=n.decode,o=n.encode,a=Up(i);function c(h,m,v=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(m)||m.length&&typeof m[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof m}`);const _=h.length+7+m.length;if(v!==!1&&_>v)throw new TypeError(`Length ${_} exceeds limit ${v}`);return h=h.toLowerCase(),`${h}1${_u.encode(m)}${Np(h,m,t)}`}function u(h,m=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||m!==!1&&h.length>m)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${m})`);const v=h.toLowerCase();if(h!==v&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=v;const _=h.lastIndexOf("1");if(_===0||_===-1)throw new Error('Letter "1" must be present between prefix and data only');const x=h.slice(0,_),E=h.slice(_+1);if(E.length<6)throw new Error("Data must be at least 6 characters long");const k=_u.decode(E).slice(0,-6),C=Np(x,k,t);if(!E.endsWith(C))throw new Error(`Invalid checksum in ${h}: expected "${C}"`);return{prefix:x,words:k}}const d=Up(u);function p(h){const{prefix:m,words:v}=u(h,!1);return{prefix:m,words:v,bytes:i(v)}}return{encode:c,decode:u,decodeToBytes:p,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const zt=Y0("bech32"),B8=Y0("bech32m"),J0={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},e1=Dn(br(4),Xn("0123456789abcdef"),Yn(""),F0(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),eo={utf8:J0,hex:e1,base16:K0,base32:G0,base64:Ji,base64url:V0,base58:Js,base58xmr:Q0},t1=`Invalid encoding type. Available types: ${Object.keys(eo).join(", ")}`,n1=(e,t)=>{if(typeof e!="string"||!eo.hasOwnProperty(e))throw new TypeError(t1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return eo[e].encode(t)},U8=n1,r1=(e,t)=>{if(!eo.hasOwnProperty(e))throw new TypeError(t1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return eo[e].decode(t)},j8=r1,D8=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Yr,base16:K0,base32:G0,base32crockford:L8,base32hex:O8,base58:Js,base58check:X0,base58flickr:P8,base58xmr:Q0,base58xrp:M8,base64:Ji,base64url:V0,bech32:zt,bech32m:B8,bytes:j8,bytesToString:n1,hex:e1,str:U8,stringToBytes:r1,utf8:J0,utils:R8},Symbol.toStringTag,{value:"Module"}));var ed={};Object.defineProperty(ed,"__esModule",{value:!0});var td=ed.wordlist=void 0;td=ed.wordlist=`abandon
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
`);var an={},Et={};Object.defineProperty(Et,"__esModule",{value:!0});Et.output=Et.exists=Et.hash=Hi=Et.bytes=Et.bool=Et.number=void 0;function Za(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}Et.number=Za;function i1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}Et.bool=i1;function nd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Hi=Et.bytes=nd;function s1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Za(e.outputLen),Za(e.blockLen)}Et.hash=s1;function o1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}Et.exists=o1;function a1(e,t){nd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Et.output=a1;const N8={number:Za,bool:i1,bytes:nd,hash:s1,exists:o1,output:a1};Et.default=N8;var es={},l1={},_o={};const H8=fl(g8);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=H8,n=R=>new Uint8Array(R.buffer,R.byteOffset,R.byteLength);e.u8=n;const i=R=>new Uint32Array(R.buffer,R.byteOffset,Math.floor(R.byteLength/4));e.u32=i;const o=R=>new DataView(R.buffer,R.byteOffset,R.byteLength);e.createView=o;const a=(R,T)=>R<<32-T|R>>>T;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},(R,T)=>T.toString(16).padStart(2,"0"));function u(R){if(!(R instanceof Uint8Array))throw new Error("Uint8Array expected");let T="";for(let L=0;L<R.length;L++)T+=c[R[L]];return T}e.bytesToHex=u;function d(R){if(typeof R!="string")throw new TypeError("hexToBytes: expected string, got "+typeof R);if(R.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const T=new Uint8Array(R.length/2);for(let L=0;L<T.length;L++){const H=L*2,W=R.slice(H,H+2),se=Number.parseInt(W,16);if(Number.isNaN(se)||se<0)throw new Error("Invalid byte sequence");T[L]=se}return T}e.hexToBytes=d;const p=async()=>{};e.nextTick=p;async function h(R,T,L){let H=Date.now();for(let W=0;W<R;W++){L(W);const se=Date.now()-H;se>=0&&se<T||(await(0,e.nextTick)(),H+=se)}}e.asyncLoop=h;function m(R){if(typeof R!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof R}`);return new TextEncoder().encode(R)}e.utf8ToBytes=m;function v(R){if(typeof R=="string"&&(R=m(R)),!(R instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof R})`);return R}e.toBytes=v;function _(...R){if(!R.every(H=>H instanceof Uint8Array))throw new Error("Uint8Array list expected");if(R.length===1)return R[0];const T=R.reduce((H,W)=>H+W.length,0),L=new Uint8Array(T);for(let H=0,W=0;H<R.length;H++){const se=R[H];L.set(se,W),W+=se.length}return L}e.concatBytes=_;class x{clone(){return this._cloneInto()}}e.Hash=x;const E=R=>Object.prototype.toString.call(R)==="[object Object]"&&R.constructor===Object;function k(R,T){if(T!==void 0&&(typeof T!="object"||!E(T)))throw new TypeError("Options should be object or undefined");return Object.assign(R,T)}e.checkOpts=k;function C(R){const T=H=>R().update(v(H)).digest(),L=R();return T.outputLen=L.outputLen,T.blockLen=L.blockLen,T.create=()=>R(),T}e.wrapConstructor=C;function P(R){const T=(H,W)=>R(W).update(v(H)).digest(),L=R({});return T.outputLen=L.outputLen,T.blockLen=L.blockLen,T.create=H=>R(H),T}e.wrapConstructorWithOpts=P;function B(R=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(R));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(R).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=B})(_o);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=Et,n=_o;class i extends n.Hash{constructor(c,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(c);const d=(0,n.toBytes)(u);if(this.iHash=c.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const p=this.blockLen,h=new Uint8Array(p);h.set(d.length>p?c.create().update(d).digest():d);for(let m=0;m<h.length;m++)h[m]^=54;this.iHash.update(h),this.oHash=c.create();for(let m=0;m<h.length;m++)h[m]^=106;this.oHash.update(h),h.fill(0)}update(c){return t.default.exists(this),this.iHash.update(c),this}digestInto(c){t.default.exists(this),t.default.bytes(c,this.outputLen),this.finished=!0,this.iHash.digestInto(c),this.oHash.update(c),this.oHash.digestInto(c),this.destroy()}digest(){const c=new Uint8Array(this.oHash.outputLen);return this.digestInto(c),c}_cloneInto(c){c||(c=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:p,destroyed:h,blockLen:m,outputLen:v}=this;return c=c,c.finished=p,c.destroyed=h,c.blockLen=m,c.outputLen=v,c.oHash=u._cloneInto(c.oHash),c.iHash=d._cloneInto(c.iHash),c}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,c,u)=>new i(a,c).update(u).digest();e.hmac=o,e.hmac.create=(a,c)=>new i(a,c)})(l1);Object.defineProperty(es,"__esModule",{value:!0});es.pbkdf2Async=es.pbkdf2=void 0;const _a=Et,z8=l1,Wi=_o;function c1(e,t,n,i){_a.default.hash(e);const o=(0,Wi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:c,asyncTick:u}=o;if(_a.default.number(a),_a.default.number(c),_a.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Wi.toBytes)(t),p=(0,Wi.toBytes)(n),h=new Uint8Array(c),m=z8.hmac.create(e,d),v=m._cloneInto().update(p);return{c:a,dkLen:c,asyncTick:u,DK:h,PRF:m,PRFSalt:v}}function u1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function F8(e,t,n,i){const{c:o,dkLen:a,DK:c,PRF:u,PRFSalt:d}=c1(e,t,n,i);let p;const h=new Uint8Array(4),m=(0,Wi.createView)(h),v=new Uint8Array(u.outputLen);for(let _=1,x=0;x<a;_++,x+=u.outputLen){const E=c.subarray(x,x+u.outputLen);m.setInt32(0,_,!1),(p=d._cloneInto(p)).update(h).digestInto(v),E.set(v.subarray(0,E.length));for(let k=1;k<o;k++){u._cloneInto(p).update(v).digestInto(v);for(let C=0;C<E.length;C++)E[C]^=v[C]}}return u1(u,d,c,p,v)}es.pbkdf2=F8;async function W8(e,t,n,i){const{c:o,dkLen:a,asyncTick:c,DK:u,PRF:d,PRFSalt:p}=c1(e,t,n,i);let h;const m=new Uint8Array(4),v=(0,Wi.createView)(m),_=new Uint8Array(d.outputLen);for(let x=1,E=0;E<a;x++,E+=d.outputLen){const k=u.subarray(E,E+d.outputLen);v.setInt32(0,x,!1),(h=p._cloneInto(h)).update(m).digestInto(_),k.set(_.subarray(0,k.length)),await(0,Wi.asyncLoop)(o-1,c,C=>{d._cloneInto(h).update(_).digestInto(_);for(let P=0;P<k.length;P++)k[P]^=_[P]})}return u1(d,p,u,h,_)}es.pbkdf2Async=W8;const Z8=fl(I8);var xn={},bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.SHA2=void 0;const Jc=Et,zs=_o;function q8(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),c=Number(n>>o&a),u=Number(n&a),d=i?4:0,p=i?0:4;e.setUint32(t+d,c,i),e.setUint32(t+p,u,i)}class K8 extends zs.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,zs.createView)(this.buffer)}update(t){Jc.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,zs.toBytes)(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=(0,zs.createView)(t);for(;o<=a-c;c+=o)this.process(d,c);continue}i.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Jc.default.exists(this),Jc.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:c}=this;n[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(i,0),c=0);for(let m=c;m<o;m++)n[m]=0;q8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,zs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let m=0;m<p;m++)u.setUint32(4*m,h[m],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%n&&t.buffer.set(i),t}}bl.SHA2=K8;var d1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(V,re=!1){return re?{h:Number(V&t),l:Number(V>>n&t)}:{h:Number(V>>n&t)|0,l:Number(V&t)|0}}e.fromBig=i;function o(V,re=!1){let Z=new Uint32Array(V.length),X=new Uint32Array(V.length);for(let oe=0;oe<V.length;oe++){const{h:Ze,l:J}=i(V[oe],re);[Z[oe],X[oe]]=[Ze,J]}return[Z,X]}e.split=o;const a=(V,re)=>BigInt(V>>>0)<<n|BigInt(re>>>0);e.toBig=a;const c=(V,re,Z)=>V>>>Z,u=(V,re,Z)=>V<<32-Z|re>>>Z,d=(V,re,Z)=>V>>>Z|re<<32-Z,p=(V,re,Z)=>V<<32-Z|re>>>Z,h=(V,re,Z)=>V<<64-Z|re>>>Z-32,m=(V,re,Z)=>V>>>Z-32|re<<64-Z,v=(V,re)=>re,_=(V,re)=>V,x=(V,re,Z)=>V<<Z|re>>>32-Z,E=(V,re,Z)=>re<<Z|V>>>32-Z,k=(V,re,Z)=>re<<Z-32|V>>>64-Z,C=(V,re,Z)=>V<<Z-32|re>>>64-Z;function P(V,re,Z,X){const oe=(re>>>0)+(X>>>0);return{h:V+Z+(oe/2**32|0)|0,l:oe|0}}e.add=P;const B=(V,re,Z)=>(V>>>0)+(re>>>0)+(Z>>>0),R=(V,re,Z,X)=>re+Z+X+(V/2**32|0)|0,T=(V,re,Z,X)=>(V>>>0)+(re>>>0)+(Z>>>0)+(X>>>0),L=(V,re,Z,X,oe)=>re+Z+X+oe+(V/2**32|0)|0,H=(V,re,Z,X,oe)=>(V>>>0)+(re>>>0)+(Z>>>0)+(X>>>0)+(oe>>>0),W=(V,re,Z,X,oe,Ze)=>re+Z+X+oe+Ze+(V/2**32|0)|0,se={fromBig:i,split:o,toBig:e.toBig,shrSH:c,shrSL:u,rotrSH:d,rotrSL:p,rotrBH:h,rotrBL:m,rotr32H:v,rotr32L:_,rotlSH:x,rotlSL:E,rotlBH:k,rotlBL:C,add:P,add3L:B,add3H:R,add4L:T,add4H:L,add5H:W,add5L:H};e.default=se})(d1);Object.defineProperty(xn,"__esModule",{value:!0});xn.sha384=xn.sha512_256=xn.sha512_224=wu=xn.sha512=xn.SHA512=void 0;const G8=bl,Te=d1,_l=_o,[V8,Q8]=Te.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Mr=new Uint32Array(80),Br=new Uint32Array(80);class wo extends G8.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:c,Dh:u,Dl:d,Eh:p,El:h,Fh:m,Fl:v,Gh:_,Gl:x,Hh:E,Hl:k}=this;return[t,n,i,o,a,c,u,d,p,h,m,v,_,x,E,k]}set(t,n,i,o,a,c,u,d,p,h,m,v,_,x,E,k){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=c|0,this.Dh=u|0,this.Dl=d|0,this.Eh=p|0,this.El=h|0,this.Fh=m|0,this.Fl=v|0,this.Gh=_|0,this.Gl=x|0,this.Hh=E|0,this.Hl=k|0}process(t,n){for(let B=0;B<16;B++,n+=4)Mr[B]=t.getUint32(n),Br[B]=t.getUint32(n+=4);for(let B=16;B<80;B++){const R=Mr[B-15]|0,T=Br[B-15]|0,L=Te.default.rotrSH(R,T,1)^Te.default.rotrSH(R,T,8)^Te.default.shrSH(R,T,7),H=Te.default.rotrSL(R,T,1)^Te.default.rotrSL(R,T,8)^Te.default.shrSL(R,T,7),W=Mr[B-2]|0,se=Br[B-2]|0,V=Te.default.rotrSH(W,se,19)^Te.default.rotrBH(W,se,61)^Te.default.shrSH(W,se,6),re=Te.default.rotrSL(W,se,19)^Te.default.rotrBL(W,se,61)^Te.default.shrSL(W,se,6),Z=Te.default.add4L(H,re,Br[B-7],Br[B-16]),X=Te.default.add4H(Z,L,V,Mr[B-7],Mr[B-16]);Mr[B]=X|0,Br[B]=Z|0}let{Ah:i,Al:o,Bh:a,Bl:c,Ch:u,Cl:d,Dh:p,Dl:h,Eh:m,El:v,Fh:_,Fl:x,Gh:E,Gl:k,Hh:C,Hl:P}=this;for(let B=0;B<80;B++){const R=Te.default.rotrSH(m,v,14)^Te.default.rotrSH(m,v,18)^Te.default.rotrBH(m,v,41),T=Te.default.rotrSL(m,v,14)^Te.default.rotrSL(m,v,18)^Te.default.rotrBL(m,v,41),L=m&_^~m&E,H=v&x^~v&k,W=Te.default.add5L(P,T,H,Q8[B],Br[B]),se=Te.default.add5H(W,C,R,L,V8[B],Mr[B]),V=W|0,re=Te.default.rotrSH(i,o,28)^Te.default.rotrBH(i,o,34)^Te.default.rotrBH(i,o,39),Z=Te.default.rotrSL(i,o,28)^Te.default.rotrBL(i,o,34)^Te.default.rotrBL(i,o,39),X=i&a^i&u^a&u,oe=o&c^o&d^c&d;C=E|0,P=k|0,E=_|0,k=x|0,_=m|0,x=v|0,{h:m,l:v}=Te.default.add(p|0,h|0,se|0,V|0),p=u|0,h=d|0,u=a|0,d=c|0,a=i|0,c=o|0;const Ze=Te.default.add3L(V,Z,oe);i=Te.default.add3H(Ze,se,re,X),o=Ze|0}({h:i,l:o}=Te.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l:c}=Te.default.add(this.Bh|0,this.Bl|0,a|0,c|0),{h:u,l:d}=Te.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:p,l:h}=Te.default.add(this.Dh|0,this.Dl|0,p|0,h|0),{h:m,l:v}=Te.default.add(this.Eh|0,this.El|0,m|0,v|0),{h:_,l:x}=Te.default.add(this.Fh|0,this.Fl|0,_|0,x|0),{h:E,l:k}=Te.default.add(this.Gh|0,this.Gl|0,E|0,k|0),{h:C,l:P}=Te.default.add(this.Hh|0,this.Hl|0,C|0,P|0),this.set(i,o,a,c,u,d,p,h,m,v,_,x,E,k,C,P)}roundClean(){Mr.fill(0),Br.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}xn.SHA512=wo;class X8 extends wo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class Y8 extends wo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class J8 extends wo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var wu=xn.sha512=(0,_l.wrapConstructor)(()=>new wo);xn.sha512_224=(0,_l.wrapConstructor)(()=>new X8);xn.sha512_256=(0,_l.wrapConstructor)(()=>new Y8);xn.sha384=(0,_l.wrapConstructor)(()=>new J8);const e7=fl($8),t7=fl(D8);Object.defineProperty(an,"__esModule",{value:!0});var f1=an.mnemonicToSeedSync=an.mnemonicToSeed=x1=an.validateMnemonic=an.entropyToMnemonic=an.mnemonicToEntropy=y1=an.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const h1=Et,p1=es,n7=Z8,g1=xn,r7=e7,wa=t7,i7=e=>e[0]==="あいこくしん";function m1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function rd(e){const t=m1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function v1(e){h1.default.bytes(e,16,20,24,28,32)}function s7(e,t=128){if(h1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return w1((0,r7.randomBytes)(t/8),e)}var y1=an.generateMnemonic=s7;const o7=e=>{const t=8-e.length/4;return new Uint8Array([(0,n7.sha256)(e)[0]>>t<<t])};function b1(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),wa.utils.chain(wa.utils.checksum(1,o7),wa.utils.radix2(11,!0),wa.utils.alphabet(e))}function _1(e,t){const{words:n}=rd(e),i=b1(t).decode(n);return v1(i),i}an.mnemonicToEntropy=_1;function w1(e,t){return v1(e),b1(t).encode(e).join(i7(t)?"　":" ")}an.entropyToMnemonic=w1;function a7(e,t){try{_1(e,t)}catch{return!1}return!0}var x1=an.validateMnemonic=a7;const $1=e=>m1(`mnemonic${e}`);function l7(e,t=""){return(0,p1.pbkdf2Async)(g1.sha512,rd(e).nfkd,$1(t),{c:2048,dkLen:64})}an.mnemonicToSeed=l7;function c7(e,t=""){return(0,p1.pbkdf2)(g1.sha512,rd(e).nfkd,$1(t),{c:2048,dkLen:64})}f1=an.mnemonicToSeedSync=c7;class k1 extends Yu{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,hi.hash(t);const i=yo(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let c=0;c<a.length;c++)a[c]^=54;this.iHash.update(a),this.oHash=t.create();for(let c=0;c<a.length;c++)a[c]^=106;this.oHash.update(a),a.fill(0)}update(t){return hi.exists(this),this.iHash.update(t),this}digestInto(t){hi.exists(this),hi.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:c,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=c,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const to=(e,t,n)=>new k1(e,t).update(n).digest();to.create=(e,t)=>new k1(e,t);const u7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),C1=Uint8Array.from({length:16},(e,t)=>t),d7=C1.map(e=>(9*e+5)%16);let id=[C1],sd=[d7];for(let e=0;e<4;e++)for(let t of[id,sd])t.push(t[e].map(n=>u7[n]));const S1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),f7=id.map((e,t)=>e.map(n=>S1[t][n])),h7=sd.map((e,t)=>e.map(n=>S1[t][n])),p7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),g7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),xa=(e,t)=>e<<t|e>>>32-t;function Hp(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const $a=new Uint32Array(16);class m7 extends H0{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let _=0;_<16;_++,n+=4)$a[_]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,c=a,u=this.h2|0,d=u,p=this.h3|0,h=p,m=this.h4|0,v=m;for(let _=0;_<5;_++){const x=4-_,E=p7[_],k=g7[_],C=id[_],P=sd[_],B=f7[_],R=h7[_];for(let T=0;T<16;T++){const L=xa(i+Hp(_,a,u,p)+$a[C[T]]+E,B[T])+m|0;i=m,m=p,p=xa(u,10)|0,u=a,a=L}for(let T=0;T<16;T++){const L=xa(o+Hp(x,c,d,h)+$a[P[T]]+k,R[T])+v|0;o=v,v=h,h=xa(d,10)|0,d=c,c=L}}this.set(this.h1+u+h|0,this.h2+p+v|0,this.h3+m+o|0,this.h4+i+c|0,this.h0+a+d|0)}roundClean(){$a.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const v7=yl(()=>new m7);Ie.hmacSha256Sync=(e,...t)=>to(yr,e,Ie.concatBytes(...t));const eu=X0(yr);function zp(e){return BigInt(`0x${U0(e)}`)}function y7(e){return j0(e.toString(16).padStart(64,"0"))}const b7=Xu("Bitcoin seed"),tu={private:76066276,public:76067358},nu=2147483648,_7=e=>v7(yr(e)),w7=e=>gi(e).getUint32(0,!1),ka=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class fi{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||tu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!Ie.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:zp(t.privateKey),this.privKeyBytes=y7(this.privKey),this.pubKey=t8(t.privateKey,!0)}else if(t.publicKey)this.pubKey=He.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=_7(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return w7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return eu.encode(this.serialize(this.versions.private,Zs(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return eu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=tu){if(Hi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=to(wu,b7,t);return new fi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=tu){const i=eu.decode(t),o=gi(i),a=o.getUint32(0,!1),c={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new fi({...c,privateKey:u.slice(1)}):new fi({...c,publicKey:u})}static fromJSON(t){return fi.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let c=+a[1];if(!Number.isSafeInteger(c)||c>=nu)throw new Error("Invalid index");a[2]==="'"&&(c+=nu),i=i.deriveChild(c)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ka(t);if(t>=nu){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=Zs(new Uint8Array([0]),u,n)}else n=Zs(this.pubKey,n);const i=to(wu,this.chainCode,n),o=zp(i.slice(0,32)),a=i.slice(32);if(!Ie.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const c={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=Ie.mod(this.privKey+o,Xe.n);if(!Ie.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=u}else{const u=He.fromHex(this.pubKey).add(He.fromPrivateKey(o));if(u.equals(He.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=u.toRawBytes(!0)}return new fi(c)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Hi(t,32),s8(t,this.privKey,{canonical:!0,der:!1})}verify(t,n){if(Hi(t,32),Hi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=gr.fromCompact(n)}catch{return!1}return a8(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Hi(n,33),Zs(ka(t),new Uint8Array([this.depth]),ka(this.parentFingerprint),ka(this.index),this.chainCode,n)}}var x7=Object.defineProperty,Qt=(e,t)=>{for(var n in t)x7(e,n,{get:t[n],enumerable:!0})};function $7(e){return Ie.bytesToHex(vl.getPublicKey(e))}var k7={};Qt(k7,{insertEventIntoAscendingList:()=>S7,insertEventIntoDescendingList:()=>C7,normalizeURL:()=>xu,utf8Decoder:()=>Dr,utf8Encoder:()=>Kn});var Dr=new TextDecoder("utf-8"),Kn=new TextEncoder;function xu(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function C7(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function S7(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var wt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(wt||{});function E7(e){if(!od(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function E1(e){let t=yr(Kn.encode(E7(e)));return Ie.bytesToHex(t)}var T7=e=>e instanceof Object;function od(e){if(!T7(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function T1(e){return vl.verifySync(e.sig,E1(e),e.pubkey)}function A7(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,c])=>a===n.slice(1)&&o.indexOf(c)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function I7(e,t){for(let n=0;n<e.length;n++)if(A7(e[n],t))return!0;return!1}var R7={};Qt(R7,{getHex64:()=>wl,getInt:()=>A1,getSubscriptionId:()=>I1,matchEventId:()=>O7,matchEventKind:()=>P7,matchEventPubkey:()=>L7});function wl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function A1(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function I1(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function O7(e,t){return t===wl(e,"id")}function L7(e,t){return t===wl(e,"pubkey")}function P7(e,t){return t===A1(e,"kind")}var Fp=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function M7(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,c={},u=Fp(),d={},p={},h;async function m(){return h||(h=new Promise((C,P)=>{try{a=new WebSocket(e)}catch(L){P(L)}a.onopen=()=>{u.connect.forEach(L=>L()),C()},a.onerror=()=>{h=void 0,u.error.forEach(L=>L()),P()},a.onclose=async()=>{h=void 0,u.disconnect.forEach(L=>L())};let B=[],R;a.onmessage=L=>{B.push(L.data),R||(R=setInterval(T,0))};function T(){if(B.length===0){clearInterval(R),R=null;return}var L=B.shift();if(!L)return;let H=I1(L);if(H){let W=c[H];if(W&&W.alreadyHaveEvent&&W.alreadyHaveEvent(wl(L,"id"),e))return}try{let W=JSON.parse(L);switch(W[0]){case"EVENT":{let Z=W[1],X=W[2];od(X)&&c[Z]&&(c[Z].skipVerification||T1(X))&&I7(c[Z].filters,X)&&(c[Z],(d[Z]?.event||[]).forEach(oe=>oe(X)));return}case"COUNT":let se=W[1],V=W[2];c[se]&&(d[se]?.count||[]).forEach(Z=>Z(V));return;case"EOSE":{let Z=W[1];Z in d&&(d[Z].eose.forEach(X=>X()),d[Z].eose=[]);return}case"OK":{let Z=W[1],X=W[2],oe=W[3]||"";Z in p&&(X?p[Z].ok.forEach(Ze=>Ze()):p[Z].failed.forEach(Ze=>Ze(oe)),p[Z].ok=[],p[Z].failed=[]);return}case"NOTICE":let re=W[1];u.notice.forEach(Z=>Z(re));return;case"AUTH":{let Z=W[1];u.auth?.forEach(X=>X(Z));return}}}catch{return}}}),h)}function v(){return a?.readyState===1}async function _(){v()||await m()}async function x(C){let P=JSON.stringify(C);if(!(!v()&&(await new Promise(B=>setTimeout(B,1e3)),!v())))try{a.send(P)}catch(B){console.log(B)}}const E=(C,{verb:P="REQ",skipVerification:B=!1,alreadyHaveEvent:R=null,id:T=Math.random().toString().slice(2)}={})=>{let L=T;return c[L]={id:L,filters:C,skipVerification:B,alreadyHaveEvent:R},x([P,L,...C]),{sub:(H,W={})=>E(H||C,{skipVerification:W.skipVerification||B,alreadyHaveEvent:W.alreadyHaveEvent||R,id:L}),unsub:()=>{delete c[L],delete d[L],x(["CLOSE",L])},on:(H,W)=>{d[L]=d[L]||{event:[],count:[],eose:[]},d[L][H].push(W)},off:(H,W)=>{let se=d[L],V=se[H].indexOf(W);V>=0&&se[H].splice(V,1)}}};function k(C,P){if(!C.id)throw new Error(`event ${C} has no id`);let B=C.id;return x([P,C]),{on:(R,T)=>{p[B]=p[B]||{ok:[],failed:[]},p[B][R].push(T)},off:(R,T)=>{let L=p[B];if(!L)return;let H=L[R].indexOf(T);H>=0&&L[R].splice(H,1)}}}return{url:e,sub:E,on:(C,P)=>{u[C].push(P),C==="connect"&&a?.readyState===1&&P()},off:(C,P)=>{let B=u[C].indexOf(P);B!==-1&&u[C].splice(B,1)},list:(C,P)=>new Promise(B=>{let R=E(C,P),T=[],L=setTimeout(()=>{R.unsub(),B(T)},n);R.on("eose",()=>{R.unsub(),clearTimeout(L),B(T)}),R.on("event",H=>{T.push(H)})}),get:(C,P)=>new Promise(B=>{let R=E([C],P),T=setTimeout(()=>{R.unsub(),B(null)},i);R.on("event",L=>{R.unsub(),clearTimeout(T),B(L)})}),count:C=>new Promise(P=>{let B=E(C,{...E,verb:"COUNT"}),R=setTimeout(()=>{B.unsub(),P(null)},o);B.on("count",T=>{B.unsub(),clearTimeout(R),P(T)})}),publish(C){return k(C,"EVENT")},auth(C){return k(C,"AUTH")},connect:_,close(){u=Fp(),d={},p={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var B7=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[xu(t)];n&&n.close()})}async ensureRelay(e){const t=xu(e);this._conn[t]||(this._conn[t]=M7(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,_)=>{if(n?.alreadyHaveEvent?.(v,_))return!0;let x=this._seenOn[v]||new Set;return x.add(_),this._seenOn[v]=x,i.has(v)};let a=[],c=new Set,u=new Set,d=e.length,p=!1,h=setTimeout(()=>{p=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let _;try{_=await this.ensureRelay(v)}catch{E();return}if(!_)return;let x=_.sub(t,o);x.on("event",k=>{i.add(k.id);for(let C of c.values())C(k)}),x.on("eose",()=>{p||E()}),a.push(x);function E(){if(d--,d===0){clearTimeout(h);for(let k of u.values())k()}}});let m={sub(v,_){return a.forEach(x=>x.sub(v,_)),m},unsub(){a.forEach(v=>v.unsub())},on(v,_){v==="event"?c.add(_):v==="eose"&&u.add(_)},off(v,_){v==="event"?c.delete(_):v==="eose"&&u.delete(_)}};return m}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",c=>{i(c),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",c=>{o.push(c)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(c,u)=>{let d=await n[u],p=()=>a(c);i.set(a,p),d.on(o,p)})},off(o,a){e.forEach(async(c,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},xo={};Qt(xo,{decode:()=>xl,naddrEncode:()=>z7,neventEncode:()=>H7,noteEncode:()=>D7,nprofileEncode:()=>N7,npubEncode:()=>j7,nrelayEncode:()=>F7,nsecEncode:()=>U7});var ps=5e3;function xl(e){let{prefix:t,words:n}=zt.decode(e,ps),i=new Uint8Array(zt.fromWords(n));switch(t){case"nprofile":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:Ie.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nevent":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:Ie.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>Dr.decode(a)):[],author:o[2]?.[0]?Ie.bytesToHex(o[2][0]):void 0}}}case"naddr":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Dr.decode(o[0][0]),pubkey:Ie.bytesToHex(o[2][0]),kind:parseInt(Ie.bytesToHex(o[3][0]),16),relays:o[1]?o[1].map(a=>Dr.decode(a)):[]}}}case"nrelay":{let o=Ca(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Dr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:Ie.bytesToHex(i)};default:throw new Error(`unknown prefix ${t}`)}}function Ca(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1],a=n.slice(2,2+o);n=n.slice(2+o),!(a.length<o)&&(t[i]=t[i]||[],t[i].push(a))}return t}function U7(e){return ad("nsec",e)}function j7(e){return ad("npub",e)}function D7(e){return ad("note",e)}function ad(e,t){let n=Ie.hexToBytes(t),i=zt.toWords(n);return zt.encode(e,i,ps)}function N7(e){let t=$l({0:[Ie.hexToBytes(e.pubkey)],1:(e.relays||[]).map(i=>Kn.encode(i))}),n=zt.toWords(t);return zt.encode("nprofile",n,ps)}function H7(e){let t=$l({0:[Ie.hexToBytes(e.id)],1:(e.relays||[]).map(i=>Kn.encode(i)),2:e.author?[Ie.hexToBytes(e.author)]:[]}),n=zt.toWords(t);return zt.encode("nevent",n,ps)}function z7(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=$l({0:[Kn.encode(e.identifier)],1:(e.relays||[]).map(o=>Kn.encode(o)),2:[Ie.hexToBytes(e.pubkey)],3:[new Uint8Array(t)]}),i=zt.toWords(n);return zt.encode("naddr",i,ps)}function F7(e){let t=$l({0:[Kn.encode(e)]}),n=zt.toWords(t);return zt.encode("nrelay",n,ps)}function $l(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),Ie.concatBytes(...t)}var W7={};Qt(W7,{decrypt:()=>q7,encrypt:()=>Z7});async function Z7(e,t,n){const i=E0(e,"02"+t),o=R1(i);let a=Uint8Array.from(N0(16)),c=Kn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,c),p=Ji.encode(new Uint8Array(d)),h=Ji.encode(new Uint8Array(a.buffer));return`${p}?iv=${h}`}async function q7(e,t,n){let[i,o]=n.split("?iv="),a=E0(e,"02"+t),c=R1(a),u=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),d=Ji.decode(i),p=Ji.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:p},u,d);return Dr.decode(h)}function R1(e){return e.slice(1,33)}var O1={};Qt(O1,{queryProfile:()=>V7,searchDomain:()=>G7,useFetchImplementation:()=>K7});var kl;try{kl=fetch}catch{}function K7(e){kl=e}async function G7(e,t=""){try{return(await(await kl(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function V7(e){let[t,n]=e.split("@");if(n||(n=t,t="_"),!t.match(/^[A-Za-z0-9-_.]+$/)||!n.includes("."))return null;let i;try{i=await(await kl(`https://${n}/.well-known/nostr.json?name=${t}`)).json()}catch{return null}if(!i?.names?.[t])return null;let o=i.names[t],a=i.relays?.[o]||[];return{pubkey:o,relays:a}}var Q7={};Qt(Q7,{generateSeedWords:()=>Y7,privateKeyFromSeedWords:()=>X7,validateWords:()=>J7});function X7(e,t){let i=fi.fromMasterSeed(f1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return Ie.bytesToHex(i)}function Y7(){return y1(td)}function J7(e){return x1(e,td)}var e9={};Qt(e9,{parse:()=>t9});function t9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,c,u,d]=o,p={id:c,relays:u?[u]:[]},h=i===0,m=i===n.length-1;if(d==="root"){t.root=p;continue}if(d==="reply"){t.reply=p;continue}if(d==="mention"){t.mentions.push(p);continue}if(h){t.root=p;continue}if(m){t.reply=p;continue}t.mentions.push(p)}return t}var n9={};Qt(n9,{getPow:()=>r9});function r9(e){return i9(Ie.hexToBytes(e))}function i9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=s9(e[n]),t+=i,i===8);n++);return t}function s9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var o9={};Qt(o9,{BECH32_REGEX:()=>L1,NOSTR_URI_REGEX:()=>Cl,parse:()=>l9,test:()=>a9});var L1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/,Cl=new RegExp(`nostr:(${L1.source})`);function a9(e){return typeof e=="string"&&new RegExp(`^${Cl.source}$`).test(e)}function l9(e){const t=e.match(new RegExp(`^${Cl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:xl(t[1])}}var c9={};Qt(c9,{createDelegation:()=>u9,getDelegator:()=>d9});function u9(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=yr(Kn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=Ie.bytesToHex(vl.signSync(o,e));return{from:$7(e),to:t.pubkey,cond:i,sig:a}}function d9(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,p,h]=a[u].split(/\b/);if(!(d==="kind"&&p==="="&&e.kind===parseInt(h))){if(d==="created_at"&&p==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&p===">"&&e.created_at>parseInt(h))continue;return null}}let c=yr(Kn.encode(`nostr:delegation:${e.pubkey}:${i}`));return vl.verifySync(o,c,n)?n:null}var f9={};Qt(f9,{matchAll:()=>h9,regex:()=>ld,replaceAll:()=>p9});var ld=()=>new RegExp(`\\b${Cl.source}\\b`,"g");function*h9(e){const t=e.matchAll(ld());for(const n of t){const[i,o]=n;yield{uri:i,value:o,decoded:xl(o),start:n.index,end:n.index+i.length}}}function p9(e,t){return e.replaceAll(ld(),(n,i)=>t({uri:n,value:i,decoded:xl(i)}))}var g9={};Qt(g9,{useFetchImplementation:()=>m9,validateGithub:()=>v9});var cd;try{cd=fetch}catch{}function m9(e){cd=e}async function v9(e,t,n){try{return await(await cd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var y9={};Qt(y9,{authenticate:()=>b9});var b9=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,c)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),c(d)})})},_9={};Qt(_9,{getZapEndpoint:()=>x9,makeZapReceipt:()=>C9,makeZapRequest:()=>$9,useFetchImplementation:()=>w9,validateZapRequest:()=>k9});var ud;try{ud=fetch}catch{}function w9(e){ud=e}async function x9(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:c}=zt.decode(n,1e3),u=zt.fromWords(c);t=Dr.decode(u)}else if(i){let[c,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${c}`}else return null;let a=await(await ud(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function $9({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function k9(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!od(t))return"Zap request is not a valid Nostr event.";if(!T1(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,c])=>a==="p"&&c);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,c])=>a==="e"&&c);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,c])=>a==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function C9({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),c={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&c.tags.push(["preimage",t]),c}Ie.hmacSha256Sync=(e,...t)=>to(yr,e,Ie.concatBytes(...t));Ie.sha256Sync=(...e)=>yr(Ie.concatBytes(...e));const S9=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),P1=(e={})=>(()=>{const t=S9();return st(t,e,!0,!0),t})(),E9=M('<button class="text-blue-500 underline">'),{noteEncode:T9,neventEncode:A9}=xo,I9=e=>{try{return T9(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},R9=e=>{try{return A9({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},no=e=>(()=>{const t=E9();return I(t,w(le,{get when(){return e.kind==null||e.kind===wt.Text},get fallback(){return R9(e.eventId)},get children(){return I9(e.eventId)}})),t})(),O9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],M1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],L9=[...M1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],P9=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],M9=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},gs=()=>({id:M9(),width:"medium"}),B1=e=>({...gs(),columnType:"Following",...e}),U1=e=>({...gs(),columnType:"Notification",...e}),B9=e=>({...gs(),columnType:"Relays",...e}),j1=()=>B9({name:"日本語",relayUrls:M1,contentFilter:{filterType:"Regex",regex:"[\\p{scx=Hiragana}\\p{scx=Katakana}]",flag:"u"}}),D1=e=>({...gs(),columnType:"Posts",...e}),N1=e=>({...gs(),columnType:"Reactions",...e}),dd=e=>({...gs(),columnType:"Search",...e});var We;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const c of o)a[c]=c;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),c={};for(const u of a)c[u]=o[u];return e.objectValues(c)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const c in o)Object.prototype.hasOwnProperty.call(o,c)&&a.push(c);return a},e.find=(o,a)=>{for(const c of o)if(a(c))return c},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(c=>typeof c=="string"?`'${c}'`:c).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(We||(We={}));var $u;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})($u||($u={}));const ee=We.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Nr=e=>{switch(typeof e){case"undefined":return ee.undefined;case"string":return ee.string;case"number":return isNaN(e)?ee.nan:ee.number;case"boolean":return ee.boolean;case"function":return ee.function;case"bigint":return ee.bigint;case"symbol":return ee.symbol;case"object":return Array.isArray(e)?ee.array:e===null?ee.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?ee.promise:typeof Map<"u"&&e instanceof Map?ee.map:typeof Set<"u"&&e instanceof Set?ee.set:typeof Date<"u"&&e instanceof Date?ee.date:ee.object;default:return ee.unknown}},q=We.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),U9=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Mn extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const c of a.issues)if(c.code==="invalid_union")c.unionErrors.map(o);else if(c.code==="invalid_return_type")o(c.returnTypeError);else if(c.code==="invalid_arguments")o(c.argumentsError);else if(c.path.length===0)i._errors.push(n(c));else{let u=i,d=0;for(;d<c.path.length;){const p=c.path[d];d===c.path.length-1?(u[p]=u[p]||{_errors:[]},u[p]._errors.push(n(c))):u[p]=u[p]||{_errors:[]},u=u[p],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,We.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Mn.create=e=>new Mn(e);const ro=(e,t)=>{let n;switch(e.code){case q.invalid_type:e.received===ee.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case q.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,We.jsonStringifyReplacer)}`;break;case q.unrecognized_keys:n=`Unrecognized key(s) in object: ${We.joinValues(e.keys,", ")}`;break;case q.invalid_union:n="Invalid input";break;case q.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${We.joinValues(e.options)}`;break;case q.invalid_enum_value:n=`Invalid enum value. Expected ${We.joinValues(e.options)}, received '${e.received}'`;break;case q.invalid_arguments:n="Invalid function arguments";break;case q.invalid_return_type:n="Invalid function return type";break;case q.invalid_date:n="Invalid date";break;case q.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:We.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case q.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case q.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case q.custom:n="Invalid input";break;case q.invalid_intersection_types:n="Intersection results could not be merged";break;case q.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case q.not_finite:n="Number must be finite";break;default:n=t.defaultError,We.assertNever(e)}return{message:n}};let H1=ro;function j9(e){H1=e}function qa(){return H1}const Ka=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],c={...o,path:a};let u="";const d=i.filter(p=>!!p).slice().reverse();for(const p of d)u=p(c,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},D9=[];function ne(e,t){const n=Ka({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,qa(),ro].filter(i=>!!i)});e.common.issues.push(n)}class Mt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return we;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Mt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:c}=o;if(a.status==="aborted"||c.status==="aborted")return we;a.status==="dirty"&&t.dirty(),c.status==="dirty"&&t.dirty(),(typeof c.value<"u"||o.alwaysSet)&&(i[a.value]=c.value)}return{status:t.value,value:i}}}const we=Object.freeze({status:"aborted"}),z1=e=>({status:"dirty",value:e}),Ft=e=>({status:"valid",value:e}),ku=e=>e.status==="aborted",Cu=e=>e.status==="dirty",Ga=e=>e.status==="valid",Va=e=>typeof Promise<"u"&&e instanceof Promise;var de;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(de||(de={}));class Gn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Wp=(e,t)=>{if(Ga(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Mn(e.common.issues);return this._error=n,this._error}}};function Se(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(c,u)=>c.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Re{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Nr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Nr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Mt,ctx:{common:t.parent.common,data:t.data,parsedType:Nr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Va(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Nr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return Wp(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Nr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Va(o)?o:Promise.resolve(o));return Wp(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const c=t(o),u=()=>a.addIssue({code:q.custom,...i(o)});return typeof Promise<"u"&&c instanceof Promise?c.then(d=>d?!0:(u(),!1)):c?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new Un({schema:this,typeName:me.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return mr.create(this,this._def)}nullable(){return _i.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Bn.create(this,this._def)}promise(){return ns.create(this,this._def)}or(t){return ao.create([this,t],this._def)}and(t){return lo.create(this,t,this._def)}transform(t){return new Un({...Se(this._def),schema:this,typeName:me.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new po({...Se(this._def),innerType:this,defaultValue:n,typeName:me.ZodDefault})}brand(){return new W1({typeName:me.ZodBranded,type:this,...Se(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Ja({...Se(this._def),innerType:this,catchValue:n,typeName:me.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return $o.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const N9=/^c[^\s-]{8,}$/i,H9=/^[a-z][a-z0-9]*$/,z9=/[0-9A-HJKMNP-TV-Z]{26}/,F9=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,W9=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,Z9=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,q9=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,K9=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,G9=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function V9(e,t){return!!((t==="v4"||!t)&&q9.test(e)||(t==="v6"||!t)&&K9.test(e))}class Ln extends Re{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:q.invalid_string,...de.errToObj(i)}),this.nonempty=t=>this.min(1,de.errToObj(t)),this.trim=()=>new Ln({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Ln({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Ln({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==ee.string){const a=this._getOrReturnCtx(t);return ne(a,{code:q.invalid_type,expected:ee.string,received:a.parsedType}),we}const i=new Mt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:q.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:q.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const c=t.data.length>a.value,u=t.data.length<a.value;(c||u)&&(o=this._getOrReturnCtx(t,o),c?ne(o,{code:q.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ne(o,{code:q.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")W9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"email",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")Z9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"emoji",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")F9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"uuid",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")N9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"cuid",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")H9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"cuid2",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")z9.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"ulid",code:q.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ne(o,{validation:"url",code:q.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"regex",code:q.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ne(o,{code:q.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ne(o,{code:q.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ne(o,{code:q.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?G9(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ne(o,{code:q.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?V9(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ne(o,{validation:"ip",code:q.invalid_string,message:a.message}),i.dirty()):We.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Ln({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...de.errToObj(t)})}url(t){return this._addCheck({kind:"url",...de.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...de.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...de.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...de.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...de.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...de.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...de.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...de.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...de.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...de.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...de.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...de.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...de.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...de.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...de.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Ln.create=e=>{var t;return new Ln({checks:[],typeName:me.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};function Q9(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),c=parseInt(t.toFixed(o).replace(".",""));return a%c/Math.pow(10,o)}class Kr extends Re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==ee.number){const a=this._getOrReturnCtx(t);return ne(a,{code:q.invalid_type,expected:ee.number,received:a.parsedType}),we}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="int"?We.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{code:q.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?Q9(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ne(i,{code:q.not_finite,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,de.toString(n))}gt(t,n){return this.setLimit("min",t,!1,de.toString(n))}lte(t,n){return this.setLimit("max",t,!0,de.toString(n))}lt(t,n){return this.setLimit("max",t,!1,de.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:de.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:de.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:de.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:de.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:de.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:de.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:de.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:de.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:de.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:de.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&We.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Kr.create=e=>new Kr({checks:[],typeName:me.ZodNumber,coerce:e?.coerce||!1,...Se(e)});class Gr extends Re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==ee.bigint){const a=this._getOrReturnCtx(t);return ne(a,{code:q.invalid_type,expected:ee.bigint,received:a.parsedType}),we}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ne(i,{code:q.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):We.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,de.toString(n))}gt(t,n){return this.setLimit("min",t,!1,de.toString(n))}lte(t,n){return this.setLimit("max",t,!0,de.toString(n))}lt(t,n){return this.setLimit("max",t,!1,de.toString(n))}setLimit(t,n,i,o){return new Gr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:de.toString(o)}]})}_addCheck(t){return new Gr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:de.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:de.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:de.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:de.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:de.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Gr.create=e=>{var t;return new Gr({checks:[],typeName:me.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Se(e)})};class io extends Re{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==ee.boolean){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.boolean,received:i.parsedType}),we}return Ft(t.data)}}io.create=e=>new io({typeName:me.ZodBoolean,coerce:e?.coerce||!1,...Se(e)});class yi extends Re{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==ee.date){const a=this._getOrReturnCtx(t);return ne(a,{code:q.invalid_type,expected:ee.date,received:a.parsedType}),we}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ne(a,{code:q.invalid_date}),we}const i=new Mt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:q.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ne(o,{code:q.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):We.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new yi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:de.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:de.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}yi.create=e=>new yi({checks:[],coerce:e?.coerce||!1,typeName:me.ZodDate,...Se(e)});class Qa extends Re{_parse(t){if(this._getType(t)!==ee.symbol){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.symbol,received:i.parsedType}),we}return Ft(t.data)}}Qa.create=e=>new Qa({typeName:me.ZodSymbol,...Se(e)});class so extends Re{_parse(t){if(this._getType(t)!==ee.undefined){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.undefined,received:i.parsedType}),we}return Ft(t.data)}}so.create=e=>new so({typeName:me.ZodUndefined,...Se(e)});class oo extends Re{_parse(t){if(this._getType(t)!==ee.null){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.null,received:i.parsedType}),we}return Ft(t.data)}}oo.create=e=>new oo({typeName:me.ZodNull,...Se(e)});class ts extends Re{constructor(){super(...arguments),this._any=!0}_parse(t){return Ft(t.data)}}ts.create=e=>new ts({typeName:me.ZodAny,...Se(e)});class mi extends Re{constructor(){super(...arguments),this._unknown=!0}_parse(t){return Ft(t.data)}}mi.create=e=>new mi({typeName:me.ZodUnknown,...Se(e)});class vr extends Re{_parse(t){const n=this._getOrReturnCtx(t);return ne(n,{code:q.invalid_type,expected:ee.never,received:n.parsedType}),we}}vr.create=e=>new vr({typeName:me.ZodNever,...Se(e)});class Xa extends Re{_parse(t){if(this._getType(t)!==ee.undefined){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.void,received:i.parsedType}),we}return Ft(t.data)}}Xa.create=e=>new Xa({typeName:me.ZodVoid,...Se(e)});class Bn extends Re{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==ee.array)return ne(n,{code:q.invalid_type,expected:ee.array,received:n.parsedType}),we;if(o.exactLength!==null){const c=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(c||u)&&(ne(n,{code:c?q.too_big:q.too_small,minimum:u?o.exactLength.value:void 0,maximum:c?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ne(n,{code:q.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ne(n,{code:q.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((c,u)=>o.type._parseAsync(new Gn(n,c,n.path,u)))).then(c=>Mt.mergeArray(i,c));const a=[...n.data].map((c,u)=>o.type._parseSync(new Gn(n,c,n.path,u)));return Mt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new Bn({...this._def,minLength:{value:t,message:de.toString(n)}})}max(t,n){return new Bn({...this._def,maxLength:{value:t,message:de.toString(n)}})}length(t,n){return new Bn({...this._def,exactLength:{value:t,message:de.toString(n)}})}nonempty(t){return this.min(1,t)}}Bn.create=(e,t)=>new Bn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:me.ZodArray,...Se(t)});function zi(e){if(e instanceof ft){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=mr.create(zi(i))}return new ft({...e._def,shape:()=>t})}else return e instanceof Bn?new Bn({...e._def,type:zi(e.element)}):e instanceof mr?mr.create(zi(e.unwrap())):e instanceof _i?_i.create(zi(e.unwrap())):e instanceof Vn?Vn.create(e.items.map(t=>zi(t))):e}class ft extends Re{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=We.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==ee.object){const p=this._getOrReturnCtx(t);return ne(p,{code:q.invalid_type,expected:ee.object,received:p.parsedType}),we}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:c}=this._getCached(),u=[];if(!(this._def.catchall instanceof vr&&this._def.unknownKeys==="strip"))for(const p in o.data)c.includes(p)||u.push(p);const d=[];for(const p of c){const h=a[p],m=o.data[p];d.push({key:{status:"valid",value:p},value:h._parse(new Gn(o,m,o.path,p)),alwaysSet:p in o.data})}if(this._def.catchall instanceof vr){const p=this._def.unknownKeys;if(p==="passthrough")for(const h of u)d.push({key:{status:"valid",value:h},value:{status:"valid",value:o.data[h]}});else if(p==="strict")u.length>0&&(ne(o,{code:q.unrecognized_keys,keys:u}),i.dirty());else if(p!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const p=this._def.catchall;for(const h of u){const m=o.data[h];d.push({key:{status:"valid",value:h},value:p._parse(new Gn(o,m,o.path,h)),alwaysSet:h in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const p=[];for(const h of d){const m=await h.key;p.push({key:m,value:await h.value,alwaysSet:h.alwaysSet})}return p}).then(p=>Mt.mergeObjectSync(i,p)):Mt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return de.errToObj,new ft({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,c,u;const d=(c=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&c!==void 0?c:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=de.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ft({...this._def,unknownKeys:"strip"})}passthrough(){return new ft({...this._def,unknownKeys:"passthrough"})}extend(t){return new ft({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ft({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:me.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new ft({...this._def,catchall:t})}pick(t){const n={};return We.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ft({...this._def,shape:()=>n})}omit(t){const n={};return We.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new ft({...this._def,shape:()=>n})}deepPartial(){return zi(this)}partial(t){const n={};return We.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new ft({...this._def,shape:()=>n})}required(t){const n={};return We.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof mr;)a=a._def.innerType;n[i]=a}}),new ft({...this._def,shape:()=>n})}keyof(){return F1(We.objectKeys(this.shape))}}ft.create=(e,t)=>new ft({shape:()=>e,unknownKeys:"strip",catchall:vr.create(),typeName:me.ZodObject,...Se(t)});ft.strictCreate=(e,t)=>new ft({shape:()=>e,unknownKeys:"strict",catchall:vr.create(),typeName:me.ZodObject,...Se(t)});ft.lazycreate=(e,t)=>new ft({shape:e,unknownKeys:"strip",catchall:vr.create(),typeName:me.ZodObject,...Se(t)});class ao extends Re{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const c=a.map(u=>new Mn(u.ctx.common.issues));return ne(n,{code:q.invalid_union,unionErrors:c}),we}if(n.common.async)return Promise.all(i.map(async a=>{const c={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:c}),ctx:c}})).then(o);{let a;const c=[];for(const d of i){const p={...n,common:{...n.common,issues:[]},parent:null},h=d._parseSync({data:n.data,path:n.path,parent:p});if(h.status==="valid")return h;h.status==="dirty"&&!a&&(a={result:h,ctx:p}),p.common.issues.length&&c.push(p.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=c.map(d=>new Mn(d));return ne(n,{code:q.invalid_union,unionErrors:u}),we}}get options(){return this._def.options}}ao.create=(e,t)=>new ao({options:e,typeName:me.ZodUnion,...Se(t)});const La=e=>e instanceof uo?La(e.schema):e instanceof Un?La(e.innerType()):e instanceof fo?[e.value]:e instanceof Vr?e.options:e instanceof ho?Object.keys(e.enum):e instanceof po?La(e._def.innerType):e instanceof so?[void 0]:e instanceof oo?[null]:null;class Sl extends Re{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ee.object)return ne(n,{code:q.invalid_type,expected:ee.object,received:n.parsedType}),we;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ne(n,{code:q.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),we)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const c=La(a.shape[t]);if(!c)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of c){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new Sl({typeName:me.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Se(i)})}}function Su(e,t){const n=Nr(e),i=Nr(t);if(e===t)return{valid:!0,data:e};if(n===ee.object&&i===ee.object){const o=We.objectKeys(t),a=We.objectKeys(e).filter(u=>o.indexOf(u)!==-1),c={...e,...t};for(const u of a){const d=Su(e[u],t[u]);if(!d.valid)return{valid:!1};c[u]=d.data}return{valid:!0,data:c}}else if(n===ee.array&&i===ee.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const c=e[a],u=t[a],d=Su(c,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===ee.date&&i===ee.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class lo extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,c)=>{if(ku(a)||ku(c))return we;const u=Su(a.value,c.value);return u.valid?((Cu(a)||Cu(c))&&n.dirty(),{status:n.value,value:u.data}):(ne(i,{code:q.invalid_intersection_types}),we)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,c])=>o(a,c)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}lo.create=(e,t,n)=>new lo({left:e,right:t,typeName:me.ZodIntersection,...Se(n)});class Vn extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ee.array)return ne(i,{code:q.invalid_type,expected:ee.array,received:i.parsedType}),we;if(i.data.length<this._def.items.length)return ne(i,{code:q.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),we;!this._def.rest&&i.data.length>this._def.items.length&&(ne(i,{code:q.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((c,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Gn(i,c,i.path,u)):null}).filter(c=>!!c);return i.common.async?Promise.all(a).then(c=>Mt.mergeArray(n,c)):Mt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Vn({...this._def,rest:t})}}Vn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Vn({items:e,typeName:me.ZodTuple,rest:null,...Se(t)})};class co extends Re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ee.object)return ne(i,{code:q.invalid_type,expected:ee.object,received:i.parsedType}),we;const o=[],a=this._def.keyType,c=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Gn(i,u,i.path,u)),value:c._parse(new Gn(i,i.data[u],i.path,u))});return i.common.async?Mt.mergeObjectAsync(n,o):Mt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Re?new co({keyType:t,valueType:n,typeName:me.ZodRecord,...Se(i)}):new co({keyType:Ln.create(),valueType:t,typeName:me.ZodRecord,...Se(n)})}}class Ya extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ee.map)return ne(i,{code:q.invalid_type,expected:ee.map,received:i.parsedType}),we;const o=this._def.keyType,a=this._def.valueType,c=[...i.data.entries()].map(([u,d],p)=>({key:o._parse(new Gn(i,u,i.path,[p,"key"])),value:a._parse(new Gn(i,d,i.path,[p,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of c){const p=await d.key,h=await d.value;if(p.status==="aborted"||h.status==="aborted")return we;(p.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(p.value,h.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of c){const p=d.key,h=d.value;if(p.status==="aborted"||h.status==="aborted")return we;(p.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(p.value,h.value)}return{status:n.value,value:u}}}}Ya.create=(e,t,n)=>new Ya({valueType:t,keyType:e,typeName:me.ZodMap,...Se(n)});class bi extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ee.set)return ne(i,{code:q.invalid_type,expected:ee.set,received:i.parsedType}),we;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ne(i,{code:q.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ne(i,{code:q.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function c(d){const p=new Set;for(const h of d){if(h.status==="aborted")return we;h.status==="dirty"&&n.dirty(),p.add(h.value)}return{status:n.value,value:p}}const u=[...i.data.values()].map((d,p)=>a._parse(new Gn(i,d,i.path,p)));return i.common.async?Promise.all(u).then(d=>c(d)):c(u)}min(t,n){return new bi({...this._def,minSize:{value:t,message:de.toString(n)}})}max(t,n){return new bi({...this._def,maxSize:{value:t,message:de.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}bi.create=(e,t)=>new bi({valueType:e,minSize:null,maxSize:null,typeName:me.ZodSet,...Se(t)});class Zi extends Re{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ee.function)return ne(n,{code:q.invalid_type,expected:ee.function,received:n.parsedType}),we;function i(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,qa(),ro].filter(p=>!!p),issueData:{code:q.invalid_arguments,argumentsError:d}})}function o(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,qa(),ro].filter(p=>!!p),issueData:{code:q.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},c=n.data;return this._def.returns instanceof ns?Ft(async(...u)=>{const d=new Mn([]),p=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),h=await c(...p);return await this._def.returns._def.type.parseAsync(h,a).catch(v=>{throw d.addIssue(o(h,v)),d})}):Ft((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Mn([i(u,d.error)]);const p=c(...d.data),h=this._def.returns.safeParse(p,a);if(!h.success)throw new Mn([o(p,h.error)]);return h.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Zi({...this._def,args:Vn.create(t).rest(mi.create())})}returns(t){return new Zi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Zi({args:t||Vn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:me.ZodFunction,...Se(i)})}}class uo extends Re{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}uo.create=(e,t)=>new uo({getter:e,typeName:me.ZodLazy,...Se(t)});class fo extends Re{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ne(n,{received:n.data,code:q.invalid_literal,expected:this._def.value}),we}return{status:"valid",value:t.data}}get value(){return this._def.value}}fo.create=(e,t)=>new fo({value:e,typeName:me.ZodLiteral,...Se(t)});function F1(e,t){return new Vr({values:e,typeName:me.ZodEnum,...Se(t)})}class Vr extends Re{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ne(n,{expected:We.joinValues(i),received:n.parsedType,code:q.invalid_type}),we}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ne(n,{received:n.data,code:q.invalid_enum_value,options:i}),we}return Ft(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Vr.create(t)}exclude(t){return Vr.create(this.options.filter(n=>!t.includes(n)))}}Vr.create=F1;class ho extends Re{_parse(t){const n=We.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==ee.string&&i.parsedType!==ee.number){const o=We.objectValues(n);return ne(i,{expected:We.joinValues(o),received:i.parsedType,code:q.invalid_type}),we}if(n.indexOf(t.data)===-1){const o=We.objectValues(n);return ne(i,{received:i.data,code:q.invalid_enum_value,options:o}),we}return Ft(t.data)}get enum(){return this._def.values}}ho.create=(e,t)=>new ho({values:e,typeName:me.ZodNativeEnum,...Se(t)});class ns extends Re{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ee.promise&&n.common.async===!1)return ne(n,{code:q.invalid_type,expected:ee.promise,received:n.parsedType}),we;const i=n.parsedType===ee.promise?n.data:Promise.resolve(n.data);return Ft(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ns.create=(e,t)=>new ns({type:e,typeName:me.ZodPromise,...Se(t)});class Un extends Re{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===me.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const c=o.transform(i.data);return i.common.async?Promise.resolve(c).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:c,path:i.path,parent:i})}const a={addIssue:c=>{ne(i,c),c.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const c=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?we:(u.status==="dirty"&&n.dirty(),c(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?we:(u.status==="dirty"&&n.dirty(),c(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const c=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ga(c))return c;const u=o.transform(c.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(c=>Ga(c)?Promise.resolve(o.transform(c.value,a)).then(u=>({status:n.value,value:u})):c);We.assertNever(o)}}Un.create=(e,t,n)=>new Un({schema:e,typeName:me.ZodEffects,effect:t,...Se(n)});Un.createWithPreprocess=(e,t,n)=>new Un({schema:t,effect:{type:"preprocess",transform:e},typeName:me.ZodEffects,...Se(n)});class mr extends Re{_parse(t){return this._getType(t)===ee.undefined?Ft(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}mr.create=(e,t)=>new mr({innerType:e,typeName:me.ZodOptional,...Se(t)});class _i extends Re{_parse(t){return this._getType(t)===ee.null?Ft(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}_i.create=(e,t)=>new _i({innerType:e,typeName:me.ZodNullable,...Se(t)});class po extends Re{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===ee.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}po.create=(e,t)=>new po({innerType:e,typeName:me.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Se(t)});class Ja extends Re{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Va(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Ja.create=(e,t)=>new Ja({innerType:e,typeName:me.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Se(t)});class el extends Re{_parse(t){if(this._getType(t)!==ee.nan){const i=this._getOrReturnCtx(t);return ne(i,{code:q.invalid_type,expected:ee.nan,received:i.parsedType}),we}return{status:"valid",value:t.data}}}el.create=e=>new el({typeName:me.ZodNaN,...Se(e)});const X9=Symbol("zod_brand");class W1 extends Re{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class $o extends Re{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?we:a.status==="dirty"?(n.dirty(),z1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?we:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new $o({in:t,out:n,typeName:me.ZodPipeline})}}const Z1=(e,t={},n)=>e?ts.create().superRefine((i,o)=>{var a,c;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(c=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&c!==void 0?c:!0,p=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...p,fatal:d})}}):ts.create(),Y9={object:ft.lazycreate};var me;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(me||(me={}));const J9=(e,t={message:`Input not instance of ${e.name}`})=>Z1(n=>n instanceof e,t),q1=Ln.create,K1=Kr.create,ek=el.create,tk=Gr.create,G1=io.create,nk=yi.create,rk=Qa.create,ik=so.create,sk=oo.create,ok=ts.create,ak=mi.create,lk=vr.create,ck=Xa.create,uk=Bn.create,dk=ft.create,fk=ft.strictCreate,hk=ao.create,pk=Sl.create,gk=lo.create,mk=Vn.create,vk=co.create,yk=Ya.create,bk=bi.create,_k=Zi.create,wk=uo.create,xk=fo.create,$k=Vr.create,kk=ho.create,Ck=ns.create,Zp=Un.create,Sk=mr.create,Ek=_i.create,Tk=Un.createWithPreprocess,Ak=$o.create,Ik=()=>q1().optional(),Rk=()=>K1().optional(),Ok=()=>G1().optional(),Lk={string:e=>Ln.create({...e,coerce:!0}),number:e=>Kr.create({...e,coerce:!0}),boolean:e=>io.create({...e,coerce:!0}),bigint:e=>Gr.create({...e,coerce:!0}),date:e=>yi.create({...e,coerce:!0})},Pk=we;var Sa=Object.freeze({__proto__:null,defaultErrorMap:ro,setErrorMap:j9,getErrorMap:qa,makeIssue:Ka,EMPTY_PATH:D9,addIssueToContext:ne,ParseStatus:Mt,INVALID:we,DIRTY:z1,OK:Ft,isAborted:ku,isDirty:Cu,isValid:Ga,isAsync:Va,get util(){return We},get objectUtil(){return $u},ZodParsedType:ee,getParsedType:Nr,ZodType:Re,ZodString:Ln,ZodNumber:Kr,ZodBigInt:Gr,ZodBoolean:io,ZodDate:yi,ZodSymbol:Qa,ZodUndefined:so,ZodNull:oo,ZodAny:ts,ZodUnknown:mi,ZodNever:vr,ZodVoid:Xa,ZodArray:Bn,ZodObject:ft,ZodUnion:ao,ZodDiscriminatedUnion:Sl,ZodIntersection:lo,ZodTuple:Vn,ZodRecord:co,ZodMap:Ya,ZodSet:bi,ZodFunction:Zi,ZodLazy:uo,ZodLiteral:fo,ZodEnum:Vr,ZodNativeEnum:ho,ZodPromise:ns,ZodEffects:Un,ZodTransformer:Un,ZodOptional:mr,ZodNullable:_i,ZodDefault:po,ZodCatch:Ja,ZodNaN:el,BRAND:X9,ZodBranded:W1,ZodPipeline:$o,custom:Z1,Schema:Re,ZodSchema:Re,late:Y9,get ZodFirstPartyTypeKind(){return me},coerce:Lk,any:ok,array:uk,bigint:tk,boolean:G1,date:nk,discriminatedUnion:pk,effect:Zp,enum:$k,function:_k,instanceof:J9,intersection:gk,lazy:wk,literal:xk,map:yk,nan:ek,nativeEnum:kk,never:lk,null:sk,nullable:Ek,number:K1,object:dk,oboolean:Ok,onumber:Rk,optional:Sk,ostring:Ik,pipeline:Ak,preprocess:Tk,promise:Ck,record:vk,set:bk,strictObject:fk,string:q1,symbol:rk,transformer:Zp,tuple:mk,undefined:ik,union:hk,unknown:ak,void:ck,NEVER:Pk,ZodIssueCode:q,quotelessJson:U9,ZodError:Mn});const Mk=/^[0-9a-f]{64}$/,Vs=e=>{const t=typeof e=="string"&&e.length===64&&Mk.test(e);return t||console.warn("invalid id is ignored: ",e),t},Bk=Sa.tuple([Sa.literal("emoji"),Sa.string().regex(/^[a-zA-Z0-9]+$/,{message:"shortcode should be alpahnumeric"}),Sa.string().url()]),Uk=e=>t=>e.safeParse(t).success,$n=e=>{let t;return{get rawEvent(){return e},get id(){return e.id},get pubkey(){return e.pubkey},get createdAt(){return e.created_at},get content(){return e.content},get tags(){return e.tags},createdAtAsDate(){return new Date(e.created_at*1e3)},pTags(){return e.tags.filter(([n,i])=>n==="p"&&Vs(i))},eTags(){return e.tags.filter(([n,i])=>n==="e"&&Vs(i))},emojiTags(){return e.tags.filter(Uk(Bk))},taggedEventIds(){return this.eTags().map(([,n])=>n)},lastTaggedEventId(){const n=this.taggedEventIds();if(n.length!==0)return n[n.length-1]},markedEventTags(){if(e.kind!==wt.Text)throw new Error("kind should be 1");if(t!=null)return t;const n=e.tags.map((o,a)=>[o,a]).filter(([[o,a]])=>o==="e"&&Vs(a)),i=(o,a)=>{if(e.kind===1)return o==="root"||o==="reply"||o==="mention"?o:n.length===1?"reply":a===0?"root":n.length===2||a===n.length-1?"reply":"mention"};return t=n.map(([[,o,a,c],u],d)=>({id:o,relayUrl:a,marker:i(c,d),index:u})),t},replyingToEvent(){return this.markedEventTags().find(({marker:n})=>n==="reply")},rootEvent(){return this.markedEventTags().find(({marker:n})=>n==="root")},mentionedEvents(){return this.markedEventTags().filter(({marker:n})=>n==="mention")},mentionedPubkeys(){return Fr(this.pTags().map(([,n])=>n))},mentionedPubkeysWithoutAuthor(){return this.mentionedPubkeys().filter(n=>n!==e.pubkey)},contentWarning(){const n=e.tags.find(([o])=>o==="content-warning");return n==null?{contentWarning:!1}:{contentWarning:!0,reason:(n[1]?.length??0)>0?n[1]:void 0}},containsEventMention(n){const i=e.tags.findIndex(([o,a])=>o==="e"&&a===n);return i<0?!1:this.containsEventMentionIndex(i)},containsEventMentionIndex(n){return n<0||n>=e.tags.length?!1:e.content.includes(`#[${n}]`)},getEmojiUrl(n){const i=this.emojiTags().find(([,a])=>a===n);if(i==null)return null;const[,,o]=i;return o}}},jk=()=>{const e=[...O9];return window.navigator.language.includes("ja")&&e.push(...L9),e},V1=()=>({relayUrls:jk(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),Dk=e=>JSON.stringify(e),Nk=e=>({...V1(),...JSON.parse(e)}),Hk=d4(()=>window.localStorage,Dk,Nk),[Fs,on]=f4("RabbitConfig",V1(),Hk),De=()=>{const e=k=>{on("relayUrls",C=>Fr([...C,k]))},t=k=>{on("relayUrls",C=>C.filter(P=>P!==k))},n=k=>{on("mutedPubkeys",C=>Fr([...C,k]))},i=k=>{on("mutedPubkeys",C=>C.filter(P=>P!==k))},o=k=>{on("mutedKeywords",C=>Fr([...C,k]))},a=k=>{on("mutedKeywords",C=>C.filter(P=>P!==k))},c=k=>{on("columns",C=>{const P=C.findIndex(B=>B.id===k.id);if(P>=0){const B=[...C];return B.splice(P,1,k),B}return[...C,k]})},u=(k,C)=>{on("columns",P=>{const B=C-1,R=Math.max(Math.min(B,P.length),0),T=P.findIndex(W=>W.id===k);if(T<0||R===T)return P;console.log(T,R);const L=[...P],[H]=L.splice(T,1);return L.splice(R,0,H),L})},d=k=>{on("columns",C=>C.filter(P=>P.id!==k))},p=k=>{on("customEmojis",C=>({...C,[k.shortcode]:k}))},h=k=>{on("customEmojis",C=>({...C,[k]:void 0}))},m=k=>Fs.customEmojis[k],v=k=>Fs.mutedPubkeys.includes(k),_=k=>k.kind===wt.Text?Fs.mutedKeywords.some(C=>k.content.includes(C)):!1;return{config:()=>Fs,setConfig:on,addRelay:e,removeRelay:t,saveColumn:c,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:k})=>{if((Fs.columns?.length??0)>0)return;const C=[B1({width:"widest",pubkey:k}),U1({pubkey:k}),D1({name:"自分の投稿",pubkey:k}),N1({name:"自分のリアクション",pubkey:k})];navigator.language.includes("ja")&&C.splice(2,0,j1()),on("columns",()=>[...C])},saveEmoji:p,removeEmoji:h,getEmoji:m,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:v,shouldMuteEvent:k=>{const C=$n(k);return v(k.pubkey)||C.mentionedPubkeys().some(v)||_(k)}}},zk=()=>{let e,t;const n=new Promise((i,o)=>{e=i,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:n,resolve:e,reject:t}},Fk=e=>{const t=Ge(e),n=Ge(()=>t().batchSize??100),i=Ge(()=>t().interval??2e3),[o,a]=$e(0),[c,u]=$e([]);let d;const p=()=>{const{executor:E}=t(),k=c();k.length>0&&(u([]),E(k)),d!=null&&clearTimeout(d),d=void 0},h=()=>{const E=o();return a(k=>k+1),E},m=()=>{d==null&&(d=setTimeout(()=>{p()},i()))},v=E=>{c().length<n()?u(k=>[...k,E]):(p(),u([E]))},_=E=>{u(k=>k.filter(C=>C.id!==E))};return{exec:async(E,k)=>{const{promise:C,resolve:P,reject:B}=zk(),R=h();return v({id:R,args:E,resolve:P,reject:B}),m(),k?.addEventListener("abort",()=>{_(R),B(new Error("AbortError"))}),C}}},[Wk]=$e(new B7),El=()=>Wk,[Zk,qp]=Ki({activeSubscriptions:0,activeBatchSubscriptions:0}),Q1=()=>({stats:Zk,setActiveSubscriptions:n=>qp("activeSubscriptions",n),setActiveBatchSubscriptions:n=>qp("activeBatchSubscriptions",n)}),Jr=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const c=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(c))},e)});return Promise.race([n,i])},qk=/\p{Emoji_Presentation}/u;let Eu=0;const{setActiveBatchSubscriptions:Kk}=Q1();setInterval(()=>{Kk(Eu)},1e3);const Gk={events:[],completed:!0},Vk=()=>Gk,{exec:ko}=Fk(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,c=new Map;e.forEach(T=>{if(T.args.type==="Event"){const L=n.get(T.args.eventId)??[];n.set(T.args.eventId,[...L,T])}else if(T.args.type==="Profile"){const L=t.get(T.args.pubkey)??[];t.set(T.args.pubkey,[...L,T])}else if(T.args.type==="Reactions"){const L=i.get(T.args.mentionedEventId)??[];i.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="Reposts"){const L=o.get(T.args.mentionedEventId)??[];o.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="ZapReceipts"){const L=a.get(T.args.mentionedEventId)??[];o.set(T.args.mentionedEventId,[...L,T])}else if(T.args.type==="Followings"){const L=c.get(T.args.pubkey)??[];c.set(T.args.pubkey,[...L,T])}});const u=[...n.keys()],d=[...t.keys()],p=[...i.keys()],h=[...o.keys()],m=[...a.keys()],v=[...c.keys()],_=[];if(u.length>0&&_.push({ids:u}),d.length>0&&_.push({kinds:[wt.Metadata],authors:d}),p.length>0&&_.push({kinds:[wt.Reaction],"#e":p}),h.length>0&&_.push({kinds:[6],"#e":h}),m.length>0&&_.push({kinds:[9735],"#e":m}),v.length>0&&_.push({kinds:[wt.Contacts],authors:v}),_.length===0)return;const x=new Map,E=(T,L)=>{T.forEach(H=>{const W=x.get(H.id)??$e({events:[],completed:!1});x.set(H.id,W);const[se,V]=W;V(re=>({...re,events:[...re.events,L]})),H.resolve(se)})},k=()=>{e.forEach(T=>{const L=x.get(T.id);if(L!=null){const H=L[1];H(W=>({...W,completed:!0}))}else T.resolve(Vk)})},{config:C,shouldMuteEvent:P}=De(),R=El()().sub(C().relayUrls,_,{});Eu+=1,R.on("event",T=>{if(T.kind===wt.Metadata){const L=t.get(T.pubkey)??[];E(L,T);return}if(T.kind===wt.Reaction){const L=$n(T).lastTaggedEventId();if(L!=null){const H=i.get(L)??[];E(H,T)}}else if(T.kind===6){const L=$n(T).lastTaggedEventId();if(L!=null){const H=o.get(L)??[];E(H,T)}}else if(T.kind===wt.Zap)$n(T).eTags().forEach(([,H])=>{const W=o.get(H)??[];E(W,T)});else if(T.kind===wt.Contacts){const L=c.get(T.pubkey)??[];E(L,T)}else{const L=n.get(T.id)??[];L.length>0?E(L,T):console.warn("unknown event received")}}),R.on("eose",()=>{k(),R.unsub(),Eu-=1})}})),X1=e=>e.length===0?null:e.reduce((t,n)=>t.created_at>n.created_at?t:n),ms=e=>{const t=os(),n=Ge(e),i=Ge(()=>["useProfile",n()]),o=as(i,({queryKey:u,signal:d})=>{const[,p]=u;if(p==null)return Promise.resolve(null);const{pubkey:h}=p;if(h.startsWith("npub1"))return Promise.resolve(null);const m=ko({type:"Profile",pubkey:h},d).then(v=>{const _=()=>{const x=X1(v().events);if(x==null)throw new Error(`profile not found: ${h}`);return x};return dl(v).subscribe(()=>{try{t.setQueryData(u,_())}catch(x){console.error("error occurred while updating profile cache: ",x)}}),_()});return Jr(15e3,`useProfile: ${h}`)(m)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3});return{profile:Ge(()=>{if(o.data==null)return null;const{content:u}=o.data;if(u==null||u.length===0)return null;try{return JSON.parse(u)}catch(d){return console.warn("failed to parse profile (kind 0): ",d,u),null}}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},Y1=e=>{const t=Ge(e),n=as(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return null;const{eventId:u}=c,d=ko({type:"Event",eventId:u},a).then(p=>{const h=p().events[0];if(h==null)throw new Error(`event not found: ${u}`);return h});return Jr(15e3,`useEvent: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},Qk=e=>{const t=os(),n=Ge(e),i=Ge(()=>["useReactions",n()]),o=as(i,({queryKey:h,signal:m})=>{const[,v]=h;if(v==null)return[];const{eventId:_}=v,x=ko({type:"Reactions",mentionedEventId:_},m).then(E=>{const k=()=>E().events;return dl(E).subscribe(()=>{t.setQueryData(h,k())}),k()});return Jr(15e3,`useReactions: ${_}`)(x)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reactions:a,reactionsGroupedByContent:()=>{const h=new Map;return a().forEach(m=>{const v=h.get(m.content)??[];v.push(m),h.set(m.content,v)}),h},isReactedBy:h=>a().findIndex(m=>m.pubkey===h)!==-1,isReactedByWithEmoji:h=>a().findIndex(m=>m.pubkey===h&&qk.test(m.content))!==-1,invalidateReactions:()=>t.invalidateQueries(i()),query:o}},Xk=e=>{const t=os(),n=Ge(e),i=Ge(()=>["useReposts",n()]),o=as(i,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return[];const{eventId:m}=h,v=ko({type:"Reposts",mentionedEventId:m},p).then(_=>{const x=()=>_().events;return dl(_).subscribe(()=>{t.setQueryData(d,x())}),x()});return Jr(15e3,`useReposts: ${m}`)(v)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reposts:a,isRepostedBy:d=>a().findIndex(p=>p.pubkey===d)!==-1,invalidateReposts:()=>t.invalidateQueries(i()),query:o}},Tu=e=>{const t=os(),n=Ge(e),i=()=>["useFollowings",n()],o=as(i,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return Promise.resolve(null);const{pubkey:m}=h,v=ko({type:"Followings",pubkey:m},p).then(_=>{const x=()=>{const E=X1(_().events);if(E==null)throw new Error(`followings not found: ${m}`);return E};return dl(_).subscribe(()=>{try{t.setQueryData(d,x())}catch(E){console.error("error occurred while updating followings cache: ",E)}}),x()});return Jr(15e3,`useFollowings: ${m}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return $n(o.data).pTags().forEach(h=>{const[,m,v,_]=h,x={pubkey:m,petname:_};v!=null&&v.length>0&&(x.mainRelayUrl=v),d.push(x)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},ln=e=>t=>e.some(n=>n==null)?null:t(e),Yk=M('<div class="truncate">読み込み中 '),go=e=>{const[t,n]=n4(e,["eventId"]),{shouldMuteEvent:i}=De(),{event:o,query:a}=Y1(()=>ln([t.eventId])(([u])=>({eventId:u}))),c=()=>{const u=o();return u!=null&&i(u)};return w(Pn,{fallback:"投稿が見つかりません",get children(){return[w(Fe,{get when(){return c()},children:null}),w(Fe,{get when(){return o()},keyed:!0,children:u=>w(jm,r4({event:u},n))}),w(Fe,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=Yk();return d.firstChild,I(d,w(no,{eventId:u}),null),d})()})]}})},{npubEncode:Jk}=xo,Tl=e=>{try{return Jk(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Al=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return w(Pn,{get fallback(){return Tl(e.pubkey)},get children(){return[w(Fe,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),w(Fe,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",Ge(()=>t()?.name)]}})]}})},J1=e=>{const[t,n]=$e(new Date);return pr(()=>{const i=setInterval(()=>{n(new Date)},e().interval);Xr(()=>clearInterval(i))}),t},eC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},Kp=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,tC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleDateString()}},nC=e=>{switch(e.kind){case"today":return Kp(e.value);case"yesterday":return`昨日 ${Kp(e.value)}`;case"abs":default:return e.value.toLocaleString()}},rC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,iC=(e,t)=>{const n=rC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},Gp=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),sC=e=>new Date(+e-24*60*60*1e3),em=(e,t,n)=>Gp(e,t)?n({kind:"today",value:e}):Gp(e,sC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),oC=(e,t=new Date)=>em(e,t,tC),aC=(e,t=new Date)=>em(e,t,nC),Vp=(e,t=new Date,n=eC)=>n(iC(e,t)),Qp=J1(()=>({interval:7e3})),Xp=J1(()=>({interval:60*1e3})),tm=()=>{const{config:e}=De();return t=>{switch(e().dateFormat){case"absolute-long":return oC(t,Xp());case"absolute-short":return aC(t,Xp());case"relative":return Vp(t,Qp());default:return Vp(t,Qp())}}},[lC,Ni]=$e({type:"Closed"}),ei=()=>({modalState:lC,setModalState:Ni,showProfile:a=>{Ni({type:"Profile",pubkey:a})},showProfileEdit:()=>{Ni({type:"ProfileEdit"})},showAddColumn:()=>{Ni({type:"AddColumn"})},showAbout:()=>{Ni({type:"About"})},closeModal:()=>{Ni({type:"Closed"})}}),cC=M('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),nm=e=>{const{showProfile:t}=ei(),n=tm(),i=Ge(()=>$n(e.event)),o=()=>i().lastTaggedEventId();return(()=>{const a=cC(),c=a.firstChild,u=c.firstChild,d=u.nextSibling,p=d.firstChild,h=d.nextSibling,m=c.nextSibling;return I(u,w(P1,{})),p.$$click=()=>t(e.event.pubkey),I(p,w(Al,{get pubkey(){return e.event.pubkey}})),I(h,()=>n(i().createdAtAsDate())),I(m,w(go,{get eventId(){return o()}})),a})()};bt(["click"]);const uC=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),dC=(e={})=>(()=>{const t=uC();return st(t,e,!0,!0),t})(),fC=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),rm=(e={})=>(()=>{const t=fC();return st(t,e,!0,!0),t})(),hC=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),fd=(e={})=>(()=>{const t=hC();return st(t,e,!0,!0),t})(),pC=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),im=(e={})=>(()=>{const t=pC();return st(t,e,!0,!0),t})(),gC=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),hd=(e={})=>(()=>{const t=gC();return st(t,e,!0,!0),t})(),mC=M('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),pd=e=>{let t,n;const[i,o]=$e(!1),[a,c]=$e({}),u=i4(()=>e.children),d=()=>o(!1),p=()=>o(x=>!x),h=x=>{const E=x.target;E!=null&&!n?.contains(E)&&d()},m=()=>{document.addEventListener("mousedown",h)},v=()=>{document.removeEventListener("mousedown",h)},_=()=>{if(t==null||n==null)return;const x=t?.getBoundingClientRect(),E=n?.getBoundingClientRect();let{top:k,left:C}=x;e.position==="left"?C-=x.width:e.position==="right"?C+=x.width:e.position==="top"?(k-=x.height,C-=x.left+x.width/2):(k+=x.height,C+=x.width/2),k=Math.min(k,window.innerHeight-E.height),C=Math.min(C,window.innerWidth-E.width),c({left:`${C}px`,top:`${k}px`})};return pr(()=>{i()?(m(),e.onOpen?.()):(v(),e.onClose?.())}),pr(ul(u,()=>{_()})),pr(()=>{i()&&_()}),kn(()=>{e.ref?.({close:d})}),Xr(()=>v()),(()=>{const x=mC(),E=x.firstChild,k=E.nextSibling;E.$$click=()=>{p(),_()};const C=t;typeof C=="function"?Zn(C,E):t=E,I(E,()=>e.button);const P=n;return typeof P=="function"?Zn(P,k):n=k,I(k,u),Le(B=>{const R=!i(),T=!!i(),L=a();return R!==B._v$&&k.classList.toggle("hidden",B._v$=R),T!==B._v$2&&k.classList.toggle("block",B._v$2=T),B._v$3=s4(k,L,B._v$3),B},{_v$:void 0,_v$2:void 0,_v$3:void 0}),x})()};bt(["click"]);const vC=M('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),yC=M('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),bC=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=vC(),i=n.firstChild;return i.$$click=t,I(i,()=>e.item.content()),n})()},sm=e=>{let t;const n=()=>t?.close();return w(pd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=yC();return I(i,w(Ht,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>w(bC,{item:o,onClose:n})})),i}})};bt(["click"]);function om(e){return e&&e.__esModule?e.default:e}function Rn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Il,he,am,Qs,lm,Yp,tl={},cm=[],_C=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function zr(e,t){for(var n in t)e[n]=t[n];return e}function um(e){var t=e.parentNode;t&&t.removeChild(e)}function Au(e,t,n){var i,o,a,c={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?Il.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return Pa(e,c,i,o,null)}function Pa(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++am};return o==null&&he.vnode!=null&&he.vnode(a),a}function ur(){return{current:null}}function rs(e){return e.children}function Wn(e,t){this.props=e,this.context=t}function is(e,t){if(t==null)return e.__?is(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?is(e):null}function dm(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return dm(e)}}function Jp(e){(!e.__d&&(e.__d=!0)&&Qs.push(e)&&!nl.__r++||Yp!==he.debounceRendering)&&((Yp=he.debounceRendering)||lm)(nl)}function nl(){for(var e;nl.__r=Qs.length;)e=Qs.sort(function(t,n){return t.__v.__b-n.__v.__b}),Qs=[],e.some(function(t){var n,i,o,a,c,u;t.__d&&(c=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=zr({},a)).__v=a.__v+1,gd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[c]:null,i,c??is(a),a.__h),gm(i,a),a.__e!=c&&dm(a)))})}function fm(e,t,n,i,o,a,c,u,d,p){var h,m,v,_,x,E,k,C=i&&i.__k||cm,P=C.length;for(n.__k=[],h=0;h<t.length;h++)if((_=n.__k[h]=(_=t[h])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?Pa(null,_,null,null,_):Array.isArray(_)?Pa(rs,{children:_},null,null,null):_.__b>0?Pa(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(v=C[h])===null||v&&_.key==v.key&&_.type===v.type)C[h]=void 0;else for(m=0;m<P;m++){if((v=C[m])&&_.key==v.key&&_.type===v.type){C[m]=void 0;break}v=null}gd(e,_,v=v||tl,o,a,c,u,d,p),x=_.__e,(m=_.ref)&&v.ref!=m&&(k||(k=[]),v.ref&&k.push(v.ref,null,_),k.push(m,_.__c||x,_)),x!=null?(E==null&&(E=x),typeof _.type=="function"&&_.__k===v.__k?_.__d=d=hm(_,d,e):d=pm(e,_,v,C,x,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=is(v))}for(n.__e=E,h=P;h--;)C[h]!=null&&(typeof n.type=="function"&&C[h].__e!=null&&C[h].__e==n.__d&&(n.__d=is(i,h+1)),vm(C[h],C[h]));if(k)for(h=0;h<k.length;h++)mm(k[h],k[++h],k[++h])}function hm(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?hm(i,t,n):pm(n,i,i,o,i.__e,t));return t}function rl(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){rl(n,t)}):t.push(e)),t}function pm(e,t,n,i,o,a){var c,u,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),c=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),c=a}return c!==void 0?c:o.nextSibling}function wC(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||il(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||il(e,a,t[a],n[a],i)}function eg(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||_C.test(t)?n:n+"px"}function il(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||eg(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||eg(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?ng:tg,a):e.removeEventListener(t,a?ng:tg,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function tg(e){this.l[e.type+!1](he.event?he.event(e):e)}function ng(e){this.l[e.type+!0](he.event?he.event(e):e)}function gd(e,t,n,i,o,a,c,u,d){var p,h,m,v,_,x,E,k,C,P,B,R=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(p=he.__b)&&p(t);try{e:if(typeof R=="function"){if(k=t.props,C=(p=R.contextType)&&i[p.__c],P=p?C?C.props.value:p.__:i,n.__c?E=(h=t.__c=n.__c).__=h.__E:("prototype"in R&&R.prototype.render?t.__c=h=new R(k,P):(t.__c=h=new Wn(k,P),h.constructor=R,h.render=$C),C&&C.sub(h),h.props=k,h.state||(h.state={}),h.context=P,h.__n=i,m=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),R.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=zr({},h.__s)),zr(h.__s,R.getDerivedStateFromProps(k,h.__s))),v=h.props,_=h.state,m)R.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(R.getDerivedStateFromProps==null&&k!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(k,P),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(k,h.__s,P)===!1||t.__v===n.__v){h.props=k,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),h.__h.length&&c.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(k,h.__s,P),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,_,x)})}h.context=P,h.props=k,h.state=h.__s,(p=he.__r)&&p(t),h.__d=!1,h.__v=t,h.__P=e,p=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(i=zr(zr({},i),h.getChildContext())),m||h.getSnapshotBeforeUpdate==null||(x=h.getSnapshotBeforeUpdate(v,_)),B=p!=null&&p.type===rs&&p.key==null?p.props.children:p,fm(e,Array.isArray(B)?B:[B],t,n,i,o,a,c,u,d),h.base=t.__e,t.__h=null,h.__h.length&&c.push(h),E&&(h.__E=h.__=null),h.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=xC(n.__e,t,n,i,o,a,c,d);(p=he.diffed)&&p(t)}catch(T){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),he.__e(T,t,n)}}function gm(e,t){he.__c&&he.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){he.__e(i,n.__v)}})}function xC(e,t,n,i,o,a,c,u){var d,p,h,m=n.props,v=t.props,_=t.type,x=0;if(_==="svg"&&(o=!0),a!=null){for(;x<a.length;x++)if((d=a[x])&&"setAttribute"in d==!!_&&(_?d.localName===_:d.nodeType===3)){e=d,a[x]=null;break}}if(e==null){if(_===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,v.is&&v),a=null,u=!1}if(_===null)m===v||u&&e.data===v||(e.data=v);else{if(a=a&&Il.call(e.childNodes),p=(m=n.props||tl).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!u){if(a!=null)for(m={},x=0;x<e.attributes.length;x++)m[e.attributes[x].name]=e.attributes[x].value;(h||p)&&(h&&(p&&h.__html==p.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(wC(e,v,m,o,u),h)t.__k=[];else if(x=t.props.children,fm(e,Array.isArray(x)?x:[x],t,n,i,o&&_!=="foreignObject",a,c,a?a[0]:n.__k&&is(n,0),u),a!=null)for(x=a.length;x--;)a[x]!=null&&um(a[x]);u||("value"in v&&(x=v.value)!==void 0&&(x!==m.value||x!==e.value||_==="progress"&&!x)&&il(e,"value",x,m.value,!1),"checked"in v&&(x=v.checked)!==void 0&&x!==e.checked&&il(e,"checked",x,m.checked,!1))}return e}function mm(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){he.__e(i,n)}}function vm(e,t,n){var i,o;if(he.unmount&&he.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||mm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){he.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&vm(i[o],t,typeof e.type!="function");n||e.__e==null||um(e.__e),e.__e=e.__d=void 0}function $C(e,t,n){return this.constructor(e,n)}function ym(e,t,n){var i,o,a;he.__&&he.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],gd(t,e=(!i&&n||t).__k=Au(rs,null,[e]),o||tl,tl,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Il.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),gm(a,e)}Il=cm.slice,he={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},am=0,Wn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=zr({},this.state),typeof e=="function"&&(e=e(zr({},n),this.props)),e&&zr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Jp(this))},Wn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Jp(this))},Wn.prototype.render=rs,Qs=[],lm=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,nl.__r=0;var kC=0;function z(e,t,n,i,o){var a,c,u={};for(c in t)c=="ref"?a=t[c]:u[c]=t[c];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--kC,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return he.vnode&&he.vnode(d),d}function CC(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function SC(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var qr={set:CC,get:SC};const ru=new Map,EC=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function TC(){for(const{v:e,emoji:t}of EC)if(bm(t))return e}function AC(){return!bm("🇨🇦")}function bm(e){if(ru.has(e))return ru.get(e);const t=IC(e);return ru.set(e,t),t}const IC=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,c=a.length;let u=0;for(;u<c&&!a[u+3];u+=4);if(u>=c)return!1;const d=n+u/4%n,p=Math.floor(u/4/n),h=e.getImageData(d,p,1,1).data;return!(a[u]!==h[0]||a[u+2]!==h[2]||e.measureText(o).width>=n)}})();var rg={latestVersion:TC,noCountryFlags:AC};const Iu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let It=null;function RC(e){It||(It=qr.get("frequently")||{});const t=e.id||e;t&&(It[t]||(It[t]=0),It[t]+=1,qr.set("last",t),qr.set("frequently",It))}function OC({maxFrequentRows:e,perLine:t}){if(!e)return[];It||(It=qr.get("frequently"));let n=[];if(!It){It={};for(let a in Iu.slice(0,t)){const c=Iu[a];It[c]=t-a,n.push(c)}return n}const i=e*t,o=qr.get("last");for(let a in It)n.push(a);if(n.sort((a,c)=>{const u=It[c],d=It[a];return u==d?a.localeCompare(c):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let c of a)c!=o&&delete It[c];o&&n.indexOf(o)==-1&&(delete It[n[n.length-1]],n.splice(-1,1,o)),qr.set("frequently",It)}return n}var _m={add:RC,get:OC,DEFAULTS:Iu},wm={};wm=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var hr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Pt=null,Be=null;const iu={};async function ig(e){if(iu[e])return iu[e];const n=await(await fetch(e)).json();return iu[e]=n,n}let su=null,xm=null,$m=!1;function Rl(e,{caller:t}={}){return su||(su=new Promise(n=>{xm=n})),e?LC(e):t&&!$m&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),su}async function LC(e){$m=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=hr.emojiVersion.value),n||(n=hr.set.value),i||(i=hr.locale.value),Be)Be.categories=Be.categories.filter(d=>!d.name);else{Be=(typeof e.data=="function"?await e.data():e.data)||await ig(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Be.emoticons={},Be.natives={},Be.categories.unshift({id:"frequent",emojis:[]});for(const d in Be.aliases){const p=Be.aliases[d],h=Be.emojis[p];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}Be.originalCategories=Be.categories}if(Pt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?om(wm):await ig(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const p=e.custom[d],h=e.custom[d-1];if(!(!p.emojis||!p.emojis.length)){p.id||(p.id=`custom_${d+1}`),p.name||(p.name=Pt.categories.custom),h&&!p.icon&&(p.target=h.target||h),Be.categories.push(p);for(const m of p.emojis)Be.emojis[m.id]=m}}e.categories&&(Be.categories=Be.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,p)=>{const h=e.categories.indexOf(d.id),m=e.categories.indexOf(p.id);return h-m}));let o=null,a=null;n=="native"&&(o=rg.latestVersion(),a=e.noCountryFlags||rg.noCountryFlags());let c=Be.categories.length,u=!1;for(;c--;){const d=Be.categories[c];if(d.id=="frequent"){let{maxFrequentRows:m,perLine:v}=e;m=m>=0?m:hr.maxFrequentRows.value,v||(v=hr.perLine.value),d.emojis=_m.get({maxFrequentRows:m,perLine:v})}if(!d.emojis||!d.emojis.length){Be.categories.splice(c,1);continue}const{categoryIcons:p}=e;if(p){const m=p[d.id];m&&!d.icon&&(d.icon=m)}let h=d.emojis.length;for(;h--;){const m=d.emojis[h],v=m.id?m:Be.emojis[m],_=()=>{d.emojis.splice(h,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){_();continue}if(o&&v.version>o){_();continue}if(a&&d.id=="flags"&&!jC.includes(v.id)){_();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([E,k])=>{if(E)return(Array.isArray(E)?E:[E]).map(C=>(k?C.split(/[-|_|\s]+/):[C]).map(P=>P.toLowerCase())).flat()}).flat().filter(E=>E&&E.trim()).join(","),v.emoticons)for(const E of v.emoticons)Be.emoticons[E]||(Be.emoticons[E]=v.id);let x=0;for(const E of v.skins){if(!E)continue;x++;const{native:k}=E;k&&(Be.natives[k]=v.id,v.search+=`,${k}`);const C=x==1?"":`:skin-tone-${x}:`;E.shortcodes=`:${v.id}:${C}`}}}}u&&qi.reset(),xm()}function km(e,t,n){e||(e={});const i={};for(let o in t)i[o]=Cm(o,e,t,n);return i}function Cm(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const PC=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Ru=null;function MC(e){return e.id?e:Be.emojis[e]||Be.emojis[Be.aliases[e]]||Be.emojis[Be.natives[e]]}function BC(){Ru=null}async function UC(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await Rl(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,p)=>u.trim()&&p.indexOf(u)==d);if(!i.length)return;let o=Ru||(Ru=Object.values(Be.emojis)),a,c;for(const u of i){if(!o.length)break;a=[],c={};for(const d of o){if(!d.search)continue;const p=d.search.indexOf(`,${u}`);p!=-1&&(a.push(d),c[d.id]||(c[d.id]=0),c[d.id]+=d.id==u?0:p+1)}o=a}return a.length<2||(a.sort((u,d)=>{const p=c[u.id],h=c[d.id];return p==h?u.id.localeCompare(d.id):p-h}),a.length>t&&(a=a.slice(0,t))),a}var qi={search:UC,get:MC,reset:BC,SHORTCODES_REGEX:PC};const jC=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function DC(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function NC(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function HC(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const zC={activity:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},FC={loupe:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var sl={categories:zC,search:FC};function Ou(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(qi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=qi.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),c=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${c})`,backgroundSize:`${100*Be.sheet.cols}% ${100*Be.sheet.rows}%`,backgroundPosition:`${100/(Be.sheet.cols-1)*o.x}% ${100/(Be.sheet.rows-1)*o.y}%`}})})}const WC=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Sm extends WC{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=Cm(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class ZC extends Sm{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var Em={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:hr.set,skin:hr.skin};class Tm extends Sm{async connectedCallback(){const t=km(this.props,Em,this);t.element=this,t.ref=n=>{this.component=n},await Rl(),!this.disconnected&&ym(z(Ou,{...t}),this)}constructor(t){super(t)}}Rn(Tm,"Props",Em);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Tm);var sg,Lu=[],og=he.__b,ag=he.__r,lg=he.diffed,cg=he.__c,ug=he.unmount;function qC(){var e;for(Lu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Lu.pop();)if(e.__P)try{e.__H.__h.forEach(Ma),e.__H.__h.forEach(Pu),e.__H.__h=[]}catch(t){e.__H.__h=[],he.__e(t,e.__v)}}he.__b=function(e){og&&og(e)},he.__r=function(e){ag&&ag(e);var t=e.__c.__H;t&&(t.__h.forEach(Ma),t.__h.forEach(Pu),t.__h=[])},he.diffed=function(e){lg&&lg(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Lu.push(t)!==1&&sg===he.requestAnimationFrame||((sg=he.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),dg&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);dg&&(i=requestAnimationFrame(o))})(qC))},he.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ma),n.__h=n.__h.filter(function(i){return!i.__||Pu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],he.__e(i,n.__v)}}),cg&&cg(e,t)},he.unmount=function(e){ug&&ug(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ma(i)}catch(o){t=o}}),t&&he.__e(t,n.__v))};var dg=typeof requestAnimationFrame=="function";function Ma(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Pu(e){e.__c=e.__()}function KC(e,t){for(var n in t)e[n]=t[n];return e}function fg(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function ol(e){this.props=e}(ol.prototype=new Wn).isPureReactComponent=!0,ol.prototype.shouldComponentUpdate=function(e,t){return fg(this.props,e)||fg(this.state,t)};var hg=he.__b;he.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),hg&&hg(e)};var GC=he.__e;he.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}GC(e,t,n)};var pg=he.unmount;function ou(){this.__u=0,this.t=null,this.__b=null}function Am(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Ea(){this.u=null,this.o=null}he.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),pg&&pg(e)},(ou.prototype=new Wn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Am(i.__v),a=!1,c=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=c;var u=function(){if(!--i.__u){if(i.state.__e){var p=i.state.__e;i.__v.__k[0]=function m(v,_,x){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(E){return m(E,_,x)}),v.__c&&v.__c.__P===_&&(v.__e&&x.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=x)),v}(p,p.__c.__P,p.__c.__O)}var h;for(i.setState({__e:i.__b=null});h=i.t.pop();)h.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(c,c)},ou.prototype.componentWillUnmount=function(){this.t=[]},ou.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(c,u,d){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(p){typeof p.__c=="function"&&p.__c()}),c.__c.__H=null),(c=KC({},c)).__c!=null&&(c.__c.__P===d&&(c.__c.__P=u),c.__c=null),c.__k=c.__k&&c.__k.map(function(p){return a(p,u,d)})),c}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Au(rs,null,e.fallback);return o&&(o.__h=null),[Au(rs,null,t.__e?null:e.children),o]};var gg=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Ea.prototype=new Wn).__e=function(e){var t=this,n=Am(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),gg(t,e,i)):o()};n?n(a):a()}},Ea.prototype.render=function(e){this.u=null,this.o=new Map;var t=rl(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ea.prototype.componentDidUpdate=Ea.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){gg(e,n,t)})};var VC=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,QC=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,XC=typeof document<"u",YC=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Wn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Wn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var mg=he.event;function JC(){}function eS(){return this.cancelBubble}function tS(){return this.defaultPrevented}he.event=function(e){return mg&&(e=mg(e)),e.persist=JC,e.isPropagationStopped=eS,e.isDefaultPrevented=tS,e.nativeEvent=e};var vg={configurable:!0,get:function(){return this.class}},yg=he.vnode;he.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var c=n[a];XC&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&c==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&c===!0?c="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!YC(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&QC.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():c===null&&(c=void 0),i[a]=c)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=rl(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=rl(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(vg.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",vg))}e.$$typeof=VC,yg&&yg(e)};var bg=he.__r;he.__r=function(e){bg&&bg(e),e.__c};const nS={light:"outline",dark:"solid"};class rS extends ol{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return z("img",{src:n.src})}const i=sl.categories[t.id]||sl.categories.custom,o=this.props.icons=="auto"?nS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Pt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:c=>c.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Be.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class iS extends ol{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const Ta={rowsPerRender:10};class sS extends Wn{getInitialState(t=this.props){return{skin:qr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Pt.rtl?"rtl":"ltr",this.refs={menu:ur(),navigation:ur(),scroll:ur(),search:ur(),searchInput:ur(),skinToneButton:ur(),skinToneRadio:ur()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Rl(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Be;this.refs.categories=new Map;const n=Be.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const c=[];c.__categoryId=a.id,c.__index=o.length,this.grid.push(c);const u=this.grid.length-1,d=u%Ta.rowsPerRender?{}:ur();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),c};for(let o of t){const a=[];let c=i(a,o);for(let u of o.emojis)c.length==this.getPerLine()&&(c=i(a,o)),this.grid.setsize+=1,c.push(u);this.refs.categories.set(o.id,{root:ur(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:c}=n.getBoundingClientRect();return Math.floor(c/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return qi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=c=>{c!=t.state.categoryId&&t.setState({categoryId:c})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(c=>{for(const d of c){const p=d.target.dataset.id;n.set(p,d.intersectionRatio)}const u=[...n];for(const[d,p]of u)if(p){i(d);break}},o);for(const{root:c}of this.refs.categories.values())a.observe(c.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Ta.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Ta.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:c}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,p]=this.state.pos;const h=(()=>{if(d==0&&p==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||c)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let m=u[d];const v=i?-1:1;if(p+=v,!m[p]){if(d+=v,m=u[d],!m)return d=i?0:u.length-1,p=i?0:u[d].length-1,[d,p];p=i?m.length-1:0}return[d,p]}if(a||c){d+=a?-1:1;const m=u[d];return m?(m[p]||(p=m.length-1),[d,p]):(d=a?0:u.length-1,p=a?0:u[d].length-1,[d,p])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let c=0;if(n>=0&&(t=i[n].__categoryId),t&&(c=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)c=0;else{const u=i[n].__index,d=c+u*this.props.emojiButtonSize,p=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)c=d;else if(p>o.scrollTop+a.height)c=p-a.height;else return}this.ignoreMouse(),o.scrollTop=c}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=HC(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&_m.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),qr.set("skin",t)}renderNav(){return z(rS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[z("div",{class:"flex flex-middle flex-grow",children:[z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:z(Ou,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),z("div",{class:`margin-${this.dir[0]}`,children:t||n?z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[z("div",{class:"preview-title ellipsis",children:t?t.name:Pt.search_no_results_1}),z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Pt.search_no_results_2})]}):z("div",{class:"preview-placeholder color-c",children:Pt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,c=this.state.tempSkin||this.state.skin,d=(t.skins[c-1]||t.skins[0]).native,p=DC(this.state.pos,n),h=n.concat(t.id).join("");return z(iS,{selected:p,skin:c,size:a,children:z("button",{"aria-label":d,"aria-selected":p||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:m=>this.handleEmojiClick({e:m,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),z(Ou,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:c,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return z("div",{children:[z("div",{class:"spacer"}),z("div",{class:"flex flex-middle",children:[z("div",{class:"search relative flex-grow",children:[z("input",{type:"search",ref:this.refs.searchInput,placeholder:Pt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),z("span",{class:"icon loupe flex",children:sl.search.loupe}),this.state.searchResults&&z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:sl.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?z("div",{class:"category",ref:this.refs.search,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Pt.categories.search}),z("div",{children:t.length?t.map((n,i)=>z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&z("a",{onClick:this.props.onAddCustomEmoji,children:Pt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Be,n=!!this.state.searchResults,i=this.getPerLine();return z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:c}=this.refs.categories.get(o.id);return z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Pt.categories[o.id]}),z("div",{class:"relative",style:{height:c.length*this.props.emojiButtonSize},children:c.map((u,d)=>{const p=u.index-u.index%Ta.rowsPerRender,h=this.state.visibleRows[p],m="current"in u?u:void 0;if(!h&&!m)return null;const v=d*i,_=v+i,x=o.emojis.slice(v,_);return x.length<i&&x.push(...new Array(i-x.length)),z("div",{"data-index":u.index,ref:m,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&x.map((E,k)=>{if(!E)return z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=qi.get(E);return this.renderEmojiButton(C,{pos:[u.index,k],posinset:u.posinset+k,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Pt.skins.choose,title:Pt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Pt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const c=a+1,u=this.state.skin==c;return z("div",{children:[z("input",{type:"radio",name:"skin-tone",value:c,"aria-label":Pt.skins[c],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(c),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(c))}}),z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(c),onMouseEnter:()=>this.handleSkinMouseOver(c),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[z("span",{class:`skin-tone skin-tone-${c}`}),z("span",{class:"margin-small-lr",children:Pt.skins[c]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&z("div",{class:"padding-lr",children:this.renderSearch()}),z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),Rn(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Rn(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Rn(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Rn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Rn(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await qi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const c=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let p of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(p);this.ignoreMouse(),this.setState({searchResults:u,pos:c},a)}),Rn(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Rn(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Rn(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Rn(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await NC(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class md extends ZC{async connectedCallback(){const t=km(this.props,hr,this);t.element=this,t.ref=n=>{this.component=n},await Rl(t),!this.disconnected&&ym(z(sS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:om(Im)})}}Rn(md,"Props",hr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",md);var Im={};Im=`:host {
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

`;const oS=e=>{let t;const[n,i]=$e(void 0);return w(pd,{ref:c=>{t=c},position:"bottom",get button(){return e.children},onOpen:()=>{const c=new md({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(c)},onClose:()=>{i(void 0)},get children(){return n()}})},aS=M("<div>"),lS=M('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),cS=M("<br>"),uS=M("<span>理由: "),dS=M('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),fS=e=>{const[t,n]=$e(!1);return w(le,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=dS();return i.firstChild,i.$$click=()=>n(!0),I(i,w(le,{get when(){return e.contentWarning.reason!=null},get children(){return[cS(),(()=>{const o=uS();return o.firstChild,I(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=aS();return I(i,()=>e.children),i})(),w(le,{get when(){return e.contentWarning.contentWarning},get children(){const i=lS();return i.$$click=()=>n(!1),i}})]}})};bt(["click"]);const Rm=e=>{const{profile:t}=ms(()=>({pubkey:e.pubkey}));return w(le,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Tl(e.pubkey)}`},get children(){return["@",Ge(()=>t()?.name??e.pubkey)]}})},hS=M('<a target="_blank" rel="noreferrer noopener">'),vd=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return w(le,{get when(){return t()},get fallback(){return e.href},get children(){const n=hS();return I(n,()=>e.children??e.href),Le(i=>{const o=e.class,a=e.href;return o!==i._v$&&o4(n,i._v$=o),a!==i._v$2&&yt(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},pS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},gS=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},mS=M('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),vS=M('<canvas class="inline-block max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),yS=M('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),bS=e=>{let t,n;const[i,o]=$e(e.initialHidden),[a,c]=$e(!0),u=()=>{c(!0)};return w(le,{get when(){return!i()},get fallback(){return(()=>{const d=yS();return d.$$click=()=>o(!1),d})()},get children(){return w(vd,{class:"my-2 block",get href(){return e.url},get children(){return[(()=>{const d=mS(),p=t;return typeof p=="function"?Zn(p,d):t=d,Le(h=>{const m=!!a(),v=!a(),_=a()?gS(e.url):void 0,x=e.url;return m!==h._v$&&d.classList.toggle("inline-block",h._v$=m),v!==h._v$2&&d.classList.toggle("hidden",h._v$2=v),_!==h._v$3&&yt(d,"src",h._v$3=_),x!==h._v$4&&yt(d,"alt",h._v$4=x),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})(),(()=>{const d=vS();d.$$click=h=>{h.preventDefault(),u()};const p=n;return typeof p=="function"?Zn(p,d):n=d,Le(h=>{const m=!!a(),v=!!a(),_=!a(),x=!a();return m!==h._v$5&&d.classList.toggle("w-0",h._v$5=m),v!==h._v$6&&d.classList.toggle("h-0",h._v$6=v),_!==h._v$7&&d.classList.toggle("w-auto",h._v$7=_),x!==h._v$8&&d.classList.toggle("h-auto",h._v$8=x),h},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),d})()]}})}})};bt(["click"]);const _S=M('<div class="my-1 rounded border p-1">'),wS=e=>w(le,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return w(no,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=_S();return I(t,w(go,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[wt.Text]}})),t}}),xS=M('<button class="inline text-blue-500 underline">'),au=e=>{const{showProfile:t}=ei(),n=()=>{t(e.pubkey)};return(()=>{const i=xS();return i.$$click=n,I(i,w(Rm,{get pubkey(){return e.pubkey}})),i})()};bt(["click"]);const[yd,$S]=$e({}),Om=e=>{yd()[e]==null&&$S(t=>({...t,[e]:new MessageChannel}))},kS=e=>{const t=()=>yd()[e().id],n=(o,a)=>{const c={requestId:o,request:a};t().port1.postMessage(c)},i=(o,a=1e3)=>new Promise((c,u)=>{let d;const p=h=>{const m=h.data;m.requestId===o&&(t().port1.removeEventListener("message",p),m.ok?c(m.response):u(m.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",p),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",p,!1),t().port1.start()});return kn(()=>{const{id:o}=e();Om(o)}),async o=>{const a=Math.random().toString(),c=i(a);return n(a,o),c}},CS=e=>{const t=Ge(e),n=()=>yd()[t().id];kn(()=>{const{id:i}=t();Om(i);const o=n().port2,a=c=>{const{requestId:u,request:d}=c.data,p=t().handler(d);(p instanceof Promise?p:Promise.resolve(p)).then(m=>{const v={requestId:u,ok:!0,response:m};o.postMessage(v)}).catch(m=>{const v={requestId:u,ok:!1,error:m};o.postMessage(v)})};o.addEventListener("message",a),o.start(),Xr(()=>{o.removeEventListener("message",a)})})},Co=()=>kS(()=>({id:"CommandChannel"})),Mu=e=>{CS(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},{decode:SS}=xo,ES=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,TS=/(?:#\[(?<idx>\d+)\])/g,AS=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent)1[ac-hj-np-z02-9]+))/gi,IS=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,RS=/:(?<emoji>\w+):/gu,Lm=e=>{const t=[...e.matchAll(ES),...e.matchAll(TS),...e.matchAll(AS),...e.matchAll(IS),...e.matchAll(RS)].sort((a,c)=>a.index-c.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const c=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=c;else{const d={type:"PlainText",content:c};i.push(d)}n=a}};return t.forEach(a=>{const{index:c}=a;if(!(c<n)){if(a.groups?.url){o(c);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(c),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(c);try{const u=SS(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(c+a[0].length)}}else if(a.groups?.hashtag){o(c);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(c);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=c+a[0].length}}),n<e.length&&o(e.length),i},OS=({tagIndex:e,content:t},n)=>{const i=n.tags[e];if(i==null)return null;const o=i[0];if(o==="p"&&Vs(i[1]))return{type:"MentionedUser",tagIndex:e,content:t,pubkey:i[1]};if(o==="e"&&Vs(i[1])){const a=$n(n).markedEventTags().find(c=>c.index===e);return{type:"MentionedEvent",tagIndex:e,content:t,eventId:i[1],marker:a?.marker}}return null},lu=M("<span>"),_g=M('<div class="my-1 rounded border p-1">'),LS=M('<span class="text-blue-500 underline">'),PS=M('<button class="text-blue-500 underline">'),MS=M('<img class="inline-block h-8 max-w-[128px] align-middle">'),BS=e=>{const{config:t,saveColumn:n}=De(),i=Co(),o=()=>$n(e.event),a=c=>{n(dd({query:c})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return w(Ht,{get each(){return Lm(e.event.content)},children:c=>{if(c.type==="PlainText")return(()=>{const u=lu();return I(u,()=>c.content),u})();if(c.type==="URL")return pS(c.content)?w(bS,{get url(){return c.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):w(vd,{class:"text-blue-500 underline",get href(){return c.content}});if(c.type==="TagReference"){const u=OS(c,e.event);if(u==null)return(()=>{const d=lu();return I(d,()=>c.content),d})();if(u.type==="MentionedUser")return w(au,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?w(wS,{mentionedEvent:u}):w(no,{get eventId(){return u.eventId}})}if(c.type==="Bech32Entity")return c.data.type==="note"&&e.embedding?(()=>{const u=_g();return I(u,w(go,{get eventId(){return c.data.data},actions:!1,embedding:!1,get ensureKinds(){return[wt.Text]}})),u})():c.data.type==="nevent"&&e.embedding?(()=>{const u=_g();return I(u,w(go,{get eventId(){return c.data.data.id},actions:!1,embedding:!1})),u})():c.data.type==="npub"?w(au,{get pubkey(){return c.data.data}}):c.data.type==="nprofile"?w(au,{get pubkey(){return c.data.data.pubkey}}):(()=>{const u=LS();return I(u,()=>c.content),u})();if(c.type==="HashTag")return(()=>{const u=PS();return u.$$click=()=>a(c.content),I(u,()=>c.content),u})();if(c.type==="CustomEmoji"){const u=o().getEmojiUrl(c.shortcode);return u==null?(()=>{const d=lu();return I(d,()=>c.content),d})():(()=>{const d=MS();return yt(d,"src",u),Le(()=>yt(d,"alt",c.content)),d})()}return console.error("Not all ParsedTextNoteNodes are covered",c),null}})};bt(["click"]);const US=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),jS=(e={})=>(()=>{const t=US();return st(t,e,!0,!0),t})(),DS=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),ss=(e={})=>(()=>{const t=DS();return st(t,e,!0,!0),t})(),NS=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),HS=(e={})=>(()=>{const t=NS();return st(t,e,!0,!0),t})(),zS=e=>Math.floor(+e/1e3),dr=()=>zS(new Date),FS=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),WS=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:c,tags:u})=>{const d=[],p=e?.map(m=>["p",m])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),n?.forEach(m=>d.push(["e",m,"","mention"])),i!=null&&d.push(["e",i,"","reply"]),a?.forEach(m=>h.push(["t",m])),c?.forEach(m=>h.push(["r",m])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...p,...h]},Ol=()=>{const e=El(),t=async(d,p)=>{const h={...p};if(h.id=E1(h),window.nostr==null)throw new Error("NIP-07 implementation not found");const m=await window.nostr.signEvent(h);return d.map(async v=>{const x=(await e().ensureRelay(v)).publish(m);return FS(x,v)})};return{publishTextNote:async d=>{const{relayUrls:p,pubkey:h,content:m}=d,v=WS(d),_={kind:1,pubkey:h,created_at:dr(),tags:v,content:m};return t(p,_)},publishReaction:async({relayUrls:d,pubkey:p,eventId:h,content:m,notifyPubkey:v})=>{const _={kind:7,pubkey:p,created_at:dr(),tags:[["e",h,""],["p",v]],content:m};return t(d,_)},publishRepost:async({relayUrls:d,pubkey:p,eventId:h,notifyPubkey:m})=>{const v={kind:6,pubkey:p,created_at:dr(),tags:[["e",h,""],["p",m]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:p,profile:h,otherProperties:m})=>{const v={...h,...m},_={kind:wt.Metadata,pubkey:p,created_at:dr(),tags:[],content:JSON.stringify(v)};return t(d,_)},updateContacts:async({relayUrls:d,pubkey:p,followingPubkeys:h,content:m})=>{const v=h.map(x=>["p",x]),_={kind:wt.Contacts,pubkey:p,created_at:dr(),tags:v,content:m};return t(d,_)},deleteEvent:async({relayUrls:d,pubkey:p,eventId:h})=>{const m={kind:wt.EventDeletion,pubkey:p,created_at:dr(),tags:[["e",h,""]],content:""};return t(d,m)}}};let cu=!1;const[Aa,ZS]=$e(void 0),_r=()=>(kn(()=>{if(Aa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),Aa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Aa()==null&&!cu&&(cu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),ZS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{cu=!1})),e+=1},200)}),Aa),qS=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},KS=e=>t=>Promise.allSettled(t.map(n=>e(n))),GS=M("<div>に返信"),VS=M('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),QS=M('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),XS=M('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),YS=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},JS=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(c=>{c.type==="URL"?o.push(c.content):c.type==="HashTag"?t.push(c.tagName):c.type==="Bech32Entity"?c.data.type==="npub"?n.push(c.data.data):c.data.type==="note"&&i.push(c.data.data):c.type==="CustomEmoji"&&!a.includes(c.shortcode)&&a.push(c.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},eE=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},Pm=e=>{let t,n;const[i,o]=$e(""),[a,c]=$e(!1),[u,d]=$e(""),p=ce=>o(ye=>`${ye} ${ce}`),h=()=>{o(""),d(""),c(!1)},m=()=>{t?.blur(),h(),e.onClose()},{config:v,getEmoji:_}=De(),x=_r(),E=Ol(),k=()=>e.replyTo&&$n(e.replyTo),C=()=>e.mode??"normal",P=pi({mutationKey:["publishTextNote"],mutationFn:E.publishTextNote.bind(E),onSuccess:()=>{console.log("succeeded to post"),h(),e.onPost?.()},onError:ce=>{console.error("error",ce)}}),B=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},R=pi({mutationKey:["uploadFiles"],mutationFn:ce=>KS(qS)(ce).then(ye=>{ye.forEach(K=>{K.status==="fulfilled"?(console.log("succeeded to upload",K),p(K.value.imageUrl),B()):console.error("failed to upload",K)})}).catch(ye=>console.error(ye))}),T=Ge(()=>k()?.mentionedPubkeysWithoutAuthor()??[]),L=Ge(()=>T().filter(ce=>ce!==x())),H=(ce,ye)=>e.replyTo==null?ye:Fr([e.replyTo.pubkey,...L(),...ye]),W=ce=>{const ye=[];return ce.forEach(K=>{const Pe=_(K);Pe!=null&&ye.push(["emoji",K,Pe.url])}),ye},se=()=>{if(i().length===0||P.isLoading)return;const ce=x();if(ce==null){console.error("pubkey is not available");return}const ye=Lm(i()),{hashtags:K,urlReferences:Pe,pubkeyReferences:Ye,eventReferences:kt,emojis:ot}=JS(ye),Bt=eE(ye),un=W(ot);let G={relayUrls:v().relayUrls,pubkey:ce,content:Bt,notifyPubkeys:Ye,mentionEventIds:kt,hashtags:K,urls:Pe,tags:un};k()!=null&&(G={...G,notifyPubkeys:H(ce,Ye),rootEventId:k()?.rootEvent()?.id??k()?.id,replyEventId:k()?.id}),a()&&(G={...G,contentWarning:u()}),P.mutate(G),m()},V=ce=>{o(ce.currentTarget.value),B()},re=ce=>{ce.preventDefault(),se()},Z=ce=>{ce.key==="Enter"&&(ce.ctrlKey||ce.metaKey)?se():ce.key==="Escape"&&(t?.blur(),m())},X=ce=>{ce.preventDefault();const ye=[...ce.currentTarget.files??[]];R.mutate(ye),ce.currentTarget.value=""},oe=ce=>{if(ce.preventDefault(),R.isLoading)return;const ye=[...ce?.dataTransfer?.files??[]];R.mutate(ye)},Ze=ce=>{if(R.isLoading)return;const ye=[...ce?.clipboardData?.items??[]],K=[];ye.forEach(Pe=>{if(Pe.kind==="file"){ce.preventDefault();const Ye=Pe.getAsFile();if(Ye==null)return;K.push(Ye)}}),K.length!==0&&R.mutate(K)},J=ce=>{ce.preventDefault()},ve=()=>i().trim().length===0||P.isLoading||R.isLoading,ke=()=>R.isLoading;return kn(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const ce=XS(),ye=ce.firstChild,K=ye.firstChild,Pe=K.nextSibling,Ye=Pe.firstChild,kt=Ye.nextSibling,ot=kt.nextSibling,Bt=Pe.nextSibling;I(ce,w(le,{get when(){return T().length>0},get children(){const G=GS(),ie=G.firstChild;return I(G,w(Ht,{get each(){return T()},children:_t=>[w(Al,{pubkey:_t})," "]}),ie),G}}),ye),ye.addEventListener("submit",re),I(ye,w(le,{get when(){return a()},get children(){const G=VS();return G.$$input=ie=>d(ie.currentTarget.value),Le(()=>G.value=u()),G}}),K),K.addEventListener("paste",Ze),K.addEventListener("drop",oe),K.addEventListener("dragover",J),K.$$keydown=Z,K.$$input=V,Zn(G=>{t=G,e.textAreaRef?.(G)},K),I(Pe,w(le,{get when(){return C()==="reply"},get children(){const G=QS(),ie=G.firstChild;return ie.$$click=()=>m(),I(ie,w(ss,{})),G}}),Ye),Ye.$$click=()=>c(G=>!G),kt.$$click=()=>n?.click(),I(kt,w(jS,{})),I(ot,w(HS,{})),Bt.addEventListener("change",X);const un=n;return typeof un=="function"?Zn(un,Bt):n=Bt,Le(G=>{const ie=YS(C()),_t=!a(),gt=!!a(),Rt=C()==="normal",Nn=C()==="normal",at=C()==="reply",Wt=C()==="reply",xr=!!ke(),ht=!ke(),Ut=C()==="normal",er=C()==="normal",be=C()==="reply",ze=C()==="reply",lt=ke(),Ct=!!ve(),Xt=!ve(),ue=C()==="normal",dn=C()==="normal",Oe=C()==="reply",nt=C()==="reply",Zt=ve();return ie!==G._v$&&yt(K,"placeholder",G._v$=ie),_t!==G._v$2&&Ye.classList.toggle("bg-rose-300",G._v$2=_t),gt!==G._v$3&&Ye.classList.toggle("bg-rose-400",G._v$3=gt),Rt!==G._v$4&&Ye.classList.toggle("h-8",G._v$4=Rt),Nn!==G._v$5&&Ye.classList.toggle("w-8",G._v$5=Nn),at!==G._v$6&&Ye.classList.toggle("h-7",G._v$6=at),Wt!==G._v$7&&Ye.classList.toggle("w-7",G._v$7=Wt),xr!==G._v$8&&kt.classList.toggle("bg-primary-disabled",G._v$8=xr),ht!==G._v$9&&kt.classList.toggle("bg-primary",G._v$9=ht),Ut!==G._v$10&&kt.classList.toggle("h-8",G._v$10=Ut),er!==G._v$11&&kt.classList.toggle("w-8",G._v$11=er),be!==G._v$12&&kt.classList.toggle("h-7",G._v$12=be),ze!==G._v$13&&kt.classList.toggle("w-7",G._v$13=ze),lt!==G._v$14&&(kt.disabled=G._v$14=lt),Ct!==G._v$15&&ot.classList.toggle("bg-primary-disabled",G._v$15=Ct),Xt!==G._v$16&&ot.classList.toggle("bg-primary",G._v$16=Xt),ue!==G._v$17&&ot.classList.toggle("h-8",G._v$17=ue),dn!==G._v$18&&ot.classList.toggle("w-8",G._v$18=dn),Oe!==G._v$19&&ot.classList.toggle("h-7",G._v$19=Oe),nt!==G._v$20&&ot.classList.toggle("w-7",G._v$20=nt),Zt!==G._v$21&&(ot.disabled=G._v$21=Zt),G},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Le(()=>K.value=i()),ce})()};bt(["input","keydown","click"]);const Mm=a4(),tE=()=>l4(Mm),nE=()=>{const[e,t]=Ki({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},rE=M('<div class="flex gap-2 py-1">'),iE=M('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),sE=M('<span class="ml-1 text-sm">'),oE=M('<button class="flex h-6 items-center rounded border px-1" type="button">'),aE=M('<span class="text-base">'),lE=M('<span class="text-red-500">削除'),cE=M('<img alt="icon" class="h-full w-full rounded object-cover">'),uE=M('<div class="author-name truncate pr-1 font-bold hover:underline">'),dE=M('<div class="text-xs">への返信'),fE=M('<div class="content whitespace-pre-wrap break-all">'),hE=M('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),wg=M('<div class="text-sm text-zinc-400">'),pE=M('<span class="inline-block h-4 w-4">'),gE=M('<div class="flex shrink-0 items-center gap-1">'),mE=M('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),vE=M('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),yE=M('<div class="nostr-textnote flex flex-col"><div class="flex w-full gap-1"><button class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></button><div class="created-at shrink-0"><a type="button" class="hover:underline"></a></div></div><div class="overflow-hidden">'),bE=M('<div class="mt-1 rounded border p-1">'),_E=M('<button class="pr-1 text-blue-500 hover:underline">'),{noteEncode:xg}=xo,wE=e=>{const{config:t}=De(),n=_r();return(()=>{const i=rE();return I(i,w(Ht,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const c=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=oE();return u.$$click=()=>e.onReaction(o),I(u,w(le,{when:o==="+",get fallback(){return(()=>{const d=aE();return I(d,o),d})()},get children(){const d=iE();return I(d,w(hd,{})),d}}),null),I(u,w(le,{get when(){return!t().hideCount},get children(){const d=sE();return I(d,()=>a.length),d}}),null),Le(d=>qs(u,{"text-zinc-400":!c,"hover:bg-zinc-50":!c,"bg-rose-50":c,"border-rose-200":c,"text-rose-400":c},d)),u})()}})),i})()},Bm=e=>{let t;const{config:n}=De(),i=tm(),o=_r(),{showProfile:a}=ei(),c=tE(),[u,d]=$e(!1),[p,h]=$e(!1),[m,v]=$e(!1),_=()=>v(!1),[x,E]=$e(!1),[k,C]=$e(!1),P=Ge(()=>$n(e.event)),B=()=>e.embedding??!0,R=()=>e.actions??!0,{profile:T}=ms(()=>({pubkey:e.event.pubkey})),{reactions:L,reactionsGroupedByContent:H,isReactedBy:W,isReactedByWithEmoji:se,invalidateReactions:V,query:re}=Qk(()=>({eventId:e.event.id})),{reposts:Z,isRepostedBy:X,invalidateReposts:oe,query:Ze}=Xk(()=>({eventId:e.event.id})),J=Ol(),ve=pi({mutationKey:["publishReaction",P().id],mutationFn:J.publishReaction.bind(J),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:ie=>{console.error("failed to publish reaction: ",ie)},onSettled:()=>{V().then(()=>re.refetch()).catch(ie=>console.error("failed to refetch reactions",ie))}}),ke=pi({mutationKey:["publishRepost",P().id],mutationFn:J.publishRepost.bind(J),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:ie=>{console.error("failed to publish repost: ",ie)},onSettled:()=>{oe().then(()=>Ze.refetch()).catch(ie=>console.error("failed to refetch reposts",ie))}}),ce=pi({mutationKey:["deleteEvent",P().id],mutationFn:(...ie)=>J.deleteEvent(...ie).then(_t=>Promise.allSettled(_t.map(Jr(1e4)))),onSuccess:ie=>{const _t=ie.filter(Rt=>Rt.status==="fulfilled").length,gt=ie.length-_t;_t===ie.length?window.alert("削除しました（画面の反映にはリロード）"):_t>0?window.alert(`${gt}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:ie=>{console.error("failed to delete",ie)}}),ye=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(xg(e.event.id)).catch(ie=>window.alert(ie))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event)).catch(ie=>window.alert(ie))}},{when:()=>P().pubkey===o(),content:()=>lE(),onSelect:()=>{const ie=o();ie!=null&&window.confirm("本当に削除しますか？")&&ce.mutate({relayUrls:n().relayUrls,pubkey:ie,eventId:P().id})}}],K=Ge(()=>{const ie=o();return ie!=null&&W(ie)||u()}),Pe=Ge(()=>{const ie=o();return ie!=null&&se(ie)}),Ye=Ge(()=>{const ie=o();return ie!=null&&X(ie)||p()}),kt=()=>{const ie=P().replyingToEvent();if(B()&&ie!=null&&!P().containsEventMentionIndex(ie.index))return ie.id},ot=()=>i(P().createdAtAsDate()),Bt=ie=>{ie.stopPropagation(),!Ye()&&ln([o(),e.event.id])(([_t,gt])=>{ke.mutate({relayUrls:n().relayUrls,pubkey:_t,eventId:gt,notifyPubkey:e.event.pubkey}),h(!0)})},un=ie=>{K()||ln([o(),e.event.id])(([_t,gt])=>{ve.mutate({relayUrls:n().relayUrls,pubkey:_t,content:ie??"+",eventId:gt,notifyPubkey:e.event.pubkey}),d(!0)})},G=ie=>{ie.stopPropagation(),un()};return kn(()=>{t!=null&&C(t.scrollHeight>t.clientHeight)}),(()=>{const ie=yE(),_t=ie.firstChild,gt=_t.firstChild,Rt=gt.nextSibling,Nn=Rt.firstChild,at=Nn.firstChild,Wt=at.firstChild,xr=at.nextSibling,ht=xr.firstChild,Ut=Nn.nextSibling;gt.$$click=be=>{be.stopPropagation(),a(P().pubkey)},I(gt,w(le,{get when(){return T()?.picture},get children(){const be=cE();return Le(()=>yt(be,"src",T()?.picture)),be}})),at.$$click=be=>{be.stopPropagation(),a(P().pubkey)},I(at,w(le,{get when(){return(T()?.display_name?.length??0)>0},get children(){const be=uE();return I(be,()=>T()?.display_name),be}}),Wt),I(Wt,w(le,{get when(){return T()?.name!=null},get fallback(){return`@${Tl(P().pubkey)}`},get children(){return["@",Ge(()=>T()?.name)]}})),ht.$$click=be=>{be.preventDefault(),c?.setTimeline({type:"Replies",event:e.event})},I(ht,ot);const er=t;return typeof er=="function"?Zn(er,Ut):t=Ut,I(Ut,w(le,{get when(){return kt()},keyed:!0,children:be=>(()=>{const ze=bE();return I(ze,w(go,{eventId:be,actions:!1,embedding:!1})),ze})()}),null),I(Ut,w(le,{get when(){return P().mentionedPubkeys().length>0},get children(){const be=dE(),ze=be.firstChild;return I(be,w(Ht,{get each(){return P().mentionedPubkeys()},children:lt=>(()=>{const Ct=_E();return Ct.$$click=Xt=>{Xt.stopPropagation(),a(lt)},I(Ct,w(Rm,{pubkey:lt})),Ct})()}),ze),be}}),null),I(Ut,w(fS,{get contentWarning(){return P().contentWarning()},get children(){const be=fE();return I(be,w(BS,{get event(){return e.event},get embedding(){return B()}})),be}}),null),I(Rt,w(le,{get when(){return k()},get children(){const be=hE();return be.$$click=ze=>{ze.stopPropagation(),E(lt=>!lt)},I(be,w(le,{get when(){return!x()},fallback:"隠す",children:"続きを読む"})),be}}),null),I(Rt,w(le,{get when(){return R()},get children(){return[w(le,{get when(){return Ge(()=>!!n().showEmojiReaction)()&&L().length>0},get children(){return w(wE,{get reactionsGroupedByContent(){return H()},onReaction:un})}}),(()=>{const be=vE(),ze=be.firstChild,lt=ze.nextSibling,Ct=lt.firstChild,Xt=lt.nextSibling,ue=Xt.firstChild,dn=Xt.nextSibling;return ze.$$click=Oe=>{Oe.stopPropagation(),v(nt=>!nt)},I(ze,w(dC,{})),Ct.$$click=Bt,I(Ct,w(P1,{})),I(lt,w(le,{get when(){return Ge(()=>!n().hideCount)()&&Z().length>0},get children(){const Oe=wg();return I(Oe,()=>Z().length),Oe}}),null),ue.$$click=G,I(ue,w(le,{get when(){return Ge(()=>!!K())()&&!Pe()},get fallback(){return w(fd,{})},get children(){return w(hd,{})}})),I(Xt,w(le,{get when(){return Ge(()=>!n().hideCount&&!n().showEmojiReaction)()&&L().length>0},get children(){const Oe=wg();return I(Oe,()=>L().length),Oe}}),null),I(be,w(le,{get when(){return n().useEmojiReaction},get children(){const Oe=gE();return I(Oe,w(oS,{onEmojiSelect:nt=>un(nt),get children(){const nt=pE();return I(nt,w(im,{})),nt}})),Le(nt=>qs(Oe,{"text-zinc-400":!K()||!Pe(),"hover:text-rose-400":!K()||!Pe(),"text-rose-400":K()&&Pe()||ve.isLoading},nt)),Oe}}),dn),I(dn,w(sm,{menu:ye,get children(){const Oe=mE();return I(Oe,w(rm,{})),Oe}})),Le(Oe=>{const nt={"text-zinc-400":!Ye(),"hover:text-green-400":!Ye(),"text-green-400":Ye()||ke.isLoading},Zt=ke.isLoading,Cn={"text-zinc-400":!K()||Pe(),"hover:text-rose-400":!K()||Pe(),"text-rose-400":K()&&!Pe()||ve.isLoading},fn=ve.isLoading;return Oe._v$=qs(lt,nt,Oe._v$),Zt!==Oe._v$2&&(Ct.disabled=Oe._v$2=Zt),Oe._v$3=qs(Xt,Cn,Oe._v$3),fn!==Oe._v$4&&(ue.disabled=Oe._v$4=fn),Oe},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),be})()]}}),null),I(ie,w(le,{get when(){return m()},get children(){return w(Pm,{mode:"reply",get replyTo(){return e.event},onClose:_,onPost:_})}}),null),Le(be=>{const ze=`nostr:${xg(P().id)}`,lt=!x();return ze!==be._v$5&&yt(ht,"href",be._v$5=ze),lt!==be._v$6&&Ut.classList.toggle("max-h-screen",be._v$6=lt),be},{_v$5:void 0,_v$6:void 0}),ie})()};bt(["click"]);const Um=e=>{const{shouldMuteEvent:t}=De();return w(le,{get when(){return!t(e.event)},get children(){return w(Bm,e)}})},xE=M("<span>予期しないイベント種別（<!>）"),$E=M("<span><span>未対応のイベント種別（<!>）"),jm=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return w(Pn,{get fallback(){return(()=>{const n=$E(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,I(i,()=>e.event.kind,a),I(n,w(no,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[w(Fe,{get when(){return!t()},keyed:!0,get children(){const n=xE(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,I(n,()=>e.event.kind,o),I(n,w(no,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),w(Fe,{get when(){return e.event.kind===wt.Text},get children(){return w(Um,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),w(Fe,{get when(){return e.event.kind===6},get children(){return w(nm,{get event(){return e.event}})}})]}})},vs=e=>{const{shouldMuteEvent:t}=De();return w(Ht,{get each(){return e.events},children:n=>w(le,{get when(){return!t(n)},get children(){return w(Ra,{get children(){return w(jm,{event:n})}})}})})};var kE=gl;function CE(){this.__data__=new kE,this.size=0}var SE=CE;function EE(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var TE=EE;function AE(e){return this.__data__.get(e)}var IE=AE;function RE(e){return this.__data__.has(e)}var OE=RE,LE=gl,PE=Zu,ME=qu,BE=200;function UE(e,t){var n=this.__data__;if(n instanceof LE){var i=n.__data__;if(!PE||i.length<BE-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new ME(i)}return n.set(e,t),this.size=n.size,this}var jE=UE,DE=gl,NE=SE,HE=TE,zE=IE,FE=OE,WE=jE;function ys(e){var t=this.__data__=new DE(e);this.size=t.size}ys.prototype.clear=NE;ys.prototype.delete=HE;ys.prototype.get=zE;ys.prototype.has=FE;ys.prototype.set=WE;var bd=ys;function ZE(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var qE=ZE,KE=x0,GE=qE,VE=$0,QE=1,XE=2;function YE(e,t,n,i,o,a){var c=n&QE,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var p=a.get(e),h=a.get(t);if(p&&h)return p==t&&h==e;var m=-1,v=!0,_=n&XE?new KE:void 0;for(a.set(e,t),a.set(t,e);++m<u;){var x=e[m],E=t[m];if(i)var k=c?i(E,x,m,t,e,a):i(x,E,m,e,t,a);if(k!==void 0){if(k)continue;v=!1;break}if(_){if(!GE(t,function(C,P){if(!VE(_,P)&&(x===C||o(x,C,n,i,a)))return _.push(P)})){v=!1;break}}else if(!(x===E||o(x,E,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var Dm=YE,JE=jn,eT=JE.Uint8Array,Nm=eT;function tT(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var nT=tT,$g=ls,kg=Nm,rT=Wu,iT=Dm,sT=nT,oT=Ku,aT=1,lT=2,cT="[object Boolean]",uT="[object Date]",dT="[object Error]",fT="[object Map]",hT="[object Number]",pT="[object RegExp]",gT="[object Set]",mT="[object String]",vT="[object Symbol]",yT="[object ArrayBuffer]",bT="[object DataView]",Cg=$g?$g.prototype:void 0,uu=Cg?Cg.valueOf:void 0;function _T(e,t,n,i,o,a,c){switch(n){case bT:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case yT:return!(e.byteLength!=t.byteLength||!a(new kg(e),new kg(t)));case cT:case uT:case hT:return rT(+e,+t);case dT:return e.name==t.name&&e.message==t.message;case pT:case mT:return e==t+"";case fT:var u=sT;case gT:var d=i&aT;if(u||(u=oT),e.size!=t.size&&!d)return!1;var p=c.get(e);if(p)return p==t;i|=lT,c.set(e,t);var h=iT(u(e),u(t),i,o,a,c);return c.delete(e),h;case vT:if(uu)return uu.call(e)==uu.call(t)}return!1}var wT=_T;function xT(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var _d=xT,$T=Array.isArray,Jn=$T,kT=_d,CT=Jn;function ST(e,t,n){var i=t(e);return CT(e)?i:kT(i,n(e))}var Hm=ST;function ET(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var c=e[n];t(c,n,e)&&(a[o++]=c)}return a}var TT=ET;function AT(){return[]}var zm=AT,IT=TT,RT=zm,OT=Object.prototype,LT=OT.propertyIsEnumerable,Sg=Object.getOwnPropertySymbols,PT=Sg?function(e){return e==null?[]:(e=Object(e),IT(Sg(e),function(t){return LT.call(e,t)}))}:RT,wd=PT;function MT(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var BT=MT;function UT(e){return e!=null&&typeof e=="object"}var ti=UT,jT=cs,DT=ti,NT="[object Arguments]";function HT(e){return DT(e)&&jT(e)==NT}var zT=HT,Eg=zT,FT=ti,Fm=Object.prototype,WT=Fm.hasOwnProperty,ZT=Fm.propertyIsEnumerable,qT=Eg(function(){return arguments}())?Eg:function(e){return FT(e)&&WT.call(e,"callee")&&!ZT.call(e,"callee")},xd=qT,al={exports:{}};function KT(){return!1}var GT=KT;al.exports;(function(e,t){var n=jn,i=GT,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,c=a&&a.exports===o,u=c?n.Buffer:void 0,d=u?u.isBuffer:void 0,p=d||i;e.exports=p})(al,al.exports);var $d=al.exports,VT=9007199254740991,QT=/^(?:0|[1-9]\d*)$/;function XT(e,t){var n=typeof e;return t=t??VT,!!t&&(n=="number"||n!="symbol"&&QT.test(e))&&e>-1&&e%1==0&&e<t}var kd=XT,YT=9007199254740991;function JT(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=YT}var Cd=JT,eA=cs,tA=Cd,nA=ti,rA="[object Arguments]",iA="[object Array]",sA="[object Boolean]",oA="[object Date]",aA="[object Error]",lA="[object Function]",cA="[object Map]",uA="[object Number]",dA="[object Object]",fA="[object RegExp]",hA="[object Set]",pA="[object String]",gA="[object WeakMap]",mA="[object ArrayBuffer]",vA="[object DataView]",yA="[object Float32Array]",bA="[object Float64Array]",_A="[object Int8Array]",wA="[object Int16Array]",xA="[object Int32Array]",$A="[object Uint8Array]",kA="[object Uint8ClampedArray]",CA="[object Uint16Array]",SA="[object Uint32Array]",it={};it[yA]=it[bA]=it[_A]=it[wA]=it[xA]=it[$A]=it[kA]=it[CA]=it[SA]=!0;it[rA]=it[iA]=it[mA]=it[sA]=it[vA]=it[oA]=it[aA]=it[lA]=it[cA]=it[uA]=it[dA]=it[fA]=it[hA]=it[pA]=it[gA]=!1;function EA(e){return nA(e)&&tA(e.length)&&!!it[eA(e)]}var TA=EA;function AA(e){return function(t){return e(t)}}var Sd=AA,ll={exports:{}};ll.exports;(function(e,t){var n=y0,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||c&&c.binding&&c.binding("util")}catch{}}();e.exports=u})(ll,ll.exports);var Ed=ll.exports,IA=TA,RA=Sd,Tg=Ed,Ag=Tg&&Tg.isTypedArray,OA=Ag?RA(Ag):IA,Wm=OA,LA=BT,PA=xd,MA=Jn,BA=$d,UA=kd,jA=Wm,DA=Object.prototype,NA=DA.hasOwnProperty;function HA(e,t){var n=MA(e),i=!n&&PA(e),o=!n&&!i&&BA(e),a=!n&&!i&&!o&&jA(e),c=n||i||o||a,u=c?LA(e.length,String):[],d=u.length;for(var p in e)(t||NA.call(e,p))&&!(c&&(p=="length"||o&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||UA(p,d)))&&u.push(p);return u}var Zm=HA,zA=Object.prototype;function FA(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||zA;return e===n}var Td=FA;function WA(e,t){return function(n){return e(t(n))}}var qm=WA,ZA=qm,qA=ZA(Object.keys,Object),KA=qA,GA=Td,VA=KA,QA=Object.prototype,XA=QA.hasOwnProperty;function YA(e){if(!GA(e))return VA(e);var t=[];for(var n in Object(e))XA.call(e,n)&&n!="constructor"&&t.push(n);return t}var JA=YA,eI=_0,tI=Cd;function nI(e){return e!=null&&tI(e.length)&&!eI(e)}var Km=nI,rI=Zm,iI=JA,sI=Km;function oI(e){return sI(e)?rI(e):iI(e)}var Ll=oI,aI=Hm,lI=wd,cI=Ll;function uI(e){return aI(e,cI,lI)}var Gm=uI,Ig=Gm,dI=1,fI=Object.prototype,hI=fI.hasOwnProperty;function pI(e,t,n,i,o,a){var c=n&dI,u=Ig(e),d=u.length,p=Ig(t),h=p.length;if(d!=h&&!c)return!1;for(var m=d;m--;){var v=u[m];if(!(c?v in t:hI.call(t,v)))return!1}var _=a.get(e),x=a.get(t);if(_&&x)return _==t&&x==e;var E=!0;a.set(e,t),a.set(t,e);for(var k=c;++m<d;){v=u[m];var C=e[v],P=t[v];if(i)var B=c?i(P,C,v,t,e,a):i(C,P,v,e,t,a);if(!(B===void 0?C===P||o(C,P,n,i,a):B)){E=!1;break}k||(k=v=="constructor")}if(E&&!k){var R=e.constructor,T=t.constructor;R!=T&&"constructor"in e&&"constructor"in t&&!(typeof R=="function"&&R instanceof R&&typeof T=="function"&&T instanceof T)&&(E=!1)}return a.delete(e),a.delete(t),E}var gI=pI,mI=wi,vI=jn,yI=mI(vI,"DataView"),bI=yI,_I=wi,wI=jn,xI=_I(wI,"Promise"),$I=xI,kI=wi,CI=jn,SI=kI(CI,"WeakMap"),EI=SI,Bu=bI,Uu=Zu,ju=$I,Du=k0,Nu=EI,Vm=cs,bs=w0,Rg="[object Map]",TI="[object Object]",Og="[object Promise]",Lg="[object Set]",Pg="[object WeakMap]",Mg="[object DataView]",AI=bs(Bu),II=bs(Uu),RI=bs(ju),OI=bs(Du),LI=bs(Nu),di=Vm;(Bu&&di(new Bu(new ArrayBuffer(1)))!=Mg||Uu&&di(new Uu)!=Rg||ju&&di(ju.resolve())!=Og||Du&&di(new Du)!=Lg||Nu&&di(new Nu)!=Pg)&&(di=function(e){var t=Vm(e),n=t==TI?e.constructor:void 0,i=n?bs(n):"";if(i)switch(i){case AI:return Mg;case II:return Rg;case RI:return Og;case OI:return Lg;case LI:return Pg}return t});var Pl=di,du=bd,PI=Dm,MI=wT,BI=gI,Bg=Pl,Ug=Jn,jg=$d,UI=Wm,jI=1,Dg="[object Arguments]",Ng="[object Array]",Ia="[object Object]",DI=Object.prototype,Hg=DI.hasOwnProperty;function NI(e,t,n,i,o,a){var c=Ug(e),u=Ug(t),d=c?Ng:Bg(e),p=u?Ng:Bg(t);d=d==Dg?Ia:d,p=p==Dg?Ia:p;var h=d==Ia,m=p==Ia,v=d==p;if(v&&jg(e)){if(!jg(t))return!1;c=!0,h=!1}if(v&&!h)return a||(a=new du),c||UI(e)?PI(e,t,n,i,o,a):MI(e,t,d,n,i,o,a);if(!(n&jI)){var _=h&&Hg.call(e,"__wrapped__"),x=m&&Hg.call(t,"__wrapped__");if(_||x){var E=_?e.value():e,k=x?t.value():t;return a||(a=new du),o(E,k,n,i,a)}}return v?(a||(a=new du),BI(e,t,n,i,o,a)):!1}var HI=NI,zI=HI,zg=ti;function Qm(e,t,n,i,o){return e===t?!0:e==null||t==null||!zg(e)&&!zg(t)?e!==e&&t!==t:zI(e,t,n,i,Qm,o)}var Xm=Qm,FI=bd,WI=Xm,ZI=1,qI=2;function KI(e,t,n,i){var o=n.length,a=o,c=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],p=e[d],h=u[1];if(c&&u[2]){if(p===void 0&&!(d in e))return!1}else{var m=new FI;if(i)var v=i(p,h,d,e,t,m);if(!(v===void 0?WI(h,p,ZI|qI,i,m):v))return!1}}return!0}var GI=KI,VI=Qn;function QI(e){return e===e&&!VI(e)}var Ym=QI,XI=Ym,YI=Ll;function JI(e){for(var t=YI(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,XI(o)]}return t}var eR=JI;function tR(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var Jm=tR,nR=GI,rR=eR,iR=Jm;function sR(e){var t=rR(e);return t.length==1&&t[0][2]?iR(t[0][0],t[0][1]):function(n){return n===e||nR(n,e,t)}}var oR=sR,aR=cs,lR=ti,cR="[object Symbol]";function uR(e){return typeof e=="symbol"||lR(e)&&aR(e)==cR}var Ml=uR,dR=Jn,fR=Ml,hR=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,pR=/^\w*$/;function gR(e,t){if(dR(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||fR(e)?!0:pR.test(e)||!hR.test(e)||t!=null&&e in Object(t)}var Ad=gR,ev=qu,mR="Expected a function";function Id(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(mR);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var c=e.apply(this,i);return n.cache=a.set(o,c)||a,c};return n.cache=new(Id.Cache||ev),n}Id.Cache=ev;var vR=Id,yR=vR,bR=500;function _R(e){var t=yR(e,function(i){return n.size===bR&&n.clear(),i}),n=t.cache;return t}var wR=_R,xR=wR,$R=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,kR=/\\(\\)?/g,CR=xR(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace($R,function(n,i,o,a){t.push(o?a.replace(kR,"$1"):i||n)}),t}),SR=CR;function ER(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var Rd=ER,Fg=ls,TR=Rd,AR=Jn,IR=Ml,RR=1/0,Wg=Fg?Fg.prototype:void 0,Zg=Wg?Wg.toString:void 0;function tv(e){if(typeof e=="string")return e;if(AR(e))return TR(e,tv)+"";if(IR(e))return Zg?Zg.call(e):"";var t=e+"";return t=="0"&&1/e==-RR?"-0":t}var OR=tv,LR=OR;function PR(e){return e==null?"":LR(e)}var MR=PR,BR=Jn,UR=Ad,jR=SR,DR=MR;function NR(e,t){return BR(e)?e:UR(e,t)?[e]:jR(DR(e))}var _s=NR,HR=Ml,zR=1/0;function FR(e){if(typeof e=="string"||HR(e))return e;var t=e+"";return t=="0"&&1/e==-zR?"-0":t}var ws=FR,WR=_s,ZR=ws;function qR(e,t){t=WR(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[ZR(t[n++])];return n&&n==i?e:void 0}var Bl=qR,KR=Bl;function GR(e,t,n){var i=e==null?void 0:KR(e,t);return i===void 0?n:i}var VR=GR;function QR(e,t){return e!=null&&t in Object(e)}var XR=QR,YR=_s,JR=xd,eO=Jn,tO=kd,nO=Cd,rO=ws;function iO(e,t,n){t=YR(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var c=rO(t[i]);if(!(a=e!=null&&n(e,c)))break;e=e[c]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&nO(o)&&tO(c,o)&&(eO(e)||JR(e)))}var sO=iO,oO=XR,aO=sO;function lO(e,t){return e!=null&&aO(e,t,oO)}var cO=lO,uO=Xm,dO=VR,fO=cO,hO=Ad,pO=Ym,gO=Jm,mO=ws,vO=1,yO=2;function bO(e,t){return hO(e)&&pO(t)?gO(mO(e),t):function(n){var i=dO(n,e);return i===void 0&&i===t?fO(n,e):uO(t,i,vO|yO)}}var _O=bO;function wO(e){return e}var nv=wO;function xO(e){return function(t){return t?.[e]}}var $O=xO,kO=Bl;function CO(e){return function(t){return kO(t,e)}}var SO=CO,EO=$O,TO=SO,AO=Ad,IO=ws;function RO(e){return AO(e)?EO(IO(e)):TO(e)}var OO=RO,LO=oR,PO=_O,MO=nv,BO=Jn,UO=OO;function jO(e){return typeof e=="function"?e:e==null?MO:typeof e=="object"?BO(e)?PO(e[0],e[1]):LO(e):UO(e)}var Od=jO,DO=Od,NO=C0;function HO(e,t){return e&&e.length?NO(e,DO(t)):[]}var zO=HO;const FO=mo(zO),fu=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Ba=0;const{setActiveSubscriptions:WO}=Q1();setInterval(()=>{WO(Ba)},1e3);const wr=e=>{const{config:t,shouldMuteEvent:n}=De(),i=El(),[o,a]=$e([]);pr(ul(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(u=>u.filter(d=>!n(d)))},{defer:!0}));const c=()=>{const u=e();if(u==null)return;const{relayUrls:d,filters:p,options:h,onEvent:m,onEOSE:v,continuous:_=!0}=u,x=u.limit??50,E=i().sub(d,p,h);let k=!0;Ba+=1;let C=!1,P=!1;const B=[];E.on("event",T=>{m?.(T),!(u.clientEventFilter!=null&&!u.clientEventFilter(T))&&(P?a(L=>{const H=fu([T,...L].slice(0,x)),W=FO(H,se=>se.id);return W.length!==H.length&&console.warn("duplicated event",T),W}):(C=!0,B.push(T)))}),E.on("eose",()=>{v?.(),P=!0,a(fu(B)),_||(E.unsub(),k&&(k=!1,Ba-=1))});const R=setInterval(()=>{if(P){clearInterval(R);return}C&&(C=!1,a(fu(B)))},100);Xr(()=>{E.unsub(),k&&(k=!1,Ba-=1),clearInterval(R)})};return pr(()=>{c()}),{events:o}},ZO=e=>{const t=()=>$n(e),n=[e.id],i=t().rootEvent()?.id;i!=null&&n.push(i);const o=t().replyingToEvent()?.id;return o!=null&&n.push(o),Fr(n)},qO=e=>{const{config:t}=De(),{events:n}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:ZO(e.event),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return w(vs,{get events(){return[...n()].reverse()}})},KO=e=>w(Pn,{get children(){return w(Fe,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>w(qO,{get event(){return t.event}})})}}),GO=M('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),VO=M('<div class="shrink-0 border-b">'),QO=M('<div class="flex flex-col overflow-y-scroll scroll-smooth">'),XO=M('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="flex h-full flex-col overflow-y-scroll scroll-smooth">'),xs=e=>{let t;const n=nE(),i=()=>e.width??"medium";return Mu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Mu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),w(Mm.Provider,{value:n,get children(){const o=GO(),a=t;return typeof a=="function"?Zn(a,o):t=o,I(o,w(le,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=VO();return I(c,()=>e.header),c})(),(()=>{const c=QO();return I(c,()=>e.children),c})()]},children:c=>(()=>{const u=XO(),d=u.firstChild,p=d.firstChild,h=p.firstChild,m=d.nextSibling;return p.$$click=()=>n?.clearTimeline(),I(h,w(v0,{})),I(m,w(KO,{timelineContent:c})),u})()})),Le(c=>qs(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},c)),o}})};bt(["click"]);const YO=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),JO=(e={})=>(()=>{const t=YO();return st(t,e,!0,!0),t})(),eL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),tL=(e={})=>(()=>{const t=eL();return st(t,e,!0,!0),t})(),nL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),rL=(e={})=>(()=>{const t=nL();return st(t,e,!0,!0),t})(),iL=M('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),sL=M('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),oL=M('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),aL=e=>(()=>{const t=iL(),n=t.firstChild,i=n.nextSibling;return I(n,()=>e.title),I(i,()=>e.children),t})(),$s=e=>{const{saveColumn:t,removeColumn:n,moveColumn:i}=De(),o=Co(),a=u=>{t({...e.column,width:u})},c=u=>{i(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=oL(),d=u.firstChild,p=d.firstChild,h=p.firstChild,m=p.nextSibling,v=m.firstChild,_=m.nextSibling,x=_.nextSibling,E=x.firstChild;return I(u,w(aL,{title:"カラム幅",get children(){const k=sL(),C=k.firstChild,P=C.nextSibling,B=P.nextSibling,R=B.nextSibling;return C.$$click=()=>a("widest"),P.$$click=()=>a("wide"),B.$$click=()=>a("medium"),R.$$click=()=>a("narrow"),k}}),d),p.$$click=()=>c(e.columnIndex-1),I(h,w(JO,{})),m.$$click=()=>c(e.columnIndex+1),I(v,w(tL,{})),x.$$click=()=>n(e.column.id),I(E,w(rL,{})),u})()};bt(["click"]);const Qr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>Qr(n)(t));case"OR":return e.children.some(n=>Qr(n)(t));case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},lL=e=>{const{config:t,removeColumn:n}=De(),{followingPubkeys:i}=Tu(()=>({pubkey:e.column.pubkey})),{events:o}=wr(()=>{const a=w4.uniq([...i()]);return a.length===0?null:{relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:dr()-4*60*60}],clientEventFilter:c=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(c.content)}});return pr(()=>{console.log("home",o())}),kn(()=>console.log("home timeline mounted")),Xr(()=>console.log("home timeline unmounted")),w(xs,{get header(){return w(vo,{get name(){return e.column.name??"ホーム"},get icon(){return w(g0,{})},settings:()=>w($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(vs,{get events(){return o()}})}})},cL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),rv=(e={})=>(()=>{const t=cL();return st(t,e,!0,!0),t})(),uL=M('<span class="h-4 w-4 pt-[1px] text-rose-400">'),dL=M('<img alt="icon" class="rounded">'),fL=M('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),hL=M('<div class="notification-event py-1">'),pL=M('<div class="truncate">読み込み中 '),gL=e=>{const{shouldMuteEvent:t}=De(),{showProfile:n}=ei(),i=()=>$n(e.event),o=()=>i().lastTaggedEventId(),{profile:a}=ms(()=>({pubkey:e.event.pubkey})),{event:c,query:u}=Y1(()=>ln([o()])(([p])=>({eventId:p}))),d=()=>u.isSuccess&&c()==null;return w(le,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const p=fL(),h=p.firstChild,m=h.nextSibling,v=m.firstChild,_=v.nextSibling,x=_.firstChild;return I(h,w(Pn,{get fallback(){return e.event.content},get children(){return w(Fe,{get when(){return e.event.content==="+"},get children(){const E=uL();return I(E,w(hd,{})),E}})}})),I(v,w(le,{get when(){return a()?.picture!=null},get children(){const E=dL();return Le(()=>yt(E,"src",a()?.picture)),E}})),x.$$click=()=>n(e.event.pubkey),I(x,w(Al,{get pubkey(){return e.event.pubkey}})),p})(),(()=>{const p=hL();return I(p,w(le,{get when(){return c()},get fallback(){return(()=>{const h=pL();return h.firstChild,I(h,o,null),h})()},keyed:!0,children:h=>w(Bm,{event:h})})),p})()]}})};bt(["click"]);const mL=M("<div>unknown event"),iv=e=>{const{shouldMuteEvent:t}=De();return w(Ht,{get each(){return e.events},children:n=>w(le,{get when(){return!t(n)},get children(){return w(Pn,{get fallback(){return mL()},get children(){return[w(Fe,{get when(){return n.kind===wt.Text},get children(){return w(Ra,{get children(){return w(Um,{event:n})}})}}),w(Fe,{get when(){return n.kind===wt.Reaction},get children(){return w(Ra,{get children(){return w(gL,{event:n})}})}}),w(Fe,{get when(){return n.kind===6},get children(){return w(Ra,{get children(){return w(nm,{event:n})}})}})]}})}})})},vL=e=>{const{config:t,removeColumn:n}=De(),{events:i}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return w(xs,{get header(){return w(vo,{get name(){return e.column.name??"通知"},get icon(){return w(rv,{})},settings:()=>w($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(iv,{get events(){return i()}})}})},yL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),sv=(e={})=>(()=>{const t=yL();return st(t,e,!0,!0),t})(),bL=e=>{const{config:t,removeColumn:n}=De(),{events:i}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return w(xs,{get header(){return w(vo,{get name(){return e.column.name??"投稿"},get icon(){return w(sv,{})},settings:()=>w($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(vs,{get events(){return i()}})}})},_L=e=>{const{config:t,removeColumn:n}=De(),{events:i}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}));return w(xs,{get header(){return w(vo,{get name(){return e.column.name??"リアクション"},get icon(){return w(fd,{})},settings:()=>w($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(iv,{get events(){return i()}})}})},wL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Ld=(e={})=>(()=>{const t=wL();return st(t,e,!0,!0),t})(),xL=e=>{const{removeColumn:t}=De(),{events:n}=wr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:dr()-4*60*60}],clientEventFilter:i=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(i.content)}));return w(xs,{get header(){return w(vo,{get name(){return e.column.name??"リレー"},get icon(){return w(Ld,{})},settings:()=>w($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(vs,{get events(){return n()}})}})},$L=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),ov=(e={})=>(()=>{const t=$L();return st(t,e,!0,!0),t})(),kL=M('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),CL=e=>{const[t,n]=$e(!1),[i,o]=$e(""),{saveColumn:a}=De(),c=()=>n(m=>!m),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},p=m=>{o(m.currentTarget.value)},h=m=>{m.preventDefault(),u()};return kn(()=>{o(e.column.query)}),(()=>{const m=kL(),v=m.firstChild,_=v.firstChild,x=_.firstChild,E=_.nextSibling,k=E.firstChild,C=E.nextSibling;return I(x,w(ov,{})),E.addEventListener("submit",h),k.addEventListener("blur",d),k.addEventListener("change",p),C.$$click=()=>c(),I(C,w(m0,{})),I(m,w(le,{get when(){return t()},get children(){return e.settings()}}),null),Le(()=>k.value=i()),m})()},SL=e=>{const{removeColumn:t}=De(),{events:n}=wr(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:P9,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:Qr(e.column.contentFilter)(o.content)}});return w(xs,{get header(){return w(CL,{get column(){return e.column},settings:()=>w($s,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(vs,{get events(){return n()}})}})};bt(["click"]);const EL=M('<div class="flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),TL=()=>{const{config:e}=De();return(()=>{const t=EL();return I(t,w(Ht,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return w(Pn,{get children(){return[w(Fe,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:c=>w(lL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),w(Fe,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:c=>w(vL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),w(Fe,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:c=>w(bL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),w(Fe,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:c=>w(_L,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),w(Fe,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:c=>w(xL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),w(Fe,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:c=>w(SL,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},AL=M('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),IL=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=AL();i.$$click=n;const o=t;return typeof o=="function"?Zn(o,i):t=i,I(i,()=>e.children),i})()};bt(["click"]);const RL=M('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),So=e=>w(IL,{onClose:()=>e.onClose?.(),get children(){const t=RL(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),I(i,w(le,{get when(){return e?.closeButton},get fallback(){return w(ss,{})},keyed:!0,children:a=>a()})),I(o,()=>e.children),t}});bt(["click"]);const OL=M('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),LL=M('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),PL=M('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),ML=async()=>{const t=await(await fetch(zu("packageInfo.json"))).text();return JSON.parse(t)},BL=e=>{const[t]=h0(ML);return w(So,{get onClose(){return e.onClose},get children(){const n=OL(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;u.firstChild;const d=i.nextSibling,p=d.nextSibling,h=p.nextSibling,m=h.nextSibling,v=m.nextSibling,_=v.nextSibling,x=_.nextSibling;return x.nextSibling,I(u,()=>t()?.self?.version,null),I(x,()=>t()?.self.licenseText),I(n,w(Ht,{get each(){return t()?.packages??[]},fallback:"取得中",children:E=>[(()=>{const k=LL(),C=k.firstChild,P=C.nextSibling,B=P.nextSibling,R=B.nextSibling;return R.nextSibling,I(k,()=>E.name,C),I(k,()=>E.version,P),I(k,()=>E.licenseSpdx,R),k})(),(()=>{const k=PL();return I(k,()=>E.licenseText),k})()]}),null),Le(()=>yt(o,"src",zu("images/rabbit_app_256.png"))),n}})},UL=M('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),jL=e=>{const t=_r(),{saveColumn:n}=De(),i=Co(),o=()=>{e.onClose(),i({command:"moveToLastColumn"}).catch(m=>console.error(m))},a=()=>{ln([t()])(([m])=>{n(B1({pubkey:m}))}),o()},c=()=>{ln([t()])(([m])=>{n(U1({pubkey:m}))}),o()},u=()=>{n(j1()),o()},d=()=>{n(dd({query:""})),o()},p=()=>{ln([t()])(([m])=>{n(D1({pubkey:m}))}),o()},h=()=>{ln([t()])(([m])=>{n(N1({pubkey:m}))}),o()};return w(So,{get onClose(){return e.onClose},get children(){const m=UL(),v=m.firstChild,_=v.firstChild,x=v.nextSibling,E=x.firstChild,k=x.nextSibling,C=k.firstChild,P=k.nextSibling,B=P.firstChild,R=P.nextSibling,T=R.firstChild,L=R.nextSibling,H=L.firstChild;return v.$$click=()=>a(),I(_,w(g0,{})),x.$$click=()=>c(),I(E,w(rv,{})),k.$$click=()=>u(),I(C,w(Ld,{})),P.$$click=()=>d(),I(B,w(ov,{})),R.$$click=()=>p(),I(T,w(sv,{})),L.$$click=()=>h(),I(H,w(fd,{})),m}})};bt(["click"]);const DL=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),NL=(e={})=>(()=>{const t=DL();return st(t,e,!0,!0),t})(),HL=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),zL=(e={})=>(()=>{const t=HL();return st(t,e,!0,!0),t})(),FL=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),WL=(e={})=>(()=>{const t=FL();return st(t,e,!0,!0),t})();function ZL(e){const{config:t}=De(),n=Ge(e),{events:i}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[wt.Contacts],"#p":[n().pubkey]}],limit:1/0,continuous:!0})),o=()=>Fr(i()?.map(c=>c.pubkey));return{followersPubkeys:o,count:()=>o().length}}const qL=e=>{const t=Ge(e),n=as(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return Promise.resolve(null);const{nip05:u}=c;return O1.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},KL=M('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),GL=M('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),VL=M('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),QL=M('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),XL=M('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),YL=M('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),JL=M('<div class="shrink-0 text-xs">読み込み中'),eP=M('<div class="shrink-0 text-xs">フォローされています'),tP=M('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),nP=M('<div class="truncate text-xl font-bold">'),rP=M('<div class="truncate text-xs">@'),iP=M('<span class="inline-block h-3 w-3">'),sP=M('<span class="inline-block h-4 w-4 text-blue-400">'),oP=M('<div class="flex items-center text-xs">'),aP=M('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),lP=M('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),cP=M('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),uP=M('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),dP=M('<ul class="border-t px-5 py-2 text-xs">'),fP=M('<ul class="border-t p-1">'),hP=M('<div class="h-12 shrink-0">'),pP=M('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),gP=M('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),mP=M('<span class="inline-block h-4 w-4 text-rose-500">'),vP=M('<span class="text-sm">読み込み中'),yP=M('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),bP=M('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),_P=e=>{const{count:t}=ZL(()=>({pubkey:e.pubkey}));return Ge(t)},wP=e=>{const{config:t,addMutedPubkey:n,removeMutedPubkey:i,isPubkeyMuted:o}=De(),a=Ol(),c=_r(),{showProfileEdit:u}=ei(),d=Ge(()=>Tl(e.pubkey)),[p,h]=$e(!1),[m,v]=$e(!1),{profile:_,query:x}=ms(()=>({pubkey:e.pubkey})),{verification:E,query:k}=qL(()=>ln([_()?.nip05])(([J])=>({nip05:J}))),C=()=>{const J=_()?.nip05;if(J==null)return null;const[ve,ke]=J.split("@");return ke==null?null:ve==="_"?{domain:ke,ident:ke}:{user:ve,domain:ke,ident:J}},P=()=>E()?.pubkey===e.pubkey,B=()=>o(e.pubkey),{followingPubkeys:R,invalidateFollowings:T,query:L}=Tu(()=>ln([c()])(([J])=>({pubkey:J}))),H=()=>R().includes(e.pubkey),{followingPubkeys:W,query:se}=Tu(()=>({pubkey:e.pubkey})),V=()=>{const J=c();return J!=null&&W().includes(J)},re=pi({mutationKey:["updateContacts"],mutationFn:(...J)=>a.updateContacts(...J).then(ve=>Promise.allSettled(ve.map(Jr(5e3)))),onSuccess:J=>{const ve=J.filter(ce=>ce.status==="fulfilled").length,ke=J.length-ve;ve===J.length?console.log("succeeded to update contacts"):ve>0?console.log(`succeeded to update contacts for ${ve} relays but failed for ${ke} relays`):console.error("failed to update contacts")},onError:J=>{console.error("failed to update contacts: ",J)},onSettled:()=>{T().then(()=>L.refetch()).catch(J=>console.error("failed to refetch contacts",J))}}),Z=()=>{const J=c();J!=null&&L.isFetched&&re.mutate({relayUrls:t().relayUrls,pubkey:J,content:L.data?.content??"",followingPubkeys:Fr([...R(),e.pubkey])})},X=()=>{const J=c();J!=null&&L.isFetched&&window.confirm("本当にフォロー解除しますか？")&&re.mutate({relayUrls:t().relayUrls,pubkey:J,content:L.data?.content??"",followingPubkeys:R().filter(ve=>ve!==e.pubkey)})},oe=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(J=>window.alert(J))}},{content:()=>B()?"ミュート解除":"ミュート",onSelect:()=>{B()?i(e.pubkey):n(e.pubkey)}},{when:()=>e.pubkey===c(),content:()=>H()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{H()?X():Z()}}],{events:Ze}=wr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:dr()}],continuous:!1}));return w(So,{onClose:()=>e.onClose?.(),get children(){return[w(le,{get when(){return x.isFetched},get fallback(){return"loading"},get children(){return[w(le,{get when(){return _()?.banner},get fallback(){return hP()},keyed:!0,children:J=>(()=>{const ve=pP(),ke=ve.firstChild;return yt(ke,"src",J),ve})()}),(()=>{const J=tP(),ve=J.firstChild,ke=ve.firstChild,ce=ve.nextSibling,ye=ce.firstChild;return I(ke,w(le,{get when(){return _()?.picture},keyed:!0,children:K=>(()=>{const Pe=gP();return yt(Pe,"src",K),Pe})()})),I(ye,w(Pn,{get children(){return[w(Fe,{get when(){return e.pubkey===c()},get children(){const K=KL();return K.$$click=()=>u(),K}}),w(Fe,{get when(){return L.isLoading||L.isFetching},get children(){return GL()}}),w(Fe,{get when(){return re.isLoading},get children(){return VL()}}),w(Fe,{get when(){return H()},get children(){const K=QL();return K.$$click=()=>X(),K.addEventListener("mouseleave",()=>h(!1)),K.addEventListener("mouseenter",()=>h(!0)),I(K,w(le,{get when(){return!p()},fallback:"フォロー解除",children:"フォロー中"})),Le(()=>K.disabled=re.isLoading),K}}),w(Fe,{get when(){return!H()},get children(){const K=XL();return K.$$click=()=>Z(),Le(()=>K.disabled=re.isLoading),K}})]}}),null),I(ye,w(sm,{menu:oe,get children(){const K=YL();return I(K,w(rm,{})),K}}),null),I(ce,w(Pn,{get children(){return[w(Fe,{get when(){return se.isLoading},get children(){return JL()}}),w(Fe,{get when(){return V()},get children(){return eP()}})]}}),null),J})(),(()=>{const J=aP(),ve=J.firstChild,ke=ve.firstChild,ce=ke.nextSibling,ye=ce.firstChild;return I(ve,w(le,{get when(){return(_()?.display_name?.length??0)>0},get children(){const K=nP();return I(K,()=>_()?.display_name),K}}),ke),I(ke,w(le,{get when(){return(_()?.name?.length??0)>0},get children(){const K=rP();return K.firstChild,I(K,()=>_()?.name,null),K}}),null),I(ke,w(le,{get when(){return(_()?.nip05?.length??0)>0},get children(){const K=oP();return I(K,()=>C()?.ident,null),I(K,w(Pn,{get fallback(){return(()=>{const Pe=mP();return I(Pe,w(WL,{})),Pe})()},get children(){return[w(Fe,{get when(){return k.isLoading},get children(){const Pe=iP();return I(Pe,w(NL,{})),Pe}}),w(Fe,{get when(){return P()},get children(){const Pe=sP();return I(Pe,w(zL,{})),Pe}})]}}),null),K}}),null),I(ye,d),J})(),w(le,{get when(){return(_()?.about??"").length>0},get children(){const J=lP();return I(J,()=>_()?.about),J}}),(()=>{const J=uP(),ve=J.firstChild,ke=ve.firstChild,ce=ke.nextSibling;return I(ce,w(le,{get when(){return se.isFetched},get fallback(){return vP()},get children(){return W().length}})),I(J,w(le,{get when(){return!t().hideCount},get children(){const ye=cP(),K=ye.firstChild,Pe=K.nextSibling;return I(Pe,w(le,{get when(){return m()},get fallback(){return(()=>{const Ye=yP();return Ye.$$click=()=>v(!0),Ye})()},keyed:!0,get children(){return w(_P,{get pubkey(){return e.pubkey}})}})),ye}}),null),J})(),w(le,{get when(){return(_()?.website??"").length>0},get children(){const J=dP();return I(J,w(le,{get when(){return _()?.website},keyed:!0,children:ve=>(()=>{const ke=bP(),ce=ke.firstChild;return I(ce,w(Ld,{})),I(ke,w(vd,{class:"text-blue-500 underline",href:ve}),null),ke})()})),J}})]}}),(()=>{const J=fP();return I(J,w(vs,{get events(){return Ze()}})),J})()]}})};bt(["click"]);function xP(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var $P=xP,kP=wi,CP=function(){try{var e=kP(Object,"defineProperty");return e({},"",{}),e}catch{}}(),av=CP,qg=av;function SP(e,t,n){t=="__proto__"&&qg?qg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var lv=SP,EP=lv,TP=Wu,AP=Object.prototype,IP=AP.hasOwnProperty;function RP(e,t,n){var i=e[t];(!(IP.call(e,t)&&TP(i,n))||n===void 0&&!(t in e))&&EP(e,t,n)}var Pd=RP,OP=Pd,LP=lv;function PP(e,t,n,i){var o=!n;n||(n={});for(var a=-1,c=t.length;++a<c;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?LP(n,u,d):OP(n,u,d)}return n}var Eo=PP,MP=Eo,BP=Ll;function UP(e,t){return e&&MP(t,BP(t),e)}var jP=UP;function DP(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var NP=DP,HP=Qn,zP=Td,FP=NP,WP=Object.prototype,ZP=WP.hasOwnProperty;function qP(e){if(!HP(e))return FP(e);var t=zP(e),n=[];for(var i in e)i=="constructor"&&(t||!ZP.call(e,i))||n.push(i);return n}var KP=qP,GP=Zm,VP=KP,QP=Km;function XP(e){return QP(e)?GP(e,!0):VP(e)}var Md=XP,YP=Eo,JP=Md;function eM(e,t){return e&&YP(t,JP(t),e)}var tM=eM,cl={exports:{}};cl.exports;(function(e,t){var n=jn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,c=a?n.Buffer:void 0,u=c?c.allocUnsafe:void 0;function d(p,h){if(h)return p.slice();var m=p.length,v=u?u(m):new p.constructor(m);return p.copy(v),v}e.exports=d})(cl,cl.exports);var nM=cl.exports;function rM(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var iM=rM,sM=Eo,oM=wd;function aM(e,t){return sM(e,oM(e),t)}var lM=aM,cM=qm,uM=cM(Object.getPrototypeOf,Object),Bd=uM,dM=_d,fM=Bd,hM=wd,pM=zm,gM=Object.getOwnPropertySymbols,mM=gM?function(e){for(var t=[];e;)dM(t,hM(e)),e=fM(e);return t}:pM,cv=mM,vM=Eo,yM=cv;function bM(e,t){return vM(e,yM(e),t)}var _M=bM,wM=Hm,xM=cv,$M=Md;function kM(e){return wM(e,$M,xM)}var Ud=kM,CM=Object.prototype,SM=CM.hasOwnProperty;function EM(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&SM.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var TM=EM,Kg=Nm;function AM(e){var t=new e.constructor(e.byteLength);return new Kg(t).set(new Kg(e)),t}var jd=AM,IM=jd;function RM(e,t){var n=t?IM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var OM=RM,LM=/\w*$/;function PM(e){var t=new e.constructor(e.source,LM.exec(e));return t.lastIndex=e.lastIndex,t}var MM=PM,Gg=ls,Vg=Gg?Gg.prototype:void 0,Qg=Vg?Vg.valueOf:void 0;function BM(e){return Qg?Object(Qg.call(e)):{}}var UM=BM,jM=jd;function DM(e,t){var n=t?jM(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var NM=DM,HM=jd,zM=OM,FM=MM,WM=UM,ZM=NM,qM="[object Boolean]",KM="[object Date]",GM="[object Map]",VM="[object Number]",QM="[object RegExp]",XM="[object Set]",YM="[object String]",JM="[object Symbol]",eB="[object ArrayBuffer]",tB="[object DataView]",nB="[object Float32Array]",rB="[object Float64Array]",iB="[object Int8Array]",sB="[object Int16Array]",oB="[object Int32Array]",aB="[object Uint8Array]",lB="[object Uint8ClampedArray]",cB="[object Uint16Array]",uB="[object Uint32Array]";function dB(e,t,n){var i=e.constructor;switch(t){case eB:return HM(e);case qM:case KM:return new i(+e);case tB:return zM(e,n);case nB:case rB:case iB:case sB:case oB:case aB:case lB:case cB:case uB:return ZM(e,n);case GM:return new i;case VM:case YM:return new i(e);case QM:return FM(e);case XM:return new i;case JM:return WM(e)}}var fB=dB,hB=Qn,Xg=Object.create,pB=function(){function e(){}return function(t){if(!hB(t))return{};if(Xg)return Xg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),gB=pB,mB=gB,vB=Bd,yB=Td;function bB(e){return typeof e.constructor=="function"&&!yB(e)?mB(vB(e)):{}}var _B=bB,wB=Pl,xB=ti,$B="[object Map]";function kB(e){return xB(e)&&wB(e)==$B}var CB=kB,SB=CB,EB=Sd,Yg=Ed,Jg=Yg&&Yg.isMap,TB=Jg?EB(Jg):SB,AB=TB,IB=Pl,RB=ti,OB="[object Set]";function LB(e){return RB(e)&&IB(e)==OB}var PB=LB,MB=PB,BB=Sd,e0=Ed,t0=e0&&e0.isSet,UB=t0?BB(t0):MB,jB=UB,DB=bd,NB=$P,HB=Pd,zB=jP,FB=tM,WB=nM,ZB=iM,qB=lM,KB=_M,GB=Gm,VB=Ud,QB=Pl,XB=TM,YB=fB,JB=_B,eU=Jn,tU=$d,nU=AB,rU=Qn,iU=jB,sU=Ll,oU=Md,aU=1,lU=2,cU=4,uv="[object Arguments]",uU="[object Array]",dU="[object Boolean]",fU="[object Date]",hU="[object Error]",dv="[object Function]",pU="[object GeneratorFunction]",gU="[object Map]",mU="[object Number]",fv="[object Object]",vU="[object RegExp]",yU="[object Set]",bU="[object String]",_U="[object Symbol]",wU="[object WeakMap]",xU="[object ArrayBuffer]",$U="[object DataView]",kU="[object Float32Array]",CU="[object Float64Array]",SU="[object Int8Array]",EU="[object Int16Array]",TU="[object Int32Array]",AU="[object Uint8Array]",IU="[object Uint8ClampedArray]",RU="[object Uint16Array]",OU="[object Uint32Array]",tt={};tt[uv]=tt[uU]=tt[xU]=tt[$U]=tt[dU]=tt[fU]=tt[kU]=tt[CU]=tt[SU]=tt[EU]=tt[TU]=tt[gU]=tt[mU]=tt[fv]=tt[vU]=tt[yU]=tt[bU]=tt[_U]=tt[AU]=tt[IU]=tt[RU]=tt[OU]=!0;tt[hU]=tt[dv]=tt[wU]=!1;function Ua(e,t,n,i,o,a){var c,u=t&aU,d=t&lU,p=t&cU;if(n&&(c=o?n(e,i,o,a):n(e)),c!==void 0)return c;if(!rU(e))return e;var h=eU(e);if(h){if(c=XB(e),!u)return ZB(e,c)}else{var m=QB(e),v=m==dv||m==pU;if(tU(e))return WB(e,u);if(m==fv||m==uv||v&&!o){if(c=d||v?{}:JB(e),!u)return d?KB(e,FB(c,e)):qB(e,zB(c,e))}else{if(!tt[m])return o?e:{};c=YB(e,m,u)}}a||(a=new DB);var _=a.get(e);if(_)return _;a.set(e,c),iU(e)?e.forEach(function(k){c.add(Ua(k,t,n,k,e,a))}):nU(e)&&e.forEach(function(k,C){c.set(C,Ua(k,t,n,C,e,a))});var x=p?d?VB:GB:d?oU:sU,E=h?void 0:x(e);return NB(E||e,function(k,C){E&&(C=k,k=e[C]),HB(c,C,Ua(k,t,n,C,e,a))}),c}var LU=Ua;function PU(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var MU=PU;function BU(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var UU=BU,jU=Bl,DU=UU;function NU(e,t){return t.length<2?e:jU(e,DU(t,0,-1))}var HU=NU,zU=_s,FU=MU,WU=HU,ZU=ws;function qU(e,t){return t=zU(t,e),e=WU(e,t),e==null||delete e[ZU(FU(t))]}var KU=qU,GU=cs,VU=Bd,QU=ti,XU="[object Object]",YU=Function.prototype,JU=Object.prototype,hv=YU.toString,ej=JU.hasOwnProperty,tj=hv.call(Object);function nj(e){if(!QU(e)||GU(e)!=XU)return!1;var t=VU(e);if(t===null)return!0;var n=ej.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&hv.call(n)==tj}var rj=nj,ij=rj;function sj(e){return ij(e)?void 0:e}var oj=sj,n0=ls,aj=xd,lj=Jn,r0=n0?n0.isConcatSpreadable:void 0;function cj(e){return lj(e)||aj(e)||!!(r0&&e&&e[r0])}var uj=cj,dj=_d,fj=uj;function pv(e,t,n,i,o){var a=-1,c=e.length;for(n||(n=fj),o||(o=[]);++a<c;){var u=e[a];t>0&&n(u)?t>1?pv(u,t-1,n,i,o):dj(o,u):i||(o[o.length]=u)}return o}var hj=pv,pj=hj;function gj(e){var t=e==null?0:e.length;return t?pj(e,1):[]}var mj=gj;function vj(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var yj=vj,bj=yj,i0=Math.max;function _j(e,t,n){return t=i0(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=i0(i.length-t,0),c=Array(a);++o<a;)c[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(c),bj(e,this,u)}}var wj=_j;function xj(e){return function(){return e}}var $j=xj,kj=$j,s0=av,Cj=nv,Sj=s0?function(e,t){return s0(e,"toString",{configurable:!0,enumerable:!1,value:kj(t),writable:!0})}:Cj,Ej=Sj,Tj=800,Aj=16,Ij=Date.now;function Rj(e){var t=0,n=0;return function(){var i=Ij(),o=Aj-(i-n);if(n=i,o>0){if(++t>=Tj)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var Oj=Rj,Lj=Ej,Pj=Oj,Mj=Pj(Lj),Bj=Mj,Uj=mj,jj=wj,Dj=Bj;function Nj(e){return Dj(jj(e,void 0,Uj),e+"")}var Hj=Nj,zj=Rd,Fj=LU,Wj=KU,Zj=_s,qj=Eo,Kj=oj,Gj=Hj,Vj=Ud,Qj=1,Xj=2,Yj=4,Jj=Gj(function(e,t){var n={};if(e==null)return n;var i=!1;t=zj(t,function(a){return a=Zj(a,e),i||(i=a.length>1),a}),qj(e,Vj(e),n),i&&(n=Fj(n,Qj|Xj|Yj,Kj));for(var o=t.length;o--;)Wj(n,t[o]);return n}),eD=Jj;const tD=mo(eD);var nD="Expected a function";function rD(e){if(typeof e!="function")throw new TypeError(nD);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var iD=rD,sD=Pd,oD=_s,aD=kd,o0=Qn,lD=ws;function cD(e,t,n,i){if(!o0(e))return e;t=oD(t,e);for(var o=-1,a=t.length,c=a-1,u=e;u!=null&&++o<a;){var d=lD(t[o]),p=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=c){var h=u[d];p=i?i(h,d,u):void 0,p===void 0&&(p=o0(h)?h:aD(t[o+1])?[]:{})}sD(u,d,p),u=u[d]}return e}var uD=cD,dD=Bl,fD=uD,hD=_s;function pD(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var c=t[i],u=dD(e,c);n(u,c)&&fD(a,hD(c,e),u)}return a}var gD=pD,mD=Rd,vD=Od,yD=gD,bD=Ud;function _D(e,t){if(e==null)return{};var n=mD(bD(e),function(i){return[i]});return t=vD(t),yD(e,n,function(i,o){return t(i,o[0])})}var wD=_D,xD=Od,$D=iD,kD=wD;function CD(e,t){return kD(e,$D(xD(t)))}var SD=CD;const ED=mo(SD),TD=M('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),AD=M('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),ID=M('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),RD=M('<div class="px-4 pt-4">読み込み中...'),OD=M('<div><span class="font-bold">その他の項目</span><div>'),LD=M('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),PD=M('<div class="h-24 shrink-0">'),MD=M('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),BD="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",UD="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",jD=new RegExp(`^${BD}$`),gv=new RegExp(`^${UD}$`),DD=e=>jD.test(e),ND=e=>gv.test(e),HD=e=>{const t=_r(),{config:n}=De(),[i,o]=$e(""),[a,c]=$e(""),[u,d]=$e(""),[p,h]=$e(""),[m,v]=$e(""),[_,x]=$e(""),[E,k]=$e(""),[C,P]=$e(""),{profile:B,invalidateProfile:R,query:T}=ms(()=>ln([t()])(([X])=>({pubkey:X}))),{updateProfile:L}=Ol(),H=pi({mutationKey:["updateProfile"],mutationFn:(...X)=>L(...X).then(oe=>Promise.allSettled(oe.map(Jr(1e4)))),onSuccess:X=>{const oe=X.filter(J=>J.status==="fulfilled").length,Ze=X.length-oe;oe===X.length?window.alert("更新しました"):oe>0?window.alert(`${Ze}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),R().then(()=>T.refetch()).catch(J=>console.error(J)),e.onClose()},onError:X=>{console.error("failed to delete",X)}}),W=()=>T.isLoading||H.isLoading,se=()=>W(),V=()=>tD(B(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),re=X=>{X.preventDefault();const oe=t();if(oe==null)return;const Ze=ED({picture:i(),banner:a(),name:u(),display_name:p(),about:m(),website:_(),nip05:E(),lud06:DD(C())?C():null,lud16:ND(C())?C():null},J=>J==null||J.length===0);H.mutate({relayUrls:n().relayUrls,pubkey:oe,profile:Ze,otherProperties:V()})},Z=X=>X.key==="Enter"&&X.preventDefault();return kn(()=>{const X=B();X!=null&&(T.refetch().catch(oe=>console.error(oe)),gu(()=>{o(oe=>X.picture??oe),c(oe=>X.banner??oe),d(oe=>X.name??oe),h(oe=>X.display_name??oe),v(oe=>X.about??oe),x(oe=>X.website??oe),k(oe=>X.nip05??oe),X.lud16!=null?P(X.lud16):X.lud06!=null&&P(X.lud06)}))}),w(So,{closeButton:()=>w(v0,{}),get onClose(){return e.onClose},get children(){return[(()=>{const X=ID(),oe=X.firstChild;return I(X,w(le,{get when(){return a().length>0},get fallback(){return PD()},keyed:!0,get children(){const Ze=TD(),J=Ze.firstChild;return Le(()=>yt(J,"src",a())),Ze}}),oe),I(oe,w(le,{get when(){return i().length>0},get children(){const Ze=AD();return Le(()=>yt(Ze,"src",i())),Ze}})),X})(),w(le,{get when(){return W()},get children(){return RD()}}),(()=>{const X=LD(),oe=X.firstChild,Ze=oe.firstChild,J=Ze.firstChild,ve=J.nextSibling,ke=Ze.nextSibling,ce=ke.firstChild,ye=ce.nextSibling,K=ke.nextSibling,Pe=K.firstChild,Ye=Pe.nextSibling,kt=Ye.firstChild,ot=kt.nextSibling,Bt=K.nextSibling,un=Bt.firstChild,G=un.nextSibling,ie=Bt.nextSibling,_t=ie.firstChild,gt=_t.nextSibling,Rt=ie.nextSibling,Nn=Rt.firstChild,at=Nn.nextSibling,Wt=Rt.nextSibling,xr=Wt.firstChild,ht=xr.nextSibling,Ut=Wt.nextSibling,er=Ut.firstChild,be=er.nextSibling,ze=be.nextSibling,lt=Ut.nextSibling,Ct=lt.firstChild,Xt=Ct.nextSibling;return oe.addEventListener("submit",re),ve.$$keydown=Z,ve.addEventListener("blur",ue=>o(ue.currentTarget.value)),ye.$$keydown=Z,ye.addEventListener("blur",ue=>c(ue.currentTarget.value)),ot.$$keydown=Z,ot.addEventListener("change",ue=>d(ue.currentTarget.value)),G.$$keydown=Z,G.addEventListener("change",ue=>h(ue.currentTarget.value)),gt.addEventListener("change",ue=>v(ue.currentTarget.value)),at.$$keydown=Z,at.addEventListener("change",ue=>x(ue.currentTarget.value)),ht.$$keydown=Z,ht.addEventListener("change",ue=>k(ue.currentTarget.value)),ze.$$keydown=Z,ze.addEventListener("change",ue=>P(ue.currentTarget.value)),I(oe,w(le,{get when(){return Object.entries(V()).length>0},get children(){const ue=OD(),dn=ue.firstChild,Oe=dn.nextSibling;return I(Oe,w(Ht,{get each(){return Object.entries(V())},children:([nt,Zt])=>(()=>{const Cn=MD(),fn=Cn.firstChild,$r=fn.nextSibling;return I(fn,nt),I($r,Zt),Cn})()})),ue}}),lt),Xt.$$click=()=>e.onClose(),I(oe,w(le,{get when(){return H.isLoading},children:"保存中..."}),null),Le(ue=>{const dn=se(),Oe=se(),nt=se(),Zt=se(),Cn=se(),fn=se(),$r=gv.source,xi=se(),$i=se(),ki=H.isLoading;return dn!==ue._v$&&(ve.disabled=ue._v$=dn),Oe!==ue._v$2&&(ye.disabled=ue._v$2=Oe),nt!==ue._v$3&&(ot.disabled=ue._v$3=nt),Zt!==ue._v$4&&(G.disabled=ue._v$4=Zt),Cn!==ue._v$5&&(gt.disabled=ue._v$5=Cn),fn!==ue._v$6&&(at.disabled=ue._v$6=fn),$r!==ue._v$7&&yt(ht,"pattern",ue._v$7=$r),xi!==ue._v$8&&(ht.disabled=ue._v$8=xi),$i!==ue._v$9&&(ze.disabled=ue._v$9=$i),ki!==ue._v$10&&(Ct.disabled=ue._v$10=ki),ue},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Le(()=>ve.value=i()),Le(()=>ye.value=a()),Le(()=>ot.value=u()),Le(()=>G.value=p()),Le(()=>gt.value=m()),Le(()=>at.value=_()),Le(()=>ht.value=E()),Le(()=>ze.value=C()),X})()]}})};bt(["keydown","click"]);const zD=()=>{const e=_r(),{modalState:t,showProfile:n,closeModal:i}=ei();return w(le,{get when(){return t()},keyed:!0,children:o=>w(Pn,{get children(){return[w(Fe,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>w(wP,{pubkey:a,onClose:i})}),w(Fe,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return w(HD,{onClose:()=>ln([e()])(([a])=>{n(a)})})}}),w(Fe,{get when(){return o.type==="AddColumn"},get children(){return w(jL,{onClose:i})}}),w(Fe,{get when(){return o.type==="About"},get children(){return w(BL,{onClose:i})}})]}})})},FD=M('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),WD=(e={})=>(()=>{const t=FD();return st(t,e,!0,!0),t})(),ZD=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),a0=(e={})=>(()=>{const t=ZD();return st(t,e,!0,!0),t})(),qD=M('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),KD=(e={})=>(()=>{const t=qD();return st(t,e,!0,!0),t})(),GD=M('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),VD=M('<div class="py-2"><h3 class="font-bold">リレー</h3><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Hu=M('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),QD=M('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),XD=M('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),YD=M('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),JD=M('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),eN=M('<div class="py-2"><h3 class="font-bold">カスタム絵文字</h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex gap-2"><label class="flex flex-1 items-center gap-1"><div>名前</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" pattern="^[a-zA-Z0-9]+$" required></label><label class="flex flex-1 items-center gap-1"><div>URL</div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://.../emoji.png" required></label><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">保存'),tN=M('<li class="flex items-center gap-2"><img class="h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),nN=M('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),rN=M('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),iN=M('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),sN=M('<div class="p-4"><h2 class="flex-1 text-center text-lg font-bold">設定'),mv=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,oN=mv("https?"),aN=mv("wss?"),lN=()=>{const e=_r(),{showProfile:t,showProfileEdit:n}=ei();return(()=>{const i=GD(),o=i.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;return c.$$click=()=>ln([e()])(([d])=>{t(d)}),u.$$click=()=>n(),i})()},cN=()=>{const{config:e,addRelay:t,removeRelay:n}=De(),[i,o]=$e(""),a=c=>{c.preventDefault(),i().length!==0&&(t(i()),o(""))};return(()=>{const c=VD(),u=c.firstChild,d=u.nextSibling,p=d.nextSibling,h=p.firstChild;return I(d,w(Ht,{get each(){return e().relayUrls},children:m=>(()=>{const v=Hu(),_=v.firstChild,x=_.nextSibling;return I(_,m),x.$$click=()=>n(m),I(x,w(ss,{})),v})()})),p.addEventListener("submit",a),h.addEventListener("change",m=>o(m.currentTarget.value)),yt(h,"pattern",aN),Le(()=>h.value=i()),c})()},uN=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],dN=()=>{const{config:e,setConfig:t}=De(),n=i=>{t(o=>({...o,dateFormat:i}))};return(()=>{const i=QD(),o=i.firstChild,a=o.nextSibling;return I(a,w(Ht,{each:uN,children:({id:c,name:u,example:d})=>(()=>{const p=XD(),h=p.firstChild,m=h.nextSibling;return h.$$click=()=>n(c),I(h,u),I(m,d),Le(v=>{const _=e().dateFormat===c,x=e().dateFormat===c,E=e().dateFormat!==c,k=e().dateFormat!==c;return _!==v._v$&&h.classList.toggle("bg-rose-300",v._v$=_),x!==v._v$2&&h.classList.toggle("text-white",v._v$2=x),E!==v._v$3&&h.classList.toggle("bg-white",v._v$3=E),k!==v._v$4&&h.classList.toggle("text-rose-300",v._v$4=k),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()})),i})()},Xs=e=>(()=>{const t=YD();return t.$$click=n=>e.onClick(n),Le(n=>{const i=!e.value,o=!e.value,a=!!e.value,c=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),c!==n._v$8&&t.classList.toggle("justify-end",n._v$8=c),u!==n._v$9&&yt(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),fN=()=>{const{config:e,setConfig:t}=De(),n=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},i=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=JD(),a=o.firstChild,c=a.nextSibling,u=c.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,I(u,w(Xs,{get value(){return e().useEmojiReaction},onClick:()=>n()}),null),I(d,w(Xs,{get value(){return e().showEmojiReaction},onClick:()=>i()}),null),o})()},hN=()=>{const{config:e,saveEmoji:t,removeEmoji:n}=De(),[i,o]=$e(""),[a,c]=$e(""),u=d=>{d.preventDefault(),!(i().length===0||a().length===0)&&t({shortcode:i(),url:a()})};return(()=>{const d=eN(),p=d.firstChild,h=p.nextSibling,m=h.nextSibling,v=m.firstChild,_=v.firstChild,x=_.nextSibling,E=v.nextSibling,k=E.firstChild,C=k.nextSibling;return I(h,w(Ht,{get each(){return Object.values(e().customEmojis)},children:({shortcode:P,url:B})=>(()=>{const R=tN(),T=R.firstChild,L=T.nextSibling,H=L.nextSibling;return yt(T,"src",B),yt(T,"alt",P),I(L,P),H.$$click=()=>n(P),I(H,w(ss,{})),R})()})),m.addEventListener("submit",u),x.addEventListener("change",P=>o(P.currentTarget.value)),C.addEventListener("change",P=>c(P.currentTarget.value)),yt(C,"pattern",oN),Le(()=>x.value=i()),Le(()=>C.value=a()),d})()},pN=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:n,removeMutedKeyword:i}=De(),[o,a]=$e(""),c=u=>{u.preventDefault(),o().length!==0&&(n(o()),a(""))};return[(()=>{const u=nN(),d=u.firstChild,p=d.nextSibling;return I(p,w(Ht,{get each(){return e().mutedPubkeys},children:h=>(()=>{const m=Hu(),v=m.firstChild,_=v.nextSibling;return I(v,w(Al,{pubkey:h})),_.$$click=()=>t(h),I(_,w(ss,{})),m})()})),u})(),(()=>{const u=rN(),d=u.firstChild,p=d.nextSibling,h=p.nextSibling,m=h.firstChild;return I(p,w(Ht,{get each(){return e().mutedKeywords},children:v=>(()=>{const _=Hu(),x=_.firstChild,E=x.nextSibling;return I(x,v),E.$$click=()=>i(v),I(E,w(ss,{})),_})()})),h.addEventListener("submit",c),m.addEventListener("change",v=>a(v.currentTarget.value)),Le(()=>m.value=o()),u})()]},gN=()=>{const{config:e,setConfig:t}=De(),n=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},i=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=iN(),c=a.firstChild,u=c.nextSibling,d=u.firstChild;d.firstChild;const p=d.nextSibling;p.firstChild;const h=p.nextSibling;return h.firstChild,I(d,w(Xs,{get value(){return e().keepOpenPostForm},onClick:()=>n()}),null),I(p,w(Xs,{get value(){return e().showImage},onClick:()=>i()}),null),I(h,w(Xs,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},mN=e=>w(So,{get onClose(){return e.onClose},get children(){const t=sN();return t.firstChild,I(t,w(lN,{}),null),I(t,w(cN,{}),null),I(t,w(dN,{}),null),I(t,w(fN,{}),null),I(t,w(hN,{}),null),I(t,w(gN,{}),null),I(t,w(pN,{}),null),t}});bt(["click"]);const vN=M('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),yN=M('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),bN=M('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),_N=()=>{let e,t;const{saveColumn:n}=De(),i=Co(),[o,a]=$e(""),c=u=>{u.preventDefault(),n(dd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.log(d)),e?.close(),a("")};return w(pd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=yN();return I(u,w(a0,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=vN(),d=u.firstChild,p=d.nextSibling;u.addEventListener("submit",c),d.addEventListener("change",m=>a(m.currentTarget.value));const h=t;return typeof h=="function"?Zn(h,d):t=d,I(p,w(a0,{})),Le(()=>d.value=o()),u}})},wN=()=>{let e;const{showAddColumn:t,showAbout:n}=ei(),{config:i}=De(),[o,a]=$e(!1),[c,u]=$e(!1),d=()=>{e?.focus(),e?.click()},p=()=>a(!0),h=()=>a(!1),m=()=>a(v=>!v);return Mu(()=>({commandType:"openPostForm",handler:()=>{p(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=bN(),_=v.firstChild,x=_.firstChild,E=x.firstChild,k=x.nextSibling,C=k.nextSibling,P=C.firstChild,B=P.nextSibling,R=B.nextSibling,T=R.firstChild,L=_.nextSibling;return E.$$click=()=>m(),I(E,w(KD,{})),I(x,w(_N,{}),null),P.$$click=()=>t(),I(P,w(im,{})),B.$$click=()=>u(H=>!H),I(B,w(WD,{})),R.$$click=()=>n(),I(L,w(Pm,{textAreaRef:H=>{e=H},onClose:h})),I(v,w(le,{get when(){return c()},get children(){return w(mN,{onClose:()=>u(!1)})}}),null),Le(H=>{const W=zu("images/rabbit_app_256.png"),se=!!(o()||i().keepOpenPostForm),V=!(o()||i().keepOpenPostForm);return W!==H._v$&&yt(T,"src",H._v$=W),se!==H._v$2&&L.classList.toggle("static",H._v$2=se),V!==H._v$3&&L.classList.toggle("hidden",H._v$3=V),H},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};bt(["click"]);var xN=jn,$N=function(){return xN.Date.now()},kN=$N,CN=/\s/;function SN(e){for(var t=e.length;t--&&CN.test(e.charAt(t)););return t}var EN=SN,TN=EN,AN=/^\s+/;function IN(e){return e&&e.slice(0,TN(e)+1).replace(AN,"")}var RN=IN,ON=RN,l0=Qn,LN=Ml,c0=0/0,PN=/^[-+]0x[0-9a-f]+$/i,MN=/^0b[01]+$/i,BN=/^0o[0-7]+$/i,UN=parseInt;function jN(e){if(typeof e=="number")return e;if(LN(e))return c0;if(l0(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=l0(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ON(e);var n=MN.test(e);return n||BN.test(e)?UN(e.slice(2),n?2:8):PN.test(e)?c0:+e}var DN=jN,NN=Qn,hu=kN,u0=DN,HN="Expected a function",zN=Math.max,FN=Math.min;function WN(e,t,n){var i,o,a,c,u,d,p=0,h=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(HN);t=u0(t)||0,NN(n)&&(h=!!n.leading,m="maxWait"in n,a=m?zN(u0(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function _(L){var H=i,W=o;return i=o=void 0,p=L,c=e.apply(W,H),c}function x(L){return p=L,u=setTimeout(C,t),h?_(L):c}function E(L){var H=L-d,W=L-p,se=t-H;return m?FN(se,a-W):se}function k(L){var H=L-d,W=L-p;return d===void 0||H>=t||H<0||m&&W>=a}function C(){var L=hu();if(k(L))return P(L);u=setTimeout(C,E(L))}function P(L){return u=void 0,v&&i?_(L):(i=o=void 0,c)}function B(){u!==void 0&&clearTimeout(u),p=0,i=d=o=u=void 0}function R(){return u===void 0?c:P(hu())}function T(){var L=hu(),H=k(L);if(i=arguments,o=this,d=L,H){if(u===void 0)return x(d);if(m)return clearTimeout(u),u=setTimeout(C,t),_(d)}return u===void 0&&(u=setTimeout(C,t)),c}return T.cancel=B,T.flush=R,T}var ZN=WN,qN=ZN,KN=Qn,GN="Expected a function";function VN(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(GN);return KN(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),qN(e,t,{leading:i,maxWait:t,trailing:o})}var QN=VN;const XN=mo(QN),YN=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],JN=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},eH=({shortcuts:e=YN,onShortcut:t})=>{const n=JN(e);kn(()=>{const i=XN(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),Xr(()=>{window.removeEventListener("keydown",i)})})},tH=()=>{const e=Co();eH({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},nH=M('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),oH=()=>{tH();const e=c4(),{persistStatus:t}=h4(),n=El(),{config:i,initializeColumns:o}=De(),a=_r();return pr(()=>{i().relayUrls.map(async c=>{(await n().ensureRelay(c)).on("notice",d=>{console.error(`NOTICE: ${c}: ${d}`)})})}),pr(()=>{const c=a();c!=null&&o({pubkey:c})}),kn(()=>{t().loggedIn||e("/hello")}),u4(c=>{console.error("uncaught error: ",c)}),(()=>{const c=nH();return I(c,w(wN,{}),null),I(c,w(TL,{}),null),I(c,w(zD,{}),null),c})()};export{oH as default};
//# sourceMappingURL=Home-a9ce5c8d.js.map
