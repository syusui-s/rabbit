import{S as n1,s as lc,n as Iw,i as lh,a as ch,t as Rw,f as Lw,c as Ow,r as uh,b as Pw,d as r1,g as Mw,u as Si,e as i1,h as cc,o as qr,j as kn,k as vs,l as sa,p as fh,m as Qe,q as P,v as it,w as ye,x as I,y as $,z as se,A as Bw,B as _r,C as Le,D as Uw,E as Rn,F as Bt,G as Fe,H as oa,M as Me,I as $n,J as St,K as Dw,L as Hw,N as Fw,O as jw,P as zw,Q as Nw,R as Ww}from"./index-eceed010.js";import{c as vi,u as ui,a as qw,b as Kw,r as Lc,d as Gw}from"./usePersistStatus-5327eec6.js";class Vw extends n1{constructor(t,r){super(),this.client=t,this.options=r,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(r)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),dh(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return uc(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return uc(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,r){const s=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),lc(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const a=this.hasListeners();a&&hh(this.currentQuery,o,this.options,s)&&this.executeFetch(),this.updateResult(r),a&&(this.currentQuery!==o||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const c=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==s.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)}getOptimisticResult(t){const r=this.client.getQueryCache().build(this.client,t);return this.createResult(r,t)}getCurrentResult(){return this.currentResult}trackResult(t){const r={};return Object.keys(t).forEach(s=>{Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),t[s])})}),r}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...r}={}){return this.fetch({...r,meta:{refetchPage:t}})}fetchOptimistic(t){const r=this.client.defaultQueryOptions(t),s=this.client.getQueryCache().build(this.client,r);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,r))}fetch(t){var r;return this.executeFetch({...t,cancelRefetch:(r=t.cancelRefetch)!=null?r:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let r=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(r=r.catch(Iw)),r}updateStaleTimeout(){if(this.clearStaleTimeout(),lh||this.currentResult.isStale||!ch(this.options.staleTime))return;const r=Rw(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},r)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(lh||this.options.enabled===!1||!ch(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Lw.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,r){const s=this.currentQuery,o=this.options,a=this.currentResult,c=this.currentResultState,u=this.currentResultOptions,d=t!==s,p=d?t.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:v}=t;let{dataUpdatedAt:b,error:_,errorUpdatedAt:w,fetchStatus:k,status:S}=v,L=!1,U=!1,M;if(r._optimisticResults){const q=this.hasListeners(),ie=!q&&dh(t,r),G=q&&hh(t,s,r,o);(ie||G)&&(k=Ow(t.options.networkMode)?"fetching":"paused",b||(S="loading")),r._optimisticResults==="isRestoring"&&(k="idle")}if(r.keepPreviousData&&!v.dataUpdatedAt&&h!=null&&h.isSuccess&&S!=="error")M=h.data,b=h.dataUpdatedAt,S=h.status,L=!0;else if(r.select&&typeof v.data<"u")if(a&&v.data===c?.data&&r.select===this.selectFn)M=this.selectResult;else try{this.selectFn=r.select,M=r.select(v.data),M=uh(a?.data,M,r),this.selectResult=M,this.selectError=null}catch(q){this.selectError=q}else M=v.data;if(typeof r.placeholderData<"u"&&typeof M>"u"&&S==="loading"){let q;if(a!=null&&a.isPlaceholderData&&r.placeholderData===u?.placeholderData)q=a.data;else if(q=typeof r.placeholderData=="function"?r.placeholderData():r.placeholderData,r.select&&typeof q<"u")try{q=r.select(q),this.selectError=null}catch(ie){this.selectError=ie}typeof q<"u"&&(S="success",M=uh(a?.data,q,r),U=!0)}this.selectError&&(_=this.selectError,M=this.selectResult,w=Date.now(),S="error");const R=k==="fetching",E=S==="loading",O=S==="error";return{status:S,fetchStatus:k,isLoading:E,isSuccess:S==="success",isError:O,isInitialLoading:E&&R,data:M,dataUpdatedAt:b,error:_,errorUpdatedAt:w,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>p.dataUpdateCount||v.errorUpdateCount>p.errorUpdateCount,isFetching:R,isRefetching:R&&!E,isLoadingError:O&&v.dataUpdatedAt===0,isPaused:k==="paused",isPlaceholderData:U,isPreviousData:L,isRefetchError:O&&v.dataUpdatedAt!==0,isStale:Oc(t,r),refetch:this.refetch,remove:this.remove}}updateResult(t){const r=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,lc(s,r))return;this.currentResult=s;const o={cache:!0},a=()=>{if(!r)return!0;const{notifyOnChangeProps:c}=this.options;if(c==="all"||!c&&!this.trackedProps.size)return!0;const u=new Set(c??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const p=d;return this.currentResult[p]!==r[p]&&u.has(p)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const r=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(r?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const r={};t.type==="success"?r.onSuccess=!t.manual:t.type==="error"&&!Pw(t.error)&&(r.onError=!0),this.updateResult(r),this.hasListeners()&&this.updateTimers()}notify(t){r1.batch(()=>{if(t.onSuccess){var r,s,o,a;(r=(s=this.options).onSuccess)==null||r.call(s,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var c,u,d,p;(c=(u=this.options).onError)==null||c.call(u,this.currentResult.error),(d=(p=this.options).onSettled)==null||d.call(p,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Qw(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function dh(e,t){return Qw(e,t)||e.state.dataUpdatedAt>0&&uc(e,t,t.refetchOnMount)}function uc(e,t,r){if(t.enabled!==!1){const s=typeof r=="function"?r(e):r;return s==="always"||s!==!1&&Oc(e,t)}return!1}function hh(e,t,r,s){return r.enabled!==!1&&(e!==t||s.enabled===!1)&&(!r.suspense||e.state.status!=="error")&&Oc(e,r)}function Oc(e,t){return e.isStaleByTime(t.staleTime)}class Zw extends n1{constructor(t,r){super(),this.client=t,this.setOptions(r),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const s=this.options;this.options=this.client.defaultMutationOptions(t),lc(s,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(r=this.currentMutation)==null||r.setOptions(this.options)}onUnsubscribe(){if(!this.listeners.length){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const r={listeners:!0};t.type==="success"?r.onSuccess=!0:t.type==="error"&&(r.onError=!0),this.notify(r)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,r){return this.mutateOptions=r,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:Mw(),r={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=r}notify(t){r1.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var r,s,o,a;(r=(s=this.mutateOptions).onSuccess)==null||r.call(s,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var c,u,d,p;(c=(u=this.mutateOptions).onError)==null||c.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(p=this.mutateOptions).onSettled)==null||d.call(p,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(h=>{h(this.currentResult)})})}}function Xw(e){return typeof e=="function"}function ph(e,t,r){if(!Xw(e)){const{queryKey:s,...o}=e;return s?{...o,queryKey:s()}:e}return typeof t=="function"?{...r,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function s1(e,t){return typeof e=="function"?e(...t):!!e}function Yw(e,t){const r=Si({context:e.context}),s=Symbol("empty"),o=r.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(r,o),[c,u]=vi(a.getOptimisticResult(o)),[d,{refetch:p,mutate:h}]=i1(()=>new Promise(w=>{c.isFetching&&c.isLoading||(ui(c.data)===s&&w(void 0),w(ui(c.data)))}));cc(()=>{h(()=>ui(c.data)),p()});let v=[];const b=a.subscribe(w=>{v.push(()=>{cc(()=>{const k={...ui(w)};k.data===void 0&&(k.data=s),u(ui(k)),h(()=>ui(w.data)),p()})}),queueMicrotask(()=>{const k=v.pop();k&&k(),v=[]})});qr(()=>b()),kn(()=>{a.setOptions(o,{listeners:!1})}),vs(()=>{const w=r.defaultQueryOptions(e);a.setOptions(w)}),vs(sa(()=>c.status,()=>{if(c.isError&&!c.isFetching&&s1(a.options.useErrorBoundary,[c.error,a.getCurrentQuery()]))throw c.error}));const _={get(w,k){return k==="data"?d():Reflect.get(w,k)}};return new Proxy(c,_)}function Ei(e,t,r){const[s,o]=vi(ph(e,t,r));return vs(()=>{const a=ph(e,t,r);o(a)}),Yw(s,Vw)}function zr(e,t,r){const[s,o]=vi(fh(e,t,r)),a=Si({context:s.context}),c=new Zw(a,s),u=(v,b)=>{c.mutate(v,b).catch(Jw)},[d,p]=vi({...c.getCurrentResult(),mutate:u,mutateAsync:c.getCurrentResult().mutate});vs(()=>{const v=fh(e,t,r);o(v),c.setOptions(v)}),vs(sa(()=>d.status,()=>{if(d.isError&&s1(c.options.useErrorBoundary,[d.error]))throw d.error}));const h=c.subscribe(v=>{p({...v,mutate:u,mutateAsync:v.mutate})});return qr(h),d}function Jw(){}const e4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),o1=(e={})=>(()=>{const t=e4();return Qe(t,e,!0,!0),t})();var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function aa(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function s(){if(this instanceof s){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(r,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}),r}var zo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */zo.exports;(function(e,t){(function(){var r,s="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",c="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",p=500,h="__lodash_placeholder__",v=1,b=2,_=4,w=1,k=2,S=1,L=2,U=4,M=8,R=16,E=32,O=64,N=128,q=256,ie=512,G=30,X="...",H=800,Q=16,he=1,ee=2,K=3,te=1/0,de=9007199254740991,Te=17976931348623157e292,Re=0/0,re=4294967295,De=re-1,dn=re>>>1,Y=[["ary",N],["bind",S],["bindKey",L],["curry",M],["curryRight",R],["flip",ie],["partial",E],["partialRight",O],["rearg",q]],Ye="[object Arguments]",Dt="[object Array]",oe="[object AsyncFunction]",Je="[object Boolean]",st="[object Date]",Tt="[object DOMException]",Ht="[object Error]",At="[object Function]",Ft="[object GeneratorFunction]",lt="[object Map]",It="[object Number]",gt="[object Null]",dt="[object Object]",ve="[object Promise]",ot="[object Proxy]",ze="[object RegExp]",Ke="[object Set]",ct="[object String]",jt="[object Symbol]",fe="[object Undefined]",me="[object WeakMap]",yt="[object WeakSet]",zt="[object ArrayBuffer]",Rt="[object DataView]",Jt="[object Float32Array]",en="[object Float64Array]",hn="[object Int8Array]",Gr="[object Int16Array]",Vr="[object Int32Array]",Qr="[object Uint8Array]",Ra="[object Uint8ClampedArray]",La="[object Uint16Array]",Oa="[object Uint32Array]",Xg=/\b__p \+= '';/g,Yg=/\b(__p \+=) '' \+/g,Jg=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Lu=/&(?:amp|lt|gt|quot|#39);/g,Ou=/[&<>"']/g,ev=RegExp(Lu.source),tv=RegExp(Ou.source),nv=/<%-([\s\S]+?)%>/g,rv=/<%([\s\S]+?)%>/g,Pu=/<%=([\s\S]+?)%>/g,iv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,sv=/^\w*$/,ov=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pa=/[\\^$.*+?()[\]{}|]/g,av=RegExp(Pa.source),Ma=/^\s+/,lv=/\s/,cv=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,uv=/\{\n\/\* \[wrapped with (.+)\] \*/,fv=/,? & /,dv=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hv=/[()=,{}\[\]\/\s]/,pv=/\\(\\)?/g,gv=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Mu=/\w*$/,vv=/^[-+]0x[0-9a-f]+$/i,mv=/^0b[01]+$/i,bv=/^\[object .+?Constructor\]$/,yv=/^0o[0-7]+$/i,_v=/^(?:0|[1-9]\d*)$/,wv=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Os=/($^)/,$v=/['\n\r\u2028\u2029\\]/g,Ps="\\ud800-\\udfff",xv="\\u0300-\\u036f",kv="\\ufe20-\\ufe2f",Cv="\\u20d0-\\u20ff",Bu=xv+kv+Cv,Uu="\\u2700-\\u27bf",Du="a-z\\xdf-\\xf6\\xf8-\\xff",Sv="\\xac\\xb1\\xd7\\xf7",Ev="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Tv="\\u2000-\\u206f",Av=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Hu="A-Z\\xc0-\\xd6\\xd8-\\xde",Fu="\\ufe0e\\ufe0f",ju=Sv+Ev+Tv+Av,Ba="['’]",Iv="["+Ps+"]",zu="["+ju+"]",Ms="["+Bu+"]",Nu="\\d+",Rv="["+Uu+"]",Wu="["+Du+"]",qu="[^"+Ps+ju+Nu+Uu+Du+Hu+"]",Ua="\\ud83c[\\udffb-\\udfff]",Lv="(?:"+Ms+"|"+Ua+")",Ku="[^"+Ps+"]",Da="(?:\\ud83c[\\udde6-\\uddff]){2}",Ha="[\\ud800-\\udbff][\\udc00-\\udfff]",Zr="["+Hu+"]",Gu="\\u200d",Vu="(?:"+Wu+"|"+qu+")",Ov="(?:"+Zr+"|"+qu+")",Qu="(?:"+Ba+"(?:d|ll|m|re|s|t|ve))?",Zu="(?:"+Ba+"(?:D|LL|M|RE|S|T|VE))?",Xu=Lv+"?",Yu="["+Fu+"]?",Pv="(?:"+Gu+"(?:"+[Ku,Da,Ha].join("|")+")"+Yu+Xu+")*",Mv="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Bv="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ju=Yu+Xu+Pv,Uv="(?:"+[Rv,Da,Ha].join("|")+")"+Ju,Dv="(?:"+[Ku+Ms+"?",Ms,Da,Ha,Iv].join("|")+")",Hv=RegExp(Ba,"g"),Fv=RegExp(Ms,"g"),Fa=RegExp(Ua+"(?="+Ua+")|"+Dv+Ju,"g"),jv=RegExp([Zr+"?"+Wu+"+"+Qu+"(?="+[zu,Zr,"$"].join("|")+")",Ov+"+"+Zu+"(?="+[zu,Zr+Vu,"$"].join("|")+")",Zr+"?"+Vu+"+"+Qu,Zr+"+"+Zu,Bv,Mv,Nu,Uv].join("|"),"g"),zv=RegExp("["+Gu+Ps+Bu+Fu+"]"),Nv=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wv=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],qv=-1,Ge={};Ge[Jt]=Ge[en]=Ge[hn]=Ge[Gr]=Ge[Vr]=Ge[Qr]=Ge[Ra]=Ge[La]=Ge[Oa]=!0,Ge[Ye]=Ge[Dt]=Ge[zt]=Ge[Je]=Ge[Rt]=Ge[st]=Ge[Ht]=Ge[At]=Ge[lt]=Ge[It]=Ge[dt]=Ge[ze]=Ge[Ke]=Ge[ct]=Ge[me]=!1;var We={};We[Ye]=We[Dt]=We[zt]=We[Rt]=We[Je]=We[st]=We[Jt]=We[en]=We[hn]=We[Gr]=We[Vr]=We[lt]=We[It]=We[dt]=We[ze]=We[Ke]=We[ct]=We[jt]=We[Qr]=We[Ra]=We[La]=We[Oa]=!0,We[Ht]=We[At]=We[me]=!1;var Kv={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Gv={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Vv={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Qv={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Zv=parseFloat,Xv=parseInt,ef=typeof Qn=="object"&&Qn&&Qn.Object===Object&&Qn,Yv=typeof self=="object"&&self&&self.Object===Object&&self,vt=ef||Yv||Function("return this")(),ja=t&&!t.nodeType&&t,Ir=ja&&!0&&e&&!e.nodeType&&e,tf=Ir&&Ir.exports===ja,za=tf&&ef.process,tn=function(){try{var T=Ir&&Ir.require&&Ir.require("util").types;return T||za&&za.binding&&za.binding("util")}catch{}}(),nf=tn&&tn.isArrayBuffer,rf=tn&&tn.isDate,sf=tn&&tn.isMap,of=tn&&tn.isRegExp,af=tn&&tn.isSet,lf=tn&&tn.isTypedArray;function Nt(T,D,B){switch(B.length){case 0:return T.call(D);case 1:return T.call(D,B[0]);case 2:return T.call(D,B[0],B[1]);case 3:return T.call(D,B[0],B[1],B[2])}return T.apply(D,B)}function Jv(T,D,B,J){for(var pe=-1,Oe=T==null?0:T.length;++pe<Oe;){var ut=T[pe];D(J,ut,B(ut),T)}return J}function nn(T,D){for(var B=-1,J=T==null?0:T.length;++B<J&&D(T[B],B,T)!==!1;);return T}function e2(T,D){for(var B=T==null?0:T.length;B--&&D(T[B],B,T)!==!1;);return T}function cf(T,D){for(var B=-1,J=T==null?0:T.length;++B<J;)if(!D(T[B],B,T))return!1;return!0}function nr(T,D){for(var B=-1,J=T==null?0:T.length,pe=0,Oe=[];++B<J;){var ut=T[B];D(ut,B,T)&&(Oe[pe++]=ut)}return Oe}function Bs(T,D){var B=T==null?0:T.length;return!!B&&Xr(T,D,0)>-1}function Na(T,D,B){for(var J=-1,pe=T==null?0:T.length;++J<pe;)if(B(D,T[J]))return!0;return!1}function Ze(T,D){for(var B=-1,J=T==null?0:T.length,pe=Array(J);++B<J;)pe[B]=D(T[B],B,T);return pe}function rr(T,D){for(var B=-1,J=D.length,pe=T.length;++B<J;)T[pe+B]=D[B];return T}function Wa(T,D,B,J){var pe=-1,Oe=T==null?0:T.length;for(J&&Oe&&(B=T[++pe]);++pe<Oe;)B=D(B,T[pe],pe,T);return B}function t2(T,D,B,J){var pe=T==null?0:T.length;for(J&&pe&&(B=T[--pe]);pe--;)B=D(B,T[pe],pe,T);return B}function qa(T,D){for(var B=-1,J=T==null?0:T.length;++B<J;)if(D(T[B],B,T))return!0;return!1}var n2=Ka("length");function r2(T){return T.split("")}function i2(T){return T.match(dv)||[]}function uf(T,D,B){var J;return B(T,function(pe,Oe,ut){if(D(pe,Oe,ut))return J=Oe,!1}),J}function Us(T,D,B,J){for(var pe=T.length,Oe=B+(J?1:-1);J?Oe--:++Oe<pe;)if(D(T[Oe],Oe,T))return Oe;return-1}function Xr(T,D,B){return D===D?v2(T,D,B):Us(T,ff,B)}function s2(T,D,B,J){for(var pe=B-1,Oe=T.length;++pe<Oe;)if(J(T[pe],D))return pe;return-1}function ff(T){return T!==T}function df(T,D){var B=T==null?0:T.length;return B?Va(T,D)/B:Re}function Ka(T){return function(D){return D==null?r:D[T]}}function Ga(T){return function(D){return T==null?r:T[D]}}function hf(T,D,B,J,pe){return pe(T,function(Oe,ut,Ne){B=J?(J=!1,Oe):D(B,Oe,ut,Ne)}),B}function o2(T,D){var B=T.length;for(T.sort(D);B--;)T[B]=T[B].value;return T}function Va(T,D){for(var B,J=-1,pe=T.length;++J<pe;){var Oe=D(T[J]);Oe!==r&&(B=B===r?Oe:B+Oe)}return B}function Qa(T,D){for(var B=-1,J=Array(T);++B<T;)J[B]=D(B);return J}function a2(T,D){return Ze(D,function(B){return[B,T[B]]})}function pf(T){return T&&T.slice(0,bf(T)+1).replace(Ma,"")}function Wt(T){return function(D){return T(D)}}function Za(T,D){return Ze(D,function(B){return T[B]})}function Wi(T,D){return T.has(D)}function gf(T,D){for(var B=-1,J=T.length;++B<J&&Xr(D,T[B],0)>-1;);return B}function vf(T,D){for(var B=T.length;B--&&Xr(D,T[B],0)>-1;);return B}function l2(T,D){for(var B=T.length,J=0;B--;)T[B]===D&&++J;return J}var c2=Ga(Kv),u2=Ga(Gv);function f2(T){return"\\"+Qv[T]}function d2(T,D){return T==null?r:T[D]}function Yr(T){return zv.test(T)}function h2(T){return Nv.test(T)}function p2(T){for(var D,B=[];!(D=T.next()).done;)B.push(D.value);return B}function Xa(T){var D=-1,B=Array(T.size);return T.forEach(function(J,pe){B[++D]=[pe,J]}),B}function mf(T,D){return function(B){return T(D(B))}}function ir(T,D){for(var B=-1,J=T.length,pe=0,Oe=[];++B<J;){var ut=T[B];(ut===D||ut===h)&&(T[B]=h,Oe[pe++]=B)}return Oe}function Ds(T){var D=-1,B=Array(T.size);return T.forEach(function(J){B[++D]=J}),B}function g2(T){var D=-1,B=Array(T.size);return T.forEach(function(J){B[++D]=[J,J]}),B}function v2(T,D,B){for(var J=B-1,pe=T.length;++J<pe;)if(T[J]===D)return J;return-1}function m2(T,D,B){for(var J=B+1;J--;)if(T[J]===D)return J;return J}function Jr(T){return Yr(T)?y2(T):n2(T)}function pn(T){return Yr(T)?_2(T):r2(T)}function bf(T){for(var D=T.length;D--&&lv.test(T.charAt(D)););return D}var b2=Ga(Vv);function y2(T){for(var D=Fa.lastIndex=0;Fa.test(T);)++D;return D}function _2(T){return T.match(Fa)||[]}function w2(T){return T.match(jv)||[]}var $2=function T(D){D=D==null?vt:ei.defaults(vt.Object(),D,ei.pick(vt,Wv));var B=D.Array,J=D.Date,pe=D.Error,Oe=D.Function,ut=D.Math,Ne=D.Object,Ya=D.RegExp,x2=D.String,rn=D.TypeError,Hs=B.prototype,k2=Oe.prototype,ti=Ne.prototype,Fs=D["__core-js_shared__"],js=k2.toString,He=ti.hasOwnProperty,C2=0,yf=function(){var n=/[^.]+$/.exec(Fs&&Fs.keys&&Fs.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),zs=ti.toString,S2=js.call(Ne),E2=vt._,T2=Ya("^"+js.call(He).replace(Pa,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ns=tf?D.Buffer:r,sr=D.Symbol,Ws=D.Uint8Array,_f=Ns?Ns.allocUnsafe:r,qs=mf(Ne.getPrototypeOf,Ne),wf=Ne.create,$f=ti.propertyIsEnumerable,Ks=Hs.splice,xf=sr?sr.isConcatSpreadable:r,qi=sr?sr.iterator:r,Rr=sr?sr.toStringTag:r,Gs=function(){try{var n=Br(Ne,"defineProperty");return n({},"",{}),n}catch{}}(),A2=D.clearTimeout!==vt.clearTimeout&&D.clearTimeout,I2=J&&J.now!==vt.Date.now&&J.now,R2=D.setTimeout!==vt.setTimeout&&D.setTimeout,Vs=ut.ceil,Qs=ut.floor,Ja=Ne.getOwnPropertySymbols,L2=Ns?Ns.isBuffer:r,kf=D.isFinite,O2=Hs.join,P2=mf(Ne.keys,Ne),ft=ut.max,_t=ut.min,M2=J.now,B2=D.parseInt,Cf=ut.random,U2=Hs.reverse,el=Br(D,"DataView"),Ki=Br(D,"Map"),tl=Br(D,"Promise"),ni=Br(D,"Set"),Gi=Br(D,"WeakMap"),Vi=Br(Ne,"create"),Zs=Gi&&new Gi,ri={},D2=Ur(el),H2=Ur(Ki),F2=Ur(tl),j2=Ur(ni),z2=Ur(Gi),Xs=sr?sr.prototype:r,Qi=Xs?Xs.valueOf:r,Sf=Xs?Xs.toString:r;function m(n){if(tt(n)&&!ge(n)&&!(n instanceof Se)){if(n instanceof sn)return n;if(He.call(n,"__wrapped__"))return Ed(n)}return new sn(n)}var ii=function(){function n(){}return function(i){if(!et(i))return{};if(wf)return wf(i);n.prototype=i;var l=new n;return n.prototype=r,l}}();function Ys(){}function sn(n,i){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!i,this.__index__=0,this.__values__=r}m.templateSettings={escape:nv,evaluate:rv,interpolate:Pu,variable:"",imports:{_:m}},m.prototype=Ys.prototype,m.prototype.constructor=m,sn.prototype=ii(Ys.prototype),sn.prototype.constructor=sn;function Se(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=re,this.__views__=[]}function N2(){var n=new Se(this.__wrapped__);return n.__actions__=Lt(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Lt(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Lt(this.__views__),n}function W2(){if(this.__filtered__){var n=new Se(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function q2(){var n=this.__wrapped__.value(),i=this.__dir__,l=ge(n),f=i<0,g=l?n.length:0,y=rb(0,g,this.__views__),x=y.start,C=y.end,A=C-x,F=f?C:x-1,j=this.__iteratees__,W=j.length,V=0,ne=_t(A,this.__takeCount__);if(!l||!f&&g==A&&ne==A)return Zf(n,this.__actions__);var ce=[];e:for(;A--&&V<ne;){F+=i;for(var _e=-1,ue=n[F];++_e<W;){var ke=j[_e],Ee=ke.iteratee,Gt=ke.type,Ct=Ee(ue);if(Gt==ee)ue=Ct;else if(!Ct){if(Gt==he)continue e;break e}}ce[V++]=ue}return ce}Se.prototype=ii(Ys.prototype),Se.prototype.constructor=Se;function Lr(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var f=n[i];this.set(f[0],f[1])}}function K2(){this.__data__=Vi?Vi(null):{},this.size=0}function G2(n){var i=this.has(n)&&delete this.__data__[n];return this.size-=i?1:0,i}function V2(n){var i=this.__data__;if(Vi){var l=i[n];return l===d?r:l}return He.call(i,n)?i[n]:r}function Q2(n){var i=this.__data__;return Vi?i[n]!==r:He.call(i,n)}function Z2(n,i){var l=this.__data__;return this.size+=this.has(n)?0:1,l[n]=Vi&&i===r?d:i,this}Lr.prototype.clear=K2,Lr.prototype.delete=G2,Lr.prototype.get=V2,Lr.prototype.has=Q2,Lr.prototype.set=Z2;function Dn(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var f=n[i];this.set(f[0],f[1])}}function X2(){this.__data__=[],this.size=0}function Y2(n){var i=this.__data__,l=Js(i,n);if(l<0)return!1;var f=i.length-1;return l==f?i.pop():Ks.call(i,l,1),--this.size,!0}function J2(n){var i=this.__data__,l=Js(i,n);return l<0?r:i[l][1]}function em(n){return Js(this.__data__,n)>-1}function tm(n,i){var l=this.__data__,f=Js(l,n);return f<0?(++this.size,l.push([n,i])):l[f][1]=i,this}Dn.prototype.clear=X2,Dn.prototype.delete=Y2,Dn.prototype.get=J2,Dn.prototype.has=em,Dn.prototype.set=tm;function Hn(n){var i=-1,l=n==null?0:n.length;for(this.clear();++i<l;){var f=n[i];this.set(f[0],f[1])}}function nm(){this.size=0,this.__data__={hash:new Lr,map:new(Ki||Dn),string:new Lr}}function rm(n){var i=fo(this,n).delete(n);return this.size-=i?1:0,i}function im(n){return fo(this,n).get(n)}function sm(n){return fo(this,n).has(n)}function om(n,i){var l=fo(this,n),f=l.size;return l.set(n,i),this.size+=l.size==f?0:1,this}Hn.prototype.clear=nm,Hn.prototype.delete=rm,Hn.prototype.get=im,Hn.prototype.has=sm,Hn.prototype.set=om;function Or(n){var i=-1,l=n==null?0:n.length;for(this.__data__=new Hn;++i<l;)this.add(n[i])}function am(n){return this.__data__.set(n,d),this}function lm(n){return this.__data__.has(n)}Or.prototype.add=Or.prototype.push=am,Or.prototype.has=lm;function gn(n){var i=this.__data__=new Dn(n);this.size=i.size}function cm(){this.__data__=new Dn,this.size=0}function um(n){var i=this.__data__,l=i.delete(n);return this.size=i.size,l}function fm(n){return this.__data__.get(n)}function dm(n){return this.__data__.has(n)}function hm(n,i){var l=this.__data__;if(l instanceof Dn){var f=l.__data__;if(!Ki||f.length<o-1)return f.push([n,i]),this.size=++l.size,this;l=this.__data__=new Hn(f)}return l.set(n,i),this.size=l.size,this}gn.prototype.clear=cm,gn.prototype.delete=um,gn.prototype.get=fm,gn.prototype.has=dm,gn.prototype.set=hm;function Ef(n,i){var l=ge(n),f=!l&&Dr(n),g=!l&&!f&&ur(n),y=!l&&!f&&!g&&li(n),x=l||f||g||y,C=x?Qa(n.length,x2):[],A=C.length;for(var F in n)(i||He.call(n,F))&&!(x&&(F=="length"||g&&(F=="offset"||F=="parent")||y&&(F=="buffer"||F=="byteLength"||F=="byteOffset")||Nn(F,A)))&&C.push(F);return C}function Tf(n){var i=n.length;return i?n[dl(0,i-1)]:r}function pm(n,i){return ho(Lt(n),Pr(i,0,n.length))}function gm(n){return ho(Lt(n))}function nl(n,i,l){(l!==r&&!vn(n[i],l)||l===r&&!(i in n))&&Fn(n,i,l)}function Zi(n,i,l){var f=n[i];(!(He.call(n,i)&&vn(f,l))||l===r&&!(i in n))&&Fn(n,i,l)}function Js(n,i){for(var l=n.length;l--;)if(vn(n[l][0],i))return l;return-1}function vm(n,i,l,f){return or(n,function(g,y,x){i(f,g,l(g),x)}),f}function Af(n,i){return n&&Tn(i,ht(i),n)}function mm(n,i){return n&&Tn(i,Pt(i),n)}function Fn(n,i,l){i=="__proto__"&&Gs?Gs(n,i,{configurable:!0,enumerable:!0,value:l,writable:!0}):n[i]=l}function rl(n,i){for(var l=-1,f=i.length,g=B(f),y=n==null;++l<f;)g[l]=y?r:Ul(n,i[l]);return g}function Pr(n,i,l){return n===n&&(l!==r&&(n=n<=l?n:l),i!==r&&(n=n>=i?n:i)),n}function on(n,i,l,f,g,y){var x,C=i&v,A=i&b,F=i&_;if(l&&(x=g?l(n,f,g,y):l(n)),x!==r)return x;if(!et(n))return n;var j=ge(n);if(j){if(x=sb(n),!C)return Lt(n,x)}else{var W=wt(n),V=W==At||W==Ft;if(ur(n))return Jf(n,C);if(W==dt||W==Ye||V&&!g){if(x=A||V?{}:bd(n),!C)return A?Vm(n,mm(x,n)):Gm(n,Af(x,n))}else{if(!We[W])return g?n:{};x=ob(n,W,C)}}y||(y=new gn);var ne=y.get(n);if(ne)return ne;y.set(n,x),Gd(n)?n.forEach(function(ue){x.add(on(ue,i,l,ue,n,y))}):qd(n)&&n.forEach(function(ue,ke){x.set(ke,on(ue,i,l,ke,n,y))});var ce=F?A?xl:$l:A?Pt:ht,_e=j?r:ce(n);return nn(_e||n,function(ue,ke){_e&&(ke=ue,ue=n[ke]),Zi(x,ke,on(ue,i,l,ke,n,y))}),x}function bm(n){var i=ht(n);return function(l){return If(l,n,i)}}function If(n,i,l){var f=l.length;if(n==null)return!f;for(n=Ne(n);f--;){var g=l[f],y=i[g],x=n[g];if(x===r&&!(g in n)||!y(x))return!1}return!0}function Rf(n,i,l){if(typeof n!="function")throw new rn(c);return rs(function(){n.apply(r,l)},i)}function Xi(n,i,l,f){var g=-1,y=Bs,x=!0,C=n.length,A=[],F=i.length;if(!C)return A;l&&(i=Ze(i,Wt(l))),f?(y=Na,x=!1):i.length>=o&&(y=Wi,x=!1,i=new Or(i));e:for(;++g<C;){var j=n[g],W=l==null?j:l(j);if(j=f||j!==0?j:0,x&&W===W){for(var V=F;V--;)if(i[V]===W)continue e;A.push(j)}else y(i,W,f)||A.push(j)}return A}var or=id(En),Lf=id(sl,!0);function ym(n,i){var l=!0;return or(n,function(f,g,y){return l=!!i(f,g,y),l}),l}function eo(n,i,l){for(var f=-1,g=n.length;++f<g;){var y=n[f],x=i(y);if(x!=null&&(C===r?x===x&&!Kt(x):l(x,C)))var C=x,A=y}return A}function _m(n,i,l,f){var g=n.length;for(l=be(l),l<0&&(l=-l>g?0:g+l),f=f===r||f>g?g:be(f),f<0&&(f+=g),f=l>f?0:Qd(f);l<f;)n[l++]=i;return n}function Of(n,i){var l=[];return or(n,function(f,g,y){i(f,g,y)&&l.push(f)}),l}function mt(n,i,l,f,g){var y=-1,x=n.length;for(l||(l=lb),g||(g=[]);++y<x;){var C=n[y];i>0&&l(C)?i>1?mt(C,i-1,l,f,g):rr(g,C):f||(g[g.length]=C)}return g}var il=sd(),Pf=sd(!0);function En(n,i){return n&&il(n,i,ht)}function sl(n,i){return n&&Pf(n,i,ht)}function to(n,i){return nr(i,function(l){return Wn(n[l])})}function Mr(n,i){i=lr(i,n);for(var l=0,f=i.length;n!=null&&l<f;)n=n[An(i[l++])];return l&&l==f?n:r}function Mf(n,i,l){var f=i(n);return ge(n)?f:rr(f,l(n))}function xt(n){return n==null?n===r?fe:gt:Rr&&Rr in Ne(n)?nb(n):gb(n)}function ol(n,i){return n>i}function wm(n,i){return n!=null&&He.call(n,i)}function $m(n,i){return n!=null&&i in Ne(n)}function xm(n,i,l){return n>=_t(i,l)&&n<ft(i,l)}function al(n,i,l){for(var f=l?Na:Bs,g=n[0].length,y=n.length,x=y,C=B(y),A=1/0,F=[];x--;){var j=n[x];x&&i&&(j=Ze(j,Wt(i))),A=_t(j.length,A),C[x]=!l&&(i||g>=120&&j.length>=120)?new Or(x&&j):r}j=n[0];var W=-1,V=C[0];e:for(;++W<g&&F.length<A;){var ne=j[W],ce=i?i(ne):ne;if(ne=l||ne!==0?ne:0,!(V?Wi(V,ce):f(F,ce,l))){for(x=y;--x;){var _e=C[x];if(!(_e?Wi(_e,ce):f(n[x],ce,l)))continue e}V&&V.push(ce),F.push(ne)}}return F}function km(n,i,l,f){return En(n,function(g,y,x){i(f,l(g),y,x)}),f}function Yi(n,i,l){i=lr(i,n),n=$d(n,i);var f=n==null?n:n[An(ln(i))];return f==null?r:Nt(f,n,l)}function Bf(n){return tt(n)&&xt(n)==Ye}function Cm(n){return tt(n)&&xt(n)==zt}function Sm(n){return tt(n)&&xt(n)==st}function Ji(n,i,l,f,g){return n===i?!0:n==null||i==null||!tt(n)&&!tt(i)?n!==n&&i!==i:Em(n,i,l,f,Ji,g)}function Em(n,i,l,f,g,y){var x=ge(n),C=ge(i),A=x?Dt:wt(n),F=C?Dt:wt(i);A=A==Ye?dt:A,F=F==Ye?dt:F;var j=A==dt,W=F==dt,V=A==F;if(V&&ur(n)){if(!ur(i))return!1;x=!0,j=!1}if(V&&!j)return y||(y=new gn),x||li(n)?gd(n,i,l,f,g,y):eb(n,i,A,l,f,g,y);if(!(l&w)){var ne=j&&He.call(n,"__wrapped__"),ce=W&&He.call(i,"__wrapped__");if(ne||ce){var _e=ne?n.value():n,ue=ce?i.value():i;return y||(y=new gn),g(_e,ue,l,f,y)}}return V?(y||(y=new gn),tb(n,i,l,f,g,y)):!1}function Tm(n){return tt(n)&&wt(n)==lt}function ll(n,i,l,f){var g=l.length,y=g,x=!f;if(n==null)return!y;for(n=Ne(n);g--;){var C=l[g];if(x&&C[2]?C[1]!==n[C[0]]:!(C[0]in n))return!1}for(;++g<y;){C=l[g];var A=C[0],F=n[A],j=C[1];if(x&&C[2]){if(F===r&&!(A in n))return!1}else{var W=new gn;if(f)var V=f(F,j,A,n,i,W);if(!(V===r?Ji(j,F,w|k,f,W):V))return!1}}return!0}function Uf(n){if(!et(n)||ub(n))return!1;var i=Wn(n)?T2:bv;return i.test(Ur(n))}function Am(n){return tt(n)&&xt(n)==ze}function Im(n){return tt(n)&&wt(n)==Ke}function Rm(n){return tt(n)&&yo(n.length)&&!!Ge[xt(n)]}function Df(n){return typeof n=="function"?n:n==null?Mt:typeof n=="object"?ge(n)?jf(n[0],n[1]):Ff(n):oh(n)}function cl(n){if(!ns(n))return P2(n);var i=[];for(var l in Ne(n))He.call(n,l)&&l!="constructor"&&i.push(l);return i}function Lm(n){if(!et(n))return pb(n);var i=ns(n),l=[];for(var f in n)f=="constructor"&&(i||!He.call(n,f))||l.push(f);return l}function ul(n,i){return n<i}function Hf(n,i){var l=-1,f=Ot(n)?B(n.length):[];return or(n,function(g,y,x){f[++l]=i(g,y,x)}),f}function Ff(n){var i=Cl(n);return i.length==1&&i[0][2]?_d(i[0][0],i[0][1]):function(l){return l===n||ll(l,n,i)}}function jf(n,i){return El(n)&&yd(i)?_d(An(n),i):function(l){var f=Ul(l,n);return f===r&&f===i?Dl(l,n):Ji(i,f,w|k)}}function no(n,i,l,f,g){n!==i&&il(i,function(y,x){if(g||(g=new gn),et(y))Om(n,i,x,l,no,f,g);else{var C=f?f(Al(n,x),y,x+"",n,i,g):r;C===r&&(C=y),nl(n,x,C)}},Pt)}function Om(n,i,l,f,g,y,x){var C=Al(n,l),A=Al(i,l),F=x.get(A);if(F){nl(n,l,F);return}var j=y?y(C,A,l+"",n,i,x):r,W=j===r;if(W){var V=ge(A),ne=!V&&ur(A),ce=!V&&!ne&&li(A);j=A,V||ne||ce?ge(C)?j=C:nt(C)?j=Lt(C):ne?(W=!1,j=Jf(A,!0)):ce?(W=!1,j=ed(A,!0)):j=[]:is(A)||Dr(A)?(j=C,Dr(C)?j=Zd(C):(!et(C)||Wn(C))&&(j=bd(A))):W=!1}W&&(x.set(A,j),g(j,A,f,y,x),x.delete(A)),nl(n,l,j)}function zf(n,i){var l=n.length;if(l)return i+=i<0?l:0,Nn(i,l)?n[i]:r}function Nf(n,i,l){i.length?i=Ze(i,function(y){return ge(y)?function(x){return Mr(x,y.length===1?y[0]:y)}:y}):i=[Mt];var f=-1;i=Ze(i,Wt(ae()));var g=Hf(n,function(y,x,C){var A=Ze(i,function(F){return F(y)});return{criteria:A,index:++f,value:y}});return o2(g,function(y,x){return Km(y,x,l)})}function Pm(n,i){return Wf(n,i,function(l,f){return Dl(n,f)})}function Wf(n,i,l){for(var f=-1,g=i.length,y={};++f<g;){var x=i[f],C=Mr(n,x);l(C,x)&&es(y,lr(x,n),C)}return y}function Mm(n){return function(i){return Mr(i,n)}}function fl(n,i,l,f){var g=f?s2:Xr,y=-1,x=i.length,C=n;for(n===i&&(i=Lt(i)),l&&(C=Ze(n,Wt(l)));++y<x;)for(var A=0,F=i[y],j=l?l(F):F;(A=g(C,j,A,f))>-1;)C!==n&&Ks.call(C,A,1),Ks.call(n,A,1);return n}function qf(n,i){for(var l=n?i.length:0,f=l-1;l--;){var g=i[l];if(l==f||g!==y){var y=g;Nn(g)?Ks.call(n,g,1):gl(n,g)}}return n}function dl(n,i){return n+Qs(Cf()*(i-n+1))}function Bm(n,i,l,f){for(var g=-1,y=ft(Vs((i-n)/(l||1)),0),x=B(y);y--;)x[f?y:++g]=n,n+=l;return x}function hl(n,i){var l="";if(!n||i<1||i>de)return l;do i%2&&(l+=n),i=Qs(i/2),i&&(n+=n);while(i);return l}function $e(n,i){return Il(wd(n,i,Mt),n+"")}function Um(n){return Tf(ci(n))}function Dm(n,i){var l=ci(n);return ho(l,Pr(i,0,l.length))}function es(n,i,l,f){if(!et(n))return n;i=lr(i,n);for(var g=-1,y=i.length,x=y-1,C=n;C!=null&&++g<y;){var A=An(i[g]),F=l;if(A==="__proto__"||A==="constructor"||A==="prototype")return n;if(g!=x){var j=C[A];F=f?f(j,A,C):r,F===r&&(F=et(j)?j:Nn(i[g+1])?[]:{})}Zi(C,A,F),C=C[A]}return n}var Kf=Zs?function(n,i){return Zs.set(n,i),n}:Mt,Hm=Gs?function(n,i){return Gs(n,"toString",{configurable:!0,enumerable:!1,value:Fl(i),writable:!0})}:Mt;function Fm(n){return ho(ci(n))}function an(n,i,l){var f=-1,g=n.length;i<0&&(i=-i>g?0:g+i),l=l>g?g:l,l<0&&(l+=g),g=i>l?0:l-i>>>0,i>>>=0;for(var y=B(g);++f<g;)y[f]=n[f+i];return y}function jm(n,i){var l;return or(n,function(f,g,y){return l=i(f,g,y),!l}),!!l}function ro(n,i,l){var f=0,g=n==null?f:n.length;if(typeof i=="number"&&i===i&&g<=dn){for(;f<g;){var y=f+g>>>1,x=n[y];x!==null&&!Kt(x)&&(l?x<=i:x<i)?f=y+1:g=y}return g}return pl(n,i,Mt,l)}function pl(n,i,l,f){var g=0,y=n==null?0:n.length;if(y===0)return 0;i=l(i);for(var x=i!==i,C=i===null,A=Kt(i),F=i===r;g<y;){var j=Qs((g+y)/2),W=l(n[j]),V=W!==r,ne=W===null,ce=W===W,_e=Kt(W);if(x)var ue=f||ce;else F?ue=ce&&(f||V):C?ue=ce&&V&&(f||!ne):A?ue=ce&&V&&!ne&&(f||!_e):ne||_e?ue=!1:ue=f?W<=i:W<i;ue?g=j+1:y=j}return _t(y,De)}function Gf(n,i){for(var l=-1,f=n.length,g=0,y=[];++l<f;){var x=n[l],C=i?i(x):x;if(!l||!vn(C,A)){var A=C;y[g++]=x===0?0:x}}return y}function Vf(n){return typeof n=="number"?n:Kt(n)?Re:+n}function qt(n){if(typeof n=="string")return n;if(ge(n))return Ze(n,qt)+"";if(Kt(n))return Sf?Sf.call(n):"";var i=n+"";return i=="0"&&1/n==-te?"-0":i}function ar(n,i,l){var f=-1,g=Bs,y=n.length,x=!0,C=[],A=C;if(l)x=!1,g=Na;else if(y>=o){var F=i?null:Ym(n);if(F)return Ds(F);x=!1,g=Wi,A=new Or}else A=i?[]:C;e:for(;++f<y;){var j=n[f],W=i?i(j):j;if(j=l||j!==0?j:0,x&&W===W){for(var V=A.length;V--;)if(A[V]===W)continue e;i&&A.push(W),C.push(j)}else g(A,W,l)||(A!==C&&A.push(W),C.push(j))}return C}function gl(n,i){return i=lr(i,n),n=$d(n,i),n==null||delete n[An(ln(i))]}function Qf(n,i,l,f){return es(n,i,l(Mr(n,i)),f)}function io(n,i,l,f){for(var g=n.length,y=f?g:-1;(f?y--:++y<g)&&i(n[y],y,n););return l?an(n,f?0:y,f?y+1:g):an(n,f?y+1:0,f?g:y)}function Zf(n,i){var l=n;return l instanceof Se&&(l=l.value()),Wa(i,function(f,g){return g.func.apply(g.thisArg,rr([f],g.args))},l)}function vl(n,i,l){var f=n.length;if(f<2)return f?ar(n[0]):[];for(var g=-1,y=B(f);++g<f;)for(var x=n[g],C=-1;++C<f;)C!=g&&(y[g]=Xi(y[g]||x,n[C],i,l));return ar(mt(y,1),i,l)}function Xf(n,i,l){for(var f=-1,g=n.length,y=i.length,x={};++f<g;){var C=f<y?i[f]:r;l(x,n[f],C)}return x}function ml(n){return nt(n)?n:[]}function bl(n){return typeof n=="function"?n:Mt}function lr(n,i){return ge(n)?n:El(n,i)?[n]:Sd(Ue(n))}var zm=$e;function cr(n,i,l){var f=n.length;return l=l===r?f:l,!i&&l>=f?n:an(n,i,l)}var Yf=A2||function(n){return vt.clearTimeout(n)};function Jf(n,i){if(i)return n.slice();var l=n.length,f=_f?_f(l):new n.constructor(l);return n.copy(f),f}function yl(n){var i=new n.constructor(n.byteLength);return new Ws(i).set(new Ws(n)),i}function Nm(n,i){var l=i?yl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.byteLength)}function Wm(n){var i=new n.constructor(n.source,Mu.exec(n));return i.lastIndex=n.lastIndex,i}function qm(n){return Qi?Ne(Qi.call(n)):{}}function ed(n,i){var l=i?yl(n.buffer):n.buffer;return new n.constructor(l,n.byteOffset,n.length)}function td(n,i){if(n!==i){var l=n!==r,f=n===null,g=n===n,y=Kt(n),x=i!==r,C=i===null,A=i===i,F=Kt(i);if(!C&&!F&&!y&&n>i||y&&x&&A&&!C&&!F||f&&x&&A||!l&&A||!g)return 1;if(!f&&!y&&!F&&n<i||F&&l&&g&&!f&&!y||C&&l&&g||!x&&g||!A)return-1}return 0}function Km(n,i,l){for(var f=-1,g=n.criteria,y=i.criteria,x=g.length,C=l.length;++f<x;){var A=td(g[f],y[f]);if(A){if(f>=C)return A;var F=l[f];return A*(F=="desc"?-1:1)}}return n.index-i.index}function nd(n,i,l,f){for(var g=-1,y=n.length,x=l.length,C=-1,A=i.length,F=ft(y-x,0),j=B(A+F),W=!f;++C<A;)j[C]=i[C];for(;++g<x;)(W||g<y)&&(j[l[g]]=n[g]);for(;F--;)j[C++]=n[g++];return j}function rd(n,i,l,f){for(var g=-1,y=n.length,x=-1,C=l.length,A=-1,F=i.length,j=ft(y-C,0),W=B(j+F),V=!f;++g<j;)W[g]=n[g];for(var ne=g;++A<F;)W[ne+A]=i[A];for(;++x<C;)(V||g<y)&&(W[ne+l[x]]=n[g++]);return W}function Lt(n,i){var l=-1,f=n.length;for(i||(i=B(f));++l<f;)i[l]=n[l];return i}function Tn(n,i,l,f){var g=!l;l||(l={});for(var y=-1,x=i.length;++y<x;){var C=i[y],A=f?f(l[C],n[C],C,l,n):r;A===r&&(A=n[C]),g?Fn(l,C,A):Zi(l,C,A)}return l}function Gm(n,i){return Tn(n,Sl(n),i)}function Vm(n,i){return Tn(n,vd(n),i)}function so(n,i){return function(l,f){var g=ge(l)?Jv:vm,y=i?i():{};return g(l,n,ae(f,2),y)}}function si(n){return $e(function(i,l){var f=-1,g=l.length,y=g>1?l[g-1]:r,x=g>2?l[2]:r;for(y=n.length>3&&typeof y=="function"?(g--,y):r,x&&kt(l[0],l[1],x)&&(y=g<3?r:y,g=1),i=Ne(i);++f<g;){var C=l[f];C&&n(i,C,f,y)}return i})}function id(n,i){return function(l,f){if(l==null)return l;if(!Ot(l))return n(l,f);for(var g=l.length,y=i?g:-1,x=Ne(l);(i?y--:++y<g)&&f(x[y],y,x)!==!1;);return l}}function sd(n){return function(i,l,f){for(var g=-1,y=Ne(i),x=f(i),C=x.length;C--;){var A=x[n?C:++g];if(l(y[A],A,y)===!1)break}return i}}function Qm(n,i,l){var f=i&S,g=ts(n);function y(){var x=this&&this!==vt&&this instanceof y?g:n;return x.apply(f?l:this,arguments)}return y}function od(n){return function(i){i=Ue(i);var l=Yr(i)?pn(i):r,f=l?l[0]:i.charAt(0),g=l?cr(l,1).join(""):i.slice(1);return f[n]()+g}}function oi(n){return function(i){return Wa(ih(rh(i).replace(Hv,"")),n,"")}}function ts(n){return function(){var i=arguments;switch(i.length){case 0:return new n;case 1:return new n(i[0]);case 2:return new n(i[0],i[1]);case 3:return new n(i[0],i[1],i[2]);case 4:return new n(i[0],i[1],i[2],i[3]);case 5:return new n(i[0],i[1],i[2],i[3],i[4]);case 6:return new n(i[0],i[1],i[2],i[3],i[4],i[5]);case 7:return new n(i[0],i[1],i[2],i[3],i[4],i[5],i[6])}var l=ii(n.prototype),f=n.apply(l,i);return et(f)?f:l}}function Zm(n,i,l){var f=ts(n);function g(){for(var y=arguments.length,x=B(y),C=y,A=ai(g);C--;)x[C]=arguments[C];var F=y<3&&x[0]!==A&&x[y-1]!==A?[]:ir(x,A);if(y-=F.length,y<l)return fd(n,i,oo,g.placeholder,r,x,F,r,r,l-y);var j=this&&this!==vt&&this instanceof g?f:n;return Nt(j,this,x)}return g}function ad(n){return function(i,l,f){var g=Ne(i);if(!Ot(i)){var y=ae(l,3);i=ht(i),l=function(C){return y(g[C],C,g)}}var x=n(i,l,f);return x>-1?g[y?i[x]:x]:r}}function ld(n){return zn(function(i){var l=i.length,f=l,g=sn.prototype.thru;for(n&&i.reverse();f--;){var y=i[f];if(typeof y!="function")throw new rn(c);if(g&&!x&&uo(y)=="wrapper")var x=new sn([],!0)}for(f=x?f:l;++f<l;){y=i[f];var C=uo(y),A=C=="wrapper"?kl(y):r;A&&Tl(A[0])&&A[1]==(N|M|E|q)&&!A[4].length&&A[9]==1?x=x[uo(A[0])].apply(x,A[3]):x=y.length==1&&Tl(y)?x[C]():x.thru(y)}return function(){var F=arguments,j=F[0];if(x&&F.length==1&&ge(j))return x.plant(j).value();for(var W=0,V=l?i[W].apply(this,F):j;++W<l;)V=i[W].call(this,V);return V}})}function oo(n,i,l,f,g,y,x,C,A,F){var j=i&N,W=i&S,V=i&L,ne=i&(M|R),ce=i&ie,_e=V?r:ts(n);function ue(){for(var ke=arguments.length,Ee=B(ke),Gt=ke;Gt--;)Ee[Gt]=arguments[Gt];if(ne)var Ct=ai(ue),Vt=l2(Ee,Ct);if(f&&(Ee=nd(Ee,f,g,ne)),y&&(Ee=rd(Ee,y,x,ne)),ke-=Vt,ne&&ke<F){var rt=ir(Ee,Ct);return fd(n,i,oo,ue.placeholder,l,Ee,rt,C,A,F-ke)}var mn=W?l:this,Kn=V?mn[n]:n;return ke=Ee.length,C?Ee=vb(Ee,C):ce&&ke>1&&Ee.reverse(),j&&A<ke&&(Ee.length=A),this&&this!==vt&&this instanceof ue&&(Kn=_e||ts(Kn)),Kn.apply(mn,Ee)}return ue}function cd(n,i){return function(l,f){return km(l,n,i(f),{})}}function ao(n,i){return function(l,f){var g;if(l===r&&f===r)return i;if(l!==r&&(g=l),f!==r){if(g===r)return f;typeof l=="string"||typeof f=="string"?(l=qt(l),f=qt(f)):(l=Vf(l),f=Vf(f)),g=n(l,f)}return g}}function _l(n){return zn(function(i){return i=Ze(i,Wt(ae())),$e(function(l){var f=this;return n(i,function(g){return Nt(g,f,l)})})})}function lo(n,i){i=i===r?" ":qt(i);var l=i.length;if(l<2)return l?hl(i,n):i;var f=hl(i,Vs(n/Jr(i)));return Yr(i)?cr(pn(f),0,n).join(""):f.slice(0,n)}function Xm(n,i,l,f){var g=i&S,y=ts(n);function x(){for(var C=-1,A=arguments.length,F=-1,j=f.length,W=B(j+A),V=this&&this!==vt&&this instanceof x?y:n;++F<j;)W[F]=f[F];for(;A--;)W[F++]=arguments[++C];return Nt(V,g?l:this,W)}return x}function ud(n){return function(i,l,f){return f&&typeof f!="number"&&kt(i,l,f)&&(l=f=r),i=qn(i),l===r?(l=i,i=0):l=qn(l),f=f===r?i<l?1:-1:qn(f),Bm(i,l,f,n)}}function co(n){return function(i,l){return typeof i=="string"&&typeof l=="string"||(i=cn(i),l=cn(l)),n(i,l)}}function fd(n,i,l,f,g,y,x,C,A,F){var j=i&M,W=j?x:r,V=j?r:x,ne=j?y:r,ce=j?r:y;i|=j?E:O,i&=~(j?O:E),i&U||(i&=~(S|L));var _e=[n,i,g,ne,W,ce,V,C,A,F],ue=l.apply(r,_e);return Tl(n)&&xd(ue,_e),ue.placeholder=f,kd(ue,n,i)}function wl(n){var i=ut[n];return function(l,f){if(l=cn(l),f=f==null?0:_t(be(f),292),f&&kf(l)){var g=(Ue(l)+"e").split("e"),y=i(g[0]+"e"+(+g[1]+f));return g=(Ue(y)+"e").split("e"),+(g[0]+"e"+(+g[1]-f))}return i(l)}}var Ym=ni&&1/Ds(new ni([,-0]))[1]==te?function(n){return new ni(n)}:Nl;function dd(n){return function(i){var l=wt(i);return l==lt?Xa(i):l==Ke?g2(i):a2(i,n(i))}}function jn(n,i,l,f,g,y,x,C){var A=i&L;if(!A&&typeof n!="function")throw new rn(c);var F=f?f.length:0;if(F||(i&=~(E|O),f=g=r),x=x===r?x:ft(be(x),0),C=C===r?C:be(C),F-=g?g.length:0,i&O){var j=f,W=g;f=g=r}var V=A?r:kl(n),ne=[n,i,l,f,g,j,W,y,x,C];if(V&&hb(ne,V),n=ne[0],i=ne[1],l=ne[2],f=ne[3],g=ne[4],C=ne[9]=ne[9]===r?A?0:n.length:ft(ne[9]-F,0),!C&&i&(M|R)&&(i&=~(M|R)),!i||i==S)var ce=Qm(n,i,l);else i==M||i==R?ce=Zm(n,i,C):(i==E||i==(S|E))&&!g.length?ce=Xm(n,i,l,f):ce=oo.apply(r,ne);var _e=V?Kf:xd;return kd(_e(ce,ne),n,i)}function hd(n,i,l,f){return n===r||vn(n,ti[l])&&!He.call(f,l)?i:n}function pd(n,i,l,f,g,y){return et(n)&&et(i)&&(y.set(i,n),no(n,i,r,pd,y),y.delete(i)),n}function Jm(n){return is(n)?r:n}function gd(n,i,l,f,g,y){var x=l&w,C=n.length,A=i.length;if(C!=A&&!(x&&A>C))return!1;var F=y.get(n),j=y.get(i);if(F&&j)return F==i&&j==n;var W=-1,V=!0,ne=l&k?new Or:r;for(y.set(n,i),y.set(i,n);++W<C;){var ce=n[W],_e=i[W];if(f)var ue=x?f(_e,ce,W,i,n,y):f(ce,_e,W,n,i,y);if(ue!==r){if(ue)continue;V=!1;break}if(ne){if(!qa(i,function(ke,Ee){if(!Wi(ne,Ee)&&(ce===ke||g(ce,ke,l,f,y)))return ne.push(Ee)})){V=!1;break}}else if(!(ce===_e||g(ce,_e,l,f,y))){V=!1;break}}return y.delete(n),y.delete(i),V}function eb(n,i,l,f,g,y,x){switch(l){case Rt:if(n.byteLength!=i.byteLength||n.byteOffset!=i.byteOffset)return!1;n=n.buffer,i=i.buffer;case zt:return!(n.byteLength!=i.byteLength||!y(new Ws(n),new Ws(i)));case Je:case st:case It:return vn(+n,+i);case Ht:return n.name==i.name&&n.message==i.message;case ze:case ct:return n==i+"";case lt:var C=Xa;case Ke:var A=f&w;if(C||(C=Ds),n.size!=i.size&&!A)return!1;var F=x.get(n);if(F)return F==i;f|=k,x.set(n,i);var j=gd(C(n),C(i),f,g,y,x);return x.delete(n),j;case jt:if(Qi)return Qi.call(n)==Qi.call(i)}return!1}function tb(n,i,l,f,g,y){var x=l&w,C=$l(n),A=C.length,F=$l(i),j=F.length;if(A!=j&&!x)return!1;for(var W=A;W--;){var V=C[W];if(!(x?V in i:He.call(i,V)))return!1}var ne=y.get(n),ce=y.get(i);if(ne&&ce)return ne==i&&ce==n;var _e=!0;y.set(n,i),y.set(i,n);for(var ue=x;++W<A;){V=C[W];var ke=n[V],Ee=i[V];if(f)var Gt=x?f(Ee,ke,V,i,n,y):f(ke,Ee,V,n,i,y);if(!(Gt===r?ke===Ee||g(ke,Ee,l,f,y):Gt)){_e=!1;break}ue||(ue=V=="constructor")}if(_e&&!ue){var Ct=n.constructor,Vt=i.constructor;Ct!=Vt&&"constructor"in n&&"constructor"in i&&!(typeof Ct=="function"&&Ct instanceof Ct&&typeof Vt=="function"&&Vt instanceof Vt)&&(_e=!1)}return y.delete(n),y.delete(i),_e}function zn(n){return Il(wd(n,r,Id),n+"")}function $l(n){return Mf(n,ht,Sl)}function xl(n){return Mf(n,Pt,vd)}var kl=Zs?function(n){return Zs.get(n)}:Nl;function uo(n){for(var i=n.name+"",l=ri[i],f=He.call(ri,i)?l.length:0;f--;){var g=l[f],y=g.func;if(y==null||y==n)return g.name}return i}function ai(n){var i=He.call(m,"placeholder")?m:n;return i.placeholder}function ae(){var n=m.iteratee||jl;return n=n===jl?Df:n,arguments.length?n(arguments[0],arguments[1]):n}function fo(n,i){var l=n.__data__;return cb(i)?l[typeof i=="string"?"string":"hash"]:l.map}function Cl(n){for(var i=ht(n),l=i.length;l--;){var f=i[l],g=n[f];i[l]=[f,g,yd(g)]}return i}function Br(n,i){var l=d2(n,i);return Uf(l)?l:r}function nb(n){var i=He.call(n,Rr),l=n[Rr];try{n[Rr]=r;var f=!0}catch{}var g=zs.call(n);return f&&(i?n[Rr]=l:delete n[Rr]),g}var Sl=Ja?function(n){return n==null?[]:(n=Ne(n),nr(Ja(n),function(i){return $f.call(n,i)}))}:Wl,vd=Ja?function(n){for(var i=[];n;)rr(i,Sl(n)),n=qs(n);return i}:Wl,wt=xt;(el&&wt(new el(new ArrayBuffer(1)))!=Rt||Ki&&wt(new Ki)!=lt||tl&&wt(tl.resolve())!=ve||ni&&wt(new ni)!=Ke||Gi&&wt(new Gi)!=me)&&(wt=function(n){var i=xt(n),l=i==dt?n.constructor:r,f=l?Ur(l):"";if(f)switch(f){case D2:return Rt;case H2:return lt;case F2:return ve;case j2:return Ke;case z2:return me}return i});function rb(n,i,l){for(var f=-1,g=l.length;++f<g;){var y=l[f],x=y.size;switch(y.type){case"drop":n+=x;break;case"dropRight":i-=x;break;case"take":i=_t(i,n+x);break;case"takeRight":n=ft(n,i-x);break}}return{start:n,end:i}}function ib(n){var i=n.match(uv);return i?i[1].split(fv):[]}function md(n,i,l){i=lr(i,n);for(var f=-1,g=i.length,y=!1;++f<g;){var x=An(i[f]);if(!(y=n!=null&&l(n,x)))break;n=n[x]}return y||++f!=g?y:(g=n==null?0:n.length,!!g&&yo(g)&&Nn(x,g)&&(ge(n)||Dr(n)))}function sb(n){var i=n.length,l=new n.constructor(i);return i&&typeof n[0]=="string"&&He.call(n,"index")&&(l.index=n.index,l.input=n.input),l}function bd(n){return typeof n.constructor=="function"&&!ns(n)?ii(qs(n)):{}}function ob(n,i,l){var f=n.constructor;switch(i){case zt:return yl(n);case Je:case st:return new f(+n);case Rt:return Nm(n,l);case Jt:case en:case hn:case Gr:case Vr:case Qr:case Ra:case La:case Oa:return ed(n,l);case lt:return new f;case It:case ct:return new f(n);case ze:return Wm(n);case Ke:return new f;case jt:return qm(n)}}function ab(n,i){var l=i.length;if(!l)return n;var f=l-1;return i[f]=(l>1?"& ":"")+i[f],i=i.join(l>2?", ":" "),n.replace(cv,`{
/* [wrapped with `+i+`] */
`)}function lb(n){return ge(n)||Dr(n)||!!(xf&&n&&n[xf])}function Nn(n,i){var l=typeof n;return i=i??de,!!i&&(l=="number"||l!="symbol"&&_v.test(n))&&n>-1&&n%1==0&&n<i}function kt(n,i,l){if(!et(l))return!1;var f=typeof i;return(f=="number"?Ot(l)&&Nn(i,l.length):f=="string"&&i in l)?vn(l[i],n):!1}function El(n,i){if(ge(n))return!1;var l=typeof n;return l=="number"||l=="symbol"||l=="boolean"||n==null||Kt(n)?!0:sv.test(n)||!iv.test(n)||i!=null&&n in Ne(i)}function cb(n){var i=typeof n;return i=="string"||i=="number"||i=="symbol"||i=="boolean"?n!=="__proto__":n===null}function Tl(n){var i=uo(n),l=m[i];if(typeof l!="function"||!(i in Se.prototype))return!1;if(n===l)return!0;var f=kl(l);return!!f&&n===f[0]}function ub(n){return!!yf&&yf in n}var fb=Fs?Wn:ql;function ns(n){var i=n&&n.constructor,l=typeof i=="function"&&i.prototype||ti;return n===l}function yd(n){return n===n&&!et(n)}function _d(n,i){return function(l){return l==null?!1:l[n]===i&&(i!==r||n in Ne(l))}}function db(n){var i=mo(n,function(f){return l.size===p&&l.clear(),f}),l=i.cache;return i}function hb(n,i){var l=n[1],f=i[1],g=l|f,y=g<(S|L|N),x=f==N&&l==M||f==N&&l==q&&n[7].length<=i[8]||f==(N|q)&&i[7].length<=i[8]&&l==M;if(!(y||x))return n;f&S&&(n[2]=i[2],g|=l&S?0:U);var C=i[3];if(C){var A=n[3];n[3]=A?nd(A,C,i[4]):C,n[4]=A?ir(n[3],h):i[4]}return C=i[5],C&&(A=n[5],n[5]=A?rd(A,C,i[6]):C,n[6]=A?ir(n[5],h):i[6]),C=i[7],C&&(n[7]=C),f&N&&(n[8]=n[8]==null?i[8]:_t(n[8],i[8])),n[9]==null&&(n[9]=i[9]),n[0]=i[0],n[1]=g,n}function pb(n){var i=[];if(n!=null)for(var l in Ne(n))i.push(l);return i}function gb(n){return zs.call(n)}function wd(n,i,l){return i=ft(i===r?n.length-1:i,0),function(){for(var f=arguments,g=-1,y=ft(f.length-i,0),x=B(y);++g<y;)x[g]=f[i+g];g=-1;for(var C=B(i+1);++g<i;)C[g]=f[g];return C[i]=l(x),Nt(n,this,C)}}function $d(n,i){return i.length<2?n:Mr(n,an(i,0,-1))}function vb(n,i){for(var l=n.length,f=_t(i.length,l),g=Lt(n);f--;){var y=i[f];n[f]=Nn(y,l)?g[y]:r}return n}function Al(n,i){if(!(i==="constructor"&&typeof n[i]=="function")&&i!="__proto__")return n[i]}var xd=Cd(Kf),rs=R2||function(n,i){return vt.setTimeout(n,i)},Il=Cd(Hm);function kd(n,i,l){var f=i+"";return Il(n,ab(f,mb(ib(f),l)))}function Cd(n){var i=0,l=0;return function(){var f=M2(),g=Q-(f-l);if(l=f,g>0){if(++i>=H)return arguments[0]}else i=0;return n.apply(r,arguments)}}function ho(n,i){var l=-1,f=n.length,g=f-1;for(i=i===r?f:i;++l<i;){var y=dl(l,g),x=n[y];n[y]=n[l],n[l]=x}return n.length=i,n}var Sd=db(function(n){var i=[];return n.charCodeAt(0)===46&&i.push(""),n.replace(ov,function(l,f,g,y){i.push(g?y.replace(pv,"$1"):f||l)}),i});function An(n){if(typeof n=="string"||Kt(n))return n;var i=n+"";return i=="0"&&1/n==-te?"-0":i}function Ur(n){if(n!=null){try{return js.call(n)}catch{}try{return n+""}catch{}}return""}function mb(n,i){return nn(Y,function(l){var f="_."+l[0];i&l[1]&&!Bs(n,f)&&n.push(f)}),n.sort()}function Ed(n){if(n instanceof Se)return n.clone();var i=new sn(n.__wrapped__,n.__chain__);return i.__actions__=Lt(n.__actions__),i.__index__=n.__index__,i.__values__=n.__values__,i}function bb(n,i,l){(l?kt(n,i,l):i===r)?i=1:i=ft(be(i),0);var f=n==null?0:n.length;if(!f||i<1)return[];for(var g=0,y=0,x=B(Vs(f/i));g<f;)x[y++]=an(n,g,g+=i);return x}function yb(n){for(var i=-1,l=n==null?0:n.length,f=0,g=[];++i<l;){var y=n[i];y&&(g[f++]=y)}return g}function _b(){var n=arguments.length;if(!n)return[];for(var i=B(n-1),l=arguments[0],f=n;f--;)i[f-1]=arguments[f];return rr(ge(l)?Lt(l):[l],mt(i,1))}var wb=$e(function(n,i){return nt(n)?Xi(n,mt(i,1,nt,!0)):[]}),$b=$e(function(n,i){var l=ln(i);return nt(l)&&(l=r),nt(n)?Xi(n,mt(i,1,nt,!0),ae(l,2)):[]}),xb=$e(function(n,i){var l=ln(i);return nt(l)&&(l=r),nt(n)?Xi(n,mt(i,1,nt,!0),r,l):[]});function kb(n,i,l){var f=n==null?0:n.length;return f?(i=l||i===r?1:be(i),an(n,i<0?0:i,f)):[]}function Cb(n,i,l){var f=n==null?0:n.length;return f?(i=l||i===r?1:be(i),i=f-i,an(n,0,i<0?0:i)):[]}function Sb(n,i){return n&&n.length?io(n,ae(i,3),!0,!0):[]}function Eb(n,i){return n&&n.length?io(n,ae(i,3),!0):[]}function Tb(n,i,l,f){var g=n==null?0:n.length;return g?(l&&typeof l!="number"&&kt(n,i,l)&&(l=0,f=g),_m(n,i,l,f)):[]}function Td(n,i,l){var f=n==null?0:n.length;if(!f)return-1;var g=l==null?0:be(l);return g<0&&(g=ft(f+g,0)),Us(n,ae(i,3),g)}function Ad(n,i,l){var f=n==null?0:n.length;if(!f)return-1;var g=f-1;return l!==r&&(g=be(l),g=l<0?ft(f+g,0):_t(g,f-1)),Us(n,ae(i,3),g,!0)}function Id(n){var i=n==null?0:n.length;return i?mt(n,1):[]}function Ab(n){var i=n==null?0:n.length;return i?mt(n,te):[]}function Ib(n,i){var l=n==null?0:n.length;return l?(i=i===r?1:be(i),mt(n,i)):[]}function Rb(n){for(var i=-1,l=n==null?0:n.length,f={};++i<l;){var g=n[i];f[g[0]]=g[1]}return f}function Rd(n){return n&&n.length?n[0]:r}function Lb(n,i,l){var f=n==null?0:n.length;if(!f)return-1;var g=l==null?0:be(l);return g<0&&(g=ft(f+g,0)),Xr(n,i,g)}function Ob(n){var i=n==null?0:n.length;return i?an(n,0,-1):[]}var Pb=$e(function(n){var i=Ze(n,ml);return i.length&&i[0]===n[0]?al(i):[]}),Mb=$e(function(n){var i=ln(n),l=Ze(n,ml);return i===ln(l)?i=r:l.pop(),l.length&&l[0]===n[0]?al(l,ae(i,2)):[]}),Bb=$e(function(n){var i=ln(n),l=Ze(n,ml);return i=typeof i=="function"?i:r,i&&l.pop(),l.length&&l[0]===n[0]?al(l,r,i):[]});function Ub(n,i){return n==null?"":O2.call(n,i)}function ln(n){var i=n==null?0:n.length;return i?n[i-1]:r}function Db(n,i,l){var f=n==null?0:n.length;if(!f)return-1;var g=f;return l!==r&&(g=be(l),g=g<0?ft(f+g,0):_t(g,f-1)),i===i?m2(n,i,g):Us(n,ff,g,!0)}function Hb(n,i){return n&&n.length?zf(n,be(i)):r}var Fb=$e(Ld);function Ld(n,i){return n&&n.length&&i&&i.length?fl(n,i):n}function jb(n,i,l){return n&&n.length&&i&&i.length?fl(n,i,ae(l,2)):n}function zb(n,i,l){return n&&n.length&&i&&i.length?fl(n,i,r,l):n}var Nb=zn(function(n,i){var l=n==null?0:n.length,f=rl(n,i);return qf(n,Ze(i,function(g){return Nn(g,l)?+g:g}).sort(td)),f});function Wb(n,i){var l=[];if(!(n&&n.length))return l;var f=-1,g=[],y=n.length;for(i=ae(i,3);++f<y;){var x=n[f];i(x,f,n)&&(l.push(x),g.push(f))}return qf(n,g),l}function Rl(n){return n==null?n:U2.call(n)}function qb(n,i,l){var f=n==null?0:n.length;return f?(l&&typeof l!="number"&&kt(n,i,l)?(i=0,l=f):(i=i==null?0:be(i),l=l===r?f:be(l)),an(n,i,l)):[]}function Kb(n,i){return ro(n,i)}function Gb(n,i,l){return pl(n,i,ae(l,2))}function Vb(n,i){var l=n==null?0:n.length;if(l){var f=ro(n,i);if(f<l&&vn(n[f],i))return f}return-1}function Qb(n,i){return ro(n,i,!0)}function Zb(n,i,l){return pl(n,i,ae(l,2),!0)}function Xb(n,i){var l=n==null?0:n.length;if(l){var f=ro(n,i,!0)-1;if(vn(n[f],i))return f}return-1}function Yb(n){return n&&n.length?Gf(n):[]}function Jb(n,i){return n&&n.length?Gf(n,ae(i,2)):[]}function ey(n){var i=n==null?0:n.length;return i?an(n,1,i):[]}function ty(n,i,l){return n&&n.length?(i=l||i===r?1:be(i),an(n,0,i<0?0:i)):[]}function ny(n,i,l){var f=n==null?0:n.length;return f?(i=l||i===r?1:be(i),i=f-i,an(n,i<0?0:i,f)):[]}function ry(n,i){return n&&n.length?io(n,ae(i,3),!1,!0):[]}function iy(n,i){return n&&n.length?io(n,ae(i,3)):[]}var sy=$e(function(n){return ar(mt(n,1,nt,!0))}),oy=$e(function(n){var i=ln(n);return nt(i)&&(i=r),ar(mt(n,1,nt,!0),ae(i,2))}),ay=$e(function(n){var i=ln(n);return i=typeof i=="function"?i:r,ar(mt(n,1,nt,!0),r,i)});function ly(n){return n&&n.length?ar(n):[]}function cy(n,i){return n&&n.length?ar(n,ae(i,2)):[]}function uy(n,i){return i=typeof i=="function"?i:r,n&&n.length?ar(n,r,i):[]}function Ll(n){if(!(n&&n.length))return[];var i=0;return n=nr(n,function(l){if(nt(l))return i=ft(l.length,i),!0}),Qa(i,function(l){return Ze(n,Ka(l))})}function Od(n,i){if(!(n&&n.length))return[];var l=Ll(n);return i==null?l:Ze(l,function(f){return Nt(i,r,f)})}var fy=$e(function(n,i){return nt(n)?Xi(n,i):[]}),dy=$e(function(n){return vl(nr(n,nt))}),hy=$e(function(n){var i=ln(n);return nt(i)&&(i=r),vl(nr(n,nt),ae(i,2))}),py=$e(function(n){var i=ln(n);return i=typeof i=="function"?i:r,vl(nr(n,nt),r,i)}),gy=$e(Ll);function vy(n,i){return Xf(n||[],i||[],Zi)}function my(n,i){return Xf(n||[],i||[],es)}var by=$e(function(n){var i=n.length,l=i>1?n[i-1]:r;return l=typeof l=="function"?(n.pop(),l):r,Od(n,l)});function Pd(n){var i=m(n);return i.__chain__=!0,i}function yy(n,i){return i(n),n}function po(n,i){return i(n)}var _y=zn(function(n){var i=n.length,l=i?n[0]:0,f=this.__wrapped__,g=function(y){return rl(y,n)};return i>1||this.__actions__.length||!(f instanceof Se)||!Nn(l)?this.thru(g):(f=f.slice(l,+l+(i?1:0)),f.__actions__.push({func:po,args:[g],thisArg:r}),new sn(f,this.__chain__).thru(function(y){return i&&!y.length&&y.push(r),y}))});function wy(){return Pd(this)}function $y(){return new sn(this.value(),this.__chain__)}function xy(){this.__values__===r&&(this.__values__=Vd(this.value()));var n=this.__index__>=this.__values__.length,i=n?r:this.__values__[this.__index__++];return{done:n,value:i}}function ky(){return this}function Cy(n){for(var i,l=this;l instanceof Ys;){var f=Ed(l);f.__index__=0,f.__values__=r,i?g.__wrapped__=f:i=f;var g=f;l=l.__wrapped__}return g.__wrapped__=n,i}function Sy(){var n=this.__wrapped__;if(n instanceof Se){var i=n;return this.__actions__.length&&(i=new Se(this)),i=i.reverse(),i.__actions__.push({func:po,args:[Rl],thisArg:r}),new sn(i,this.__chain__)}return this.thru(Rl)}function Ey(){return Zf(this.__wrapped__,this.__actions__)}var Ty=so(function(n,i,l){He.call(n,l)?++n[l]:Fn(n,l,1)});function Ay(n,i,l){var f=ge(n)?cf:ym;return l&&kt(n,i,l)&&(i=r),f(n,ae(i,3))}function Iy(n,i){var l=ge(n)?nr:Of;return l(n,ae(i,3))}var Ry=ad(Td),Ly=ad(Ad);function Oy(n,i){return mt(go(n,i),1)}function Py(n,i){return mt(go(n,i),te)}function My(n,i,l){return l=l===r?1:be(l),mt(go(n,i),l)}function Md(n,i){var l=ge(n)?nn:or;return l(n,ae(i,3))}function Bd(n,i){var l=ge(n)?e2:Lf;return l(n,ae(i,3))}var By=so(function(n,i,l){He.call(n,l)?n[l].push(i):Fn(n,l,[i])});function Uy(n,i,l,f){n=Ot(n)?n:ci(n),l=l&&!f?be(l):0;var g=n.length;return l<0&&(l=ft(g+l,0)),_o(n)?l<=g&&n.indexOf(i,l)>-1:!!g&&Xr(n,i,l)>-1}var Dy=$e(function(n,i,l){var f=-1,g=typeof i=="function",y=Ot(n)?B(n.length):[];return or(n,function(x){y[++f]=g?Nt(i,x,l):Yi(x,i,l)}),y}),Hy=so(function(n,i,l){Fn(n,l,i)});function go(n,i){var l=ge(n)?Ze:Hf;return l(n,ae(i,3))}function Fy(n,i,l,f){return n==null?[]:(ge(i)||(i=i==null?[]:[i]),l=f?r:l,ge(l)||(l=l==null?[]:[l]),Nf(n,i,l))}var jy=so(function(n,i,l){n[l?0:1].push(i)},function(){return[[],[]]});function zy(n,i,l){var f=ge(n)?Wa:hf,g=arguments.length<3;return f(n,ae(i,4),l,g,or)}function Ny(n,i,l){var f=ge(n)?t2:hf,g=arguments.length<3;return f(n,ae(i,4),l,g,Lf)}function Wy(n,i){var l=ge(n)?nr:Of;return l(n,bo(ae(i,3)))}function qy(n){var i=ge(n)?Tf:Um;return i(n)}function Ky(n,i,l){(l?kt(n,i,l):i===r)?i=1:i=be(i);var f=ge(n)?pm:Dm;return f(n,i)}function Gy(n){var i=ge(n)?gm:Fm;return i(n)}function Vy(n){if(n==null)return 0;if(Ot(n))return _o(n)?Jr(n):n.length;var i=wt(n);return i==lt||i==Ke?n.size:cl(n).length}function Qy(n,i,l){var f=ge(n)?qa:jm;return l&&kt(n,i,l)&&(i=r),f(n,ae(i,3))}var Zy=$e(function(n,i){if(n==null)return[];var l=i.length;return l>1&&kt(n,i[0],i[1])?i=[]:l>2&&kt(i[0],i[1],i[2])&&(i=[i[0]]),Nf(n,mt(i,1),[])}),vo=I2||function(){return vt.Date.now()};function Xy(n,i){if(typeof i!="function")throw new rn(c);return n=be(n),function(){if(--n<1)return i.apply(this,arguments)}}function Ud(n,i,l){return i=l?r:i,i=n&&i==null?n.length:i,jn(n,N,r,r,r,r,i)}function Dd(n,i){var l;if(typeof i!="function")throw new rn(c);return n=be(n),function(){return--n>0&&(l=i.apply(this,arguments)),n<=1&&(i=r),l}}var Ol=$e(function(n,i,l){var f=S;if(l.length){var g=ir(l,ai(Ol));f|=E}return jn(n,f,i,l,g)}),Hd=$e(function(n,i,l){var f=S|L;if(l.length){var g=ir(l,ai(Hd));f|=E}return jn(i,f,n,l,g)});function Fd(n,i,l){i=l?r:i;var f=jn(n,M,r,r,r,r,r,i);return f.placeholder=Fd.placeholder,f}function jd(n,i,l){i=l?r:i;var f=jn(n,R,r,r,r,r,r,i);return f.placeholder=jd.placeholder,f}function zd(n,i,l){var f,g,y,x,C,A,F=0,j=!1,W=!1,V=!0;if(typeof n!="function")throw new rn(c);i=cn(i)||0,et(l)&&(j=!!l.leading,W="maxWait"in l,y=W?ft(cn(l.maxWait)||0,i):y,V="trailing"in l?!!l.trailing:V);function ne(rt){var mn=f,Kn=g;return f=g=r,F=rt,x=n.apply(Kn,mn),x}function ce(rt){return F=rt,C=rs(ke,i),j?ne(rt):x}function _e(rt){var mn=rt-A,Kn=rt-F,ah=i-mn;return W?_t(ah,y-Kn):ah}function ue(rt){var mn=rt-A,Kn=rt-F;return A===r||mn>=i||mn<0||W&&Kn>=y}function ke(){var rt=vo();if(ue(rt))return Ee(rt);C=rs(ke,_e(rt))}function Ee(rt){return C=r,V&&f?ne(rt):(f=g=r,x)}function Gt(){C!==r&&Yf(C),F=0,f=A=g=C=r}function Ct(){return C===r?x:Ee(vo())}function Vt(){var rt=vo(),mn=ue(rt);if(f=arguments,g=this,A=rt,mn){if(C===r)return ce(A);if(W)return Yf(C),C=rs(ke,i),ne(A)}return C===r&&(C=rs(ke,i)),x}return Vt.cancel=Gt,Vt.flush=Ct,Vt}var Yy=$e(function(n,i){return Rf(n,1,i)}),Jy=$e(function(n,i,l){return Rf(n,cn(i)||0,l)});function e_(n){return jn(n,ie)}function mo(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new rn(c);var l=function(){var f=arguments,g=i?i.apply(this,f):f[0],y=l.cache;if(y.has(g))return y.get(g);var x=n.apply(this,f);return l.cache=y.set(g,x)||y,x};return l.cache=new(mo.Cache||Hn),l}mo.Cache=Hn;function bo(n){if(typeof n!="function")throw new rn(c);return function(){var i=arguments;switch(i.length){case 0:return!n.call(this);case 1:return!n.call(this,i[0]);case 2:return!n.call(this,i[0],i[1]);case 3:return!n.call(this,i[0],i[1],i[2])}return!n.apply(this,i)}}function t_(n){return Dd(2,n)}var n_=zm(function(n,i){i=i.length==1&&ge(i[0])?Ze(i[0],Wt(ae())):Ze(mt(i,1),Wt(ae()));var l=i.length;return $e(function(f){for(var g=-1,y=_t(f.length,l);++g<y;)f[g]=i[g].call(this,f[g]);return Nt(n,this,f)})}),Pl=$e(function(n,i){var l=ir(i,ai(Pl));return jn(n,E,r,i,l)}),Nd=$e(function(n,i){var l=ir(i,ai(Nd));return jn(n,O,r,i,l)}),r_=zn(function(n,i){return jn(n,q,r,r,r,i)});function i_(n,i){if(typeof n!="function")throw new rn(c);return i=i===r?i:be(i),$e(n,i)}function s_(n,i){if(typeof n!="function")throw new rn(c);return i=i==null?0:ft(be(i),0),$e(function(l){var f=l[i],g=cr(l,0,i);return f&&rr(g,f),Nt(n,this,g)})}function o_(n,i,l){var f=!0,g=!0;if(typeof n!="function")throw new rn(c);return et(l)&&(f="leading"in l?!!l.leading:f,g="trailing"in l?!!l.trailing:g),zd(n,i,{leading:f,maxWait:i,trailing:g})}function a_(n){return Ud(n,1)}function l_(n,i){return Pl(bl(i),n)}function c_(){if(!arguments.length)return[];var n=arguments[0];return ge(n)?n:[n]}function u_(n){return on(n,_)}function f_(n,i){return i=typeof i=="function"?i:r,on(n,_,i)}function d_(n){return on(n,v|_)}function h_(n,i){return i=typeof i=="function"?i:r,on(n,v|_,i)}function p_(n,i){return i==null||If(n,i,ht(i))}function vn(n,i){return n===i||n!==n&&i!==i}var g_=co(ol),v_=co(function(n,i){return n>=i}),Dr=Bf(function(){return arguments}())?Bf:function(n){return tt(n)&&He.call(n,"callee")&&!$f.call(n,"callee")},ge=B.isArray,m_=nf?Wt(nf):Cm;function Ot(n){return n!=null&&yo(n.length)&&!Wn(n)}function nt(n){return tt(n)&&Ot(n)}function b_(n){return n===!0||n===!1||tt(n)&&xt(n)==Je}var ur=L2||ql,y_=rf?Wt(rf):Sm;function __(n){return tt(n)&&n.nodeType===1&&!is(n)}function w_(n){if(n==null)return!0;if(Ot(n)&&(ge(n)||typeof n=="string"||typeof n.splice=="function"||ur(n)||li(n)||Dr(n)))return!n.length;var i=wt(n);if(i==lt||i==Ke)return!n.size;if(ns(n))return!cl(n).length;for(var l in n)if(He.call(n,l))return!1;return!0}function $_(n,i){return Ji(n,i)}function x_(n,i,l){l=typeof l=="function"?l:r;var f=l?l(n,i):r;return f===r?Ji(n,i,r,l):!!f}function Ml(n){if(!tt(n))return!1;var i=xt(n);return i==Ht||i==Tt||typeof n.message=="string"&&typeof n.name=="string"&&!is(n)}function k_(n){return typeof n=="number"&&kf(n)}function Wn(n){if(!et(n))return!1;var i=xt(n);return i==At||i==Ft||i==oe||i==ot}function Wd(n){return typeof n=="number"&&n==be(n)}function yo(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=de}function et(n){var i=typeof n;return n!=null&&(i=="object"||i=="function")}function tt(n){return n!=null&&typeof n=="object"}var qd=sf?Wt(sf):Tm;function C_(n,i){return n===i||ll(n,i,Cl(i))}function S_(n,i,l){return l=typeof l=="function"?l:r,ll(n,i,Cl(i),l)}function E_(n){return Kd(n)&&n!=+n}function T_(n){if(fb(n))throw new pe(a);return Uf(n)}function A_(n){return n===null}function I_(n){return n==null}function Kd(n){return typeof n=="number"||tt(n)&&xt(n)==It}function is(n){if(!tt(n)||xt(n)!=dt)return!1;var i=qs(n);if(i===null)return!0;var l=He.call(i,"constructor")&&i.constructor;return typeof l=="function"&&l instanceof l&&js.call(l)==S2}var Bl=of?Wt(of):Am;function R_(n){return Wd(n)&&n>=-de&&n<=de}var Gd=af?Wt(af):Im;function _o(n){return typeof n=="string"||!ge(n)&&tt(n)&&xt(n)==ct}function Kt(n){return typeof n=="symbol"||tt(n)&&xt(n)==jt}var li=lf?Wt(lf):Rm;function L_(n){return n===r}function O_(n){return tt(n)&&wt(n)==me}function P_(n){return tt(n)&&xt(n)==yt}var M_=co(ul),B_=co(function(n,i){return n<=i});function Vd(n){if(!n)return[];if(Ot(n))return _o(n)?pn(n):Lt(n);if(qi&&n[qi])return p2(n[qi]());var i=wt(n),l=i==lt?Xa:i==Ke?Ds:ci;return l(n)}function qn(n){if(!n)return n===0?n:0;if(n=cn(n),n===te||n===-te){var i=n<0?-1:1;return i*Te}return n===n?n:0}function be(n){var i=qn(n),l=i%1;return i===i?l?i-l:i:0}function Qd(n){return n?Pr(be(n),0,re):0}function cn(n){if(typeof n=="number")return n;if(Kt(n))return Re;if(et(n)){var i=typeof n.valueOf=="function"?n.valueOf():n;n=et(i)?i+"":i}if(typeof n!="string")return n===0?n:+n;n=pf(n);var l=mv.test(n);return l||yv.test(n)?Xv(n.slice(2),l?2:8):vv.test(n)?Re:+n}function Zd(n){return Tn(n,Pt(n))}function U_(n){return n?Pr(be(n),-de,de):n===0?n:0}function Ue(n){return n==null?"":qt(n)}var D_=si(function(n,i){if(ns(i)||Ot(i)){Tn(i,ht(i),n);return}for(var l in i)He.call(i,l)&&Zi(n,l,i[l])}),Xd=si(function(n,i){Tn(i,Pt(i),n)}),wo=si(function(n,i,l,f){Tn(i,Pt(i),n,f)}),H_=si(function(n,i,l,f){Tn(i,ht(i),n,f)}),F_=zn(rl);function j_(n,i){var l=ii(n);return i==null?l:Af(l,i)}var z_=$e(function(n,i){n=Ne(n);var l=-1,f=i.length,g=f>2?i[2]:r;for(g&&kt(i[0],i[1],g)&&(f=1);++l<f;)for(var y=i[l],x=Pt(y),C=-1,A=x.length;++C<A;){var F=x[C],j=n[F];(j===r||vn(j,ti[F])&&!He.call(n,F))&&(n[F]=y[F])}return n}),N_=$e(function(n){return n.push(r,pd),Nt(Yd,r,n)});function W_(n,i){return uf(n,ae(i,3),En)}function q_(n,i){return uf(n,ae(i,3),sl)}function K_(n,i){return n==null?n:il(n,ae(i,3),Pt)}function G_(n,i){return n==null?n:Pf(n,ae(i,3),Pt)}function V_(n,i){return n&&En(n,ae(i,3))}function Q_(n,i){return n&&sl(n,ae(i,3))}function Z_(n){return n==null?[]:to(n,ht(n))}function X_(n){return n==null?[]:to(n,Pt(n))}function Ul(n,i,l){var f=n==null?r:Mr(n,i);return f===r?l:f}function Y_(n,i){return n!=null&&md(n,i,wm)}function Dl(n,i){return n!=null&&md(n,i,$m)}var J_=cd(function(n,i,l){i!=null&&typeof i.toString!="function"&&(i=zs.call(i)),n[i]=l},Fl(Mt)),e3=cd(function(n,i,l){i!=null&&typeof i.toString!="function"&&(i=zs.call(i)),He.call(n,i)?n[i].push(l):n[i]=[l]},ae),t3=$e(Yi);function ht(n){return Ot(n)?Ef(n):cl(n)}function Pt(n){return Ot(n)?Ef(n,!0):Lm(n)}function n3(n,i){var l={};return i=ae(i,3),En(n,function(f,g,y){Fn(l,i(f,g,y),f)}),l}function r3(n,i){var l={};return i=ae(i,3),En(n,function(f,g,y){Fn(l,g,i(f,g,y))}),l}var i3=si(function(n,i,l){no(n,i,l)}),Yd=si(function(n,i,l,f){no(n,i,l,f)}),s3=zn(function(n,i){var l={};if(n==null)return l;var f=!1;i=Ze(i,function(y){return y=lr(y,n),f||(f=y.length>1),y}),Tn(n,xl(n),l),f&&(l=on(l,v|b|_,Jm));for(var g=i.length;g--;)gl(l,i[g]);return l});function o3(n,i){return Jd(n,bo(ae(i)))}var a3=zn(function(n,i){return n==null?{}:Pm(n,i)});function Jd(n,i){if(n==null)return{};var l=Ze(xl(n),function(f){return[f]});return i=ae(i),Wf(n,l,function(f,g){return i(f,g[0])})}function l3(n,i,l){i=lr(i,n);var f=-1,g=i.length;for(g||(g=1,n=r);++f<g;){var y=n==null?r:n[An(i[f])];y===r&&(f=g,y=l),n=Wn(y)?y.call(n):y}return n}function c3(n,i,l){return n==null?n:es(n,i,l)}function u3(n,i,l,f){return f=typeof f=="function"?f:r,n==null?n:es(n,i,l,f)}var eh=dd(ht),th=dd(Pt);function f3(n,i,l){var f=ge(n),g=f||ur(n)||li(n);if(i=ae(i,4),l==null){var y=n&&n.constructor;g?l=f?new y:[]:et(n)?l=Wn(y)?ii(qs(n)):{}:l={}}return(g?nn:En)(n,function(x,C,A){return i(l,x,C,A)}),l}function d3(n,i){return n==null?!0:gl(n,i)}function h3(n,i,l){return n==null?n:Qf(n,i,bl(l))}function p3(n,i,l,f){return f=typeof f=="function"?f:r,n==null?n:Qf(n,i,bl(l),f)}function ci(n){return n==null?[]:Za(n,ht(n))}function g3(n){return n==null?[]:Za(n,Pt(n))}function v3(n,i,l){return l===r&&(l=i,i=r),l!==r&&(l=cn(l),l=l===l?l:0),i!==r&&(i=cn(i),i=i===i?i:0),Pr(cn(n),i,l)}function m3(n,i,l){return i=qn(i),l===r?(l=i,i=0):l=qn(l),n=cn(n),xm(n,i,l)}function b3(n,i,l){if(l&&typeof l!="boolean"&&kt(n,i,l)&&(i=l=r),l===r&&(typeof i=="boolean"?(l=i,i=r):typeof n=="boolean"&&(l=n,n=r)),n===r&&i===r?(n=0,i=1):(n=qn(n),i===r?(i=n,n=0):i=qn(i)),n>i){var f=n;n=i,i=f}if(l||n%1||i%1){var g=Cf();return _t(n+g*(i-n+Zv("1e-"+((g+"").length-1))),i)}return dl(n,i)}var y3=oi(function(n,i,l){return i=i.toLowerCase(),n+(l?nh(i):i)});function nh(n){return Hl(Ue(n).toLowerCase())}function rh(n){return n=Ue(n),n&&n.replace(wv,c2).replace(Fv,"")}function _3(n,i,l){n=Ue(n),i=qt(i);var f=n.length;l=l===r?f:Pr(be(l),0,f);var g=l;return l-=i.length,l>=0&&n.slice(l,g)==i}function w3(n){return n=Ue(n),n&&tv.test(n)?n.replace(Ou,u2):n}function $3(n){return n=Ue(n),n&&av.test(n)?n.replace(Pa,"\\$&"):n}var x3=oi(function(n,i,l){return n+(l?"-":"")+i.toLowerCase()}),k3=oi(function(n,i,l){return n+(l?" ":"")+i.toLowerCase()}),C3=od("toLowerCase");function S3(n,i,l){n=Ue(n),i=be(i);var f=i?Jr(n):0;if(!i||f>=i)return n;var g=(i-f)/2;return lo(Qs(g),l)+n+lo(Vs(g),l)}function E3(n,i,l){n=Ue(n),i=be(i);var f=i?Jr(n):0;return i&&f<i?n+lo(i-f,l):n}function T3(n,i,l){n=Ue(n),i=be(i);var f=i?Jr(n):0;return i&&f<i?lo(i-f,l)+n:n}function A3(n,i,l){return l||i==null?i=0:i&&(i=+i),B2(Ue(n).replace(Ma,""),i||0)}function I3(n,i,l){return(l?kt(n,i,l):i===r)?i=1:i=be(i),hl(Ue(n),i)}function R3(){var n=arguments,i=Ue(n[0]);return n.length<3?i:i.replace(n[1],n[2])}var L3=oi(function(n,i,l){return n+(l?"_":"")+i.toLowerCase()});function O3(n,i,l){return l&&typeof l!="number"&&kt(n,i,l)&&(i=l=r),l=l===r?re:l>>>0,l?(n=Ue(n),n&&(typeof i=="string"||i!=null&&!Bl(i))&&(i=qt(i),!i&&Yr(n))?cr(pn(n),0,l):n.split(i,l)):[]}var P3=oi(function(n,i,l){return n+(l?" ":"")+Hl(i)});function M3(n,i,l){return n=Ue(n),l=l==null?0:Pr(be(l),0,n.length),i=qt(i),n.slice(l,l+i.length)==i}function B3(n,i,l){var f=m.templateSettings;l&&kt(n,i,l)&&(i=r),n=Ue(n),i=wo({},i,f,hd);var g=wo({},i.imports,f.imports,hd),y=ht(g),x=Za(g,y),C,A,F=0,j=i.interpolate||Os,W="__p += '",V=Ya((i.escape||Os).source+"|"+j.source+"|"+(j===Pu?gv:Os).source+"|"+(i.evaluate||Os).source+"|$","g"),ne="//# sourceURL="+(He.call(i,"sourceURL")?(i.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++qv+"]")+`
`;n.replace(V,function(ue,ke,Ee,Gt,Ct,Vt){return Ee||(Ee=Gt),W+=n.slice(F,Vt).replace($v,f2),ke&&(C=!0,W+=`' +
__e(`+ke+`) +
'`),Ct&&(A=!0,W+=`';
`+Ct+`;
__p += '`),Ee&&(W+=`' +
((__t = (`+Ee+`)) == null ? '' : __t) +
'`),F=Vt+ue.length,ue}),W+=`';
`;var ce=He.call(i,"variable")&&i.variable;if(!ce)W=`with (obj) {
`+W+`
}
`;else if(hv.test(ce))throw new pe(u);W=(A?W.replace(Xg,""):W).replace(Yg,"$1").replace(Jg,"$1;"),W="function("+(ce||"obj")+`) {
`+(ce?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(C?", __e = _.escape":"")+(A?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+W+`return __p
}`;var _e=sh(function(){return Oe(y,ne+"return "+W).apply(r,x)});if(_e.source=W,Ml(_e))throw _e;return _e}function U3(n){return Ue(n).toLowerCase()}function D3(n){return Ue(n).toUpperCase()}function H3(n,i,l){if(n=Ue(n),n&&(l||i===r))return pf(n);if(!n||!(i=qt(i)))return n;var f=pn(n),g=pn(i),y=gf(f,g),x=vf(f,g)+1;return cr(f,y,x).join("")}function F3(n,i,l){if(n=Ue(n),n&&(l||i===r))return n.slice(0,bf(n)+1);if(!n||!(i=qt(i)))return n;var f=pn(n),g=vf(f,pn(i))+1;return cr(f,0,g).join("")}function j3(n,i,l){if(n=Ue(n),n&&(l||i===r))return n.replace(Ma,"");if(!n||!(i=qt(i)))return n;var f=pn(n),g=gf(f,pn(i));return cr(f,g).join("")}function z3(n,i){var l=G,f=X;if(et(i)){var g="separator"in i?i.separator:g;l="length"in i?be(i.length):l,f="omission"in i?qt(i.omission):f}n=Ue(n);var y=n.length;if(Yr(n)){var x=pn(n);y=x.length}if(l>=y)return n;var C=l-Jr(f);if(C<1)return f;var A=x?cr(x,0,C).join(""):n.slice(0,C);if(g===r)return A+f;if(x&&(C+=A.length-C),Bl(g)){if(n.slice(C).search(g)){var F,j=A;for(g.global||(g=Ya(g.source,Ue(Mu.exec(g))+"g")),g.lastIndex=0;F=g.exec(j);)var W=F.index;A=A.slice(0,W===r?C:W)}}else if(n.indexOf(qt(g),C)!=C){var V=A.lastIndexOf(g);V>-1&&(A=A.slice(0,V))}return A+f}function N3(n){return n=Ue(n),n&&ev.test(n)?n.replace(Lu,b2):n}var W3=oi(function(n,i,l){return n+(l?" ":"")+i.toUpperCase()}),Hl=od("toUpperCase");function ih(n,i,l){return n=Ue(n),i=l?r:i,i===r?h2(n)?w2(n):i2(n):n.match(i)||[]}var sh=$e(function(n,i){try{return Nt(n,r,i)}catch(l){return Ml(l)?l:new pe(l)}}),q3=zn(function(n,i){return nn(i,function(l){l=An(l),Fn(n,l,Ol(n[l],n))}),n});function K3(n){var i=n==null?0:n.length,l=ae();return n=i?Ze(n,function(f){if(typeof f[1]!="function")throw new rn(c);return[l(f[0]),f[1]]}):[],$e(function(f){for(var g=-1;++g<i;){var y=n[g];if(Nt(y[0],this,f))return Nt(y[1],this,f)}})}function G3(n){return bm(on(n,v))}function Fl(n){return function(){return n}}function V3(n,i){return n==null||n!==n?i:n}var Q3=ld(),Z3=ld(!0);function Mt(n){return n}function jl(n){return Df(typeof n=="function"?n:on(n,v))}function X3(n){return Ff(on(n,v))}function Y3(n,i){return jf(n,on(i,v))}var J3=$e(function(n,i){return function(l){return Yi(l,n,i)}}),ew=$e(function(n,i){return function(l){return Yi(n,l,i)}});function zl(n,i,l){var f=ht(i),g=to(i,f);l==null&&!(et(i)&&(g.length||!f.length))&&(l=i,i=n,n=this,g=to(i,ht(i)));var y=!(et(l)&&"chain"in l)||!!l.chain,x=Wn(n);return nn(g,function(C){var A=i[C];n[C]=A,x&&(n.prototype[C]=function(){var F=this.__chain__;if(y||F){var j=n(this.__wrapped__),W=j.__actions__=Lt(this.__actions__);return W.push({func:A,args:arguments,thisArg:n}),j.__chain__=F,j}return A.apply(n,rr([this.value()],arguments))})}),n}function tw(){return vt._===this&&(vt._=E2),this}function Nl(){}function nw(n){return n=be(n),$e(function(i){return zf(i,n)})}var rw=_l(Ze),iw=_l(cf),sw=_l(qa);function oh(n){return El(n)?Ka(An(n)):Mm(n)}function ow(n){return function(i){return n==null?r:Mr(n,i)}}var aw=ud(),lw=ud(!0);function Wl(){return[]}function ql(){return!1}function cw(){return{}}function uw(){return""}function fw(){return!0}function dw(n,i){if(n=be(n),n<1||n>de)return[];var l=re,f=_t(n,re);i=ae(i),n-=re;for(var g=Qa(f,i);++l<n;)i(l);return g}function hw(n){return ge(n)?Ze(n,An):Kt(n)?[n]:Lt(Sd(Ue(n)))}function pw(n){var i=++C2;return Ue(n)+i}var gw=ao(function(n,i){return n+i},0),vw=wl("ceil"),mw=ao(function(n,i){return n/i},1),bw=wl("floor");function yw(n){return n&&n.length?eo(n,Mt,ol):r}function _w(n,i){return n&&n.length?eo(n,ae(i,2),ol):r}function ww(n){return df(n,Mt)}function $w(n,i){return df(n,ae(i,2))}function xw(n){return n&&n.length?eo(n,Mt,ul):r}function kw(n,i){return n&&n.length?eo(n,ae(i,2),ul):r}var Cw=ao(function(n,i){return n*i},1),Sw=wl("round"),Ew=ao(function(n,i){return n-i},0);function Tw(n){return n&&n.length?Va(n,Mt):0}function Aw(n,i){return n&&n.length?Va(n,ae(i,2)):0}return m.after=Xy,m.ary=Ud,m.assign=D_,m.assignIn=Xd,m.assignInWith=wo,m.assignWith=H_,m.at=F_,m.before=Dd,m.bind=Ol,m.bindAll=q3,m.bindKey=Hd,m.castArray=c_,m.chain=Pd,m.chunk=bb,m.compact=yb,m.concat=_b,m.cond=K3,m.conforms=G3,m.constant=Fl,m.countBy=Ty,m.create=j_,m.curry=Fd,m.curryRight=jd,m.debounce=zd,m.defaults=z_,m.defaultsDeep=N_,m.defer=Yy,m.delay=Jy,m.difference=wb,m.differenceBy=$b,m.differenceWith=xb,m.drop=kb,m.dropRight=Cb,m.dropRightWhile=Sb,m.dropWhile=Eb,m.fill=Tb,m.filter=Iy,m.flatMap=Oy,m.flatMapDeep=Py,m.flatMapDepth=My,m.flatten=Id,m.flattenDeep=Ab,m.flattenDepth=Ib,m.flip=e_,m.flow=Q3,m.flowRight=Z3,m.fromPairs=Rb,m.functions=Z_,m.functionsIn=X_,m.groupBy=By,m.initial=Ob,m.intersection=Pb,m.intersectionBy=Mb,m.intersectionWith=Bb,m.invert=J_,m.invertBy=e3,m.invokeMap=Dy,m.iteratee=jl,m.keyBy=Hy,m.keys=ht,m.keysIn=Pt,m.map=go,m.mapKeys=n3,m.mapValues=r3,m.matches=X3,m.matchesProperty=Y3,m.memoize=mo,m.merge=i3,m.mergeWith=Yd,m.method=J3,m.methodOf=ew,m.mixin=zl,m.negate=bo,m.nthArg=nw,m.omit=s3,m.omitBy=o3,m.once=t_,m.orderBy=Fy,m.over=rw,m.overArgs=n_,m.overEvery=iw,m.overSome=sw,m.partial=Pl,m.partialRight=Nd,m.partition=jy,m.pick=a3,m.pickBy=Jd,m.property=oh,m.propertyOf=ow,m.pull=Fb,m.pullAll=Ld,m.pullAllBy=jb,m.pullAllWith=zb,m.pullAt=Nb,m.range=aw,m.rangeRight=lw,m.rearg=r_,m.reject=Wy,m.remove=Wb,m.rest=i_,m.reverse=Rl,m.sampleSize=Ky,m.set=c3,m.setWith=u3,m.shuffle=Gy,m.slice=qb,m.sortBy=Zy,m.sortedUniq=Yb,m.sortedUniqBy=Jb,m.split=O3,m.spread=s_,m.tail=ey,m.take=ty,m.takeRight=ny,m.takeRightWhile=ry,m.takeWhile=iy,m.tap=yy,m.throttle=o_,m.thru=po,m.toArray=Vd,m.toPairs=eh,m.toPairsIn=th,m.toPath=hw,m.toPlainObject=Zd,m.transform=f3,m.unary=a_,m.union=sy,m.unionBy=oy,m.unionWith=ay,m.uniq=ly,m.uniqBy=cy,m.uniqWith=uy,m.unset=d3,m.unzip=Ll,m.unzipWith=Od,m.update=h3,m.updateWith=p3,m.values=ci,m.valuesIn=g3,m.without=fy,m.words=ih,m.wrap=l_,m.xor=dy,m.xorBy=hy,m.xorWith=py,m.zip=gy,m.zipObject=vy,m.zipObjectDeep=my,m.zipWith=by,m.entries=eh,m.entriesIn=th,m.extend=Xd,m.extendWith=wo,zl(m,m),m.add=gw,m.attempt=sh,m.camelCase=y3,m.capitalize=nh,m.ceil=vw,m.clamp=v3,m.clone=u_,m.cloneDeep=d_,m.cloneDeepWith=h_,m.cloneWith=f_,m.conformsTo=p_,m.deburr=rh,m.defaultTo=V3,m.divide=mw,m.endsWith=_3,m.eq=vn,m.escape=w3,m.escapeRegExp=$3,m.every=Ay,m.find=Ry,m.findIndex=Td,m.findKey=W_,m.findLast=Ly,m.findLastIndex=Ad,m.findLastKey=q_,m.floor=bw,m.forEach=Md,m.forEachRight=Bd,m.forIn=K_,m.forInRight=G_,m.forOwn=V_,m.forOwnRight=Q_,m.get=Ul,m.gt=g_,m.gte=v_,m.has=Y_,m.hasIn=Dl,m.head=Rd,m.identity=Mt,m.includes=Uy,m.indexOf=Lb,m.inRange=m3,m.invoke=t3,m.isArguments=Dr,m.isArray=ge,m.isArrayBuffer=m_,m.isArrayLike=Ot,m.isArrayLikeObject=nt,m.isBoolean=b_,m.isBuffer=ur,m.isDate=y_,m.isElement=__,m.isEmpty=w_,m.isEqual=$_,m.isEqualWith=x_,m.isError=Ml,m.isFinite=k_,m.isFunction=Wn,m.isInteger=Wd,m.isLength=yo,m.isMap=qd,m.isMatch=C_,m.isMatchWith=S_,m.isNaN=E_,m.isNative=T_,m.isNil=I_,m.isNull=A_,m.isNumber=Kd,m.isObject=et,m.isObjectLike=tt,m.isPlainObject=is,m.isRegExp=Bl,m.isSafeInteger=R_,m.isSet=Gd,m.isString=_o,m.isSymbol=Kt,m.isTypedArray=li,m.isUndefined=L_,m.isWeakMap=O_,m.isWeakSet=P_,m.join=Ub,m.kebabCase=x3,m.last=ln,m.lastIndexOf=Db,m.lowerCase=k3,m.lowerFirst=C3,m.lt=M_,m.lte=B_,m.max=yw,m.maxBy=_w,m.mean=ww,m.meanBy=$w,m.min=xw,m.minBy=kw,m.stubArray=Wl,m.stubFalse=ql,m.stubObject=cw,m.stubString=uw,m.stubTrue=fw,m.multiply=Cw,m.nth=Hb,m.noConflict=tw,m.noop=Nl,m.now=vo,m.pad=S3,m.padEnd=E3,m.padStart=T3,m.parseInt=A3,m.random=b3,m.reduce=zy,m.reduceRight=Ny,m.repeat=I3,m.replace=R3,m.result=l3,m.round=Sw,m.runInContext=T,m.sample=qy,m.size=Vy,m.snakeCase=L3,m.some=Qy,m.sortedIndex=Kb,m.sortedIndexBy=Gb,m.sortedIndexOf=Vb,m.sortedLastIndex=Qb,m.sortedLastIndexBy=Zb,m.sortedLastIndexOf=Xb,m.startCase=P3,m.startsWith=M3,m.subtract=Ew,m.sum=Tw,m.sumBy=Aw,m.template=B3,m.times=dw,m.toFinite=qn,m.toInteger=be,m.toLength=Qd,m.toLower=U3,m.toNumber=cn,m.toSafeInteger=U_,m.toString=Ue,m.toUpper=D3,m.trim=H3,m.trimEnd=F3,m.trimStart=j3,m.truncate=z3,m.unescape=N3,m.uniqueId=pw,m.upperCase=W3,m.upperFirst=Hl,m.each=Md,m.eachRight=Bd,m.first=Rd,zl(m,function(){var n={};return En(m,function(i,l){He.call(m.prototype,l)||(n[l]=i)}),n}(),{chain:!1}),m.VERSION=s,nn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){m[n].placeholder=m}),nn(["drop","take"],function(n,i){Se.prototype[n]=function(l){l=l===r?1:ft(be(l),0);var f=this.__filtered__&&!i?new Se(this):this.clone();return f.__filtered__?f.__takeCount__=_t(l,f.__takeCount__):f.__views__.push({size:_t(l,re),type:n+(f.__dir__<0?"Right":"")}),f},Se.prototype[n+"Right"]=function(l){return this.reverse()[n](l).reverse()}}),nn(["filter","map","takeWhile"],function(n,i){var l=i+1,f=l==he||l==K;Se.prototype[n]=function(g){var y=this.clone();return y.__iteratees__.push({iteratee:ae(g,3),type:l}),y.__filtered__=y.__filtered__||f,y}}),nn(["head","last"],function(n,i){var l="take"+(i?"Right":"");Se.prototype[n]=function(){return this[l](1).value()[0]}}),nn(["initial","tail"],function(n,i){var l="drop"+(i?"":"Right");Se.prototype[n]=function(){return this.__filtered__?new Se(this):this[l](1)}}),Se.prototype.compact=function(){return this.filter(Mt)},Se.prototype.find=function(n){return this.filter(n).head()},Se.prototype.findLast=function(n){return this.reverse().find(n)},Se.prototype.invokeMap=$e(function(n,i){return typeof n=="function"?new Se(this):this.map(function(l){return Yi(l,n,i)})}),Se.prototype.reject=function(n){return this.filter(bo(ae(n)))},Se.prototype.slice=function(n,i){n=be(n);var l=this;return l.__filtered__&&(n>0||i<0)?new Se(l):(n<0?l=l.takeRight(-n):n&&(l=l.drop(n)),i!==r&&(i=be(i),l=i<0?l.dropRight(-i):l.take(i-n)),l)},Se.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Se.prototype.toArray=function(){return this.take(re)},En(Se.prototype,function(n,i){var l=/^(?:filter|find|map|reject)|While$/.test(i),f=/^(?:head|last)$/.test(i),g=m[f?"take"+(i=="last"?"Right":""):i],y=f||/^find/.test(i);g&&(m.prototype[i]=function(){var x=this.__wrapped__,C=f?[1]:arguments,A=x instanceof Se,F=C[0],j=A||ge(x),W=function(ke){var Ee=g.apply(m,rr([ke],C));return f&&V?Ee[0]:Ee};j&&l&&typeof F=="function"&&F.length!=1&&(A=j=!1);var V=this.__chain__,ne=!!this.__actions__.length,ce=y&&!V,_e=A&&!ne;if(!y&&j){x=_e?x:new Se(this);var ue=n.apply(x,C);return ue.__actions__.push({func:po,args:[W],thisArg:r}),new sn(ue,V)}return ce&&_e?n.apply(this,C):(ue=this.thru(W),ce?f?ue.value()[0]:ue.value():ue)})}),nn(["pop","push","shift","sort","splice","unshift"],function(n){var i=Hs[n],l=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",f=/^(?:pop|shift)$/.test(n);m.prototype[n]=function(){var g=arguments;if(f&&!this.__chain__){var y=this.value();return i.apply(ge(y)?y:[],g)}return this[l](function(x){return i.apply(ge(x)?x:[],g)})}}),En(Se.prototype,function(n,i){var l=m[i];if(l){var f=l.name+"";He.call(ri,f)||(ri[f]=[]),ri[f].push({name:i,func:l})}}),ri[oo(r,L).name]=[{name:"wrapper",func:r}],Se.prototype.clone=N2,Se.prototype.reverse=W2,Se.prototype.value=q2,m.prototype.at=_y,m.prototype.chain=wy,m.prototype.commit=$y,m.prototype.next=xy,m.prototype.plant=Cy,m.prototype.reverse=Sy,m.prototype.toJSON=m.prototype.valueOf=m.prototype.value=Ey,m.prototype.first=m.prototype.head,qi&&(m.prototype[qi]=ky),m},ei=$2();Ir?((Ir.exports=ei)._=ei,ja._=ei):vt._=ei}).call(Qn)})(zo,zo.exports);var t4=zo.exports;const n4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),a1=(e={})=>(()=>{const t=n4();return Qe(t,e,!0,!0),t})(),r4=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),i4=P('<span class="inline-block h-4 w-4 text-gray-700">'),xs=e=>{const[t,r]=ye(!1),s=()=>r(o=>!o);return(()=>{const o=r4(),a=o.firstChild,c=a.firstChild,u=c.firstChild,d=c.nextSibling;return I(c,$(se,{get when(){return e.icon},keyed:!0,children:p=>(()=>{const h=i4();return I(h,p),h})()}),u),I(u,()=>e.name),d.$$click=()=>s(),I(d,$(a1,{})),I(o,$(se,{get when(){return t()},get children(){return e.settings()}}),null),o})()};it(["click"]);const s4=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),l1=(e={})=>(()=>{const t=s4();return Qe(t,e,!0,!0),t})();var o4=typeof Qn=="object"&&Qn&&Qn.Object===Object&&Qn,c1=o4,a4=c1,l4=typeof self=="object"&&self&&self.Object===Object&&self,c4=a4||l4||Function("return this")(),Cn=c4,u4=Cn,f4=u4.Symbol,Ti=f4,gh=Ti,u1=Object.prototype,d4=u1.hasOwnProperty,h4=u1.toString,ss=gh?gh.toStringTag:void 0;function p4(e){var t=d4.call(e,ss),r=e[ss];try{e[ss]=void 0;var s=!0}catch{}var o=h4.call(e);return s&&(t?e[ss]=r:delete e[ss]),o}var g4=p4,v4=Object.prototype,m4=v4.toString;function b4(e){return m4.call(e)}var y4=b4,vh=Ti,_4=g4,w4=y4,$4="[object Null]",x4="[object Undefined]",mh=vh?vh.toStringTag:void 0;function k4(e){return e==null?e===void 0?x4:$4:mh&&mh in Object(e)?_4(e):w4(e)}var Ai=k4;function C4(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Pn=C4,S4=Ai,E4=Pn,T4="[object AsyncFunction]",A4="[object Function]",I4="[object GeneratorFunction]",R4="[object Proxy]";function L4(e){if(!E4(e))return!1;var t=S4(e);return t==A4||t==I4||t==T4||t==R4}var f1=L4,O4=Cn,P4=O4["__core-js_shared__"],M4=P4,Kl=M4,bh=function(){var e=/[^.]+$/.exec(Kl&&Kl.keys&&Kl.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function B4(e){return!!bh&&bh in e}var U4=B4,D4=Function.prototype,H4=D4.toString;function F4(e){if(e!=null){try{return H4.call(e)}catch{}try{return e+""}catch{}}return""}var d1=F4,j4=f1,z4=U4,N4=Pn,W4=d1,q4=/[\\^$.*+?()[\]{}|]/g,K4=/^\[object .+?Constructor\]$/,G4=Function.prototype,V4=Object.prototype,Q4=G4.toString,Z4=V4.hasOwnProperty,X4=RegExp("^"+Q4.call(Z4).replace(q4,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Y4(e){if(!N4(e)||z4(e))return!1;var t=j4(e)?X4:K4;return t.test(W4(e))}var J4=Y4;function e5(e,t){return e?.[t]}var t5=e5,n5=J4,r5=t5;function i5(e,t){var r=r5(e,t);return n5(r)?r:void 0}var Kr=i5,s5=Kr,o5=s5(Object,"create"),la=o5,yh=la;function a5(){this.__data__=yh?yh(null):{},this.size=0}var l5=a5;function c5(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var u5=c5,f5=la,d5="__lodash_hash_undefined__",h5=Object.prototype,p5=h5.hasOwnProperty;function g5(e){var t=this.__data__;if(f5){var r=t[e];return r===d5?void 0:r}return p5.call(t,e)?t[e]:void 0}var v5=g5,m5=la,b5=Object.prototype,y5=b5.hasOwnProperty;function _5(e){var t=this.__data__;return m5?t[e]!==void 0:y5.call(t,e)}var w5=_5,$5=la,x5="__lodash_hash_undefined__";function k5(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=$5&&t===void 0?x5:t,this}var C5=k5,S5=l5,E5=u5,T5=v5,A5=w5,I5=C5;function Ii(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Ii.prototype.clear=S5;Ii.prototype.delete=E5;Ii.prototype.get=T5;Ii.prototype.has=A5;Ii.prototype.set=I5;var R5=Ii;function L5(){this.__data__=[],this.size=0}var O5=L5;function P5(e,t){return e===t||e!==e&&t!==t}var Pc=P5,M5=Pc;function B5(e,t){for(var r=e.length;r--;)if(M5(e[r][0],t))return r;return-1}var ca=B5,U5=ca,D5=Array.prototype,H5=D5.splice;function F5(e){var t=this.__data__,r=U5(t,e);if(r<0)return!1;var s=t.length-1;return r==s?t.pop():H5.call(t,r,1),--this.size,!0}var j5=F5,z5=ca;function N5(e){var t=this.__data__,r=z5(t,e);return r<0?void 0:t[r][1]}var W5=N5,q5=ca;function K5(e){return q5(this.__data__,e)>-1}var G5=K5,V5=ca;function Q5(e,t){var r=this.__data__,s=V5(r,e);return s<0?(++this.size,r.push([e,t])):r[s][1]=t,this}var Z5=Q5,X5=O5,Y5=j5,J5=W5,e$=G5,t$=Z5;function Ri(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Ri.prototype.clear=X5;Ri.prototype.delete=Y5;Ri.prototype.get=J5;Ri.prototype.has=e$;Ri.prototype.set=t$;var ua=Ri,n$=Kr,r$=Cn,i$=n$(r$,"Map"),Mc=i$,_h=R5,s$=ua,o$=Mc;function a$(){this.size=0,this.__data__={hash:new _h,map:new(o$||s$),string:new _h}}var l$=a$;function c$(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var u$=c$,f$=u$;function d$(e,t){var r=e.__data__;return f$(t)?r[typeof t=="string"?"string":"hash"]:r.map}var fa=d$,h$=fa;function p$(e){var t=h$(this,e).delete(e);return this.size-=t?1:0,t}var g$=p$,v$=fa;function m$(e){return v$(this,e).get(e)}var b$=m$,y$=fa;function _$(e){return y$(this,e).has(e)}var w$=_$,$$=fa;function x$(e,t){var r=$$(this,e),s=r.size;return r.set(e,t),this.size+=r.size==s?0:1,this}var k$=x$,C$=l$,S$=g$,E$=b$,T$=w$,A$=k$;function Li(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var s=e[t];this.set(s[0],s[1])}}Li.prototype.clear=C$;Li.prototype.delete=S$;Li.prototype.get=E$;Li.prototype.has=T$;Li.prototype.set=A$;var Bc=Li,I$="__lodash_hash_undefined__";function R$(e){return this.__data__.set(e,I$),this}var L$=R$;function O$(e){return this.__data__.has(e)}var P$=O$,M$=Bc,B$=L$,U$=P$;function No(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new M$;++t<r;)this.add(e[t])}No.prototype.add=No.prototype.push=B$;No.prototype.has=U$;var h1=No;function D$(e,t,r,s){for(var o=e.length,a=r+(s?1:-1);s?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var H$=D$;function F$(e){return e!==e}var j$=F$;function z$(e,t,r){for(var s=r-1,o=e.length;++s<o;)if(e[s]===t)return s;return-1}var N$=z$,W$=H$,q$=j$,K$=N$;function G$(e,t,r){return t===t?K$(e,t,r):W$(e,q$,r)}var V$=G$,Q$=V$;function Z$(e,t){var r=e==null?0:e.length;return!!r&&Q$(e,t,0)>-1}var X$=Z$;function Y$(e,t,r){for(var s=-1,o=e==null?0:e.length;++s<o;)if(r(t,e[s]))return!0;return!1}var J$=Y$;function ex(e,t){return e.has(t)}var p1=ex,tx=Kr,nx=Cn,rx=tx(nx,"Set"),g1=rx;function ix(){}var sx=ix;function ox(e){var t=-1,r=Array(e.size);return e.forEach(function(s){r[++t]=s}),r}var Uc=ox,Gl=g1,ax=sx,lx=Uc,cx=1/0,ux=Gl&&1/lx(new Gl([,-0]))[1]==cx?function(e){return new Gl(e)}:ax,fx=ux,dx=h1,hx=X$,px=J$,gx=p1,vx=fx,mx=Uc,bx=200;function yx(e,t,r){var s=-1,o=hx,a=e.length,c=!0,u=[],d=u;if(r)c=!1,o=px;else if(a>=bx){var p=t?null:vx(e);if(p)return mx(p);c=!1,o=gx,d=new dx}else d=t?[]:u;e:for(;++s<a;){var h=e[s],v=t?t(h):h;if(h=r||h!==0?h:0,c&&v===v){for(var b=d.length;b--;)if(d[b]===v)continue e;t&&d.push(v),u.push(h)}else o(d,v,r)||(d!==u&&d.push(v),u.push(h))}return u}var v1=yx,_x=v1;function wx(e){return e&&e.length?_x(e):[]}var $x=wx;const wr=$s($x),xx={},kx=Object.freeze(Object.defineProperty({__proto__:null,default:xx},Symbol.toStringTag,{value:"Module"}));/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Ae=BigInt(0),Xe=BigInt(1),br=BigInt(2),fs=BigInt(3),wh=BigInt(8),je=Object.freeze({a:Ae,b:BigInt(7),P:BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),n:BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),h:Xe,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")}),$h=(e,t)=>(e+t/br)/t,$o={beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar(e){const{n:t}=je,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),s=-Xe*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=r,c=BigInt("0x100000000000000000000000000000000"),u=$h(a*e,t),d=$h(-s*e,t);let p=Z(e-u*r-d*o,t),h=Z(-u*s-d*a,t);const v=p>c,b=h>c;if(v&&(p=t-p),b&&(h=t-h),p>c||h>c)throw new Error("splitScalarEndo: Endomorphism failed, k="+e);return{k1neg:v,k1:p,k2neg:b,k2:h}}},wn=32,mi=32,Cx=32,Wo=wn+1,qo=2*wn+1;function xh(e){const{a:t,b:r}=je,s=Z(e*e),o=Z(s*e);return Z(o+t*e+r)}const xo=je.a===Ae;class Dc extends Error{constructor(t){super(t)}}function kh(e){if(!(e instanceof Pe))throw new TypeError("JacobianPoint expected")}class Pe{constructor(t,r,s){this.x=t,this.y=r,this.z=s}static fromAffine(t){if(!(t instanceof Ie))throw new TypeError("JacobianPoint#fromAffine: expected Point");return t.equals(Ie.ZERO)?Pe.ZERO:new Pe(t.x,t.y,Xe)}static toAffineBatch(t){const r=Ix(t.map(s=>s.z));return t.map((s,o)=>s.toAffine(r[o]))}static normalizeZ(t){return Pe.toAffineBatch(t).map(Pe.fromAffine)}equals(t){kh(t);const{x:r,y:s,z:o}=this,{x:a,y:c,z:u}=t,d=Z(o*o),p=Z(u*u),h=Z(r*p),v=Z(a*d),b=Z(Z(s*u)*p),_=Z(Z(c*o)*d);return h===v&&b===_}negate(){return new Pe(this.x,Z(-this.y),this.z)}double(){const{x:t,y:r,z:s}=this,o=Z(t*t),a=Z(r*r),c=Z(a*a),u=t+a,d=Z(br*(Z(u*u)-o-c)),p=Z(fs*o),h=Z(p*p),v=Z(h-br*d),b=Z(p*(d-v)-wh*c),_=Z(br*r*s);return new Pe(v,b,_)}add(t){kh(t);const{x:r,y:s,z:o}=this,{x:a,y:c,z:u}=t;if(a===Ae||c===Ae)return this;if(r===Ae||s===Ae)return t;const d=Z(o*o),p=Z(u*u),h=Z(r*p),v=Z(a*d),b=Z(Z(s*u)*p),_=Z(Z(c*o)*d),w=Z(v-h),k=Z(_-b);if(w===Ae)return k===Ae?this.double():Pe.ZERO;const S=Z(w*w),L=Z(w*S),U=Z(h*S),M=Z(k*k-L-br*U),R=Z(k*(U-M)-b*L),E=Z(o*u*w);return new Pe(M,R,E)}subtract(t){return this.add(t.negate())}multiplyUnsafe(t){const r=Pe.ZERO;if(typeof t=="bigint"&&t===Ae)return r;let s=Eh(t);if(s===Xe)return this;if(!xo){let v=r,b=this;for(;s>Ae;)s&Xe&&(v=v.add(b)),b=b.double(),s>>=Xe;return v}let{k1neg:o,k1:a,k2neg:c,k2:u}=$o.splitScalar(s),d=r,p=r,h=this;for(;a>Ae||u>Ae;)a&Xe&&(d=d.add(h)),u&Xe&&(p=p.add(h)),h=h.double(),a>>=Xe,u>>=Xe;return o&&(d=d.negate()),c&&(p=p.negate()),p=new Pe(Z(p.x*$o.beta),p.y,p.z),d.add(p)}precomputeWindow(t){const r=xo?128/t+1:256/t+1,s=[];let o=this,a=o;for(let c=0;c<r;c++){a=o,s.push(a);for(let u=1;u<2**(t-1);u++)a=a.add(o),s.push(a);o=a.double()}return s}wNAF(t,r){!r&&this.equals(Pe.BASE)&&(r=Ie.BASE);const s=r&&r._WINDOW_SIZE||1;if(256%s)throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");let o=r&&fc.get(r);o||(o=this.precomputeWindow(s),r&&s!==1&&(o=Pe.normalizeZ(o),fc.set(r,o)));let a=Pe.ZERO,c=Pe.BASE;const u=1+(xo?128/s:256/s),d=2**(s-1),p=BigInt(2**s-1),h=2**s,v=BigInt(s);for(let b=0;b<u;b++){const _=b*d;let w=Number(t&p);t>>=v,w>d&&(w-=h,t+=Xe);const k=_,S=_+Math.abs(w)-1,L=b%2!==0,U=w<0;w===0?c=c.add(ko(L,o[k])):a=a.add(ko(U,o[S]))}return{p:a,f:c}}multiply(t,r){let s=Eh(t),o,a;if(xo){const{k1neg:c,k1:u,k2neg:d,k2:p}=$o.splitScalar(s);let{p:h,f:v}=this.wNAF(u,r),{p:b,f:_}=this.wNAF(p,r);h=ko(c,h),b=ko(d,b),b=new Pe(Z(b.x*$o.beta),b.y,b.z),o=h.add(b),a=v.add(_)}else{const{p:c,f:u}=this.wNAF(s,r);o=c,a=u}return Pe.normalizeZ([o,a])[0]}toAffine(t){const{x:r,y:s,z:o}=this,a=this.equals(Pe.ZERO);t==null&&(t=a?wh:Oi(o));const c=t,u=Z(c*c),d=Z(u*c),p=Z(r*u),h=Z(s*d),v=Z(o*c);if(a)return Ie.ZERO;if(v!==Xe)throw new Error("invZ was invalid");return new Ie(p,h)}}Pe.BASE=new Pe(je.Gx,je.Gy,Xe);Pe.ZERO=new Pe(Ae,Xe,Ae);function ko(e,t){const r=t.negate();return e?r:t}const fc=new WeakMap;class Ie{constructor(t,r){this.x=t,this.y=r}_setWindowSize(t){this._WINDOW_SIZE=t,fc.delete(this)}hasEvenY(){return this.y%br===Ae}static fromCompressedHex(t){const r=t.length===32,s=Yt(r?t:t.subarray(1));if(!Uo(s))throw new Error("Point is not on curve");const o=xh(s);let a=Ax(o);const c=(a&Xe)===Xe;r?c&&(a=Z(-a)):(t[0]&1)===1!==c&&(a=Z(-a));const u=new Ie(s,a);return u.assertValidity(),u}static fromUncompressedHex(t){const r=Yt(t.subarray(1,wn+1)),s=Yt(t.subarray(wn+1,wn*2+1)),o=new Ie(r,s);return o.assertValidity(),o}static fromHex(t){const r=Ln(t),s=r.length,o=r[0];if(s===wn)return this.fromCompressedHex(r);if(s===Wo&&(o===2||o===3))return this.fromCompressedHex(r);if(s===qo&&o===4)return this.fromUncompressedHex(r);throw new Error(`Point.fromHex: received invalid point. Expected 32-${Wo} compressed bytes or ${qo} uncompressed bytes, not ${s}`)}static fromPrivateKey(t){return Ie.BASE.multiply(Wr(t))}static fromSignature(t,r,s){const{r:o,s:a}=m1(r);if(![0,1,2,3].includes(s))throw new Error("Cannot recover: invalid recovery bit");const c=Hc(Ln(t)),{n:u}=je,d=s===2||s===3?o+u:o,p=Oi(d,u),h=Z(-c*p,u),v=Z(a*p,u),b=s&1?"03":"02",_=Ie.fromHex(b+$r(d)),w=Ie.BASE.multiplyAndAddUnsafe(_,h,v);if(!w)throw new Error("Cannot recover signature: point at infinify");return w.assertValidity(),w}toRawBytes(t=!1){return xr(this.toHex(t))}toHex(t=!1){const r=$r(this.x);return t?`${this.hasEvenY()?"02":"03"}${r}`:`04${r}${$r(this.y)}`}toHexX(){return this.toHex(!0).slice(2)}toRawX(){return this.toRawBytes(!0).slice(1)}assertValidity(){const t="Point is not on elliptic curve",{x:r,y:s}=this;if(!Uo(r)||!Uo(s))throw new Error(t);const o=Z(s*s),a=xh(r);if(Z(o-a)!==Ae)throw new Error(t)}equals(t){return this.x===t.x&&this.y===t.y}negate(){return new Ie(this.x,Z(-this.y))}double(){return Pe.fromAffine(this).double().toAffine()}add(t){return Pe.fromAffine(this).add(Pe.fromAffine(t)).toAffine()}subtract(t){return this.add(t.negate())}multiply(t){return Pe.fromAffine(this).multiply(t,this).toAffine()}multiplyAndAddUnsafe(t,r,s){const o=Pe.fromAffine(this),a=r===Ae||r===Xe||this!==Ie.BASE?o.multiplyUnsafe(r):o.multiply(r),c=Pe.fromAffine(t).multiplyUnsafe(s),u=a.add(c);return u.equals(Pe.ZERO)?void 0:u.toAffine()}}Ie.BASE=new Ie(je.Gx,je.Gy);Ie.ZERO=new Ie(Ae,Ae);function Ch(e){return Number.parseInt(e[0],16)>=8?"00"+e:e}function Sh(e){if(e.length<2||e[0]!==2)throw new Error(`Invalid signature integer tag: ${bi(e)}`);const t=e[1],r=e.subarray(2,t+2);if(!t||r.length!==t)throw new Error("Invalid signature integer: wrong length");if(r[0]===0&&r[1]<=127)throw new Error("Invalid signature integer: trailing length");return{data:Yt(r),left:e.subarray(t+2)}}function Sx(e){if(e.length<2||e[0]!=48)throw new Error(`Invalid signature tag: ${bi(e)}`);if(e[1]!==e.length-2)throw new Error("Invalid signature: incorrect length");const{data:t,left:r}=Sh(e.subarray(2)),{data:s,left:o}=Sh(r);if(o.length)throw new Error(`Invalid signature: left bytes after parsing: ${bi(o)}`);return{r:t,s}}class Xn{constructor(t,r){this.r=t,this.s=r,this.assertValidity()}static fromCompact(t){const r=t instanceof Uint8Array,s="Signature.fromCompact";if(typeof t!="string"&&!r)throw new TypeError(`${s}: Expected string or Uint8Array`);const o=r?bi(t):t;if(o.length!==128)throw new Error(`${s}: Expected 64-byte hex`);return new Xn(Ko(o.slice(0,64)),Ko(o.slice(64,128)))}static fromDER(t){const r=t instanceof Uint8Array;if(typeof t!="string"&&!r)throw new TypeError("Signature.fromDER: Expected string or Uint8Array");const{r:s,s:o}=Sx(r?t:xr(t));return new Xn(s,o)}static fromHex(t){return this.fromDER(t)}assertValidity(){const{r:t,s:r}=this;if(!_i(t))throw new Error("Invalid Signature: r must be 0 < r < n");if(!_i(r))throw new Error("Invalid Signature: s must be 0 < s < n")}hasHighS(){const t=je.n>>Xe;return this.s>t}normalizeS(){return this.hasHighS()?new Xn(this.r,Z(-this.s,je.n)):this}toDERRawBytes(){return xr(this.toDERHex())}toDERHex(){const t=Ch(os(this.s)),r=Ch(os(this.r)),s=t.length/2,o=r.length/2,a=os(s),c=os(o);return`30${os(o+s+4)}02${c}${r}02${a}${t}`}toRawBytes(){return this.toDERRawBytes()}toHex(){return this.toDERHex()}toCompactRawBytes(){return xr(this.toCompactHex())}toCompactHex(){return $r(this.r)+$r(this.s)}}function vr(...e){if(!e.every(s=>s instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((s,o)=>s+o.length,0),r=new Uint8Array(t);for(let s=0,o=0;s<e.length;s++){const a=e[s];r.set(a,o),o+=a.length}return r}const Ex=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function bi(e){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");let t="";for(let r=0;r<e.length;r++)t+=Ex[e[r]];return t}const Tx=BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");function $r(e){if(typeof e!="bigint")throw new Error("Expected bigint");if(!(Ae<=e&&e<Tx))throw new Error("Expected number 0 <= n < 2^256");return e.toString(16).padStart(64,"0")}function yi(e){const t=xr($r(e));if(t.length!==32)throw new Error("Error: expected 32 bytes");return t}function os(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function Ko(e){if(typeof e!="string")throw new TypeError("hexToNumber: expected string, got "+typeof e);return BigInt(`0x${e}`)}function xr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex"+e.length);const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const s=r*2,o=e.slice(s,s+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[r]=a}return t}function Yt(e){return Ko(bi(e))}function Ln(e){return e instanceof Uint8Array?Uint8Array.from(e):xr(e)}function Eh(e){if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)return BigInt(e);if(typeof e=="bigint"&&_i(e))return e;throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n")}function Z(e,t=je.P){const r=e%t;return r>=Ae?r:t+r}function un(e,t){const{P:r}=je;let s=e;for(;t-- >Ae;)s*=s,s%=r;return s}function Ax(e){const{P:t}=je,r=BigInt(6),s=BigInt(11),o=BigInt(22),a=BigInt(23),c=BigInt(44),u=BigInt(88),d=e*e*e%t,p=d*d*e%t,h=un(p,fs)*p%t,v=un(h,fs)*p%t,b=un(v,br)*d%t,_=un(b,s)*b%t,w=un(_,o)*_%t,k=un(w,c)*w%t,S=un(k,u)*k%t,L=un(S,c)*w%t,U=un(L,fs)*p%t,M=un(U,a)*_%t,R=un(M,r)*d%t,E=un(R,br);if(E*E%t!==e)throw new Error("Cannot find square root");return E}function Oi(e,t=je.P){if(e===Ae||t<=Ae)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let r=Z(e,t),s=t,o=Ae,a=Xe;for(;r!==Ae;){const u=s/r,d=s%r,p=o-a*u;s=r,r=d,o=a,a=p}if(s!==Xe)throw new Error("invert: does not exist");return Z(o,t)}function Ix(e,t=je.P){const r=new Array(e.length),s=e.reduce((a,c,u)=>c===Ae?a:(r[u]=a,Z(a*c,t)),Xe),o=Oi(s,t);return e.reduceRight((a,c,u)=>c===Ae?a:(r[u]=Z(a*r[u],t),Z(a*c,t)),o),r}function Rx(e){const t=e.length*8-mi*8,r=Yt(e);return t>0?r>>BigInt(t):r}function Hc(e,t=!1){const r=Rx(e);if(t)return r;const{n:s}=je;return r>=s?r-s:r}let hi,ds;class Lx{constructor(t,r){if(this.hashLen=t,this.qByteLen=r,typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof r!="number"||r<2)throw new Error("qByteLen must be a number");this.v=new Uint8Array(t).fill(1),this.k=new Uint8Array(t).fill(0),this.counter=0}hmac(...t){return xe.hmacSha256(this.k,...t)}hmacSync(...t){return ds(this.k,...t)}checkSync(){if(typeof ds!="function")throw new Dc("hmacSha256Sync needs to be set")}incr(){if(this.counter>=1e3)throw new Error("Tried 1,000 k values for sign(), all were invalid");this.counter+=1}async reseed(t=new Uint8Array){this.k=await this.hmac(this.v,Uint8Array.from([0]),t),this.v=await this.hmac(this.v),t.length!==0&&(this.k=await this.hmac(this.v,Uint8Array.from([1]),t),this.v=await this.hmac(this.v))}reseedSync(t=new Uint8Array){this.checkSync(),this.k=this.hmacSync(this.v,Uint8Array.from([0]),t),this.v=this.hmacSync(this.v),t.length!==0&&(this.k=this.hmacSync(this.v,Uint8Array.from([1]),t),this.v=this.hmacSync(this.v))}async generate(){this.incr();let t=0;const r=[];for(;t<this.qByteLen;){this.v=await this.hmac(this.v);const s=this.v.slice();r.push(s),t+=this.v.length}return vr(...r)}generateSync(){this.checkSync(),this.incr();let t=0;const r=[];for(;t<this.qByteLen;){this.v=this.hmacSync(this.v);const s=this.v.slice();r.push(s),t+=this.v.length}return vr(...r)}}function _i(e){return Ae<e&&e<je.n}function Uo(e){return Ae<e&&e<je.P}function Ox(e,t,r,s=!0){const{n:o}=je,a=Hc(e,!0);if(!_i(a))return;const c=Oi(a,o),u=Ie.BASE.multiply(a),d=Z(u.x,o);if(d===Ae)return;const p=Z(c*Z(t+r*d,o),o);if(p===Ae)return;let h=new Xn(d,p),v=(u.x===h.r?0:2)|Number(u.y&Xe);return s&&h.hasHighS()&&(h=h.normalizeS(),v^=1),{sig:h,recovery:v}}function Wr(e){let t;if(typeof e=="bigint")t=e;else if(typeof e=="number"&&Number.isSafeInteger(e)&&e>0)t=BigInt(e);else if(typeof e=="string"){if(e.length!==2*mi)throw new Error("Expected 32 bytes of private key");t=Ko(e)}else if(e instanceof Uint8Array){if(e.length!==mi)throw new Error("Expected 32 bytes of private key");t=Yt(e)}else throw new TypeError("Expected valid private key");if(!_i(t))throw new Error("Expected private key: 0 < key < n");return t}function Fc(e){return e instanceof Ie?(e.assertValidity(),e):Ie.fromHex(e)}function m1(e){if(e instanceof Xn)return e.assertValidity(),e;try{return Xn.fromDER(e)}catch{return Xn.fromCompact(e)}}function Px(e,t=!1){return Ie.fromPrivateKey(e).toRawBytes(t)}function Th(e){const t=e instanceof Uint8Array,r=typeof e=="string",s=(t||r)&&e.length;return t?s===Wo||s===qo:r?s===Wo*2||s===qo*2:e instanceof Ie}function b1(e,t,r=!1){if(Th(e))throw new TypeError("getSharedSecret: first arg must be private key");if(!Th(t))throw new TypeError("getSharedSecret: second arg must be public key");const s=Fc(t);return s.assertValidity(),s.multiply(Wr(e)).toRawBytes(r)}function y1(e){const t=e.length>wn?e.slice(0,wn):e;return Yt(t)}function Mx(e){const t=y1(e),r=Z(t,je.n);return _1(r<Ae?t:r)}function _1(e){return yi(e)}function Bx(e,t,r){if(e==null)throw new Error(`sign: expected valid message hash, not "${e}"`);const s=Ln(e),o=Wr(t),a=[_1(o),Mx(s)];if(r!=null){r===!0&&(r=xe.randomBytes(wn));const d=Ln(r);if(d.length!==wn)throw new Error(`sign: Expected ${wn} bytes of extra data`);a.push(d)}const c=vr(...a),u=y1(s);return{seed:c,m:u,d:o}}function Ux(e,t){const{sig:r,recovery:s}=e,{der:o,recovered:a}=Object.assign({canonical:!0,der:!0},t),c=o?r.toDERRawBytes():r.toCompactRawBytes();return a?[c,s]:c}function Dx(e,t,r={}){const{seed:s,m:o,d:a}=Bx(e,t,r.extraEntropy),c=new Lx(Cx,mi);c.reseedSync(s);let u;for(;!(u=Ox(c.generateSync(),o,a,r.canonical));)c.reseedSync();return Ux(u,r)}const Hx={strict:!0};function Fx(e,t,r,s=Hx){let o;try{o=m1(e),t=Ln(t)}catch{return!1}const{r:a,s:c}=o;if(s.strict&&o.hasHighS())return!1;const u=Hc(t);let d;try{d=Fc(r)}catch{return!1}const{n:p}=je,h=Oi(c,p),v=Z(u*h,p),b=Z(a*h,p),_=Ie.BASE.multiplyAndAddUnsafe(d,v,b);return _?Z(_.x,p)===a:!1}function Go(e){return Z(Yt(e),je.n)}class wi{constructor(t,r){this.r=t,this.s=r,this.assertValidity()}static fromHex(t){const r=Ln(t);if(r.length!==64)throw new TypeError(`SchnorrSignature.fromHex: expected 64 bytes, not ${r.length}`);const s=Yt(r.subarray(0,32)),o=Yt(r.subarray(32,64));return new wi(s,o)}assertValidity(){const{r:t,s:r}=this;if(!Uo(t)||!_i(r))throw new Error("Invalid signature")}toHex(){return $r(this.r)+$r(this.s)}toRawBytes(){return xr(this.toHex())}}function jx(e){return Ie.fromPrivateKey(e).toRawX()}class w1{constructor(t,r,s=xe.randomBytes()){if(t==null)throw new TypeError(`sign: Expected valid message, not "${t}"`);this.m=Ln(t);const{x:o,scalar:a}=this.getScalar(Wr(r));if(this.px=o,this.d=a,this.rand=Ln(s),this.rand.length!==32)throw new TypeError("sign: Expected 32 bytes of aux randomness")}getScalar(t){const r=Ie.fromPrivateKey(t),s=r.hasEvenY()?t:je.n-t;return{point:r,scalar:s,x:r.toRawX()}}initNonce(t,r){return yi(t^Yt(r))}finalizeNonce(t){const r=Z(Yt(t),je.n);if(r===Ae)throw new Error("sign: Creation of signature failed. k is zero");const{point:s,x:o,scalar:a}=this.getScalar(r);return{R:s,rx:o,k:a}}finalizeSig(t,r,s,o){return new wi(t.x,Z(r+s*o,je.n)).toRawBytes()}error(){throw new Error("sign: Invalid signature produced")}async calc(){const{m:t,d:r,px:s,rand:o}=this,a=xe.taggedHash,c=this.initNonce(r,await a(gr.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(await a(gr.nonce,c,s,t)),h=Go(await a(gr.challenge,d,s,t)),v=this.finalizeSig(u,p,h,r);return await k1(v,t,s)||this.error(),v}calcSync(){const{m:t,d:r,px:s,rand:o}=this,a=xe.taggedHashSync,c=this.initNonce(r,a(gr.aux,o)),{R:u,rx:d,k:p}=this.finalizeNonce(a(gr.nonce,c,s,t)),h=Go(a(gr.challenge,d,s,t)),v=this.finalizeSig(u,p,h,r);return C1(v,t,s)||this.error(),v}}async function zx(e,t,r){return new w1(e,t,r).calc()}function Nx(e,t,r){return new w1(e,t,r).calcSync()}function $1(e,t,r){const s=e instanceof wi,o=s?e:wi.fromHex(e);return s&&o.assertValidity(),{...o,m:Ln(t),P:Fc(r)}}function x1(e,t,r,s){const o=Ie.BASE.multiplyAndAddUnsafe(t,Wr(r),Z(-s,je.n));return!(!o||!o.hasEvenY()||o.x!==e)}async function k1(e,t,r){try{const{r:s,s:o,m:a,P:c}=$1(e,t,r),u=Go(await xe.taggedHash(gr.challenge,yi(s),c.toRawX(),a));return x1(s,c,o,u)}catch{return!1}}function C1(e,t,r){try{const{r:s,s:o,m:a,P:c}=$1(e,t,r),u=Go(xe.taggedHashSync(gr.challenge,yi(s),c.toRawX(),a));return x1(s,c,o,u)}catch(s){if(s instanceof Dc)throw s;return!1}}const da={Signature:wi,getPublicKey:jx,sign:zx,verify:k1,signSync:Nx,verifySync:C1};Ie.BASE._setWindowSize(8);const Qt={node:kx,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},gr={challenge:"BIP0340/challenge",aux:"BIP0340/aux",nonce:"BIP0340/nonce"},Co={},xe={bytesToHex:bi,hexToBytes:xr,concatBytes:vr,mod:Z,invert:Oi,isValidPrivateKey(e){try{return Wr(e),!0}catch{return!1}},_bigintTo32Bytes:yi,_normalizePrivateKey:Wr,hashToPrivateKey:e=>{e=Ln(e);const t=mi+8;if(e.length<t||e.length>1024)throw new Error("Expected valid bytes of private key as per FIPS 186");const r=Z(Yt(e),je.n-Xe)+Xe;return yi(r)},randomBytes:(e=32)=>{if(Qt.web)return Qt.web.getRandomValues(new Uint8Array(e));if(Qt.node){const{randomBytes:t}=Qt.node;return Uint8Array.from(t(e))}else throw new Error("The environment doesn't have randomBytes function")},randomPrivateKey:()=>xe.hashToPrivateKey(xe.randomBytes(mi+8)),precompute(e=8,t=Ie.BASE){const r=t===Ie.BASE?t:new Ie(t.x,t.y);return r._setWindowSize(e),r.multiply(fs),r},sha256:async(...e)=>{if(Qt.web){const t=await Qt.web.subtle.digest("SHA-256",vr(...e));return new Uint8Array(t)}else if(Qt.node){const{createHash:t}=Qt.node,r=t("sha256");return e.forEach(s=>r.update(s)),Uint8Array.from(r.digest())}else throw new Error("The environment doesn't have sha256 function")},hmacSha256:async(e,...t)=>{if(Qt.web){const r=await Qt.web.subtle.importKey("raw",e,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),s=vr(...t),o=await Qt.web.subtle.sign("HMAC",r,s);return new Uint8Array(o)}else if(Qt.node){const{createHmac:r}=Qt.node,s=r("sha256",e);return t.forEach(o=>s.update(o)),Uint8Array.from(s.digest())}else throw new Error("The environment doesn't have hmac-sha256 function")},sha256Sync:void 0,hmacSha256Sync:void 0,taggedHash:async(e,...t)=>{let r=Co[e];if(r===void 0){const s=await xe.sha256(Uint8Array.from(e,o=>o.charCodeAt(0)));r=vr(s,s),Co[e]=r}return xe.sha256(r,...t)},taggedHashSync:(e,...t)=>{if(typeof hi!="function")throw new Dc("sha256Sync is undefined, you need to set it");let r=Co[e];if(r===void 0){const s=hi(Uint8Array.from(e,o=>o.charCodeAt(0)));r=vr(s,s),Co[e]=r}return hi(r,...t)},_JacobianPoint:Pe};Object.defineProperties(xe,{sha256Sync:{configurable:!1,get(){return hi},set(e){hi||(hi=e)}},hmacSha256Sync:{configurable:!1,get(){return ds},set(e){ds||(ds=e)}}});function dc(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function Wx(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function S1(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function qx(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");dc(e.outputLen),dc(e.blockLen)}function Kx(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function Gx(e,t){S1(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}const jr={number:dc,bool:Wx,bytes:S1,hash:qx,exists:Kx,output:Gx},cs={node:void 0,web:typeof self=="object"&&"crypto"in self?self.crypto:void 0},Vx=Object.freeze(Object.defineProperty({__proto__:null,crypto:cs},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Qx=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),Zx=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),Nr=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),yn=(e,t)=>e<<32-t|e>>>t,E1=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!E1)throw new Error("Non little-endian hardware is not supported");const Xx=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function T1(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let r=0;r<e.length;r++)t+=Xx[e[r]];return t}function A1(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let r=0;r<t.length;r++){const s=r*2,o=e.slice(s,s+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[r]=a}return t}const I1=async()=>{};async function Yx(e,t,r){let s=Date.now();for(let o=0;o<e;o++){r(o);const a=Date.now()-s;a>=0&&a<t||(await I1(),s+=a)}}function jc(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function ks(e){if(typeof e=="string"&&(e=jc(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function us(...e){if(!e.every(s=>s instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((s,o)=>s+o.length,0),r=new Uint8Array(t);for(let s=0,o=0;s<e.length;s++){const a=e[s];r.set(a,o),o+=a.length}return r}class zc{clone(){return this._cloneInto()}}const Jx=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function e6(e,t){if(t!==void 0&&(typeof t!="object"||!Jx(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function ha(e){const t=s=>e().update(ks(s)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function t6(e){const t=(s,o)=>e(o).update(ks(s)).digest(),r=e({});return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=s=>e(s),t}function R1(e=32){if(cs.web)return cs.web.getRandomValues(new Uint8Array(e));if(cs.node)return new Uint8Array(cs.node.randomBytes(e).buffer);throw new Error("The environment doesn't have randomBytes function")}const n6=Object.freeze(Object.defineProperty({__proto__:null,Hash:zc,asyncLoop:Yx,bytesToHex:T1,checkOpts:e6,concatBytes:us,createView:Nr,hexToBytes:A1,isLE:E1,nextTick:I1,randomBytes:R1,rotr:yn,toBytes:ks,u32:Zx,u8:Qx,utf8ToBytes:jc,wrapConstructor:ha,wrapConstructorWithOpts:t6},Symbol.toStringTag,{value:"Module"}));function r6(e,t,r,s){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,s);const o=BigInt(32),a=BigInt(4294967295),c=Number(r>>o&a),u=Number(r&a),d=s?4:0,p=s?0:4;e.setUint32(t+d,c,s),e.setUint32(t+p,u,s)}let L1=class extends zc{constructor(t,r,s,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=s,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Nr(this.buffer)}update(t){jr.exists(this);const{view:r,buffer:s,blockLen:o}=this;t=ks(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=Nr(t);for(;o<=a-c;c+=o)this.process(d,c);continue}s.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){jr.exists(this),jr.output(t,this),this.finished=!0;const{buffer:r,view:s,blockLen:o,isLE:a}=this;let{pos:c}=this;r[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(s,0),c=0);for(let v=c;v<o;v++)r[v]=0;r6(s,o-8,BigInt(this.length*8),a),this.process(s,0);const u=Nr(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let v=0;v<p;v++)u.setUint32(4*v,h[v],a)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const s=t.slice(0,r);return this.destroy(),s}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:s,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%r&&t.buffer.set(s),t}};const i6=(e,t,r)=>e&t^~e&r,s6=(e,t,r)=>e&t^e&r^t&r,o6=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),fr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),dr=new Uint32Array(64);class O1 extends L1{constructor(){super(64,32,8,!1),this.A=fr[0]|0,this.B=fr[1]|0,this.C=fr[2]|0,this.D=fr[3]|0,this.E=fr[4]|0,this.F=fr[5]|0,this.G=fr[6]|0,this.H=fr[7]|0}get(){const{A:t,B:r,C:s,D:o,E:a,F:c,G:u,H:d}=this;return[t,r,s,o,a,c,u,d]}set(t,r,s,o,a,c,u,d){this.A=t|0,this.B=r|0,this.C=s|0,this.D=o|0,this.E=a|0,this.F=c|0,this.G=u|0,this.H=d|0}process(t,r){for(let v=0;v<16;v++,r+=4)dr[v]=t.getUint32(r,!1);for(let v=16;v<64;v++){const b=dr[v-15],_=dr[v-2],w=yn(b,7)^yn(b,18)^b>>>3,k=yn(_,17)^yn(_,19)^_>>>10;dr[v]=k+dr[v-7]+w+dr[v-16]|0}let{A:s,B:o,C:a,D:c,E:u,F:d,G:p,H:h}=this;for(let v=0;v<64;v++){const b=yn(u,6)^yn(u,11)^yn(u,25),_=h+b+i6(u,d,p)+o6[v]+dr[v]|0,k=(yn(s,2)^yn(s,13)^yn(s,22))+s6(s,o,a)|0;h=p,p=d,d=u,u=c+_|0,c=a,a=o,o=s,s=_+k|0}s=s+this.A|0,o=o+this.B|0,a=a+this.C|0,c=c+this.D|0,u=u+this.E|0,d=d+this.F|0,p=p+this.G|0,h=h+this.H|0,this.set(s,o,a,c,u,d,p,h)}roundClean(){dr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class a6 extends O1{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Yn=ha(()=>new O1),l6=ha(()=>new a6),c6=Object.freeze(Object.defineProperty({__proto__:null,sha224:l6,sha256:Yn},Symbol.toStringTag,{value:"Module"}));/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Sr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function Sn(...e){const t=(o,a)=>c=>o(a(c)),r=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),s=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:r,decode:s}}function Mn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(r=>{if(Sr(r),r<0||r>=e.length)throw new Error(`Digit index outside alphabet: ${r} (alphabet: ${e.length})`);return e[r]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(r=>{if(typeof r!="string")throw new Error(`alphabet.decode: not string element=${r}`);const s=e.indexOf(r);if(s===-1)throw new Error(`Unknown letter: "${r}". Allowed: ${e}`);return s})}}}function Bn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let r of t)if(typeof r!="string")throw new Error(`join.encode: non-string input=${r}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function Cs(e,t="="){if(Sr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let s of r)if(typeof s!="string")throw new Error(`padding.encode: non-string input=${s}`);for(;r.length*e%8;)r.push(t);return r},decode(r){if(!Array.isArray(r)||r.length&&typeof r[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of r)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let s=r.length;if(s*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;s>0&&r[s-1]===t;s--)if(!((s-1)*e%8))throw new Error("Invalid padding: string has too much padding");return r.slice(0,s)}}}function P1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function Ah(e,t,r){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(r<2)throw new Error(`convertRadix: wrong to=${r}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let s=0;const o=[],a=Array.from(e);for(a.forEach(c=>{if(Sr(c),c<0||c>=t)throw new Error(`Wrong integer: ${c}`)});;){let c=0,u=!0;for(let d=s;d<a.length;d++){const p=a[d],h=t*c+p;if(!Number.isSafeInteger(h)||t*c/t!==c||h-p!==t*c)throw new Error("convertRadix: carry overflow");if(c=h%r,a[d]=Math.floor(h/r),!Number.isSafeInteger(a[d])||a[d]*r+c!==h)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:s=d;else continue}if(o.push(c),u)break}for(let c=0;c<e.length-1&&e[c]===0;c++)o.push(0);return o.reverse()}const M1=(e,t)=>t?M1(t,e%t):e,Vo=(e,t)=>e+(t-M1(e,t));function hc(e,t,r,s){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(r<=0||r>32)throw new Error(`convertRadix2: wrong to=${r}`);if(Vo(t,r)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${r} carryBits=${Vo(t,r)}`);let o=0,a=0;const c=2**r-1,u=[];for(const d of e){if(Sr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=r;a-=r)u.push((o>>a-r&c)>>>0);o&=2**a-1}if(o=o<<r-a&c,!s&&a>=t)throw new Error("Excess padding");if(!s&&o)throw new Error(`Non-zero padding: ${o}`);return s&&a>0&&u.push(o>>>0),u}function B1(e){return Sr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Ah(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Ah(t,e,2**8))}}}function Jn(e,t=!1){if(Sr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Vo(8,e)>32||Vo(e,8)>32)throw new Error("radix2: carry overflow");return{encode:r=>{if(!(r instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return hc(Array.from(r),8,e,!t)},decode:r=>{if(!Array.isArray(r)||r.length&&typeof r[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(hc(r,e,8,t))}}}function Ih(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function U1(e,t){if(Sr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const s=t(r).slice(0,e),o=new Uint8Array(r.length+e);return o.set(r),o.set(s,r.length),o},decode(r){if(!(r instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const s=r.slice(0,-e),o=t(s).slice(0,e),a=r.slice(-e);for(let c=0;c<e;c++)if(o[c]!==a[c])throw new Error("Invalid checksum");return s}}}const u6={alphabet:Mn,chain:Sn,checksum:U1,radix:B1,radix2:Jn,join:Bn,padding:Cs},D1=Sn(Jn(4),Mn("0123456789ABCDEF"),Bn("")),H1=Sn(Jn(5),Mn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),Cs(5),Bn("")),f6=Sn(Jn(5),Mn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),Cs(5),Bn("")),d6=Sn(Jn(5),Mn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Bn(""),P1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),$i=Sn(Jn(6),Mn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),Cs(6),Bn("")),F1=Sn(Jn(6),Mn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),Cs(6),Bn("")),Nc=e=>Sn(B1(58),Mn(e),Bn("")),ms=Nc("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),h6=Nc("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),p6=Nc("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),Rh=[0,2,3,5,6,7,9,10,11],j1={encode(e){let t="";for(let r=0;r<e.length;r+=8){const s=e.subarray(r,r+8);t+=ms.encode(s).padStart(Rh[s.length],"1")}return t},decode(e){let t=[];for(let r=0;r<e.length;r+=11){const s=e.slice(r,r+11),o=Rh.indexOf(s.length),a=ms.decode(s);for(let c=0;c<a.length-o;c++)if(a[c]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},z1=e=>Sn(U1(4,t=>e(e(t))),ms),pc=Sn(Mn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Bn("")),Lh=[996825010,642813549,513874426,1027748829,705979059];function as(e){const t=e>>25;let r=(e&33554431)<<5;for(let s=0;s<Lh.length;s++)(t>>s&1)===1&&(r^=Lh[s]);return r}function Oh(e,t,r=1){const s=e.length;let o=1;for(let a=0;a<s;a++){const c=e.charCodeAt(a);if(c<33||c>126)throw new Error(`Invalid prefix (${e})`);o=as(o)^c>>5}o=as(o);for(let a=0;a<s;a++)o=as(o)^e.charCodeAt(a)&31;for(let a of t)o=as(o)^a;for(let a=0;a<6;a++)o=as(o);return o^=r,pc.encode(hc([o%2**30],30,5,!1))}function N1(e){const t=e==="bech32"?1:734539939,r=Jn(5),s=r.decode,o=r.encode,a=Ih(s);function c(h,v,b=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(v)||v.length&&typeof v[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof v}`);const _=h.length+7+v.length;if(b!==!1&&_>b)throw new TypeError(`Length ${_} exceeds limit ${b}`);return h=h.toLowerCase(),`${h}1${pc.encode(v)}${Oh(h,v,t)}`}function u(h,v=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||v!==!1&&h.length>v)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${v})`);const b=h.toLowerCase();if(h!==b&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=b;const _=h.lastIndexOf("1");if(_===0||_===-1)throw new Error('Letter "1" must be present between prefix and data only');const w=h.slice(0,_),k=h.slice(_+1);if(k.length<6)throw new Error("Data must be at least 6 characters long");const S=pc.decode(k).slice(0,-6),L=Oh(w,S,t);if(!k.endsWith(L))throw new Error(`Invalid checksum in ${h}: expected "${L}"`);return{prefix:w,words:S}}const d=Ih(u);function p(h){const{prefix:v,words:b}=u(h,!1);return{prefix:v,words:b,bytes:s(b)}}return{encode:c,decode:u,decodeToBytes:p,decodeUnsafe:d,fromWords:s,fromWordsUnsafe:a,toWords:o}}const Et=N1("bech32"),g6=N1("bech32m"),W1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},q1=Sn(Jn(4),Mn("0123456789abcdef"),Bn(""),P1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),bs={utf8:W1,hex:q1,base16:D1,base32:H1,base64:$i,base64url:F1,base58:ms,base58xmr:j1},K1=`Invalid encoding type. Available types: ${Object.keys(bs).join(", ")}`,G1=(e,t)=>{if(typeof e!="string"||!bs.hasOwnProperty(e))throw new TypeError(K1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return bs[e].encode(t)},v6=G1,V1=(e,t)=>{if(!bs.hasOwnProperty(e))throw new TypeError(K1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return bs[e].decode(t)},m6=V1,b6=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Sr,base16:D1,base32:H1,base32crockford:d6,base32hex:f6,base58:ms,base58check:z1,base58flickr:h6,base58xmr:j1,base58xrp:p6,base64:$i,base64url:F1,bech32:Et,bech32m:g6,bytes:m6,bytesToString:G1,hex:q1,str:v6,stringToBytes:V1,utf8:W1,utils:u6},Symbol.toStringTag,{value:"Module"}));var Wc={};Object.defineProperty(Wc,"__esModule",{value:!0});var qc=Wc.wordlist=void 0;qc=Wc.wordlist=`abandon
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
`);var Zt={},pt={};Object.defineProperty(pt,"__esModule",{value:!0});pt.output=pt.exists=pt.hash=di=pt.bytes=pt.bool=pt.number=void 0;function Qo(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}pt.number=Qo;function Q1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}pt.bool=Q1;function Kc(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var di=pt.bytes=Kc;function Z1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Qo(e.outputLen),Qo(e.blockLen)}pt.hash=Z1;function X1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}pt.exists=X1;function Y1(e,t){Kc(e);const r=t.outputLen;if(e.length<r)throw new Error(`digestInto() expects output buffer of length at least ${r}`)}pt.output=Y1;const y6={number:Qo,bool:Q1,bytes:Kc,hash:Z1,exists:X1,output:Y1};pt.default=y6;var xi={},J1={},Ss={};const _6=aa(Vx);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=_6,r=R=>new Uint8Array(R.buffer,R.byteOffset,R.byteLength);e.u8=r;const s=R=>new Uint32Array(R.buffer,R.byteOffset,Math.floor(R.byteLength/4));e.u32=s;const o=R=>new DataView(R.buffer,R.byteOffset,R.byteLength);e.createView=o;const a=(R,E)=>R<<32-E|R>>>E;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const c=Array.from({length:256},(R,E)=>E.toString(16).padStart(2,"0"));function u(R){if(!(R instanceof Uint8Array))throw new Error("Uint8Array expected");let E="";for(let O=0;O<R.length;O++)E+=c[R[O]];return E}e.bytesToHex=u;function d(R){if(typeof R!="string")throw new TypeError("hexToBytes: expected string, got "+typeof R);if(R.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const E=new Uint8Array(R.length/2);for(let O=0;O<E.length;O++){const N=O*2,q=R.slice(N,N+2),ie=Number.parseInt(q,16);if(Number.isNaN(ie)||ie<0)throw new Error("Invalid byte sequence");E[O]=ie}return E}e.hexToBytes=d;const p=async()=>{};e.nextTick=p;async function h(R,E,O){let N=Date.now();for(let q=0;q<R;q++){O(q);const ie=Date.now()-N;ie>=0&&ie<E||(await(0,e.nextTick)(),N+=ie)}}e.asyncLoop=h;function v(R){if(typeof R!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof R}`);return new TextEncoder().encode(R)}e.utf8ToBytes=v;function b(R){if(typeof R=="string"&&(R=v(R)),!(R instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof R})`);return R}e.toBytes=b;function _(...R){if(!R.every(N=>N instanceof Uint8Array))throw new Error("Uint8Array list expected");if(R.length===1)return R[0];const E=R.reduce((N,q)=>N+q.length,0),O=new Uint8Array(E);for(let N=0,q=0;N<R.length;N++){const ie=R[N];O.set(ie,q),q+=ie.length}return O}e.concatBytes=_;class w{clone(){return this._cloneInto()}}e.Hash=w;const k=R=>Object.prototype.toString.call(R)==="[object Object]"&&R.constructor===Object;function S(R,E){if(E!==void 0&&(typeof E!="object"||!k(E)))throw new TypeError("Options should be object or undefined");return Object.assign(R,E)}e.checkOpts=S;function L(R){const E=N=>R().update(b(N)).digest(),O=R();return E.outputLen=O.outputLen,E.blockLen=O.blockLen,E.create=()=>R(),E}e.wrapConstructor=L;function U(R){const E=(N,q)=>R(q).update(b(N)).digest(),O=R({});return E.outputLen=O.outputLen,E.blockLen=O.blockLen,E.create=N=>R(N),E}e.wrapConstructorWithOpts=U;function M(R=32){if(t.crypto.web)return t.crypto.web.getRandomValues(new Uint8Array(R));if(t.crypto.node)return new Uint8Array(t.crypto.node.randomBytes(R).buffer);throw new Error("The environment doesn't have randomBytes function")}e.randomBytes=M})(Ss);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=pt,r=Ss;class s extends r.Hash{constructor(c,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(c);const d=(0,r.toBytes)(u);if(this.iHash=c.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const p=this.blockLen,h=new Uint8Array(p);h.set(d.length>p?c.create().update(d).digest():d);for(let v=0;v<h.length;v++)h[v]^=54;this.iHash.update(h),this.oHash=c.create();for(let v=0;v<h.length;v++)h[v]^=106;this.oHash.update(h),h.fill(0)}update(c){return t.default.exists(this),this.iHash.update(c),this}digestInto(c){t.default.exists(this),t.default.bytes(c,this.outputLen),this.finished=!0,this.iHash.digestInto(c),this.oHash.update(c),this.oHash.digestInto(c),this.destroy()}digest(){const c=new Uint8Array(this.oHash.outputLen);return this.digestInto(c),c}_cloneInto(c){c||(c=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:p,destroyed:h,blockLen:v,outputLen:b}=this;return c=c,c.finished=p,c.destroyed=h,c.blockLen=v,c.outputLen=b,c.oHash=u._cloneInto(c.oHash),c.iHash=d._cloneInto(c.iHash),c}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,c,u)=>new s(a,c).update(u).digest();e.hmac=o,e.hmac.create=(a,c)=>new s(a,c)})(J1);Object.defineProperty(xi,"__esModule",{value:!0});xi.pbkdf2Async=xi.pbkdf2=void 0;const So=pt,w6=J1,pi=Ss;function ep(e,t,r,s){So.default.hash(e);const o=(0,pi.checkOpts)({dkLen:32,asyncTick:10},s),{c:a,dkLen:c,asyncTick:u}=o;if(So.default.number(a),So.default.number(c),So.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,pi.toBytes)(t),p=(0,pi.toBytes)(r),h=new Uint8Array(c),v=w6.hmac.create(e,d),b=v._cloneInto().update(p);return{c:a,dkLen:c,asyncTick:u,DK:h,PRF:v,PRFSalt:b}}function tp(e,t,r,s,o){return e.destroy(),t.destroy(),s&&s.destroy(),o.fill(0),r}function $6(e,t,r,s){const{c:o,dkLen:a,DK:c,PRF:u,PRFSalt:d}=ep(e,t,r,s);let p;const h=new Uint8Array(4),v=(0,pi.createView)(h),b=new Uint8Array(u.outputLen);for(let _=1,w=0;w<a;_++,w+=u.outputLen){const k=c.subarray(w,w+u.outputLen);v.setInt32(0,_,!1),(p=d._cloneInto(p)).update(h).digestInto(b),k.set(b.subarray(0,k.length));for(let S=1;S<o;S++){u._cloneInto(p).update(b).digestInto(b);for(let L=0;L<k.length;L++)k[L]^=b[L]}}return tp(u,d,c,p,b)}xi.pbkdf2=$6;async function x6(e,t,r,s){const{c:o,dkLen:a,asyncTick:c,DK:u,PRF:d,PRFSalt:p}=ep(e,t,r,s);let h;const v=new Uint8Array(4),b=(0,pi.createView)(v),_=new Uint8Array(d.outputLen);for(let w=1,k=0;k<a;w++,k+=d.outputLen){const S=u.subarray(k,k+d.outputLen);b.setInt32(0,w,!1),(h=p._cloneInto(h)).update(v).digestInto(_),S.set(_.subarray(0,S.length)),await(0,pi.asyncLoop)(o-1,c,L=>{d._cloneInto(h).update(_).digestInto(_);for(let U=0;U<S.length;U++)S[U]^=_[U]})}return tp(d,p,u,h,_)}xi.pbkdf2Async=x6;const k6=aa(c6);var fn={},pa={};Object.defineProperty(pa,"__esModule",{value:!0});pa.SHA2=void 0;const Vl=pt,ls=Ss;function C6(e,t,r,s){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,s);const o=BigInt(32),a=BigInt(4294967295),c=Number(r>>o&a),u=Number(r&a),d=s?4:0,p=s?0:4;e.setUint32(t+d,c,s),e.setUint32(t+p,u,s)}class S6 extends ls.Hash{constructor(t,r,s,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=s,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,ls.createView)(this.buffer)}update(t){Vl.default.exists(this);const{view:r,buffer:s,blockLen:o}=this;t=(0,ls.toBytes)(t);const a=t.length;for(let c=0;c<a;){const u=Math.min(o-this.pos,a-c);if(u===o){const d=(0,ls.createView)(t);for(;o<=a-c;c+=o)this.process(d,c);continue}s.set(t.subarray(c,c+u),this.pos),this.pos+=u,c+=u,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Vl.default.exists(this),Vl.default.output(t,this),this.finished=!0;const{buffer:r,view:s,blockLen:o,isLE:a}=this;let{pos:c}=this;r[c++]=128,this.buffer.subarray(c).fill(0),this.padOffset>o-c&&(this.process(s,0),c=0);for(let v=c;v<o;v++)r[v]=0;C6(s,o-8,BigInt(this.length*8),a),this.process(s,0);const u=(0,ls.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const p=d/4,h=this.get();if(p>h.length)throw new Error("_sha2: outputLen bigger than state");for(let v=0;v<p;v++)u.setUint32(4*v,h[v],a)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const s=t.slice(0,r);return this.destroy(),s}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:s,length:o,finished:a,destroyed:c,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=c,o%r&&t.buffer.set(s),t}}pa.SHA2=S6;var np={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),r=BigInt(32);function s(G,X=!1){return X?{h:Number(G&t),l:Number(G>>r&t)}:{h:Number(G>>r&t)|0,l:Number(G&t)|0}}e.fromBig=s;function o(G,X=!1){let H=new Uint32Array(G.length),Q=new Uint32Array(G.length);for(let he=0;he<G.length;he++){const{h:ee,l:K}=s(G[he],X);[H[he],Q[he]]=[ee,K]}return[H,Q]}e.split=o;const a=(G,X)=>BigInt(G>>>0)<<r|BigInt(X>>>0);e.toBig=a;const c=(G,X,H)=>G>>>H,u=(G,X,H)=>G<<32-H|X>>>H,d=(G,X,H)=>G>>>H|X<<32-H,p=(G,X,H)=>G<<32-H|X>>>H,h=(G,X,H)=>G<<64-H|X>>>H-32,v=(G,X,H)=>G>>>H-32|X<<64-H,b=(G,X)=>X,_=(G,X)=>G,w=(G,X,H)=>G<<H|X>>>32-H,k=(G,X,H)=>X<<H|G>>>32-H,S=(G,X,H)=>X<<H-32|G>>>64-H,L=(G,X,H)=>G<<H-32|X>>>64-H;function U(G,X,H,Q){const he=(X>>>0)+(Q>>>0);return{h:G+H+(he/2**32|0)|0,l:he|0}}e.add=U;const M=(G,X,H)=>(G>>>0)+(X>>>0)+(H>>>0),R=(G,X,H,Q)=>X+H+Q+(G/2**32|0)|0,E=(G,X,H,Q)=>(G>>>0)+(X>>>0)+(H>>>0)+(Q>>>0),O=(G,X,H,Q,he)=>X+H+Q+he+(G/2**32|0)|0,N=(G,X,H,Q,he)=>(G>>>0)+(X>>>0)+(H>>>0)+(Q>>>0)+(he>>>0),q=(G,X,H,Q,he,ee)=>X+H+Q+he+ee+(G/2**32|0)|0,ie={fromBig:s,split:o,toBig:e.toBig,shrSH:c,shrSL:u,rotrSH:d,rotrSL:p,rotrBH:h,rotrBL:v,rotr32H:b,rotr32L:_,rotlSH:w,rotlSL:k,rotlBH:S,rotlBL:L,add:U,add3L:M,add3H:R,add4L:E,add4H:O,add5H:q,add5L:N};e.default=ie})(np);Object.defineProperty(fn,"__esModule",{value:!0});fn.sha384=fn.sha512_256=fn.sha512_224=gc=fn.sha512=fn.SHA512=void 0;const E6=pa,we=np,ga=Ss,[T6,A6]=we.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),hr=new Uint32Array(80),pr=new Uint32Array(80);class Es extends E6.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:r,Bh:s,Bl:o,Ch:a,Cl:c,Dh:u,Dl:d,Eh:p,El:h,Fh:v,Fl:b,Gh:_,Gl:w,Hh:k,Hl:S}=this;return[t,r,s,o,a,c,u,d,p,h,v,b,_,w,k,S]}set(t,r,s,o,a,c,u,d,p,h,v,b,_,w,k,S){this.Ah=t|0,this.Al=r|0,this.Bh=s|0,this.Bl=o|0,this.Ch=a|0,this.Cl=c|0,this.Dh=u|0,this.Dl=d|0,this.Eh=p|0,this.El=h|0,this.Fh=v|0,this.Fl=b|0,this.Gh=_|0,this.Gl=w|0,this.Hh=k|0,this.Hl=S|0}process(t,r){for(let M=0;M<16;M++,r+=4)hr[M]=t.getUint32(r),pr[M]=t.getUint32(r+=4);for(let M=16;M<80;M++){const R=hr[M-15]|0,E=pr[M-15]|0,O=we.default.rotrSH(R,E,1)^we.default.rotrSH(R,E,8)^we.default.shrSH(R,E,7),N=we.default.rotrSL(R,E,1)^we.default.rotrSL(R,E,8)^we.default.shrSL(R,E,7),q=hr[M-2]|0,ie=pr[M-2]|0,G=we.default.rotrSH(q,ie,19)^we.default.rotrBH(q,ie,61)^we.default.shrSH(q,ie,6),X=we.default.rotrSL(q,ie,19)^we.default.rotrBL(q,ie,61)^we.default.shrSL(q,ie,6),H=we.default.add4L(N,X,pr[M-7],pr[M-16]),Q=we.default.add4H(H,O,G,hr[M-7],hr[M-16]);hr[M]=Q|0,pr[M]=H|0}let{Ah:s,Al:o,Bh:a,Bl:c,Ch:u,Cl:d,Dh:p,Dl:h,Eh:v,El:b,Fh:_,Fl:w,Gh:k,Gl:S,Hh:L,Hl:U}=this;for(let M=0;M<80;M++){const R=we.default.rotrSH(v,b,14)^we.default.rotrSH(v,b,18)^we.default.rotrBH(v,b,41),E=we.default.rotrSL(v,b,14)^we.default.rotrSL(v,b,18)^we.default.rotrBL(v,b,41),O=v&_^~v&k,N=b&w^~b&S,q=we.default.add5L(U,E,N,A6[M],pr[M]),ie=we.default.add5H(q,L,R,O,T6[M],hr[M]),G=q|0,X=we.default.rotrSH(s,o,28)^we.default.rotrBH(s,o,34)^we.default.rotrBH(s,o,39),H=we.default.rotrSL(s,o,28)^we.default.rotrBL(s,o,34)^we.default.rotrBL(s,o,39),Q=s&a^s&u^a&u,he=o&c^o&d^c&d;L=k|0,U=S|0,k=_|0,S=w|0,_=v|0,w=b|0,{h:v,l:b}=we.default.add(p|0,h|0,ie|0,G|0),p=u|0,h=d|0,u=a|0,d=c|0,a=s|0,c=o|0;const ee=we.default.add3L(G,H,he);s=we.default.add3H(ee,ie,X,Q),o=ee|0}({h:s,l:o}=we.default.add(this.Ah|0,this.Al|0,s|0,o|0)),{h:a,l:c}=we.default.add(this.Bh|0,this.Bl|0,a|0,c|0),{h:u,l:d}=we.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:p,l:h}=we.default.add(this.Dh|0,this.Dl|0,p|0,h|0),{h:v,l:b}=we.default.add(this.Eh|0,this.El|0,v|0,b|0),{h:_,l:w}=we.default.add(this.Fh|0,this.Fl|0,_|0,w|0),{h:k,l:S}=we.default.add(this.Gh|0,this.Gl|0,k|0,S|0),{h:L,l:U}=we.default.add(this.Hh|0,this.Hl|0,L|0,U|0),this.set(s,o,a,c,u,d,p,h,v,b,_,w,k,S,L,U)}roundClean(){hr.fill(0),pr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}fn.SHA512=Es;class I6 extends Es{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class R6 extends Es{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class L6 extends Es{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var gc=fn.sha512=(0,ga.wrapConstructor)(()=>new Es);fn.sha512_224=(0,ga.wrapConstructor)(()=>new I6);fn.sha512_256=(0,ga.wrapConstructor)(()=>new R6);fn.sha384=(0,ga.wrapConstructor)(()=>new L6);const O6=aa(n6),P6=aa(b6);Object.defineProperty(Zt,"__esModule",{value:!0});var rp=Zt.mnemonicToSeedSync=Zt.mnemonicToSeed=hp=Zt.validateMnemonic=Zt.entropyToMnemonic=Zt.mnemonicToEntropy=cp=Zt.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const ip=pt,sp=xi,M6=k6,op=fn,B6=O6,Eo=P6,U6=e=>e[0]==="あいこくしん";function ap(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function Gc(e){const t=ap(e),r=t.split(" ");if(![12,15,18,21,24].includes(r.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:r}}function lp(e){ip.default.bytes(e,16,20,24,28,32)}function D6(e,t=128){if(ip.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return dp((0,B6.randomBytes)(t/8),e)}var cp=Zt.generateMnemonic=D6;const H6=e=>{const t=8-e.length/4;return new Uint8Array([(0,M6.sha256)(e)[0]>>t<<t])};function up(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),Eo.utils.chain(Eo.utils.checksum(1,H6),Eo.utils.radix2(11,!0),Eo.utils.alphabet(e))}function fp(e,t){const{words:r}=Gc(e),s=up(t).decode(r);return lp(s),s}Zt.mnemonicToEntropy=fp;function dp(e,t){return lp(e),up(t).encode(e).join(U6(t)?"　":" ")}Zt.entropyToMnemonic=dp;function F6(e,t){try{fp(e,t)}catch{return!1}return!0}var hp=Zt.validateMnemonic=F6;const pp=e=>ap(`mnemonic${e}`);function j6(e,t=""){return(0,sp.pbkdf2Async)(op.sha512,Gc(e).nfkd,pp(t),{c:2048,dkLen:64})}Zt.mnemonicToSeed=j6;function z6(e,t=""){return(0,sp.pbkdf2)(op.sha512,Gc(e).nfkd,pp(t),{c:2048,dkLen:64})}rp=Zt.mnemonicToSeedSync=z6;class gp extends zc{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,jr.hash(t);const s=ks(r);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(s.length>o?t.create().update(s).digest():s);for(let c=0;c<a.length;c++)a[c]^=54;this.iHash.update(a),this.oHash=t.create();for(let c=0;c<a.length;c++)a[c]^=106;this.oHash.update(a),a.fill(0)}update(t){return jr.exists(this),this.iHash.update(t),this}digestInto(t){jr.exists(this),jr.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:s,finished:o,destroyed:a,blockLen:c,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=c,t.outputLen=u,t.oHash=r._cloneInto(t.oHash),t.iHash=s._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const ys=(e,t,r)=>new gp(e,t).update(r).digest();ys.create=(e,t)=>new gp(e,t);const N6=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),vp=Uint8Array.from({length:16},(e,t)=>t),W6=vp.map(e=>(9*e+5)%16);let Vc=[vp],Qc=[W6];for(let e=0;e<4;e++)for(let t of[Vc,Qc])t.push(t[e].map(r=>N6[r]));const mp=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),q6=Vc.map((e,t)=>e.map(r=>mp[t][r])),K6=Qc.map((e,t)=>e.map(r=>mp[t][r])),G6=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),V6=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),To=(e,t)=>e<<t|e>>>32-t;function Ph(e,t,r,s){return e===0?t^r^s:e===1?t&r|~t&s:e===2?(t|~r)^s:e===3?t&s|r&~s:t^(r|~s)}const Ao=new Uint32Array(16);class Q6 extends L1{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:r,h2:s,h3:o,h4:a}=this;return[t,r,s,o,a]}set(t,r,s,o,a){this.h0=t|0,this.h1=r|0,this.h2=s|0,this.h3=o|0,this.h4=a|0}process(t,r){for(let _=0;_<16;_++,r+=4)Ao[_]=t.getUint32(r,!0);let s=this.h0|0,o=s,a=this.h1|0,c=a,u=this.h2|0,d=u,p=this.h3|0,h=p,v=this.h4|0,b=v;for(let _=0;_<5;_++){const w=4-_,k=G6[_],S=V6[_],L=Vc[_],U=Qc[_],M=q6[_],R=K6[_];for(let E=0;E<16;E++){const O=To(s+Ph(_,a,u,p)+Ao[L[E]]+k,M[E])+v|0;s=v,v=p,p=To(u,10)|0,u=a,a=O}for(let E=0;E<16;E++){const O=To(o+Ph(w,c,d,h)+Ao[U[E]]+S,R[E])+b|0;o=b,b=h,h=To(d,10)|0,d=c,c=O}}this.set(this.h1+u+h|0,this.h2+p+b|0,this.h3+v+o|0,this.h4+s+c|0,this.h0+a+d|0)}roundClean(){Ao.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const Z6=ha(()=>new Q6);xe.hmacSha256Sync=(e,...t)=>ys(Yn,e,xe.concatBytes(...t));const Ql=z1(Yn);function Mh(e){return BigInt(`0x${T1(e)}`)}function X6(e){return A1(e.toString(16).padStart(64,"0"))}const Y6=jc("Bitcoin seed"),Zl={private:76066276,public:76067358},Xl=2147483648,J6=e=>Z6(Yn(e)),e8=e=>Nr(e).getUint32(0,!1),Io=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return Nr(t).setUint32(0,e,!1),t};class Fr{constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||Zl,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!xe.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:Mh(t.privateKey),this.privKeyBytes=X6(this.privKey),this.pubKey=Px(t.privateKey,!0)}else if(t.publicKey)this.pubKey=Ie.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=J6(this.pubKey)}get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return e8(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return Ql.encode(this.serialize(this.versions.private,us(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Ql.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,r=Zl){if(di(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const s=ys(gc,Y6,t);return new Fr({versions:r,chainCode:s.slice(32),privateKey:s.slice(0,32)})}static fromExtendedKey(t,r=Zl){const s=Ql.decode(t),o=Nr(s),a=o.getUint32(0,!1),c={versions:r,depth:s[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:s.slice(13,45)},u=s.slice(45),d=u[0]===0;if(a!==r[d?"private":"public"])throw new Error("Version mismatch");return d?new Fr({...c,privateKey:u.slice(1)}):new Fr({...c,publicKey:u})}static fromJSON(t){return Fr.fromExtendedKey(t.xpriv)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const r=t.replace(/^[mM]'?\//,"").split("/");let s=this;for(const o of r){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let c=+a[1];if(!Number.isSafeInteger(c)||c>=Xl)throw new Error("Invalid index");a[2]==="'"&&(c+=Xl),s=s.deriveChild(c)}return s}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let r=Io(t);if(t>=Xl){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");r=us(new Uint8Array([0]),u,r)}else r=us(this.pubKey,r);const s=ys(gc,this.chainCode,r),o=Mh(s.slice(0,32)),a=s.slice(32);if(!xe.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const c={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=xe.mod(this.privKey+o,je.n);if(!xe.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");c.privateKey=u}else{const u=Ie.fromHex(this.pubKey).add(Ie.fromPrivateKey(o));if(u.equals(Ie.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");c.publicKey=u.toRawBytes(!0)}return new Fr(c)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return di(t,32),Dx(t,this.privKey,{canonical:!0,der:!1})}verify(t,r){if(di(t,32),di(r,64),!this.publicKey)throw new Error("No publicKey set!");let s;try{s=Xn.fromCompact(r)}catch{return!1}return Fx(s,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,r){if(!this.chainCode)throw new Error("No chainCode set");return di(r,33),us(Io(t),new Uint8Array([this.depth]),Io(this.parentFingerprint),Io(this.index),this.chainCode,r)}}var t8=Object.defineProperty,Ut=(e,t)=>{for(var r in t)t8(e,r,{get:t[r],enumerable:!0})};function n8(e){return xe.bytesToHex(da.getPublicKey(e))}var r8={};Ut(r8,{insertEventIntoAscendingList:()=>s8,insertEventIntoDescendingList:()=>i8,normalizeURL:()=>vc,utf8Decoder:()=>mr,utf8Encoder:()=>On});var mr=new TextDecoder("utf-8"),On=new TextEncoder;function vc(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function i8(e,t){let r=0,s=e.length-1,o,a=r;if(s<0)a=0;else if(t.created_at<e[s].created_at)a=s+1;else if(t.created_at>=e[r].created_at)a=r;else for(;;){if(s<=r+1){a=s;break}if(o=Math.floor(r+(s-r)/2),e[o].created_at>t.created_at)r=o;else if(e[o].created_at<t.created_at)s=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function s8(e,t){let r=0,s=e.length-1,o,a=r;if(s<0)a=0;else if(t.created_at>e[s].created_at)a=s+1;else if(t.created_at<=e[r].created_at)a=r;else for(;;){if(s<=r+1){a=s;break}if(o=Math.floor(r+(s-r)/2),e[o].created_at<t.created_at)r=o;else if(e[o].created_at>t.created_at)s=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var at=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.BadgeDefinition=30008]="BadgeDefinition",e[e.ProfileBadge=30009]="ProfileBadge",e[e.Article=30023]="Article",e))(at||{});function o8(e){if(!Zc(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function bp(e){let t=Yn(On.encode(o8(e)));return xe.bytesToHex(t)}var a8=e=>e instanceof Object;function Zc(e){if(!a8(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let r=e.tags[t];if(!Array.isArray(r))return!1;for(let s=0;s<r.length;s++)if(typeof r[s]=="object")return!1}return!0}function yp(e){return da.verifySync(e.sig,bp(e),e.pubkey)}function l8(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(r=>t.id.startsWith(r))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(r=>t.pubkey.startsWith(r)))return!1;for(let r in e)if(r[0]==="#"){let s=r.slice(1),o=e[`#${s}`];if(o&&!t.tags.find(([a,c])=>a===r.slice(1)&&o.indexOf(c)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function c8(e,t){for(let r=0;r<e.length;r++)if(l8(e[r],t))return!0;return!1}var u8={};Ut(u8,{getHex64:()=>va,getInt:()=>_p,getSubscriptionId:()=>wp,matchEventId:()=>f8,matchEventKind:()=>h8,matchEventPubkey:()=>d8});function va(e,t){let r=t.length+3,s=e.indexOf(`"${t}":`)+r,o=e.slice(s).indexOf('"')+s+1;return e.slice(o,o+64)}function _p(e,t){let r=t.length,s=e.indexOf(`"${t}":`)+r+3,o=e.slice(s),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function wp(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let r=e.slice(t+7+1).indexOf('"');if(r===-1)return null;let s=t+7+1+r,o=e.slice(s+1,80).indexOf('"');if(o===-1)return null;let a=s+1+o;return e.slice(s+1,a)}function f8(e,t){return t===va(e,"id")}function d8(e,t){return t===va(e,"pubkey")}function h8(e,t){return t===_p(e,"kind")}var Bh=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function p8(e,t={}){let{listTimeout:r=3e3,getTimeout:s=3e3,countTimeout:o=3e3}=t;var a,c={},u=Bh(),d={},p={},h;async function v(){return h||(h=new Promise((L,U)=>{try{a=new WebSocket(e)}catch(O){U(O)}a.onopen=()=>{u.connect.forEach(O=>O()),L()},a.onerror=()=>{h=void 0,u.error.forEach(O=>O()),U()},a.onclose=async()=>{h=void 0,u.disconnect.forEach(O=>O())};let M=[],R;a.onmessage=O=>{M.push(O.data),R||(R=setInterval(E,0))};function E(){if(M.length===0){clearInterval(R),R=null;return}var O=M.shift();if(!O)return;let N=wp(O);if(N){let q=c[N];if(q&&q.alreadyHaveEvent&&q.alreadyHaveEvent(va(O,"id"),e))return}try{let q=JSON.parse(O);switch(q[0]){case"EVENT":{let H=q[1],Q=q[2];Zc(Q)&&c[H]&&(c[H].skipVerification||yp(Q))&&c8(c[H].filters,Q)&&(c[H],(d[H]?.event||[]).forEach(he=>he(Q)));return}case"COUNT":let ie=q[1],G=q[2];c[ie]&&(d[ie]?.count||[]).forEach(H=>H(G));return;case"EOSE":{let H=q[1];H in d&&(d[H].eose.forEach(Q=>Q()),d[H].eose=[]);return}case"OK":{let H=q[1],Q=q[2],he=q[3]||"";H in p&&(Q?p[H].ok.forEach(ee=>ee()):p[H].failed.forEach(ee=>ee(he)),p[H].ok=[],p[H].failed=[]);return}case"NOTICE":let X=q[1];u.notice.forEach(H=>H(X));return;case"AUTH":{let H=q[1];u.auth?.forEach(Q=>Q(H));return}}}catch{return}}}),h)}function b(){return a?.readyState===1}async function _(){b()||await v()}async function w(L){let U=JSON.stringify(L);if(!(!b()&&(await new Promise(M=>setTimeout(M,1e3)),!b())))try{a.send(U)}catch(M){console.log(M)}}const k=(L,{verb:U="REQ",skipVerification:M=!1,alreadyHaveEvent:R=null,id:E=Math.random().toString().slice(2)}={})=>{let O=E;return c[O]={id:O,filters:L,skipVerification:M,alreadyHaveEvent:R},w([U,O,...L]),{sub:(N,q={})=>k(N||L,{skipVerification:q.skipVerification||M,alreadyHaveEvent:q.alreadyHaveEvent||R,id:O}),unsub:()=>{delete c[O],delete d[O],w(["CLOSE",O])},on:(N,q)=>{d[O]=d[O]||{event:[],count:[],eose:[]},d[O][N].push(q)},off:(N,q)=>{let ie=d[O],G=ie[N].indexOf(q);G>=0&&ie[N].splice(G,1)}}};function S(L,U){if(!L.id)throw new Error(`event ${L} has no id`);let M=L.id;return w([U,L]),{on:(R,E)=>{p[M]=p[M]||{ok:[],failed:[]},p[M][R].push(E)},off:(R,E)=>{let O=p[M];if(!O)return;let N=O[R].indexOf(E);N>=0&&O[R].splice(N,1)}}}return{url:e,sub:k,on:(L,U)=>{u[L].push(U),L==="connect"&&a?.readyState===1&&U()},off:(L,U)=>{let M=u[L].indexOf(U);M!==-1&&u[L].splice(M,1)},list:(L,U)=>new Promise(M=>{let R=k(L,U),E=[],O=setTimeout(()=>{R.unsub(),M(E)},r);R.on("eose",()=>{R.unsub(),clearTimeout(O),M(E)}),R.on("event",N=>{E.push(N)})}),get:(L,U)=>new Promise(M=>{let R=k([L],U),E=setTimeout(()=>{R.unsub(),M(null)},s);R.on("event",O=>{R.unsub(),clearTimeout(E),M(O)})}),count:L=>new Promise(U=>{let M=k(L,{...k,verb:"COUNT"}),R=setTimeout(()=>{M.unsub(),U(null)},o);M.on("count",E=>{M.unsub(),clearTimeout(R),U(E)})}),publish(L){return S(L,"EVENT")},auth(L){return S(L,"AUTH")},connect:_,close(){u=Bh(),d={},p={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var g8=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let r=this._conn[vc(t)];r&&r.close()})}async ensureRelay(e){const t=vc(e);this._conn[t]||(this._conn[t]=p8(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const r=this._conn[t];return await r.connect(),r}sub(e,t,r){let s=new Set,o={...r||{}};o.alreadyHaveEvent=(b,_)=>{if(r?.alreadyHaveEvent?.(b,_))return!0;let w=this._seenOn[b]||new Set;return w.add(_),this._seenOn[b]=w,s.has(b)};let a=[],c=new Set,u=new Set,d=e.length,p=!1,h=setTimeout(()=>{p=!0;for(let b of u.values())b()},this.eoseSubTimeout);e.forEach(async b=>{let _;try{_=await this.ensureRelay(b)}catch{k();return}if(!_)return;let w=_.sub(t,o);w.on("event",S=>{s.add(S.id);for(let L of c.values())L(S)}),w.on("eose",()=>{p||k()}),a.push(w);function k(){if(d--,d===0){clearTimeout(h);for(let S of u.values())S()}}});let v={sub(b,_){return a.forEach(w=>w.sub(b,_)),v},unsub(){a.forEach(b=>b.unsub())},on(b,_){b==="event"?c.add(_):b==="eose"&&u.add(_)},off(b,_){b==="event"?c.delete(_):b==="eose"&&u.delete(_)}};return v}get(e,t,r){return new Promise(s=>{let o=this.sub(e,[t],r),a=setTimeout(()=>{o.unsub(),s(null)},this.getTimeout);o.on("event",c=>{s(c),clearTimeout(a),o.unsub()})})}list(e,t,r){return new Promise(s=>{let o=[],a=this.sub(e,t,r);a.on("event",c=>{o.push(c)}),a.on("eose",()=>{a.unsub(),s(o)})})}publish(e,t){const r=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),s=new Map;return{on(o,a){e.forEach(async(c,u)=>{let d=await r[u],p=()=>a(c);s.set(a,p),d.on(o,p)})},off(o,a){e.forEach(async(c,u)=>{let d=s.get(a);d&&(await r[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},Ts={};Ut(Ts,{decode:()=>ma,naddrEncode:()=>w8,neventEncode:()=>_8,noteEncode:()=>b8,nprofileEncode:()=>y8,npubEncode:()=>m8,nrelayEncode:()=>$8,nsecEncode:()=>v8});var Pi=5e3;function ma(e){let{prefix:t,words:r}=Et.decode(e,Pi),s=new Uint8Array(Et.fromWords(r));switch(t){case"nprofile":{let o=Ro(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:xe.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>mr.decode(a)):[]}}}case"nevent":{let o=Ro(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:xe.bytesToHex(o[0][0]),relays:o[1]?o[1].map(a=>mr.decode(a)):[],author:o[2]?.[0]?xe.bytesToHex(o[2][0]):void 0}}}case"naddr":{let o=Ro(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:mr.decode(o[0][0]),pubkey:xe.bytesToHex(o[2][0]),kind:parseInt(xe.bytesToHex(o[3][0]),16),relays:o[1]?o[1].map(a=>mr.decode(a)):[]}}}case"nrelay":{let o=Ro(s);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:mr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:xe.bytesToHex(s)};default:throw new Error(`unknown prefix ${t}`)}}function Ro(e){let t={},r=e;for(;r.length>0;){let s=r[0],o=r[1],a=r.slice(2,2+o);r=r.slice(2+o),!(a.length<o)&&(t[s]=t[s]||[],t[s].push(a))}return t}function v8(e){return Xc("nsec",e)}function m8(e){return Xc("npub",e)}function b8(e){return Xc("note",e)}function Xc(e,t){let r=xe.hexToBytes(t),s=Et.toWords(r);return Et.encode(e,s,Pi)}function y8(e){let t=ba({0:[xe.hexToBytes(e.pubkey)],1:(e.relays||[]).map(s=>On.encode(s))}),r=Et.toWords(t);return Et.encode("nprofile",r,Pi)}function _8(e){let t=ba({0:[xe.hexToBytes(e.id)],1:(e.relays||[]).map(s=>On.encode(s)),2:e.author?[xe.hexToBytes(e.author)]:[]}),r=Et.toWords(t);return Et.encode("nevent",r,Pi)}function w8(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let r=ba({0:[On.encode(e.identifier)],1:(e.relays||[]).map(o=>On.encode(o)),2:[xe.hexToBytes(e.pubkey)],3:[new Uint8Array(t)]}),s=Et.toWords(r);return Et.encode("naddr",s,Pi)}function $8(e){let t=ba({0:[On.encode(e)]}),r=Et.toWords(t);return Et.encode("nrelay",r,Pi)}function ba(e){let t=[];return Object.entries(e).forEach(([r,s])=>{s.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(r)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),xe.concatBytes(...t)}var x8={};Ut(x8,{decrypt:()=>C8,encrypt:()=>k8});async function k8(e,t,r){const s=b1(e,"02"+t),o=$p(s);let a=Uint8Array.from(R1(16)),c=On.encode(r),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,c),p=$i.encode(new Uint8Array(d)),h=$i.encode(new Uint8Array(a.buffer));return`${p}?iv=${h}`}async function C8(e,t,r){let[s,o]=r.split("?iv="),a=b1(e,"02"+t),c=$p(a),u=await crypto.subtle.importKey("raw",c,{name:"AES-CBC"},!1,["decrypt"]),d=$i.decode(s),p=$i.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:p},u,d);return mr.decode(h)}function $p(e){return e.slice(1,33)}var xp={};Ut(xp,{queryProfile:()=>T8,searchDomain:()=>E8,useFetchImplementation:()=>S8});var ya;try{ya=fetch}catch{}function S8(e){ya=e}async function E8(e,t=""){try{return(await(await ya(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function T8(e){let[t,r]=e.split("@");if(r||(r=t,t="_"),!t.match(/^[A-Za-z0-9-_.]+$/)||!r.includes("."))return null;let s;try{s=await(await ya(`https://${r}/.well-known/nostr.json?name=${t}`)).json()}catch{return null}if(!s?.names?.[t])return null;let o=s.names[t],a=s.relays?.[o]||[];return{pubkey:o,relays:a}}var A8={};Ut(A8,{generateSeedWords:()=>R8,privateKeyFromSeedWords:()=>I8,validateWords:()=>L8});function I8(e,t){let s=Fr.fromMasterSeed(rp(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!s)throw new Error("could not derive private key");return xe.bytesToHex(s)}function R8(){return cp(qc)}function L8(e){return hp(e,qc)}var O8={};Ut(O8,{parse:()=>P8});function P8(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},r=[];for(const s of e.tags)s[0]==="e"&&s[1]&&r.push(s),s[0]==="p"&&s[1]&&t.profiles.push({pubkey:s[1],relays:s[2]?[s[2]]:[]});for(let s=0;s<r.length;s++){const o=r[s],[a,c,u,d]=o,p={id:c,relays:u?[u]:[]},h=s===0,v=s===r.length-1;if(d==="root"){t.root=p;continue}if(d==="reply"){t.reply=p;continue}if(d==="mention"){t.mentions.push(p);continue}if(h){t.root=p;continue}if(v){t.reply=p;continue}t.mentions.push(p)}return t}var M8={};Ut(M8,{getPow:()=>B8});function B8(e){return U8(xe.hexToBytes(e))}function U8(e){let t,r,s;for(r=0,t=0;r<e.length&&(s=D8(e[r]),t+=s,s===8);r++);return t}function D8(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var H8={};Ut(H8,{BECH32_REGEX:()=>kp,NOSTR_URI_REGEX:()=>_a,parse:()=>j8,test:()=>F8});var kp=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/,_a=new RegExp(`nostr:(${kp.source})`);function F8(e){return typeof e=="string"&&new RegExp(`^${_a.source}$`).test(e)}function j8(e){const t=e.match(new RegExp(`^${_a.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:ma(t[1])}}var z8={};Ut(z8,{createDelegation:()=>N8,getDelegator:()=>W8});function N8(e,t){let r=[];(t.kind||-1)>=0&&r.push(`kind=${t.kind}`),t.until&&r.push(`created_at<${t.until}`),t.since&&r.push(`created_at>${t.since}`);let s=r.join("&");if(s==="")throw new Error("refusing to create a delegation without any conditions");let o=Yn(On.encode(`nostr:delegation:${t.pubkey}:${s}`)),a=xe.bytesToHex(da.signSync(o,e));return{from:n8(e),to:t.pubkey,cond:s,sig:a}}function W8(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let r=t[1],s=t[2],o=t[3],a=s.split("&");for(let u=0;u<a.length;u++){let[d,p,h]=a[u].split(/\b/);if(!(d==="kind"&&p==="="&&e.kind===parseInt(h))){if(d==="created_at"&&p==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&p===">"&&e.created_at>parseInt(h))continue;return null}}let c=Yn(On.encode(`nostr:delegation:${e.pubkey}:${s}`));return da.verifySync(o,c,r)?r:null}var q8={};Ut(q8,{matchAll:()=>K8,regex:()=>Yc,replaceAll:()=>G8});var Yc=()=>new RegExp(`\\b${_a.source}\\b`,"g");function*K8(e){const t=e.matchAll(Yc());for(const r of t){const[s,o]=r;yield{uri:s,value:o,decoded:ma(o),start:r.index,end:r.index+s.length}}}function G8(e,t){return e.replaceAll(Yc(),(r,s)=>t({uri:r,value:s,decoded:ma(s)}))}var V8={};Ut(V8,{useFetchImplementation:()=>Q8,validateGithub:()=>Z8});var Jc;try{Jc=fetch}catch{}function Q8(e){Jc=e}async function Z8(e,t,r){try{return await(await Jc(`https://gist.github.com/${t}/${r}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var X8={};Ut(X8,{authenticate:()=>Y8});var Y8=async({challenge:e,relay:t,sign:r})=>{const s={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await r(s));return new Promise((a,c)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),c(d)})})},J8={};Ut(J8,{getZapEndpoint:()=>t7,makeZapReceipt:()=>i7,makeZapRequest:()=>n7,useFetchImplementation:()=>e7,validateZapRequest:()=>r7});var eu;try{eu=fetch}catch{}function e7(e){eu=e}async function t7(e){try{let t="",{lud06:r,lud16:s}=JSON.parse(e.content);if(r){let{words:c}=Et.decode(r,1e3),u=Et.fromWords(c);t=mr.decode(u)}else if(s){let[c,u]=s.split("@");t=`https://${u}/.well-known/lnurlp/${c}`}else return null;let a=await(await eu(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function n7({profile:e,event:t,amount:r,relays:s,comment:o=""}){if(!r)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",r.toString()],["relays",...s]]};return t&&a.tags.push(["e",t]),a}function r7(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!Zc(t))return"Zap request is not a valid Nostr event.";if(!yp(t))return"Invalid signature on zap request.";let r=t.tags.find(([a,c])=>a==="p"&&c);if(!r)return"Zap request doesn't have a 'p' tag.";if(!r[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let s=t.tags.find(([a,c])=>a==="e"&&c);return s&&!s[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,c])=>a==="relays"&&c)?null:"Zap request doesn't have a 'relays' tag."}function i7({zapRequest:e,preimage:t,bolt11:r,paidAt:s}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),c={kind:9735,created_at:Math.round(s.getTime()/1e3),content:"",tags:[...a,["bolt11",r],["description",e]]};return t&&c.tags.push(["preimage",t]),c}xe.hmacSha256Sync=(e,...t)=>ys(Yn,e,xe.concatBytes(...t));xe.sha256Sync=(...e)=>Yn(xe.concatBytes(...e));const s7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),Cp=(e={})=>(()=>{const t=s7();return Qe(t,e,!0,!0),t})(),o7=P('<div class="block shrink-0 overflow-hidden border-b p-1">'),tu=e=>(()=>{const t=o7();return I(t,()=>e.children),t})(),a7=P('<button class="text-blue-500 underline">'),{noteEncode:l7}=Ts,c7=e=>{try{return l7(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},nu=e=>(()=>{const t=a7();return I(t,()=>c7(e.eventId)),t})(),u7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),f7=(e={})=>(()=>{const t=u7();return Qe(t,e,!0,!0),t})(),d7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),Sp=(e={})=>(()=>{const t=d7();return Qe(t,e,!0,!0),t})(),h7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),ru=(e={})=>(()=>{const t=h7();return Qe(t,e,!0,!0),t})(),p7=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),Ep=(e={})=>(()=>{const t=p7();return Qe(t,e,!0,!0),t})(),g7=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),iu=(e={})=>(()=>{const t=g7();return Qe(t,e,!0,!0),t})(),v7=P('<div><button class="flex items-center"></button><div class="absolute z-20">'),su=e=>{let t,r;const[s,o]=ye(!1),[a,c]=ye({}),u=Bw(()=>e.children),d=()=>o(!1),p=()=>o(w=>!w),h=w=>{const k=w.target;k!=null&&!r?.contains(k)&&d()},v=()=>{document.addEventListener("mousedown",h)},b=()=>{document.removeEventListener("mousedown",h)},_=()=>{if(t==null||r==null)return;const w=t?.getBoundingClientRect(),k=r?.getBoundingClientRect();let{top:S,left:L}=w;e.position==="left"?L-=w.width:e.position==="right"?L+=w.width:e.position==="top"?(S-=w.height,L-=w.left+w.width/2):(S+=w.height,L+=w.width/2),S=Math.min(S,window.innerHeight-k.height),L=Math.min(L,window.innerWidth-k.width),c({left:`${L}px`,top:`${S}px`})};return _r(()=>{s()?(v(),e.onOpen?.()):(b(),e.onClose?.())}),_r(sa(u,()=>{_()})),_r(()=>{s()&&_()}),kn(()=>{e.ref?.({close:d})}),qr(()=>b()),(()=>{const w=v7(),k=w.firstChild,S=k.nextSibling;k.$$click=()=>{p(),_()};const L=t;typeof L=="function"?Rn(L,k):t=k,I(k,()=>e.button);const U=r;return typeof U=="function"?Rn(U,S):r=S,I(S,u),Le(M=>{const R=!s(),E=!!s(),O=a();return R!==M._v$&&S.classList.toggle("hidden",M._v$=R),E!==M._v$2&&S.classList.toggle("block",M._v$2=E),M._v$3=Uw(S,O,M._v$3),M},{_v$:void 0,_v$2:void 0,_v$3:void 0}),w})()};it(["click"]);const m7=P('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),b7=P('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),y7=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const r=m7(),s=r.firstChild;return s.$$click=t,I(s,()=>e.item.content()),r})()},Tp=e=>{let t;const r=()=>t?.close();return $(su,{ref:s=>{t=s},get button(){return e.children},position:"bottom",get children(){const s=b7();return I(s,$(Bt,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>$(y7,{item:o,onClose:r})})),s}})};it(["click"]);function Ap(e){return e&&e.__esModule?e.default:e}function _n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var wa,le,Ip,hs,Rp,Uh,Zo={},Lp=[],_7=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function yr(e,t){for(var r in t)e[r]=t[r];return e}function Op(e){var t=e.parentNode;t&&t.removeChild(e)}function mc(e,t,r){var s,o,a,c={};for(a in t)a=="key"?s=t[a]:a=="ref"?o=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?wa.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)c[a]===void 0&&(c[a]=e.defaultProps[a]);return Do(e,c,s,o,null)}function Do(e,t,r,s,o){var a={type:e,props:t,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Ip};return o==null&&le.vnode!=null&&le.vnode(a),a}function Gn(){return{current:null}}function ki(e){return e.children}function In(e,t){this.props=e,this.context=t}function Ci(e,t){if(t==null)return e.__?Ci(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?Ci(e):null}function Pp(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Pp(e)}}function Dh(e){(!e.__d&&(e.__d=!0)&&hs.push(e)&&!Xo.__r++||Uh!==le.debounceRendering)&&((Uh=le.debounceRendering)||Rp)(Xo)}function Xo(){for(var e;Xo.__r=hs.length;)e=hs.sort(function(t,r){return t.__v.__b-r.__v.__b}),hs=[],e.some(function(t){var r,s,o,a,c,u;t.__d&&(c=(a=(r=t).__v).__e,(u=r.__P)&&(s=[],(o=yr({},a)).__v=a.__v+1,ou(u,a,o,r.__n,u.ownerSVGElement!==void 0,a.__h!=null?[c]:null,s,c??Ci(a),a.__h),Dp(s,a),a.__e!=c&&Pp(a)))})}function Mp(e,t,r,s,o,a,c,u,d,p){var h,v,b,_,w,k,S,L=s&&s.__k||Lp,U=L.length;for(r.__k=[],h=0;h<t.length;h++)if((_=r.__k[h]=(_=t[h])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?Do(null,_,null,null,_):Array.isArray(_)?Do(ki,{children:_},null,null,null):_.__b>0?Do(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=r,_.__b=r.__b+1,(b=L[h])===null||b&&_.key==b.key&&_.type===b.type)L[h]=void 0;else for(v=0;v<U;v++){if((b=L[v])&&_.key==b.key&&_.type===b.type){L[v]=void 0;break}b=null}ou(e,_,b=b||Zo,o,a,c,u,d,p),w=_.__e,(v=_.ref)&&b.ref!=v&&(S||(S=[]),b.ref&&S.push(b.ref,null,_),S.push(v,_.__c||w,_)),w!=null?(k==null&&(k=w),typeof _.type=="function"&&_.__k===b.__k?_.__d=d=Bp(_,d,e):d=Up(e,_,b,L,w,d),typeof r.type=="function"&&(r.__d=d)):d&&b.__e==d&&d.parentNode!=e&&(d=Ci(b))}for(r.__e=k,h=U;h--;)L[h]!=null&&(typeof r.type=="function"&&L[h].__e!=null&&L[h].__e==r.__d&&(r.__d=Ci(s,h+1)),Fp(L[h],L[h]));if(S)for(h=0;h<S.length;h++)Hp(S[h],S[++h],S[++h])}function Bp(e,t,r){for(var s,o=e.__k,a=0;o&&a<o.length;a++)(s=o[a])&&(s.__=e,t=typeof s.type=="function"?Bp(s,t,r):Up(r,s,s,o,s.__e,t));return t}function Yo(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(r){Yo(r,t)}):t.push(e)),t}function Up(e,t,r,s,o,a){var c,u,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(r==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),c=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<s.length;d+=2)if(u==o)break e;e.insertBefore(o,a),c=a}return c!==void 0?c:o.nextSibling}function w7(e,t,r,s,o){var a;for(a in r)a==="children"||a==="key"||a in t||Jo(e,a,null,r[a],s);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||r[a]===t[a]||Jo(e,a,t[a],r[a],s)}function Hh(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||_7.test(t)?r:r+"px"}function Jo(e,t,r,s,o){var a;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)r&&t in r||Hh(e.style,t,"");if(r)for(t in r)s&&r[t]===s[t]||Hh(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=r,r?s||e.addEventListener(t,a?jh:Fh,a):e.removeEventListener(t,a?jh:Fh,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function Fh(e){this.l[e.type+!1](le.event?le.event(e):e)}function jh(e){this.l[e.type+!0](le.event?le.event(e):e)}function ou(e,t,r,s,o,a,c,u,d){var p,h,v,b,_,w,k,S,L,U,M,R=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(d=r.__h,u=t.__e=r.__e,t.__h=null,a=[u]),(p=le.__b)&&p(t);try{e:if(typeof R=="function"){if(S=t.props,L=(p=R.contextType)&&s[p.__c],U=p?L?L.props.value:p.__:s,r.__c?k=(h=t.__c=r.__c).__=h.__E:("prototype"in R&&R.prototype.render?t.__c=h=new R(S,U):(t.__c=h=new In(S,U),h.constructor=R,h.render=x7),L&&L.sub(h),h.props=S,h.state||(h.state={}),h.context=U,h.__n=s,v=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),R.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=yr({},h.__s)),yr(h.__s,R.getDerivedStateFromProps(S,h.__s))),b=h.props,_=h.state,v)R.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(R.getDerivedStateFromProps==null&&S!==b&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(S,U),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(S,h.__s,U)===!1||t.__v===r.__v){h.props=S,h.state=h.__s,t.__v!==r.__v&&(h.__d=!1),h.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(E){E&&(E.__=t)}),h.__h.length&&c.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(S,h.__s,U),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(b,_,w)})}h.context=U,h.props=S,h.state=h.__s,(p=le.__r)&&p(t),h.__d=!1,h.__v=t,h.__P=e,p=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(s=yr(yr({},s),h.getChildContext())),v||h.getSnapshotBeforeUpdate==null||(w=h.getSnapshotBeforeUpdate(b,_)),M=p!=null&&p.type===ki&&p.key==null?p.props.children:p,Mp(e,Array.isArray(M)?M:[M],t,r,s,o,a,c,u,d),h.base=t.__e,t.__h=null,h.__h.length&&c.push(h),k&&(h.__E=h.__=null),h.__e=!1}else a==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=$7(r.__e,t,r,s,o,a,c,d);(p=le.diffed)&&p(t)}catch(E){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),le.__e(E,t,r)}}function Dp(e,t){le.__c&&le.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(s){s.call(r)})}catch(s){le.__e(s,r.__v)}})}function $7(e,t,r,s,o,a,c,u){var d,p,h,v=r.props,b=t.props,_=t.type,w=0;if(_==="svg"&&(o=!0),a!=null){for(;w<a.length;w++)if((d=a[w])&&"setAttribute"in d==!!_&&(_?d.localName===_:d.nodeType===3)){e=d,a[w]=null;break}}if(e==null){if(_===null)return document.createTextNode(b);e=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,b.is&&b),a=null,u=!1}if(_===null)v===b||u&&e.data===b||(e.data=b);else{if(a=a&&wa.call(e.childNodes),p=(v=r.props||Zo).dangerouslySetInnerHTML,h=b.dangerouslySetInnerHTML,!u){if(a!=null)for(v={},w=0;w<e.attributes.length;w++)v[e.attributes[w].name]=e.attributes[w].value;(h||p)&&(h&&(p&&h.__html==p.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(w7(e,b,v,o,u),h)t.__k=[];else if(w=t.props.children,Mp(e,Array.isArray(w)?w:[w],t,r,s,o&&_!=="foreignObject",a,c,a?a[0]:r.__k&&Ci(r,0),u),a!=null)for(w=a.length;w--;)a[w]!=null&&Op(a[w]);u||("value"in b&&(w=b.value)!==void 0&&(w!==v.value||w!==e.value||_==="progress"&&!w)&&Jo(e,"value",w,v.value,!1),"checked"in b&&(w=b.checked)!==void 0&&w!==e.checked&&Jo(e,"checked",w,v.checked,!1))}return e}function Hp(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(s){le.__e(s,r)}}function Fp(e,t,r){var s,o;if(le.unmount&&le.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||Hp(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(a){le.__e(a,t)}s.base=s.__P=null}if(s=e.__k)for(o=0;o<s.length;o++)s[o]&&Fp(s[o],t,typeof e.type!="function");r||e.__e==null||Op(e.__e),e.__e=e.__d=void 0}function x7(e,t,r){return this.constructor(e,r)}function jp(e,t,r){var s,o,a;le.__&&le.__(e,t),o=(s=typeof r=="function")?null:r&&r.__k||t.__k,a=[],ou(t,e=(!s&&r||t).__k=mc(ki,null,[e]),o||Zo,Zo,t.ownerSVGElement!==void 0,!s&&r?[r]:o?null:t.firstChild?wa.call(t.childNodes):null,a,!s&&r?r:o?o.__e:t.firstChild,s),Dp(a,e)}wa=Lp.slice,le={__e:function(e,t){for(var r,s,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(e)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e),o=r.__d),o)return r.__E=r}catch(a){e=a}throw e}},Ip=0,In.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=yr({},this.state),typeof e=="function"&&(e=e(yr({},r),this.props)),e&&yr(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),Dh(this))},In.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Dh(this))},In.prototype.render=ki,hs=[],Rp=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Xo.__r=0;var k7=0;function z(e,t,r,s,o){var a,c,u={};for(c in t)c=="ref"?a=t[c]:u[c]=t[c];var d={type:e,props:u,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--k7,__source:s,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(c in a)u[c]===void 0&&(u[c]=a[c]);return le.vnode&&le.vnode(d),d}function C7(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function S7(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var kr={set:C7,get:S7};const Yl=new Map,E7=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function T7(){for(const{v:e,emoji:t}of E7)if(zp(t))return e}function A7(){return!zp("🇨🇦")}function zp(e){if(Yl.has(e))return Yl.get(e);const t=I7(e);return Yl.set(e,t),t}const I7=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,r=20,s=Math.floor(t/2);return e.font=s+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=r*2,e.canvas.height=t,o=>{e.clearRect(0,0,r*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,r,22);const a=e.getImageData(0,0,r,t).data,c=a.length;let u=0;for(;u<c&&!a[u+3];u+=4);if(u>=c)return!1;const d=r+u/4%r,p=Math.floor(u/4/r),h=e.getImageData(d,p,1,1).data;return!(a[u]!==h[0]||a[u+2]!==h[2]||e.measureText(o).width>=r)}})();var zh={latestVersion:T7,noCountryFlags:A7};const bc=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let bt=null;function R7(e){bt||(bt=kr.get("frequently")||{});const t=e.id||e;t&&(bt[t]||(bt[t]=0),bt[t]+=1,kr.set("last",t),kr.set("frequently",bt))}function L7({maxFrequentRows:e,perLine:t}){if(!e)return[];bt||(bt=kr.get("frequently"));let r=[];if(!bt){bt={};for(let a in bc.slice(0,t)){const c=bc[a];bt[c]=t-a,r.push(c)}return r}const s=e*t,o=kr.get("last");for(let a in bt)r.push(a);if(r.sort((a,c)=>{const u=bt[c],d=bt[a];return u==d?a.localeCompare(c):u-d}),r.length>s){const a=r.slice(s);r=r.slice(0,s);for(let c of a)c!=o&&delete bt[c];o&&r.indexOf(o)==-1&&(delete bt[r[r.length-1]],r.splice(-1,1,o)),kr.set("frequently",bt)}return r}var Np={add:R7,get:L7,DEFAULTS:bc},Wp={};Wp=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var Zn={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let $t=null,Ce=null;const Jl={};async function Nh(e){if(Jl[e])return Jl[e];const r=await(await fetch(e)).json();return Jl[e]=r,r}let ec=null,qp=null,Kp=!1;function $a(e,{caller:t}={}){return ec||(ec=new Promise(r=>{qp=r})),e?O7(e):t&&!Kp&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),ec}async function O7(e){Kp=!0;let{emojiVersion:t,set:r,locale:s}=e;if(t||(t=Zn.emojiVersion.value),r||(r=Zn.set.value),s||(s=Zn.locale.value),Ce)Ce.categories=Ce.categories.filter(d=>!d.name);else{Ce=(typeof e.data=="function"?await e.data():e.data)||await Nh(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${r}.json`),Ce.emoticons={},Ce.natives={},Ce.categories.unshift({id:"frequent",emojis:[]});for(const d in Ce.aliases){const p=Ce.aliases[d],h=Ce.emojis[p];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}Ce.originalCategories=Ce.categories}if($t=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(s=="en"?Ap(Wp):await Nh(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${s}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const p=e.custom[d],h=e.custom[d-1];if(!(!p.emojis||!p.emojis.length)){p.id||(p.id=`custom_${d+1}`),p.name||(p.name=$t.categories.custom),h&&!p.icon&&(p.target=h.target||h),Ce.categories.push(p);for(const v of p.emojis)Ce.emojis[v.id]=v}}e.categories&&(Ce.categories=Ce.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,p)=>{const h=e.categories.indexOf(d.id),v=e.categories.indexOf(p.id);return h-v}));let o=null,a=null;r=="native"&&(o=zh.latestVersion(),a=e.noCountryFlags||zh.noCountryFlags());let c=Ce.categories.length,u=!1;for(;c--;){const d=Ce.categories[c];if(d.id=="frequent"){let{maxFrequentRows:v,perLine:b}=e;v=v>=0?v:Zn.maxFrequentRows.value,b||(b=Zn.perLine.value),d.emojis=Np.get({maxFrequentRows:v,perLine:b})}if(!d.emojis||!d.emojis.length){Ce.categories.splice(c,1);continue}const{categoryIcons:p}=e;if(p){const v=p[d.id];v&&!d.icon&&(d.icon=v)}let h=d.emojis.length;for(;h--;){const v=d.emojis[h],b=v.id?v:Ce.emojis[v],_=()=>{d.emojis.splice(h,1)};if(!b||e.exceptEmojis&&e.exceptEmojis.includes(b.id)){_();continue}if(o&&b.version>o){_();continue}if(a&&d.id=="flags"&&!D7.includes(b.id)){_();continue}if(!b.search){if(u=!0,b.search=","+[[b.id,!1],[b.name,!0],[b.keywords,!1],[b.emoticons,!1]].map(([k,S])=>{if(k)return(Array.isArray(k)?k:[k]).map(L=>(S?L.split(/[-|_|\s]+/):[L]).map(U=>U.toLowerCase())).flat()}).flat().filter(k=>k&&k.trim()).join(","),b.emoticons)for(const k of b.emoticons)Ce.emoticons[k]||(Ce.emoticons[k]=b.id);let w=0;for(const k of b.skins){if(!k)continue;w++;const{native:S}=k;S&&(Ce.natives[S]=b.id,b.search+=`,${S}`);const L=w==1?"":`:skin-tone-${w}:`;k.shortcodes=`:${b.id}:${L}`}}}}u&&gi.reset(),qp()}function Gp(e,t,r){e||(e={});const s={};for(let o in t)s[o]=Vp(o,e,t,r);return s}function Vp(e,t,r,s){const o=r[e];let a=s&&s.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const P7=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let yc=null;function M7(e){return e.id?e:Ce.emojis[e]||Ce.emojis[Ce.aliases[e]]||Ce.emojis[Ce.natives[e]]}function B7(){yc=null}async function U7(e,{maxResults:t,caller:r}={}){if(!e||!e.trim().length)return null;t||(t=90),await $a(null,{caller:r||"SearchIndex.search"});const s=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,p)=>u.trim()&&p.indexOf(u)==d);if(!s.length)return;let o=yc||(yc=Object.values(Ce.emojis)),a,c;for(const u of s){if(!o.length)break;a=[],c={};for(const d of o){if(!d.search)continue;const p=d.search.indexOf(`,${u}`);p!=-1&&(a.push(d),c[d.id]||(c[d.id]=0),c[d.id]+=d.id==u?0:p+1)}o=a}return a.length<2||(a.sort((u,d)=>{const p=c[u.id],h=c[d.id];return p==h?u.id.localeCompare(d.id):p-h}),a.length>t&&(a=a.slice(0,t))),a}var gi={search:U7,get:M7,reset:B7,SHORTCODES_REGEX:P7};const D7=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function H7(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((r,s)=>r==t[s])}async function F7(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function j7(e,{skinIndex:t=0}={}){const r=e.skins[t]||(()=>(t=0,e.skins[t]))(),s={id:e.id,name:e.name,native:r.native,unified:r.unified,keywords:e.keywords,shortcodes:r.shortcodes||e.shortcodes};return e.skins.length>1&&(s.skin=t+1),r.src&&(s.src=r.src),e.aliases&&e.aliases.length&&(s.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(s.emoticons=e.emoticons),s}const z7={activity:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},N7={loupe:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var ea={categories:z7,search:N7};function _c(e){let{id:t,skin:r,emoji:s}=e;if(e.shortcodes){const u=e.shortcodes.match(gi.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(r=u[2]))}if(s||(s=gi.get(t||e.native)),!s)return e.fallback;const o=s.skins[r-1]||s.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),c=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${c})`,backgroundSize:`${100*Ce.sheet.cols}% ${100*Ce.sheet.rows}%`,backgroundPosition:`${100/(Ce.sheet.cols-1)*o.x}% ${100/(Ce.sheet.rows-1)*o.y}%`}})})}const W7=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Qp extends W7{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let r in t)this.attributeChangedCallback(r,null,t[r])}attributeChangedCallback(t,r,s){if(!this.component)return;const o=Vp(t,{[t]:s},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let r=null;const s=t.parent||(r=t.ref&&t.ref.current);r&&(r.innerHTML=""),s&&s.appendChild(this)}}}class q7 extends Qp{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const r=document.createElement("style");r.textContent=t,this.shadowRoot.insertBefore(r,this.shadowRoot.firstChild)}constructor(t,{styles:r}={}){super(t),this.setShadow(),this.injectStyles(r)}}var Zp={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:Zn.set,skin:Zn.skin};class Xp extends Qp{async connectedCallback(){const t=Gp(this.props,Zp,this);t.element=this,t.ref=r=>{this.component=r},await $a(),!this.disconnected&&jp(z(_c,{...t}),this)}constructor(t){super(t)}}_n(Xp,"Props",Zp);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Xp);var Wh,wc=[],qh=le.__b,Kh=le.__r,Gh=le.diffed,Vh=le.__c,Qh=le.unmount;function K7(){var e;for(wc.sort(function(t,r){return t.__v.__b-r.__v.__b});e=wc.pop();)if(e.__P)try{e.__H.__h.forEach(Ho),e.__H.__h.forEach($c),e.__H.__h=[]}catch(t){e.__H.__h=[],le.__e(t,e.__v)}}le.__b=function(e){qh&&qh(e)},le.__r=function(e){Kh&&Kh(e);var t=e.__c.__H;t&&(t.__h.forEach(Ho),t.__h.forEach($c),t.__h=[])},le.diffed=function(e){Gh&&Gh(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(wc.push(t)!==1&&Wh===le.requestAnimationFrame||((Wh=le.requestAnimationFrame)||function(r){var s,o=function(){clearTimeout(a),Zh&&cancelAnimationFrame(s),setTimeout(r)},a=setTimeout(o,100);Zh&&(s=requestAnimationFrame(o))})(K7))},le.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Ho),r.__h=r.__h.filter(function(s){return!s.__||$c(s)})}catch(s){t.some(function(o){o.__h&&(o.__h=[])}),t=[],le.__e(s,r.__v)}}),Vh&&Vh(e,t)},le.unmount=function(e){Qh&&Qh(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(s){try{Ho(s)}catch(o){t=o}}),t&&le.__e(t,r.__v))};var Zh=typeof requestAnimationFrame=="function";function Ho(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function $c(e){e.__c=e.__()}function G7(e,t){for(var r in t)e[r]=t[r];return e}function Xh(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var s in t)if(s!=="__source"&&e[s]!==t[s])return!0;return!1}function ta(e){this.props=e}(ta.prototype=new In).isPureReactComponent=!0,ta.prototype.shouldComponentUpdate=function(e,t){return Xh(this.props,e)||Xh(this.state,t)};var Yh=le.__b;le.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Yh&&Yh(e)};var V7=le.__e;le.__e=function(e,t,r){if(e.then){for(var s,o=t;o=o.__;)if((s=o.__c)&&s.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),s.__c(e,t)}V7(e,t,r)};var Jh=le.unmount;function tc(){this.__u=0,this.t=null,this.__b=null}function Yp(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Lo(){this.u=null,this.o=null}le.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Jh&&Jh(e)},(tc.prototype=new In).__c=function(e,t){var r=t.__c,s=this;s.t==null&&(s.t=[]),s.t.push(r);var o=Yp(s.__v),a=!1,c=function(){a||(a=!0,r.__R=null,o?o(u):u())};r.__R=c;var u=function(){if(!--s.__u){if(s.state.__e){var p=s.state.__e;s.__v.__k[0]=function v(b,_,w){return b&&(b.__v=null,b.__k=b.__k&&b.__k.map(function(k){return v(k,_,w)}),b.__c&&b.__c.__P===_&&(b.__e&&w.insertBefore(b.__e,b.__d),b.__c.__e=!0,b.__c.__P=w)),b}(p,p.__c.__P,p.__c.__O)}var h;for(s.setState({__e:s.__b=null});h=s.t.pop();)h.forceUpdate()}},d=t.__h===!0;s.__u++||d||s.setState({__e:s.__b=s.__v.__k[0]}),e.then(c,c)},tc.prototype.componentWillUnmount=function(){this.t=[]},tc.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),s=this.__v.__k[0].__c;this.__v.__k[0]=function a(c,u,d){return c&&(c.__c&&c.__c.__H&&(c.__c.__H.__.forEach(function(p){typeof p.__c=="function"&&p.__c()}),c.__c.__H=null),(c=G7({},c)).__c!=null&&(c.__c.__P===d&&(c.__c.__P=u),c.__c=null),c.__k=c.__k&&c.__k.map(function(p){return a(p,u,d)})),c}(this.__b,r,s.__O=s.__P)}this.__b=null}var o=t.__e&&mc(ki,null,e.fallback);return o&&(o.__h=null),[mc(ki,null,t.__e?null:e.children),o]};var e0=function(e,t,r){if(++r[1]===r[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(r=e.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.u=r=r[2]}};(Lo.prototype=new In).__e=function(e){var t=this,r=Yp(t.__v),s=t.o.get(e);return s[0]++,function(o){var a=function(){t.props.revealOrder?(s.push(o),e0(t,e,s)):o()};r?r(a):a()}},Lo.prototype.render=function(e){this.u=null,this.o=new Map;var t=Yo(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.o.set(t[r],this.u=[1,0,this.u]);return e.children},Lo.prototype.componentDidUpdate=Lo.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,r){e0(e,r,t)})};var Q7=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Z7=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,X7=typeof document<"u",Y7=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};In.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(In.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var t0=le.event;function J7(){}function e9(){return this.cancelBubble}function t9(){return this.defaultPrevented}le.event=function(e){return t0&&(e=t0(e)),e.persist=J7,e.isPropagationStopped=e9,e.isDefaultPrevented=t9,e.nativeEvent=e};var n0={configurable:!0,get:function(){return this.class}},r0=le.vnode;le.vnode=function(e){var t=e.type,r=e.props,s=r;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in s={},r){var c=r[a];X7&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in r&&c==null||(a==="defaultValue"&&"value"in r&&r.value==null?a="value":a==="download"&&c===!0?c="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!Y7(r.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&Z7.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():c===null&&(c=void 0),s[a]=c)}t=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=Yo(r.children).forEach(function(u){u.props.selected=s.value.indexOf(u.props.value)!=-1})),t=="select"&&s.defaultValue!=null&&(s.value=Yo(r.children).forEach(function(u){u.props.selected=s.multiple?s.defaultValue.indexOf(u.props.value)!=-1:s.defaultValue==u.props.value})),e.props=s,r.class!=r.className&&(n0.enumerable="className"in r,r.className!=null&&(s.class=r.className),Object.defineProperty(s,"className",n0))}e.$$typeof=Q7,r0&&r0(e)};var i0=le.__r;le.__r=function(e){i0&&i0(e),e.__c};const n9={light:"outline",dark:"solid"};class r9 extends ta{renderIcon(t){const{icon:r}=t;if(r){if(r.svg)return z("span",{class:"flex",dangerouslySetInnerHTML:{__html:r.svg}});if(r.src)return z("img",{src:r.src})}const s=ea.categories[t.id]||ea.categories.custom,o=this.props.icons=="auto"?n9[this.props.theme]:this.props.icons;return s[o]||s}render(){let t=null;return z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:z("div",{class:"flex relative",children:[this.categories.map((r,s)=>{const o=r.name||$t.categories[r.id],a=!this.props.unfocused&&r.id==this.state.categoryId;return a&&(t=s),z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:c=>c.preventDefault(),onClick:()=>{this.props.onClick({category:r,i:s})},children:this.renderIcon(r)})}),z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Ce.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class i9 extends ta{shouldComponentUpdate(t){for(let r in t)if(r!="children"&&t[r]!=this.props[r])return!0;return!1}render(){return this.props.children}}const Oo={rowsPerRender:10};class s9 extends In{getInitialState(t=this.props){return{skin:kr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=$t.rtl?"rtl":"ltr",this.refs={menu:Gn(),navigation:Gn(),scroll:Gn(),search:Gn(),searchInput:Gn(),skinToneButton:Gn(),skinToneRadio:Gn()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const r in t)this.nextState[r]=t[r];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let r=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(r=!0);delete this.nextState;const s=this.getInitialState();if(r)return this.reset(s);this.setState(s)})}componentWillUnmount(){this.unregister()}async reset(t={}){await $a(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const r of this.observers)t.includes(r)||r.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Ce;this.refs.categories=new Map;const r=Ce.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=r&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=r,this.grid=[],this.grid.setsize=0;const s=(o,a)=>{const c=[];c.__categoryId=a.id,c.__index=o.length,this.grid.push(c);const u=this.grid.length-1,d=u%Oo.rowsPerRender?{}:Gn();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),c};for(let o of t){const a=[];let c=s(a,o);for(let u of o.emojis)c.length==this.getPerLine()&&(c=s(a,o)),this.grid.setsize+=1,c.push(u);this.refs.categories.set(o.id,{root:Gn(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:r,emojiButtonSize:s}=t,o=()=>{const{width:c}=r.getBoundingClientRect();return Math.floor(c/s)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(r),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,r]){const s=this.state.searchResults||this.grid,o=s[t]&&s[t][r];if(o)return gi.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const r=new Map,s=c=>{c!=t.state.categoryId&&t.setState({categoryId:c})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(c=>{for(const d of c){const p=d.target.dataset.id;r.set(p,d.intersectionRatio)}const u=[...r];for(const[d,p]of u)if(p){s(d);break}},o);for(const{root:c}of this.refs.categories.values())a.observe(c.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},r=new IntersectionObserver(s=>{for(const o of s){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Oo.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Oo.rowsPerRender}px`});for(const{rows:s}of this.refs.categories.values())for(const o of s)o.current&&r.observe(o.current);this.observers.push(r)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:r,left:s,right:o,up:a,down:c}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,p]=this.state.pos;const h=(()=>{if(d==0&&p==0&&!t.repeat&&(s||a))return null;if(d==-1)return!t.repeat&&(o||c)&&r.selectionStart==r.value.length?[0,0]:null;if(s||o){let v=u[d];const b=s?-1:1;if(p+=b,!v[p]){if(d+=b,v=u[d],!v)return d=s?0:u.length-1,p=s?0:u[d].length-1,[d,p];p=s?v.length-1:0}return[d,p]}if(a||c){d+=a?-1:1;const v=u[d];return v?(v[p]||(p=v.length-1),[d,p]):(d=a?0:u.length-1,p=a?0:u[d].length-1,[d,p])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:r}){const s=this.state.searchResults||this.grid;if(!s.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let c=0;if(r>=0&&(t=s[r].__categoryId),t&&(c=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),r>=0)if(!r)c=0;else{const u=s[r].__index,d=c+u*this.props.emojiButtonSize,p=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)c=d;else if(p>o.scrollTop+a.height)c=p-a.height;else return}this.ignoreMouse(),o.scrollTop=c}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:r,pos:s}){if(this.props.onEmojiSelect&&(!r&&s&&(r=this.getEmojiByPos(s)),r)){const o=j7(r,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Np.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),kr.set("skin",t)}renderNav(){return z(r9,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),r=this.state.searchResults&&!this.state.searchResults.length;return z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[z("div",{class:"flex flex-middle flex-grow",children:[z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:z(_c,{emoji:t,id:r?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),z("div",{class:`margin-${this.dir[0]}`,children:t||r?z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[z("div",{class:"preview-title ellipsis",children:t?t.name:$t.search_no_results_1}),z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:$t.search_no_results_2})]}):z("div",{class:"preview-placeholder color-c",children:$t.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:r,posinset:s,grid:o}){const a=this.props.emojiButtonSize,c=this.state.tempSkin||this.state.skin,d=(t.skins[c-1]||t.skins[0]).native,p=H7(this.state.pos,r),h=r.concat(t.id).join("");return z(i9,{selected:p,skin:c,size:a,children:z("button",{"aria-label":d,"aria-selected":p||void 0,"aria-posinset":s,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:v=>this.handleEmojiClick({e:v,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(r),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(s-1)%this.props.emojiButtonColors.length]:void 0}}),z(_c,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:c,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return z("div",{children:[z("div",{class:"spacer"}),z("div",{class:"flex flex-middle",children:[z("div",{class:"search relative flex-grow",children:[z("input",{type:"search",ref:this.refs.searchInput,placeholder:$t.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),z("span",{class:"icon loupe flex",children:ea.search.loupe}),this.state.searchResults&&z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:ea.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?z("div",{class:"category",ref:this.refs.search,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:$t.categories.search}),z("div",{children:t.length?t.map((r,s)=>z("div",{class:"flex",children:r.map((o,a)=>this.renderEmojiButton(o,{pos:[s,a],posinset:s*this.props.perLine+a+1,grid:t}))})):z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&z("a",{onClick:this.props.onAddCustomEmoji,children:$t.add_custom})})})]}):null}renderCategories(){const{categories:t}=Ce,r=!!this.state.searchResults,s=this.getPerLine();return z("div",{style:{visibility:r?"hidden":void 0,display:r?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:c}=this.refs.categories.get(o.id);return z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||$t.categories[o.id]}),z("div",{class:"relative",style:{height:c.length*this.props.emojiButtonSize},children:c.map((u,d)=>{const p=u.index-u.index%Oo.rowsPerRender,h=this.state.visibleRows[p],v="current"in u?u:void 0;if(!h&&!v)return null;const b=d*s,_=b+s,w=o.emojis.slice(b,_);return w.length<s&&w.push(...new Array(s-w.length)),z("div",{"data-index":u.index,ref:v,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&w.map((k,S)=>{if(!k)return z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const L=gi.get(k);return this.renderEmojiButton(L,{pos:[u.index,S],posinset:u.posinset+S,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":$t.skins.choose,title:$t.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),r=t?t.name:"";return z("div",{"aria-live":"polite",class:"sr-only",children:r})}renderSkins(){const r=this.refs.skinToneButton.current.getBoundingClientRect(),s=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=s.right-r.right-3:o.left=r.left-s.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=s.bottom-r.top+6:(o.top=r.bottom-s.top+3,o.bottom="auto"),z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":$t.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const c=a+1,u=this.state.skin==c;return z("div",{children:[z("input",{type:"radio",name:"skin-tone",value:c,"aria-label":$t.skins[c],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(c),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(c))}}),z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(c),onMouseEnter:()=>this.handleSkinMouseOver(c),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[z("span",{class:`skin-tone skin-tone-${c}`}),z("span",{class:"margin-small-lr",children:$t.skins[c]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&z("div",{class:"padding-lr",children:this.renderSearch()}),z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),_n(this,"handleClickOutside",r=>{const{element:s}=this.props;r.target!=s&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(r))}),_n(this,"handleBaseClick",r=>{this.state.showSkins&&(r.target.closest(".menu")||(r.preventDefault(),r.stopImmediatePropagation(),this.closeSkins()))}),_n(this,"handleBaseKeydown",r=>{this.state.showSkins&&r.key=="Escape"&&(r.preventDefault(),r.stopImmediatePropagation(),this.closeSkins())}),_n(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),_n(this,"handleSearchInput",async()=>{const r=this.refs.searchInput.current;if(!r)return;const{value:s}=r,o=await gi.search(s),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const c=r.selectionStart==r.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let p of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(p);this.ignoreMouse(),this.setState({searchResults:u,pos:c},a)}),_n(this,"handleSearchKeyDown",r=>{const s=r.currentTarget;switch(r.stopImmediatePropagation(),r.key){case"ArrowLeft":this.navigate({e:r,input:s,left:!0});break;case"ArrowRight":this.navigate({e:r,input:s,right:!0});break;case"ArrowUp":this.navigate({e:r,input:s,up:!0});break;case"ArrowDown":this.navigate({e:r,input:s,down:!0});break;case"Enter":r.preventDefault(),this.handleEmojiClick({e:r,pos:this.state.pos});break;case"Escape":r.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),_n(this,"clearSearch",()=>{const r=this.refs.searchInput.current;r&&(r.value="",r.focus(),this.handleSearchInput())}),_n(this,"handleCategoryClick",({category:r,i:s})=>{this.scrollTo(s==0?{row:-1}:{categoryId:r.id})}),_n(this,"openSkins",r=>{const{currentTarget:s}=r,o=s.getBoundingClientRect();this.setState({showSkins:o},async()=>{await F7(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class au extends q7{async connectedCallback(){const t=Gp(this.props,Zn,this);t.element=this,t.ref=r=>{this.component=r},await $a(t),!this.disconnected&&jp(z(s9,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Ap(Jp)})}}_n(au,"Props",Zn);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",au);var Jp={};Jp=`:host {
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

`;const o9=e=>{let t;const[r,s]=ye(void 0);return $(su,{ref:c=>{t=c},position:"bottom",get button(){return e.children},onOpen:()=>{const c=new au({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native),t?.close()}});s(c)},onClose:()=>{s(void 0)},get children(){return r()}})},a9=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),l9=(e={})=>(()=>{const t=a9();return Qe(t,e,!0,!0),t})(),c9=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),_s=(e={})=>(()=>{const t=c9();return Qe(t,e,!0,!0),t})(),u9=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),f9=(e={})=>(()=>{const t=u9();return Qe(t,e,!0,!0),t})(),d9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],eg=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com"],h9=[...eg,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],p9=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],g9=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},Mi=()=>({id:g9(),width:"medium"}),tg=e=>({...Mi(),columnType:"Following",...e}),ng=e=>({...Mi(),columnType:"Notification",...e}),v9=e=>({...Mi(),columnType:"Relays",...e}),rg=()=>v9({name:"日本語",relayUrls:eg,contentFilter:{filterType:"Regex",regex:"[\\p{scx=Hiragana}\\p{scx=Katakana}]",flag:"u"}}),ig=e=>({...Mi(),columnType:"Posts",...e}),sg=e=>({...Mi(),columnType:"Reactions",...e}),lu=e=>({...Mi(),columnType:"Search",...e}),m9=()=>{const e=[...d9];return window.navigator.language.includes("ja")&&e.push(...h9),e},og=()=>({relayUrls:m9(),columns:[],dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showImage:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),b9=e=>JSON.stringify(e),y9=e=>({...og(),...JSON.parse(e)}),_9=qw(()=>window.localStorage,b9,y9),[Po,bn]=Kw("RabbitConfig",og(),_9),Be=()=>{const e=_=>{bn("relayUrls",w=>wr([...w,_]))},t=_=>{bn("relayUrls",w=>w.filter(k=>k!==_))},r=_=>{bn("mutedPubkeys",w=>wr([...w,_]))},s=_=>{bn("mutedPubkeys",w=>w.filter(k=>k!==_))},o=_=>{bn("mutedKeywords",w=>wr([...w,_]))},a=_=>{bn("mutedKeywords",w=>w.filter(k=>k!==_))},c=_=>{bn("columns",w=>{const k=w.findIndex(S=>S.id===_.id);if(k>=0){const S=[...w];return S.splice(k,1,_),S}return[...w,_]})},u=(_,w)=>{bn("columns",k=>{const S=w-1,L=Math.max(Math.min(S,k.length),0),U=k.findIndex(E=>E.id===_);if(U<0||L===U)return k;console.log(U,L);const M=[...k],[R]=M.splice(U,1);return M.splice(L,0,R),M})},d=_=>{bn("columns",w=>w.filter(k=>k.id!==_))},p=_=>Po.mutedPubkeys.includes(_),h=_=>_.kind===at.Text?Po.mutedKeywords.some(w=>_.content.includes(w)):!1;return{config:()=>Po,setConfig:bn,addRelay:e,removeRelay:t,addMutedPubkey:r,removeMutedPubkey:s,addMutedKeyword:o,removeMutedKeyword:a,saveColumn:c,moveColumn:u,removeColumn:d,isPubkeyMuted:p,shouldMuteEvent:_=>p(_.pubkey)||h(_),initializeColumns:({pubkey:_})=>{if((Po.columns?.length??0)>0)return;const w=[tg({width:"widest",pubkey:_}),ng({pubkey:_}),ig({name:"自分の投稿",pubkey:_}),sg({name:"自分のリアクション",pubkey:_})];navigator.language.includes("ja")&&w.splice(2,0,rg()),bn("columns",()=>[...w])}}},w9=/^[0-9a-fA-f]{64}$/,ps=e=>{const t=typeof e=="string"&&e.length===64&&w9.test(e);return t||console.warn("invalid id is ignored: ",e),t},xn=e=>{let t;return{get rawEvent(){return e},get id(){return e.id},get pubkey(){return e.pubkey},get createdAt(){return e.created_at},get content(){return e.content},get tags(){return e.tags},createdAtAsDate(){return new Date(e.created_at*1e3)},pTags(){return e.tags.filter(([r,s])=>r==="p"&&ps(s))},eTags(){return e.tags.filter(([r,s])=>r==="e"&&ps(s))},taggedEventIds(){return this.eTags().map(([,r])=>r)},lastTaggedEventId(){const r=this.taggedEventIds();if(r.length!==0)return r[r.length-1]},markedEventTags(){if(e.kind!==at.Text)throw new Error("kind should be 1");if(t!=null)return t;const r=e.tags.map((o,a)=>[o,a]).filter(([[o,a]])=>o==="e"&&ps(a)),s=(o,a)=>{if(e.kind===1)return o==="root"||o==="reply"||o==="mention"?o:r.length===1?"reply":a===0?"root":r.length===2||a===r.length-1?"reply":"mention"};return t=r.map(([[,o,a,c],u],d)=>({id:o,relayUrl:a,marker:s(c,d),index:u})),t},replyingToEvent(){return this.markedEventTags().find(({marker:r})=>r==="reply")},rootEvent(){return this.markedEventTags().find(({marker:r})=>r==="root")},mentionedEvents(){return this.markedEventTags().filter(({marker:r})=>r==="mention")},mentionedPubkeys(){return wr(this.pTags().map(([,r])=>r))},mentionedPubkeysWithoutAuthor(){return this.mentionedPubkeys().filter(r=>r!==e.pubkey)},contentWarning(){const r=e.tags.find(([o])=>o==="content-warning");return r==null?{contentWarning:!1}:{contentWarning:!0,reason:(r[1]?.length??0)>0?r[1]:void 0}},containsEventMention(r){const s=e.tags.findIndex(([o,a])=>o==="e"&&a===r);return s<0?!1:this.containsEventMentionIndex(s)},containsEventMentionIndex(r){return r<0||r>=e.tags.length?!1:e.content.includes(`#[${r}]`)}}},$9=()=>{let e,t;const r=new Promise((s,o)=>{e=s,t=o});if(e==null||t==null)throw new Error("PromiseWithCallbacks failed to extract callbacks");return{promise:r,resolve:e,reject:t}},x9=e=>{const t=Fe(e),r=Fe(()=>t().batchSize??100),s=Fe(()=>t().interval??2e3),[o,a]=ye(0),[c,u]=ye([]);let d;const p=()=>{const{executor:k}=t(),S=c();S.length>0&&(u([]),k(S)),d!=null&&clearTimeout(d),d=void 0},h=()=>{const k=o();return a(S=>S+1),k},v=()=>{d==null&&(d=setTimeout(()=>{p()},s()))},b=k=>{c().length<r()?u(S=>[...S,k]):(p(),u([k]))},_=k=>{u(S=>S.filter(L=>L.id!==k))};return{exec:async(k,S)=>{const{promise:L,resolve:U,reject:M}=$9(),R=h();return b({id:R,args:k,resolve:U,reject:M}),v(),S?.addEventListener("abort",()=>{_(R),M(new Error("AbortError"))}),L}}},[k9]=ye(new g8),xa=()=>k9,[C9,s0]=vi({activeSubscriptions:0,activeBatchSubscriptions:0}),ag=()=>({stats:C9,setActiveSubscriptions:r=>s0("activeSubscriptions",r),setActiveBatchSubscriptions:r=>s0("activeBatchSubscriptions",r)}),Er=(e,t)=>r=>{const s=new Promise((o,a)=>{setTimeout(()=>{const c=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new Error(c))},e)});return Promise.race([r,s])};let xc=0;const{setActiveBatchSubscriptions:S9}=ag();setInterval(()=>{S9(xc)},1e3);const E9={events:[],completed:!0},T9=()=>E9,{exec:As}=x9(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,r=new Map,s=new Map,o=new Map,a=new Map,c=new Map;e.forEach(E=>{if(E.args.type==="Profile"){const O=t.get(E.args.pubkey)??[];t.set(E.args.pubkey,[...O,E])}else if(E.args.type==="TextNote"){const O=r.get(E.args.eventId)??[];r.set(E.args.eventId,[...O,E])}else if(E.args.type==="Reactions"){const O=s.get(E.args.mentionedEventId)??[];s.set(E.args.mentionedEventId,[...O,E])}else if(E.args.type==="Reposts"){const O=o.get(E.args.mentionedEventId)??[];o.set(E.args.mentionedEventId,[...O,E])}else if(E.args.type==="ZapReceipts"){const O=a.get(E.args.mentionedEventId)??[];o.set(E.args.mentionedEventId,[...O,E])}else if(E.args.type==="Followings"){const O=c.get(E.args.pubkey)??[];c.set(E.args.pubkey,[...O,E])}});const u=[...t.keys()],d=[...r.keys()],p=[...s.keys()],h=[...o.keys()],v=[...a.keys()],b=[...c.keys()],_=[];if(u.length>0&&_.push({kinds:[at.Metadata],authors:u}),d.length>0&&_.push({kinds:[at.Text],ids:d}),p.length>0&&_.push({kinds:[at.Reaction],"#e":p}),h.length>0&&_.push({kinds:[6],"#e":h}),v.length>0&&_.push({kinds:[9735],"#e":v}),b.length>0&&_.push({kinds:[at.Contacts],authors:b}),_.length===0)return;const w=new Map,k=(E,O)=>{E.forEach(N=>{const q=w.get(N.id)??ye({events:[],completed:!1});w.set(N.id,q);const[ie,G]=q;G(X=>({...X,events:[...X.events,O]})),N.resolve(ie)})},S=()=>{e.forEach(E=>{const O=w.get(E.id);if(O!=null){const N=O[1];N(q=>({...q,completed:!0}))}else E.resolve(T9)})},{config:L,shouldMuteEvent:U}=Be(),R=xa()().sub(L().relayUrls,_,{});xc+=1,R.on("event",E=>{if(E.kind===at.Metadata){const O=t.get(E.pubkey)??[];k(O,E);return}if(!U(E)){if(E.kind===at.Text){const O=r.get(E.id)??[];k(O,E)}else if(E.kind===at.Reaction){const O=xn(E).lastTaggedEventId();if(O!=null){const N=s.get(O)??[];k(N,E)}}else if(E.kind===6){const O=xn(E).lastTaggedEventId();if(O!=null){const N=o.get(O)??[];k(N,E)}}else if(E.kind===at.Zap)xn(E).eTags().forEach(([,N])=>{const q=o.get(N)??[];k(q,E)});else if(E.kind===at.Contacts){const O=c.get(E.pubkey)??[];k(O,E)}}}),R.on("eose",()=>{S(),R.unsub(),xc-=1})}})),lg=e=>e.length===0?null:e.reduce((t,r)=>t.created_at>r.created_at?t:r),Bi=e=>{const t=Si(),r=Fe(e),s=Fe(()=>["useProfile",r()]),o=Ei(s,({queryKey:u,signal:d})=>{const[,p]=u;if(p==null)return Promise.resolve(null);const{pubkey:h}=p;if(h.startsWith("npub1"))return Promise.resolve(null);const v=As({type:"Profile",pubkey:h},d).then(b=>{const _=()=>{const w=lg(b().events);if(w==null)throw new Error(`profile not found: ${h}`);return w};return oa(b).subscribe(()=>{try{t.setQueryData(u,_())}catch(w){console.error("error occurred while updating profile cache: ",w)}}),_()});return Er(15e3,`useProfile: ${h}`)(v)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3});return{profile:Fe(()=>{if(o.data==null)return null;const{content:u}=o.data;if(u==null||u.length===0)return null;try{return JSON.parse(u)}catch(d){return console.warn("failed to parse profile (kind 0): ",d,u),null}}),invalidateProfile:()=>t.invalidateQueries(s()),query:o}},cg=e=>{const t=Fe(e),r=Ei(()=>["useTextNote",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return null;const{eventId:u}=c,d=As({type:"TextNote",eventId:u},a).then(p=>{const h=p().events[0];if(h==null)throw new Error(`event not found: ${u}`);return h});return Er(15e3,`useTextNote: ${u}`)(d)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>r.data??null,query:r}},A9=e=>{const t=Si(),r=Fe(e),s=Fe(()=>["useReactions",r()]),o=Ei(s,({queryKey:p,signal:h})=>{const[,v]=p;if(v==null)return[];const{eventId:b}=v,_=As({type:"Reactions",mentionedEventId:b},h).then(w=>{const k=()=>w().events;return oa(w).subscribe(()=>{t.setQueryData(p,k())}),k()});return Er(15e3,`useReactions: ${b}`)(_)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reactions:a,reactionsGroupedByContent:()=>{const p=new Map;return a().forEach(h=>{const v=p.get(h.content)??[];v.push(h),p.set(h.content,v)}),p},isReactedBy:p=>a().findIndex(h=>h.pubkey===p)!==-1,invalidateReactions:()=>t.invalidateQueries(s()),query:o}},I9=e=>{const t=Si(),r=Fe(e),s=Fe(()=>["useReposts",r()]),o=Ei(s,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return[];const{eventId:v}=h,b=As({type:"Reposts",mentionedEventId:v},p).then(_=>{const w=()=>_().events;return oa(_).subscribe(()=>{t.setQueryData(d,w())}),w()});return Er(15e3,`useReposts: ${v}`)(b)},{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),a=()=>o.data??[];return{reposts:a,isRepostedBy:d=>a().findIndex(p=>p.pubkey===d)!==-1,invalidateReposts:()=>t.invalidateQueries(s()),query:o}},kc=e=>{const t=Si(),r=Fe(e),s=()=>["useFollowings",r()],o=Ei(s,({queryKey:d,signal:p})=>{const[,h]=d;if(h==null)return Promise.resolve(null);const{pubkey:v}=h,b=As({type:"Followings",pubkey:v},p).then(_=>{const w=()=>{const k=lg(_().events);if(k==null)throw new Error(`followings not found: ${v}`);return k};return oa(_).subscribe(()=>{try{t.setQueryData(d,w())}catch(k){console.error("error occurred while updating followings cache: ",k)}}),w()});return Er(15e3,`useFollowings: ${v}`)(b)},{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return xn(o.data).pTags().forEach(h=>{const[,v,b,_]=h,w={pubkey:v,petname:_};b!=null&&b.length>0&&(w.mainRelayUrl=b),d.push(w)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(s()),query:o}},{npubEncode:R9}=Ts,ka=e=>{try{return R9(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Ca=e=>{const{profile:t}=Bi(()=>({pubkey:e.pubkey}));return $($n,{get fallback(){return ka(e.pubkey)},get children(){return[$(Me,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),$(Me,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",Fe(()=>t()?.name)]}})]}})},{decode:L9}=Ts,O9=/(?:#\[(?<idx>\d+)\])/g,P9=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,M9=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent)1[ac-hj-np-z02-9]+))/gi,B9=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,ug=e=>{const t=[...e.matchAll(O9),...e.matchAll(P9),...e.matchAll(M9),...e.matchAll(B9)].sort((a,c)=>a.index-c.index);let r=0;const s=[],o=a=>{if(a!=null&&a>r){const c=e.slice(r,a),u=s[s.length-1];if(u?.type==="PlainText")u.content+=c;else{const d={type:"PlainText",content:c};s.push(d)}r=a}};return t.forEach(a=>{const{index:c}=a;if(!(c<r)){if(a.groups?.url){o(c);const u={type:"URL",content:a.groups?.url};s.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(c),s.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(c);try{const u=L9(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};s.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(c+a[0].length)}}else if(a.groups?.hashtag){o(c);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};s.push(d)}r=c+a[0].length}}),r<e.length&&o(e.length),s},U9=({tagIndex:e,content:t},r)=>{const s=r.tags[e];if(s==null)return null;const o=s[0];if(o==="p"&&ps(s[1]))return{type:"MentionedUser",tagIndex:e,content:t,pubkey:s[1]};if(o==="e"&&ps(s[1])){const a=xn(r).markedEventTags().find(c=>c.index===e);return{type:"MentionedEvent",tagIndex:e,content:t,eventId:s[1],marker:a?.marker}}return null},D9=e=>Math.floor(+e/1e3),Vn=()=>D9(new Date),H9=(e,t)=>new Promise((r,s)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),r()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),s(o)})}),F9=({notifyPubkeys:e,rootEventId:t,mentionEventIds:r,replyEventId:s,contentWarning:o,hashtags:a,urls:c,tags:u})=>{const d=[],p=e?.map(v=>["p",v])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),r?.forEach(v=>d.push(["e",v,"","mention"])),s!=null&&d.push(["e",s,"","reply"]),a?.forEach(v=>h.push(["t",v])),c?.forEach(v=>h.push(["r",v])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...p,...h]},Sa=()=>{const e=xa(),t=async(d,p)=>{const h={...p};if(h.id=bp(h),window.nostr==null)throw new Error("NIP-07 implementation not found");const v=await window.nostr.signEvent(h);return d.map(async b=>{const w=(await e().ensureRelay(b)).publish(v);return H9(w,b)})};return{publishTextNote:async d=>{const{relayUrls:p,pubkey:h,content:v}=d,b=F9(d),_={kind:1,pubkey:h,created_at:Vn(),tags:b,content:v};return t(p,_)},publishReaction:async({relayUrls:d,pubkey:p,eventId:h,content:v,notifyPubkey:b})=>{const _={kind:7,pubkey:p,created_at:Vn(),tags:[["e",h,""],["p",b]],content:v};return t(d,_)},publishRepost:async({relayUrls:d,pubkey:p,eventId:h,notifyPubkey:v})=>{const b={kind:6,pubkey:p,created_at:Vn(),tags:[["e",h,""],["p",v]],content:""};return t(d,b)},updateProfile:async({relayUrls:d,pubkey:p,profile:h,otherProperties:v})=>{const b={...h,...v},_={kind:at.Metadata,pubkey:p,created_at:Vn(),tags:[],content:JSON.stringify(b)};return t(d,_)},updateContacts:async({relayUrls:d,pubkey:p,followingPubkeys:h,content:v})=>{const b=h.map(w=>["p",w]),_={kind:at.Contacts,pubkey:p,created_at:Vn(),tags:b,content:v};return t(d,_)},deleteEvent:async({relayUrls:d,pubkey:p,eventId:h})=>{const v={kind:at.EventDeletion,pubkey:p,created_at:Vn(),tags:[["e",h,""]],content:""};return t(d,v)}}};let nc=!1;const[Mo,j9]=ye(void 0),er=()=>(kn(()=>{if(Mo()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),Mo()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Mo()==null&&!nc&&(nc=!0,window.nostr.getPublicKey().then(r=>{clearInterval(t),j9(r)}).catch(r=>console.error("failed to obtain public key: ",r)).finally(()=>{nc=!1})),e+=1},200)}),Mo),z9=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const r=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!r.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await r.json()}},N9=e=>t=>Promise.allSettled(t.map(r=>e(r))),W9=P("<div>に返信"),q9=P('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),K9=P('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),G9=P('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),V9=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},Q9=e=>{const t=[],r=[],s=[],o=[];return e.forEach(a=>{a.type==="HashTag"?t.push(a.tagName):a.type==="URL"?o.push(a.content):a.type==="Bech32Entity"&&(a.data.type==="npub"?r.push(a.data.data):a.data.type==="note"&&s.push(a.data.data))}),{hashtags:t,pubkeyReferences:r,eventReferences:s,urlReferences:o}},Z9=e=>{const t=[];return e.forEach(r=>{r.type==="Bech32Entity"&&!r.isNIP19?t.push(`nostr:${r.content}`):t.push(r.content)}),t.join("")},fg=e=>{let t,r;const[s,o]=ye(""),[a,c]=ye(!1),[u,d]=ye(""),p=()=>{o(""),d(""),c(!1)},h=()=>{t?.blur(),p(),e.onClose()},{config:v}=Be(),b=er(),_=Sa(),w=()=>e.replyTo&&xn(e.replyTo),k=()=>e.mode??"normal",S=zr({mutationKey:["publishTextNote"],mutationFn:_.publishTextNote.bind(_),onSuccess:()=>{console.log("succeeded to post"),p(),e.onPost?.()},onError:ee=>{console.error("error",ee)}}),L=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},U=zr({mutationKey:["uploadFiles"],mutationFn:ee=>N9(z9)(ee).then(K=>{K.forEach(te=>{te.status==="fulfilled"?(console.log("succeeded to upload",te),o(de=>`${de} ${te.value.imageUrl}`),L()):console.error("failed to upload",te)})}).catch(K=>console.error(K))}),M=Fe(()=>w()?.mentionedPubkeysWithoutAuthor()??[]),R=(ee,K)=>e.replyTo==null?K:wr([e.replyTo.pubkey,ee,...M(),...K]),E=()=>{if(s().length===0||S.isLoading)return;const ee=b();if(ee==null){console.error("pubkey is not available");return}const K=ug(s()),{hashtags:te,pubkeyReferences:de,eventReferences:Te,urlReferences:Re}=Q9(K),re=Z9(K);let De={relayUrls:v().relayUrls,pubkey:ee,content:re,notifyPubkeys:de,mentionEventIds:Te,hashtags:te,urls:Re};w()!=null&&(De={...De,notifyPubkeys:R(ee,de),rootEventId:w()?.rootEvent()?.id??w()?.id,replyEventId:w()?.id}),a()&&(De={...De,contentWarning:u()}),S.mutate(De),h()},O=ee=>{o(ee.currentTarget.value),L()},N=ee=>{ee.preventDefault(),E()},q=ee=>{ee.key==="Enter"&&(ee.ctrlKey||ee.metaKey)?E():ee.key==="Escape"&&(t?.blur(),h())},ie=ee=>{ee.preventDefault();const K=[...ee.currentTarget.files??[]];U.mutate(K),ee.currentTarget.value=""},G=ee=>{if(ee.preventDefault(),U.isLoading)return;const K=[...ee?.dataTransfer?.files??[]];U.mutate(K)},X=ee=>{if(U.isLoading)return;const K=[...ee?.clipboardData?.items??[]],te=[];K.forEach(de=>{if(de.kind==="file"){ee.preventDefault();const Te=de.getAsFile();if(Te==null)return;te.push(Te)}}),te.length!==0&&U.mutate(te)},H=ee=>{ee.preventDefault()},Q=()=>s().trim().length===0||S.isLoading||U.isLoading,he=()=>U.isLoading;return kn(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const ee=G9(),K=ee.firstChild,te=K.firstChild,de=te.nextSibling,Te=de.firstChild,Re=Te.nextSibling,re=Re.nextSibling,De=de.nextSibling;I(ee,$(se,{get when(){return M().length>0},get children(){const Y=W9(),Ye=Y.firstChild;return I(Y,$(Bt,{get each(){return M()},children:Dt=>[$(Ca,{pubkey:Dt})," "]}),Ye),Y}}),K),K.addEventListener("submit",N),I(K,$(se,{get when(){return a()},get children(){const Y=q9();return Y.$$input=Ye=>d(Ye.currentTarget.value),Le(()=>Y.value=u()),Y}}),te),te.addEventListener("paste",X),te.addEventListener("drop",G),te.addEventListener("dragover",H),te.$$keydown=q,te.$$input=O,Rn(Y=>{t=Y,e.textAreaRef?.(Y)},te),I(de,$(se,{get when(){return k()==="reply"},get children(){const Y=K9(),Ye=Y.firstChild;return Ye.$$click=()=>h(),I(Ye,$(_s,{})),Y}}),Te),Te.$$click=()=>c(Y=>!Y),Re.$$click=()=>r?.click(),I(Re,$(l9,{})),I(re,$(f9,{})),De.addEventListener("change",ie);const dn=r;return typeof dn=="function"?Rn(dn,De):r=De,Le(Y=>{const Ye=V9(k()),Dt=!a(),oe=!!a(),Je=k()==="normal",st=k()==="normal",Tt=k()==="reply",Ht=k()==="reply",At=!!he(),Ft=!he(),lt=k()==="normal",It=k()==="normal",gt=k()==="reply",dt=k()==="reply",ve=he(),ot=!!Q(),ze=!Q(),Ke=k()==="normal",ct=k()==="normal",jt=k()==="reply",fe=k()==="reply",me=Q();return Ye!==Y._v$&&St(te,"placeholder",Y._v$=Ye),Dt!==Y._v$2&&Te.classList.toggle("bg-rose-300",Y._v$2=Dt),oe!==Y._v$3&&Te.classList.toggle("bg-rose-400",Y._v$3=oe),Je!==Y._v$4&&Te.classList.toggle("h-8",Y._v$4=Je),st!==Y._v$5&&Te.classList.toggle("w-8",Y._v$5=st),Tt!==Y._v$6&&Te.classList.toggle("h-7",Y._v$6=Tt),Ht!==Y._v$7&&Te.classList.toggle("w-7",Y._v$7=Ht),At!==Y._v$8&&Re.classList.toggle("bg-primary-disabled",Y._v$8=At),Ft!==Y._v$9&&Re.classList.toggle("bg-primary",Y._v$9=Ft),lt!==Y._v$10&&Re.classList.toggle("h-8",Y._v$10=lt),It!==Y._v$11&&Re.classList.toggle("w-8",Y._v$11=It),gt!==Y._v$12&&Re.classList.toggle("h-7",Y._v$12=gt),dt!==Y._v$13&&Re.classList.toggle("w-7",Y._v$13=dt),ve!==Y._v$14&&(Re.disabled=Y._v$14=ve),ot!==Y._v$15&&re.classList.toggle("bg-primary-disabled",Y._v$15=ot),ze!==Y._v$16&&re.classList.toggle("bg-primary",Y._v$16=ze),Ke!==Y._v$17&&re.classList.toggle("h-8",Y._v$17=Ke),ct!==Y._v$18&&re.classList.toggle("w-8",Y._v$18=ct),jt!==Y._v$19&&re.classList.toggle("h-7",Y._v$19=jt),fe!==Y._v$20&&re.classList.toggle("w-7",Y._v$20=fe),me!==Y._v$21&&(re.disabled=Y._v$21=me),Y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Le(()=>te.value=s()),ee})()};it(["input","keydown","click"]);const X9=P("<div>"),Y9=P('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),J9=P("<br>"),ek=P("<span>理由: "),tk=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),nk=e=>{const[t,r]=ye(!1);return $(se,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const s=tk();return s.firstChild,s.$$click=()=>r(!0),I(s,$(se,{get when(){return e.contentWarning.reason!=null},get children(){return[J9(),(()=>{const o=ek();return o.firstChild,I(o,()=>e.contentWarning.reason,null),o})()]}}),null),s})()},get children(){return[(()=>{const s=X9();return I(s,()=>e.children),s})(),$(se,{get when(){return e.contentWarning.contentWarning},get children(){const s=Y9();return s.$$click=()=>r(!1),s}})]}})};it(["click"]);const dg=e=>{const{profile:t}=Bi(()=>({pubkey:e.pubkey}));return $(se,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${ka(e.pubkey)}`},get children(){return["@",Fe(()=>t()?.name??e.pubkey)]}})},rk=P('<a target="_blank" rel="noreferrer noopener">'),cu=e=>{const t=()=>{try{const r=new URL(e.href.toString());return r.protocol==="https:"||r.protocol==="http:"}catch{return!1}};return $(se,{get when(){return t()},get fallback(){return e.href},get children(){const r=rk();return I(r,()=>e.children??e.href),Le(s=>{const o=e.class,a=e.href;return o!==s._v$&&Dw(r,s._v$=o),a!==s._v$2&&St(r,"href",s._v$2=a),s},{_v$:void 0,_v$2:void 0}),r}})},ik=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp)$/i.test(t.pathname)}catch{return!1}},sk=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const r=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(r!=null){const s=new URL(t),o=r[1];return s.host="i.imgur.com",s.pathname=`${o}l.webp`,s.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const r=new URL(t);return r.host="thumb.gyazo.com",r.pathname=`/thumb/640_w${t.pathname}`,r.toString()}return t.toString()}catch{return e}},ok=P('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),ak=P('<canvas class="inline-block max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),lk=P('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),ck=e=>{let t,r;const[s,o]=ye(e.initialHidden),[a,c]=ye(!0),u=()=>{c(!0)};return $(se,{get when(){return!s()},get fallback(){return(()=>{const d=lk();return d.$$click=()=>o(!1),d})()},get children(){return $(cu,{class:"my-2 block",get href(){return e.url},get children(){return[(()=>{const d=ok(),p=t;return typeof p=="function"?Rn(p,d):t=d,Le(h=>{const v=!!a(),b=!a(),_=a()?sk(e.url):void 0,w=e.url;return v!==h._v$&&d.classList.toggle("inline-block",h._v$=v),b!==h._v$2&&d.classList.toggle("hidden",h._v$2=b),_!==h._v$3&&St(d,"src",h._v$3=_),w!==h._v$4&&St(d,"alt",h._v$4=w),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})(),(()=>{const d=ak();d.$$click=h=>{h.preventDefault(),u()};const p=r;return typeof p=="function"?Rn(p,d):r=d,Le(h=>{const v=!!a(),b=!!a(),_=!a(),w=!a();return v!==h._v$5&&d.classList.toggle("w-0",h._v$5=v),b!==h._v$6&&d.classList.toggle("h-0",h._v$6=b),_!==h._v$7&&d.classList.toggle("w-auto",h._v$7=_),w!==h._v$8&&d.classList.toggle("h-auto",h._v$8=w),h},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0}),d})()]}})}})};it(["click"]);const uk=P('<div class="my-1 rounded border p-1">'),fk=e=>$(se,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return $(nu,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=uk();return I(t,$(ws,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1})),t}}),[dk,fi]=ye({type:"Closed"}),Tr=()=>({modalState:dk,setModalState:fi,showProfile:a=>{fi({type:"Profile",pubkey:a})},showProfileEdit:()=>{fi({type:"ProfileEdit"})},showAddColumn:()=>{fi({type:"AddColumn"})},showAbout:()=>{fi({type:"About"})},closeModal:()=>{fi({type:"Closed"})}}),hk=P('<button class="inline text-blue-500 underline">'),rc=e=>{const{showProfile:t}=Tr(),r=()=>{t(e.pubkey)};return(()=>{const s=hk();return s.$$click=r,I(s,$(dg,{get pubkey(){return e.pubkey}})),s})()};it(["click"]);const pk=P("<span>"),gk=e=>(()=>{const t=pk();return I(t,()=>e.plainText.content),t})(),[uu,vk]=ye({}),hg=e=>{uu()[e]==null&&vk(t=>({...t,[e]:new MessageChannel}))},mk=e=>{const t=()=>uu()[e().id],r=(o,a)=>{const c={requestId:o,request:a};t().port1.postMessage(c)},s=(o,a=1e3)=>new Promise((c,u)=>{let d;const p=h=>{const v=h.data;v.requestId===o&&(t().port1.removeEventListener("message",p),v.ok?c(v.response):u(v.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",p),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",p,!1),t().port1.start()});return kn(()=>{const{id:o}=e();hg(o)}),async o=>{const a=Math.random().toString(),c=s(a);return r(a,o),c}},bk=e=>{const t=Fe(e),r=()=>uu()[t().id];kn(()=>{const{id:s}=t();hg(s);const o=r().port2,a=c=>{const{requestId:u,request:d}=c.data,p=t().handler(d);(p instanceof Promise?p:Promise.resolve(p)).then(v=>{const b={requestId:u,ok:!0,response:v};o.postMessage(b)}).catch(v=>{const b={requestId:u,ok:!1,error:v};o.postMessage(b)})};o.addEventListener("message",a),o.start(),qr(()=>{o.removeEventListener("message",a)})})},Is=()=>mk(()=>({id:"CommandChannel"})),Cc=e=>{bk(()=>({id:"CommandChannel",handler:t=>{const{commandType:r,handler:s}=e();t.command===r&&s(t)}}))},o0=P('<div class="my-1 rounded border p-1">'),yk=P('<span class="text-blue-500 underline">'),_k=P('<button class="text-blue-500 underline">'),wk=e=>{const{config:t,saveColumn:r}=Be(),s=Is(),o=()=>xn(e.event),a=c=>{r(lu({query:c})),s({command:"moveToLastColumn"}).catch(u=>console.error(u))};return $(Bt,{get each(){return ug(e.event.content)},children:c=>{if(c.type==="PlainText")return $(gk,{plainText:c});if(c.type==="TagReference"){const u=U9(c,e.event);if(u==null)return null;if(u.type==="MentionedUser")return $(rc,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?$(fk,{mentionedEvent:u}):$(nu,{get eventId(){return u.eventId}})}return c.type==="Bech32Entity"?c.data.type==="note"&&e.embedding?(()=>{const u=o0();return I(u,$(ws,{get eventId(){return c.data.data},actions:!1,embedding:!1})),u})():c.data.type==="nevent"&&e.embedding?(()=>{const u=o0();return I(u,$(ws,{get eventId(){return c.data.data.id},actions:!1,embedding:!1})),u})():c.data.type==="npub"?$(rc,{get pubkey(){return c.data.data}}):c.data.type==="nprofile"?$(rc,{get pubkey(){return c.data.data.pubkey}}):(()=>{const u=yk();return I(u,()=>c.content),u})():c.type==="HashTag"?(()=>{const u=_k();return u.$$click=()=>a(c.content),I(u,()=>c.content),u})():c.type==="URL"?ik(c.content)?$(ck,{get url(){return c.content},get initialHidden(){return!t().showImage||o().contentWarning().contentWarning||!e.embedding}}):$(cu,{class:"text-blue-500 underline",get href(){return c.content}}):(console.error("Not all ParsedTextNoteNodes are covered",c),null)}})};it(["click"]);const pg=Hw(),$k=()=>Fw(pg),xk=()=>{const[e,t]=vi({});return{timelineState:e,setTimeline:r=>t("content",r),clearTimeline:()=>t("content",void 0)}},gg=e=>{const[t,r]=ye(new Date);return _r(()=>{const s=setInterval(()=>{r(new Date)},e().interval);qr(()=>clearInterval(s))}),t},kk=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},a0=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,Ck=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleDateString()}},Sk=e=>{switch(e.kind){case"today":return a0(e.value);case"yesterday":return`昨日 ${a0(e.value)}`;case"abs":default:return e.value.toLocaleString()}},Ek=(e,t)=>Math.round(Number(t)-Number(e))/1e3,Tk=(e,t)=>{const r=Ek(e,t);return r<10?{kind:"now"}:r<60?{kind:"seconds",value:Math.round(r)}:r<3600?{kind:"minutes",value:Math.round(r/60)}:r<86400?{kind:"hours",value:Math.round(r/3600)}:r<604800?{kind:"days",value:Math.round(r/86400)}:{kind:"abs",value:e}},l0=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),Ak=e=>new Date(+e-24*60*60*1e3),vg=(e,t,r)=>l0(e,t)?r({kind:"today",value:e}):l0(e,Ak(t))?r({kind:"yesterday",value:e}):r({kind:"abs",value:e}),Ik=(e,t=new Date)=>vg(e,t,Ck),Rk=(e,t=new Date)=>vg(e,t,Sk),c0=(e,t=new Date,r=kk)=>r(Tk(e,t)),u0=gg(()=>({interval:7e3})),f0=gg(()=>({interval:60*1e3})),mg=()=>{const{config:e}=Be();return t=>{switch(e().dateFormat){case"absolute-long":return Ik(t,f0());case"absolute-short":return Rk(t,f0());case"relative":return c0(t,u0());default:return c0(t,u0())}}},Xt=e=>t=>e.some(r=>r==null)?null:t(e),Lk=P('<div class="flex gap-2 pt-1">'),Ok=P('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),Pk=P('<span class="ml-1 text-sm">'),Mk=P('<button class="flex items-center rounded border px-1" type="button">'),Bk=P('<span class="text-xs">'),Uk=P('<span class="text-red-500">削除'),Dk=P('<img alt="icon" class="h-full w-full rounded object-cover">'),Hk=P('<div class="author-name truncate pr-1 font-bold hover:underline">'),Fk=P('<div class="text-xs">への返信'),jk=P('<div class="content whitespace-pre-wrap break-all">'),zk=P('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),d0=P('<div class="text-sm text-zinc-400">'),Nk=P('<span class="inline-block h-4 w-4">'),Wk=P('<div class="shrink-0">'),qk=P('<span class="inline-block h-4 w-4 text-zinc-400">'),Kk=P('<div class="actions flex w-48 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),Gk=P('<div class="nostr-textnote flex flex-col"><div class="flex w-full gap-1"><button class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></button><div class="created-at shrink-0"><a type="button" class="hover:underline"></a></div></div><div class="overflow-hidden">'),Vk=P('<div class="mt-1 rounded border p-1">'),Qk=P('<button class="pr-1 text-blue-500 hover:underline">'),{noteEncode:h0}=Ts,Zk=e=>{const{config:t}=Be(),r=er();return(()=>{const s=Lk();return I(s,$(Bt,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const c=a.findIndex(u=>u.pubkey===r())>=0;return(()=>{const u=Mk();return u.$$click=()=>e.onReaction(o),u.classList.toggle("text-zinc-400",!c),u.classList.toggle("bg-rose-50",!!c),u.classList.toggle("border-rose-200",!!c),u.classList.toggle("text-rose-400",!!c),I(u,$(se,{when:o==="+",get fallback(){return(()=>{const d=Bk();return I(d,o),d})()},get children(){const d=Ok();return I(d,$(iu,{})),d}}),null),I(u,$(se,{get when(){return!t().hideCount},get children(){const d=Pk();return I(d,()=>a.length),d}}),null),u})()}})),s})()},fu=e=>{let t;const{config:r}=Be(),s=mg(),o=er(),{showProfile:a}=Tr(),c=$k(),[u,d]=ye(!1),[p,h]=ye(!1),[v,b]=ye(!1),_=()=>b(!1),[w,k]=ye(!1),[S,L]=ye(!1),U=Fe(()=>xn(e.event)),M=()=>e.embedding??!0,R=()=>e.actions??!0,{profile:E}=Bi(()=>({pubkey:e.event.pubkey})),{reactions:O,reactionsGroupedByContent:N,isReactedBy:q,invalidateReactions:ie,query:G}=A9(()=>({eventId:e.event.id})),{reposts:X,isRepostedBy:H,invalidateReposts:Q,query:he}=I9(()=>({eventId:e.event.id})),ee=Sa(),K=zr({mutationKey:["publishReaction",U().id],mutationFn:ee.publishReaction.bind(ee),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:oe=>{console.error("failed to publish reaction: ",oe)},onSettled:()=>{ie().then(()=>G.refetch()).catch(oe=>console.error("failed to refetch reactions",oe))}}),te=zr({mutationKey:["publishRepost",U().id],mutationFn:ee.publishRepost.bind(ee),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:oe=>{console.error("failed to publish repost: ",oe)},onSettled:()=>{Q().then(()=>he.refetch()).catch(oe=>console.error("failed to refetch reposts",oe))}}),de=zr({mutationKey:["deleteEvent",U().id],mutationFn:(...oe)=>ee.deleteEvent(...oe).then(Je=>Promise.allSettled(Je.map(Er(1e4)))),onSuccess:oe=>{const Je=oe.filter(Tt=>Tt.status==="fulfilled").length,st=oe.length-Je;Je===oe.length?window.alert("削除しました（画面の反映にはリロード）"):Je>0?window.alert(`${st}個のリレーで削除に失敗しました`):window.alert("すべてのリレーで削除に失敗しました")},onError:oe=>{console.error("failed to delete",oe)}}),Te=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(h0(e.event.id)).catch(oe=>window.alert(oe))}},{content:()=>"JSONとしてコピー",onSelect:()=>{navigator.clipboard.writeText(JSON.stringify(e.event)).catch(oe=>window.alert(oe))}},{when:()=>U().pubkey===o(),content:()=>Uk(),onSelect:()=>{const oe=o();oe!=null&&window.confirm("本当に削除しますか？")&&de.mutate({relayUrls:r().relayUrls,pubkey:oe,eventId:U().id})}}],Re=Fe(()=>{const oe=o();return oe!=null&&q(oe)||u()}),re=Fe(()=>{const oe=o();return oe!=null&&H(oe)||p()}),De=()=>{const oe=U().replyingToEvent();if(M()&&oe!=null&&!U().containsEventMentionIndex(oe.index))return oe.id},dn=()=>s(U().createdAtAsDate()),Y=oe=>{oe.stopPropagation(),!re()&&Xt([o(),e.event.id])(([Je,st])=>{te.mutate({relayUrls:r().relayUrls,pubkey:Je,eventId:st,notifyPubkey:e.event.pubkey}),h(!0)})},Ye=oe=>{Re()||Xt([o(),e.event.id])(([Je,st])=>{K.mutate({relayUrls:r().relayUrls,pubkey:Je,content:oe??"+",eventId:st,notifyPubkey:e.event.pubkey}),d(!0)})},Dt=oe=>{oe.stopPropagation(),Ye()};return kn(()=>{t!=null&&L(t.scrollHeight>t.clientHeight)}),(()=>{const oe=Gk(),Je=oe.firstChild,st=Je.firstChild,Tt=st.nextSibling,Ht=Tt.firstChild,At=Ht.firstChild,Ft=At.firstChild,lt=At.nextSibling,It=lt.firstChild,gt=Ht.nextSibling;st.$$click=ve=>{ve.stopPropagation(),a(U().pubkey)},I(st,$(se,{get when(){return E()?.picture},get children(){const ve=Dk();return Le(()=>St(ve,"src",E()?.picture)),ve}})),At.$$click=ve=>{ve.stopPropagation(),a(U().pubkey)},I(At,$(se,{get when(){return(E()?.display_name?.length??0)>0},get children(){const ve=Hk();return I(ve,()=>E()?.display_name),ve}}),Ft),I(Ft,$(se,{get when(){return E()?.name!=null},get fallback(){return`@${ka(U().pubkey)}`},get children(){return["@",Fe(()=>E()?.name)]}})),It.$$click=ve=>{ve.preventDefault(),c?.setTimeline({type:"Replies",event:e.event})},I(It,dn);const dt=t;return typeof dt=="function"?Rn(dt,gt):t=gt,I(gt,$(se,{get when(){return De()},keyed:!0,children:ve=>(()=>{const ot=Vk();return I(ot,$(ws,{eventId:ve,actions:!1,embedding:!1})),ot})()}),null),I(gt,$(se,{get when(){return U().mentionedPubkeys().length>0},get children(){const ve=Fk(),ot=ve.firstChild;return I(ve,$(Bt,{get each(){return U().mentionedPubkeys()},children:ze=>(()=>{const Ke=Qk();return Ke.$$click=ct=>{ct.stopPropagation(),a(ze)},I(Ke,$(dg,{pubkey:ze})),Ke})()}),ot),ve}}),null),I(gt,$(nk,{get contentWarning(){return U().contentWarning()},get children(){const ve=jk();return I(ve,$(wk,{get event(){return e.event},get embedding(){return M()}})),ve}}),null),I(Tt,$(se,{get when(){return S()},get children(){const ve=zk();return ve.$$click=ot=>{ot.stopPropagation(),k(ze=>!ze)},I(ve,$(se,{get when(){return!w()},fallback:"隠す",children:"続きを読む"})),ve}}),null),I(Tt,$(se,{get when(){return R()},get children(){return[$(se,{get when(){return Fe(()=>!!r().showEmojiReaction)()&&O().length>0},get children(){return $(Zk,{get reactionsGroupedByContent(){return N()},onReaction:Ye})}}),(()=>{const ve=Kk(),ot=ve.firstChild,ze=ot.nextSibling,Ke=ze.firstChild,ct=ze.nextSibling,jt=ct.firstChild,fe=ct.nextSibling;return ot.$$click=me=>{me.stopPropagation(),b(yt=>!yt)},I(ot,$(f7,{})),Ke.$$click=Y,I(Ke,$(Cp,{})),I(ze,$(se,{get when(){return Fe(()=>!r().hideCount)()&&X().length>0},get children(){const me=d0();return I(me,()=>X().length),me}}),null),jt.$$click=Dt,I(jt,$(se,{get when(){return Re()},get fallback(){return $(ru,{})},get children(){return $(iu,{})}})),I(ct,$(se,{get when(){return Fe(()=>!r().hideCount&&!r().showEmojiReaction)()&&O().length>0},get children(){const me=d0();return I(me,()=>O().length),me}}),null),I(ve,$(se,{get when(){return r().useEmojiReaction},get children(){const me=Wk();return I(me,$(o9,{onEmojiSelect:yt=>Ye(yt),get children(){const yt=Nk();return I(yt,$(Ep,{})),yt}})),me}}),fe),I(fe,$(Tp,{menu:Te,get children(){const me=qk();return I(me,$(Sp,{})),me}})),Le(me=>{const yt=!re(),zt=!!(re()||te.isLoading),Rt=te.isLoading,Jt=!Re(),en=!!(Re()||K.isLoading),hn=K.isLoading;return yt!==me._v$&&ze.classList.toggle("text-zinc-400",me._v$=yt),zt!==me._v$2&&ze.classList.toggle("text-green-400",me._v$2=zt),Rt!==me._v$3&&(Ke.disabled=me._v$3=Rt),Jt!==me._v$4&&ct.classList.toggle("text-zinc-400",me._v$4=Jt),en!==me._v$5&&ct.classList.toggle("text-rose-400",me._v$5=en),hn!==me._v$6&&(jt.disabled=me._v$6=hn),me},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),ve})()]}}),null),I(oe,$(se,{get when(){return v()},get children(){return $(fg,{mode:"reply",get replyTo(){return e.event},onClose:_,onPost:_})}}),null),Le(ve=>{const ot=`nostr:${h0(U().id)}`,ze=!w();return ot!==ve._v$7&&St(It,"href",ve._v$7=ot),ze!==ve._v$8&&gt.classList.toggle("max-h-screen",ve._v$8=ze),ve},{_v$7:void 0,_v$8:void 0}),oe})()};it(["click"]);const Xk=P("<div>未対応のイベント種別（<!>）"),Yk=P('<div class="truncate">読み込み中 '),ws=e=>{const{shouldMuteEvent:t}=Be(),{event:r,query:s}=cg(()=>Xt([e.eventId])(([a])=>({eventId:a}))),o=()=>{const a=r();return a!=null&&t(a)};return $($n,{fallback:"投稿が見つかりません",get children(){return[$(Me,{get when(){return o()},children:null}),$(Me,{get when(){return r()},keyed:!0,children:a=>$(se,{get when(){return a.kind===at.Text},get fallback(){return(()=>{const c=Xk(),u=c.firstChild,d=u.nextSibling;return d.nextSibling,I(c,()=>a.kind,d),c})()},get children(){return $(fu,jw({event:a},e))}})}),$(Me,{get when(){return s.isLoading&&e.eventId},keyed:!0,children:a=>(()=>{const c=Yk();return c.firstChild,I(c,$(nu,{eventId:a}),null),c})()})]}})},Jk=P('<div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button> がリポスト</div><div>'),eC=P('<div class="pt-1">'),bg=e=>{const{showProfile:t}=Tr(),r=mg(),s=()=>e.event.tags.find(([a])=>a==="e")?.[1],o=Fe(()=>xn(e.event));return $(tu,{get children(){return[(()=>{const a=Jk(),c=a.firstChild,u=c.nextSibling,d=u.firstChild,p=u.nextSibling;return I(c,$(Cp,{})),d.$$click=()=>t(e.event.pubkey),I(d,$(Ca,{get pubkey(){return e.event.pubkey}})),I(p,()=>r(o().createdAtAsDate())),a})(),(()=>{const a=eC();return I(a,$(ws,{get eventId(){return s()}})),a})()]}})};it(["click"]);const yg=e=>{const{shouldMuteEvent:t}=Be();return $(se,{get when(){return!t(e.event)},get children(){return $(tu,{get children(){return $(fu,e)}})}})},tC=P("<div>未対応のイベント種別（<!>）"),Ui=e=>$(Bt,{get each(){return e.events},children:t=>$($n,{get fallback(){return(()=>{const r=tC(),s=r.firstChild,o=s.nextSibling;return o.nextSibling,I(r,()=>t.kind,o),r})()},get children(){return[$(Me,{get when(){return t.kind===at.Text},get children(){return $(yg,{event:t})}}),$(Me,{get when(){return t.kind===6},get children(){return $(bg,{event:t})}})]}})});var nC=ua;function rC(){this.__data__=new nC,this.size=0}var iC=rC;function sC(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var oC=sC;function aC(e){return this.__data__.get(e)}var lC=aC;function cC(e){return this.__data__.has(e)}var uC=cC,fC=ua,dC=Mc,hC=Bc,pC=200;function gC(e,t){var r=this.__data__;if(r instanceof fC){var s=r.__data__;if(!dC||s.length<pC-1)return s.push([e,t]),this.size=++r.size,this;r=this.__data__=new hC(s)}return r.set(e,t),this.size=r.size,this}var vC=gC,mC=ua,bC=iC,yC=oC,_C=lC,wC=uC,$C=vC;function Di(e){var t=this.__data__=new mC(e);this.size=t.size}Di.prototype.clear=bC;Di.prototype.delete=yC;Di.prototype.get=_C;Di.prototype.has=wC;Di.prototype.set=$C;var du=Di;function xC(e,t){for(var r=-1,s=e==null?0:e.length;++r<s;)if(t(e[r],r,e))return!0;return!1}var kC=xC,CC=h1,SC=kC,EC=p1,TC=1,AC=2;function IC(e,t,r,s,o,a){var c=r&TC,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var p=a.get(e),h=a.get(t);if(p&&h)return p==t&&h==e;var v=-1,b=!0,_=r&AC?new CC:void 0;for(a.set(e,t),a.set(t,e);++v<u;){var w=e[v],k=t[v];if(s)var S=c?s(k,w,v,t,e,a):s(w,k,v,e,t,a);if(S!==void 0){if(S)continue;b=!1;break}if(_){if(!SC(t,function(L,U){if(!EC(_,U)&&(w===L||o(w,L,r,s,a)))return _.push(U)})){b=!1;break}}else if(!(w===k||o(w,k,r,s,a))){b=!1;break}}return a.delete(e),a.delete(t),b}var _g=IC,RC=Cn,LC=RC.Uint8Array,wg=LC;function OC(e){var t=-1,r=Array(e.size);return e.forEach(function(s,o){r[++t]=[o,s]}),r}var PC=OC,p0=Ti,g0=wg,MC=Pc,BC=_g,UC=PC,DC=Uc,HC=1,FC=2,jC="[object Boolean]",zC="[object Date]",NC="[object Error]",WC="[object Map]",qC="[object Number]",KC="[object RegExp]",GC="[object Set]",VC="[object String]",QC="[object Symbol]",ZC="[object ArrayBuffer]",XC="[object DataView]",v0=p0?p0.prototype:void 0,ic=v0?v0.valueOf:void 0;function YC(e,t,r,s,o,a,c){switch(r){case XC:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ZC:return!(e.byteLength!=t.byteLength||!a(new g0(e),new g0(t)));case jC:case zC:case qC:return MC(+e,+t);case NC:return e.name==t.name&&e.message==t.message;case KC:case VC:return e==t+"";case WC:var u=UC;case GC:var d=s&HC;if(u||(u=DC),e.size!=t.size&&!d)return!1;var p=c.get(e);if(p)return p==t;s|=FC,c.set(e,t);var h=BC(u(e),u(t),s,o,a,c);return c.delete(e),h;case QC:if(ic)return ic.call(e)==ic.call(t)}return!1}var JC=YC;function eS(e,t){for(var r=-1,s=t.length,o=e.length;++r<s;)e[o+r]=t[r];return e}var hu=eS,tS=Array.isArray,Un=tS,nS=hu,rS=Un;function iS(e,t,r){var s=t(e);return rS(e)?s:nS(s,r(e))}var $g=iS;function sS(e,t){for(var r=-1,s=e==null?0:e.length,o=0,a=[];++r<s;){var c=e[r];t(c,r,e)&&(a[o++]=c)}return a}var oS=sS;function aS(){return[]}var xg=aS,lS=oS,cS=xg,uS=Object.prototype,fS=uS.propertyIsEnumerable,m0=Object.getOwnPropertySymbols,dS=m0?function(e){return e==null?[]:(e=Object(e),lS(m0(e),function(t){return fS.call(e,t)}))}:cS,pu=dS;function hS(e,t){for(var r=-1,s=Array(e);++r<e;)s[r]=t(r);return s}var pS=hS;function gS(e){return e!=null&&typeof e=="object"}var Ar=gS,vS=Ai,mS=Ar,bS="[object Arguments]";function yS(e){return mS(e)&&vS(e)==bS}var _S=yS,b0=_S,wS=Ar,kg=Object.prototype,$S=kg.hasOwnProperty,xS=kg.propertyIsEnumerable,kS=b0(function(){return arguments}())?b0:function(e){return wS(e)&&$S.call(e,"callee")&&!xS.call(e,"callee")},gu=kS,na={exports:{}};function CS(){return!1}var SS=CS;na.exports;(function(e,t){var r=Cn,s=SS,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,c=a&&a.exports===o,u=c?r.Buffer:void 0,d=u?u.isBuffer:void 0,p=d||s;e.exports=p})(na,na.exports);var vu=na.exports,ES=9007199254740991,TS=/^(?:0|[1-9]\d*)$/;function AS(e,t){var r=typeof e;return t=t??ES,!!t&&(r=="number"||r!="symbol"&&TS.test(e))&&e>-1&&e%1==0&&e<t}var mu=AS,IS=9007199254740991;function RS(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=IS}var bu=RS,LS=Ai,OS=bu,PS=Ar,MS="[object Arguments]",BS="[object Array]",US="[object Boolean]",DS="[object Date]",HS="[object Error]",FS="[object Function]",jS="[object Map]",zS="[object Number]",NS="[object Object]",WS="[object RegExp]",qS="[object Set]",KS="[object String]",GS="[object WeakMap]",VS="[object ArrayBuffer]",QS="[object DataView]",ZS="[object Float32Array]",XS="[object Float64Array]",YS="[object Int8Array]",JS="[object Int16Array]",eE="[object Int32Array]",tE="[object Uint8Array]",nE="[object Uint8ClampedArray]",rE="[object Uint16Array]",iE="[object Uint32Array]",Ve={};Ve[ZS]=Ve[XS]=Ve[YS]=Ve[JS]=Ve[eE]=Ve[tE]=Ve[nE]=Ve[rE]=Ve[iE]=!0;Ve[MS]=Ve[BS]=Ve[VS]=Ve[US]=Ve[QS]=Ve[DS]=Ve[HS]=Ve[FS]=Ve[jS]=Ve[zS]=Ve[NS]=Ve[WS]=Ve[qS]=Ve[KS]=Ve[GS]=!1;function sE(e){return PS(e)&&OS(e.length)&&!!Ve[LS(e)]}var oE=sE;function aE(e){return function(t){return e(t)}}var yu=aE,ra={exports:{}};ra.exports;(function(e,t){var r=c1,s=t&&!t.nodeType&&t,o=s&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===s,c=a&&r.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||c&&c.binding&&c.binding("util")}catch{}}();e.exports=u})(ra,ra.exports);var _u=ra.exports,lE=oE,cE=yu,y0=_u,_0=y0&&y0.isTypedArray,uE=_0?cE(_0):lE,Cg=uE,fE=pS,dE=gu,hE=Un,pE=vu,gE=mu,vE=Cg,mE=Object.prototype,bE=mE.hasOwnProperty;function yE(e,t){var r=hE(e),s=!r&&dE(e),o=!r&&!s&&pE(e),a=!r&&!s&&!o&&vE(e),c=r||s||o||a,u=c?fE(e.length,String):[],d=u.length;for(var p in e)(t||bE.call(e,p))&&!(c&&(p=="length"||o&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||gE(p,d)))&&u.push(p);return u}var Sg=yE,_E=Object.prototype;function wE(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||_E;return e===r}var wu=wE;function $E(e,t){return function(r){return e(t(r))}}var Eg=$E,xE=Eg,kE=xE(Object.keys,Object),CE=kE,SE=wu,EE=CE,TE=Object.prototype,AE=TE.hasOwnProperty;function IE(e){if(!SE(e))return EE(e);var t=[];for(var r in Object(e))AE.call(e,r)&&r!="constructor"&&t.push(r);return t}var RE=IE,LE=f1,OE=bu;function PE(e){return e!=null&&OE(e.length)&&!LE(e)}var Tg=PE,ME=Sg,BE=RE,UE=Tg;function DE(e){return UE(e)?ME(e):BE(e)}var Ea=DE,HE=$g,FE=pu,jE=Ea;function zE(e){return HE(e,jE,FE)}var Ag=zE,w0=Ag,NE=1,WE=Object.prototype,qE=WE.hasOwnProperty;function KE(e,t,r,s,o,a){var c=r&NE,u=w0(e),d=u.length,p=w0(t),h=p.length;if(d!=h&&!c)return!1;for(var v=d;v--;){var b=u[v];if(!(c?b in t:qE.call(t,b)))return!1}var _=a.get(e),w=a.get(t);if(_&&w)return _==t&&w==e;var k=!0;a.set(e,t),a.set(t,e);for(var S=c;++v<d;){b=u[v];var L=e[b],U=t[b];if(s)var M=c?s(U,L,b,t,e,a):s(L,U,b,e,t,a);if(!(M===void 0?L===U||o(L,U,r,s,a):M)){k=!1;break}S||(S=b=="constructor")}if(k&&!S){var R=e.constructor,E=t.constructor;R!=E&&"constructor"in e&&"constructor"in t&&!(typeof R=="function"&&R instanceof R&&typeof E=="function"&&E instanceof E)&&(k=!1)}return a.delete(e),a.delete(t),k}var GE=KE,VE=Kr,QE=Cn,ZE=VE(QE,"DataView"),XE=ZE,YE=Kr,JE=Cn,eT=YE(JE,"Promise"),tT=eT,nT=Kr,rT=Cn,iT=nT(rT,"WeakMap"),sT=iT,Sc=XE,Ec=Mc,Tc=tT,Ac=g1,Ic=sT,Ig=Ai,Hi=d1,$0="[object Map]",oT="[object Object]",x0="[object Promise]",k0="[object Set]",C0="[object WeakMap]",S0="[object DataView]",aT=Hi(Sc),lT=Hi(Ec),cT=Hi(Tc),uT=Hi(Ac),fT=Hi(Ic),Hr=Ig;(Sc&&Hr(new Sc(new ArrayBuffer(1)))!=S0||Ec&&Hr(new Ec)!=$0||Tc&&Hr(Tc.resolve())!=x0||Ac&&Hr(new Ac)!=k0||Ic&&Hr(new Ic)!=C0)&&(Hr=function(e){var t=Ig(e),r=t==oT?e.constructor:void 0,s=r?Hi(r):"";if(s)switch(s){case aT:return S0;case lT:return $0;case cT:return x0;case uT:return k0;case fT:return C0}return t});var Ta=Hr,sc=du,dT=_g,hT=JC,pT=GE,E0=Ta,T0=Un,A0=vu,gT=Cg,vT=1,I0="[object Arguments]",R0="[object Array]",Bo="[object Object]",mT=Object.prototype,L0=mT.hasOwnProperty;function bT(e,t,r,s,o,a){var c=T0(e),u=T0(t),d=c?R0:E0(e),p=u?R0:E0(t);d=d==I0?Bo:d,p=p==I0?Bo:p;var h=d==Bo,v=p==Bo,b=d==p;if(b&&A0(e)){if(!A0(t))return!1;c=!0,h=!1}if(b&&!h)return a||(a=new sc),c||gT(e)?dT(e,t,r,s,o,a):hT(e,t,d,r,s,o,a);if(!(r&vT)){var _=h&&L0.call(e,"__wrapped__"),w=v&&L0.call(t,"__wrapped__");if(_||w){var k=_?e.value():e,S=w?t.value():t;return a||(a=new sc),o(k,S,r,s,a)}}return b?(a||(a=new sc),pT(e,t,r,s,o,a)):!1}var yT=bT,_T=yT,O0=Ar;function Rg(e,t,r,s,o){return e===t?!0:e==null||t==null||!O0(e)&&!O0(t)?e!==e&&t!==t:_T(e,t,r,s,Rg,o)}var Lg=Rg,wT=du,$T=Lg,xT=1,kT=2;function CT(e,t,r,s){var o=r.length,a=o,c=!s;if(e==null)return!a;for(e=Object(e);o--;){var u=r[o];if(c&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=r[o];var d=u[0],p=e[d],h=u[1];if(c&&u[2]){if(p===void 0&&!(d in e))return!1}else{var v=new wT;if(s)var b=s(p,h,d,e,t,v);if(!(b===void 0?$T(h,p,xT|kT,s,v):b))return!1}}return!0}var ST=CT,ET=Pn;function TT(e){return e===e&&!ET(e)}var Og=TT,AT=Og,IT=Ea;function RT(e){for(var t=IT(e),r=t.length;r--;){var s=t[r],o=e[s];t[r]=[s,o,AT(o)]}return t}var LT=RT;function OT(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}var Pg=OT,PT=ST,MT=LT,BT=Pg;function UT(e){var t=MT(e);return t.length==1&&t[0][2]?BT(t[0][0],t[0][1]):function(r){return r===e||PT(r,e,t)}}var DT=UT,HT=Ai,FT=Ar,jT="[object Symbol]";function zT(e){return typeof e=="symbol"||FT(e)&&HT(e)==jT}var Aa=zT,NT=Un,WT=Aa,qT=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,KT=/^\w*$/;function GT(e,t){if(NT(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||WT(e)?!0:KT.test(e)||!qT.test(e)||t!=null&&e in Object(t)}var $u=GT,Mg=Bc,VT="Expected a function";function xu(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(VT);var r=function(){var s=arguments,o=t?t.apply(this,s):s[0],a=r.cache;if(a.has(o))return a.get(o);var c=e.apply(this,s);return r.cache=a.set(o,c)||a,c};return r.cache=new(xu.Cache||Mg),r}xu.Cache=Mg;var QT=xu,ZT=QT,XT=500;function YT(e){var t=ZT(e,function(s){return r.size===XT&&r.clear(),s}),r=t.cache;return t}var JT=YT,eA=JT,tA=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,nA=/\\(\\)?/g,rA=eA(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(tA,function(r,s,o,a){t.push(o?a.replace(nA,"$1"):s||r)}),t}),iA=rA;function sA(e,t){for(var r=-1,s=e==null?0:e.length,o=Array(s);++r<s;)o[r]=t(e[r],r,e);return o}var ku=sA,P0=Ti,oA=ku,aA=Un,lA=Aa,cA=1/0,M0=P0?P0.prototype:void 0,B0=M0?M0.toString:void 0;function Bg(e){if(typeof e=="string")return e;if(aA(e))return oA(e,Bg)+"";if(lA(e))return B0?B0.call(e):"";var t=e+"";return t=="0"&&1/e==-cA?"-0":t}var uA=Bg,fA=uA;function dA(e){return e==null?"":fA(e)}var hA=dA,pA=Un,gA=$u,vA=iA,mA=hA;function bA(e,t){return pA(e)?e:gA(e,t)?[e]:vA(mA(e))}var Fi=bA,yA=Aa,_A=1/0;function wA(e){if(typeof e=="string"||yA(e))return e;var t=e+"";return t=="0"&&1/e==-_A?"-0":t}var ji=wA,$A=Fi,xA=ji;function kA(e,t){t=$A(t,e);for(var r=0,s=t.length;e!=null&&r<s;)e=e[xA(t[r++])];return r&&r==s?e:void 0}var Ia=kA,CA=Ia;function SA(e,t,r){var s=e==null?void 0:CA(e,t);return s===void 0?r:s}var EA=SA;function TA(e,t){return e!=null&&t in Object(e)}var AA=TA,IA=Fi,RA=gu,LA=Un,OA=mu,PA=bu,MA=ji;function BA(e,t,r){t=IA(t,e);for(var s=-1,o=t.length,a=!1;++s<o;){var c=MA(t[s]);if(!(a=e!=null&&r(e,c)))break;e=e[c]}return a||++s!=o?a:(o=e==null?0:e.length,!!o&&PA(o)&&OA(c,o)&&(LA(e)||RA(e)))}var UA=BA,DA=AA,HA=UA;function FA(e,t){return e!=null&&HA(e,t,DA)}var jA=FA,zA=Lg,NA=EA,WA=jA,qA=$u,KA=Og,GA=Pg,VA=ji,QA=1,ZA=2;function XA(e,t){return qA(e)&&KA(t)?GA(VA(e),t):function(r){var s=NA(r,e);return s===void 0&&s===t?WA(r,e):zA(t,s,QA|ZA)}}var YA=XA;function JA(e){return e}var Ug=JA;function eI(e){return function(t){return t?.[e]}}var tI=eI,nI=Ia;function rI(e){return function(t){return nI(t,e)}}var iI=rI,sI=tI,oI=iI,aI=$u,lI=ji;function cI(e){return aI(e)?sI(lI(e)):oI(e)}var uI=cI,fI=DT,dI=YA,hI=Ug,pI=Un,gI=uI;function vI(e){return typeof e=="function"?e:e==null?hI:typeof e=="object"?pI(e)?dI(e[0],e[1]):fI(e):gI(e)}var Cu=vI,mI=Cu,bI=v1;function yI(e,t){return e&&e.length?bI(e,mI(t)):[]}var _I=yI;const wI=$s(_I),oc=e=>Array.from(e).sort((t,r)=>r.created_at-t.created_at);let Fo=0;const{setActiveSubscriptions:$I}=ag();setInterval(()=>{$I(Fo)},1e3);const tr=e=>{const{config:t,shouldMuteEvent:r}=Be(),s=xa(),[o,a]=ye([]);_r(sa(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(u=>u.filter(d=>!r(d)))},{defer:!0}));const c=()=>{const u=e();if(u==null)return;const{relayUrls:d,filters:p,options:h,onEvent:v,onEOSE:b,continuous:_=!0}=u,w=u.limit??50,k=s().sub(d,p,h);let S=!0;Fo+=1;let L=!1,U=!1;const M=[];k.on("event",E=>{v?.(E),!r(E)&&(u.clientEventFilter!=null&&!u.clientEventFilter(E)||(U?a(O=>{const N=oc([E,...O].slice(0,w)),q=wI(N,ie=>ie.id);return q.length!==N.length&&console.warn("duplicated event",E),q}):(L=!0,M.push(E))))}),k.on("eose",()=>{b?.(),U=!0,a(oc(M)),_||(k.unsub(),S&&(S=!1,Fo-=1))});const R=setInterval(()=>{if(U){clearInterval(R);return}L&&(L=!1,a(oc(M)))},100);qr(()=>{k.unsub(),S&&(S=!1,Fo-=1),clearInterval(R)})};return _r(()=>{c()}),{events:o}},xI=e=>{const t=()=>xn(e),r=[e.id],s=t().rootEvent()?.id;s!=null&&r.push(s);const o=t().replyingToEvent()?.id;return o!=null&&r.push(o),wr(r)},kI=e=>{const{config:t}=Be(),{events:r}=tr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:xI(e.event),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return $(Ui,{get events(){return[...r()].reverse()}})},CI=e=>$($n,{get children(){return $(Me,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>$(kI,{get event(){return t.event}})})}}),SI=P('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),EI=P('<div class="shrink-0 border-b">'),TI=P('<div class="flex flex-col overflow-y-scroll scroll-smooth">'),AI=P('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="flex h-full flex-col overflow-y-scroll scroll-smooth">'),zi=e=>{let t;const r=xk(),s=()=>e.width??"medium";return Cc(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Cc(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),$(pg.Provider,{value:r,get children(){const o=SI(),a=t;return typeof a=="function"?Rn(a,o):t=o,I(o,$(se,{get when(){return r.timelineState.content},keyed:!0,get fallback(){return[(()=>{const c=EI();return I(c,()=>e.header),c})(),(()=>{const c=TI();return I(c,()=>e.children),c})()]},children:c=>(()=>{const u=AI(),d=u.firstChild,p=d.firstChild,h=p.firstChild,v=d.nextSibling;return p.$$click=()=>r?.clearTimeline(),I(h,$(l1,{})),I(v,$(CI,{timelineContent:c})),u})()})),Le(c=>zw(o,{"sm:w-[500px]":s()==="widest","sm:w-[360px]":s()==="wide","sm:w-[320px]":s()==="medium","sm:w-[280px]":s()==="narrow"},c)),o}})};it(["click"]);const II=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),RI=(e={})=>(()=>{const t=II();return Qe(t,e,!0,!0),t})(),LI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),OI=(e={})=>(()=>{const t=LI();return Qe(t,e,!0,!0),t})(),PI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),MI=(e={})=>(()=>{const t=PI();return Qe(t,e,!0,!0),t})(),BI=P('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),UI=P('<div class="flex h-9 gap-2"><button class="rounded-md border px-4 hover:bg-stone-100">特大</button><button class="rounded-md border px-4 hover:bg-stone-100">大</button><button class="rounded-md border px-4 hover:bg-stone-100">中</button><button class="rounded-md border px-4 hover:bg-stone-100">小'),DI=P('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2" title="左に移動"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2" title="右に移動"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600" title="削除"><span class="inline-block h-4 w-4" aria-label="削除">'),HI=e=>(()=>{const t=BI(),r=t.firstChild,s=r.nextSibling;return I(r,()=>e.title),I(s,()=>e.children),t})(),Ni=e=>{const{saveColumn:t,removeColumn:r,moveColumn:s}=Be(),o=Is(),a=u=>{t({...e.column,width:u})},c=u=>{s(e.column.id,u),o({command:"moveToColumn",columnIndex:u}).catch(d=>console.error(d))};return(()=>{const u=DI(),d=u.firstChild,p=d.firstChild,h=p.firstChild,v=p.nextSibling,b=v.firstChild,_=v.nextSibling,w=_.nextSibling,k=w.firstChild;return I(u,$(HI,{title:"カラム幅",get children(){const S=UI(),L=S.firstChild,U=L.nextSibling,M=U.nextSibling,R=M.nextSibling;return L.$$click=()=>a("widest"),U.$$click=()=>a("wide"),M.$$click=()=>a("medium"),R.$$click=()=>a("narrow"),S}}),d),p.$$click=()=>c(e.columnIndex-1),I(h,$(RI,{})),v.$$click=()=>c(e.columnIndex+1),I(b,$(OI,{})),w.$$click=()=>r(e.column.id),I(k,$(MI,{})),u})()};it(["click"]);const Cr=e=>t=>{switch(e.filterType){case"AND":return e.children.every(r=>Cr(r)(t));case"OR":return e.children.some(r=>Cr(r)(t));case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},FI=e=>{const{config:t,removeColumn:r}=Be(),{followingPubkeys:s}=kc(()=>({pubkey:e.column.pubkey})),{events:o}=tr(()=>{const a=t4.uniq([...s()]);return a.length===0?null:{relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:a,limit:10,since:Vn()-4*60*60}],clientEventFilter:c=>e.column.contentFilter==null?!0:Cr(e.column.contentFilter)(c.content)}});return $(zi,{get header(){return $(xs,{get name(){return e.column.name??"ホーム"},get icon(){return $(o1,{})},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Ui,{get events(){return o()}})}})},jI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),Dg=(e={})=>(()=>{const t=jI();return Qe(t,e,!0,!0),t})(),zI=P('<span class="h-4 w-4 pt-[1px] text-rose-400">'),NI=P('<img alt="icon" class="rounded">'),WI=P('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline"></button> がリアクション'),qI=P('<div class="notification-event py-1">'),KI=P('<div class="truncate">読み込み中 '),GI=e=>{const{showProfile:t}=Tr(),r=()=>xn(e.event),s=()=>r().lastTaggedEventId(),{profile:o}=Bi(()=>({pubkey:e.event.pubkey})),{event:a,query:c}=cg(()=>Xt([s()])(([d])=>({eventId:d}))),u=()=>c.isSuccess&&a()==null;return $(se,{get when(){return!u()},get children(){return $(tu,{get children(){return[(()=>{const d=WI(),p=d.firstChild,h=p.nextSibling,v=h.firstChild,b=v.nextSibling,_=b.firstChild;return I(p,$($n,{get fallback(){return e.event.content},get children(){return $(Me,{get when(){return e.event.content==="+"},get children(){const w=zI();return I(w,$(iu,{})),w}})}})),I(v,$(se,{get when(){return o()?.picture!=null},get children(){const w=NI();return Le(()=>St(w,"src",o()?.picture)),w}})),_.$$click=()=>t(e.event.pubkey),I(_,$(Ca,{get pubkey(){return e.event.pubkey}})),d})(),(()=>{const d=qI();return I(d,$(se,{get when(){return a()},get fallback(){return(()=>{const p=KI();return p.firstChild,I(p,s,null),p})()},keyed:!0,children:p=>$(fu,{event:p})})),d})()]}})}})};it(["click"]);const VI=P("<div>unknown event"),Hg=e=>$(Bt,{get each(){return e.events},children:t=>$($n,{get fallback(){return VI()},get children(){return[$(Me,{get when(){return t.kind===at.Text},get children(){return $(yg,{event:t})}}),$(Me,{get when(){return t.kind===at.Reaction},get children(){return $(GI,{event:t})}}),$(Me,{get when(){return t.kind===6},get children(){return $(bg,{event:t})}})]}})}),QI=e=>{const{config:t,removeColumn:r}=Be(),{events:s}=tr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Cr(e.column.contentFilter)(o.content)}));return $(zi,{get header(){return $(xs,{get name(){return e.column.name??"通知"},get icon(){return $(Dg,{})},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Hg,{get events(){return s()}})}})},ZI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),Fg=(e={})=>(()=>{const t=ZI();return Qe(t,e,!0,!0),t})(),XI=e=>{const{config:t,removeColumn:r}=Be(),{events:s}=tr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Cr(e.column.contentFilter)(o.content)}));return $(zi,{get header(){return $(xs,{get name(){return e.column.name??"投稿"},get icon(){return $(Fg,{})},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Ui,{get events(){return s()}})}})},YI=e=>{const{config:t,removeColumn:r}=Be(),{events:s}=tr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:o=>e.column.contentFilter==null?!0:Cr(e.column.contentFilter)(o.content)}));return $(zi,{get header(){return $(xs,{get name(){return e.column.name??"リアクション"},get icon(){return $(ru,{})},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>r(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Hg,{get events(){return s()}})}})},JI=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Su=(e={})=>(()=>{const t=JI();return Qe(t,e,!0,!0),t})(),eR=e=>{const{removeColumn:t}=Be(),{events:r}=tr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:Vn()-4*60*60}],clientEventFilter:s=>e.column.contentFilter==null?!0:Cr(e.column.contentFilter)(s.content)}));return $(zi,{get header(){return $(xs,{get name(){return e.column.name??"リレー"},get icon(){return $(Su,{})},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Ui,{get events(){return r()}})}})},tR=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),jg=(e={})=>(()=>{const t=tR();return Qe(t,e,!0,!0),t})(),nR=P('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),rR=e=>{const[t,r]=ye(!1),[s,o]=ye(""),{saveColumn:a}=Be(),c=()=>r(v=>!v),u=()=>{s()!==e.column.query&&a({...e.column,query:s()})},d=()=>{u()},p=v=>{o(v.currentTarget.value)},h=v=>{v.preventDefault(),u()};return kn(()=>{o(e.column.query)}),(()=>{const v=nR(),b=v.firstChild,_=b.firstChild,w=_.firstChild,k=_.nextSibling,S=k.firstChild,L=k.nextSibling;return I(w,$(jg,{})),k.addEventListener("submit",h),S.addEventListener("blur",d),S.addEventListener("change",p),L.$$click=()=>c(),I(L,$(a1,{})),I(v,$(se,{get when(){return t()},get children(){return e.settings()}}),null),Le(()=>S.value=s()),v})()},iR=e=>{const{removeColumn:t}=Be(),{events:r}=tr(()=>{const{query:s}=e.column;return s.length===0?null:{relayUrls:p9,filters:[{kinds:[1,6],search:s,limit:25}],clientEventFilter:o=>e.column.contentFilter==null?!0:Cr(e.column.contentFilter)(o.content)}});return $(zi,{get header(){return $(rR,{get column(){return e.column},settings:()=>$(Ni,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return $(Ui,{get events(){return r()}})}})};it(["click"]);const sR=P('<div class="flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),oR=()=>{const{config:e}=Be();return(()=>{const t=sR();return I(t,$(Bt,{get each(){return e().columns},children:(r,s)=>{const o=()=>s()+1,a=()=>o()===e().columns.length;return $($n,{get children(){return[$(Me,{get when(){return r.columnType==="Following"&&r},keyed:!0,children:c=>$(FI,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(Me,{get when(){return r.columnType==="Notification"&&r},keyed:!0,children:c=>$(QI,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(Me,{get when(){return r.columnType==="Posts"&&r},keyed:!0,children:c=>$(XI,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(Me,{get when(){return r.columnType==="Reactions"&&r},keyed:!0,children:c=>$(YI,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(Me,{get when(){return r.columnType==="Relays"&&r},keyed:!0,children:c=>$(eR,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})}),$(Me,{get when(){return r.columnType==="Search"&&r},keyed:!0,children:c=>$(iR,{column:c,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},aR=P('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-center bg-black/30">'),lR=e=>{let t;const r=s=>{s.target===t&&e.onClose?.()};return(()=>{const s=aR();s.$$click=r;const o=t;return typeof o=="function"?Rn(o,s):t=s,I(s,()=>e.children),s})()};it(["click"]);const cR=P('<div class="h-full w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex h-full flex-col overflow-y-scroll rounded-xl border bg-white pb-32 text-stone-700 shadow-lg">'),Rs=e=>$(lR,{onClose:()=>e.onClose?.(),get children(){const t=cR(),r=t.firstChild,s=r.firstChild,o=r.nextSibling;return r.$$click=()=>e.onClose?.(),I(s,$(se,{get when(){return e?.closeButton},get fallback(){return $(_s,{})},keyed:!0,children:a=>a()})),I(o,()=>e.children),t}});it(["click"]);const uR=P('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),fR=P('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),dR=P('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),hR=async()=>{const t=await(await fetch(Lc("packageInfo.json"))).text();return JSON.parse(t)},pR=e=>{const[t]=i1(hR);return $(Rs,{get onClose(){return e.onClose},get children(){const r=uR(),s=r.firstChild,o=s.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;u.firstChild;const d=s.nextSibling,p=d.nextSibling,h=p.nextSibling,v=h.nextSibling,b=v.nextSibling,_=b.nextSibling,w=_.nextSibling;return w.nextSibling,I(u,()=>t()?.self?.version,null),I(w,()=>t()?.self.licenseText),I(r,$(Bt,{get each(){return t()?.packages??[]},fallback:"取得中",children:k=>[(()=>{const S=fR(),L=S.firstChild,U=L.nextSibling,M=U.nextSibling,R=M.nextSibling;return R.nextSibling,I(S,()=>k.name,L),I(S,()=>k.version,U),I(S,()=>k.licenseSpdx,R),S})(),(()=>{const S=dR();return I(S,()=>k.licenseText),S})()]}),null),Le(()=>St(o,"src",Lc("images/rabbit_app_256.png"))),r}})},gR=P('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>ホーム</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>通知</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>日本リレー</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>検索</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分の投稿</button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span>自分のリアクション'),vR=e=>{const t=er(),{saveColumn:r}=Be(),s=Is(),o=()=>{e.onClose(),s({command:"moveToLastColumn"}).catch(v=>console.error(v))},a=()=>{Xt([t()])(([v])=>{r(tg({pubkey:v}))}),o()},c=()=>{Xt([t()])(([v])=>{r(ng({pubkey:v}))}),o()},u=()=>{r(rg()),o()},d=()=>{r(lu({query:""})),o()},p=()=>{Xt([t()])(([v])=>{r(ig({pubkey:v}))}),o()},h=()=>{Xt([t()])(([v])=>{r(sg({pubkey:v}))}),o()};return $(Rs,{get onClose(){return e.onClose},get children(){const v=gR(),b=v.firstChild,_=b.firstChild,w=b.nextSibling,k=w.firstChild,S=w.nextSibling,L=S.firstChild,U=S.nextSibling,M=U.firstChild,R=U.nextSibling,E=R.firstChild,O=R.nextSibling,N=O.firstChild;return b.$$click=()=>a(),I(_,$(o1,{})),w.$$click=()=>c(),I(k,$(Dg,{})),S.$$click=()=>u(),I(L,$(Su,{})),U.$$click=()=>d(),I(M,$(jg,{})),R.$$click=()=>p(),I(E,$(Fg,{})),O.$$click=()=>h(),I(N,$(ru,{})),v}})};it(["click"]);const mR=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),bR=(e={})=>(()=>{const t=mR();return Qe(t,e,!0,!0),t})(),yR=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),_R=(e={})=>(()=>{const t=yR();return Qe(t,e,!0,!0),t})(),wR=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),$R=(e={})=>(()=>{const t=wR();return Qe(t,e,!0,!0),t})();function xR(e){const{config:t}=Be(),r=Fe(e),{events:s}=tr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[at.Contacts],"#p":[r().pubkey]}],limit:1/0,continuous:!0})),o=()=>wr(s()?.map(c=>c.pubkey));return{followersPubkeys:o,count:()=>o().length}}const kR=e=>{const t=Fe(e),r=Ei(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,c]=o;if(c==null)return Promise.resolve(null);const{nip05:u}=c;return xp.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>r?.data??null,query:r}},CR=P('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">編集'),SR=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">読み込み中'),ER=P('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">更新中'),TR=P('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),AR=P('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">フォロー'),IR=P('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),RR=P('<div class="shrink-0 text-xs">読み込み中'),LR=P('<div class="shrink-0 text-xs">フォローされています'),OR=P('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),PR=P('<div class="truncate text-xl font-bold">'),MR=P('<div class="truncate text-xs">@'),BR=P('<span class="inline-block h-3 w-3">'),UR=P('<span class="inline-block h-4 w-4 text-blue-400">'),DR=P('<div class="flex items-center text-xs">'),HR=P('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),FR=P('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),jR=P('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),zR=P('<div class="flex border-t px-4 py-2"><div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),NR=P('<ul class="border-t px-5 py-2 text-xs">'),WR=P('<ul class="border-t p-1">'),qR=P('<div class="h-12 shrink-0">'),KR=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),GR=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),VR=P('<span class="inline-block h-4 w-4 text-rose-500">'),QR=P('<span class="text-sm">読み込み中'),ZR=P('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),XR=P('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),YR=e=>{const{count:t}=xR(()=>({pubkey:e.pubkey}));return Fe(t)},JR=e=>{const{config:t,addMutedPubkey:r,removeMutedPubkey:s,isPubkeyMuted:o}=Be(),a=Sa(),c=er(),{showProfileEdit:u}=Tr(),d=Fe(()=>ka(e.pubkey)),[p,h]=ye(!1),[v,b]=ye(!1),{profile:_,query:w}=Bi(()=>({pubkey:e.pubkey})),{verification:k,query:S}=kR(()=>Xt([_()?.nip05])(([K])=>({nip05:K}))),L=()=>{const K=_()?.nip05;if(K==null)return null;const[te,de]=K.split("@");return de==null?null:te==="_"?{domain:de,ident:de}:{user:te,domain:de,ident:K}},U=()=>k()?.pubkey===e.pubkey,M=()=>o(e.pubkey),{followingPubkeys:R,invalidateFollowings:E,query:O}=kc(()=>Xt([c()])(([K])=>({pubkey:K}))),N=()=>R().includes(e.pubkey),{followingPubkeys:q,query:ie}=kc(()=>({pubkey:e.pubkey})),G=()=>{const K=c();return K!=null&&q().includes(K)},X=zr({mutationKey:["updateContacts"],mutationFn:(...K)=>a.updateContacts(...K).then(te=>Promise.allSettled(te.map(Er(5e3)))),onSuccess:K=>{const te=K.filter(Te=>Te.status==="fulfilled").length,de=K.length-te;te===K.length?console.log("succeeded to update contacts"):te>0?console.log(`succeeded to update contacts for ${te} relays but failed for ${de} relays`):console.error("failed to update contacts")},onError:K=>{console.error("failed to update contacts: ",K)},onSettled:()=>{E().then(()=>O.refetch()).catch(K=>console.error("failed to refetch contacts",K))}}),H=()=>{const K=c();K!=null&&O.isFetched&&X.mutate({relayUrls:t().relayUrls,pubkey:K,content:O.data?.content??"",followingPubkeys:wr([...R(),e.pubkey])})},Q=()=>{const K=c();K!=null&&O.isFetched&&window.confirm("本当にフォロー解除しますか？")&&X.mutate({relayUrls:t().relayUrls,pubkey:K,content:O.data?.content??"",followingPubkeys:R().filter(te=>te!==e.pubkey)})},he=[{content:()=>"IDをコピー",onSelect:()=>{navigator.clipboard.writeText(d()).catch(K=>window.alert(K))}},{content:()=>M()?"ミュート解除":"ミュート",onSelect:()=>{M()?s(e.pubkey):r(e.pubkey)}},{when:()=>e.pubkey===c(),content:()=>N()?"自分をフォロー解除":"自分をフォロー",onSelect:()=>{N()?Q():H()}}],{events:ee}=tr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:Vn()}],continuous:!1}));return $(Rs,{onClose:()=>e.onClose?.(),get children(){return[$(se,{get when(){return w.isFetched},get fallback(){return"loading"},get children(){return[$(se,{get when(){return _()?.banner},get fallback(){return qR()},keyed:!0,children:K=>(()=>{const te=KR(),de=te.firstChild;return St(de,"src",K),te})()}),(()=>{const K=OR(),te=K.firstChild,de=te.firstChild,Te=te.nextSibling,Re=Te.firstChild;return I(de,$(se,{get when(){return _()?.picture},keyed:!0,children:re=>(()=>{const De=GR();return St(De,"src",re),De})()})),I(Re,$($n,{get children(){return[$(Me,{get when(){return e.pubkey===c()},get children(){const re=CR();return re.$$click=()=>u(),re}}),$(Me,{get when(){return O.isLoading||O.isFetching},get children(){return SR()}}),$(Me,{get when(){return X.isLoading},get children(){return ER()}}),$(Me,{get when(){return N()},get children(){const re=TR();return re.$$click=()=>Q(),re.addEventListener("mouseleave",()=>h(!1)),re.addEventListener("mouseenter",()=>h(!0)),I(re,$(se,{get when(){return!p()},fallback:"フォロー解除",children:"フォロー中"})),Le(()=>re.disabled=X.isLoading),re}}),$(Me,{get when(){return!N()},get children(){const re=AR();return re.$$click=()=>H(),Le(()=>re.disabled=X.isLoading),re}})]}}),null),I(Re,$(Tp,{menu:he,get children(){const re=IR();return I(re,$(Sp,{})),re}}),null),I(Te,$($n,{get children(){return[$(Me,{get when(){return ie.isLoading},get children(){return RR()}}),$(Me,{get when(){return G()},get children(){return LR()}})]}}),null),K})(),(()=>{const K=HR(),te=K.firstChild,de=te.firstChild,Te=de.nextSibling,Re=Te.firstChild;return I(te,$(se,{get when(){return(_()?.display_name?.length??0)>0},get children(){const re=PR();return I(re,()=>_()?.display_name),re}}),de),I(de,$(se,{get when(){return(_()?.name?.length??0)>0},get children(){const re=MR();return re.firstChild,I(re,()=>_()?.name,null),re}}),null),I(de,$(se,{get when(){return(_()?.nip05?.length??0)>0},get children(){const re=DR();return I(re,()=>L()?.ident,null),I(re,$($n,{get fallback(){return(()=>{const De=VR();return I(De,$($R,{})),De})()},get children(){return[$(Me,{get when(){return S.isLoading},get children(){const De=BR();return I(De,$(bR,{})),De}}),$(Me,{get when(){return U()},get children(){const De=UR();return I(De,$(_R,{})),De}})]}}),null),re}}),null),I(Re,d),K})(),$(se,{get when(){return(_()?.about??"").length>0},get children(){const K=FR();return I(K,()=>_()?.about),K}}),(()=>{const K=zR(),te=K.firstChild,de=te.firstChild,Te=de.nextSibling;return I(Te,$(se,{get when(){return ie.isFetched},get fallback(){return QR()},get children(){return q().length}})),I(K,$(se,{get when(){return!t().hideCount},get children(){const Re=jR(),re=Re.firstChild,De=re.nextSibling;return I(De,$(se,{get when(){return v()},get fallback(){return(()=>{const dn=ZR();return dn.$$click=()=>b(!0),dn})()},keyed:!0,get children(){return $(YR,{get pubkey(){return e.pubkey}})}})),Re}}),null),K})(),$(se,{get when(){return(_()?.website??"").length>0},get children(){const K=NR();return I(K,$(se,{get when(){return _()?.website},keyed:!0,children:te=>(()=>{const de=XR(),Te=de.firstChild;return I(Te,$(Su,{})),I(de,$(cu,{class:"text-blue-500 underline",href:te}),null),de})()})),K}})]}}),(()=>{const K=WR();return I(K,$(Ui,{get events(){return ee()}})),K})()]}})};it(["click"]);function eL(e,t){for(var r=-1,s=e==null?0:e.length;++r<s&&t(e[r],r,e)!==!1;);return e}var tL=eL,nL=Kr,rL=function(){try{var e=nL(Object,"defineProperty");return e({},"",{}),e}catch{}}(),zg=rL,U0=zg;function iL(e,t,r){t=="__proto__"&&U0?U0(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Ng=iL,sL=Ng,oL=Pc,aL=Object.prototype,lL=aL.hasOwnProperty;function cL(e,t,r){var s=e[t];(!(lL.call(e,t)&&oL(s,r))||r===void 0&&!(t in e))&&sL(e,t,r)}var Eu=cL,uL=Eu,fL=Ng;function dL(e,t,r,s){var o=!r;r||(r={});for(var a=-1,c=t.length;++a<c;){var u=t[a],d=s?s(r[u],e[u],u,r,e):void 0;d===void 0&&(d=e[u]),o?fL(r,u,d):uL(r,u,d)}return r}var Ls=dL,hL=Ls,pL=Ea;function gL(e,t){return e&&hL(t,pL(t),e)}var vL=gL;function mL(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var bL=mL,yL=Pn,_L=wu,wL=bL,$L=Object.prototype,xL=$L.hasOwnProperty;function kL(e){if(!yL(e))return wL(e);var t=_L(e),r=[];for(var s in e)s=="constructor"&&(t||!xL.call(e,s))||r.push(s);return r}var CL=kL,SL=Sg,EL=CL,TL=Tg;function AL(e){return TL(e)?SL(e,!0):EL(e)}var Tu=AL,IL=Ls,RL=Tu;function LL(e,t){return e&&IL(t,RL(t),e)}var OL=LL,ia={exports:{}};ia.exports;(function(e,t){var r=Cn,s=t&&!t.nodeType&&t,o=s&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===s,c=a?r.Buffer:void 0,u=c?c.allocUnsafe:void 0;function d(p,h){if(h)return p.slice();var v=p.length,b=u?u(v):new p.constructor(v);return p.copy(b),b}e.exports=d})(ia,ia.exports);var PL=ia.exports;function ML(e,t){var r=-1,s=e.length;for(t||(t=Array(s));++r<s;)t[r]=e[r];return t}var BL=ML,UL=Ls,DL=pu;function HL(e,t){return UL(e,DL(e),t)}var FL=HL,jL=Eg,zL=jL(Object.getPrototypeOf,Object),Au=zL,NL=hu,WL=Au,qL=pu,KL=xg,GL=Object.getOwnPropertySymbols,VL=GL?function(e){for(var t=[];e;)NL(t,qL(e)),e=WL(e);return t}:KL,Wg=VL,QL=Ls,ZL=Wg;function XL(e,t){return QL(e,ZL(e),t)}var YL=XL,JL=$g,eO=Wg,tO=Tu;function nO(e){return JL(e,tO,eO)}var Iu=nO,rO=Object.prototype,iO=rO.hasOwnProperty;function sO(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&iO.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var oO=sO,D0=wg;function aO(e){var t=new e.constructor(e.byteLength);return new D0(t).set(new D0(e)),t}var Ru=aO,lO=Ru;function cO(e,t){var r=t?lO(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var uO=cO,fO=/\w*$/;function dO(e){var t=new e.constructor(e.source,fO.exec(e));return t.lastIndex=e.lastIndex,t}var hO=dO,H0=Ti,F0=H0?H0.prototype:void 0,j0=F0?F0.valueOf:void 0;function pO(e){return j0?Object(j0.call(e)):{}}var gO=pO,vO=Ru;function mO(e,t){var r=t?vO(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var bO=mO,yO=Ru,_O=uO,wO=hO,$O=gO,xO=bO,kO="[object Boolean]",CO="[object Date]",SO="[object Map]",EO="[object Number]",TO="[object RegExp]",AO="[object Set]",IO="[object String]",RO="[object Symbol]",LO="[object ArrayBuffer]",OO="[object DataView]",PO="[object Float32Array]",MO="[object Float64Array]",BO="[object Int8Array]",UO="[object Int16Array]",DO="[object Int32Array]",HO="[object Uint8Array]",FO="[object Uint8ClampedArray]",jO="[object Uint16Array]",zO="[object Uint32Array]";function NO(e,t,r){var s=e.constructor;switch(t){case LO:return yO(e);case kO:case CO:return new s(+e);case OO:return _O(e,r);case PO:case MO:case BO:case UO:case DO:case HO:case FO:case jO:case zO:return xO(e,r);case SO:return new s;case EO:case IO:return new s(e);case TO:return wO(e);case AO:return new s;case RO:return $O(e)}}var WO=NO,qO=Pn,z0=Object.create,KO=function(){function e(){}return function(t){if(!qO(t))return{};if(z0)return z0(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),GO=KO,VO=GO,QO=Au,ZO=wu;function XO(e){return typeof e.constructor=="function"&&!ZO(e)?VO(QO(e)):{}}var YO=XO,JO=Ta,eP=Ar,tP="[object Map]";function nP(e){return eP(e)&&JO(e)==tP}var rP=nP,iP=rP,sP=yu,N0=_u,W0=N0&&N0.isMap,oP=W0?sP(W0):iP,aP=oP,lP=Ta,cP=Ar,uP="[object Set]";function fP(e){return cP(e)&&lP(e)==uP}var dP=fP,hP=dP,pP=yu,q0=_u,K0=q0&&q0.isSet,gP=K0?pP(K0):hP,vP=gP,mP=du,bP=tL,yP=Eu,_P=vL,wP=OL,$P=PL,xP=BL,kP=FL,CP=YL,SP=Ag,EP=Iu,TP=Ta,AP=oO,IP=WO,RP=YO,LP=Un,OP=vu,PP=aP,MP=Pn,BP=vP,UP=Ea,DP=Tu,HP=1,FP=2,jP=4,qg="[object Arguments]",zP="[object Array]",NP="[object Boolean]",WP="[object Date]",qP="[object Error]",Kg="[object Function]",KP="[object GeneratorFunction]",GP="[object Map]",VP="[object Number]",Gg="[object Object]",QP="[object RegExp]",ZP="[object Set]",XP="[object String]",YP="[object Symbol]",JP="[object WeakMap]",eM="[object ArrayBuffer]",tM="[object DataView]",nM="[object Float32Array]",rM="[object Float64Array]",iM="[object Int8Array]",sM="[object Int16Array]",oM="[object Int32Array]",aM="[object Uint8Array]",lM="[object Uint8ClampedArray]",cM="[object Uint16Array]",uM="[object Uint32Array]",qe={};qe[qg]=qe[zP]=qe[eM]=qe[tM]=qe[NP]=qe[WP]=qe[nM]=qe[rM]=qe[iM]=qe[sM]=qe[oM]=qe[GP]=qe[VP]=qe[Gg]=qe[QP]=qe[ZP]=qe[XP]=qe[YP]=qe[aM]=qe[lM]=qe[cM]=qe[uM]=!0;qe[qP]=qe[Kg]=qe[JP]=!1;function jo(e,t,r,s,o,a){var c,u=t&HP,d=t&FP,p=t&jP;if(r&&(c=o?r(e,s,o,a):r(e)),c!==void 0)return c;if(!MP(e))return e;var h=LP(e);if(h){if(c=AP(e),!u)return xP(e,c)}else{var v=TP(e),b=v==Kg||v==KP;if(OP(e))return $P(e,u);if(v==Gg||v==qg||b&&!o){if(c=d||b?{}:RP(e),!u)return d?CP(e,wP(c,e)):kP(e,_P(c,e))}else{if(!qe[v])return o?e:{};c=IP(e,v,u)}}a||(a=new mP);var _=a.get(e);if(_)return _;a.set(e,c),BP(e)?e.forEach(function(S){c.add(jo(S,t,r,S,e,a))}):PP(e)&&e.forEach(function(S,L){c.set(L,jo(S,t,r,L,e,a))});var w=p?d?EP:SP:d?DP:UP,k=h?void 0:w(e);return bP(k||e,function(S,L){k&&(L=S,S=e[L]),yP(c,L,jo(S,t,r,L,e,a))}),c}var fM=jo;function dM(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var hM=dM;function pM(e,t,r){var s=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var a=Array(o);++s<o;)a[s]=e[s+t];return a}var gM=pM,vM=Ia,mM=gM;function bM(e,t){return t.length<2?e:vM(e,mM(t,0,-1))}var yM=bM,_M=Fi,wM=hM,$M=yM,xM=ji;function kM(e,t){return t=_M(t,e),e=$M(e,t),e==null||delete e[xM(wM(t))]}var CM=kM,SM=Ai,EM=Au,TM=Ar,AM="[object Object]",IM=Function.prototype,RM=Object.prototype,Vg=IM.toString,LM=RM.hasOwnProperty,OM=Vg.call(Object);function PM(e){if(!TM(e)||SM(e)!=AM)return!1;var t=EM(e);if(t===null)return!0;var r=LM.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Vg.call(r)==OM}var MM=PM,BM=MM;function UM(e){return BM(e)?void 0:e}var DM=UM,G0=Ti,HM=gu,FM=Un,V0=G0?G0.isConcatSpreadable:void 0;function jM(e){return FM(e)||HM(e)||!!(V0&&e&&e[V0])}var zM=jM,NM=hu,WM=zM;function Qg(e,t,r,s,o){var a=-1,c=e.length;for(r||(r=WM),o||(o=[]);++a<c;){var u=e[a];t>0&&r(u)?t>1?Qg(u,t-1,r,s,o):NM(o,u):s||(o[o.length]=u)}return o}var qM=Qg,KM=qM;function GM(e){var t=e==null?0:e.length;return t?KM(e,1):[]}var VM=GM;function QM(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var ZM=QM,XM=ZM,Q0=Math.max;function YM(e,t,r){return t=Q0(t===void 0?e.length-1:t,0),function(){for(var s=arguments,o=-1,a=Q0(s.length-t,0),c=Array(a);++o<a;)c[o]=s[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=s[o];return u[t]=r(c),XM(e,this,u)}}var JM=YM;function eB(e){return function(){return e}}var tB=eB,nB=tB,Z0=zg,rB=Ug,iB=Z0?function(e,t){return Z0(e,"toString",{configurable:!0,enumerable:!1,value:nB(t),writable:!0})}:rB,sB=iB,oB=800,aB=16,lB=Date.now;function cB(e){var t=0,r=0;return function(){var s=lB(),o=aB-(s-r);if(r=s,o>0){if(++t>=oB)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var uB=cB,fB=sB,dB=uB,hB=dB(fB),pB=hB,gB=VM,vB=JM,mB=pB;function bB(e){return mB(vB(e,void 0,gB),e+"")}var yB=bB,_B=ku,wB=fM,$B=CM,xB=Fi,kB=Ls,CB=DM,SB=yB,EB=Iu,TB=1,AB=2,IB=4,RB=SB(function(e,t){var r={};if(e==null)return r;var s=!1;t=_B(t,function(a){return a=xB(a,e),s||(s=a.length>1),a}),kB(e,EB(e),r),s&&(r=wB(r,TB|AB|IB,CB));for(var o=t.length;o--;)$B(r,t[o]);return r}),LB=RB;const OB=$s(LB);var PB="Expected a function";function MB(e){if(typeof e!="function")throw new TypeError(PB);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var BB=MB,UB=Eu,DB=Fi,HB=mu,X0=Pn,FB=ji;function jB(e,t,r,s){if(!X0(e))return e;t=DB(t,e);for(var o=-1,a=t.length,c=a-1,u=e;u!=null&&++o<a;){var d=FB(t[o]),p=r;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=c){var h=u[d];p=s?s(h,d,u):void 0,p===void 0&&(p=X0(h)?h:HB(t[o+1])?[]:{})}UB(u,d,p),u=u[d]}return e}var zB=jB,NB=Ia,WB=zB,qB=Fi;function KB(e,t,r){for(var s=-1,o=t.length,a={};++s<o;){var c=t[s],u=NB(e,c);r(u,c)&&WB(a,qB(c,e),u)}return a}var GB=KB,VB=ku,QB=Cu,ZB=GB,XB=Iu;function YB(e,t){if(e==null)return{};var r=VB(XB(e),function(s){return[s]});return t=QB(t),ZB(e,r,function(s,o){return t(s,o[0])})}var JB=YB,eU=Cu,tU=BB,nU=JB;function rU(e,t){return nU(e,tU(eU(t)))}var iU=rU;const sU=$s(iU),oU=P('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),aU=P('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),lU=P('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),cU=P('<div><span class="font-bold">その他の項目</span><div>'),uU=P('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),fU=P('<div class="h-12 shrink-0">'),dU=P('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),hU="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",pU="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",gU=new RegExp(`^${hU}$`),Zg=new RegExp(`^${pU}$`),vU=e=>gU.test(e),mU=e=>Zg.test(e),bU=e=>{const t=er(),{config:r}=Be(),{profile:s,invalidateProfile:o,query:a}=Bi(()=>Xt([t()])(([H])=>({pubkey:H}))),{updateProfile:c}=Sa(),[u,d]=ye(""),[p,h]=ye(""),[v,b]=ye(""),[_,w]=ye(""),[k,S]=ye(""),[L,U]=ye(""),[M,R]=ye(""),[E,O]=ye(""),N=zr({mutationKey:["updateProfile"],mutationFn:(...H)=>c(...H).then(Q=>Promise.allSettled(Q.map(Er(1e4)))),onSuccess:H=>{const Q=H.filter(ee=>ee.status==="fulfilled").length,he=H.length-Q;Q===H.length?window.alert("更新しました"):Q>0?window.alert(`${he}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),o().then(()=>a.refetch()).catch(ee=>console.error(ee)),e.onClose()},onError:H=>{console.error("failed to delete",H)}}),q=()=>a.isLoading||a.isError||N.isLoading,ie=()=>OB(s(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),G=H=>{H.preventDefault();const Q=t();if(Q==null)return;const he=sU({picture:u(),banner:p(),name:v(),display_name:_(),about:k(),website:L(),nip05:M(),lud06:vU(E())?E():null,lud16:mU(E())?E():null},ee=>ee==null||ee.length===0);N.mutate({relayUrls:r().relayUrls,pubkey:Q,profile:he,otherProperties:ie()})},X=H=>H.key==="Enter"&&H.preventDefault();return kn(()=>{const H=s();H!=null&&(a.refetch().catch(Q=>console.error(Q)),cc(()=>{d(Q=>H.picture??Q),h(Q=>H.banner??Q),b(Q=>H.name??Q),w(Q=>H.display_name??Q),S(Q=>H.about??Q),U(Q=>H.website??Q),R(Q=>H.nip05??Q),H.lud16!=null?O(H.lud16):H.lud06!=null&&O(H.lud06)}))}),$(Rs,{closeButton:()=>$(l1,{}),get onClose(){return e.onClose},get children(){return[(()=>{const H=lU(),Q=H.firstChild;return I(H,$(se,{get when(){return p().length>0},get fallback(){return fU()},keyed:!0,get children(){const he=oU(),ee=he.firstChild;return Le(()=>St(ee,"src",p())),he}}),Q),I(Q,$(se,{get when(){return u().length>0},get children(){const he=aU();return Le(()=>St(he,"src",u())),he}})),H})(),(()=>{const H=uU(),Q=H.firstChild,he=Q.firstChild,ee=he.firstChild,K=ee.nextSibling,te=he.nextSibling,de=te.firstChild,Te=de.nextSibling,Re=te.nextSibling,re=Re.firstChild,De=re.nextSibling,dn=De.firstChild,Y=dn.nextSibling,Ye=Re.nextSibling,Dt=Ye.firstChild,oe=Dt.nextSibling,Je=Ye.nextSibling,st=Je.firstChild,Tt=st.nextSibling,Ht=Je.nextSibling,At=Ht.firstChild,Ft=At.nextSibling,lt=Ht.nextSibling,It=lt.firstChild,gt=It.nextSibling,dt=lt.nextSibling,ve=dt.firstChild,ot=ve.nextSibling,ze=ot.nextSibling,Ke=dt.nextSibling,ct=Ke.firstChild,jt=ct.nextSibling;return Q.addEventListener("submit",G),K.$$keydown=X,K.addEventListener("blur",fe=>d(fe.currentTarget.value)),Te.$$keydown=X,Te.addEventListener("blur",fe=>h(fe.currentTarget.value)),Y.$$keydown=X,Y.addEventListener("change",fe=>b(fe.currentTarget.value)),oe.$$keydown=X,oe.addEventListener("change",fe=>w(fe.currentTarget.value)),Tt.addEventListener("change",fe=>S(fe.currentTarget.value)),Ft.$$keydown=X,Ft.addEventListener("change",fe=>U(fe.currentTarget.value)),gt.$$keydown=X,gt.addEventListener("change",fe=>R(fe.currentTarget.value)),ze.$$keydown=X,ze.addEventListener("change",fe=>O(fe.currentTarget.value)),I(Q,$(se,{get when(){return Object.entries(ie()).length>0},get children(){const fe=cU(),me=fe.firstChild,yt=me.nextSibling;return I(yt,$(Bt,{get each(){return Object.entries(ie())},children:([zt,Rt])=>(()=>{const Jt=dU(),en=Jt.firstChild,hn=en.nextSibling;return I(en,zt),I(hn,Rt),Jt})()})),fe}}),Ke),jt.$$click=()=>e.onClose(),I(Q,$(se,{get when(){return N.isLoading},children:"保存中..."}),null),Le(fe=>{const me=q(),yt=q(),zt=q(),Rt=q(),Jt=q(),en=q(),hn=Zg.source,Gr=q(),Vr=q(),Qr=N.isLoading;return me!==fe._v$&&(K.disabled=fe._v$=me),yt!==fe._v$2&&(Te.disabled=fe._v$2=yt),zt!==fe._v$3&&(Y.disabled=fe._v$3=zt),Rt!==fe._v$4&&(oe.disabled=fe._v$4=Rt),Jt!==fe._v$5&&(Tt.disabled=fe._v$5=Jt),en!==fe._v$6&&(Ft.disabled=fe._v$6=en),hn!==fe._v$7&&St(gt,"pattern",fe._v$7=hn),Gr!==fe._v$8&&(gt.disabled=fe._v$8=Gr),Vr!==fe._v$9&&(ze.disabled=fe._v$9=Vr),Qr!==fe._v$10&&(ct.disabled=fe._v$10=Qr),fe},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Le(()=>K.value=u()),Le(()=>Te.value=p()),Le(()=>Y.value=v()),Le(()=>oe.value=_()),Le(()=>Tt.value=k()),Le(()=>Ft.value=L()),Le(()=>gt.value=M()),Le(()=>ze.value=E()),H})()]}})};it(["keydown","click"]);const yU=()=>{const e=er(),{modalState:t,showProfile:r,closeModal:s}=Tr();return $(se,{get when(){return t()},keyed:!0,children:o=>$($n,{get children(){return[$(Me,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>$(JR,{pubkey:a,onClose:s})}),$(Me,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return $(bU,{onClose:()=>Xt([e()])(([a])=>{r(a)})})}}),$(Me,{get when(){return o.type==="AddColumn"},get children(){return $(vR,{onClose:s})}}),$(Me,{get when(){return o.type==="About"},get children(){return $(pR,{onClose:s})}})]}})})},_U=P('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),wU=(e={})=>(()=>{const t=_U();return Qe(t,e,!0,!0),t})(),$U=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),Y0=(e={})=>(()=>{const t=$U();return Qe(t,e,!0,!0),t})(),xU=P('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),kU=(e={})=>(()=>{const t=xU();return Qe(t,e,!0,!0),t})(),CU=P('<div class="py-2"><h3 class="font-bold">プロフィール</h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">開く</button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">編集'),SU=P('<div class="py-2"><h3 class="font-bold">リレー</h3><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),Rc=P('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),EU=P('<div class="py-2"><h3 class="font-bold">時刻の表記</h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),TU=P('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),AU=P('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),IU=P('<div class="py-2"><h3 class="font-bold">リアクション</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">絵文字を選べるようにする</div></div><div class="flex w-full"><div class="flex-1">投稿にリアクションされた絵文字を表示する'),RU=P('<div class="py-2"><h3 class="font-bold">ミュートしたユーザ</h3><ul class="flex flex-col">'),LU=P('<div class="py-2"><h3 class="font-bold">ミュートした単語</h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">追加'),OU=P('<div class="py-2"><h3 class="font-bold">その他</h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">投稿欄を開いたままにする</div></div><div class="flex w-full"><div class="flex-1">画像をデフォルトで表示する</div></div><div class="flex w-full"><div class="flex-1">いいねやリポスト、フォロワーなどの数を隠す'),PU=P('<div class="p-4"><h2 class="flex-1 text-center text-lg font-bold">設定'),MU=()=>{const e=er(),{showProfile:t,showProfileEdit:r}=Tr();return(()=>{const s=CU(),o=s.firstChild,a=o.nextSibling,c=a.firstChild,u=c.nextSibling;return c.$$click=()=>Xt([e()])(([d])=>{t(d)}),u.$$click=()=>r(),s})()},BU=()=>{const{config:e,addRelay:t,removeRelay:r}=Be(),[s,o]=ye(""),a=c=>{c.preventDefault(),s().length!==0&&(t(s()),o(""))};return(()=>{const c=SU(),u=c.firstChild,d=u.nextSibling,p=d.nextSibling,h=p.firstChild;return I(d,$(Bt,{get each(){return e().relayUrls},children:v=>(()=>{const b=Rc(),_=b.firstChild,w=_.nextSibling;return I(_,v),w.$$click=()=>r(v),I(w,$(_s,{})),b})()})),p.addEventListener("submit",a),h.addEventListener("change",v=>o(v.currentTarget.value)),Le(()=>h.value=s()),c})()},UU=[{id:"relative",name:"相対表記",example:"7秒前"},{id:"absolute-short",name:"絶対表記 (短形式)",example:"昨日 23:55"},{id:"absolute-long",name:"絶対表記 (長形式)",example:"2020/11/8 21:02:53"}],DU=()=>{const{config:e,setConfig:t}=Be(),r=s=>{t(o=>({...o,dateFormat:s}))};return(()=>{const s=EU(),o=s.firstChild,a=o.nextSibling;return I(a,$(Bt,{each:UU,children:({id:c,name:u,example:d})=>(()=>{const p=TU(),h=p.firstChild,v=h.nextSibling;return h.$$click=()=>r(c),I(h,u),I(v,d),Le(b=>{const _=e().dateFormat===c,w=e().dateFormat===c,k=e().dateFormat!==c,S=e().dateFormat!==c;return _!==b._v$&&h.classList.toggle("bg-rose-300",b._v$=_),w!==b._v$2&&h.classList.toggle("text-white",b._v$2=w),k!==b._v$3&&h.classList.toggle("bg-white",b._v$3=k),S!==b._v$4&&h.classList.toggle("text-rose-300",b._v$4=S),b},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),p})()})),s})()},gs=e=>(()=>{const t=AU();return t.$$click=r=>e.onClick(r),Le(r=>{const s=!e.value,o=!e.value,a=!!e.value,c=!!e.value,u=e.value;return s!==r._v$5&&t.classList.toggle("bg-white",r._v$5=s),o!==r._v$6&&t.classList.toggle("justify-start",r._v$6=o),a!==r._v$7&&t.classList.toggle("bg-rose-300",r._v$7=a),c!==r._v$8&&t.classList.toggle("justify-end",r._v$8=c),u!==r._v$9&&St(t,"area-label",r._v$9=u),r},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),HU=()=>{const{config:e,setConfig:t}=Be(),r=()=>{t(o=>({...o,useEmojiReaction:!(o.useEmojiReaction??!1)}))},s=()=>{t(o=>({...o,showEmojiReaction:!(o.showEmojiReaction??!1)}))};return(()=>{const o=IU(),a=o.firstChild,c=a.nextSibling,u=c.firstChild;u.firstChild;const d=u.nextSibling;return d.firstChild,I(u,$(gs,{get value(){return e().useEmojiReaction},onClick:()=>r()}),null),I(d,$(gs,{get value(){return e().showEmojiReaction},onClick:()=>s()}),null),o})()},FU=()=>{const{config:e,removeMutedPubkey:t,addMutedKeyword:r,removeMutedKeyword:s}=Be(),[o,a]=ye(""),c=u=>{u.preventDefault(),o().length!==0&&(r(o()),a(""))};return[(()=>{const u=RU(),d=u.firstChild,p=d.nextSibling;return I(p,$(Bt,{get each(){return e().mutedPubkeys},children:h=>(()=>{const v=Rc(),b=v.firstChild,_=b.nextSibling;return I(b,$(Ca,{pubkey:h})),_.$$click=()=>t(h),I(_,$(_s,{})),v})()})),u})(),(()=>{const u=LU(),d=u.firstChild,p=d.nextSibling,h=p.nextSibling,v=h.firstChild;return I(p,$(Bt,{get each(){return e().mutedKeywords},children:b=>(()=>{const _=Rc(),w=_.firstChild,k=w.nextSibling;return I(w,b),k.$$click=()=>s(b),I(k,$(_s,{})),_})()})),h.addEventListener("submit",c),v.addEventListener("change",b=>a(b.currentTarget.value)),Le(()=>v.value=o()),u})()]},jU=()=>{const{config:e,setConfig:t}=Be(),r=()=>{t(a=>({...a,keepOpenPostForm:!(a.keepOpenPostForm??!1)}))},s=()=>{t(a=>({...a,showImage:!(a.showImage??!0)}))},o=()=>{t(a=>({...a,hideCount:!(a.hideCount??!1)}))};return(()=>{const a=OU(),c=a.firstChild,u=c.nextSibling,d=u.firstChild;d.firstChild;const p=d.nextSibling;p.firstChild;const h=p.nextSibling;return h.firstChild,I(d,$(gs,{get value(){return e().keepOpenPostForm},onClick:()=>r()}),null),I(p,$(gs,{get value(){return e().showImage},onClick:()=>s()}),null),I(h,$(gs,{get value(){return e().hideCount},onClick:()=>o()}),null),a})()},zU=e=>$(Rs,{get onClose(){return e.onClose},get children(){const t=PU();return t.firstChild,I(t,$(MU,{}),null),I(t,$(BU,{}),null),I(t,$(DU,{}),null),I(t,$(HU,{}),null),I(t,$(jU,{}),null),I(t,$(FU,{}),null),t}});it(["click"]);const NU=P('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),WU=P('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),qU=P('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),KU=()=>{let e,t;const{saveColumn:r}=Be(),s=Is(),[o,a]=ye(""),c=u=>{u.preventDefault(),r(lu({query:o()})),s({command:"moveToLastColumn"}).catch(d=>console.log(d)),e?.close(),a("")};return $(su,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=WU();return I(u,$(Y0,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=NU(),d=u.firstChild,p=d.nextSibling;u.addEventListener("submit",c),d.addEventListener("change",v=>a(v.currentTarget.value));const h=t;return typeof h=="function"?Rn(h,d):t=d,I(p,$(Y0,{})),Le(()=>d.value=o()),u}})},GU=()=>{let e;const{showAddColumn:t,showAbout:r}=Tr(),{config:s}=Be(),[o,a]=ye(!1),[c,u]=ye(!1),d=()=>{e?.focus(),e?.click()},p=()=>a(!0),h=()=>a(!1),v=()=>a(b=>!b);return Cc(()=>({commandType:"openPostForm",handler:()=>{p(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const b=qU(),_=b.firstChild,w=_.firstChild,k=w.firstChild,S=w.nextSibling,L=S.nextSibling,U=L.firstChild,M=U.nextSibling,R=M.nextSibling,E=R.firstChild,O=_.nextSibling;return k.$$click=()=>v(),I(k,$(kU,{})),I(w,$(KU,{}),null),U.$$click=()=>t(),I(U,$(Ep,{})),M.$$click=()=>u(N=>!N),I(M,$(wU,{})),R.$$click=()=>r(),I(O,$(fg,{textAreaRef:N=>{e=N},onClose:h})),I(b,$(se,{get when(){return c()},get children(){return $(zU,{onClose:()=>u(!1)})}}),null),Le(N=>{const q=Lc("images/rabbit_app_256.png"),ie=!!(o()||s().keepOpenPostForm),G=!(o()||s().keepOpenPostForm);return q!==N._v$&&St(E,"src",N._v$=q),ie!==N._v$2&&O.classList.toggle("static",N._v$2=ie),G!==N._v$3&&O.classList.toggle("hidden",N._v$3=G),N},{_v$:void 0,_v$2:void 0,_v$3:void 0}),b})()};it(["click"]);var VU=Cn,QU=function(){return VU.Date.now()},ZU=QU,XU=/\s/;function YU(e){for(var t=e.length;t--&&XU.test(e.charAt(t)););return t}var JU=YU,eD=JU,tD=/^\s+/;function nD(e){return e&&e.slice(0,eD(e)+1).replace(tD,"")}var rD=nD,iD=rD,J0=Pn,sD=Aa,e1=0/0,oD=/^[-+]0x[0-9a-f]+$/i,aD=/^0b[01]+$/i,lD=/^0o[0-7]+$/i,cD=parseInt;function uD(e){if(typeof e=="number")return e;if(sD(e))return e1;if(J0(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=J0(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=iD(e);var r=aD.test(e);return r||lD.test(e)?cD(e.slice(2),r?2:8):oD.test(e)?e1:+e}var fD=uD,dD=Pn,ac=ZU,t1=fD,hD="Expected a function",pD=Math.max,gD=Math.min;function vD(e,t,r){var s,o,a,c,u,d,p=0,h=!1,v=!1,b=!0;if(typeof e!="function")throw new TypeError(hD);t=t1(t)||0,dD(r)&&(h=!!r.leading,v="maxWait"in r,a=v?pD(t1(r.maxWait)||0,t):a,b="trailing"in r?!!r.trailing:b);function _(O){var N=s,q=o;return s=o=void 0,p=O,c=e.apply(q,N),c}function w(O){return p=O,u=setTimeout(L,t),h?_(O):c}function k(O){var N=O-d,q=O-p,ie=t-N;return v?gD(ie,a-q):ie}function S(O){var N=O-d,q=O-p;return d===void 0||N>=t||N<0||v&&q>=a}function L(){var O=ac();if(S(O))return U(O);u=setTimeout(L,k(O))}function U(O){return u=void 0,b&&s?_(O):(s=o=void 0,c)}function M(){u!==void 0&&clearTimeout(u),p=0,s=d=o=u=void 0}function R(){return u===void 0?c:U(ac())}function E(){var O=ac(),N=S(O);if(s=arguments,o=this,d=O,N){if(u===void 0)return w(d);if(v)return clearTimeout(u),u=setTimeout(L,t),_(d)}return u===void 0&&(u=setTimeout(L,t)),c}return E.cancel=M,E.flush=R,E}var mD=vD,bD=mD,yD=Pn,_D="Expected a function";function wD(e,t,r){var s=!0,o=!0;if(typeof e!="function")throw new TypeError(_D);return yD(r)&&(s="leading"in r?!!r.leading:s,o="trailing"in r?!!r.trailing:o),bD(e,t,{leading:s,maxWait:t,trailing:o})}var $D=wD;const xD=$s($D),kD=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],CD=e=>{const t=new Map;return e.forEach(r=>{t.set(r.key,r)}),t},SD=({shortcuts:e=kD,onShortcut:t})=>{const r=CD(e);kn(()=>{const s=xD(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=r.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",s),qr(()=>{window.removeEventListener("keydown",s)})})},ED=()=>{const e=Is();SD({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),r=>console.error(r))}})},TD=P('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),LD=()=>{ED();const e=Nw(),{persistStatus:t}=Gw(),r=xa(),{config:s,initializeColumns:o}=Be(),a=er();return _r(()=>{s().relayUrls.map(async c=>{(await r().ensureRelay(c)).on("notice",d=>{console.error(`NOTICE: ${c}: ${d}`)})})}),_r(()=>{const c=a();c!=null&&o({pubkey:c})}),kn(()=>{t().loggedIn||e("/hello")}),Ww(c=>{console.error("uncaught error: ",c)}),(()=>{const c=TD();return I(c,$(GU,{}),null),I(c,$(oR,{}),null),I(c,$(yU,{}),null),c})()};export{LD as default};
//# sourceMappingURL=Home-920a94d3.js.map
