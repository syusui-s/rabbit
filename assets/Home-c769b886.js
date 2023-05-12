import{S as e1,s as ac,n as Aw,i as oh,a as ah,t as Iw,f as Rw,c as Lw,r as lh,b as Ow,d as t1,g as Pw,u as Si,e as n1,h as lc,o as Cr,j as wn,k as gs,l as ia,p as ch,m as Qe,q as P,v as st,w as be,x as I,y as $,z as oe,A as xr,F as Bt,B as Ee,C as _n,D as Mw,E as ze,G as sa,M as Pe,H as yn,I as St,J as Bw,K as Uw,L as Dw,N as Hw,O as Fw,P as jw}from"./index-1f6db63e.js";import{c as vi,u as ui,a as zw,b as Nw,r as Lc,d as Ww}from"./usePersistStatus-73d9905e.js";class qw extends e1{constructor(t,r){super(),this.client=t,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),uh(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return cc(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return cc(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,r){const s=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),ac(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const l=this.hasListeners();l&&fh(this.currentQuery,o,this.options,s)&&this.executeFetch(),this.updateResult(r),l&&(this.currentQuery!==o||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const c=this.computeRefetchInterval();l&&(this.currentQuery!==o||this.options.enabled!==s.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)}getOptimisticResult(t){const r=this.client.getQueryCache().build(this.client,t);return this.createResult(r,t)}getCurrentResult(){return this.currentResult}trackResult(t){const r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),t[s])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...r}={}){return this.fetch({...r,meta:{refetchPage:t}})}fetchOptimistic(t){const r=this.client.defaultQueryOptions(t),s=this.client.getQueryCache().build(this.client,r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(t){var r;return this.executeFetch({...t,cancelRefetch:(r=t.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let r=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(Aw)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),oh||this.currentResult.isStale||!ah(this.options.staleTime))return;const r=Iw(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(oh||this.options.enabled===!1||!ah(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Rw.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,r){const s=this.currentQuery,o=this.options,l=this.currentResult,c=this.currentResultState,u=this.currentResultOptions,d=t!==s,p=d?t.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:v}=t;let{dataUpdatedAt:m,error:y,errorUpdatedAt:w,fetchStatus:k,status:S}=v,L=!1,U=!1,B;if(r._optimisticResults){const z=this.hasListeners(),ne=!z&&uh(t,r),V=z&&fh(t,s,r,o);(ne||V)&&(k=Lw(t.options.networkMode)?"fetching":"paused",m||(S="loading")),r._optimisticResults==="isRestoring"&&(k="idle")}if(r.keepPreviousData&&!v.dataUpdatedAt&&h!=null&&h.isSuccess&&S!=="error")B=h.data,m=h.dataUpdatedAt,S=h.status,L=!0;else if(r.select&&typeof v.data<"u")if(l&&v.data===c?.data&&r.select===this.selectFn)B=this.selectResult;else try{this.selectFn=r.select,B=r.select(v.data),B=lh(l?.data,B,r),this.selectResult=B,this.selectError=null}catch(z){this.selectError=z}else B=v.data;if(typeof r.placeholderData<"u"&&typeof B>"u"&&S==="loading"){let z;if(l!=null&&l.isPlaceholderData&&r.placeholderData===u?.placeholderData)z=l.data;else if(z=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof z<"u")try{z=r.select(z),this.selectError=null}catch(ne){this.selectError=ne}typeof z<"u"&&(S="success",B=lh(l?.data,z,r),U=!0)}this.selectError&&(y=this.selectError,B=this.selectResult,w=Date.now(),S="error");const R=k==="fetching",E=S==="loading",O=S==="error";return{status:S,fetchStatus:k,isLoading:E,isSuccess:S==="success",isError:O,isInitialLoading:E&&R,data:B,dataUpdatedAt:m,error:y,errorUpdatedAt:w,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>p.dataUpdateCount||v.errorUpdateCount>p.errorUpdateCount,isFetching:R,isRefetching:R&&!E,isLoadingError:O&&v.dataUpdatedAt===0,isPaused:k==="paused",isPlaceholderData:U,isPreviousData:L,isRefetchError:O&&v.dataUpdatedAt!==0,isStale:Oc(t,r),refetch:this.refetch,remove:this.remove}}updateResult(t){const r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,ac(s,r))return;this.currentResult=s;const o={cache:!0},l=()=>{if(!r)return!0;const{notifyOnChangeProps:c}=this.options;if(c==="all"||!c&&!this.trackedProps.size)return!0;const u=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const p=d;return this.currentResult[p]!==r[p]&&u.has(p)})};t?.listeners!==!1&&l()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const r={};t.type==="success"?r.onSuccess=!t.manual:t.type==="error"&&!Ow(t.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(t){t1.batch(()=>{if(t.onSuccess){var r,s,o,l;(r=(s=this.options).onSuccess)==null||r.call(s,this.currentResult.data),(o=(l=this.options).onSettled)==null||o.call(l,this.currentResult.data,null)}else if(t.onError){var c,u,d,p;(c=(u=this.options).onError)==null||c.call(u,this.currentResult.error),(d=(p=this.options).onSettled)==null||d.call(p,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Kw(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function uh(e,t){return Kw(e,t)||e.state.dataUpdatedAt>0&&cc(e,t,t.refetchOnMount)}function cc(e,t,r){if(t.enabled!==!1){const s=typeof r=="function"?r(e):r;return s==="always"||s!==!1&&Oc(e,t)}return!1}function fh(e,t,r,s){return r.enabled!==!1&&(e!==t||s.enabled===!1)&&(!r.suspense||e.state.status!=="error")&&Oc(e,r)}function Oc(e,t){return e.isStaleByTime(t.staleTime)}class Gw extends e1{constructor(t,r){super(),this.client=t,this.setOptions(r),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const s=this.options;this.options=this.client.defaultMutationOptions(t),ac(s,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(r=this.currentMutation)==null||r.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const r={listeners:!0};t.type==="success"?r.onSuccess=!0:t.type==="error"&&(r.onError=!0),this.notify(r)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,r){return this.mutateOptions=r,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:Pw(),r={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=r}notify(t){t1.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var r,s,o,l;(r=(s=this.mutateOptions).onSuccess)==null||r.call(s,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(l=this.mutateOptions).onSettled)==null||o.call(l,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var c,u,d,p;(c=(u=this.mutateOptions).onError)==null||c.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(p=this.mutateOptions).onSettled)==null||d.call(p,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)})})}}function Vw(e){return typeof e=="function"}function dh(e,t,r){if(!Vw(e)){const{queryKey:s,...o}=e;return s?{...o,queryKey:s()}:e}return typeof t=="function"?{...r,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function r1(e,t){return typeof e=="function"?e(...t):!!e}function Qw(e,t){const r=Si({context:e.context}),s=Symbol("empty"),o=r.defaultQueryOptions(e);o._optimisticResults="optimistic";const l=new t(r,o),[c,u]=vi(l.getOptimisticResult(o)),[d,{refetch:p,mutate:h}]=n1(()=>new Promise(w=>{c.isFetching&&c.isLoading||(ui(c.data)===s&&w(void 0),w(ui(c.data)))}));lc(()=>{h(()=>ui(c.data)),p()});let v=[];const m=l.subscribe(w=>{v.push(()=>{lc(()=>{const k={...ui(w)};k.data===void 0&&(k.data=s),u(ui(k)),h(()=>ui(w.data)),p()})}),queueMicrotask(()=>{const k=v.pop();k&&k(),v=[]})});Cr(()=>m()),wn(()=>{l.setOptions(o,{listeners:!1})}),gs(()=>{const w=r.defaultQueryOptions(e);l.setOptions(w)}),gs(ia(()=>c.status,()=>{if(c.isError&&!c.isFetching&&r1(l.options.useErrorBoundary,[c.error,l.getCurrentQuery()]))throw c.error}));const y={get(w,k){return k==="data"?d():Reflect.get(w,k)}};return new Proxy(c,y)}function Ei(e,t,r){const[s,o]=vi(dh(e,t,r));return gs(()=>{const l=dh(e,t,r);o(l)}),Qw(s,qw)}function Nr(e,t,r){const[s,o]=vi(ch(e,t,r)),l=Si({context:s.context}),c=new Gw(l,s),u=(v,m)=>{c.mutate(v,m).catch(Zw)},[d,p]=vi({...c.getCurrentResult(),mutate:u,mutateAsync:c.getCurrentResult().mutate});gs(()=>{const v=ch(e,t,r);o(v),c.setOptions(v)}),gs(ia(()=>d.status,()=>{if(d.isError&&r1(c.options.useErrorBoundary,[d.error]))throw d.error}));const h=c.subscribe(v=>{p({...v,mutate:u,mutateAsync:v.mutate})});return Cr(h),d}function Zw(){}const Xw=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),i1=(e={})=>(()=>{const t=Xw();return Qe(t,e,!0,!0),t})();var Vn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ws(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function oa(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function s(){if(this instanceof s){var o=[null];o.push.apply(o,arguments);var l=Function.bind.apply(t,o);return new l}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(r,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}),r}var jo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */jo.exports;(function(e,t){(function(){var r,s="4.17.21",o=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",p=500,h="__lodash_placeholder__",v=1,m=2,y=4,w=1,k=2,S=1,L=2,U=4,B=8,R=16,E=32,O=64,W=128,z=256,ne=512,V=30,Y="...",H=800,Z=16,he=1,te=2,K=3,re=1/0,de=9007199254740991,Te=17976931348623157e292,Re=0/0,se=4294967295,Fe=se-1,un=se>>>1,J=[["ary",W],["bind",S],["bindKey",L],["curry",B],["curryRight",R],["flip",ne],["partial",E],["partialRight",O],["rearg",z]],Je="[object Arguments]",Dt="[object Array]",ae="[object AsyncFunction]",et="[object Boolean]",ot="[object Date]",Tt="[object DOMException]",Ht="[object Error]",At="[object Function]",Ft="[object GeneratorFunction]",lt="[object Map]",It="[object Number]",vt="[object Null]",dt="[object Object]",pe="[object Promise]",Ze="[object Proxy]",Me="[object RegExp]",Be="[object Set]",Ue="[object String]",at="[object Symbol]",G="[object Undefined]",ht="[object WeakMap]",Mn="[object WeakSet]",jt="[object ArrayBuffer]",Rt="[object DataView]",Xt="[object Float32Array]",Bn="[object Float64Array]",er="[object Int8Array]",Gr="[object Int16Array]",Vr="[object Int32Array]",Qr="[object Uint8Array]",Ia="[object Uint8ClampedArray]",Ra="[object Uint16Array]",La="[object Uint32Array]",Zg=/\b__p \+= '';/g,Xg=/\b(__p \+=) '' \+/g,Yg=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Iu=/&(?:amp|lt|gt|quot|#39);/g,Ru=/[&<>"']/g,Jg=RegExp(Iu.source),ev=RegExp(Ru.source),tv=/<%-([\s\S]+?)%>/g,nv=/<%([\s\S]+?)%>/g,Lu=/<%=([\s\S]+?)%>/g,rv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,iv=/^\w*$/,sv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Oa=/[\\^$.*+?()[\]{}|]/g,ov=RegExp(Oa.source),Pa=/^\s+/,av=/\s/,lv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,cv=/\{\n\/\* \[wrapped with (.+)\] \*/,uv=/,? & /,fv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,dv=/[()=,{}\[\]\/\s]/,hv=/\\(\\)?/g,pv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ou=/\w*$/,gv=/^[-+]0x[0-9a-f]+$/i,vv=/^0b[01]+$/i,mv=/^\[object .+?Constructor\]$/,bv=/^0o[0-7]+$/i,yv=/^(?:0|[1-9]\d*)$/,_v=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ls=/($^)/,wv=/['\n\r\u2028\u2029\\]/g,Os="\\ud800-\\udfff",$v="\\u0300-\\u036f",xv="\\ufe20-\\ufe2f",kv="\\u20d0-\\u20ff",Pu=$v+xv+kv,Mu="\\u2700-\\u27bf",Bu="a-z\\xdf-\\xf6\\xf8-\\xff",Cv="\\xac\\xb1\\xd7\\xf7",Sv="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ev="\\u2000-\\u206f",Tv=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Uu="A-Z\\xc0-\\xd6\\xd8-\\xde",Du="\\ufe0e\\ufe0f",Hu=Cv+Sv+Ev+Tv,Ma="['’]",Av="["+Os+"]",Fu="["+Hu+"]",Ps="["+Pu+"]",ju="\\d+",Iv="["+Mu+"]",zu="["+Bu+"]",Nu="[^"+Os+Hu+ju+Mu+Bu+Uu+"]",Ba="\\ud83c[\\udffb-\\udfff]",Rv="(?:"+Ps+"|"+Ba+")",Wu="[^"+Os+"]",Ua="(?:\\ud83c[\\udde6-\\uddff]){2}",Da="[\\ud800-\\udbff][\\udc00-\\udfff]",Zr="["+Uu+"]",qu="\\u200d",Ku="(?:"+zu+"|"+Nu+")",Lv="(?:"+Zr+"|"+Nu+")",Gu="(?:"+Ma+"(?:d|ll|m|re|s|t|ve))?",Vu="(?:"+Ma+"(?:D|LL|M|RE|S|T|VE))?",Qu=Rv+"?",Zu="["+Du+"]?",Ov="(?:"+qu+"(?:"+[Wu,Ua,Da].join("|")+")"+Zu+Qu+")*",Pv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Mv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Xu=Zu+Qu+Ov,Bv="(?:"+[Iv,Ua,Da].join("|")+")"+Xu,Uv="(?:"+[Wu+Ps+"?",Ps,Ua,Da,Av].join("|")+")",Dv=RegExp(Ma,"g"),Hv=RegExp(Ps,"g"),Ha=RegExp(Ba+"(?="+Ba+")|"+Uv+Xu,"g"),Fv=RegExp([Zr+"?"+zu+"+"+Gu+"(?="+[Fu,Zr,"$"].join("|")+")",Lv+"+"+Vu+"(?="+[Fu,Zr+Ku,"$"].join("|")+")",Zr+"?"+Ku+"+"+Gu,Zr+"+"+Vu,Mv,Pv,ju,Bv].join("|"),"g"),jv=RegExp("["+qu+Os+Pu+Du+"]"),zv=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Nv=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Wv=-1,Ge={};Ge[Xt]=Ge[Bn]=Ge[er]=Ge[Gr]=Ge[Vr]=Ge[Qr]=Ge[Ia]=Ge[Ra]=Ge[La]=!0,Ge[Je]=Ge[Dt]=Ge[jt]=Ge[et]=Ge[Rt]=Ge[ot]=Ge[Ht]=Ge[At]=Ge[lt]=Ge[It]=Ge[dt]=Ge[Me]=Ge[Be]=Ge[Ue]=Ge[ht]=!1;var qe={};qe[Je]=qe[Dt]=qe[jt]=qe[Rt]=qe[et]=qe[ot]=qe[Xt]=qe[Bn]=qe[er]=qe[Gr]=qe[Vr]=qe[lt]=qe[It]=qe[dt]=qe[Me]=qe[Be]=qe[Ue]=qe[at]=qe[Qr]=qe[Ia]=qe[Ra]=qe[La]=!0,qe[Ht]=qe[At]=qe[ht]=!1;var qv={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Kv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Gv={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Vv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Qv=parseFloat,Zv=parseInt,Yu=typeof Vn=="object"&&Vn&&Vn.Object===Object&&Vn,Xv=typeof self=="object"&&self&&self.Object===Object&&self,mt=Yu||Xv||Function("return this")(),Fa=t&&!t.nodeType&&t,Rr=Fa&&!0&&e&&!e.nodeType&&e,Ju=Rr&&Rr.exports===Fa,ja=Ju&&Yu.process,Yt=function(){try{var T=Rr&&Rr.require&&Rr.require("util").types;return T||ja&&ja.binding&&ja.binding("util")}catch{}}(),ef=Yt&&Yt.isArrayBuffer,tf=Yt&&Yt.isDate,nf=Yt&&Yt.isMap,rf=Yt&&Yt.isRegExp,sf=Yt&&Yt.isSet,of=Yt&&Yt.isTypedArray;function zt(T,D,M){switch(M.length){case 0:return T.call(D);case 1:return T.call(D,M[0]);case 2:return T.call(D,M[0],M[1]);case 3:return T.call(D,M[0],M[1],M[2])}return T.apply(D,M)}function Yv(T,D,M,ee){for(var ge=-1,Le=T==null?0:T.length;++ge<Le;){var ct=T[ge];D(ee,ct,M(ct),T)}return ee}function Jt(T,D){for(var M=-1,ee=T==null?0:T.length;++M<ee&&D(T[M],M,T)!==!1;);return T}function Jv(T,D){for(var M=T==null?0:T.length;M--&&D(T[M],M,T)!==!1;);return T}function af(T,D){for(var M=-1,ee=T==null?0:T.length;++M<ee;)if(!D(T[M],M,T))return!1;return!0}function tr(T,D){for(var M=-1,ee=T==null?0:T.length,ge=0,Le=[];++M<ee;){var ct=T[M];D(ct,M,T)&&(Le[ge++]=ct)}return Le}function Ms(T,D){var M=T==null?0:T.length;return!!M&&Xr(T,D,0)>-1}function za(T,D,M){for(var ee=-1,ge=T==null?0:T.length;++ee<ge;)if(M(D,T[ee]))return!0;return!1}function Xe(T,D){for(var M=-1,ee=T==null?0:T.length,ge=Array(ee);++M<ee;)ge[M]=D(T[M],M,T);return ge}function nr(T,D){for(var M=-1,ee=D.length,ge=T.length;++M<ee;)T[ge+M]=D[M];return T}function Na(T,D,M,ee){var ge=-1,Le=T==null?0:T.length;for(ee&&Le&&(M=T[++ge]);++ge<Le;)M=D(M,T[ge],ge,T);return M}function e2(T,D,M,ee){var ge=T==null?0:T.length;for(ee&&ge&&(M=T[--ge]);ge--;)M=D(M,T[ge],ge,T);return M}function Wa(T,D){for(var M=-1,ee=T==null?0:T.length;++M<ee;)if(D(T[M],M,T))return!0;return!1}var t2=qa("length");function n2(T){return T.split("")}function r2(T){return T.match(fv)||[]}function lf(T,D,M){var ee;return M(T,function(ge,Le,ct){if(D(ge,Le,ct))return ee=Le,!1}),ee}function Bs(T,D,M,ee){for(var ge=T.length,Le=M+(ee?1:-1);ee?Le--:++Le<ge;)if(D(T[Le],Le,T))return Le;return-1}function Xr(T,D,M){return D===D?g2(T,D,M):Bs(T,cf,M)}function i2(T,D,M,ee){for(var ge=M-1,Le=T.length;++ge<Le;)if(ee(T[ge],D))return ge;return-1}function cf(T){return T!==T}function uf(T,D){var M=T==null?0:T.length;return M?Ga(T,D)/M:Re}function qa(T){return function(D){return D==null?r:D[T]}}function Ka(T){return function(D){return T==null?r:T[D]}}function ff(T,D,M,ee,ge){return ge(T,function(Le,ct,We){M=ee?(ee=!1,Le):D(M,Le,ct,We)}),M}function s2(T,D){var M=T.length;for(T.sort(D);M--;)T[M]=T[M].value;return T}function Ga(T,D){for(var M,ee=-1,ge=T.length;++ee<ge;){var Le=D(T[ee]);Le!==r&&(M=M===r?Le:M+Le)}return M}function Va(T,D){for(var M=-1,ee=Array(T);++M<T;)ee[M]=D(M);return ee}function o2(T,D){return Xe(D,function(M){return[M,T[M]]})}function df(T){return T&&T.slice(0,vf(T)+1).replace(Pa,"")}function Nt(T){return function(D){return T(D)}}function Qa(T,D){return Xe(D,function(M){return T[M]})}function Wi(T,D){return T.has(D)}function hf(T,D){for(var M=-1,ee=T.length;++M<ee&&Xr(D,T[M],0)>-1;);return M}function pf(T,D){for(var M=T.length;M--&&Xr(D,T[M],0)>-1;);return M}function a2(T,D){for(var M=T.length,ee=0;M--;)T[M]===D&&++ee;return ee}var l2=Ka(qv),c2=Ka(Kv);function u2(T){return"\\"+Vv[T]}function f2(T,D){return T==null?r:T[D]}function Yr(T){return jv.test(T)}function d2(T){return zv.test(T)}function h2(T){for(var D,M=[];!(D=T.next()).done;)M.push(D.value);return M}function Za(T){var D=-1,M=Array(T.size);return T.forEach(function(ee,ge){M[++D]=[ge,ee]}),M}function gf(T,D){return function(M){return T(D(M))}}function rr(T,D){for(var M=-1,ee=T.length,ge=0,Le=[];++M<ee;){var ct=T[M];(ct===D||ct===h)&&(T[M]=h,Le[ge++]=M)}return Le}function Us(T){var D=-1,M=Array(T.size);return T.forEach(function(ee){M[++D]=ee}),M}function p2(T){var D=-1,M=Array(T.size);return T.forEach(function(ee){M[++D]=[ee,ee]}),M}function g2(T,D,M){for(var ee=M-1,ge=T.length;++ee<ge;)if(T[ee]===D)return ee;return-1}function v2(T,D,M){for(var ee=M+1;ee--;)if(T[ee]===D)return ee;return ee}function Jr(T){return Yr(T)?b2(T):t2(T)}function fn(T){return Yr(T)?y2(T):n2(T)}function vf(T){for(var D=T.length;D--&&av.test(T.charAt(D)););return D}var m2=Ka(Gv);function b2(T){for(var D=Ha.lastIndex=0;Ha.test(T);)++D;return D}function y2(T){return T.match(Ha)||[]}function _2(T){return T.match(Fv)||[]}var w2=function T(D){D=D==null?mt:ei.defaults(mt.Object(),D,ei.pick(mt,Nv));var M=D.Array,ee=D.Date,ge=D.Error,Le=D.Function,ct=D.Math,We=D.Object,Xa=D.RegExp,$2=D.String,en=D.TypeError,Ds=M.prototype,x2=Le.prototype,ti=We.prototype,Hs=D["__core-js_shared__"],Fs=x2.toString,je=ti.hasOwnProperty,k2=0,mf=function(){var n=/[^.]+$/.exec(Hs&&Hs.keys&&Hs.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),js=ti.toString,C2=Fs.call(We),S2=mt._,E2=Xa("^"+Fs.call(je).replace(Oa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),zs=Ju?D.Buffer:r,ir=D.Symbol,Ns=D.Uint8Array,bf=zs?zs.allocUnsafe:r,Ws=gf(We.getPrototypeOf,We),yf=We.create,_f=ti.propertyIsEnumerable,qs=Ds.splice,wf=ir?ir.isConcatSpreadable:r,qi=ir?ir.iterator:r,Lr=ir?ir.toStringTag:r,Ks=function(){try{var n=Ur(We,"defineProperty");return n({},"",{}),n}catch{}}(),T2=D.clearTimeout!==mt.clearTimeout&&D.clearTimeout,A2=ee&&ee.now!==mt.Date.now&&ee.now,I2=D.setTimeout!==mt.setTimeout&&D.setTimeout,Gs=ct.ceil,Vs=ct.floor,Ya=We.getOwnPropertySymbols,R2=zs?zs.isBuffer:r,$f=D.isFinite,L2=Ds.join,O2=gf(We.keys,We),ut=ct.max,_t=ct.min,P2=ee.now,M2=D.parseInt,xf=ct.random,B2=Ds.reverse,Ja=Ur(D,"DataView"),Ki=Ur(D,"Map"),el=Ur(D,"Promise"),ni=Ur(D,"Set"),Gi=Ur(D,"WeakMap"),Vi=Ur(We,"create"),Qs=Gi&&new Gi,ri={},U2=Dr(Ja),D2=Dr(Ki),H2=Dr(el),F2=Dr(ni),j2=Dr(Gi),Zs=ir?ir.prototype:r,Qi=Zs?Zs.valueOf:r,kf=Zs?Zs.toString:r;function b(n){if(nt(n)&&!ve(n)&&!(n instanceof Ce)){if(n instanceof tn)return n;if(je.call(n,"__wrapped__"))return Cd(n)}return new tn(n)}var ii=function(){function n(){}return function(i){if(!tt(i))return{};if(yf)return yf(i);n.prototype=i;var a=new n;return n.prototype=r,a}}();function Xs(){}function tn(n,i){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}b.templateSettings={escape:tv,evaluate:nv,interpolate:Lu,variable:"",imports:{_:b}},b.prototype=Xs.prototype,b.prototype.constructor=b,tn.prototype=ii(Xs.prototype),tn.prototype.constructor=tn;function Ce(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=se,this.__views__=[]}function z2(){var n=new Ce(this.__wrapped__);return n.__actions__=Lt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Lt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Lt(this.__views__),n}function N2(){if(this.__filtered__){var n=new Ce(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function W2(){var n=this.__wrapped__.value(),i=this.__dir__,a=ve(n),f=i<0,g=a?n.length:0,_=nb(0,g,this.__views__),x=_.start,C=_.end,A=C-x,F=f?C:x-1,j=this.__iteratees__,q=j.length,Q=0,ie=_t(A,this.__takeCount__);if(!a||!f&&g==A&&ie==A)return Vf(n,this.__actions__);var ue=[];e:for(;A--&&Q<ie;){F+=i;for(var ye=-1,fe=n[F];++ye<q;){var xe=j[ye],Se=xe.iteratee,Kt=xe.type,Ct=Se(fe);if(Kt==te)fe=Ct;else if(!Ct){if(Kt==he)continue e;break e}}ue[Q++]=fe}return ue}Ce.prototype=ii(Xs.prototype),Ce.prototype.constructor=Ce;function Or(n){var i=-1,a=n==null?0:n.length;for(this.clear();++i<a;){var f=n[i];this.set(f[0],f[1])}}function q2(){this.__data__=Vi?Vi(null):{},this.size=0}function K2(n){var i=this.has(n)&&delete this.__data__[n];return this.size-=i?1:0,i}function G2(n){var i=this.__data__;if(Vi){var a=i[n];return a===d?r:a}return je.call(i,n)?i[n]:r}function V2(n){var i=this.__data__;return Vi?i[n]!==r:je.call(i,n)}function Q2(n,i){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=Vi&&i===r?d:i,this}Or.prototype.clear=q2,Or.prototype.delete=K2,Or.prototype.get=G2,Or.prototype.has=V2,Or.prototype.set=Q2;function Un(n){var i=-1,a=n==null?0:n.length;for(this.clear();++i<a;){var f=n[i];this.set(f[0],f[1])}}function Z2(){this.__data__=[],this.size=0}function X2(n){var i=this.__data__,a=Ys(i,n);if(a<0)return!1;var f=i.length-1;return a==f?i.pop():qs.call(i,a,1),--this.size,!0}function Y2(n){var i=this.__data__,a=Ys(i,n);return a<0?r:i[a][1]}function J2(n){return Ys(this.__data__,n)>-1}function em(n,i){var a=this.__data__,f=Ys(a,n);return f<0?(++this.size,a.push([n,i])):a[f][1]=i,this}Un.prototype.clear=Z2,Un.prototype.delete=X2,Un.prototype.get=Y2,Un.prototype.has=J2,Un.prototype.set=em;function Dn(n){var i=-1,a=n==null?0:n.length;for(this.clear();++i<a;){var f=n[i];this.set(f[0],f[1])}}function tm(){this.size=0,this.__data__={hash:new Or,map:new(Ki||Un),string:new Or}}function nm(n){var i=uo(this,n).delete(n);return this.size-=i?1:0,i}function rm(n){return uo(this,n).get(n)}function im(n){return uo(this,n).has(n)}function sm(n,i){var a=uo(this,n),f=a.size;return a.set(n,i),this.size+=a.size==f?0:1,this}Dn.prototype.clear=tm,Dn.prototype.delete=nm,Dn.prototype.get=rm,Dn.prototype.has=im,Dn.prototype.set=sm;function Pr(n){var i=-1,a=n==null?0:n.length;for(this.__data__=new Dn;++i<a;)this.add(n[i])}function om(n){return this.__data__.set(n,d),this}function am(n){return this.__data__.has(n)}Pr.prototype.add=Pr.prototype.push=om,Pr.prototype.has=am;function dn(n){var i=this.__data__=new Un(n);this.size=i.size}function lm(){this.__data__=new Un,this.size=0}function cm(n){var i=this.__data__,a=i.delete(n);return this.size=i.size,a}function um(n){return this.__data__.get(n)}function fm(n){return this.__data__.has(n)}function dm(n,i){var a=this.__data__;if(a instanceof Un){var f=a.__data__;if(!Ki||f.length<o-1)return f.push([n,i]),this.size=++a.size,this;a=this.__data__=new Dn(f)}return a.set(n,i),this.size=a.size,this}dn.prototype.clear=lm,dn.prototype.delete=cm,dn.prototype.get=um,dn.prototype.has=fm,dn.prototype.set=dm;function Cf(n,i){var a=ve(n),f=!a&&Hr(n),g=!a&&!f&&cr(n),_=!a&&!f&&!g&&li(n),x=a||f||g||_,C=x?Va(n.length,$2):[],A=C.length;for(var F in n)(i||je.call(n,F))&&!(x&&(F=="length"||g&&(F=="offset"||F=="parent")||_&&(F=="buffer"||F=="byteLength"||F=="byteOffset")||zn(F,A)))&&C.push(F);return C}function Sf(n){var i=n.length;return i?n[fl(0,i-1)]:r}function hm(n,i){return fo(Lt(n),Mr(i,0,n.length))}function pm(n){return fo(Lt(n))}function tl(n,i,a){(a!==r&&!hn(n[i],a)||a===r&&!(i in n))&&Hn(n,i,a)}function Zi(n,i,a){var f=n[i];(!(je.call(n,i)&&hn(f,a))||a===r&&!(i in n))&&Hn(n,i,a)}function Ys(n,i){for(var a=n.length;a--;)if(hn(n[a][0],i))return a;return-1}function gm(n,i,a,f){return sr(n,function(g,_,x){i(f,g,a(g),x)}),f}function Ef(n,i){return n&&Cn(i,pt(i),n)}function vm(n,i){return n&&Cn(i,Pt(i),n)}function Hn(n,i,a){i=="__proto__"&&Ks?Ks(n,i,{configurable:!0,enumerable:!0,value:a,writable:!0}):n[i]=a}function nl(n,i){for(var a=-1,f=i.length,g=M(f),_=n==null;++a<f;)g[a]=_?r:Bl(n,i[a]);return g}function Mr(n,i,a){return n===n&&(a!==r&&(n=n<=a?n:a),i!==r&&(n=n>=i?n:i)),n}function nn(n,i,a,f,g,_){var x,C=i&v,A=i&m,F=i&y;if(a&&(x=g?a(n,f,g,_):a(n)),x!==r)return x;if(!tt(n))return n;var j=ve(n);if(j){if(x=ib(n),!C)return Lt(n,x)}else{var q=wt(n),Q=q==At||q==Ft;if(cr(n))return Xf(n,C);if(q==dt||q==Je||Q&&!g){if(x=A||Q?{}:vd(n),!C)return A?Gm(n,vm(x,n)):Km(n,Ef(x,n))}else{if(!qe[q])return g?n:{};x=sb(n,q,C)}}_||(_=new dn);var ie=_.get(n);if(ie)return ie;_.set(n,x),qd(n)?n.forEach(function(fe){x.add(nn(fe,i,a,fe,n,_))}):Nd(n)&&n.forEach(function(fe,xe){x.set(xe,nn(fe,i,a,xe,n,_))});var ue=F?A?$l:wl:A?Pt:pt,ye=j?r:ue(n);return Jt(ye||n,function(fe,xe){ye&&(xe=fe,fe=n[xe]),Zi(x,xe,nn(fe,i,a,xe,n,_))}),x}function mm(n){var i=pt(n);return function(a){return Tf(a,n,i)}}function Tf(n,i,a){var f=a.length;if(n==null)return!f;for(n=We(n);f--;){var g=a[f],_=i[g],x=n[g];if(x===r&&!(g in n)||!_(x))return!1}return!0}function Af(n,i,a){if(typeof n!="function")throw new en(c);return rs(function(){n.apply(r,a)},i)}function Xi(n,i,a,f){var g=-1,_=Ms,x=!0,C=n.length,A=[],F=i.length;if(!C)return A;a&&(i=Xe(i,Nt(a))),f?(_=za,x=!1):i.length>=o&&(_=Wi,x=!1,i=new Pr(i));e:for(;++g<C;){var j=n[g],q=a==null?j:a(j);if(j=f||j!==0?j:0,x&&q===q){for(var Q=F;Q--;)if(i[Q]===q)continue e;A.push(j)}else _(i,q,f)||A.push(j)}return A}var sr=nd(kn),If=nd(il,!0);function bm(n,i){var a=!0;return sr(n,function(f,g,_){return a=!!i(f,g,_),a}),a}function Js(n,i,a){for(var f=-1,g=n.length;++f<g;){var _=n[f],x=i(_);if(x!=null&&(C===r?x===x&&!qt(x):a(x,C)))var C=x,A=_}return A}function ym(n,i,a,f){var g=n.length;for(a=me(a),a<0&&(a=-a>g?0:g+a),f=f===r||f>g?g:me(f),f<0&&(f+=g),f=a>f?0:Gd(f);a<f;)n[a++]=i;return n}function Rf(n,i){var a=[];return sr(n,function(f,g,_){i(f,g,_)&&a.push(f)}),a}function bt(n,i,a,f,g){var _=-1,x=n.length;for(a||(a=ab),g||(g=[]);++_<x;){var C=n[_];i>0&&a(C)?i>1?bt(C,i-1,a,f,g):nr(g,C):f||(g[g.length]=C)}return g}var rl=rd(),Lf=rd(!0);function kn(n,i){return n&&rl(n,i,pt)}function il(n,i){return n&&Lf(n,i,pt)}function eo(n,i){return tr(i,function(a){return Nn(n[a])})}function Br(n,i){i=ar(i,n);for(var a=0,f=i.length;n!=null&&a<f;)n=n[Sn(i[a++])];return a&&a==f?n:r}function Of(n,i,a){var f=i(n);return ve(n)?f:nr(f,a(n))}function xt(n){return n==null?n===r?G:vt:Lr&&Lr in We(n)?tb(n):pb(n)}function sl(n,i){return n>i}function _m(n,i){return n!=null&&je.call(n,i)}function wm(n,i){return n!=null&&i in We(n)}function $m(n,i,a){return n>=_t(i,a)&&n<ut(i,a)}function ol(n,i,a){for(var f=a?za:Ms,g=n[0].length,_=n.length,x=_,C=M(_),A=1/0,F=[];x--;){var j=n[x];x&&i&&(j=Xe(j,Nt(i))),A=_t(j.length,A),C[x]=!a&&(i||g>=120&&j.length>=120)?new Pr(x&&j):r}j=n[0];var q=-1,Q=C[0];e:for(;++q<g&&F.length<A;){var ie=j[q],ue=i?i(ie):ie;if(ie=a||ie!==0?ie:0,!(Q?Wi(Q,ue):f(F,ue,a))){for(x=_;--x;){var ye=C[x];if(!(ye?Wi(ye,ue):f(n[x],ue,a)))continue e}Q&&Q.push(ue),F.push(ie)}}return F}function xm(n,i,a,f){return kn(n,function(g,_,x){i(f,a(g),_,x)}),f}function Yi(n,i,a){i=ar(i,n),n=_d(n,i);var f=n==null?n:n[Sn(sn(i))];return f==null?r:zt(f,n,a)}function Pf(n){return nt(n)&&xt(n)==Je}function km(n){return nt(n)&&xt(n)==jt}function Cm(n){return nt(n)&&xt(n)==ot}function Ji(n,i,a,f,g){return n===i?!0:n==null||i==null||!nt(n)&&!nt(i)?n!==n&&i!==i:Sm(n,i,a,f,Ji,g)}function Sm(n,i,a,f,g,_){var x=ve(n),C=ve(i),A=x?Dt:wt(n),F=C?Dt:wt(i);A=A==Je?dt:A,F=F==Je?dt:F;var j=A==dt,q=F==dt,Q=A==F;if(Q&&cr(n)){if(!cr(i))return!1;x=!0,j=!1}if(Q&&!j)return _||(_=new dn),x||li(n)?hd(n,i,a,f,g,_):Jm(n,i,A,a,f,g,_);if(!(a&w)){var ie=j&&je.call(n,"__wrapped__"),ue=q&&je.call(i,"__wrapped__");if(ie||ue){var ye=ie?n.value():n,fe=ue?i.value():i;return _||(_=new dn),g(ye,fe,a,f,_)}}return Q?(_||(_=new dn),eb(n,i,a,f,g,_)):!1}function Em(n){return nt(n)&&wt(n)==lt}function al(n,i,a,f){var g=a.length,_=g,x=!f;if(n==null)return!_;for(n=We(n);g--;){var C=a[g];if(x&&C[2]?C[1]!==n[C[0]]:!(C[0]in n))return!1}for(;++g<_;){C=a[g];var A=C[0],F=n[A],j=C[1];if(x&&C[2]){if(F===r&&!(A in n))return!1}else{var q=new dn;if(f)var Q=f(F,j,A,n,i,q);if(!(Q===r?Ji(j,F,w|k,f,q):Q))return!1}}return!0}function Mf(n){if(!tt(n)||cb(n))return!1;var i=Nn(n)?E2:mv;return i.test(Dr(n))}function Tm(n){return nt(n)&&xt(n)==Me}function Am(n){return nt(n)&&wt(n)==Be}function Im(n){return nt(n)&&bo(n.length)&&!!Ge[xt(n)]}function Bf(n){return typeof n=="function"?n:n==null?Mt:typeof n=="object"?ve(n)?Hf(n[0],n[1]):Df(n):ih(n)}function ll(n){if(!ns(n))return O2(n);var i=[];for(var a in We(n))je.call(n,a)&&a!="constructor"&&i.push(a);return i}function Rm(n){if(!tt(n))return hb(n);var i=ns(n),a=[];for(var f in n)f=="constructor"&&(i||!je.call(n,f))||a.push(f);return a}function cl(n,i){return n<i}function Uf(n,i){var a=-1,f=Ot(n)?M(n.length):[];return sr(n,function(g,_,x){f[++a]=i(g,_,x)}),f}function Df(n){var i=kl(n);return i.length==1&&i[0][2]?bd(i[0][0],i[0][1]):function(a){return a===n||al(a,n,i)}}function Hf(n,i){return Sl(n)&&md(i)?bd(Sn(n),i):function(a){var f=Bl(a,n);return f===r&&f===i?Ul(a,n):Ji(i,f,w|k)}}function to(n,i,a,f,g){n!==i&&rl(i,function(_,x){if(g||(g=new dn),tt(_))Lm(n,i,x,a,to,f,g);else{var C=f?f(Tl(n,x),_,x+"",n,i,g):r;C===r&&(C=_),tl(n,x,C)}},Pt)}function Lm(n,i,a,f,g,_,x){var C=Tl(n,a),A=Tl(i,a),F=x.get(A);if(F){tl(n,a,F);return}var j=_?_(C,A,a+"",n,i,x):r,q=j===r;if(q){var Q=ve(A),ie=!Q&&cr(A),ue=!Q&&!ie&&li(A);j=A,Q||ie||ue?ve(C)?j=C:rt(C)?j=Lt(C):ie?(q=!1,j=Xf(A,!0)):ue?(q=!1,j=Yf(A,!0)):j=[]:is(A)||Hr(A)?(j=C,Hr(C)?j=Vd(C):(!tt(C)||Nn(C))&&(j=vd(A))):q=!1}q&&(x.set(A,j),g(j,A,f,_,x),x.delete(A)),tl(n,a,j)}function Ff(n,i){var a=n.length;if(a)return i+=i<0?a:0,zn(i,a)?n[i]:r}function jf(n,i,a){i.length?i=Xe(i,function(_){return ve(_)?function(x){return Br(x,_.length===1?_[0]:_)}:_}):i=[Mt];var f=-1;i=Xe(i,Nt(le()));var g=Uf(n,function(_,x,C){var A=Xe(i,function(F){return F(_)});return{criteria:A,index:++f,value:_}});return s2(g,function(_,x){return qm(_,x,a)})}function Om(n,i){return zf(n,i,function(a,f){return Ul(n,f)})}function zf(n,i,a){for(var f=-1,g=i.length,_={};++f<g;){var x=i[f],C=Br(n,x);a(C,x)&&es(_,ar(x,n),C)}return _}function Pm(n){return function(i){return Br(i,n)}}function ul(n,i,a,f){var g=f?i2:Xr,_=-1,x=i.length,C=n;for(n===i&&(i=Lt(i)),a&&(C=Xe(n,Nt(a)));++_<x;)for(var A=0,F=i[_],j=a?a(F):F;(A=g(C,j,A,f))>-1;)C!==n&&qs.call(C,A,1),qs.call(n,A,1);return n}function Nf(n,i){for(var a=n?i.length:0,f=a-1;a--;){var g=i[a];if(a==f||g!==_){var _=g;zn(g)?qs.call(n,g,1):pl(n,g)}}return n}function fl(n,i){return n+Vs(xf()*(i-n+1))}function Mm(n,i,a,f){for(var g=-1,_=ut(Gs((i-n)/(a||1)),0),x=M(_);_--;)x[f?_:++g]=n,n+=a;return x}function dl(n,i){var a="";if(!n||i<1||i>de)return a;do i%2&&(a+=n),i=Vs(i/2),i&&(n+=n);while(i);return a}function we(n,i){return Al(yd(n,i,Mt),n+"")}function Bm(n){return Sf(ci(n))}function Um(n,i){var a=ci(n);return fo(a,Mr(i,0,a.length))}function es(n,i,a,f){if(!tt(n))return n;i=ar(i,n);for(var g=-1,_=i.length,x=_-1,C=n;C!=null&&++g<_;){var A=Sn(i[g]),F=a;if(A==="__proto__"||A==="constructor"||A==="prototype")return n;if(g!=x){var j=C[A];F=f?f(j,A,C):r,F===r&&(F=tt(j)?j:zn(i[g+1])?[]:{})}Zi(C,A,F),C=C[A]}return n}var Wf=Qs?function(n,i){return Qs.set(n,i),n}:Mt,Dm=Ks?function(n,i){return Ks(n,"toString",{configurable:!0,enumerable:!1,value:Hl(i),writable:!0})}:Mt;function Hm(n){return fo(ci(n))}function rn(n,i,a){var f=-1,g=n.length;i<0&&(i=-i>g?0:g+i),a=a>g?g:a,a<0&&(a+=g),g=i>a?0:a-i>>>0,i>>>=0;for(var _=M(g);++f<g;)_[f]=n[f+i];return _}function Fm(n,i){var a;return sr(n,function(f,g,_){return a=i(f,g,_),!a}),!!a}function no(n,i,a){var f=0,g=n==null?f:n.length;if(typeof i=="number"&&i===i&&g<=un){for(;f<g;){var _=f+g>>>1,x=n[_];x!==null&&!qt(x)&&(a?x<=i:x<i)?f=_+1:g=_}return g}return hl(n,i,Mt,a)}function hl(n,i,a,f){var g=0,_=n==null?0:n.length;if(_===0)return 0;i=a(i);for(var x=i!==i,C=i===null,A=qt(i),F=i===r;g<_;){var j=Vs((g+_)/2),q=a(n[j]),Q=q!==r,ie=q===null,ue=q===q,ye=qt(q);if(x)var fe=f||ue;else F?fe=ue&&(f||Q):C?fe=ue&&Q&&(f||!ie):A?fe=ue&&Q&&!ie&&(f||!ye):ie||ye?fe=!1:fe=f?q<=i:q<i;fe?g=j+1:_=j}return _t(_,Fe)}function qf(n,i){for(var a=-1,f=n.length,g=0,_=[];++a<f;){var x=n[a],C=i?i(x):x;if(!a||!hn(C,A)){var A=C;_[g++]=x===0?0:x}}return _}function Kf(n){return typeof n=="number"?n:qt(n)?Re:+n}function Wt(n){if(typeof n=="string")return n;if(ve(n))return Xe(n,Wt)+"";if(qt(n))return kf?kf.call(n):"";var i=n+"";return i=="0"&&1/n==-re?"-0":i}function or(n,i,a){var f=-1,g=Ms,_=n.length,x=!0,C=[],A=C;if(a)x=!1,g=za;else if(_>=o){var F=i?null:Xm(n);if(F)return Us(F);x=!1,g=Wi,A=new Pr}else A=i?[]:C;e:for(;++f<_;){var j=n[f],q=i?i(j):j;if(j=a||j!==0?j:0,x&&q===q){for(var Q=A.length;Q--;)if(A[Q]===q)continue e;i&&A.push(q),C.push(j)}else g(A,q,a)||(A!==C&&A.push(q),C.push(j))}return C}function pl(n,i){return i=ar(i,n),n=_d(n,i),n==null||delete n[Sn(sn(i))]}function Gf(n,i,a,f){return es(n,i,a(Br(n,i)),f)}function ro(n,i,a,f){for(var g=n.length,_=f?g:-1;(f?_--:++_<g)&&i(n[_],_,n););return a?rn(n,f?0:_,f?_+1:g):rn(n,f?_+1:0,f?g:_)}function Vf(n,i){var a=n;return a instanceof Ce&&(a=a.value()),Na(i,function(f,g){return g.func.apply(g.thisArg,nr([f],g.args))},a)}function gl(n,i,a){var f=n.length;if(f<2)return f?or(n[0]):[];for(var g=-1,_=M(f);++g<f;)for(var x=n[g],C=-1;++C<f;)C!=g&&(_[g]=Xi(_[g]||x,n[C],i,a));return or(bt(_,1),i,a)}function Qf(n,i,a){for(var f=-1,g=n.length,_=i.length,x={};++f<g;){var C=f<_?i[f]:r;a(x,n[f],C)}return x}function vl(n){return rt(n)?n:[]}function ml(n){return typeof n=="function"?n:Mt}function ar(n,i){return ve(n)?n:Sl(n,i)?[n]:kd(De(n))}var jm=we;function lr(n,i,a){var f=n.length;return a=a===r?f:a,!i&&a>=f?n:rn(n,i,a)}var Zf=T2||function(n){return mt.clearTimeout(n)};function Xf(n,i){if(i)return n.slice();var a=n.length,f=bf?bf(a):new n.constructor(a);return n.copy(f),f}function bl(n){var i=new n.constructor(n.byteLength);return new Ns(i).set(new Ns(n)),i}function zm(n,i){var a=i?bl(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.byteLength)}function Nm(n){var i=new n.constructor(n.source,Ou.exec(n));return i.lastIndex=n.lastIndex,i}function Wm(n){return Qi?We(Qi.call(n)):{}}function Yf(n,i){var a=i?bl(n.buffer):n.buffer;return new n.constructor(a,n.byteOffset,n.length)}function Jf(n,i){if(n!==i){var a=n!==r,f=n===null,g=n===n,_=qt(n),x=i!==r,C=i===null,A=i===i,F=qt(i);if(!C&&!F&&!_&&n>i||_&&x&&A&&!C&&!F||f&&x&&A||!a&&A||!g)return 1;if(!f&&!_&&!F&&n<i||F&&a&&g&&!f&&!_||C&&a&&g||!x&&g||!A)return-1}return 0}function qm(n,i,a){for(var f=-1,g=n.criteria,_=i.criteria,x=g.length,C=a.length;++f<x;){var A=Jf(g[f],_[f]);if(A){if(f>=C)return A;var F=a[f];return A*(F=="desc"?-1:1)}}return n.index-i.index}function ed(n,i,a,f){for(var g=-1,_=n.length,x=a.length,C=-1,A=i.length,F=ut(_-x,0),j=M(A+F),q=!f;++C<A;)j[C]=i[C];for(;++g<x;)(q||g<_)&&(j[a[g]]=n[g]);for(;F--;)j[C++]=n[g++];return j}function td(n,i,a,f){for(var g=-1,_=n.length,x=-1,C=a.length,A=-1,F=i.length,j=ut(_-C,0),q=M(j+F),Q=!f;++g<j;)q[g]=n[g];for(var ie=g;++A<F;)q[ie+A]=i[A];for(;++x<C;)(Q||g<_)&&(q[ie+a[x]]=n[g++]);return q}function Lt(n,i){var a=-1,f=n.length;for(i||(i=M(f));++a<f;)i[a]=n[a];return i}function Cn(n,i,a,f){var g=!a;a||(a={});for(var _=-1,x=i.length;++_<x;){var C=i[_],A=f?f(a[C],n[C],C,a,n):r;A===r&&(A=n[C]),g?Hn(a,C,A):Zi(a,C,A)}return a}function Km(n,i){return Cn(n,Cl(n),i)}function Gm(n,i){return Cn(n,pd(n),i)}function io(n,i){return function(a,f){var g=ve(a)?Yv:gm,_=i?i():{};return g(a,n,le(f,2),_)}}function si(n){return we(function(i,a){var f=-1,g=a.length,_=g>1?a[g-1]:r,x=g>2?a[2]:r;for(_=n.length>3&&typeof _=="function"?(g--,_):r,x&&kt(a[0],a[1],x)&&(_=g<3?r:_,g=1),i=We(i);++f<g;){var C=a[f];C&&n(i,C,f,_)}return i})}function nd(n,i){return function(a,f){if(a==null)return a;if(!Ot(a))return n(a,f);for(var g=a.length,_=i?g:-1,x=We(a);(i?_--:++_<g)&&f(x[_],_,x)!==!1;);return a}}function rd(n){return function(i,a,f){for(var g=-1,_=We(i),x=f(i),C=x.length;C--;){var A=x[n?C:++g];if(a(_[A],A,_)===!1)break}return i}}function Vm(n,i,a){var f=i&S,g=ts(n);function _(){var x=this&&this!==mt&&this instanceof _?g:n;return x.apply(f?a:this,arguments)}return _}function id(n){return function(i){i=De(i);var a=Yr(i)?fn(i):r,f=a?a[0]:i.charAt(0),g=a?lr(a,1).join(""):i.slice(1);return f[n]()+g}}function oi(n){return function(i){return Na(nh(th(i).replace(Dv,"")),n,"")}}function ts(n){return function(){var i=arguments;switch(i.length){case 0:return new n;case 1:return new n(i[0]);case 2:return new n(i[0],i[1]);case 3:return new n(i[0],i[1],i[2]);case 4:return new n(i[0],i[1],i[2],i[3]);case 5:return new n(i[0],i[1],i[2],i[3],i[4]);case 6:return new n(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new n(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var a=ii(n.prototype),f=n.apply(a,i);return tt(f)?f:a}}function Qm(n,i,a){var f=ts(n);function g(){for(var _=arguments.length,x=M(_),C=_,A=ai(g);C--;)x[C]=arguments[C];var F=_<3&&x[0]!==A&&x[_-1]!==A?[]:rr(x,A);if(_-=F.length,_<a)return cd(n,i,so,g.placeholder,r,x,F,r,r,a-_);var j=this&&this!==mt&&this instanceof g?f:n;return zt(j,this,x)}return g}function sd(n){return function(i,a,f){var g=We(i);if(!Ot(i)){var _=le(a,3);i=pt(i),a=function(C){return _(g[C],C,g)}}var x=n(i,a,f);return x>-1?g[_?i[x]:x]:r}}function od(n){return jn(function(i){var a=i.length,f=a,g=tn.prototype.thru;for(n&&i.reverse();f--;){var _=i[f];if(typeof _!="function")throw new en(c);if(g&&!x&&co(_)=="wrapper")var x=new tn([],!0)}for(f=x?f:a;++f<a;){_=i[f];var C=co(_),A=C=="wrapper"?xl(_):r;A&&El(A[0])&&A[1]==(W|B|E|z)&&!A[4].length&&A[9]==1?x=x[co(A[0])].apply(x,A[3]):x=_.length==1&&El(_)?x[C]():x.thru(_)}return function(){var F=arguments,j=F[0];if(x&&F.length==1&&ve(j))return x.plant(j).value();for(var q=0,Q=a?i[q].apply(this,F):j;++q<a;)Q=i[q].call(this,Q);return Q}})}function so(n,i,a,f,g,_,x,C,A,F){var j=i&W,q=i&S,Q=i&L,ie=i&(B|R),ue=i&ne,ye=Q?r:ts(n);function fe(){for(var xe=arguments.length,Se=M(xe),Kt=xe;Kt--;)Se[Kt]=arguments[Kt];if(ie)var Ct=ai(fe),Gt=a2(Se,Ct);if(f&&(Se=ed(Se,f,g,ie)),_&&(Se=td(Se,_,x,ie)),xe-=Gt,ie&&xe<F){var it=rr(Se,Ct);return cd(n,i,so,fe.placeholder,a,Se,it,C,A,F-xe)}var pn=q?a:this,qn=Q?pn[n]:n;return xe=Se.length,C?Se=gb(Se,C):ue&&xe>1&&Se.reverse(),j&&A<xe&&(Se.length=A),this&&this!==mt&&this instanceof fe&&(qn=ye||ts(qn)),qn.apply(pn,Se)}return fe}function ad(n,i){return function(a,f){return xm(a,n,i(f),{})}}function oo(n,i){return function(a,f){var g;if(a===r&&f===r)return i;if(a!==r&&(g=a),f!==r){if(g===r)return f;typeof a=="string"||typeof f=="string"?(a=Wt(a),f=Wt(f)):(a=Kf(a),f=Kf(f)),g=n(a,f)}return g}}function yl(n){return jn(function(i){return i=Xe(i,Nt(le())),we(function(a){var f=this;return n(i,function(g){return zt(g,f,a)})})})}function ao(n,i){i=i===r?" ":Wt(i);var a=i.length;if(a<2)return a?dl(i,n):i;var f=dl(i,Gs(n/Jr(i)));return Yr(i)?lr(fn(f),0,n).join(""):f.slice(0,n)}function Zm(n,i,a,f){var g=i&S,_=ts(n);function x(){for(var C=-1,A=arguments.length,F=-1,j=f.length,q=M(j+A),Q=this&&this!==mt&&this instanceof x?_:n;++F<j;)q[F]=f[F];for(;A--;)q[F++]=arguments[++C];return zt(Q,g?a:this,q)}return x}function ld(n){return function(i,a,f){return f&&typeof f!="number"&&kt(i,a,f)&&(a=f=r),i=Wn(i),a===r?(a=i,i=0):a=Wn(a),f=f===r?i<a?1:-1:Wn(f),Mm(i,a,f,n)}}function lo(n){return function(i,a){return typeof i=="string"&&typeof a=="string"||(i=on(i),a=on(a)),n(i,a)}}function cd(n,i,a,f,g,_,x,C,A,F){var j=i&B,q=j?x:r,Q=j?r:x,ie=j?_:r,ue=j?r:_;i|=j?E:O,i&=~(j?O:E),i&U||(i&=~(S|L));var ye=[n,i,g,ie,q,ue,Q,C,A,F],fe=a.apply(r,ye);return El(n)&&wd(fe,ye),fe.placeholder=f,$d(fe,n,i)}function _l(n){var i=ct[n];return function(a,f){if(a=on(a),f=f==null?0:_t(me(f),292),f&&$f(a)){var g=(De(a)+"e").split("e"),_=i(g[0]+"e"+(+g[1]+f));return g=(De(_)+"e").split("e"),+(g[0]+"e"+(+g[1]-f))}return i(a)}}var Xm=ni&&1/Us(new ni([,-0]))[1]==re?function(n){return new ni(n)}:zl;function ud(n){return function(i){var a=wt(i);return a==lt?Za(i):a==Be?p2(i):o2(i,n(i))}}function Fn(n,i,a,f,g,_,x,C){var A=i&L;if(!A&&typeof n!="function")throw new en(c);var F=f?f.length:0;if(F||(i&=~(E|O),f=g=r),x=x===r?x:ut(me(x),0),C=C===r?C:me(C),F-=g?g.length:0,i&O){var j=f,q=g;f=g=r}var Q=A?r:xl(n),ie=[n,i,a,f,g,j,q,_,x,C];if(Q&&db(ie,Q),n=ie[0],i=ie[1],a=ie[2],f=ie[3],g=ie[4],C=ie[9]=ie[9]===r?A?0:n.length:ut(ie[9]-F,0),!C&&i&(B|R)&&(i&=~(B|R)),!i||i==S)var ue=Vm(n,i,a);else i==B||i==R?ue=Qm(n,i,C):(i==E||i==(S|E))&&!g.length?ue=Zm(n,i,a,f):ue=so.apply(r,ie);var ye=Q?Wf:wd;return $d(ye(ue,ie),n,i)}function fd(n,i,a,f){return n===r||hn(n,ti[a])&&!je.call(f,a)?i:n}function dd(n,i,a,f,g,_){return tt(n)&&tt(i)&&(_.set(i,n),to(n,i,r,dd,_),_.delete(i)),n}function Ym(n){return is(n)?r:n}function hd(n,i,a,f,g,_){var x=a&w,C=n.length,A=i.length;if(C!=A&&!(x&&A>C))return!1;var F=_.get(n),j=_.get(i);if(F&&j)return F==i&&j==n;var q=-1,Q=!0,ie=a&k?new Pr:r;for(_.set(n,i),_.set(i,n);++q<C;){var ue=n[q],ye=i[q];if(f)var fe=x?f(ye,ue,q,i,n,_):f(ue,ye,q,n,i,_);if(fe!==r){if(fe)continue;Q=!1;break}if(ie){if(!Wa(i,function(xe,Se){if(!Wi(ie,Se)&&(ue===xe||g(ue,xe,a,f,_)))return ie.push(Se)})){Q=!1;break}}else if(!(ue===ye||g(ue,ye,a,f,_))){Q=!1;break}}return _.delete(n),_.delete(i),Q}function Jm(n,i,a,f,g,_,x){switch(a){case Rt:if(n.byteLength!=i.byteLength||n.byteOffset!=i.byteOffset)return!1;n=n.buffer,i=i.buffer;case jt:return!(n.byteLength!=i.byteLength||!_(new Ns(n),new Ns(i)));case et:case ot:case It:return hn(+n,+i);case Ht:return n.name==i.name&&n.message==i.message;case Me:case Ue:return n==i+"";case lt:var C=Za;case Be:var A=f&w;if(C||(C=Us),n.size!=i.size&&!A)return!1;var F=x.get(n);if(F)return F==i;f|=k,x.set(n,i);var j=hd(C(n),C(i),f,g,_,x);return x.delete(n),j;case at:if(Qi)return Qi.call(n)==Qi.call(i)}return!1}function eb(n,i,a,f,g,_){var x=a&w,C=wl(n),A=C.length,F=wl(i),j=F.length;if(A!=j&&!x)return!1;for(var q=A;q--;){var Q=C[q];if(!(x?Q in i:je.call(i,Q)))return!1}var ie=_.get(n),ue=_.get(i);if(ie&&ue)return ie==i&&ue==n;var ye=!0;_.set(n,i),_.set(i,n);for(var fe=x;++q<A;){Q=C[q];var xe=n[Q],Se=i[Q];if(f)var Kt=x?f(Se,xe,Q,i,n,_):f(xe,Se,Q,n,i,_);if(!(Kt===r?xe===Se||g(xe,Se,a,f,_):Kt)){ye=!1;break}fe||(fe=Q=="constructor")}if(ye&&!fe){var Ct=n.constructor,Gt=i.constructor;Ct!=Gt&&"constructor"in n&&"constructor"in i&&!(typeof Ct=="function"&&Ct instanceof Ct&&typeof Gt=="function"&&Gt instanceof Gt)&&(ye=!1)}return _.delete(n),_.delete(i),ye}function jn(n){return Al(yd(n,r,Td),n+"")}function wl(n){return Of(n,pt,Cl)}function $l(n){return Of(n,Pt,pd)}var xl=Qs?function(n){return Qs.get(n)}:zl;function co(n){for(var i=n.name+"",a=ri[i],f=je.call(ri,i)?a.length:0;f--;){var g=a[f],_=g.func;if(_==null||_==n)return g.name}return i}function ai(n){var i=je.call(b,"placeholder")?b:n;return i.placeholder}function le(){var n=b.iteratee||Fl;return n=n===Fl?Bf:n,arguments.length?n(arguments[0],arguments[1]):n}function uo(n,i){var a=n.__data__;return lb(i)?a[typeof i=="string"?"string":"hash"]:a.map}function kl(n){for(var i=pt(n),a=i.length;a--;){var f=i[a],g=n[f];i[a]=[f,g,md(g)]}return i}function Ur(n,i){var a=f2(n,i);return Mf(a)?a:r}function tb(n){var i=je.call(n,Lr),a=n[Lr];try{n[Lr]=r;var f=!0}catch{}var g=js.call(n);return f&&(i?n[Lr]=a:delete n[Lr]),g}var Cl=Ya?function(n){return n==null?[]:(n=We(n),tr(Ya(n),function(i){return _f.call(n,i)}))}:Nl,pd=Ya?function(n){for(var i=[];n;)nr(i,Cl(n)),n=Ws(n);return i}:Nl,wt=xt;(Ja&&wt(new Ja(new ArrayBuffer(1)))!=Rt||Ki&&wt(new Ki)!=lt||el&&wt(el.resolve())!=pe||ni&&wt(new ni)!=Be||Gi&&wt(new Gi)!=ht)&&(wt=function(n){var i=xt(n),a=i==dt?n.constructor:r,f=a?Dr(a):"";if(f)switch(f){case U2:return Rt;case D2:return lt;case H2:return pe;case F2:return Be;case j2:return ht}return i});function nb(n,i,a){for(var f=-1,g=a.length;++f<g;){var _=a[f],x=_.size;switch(_.type){case"drop":n+=x;break;case"dropRight":i-=x;break;case"take":i=_t(i,n+x);break;case"takeRight":n=ut(n,i-x);break}}return{start:n,end:i}}function rb(n){var i=n.match(cv);return i?i[1].split(uv):[]}function gd(n,i,a){i=ar(i,n);for(var f=-1,g=i.length,_=!1;++f<g;){var x=Sn(i[f]);if(!(_=n!=null&&a(n,x)))break;n=n[x]}return _||++f!=g?_:(g=n==null?0:n.length,!!g&&bo(g)&&zn(x,g)&&(ve(n)||Hr(n)))}function ib(n){var i=n.length,a=new n.constructor(i);return i&&typeof n[0]=="string"&&je.call(n,"index")&&(a.index=n.index,a.input=n.input),a}function vd(n){return typeof n.constructor=="function"&&!ns(n)?ii(Ws(n)):{}}function sb(n,i,a){var f=n.constructor;switch(i){case jt:return bl(n);case et:case ot:return new f(+n);case Rt:return zm(n,a);case Xt:case Bn:case er:case Gr:case Vr:case Qr:case Ia:case Ra:case La:return Yf(n,a);case lt:return new f;case It:case Ue:return new f(n);case Me:return Nm(n);case Be:return new f;case at:return Wm(n)}}function ob(n,i){var a=i.length;if(!a)return n;var f=a-1;return i[f]=(a>1?"& ":"")+i[f],i=i.join(a>2?", ":" "),n.replace(lv,`{
/* [wrapped with `+i+`] */
`)}function ab(n){return ve(n)||Hr(n)||!!(wf&&n&&n[wf])}function zn(n,i){var a=typeof n;return i=i??de,!!i&&(a=="number"||a!="symbol"&&yv.test(n))&&n>-1&&n%1==0&&n<i}function kt(n,i,a){if(!tt(a))return!1;var f=typeof i;return(f=="number"?Ot(a)&&zn(i,a.length):f=="string"&&i in a)?hn(a[i],n):!1}function Sl(n,i){if(ve(n))return!1;var a=typeof n;return a=="number"||a=="symbol"||a=="boolean"||n==null||qt(n)?!0:iv.test(n)||!rv.test(n)||i!=null&&n in We(i)}function lb(n){var i=typeof n;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?n!=="__proto__":n===null}function El(n){var i=co(n),a=b[i];if(typeof a!="function"||!(i in Ce.prototype))return!1;if(n===a)return!0;var f=xl(a);return!!f&&n===f[0]}function cb(n){return!!mf&&mf in n}var ub=Hs?Nn:Wl;function ns(n){var i=n&&n.constructor,a=typeof i=="function"&&i.prototype||ti;return n===a}function md(n){return n===n&&!tt(n)}function bd(n,i){return function(a){return a==null?!1:a[n]===i&&(i!==r||n in We(a))}}function fb(n){var i=vo(n,function(f){return a.size===p&&a.clear(),f}),a=i.cache;return i}function db(n,i){var a=n[1],f=i[1],g=a|f,_=g<(S|L|W),x=f==W&&a==B||f==W&&a==z&&n[7].length<=i[8]||f==(W|z)&&i[7].length<=i[8]&&a==B;if(!(_||x))return n;f&S&&(n[2]=i[2],g|=a&S?0:U);var C=i[3];if(C){var A=n[3];n[3]=A?ed(A,C,i[4]):C,n[4]=A?rr(n[3],h):i[4]}return C=i[5],C&&(A=n[5],n[5]=A?td(A,C,i[6]):C,n[6]=A?rr(n[5],h):i[6]),C=i[7],C&&(n[7]=C),f&W&&(n[8]=n[8]==null?i[8]:_t(n[8],i[8])),n[9]==null&&(n[9]=i[9]),n[0]=i[0],n[1]=g,n}function hb(n){var i=[];if(n!=null)for(var a in We(n))i.push(a);return i}function pb(n){return js.call(n)}function yd(n,i,a){return i=ut(i===r?n.length-1:i,0),function(){for(var f=arguments,g=-1,_=ut(f.length-i,0),x=M(_);++g<_;)x[g]=f[i+g];g=-1;for(var C=M(i+1);++g<i;)C[g]=f[g];return C[i]=a(x),zt(n,this,C)}}function _d(n,i){return i.length<2?n:Br(n,rn(i,0,-1))}function gb(n,i){for(var a=n.length,f=_t(i.length,a),g=Lt(n);f--;){var _=i[f];n[f]=zn(_,a)?g[_]:r}return n}function Tl(n,i){if(!(i==="constructor"&&typeof n[i]=="function")&&i!="__proto__")return n[i]}var wd=xd(Wf),rs=I2||function(n,i){return mt.setTimeout(n,i)},Al=xd(Dm);function $d(n,i,a){var f=i+"";return Al(n,ob(f,vb(rb(f),a)))}function xd(n){var i=0,a=0;return function(){var f=P2(),g=Z-(f-a);if(a=f,g>0){if(++i>=H)return arguments[0]}else i=0;return n.apply(r,arguments)}}function fo(n,i){var a=-1,f=n.length,g=f-1;for(i=i===r?f:i;++a<i;){var _=fl(a,g),x=n[_];n[_]=n[a],n[a]=x}return n.length=i,n}var kd=fb(function(n){var i=[];return n.charCodeAt(0)===46&&i.push(""),n.replace(sv,function(a,f,g,_){i.push(g?_.replace(hv,"$1"):f||a)}),i});function Sn(n){if(typeof n=="string"||qt(n))return n;var i=n+"";return i=="0"&&1/n==-re?"-0":i}function Dr(n){if(n!=null){try{return Fs.call(n)}catch{}try{return n+""}catch{}}return""}function vb(n,i){return Jt(J,function(a){var f="_."+a[0];i&a[1]&&!Ms(n,f)&&n.push(f)}),n.sort()}function Cd(n){if(n instanceof Ce)return n.clone();var i=new tn(n.__wrapped__,n.__chain__);return i.__actions__=Lt(n.__actions__),i.__index__=n.__index__,i.__values__=n.__values__,i}function mb(n,i,a){(a?kt(n,i,a):i===r)?i=1:i=ut(me(i),0);var f=n==null?0:n.length;if(!f||i<1)return[];for(var g=0,_=0,x=M(Gs(f/i));g<f;)x[_++]=rn(n,g,g+=i);return x}function bb(n){for(var i=-1,a=n==null?0:n.length,f=0,g=[];++i<a;){var _=n[i];_&&(g[f++]=_)}return g}function yb(){var n=arguments.length;if(!n)return[];for(var i=M(n-1),a=arguments[0],f=n;f--;)i[f-1]=arguments[f];return nr(ve(a)?Lt(a):[a],bt(i,1))}var _b=we(function(n,i){return rt(n)?Xi(n,bt(i,1,rt,!0)):[]}),wb=we(function(n,i){var a=sn(i);return rt(a)&&(a=r),rt(n)?Xi(n,bt(i,1,rt,!0),le(a,2)):[]}),$b=we(function(n,i){var a=sn(i);return rt(a)&&(a=r),rt(n)?Xi(n,bt(i,1,rt,!0),r,a):[]});function xb(n,i,a){var f=n==null?0:n.length;return f?(i=a||i===r?1:me(i),rn(n,i<0?0:i,f)):[]}function kb(n,i,a){var f=n==null?0:n.length;return f?(i=a||i===r?1:me(i),i=f-i,rn(n,0,i<0?0:i)):[]}function Cb(n,i){return n&&n.length?ro(n,le(i,3),!0,!0):[]}function Sb(n,i){return n&&n.length?ro(n,le(i,3),!0):[]}function Eb(n,i,a,f){var g=n==null?0:n.length;return g?(a&&typeof a!="number"&&kt(n,i,a)&&(a=0,f=g),ym(n,i,a,f)):[]}function Sd(n,i,a){var f=n==null?0:n.length;if(!f)return-1;var g=a==null?0:me(a);return g<0&&(g=ut(f+g,0)),Bs(n,le(i,3),g)}function Ed(n,i,a){var f=n==null?0:n.length;if(!f)return-1;var g=f-1;return a!==r&&(g=me(a),g=a<0?ut(f+g,0):_t(g,f-1)),Bs(n,le(i,3),g,!0)}function Td(n){var i=n==null?0:n.length;return i?bt(n,1):[]}function Tb(n){var i=n==null?0:n.length;return i?bt(n,re):[]}function Ab(n,i){var a=n==null?0:n.length;return a?(i=i===r?1:me(i),bt(n,i)):[]}function Ib(n){for(var i=-1,a=n==null?0:n.length,f={};++i<a;){var g=n[i];f[g[0]]=g[1]}return f}function Ad(n){return n&&n.length?n[0]:r}function Rb(n,i,a){var f=n==null?0:n.length;if(!f)return-1;var g=a==null?0:me(a);return g<0&&(g=ut(f+g,0)),Xr(n,i,g)}function Lb(n){var i=n==null?0:n.length;return i?rn(n,0,-1):[]}var Ob=we(function(n){var i=Xe(n,vl);return i.length&&i[0]===n[0]?ol(i):[]}),Pb=we(function(n){var i=sn(n),a=Xe(n,vl);return i===sn(a)?i=r:a.pop(),a.length&&a[0]===n[0]?ol(a,le(i,2)):[]}),Mb=we(function(n){var i=sn(n),a=Xe(n,vl);return i=typeof i=="function"?i:r,i&&a.pop(),a.length&&a[0]===n[0]?ol(a,r,i):[]});function Bb(n,i){return n==null?"":L2.call(n,i)}function sn(n){var i=n==null?0:n.length;return i?n[i-1]:r}function Ub(n,i,a){var f=n==null?0:n.length;if(!f)return-1;var g=f;return a!==r&&(g=me(a),g=g<0?ut(f+g,0):_t(g,f-1)),i===i?v2(n,i,g):Bs(n,cf,g,!0)}function Db(n,i){return n&&n.length?Ff(n,me(i)):r}var Hb=we(Id);function Id(n,i){return n&&n.length&&i&&i.length?ul(n,i):n}function Fb(n,i,a){return n&&n.length&&i&&i.length?ul(n,i,le(a,2)):n}function jb(n,i,a){return n&&n.length&&i&&i.length?ul(n,i,r,a):n}var zb=jn(function(n,i){var a=n==null?0:n.length,f=nl(n,i);return Nf(n,Xe(i,function(g){return zn(g,a)?+g:g}).sort(Jf)),f});function Nb(n,i){var a=[];if(!(n&&n.length))return a;var f=-1,g=[],_=n.length;for(i=le(i,3);++f<_;){var x=n[f];i(x,f,n)&&(a.push(x),g.push(f))}return Nf(n,g),a}function Il(n){return n==null?n:B2.call(n)}function Wb(n,i,a){var f=n==null?0:n.length;return f?(a&&typeof a!="number"&&kt(n,i,a)?(i=0,a=f):(i=i==null?0:me(i),a=a===r?f:me(a)),rn(n,i,a)):[]}function qb(n,i){return no(n,i)}function Kb(n,i,a){return hl(n,i,le(a,2))}function Gb(n,i){var a=n==null?0:n.length;if(a){var f=no(n,i);if(f<a&&hn(n[f],i))return f}return-1}function Vb(n,i){return no(n,i,!0)}function Qb(n,i,a){return hl(n,i,le(a,2),!0)}function Zb(n,i){var a=n==null?0:n.length;if(a){var f=no(n,i,!0)-1;if(hn(n[f],i))return f}return-1}function Xb(n){return n&&n.length?qf(n):[]}function Yb(n,i){return n&&n.length?qf(n,le(i,2)):[]}function Jb(n){var i=n==null?0:n.length;return i?rn(n,1,i):[]}function ey(n,i,a){return n&&n.length?(i=a||i===r?1:me(i),rn(n,0,i<0?0:i)):[]}function ty(n,i,a){var f=n==null?0:n.length;return f?(i=a||i===r?1:me(i),i=f-i,rn(n,i<0?0:i,f)):[]}function ny(n,i){return n&&n.length?ro(n,le(i,3),!1,!0):[]}function ry(n,i){return n&&n.length?ro(n,le(i,3)):[]}var iy=we(function(n){return or(bt(n,1,rt,!0))}),sy=we(function(n){var i=sn(n);return rt(i)&&(i=r),or(bt(n,1,rt,!0),le(i,2))}),oy=we(function(n){var i=sn(n);return i=typeof i=="function"?i:r,or(bt(n,1,rt,!0),r,i)});function ay(n){return n&&n.length?or(n):[]}function ly(n,i){return n&&n.length?or(n,le(i,2)):[]}function cy(n,i){return i=typeof i=="function"?i:r,n&&n.length?or(n,r,i):[]}function Rl(n){if(!(n&&n.length))return[];var i=0;return n=tr(n,function(a){if(rt(a))return i=ut(a.length,i),!0}),Va(i,function(a){return Xe(n,qa(a))})}function Rd(n,i){if(!(n&&n.length))return[];var a=Rl(n);return i==null?a:Xe(a,function(f){return zt(i,r,f)})}var uy=we(function(n,i){return rt(n)?Xi(n,i):[]}),fy=we(function(n){return gl(tr(n,rt))}),dy=we(function(n){var i=sn(n);return rt(i)&&(i=r),gl(tr(n,rt),le(i,2))}),hy=we(function(n){var i=sn(n);return i=typeof i=="function"?i:r,gl(tr(n,rt),r,i)}),py=we(Rl);function gy(n,i){return Qf(n||[],i||[],Zi)}function vy(n,i){return Qf(n||[],i||[],es)}var my=we(function(n){var i=n.length,a=i>1?n[i-1]:r;return a=typeof a=="function"?(n.pop(),a):r,Rd(n,a)});function Ld(n){var i=b(n);return i.__chain__=!0,i}function by(n,i){return i(n),n}function ho(n,i){return i(n)}var yy=jn(function(n){var i=n.length,a=i?n[0]:0,f=this.__wrapped__,g=function(_){return nl(_,n)};return i>1||this.__actions__.length||!(f instanceof Ce)||!zn(a)?this.thru(g):(f=f.slice(a,+a+(i?1:0)),f.__actions__.push({func:ho,args:[g],thisArg:r}),new tn(f,this.__chain__).thru(function(_){return i&&!_.length&&_.push(r),_}))});function _y(){return Ld(this)}function wy(){return new tn(this.value(),this.__chain__)}function $y(){this.__values__===r&&(this.__values__=Kd(this.value()));var n=this.__index__>=this.__values__.length,i=n?r:this.__values__[this.__index__++];return{done:n,value:i}}function xy(){return this}function ky(n){for(var i,a=this;a instanceof Xs;){var f=Cd(a);f.__index__=0,f.__values__=r,i?g.__wrapped__=f:i=f;var g=f;a=a.__wrapped__}return g.__wrapped__=n,i}function Cy(){var n=this.__wrapped__;if(n instanceof Ce){var i=n;return this.__actions__.length&&(i=new Ce(this)),i=i.reverse(),i.__actions__.push({func:ho,args:[Il],thisArg:r}),new tn(i,this.__chain__)}return this.thru(Il)}function Sy(){return Vf(this.__wrapped__,this.__actions__)}var Ey=io(function(n,i,a){je.call(n,a)?++n[a]:Hn(n,a,1)});function Ty(n,i,a){var f=ve(n)?af:bm;return a&&kt(n,i,a)&&(i=r),f(n,le(i,3))}function Ay(n,i){var a=ve(n)?tr:Rf;return a(n,le(i,3))}var Iy=sd(Sd),Ry=sd(Ed);function Ly(n,i){return bt(po(n,i),1)}function Oy(n,i){return bt(po(n,i),re)}function Py(n,i,a){return a=a===r?1:me(a),bt(po(n,i),a)}function Od(n,i){var a=ve(n)?Jt:sr;return a(n,le(i,3))}function Pd(n,i){var a=ve(n)?Jv:If;return a(n,le(i,3))}var My=io(function(n,i,a){je.call(n,a)?n[a].push(i):Hn(n,a,[i])});function By(n,i,a,f){n=Ot(n)?n:ci(n),a=a&&!f?me(a):0;var g=n.length;return a<0&&(a=ut(g+a,0)),yo(n)?a<=g&&n.indexOf(i,a)>-1:!!g&&Xr(n,i,a)>-1}var Uy=we(function(n,i,a){var f=-1,g=typeof i=="function",_=Ot(n)?M(n.length):[];return sr(n,function(x){_[++f]=g?zt(i,x,a):Yi(x,i,a)}),_}),Dy=io(function(n,i,a){Hn(n,a,i)});function po(n,i){var a=ve(n)?Xe:Uf;return a(n,le(i,3))}function Hy(n,i,a,f){return n==null?[]:(ve(i)||(i=i==null?[]:[i]),a=f?r:a,ve(a)||(a=a==null?[]:[a]),jf(n,i,a))}var Fy=io(function(n,i,a){n[a?0:1].push(i)},function(){return[[],[]]});function jy(n,i,a){var f=ve(n)?Na:ff,g=arguments.length<3;return f(n,le(i,4),a,g,sr)}function zy(n,i,a){var f=ve(n)?e2:ff,g=arguments.length<3;return f(n,le(i,4),a,g,If)}function Ny(n,i){var a=ve(n)?tr:Rf;return a(n,mo(le(i,3)))}function Wy(n){var i=ve(n)?Sf:Bm;return i(n)}function qy(n,i,a){(a?kt(n,i,a):i===r)?i=1:i=me(i);var f=ve(n)?hm:Um;return f(n,i)}function Ky(n){var i=ve(n)?pm:Hm;return i(n)}function Gy(n){if(n==null)return 0;if(Ot(n))return yo(n)?Jr(n):n.length;var i=wt(n);return i==lt||i==Be?n.size:ll(n).length}function Vy(n,i,a){var f=ve(n)?Wa:Fm;return a&&kt(n,i,a)&&(i=r),f(n,le(i,3))}var Qy=we(function(n,i){if(n==null)return[];var a=i.length;return a>1&&kt(n,i[0],i[1])?i=[]:a>2&&kt(i[0],i[1],i[2])&&(i=[i[0]]),jf(n,bt(i,1),[])}),go=A2||function(){return mt.Date.now()};function Zy(n,i){if(typeof i!="function")throw new en(c);return n=me(n),function(){if(--n<1)return i.apply(this,arguments)}}function Md(n,i,a){return i=a?r:i,i=n&&i==null?n.length:i,Fn(n,W,r,r,r,r,i)}function Bd(n,i){var a;if(typeof i!="function")throw new en(c);return n=me(n),function(){return--n>0&&(a=i.apply(this,arguments)),n<=1&&(i=r),a}}var Ll=we(function(n,i,a){var f=S;if(a.length){var g=rr(a,ai(Ll));f|=E}return Fn(n,f,i,a,g)}),Ud=we(function(n,i,a){var f=S|L;if(a.length){var g=rr(a,ai(Ud));f|=E}return Fn(i,f,n,a,g)});function Dd(n,i,a){i=a?r:i;var f=Fn(n,B,r,r,r,r,r,i);return f.placeholder=Dd.placeholder,f}function Hd(n,i,a){i=a?r:i;var f=Fn(n,R,r,r,r,r,r,i);return f.placeholder=Hd.placeholder,f}function Fd(n,i,a){var f,g,_,x,C,A,F=0,j=!1,q=!1,Q=!0;if(typeof n!="function")throw new en(c);i=on(i)||0,tt(a)&&(j=!!a.leading,q="maxWait"in a,_=q?ut(on(a.maxWait)||0,i):_,Q="trailing"in a?!!a.trailing:Q);function ie(it){var pn=f,qn=g;return f=g=r,F=it,x=n.apply(qn,pn),x}function ue(it){return F=it,C=rs(xe,i),j?ie(it):x}function ye(it){var pn=it-A,qn=it-F,sh=i-pn;return q?_t(sh,_-qn):sh}function fe(it){var pn=it-A,qn=it-F;return A===r||pn>=i||pn<0||q&&qn>=_}function xe(){var it=go();if(fe(it))return Se(it);C=rs(xe,ye(it))}function Se(it){return C=r,Q&&f?ie(it):(f=g=r,x)}function Kt(){C!==r&&Zf(C),F=0,f=A=g=C=r}function Ct(){return C===r?x:Se(go())}function Gt(){var it=go(),pn=fe(it);if(f=arguments,g=this,A=it,pn){if(C===r)return ue(A);if(q)return Zf(C),C=rs(xe,i),ie(A)}return C===r&&(C=rs(xe,i)),x}return Gt.cancel=Kt,Gt.flush=Ct,Gt}var Xy=we(function(n,i){return Af(n,1,i)}),Yy=we(function(n,i,a){return Af(n,on(i)||0,a)});function Jy(n){return Fn(n,ne)}function vo(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new en(c);var a=function(){var f=arguments,g=i?i.apply(this,f):f[0],_=a.cache;if(_.has(g))return _.get(g);var x=n.apply(this,f);return a.cache=_.set(g,x)||_,x};return a.cache=new(vo.Cache||Dn),a}vo.Cache=Dn;function mo(n){if(typeof n!="function")throw new en(c);return function(){var i=arguments;switch(i.length){case 0:return!n.call(this);case 1:return!n.call(this,i[0]);case 2:return!n.call(this,i[0],i[1]);case 3:return!n.call(this,i[0],i[1],i[2])}return!n.apply(this,i)}}function e_(n){return Bd(2,n)}var t_=jm(function(n,i){i=i.length==1&&ve(i[0])?Xe(i[0],Nt(le())):Xe(bt(i,1),Nt(le()));var a=i.length;return we(function(f){for(var g=-1,_=_t(f.length,a);++g<_;)f[g]=i[g].call(this,f[g]);return zt(n,this,f)})}),Ol=we(function(n,i){var a=rr(i,ai(Ol));return Fn(n,E,r,i,a)}),jd=we(function(n,i){var a=rr(i,ai(jd));return Fn(n,O,r,i,a)}),n_=jn(function(n,i){return Fn(n,z,r,r,r,i)});function r_(n,i){if(typeof n!="function")throw new en(c);return i=i===r?i:me(i),we(n,i)}function i_(n,i){if(typeof n!="function")throw new en(c);return i=i==null?0:ut(me(i),0),we(function(a){var f=a[i],g=lr(a,0,i);return f&&nr(g,f),zt(n,this,g)})}function s_(n,i,a){var f=!0,g=!0;if(typeof n!="function")throw new en(c);return tt(a)&&(f="leading"in a?!!a.leading:f,g="trailing"in a?!!a.trailing:g),Fd(n,i,{leading:f,maxWait:i,trailing:g})}function o_(n){return Md(n,1)}function a_(n,i){return Ol(ml(i),n)}function l_(){if(!arguments.length)return[];var n=arguments[0];return ve(n)?n:[n]}function c_(n){return nn(n,y)}function u_(n,i){return i=typeof i=="function"?i:r,nn(n,y,i)}function f_(n){return nn(n,v|y)}function d_(n,i){return i=typeof i=="function"?i:r,nn(n,v|y,i)}function h_(n,i){return i==null||Tf(n,i,pt(i))}function hn(n,i){return n===i||n!==n&&i!==i}var p_=lo(sl),g_=lo(function(n,i){return n>=i}),Hr=Pf(function(){return arguments}())?Pf:function(n){return nt(n)&&je.call(n,"callee")&&!_f.call(n,"callee")},ve=M.isArray,v_=ef?Nt(ef):km;function Ot(n){return n!=null&&bo(n.length)&&!Nn(n)}function rt(n){return nt(n)&&Ot(n)}function m_(n){return n===!0||n===!1||nt(n)&&xt(n)==et}var cr=R2||Wl,b_=tf?Nt(tf):Cm;function y_(n){return nt(n)&&n.nodeType===1&&!is(n)}function __(n){if(n==null)return!0;if(Ot(n)&&(ve(n)||typeof n=="string"||typeof n.splice=="function"||cr(n)||li(n)||Hr(n)))return!n.length;var i=wt(n);if(i==lt||i==Be)return!n.size;if(ns(n))return!ll(n).length;for(var a in n)if(je.call(n,a))return!1;return!0}function w_(n,i){return Ji(n,i)}function $_(n,i,a){a=typeof a=="function"?a:r;var f=a?a(n,i):r;return f===r?Ji(n,i,r,a):!!f}function Pl(n){if(!nt(n))return!1;var i=xt(n);return i==Ht||i==Tt||typeof n.message=="string"&&typeof n.name=="string"&&!is(n)}function x_(n){return typeof n=="number"&&$f(n)}function Nn(n){if(!tt(n))return!1;var i=xt(n);return i==At||i==Ft||i==ae||i==Ze}function zd(n){return typeof n=="number"&&n==me(n)}function bo(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=de}function tt(n){var i=typeof n;return n!=null&&(i=="object"||i=="function")}function nt(n){return n!=null&&typeof n=="object"}var Nd=nf?Nt(nf):Em;function k_(n,i){return n===i||al(n,i,kl(i))}function C_(n,i,a){return a=typeof a=="function"?a:r,al(n,i,kl(i),a)}function S_(n){return Wd(n)&&n!=+n}function E_(n){if(ub(n))throw new ge(l);return Mf(n)}function T_(n){return n===null}function A_(n){return n==null}function Wd(n){return typeof n=="number"||nt(n)&&xt(n)==It}function is(n){if(!nt(n)||xt(n)!=dt)return!1;var i=Ws(n);if(i===null)return!0;var a=je.call(i,"constructor")&&i.constructor;return typeof a=="function"&&a instanceof a&&Fs.call(a)==C2}var Ml=rf?Nt(rf):Tm;function I_(n){return zd(n)&&n>=-de&&n<=de}var qd=sf?Nt(sf):Am;function yo(n){return typeof n=="string"||!ve(n)&&nt(n)&&xt(n)==Ue}function qt(n){return typeof n=="symbol"||nt(n)&&xt(n)==at}var li=of?Nt(of):Im;function R_(n){return n===r}function L_(n){return nt(n)&&wt(n)==ht}function O_(n){return nt(n)&&xt(n)==Mn}var P_=lo(cl),M_=lo(function(n,i){return n<=i});function Kd(n){if(!n)return[];if(Ot(n))return yo(n)?fn(n):Lt(n);if(qi&&n[qi])return h2(n[qi]());var i=wt(n),a=i==lt?Za:i==Be?Us:ci;return a(n)}function Wn(n){if(!n)return n===0?n:0;if(n=on(n),n===re||n===-re){var i=n<0?-1:1;return i*Te}return n===n?n:0}function me(n){var i=Wn(n),a=i%1;return i===i?a?i-a:i:0}function Gd(n){return n?Mr(me(n),0,se):0}function on(n){if(typeof n=="number")return n;if(qt(n))return Re;if(tt(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=tt(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=df(n);var a=vv.test(n);return a||bv.test(n)?Zv(n.slice(2),a?2:8):gv.test(n)?Re:+n}function Vd(n){return Cn(n,Pt(n))}function B_(n){return n?Mr(me(n),-de,de):n===0?n:0}function De(n){return n==null?"":Wt(n)}var U_=si(function(n,i){if(ns(i)||Ot(i)){Cn(i,pt(i),n);return}for(var a in i)je.call(i,a)&&Zi(n,a,i[a])}),Qd=si(function(n,i){Cn(i,Pt(i),n)}),_o=si(function(n,i,a,f){Cn(i,Pt(i),n,f)}),D_=si(function(n,i,a,f){Cn(i,pt(i),n,f)}),H_=jn(nl);function F_(n,i){var a=ii(n);return i==null?a:Ef(a,i)}var j_=we(function(n,i){n=We(n);var a=-1,f=i.length,g=f>2?i[2]:r;for(g&&kt(i[0],i[1],g)&&(f=1);++a<f;)for(var _=i[a],x=Pt(_),C=-1,A=x.length;++C<A;){var F=x[C],j=n[F];(j===r||hn(j,ti[F])&&!je.call(n,F))&&(n[F]=_[F])}return n}),z_=we(function(n){return n.push(r,dd),zt(Zd,r,n)});function N_(n,i){return lf(n,le(i,3),kn)}function W_(n,i){return lf(n,le(i,3),il)}function q_(n,i){return n==null?n:rl(n,le(i,3),Pt)}function K_(n,i){return n==null?n:Lf(n,le(i,3),Pt)}function G_(n,i){return n&&kn(n,le(i,3))}function V_(n,i){return n&&il(n,le(i,3))}function Q_(n){return n==null?[]:eo(n,pt(n))}function Z_(n){return n==null?[]:eo(n,Pt(n))}function Bl(n,i,a){var f=n==null?r:Br(n,i);return f===r?a:f}function X_(n,i){return n!=null&&gd(n,i,_m)}function Ul(n,i){return n!=null&&gd(n,i,wm)}var Y_=ad(function(n,i,a){i!=null&&typeof i.toString!="function"&&(i=js.call(i)),n[i]=a},Hl(Mt)),J_=ad(function(n,i,a){i!=null&&typeof i.toString!="function"&&(i=js.call(i)),je.call(n,i)?n[i].push(a):n[i]=[a]},le),e3=we(Yi);function pt(n){return Ot(n)?Cf(n):ll(n)}function Pt(n){return Ot(n)?Cf(n,!0):Rm(n)}function t3(n,i){var a={};return i=le(i,3),kn(n,function(f,g,_){Hn(a,i(f,g,_),f)}),a}function n3(n,i){var a={};return i=le(i,3),kn(n,function(f,g,_){Hn(a,g,i(f,g,_))}),a}var r3=si(function(n,i,a){to(n,i,a)}),Zd=si(function(n,i,a,f){to(n,i,a,f)}),i3=jn(function(n,i){var a={};if(n==null)return a;var f=!1;i=Xe(i,function(_){return _=ar(_,n),f||(f=_.length>1),_}),Cn(n,$l(n),a),f&&(a=nn(a,v|m|y,Ym));for(var g=i.length;g--;)pl(a,i[g]);return a});function s3(n,i){return Xd(n,mo(le(i)))}var o3=jn(function(n,i){return n==null?{}:Om(n,i)});function Xd(n,i){if(n==null)return{};var a=Xe($l(n),function(f){return[f]});return i=le(i),zf(n,a,function(f,g){return i(f,g[0])})}function a3(n,i,a){i=ar(i,n);var f=-1,g=i.length;for(g||(g=1,n=r);++f<g;){var _=n==null?r:n[Sn(i[f])];_===r&&(f=g,_=a),n=Nn(_)?_.call(n):_}return n}function l3(n,i,a){return n==null?n:es(n,i,a)}function c3(n,i,a,f){return f=typeof f=="function"?f:r,n==null?n:es(n,i,a,f)}var Yd=ud(pt),Jd=ud(Pt);function u3(n,i,a){var f=ve(n),g=f||cr(n)||li(n);if(i=le(i,4),a==null){var _=n&&n.constructor;g?a=f?new _:[]:tt(n)?a=Nn(_)?ii(Ws(n)):{}:a={}}return(g?Jt:kn)(n,function(x,C,A){return i(a,x,C,A)}),a}function f3(n,i){return n==null?!0:pl(n,i)}function d3(n,i,a){return n==null?n:Gf(n,i,ml(a))}function h3(n,i,a,f){return f=typeof f=="function"?f:r,n==null?n:Gf(n,i,ml(a),f)}function ci(n){return n==null?[]:Qa(n,pt(n))}function p3(n){return n==null?[]:Qa(n,Pt(n))}function g3(n,i,a){return a===r&&(a=i,i=r),a!==r&&(a=on(a),a=a===a?a:0),i!==r&&(i=on(i),i=i===i?i:0),Mr(on(n),i,a)}function v3(n,i,a){return i=Wn(i),a===r?(a=i,i=0):a=Wn(a),n=on(n),$m(n,i,a)}function m3(n,i,a){if(a&&typeof a!="boolean"&&kt(n,i,a)&&(i=a=r),a===r&&(typeof i=="boolean"?(a=i,i=r):typeof n=="boolean"&&(a=n,n=r)),n===r&&i===r?(n=0,i=1):(n=Wn(n),i===r?(i=n,n=0):i=Wn(i)),n>i){var f=n;n=i,i=f}if(a||n%1||i%1){var g=xf();return _t(n+g*(i-n+Qv("1e-"+((g+"").length-1))),i)}return fl(n,i)}var b3=oi(function(n,i,a){return i=i.toLowerCase(),n+(a?eh(i):i)});function eh(n){return Dl(De(n).toLowerCase())}function th(n){return n=De(n),n&&n.replace(_v,l2).replace(Hv,"")}function y3(n,i,a){n=De(n),i=Wt(i);var f=n.length;a=a===r?f:Mr(me(a),0,f);var g=a;return a-=i.length,a>=0&&n.slice(a,g)==i}function _3(n){return n=De(n),n&&ev.test(n)?n.replace(Ru,c2):n}function w3(n){return n=De(n),n&&ov.test(n)?n.replace(Oa,"\\$&"):n}var $3=oi(function(n,i,a){return n+(a?"-":"")+i.toLowerCase()}),x3=oi(function(n,i,a){return n+(a?" ":"")+i.toLowerCase()}),k3=id("toLowerCase");function C3(n,i,a){n=De(n),i=me(i);var f=i?Jr(n):0;if(!i||f>=i)return n;var g=(i-f)/2;return ao(Vs(g),a)+n+ao(Gs(g),a)}function S3(n,i,a){n=De(n),i=me(i);var f=i?Jr(n):0;return i&&f<i?n+ao(i-f,a):n}function E3(n,i,a){n=De(n),i=me(i);var f=i?Jr(n):0;return i&&f<i?ao(i-f,a)+n:n}function T3(n,i,a){return a||i==null?i=0:i&&(i=+i),M2(De(n).replace(Pa,""),i||0)}function A3(n,i,a){return(a?kt(n,i,a):i===r)?i=1:i=me(i),dl(De(n),i)}function I3(){var n=arguments,i=De(n[0]);return n.length<3?i:i.replace(n[1],n[2])}var R3=oi(function(n,i,a){return n+(a?"_":"")+i.toLowerCase()});function L3(n,i,a){return a&&typeof a!="number"&&kt(n,i,a)&&(i=a=r),a=a===r?se:a>>>0,a?(n=De(n),n&&(typeof i=="string"||i!=null&&!Ml(i))&&(i=Wt(i),!i&&Yr(n))?lr(fn(n),0,a):n.split(i,a)):[]}var O3=oi(function(n,i,a){return n+(a?" ":"")+Dl(i)});function P3(n,i,a){return n=De(n),a=a==null?0:Mr(me(a),0,n.length),i=Wt(i),n.slice(a,a+i.length)==i}function M3(n,i,a){var f=b.templateSettings;a&&kt(n,i,a)&&(i=r),n=De(n),i=_o({},i,f,fd);var g=_o({},i.imports,f.imports,fd),_=pt(g),x=Qa(g,_),C,A,F=0,j=i.interpolate||Ls,q="__p += '",Q=Xa((i.escape||Ls).source+"|"+j.source+"|"+(j===Lu?pv:Ls).source+"|"+(i.evaluate||Ls).source+"|$","g"),ie="//# sourceURL="+(je.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Wv+"]")+`
`;n.replace(Q,function(fe,xe,Se,Kt,Ct,Gt){return Se||(Se=Kt),q+=n.slice(F,Gt).replace(wv,u2),xe&&(C=!0,q+=`' +
__e(`+xe+`) +
'`),Ct&&(A=!0,q+=`';
`+Ct+`;
__p += '`),Se&&(q+=`' +
((__t = (`+Se+`)) == null ? '' : __t) +
'`),F=Gt+fe.length,fe}),q+=`';
`;var ue=je.call(i,"variable")&&i.variable;if(!ue)q=`with (obj) {
`+q+`
}
`;else if(dv.test(ue))throw new ge(u);q=(A?q.replace(Zg,""):q).replace(Xg,"$1").replace(Yg,"$1;"),q="function("+(ue||"obj")+`) {
`+(ue?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(C?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+q+`return __p
}`;var ye=rh(function(){return Le(_,ie+"return "+q).apply(r,x)});if(ye.source=q,Pl(ye))throw ye;return ye}function B3(n){return De(n).toLowerCase()}function U3(n){return De(n).toUpperCase()}function D3(n,i,a){if(n=De(n),n&&(a||i===r))return df(n);if(!n||!(i=Wt(i)))return n;var f=fn(n),g=fn(i),_=hf(f,g),x=pf(f,g)+1;return lr(f,_,x).join("")}function H3(n,i,a){if(n=De(n),n&&(a||i===r))return n.slice(0,vf(n)+1);if(!n||!(i=Wt(i)))return n;var f=fn(n),g=pf(f,fn(i))+1;return lr(f,0,g).join("")}function F3(n,i,a){if(n=De(n),n&&(a||i===r))return n.replace(Pa,"");if(!n||!(i=Wt(i)))return n;var f=fn(n),g=hf(f,fn(i));return lr(f,g).join("")}function j3(n,i){var a=V,f=Y;if(tt(i)){var g="separator"in i?i.separator:g;a="length"in i?me(i.length):a,f="omission"in i?Wt(i.omission):f}n=De(n);var _=n.length;if(Yr(n)){var x=fn(n);_=x.length}if(a>=_)return n;var C=a-Jr(f);if(C<1)return f;var A=x?lr(x,0,C).join(""):n.slice(0,C);if(g===r)return A+f;if(x&&(C+=A.length-C),Ml(g)){if(n.slice(C).search(g)){var F,j=A;for(g.global||(g=Xa(g.source,De(Ou.exec(g))+"g")),g.lastIndex=0;F=g.exec(j);)var q=F.index;A=A.slice(0,q===r?C:q)}}else if(n.indexOf(Wt(g),C)!=C){var Q=A.lastIndexOf(g);Q>-1&&(A=A.slice(0,Q))}return A+f}function z3(n){return n=De(n),n&&Jg.test(n)?n.replace(Iu,m2):n}var N3=oi(function(n,i,a){return n+(a?" ":"")+i.toUpperCase()}),Dl=id("toUpperCase");function nh(n,i,a){return n=De(n),i=a?r:i,i===r?d2(n)?_2(n):r2(n):n.match(i)||[]}var rh=we(function(n,i){try{return zt(n,r,i)}catch(a){return Pl(a)?a:new ge(a)}}),W3=jn(function(n,i){return Jt(i,function(a){a=Sn(a),Hn(n,a,Ll(n[a],n))}),n});function q3(n){var i=n==null?0:n.length,a=le();return n=i?Xe(n,function(f){if(typeof f[1]!="function")throw new en(c);return[a(f[0]),f[1]]}):[],we(function(f){for(var g=-1;++g<i;){var _=n[g];if(zt(_[0],this,f))return zt(_[1],this,f)}})}function K3(n){return mm(nn(n,v))}function Hl(n){return function(){return n}}function G3(n,i){return n==null||n!==n?i:n}var V3=od(),Q3=od(!0);function Mt(n){return n}function Fl(n){return Bf(typeof n=="function"?n:nn(n,v))}function Z3(n){return Df(nn(n,v))}function X3(n,i){return Hf(n,nn(i,v))}var Y3=we(function(n,i){return function(a){return Yi(a,n,i)}}),J3=we(function(n,i){return function(a){return Yi(n,a,i)}});function jl(n,i,a){var f=pt(i),g=eo(i,f);a==null&&!(tt(i)&&(g.length||!f.length))&&(a=i,i=n,n=this,g=eo(i,pt(i)));var _=!(tt(a)&&"chain"in a)||!!a.chain,x=Nn(n);return Jt(g,function(C){var A=i[C];n[C]=A,x&&(n.prototype[C]=function(){var F=this.__chain__;if(_||F){var j=n(this.__wrapped__),q=j.__actions__=Lt(this.__actions__);return q.push({func:A,args:arguments,thisArg:n}),j.__chain__=F,j}return A.apply(n,nr([this.value()],arguments))})}),n}function ew(){return mt._===this&&(mt._=S2),this}function zl(){}function tw(n){return n=me(n),we(function(i){return Ff(i,n)})}var nw=yl(Xe),rw=yl(af),iw=yl(Wa);function ih(n){return Sl(n)?qa(Sn(n)):Pm(n)}function sw(n){return function(i){return n==null?r:Br(n,i)}}var ow=ld(),aw=ld(!0);function Nl(){return[]}function Wl(){return!1}function lw(){return{}}function cw(){return""}function uw(){return!0}function fw(n,i){if(n=me(n),n<1||n>de)return[];var a=se,f=_t(n,se);i=le(i),n-=se;for(var g=Va(f,i);++a<n;)i(a);return g}function dw(n){return ve(n)?Xe(n,Sn):qt(n)?[n]:Lt(kd(De(n)))}function hw(n){var i=++k2;return De(n)+i}var pw=oo(function(n,i){return n+i},0),gw=_l("ceil"),vw=oo(function(n,i){return n/i},1),mw=_l("floor");function bw(n){return n&&n.length?Js(n,Mt,sl):r}function yw(n,i){return n&&n.length?Js(n,le(i,2),sl):r}function _w(n){return uf(n,Mt)}function ww(n,i){return uf(n,le(i,2))}function $w(n){return n&&n.length?Js(n,Mt,cl):r}function xw(n,i){return n&&n.length?Js(n,le(i,2),cl):r}var kw=oo(function(n,i){return n*i},1),Cw=_l("round"),Sw=oo(function(n,i){return n-i},0);function Ew(n){return n&&n.length?Ga(n,Mt):0}function Tw(n,i){return n&&n.length?Ga(n,le(i,2)):0}return b.after=Zy,b.ary=Md,b.assign=U_,b.assignIn=Qd,b.assignInWith=_o,b.assignWith=D_,b.at=H_,b.before=Bd,b.bind=Ll,b.bindAll=W3,b.bindKey=Ud,b.castArray=l_,b.chain=Ld,b.chunk=mb,b.compact=bb,b.concat=yb,b.cond=q3,b.conforms=K3,b.constant=Hl,b.countBy=Ey,b.create=F_,b.curry=Dd,b.curryRight=Hd,b.debounce=Fd,b.defaults=j_,b.defaultsDeep=z_,b.defer=Xy,b.delay=Yy,b.difference=_b,b.differenceBy=wb,b.differenceWith=$b,b.drop=xb,b.dropRight=kb,b.dropRightWhile=Cb,b.dropWhile=Sb,b.fill=Eb,b.filter=Ay,b.flatMap=Ly,b.flatMapDeep=Oy,b.flatMapDepth=Py,b.flatten=Td,b.flattenDeep=Tb,b.flattenDepth=Ab,b.flip=Jy,b.flow=V3,b.flowRight=Q3,b.fromPairs=Ib,b.functions=Q_,b.functionsIn=Z_,b.groupBy=My,b.initial=Lb,b.intersection=Ob,b.intersectionBy=Pb,b.intersectionWith=Mb,b.invert=Y_,b.invertBy=J_,b.invokeMap=Uy,b.iteratee=Fl,b.keyBy=Dy,b.keys=pt,b.keysIn=Pt,b.map=po,b.mapKeys=t3,b.mapValues=n3,b.matches=Z3,b.matchesProperty=X3,b.memoize=vo,b.merge=r3,b.mergeWith=Zd,b.method=Y3,b.methodOf=J3,b.mixin=jl,b.negate=mo,b.nthArg=tw,b.omit=i3,b.omitBy=s3,b.once=e_,b.orderBy=Hy,b.over=nw,b.overArgs=t_,b.overEvery=rw,b.overSome=iw,b.partial=Ol,b.partialRight=jd,b.partition=Fy,b.pick=o3,b.pickBy=Xd,b.property=ih,b.propertyOf=sw,b.pull=Hb,b.pullAll=Id,b.pullAllBy=Fb,b.pullAllWith=jb,b.pullAt=zb,b.range=ow,b.rangeRight=aw,b.rearg=n_,b.reject=Ny,b.remove=Nb,b.rest=r_,b.reverse=Il,b.sampleSize=qy,b.set=l3,b.setWith=c3,b.shuffle=Ky,b.slice=Wb,b.sortBy=Qy,b.sortedUniq=Xb,b.sortedUniqBy=Yb,b.split=L3,b.spread=i_,b.tail=Jb,b.take=ey,b.takeRight=ty,b.takeRightWhile=ny,b.takeWhile=ry,b.tap=by,b.throttle=s_,b.thru=ho,b.toArray=Kd,b.toPairs=Yd,b.toPairsIn=Jd,b.toPath=dw,b.toPlainObject=Vd,b.transform=u3,b.unary=o_,b.union=iy,b.unionBy=sy,b.unionWith=oy,b.uniq=ay,b.uniqBy=ly,b.uniqWith=cy,b.unset=f3,b.unzip=Rl,b.unzipWith=Rd,b.update=d3,b.updateWith=h3,b.values=ci,b.valuesIn=p3,b.without=uy,b.words=nh,b.wrap=a_,b.xor=fy,b.xorBy=dy,b.xorWith=hy,b.zip=py,b.zipObject=gy,b.zipObjectDeep=vy,b.zipWith=my,b.entries=Yd,b.entriesIn=Jd,b.extend=Qd,b.extendWith=_o,jl(b,b),b.add=pw,b.attempt=rh,b.camelCase=b3,b.capitalize=eh,b.ceil=gw,b.clamp=g3,b.clone=c_,b.cloneDeep=f_,b.cloneDeepWith=d_,b.cloneWith=u_,b.conformsTo=h_,b.deburr=th,b.defaultTo=G3,b.divide=vw,b.endsWith=y3,b.eq=hn,b.escape=_3,b.escapeRegExp=w3,b.every=Ty,b.find=Iy,b.findIndex=Sd,b.findKey=N_,b.findLast=Ry,b.findLastIndex=Ed,b.findLastKey=W_,b.floor=mw,b.forEach=Od,b.forEachRight=Pd,b.forIn=q_,b.forInRight=K_,b.forOwn=G_,b.forOwnRight=V_,b.get=Bl,b.gt=p_,b.gte=g_,b.has=X_,b.hasIn=Ul,b.head=Ad,b.identity=Mt,b.includes=By,b.indexOf=Rb,b.inRange=v3,b.invoke=e3,b.isArguments=Hr,b.isArray=ve,b.isArrayBuffer=v_,b.isArrayLike=Ot,b.isArrayLikeObject=rt,b.isBoolean=m_,b.isBuffer=cr,b.isDate=b_,b.isElement=y_,b.isEmpty=__,b.isEqual=w_,b.isEqualWith=$_,b.isError=Pl,b.isFinite=x_,b.isFunction=Nn,b.isInteger=zd,b.isLength=bo,b.isMap=Nd,b.isMatch=k_,b.isMatchWith=C_,b.isNaN=S_,b.isNative=E_,b.isNil=A_,b.isNull=T_,b.isNumber=Wd,b.isObject=tt,b.isObjectLike=nt,b.isPlainObject=is,b.isRegExp=Ml,b.isSafeInteger=I_,b.isSet=qd,b.isString=yo,b.isSymbol=qt,b.isTypedArray=li,b.isUndefined=R_,b.isWeakMap=L_,b.isWeakSet=O_,b.join=Bb,b.kebabCase=$3,b.last=sn,b.lastIndexOf=Ub,b.lowerCase=x3,b.lowerFirst=k3,b.lt=P_,b.lte=M_,b.max=bw,b.maxBy=yw,b.mean=_w,b.meanBy=ww,b.min=$w,b.minBy=xw,b.stubArray=Nl,b.stubFalse=Wl,b.stubObject=lw,b.stubString=cw,b.stubTrue=uw,b.multiply=kw,b.nth=Db,b.noConflict=ew,b.noop=zl,b.now=go,b.pad=C3,b.padEnd=S3,b.padStart=E3,b.parseInt=T3,b.random=m3,b.reduce=jy,b.reduceRight=zy,b.repeat=A3,b.replace=I3,b.result=a3,b.round=Cw,b.runInContext=T,b.sample=Wy,b.size=Gy,b.snakeCase=R3,b.some=Vy,b.sortedIndex=qb,b.sortedIndexBy=Kb,b.sortedIndexOf=Gb,b.sortedLastIndex=Vb,b.sortedLastIndexBy=Qb,b.sortedLastIndexOf=Zb,b.startCase=O3,b.startsWith=P3,b.subtract=Sw,b.sum=Ew,b.sumBy=Tw,b.template=M3,b.times=fw,b.toFinite=Wn,b.toInteger=me,b.toLength=Gd,b.toLower=B3,b.toNumber=on,b.toSafeInteger=B_,b.toString=De,b.toUpper=U3,b.trim=D3,b.trimEnd=H3,b.trimStart=F3,b.truncate=j3,b.unescape=z3,b.uniqueId=hw,b.upperCase=N3,b.upperFirst=Dl,b.each=Od,b.eachRight=Pd,b.first=Ad,jl(b,function(){var n={};return kn(b,function(i,a){je.call(b.prototype,a)||(n[a]=i)}),n}(),{chain:!1}),b.VERSION=s,Jt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){b[n].placeholder=b}),Jt(["drop","take"],function(n,i){Ce.prototype[n]=function(a){a=a===r?1:ut(me(a),0);var f=this.__filtered__&&!i?new Ce(this):this.clone();return f.__filtered__?f.__takeCount__=_t(a,f.__takeCount__):f.__views__.push({size:_t(a,se),type:n+(f.__dir__<0?"Right":"")}),f},Ce.prototype[n+"Right"]=function(a){return this.reverse()[n](a).reverse()}}),Jt(["filter","map","takeWhile"],function(n,i){var a=i+1,f=a==he||a==K;Ce.prototype[n]=function(g){var _=this.clone();return _.__iteratees__.push({iteratee:le(g,3),type:a}),_.__filtered__=_.__filtered__||f,_}}),Jt(["head","last"],function(n,i){var a="take"+(i?"Right":"");Ce.prototype[n]=function(){return this[a](1).value()[0]}}),Jt(["initial","tail"],function(n,i){var a="drop"+(i?"":"Right");Ce.prototype[n]=function(){return this.__filtered__?new Ce(this):this[a](1)}}),Ce.prototype.compact=function(){return this.filter(Mt)},Ce.prototype.find=function(n){return this.filter(n).head()},Ce.prototype.findLast=function(n){return this.reverse().find(n)},Ce.prototype.invokeMap=we(function(n,i){return typeof n=="function"?new Ce(this):this.map(function(a){return Yi(a,n,i)})}),Ce.prototype.reject=function(n){return this.filter(mo(le(n)))},Ce.prototype.slice=function(n,i){n=me(n);var a=this;return a.__filtered__&&(n>0||i<0)?new Ce(a):(n<0?a=a.takeRight(-n):n&&(a=a.drop(n)),i!==r&&(i=me(i),a=i<0?a.dropRight(-i):a.take(i-n)),a)},Ce.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Ce.prototype.toArray=function(){return this.take(se)},kn(Ce.prototype,function(n,i){var a=/^(?:filter|find|map|reject)|While$/.test(i),f=/^(?:head|last)$/.test(i),g=b[f?"take"+(i=="last"?"Right":""):i],_=f||/^find/.test(i);g&&(b.prototype[i]=function(){var x=this.__wrapped__,C=f?[1]:arguments,A=x instanceof Ce,F=C[0],j=A||ve(x),q=function(xe){var Se=g.apply(b,nr([xe],C));return f&&Q?Se[0]:Se};j&&a&&typeof F=="function"&&F.length!=1&&(A=j=!1);var Q=this.__chain__,ie=!!this.__actions__.length,ue=_&&!Q,ye=A&&!ie;if(!_&&j){x=ye?x:new Ce(this);var fe=n.apply(x,C);return fe.__actions__.push({func:ho,args:[q],thisArg:r}),new tn(fe,Q)}return ue&&ye?n.apply(this,C):(fe=this.thru(q),ue?f?fe.value()[0]:fe.value():fe)})}),Jt(["pop","push","shift","sort","splice","unshift"],function(n){var i=Ds[n],a=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);b.prototype[n]=function(){var g=arguments;if(f&&!this.__chain__){var _=this.value();return i.apply(ve(_)?_:[],g)}return this[a](function(x){return i.apply(ve(x)?x:[],g)})}}),kn(Ce.prototype,function(n,i){var a=b[i];if(a){var f=a.name+"";je.call(ri,f)||(ri[f]=[]),ri[f].push({name:i,func:a})}}),ri[so(r,L).name]=[{name:"wrapper",func:r}],Ce.prototype.clone=z2,Ce.prototype.reverse=N2,Ce.prototype.value=W2,b.prototype.at=yy,b.prototype.chain=_y,b.prototype.commit=wy,b.prototype.next=$y,b.prototype.plant=ky,b.prototype.reverse=Cy,b.prototype.toJSON=b.prototype.valueOf=b.prototype.value=Sy,b.prototype.first=b.prototype.head,qi&&(b.prototype[qi]=xy),b},ei=w2();Rr?((Rr.exports=ei)._=ei,Fa._=ei):mt._=ei}).call(Vn)})(jo,jo.exports);var Yw=jo.exports;const Jw=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),s1=(e={})=>(()=>{const t=Jw();return Qe(t,e,!0,!0),t})(),e4=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),t4=P('<span class="inline-block h-4 w-4 text-gray-700">'),$s=e=>{const[t,r]=be(!1),s=()=>r(o=>!o);return(()=>{const o=e4(),l=o.firstChild,c=l.firstChild,u=c.firstChild,d=c.nextSibling;return I(c,$(oe,{get when(){return e.icon},keyed:!0,children:p=>(()=>{const h=t4();return I(h,p),h})()}),u),I(u,()=>e.name),d.$$click=()=>s(),I(d,$(s1,{})),I(o,$(oe,{get when(){return t()},get children(){return e.settings()}}),null),o})()};st(["click"]);const n4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),o1=(e={})=>(()=>{const t=n4();return Qe(t,e,!0,!0),t})();var r4=typeof Vn=="object"&&Vn&&Vn.Object===Object&&Vn,a1=r4,i4=a1,s4=typeof self=="object"&&self&&self.Object===Object&&self,o4=i4||s4||Function("return this")(),$n=o4,a4=$n,l4=a4.Symbol,Ti=l4,hh=Ti,l1=Object.prototype,c4=l1.hasOwnProperty,u4=l1.toString,ss=hh?hh.toStringTag:void 0;function f4(e){var t=c4.call(e,ss),r=e[ss];try{e[ss]=void 0;var s=!0}catch{}var o=u4.call(e);return s&&(t?e[ss]=r:delete e[ss]),o}var d4=f4,h4=Object.prototype,p4=h4.toString;function g4(e){return p4.call(e)}var v4=g4,ph=Ti,m4=d4,b4=v4,y4="[object Null]",_4="[object Undefined]",gh=ph?ph.toStringTag:void 0;function w4(e){return e==null?e===void 0?_4:y4:gh&&gh in Object(e)?m4(e):b4(e)}var Ai=w4;function $4(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Rn=$4,x4=Ai,k4=Rn,C4="[object AsyncFunction]",S4="[object Function]",E4="[object GeneratorFunction]",T4="[object Proxy]";function A4(e){if(!k4(e))return!1;var t=x4(e);return t==S4||t==E4||t==C4||t==T4}var c1=A4,I4=$n,R4=I4["__core-js_shared__"],L4=R4,ql=L4,vh=function(){var e=/[^.]+$/.exec(ql&&ql.keys&&ql.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function O4(e){return!!vh&&vh in e}var P4=O4,M4=Function.prototype,B4=M4.toString;function U4(e){if(e!=null){try{return B4.call(e)}catch{}try{return e+""}catch{}}return""}var u1=U4,D4=c1,H4=P4,F4=Rn,j4=u1,z4=/[\\^$.*+?()[\]{}|]/g,N4=/^\[object .+?Constructor\]$/,W4=Function.prototype,q4=Object.prototype,K4=W4.toString,G4=q4.hasOwnProperty,V4=RegExp("^"+K4.call(G4).replace(z4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Q4(e){if(!F4(e)||H4(e))return!1;var t=D4(e)?V4:N4;return t.test(j4(e))}var Z4=Q4;function X4(e,t){return e?.[t]}var Y4=X4,J4=Z4,e5=Y4;function t5(e,t){var r=e5(e,t);return J4(r)?r:void 0}var Kr=t5,n5=Kr,r5=n5(Object,"create"),aa=r5,mh=aa;function i5(){this.__data__=mh?mh(null):{},this.size=0}var s5=i5;function o5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var a5=o5,l5=aa,c5="__lodash_hash_undefined__",u5=Object.prototype,f5=u5.hasOwnProperty;function d5(e){var t=this.__data__;if(l5){var r=t[e];return r===c5?void 0:r}return f5.call(t,e)?t[e]:void 0}var h5=d5,p5=aa,g5=Object.prototype,v5=g5.hasOwnProperty;function m5(e){var t=this.__data__;return p5?t[e]!==void 0:v5.call(t,e)}var b5=m5,y5=aa,_5="__lodash_hash_undefined__";function w5(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=y5&&t===void 0?_5:t,this}var $5=w5,x5=s5,k5=a5,C5=h5,S5=b5,E5=$5;function Ii(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Ii.prototype.clear=x5;Ii.prototype.delete=k5;Ii.prototype.get=C5;Ii.prototype.has=S5;Ii.prototype.set=E5;var T5=Ii;function A5(){this.__data__=[],this.size=0}var I5=A5;function R5(e,t){return e===t||e!==e&&t!==t}var Pc=R5,L5=Pc;function O5(e,t){for(var r=e.length;r--;)if(L5(e[r][0],t))return r;return-1}var la=O5,P5=la,M5=Array.prototype,B5=M5.splice;function U5(e){var t=this.__data__,r=P5(t,e);if(r<0)return!1;var s=t.length-1;return r==s?t.pop():B5.call(t,r,1),--this.size,!0}var D5=U5,H5=la;function F5(e){var t=this.__data__,r=H5(t,e);return r<0?void 0:t[r][1]}var j5=F5,z5=la;function N5(e){return z5(this.__data__,e)>-1}var W5=N5,q5=la;function K5(e,t){var r=this.__data__,s=q5(r,e);return s<0?(++this.size,r.push([e,t])):r[s][1]=t,this}var G5=K5,V5=I5,Q5=D5,Z5=j5,X5=W5,Y5=G5;function Ri(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Ri.prototype.clear=V5;Ri.prototype.delete=Q5;Ri.prototype.get=Z5;Ri.prototype.has=X5;Ri.prototype.set=Y5;var ca=Ri,J5=Kr,e$=$n,t$=J5(e$,"Map"),Mc=t$,bh=T5,n$=ca,r$=Mc;function i$(){this.size=0,this.__data__={hash:new bh,map:new(r$||n$),string:new bh}}var s$=i$;function o$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var a$=o$,l$=a$;function c$(e,t){var r=e.__data__;return l$(t)?r[typeof t=="string"?"string":"hash"]:r.map}var ua=c$,u$=ua;function f$(e){var t=u$(this,e).delete(e);return this.size-=t?1:0,t}var d$=f$,h$=ua;function p$(e){return h$(this,e).get(e)}var g$=p$,v$=ua;function m$(e){return v$(this,e).has(e)}var b$=m$,y$=ua;function _$(e,t){var r=y$(this,e),s=r.size;return r.set(e,t),this.size+=r.size==s?0:1,this}var w$=_$,$$=s$,x$=d$,k$=g$,C$=b$,S$=w$;function Li(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Li.prototype.clear=$$;Li.prototype.delete=x$;Li.prototype.get=k$;Li.prototype.has=C$;Li.prototype.set=S$;var Bc=Li,E$="__lodash_hash_undefined__";function T$(e){return this.__data__.set(e,E$),this}var A$=T$;function I$(e){return this.__data__.has(e)}var R$=I$,L$=Bc,O$=A$,P$=R$;function zo(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new L$;++t<r;)this.add(e[t])}zo.prototype.add=zo.prototype.push=O$;zo.prototype.has=P$;var f1=zo;function M$(e,t,r,s){for(var o=e.length,l=r+(s?1:-1);s?l--:++l<o;)if(t(e[l],l,e))return l;return-1}var B$=M$;function U$(e){return e!==e}var D$=U$;function H$(e,t,r){for(var s=r-1,o=e.length;++s<o;)if(e[s]===t)return s;return-1}var F$=H$,j$=B$,z$=D$,N$=F$;function W$(e,t,r){return t===t?N$(e,t,r):j$(e,z$,r)}var q$=W$,K$=q$;function G$(e,t){var r=e==null?0:e.length;return!!r&&K$(e,t,0)>-1}var V$=G$;function Q$(e,t,r){for(var s=-1,o=e==null?0:e.length;++s<o;)if(r(t,e[s]))return!0;return!1}var Z$=Q$;function X$(e,t){return e.has(t)}var d1=X$,Y$=Kr,J$=$n,ex=Y$(J$,"Set"),h1=ex;function tx(){}var nx=tx;function rx(e){var t=-1,r=Array(e.size);return e.forEach(function(s){r[++t]=s}),r}var Uc=rx,Kl=h1,ix=nx,sx=Uc,ox=1/0,ax=Kl&&1/sx(new Kl([,-0]))[1]==ox?function(e){return new Kl(e)}:ix,lx=ax,cx=f1,ux=V$,fx=Z$,dx=d1,hx=lx,px=Uc,gx=200;function vx(e,t,r){var s=-1,o=ux,l=e.length,c=!0,u=[],d=u;if(r)c=!1,o=fx;else if(l>=gx){var p=t?null:hx(e);if(p)return px(p);c=!1,o=dx,d=new cx}else d=t?[]:u;e:for(;++s<l;){var h=e[s],v=t?t(h):h;if(h=r||h!==0?h:0,c&&v===v){for(var m=d.length;m--;)if(d[m]===v)continue e;t&&d.push(v),u.push(h)}else o(d,v,r)||(d!==u&&d.push(v),u.push(h))}return u}var p1=vx,mx=p1;function bx(e){return e&&e.length?mx(e):[]}var yx=bx;const yr=ws(yx),_x={},wx=Object.freeze(Object.defineProperty({__proto__:null,default:_x},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Ae=BigInt(0),Ye=BigInt(1),mr=BigInt(2),fs=BigInt(3),yh=BigInt(8),Ne=Object.freeze({a:Ae,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:Ye,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),_h=(e,t)=>(e+t/mr)/t,wo={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=Ne,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),s=-Ye*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),l=r,c=BigInt("0x100000000000000000000000000000000"),u=_h(l*e,t),d=_h(-s*e,t);let p=X(e-u*r-d*o,t),h=X(-u*s-d*l,t);const v=p>c,m=h>c;if(v&&(p=t-p),m&&(h=t-h),p>c||h>c)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:v,k1:p,k2neg:m,k2:h}}},bn=32,mi=32,$x=32,No=bn+1,Wo=2*bn+1;function wh(e){const{a:t,b:r}=Ne,s=X(e*e),o=X(s*e);return X(o+t*e+r)}const $o=Ne.a===Ae;class Dc extends Error{constructor(t){super(t)}}function $h(e){if(!(e instanceof Oe))throw new TypeError("JacobianPoint expected")}class Oe{constructor(t,r,s){this.x=t,this.y=r,this.z=s}static fromAffine(t){if(!(t instanceof Ie))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(Ie.ZERO)?Oe.ZERO:new Oe(t.x,t.y,Ye)}static toAffineBatch(t){const r=Ex(t.map(s=>s.z));return t.map((s,o)=>s.toAffine(r[o]))}static normalizeZ(t){return Oe.toAffineBatch(t).map(Oe.fromAffine)}equals(t){$h(t);const{x:r,y:s,z:o}=this,{x:l,y:c,z:u}=t,d=X(o*o),p=X(u*u),h=X(r*p),v=X(l*d),m=X(X(s*u)*p),y=X(X(c*o)*d);return h===v&&m===y}negate(){return new Oe(this.x,X(-this.y),this.z)}double(){const{x:t,y:r,z:s}=this,o=X(t*t),l=X(r*r),c=X(l*l),u=t+l,d=X(mr*(X(u*u)-o-c)),p=X(fs*o),h=X(p*p),v=X(h-mr*d),m=X(p*(d-v)-yh*c),y=X(mr*r*s);return new Oe(v,m,y)}add(t){$h(t);const{x:r,y:s,z:o}=this,{x:l,y:c,z:u}=t;if(l===Ae||c===Ae)return this;if(r===Ae||s===Ae)return t;const d=X(o*o),p=X(u*u),h=X(r*p),v=X(l*d),m=X(X(s*u)*p),y=X(X(c*o)*d),w=X(v-h),k=X(y-m);if(w===Ae)return k===Ae?this.double():Oe.ZERO;const S=X(w*w),L=X(w*S),U=X(h*S),B=X(k*k-L-mr*U),R=X(k*(U-B)-m*L),E=X(o*u*w);return new Oe(B,R,E)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const r=Oe.ZERO;if(typeof t=="bigint"&&t===Ae)return r;let s=Ch(t);if(s===Ye)return this;if(!$o){let v=r,m=this;for(;s>Ae;)s&Ye&&(v=v.add(m)),m=m.double(),s>>=Ye;return v}let{k1neg:o,k1:l,k2neg:c,k2:u}=wo.splitScalar(s),d=r,p=r,h=this;for(;l>Ae||u>Ae;)l&Ye&&(d=d.add(h)),u&Ye&&(p=p.add(h)),h=h.double(),l>>=Ye,u>>=Ye;return o&&(d=d.negate()),c&&(p=p.negate()),p=new Oe(X(p.x*wo.beta),p.y,p.z),d.add(p)}precomputeWindow(t){const r=$o?128/t+1:256/t+1,s=[];let o=this,l=o;for(let c=0;c<r;c++){l=o,s.push(l);for(let u=1;u<2**(t-1);u++)l=l.add(o),s.push(l);o=l.double()}return s}wNAF(t,r){!r&&this.equals(Oe.BASE)&&(r=Ie.BASE);const s=r&&r._WINDOW_SIZE||1;if(256%s)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=r&&uc.get(r);o||(o=this.precomputeWindow(s),r&&s!==1&&(o=Oe.normalizeZ(o),uc.set(r,o)));let l=Oe.ZERO,c=Oe.BASE;const u=1+($o?128/s:256/s),d=2**(s-1),p=BigInt(2**s-1),h=2**s,v=BigInt(s);for(let m=0;m<u;m++){const y=m*d;let w=Number(t&p);t>>=v,w>d&&(w-=h,t+=Ye);const k=y,S=y+Math.abs(w)-1,L=m%2!==0,U=w<0;w===0?c=c.add(xo(L,o[k])):l=l.add(xo(U,o[S]))}return{p:l,f:c}}multiply(t,r){let s=Ch(t),o,l;if($o){const{k1neg:c,k1:u,k2neg:d,k2:p}=wo.splitScalar(s);let{p:h,f:v}=this.wNAF(u,r),{p:m,f:y}=this.wNAF(p,r);h=xo(c,h),m=xo(d,m),m=new Oe(X(m.x*wo.beta),m.y,m.z),o=h.add(m),l=v.add(y)}else{const{p:c,f:u}=this.wNAF(s,r);o=c,l=u}return Oe.normalizeZ([o,l])[0]}toAffine(t){const{x:r,y:s,z:o}=this,l=this.equals(Oe.ZERO);t==null&&(t=l?yh:Oi(o));const c=t,u=X(c*c),d=X(u*c),p=X(r*u),h=X(s*d),v=X(o*c);if(l)return Ie.ZERO;if(v!==Ye)throw new Error("invZ was invalid");return new Ie(p,h)}}Oe.BASE=new Oe(Ne.Gx,Ne.Gy,Ye);Oe.ZERO=new Oe(Ae,Ye,Ae);function xo(e,t){const r=t.negate();return e?r:t}const uc=new WeakMap;class Ie{constructor(t,r){this.x=t,this.y=r}_setWindowSize(t){this._WINDOW_SIZE=t,uc.delete(this)}hasEvenY(){return this.y%mr===Ae}static fromCompressedHex(t){const r=t.length===32,s=Zt(r?t:t.subarray(1));if(!Bo(s))throw new Error("Point is not on curve");const o=wh(s);let l=Sx(o);const c=(l&Ye)===Ye;r?c&&(l=X(-l)):(t[0]&1)===1!==c&&(l=X(-l));const u=new Ie(s,l);return u.assertValidity(),u}static fromUncompressedHex(t){const r=Zt(t.subarray(1,bn+1)),s=Zt(t.subarray(bn+1,bn*2+1)),o=new Ie(r,s);return o.assertValidity(),o}static fromHex(t){const r=An(t),s=r.length,o=r[0];if(s===bn)return this.fromCompressedHex(r);if(s===No&&(o===2||o===3))return this.fromCompressedHex(r);if(s===Wo&&o===4)return this.fromUncompressedHex(r);throw new Error(`Point.fromHex: received invalid point. Expected 32-${No} compressed bytes or ${Wo} uncompressed bytes, not ${s}`)}static fromPrivateKey(t){return Ie.BASE.multiply(qr(t))}static fromSignature(t,r,s){const{r:o,s:l}=g1(r);if(![0,1,2,3].includes(s))throw new Error("Cannot recover: invalid recovery bit");const c=Hc(An(t)),{n:u}=Ne,d=s===2||s===3?o+u:o,p=Oi(d,u),h=X(-c*p,u),v=X(l*p,u),m=s&1?"03":"02",y=Ie.fromHex(m+_r(d)),w=Ie.BASE.multiplyAndAddUnsafe(y,h,v);if(!w)throw new Error("Cannot recover signature: point at infinify");return w.assertValidity(),w}toRawBytes(t=!1){return wr(this.toHex(t))}toHex(t=!1){const r=_r(this.x);return t?`${this.hasEvenY()?"02":"03"}${r}`:`04${r}${_r(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:r,y:s}=this;if(!Bo(r)||!Bo(s))throw new Error(t);const o=X(s*s),l=wh(r);if(X(o-l)!==Ae)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new Ie(this.x,X(-this.y))}double(){return Oe.fromAffine(this).double().toAffine()}add(t){return Oe.fromAffine(this).add(Oe.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return Oe.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,r,s){const o=Oe.fromAffine(this),l=r===Ae||r===Ye||this!==Ie.BASE?o.multiplyUnsafe(r):o.multiply(r),c=Oe.fromAffine(t).multiplyUnsafe(s),u=l.add(c);return u.equals(Oe.ZERO)?void 0:u.toAffine()}}Ie.BASE=new Ie(Ne.Gx,Ne.Gy);Ie.ZERO=new Ie(Ae,Ae);function xh(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function kh(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${bi(e)}`);const t=e[1],r=e.subarray(2,t+2);if(!t||r.length!==t)throw new Error("Invalid signature integer: wrong length");if(r[0]===0&&r[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:Zt(r),left:e.subarray(t+2)}}function xx(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${bi(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:r}=kh(e.subarray(2)),{data:s,left:o}=kh(r);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${bi(o)}`);return{r:t,s}}class Zn{constructor(t,r){this.r=t,this.s=r,this.assertValidity()}static fromCompact(t){const r=t instanceof Uint8Array,s="Signature.fromCompact";if(typeof t!="string"&&!r)throw new TypeError(`${s}: Expected string or Uint8Array`);const o=r?bi(t):t;if(o.length!==128)throw new Error(`${s}: Expected 64-byte hex`);return new Zn(qo(o.slice(0,64)),qo(o.slice(64,128)))}static fromDER(t){const r=t instanceof Uint8Array;if(typeof t!="string"&&!r)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:s,s:o}=xx(r?t:wr(t));return new Zn(s,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:r}=this;if(!_i(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!_i(r))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=Ne.n>>Ye;return this.s>t}normalizeS(){return this.hasHighS()?new Zn(this.r,X(-this.s,Ne.n)):this}toDERRawBytes(){return wr(this.toDERHex())}toDERHex(){const t=xh(os(this.s)),r=xh(os(this.r)),s=t.length/2,o=r.length/2,l=os(s),c=os(o);return`30${os(o+s+4)}02${c}${r}02${l}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return wr(this.toCompactHex())}toCompactHex(){return _r(this.r)+_r(this.s)}}function gr(...e){if(!e.every(s=>s instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((s,o)=>s+o.length,0),r=new Uint8Array(t);for(let s=0,o=0;s<e.length;s++){const l=e[s];r.set(l,o),o+=l.length}return r}const kx=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function bi(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let r=0;r<e.length;r++)t+=kx[e[r]];return t}const Cx=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function _r(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(Ae<=e&&e<Cx))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function yi(e){const t=wr(_r(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function os(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function qo(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function wr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const s=r*2,o=e.slice(s,s+2),l=Number.parseInt(o,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");t[r]=l}return t}function Zt(e){return qo(bi(e))}function An(e){return e instanceof Uint8Array?Uint8Array.from(e):wr(e)}function Ch(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&_i(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function X(e,t=Ne.P){const r=e%t;return r>=Ae?r:t+r}function an(e,t){const{P:r}=Ne;let s=e;for(;t-- >Ae;)s*=s,s%=r;return s}function Sx(e){const{P:t}=Ne,r=BigInt(6),s=BigInt(11),o=BigInt(22),l=BigInt(23),c=BigInt(44),u=BigInt(88),d=e*e*e%t,p=d*d*e%t,h=an(p,fs)*p%t,v=an(h,fs)*p%t,m=an(v,mr)*d%t,y=an(m,s)*m%t,w=an(y,o)*y%t,k=an(w,c)*w%t,S=an(k,u)*k%t,L=an(S,c)*w%t,U=an(L,fs)*p%t,B=an(U,l)*y%t,R=an(B,r)*d%t,E=an(R,mr);if(E*E%t!==e)throw new Error("Cannot find square root");return E}function Oi(e,t=Ne.P){if(e===Ae||t<=Ae)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=X(e,t),s=t,o=Ae,l=Ye;for(;r!==Ae;){const u=s/r,d=s%r,p=o-l*u;s=r,r=d,o=l,l=p}if(s!==Ye)throw new Error("invert: does not exist");return X(o,t)}function Ex(e,t=Ne.P){const r=new Array(e.length),s=e.reduce((l,c,u)=>c===Ae?l:(r[u]=l,X(l*c,t)),Ye),o=Oi(s,t);return e.reduceRight((l,c,u)=>c===Ae?l:(r[u]=X(l*r[u],t),X(l*c,t)),o),r}function Tx(e){const t=e.length*8-mi*8,r=Zt(e);return t>0?r>>BigInt(t):r}function Hc(e,t=!1){const r=Tx(e);if(t)return r;const{n:s}=Ne;return r>=s?r-s:r}let hi,ds;class Ax{constructor(t,r){if(this.hashLen=t,this.qByteLen=r,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof r!="number"||r<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return $e.hmacSha256(this.k,...t)}hmacSync(...t){return ds(this.k,...t)}checkSync(){if(typeof ds!="function")throw new Dc("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const r=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const s=this.v.slice();r.push(s),t+=this.v.length}return gr(...r)}generateSync(){this.checkSync(),this.incr();let t=0;const r=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const s=this.v.slice();r.push(s),t+=this.v.length}return gr(...r)}}function _i(e){return Ae<e&&e<Ne.n}function Bo(e){return Ae<e&&e<Ne.P}function Ix(e,t,r,s=!0){const{n:o}=Ne,l=Hc(e,!0);if(!_i(l))return;const c=Oi(l,o),u=Ie.BASE.multiply(l),d=X(u.x,o);if(d===Ae)return;const p=X(c*X(t+r*d,o),o);if(p===Ae)return;let h=new Zn(d,p),v=(u.x===h.r?0:2)|Number(u.y&Ye);return s&&h.hasHighS()&&(h=h.normalizeS(),v^=1),{sig:h,recovery:v}}function qr(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*mi)throw new Error("Expected 32 bytes of private key");t=qo(e)}else if(e instanceof Uint8Array){if(e.length!==mi)throw new Error("Expected 32 bytes of private key");t=Zt(e)}else throw new TypeError("Expected valid private key");if(!_i(t))throw new Error("Expected private key: 0 < key < n");return t}function Fc(e){return e instanceof Ie?(e.assertValidity(),e):Ie.fromHex(e)}function g1(e){if(e instanceof Zn)return e.assertValidity(),e;try{return Zn.fromDER(e)}catch{return Zn.fromCompact(e)}}function Rx(e,t=!1){return Ie.fromPrivateKey(e).toRawBytes(t)}function Sh(e){const t=e instanceof Uint8Array,r=typeof e=="string",s=(t||r)&&e.length;return t?s===No||s===Wo:r?s===No*2||s===Wo*2:e instanceof Ie}function v1(e,t,r=!1){if(Sh(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Sh(t))throw new TypeError("getSharedSecret: second arg must be public key");const s=Fc(t);return s.assertValidity(),s.multiply(qr(e)).toRawBytes(r)}function m1(e){const t=e.length>bn?e.slice(0,bn):e;return Zt(t)}function Lx(e){const t=m1(e),r=X(t,Ne.n);return b1(r<Ae?t:r)}function b1(e){return yi(e)}function Ox(e,t,r){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const s=An(e),o=qr(t),l=[b1(o),Lx(s)];if(r!=null){r===!0&&(r=$e.randomBytes(bn));const d=An(r);if(d.length!==bn)throw new Error(`sign: Expected ${bn} bytes of extra data`);l.push(d)}const c=gr(...l),u=m1(s);return{seed:c,m:u,d:o}}function Px(e,t){const{sig:r,recovery:s}=e,{der:o,recovered:l}=Object.assign({canonical:!0,der:!0},t),c=o?r.toDERRawBytes():r.toCompactRawBytes();return l?[c,s]:c}function Mx(e,t,r={}){const{seed:s,m:o,d:l}=Ox(e,t,r.extraEntropy),c=new Ax($x,mi);c.reseedSync(s);let u;for(;!(u=Ix(c.generateSync(),o,l,r.canonical));)c.reseedSync();return Px(u,r)}const Bx={strict:!0};function Ux(e,t,r,s=Bx){let o;try{o=g1(e),t=An(t)}catch{return!1}const{r:l,s:c}=o;if(s.strict&&o.hasHighS())return!1;const u=Hc(t);let d;try{d=Fc(r)}catch{return!1}const{n:p}=Ne,h=Oi(c,p),v=X(u*h,p),m=X(l*h,p),y=Ie.BASE.multiplyAndAddUnsafe(d,v,m);return y?X(y.x,p)===l:!1}function Ko(e){return X(Zt(e),Ne.n)}class wi{constructor(t,r){this.r=t,this.s=r,this.assertValidity()}static fromHex(t){const r=An(t);if(r.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${r.length}`);const s=Zt(r.subarray(0,32)),o=Zt(r.subarray(32,64));return new wi(s,o)}assertValidity(){const{r:t,s:r}=this;if(!Bo(t)||!_i(r))throw new Error("Invalid signature")}toHex(){return _r(this.r)+_r(this.s)}toRawBytes(){return wr(this.toHex())}}function Dx(e){return Ie.fromPrivateKey(e).toRawX()}class y1{constructor(t,r,s=$e.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=An(t);const{x:o,scalar:l}=this.getScalar(qr(r));if(this.px=o,this.d=l,this.rand=An(s),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const r=Ie.fromPrivateKey(t),s=r.hasEvenY()?t:Ne.n-t;return{point:r,scalar:s,x:r.toRawX()}}initNonce(t,r){return yi(t^Zt(r))}finalizeNonce(t){const r=X(Zt(t),Ne.n);if(r===Ae)throw new Error("sign: Creation of signature failed. k is zero");const{point:s,x:o,scalar:l}=this.getScalar(r);return{R:s,rx:o,k:l}}finalizeSig(t,r,s,o){return new wi(t.x,X(r+s*o,Ne.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:r,px:s,rand:o}=this,l=$e.taggedHash,c=this.initNonce(r,await l(pr.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(await l(pr.nonce,c,s,t)),h=Ko(await l(pr.challenge,d,s,t)),v=this.finalizeSig(u,p,h,r);return await $1(v,t,s)||this.error(),v}calcSync(){const{m:t,d:r,px:s,rand:o}=this,l=$e.taggedHashSync,c=this.initNonce(r,l(pr.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(l(pr.nonce,c,s,t)),h=Ko(l(pr.challenge,d,s,t)),v=this.finalizeSig(u,p,h,r);return x1(v,t,s)||this.error(),v}}async function Hx(e,t,r){return new y1(e,t,r).calc()}function Fx(e,t,r){return new y1(e,t,r).calcSync()}function _1(e,t,r){const s=e instanceof wi,o=s?e:wi.fromHex(e);return s&&o.assertValidity(),{...o,m:An(t),P:Fc(r)}}function w1(e,t,r,s){const o=Ie.BASE.multiplyAndAddUnsafe(t,qr(r),X(-s,Ne.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function $1(e,t,r){try{const{r:s,s:o,m:l,P:c}=_1(e,t,r),u=Ko(await $e.taggedHash(pr.challenge,yi(s),c.toRawX(),l));return w1(s,c,o,u)}catch{return!1}}function x1(e,t,r){try{const{r:s,s:o,m:l,P:c}=_1(e,t,r),u=Ko($e.taggedHashSync(pr.challenge,yi(s),c.toRawX(),l));return w1(s,c,o,u)}catch(s){if(s instanceof Dc)throw s;return!1}}const fa={Signature:wi,getPublicKey:Dx,sign:Hx,verify:$1,signSync:Fx,verifySync:x1};Ie.BASE._setWindowSize(8);const Vt={node:wx,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},pr={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},ko={},$e={bytesToHex:bi,hexToBytes:wr,concatBytes:gr,mod:X,invert:Oi,isValidPrivateKey(e){try{return qr(e),!0}catch{return!1}},_bigintTo32Bytes:yi,_normalizePrivateKey:qr,hashToPrivateKey:e=>{e=An(e);const t=mi+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const r=X(Zt(e),Ne.n-Ye)+Ye;return yi(r)},randomBytes:(e=32)=>{if(Vt.web)return Vt.web.getRandomValues(new Uint8Array(e));if(Vt.node){const{randomBytes:t}=Vt.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>$e.hashToPrivateKey($e.randomBytes(mi+8)),precompute(e=8,t=Ie.BASE){const r=t===Ie.BASE?t:new Ie(t.x,t.y);return r._setWindowSize(e),r.multiply(fs),r},sha256:async(...e)=>{if(Vt.web){const t=await Vt.web.subtle.digest("SHA-256",gr(...e));return new Uint8Array(t)}else if(Vt.node){const{createHash:t}=Vt.node,r=t("sha256");return e.forEach(s=>r.update(s)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(Vt.web){const r=await Vt.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),s=gr(...t),o=await Vt.web.subtle.sign("HMAC",r,s);return new Uint8Array(o)}else if(Vt.node){const{createHmac:r}=Vt.node,s=r("sha256",e);return t.forEach(o=>s.update(o)),Uint8Array.from(s.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let r=ko[e];if(r===void 0){const s=await $e.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));r=gr(s,s),ko[e]=r}return $e.sha256(r,...t)},taggedHashSync:(e,...t)=>{if(typeof hi!="function")throw new Dc("sha256Sync is undefined, you need to set it");let r=ko[e];if(r===void 0){const s=hi(Uint8Array.from(e,o=>o.charCodeAt(0)));r=gr(s,s),ko[e]=r}return hi(r,...t)},_JacobianPoint:Oe};Object.defineProperties($e,{sha256Sync:{configurable:!1,get(){return hi},set(e){hi||(hi=e)}},hmacSha256Sync:{configurable:!1,get(){return ds},set(e){ds||(ds=e)}}});function fc(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function jx(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function k1(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function zx(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");fc(e.outputLen),fc(e.blockLen)}function Nx(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function Wx(e,t){k1(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}const zr={number:fc,bool:jx,bytes:k1,hash:zx,exists:Nx,output:Wx},cs={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},qx=Object.freeze(Object.defineProperty({__proto__:null,crypto:cs},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Kx=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),Gx=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),Wr=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),vn=(e,t)=>e<<32-t|e>>>t,C1=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!C1)throw new Error("Non little-endian hardware is not supported");const Vx=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function S1(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let r=0;r<e.length;r++)t+=Vx[e[r]];return t}function E1(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const s=r*2,o=e.slice(s,s+2),l=Number.parseInt(o,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");t[r]=l}return t}const T1=async()=>{};async function Qx(e,t,r){let s=Date.now();for(let o=0;o<e;o++){r(o);const l=Date.now()-s;l>=0&&l<t||(await T1(),s+=l)}}function jc(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function xs(e){if(typeof e=="string"&&(e=jc(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function us(...e){if(!e.every(s=>s instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((s,o)=>s+o.length,0),r=new Uint8Array(t);for(let s=0,o=0;s<e.length;s++){const l=e[s];r.set(l,o),o+=l.length}return r}class zc{clone(){return this._cloneInto()}}const Zx=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function Xx(e,t){if(t!==void 0&&(typeof t!="object"||!Zx(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function da(e){const t=s=>e().update(xs(s)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function Yx(e){const t=(s,o)=>e(o).update(xs(s)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=s=>e(s),t}function A1(e=32){if(cs.web)return cs.web.getRandomValues(new Uint8Array(e));if(cs.node)return new Uint8Array(cs.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}const Jx=Object.freeze(Object.defineProperty({__proto__:null,Hash:zc,asyncLoop:Qx,bytesToHex:S1,checkOpts:Xx,concatBytes:us,createView:Wr,hexToBytes:E1,isLE:C1,nextTick:T1,randomBytes:A1,rotr:vn,toBytes:xs,u32:Gx,u8:Kx,utf8ToBytes:jc,wrapConstructor:da,wrapConstructorWithOpts:Yx},Symbol.toStringTag,{value:"Module"}));function e6(e,t,r,s){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,s);const o=BigInt(32),l=BigInt(4294967295),c=Number(r>>o&l),u=Number(r&l),d=s?4:0,p=s?0:4;e.setUint32(t+d,c,s),e.setUint32(t+p,u,s)}let I1=class extends zc{constructor(t,r,s,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=s,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Wr(this.buffer)}update(t){zr.exists(this);const{view:r,buffer:s,blockLen:o}=this;t=xs(t);const l=t.length;for(let c=0;c<l;){const u=Math.min(o-this.pos,l-c);if(u===o){const d=Wr(t);for(;o<=l-c;c+=o)this.process(d,c);continue}s.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){zr.exists(this),zr.output(t,this),this.finished=!0;const{buffer:r,view:s,blockLen:o,isLE:l}=this;let{pos:c}=this;r[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(s,0),c=0);for(let v=c;v<o;v++)r[v]=0;e6(s,o-8,BigInt(this.length*8),l),this.process(s,0);const u=Wr(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let v=0;v<p;v++)u.setUint32(4*v,h[v],l)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const s=t.slice(0,r);return this.destroy(),s}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:s,length:o,finished:l,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=l,t.destroyed=c,o%r&&t.buffer.set(s),t}};const t6=(e,t,r)=>e&t^~e&r,n6=(e,t,r)=>e&t^e&r^t&r,r6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),ur=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),fr=new Uint32Array(64);class R1 extends I1{constructor(){super(64,32,8,!1),this.A=ur[0]|0,this.B=ur[1]|0,this.C=ur[2]|0,this.D=ur[3]|0,this.E=ur[4]|0,this.F=ur[5]|0,this.G=ur[6]|0,this.H=ur[7]|0}get(){const{A:t,B:r,C:s,D:o,E:l,F:c,G:u,H:d}=this;return[t,r,s,o,l,c,u,d]}set(t,r,s,o,l,c,u,d){this.A=t|0,this.B=r|0,this.C=s|0,this.D=o|0,this.E=l|0,this.F=c|0,this.G=u|0,this.H=d|0}process(t,r){for(let v=0;v<16;v++,r+=4)fr[v]=t.getUint32(r,!1);for(let v=16;v<64;v++){const m=fr[v-15],y=fr[v-2],w=vn(m,7)^vn(m,18)^m>>>3,k=vn(y,17)^vn(y,19)^y>>>10;fr[v]=k+fr[v-7]+w+fr[v-16]|0}let{A:s,B:o,C:l,D:c,E:u,F:d,G:p,H:h}=this;for(let v=0;v<64;v++){const m=vn(u,6)^vn(u,11)^vn(u,25),y=h+m+t6(u,d,p)+r6[v]+fr[v]|0,k=(vn(s,2)^vn(s,13)^vn(s,22))+n6(s,o,l)|0;h=p,p=d,d=u,u=c+y|0,c=l,l=o,o=s,s=y+k|0}s=s+this.A|0,o=o+this.B|0,l=l+this.C|0,c=c+this.D|0,u=u+this.E|0,d=d+this.F|0,p=p+this.G|0,h=h+this.H|0,this.set(s,o,l,c,u,d,p,h)}roundClean(){fr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class i6 extends R1{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Xn=da(()=>new R1),s6=da(()=>new i6),o6=Object.freeze(Object.defineProperty({__proto__:null,sha224:s6,sha256:Xn},Symbol.toStringTag,{value:"Module"}));/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Sr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function xn(...e){const t=(o,l)=>c=>o(l(c)),r=Array.from(e).reverse().reduce((o,l)=>o?t(o,l.encode):l.encode,void 0),s=e.reduce((o,l)=>o?t(o,l.decode):l.decode,void 0);return{encode:r,decode:s}}function Ln(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(r=>{if(Sr(r),r<0||r>=e.length)throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${e.length})`);return e[r]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(r=>{if(typeof r!="string")throw new Error(`alphabet.decode: not string element=${r}`);const s=e.indexOf(r);if(s===-1)throw new Error(`Unknown letter: "${r}". Allowed: ${e}`);return s})}}}function On(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let r of t)if(typeof r!="string")throw new Error(`join.encode: non-string input=${r}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function ks(e,t="="){if(Sr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let s of r)if(typeof s!="string")throw new Error(`padding.encode: non-string input=${s}`);for(;r.length*e%8;)r.push(t);return r},decode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of r)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let s=r.length;if(s*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;s>0&&r[s-1]===t;s--)if(!((s-1)*e%8))throw new Error("Invalid padding: string has too much padding");return r.slice(0,s)}}}function L1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Eh(e,t,r){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(r<2)throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let s=0;const o=[],l=Array.from(e);for(l.forEach(c=>{if(Sr(c),c<0||c>=t)throw new Error(`Wrong integer: ${c}`)});;){let c=0,u=!0;for(let d=s;d<l.length;d++){const p=l[d],h=t*c+p;if(!Number.isSafeInteger(h)||t*c/t!==c||h-p!==t*c)throw new Error("convertRadix: carry overflow");if(c=h%r,l[d]=Math.floor(h/r),!Number.isSafeInteger(l[d])||l[d]*r+c!==h)throw new Error("convertRadix: carry overflow");if(u)l[d]?u=!1:s=d;else continue}if(o.push(c),u)break}for(let c=0;c<e.length-1&&e[c]===0;c++)o.push(0);return o.reverse()}const O1=(e,t)=>t?O1(t,e%t):e,Go=(e,t)=>e+(t-O1(e,t));function dc(e,t,r,s){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(r<=0||r>32)throw new Error(`convertRadix2: wrong to=${r}`);if(Go(t,r)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${Go(t,r)}`);let o=0,l=0;const c=2**r-1,u=[];for(const d of e){if(Sr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,l+t>32)throw new Error(`convertRadix2: carry overflow pos=${l} from=${t}`);for(l+=t;l>=r;l-=r)u.push((o>>l-r&c)>>>0);o&=2**l-1}if(o=o<<r-l&c,!s&&l>=t)throw new Error("Excess padding");if(!s&&o)throw new Error(`Non-zero padding: ${o}`);return s&&l>0&&u.push(o>>>0),u}function P1(e){return Sr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Eh(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Eh(t,e,2**8))}}}function Yn(e,t=!1){if(Sr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Go(8,e)>32||Go(e,8)>32)throw new Error("radix2: carry overflow");return{encode:r=>{if(!(r instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return dc(Array.from(r),8,e,!t)},decode:r=>{if(!Array.isArray(r)||r.length&&typeof r[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(dc(r,e,8,t))}}}function Th(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function M1(e,t){if(Sr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const s=t(r).slice(0,e),o=new Uint8Array(r.length+e);return o.set(r),o.set(s,r.length),o},decode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const s=r.slice(0,-e),o=t(s).slice(0,e),l=r.slice(-e);for(let c=0;c<e;c++)if(o[c]!==l[c])throw new Error("Invalid checksum");return s}}}const a6={alphabet:Ln,chain:xn,checksum:M1,radix:P1,radix2:Yn,join:On,padding:ks},B1=xn(Yn(4),Ln("0123456789ABCDEF"),On("")),U1=xn(Yn(5),Ln("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),ks(5),On("")),l6=xn(Yn(5),Ln("0123456789ABCDEFGHIJKLMNOPQRSTUV"),ks(5),On("")),c6=xn(Yn(5),Ln("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),On(""),L1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),$i=xn(Yn(6),Ln("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),ks(6),On("")),D1=xn(Yn(6),Ln("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),ks(6),On("")),Nc=e=>xn(P1(58),Ln(e),On("")),vs=Nc("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),u6=Nc("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),f6=Nc("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Ah=[0,2,3,5,6,7,9,10,11],H1={encode(e){let t="";for(let r=0;r<e.length;r+=8){const s=e.subarray(r,r+8);t+=vs.encode(s).padStart(Ah[s.length],"1")}return t},decode(e){let t=[];for(let r=0;r<e.length;r+=11){const s=e.slice(r,r+11),o=Ah.indexOf(s.length),l=vs.decode(s);for(let c=0;c<l.length-o;c++)if(l[c]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(l.slice(l.length-o)))}return Uint8Array.from(t)}},F1=e=>xn(M1(4,t=>e(e(t))),vs),hc=xn(Ln("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),On("")),Ih=[996825010,642813549,513874426,1027748829,705979059];function as(e){const t=e>>25;let r=(e&33554431)<<5;for(let s=0;s<Ih.length;s++)(t>>s&1)===1&&(r^=Ih[s]);return r}function Rh(e,t,r=1){const s=e.length;let o=1;for(let l=0;l<s;l++){const c=e.charCodeAt(l);if(c<33||c>126)throw new Error(`Invalid prefix (${e})`);o=as(o)^c>>5}o=as(o);for(let l=0;l<s;l++)o=as(o)^e.charCodeAt(l)&31;for(let l of t)o=as(o)^l;for(let l=0;l<6;l++)o=as(o);return o^=r,hc.encode(dc([o%2**30],30,5,!1))}function j1(e){const t=e==="bech32"?1:734539939,r=Yn(5),s=r.decode,o=r.encode,l=Th(s);function c(h,v,m=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(v)||v.length&&typeof v[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof v}`);const y=h.length+7+v.length;if(m!==!1&&y>m)throw new TypeError(`Length ${y} exceeds limit ${m}`);return h=h.toLowerCase(),`${h}1${hc.encode(v)}${Rh(h,v,t)}`}function u(h,v=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||v!==!1&&h.length>v)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${v})`);const m=h.toLowerCase();if(h!==m&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=m;const y=h.lastIndexOf("1");if(y===0||y===-1)throw new Error('Letter "1" must be present between prefix and data only');const w=h.slice(0,y),k=h.slice(y+1);if(k.length<6)throw new Error("Data must be at least 6 characters long");const S=hc.decode(k).slice(0,-6),L=Rh(w,S,t);if(!k.endsWith(L))throw new Error(`Invalid checksum in ${h}: expected "${L}"`);return{prefix:w,words:S}}const d=Th(u);function p(h){const{prefix:v,words:m}=u(h,!1);return{prefix:v,words:m,bytes:s(m)}}return{encode:c,decode:u,decodeToBytes:p,decodeUnsafe:d,fromWords:s,fromWordsUnsafe:l,toWords:o}}const Et=j1("bech32"),d6=j1("bech32m"),z1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},N1=xn(Yn(4),Ln("0123456789abcdef"),On(""),L1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),ms={utf8:z1,hex:N1,base16:B1,base32:U1,base64:$i,base64url:D1,base58:vs,base58xmr:H1},W1=`Invalid encoding type. Available types: ${Object.keys(ms).join(", ")}`,q1=(e,t)=>{if(typeof e!="string"||!ms.hasOwnProperty(e))throw new TypeError(W1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return ms[e].encode(t)},h6=q1,K1=(e,t)=>{if(!ms.hasOwnProperty(e))throw new TypeError(W1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return ms[e].decode(t)},p6=K1,g6=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Sr,base16:B1,base32:U1,base32crockford:c6,base32hex:l6,base58:vs,base58check:F1,base58flickr:u6,base58xmr:H1,base58xrp:f6,base64:$i,base64url:D1,bech32:Et,bech32m:d6,bytes:p6,bytesToString:q1,hex:N1,str:h6,stringToBytes:K1,utf8:z1,utils:a6},Symbol.toStringTag,{value:"Module"}));var Wc={};Object.defineProperty(Wc,"__esModule",{value:!0});var qc=Wc.wordlist=void 0;qc=Wc.wordlist=`abandon
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
`);var Qt={},gt={};Object.defineProperty(gt,"__esModule",{value:!0});gt.output=gt.exists=gt.hash=di=gt.bytes=gt.bool=gt.number=void 0;function Vo(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}gt.number=Vo;function G1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}gt.bool=G1;function Kc(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var di=gt.bytes=Kc;function V1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Vo(e.outputLen),Vo(e.blockLen)}gt.hash=V1;function Q1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}gt.exists=Q1;function Z1(e,t){Kc(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}gt.output=Z1;const v6={number:Vo,bool:G1,bytes:Kc,hash:V1,exists:Q1,output:Z1};gt.default=v6;var xi={},X1={},Cs={};const m6=oa(qx);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=m6,r=R=>new Uint8Array(R.buffer,R.byteOffset,R.byteLength);e.u8=r;const s=R=>new Uint32Array(R.buffer,R.byteOffset,Math.floor(R.byteLength/4));e.u32=s;const o=R=>new DataView(R.buffer,R.byteOffset,R.byteLength);e.createView=o;const l=(R,E)=>R<<32-E|R>>>E;if(e.rotr=l,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},(R,E)=>E.toString(16).padStart(2,"0"));function u(R){if(!(R instanceof Uint8Array))throw new Error("Uint8Array expected");let E="";for(let O=0;O<R.length;O++)E+=c[R[O]];return E}e.bytesToHex=u;function d(R){if(typeof R!="string")throw new TypeError("hexToBytes: expected string, got "+typeof R);if(R.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const E=new Uint8Array(R.length/2);for(let O=0;O<E.length;O++){const W=O*2,z=R.slice(W,W+2),ne=Number.parseInt(z,16);if(Number.isNaN(ne)||ne<0)throw new Error("Invalid byte sequence");E[O]=ne}return E}e.hexToBytes=d;const p=async()=>{};e.nextTick=p;async function h(R,E,O){let W=Date.now();for(let z=0;z<R;z++){O(z);const ne=Date.now()-W;ne>=0&&ne<E||(await(0,e.nextTick)(),W+=ne)}}e.asyncLoop=h;function v(R){if(typeof R!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof R}`);return new TextEncoder().encode(R)}e.utf8ToBytes=v;function m(R){if(typeof R=="string"&&(R=v(R)),!(R instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof R})`);return R}e.toBytes=m;function y(...R){if(!R.every(W=>W instanceof Uint8Array))throw new Error("Uint8Array list expected");if(R.length===1)return R[0];const E=R.reduce((W,z)=>W+z.length,0),O=new Uint8Array(E);for(let W=0,z=0;W<R.length;W++){const ne=R[W];O.set(ne,z),z+=ne.length}return O}e.concatBytes=y;class w{clone(){return this._cloneInto()}}e.Hash=w;const k=R=>Object.prototype.toString.call(R)==="[object Object]"&&R.constructor===Object;function S(R,E){if(E!==void 0&&(typeof E!="object"||!k(E)))throw new TypeError("Options should be object or undefined");return Object.assign(R,E)}e.checkOpts=S;function L(R){const E=W=>R().update(m(W)).digest(),O=R();return E.outputLen=O.outputLen,E.blockLen=O.blockLen,E.create=()=>R(),E}e.wrapConstructor=L;function U(R){const E=(W,z)=>R(z).update(m(W)).digest(),O=R({});return E.outputLen=O.outputLen,E.blockLen=O.blockLen,E.create=W=>R(W),E}e.wrapConstructorWithOpts=U;function B(R=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(R));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(R).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=B})(Cs);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=gt,r=Cs;class s extends r.Hash{constructor(c,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(c);const d=(0,r.toBytes)(u);if(this.iHash=c.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const p=this.blockLen,h=new Uint8Array(p);h.set(d.length>p?c.create().update(d).digest():d);for(let v=0;v<h.length;v++)h[v]^=54;this.iHash.update(h),this.oHash=c.create();for(let v=0;v<h.length;v++)h[v]^=106;this.oHash.update(h),h.fill(0)}update(c){return t.default.exists(this),this.iHash.update(c),this}digestInto(c){t.default.exists(this),t.default.bytes(c,this.outputLen),this.finished=!0,this.iHash.digestInto(c),this.oHash.update(c),this.oHash.digestInto(c),this.destroy()}digest(){const c=new Uint8Array(this.oHash.outputLen);return this.digestInto(c),c}_cloneInto(c){c||(c=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:p,destroyed:h,blockLen:v,outputLen:m}=this;return c=c,c.finished=p,c.destroyed=h,c.blockLen=v,c.outputLen=m,c.oHash=u._cloneInto(c.oHash),c.iHash=d._cloneInto(c.iHash),c}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(l,c,u)=>new s(l,c).update(u).digest();e.hmac=o,e.hmac.create=(l,c)=>new s(l,c)})(X1);Object.defineProperty(xi,"__esModule",{value:!0});xi.pbkdf2Async=xi.pbkdf2=void 0;const Co=gt,b6=X1,pi=Cs;function Y1(e,t,r,s){Co.default.hash(e);const o=(0,pi.checkOpts)({dkLen:32,asyncTick:10},s),{c:l,dkLen:c,asyncTick:u}=o;if(Co.default.number(l),Co.default.number(c),Co.default.number(u),l<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,pi.toBytes)(t),p=(0,pi.toBytes)(r),h=new Uint8Array(c),v=b6.hmac.create(e,d),m=v._cloneInto().update(p);return{c:l,dkLen:c,asyncTick:u,DK:h,PRF:v,PRFSalt:m}}function J1(e,t,r,s,o){return e.destroy(),t.destroy(),s&&s.destroy(),o.fill(0),r}function y6(e,t,r,s){const{c:o,dkLen:l,DK:c,PRF:u,PRFSalt:d}=Y1(e,t,r,s);let p;const h=new Uint8Array(4),v=(0,pi.createView)(h),m=new Uint8Array(u.outputLen);for(let y=1,w=0;w<l;y++,w+=u.outputLen){const k=c.subarray(w,w+u.outputLen);v.setInt32(0,y,!1),(p=d._cloneInto(p)).update(h).digestInto(m),k.set(m.subarray(0,k.length));for(let S=1;S<o;S++){u._cloneInto(p).update(m).digestInto(m);for(let L=0;L<k.length;L++)k[L]^=m[L]}}return J1(u,d,c,p,m)}xi.pbkdf2=y6;async function _6(e,t,r,s){const{c:o,dkLen:l,asyncTick:c,DK:u,PRF:d,PRFSalt:p}=Y1(e,t,r,s);let h;const v=new Uint8Array(4),m=(0,pi.createView)(v),y=new Uint8Array(d.outputLen);for(let w=1,k=0;k<l;w++,k+=d.outputLen){const S=u.subarray(k,k+d.outputLen);m.setInt32(0,w,!1),(h=p._cloneInto(h)).update(v).digestInto(y),S.set(y.subarray(0,S.length)),await(0,pi.asyncLoop)(o-1,c,L=>{d._cloneInto(h).update(y).digestInto(y);for(let U=0;U<S.length;U++)S[U]^=y[U]})}return J1(d,p,u,h,y)}xi.pbkdf2Async=_6;const w6=oa(o6);var ln={},ha={};Object.defineProperty(ha,"__esModule",{value:!0});ha.SHA2=void 0;const Gl=gt,ls=Cs;function $6(e,t,r,s){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,s);const o=BigInt(32),l=BigInt(4294967295),c=Number(r>>o&l),u=Number(r&l),d=s?4:0,p=s?0:4;e.setUint32(t+d,c,s),e.setUint32(t+p,u,s)}class x6 extends ls.Hash{constructor(t,r,s,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=s,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,ls.createView)(this.buffer)}update(t){Gl.default.exists(this);const{view:r,buffer:s,blockLen:o}=this;t=(0,ls.toBytes)(t);const l=t.length;for(let c=0;c<l;){const u=Math.min(o-this.pos,l-c);if(u===o){const d=(0,ls.createView)(t);for(;o<=l-c;c+=o)this.process(d,c);continue}s.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Gl.default.exists(this),Gl.default.output(t,this),this.finished=!0;const{buffer:r,view:s,blockLen:o,isLE:l}=this;let{pos:c}=this;r[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(s,0),c=0);for(let v=c;v<o;v++)r[v]=0;$6(s,o-8,BigInt(this.length*8),l),this.process(s,0);const u=(0,ls.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let v=0;v<p;v++)u.setUint32(4*v,h[v],l)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const s=t.slice(0,r);return this.destroy(),s}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:s,length:o,finished:l,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=l,t.destroyed=c,o%r&&t.buffer.set(s),t}}ha.SHA2=x6;var ep={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),r=BigInt(32);function s(V,Y=!1){return Y?{h:Number(V&t),l:Number(V>>r&t)}:{h:Number(V>>r&t)|0,l:Number(V&t)|0}}e.fromBig=s;function o(V,Y=!1){let H=new Uint32Array(V.length),Z=new Uint32Array(V.length);for(let he=0;he<V.length;he++){const{h:te,l:K}=s(V[he],Y);[H[he],Z[he]]=[te,K]}return[H,Z]}e.split=o;const l=(V,Y)=>BigInt(V>>>0)<<r|BigInt(Y>>>0);e.toBig=l;const c=(V,Y,H)=>V>>>H,u=(V,Y,H)=>V<<32-H|Y>>>H,d=(V,Y,H)=>V>>>H|Y<<32-H,p=(V,Y,H)=>V<<32-H|Y>>>H,h=(V,Y,H)=>V<<64-H|Y>>>H-32,v=(V,Y,H)=>V>>>H-32|Y<<64-H,m=(V,Y)=>Y,y=(V,Y)=>V,w=(V,Y,H)=>V<<H|Y>>>32-H,k=(V,Y,H)=>Y<<H|V>>>32-H,S=(V,Y,H)=>Y<<H-32|V>>>64-H,L=(V,Y,H)=>V<<H-32|Y>>>64-H;function U(V,Y,H,Z){const he=(Y>>>0)+(Z>>>0);return{h:V+H+(he/2**32|0)|0,l:he|0}}e.add=U;const B=(V,Y,H)=>(V>>>0)+(Y>>>0)+(H>>>0),R=(V,Y,H,Z)=>Y+H+Z+(V/2**32|0)|0,E=(V,Y,H,Z)=>(V>>>0)+(Y>>>0)+(H>>>0)+(Z>>>0),O=(V,Y,H,Z,he)=>Y+H+Z+he+(V/2**32|0)|0,W=(V,Y,H,Z,he)=>(V>>>0)+(Y>>>0)+(H>>>0)+(Z>>>0)+(he>>>0),z=(V,Y,H,Z,he,te)=>Y+H+Z+he+te+(V/2**32|0)|0,ne={fromBig:s,split:o,toBig:e.toBig,shrSH:c,shrSL:u,rotrSH:d,rotrSL:p,rotrBH:h,rotrBL:v,rotr32H:m,rotr32L:y,rotlSH:w,rotlSL:k,rotlBH:S,rotlBL:L,add:U,add3L:B,add3H:R,add4L:E,add4H:O,add5H:z,add5L:W};e.default=ne})(ep);Object.defineProperty(ln,"__esModule",{value:!0});ln.sha384=ln.sha512_256=ln.sha512_224=pc=ln.sha512=ln.SHA512=void 0;const k6=ha,_e=ep,pa=Cs,[C6,S6]=_e.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),dr=new Uint32Array(80),hr=new Uint32Array(80);class Ss extends k6.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:r,Bh:s,Bl:o,Ch:l,Cl:c,Dh:u,Dl:d,Eh:p,El:h,Fh:v,Fl:m,Gh:y,Gl:w,Hh:k,Hl:S}=this;return[t,r,s,o,l,c,u,d,p,h,v,m,y,w,k,S]}set(t,r,s,o,l,c,u,d,p,h,v,m,y,w,k,S){this.Ah=t|0,this.Al=r|0,this.Bh=s|0,this.Bl=o|0,this.Ch=l|0,this.Cl=c|0,this.Dh=u|0,this.Dl=d|0,this.Eh=p|0,this.El=h|0,this.Fh=v|0,this.Fl=m|0,this.Gh=y|0,this.Gl=w|0,this.Hh=k|0,this.Hl=S|0}process(t,r){for(let B=0;B<16;B++,r+=4)dr[B]=t.getUint32(r),hr[B]=t.getUint32(r+=4);for(let B=16;B<80;B++){const R=dr[B-15]|0,E=hr[B-15]|0,O=_e.default.rotrSH(R,E,1)^_e.default.rotrSH(R,E,8)^_e.default.shrSH(R,E,7),W=_e.default.rotrSL(R,E,1)^_e.default.rotrSL(R,E,8)^_e.default.shrSL(R,E,7),z=dr[B-2]|0,ne=hr[B-2]|0,V=_e.default.rotrSH(z,ne,19)^_e.default.rotrBH(z,ne,61)^_e.default.shrSH(z,ne,6),Y=_e.default.rotrSL(z,ne,19)^_e.default.rotrBL(z,ne,61)^_e.default.shrSL(z,ne,6),H=_e.default.add4L(W,Y,hr[B-7],hr[B-16]),Z=_e.default.add4H(H,O,V,dr[B-7],dr[B-16]);dr[B]=Z|0,hr[B]=H|0}let{Ah:s,Al:o,Bh:l,Bl:c,Ch:u,Cl:d,Dh:p,Dl:h,Eh:v,El:m,Fh:y,Fl:w,Gh:k,Gl:S,Hh:L,Hl:U}=this;for(let B=0;B<80;B++){const R=_e.default.rotrSH(v,m,14)^_e.default.rotrSH(v,m,18)^_e.default.rotrBH(v,m,41),E=_e.default.rotrSL(v,m,14)^_e.default.rotrSL(v,m,18)^_e.default.rotrBL(v,m,41),O=v&y^~v&k,W=m&w^~m&S,z=_e.default.add5L(U,E,W,S6[B],hr[B]),ne=_e.default.add5H(z,L,R,O,C6[B],dr[B]),V=z|0,Y=_e.default.rotrSH(s,o,28)^_e.default.rotrBH(s,o,34)^_e.default.rotrBH(s,o,39),H=_e.default.rotrSL(s,o,28)^_e.default.rotrBL(s,o,34)^_e.default.rotrBL(s,o,39),Z=s&l^s&u^l&u,he=o&c^o&d^c&d;L=k|0,U=S|0,k=y|0,S=w|0,y=v|0,w=m|0,{h:v,l:m}=_e.default.add(p|0,h|0,ne|0,V|0),p=u|0,h=d|0,u=l|0,d=c|0,l=s|0,c=o|0;const te=_e.default.add3L(V,H,he);s=_e.default.add3H(te,ne,Y,Z),o=te|0}({h:s,l:o}=_e.default.add(this.Ah|0,this.Al|0,s|0,o|0)),{h:l,l:c}=_e.default.add(this.Bh|0,this.Bl|0,l|0,c|0),{h:u,l:d}=_e.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:p,l:h}=_e.default.add(this.Dh|0,this.Dl|0,p|0,h|0),{h:v,l:m}=_e.default.add(this.Eh|0,this.El|0,v|0,m|0),{h:y,l:w}=_e.default.add(this.Fh|0,this.Fl|0,y|0,w|0),{h:k,l:S}=_e.default.add(this.Gh|0,this.Gl|0,k|0,S|0),{h:L,l:U}=_e.default.add(this.Hh|0,this.Hl|0,L|0,U|0),this.set(s,o,l,c,u,d,p,h,v,m,y,w,k,S,L,U)}roundClean(){dr.fill(0),hr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}ln.SHA512=Ss;class E6 extends Ss{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class T6 extends Ss{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class A6 extends Ss{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var pc=ln.sha512=(0,pa.wrapConstructor)(()=>new Ss);ln.sha512_224=(0,pa.wrapConstructor)(()=>new E6);ln.sha512_256=(0,pa.wrapConstructor)(()=>new T6);ln.sha384=(0,pa.wrapConstructor)(()=>new A6);const I6=oa(Jx),R6=oa(g6);Object.defineProperty(Qt,"__esModule",{value:!0});var tp=Qt.mnemonicToSeedSync=Qt.mnemonicToSeed=fp=Qt.validateMnemonic=Qt.entropyToMnemonic=Qt.mnemonicToEntropy=ap=Qt.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const np=gt,rp=xi,L6=w6,ip=ln,O6=I6,So=R6,P6=e=>e[0]==="あいこくしん";function sp(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function Gc(e){const t=sp(e),r=t.split(" ");if(![12,15,18,21,24].includes(r.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:r}}function op(e){np.default.bytes(e,16,20,24,28,32)}function M6(e,t=128){if(np.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return up((0,O6.randomBytes)(t/8),e)}var ap=Qt.generateMnemonic=M6;const B6=e=>{const t=8-e.length/4;return new Uint8Array([(0,L6.sha256)(e)[0]>>t<<t])};function lp(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),So.utils.chain(So.utils.checksum(1,B6),So.utils.radix2(11,!0),So.utils.alphabet(e))}function cp(e,t){const{words:r}=Gc(e),s=lp(t).decode(r);return op(s),s}Qt.mnemonicToEntropy=cp;function up(e,t){return op(e),lp(t).encode(e).join(P6(t)?"　":" ")}Qt.entropyToMnemonic=up;function U6(e,t){try{cp(e,t)}catch{return!1}return!0}var fp=Qt.validateMnemonic=U6;const dp=e=>sp(`mnemonic${e}`);function D6(e,t=""){return(0,rp.pbkdf2Async)(ip.sha512,Gc(e).nfkd,dp(t),{c:2048,dkLen:64})}Qt.mnemonicToSeed=D6;function H6(e,t=""){return(0,rp.pbkdf2)(ip.sha512,Gc(e).nfkd,dp(t),{c:2048,dkLen:64})}tp=Qt.mnemonicToSeedSync=H6;class hp extends zc{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,zr.hash(t);const s=xs(r);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,l=new Uint8Array(o);l.set(s.length>o?t.create().update(s).digest():s);for(let c=0;c<l.length;c++)l[c]^=54;this.iHash.update(l),this.oHash=t.create();for(let c=0;c<l.length;c++)l[c]^=106;this.oHash.update(l),l.fill(0)}update(t){return zr.exists(this),this.iHash.update(t),this}digestInto(t){zr.exists(this),zr.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:s,finished:o,destroyed:l,blockLen:c,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=l,t.blockLen=c,t.outputLen=u,t.oHash=r._cloneInto(t.oHash),t.iHash=s._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const bs=(e,t,r)=>new hp(e,t).update(r).digest();bs.create=(e,t)=>new hp(e,t);const F6=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),pp=Uint8Array.from({length:16},(e,t)=>t),j6=pp.map(e=>(9*e+5)%16);let Vc=[pp],Qc=[j6];for(let e=0;e<4;e++)for(let t of[Vc,Qc])t.push(t[e].map(r=>F6[r]));const gp=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),z6=Vc.map((e,t)=>e.map(r=>gp[t][r])),N6=Qc.map((e,t)=>e.map(r=>gp[t][r])),W6=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),q6=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),Eo=(e,t)=>e<<t|e>>>32-t;function Lh(e,t,r,s){return e===0?t^r^s:e===1?t&r|~t&s:e===2?(t|~r)^s:e===3?t&s|r&~s:t^(r|~s)}const To=new Uint32Array(16);class K6 extends I1{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:r,h2:s,h3:o,h4:l}=this;return[t,r,s,o,l]}set(t,r,s,o,l){this.h0=t|0,this.h1=r|0,this.h2=s|0,this.h3=o|0,this.h4=l|0}process(t,r){for(let y=0;y<16;y++,r+=4)To[y]=t.getUint32(r,!0);let s=this.h0|0,o=s,l=this.h1|0,c=l,u=this.h2|0,d=u,p=this.h3|0,h=p,v=this.h4|0,m=v;for(let y=0;y<5;y++){const w=4-y,k=W6[y],S=q6[y],L=Vc[y],U=Qc[y],B=z6[y],R=N6[y];for(let E=0;E<16;E++){const O=Eo(s+Lh(y,l,u,p)+To[L[E]]+k,B[E])+v|0;s=v,v=p,p=Eo(u,10)|0,u=l,l=O}for(let E=0;E<16;E++){const O=Eo(o+Lh(w,c,d,h)+To[U[E]]+S,R[E])+m|0;o=m,m=h,h=Eo(d,10)|0,d=c,c=O}}this.set(this.h1+u+h|0,this.h2+p+m|0,this.h3+v+o|0,this.h4+s+c|0,this.h0+l+d|0)}roundClean(){To.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const G6=da(()=>new K6);$e.hmacSha256Sync=(e,...t)=>bs(Xn,e,$e.concatBytes(...t));const Vl=F1(Xn);function Oh(e){return BigInt(`0x${S1(e)}`)}function V6(e){return E1(e.toString(16).padStart(64,"0"))}const Q6=jc("Bitcoin seed"),Ql={private:76066276,public:76067358},Zl=2147483648,Z6=e=>G6(Xn(e)),X6=e=>Wr(e).getUint32(0,!1),Ao=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return Wr(t).setUint32(0,e,!1),t};class jr{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||Ql,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!$e.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Oh(t.privateKey),this.privKeyBytes=V6(this.privKey),this.pubKey=Rx(t.privateKey,!0)}else if(t.publicKey)this.pubKey=Ie.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=Z6(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return X6(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return Vl.encode(this.serialize(this.versions.private,us(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Vl.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,r=Ql){if(di(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const s=bs(pc,Q6,t);return new jr({versions:r,chainCode:s.slice(32),privateKey:s.slice(0,32)})}static fromExtendedKey(t,r=Ql){const s=Vl.decode(t),o=Wr(s),l=o.getUint32(0,!1),c={versions:r,depth:s[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:s.slice(13,45)},u=s.slice(45),d=u[0]===0;if(l!==r[d?"private":"public"])throw new Error("Version mismatch");return d?new jr({...c,privateKey:u.slice(1)}):new jr({...c,publicKey:u})}static fromJSON(t){return jr.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const r=t.replace(/^[mM]'?\//,"").split("/");let s=this;for(const o of r){const l=/^(\d+)('?)$/.exec(o);if(!l||l.length!==3)throw new Error(`Invalid child index: ${o}`);let c=+l[1];if(!Number.isSafeInteger(c)||c>=Zl)throw new Error("Invalid index");l[2]==="'"&&(c+=Zl),s=s.deriveChild(c)}return s}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let r=Ao(t);if(t>=Zl){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");r=us(new Uint8Array([0]),u,r)}else r=us(this.pubKey,r);const s=bs(pc,this.chainCode,r),o=Oh(s.slice(0,32)),l=s.slice(32);if(!$e.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const c={versions:this.versions,chainCode:l,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=$e.mod(this.privKey+o,Ne.n);if(!$e.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=u}else{const u=Ie.fromHex(this.pubKey).add(Ie.fromPrivateKey(o));if(u.equals(Ie.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=u.toRawBytes(!0)}return new jr(c)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return di(t,32),Mx(t,this.privKey,{canonical:!0,der:!1})}verify(t,r){if(di(t,32),di(r,64),!this.publicKey)throw new Error("No publicKey set!");let s;try{s=Zn.fromCompact(r)}catch{return!1}return Ux(s,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,r){if(!this.chainCode)throw new Error("No chainCode set");return di(r,33),us(Ao(t),new Uint8Array([this.depth]),Ao(this.parentFingerprint),Ao(this.index),this.chainCode,r)}}var Y6=Object.defineProperty,Ut=(e,t)=>{for(var r in t)Y6(e,r,{get:t[r],enumerable:!0})};function J6(e){return $e.bytesToHex(fa.getPublicKey(e))}var e8={};Ut(e8,{insertEventIntoAscendingList:()=>n8,insertEventIntoDescendingList:()=>t8,normalizeURL:()=>gc,utf8Decoder:()=>vr,utf8Encoder:()=>In});var vr=new TextDecoder("utf-8"),In=new TextEncoder;function gc(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function t8(e,t){let r=0,s=e.length-1,o,l=r;if(s<0)l=0;else if(t.created_at<e[s].created_at)l=s+1;else if(t.created_at>=e[r].created_at)l=r;else for(;;){if(s<=r+1){l=s;break}if(o=Math.floor(r+(s-r)/2),e[o].created_at>t.created_at)r=o;else if(e[o].created_at<t.created_at)s=o;else{l=o;break}}return e[l]?.id!==t.id?[...e.slice(0,l),t,...e.slice(l)]:e}function n8(e,t){let r=0,s=e.length-1,o,l=r;if(s<0)l=0;else if(t.created_at>e[s].created_at)l=s+1;else if(t.created_at<=e[r].created_at)l=r;else for(;;){if(s<=r+1){l=s;break}if(o=Math.floor(r+(s-r)/2),e[o].created_at<t.created_at)r=o;else if(e[o].created_at>t.created_at)s=o;else{l=o;break}}return e[l]?.id!==t.id?[...e.slice(0,l),t,...e.slice(l)]:e}var ft=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(ft||{});function r8(e){if(!Zc(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function vp(e){let t=Xn(In.encode(r8(e)));return $e.bytesToHex(t)}var i8=e=>e instanceof Object;function Zc(e){if(!i8(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let r=e.tags[t];if(!Array.isArray(r))return!1;for(let s=0;s<r.length;s++)if(typeof r[s]=="object")return!1}return!0}function mp(e){return fa.verifySync(e.sig,vp(e),e.pubkey)}function s8(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(r=>t.id.startsWith(r))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(r=>t.pubkey.startsWith(r)))return!1;for(let r in e)if(r[0]==="#"){let s=r.slice(1),o=e[`#${s}`];if(o&&!t.tags.find(([l,c])=>l===r.slice(1)&&o.indexOf(c)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function o8(e,t){for(let r=0;r<e.length;r++)if(s8(e[r],t))return!0;return!1}var a8={};Ut(a8,{getHex64:()=>ga,getInt:()=>bp,getSubscriptionId:()=>yp,matchEventId:()=>l8,matchEventKind:()=>u8,matchEventPubkey:()=>c8});function ga(e,t){let r=t.length+3,s=e.indexOf(`"${t}":`)+r,o=e.slice(s).indexOf('"')+s+1;return e.slice(o,o+64)}function bp(e,t){let r=t.length,s=e.indexOf(`"${t}":`)+r+3,o=e.slice(s),l=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,l),10)}function yp(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let r=e.slice(t+7+1).indexOf('"');if(r===-1)return null;let s=t+7+1+r,o=e.slice(s+1,80).indexOf('"');if(o===-1)return null;let l=s+1+o;return e.slice(s+1,l)}function l8(e,t){return t===ga(e,"id")}function c8(e,t){return t===ga(e,"pubkey")}function u8(e,t){return t===bp(e,"kind")}var Ph=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function f8(e,t={}){let{listTimeout:r=3e3,getTimeout:s=3e3,countTimeout:o=3e3}=t;var l,c={},u=Ph(),d={},p={},h;async function v(){return h||(h=new Promise((L,U)=>{try{l=new WebSocket(e)}catch(O){U(O)}l.onopen=()=>{u.connect.forEach(O=>O()),L()},l.onerror=()=>{h=void 0,u.error.forEach(O=>O()),U()},l.onclose=async()=>{h=void 0,u.disconnect.forEach(O=>O())};let B=[],R;l.onmessage=O=>{B.push(O.data),R||(R=setInterval(E,0))};function E(){if(B.length===0){clearInterval(R),R=null;return}var O=B.shift();if(!O)return;let W=yp(O);if(W){let z=c[W];if(z&&z.alreadyHaveEvent&&z.alreadyHaveEvent(ga(O,"id"),e))return}try{let z=JSON.parse(O);switch(z[0]){case"EVENT":{let H=z[1],Z=z[2];Zc(Z)&&c[H]&&(c[H].skipVerification||mp(Z))&&o8(c[H].filters,Z)&&(c[H],(d[H]?.event||[]).forEach(he=>he(Z)));return}case"COUNT":let ne=z[1],V=z[2];c[ne]&&(d[ne]?.count||[]).forEach(H=>H(V));return;case"EOSE":{let H=z[1];H in d&&(d[H].eose.forEach(Z=>Z()),d[H].eose=[]);return}case"OK":{let H=z[1],Z=z[2],he=z[3]||"";H in p&&(Z?p[H].ok.forEach(te=>te()):p[H].failed.forEach(te=>te(he)),p[H].ok=[],p[H].failed=[]);return}case"NOTICE":let Y=z[1];u.notice.forEach(H=>H(Y));return;case"AUTH":{let H=z[1];u.auth?.forEach(Z=>Z(H));return}}}catch{return}}}),h)}function m(){return l?.readyState===1}async function y(){m()||await v()}async function w(L){let U=JSON.stringify(L);if(!(!m()&&(await new Promise(B=>setTimeout(B,1e3)),!m())))try{l.send(U)}catch(B){console.log(B)}}const k=(L,{verb:U="REQ",skipVerification:B=!1,alreadyHaveEvent:R=null,id:E=Math.random().toString().slice(2)}={})=>{let O=E;return c[O]={id:O,filters:L,skipVerification:B,alreadyHaveEvent:R},w([U,O,...L]),{sub:(W,z={})=>k(W||L,{skipVerification:z.skipVerification||B,alreadyHaveEvent:z.alreadyHaveEvent||R,id:O}),unsub:()=>{delete c[O],delete d[O],w(["CLOSE",O])},on:(W,z)=>{d[O]=d[O]||{event:[],count:[],eose:[]},d[O][W].push(z)},off:(W,z)=>{let ne=d[O],V=ne[W].indexOf(z);V>=0&&ne[W].splice(V,1)}}};function S(L,U){if(!L.id)throw new Error(`event ${L} has no id`);let B=L.id;return w([U,L]),{on:(R,E)=>{p[B]=p[B]||{ok:[],failed:[]},p[B][R].push(E)},off:(R,E)=>{let O=p[B];if(!O)return;let W=O[R].indexOf(E);W>=0&&O[R].splice(W,1)}}}return{url:e,sub:k,on:(L,U)=>{u[L].push(U),L==="connect"&&l?.readyState===1&&U()},off:(L,U)=>{let B=u[L].indexOf(U);B!==-1&&u[L].splice(B,1)},list:(L,U)=>new Promise(B=>{let R=k(L,U),E=[],O=setTimeout(()=>{R.unsub(),B(E)},r);R.on("eose",()=>{R.unsub(),clearTimeout(O),B(E)}),R.on("event",W=>{E.push(W)})}),get:(L,U)=>new Promise(B=>{let R=k([L],U),E=setTimeout(()=>{R.unsub(),B(null)},s);R.on("event",O=>{R.unsub(),clearTimeout(E),B(O)})}),count:L=>new Promise(U=>{let B=k(L,{...k,verb:"COUNT"}),R=setTimeout(()=>{B.unsub(),U(null)},o);B.on("count",E=>{B.unsub(),clearTimeout(R),U(E)})}),publish(L){return S(L,"EVENT")},auth(L){return S(L,"AUTH")},connect:y,close(){u=Ph(),d={},p={},l.readyState===WebSocket.OPEN&&l?.close()},get status(){return l?.readyState??3}}}var d8=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let r=this._conn[gc(t)];r&&r.close()})}async ensureRelay(e){const t=gc(e);this._conn[t]||(this._conn[t]=f8(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const r=this._conn[t];return await r.connect(),r}sub(e,t,r){let s=new Set,o={...r||{}};o.alreadyHaveEvent=(m,y)=>{if(r?.alreadyHaveEvent?.(m,y))return!0;let w=this._seenOn[m]||new Set;return w.add(y),this._seenOn[m]=w,s.has(m)};let l=[],c=new Set,u=new Set,d=e.length,p=!1,h=setTimeout(()=>{p=!0;for(let m of u.values())m()},this.eoseSubTimeout);e.forEach(async m=>{let y;try{y=await this.ensureRelay(m)}catch{k();return}if(!y)return;let w=y.sub(t,o);w.on("event",S=>{s.add(S.id);for(let L of c.values())L(S)}),w.on("eose",()=>{p||k()}),l.push(w);function k(){if(d--,d===0){clearTimeout(h);for(let S of u.values())S()}}});let v={sub(m,y){return l.forEach(w=>w.sub(m,y)),v},unsub(){l.forEach(m=>m.unsub())},on(m,y){m==="event"?c.add(y):m==="eose"&&u.add(y)},off(m,y){m==="event"?c.delete(y):m==="eose"&&u.delete(y)}};return v}get(e,t,r){return new Promise(s=>{let o=this.sub(e,[t],r),l=setTimeout(()=>{o.unsub(),s(null)},this.getTimeout);o.on("event",c=>{s(c),clearTimeout(l),o.unsub()})})}list(e,t,r){return new Promise(s=>{let o=[],l=this.sub(e,t,r);l.on("event",c=>{o.push(c)}),l.on("eose",()=>{l.unsub(),s(o)})})}publish(e,t){const r=e.map(async o=>{let l;try{return l=await this.ensureRelay(o),l.publish(t)}catch{return{on(){},off(){}}}}),s=new Map;return{on(o,l){e.forEach(async(c,u)=>{let d=await r[u],p=()=>l(c);s.set(l,p),d.on(o,p)})},off(o,l){e.forEach(async(c,u)=>{let d=s.get(l);d&&(await r[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},Es={};Ut(Es,{decode:()=>va,naddrEncode:()=>b8,neventEncode:()=>m8,noteEncode:()=>g8,nprofileEncode:()=>v8,npubEncode:()=>p8,nrelayEncode:()=>y8,nsecEncode:()=>h8});var Pi=5e3;function va(e){let{prefix:t,words:r}=Et.decode(e,Pi),s=new Uint8Array(Et.fromWords(r));switch(t){case"nprofile":{let o=Io(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:$e.bytesToHex(o[0][0]),relays:o[1]?o[1].map(l=>vr.decode(l)):[]}}}case"nevent":{let o=Io(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:$e.bytesToHex(o[0][0]),relays:o[1]?o[1].map(l=>vr.decode(l)):[],author:o[2]?.[0]?$e.bytesToHex(o[2][0]):void 0}}}case"naddr":{let o=Io(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:vr.decode(o[0][0]),pubkey:$e.bytesToHex(o[2][0]),kind:parseInt($e.bytesToHex(o[3][0]),16),relays:o[1]?o[1].map(l=>vr.decode(l)):[]}}}case"nrelay":{let o=Io(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:vr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:$e.bytesToHex(s)};default:throw new Error(`unknown prefix ${t}`)}}function Io(e){let t={},r=e;for(;r.length>0;){let s=r[0],o=r[1],l=r.slice(2,2+o);r=r.slice(2+o),!(l.length<o)&&(t[s]=t[s]||[],t[s].push(l))}return t}function h8(e){return Xc("nsec",e)}function p8(e){return Xc("npub",e)}function g8(e){return Xc("note",e)}function Xc(e,t){let r=$e.hexToBytes(t),s=Et.toWords(r);return Et.encode(e,s,Pi)}function v8(e){let t=ma({0:[$e.hexToBytes(e.pubkey)],1:(e.relays||[]).map(s=>In.encode(s))}),r=Et.toWords(t);return Et.encode("nprofile",r,Pi)}function m8(e){let t=ma({0:[$e.hexToBytes(e.id)],1:(e.relays||[]).map(s=>In.encode(s)),2:e.author?[$e.hexToBytes(e.author)]:[]}),r=Et.toWords(t);return Et.encode("nevent",r,Pi)}function b8(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let r=ma({0:[In.encode(e.identifier)],1:(e.relays||[]).map(o=>In.encode(o)),2:[$e.hexToBytes(e.pubkey)],3:[new Uint8Array(t)]}),s=Et.toWords(r);return Et.encode("naddr",s,Pi)}function y8(e){let t=ma({0:[In.encode(e)]}),r=Et.toWords(t);return Et.encode("nrelay",r,Pi)}function ma(e){let t=[];return Object.entries(e).forEach(([r,s])=>{s.forEach(o=>{let l=new Uint8Array(o.length+2);l.set([parseInt(r)],0),l.set([o.length],1),l.set(o,2),t.push(l)})}),$e.concatBytes(...t)}var _8={};Ut(_8,{decrypt:()=>$8,encrypt:()=>w8});async function w8(e,t,r){const s=v1(e,"02"+t),o=_p(s);let l=Uint8Array.from(A1(16)),c=In.encode(r),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:l},u,c),p=$i.encode(new Uint8Array(d)),h=$i.encode(new Uint8Array(l.buffer));return`${p}?iv=${h}`}async function $8(e,t,r){let[s,o]=r.split("?iv="),l=v1(e,"02"+t),c=_p(l),u=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),d=$i.decode(s),p=$i.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:p},u,d);return vr.decode(h)}function _p(e){return e.slice(1,33)}var wp={};Ut(wp,{queryProfile:()=>C8,searchDomain:()=>k8,useFetchImplementation:()=>x8});var ba;try{ba=fetch}catch{}function x8(e){ba=e}async function k8(e,t=""){try{return(await(await ba(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function C8(e){let[t,r]=e.split("@");if(r||(r=t,t="_"),!t.match(/^[A-Za-z0-9-_.]+$/)||!r.includes("."))return null;let s;try{s=await(await ba(`https://${r}/.well-known/nostr.json?name=${t}`)).json()}catch{return null}if(!s?.names?.[t])return null;let o=s.names[t],l=s.relays?.[o]||[];return{pubkey:o,relays:l}}var S8={};Ut(S8,{generateSeedWords:()=>T8,privateKeyFromSeedWords:()=>E8,validateWords:()=>A8});function E8(e,t){let s=jr.fromMasterSeed(tp(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!s)throw new Error("could not derive private key");return $e.bytesToHex(s)}function T8(){return ap(qc)}function A8(e){return fp(e,qc)}var I8={};Ut(I8,{parse:()=>R8});function R8(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},r=[];for(const s of e.tags)s[0]==="e"&&s[1]&&r.push(s),s[0]==="p"&&s[1]&&t.profiles.push({pubkey:s[1],relays:s[2]?[s[2]]:[]});for(let s=0;s<r.length;s++){const o=r[s],[l,c,u,d]=o,p={id:c,relays:u?[u]:[]},h=s===0,v=s===r.length-1;if(d==="root"){t.root=p;continue}if(d==="reply"){t.reply=p;continue}if(d==="mention"){t.mentions.push(p);continue}if(h){t.root=p;continue}if(v){t.reply=p;continue}t.mentions.push(p)}return t}var L8={};Ut(L8,{getPow:()=>O8});function O8(e){return P8($e.hexToBytes(e))}function P8(e){let t,r,s;for(r=0,t=0;r<e.length&&(s=M8(e[r]),t+=s,s===8);r++);return t}function M8(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var B8={};Ut(B8,{BECH32_REGEX:()=>$p,NOSTR_URI_REGEX:()=>ya,parse:()=>D8,test:()=>U8});var $p=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/,ya=new RegExp(`nostr:(${$p.source})`);function U8(e){return typeof e=="string"&&new RegExp(`^${ya.source}$`).test(e)}function D8(e){const t=e.match(new RegExp(`^${ya.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:va(t[1])}}var H8={};Ut(H8,{createDelegation:()=>F8,getDelegator:()=>j8});function F8(e,t){let r=[];(t.kind||-1)>=0&&r.push(`kind=${t.kind}`),t.until&&r.push(`created_at<${t.until}`),t.since&&r.push(`created_at>${t.since}`);let s=r.join("&");if(s==="")throw new Error("refusing to create a delegation without any conditions");let o=Xn(In.encode(`nostr:delegation:${t.pubkey}:${s}`)),l=$e.bytesToHex(fa.signSync(o,e));return{from:J6(e),to:t.pubkey,cond:s,sig:l}}function j8(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let r=t[1],s=t[2],o=t[3],l=s.split("&");for(let u=0;u<l.length;u++){let[d,p,h]=l[u].split(/\b/);if(!(d==="kind"&&p==="="&&e.kind===parseInt(h))){if(d==="created_at"&&p==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&p===">"&&e.created_at>parseInt(h))continue;return null}}let c=Xn(In.encode(`nostr:delegation:${e.pubkey}:${s}`));return fa.verifySync(o,c,r)?r:null}var z8={};Ut(z8,{matchAll:()=>N8,regex:()=>Yc,replaceAll:()=>W8});var Yc=()=>new RegExp(`\\b${ya.source}\\b`,"g");function*N8(e){const t=e.matchAll(Yc());for(const r of t){const[s,o]=r;yield{uri:s,value:o,decoded:va(o),start:r.index,end:r.index+s.length}}}function W8(e,t){return e.replaceAll(Yc(),(r,s)=>t({uri:r,value:s,decoded:va(s)}))}var q8={};Ut(q8,{useFetchImplementation:()=>K8,validateGithub:()=>G8});var Jc;try{Jc=fetch}catch{}function K8(e){Jc=e}async function G8(e,t,r){try{return await(await Jc(`https://gist.github.com/${t}/${r}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var V8={};Ut(V8,{authenticate:()=>Q8});var Q8=async({challenge:e,relay:t,sign:r})=>{const s={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await r(s));return new Promise((l,c)=>{o.on("ok",function u(){o.off("ok",u),l()}),o.on("failed",function u(d){o.off("failed",u),c(d)})})},Z8={};Ut(Z8,{getZapEndpoint:()=>Y8,makeZapReceipt:()=>t7,makeZapRequest:()=>J8,useFetchImplementation:()=>X8,validateZapRequest:()=>e7});var eu;try{eu=fetch}catch{}function X8(e){eu=e}async function Y8(e){try{let t="",{lud06:r,lud16:s}=JSON.parse(e.content);if(r){let{words:c}=Et.decode(r,1e3),u=Et.fromWords(c);t=vr.decode(u)}else if(s){let[c,u]=s.split("@");t=`https://${u}/.well-known/lnurlp/${c}`}else return null;let l=await(await eu(t)).json();if(l.allowsNostr&&l.nostrPubkey)return l.callback}catch{}return null}function J8({profile:e,event:t,amount:r,relays:s,comment:o=""}){if(!r)throw new Error("amount not given");if(!e)throw new Error("profile not given");let l={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",r.toString()],["relays",...s]]};return t&&l.tags.push(["e",t]),l}function e7(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!Zc(t))return"Zap request is not a valid Nostr event.";if(!mp(t))return"Invalid signature on zap request.";let r=t.tags.find(([l,c])=>l==="p"&&c);if(!r)return"Zap request doesn't have a 'p' tag.";if(!r[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let s=t.tags.find(([l,c])=>l==="e"&&c);return s&&!s[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([l,c])=>l==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function t7({zapRequest:e,preimage:t,bolt11:r,paidAt:s}){let l=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),c={kind:9735,created_at:Math.round(s.getTime()/1e3),content:"",tags:[...l,["bolt11",r],["description",e]]};return t&&c.tags.push(["preimage",t]),c}$e.hmacSha256Sync=(e,...t)=>bs(Xn,e,$e.concatBytes(...t));$e.sha256Sync=(...e)=>Xn($e.concatBytes(...e));const n7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),xp=(e={})=>(()=>{const t=n7();return Qe(t,e,!0,!0),t})(),r7=P('<div class="block shrink-0 overflow-hidden border-b p-1">'),tu=e=>(()=>{const t=r7();return I(t,()=>e.children),t})(),i7=P('<button class="text-blue-500 underline">'),{noteEncode:s7}=Es,o7=e=>{try{return s7(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},nu=e=>(()=>{const t=i7();return I(t,()=>o7(e.eventId)),t})(),a7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),l7=(e={})=>(()=>{const t=a7();return Qe(t,e,!0,!0),t})(),c7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),kp=(e={})=>(()=>{const t=c7();return Qe(t,e,!0,!0),t})(),u7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),ru=(e={})=>(()=>{const t=u7();return Qe(t,e,!0,!0),t})(),f7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),Cp=(e={})=>(()=>{const t=f7();return Qe(t,e,!0,!0),t})(),d7=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),vc=(e={})=>(()=>{const t=d7();return Qe(t,e,!0,!0),t})(),h7=P('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),p7=P('<div><button></button><ul class="absolute z-20 min-w-[48px] rounded border bg-white shadow-md">'),g7=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const r=h7(),s=r.firstChild;return s.$$click=t,I(s,()=>e.item.content()),r})()},Sp=e=>{let t;const[r,s]=be(!1),o=h=>{const v=h.target;v!=null&&!t?.contains(v)&&s(!1)},l=()=>{document.addEventListener("mousedown",o)},c=()=>{document.removeEventListener("mousedown",o)},u=()=>s(!0),d=()=>s(!1),p=h=>{if(t==null)return;const v=h.currentTarget.getBoundingClientRect();t.style.left=`${v.left-v.width}px`,t.style.top=`${v.top+v.height}px`,u()};return xr(()=>{r()?l():c()}),Cr(()=>c()),(()=>{const h=p7(),v=h.firstChild,m=v.nextSibling;v.$$click=p,I(v,()=>e.children);const y=t;return typeof y=="function"?_n(y,m):t=m,I(m,$(Bt,{get each(){return e.menu.filter(w=>w.when==null||w.when())},children:w=>$(g7,{item:w,onClose:d})})),Ee(w=>{const k=!r(),S=!!r();return k!==w._v$&&m.classList.toggle("hidden",w._v$=k),S!==w._v$2&&m.classList.toggle("block",w._v$2=S),w},{_v$:void 0,_v$2:void 0}),h})()};st(["click"]);function Ep(e){return e&&e.__esModule?e.default:e}function mn(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _a,ce,Tp,hs,Ap,Mh,Qo={},Ip=[],v7=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function br(e,t){for(var r in t)e[r]=t[r];return e}function Rp(e){var t=e.parentNode;t&&t.removeChild(e)}function mc(e,t,r){var s,o,l,c={};for(l in t)l=="key"?s=t[l]:l=="ref"?o=t[l]:c[l]=t[l];if(arguments.length>2&&(c.children=arguments.length>3?_a.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)c[l]===void 0&&(c[l]=e.defaultProps[l]);return Uo(e,c,s,o,null)}function Uo(e,t,r,s,o){var l={type:e,props:t,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Tp};return o==null&&ce.vnode!=null&&ce.vnode(l),l}function Kn(){return{current:null}}function ki(e){return e.children}function En(e,t){this.props=e,this.context=t}function Ci(e,t){if(t==null)return e.__?Ci(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Ci(e):null}function Lp(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Lp(e)}}function Bh(e){(!e.__d&&(e.__d=!0)&&hs.push(e)&&!Zo.__r++||Mh!==ce.debounceRendering)&&((Mh=ce.debounceRendering)||Ap)(Zo)}function Zo(){for(var e;Zo.__r=hs.length;)e=hs.sort(function(t,r){return t.__v.__b-r.__v.__b}),hs=[],e.some(function(t){var r,s,o,l,c,u;t.__d&&(c=(l=(r=t).__v).__e,(u=r.__P)&&(s=[],(o=br({},l)).__v=l.__v+1,iu(u,l,o,r.__n,u.ownerSVGElement!==void 0,l.__h!=null?[c]:null,s,c??Ci(l),l.__h),Bp(s,l),l.__e!=c&&Lp(l)))})}function Op(e,t,r,s,o,l,c,u,d,p){var h,v,m,y,w,k,S,L=s&&s.__k||Ip,U=L.length;for(r.__k=[],h=0;h<t.length;h++)if((y=r.__k[h]=(y=t[h])==null||typeof y=="boolean"?null:typeof y=="string"||typeof y=="number"||typeof y=="bigint"?Uo(null,y,null,null,y):Array.isArray(y)?Uo(ki,{children:y},null,null,null):y.__b>0?Uo(y.type,y.props,y.key,null,y.__v):y)!=null){if(y.__=r,y.__b=r.__b+1,(m=L[h])===null||m&&y.key==m.key&&y.type===m.type)L[h]=void 0;else for(v=0;v<U;v++){if((m=L[v])&&y.key==m.key&&y.type===m.type){L[v]=void 0;break}m=null}iu(e,y,m=m||Qo,o,l,c,u,d,p),w=y.__e,(v=y.ref)&&m.ref!=v&&(S||(S=[]),m.ref&&S.push(m.ref,null,y),S.push(v,y.__c||w,y)),w!=null?(k==null&&(k=w),typeof y.type=="function"&&y.__k===m.__k?y.__d=d=Pp(y,d,e):d=Mp(e,y,m,L,w,d),typeof r.type=="function"&&(r.__d=d)):d&&m.__e==d&&d.parentNode!=e&&(d=Ci(m))}for(r.__e=k,h=U;h--;)L[h]!=null&&(typeof r.type=="function"&&L[h].__e!=null&&L[h].__e==r.__d&&(r.__d=Ci(s,h+1)),Dp(L[h],L[h]));if(S)for(h=0;h<S.length;h++)Up(S[h],S[++h],S[++h])}function Pp(e,t,r){for(var s,o=e.__k,l=0;o&&l<o.length;l++)(s=o[l])&&(s.__=e,t=typeof s.type=="function"?Pp(s,t,r):Mp(r,s,s,o,s.__e,t));return t}function Xo(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){Xo(r,t)}):t.push(e)),t}function Mp(e,t,r,s,o,l){var c,u,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(r==null||o!=l||o.parentNode==null)e:if(l==null||l.parentNode!==e)e.appendChild(o),c=null;else{for(u=l,d=0;(u=u.nextSibling)&&d<s.length;d+=2)if(u==o)break e;e.insertBefore(o,l),c=l}return c!==void 0?c:o.nextSibling}function m7(e,t,r,s,o){var l;for(l in r)l==="children"||l==="key"||l in t||Yo(e,l,null,r[l],s);for(l in t)o&&typeof t[l]!="function"||l==="children"||l==="key"||l==="value"||l==="checked"||r[l]===t[l]||Yo(e,l,t[l],r[l],s)}function Uh(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||v7.test(t)?r:r+"px"}function Yo(e,t,r,s,o){var l;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)r&&t in r||Uh(e.style,t,"");if(r)for(t in r)s&&r[t]===s[t]||Uh(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")l=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=r,r?s||e.addEventListener(t,l?Hh:Dh,l):e.removeEventListener(t,l?Hh:Dh,l);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function Dh(e){this.l[e.type+!1](ce.event?ce.event(e):e)}function Hh(e){this.l[e.type+!0](ce.event?ce.event(e):e)}function iu(e,t,r,s,o,l,c,u,d){var p,h,v,m,y,w,k,S,L,U,B,R=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(d=r.__h,u=t.__e=r.__e,t.__h=null,l=[u]),(p=ce.__b)&&p(t);try{e:if(typeof R=="function"){if(S=t.props,L=(p=R.contextType)&&s[p.__c],U=p?L?L.props.value:p.__:s,r.__c?k=(h=t.__c=r.__c).__=h.__E:("prototype"in R&&R.prototype.render?t.__c=h=new R(S,U):(t.__c=h=new En(S,U),h.constructor=R,h.render=y7),L&&L.sub(h),h.props=S,h.state||(h.state={}),h.context=U,h.__n=s,v=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),R.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=br({},h.__s)),br(h.__s,R.getDerivedStateFromProps(S,h.__s))),m=h.props,y=h.state,v)R.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(R.getDerivedStateFromProps==null&&S!==m&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(S,U),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(S,h.__s,U)===!1||t.__v===r.__v){h.props=S,h.state=h.__s,t.__v!==r.__v&&(h.__d=!1),h.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(E){E&&(E.__=t)}),h.__h.length&&c.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(S,h.__s,U),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(m,y,w)})}h.context=U,h.props=S,h.state=h.__s,(p=ce.__r)&&p(t),h.__d=!1,h.__v=t,h.__P=e,p=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(s=br(br({},s),h.getChildContext())),v||h.getSnapshotBeforeUpdate==null||(w=h.getSnapshotBeforeUpdate(m,y)),B=p!=null&&p.type===ki&&p.key==null?p.props.children:p,Op(e,Array.isArray(B)?B:[B],t,r,s,o,l,c,u,d),h.base=t.__e,t.__h=null,h.__h.length&&c.push(h),k&&(h.__E=h.__=null),h.__e=!1}else l==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=b7(r.__e,t,r,s,o,l,c,d);(p=ce.diffed)&&p(t)}catch(E){t.__v=null,(d||l!=null)&&(t.__e=u,t.__h=!!d,l[l.indexOf(u)]=null),ce.__e(E,t,r)}}function Bp(e,t){ce.__c&&ce.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(s){s.call(r)})}catch(s){ce.__e(s,r.__v)}})}function b7(e,t,r,s,o,l,c,u){var d,p,h,v=r.props,m=t.props,y=t.type,w=0;if(y==="svg"&&(o=!0),l!=null){for(;w<l.length;w++)if((d=l[w])&&"setAttribute"in d==!!y&&(y?d.localName===y:d.nodeType===3)){e=d,l[w]=null;break}}if(e==null){if(y===null)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,m.is&&m),l=null,u=!1}if(y===null)v===m||u&&e.data===m||(e.data=m);else{if(l=l&&_a.call(e.childNodes),p=(v=r.props||Qo).dangerouslySetInnerHTML,h=m.dangerouslySetInnerHTML,!u){if(l!=null)for(v={},w=0;w<e.attributes.length;w++)v[e.attributes[w].name]=e.attributes[w].value;(h||p)&&(h&&(p&&h.__html==p.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(m7(e,m,v,o,u),h)t.__k=[];else if(w=t.props.children,Op(e,Array.isArray(w)?w:[w],t,r,s,o&&y!=="foreignObject",l,c,l?l[0]:r.__k&&Ci(r,0),u),l!=null)for(w=l.length;w--;)l[w]!=null&&Rp(l[w]);u||("value"in m&&(w=m.value)!==void 0&&(w!==v.value||w!==e.value||y==="progress"&&!w)&&Yo(e,"value",w,v.value,!1),"checked"in m&&(w=m.checked)!==void 0&&w!==e.checked&&Yo(e,"checked",w,v.checked,!1))}return e}function Up(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(s){ce.__e(s,r)}}function Dp(e,t,r){var s,o;if(ce.unmount&&ce.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||Up(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(l){ce.__e(l,t)}s.base=s.__P=null}if(s=e.__k)for(o=0;o<s.length;o++)s[o]&&Dp(s[o],t,typeof e.type!="function");r||e.__e==null||Rp(e.__e),e.__e=e.__d=void 0}function y7(e,t,r){return this.constructor(e,r)}function Hp(e,t,r){var s,o,l;ce.__&&ce.__(e,t),o=(s=typeof r=="function")?null:r&&r.__k||t.__k,l=[],iu(t,e=(!s&&r||t).__k=mc(ki,null,[e]),o||Qo,Qo,t.ownerSVGElement!==void 0,!s&&r?[r]:o?null:t.firstChild?_a.call(t.childNodes):null,l,!s&&r?r:o?o.__e:t.firstChild,s),Bp(l,e)}_a=Ip.slice,ce={__e:function(e,t){for(var r,s,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(e)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),o=r.__d),o)return r.__E=r}catch(l){e=l}throw e}},Tp=0,En.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=br({},this.state),typeof e=="function"&&(e=e(br({},r),this.props)),e&&br(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),Bh(this))},En.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Bh(this))},En.prototype.render=ki,hs=[],Ap=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Zo.__r=0;var _7=0;function N(e,t,r,s,o){var l,c,u={};for(c in t)c=="ref"?l=t[c]:u[c]=t[c];var d={type:e,props:u,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--_7,__source:s,__self:o};if(typeof e=="function"&&(l=e.defaultProps))for(c in l)u[c]===void 0&&(u[c]=l[c]);return ce.vnode&&ce.vnode(d),d}function w7(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function $7(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var $r={set:w7,get:$7};const Xl=new Map,x7=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function k7(){for(const{v:e,emoji:t}of x7)if(Fp(t))return e}function C7(){return!Fp("🇨🇦")}function Fp(e){if(Xl.has(e))return Xl.get(e);const t=S7(e);return Xl.set(e,t),t}const S7=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,r=20,s=Math.floor(t/2);return e.font=s+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=r*2,e.canvas.height=t,o=>{e.clearRect(0,0,r*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,r,22);const l=e.getImageData(0,0,r,t).data,c=l.length;let u=0;for(;u<c&&!l[u+3];u+=4);if(u>=c)return!1;const d=r+u/4%r,p=Math.floor(u/4/r),h=e.getImageData(d,p,1,1).data;return!(l[u]!==h[0]||l[u+2]!==h[2]||e.measureText(o).width>=r)}})();var Fh={latestVersion:k7,noCountryFlags:C7};const bc=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let yt=null;function E7(e){yt||(yt=$r.get("frequently")||{});const t=e.id||e;t&&(yt[t]||(yt[t]=0),yt[t]+=1,$r.set("last",t),$r.set("frequently",yt))}function T7({maxFrequentRows:e,perLine:t}){if(!e)return[];yt||(yt=$r.get("frequently"));let r=[];if(!yt){yt={};for(let l in bc.slice(0,t)){const c=bc[l];yt[c]=t-l,r.push(c)}return r}const s=e*t,o=$r.get("last");for(let l in yt)r.push(l);if(r.sort((l,c)=>{const u=yt[c],d=yt[l];return u==d?l.localeCompare(c):u-d}),r.length>s){const l=r.slice(s);r=r.slice(0,s);for(let c of l)c!=o&&delete yt[c];o&&r.indexOf(o)==-1&&(delete yt[r[r.length-1]],r.splice(-1,1,o)),$r.set("frequently",yt)}return r}var jp={add:E7,get:T7,DEFAULTS:bc},zp={};zp=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var Qn={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let $t=null,ke=null;const Yl={};async function jh(e){if(Yl[e])return Yl[e];const r=await(await fetch(e)).json();return Yl[e]=r,r}let Jl=null,Np=null,Wp=!1;function wa(e,{caller:t}={}){return Jl||(Jl=new Promise(r=>{Np=r})),e?A7(e):t&&!Wp&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),Jl}async function A7(e){Wp=!0;let{emojiVersion:t,set:r,locale:s}=e;if(t||(t=Qn.emojiVersion.value),r||(r=Qn.set.value),s||(s=Qn.locale.value),ke)ke.categories=ke.categories.filter(d=>!d.name);else{ke=(typeof e.data=="function"?await e.data():e.data)||await jh(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${r}.json`),ke.emoticons={},ke.natives={},ke.categories.unshift({id:"frequent",emojis:[]});for(const d in ke.aliases){const p=ke.aliases[d],h=ke.emojis[p];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}ke.originalCategories=ke.categories}if($t=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(s=="en"?Ep(zp):await jh(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${s}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const p=e.custom[d],h=e.custom[d-1];if(!(!p.emojis||!p.emojis.length)){p.id||(p.id=`custom_${d+1}`),p.name||(p.name=$t.categories.custom),h&&!p.icon&&(p.target=h.target||h),ke.categories.push(p);for(const v of p.emojis)ke.emojis[v.id]=v}}e.categories&&(ke.categories=ke.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,p)=>{const h=e.categories.indexOf(d.id),v=e.categories.indexOf(p.id);return h-v}));let o=null,l=null;r=="native"&&(o=Fh.latestVersion(),l=e.noCountryFlags||Fh.noCountryFlags());let c=ke.categories.length,u=!1;for(;c--;){const d=ke.categories[c];if(d.id=="frequent"){let{maxFrequentRows:v,perLine:m}=e;v=v>=0?v:Qn.maxFrequentRows.value,m||(m=Qn.perLine.value),d.emojis=jp.get({maxFrequentRows:v,perLine:m})}if(!d.emojis||!d.emojis.length){ke.categories.splice(c,1);continue}const{categoryIcons:p}=e;if(p){const v=p[d.id];v&&!d.icon&&(d.icon=v)}let h=d.emojis.length;for(;h--;){const v=d.emojis[h],m=v.id?v:ke.emojis[v],y=()=>{d.emojis.splice(h,1)};if(!m||e.exceptEmojis&&e.exceptEmojis.includes(m.id)){y();continue}if(o&&m.version>o){y();continue}if(l&&d.id=="flags"&&!P7.includes(m.id)){y();continue}if(!m.search){if(u=!0,m.search=","+[[m.id,!1],[m.name,!0],[m.keywords,!1],[m.emoticons,!1]].map(([k,S])=>{if(k)return(Array.isArray(k)?k:[k]).map(L=>(S?L.split(/[-|_|\s]+/):[L]).map(U=>U.toLowerCase())).flat()}).flat().filter(k=>k&&k.trim()).join(","),m.emoticons)for(const k of m.emoticons)ke.emoticons[k]||(ke.emoticons[k]=m.id);let w=0;for(const k of m.skins){if(!k)continue;w++;const{native:S}=k;S&&(ke.natives[S]=m.id,m.search+=`,${S}`);const L=w==1?"":`:skin-tone-${w}:`;k.shortcodes=`:${m.id}:${L}`}}}}u&&gi.reset(),Np()}function qp(e,t,r){e||(e={});const s={};for(let o in t)s[o]=Kp(o,e,t,r);return s}function Kp(e,t,r,s){const o=r[e];let l=s&&s.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(l!=null&&o.value&&typeof o.value!=typeof l&&(typeof o.value=="boolean"?l=l!="false":l=o.value.constructor(l)),o.transform&&l&&(l=o.transform(l)),(l==null||o.choices&&o.choices.indexOf(l)==-1)&&(l=o.value)),l}const I7=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let yc=null;function R7(e){return e.id?e:ke.emojis[e]||ke.emojis[ke.aliases[e]]||ke.emojis[ke.natives[e]]}function L7(){yc=null}async function O7(e,{maxResults:t,caller:r}={}){if(!e||!e.trim().length)return null;t||(t=90),await wa(null,{caller:r||"SearchIndex.search"});const s=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,p)=>u.trim()&&p.indexOf(u)==d);if(!s.length)return;let o=yc||(yc=Object.values(ke.emojis)),l,c;for(const u of s){if(!o.length)break;l=[],c={};for(const d of o){if(!d.search)continue;const p=d.search.indexOf(`,${u}`);p!=-1&&(l.push(d),c[d.id]||(c[d.id]=0),c[d.id]+=d.id==u?0:p+1)}o=l}return l.length<2||(l.sort((u,d)=>{const p=c[u.id],h=c[d.id];return p==h?u.id.localeCompare(d.id):p-h}),l.length>t&&(l=l.slice(0,t))),l}var gi={search:O7,get:R7,reset:L7,SHORTCODES_REGEX:I7};const P7=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function M7(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((r,s)=>r==t[s])}async function B7(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function U7(e,{skinIndex:t=0}={}){const r=e.skins[t]||(()=>(t=0,e.skins[t]))(),s={id:e.id,name:e.name,native:r.native,unified:r.unified,keywords:e.keywords,shortcodes:r.shortcodes||e.shortcodes};return e.skins.length>1&&(s.skin=t+1),r.src&&(s.src=r.src),e.aliases&&e.aliases.length&&(s.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(s.emoticons=e.emoticons),s}const D7={activity:{outline:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:N("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:N("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:N("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:N("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:N("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:N("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:N("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[N("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),N("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:N("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[N("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),N("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:N("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[N("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),N("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:N("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[N("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),N("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:N("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[N("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),N("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:N("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:N("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:N("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},H7={loupe:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:N("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:N("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:N("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Jo={categories:D7,search:H7};function _c(e){let{id:t,skin:r,emoji:s}=e;if(e.shortcodes){const u=e.shortcodes.match(gi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(r=u[2]))}if(s||(s=gi.get(t||e.native)),!s)return e.fallback;const o=s.skins[r-1]||s.skins[0],l=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),c=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return N("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:l?N("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:l}):e.set=="native"?N("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):N("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${c})`,backgroundSize:`${100*ke.sheet.cols}% ${100*ke.sheet.rows}%`,backgroundPosition:`${100/(ke.sheet.cols-1)*o.x}% ${100/(ke.sheet.rows-1)*o.y}%`}})})}const F7=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Gp extends F7{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let r in t)this.attributeChangedCallback(r,null,t[r])}attributeChangedCallback(t,r,s){if(!this.component)return;const o=Kp(t,{[t]:s},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let r=null;const s=t.parent||(r=t.ref&&t.ref.current);r&&(r.innerHTML=""),s&&s.appendChild(this)}}}class j7 extends Gp{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const r=document.createElement("style");r.textContent=t,this.shadowRoot.insertBefore(r,this.shadowRoot.firstChild)}constructor(t,{styles:r}={}){super(t),this.setShadow(),this.injectStyles(r)}}var Vp={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:Qn.set,skin:Qn.skin};class Qp extends Gp{async connectedCallback(){const t=qp(this.props,Vp,this);t.element=this,t.ref=r=>{this.component=r},await wa(),!this.disconnected&&Hp(N(_c,{...t}),this)}constructor(t){super(t)}}mn(Qp,"Props",Vp);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Qp);var zh,wc=[],Nh=ce.__b,Wh=ce.__r,qh=ce.diffed,Kh=ce.__c,Gh=ce.unmount;function z7(){var e;for(wc.sort(function(t,r){return t.__v.__b-r.__v.__b});e=wc.pop();)if(e.__P)try{e.__H.__h.forEach(Do),e.__H.__h.forEach($c),e.__H.__h=[]}catch(t){e.__H.__h=[],ce.__e(t,e.__v)}}ce.__b=function(e){Nh&&Nh(e)},ce.__r=function(e){Wh&&Wh(e);var t=e.__c.__H;t&&(t.__h.forEach(Do),t.__h.forEach($c),t.__h=[])},ce.diffed=function(e){qh&&qh(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(wc.push(t)!==1&&zh===ce.requestAnimationFrame||((zh=ce.requestAnimationFrame)||function(r){var s,o=function(){clearTimeout(l),Vh&&cancelAnimationFrame(s),setTimeout(r)},l=setTimeout(o,100);Vh&&(s=requestAnimationFrame(o))})(z7))},ce.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Do),r.__h=r.__h.filter(function(s){return!s.__||$c(s)})}catch(s){t.some(function(o){o.__h&&(o.__h=[])}),t=[],ce.__e(s,r.__v)}}),Kh&&Kh(e,t)},ce.unmount=function(e){Gh&&Gh(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(s){try{Do(s)}catch(o){t=o}}),t&&ce.__e(t,r.__v))};var Vh=typeof requestAnimationFrame=="function";function Do(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function $c(e){e.__c=e.__()}function N7(e,t){for(var r in t)e[r]=t[r];return e}function Qh(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var s in t)if(s!=="__source"&&e[s]!==t[s])return!0;return!1}function ea(e){this.props=e}(ea.prototype=new En).isPureReactComponent=!0,ea.prototype.shouldComponentUpdate=function(e,t){return Qh(this.props,e)||Qh(this.state,t)};var Zh=ce.__b;ce.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Zh&&Zh(e)};var W7=ce.__e;ce.__e=function(e,t,r){if(e.then){for(var s,o=t;o=o.__;)if((s=o.__c)&&s.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),s.__c(e,t)}W7(e,t,r)};var Xh=ce.unmount;function ec(){this.__u=0,this.t=null,this.__b=null}function Zp(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Ro(){this.u=null,this.o=null}ce.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Xh&&Xh(e)},(ec.prototype=new En).__c=function(e,t){var r=t.__c,s=this;s.t==null&&(s.t=[]),s.t.push(r);var o=Zp(s.__v),l=!1,c=function(){l||(l=!0,r.__R=null,o?o(u):u())};r.__R=c;var u=function(){if(!--s.__u){if(s.state.__e){var p=s.state.__e;s.__v.__k[0]=function v(m,y,w){return m&&(m.__v=null,m.__k=m.__k&&m.__k.map(function(k){return v(k,y,w)}),m.__c&&m.__c.__P===y&&(m.__e&&w.insertBefore(m.__e,m.__d),m.__c.__e=!0,m.__c.__P=w)),m}(p,p.__c.__P,p.__c.__O)}var h;for(s.setState({__e:s.__b=null});h=s.t.pop();)h.forceUpdate()}},d=t.__h===!0;s.__u++||d||s.setState({__e:s.__b=s.__v.__k[0]}),e.then(c,c)},ec.prototype.componentWillUnmount=function(){this.t=[]},ec.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),s=this.__v.__k[0].__c;this.__v.__k[0]=function l(c,u,d){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(p){typeof p.__c=="function"&&p.__c()}),c.__c.__H=null),(c=N7({},c)).__c!=null&&(c.__c.__P===d&&(c.__c.__P=u),c.__c=null),c.__k=c.__k&&c.__k.map(function(p){return l(p,u,d)})),c}(this.__b,r,s.__O=s.__P)}this.__b=null}var o=t.__e&&mc(ki,null,e.fallback);return o&&(o.__h=null),[mc(ki,null,t.__e?null:e.children),o]};var Yh=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(Ro.prototype=new En).__e=function(e){var t=this,r=Zp(t.__v),s=t.o.get(e);return s[0]++,function(o){var l=function(){t.props.revealOrder?(s.push(o),Yh(t,e,s)):o()};r?r(l):l()}},Ro.prototype.render=function(e){this.u=null,this.o=new Map;var t=Xo(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},Ro.prototype.componentDidUpdate=Ro.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){Yh(e,r,t)})};var q7=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,K7=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,G7=typeof document<"u",V7=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};En.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(En.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Jh=ce.event;function Q7(){}function Z7(){return this.cancelBubble}function X7(){return this.defaultPrevented}ce.event=function(e){return Jh&&(e=Jh(e)),e.persist=Q7,e.isPropagationStopped=Z7,e.isDefaultPrevented=X7,e.nativeEvent=e};var e0={configurable:!0,get:function(){return this.class}},t0=ce.vnode;ce.vnode=function(e){var t=e.type,r=e.props,s=r;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var l in s={},r){var c=r[l];G7&&l==="children"&&t==="noscript"||l==="value"&&"defaultValue"in r&&c==null||(l==="defaultValue"&&"value"in r&&r.value==null?l="value":l==="download"&&c===!0?c="":/ondoubleclick/i.test(l)?l="ondblclick":/^onchange(textarea|input)/i.test(l+t)&&!V7(r.type)?l="oninput":/^onfocus$/i.test(l)?l="onfocusin":/^onblur$/i.test(l)?l="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(l)?l=l.toLowerCase():o&&K7.test(l)?l=l.replace(/[A-Z0-9]/,"-$&").toLowerCase():c===null&&(c=void 0),s[l]=c)}t=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=Xo(r.children).forEach(function(u){u.props.selected=s.value.indexOf(u.props.value)!=-1})),t=="select"&&s.defaultValue!=null&&(s.value=Xo(r.children).forEach(function(u){u.props.selected=s.multiple?s.defaultValue.indexOf(u.props.value)!=-1:s.defaultValue==u.props.value})),e.props=s,r.class!=r.className&&(e0.enumerable="className"in r,r.className!=null&&(s.class=r.className),Object.defineProperty(s,"className",e0))}e.$$typeof=q7,t0&&t0(e)};var n0=ce.__r;ce.__r=function(e){n0&&n0(e),e.__c};const Y7={light:"outline",dark:"solid"};class J7 extends ea{renderIcon(t){const{icon:r}=t;if(r){if(r.svg)return N("span",{class:"flex",dangerouslySetInnerHTML:{__html:r.svg}});if(r.src)return N("img",{src:r.src})}const s=Jo.categories[t.id]||Jo.categories.custom,o=this.props.icons=="auto"?Y7[this.props.theme]:this.props.icons;return s[o]||s}render(){let t=null;return N("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:N("div",{class:"flex relative",children:[this.categories.map((r,s)=>{const o=r.name||$t.categories[r.id],l=!this.props.unfocused&&r.id==this.state.categoryId;return l&&(t=s),N("button",{"aria-label":o,"aria-selected":l||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:c=>c.preventDefault(),onClick:()=>{this.props.onClick({category:r,i:s})},children:this.renderIcon(r)})}),N("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=ke.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class e9 extends ea{shouldComponentUpdate(t){for(let r in t)if(r!="children"&&t[r]!=this.props[r])return!0;return!1}render(){return this.props.children}}const Lo={rowsPerRender:10};class t9 extends En{getInitialState(t=this.props){return{skin:$r.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=$t.rtl?"rtl":"ltr",this.refs={menu:Kn(),navigation:Kn(),scroll:Kn(),search:Kn(),searchInput:Kn(),skinToneButton:Kn(),skinToneRadio:Kn()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const r in t)this.nextState[r]=t[r];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let r=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(r=!0);delete this.nextState;const s=this.getInitialState();if(r)return this.reset(s);this.setState(s)})}componentWillUnmount(){this.unregister()}async reset(t={}){await wa(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const r of this.observers)t.includes(r)||r.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=ke;this.refs.categories=new Map;const r=ke.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=r&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=r,this.grid=[],this.grid.setsize=0;const s=(o,l)=>{const c=[];c.__categoryId=l.id,c.__index=o.length,this.grid.push(c);const u=this.grid.length-1,d=u%Lo.rowsPerRender?{}:Kn();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),c};for(let o of t){const l=[];let c=s(l,o);for(let u of o.emojis)c.length==this.getPerLine()&&(c=s(l,o)),this.grid.setsize+=1,c.push(u);this.refs.categories.set(o.id,{root:Kn(),rows:l})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:r,emojiButtonSize:s}=t,o=()=>{const{width:c}=r.getBoundingClientRect();return Math.floor(c/s)},l=new ResizeObserver(()=>{this.unobserve({except:l}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return l.observe(r),this.observers.push(l),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,r]){const s=this.state.searchResults||this.grid,o=s[t]&&s[t][r];if(o)return gi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const r=new Map,s=c=>{c!=t.state.categoryId&&t.setState({categoryId:c})},o={root:this.refs.scroll.current,threshold:[0,1]},l=new IntersectionObserver(c=>{for(const d of c){const p=d.target.dataset.id;r.set(p,d.intersectionRatio)}const u=[...r];for(const[d,p]of u)if(p){s(d);break}},o);for(const{root:c}of this.refs.categories.values())l.observe(c.current);this.observers.push(l)}observeRows(){const t={...this.state.visibleRows},r=new IntersectionObserver(s=>{for(const o of s){const l=parseInt(o.target.dataset.index);o.isIntersecting?t[l]=!0:delete t[l]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Lo.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Lo.rowsPerRender}px`});for(const{rows:s}of this.refs.categories.values())for(const o of s)o.current&&r.observe(o.current);this.observers.push(r)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:r,left:s,right:o,up:l,down:c}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,p]=this.state.pos;const h=(()=>{if(d==0&&p==0&&!t.repeat&&(s||l))return null;if(d==-1)return!t.repeat&&(o||c)&&r.selectionStart==r.value.length?[0,0]:null;if(s||o){let v=u[d];const m=s?-1:1;if(p+=m,!v[p]){if(d+=m,v=u[d],!v)return d=s?0:u.length-1,p=s?0:u[d].length-1,[d,p];p=s?v.length-1:0}return[d,p]}if(l||c){d+=l?-1:1;const v=u[d];return v?(v[p]||(p=v.length-1),[d,p]):(d=l?0:u.length-1,p=l?0:u[d].length-1,[d,p])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:r}){const s=this.state.searchResults||this.grid;if(!s.length)return;const o=this.refs.scroll.current,l=o.getBoundingClientRect();let c=0;if(r>=0&&(t=s[r].__categoryId),t&&(c=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(l.top-o.scrollTop)+1),r>=0)if(!r)c=0;else{const u=s[r].__index,d=c+u*this.props.emojiButtonSize,p=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)c=d;else if(p>o.scrollTop+l.height)c=p-l.height;else return}this.ignoreMouse(),o.scrollTop=c}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:r,pos:s}){if(this.props.onEmojiSelect&&(!r&&s&&(r=this.getEmojiByPos(s)),r)){const o=U7(r,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&jp.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),$r.set("skin",t)}renderNav(){return N(J7,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),r=this.state.searchResults&&!this.state.searchResults.length;return N("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[N("div",{class:"flex flex-middle flex-grow",children:[N("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:N(_c,{emoji:t,id:r?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),N("div",{class:`margin-${this.dir[0]}`,children:t||r?N("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[N("div",{class:"preview-title ellipsis",children:t?t.name:$t.search_no_results_1}),N("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:$t.search_no_results_2})]}):N("div",{class:"preview-placeholder color-c",children:$t.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:r,posinset:s,grid:o}){const l=this.props.emojiButtonSize,c=this.state.tempSkin||this.state.skin,d=(t.skins[c-1]||t.skins[0]).native,p=M7(this.state.pos,r),h=r.concat(t.id).join("");return N(e9,{selected:p,skin:c,size:l,children:N("button",{"aria-label":d,"aria-selected":p||void 0,"aria-posinset":s,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:v=>this.handleEmojiClick({e:v,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(r),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[N("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(s-1)%this.props.emojiButtonColors.length]:void 0}}),N(_c,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:c,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return N("div",{children:[N("div",{class:"spacer"}),N("div",{class:"flex flex-middle",children:[N("div",{class:"search relative flex-grow",children:[N("input",{type:"search",ref:this.refs.searchInput,placeholder:$t.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),N("span",{class:"icon loupe flex",children:Jo.search.loupe}),this.state.searchResults&&N("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Jo.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?N("div",{class:"category",ref:this.refs.search,children:[N("div",{class:`sticky padding-small align-${this.dir[0]}`,children:$t.categories.search}),N("div",{children:t.length?t.map((r,s)=>N("div",{class:"flex",children:r.map((o,l)=>this.renderEmojiButton(o,{pos:[s,l],posinset:s*this.props.perLine+l+1,grid:t}))})):N("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&N("a",{onClick:this.props.onAddCustomEmoji,children:$t.add_custom})})})]}):null}renderCategories(){const{categories:t}=ke,r=!!this.state.searchResults,s=this.getPerLine();return N("div",{style:{visibility:r?"hidden":void 0,display:r?"none":void 0,height:"100%"},children:t.map(o=>{const{root:l,rows:c}=this.refs.categories.get(o.id);return N("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:l,children:[N("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||$t.categories[o.id]}),N("div",{class:"relative",style:{height:c.length*this.props.emojiButtonSize},children:c.map((u,d)=>{const p=u.index-u.index%Lo.rowsPerRender,h=this.state.visibleRows[p],v="current"in u?u:void 0;if(!h&&!v)return null;const m=d*s,y=m+s,w=o.emojis.slice(m,y);return w.length<s&&w.push(...new Array(s-w.length)),N("div",{"data-index":u.index,ref:v,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&w.map((k,S)=>{if(!k)return N("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const L=gi.get(k);return this.renderEmojiButton(L,{pos:[u.index,S],posinset:u.posinset+S,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:N("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:N("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":$t.skins.choose,title:$t.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:N("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),r=t?t.name:"";return N("div",{"aria-live":"polite",class:"sr-only",children:r})}renderSkins(){const r=this.refs.skinToneButton.current.getBoundingClientRect(),s=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=s.right-r.right-3:o.left=r.left-s.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=s.bottom-r.top+6:(o.top=r.bottom-s.top+3,o.bottom="auto"),N("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":$t.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(l=>{const c=l+1,u=this.state.skin==c;return N("div",{children:[N("input",{type:"radio",name:"skin-tone",value:c,"aria-label":$t.skins[c],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(c),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(c))}}),N("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(c),onMouseEnter:()=>this.handleSkinMouseOver(c),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[N("span",{class:`skin-tone skin-tone-${c}`}),N("span",{class:"margin-small-lr",children:$t.skins[c]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return N("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&N("div",{class:"padding-lr",children:this.renderSearch()}),N("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:N("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),mn(this,"handleClickOutside",r=>{const{element:s}=this.props;r.target!=s&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(r))}),mn(this,"handleBaseClick",r=>{this.state.showSkins&&(r.target.closest(".menu")||(r.preventDefault(),r.stopImmediatePropagation(),this.closeSkins()))}),mn(this,"handleBaseKeydown",r=>{this.state.showSkins&&r.key=="Escape"&&(r.preventDefault(),r.stopImmediatePropagation(),this.closeSkins())}),mn(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),mn(this,"handleSearchInput",async()=>{const r=this.refs.searchInput.current;if(!r)return;const{value:s}=r,o=await gi.search(s),l=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},l);const c=r.selectionStart==r.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let p of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(p);this.ignoreMouse(),this.setState({searchResults:u,pos:c},l)}),mn(this,"handleSearchKeyDown",r=>{const s=r.currentTarget;switch(r.stopImmediatePropagation(),r.key){case"ArrowLeft":this.navigate({e:r,input:s,left:!0});break;case"ArrowRight":this.navigate({e:r,input:s,right:!0});break;case"ArrowUp":this.navigate({e:r,input:s,up:!0});break;case"ArrowDown":this.navigate({e:r,input:s,down:!0});break;case"Enter":r.preventDefault(),this.handleEmojiClick({e:r,pos:this.state.pos});break;case"Escape":r.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),mn(this,"clearSearch",()=>{const r=this.refs.searchInput.current;r&&(r.value="",r.focus(),this.handleSearchInput())}),mn(this,"handleCategoryClick",({category:r,i:s})=>{this.scrollTo(s==0?{row:-1}:{categoryId:r.id})}),mn(this,"openSkins",r=>{const{currentTarget:s}=r,o=s.getBoundingClientRect();this.setState({showSkins:o},async()=>{await B7(2);const l=this.refs.menu.current;l&&(l.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class su extends j7{async connectedCallback(){const t=qp(this.props,Qn,this);t.element=this,t.ref=r=>{this.component=r},await wa(t),!this.disconnected&&Hp(N(t9,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Ep(Xp)})}}mn(su,"Props",Qn);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",su);var Xp={};Xp=`:host {
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

`;const n9=P('<div><button class="flex items-center"></button><div class="absolute z-20">'),Yp=e=>{let t,r;const[s,o]=be(!1),l=Mw(()=>e.children),c=m=>{const y=m.target;y!=null&&!r?.contains(y)&&o(!1)},u=()=>{document.addEventListener("mousedown",c)},d=()=>{document.removeEventListener("mousedown",c)},p=()=>o(!1),h=()=>o(m=>!m),v=()=>h();return xr(()=>{s()?(u(),e.onOpen?.()):(d(),e.onClose?.())}),xr(ia(l,()=>{if(t==null||r==null)return;const m=t?.getBoundingClientRect(),y=r?.getBoundingClientRect();let{top:w,left:k}=m;e.position==="left"?k-=m.width:e.position==="right"?k+=m.width:e.position==="top"?(w-=m.height,k-=m.left+m.width/2):(w+=m.height,k+=m.width/2),w=Math.min(w,window.innerHeight-y.height),k=Math.min(k,window.innerWidth-y.width),console.log(y),r.style.left=`${k}px`,r.style.top=`${w}px`})),wn(()=>{e.ref?.({close:p})}),Cr(()=>d()),(()=>{const m=n9(),y=m.firstChild,w=y.nextSibling;y.$$click=v;const k=t;typeof k=="function"?_n(k,y):t=y,I(y,()=>e.button);const S=r;return typeof S=="function"?_n(S,w):r=w,I(w,l),Ee(L=>{const U=!s(),B=!!s();return U!==L._v$&&w.classList.toggle("hidden",L._v$=U),B!==L._v$2&&w.classList.toggle("block",L._v$2=B),L},{_v$:void 0,_v$2:void 0}),m})()};st(["click"]);const r9=e=>{let t;const[r,s]=be(void 0);return $(Yp,{ref:c=>{t=c},position:"bottom",get button(){return e.children},onOpen:()=>{const c=new su({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!0,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native),t?.close()}});s(c)},onClose:()=>{s(void 0)},get children(){return r()}})},i9=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),s9=(e={})=>(()=>{const t=i9();return Qe(t,e,!0,!0),t})(),o9=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),ys=(e={})=>(()=>{const t=o9();return Qe(t,e,!0,!0),t})(),a9=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),l9=(e={})=>(()=>{const t=a9();return Qe(t,e,!0,!0),t})(),c9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],Jp=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],u9=[...Jp,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],f9=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],d9=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},Mi=()=>({id:d9(),width:"medium"}),eg=e=>({...Mi(),columnType:"Following",...e}),tg=e=>({...Mi(),columnType:"Notification",...e}),h9=e=>({...Mi(),columnType:"Relays",...e}),ng=()=>h9({name:"日本語",relayUrls:Jp,contentFilter:{filterType:"Regex",regex:"[\\p{scx=Hiragana}\\p{scx=Katakana}]",flag:"u"}}),rg=e=>({...Mi(),columnType:"Posts",...e}),ig=e=>({...Mi(),columnType:"Reactions",...e}),ou=e=>({...Mi(),columnType:"Search",...e}),p9=()=>{const e=[...c9];return window.navigator.language.includes("ja")&&e.push(...u9),e},sg=()=>({relayUrls:p9(),columns:[],dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),g9=e=>JSON.stringify(e),v9=e=>({...sg(),...JSON.parse(e)}),m9=zw(()=>window.localStorage,g9,v9),[Oo,gn]=Nw("RabbitConfig",sg(),m9),He=()=>{const e=y=>{gn("relayUrls",w=>yr([...w,y]))},t=y=>{gn("relayUrls",w=>w.filter(k=>k!==y))},r=y=>{gn("mutedPubkeys",w=>yr([...w,y]))},s=y=>{gn("mutedPubkeys",w=>w.filter(k=>k!==y))},o=y=>{gn("mutedKeywords",w=>yr([...w,y]))},l=y=>{gn("mutedKeywords",w=>w.filter(k=>k!==y))},c=y=>{gn("columns",w=>{const k=w.findIndex(S=>S.id===y.id);if(k>=0){const S=[...w];return S.splice(k,1,y),S}return[...w,y]})},u=(y,w)=>{gn("columns",k=>{const S=w-1,L=Math.max(Math.min(S,k.length),0),U=k.findIndex(E=>E.id===y);if(U<0||L===U)return k;console.log(U,L);const B=[...k],[R]=B.splice(U,1);return B.splice(L,0,R),B})},d=y=>{gn("columns",w=>w.filter(k=>k.id!==y))},p=y=>Oo.mutedPubkeys.includes(y),h=y=>y.kind===ft.Text?Oo.mutedKeywords.some(w=>y.content.includes(w)):!1;return{config:()=>Oo,setConfig:gn,addRelay:e,removeRelay:t,addMutedPubkey:r,removeMutedPubkey:s,addMutedKeyword:o,removeMutedKeyword:l,saveColumn:c,moveColumn:u,removeColumn:d,isPubkeyMuted:p,shouldMuteEvent:y=>p(y.pubkey)||h(y),initializeColumns:({pubkey:y})=>{if((Oo.columns?.length??0)>0)return;const w=[eg({width:"widest",pubkey:y}),tg({pubkey:y}),rg({name:"自分の投稿",pubkey:y}),ig({name:"自分のリアクション",pubkey:y})];navigator.language.includes("ja")&&w.splice(2,0,ng()),gn("columns",()=>[...w])}}},Tn=e=>({get rawEvent(){return e},get id(){return e.id},get pubkey(){return e.pubkey},get createdAt(){return e.created_at},get content(){return e.content},createdAtAsDate(){return new Date(e.created_at*1e3)},taggedUsers(){const t=new Set;return e.tags.forEach(([r,s])=>{r==="p"&&t.add(s)}),Array.from(t)},taggedEvents(){const t=e.tags.map((s,o)=>[s,o]).filter(([[s]])=>s==="e"),r=(s,o)=>{if(e.kind===1)return s==="root"||s==="reply"||s==="mention"?s:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention"};return t.map(([[,s,o,l],c],u)=>({id:s,relayUrl:o,marker:r(l,u),index:c}))},replyingToEvent(){return this.taggedEvents().find(({marker:t})=>t==="reply")},rootEvent(){return this.taggedEvents().find(({marker:t})=>t==="root")},mentionedEvents(){return this.taggedEvents().filter(({marker:t})=>t==="mention")},mentionedPubkeys(){return yr(e.tags.filter(([t])=>t==="p").map(t=>t[1]))},mentionedPubkeysWithoutAuthor(){return this.mentionedPubkeys().filter(t=>t!==e.pubkey)},contentWarning(){const t=e.tags.find(([s])=>s==="content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}},containsEventMention(t){const r=e.tags.findIndex(([s,o])=>s==="e"&&o===t);return r<0?!1:this.containsEventMentionIndex(r)},containsEventMentionIndex(t){return t<0||t>=e.tags.length?!1:e.content.includes(`#[${t}]`)}}),b9=()=>{let e,t;const r=new Promise((s,o)=>{e=s,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:r,resolve:e,reject:t}},y9=e=>{const t=ze(e),r=ze(()=>t().batchSize??100),s=ze(()=>t().interval??2e3),[o,l]=be(0),[c,u]=be([]);let d;const p=()=>{const{executor:k}=t(),S=c();S.length>0&&(u([]),k(S)),d!=null&&clearTimeout(d),d=void 0},h=()=>{const k=o();return l(S=>S+1),k},v=()=>{d==null&&(d=setTimeout(()=>{p()},s()))},m=k=>{c().length<r()?u(S=>[...S,k]):(p(),u([k]))},y=k=>{u(S=>S.filter(L=>L.id!==k))};return{exec:async(k,S)=>{const{promise:L,resolve:U,reject:B}=b9(),R=h();return m({id:R,args:k,resolve:U,reject:B}),v(),S?.addEventListener("abort",()=>{y(R),B(new Error("AbortError"))}),L}}},[_9]=be(new d8),$a=()=>_9,[w9,r0]=vi({activeSubscriptions:0,activeBatchSubscriptions:0}),og=()=>({stats:w9,setActiveSubscriptions:r=>r0("activeSubscriptions",r),setActiveBatchSubscriptions:r=>r0("activeBatchSubscriptions",r)}),Er=(e,t)=>r=>{const s=new Promise((o,l)=>{setTimeout(()=>{const c=t!=null?`TimeoutError: ${t}`:"TimeoutError";l(new Error(c))},e)});return Promise.race([r,s])};let xc=0;const{setActiveBatchSubscriptions:$9}=og();setInterval(()=>{$9(xc)},1e3);const x9={events:[],completed:!0},k9=()=>x9,{exec:Ts}=y9(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,r=new Map,s=new Map,o=new Map,l=new Map,c=new Map;e.forEach(E=>{if(E.args.type==="Profile"){const O=t.get(E.args.pubkey)??[];t.set(E.args.pubkey,[...O,E])}else if(E.args.type==="TextNote"){const O=r.get(E.args.eventId)??[];r.set(E.args.eventId,[...O,E])}else if(E.args.type==="Reactions"){const O=s.get(E.args.mentionedEventId)??[];s.set(E.args.mentionedEventId,[...O,E])}else if(E.args.type==="Reposts"){const O=o.get(E.args.mentionedEventId)??[];o.set(E.args.mentionedEventId,[...O,E])}else if(E.args.type==="ZapReceipts"){const O=l.get(E.args.mentionedEventId)??[];o.set(E.args.mentionedEventId,[...O,E])}else if(E.args.type==="Followings"){const O=c.get(E.args.pubkey)??[];c.set(E.args.pubkey,[...O,E])}});const u=[...t.keys()],d=[...r.keys()],p=[...s.keys()],h=[...o.keys()],v=[...l.keys()],m=[...c.keys()],y=[];if(u.length>0&&y.push({kinds:[ft.Metadata],authors:u}),d.length>0&&y.push({kinds:[ft.Text],ids:d}),p.length>0&&y.push({kinds:[ft.Reaction],"#e":p}),h.length>0&&y.push({kinds:[6],"#e":h}),v.length>0&&y.push({kinds:[9735],"#e":v}),m.length>0&&y.push({kinds:[ft.Contacts],authors:m}),y.length===0)return;const w=new Map,k=(E,O)=>{E.forEach(W=>{const z=w.get(W.id)??be({events:[],completed:!1});w.set(W.id,z);const[ne,V]=z;V(Y=>({...Y,events:[...Y.events,O]})),W.resolve(ne)})},S=()=>{e.forEach(E=>{const O=w.get(E.id);if(O!=null){const W=O[1];W(z=>({...z,completed:!0}))}else E.resolve(k9)})},{config:L,shouldMuteEvent:U}=He(),R=$a()().sub(L().relayUrls,y,{});xc+=1,R.on("event",E=>{if(E.kind===ft.Metadata){const O=t.get(E.pubkey)??[];k(O,E);return}if(!U(E)){if(E.kind===ft.Text){const O=r.get(E.id)??[];k(O,E)}else if(E.kind===ft.Reaction)Tn(E).taggedEvents().forEach(W=>{const z=W.id,ne=s.get(z)??[];k(ne,E)});else if(E.kind===6)Tn(E).taggedEvents().forEach(W=>{const z=W.id,ne=o.get(z)??[];k(ne,E)});else if(E.kind===ft.Zap)Tn(E).taggedEvents().forEach(W=>{const z=W.id,ne=o.get(z)??[];k(ne,E)});else if(E.kind===ft.Contacts){const O=c.get(E.pubkey)??[];k(O,E)}}}),R.on("eose",()=>{S(),R.unsub(),xc-=1})}})),ag=e=>e.length===0?null:e.reduce((t,r)=>t.created_at>r.created_at?t:r),Bi=e=>{const t=Si(),r=ze(e),s=ze(()=>["useProfile",r()]),o=Ei(s,({queryKey:u,signal:d})=>{const[,p]=u;if(p==null)return Promise.resolve(null);const{pubkey:h}=p;if(h.startsWith("npub1"))return Promise.resolve(null);const v=Ts({type:"Profile",pubkey:h},d).then(m=>{const y=()=>{const w=ag(m().events);if(w==null)throw new Error(`profile not found: ${h}`);return w};return sa(m).subscribe(()=>{try{t.setQueryData(u,y())}catch(w){console.error("updating profile error: ",w)}}),y()});return Er(15e3,`useProfile: ${h}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3});return{profile:ze(()=>{if(o.data==null)return null;const{content:u}=o.data;if(u==null||u.length===0)return null;try{return JSON.parse(u)}catch(d){return console.warn("failed to parse profile (kind 0): ",d,u),null}}),invalidateProfile:()=>t.invalidateQueries(s()),query:o}},lg=e=>{const t=ze(e),r=Ei(()=>["useTextNote",t()],({queryKey:o,signal:l})=>{const[,c]=o;if(c==null)return null;const{eventId:u}=c,d=Ts({type:"TextNote",eventId:u},l).then(p=>{const h=p().events[0];if(h==null)throw new Error(`event not found: ${u}`);return h});return Er(15e3,`useTextNote: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>r.data??null,query:r}},C9=e=>{const t=Si(),r=ze(e),s=ze(()=>["useReactions",r()]),o=Ei(s,({queryKey:p,signal:h})=>{const[,v]=p;if(v==null)return[];const{eventId:m}=v,y=Ts({type:"Reactions",mentionedEventId:m},h).then(w=>{const k=()=>w().events;return sa(w).subscribe(()=>{t.setQueryData(p,k())}),k()});return Er(15e3,`useReactions: ${m}`)(y)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>o.data??[];return{reactions:l,reactionsGroupedByContent:()=>{const p=new Map;return l().forEach(h=>{const v=p.get(h.content)??[];v.push(h),p.set(h.content,v)}),p},isReactedBy:p=>l().findIndex(h=>h.pubkey===p)!==-1,invalidateReactions:()=>t.invalidateQueries(s()),query:o}},S9=e=>{const t=Si(),r=ze(e),s=ze(()=>["useReposts",r()]),o=Ei(s,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return[];const{eventId:v}=h,m=Ts({type:"Reposts",mentionedEventId:v},p).then(y=>{const w=()=>y().events;return sa(y).subscribe(()=>{t.setQueryData(d,w())}),w()});return Er(15e3,`useReposts: ${v}`)(m)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>o.data??[];return{reposts:l,isRepostedBy:d=>l().findIndex(p=>p.pubkey===d)!==-1,invalidateReposts:()=>t.invalidateQueries(s()),query:o}},kc=e=>{const t=Si(),r=ze(e),s=()=>["useFollowings",r()],o=Ei(s,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return Promise.resolve(null);const{pubkey:v}=h,m=Ts({type:"Followings",pubkey:v},p).then(y=>{const w=()=>{const k=ag(y().events);if(k==null)throw new Error(`followings not found: ${v}`);return k};return sa(y).subscribe(()=>{try{t.setQueryData(d,w())}catch(k){console.error("updating followings error: ",k)}}),w()});return Er(15e3,`useFollowings: ${v}`)(m)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),l=()=>{if(o.data==null)return[];const d=o.data,p=[];return d.tags.forEach(h=>{const[v,m,y,w]=h;if(!h.every(S=>typeof S=="string")||v!=="p")return;const k={pubkey:m,petname:w};y!=null&&y.length>0&&(k.mainRelayUrl=y),p.push(k)}),p};return{followings:l,followingPubkeys:()=>l().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(s()),query:o}},{npubEncode:E9}=Es,xa=e=>{try{return E9(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},ka=e=>{const{profile:t}=Bi(()=>({pubkey:e.pubkey}));return $(yn,{get fallback(){return xa(e.pubkey)},get children(){return[$(Pe,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),$(Pe,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",ze(()=>t()?.name)]}})]}})},{decode:T9}=Es,A9=/(?:#\[(?<idx>\d+)\])/g,I9=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,R9=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent)1[ac-hj-np-z02-9]+))/gi,L9=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,cg=e=>{const t=[...e.matchAll(A9),...e.matchAll(I9),...e.matchAll(R9),...e.matchAll(L9)].sort((l,c)=>l.index-c.index);let r=0;const s=[],o=l=>{if(l!=null&&l>r){const c=e.slice(r,l),u=s[s.length-1];if(u?.type==="PlainText")u.content+=c;else{const d={type:"PlainText",content:c};s.push(d)}r=l}};return t.forEach(l=>{const{index:c}=l;if(!(c<r)){if(l.groups?.url){o(c);const u={type:"URL",content:l.groups?.url};s.push(u)}else if(l.groups?.idx){const u=parseInt(l.groups.idx,10);o(c),s.push({type:"TagReference",tagIndex:u,content:l[0]})}else if(l.groups?.mention){o(c);try{const u=T9(l.groups.bech32),d={type:"Bech32Entity",content:l[0],data:u,isNIP19:l.groups.nip19==="nostr:"};s.push(d)}catch{console.warn(`failed to parse Bech32 entity (NIP-19): ${l[0]}`),o(c+l[0].length)}}else if(l.groups?.hashtag){o(c);const u=l.groups?.hashtag,d={type:"HashTag",content:l[0],tagName:u};s.push(d)}r=c+l[0].length}}),r<e.length&&o(e.length),s},O9=({tagIndex:e,content:t},r)=>{const s=r.tags[e];if(s==null)return null;const o=s[0];if(o==="p")return{type:"MentionedUser",tagIndex:e,content:t,pubkey:s[1]};if(o==="e"){const l=Tn(r).taggedEvents().find(c=>c.index===e);return{type:"MentionedEvent",tagIndex:e,content:t,eventId:s[1],marker:l?.marker}}return null},P9=e=>Math.floor(+e/1e3),Gn=()=>P9(new Date),M9=(e,t)=>new Promise((r,s)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),r()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),s(o)})}),B9=({notifyPubkeys:e,rootEventId:t,mentionEventIds:r,replyEventId:s,contentWarning:o,hashtags:l,urls:c,tags:u})=>{const d=[],p=e?.map(v=>["p",v])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),r?.forEach(v=>d.push(["e",v,"","mention"])),s!=null&&d.push(["e",s,"","reply"]),l?.forEach(v=>h.push(["t",v])),c?.forEach(v=>h.push(["r",v])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...p,...h]},Ca=()=>{const e=$a(),t=async(d,p)=>{const h={...p};if(h.id=vp(h),window.nostr==null)throw new Error("NIP-07 implementation not found");const v=await window.nostr.signEvent(h);return d.map(async m=>{const w=(await e().ensureRelay(m)).publish(v);return M9(w,m)})};return{publishTextNote:async d=>{const{relayUrls:p,pubkey:h,content:v}=d,m=B9(d),y={kind:1,pubkey:h,created_at:Gn(),tags:m,content:v};return t(p,y)},publishReaction:async({relayUrls:d,pubkey:p,eventId:h,content:v,notifyPubkey:m})=>{const y={kind:7,pubkey:p,created_at:Gn(),tags:[["e",h,""],["p",m]],content:v};return t(d,y)},publishRepost:async({relayUrls:d,pubkey:p,eventId:h,notifyPubkey:v})=>{const m={kind:6,pubkey:p,created_at:Gn(),tags:[["e",h,""],["p",v]],content:""};return t(d,m)},updateProfile:async({relayUrls:d,pubkey:p,profile:h,otherProperties:v})=>{const m={...h,...v},y={kind:ft.Metadata,pubkey:p,created_at:Gn(),tags:[],content:JSON.stringify(m)};return t(d,y)},updateContacts:async({relayUrls:d,pubkey:p,followingPubkeys:h,content:v})=>{const m=h.map(w=>["p",w]),y={kind:ft.Contacts,pubkey:p,created_at:Gn(),tags:m,content:v};return t(d,y)},deleteEvent:async({relayUrls:d,pubkey:p,eventId:h})=>{const v={kind:ft.EventDeletion,pubkey:p,created_at:Gn(),tags:[["e",h,""]],content:""};return t(d,v)}}};let tc=!1;const[Po,U9]=be(void 0),Tr=()=>(wn(()=>{if(Po()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),Po()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Po()==null&&!tc&&(tc=!0,window.nostr.getPublicKey().then(r=>{clearInterval(t),U9(r)}).catch(r=>console.error("failed to obtain public key: ",r)).finally(()=>{tc=!1})),e+=1},200)}),Po),D9=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const r=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!r.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await r.json()}},H9=e=>t=>Promise.allSettled(t.map(r=>e(r))),F9=P("<div>に返信"),j9=P('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),z9=P('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),N9=P('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),W9=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},q9=e=>{const t=[],r=[],s=[],o=[];return e.forEach(l=>{l.type==="HashTag"?t.push(l.tagName):l.type==="URL"?o.push(l.content):l.type==="Bech32Entity"&&(l.data.type==="npub"?r.push(l.data.data):l.data.type==="note"&&s.push(l.data.data))}),{hashtags:t,pubkeyReferences:r,eventReferences:s,urlReferences:o}},K9=e=>{const t=[];return e.forEach(r=>{r.type==="Bech32Entity"&&!r.isNIP19?t.push(`nostr:${r.content}`):t.push(r.content)}),t.join("")},ug=e=>{let t,r;const[s,o]=be(""),[l,c]=be(!1),[u,d]=be(""),p=()=>{o(""),d(""),c(!1)},h=()=>{t?.blur(),p(),e.onClose()},{config:v}=He(),m=Tr(),y=Ca(),w=()=>e.replyTo&&Tn(e.replyTo),k=()=>e.mode??"normal",S=Nr({mutationKey:["publishTextNote"],mutationFn:y.publishTextNote.bind(y),onSuccess:()=>{console.log("succeeded to post"),p(),e.onPost?.()},onError:te=>{console.error("error",te)}}),L=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},U=Nr({mutationKey:["uploadFiles"],mutationFn:te=>H9(D9)(te).then(K=>{K.forEach(re=>{re.status==="fulfilled"?(console.log("succeeded to upload",re),o(de=>`${de} ${re.value.imageUrl}`),L()):console.error("failed to upload",re)})}).catch(K=>console.error(K))}),B=ze(()=>w()?.mentionedPubkeysWithoutAuthor()??[]),R=(te,K)=>e.replyTo==null?K:yr([e.replyTo.pubkey,te,...B(),...K]),E=()=>{if(s().length===0||S.isLoading)return;const te=m();if(te==null){console.error("pubkey is not available");return}const K=cg(s()),{hashtags:re,pubkeyReferences:de,eventReferences:Te,urlReferences:Re}=q9(K),se=K9(K);let Fe={relayUrls:v().relayUrls,pubkey:te,content:se,notifyPubkeys:de,mentionEventIds:Te,hashtags:re,urls:Re};w()!=null&&(Fe={...Fe,notifyPubkeys:R(te,de),rootEventId:w()?.rootEvent()?.id??w()?.id,replyEventId:w()?.id}),l()&&(Fe={...Fe,contentWarning:u()}),S.mutate(Fe),h()},O=te=>{o(te.currentTarget.value),L()},W=te=>{te.preventDefault(),E()},z=te=>{te.key==="Enter"&&(te.ctrlKey||te.metaKey)?E():te.key==="Escape"&&(t?.blur(),h())},ne=te=>{te.preventDefault();const K=[...te.currentTarget.files??[]];U.mutate(K),te.currentTarget.value=""},V=te=>{if(te.preventDefault(),U.isLoading)return;const K=[...te?.dataTransfer?.files??[]];U.mutate(K)},Y=te=>{if(U.isLoading)return;const K=[...te?.clipboardData?.items??[]],re=[];K.forEach(de=>{if(de.kind==="file"){te.preventDefault();const Te=de.getAsFile();if(Te==null)return;re.push(Te)}}),re.length!==0&&U.mutate(re)},H=te=>{te.preventDefault()},Z=()=>s().trim().length===0||S.isLoading||U.isLoading,he=()=>U.isLoading;return wn(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const te=N9(),K=te.firstChild,re=K.firstChild,de=re.nextSibling,Te=de.firstChild,Re=Te.nextSibling,se=Re.nextSibling,Fe=de.nextSibling;I(te,$(oe,{get when(){return B().length>0},get children(){const J=F9(),Je=J.firstChild;return I(J,$(Bt,{get each(){return B()},children:Dt=>[$(ka,{pubkey:Dt})," "]}),Je),J}}),K),K.addEventListener("submit",W),I(K,$(oe,{get when(){return l()},get children(){const J=j9();return J.$$input=Je=>d(Je.currentTarget.value),Ee(()=>J.value=u()),J}}),re),re.addEventListener("paste",Y),re.addEventListener("drop",V),re.addEventListener("dragover",H),re.$$keydown=z,re.$$input=O,_n(J=>{t=J,e.textAreaRef?.(J)},re),I(de,$(oe,{get when(){return k()==="reply"},get children(){const J=z9(),Je=J.firstChild;return Je.$$click=()=>h(),I(Je,$(ys,{})),J}}),Te),Te.$$click=()=>c(J=>!J),Re.$$click=()=>r?.click(),I(Re,$(s9,{})),I(se,$(l9,{})),Fe.addEventListener("change",ne);const un=r;return typeof un=="function"?_n(un,Fe):r=Fe,Ee(J=>{const Je=W9(k()),Dt=!l(),ae=!!l(),et=k()==="normal",ot=k()==="normal",Tt=k()==="reply",Ht=k()==="reply",At=!!he(),Ft=!he(),lt=k()==="normal",It=k()==="normal",vt=k()==="reply",dt=k()==="reply",pe=he(),Ze=!!Z(),Me=!Z(),Be=k()==="normal",Ue=k()==="normal",at=k()==="reply",G=k()==="reply",ht=Z();return Je!==J._v$&&St(re,"placeholder",J._v$=Je),Dt!==J._v$2&&Te.classList.toggle("bg-rose-300",J._v$2=Dt),ae!==J._v$3&&Te.classList.toggle("bg-rose-400",J._v$3=ae),et!==J._v$4&&Te.classList.toggle("h-8",J._v$4=et),ot!==J._v$5&&Te.classList.toggle("w-8",J._v$5=ot),Tt!==J._v$6&&Te.classList.toggle("h-7",J._v$6=Tt),Ht!==J._v$7&&Te.classList.toggle("w-7",J._v$7=Ht),At!==J._v$8&&Re.classList.toggle("bg-primary-disabled",J._v$8=At),Ft!==J._v$9&&Re.classList.toggle("bg-primary",J._v$9=Ft),lt!==J._v$10&&Re.classList.toggle("h-8",J._v$10=lt),It!==J._v$11&&Re.classList.toggle("w-8",J._v$11=It),vt!==J._v$12&&Re.classList.toggle("h-7",J._v$12=vt),dt!==J._v$13&&Re.classList.toggle("w-7",J._v$13=dt),pe!==J._v$14&&(Re.disabled=J._v$14=pe),Ze!==J._v$15&&se.classList.toggle("bg-primary-disabled",J._v$15=Ze),Me!==J._v$16&&se.classList.toggle("bg-primary",J._v$16=Me),Be!==J._v$17&&se.classList.toggle("h-8",J._v$17=Be),Ue!==J._v$18&&se.classList.toggle("w-8",J._v$18=Ue),at!==J._v$19&&se.classList.toggle("h-7",J._v$19=at),G!==J._v$20&&se.classList.toggle("w-7",J._v$20=G),ht!==J._v$21&&(se.disabled=J._v$21=ht),J},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Ee(()=>re.value=s()),te})()};st(["input","keydown","click"]);const G9=P("<div>"),V9=P('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),Q9=P("<br>"),Z9=P("<span>理由: "),X9=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),Y9=e=>{const[t,r]=be(!1);return $(oe,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const s=X9();return s.firstChild,s.$$click=()=>r(!0),I(s,$(oe,{get when(){return e.contentWarning.reason!=null},get children(){return[Q9(),(()=>{const o=Z9();return o.firstChild,I(o,()=>e.contentWarning.reason,null),o})()]}}),null),s})()},get children(){return[(()=>{const s=G9();return I(s,()=>e.children),s})(),$(oe,{get when(){return e.contentWarning.contentWarning},get children(){const s=V9();return s.$$click=()=>r(!1),s}})]}})};st(["click"]);const fg=e=>{const{profile:t}=Bi(()=>({pubkey:e.pubkey}));return $(oe,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${xa(e.pubkey)}`},get children(){return["@",ze(()=>t()?.name??e.pubkey)]}})},J9=P('<a target="_blank" rel="noreferrer noopener">'),au=e=>{const t=()=>{try{const r=new URL(e.href.toString());return r.protocol==="https:"||r.protocol==="http:"}catch{return!1}};return $(oe,{get when(){return t()},get fallback(){return e.href},get children(){const r=J9();return I(r,()=>e.children??e.href),Ee(s=>{const o=e.class,l=e.href;return o!==s._v$&&Bw(r,s._v$=o),l!==s._v$2&&St(r,"href",s._v$2=l),s},{_v$:void 0,_v$2:void 0}),r}})},ek=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp)$/i.test(t.pathname)}catch{return!1}},tk=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const r=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(r!=null){const s=new URL(t),o=r[1];return s.host="i.imgur.com",s.pathname=`${o}l.webp`,s.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const r=new URL(t);return r.host="thumb.gyazo.com",r.pathname=`/thumb/640_w${t.pathname}`,r.toString()}return t.toString()}catch{return e}},nk=P('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),rk=P('<canvas class="inline-block max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),ik=P('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),sk=e=>{let t,r;const[s,o]=be(e.initialHidden),[l,c]=be(!0),u=()=>{c(!0)};return $(oe,{get when(){return!s()},get fallback(){return(()=>{const d=ik();return d.$$click=()=>o(!1),d})()},get children(){return $(au,{class:"my-2 block",get href(){return e.url},get children(){return[(()=>{const d=nk(),p=t;return typeof p=="function"?_n(p,d):t=d,Ee(h=>{const v=!!l(),m=!l(),y=l()?tk(e.url):void 0,w=e.url;return v!==h._v$&&d.classList.toggle("inline-block",h._v$=v),m!==h._v$2&&d.classList.toggle("hidden",h._v$2=m),y!==h._v$3&&St(d,"src",h._v$3=y),w!==h._v$4&&St(d,"alt",h._v$4=w),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})(),(()=>{const d=rk();d.$$click=h=>{h.preventDefault(),u()};const p=r;return typeof p=="function"?_n(p,d):r=d,Ee(h=>{const v=!!l(),m=!!l(),y=!l(),w=!l();return v!==h._v$5&&d.classList.toggle("w-0",h._v$5=v),m!==h._v$6&&d.classList.toggle("h-0",h._v$6=m),y!==h._v$7&&d.classList.toggle("w-auto",h._v$7=y),w!==h._v$8&&d.classList.toggle("h-auto",h._v$8=w),h},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),d})()]}})}})};st(["click"]);const ok=P('<div class="my-1 rounded border p-1">'),ak=e=>$(oe,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return $(nu,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=ok();return I(t,$(_s,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1})),t}}),[lk,fi]=be({type:"Closed"}),Ar=()=>({modalState:lk,setModalState:fi,showProfile:l=>{fi({type:"Profile",pubkey:l})},showProfileEdit:()=>{fi({type:"ProfileEdit"})},showAddColumn:()=>{fi({type:"AddColumn"})},showAbout:()=>{fi({type:"About"})},closeModal:()=>{fi({type:"Closed"})}}),ck=P('<button class="inline text-blue-500 underline">'),nc=e=>{const{showProfile:t}=Ar(),r=()=>{t(e.pubkey)};return(()=>{const s=ck();return s.$$click=r,I(s,$(fg,{get pubkey(){return e.pubkey}})),s})()};st(["click"]);const uk=P("<span>"),fk=e=>(()=>{const t=uk();return I(t,()=>e.plainText.content),t})(),[lu,dk]=be({}),dg=e=>{lu()[e]==null&&dk(t=>({...t,[e]:new MessageChannel}))},hk=e=>{const t=()=>lu()[e().id],r=(o,l)=>{const c={requestId:o,request:l};t().port1.postMessage(c)},s=(o,l=1e3)=>new Promise((c,u)=>{let d;const p=h=>{const v=h.data;v.requestId===o&&(t().port1.removeEventListener("message",p),v.ok?c(v.response):u(v.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",p),u(new Error(`TimeoutError: ${o}`))},l),t().port1.addEventListener("message",p,!1),t().port1.start()});return wn(()=>{const{id:o}=e();dg(o)}),async o=>{const l=Math.random().toString(),c=s(l);return r(l,o),c}},pk=e=>{const t=ze(e),r=()=>lu()[t().id];wn(()=>{const{id:s}=t();dg(s);const o=r().port2,l=c=>{const{requestId:u,request:d}=c.data,p=t().handler(d);(p instanceof Promise?p:Promise.resolve(p)).then(v=>{const m={requestId:u,ok:!0,response:v};o.postMessage(m)}).catch(v=>{const m={requestId:u,ok:!1,error:v};o.postMessage(m)})};o.addEventListener("message",l),o.start(),Cr(()=>{o.removeEventListener("message",l)})})},As=()=>hk(()=>({id:"CommandChannel"})),Cc=e=>{pk(()=>({id:"CommandChannel",handler:t=>{const{commandType:r,handler:s}=e();t.command===r&&s(t)}}))},i0=P('<div class="my-1 rounded border p-1">'),gk=P('<span class="text-blue-500 underline">'),vk=P('<button class="text-blue-500 underline">'),mk=e=>{const{config:t,saveColumn:r}=He(),s=As(),o=()=>Tn(e.event),l=c=>{r(ou({query:c})),s({command:"moveToLastColumn"}).catch(u=>console.error(u))};return $(Bt,{get each(){return cg(e.event.content)},children:c=>{if(c.type==="PlainText")return $(fk,{plainText:c});if(c.type==="TagReference"){const u=O9(c,e.event);if(u==null)return null;if(u.type==="MentionedUser")return $(nc,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?$(ak,{mentionedEvent:u}):$(nu,{get eventId(){return u.eventId}})}return c.type==="Bech32Entity"?c.data.type==="note"&&e.embedding?(()=>{const u=i0();return I(u,$(_s,{get eventId(){return c.data.data},actions:!1,embedding:!1})),u})():c.data.type==="nevent"&&e.embedding?(()=>{const u=i0();return I(u,$(_s,{get eventId(){return c.data.data.id},actions:!1,embedding:!1})),u})():c.data.type==="npub"?$(nc,{get pubkey(){return c.data.data}}):c.data.type==="nprofile"?$(nc,{get pubkey(){return c.data.data.pubkey}}):(()=>{const u=gk();return I(u,()=>c.content),u})():c.type==="HashTag"?(()=>{const u=vk();return u.$$click=()=>l(c.content),I(u,()=>c.content),u})():c.type==="URL"?ek(c.content)?$(sk,{get url(){return c.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):$(au,{class:"text-blue-500 underline",get href(){return c.content}}):(console.error("Not all ParsedTextNoteNodes are covered",c),null)}})};st(["click"]);const hg=Uw(),bk=()=>Dw(hg),yk=()=>{const[e,t]=vi({});return{timelineState:e,setTimeline:r=>t("content",r),clearTimeline:()=>t("content",void 0)}},pg=e=>{const[t,r]=be(new Date);return xr(()=>{const s=setInterval(()=>{r(new Date)},e().interval);Cr(()=>clearInterval(s))}),t},_k=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},s0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,wk=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleDateString()}},$k=e=>{switch(e.kind){case"today":return s0(e.value);case"yesterday":return`昨日 ${s0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},xk=(e,t)=>Math.round(Number(t)-Number(e))/1e3,kk=(e,t)=>{const r=xk(e,t);return r<10?{kind:"now"}:r<60?{kind:"seconds",value:Math.round(r)}:r<3600?{kind:"minutes",value:Math.round(r/60)}:r<86400?{kind:"hours",value:Math.round(r/3600)}:r<604800?{kind:"days",value:Math.round(r/86400)}:{kind:"abs",value:e}},o0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),Ck=e=>new Date(+e-24*60*60*1e3),gg=(e,t,r)=>o0(e,t)?r({kind:"today",value:e}):o0(e,Ck(t))?r({kind:"yesterday",value:e}):r({kind:"abs",value:e}),Sk=(e,t=new Date)=>gg(e,t,wk),Ek=(e,t=new Date)=>gg(e,t,$k),a0=(e,t=new Date,r=_k)=>r(kk(e,t)),l0=pg(()=>({interval:7e3})),c0=pg(()=>({interval:60*1e3})),vg=()=>{const{config:e}=He();return t=>{switch(e().dateFormat){case"absolute-long":return Sk(t,c0());case"absolute-short":return Ek(t,c0());case"relative":return a0(t,l0());default:return a0(t,l0())}}},cn=e=>t=>e.some(r=>r==null)?null:t(e),Tk=P('<span class="text-red-500">削除'),Ak=P('<img alt="icon" class="h-full w-full rounded object-cover">'),Ik=P('<div class="author-name truncate pr-1 font-bold hover:underline">'),Rk=P('<div class="text-xs">への返信'),Lk=P('<div class="content whitespace-pre-wrap break-all">'),Ok=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),Pk=P('<div class="flex gap-2 pt-1">'),u0=P('<div class="text-sm text-zinc-400">'),Mk=P('<button class="h-4 w-4">'),Bk=P('<span class="inline-block h-4 w-4 text-zinc-400">'),Uk=P('<div class="actions flex w-48 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"></div><div>'),Dk=P('<div class="nostr-textnote flex flex-col"><div class="flex w-full gap-1"><button class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></button><div class="created-at shrink-0"><a type="button" class="hover:underline"></a></div></div><div class="overflow-hidden">'),Hk=P('<div class="mt-1 rounded border p-1">'),Fk=P('<button class="pr-1 text-blue-500 hover:underline">'),jk=P('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),zk=P('<span class="ml-1 text-sm">'),Nk=P('<button class="flex items-center rounded border px-1" type="button">'),Wk=P('<span class="text-xs">'),qk=P('<span class="inline-block h-4 w-4">'),{noteEncode:f0}=Es,cu=e=>{let t;const{config:r}=He(),s=vg(),o=Tr(),{showProfile:l}=Ar(),c=bk(),[u,d]=be(!1),[p,h]=be(!1),[v,m]=be(!1),y=()=>m(!1),[w,k]=be(!1),[S,L]=be(!1),U=ze(()=>Tn(e.event)),B=()=>e.embedding??!0,R=()=>e.actions??!0,{profile:E}=Bi(()=>({pubkey:e.event.pubkey})),{reactions:O,reactionsGroupedByContent:W,isReactedBy:z,invalidateReactions:ne,query:V}=C9(()=>({eventId:e.event.id})),{reposts:Y,isRepostedBy:H,invalidateReposts:Z,query:he}=S9(()=>({eventId:e.event.id})),te=Ca(),K=Nr({mutationKey:["publishReaction",U().id],mutationFn:te.publishReaction.bind(te),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:ae=>{console.error("failed to publish reaction: ",ae)},onSettled:()=>{ne().then(()=>V.refetch()).catch(ae=>console.error("failed to refetch reactions",ae))}}),re=Nr({mutationKey:["publishRepost",U().id],mutationFn:te.publishRepost.bind(te),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:ae=>{console.error("failed to publish repost: ",ae)},onSettled:()=>{Z().then(()=>he.refetch()).catch(ae=>console.error("failed to refetch reposts",ae))}}),de=Nr({mutationKey:["deleteEvent",U().id],mutationFn:(...ae)=>te.deleteEvent(...ae).then(et=>Promise.allSettled(et.map(Er(1e4)))),onSuccess:ae=>{const et=ae.filter(Tt=>Tt.status==="fulfilled").length,ot=ae.length-et;et===ae.length?window.alert("削除しました（画面の反映にはリロード）"):et>0?window.alert(`${ot}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:ae=>{console.error("failed to delete",ae)}}),Te=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(f0(e.event.id)).catch(ae=>window.alert(ae))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event)).catch(ae=>window.alert(ae))}},{when:()=>U().pubkey===o(),content:()=>Tk(),onSelect:()=>{const ae=o();ae!=null&&window.confirm("本当に削除しますか？")&&de.mutate({relayUrls:r().relayUrls,pubkey:ae,eventId:U().id})}}],Re=ze(()=>{const ae=o();return ae!=null&&z(ae)||u()}),se=ze(()=>{const ae=o();return ae!=null&&H(ae)||p()}),Fe=()=>{const ae=U().replyingToEvent();if(B()&&ae!=null&&!U().containsEventMentionIndex(ae.index))return ae.id},un=()=>s(U().createdAtAsDate()),J=ae=>{ae.stopPropagation(),!se()&&cn([o(),e.event.id])(([et,ot])=>{re.mutate({relayUrls:r().relayUrls,pubkey:et,eventId:ot,notifyPubkey:e.event.pubkey}),h(!0)})},Je=ae=>{Re()||cn([o(),e.event.id])(([et,ot])=>{K.mutate({relayUrls:r().relayUrls,pubkey:et,content:ae??"+",eventId:ot,notifyPubkey:e.event.pubkey}),d(!0)})},Dt=ae=>{ae.stopPropagation(),Je()};return wn(()=>{t!=null&&L(t.scrollHeight>t.clientHeight)}),(()=>{const ae=Dk(),et=ae.firstChild,ot=et.firstChild,Tt=ot.nextSibling,Ht=Tt.firstChild,At=Ht.firstChild,Ft=At.firstChild,lt=At.nextSibling,It=lt.firstChild,vt=Ht.nextSibling;ot.$$click=pe=>{pe.stopPropagation(),l(U().pubkey)},I(ot,$(oe,{get when(){return E()?.picture},get children(){const pe=Ak();return Ee(()=>St(pe,"src",E()?.picture)),pe}})),At.$$click=pe=>{pe.stopPropagation(),l(U().pubkey)},I(At,$(oe,{get when(){return(E()?.display_name?.length??0)>0},get children(){const pe=Ik();return I(pe,()=>E()?.display_name),pe}}),Ft),I(Ft,$(oe,{get when(){return E()?.name!=null},get fallback(){return`@${xa(U().pubkey)}`},get children(){return["@",ze(()=>E()?.name)]}})),It.$$click=pe=>{pe.preventDefault(),c?.setTimeline({type:"Replies",event:e.event})},I(It,un);const dt=t;return typeof dt=="function"?_n(dt,vt):t=vt,I(vt,$(oe,{get when(){return Fe()},keyed:!0,children:pe=>(()=>{const Ze=Hk();return I(Ze,$(_s,{eventId:pe,actions:!1,embedding:!1})),Ze})()}),null),I(vt,$(oe,{get when(){return U().mentionedPubkeys().length>0},get children(){const pe=Rk(),Ze=pe.firstChild;return I(pe,$(Bt,{get each(){return U().mentionedPubkeys()},children:Me=>(()=>{const Be=Fk();return Be.$$click=Ue=>{Ue.stopPropagation(),l(Me)},I(Be,$(fg,{pubkey:Me})),Be})()}),Ze),pe}}),null),I(vt,$(Y9,{get contentWarning(){return U().contentWarning()},get children(){const pe=Lk();return I(pe,$(mk,{get event(){return e.event},get embedding(){return B()}})),pe}}),null),I(Tt,$(oe,{get when(){return S()},get children(){const pe=Ok();return pe.$$click=Ze=>{Ze.stopPropagation(),k(Me=>!Me)},I(pe,$(oe,{get when(){return!w()},fallback:"隠す",children:"続きを読む"})),pe}}),null),I(Tt,$(oe,{get when(){return R()},get children(){return[$(oe,{get when(){return ze(()=>!!r().showEmojiReaction)()&&O().length>0},get children(){const pe=Pk();return I(pe,$(Bt,{get each(){return[...W().entries()]},children:([Ze,Me])=>{const Be=Me.findIndex(Ue=>Ue.pubkey===o())>=0;return(()=>{const Ue=Nk();return Ue.$$click=()=>Je(Ze),Ue.classList.toggle("text-zinc-400",!Be),Ue.classList.toggle("bg-rose-50",!!Be),Ue.classList.toggle("border-rose-200",!!Be),Ue.classList.toggle("text-rose-400",!!Be),I(Ue,$(oe,{when:Ze==="+",get fallback(){return(()=>{const at=Wk();return I(at,Ze),at})()},get children(){const at=jk();return I(at,$(vc,{})),at}}),null),I(Ue,$(oe,{get when(){return!r().hideCount},get children(){const at=zk();return I(at,()=>Me.length),at}}),null),Ue})()}})),pe}}),(()=>{const pe=Uk(),Ze=pe.firstChild,Me=Ze.nextSibling,Be=Me.firstChild,Ue=Me.nextSibling,at=Ue.nextSibling;return Ze.$$click=G=>{G.stopPropagation(),m(ht=>!ht)},I(Ze,$(l7,{})),Be.$$click=J,I(Be,$(xp,{})),I(Me,$(oe,{get when(){return ze(()=>!r().hideCount)()&&Y().length>0},get children(){const G=u0();return I(G,()=>Y().length),G}}),null),I(Ue,$(oe,{get when(){return!r().useEmojiReaction},get fallback(){return $(r9,{onEmojiSelect:G=>Je(G),get children(){const G=qk();return I(G,$(Cp,{})),G}})},get children(){const G=Mk();return G.$$click=Dt,I(G,$(oe,{get when(){return Re()},get fallback(){return $(ru,{})},get children(){return $(vc,{})}})),Ee(()=>G.disabled=K.isLoading),G}}),null),I(Ue,$(oe,{get when(){return ze(()=>!r().hideCount&&!r().showEmojiReaction)()&&O().length>0},get children(){const G=u0();return I(G,()=>O().length),G}}),null),I(at,$(Sp,{menu:Te,get children(){const G=Bk();return I(G,$(kp,{})),G}})),Ee(G=>{const ht=!se(),Mn=!!(se()||re.isLoading),jt=re.isLoading,Rt=!Re(),Xt=!!(Re()||K.isLoading);return ht!==G._v$&&Me.classList.toggle("text-zinc-400",G._v$=ht),Mn!==G._v$2&&Me.classList.toggle("text-green-400",G._v$2=Mn),jt!==G._v$3&&(Be.disabled=G._v$3=jt),Rt!==G._v$4&&Ue.classList.toggle("text-zinc-400",G._v$4=Rt),Xt!==G._v$5&&Ue.classList.toggle("text-rose-400",G._v$5=Xt),G},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),pe})()]}}),null),I(ae,$(oe,{get when(){return v()},get children(){return $(ug,{mode:"reply",get replyTo(){return e.event},onClose:y,onPost:y})}}),null),Ee(pe=>{const Ze=`nostr:${f0(U().id)}`,Me=!w();return Ze!==pe._v$6&&St(It,"href",pe._v$6=Ze),Me!==pe._v$7&&vt.classList.toggle("max-h-screen",pe._v$7=Me),pe},{_v$6:void 0,_v$7:void 0}),ae})()};st(["click"]);const Kk=P("<div>未対応のイベント種別（<!>）"),Gk=P('<div class="truncate">読み込み中 '),_s=e=>{const{shouldMuteEvent:t}=He(),{event:r,query:s}=lg(()=>cn([e.eventId])(([l])=>({eventId:l}))),o=()=>{const l=r();return l!=null&&t(l)};return $(yn,{fallback:"投稿が見つかりません",get children(){return[$(Pe,{get when(){return o()},children:null}),$(Pe,{get when(){return r()},keyed:!0,children:l=>$(oe,{get when(){return l.kind===ft.Text},get fallback(){return(()=>{const c=Kk(),u=c.firstChild,d=u.nextSibling;return d.nextSibling,I(c,()=>l.kind,d),c})()},get children(){return $(cu,Hw({event:l},e))}})}),$(Pe,{get when(){return s.isLoading&&e.eventId},keyed:!0,children:l=>(()=>{const c=Gk();return c.firstChild,I(c,$(nu,{eventId:l}),null),c})()})]}})},Vk=P('<div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div>'),Qk=P('<div class="pt-1">'),mg=e=>{const{showProfile:t}=Ar(),r=vg(),s=()=>e.event.tags.find(([l])=>l==="e")?.[1],o=ze(()=>Tn(e.event));return $(tu,{get children(){return[(()=>{const l=Vk(),c=l.firstChild,u=c.nextSibling,d=u.firstChild,p=u.nextSibling;return I(c,$(xp,{})),d.$$click=()=>t(e.event.pubkey),I(d,$(ka,{get pubkey(){return e.event.pubkey}})),I(p,()=>r(o().createdAtAsDate())),l})(),(()=>{const l=Qk();return I(l,$(_s,{get eventId(){return s()}})),l})()]}})};st(["click"]);const bg=e=>{const{shouldMuteEvent:t}=He();return $(oe,{get when(){return!t(e.event)},get children(){return $(tu,{get children(){return $(cu,e)}})}})},Zk=P("<div>未対応のイベント種別（<!>）"),Ui=e=>$(Bt,{get each(){return e.events},children:t=>$(yn,{get fallback(){return(()=>{const r=Zk(),s=r.firstChild,o=s.nextSibling;return o.nextSibling,I(r,()=>t.kind,o),r})()},get children(){return[$(Pe,{get when(){return t.kind===ft.Text},get children(){return $(bg,{event:t})}}),$(Pe,{get when(){return t.kind===6},get children(){return $(mg,{event:t})}})]}})});var Xk=ca;function Yk(){this.__data__=new Xk,this.size=0}var Jk=Yk;function eC(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var tC=eC;function nC(e){return this.__data__.get(e)}var rC=nC;function iC(e){return this.__data__.has(e)}var sC=iC,oC=ca,aC=Mc,lC=Bc,cC=200;function uC(e,t){var r=this.__data__;if(r instanceof oC){var s=r.__data__;if(!aC||s.length<cC-1)return s.push([e,t]),this.size=++r.size,this;r=this.__data__=new lC(s)}return r.set(e,t),this.size=r.size,this}var fC=uC,dC=ca,hC=Jk,pC=tC,gC=rC,vC=sC,mC=fC;function Di(e){var t=this.__data__=new dC(e);this.size=t.size}Di.prototype.clear=hC;Di.prototype.delete=pC;Di.prototype.get=gC;Di.prototype.has=vC;Di.prototype.set=mC;var uu=Di;function bC(e,t){for(var r=-1,s=e==null?0:e.length;++r<s;)if(t(e[r],r,e))return!0;return!1}var yC=bC,_C=f1,wC=yC,$C=d1,xC=1,kC=2;function CC(e,t,r,s,o,l){var c=r&xC,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var p=l.get(e),h=l.get(t);if(p&&h)return p==t&&h==e;var v=-1,m=!0,y=r&kC?new _C:void 0;for(l.set(e,t),l.set(t,e);++v<u;){var w=e[v],k=t[v];if(s)var S=c?s(k,w,v,t,e,l):s(w,k,v,e,t,l);if(S!==void 0){if(S)continue;m=!1;break}if(y){if(!wC(t,function(L,U){if(!$C(y,U)&&(w===L||o(w,L,r,s,l)))return y.push(U)})){m=!1;break}}else if(!(w===k||o(w,k,r,s,l))){m=!1;break}}return l.delete(e),l.delete(t),m}var yg=CC,SC=$n,EC=SC.Uint8Array,_g=EC;function TC(e){var t=-1,r=Array(e.size);return e.forEach(function(s,o){r[++t]=[o,s]}),r}var AC=TC,d0=Ti,h0=_g,IC=Pc,RC=yg,LC=AC,OC=Uc,PC=1,MC=2,BC="[object Boolean]",UC="[object Date]",DC="[object Error]",HC="[object Map]",FC="[object Number]",jC="[object RegExp]",zC="[object Set]",NC="[object String]",WC="[object Symbol]",qC="[object ArrayBuffer]",KC="[object DataView]",p0=d0?d0.prototype:void 0,rc=p0?p0.valueOf:void 0;function GC(e,t,r,s,o,l,c){switch(r){case KC:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case qC:return!(e.byteLength!=t.byteLength||!l(new h0(e),new h0(t)));case BC:case UC:case FC:return IC(+e,+t);case DC:return e.name==t.name&&e.message==t.message;case jC:case NC:return e==t+"";case HC:var u=LC;case zC:var d=s&PC;if(u||(u=OC),e.size!=t.size&&!d)return!1;var p=c.get(e);if(p)return p==t;s|=MC,c.set(e,t);var h=RC(u(e),u(t),s,o,l,c);return c.delete(e),h;case WC:if(rc)return rc.call(e)==rc.call(t)}return!1}var VC=GC;function QC(e,t){for(var r=-1,s=t.length,o=e.length;++r<s;)e[o+r]=t[r];return e}var fu=QC,ZC=Array.isArray,Pn=ZC,XC=fu,YC=Pn;function JC(e,t,r){var s=t(e);return YC(e)?s:XC(s,r(e))}var wg=JC;function eS(e,t){for(var r=-1,s=e==null?0:e.length,o=0,l=[];++r<s;){var c=e[r];t(c,r,e)&&(l[o++]=c)}return l}var tS=eS;function nS(){return[]}var $g=nS,rS=tS,iS=$g,sS=Object.prototype,oS=sS.propertyIsEnumerable,g0=Object.getOwnPropertySymbols,aS=g0?function(e){return e==null?[]:(e=Object(e),rS(g0(e),function(t){return oS.call(e,t)}))}:iS,du=aS;function lS(e,t){for(var r=-1,s=Array(e);++r<e;)s[r]=t(r);return s}var cS=lS;function uS(e){return e!=null&&typeof e=="object"}var Ir=uS,fS=Ai,dS=Ir,hS="[object Arguments]";function pS(e){return dS(e)&&fS(e)==hS}var gS=pS,v0=gS,vS=Ir,xg=Object.prototype,mS=xg.hasOwnProperty,bS=xg.propertyIsEnumerable,yS=v0(function(){return arguments}())?v0:function(e){return vS(e)&&mS.call(e,"callee")&&!bS.call(e,"callee")},hu=yS,ta={exports:{}};function _S(){return!1}var wS=_S;ta.exports;(function(e,t){var r=$n,s=wS,o=t&&!t.nodeType&&t,l=o&&!0&&e&&!e.nodeType&&e,c=l&&l.exports===o,u=c?r.Buffer:void 0,d=u?u.isBuffer:void 0,p=d||s;e.exports=p})(ta,ta.exports);var pu=ta.exports,$S=9007199254740991,xS=/^(?:0|[1-9]\d*)$/;function kS(e,t){var r=typeof e;return t=t??$S,!!t&&(r=="number"||r!="symbol"&&xS.test(e))&&e>-1&&e%1==0&&e<t}var gu=kS,CS=9007199254740991;function SS(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=CS}var vu=SS,ES=Ai,TS=vu,AS=Ir,IS="[object Arguments]",RS="[object Array]",LS="[object Boolean]",OS="[object Date]",PS="[object Error]",MS="[object Function]",BS="[object Map]",US="[object Number]",DS="[object Object]",HS="[object RegExp]",FS="[object Set]",jS="[object String]",zS="[object WeakMap]",NS="[object ArrayBuffer]",WS="[object DataView]",qS="[object Float32Array]",KS="[object Float64Array]",GS="[object Int8Array]",VS="[object Int16Array]",QS="[object Int32Array]",ZS="[object Uint8Array]",XS="[object Uint8ClampedArray]",YS="[object Uint16Array]",JS="[object Uint32Array]",Ve={};Ve[qS]=Ve[KS]=Ve[GS]=Ve[VS]=Ve[QS]=Ve[ZS]=Ve[XS]=Ve[YS]=Ve[JS]=!0;Ve[IS]=Ve[RS]=Ve[NS]=Ve[LS]=Ve[WS]=Ve[OS]=Ve[PS]=Ve[MS]=Ve[BS]=Ve[US]=Ve[DS]=Ve[HS]=Ve[FS]=Ve[jS]=Ve[zS]=!1;function eE(e){return AS(e)&&TS(e.length)&&!!Ve[ES(e)]}var tE=eE;function nE(e){return function(t){return e(t)}}var mu=nE,na={exports:{}};na.exports;(function(e,t){var r=a1,s=t&&!t.nodeType&&t,o=s&&!0&&e&&!e.nodeType&&e,l=o&&o.exports===s,c=l&&r.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||c&&c.binding&&c.binding("util")}catch{}}();e.exports=u})(na,na.exports);var bu=na.exports,rE=tE,iE=mu,m0=bu,b0=m0&&m0.isTypedArray,sE=b0?iE(b0):rE,kg=sE,oE=cS,aE=hu,lE=Pn,cE=pu,uE=gu,fE=kg,dE=Object.prototype,hE=dE.hasOwnProperty;function pE(e,t){var r=lE(e),s=!r&&aE(e),o=!r&&!s&&cE(e),l=!r&&!s&&!o&&fE(e),c=r||s||o||l,u=c?oE(e.length,String):[],d=u.length;for(var p in e)(t||hE.call(e,p))&&!(c&&(p=="length"||o&&(p=="offset"||p=="parent")||l&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||uE(p,d)))&&u.push(p);return u}var Cg=pE,gE=Object.prototype;function vE(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||gE;return e===r}var yu=vE;function mE(e,t){return function(r){return e(t(r))}}var Sg=mE,bE=Sg,yE=bE(Object.keys,Object),_E=yE,wE=yu,$E=_E,xE=Object.prototype,kE=xE.hasOwnProperty;function CE(e){if(!wE(e))return $E(e);var t=[];for(var r in Object(e))kE.call(e,r)&&r!="constructor"&&t.push(r);return t}var SE=CE,EE=c1,TE=vu;function AE(e){return e!=null&&TE(e.length)&&!EE(e)}var Eg=AE,IE=Cg,RE=SE,LE=Eg;function OE(e){return LE(e)?IE(e):RE(e)}var Sa=OE,PE=wg,ME=du,BE=Sa;function UE(e){return PE(e,BE,ME)}var Tg=UE,y0=Tg,DE=1,HE=Object.prototype,FE=HE.hasOwnProperty;function jE(e,t,r,s,o,l){var c=r&DE,u=y0(e),d=u.length,p=y0(t),h=p.length;if(d!=h&&!c)return!1;for(var v=d;v--;){var m=u[v];if(!(c?m in t:FE.call(t,m)))return!1}var y=l.get(e),w=l.get(t);if(y&&w)return y==t&&w==e;var k=!0;l.set(e,t),l.set(t,e);for(var S=c;++v<d;){m=u[v];var L=e[m],U=t[m];if(s)var B=c?s(U,L,m,t,e,l):s(L,U,m,e,t,l);if(!(B===void 0?L===U||o(L,U,r,s,l):B)){k=!1;break}S||(S=m=="constructor")}if(k&&!S){var R=e.constructor,E=t.constructor;R!=E&&"constructor"in e&&"constructor"in t&&!(typeof R=="function"&&R instanceof R&&typeof E=="function"&&E instanceof E)&&(k=!1)}return l.delete(e),l.delete(t),k}var zE=jE,NE=Kr,WE=$n,qE=NE(WE,"DataView"),KE=qE,GE=Kr,VE=$n,QE=GE(VE,"Promise"),ZE=QE,XE=Kr,YE=$n,JE=XE(YE,"WeakMap"),eT=JE,Sc=KE,Ec=Mc,Tc=ZE,Ac=h1,Ic=eT,Ag=Ai,Hi=u1,_0="[object Map]",tT="[object Object]",w0="[object Promise]",$0="[object Set]",x0="[object WeakMap]",k0="[object DataView]",nT=Hi(Sc),rT=Hi(Ec),iT=Hi(Tc),sT=Hi(Ac),oT=Hi(Ic),Fr=Ag;(Sc&&Fr(new Sc(new ArrayBuffer(1)))!=k0||Ec&&Fr(new Ec)!=_0||Tc&&Fr(Tc.resolve())!=w0||Ac&&Fr(new Ac)!=$0||Ic&&Fr(new Ic)!=x0)&&(Fr=function(e){var t=Ag(e),r=t==tT?e.constructor:void 0,s=r?Hi(r):"";if(s)switch(s){case nT:return k0;case rT:return _0;case iT:return w0;case sT:return $0;case oT:return x0}return t});var Ea=Fr,ic=uu,aT=yg,lT=VC,cT=zE,C0=Ea,S0=Pn,E0=pu,uT=kg,fT=1,T0="[object Arguments]",A0="[object Array]",Mo="[object Object]",dT=Object.prototype,I0=dT.hasOwnProperty;function hT(e,t,r,s,o,l){var c=S0(e),u=S0(t),d=c?A0:C0(e),p=u?A0:C0(t);d=d==T0?Mo:d,p=p==T0?Mo:p;var h=d==Mo,v=p==Mo,m=d==p;if(m&&E0(e)){if(!E0(t))return!1;c=!0,h=!1}if(m&&!h)return l||(l=new ic),c||uT(e)?aT(e,t,r,s,o,l):lT(e,t,d,r,s,o,l);if(!(r&fT)){var y=h&&I0.call(e,"__wrapped__"),w=v&&I0.call(t,"__wrapped__");if(y||w){var k=y?e.value():e,S=w?t.value():t;return l||(l=new ic),o(k,S,r,s,l)}}return m?(l||(l=new ic),cT(e,t,r,s,o,l)):!1}var pT=hT,gT=pT,R0=Ir;function Ig(e,t,r,s,o){return e===t?!0:e==null||t==null||!R0(e)&&!R0(t)?e!==e&&t!==t:gT(e,t,r,s,Ig,o)}var Rg=Ig,vT=uu,mT=Rg,bT=1,yT=2;function _T(e,t,r,s){var o=r.length,l=o,c=!s;if(e==null)return!l;for(e=Object(e);o--;){var u=r[o];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<l;){u=r[o];var d=u[0],p=e[d],h=u[1];if(c&&u[2]){if(p===void 0&&!(d in e))return!1}else{var v=new vT;if(s)var m=s(p,h,d,e,t,v);if(!(m===void 0?mT(h,p,bT|yT,s,v):m))return!1}}return!0}var wT=_T,$T=Rn;function xT(e){return e===e&&!$T(e)}var Lg=xT,kT=Lg,CT=Sa;function ST(e){for(var t=CT(e),r=t.length;r--;){var s=t[r],o=e[s];t[r]=[s,o,kT(o)]}return t}var ET=ST;function TT(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}var Og=TT,AT=wT,IT=ET,RT=Og;function LT(e){var t=IT(e);return t.length==1&&t[0][2]?RT(t[0][0],t[0][1]):function(r){return r===e||AT(r,e,t)}}var OT=LT,PT=Ai,MT=Ir,BT="[object Symbol]";function UT(e){return typeof e=="symbol"||MT(e)&&PT(e)==BT}var Ta=UT,DT=Pn,HT=Ta,FT=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,jT=/^\w*$/;function zT(e,t){if(DT(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||HT(e)?!0:jT.test(e)||!FT.test(e)||t!=null&&e in Object(t)}var _u=zT,Pg=Bc,NT="Expected a function";function wu(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(NT);var r=function(){var s=arguments,o=t?t.apply(this,s):s[0],l=r.cache;if(l.has(o))return l.get(o);var c=e.apply(this,s);return r.cache=l.set(o,c)||l,c};return r.cache=new(wu.Cache||Pg),r}wu.Cache=Pg;var WT=wu,qT=WT,KT=500;function GT(e){var t=qT(e,function(s){return r.size===KT&&r.clear(),s}),r=t.cache;return t}var VT=GT,QT=VT,ZT=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,XT=/\\(\\)?/g,YT=QT(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ZT,function(r,s,o,l){t.push(o?l.replace(XT,"$1"):s||r)}),t}),JT=YT;function eA(e,t){for(var r=-1,s=e==null?0:e.length,o=Array(s);++r<s;)o[r]=t(e[r],r,e);return o}var $u=eA,L0=Ti,tA=$u,nA=Pn,rA=Ta,iA=1/0,O0=L0?L0.prototype:void 0,P0=O0?O0.toString:void 0;function Mg(e){if(typeof e=="string")return e;if(nA(e))return tA(e,Mg)+"";if(rA(e))return P0?P0.call(e):"";var t=e+"";return t=="0"&&1/e==-iA?"-0":t}var sA=Mg,oA=sA;function aA(e){return e==null?"":oA(e)}var lA=aA,cA=Pn,uA=_u,fA=JT,dA=lA;function hA(e,t){return cA(e)?e:uA(e,t)?[e]:fA(dA(e))}var Fi=hA,pA=Ta,gA=1/0;function vA(e){if(typeof e=="string"||pA(e))return e;var t=e+"";return t=="0"&&1/e==-gA?"-0":t}var ji=vA,mA=Fi,bA=ji;function yA(e,t){t=mA(t,e);for(var r=0,s=t.length;e!=null&&r<s;)e=e[bA(t[r++])];return r&&r==s?e:void 0}var Aa=yA,_A=Aa;function wA(e,t,r){var s=e==null?void 0:_A(e,t);return s===void 0?r:s}var $A=wA;function xA(e,t){return e!=null&&t in Object(e)}var kA=xA,CA=Fi,SA=hu,EA=Pn,TA=gu,AA=vu,IA=ji;function RA(e,t,r){t=CA(t,e);for(var s=-1,o=t.length,l=!1;++s<o;){var c=IA(t[s]);if(!(l=e!=null&&r(e,c)))break;e=e[c]}return l||++s!=o?l:(o=e==null?0:e.length,!!o&&AA(o)&&TA(c,o)&&(EA(e)||SA(e)))}var LA=RA,OA=kA,PA=LA;function MA(e,t){return e!=null&&PA(e,t,OA)}var BA=MA,UA=Rg,DA=$A,HA=BA,FA=_u,jA=Lg,zA=Og,NA=ji,WA=1,qA=2;function KA(e,t){return FA(e)&&jA(t)?zA(NA(e),t):function(r){var s=DA(r,e);return s===void 0&&s===t?HA(r,e):UA(t,s,WA|qA)}}var GA=KA;function VA(e){return e}var Bg=VA;function QA(e){return function(t){return t?.[e]}}var ZA=QA,XA=Aa;function YA(e){return function(t){return XA(t,e)}}var JA=YA,eI=ZA,tI=JA,nI=_u,rI=ji;function iI(e){return nI(e)?eI(rI(e)):tI(e)}var sI=iI,oI=OT,aI=GA,lI=Bg,cI=Pn,uI=sI;function fI(e){return typeof e=="function"?e:e==null?lI:typeof e=="object"?cI(e)?aI(e[0],e[1]):oI(e):uI(e)}var xu=fI,dI=xu,hI=p1;function pI(e,t){return e&&e.length?hI(e,dI(t)):[]}var gI=pI;const vI=ws(gI),sc=e=>Array.from(e).sort((t,r)=>r.created_at-t.created_at);let Ho=0;const{setActiveSubscriptions:mI}=og();setInterval(()=>{mI(Ho)},1e3);const Jn=e=>{const{config:t,shouldMuteEvent:r}=He(),s=$a(),[o,l]=be([]);xr(ia(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{l(u=>u.filter(d=>!r(d)))},{defer:!0}));const c=()=>{const u=e();if(u==null)return;const{relayUrls:d,filters:p,options:h,onEvent:v,onEOSE:m,continuous:y=!0}=u,w=u.limit??50,k=s().sub(d,p,h);let S=!0;Ho+=1;let L=!1,U=!1;const B=[];k.on("event",E=>{v?.(E),!r(E)&&(u.clientEventFilter!=null&&!u.clientEventFilter(E)||(U?l(O=>{const W=sc([E,...O].slice(0,w)),z=vI(W,ne=>ne.id);return z.length!==W.length&&console.warn("duplicated event",E),z}):(L=!0,B.push(E))))}),k.on("eose",()=>{m?.(),U=!0,l(sc(B)),y||(k.unsub(),S&&(S=!1,Ho-=1))});const R=setInterval(()=>{if(U){clearInterval(R);return}L&&(L=!1,l(sc(B)))},100);Cr(()=>{k.unsub(),S&&(S=!1,Ho-=1),clearInterval(R)})};return xr(()=>{c()}),{events:o}},bI=e=>{const t=()=>Tn(e),r=[e.id],s=t().rootEvent()?.id;s!=null&&r.push(s);const o=t().replyingToEvent()?.id;return o!=null&&r.push(o),yr(r)},yI=e=>{const{config:t}=He(),{events:r}=Jn(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:bI(e.event),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return $(Ui,{get events(){return[...r()].reverse()}})},_I=e=>$(yn,{get children(){return $(Pe,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>$(yI,{get event(){return t.event}})})}}),wI=P('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),$I=P('<div class="shrink-0 border-b">'),xI=P('<div class="flex flex-col overflow-y-scroll scroll-smooth">'),kI=P('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="flex h-full flex-col overflow-y-scroll scroll-smooth">'),zi=e=>{let t;const r=yk(),s=()=>e.width??"medium";return Cc(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Cc(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),$(hg.Provider,{value:r,get children(){const o=wI(),l=t;return typeof l=="function"?_n(l,o):t=o,I(o,$(oe,{get when(){return r.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=$I();return I(c,()=>e.header),c})(),(()=>{const c=xI();return I(c,()=>e.children),c})()]},children:c=>(()=>{const u=kI(),d=u.firstChild,p=d.firstChild,h=p.firstChild,v=d.nextSibling;return p.$$click=()=>r?.clearTimeline(),I(h,$(o1,{})),I(v,$(_I,{timelineContent:c})),u})()})),Ee(c=>Fw(o,{"sm:w-[500px]":s()==="widest","sm:w-[360px]":s()==="wide","sm:w-[320px]":s()==="medium","sm:w-[280px]":s()==="narrow"},c)),o}})};st(["click"]);const CI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),SI=(e={})=>(()=>{const t=CI();return Qe(t,e,!0,!0),t})(),EI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),TI=(e={})=>(()=>{const t=EI();return Qe(t,e,!0,!0),t})(),AI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),II=(e={})=>(()=>{const t=AI();return Qe(t,e,!0,!0),t})(),RI=P('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),LI=P('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),OI=P('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),PI=e=>(()=>{const t=RI(),r=t.firstChild,s=r.nextSibling;return I(r,()=>e.title),I(s,()=>e.children),t})(),Ni=e=>{const{saveColumn:t,removeColumn:r,moveColumn:s}=He(),o=As(),l=u=>{t({...e.column,width:u})},c=u=>{s(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=OI(),d=u.firstChild,p=d.firstChild,h=p.firstChild,v=p.nextSibling,m=v.firstChild,y=v.nextSibling,w=y.nextSibling,k=w.firstChild;return I(u,$(PI,{title:"カラム幅",get children(){const S=LI(),L=S.firstChild,U=L.nextSibling,B=U.nextSibling,R=B.nextSibling;return L.$$click=()=>l("widest"),U.$$click=()=>l("wide"),B.$$click=()=>l("medium"),R.$$click=()=>l("narrow"),S}}),d),p.$$click=()=>c(e.columnIndex-1),I(h,$(SI,{})),v.$$click=()=>c(e.columnIndex+1),I(m,$(TI,{})),w.$$click=()=>r(e.column.id),I(k,$(II,{})),u})()};st(["click"]);const kr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(r=>kr(r)(t));case"OR":return e.children.some(r=>kr(r)(t));case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},MI=e=>{const{config:t,removeColumn:r}=He(),{followingPubkeys:s}=kc(()=>({pubkey:e.column.pubkey})),{events:o}=Jn(()=>{const l=Yw.uniq([...s()]);return l.length===0?null:{relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:l,limit:10,since:Gn()-4*60*60}],clientEventFilter:c=>e.column.contentFilter==null?!0:kr(e.column.contentFilter)(c.content)}});return $(zi,{get header(){return $($s,{get name(){return e.column.name??"ホーム"},get icon(){return $(i1,{})},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Ui,{get events(){return o()}})}})},BI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),Ug=(e={})=>(()=>{const t=BI();return Qe(t,e,!0,!0),t})(),UI=P('<span class="h-4 w-4 pt-[1px] text-rose-400">'),DI=P('<img alt="icon" class="rounded">'),HI=P('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),FI=P('<div class="notification-event py-1">'),jI=P('<div class="truncate">loading '),zI=e=>{const{showProfile:t}=Ar(),r=()=>Tn(e.event),s=()=>r().taggedEvents()[0].id,{profile:o}=Bi(()=>({pubkey:e.event.pubkey})),{event:l,query:c}=lg(()=>({eventId:s()})),u=()=>c.isSuccess&&l()==null;return $(oe,{get when(){return!u()},get children(){return $(tu,{get children(){return[(()=>{const d=HI(),p=d.firstChild,h=p.nextSibling,v=h.firstChild,m=v.nextSibling,y=m.firstChild;return I(p,$(yn,{get fallback(){return e.event.content},get children(){return $(Pe,{get when(){return e.event.content==="+"},get children(){const w=UI();return I(w,$(vc,{})),w}})}})),I(v,$(oe,{get when(){return o()?.picture!=null},get children(){const w=DI();return Ee(()=>St(w,"src",o()?.picture)),w}})),y.$$click=()=>t(e.event.pubkey),I(y,$(ka,{get pubkey(){return e.event.pubkey}})),d})(),(()=>{const d=FI();return I(d,$(oe,{get when(){return l()},get fallback(){return(()=>{const p=jI();return p.firstChild,I(p,s,null),p})()},keyed:!0,children:p=>$(cu,{event:p})})),d})()]}})}})};st(["click"]);const NI=P("<div>unknown event"),Dg=e=>$(Bt,{get each(){return e.events},children:t=>$(yn,{get fallback(){return NI()},get children(){return[$(Pe,{get when(){return t.kind===ft.Text},get children(){return $(bg,{event:t})}}),$(Pe,{get when(){return t.kind===ft.Reaction},get children(){return $(zI,{event:t})}}),$(Pe,{get when(){return t.kind===6},get children(){return $(mg,{event:t})}})]}})}),WI=e=>{const{config:t,removeColumn:r}=He(),{events:s}=Jn(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:kr(e.column.contentFilter)(o.content)}));return $(zi,{get header(){return $($s,{get name(){return e.column.name??"通知"},get icon(){return $(Ug,{})},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Dg,{get events(){return s()}})}})},qI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Hg=(e={})=>(()=>{const t=qI();return Qe(t,e,!0,!0),t})(),KI=e=>{const{config:t,removeColumn:r}=He(),{events:s}=Jn(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:kr(e.column.contentFilter)(o.content)}));return $(zi,{get header(){return $($s,{get name(){return e.column.name??"投稿"},get icon(){return $(Hg,{})},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Ui,{get events(){return s()}})}})},GI=e=>{const{config:t,removeColumn:r}=He(),{events:s}=Jn(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:kr(e.column.contentFilter)(o.content)}));return $(zi,{get header(){return $($s,{get name(){return e.column.name??"リアクション"},get icon(){return $(ru,{})},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Dg,{get events(){return s()}})}})},VI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),ku=(e={})=>(()=>{const t=VI();return Qe(t,e,!0,!0),t})(),QI=e=>{const{removeColumn:t}=He(),{events:r}=Jn(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:Gn()-4*60*60}],clientEventFilter:s=>e.column.contentFilter==null?!0:kr(e.column.contentFilter)(s.content)}));return $(zi,{get header(){return $($s,{get name(){return e.column.name??"リレー"},get icon(){return $(ku,{})},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Ui,{get events(){return r()}})}})},ZI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),Fg=(e={})=>(()=>{const t=ZI();return Qe(t,e,!0,!0),t})(),XI=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),YI=e=>{const[t,r]=be(!1),[s,o]=be(""),{saveColumn:l}=He(),c=()=>r(v=>!v),u=()=>{s()!==e.column.query&&l({...e.column,query:s()})},d=()=>{u()},p=v=>{o(v.currentTarget.value)},h=v=>{v.preventDefault(),u()};return wn(()=>{o(e.column.query)}),(()=>{const v=XI(),m=v.firstChild,y=m.firstChild,w=y.firstChild,k=y.nextSibling,S=k.firstChild,L=k.nextSibling;return I(w,$(Fg,{})),k.addEventListener("submit",h),S.addEventListener("blur",d),S.addEventListener("change",p),L.$$click=()=>c(),I(L,$(s1,{})),I(v,$(oe,{get when(){return t()},get children(){return e.settings()}}),null),Ee(()=>S.value=s()),v})()},JI=e=>{const{removeColumn:t}=He(),{events:r}=Jn(()=>{const{query:s}=e.column;return s.length===0?null:{relayUrls:f9,filters:[{kinds:[1,6],search:s,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:kr(e.column.contentFilter)(o.content)}});return $(zi,{get header(){return $(YI,{get column(){return e.column},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Ui,{get events(){return r()}})}})};st(["click"]);const eR=P('<div class="flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),tR=()=>{const{config:e}=He();return(()=>{const t=eR();return I(t,$(Bt,{get each(){return e().columns},children:(r,s)=>{const o=()=>s()+1,l=()=>o()===e().columns.length;return $(yn,{get children(){return[$(Pe,{get when(){return r.columnType==="Following"&&r},keyed:!0,children:c=>$(MI,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),$(Pe,{get when(){return r.columnType==="Notification"&&r},keyed:!0,children:c=>$(WI,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),$(Pe,{get when(){return r.columnType==="Posts"&&r},keyed:!0,children:c=>$(KI,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),$(Pe,{get when(){return r.columnType==="Reactions"&&r},keyed:!0,children:c=>$(GI,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),$(Pe,{get when(){return r.columnType==="Relays"&&r},keyed:!0,children:c=>$(QI,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})}),$(Pe,{get when(){return r.columnType==="Search"&&r},keyed:!0,children:c=>$(JI,{column:c,get columnIndex(){return o()},get lastColumn(){return l()}})})]}})}})),t})()},nR=P('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),rR=e=>{let t;const r=s=>{s.target===t&&e.onClose?.()};return(()=>{const s=nR();s.$$click=r;const o=t;return typeof o=="function"?_n(o,s):t=s,I(s,()=>e.children),s})()};st(["click"]);const iR=P('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),Is=e=>$(rR,{onClose:()=>e.onClose?.(),get children(){const t=iR(),r=t.firstChild,s=r.firstChild,o=r.nextSibling;return r.$$click=()=>e.onClose?.(),I(s,$(oe,{get when(){return e?.closeButton},get fallback(){return $(ys,{})},keyed:!0,children:l=>l()})),I(o,()=>e.children),t}});st(["click"]);const sR=P('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),oR=P('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),aR=P('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),lR=async()=>{const t=await(await fetch(Lc("packageInfo.json"))).text();return JSON.parse(t)},cR=e=>{const[t]=n1(lR);return $(Is,{get onClose(){return e.onClose},get children(){const r=sR(),s=r.firstChild,o=s.firstChild,l=o.nextSibling,c=l.firstChild,u=c.nextSibling;u.firstChild;const d=s.nextSibling,p=d.nextSibling,h=p.nextSibling,v=h.nextSibling,m=v.nextSibling,y=m.nextSibling,w=y.nextSibling;return w.nextSibling,I(u,()=>t()?.self?.version,null),I(w,()=>t()?.self.licenseText),I(r,$(Bt,{get each(){return t()?.packages??[]},fallback:"取得中",children:k=>[(()=>{const S=oR(),L=S.firstChild,U=L.nextSibling,B=U.nextSibling,R=B.nextSibling;return R.nextSibling,I(S,()=>k.name,L),I(S,()=>k.version,U),I(S,()=>k.licenseSpdx,R),S})(),(()=>{const S=aR();return I(S,()=>k.licenseText),S})()]}),null),Ee(()=>St(o,"src",Lc("images/rabbit_app_256.png"))),r}})},uR=P('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),fR=e=>{const t=Tr(),{saveColumn:r}=He(),s=As(),o=()=>{e.onClose(),s({command:"moveToLastColumn"}).catch(v=>console.error(v))},l=()=>{cn([t()])(([v])=>{r(eg({pubkey:v}))}),o()},c=()=>{cn([t()])(([v])=>{r(tg({pubkey:v}))}),o()},u=()=>{r(ng()),o()},d=()=>{r(ou({query:""})),o()},p=()=>{cn([t()])(([v])=>{r(rg({pubkey:v}))}),o()},h=()=>{cn([t()])(([v])=>{r(ig({pubkey:v}))}),o()};return $(Is,{get onClose(){return e.onClose},get children(){const v=uR(),m=v.firstChild,y=m.firstChild,w=m.nextSibling,k=w.firstChild,S=w.nextSibling,L=S.firstChild,U=S.nextSibling,B=U.firstChild,R=U.nextSibling,E=R.firstChild,O=R.nextSibling,W=O.firstChild;return m.$$click=()=>l(),I(y,$(i1,{})),w.$$click=()=>c(),I(k,$(Ug,{})),S.$$click=()=>u(),I(L,$(ku,{})),U.$$click=()=>d(),I(B,$(Fg,{})),R.$$click=()=>p(),I(E,$(Hg,{})),O.$$click=()=>h(),I(W,$(ru,{})),v}})};st(["click"]);const dR=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),hR=(e={})=>(()=>{const t=dR();return Qe(t,e,!0,!0),t})(),pR=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),gR=(e={})=>(()=>{const t=pR();return Qe(t,e,!0,!0),t})(),vR=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),mR=(e={})=>(()=>{const t=vR();return Qe(t,e,!0,!0),t})();function bR(e){const{config:t}=He(),r=ze(e),{events:s}=Jn(()=>({relayUrls:t().relayUrls,filters:[{kinds:[ft.Contacts],"#p":[r().pubkey]}],limit:1/0,continuous:!0})),o=()=>yr(s()?.map(c=>c.pubkey));return{followersPubkeys:o,count:()=>o().length}}const yR=e=>{const t=ze(e),r=Ei(()=>["useVerification",t()],({queryKey:o,signal:l})=>{const[,c]=o;if(c==null)return Promise.resolve(null);const{nip05:u}=c;return wp.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>r?.data??null,query:r}},_R=P('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),wR=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),$R=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),xR=P('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),kR=P('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),CR=P('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),SR=P('<div class="shrink-0 text-xs">読み込み中'),ER=P('<div class="shrink-0 text-xs">フォローされています'),TR=P('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),AR=P('<div class="truncate text-xl font-bold">'),IR=P('<div class="truncate text-xs">@'),RR=P('<span class="inline-block h-3 w-3">'),LR=P('<span class="inline-block h-4 w-4 text-blue-400">'),OR=P('<div class="flex items-center text-xs">'),PR=P('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),MR=P('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),BR=P('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),UR=P('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),DR=P('<ul class="border-t px-5 py-2 text-xs">'),HR=P('<ul class="border-t p-1">'),FR=P('<div class="h-12 shrink-0">'),jR=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),zR=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),NR=P('<span class="inline-block h-4 w-4 text-rose-500">'),WR=P('<span class="text-sm">読み込み中'),qR=P('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),KR=P('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),GR=e=>{const{count:t}=bR(()=>({pubkey:e.pubkey}));return ze(t)},VR=e=>{const{config:t,addMutedPubkey:r,removeMutedPubkey:s,isPubkeyMuted:o}=He(),l=Ca(),c=Tr(),{showProfileEdit:u}=Ar(),d=ze(()=>xa(e.pubkey)),[p,h]=be(!1),[v,m]=be(!1),{profile:y,query:w}=Bi(()=>({pubkey:e.pubkey})),{verification:k,query:S}=yR(()=>cn([y()?.nip05])(([K])=>({nip05:K}))),L=()=>{const K=y()?.nip05;if(K==null)return null;const[re,de]=K.split("@");return de==null?null:re==="_"?{domain:de,ident:de}:{user:re,domain:de,ident:K}},U=()=>k()?.pubkey===e.pubkey,B=()=>o(e.pubkey),{followingPubkeys:R,invalidateFollowings:E,query:O}=kc(()=>cn([c()])(([K])=>({pubkey:K}))),W=()=>R().includes(e.pubkey),{followingPubkeys:z,query:ne}=kc(()=>({pubkey:e.pubkey})),V=()=>{const K=c();return K!=null&&z().includes(K)},Y=Nr({mutationKey:["updateContacts"],mutationFn:(...K)=>l.updateContacts(...K).then(re=>Promise.allSettled(re.map(Er(5e3)))),onSuccess:K=>{const re=K.filter(Te=>Te.status==="fulfilled").length,de=K.length-re;re===K.length?console.log("succeeded to update contacts"):re>0?console.log(`succeeded to update contacts for ${re} relays but failed for ${de} relays`):console.error("failed to update contacts")},onError:K=>{console.error("failed to update contacts: ",K)},onSettled:()=>{E().then(()=>O.refetch()).catch(K=>console.error("failed to refetch contacts",K))}}),H=()=>{const K=c();K!=null&&O.isFetched&&Y.mutate({relayUrls:t().relayUrls,pubkey:K,content:O.data?.content??"",followingPubkeys:yr([...R(),e.pubkey])})},Z=()=>{const K=c();K!=null&&O.isFetched&&window.confirm("本当にフォロー解除しますか？")&&Y.mutate({relayUrls:t().relayUrls,pubkey:K,content:O.data?.content??"",followingPubkeys:R().filter(re=>re!==e.pubkey)})},he=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(K=>window.alert(K))}},{content:()=>B()?"ミュート解除":"ミュート",onSelect:()=>{B()?s(e.pubkey):r(e.pubkey)}},{when:()=>e.pubkey===c(),content:()=>W()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{W()?Z():H()}}],{events:te}=Jn(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:Gn()}],continuous:!1}));return $(Is,{onClose:()=>e.onClose?.(),get children(){return[$(oe,{get when(){return w.isFetched},get fallback(){return"loading"},get children(){return[$(oe,{get when(){return y()?.banner},get fallback(){return FR()},keyed:!0,children:K=>(()=>{const re=jR(),de=re.firstChild;return St(de,"src",K),re})()}),(()=>{const K=TR(),re=K.firstChild,de=re.firstChild,Te=re.nextSibling,Re=Te.firstChild;return I(de,$(oe,{get when(){return y()?.picture},keyed:!0,children:se=>(()=>{const Fe=zR();return St(Fe,"src",se),Fe})()})),I(Re,$(yn,{get children(){return[$(Pe,{get when(){return e.pubkey===c()},get children(){const se=_R();return se.$$click=()=>u(),se}}),$(Pe,{get when(){return O.isLoading||O.isFetching},get children(){return wR()}}),$(Pe,{get when(){return Y.isLoading},get children(){return $R()}}),$(Pe,{get when(){return W()},get children(){const se=xR();return se.$$click=()=>Z(),se.addEventListener("mouseleave",()=>h(!1)),se.addEventListener("mouseenter",()=>h(!0)),I(se,$(oe,{get when(){return!p()},fallback:"フォロー解除",children:"フォロー中"})),Ee(()=>se.disabled=Y.isLoading),se}}),$(Pe,{get when(){return!W()},get children(){const se=kR();return se.$$click=()=>H(),Ee(()=>se.disabled=Y.isLoading),se}})]}}),null),I(Re,$(Sp,{menu:he,get children(){const se=CR();return I(se,$(kp,{})),se}}),null),I(Te,$(yn,{get children(){return[$(Pe,{get when(){return ne.isLoading},get children(){return SR()}}),$(Pe,{get when(){return V()},get children(){return ER()}})]}}),null),K})(),(()=>{const K=PR(),re=K.firstChild,de=re.firstChild,Te=de.nextSibling,Re=Te.firstChild;return I(re,$(oe,{get when(){return(y()?.display_name?.length??0)>0},get children(){const se=AR();return I(se,()=>y()?.display_name),se}}),de),I(de,$(oe,{get when(){return(y()?.name?.length??0)>0},get children(){const se=IR();return se.firstChild,I(se,()=>y()?.name,null),se}}),null),I(de,$(oe,{get when(){return(y()?.nip05?.length??0)>0},get children(){const se=OR();return I(se,()=>L()?.ident,null),I(se,$(yn,{get fallback(){return(()=>{const Fe=NR();return I(Fe,$(mR,{})),Fe})()},get children(){return[$(Pe,{get when(){return S.isLoading},get children(){const Fe=RR();return I(Fe,$(hR,{})),Fe}}),$(Pe,{get when(){return U()},get children(){const Fe=LR();return I(Fe,$(gR,{})),Fe}})]}}),null),se}}),null),I(Re,d),K})(),$(oe,{get when(){return(y()?.about??"").length>0},get children(){const K=MR();return I(K,()=>y()?.about),K}}),(()=>{const K=UR(),re=K.firstChild,de=re.firstChild,Te=de.nextSibling;return I(Te,$(oe,{get when(){return ne.isFetched},get fallback(){return WR()},get children(){return z().length}})),I(K,$(oe,{get when(){return!t().hideCount},get children(){const Re=BR(),se=Re.firstChild,Fe=se.nextSibling;return I(Fe,$(oe,{get when(){return v()},get fallback(){return(()=>{const un=qR();return un.$$click=()=>m(!0),un})()},keyed:!0,get children(){return $(GR,{get pubkey(){return e.pubkey}})}})),Re}}),null),K})(),$(oe,{get when(){return(y()?.website??"").length>0},get children(){const K=DR();return I(K,$(oe,{get when(){return y()?.website},keyed:!0,children:re=>(()=>{const de=KR(),Te=de.firstChild;return I(Te,$(ku,{})),I(de,$(au,{class:"text-blue-500 underline",href:re}),null),de})()})),K}})]}}),(()=>{const K=HR();return I(K,$(Ui,{get events(){return te()}})),K})()]}})};st(["click"]);function QR(e,t){for(var r=-1,s=e==null?0:e.length;++r<s&&t(e[r],r,e)!==!1;);return e}var ZR=QR,XR=Kr,YR=function(){try{var e=XR(Object,"defineProperty");return e({},"",{}),e}catch{}}(),jg=YR,M0=jg;function JR(e,t,r){t=="__proto__"&&M0?M0(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var zg=JR,eL=zg,tL=Pc,nL=Object.prototype,rL=nL.hasOwnProperty;function iL(e,t,r){var s=e[t];(!(rL.call(e,t)&&tL(s,r))||r===void 0&&!(t in e))&&eL(e,t,r)}var Cu=iL,sL=Cu,oL=zg;function aL(e,t,r,s){var o=!r;r||(r={});for(var l=-1,c=t.length;++l<c;){var u=t[l],d=s?s(r[u],e[u],u,r,e):void 0;d===void 0&&(d=e[u]),o?oL(r,u,d):sL(r,u,d)}return r}var Rs=aL,lL=Rs,cL=Sa;function uL(e,t){return e&&lL(t,cL(t),e)}var fL=uL;function dL(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var hL=dL,pL=Rn,gL=yu,vL=hL,mL=Object.prototype,bL=mL.hasOwnProperty;function yL(e){if(!pL(e))return vL(e);var t=gL(e),r=[];for(var s in e)s=="constructor"&&(t||!bL.call(e,s))||r.push(s);return r}var _L=yL,wL=Cg,$L=_L,xL=Eg;function kL(e){return xL(e)?wL(e,!0):$L(e)}var Su=kL,CL=Rs,SL=Su;function EL(e,t){return e&&CL(t,SL(t),e)}var TL=EL,ra={exports:{}};ra.exports;(function(e,t){var r=$n,s=t&&!t.nodeType&&t,o=s&&!0&&e&&!e.nodeType&&e,l=o&&o.exports===s,c=l?r.Buffer:void 0,u=c?c.allocUnsafe:void 0;function d(p,h){if(h)return p.slice();var v=p.length,m=u?u(v):new p.constructor(v);return p.copy(m),m}e.exports=d})(ra,ra.exports);var AL=ra.exports;function IL(e,t){var r=-1,s=e.length;for(t||(t=Array(s));++r<s;)t[r]=e[r];return t}var RL=IL,LL=Rs,OL=du;function PL(e,t){return LL(e,OL(e),t)}var ML=PL,BL=Sg,UL=BL(Object.getPrototypeOf,Object),Eu=UL,DL=fu,HL=Eu,FL=du,jL=$g,zL=Object.getOwnPropertySymbols,NL=zL?function(e){for(var t=[];e;)DL(t,FL(e)),e=HL(e);return t}:jL,Ng=NL,WL=Rs,qL=Ng;function KL(e,t){return WL(e,qL(e),t)}var GL=KL,VL=wg,QL=Ng,ZL=Su;function XL(e){return VL(e,ZL,QL)}var Tu=XL,YL=Object.prototype,JL=YL.hasOwnProperty;function eO(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&JL.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var tO=eO,B0=_g;function nO(e){var t=new e.constructor(e.byteLength);return new B0(t).set(new B0(e)),t}var Au=nO,rO=Au;function iO(e,t){var r=t?rO(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var sO=iO,oO=/\w*$/;function aO(e){var t=new e.constructor(e.source,oO.exec(e));return t.lastIndex=e.lastIndex,t}var lO=aO,U0=Ti,D0=U0?U0.prototype:void 0,H0=D0?D0.valueOf:void 0;function cO(e){return H0?Object(H0.call(e)):{}}var uO=cO,fO=Au;function dO(e,t){var r=t?fO(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var hO=dO,pO=Au,gO=sO,vO=lO,mO=uO,bO=hO,yO="[object Boolean]",_O="[object Date]",wO="[object Map]",$O="[object Number]",xO="[object RegExp]",kO="[object Set]",CO="[object String]",SO="[object Symbol]",EO="[object ArrayBuffer]",TO="[object DataView]",AO="[object Float32Array]",IO="[object Float64Array]",RO="[object Int8Array]",LO="[object Int16Array]",OO="[object Int32Array]",PO="[object Uint8Array]",MO="[object Uint8ClampedArray]",BO="[object Uint16Array]",UO="[object Uint32Array]";function DO(e,t,r){var s=e.constructor;switch(t){case EO:return pO(e);case yO:case _O:return new s(+e);case TO:return gO(e,r);case AO:case IO:case RO:case LO:case OO:case PO:case MO:case BO:case UO:return bO(e,r);case wO:return new s;case $O:case CO:return new s(e);case xO:return vO(e);case kO:return new s;case SO:return mO(e)}}var HO=DO,FO=Rn,F0=Object.create,jO=function(){function e(){}return function(t){if(!FO(t))return{};if(F0)return F0(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),zO=jO,NO=zO,WO=Eu,qO=yu;function KO(e){return typeof e.constructor=="function"&&!qO(e)?NO(WO(e)):{}}var GO=KO,VO=Ea,QO=Ir,ZO="[object Map]";function XO(e){return QO(e)&&VO(e)==ZO}var YO=XO,JO=YO,eP=mu,j0=bu,z0=j0&&j0.isMap,tP=z0?eP(z0):JO,nP=tP,rP=Ea,iP=Ir,sP="[object Set]";function oP(e){return iP(e)&&rP(e)==sP}var aP=oP,lP=aP,cP=mu,N0=bu,W0=N0&&N0.isSet,uP=W0?cP(W0):lP,fP=uP,dP=uu,hP=ZR,pP=Cu,gP=fL,vP=TL,mP=AL,bP=RL,yP=ML,_P=GL,wP=Tg,$P=Tu,xP=Ea,kP=tO,CP=HO,SP=GO,EP=Pn,TP=pu,AP=nP,IP=Rn,RP=fP,LP=Sa,OP=Su,PP=1,MP=2,BP=4,Wg="[object Arguments]",UP="[object Array]",DP="[object Boolean]",HP="[object Date]",FP="[object Error]",qg="[object Function]",jP="[object GeneratorFunction]",zP="[object Map]",NP="[object Number]",Kg="[object Object]",WP="[object RegExp]",qP="[object Set]",KP="[object String]",GP="[object Symbol]",VP="[object WeakMap]",QP="[object ArrayBuffer]",ZP="[object DataView]",XP="[object Float32Array]",YP="[object Float64Array]",JP="[object Int8Array]",eM="[object Int16Array]",tM="[object Int32Array]",nM="[object Uint8Array]",rM="[object Uint8ClampedArray]",iM="[object Uint16Array]",sM="[object Uint32Array]",Ke={};Ke[Wg]=Ke[UP]=Ke[QP]=Ke[ZP]=Ke[DP]=Ke[HP]=Ke[XP]=Ke[YP]=Ke[JP]=Ke[eM]=Ke[tM]=Ke[zP]=Ke[NP]=Ke[Kg]=Ke[WP]=Ke[qP]=Ke[KP]=Ke[GP]=Ke[nM]=Ke[rM]=Ke[iM]=Ke[sM]=!0;Ke[FP]=Ke[qg]=Ke[VP]=!1;function Fo(e,t,r,s,o,l){var c,u=t&PP,d=t&MP,p=t&BP;if(r&&(c=o?r(e,s,o,l):r(e)),c!==void 0)return c;if(!IP(e))return e;var h=EP(e);if(h){if(c=kP(e),!u)return bP(e,c)}else{var v=xP(e),m=v==qg||v==jP;if(TP(e))return mP(e,u);if(v==Kg||v==Wg||m&&!o){if(c=d||m?{}:SP(e),!u)return d?_P(e,vP(c,e)):yP(e,gP(c,e))}else{if(!Ke[v])return o?e:{};c=CP(e,v,u)}}l||(l=new dP);var y=l.get(e);if(y)return y;l.set(e,c),RP(e)?e.forEach(function(S){c.add(Fo(S,t,r,S,e,l))}):AP(e)&&e.forEach(function(S,L){c.set(L,Fo(S,t,r,L,e,l))});var w=p?d?$P:wP:d?OP:LP,k=h?void 0:w(e);return hP(k||e,function(S,L){k&&(L=S,S=e[L]),pP(c,L,Fo(S,t,r,L,e,l))}),c}var oM=Fo;function aM(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var lM=aM;function cM(e,t,r){var s=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var l=Array(o);++s<o;)l[s]=e[s+t];return l}var uM=cM,fM=Aa,dM=uM;function hM(e,t){return t.length<2?e:fM(e,dM(t,0,-1))}var pM=hM,gM=Fi,vM=lM,mM=pM,bM=ji;function yM(e,t){return t=gM(t,e),e=mM(e,t),e==null||delete e[bM(vM(t))]}var _M=yM,wM=Ai,$M=Eu,xM=Ir,kM="[object Object]",CM=Function.prototype,SM=Object.prototype,Gg=CM.toString,EM=SM.hasOwnProperty,TM=Gg.call(Object);function AM(e){if(!xM(e)||wM(e)!=kM)return!1;var t=$M(e);if(t===null)return!0;var r=EM.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Gg.call(r)==TM}var IM=AM,RM=IM;function LM(e){return RM(e)?void 0:e}var OM=LM,q0=Ti,PM=hu,MM=Pn,K0=q0?q0.isConcatSpreadable:void 0;function BM(e){return MM(e)||PM(e)||!!(K0&&e&&e[K0])}var UM=BM,DM=fu,HM=UM;function Vg(e,t,r,s,o){var l=-1,c=e.length;for(r||(r=HM),o||(o=[]);++l<c;){var u=e[l];t>0&&r(u)?t>1?Vg(u,t-1,r,s,o):DM(o,u):s||(o[o.length]=u)}return o}var FM=Vg,jM=FM;function zM(e){var t=e==null?0:e.length;return t?jM(e,1):[]}var NM=zM;function WM(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var qM=WM,KM=qM,G0=Math.max;function GM(e,t,r){return t=G0(t===void 0?e.length-1:t,0),function(){for(var s=arguments,o=-1,l=G0(s.length-t,0),c=Array(l);++o<l;)c[o]=s[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=s[o];return u[t]=r(c),KM(e,this,u)}}var VM=GM;function QM(e){return function(){return e}}var ZM=QM,XM=ZM,V0=jg,YM=Bg,JM=V0?function(e,t){return V0(e,"toString",{configurable:!0,enumerable:!1,value:XM(t),writable:!0})}:YM,eB=JM,tB=800,nB=16,rB=Date.now;function iB(e){var t=0,r=0;return function(){var s=rB(),o=nB-(s-r);if(r=s,o>0){if(++t>=tB)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var sB=iB,oB=eB,aB=sB,lB=aB(oB),cB=lB,uB=NM,fB=VM,dB=cB;function hB(e){return dB(fB(e,void 0,uB),e+"")}var pB=hB,gB=$u,vB=oM,mB=_M,bB=Fi,yB=Rs,_B=OM,wB=pB,$B=Tu,xB=1,kB=2,CB=4,SB=wB(function(e,t){var r={};if(e==null)return r;var s=!1;t=gB(t,function(l){return l=bB(l,e),s||(s=l.length>1),l}),yB(e,$B(e),r),s&&(r=vB(r,xB|kB|CB,_B));for(var o=t.length;o--;)mB(r,t[o]);return r}),EB=SB;const TB=ws(EB);var AB="Expected a function";function IB(e){if(typeof e!="function")throw new TypeError(AB);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var RB=IB,LB=Cu,OB=Fi,PB=gu,Q0=Rn,MB=ji;function BB(e,t,r,s){if(!Q0(e))return e;t=OB(t,e);for(var o=-1,l=t.length,c=l-1,u=e;u!=null&&++o<l;){var d=MB(t[o]),p=r;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=c){var h=u[d];p=s?s(h,d,u):void 0,p===void 0&&(p=Q0(h)?h:PB(t[o+1])?[]:{})}LB(u,d,p),u=u[d]}return e}var UB=BB,DB=Aa,HB=UB,FB=Fi;function jB(e,t,r){for(var s=-1,o=t.length,l={};++s<o;){var c=t[s],u=DB(e,c);r(u,c)&&HB(l,FB(c,e),u)}return l}var zB=jB,NB=$u,WB=xu,qB=zB,KB=Tu;function GB(e,t){if(e==null)return{};var r=NB(KB(e),function(s){return[s]});return t=WB(t),qB(e,r,function(s,o){return t(s,o[0])})}var VB=GB,QB=xu,ZB=RB,XB=VB;function YB(e,t){return XB(e,ZB(QB(t)))}var JB=YB;const eU=ws(JB),tU=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),nU=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),rU=P('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),iU=P('<div><span class="font-bold">その他の項目</span><div>'),sU=P('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),oU=P('<div class="h-12 shrink-0">'),aU=P('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),lU="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",cU="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",uU=new RegExp(`^${lU}$`),Qg=new RegExp(`^${cU}$`),fU=e=>uU.test(e),dU=e=>Qg.test(e),hU=e=>{const t=Tr(),{config:r}=He(),{profile:s,invalidateProfile:o,query:l}=Bi(()=>cn([t()])(([H])=>({pubkey:H}))),{updateProfile:c}=Ca(),[u,d]=be(""),[p,h]=be(""),[v,m]=be(""),[y,w]=be(""),[k,S]=be(""),[L,U]=be(""),[B,R]=be(""),[E,O]=be(""),W=Nr({mutationKey:["updateProfile"],mutationFn:(...H)=>c(...H).then(Z=>Promise.allSettled(Z.map(Er(1e4)))),onSuccess:H=>{const Z=H.filter(te=>te.status==="fulfilled").length,he=H.length-Z;Z===H.length?window.alert("更新しました"):Z>0?window.alert(`${he}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),o().then(()=>l.refetch()).catch(te=>console.error(te)),e.onClose()},onError:H=>{console.error("failed to delete",H)}}),z=()=>l.isLoading||l.isError||W.isLoading,ne=()=>TB(s(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),V=H=>{H.preventDefault();const Z=t();if(Z==null)return;const he=eU({picture:u(),banner:p(),name:v(),display_name:y(),about:k(),website:L(),nip05:B(),lud06:fU(E())?E():null,lud16:dU(E())?E():null},te=>te==null||te.length===0);W.mutate({relayUrls:r().relayUrls,pubkey:Z,profile:he,otherProperties:ne()})},Y=H=>H.key==="Enter"&&H.preventDefault();return wn(()=>{const H=s();H!=null&&(l.refetch().catch(Z=>console.error(Z)),lc(()=>{d(Z=>H.picture??Z),h(Z=>H.banner??Z),m(Z=>H.name??Z),w(Z=>H.display_name??Z),S(Z=>H.about??Z),U(Z=>H.website??Z),R(Z=>H.nip05??Z),H.lud16!=null?O(H.lud16):H.lud06!=null&&O(H.lud06)}))}),$(Is,{closeButton:()=>$(o1,{}),get onClose(){return e.onClose},get children(){return[(()=>{const H=rU(),Z=H.firstChild;return I(H,$(oe,{get when(){return p().length>0},get fallback(){return oU()},keyed:!0,get children(){const he=tU(),te=he.firstChild;return Ee(()=>St(te,"src",p())),he}}),Z),I(Z,$(oe,{get when(){return u().length>0},get children(){const he=nU();return Ee(()=>St(he,"src",u())),he}})),H})(),(()=>{const H=sU(),Z=H.firstChild,he=Z.firstChild,te=he.firstChild,K=te.nextSibling,re=he.nextSibling,de=re.firstChild,Te=de.nextSibling,Re=re.nextSibling,se=Re.firstChild,Fe=se.nextSibling,un=Fe.firstChild,J=un.nextSibling,Je=Re.nextSibling,Dt=Je.firstChild,ae=Dt.nextSibling,et=Je.nextSibling,ot=et.firstChild,Tt=ot.nextSibling,Ht=et.nextSibling,At=Ht.firstChild,Ft=At.nextSibling,lt=Ht.nextSibling,It=lt.firstChild,vt=It.nextSibling,dt=lt.nextSibling,pe=dt.firstChild,Ze=pe.nextSibling,Me=Ze.nextSibling,Be=dt.nextSibling,Ue=Be.firstChild,at=Ue.nextSibling;return Z.addEventListener("submit",V),K.$$keydown=Y,K.addEventListener("blur",G=>d(G.currentTarget.value)),Te.$$keydown=Y,Te.addEventListener("blur",G=>h(G.currentTarget.value)),J.$$keydown=Y,J.addEventListener("change",G=>m(G.currentTarget.value)),ae.$$keydown=Y,ae.addEventListener("change",G=>w(G.currentTarget.value)),Tt.addEventListener("change",G=>S(G.currentTarget.value)),Ft.$$keydown=Y,Ft.addEventListener("change",G=>U(G.currentTarget.value)),vt.$$keydown=Y,vt.addEventListener("change",G=>R(G.currentTarget.value)),Me.$$keydown=Y,Me.addEventListener("change",G=>O(G.currentTarget.value)),I(Z,$(oe,{get when(){return Object.entries(ne()).length>0},get children(){const G=iU(),ht=G.firstChild,Mn=ht.nextSibling;return I(Mn,$(Bt,{get each(){return Object.entries(ne())},children:([jt,Rt])=>(()=>{const Xt=aU(),Bn=Xt.firstChild,er=Bn.nextSibling;return I(Bn,jt),I(er,Rt),Xt})()})),G}}),Be),at.$$click=()=>e.onClose(),I(Z,$(oe,{get when(){return W.isLoading},children:"保存中..."}),null),Ee(G=>{const ht=z(),Mn=z(),jt=z(),Rt=z(),Xt=z(),Bn=z(),er=Qg.source,Gr=z(),Vr=z(),Qr=W.isLoading;return ht!==G._v$&&(K.disabled=G._v$=ht),Mn!==G._v$2&&(Te.disabled=G._v$2=Mn),jt!==G._v$3&&(J.disabled=G._v$3=jt),Rt!==G._v$4&&(ae.disabled=G._v$4=Rt),Xt!==G._v$5&&(Tt.disabled=G._v$5=Xt),Bn!==G._v$6&&(Ft.disabled=G._v$6=Bn),er!==G._v$7&&St(vt,"pattern",G._v$7=er),Gr!==G._v$8&&(vt.disabled=G._v$8=Gr),Vr!==G._v$9&&(Me.disabled=G._v$9=Vr),Qr!==G._v$10&&(Ue.disabled=G._v$10=Qr),G},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Ee(()=>K.value=u()),Ee(()=>Te.value=p()),Ee(()=>J.value=v()),Ee(()=>ae.value=y()),Ee(()=>Tt.value=k()),Ee(()=>Ft.value=L()),Ee(()=>vt.value=B()),Ee(()=>Me.value=E()),H})()]}})};st(["keydown","click"]);const pU=()=>{const e=Tr(),{modalState:t,showProfile:r,closeModal:s}=Ar();return $(oe,{get when(){return t()},keyed:!0,children:o=>$(yn,{get children(){return[$(Pe,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:l=>$(VR,{pubkey:l,onClose:s})}),$(Pe,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return $(hU,{onClose:()=>cn([e()])(([l])=>{r(l)})})}}),$(Pe,{get when(){return o.type==="AddColumn"},get children(){return $(fR,{onClose:s})}}),$(Pe,{get when(){return o.type==="About"},get children(){return $(cR,{onClose:s})}})]}})})},gU=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),vU=(e={})=>(()=>{const t=gU();return Qe(t,e,!0,!0),t})(),mU=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),Z0=(e={})=>(()=>{const t=mU();return Qe(t,e,!0,!0),t})(),bU=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),yU=(e={})=>(()=>{const t=bU();return Qe(t,e,!0,!0),t})(),_U=P('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),wU=P('<div class="py-2"><h3 class="font-bold">リレー</h3><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Rc=P('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),$U=P('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),xU=P('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),kU=P('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),CU=P('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),SU=P('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),EU=P('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),TU=P('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),AU=P('<div class="p-4"><h2 class="flex-1 text-center text-lg font-bold">設定'),IU=()=>{const e=Tr(),{showProfile:t,showProfileEdit:r}=Ar();return(()=>{const s=_U(),o=s.firstChild,l=o.nextSibling,c=l.firstChild,u=c.nextSibling;return c.$$click=()=>cn([e()])(([d])=>{t(d)}),u.$$click=()=>r(),s})()},RU=()=>{const{config:e,addRelay:t,removeRelay:r}=He(),[s,o]=be(""),l=c=>{c.preventDefault(),s().length!==0&&(t(s()),o(""))};return(()=>{const c=wU(),u=c.firstChild,d=u.nextSibling,p=d.nextSibling,h=p.firstChild;return I(d,$(Bt,{get each(){return e().relayUrls},children:v=>(()=>{const m=Rc(),y=m.firstChild,w=y.nextSibling;return I(y,v),w.$$click=()=>r(v),I(w,$(ys,{})),m})()})),p.addEventListener("submit",l),h.addEventListener("change",v=>o(v.currentTarget.value)),Ee(()=>h.value=s()),c})()},LU=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],OU=()=>{const{config:e,setConfig:t}=He(),r=s=>{t(o=>({...o,dateFormat:s}))};return(()=>{const s=$U(),o=s.firstChild,l=o.nextSibling;return I(l,$(Bt,{each:LU,children:({id:c,name:u,example:d})=>(()=>{const p=xU(),h=p.firstChild,v=h.nextSibling;return h.$$click=()=>r(c),I(h,u),I(v,d),Ee(m=>{const y=e().dateFormat===c,w=e().dateFormat===c,k=e().dateFormat!==c,S=e().dateFormat!==c;return y!==m._v$&&h.classList.toggle("bg-rose-300",m._v$=y),w!==m._v$2&&h.classList.toggle("text-white",m._v$2=w),k!==m._v$3&&h.classList.toggle("bg-white",m._v$3=k),S!==m._v$4&&h.classList.toggle("text-rose-300",m._v$4=S),m},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()})),s})()},ps=e=>(()=>{const t=kU();return t.$$click=r=>e.onClick(r),Ee(r=>{const s=!e.value,o=!e.value,l=!!e.value,c=!!e.value,u=e.value;return s!==r._v$5&&t.classList.toggle("bg-white",r._v$5=s),o!==r._v$6&&t.classList.toggle("justify-start",r._v$6=o),l!==r._v$7&&t.classList.toggle("bg-rose-300",r._v$7=l),c!==r._v$8&&t.classList.toggle("justify-end",r._v$8=c),u!==r._v$9&&St(t,"area-label",r._v$9=u),r},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),PU=()=>{const{config:e,setConfig:t}=He(),r=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},s=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=CU(),l=o.firstChild,c=l.nextSibling,u=c.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,I(u,$(ps,{get value(){return e().useEmojiReaction},onClick:()=>r()}),null),I(d,$(ps,{get value(){return e().showEmojiReaction},onClick:()=>s()}),null),o})()},MU=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:r,removeMutedKeyword:s}=He(),[o,l]=be(""),c=u=>{u.preventDefault(),o().length!==0&&(r(o()),l(""))};return[(()=>{const u=SU(),d=u.firstChild,p=d.nextSibling;return I(p,$(Bt,{get each(){return e().mutedPubkeys},children:h=>(()=>{const v=Rc(),m=v.firstChild,y=m.nextSibling;return I(m,$(ka,{pubkey:h})),y.$$click=()=>t(h),I(y,$(ys,{})),v})()})),u})(),(()=>{const u=EU(),d=u.firstChild,p=d.nextSibling,h=p.nextSibling,v=h.firstChild;return I(p,$(Bt,{get each(){return e().mutedKeywords},children:m=>(()=>{const y=Rc(),w=y.firstChild,k=w.nextSibling;return I(w,m),k.$$click=()=>s(m),I(k,$(ys,{})),y})()})),h.addEventListener("submit",c),v.addEventListener("change",m=>l(m.currentTarget.value)),Ee(()=>v.value=o()),u})()]},BU=()=>{const{config:e,setConfig:t}=He(),r=()=>{t(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},s=()=>{t(l=>({...l,showImage:!(l.showImage??!0)}))},o=()=>{t(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=TU(),c=l.firstChild,u=c.nextSibling,d=u.firstChild;d.firstChild;const p=d.nextSibling;p.firstChild;const h=p.nextSibling;return h.firstChild,I(d,$(ps,{get value(){return e().keepOpenPostForm},onClick:()=>r()}),null),I(p,$(ps,{get value(){return e().showImage},onClick:()=>s()}),null),I(h,$(ps,{get value(){return e().hideCount},onClick:()=>o()}),null),l})()},UU=e=>$(Is,{get onClose(){return e.onClose},get children(){const t=AU();return t.firstChild,I(t,$(IU,{}),null),I(t,$(RU,{}),null),I(t,$(OU,{}),null),I(t,$(PU,{}),null),I(t,$(BU,{}),null),I(t,$(MU,{}),null),t}});st(["click"]);const DU=P('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),HU=P('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),FU=P('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),jU=()=>{let e,t;const{saveColumn:r}=He(),s=As(),[o,l]=be(""),c=u=>{u.preventDefault(),r(ou({query:o()})),s({command:"moveToLastColumn"}).catch(d=>console.log(d)),e?.close(),l("")};return $(Yp,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=HU();return I(u,$(Z0,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=DU(),d=u.firstChild,p=d.nextSibling;u.addEventListener("submit",c),d.addEventListener("change",v=>l(v.currentTarget.value));const h=t;return typeof h=="function"?_n(h,d):t=d,I(p,$(Z0,{})),Ee(()=>d.value=o()),u}})},zU=()=>{let e;const{showAddColumn:t,showAbout:r}=Ar(),{config:s}=He(),[o,l]=be(!1),[c,u]=be(!1),d=()=>{e?.focus(),e?.click()},p=()=>l(!0),h=()=>l(!1),v=()=>l(m=>!m);return Cc(()=>({commandType:"openPostForm",handler:()=>{p(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const m=FU(),y=m.firstChild,w=y.firstChild,k=w.firstChild,S=w.nextSibling,L=S.nextSibling,U=L.firstChild,B=U.nextSibling,R=B.nextSibling,E=R.firstChild,O=y.nextSibling;return k.$$click=()=>v(),I(k,$(yU,{})),I(w,$(jU,{}),null),U.$$click=()=>t(),I(U,$(Cp,{})),B.$$click=()=>u(W=>!W),I(B,$(vU,{})),R.$$click=()=>r(),I(O,$(ug,{textAreaRef:W=>{e=W},onClose:h})),I(m,$(oe,{get when(){return c()},get children(){return $(UU,{onClose:()=>u(!1)})}}),null),Ee(W=>{const z=Lc("images/rabbit_app_256.png"),ne=!!(o()||s().keepOpenPostForm),V=!(o()||s().keepOpenPostForm);return z!==W._v$&&St(E,"src",W._v$=z),ne!==W._v$2&&O.classList.toggle("static",W._v$2=ne),V!==W._v$3&&O.classList.toggle("hidden",W._v$3=V),W},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m})()};st(["click"]);var NU=$n,WU=function(){return NU.Date.now()},qU=WU,KU=/\s/;function GU(e){for(var t=e.length;t--&&KU.test(e.charAt(t)););return t}var VU=GU,QU=VU,ZU=/^\s+/;function XU(e){return e&&e.slice(0,QU(e)+1).replace(ZU,"")}var YU=XU,JU=YU,X0=Rn,eD=Ta,Y0=0/0,tD=/^[-+]0x[0-9a-f]+$/i,nD=/^0b[01]+$/i,rD=/^0o[0-7]+$/i,iD=parseInt;function sD(e){if(typeof e=="number")return e;if(eD(e))return Y0;if(X0(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=X0(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=JU(e);var r=nD.test(e);return r||rD.test(e)?iD(e.slice(2),r?2:8):tD.test(e)?Y0:+e}var oD=sD,aD=Rn,oc=qU,J0=oD,lD="Expected a function",cD=Math.max,uD=Math.min;function fD(e,t,r){var s,o,l,c,u,d,p=0,h=!1,v=!1,m=!0;if(typeof e!="function")throw new TypeError(lD);t=J0(t)||0,aD(r)&&(h=!!r.leading,v="maxWait"in r,l=v?cD(J0(r.maxWait)||0,t):l,m="trailing"in r?!!r.trailing:m);function y(O){var W=s,z=o;return s=o=void 0,p=O,c=e.apply(z,W),c}function w(O){return p=O,u=setTimeout(L,t),h?y(O):c}function k(O){var W=O-d,z=O-p,ne=t-W;return v?uD(ne,l-z):ne}function S(O){var W=O-d,z=O-p;return d===void 0||W>=t||W<0||v&&z>=l}function L(){var O=oc();if(S(O))return U(O);u=setTimeout(L,k(O))}function U(O){return u=void 0,m&&s?y(O):(s=o=void 0,c)}function B(){u!==void 0&&clearTimeout(u),p=0,s=d=o=u=void 0}function R(){return u===void 0?c:U(oc())}function E(){var O=oc(),W=S(O);if(s=arguments,o=this,d=O,W){if(u===void 0)return w(d);if(v)return clearTimeout(u),u=setTimeout(L,t),y(d)}return u===void 0&&(u=setTimeout(L,t)),c}return E.cancel=B,E.flush=R,E}var dD=fD,hD=dD,pD=Rn,gD="Expected a function";function vD(e,t,r){var s=!0,o=!0;if(typeof e!="function")throw new TypeError(gD);return pD(r)&&(s="leading"in r?!!r.leading:s,o="trailing"in r?!!r.trailing:o),hD(e,t,{leading:s,maxWait:t,trailing:o})}var mD=vD;const bD=ws(mD),yD=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],_D=e=>{const t=new Map;return e.forEach(r=>{t.set(r.key,r)}),t},wD=({shortcuts:e=yD,onShortcut:t})=>{const r=_D(e);wn(()=>{const s=bD(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const l=r.get(o.key);l!=null&&t(l)},50);window.addEventListener("keydown",s),Cr(()=>{window.removeEventListener("keydown",s)})})},$D=()=>{const e=As();wD({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),r=>console.error(r))}})},xD=P('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),ED=()=>{$D();const e=jw(),{persistStatus:t}=Ww(),r=$a(),{config:s,initializeColumns:o}=He(),l=Tr();return xr(()=>{s().relayUrls.map(async c=>{(await r().ensureRelay(c)).on("notice",d=>{console.error(`NOTICE: ${c}: ${d}`)})})}),xr(()=>{const c=l();c!=null&&o({pubkey:c})}),wn(()=>{t().loggedIn||e("/hello")}),(()=>{const c=xD();return I(c,$(zU,{}),null),I(c,$(tR,{}),null),I(c,$(pU,{}),null),c})()};export{ED as default};
//# sourceMappingURL=Home-c769b886.js.map
