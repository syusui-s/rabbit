import{S as t1,s as uc,n as Rw,i as ah,a as lh,t as Lw,f as Ow,c as Pw,r as ch,b as Mw,d as n1,g as Bw,u as Ei,e as r1,h as fc,o as Tr,j as un,k as ms,l as aa,p as uh,m as Ze,q as P,v as ot,w as me,x as I,y as w,z as ae,A as De,B as la,C as Uw,M as Me,D as Dw,E as _n,F as Xn,G as Hw,H as Ae,I as Fw,J as An,K as Dt,L as jw,N as At,O as zw,P as Nw,Q as Ww,R as qw,T as Kw}from"./index-db7b6abe.js";import{c as mi,u as fi,a as Gw,b as Vw,r as Pc,d as Qw}from"./usePersistStatus-151bc188.js";class Zw extends t1{constructor(t,r){super(),this.client=t,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),fh(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return dc(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return dc(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,r){const s=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),uc(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const l=this.hasListeners();l&&dh(this.currentQuery,o,this.options,s)&&this.executeFetch(),this.updateResult(r),l&&(this.currentQuery!==o||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const c=this.computeRefetchInterval();l&&(this.currentQuery!==o||this.options.enabled!==s.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)}getOptimisticResult(t){const r=this.client.getQueryCache().build(this.client,t);return this.createResult(r,t)}getCurrentResult(){return this.currentResult}trackResult(t){const r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),t[s])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...r}={}){return this.fetch({...r,meta:{refetchPage:t}})}fetchOptimistic(t){const r=this.client.defaultQueryOptions(t),s=this.client.getQueryCache().build(this.client,r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(t){var r;return this.executeFetch({...t,cancelRefetch:(r=t.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let r=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(Rw)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),ah||this.currentResult.isStale||!lh(this.options.staleTime))return;const r=Lw(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(ah||this.options.enabled===!1||!lh(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Ow.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,r){const s=this.currentQuery,o=this.options,l=this.currentResult,c=this.currentResultState,u=this.currentResultOptions,d=t!==s,g=d?t.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:v}=t;let{dataUpdatedAt:b,error:_,errorUpdatedAt:$,fetchStatus:k,status:S}=v,L=!1,U=!1,M;if(r._optimisticResults){const q=this.hasListeners(),re=!q&&fh(t,r),G=q&&dh(t,s,r,o);(re||G)&&(k=Pw(t.options.networkMode)?"fetching":"paused",b||(S="loading")),r._optimisticResults==="isRestoring"&&(k="idle")}if(r.keepPreviousData&&!v.dataUpdatedAt&&h!=null&&h.isSuccess&&S!=="error")M=h.data,b=h.dataUpdatedAt,S=h.status,L=!0;else if(r.select&&typeof v.data<"u")if(l&&v.data===c?.data&&r.select===this.selectFn)M=this.selectResult;else try{this.selectFn=r.select,M=r.select(v.data),M=ch(l?.data,M,r),this.selectResult=M,this.selectError=null}catch(q){this.selectError=q}else M=v.data;if(typeof r.placeholderData<"u"&&typeof M>"u"&&S==="loading"){let q;if(l!=null&&l.isPlaceholderData&&r.placeholderData===u?.placeholderData)q=l.data;else if(q=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof q<"u")try{q=r.select(q),this.selectError=null}catch(re){this.selectError=re}typeof q<"u"&&(S="success",M=ch(l?.data,q,r),U=!0)}this.selectError&&(_=this.selectError,M=this.selectResult,$=Date.now(),S="error");const R=k==="fetching",E=S==="loading",O=S==="error";return{status:S,fetchStatus:k,isLoading:E,isSuccess:S==="success",isError:O,isInitialLoading:E&&R,data:M,dataUpdatedAt:b,error:_,errorUpdatedAt:$,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>g.dataUpdateCount||v.errorUpdateCount>g.errorUpdateCount,isFetching:R,isRefetching:R&&!E,isLoadingError:O&&v.dataUpdatedAt===0,isPaused:k==="paused",isPlaceholderData:U,isPreviousData:L,isRefetchError:O&&v.dataUpdatedAt!==0,isStale:Mc(t,r),refetch:this.refetch,remove:this.remove}}updateResult(t){const r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,uc(s,r))return;this.currentResult=s;const o={cache:!0},l=()=>{if(!r)return!0;const{notifyOnChangeProps:c}=this.options;if(c==="all"||!c&&!this.trackedProps.size)return!0;const u=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const g=d;return this.currentResult[g]!==r[g]&&u.has(g)})};t?.listeners!==!1&&l()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const r={};t.type==="success"?r.onSuccess=!t.manual:t.type==="error"&&!Mw(t.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(t){n1.batch(()=>{if(t.onSuccess){var r,s,o,l;(r=(s=this.options).onSuccess)==null||r.call(s,this.currentResult.data),(o=(l=this.options).onSettled)==null||o.call(l,this.currentResult.data,null)}else if(t.onError){var c,u,d,g;(c=(u=this.options).onError)==null||c.call(u,this.currentResult.error),(d=(g=this.options).onSettled)==null||d.call(g,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Xw(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function fh(e,t){return Xw(e,t)||e.state.dataUpdatedAt>0&&dc(e,t,t.refetchOnMount)}function dc(e,t,r){if(t.enabled!==!1){const s=typeof r=="function"?r(e):r;return s==="always"||s!==!1&&Mc(e,t)}return!1}function dh(e,t,r,s){return r.enabled!==!1&&(e!==t||s.enabled===!1)&&(!r.suspense||e.state.status!=="error")&&Mc(e,r)}function Mc(e,t){return e.isStaleByTime(t.staleTime)}class Yw extends t1{constructor(t,r){super(),this.client=t,this.setOptions(r),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const s=this.options;this.options=this.client.defaultMutationOptions(t),uc(s,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(r=this.currentMutation)==null||r.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const r={listeners:!0};t.type==="success"?r.onSuccess=!0:t.type==="error"&&(r.onError=!0),this.notify(r)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,r){return this.mutateOptions=r,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:Bw(),r={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=r}notify(t){n1.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var r,s,o,l;(r=(s=this.mutateOptions).onSuccess)==null||r.call(s,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(l=this.mutateOptions).onSettled)==null||o.call(l,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var c,u,d,g;(c=(u=this.mutateOptions).onError)==null||c.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(g=this.mutateOptions).onSettled)==null||d.call(g,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)})})}}function Jw(e){return typeof e=="function"}function hh(e,t,r){if(!Jw(e)){const{queryKey:s,...o}=e;return s?{...o,queryKey:s()}:e}return typeof t=="function"?{...r,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function i1(e,t){return typeof e=="function"?e(...t):!!e}function e4(e,t){const r=Ei({context:e.context}),s=Symbol("empty"),o=r.defaultQueryOptions(e);o._optimisticResults="optimistic";const l=new t(r,o),[c,u]=mi(l.getOptimisticResult(o)),[d,{refetch:g,mutate:h}]=r1(()=>new Promise($=>{c.isFetching&&c.isLoading||(fi(c.data)===s&&$(void 0),$(fi(c.data)))}));fc(()=>{h(()=>fi(c.data)),g()});let v=[];const b=l.subscribe($=>{v.push(()=>{fc(()=>{const k={...fi($)};k.data===void 0&&(k.data=s),u(fi(k)),h(()=>fi($.data)),g()})}),queueMicrotask(()=>{const k=v.pop();k&&k(),v=[]})});Tr(()=>b()),un(()=>{l.setOptions(o,{listeners:!1})}),ms(()=>{const $=r.defaultQueryOptions(e);l.setOptions($)}),ms(aa(()=>c.status,()=>{if(c.isError&&!c.isFetching&&i1(l.options.useErrorBoundary,[c.error,l.getCurrentQuery()]))throw c.error}));const _={get($,k){return k==="data"?d():Reflect.get($,k)}};return new Proxy(c,_)}function Ti(e,t,r){const[s,o]=mi(hh(e,t,r));return ms(()=>{const l=hh(e,t,r);o(l)}),e4(s,Zw)}function qr(e,t,r){const[s,o]=mi(uh(e,t,r)),l=Ei({context:s.context}),c=new Yw(l,s),u=(v,b)=>{c.mutate(v,b).catch(t4)},[d,g]=mi({...c.getCurrentResult(),mutate:u,mutateAsync:c.getCurrentResult().mutate});ms(()=>{const v=uh(e,t,r);o(v),c.setOptions(v)}),ms(aa(()=>d.status,()=>{if(d.isError&&i1(c.options.useErrorBoundary,[d.error]))throw d.error}));const h=c.subscribe(v=>{g({...v,mutate:u,mutateAsync:v.mutate})});return Tr(h),d}function t4(){}const n4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),s1=(e={})=>(()=>{const t=n4();return Ze(t,e,!0,!0),t})();var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function ca(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function s(){if(this instanceof s){var o=[null];o.push.apply(o,arguments);var l=Function.bind.apply(t,o);return new l}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(r,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}),r}var Wo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Wo.exports;(function(e,t){(function(){var r,s="4.17.21",o=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",g=500,h="__lodash_placeholder__",v=1,b=2,_=4,$=1,k=2,S=1,L=2,U=4,M=8,R=16,E=32,O=64,N=128,q=256,re=512,G=30,ee="...",K=800,Q=16,te=1,Le=2,j=3,ne=1/0,se=9007199254740991,je=17976931348623157e292,Ee=0/0,J=4294967295,Te=J-1,at=J>>>1,rr=[["ary",N],["bind",S],["bindKey",L],["curry",M],["curryRight",R],["flip",re],["partial",E],["partialRight",O],["rearg",q]],Z="[object Arguments]",lt="[object Array]",Zt="[object AsyncFunction]",xt="[object Boolean]",oe="[object Date]",ft="[object DOMException]",rt="[object Error]",yt="[object Function]",kn="[object GeneratorFunction]",Xe="[object Map]",Rt="[object Number]",ir="[object Null]",tt="[object Object]",kt="[object Promise]",Bn="[object Proxy]",he="[object RegExp]",Oe="[object Set]",Ge="[object String]",dt="[object Symbol]",Lt="[object Undefined]",le="[object WeakMap]",Xt="[object WeakSet]",be="[object ArrayBuffer]",Ne="[object DataView]",Ot="[object Float32Array]",Ct="[object Float64Array]",Yt="[object Int8Array]",fn="[object Int16Array]",Un="[object Int32Array]",Qr="[object Uint8Array]",Zr="[object Uint8ClampedArray]",Pa="[object Uint16Array]",Ma="[object Uint32Array]",Yp=/\b__p \+= '';/g,Jp=/\b(__p \+=) '' \+/g,ev=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ru=/&(?:amp|lt|gt|quot|#39);/g,Lu=/[&<>"']/g,tv=RegExp(Ru.source),nv=RegExp(Lu.source),rv=/<%-([\s\S]+?)%>/g,iv=/<%([\s\S]+?)%>/g,Ou=/<%=([\s\S]+?)%>/g,sv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ov=/^\w*$/,av=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ba=/[\\^$.*+?()[\]{}|]/g,lv=RegExp(Ba.source),Ua=/^\s+/,cv=/\s/,uv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,fv=/\{\n\/\* \[wrapped with (.+)\] \*/,dv=/,? & /,hv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,gv=/[()=,{}\[\]\/\s]/,pv=/\\(\\)?/g,vv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Pu=/\w*$/,mv=/^[-+]0x[0-9a-f]+$/i,bv=/^0b[01]+$/i,yv=/^\[object .+?Constructor\]$/,_v=/^0o[0-7]+$/i,wv=/^(?:0|[1-9]\d*)$/,$v=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ps=/($^)/,xv=/['\n\r\u2028\u2029\\]/g,Ms="\\ud800-\\udfff",kv="\\u0300-\\u036f",Cv="\\ufe20-\\ufe2f",Sv="\\u20d0-\\u20ff",Mu=kv+Cv+Sv,Bu="\\u2700-\\u27bf",Uu="a-z\\xdf-\\xf6\\xf8-\\xff",Ev="\\xac\\xb1\\xd7\\xf7",Tv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Av="\\u2000-\\u206f",Iv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Du="A-Z\\xc0-\\xd6\\xd8-\\xde",Hu="\\ufe0e\\ufe0f",Fu=Ev+Tv+Av+Iv,Da="['’]",Rv="["+Ms+"]",ju="["+Fu+"]",Bs="["+Mu+"]",zu="\\d+",Lv="["+Bu+"]",Nu="["+Uu+"]",Wu="[^"+Ms+Fu+zu+Bu+Uu+Du+"]",Ha="\\ud83c[\\udffb-\\udfff]",Ov="(?:"+Bs+"|"+Ha+")",qu="[^"+Ms+"]",Fa="(?:\\ud83c[\\udde6-\\uddff]){2}",ja="[\\ud800-\\udbff][\\udc00-\\udfff]",Xr="["+Du+"]",Ku="\\u200d",Gu="(?:"+Nu+"|"+Wu+")",Pv="(?:"+Xr+"|"+Wu+")",Vu="(?:"+Da+"(?:d|ll|m|re|s|t|ve))?",Qu="(?:"+Da+"(?:D|LL|M|RE|S|T|VE))?",Zu=Ov+"?",Xu="["+Hu+"]?",Mv="(?:"+Ku+"(?:"+[qu,Fa,ja].join("|")+")"+Xu+Zu+")*",Bv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Uv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Yu=Xu+Zu+Mv,Dv="(?:"+[Lv,Fa,ja].join("|")+")"+Yu,Hv="(?:"+[qu+Bs+"?",Bs,Fa,ja,Rv].join("|")+")",Fv=RegExp(Da,"g"),jv=RegExp(Bs,"g"),za=RegExp(Ha+"(?="+Ha+")|"+Hv+Yu,"g"),zv=RegExp([Xr+"?"+Nu+"+"+Vu+"(?="+[ju,Xr,"$"].join("|")+")",Pv+"+"+Qu+"(?="+[ju,Xr+Gu,"$"].join("|")+")",Xr+"?"+Gu+"+"+Vu,Xr+"+"+Qu,Uv,Bv,zu,Dv].join("|"),"g"),Nv=RegExp("["+Ku+Ms+Mu+Hu+"]"),Wv=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,qv=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Kv=-1,Ve={};Ve[Ot]=Ve[Ct]=Ve[Yt]=Ve[fn]=Ve[Un]=Ve[Qr]=Ve[Zr]=Ve[Pa]=Ve[Ma]=!0,Ve[Z]=Ve[lt]=Ve[be]=Ve[xt]=Ve[Ne]=Ve[oe]=Ve[rt]=Ve[yt]=Ve[Xe]=Ve[Rt]=Ve[tt]=Ve[he]=Ve[Oe]=Ve[Ge]=Ve[le]=!1;var qe={};qe[Z]=qe[lt]=qe[be]=qe[Ne]=qe[xt]=qe[oe]=qe[Ot]=qe[Ct]=qe[Yt]=qe[fn]=qe[Un]=qe[Xe]=qe[Rt]=qe[tt]=qe[he]=qe[Oe]=qe[Ge]=qe[dt]=qe[Qr]=qe[Zr]=qe[Pa]=qe[Ma]=!0,qe[rt]=qe[yt]=qe[le]=!1;var Gv={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Vv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Qv={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Zv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Xv=parseFloat,Yv=parseInt,Ju=typeof Qn=="object"&&Qn&&Qn.Object===Object&&Qn,Jv=typeof self=="object"&&self&&self.Object===Object&&self,vt=Ju||Jv||Function("return this")(),Na=t&&!t.nodeType&&t,Or=Na&&!0&&e&&!e.nodeType&&e,ef=Or&&Or.exports===Na,Wa=ef&&Ju.process,Jt=function(){try{var T=Or&&Or.require&&Or.require("util").types;return T||Wa&&Wa.binding&&Wa.binding("util")}catch{}}(),tf=Jt&&Jt.isArrayBuffer,nf=Jt&&Jt.isDate,rf=Jt&&Jt.isMap,sf=Jt&&Jt.isRegExp,of=Jt&&Jt.isSet,af=Jt&&Jt.isTypedArray;function Ft(T,D,B){switch(B.length){case 0:return T.call(D);case 1:return T.call(D,B[0]);case 2:return T.call(D,B[0],B[1]);case 3:return T.call(D,B[0],B[1],B[2])}return T.apply(D,B)}function e2(T,D,B,Y){for(var ge=-1,Be=T==null?0:T.length;++ge<Be;){var ct=T[ge];D(Y,ct,B(ct),T)}return Y}function en(T,D){for(var B=-1,Y=T==null?0:T.length;++B<Y&&D(T[B],B,T)!==!1;);return T}function t2(T,D){for(var B=T==null?0:T.length;B--&&D(T[B],B,T)!==!1;);return T}function lf(T,D){for(var B=-1,Y=T==null?0:T.length;++B<Y;)if(!D(T[B],B,T))return!1;return!0}function sr(T,D){for(var B=-1,Y=T==null?0:T.length,ge=0,Be=[];++B<Y;){var ct=T[B];D(ct,B,T)&&(Be[ge++]=ct)}return Be}function Us(T,D){var B=T==null?0:T.length;return!!B&&Yr(T,D,0)>-1}function qa(T,D,B){for(var Y=-1,ge=T==null?0:T.length;++Y<ge;)if(B(D,T[Y]))return!0;return!1}function Ye(T,D){for(var B=-1,Y=T==null?0:T.length,ge=Array(Y);++B<Y;)ge[B]=D(T[B],B,T);return ge}function or(T,D){for(var B=-1,Y=D.length,ge=T.length;++B<Y;)T[ge+B]=D[B];return T}function Ka(T,D,B,Y){var ge=-1,Be=T==null?0:T.length;for(Y&&Be&&(B=T[++ge]);++ge<Be;)B=D(B,T[ge],ge,T);return B}function n2(T,D,B,Y){var ge=T==null?0:T.length;for(Y&&ge&&(B=T[--ge]);ge--;)B=D(B,T[ge],ge,T);return B}function Ga(T,D){for(var B=-1,Y=T==null?0:T.length;++B<Y;)if(D(T[B],B,T))return!0;return!1}var r2=Va("length");function i2(T){return T.split("")}function s2(T){return T.match(hv)||[]}function cf(T,D,B){var Y;return B(T,function(ge,Be,ct){if(D(ge,Be,ct))return Y=Be,!1}),Y}function Ds(T,D,B,Y){for(var ge=T.length,Be=B+(Y?1:-1);Y?Be--:++Be<ge;)if(D(T[Be],Be,T))return Be;return-1}function Yr(T,D,B){return D===D?m2(T,D,B):Ds(T,uf,B)}function o2(T,D,B,Y){for(var ge=B-1,Be=T.length;++ge<Be;)if(Y(T[ge],D))return ge;return-1}function uf(T){return T!==T}function ff(T,D){var B=T==null?0:T.length;return B?Za(T,D)/B:Ee}function Va(T){return function(D){return D==null?r:D[T]}}function Qa(T){return function(D){return T==null?r:T[D]}}function df(T,D,B,Y,ge){return ge(T,function(Be,ct,We){B=Y?(Y=!1,Be):D(B,Be,ct,We)}),B}function a2(T,D){var B=T.length;for(T.sort(D);B--;)T[B]=T[B].value;return T}function Za(T,D){for(var B,Y=-1,ge=T.length;++Y<ge;){var Be=D(T[Y]);Be!==r&&(B=B===r?Be:B+Be)}return B}function Xa(T,D){for(var B=-1,Y=Array(T);++B<T;)Y[B]=D(B);return Y}function l2(T,D){return Ye(D,function(B){return[B,T[B]]})}function hf(T){return T&&T.slice(0,mf(T)+1).replace(Ua,"")}function jt(T){return function(D){return T(D)}}function Ya(T,D){return Ye(D,function(B){return T[B]})}function qi(T,D){return T.has(D)}function gf(T,D){for(var B=-1,Y=T.length;++B<Y&&Yr(D,T[B],0)>-1;);return B}function pf(T,D){for(var B=T.length;B--&&Yr(D,T[B],0)>-1;);return B}function c2(T,D){for(var B=T.length,Y=0;B--;)T[B]===D&&++Y;return Y}var u2=Qa(Gv),f2=Qa(Vv);function d2(T){return"\\"+Zv[T]}function h2(T,D){return T==null?r:T[D]}function Jr(T){return Nv.test(T)}function g2(T){return Wv.test(T)}function p2(T){for(var D,B=[];!(D=T.next()).done;)B.push(D.value);return B}function Ja(T){var D=-1,B=Array(T.size);return T.forEach(function(Y,ge){B[++D]=[ge,Y]}),B}function vf(T,D){return function(B){return T(D(B))}}function ar(T,D){for(var B=-1,Y=T.length,ge=0,Be=[];++B<Y;){var ct=T[B];(ct===D||ct===h)&&(T[B]=h,Be[ge++]=B)}return Be}function Hs(T){var D=-1,B=Array(T.size);return T.forEach(function(Y){B[++D]=Y}),B}function v2(T){var D=-1,B=Array(T.size);return T.forEach(function(Y){B[++D]=[Y,Y]}),B}function m2(T,D,B){for(var Y=B-1,ge=T.length;++Y<ge;)if(T[Y]===D)return Y;return-1}function b2(T,D,B){for(var Y=B+1;Y--;)if(T[Y]===D)return Y;return Y}function ei(T){return Jr(T)?_2(T):r2(T)}function dn(T){return Jr(T)?w2(T):i2(T)}function mf(T){for(var D=T.length;D--&&cv.test(T.charAt(D)););return D}var y2=Qa(Qv);function _2(T){for(var D=za.lastIndex=0;za.test(T);)++D;return D}function w2(T){return T.match(za)||[]}function $2(T){return T.match(zv)||[]}var x2=function T(D){D=D==null?vt:ti.defaults(vt.Object(),D,ti.pick(vt,qv));var B=D.Array,Y=D.Date,ge=D.Error,Be=D.Function,ct=D.Math,We=D.Object,el=D.RegExp,k2=D.String,tn=D.TypeError,Fs=B.prototype,C2=Be.prototype,ni=We.prototype,js=D["__core-js_shared__"],zs=C2.toString,Fe=ni.hasOwnProperty,S2=0,bf=function(){var n=/[^.]+$/.exec(js&&js.keys&&js.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),Ns=ni.toString,E2=zs.call(We),T2=vt._,A2=el("^"+zs.call(Fe).replace(Ba,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ws=ef?D.Buffer:r,lr=D.Symbol,qs=D.Uint8Array,yf=Ws?Ws.allocUnsafe:r,Ks=vf(We.getPrototypeOf,We),_f=We.create,wf=ni.propertyIsEnumerable,Gs=Fs.splice,$f=lr?lr.isConcatSpreadable:r,Ki=lr?lr.iterator:r,Pr=lr?lr.toStringTag:r,Vs=function(){try{var n=Hr(We,"defineProperty");return n({},"",{}),n}catch{}}(),I2=D.clearTimeout!==vt.clearTimeout&&D.clearTimeout,R2=Y&&Y.now!==vt.Date.now&&Y.now,L2=D.setTimeout!==vt.setTimeout&&D.setTimeout,Qs=ct.ceil,Zs=ct.floor,tl=We.getOwnPropertySymbols,O2=Ws?Ws.isBuffer:r,xf=D.isFinite,P2=Fs.join,M2=vf(We.keys,We),ut=ct.max,_t=ct.min,B2=Y.now,U2=D.parseInt,kf=ct.random,D2=Fs.reverse,nl=Hr(D,"DataView"),Gi=Hr(D,"Map"),rl=Hr(D,"Promise"),ri=Hr(D,"Set"),Vi=Hr(D,"WeakMap"),Qi=Hr(We,"create"),Xs=Vi&&new Vi,ii={},H2=Fr(nl),F2=Fr(Gi),j2=Fr(rl),z2=Fr(ri),N2=Fr(Vi),Ys=lr?lr.prototype:r,Zi=Ys?Ys.valueOf:r,Cf=Ys?Ys.toString:r;function m(n){if(nt(n)&&!pe(n)&&!(n instanceof Ce)){if(n instanceof nn)return n;if(Fe.call(n,"__wrapped__"))return Sd(n)}return new nn(n)}var si=function(){function n(){}return function(i){if(!et(i))return{};if(_f)return _f(i);n.prototype=i;var a=new n;return n.prototype=r,a}}();function Js(){}function nn(n,i){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}m.templateSettings={escape:rv,evaluate:iv,interpolate:Ou,variable:"",imports:{_:m}},m.prototype=Js.prototype,m.prototype.constructor=m,nn.prototype=si(Js.prototype),nn.prototype.constructor=nn;function Ce(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=J,this.__views__=[]}function W2(){var n=new Ce(this.__wrapped__);return n.__actions__=Pt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Pt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Pt(this.__views__),n}function q2(){if(this.__filtered__){var n=new Ce(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function K2(){var n=this.__wrapped__.value(),i=this.__dir__,a=pe(n),f=i<0,p=a?n.length:0,y=ib(0,p,this.__views__),x=y.start,C=y.end,A=C-x,H=f?C:x-1,F=this.__iteratees__,W=F.length,V=0,ie=_t(A,this.__takeCount__);if(!a||!f&&p==A&&ie==A)return Qf(n,this.__actions__);var fe=[];e:for(;A--&&V<ie;){H+=i;for(var ye=-1,de=n[H];++ye<W;){var xe=F[ye],Se=xe.iteratee,Wt=xe.type,Tt=Se(de);if(Wt==Le)de=Tt;else if(!Tt){if(Wt==te)continue e;break e}}fe[V++]=de}return fe}Ce.prototype=si(Js.prototype),Ce.prototype.constructor=Ce;function Mr(n){var i=-1,a=n==null?0:n.length;for(this.clear();++i<a;){var f=n[i];this.set(f[0],f[1])}}function G2(){this.__data__=Qi?Qi(null):{},this.size=0}function V2(n){var i=this.has(n)&&delete this.__data__[n];return this.size-=i?1:0,i}function Q2(n){var i=this.__data__;if(Qi){var a=i[n];return a===d?r:a}return Fe.call(i,n)?i[n]:r}function Z2(n){var i=this.__data__;return Qi?i[n]!==r:Fe.call(i,n)}function X2(n,i){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=Qi&&i===r?d:i,this}Mr.prototype.clear=G2,Mr.prototype.delete=V2,Mr.prototype.get=Q2,Mr.prototype.has=Z2,Mr.prototype.set=X2;function Dn(n){var i=-1,a=n==null?0:n.length;for(this.clear();++i<a;){var f=n[i];this.set(f[0],f[1])}}function Y2(){this.__data__=[],this.size=0}function J2(n){var i=this.__data__,a=eo(i,n);if(a<0)return!1;var f=i.length-1;return a==f?i.pop():Gs.call(i,a,1),--this.size,!0}function em(n){var i=this.__data__,a=eo(i,n);return a<0?r:i[a][1]}function tm(n){return eo(this.__data__,n)>-1}function nm(n,i){var a=this.__data__,f=eo(a,n);return f<0?(++this.size,a.push([n,i])):a[f][1]=i,this}Dn.prototype.clear=Y2,Dn.prototype.delete=J2,Dn.prototype.get=em,Dn.prototype.has=tm,Dn.prototype.set=nm;function Hn(n){var i=-1,a=n==null?0:n.length;for(this.clear();++i<a;){var f=n[i];this.set(f[0],f[1])}}function rm(){this.size=0,this.__data__={hash:new Mr,map:new(Gi||Dn),string:new Mr}}function im(n){var i=ho(this,n).delete(n);return this.size-=i?1:0,i}function sm(n){return ho(this,n).get(n)}function om(n){return ho(this,n).has(n)}function am(n,i){var a=ho(this,n),f=a.size;return a.set(n,i),this.size+=a.size==f?0:1,this}Hn.prototype.clear=rm,Hn.prototype.delete=im,Hn.prototype.get=sm,Hn.prototype.has=om,Hn.prototype.set=am;function Br(n){var i=-1,a=n==null?0:n.length;for(this.__data__=new Hn;++i<a;)this.add(n[i])}function lm(n){return this.__data__.set(n,d),this}function cm(n){return this.__data__.has(n)}Br.prototype.add=Br.prototype.push=lm,Br.prototype.has=cm;function hn(n){var i=this.__data__=new Dn(n);this.size=i.size}function um(){this.__data__=new Dn,this.size=0}function fm(n){var i=this.__data__,a=i.delete(n);return this.size=i.size,a}function dm(n){return this.__data__.get(n)}function hm(n){return this.__data__.has(n)}function gm(n,i){var a=this.__data__;if(a instanceof Dn){var f=a.__data__;if(!Gi||f.length<o-1)return f.push([n,i]),this.size=++a.size,this;a=this.__data__=new Hn(f)}return a.set(n,i),this.size=a.size,this}hn.prototype.clear=um,hn.prototype.delete=fm,hn.prototype.get=dm,hn.prototype.has=hm,hn.prototype.set=gm;function Sf(n,i){var a=pe(n),f=!a&&jr(n),p=!a&&!f&&hr(n),y=!a&&!f&&!p&&ci(n),x=a||f||p||y,C=x?Xa(n.length,k2):[],A=C.length;for(var H in n)(i||Fe.call(n,H))&&!(x&&(H=="length"||p&&(H=="offset"||H=="parent")||y&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||Nn(H,A)))&&C.push(H);return C}function Ef(n){var i=n.length;return i?n[gl(0,i-1)]:r}function pm(n,i){return go(Pt(n),Ur(i,0,n.length))}function vm(n){return go(Pt(n))}function il(n,i,a){(a!==r&&!gn(n[i],a)||a===r&&!(i in n))&&Fn(n,i,a)}function Xi(n,i,a){var f=n[i];(!(Fe.call(n,i)&&gn(f,a))||a===r&&!(i in n))&&Fn(n,i,a)}function eo(n,i){for(var a=n.length;a--;)if(gn(n[a][0],i))return a;return-1}function mm(n,i,a,f){return cr(n,function(p,y,x){i(f,p,a(p),x)}),f}function Tf(n,i){return n&&Sn(i,ht(i),n)}function bm(n,i){return n&&Sn(i,Bt(i),n)}function Fn(n,i,a){i=="__proto__"&&Vs?Vs(n,i,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[i]=a}function sl(n,i){for(var a=-1,f=i.length,p=B(f),y=n==null;++a<f;)p[a]=y?r:Hl(n,i[a]);return p}function Ur(n,i,a){return n===n&&(a!==r&&(n=n<=a?n:a),i!==r&&(n=n>=i?n:i)),n}function rn(n,i,a,f,p,y){var x,C=i&v,A=i&b,H=i&_;if(a&&(x=p?a(n,f,p,y):a(n)),x!==r)return x;if(!et(n))return n;var F=pe(n);if(F){if(x=ob(n),!C)return Pt(n,x)}else{var W=wt(n),V=W==yt||W==kn;if(hr(n))return Yf(n,C);if(W==tt||W==Z||V&&!p){if(x=A||V?{}:md(n),!C)return A?Qm(n,bm(x,n)):Vm(n,Tf(x,n))}else{if(!qe[W])return p?n:{};x=ab(n,W,C)}}y||(y=new hn);var ie=y.get(n);if(ie)return ie;y.set(n,x),Kd(n)?n.forEach(function(de){x.add(rn(de,i,a,de,n,y))}):Wd(n)&&n.forEach(function(de,xe){x.set(xe,rn(de,i,a,xe,n,y))});var fe=H?A?Cl:kl:A?Bt:ht,ye=F?r:fe(n);return en(ye||n,function(de,xe){ye&&(xe=de,de=n[xe]),Xi(x,xe,rn(de,i,a,xe,n,y))}),x}function ym(n){var i=ht(n);return function(a){return Af(a,n,i)}}function Af(n,i,a){var f=a.length;if(n==null)return!f;for(n=We(n);f--;){var p=a[f],y=i[p],x=n[p];if(x===r&&!(p in n)||!y(x))return!1}return!0}function If(n,i,a){if(typeof n!="function")throw new tn(c);return is(function(){n.apply(r,a)},i)}function Yi(n,i,a,f){var p=-1,y=Us,x=!0,C=n.length,A=[],H=i.length;if(!C)return A;a&&(i=Ye(i,jt(a))),f?(y=qa,x=!1):i.length>=o&&(y=qi,x=!1,i=new Br(i));e:for(;++p<C;){var F=n[p],W=a==null?F:a(F);if(F=f||F!==0?F:0,x&&W===W){for(var V=H;V--;)if(i[V]===W)continue e;A.push(F)}else y(i,W,f)||A.push(F)}return A}var cr=rd(Cn),Rf=rd(al,!0);function _m(n,i){var a=!0;return cr(n,function(f,p,y){return a=!!i(f,p,y),a}),a}function to(n,i,a){for(var f=-1,p=n.length;++f<p;){var y=n[f],x=i(y);if(x!=null&&(C===r?x===x&&!Nt(x):a(x,C)))var C=x,A=y}return A}function wm(n,i,a,f){var p=n.length;for(a=ve(a),a<0&&(a=-a>p?0:p+a),f=f===r||f>p?p:ve(f),f<0&&(f+=p),f=a>f?0:Vd(f);a<f;)n[a++]=i;return n}function Lf(n,i){var a=[];return cr(n,function(f,p,y){i(f,p,y)&&a.push(f)}),a}function mt(n,i,a,f,p){var y=-1,x=n.length;for(a||(a=cb),p||(p=[]);++y<x;){var C=n[y];i>0&&a(C)?i>1?mt(C,i-1,a,f,p):or(p,C):f||(p[p.length]=C)}return p}var ol=id(),Of=id(!0);function Cn(n,i){return n&&ol(n,i,ht)}function al(n,i){return n&&Of(n,i,ht)}function no(n,i){return sr(i,function(a){return Wn(n[a])})}function Dr(n,i){i=fr(i,n);for(var a=0,f=i.length;n!=null&&a<f;)n=n[En(i[a++])];return a&&a==f?n:r}function Pf(n,i,a){var f=i(n);return pe(n)?f:or(f,a(n))}function St(n){return n==null?n===r?Lt:ir:Pr&&Pr in We(n)?rb(n):vb(n)}function ll(n,i){return n>i}function $m(n,i){return n!=null&&Fe.call(n,i)}function xm(n,i){return n!=null&&i in We(n)}function km(n,i,a){return n>=_t(i,a)&&n<ut(i,a)}function cl(n,i,a){for(var f=a?qa:Us,p=n[0].length,y=n.length,x=y,C=B(y),A=1/0,H=[];x--;){var F=n[x];x&&i&&(F=Ye(F,jt(i))),A=_t(F.length,A),C[x]=!a&&(i||p>=120&&F.length>=120)?new Br(x&&F):r}F=n[0];var W=-1,V=C[0];e:for(;++W<p&&H.length<A;){var ie=F[W],fe=i?i(ie):ie;if(ie=a||ie!==0?ie:0,!(V?qi(V,fe):f(H,fe,a))){for(x=y;--x;){var ye=C[x];if(!(ye?qi(ye,fe):f(n[x],fe,a)))continue e}V&&V.push(fe),H.push(ie)}}return H}function Cm(n,i,a,f){return Cn(n,function(p,y,x){i(f,a(p),y,x)}),f}function Ji(n,i,a){i=fr(i,n),n=wd(n,i);var f=n==null?n:n[En(on(i))];return f==null?r:Ft(f,n,a)}function Mf(n){return nt(n)&&St(n)==Z}function Sm(n){return nt(n)&&St(n)==be}function Em(n){return nt(n)&&St(n)==oe}function es(n,i,a,f,p){return n===i?!0:n==null||i==null||!nt(n)&&!nt(i)?n!==n&&i!==i:Tm(n,i,a,f,es,p)}function Tm(n,i,a,f,p,y){var x=pe(n),C=pe(i),A=x?lt:wt(n),H=C?lt:wt(i);A=A==Z?tt:A,H=H==Z?tt:H;var F=A==tt,W=H==tt,V=A==H;if(V&&hr(n)){if(!hr(i))return!1;x=!0,F=!1}if(V&&!F)return y||(y=new hn),x||ci(n)?gd(n,i,a,f,p,y):tb(n,i,A,a,f,p,y);if(!(a&$)){var ie=F&&Fe.call(n,"__wrapped__"),fe=W&&Fe.call(i,"__wrapped__");if(ie||fe){var ye=ie?n.value():n,de=fe?i.value():i;return y||(y=new hn),p(ye,de,a,f,y)}}return V?(y||(y=new hn),nb(n,i,a,f,p,y)):!1}function Am(n){return nt(n)&&wt(n)==Xe}function ul(n,i,a,f){var p=a.length,y=p,x=!f;if(n==null)return!y;for(n=We(n);p--;){var C=a[p];if(x&&C[2]?C[1]!==n[C[0]]:!(C[0]in n))return!1}for(;++p<y;){C=a[p];var A=C[0],H=n[A],F=C[1];if(x&&C[2]){if(H===r&&!(A in n))return!1}else{var W=new hn;if(f)var V=f(H,F,A,n,i,W);if(!(V===r?es(F,H,$|k,f,W):V))return!1}}return!0}function Bf(n){if(!et(n)||fb(n))return!1;var i=Wn(n)?A2:yv;return i.test(Fr(n))}function Im(n){return nt(n)&&St(n)==he}function Rm(n){return nt(n)&&wt(n)==Oe}function Lm(n){return nt(n)&&_o(n.length)&&!!Ve[St(n)]}function Uf(n){return typeof n=="function"?n:n==null?Ut:typeof n=="object"?pe(n)?Ff(n[0],n[1]):Hf(n):sh(n)}function fl(n){if(!rs(n))return M2(n);var i=[];for(var a in We(n))Fe.call(n,a)&&a!="constructor"&&i.push(a);return i}function Om(n){if(!et(n))return pb(n);var i=rs(n),a=[];for(var f in n)f=="constructor"&&(i||!Fe.call(n,f))||a.push(f);return a}function dl(n,i){return n<i}function Df(n,i){var a=-1,f=Mt(n)?B(n.length):[];return cr(n,function(p,y,x){f[++a]=i(p,y,x)}),f}function Hf(n){var i=El(n);return i.length==1&&i[0][2]?yd(i[0][0],i[0][1]):function(a){return a===n||ul(a,n,i)}}function Ff(n,i){return Al(n)&&bd(i)?yd(En(n),i):function(a){var f=Hl(a,n);return f===r&&f===i?Fl(a,n):es(i,f,$|k)}}function ro(n,i,a,f,p){n!==i&&ol(i,function(y,x){if(p||(p=new hn),et(y))Pm(n,i,x,a,ro,f,p);else{var C=f?f(Rl(n,x),y,x+"",n,i,p):r;C===r&&(C=y),il(n,x,C)}},Bt)}function Pm(n,i,a,f,p,y,x){var C=Rl(n,a),A=Rl(i,a),H=x.get(A);if(H){il(n,a,H);return}var F=y?y(C,A,a+"",n,i,x):r,W=F===r;if(W){var V=pe(A),ie=!V&&hr(A),fe=!V&&!ie&&ci(A);F=A,V||ie||fe?pe(C)?F=C:it(C)?F=Pt(C):ie?(W=!1,F=Yf(A,!0)):fe?(W=!1,F=Jf(A,!0)):F=[]:ss(A)||jr(A)?(F=C,jr(C)?F=Qd(C):(!et(C)||Wn(C))&&(F=md(A))):W=!1}W&&(x.set(A,F),p(F,A,f,y,x),x.delete(A)),il(n,a,F)}function jf(n,i){var a=n.length;if(a)return i+=i<0?a:0,Nn(i,a)?n[i]:r}function zf(n,i,a){i.length?i=Ye(i,function(y){return pe(y)?function(x){return Dr(x,y.length===1?y[0]:y)}:y}):i=[Ut];var f=-1;i=Ye(i,jt(ce()));var p=Df(n,function(y,x,C){var A=Ye(i,function(H){return H(y)});return{criteria:A,index:++f,value:y}});return a2(p,function(y,x){return Gm(y,x,a)})}function Mm(n,i){return Nf(n,i,function(a,f){return Fl(n,f)})}function Nf(n,i,a){for(var f=-1,p=i.length,y={};++f<p;){var x=i[f],C=Dr(n,x);a(C,x)&&ts(y,fr(x,n),C)}return y}function Bm(n){return function(i){return Dr(i,n)}}function hl(n,i,a,f){var p=f?o2:Yr,y=-1,x=i.length,C=n;for(n===i&&(i=Pt(i)),a&&(C=Ye(n,jt(a)));++y<x;)for(var A=0,H=i[y],F=a?a(H):H;(A=p(C,F,A,f))>-1;)C!==n&&Gs.call(C,A,1),Gs.call(n,A,1);return n}function Wf(n,i){for(var a=n?i.length:0,f=a-1;a--;){var p=i[a];if(a==f||p!==y){var y=p;Nn(p)?Gs.call(n,p,1):ml(n,p)}}return n}function gl(n,i){return n+Zs(kf()*(i-n+1))}function Um(n,i,a,f){for(var p=-1,y=ut(Qs((i-n)/(a||1)),0),x=B(y);y--;)x[f?y:++p]=n,n+=a;return x}function pl(n,i){var a="";if(!n||i<1||i>se)return a;do i%2&&(a+=n),i=Zs(i/2),i&&(n+=n);while(i);return a}function we(n,i){return Ll(_d(n,i,Ut),n+"")}function Dm(n){return Ef(ui(n))}function Hm(n,i){var a=ui(n);return go(a,Ur(i,0,a.length))}function ts(n,i,a,f){if(!et(n))return n;i=fr(i,n);for(var p=-1,y=i.length,x=y-1,C=n;C!=null&&++p<y;){var A=En(i[p]),H=a;if(A==="__proto__"||A==="constructor"||A==="prototype")return n;if(p!=x){var F=C[A];H=f?f(F,A,C):r,H===r&&(H=et(F)?F:Nn(i[p+1])?[]:{})}Xi(C,A,H),C=C[A]}return n}var qf=Xs?function(n,i){return Xs.set(n,i),n}:Ut,Fm=Vs?function(n,i){return Vs(n,"toString",{configurable:!0,enumerable:!1,value:zl(i),writable:!0})}:Ut;function jm(n){return go(ui(n))}function sn(n,i,a){var f=-1,p=n.length;i<0&&(i=-i>p?0:p+i),a=a>p?p:a,a<0&&(a+=p),p=i>a?0:a-i>>>0,i>>>=0;for(var y=B(p);++f<p;)y[f]=n[f+i];return y}function zm(n,i){var a;return cr(n,function(f,p,y){return a=i(f,p,y),!a}),!!a}function io(n,i,a){var f=0,p=n==null?f:n.length;if(typeof i=="number"&&i===i&&p<=at){for(;f<p;){var y=f+p>>>1,x=n[y];x!==null&&!Nt(x)&&(a?x<=i:x<i)?f=y+1:p=y}return p}return vl(n,i,Ut,a)}function vl(n,i,a,f){var p=0,y=n==null?0:n.length;if(y===0)return 0;i=a(i);for(var x=i!==i,C=i===null,A=Nt(i),H=i===r;p<y;){var F=Zs((p+y)/2),W=a(n[F]),V=W!==r,ie=W===null,fe=W===W,ye=Nt(W);if(x)var de=f||fe;else H?de=fe&&(f||V):C?de=fe&&V&&(f||!ie):A?de=fe&&V&&!ie&&(f||!ye):ie||ye?de=!1:de=f?W<=i:W<i;de?p=F+1:y=F}return _t(y,Te)}function Kf(n,i){for(var a=-1,f=n.length,p=0,y=[];++a<f;){var x=n[a],C=i?i(x):x;if(!a||!gn(C,A)){var A=C;y[p++]=x===0?0:x}}return y}function Gf(n){return typeof n=="number"?n:Nt(n)?Ee:+n}function zt(n){if(typeof n=="string")return n;if(pe(n))return Ye(n,zt)+"";if(Nt(n))return Cf?Cf.call(n):"";var i=n+"";return i=="0"&&1/n==-ne?"-0":i}function ur(n,i,a){var f=-1,p=Us,y=n.length,x=!0,C=[],A=C;if(a)x=!1,p=qa;else if(y>=o){var H=i?null:Jm(n);if(H)return Hs(H);x=!1,p=qi,A=new Br}else A=i?[]:C;e:for(;++f<y;){var F=n[f],W=i?i(F):F;if(F=a||F!==0?F:0,x&&W===W){for(var V=A.length;V--;)if(A[V]===W)continue e;i&&A.push(W),C.push(F)}else p(A,W,a)||(A!==C&&A.push(W),C.push(F))}return C}function ml(n,i){return i=fr(i,n),n=wd(n,i),n==null||delete n[En(on(i))]}function Vf(n,i,a,f){return ts(n,i,a(Dr(n,i)),f)}function so(n,i,a,f){for(var p=n.length,y=f?p:-1;(f?y--:++y<p)&&i(n[y],y,n););return a?sn(n,f?0:y,f?y+1:p):sn(n,f?y+1:0,f?p:y)}function Qf(n,i){var a=n;return a instanceof Ce&&(a=a.value()),Ka(i,function(f,p){return p.func.apply(p.thisArg,or([f],p.args))},a)}function bl(n,i,a){var f=n.length;if(f<2)return f?ur(n[0]):[];for(var p=-1,y=B(f);++p<f;)for(var x=n[p],C=-1;++C<f;)C!=p&&(y[p]=Yi(y[p]||x,n[C],i,a));return ur(mt(y,1),i,a)}function Zf(n,i,a){for(var f=-1,p=n.length,y=i.length,x={};++f<p;){var C=f<y?i[f]:r;a(x,n[f],C)}return x}function yl(n){return it(n)?n:[]}function _l(n){return typeof n=="function"?n:Ut}function fr(n,i){return pe(n)?n:Al(n,i)?[n]:Cd(He(n))}var Nm=we;function dr(n,i,a){var f=n.length;return a=a===r?f:a,!i&&a>=f?n:sn(n,i,a)}var Xf=I2||function(n){return vt.clearTimeout(n)};function Yf(n,i){if(i)return n.slice();var a=n.length,f=yf?yf(a):new n.constructor(a);return n.copy(f),f}function wl(n){var i=new n.constructor(n.byteLength);return new qs(i).set(new qs(n)),i}function Wm(n,i){var a=i?wl(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.byteLength)}function qm(n){var i=new n.constructor(n.source,Pu.exec(n));return i.lastIndex=n.lastIndex,i}function Km(n){return Zi?We(Zi.call(n)):{}}function Jf(n,i){var a=i?wl(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.length)}function ed(n,i){if(n!==i){var a=n!==r,f=n===null,p=n===n,y=Nt(n),x=i!==r,C=i===null,A=i===i,H=Nt(i);if(!C&&!H&&!y&&n>i||y&&x&&A&&!C&&!H||f&&x&&A||!a&&A||!p)return 1;if(!f&&!y&&!H&&n<i||H&&a&&p&&!f&&!y||C&&a&&p||!x&&p||!A)return-1}return 0}function Gm(n,i,a){for(var f=-1,p=n.criteria,y=i.criteria,x=p.length,C=a.length;++f<x;){var A=ed(p[f],y[f]);if(A){if(f>=C)return A;var H=a[f];return A*(H=="desc"?-1:1)}}return n.index-i.index}function td(n,i,a,f){for(var p=-1,y=n.length,x=a.length,C=-1,A=i.length,H=ut(y-x,0),F=B(A+H),W=!f;++C<A;)F[C]=i[C];for(;++p<x;)(W||p<y)&&(F[a[p]]=n[p]);for(;H--;)F[C++]=n[p++];return F}function nd(n,i,a,f){for(var p=-1,y=n.length,x=-1,C=a.length,A=-1,H=i.length,F=ut(y-C,0),W=B(F+H),V=!f;++p<F;)W[p]=n[p];for(var ie=p;++A<H;)W[ie+A]=i[A];for(;++x<C;)(V||p<y)&&(W[ie+a[x]]=n[p++]);return W}function Pt(n,i){var a=-1,f=n.length;for(i||(i=B(f));++a<f;)i[a]=n[a];return i}function Sn(n,i,a,f){var p=!a;a||(a={});for(var y=-1,x=i.length;++y<x;){var C=i[y],A=f?f(a[C],n[C],C,a,n):r;A===r&&(A=n[C]),p?Fn(a,C,A):Xi(a,C,A)}return a}function Vm(n,i){return Sn(n,Tl(n),i)}function Qm(n,i){return Sn(n,pd(n),i)}function oo(n,i){return function(a,f){var p=pe(a)?e2:mm,y=i?i():{};return p(a,n,ce(f,2),y)}}function oi(n){return we(function(i,a){var f=-1,p=a.length,y=p>1?a[p-1]:r,x=p>2?a[2]:r;for(y=n.length>3&&typeof y=="function"?(p--,y):r,x&&Et(a[0],a[1],x)&&(y=p<3?r:y,p=1),i=We(i);++f<p;){var C=a[f];C&&n(i,C,f,y)}return i})}function rd(n,i){return function(a,f){if(a==null)return a;if(!Mt(a))return n(a,f);for(var p=a.length,y=i?p:-1,x=We(a);(i?y--:++y<p)&&f(x[y],y,x)!==!1;);return a}}function id(n){return function(i,a,f){for(var p=-1,y=We(i),x=f(i),C=x.length;C--;){var A=x[n?C:++p];if(a(y[A],A,y)===!1)break}return i}}function Zm(n,i,a){var f=i&S,p=ns(n);function y(){var x=this&&this!==vt&&this instanceof y?p:n;return x.apply(f?a:this,arguments)}return y}function sd(n){return function(i){i=He(i);var a=Jr(i)?dn(i):r,f=a?a[0]:i.charAt(0),p=a?dr(a,1).join(""):i.slice(1);return f[n]()+p}}function ai(n){return function(i){return Ka(rh(nh(i).replace(Fv,"")),n,"")}}function ns(n){return function(){var i=arguments;switch(i.length){case 0:return new n;case 1:return new n(i[0]);case 2:return new n(i[0],i[1]);case 3:return new n(i[0],i[1],i[2]);case 4:return new n(i[0],i[1],i[2],i[3]);case 5:return new n(i[0],i[1],i[2],i[3],i[4]);case 6:return new n(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new n(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var a=si(n.prototype),f=n.apply(a,i);return et(f)?f:a}}function Xm(n,i,a){var f=ns(n);function p(){for(var y=arguments.length,x=B(y),C=y,A=li(p);C--;)x[C]=arguments[C];var H=y<3&&x[0]!==A&&x[y-1]!==A?[]:ar(x,A);if(y-=H.length,y<a)return ud(n,i,ao,p.placeholder,r,x,H,r,r,a-y);var F=this&&this!==vt&&this instanceof p?f:n;return Ft(F,this,x)}return p}function od(n){return function(i,a,f){var p=We(i);if(!Mt(i)){var y=ce(a,3);i=ht(i),a=function(C){return y(p[C],C,p)}}var x=n(i,a,f);return x>-1?p[y?i[x]:x]:r}}function ad(n){return zn(function(i){var a=i.length,f=a,p=nn.prototype.thru;for(n&&i.reverse();f--;){var y=i[f];if(typeof y!="function")throw new tn(c);if(p&&!x&&fo(y)=="wrapper")var x=new nn([],!0)}for(f=x?f:a;++f<a;){y=i[f];var C=fo(y),A=C=="wrapper"?Sl(y):r;A&&Il(A[0])&&A[1]==(N|M|E|q)&&!A[4].length&&A[9]==1?x=x[fo(A[0])].apply(x,A[3]):x=y.length==1&&Il(y)?x[C]():x.thru(y)}return function(){var H=arguments,F=H[0];if(x&&H.length==1&&pe(F))return x.plant(F).value();for(var W=0,V=a?i[W].apply(this,H):F;++W<a;)V=i[W].call(this,V);return V}})}function ao(n,i,a,f,p,y,x,C,A,H){var F=i&N,W=i&S,V=i&L,ie=i&(M|R),fe=i&re,ye=V?r:ns(n);function de(){for(var xe=arguments.length,Se=B(xe),Wt=xe;Wt--;)Se[Wt]=arguments[Wt];if(ie)var Tt=li(de),qt=c2(Se,Tt);if(f&&(Se=td(Se,f,p,ie)),y&&(Se=nd(Se,y,x,ie)),xe-=qt,ie&&xe<H){var st=ar(Se,Tt);return ud(n,i,ao,de.placeholder,a,Se,st,C,A,H-xe)}var pn=W?a:this,Kn=V?pn[n]:n;return xe=Se.length,C?Se=mb(Se,C):fe&&xe>1&&Se.reverse(),F&&A<xe&&(Se.length=A),this&&this!==vt&&this instanceof de&&(Kn=ye||ns(Kn)),Kn.apply(pn,Se)}return de}function ld(n,i){return function(a,f){return Cm(a,n,i(f),{})}}function lo(n,i){return function(a,f){var p;if(a===r&&f===r)return i;if(a!==r&&(p=a),f!==r){if(p===r)return f;typeof a=="string"||typeof f=="string"?(a=zt(a),f=zt(f)):(a=Gf(a),f=Gf(f)),p=n(a,f)}return p}}function $l(n){return zn(function(i){return i=Ye(i,jt(ce())),we(function(a){var f=this;return n(i,function(p){return Ft(p,f,a)})})})}function co(n,i){i=i===r?" ":zt(i);var a=i.length;if(a<2)return a?pl(i,n):i;var f=pl(i,Qs(n/ei(i)));return Jr(i)?dr(dn(f),0,n).join(""):f.slice(0,n)}function Ym(n,i,a,f){var p=i&S,y=ns(n);function x(){for(var C=-1,A=arguments.length,H=-1,F=f.length,W=B(F+A),V=this&&this!==vt&&this instanceof x?y:n;++H<F;)W[H]=f[H];for(;A--;)W[H++]=arguments[++C];return Ft(V,p?a:this,W)}return x}function cd(n){return function(i,a,f){return f&&typeof f!="number"&&Et(i,a,f)&&(a=f=r),i=qn(i),a===r?(a=i,i=0):a=qn(a),f=f===r?i<a?1:-1:qn(f),Um(i,a,f,n)}}function uo(n){return function(i,a){return typeof i=="string"&&typeof a=="string"||(i=an(i),a=an(a)),n(i,a)}}function ud(n,i,a,f,p,y,x,C,A,H){var F=i&M,W=F?x:r,V=F?r:x,ie=F?y:r,fe=F?r:y;i|=F?E:O,i&=~(F?O:E),i&U||(i&=~(S|L));var ye=[n,i,p,ie,W,fe,V,C,A,H],de=a.apply(r,ye);return Il(n)&&$d(de,ye),de.placeholder=f,xd(de,n,i)}function xl(n){var i=ct[n];return function(a,f){if(a=an(a),f=f==null?0:_t(ve(f),292),f&&xf(a)){var p=(He(a)+"e").split("e"),y=i(p[0]+"e"+(+p[1]+f));return p=(He(y)+"e").split("e"),+(p[0]+"e"+(+p[1]-f))}return i(a)}}var Jm=ri&&1/Hs(new ri([,-0]))[1]==ne?function(n){return new ri(n)}:ql;function fd(n){return function(i){var a=wt(i);return a==Xe?Ja(i):a==Oe?v2(i):l2(i,n(i))}}function jn(n,i,a,f,p,y,x,C){var A=i&L;if(!A&&typeof n!="function")throw new tn(c);var H=f?f.length:0;if(H||(i&=~(E|O),f=p=r),x=x===r?x:ut(ve(x),0),C=C===r?C:ve(C),H-=p?p.length:0,i&O){var F=f,W=p;f=p=r}var V=A?r:Sl(n),ie=[n,i,a,f,p,F,W,y,x,C];if(V&&gb(ie,V),n=ie[0],i=ie[1],a=ie[2],f=ie[3],p=ie[4],C=ie[9]=ie[9]===r?A?0:n.length:ut(ie[9]-H,0),!C&&i&(M|R)&&(i&=~(M|R)),!i||i==S)var fe=Zm(n,i,a);else i==M||i==R?fe=Xm(n,i,C):(i==E||i==(S|E))&&!p.length?fe=Ym(n,i,a,f):fe=ao.apply(r,ie);var ye=V?qf:$d;return xd(ye(fe,ie),n,i)}function dd(n,i,a,f){return n===r||gn(n,ni[a])&&!Fe.call(f,a)?i:n}function hd(n,i,a,f,p,y){return et(n)&&et(i)&&(y.set(i,n),ro(n,i,r,hd,y),y.delete(i)),n}function eb(n){return ss(n)?r:n}function gd(n,i,a,f,p,y){var x=a&$,C=n.length,A=i.length;if(C!=A&&!(x&&A>C))return!1;var H=y.get(n),F=y.get(i);if(H&&F)return H==i&&F==n;var W=-1,V=!0,ie=a&k?new Br:r;for(y.set(n,i),y.set(i,n);++W<C;){var fe=n[W],ye=i[W];if(f)var de=x?f(ye,fe,W,i,n,y):f(fe,ye,W,n,i,y);if(de!==r){if(de)continue;V=!1;break}if(ie){if(!Ga(i,function(xe,Se){if(!qi(ie,Se)&&(fe===xe||p(fe,xe,a,f,y)))return ie.push(Se)})){V=!1;break}}else if(!(fe===ye||p(fe,ye,a,f,y))){V=!1;break}}return y.delete(n),y.delete(i),V}function tb(n,i,a,f,p,y,x){switch(a){case Ne:if(n.byteLength!=i.byteLength||n.byteOffset!=i.byteOffset)return!1;n=n.buffer,i=i.buffer;case be:return!(n.byteLength!=i.byteLength||!y(new qs(n),new qs(i)));case xt:case oe:case Rt:return gn(+n,+i);case rt:return n.name==i.name&&n.message==i.message;case he:case Ge:return n==i+"";case Xe:var C=Ja;case Oe:var A=f&$;if(C||(C=Hs),n.size!=i.size&&!A)return!1;var H=x.get(n);if(H)return H==i;f|=k,x.set(n,i);var F=gd(C(n),C(i),f,p,y,x);return x.delete(n),F;case dt:if(Zi)return Zi.call(n)==Zi.call(i)}return!1}function nb(n,i,a,f,p,y){var x=a&$,C=kl(n),A=C.length,H=kl(i),F=H.length;if(A!=F&&!x)return!1;for(var W=A;W--;){var V=C[W];if(!(x?V in i:Fe.call(i,V)))return!1}var ie=y.get(n),fe=y.get(i);if(ie&&fe)return ie==i&&fe==n;var ye=!0;y.set(n,i),y.set(i,n);for(var de=x;++W<A;){V=C[W];var xe=n[V],Se=i[V];if(f)var Wt=x?f(Se,xe,V,i,n,y):f(xe,Se,V,n,i,y);if(!(Wt===r?xe===Se||p(xe,Se,a,f,y):Wt)){ye=!1;break}de||(de=V=="constructor")}if(ye&&!de){var Tt=n.constructor,qt=i.constructor;Tt!=qt&&"constructor"in n&&"constructor"in i&&!(typeof Tt=="function"&&Tt instanceof Tt&&typeof qt=="function"&&qt instanceof qt)&&(ye=!1)}return y.delete(n),y.delete(i),ye}function zn(n){return Ll(_d(n,r,Ad),n+"")}function kl(n){return Pf(n,ht,Tl)}function Cl(n){return Pf(n,Bt,pd)}var Sl=Xs?function(n){return Xs.get(n)}:ql;function fo(n){for(var i=n.name+"",a=ii[i],f=Fe.call(ii,i)?a.length:0;f--;){var p=a[f],y=p.func;if(y==null||y==n)return p.name}return i}function li(n){var i=Fe.call(m,"placeholder")?m:n;return i.placeholder}function ce(){var n=m.iteratee||Nl;return n=n===Nl?Uf:n,arguments.length?n(arguments[0],arguments[1]):n}function ho(n,i){var a=n.__data__;return ub(i)?a[typeof i=="string"?"string":"hash"]:a.map}function El(n){for(var i=ht(n),a=i.length;a--;){var f=i[a],p=n[f];i[a]=[f,p,bd(p)]}return i}function Hr(n,i){var a=h2(n,i);return Bf(a)?a:r}function rb(n){var i=Fe.call(n,Pr),a=n[Pr];try{n[Pr]=r;var f=!0}catch{}var p=Ns.call(n);return f&&(i?n[Pr]=a:delete n[Pr]),p}var Tl=tl?function(n){return n==null?[]:(n=We(n),sr(tl(n),function(i){return wf.call(n,i)}))}:Kl,pd=tl?function(n){for(var i=[];n;)or(i,Tl(n)),n=Ks(n);return i}:Kl,wt=St;(nl&&wt(new nl(new ArrayBuffer(1)))!=Ne||Gi&&wt(new Gi)!=Xe||rl&&wt(rl.resolve())!=kt||ri&&wt(new ri)!=Oe||Vi&&wt(new Vi)!=le)&&(wt=function(n){var i=St(n),a=i==tt?n.constructor:r,f=a?Fr(a):"";if(f)switch(f){case H2:return Ne;case F2:return Xe;case j2:return kt;case z2:return Oe;case N2:return le}return i});function ib(n,i,a){for(var f=-1,p=a.length;++f<p;){var y=a[f],x=y.size;switch(y.type){case"drop":n+=x;break;case"dropRight":i-=x;break;case"take":i=_t(i,n+x);break;case"takeRight":n=ut(n,i-x);break}}return{start:n,end:i}}function sb(n){var i=n.match(fv);return i?i[1].split(dv):[]}function vd(n,i,a){i=fr(i,n);for(var f=-1,p=i.length,y=!1;++f<p;){var x=En(i[f]);if(!(y=n!=null&&a(n,x)))break;n=n[x]}return y||++f!=p?y:(p=n==null?0:n.length,!!p&&_o(p)&&Nn(x,p)&&(pe(n)||jr(n)))}function ob(n){var i=n.length,a=new n.constructor(i);return i&&typeof n[0]=="string"&&Fe.call(n,"index")&&(a.index=n.index,a.input=n.input),a}function md(n){return typeof n.constructor=="function"&&!rs(n)?si(Ks(n)):{}}function ab(n,i,a){var f=n.constructor;switch(i){case be:return wl(n);case xt:case oe:return new f(+n);case Ne:return Wm(n,a);case Ot:case Ct:case Yt:case fn:case Un:case Qr:case Zr:case Pa:case Ma:return Jf(n,a);case Xe:return new f;case Rt:case Ge:return new f(n);case he:return qm(n);case Oe:return new f;case dt:return Km(n)}}function lb(n,i){var a=i.length;if(!a)return n;var f=a-1;return i[f]=(a>1?"& ":"")+i[f],i=i.join(a>2?", ":" "),n.replace(uv,`{
/* [wrapped with `+i+`] */
`)}function cb(n){return pe(n)||jr(n)||!!($f&&n&&n[$f])}function Nn(n,i){var a=typeof n;return i=i??se,!!i&&(a=="number"||a!="symbol"&&wv.test(n))&&n>-1&&n%1==0&&n<i}function Et(n,i,a){if(!et(a))return!1;var f=typeof i;return(f=="number"?Mt(a)&&Nn(i,a.length):f=="string"&&i in a)?gn(a[i],n):!1}function Al(n,i){if(pe(n))return!1;var a=typeof n;return a=="number"||a=="symbol"||a=="boolean"||n==null||Nt(n)?!0:ov.test(n)||!sv.test(n)||i!=null&&n in We(i)}function ub(n){var i=typeof n;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?n!=="__proto__":n===null}function Il(n){var i=fo(n),a=m[i];if(typeof a!="function"||!(i in Ce.prototype))return!1;if(n===a)return!0;var f=Sl(a);return!!f&&n===f[0]}function fb(n){return!!bf&&bf in n}var db=js?Wn:Gl;function rs(n){var i=n&&n.constructor,a=typeof i=="function"&&i.prototype||ni;return n===a}function bd(n){return n===n&&!et(n)}function yd(n,i){return function(a){return a==null?!1:a[n]===i&&(i!==r||n in We(a))}}function hb(n){var i=bo(n,function(f){return a.size===g&&a.clear(),f}),a=i.cache;return i}function gb(n,i){var a=n[1],f=i[1],p=a|f,y=p<(S|L|N),x=f==N&&a==M||f==N&&a==q&&n[7].length<=i[8]||f==(N|q)&&i[7].length<=i[8]&&a==M;if(!(y||x))return n;f&S&&(n[2]=i[2],p|=a&S?0:U);var C=i[3];if(C){var A=n[3];n[3]=A?td(A,C,i[4]):C,n[4]=A?ar(n[3],h):i[4]}return C=i[5],C&&(A=n[5],n[5]=A?nd(A,C,i[6]):C,n[6]=A?ar(n[5],h):i[6]),C=i[7],C&&(n[7]=C),f&N&&(n[8]=n[8]==null?i[8]:_t(n[8],i[8])),n[9]==null&&(n[9]=i[9]),n[0]=i[0],n[1]=p,n}function pb(n){var i=[];if(n!=null)for(var a in We(n))i.push(a);return i}function vb(n){return Ns.call(n)}function _d(n,i,a){return i=ut(i===r?n.length-1:i,0),function(){for(var f=arguments,p=-1,y=ut(f.length-i,0),x=B(y);++p<y;)x[p]=f[i+p];p=-1;for(var C=B(i+1);++p<i;)C[p]=f[p];return C[i]=a(x),Ft(n,this,C)}}function wd(n,i){return i.length<2?n:Dr(n,sn(i,0,-1))}function mb(n,i){for(var a=n.length,f=_t(i.length,a),p=Pt(n);f--;){var y=i[f];n[f]=Nn(y,a)?p[y]:r}return n}function Rl(n,i){if(!(i==="constructor"&&typeof n[i]=="function")&&i!="__proto__")return n[i]}var $d=kd(qf),is=L2||function(n,i){return vt.setTimeout(n,i)},Ll=kd(Fm);function xd(n,i,a){var f=i+"";return Ll(n,lb(f,bb(sb(f),a)))}function kd(n){var i=0,a=0;return function(){var f=B2(),p=Q-(f-a);if(a=f,p>0){if(++i>=K)return arguments[0]}else i=0;return n.apply(r,arguments)}}function go(n,i){var a=-1,f=n.length,p=f-1;for(i=i===r?f:i;++a<i;){var y=gl(a,p),x=n[y];n[y]=n[a],n[a]=x}return n.length=i,n}var Cd=hb(function(n){var i=[];return n.charCodeAt(0)===46&&i.push(""),n.replace(av,function(a,f,p,y){i.push(p?y.replace(pv,"$1"):f||a)}),i});function En(n){if(typeof n=="string"||Nt(n))return n;var i=n+"";return i=="0"&&1/n==-ne?"-0":i}function Fr(n){if(n!=null){try{return zs.call(n)}catch{}try{return n+""}catch{}}return""}function bb(n,i){return en(rr,function(a){var f="_."+a[0];i&a[1]&&!Us(n,f)&&n.push(f)}),n.sort()}function Sd(n){if(n instanceof Ce)return n.clone();var i=new nn(n.__wrapped__,n.__chain__);return i.__actions__=Pt(n.__actions__),i.__index__=n.__index__,i.__values__=n.__values__,i}function yb(n,i,a){(a?Et(n,i,a):i===r)?i=1:i=ut(ve(i),0);var f=n==null?0:n.length;if(!f||i<1)return[];for(var p=0,y=0,x=B(Qs(f/i));p<f;)x[y++]=sn(n,p,p+=i);return x}function _b(n){for(var i=-1,a=n==null?0:n.length,f=0,p=[];++i<a;){var y=n[i];y&&(p[f++]=y)}return p}function wb(){var n=arguments.length;if(!n)return[];for(var i=B(n-1),a=arguments[0],f=n;f--;)i[f-1]=arguments[f];return or(pe(a)?Pt(a):[a],mt(i,1))}var $b=we(function(n,i){return it(n)?Yi(n,mt(i,1,it,!0)):[]}),xb=we(function(n,i){var a=on(i);return it(a)&&(a=r),it(n)?Yi(n,mt(i,1,it,!0),ce(a,2)):[]}),kb=we(function(n,i){var a=on(i);return it(a)&&(a=r),it(n)?Yi(n,mt(i,1,it,!0),r,a):[]});function Cb(n,i,a){var f=n==null?0:n.length;return f?(i=a||i===r?1:ve(i),sn(n,i<0?0:i,f)):[]}function Sb(n,i,a){var f=n==null?0:n.length;return f?(i=a||i===r?1:ve(i),i=f-i,sn(n,0,i<0?0:i)):[]}function Eb(n,i){return n&&n.length?so(n,ce(i,3),!0,!0):[]}function Tb(n,i){return n&&n.length?so(n,ce(i,3),!0):[]}function Ab(n,i,a,f){var p=n==null?0:n.length;return p?(a&&typeof a!="number"&&Et(n,i,a)&&(a=0,f=p),wm(n,i,a,f)):[]}function Ed(n,i,a){var f=n==null?0:n.length;if(!f)return-1;var p=a==null?0:ve(a);return p<0&&(p=ut(f+p,0)),Ds(n,ce(i,3),p)}function Td(n,i,a){var f=n==null?0:n.length;if(!f)return-1;var p=f-1;return a!==r&&(p=ve(a),p=a<0?ut(f+p,0):_t(p,f-1)),Ds(n,ce(i,3),p,!0)}function Ad(n){var i=n==null?0:n.length;return i?mt(n,1):[]}function Ib(n){var i=n==null?0:n.length;return i?mt(n,ne):[]}function Rb(n,i){var a=n==null?0:n.length;return a?(i=i===r?1:ve(i),mt(n,i)):[]}function Lb(n){for(var i=-1,a=n==null?0:n.length,f={};++i<a;){var p=n[i];f[p[0]]=p[1]}return f}function Id(n){return n&&n.length?n[0]:r}function Ob(n,i,a){var f=n==null?0:n.length;if(!f)return-1;var p=a==null?0:ve(a);return p<0&&(p=ut(f+p,0)),Yr(n,i,p)}function Pb(n){var i=n==null?0:n.length;return i?sn(n,0,-1):[]}var Mb=we(function(n){var i=Ye(n,yl);return i.length&&i[0]===n[0]?cl(i):[]}),Bb=we(function(n){var i=on(n),a=Ye(n,yl);return i===on(a)?i=r:a.pop(),a.length&&a[0]===n[0]?cl(a,ce(i,2)):[]}),Ub=we(function(n){var i=on(n),a=Ye(n,yl);return i=typeof i=="function"?i:r,i&&a.pop(),a.length&&a[0]===n[0]?cl(a,r,i):[]});function Db(n,i){return n==null?"":P2.call(n,i)}function on(n){var i=n==null?0:n.length;return i?n[i-1]:r}function Hb(n,i,a){var f=n==null?0:n.length;if(!f)return-1;var p=f;return a!==r&&(p=ve(a),p=p<0?ut(f+p,0):_t(p,f-1)),i===i?b2(n,i,p):Ds(n,uf,p,!0)}function Fb(n,i){return n&&n.length?jf(n,ve(i)):r}var jb=we(Rd);function Rd(n,i){return n&&n.length&&i&&i.length?hl(n,i):n}function zb(n,i,a){return n&&n.length&&i&&i.length?hl(n,i,ce(a,2)):n}function Nb(n,i,a){return n&&n.length&&i&&i.length?hl(n,i,r,a):n}var Wb=zn(function(n,i){var a=n==null?0:n.length,f=sl(n,i);return Wf(n,Ye(i,function(p){return Nn(p,a)?+p:p}).sort(ed)),f});function qb(n,i){var a=[];if(!(n&&n.length))return a;var f=-1,p=[],y=n.length;for(i=ce(i,3);++f<y;){var x=n[f];i(x,f,n)&&(a.push(x),p.push(f))}return Wf(n,p),a}function Ol(n){return n==null?n:D2.call(n)}function Kb(n,i,a){var f=n==null?0:n.length;return f?(a&&typeof a!="number"&&Et(n,i,a)?(i=0,a=f):(i=i==null?0:ve(i),a=a===r?f:ve(a)),sn(n,i,a)):[]}function Gb(n,i){return io(n,i)}function Vb(n,i,a){return vl(n,i,ce(a,2))}function Qb(n,i){var a=n==null?0:n.length;if(a){var f=io(n,i);if(f<a&&gn(n[f],i))return f}return-1}function Zb(n,i){return io(n,i,!0)}function Xb(n,i,a){return vl(n,i,ce(a,2),!0)}function Yb(n,i){var a=n==null?0:n.length;if(a){var f=io(n,i,!0)-1;if(gn(n[f],i))return f}return-1}function Jb(n){return n&&n.length?Kf(n):[]}function ey(n,i){return n&&n.length?Kf(n,ce(i,2)):[]}function ty(n){var i=n==null?0:n.length;return i?sn(n,1,i):[]}function ny(n,i,a){return n&&n.length?(i=a||i===r?1:ve(i),sn(n,0,i<0?0:i)):[]}function ry(n,i,a){var f=n==null?0:n.length;return f?(i=a||i===r?1:ve(i),i=f-i,sn(n,i<0?0:i,f)):[]}function iy(n,i){return n&&n.length?so(n,ce(i,3),!1,!0):[]}function sy(n,i){return n&&n.length?so(n,ce(i,3)):[]}var oy=we(function(n){return ur(mt(n,1,it,!0))}),ay=we(function(n){var i=on(n);return it(i)&&(i=r),ur(mt(n,1,it,!0),ce(i,2))}),ly=we(function(n){var i=on(n);return i=typeof i=="function"?i:r,ur(mt(n,1,it,!0),r,i)});function cy(n){return n&&n.length?ur(n):[]}function uy(n,i){return n&&n.length?ur(n,ce(i,2)):[]}function fy(n,i){return i=typeof i=="function"?i:r,n&&n.length?ur(n,r,i):[]}function Pl(n){if(!(n&&n.length))return[];var i=0;return n=sr(n,function(a){if(it(a))return i=ut(a.length,i),!0}),Xa(i,function(a){return Ye(n,Va(a))})}function Ld(n,i){if(!(n&&n.length))return[];var a=Pl(n);return i==null?a:Ye(a,function(f){return Ft(i,r,f)})}var dy=we(function(n,i){return it(n)?Yi(n,i):[]}),hy=we(function(n){return bl(sr(n,it))}),gy=we(function(n){var i=on(n);return it(i)&&(i=r),bl(sr(n,it),ce(i,2))}),py=we(function(n){var i=on(n);return i=typeof i=="function"?i:r,bl(sr(n,it),r,i)}),vy=we(Pl);function my(n,i){return Zf(n||[],i||[],Xi)}function by(n,i){return Zf(n||[],i||[],ts)}var yy=we(function(n){var i=n.length,a=i>1?n[i-1]:r;return a=typeof a=="function"?(n.pop(),a):r,Ld(n,a)});function Od(n){var i=m(n);return i.__chain__=!0,i}function _y(n,i){return i(n),n}function po(n,i){return i(n)}var wy=zn(function(n){var i=n.length,a=i?n[0]:0,f=this.__wrapped__,p=function(y){return sl(y,n)};return i>1||this.__actions__.length||!(f instanceof Ce)||!Nn(a)?this.thru(p):(f=f.slice(a,+a+(i?1:0)),f.__actions__.push({func:po,args:[p],thisArg:r}),new nn(f,this.__chain__).thru(function(y){return i&&!y.length&&y.push(r),y}))});function $y(){return Od(this)}function xy(){return new nn(this.value(),this.__chain__)}function ky(){this.__values__===r&&(this.__values__=Gd(this.value()));var n=this.__index__>=this.__values__.length,i=n?r:this.__values__[this.__index__++];return{done:n,value:i}}function Cy(){return this}function Sy(n){for(var i,a=this;a instanceof Js;){var f=Sd(a);f.__index__=0,f.__values__=r,i?p.__wrapped__=f:i=f;var p=f;a=a.__wrapped__}return p.__wrapped__=n,i}function Ey(){var n=this.__wrapped__;if(n instanceof Ce){var i=n;return this.__actions__.length&&(i=new Ce(this)),i=i.reverse(),i.__actions__.push({func:po,args:[Ol],thisArg:r}),new nn(i,this.__chain__)}return this.thru(Ol)}function Ty(){return Qf(this.__wrapped__,this.__actions__)}var Ay=oo(function(n,i,a){Fe.call(n,a)?++n[a]:Fn(n,a,1)});function Iy(n,i,a){var f=pe(n)?lf:_m;return a&&Et(n,i,a)&&(i=r),f(n,ce(i,3))}function Ry(n,i){var a=pe(n)?sr:Lf;return a(n,ce(i,3))}var Ly=od(Ed),Oy=od(Td);function Py(n,i){return mt(vo(n,i),1)}function My(n,i){return mt(vo(n,i),ne)}function By(n,i,a){return a=a===r?1:ve(a),mt(vo(n,i),a)}function Pd(n,i){var a=pe(n)?en:cr;return a(n,ce(i,3))}function Md(n,i){var a=pe(n)?t2:Rf;return a(n,ce(i,3))}var Uy=oo(function(n,i,a){Fe.call(n,a)?n[a].push(i):Fn(n,a,[i])});function Dy(n,i,a,f){n=Mt(n)?n:ui(n),a=a&&!f?ve(a):0;var p=n.length;return a<0&&(a=ut(p+a,0)),wo(n)?a<=p&&n.indexOf(i,a)>-1:!!p&&Yr(n,i,a)>-1}var Hy=we(function(n,i,a){var f=-1,p=typeof i=="function",y=Mt(n)?B(n.length):[];return cr(n,function(x){y[++f]=p?Ft(i,x,a):Ji(x,i,a)}),y}),Fy=oo(function(n,i,a){Fn(n,a,i)});function vo(n,i){var a=pe(n)?Ye:Df;return a(n,ce(i,3))}function jy(n,i,a,f){return n==null?[]:(pe(i)||(i=i==null?[]:[i]),a=f?r:a,pe(a)||(a=a==null?[]:[a]),zf(n,i,a))}var zy=oo(function(n,i,a){n[a?0:1].push(i)},function(){return[[],[]]});function Ny(n,i,a){var f=pe(n)?Ka:df,p=arguments.length<3;return f(n,ce(i,4),a,p,cr)}function Wy(n,i,a){var f=pe(n)?n2:df,p=arguments.length<3;return f(n,ce(i,4),a,p,Rf)}function qy(n,i){var a=pe(n)?sr:Lf;return a(n,yo(ce(i,3)))}function Ky(n){var i=pe(n)?Ef:Dm;return i(n)}function Gy(n,i,a){(a?Et(n,i,a):i===r)?i=1:i=ve(i);var f=pe(n)?pm:Hm;return f(n,i)}function Vy(n){var i=pe(n)?vm:jm;return i(n)}function Qy(n){if(n==null)return 0;if(Mt(n))return wo(n)?ei(n):n.length;var i=wt(n);return i==Xe||i==Oe?n.size:fl(n).length}function Zy(n,i,a){var f=pe(n)?Ga:zm;return a&&Et(n,i,a)&&(i=r),f(n,ce(i,3))}var Xy=we(function(n,i){if(n==null)return[];var a=i.length;return a>1&&Et(n,i[0],i[1])?i=[]:a>2&&Et(i[0],i[1],i[2])&&(i=[i[0]]),zf(n,mt(i,1),[])}),mo=R2||function(){return vt.Date.now()};function Yy(n,i){if(typeof i!="function")throw new tn(c);return n=ve(n),function(){if(--n<1)return i.apply(this,arguments)}}function Bd(n,i,a){return i=a?r:i,i=n&&i==null?n.length:i,jn(n,N,r,r,r,r,i)}function Ud(n,i){var a;if(typeof i!="function")throw new tn(c);return n=ve(n),function(){return--n>0&&(a=i.apply(this,arguments)),n<=1&&(i=r),a}}var Ml=we(function(n,i,a){var f=S;if(a.length){var p=ar(a,li(Ml));f|=E}return jn(n,f,i,a,p)}),Dd=we(function(n,i,a){var f=S|L;if(a.length){var p=ar(a,li(Dd));f|=E}return jn(i,f,n,a,p)});function Hd(n,i,a){i=a?r:i;var f=jn(n,M,r,r,r,r,r,i);return f.placeholder=Hd.placeholder,f}function Fd(n,i,a){i=a?r:i;var f=jn(n,R,r,r,r,r,r,i);return f.placeholder=Fd.placeholder,f}function jd(n,i,a){var f,p,y,x,C,A,H=0,F=!1,W=!1,V=!0;if(typeof n!="function")throw new tn(c);i=an(i)||0,et(a)&&(F=!!a.leading,W="maxWait"in a,y=W?ut(an(a.maxWait)||0,i):y,V="trailing"in a?!!a.trailing:V);function ie(st){var pn=f,Kn=p;return f=p=r,H=st,x=n.apply(Kn,pn),x}function fe(st){return H=st,C=is(xe,i),F?ie(st):x}function ye(st){var pn=st-A,Kn=st-H,oh=i-pn;return W?_t(oh,y-Kn):oh}function de(st){var pn=st-A,Kn=st-H;return A===r||pn>=i||pn<0||W&&Kn>=y}function xe(){var st=mo();if(de(st))return Se(st);C=is(xe,ye(st))}function Se(st){return C=r,V&&f?ie(st):(f=p=r,x)}function Wt(){C!==r&&Xf(C),H=0,f=A=p=C=r}function Tt(){return C===r?x:Se(mo())}function qt(){var st=mo(),pn=de(st);if(f=arguments,p=this,A=st,pn){if(C===r)return fe(A);if(W)return Xf(C),C=is(xe,i),ie(A)}return C===r&&(C=is(xe,i)),x}return qt.cancel=Wt,qt.flush=Tt,qt}var Jy=we(function(n,i){return If(n,1,i)}),e_=we(function(n,i,a){return If(n,an(i)||0,a)});function t_(n){return jn(n,re)}function bo(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new tn(c);var a=function(){var f=arguments,p=i?i.apply(this,f):f[0],y=a.cache;if(y.has(p))return y.get(p);var x=n.apply(this,f);return a.cache=y.set(p,x)||y,x};return a.cache=new(bo.Cache||Hn),a}bo.Cache=Hn;function yo(n){if(typeof n!="function")throw new tn(c);return function(){var i=arguments;switch(i.length){case 0:return!n.call(this);case 1:return!n.call(this,i[0]);case 2:return!n.call(this,i[0],i[1]);case 3:return!n.call(this,i[0],i[1],i[2])}return!n.apply(this,i)}}function n_(n){return Ud(2,n)}var r_=Nm(function(n,i){i=i.length==1&&pe(i[0])?Ye(i[0],jt(ce())):Ye(mt(i,1),jt(ce()));var a=i.length;return we(function(f){for(var p=-1,y=_t(f.length,a);++p<y;)f[p]=i[p].call(this,f[p]);return Ft(n,this,f)})}),Bl=we(function(n,i){var a=ar(i,li(Bl));return jn(n,E,r,i,a)}),zd=we(function(n,i){var a=ar(i,li(zd));return jn(n,O,r,i,a)}),i_=zn(function(n,i){return jn(n,q,r,r,r,i)});function s_(n,i){if(typeof n!="function")throw new tn(c);return i=i===r?i:ve(i),we(n,i)}function o_(n,i){if(typeof n!="function")throw new tn(c);return i=i==null?0:ut(ve(i),0),we(function(a){var f=a[i],p=dr(a,0,i);return f&&or(p,f),Ft(n,this,p)})}function a_(n,i,a){var f=!0,p=!0;if(typeof n!="function")throw new tn(c);return et(a)&&(f="leading"in a?!!a.leading:f,p="trailing"in a?!!a.trailing:p),jd(n,i,{leading:f,maxWait:i,trailing:p})}function l_(n){return Bd(n,1)}function c_(n,i){return Bl(_l(i),n)}function u_(){if(!arguments.length)return[];var n=arguments[0];return pe(n)?n:[n]}function f_(n){return rn(n,_)}function d_(n,i){return i=typeof i=="function"?i:r,rn(n,_,i)}function h_(n){return rn(n,v|_)}function g_(n,i){return i=typeof i=="function"?i:r,rn(n,v|_,i)}function p_(n,i){return i==null||Af(n,i,ht(i))}function gn(n,i){return n===i||n!==n&&i!==i}var v_=uo(ll),m_=uo(function(n,i){return n>=i}),jr=Mf(function(){return arguments}())?Mf:function(n){return nt(n)&&Fe.call(n,"callee")&&!wf.call(n,"callee")},pe=B.isArray,b_=tf?jt(tf):Sm;function Mt(n){return n!=null&&_o(n.length)&&!Wn(n)}function it(n){return nt(n)&&Mt(n)}function y_(n){return n===!0||n===!1||nt(n)&&St(n)==xt}var hr=O2||Gl,__=nf?jt(nf):Em;function w_(n){return nt(n)&&n.nodeType===1&&!ss(n)}function $_(n){if(n==null)return!0;if(Mt(n)&&(pe(n)||typeof n=="string"||typeof n.splice=="function"||hr(n)||ci(n)||jr(n)))return!n.length;var i=wt(n);if(i==Xe||i==Oe)return!n.size;if(rs(n))return!fl(n).length;for(var a in n)if(Fe.call(n,a))return!1;return!0}function x_(n,i){return es(n,i)}function k_(n,i,a){a=typeof a=="function"?a:r;var f=a?a(n,i):r;return f===r?es(n,i,r,a):!!f}function Ul(n){if(!nt(n))return!1;var i=St(n);return i==rt||i==ft||typeof n.message=="string"&&typeof n.name=="string"&&!ss(n)}function C_(n){return typeof n=="number"&&xf(n)}function Wn(n){if(!et(n))return!1;var i=St(n);return i==yt||i==kn||i==Zt||i==Bn}function Nd(n){return typeof n=="number"&&n==ve(n)}function _o(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=se}function et(n){var i=typeof n;return n!=null&&(i=="object"||i=="function")}function nt(n){return n!=null&&typeof n=="object"}var Wd=rf?jt(rf):Am;function S_(n,i){return n===i||ul(n,i,El(i))}function E_(n,i,a){return a=typeof a=="function"?a:r,ul(n,i,El(i),a)}function T_(n){return qd(n)&&n!=+n}function A_(n){if(db(n))throw new ge(l);return Bf(n)}function I_(n){return n===null}function R_(n){return n==null}function qd(n){return typeof n=="number"||nt(n)&&St(n)==Rt}function ss(n){if(!nt(n)||St(n)!=tt)return!1;var i=Ks(n);if(i===null)return!0;var a=Fe.call(i,"constructor")&&i.constructor;return typeof a=="function"&&a instanceof a&&zs.call(a)==E2}var Dl=sf?jt(sf):Im;function L_(n){return Nd(n)&&n>=-se&&n<=se}var Kd=of?jt(of):Rm;function wo(n){return typeof n=="string"||!pe(n)&&nt(n)&&St(n)==Ge}function Nt(n){return typeof n=="symbol"||nt(n)&&St(n)==dt}var ci=af?jt(af):Lm;function O_(n){return n===r}function P_(n){return nt(n)&&wt(n)==le}function M_(n){return nt(n)&&St(n)==Xt}var B_=uo(dl),U_=uo(function(n,i){return n<=i});function Gd(n){if(!n)return[];if(Mt(n))return wo(n)?dn(n):Pt(n);if(Ki&&n[Ki])return p2(n[Ki]());var i=wt(n),a=i==Xe?Ja:i==Oe?Hs:ui;return a(n)}function qn(n){if(!n)return n===0?n:0;if(n=an(n),n===ne||n===-ne){var i=n<0?-1:1;return i*je}return n===n?n:0}function ve(n){var i=qn(n),a=i%1;return i===i?a?i-a:i:0}function Vd(n){return n?Ur(ve(n),0,J):0}function an(n){if(typeof n=="number")return n;if(Nt(n))return Ee;if(et(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=et(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=hf(n);var a=bv.test(n);return a||_v.test(n)?Yv(n.slice(2),a?2:8):mv.test(n)?Ee:+n}function Qd(n){return Sn(n,Bt(n))}function D_(n){return n?Ur(ve(n),-se,se):n===0?n:0}function He(n){return n==null?"":zt(n)}var H_=oi(function(n,i){if(rs(i)||Mt(i)){Sn(i,ht(i),n);return}for(var a in i)Fe.call(i,a)&&Xi(n,a,i[a])}),Zd=oi(function(n,i){Sn(i,Bt(i),n)}),$o=oi(function(n,i,a,f){Sn(i,Bt(i),n,f)}),F_=oi(function(n,i,a,f){Sn(i,ht(i),n,f)}),j_=zn(sl);function z_(n,i){var a=si(n);return i==null?a:Tf(a,i)}var N_=we(function(n,i){n=We(n);var a=-1,f=i.length,p=f>2?i[2]:r;for(p&&Et(i[0],i[1],p)&&(f=1);++a<f;)for(var y=i[a],x=Bt(y),C=-1,A=x.length;++C<A;){var H=x[C],F=n[H];(F===r||gn(F,ni[H])&&!Fe.call(n,H))&&(n[H]=y[H])}return n}),W_=we(function(n){return n.push(r,hd),Ft(Xd,r,n)});function q_(n,i){return cf(n,ce(i,3),Cn)}function K_(n,i){return cf(n,ce(i,3),al)}function G_(n,i){return n==null?n:ol(n,ce(i,3),Bt)}function V_(n,i){return n==null?n:Of(n,ce(i,3),Bt)}function Q_(n,i){return n&&Cn(n,ce(i,3))}function Z_(n,i){return n&&al(n,ce(i,3))}function X_(n){return n==null?[]:no(n,ht(n))}function Y_(n){return n==null?[]:no(n,Bt(n))}function Hl(n,i,a){var f=n==null?r:Dr(n,i);return f===r?a:f}function J_(n,i){return n!=null&&vd(n,i,$m)}function Fl(n,i){return n!=null&&vd(n,i,xm)}var e3=ld(function(n,i,a){i!=null&&typeof i.toString!="function"&&(i=Ns.call(i)),n[i]=a},zl(Ut)),t3=ld(function(n,i,a){i!=null&&typeof i.toString!="function"&&(i=Ns.call(i)),Fe.call(n,i)?n[i].push(a):n[i]=[a]},ce),n3=we(Ji);function ht(n){return Mt(n)?Sf(n):fl(n)}function Bt(n){return Mt(n)?Sf(n,!0):Om(n)}function r3(n,i){var a={};return i=ce(i,3),Cn(n,function(f,p,y){Fn(a,i(f,p,y),f)}),a}function i3(n,i){var a={};return i=ce(i,3),Cn(n,function(f,p,y){Fn(a,p,i(f,p,y))}),a}var s3=oi(function(n,i,a){ro(n,i,a)}),Xd=oi(function(n,i,a,f){ro(n,i,a,f)}),o3=zn(function(n,i){var a={};if(n==null)return a;var f=!1;i=Ye(i,function(y){return y=fr(y,n),f||(f=y.length>1),y}),Sn(n,Cl(n),a),f&&(a=rn(a,v|b|_,eb));for(var p=i.length;p--;)ml(a,i[p]);return a});function a3(n,i){return Yd(n,yo(ce(i)))}var l3=zn(function(n,i){return n==null?{}:Mm(n,i)});function Yd(n,i){if(n==null)return{};var a=Ye(Cl(n),function(f){return[f]});return i=ce(i),Nf(n,a,function(f,p){return i(f,p[0])})}function c3(n,i,a){i=fr(i,n);var f=-1,p=i.length;for(p||(p=1,n=r);++f<p;){var y=n==null?r:n[En(i[f])];y===r&&(f=p,y=a),n=Wn(y)?y.call(n):y}return n}function u3(n,i,a){return n==null?n:ts(n,i,a)}function f3(n,i,a,f){return f=typeof f=="function"?f:r,n==null?n:ts(n,i,a,f)}var Jd=fd(ht),eh=fd(Bt);function d3(n,i,a){var f=pe(n),p=f||hr(n)||ci(n);if(i=ce(i,4),a==null){var y=n&&n.constructor;p?a=f?new y:[]:et(n)?a=Wn(y)?si(Ks(n)):{}:a={}}return(p?en:Cn)(n,function(x,C,A){return i(a,x,C,A)}),a}function h3(n,i){return n==null?!0:ml(n,i)}function g3(n,i,a){return n==null?n:Vf(n,i,_l(a))}function p3(n,i,a,f){return f=typeof f=="function"?f:r,n==null?n:Vf(n,i,_l(a),f)}function ui(n){return n==null?[]:Ya(n,ht(n))}function v3(n){return n==null?[]:Ya(n,Bt(n))}function m3(n,i,a){return a===r&&(a=i,i=r),a!==r&&(a=an(a),a=a===a?a:0),i!==r&&(i=an(i),i=i===i?i:0),Ur(an(n),i,a)}function b3(n,i,a){return i=qn(i),a===r?(a=i,i=0):a=qn(a),n=an(n),km(n,i,a)}function y3(n,i,a){if(a&&typeof a!="boolean"&&Et(n,i,a)&&(i=a=r),a===r&&(typeof i=="boolean"?(a=i,i=r):typeof n=="boolean"&&(a=n,n=r)),n===r&&i===r?(n=0,i=1):(n=qn(n),i===r?(i=n,n=0):i=qn(i)),n>i){var f=n;n=i,i=f}if(a||n%1||i%1){var p=kf();return _t(n+p*(i-n+Xv("1e-"+((p+"").length-1))),i)}return gl(n,i)}var _3=ai(function(n,i,a){return i=i.toLowerCase(),n+(a?th(i):i)});function th(n){return jl(He(n).toLowerCase())}function nh(n){return n=He(n),n&&n.replace($v,u2).replace(jv,"")}function w3(n,i,a){n=He(n),i=zt(i);var f=n.length;a=a===r?f:Ur(ve(a),0,f);var p=a;return a-=i.length,a>=0&&n.slice(a,p)==i}function $3(n){return n=He(n),n&&nv.test(n)?n.replace(Lu,f2):n}function x3(n){return n=He(n),n&&lv.test(n)?n.replace(Ba,"\\$&"):n}var k3=ai(function(n,i,a){return n+(a?"-":"")+i.toLowerCase()}),C3=ai(function(n,i,a){return n+(a?" ":"")+i.toLowerCase()}),S3=sd("toLowerCase");function E3(n,i,a){n=He(n),i=ve(i);var f=i?ei(n):0;if(!i||f>=i)return n;var p=(i-f)/2;return co(Zs(p),a)+n+co(Qs(p),a)}function T3(n,i,a){n=He(n),i=ve(i);var f=i?ei(n):0;return i&&f<i?n+co(i-f,a):n}function A3(n,i,a){n=He(n),i=ve(i);var f=i?ei(n):0;return i&&f<i?co(i-f,a)+n:n}function I3(n,i,a){return a||i==null?i=0:i&&(i=+i),U2(He(n).replace(Ua,""),i||0)}function R3(n,i,a){return(a?Et(n,i,a):i===r)?i=1:i=ve(i),pl(He(n),i)}function L3(){var n=arguments,i=He(n[0]);return n.length<3?i:i.replace(n[1],n[2])}var O3=ai(function(n,i,a){return n+(a?"_":"")+i.toLowerCase()});function P3(n,i,a){return a&&typeof a!="number"&&Et(n,i,a)&&(i=a=r),a=a===r?J:a>>>0,a?(n=He(n),n&&(typeof i=="string"||i!=null&&!Dl(i))&&(i=zt(i),!i&&Jr(n))?dr(dn(n),0,a):n.split(i,a)):[]}var M3=ai(function(n,i,a){return n+(a?" ":"")+jl(i)});function B3(n,i,a){return n=He(n),a=a==null?0:Ur(ve(a),0,n.length),i=zt(i),n.slice(a,a+i.length)==i}function U3(n,i,a){var f=m.templateSettings;a&&Et(n,i,a)&&(i=r),n=He(n),i=$o({},i,f,dd);var p=$o({},i.imports,f.imports,dd),y=ht(p),x=Ya(p,y),C,A,H=0,F=i.interpolate||Ps,W="__p += '",V=el((i.escape||Ps).source+"|"+F.source+"|"+(F===Ou?vv:Ps).source+"|"+(i.evaluate||Ps).source+"|$","g"),ie="//# sourceURL="+(Fe.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Kv+"]")+`
`;n.replace(V,function(de,xe,Se,Wt,Tt,qt){return Se||(Se=Wt),W+=n.slice(H,qt).replace(xv,d2),xe&&(C=!0,W+=`' +
__e(`+xe+`) +
'`),Tt&&(A=!0,W+=`';
`+Tt+`;
__p += '`),Se&&(W+=`' +
((__t = (`+Se+`)) == null ? '' : __t) +
'`),H=qt+de.length,de}),W+=`';
`;var fe=Fe.call(i,"variable")&&i.variable;if(!fe)W=`with (obj) {
`+W+`
}
`;else if(gv.test(fe))throw new ge(u);W=(A?W.replace(Yp,""):W).replace(Jp,"$1").replace(ev,"$1;"),W="function("+(fe||"obj")+`) {
`+(fe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(C?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+W+`return __p
}`;var ye=ih(function(){return Be(y,ie+"return "+W).apply(r,x)});if(ye.source=W,Ul(ye))throw ye;return ye}function D3(n){return He(n).toLowerCase()}function H3(n){return He(n).toUpperCase()}function F3(n,i,a){if(n=He(n),n&&(a||i===r))return hf(n);if(!n||!(i=zt(i)))return n;var f=dn(n),p=dn(i),y=gf(f,p),x=pf(f,p)+1;return dr(f,y,x).join("")}function j3(n,i,a){if(n=He(n),n&&(a||i===r))return n.slice(0,mf(n)+1);if(!n||!(i=zt(i)))return n;var f=dn(n),p=pf(f,dn(i))+1;return dr(f,0,p).join("")}function z3(n,i,a){if(n=He(n),n&&(a||i===r))return n.replace(Ua,"");if(!n||!(i=zt(i)))return n;var f=dn(n),p=gf(f,dn(i));return dr(f,p).join("")}function N3(n,i){var a=G,f=ee;if(et(i)){var p="separator"in i?i.separator:p;a="length"in i?ve(i.length):a,f="omission"in i?zt(i.omission):f}n=He(n);var y=n.length;if(Jr(n)){var x=dn(n);y=x.length}if(a>=y)return n;var C=a-ei(f);if(C<1)return f;var A=x?dr(x,0,C).join(""):n.slice(0,C);if(p===r)return A+f;if(x&&(C+=A.length-C),Dl(p)){if(n.slice(C).search(p)){var H,F=A;for(p.global||(p=el(p.source,He(Pu.exec(p))+"g")),p.lastIndex=0;H=p.exec(F);)var W=H.index;A=A.slice(0,W===r?C:W)}}else if(n.indexOf(zt(p),C)!=C){var V=A.lastIndexOf(p);V>-1&&(A=A.slice(0,V))}return A+f}function W3(n){return n=He(n),n&&tv.test(n)?n.replace(Ru,y2):n}var q3=ai(function(n,i,a){return n+(a?" ":"")+i.toUpperCase()}),jl=sd("toUpperCase");function rh(n,i,a){return n=He(n),i=a?r:i,i===r?g2(n)?$2(n):s2(n):n.match(i)||[]}var ih=we(function(n,i){try{return Ft(n,r,i)}catch(a){return Ul(a)?a:new ge(a)}}),K3=zn(function(n,i){return en(i,function(a){a=En(a),Fn(n,a,Ml(n[a],n))}),n});function G3(n){var i=n==null?0:n.length,a=ce();return n=i?Ye(n,function(f){if(typeof f[1]!="function")throw new tn(c);return[a(f[0]),f[1]]}):[],we(function(f){for(var p=-1;++p<i;){var y=n[p];if(Ft(y[0],this,f))return Ft(y[1],this,f)}})}function V3(n){return ym(rn(n,v))}function zl(n){return function(){return n}}function Q3(n,i){return n==null||n!==n?i:n}var Z3=ad(),X3=ad(!0);function Ut(n){return n}function Nl(n){return Uf(typeof n=="function"?n:rn(n,v))}function Y3(n){return Hf(rn(n,v))}function J3(n,i){return Ff(n,rn(i,v))}var ew=we(function(n,i){return function(a){return Ji(a,n,i)}}),tw=we(function(n,i){return function(a){return Ji(n,a,i)}});function Wl(n,i,a){var f=ht(i),p=no(i,f);a==null&&!(et(i)&&(p.length||!f.length))&&(a=i,i=n,n=this,p=no(i,ht(i)));var y=!(et(a)&&"chain"in a)||!!a.chain,x=Wn(n);return en(p,function(C){var A=i[C];n[C]=A,x&&(n.prototype[C]=function(){var H=this.__chain__;if(y||H){var F=n(this.__wrapped__),W=F.__actions__=Pt(this.__actions__);return W.push({func:A,args:arguments,thisArg:n}),F.__chain__=H,F}return A.apply(n,or([this.value()],arguments))})}),n}function nw(){return vt._===this&&(vt._=T2),this}function ql(){}function rw(n){return n=ve(n),we(function(i){return jf(i,n)})}var iw=$l(Ye),sw=$l(lf),ow=$l(Ga);function sh(n){return Al(n)?Va(En(n)):Bm(n)}function aw(n){return function(i){return n==null?r:Dr(n,i)}}var lw=cd(),cw=cd(!0);function Kl(){return[]}function Gl(){return!1}function uw(){return{}}function fw(){return""}function dw(){return!0}function hw(n,i){if(n=ve(n),n<1||n>se)return[];var a=J,f=_t(n,J);i=ce(i),n-=J;for(var p=Xa(f,i);++a<n;)i(a);return p}function gw(n){return pe(n)?Ye(n,En):Nt(n)?[n]:Pt(Cd(He(n)))}function pw(n){var i=++S2;return He(n)+i}var vw=lo(function(n,i){return n+i},0),mw=xl("ceil"),bw=lo(function(n,i){return n/i},1),yw=xl("floor");function _w(n){return n&&n.length?to(n,Ut,ll):r}function ww(n,i){return n&&n.length?to(n,ce(i,2),ll):r}function $w(n){return ff(n,Ut)}function xw(n,i){return ff(n,ce(i,2))}function kw(n){return n&&n.length?to(n,Ut,dl):r}function Cw(n,i){return n&&n.length?to(n,ce(i,2),dl):r}var Sw=lo(function(n,i){return n*i},1),Ew=xl("round"),Tw=lo(function(n,i){return n-i},0);function Aw(n){return n&&n.length?Za(n,Ut):0}function Iw(n,i){return n&&n.length?Za(n,ce(i,2)):0}return m.after=Yy,m.ary=Bd,m.assign=H_,m.assignIn=Zd,m.assignInWith=$o,m.assignWith=F_,m.at=j_,m.before=Ud,m.bind=Ml,m.bindAll=K3,m.bindKey=Dd,m.castArray=u_,m.chain=Od,m.chunk=yb,m.compact=_b,m.concat=wb,m.cond=G3,m.conforms=V3,m.constant=zl,m.countBy=Ay,m.create=z_,m.curry=Hd,m.curryRight=Fd,m.debounce=jd,m.defaults=N_,m.defaultsDeep=W_,m.defer=Jy,m.delay=e_,m.difference=$b,m.differenceBy=xb,m.differenceWith=kb,m.drop=Cb,m.dropRight=Sb,m.dropRightWhile=Eb,m.dropWhile=Tb,m.fill=Ab,m.filter=Ry,m.flatMap=Py,m.flatMapDeep=My,m.flatMapDepth=By,m.flatten=Ad,m.flattenDeep=Ib,m.flattenDepth=Rb,m.flip=t_,m.flow=Z3,m.flowRight=X3,m.fromPairs=Lb,m.functions=X_,m.functionsIn=Y_,m.groupBy=Uy,m.initial=Pb,m.intersection=Mb,m.intersectionBy=Bb,m.intersectionWith=Ub,m.invert=e3,m.invertBy=t3,m.invokeMap=Hy,m.iteratee=Nl,m.keyBy=Fy,m.keys=ht,m.keysIn=Bt,m.map=vo,m.mapKeys=r3,m.mapValues=i3,m.matches=Y3,m.matchesProperty=J3,m.memoize=bo,m.merge=s3,m.mergeWith=Xd,m.method=ew,m.methodOf=tw,m.mixin=Wl,m.negate=yo,m.nthArg=rw,m.omit=o3,m.omitBy=a3,m.once=n_,m.orderBy=jy,m.over=iw,m.overArgs=r_,m.overEvery=sw,m.overSome=ow,m.partial=Bl,m.partialRight=zd,m.partition=zy,m.pick=l3,m.pickBy=Yd,m.property=sh,m.propertyOf=aw,m.pull=jb,m.pullAll=Rd,m.pullAllBy=zb,m.pullAllWith=Nb,m.pullAt=Wb,m.range=lw,m.rangeRight=cw,m.rearg=i_,m.reject=qy,m.remove=qb,m.rest=s_,m.reverse=Ol,m.sampleSize=Gy,m.set=u3,m.setWith=f3,m.shuffle=Vy,m.slice=Kb,m.sortBy=Xy,m.sortedUniq=Jb,m.sortedUniqBy=ey,m.split=P3,m.spread=o_,m.tail=ty,m.take=ny,m.takeRight=ry,m.takeRightWhile=iy,m.takeWhile=sy,m.tap=_y,m.throttle=a_,m.thru=po,m.toArray=Gd,m.toPairs=Jd,m.toPairsIn=eh,m.toPath=gw,m.toPlainObject=Qd,m.transform=d3,m.unary=l_,m.union=oy,m.unionBy=ay,m.unionWith=ly,m.uniq=cy,m.uniqBy=uy,m.uniqWith=fy,m.unset=h3,m.unzip=Pl,m.unzipWith=Ld,m.update=g3,m.updateWith=p3,m.values=ui,m.valuesIn=v3,m.without=dy,m.words=rh,m.wrap=c_,m.xor=hy,m.xorBy=gy,m.xorWith=py,m.zip=vy,m.zipObject=my,m.zipObjectDeep=by,m.zipWith=yy,m.entries=Jd,m.entriesIn=eh,m.extend=Zd,m.extendWith=$o,Wl(m,m),m.add=vw,m.attempt=ih,m.camelCase=_3,m.capitalize=th,m.ceil=mw,m.clamp=m3,m.clone=f_,m.cloneDeep=h_,m.cloneDeepWith=g_,m.cloneWith=d_,m.conformsTo=p_,m.deburr=nh,m.defaultTo=Q3,m.divide=bw,m.endsWith=w3,m.eq=gn,m.escape=$3,m.escapeRegExp=x3,m.every=Iy,m.find=Ly,m.findIndex=Ed,m.findKey=q_,m.findLast=Oy,m.findLastIndex=Td,m.findLastKey=K_,m.floor=yw,m.forEach=Pd,m.forEachRight=Md,m.forIn=G_,m.forInRight=V_,m.forOwn=Q_,m.forOwnRight=Z_,m.get=Hl,m.gt=v_,m.gte=m_,m.has=J_,m.hasIn=Fl,m.head=Id,m.identity=Ut,m.includes=Dy,m.indexOf=Ob,m.inRange=b3,m.invoke=n3,m.isArguments=jr,m.isArray=pe,m.isArrayBuffer=b_,m.isArrayLike=Mt,m.isArrayLikeObject=it,m.isBoolean=y_,m.isBuffer=hr,m.isDate=__,m.isElement=w_,m.isEmpty=$_,m.isEqual=x_,m.isEqualWith=k_,m.isError=Ul,m.isFinite=C_,m.isFunction=Wn,m.isInteger=Nd,m.isLength=_o,m.isMap=Wd,m.isMatch=S_,m.isMatchWith=E_,m.isNaN=T_,m.isNative=A_,m.isNil=R_,m.isNull=I_,m.isNumber=qd,m.isObject=et,m.isObjectLike=nt,m.isPlainObject=ss,m.isRegExp=Dl,m.isSafeInteger=L_,m.isSet=Kd,m.isString=wo,m.isSymbol=Nt,m.isTypedArray=ci,m.isUndefined=O_,m.isWeakMap=P_,m.isWeakSet=M_,m.join=Db,m.kebabCase=k3,m.last=on,m.lastIndexOf=Hb,m.lowerCase=C3,m.lowerFirst=S3,m.lt=B_,m.lte=U_,m.max=_w,m.maxBy=ww,m.mean=$w,m.meanBy=xw,m.min=kw,m.minBy=Cw,m.stubArray=Kl,m.stubFalse=Gl,m.stubObject=uw,m.stubString=fw,m.stubTrue=dw,m.multiply=Sw,m.nth=Fb,m.noConflict=nw,m.noop=ql,m.now=mo,m.pad=E3,m.padEnd=T3,m.padStart=A3,m.parseInt=I3,m.random=y3,m.reduce=Ny,m.reduceRight=Wy,m.repeat=R3,m.replace=L3,m.result=c3,m.round=Ew,m.runInContext=T,m.sample=Ky,m.size=Qy,m.snakeCase=O3,m.some=Zy,m.sortedIndex=Gb,m.sortedIndexBy=Vb,m.sortedIndexOf=Qb,m.sortedLastIndex=Zb,m.sortedLastIndexBy=Xb,m.sortedLastIndexOf=Yb,m.startCase=M3,m.startsWith=B3,m.subtract=Tw,m.sum=Aw,m.sumBy=Iw,m.template=U3,m.times=hw,m.toFinite=qn,m.toInteger=ve,m.toLength=Vd,m.toLower=D3,m.toNumber=an,m.toSafeInteger=D_,m.toString=He,m.toUpper=H3,m.trim=F3,m.trimEnd=j3,m.trimStart=z3,m.truncate=N3,m.unescape=W3,m.uniqueId=pw,m.upperCase=q3,m.upperFirst=jl,m.each=Pd,m.eachRight=Md,m.first=Id,Wl(m,function(){var n={};return Cn(m,function(i,a){Fe.call(m.prototype,a)||(n[a]=i)}),n}(),{chain:!1}),m.VERSION=s,en(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){m[n].placeholder=m}),en(["drop","take"],function(n,i){Ce.prototype[n]=function(a){a=a===r?1:ut(ve(a),0);var f=this.__filtered__&&!i?new Ce(this):this.clone();return f.__filtered__?f.__takeCount__=_t(a,f.__takeCount__):f.__views__.push({size:_t(a,J),type:n+(f.__dir__<0?"Right":"")}),f},Ce.prototype[n+"Right"]=function(a){return this.reverse()[n](a).reverse()}}),en(["filter","map","takeWhile"],function(n,i){var a=i+1,f=a==te||a==j;Ce.prototype[n]=function(p){var y=this.clone();return y.__iteratees__.push({iteratee:ce(p,3),type:a}),y.__filtered__=y.__filtered__||f,y}}),en(["head","last"],function(n,i){var a="take"+(i?"Right":"");Ce.prototype[n]=function(){return this[a](1).value()[0]}}),en(["initial","tail"],function(n,i){var a="drop"+(i?"":"Right");Ce.prototype[n]=function(){return this.__filtered__?new Ce(this):this[a](1)}}),Ce.prototype.compact=function(){return this.filter(Ut)},Ce.prototype.find=function(n){return this.filter(n).head()},Ce.prototype.findLast=function(n){return this.reverse().find(n)},Ce.prototype.invokeMap=we(function(n,i){return typeof n=="function"?new Ce(this):this.map(function(a){return Ji(a,n,i)})}),Ce.prototype.reject=function(n){return this.filter(yo(ce(n)))},Ce.prototype.slice=function(n,i){n=ve(n);var a=this;return a.__filtered__&&(n>0||i<0)?new Ce(a):(n<0?a=a.takeRight(-n):n&&(a=a.drop(n)),i!==r&&(i=ve(i),a=i<0?a.dropRight(-i):a.take(i-n)),a)},Ce.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ce.prototype.toArray=function(){return this.take(J)},Cn(Ce.prototype,function(n,i){var a=/^(?:filter|find|map|reject)|While$/.test(i),f=/^(?:head|last)$/.test(i),p=m[f?"take"+(i=="last"?"Right":""):i],y=f||/^find/.test(i);p&&(m.prototype[i]=function(){var x=this.__wrapped__,C=f?[1]:arguments,A=x instanceof Ce,H=C[0],F=A||pe(x),W=function(xe){var Se=p.apply(m,or([xe],C));return f&&V?Se[0]:Se};F&&a&&typeof H=="function"&&H.length!=1&&(A=F=!1);var V=this.__chain__,ie=!!this.__actions__.length,fe=y&&!V,ye=A&&!ie;if(!y&&F){x=ye?x:new Ce(this);var de=n.apply(x,C);return de.__actions__.push({func:po,args:[W],thisArg:r}),new nn(de,V)}return fe&&ye?n.apply(this,C):(de=this.thru(W),fe?f?de.value()[0]:de.value():de)})}),en(["pop","push","shift","sort","splice","unshift"],function(n){var i=Fs[n],a=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);m.prototype[n]=function(){var p=arguments;if(f&&!this.__chain__){var y=this.value();return i.apply(pe(y)?y:[],p)}return this[a](function(x){return i.apply(pe(x)?x:[],p)})}}),Cn(Ce.prototype,function(n,i){var a=m[i];if(a){var f=a.name+"";Fe.call(ii,f)||(ii[f]=[]),ii[f].push({name:i,func:a})}}),ii[ao(r,L).name]=[{name:"wrapper",func:r}],Ce.prototype.clone=W2,Ce.prototype.reverse=q2,Ce.prototype.value=K2,m.prototype.at=wy,m.prototype.chain=$y,m.prototype.commit=xy,m.prototype.next=ky,m.prototype.plant=Sy,m.prototype.reverse=Ey,m.prototype.toJSON=m.prototype.valueOf=m.prototype.value=Ty,m.prototype.first=m.prototype.head,Ki&&(m.prototype[Ki]=Cy),m},ti=x2();Or?((Or.exports=ti)._=ti,Na._=ti):vt._=ti}).call(Qn)})(Wo,Wo.exports);var r4=Wo.exports;const i4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),o1=(e={})=>(()=>{const t=i4();return Ze(t,e,!0,!0),t})(),s4=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),o4=P('<span class="inline-block h-4 w-4 text-gray-700">'),ks=e=>{const[t,r]=me(!1),s=()=>r(o=>!o);return(()=>{const o=s4(),l=o.firstChild,c=l.firstChild,u=c.firstChild,d=c.nextSibling;return I(c,w(ae,{get when(){return e.icon},keyed:!0,children:g=>(()=>{const h=o4();return I(h,g),h})()}),u),I(u,()=>e.name),d.$$click=()=>s(),I(d,w(o1,{})),I(o,w(ae,{get when(){return t()},get children(){return e.settings()}}),null),o})()};ot(["click"]);const a4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),a1=(e={})=>(()=>{const t=a4();return Ze(t,e,!0,!0),t})();var l4=typeof Qn=="object"&&Qn&&Qn.Object===Object&&Qn,l1=l4,c4=l1,u4=typeof self=="object"&&self&&self.Object===Object&&self,f4=c4||u4||Function("return this")(),$n=f4,d4=$n,h4=d4.Symbol,Ai=h4,gh=Ai,c1=Object.prototype,g4=c1.hasOwnProperty,p4=c1.toString,os=gh?gh.toStringTag:void 0;function v4(e){var t=g4.call(e,os),r=e[os];try{e[os]=void 0;var s=!0}catch{}var o=p4.call(e);return s&&(t?e[os]=r:delete e[os]),o}var m4=v4,b4=Object.prototype,y4=b4.toString;function _4(e){return y4.call(e)}var w4=_4,ph=Ai,$4=m4,x4=w4,k4="[object Null]",C4="[object Undefined]",vh=ph?ph.toStringTag:void 0;function S4(e){return e==null?e===void 0?C4:k4:vh&&vh in Object(e)?$4(e):x4(e)}var Ii=S4;function E4(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Ln=E4,T4=Ii,A4=Ln,I4="[object AsyncFunction]",R4="[object Function]",L4="[object GeneratorFunction]",O4="[object Proxy]";function P4(e){if(!A4(e))return!1;var t=T4(e);return t==R4||t==L4||t==I4||t==O4}var u1=P4,M4=$n,B4=M4["__core-js_shared__"],U4=B4,Vl=U4,mh=function(){var e=/[^.]+$/.exec(Vl&&Vl.keys&&Vl.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function D4(e){return!!mh&&mh in e}var H4=D4,F4=Function.prototype,j4=F4.toString;function z4(e){if(e!=null){try{return j4.call(e)}catch{}try{return e+""}catch{}}return""}var f1=z4,N4=u1,W4=H4,q4=Ln,K4=f1,G4=/[\\^$.*+?()[\]{}|]/g,V4=/^\[object .+?Constructor\]$/,Q4=Function.prototype,Z4=Object.prototype,X4=Q4.toString,Y4=Z4.hasOwnProperty,J4=RegExp("^"+X4.call(Y4).replace(G4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function e5(e){if(!q4(e)||W4(e))return!1;var t=N4(e)?J4:V4;return t.test(K4(e))}var t5=e5;function n5(e,t){return e?.[t]}var r5=n5,i5=t5,s5=r5;function o5(e,t){var r=s5(e,t);return i5(r)?r:void 0}var Vr=o5,a5=Vr,l5=a5(Object,"create"),ua=l5,bh=ua;function c5(){this.__data__=bh?bh(null):{},this.size=0}var u5=c5;function f5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var d5=f5,h5=ua,g5="__lodash_hash_undefined__",p5=Object.prototype,v5=p5.hasOwnProperty;function m5(e){var t=this.__data__;if(h5){var r=t[e];return r===g5?void 0:r}return v5.call(t,e)?t[e]:void 0}var b5=m5,y5=ua,_5=Object.prototype,w5=_5.hasOwnProperty;function $5(e){var t=this.__data__;return y5?t[e]!==void 0:w5.call(t,e)}var x5=$5,k5=ua,C5="__lodash_hash_undefined__";function S5(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=k5&&t===void 0?C5:t,this}var E5=S5,T5=u5,A5=d5,I5=b5,R5=x5,L5=E5;function Ri(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Ri.prototype.clear=T5;Ri.prototype.delete=A5;Ri.prototype.get=I5;Ri.prototype.has=R5;Ri.prototype.set=L5;var O5=Ri;function P5(){this.__data__=[],this.size=0}var M5=P5;function B5(e,t){return e===t||e!==e&&t!==t}var Bc=B5,U5=Bc;function D5(e,t){for(var r=e.length;r--;)if(U5(e[r][0],t))return r;return-1}var fa=D5,H5=fa,F5=Array.prototype,j5=F5.splice;function z5(e){var t=this.__data__,r=H5(t,e);if(r<0)return!1;var s=t.length-1;return r==s?t.pop():j5.call(t,r,1),--this.size,!0}var N5=z5,W5=fa;function q5(e){var t=this.__data__,r=W5(t,e);return r<0?void 0:t[r][1]}var K5=q5,G5=fa;function V5(e){return G5(this.__data__,e)>-1}var Q5=V5,Z5=fa;function X5(e,t){var r=this.__data__,s=Z5(r,e);return s<0?(++this.size,r.push([e,t])):r[s][1]=t,this}var Y5=X5,J5=M5,e$=N5,t$=K5,n$=Q5,r$=Y5;function Li(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Li.prototype.clear=J5;Li.prototype.delete=e$;Li.prototype.get=t$;Li.prototype.has=n$;Li.prototype.set=r$;var da=Li,i$=Vr,s$=$n,o$=i$(s$,"Map"),Uc=o$,yh=O5,a$=da,l$=Uc;function c$(){this.size=0,this.__data__={hash:new yh,map:new(l$||a$),string:new yh}}var u$=c$;function f$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var d$=f$,h$=d$;function g$(e,t){var r=e.__data__;return h$(t)?r[typeof t=="string"?"string":"hash"]:r.map}var ha=g$,p$=ha;function v$(e){var t=p$(this,e).delete(e);return this.size-=t?1:0,t}var m$=v$,b$=ha;function y$(e){return b$(this,e).get(e)}var _$=y$,w$=ha;function $$(e){return w$(this,e).has(e)}var x$=$$,k$=ha;function C$(e,t){var r=k$(this,e),s=r.size;return r.set(e,t),this.size+=r.size==s?0:1,this}var S$=C$,E$=u$,T$=m$,A$=_$,I$=x$,R$=S$;function Oi(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Oi.prototype.clear=E$;Oi.prototype.delete=T$;Oi.prototype.get=A$;Oi.prototype.has=I$;Oi.prototype.set=R$;var Dc=Oi,L$="__lodash_hash_undefined__";function O$(e){return this.__data__.set(e,L$),this}var P$=O$;function M$(e){return this.__data__.has(e)}var B$=M$,U$=Dc,D$=P$,H$=B$;function qo(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new U$;++t<r;)this.add(e[t])}qo.prototype.add=qo.prototype.push=D$;qo.prototype.has=H$;var d1=qo;function F$(e,t,r,s){for(var o=e.length,l=r+(s?1:-1);s?l--:++l<o;)if(t(e[l],l,e))return l;return-1}var j$=F$;function z$(e){return e!==e}var N$=z$;function W$(e,t,r){for(var s=r-1,o=e.length;++s<o;)if(e[s]===t)return s;return-1}var q$=W$,K$=j$,G$=N$,V$=q$;function Q$(e,t,r){return t===t?V$(e,t,r):K$(e,G$,r)}var Z$=Q$,X$=Z$;function Y$(e,t){var r=e==null?0:e.length;return!!r&&X$(e,t,0)>-1}var J$=Y$;function ex(e,t,r){for(var s=-1,o=e==null?0:e.length;++s<o;)if(r(t,e[s]))return!0;return!1}var tx=ex;function nx(e,t){return e.has(t)}var h1=nx,rx=Vr,ix=$n,sx=rx(ix,"Set"),g1=sx;function ox(){}var ax=ox;function lx(e){var t=-1,r=Array(e.size);return e.forEach(function(s){r[++t]=s}),r}var Hc=lx,Ql=g1,cx=ax,ux=Hc,fx=1/0,dx=Ql&&1/ux(new Ql([,-0]))[1]==fx?function(e){return new Ql(e)}:cx,hx=dx,gx=d1,px=J$,vx=tx,mx=h1,bx=hx,yx=Hc,_x=200;function wx(e,t,r){var s=-1,o=px,l=e.length,c=!0,u=[],d=u;if(r)c=!1,o=vx;else if(l>=_x){var g=t?null:bx(e);if(g)return yx(g);c=!1,o=mx,d=new gx}else d=t?[]:u;e:for(;++s<l;){var h=e[s],v=t?t(h):h;if(h=r||h!==0?h:0,c&&v===v){for(var b=d.length;b--;)if(d[b]===v)continue e;t&&d.push(v),u.push(h)}else o(d,v,r)||(d!==u&&d.push(v),u.push(h))}return u}var p1=wx,$x=p1;function xx(e){return e&&e.length?$x(e):[]}var kx=xx;const xr=xs(kx),Cx=P('<div class="block shrink-0 overflow-hidden border-b p-1">'),Do=e=>(()=>{const t=Cx();return I(t,()=>e.children),t})(),Sx={},Ex=Object.freeze(Object.defineProperty({__proto__:null,default:Sx},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Ie=BigInt(0),Je=BigInt(1),wr=BigInt(2),ds=BigInt(3),_h=BigInt(8),ze=Object.freeze({a:Ie,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:Je,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),wh=(e,t)=>(e+t/wr)/t,xo={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=ze,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),s=-Je*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),l=r,c=BigInt("0x100000000000000000000000000000000"),u=wh(l*e,t),d=wh(-s*e,t);let g=X(e-u*r-d*o,t),h=X(-u*s-d*l,t);const v=g>c,b=h>c;if(v&&(g=t-g),b&&(h=t-h),g>c||h>c)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:v,k1:g,k2neg:b,k2:h}}},yn=32,bi=32,Tx=32,Ko=yn+1,Go=2*yn+1;function $h(e){const{a:t,b:r}=ze,s=X(e*e),o=X(s*e);return X(o+t*e+r)}const ko=ze.a===Ie;class Fc extends Error{constructor(t){super(t)}}function xh(e){if(!(e instanceof Ue))throw new TypeError("JacobianPoint expected")}class Ue{constructor(t,r,s){this.x=t,this.y=r,this.z=s}static fromAffine(t){if(!(t instanceof Re))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(Re.ZERO)?Ue.ZERO:new Ue(t.x,t.y,Je)}static toAffineBatch(t){const r=Ox(t.map(s=>s.z));return t.map((s,o)=>s.toAffine(r[o]))}static normalizeZ(t){return Ue.toAffineBatch(t).map(Ue.fromAffine)}equals(t){xh(t);const{x:r,y:s,z:o}=this,{x:l,y:c,z:u}=t,d=X(o*o),g=X(u*u),h=X(r*g),v=X(l*d),b=X(X(s*u)*g),_=X(X(c*o)*d);return h===v&&b===_}negate(){return new Ue(this.x,X(-this.y),this.z)}double(){const{x:t,y:r,z:s}=this,o=X(t*t),l=X(r*r),c=X(l*l),u=t+l,d=X(wr*(X(u*u)-o-c)),g=X(ds*o),h=X(g*g),v=X(h-wr*d),b=X(g*(d-v)-_h*c),_=X(wr*r*s);return new Ue(v,b,_)}add(t){xh(t);const{x:r,y:s,z:o}=this,{x:l,y:c,z:u}=t;if(l===Ie||c===Ie)return this;if(r===Ie||s===Ie)return t;const d=X(o*o),g=X(u*u),h=X(r*g),v=X(l*d),b=X(X(s*u)*g),_=X(X(c*o)*d),$=X(v-h),k=X(_-b);if($===Ie)return k===Ie?this.double():Ue.ZERO;const S=X($*$),L=X($*S),U=X(h*S),M=X(k*k-L-wr*U),R=X(k*(U-M)-b*L),E=X(o*u*$);return new Ue(M,R,E)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const r=Ue.ZERO;if(typeof t=="bigint"&&t===Ie)return r;let s=Sh(t);if(s===Je)return this;if(!ko){let v=r,b=this;for(;s>Ie;)s&Je&&(v=v.add(b)),b=b.double(),s>>=Je;return v}let{k1neg:o,k1:l,k2neg:c,k2:u}=xo.splitScalar(s),d=r,g=r,h=this;for(;l>Ie||u>Ie;)l&Je&&(d=d.add(h)),u&Je&&(g=g.add(h)),h=h.double(),l>>=Je,u>>=Je;return o&&(d=d.negate()),c&&(g=g.negate()),g=new Ue(X(g.x*xo.beta),g.y,g.z),d.add(g)}precomputeWindow(t){const r=ko?128/t+1:256/t+1,s=[];let o=this,l=o;for(let c=0;c<r;c++){l=o,s.push(l);for(let u=1;u<2**(t-1);u++)l=l.add(o),s.push(l);o=l.double()}return s}wNAF(t,r){!r&&this.equals(Ue.BASE)&&(r=Re.BASE);const s=r&&r._WINDOW_SIZE||1;if(256%s)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=r&&hc.get(r);o||(o=this.precomputeWindow(s),r&&s!==1&&(o=Ue.normalizeZ(o),hc.set(r,o)));let l=Ue.ZERO,c=Ue.BASE;const u=1+(ko?128/s:256/s),d=2**(s-1),g=BigInt(2**s-1),h=2**s,v=BigInt(s);for(let b=0;b<u;b++){const _=b*d;let $=Number(t&g);t>>=v,$>d&&($-=h,t+=Je);const k=_,S=_+Math.abs($)-1,L=b%2!==0,U=$<0;$===0?c=c.add(Co(L,o[k])):l=l.add(Co(U,o[S]))}return{p:l,f:c}}multiply(t,r){let s=Sh(t),o,l;if(ko){const{k1neg:c,k1:u,k2neg:d,k2:g}=xo.splitScalar(s);let{p:h,f:v}=this.wNAF(u,r),{p:b,f:_}=this.wNAF(g,r);h=Co(c,h),b=Co(d,b),b=new Ue(X(b.x*xo.beta),b.y,b.z),o=h.add(b),l=v.add(_)}else{const{p:c,f:u}=this.wNAF(s,r);o=c,l=u}return Ue.normalizeZ([o,l])[0]}toAffine(t){const{x:r,y:s,z:o}=this,l=this.equals(Ue.ZERO);t==null&&(t=l?_h:Pi(o));const c=t,u=X(c*c),d=X(u*c),g=X(r*u),h=X(s*d),v=X(o*c);if(l)return Re.ZERO;if(v!==Je)throw new Error("invZ was invalid");return new Re(g,h)}}Ue.BASE=new Ue(ze.Gx,ze.Gy,Je);Ue.ZERO=new Ue(Ie,Je,Ie);function Co(e,t){const r=t.negate();return e?r:t}const hc=new WeakMap;class Re{constructor(t,r){this.x=t,this.y=r}_setWindowSize(t){this._WINDOW_SIZE=t,hc.delete(this)}hasEvenY(){return this.y%wr===Ie}static fromCompressedHex(t){const r=t.length===32,s=Qt(r?t:t.subarray(1));if(!Ho(s))throw new Error("Point is not on curve");const o=$h(s);let l=Lx(o);const c=(l&Je)===Je;r?c&&(l=X(-l)):(t[0]&1)===1!==c&&(l=X(-l));const u=new Re(s,l);return u.assertValidity(),u}static fromUncompressedHex(t){const r=Qt(t.subarray(1,yn+1)),s=Qt(t.subarray(yn+1,yn*2+1)),o=new Re(r,s);return o.assertValidity(),o}static fromHex(t){const r=In(t),s=r.length,o=r[0];if(s===yn)return this.fromCompressedHex(r);if(s===Ko&&(o===2||o===3))return this.fromCompressedHex(r);if(s===Go&&o===4)return this.fromUncompressedHex(r);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Ko} compressed bytes or ${Go} uncompressed bytes, not ${s}`)}static fromPrivateKey(t){return Re.BASE.multiply(Gr(t))}static fromSignature(t,r,s){const{r:o,s:l}=v1(r);if(![0,1,2,3].includes(s))throw new Error("Cannot recover: invalid recovery bit");const c=jc(In(t)),{n:u}=ze,d=s===2||s===3?o+u:o,g=Pi(d,u),h=X(-c*g,u),v=X(l*g,u),b=s&1?"03":"02",_=Re.fromHex(b+kr(d)),$=Re.BASE.multiplyAndAddUnsafe(_,h,v);if(!$)throw new Error("Cannot recover signature: point at infinify");return $.assertValidity(),$}toRawBytes(t=!1){return Cr(this.toHex(t))}toHex(t=!1){const r=kr(this.x);return t?`${this.hasEvenY()?"02":"03"}${r}`:`04${r}${kr(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:r,y:s}=this;if(!Ho(r)||!Ho(s))throw new Error(t);const o=X(s*s),l=$h(r);if(X(o-l)!==Ie)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new Re(this.x,X(-this.y))}double(){return Ue.fromAffine(this).double().toAffine()}add(t){return Ue.fromAffine(this).add(Ue.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return Ue.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,r,s){const o=Ue.fromAffine(this),l=r===Ie||r===Je||this!==Re.BASE?o.multiplyUnsafe(r):o.multiply(r),c=Ue.fromAffine(t).multiplyUnsafe(s),u=l.add(c);return u.equals(Ue.ZERO)?void 0:u.toAffine()}}Re.BASE=new Re(ze.Gx,ze.Gy);Re.ZERO=new Re(Ie,Ie);function kh(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function Ch(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${yi(e)}`);const t=e[1],r=e.subarray(2,t+2);if(!t||r.length!==t)throw new Error("Invalid signature integer: wrong length");if(r[0]===0&&r[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:Qt(r),left:e.subarray(t+2)}}function Ax(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${yi(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:r}=Ch(e.subarray(2)),{data:s,left:o}=Ch(r);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${yi(o)}`);return{r:t,s}}class Yn{constructor(t,r){this.r=t,this.s=r,this.assertValidity()}static fromCompact(t){const r=t instanceof Uint8Array,s="Signature.fromCompact";if(typeof t!="string"&&!r)throw new TypeError(`${s}: Expected string or Uint8Array`);const o=r?yi(t):t;if(o.length!==128)throw new Error(`${s}: Expected 64-byte hex`);return new Yn(Vo(o.slice(0,64)),Vo(o.slice(64,128)))}static fromDER(t){const r=t instanceof Uint8Array;if(typeof t!="string"&&!r)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:s,s:o}=Ax(r?t:Cr(t));return new Yn(s,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:r}=this;if(!wi(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!wi(r))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=ze.n>>Je;return this.s>t}normalizeS(){return this.hasHighS()?new Yn(this.r,X(-this.s,ze.n)):this}toDERRawBytes(){return Cr(this.toDERHex())}toDERHex(){const t=kh(as(this.s)),r=kh(as(this.r)),s=t.length/2,o=r.length/2,l=as(s),c=as(o);return`30${as(o+s+4)}02${c}${r}02${l}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return Cr(this.toCompactHex())}toCompactHex(){return kr(this.r)+kr(this.s)}}function yr(...e){if(!e.every(s=>s instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((s,o)=>s+o.length,0),r=new Uint8Array(t);for(let s=0,o=0;s<e.length;s++){const l=e[s];r.set(l,o),o+=l.length}return r}const Ix=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function yi(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let r=0;r<e.length;r++)t+=Ix[e[r]];return t}const Rx=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function kr(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(Ie<=e&&e<Rx))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function _i(e){const t=Cr(kr(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function as(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function Vo(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function Cr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const s=r*2,o=e.slice(s,s+2),l=Number.parseInt(o,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");t[r]=l}return t}function Qt(e){return Vo(yi(e))}function In(e){return e instanceof Uint8Array?Uint8Array.from(e):Cr(e)}function Sh(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&wi(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function X(e,t=ze.P){const r=e%t;return r>=Ie?r:t+r}function ln(e,t){const{P:r}=ze;let s=e;for(;t-- >Ie;)s*=s,s%=r;return s}function Lx(e){const{P:t}=ze,r=BigInt(6),s=BigInt(11),o=BigInt(22),l=BigInt(23),c=BigInt(44),u=BigInt(88),d=e*e*e%t,g=d*d*e%t,h=ln(g,ds)*g%t,v=ln(h,ds)*g%t,b=ln(v,wr)*d%t,_=ln(b,s)*b%t,$=ln(_,o)*_%t,k=ln($,c)*$%t,S=ln(k,u)*k%t,L=ln(S,c)*$%t,U=ln(L,ds)*g%t,M=ln(U,l)*_%t,R=ln(M,r)*d%t,E=ln(R,wr);if(E*E%t!==e)throw new Error("Cannot find square root");return E}function Pi(e,t=ze.P){if(e===Ie||t<=Ie)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=X(e,t),s=t,o=Ie,l=Je;for(;r!==Ie;){const u=s/r,d=s%r,g=o-l*u;s=r,r=d,o=l,l=g}if(s!==Je)throw new Error("invert: does not exist");return X(o,t)}function Ox(e,t=ze.P){const r=new Array(e.length),s=e.reduce((l,c,u)=>c===Ie?l:(r[u]=l,X(l*c,t)),Je),o=Pi(s,t);return e.reduceRight((l,c,u)=>c===Ie?l:(r[u]=X(l*r[u],t),X(l*c,t)),o),r}function Px(e){const t=e.length*8-bi*8,r=Qt(e);return t>0?r>>BigInt(t):r}function jc(e,t=!1){const r=Px(e);if(t)return r;const{n:s}=ze;return r>=s?r-s:r}let gi,hs;class Mx{constructor(t,r){if(this.hashLen=t,this.qByteLen=r,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof r!="number"||r<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return $e.hmacSha256(this.k,...t)}hmacSync(...t){return hs(this.k,...t)}checkSync(){if(typeof hs!="function")throw new Fc("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const r=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const s=this.v.slice();r.push(s),t+=this.v.length}return yr(...r)}generateSync(){this.checkSync(),this.incr();let t=0;const r=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const s=this.v.slice();r.push(s),t+=this.v.length}return yr(...r)}}function wi(e){return Ie<e&&e<ze.n}function Ho(e){return Ie<e&&e<ze.P}function Bx(e,t,r,s=!0){const{n:o}=ze,l=jc(e,!0);if(!wi(l))return;const c=Pi(l,o),u=Re.BASE.multiply(l),d=X(u.x,o);if(d===Ie)return;const g=X(c*X(t+r*d,o),o);if(g===Ie)return;let h=new Yn(d,g),v=(u.x===h.r?0:2)|Number(u.y&Je);return s&&h.hasHighS()&&(h=h.normalizeS(),v^=1),{sig:h,recovery:v}}function Gr(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*bi)throw new Error("Expected 32 bytes of private key");t=Vo(e)}else if(e instanceof Uint8Array){if(e.length!==bi)throw new Error("Expected 32 bytes of private key");t=Qt(e)}else throw new TypeError("Expected valid private key");if(!wi(t))throw new Error("Expected private key: 0 < key < n");return t}function zc(e){return e instanceof Re?(e.assertValidity(),e):Re.fromHex(e)}function v1(e){if(e instanceof Yn)return e.assertValidity(),e;try{return Yn.fromDER(e)}catch{return Yn.fromCompact(e)}}function Ux(e,t=!1){return Re.fromPrivateKey(e).toRawBytes(t)}function Eh(e){const t=e instanceof Uint8Array,r=typeof e=="string",s=(t||r)&&e.length;return t?s===Ko||s===Go:r?s===Ko*2||s===Go*2:e instanceof Re}function m1(e,t,r=!1){if(Eh(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Eh(t))throw new TypeError("getSharedSecret: second arg must be public key");const s=zc(t);return s.assertValidity(),s.multiply(Gr(e)).toRawBytes(r)}function b1(e){const t=e.length>yn?e.slice(0,yn):e;return Qt(t)}function Dx(e){const t=b1(e),r=X(t,ze.n);return y1(r<Ie?t:r)}function y1(e){return _i(e)}function Hx(e,t,r){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const s=In(e),o=Gr(t),l=[y1(o),Dx(s)];if(r!=null){r===!0&&(r=$e.randomBytes(yn));const d=In(r);if(d.length!==yn)throw new Error(`sign: Expected ${yn} bytes of extra data`);l.push(d)}const c=yr(...l),u=b1(s);return{seed:c,m:u,d:o}}function Fx(e,t){const{sig:r,recovery:s}=e,{der:o,recovered:l}=Object.assign({canonical:!0,der:!0},t),c=o?r.toDERRawBytes():r.toCompactRawBytes();return l?[c,s]:c}function jx(e,t,r={}){const{seed:s,m:o,d:l}=Hx(e,t,r.extraEntropy),c=new Mx(Tx,bi);c.reseedSync(s);let u;for(;!(u=Bx(c.generateSync(),o,l,r.canonical));)c.reseedSync();return Fx(u,r)}const zx={strict:!0};function Nx(e,t,r,s=zx){let o;try{o=v1(e),t=In(t)}catch{return!1}const{r:l,s:c}=o;if(s.strict&&o.hasHighS())return!1;const u=jc(t);let d;try{d=zc(r)}catch{return!1}const{n:g}=ze,h=Pi(c,g),v=X(u*h,g),b=X(l*h,g),_=Re.BASE.multiplyAndAddUnsafe(d,v,b);return _?X(_.x,g)===l:!1}function Qo(e){return X(Qt(e),ze.n)}class $i{constructor(t,r){this.r=t,this.s=r,this.assertValidity()}static fromHex(t){const r=In(t);if(r.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${r.length}`);const s=Qt(r.subarray(0,32)),o=Qt(r.subarray(32,64));return new $i(s,o)}assertValidity(){const{r:t,s:r}=this;if(!Ho(t)||!wi(r))throw new Error("Invalid signature")}toHex(){return kr(this.r)+kr(this.s)}toRawBytes(){return Cr(this.toHex())}}function Wx(e){return Re.fromPrivateKey(e).toRawX()}class _1{constructor(t,r,s=$e.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=In(t);const{x:o,scalar:l}=this.getScalar(Gr(r));if(this.px=o,this.d=l,this.rand=In(s),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const r=Re.fromPrivateKey(t),s=r.hasEvenY()?t:ze.n-t;return{point:r,scalar:s,x:r.toRawX()}}initNonce(t,r){return _i(t^Qt(r))}finalizeNonce(t){const r=X(Qt(t),ze.n);if(r===Ie)throw new Error("sign: Creation of signature failed. k is zero");const{point:s,x:o,scalar:l}=this.getScalar(r);return{R:s,rx:o,k:l}}finalizeSig(t,r,s,o){return new $i(t.x,X(r+s*o,ze.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:r,px:s,rand:o}=this,l=$e.taggedHash,c=this.initNonce(r,await l(br.aux,o)),{R:u,rx:d,k:g}=this.finalizeNonce(await l(br.nonce,c,s,t)),h=Qo(await l(br.challenge,d,s,t)),v=this.finalizeSig(u,g,h,r);return await x1(v,t,s)||this.error(),v}calcSync(){const{m:t,d:r,px:s,rand:o}=this,l=$e.taggedHashSync,c=this.initNonce(r,l(br.aux,o)),{R:u,rx:d,k:g}=this.finalizeNonce(l(br.nonce,c,s,t)),h=Qo(l(br.challenge,d,s,t)),v=this.finalizeSig(u,g,h,r);return k1(v,t,s)||this.error(),v}}async function qx(e,t,r){return new _1(e,t,r).calc()}function Kx(e,t,r){return new _1(e,t,r).calcSync()}function w1(e,t,r){const s=e instanceof $i,o=s?e:$i.fromHex(e);return s&&o.assertValidity(),{...o,m:In(t),P:zc(r)}}function $1(e,t,r,s){const o=Re.BASE.multiplyAndAddUnsafe(t,Gr(r),X(-s,ze.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function x1(e,t,r){try{const{r:s,s:o,m:l,P:c}=w1(e,t,r),u=Qo(await $e.taggedHash(br.challenge,_i(s),c.toRawX(),l));return $1(s,c,o,u)}catch{return!1}}function k1(e,t,r){try{const{r:s,s:o,m:l,P:c}=w1(e,t,r),u=Qo($e.taggedHashSync(br.challenge,_i(s),c.toRawX(),l));return $1(s,c,o,u)}catch(s){if(s instanceof Fc)throw s;return!1}}const ga={Signature:$i,getPublicKey:Wx,sign:qx,verify:x1,signSync:Kx,verifySync:k1};Re.BASE._setWindowSize(8);const Kt={node:Ex,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},br={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},So={},$e={bytesToHex:yi,hexToBytes:Cr,concatBytes:yr,mod:X,invert:Pi,isValidPrivateKey(e){try{return Gr(e),!0}catch{return!1}},_bigintTo32Bytes:_i,_normalizePrivateKey:Gr,hashToPrivateKey:e=>{e=In(e);const t=bi+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const r=X(Qt(e),ze.n-Je)+Je;return _i(r)},randomBytes:(e=32)=>{if(Kt.web)return Kt.web.getRandomValues(new Uint8Array(e));if(Kt.node){const{randomBytes:t}=Kt.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>$e.hashToPrivateKey($e.randomBytes(bi+8)),precompute(e=8,t=Re.BASE){const r=t===Re.BASE?t:new Re(t.x,t.y);return r._setWindowSize(e),r.multiply(ds),r},sha256:async(...e)=>{if(Kt.web){const t=await Kt.web.subtle.digest("SHA-256",yr(...e));return new Uint8Array(t)}else if(Kt.node){const{createHash:t}=Kt.node,r=t("sha256");return e.forEach(s=>r.update(s)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(Kt.web){const r=await Kt.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),s=yr(...t),o=await Kt.web.subtle.sign("HMAC",r,s);return new Uint8Array(o)}else if(Kt.node){const{createHmac:r}=Kt.node,s=r("sha256",e);return t.forEach(o=>s.update(o)),Uint8Array.from(s.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let r=So[e];if(r===void 0){const s=await $e.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));r=yr(s,s),So[e]=r}return $e.sha256(r,...t)},taggedHashSync:(e,...t)=>{if(typeof gi!="function")throw new Fc("sha256Sync is undefined, you need to set it");let r=So[e];if(r===void 0){const s=gi(Uint8Array.from(e,o=>o.charCodeAt(0)));r=yr(s,s),So[e]=r}return gi(r,...t)},_JacobianPoint:Ue};Object.defineProperties($e,{sha256Sync:{configurable:!1,get(){return gi},set(e){gi||(gi=e)}},hmacSha256Sync:{configurable:!1,get(){return hs},set(e){hs||(hs=e)}}});function gc(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function Gx(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function C1(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function Vx(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");gc(e.outputLen),gc(e.blockLen)}function Qx(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function Zx(e,t){C1(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}const Wr={number:gc,bool:Gx,bytes:C1,hash:Vx,exists:Qx,output:Zx},us={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Xx=Object.freeze(Object.defineProperty({__proto__:null,crypto:us},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Yx=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),Jx=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),Kr=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),mn=(e,t)=>e<<32-t|e>>>t,S1=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!S1)throw new Error("Non little-endian hardware is not supported");const e6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function E1(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let r=0;r<e.length;r++)t+=e6[e[r]];return t}function T1(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const s=r*2,o=e.slice(s,s+2),l=Number.parseInt(o,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");t[r]=l}return t}const A1=async()=>{};async function t6(e,t,r){let s=Date.now();for(let o=0;o<e;o++){r(o);const l=Date.now()-s;l>=0&&l<t||(await A1(),s+=l)}}function Nc(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function Cs(e){if(typeof e=="string"&&(e=Nc(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function fs(...e){if(!e.every(s=>s instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((s,o)=>s+o.length,0),r=new Uint8Array(t);for(let s=0,o=0;s<e.length;s++){const l=e[s];r.set(l,o),o+=l.length}return r}class Wc{clone(){return this._cloneInto()}}const n6=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function r6(e,t){if(t!==void 0&&(typeof t!="object"||!n6(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function pa(e){const t=s=>e().update(Cs(s)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function i6(e){const t=(s,o)=>e(o).update(Cs(s)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=s=>e(s),t}function I1(e=32){if(us.web)return us.web.getRandomValues(new Uint8Array(e));if(us.node)return new Uint8Array(us.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}const s6=Object.freeze(Object.defineProperty({__proto__:null,Hash:Wc,asyncLoop:t6,bytesToHex:E1,checkOpts:r6,concatBytes:fs,createView:Kr,hexToBytes:T1,isLE:S1,nextTick:A1,randomBytes:I1,rotr:mn,toBytes:Cs,u32:Jx,u8:Yx,utf8ToBytes:Nc,wrapConstructor:pa,wrapConstructorWithOpts:i6},Symbol.toStringTag,{value:"Module"}));function o6(e,t,r,s){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,s);const o=BigInt(32),l=BigInt(4294967295),c=Number(r>>o&l),u=Number(r&l),d=s?4:0,g=s?0:4;e.setUint32(t+d,c,s),e.setUint32(t+g,u,s)}let R1=class extends Wc{constructor(t,r,s,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=s,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Kr(this.buffer)}update(t){Wr.exists(this);const{view:r,buffer:s,blockLen:o}=this;t=Cs(t);const l=t.length;for(let c=0;c<l;){const u=Math.min(o-this.pos,l-c);if(u===o){const d=Kr(t);for(;o<=l-c;c+=o)this.process(d,c);continue}s.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Wr.exists(this),Wr.output(t,this),this.finished=!0;const{buffer:r,view:s,blockLen:o,isLE:l}=this;let{pos:c}=this;r[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(s,0),c=0);for(let v=c;v<o;v++)r[v]=0;o6(s,o-8,BigInt(this.length*8),l),this.process(s,0);const u=Kr(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const g=d/4,h=this.get();if(g>h.length)throw new Error("_sha2: outputLen bigger than state");for(let v=0;v<g;v++)u.setUint32(4*v,h[v],l)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const s=t.slice(0,r);return this.destroy(),s}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:s,length:o,finished:l,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=l,t.destroyed=c,o%r&&t.buffer.set(s),t}};const a6=(e,t,r)=>e&t^~e&r,l6=(e,t,r)=>e&t^e&r^t&r,c6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),gr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),pr=new Uint32Array(64);class L1 extends R1{constructor(){super(64,32,8,!1),this.A=gr[0]|0,this.B=gr[1]|0,this.C=gr[2]|0,this.D=gr[3]|0,this.E=gr[4]|0,this.F=gr[5]|0,this.G=gr[6]|0,this.H=gr[7]|0}get(){const{A:t,B:r,C:s,D:o,E:l,F:c,G:u,H:d}=this;return[t,r,s,o,l,c,u,d]}set(t,r,s,o,l,c,u,d){this.A=t|0,this.B=r|0,this.C=s|0,this.D=o|0,this.E=l|0,this.F=c|0,this.G=u|0,this.H=d|0}process(t,r){for(let v=0;v<16;v++,r+=4)pr[v]=t.getUint32(r,!1);for(let v=16;v<64;v++){const b=pr[v-15],_=pr[v-2],$=mn(b,7)^mn(b,18)^b>>>3,k=mn(_,17)^mn(_,19)^_>>>10;pr[v]=k+pr[v-7]+$+pr[v-16]|0}let{A:s,B:o,C:l,D:c,E:u,F:d,G:g,H:h}=this;for(let v=0;v<64;v++){const b=mn(u,6)^mn(u,11)^mn(u,25),_=h+b+a6(u,d,g)+c6[v]+pr[v]|0,k=(mn(s,2)^mn(s,13)^mn(s,22))+l6(s,o,l)|0;h=g,g=d,d=u,u=c+_|0,c=l,l=o,o=s,s=_+k|0}s=s+this.A|0,o=o+this.B|0,l=l+this.C|0,c=c+this.D|0,u=u+this.E|0,d=d+this.F|0,g=g+this.G|0,h=h+this.H|0,this.set(s,o,l,c,u,d,g,h)}roundClean(){pr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class u6 extends L1{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Jn=pa(()=>new L1),f6=pa(()=>new u6),d6=Object.freeze(Object.defineProperty({__proto__:null,sha224:f6,sha256:Jn},Symbol.toStringTag,{value:"Module"}));/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ar(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function xn(...e){const t=(o,l)=>c=>o(l(c)),r=Array.from(e).reverse().reduce((o,l)=>o?t(o,l.encode):l.encode,void 0),s=e.reduce((o,l)=>o?t(o,l.decode):l.decode,void 0);return{encode:r,decode:s}}function On(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(r=>{if(Ar(r),r<0||r>=e.length)throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${e.length})`);return e[r]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(r=>{if(typeof r!="string")throw new Error(`alphabet.decode: not string element=${r}`);const s=e.indexOf(r);if(s===-1)throw new Error(`Unknown letter: "${r}". Allowed: ${e}`);return s})}}}function Pn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let r of t)if(typeof r!="string")throw new Error(`join.encode: non-string input=${r}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function Ss(e,t="="){if(Ar(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let s of r)if(typeof s!="string")throw new Error(`padding.encode: non-string input=${s}`);for(;r.length*e%8;)r.push(t);return r},decode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of r)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let s=r.length;if(s*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;s>0&&r[s-1]===t;s--)if(!((s-1)*e%8))throw new Error("Invalid padding: string has too much padding");return r.slice(0,s)}}}function O1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Th(e,t,r){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(r<2)throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let s=0;const o=[],l=Array.from(e);for(l.forEach(c=>{if(Ar(c),c<0||c>=t)throw new Error(`Wrong integer: ${c}`)});;){let c=0,u=!0;for(let d=s;d<l.length;d++){const g=l[d],h=t*c+g;if(!Number.isSafeInteger(h)||t*c/t!==c||h-g!==t*c)throw new Error("convertRadix: carry overflow");if(c=h%r,l[d]=Math.floor(h/r),!Number.isSafeInteger(l[d])||l[d]*r+c!==h)throw new Error("convertRadix: carry overflow");if(u)l[d]?u=!1:s=d;else continue}if(o.push(c),u)break}for(let c=0;c<e.length-1&&e[c]===0;c++)o.push(0);return o.reverse()}const P1=(e,t)=>t?P1(t,e%t):e,Zo=(e,t)=>e+(t-P1(e,t));function pc(e,t,r,s){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(r<=0||r>32)throw new Error(`convertRadix2: wrong to=${r}`);if(Zo(t,r)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${Zo(t,r)}`);let o=0,l=0;const c=2**r-1,u=[];for(const d of e){if(Ar(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,l+t>32)throw new Error(`convertRadix2: carry overflow pos=${l} from=${t}`);for(l+=t;l>=r;l-=r)u.push((o>>l-r&c)>>>0);o&=2**l-1}if(o=o<<r-l&c,!s&&l>=t)throw new Error("Excess padding");if(!s&&o)throw new Error(`Non-zero padding: ${o}`);return s&&l>0&&u.push(o>>>0),u}function M1(e){return Ar(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Th(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Th(t,e,2**8))}}}function er(e,t=!1){if(Ar(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Zo(8,e)>32||Zo(e,8)>32)throw new Error("radix2: carry overflow");return{encode:r=>{if(!(r instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return pc(Array.from(r),8,e,!t)},decode:r=>{if(!Array.isArray(r)||r.length&&typeof r[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(pc(r,e,8,t))}}}function Ah(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function B1(e,t){if(Ar(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const s=t(r).slice(0,e),o=new Uint8Array(r.length+e);return o.set(r),o.set(s,r.length),o},decode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const s=r.slice(0,-e),o=t(s).slice(0,e),l=r.slice(-e);for(let c=0;c<e;c++)if(o[c]!==l[c])throw new Error("Invalid checksum");return s}}}const h6={alphabet:On,chain:xn,checksum:B1,radix:M1,radix2:er,join:Pn,padding:Ss},U1=xn(er(4),On("0123456789ABCDEF"),Pn("")),D1=xn(er(5),On("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),Ss(5),Pn("")),g6=xn(er(5),On("0123456789ABCDEFGHIJKLMNOPQRSTUV"),Ss(5),Pn("")),p6=xn(er(5),On("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Pn(""),O1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),xi=xn(er(6),On("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Ss(6),Pn("")),H1=xn(er(6),On("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),Ss(6),Pn("")),qc=e=>xn(M1(58),On(e),Pn("")),bs=qc("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),v6=qc("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),m6=qc("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Ih=[0,2,3,5,6,7,9,10,11],F1={encode(e){let t="";for(let r=0;r<e.length;r+=8){const s=e.subarray(r,r+8);t+=bs.encode(s).padStart(Ih[s.length],"1")}return t},decode(e){let t=[];for(let r=0;r<e.length;r+=11){const s=e.slice(r,r+11),o=Ih.indexOf(s.length),l=bs.decode(s);for(let c=0;c<l.length-o;c++)if(l[c]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(l.slice(l.length-o)))}return Uint8Array.from(t)}},j1=e=>xn(B1(4,t=>e(e(t))),bs),vc=xn(On("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Pn("")),Rh=[996825010,642813549,513874426,1027748829,705979059];function ls(e){const t=e>>25;let r=(e&33554431)<<5;for(let s=0;s<Rh.length;s++)(t>>s&1)===1&&(r^=Rh[s]);return r}function Lh(e,t,r=1){const s=e.length;let o=1;for(let l=0;l<s;l++){const c=e.charCodeAt(l);if(c<33||c>126)throw new Error(`Invalid prefix (${e})`);o=ls(o)^c>>5}o=ls(o);for(let l=0;l<s;l++)o=ls(o)^e.charCodeAt(l)&31;for(let l of t)o=ls(o)^l;for(let l=0;l<6;l++)o=ls(o);return o^=r,vc.encode(pc([o%2**30],30,5,!1))}function z1(e){const t=e==="bech32"?1:734539939,r=er(5),s=r.decode,o=r.encode,l=Ah(s);function c(h,v,b=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(v)||v.length&&typeof v[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof v}`);const _=h.length+7+v.length;if(b!==!1&&_>b)throw new TypeError(`Length ${_} exceeds limit ${b}`);return h=h.toLowerCase(),`${h}1${vc.encode(v)}${Lh(h,v,t)}`}function u(h,v=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||v!==!1&&h.length>v)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${v})`);const b=h.toLowerCase();if(h!==b&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=b;const _=h.lastIndexOf("1");if(_===0||_===-1)throw new Error('Letter "1" must be present between prefix and data only');const $=h.slice(0,_),k=h.slice(_+1);if(k.length<6)throw new Error("Data must be at least 6 characters long");const S=vc.decode(k).slice(0,-6),L=Lh($,S,t);if(!k.endsWith(L))throw new Error(`Invalid checksum in ${h}: expected "${L}"`);return{prefix:$,words:S}}const d=Ah(u);function g(h){const{prefix:v,words:b}=u(h,!1);return{prefix:v,words:b,bytes:s(b)}}return{encode:c,decode:u,decodeToBytes:g,decodeUnsafe:d,fromWords:s,fromWordsUnsafe:l,toWords:o}}const It=z1("bech32"),b6=z1("bech32m"),N1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},W1=xn(er(4),On("0123456789abcdef"),Pn(""),O1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),ys={utf8:N1,hex:W1,base16:U1,base32:D1,base64:xi,base64url:H1,base58:bs,base58xmr:F1},q1=`Invalid encoding type. Available types: ${Object.keys(ys).join(", ")}`,K1=(e,t)=>{if(typeof e!="string"||!ys.hasOwnProperty(e))throw new TypeError(q1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return ys[e].encode(t)},y6=K1,G1=(e,t)=>{if(!ys.hasOwnProperty(e))throw new TypeError(q1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return ys[e].decode(t)},_6=G1,w6=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Ar,base16:U1,base32:D1,base32crockford:p6,base32hex:g6,base58:bs,base58check:j1,base58flickr:v6,base58xmr:F1,base58xrp:m6,base64:xi,base64url:H1,bech32:It,bech32m:b6,bytes:_6,bytesToString:K1,hex:W1,str:y6,stringToBytes:G1,utf8:N1,utils:h6},Symbol.toStringTag,{value:"Module"}));var Kc={};Object.defineProperty(Kc,"__esModule",{value:!0});var Gc=Kc.wordlist=void 0;Gc=Kc.wordlist=`abandon
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
`);var Gt={},pt={};Object.defineProperty(pt,"__esModule",{value:!0});pt.output=pt.exists=pt.hash=hi=pt.bytes=pt.bool=pt.number=void 0;function Xo(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}pt.number=Xo;function V1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}pt.bool=V1;function Vc(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var hi=pt.bytes=Vc;function Q1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Xo(e.outputLen),Xo(e.blockLen)}pt.hash=Q1;function Z1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}pt.exists=Z1;function X1(e,t){Vc(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}pt.output=X1;const $6={number:Xo,bool:V1,bytes:Vc,hash:Q1,exists:Z1,output:X1};pt.default=$6;var ki={},Y1={},Es={};const x6=ca(Xx);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=x6,r=R=>new Uint8Array(R.buffer,R.byteOffset,R.byteLength);e.u8=r;const s=R=>new Uint32Array(R.buffer,R.byteOffset,Math.floor(R.byteLength/4));e.u32=s;const o=R=>new DataView(R.buffer,R.byteOffset,R.byteLength);e.createView=o;const l=(R,E)=>R<<32-E|R>>>E;if(e.rotr=l,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},(R,E)=>E.toString(16).padStart(2,"0"));function u(R){if(!(R instanceof Uint8Array))throw new Error("Uint8Array expected");let E="";for(let O=0;O<R.length;O++)E+=c[R[O]];return E}e.bytesToHex=u;function d(R){if(typeof R!="string")throw new TypeError("hexToBytes: expected string, got "+typeof R);if(R.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const E=new Uint8Array(R.length/2);for(let O=0;O<E.length;O++){const N=O*2,q=R.slice(N,N+2),re=Number.parseInt(q,16);if(Number.isNaN(re)||re<0)throw new Error("Invalid byte sequence");E[O]=re}return E}e.hexToBytes=d;const g=async()=>{};e.nextTick=g;async function h(R,E,O){let N=Date.now();for(let q=0;q<R;q++){O(q);const re=Date.now()-N;re>=0&&re<E||(await(0,e.nextTick)(),N+=re)}}e.asyncLoop=h;function v(R){if(typeof R!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof R}`);return new TextEncoder().encode(R)}e.utf8ToBytes=v;function b(R){if(typeof R=="string"&&(R=v(R)),!(R instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof R})`);return R}e.toBytes=b;function _(...R){if(!R.every(N=>N instanceof Uint8Array))throw new Error("Uint8Array list expected");if(R.length===1)return R[0];const E=R.reduce((N,q)=>N+q.length,0),O=new Uint8Array(E);for(let N=0,q=0;N<R.length;N++){const re=R[N];O.set(re,q),q+=re.length}return O}e.concatBytes=_;class ${clone(){return this._cloneInto()}}e.Hash=$;const k=R=>Object.prototype.toString.call(R)==="[object Object]"&&R.constructor===Object;function S(R,E){if(E!==void 0&&(typeof E!="object"||!k(E)))throw new TypeError("Options should be object or undefined");return Object.assign(R,E)}e.checkOpts=S;function L(R){const E=N=>R().update(b(N)).digest(),O=R();return E.outputLen=O.outputLen,E.blockLen=O.blockLen,E.create=()=>R(),E}e.wrapConstructor=L;function U(R){const E=(N,q)=>R(q).update(b(N)).digest(),O=R({});return E.outputLen=O.outputLen,E.blockLen=O.blockLen,E.create=N=>R(N),E}e.wrapConstructorWithOpts=U;function M(R=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(R));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(R).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=M})(Es);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=pt,r=Es;class s extends r.Hash{constructor(c,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(c);const d=(0,r.toBytes)(u);if(this.iHash=c.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const g=this.blockLen,h=new Uint8Array(g);h.set(d.length>g?c.create().update(d).digest():d);for(let v=0;v<h.length;v++)h[v]^=54;this.iHash.update(h),this.oHash=c.create();for(let v=0;v<h.length;v++)h[v]^=106;this.oHash.update(h),h.fill(0)}update(c){return t.default.exists(this),this.iHash.update(c),this}digestInto(c){t.default.exists(this),t.default.bytes(c,this.outputLen),this.finished=!0,this.iHash.digestInto(c),this.oHash.update(c),this.oHash.digestInto(c),this.destroy()}digest(){const c=new Uint8Array(this.oHash.outputLen);return this.digestInto(c),c}_cloneInto(c){c||(c=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:g,destroyed:h,blockLen:v,outputLen:b}=this;return c=c,c.finished=g,c.destroyed=h,c.blockLen=v,c.outputLen=b,c.oHash=u._cloneInto(c.oHash),c.iHash=d._cloneInto(c.iHash),c}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(l,c,u)=>new s(l,c).update(u).digest();e.hmac=o,e.hmac.create=(l,c)=>new s(l,c)})(Y1);Object.defineProperty(ki,"__esModule",{value:!0});ki.pbkdf2Async=ki.pbkdf2=void 0;const Eo=pt,k6=Y1,pi=Es;function J1(e,t,r,s){Eo.default.hash(e);const o=(0,pi.checkOpts)({dkLen:32,asyncTick:10},s),{c:l,dkLen:c,asyncTick:u}=o;if(Eo.default.number(l),Eo.default.number(c),Eo.default.number(u),l<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,pi.toBytes)(t),g=(0,pi.toBytes)(r),h=new Uint8Array(c),v=k6.hmac.create(e,d),b=v._cloneInto().update(g);return{c:l,dkLen:c,asyncTick:u,DK:h,PRF:v,PRFSalt:b}}function eg(e,t,r,s,o){return e.destroy(),t.destroy(),s&&s.destroy(),o.fill(0),r}function C6(e,t,r,s){const{c:o,dkLen:l,DK:c,PRF:u,PRFSalt:d}=J1(e,t,r,s);let g;const h=new Uint8Array(4),v=(0,pi.createView)(h),b=new Uint8Array(u.outputLen);for(let _=1,$=0;$<l;_++,$+=u.outputLen){const k=c.subarray($,$+u.outputLen);v.setInt32(0,_,!1),(g=d._cloneInto(g)).update(h).digestInto(b),k.set(b.subarray(0,k.length));for(let S=1;S<o;S++){u._cloneInto(g).update(b).digestInto(b);for(let L=0;L<k.length;L++)k[L]^=b[L]}}return eg(u,d,c,g,b)}ki.pbkdf2=C6;async function S6(e,t,r,s){const{c:o,dkLen:l,asyncTick:c,DK:u,PRF:d,PRFSalt:g}=J1(e,t,r,s);let h;const v=new Uint8Array(4),b=(0,pi.createView)(v),_=new Uint8Array(d.outputLen);for(let $=1,k=0;k<l;$++,k+=d.outputLen){const S=u.subarray(k,k+d.outputLen);b.setInt32(0,$,!1),(h=g._cloneInto(h)).update(v).digestInto(_),S.set(_.subarray(0,S.length)),await(0,pi.asyncLoop)(o-1,c,L=>{d._cloneInto(h).update(_).digestInto(_);for(let U=0;U<S.length;U++)S[U]^=_[U]})}return eg(d,g,u,h,_)}ki.pbkdf2Async=S6;const E6=ca(d6);var cn={},va={};Object.defineProperty(va,"__esModule",{value:!0});va.SHA2=void 0;const Zl=pt,cs=Es;function T6(e,t,r,s){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,s);const o=BigInt(32),l=BigInt(4294967295),c=Number(r>>o&l),u=Number(r&l),d=s?4:0,g=s?0:4;e.setUint32(t+d,c,s),e.setUint32(t+g,u,s)}class A6 extends cs.Hash{constructor(t,r,s,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=s,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,cs.createView)(this.buffer)}update(t){Zl.default.exists(this);const{view:r,buffer:s,blockLen:o}=this;t=(0,cs.toBytes)(t);const l=t.length;for(let c=0;c<l;){const u=Math.min(o-this.pos,l-c);if(u===o){const d=(0,cs.createView)(t);for(;o<=l-c;c+=o)this.process(d,c);continue}s.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Zl.default.exists(this),Zl.default.output(t,this),this.finished=!0;const{buffer:r,view:s,blockLen:o,isLE:l}=this;let{pos:c}=this;r[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(s,0),c=0);for(let v=c;v<o;v++)r[v]=0;T6(s,o-8,BigInt(this.length*8),l),this.process(s,0);const u=(0,cs.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const g=d/4,h=this.get();if(g>h.length)throw new Error("_sha2: outputLen bigger than state");for(let v=0;v<g;v++)u.setUint32(4*v,h[v],l)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const s=t.slice(0,r);return this.destroy(),s}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:s,length:o,finished:l,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=l,t.destroyed=c,o%r&&t.buffer.set(s),t}}va.SHA2=A6;var tg={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),r=BigInt(32);function s(G,ee=!1){return ee?{h:Number(G&t),l:Number(G>>r&t)}:{h:Number(G>>r&t)|0,l:Number(G&t)|0}}e.fromBig=s;function o(G,ee=!1){let K=new Uint32Array(G.length),Q=new Uint32Array(G.length);for(let te=0;te<G.length;te++){const{h:Le,l:j}=s(G[te],ee);[K[te],Q[te]]=[Le,j]}return[K,Q]}e.split=o;const l=(G,ee)=>BigInt(G>>>0)<<r|BigInt(ee>>>0);e.toBig=l;const c=(G,ee,K)=>G>>>K,u=(G,ee,K)=>G<<32-K|ee>>>K,d=(G,ee,K)=>G>>>K|ee<<32-K,g=(G,ee,K)=>G<<32-K|ee>>>K,h=(G,ee,K)=>G<<64-K|ee>>>K-32,v=(G,ee,K)=>G>>>K-32|ee<<64-K,b=(G,ee)=>ee,_=(G,ee)=>G,$=(G,ee,K)=>G<<K|ee>>>32-K,k=(G,ee,K)=>ee<<K|G>>>32-K,S=(G,ee,K)=>ee<<K-32|G>>>64-K,L=(G,ee,K)=>G<<K-32|ee>>>64-K;function U(G,ee,K,Q){const te=(ee>>>0)+(Q>>>0);return{h:G+K+(te/2**32|0)|0,l:te|0}}e.add=U;const M=(G,ee,K)=>(G>>>0)+(ee>>>0)+(K>>>0),R=(G,ee,K,Q)=>ee+K+Q+(G/2**32|0)|0,E=(G,ee,K,Q)=>(G>>>0)+(ee>>>0)+(K>>>0)+(Q>>>0),O=(G,ee,K,Q,te)=>ee+K+Q+te+(G/2**32|0)|0,N=(G,ee,K,Q,te)=>(G>>>0)+(ee>>>0)+(K>>>0)+(Q>>>0)+(te>>>0),q=(G,ee,K,Q,te,Le)=>ee+K+Q+te+Le+(G/2**32|0)|0,re={fromBig:s,split:o,toBig:e.toBig,shrSH:c,shrSL:u,rotrSH:d,rotrSL:g,rotrBH:h,rotrBL:v,rotr32H:b,rotr32L:_,rotlSH:$,rotlSL:k,rotlBH:S,rotlBL:L,add:U,add3L:M,add3H:R,add4L:E,add4H:O,add5H:q,add5L:N};e.default=re})(tg);Object.defineProperty(cn,"__esModule",{value:!0});cn.sha384=cn.sha512_256=cn.sha512_224=mc=cn.sha512=cn.SHA512=void 0;const I6=va,_e=tg,ma=Es,[R6,L6]=_e.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),vr=new Uint32Array(80),mr=new Uint32Array(80);class Ts extends I6.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:r,Bh:s,Bl:o,Ch:l,Cl:c,Dh:u,Dl:d,Eh:g,El:h,Fh:v,Fl:b,Gh:_,Gl:$,Hh:k,Hl:S}=this;return[t,r,s,o,l,c,u,d,g,h,v,b,_,$,k,S]}set(t,r,s,o,l,c,u,d,g,h,v,b,_,$,k,S){this.Ah=t|0,this.Al=r|0,this.Bh=s|0,this.Bl=o|0,this.Ch=l|0,this.Cl=c|0,this.Dh=u|0,this.Dl=d|0,this.Eh=g|0,this.El=h|0,this.Fh=v|0,this.Fl=b|0,this.Gh=_|0,this.Gl=$|0,this.Hh=k|0,this.Hl=S|0}process(t,r){for(let M=0;M<16;M++,r+=4)vr[M]=t.getUint32(r),mr[M]=t.getUint32(r+=4);for(let M=16;M<80;M++){const R=vr[M-15]|0,E=mr[M-15]|0,O=_e.default.rotrSH(R,E,1)^_e.default.rotrSH(R,E,8)^_e.default.shrSH(R,E,7),N=_e.default.rotrSL(R,E,1)^_e.default.rotrSL(R,E,8)^_e.default.shrSL(R,E,7),q=vr[M-2]|0,re=mr[M-2]|0,G=_e.default.rotrSH(q,re,19)^_e.default.rotrBH(q,re,61)^_e.default.shrSH(q,re,6),ee=_e.default.rotrSL(q,re,19)^_e.default.rotrBL(q,re,61)^_e.default.shrSL(q,re,6),K=_e.default.add4L(N,ee,mr[M-7],mr[M-16]),Q=_e.default.add4H(K,O,G,vr[M-7],vr[M-16]);vr[M]=Q|0,mr[M]=K|0}let{Ah:s,Al:o,Bh:l,Bl:c,Ch:u,Cl:d,Dh:g,Dl:h,Eh:v,El:b,Fh:_,Fl:$,Gh:k,Gl:S,Hh:L,Hl:U}=this;for(let M=0;M<80;M++){const R=_e.default.rotrSH(v,b,14)^_e.default.rotrSH(v,b,18)^_e.default.rotrBH(v,b,41),E=_e.default.rotrSL(v,b,14)^_e.default.rotrSL(v,b,18)^_e.default.rotrBL(v,b,41),O=v&_^~v&k,N=b&$^~b&S,q=_e.default.add5L(U,E,N,L6[M],mr[M]),re=_e.default.add5H(q,L,R,O,R6[M],vr[M]),G=q|0,ee=_e.default.rotrSH(s,o,28)^_e.default.rotrBH(s,o,34)^_e.default.rotrBH(s,o,39),K=_e.default.rotrSL(s,o,28)^_e.default.rotrBL(s,o,34)^_e.default.rotrBL(s,o,39),Q=s&l^s&u^l&u,te=o&c^o&d^c&d;L=k|0,U=S|0,k=_|0,S=$|0,_=v|0,$=b|0,{h:v,l:b}=_e.default.add(g|0,h|0,re|0,G|0),g=u|0,h=d|0,u=l|0,d=c|0,l=s|0,c=o|0;const Le=_e.default.add3L(G,K,te);s=_e.default.add3H(Le,re,ee,Q),o=Le|0}({h:s,l:o}=_e.default.add(this.Ah|0,this.Al|0,s|0,o|0)),{h:l,l:c}=_e.default.add(this.Bh|0,this.Bl|0,l|0,c|0),{h:u,l:d}=_e.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:g,l:h}=_e.default.add(this.Dh|0,this.Dl|0,g|0,h|0),{h:v,l:b}=_e.default.add(this.Eh|0,this.El|0,v|0,b|0),{h:_,l:$}=_e.default.add(this.Fh|0,this.Fl|0,_|0,$|0),{h:k,l:S}=_e.default.add(this.Gh|0,this.Gl|0,k|0,S|0),{h:L,l:U}=_e.default.add(this.Hh|0,this.Hl|0,L|0,U|0),this.set(s,o,l,c,u,d,g,h,v,b,_,$,k,S,L,U)}roundClean(){vr.fill(0),mr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}cn.SHA512=Ts;class O6 extends Ts{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class P6 extends Ts{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class M6 extends Ts{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var mc=cn.sha512=(0,ma.wrapConstructor)(()=>new Ts);cn.sha512_224=(0,ma.wrapConstructor)(()=>new O6);cn.sha512_256=(0,ma.wrapConstructor)(()=>new P6);cn.sha384=(0,ma.wrapConstructor)(()=>new M6);const B6=ca(s6),U6=ca(w6);Object.defineProperty(Gt,"__esModule",{value:!0});var ng=Gt.mnemonicToSeedSync=Gt.mnemonicToSeed=dg=Gt.validateMnemonic=Gt.entropyToMnemonic=Gt.mnemonicToEntropy=lg=Gt.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const rg=pt,ig=ki,D6=E6,sg=cn,H6=B6,To=U6,F6=e=>e[0]==="あいこくしん";function og(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function Qc(e){const t=og(e),r=t.split(" ");if(![12,15,18,21,24].includes(r.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:r}}function ag(e){rg.default.bytes(e,16,20,24,28,32)}function j6(e,t=128){if(rg.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return fg((0,H6.randomBytes)(t/8),e)}var lg=Gt.generateMnemonic=j6;const z6=e=>{const t=8-e.length/4;return new Uint8Array([(0,D6.sha256)(e)[0]>>t<<t])};function cg(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),To.utils.chain(To.utils.checksum(1,z6),To.utils.radix2(11,!0),To.utils.alphabet(e))}function ug(e,t){const{words:r}=Qc(e),s=cg(t).decode(r);return ag(s),s}Gt.mnemonicToEntropy=ug;function fg(e,t){return ag(e),cg(t).encode(e).join(F6(t)?"　":" ")}Gt.entropyToMnemonic=fg;function N6(e,t){try{ug(e,t)}catch{return!1}return!0}var dg=Gt.validateMnemonic=N6;const hg=e=>og(`mnemonic${e}`);function W6(e,t=""){return(0,ig.pbkdf2Async)(sg.sha512,Qc(e).nfkd,hg(t),{c:2048,dkLen:64})}Gt.mnemonicToSeed=W6;function q6(e,t=""){return(0,ig.pbkdf2)(sg.sha512,Qc(e).nfkd,hg(t),{c:2048,dkLen:64})}ng=Gt.mnemonicToSeedSync=q6;class gg extends Wc{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,Wr.hash(t);const s=Cs(r);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,l=new Uint8Array(o);l.set(s.length>o?t.create().update(s).digest():s);for(let c=0;c<l.length;c++)l[c]^=54;this.iHash.update(l),this.oHash=t.create();for(let c=0;c<l.length;c++)l[c]^=106;this.oHash.update(l),l.fill(0)}update(t){return Wr.exists(this),this.iHash.update(t),this}digestInto(t){Wr.exists(this),Wr.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:s,finished:o,destroyed:l,blockLen:c,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=l,t.blockLen=c,t.outputLen=u,t.oHash=r._cloneInto(t.oHash),t.iHash=s._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const _s=(e,t,r)=>new gg(e,t).update(r).digest();_s.create=(e,t)=>new gg(e,t);const K6=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),pg=Uint8Array.from({length:16},(e,t)=>t),G6=pg.map(e=>(9*e+5)%16);let Zc=[pg],Xc=[G6];for(let e=0;e<4;e++)for(let t of[Zc,Xc])t.push(t[e].map(r=>K6[r]));const vg=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),V6=Zc.map((e,t)=>e.map(r=>vg[t][r])),Q6=Xc.map((e,t)=>e.map(r=>vg[t][r])),Z6=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),X6=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),Ao=(e,t)=>e<<t|e>>>32-t;function Oh(e,t,r,s){return e===0?t^r^s:e===1?t&r|~t&s:e===2?(t|~r)^s:e===3?t&s|r&~s:t^(r|~s)}const Io=new Uint32Array(16);class Y6 extends R1{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:r,h2:s,h3:o,h4:l}=this;return[t,r,s,o,l]}set(t,r,s,o,l){this.h0=t|0,this.h1=r|0,this.h2=s|0,this.h3=o|0,this.h4=l|0}process(t,r){for(let _=0;_<16;_++,r+=4)Io[_]=t.getUint32(r,!0);let s=this.h0|0,o=s,l=this.h1|0,c=l,u=this.h2|0,d=u,g=this.h3|0,h=g,v=this.h4|0,b=v;for(let _=0;_<5;_++){const $=4-_,k=Z6[_],S=X6[_],L=Zc[_],U=Xc[_],M=V6[_],R=Q6[_];for(let E=0;E<16;E++){const O=Ao(s+Oh(_,l,u,g)+Io[L[E]]+k,M[E])+v|0;s=v,v=g,g=Ao(u,10)|0,u=l,l=O}for(let E=0;E<16;E++){const O=Ao(o+Oh($,c,d,h)+Io[U[E]]+S,R[E])+b|0;o=b,b=h,h=Ao(d,10)|0,d=c,c=O}}this.set(this.h1+u+h|0,this.h2+g+b|0,this.h3+v+o|0,this.h4+s+c|0,this.h0+l+d|0)}roundClean(){Io.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const J6=pa(()=>new Y6);$e.hmacSha256Sync=(e,...t)=>_s(Jn,e,$e.concatBytes(...t));const Xl=j1(Jn);function Ph(e){return BigInt(`0x${E1(e)}`)}function e8(e){return T1(e.toString(16).padStart(64,"0"))}const t8=Nc("Bitcoin seed"),Yl={private:76066276,public:76067358},Jl=2147483648,n8=e=>J6(Jn(e)),r8=e=>Kr(e).getUint32(0,!1),Ro=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return Kr(t).setUint32(0,e,!1),t};class Nr{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||Yl,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!$e.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Ph(t.privateKey),this.privKeyBytes=e8(this.privKey),this.pubKey=Ux(t.privateKey,!0)}else if(t.publicKey)this.pubKey=Re.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=n8(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return r8(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return Xl.encode(this.serialize(this.versions.private,fs(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Xl.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,r=Yl){if(hi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const s=_s(mc,t8,t);return new Nr({versions:r,chainCode:s.slice(32),privateKey:s.slice(0,32)})}static fromExtendedKey(t,r=Yl){const s=Xl.decode(t),o=Kr(s),l=o.getUint32(0,!1),c={versions:r,depth:s[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:s.slice(13,45)},u=s.slice(45),d=u[0]===0;if(l!==r[d?"private":"public"])throw new Error("Version mismatch");return d?new Nr({...c,privateKey:u.slice(1)}):new Nr({...c,publicKey:u})}static fromJSON(t){return Nr.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const r=t.replace(/^[mM]'?\//,"").split("/");let s=this;for(const o of r){const l=/^(\d+)('?)$/.exec(o);if(!l||l.length!==3)throw new Error(`Invalid child index: ${o}`);let c=+l[1];if(!Number.isSafeInteger(c)||c>=Jl)throw new Error("Invalid index");l[2]==="'"&&(c+=Jl),s=s.deriveChild(c)}return s}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let r=Ro(t);if(t>=Jl){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");r=fs(new Uint8Array([0]),u,r)}else r=fs(this.pubKey,r);const s=_s(mc,this.chainCode,r),o=Ph(s.slice(0,32)),l=s.slice(32);if(!$e.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const c={versions:this.versions,chainCode:l,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=$e.mod(this.privKey+o,ze.n);if(!$e.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=u}else{const u=Re.fromHex(this.pubKey).add(Re.fromPrivateKey(o));if(u.equals(Re.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=u.toRawBytes(!0)}return new Nr(c)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return hi(t,32),jx(t,this.privKey,{canonical:!0,der:!1})}verify(t,r){if(hi(t,32),hi(r,64),!this.publicKey)throw new Error("No publicKey set!");let s;try{s=Yn.fromCompact(r)}catch{return!1}return Nx(s,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,r){if(!this.chainCode)throw new Error("No chainCode set");return hi(r,33),fs(Ro(t),new Uint8Array([this.depth]),Ro(this.parentFingerprint),Ro(this.index),this.chainCode,r)}}var i8=Object.defineProperty,Ht=(e,t)=>{for(var r in t)i8(e,r,{get:t[r],enumerable:!0})};function s8(e){return $e.bytesToHex(ga.getPublicKey(e))}var o8={};Ht(o8,{insertEventIntoAscendingList:()=>l8,insertEventIntoDescendingList:()=>a8,normalizeURL:()=>bc,utf8Decoder:()=>_r,utf8Encoder:()=>Rn});var _r=new TextDecoder("utf-8"),Rn=new TextEncoder;function bc(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function a8(e,t){let r=0,s=e.length-1,o,l=r;if(s<0)l=0;else if(t.created_at<e[s].created_at)l=s+1;else if(t.created_at>=e[r].created_at)l=r;else for(;;){if(s<=r+1){l=s;break}if(o=Math.floor(r+(s-r)/2),e[o].created_at>t.created_at)r=o;else if(e[o].created_at<t.created_at)s=o;else{l=o;break}}return e[l]?.id!==t.id?[...e.slice(0,l),t,...e.slice(l)]:e}function l8(e,t){let r=0,s=e.length-1,o,l=r;if(s<0)l=0;else if(t.created_at>e[s].created_at)l=s+1;else if(t.created_at<=e[r].created_at)l=r;else for(;;){if(s<=r+1){l=s;break}if(o=Math.floor(r+(s-r)/2),e[o].created_at<t.created_at)r=o;else if(e[o].created_at>t.created_at)s=o;else{l=o;break}}return e[l]?.id!==t.id?[...e.slice(0,l),t,...e.slice(l)]:e}var gt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(gt||{});function c8(e){if(!Yc(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function mg(e){let t=Jn(Rn.encode(c8(e)));return $e.bytesToHex(t)}var u8=e=>e instanceof Object;function Yc(e){if(!u8(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let r=e.tags[t];if(!Array.isArray(r))return!1;for(let s=0;s<r.length;s++)if(typeof r[s]=="object")return!1}return!0}function bg(e){return ga.verifySync(e.sig,mg(e),e.pubkey)}function f8(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(r=>t.id.startsWith(r))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(r=>t.pubkey.startsWith(r)))return!1;for(let r in e)if(r[0]==="#"){let s=r.slice(1),o=e[`#${s}`];if(o&&!t.tags.find(([l,c])=>l===r.slice(1)&&o.indexOf(c)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function d8(e,t){for(let r=0;r<e.length;r++)if(f8(e[r],t))return!0;return!1}var h8={};Ht(h8,{getHex64:()=>ba,getInt:()=>yg,getSubscriptionId:()=>_g,matchEventId:()=>g8,matchEventKind:()=>v8,matchEventPubkey:()=>p8});function ba(e,t){let r=t.length+3,s=e.indexOf(`"${t}":`)+r,o=e.slice(s).indexOf('"')+s+1;return e.slice(o,o+64)}function yg(e,t){let r=t.length,s=e.indexOf(`"${t}":`)+r+3,o=e.slice(s),l=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,l),10)}function _g(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let r=e.slice(t+7+1).indexOf('"');if(r===-1)return null;let s=t+7+1+r,o=e.slice(s+1,80).indexOf('"');if(o===-1)return null;let l=s+1+o;return e.slice(s+1,l)}function g8(e,t){return t===ba(e,"id")}function p8(e,t){return t===ba(e,"pubkey")}function v8(e,t){return t===yg(e,"kind")}var Mh=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function m8(e,t={}){let{listTimeout:r=3e3,getTimeout:s=3e3,countTimeout:o=3e3}=t;var l,c={},u=Mh(),d={},g={},h;async function v(){return h||(h=new Promise((L,U)=>{try{l=new WebSocket(e)}catch(O){U(O)}l.onopen=()=>{u.connect.forEach(O=>O()),L()},l.onerror=()=>{h=void 0,u.error.forEach(O=>O()),U()},l.onclose=async()=>{h=void 0,u.disconnect.forEach(O=>O())};let M=[],R;l.onmessage=O=>{M.push(O.data),R||(R=setInterval(E,0))};function E(){if(M.length===0){clearInterval(R),R=null;return}var O=M.shift();if(!O)return;let N=_g(O);if(N){let q=c[N];if(q&&q.alreadyHaveEvent&&q.alreadyHaveEvent(ba(O,"id"),e))return}try{let q=JSON.parse(O);switch(q[0]){case"EVENT":{let K=q[1],Q=q[2];Yc(Q)&&c[K]&&(c[K].skipVerification||bg(Q))&&d8(c[K].filters,Q)&&(c[K],(d[K]?.event||[]).forEach(te=>te(Q)));return}case"COUNT":let re=q[1],G=q[2];c[re]&&(d[re]?.count||[]).forEach(K=>K(G));return;case"EOSE":{let K=q[1];K in d&&(d[K].eose.forEach(Q=>Q()),d[K].eose=[]);return}case"OK":{let K=q[1],Q=q[2],te=q[3]||"";K in g&&(Q?g[K].ok.forEach(Le=>Le()):g[K].failed.forEach(Le=>Le(te)),g[K].ok=[],g[K].failed=[]);return}case"NOTICE":let ee=q[1];u.notice.forEach(K=>K(ee));return;case"AUTH":{let K=q[1];u.auth?.forEach(Q=>Q(K));return}}}catch{return}}}),h)}function b(){return l?.readyState===1}async function _(){b()||await v()}async function $(L){let U=JSON.stringify(L);if(!(!b()&&(await new Promise(M=>setTimeout(M,1e3)),!b())))try{l.send(U)}catch(M){console.log(M)}}const k=(L,{verb:U="REQ",skipVerification:M=!1,alreadyHaveEvent:R=null,id:E=Math.random().toString().slice(2)}={})=>{let O=E;return c[O]={id:O,filters:L,skipVerification:M,alreadyHaveEvent:R},$([U,O,...L]),{sub:(N,q={})=>k(N||L,{skipVerification:q.skipVerification||M,alreadyHaveEvent:q.alreadyHaveEvent||R,id:O}),unsub:()=>{delete c[O],delete d[O],$(["CLOSE",O])},on:(N,q)=>{d[O]=d[O]||{event:[],count:[],eose:[]},d[O][N].push(q)},off:(N,q)=>{let re=d[O],G=re[N].indexOf(q);G>=0&&re[N].splice(G,1)}}};function S(L,U){if(!L.id)throw new Error(`event ${L} has no id`);let M=L.id;return $([U,L]),{on:(R,E)=>{g[M]=g[M]||{ok:[],failed:[]},g[M][R].push(E)},off:(R,E)=>{let O=g[M];if(!O)return;let N=O[R].indexOf(E);N>=0&&O[R].splice(N,1)}}}return{url:e,sub:k,on:(L,U)=>{u[L].push(U),L==="connect"&&l?.readyState===1&&U()},off:(L,U)=>{let M=u[L].indexOf(U);M!==-1&&u[L].splice(M,1)},list:(L,U)=>new Promise(M=>{let R=k(L,U),E=[],O=setTimeout(()=>{R.unsub(),M(E)},r);R.on("eose",()=>{R.unsub(),clearTimeout(O),M(E)}),R.on("event",N=>{E.push(N)})}),get:(L,U)=>new Promise(M=>{let R=k([L],U),E=setTimeout(()=>{R.unsub(),M(null)},s);R.on("event",O=>{R.unsub(),clearTimeout(E),M(O)})}),count:L=>new Promise(U=>{let M=k(L,{...k,verb:"COUNT"}),R=setTimeout(()=>{M.unsub(),U(null)},o);M.on("count",E=>{M.unsub(),clearTimeout(R),U(E)})}),publish(L){return S(L,"EVENT")},auth(L){return S(L,"AUTH")},connect:_,close(){u=Mh(),d={},g={},l.readyState===WebSocket.OPEN&&l?.close()},get status(){return l?.readyState??3}}}var b8=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let r=this._conn[bc(t)];r&&r.close()})}async ensureRelay(e){const t=bc(e);this._conn[t]||(this._conn[t]=m8(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const r=this._conn[t];return await r.connect(),r}sub(e,t,r){let s=new Set,o={...r||{}};o.alreadyHaveEvent=(b,_)=>{if(r?.alreadyHaveEvent?.(b,_))return!0;let $=this._seenOn[b]||new Set;return $.add(_),this._seenOn[b]=$,s.has(b)};let l=[],c=new Set,u=new Set,d=e.length,g=!1,h=setTimeout(()=>{g=!0;for(let b of u.values())b()},this.eoseSubTimeout);e.forEach(async b=>{let _;try{_=await this.ensureRelay(b)}catch{k();return}if(!_)return;let $=_.sub(t,o);$.on("event",S=>{s.add(S.id);for(let L of c.values())L(S)}),$.on("eose",()=>{g||k()}),l.push($);function k(){if(d--,d===0){clearTimeout(h);for(let S of u.values())S()}}});let v={sub(b,_){return l.forEach($=>$.sub(b,_)),v},unsub(){l.forEach(b=>b.unsub())},on(b,_){b==="event"?c.add(_):b==="eose"&&u.add(_)},off(b,_){b==="event"?c.delete(_):b==="eose"&&u.delete(_)}};return v}get(e,t,r){return new Promise(s=>{let o=this.sub(e,[t],r),l=setTimeout(()=>{o.unsub(),s(null)},this.getTimeout);o.on("event",c=>{s(c),clearTimeout(l),o.unsub()})})}list(e,t,r){return new Promise(s=>{let o=[],l=this.sub(e,t,r);l.on("event",c=>{o.push(c)}),l.on("eose",()=>{l.unsub(),s(o)})})}publish(e,t){const r=e.map(async o=>{let l;try{return l=await this.ensureRelay(o),l.publish(t)}catch{return{on(){},off(){}}}}),s=new Map;return{on(o,l){e.forEach(async(c,u)=>{let d=await r[u],g=()=>l(c);s.set(l,g),d.on(o,g)})},off(o,l){e.forEach(async(c,u)=>{let d=s.get(l);d&&(await r[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},As={};Ht(As,{decode:()=>ya,naddrEncode:()=>k8,neventEncode:()=>x8,noteEncode:()=>w8,nprofileEncode:()=>$8,npubEncode:()=>_8,nrelayEncode:()=>C8,nsecEncode:()=>y8});var Mi=5e3;function ya(e){let{prefix:t,words:r}=It.decode(e,Mi),s=new Uint8Array(It.fromWords(r));switch(t){case"nprofile":{let o=Lo(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:$e.bytesToHex(o[0][0]),relays:o[1]?o[1].map(l=>_r.decode(l)):[]}}}case"nevent":{let o=Lo(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:$e.bytesToHex(o[0][0]),relays:o[1]?o[1].map(l=>_r.decode(l)):[],author:o[2]?.[0]?$e.bytesToHex(o[2][0]):void 0}}}case"naddr":{let o=Lo(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:_r.decode(o[0][0]),pubkey:$e.bytesToHex(o[2][0]),kind:parseInt($e.bytesToHex(o[3][0]),16),relays:o[1]?o[1].map(l=>_r.decode(l)):[]}}}case"nrelay":{let o=Lo(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:_r.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:$e.bytesToHex(s)};default:throw new Error(`unknown prefix ${t}`)}}function Lo(e){let t={},r=e;for(;r.length>0;){let s=r[0],o=r[1],l=r.slice(2,2+o);r=r.slice(2+o),!(l.length<o)&&(t[s]=t[s]||[],t[s].push(l))}return t}function y8(e){return Jc("nsec",e)}function _8(e){return Jc("npub",e)}function w8(e){return Jc("note",e)}function Jc(e,t){let r=$e.hexToBytes(t),s=It.toWords(r);return It.encode(e,s,Mi)}function $8(e){let t=_a({0:[$e.hexToBytes(e.pubkey)],1:(e.relays||[]).map(s=>Rn.encode(s))}),r=It.toWords(t);return It.encode("nprofile",r,Mi)}function x8(e){let t=_a({0:[$e.hexToBytes(e.id)],1:(e.relays||[]).map(s=>Rn.encode(s)),2:e.author?[$e.hexToBytes(e.author)]:[]}),r=It.toWords(t);return It.encode("nevent",r,Mi)}function k8(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let r=_a({0:[Rn.encode(e.identifier)],1:(e.relays||[]).map(o=>Rn.encode(o)),2:[$e.hexToBytes(e.pubkey)],3:[new Uint8Array(t)]}),s=It.toWords(r);return It.encode("naddr",s,Mi)}function C8(e){let t=_a({0:[Rn.encode(e)]}),r=It.toWords(t);return It.encode("nrelay",r,Mi)}function _a(e){let t=[];return Object.entries(e).forEach(([r,s])=>{s.forEach(o=>{let l=new Uint8Array(o.length+2);l.set([parseInt(r)],0),l.set([o.length],1),l.set(o,2),t.push(l)})}),$e.concatBytes(...t)}var S8={};Ht(S8,{decrypt:()=>T8,encrypt:()=>E8});async function E8(e,t,r){const s=m1(e,"02"+t),o=wg(s);let l=Uint8Array.from(I1(16)),c=Rn.encode(r),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:l},u,c),g=xi.encode(new Uint8Array(d)),h=xi.encode(new Uint8Array(l.buffer));return`${g}?iv=${h}`}async function T8(e,t,r){let[s,o]=r.split("?iv="),l=m1(e,"02"+t),c=wg(l),u=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),d=xi.decode(s),g=xi.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:g},u,d);return _r.decode(h)}function wg(e){return e.slice(1,33)}var $g={};Ht($g,{queryProfile:()=>R8,searchDomain:()=>I8,useFetchImplementation:()=>A8});var wa;try{wa=fetch}catch{}function A8(e){wa=e}async function I8(e,t=""){try{return(await(await wa(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function R8(e){let[t,r]=e.split("@");if(r||(r=t,t="_"),!t.match(/^[A-Za-z0-9-_.]+$/)||!r.includes("."))return null;let s;try{s=await(await wa(`https://${r}/.well-known/nostr.json?name=${t}`)).json()}catch{return null}if(!s?.names?.[t])return null;let o=s.names[t],l=s.relays?.[o]||[];return{pubkey:o,relays:l}}var L8={};Ht(L8,{generateSeedWords:()=>P8,privateKeyFromSeedWords:()=>O8,validateWords:()=>M8});function O8(e,t){let s=Nr.fromMasterSeed(ng(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!s)throw new Error("could not derive private key");return $e.bytesToHex(s)}function P8(){return lg(Gc)}function M8(e){return dg(e,Gc)}var B8={};Ht(B8,{parse:()=>U8});function U8(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},r=[];for(const s of e.tags)s[0]==="e"&&s[1]&&r.push(s),s[0]==="p"&&s[1]&&t.profiles.push({pubkey:s[1],relays:s[2]?[s[2]]:[]});for(let s=0;s<r.length;s++){const o=r[s],[l,c,u,d]=o,g={id:c,relays:u?[u]:[]},h=s===0,v=s===r.length-1;if(d==="root"){t.root=g;continue}if(d==="reply"){t.reply=g;continue}if(d==="mention"){t.mentions.push(g);continue}if(h){t.root=g;continue}if(v){t.reply=g;continue}t.mentions.push(g)}return t}var D8={};Ht(D8,{getPow:()=>H8});function H8(e){return F8($e.hexToBytes(e))}function F8(e){let t,r,s;for(r=0,t=0;r<e.length&&(s=j8(e[r]),t+=s,s===8);r++);return t}function j8(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var z8={};Ht(z8,{BECH32_REGEX:()=>xg,NOSTR_URI_REGEX:()=>$a,parse:()=>W8,test:()=>N8});var xg=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/,$a=new RegExp(`nostr:(${xg.source})`);function N8(e){return typeof e=="string"&&new RegExp(`^${$a.source}$`).test(e)}function W8(e){const t=e.match(new RegExp(`^${$a.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:ya(t[1])}}var q8={};Ht(q8,{createDelegation:()=>K8,getDelegator:()=>G8});function K8(e,t){let r=[];(t.kind||-1)>=0&&r.push(`kind=${t.kind}`),t.until&&r.push(`created_at<${t.until}`),t.since&&r.push(`created_at>${t.since}`);let s=r.join("&");if(s==="")throw new Error("refusing to create a delegation without any conditions");let o=Jn(Rn.encode(`nostr:delegation:${t.pubkey}:${s}`)),l=$e.bytesToHex(ga.signSync(o,e));return{from:s8(e),to:t.pubkey,cond:s,sig:l}}function G8(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let r=t[1],s=t[2],o=t[3],l=s.split("&");for(let u=0;u<l.length;u++){let[d,g,h]=l[u].split(/\b/);if(!(d==="kind"&&g==="="&&e.kind===parseInt(h))){if(d==="created_at"&&g==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&g===">"&&e.created_at>parseInt(h))continue;return null}}let c=Jn(Rn.encode(`nostr:delegation:${e.pubkey}:${s}`));return ga.verifySync(o,c,r)?r:null}var V8={};Ht(V8,{matchAll:()=>Q8,regex:()=>eu,replaceAll:()=>Z8});var eu=()=>new RegExp(`\\b${$a.source}\\b`,"g");function*Q8(e){const t=e.matchAll(eu());for(const r of t){const[s,o]=r;yield{uri:s,value:o,decoded:ya(o),start:r.index,end:r.index+s.length}}}function Z8(e,t){return e.replaceAll(eu(),(r,s)=>t({uri:r,value:s,decoded:ya(s)}))}var X8={};Ht(X8,{useFetchImplementation:()=>Y8,validateGithub:()=>J8});var tu;try{tu=fetch}catch{}function Y8(e){tu=e}async function J8(e,t,r){try{return await(await tu(`https://gist.github.com/${t}/${r}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var e7={};Ht(e7,{authenticate:()=>t7});var t7=async({challenge:e,relay:t,sign:r})=>{const s={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await r(s));return new Promise((l,c)=>{o.on("ok",function u(){o.off("ok",u),l()}),o.on("failed",function u(d){o.off("failed",u),c(d)})})},n7={};Ht(n7,{getZapEndpoint:()=>i7,makeZapReceipt:()=>a7,makeZapRequest:()=>s7,useFetchImplementation:()=>r7,validateZapRequest:()=>o7});var nu;try{nu=fetch}catch{}function r7(e){nu=e}async function i7(e){try{let t="",{lud06:r,lud16:s}=JSON.parse(e.content);if(r){let{words:c}=It.decode(r,1e3),u=It.fromWords(c);t=_r.decode(u)}else if(s){let[c,u]=s.split("@");t=`https://${u}/.well-known/lnurlp/${c}`}else return null;let l=await(await nu(t)).json();if(l.allowsNostr&&l.nostrPubkey)return l.callback}catch{}return null}function s7({profile:e,event:t,amount:r,relays:s,comment:o=""}){if(!r)throw new Error("amount not given");if(!e)throw new Error("profile not given");let l={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",r.toString()],["relays",...s]]};return t&&l.tags.push(["e",t]),l}function o7(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!Yc(t))return"Zap request is not a valid Nostr event.";if(!bg(t))return"Invalid signature on zap request.";let r=t.tags.find(([l,c])=>l==="p"&&c);if(!r)return"Zap request doesn't have a 'p' tag.";if(!r[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let s=t.tags.find(([l,c])=>l==="e"&&c);return s&&!s[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([l,c])=>l==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function a7({zapRequest:e,preimage:t,bolt11:r,paidAt:s}){let l=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),c={kind:9735,created_at:Math.round(s.getTime()/1e3),content:"",tags:[...l,["bolt11",r],["description",e]]};return t&&c.tags.push(["preimage",t]),c}$e.hmacSha256Sync=(e,...t)=>_s(Jn,e,$e.concatBytes(...t));$e.sha256Sync=(...e)=>Jn($e.concatBytes(...e));const l7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),kg=(e={})=>(()=>{const t=l7();return Ze(t,e,!0,!0),t})(),c7=P('<button class="text-blue-500 underline">'),{noteEncode:u7,neventEncode:f7}=As,d7=e=>{try{return u7(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},h7=e=>{try{return f7({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},xa=e=>(()=>{const t=c7();return I(t,w(ae,{get when(){return e.kind==null||e.kind===gt.Text},get fallback(){return h7(e.eventId)},get children(){return d7(e.eventId)}})),t})(),g7=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],Cg=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],p7=[...Cg,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],v7=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],m7=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},Bi=()=>({id:m7(),width:"medium"}),Sg=e=>({...Bi(),columnType:"Following",...e}),Eg=e=>({...Bi(),columnType:"Notification",...e}),b7=e=>({...Bi(),columnType:"Relays",...e}),Tg=()=>b7({name:"日本語",relayUrls:Cg,contentFilter:{filterType:"Regex",regex:"[\\p{scx=Hiragana}\\p{scx=Katakana}]",flag:"u"}}),Ag=e=>({...Bi(),columnType:"Posts",...e}),Ig=e=>({...Bi(),columnType:"Reactions",...e}),ru=e=>({...Bi(),columnType:"Search",...e}),y7=()=>{const e=[...g7];return window.navigator.language.includes("ja")&&e.push(...p7),e},Rg=()=>({relayUrls:y7(),columns:[],dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),_7=e=>JSON.stringify(e),w7=e=>({...Rg(),...JSON.parse(e)}),$7=Gw(()=>window.localStorage,_7,w7),[Oo,vn]=Vw("RabbitConfig",Rg(),$7),Pe=()=>{const e=_=>{vn("relayUrls",$=>xr([...$,_]))},t=_=>{vn("relayUrls",$=>$.filter(k=>k!==_))},r=_=>{vn("mutedPubkeys",$=>xr([...$,_]))},s=_=>{vn("mutedPubkeys",$=>$.filter(k=>k!==_))},o=_=>{vn("mutedKeywords",$=>xr([...$,_]))},l=_=>{vn("mutedKeywords",$=>$.filter(k=>k!==_))},c=_=>{vn("columns",$=>{const k=$.findIndex(S=>S.id===_.id);if(k>=0){const S=[...$];return S.splice(k,1,_),S}return[...$,_]})},u=(_,$)=>{vn("columns",k=>{const S=$-1,L=Math.max(Math.min(S,k.length),0),U=k.findIndex(E=>E.id===_);if(U<0||L===U)return k;console.log(U,L);const M=[...k],[R]=M.splice(U,1);return M.splice(L,0,R),M})},d=_=>{vn("columns",$=>$.filter(k=>k.id!==_))},g=_=>Oo.mutedPubkeys.includes(_),h=_=>_.kind===gt.Text?Oo.mutedKeywords.some($=>_.content.includes($)):!1;return{config:()=>Oo,setConfig:vn,addRelay:e,removeRelay:t,addMutedPubkey:r,removeMutedPubkey:s,addMutedKeyword:o,removeMutedKeyword:l,saveColumn:c,moveColumn:u,removeColumn:d,isPubkeyMuted:g,shouldMuteEvent:_=>g(_.pubkey)||h(_),initializeColumns:({pubkey:_})=>{if((Oo.columns?.length??0)>0)return;const $=[Sg({width:"widest",pubkey:_}),Eg({pubkey:_}),Ag({name:"自分の投稿",pubkey:_}),Ig({name:"自分のリアクション",pubkey:_})];navigator.language.includes("ja")&&$.splice(2,0,Tg()),vn("columns",()=>[...$])}}},x7=/^[0-9a-f]{64}$/,gs=e=>{const t=typeof e=="string"&&e.length===64&&x7.test(e);return t||console.warn("invalid id is ignored: ",e),t},wn=e=>{let t;return{get rawEvent(){return e},get id(){return e.id},get pubkey(){return e.pubkey},get createdAt(){return e.created_at},get content(){return e.content},get tags(){return e.tags},createdAtAsDate(){return new Date(e.created_at*1e3)},pTags(){return e.tags.filter(([r,s])=>r==="p"&&gs(s))},eTags(){return e.tags.filter(([r,s])=>r==="e"&&gs(s))},taggedEventIds(){return this.eTags().map(([,r])=>r)},lastTaggedEventId(){const r=this.taggedEventIds();if(r.length!==0)return r[r.length-1]},markedEventTags(){if(e.kind!==gt.Text)throw new Error("kind should be 1");if(t!=null)return t;const r=e.tags.map((o,l)=>[o,l]).filter(([[o,l]])=>o==="e"&&gs(l)),s=(o,l)=>{if(e.kind===1)return o==="root"||o==="reply"||o==="mention"?o:r.length===1?"reply":l===0?"root":r.length===2||l===r.length-1?"reply":"mention"};return t=r.map(([[,o,l,c],u],d)=>({id:o,relayUrl:l,marker:s(c,d),index:u})),t},replyingToEvent(){return this.markedEventTags().find(({marker:r})=>r==="reply")},rootEvent(){return this.markedEventTags().find(({marker:r})=>r==="root")},mentionedEvents(){return this.markedEventTags().filter(({marker:r})=>r==="mention")},mentionedPubkeys(){return xr(this.pTags().map(([,r])=>r))},mentionedPubkeysWithoutAuthor(){return this.mentionedPubkeys().filter(r=>r!==e.pubkey)},contentWarning(){const r=e.tags.find(([o])=>o==="content-warning");return r==null?{contentWarning:!1}:{contentWarning:!0,reason:(r[1]?.length??0)>0?r[1]:void 0}},containsEventMention(r){const s=e.tags.findIndex(([o,l])=>o==="e"&&l===r);return s<0?!1:this.containsEventMentionIndex(s)},containsEventMentionIndex(r){return r<0||r>=e.tags.length?!1:e.content.includes(`#[${r}]`)}}},k7=()=>{let e,t;const r=new Promise((s,o)=>{e=s,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:r,resolve:e,reject:t}},C7=e=>{const t=De(e),r=De(()=>t().batchSize??100),s=De(()=>t().interval??2e3),[o,l]=me(0),[c,u]=me([]);let d;const g=()=>{const{executor:k}=t(),S=c();S.length>0&&(u([]),k(S)),d!=null&&clearTimeout(d),d=void 0},h=()=>{const k=o();return l(S=>S+1),k},v=()=>{d==null&&(d=setTimeout(()=>{g()},s()))},b=k=>{c().length<r()?u(S=>[...S,k]):(g(),u([k]))},_=k=>{u(S=>S.filter(L=>L.id!==k))};return{exec:async(k,S)=>{const{promise:L,resolve:U,reject:M}=k7(),R=h();return b({id:R,args:k,resolve:U,reject:M}),v(),S?.addEventListener("abort",()=>{_(R),M(new Error("AbortError"))}),L}}},[S7]=me(new b8),ka=()=>S7,[E7,Bh]=mi({activeSubscriptions:0,activeBatchSubscriptions:0}),Lg=()=>({stats:E7,setActiveSubscriptions:r=>Bh("activeSubscriptions",r),setActiveBatchSubscriptions:r=>Bh("activeBatchSubscriptions",r)}),Ir=(e,t)=>r=>{const s=new Promise((o,l)=>{setTimeout(()=>{const c=t!=null?`TimeoutError: ${t}`:"TimeoutError";l(new Error(c))},e)});return Promise.race([r,s])},T7=/\p{Emoji_Presentation}/u;let yc=0;const{setActiveBatchSubscriptions:A7}=Lg();setInterval(()=>{A7(yc)},1e3);const I7={events:[],completed:!0},R7=()=>I7,{exec:Is}=C7(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,r=new Map,s=new Map,o=new Map,l=new Map,c=new Map;e.forEach(E=>{if(E.args.type==="Event"){const O=r.get(E.args.eventId)??[];r.set(E.args.eventId,[...O,E])}else if(E.args.type==="Profile"){const O=t.get(E.args.pubkey)??[];t.set(E.args.pubkey,[...O,E])}else if(E.args.type==="Reactions"){const O=s.get(E.args.mentionedEventId)??[];s.set(E.args.mentionedEventId,[...O,E])}else if(E.args.type==="Reposts"){const O=o.get(E.args.mentionedEventId)??[];o.set(E.args.mentionedEventId,[...O,E])}else if(E.args.type==="ZapReceipts"){const O=l.get(E.args.mentionedEventId)??[];o.set(E.args.mentionedEventId,[...O,E])}else if(E.args.type==="Followings"){const O=c.get(E.args.pubkey)??[];c.set(E.args.pubkey,[...O,E])}});const u=[...r.keys()],d=[...t.keys()],g=[...s.keys()],h=[...o.keys()],v=[...l.keys()],b=[...c.keys()],_=[];if(u.length>0&&_.push({ids:u}),d.length>0&&_.push({kinds:[gt.Metadata],authors:d}),g.length>0&&_.push({kinds:[gt.Reaction],"#e":g}),h.length>0&&_.push({kinds:[6],"#e":h}),v.length>0&&_.push({kinds:[9735],"#e":v}),b.length>0&&_.push({kinds:[gt.Contacts],authors:b}),_.length===0)return;const $=new Map,k=(E,O)=>{E.forEach(N=>{const q=$.get(N.id)??me({events:[],completed:!1});$.set(N.id,q);const[re,G]=q;G(ee=>({...ee,events:[...ee.events,O]})),N.resolve(re)})},S=()=>{e.forEach(E=>{const O=$.get(E.id);if(O!=null){const N=O[1];N(q=>({...q,completed:!0}))}else E.resolve(R7)})},{config:L,shouldMuteEvent:U}=Pe(),R=ka()().sub(L().relayUrls,_,{});yc+=1,R.on("event",E=>{if(E.kind===gt.Metadata){const O=t.get(E.pubkey)??[];k(O,E);return}if(!U(E))if(E.kind===gt.Reaction){const O=wn(E).lastTaggedEventId();if(O!=null){const N=s.get(O)??[];k(N,E)}}else if(E.kind===6){const O=wn(E).lastTaggedEventId();if(O!=null){const N=o.get(O)??[];k(N,E)}}else if(E.kind===gt.Zap)wn(E).eTags().forEach(([,N])=>{const q=o.get(N)??[];k(q,E)});else if(E.kind===gt.Contacts){const O=c.get(E.pubkey)??[];k(O,E)}else{const O=r.get(E.id)??[];O.length>0?k(O,E):console.warn("unknown event received")}}),R.on("eose",()=>{S(),R.unsub(),yc-=1})}})),Og=e=>e.length===0?null:e.reduce((t,r)=>t.created_at>r.created_at?t:r),Ui=e=>{const t=Ei(),r=De(e),s=De(()=>["useProfile",r()]),o=Ti(s,({queryKey:u,signal:d})=>{const[,g]=u;if(g==null)return Promise.resolve(null);const{pubkey:h}=g;if(h.startsWith("npub1"))return Promise.resolve(null);const v=Is({type:"Profile",pubkey:h},d).then(b=>{const _=()=>{const $=Og(b().events);if($==null)throw new Error(`profile not found: ${h}`);return $};return la(b).subscribe(()=>{try{t.setQueryData(u,_())}catch($){console.error("error occurred while updating profile cache: ",$)}}),_()});return Ir(15e3,`useProfile: ${h}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3});return{profile:De(()=>{if(o.data==null)return null;const{content:u}=o.data;if(u==null||u.length===0)return null;try{return JSON.parse(u)}catch(d){return console.warn("failed to parse profile (kind 0): ",d,u),null}}),invalidateProfile:()=>t.invalidateQueries(s()),query:o}},Pg=e=>{const t=De(e),r=Ti(()=>["useEvent",t()],({queryKey:o,signal:l})=>{const[,c]=o;if(c==null)return null;const{eventId:u}=c,d=Is({type:"Event",eventId:u},l).then(g=>{const h=g().events[0];if(h==null)throw new Error(`event not found: ${u}`);return h});return Ir(15e3,`useEvent: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>r.data??null,query:r}},L7=e=>{const t=Ei(),r=De(e),s=De(()=>["useReactions",r()]),o=Ti(s,({queryKey:h,signal:v})=>{const[,b]=h;if(b==null)return[];const{eventId:_}=b,$=Is({type:"Reactions",mentionedEventId:_},v).then(k=>{const S=()=>k().events;return la(k).subscribe(()=>{t.setQueryData(h,S())}),S()});return Ir(15e3,`useReactions: ${_}`)($)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>o.data??[];return{reactions:l,reactionsGroupedByContent:()=>{const h=new Map;return l().forEach(v=>{const b=h.get(v.content)??[];b.push(v),h.set(v.content,b)}),h},isReactedBy:h=>l().findIndex(v=>v.pubkey===h)!==-1,isReactedByWithEmoji:h=>l().findIndex(v=>v.pubkey===h&&T7.test(v.content))!==-1,invalidateReactions:()=>t.invalidateQueries(s()),query:o}},O7=e=>{const t=Ei(),r=De(e),s=De(()=>["useReposts",r()]),o=Ti(s,({queryKey:d,signal:g})=>{const[,h]=d;if(h==null)return[];const{eventId:v}=h,b=Is({type:"Reposts",mentionedEventId:v},g).then(_=>{const $=()=>_().events;return la(_).subscribe(()=>{t.setQueryData(d,$())}),$()});return Ir(15e3,`useReposts: ${v}`)(b)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>o.data??[];return{reposts:l,isRepostedBy:d=>l().findIndex(g=>g.pubkey===d)!==-1,invalidateReposts:()=>t.invalidateQueries(s()),query:o}},_c=e=>{const t=Ei(),r=De(e),s=()=>["useFollowings",r()],o=Ti(s,({queryKey:d,signal:g})=>{const[,h]=d;if(h==null)return Promise.resolve(null);const{pubkey:v}=h,b=Is({type:"Followings",pubkey:v},g).then(_=>{const $=()=>{const k=Og(_().events);if(k==null)throw new Error(`followings not found: ${v}`);return k};return la(_).subscribe(()=>{try{t.setQueryData(d,$())}catch(k){console.error("error occurred while updating followings cache: ",k)}}),$()});return Ir(15e3,`useFollowings: ${v}`)(b)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),l=()=>{if(o.data==null)return[];const d=[];return wn(o.data).pTags().forEach(h=>{const[,v,b,_]=h,$={pubkey:v,petname:_};b!=null&&b.length>0&&($.mainRelayUrl=b),d.push($)}),d};return{followings:l,followingPubkeys:()=>l().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(s()),query:o}},Vt=e=>t=>e.some(r=>r==null)?null:t(e),P7=P('<div class="truncate">読み込み中 '),ws=e=>{const[t,r]=Uw(e,["eventId"]),{shouldMuteEvent:s}=Pe(),{event:o,query:l}=Pg(()=>Vt([t.eventId])(([u])=>({eventId:u}))),c=()=>{const u=o();return u!=null&&s(u)};return w(_n,{fallback:"投稿が見つかりません",get children(){return[w(Me,{get when(){return c()},children:null}),w(Me,{get when(){return o()},keyed:!0,children:u=>w(_p,Dw({event:u},r))}),w(Me,{get when(){return l.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=P7();return d.firstChild,I(d,w(xa,{eventId:u}),null),d})()})]}})},{npubEncode:M7}=As,Ca=e=>{try{return M7(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Sa=e=>{const{profile:t}=Ui(()=>({pubkey:e.pubkey}));return w(_n,{get fallback(){return Ca(e.pubkey)},get children(){return[w(Me,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),w(Me,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",De(()=>t()?.name)]}})]}})},Mg=e=>{const[t,r]=me(new Date);return Xn(()=>{const s=setInterval(()=>{r(new Date)},e().interval);Tr(()=>clearInterval(s))}),t},B7=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},Uh=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,U7=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleDateString()}},D7=e=>{switch(e.kind){case"today":return Uh(e.value);case"yesterday":return`昨日 ${Uh(e.value)}`;case"abs":default:return e.value.toLocaleString()}},H7=(e,t)=>Math.round(Number(t)-Number(e))/1e3,F7=(e,t)=>{const r=H7(e,t);return r<10?{kind:"now"}:r<60?{kind:"seconds",value:Math.round(r)}:r<3600?{kind:"minutes",value:Math.round(r/60)}:r<86400?{kind:"hours",value:Math.round(r/3600)}:r<604800?{kind:"days",value:Math.round(r/86400)}:{kind:"abs",value:e}},Dh=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),j7=e=>new Date(+e-24*60*60*1e3),Bg=(e,t,r)=>Dh(e,t)?r({kind:"today",value:e}):Dh(e,j7(t))?r({kind:"yesterday",value:e}):r({kind:"abs",value:e}),z7=(e,t=new Date)=>Bg(e,t,U7),N7=(e,t=new Date)=>Bg(e,t,D7),Hh=(e,t=new Date,r=B7)=>r(F7(e,t)),Fh=Mg(()=>({interval:7e3})),jh=Mg(()=>({interval:60*1e3})),Ug=()=>{const{config:e}=Pe();return t=>{switch(e().dateFormat){case"absolute-long":return z7(t,jh());case"absolute-short":return N7(t,jh());case"relative":return Hh(t,Fh());default:return Hh(t,Fh())}}},[W7,di]=me({type:"Closed"}),Rr=()=>({modalState:W7,setModalState:di,showProfile:l=>{di({type:"Profile",pubkey:l})},showProfileEdit:()=>{di({type:"ProfileEdit"})},showAddColumn:()=>{di({type:"AddColumn"})},showAbout:()=>{di({type:"About"})},closeModal:()=>{di({type:"Closed"})}}),q7=P('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div></div></div><div class="pt-1">'),Dg=e=>{const{showProfile:t}=Rr(),r=Ug(),s=De(()=>wn(e.event)),o=()=>s().lastTaggedEventId();return(()=>{const l=q7(),c=l.firstChild,u=c.firstChild,d=u.nextSibling,g=d.firstChild,h=d.nextSibling,v=c.nextSibling;return I(u,w(kg,{})),g.$$click=()=>t(e.event.pubkey),I(g,w(Sa,{get pubkey(){return e.event.pubkey}})),I(h,()=>r(s().createdAtAsDate())),I(v,w(ws,{get eventId(){return o()}})),l})()};ot(["click"]);const K7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),G7=(e={})=>(()=>{const t=K7();return Ze(t,e,!0,!0),t})(),V7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),Hg=(e={})=>(()=>{const t=V7();return Ze(t,e,!0,!0),t})(),Q7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),iu=(e={})=>(()=>{const t=Q7();return Ze(t,e,!0,!0),t})(),Z7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),Fg=(e={})=>(()=>{const t=Z7();return Ze(t,e,!0,!0),t})(),X7=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),su=(e={})=>(()=>{const t=X7();return Ze(t,e,!0,!0),t})(),Y7=P('<div><button class="flex items-center"></button><div class="absolute z-20">'),ou=e=>{let t,r;const[s,o]=me(!1),[l,c]=me({}),u=Hw(()=>e.children),d=()=>o(!1),g=()=>o($=>!$),h=$=>{const k=$.target;k!=null&&!r?.contains(k)&&d()},v=()=>{document.addEventListener("mousedown",h)},b=()=>{document.removeEventListener("mousedown",h)},_=()=>{if(t==null||r==null)return;const $=t?.getBoundingClientRect(),k=r?.getBoundingClientRect();let{top:S,left:L}=$;e.position==="left"?L-=$.width:e.position==="right"?L+=$.width:e.position==="top"?(S-=$.height,L-=$.left+$.width/2):(S+=$.height,L+=$.width/2),S=Math.min(S,window.innerHeight-k.height),L=Math.min(L,window.innerWidth-k.width),c({left:`${L}px`,top:`${S}px`})};return Xn(()=>{s()?(v(),e.onOpen?.()):(b(),e.onClose?.())}),Xn(aa(u,()=>{_()})),Xn(()=>{s()&&_()}),un(()=>{e.ref?.({close:d})}),Tr(()=>b()),(()=>{const $=Y7(),k=$.firstChild,S=k.nextSibling;k.$$click=()=>{g(),_()};const L=t;typeof L=="function"?An(L,k):t=k,I(k,()=>e.button);const U=r;return typeof U=="function"?An(U,S):r=S,I(S,u),Ae(M=>{const R=!s(),E=!!s(),O=l();return R!==M._v$&&S.classList.toggle("hidden",M._v$=R),E!==M._v$2&&S.classList.toggle("block",M._v$2=E),M._v$3=Fw(S,O,M._v$3),M},{_v$:void 0,_v$2:void 0,_v$3:void 0}),$})()};ot(["click"]);const J7=P('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),e9=P('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),t9=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const r=J7(),s=r.firstChild;return s.$$click=t,I(s,()=>e.item.content()),r})()},jg=e=>{let t;const r=()=>t?.close();return w(ou,{ref:s=>{t=s},get button(){return e.children},position:"bottom",get children(){const s=e9();return I(s,w(Dt,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>w(t9,{item:o,onClose:r})})),s}})};ot(["click"]);function zg(e){return e&&e.__esModule?e.default:e}function bn(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Ea,ue,Ng,ps,Wg,zh,Yo={},qg=[],n9=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function $r(e,t){for(var r in t)e[r]=t[r];return e}function Kg(e){var t=e.parentNode;t&&t.removeChild(e)}function wc(e,t,r){var s,o,l,c={};for(l in t)l=="key"?s=t[l]:l=="ref"?o=t[l]:c[l]=t[l];if(arguments.length>2&&(c.children=arguments.length>3?Ea.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)c[l]===void 0&&(c[l]=e.defaultProps[l]);return Fo(e,c,s,o,null)}function Fo(e,t,r,s,o){var l={type:e,props:t,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Ng};return o==null&&ue.vnode!=null&&ue.vnode(l),l}function Gn(){return{current:null}}function Ci(e){return e.children}function Tn(e,t){this.props=e,this.context=t}function Si(e,t){if(t==null)return e.__?Si(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Si(e):null}function Gg(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Gg(e)}}function Nh(e){(!e.__d&&(e.__d=!0)&&ps.push(e)&&!Jo.__r++||zh!==ue.debounceRendering)&&((zh=ue.debounceRendering)||Wg)(Jo)}function Jo(){for(var e;Jo.__r=ps.length;)e=ps.sort(function(t,r){return t.__v.__b-r.__v.__b}),ps=[],e.some(function(t){var r,s,o,l,c,u;t.__d&&(c=(l=(r=t).__v).__e,(u=r.__P)&&(s=[],(o=$r({},l)).__v=l.__v+1,au(u,l,o,r.__n,u.ownerSVGElement!==void 0,l.__h!=null?[c]:null,s,c??Si(l),l.__h),Xg(s,l),l.__e!=c&&Gg(l)))})}function Vg(e,t,r,s,o,l,c,u,d,g){var h,v,b,_,$,k,S,L=s&&s.__k||qg,U=L.length;for(r.__k=[],h=0;h<t.length;h++)if((_=r.__k[h]=(_=t[h])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?Fo(null,_,null,null,_):Array.isArray(_)?Fo(Ci,{children:_},null,null,null):_.__b>0?Fo(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=r,_.__b=r.__b+1,(b=L[h])===null||b&&_.key==b.key&&_.type===b.type)L[h]=void 0;else for(v=0;v<U;v++){if((b=L[v])&&_.key==b.key&&_.type===b.type){L[v]=void 0;break}b=null}au(e,_,b=b||Yo,o,l,c,u,d,g),$=_.__e,(v=_.ref)&&b.ref!=v&&(S||(S=[]),b.ref&&S.push(b.ref,null,_),S.push(v,_.__c||$,_)),$!=null?(k==null&&(k=$),typeof _.type=="function"&&_.__k===b.__k?_.__d=d=Qg(_,d,e):d=Zg(e,_,b,L,$,d),typeof r.type=="function"&&(r.__d=d)):d&&b.__e==d&&d.parentNode!=e&&(d=Si(b))}for(r.__e=k,h=U;h--;)L[h]!=null&&(typeof r.type=="function"&&L[h].__e!=null&&L[h].__e==r.__d&&(r.__d=Si(s,h+1)),Jg(L[h],L[h]));if(S)for(h=0;h<S.length;h++)Yg(S[h],S[++h],S[++h])}function Qg(e,t,r){for(var s,o=e.__k,l=0;o&&l<o.length;l++)(s=o[l])&&(s.__=e,t=typeof s.type=="function"?Qg(s,t,r):Zg(r,s,s,o,s.__e,t));return t}function ea(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){ea(r,t)}):t.push(e)),t}function Zg(e,t,r,s,o,l){var c,u,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(r==null||o!=l||o.parentNode==null)e:if(l==null||l.parentNode!==e)e.appendChild(o),c=null;else{for(u=l,d=0;(u=u.nextSibling)&&d<s.length;d+=2)if(u==o)break e;e.insertBefore(o,l),c=l}return c!==void 0?c:o.nextSibling}function r9(e,t,r,s,o){var l;for(l in r)l==="children"||l==="key"||l in t||ta(e,l,null,r[l],s);for(l in t)o&&typeof t[l]!="function"||l==="children"||l==="key"||l==="value"||l==="checked"||r[l]===t[l]||ta(e,l,t[l],r[l],s)}function Wh(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||n9.test(t)?r:r+"px"}function ta(e,t,r,s,o){var l;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)r&&t in r||Wh(e.style,t,"");if(r)for(t in r)s&&r[t]===s[t]||Wh(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=r,r?s||e.addEventListener(t,l?Kh:qh,l):e.removeEventListener(t,l?Kh:qh,l);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function qh(e){this.l[e.type+!1](ue.event?ue.event(e):e)}function Kh(e){this.l[e.type+!0](ue.event?ue.event(e):e)}function au(e,t,r,s,o,l,c,u,d){var g,h,v,b,_,$,k,S,L,U,M,R=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(d=r.__h,u=t.__e=r.__e,t.__h=null,l=[u]),(g=ue.__b)&&g(t);try{e:if(typeof R=="function"){if(S=t.props,L=(g=R.contextType)&&s[g.__c],U=g?L?L.props.value:g.__:s,r.__c?k=(h=t.__c=r.__c).__=h.__E:("prototype"in R&&R.prototype.render?t.__c=h=new R(S,U):(t.__c=h=new Tn(S,U),h.constructor=R,h.render=s9),L&&L.sub(h),h.props=S,h.state||(h.state={}),h.context=U,h.__n=s,v=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),R.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=$r({},h.__s)),$r(h.__s,R.getDerivedStateFromProps(S,h.__s))),b=h.props,_=h.state,v)R.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(R.getDerivedStateFromProps==null&&S!==b&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(S,U),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(S,h.__s,U)===!1||t.__v===r.__v){h.props=S,h.state=h.__s,t.__v!==r.__v&&(h.__d=!1),h.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(E){E&&(E.__=t)}),h.__h.length&&c.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(S,h.__s,U),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(b,_,$)})}h.context=U,h.props=S,h.state=h.__s,(g=ue.__r)&&g(t),h.__d=!1,h.__v=t,h.__P=e,g=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(s=$r($r({},s),h.getChildContext())),v||h.getSnapshotBeforeUpdate==null||($=h.getSnapshotBeforeUpdate(b,_)),M=g!=null&&g.type===Ci&&g.key==null?g.props.children:g,Vg(e,Array.isArray(M)?M:[M],t,r,s,o,l,c,u,d),h.base=t.__e,t.__h=null,h.__h.length&&c.push(h),k&&(h.__E=h.__=null),h.__e=!1}else l==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=i9(r.__e,t,r,s,o,l,c,d);(g=ue.diffed)&&g(t)}catch(E){t.__v=null,(d||l!=null)&&(t.__e=u,t.__h=!!d,l[l.indexOf(u)]=null),ue.__e(E,t,r)}}function Xg(e,t){ue.__c&&ue.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(s){s.call(r)})}catch(s){ue.__e(s,r.__v)}})}function i9(e,t,r,s,o,l,c,u){var d,g,h,v=r.props,b=t.props,_=t.type,$=0;if(_==="svg"&&(o=!0),l!=null){for(;$<l.length;$++)if((d=l[$])&&"setAttribute"in d==!!_&&(_?d.localName===_:d.nodeType===3)){e=d,l[$]=null;break}}if(e==null){if(_===null)return document.createTextNode(b);e=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,b.is&&b),l=null,u=!1}if(_===null)v===b||u&&e.data===b||(e.data=b);else{if(l=l&&Ea.call(e.childNodes),g=(v=r.props||Yo).dangerouslySetInnerHTML,h=b.dangerouslySetInnerHTML,!u){if(l!=null)for(v={},$=0;$<e.attributes.length;$++)v[e.attributes[$].name]=e.attributes[$].value;(h||g)&&(h&&(g&&h.__html==g.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(r9(e,b,v,o,u),h)t.__k=[];else if($=t.props.children,Vg(e,Array.isArray($)?$:[$],t,r,s,o&&_!=="foreignObject",l,c,l?l[0]:r.__k&&Si(r,0),u),l!=null)for($=l.length;$--;)l[$]!=null&&Kg(l[$]);u||("value"in b&&($=b.value)!==void 0&&($!==v.value||$!==e.value||_==="progress"&&!$)&&ta(e,"value",$,v.value,!1),"checked"in b&&($=b.checked)!==void 0&&$!==e.checked&&ta(e,"checked",$,v.checked,!1))}return e}function Yg(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(s){ue.__e(s,r)}}function Jg(e,t,r){var s,o;if(ue.unmount&&ue.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||Yg(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(l){ue.__e(l,t)}s.base=s.__P=null}if(s=e.__k)for(o=0;o<s.length;o++)s[o]&&Jg(s[o],t,typeof e.type!="function");r||e.__e==null||Kg(e.__e),e.__e=e.__d=void 0}function s9(e,t,r){return this.constructor(e,r)}function ep(e,t,r){var s,o,l;ue.__&&ue.__(e,t),o=(s=typeof r=="function")?null:r&&r.__k||t.__k,l=[],au(t,e=(!s&&r||t).__k=wc(Ci,null,[e]),o||Yo,Yo,t.ownerSVGElement!==void 0,!s&&r?[r]:o?null:t.firstChild?Ea.call(t.childNodes):null,l,!s&&r?r:o?o.__e:t.firstChild,s),Xg(l,e)}Ea=qg.slice,ue={__e:function(e,t){for(var r,s,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(e)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),o=r.__d),o)return r.__E=r}catch(l){e=l}throw e}},Ng=0,Tn.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$r({},this.state),typeof e=="function"&&(e=e($r({},r),this.props)),e&&$r(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),Nh(this))},Tn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Nh(this))},Tn.prototype.render=Ci,ps=[],Wg=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Jo.__r=0;var o9=0;function z(e,t,r,s,o){var l,c,u={};for(c in t)c=="ref"?l=t[c]:u[c]=t[c];var d={type:e,props:u,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o9,__source:s,__self:o};if(typeof e=="function"&&(l=e.defaultProps))for(c in l)u[c]===void 0&&(u[c]=l[c]);return ue.vnode&&ue.vnode(d),d}function a9(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function l9(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Sr={set:a9,get:l9};const ec=new Map,c9=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function u9(){for(const{v:e,emoji:t}of c9)if(tp(t))return e}function f9(){return!tp("🇨🇦")}function tp(e){if(ec.has(e))return ec.get(e);const t=d9(e);return ec.set(e,t),t}const d9=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,r=20,s=Math.floor(t/2);return e.font=s+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=r*2,e.canvas.height=t,o=>{e.clearRect(0,0,r*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,r,22);const l=e.getImageData(0,0,r,t).data,c=l.length;let u=0;for(;u<c&&!l[u+3];u+=4);if(u>=c)return!1;const d=r+u/4%r,g=Math.floor(u/4/r),h=e.getImageData(d,g,1,1).data;return!(l[u]!==h[0]||l[u+2]!==h[2]||e.measureText(o).width>=r)}})();var Gh={latestVersion:u9,noCountryFlags:f9};const $c=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let bt=null;function h9(e){bt||(bt=Sr.get("frequently")||{});const t=e.id||e;t&&(bt[t]||(bt[t]=0),bt[t]+=1,Sr.set("last",t),Sr.set("frequently",bt))}function g9({maxFrequentRows:e,perLine:t}){if(!e)return[];bt||(bt=Sr.get("frequently"));let r=[];if(!bt){bt={};for(let l in $c.slice(0,t)){const c=$c[l];bt[c]=t-l,r.push(c)}return r}const s=e*t,o=Sr.get("last");for(let l in bt)r.push(l);if(r.sort((l,c)=>{const u=bt[c],d=bt[l];return u==d?l.localeCompare(c):u-d}),r.length>s){const l=r.slice(s);r=r.slice(0,s);for(let c of l)c!=o&&delete bt[c];o&&r.indexOf(o)==-1&&(delete bt[r[r.length-1]],r.splice(-1,1,o)),Sr.set("frequently",bt)}return r}var np={add:h9,get:g9,DEFAULTS:$c},rp={};rp=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var Zn={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let $t=null,ke=null;const tc={};async function Vh(e){if(tc[e])return tc[e];const r=await(await fetch(e)).json();return tc[e]=r,r}let nc=null,ip=null,sp=!1;function Ta(e,{caller:t}={}){return nc||(nc=new Promise(r=>{ip=r})),e?p9(e):t&&!sp&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),nc}async function p9(e){sp=!0;let{emojiVersion:t,set:r,locale:s}=e;if(t||(t=Zn.emojiVersion.value),r||(r=Zn.set.value),s||(s=Zn.locale.value),ke)ke.categories=ke.categories.filter(d=>!d.name);else{ke=(typeof e.data=="function"?await e.data():e.data)||await Vh(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${r}.json`),ke.emoticons={},ke.natives={},ke.categories.unshift({id:"frequent",emojis:[]});for(const d in ke.aliases){const g=ke.aliases[d],h=ke.emojis[g];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}ke.originalCategories=ke.categories}if($t=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(s=="en"?zg(rp):await Vh(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${s}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const g=e.custom[d],h=e.custom[d-1];if(!(!g.emojis||!g.emojis.length)){g.id||(g.id=`custom_${d+1}`),g.name||(g.name=$t.categories.custom),h&&!g.icon&&(g.target=h.target||h),ke.categories.push(g);for(const v of g.emojis)ke.emojis[v.id]=v}}e.categories&&(ke.categories=ke.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,g)=>{const h=e.categories.indexOf(d.id),v=e.categories.indexOf(g.id);return h-v}));let o=null,l=null;r=="native"&&(o=Gh.latestVersion(),l=e.noCountryFlags||Gh.noCountryFlags());let c=ke.categories.length,u=!1;for(;c--;){const d=ke.categories[c];if(d.id=="frequent"){let{maxFrequentRows:v,perLine:b}=e;v=v>=0?v:Zn.maxFrequentRows.value,b||(b=Zn.perLine.value),d.emojis=np.get({maxFrequentRows:v,perLine:b})}if(!d.emojis||!d.emojis.length){ke.categories.splice(c,1);continue}const{categoryIcons:g}=e;if(g){const v=g[d.id];v&&!d.icon&&(d.icon=v)}let h=d.emojis.length;for(;h--;){const v=d.emojis[h],b=v.id?v:ke.emojis[v],_=()=>{d.emojis.splice(h,1)};if(!b||e.exceptEmojis&&e.exceptEmojis.includes(b.id)){_();continue}if(o&&b.version>o){_();continue}if(l&&d.id=="flags"&&!_9.includes(b.id)){_();continue}if(!b.search){if(u=!0,b.search=","+[[b.id,!1],[b.name,!0],[b.keywords,!1],[b.emoticons,!1]].map(([k,S])=>{if(k)return(Array.isArray(k)?k:[k]).map(L=>(S?L.split(/[-|_|\s]+/):[L]).map(U=>U.toLowerCase())).flat()}).flat().filter(k=>k&&k.trim()).join(","),b.emoticons)for(const k of b.emoticons)ke.emoticons[k]||(ke.emoticons[k]=b.id);let $=0;for(const k of b.skins){if(!k)continue;$++;const{native:S}=k;S&&(ke.natives[S]=b.id,b.search+=`,${S}`);const L=$==1?"":`:skin-tone-${$}:`;k.shortcodes=`:${b.id}:${L}`}}}}u&&vi.reset(),ip()}function op(e,t,r){e||(e={});const s={};for(let o in t)s[o]=ap(o,e,t,r);return s}function ap(e,t,r,s){const o=r[e];let l=s&&s.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(l!=null&&o.value&&typeof o.value!=typeof l&&(typeof o.value=="boolean"?l=l!="false":l=o.value.constructor(l)),o.transform&&l&&(l=o.transform(l)),(l==null||o.choices&&o.choices.indexOf(l)==-1)&&(l=o.value)),l}const v9=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let xc=null;function m9(e){return e.id?e:ke.emojis[e]||ke.emojis[ke.aliases[e]]||ke.emojis[ke.natives[e]]}function b9(){xc=null}async function y9(e,{maxResults:t,caller:r}={}){if(!e||!e.trim().length)return null;t||(t=90),await Ta(null,{caller:r||"SearchIndex.search"});const s=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,g)=>u.trim()&&g.indexOf(u)==d);if(!s.length)return;let o=xc||(xc=Object.values(ke.emojis)),l,c;for(const u of s){if(!o.length)break;l=[],c={};for(const d of o){if(!d.search)continue;const g=d.search.indexOf(`,${u}`);g!=-1&&(l.push(d),c[d.id]||(c[d.id]=0),c[d.id]+=d.id==u?0:g+1)}o=l}return l.length<2||(l.sort((u,d)=>{const g=c[u.id],h=c[d.id];return g==h?u.id.localeCompare(d.id):g-h}),l.length>t&&(l=l.slice(0,t))),l}var vi={search:y9,get:m9,reset:b9,SHORTCODES_REGEX:v9};const _9=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function w9(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((r,s)=>r==t[s])}async function $9(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function x9(e,{skinIndex:t=0}={}){const r=e.skins[t]||(()=>(t=0,e.skins[t]))(),s={id:e.id,name:e.name,native:r.native,unified:r.unified,keywords:e.keywords,shortcodes:r.shortcodes||e.shortcodes};return e.skins.length>1&&(s.skin=t+1),r.src&&(s.src=r.src),e.aliases&&e.aliases.length&&(s.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(s.emoticons=e.emoticons),s}const k9={activity:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},C9={loupe:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var na={categories:k9,search:C9};function kc(e){let{id:t,skin:r,emoji:s}=e;if(e.shortcodes){const u=e.shortcodes.match(vi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(r=u[2]))}if(s||(s=vi.get(t||e.native)),!s)return e.fallback;const o=s.skins[r-1]||s.skins[0],l=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),c=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:l?z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:l}):e.set=="native"?z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${c})`,backgroundSize:`${100*ke.sheet.cols}% ${100*ke.sheet.rows}%`,backgroundPosition:`${100/(ke.sheet.cols-1)*o.x}% ${100/(ke.sheet.rows-1)*o.y}%`}})})}const S9=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class lp extends S9{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let r in t)this.attributeChangedCallback(r,null,t[r])}attributeChangedCallback(t,r,s){if(!this.component)return;const o=ap(t,{[t]:s},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let r=null;const s=t.parent||(r=t.ref&&t.ref.current);r&&(r.innerHTML=""),s&&s.appendChild(this)}}}class E9 extends lp{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const r=document.createElement("style");r.textContent=t,this.shadowRoot.insertBefore(r,this.shadowRoot.firstChild)}constructor(t,{styles:r}={}){super(t),this.setShadow(),this.injectStyles(r)}}var cp={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:Zn.set,skin:Zn.skin};class up extends lp{async connectedCallback(){const t=op(this.props,cp,this);t.element=this,t.ref=r=>{this.component=r},await Ta(),!this.disconnected&&ep(z(kc,{...t}),this)}constructor(t){super(t)}}bn(up,"Props",cp);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",up);var Qh,Cc=[],Zh=ue.__b,Xh=ue.__r,Yh=ue.diffed,Jh=ue.__c,e0=ue.unmount;function T9(){var e;for(Cc.sort(function(t,r){return t.__v.__b-r.__v.__b});e=Cc.pop();)if(e.__P)try{e.__H.__h.forEach(jo),e.__H.__h.forEach(Sc),e.__H.__h=[]}catch(t){e.__H.__h=[],ue.__e(t,e.__v)}}ue.__b=function(e){Zh&&Zh(e)},ue.__r=function(e){Xh&&Xh(e);var t=e.__c.__H;t&&(t.__h.forEach(jo),t.__h.forEach(Sc),t.__h=[])},ue.diffed=function(e){Yh&&Yh(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Cc.push(t)!==1&&Qh===ue.requestAnimationFrame||((Qh=ue.requestAnimationFrame)||function(r){var s,o=function(){clearTimeout(l),t0&&cancelAnimationFrame(s),setTimeout(r)},l=setTimeout(o,100);t0&&(s=requestAnimationFrame(o))})(T9))},ue.__c=function(e,t){t.some(function(r){try{r.__h.forEach(jo),r.__h=r.__h.filter(function(s){return!s.__||Sc(s)})}catch(s){t.some(function(o){o.__h&&(o.__h=[])}),t=[],ue.__e(s,r.__v)}}),Jh&&Jh(e,t)},ue.unmount=function(e){e0&&e0(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(s){try{jo(s)}catch(o){t=o}}),t&&ue.__e(t,r.__v))};var t0=typeof requestAnimationFrame=="function";function jo(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Sc(e){e.__c=e.__()}function A9(e,t){for(var r in t)e[r]=t[r];return e}function n0(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var s in t)if(s!=="__source"&&e[s]!==t[s])return!0;return!1}function ra(e){this.props=e}(ra.prototype=new Tn).isPureReactComponent=!0,ra.prototype.shouldComponentUpdate=function(e,t){return n0(this.props,e)||n0(this.state,t)};var r0=ue.__b;ue.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),r0&&r0(e)};var I9=ue.__e;ue.__e=function(e,t,r){if(e.then){for(var s,o=t;o=o.__;)if((s=o.__c)&&s.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),s.__c(e,t)}I9(e,t,r)};var i0=ue.unmount;function rc(){this.__u=0,this.t=null,this.__b=null}function fp(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Po(){this.u=null,this.o=null}ue.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),i0&&i0(e)},(rc.prototype=new Tn).__c=function(e,t){var r=t.__c,s=this;s.t==null&&(s.t=[]),s.t.push(r);var o=fp(s.__v),l=!1,c=function(){l||(l=!0,r.__R=null,o?o(u):u())};r.__R=c;var u=function(){if(!--s.__u){if(s.state.__e){var g=s.state.__e;s.__v.__k[0]=function v(b,_,$){return b&&(b.__v=null,b.__k=b.__k&&b.__k.map(function(k){return v(k,_,$)}),b.__c&&b.__c.__P===_&&(b.__e&&$.insertBefore(b.__e,b.__d),b.__c.__e=!0,b.__c.__P=$)),b}(g,g.__c.__P,g.__c.__O)}var h;for(s.setState({__e:s.__b=null});h=s.t.pop();)h.forceUpdate()}},d=t.__h===!0;s.__u++||d||s.setState({__e:s.__b=s.__v.__k[0]}),e.then(c,c)},rc.prototype.componentWillUnmount=function(){this.t=[]},rc.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),s=this.__v.__k[0].__c;this.__v.__k[0]=function l(c,u,d){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(g){typeof g.__c=="function"&&g.__c()}),c.__c.__H=null),(c=A9({},c)).__c!=null&&(c.__c.__P===d&&(c.__c.__P=u),c.__c=null),c.__k=c.__k&&c.__k.map(function(g){return l(g,u,d)})),c}(this.__b,r,s.__O=s.__P)}this.__b=null}var o=t.__e&&wc(Ci,null,e.fallback);return o&&(o.__h=null),[wc(Ci,null,t.__e?null:e.children),o]};var s0=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(Po.prototype=new Tn).__e=function(e){var t=this,r=fp(t.__v),s=t.o.get(e);return s[0]++,function(o){var l=function(){t.props.revealOrder?(s.push(o),s0(t,e,s)):o()};r?r(l):l()}},Po.prototype.render=function(e){this.u=null,this.o=new Map;var t=ea(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},Po.prototype.componentDidUpdate=Po.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){s0(e,r,t)})};var R9=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,L9=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,O9=typeof document<"u",P9=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Tn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Tn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var o0=ue.event;function M9(){}function B9(){return this.cancelBubble}function U9(){return this.defaultPrevented}ue.event=function(e){return o0&&(e=o0(e)),e.persist=M9,e.isPropagationStopped=B9,e.isDefaultPrevented=U9,e.nativeEvent=e};var a0={configurable:!0,get:function(){return this.class}},l0=ue.vnode;ue.vnode=function(e){var t=e.type,r=e.props,s=r;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var l in s={},r){var c=r[l];O9&&l==="children"&&t==="noscript"||l==="value"&&"defaultValue"in r&&c==null||(l==="defaultValue"&&"value"in r&&r.value==null?l="value":l==="download"&&c===!0?c="":/ondoubleclick/i.test(l)?l="ondblclick":/^onchange(textarea|input)/i.test(l+t)&&!P9(r.type)?l="oninput":/^onfocus$/i.test(l)?l="onfocusin":/^onblur$/i.test(l)?l="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(l)?l=l.toLowerCase():o&&L9.test(l)?l=l.replace(/[A-Z0-9]/,"-$&").toLowerCase():c===null&&(c=void 0),s[l]=c)}t=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=ea(r.children).forEach(function(u){u.props.selected=s.value.indexOf(u.props.value)!=-1})),t=="select"&&s.defaultValue!=null&&(s.value=ea(r.children).forEach(function(u){u.props.selected=s.multiple?s.defaultValue.indexOf(u.props.value)!=-1:s.defaultValue==u.props.value})),e.props=s,r.class!=r.className&&(a0.enumerable="className"in r,r.className!=null&&(s.class=r.className),Object.defineProperty(s,"className",a0))}e.$$typeof=R9,l0&&l0(e)};var c0=ue.__r;ue.__r=function(e){c0&&c0(e),e.__c};const D9={light:"outline",dark:"solid"};class H9 extends ra{renderIcon(t){const{icon:r}=t;if(r){if(r.svg)return z("span",{class:"flex",dangerouslySetInnerHTML:{__html:r.svg}});if(r.src)return z("img",{src:r.src})}const s=na.categories[t.id]||na.categories.custom,o=this.props.icons=="auto"?D9[this.props.theme]:this.props.icons;return s[o]||s}render(){let t=null;return z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:z("div",{class:"flex relative",children:[this.categories.map((r,s)=>{const o=r.name||$t.categories[r.id],l=!this.props.unfocused&&r.id==this.state.categoryId;return l&&(t=s),z("button",{"aria-label":o,"aria-selected":l||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:c=>c.preventDefault(),onClick:()=>{this.props.onClick({category:r,i:s})},children:this.renderIcon(r)})}),z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=ke.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class F9 extends ra{shouldComponentUpdate(t){for(let r in t)if(r!="children"&&t[r]!=this.props[r])return!0;return!1}render(){return this.props.children}}const Mo={rowsPerRender:10};class j9 extends Tn{getInitialState(t=this.props){return{skin:Sr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=$t.rtl?"rtl":"ltr",this.refs={menu:Gn(),navigation:Gn(),scroll:Gn(),search:Gn(),searchInput:Gn(),skinToneButton:Gn(),skinToneRadio:Gn()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const r in t)this.nextState[r]=t[r];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let r=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(r=!0);delete this.nextState;const s=this.getInitialState();if(r)return this.reset(s);this.setState(s)})}componentWillUnmount(){this.unregister()}async reset(t={}){await Ta(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const r of this.observers)t.includes(r)||r.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=ke;this.refs.categories=new Map;const r=ke.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=r&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=r,this.grid=[],this.grid.setsize=0;const s=(o,l)=>{const c=[];c.__categoryId=l.id,c.__index=o.length,this.grid.push(c);const u=this.grid.length-1,d=u%Mo.rowsPerRender?{}:Gn();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),c};for(let o of t){const l=[];let c=s(l,o);for(let u of o.emojis)c.length==this.getPerLine()&&(c=s(l,o)),this.grid.setsize+=1,c.push(u);this.refs.categories.set(o.id,{root:Gn(),rows:l})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:r,emojiButtonSize:s}=t,o=()=>{const{width:c}=r.getBoundingClientRect();return Math.floor(c/s)},l=new ResizeObserver(()=>{this.unobserve({except:l}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return l.observe(r),this.observers.push(l),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,r]){const s=this.state.searchResults||this.grid,o=s[t]&&s[t][r];if(o)return vi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const r=new Map,s=c=>{c!=t.state.categoryId&&t.setState({categoryId:c})},o={root:this.refs.scroll.current,threshold:[0,1]},l=new IntersectionObserver(c=>{for(const d of c){const g=d.target.dataset.id;r.set(g,d.intersectionRatio)}const u=[...r];for(const[d,g]of u)if(g){s(d);break}},o);for(const{root:c}of this.refs.categories.values())l.observe(c.current);this.observers.push(l)}observeRows(){const t={...this.state.visibleRows},r=new IntersectionObserver(s=>{for(const o of s){const l=parseInt(o.target.dataset.index);o.isIntersecting?t[l]=!0:delete t[l]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Mo.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Mo.rowsPerRender}px`});for(const{rows:s}of this.refs.categories.values())for(const o of s)o.current&&r.observe(o.current);this.observers.push(r)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:r,left:s,right:o,up:l,down:c}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,g]=this.state.pos;const h=(()=>{if(d==0&&g==0&&!t.repeat&&(s||l))return null;if(d==-1)return!t.repeat&&(o||c)&&r.selectionStart==r.value.length?[0,0]:null;if(s||o){let v=u[d];const b=s?-1:1;if(g+=b,!v[g]){if(d+=b,v=u[d],!v)return d=s?0:u.length-1,g=s?0:u[d].length-1,[d,g];g=s?v.length-1:0}return[d,g]}if(l||c){d+=l?-1:1;const v=u[d];return v?(v[g]||(g=v.length-1),[d,g]):(d=l?0:u.length-1,g=l?0:u[d].length-1,[d,g])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:r}){const s=this.state.searchResults||this.grid;if(!s.length)return;const o=this.refs.scroll.current,l=o.getBoundingClientRect();let c=0;if(r>=0&&(t=s[r].__categoryId),t&&(c=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(l.top-o.scrollTop)+1),r>=0)if(!r)c=0;else{const u=s[r].__index,d=c+u*this.props.emojiButtonSize,g=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)c=d;else if(g>o.scrollTop+l.height)c=g-l.height;else return}this.ignoreMouse(),o.scrollTop=c}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:r,pos:s}){if(this.props.onEmojiSelect&&(!r&&s&&(r=this.getEmojiByPos(s)),r)){const o=x9(r,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&np.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Sr.set("skin",t)}renderNav(){return z(H9,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),r=this.state.searchResults&&!this.state.searchResults.length;return z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[z("div",{class:"flex flex-middle flex-grow",children:[z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:z(kc,{emoji:t,id:r?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),z("div",{class:`margin-${this.dir[0]}`,children:t||r?z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[z("div",{class:"preview-title ellipsis",children:t?t.name:$t.search_no_results_1}),z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:$t.search_no_results_2})]}):z("div",{class:"preview-placeholder color-c",children:$t.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:r,posinset:s,grid:o}){const l=this.props.emojiButtonSize,c=this.state.tempSkin||this.state.skin,d=(t.skins[c-1]||t.skins[0]).native,g=w9(this.state.pos,r),h=r.concat(t.id).join("");return z(F9,{selected:g,skin:c,size:l,children:z("button",{"aria-label":d,"aria-selected":g||void 0,"aria-posinset":s,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:v=>this.handleEmojiClick({e:v,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(r),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(s-1)%this.props.emojiButtonColors.length]:void 0}}),z(kc,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:c,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return z("div",{children:[z("div",{class:"spacer"}),z("div",{class:"flex flex-middle",children:[z("div",{class:"search relative flex-grow",children:[z("input",{type:"search",ref:this.refs.searchInput,placeholder:$t.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),z("span",{class:"icon loupe flex",children:na.search.loupe}),this.state.searchResults&&z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:na.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?z("div",{class:"category",ref:this.refs.search,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:$t.categories.search}),z("div",{children:t.length?t.map((r,s)=>z("div",{class:"flex",children:r.map((o,l)=>this.renderEmojiButton(o,{pos:[s,l],posinset:s*this.props.perLine+l+1,grid:t}))})):z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&z("a",{onClick:this.props.onAddCustomEmoji,children:$t.add_custom})})})]}):null}renderCategories(){const{categories:t}=ke,r=!!this.state.searchResults,s=this.getPerLine();return z("div",{style:{visibility:r?"hidden":void 0,display:r?"none":void 0,height:"100%"},children:t.map(o=>{const{root:l,rows:c}=this.refs.categories.get(o.id);return z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:l,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||$t.categories[o.id]}),z("div",{class:"relative",style:{height:c.length*this.props.emojiButtonSize},children:c.map((u,d)=>{const g=u.index-u.index%Mo.rowsPerRender,h=this.state.visibleRows[g],v="current"in u?u:void 0;if(!h&&!v)return null;const b=d*s,_=b+s,$=o.emojis.slice(b,_);return $.length<s&&$.push(...new Array(s-$.length)),z("div",{"data-index":u.index,ref:v,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&$.map((k,S)=>{if(!k)return z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const L=vi.get(k);return this.renderEmojiButton(L,{pos:[u.index,S],posinset:u.posinset+S,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":$t.skins.choose,title:$t.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),r=t?t.name:"";return z("div",{"aria-live":"polite",class:"sr-only",children:r})}renderSkins(){const r=this.refs.skinToneButton.current.getBoundingClientRect(),s=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=s.right-r.right-3:o.left=r.left-s.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=s.bottom-r.top+6:(o.top=r.bottom-s.top+3,o.bottom="auto"),z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":$t.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(l=>{const c=l+1,u=this.state.skin==c;return z("div",{children:[z("input",{type:"radio",name:"skin-tone",value:c,"aria-label":$t.skins[c],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(c),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(c))}}),z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(c),onMouseEnter:()=>this.handleSkinMouseOver(c),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[z("span",{class:`skin-tone skin-tone-${c}`}),z("span",{class:"margin-small-lr",children:$t.skins[c]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&z("div",{class:"padding-lr",children:this.renderSearch()}),z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),bn(this,"handleClickOutside",r=>{const{element:s}=this.props;r.target!=s&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(r))}),bn(this,"handleBaseClick",r=>{this.state.showSkins&&(r.target.closest(".menu")||(r.preventDefault(),r.stopImmediatePropagation(),this.closeSkins()))}),bn(this,"handleBaseKeydown",r=>{this.state.showSkins&&r.key=="Escape"&&(r.preventDefault(),r.stopImmediatePropagation(),this.closeSkins())}),bn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),bn(this,"handleSearchInput",async()=>{const r=this.refs.searchInput.current;if(!r)return;const{value:s}=r,o=await vi.search(s),l=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},l);const c=r.selectionStart==r.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let g of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(g);this.ignoreMouse(),this.setState({searchResults:u,pos:c},l)}),bn(this,"handleSearchKeyDown",r=>{const s=r.currentTarget;switch(r.stopImmediatePropagation(),r.key){case"ArrowLeft":this.navigate({e:r,input:s,left:!0});break;case"ArrowRight":this.navigate({e:r,input:s,right:!0});break;case"ArrowUp":this.navigate({e:r,input:s,up:!0});break;case"ArrowDown":this.navigate({e:r,input:s,down:!0});break;case"Enter":r.preventDefault(),this.handleEmojiClick({e:r,pos:this.state.pos});break;case"Escape":r.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),bn(this,"clearSearch",()=>{const r=this.refs.searchInput.current;r&&(r.value="",r.focus(),this.handleSearchInput())}),bn(this,"handleCategoryClick",({category:r,i:s})=>{this.scrollTo(s==0?{row:-1}:{categoryId:r.id})}),bn(this,"openSkins",r=>{const{currentTarget:s}=r,o=s.getBoundingClientRect();this.setState({showSkins:o},async()=>{await $9(2);const l=this.refs.menu.current;l&&(l.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class lu extends E9{async connectedCallback(){const t=op(this.props,Zn,this);t.element=this,t.ref=r=>{this.component=r},await Ta(t),!this.disconnected&&ep(z(j9,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:zg(dp)})}}bn(lu,"Props",Zn);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",lu);var dp={};dp=`:host {
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

`;const z9=e=>{let t;const[r,s]=me(void 0);return w(ou,{ref:c=>{t=c},position:"bottom",get button(){return e.children},onOpen:()=>{const c=new lu({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native),t?.close()}});s(c)},onClose:()=>{s(void 0)},get children(){return r()}})},N9=P("<div>"),W9=P('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),q9=P("<br>"),K9=P("<span>理由: "),G9=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),V9=e=>{const[t,r]=me(!1);return w(ae,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const s=G9();return s.firstChild,s.$$click=()=>r(!0),I(s,w(ae,{get when(){return e.contentWarning.reason!=null},get children(){return[q9(),(()=>{const o=K9();return o.firstChild,I(o,()=>e.contentWarning.reason,null),o})()]}}),null),s})()},get children(){return[(()=>{const s=N9();return I(s,()=>e.children),s})(),w(ae,{get when(){return e.contentWarning.contentWarning},get children(){const s=W9();return s.$$click=()=>r(!1),s}})]}})};ot(["click"]);const hp=e=>{const{profile:t}=Ui(()=>({pubkey:e.pubkey}));return w(ae,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Ca(e.pubkey)}`},get children(){return["@",De(()=>t()?.name??e.pubkey)]}})},Q9=P('<a target="_blank" rel="noreferrer noopener">'),cu=e=>{const t=()=>{try{const r=new URL(e.href.toString());return r.protocol==="https:"||r.protocol==="http:"}catch{return!1}};return w(ae,{get when(){return t()},get fallback(){return e.href},get children(){const r=Q9();return I(r,()=>e.children??e.href),Ae(s=>{const o=e.class,l=e.href;return o!==s._v$&&jw(r,s._v$=o),l!==s._v$2&&At(r,"href",s._v$2=l),s},{_v$:void 0,_v$2:void 0}),r}})},Z9=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp)$/i.test(t.pathname)}catch{return!1}},X9=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const r=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(r!=null){const s=new URL(t),o=r[1];return s.host="i.imgur.com",s.pathname=`${o}l.webp`,s.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const r=new URL(t);return r.host="thumb.gyazo.com",r.pathname=`/thumb/640_w${t.pathname}`,r.toString()}return t.toString()}catch{return e}},Y9=P('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),J9=P('<canvas class="inline-block max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),ek=P('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),tk=e=>{let t,r;const[s,o]=me(e.initialHidden),[l,c]=me(!0),u=()=>{c(!0)};return w(ae,{get when(){return!s()},get fallback(){return(()=>{const d=ek();return d.$$click=()=>o(!1),d})()},get children(){return w(cu,{class:"my-2 block",get href(){return e.url},get children(){return[(()=>{const d=Y9(),g=t;return typeof g=="function"?An(g,d):t=d,Ae(h=>{const v=!!l(),b=!l(),_=l()?X9(e.url):void 0,$=e.url;return v!==h._v$&&d.classList.toggle("inline-block",h._v$=v),b!==h._v$2&&d.classList.toggle("hidden",h._v$2=b),_!==h._v$3&&At(d,"src",h._v$3=_),$!==h._v$4&&At(d,"alt",h._v$4=$),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})(),(()=>{const d=J9();d.$$click=h=>{h.preventDefault(),u()};const g=r;return typeof g=="function"?An(g,d):r=d,Ae(h=>{const v=!!l(),b=!!l(),_=!l(),$=!l();return v!==h._v$5&&d.classList.toggle("w-0",h._v$5=v),b!==h._v$6&&d.classList.toggle("h-0",h._v$6=b),_!==h._v$7&&d.classList.toggle("w-auto",h._v$7=_),$!==h._v$8&&d.classList.toggle("h-auto",h._v$8=$),h},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),d})()]}})}})};ot(["click"]);const nk=P('<div class="my-1 rounded border p-1">'),rk=e=>w(ae,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return w(xa,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=nk();return I(t,w(ws,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1})),t}}),ik=P('<button class="inline text-blue-500 underline">'),ic=e=>{const{showProfile:t}=Rr(),r=()=>{t(e.pubkey)};return(()=>{const s=ik();return s.$$click=r,I(s,w(hp,{get pubkey(){return e.pubkey}})),s})()};ot(["click"]);const sk=P("<span>"),ok=e=>(()=>{const t=sk();return I(t,()=>e.plainText.content),t})(),[uu,ak]=me({}),gp=e=>{uu()[e]==null&&ak(t=>({...t,[e]:new MessageChannel}))},lk=e=>{const t=()=>uu()[e().id],r=(o,l)=>{const c={requestId:o,request:l};t().port1.postMessage(c)},s=(o,l=1e3)=>new Promise((c,u)=>{let d;const g=h=>{const v=h.data;v.requestId===o&&(t().port1.removeEventListener("message",g),v.ok?c(v.response):u(v.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",g),u(new Error(`TimeoutError: ${o}`))},l),t().port1.addEventListener("message",g,!1),t().port1.start()});return un(()=>{const{id:o}=e();gp(o)}),async o=>{const l=Math.random().toString(),c=s(l);return r(l,o),c}},ck=e=>{const t=De(e),r=()=>uu()[t().id];un(()=>{const{id:s}=t();gp(s);const o=r().port2,l=c=>{const{requestId:u,request:d}=c.data,g=t().handler(d);(g instanceof Promise?g:Promise.resolve(g)).then(v=>{const b={requestId:u,ok:!0,response:v};o.postMessage(b)}).catch(v=>{const b={requestId:u,ok:!1,error:v};o.postMessage(b)})};o.addEventListener("message",l),o.start(),Tr(()=>{o.removeEventListener("message",l)})})},Rs=()=>lk(()=>({id:"CommandChannel"})),Ec=e=>{ck(()=>({id:"CommandChannel",handler:t=>{const{commandType:r,handler:s}=e();t.command===r&&s(t)}}))},{decode:uk}=As,fk=/(?:#\[(?<idx>\d+)\])/g,dk=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,hk=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent)1[ac-hj-np-z02-9]+))/gi,gk=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,pp=e=>{const t=[...e.matchAll(fk),...e.matchAll(dk),...e.matchAll(hk),...e.matchAll(gk)].sort((l,c)=>l.index-c.index);let r=0;const s=[],o=l=>{if(l!=null&&l>r){const c=e.slice(r,l),u=s[s.length-1];if(u?.type==="PlainText")u.content+=c;else{const d={type:"PlainText",content:c};s.push(d)}r=l}};return t.forEach(l=>{const{index:c}=l;if(!(c<r)){if(l.groups?.url){o(c);const u={type:"URL",content:l.groups?.url};s.push(u)}else if(l.groups?.idx){const u=parseInt(l.groups.idx,10);o(c),s.push({type:"TagReference",tagIndex:u,content:l[0]})}else if(l.groups?.mention){o(c);try{const u=uk(l.groups.bech32),d={type:"Bech32Entity",content:l[0],data:u,isNIP19:l.groups.nip19==="nostr:"};s.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${l[0]}`),o(c+l[0].length)}}else if(l.groups?.hashtag){o(c);const u=l.groups?.hashtag,d={type:"HashTag",content:l[0],tagName:u};s.push(d)}r=c+l[0].length}}),r<e.length&&o(e.length),s},pk=({tagIndex:e,content:t},r)=>{const s=r.tags[e];if(s==null)return null;const o=s[0];if(o==="p"&&gs(s[1]))return{type:"MentionedUser",tagIndex:e,content:t,pubkey:s[1]};if(o==="e"&&gs(s[1])){const l=wn(r).markedEventTags().find(c=>c.index===e);return{type:"MentionedEvent",tagIndex:e,content:t,eventId:s[1],marker:l?.marker}}return null},u0=P('<div class="my-1 rounded border p-1">'),vk=P('<span class="text-blue-500 underline">'),mk=P('<button class="text-blue-500 underline">'),bk=e=>{const{config:t,saveColumn:r}=Pe(),s=Rs(),o=()=>wn(e.event),l=c=>{r(ru({query:c})),s({command:"moveToLastColumn"}).catch(u=>console.error(u))};return w(Dt,{get each(){return pp(e.event.content)},children:c=>{if(c.type==="PlainText")return w(ok,{plainText:c});if(c.type==="TagReference"){const u=pk(c,e.event);if(u==null)return null;if(u.type==="MentionedUser")return w(ic,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?w(rk,{mentionedEvent:u}):w(xa,{get eventId(){return u.eventId}})}return c.type==="Bech32Entity"?c.data.type==="note"&&e.embedding?(()=>{const u=u0();return I(u,w(ws,{get eventId(){return c.data.data},actions:!1,embedding:!1})),u})():c.data.type==="nevent"&&e.embedding?(()=>{const u=u0();return I(u,w(ws,{get eventId(){return c.data.data.id},actions:!1,embedding:!1})),u})():c.data.type==="npub"?w(ic,{get pubkey(){return c.data.data}}):c.data.type==="nprofile"?w(ic,{get pubkey(){return c.data.data.pubkey}}):(()=>{const u=vk();return I(u,()=>c.content),u})():c.type==="HashTag"?(()=>{const u=mk();return u.$$click=()=>l(c.content),I(u,()=>c.content),u})():c.type==="URL"?Z9(c.content)?w(tk,{get url(){return c.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):w(cu,{class:"text-blue-500 underline",get href(){return c.content}}):(console.error("Not all ParsedTextNoteNodes are covered",c),null)}})};ot(["click"]);const yk=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),_k=(e={})=>(()=>{const t=yk();return Ze(t,e,!0,!0),t})(),wk=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),$s=(e={})=>(()=>{const t=wk();return Ze(t,e,!0,!0),t})(),$k=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),xk=(e={})=>(()=>{const t=$k();return Ze(t,e,!0,!0),t})(),kk=e=>Math.floor(+e/1e3),Vn=()=>kk(new Date),Ck=(e,t)=>new Promise((r,s)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),r()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),s(o)})}),Sk=({notifyPubkeys:e,rootEventId:t,mentionEventIds:r,replyEventId:s,contentWarning:o,hashtags:l,urls:c,tags:u})=>{const d=[],g=e?.map(v=>["p",v])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),r?.forEach(v=>d.push(["e",v,"","mention"])),s!=null&&d.push(["e",s,"","reply"]),l?.forEach(v=>h.push(["t",v])),c?.forEach(v=>h.push(["r",v])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...g,...h]},Aa=()=>{const e=ka(),t=async(d,g)=>{const h={...g};if(h.id=mg(h),window.nostr==null)throw new Error("NIP-07 implementation not found");const v=await window.nostr.signEvent(h);return d.map(async b=>{const $=(await e().ensureRelay(b)).publish(v);return Ck($,b)})};return{publishTextNote:async d=>{const{relayUrls:g,pubkey:h,content:v}=d,b=Sk(d),_={kind:1,pubkey:h,created_at:Vn(),tags:b,content:v};return t(g,_)},publishReaction:async({relayUrls:d,pubkey:g,eventId:h,content:v,notifyPubkey:b})=>{const _={kind:7,pubkey:g,created_at:Vn(),tags:[["e",h,""],["p",b]],content:v};return t(d,_)},publishRepost:async({relayUrls:d,pubkey:g,eventId:h,notifyPubkey:v})=>{const b={kind:6,pubkey:g,created_at:Vn(),tags:[["e",h,""],["p",v]],content:""};return t(d,b)},updateProfile:async({relayUrls:d,pubkey:g,profile:h,otherProperties:v})=>{const b={...h,...v},_={kind:gt.Metadata,pubkey:g,created_at:Vn(),tags:[],content:JSON.stringify(b)};return t(d,_)},updateContacts:async({relayUrls:d,pubkey:g,followingPubkeys:h,content:v})=>{const b=h.map($=>["p",$]),_={kind:gt.Contacts,pubkey:g,created_at:Vn(),tags:b,content:v};return t(d,_)},deleteEvent:async({relayUrls:d,pubkey:g,eventId:h})=>{const v={kind:gt.EventDeletion,pubkey:g,created_at:Vn(),tags:[["e",h,""]],content:""};return t(d,v)}}};let sc=!1;const[Bo,Ek]=me(void 0),tr=()=>(un(()=>{if(Bo()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),Bo()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Bo()==null&&!sc&&(sc=!0,window.nostr.getPublicKey().then(r=>{clearInterval(t),Ek(r)}).catch(r=>console.error("failed to obtain public key: ",r)).finally(()=>{sc=!1})),e+=1},200)}),Bo),Tk=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const r=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!r.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await r.json()}},Ak=e=>t=>Promise.allSettled(t.map(r=>e(r))),Ik=P("<div>に返信"),Rk=P('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),Lk=P('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),Ok=P('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),Pk=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},Mk=e=>{const t=[],r=[],s=[],o=[];return e.forEach(l=>{l.type==="HashTag"?t.push(l.tagName):l.type==="URL"?o.push(l.content):l.type==="Bech32Entity"&&(l.data.type==="npub"?r.push(l.data.data):l.data.type==="note"&&s.push(l.data.data))}),{hashtags:t,pubkeyReferences:r,eventReferences:s,urlReferences:o}},Bk=e=>{const t=[];return e.forEach(r=>{r.type==="Bech32Entity"&&!r.isNIP19?t.push(`nostr:${r.content}`):t.push(r.content)}),t.join("")},vp=e=>{let t,r;const[s,o]=me(""),[l,c]=me(!1),[u,d]=me(""),g=()=>{o(""),d(""),c(!1)},h=()=>{t?.blur(),g(),e.onClose()},{config:v}=Pe(),b=tr(),_=Aa(),$=()=>e.replyTo&&wn(e.replyTo),k=()=>e.mode??"normal",S=qr({mutationKey:["publishTextNote"],mutationFn:_.publishTextNote.bind(_),onSuccess:()=>{console.log("succeeded to post"),g(),e.onPost?.()},onError:j=>{console.error("error",j)}}),L=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},U=qr({mutationKey:["uploadFiles"],mutationFn:j=>Ak(Tk)(j).then(ne=>{ne.forEach(se=>{se.status==="fulfilled"?(console.log("succeeded to upload",se),o(je=>`${je} ${se.value.imageUrl}`),L()):console.error("failed to upload",se)})}).catch(ne=>console.error(ne))}),M=De(()=>$()?.mentionedPubkeysWithoutAuthor()??[]),R=De(()=>M().filter(j=>j!==b())),E=(j,ne)=>e.replyTo==null?ne:xr([e.replyTo.pubkey,...R(),...ne]),O=()=>{if(s().length===0||S.isLoading)return;const j=b();if(j==null){console.error("pubkey is not available");return}const ne=pp(s()),{hashtags:se,pubkeyReferences:je,eventReferences:Ee,urlReferences:J}=Mk(ne),Te=Bk(ne);let at={relayUrls:v().relayUrls,pubkey:j,content:Te,notifyPubkeys:je,mentionEventIds:Ee,hashtags:se,urls:J};$()!=null&&(at={...at,notifyPubkeys:E(j,je),rootEventId:$()?.rootEvent()?.id??$()?.id,replyEventId:$()?.id}),l()&&(at={...at,contentWarning:u()}),S.mutate(at),h()},N=j=>{o(j.currentTarget.value),L()},q=j=>{j.preventDefault(),O()},re=j=>{j.key==="Enter"&&(j.ctrlKey||j.metaKey)?O():j.key==="Escape"&&(t?.blur(),h())},G=j=>{j.preventDefault();const ne=[...j.currentTarget.files??[]];U.mutate(ne),j.currentTarget.value=""},ee=j=>{if(j.preventDefault(),U.isLoading)return;const ne=[...j?.dataTransfer?.files??[]];U.mutate(ne)},K=j=>{if(U.isLoading)return;const ne=[...j?.clipboardData?.items??[]],se=[];ne.forEach(je=>{if(je.kind==="file"){j.preventDefault();const Ee=je.getAsFile();if(Ee==null)return;se.push(Ee)}}),se.length!==0&&U.mutate(se)},Q=j=>{j.preventDefault()},te=()=>s().trim().length===0||S.isLoading||U.isLoading,Le=()=>U.isLoading;return un(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const j=Ok(),ne=j.firstChild,se=ne.firstChild,je=se.nextSibling,Ee=je.firstChild,J=Ee.nextSibling,Te=J.nextSibling,at=je.nextSibling;I(j,w(ae,{get when(){return M().length>0},get children(){const Z=Ik(),lt=Z.firstChild;return I(Z,w(Dt,{get each(){return M()},children:Zt=>[w(Sa,{pubkey:Zt})," "]}),lt),Z}}),ne),ne.addEventListener("submit",q),I(ne,w(ae,{get when(){return l()},get children(){const Z=Rk();return Z.$$input=lt=>d(lt.currentTarget.value),Ae(()=>Z.value=u()),Z}}),se),se.addEventListener("paste",K),se.addEventListener("drop",ee),se.addEventListener("dragover",Q),se.$$keydown=re,se.$$input=N,An(Z=>{t=Z,e.textAreaRef?.(Z)},se),I(je,w(ae,{get when(){return k()==="reply"},get children(){const Z=Lk(),lt=Z.firstChild;return lt.$$click=()=>h(),I(lt,w($s,{})),Z}}),Ee),Ee.$$click=()=>c(Z=>!Z),J.$$click=()=>r?.click(),I(J,w(_k,{})),I(Te,w(xk,{})),at.addEventListener("change",G);const rr=r;return typeof rr=="function"?An(rr,at):r=at,Ae(Z=>{const lt=Pk(k()),Zt=!l(),xt=!!l(),oe=k()==="normal",ft=k()==="normal",rt=k()==="reply",yt=k()==="reply",kn=!!Le(),Xe=!Le(),Rt=k()==="normal",ir=k()==="normal",tt=k()==="reply",kt=k()==="reply",Bn=Le(),he=!!te(),Oe=!te(),Ge=k()==="normal",dt=k()==="normal",Lt=k()==="reply",le=k()==="reply",Xt=te();return lt!==Z._v$&&At(se,"placeholder",Z._v$=lt),Zt!==Z._v$2&&Ee.classList.toggle("bg-rose-300",Z._v$2=Zt),xt!==Z._v$3&&Ee.classList.toggle("bg-rose-400",Z._v$3=xt),oe!==Z._v$4&&Ee.classList.toggle("h-8",Z._v$4=oe),ft!==Z._v$5&&Ee.classList.toggle("w-8",Z._v$5=ft),rt!==Z._v$6&&Ee.classList.toggle("h-7",Z._v$6=rt),yt!==Z._v$7&&Ee.classList.toggle("w-7",Z._v$7=yt),kn!==Z._v$8&&J.classList.toggle("bg-primary-disabled",Z._v$8=kn),Xe!==Z._v$9&&J.classList.toggle("bg-primary",Z._v$9=Xe),Rt!==Z._v$10&&J.classList.toggle("h-8",Z._v$10=Rt),ir!==Z._v$11&&J.classList.toggle("w-8",Z._v$11=ir),tt!==Z._v$12&&J.classList.toggle("h-7",Z._v$12=tt),kt!==Z._v$13&&J.classList.toggle("w-7",Z._v$13=kt),Bn!==Z._v$14&&(J.disabled=Z._v$14=Bn),he!==Z._v$15&&Te.classList.toggle("bg-primary-disabled",Z._v$15=he),Oe!==Z._v$16&&Te.classList.toggle("bg-primary",Z._v$16=Oe),Ge!==Z._v$17&&Te.classList.toggle("h-8",Z._v$17=Ge),dt!==Z._v$18&&Te.classList.toggle("w-8",Z._v$18=dt),Lt!==Z._v$19&&Te.classList.toggle("h-7",Z._v$19=Lt),le!==Z._v$20&&Te.classList.toggle("w-7",Z._v$20=le),Xt!==Z._v$21&&(Te.disabled=Z._v$21=Xt),Z},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Ae(()=>se.value=s()),j})()};ot(["input","keydown","click"]);const mp=zw(),Uk=()=>Nw(mp),Dk=()=>{const[e,t]=mi({});return{timelineState:e,setTimeline:r=>t("content",r),clearTimeline:()=>t("content",void 0)}},Hk=P('<div class="flex gap-2 pt-1">'),Fk=P('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),jk=P('<span class="ml-1 text-sm">'),zk=P('<button class="flex items-center rounded border px-1" type="button">'),Nk=P('<span class="text-xs">'),Wk=P('<span class="text-red-500">削除'),qk=P('<img alt="icon" class="h-full w-full rounded object-cover">'),Kk=P('<div class="author-name truncate pr-1 font-bold hover:underline">'),Gk=P('<div class="text-xs">への返信'),Vk=P('<div class="content whitespace-pre-wrap break-all">'),Qk=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),f0=P('<div class="text-sm text-zinc-400">'),Zk=P('<span class="inline-block h-4 w-4">'),Xk=P('<div class="flex shrink-0 items-center gap-1">'),Yk=P('<span class="inline-block h-4 w-4 text-zinc-400">'),Jk=P('<div class="actions flex w-48 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),eC=P('<div class="nostr-textnote flex flex-col"><div class="flex w-full gap-1"><button class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></button><div class="created-at shrink-0"><a type="button" class="hover:underline"></a></div></div><div class="overflow-hidden">'),tC=P('<div class="mt-1 rounded border p-1">'),nC=P('<button class="pr-1 text-blue-500 hover:underline">'),{noteEncode:d0}=As,rC=e=>{const{config:t}=Pe(),r=tr();return(()=>{const s=Hk();return I(s,w(Dt,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,l])=>{const c=l.findIndex(u=>u.pubkey===r())>=0;return(()=>{const u=zk();return u.$$click=()=>e.onReaction(o),u.classList.toggle("text-zinc-400",!c),u.classList.toggle("bg-rose-50",!!c),u.classList.toggle("border-rose-200",!!c),u.classList.toggle("text-rose-400",!!c),I(u,w(ae,{when:o==="+",get fallback(){return(()=>{const d=Nk();return I(d,o),d})()},get children(){const d=Fk();return I(d,w(su,{})),d}}),null),I(u,w(ae,{get when(){return!t().hideCount},get children(){const d=jk();return I(d,()=>l.length),d}}),null),u})()}})),s})()},bp=e=>{let t;const{config:r}=Pe(),s=Ug(),o=tr(),{showProfile:l}=Rr(),c=Uk(),[u,d]=me(!1),[g,h]=me(!1),[v,b]=me(!1),_=()=>b(!1),[$,k]=me(!1),[S,L]=me(!1),U=De(()=>wn(e.event)),M=()=>e.embedding??!0,R=()=>e.actions??!0,{profile:E}=Ui(()=>({pubkey:e.event.pubkey})),{reactions:O,reactionsGroupedByContent:N,isReactedBy:q,isReactedByWithEmoji:re,invalidateReactions:G,query:ee}=L7(()=>({eventId:e.event.id})),{reposts:K,isRepostedBy:Q,invalidateReposts:te,query:Le}=O7(()=>({eventId:e.event.id})),j=Aa(),ne=qr({mutationKey:["publishReaction",U().id],mutationFn:j.publishReaction.bind(j),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:oe=>{console.error("failed to publish reaction: ",oe)},onSettled:()=>{G().then(()=>ee.refetch()).catch(oe=>console.error("failed to refetch reactions",oe))}}),se=qr({mutationKey:["publishRepost",U().id],mutationFn:j.publishRepost.bind(j),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:oe=>{console.error("failed to publish repost: ",oe)},onSettled:()=>{te().then(()=>Le.refetch()).catch(oe=>console.error("failed to refetch reposts",oe))}}),je=qr({mutationKey:["deleteEvent",U().id],mutationFn:(...oe)=>j.deleteEvent(...oe).then(ft=>Promise.allSettled(ft.map(Ir(1e4)))),onSuccess:oe=>{const ft=oe.filter(yt=>yt.status==="fulfilled").length,rt=oe.length-ft;ft===oe.length?window.alert("削除しました（画面の反映にはリロード）"):ft>0?window.alert(`${rt}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:oe=>{console.error("failed to delete",oe)}}),Ee=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d0(e.event.id)).catch(oe=>window.alert(oe))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event)).catch(oe=>window.alert(oe))}},{when:()=>U().pubkey===o(),content:()=>Wk(),onSelect:()=>{const oe=o();oe!=null&&window.confirm("本当に削除しますか？")&&je.mutate({relayUrls:r().relayUrls,pubkey:oe,eventId:U().id})}}],J=De(()=>{const oe=o();return oe!=null&&q(oe)||u()}),Te=De(()=>{const oe=o();return oe!=null&&re(oe)}),at=De(()=>{const oe=o();return oe!=null&&Q(oe)||g()}),rr=()=>{const oe=U().replyingToEvent();if(M()&&oe!=null&&!U().containsEventMentionIndex(oe.index))return oe.id},Z=()=>s(U().createdAtAsDate()),lt=oe=>{oe.stopPropagation(),!at()&&Vt([o(),e.event.id])(([ft,rt])=>{se.mutate({relayUrls:r().relayUrls,pubkey:ft,eventId:rt,notifyPubkey:e.event.pubkey}),h(!0)})},Zt=oe=>{J()||Vt([o(),e.event.id])(([ft,rt])=>{ne.mutate({relayUrls:r().relayUrls,pubkey:ft,content:oe??"+",eventId:rt,notifyPubkey:e.event.pubkey}),d(!0)})},xt=oe=>{oe.stopPropagation(),Zt()};return un(()=>{t!=null&&L(t.scrollHeight>t.clientHeight)}),(()=>{const oe=eC(),ft=oe.firstChild,rt=ft.firstChild,yt=rt.nextSibling,kn=yt.firstChild,Xe=kn.firstChild,Rt=Xe.firstChild,ir=Xe.nextSibling,tt=ir.firstChild,kt=kn.nextSibling;rt.$$click=he=>{he.stopPropagation(),l(U().pubkey)},I(rt,w(ae,{get when(){return E()?.picture},get children(){const he=qk();return Ae(()=>At(he,"src",E()?.picture)),he}})),Xe.$$click=he=>{he.stopPropagation(),l(U().pubkey)},I(Xe,w(ae,{get when(){return(E()?.display_name?.length??0)>0},get children(){const he=Kk();return I(he,()=>E()?.display_name),he}}),Rt),I(Rt,w(ae,{get when(){return E()?.name!=null},get fallback(){return`@${Ca(U().pubkey)}`},get children(){return["@",De(()=>E()?.name)]}})),tt.$$click=he=>{he.preventDefault(),c?.setTimeline({type:"Replies",event:e.event})},I(tt,Z);const Bn=t;return typeof Bn=="function"?An(Bn,kt):t=kt,I(kt,w(ae,{get when(){return rr()},keyed:!0,children:he=>(()=>{const Oe=tC();return I(Oe,w(ws,{eventId:he,actions:!1,embedding:!1})),Oe})()}),null),I(kt,w(ae,{get when(){return U().mentionedPubkeys().length>0},get children(){const he=Gk(),Oe=he.firstChild;return I(he,w(Dt,{get each(){return U().mentionedPubkeys()},children:Ge=>(()=>{const dt=nC();return dt.$$click=Lt=>{Lt.stopPropagation(),l(Ge)},I(dt,w(hp,{pubkey:Ge})),dt})()}),Oe),he}}),null),I(kt,w(V9,{get contentWarning(){return U().contentWarning()},get children(){const he=Vk();return I(he,w(bk,{get event(){return e.event},get embedding(){return M()}})),he}}),null),I(yt,w(ae,{get when(){return S()},get children(){const he=Qk();return he.$$click=Oe=>{Oe.stopPropagation(),k(Ge=>!Ge)},I(he,w(ae,{get when(){return!$()},fallback:"隠す",children:"続きを読む"})),he}}),null),I(yt,w(ae,{get when(){return R()},get children(){return[w(ae,{get when(){return De(()=>!!r().showEmojiReaction)()&&O().length>0},get children(){return w(rC,{get reactionsGroupedByContent(){return N()},onReaction:Zt})}}),(()=>{const he=Jk(),Oe=he.firstChild,Ge=Oe.nextSibling,dt=Ge.firstChild,Lt=Ge.nextSibling,le=Lt.firstChild,Xt=Lt.nextSibling;return Oe.$$click=be=>{be.stopPropagation(),b(Ne=>!Ne)},I(Oe,w(G7,{})),dt.$$click=lt,I(dt,w(kg,{})),I(Ge,w(ae,{get when(){return De(()=>!r().hideCount)()&&K().length>0},get children(){const be=f0();return I(be,()=>K().length),be}}),null),le.$$click=xt,I(le,w(ae,{get when(){return De(()=>!!J())()&&!Te()},get fallback(){return w(iu,{})},get children(){return w(su,{})}})),I(Lt,w(ae,{get when(){return De(()=>!r().hideCount&&!r().showEmojiReaction)()&&O().length>0},get children(){const be=f0();return I(be,()=>O().length),be}}),null),I(he,w(ae,{get when(){return r().useEmojiReaction},get children(){const be=Xk();return I(be,w(z9,{onEmojiSelect:Ne=>Zt(Ne),get children(){const Ne=Zk();return I(Ne,w(Fg,{})),Ne}})),Ae(Ne=>{const Ot=!J()||!Te(),Ct=!!(J()&&Te()||ne.isLoading);return Ot!==Ne._v$&&be.classList.toggle("text-zinc-400",Ne._v$=Ot),Ct!==Ne._v$2&&be.classList.toggle("text-rose-400",Ne._v$2=Ct),Ne},{_v$:void 0,_v$2:void 0}),be}}),Xt),I(Xt,w(jg,{menu:Ee,get children(){const be=Yk();return I(be,w(Hg,{})),be}})),Ae(be=>{const Ne=!at(),Ot=!!(at()||se.isLoading),Ct=se.isLoading,Yt=!!(!J()||Te()),fn=!!(J()&&!Te()||ne.isLoading),Un=ne.isLoading;return Ne!==be._v$3&&Ge.classList.toggle("text-zinc-400",be._v$3=Ne),Ot!==be._v$4&&Ge.classList.toggle("text-green-400",be._v$4=Ot),Ct!==be._v$5&&(dt.disabled=be._v$5=Ct),Yt!==be._v$6&&Lt.classList.toggle("text-zinc-400",be._v$6=Yt),fn!==be._v$7&&Lt.classList.toggle("text-rose-400",be._v$7=fn),Un!==be._v$8&&(le.disabled=be._v$8=Un),be},{_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),he})()]}}),null),I(oe,w(ae,{get when(){return v()},get children(){return w(vp,{mode:"reply",get replyTo(){return e.event},onClose:_,onPost:_})}}),null),Ae(he=>{const Oe=`nostr:${d0(U().id)}`,Ge=!$();return Oe!==he._v$9&&At(tt,"href",he._v$9=Oe),Ge!==he._v$10&&kt.classList.toggle("max-h-screen",he._v$10=Ge),he},{_v$9:void 0,_v$10:void 0}),oe})()};ot(["click"]);const yp=e=>{const{shouldMuteEvent:t}=Pe();return w(ae,{get when(){return!t(e.event)},get children(){return w(bp,e)}})},iC=P("<span><span>未対応のイベント種別（<!>）"),_p=e=>{const t=()=>e.kinds==null||e.kinds.length===0||e.kinds.includes(e.event.kind);return w(_n,{get fallback(){return(()=>{const r=iC(),s=r.firstChild,o=s.firstChild,l=o.nextSibling;return l.nextSibling,I(s,()=>e.event.kind,l),I(r,w(xa,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),r})()},get children(){return[w(Me,{get when(){return!t()},children:null}),w(Me,{get when(){return e.event.kind===gt.Text},get children(){return w(yp,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),w(Me,{get when(){return e.event.kind===6},get children(){return w(Dg,{get event(){return e.event}})}})]}})},Di=e=>{const{shouldMuteEvent:t}=Pe();return w(Dt,{get each(){return e.events},children:r=>w(ae,{get when(){return!t(r)},get children(){return w(Do,{get children(){return w(_p,{event:r})}})}})})};var sC=da;function oC(){this.__data__=new sC,this.size=0}var aC=oC;function lC(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var cC=lC;function uC(e){return this.__data__.get(e)}var fC=uC;function dC(e){return this.__data__.has(e)}var hC=dC,gC=da,pC=Uc,vC=Dc,mC=200;function bC(e,t){var r=this.__data__;if(r instanceof gC){var s=r.__data__;if(!pC||s.length<mC-1)return s.push([e,t]),this.size=++r.size,this;r=this.__data__=new vC(s)}return r.set(e,t),this.size=r.size,this}var yC=bC,_C=da,wC=aC,$C=cC,xC=fC,kC=hC,CC=yC;function Hi(e){var t=this.__data__=new _C(e);this.size=t.size}Hi.prototype.clear=wC;Hi.prototype.delete=$C;Hi.prototype.get=xC;Hi.prototype.has=kC;Hi.prototype.set=CC;var fu=Hi;function SC(e,t){for(var r=-1,s=e==null?0:e.length;++r<s;)if(t(e[r],r,e))return!0;return!1}var EC=SC,TC=d1,AC=EC,IC=h1,RC=1,LC=2;function OC(e,t,r,s,o,l){var c=r&RC,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var g=l.get(e),h=l.get(t);if(g&&h)return g==t&&h==e;var v=-1,b=!0,_=r&LC?new TC:void 0;for(l.set(e,t),l.set(t,e);++v<u;){var $=e[v],k=t[v];if(s)var S=c?s(k,$,v,t,e,l):s($,k,v,e,t,l);if(S!==void 0){if(S)continue;b=!1;break}if(_){if(!AC(t,function(L,U){if(!IC(_,U)&&($===L||o($,L,r,s,l)))return _.push(U)})){b=!1;break}}else if(!($===k||o($,k,r,s,l))){b=!1;break}}return l.delete(e),l.delete(t),b}var wp=OC,PC=$n,MC=PC.Uint8Array,$p=MC;function BC(e){var t=-1,r=Array(e.size);return e.forEach(function(s,o){r[++t]=[o,s]}),r}var UC=BC,h0=Ai,g0=$p,DC=Bc,HC=wp,FC=UC,jC=Hc,zC=1,NC=2,WC="[object Boolean]",qC="[object Date]",KC="[object Error]",GC="[object Map]",VC="[object Number]",QC="[object RegExp]",ZC="[object Set]",XC="[object String]",YC="[object Symbol]",JC="[object ArrayBuffer]",eS="[object DataView]",p0=h0?h0.prototype:void 0,oc=p0?p0.valueOf:void 0;function tS(e,t,r,s,o,l,c){switch(r){case eS:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case JC:return!(e.byteLength!=t.byteLength||!l(new g0(e),new g0(t)));case WC:case qC:case VC:return DC(+e,+t);case KC:return e.name==t.name&&e.message==t.message;case QC:case XC:return e==t+"";case GC:var u=FC;case ZC:var d=s&zC;if(u||(u=jC),e.size!=t.size&&!d)return!1;var g=c.get(e);if(g)return g==t;s|=NC,c.set(e,t);var h=HC(u(e),u(t),s,o,l,c);return c.delete(e),h;case YC:if(oc)return oc.call(e)==oc.call(t)}return!1}var nS=tS;function rS(e,t){for(var r=-1,s=t.length,o=e.length;++r<s;)e[o+r]=t[r];return e}var du=rS,iS=Array.isArray,Mn=iS,sS=du,oS=Mn;function aS(e,t,r){var s=t(e);return oS(e)?s:sS(s,r(e))}var xp=aS;function lS(e,t){for(var r=-1,s=e==null?0:e.length,o=0,l=[];++r<s;){var c=e[r];t(c,r,e)&&(l[o++]=c)}return l}var cS=lS;function uS(){return[]}var kp=uS,fS=cS,dS=kp,hS=Object.prototype,gS=hS.propertyIsEnumerable,v0=Object.getOwnPropertySymbols,pS=v0?function(e){return e==null?[]:(e=Object(e),fS(v0(e),function(t){return gS.call(e,t)}))}:dS,hu=pS;function vS(e,t){for(var r=-1,s=Array(e);++r<e;)s[r]=t(r);return s}var mS=vS;function bS(e){return e!=null&&typeof e=="object"}var Lr=bS,yS=Ii,_S=Lr,wS="[object Arguments]";function $S(e){return _S(e)&&yS(e)==wS}var xS=$S,m0=xS,kS=Lr,Cp=Object.prototype,CS=Cp.hasOwnProperty,SS=Cp.propertyIsEnumerable,ES=m0(function(){return arguments}())?m0:function(e){return kS(e)&&CS.call(e,"callee")&&!SS.call(e,"callee")},gu=ES,ia={exports:{}};function TS(){return!1}var AS=TS;ia.exports;(function(e,t){var r=$n,s=AS,o=t&&!t.nodeType&&t,l=o&&!0&&e&&!e.nodeType&&e,c=l&&l.exports===o,u=c?r.Buffer:void 0,d=u?u.isBuffer:void 0,g=d||s;e.exports=g})(ia,ia.exports);var pu=ia.exports,IS=9007199254740991,RS=/^(?:0|[1-9]\d*)$/;function LS(e,t){var r=typeof e;return t=t??IS,!!t&&(r=="number"||r!="symbol"&&RS.test(e))&&e>-1&&e%1==0&&e<t}var vu=LS,OS=9007199254740991;function PS(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=OS}var mu=PS,MS=Ii,BS=mu,US=Lr,DS="[object Arguments]",HS="[object Array]",FS="[object Boolean]",jS="[object Date]",zS="[object Error]",NS="[object Function]",WS="[object Map]",qS="[object Number]",KS="[object Object]",GS="[object RegExp]",VS="[object Set]",QS="[object String]",ZS="[object WeakMap]",XS="[object ArrayBuffer]",YS="[object DataView]",JS="[object Float32Array]",eE="[object Float64Array]",tE="[object Int8Array]",nE="[object Int16Array]",rE="[object Int32Array]",iE="[object Uint8Array]",sE="[object Uint8ClampedArray]",oE="[object Uint16Array]",aE="[object Uint32Array]",Qe={};Qe[JS]=Qe[eE]=Qe[tE]=Qe[nE]=Qe[rE]=Qe[iE]=Qe[sE]=Qe[oE]=Qe[aE]=!0;Qe[DS]=Qe[HS]=Qe[XS]=Qe[FS]=Qe[YS]=Qe[jS]=Qe[zS]=Qe[NS]=Qe[WS]=Qe[qS]=Qe[KS]=Qe[GS]=Qe[VS]=Qe[QS]=Qe[ZS]=!1;function lE(e){return US(e)&&BS(e.length)&&!!Qe[MS(e)]}var cE=lE;function uE(e){return function(t){return e(t)}}var bu=uE,sa={exports:{}};sa.exports;(function(e,t){var r=l1,s=t&&!t.nodeType&&t,o=s&&!0&&e&&!e.nodeType&&e,l=o&&o.exports===s,c=l&&r.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||c&&c.binding&&c.binding("util")}catch{}}();e.exports=u})(sa,sa.exports);var yu=sa.exports,fE=cE,dE=bu,b0=yu,y0=b0&&b0.isTypedArray,hE=y0?dE(y0):fE,Sp=hE,gE=mS,pE=gu,vE=Mn,mE=pu,bE=vu,yE=Sp,_E=Object.prototype,wE=_E.hasOwnProperty;function $E(e,t){var r=vE(e),s=!r&&pE(e),o=!r&&!s&&mE(e),l=!r&&!s&&!o&&yE(e),c=r||s||o||l,u=c?gE(e.length,String):[],d=u.length;for(var g in e)(t||wE.call(e,g))&&!(c&&(g=="length"||o&&(g=="offset"||g=="parent")||l&&(g=="buffer"||g=="byteLength"||g=="byteOffset")||bE(g,d)))&&u.push(g);return u}var Ep=$E,xE=Object.prototype;function kE(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||xE;return e===r}var _u=kE;function CE(e,t){return function(r){return e(t(r))}}var Tp=CE,SE=Tp,EE=SE(Object.keys,Object),TE=EE,AE=_u,IE=TE,RE=Object.prototype,LE=RE.hasOwnProperty;function OE(e){if(!AE(e))return IE(e);var t=[];for(var r in Object(e))LE.call(e,r)&&r!="constructor"&&t.push(r);return t}var PE=OE,ME=u1,BE=mu;function UE(e){return e!=null&&BE(e.length)&&!ME(e)}var Ap=UE,DE=Ep,HE=PE,FE=Ap;function jE(e){return FE(e)?DE(e):HE(e)}var Ia=jE,zE=xp,NE=hu,WE=Ia;function qE(e){return zE(e,WE,NE)}var Ip=qE,_0=Ip,KE=1,GE=Object.prototype,VE=GE.hasOwnProperty;function QE(e,t,r,s,o,l){var c=r&KE,u=_0(e),d=u.length,g=_0(t),h=g.length;if(d!=h&&!c)return!1;for(var v=d;v--;){var b=u[v];if(!(c?b in t:VE.call(t,b)))return!1}var _=l.get(e),$=l.get(t);if(_&&$)return _==t&&$==e;var k=!0;l.set(e,t),l.set(t,e);for(var S=c;++v<d;){b=u[v];var L=e[b],U=t[b];if(s)var M=c?s(U,L,b,t,e,l):s(L,U,b,e,t,l);if(!(M===void 0?L===U||o(L,U,r,s,l):M)){k=!1;break}S||(S=b=="constructor")}if(k&&!S){var R=e.constructor,E=t.constructor;R!=E&&"constructor"in e&&"constructor"in t&&!(typeof R=="function"&&R instanceof R&&typeof E=="function"&&E instanceof E)&&(k=!1)}return l.delete(e),l.delete(t),k}var ZE=QE,XE=Vr,YE=$n,JE=XE(YE,"DataView"),eT=JE,tT=Vr,nT=$n,rT=tT(nT,"Promise"),iT=rT,sT=Vr,oT=$n,aT=sT(oT,"WeakMap"),lT=aT,Tc=eT,Ac=Uc,Ic=iT,Rc=g1,Lc=lT,Rp=Ii,Fi=f1,w0="[object Map]",cT="[object Object]",$0="[object Promise]",x0="[object Set]",k0="[object WeakMap]",C0="[object DataView]",uT=Fi(Tc),fT=Fi(Ac),dT=Fi(Ic),hT=Fi(Rc),gT=Fi(Lc),zr=Rp;(Tc&&zr(new Tc(new ArrayBuffer(1)))!=C0||Ac&&zr(new Ac)!=w0||Ic&&zr(Ic.resolve())!=$0||Rc&&zr(new Rc)!=x0||Lc&&zr(new Lc)!=k0)&&(zr=function(e){var t=Rp(e),r=t==cT?e.constructor:void 0,s=r?Fi(r):"";if(s)switch(s){case uT:return C0;case fT:return w0;case dT:return $0;case hT:return x0;case gT:return k0}return t});var Ra=zr,ac=fu,pT=wp,vT=nS,mT=ZE,S0=Ra,E0=Mn,T0=pu,bT=Sp,yT=1,A0="[object Arguments]",I0="[object Array]",Uo="[object Object]",_T=Object.prototype,R0=_T.hasOwnProperty;function wT(e,t,r,s,o,l){var c=E0(e),u=E0(t),d=c?I0:S0(e),g=u?I0:S0(t);d=d==A0?Uo:d,g=g==A0?Uo:g;var h=d==Uo,v=g==Uo,b=d==g;if(b&&T0(e)){if(!T0(t))return!1;c=!0,h=!1}if(b&&!h)return l||(l=new ac),c||bT(e)?pT(e,t,r,s,o,l):vT(e,t,d,r,s,o,l);if(!(r&yT)){var _=h&&R0.call(e,"__wrapped__"),$=v&&R0.call(t,"__wrapped__");if(_||$){var k=_?e.value():e,S=$?t.value():t;return l||(l=new ac),o(k,S,r,s,l)}}return b?(l||(l=new ac),mT(e,t,r,s,o,l)):!1}var $T=wT,xT=$T,L0=Lr;function Lp(e,t,r,s,o){return e===t?!0:e==null||t==null||!L0(e)&&!L0(t)?e!==e&&t!==t:xT(e,t,r,s,Lp,o)}var Op=Lp,kT=fu,CT=Op,ST=1,ET=2;function TT(e,t,r,s){var o=r.length,l=o,c=!s;if(e==null)return!l;for(e=Object(e);o--;){var u=r[o];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<l;){u=r[o];var d=u[0],g=e[d],h=u[1];if(c&&u[2]){if(g===void 0&&!(d in e))return!1}else{var v=new kT;if(s)var b=s(g,h,d,e,t,v);if(!(b===void 0?CT(h,g,ST|ET,s,v):b))return!1}}return!0}var AT=TT,IT=Ln;function RT(e){return e===e&&!IT(e)}var Pp=RT,LT=Pp,OT=Ia;function PT(e){for(var t=OT(e),r=t.length;r--;){var s=t[r],o=e[s];t[r]=[s,o,LT(o)]}return t}var MT=PT;function BT(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}var Mp=BT,UT=AT,DT=MT,HT=Mp;function FT(e){var t=DT(e);return t.length==1&&t[0][2]?HT(t[0][0],t[0][1]):function(r){return r===e||UT(r,e,t)}}var jT=FT,zT=Ii,NT=Lr,WT="[object Symbol]";function qT(e){return typeof e=="symbol"||NT(e)&&zT(e)==WT}var La=qT,KT=Mn,GT=La,VT=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,QT=/^\w*$/;function ZT(e,t){if(KT(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||GT(e)?!0:QT.test(e)||!VT.test(e)||t!=null&&e in Object(t)}var wu=ZT,Bp=Dc,XT="Expected a function";function $u(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(XT);var r=function(){var s=arguments,o=t?t.apply(this,s):s[0],l=r.cache;if(l.has(o))return l.get(o);var c=e.apply(this,s);return r.cache=l.set(o,c)||l,c};return r.cache=new($u.Cache||Bp),r}$u.Cache=Bp;var YT=$u,JT=YT,eA=500;function tA(e){var t=JT(e,function(s){return r.size===eA&&r.clear(),s}),r=t.cache;return t}var nA=tA,rA=nA,iA=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,sA=/\\(\\)?/g,oA=rA(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(iA,function(r,s,o,l){t.push(o?l.replace(sA,"$1"):s||r)}),t}),aA=oA;function lA(e,t){for(var r=-1,s=e==null?0:e.length,o=Array(s);++r<s;)o[r]=t(e[r],r,e);return o}var xu=lA,O0=Ai,cA=xu,uA=Mn,fA=La,dA=1/0,P0=O0?O0.prototype:void 0,M0=P0?P0.toString:void 0;function Up(e){if(typeof e=="string")return e;if(uA(e))return cA(e,Up)+"";if(fA(e))return M0?M0.call(e):"";var t=e+"";return t=="0"&&1/e==-dA?"-0":t}var hA=Up,gA=hA;function pA(e){return e==null?"":gA(e)}var vA=pA,mA=Mn,bA=wu,yA=aA,_A=vA;function wA(e,t){return mA(e)?e:bA(e,t)?[e]:yA(_A(e))}var ji=wA,$A=La,xA=1/0;function kA(e){if(typeof e=="string"||$A(e))return e;var t=e+"";return t=="0"&&1/e==-xA?"-0":t}var zi=kA,CA=ji,SA=zi;function EA(e,t){t=CA(t,e);for(var r=0,s=t.length;e!=null&&r<s;)e=e[SA(t[r++])];return r&&r==s?e:void 0}var Oa=EA,TA=Oa;function AA(e,t,r){var s=e==null?void 0:TA(e,t);return s===void 0?r:s}var IA=AA;function RA(e,t){return e!=null&&t in Object(e)}var LA=RA,OA=ji,PA=gu,MA=Mn,BA=vu,UA=mu,DA=zi;function HA(e,t,r){t=OA(t,e);for(var s=-1,o=t.length,l=!1;++s<o;){var c=DA(t[s]);if(!(l=e!=null&&r(e,c)))break;e=e[c]}return l||++s!=o?l:(o=e==null?0:e.length,!!o&&UA(o)&&BA(c,o)&&(MA(e)||PA(e)))}var FA=HA,jA=LA,zA=FA;function NA(e,t){return e!=null&&zA(e,t,jA)}var WA=NA,qA=Op,KA=IA,GA=WA,VA=wu,QA=Pp,ZA=Mp,XA=zi,YA=1,JA=2;function eI(e,t){return VA(e)&&QA(t)?ZA(XA(e),t):function(r){var s=KA(r,e);return s===void 0&&s===t?GA(r,e):qA(t,s,YA|JA)}}var tI=eI;function nI(e){return e}var Dp=nI;function rI(e){return function(t){return t?.[e]}}var iI=rI,sI=Oa;function oI(e){return function(t){return sI(t,e)}}var aI=oI,lI=iI,cI=aI,uI=wu,fI=zi;function dI(e){return uI(e)?lI(fI(e)):cI(e)}var hI=dI,gI=jT,pI=tI,vI=Dp,mI=Mn,bI=hI;function yI(e){return typeof e=="function"?e:e==null?vI:typeof e=="object"?mI(e)?pI(e[0],e[1]):gI(e):bI(e)}var ku=yI,_I=ku,wI=p1;function $I(e,t){return e&&e.length?wI(e,_I(t)):[]}var xI=$I;const kI=xs(xI),lc=e=>Array.from(e).sort((t,r)=>r.created_at-t.created_at);let zo=0;const{setActiveSubscriptions:CI}=Lg();setInterval(()=>{CI(zo)},1e3);const nr=e=>{const{config:t,shouldMuteEvent:r}=Pe(),s=ka(),[o,l]=me([]);Xn(aa(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{l(u=>u.filter(d=>!r(d)))},{defer:!0}));const c=()=>{const u=e();if(u==null)return;const{relayUrls:d,filters:g,options:h,onEvent:v,onEOSE:b,continuous:_=!0}=u,$=u.limit??50,k=s().sub(d,g,h);let S=!0;zo+=1;let L=!1,U=!1;const M=[];k.on("event",E=>{v?.(E),!r(E)&&(u.clientEventFilter!=null&&!u.clientEventFilter(E)||(U?l(O=>{const N=lc([E,...O].slice(0,$)),q=kI(N,re=>re.id);return q.length!==N.length&&console.warn("duplicated event",E),q}):(L=!0,M.push(E))))}),k.on("eose",()=>{b?.(),U=!0,l(lc(M)),_||(k.unsub(),S&&(S=!1,zo-=1))});const R=setInterval(()=>{if(U){clearInterval(R);return}L&&(L=!1,l(lc(M)))},100);Tr(()=>{k.unsub(),S&&(S=!1,zo-=1),clearInterval(R)})};return Xn(()=>{c()}),{events:o}},SI=e=>{const t=()=>wn(e),r=[e.id],s=t().rootEvent()?.id;s!=null&&r.push(s);const o=t().replyingToEvent()?.id;return o!=null&&r.push(o),xr(r)},EI=e=>{const{config:t}=Pe(),{events:r}=nr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:SI(e.event),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return w(Di,{get events(){return[...r()].reverse()}})},TI=e=>w(_n,{get children(){return w(Me,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>w(EI,{get event(){return t.event}})})}}),AI=P('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),II=P('<div class="shrink-0 border-b">'),RI=P('<div class="flex flex-col overflow-y-scroll scroll-smooth">'),LI=P('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="flex h-full flex-col overflow-y-scroll scroll-smooth">'),Ni=e=>{let t;const r=Dk(),s=()=>e.width??"medium";return Ec(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Ec(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),w(mp.Provider,{value:r,get children(){const o=AI(),l=t;return typeof l=="function"?An(l,o):t=o,I(o,w(ae,{get when(){return r.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=II();return I(c,()=>e.header),c})(),(()=>{const c=RI();return I(c,()=>e.children),c})()]},children:c=>(()=>{const u=LI(),d=u.firstChild,g=d.firstChild,h=g.firstChild,v=d.nextSibling;return g.$$click=()=>r?.clearTimeline(),I(h,w(a1,{})),I(v,w(TI,{timelineContent:c})),u})()})),Ae(c=>Ww(o,{"sm:w-[500px]":s()==="widest","sm:w-[360px]":s()==="wide","sm:w-[320px]":s()==="medium","sm:w-[280px]":s()==="narrow"},c)),o}})};ot(["click"]);const OI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),PI=(e={})=>(()=>{const t=OI();return Ze(t,e,!0,!0),t})(),MI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),BI=(e={})=>(()=>{const t=MI();return Ze(t,e,!0,!0),t})(),UI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),DI=(e={})=>(()=>{const t=UI();return Ze(t,e,!0,!0),t})(),HI=P('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),FI=P('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),jI=P('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),zI=e=>(()=>{const t=HI(),r=t.firstChild,s=r.nextSibling;return I(r,()=>e.title),I(s,()=>e.children),t})(),Wi=e=>{const{saveColumn:t,removeColumn:r,moveColumn:s}=Pe(),o=Rs(),l=u=>{t({...e.column,width:u})},c=u=>{s(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=jI(),d=u.firstChild,g=d.firstChild,h=g.firstChild,v=g.nextSibling,b=v.firstChild,_=v.nextSibling,$=_.nextSibling,k=$.firstChild;return I(u,w(zI,{title:"カラム幅",get children(){const S=FI(),L=S.firstChild,U=L.nextSibling,M=U.nextSibling,R=M.nextSibling;return L.$$click=()=>l("widest"),U.$$click=()=>l("wide"),M.$$click=()=>l("medium"),R.$$click=()=>l("narrow"),S}}),d),g.$$click=()=>c(e.columnIndex-1),I(h,w(PI,{})),v.$$click=()=>c(e.columnIndex+1),I(b,w(BI,{})),$.$$click=()=>r(e.column.id),I(k,w(DI,{})),u})()};ot(["click"]);const Er=e=>t=>{switch(e.filterType){case"AND":return e.children.every(r=>Er(r)(t));case"OR":return e.children.some(r=>Er(r)(t));case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},NI=e=>{const{config:t,removeColumn:r}=Pe(),{followingPubkeys:s}=_c(()=>({pubkey:e.column.pubkey})),{events:o}=nr(()=>{const l=r4.uniq([...s()]);return l.length===0?null:{relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:l,limit:10,since:Vn()-4*60*60}],clientEventFilter:c=>e.column.contentFilter==null?!0:Er(e.column.contentFilter)(c.content)}});return Xn(()=>{console.log("home",o())}),un(()=>console.log("home timeline mounted")),Tr(()=>console.log("home timeline unmounted")),w(Ni,{get header(){return w(ks,{get name(){return e.column.name??"ホーム"},get icon(){return w(s1,{})},settings:()=>w(Wi,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(Di,{get events(){return o()}})}})},WI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),Hp=(e={})=>(()=>{const t=WI();return Ze(t,e,!0,!0),t})(),qI=P('<span class="h-4 w-4 pt-[1px] text-rose-400">'),KI=P('<img alt="icon" class="rounded">'),GI=P('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),VI=P('<div class="notification-event py-1">'),QI=P('<div class="truncate">読み込み中 '),ZI=e=>{const{shouldMuteEvent:t}=Pe(),{showProfile:r}=Rr(),s=()=>wn(e.event),o=()=>s().lastTaggedEventId(),{profile:l}=Ui(()=>({pubkey:e.event.pubkey})),{event:c,query:u}=Pg(()=>Vt([o()])(([g])=>({eventId:g}))),d=()=>u.isSuccess&&c()==null;return w(ae,{get when(){return!d()||t(e.event)},get children(){return[(()=>{const g=GI(),h=g.firstChild,v=h.nextSibling,b=v.firstChild,_=b.nextSibling,$=_.firstChild;return I(h,w(_n,{get fallback(){return e.event.content},get children(){return w(Me,{get when(){return e.event.content==="+"},get children(){const k=qI();return I(k,w(su,{})),k}})}})),I(b,w(ae,{get when(){return l()?.picture!=null},get children(){const k=KI();return Ae(()=>At(k,"src",l()?.picture)),k}})),$.$$click=()=>r(e.event.pubkey),I($,w(Sa,{get pubkey(){return e.event.pubkey}})),g})(),(()=>{const g=VI();return I(g,w(ae,{get when(){return c()},get fallback(){return(()=>{const h=QI();return h.firstChild,I(h,o,null),h})()},keyed:!0,children:h=>w(bp,{event:h})})),g})()]}})};ot(["click"]);const XI=P("<div>unknown event"),Fp=e=>w(Dt,{get each(){return e.events},children:t=>w(_n,{get fallback(){return XI()},get children(){return[w(Me,{get when(){return t.kind===gt.Text},get children(){return w(Do,{get children(){return w(yp,{event:t})}})}}),w(Me,{get when(){return t.kind===gt.Reaction},get children(){return w(Do,{get children(){return w(ZI,{event:t})}})}}),w(Me,{get when(){return t.kind===6},get children(){return w(Do,{get children(){return w(Dg,{event:t})}})}})]}})}),YI=e=>{const{config:t,removeColumn:r}=Pe(),{events:s}=nr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Er(e.column.contentFilter)(o.content)}));return w(Ni,{get header(){return w(ks,{get name(){return e.column.name??"通知"},get icon(){return w(Hp,{})},settings:()=>w(Wi,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(Fp,{get events(){return s()}})}})},JI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),jp=(e={})=>(()=>{const t=JI();return Ze(t,e,!0,!0),t})(),eR=e=>{const{config:t,removeColumn:r}=Pe(),{events:s}=nr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Er(e.column.contentFilter)(o.content)}));return w(Ni,{get header(){return w(ks,{get name(){return e.column.name??"投稿"},get icon(){return w(jp,{})},settings:()=>w(Wi,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(Di,{get events(){return s()}})}})},tR=e=>{const{config:t,removeColumn:r}=Pe(),{events:s}=nr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Er(e.column.contentFilter)(o.content)}));return w(Ni,{get header(){return w(ks,{get name(){return e.column.name??"リアクション"},get icon(){return w(iu,{})},settings:()=>w(Wi,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(Fp,{get events(){return s()}})}})},nR=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Cu=(e={})=>(()=>{const t=nR();return Ze(t,e,!0,!0),t})(),rR=e=>{const{removeColumn:t}=Pe(),{events:r}=nr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:Vn()-4*60*60}],clientEventFilter:s=>e.column.contentFilter==null?!0:Er(e.column.contentFilter)(s.content)}));return w(Ni,{get header(){return w(ks,{get name(){return e.column.name??"リレー"},get icon(){return w(Cu,{})},settings:()=>w(Wi,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(Di,{get events(){return r()}})}})},iR=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),zp=(e={})=>(()=>{const t=iR();return Ze(t,e,!0,!0),t})(),sR=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),oR=e=>{const[t,r]=me(!1),[s,o]=me(""),{saveColumn:l}=Pe(),c=()=>r(v=>!v),u=()=>{s()!==e.column.query&&l({...e.column,query:s()})},d=()=>{u()},g=v=>{o(v.currentTarget.value)},h=v=>{v.preventDefault(),u()};return un(()=>{o(e.column.query)}),(()=>{const v=sR(),b=v.firstChild,_=b.firstChild,$=_.firstChild,k=_.nextSibling,S=k.firstChild,L=k.nextSibling;return I($,w(zp,{})),k.addEventListener("submit",h),S.addEventListener("blur",d),S.addEventListener("change",g),L.$$click=()=>c(),I(L,w(o1,{})),I(v,w(ae,{get when(){return t()},get children(){return e.settings()}}),null),Ae(()=>S.value=s()),v})()},aR=e=>{const{removeColumn:t}=Pe(),{events:r}=nr(()=>{const{query:s}=e.column;return s.length===0?null:{relayUrls:v7,filters:[{kinds:[1,6],search:s,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:Er(e.column.contentFilter)(o.content)}});return w(Ni,{get header(){return w(oR,{get column(){return e.column},settings:()=>w(Wi,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return w(Di,{get events(){return r()}})}})};ot(["click"]);const lR=P('<div class="flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),cR=()=>{const{config:e}=Pe();return(()=>{const t=lR();return I(t,w(Dt,{get each(){return e().columns},children:(r,s)=>{const o=()=>s()+1,l=()=>o()===e().columns.length;return w(_n,{get children(){return[w(Me,{get when(){return r.columnType==="Following"&&r},keyed:!0,children:c=>w(NI,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),w(Me,{get when(){return r.columnType==="Notification"&&r},keyed:!0,children:c=>w(YI,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),w(Me,{get when(){return r.columnType==="Posts"&&r},keyed:!0,children:c=>w(eR,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),w(Me,{get when(){return r.columnType==="Reactions"&&r},keyed:!0,children:c=>w(tR,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),w(Me,{get when(){return r.columnType==="Relays"&&r},keyed:!0,children:c=>w(rR,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),w(Me,{get when(){return r.columnType==="Search"&&r},keyed:!0,children:c=>w(aR,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})})]}})}})),t})()},uR=P('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),fR=e=>{let t;const r=s=>{s.target===t&&e.onClose?.()};return(()=>{const s=uR();s.$$click=r;const o=t;return typeof o=="function"?An(o,s):t=s,I(s,()=>e.children),s})()};ot(["click"]);const dR=P('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),Ls=e=>w(fR,{onClose:()=>e.onClose?.(),get children(){const t=dR(),r=t.firstChild,s=r.firstChild,o=r.nextSibling;return r.$$click=()=>e.onClose?.(),I(s,w(ae,{get when(){return e?.closeButton},get fallback(){return w($s,{})},keyed:!0,children:l=>l()})),I(o,()=>e.children),t}});ot(["click"]);const hR=P('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),gR=P('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),pR=P('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),vR=async()=>{const t=await(await fetch(Pc("packageInfo.json"))).text();return JSON.parse(t)},mR=e=>{const[t]=r1(vR);return w(Ls,{get onClose(){return e.onClose},get children(){const r=hR(),s=r.firstChild,o=s.firstChild,l=o.nextSibling,c=l.firstChild,u=c.nextSibling;u.firstChild;const d=s.nextSibling,g=d.nextSibling,h=g.nextSibling,v=h.nextSibling,b=v.nextSibling,_=b.nextSibling,$=_.nextSibling;return $.nextSibling,I(u,()=>t()?.self?.version,null),I($,()=>t()?.self.licenseText),I(r,w(Dt,{get each(){return t()?.packages??[]},fallback:"取得中",children:k=>[(()=>{const S=gR(),L=S.firstChild,U=L.nextSibling,M=U.nextSibling,R=M.nextSibling;return R.nextSibling,I(S,()=>k.name,L),I(S,()=>k.version,U),I(S,()=>k.licenseSpdx,R),S})(),(()=>{const S=pR();return I(S,()=>k.licenseText),S})()]}),null),Ae(()=>At(o,"src",Pc("images/rabbit_app_256.png"))),r}})},bR=P('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),yR=e=>{const t=tr(),{saveColumn:r}=Pe(),s=Rs(),o=()=>{e.onClose(),s({command:"moveToLastColumn"}).catch(v=>console.error(v))},l=()=>{Vt([t()])(([v])=>{r(Sg({pubkey:v}))}),o()},c=()=>{Vt([t()])(([v])=>{r(Eg({pubkey:v}))}),o()},u=()=>{r(Tg()),o()},d=()=>{r(ru({query:""})),o()},g=()=>{Vt([t()])(([v])=>{r(Ag({pubkey:v}))}),o()},h=()=>{Vt([t()])(([v])=>{r(Ig({pubkey:v}))}),o()};return w(Ls,{get onClose(){return e.onClose},get children(){const v=bR(),b=v.firstChild,_=b.firstChild,$=b.nextSibling,k=$.firstChild,S=$.nextSibling,L=S.firstChild,U=S.nextSibling,M=U.firstChild,R=U.nextSibling,E=R.firstChild,O=R.nextSibling,N=O.firstChild;return b.$$click=()=>l(),I(_,w(s1,{})),$.$$click=()=>c(),I(k,w(Hp,{})),S.$$click=()=>u(),I(L,w(Cu,{})),U.$$click=()=>d(),I(M,w(zp,{})),R.$$click=()=>g(),I(E,w(jp,{})),O.$$click=()=>h(),I(N,w(iu,{})),v}})};ot(["click"]);const _R=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),wR=(e={})=>(()=>{const t=_R();return Ze(t,e,!0,!0),t})(),$R=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),xR=(e={})=>(()=>{const t=$R();return Ze(t,e,!0,!0),t})(),kR=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),CR=(e={})=>(()=>{const t=kR();return Ze(t,e,!0,!0),t})();function SR(e){const{config:t}=Pe(),r=De(e),{events:s}=nr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[gt.Contacts],"#p":[r().pubkey]}],limit:1/0,continuous:!0})),o=()=>xr(s()?.map(c=>c.pubkey));return{followersPubkeys:o,count:()=>o().length}}const ER=e=>{const t=De(e),r=Ti(()=>["useVerification",t()],({queryKey:o,signal:l})=>{const[,c]=o;if(c==null)return Promise.resolve(null);const{nip05:u}=c;return $g.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>r?.data??null,query:r}},TR=P('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),AR=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),IR=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),RR=P('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),LR=P('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),OR=P('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),PR=P('<div class="shrink-0 text-xs">読み込み中'),MR=P('<div class="shrink-0 text-xs">フォローされています'),BR=P('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),UR=P('<div class="truncate text-xl font-bold">'),DR=P('<div class="truncate text-xs">@'),HR=P('<span class="inline-block h-3 w-3">'),FR=P('<span class="inline-block h-4 w-4 text-blue-400">'),jR=P('<div class="flex items-center text-xs">'),zR=P('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),NR=P('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),WR=P('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),qR=P('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),KR=P('<ul class="border-t px-5 py-2 text-xs">'),GR=P('<ul class="border-t p-1">'),VR=P('<div class="h-12 shrink-0">'),QR=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),ZR=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),XR=P('<span class="inline-block h-4 w-4 text-rose-500">'),YR=P('<span class="text-sm">読み込み中'),JR=P('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),eL=P('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),tL=e=>{const{count:t}=SR(()=>({pubkey:e.pubkey}));return De(t)},nL=e=>{const{config:t,addMutedPubkey:r,removeMutedPubkey:s,isPubkeyMuted:o}=Pe(),l=Aa(),c=tr(),{showProfileEdit:u}=Rr(),d=De(()=>Ca(e.pubkey)),[g,h]=me(!1),[v,b]=me(!1),{profile:_,query:$}=Ui(()=>({pubkey:e.pubkey})),{verification:k,query:S}=ER(()=>Vt([_()?.nip05])(([j])=>({nip05:j}))),L=()=>{const j=_()?.nip05;if(j==null)return null;const[ne,se]=j.split("@");return se==null?null:ne==="_"?{domain:se,ident:se}:{user:ne,domain:se,ident:j}},U=()=>k()?.pubkey===e.pubkey,M=()=>o(e.pubkey),{followingPubkeys:R,invalidateFollowings:E,query:O}=_c(()=>Vt([c()])(([j])=>({pubkey:j}))),N=()=>R().includes(e.pubkey),{followingPubkeys:q,query:re}=_c(()=>({pubkey:e.pubkey})),G=()=>{const j=c();return j!=null&&q().includes(j)},ee=qr({mutationKey:["updateContacts"],mutationFn:(...j)=>l.updateContacts(...j).then(ne=>Promise.allSettled(ne.map(Ir(5e3)))),onSuccess:j=>{const ne=j.filter(je=>je.status==="fulfilled").length,se=j.length-ne;ne===j.length?console.log("succeeded to update contacts"):ne>0?console.log(`succeeded to update contacts for ${ne} relays but failed for ${se} relays`):console.error("failed to update contacts")},onError:j=>{console.error("failed to update contacts: ",j)},onSettled:()=>{E().then(()=>O.refetch()).catch(j=>console.error("failed to refetch contacts",j))}}),K=()=>{const j=c();j!=null&&O.isFetched&&ee.mutate({relayUrls:t().relayUrls,pubkey:j,content:O.data?.content??"",followingPubkeys:xr([...R(),e.pubkey])})},Q=()=>{const j=c();j!=null&&O.isFetched&&window.confirm("本当にフォロー解除しますか？")&&ee.mutate({relayUrls:t().relayUrls,pubkey:j,content:O.data?.content??"",followingPubkeys:R().filter(ne=>ne!==e.pubkey)})},te=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(j=>window.alert(j))}},{content:()=>M()?"ミュート解除":"ミュート",onSelect:()=>{M()?s(e.pubkey):r(e.pubkey)}},{when:()=>e.pubkey===c(),content:()=>N()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{N()?Q():K()}}],{events:Le}=nr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:Vn()}],continuous:!1}));return w(Ls,{onClose:()=>e.onClose?.(),get children(){return[w(ae,{get when(){return $.isFetched},get fallback(){return"loading"},get children(){return[w(ae,{get when(){return _()?.banner},get fallback(){return VR()},keyed:!0,children:j=>(()=>{const ne=QR(),se=ne.firstChild;return At(se,"src",j),ne})()}),(()=>{const j=BR(),ne=j.firstChild,se=ne.firstChild,je=ne.nextSibling,Ee=je.firstChild;return I(se,w(ae,{get when(){return _()?.picture},keyed:!0,children:J=>(()=>{const Te=ZR();return At(Te,"src",J),Te})()})),I(Ee,w(_n,{get children(){return[w(Me,{get when(){return e.pubkey===c()},get children(){const J=TR();return J.$$click=()=>u(),J}}),w(Me,{get when(){return O.isLoading||O.isFetching},get children(){return AR()}}),w(Me,{get when(){return ee.isLoading},get children(){return IR()}}),w(Me,{get when(){return N()},get children(){const J=RR();return J.$$click=()=>Q(),J.addEventListener("mouseleave",()=>h(!1)),J.addEventListener("mouseenter",()=>h(!0)),I(J,w(ae,{get when(){return!g()},fallback:"フォロー解除",children:"フォロー中"})),Ae(()=>J.disabled=ee.isLoading),J}}),w(Me,{get when(){return!N()},get children(){const J=LR();return J.$$click=()=>K(),Ae(()=>J.disabled=ee.isLoading),J}})]}}),null),I(Ee,w(jg,{menu:te,get children(){const J=OR();return I(J,w(Hg,{})),J}}),null),I(je,w(_n,{get children(){return[w(Me,{get when(){return re.isLoading},get children(){return PR()}}),w(Me,{get when(){return G()},get children(){return MR()}})]}}),null),j})(),(()=>{const j=zR(),ne=j.firstChild,se=ne.firstChild,je=se.nextSibling,Ee=je.firstChild;return I(ne,w(ae,{get when(){return(_()?.display_name?.length??0)>0},get children(){const J=UR();return I(J,()=>_()?.display_name),J}}),se),I(se,w(ae,{get when(){return(_()?.name?.length??0)>0},get children(){const J=DR();return J.firstChild,I(J,()=>_()?.name,null),J}}),null),I(se,w(ae,{get when(){return(_()?.nip05?.length??0)>0},get children(){const J=jR();return I(J,()=>L()?.ident,null),I(J,w(_n,{get fallback(){return(()=>{const Te=XR();return I(Te,w(CR,{})),Te})()},get children(){return[w(Me,{get when(){return S.isLoading},get children(){const Te=HR();return I(Te,w(wR,{})),Te}}),w(Me,{get when(){return U()},get children(){const Te=FR();return I(Te,w(xR,{})),Te}})]}}),null),J}}),null),I(Ee,d),j})(),w(ae,{get when(){return(_()?.about??"").length>0},get children(){const j=NR();return I(j,()=>_()?.about),j}}),(()=>{const j=qR(),ne=j.firstChild,se=ne.firstChild,je=se.nextSibling;return I(je,w(ae,{get when(){return re.isFetched},get fallback(){return YR()},get children(){return q().length}})),I(j,w(ae,{get when(){return!t().hideCount},get children(){const Ee=WR(),J=Ee.firstChild,Te=J.nextSibling;return I(Te,w(ae,{get when(){return v()},get fallback(){return(()=>{const at=JR();return at.$$click=()=>b(!0),at})()},keyed:!0,get children(){return w(tL,{get pubkey(){return e.pubkey}})}})),Ee}}),null),j})(),w(ae,{get when(){return(_()?.website??"").length>0},get children(){const j=KR();return I(j,w(ae,{get when(){return _()?.website},keyed:!0,children:ne=>(()=>{const se=eL(),je=se.firstChild;return I(je,w(Cu,{})),I(se,w(cu,{class:"text-blue-500 underline",href:ne}),null),se})()})),j}})]}}),(()=>{const j=GR();return I(j,w(Di,{get events(){return Le()}})),j})()]}})};ot(["click"]);function rL(e,t){for(var r=-1,s=e==null?0:e.length;++r<s&&t(e[r],r,e)!==!1;);return e}var iL=rL,sL=Vr,oL=function(){try{var e=sL(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Np=oL,B0=Np;function aL(e,t,r){t=="__proto__"&&B0?B0(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Wp=aL,lL=Wp,cL=Bc,uL=Object.prototype,fL=uL.hasOwnProperty;function dL(e,t,r){var s=e[t];(!(fL.call(e,t)&&cL(s,r))||r===void 0&&!(t in e))&&lL(e,t,r)}var Su=dL,hL=Su,gL=Wp;function pL(e,t,r,s){var o=!r;r||(r={});for(var l=-1,c=t.length;++l<c;){var u=t[l],d=s?s(r[u],e[u],u,r,e):void 0;d===void 0&&(d=e[u]),o?gL(r,u,d):hL(r,u,d)}return r}var Os=pL,vL=Os,mL=Ia;function bL(e,t){return e&&vL(t,mL(t),e)}var yL=bL;function _L(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var wL=_L,$L=Ln,xL=_u,kL=wL,CL=Object.prototype,SL=CL.hasOwnProperty;function EL(e){if(!$L(e))return kL(e);var t=xL(e),r=[];for(var s in e)s=="constructor"&&(t||!SL.call(e,s))||r.push(s);return r}var TL=EL,AL=Ep,IL=TL,RL=Ap;function LL(e){return RL(e)?AL(e,!0):IL(e)}var Eu=LL,OL=Os,PL=Eu;function ML(e,t){return e&&OL(t,PL(t),e)}var BL=ML,oa={exports:{}};oa.exports;(function(e,t){var r=$n,s=t&&!t.nodeType&&t,o=s&&!0&&e&&!e.nodeType&&e,l=o&&o.exports===s,c=l?r.Buffer:void 0,u=c?c.allocUnsafe:void 0;function d(g,h){if(h)return g.slice();var v=g.length,b=u?u(v):new g.constructor(v);return g.copy(b),b}e.exports=d})(oa,oa.exports);var UL=oa.exports;function DL(e,t){var r=-1,s=e.length;for(t||(t=Array(s));++r<s;)t[r]=e[r];return t}var HL=DL,FL=Os,jL=hu;function zL(e,t){return FL(e,jL(e),t)}var NL=zL,WL=Tp,qL=WL(Object.getPrototypeOf,Object),Tu=qL,KL=du,GL=Tu,VL=hu,QL=kp,ZL=Object.getOwnPropertySymbols,XL=ZL?function(e){for(var t=[];e;)KL(t,VL(e)),e=GL(e);return t}:QL,qp=XL,YL=Os,JL=qp;function eO(e,t){return YL(e,JL(e),t)}var tO=eO,nO=xp,rO=qp,iO=Eu;function sO(e){return nO(e,iO,rO)}var Au=sO,oO=Object.prototype,aO=oO.hasOwnProperty;function lO(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&aO.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var cO=lO,U0=$p;function uO(e){var t=new e.constructor(e.byteLength);return new U0(t).set(new U0(e)),t}var Iu=uO,fO=Iu;function dO(e,t){var r=t?fO(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var hO=dO,gO=/\w*$/;function pO(e){var t=new e.constructor(e.source,gO.exec(e));return t.lastIndex=e.lastIndex,t}var vO=pO,D0=Ai,H0=D0?D0.prototype:void 0,F0=H0?H0.valueOf:void 0;function mO(e){return F0?Object(F0.call(e)):{}}var bO=mO,yO=Iu;function _O(e,t){var r=t?yO(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var wO=_O,$O=Iu,xO=hO,kO=vO,CO=bO,SO=wO,EO="[object Boolean]",TO="[object Date]",AO="[object Map]",IO="[object Number]",RO="[object RegExp]",LO="[object Set]",OO="[object String]",PO="[object Symbol]",MO="[object ArrayBuffer]",BO="[object DataView]",UO="[object Float32Array]",DO="[object Float64Array]",HO="[object Int8Array]",FO="[object Int16Array]",jO="[object Int32Array]",zO="[object Uint8Array]",NO="[object Uint8ClampedArray]",WO="[object Uint16Array]",qO="[object Uint32Array]";function KO(e,t,r){var s=e.constructor;switch(t){case MO:return $O(e);case EO:case TO:return new s(+e);case BO:return xO(e,r);case UO:case DO:case HO:case FO:case jO:case zO:case NO:case WO:case qO:return SO(e,r);case AO:return new s;case IO:case OO:return new s(e);case RO:return kO(e);case LO:return new s;case PO:return CO(e)}}var GO=KO,VO=Ln,j0=Object.create,QO=function(){function e(){}return function(t){if(!VO(t))return{};if(j0)return j0(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),ZO=QO,XO=ZO,YO=Tu,JO=_u;function eP(e){return typeof e.constructor=="function"&&!JO(e)?XO(YO(e)):{}}var tP=eP,nP=Ra,rP=Lr,iP="[object Map]";function sP(e){return rP(e)&&nP(e)==iP}var oP=sP,aP=oP,lP=bu,z0=yu,N0=z0&&z0.isMap,cP=N0?lP(N0):aP,uP=cP,fP=Ra,dP=Lr,hP="[object Set]";function gP(e){return dP(e)&&fP(e)==hP}var pP=gP,vP=pP,mP=bu,W0=yu,q0=W0&&W0.isSet,bP=q0?mP(q0):vP,yP=bP,_P=fu,wP=iL,$P=Su,xP=yL,kP=BL,CP=UL,SP=HL,EP=NL,TP=tO,AP=Ip,IP=Au,RP=Ra,LP=cO,OP=GO,PP=tP,MP=Mn,BP=pu,UP=uP,DP=Ln,HP=yP,FP=Ia,jP=Eu,zP=1,NP=2,WP=4,Kp="[object Arguments]",qP="[object Array]",KP="[object Boolean]",GP="[object Date]",VP="[object Error]",Gp="[object Function]",QP="[object GeneratorFunction]",ZP="[object Map]",XP="[object Number]",Vp="[object Object]",YP="[object RegExp]",JP="[object Set]",eM="[object String]",tM="[object Symbol]",nM="[object WeakMap]",rM="[object ArrayBuffer]",iM="[object DataView]",sM="[object Float32Array]",oM="[object Float64Array]",aM="[object Int8Array]",lM="[object Int16Array]",cM="[object Int32Array]",uM="[object Uint8Array]",fM="[object Uint8ClampedArray]",dM="[object Uint16Array]",hM="[object Uint32Array]",Ke={};Ke[Kp]=Ke[qP]=Ke[rM]=Ke[iM]=Ke[KP]=Ke[GP]=Ke[sM]=Ke[oM]=Ke[aM]=Ke[lM]=Ke[cM]=Ke[ZP]=Ke[XP]=Ke[Vp]=Ke[YP]=Ke[JP]=Ke[eM]=Ke[tM]=Ke[uM]=Ke[fM]=Ke[dM]=Ke[hM]=!0;Ke[VP]=Ke[Gp]=Ke[nM]=!1;function No(e,t,r,s,o,l){var c,u=t&zP,d=t&NP,g=t&WP;if(r&&(c=o?r(e,s,o,l):r(e)),c!==void 0)return c;if(!DP(e))return e;var h=MP(e);if(h){if(c=LP(e),!u)return SP(e,c)}else{var v=RP(e),b=v==Gp||v==QP;if(BP(e))return CP(e,u);if(v==Vp||v==Kp||b&&!o){if(c=d||b?{}:PP(e),!u)return d?TP(e,kP(c,e)):EP(e,xP(c,e))}else{if(!Ke[v])return o?e:{};c=OP(e,v,u)}}l||(l=new _P);var _=l.get(e);if(_)return _;l.set(e,c),HP(e)?e.forEach(function(S){c.add(No(S,t,r,S,e,l))}):UP(e)&&e.forEach(function(S,L){c.set(L,No(S,t,r,L,e,l))});var $=g?d?IP:AP:d?jP:FP,k=h?void 0:$(e);return wP(k||e,function(S,L){k&&(L=S,S=e[L]),$P(c,L,No(S,t,r,L,e,l))}),c}var gM=No;function pM(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var vM=pM;function mM(e,t,r){var s=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var l=Array(o);++s<o;)l[s]=e[s+t];return l}var bM=mM,yM=Oa,_M=bM;function wM(e,t){return t.length<2?e:yM(e,_M(t,0,-1))}var $M=wM,xM=ji,kM=vM,CM=$M,SM=zi;function EM(e,t){return t=xM(t,e),e=CM(e,t),e==null||delete e[SM(kM(t))]}var TM=EM,AM=Ii,IM=Tu,RM=Lr,LM="[object Object]",OM=Function.prototype,PM=Object.prototype,Qp=OM.toString,MM=PM.hasOwnProperty,BM=Qp.call(Object);function UM(e){if(!RM(e)||AM(e)!=LM)return!1;var t=IM(e);if(t===null)return!0;var r=MM.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Qp.call(r)==BM}var DM=UM,HM=DM;function FM(e){return HM(e)?void 0:e}var jM=FM,K0=Ai,zM=gu,NM=Mn,G0=K0?K0.isConcatSpreadable:void 0;function WM(e){return NM(e)||zM(e)||!!(G0&&e&&e[G0])}var qM=WM,KM=du,GM=qM;function Zp(e,t,r,s,o){var l=-1,c=e.length;for(r||(r=GM),o||(o=[]);++l<c;){var u=e[l];t>0&&r(u)?t>1?Zp(u,t-1,r,s,o):KM(o,u):s||(o[o.length]=u)}return o}var VM=Zp,QM=VM;function ZM(e){var t=e==null?0:e.length;return t?QM(e,1):[]}var XM=ZM;function YM(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var JM=YM,eB=JM,V0=Math.max;function tB(e,t,r){return t=V0(t===void 0?e.length-1:t,0),function(){for(var s=arguments,o=-1,l=V0(s.length-t,0),c=Array(l);++o<l;)c[o]=s[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=s[o];return u[t]=r(c),eB(e,this,u)}}var nB=tB;function rB(e){return function(){return e}}var iB=rB,sB=iB,Q0=Np,oB=Dp,aB=Q0?function(e,t){return Q0(e,"toString",{configurable:!0,enumerable:!1,value:sB(t),writable:!0})}:oB,lB=aB,cB=800,uB=16,fB=Date.now;function dB(e){var t=0,r=0;return function(){var s=fB(),o=uB-(s-r);if(r=s,o>0){if(++t>=cB)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var hB=dB,gB=lB,pB=hB,vB=pB(gB),mB=vB,bB=XM,yB=nB,_B=mB;function wB(e){return _B(yB(e,void 0,bB),e+"")}var $B=wB,xB=xu,kB=gM,CB=TM,SB=ji,EB=Os,TB=jM,AB=$B,IB=Au,RB=1,LB=2,OB=4,PB=AB(function(e,t){var r={};if(e==null)return r;var s=!1;t=xB(t,function(l){return l=SB(l,e),s||(s=l.length>1),l}),EB(e,IB(e),r),s&&(r=kB(r,RB|LB|OB,TB));for(var o=t.length;o--;)CB(r,t[o]);return r}),MB=PB;const BB=xs(MB);var UB="Expected a function";function DB(e){if(typeof e!="function")throw new TypeError(UB);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var HB=DB,FB=Su,jB=ji,zB=vu,Z0=Ln,NB=zi;function WB(e,t,r,s){if(!Z0(e))return e;t=jB(t,e);for(var o=-1,l=t.length,c=l-1,u=e;u!=null&&++o<l;){var d=NB(t[o]),g=r;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=c){var h=u[d];g=s?s(h,d,u):void 0,g===void 0&&(g=Z0(h)?h:zB(t[o+1])?[]:{})}FB(u,d,g),u=u[d]}return e}var qB=WB,KB=Oa,GB=qB,VB=ji;function QB(e,t,r){for(var s=-1,o=t.length,l={};++s<o;){var c=t[s],u=KB(e,c);r(u,c)&&GB(l,VB(c,e),u)}return l}var ZB=QB,XB=xu,YB=ku,JB=ZB,eU=Au;function tU(e,t){if(e==null)return{};var r=XB(eU(e),function(s){return[s]});return t=YB(t),JB(e,r,function(s,o){return t(s,o[0])})}var nU=tU,rU=ku,iU=HB,sU=nU;function oU(e,t){return sU(e,iU(rU(t)))}var aU=oU;const lU=xs(aU),cU=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),uU=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),fU=P('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),dU=P('<div class="px-4 pt-4">読み込み中...'),hU=P('<div><span class="font-bold">その他の項目</span><div>'),gU=P('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),pU=P('<div class="h-24 shrink-0">'),vU=P('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),mU="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",bU="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",yU=new RegExp(`^${mU}$`),Xp=new RegExp(`^${bU}$`),_U=e=>yU.test(e),wU=e=>Xp.test(e),$U=e=>{const t=tr(),{config:r}=Pe(),[s,o]=me(""),[l,c]=me(""),[u,d]=me(""),[g,h]=me(""),[v,b]=me(""),[_,$]=me(""),[k,S]=me(""),[L,U]=me(""),{profile:M,invalidateProfile:R,query:E}=Ui(()=>Vt([t()])(([Q])=>({pubkey:Q}))),{updateProfile:O}=Aa(),N=qr({mutationKey:["updateProfile"],mutationFn:(...Q)=>O(...Q).then(te=>Promise.allSettled(te.map(Ir(1e4)))),onSuccess:Q=>{const te=Q.filter(j=>j.status==="fulfilled").length,Le=Q.length-te;te===Q.length?window.alert("更新しました"):te>0?window.alert(`${Le}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),R().then(()=>E.refetch()).catch(j=>console.error(j)),e.onClose()},onError:Q=>{console.error("failed to delete",Q)}}),q=()=>E.isLoading||N.isLoading,re=()=>q(),G=()=>BB(M(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),ee=Q=>{Q.preventDefault();const te=t();if(te==null)return;const Le=lU({picture:s(),banner:l(),name:u(),display_name:g(),about:v(),website:_(),nip05:k(),lud06:_U(L())?L():null,lud16:wU(L())?L():null},j=>j==null||j.length===0);N.mutate({relayUrls:r().relayUrls,pubkey:te,profile:Le,otherProperties:G()})},K=Q=>Q.key==="Enter"&&Q.preventDefault();return un(()=>{const Q=M();Q!=null&&(E.refetch().catch(te=>console.error(te)),fc(()=>{o(te=>Q.picture??te),c(te=>Q.banner??te),d(te=>Q.name??te),h(te=>Q.display_name??te),b(te=>Q.about??te),$(te=>Q.website??te),S(te=>Q.nip05??te),Q.lud16!=null?U(Q.lud16):Q.lud06!=null&&U(Q.lud06)}))}),w(Ls,{closeButton:()=>w(a1,{}),get onClose(){return e.onClose},get children(){return[(()=>{const Q=fU(),te=Q.firstChild;return I(Q,w(ae,{get when(){return l().length>0},get fallback(){return pU()},keyed:!0,get children(){const Le=cU(),j=Le.firstChild;return Ae(()=>At(j,"src",l())),Le}}),te),I(te,w(ae,{get when(){return s().length>0},get children(){const Le=uU();return Ae(()=>At(Le,"src",s())),Le}})),Q})(),w(ae,{get when(){return q()},get children(){return dU()}}),(()=>{const Q=gU(),te=Q.firstChild,Le=te.firstChild,j=Le.firstChild,ne=j.nextSibling,se=Le.nextSibling,je=se.firstChild,Ee=je.nextSibling,J=se.nextSibling,Te=J.firstChild,at=Te.nextSibling,rr=at.firstChild,Z=rr.nextSibling,lt=J.nextSibling,Zt=lt.firstChild,xt=Zt.nextSibling,oe=lt.nextSibling,ft=oe.firstChild,rt=ft.nextSibling,yt=oe.nextSibling,kn=yt.firstChild,Xe=kn.nextSibling,Rt=yt.nextSibling,ir=Rt.firstChild,tt=ir.nextSibling,kt=Rt.nextSibling,Bn=kt.firstChild,he=Bn.nextSibling,Oe=he.nextSibling,Ge=kt.nextSibling,dt=Ge.firstChild,Lt=dt.nextSibling;return te.addEventListener("submit",ee),ne.$$keydown=K,ne.addEventListener("blur",le=>o(le.currentTarget.value)),Ee.$$keydown=K,Ee.addEventListener("blur",le=>c(le.currentTarget.value)),Z.$$keydown=K,Z.addEventListener("change",le=>d(le.currentTarget.value)),xt.$$keydown=K,xt.addEventListener("change",le=>h(le.currentTarget.value)),rt.addEventListener("change",le=>b(le.currentTarget.value)),Xe.$$keydown=K,Xe.addEventListener("change",le=>$(le.currentTarget.value)),tt.$$keydown=K,tt.addEventListener("change",le=>S(le.currentTarget.value)),Oe.$$keydown=K,Oe.addEventListener("change",le=>U(le.currentTarget.value)),I(te,w(ae,{get when(){return Object.entries(G()).length>0},get children(){const le=hU(),Xt=le.firstChild,be=Xt.nextSibling;return I(be,w(Dt,{get each(){return Object.entries(G())},children:([Ne,Ot])=>(()=>{const Ct=vU(),Yt=Ct.firstChild,fn=Yt.nextSibling;return I(Yt,Ne),I(fn,Ot),Ct})()})),le}}),Ge),Lt.$$click=()=>e.onClose(),I(te,w(ae,{get when(){return N.isLoading},children:"保存中..."}),null),Ae(le=>{const Xt=re(),be=re(),Ne=re(),Ot=re(),Ct=re(),Yt=re(),fn=Xp.source,Un=re(),Qr=re(),Zr=N.isLoading;return Xt!==le._v$&&(ne.disabled=le._v$=Xt),be!==le._v$2&&(Ee.disabled=le._v$2=be),Ne!==le._v$3&&(Z.disabled=le._v$3=Ne),Ot!==le._v$4&&(xt.disabled=le._v$4=Ot),Ct!==le._v$5&&(rt.disabled=le._v$5=Ct),Yt!==le._v$6&&(Xe.disabled=le._v$6=Yt),fn!==le._v$7&&At(tt,"pattern",le._v$7=fn),Un!==le._v$8&&(tt.disabled=le._v$8=Un),Qr!==le._v$9&&(Oe.disabled=le._v$9=Qr),Zr!==le._v$10&&(dt.disabled=le._v$10=Zr),le},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Ae(()=>ne.value=s()),Ae(()=>Ee.value=l()),Ae(()=>Z.value=u()),Ae(()=>xt.value=g()),Ae(()=>rt.value=v()),Ae(()=>Xe.value=_()),Ae(()=>tt.value=k()),Ae(()=>Oe.value=L()),Q})()]}})};ot(["keydown","click"]);const xU=()=>{const e=tr(),{modalState:t,showProfile:r,closeModal:s}=Rr();return w(ae,{get when(){return t()},keyed:!0,children:o=>w(_n,{get children(){return[w(Me,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:l=>w(nL,{pubkey:l,onClose:s})}),w(Me,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return w($U,{onClose:()=>Vt([e()])(([l])=>{r(l)})})}}),w(Me,{get when(){return o.type==="AddColumn"},get children(){return w(yR,{onClose:s})}}),w(Me,{get when(){return o.type==="About"},get children(){return w(mR,{onClose:s})}})]}})})},kU=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),CU=(e={})=>(()=>{const t=kU();return Ze(t,e,!0,!0),t})(),SU=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),X0=(e={})=>(()=>{const t=SU();return Ze(t,e,!0,!0),t})(),EU=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),TU=(e={})=>(()=>{const t=EU();return Ze(t,e,!0,!0),t})(),AU=P('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),IU=P('<div class="py-2"><h3 class="font-bold">リレー</h3><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Oc=P('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),RU=P('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),LU=P('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),OU=P('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),PU=P('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),MU=P('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),BU=P('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),UU=P('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),DU=P('<div class="p-4"><h2 class="flex-1 text-center text-lg font-bold">設定'),HU=()=>{const e=tr(),{showProfile:t,showProfileEdit:r}=Rr();return(()=>{const s=AU(),o=s.firstChild,l=o.nextSibling,c=l.firstChild,u=c.nextSibling;return c.$$click=()=>Vt([e()])(([d])=>{t(d)}),u.$$click=()=>r(),s})()},FU=()=>{const{config:e,addRelay:t,removeRelay:r}=Pe(),[s,o]=me(""),l=c=>{c.preventDefault(),s().length!==0&&(t(s()),o(""))};return(()=>{const c=IU(),u=c.firstChild,d=u.nextSibling,g=d.nextSibling,h=g.firstChild;return I(d,w(Dt,{get each(){return e().relayUrls},children:v=>(()=>{const b=Oc(),_=b.firstChild,$=_.nextSibling;return I(_,v),$.$$click=()=>r(v),I($,w($s,{})),b})()})),g.addEventListener("submit",l),h.addEventListener("change",v=>o(v.currentTarget.value)),Ae(()=>h.value=s()),c})()},jU=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],zU=()=>{const{config:e,setConfig:t}=Pe(),r=s=>{t(o=>({...o,dateFormat:s}))};return(()=>{const s=RU(),o=s.firstChild,l=o.nextSibling;return I(l,w(Dt,{each:jU,children:({id:c,name:u,example:d})=>(()=>{const g=LU(),h=g.firstChild,v=h.nextSibling;return h.$$click=()=>r(c),I(h,u),I(v,d),Ae(b=>{const _=e().dateFormat===c,$=e().dateFormat===c,k=e().dateFormat!==c,S=e().dateFormat!==c;return _!==b._v$&&h.classList.toggle("bg-rose-300",b._v$=_),$!==b._v$2&&h.classList.toggle("text-white",b._v$2=$),k!==b._v$3&&h.classList.toggle("bg-white",b._v$3=k),S!==b._v$4&&h.classList.toggle("text-rose-300",b._v$4=S),b},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),s})()},vs=e=>(()=>{const t=OU();return t.$$click=r=>e.onClick(r),Ae(r=>{const s=!e.value,o=!e.value,l=!!e.value,c=!!e.value,u=e.value;return s!==r._v$5&&t.classList.toggle("bg-white",r._v$5=s),o!==r._v$6&&t.classList.toggle("justify-start",r._v$6=o),l!==r._v$7&&t.classList.toggle("bg-rose-300",r._v$7=l),c!==r._v$8&&t.classList.toggle("justify-end",r._v$8=c),u!==r._v$9&&At(t,"area-label",r._v$9=u),r},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),NU=()=>{const{config:e,setConfig:t}=Pe(),r=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},s=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=PU(),l=o.firstChild,c=l.nextSibling,u=c.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,I(u,w(vs,{get value(){return e().useEmojiReaction},onClick:()=>r()}),null),I(d,w(vs,{get value(){return e().showEmojiReaction},onClick:()=>s()}),null),o})()},WU=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:r,removeMutedKeyword:s}=Pe(),[o,l]=me(""),c=u=>{u.preventDefault(),o().length!==0&&(r(o()),l(""))};return[(()=>{const u=MU(),d=u.firstChild,g=d.nextSibling;return I(g,w(Dt,{get each(){return e().mutedPubkeys},children:h=>(()=>{const v=Oc(),b=v.firstChild,_=b.nextSibling;return I(b,w(Sa,{pubkey:h})),_.$$click=()=>t(h),I(_,w($s,{})),v})()})),u})(),(()=>{const u=BU(),d=u.firstChild,g=d.nextSibling,h=g.nextSibling,v=h.firstChild;return I(g,w(Dt,{get each(){return e().mutedKeywords},children:b=>(()=>{const _=Oc(),$=_.firstChild,k=$.nextSibling;return I($,b),k.$$click=()=>s(b),I(k,w($s,{})),_})()})),h.addEventListener("submit",c),v.addEventListener("change",b=>l(b.currentTarget.value)),Ae(()=>v.value=o()),u})()]},qU=()=>{const{config:e,setConfig:t}=Pe(),r=()=>{t(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},s=()=>{t(l=>({...l,showImage:!(l.showImage??!0)}))},o=()=>{t(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=UU(),c=l.firstChild,u=c.nextSibling,d=u.firstChild;d.firstChild;const g=d.nextSibling;g.firstChild;const h=g.nextSibling;return h.firstChild,I(d,w(vs,{get value(){return e().keepOpenPostForm},onClick:()=>r()}),null),I(g,w(vs,{get value(){return e().showImage},onClick:()=>s()}),null),I(h,w(vs,{get value(){return e().hideCount},onClick:()=>o()}),null),l})()},KU=e=>w(Ls,{get onClose(){return e.onClose},get children(){const t=DU();return t.firstChild,I(t,w(HU,{}),null),I(t,w(FU,{}),null),I(t,w(zU,{}),null),I(t,w(NU,{}),null),I(t,w(qU,{}),null),I(t,w(WU,{}),null),t}});ot(["click"]);const GU=P('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),VU=P('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),QU=P('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),ZU=()=>{let e,t;const{saveColumn:r}=Pe(),s=Rs(),[o,l]=me(""),c=u=>{u.preventDefault(),r(ru({query:o()})),s({command:"moveToLastColumn"}).catch(d=>console.log(d)),e?.close(),l("")};return w(ou,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=VU();return I(u,w(X0,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=GU(),d=u.firstChild,g=d.nextSibling;u.addEventListener("submit",c),d.addEventListener("change",v=>l(v.currentTarget.value));const h=t;return typeof h=="function"?An(h,d):t=d,I(g,w(X0,{})),Ae(()=>d.value=o()),u}})},XU=()=>{let e;const{showAddColumn:t,showAbout:r}=Rr(),{config:s}=Pe(),[o,l]=me(!1),[c,u]=me(!1),d=()=>{e?.focus(),e?.click()},g=()=>l(!0),h=()=>l(!1),v=()=>l(b=>!b);return Ec(()=>({commandType:"openPostForm",handler:()=>{g(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const b=QU(),_=b.firstChild,$=_.firstChild,k=$.firstChild,S=$.nextSibling,L=S.nextSibling,U=L.firstChild,M=U.nextSibling,R=M.nextSibling,E=R.firstChild,O=_.nextSibling;return k.$$click=()=>v(),I(k,w(TU,{})),I($,w(ZU,{}),null),U.$$click=()=>t(),I(U,w(Fg,{})),M.$$click=()=>u(N=>!N),I(M,w(CU,{})),R.$$click=()=>r(),I(O,w(vp,{textAreaRef:N=>{e=N},onClose:h})),I(b,w(ae,{get when(){return c()},get children(){return w(KU,{onClose:()=>u(!1)})}}),null),Ae(N=>{const q=Pc("images/rabbit_app_256.png"),re=!!(o()||s().keepOpenPostForm),G=!(o()||s().keepOpenPostForm);return q!==N._v$&&At(E,"src",N._v$=q),re!==N._v$2&&O.classList.toggle("static",N._v$2=re),G!==N._v$3&&O.classList.toggle("hidden",N._v$3=G),N},{_v$:void 0,_v$2:void 0,_v$3:void 0}),b})()};ot(["click"]);var YU=$n,JU=function(){return YU.Date.now()},eD=JU,tD=/\s/;function nD(e){for(var t=e.length;t--&&tD.test(e.charAt(t)););return t}var rD=nD,iD=rD,sD=/^\s+/;function oD(e){return e&&e.slice(0,iD(e)+1).replace(sD,"")}var aD=oD,lD=aD,Y0=Ln,cD=La,J0=0/0,uD=/^[-+]0x[0-9a-f]+$/i,fD=/^0b[01]+$/i,dD=/^0o[0-7]+$/i,hD=parseInt;function gD(e){if(typeof e=="number")return e;if(cD(e))return J0;if(Y0(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Y0(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=lD(e);var r=fD.test(e);return r||dD.test(e)?hD(e.slice(2),r?2:8):uD.test(e)?J0:+e}var pD=gD,vD=Ln,cc=eD,e1=pD,mD="Expected a function",bD=Math.max,yD=Math.min;function _D(e,t,r){var s,o,l,c,u,d,g=0,h=!1,v=!1,b=!0;if(typeof e!="function")throw new TypeError(mD);t=e1(t)||0,vD(r)&&(h=!!r.leading,v="maxWait"in r,l=v?bD(e1(r.maxWait)||0,t):l,b="trailing"in r?!!r.trailing:b);function _(O){var N=s,q=o;return s=o=void 0,g=O,c=e.apply(q,N),c}function $(O){return g=O,u=setTimeout(L,t),h?_(O):c}function k(O){var N=O-d,q=O-g,re=t-N;return v?yD(re,l-q):re}function S(O){var N=O-d,q=O-g;return d===void 0||N>=t||N<0||v&&q>=l}function L(){var O=cc();if(S(O))return U(O);u=setTimeout(L,k(O))}function U(O){return u=void 0,b&&s?_(O):(s=o=void 0,c)}function M(){u!==void 0&&clearTimeout(u),g=0,s=d=o=u=void 0}function R(){return u===void 0?c:U(cc())}function E(){var O=cc(),N=S(O);if(s=arguments,o=this,d=O,N){if(u===void 0)return $(d);if(v)return clearTimeout(u),u=setTimeout(L,t),_(d)}return u===void 0&&(u=setTimeout(L,t)),c}return E.cancel=M,E.flush=R,E}var wD=_D,$D=wD,xD=Ln,kD="Expected a function";function CD(e,t,r){var s=!0,o=!0;if(typeof e!="function")throw new TypeError(kD);return xD(r)&&(s="leading"in r?!!r.leading:s,o="trailing"in r?!!r.trailing:o),$D(e,t,{leading:s,maxWait:t,trailing:o})}var SD=CD;const ED=xs(SD),TD=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],AD=e=>{const t=new Map;return e.forEach(r=>{t.set(r.key,r)}),t},ID=({shortcuts:e=TD,onShortcut:t})=>{const r=AD(e);un(()=>{const s=ED(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const l=r.get(o.key);l!=null&&t(l)},50);window.addEventListener("keydown",s),Tr(()=>{window.removeEventListener("keydown",s)})})},RD=()=>{const e=Rs();ID({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),r=>console.error(r))}})},LD=P('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),BD=()=>{RD();const e=qw(),{persistStatus:t}=Qw(),r=ka(),{config:s,initializeColumns:o}=Pe(),l=tr();return Xn(()=>{s().relayUrls.map(async c=>{(await r().ensureRelay(c)).on("notice",d=>{console.error(`NOTICE: ${c}: ${d}`)})})}),Xn(()=>{const c=l();c!=null&&o({pubkey:c})}),un(()=>{t().loggedIn||e("/hello")}),Kw(c=>{console.error("uncaught error: ",c)}),(()=>{const c=LD();return I(c,w(XU,{}),null),I(c,w(cR,{}),null),I(c,w(xU,{}),null),c})()};export{BD as default};
//# sourceMappingURL=Home-eef4ba89.js.map
