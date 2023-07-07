import{S as Z0,s as Au,n as X4,i as Fp,a as qp,t as J4,f as e5,c as t5,r as Wp,b as n5,d as V0,g as r5,u as _i,e as K0,h as Ba,o as qn,j as un,k as Qs,l as dl,p as Zp,m as Qe,q as B,v as it,w as _e,x as A,y as b,z as le,A as Ze,B as i5,M as ze,C as s5,D as ln,E as On,F as vt,G as o5,H as Ae,I as a5,J as Wn,K as St,L as G0,N as Ge,O as l5,P as c5,Q as Zs,R as Q0,T as u5,U as d5}from"./index-2e73dea1.js";import{c as ts,u as Vi,a as f5,b as h5,r as ad,d as p5}from"./resolveAsset-7ffae3ed.js";class g5 extends Z0{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Vp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Iu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Iu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),Au(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Kp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(X4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Fp||this.currentResult.isStale||!qp(this.options.staleTime))return;const n=J4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Fp||this.options.enabled===!1||!qp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||e5.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=t!==i,f=d?t.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:v,error:_,errorUpdatedAt:$,fetchStatus:k,status:w}=g,C=!1,I=!1,S;if(n._optimisticResults){const D=this.hasListeners(),te=!D&&Vp(t,n),W=D&&Kp(t,i,n,o);(te||W)&&(k=t5(t.options.networkMode)?"fetching":"paused",v||(w="loading")),n._optimisticResults==="isRestoring"&&(k="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&h!=null&&h.isSuccess&&w!=="error")S=h.data,v=h.dataUpdatedAt,w=h.status,C=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)S=this.selectResult;else try{this.selectFn=n.select,S=n.select(g.data),S=Wp(a?.data,S,n),this.selectResult=S,this.selectError=null}catch(D){this.selectError=D}else S=g.data;if(typeof n.placeholderData<"u"&&typeof S>"u"&&w==="loading"){let D;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)D=a.data;else if(D=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof D<"u")try{D=n.select(D),this.selectError=null}catch(te){this.selectError=te}typeof D<"u"&&(w="success",S=Wp(a?.data,D,n),I=!0)}this.selectError&&(_=this.selectError,S=this.selectResult,$=Date.now(),w="error");const E=k==="fetching",T=w==="loading",O=w==="error";return{status:w,fetchStatus:k,isLoading:T,isSuccess:w==="success",isError:O,isInitialLoading:T&&E,data:S,dataUpdatedAt:v,error:_,errorUpdatedAt:$,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:E,isRefetching:E&&!T,isLoadingError:O&&g.dataUpdatedAt===0,isPaused:k==="paused",isPlaceholderData:I,isPreviousData:C,isRefetchError:O&&g.dataUpdatedAt!==0,isStale:ld(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,Au(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const f=d;return this.currentResult[f]!==n[f]&&u.has(f)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!n5(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){V0.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var l,u,d,f;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function m5(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Vp(e,t){return m5(e,t)||e.state.dataUpdatedAt>0&&Iu(e,t,t.refetchOnMount)}function Iu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&ld(e,t)}return!1}function Kp(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&ld(e,n)}function ld(e,t){return e.isStaleByTime(t.staleTime)}class v5 extends Z0{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),Au(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:r5(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){V0.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var l,u,d,f;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(f=this.mutateOptions).onSettled)==null||d.call(f,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)})})}}function y5(e){return typeof e=="function"}function Gp(e,t,n){if(!y5(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Y0(e,t){return typeof e=="function"?e(...t):!!e}function b5(e,t){const n=_i({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[l,u]=ts(a.getOptimisticResult(o)),[d,{refetch:f,mutate:h}]=K0(()=>new Promise($=>{l.isFetching&&l.isLoading||(Vi(l.data)===i&&$(void 0),$(Vi(l.data)))}));Ba(()=>{h(()=>Vi(l.data)),f()});let g=[];const v=a.subscribe($=>{g.push(()=>{Ba(()=>{const k={...Vi($)};k.data===void 0&&(k.data=i),u(Vi(k)),h(()=>Vi($.data)),f()})}),queueMicrotask(()=>{const k=g.pop();k&&k(),g=[]})});qn(()=>v()),un(()=>{a.setOptions(o,{listeners:!1})}),Qs(()=>{const $=n.defaultQueryOptions(e);a.setOptions($)}),Qs(dl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&Y0(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const _={get($,k){return k==="data"?d():Reflect.get($,k)}};return new Proxy(l,_)}function wi(e,t,n){const[i,o]=ts(Gp(e,t,n));return Qs(()=>{const a=Gp(e,t,n);o(a)}),b5(i,g5)}function pi(e,t,n){const[i,o]=ts(Zp(e,t,n)),a=_i({context:i.context}),l=new v5(a,i),u=(g,v)=>{l.mutate(g,v).catch(_5)},[d,f]=ts({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Qs(()=>{const g=Zp(e,t,n);o(g),l.setOptions(g)}),Qs(dl(()=>d.status,()=>{if(d.isError&&Y0(l.options.useErrorBoundary,[d.error]))throw d.error}));const h=l.subscribe(g=>{f({...g,mutate:u,mutateAsync:g.mutate})});return qn(h),d}function _5(){}const w5=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z">'),x5=(e={})=>(()=>{const t=w5();return Qe(t,e,!0,!0),t})(),$5=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),X0=(e={})=>(()=>{const t=$5();return Qe(t,e,!0,!0),t})(),k5=B('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),E5=B('<span class="inline-block h-4 w-4 text-gray-700">'),fs=e=>{const[t,n]=_e(!1),i=()=>n(o=>!o);return(()=>{const o=k5(),a=o.firstChild,l=a.firstChild,u=l.firstChild,d=l.nextSibling;return A(l,b(le,{get when(){return e.icon},keyed:!0,children:f=>(()=>{const h=E5();return A(h,f),h})()}),u),A(u,()=>e.name),d.$$click=()=>i(),A(d,b(X0,{})),A(o,b(le,{get when(){return t()},get children(){return e.settings()}}),null),o})()};it(["click"]);const C5=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),cd=(e={})=>(()=>{const t=C5();return Qe(t,e,!0,!0),t})();var $t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function go(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function mo(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var S5=typeof $t=="object"&&$t&&$t.Object===Object&&$t,J0=S5,T5=J0,A5=typeof self=="object"&&self&&self.Object===Object&&self,I5=T5||A5||Function("return this")(),Bn=I5,R5=Bn,O5=R5.Symbol,hs=O5,Qp=hs,e1=Object.prototype,L5=e1.hasOwnProperty,P5=e1.toString,Fs=Qp?Qp.toStringTag:void 0;function M5(e){var t=L5.call(e,Fs),n=e[Fs];try{e[Fs]=void 0;var i=!0}catch{}var o=P5.call(e);return i&&(t?e[Fs]=n:delete e[Fs]),o}var B5=M5,j5=Object.prototype,N5=j5.toString;function D5(e){return N5.call(e)}var U5=D5,Yp=hs,z5=B5,H5=U5,F5="[object Null]",q5="[object Undefined]",Xp=Yp?Yp.toStringTag:void 0;function W5(e){return e==null?e===void 0?q5:F5:Xp&&Xp in Object(e)?z5(e):H5(e)}var ps=W5;function Z5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Qn=Z5,V5=ps,K5=Qn,G5="[object AsyncFunction]",Q5="[object Function]",Y5="[object GeneratorFunction]",X5="[object Proxy]";function J5(e){if(!K5(e))return!1;var t=V5(e);return t==Q5||t==Y5||t==G5||t==X5}var t1=J5,e$=Bn,t$=e$["__core-js_shared__"],n$=t$,uu=n$,Jp=function(){var e=/[^.]+$/.exec(uu&&uu.keys&&uu.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function r$(e){return!!Jp&&Jp in e}var i$=r$,s$=Function.prototype,o$=s$.toString;function a$(e){if(e!=null){try{return o$.call(e)}catch{}try{return e+""}catch{}}return""}var n1=a$,l$=t1,c$=i$,u$=Qn,d$=n1,f$=/[\\^$.*+?()[\]{}|]/g,h$=/^\[object .+?Constructor\]$/,p$=Function.prototype,g$=Object.prototype,m$=p$.toString,v$=g$.hasOwnProperty,y$=RegExp("^"+m$.call(v$).replace(f$,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function b$(e){if(!u$(e)||c$(e))return!1;var t=l$(e)?y$:h$;return t.test(d$(e))}var _$=b$;function w$(e,t){return e?.[t]}var x$=w$,$$=_$,k$=x$;function E$(e,t){var n=k$(e,t);return $$(n)?n:void 0}var xi=E$,C$=xi,S$=C$(Object,"create"),fl=S$,eg=fl;function T$(){this.__data__=eg?eg(null):{},this.size=0}var A$=T$;function I$(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var R$=I$,O$=fl,L$="__lodash_hash_undefined__",P$=Object.prototype,M$=P$.hasOwnProperty;function B$(e){var t=this.__data__;if(O$){var n=t[e];return n===L$?void 0:n}return M$.call(t,e)?t[e]:void 0}var j$=B$,N$=fl,D$=Object.prototype,U$=D$.hasOwnProperty;function z$(e){var t=this.__data__;return N$?t[e]!==void 0:U$.call(t,e)}var H$=z$,F$=fl,q$="__lodash_hash_undefined__";function W$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=F$&&t===void 0?q$:t,this}var Z$=W$,V$=A$,K$=R$,G$=j$,Q$=H$,Y$=Z$;function gs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}gs.prototype.clear=V$;gs.prototype.delete=K$;gs.prototype.get=G$;gs.prototype.has=Q$;gs.prototype.set=Y$;var X$=gs;function J$(){this.__data__=[],this.size=0}var e8=J$;function t8(e,t){return e===t||e!==e&&t!==t}var ud=t8,n8=ud;function r8(e,t){for(var n=e.length;n--;)if(n8(e[n][0],t))return n;return-1}var hl=r8,i8=hl,s8=Array.prototype,o8=s8.splice;function a8(e){var t=this.__data__,n=i8(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():o8.call(t,n,1),--this.size,!0}var l8=a8,c8=hl;function u8(e){var t=this.__data__,n=c8(t,e);return n<0?void 0:t[n][1]}var d8=u8,f8=hl;function h8(e){return f8(this.__data__,e)>-1}var p8=h8,g8=hl;function m8(e,t){var n=this.__data__,i=g8(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var v8=m8,y8=e8,b8=l8,_8=d8,w8=p8,x8=v8;function ms(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ms.prototype.clear=y8;ms.prototype.delete=b8;ms.prototype.get=_8;ms.prototype.has=w8;ms.prototype.set=x8;var pl=ms,$8=xi,k8=Bn,E8=$8(k8,"Map"),dd=E8,tg=X$,C8=pl,S8=dd;function T8(){this.size=0,this.__data__={hash:new tg,map:new(S8||C8),string:new tg}}var A8=T8;function I8(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var R8=I8,O8=R8;function L8(e,t){var n=e.__data__;return O8(t)?n[typeof t=="string"?"string":"hash"]:n.map}var gl=L8,P8=gl;function M8(e){var t=P8(this,e).delete(e);return this.size-=t?1:0,t}var B8=M8,j8=gl;function N8(e){return j8(this,e).get(e)}var D8=N8,U8=gl;function z8(e){return U8(this,e).has(e)}var H8=z8,F8=gl;function q8(e,t){var n=F8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var W8=q8,Z8=A8,V8=B8,K8=D8,G8=H8,Q8=W8;function vs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}vs.prototype.clear=Z8;vs.prototype.delete=V8;vs.prototype.get=K8;vs.prototype.has=G8;vs.prototype.set=Q8;var fd=vs,Y8="__lodash_hash_undefined__";function X8(e){return this.__data__.set(e,Y8),this}var J8=X8;function e6(e){return this.__data__.has(e)}var t6=e6,n6=fd,r6=J8,i6=t6;function ja(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new n6;++t<n;)this.add(e[t])}ja.prototype.add=ja.prototype.push=r6;ja.prototype.has=i6;var r1=ja;function s6(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var o6=s6;function a6(e){return e!==e}var l6=a6;function c6(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var u6=c6,d6=o6,f6=l6,h6=u6;function p6(e,t,n){return t===t?h6(e,t,n):d6(e,f6,n)}var g6=p6,m6=g6;function v6(e,t){var n=e==null?0:e.length;return!!n&&m6(e,t,0)>-1}var y6=v6;function b6(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var _6=b6;function w6(e,t){return e.has(t)}var i1=w6,x6=xi,$6=Bn,k6=x6($6,"Set"),s1=k6;function E6(){}var C6=E6;function S6(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var hd=S6,du=s1,T6=C6,A6=hd,I6=1/0,R6=du&&1/A6(new du([,-0]))[1]==I6?function(e){return new du(e)}:T6,O6=R6,L6=r1,P6=y6,M6=_6,B6=i1,j6=O6,N6=hd,D6=200;function U6(e,t,n){var i=-1,o=P6,a=e.length,l=!0,u=[],d=u;if(n)l=!1,o=M6;else if(a>=D6){var f=t?null:j6(e);if(f)return N6(f);l=!1,o=B6,d=new L6}else d=t?[]:u;e:for(;++i<a;){var h=e[i],g=t?t(h):h;if(h=n||h!==0?h:0,l&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;t&&d.push(g),u.push(h)}else o(d,g,n)||(d!==u&&d.push(g),u.push(h))}return u}var o1=U6,z6=o1;function H6(e){return e&&e.length?z6(e):[]}var F6=H6;const yr=go(F6),q6=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),Vs=e=>(()=>{const t=q6();return A(t,()=>e.children),t})();function Ru(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function W6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function a1(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function Z6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ru(e.outputLen),Ru(e.blockLen)}function V6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function K6(e,t){a1(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const di={number:Ru,bool:W6,bytes:a1,hash:Z6,exists:V6,output:K6},Ia=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,G6=Object.freeze(Object.defineProperty({__proto__:null,crypto:Ia},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Q6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),Y6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Tn=(e,t)=>e<<32-t|e>>>t,l1=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!l1)throw new Error("Non little-endian hardware is not supported");const X6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function sn(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=X6[e[n]];return t}function Zr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const c1=async()=>{};async function J6(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await c1(),i+=a)}}function pd(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function vo(e){if(typeof e=="string"&&(e=pd(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function fi(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class gd{clone(){return this._cloneInto()}}const e7=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function t7(e,t){if(t!==void 0&&(typeof t!="object"||!e7(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function ml(e){const t=i=>e().update(vo(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function n7(e){const t=(i,o)=>e(o).update(vo(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function vl(e=32){if(Ia&&typeof Ia.getRandomValues=="function")return Ia.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const r7=Object.freeze(Object.defineProperty({__proto__:null,Hash:gd,asyncLoop:J6,bytesToHex:sn,checkOpts:t7,concatBytes:fi,createView:gi,hexToBytes:Zr,isLE:l1,nextTick:c1,randomBytes:vl,rotr:Tn,toBytes:vo,u32:Y6,u8:Q6,utf8ToBytes:pd,wrapConstructor:ml,wrapConstructorWithOpts:n7},Symbol.toStringTag,{value:"Module"}));function i7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+f,u,i)}let u1=class extends gd{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){di.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=vo(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=gi(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){di.exists(this),di.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;i7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,h=this.get();if(f>h.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,h[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}};const s7=(e,t,n)=>e&t^~e&n,o7=(e,t,n)=>e&t^e&n^t&n,a7=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Br=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),jr=new Uint32Array(64);class d1 extends u1{constructor(){super(64,32,8,!1),this.A=Br[0]|0,this.B=Br[1]|0,this.C=Br[2]|0,this.D=Br[3]|0,this.E=Br[4]|0,this.F=Br[5]|0,this.G=Br[6]|0,this.H=Br[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[t,n,i,o,a,l,u,d]}set(t,n,i,o,a,l,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)jr[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const v=jr[g-15],_=jr[g-2],$=Tn(v,7)^Tn(v,18)^v>>>3,k=Tn(_,17)^Tn(_,19)^_>>>10;jr[g]=k+jr[g-7]+$+jr[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:f,H:h}=this;for(let g=0;g<64;g++){const v=Tn(u,6)^Tn(u,11)^Tn(u,25),_=h+v+s7(u,d,f)+a7[g]+jr[g]|0,k=(Tn(i,2)^Tn(i,13)^Tn(i,22))+o7(i,o,a)|0;h=f,f=d,d=u,u=l+_|0,l=a,a=o,o=i,i=_+k|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,f=f+this.G|0,h=h+this.H|0,this.set(i,o,a,l,u,d,f,h)}roundClean(){jr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class l7 extends d1{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Zn=ml(()=>new d1),c7=ml(()=>new l7),u7=Object.freeze(Object.defineProperty({__proto__:null,sha224:c7,sha256:Zn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const f1=BigInt(0),yl=BigInt(1),d7=BigInt(2),bl=e=>e instanceof Uint8Array,f7=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function ns(e){if(!bl(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=f7[e[n]];return t}function h1(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function md(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function rs(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function Ht(e){return md(ns(e))}function vd(e){if(!bl(e))throw new Error("Uint8Array expected");return md(ns(Uint8Array.from(e).reverse()))}const qr=(e,t)=>rs(e.toString(16).padStart(t*2,"0")),p1=(e,t)=>qr(e,t).reverse(),h7=e=>rs(h1(e));function Ot(e,t,n){let i;if(typeof t=="string")try{i=rs(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(bl(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function on(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!bl(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function p7(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function _l(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function g7(e){let t;for(t=0;e>f1;e>>=yl,t+=1);return t}const m7=(e,t)=>e>>BigInt(t)&yl,v7=(e,t,n)=>e|(n?yl:f1)<<BigInt(t),yd=e=>(d7<<BigInt(e-1))-yl,fu=e=>new Uint8Array(e),ng=e=>Uint8Array.from(e);function g1(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=fu(e),o=fu(e),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=fu())=>{o=u(ng([0]),g),i=u(),g.length!==0&&(o=u(ng([1]),g),i=u())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<t;){i=u();const _=i.slice();v.push(_),g+=i.length}return on(...v)};return(g,v)=>{l(),d(g);let _;for(;!(_=v(f()));)d();return l(),_}}const y7={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function ys(e,t,n={}){const i=(o,a,l)=>{const u=y7[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(l&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const b7=Object.freeze(Object.defineProperty({__proto__:null,bitGet:m7,bitLen:g7,bitMask:yd,bitSet:v7,bytesToHex:ns,bytesToNumberBE:Ht,bytesToNumberLE:vd,concatBytes:on,createHmacDrbg:g1,ensureBytes:Ot,equalBytes:p7,hexToBytes:rs,hexToNumber:md,numberToBytesBE:qr,numberToBytesLE:p1,numberToHexUnpadded:h1,numberToVarBytesBE:h7,utf8ToBytes:_l,validateObject:ys},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ct=BigInt(0),mt=BigInt(1),ci=BigInt(2),_7=BigInt(3),Ou=BigInt(4),rg=BigInt(5),ig=BigInt(8);BigInt(9);BigInt(16);function xt(e,t){const n=e%t;return n>=Ct?n:t+n}function w7(e,t,n){if(n<=Ct||t<Ct)throw new Error("Expected power/modulo > 0");if(n===mt)return Ct;let i=mt;for(;t>Ct;)t&mt&&(i=i*e%n),e=e*e%n,t>>=mt;return i}function bn(e,t,n){let i=e;for(;t-- >Ct;)i*=i,i%=n;return i}function Lu(e,t){if(e===Ct||t<=Ct)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=xt(e,t),i=t,o=Ct,a=mt;for(;n!==Ct;){const u=i/n,d=i%n,f=o-a*u;i=n,n=d,o=a,a=f}if(i!==mt)throw new Error("invert: does not exist");return xt(o,t)}function x7(e){const t=(e-mt)/ci;let n,i,o;for(n=e-mt,i=0;n%ci===Ct;n/=ci,i++);for(o=ci;o<e&&w7(o,t,e)!==e-mt;o++);if(i===1){const l=(e+mt)/Ou;return function(d,f){const h=d.pow(f,l);if(!d.eql(d.sqr(h),f))throw new Error("Cannot find square root");return h}}const a=(n+mt)/ci;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let f=i,h=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let _=1;for(let k=u.sqr(v);_<f&&!u.eql(k,u.ONE);_++)k=u.sqr(k);const $=u.pow(h,mt<<BigInt(f-_-1));h=u.sqr($),g=u.mul(g,$),v=u.mul(v,h),f=_}return g}}function $7(e){if(e%Ou===_7){const t=(e+mt)/Ou;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%ig===rg){const t=(e-rg)/ig;return function(i,o){const a=i.mul(o,ci),l=i.pow(a,t),u=i.mul(o,l),d=i.mul(i.mul(u,ci),l),f=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return x7(e)}const k7=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function m1(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=k7.reduce((i,o)=>(i[o]="function",i),t);return ys(e,n)}function E7(e,t,n){if(n<Ct)throw new Error("Expected power > 0");if(n===Ct)return e.ONE;if(n===mt)return t;let i=e.ONE,o=t;for(;n>Ct;)n&mt&&(i=e.mul(i,o)),o=e.sqr(o),n>>=mt;return i}function C7(e,t){const n=new Array(t.length),i=t.reduce((a,l,u)=>e.is0(l)?a:(n[u]=a,e.mul(a,l)),e.ONE),o=e.inv(i);return t.reduceRight((a,l,u)=>e.is0(l)?a:(n[u]=e.mul(a,n[u]),e.mul(a,l)),o),n}function bd(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function S7(e,t,n=!1,i={}){if(e<=Ct)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=bd(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=$7(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:yd(o),ZERO:Ct,ONE:mt,create:d=>xt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return Ct<=d&&d<e},is0:d=>d===Ct,isOdd:d=>(d&mt)===mt,neg:d=>xt(-d,e),eql:(d,f)=>d===f,sqr:d=>xt(d*d,e),add:(d,f)=>xt(d+f,e),sub:(d,f)=>xt(d-f,e),mul:(d,f)=>xt(d*f,e),pow:(d,f)=>E7(u,d,f),div:(d,f)=>xt(d*Lu(f,e),e),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>Lu(d,e),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>C7(u,d),cmov:(d,f,h)=>h?f:d,toBytes:d=>n?p1(d,a):qr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?vd(d):Ht(d)}});return Object.freeze(u)}function T7(e,t,n=!1){e=Ot("privateHash",e);const i=e.length,o=bd(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?vd(e):Ht(e);return xt(a,t-mt)+mt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const A7=BigInt(0),hu=BigInt(1);function I7(e,t){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(t/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=e.ZERO,u=o;for(;a>A7;)a&hu&&(l=l.add(u)),u=u.double(),a>>=hu;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let f=o,h=f;for(let g=0;g<l;g++){h=f,d.push(h);for(let v=1;v<u;v++)h=h.add(f),d.push(h);f=h.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let f=e.ZERO,h=e.BASE;const g=BigInt(2**o-1),v=2**o,_=BigInt(o);for(let $=0;$<u;$++){const k=$*d;let w=Number(l&g);l>>=_,w>d&&(w-=v,l+=hu);const C=k,I=k+Math.abs(w)-1,S=$%2!==0,E=w<0;w===0?h=h.add(n(S,a[C])):f=f.add(n(E,a[I]))}return{p:f,f:h}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,u(f))),this.wNAF(d,f,l)}}}function v1(e){return m1(e.Fp),ys(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...bd(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function R7(e){const t=v1(e);ys(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:O7,hexToBytes:L7}=b7,hi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=hi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:O7(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=hi,n=typeof e=="string"?L7(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=hi._parseInt(n.subarray(2)),{d:l,l:u}=hi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(e){const t=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const h=f.toString(16);return h.length&1?`0${h}`:h},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},In=BigInt(0),yt=BigInt(1),hr=BigInt(2),Na=BigInt(3),sg=BigInt(4);function P7(e){const t=R7(e),{Fp:n}=t,i=t.toBytes||(($,k,w)=>{const C=k.toAffine();return on(Uint8Array.from([4]),n.toBytes(C.x),n.toBytes(C.y))}),o=t.fromBytes||($=>{const k=$.subarray(1),w=n.fromBytes(k.subarray(0,n.BYTES)),C=n.fromBytes(k.subarray(n.BYTES,2*n.BYTES));return{x:w,y:C}});function a($){const{a:k,b:w}=t,C=n.sqr($),I=n.mul(C,$);return n.add(n.add(I,n.mul($,k)),w)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function l($){return typeof $=="bigint"&&In<$&&$<t.n}function u($){if(!l($))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d($){const{allowedPrivateKeyLengths:k,nByteLength:w,wrapPrivateKey:C,n:I}=t;if(k&&typeof $!="bigint"){if($ instanceof Uint8Array&&($=ns($)),typeof $!="string"||!k.includes($.length))throw new Error("Invalid key");$=$.padStart(w*2,"0")}let S;try{S=typeof $=="bigint"?$:Ht(Ot("private key",$,w))}catch{throw new Error(`private key must be ${w} bytes, hex or bigint, not ${typeof $}`)}return C&&(S=xt(S,I)),u(S),S}const f=new Map;function h($){if(!($ instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(k,w,C){if(this.px=k,this.py=w,this.pz=C,k==null||!n.isValid(k))throw new Error("x required");if(w==null||!n.isValid(w))throw new Error("y required");if(C==null||!n.isValid(C))throw new Error("z required")}static fromAffine(k){const{x:w,y:C}=k||{};if(!k||!n.isValid(w)||!n.isValid(C))throw new Error("invalid affine point");if(k instanceof g)throw new Error("projective point not allowed");const I=S=>n.eql(S,n.ZERO);return I(w)&&I(C)?g.ZERO:new g(w,C,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(k){const w=n.invertBatch(k.map(C=>C.pz));return k.map((C,I)=>C.toAffine(w[I])).map(g.fromAffine)}static fromHex(k){const w=g.fromAffine(o(Ot("pointHex",k)));return w.assertValidity(),w}static fromPrivateKey(k){return g.BASE.multiply(d(k))}_setWindowSize(k){this._WINDOW_SIZE=k,f.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:k,y:w}=this.toAffine();if(!n.isValid(k)||!n.isValid(w))throw new Error("bad point: x or y not FE");const C=n.sqr(w),I=a(k);if(!n.eql(C,I))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:k}=this.toAffine();if(n.isOdd)return!n.isOdd(k);throw new Error("Field doesn't support isOdd")}equals(k){h(k);const{px:w,py:C,pz:I}=this,{px:S,py:E,pz:T}=k,O=n.eql(n.mul(w,T),n.mul(S,I)),j=n.eql(n.mul(C,T),n.mul(E,I));return O&&j}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:k,b:w}=t,C=n.mul(w,Na),{px:I,py:S,pz:E}=this;let T=n.ZERO,O=n.ZERO,j=n.ZERO,D=n.mul(I,I),te=n.mul(S,S),W=n.mul(E,E),Y=n.mul(I,S);return Y=n.add(Y,Y),j=n.mul(I,E),j=n.add(j,j),T=n.mul(k,j),O=n.mul(C,W),O=n.add(T,O),T=n.sub(te,O),O=n.add(te,O),O=n.mul(T,O),T=n.mul(Y,T),j=n.mul(C,j),W=n.mul(k,W),Y=n.sub(D,W),Y=n.mul(k,Y),Y=n.add(Y,j),j=n.add(D,D),D=n.add(j,D),D=n.add(D,W),D=n.mul(D,Y),O=n.add(O,D),W=n.mul(S,E),W=n.add(W,W),D=n.mul(W,Y),T=n.sub(T,D),j=n.mul(W,te),j=n.add(j,j),j=n.add(j,j),new g(T,O,j)}add(k){h(k);const{px:w,py:C,pz:I}=this,{px:S,py:E,pz:T}=k;let O=n.ZERO,j=n.ZERO,D=n.ZERO;const te=t.a,W=n.mul(t.b,Na);let Y=n.mul(w,S),Z=n.mul(C,E),Q=n.mul(I,T),se=n.add(w,C),q=n.add(S,E);se=n.mul(se,q),q=n.add(Y,Z),se=n.sub(se,q),q=n.add(w,I);let J=n.add(S,T);return q=n.mul(q,J),J=n.add(Y,Q),q=n.sub(q,J),J=n.add(C,I),O=n.add(E,T),J=n.mul(J,O),O=n.add(Z,Q),J=n.sub(J,O),D=n.mul(te,q),O=n.mul(W,Q),D=n.add(O,D),O=n.sub(Z,D),D=n.add(Z,D),j=n.mul(O,D),Z=n.add(Y,Y),Z=n.add(Z,Y),Q=n.mul(te,Q),q=n.mul(W,q),Z=n.add(Z,Q),Q=n.sub(Y,Q),Q=n.mul(te,Q),q=n.add(q,Q),Y=n.mul(Z,q),j=n.add(j,Y),Y=n.mul(J,q),O=n.mul(se,O),O=n.sub(O,Y),Y=n.mul(se,Z),D=n.mul(J,D),D=n.add(D,Y),new g(O,j,D)}subtract(k){return this.add(k.negate())}is0(){return this.equals(g.ZERO)}wNAF(k){return _.wNAFCached(this,f,k,w=>{const C=n.invertBatch(w.map(I=>I.pz));return w.map((I,S)=>I.toAffine(C[S])).map(g.fromAffine)})}multiplyUnsafe(k){const w=g.ZERO;if(k===In)return w;if(u(k),k===yt)return this;const{endo:C}=t;if(!C)return _.unsafeLadder(this,k);let{k1neg:I,k1:S,k2neg:E,k2:T}=C.splitScalar(k),O=w,j=w,D=this;for(;S>In||T>In;)S&yt&&(O=O.add(D)),T&yt&&(j=j.add(D)),D=D.double(),S>>=yt,T>>=yt;return I&&(O=O.negate()),E&&(j=j.negate()),j=new g(n.mul(j.px,C.beta),j.py,j.pz),O.add(j)}multiply(k){u(k);let w=k,C,I;const{endo:S}=t;if(S){const{k1neg:E,k1:T,k2neg:O,k2:j}=S.splitScalar(w);let{p:D,f:te}=this.wNAF(T),{p:W,f:Y}=this.wNAF(j);D=_.constTimeNegate(E,D),W=_.constTimeNegate(O,W),W=new g(n.mul(W.px,S.beta),W.py,W.pz),C=D.add(W),I=te.add(Y)}else{const{p:E,f:T}=this.wNAF(w);C=E,I=T}return g.normalizeZ([C,I])[0]}multiplyAndAddUnsafe(k,w,C){const I=g.BASE,S=(T,O)=>O===In||O===yt||!T.equals(I)?T.multiplyUnsafe(O):T.multiply(O),E=S(this,w).add(S(k,C));return E.is0()?void 0:E}toAffine(k){const{px:w,py:C,pz:I}=this,S=this.is0();k==null&&(k=S?n.ONE:n.inv(I));const E=n.mul(w,k),T=n.mul(C,k),O=n.mul(I,k);if(S)return{x:n.ZERO,y:n.ZERO};if(!n.eql(O,n.ONE))throw new Error("invZ was invalid");return{x:E,y:T}}isTorsionFree(){const{h:k,isTorsionFree:w}=t;if(k===yt)return!0;if(w)return w(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:k,clearCofactor:w}=t;return k===yt?this:w?w(g,this):this.multiplyUnsafe(t.h)}toRawBytes(k=!0){return this.assertValidity(),i(g,this,k)}toHex(k=!0){return ns(this.toRawBytes(k))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=t.nBitLength,_=I7(g,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function M7(e){const t=v1(e);return ys(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function B7(e){const t=M7(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function l(q){return In<q&&q<n.ORDER}function u(q){return xt(q,i)}function d(q){return Lu(q,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:h,weierstrassEquation:g,isWithinCurveOrder:v}=P7({...t,toBytes(q,J,fe){const pe=J.toAffine(),ne=n.toBytes(pe.x),he=on;return fe?he(Uint8Array.from([J.hasEvenY()?2:3]),ne):he(Uint8Array.from([4]),ne,n.toBytes(pe.y))},fromBytes(q){const J=q.length,fe=q[0],pe=q.subarray(1);if(J===o&&(fe===2||fe===3)){const ne=Ht(pe);if(!l(ne))throw new Error("Point is not on curve");const he=g(ne);let ge=n.sqrt(he);const Pe=(ge&yt)===yt;return(fe&1)===1!==Pe&&(ge=n.neg(ge)),{x:ne,y:ge}}else if(J===a&&fe===4){const ne=n.fromBytes(pe.subarray(0,n.BYTES)),he=n.fromBytes(pe.subarray(n.BYTES,2*n.BYTES));return{x:ne,y:he}}else throw new Error(`Point of length ${J} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),_=q=>ns(qr(q,t.nByteLength));function $(q){const J=i>>yt;return q>J}function k(q){return $(q)?u(-q):q}const w=(q,J,fe)=>Ht(q.slice(J,fe));class C{constructor(J,fe,pe){this.r=J,this.s=fe,this.recovery=pe,this.assertValidity()}static fromCompact(J){const fe=t.nByteLength;return J=Ot("compactSignature",J,fe*2),new C(w(J,0,fe),w(J,fe,2*fe))}static fromDER(J){const{r:fe,s:pe}=hi.toSig(Ot("DER",J));return new C(fe,pe)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(J){return new C(this.r,this.s,J)}recoverPublicKey(J){const{r:fe,s:pe,recovery:ne}=this,he=j(Ot("msgHash",J));if(ne==null||![0,1,2,3].includes(ne))throw new Error("recovery id invalid");const ge=ne===2||ne===3?fe+t.n:fe;if(ge>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const Pe=ne&1?"03":"02",Me=f.fromHex(Pe+_(ge)),ee=d(ge),V=u(-he*ee),oe=u(pe*ee),ve=f.BASE.multiplyAndAddUnsafe(Me,V,oe);if(!ve)throw new Error("point at infinify");return ve.assertValidity(),ve}hasHighS(){return $(this.s)}normalizeS(){return this.hasHighS()?new C(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return rs(this.toDERHex())}toDERHex(){return hi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return rs(this.toCompactHex())}toCompactHex(){return _(this.r)+_(this.s)}}const I={isValidPrivateKey(q){try{return h(q),!0}catch{return!1}},normPrivateKeyToScalar:h,randomPrivateKey:()=>{const q=t.randomBytes(n.BYTES+8),J=T7(q,i);return qr(J,t.nByteLength)},precompute(q=8,J=f.BASE){return J._setWindowSize(q),J.multiply(BigInt(3)),J}};function S(q,J=!0){return f.fromPrivateKey(q).toRawBytes(J)}function E(q){const J=q instanceof Uint8Array,fe=typeof q=="string",pe=(J||fe)&&q.length;return J?pe===o||pe===a:fe?pe===2*o||pe===2*a:q instanceof f}function T(q,J,fe=!0){if(E(q))throw new Error("first arg must be private key");if(!E(J))throw new Error("second arg must be public key");return f.fromHex(J).multiply(h(q)).toRawBytes(fe)}const O=t.bits2int||function(q){const J=Ht(q),fe=q.length*8-t.nBitLength;return fe>0?J>>BigInt(fe):J},j=t.bits2int_modN||function(q){return u(O(q))},D=yd(t.nBitLength);function te(q){if(typeof q!="bigint")throw new Error("bigint expected");if(!(In<=q&&q<D))throw new Error(`bigint expected < 2^${t.nBitLength}`);return qr(q,t.nByteLength)}function W(q,J,fe=Y){if(["recovered","canonical"].some(re=>re in fe))throw new Error("sign() legacy options not supported");const{hash:pe,randomBytes:ne}=t;let{lowS:he,prehash:ge,extraEntropy:Pe}=fe;he==null&&(he=!0),q=Ot("msgHash",q),ge&&(q=Ot("prehashed msgHash",pe(q)));const Me=j(q),ee=h(J),V=[te(ee),te(Me)];if(Pe!=null){const re=Pe===!0?ne(n.BYTES):Pe;V.push(Ot("extraEntropy",re,n.BYTES))}const oe=on(...V),ve=Me;function F(re){const He=O(re);if(!v(He))return;const at=d(He),st=f.BASE.multiply(He).toAffine(),Be=u(st.x);if(Be===In)return;const qe=u(at*u(ve+Be*ee));if(qe===In)return;let Tt=(st.x===Be?0:2)|Number(st.y&yt),wn=qe;return he&&$(qe)&&(wn=k(qe),Tt^=1),new C(Be,wn,Tt)}return{seed:oe,k2sig:F}}const Y={lowS:t.lowS,prehash:!1},Z={lowS:t.lowS,prehash:!1};function Q(q,J,fe=Y){const{seed:pe,k2sig:ne}=W(q,J,fe);return g1(t.hash.outputLen,t.nByteLength,t.hmac)(pe,ne)}f.BASE._setWindowSize(8);function se(q,J,fe,pe=Z){const ne=q;if(J=Ot("msgHash",J),fe=Ot("publicKey",fe),"strict"in pe)throw new Error("options.strict was renamed to lowS");const{lowS:he,prehash:ge}=pe;let Pe,Me;try{if(typeof ne=="string"||ne instanceof Uint8Array)try{Pe=C.fromDER(ne)}catch(st){if(!(st instanceof hi.Err))throw st;Pe=C.fromCompact(ne)}else if(typeof ne=="object"&&typeof ne.r=="bigint"&&typeof ne.s=="bigint"){const{r:st,s:Be}=ne;Pe=new C(st,Be)}else throw new Error("PARSE");Me=f.fromHex(fe)}catch(st){if(st.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(he&&Pe.hasHighS())return!1;ge&&(J=t.hash(J));const{r:ee,s:V}=Pe,oe=j(J),ve=d(V),F=u(oe*ve),re=u(ee*ve),He=f.BASE.multiplyAndAddUnsafe(Me,F,re)?.toAffine();return He?u(He.x)===ee:!1}return{CURVE:t,getPublicKey:S,getSharedSecret:T,sign:Q,verify:se,ProjectivePoint:f,Signature:C,utils:I}}function j7(e,t){const n=e.ORDER;let i=In;for(let v=n-yt;v%hr===In;v/=hr)i+=yt;const o=i,a=(n-yt)/hr**o,l=(a-yt)/hr,u=hr**o-yt,d=hr**(o-yt),f=e.pow(t,a),h=e.pow(t,(a+yt)/hr);let g=(v,_)=>{let $=f,k=e.pow(_,u),w=e.sqr(k);w=e.mul(w,_);let C=e.mul(v,w);C=e.pow(C,l),C=e.mul(C,k),k=e.mul(C,_),w=e.mul(C,v);let I=e.mul(w,k);C=e.pow(I,d);let S=e.eql(C,e.ONE);k=e.mul(w,h),C=e.mul(I,$),w=e.cmov(k,w,S),I=e.cmov(C,I,S);for(let E=o;E>yt;E--){let T=hr**(E-hr),O=e.pow(I,T);const j=e.eql(O,e.ONE);k=e.mul(w,$),$=e.mul($,$),O=e.mul(I,$),w=e.cmov(k,w,j),I=e.cmov(O,I,j)}return{isValid:S,value:w}};if(e.ORDER%sg===Na){const v=(e.ORDER-Na)/sg,_=e.sqrt(e.neg(t));g=($,k)=>{let w=e.sqr(k);const C=e.mul($,k);w=e.mul(w,C);let I=e.pow(w,v);I=e.mul(I,C);const S=e.mul(I,_),E=e.mul(e.sqr(I),k),T=e.eql(E,$);let O=e.cmov(S,I,T);return{isValid:T,value:O}}}return g}function N7(e,t){if(m1(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=j7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,l,u,d,f,h,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),l=e.add(a,e.ONE),l=e.mul(l,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(l),f=e.sqr(u),d=e.mul(f,t.A),a=e.add(a,d),a=e.mul(a,l),f=e.mul(f,u),d=e.mul(f,t.B),a=e.add(a,d),h=e.mul(o,l);const{isValid:v,value:_}=n(a,f);g=e.mul(o,i),g=e.mul(g,_),h=e.cmov(h,l,v),g=e.cmov(g,_,v);const $=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,$),h=e.div(h,u),{x:h,y:g}}}function D7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return _l(e);throw new Error("DST must be Uint8Array or string")}const U7=Ht;function Ur(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function z7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function Ys(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function _d(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function H7(e,t,n,i){Ys(e),Ys(t),_d(n),t.length>255&&(t=i(on(_l("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,l=Math.ceil(n/o);if(l>255)throw new Error("Invalid xmd length");const u=on(t,Ur(t.length,1)),d=Ur(0,a),f=Ur(n,2),h=new Array(l),g=i(on(d,e,f,Ur(0,1),u));h[0]=i(on(g,Ur(1,1),u));for(let _=1;_<=l;_++){const $=[z7(g,h[_-1]),Ur(_+1,1),u];h[_]=i(on(...$))}return on(...h).slice(0,n)}function F7(e,t,n,i,o){if(Ys(e),Ys(t),_d(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(_l("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(Ur(n,2)).update(t).update(Ur(t.length,1)).digest()}function og(e,t,n){ys(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:l,expand:u,DST:d}=n;Ys(e),_d(t);const f=D7(d),h=i.toString(2).length,g=Math.ceil((h+o)/8),v=t*a*g;let _;if(u==="xmd")_=H7(e,f,v,l);else if(u==="xof")_=F7(e,f,v,o,l);else if(u==="_internal_pass")_=e;else throw new Error('expand must be "xmd" or "xof"');const $=new Array(t);for(let k=0;k<t;k++){const w=new Array(a);for(let C=0;C<a;C++){const I=g*(C+k*a),S=_.subarray(I,I+g);w[C]=xt(U7(S),i)}$[k]=w}return $}function q7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,l,u,d]=n.map(f=>f.reduce((h,g)=>e.add(e.mul(h,i),g)));return i=e.div(a,l),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function W7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=og(i,2,{...n,DST:n.DST,...o}),l=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=l.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=og(i,1,{...n,DST:n.encodeDST,...o}),l=e.fromAffine(t(a[0])).clearCofactor();return l.assertValidity(),l}}}class y1 extends gd{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,di.hash(t);const i=vo(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=t.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(t){return di.exists(this),this.iHash.update(t),this}digestInto(t){di.exists(this),di.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=l,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Da=(e,t,n)=>new y1(e,t).update(n).digest();Da.create=(e,t)=>new y1(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Z7(e){return{hash:e,hmac:(t,...n)=>Da(e,t,fi(...n)),randomBytes:vl}}function V7(e,t){const n=i=>B7({...e,...Z7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const wl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ua=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),b1=BigInt(1),za=BigInt(2),ag=(e,t)=>(e+t/za)/t;function _1(e){const t=wl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),f=e*e*e%t,h=f*f*e%t,g=bn(h,n,t)*h%t,v=bn(g,n,t)*h%t,_=bn(v,za,t)*f%t,$=bn(_,o,t)*_%t,k=bn($,a,t)*$%t,w=bn(k,u,t)*k%t,C=bn(w,d,t)*w%t,I=bn(C,u,t)*k%t,S=bn(I,n,t)*h%t,E=bn(S,l,t)*$%t,T=bn(E,i,t)*f%t,O=bn(T,za,t);if(!Vr.eql(Vr.sqr(O),e))throw new Error("Cannot find square root");return O}const Vr=S7(wl,void 0,void 0,{sqrt:_1}),zt=V7({a:BigInt(0),b:BigInt(7),Fp:Vr,n:Ua,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=Ua,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-b1*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=ag(a*e,t),d=ag(-i*e,t);let f=xt(e-u*n-d*o,t),h=xt(-u*i-d*a,t);const g=f>l,v=h>l;if(g&&(f=t-f),v&&(h=t-h),f>l||h>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:f,k2neg:v,k2:h}}}},Zn),xl=BigInt(0),w1=e=>typeof e=="bigint"&&xl<e&&e<wl,K7=e=>typeof e=="bigint"&&xl<e&&e<Ua,lg={};function Ha(e,...t){let n=lg[e];if(n===void 0){const i=Zn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=on(i,i),lg[e]=n}return Zn(on(n,...t))}const wd=e=>e.toRawBytes(!0).slice(1),Pu=e=>qr(e,32),pu=e=>xt(e,wl),Xs=e=>xt(e,Ua),xd=zt.ProjectivePoint,G7=(e,t,n)=>xd.BASE.multiplyAndAddUnsafe(e,t,n);function Mu(e){let t=zt.utils.normPrivateKeyToScalar(e),n=xd.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Xs(-t),bytes:wd(n)}}function x1(e){if(!w1(e))throw new Error("bad x: need 0 < x < p");const t=pu(e*e),n=pu(t*e+BigInt(7));let i=_1(n);i%za!==xl&&(i=pu(-i));const o=new xd(e,i,b1);return o.assertValidity(),o}function $1(...e){return Xs(Ht(Ha("BIP0340/challenge",...e)))}function Q7(e){return Mu(e).bytes}function Y7(e,t,n=vl(32)){const i=Ot("message",e),{bytes:o,scalar:a}=Mu(t),l=Ot("auxRand",n,32),u=Pu(a^Ht(Ha("BIP0340/aux",l))),d=Ha("BIP0340/nonce",u,o,i),f=Xs(Ht(d));if(f===xl)throw new Error("sign failed: k is zero");const{bytes:h,scalar:g}=Mu(f),v=$1(h,o,i),_=new Uint8Array(64);if(_.set(h,0),_.set(Pu(Xs(g+v*a)),32),!k1(_,i,o))throw new Error("sign: Invalid signature produced");return _}function k1(e,t,n){const i=Ot("signature",e,64),o=Ot("message",t),a=Ot("publicKey",n,32);try{const l=x1(Ht(a)),u=Ht(i.subarray(0,32));if(!w1(u))return!1;const d=Ht(i.subarray(32,64));if(!K7(d))return!1;const f=$1(Pu(u),wd(l),o),h=G7(l,d,Xs(-f));return!(!h||!h.hasEvenY()||h.toAffine().x!==u)}catch{return!1}}const yo={getPublicKey:Q7,sign:Y7,verify:k1,utils:{randomPrivateKey:zt.utils.randomPrivateKey,lift_x:x1,pointToBytes:wd,numberToBytesBE:qr,bytesToNumberBE:Ht,taggedHash:Ha,mod:xt}},X7=q7(Vr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),J7=N7(Vr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Vr.create(BigInt("-11"))});W7(zt.ProjectivePoint,e=>{const{x:t,y:n}=J7(Vr.create(e[0]));return X7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Vr.ORDER,m:1,k:128,expand:"xmd",hash:Zn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Yr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function jn(...e){const t=(o,a)=>l=>o(a(l)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Yn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Yr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Xn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function bo(e,t="="){if(Yr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function E1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function cg(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(l=>{if(Yr(l),l<0||l>=t)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const f=a[d],h=t*l+f;if(!Number.isSafeInteger(h)||t*l/t!==l||h-f!==t*l)throw new Error("convertRadix: carry overflow");if(l=h%n,a[d]=Math.floor(h/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==h)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<e.length-1&&e[l]===0;l++)o.push(0);return o.reverse()}const C1=(e,t)=>t?C1(t,e%t):e,Fa=(e,t)=>e+(t-C1(e,t));function Bu(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(Fa(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${Fa(t,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of e){if(Yr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function S1(e){return Yr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return cg(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(cg(t,e,2**8))}}}function xr(e,t=!1){if(Yr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(Fa(8,e)>32||Fa(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Bu(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Bu(n,e,8,t))}}}function ug(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function T1(e,t){if(Yr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let l=0;l<e;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const ek={alphabet:Yn,chain:jn,checksum:T1,radix:S1,radix2:xr,join:Xn,padding:bo},A1=jn(xr(4),Yn("0123456789ABCDEF"),Xn("")),I1=jn(xr(5),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),bo(5),Xn("")),tk=jn(xr(5),Yn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),bo(5),Xn("")),nk=jn(xr(5),Yn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Xn(""),E1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),is=jn(xr(6),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),bo(6),Xn("")),R1=jn(xr(6),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),bo(6),Xn("")),$d=e=>jn(S1(58),Yn(e),Xn("")),Js=$d("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),rk=$d("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),ik=$d("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),dg=[0,2,3,5,6,7,9,10,11],O1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Js.encode(i).padStart(dg[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=dg.indexOf(i.length),a=Js.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},L1=e=>jn(T1(4,t=>e(e(t))),Js),ju=jn(Yn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Xn("")),fg=[996825010,642813549,513874426,1027748829,705979059];function qs(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<fg.length;i++)(t>>i&1)===1&&(n^=fg[i]);return n}function hg(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const l=e.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${e})`);o=qs(o)^l>>5}o=qs(o);for(let a=0;a<i;a++)o=qs(o)^e.charCodeAt(a)&31;for(let a of t)o=qs(o)^a;for(let a=0;a<6;a++)o=qs(o);return o^=n,ju.encode(Bu([o%2**30],30,5,!1))}function P1(e){const t=e==="bech32"?1:734539939,n=xr(5),i=n.decode,o=n.encode,a=ug(i);function l(h,g,v=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const _=h.length+7+g.length;if(v!==!1&&_>v)throw new TypeError(`Length ${_} exceeds limit ${v}`);return h=h.toLowerCase(),`${h}1${ju.encode(g)}${hg(h,g,t)}`}function u(h,g=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||g!==!1&&h.length>g)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${g})`);const v=h.toLowerCase();if(h!==v&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=v;const _=h.lastIndexOf("1");if(_===0||_===-1)throw new Error('Letter "1" must be present between prefix and data only');const $=h.slice(0,_),k=h.slice(_+1);if(k.length<6)throw new Error("Data must be at least 6 characters long");const w=ju.decode(k).slice(0,-6),C=hg($,w,t);if(!k.endsWith(C))throw new Error(`Invalid checksum in ${h}: expected "${C}"`);return{prefix:$,words:w}}const d=ug(u);function f(h){const{prefix:g,words:v}=u(h,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:l,decode:u,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Ft=P1("bech32"),sk=P1("bech32m"),M1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},B1=jn(xr(4),Yn("0123456789abcdef"),Xn(""),E1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),eo={utf8:M1,hex:B1,base16:A1,base32:I1,base64:is,base64url:R1,base58:Js,base58xmr:O1},j1=`Invalid encoding type. Available types: ${Object.keys(eo).join(", ")}`,N1=(e,t)=>{if(typeof e!="string"||!eo.hasOwnProperty(e))throw new TypeError(j1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return eo[e].encode(t)},ok=N1,D1=(e,t)=>{if(!eo.hasOwnProperty(e))throw new TypeError(j1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return eo[e].decode(t)},ak=D1,lk=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Yr,base16:A1,base32:I1,base32crockford:nk,base32hex:tk,base58:Js,base58check:L1,base58flickr:rk,base58xmr:O1,base58xrp:ik,base64:is,base64url:R1,bech32:Ft,bech32m:sk,bytes:ak,bytesToString:N1,hex:B1,str:ok,stringToBytes:D1,utf8:M1,utils:ek},Symbol.toStringTag,{value:"Module"}));var kd={};Object.defineProperty(kd,"__esModule",{value:!0});var Ed=kd.wordlist=void 0;Ed=kd.wordlist=`abandon
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
`);var an={},Et={};Object.defineProperty(Et,"__esModule",{value:!0});Et.output=Et.exists=Et.hash=Qi=Et.bytes=Et.bool=Et.number=void 0;function qa(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}Et.number=qa;function U1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}Et.bool=U1;function Cd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Qi=Et.bytes=Cd;function z1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");qa(e.outputLen),qa(e.blockLen)}Et.hash=z1;function H1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}Et.exists=H1;function F1(e,t){Cd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Et.output=F1;const ck={number:qa,bool:U1,bytes:Cd,hash:z1,exists:H1,output:F1};Et.default=ck;var ss={},q1={},_o={};const uk=mo(G6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=uk,n=E=>new Uint8Array(E.buffer,E.byteOffset,E.byteLength);e.u8=n;const i=E=>new Uint32Array(E.buffer,E.byteOffset,Math.floor(E.byteLength/4));e.u32=i;const o=E=>new DataView(E.buffer,E.byteOffset,E.byteLength);e.createView=o;const a=(E,T)=>E<<32-T|E>>>T;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const l=Array.from({length:256},(E,T)=>T.toString(16).padStart(2,"0"));function u(E){if(!(E instanceof Uint8Array))throw new Error("Uint8Array expected");let T="";for(let O=0;O<E.length;O++)T+=l[E[O]];return T}e.bytesToHex=u;function d(E){if(typeof E!="string")throw new TypeError("hexToBytes: expected string, got "+typeof E);if(E.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const T=new Uint8Array(E.length/2);for(let O=0;O<T.length;O++){const j=O*2,D=E.slice(j,j+2),te=Number.parseInt(D,16);if(Number.isNaN(te)||te<0)throw new Error("Invalid byte sequence");T[O]=te}return T}e.hexToBytes=d;const f=async()=>{};e.nextTick=f;async function h(E,T,O){let j=Date.now();for(let D=0;D<E;D++){O(D);const te=Date.now()-j;te>=0&&te<T||(await(0,e.nextTick)(),j+=te)}}e.asyncLoop=h;function g(E){if(typeof E!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof E}`);return new TextEncoder().encode(E)}e.utf8ToBytes=g;function v(E){if(typeof E=="string"&&(E=g(E)),!(E instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof E})`);return E}e.toBytes=v;function _(...E){if(!E.every(j=>j instanceof Uint8Array))throw new Error("Uint8Array list expected");if(E.length===1)return E[0];const T=E.reduce((j,D)=>j+D.length,0),O=new Uint8Array(T);for(let j=0,D=0;j<E.length;j++){const te=E[j];O.set(te,D),D+=te.length}return O}e.concatBytes=_;class ${clone(){return this._cloneInto()}}e.Hash=$;const k=E=>Object.prototype.toString.call(E)==="[object Object]"&&E.constructor===Object;function w(E,T){if(T!==void 0&&(typeof T!="object"||!k(T)))throw new TypeError("Options should be object or undefined");return Object.assign(E,T)}e.checkOpts=w;function C(E){const T=j=>E().update(v(j)).digest(),O=E();return T.outputLen=O.outputLen,T.blockLen=O.blockLen,T.create=()=>E(),T}e.wrapConstructor=C;function I(E){const T=(j,D)=>E(D).update(v(j)).digest(),O=E({});return T.outputLen=O.outputLen,T.blockLen=O.blockLen,T.create=j=>E(j),T}e.wrapConstructorWithOpts=I;function S(E=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(E));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=S})(_o);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=Et,n=_o;class i extends n.Hash{constructor(l,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(l);const d=(0,n.toBytes)(u);if(this.iHash=l.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const f=this.blockLen,h=new Uint8Array(f);h.set(d.length>f?l.create().update(d).digest():d);for(let g=0;g<h.length;g++)h[g]^=54;this.iHash.update(h),this.oHash=l.create();for(let g=0;g<h.length;g++)h[g]^=106;this.oHash.update(h),h.fill(0)}update(l){return t.default.exists(this),this.iHash.update(l),this}digestInto(l){t.default.exists(this),t.default.bytes(l,this.outputLen),this.finished=!0,this.iHash.digestInto(l),this.oHash.update(l),this.oHash.digestInto(l),this.destroy()}digest(){const l=new Uint8Array(this.oHash.outputLen);return this.digestInto(l),l}_cloneInto(l){l||(l=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:f,destroyed:h,blockLen:g,outputLen:v}=this;return l=l,l.finished=f,l.destroyed=h,l.blockLen=g,l.outputLen=v,l.oHash=u._cloneInto(l.oHash),l.iHash=d._cloneInto(l.iHash),l}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,l,u)=>new i(a,l).update(u).digest();e.hmac=o,e.hmac.create=(a,l)=>new i(a,l)})(q1);Object.defineProperty(ss,"__esModule",{value:!0});ss.pbkdf2Async=ss.pbkdf2=void 0;const ya=Et,dk=q1,Xi=_o;function W1(e,t,n,i){ya.default.hash(e);const o=(0,Xi.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(ya.default.number(a),ya.default.number(l),ya.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Xi.toBytes)(t),f=(0,Xi.toBytes)(n),h=new Uint8Array(l),g=dk.hmac.create(e,d),v=g._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:u,DK:h,PRF:g,PRFSalt:v}}function Z1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function fk(e,t,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=W1(e,t,n,i);let f;const h=new Uint8Array(4),g=(0,Xi.createView)(h),v=new Uint8Array(u.outputLen);for(let _=1,$=0;$<a;_++,$+=u.outputLen){const k=l.subarray($,$+u.outputLen);g.setInt32(0,_,!1),(f=d._cloneInto(f)).update(h).digestInto(v),k.set(v.subarray(0,k.length));for(let w=1;w<o;w++){u._cloneInto(f).update(v).digestInto(v);for(let C=0;C<k.length;C++)k[C]^=v[C]}}return Z1(u,d,l,f,v)}ss.pbkdf2=fk;async function hk(e,t,n,i){const{c:o,dkLen:a,asyncTick:l,DK:u,PRF:d,PRFSalt:f}=W1(e,t,n,i);let h;const g=new Uint8Array(4),v=(0,Xi.createView)(g),_=new Uint8Array(d.outputLen);for(let $=1,k=0;k<a;$++,k+=d.outputLen){const w=u.subarray(k,k+d.outputLen);v.setInt32(0,$,!1),(h=f._cloneInto(h)).update(g).digestInto(_),w.set(_.subarray(0,w.length)),await(0,Xi.asyncLoop)(o-1,l,C=>{d._cloneInto(h).update(_).digestInto(_);for(let I=0;I<w.length;I++)w[I]^=_[I]})}return Z1(d,f,u,h,_)}ss.pbkdf2Async=hk;const pk=mo(u7);var _n={},$l={};Object.defineProperty($l,"__esModule",{value:!0});$l.SHA2=void 0;const gu=Et,Ws=_o;function gk(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+f,u,i)}class mk extends Ws.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Ws.createView)(this.buffer)}update(t){gu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Ws.toBytes)(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=(0,Ws.createView)(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){gu.default.exists(this),gu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;gk(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Ws.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,h=this.get();if(f>h.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,h[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}}$l.SHA2=mk;var V1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(W,Y=!1){return Y?{h:Number(W&t),l:Number(W>>n&t)}:{h:Number(W>>n&t)|0,l:Number(W&t)|0}}e.fromBig=i;function o(W,Y=!1){let Z=new Uint32Array(W.length),Q=new Uint32Array(W.length);for(let se=0;se<W.length;se++){const{h:q,l:J}=i(W[se],Y);[Z[se],Q[se]]=[q,J]}return[Z,Q]}e.split=o;const a=(W,Y)=>BigInt(W>>>0)<<n|BigInt(Y>>>0);e.toBig=a;const l=(W,Y,Z)=>W>>>Z,u=(W,Y,Z)=>W<<32-Z|Y>>>Z,d=(W,Y,Z)=>W>>>Z|Y<<32-Z,f=(W,Y,Z)=>W<<32-Z|Y>>>Z,h=(W,Y,Z)=>W<<64-Z|Y>>>Z-32,g=(W,Y,Z)=>W>>>Z-32|Y<<64-Z,v=(W,Y)=>Y,_=(W,Y)=>W,$=(W,Y,Z)=>W<<Z|Y>>>32-Z,k=(W,Y,Z)=>Y<<Z|W>>>32-Z,w=(W,Y,Z)=>Y<<Z-32|W>>>64-Z,C=(W,Y,Z)=>W<<Z-32|Y>>>64-Z;function I(W,Y,Z,Q){const se=(Y>>>0)+(Q>>>0);return{h:W+Z+(se/2**32|0)|0,l:se|0}}e.add=I;const S=(W,Y,Z)=>(W>>>0)+(Y>>>0)+(Z>>>0),E=(W,Y,Z,Q)=>Y+Z+Q+(W/2**32|0)|0,T=(W,Y,Z,Q)=>(W>>>0)+(Y>>>0)+(Z>>>0)+(Q>>>0),O=(W,Y,Z,Q,se)=>Y+Z+Q+se+(W/2**32|0)|0,j=(W,Y,Z,Q,se)=>(W>>>0)+(Y>>>0)+(Z>>>0)+(Q>>>0)+(se>>>0),D=(W,Y,Z,Q,se,q)=>Y+Z+Q+se+q+(W/2**32|0)|0,te={fromBig:i,split:o,toBig:e.toBig,shrSH:l,shrSL:u,rotrSH:d,rotrSL:f,rotrBH:h,rotrBL:g,rotr32H:v,rotr32L:_,rotlSH:$,rotlSL:k,rotlBH:w,rotlBL:C,add:I,add3L:S,add3H:E,add4L:T,add4H:O,add5H:D,add5L:j};e.default=te})(V1);Object.defineProperty(_n,"__esModule",{value:!0});_n.sha384=_n.sha512_256=_n.sha512_224=Nu=_n.sha512=_n.SHA512=void 0;const vk=$l,Oe=V1,kl=_o,[yk,bk]=Oe.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Nr=new Uint32Array(80),Dr=new Uint32Array(80);class wo extends vk.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:f,El:h,Fh:g,Fl:v,Gh:_,Gl:$,Hh:k,Hl:w}=this;return[t,n,i,o,a,l,u,d,f,h,g,v,_,$,k,w]}set(t,n,i,o,a,l,u,d,f,h,g,v,_,$,k,w){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=f|0,this.El=h|0,this.Fh=g|0,this.Fl=v|0,this.Gh=_|0,this.Gl=$|0,this.Hh=k|0,this.Hl=w|0}process(t,n){for(let S=0;S<16;S++,n+=4)Nr[S]=t.getUint32(n),Dr[S]=t.getUint32(n+=4);for(let S=16;S<80;S++){const E=Nr[S-15]|0,T=Dr[S-15]|0,O=Oe.default.rotrSH(E,T,1)^Oe.default.rotrSH(E,T,8)^Oe.default.shrSH(E,T,7),j=Oe.default.rotrSL(E,T,1)^Oe.default.rotrSL(E,T,8)^Oe.default.shrSL(E,T,7),D=Nr[S-2]|0,te=Dr[S-2]|0,W=Oe.default.rotrSH(D,te,19)^Oe.default.rotrBH(D,te,61)^Oe.default.shrSH(D,te,6),Y=Oe.default.rotrSL(D,te,19)^Oe.default.rotrBL(D,te,61)^Oe.default.shrSL(D,te,6),Z=Oe.default.add4L(j,Y,Dr[S-7],Dr[S-16]),Q=Oe.default.add4H(Z,O,W,Nr[S-7],Nr[S-16]);Nr[S]=Q|0,Dr[S]=Z|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:f,Dl:h,Eh:g,El:v,Fh:_,Fl:$,Gh:k,Gl:w,Hh:C,Hl:I}=this;for(let S=0;S<80;S++){const E=Oe.default.rotrSH(g,v,14)^Oe.default.rotrSH(g,v,18)^Oe.default.rotrBH(g,v,41),T=Oe.default.rotrSL(g,v,14)^Oe.default.rotrSL(g,v,18)^Oe.default.rotrBL(g,v,41),O=g&_^~g&k,j=v&$^~v&w,D=Oe.default.add5L(I,T,j,bk[S],Dr[S]),te=Oe.default.add5H(D,C,E,O,yk[S],Nr[S]),W=D|0,Y=Oe.default.rotrSH(i,o,28)^Oe.default.rotrBH(i,o,34)^Oe.default.rotrBH(i,o,39),Z=Oe.default.rotrSL(i,o,28)^Oe.default.rotrBL(i,o,34)^Oe.default.rotrBL(i,o,39),Q=i&a^i&u^a&u,se=o&l^o&d^l&d;C=k|0,I=w|0,k=_|0,w=$|0,_=g|0,$=v|0,{h:g,l:v}=Oe.default.add(f|0,h|0,te|0,W|0),f=u|0,h=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const q=Oe.default.add3L(W,Z,se);i=Oe.default.add3H(q,te,Y,Q),o=q|0}({h:i,l:o}=Oe.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=Oe.default.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=Oe.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:f,l:h}=Oe.default.add(this.Dh|0,this.Dl|0,f|0,h|0),{h:g,l:v}=Oe.default.add(this.Eh|0,this.El|0,g|0,v|0),{h:_,l:$}=Oe.default.add(this.Fh|0,this.Fl|0,_|0,$|0),{h:k,l:w}=Oe.default.add(this.Gh|0,this.Gl|0,k|0,w|0),{h:C,l:I}=Oe.default.add(this.Hh|0,this.Hl|0,C|0,I|0),this.set(i,o,a,l,u,d,f,h,g,v,_,$,k,w,C,I)}roundClean(){Nr.fill(0),Dr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}_n.SHA512=wo;class _k extends wo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class wk extends wo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class xk extends wo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Nu=_n.sha512=(0,kl.wrapConstructor)(()=>new wo);_n.sha512_224=(0,kl.wrapConstructor)(()=>new _k);_n.sha512_256=(0,kl.wrapConstructor)(()=>new wk);_n.sha384=(0,kl.wrapConstructor)(()=>new xk);const $k=mo(r7),kk=mo(lk);Object.defineProperty(an,"__esModule",{value:!0});var K1=an.mnemonicToSeedSync=an.mnemonicToSeed=im=an.validateMnemonic=an.entropyToMnemonic=an.mnemonicToEntropy=em=an.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const G1=Et,Q1=ss,Ek=pk,Y1=_n,Ck=$k,ba=kk,Sk=e=>e[0]==="あいこくしん";function X1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function Sd(e){const t=X1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function J1(e){G1.default.bytes(e,16,20,24,28,32)}function Tk(e,t=128){if(G1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return rm((0,Ck.randomBytes)(t/8),e)}var em=an.generateMnemonic=Tk;const Ak=e=>{const t=8-e.length/4;return new Uint8Array([(0,Ek.sha256)(e)[0]>>t<<t])};function tm(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),ba.utils.chain(ba.utils.checksum(1,Ak),ba.utils.radix2(11,!0),ba.utils.alphabet(e))}function nm(e,t){const{words:n}=Sd(e),i=tm(t).decode(n);return J1(i),i}an.mnemonicToEntropy=nm;function rm(e,t){return J1(e),tm(t).encode(e).join(Sk(t)?"　":" ")}an.entropyToMnemonic=rm;function Ik(e,t){try{nm(e,t)}catch{return!1}return!0}var im=an.validateMnemonic=Ik;const sm=e=>X1(`mnemonic${e}`);function Rk(e,t=""){return(0,Q1.pbkdf2Async)(Y1.sha512,Sd(e).nfkd,sm(t),{c:2048,dkLen:64})}an.mnemonicToSeed=Rk;function Ok(e,t=""){return(0,Q1.pbkdf2)(Y1.sha512,Sd(e).nfkd,sm(t),{c:2048,dkLen:64})}K1=an.mnemonicToSeedSync=Ok;const Lk=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),om=Uint8Array.from({length:16},(e,t)=>t),Pk=om.map(e=>(9*e+5)%16);let Td=[om],Ad=[Pk];for(let e=0;e<4;e++)for(let t of[Td,Ad])t.push(t[e].map(n=>Lk[n]));const am=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),Mk=Td.map((e,t)=>e.map(n=>am[t][n])),Bk=Ad.map((e,t)=>e.map(n=>am[t][n])),jk=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),Nk=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),_a=(e,t)=>e<<t|e>>>32-t;function pg(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const wa=new Uint32Array(16);class Dk extends u1{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let _=0;_<16;_++,n+=4)wa[_]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,f=this.h3|0,h=f,g=this.h4|0,v=g;for(let _=0;_<5;_++){const $=4-_,k=jk[_],w=Nk[_],C=Td[_],I=Ad[_],S=Mk[_],E=Bk[_];for(let T=0;T<16;T++){const O=_a(i+pg(_,a,u,f)+wa[C[T]]+k,S[T])+g|0;i=g,g=f,f=_a(u,10)|0,u=a,a=O}for(let T=0;T<16;T++){const O=_a(o+pg($,l,d,h)+wa[I[T]]+w,E[T])+v|0;o=v,v=h,h=_a(d,10)|0,d=l,l=O}}this.set(this.h1+u+h|0,this.h2+f+v|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){wa.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const Uk=ml(()=>new Dk),xa=zt.ProjectivePoint,mu=L1(Zn);function gg(e){return BigInt(`0x${sn(e)}`)}function zk(e){return Zr(e.toString(16).padStart(64,"0"))}const Hk=pd("Bitcoin seed"),vu={private:76066276,public:76067358},yu=2147483648,Fk=e=>Uk(Zn(e)),qk=e=>gi(e).getUint32(0,!1),$a=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class ui{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return qk(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return mu.encode(this.serialize(this.versions.private,fi(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return mu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=vu){if(Qi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Da(Nu,Hk,t);return new ui({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=vu){const i=mu.decode(t),o=gi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new ui({...l,privateKey:u.slice(1)}):new ui({...l,publicKey:u})}static fromJSON(t){return ui.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||vu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!zt.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:gg(t.privateKey),this.privKeyBytes=zk(this.privKey),this.pubKey=zt.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=xa.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=Fk(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=yu)throw new Error("Invalid index");a[2]==="'"&&(l+=yu),i=i.deriveChild(l)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=$a(t);if(t>=yu){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=fi(new Uint8Array([0]),u,n)}else n=fi(this.pubKey,n);const i=Da(Nu,this.chainCode,n),o=gg(i.slice(0,32)),a=i.slice(32);if(!zt.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=xt(this.privKey+o,zt.CURVE.n);if(!zt.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=xa.fromHex(this.pubKey).add(xa.fromPrivateKey(o));if(u.equals(xa.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new ui(l)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Qi(t,32),zt.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Qi(t,32),Qi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=zt.Signature.fromCompact(n)}catch{return!1}return zt.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Qi(n,33),fi($a(t),new Uint8Array([this.depth]),$a(this.parentFingerprint),$a(this.index),this.chainCode,n)}}var Wk=Object.defineProperty,jt=(e,t)=>{for(var n in t)Wk(e,n,{get:t[n],enumerable:!0})};function lm(e){return sn(yo.getPublicKey(e))}var cm={};jt(cm,{MessageNode:()=>um,MessageQueue:()=>dm,insertEventIntoAscendingList:()=>Vk,insertEventIntoDescendingList:()=>Zk,normalizeURL:()=>Du,utf8Decoder:()=>zr,utf8Encoder:()=>Vn});var zr=new TextDecoder("utf-8"),Vn=new TextEncoder;function Du(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function Zk(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function Vk(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var um=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},dm=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new um(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},ft=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.ProfileBadge=30008]="ProfileBadge",e[e.BadgeDefinition=30009]="BadgeDefinition",e[e.Article=30023]="Article",e))(ft||{});function fm(e,t){let n=e;return n.pubkey=lm(t),n.id=El(n),n.sig=Qk(n,t),n}function Kk(e){if(!Id(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function El(e){let t=Zn(Vn.encode(Kk(e)));return sn(t)}var Gk=e=>e instanceof Object;function Id(e){if(!Gk(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function Rd(e){try{return yo.verify(e.sig,El(e),e.pubkey)}catch{return!1}}function Qk(e,t){return sn(yo.sign(El(e),t))}function Yk(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function Xk(e,t){for(let n=0;n<e.length;n++)if(Yk(e[n],t))return!0;return!1}var Jk={};jt(Jk,{getHex64:()=>Cl,getInt:()=>hm,getSubscriptionId:()=>pm,matchEventId:()=>e9,matchEventKind:()=>n9,matchEventPubkey:()=>t9});function Cl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function hm(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function pm(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function e9(e,t){return t===Cl(e,"id")}function t9(e,t){return t===Cl(e,"pubkey")}function n9(e,t){return t===hm(e,"kind")}var mg=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function r9(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,l={},u=mg(),d={},f={},h;async function g(){return h||(h=new Promise((C,I)=>{try{a=new WebSocket(e)}catch(O){I(O)}a.onopen=()=>{u.connect.forEach(O=>O()),C()},a.onerror=()=>{h=void 0,u.error.forEach(O=>O()),I()},a.onclose=async()=>{h=void 0,u.disconnect.forEach(O=>O())};let S=new dm,E;a.onmessage=O=>{S.enqueue(O.data),E||(E=setInterval(T,0))};function T(){if(S.size===0){clearInterval(E),E=null;return}var O=S.dequeue();if(!O)return;let j=pm(O);if(j){let D=l[j];if(D&&D.alreadyHaveEvent&&D.alreadyHaveEvent(Cl(O,"id"),e))return}try{let D=JSON.parse(O);switch(D[0]){case"EVENT":{let Z=D[1],Q=D[2];Id(Q)&&l[Z]&&(l[Z].skipVerification||Rd(Q))&&Xk(l[Z].filters,Q)&&(l[Z],(d[Z]?.event||[]).forEach(se=>se(Q)));return}case"COUNT":let te=D[1],W=D[2];l[te]&&(d[te]?.count||[]).forEach(Z=>Z(W));return;case"EOSE":{let Z=D[1];Z in d&&(d[Z].eose.forEach(Q=>Q()),d[Z].eose=[]);return}case"OK":{let Z=D[1],Q=D[2],se=D[3]||"";Z in f&&(Q?f[Z].ok.forEach(q=>q()):f[Z].failed.forEach(q=>q(se)),f[Z].ok=[],f[Z].failed=[]);return}case"NOTICE":let Y=D[1];u.notice.forEach(Z=>Z(Y));return;case"AUTH":{let Z=D[1];u.auth?.forEach(Q=>Q(Z));return}}}catch{return}}}),h)}function v(){return a?.readyState===1}async function _(){v()||await g()}async function $(C){let I=JSON.stringify(C);if(!(!v()&&(await new Promise(S=>setTimeout(S,1e3)),!v())))try{a.send(I)}catch(S){console.log(S)}}const k=(C,{verb:I="REQ",skipVerification:S=!1,alreadyHaveEvent:E=null,id:T=Math.random().toString().slice(2)}={})=>{let O=T;return l[O]={id:O,filters:C,skipVerification:S,alreadyHaveEvent:E},$([I,O,...C]),{sub:(j,D={})=>k(j||C,{skipVerification:D.skipVerification||S,alreadyHaveEvent:D.alreadyHaveEvent||E,id:O}),unsub:()=>{delete l[O],delete d[O],$(["CLOSE",O])},on:(j,D)=>{d[O]=d[O]||{event:[],count:[],eose:[]},d[O][j].push(D)},off:(j,D)=>{let te=d[O],W=te[j].indexOf(D);W>=0&&te[j].splice(W,1)}}};function w(C,I){if(!C.id)throw new Error(`event ${C} has no id`);let S=C.id;return $([I,C]),{on:(E,T)=>{f[S]=f[S]||{ok:[],failed:[]},f[S][E].push(T)},off:(E,T)=>{let O=f[S];if(!O)return;let j=O[E].indexOf(T);j>=0&&O[E].splice(j,1)}}}return{url:e,sub:k,on:(C,I)=>{u[C].push(I),C==="connect"&&a?.readyState===1&&I()},off:(C,I)=>{let S=u[C].indexOf(I);S!==-1&&u[C].splice(S,1)},list:(C,I)=>new Promise(S=>{let E=k(C,I),T=[],O=setTimeout(()=>{E.unsub(),S(T)},n);E.on("eose",()=>{E.unsub(),clearTimeout(O),S(T)}),E.on("event",j=>{T.push(j)})}),get:(C,I)=>new Promise(S=>{let E=k([C],I),T=setTimeout(()=>{E.unsub(),S(null)},i);E.on("event",O=>{E.unsub(),clearTimeout(T),S(O)})}),count:C=>new Promise(I=>{let S=k(C,{...k,verb:"COUNT"}),E=setTimeout(()=>{S.unsub(),I(null)},o);S.on("count",T=>{S.unsub(),clearTimeout(E),I(T)})}),publish(C){return w(C,"EVENT")},auth(C){return w(C,"AUTH")},connect:_,close(){u=mg(),d={},f={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var i9=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Du(t)];n&&n.close()})}async ensureRelay(e){const t=Du(e);this._conn[t]||(this._conn[t]=r9(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,_)=>{if(n?.alreadyHaveEvent?.(v,_))return!0;let $=this._seenOn[v]||new Set;return $.add(_),this._seenOn[v]=$,i.has(v)};let a=[],l=new Set,u=new Set,d=e.length,f=!1,h=setTimeout(()=>{f=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let _;try{_=await this.ensureRelay(v)}catch{k();return}if(!_)return;let $=_.sub(t,o);$.on("event",w=>{i.add(w.id);for(let C of l.values())C(w)}),$.on("eose",()=>{f||k()}),a.push($);function k(){if(d--,d===0){clearTimeout(h);for(let w of u.values())w()}}});let g={sub(v,_){return a.forEach($=>$.sub(v,_)),g},unsub(){a.forEach(v=>v.unsub())},on(v,_){v==="event"?l.add(_):v==="eose"&&u.add(_)},off(v,_){v==="event"?l.delete(_):v==="eose"&&u.delete(_)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(l,u)=>{let d=await n[u],f=()=>a(l);i.set(a,f),d.on(o,f)})},off(o,a){e.forEach(async(l,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},xo={};jt(xo,{BECH32_REGEX:()=>gm,decode:()=>Sl,naddrEncode:()=>u9,neventEncode:()=>c9,noteEncode:()=>a9,nprofileEncode:()=>l9,npubEncode:()=>o9,nrelayEncode:()=>d9,nsecEncode:()=>s9});var bs=5e3,gm=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function Sl(e){let{prefix:t,words:n}=Ft.decode(e,bs),i=new Uint8Array(Ft.fromWords(n));switch(t){case"nprofile":{let o=ka(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:sn(o[0][0]),relays:o[1]?o[1].map(a=>zr.decode(a)):[]}}}case"nevent":{let o=ka(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:sn(o[0][0]),relays:o[1]?o[1].map(a=>zr.decode(a)):[],author:o[2]?.[0]?sn(o[2][0]):void 0}}}case"naddr":{let o=ka(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:zr.decode(o[0][0]),pubkey:sn(o[2][0]),kind:parseInt(sn(o[3][0]),16),relays:o[1]?o[1].map(a=>zr.decode(a)):[]}}}case"nrelay":{let o=ka(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:zr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:sn(i)};default:throw new Error(`unknown prefix ${t}`)}}function ka(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function s9(e){return Od("nsec",e)}function o9(e){return Od("npub",e)}function a9(e){return Od("note",e)}function Od(e,t){let n=Zr(t),i=Ft.toWords(n);return Ft.encode(e,i,bs)}function l9(e){let t=Tl({0:[Zr(e.pubkey)],1:(e.relays||[]).map(i=>Vn.encode(i))}),n=Ft.toWords(t);return Ft.encode("nprofile",n,bs)}function c9(e){let t=Tl({0:[Zr(e.id)],1:(e.relays||[]).map(i=>Vn.encode(i)),2:e.author?[Zr(e.author)]:[]}),n=Ft.toWords(t);return Ft.encode("nevent",n,bs)}function u9(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=Tl({0:[Vn.encode(e.identifier)],1:(e.relays||[]).map(o=>Vn.encode(o)),2:[Zr(e.pubkey)],3:[new Uint8Array(t)]}),i=Ft.toWords(n);return Ft.encode("naddr",i,bs)}function d9(e){let t=Tl({0:[Vn.encode(e)]}),n=Ft.toWords(t);return Ft.encode("nrelay",n,bs)}function Tl(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),fi(...t)}var f9={};jt(f9,{decrypt:()=>p9,encrypt:()=>h9});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function h9(e,t,n){const i=zt.getSharedSecret(e,"02"+t),o=mm(i);let a=Uint8Array.from(vl(16)),l=Vn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),f=is.encode(new Uint8Array(d)),h=is.encode(new Uint8Array(a.buffer));return`${f}?iv=${h}`}async function p9(e,t,n){let[i,o]=n.split("?iv="),a=zt.getSharedSecret(e,"02"+t),l=mm(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=is.decode(i),f=is.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},u,d);return zr.decode(h)}function mm(e){return e.slice(1,33)}var vm={};jt(vm,{NIP05_REGEX:()=>ym,queryProfile:()=>v9,searchDomain:()=>m9,useFetchImplementation:()=>g9});var ym=/^(?:([\w.+-]+)@)?([\w.-]+)$/,Al;try{Al=fetch}catch{}function g9(e){Al=e}async function m9(e,t=""){try{return(await(await Al(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function v9(e){const t=e.match(ym);if(!t)return null;const[n,i="_",o]=t;try{const a=await Al(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=y9(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function y9(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var b9={};jt(b9,{generateSeedWords:()=>w9,privateKeyFromSeedWords:()=>_9,validateWords:()=>x9});function _9(e,t){let i=ui.fromMasterSeed(K1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return sn(i)}function w9(){return em(Ed)}function x9(e){return im(e,Ed)}var $9={};jt($9,{parse:()=>k9});function k9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,f={id:l,relays:u?[u]:[]},h=i===0,g=i===n.length-1;if(d==="root"){t.root=f;continue}if(d==="reply"){t.reply=f;continue}if(d==="mention"){t.mentions.push(f);continue}if(h){t.root=f;continue}if(g){t.reply=f;continue}t.mentions.push(f)}return t}var E9={};jt(E9,{getPow:()=>C9});function C9(e){return S9(Zr(e))}function S9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=T9(e[n]),t+=i,i===8);n++);return t}function T9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var A9={};jt(A9,{finishRepostEvent:()=>I9,getRepostedEvent:()=>R9,getRepostedEventPointer:()=>bm});function I9(e,t,n,i){return fm({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function bm(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function R9(e,{skipVerification:t}={}){const n=bm(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!Rd(i)))return i}var O9={};jt(O9,{NOSTR_URI_REGEX:()=>Il,parse:()=>P9,test:()=>L9});var Il=new RegExp(`nostr:(${gm.source})`);function L9(e){return typeof e=="string"&&new RegExp(`^${Il.source}$`).test(e)}function P9(e){const t=e.match(new RegExp(`^${Il.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:Sl(t[1])}}var M9={};jt(M9,{finishReactionEvent:()=>B9,getReactedEventPointer:()=>j9});function B9(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return fm({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function j9(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var N9={};jt(N9,{createDelegation:()=>D9,getDelegator:()=>U9});function D9(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Zn(Vn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=sn(yo.sign(o,e));return{from:lm(e),to:t.pubkey,cond:i,sig:a}}function U9(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,f,h]=a[u].split(/\b/);if(!(d==="kind"&&f==="="&&e.kind===parseInt(h))){if(d==="created_at"&&f==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&f===">"&&e.created_at>parseInt(h))continue;return null}}let l=Zn(Vn.encode(`nostr:delegation:${e.pubkey}:${i}`));return yo.verify(o,l,n)?n:null}var z9={};jt(z9,{matchAll:()=>H9,regex:()=>Ld,replaceAll:()=>F9});var Ld=()=>new RegExp(`\\b${Il.source}\\b`,"g");function*H9(e){const t=e.matchAll(Ld());for(const n of t)try{const[i,o]=n;yield{uri:i,value:o,decoded:Sl(o),start:n.index,end:n.index+i.length}}catch{}}function F9(e,t){return e.replaceAll(Ld(),(n,i)=>t({uri:n,value:i,decoded:Sl(i)}))}var q9={};jt(q9,{useFetchImplementation:()=>W9,validateGithub:()=>Z9});var Pd;try{Pd=fetch}catch{}function W9(e){Pd=e}async function Z9(e,t,n){try{return await(await Pd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var V9={};jt(V9,{authenticate:()=>K9});var K9=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,l)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),l(d)})})},G9={};jt(G9,{getZapEndpoint:()=>Y9,makeZapReceipt:()=>eE,makeZapRequest:()=>X9,useFetchImplementation:()=>Q9,validateZapRequest:()=>J9});var Md;try{Md=fetch}catch{}function Q9(e){Md=e}async function Y9(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:l}=Ft.decode(n,1e3),u=Ft.fromWords(l);t=zr.decode(u)}else if(i){let[l,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await Md(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function X9({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function J9(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!Id(t))return"Zap request is not a valid Nostr event.";if(!Rd(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function eE({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&l.tags.push(["preimage",t]),l}const tE=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),_m=(e={})=>(()=>{const t=tE();return Qe(t,e,!0,!0),t})(),nE=B('<button class="text-blue-500 underline">'),{noteEncode:rE,neventEncode:iE}=xo,sE=e=>{try{return rE(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},oE=e=>{try{return iE({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},to=e=>(()=>{const t=nE();return A(t,b(le,{get when(){return e.kind==null||e.kind===ft.Text},get fallback(){return oE(e.eventId)},get children(){return sE(e.eventId)}})),t})();var Wa={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Wa.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,h="__lodash_placeholder__",g=1,v=2,_=4,$=1,k=2,w=1,C=2,I=4,S=8,E=16,T=32,O=64,j=128,D=256,te=512,W=30,Y="...",Z=800,Q=16,se=1,q=2,J=3,fe=1/0,pe=9007199254740991,ne=17976931348623157e292,he=0/0,ge=4294967295,Pe=ge-1,Me=ge>>>1,ee=[["ary",j],["bind",w],["bindKey",C],["curry",S],["curryRight",E],["flip",te],["partial",T],["partialRight",O],["rearg",D]],V="[object Arguments]",oe="[object Array]",ve="[object AsyncFunction]",F="[object Boolean]",re="[object Date]",He="[object DOMException]",at="[object Error]",st="[object Function]",Be="[object GeneratorFunction]",qe="[object Map]",Tt="[object Number]",wn="[object Null]",ht="[object Object]",Er="[object Promise]",Ti="[object Proxy]",Nn="[object RegExp]",bt="[object Set]",xn="[object String]",Dn="[object Symbol]",Ai="[object Undefined]",$e="[object WeakMap]",tr="[object WeakSet]",Yt="[object ArrayBuffer]",Wt="[object DataView]",$n="[object Float32Array]",nr="[object Float64Array]",rr="[object Int8Array]",Cr="[object Int16Array]",Ii="[object Int32Array]",Ri="[object Uint8Array]",Oi="[object Uint8ClampedArray]",Ql="[object Uint16Array]",Yl="[object Uint32Array]",b2=/\b__p \+= '';/g,_2=/\b(__p \+=) '' \+/g,w2=/(__e\(.*?\)|\b__t\)) \+\n'';/g,pf=/&(?:amp|lt|gt|quot|#39);/g,gf=/[&<>"']/g,x2=RegExp(pf.source),$2=RegExp(gf.source),k2=/<%-([\s\S]+?)%>/g,E2=/<%([\s\S]+?)%>/g,mf=/<%=([\s\S]+?)%>/g,C2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,S2=/^\w*$/,T2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Xl=/[\\^$.*+?()[\]{}|]/g,A2=RegExp(Xl.source),Jl=/^\s+/,I2=/\s/,R2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,O2=/\{\n\/\* \[wrapped with (.+)\] \*/,L2=/,? & /,P2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,M2=/[()=,{}\[\]\/\s]/,B2=/\\(\\)?/g,j2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,vf=/\w*$/,N2=/^[-+]0x[0-9a-f]+$/i,D2=/^0b[01]+$/i,U2=/^\[object .+?Constructor\]$/,z2=/^0o[0-7]+$/i,H2=/^(?:0|[1-9]\d*)$/,F2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Io=/($^)/,q2=/['\n\r\u2028\u2029\\]/g,Ro="\\ud800-\\udfff",W2="\\u0300-\\u036f",Z2="\\ufe20-\\ufe2f",V2="\\u20d0-\\u20ff",yf=W2+Z2+V2,bf="\\u2700-\\u27bf",_f="a-z\\xdf-\\xf6\\xf8-\\xff",K2="\\xac\\xb1\\xd7\\xf7",G2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Q2="\\u2000-\\u206f",Y2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",wf="A-Z\\xc0-\\xd6\\xd8-\\xde",xf="\\ufe0e\\ufe0f",$f=K2+G2+Q2+Y2,ec="['’]",X2="["+Ro+"]",kf="["+$f+"]",Oo="["+yf+"]",Ef="\\d+",J2="["+bf+"]",Cf="["+_f+"]",Sf="[^"+Ro+$f+Ef+bf+_f+wf+"]",tc="\\ud83c[\\udffb-\\udfff]",ey="(?:"+Oo+"|"+tc+")",Tf="[^"+Ro+"]",nc="(?:\\ud83c[\\udde6-\\uddff]){2}",rc="[\\ud800-\\udbff][\\udc00-\\udfff]",Li="["+wf+"]",Af="\\u200d",If="(?:"+Cf+"|"+Sf+")",ty="(?:"+Li+"|"+Sf+")",Rf="(?:"+ec+"(?:d|ll|m|re|s|t|ve))?",Of="(?:"+ec+"(?:D|LL|M|RE|S|T|VE))?",Lf=ey+"?",Pf="["+xf+"]?",ny="(?:"+Af+"(?:"+[Tf,nc,rc].join("|")+")"+Pf+Lf+")*",ry="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",iy="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Mf=Pf+Lf+ny,sy="(?:"+[J2,nc,rc].join("|")+")"+Mf,oy="(?:"+[Tf+Oo+"?",Oo,nc,rc,X2].join("|")+")",ay=RegExp(ec,"g"),ly=RegExp(Oo,"g"),ic=RegExp(tc+"(?="+tc+")|"+oy+Mf,"g"),cy=RegExp([Li+"?"+Cf+"+"+Rf+"(?="+[kf,Li,"$"].join("|")+")",ty+"+"+Of+"(?="+[kf,Li+If,"$"].join("|")+")",Li+"?"+If+"+"+Rf,Li+"+"+Of,iy,ry,Ef,sy].join("|"),"g"),uy=RegExp("["+Af+Ro+yf+xf+"]"),dy=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,fy=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],hy=-1,nt={};nt[$n]=nt[nr]=nt[rr]=nt[Cr]=nt[Ii]=nt[Ri]=nt[Oi]=nt[Ql]=nt[Yl]=!0,nt[V]=nt[oe]=nt[Yt]=nt[F]=nt[Wt]=nt[re]=nt[at]=nt[st]=nt[qe]=nt[Tt]=nt[ht]=nt[Nn]=nt[bt]=nt[xn]=nt[$e]=!1;var et={};et[V]=et[oe]=et[Yt]=et[Wt]=et[F]=et[re]=et[$n]=et[nr]=et[rr]=et[Cr]=et[Ii]=et[qe]=et[Tt]=et[ht]=et[Nn]=et[bt]=et[xn]=et[Dn]=et[Ri]=et[Oi]=et[Ql]=et[Yl]=!0,et[at]=et[st]=et[$e]=!1;var py={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},gy={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},my={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},vy={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},yy=parseFloat,by=parseInt,Bf=typeof $t=="object"&&$t&&$t.Object===Object&&$t,_y=typeof self=="object"&&self&&self.Object===Object&&self,At=Bf||_y||Function("return this")(),sc=t&&!t.nodeType&&t,Jr=sc&&!0&&e&&!e.nodeType&&e,jf=Jr&&Jr.exports===sc,oc=jf&&Bf.process,dn=function(){try{var P=Jr&&Jr.require&&Jr.require("util").types;return P||oc&&oc.binding&&oc.binding("util")}catch{}}(),Nf=dn&&dn.isArrayBuffer,Df=dn&&dn.isDate,Uf=dn&&dn.isMap,zf=dn&&dn.isRegExp,Hf=dn&&dn.isSet,Ff=dn&&dn.isTypedArray;function Xt(P,U,N){switch(N.length){case 0:return P.call(U);case 1:return P.call(U,N[0]);case 2:return P.call(U,N[0],N[1]);case 3:return P.call(U,N[0],N[1],N[2])}return P.apply(U,N)}function wy(P,U,N,ce){for(var Ee=-1,Ke=P==null?0:P.length;++Ee<Ke;){var _t=P[Ee];U(ce,_t,N(_t),P)}return ce}function fn(P,U){for(var N=-1,ce=P==null?0:P.length;++N<ce&&U(P[N],N,P)!==!1;);return P}function xy(P,U){for(var N=P==null?0:P.length;N--&&U(P[N],N,P)!==!1;);return P}function qf(P,U){for(var N=-1,ce=P==null?0:P.length;++N<ce;)if(!U(P[N],N,P))return!1;return!0}function Sr(P,U){for(var N=-1,ce=P==null?0:P.length,Ee=0,Ke=[];++N<ce;){var _t=P[N];U(_t,N,P)&&(Ke[Ee++]=_t)}return Ke}function Lo(P,U){var N=P==null?0:P.length;return!!N&&Pi(P,U,0)>-1}function ac(P,U,N){for(var ce=-1,Ee=P==null?0:P.length;++ce<Ee;)if(N(U,P[ce]))return!0;return!1}function ot(P,U){for(var N=-1,ce=P==null?0:P.length,Ee=Array(ce);++N<ce;)Ee[N]=U(P[N],N,P);return Ee}function Tr(P,U){for(var N=-1,ce=U.length,Ee=P.length;++N<ce;)P[Ee+N]=U[N];return P}function lc(P,U,N,ce){var Ee=-1,Ke=P==null?0:P.length;for(ce&&Ke&&(N=P[++Ee]);++Ee<Ke;)N=U(N,P[Ee],Ee,P);return N}function $y(P,U,N,ce){var Ee=P==null?0:P.length;for(ce&&Ee&&(N=P[--Ee]);Ee--;)N=U(N,P[Ee],Ee,P);return N}function cc(P,U){for(var N=-1,ce=P==null?0:P.length;++N<ce;)if(U(P[N],N,P))return!0;return!1}var ky=uc("length");function Ey(P){return P.split("")}function Cy(P){return P.match(P2)||[]}function Wf(P,U,N){var ce;return N(P,function(Ee,Ke,_t){if(U(Ee,Ke,_t))return ce=Ke,!1}),ce}function Po(P,U,N,ce){for(var Ee=P.length,Ke=N+(ce?1:-1);ce?Ke--:++Ke<Ee;)if(U(P[Ke],Ke,P))return Ke;return-1}function Pi(P,U,N){return U===U?Ny(P,U,N):Po(P,Zf,N)}function Sy(P,U,N,ce){for(var Ee=N-1,Ke=P.length;++Ee<Ke;)if(ce(P[Ee],U))return Ee;return-1}function Zf(P){return P!==P}function Vf(P,U){var N=P==null?0:P.length;return N?fc(P,U)/N:he}function uc(P){return function(U){return U==null?n:U[P]}}function dc(P){return function(U){return P==null?n:P[U]}}function Kf(P,U,N,ce,Ee){return Ee(P,function(Ke,_t,Je){N=ce?(ce=!1,Ke):U(N,Ke,_t,Je)}),N}function Ty(P,U){var N=P.length;for(P.sort(U);N--;)P[N]=P[N].value;return P}function fc(P,U){for(var N,ce=-1,Ee=P.length;++ce<Ee;){var Ke=U(P[ce]);Ke!==n&&(N=N===n?Ke:N+Ke)}return N}function hc(P,U){for(var N=-1,ce=Array(P);++N<P;)ce[N]=U(N);return ce}function Ay(P,U){return ot(U,function(N){return[N,P[N]]})}function Gf(P){return P&&P.slice(0,Jf(P)+1).replace(Jl,"")}function Jt(P){return function(U){return P(U)}}function pc(P,U){return ot(U,function(N){return P[N]})}function Ts(P,U){return P.has(U)}function Qf(P,U){for(var N=-1,ce=P.length;++N<ce&&Pi(U,P[N],0)>-1;);return N}function Yf(P,U){for(var N=P.length;N--&&Pi(U,P[N],0)>-1;);return N}function Iy(P,U){for(var N=P.length,ce=0;N--;)P[N]===U&&++ce;return ce}var Ry=dc(py),Oy=dc(gy);function Ly(P){return"\\"+vy[P]}function Py(P,U){return P==null?n:P[U]}function Mi(P){return uy.test(P)}function My(P){return dy.test(P)}function By(P){for(var U,N=[];!(U=P.next()).done;)N.push(U.value);return N}function gc(P){var U=-1,N=Array(P.size);return P.forEach(function(ce,Ee){N[++U]=[Ee,ce]}),N}function Xf(P,U){return function(N){return P(U(N))}}function Ar(P,U){for(var N=-1,ce=P.length,Ee=0,Ke=[];++N<ce;){var _t=P[N];(_t===U||_t===h)&&(P[N]=h,Ke[Ee++]=N)}return Ke}function Mo(P){var U=-1,N=Array(P.size);return P.forEach(function(ce){N[++U]=ce}),N}function jy(P){var U=-1,N=Array(P.size);return P.forEach(function(ce){N[++U]=[ce,ce]}),N}function Ny(P,U,N){for(var ce=N-1,Ee=P.length;++ce<Ee;)if(P[ce]===U)return ce;return-1}function Dy(P,U,N){for(var ce=N+1;ce--;)if(P[ce]===U)return ce;return ce}function Bi(P){return Mi(P)?zy(P):ky(P)}function kn(P){return Mi(P)?Hy(P):Ey(P)}function Jf(P){for(var U=P.length;U--&&I2.test(P.charAt(U)););return U}var Uy=dc(my);function zy(P){for(var U=ic.lastIndex=0;ic.test(P);)++U;return U}function Hy(P){return P.match(ic)||[]}function Fy(P){return P.match(cy)||[]}var qy=function P(U){U=U==null?At:ji.defaults(At.Object(),U,ji.pick(At,fy));var N=U.Array,ce=U.Date,Ee=U.Error,Ke=U.Function,_t=U.Math,Je=U.Object,mc=U.RegExp,Wy=U.String,hn=U.TypeError,Bo=N.prototype,Zy=Ke.prototype,Ni=Je.prototype,jo=U["__core-js_shared__"],No=Zy.toString,Xe=Ni.hasOwnProperty,Vy=0,eh=function(){var r=/[^.]+$/.exec(jo&&jo.keys&&jo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Do=Ni.toString,Ky=No.call(Je),Gy=At._,Qy=mc("^"+No.call(Xe).replace(Xl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Uo=jf?U.Buffer:n,Ir=U.Symbol,zo=U.Uint8Array,th=Uo?Uo.allocUnsafe:n,Ho=Xf(Je.getPrototypeOf,Je),nh=Je.create,rh=Ni.propertyIsEnumerable,Fo=Bo.splice,ih=Ir?Ir.isConcatSpreadable:n,As=Ir?Ir.iterator:n,ei=Ir?Ir.toStringTag:n,qo=function(){try{var r=si(Je,"defineProperty");return r({},"",{}),r}catch{}}(),Yy=U.clearTimeout!==At.clearTimeout&&U.clearTimeout,Xy=ce&&ce.now!==At.Date.now&&ce.now,Jy=U.setTimeout!==At.setTimeout&&U.setTimeout,Wo=_t.ceil,Zo=_t.floor,vc=Je.getOwnPropertySymbols,eb=Uo?Uo.isBuffer:n,sh=U.isFinite,tb=Bo.join,nb=Xf(Je.keys,Je),wt=_t.max,Lt=_t.min,rb=ce.now,ib=U.parseInt,oh=_t.random,sb=Bo.reverse,yc=si(U,"DataView"),Is=si(U,"Map"),bc=si(U,"Promise"),Di=si(U,"Set"),Rs=si(U,"WeakMap"),Os=si(Je,"create"),Vo=Rs&&new Rs,Ui={},ob=oi(yc),ab=oi(Is),lb=oi(bc),cb=oi(Di),ub=oi(Rs),Ko=Ir?Ir.prototype:n,Ls=Ko?Ko.valueOf:n,ah=Ko?Ko.toString:n;function y(r){if(dt(r)&&!Se(r)&&!(r instanceof Fe)){if(r instanceof pn)return r;if(Xe.call(r,"__wrapped__"))return lp(r)}return new pn(r)}var zi=function(){function r(){}return function(s){if(!lt(s))return{};if(nh)return nh(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Go(){}function pn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:k2,evaluate:E2,interpolate:mf,variable:"",imports:{_:y}},y.prototype=Go.prototype,y.prototype.constructor=y,pn.prototype=zi(Go.prototype),pn.prototype.constructor=pn;function Fe(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ge,this.__views__=[]}function db(){var r=new Fe(this.__wrapped__);return r.__actions__=Zt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Zt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Zt(this.__views__),r}function fb(){if(this.__filtered__){var r=new Fe(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function hb(){var r=this.__wrapped__.value(),s=this.__dir__,c=Se(r),p=s<0,m=c?r.length:0,x=E_(0,m,this.__views__),R=x.start,L=x.end,M=L-R,z=p?L:R-1,H=this.__iteratees__,G=H.length,ie=0,de=Lt(M,this.__takeCount__);if(!c||!p&&m==M&&de==M)return Rh(r,this.__actions__);var we=[];e:for(;M--&&ie<de;){z+=s;for(var Re=-1,xe=r[z];++Re<G;){var De=H[Re],We=De.iteratee,nn=De.type,Ut=We(xe);if(nn==q)xe=Ut;else if(!Ut){if(nn==se)continue e;break e}}we[ie++]=xe}return we}Fe.prototype=zi(Go.prototype),Fe.prototype.constructor=Fe;function ti(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var p=r[s];this.set(p[0],p[1])}}function pb(){this.__data__=Os?Os(null):{},this.size=0}function gb(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function mb(r){var s=this.__data__;if(Os){var c=s[r];return c===d?n:c}return Xe.call(s,r)?s[r]:n}function vb(r){var s=this.__data__;return Os?s[r]!==n:Xe.call(s,r)}function yb(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Os&&s===n?d:s,this}ti.prototype.clear=pb,ti.prototype.delete=gb,ti.prototype.get=mb,ti.prototype.has=vb,ti.prototype.set=yb;function ir(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var p=r[s];this.set(p[0],p[1])}}function bb(){this.__data__=[],this.size=0}function _b(r){var s=this.__data__,c=Qo(s,r);if(c<0)return!1;var p=s.length-1;return c==p?s.pop():Fo.call(s,c,1),--this.size,!0}function wb(r){var s=this.__data__,c=Qo(s,r);return c<0?n:s[c][1]}function xb(r){return Qo(this.__data__,r)>-1}function $b(r,s){var c=this.__data__,p=Qo(c,r);return p<0?(++this.size,c.push([r,s])):c[p][1]=s,this}ir.prototype.clear=bb,ir.prototype.delete=_b,ir.prototype.get=wb,ir.prototype.has=xb,ir.prototype.set=$b;function sr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var p=r[s];this.set(p[0],p[1])}}function kb(){this.size=0,this.__data__={hash:new ti,map:new(Is||ir),string:new ti}}function Eb(r){var s=la(this,r).delete(r);return this.size-=s?1:0,s}function Cb(r){return la(this,r).get(r)}function Sb(r){return la(this,r).has(r)}function Tb(r,s){var c=la(this,r),p=c.size;return c.set(r,s),this.size+=c.size==p?0:1,this}sr.prototype.clear=kb,sr.prototype.delete=Eb,sr.prototype.get=Cb,sr.prototype.has=Sb,sr.prototype.set=Tb;function ni(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new sr;++s<c;)this.add(r[s])}function Ab(r){return this.__data__.set(r,d),this}function Ib(r){return this.__data__.has(r)}ni.prototype.add=ni.prototype.push=Ab,ni.prototype.has=Ib;function En(r){var s=this.__data__=new ir(r);this.size=s.size}function Rb(){this.__data__=new ir,this.size=0}function Ob(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function Lb(r){return this.__data__.get(r)}function Pb(r){return this.__data__.has(r)}function Mb(r,s){var c=this.__data__;if(c instanceof ir){var p=c.__data__;if(!Is||p.length<o-1)return p.push([r,s]),this.size=++c.size,this;c=this.__data__=new sr(p)}return c.set(r,s),this.size=c.size,this}En.prototype.clear=Rb,En.prototype.delete=Ob,En.prototype.get=Lb,En.prototype.has=Pb,En.prototype.set=Mb;function lh(r,s){var c=Se(r),p=!c&&ai(r),m=!c&&!p&&Mr(r),x=!c&&!p&&!m&&Wi(r),R=c||p||m||x,L=R?hc(r.length,Wy):[],M=L.length;for(var z in r)(s||Xe.call(r,z))&&!(R&&(z=="length"||m&&(z=="offset"||z=="parent")||x&&(z=="buffer"||z=="byteLength"||z=="byteOffset")||cr(z,M)))&&L.push(z);return L}function ch(r){var s=r.length;return s?r[Ic(0,s-1)]:n}function Bb(r,s){return ca(Zt(r),ri(s,0,r.length))}function jb(r){return ca(Zt(r))}function _c(r,s,c){(c!==n&&!Cn(r[s],c)||c===n&&!(s in r))&&or(r,s,c)}function Ps(r,s,c){var p=r[s];(!(Xe.call(r,s)&&Cn(p,c))||c===n&&!(s in r))&&or(r,s,c)}function Qo(r,s){for(var c=r.length;c--;)if(Cn(r[c][0],s))return c;return-1}function Nb(r,s,c,p){return Rr(r,function(m,x,R){s(p,m,c(m),R)}),p}function uh(r,s){return r&&zn(s,kt(s),r)}function Db(r,s){return r&&zn(s,Kt(s),r)}function or(r,s,c){s=="__proto__"&&qo?qo(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function wc(r,s){for(var c=-1,p=s.length,m=N(p),x=r==null;++c<p;)m[c]=x?n:tu(r,s[c]);return m}function ri(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function gn(r,s,c,p,m,x){var R,L=s&g,M=s&v,z=s&_;if(c&&(R=m?c(r,p,m,x):c(r)),R!==n)return R;if(!lt(r))return r;var H=Se(r);if(H){if(R=S_(r),!L)return Zt(r,R)}else{var G=Pt(r),ie=G==st||G==Be;if(Mr(r))return Ph(r,L);if(G==ht||G==V||ie&&!m){if(R=M||ie?{}:Jh(r),!L)return M?m_(r,Db(R,r)):g_(r,uh(R,r))}else{if(!et[G])return m?r:{};R=T_(r,G,L)}}x||(x=new En);var de=x.get(r);if(de)return de;x.set(r,R),Tp(r)?r.forEach(function(xe){R.add(gn(xe,s,c,xe,r,x))}):Cp(r)&&r.forEach(function(xe,De){R.set(De,gn(xe,s,c,De,r,x))});var we=z?M?zc:Uc:M?Kt:kt,Re=H?n:we(r);return fn(Re||r,function(xe,De){Re&&(De=xe,xe=r[De]),Ps(R,De,gn(xe,s,c,De,r,x))}),R}function Ub(r){var s=kt(r);return function(c){return dh(c,r,s)}}function dh(r,s,c){var p=c.length;if(r==null)return!p;for(r=Je(r);p--;){var m=c[p],x=s[m],R=r[m];if(R===n&&!(m in r)||!x(R))return!1}return!0}function fh(r,s,c){if(typeof r!="function")throw new hn(l);return zs(function(){r.apply(n,c)},s)}function Ms(r,s,c,p){var m=-1,x=Lo,R=!0,L=r.length,M=[],z=s.length;if(!L)return M;c&&(s=ot(s,Jt(c))),p?(x=ac,R=!1):s.length>=o&&(x=Ts,R=!1,s=new ni(s));e:for(;++m<L;){var H=r[m],G=c==null?H:c(H);if(H=p||H!==0?H:0,R&&G===G){for(var ie=z;ie--;)if(s[ie]===G)continue e;M.push(H)}else x(s,G,p)||M.push(H)}return M}var Rr=Dh(Un),hh=Dh($c,!0);function zb(r,s){var c=!0;return Rr(r,function(p,m,x){return c=!!s(p,m,x),c}),c}function Yo(r,s,c){for(var p=-1,m=r.length;++p<m;){var x=r[p],R=s(x);if(R!=null&&(L===n?R===R&&!tn(R):c(R,L)))var L=R,M=x}return M}function Hb(r,s,c,p){var m=r.length;for(c=Te(c),c<0&&(c=-c>m?0:m+c),p=p===n||p>m?m:Te(p),p<0&&(p+=m),p=c>p?0:Ip(p);c<p;)r[c++]=s;return r}function ph(r,s){var c=[];return Rr(r,function(p,m,x){s(p,m,x)&&c.push(p)}),c}function It(r,s,c,p,m){var x=-1,R=r.length;for(c||(c=I_),m||(m=[]);++x<R;){var L=r[x];s>0&&c(L)?s>1?It(L,s-1,c,p,m):Tr(m,L):p||(m[m.length]=L)}return m}var xc=Uh(),gh=Uh(!0);function Un(r,s){return r&&xc(r,s,kt)}function $c(r,s){return r&&gh(r,s,kt)}function Xo(r,s){return Sr(s,function(c){return ur(r[c])})}function ii(r,s){s=Lr(s,r);for(var c=0,p=s.length;r!=null&&c<p;)r=r[Hn(s[c++])];return c&&c==p?r:n}function mh(r,s,c){var p=s(r);return Se(r)?p:Tr(p,c(r))}function Nt(r){return r==null?r===n?Ai:wn:ei&&ei in Je(r)?k_(r):j_(r)}function kc(r,s){return r>s}function Fb(r,s){return r!=null&&Xe.call(r,s)}function qb(r,s){return r!=null&&s in Je(r)}function Wb(r,s,c){return r>=Lt(s,c)&&r<wt(s,c)}function Ec(r,s,c){for(var p=c?ac:Lo,m=r[0].length,x=r.length,R=x,L=N(x),M=1/0,z=[];R--;){var H=r[R];R&&s&&(H=ot(H,Jt(s))),M=Lt(H.length,M),L[R]=!c&&(s||m>=120&&H.length>=120)?new ni(R&&H):n}H=r[0];var G=-1,ie=L[0];e:for(;++G<m&&z.length<M;){var de=H[G],we=s?s(de):de;if(de=c||de!==0?de:0,!(ie?Ts(ie,we):p(z,we,c))){for(R=x;--R;){var Re=L[R];if(!(Re?Ts(Re,we):p(r[R],we,c)))continue e}ie&&ie.push(we),z.push(de)}}return z}function Zb(r,s,c,p){return Un(r,function(m,x,R){s(p,c(m),x,R)}),p}function Bs(r,s,c){s=Lr(s,r),r=rp(r,s);var p=r==null?r:r[Hn(vn(s))];return p==null?n:Xt(p,r,c)}function vh(r){return dt(r)&&Nt(r)==V}function Vb(r){return dt(r)&&Nt(r)==Yt}function Kb(r){return dt(r)&&Nt(r)==re}function js(r,s,c,p,m){return r===s?!0:r==null||s==null||!dt(r)&&!dt(s)?r!==r&&s!==s:Gb(r,s,c,p,js,m)}function Gb(r,s,c,p,m,x){var R=Se(r),L=Se(s),M=R?oe:Pt(r),z=L?oe:Pt(s);M=M==V?ht:M,z=z==V?ht:z;var H=M==ht,G=z==ht,ie=M==z;if(ie&&Mr(r)){if(!Mr(s))return!1;R=!0,H=!1}if(ie&&!H)return x||(x=new En),R||Wi(r)?Qh(r,s,c,p,m,x):x_(r,s,M,c,p,m,x);if(!(c&$)){var de=H&&Xe.call(r,"__wrapped__"),we=G&&Xe.call(s,"__wrapped__");if(de||we){var Re=de?r.value():r,xe=we?s.value():s;return x||(x=new En),m(Re,xe,c,p,x)}}return ie?(x||(x=new En),$_(r,s,c,p,m,x)):!1}function Qb(r){return dt(r)&&Pt(r)==qe}function Cc(r,s,c,p){var m=c.length,x=m,R=!p;if(r==null)return!x;for(r=Je(r);m--;){var L=c[m];if(R&&L[2]?L[1]!==r[L[0]]:!(L[0]in r))return!1}for(;++m<x;){L=c[m];var M=L[0],z=r[M],H=L[1];if(R&&L[2]){if(z===n&&!(M in r))return!1}else{var G=new En;if(p)var ie=p(z,H,M,r,s,G);if(!(ie===n?js(H,z,$|k,p,G):ie))return!1}}return!0}function yh(r){if(!lt(r)||O_(r))return!1;var s=ur(r)?Qy:U2;return s.test(oi(r))}function Yb(r){return dt(r)&&Nt(r)==Nn}function Xb(r){return dt(r)&&Pt(r)==bt}function Jb(r){return dt(r)&&ga(r.length)&&!!nt[Nt(r)]}function bh(r){return typeof r=="function"?r:r==null?Gt:typeof r=="object"?Se(r)?xh(r[0],r[1]):wh(r):zp(r)}function Sc(r){if(!Us(r))return nb(r);var s=[];for(var c in Je(r))Xe.call(r,c)&&c!="constructor"&&s.push(c);return s}function e_(r){if(!lt(r))return B_(r);var s=Us(r),c=[];for(var p in r)p=="constructor"&&(s||!Xe.call(r,p))||c.push(p);return c}function Tc(r,s){return r<s}function _h(r,s){var c=-1,p=Vt(r)?N(r.length):[];return Rr(r,function(m,x,R){p[++c]=s(m,x,R)}),p}function wh(r){var s=Fc(r);return s.length==1&&s[0][2]?tp(s[0][0],s[0][1]):function(c){return c===r||Cc(c,r,s)}}function xh(r,s){return Wc(r)&&ep(s)?tp(Hn(r),s):function(c){var p=tu(c,r);return p===n&&p===s?nu(c,r):js(s,p,$|k)}}function Jo(r,s,c,p,m){r!==s&&xc(s,function(x,R){if(m||(m=new En),lt(x))t_(r,s,R,c,Jo,p,m);else{var L=p?p(Vc(r,R),x,R+"",r,s,m):n;L===n&&(L=x),_c(r,R,L)}},Kt)}function t_(r,s,c,p,m,x,R){var L=Vc(r,c),M=Vc(s,c),z=R.get(M);if(z){_c(r,c,z);return}var H=x?x(L,M,c+"",r,s,R):n,G=H===n;if(G){var ie=Se(M),de=!ie&&Mr(M),we=!ie&&!de&&Wi(M);H=M,ie||de||we?Se(L)?H=L:pt(L)?H=Zt(L):de?(G=!1,H=Ph(M,!0)):we?(G=!1,H=Mh(M,!0)):H=[]:Hs(M)||ai(M)?(H=L,ai(L)?H=Rp(L):(!lt(L)||ur(L))&&(H=Jh(M))):G=!1}G&&(R.set(M,H),m(H,M,p,x,R),R.delete(M)),_c(r,c,H)}function $h(r,s){var c=r.length;if(c)return s+=s<0?c:0,cr(s,c)?r[s]:n}function kh(r,s,c){s.length?s=ot(s,function(x){return Se(x)?function(R){return ii(R,x.length===1?x[0]:x)}:x}):s=[Gt];var p=-1;s=ot(s,Jt(ye()));var m=_h(r,function(x,R,L){var M=ot(s,function(z){return z(x)});return{criteria:M,index:++p,value:x}});return Ty(m,function(x,R){return p_(x,R,c)})}function n_(r,s){return Eh(r,s,function(c,p){return nu(r,p)})}function Eh(r,s,c){for(var p=-1,m=s.length,x={};++p<m;){var R=s[p],L=ii(r,R);c(L,R)&&Ns(x,Lr(R,r),L)}return x}function r_(r){return function(s){return ii(s,r)}}function Ac(r,s,c,p){var m=p?Sy:Pi,x=-1,R=s.length,L=r;for(r===s&&(s=Zt(s)),c&&(L=ot(r,Jt(c)));++x<R;)for(var M=0,z=s[x],H=c?c(z):z;(M=m(L,H,M,p))>-1;)L!==r&&Fo.call(L,M,1),Fo.call(r,M,1);return r}function Ch(r,s){for(var c=r?s.length:0,p=c-1;c--;){var m=s[c];if(c==p||m!==x){var x=m;cr(m)?Fo.call(r,m,1):Lc(r,m)}}return r}function Ic(r,s){return r+Zo(oh()*(s-r+1))}function i_(r,s,c,p){for(var m=-1,x=wt(Wo((s-r)/(c||1)),0),R=N(x);x--;)R[p?x:++m]=r,r+=c;return R}function Rc(r,s){var c="";if(!r||s<1||s>pe)return c;do s%2&&(c+=r),s=Zo(s/2),s&&(r+=r);while(s);return c}function je(r,s){return Kc(np(r,s,Gt),r+"")}function s_(r){return ch(Zi(r))}function o_(r,s){var c=Zi(r);return ca(c,ri(s,0,c.length))}function Ns(r,s,c,p){if(!lt(r))return r;s=Lr(s,r);for(var m=-1,x=s.length,R=x-1,L=r;L!=null&&++m<x;){var M=Hn(s[m]),z=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(m!=R){var H=L[M];z=p?p(H,M,L):n,z===n&&(z=lt(H)?H:cr(s[m+1])?[]:{})}Ps(L,M,z),L=L[M]}return r}var Sh=Vo?function(r,s){return Vo.set(r,s),r}:Gt,a_=qo?function(r,s){return qo(r,"toString",{configurable:!0,enumerable:!1,value:iu(s),writable:!0})}:Gt;function l_(r){return ca(Zi(r))}function mn(r,s,c){var p=-1,m=r.length;s<0&&(s=-s>m?0:m+s),c=c>m?m:c,c<0&&(c+=m),m=s>c?0:c-s>>>0,s>>>=0;for(var x=N(m);++p<m;)x[p]=r[p+s];return x}function c_(r,s){var c;return Rr(r,function(p,m,x){return c=s(p,m,x),!c}),!!c}function ea(r,s,c){var p=0,m=r==null?p:r.length;if(typeof s=="number"&&s===s&&m<=Me){for(;p<m;){var x=p+m>>>1,R=r[x];R!==null&&!tn(R)&&(c?R<=s:R<s)?p=x+1:m=x}return m}return Oc(r,s,Gt,c)}function Oc(r,s,c,p){var m=0,x=r==null?0:r.length;if(x===0)return 0;s=c(s);for(var R=s!==s,L=s===null,M=tn(s),z=s===n;m<x;){var H=Zo((m+x)/2),G=c(r[H]),ie=G!==n,de=G===null,we=G===G,Re=tn(G);if(R)var xe=p||we;else z?xe=we&&(p||ie):L?xe=we&&ie&&(p||!de):M?xe=we&&ie&&!de&&(p||!Re):de||Re?xe=!1:xe=p?G<=s:G<s;xe?m=H+1:x=H}return Lt(x,Pe)}function Th(r,s){for(var c=-1,p=r.length,m=0,x=[];++c<p;){var R=r[c],L=s?s(R):R;if(!c||!Cn(L,M)){var M=L;x[m++]=R===0?0:R}}return x}function Ah(r){return typeof r=="number"?r:tn(r)?he:+r}function en(r){if(typeof r=="string")return r;if(Se(r))return ot(r,en)+"";if(tn(r))return ah?ah.call(r):"";var s=r+"";return s=="0"&&1/r==-fe?"-0":s}function Or(r,s,c){var p=-1,m=Lo,x=r.length,R=!0,L=[],M=L;if(c)R=!1,m=ac;else if(x>=o){var z=s?null:__(r);if(z)return Mo(z);R=!1,m=Ts,M=new ni}else M=s?[]:L;e:for(;++p<x;){var H=r[p],G=s?s(H):H;if(H=c||H!==0?H:0,R&&G===G){for(var ie=M.length;ie--;)if(M[ie]===G)continue e;s&&M.push(G),L.push(H)}else m(M,G,c)||(M!==L&&M.push(G),L.push(H))}return L}function Lc(r,s){return s=Lr(s,r),r=rp(r,s),r==null||delete r[Hn(vn(s))]}function Ih(r,s,c,p){return Ns(r,s,c(ii(r,s)),p)}function ta(r,s,c,p){for(var m=r.length,x=p?m:-1;(p?x--:++x<m)&&s(r[x],x,r););return c?mn(r,p?0:x,p?x+1:m):mn(r,p?x+1:0,p?m:x)}function Rh(r,s){var c=r;return c instanceof Fe&&(c=c.value()),lc(s,function(p,m){return m.func.apply(m.thisArg,Tr([p],m.args))},c)}function Pc(r,s,c){var p=r.length;if(p<2)return p?Or(r[0]):[];for(var m=-1,x=N(p);++m<p;)for(var R=r[m],L=-1;++L<p;)L!=m&&(x[m]=Ms(x[m]||R,r[L],s,c));return Or(It(x,1),s,c)}function Oh(r,s,c){for(var p=-1,m=r.length,x=s.length,R={};++p<m;){var L=p<x?s[p]:n;c(R,r[p],L)}return R}function Mc(r){return pt(r)?r:[]}function Bc(r){return typeof r=="function"?r:Gt}function Lr(r,s){return Se(r)?r:Wc(r,s)?[r]:ap(Ye(r))}var u_=je;function Pr(r,s,c){var p=r.length;return c=c===n?p:c,!s&&c>=p?r:mn(r,s,c)}var Lh=Yy||function(r){return At.clearTimeout(r)};function Ph(r,s){if(s)return r.slice();var c=r.length,p=th?th(c):new r.constructor(c);return r.copy(p),p}function jc(r){var s=new r.constructor(r.byteLength);return new zo(s).set(new zo(r)),s}function d_(r,s){var c=s?jc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function f_(r){var s=new r.constructor(r.source,vf.exec(r));return s.lastIndex=r.lastIndex,s}function h_(r){return Ls?Je(Ls.call(r)):{}}function Mh(r,s){var c=s?jc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function Bh(r,s){if(r!==s){var c=r!==n,p=r===null,m=r===r,x=tn(r),R=s!==n,L=s===null,M=s===s,z=tn(s);if(!L&&!z&&!x&&r>s||x&&R&&M&&!L&&!z||p&&R&&M||!c&&M||!m)return 1;if(!p&&!x&&!z&&r<s||z&&c&&m&&!p&&!x||L&&c&&m||!R&&m||!M)return-1}return 0}function p_(r,s,c){for(var p=-1,m=r.criteria,x=s.criteria,R=m.length,L=c.length;++p<R;){var M=Bh(m[p],x[p]);if(M){if(p>=L)return M;var z=c[p];return M*(z=="desc"?-1:1)}}return r.index-s.index}function jh(r,s,c,p){for(var m=-1,x=r.length,R=c.length,L=-1,M=s.length,z=wt(x-R,0),H=N(M+z),G=!p;++L<M;)H[L]=s[L];for(;++m<R;)(G||m<x)&&(H[c[m]]=r[m]);for(;z--;)H[L++]=r[m++];return H}function Nh(r,s,c,p){for(var m=-1,x=r.length,R=-1,L=c.length,M=-1,z=s.length,H=wt(x-L,0),G=N(H+z),ie=!p;++m<H;)G[m]=r[m];for(var de=m;++M<z;)G[de+M]=s[M];for(;++R<L;)(ie||m<x)&&(G[de+c[R]]=r[m++]);return G}function Zt(r,s){var c=-1,p=r.length;for(s||(s=N(p));++c<p;)s[c]=r[c];return s}function zn(r,s,c,p){var m=!c;c||(c={});for(var x=-1,R=s.length;++x<R;){var L=s[x],M=p?p(c[L],r[L],L,c,r):n;M===n&&(M=r[L]),m?or(c,L,M):Ps(c,L,M)}return c}function g_(r,s){return zn(r,qc(r),s)}function m_(r,s){return zn(r,Yh(r),s)}function na(r,s){return function(c,p){var m=Se(c)?wy:Nb,x=s?s():{};return m(c,r,ye(p,2),x)}}function Hi(r){return je(function(s,c){var p=-1,m=c.length,x=m>1?c[m-1]:n,R=m>2?c[2]:n;for(x=r.length>3&&typeof x=="function"?(m--,x):n,R&&Dt(c[0],c[1],R)&&(x=m<3?n:x,m=1),s=Je(s);++p<m;){var L=c[p];L&&r(s,L,p,x)}return s})}function Dh(r,s){return function(c,p){if(c==null)return c;if(!Vt(c))return r(c,p);for(var m=c.length,x=s?m:-1,R=Je(c);(s?x--:++x<m)&&p(R[x],x,R)!==!1;);return c}}function Uh(r){return function(s,c,p){for(var m=-1,x=Je(s),R=p(s),L=R.length;L--;){var M=R[r?L:++m];if(c(x[M],M,x)===!1)break}return s}}function v_(r,s,c){var p=s&w,m=Ds(r);function x(){var R=this&&this!==At&&this instanceof x?m:r;return R.apply(p?c:this,arguments)}return x}function zh(r){return function(s){s=Ye(s);var c=Mi(s)?kn(s):n,p=c?c[0]:s.charAt(0),m=c?Pr(c,1).join(""):s.slice(1);return p[r]()+m}}function Fi(r){return function(s){return lc(Dp(Np(s).replace(ay,"")),r,"")}}function Ds(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=zi(r.prototype),p=r.apply(c,s);return lt(p)?p:c}}function y_(r,s,c){var p=Ds(r);function m(){for(var x=arguments.length,R=N(x),L=x,M=qi(m);L--;)R[L]=arguments[L];var z=x<3&&R[0]!==M&&R[x-1]!==M?[]:Ar(R,M);if(x-=z.length,x<c)return Zh(r,s,ra,m.placeholder,n,R,z,n,n,c-x);var H=this&&this!==At&&this instanceof m?p:r;return Xt(H,this,R)}return m}function Hh(r){return function(s,c,p){var m=Je(s);if(!Vt(s)){var x=ye(c,3);s=kt(s),c=function(L){return x(m[L],L,m)}}var R=r(s,c,p);return R>-1?m[x?s[R]:R]:n}}function Fh(r){return lr(function(s){var c=s.length,p=c,m=pn.prototype.thru;for(r&&s.reverse();p--;){var x=s[p];if(typeof x!="function")throw new hn(l);if(m&&!R&&aa(x)=="wrapper")var R=new pn([],!0)}for(p=R?p:c;++p<c;){x=s[p];var L=aa(x),M=L=="wrapper"?Hc(x):n;M&&Zc(M[0])&&M[1]==(j|S|T|D)&&!M[4].length&&M[9]==1?R=R[aa(M[0])].apply(R,M[3]):R=x.length==1&&Zc(x)?R[L]():R.thru(x)}return function(){var z=arguments,H=z[0];if(R&&z.length==1&&Se(H))return R.plant(H).value();for(var G=0,ie=c?s[G].apply(this,z):H;++G<c;)ie=s[G].call(this,ie);return ie}})}function ra(r,s,c,p,m,x,R,L,M,z){var H=s&j,G=s&w,ie=s&C,de=s&(S|E),we=s&te,Re=ie?n:Ds(r);function xe(){for(var De=arguments.length,We=N(De),nn=De;nn--;)We[nn]=arguments[nn];if(de)var Ut=qi(xe),rn=Iy(We,Ut);if(p&&(We=jh(We,p,m,de)),x&&(We=Nh(We,x,R,de)),De-=rn,de&&De<z){var gt=Ar(We,Ut);return Zh(r,s,ra,xe.placeholder,c,We,gt,L,M,z-De)}var Sn=G?c:this,fr=ie?Sn[r]:r;return De=We.length,L?We=N_(We,L):we&&De>1&&We.reverse(),H&&M<De&&(We.length=M),this&&this!==At&&this instanceof xe&&(fr=Re||Ds(fr)),fr.apply(Sn,We)}return xe}function qh(r,s){return function(c,p){return Zb(c,r,s(p),{})}}function ia(r,s){return function(c,p){var m;if(c===n&&p===n)return s;if(c!==n&&(m=c),p!==n){if(m===n)return p;typeof c=="string"||typeof p=="string"?(c=en(c),p=en(p)):(c=Ah(c),p=Ah(p)),m=r(c,p)}return m}}function Nc(r){return lr(function(s){return s=ot(s,Jt(ye())),je(function(c){var p=this;return r(s,function(m){return Xt(m,p,c)})})})}function sa(r,s){s=s===n?" ":en(s);var c=s.length;if(c<2)return c?Rc(s,r):s;var p=Rc(s,Wo(r/Bi(s)));return Mi(s)?Pr(kn(p),0,r).join(""):p.slice(0,r)}function b_(r,s,c,p){var m=s&w,x=Ds(r);function R(){for(var L=-1,M=arguments.length,z=-1,H=p.length,G=N(H+M),ie=this&&this!==At&&this instanceof R?x:r;++z<H;)G[z]=p[z];for(;M--;)G[z++]=arguments[++L];return Xt(ie,m?c:this,G)}return R}function Wh(r){return function(s,c,p){return p&&typeof p!="number"&&Dt(s,c,p)&&(c=p=n),s=dr(s),c===n?(c=s,s=0):c=dr(c),p=p===n?s<c?1:-1:dr(p),i_(s,c,p,r)}}function oa(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=yn(s),c=yn(c)),r(s,c)}}function Zh(r,s,c,p,m,x,R,L,M,z){var H=s&S,G=H?R:n,ie=H?n:R,de=H?x:n,we=H?n:x;s|=H?T:O,s&=~(H?O:T),s&I||(s&=~(w|C));var Re=[r,s,m,de,G,we,ie,L,M,z],xe=c.apply(n,Re);return Zc(r)&&ip(xe,Re),xe.placeholder=p,sp(xe,r,s)}function Dc(r){var s=_t[r];return function(c,p){if(c=yn(c),p=p==null?0:Lt(Te(p),292),p&&sh(c)){var m=(Ye(c)+"e").split("e"),x=s(m[0]+"e"+(+m[1]+p));return m=(Ye(x)+"e").split("e"),+(m[0]+"e"+(+m[1]-p))}return s(c)}}var __=Di&&1/Mo(new Di([,-0]))[1]==fe?function(r){return new Di(r)}:au;function Vh(r){return function(s){var c=Pt(s);return c==qe?gc(s):c==bt?jy(s):Ay(s,r(s))}}function ar(r,s,c,p,m,x,R,L){var M=s&C;if(!M&&typeof r!="function")throw new hn(l);var z=p?p.length:0;if(z||(s&=~(T|O),p=m=n),R=R===n?R:wt(Te(R),0),L=L===n?L:Te(L),z-=m?m.length:0,s&O){var H=p,G=m;p=m=n}var ie=M?n:Hc(r),de=[r,s,c,p,m,H,G,x,R,L];if(ie&&M_(de,ie),r=de[0],s=de[1],c=de[2],p=de[3],m=de[4],L=de[9]=de[9]===n?M?0:r.length:wt(de[9]-z,0),!L&&s&(S|E)&&(s&=~(S|E)),!s||s==w)var we=v_(r,s,c);else s==S||s==E?we=y_(r,s,L):(s==T||s==(w|T))&&!m.length?we=b_(r,s,c,p):we=ra.apply(n,de);var Re=ie?Sh:ip;return sp(Re(we,de),r,s)}function Kh(r,s,c,p){return r===n||Cn(r,Ni[c])&&!Xe.call(p,c)?s:r}function Gh(r,s,c,p,m,x){return lt(r)&&lt(s)&&(x.set(s,r),Jo(r,s,n,Gh,x),x.delete(s)),r}function w_(r){return Hs(r)?n:r}function Qh(r,s,c,p,m,x){var R=c&$,L=r.length,M=s.length;if(L!=M&&!(R&&M>L))return!1;var z=x.get(r),H=x.get(s);if(z&&H)return z==s&&H==r;var G=-1,ie=!0,de=c&k?new ni:n;for(x.set(r,s),x.set(s,r);++G<L;){var we=r[G],Re=s[G];if(p)var xe=R?p(Re,we,G,s,r,x):p(we,Re,G,r,s,x);if(xe!==n){if(xe)continue;ie=!1;break}if(de){if(!cc(s,function(De,We){if(!Ts(de,We)&&(we===De||m(we,De,c,p,x)))return de.push(We)})){ie=!1;break}}else if(!(we===Re||m(we,Re,c,p,x))){ie=!1;break}}return x.delete(r),x.delete(s),ie}function x_(r,s,c,p,m,x,R){switch(c){case Wt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Yt:return!(r.byteLength!=s.byteLength||!x(new zo(r),new zo(s)));case F:case re:case Tt:return Cn(+r,+s);case at:return r.name==s.name&&r.message==s.message;case Nn:case xn:return r==s+"";case qe:var L=gc;case bt:var M=p&$;if(L||(L=Mo),r.size!=s.size&&!M)return!1;var z=R.get(r);if(z)return z==s;p|=k,R.set(r,s);var H=Qh(L(r),L(s),p,m,x,R);return R.delete(r),H;case Dn:if(Ls)return Ls.call(r)==Ls.call(s)}return!1}function $_(r,s,c,p,m,x){var R=c&$,L=Uc(r),M=L.length,z=Uc(s),H=z.length;if(M!=H&&!R)return!1;for(var G=M;G--;){var ie=L[G];if(!(R?ie in s:Xe.call(s,ie)))return!1}var de=x.get(r),we=x.get(s);if(de&&we)return de==s&&we==r;var Re=!0;x.set(r,s),x.set(s,r);for(var xe=R;++G<M;){ie=L[G];var De=r[ie],We=s[ie];if(p)var nn=R?p(We,De,ie,s,r,x):p(De,We,ie,r,s,x);if(!(nn===n?De===We||m(De,We,c,p,x):nn)){Re=!1;break}xe||(xe=ie=="constructor")}if(Re&&!xe){var Ut=r.constructor,rn=s.constructor;Ut!=rn&&"constructor"in r&&"constructor"in s&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof rn=="function"&&rn instanceof rn)&&(Re=!1)}return x.delete(r),x.delete(s),Re}function lr(r){return Kc(np(r,n,dp),r+"")}function Uc(r){return mh(r,kt,qc)}function zc(r){return mh(r,Kt,Yh)}var Hc=Vo?function(r){return Vo.get(r)}:au;function aa(r){for(var s=r.name+"",c=Ui[s],p=Xe.call(Ui,s)?c.length:0;p--;){var m=c[p],x=m.func;if(x==null||x==r)return m.name}return s}function qi(r){var s=Xe.call(y,"placeholder")?y:r;return s.placeholder}function ye(){var r=y.iteratee||su;return r=r===su?bh:r,arguments.length?r(arguments[0],arguments[1]):r}function la(r,s){var c=r.__data__;return R_(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Fc(r){for(var s=kt(r),c=s.length;c--;){var p=s[c],m=r[p];s[c]=[p,m,ep(m)]}return s}function si(r,s){var c=Py(r,s);return yh(c)?c:n}function k_(r){var s=Xe.call(r,ei),c=r[ei];try{r[ei]=n;var p=!0}catch{}var m=Do.call(r);return p&&(s?r[ei]=c:delete r[ei]),m}var qc=vc?function(r){return r==null?[]:(r=Je(r),Sr(vc(r),function(s){return rh.call(r,s)}))}:lu,Yh=vc?function(r){for(var s=[];r;)Tr(s,qc(r)),r=Ho(r);return s}:lu,Pt=Nt;(yc&&Pt(new yc(new ArrayBuffer(1)))!=Wt||Is&&Pt(new Is)!=qe||bc&&Pt(bc.resolve())!=Er||Di&&Pt(new Di)!=bt||Rs&&Pt(new Rs)!=$e)&&(Pt=function(r){var s=Nt(r),c=s==ht?r.constructor:n,p=c?oi(c):"";if(p)switch(p){case ob:return Wt;case ab:return qe;case lb:return Er;case cb:return bt;case ub:return $e}return s});function E_(r,s,c){for(var p=-1,m=c.length;++p<m;){var x=c[p],R=x.size;switch(x.type){case"drop":r+=R;break;case"dropRight":s-=R;break;case"take":s=Lt(s,r+R);break;case"takeRight":r=wt(r,s-R);break}}return{start:r,end:s}}function C_(r){var s=r.match(O2);return s?s[1].split(L2):[]}function Xh(r,s,c){s=Lr(s,r);for(var p=-1,m=s.length,x=!1;++p<m;){var R=Hn(s[p]);if(!(x=r!=null&&c(r,R)))break;r=r[R]}return x||++p!=m?x:(m=r==null?0:r.length,!!m&&ga(m)&&cr(R,m)&&(Se(r)||ai(r)))}function S_(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Xe.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Jh(r){return typeof r.constructor=="function"&&!Us(r)?zi(Ho(r)):{}}function T_(r,s,c){var p=r.constructor;switch(s){case Yt:return jc(r);case F:case re:return new p(+r);case Wt:return d_(r,c);case $n:case nr:case rr:case Cr:case Ii:case Ri:case Oi:case Ql:case Yl:return Mh(r,c);case qe:return new p;case Tt:case xn:return new p(r);case Nn:return f_(r);case bt:return new p;case Dn:return h_(r)}}function A_(r,s){var c=s.length;if(!c)return r;var p=c-1;return s[p]=(c>1?"& ":"")+s[p],s=s.join(c>2?", ":" "),r.replace(R2,`{
/* [wrapped with `+s+`] */
`)}function I_(r){return Se(r)||ai(r)||!!(ih&&r&&r[ih])}function cr(r,s){var c=typeof r;return s=s??pe,!!s&&(c=="number"||c!="symbol"&&H2.test(r))&&r>-1&&r%1==0&&r<s}function Dt(r,s,c){if(!lt(c))return!1;var p=typeof s;return(p=="number"?Vt(c)&&cr(s,c.length):p=="string"&&s in c)?Cn(c[s],r):!1}function Wc(r,s){if(Se(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||tn(r)?!0:S2.test(r)||!C2.test(r)||s!=null&&r in Je(s)}function R_(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Zc(r){var s=aa(r),c=y[s];if(typeof c!="function"||!(s in Fe.prototype))return!1;if(r===c)return!0;var p=Hc(c);return!!p&&r===p[0]}function O_(r){return!!eh&&eh in r}var L_=jo?ur:cu;function Us(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Ni;return r===c}function ep(r){return r===r&&!lt(r)}function tp(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in Je(c))}}function P_(r){var s=ha(r,function(p){return c.size===f&&c.clear(),p}),c=s.cache;return s}function M_(r,s){var c=r[1],p=s[1],m=c|p,x=m<(w|C|j),R=p==j&&c==S||p==j&&c==D&&r[7].length<=s[8]||p==(j|D)&&s[7].length<=s[8]&&c==S;if(!(x||R))return r;p&w&&(r[2]=s[2],m|=c&w?0:I);var L=s[3];if(L){var M=r[3];r[3]=M?jh(M,L,s[4]):L,r[4]=M?Ar(r[3],h):s[4]}return L=s[5],L&&(M=r[5],r[5]=M?Nh(M,L,s[6]):L,r[6]=M?Ar(r[5],h):s[6]),L=s[7],L&&(r[7]=L),p&j&&(r[8]=r[8]==null?s[8]:Lt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function B_(r){var s=[];if(r!=null)for(var c in Je(r))s.push(c);return s}function j_(r){return Do.call(r)}function np(r,s,c){return s=wt(s===n?r.length-1:s,0),function(){for(var p=arguments,m=-1,x=wt(p.length-s,0),R=N(x);++m<x;)R[m]=p[s+m];m=-1;for(var L=N(s+1);++m<s;)L[m]=p[m];return L[s]=c(R),Xt(r,this,L)}}function rp(r,s){return s.length<2?r:ii(r,mn(s,0,-1))}function N_(r,s){for(var c=r.length,p=Lt(s.length,c),m=Zt(r);p--;){var x=s[p];r[p]=cr(x,c)?m[x]:n}return r}function Vc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var ip=op(Sh),zs=Jy||function(r,s){return At.setTimeout(r,s)},Kc=op(a_);function sp(r,s,c){var p=s+"";return Kc(r,A_(p,D_(C_(p),c)))}function op(r){var s=0,c=0;return function(){var p=rb(),m=Q-(p-c);if(c=p,m>0){if(++s>=Z)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ca(r,s){var c=-1,p=r.length,m=p-1;for(s=s===n?p:s;++c<s;){var x=Ic(c,m),R=r[x];r[x]=r[c],r[c]=R}return r.length=s,r}var ap=P_(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(T2,function(c,p,m,x){s.push(m?x.replace(B2,"$1"):p||c)}),s});function Hn(r){if(typeof r=="string"||tn(r))return r;var s=r+"";return s=="0"&&1/r==-fe?"-0":s}function oi(r){if(r!=null){try{return No.call(r)}catch{}try{return r+""}catch{}}return""}function D_(r,s){return fn(ee,function(c){var p="_."+c[0];s&c[1]&&!Lo(r,p)&&r.push(p)}),r.sort()}function lp(r){if(r instanceof Fe)return r.clone();var s=new pn(r.__wrapped__,r.__chain__);return s.__actions__=Zt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function U_(r,s,c){(c?Dt(r,s,c):s===n)?s=1:s=wt(Te(s),0);var p=r==null?0:r.length;if(!p||s<1)return[];for(var m=0,x=0,R=N(Wo(p/s));m<p;)R[x++]=mn(r,m,m+=s);return R}function z_(r){for(var s=-1,c=r==null?0:r.length,p=0,m=[];++s<c;){var x=r[s];x&&(m[p++]=x)}return m}function H_(){var r=arguments.length;if(!r)return[];for(var s=N(r-1),c=arguments[0],p=r;p--;)s[p-1]=arguments[p];return Tr(Se(c)?Zt(c):[c],It(s,1))}var F_=je(function(r,s){return pt(r)?Ms(r,It(s,1,pt,!0)):[]}),q_=je(function(r,s){var c=vn(s);return pt(c)&&(c=n),pt(r)?Ms(r,It(s,1,pt,!0),ye(c,2)):[]}),W_=je(function(r,s){var c=vn(s);return pt(c)&&(c=n),pt(r)?Ms(r,It(s,1,pt,!0),n,c):[]});function Z_(r,s,c){var p=r==null?0:r.length;return p?(s=c||s===n?1:Te(s),mn(r,s<0?0:s,p)):[]}function V_(r,s,c){var p=r==null?0:r.length;return p?(s=c||s===n?1:Te(s),s=p-s,mn(r,0,s<0?0:s)):[]}function K_(r,s){return r&&r.length?ta(r,ye(s,3),!0,!0):[]}function G_(r,s){return r&&r.length?ta(r,ye(s,3),!0):[]}function Q_(r,s,c,p){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&Dt(r,s,c)&&(c=0,p=m),Hb(r,s,c,p)):[]}function cp(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=c==null?0:Te(c);return m<0&&(m=wt(p+m,0)),Po(r,ye(s,3),m)}function up(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=p-1;return c!==n&&(m=Te(c),m=c<0?wt(p+m,0):Lt(m,p-1)),Po(r,ye(s,3),m,!0)}function dp(r){var s=r==null?0:r.length;return s?It(r,1):[]}function Y_(r){var s=r==null?0:r.length;return s?It(r,fe):[]}function X_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Te(s),It(r,s)):[]}function J_(r){for(var s=-1,c=r==null?0:r.length,p={};++s<c;){var m=r[s];p[m[0]]=m[1]}return p}function fp(r){return r&&r.length?r[0]:n}function ew(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=c==null?0:Te(c);return m<0&&(m=wt(p+m,0)),Pi(r,s,m)}function tw(r){var s=r==null?0:r.length;return s?mn(r,0,-1):[]}var nw=je(function(r){var s=ot(r,Mc);return s.length&&s[0]===r[0]?Ec(s):[]}),rw=je(function(r){var s=vn(r),c=ot(r,Mc);return s===vn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?Ec(c,ye(s,2)):[]}),iw=je(function(r){var s=vn(r),c=ot(r,Mc);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?Ec(c,n,s):[]});function sw(r,s){return r==null?"":tb.call(r,s)}function vn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function ow(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=p;return c!==n&&(m=Te(c),m=m<0?wt(p+m,0):Lt(m,p-1)),s===s?Dy(r,s,m):Po(r,Zf,m,!0)}function aw(r,s){return r&&r.length?$h(r,Te(s)):n}var lw=je(hp);function hp(r,s){return r&&r.length&&s&&s.length?Ac(r,s):r}function cw(r,s,c){return r&&r.length&&s&&s.length?Ac(r,s,ye(c,2)):r}function uw(r,s,c){return r&&r.length&&s&&s.length?Ac(r,s,n,c):r}var dw=lr(function(r,s){var c=r==null?0:r.length,p=wc(r,s);return Ch(r,ot(s,function(m){return cr(m,c)?+m:m}).sort(Bh)),p});function fw(r,s){var c=[];if(!(r&&r.length))return c;var p=-1,m=[],x=r.length;for(s=ye(s,3);++p<x;){var R=r[p];s(R,p,r)&&(c.push(R),m.push(p))}return Ch(r,m),c}function Gc(r){return r==null?r:sb.call(r)}function hw(r,s,c){var p=r==null?0:r.length;return p?(c&&typeof c!="number"&&Dt(r,s,c)?(s=0,c=p):(s=s==null?0:Te(s),c=c===n?p:Te(c)),mn(r,s,c)):[]}function pw(r,s){return ea(r,s)}function gw(r,s,c){return Oc(r,s,ye(c,2))}function mw(r,s){var c=r==null?0:r.length;if(c){var p=ea(r,s);if(p<c&&Cn(r[p],s))return p}return-1}function vw(r,s){return ea(r,s,!0)}function yw(r,s,c){return Oc(r,s,ye(c,2),!0)}function bw(r,s){var c=r==null?0:r.length;if(c){var p=ea(r,s,!0)-1;if(Cn(r[p],s))return p}return-1}function _w(r){return r&&r.length?Th(r):[]}function ww(r,s){return r&&r.length?Th(r,ye(s,2)):[]}function xw(r){var s=r==null?0:r.length;return s?mn(r,1,s):[]}function $w(r,s,c){return r&&r.length?(s=c||s===n?1:Te(s),mn(r,0,s<0?0:s)):[]}function kw(r,s,c){var p=r==null?0:r.length;return p?(s=c||s===n?1:Te(s),s=p-s,mn(r,s<0?0:s,p)):[]}function Ew(r,s){return r&&r.length?ta(r,ye(s,3),!1,!0):[]}function Cw(r,s){return r&&r.length?ta(r,ye(s,3)):[]}var Sw=je(function(r){return Or(It(r,1,pt,!0))}),Tw=je(function(r){var s=vn(r);return pt(s)&&(s=n),Or(It(r,1,pt,!0),ye(s,2))}),Aw=je(function(r){var s=vn(r);return s=typeof s=="function"?s:n,Or(It(r,1,pt,!0),n,s)});function Iw(r){return r&&r.length?Or(r):[]}function Rw(r,s){return r&&r.length?Or(r,ye(s,2)):[]}function Ow(r,s){return s=typeof s=="function"?s:n,r&&r.length?Or(r,n,s):[]}function Qc(r){if(!(r&&r.length))return[];var s=0;return r=Sr(r,function(c){if(pt(c))return s=wt(c.length,s),!0}),hc(s,function(c){return ot(r,uc(c))})}function pp(r,s){if(!(r&&r.length))return[];var c=Qc(r);return s==null?c:ot(c,function(p){return Xt(s,n,p)})}var Lw=je(function(r,s){return pt(r)?Ms(r,s):[]}),Pw=je(function(r){return Pc(Sr(r,pt))}),Mw=je(function(r){var s=vn(r);return pt(s)&&(s=n),Pc(Sr(r,pt),ye(s,2))}),Bw=je(function(r){var s=vn(r);return s=typeof s=="function"?s:n,Pc(Sr(r,pt),n,s)}),jw=je(Qc);function Nw(r,s){return Oh(r||[],s||[],Ps)}function Dw(r,s){return Oh(r||[],s||[],Ns)}var Uw=je(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,pp(r,c)});function gp(r){var s=y(r);return s.__chain__=!0,s}function zw(r,s){return s(r),r}function ua(r,s){return s(r)}var Hw=lr(function(r){var s=r.length,c=s?r[0]:0,p=this.__wrapped__,m=function(x){return wc(x,r)};return s>1||this.__actions__.length||!(p instanceof Fe)||!cr(c)?this.thru(m):(p=p.slice(c,+c+(s?1:0)),p.__actions__.push({func:ua,args:[m],thisArg:n}),new pn(p,this.__chain__).thru(function(x){return s&&!x.length&&x.push(n),x}))});function Fw(){return gp(this)}function qw(){return new pn(this.value(),this.__chain__)}function Ww(){this.__values__===n&&(this.__values__=Ap(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function Zw(){return this}function Vw(r){for(var s,c=this;c instanceof Go;){var p=lp(c);p.__index__=0,p.__values__=n,s?m.__wrapped__=p:s=p;var m=p;c=c.__wrapped__}return m.__wrapped__=r,s}function Kw(){var r=this.__wrapped__;if(r instanceof Fe){var s=r;return this.__actions__.length&&(s=new Fe(this)),s=s.reverse(),s.__actions__.push({func:ua,args:[Gc],thisArg:n}),new pn(s,this.__chain__)}return this.thru(Gc)}function Gw(){return Rh(this.__wrapped__,this.__actions__)}var Qw=na(function(r,s,c){Xe.call(r,c)?++r[c]:or(r,c,1)});function Yw(r,s,c){var p=Se(r)?qf:zb;return c&&Dt(r,s,c)&&(s=n),p(r,ye(s,3))}function Xw(r,s){var c=Se(r)?Sr:ph;return c(r,ye(s,3))}var Jw=Hh(cp),e3=Hh(up);function t3(r,s){return It(da(r,s),1)}function n3(r,s){return It(da(r,s),fe)}function r3(r,s,c){return c=c===n?1:Te(c),It(da(r,s),c)}function mp(r,s){var c=Se(r)?fn:Rr;return c(r,ye(s,3))}function vp(r,s){var c=Se(r)?xy:hh;return c(r,ye(s,3))}var i3=na(function(r,s,c){Xe.call(r,c)?r[c].push(s):or(r,c,[s])});function s3(r,s,c,p){r=Vt(r)?r:Zi(r),c=c&&!p?Te(c):0;var m=r.length;return c<0&&(c=wt(m+c,0)),ma(r)?c<=m&&r.indexOf(s,c)>-1:!!m&&Pi(r,s,c)>-1}var o3=je(function(r,s,c){var p=-1,m=typeof s=="function",x=Vt(r)?N(r.length):[];return Rr(r,function(R){x[++p]=m?Xt(s,R,c):Bs(R,s,c)}),x}),a3=na(function(r,s,c){or(r,c,s)});function da(r,s){var c=Se(r)?ot:_h;return c(r,ye(s,3))}function l3(r,s,c,p){return r==null?[]:(Se(s)||(s=s==null?[]:[s]),c=p?n:c,Se(c)||(c=c==null?[]:[c]),kh(r,s,c))}var c3=na(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function u3(r,s,c){var p=Se(r)?lc:Kf,m=arguments.length<3;return p(r,ye(s,4),c,m,Rr)}function d3(r,s,c){var p=Se(r)?$y:Kf,m=arguments.length<3;return p(r,ye(s,4),c,m,hh)}function f3(r,s){var c=Se(r)?Sr:ph;return c(r,pa(ye(s,3)))}function h3(r){var s=Se(r)?ch:s_;return s(r)}function p3(r,s,c){(c?Dt(r,s,c):s===n)?s=1:s=Te(s);var p=Se(r)?Bb:o_;return p(r,s)}function g3(r){var s=Se(r)?jb:l_;return s(r)}function m3(r){if(r==null)return 0;if(Vt(r))return ma(r)?Bi(r):r.length;var s=Pt(r);return s==qe||s==bt?r.size:Sc(r).length}function v3(r,s,c){var p=Se(r)?cc:c_;return c&&Dt(r,s,c)&&(s=n),p(r,ye(s,3))}var y3=je(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Dt(r,s[0],s[1])?s=[]:c>2&&Dt(s[0],s[1],s[2])&&(s=[s[0]]),kh(r,It(s,1),[])}),fa=Xy||function(){return At.Date.now()};function b3(r,s){if(typeof s!="function")throw new hn(l);return r=Te(r),function(){if(--r<1)return s.apply(this,arguments)}}function yp(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,ar(r,j,n,n,n,n,s)}function bp(r,s){var c;if(typeof s!="function")throw new hn(l);return r=Te(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Yc=je(function(r,s,c){var p=w;if(c.length){var m=Ar(c,qi(Yc));p|=T}return ar(r,p,s,c,m)}),_p=je(function(r,s,c){var p=w|C;if(c.length){var m=Ar(c,qi(_p));p|=T}return ar(s,p,r,c,m)});function wp(r,s,c){s=c?n:s;var p=ar(r,S,n,n,n,n,n,s);return p.placeholder=wp.placeholder,p}function xp(r,s,c){s=c?n:s;var p=ar(r,E,n,n,n,n,n,s);return p.placeholder=xp.placeholder,p}function $p(r,s,c){var p,m,x,R,L,M,z=0,H=!1,G=!1,ie=!0;if(typeof r!="function")throw new hn(l);s=yn(s)||0,lt(c)&&(H=!!c.leading,G="maxWait"in c,x=G?wt(yn(c.maxWait)||0,s):x,ie="trailing"in c?!!c.trailing:ie);function de(gt){var Sn=p,fr=m;return p=m=n,z=gt,R=r.apply(fr,Sn),R}function we(gt){return z=gt,L=zs(De,s),H?de(gt):R}function Re(gt){var Sn=gt-M,fr=gt-z,Hp=s-Sn;return G?Lt(Hp,x-fr):Hp}function xe(gt){var Sn=gt-M,fr=gt-z;return M===n||Sn>=s||Sn<0||G&&fr>=x}function De(){var gt=fa();if(xe(gt))return We(gt);L=zs(De,Re(gt))}function We(gt){return L=n,ie&&p?de(gt):(p=m=n,R)}function nn(){L!==n&&Lh(L),z=0,p=M=m=L=n}function Ut(){return L===n?R:We(fa())}function rn(){var gt=fa(),Sn=xe(gt);if(p=arguments,m=this,M=gt,Sn){if(L===n)return we(M);if(G)return Lh(L),L=zs(De,s),de(M)}return L===n&&(L=zs(De,s)),R}return rn.cancel=nn,rn.flush=Ut,rn}var _3=je(function(r,s){return fh(r,1,s)}),w3=je(function(r,s,c){return fh(r,yn(s)||0,c)});function x3(r){return ar(r,te)}function ha(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new hn(l);var c=function(){var p=arguments,m=s?s.apply(this,p):p[0],x=c.cache;if(x.has(m))return x.get(m);var R=r.apply(this,p);return c.cache=x.set(m,R)||x,R};return c.cache=new(ha.Cache||sr),c}ha.Cache=sr;function pa(r){if(typeof r!="function")throw new hn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function $3(r){return bp(2,r)}var k3=u_(function(r,s){s=s.length==1&&Se(s[0])?ot(s[0],Jt(ye())):ot(It(s,1),Jt(ye()));var c=s.length;return je(function(p){for(var m=-1,x=Lt(p.length,c);++m<x;)p[m]=s[m].call(this,p[m]);return Xt(r,this,p)})}),Xc=je(function(r,s){var c=Ar(s,qi(Xc));return ar(r,T,n,s,c)}),kp=je(function(r,s){var c=Ar(s,qi(kp));return ar(r,O,n,s,c)}),E3=lr(function(r,s){return ar(r,D,n,n,n,s)});function C3(r,s){if(typeof r!="function")throw new hn(l);return s=s===n?s:Te(s),je(r,s)}function S3(r,s){if(typeof r!="function")throw new hn(l);return s=s==null?0:wt(Te(s),0),je(function(c){var p=c[s],m=Pr(c,0,s);return p&&Tr(m,p),Xt(r,this,m)})}function T3(r,s,c){var p=!0,m=!0;if(typeof r!="function")throw new hn(l);return lt(c)&&(p="leading"in c?!!c.leading:p,m="trailing"in c?!!c.trailing:m),$p(r,s,{leading:p,maxWait:s,trailing:m})}function A3(r){return yp(r,1)}function I3(r,s){return Xc(Bc(s),r)}function R3(){if(!arguments.length)return[];var r=arguments[0];return Se(r)?r:[r]}function O3(r){return gn(r,_)}function L3(r,s){return s=typeof s=="function"?s:n,gn(r,_,s)}function P3(r){return gn(r,g|_)}function M3(r,s){return s=typeof s=="function"?s:n,gn(r,g|_,s)}function B3(r,s){return s==null||dh(r,s,kt(s))}function Cn(r,s){return r===s||r!==r&&s!==s}var j3=oa(kc),N3=oa(function(r,s){return r>=s}),ai=vh(function(){return arguments}())?vh:function(r){return dt(r)&&Xe.call(r,"callee")&&!rh.call(r,"callee")},Se=N.isArray,D3=Nf?Jt(Nf):Vb;function Vt(r){return r!=null&&ga(r.length)&&!ur(r)}function pt(r){return dt(r)&&Vt(r)}function U3(r){return r===!0||r===!1||dt(r)&&Nt(r)==F}var Mr=eb||cu,z3=Df?Jt(Df):Kb;function H3(r){return dt(r)&&r.nodeType===1&&!Hs(r)}function F3(r){if(r==null)return!0;if(Vt(r)&&(Se(r)||typeof r=="string"||typeof r.splice=="function"||Mr(r)||Wi(r)||ai(r)))return!r.length;var s=Pt(r);if(s==qe||s==bt)return!r.size;if(Us(r))return!Sc(r).length;for(var c in r)if(Xe.call(r,c))return!1;return!0}function q3(r,s){return js(r,s)}function W3(r,s,c){c=typeof c=="function"?c:n;var p=c?c(r,s):n;return p===n?js(r,s,n,c):!!p}function Jc(r){if(!dt(r))return!1;var s=Nt(r);return s==at||s==He||typeof r.message=="string"&&typeof r.name=="string"&&!Hs(r)}function Z3(r){return typeof r=="number"&&sh(r)}function ur(r){if(!lt(r))return!1;var s=Nt(r);return s==st||s==Be||s==ve||s==Ti}function Ep(r){return typeof r=="number"&&r==Te(r)}function ga(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=pe}function lt(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function dt(r){return r!=null&&typeof r=="object"}var Cp=Uf?Jt(Uf):Qb;function V3(r,s){return r===s||Cc(r,s,Fc(s))}function K3(r,s,c){return c=typeof c=="function"?c:n,Cc(r,s,Fc(s),c)}function G3(r){return Sp(r)&&r!=+r}function Q3(r){if(L_(r))throw new Ee(a);return yh(r)}function Y3(r){return r===null}function X3(r){return r==null}function Sp(r){return typeof r=="number"||dt(r)&&Nt(r)==Tt}function Hs(r){if(!dt(r)||Nt(r)!=ht)return!1;var s=Ho(r);if(s===null)return!0;var c=Xe.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&No.call(c)==Ky}var eu=zf?Jt(zf):Yb;function J3(r){return Ep(r)&&r>=-pe&&r<=pe}var Tp=Hf?Jt(Hf):Xb;function ma(r){return typeof r=="string"||!Se(r)&&dt(r)&&Nt(r)==xn}function tn(r){return typeof r=="symbol"||dt(r)&&Nt(r)==Dn}var Wi=Ff?Jt(Ff):Jb;function ex(r){return r===n}function tx(r){return dt(r)&&Pt(r)==$e}function nx(r){return dt(r)&&Nt(r)==tr}var rx=oa(Tc),ix=oa(function(r,s){return r<=s});function Ap(r){if(!r)return[];if(Vt(r))return ma(r)?kn(r):Zt(r);if(As&&r[As])return By(r[As]());var s=Pt(r),c=s==qe?gc:s==bt?Mo:Zi;return c(r)}function dr(r){if(!r)return r===0?r:0;if(r=yn(r),r===fe||r===-fe){var s=r<0?-1:1;return s*ne}return r===r?r:0}function Te(r){var s=dr(r),c=s%1;return s===s?c?s-c:s:0}function Ip(r){return r?ri(Te(r),0,ge):0}function yn(r){if(typeof r=="number")return r;if(tn(r))return he;if(lt(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=lt(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Gf(r);var c=D2.test(r);return c||z2.test(r)?by(r.slice(2),c?2:8):N2.test(r)?he:+r}function Rp(r){return zn(r,Kt(r))}function sx(r){return r?ri(Te(r),-pe,pe):r===0?r:0}function Ye(r){return r==null?"":en(r)}var ox=Hi(function(r,s){if(Us(s)||Vt(s)){zn(s,kt(s),r);return}for(var c in s)Xe.call(s,c)&&Ps(r,c,s[c])}),Op=Hi(function(r,s){zn(s,Kt(s),r)}),va=Hi(function(r,s,c,p){zn(s,Kt(s),r,p)}),ax=Hi(function(r,s,c,p){zn(s,kt(s),r,p)}),lx=lr(wc);function cx(r,s){var c=zi(r);return s==null?c:uh(c,s)}var ux=je(function(r,s){r=Je(r);var c=-1,p=s.length,m=p>2?s[2]:n;for(m&&Dt(s[0],s[1],m)&&(p=1);++c<p;)for(var x=s[c],R=Kt(x),L=-1,M=R.length;++L<M;){var z=R[L],H=r[z];(H===n||Cn(H,Ni[z])&&!Xe.call(r,z))&&(r[z]=x[z])}return r}),dx=je(function(r){return r.push(n,Gh),Xt(Lp,n,r)});function fx(r,s){return Wf(r,ye(s,3),Un)}function hx(r,s){return Wf(r,ye(s,3),$c)}function px(r,s){return r==null?r:xc(r,ye(s,3),Kt)}function gx(r,s){return r==null?r:gh(r,ye(s,3),Kt)}function mx(r,s){return r&&Un(r,ye(s,3))}function vx(r,s){return r&&$c(r,ye(s,3))}function yx(r){return r==null?[]:Xo(r,kt(r))}function bx(r){return r==null?[]:Xo(r,Kt(r))}function tu(r,s,c){var p=r==null?n:ii(r,s);return p===n?c:p}function _x(r,s){return r!=null&&Xh(r,s,Fb)}function nu(r,s){return r!=null&&Xh(r,s,qb)}var wx=qh(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Do.call(s)),r[s]=c},iu(Gt)),xx=qh(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Do.call(s)),Xe.call(r,s)?r[s].push(c):r[s]=[c]},ye),$x=je(Bs);function kt(r){return Vt(r)?lh(r):Sc(r)}function Kt(r){return Vt(r)?lh(r,!0):e_(r)}function kx(r,s){var c={};return s=ye(s,3),Un(r,function(p,m,x){or(c,s(p,m,x),p)}),c}function Ex(r,s){var c={};return s=ye(s,3),Un(r,function(p,m,x){or(c,m,s(p,m,x))}),c}var Cx=Hi(function(r,s,c){Jo(r,s,c)}),Lp=Hi(function(r,s,c,p){Jo(r,s,c,p)}),Sx=lr(function(r,s){var c={};if(r==null)return c;var p=!1;s=ot(s,function(x){return x=Lr(x,r),p||(p=x.length>1),x}),zn(r,zc(r),c),p&&(c=gn(c,g|v|_,w_));for(var m=s.length;m--;)Lc(c,s[m]);return c});function Tx(r,s){return Pp(r,pa(ye(s)))}var Ax=lr(function(r,s){return r==null?{}:n_(r,s)});function Pp(r,s){if(r==null)return{};var c=ot(zc(r),function(p){return[p]});return s=ye(s),Eh(r,c,function(p,m){return s(p,m[0])})}function Ix(r,s,c){s=Lr(s,r);var p=-1,m=s.length;for(m||(m=1,r=n);++p<m;){var x=r==null?n:r[Hn(s[p])];x===n&&(p=m,x=c),r=ur(x)?x.call(r):x}return r}function Rx(r,s,c){return r==null?r:Ns(r,s,c)}function Ox(r,s,c,p){return p=typeof p=="function"?p:n,r==null?r:Ns(r,s,c,p)}var Mp=Vh(kt),Bp=Vh(Kt);function Lx(r,s,c){var p=Se(r),m=p||Mr(r)||Wi(r);if(s=ye(s,4),c==null){var x=r&&r.constructor;m?c=p?new x:[]:lt(r)?c=ur(x)?zi(Ho(r)):{}:c={}}return(m?fn:Un)(r,function(R,L,M){return s(c,R,L,M)}),c}function Px(r,s){return r==null?!0:Lc(r,s)}function Mx(r,s,c){return r==null?r:Ih(r,s,Bc(c))}function Bx(r,s,c,p){return p=typeof p=="function"?p:n,r==null?r:Ih(r,s,Bc(c),p)}function Zi(r){return r==null?[]:pc(r,kt(r))}function jx(r){return r==null?[]:pc(r,Kt(r))}function Nx(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=yn(c),c=c===c?c:0),s!==n&&(s=yn(s),s=s===s?s:0),ri(yn(r),s,c)}function Dx(r,s,c){return s=dr(s),c===n?(c=s,s=0):c=dr(c),r=yn(r),Wb(r,s,c)}function Ux(r,s,c){if(c&&typeof c!="boolean"&&Dt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=dr(r),s===n?(s=r,r=0):s=dr(s)),r>s){var p=r;r=s,s=p}if(c||r%1||s%1){var m=oh();return Lt(r+m*(s-r+yy("1e-"+((m+"").length-1))),s)}return Ic(r,s)}var zx=Fi(function(r,s,c){return s=s.toLowerCase(),r+(c?jp(s):s)});function jp(r){return ru(Ye(r).toLowerCase())}function Np(r){return r=Ye(r),r&&r.replace(F2,Ry).replace(ly,"")}function Hx(r,s,c){r=Ye(r),s=en(s);var p=r.length;c=c===n?p:ri(Te(c),0,p);var m=c;return c-=s.length,c>=0&&r.slice(c,m)==s}function Fx(r){return r=Ye(r),r&&$2.test(r)?r.replace(gf,Oy):r}function qx(r){return r=Ye(r),r&&A2.test(r)?r.replace(Xl,"\\$&"):r}var Wx=Fi(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),Zx=Fi(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),Vx=zh("toLowerCase");function Kx(r,s,c){r=Ye(r),s=Te(s);var p=s?Bi(r):0;if(!s||p>=s)return r;var m=(s-p)/2;return sa(Zo(m),c)+r+sa(Wo(m),c)}function Gx(r,s,c){r=Ye(r),s=Te(s);var p=s?Bi(r):0;return s&&p<s?r+sa(s-p,c):r}function Qx(r,s,c){r=Ye(r),s=Te(s);var p=s?Bi(r):0;return s&&p<s?sa(s-p,c)+r:r}function Yx(r,s,c){return c||s==null?s=0:s&&(s=+s),ib(Ye(r).replace(Jl,""),s||0)}function Xx(r,s,c){return(c?Dt(r,s,c):s===n)?s=1:s=Te(s),Rc(Ye(r),s)}function Jx(){var r=arguments,s=Ye(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var e4=Fi(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function t4(r,s,c){return c&&typeof c!="number"&&Dt(r,s,c)&&(s=c=n),c=c===n?ge:c>>>0,c?(r=Ye(r),r&&(typeof s=="string"||s!=null&&!eu(s))&&(s=en(s),!s&&Mi(r))?Pr(kn(r),0,c):r.split(s,c)):[]}var n4=Fi(function(r,s,c){return r+(c?" ":"")+ru(s)});function r4(r,s,c){return r=Ye(r),c=c==null?0:ri(Te(c),0,r.length),s=en(s),r.slice(c,c+s.length)==s}function i4(r,s,c){var p=y.templateSettings;c&&Dt(r,s,c)&&(s=n),r=Ye(r),s=va({},s,p,Kh);var m=va({},s.imports,p.imports,Kh),x=kt(m),R=pc(m,x),L,M,z=0,H=s.interpolate||Io,G="__p += '",ie=mc((s.escape||Io).source+"|"+H.source+"|"+(H===mf?j2:Io).source+"|"+(s.evaluate||Io).source+"|$","g"),de="//# sourceURL="+(Xe.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++hy+"]")+`
`;r.replace(ie,function(xe,De,We,nn,Ut,rn){return We||(We=nn),G+=r.slice(z,rn).replace(q2,Ly),De&&(L=!0,G+=`' +
__e(`+De+`) +
'`),Ut&&(M=!0,G+=`';
`+Ut+`;
__p += '`),We&&(G+=`' +
((__t = (`+We+`)) == null ? '' : __t) +
'`),z=rn+xe.length,xe}),G+=`';
`;var we=Xe.call(s,"variable")&&s.variable;if(!we)G=`with (obj) {
`+G+`
}
`;else if(M2.test(we))throw new Ee(u);G=(M?G.replace(b2,""):G).replace(_2,"$1").replace(w2,"$1;"),G="function("+(we||"obj")+`) {
`+(we?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(L?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+G+`return __p
}`;var Re=Up(function(){return Ke(x,de+"return "+G).apply(n,R)});if(Re.source=G,Jc(Re))throw Re;return Re}function s4(r){return Ye(r).toLowerCase()}function o4(r){return Ye(r).toUpperCase()}function a4(r,s,c){if(r=Ye(r),r&&(c||s===n))return Gf(r);if(!r||!(s=en(s)))return r;var p=kn(r),m=kn(s),x=Qf(p,m),R=Yf(p,m)+1;return Pr(p,x,R).join("")}function l4(r,s,c){if(r=Ye(r),r&&(c||s===n))return r.slice(0,Jf(r)+1);if(!r||!(s=en(s)))return r;var p=kn(r),m=Yf(p,kn(s))+1;return Pr(p,0,m).join("")}function c4(r,s,c){if(r=Ye(r),r&&(c||s===n))return r.replace(Jl,"");if(!r||!(s=en(s)))return r;var p=kn(r),m=Qf(p,kn(s));return Pr(p,m).join("")}function u4(r,s){var c=W,p=Y;if(lt(s)){var m="separator"in s?s.separator:m;c="length"in s?Te(s.length):c,p="omission"in s?en(s.omission):p}r=Ye(r);var x=r.length;if(Mi(r)){var R=kn(r);x=R.length}if(c>=x)return r;var L=c-Bi(p);if(L<1)return p;var M=R?Pr(R,0,L).join(""):r.slice(0,L);if(m===n)return M+p;if(R&&(L+=M.length-L),eu(m)){if(r.slice(L).search(m)){var z,H=M;for(m.global||(m=mc(m.source,Ye(vf.exec(m))+"g")),m.lastIndex=0;z=m.exec(H);)var G=z.index;M=M.slice(0,G===n?L:G)}}else if(r.indexOf(en(m),L)!=L){var ie=M.lastIndexOf(m);ie>-1&&(M=M.slice(0,ie))}return M+p}function d4(r){return r=Ye(r),r&&x2.test(r)?r.replace(pf,Uy):r}var f4=Fi(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),ru=zh("toUpperCase");function Dp(r,s,c){return r=Ye(r),s=c?n:s,s===n?My(r)?Fy(r):Cy(r):r.match(s)||[]}var Up=je(function(r,s){try{return Xt(r,n,s)}catch(c){return Jc(c)?c:new Ee(c)}}),h4=lr(function(r,s){return fn(s,function(c){c=Hn(c),or(r,c,Yc(r[c],r))}),r});function p4(r){var s=r==null?0:r.length,c=ye();return r=s?ot(r,function(p){if(typeof p[1]!="function")throw new hn(l);return[c(p[0]),p[1]]}):[],je(function(p){for(var m=-1;++m<s;){var x=r[m];if(Xt(x[0],this,p))return Xt(x[1],this,p)}})}function g4(r){return Ub(gn(r,g))}function iu(r){return function(){return r}}function m4(r,s){return r==null||r!==r?s:r}var v4=Fh(),y4=Fh(!0);function Gt(r){return r}function su(r){return bh(typeof r=="function"?r:gn(r,g))}function b4(r){return wh(gn(r,g))}function _4(r,s){return xh(r,gn(s,g))}var w4=je(function(r,s){return function(c){return Bs(c,r,s)}}),x4=je(function(r,s){return function(c){return Bs(r,c,s)}});function ou(r,s,c){var p=kt(s),m=Xo(s,p);c==null&&!(lt(s)&&(m.length||!p.length))&&(c=s,s=r,r=this,m=Xo(s,kt(s)));var x=!(lt(c)&&"chain"in c)||!!c.chain,R=ur(r);return fn(m,function(L){var M=s[L];r[L]=M,R&&(r.prototype[L]=function(){var z=this.__chain__;if(x||z){var H=r(this.__wrapped__),G=H.__actions__=Zt(this.__actions__);return G.push({func:M,args:arguments,thisArg:r}),H.__chain__=z,H}return M.apply(r,Tr([this.value()],arguments))})}),r}function $4(){return At._===this&&(At._=Gy),this}function au(){}function k4(r){return r=Te(r),je(function(s){return $h(s,r)})}var E4=Nc(ot),C4=Nc(qf),S4=Nc(cc);function zp(r){return Wc(r)?uc(Hn(r)):r_(r)}function T4(r){return function(s){return r==null?n:ii(r,s)}}var A4=Wh(),I4=Wh(!0);function lu(){return[]}function cu(){return!1}function R4(){return{}}function O4(){return""}function L4(){return!0}function P4(r,s){if(r=Te(r),r<1||r>pe)return[];var c=ge,p=Lt(r,ge);s=ye(s),r-=ge;for(var m=hc(p,s);++c<r;)s(c);return m}function M4(r){return Se(r)?ot(r,Hn):tn(r)?[r]:Zt(ap(Ye(r)))}function B4(r){var s=++Vy;return Ye(r)+s}var j4=ia(function(r,s){return r+s},0),N4=Dc("ceil"),D4=ia(function(r,s){return r/s},1),U4=Dc("floor");function z4(r){return r&&r.length?Yo(r,Gt,kc):n}function H4(r,s){return r&&r.length?Yo(r,ye(s,2),kc):n}function F4(r){return Vf(r,Gt)}function q4(r,s){return Vf(r,ye(s,2))}function W4(r){return r&&r.length?Yo(r,Gt,Tc):n}function Z4(r,s){return r&&r.length?Yo(r,ye(s,2),Tc):n}var V4=ia(function(r,s){return r*s},1),K4=Dc("round"),G4=ia(function(r,s){return r-s},0);function Q4(r){return r&&r.length?fc(r,Gt):0}function Y4(r,s){return r&&r.length?fc(r,ye(s,2)):0}return y.after=b3,y.ary=yp,y.assign=ox,y.assignIn=Op,y.assignInWith=va,y.assignWith=ax,y.at=lx,y.before=bp,y.bind=Yc,y.bindAll=h4,y.bindKey=_p,y.castArray=R3,y.chain=gp,y.chunk=U_,y.compact=z_,y.concat=H_,y.cond=p4,y.conforms=g4,y.constant=iu,y.countBy=Qw,y.create=cx,y.curry=wp,y.curryRight=xp,y.debounce=$p,y.defaults=ux,y.defaultsDeep=dx,y.defer=_3,y.delay=w3,y.difference=F_,y.differenceBy=q_,y.differenceWith=W_,y.drop=Z_,y.dropRight=V_,y.dropRightWhile=K_,y.dropWhile=G_,y.fill=Q_,y.filter=Xw,y.flatMap=t3,y.flatMapDeep=n3,y.flatMapDepth=r3,y.flatten=dp,y.flattenDeep=Y_,y.flattenDepth=X_,y.flip=x3,y.flow=v4,y.flowRight=y4,y.fromPairs=J_,y.functions=yx,y.functionsIn=bx,y.groupBy=i3,y.initial=tw,y.intersection=nw,y.intersectionBy=rw,y.intersectionWith=iw,y.invert=wx,y.invertBy=xx,y.invokeMap=o3,y.iteratee=su,y.keyBy=a3,y.keys=kt,y.keysIn=Kt,y.map=da,y.mapKeys=kx,y.mapValues=Ex,y.matches=b4,y.matchesProperty=_4,y.memoize=ha,y.merge=Cx,y.mergeWith=Lp,y.method=w4,y.methodOf=x4,y.mixin=ou,y.negate=pa,y.nthArg=k4,y.omit=Sx,y.omitBy=Tx,y.once=$3,y.orderBy=l3,y.over=E4,y.overArgs=k3,y.overEvery=C4,y.overSome=S4,y.partial=Xc,y.partialRight=kp,y.partition=c3,y.pick=Ax,y.pickBy=Pp,y.property=zp,y.propertyOf=T4,y.pull=lw,y.pullAll=hp,y.pullAllBy=cw,y.pullAllWith=uw,y.pullAt=dw,y.range=A4,y.rangeRight=I4,y.rearg=E3,y.reject=f3,y.remove=fw,y.rest=C3,y.reverse=Gc,y.sampleSize=p3,y.set=Rx,y.setWith=Ox,y.shuffle=g3,y.slice=hw,y.sortBy=y3,y.sortedUniq=_w,y.sortedUniqBy=ww,y.split=t4,y.spread=S3,y.tail=xw,y.take=$w,y.takeRight=kw,y.takeRightWhile=Ew,y.takeWhile=Cw,y.tap=zw,y.throttle=T3,y.thru=ua,y.toArray=Ap,y.toPairs=Mp,y.toPairsIn=Bp,y.toPath=M4,y.toPlainObject=Rp,y.transform=Lx,y.unary=A3,y.union=Sw,y.unionBy=Tw,y.unionWith=Aw,y.uniq=Iw,y.uniqBy=Rw,y.uniqWith=Ow,y.unset=Px,y.unzip=Qc,y.unzipWith=pp,y.update=Mx,y.updateWith=Bx,y.values=Zi,y.valuesIn=jx,y.without=Lw,y.words=Dp,y.wrap=I3,y.xor=Pw,y.xorBy=Mw,y.xorWith=Bw,y.zip=jw,y.zipObject=Nw,y.zipObjectDeep=Dw,y.zipWith=Uw,y.entries=Mp,y.entriesIn=Bp,y.extend=Op,y.extendWith=va,ou(y,y),y.add=j4,y.attempt=Up,y.camelCase=zx,y.capitalize=jp,y.ceil=N4,y.clamp=Nx,y.clone=O3,y.cloneDeep=P3,y.cloneDeepWith=M3,y.cloneWith=L3,y.conformsTo=B3,y.deburr=Np,y.defaultTo=m4,y.divide=D4,y.endsWith=Hx,y.eq=Cn,y.escape=Fx,y.escapeRegExp=qx,y.every=Yw,y.find=Jw,y.findIndex=cp,y.findKey=fx,y.findLast=e3,y.findLastIndex=up,y.findLastKey=hx,y.floor=U4,y.forEach=mp,y.forEachRight=vp,y.forIn=px,y.forInRight=gx,y.forOwn=mx,y.forOwnRight=vx,y.get=tu,y.gt=j3,y.gte=N3,y.has=_x,y.hasIn=nu,y.head=fp,y.identity=Gt,y.includes=s3,y.indexOf=ew,y.inRange=Dx,y.invoke=$x,y.isArguments=ai,y.isArray=Se,y.isArrayBuffer=D3,y.isArrayLike=Vt,y.isArrayLikeObject=pt,y.isBoolean=U3,y.isBuffer=Mr,y.isDate=z3,y.isElement=H3,y.isEmpty=F3,y.isEqual=q3,y.isEqualWith=W3,y.isError=Jc,y.isFinite=Z3,y.isFunction=ur,y.isInteger=Ep,y.isLength=ga,y.isMap=Cp,y.isMatch=V3,y.isMatchWith=K3,y.isNaN=G3,y.isNative=Q3,y.isNil=X3,y.isNull=Y3,y.isNumber=Sp,y.isObject=lt,y.isObjectLike=dt,y.isPlainObject=Hs,y.isRegExp=eu,y.isSafeInteger=J3,y.isSet=Tp,y.isString=ma,y.isSymbol=tn,y.isTypedArray=Wi,y.isUndefined=ex,y.isWeakMap=tx,y.isWeakSet=nx,y.join=sw,y.kebabCase=Wx,y.last=vn,y.lastIndexOf=ow,y.lowerCase=Zx,y.lowerFirst=Vx,y.lt=rx,y.lte=ix,y.max=z4,y.maxBy=H4,y.mean=F4,y.meanBy=q4,y.min=W4,y.minBy=Z4,y.stubArray=lu,y.stubFalse=cu,y.stubObject=R4,y.stubString=O4,y.stubTrue=L4,y.multiply=V4,y.nth=aw,y.noConflict=$4,y.noop=au,y.now=fa,y.pad=Kx,y.padEnd=Gx,y.padStart=Qx,y.parseInt=Yx,y.random=Ux,y.reduce=u3,y.reduceRight=d3,y.repeat=Xx,y.replace=Jx,y.result=Ix,y.round=K4,y.runInContext=P,y.sample=h3,y.size=m3,y.snakeCase=e4,y.some=v3,y.sortedIndex=pw,y.sortedIndexBy=gw,y.sortedIndexOf=mw,y.sortedLastIndex=vw,y.sortedLastIndexBy=yw,y.sortedLastIndexOf=bw,y.startCase=n4,y.startsWith=r4,y.subtract=G4,y.sum=Q4,y.sumBy=Y4,y.template=i4,y.times=P4,y.toFinite=dr,y.toInteger=Te,y.toLength=Ip,y.toLower=s4,y.toNumber=yn,y.toSafeInteger=sx,y.toString=Ye,y.toUpper=o4,y.trim=a4,y.trimEnd=l4,y.trimStart=c4,y.truncate=u4,y.unescape=d4,y.uniqueId=B4,y.upperCase=f4,y.upperFirst=ru,y.each=mp,y.eachRight=vp,y.first=fp,ou(y,function(){var r={};return Un(y,function(s,c){Xe.call(y.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),y.VERSION=i,fn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),fn(["drop","take"],function(r,s){Fe.prototype[r]=function(c){c=c===n?1:wt(Te(c),0);var p=this.__filtered__&&!s?new Fe(this):this.clone();return p.__filtered__?p.__takeCount__=Lt(c,p.__takeCount__):p.__views__.push({size:Lt(c,ge),type:r+(p.__dir__<0?"Right":"")}),p},Fe.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),fn(["filter","map","takeWhile"],function(r,s){var c=s+1,p=c==se||c==J;Fe.prototype[r]=function(m){var x=this.clone();return x.__iteratees__.push({iteratee:ye(m,3),type:c}),x.__filtered__=x.__filtered__||p,x}}),fn(["head","last"],function(r,s){var c="take"+(s?"Right":"");Fe.prototype[r]=function(){return this[c](1).value()[0]}}),fn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");Fe.prototype[r]=function(){return this.__filtered__?new Fe(this):this[c](1)}}),Fe.prototype.compact=function(){return this.filter(Gt)},Fe.prototype.find=function(r){return this.filter(r).head()},Fe.prototype.findLast=function(r){return this.reverse().find(r)},Fe.prototype.invokeMap=je(function(r,s){return typeof r=="function"?new Fe(this):this.map(function(c){return Bs(c,r,s)})}),Fe.prototype.reject=function(r){return this.filter(pa(ye(r)))},Fe.prototype.slice=function(r,s){r=Te(r);var c=this;return c.__filtered__&&(r>0||s<0)?new Fe(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Te(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},Fe.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},Fe.prototype.toArray=function(){return this.take(ge)},Un(Fe.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),p=/^(?:head|last)$/.test(s),m=y[p?"take"+(s=="last"?"Right":""):s],x=p||/^find/.test(s);m&&(y.prototype[s]=function(){var R=this.__wrapped__,L=p?[1]:arguments,M=R instanceof Fe,z=L[0],H=M||Se(R),G=function(De){var We=m.apply(y,Tr([De],L));return p&&ie?We[0]:We};H&&c&&typeof z=="function"&&z.length!=1&&(M=H=!1);var ie=this.__chain__,de=!!this.__actions__.length,we=x&&!ie,Re=M&&!de;if(!x&&H){R=Re?R:new Fe(this);var xe=r.apply(R,L);return xe.__actions__.push({func:ua,args:[G],thisArg:n}),new pn(xe,ie)}return we&&Re?r.apply(this,L):(xe=this.thru(G),we?p?xe.value()[0]:xe.value():xe)})}),fn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Bo[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",p=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var m=arguments;if(p&&!this.__chain__){var x=this.value();return s.apply(Se(x)?x:[],m)}return this[c](function(R){return s.apply(Se(R)?R:[],m)})}}),Un(Fe.prototype,function(r,s){var c=y[s];if(c){var p=c.name+"";Xe.call(Ui,p)||(Ui[p]=[]),Ui[p].push({name:s,func:c})}}),Ui[ra(n,C).name]=[{name:"wrapper",func:n}],Fe.prototype.clone=db,Fe.prototype.reverse=fb,Fe.prototype.value=hb,y.prototype.at=Hw,y.prototype.chain=Fw,y.prototype.commit=qw,y.prototype.next=Ww,y.prototype.plant=Vw,y.prototype.reverse=Kw,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=Gw,y.prototype.first=y.prototype.head,As&&(y.prototype[As]=Zw),y},ji=qy();Jr?((Jr.exports=ji)._=ji,sc._=ji):At._=ji}).call($t)})(Wa,Wa.exports);var wm=Wa.exports;const aE=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],xm=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.h3z.jp","wss://nostr.holybea.com","wss://yabu.me"],lE=[...xm,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],cE=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],uE=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},_s=()=>({id:uE(),width:"medium"}),$m=e=>({..._s(),columnType:"Following",...e}),km=e=>({..._s(),columnType:"Notification",...e}),dE=e=>({..._s(),columnType:"Relays",...e}),Em=()=>dE({name:"日本語",relayUrls:xm,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),Cm=e=>({..._s(),columnType:"Posts",...e}),Sm=e=>({..._s(),columnType:"Reactions",...e}),Bd=e=>({..._s(),columnType:"Search",...e}),fE=/^[0-9a-f]{64}$/,no=e=>{const t=typeof e=="string"&&e.length===64&&fE.test(e);return t||console.warn("invalid id is ignored: ",e),t};class Tm{findTagsByName(t){return this.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.tags.find(([n])=>n===t)}findLastTagByName(t){return this.tags.findLast(([n])=>n===t)}pTags(){return this.tags.filter(([t,n])=>t==="p"&&no(n))}eTags(){return this.tags.filter(([t,n])=>t==="e"&&no(n))}taggedPubkeys(){return yr(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}}class Am extends Tm{constructor(t){super(),this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}var Ve;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return e.objectValues(l)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},e.find=(o,a)=>{for(const l of o)if(a(l))return l},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ve||(Ve={}));var Uu;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Uu||(Uu={}));const ae=Ve.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Hr=e=>{switch(typeof e){case"undefined":return ae.undefined;case"string":return ae.string;case"number":return isNaN(e)?ae.nan:ae.number;case"boolean":return ae.boolean;case"function":return ae.function;case"bigint":return ae.bigint;case"symbol":return ae.symbol;case"object":return Array.isArray(e)?ae.array:e===null?ae.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?ae.promise:typeof Map<"u"&&e instanceof Map?ae.map:typeof Set<"u"&&e instanceof Set?ae.set:typeof Date<"u"&&e instanceof Date?ae.date:ae.object;default:return ae.unknown}},X=Ve.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),hE=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Ln extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(u[f]=u[f]||{_errors:[]},u[f]._errors.push(n(l))):u[f]=u[f]||{_errors:[]},u=u[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ve.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Ln.create=e=>new Ln(e);const ro=(e,t)=>{let n;switch(e.code){case X.invalid_type:e.received===ae.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case X.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Ve.jsonStringifyReplacer)}`;break;case X.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ve.joinValues(e.keys,", ")}`;break;case X.invalid_union:n="Invalid input";break;case X.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ve.joinValues(e.options)}`;break;case X.invalid_enum_value:n=`Invalid enum value. Expected ${Ve.joinValues(e.options)}, received '${e.received}'`;break;case X.invalid_arguments:n="Invalid function arguments";break;case X.invalid_return_type:n="Invalid function return type";break;case X.invalid_date:n="Invalid date";break;case X.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Ve.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case X.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case X.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case X.custom:n="Invalid input";break;case X.invalid_intersection_types:n="Intersection results could not be merged";break;case X.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case X.not_finite:n="Number must be finite";break;default:n=t.defaultError,Ve.assertNever(e)}return{message:n}};let Im=ro;function pE(e){Im=e}function Za(){return Im}const Va=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)u=f(l,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},gE=[];function ue(e,t){const n=Va({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Za(),ro].filter(i=>!!i)});e.common.issues.push(n)}class Bt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return Ce;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Bt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Ce;a.status==="dirty"&&t.dirty(),l.status==="dirty"&&t.dirty(),(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:t.value,value:i}}}const Ce=Object.freeze({status:"aborted"}),Rm=e=>({status:"dirty",value:e}),qt=e=>({status:"valid",value:e}),zu=e=>e.status==="aborted",Hu=e=>e.status==="dirty",Ka=e=>e.status==="valid",Ga=e=>typeof Promise<"u"&&e instanceof Promise;var me;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(me||(me={}));class Kn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const vg=(e,t)=>{if(Ka(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Ln(e.common.issues);return this._error=n,this._error}}};function Ie(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Ne{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Hr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Hr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Bt,ctx:{common:t.parent.common,data:t.data,parsedType:Hr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Ga(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Hr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return vg(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Hr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Ga(o)?o:Promise.resolve(o));return vg(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=t(o),u=()=>a.addIssue({code:X.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new Mn({schema:this,typeName:ke.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return br.create(this,this._def)}nullable(){return bi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Pn.create(this,this._def)}promise(){return as.create(this,this._def)}or(t){return ao.create([this,t],this._def)}and(t){return lo.create(this,t,this._def)}transform(t){return new Mn({...Ie(this._def),schema:this,typeName:ke.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new po({...Ie(this._def),innerType:this,defaultValue:n,typeName:ke.ZodDefault})}brand(){return new Lm({typeName:ke.ZodBranded,type:this,...Ie(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Ja({...Ie(this._def),innerType:this,catchValue:n,typeName:ke.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return $o.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const mE=/^c[^\s-]{8,}$/i,vE=/^[a-z][a-z0-9]*$/,yE=/[0-9A-HJKMNP-TV-Z]{26}/,bE=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,_E=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,wE=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,xE=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,$E=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,kE=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function EE(e,t){return!!((t==="v4"||!t)&&xE.test(e)||(t==="v6"||!t)&&$E.test(e))}class Rn extends Ne{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:X.invalid_string,...me.errToObj(i)}),this.nonempty=t=>this.min(1,me.errToObj(t)),this.trim=()=>new Rn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Rn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Rn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==ae.string){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:ae.string,received:a.parsedType}),Ce}const i=new Bt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=t.data.length>a.value,u=t.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(t,o),l?ue(o,{code:X.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ue(o,{code:X.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")_E.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"email",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")wE.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"emoji",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")bE.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"uuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")mE.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"cuid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")vE.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"cuid2",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")yE.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"ulid",code:X.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),ue(o,{validation:"url",code:X.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"regex",code:X.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?kE(a).test(t.data)||(o=this._getOrReturnCtx(t,o),ue(o,{code:X.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?EE(t.data,a.version)||(o=this._getOrReturnCtx(t,o),ue(o,{validation:"ip",code:X.invalid_string,message:a.message}),i.dirty()):Ve.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Rn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...me.errToObj(t)})}url(t){return this._addCheck({kind:"url",...me.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...me.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...me.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...me.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...me.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...me.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...me.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...me.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...me.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...me.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...me.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...me.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...me.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...me.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...me.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Rn.create=e=>{var t;return new Rn({checks:[],typeName:ke.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Ie(e)})};function CE(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),l=parseInt(t.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Kr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==ae.number){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:ae.number,received:a.parsedType}),Ce}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="int"?Ve.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),ue(i,{code:X.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?CE(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),ue(i,{code:X.not_finite,message:a.message}),o.dirty()):Ve.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,me.toString(n))}gt(t,n){return this.setLimit("min",t,!1,me.toString(n))}lte(t,n){return this.setLimit("max",t,!0,me.toString(n))}lt(t,n){return this.setLimit("max",t,!1,me.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:me.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:me.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:me.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:me.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:me.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:me.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:me.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:me.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:me.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:me.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Ve.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Kr.create=e=>new Kr({checks:[],typeName:ke.ZodNumber,coerce:e?.coerce||!1,...Ie(e)});class Gr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==ae.bigint){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:ae.bigint,received:a.parsedType}),Ce}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),ue(i,{code:X.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ve.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,me.toString(n))}gt(t,n){return this.setLimit("min",t,!1,me.toString(n))}lte(t,n){return this.setLimit("max",t,!0,me.toString(n))}lt(t,n){return this.setLimit("max",t,!1,me.toString(n))}setLimit(t,n,i,o){return new Gr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:me.toString(o)}]})}_addCheck(t){return new Gr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:me.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:me.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:me.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:me.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:me.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Gr.create=e=>{var t;return new Gr({checks:[],typeName:ke.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Ie(e)})};class io extends Ne{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==ae.boolean){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.boolean,received:i.parsedType}),Ce}return qt(t.data)}}io.create=e=>new io({typeName:ke.ZodBoolean,coerce:e?.coerce||!1,...Ie(e)});class vi extends Ne{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==ae.date){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_type,expected:ae.date,received:a.parsedType}),Ce}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return ue(a,{code:X.invalid_date}),Ce}const i=new Bt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),ue(o,{code:X.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ve.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new vi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:me.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:me.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}vi.create=e=>new vi({checks:[],coerce:e?.coerce||!1,typeName:ke.ZodDate,...Ie(e)});class Qa extends Ne{_parse(t){if(this._getType(t)!==ae.symbol){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.symbol,received:i.parsedType}),Ce}return qt(t.data)}}Qa.create=e=>new Qa({typeName:ke.ZodSymbol,...Ie(e)});class so extends Ne{_parse(t){if(this._getType(t)!==ae.undefined){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.undefined,received:i.parsedType}),Ce}return qt(t.data)}}so.create=e=>new so({typeName:ke.ZodUndefined,...Ie(e)});class oo extends Ne{_parse(t){if(this._getType(t)!==ae.null){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.null,received:i.parsedType}),Ce}return qt(t.data)}}oo.create=e=>new oo({typeName:ke.ZodNull,...Ie(e)});class os extends Ne{constructor(){super(...arguments),this._any=!0}_parse(t){return qt(t.data)}}os.create=e=>new os({typeName:ke.ZodAny,...Ie(e)});class mi extends Ne{constructor(){super(...arguments),this._unknown=!0}_parse(t){return qt(t.data)}}mi.create=e=>new mi({typeName:ke.ZodUnknown,...Ie(e)});class wr extends Ne{_parse(t){const n=this._getOrReturnCtx(t);return ue(n,{code:X.invalid_type,expected:ae.never,received:n.parsedType}),Ce}}wr.create=e=>new wr({typeName:ke.ZodNever,...Ie(e)});class Ya extends Ne{_parse(t){if(this._getType(t)!==ae.undefined){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.void,received:i.parsedType}),Ce}return qt(t.data)}}Ya.create=e=>new Ya({typeName:ke.ZodVoid,...Ie(e)});class Pn extends Ne{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==ae.array)return ue(n,{code:X.invalid_type,expected:ae.array,received:n.parsedType}),Ce;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(ue(n,{code:l?X.too_big:X.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ue(n,{code:X.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ue(n,{code:X.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Kn(n,l,n.path,u)))).then(l=>Bt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Kn(n,l,n.path,u)));return Bt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new Pn({...this._def,minLength:{value:t,message:me.toString(n)}})}max(t,n){return new Pn({...this._def,maxLength:{value:t,message:me.toString(n)}})}length(t,n){return new Pn({...this._def,exactLength:{value:t,message:me.toString(n)}})}nonempty(t){return this.min(1,t)}}Pn.create=(e,t)=>new Pn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ke.ZodArray,...Ie(t)});function Yi(e){if(e instanceof ct){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=br.create(Yi(i))}return new ct({...e._def,shape:()=>t})}else return e instanceof Pn?new Pn({...e._def,type:Yi(e.element)}):e instanceof br?br.create(Yi(e.unwrap())):e instanceof bi?bi.create(Yi(e.unwrap())):e instanceof Gn?Gn.create(e.items.map(t=>Yi(t))):e}class ct extends Ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=Ve.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==ae.object){const f=this._getOrReturnCtx(t);return ue(f,{code:X.invalid_type,expected:ae.object,received:f.parsedType}),Ce}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof wr&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||u.push(f);const d=[];for(const f of l){const h=a[f],g=o.data[f];d.push({key:{status:"valid",value:f},value:h._parse(new Kn(o,g,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof wr){const f=this._def.unknownKeys;if(f==="passthrough")for(const h of u)d.push({key:{status:"valid",value:h},value:{status:"valid",value:o.data[h]}});else if(f==="strict")u.length>0&&(ue(o,{code:X.unrecognized_keys,keys:u}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const h of u){const g=o.data[h];d.push({key:{status:"valid",value:h},value:f._parse(new Kn(o,g,o.path,h)),alwaysSet:h in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const h of d){const g=await h.key;f.push({key:g,value:await h.value,alwaysSet:h.alwaysSet})}return f}).then(f=>Bt.mergeObjectSync(i,f)):Bt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return me.errToObj,new ct({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=me.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ct({...this._def,unknownKeys:"strip"})}passthrough(){return new ct({...this._def,unknownKeys:"passthrough"})}extend(t){return new ct({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new ct({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ke.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new ct({...this._def,catchall:t})}pick(t){const n={};return Ve.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ct({...this._def,shape:()=>n})}omit(t){const n={};return Ve.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new ct({...this._def,shape:()=>n})}deepPartial(){return Yi(this)}partial(t){const n={};return Ve.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new ct({...this._def,shape:()=>n})}required(t){const n={};return Ve.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof br;)a=a._def.innerType;n[i]=a}}),new ct({...this._def,shape:()=>n})}keyof(){return Om(Ve.objectKeys(this.shape))}}ct.create=(e,t)=>new ct({shape:()=>e,unknownKeys:"strip",catchall:wr.create(),typeName:ke.ZodObject,...Ie(t)});ct.strictCreate=(e,t)=>new ct({shape:()=>e,unknownKeys:"strict",catchall:wr.create(),typeName:ke.ZodObject,...Ie(t)});ct.lazycreate=(e,t)=>new ct({shape:e,unknownKeys:"strip",catchall:wr.create(),typeName:ke.ZodObject,...Ie(t)});class ao extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new Ln(u.ctx.common.issues));return ue(n,{code:X.invalid_union,unionErrors:l}),Ce}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},h=d._parseSync({data:n.data,path:n.path,parent:f});if(h.status==="valid")return h;h.status==="dirty"&&!a&&(a={result:h,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new Ln(d));return ue(n,{code:X.invalid_union,unionErrors:u}),Ce}}get options(){return this._def.options}}ao.create=(e,t)=>new ao({options:e,typeName:ke.ZodUnion,...Ie(t)});const Ra=e=>e instanceof uo?Ra(e.schema):e instanceof Mn?Ra(e.innerType()):e instanceof fo?[e.value]:e instanceof Qr?e.options:e instanceof ho?Object.keys(e.enum):e instanceof po?Ra(e._def.innerType):e instanceof so?[void 0]:e instanceof oo?[null]:null;class Rl extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ae.object)return ue(n,{code:X.invalid_type,expected:ae.object,received:n.parsedType}),Ce;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ue(n,{code:X.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Ce)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const l=Ra(a.shape[t]);if(!l)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new Rl({typeName:ke.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Ie(i)})}}function Fu(e,t){const n=Hr(e),i=Hr(t);if(e===t)return{valid:!0,data:e};if(n===ae.object&&i===ae.object){const o=Ve.objectKeys(t),a=Ve.objectKeys(e).filter(u=>o.indexOf(u)!==-1),l={...e,...t};for(const u of a){const d=Fu(e[u],t[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===ae.array&&i===ae.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const l=e[a],u=t[a],d=Fu(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===ae.date&&i===ae.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class lo extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,l)=>{if(zu(a)||zu(l))return Ce;const u=Fu(a.value,l.value);return u.valid?((Hu(a)||Hu(l))&&n.dirty(),{status:n.value,value:u.data}):(ue(i,{code:X.invalid_intersection_types}),Ce)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}lo.create=(e,t,n)=>new lo({left:e,right:t,typeName:ke.ZodIntersection,...Ie(n)});class Gn extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.array)return ue(i,{code:X.invalid_type,expected:ae.array,received:i.parsedType}),Ce;if(i.data.length<this._def.items.length)return ue(i,{code:X.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ce;!this._def.rest&&i.data.length>this._def.items.length&&(ue(i,{code:X.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Kn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Bt.mergeArray(n,l)):Bt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Gn({...this._def,rest:t})}}Gn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Gn({items:e,typeName:ke.ZodTuple,rest:null,...Ie(t)})};class co extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.object)return ue(i,{code:X.invalid_type,expected:ae.object,received:i.parsedType}),Ce;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Kn(i,u,i.path,u)),value:l._parse(new Kn(i,i.data[u],i.path,u))});return i.common.async?Bt.mergeObjectAsync(n,o):Bt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Ne?new co({keyType:t,valueType:n,typeName:ke.ZodRecord,...Ie(i)}):new co({keyType:Rn.create(),valueType:t,typeName:ke.ZodRecord,...Ie(n)})}}class Xa extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.map)return ue(i,{code:X.invalid_type,expected:ae.map,received:i.parsedType}),Ce;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],f)=>({key:o._parse(new Kn(i,u,i.path,[f,"key"])),value:a._parse(new Kn(i,d,i.path,[f,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,h=await d.value;if(f.status==="aborted"||h.status==="aborted")return Ce;(f.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(f.value,h.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const f=d.key,h=d.value;if(f.status==="aborted"||h.status==="aborted")return Ce;(f.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(f.value,h.value)}return{status:n.value,value:u}}}}Xa.create=(e,t,n)=>new Xa({valueType:t,keyType:e,typeName:ke.ZodMap,...Ie(n)});class yi extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==ae.set)return ue(i,{code:X.invalid_type,expected:ae.set,received:i.parsedType}),Ce;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ue(i,{code:X.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ue(i,{code:X.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const h of d){if(h.status==="aborted")return Ce;h.status==="dirty"&&n.dirty(),f.add(h.value)}return{status:n.value,value:f}}const u=[...i.data.values()].map((d,f)=>a._parse(new Kn(i,d,i.path,f)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(t,n){return new yi({...this._def,minSize:{value:t,message:me.toString(n)}})}max(t,n){return new yi({...this._def,maxSize:{value:t,message:me.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}yi.create=(e,t)=>new yi({valueType:e,minSize:null,maxSize:null,typeName:ke.ZodSet,...Ie(t)});class Ji extends Ne{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ae.function)return ue(n,{code:X.invalid_type,expected:ae.function,received:n.parsedType}),Ce;function i(u,d){return Va({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Za(),ro].filter(f=>!!f),issueData:{code:X.invalid_arguments,argumentsError:d}})}function o(u,d){return Va({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Za(),ro].filter(f=>!!f),issueData:{code:X.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;return this._def.returns instanceof as?qt(async(...u)=>{const d=new Ln([]),f=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),h=await l(...f);return await this._def.returns._def.type.parseAsync(h,a).catch(v=>{throw d.addIssue(o(h,v)),d})}):qt((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Ln([i(u,d.error)]);const f=l(...d.data),h=this._def.returns.safeParse(f,a);if(!h.success)throw new Ln([o(f,h.error)]);return h.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Ji({...this._def,args:Gn.create(t).rest(mi.create())})}returns(t){return new Ji({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new Ji({args:t||Gn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:ke.ZodFunction,...Ie(i)})}}class uo extends Ne{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}uo.create=(e,t)=>new uo({getter:e,typeName:ke.ZodLazy,...Ie(t)});class fo extends Ne{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return ue(n,{received:n.data,code:X.invalid_literal,expected:this._def.value}),Ce}return{status:"valid",value:t.data}}get value(){return this._def.value}}fo.create=(e,t)=>new fo({value:e,typeName:ke.ZodLiteral,...Ie(t)});function Om(e,t){return new Qr({values:e,typeName:ke.ZodEnum,...Ie(t)})}class Qr extends Ne{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return ue(n,{expected:Ve.joinValues(i),received:n.parsedType,code:X.invalid_type}),Ce}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return ue(n,{received:n.data,code:X.invalid_enum_value,options:i}),Ce}return qt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Qr.create(t)}exclude(t){return Qr.create(this.options.filter(n=>!t.includes(n)))}}Qr.create=Om;class ho extends Ne{_parse(t){const n=Ve.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==ae.string&&i.parsedType!==ae.number){const o=Ve.objectValues(n);return ue(i,{expected:Ve.joinValues(o),received:i.parsedType,code:X.invalid_type}),Ce}if(n.indexOf(t.data)===-1){const o=Ve.objectValues(n);return ue(i,{received:i.data,code:X.invalid_enum_value,options:o}),Ce}return qt(t.data)}get enum(){return this._def.values}}ho.create=(e,t)=>new ho({values:e,typeName:ke.ZodNativeEnum,...Ie(t)});class as extends Ne{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==ae.promise&&n.common.async===!1)return ue(n,{code:X.invalid_type,expected:ae.promise,received:n.parsedType}),Ce;const i=n.parsedType===ae.promise?n.data:Promise.resolve(n.data);return qt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}as.create=(e,t)=>new as({type:e,typeName:ke.ZodPromise,...Ie(t)});class Mn extends Ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ke.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const l=o.transform(i.data);return i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}const a={addIssue:l=>{ue(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Ce:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Ce:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ka(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Ka(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);Ve.assertNever(o)}}Mn.create=(e,t,n)=>new Mn({schema:e,typeName:ke.ZodEffects,effect:t,...Ie(n)});Mn.createWithPreprocess=(e,t,n)=>new Mn({schema:t,effect:{type:"preprocess",transform:e},typeName:ke.ZodEffects,...Ie(n)});class br extends Ne{_parse(t){return this._getType(t)===ae.undefined?qt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}br.create=(e,t)=>new br({innerType:e,typeName:ke.ZodOptional,...Ie(t)});class bi extends Ne{_parse(t){return this._getType(t)===ae.null?qt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}bi.create=(e,t)=>new bi({innerType:e,typeName:ke.ZodNullable,...Ie(t)});class po extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===ae.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}po.create=(e,t)=>new po({innerType:e,typeName:ke.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Ie(t)});class Ja extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Ga(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Ln(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Ln(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Ja.create=(e,t)=>new Ja({innerType:e,typeName:ke.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Ie(t)});class el extends Ne{_parse(t){if(this._getType(t)!==ae.nan){const i=this._getOrReturnCtx(t);return ue(i,{code:X.invalid_type,expected:ae.nan,received:i.parsedType}),Ce}return{status:"valid",value:t.data}}}el.create=e=>new el({typeName:ke.ZodNaN,...Ie(e)});const SE=Symbol("zod_brand");class Lm extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class $o extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Ce:a.status==="dirty"?(n.dirty(),Rm(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ce:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new $o({in:t,out:n,typeName:ke.ZodPipeline})}}const Pm=(e,t={},n)=>e?os.create().superRefine((i,o)=>{var a,l;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...f,fatal:d})}}):os.create(),TE={object:ct.lazycreate};var ke;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(ke||(ke={}));const AE=(e,t={message:`Input not instance of ${e.name}`})=>Pm(n=>n instanceof e,t),Mm=Rn.create,Bm=Kr.create,IE=el.create,RE=Gr.create,jm=io.create,OE=vi.create,LE=Qa.create,PE=so.create,ME=oo.create,BE=os.create,jE=mi.create,NE=wr.create,DE=Ya.create,UE=Pn.create,zE=ct.create,HE=ct.strictCreate,FE=ao.create,qE=Rl.create,WE=lo.create,ZE=Gn.create,VE=co.create,KE=Xa.create,GE=yi.create,QE=Ji.create,YE=uo.create,XE=fo.create,JE=Qr.create,eC=ho.create,tC=as.create,yg=Mn.create,nC=br.create,rC=bi.create,iC=Mn.createWithPreprocess,sC=$o.create,oC=()=>Mm().optional(),aC=()=>Bm().optional(),lC=()=>jm().optional(),cC={string:e=>Rn.create({...e,coerce:!0}),number:e=>Kr.create({...e,coerce:!0}),boolean:e=>io.create({...e,coerce:!0}),bigint:e=>Gr.create({...e,coerce:!0}),date:e=>vi.create({...e,coerce:!0})},uC=Ce;var ut=Object.freeze({__proto__:null,defaultErrorMap:ro,setErrorMap:pE,getErrorMap:Za,makeIssue:Va,EMPTY_PATH:gE,addIssueToContext:ue,ParseStatus:Bt,INVALID:Ce,DIRTY:Rm,OK:qt,isAborted:zu,isDirty:Hu,isValid:Ka,isAsync:Ga,get util(){return Ve},get objectUtil(){return Uu},ZodParsedType:ae,getParsedType:Hr,ZodType:Ne,ZodString:Rn,ZodNumber:Kr,ZodBigInt:Gr,ZodBoolean:io,ZodDate:vi,ZodSymbol:Qa,ZodUndefined:so,ZodNull:oo,ZodAny:os,ZodUnknown:mi,ZodNever:wr,ZodVoid:Ya,ZodArray:Pn,ZodObject:ct,ZodUnion:ao,ZodDiscriminatedUnion:Rl,ZodIntersection:lo,ZodTuple:Gn,ZodRecord:co,ZodMap:Xa,ZodSet:yi,ZodFunction:Ji,ZodLazy:uo,ZodLiteral:fo,ZodEnum:Qr,ZodNativeEnum:ho,ZodPromise:as,ZodEffects:Mn,ZodTransformer:Mn,ZodOptional:br,ZodNullable:bi,ZodDefault:po,ZodCatch:Ja,ZodNaN:el,BRAND:SE,ZodBranded:Lm,ZodPipeline:$o,custom:Pm,Schema:Ne,ZodSchema:Ne,late:TE,get ZodFirstPartyTypeKind(){return ke},coerce:cC,any:BE,array:UE,bigint:RE,boolean:jm,date:OE,discriminatedUnion:qE,effect:yg,enum:JE,function:QE,instanceof:AE,intersection:WE,lazy:YE,literal:XE,map:KE,nan:IE,nativeEnum:eC,never:NE,null:ME,nullable:rC,number:Bm,object:zE,oboolean:lC,onumber:aC,optional:nC,ostring:oC,pipeline:sC,preprocess:iC,promise:tC,record:VE,set:GE,strictObject:HE,string:Mm,symbol:LE,transformer:yg,tuple:ZE,undefined:PE,union:FE,unknown:jE,void:DE,NEVER:uC,ZodIssueCode:X,quotelessJson:hE,ZodError:Ln});const{decode:dC}=xo,fC=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,hC=/(?:#\[(?<idx>\d+)\])/g,pC=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,gC=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,mC=/:(?<emoji>\w+):/gu,Nm=e=>{const t=[...e.matchAll(fC),...e.matchAll(hC),...e.matchAll(pC),...e.matchAll(gC),...e.matchAll(mC)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return t.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=dC(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<e.length&&o(e.length),i},vC=e=>t=>e.safeParse(t).success,yC=ut.tuple([ut.literal("emoji"),ut.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),ut.string().url()]),bC=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&no(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let _C=class extends Am{#e;#t;constructor(t){if(t.kind!==ft.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=Nm(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&no(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&no(i[1])){const a=this.markedEventTags().find(l=>l.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=bC(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}emojiTags(){return this.rawEvent.tags.filter(vC(yC))}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return null;const[,,i]=n;return i}};const vr=e=>new Am(e),Ol=e=>new _C(e),wC=()=>{const e=[...aE];return window.navigator.language.includes("ja")&&e.push(...lE),e},Dm=()=>({relayUrls:wC(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showMedia:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),xC=e=>JSON.stringify(e),$C=e=>({...Dm(),...JSON.parse(e)}),kC=f5(()=>window.localStorage,xC,$C),[Ki,Qt]=h5("RabbitConfig",Dm(),kC),Le=()=>{const e=I=>{Qt("relayUrls",S=>yr([...S,I]))},t=I=>{Qt("relayUrls",S=>S.filter(E=>E!==I))},n=I=>{Qt("mutedPubkeys",S=>yr([...S,I]))},i=I=>{Qt("mutedPubkeys",S=>S.filter(E=>E!==I))},o=I=>{Qt("mutedKeywords",S=>yr([...S,I]))},a=I=>{Qt("mutedKeywords",S=>S.filter(E=>E!==I))},l=I=>{Qt("columns",S=>{const E=S.findIndex(T=>T.id===I.id);if(E>=0){const T=[...S];return T.splice(E,1,I),T}return[...S,I]})},u=(I,S)=>{Qt("columns",E=>{const T=S-1,O=Math.max(Math.min(T,E.length),0),j=E.findIndex(W=>W.id===I);if(j<0||O===j)return E;console.log(j,O);const D=[...E],[te]=D.splice(j,1);return D.splice(O,0,te),D})},d=I=>{Qt("columns",S=>S.filter(E=>E.id!==I))},f=I=>{Qt("customEmojis",S=>({...S,[I.shortcode]:I}))},h=I=>{Qt("customEmojis",S=>{const E=Object.fromEntries(I.map(T=>[T.shortcode,T]));return{...S,...E}})},g=I=>{Qt("customEmojis",S=>({...S,[I]:void 0}))},v=I=>Ki.customEmojis[I],_=I=>wm.sortBy(Object.values(Ki.customEmojis).filter(({shortcode:S})=>S.includes(I)),[S=>S.shortcode.length]),$=I=>Ki.mutedPubkeys.includes(I),k=I=>I.kind===ft.Text?Ki.mutedKeywords.some(S=>I.content.includes(S)):!1;return{config:()=>Ki,setConfig:Qt,addRelay:e,removeRelay:t,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:I})=>{if((Ki.columns?.length??0)>0)return;const S=[$m({width:"widest",pubkey:I}),km({pubkey:I}),Cm({name:"自分の投稿",pubkey:I}),Sm({name:"自分のリアクション",pubkey:I})];navigator.language.includes("ja")&&S.splice(2,0,Em()),Qt("columns",()=>[...S])},saveEmoji:f,saveEmojis:h,removeEmoji:g,getEmoji:v,searchEmojis:_,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:$,shouldMuteEvent:I=>{const S=vr(I);return $(I.pubkey)||S.taggedPubkeys().some($)||I.kind===ft.Text&&k(I)}}},[EC]=_e(new i9),Ll=()=>EC,[Um,bg]=ts({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...Um})},1e3);const zm=()=>({stats:Um,setActiveSubscriptions:n=>bg("activeSubscriptions",n),setActiveBatchSubscriptions:n=>bg("activeBatchSubscriptions",n)});let _g=0;const CC=()=>{const e=_g;return _g+=1,e};class SC{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(t){this.id=CC(),this.req=t}#n(t){this.#e.forEach(n=>{n(t)})}#r(){this.#t.forEach(t=>{t()})}update(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=t,this.#n(t)}updateWith(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(t(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(t){this.#e.push(t)}subscribe(t){this.onUpdate(t)}onComplete(t){this.#t.push(t)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const t=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([t,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((t,n)=>{this.onComplete(()=>{this.res!=null?t(this.res):n(new Error("result was not set"))})})}}const TC=e=>{const t=Ze(e),n=Ze(()=>t().batchSize??100),i=Ze(()=>t().interval??2e3),[o,a]=_e([]);let l;const u=()=>{const{executor:g}=t(),v=o();v.length>0&&(a([]),g(v)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(v=>[...v,g]):(u(),a([g])),d()},removeTask:g=>{a(v=>v.filter(_=>_!==g))}}},jd=e=>e.length===0?null:e.reduce((t,n)=>{const i=t.created_at-n.created_at;return i>0?t:i<0?n:t.id<n.id?t:n});class ws extends SC{addEvent(t){this.updateWith(n=>[...n??[],t])}firstEventPromise(){return this.toUpdatePromise().then(t=>t[0])}latestEventPromise(){return this.toCompletePromise().then(t=>{const n=jd(t);if(n==null)throw new Error("event not found");return n})}}let qu=0;const{setActiveBatchSubscriptions:AC}=zm();setInterval(()=>{AC(qu)},1e3);const IC=e=>e.kind>=3e4&&e.kind<4e4,RC=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{addTask:OC,removeTask:LC}=TC(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;e.forEach(E=>{if(E.req.type==="Event"){const T=n.get(E.req.eventId)??[];n.set(E.req.eventId,[...T,E])}else if(E.req.type==="Profile"){const T=t.get(E.req.pubkey)??[];t.set(E.req.pubkey,[...T,E])}else if(E.req.type==="Reactions"){const T=i.get(E.req.mentionedEventId)??[];i.set(E.req.mentionedEventId,[...T,E])}else if(E.req.type==="Reposts"){const T=o.get(E.req.mentionedEventId)??[];o.set(E.req.mentionedEventId,[...T,E])}else if(E.req.type==="ZapReceipts"){const T=a.get(E.req.mentionedEventId)??[];o.set(E.req.mentionedEventId,[...T,E])}else if(E.req.type==="ParameterizedReplaceableEvent"){const T=RC(E.req),O=l.get(T)??[];l.set(T,[...O,E])}else if(E.req.type==="Followings"){const T=u.get(E.req.pubkey)??[];u.set(E.req.pubkey,[...T,E])}});const d=[...n.keys()],f=[...t.keys()],h=[...i.keys()],g=[...o.keys()],v=[...a.keys()],_=[...u.keys()],$=[];if(d.length>0&&$.push({ids:d}),f.length>0&&$.push({kinds:[ft.Metadata],authors:f}),h.length>0&&$.push({kinds:[ft.Reaction],"#e":h}),g.length>0&&$.push({kinds:[6],"#e":g}),v.length>0&&$.push({kinds:[9735],"#e":v}),_.length>0&&$.push({kinds:[ft.Contacts],authors:_}),l.size>0&&Array.from(l.values()).forEach(([E])=>{if(E.req.type!=="ParameterizedReplaceableEvent")return;const{req:{kind:T,author:O,identifier:j}}=E;$.push({kinds:[T],authors:[O],"#d":[j]})}),$.length===0)return;const k=(E,T)=>{E.forEach(O=>{O.addEvent(T)})},w=()=>{e.forEach(E=>{E.complete()})},{config:C}=Le(),S=Ll()().sub(C().relayUrls,$,{});qu+=1,S.on("event",E=>{if(E.kind===ft.Metadata){const T=t.get(E.pubkey)??[];k(T,E);return}if(E.kind===ft.Reaction){const T=vr(E).lastTaggedEventId();if(T!=null){const O=i.get(T)??[];k(O,E)}}else if(E.kind===6){const T=vr(E).lastTaggedEventId();if(T!=null){const O=o.get(T)??[];k(O,E)}}else if(E.kind===ft.Zap)vr(E).eTags().forEach(([,O])=>{const j=o.get(O)??[];k(j,E)});else if(E.kind===ft.Contacts){const T=u.get(E.pubkey)??[];k(T,E)}else if(IC(E)){const T=vr(E).findFirstTagByName("d")?.[1];if(T!=null){const O=`${E.kind}:${E.pubkey}:${T}`,j=l.get(O)??[];k(j,E)}else console.warn("identifier is undefined")}else{const T=n.get(E.id)??[];T.length>0?k(T,E):console.warn("unknown event received")}}),S.on("eose",()=>{w(),S.unsub(),qu-=1})}})),Pl=({task:e,signal:t})=>{OC(e),t?.addEventListener("abort",()=>LC(e))};class PC extends Error{}const $i=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new PC(l))},e)});return Promise.race([n,i])},Hm=e=>{const t=Ze(e),n=wi(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new ws({type:"Event",eventId:u}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return Pl({task:d,signal:a}),$i(15e3,`useEvent: ${u}`)(f)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},cn=e=>t=>e.some(n=>n==null)?null:t(e),MC=B("<span>投稿が見つかりません"),BC=B('<div class="truncate">読み込み中 '),ls=e=>{const[t,n]=i5(e,["eventId"]),{shouldMuteEvent:i}=Le(),{event:o,query:a}=Hm(()=>cn([t.eventId])(([u])=>({eventId:u}))),l=()=>{const u=o();return u!=null&&i(u)};return b(ln,{get fallback(){return(()=>{const u=MC();return u.firstChild,A(u,()=>e.eventId,null),u})()},get children(){return[b(ze,{get when(){return l()},children:null}),b(ze,{get when(){return o()},keyed:!0,children:u=>b(Nv,s5({event:u},n))}),b(ze,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=BC();return d.firstChild,A(d,b(to,{eventId:u}),null),d})()})]}})},jC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},NC=e=>{try{return jC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},Fm=({taskProvider:e,queryClient:t})=>({queryKey:n,signal:i})=>{const o=e(n);if(o==null)return Promise.resolve(null);const a=o.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return o.onUpdate(l=>{const u=jd(l);t.setQueryData(n,u)}),Pl({task:o,signal:i}),$i(15e3,`${JSON.stringify(n)}`)(a)},qm=({taskProvider:e,queryClient:t})=>({queryKey:n,signal:i})=>{const o=e(n);if(o==null)return Promise.resolve([]);const a=o.toUpdatePromise().catch(()=>[]);return o.onUpdate(l=>{t.setQueryData(n,l)}),Pl({task:o,signal:i}),$i(15e3,`${JSON.stringify(n)}`)(a)},ki=e=>{const t=_i(),n=Ze(e),i=Ze(()=>["useProfile",n()]),o=wi(i,Fm({taskProvider:([,u])=>{if(u==null)return null;const{pubkey:d}=u;return new ws({type:"Profile",pubkey:d})},queryClient:t}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1});return{profile:Ze(()=>{if(o.data==null)return null;const{content:u}=o.data;return NC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:DC}=xo,ko=e=>{try{return DC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Ml=e=>{const{profile:t}=ki(()=>({pubkey:e.pubkey}));return b(ln,{get fallback(){return ko(e.pubkey)},get children(){return[b(ze,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),b(ze,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",Ze(()=>t()?.name)]}})]}})},Wm=e=>{const[t,n]=_e(new Date);return On(()=>{const i=setInterval(()=>{n(new Date)},e().interval);qn(()=>clearInterval(i))}),t},UC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},wg=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,zC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},HC=e=>{switch(e.kind){case"today":return wg(e.value);case"yesterday":return`昨日 ${wg(e.value)}`;case"abs":default:return e.value.toLocaleString()}},FC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,qC=(e,t)=>{const n=FC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},xg=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),WC=e=>new Date(+e-24*60*60*1e3),Zm=(e,t,n)=>xg(e,t)?n({kind:"today",value:e}):xg(e,WC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),ZC=(e,t=new Date)=>Zm(e,t,zC),VC=(e,t=new Date)=>Zm(e,t,HC),$g=(e,t=new Date,n=UC)=>n(qC(e,t)),kg=Wm(()=>({interval:7e3})),Eg=Wm(()=>({interval:60*1e3})),Vm=()=>{const{config:e}=Le();return t=>{switch(e().dateFormat){case"absolute-long":return ZC(t,Eg());case"absolute-short":return VC(t,Eg());case"relative":return $g(t,kg());default:return $g(t,kg())}}},[KC,Gi]=_e({type:"Closed"}),$r=()=>({modalState:KC,setModalState:Gi,showProfile:a=>{Gi({type:"Profile",pubkey:a})},showProfileEdit:()=>{Gi({type:"ProfileEdit"})},showAddColumn:()=>{Gi({type:"AddColumn"})},showAbout:()=>{Gi({type:"About"})},closeModal:()=>{Gi({type:"Closed"})}}),GC=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),Km=e=>{const t=vt(),{showProfile:n}=$r(),i=Vm(),o=Ze(()=>vr(e.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=GC(),u=l.firstChild,d=u.firstChild,f=d.nextSibling,h=f.firstChild,g=f.nextSibling,v=u.nextSibling;return A(d,b(_m,{})),h.$$click=()=>n(e.event.pubkey),A(h,b(Ml,{get pubkey(){return e.event.pubkey}})),A(f,()=>t()("notification.reposted"),null),A(g,()=>i(o().createdAtAsDate())),A(v,b(ls,{get eventId(){return a()}})),l})()};it(["click"]);const QC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),YC=(e={})=>(()=>{const t=QC();return Qe(t,e,!0,!0),t})(),XC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),Gm=(e={})=>(()=>{const t=XC();return Qe(t,e,!0,!0),t})(),JC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),Nd=(e={})=>(()=>{const t=JC();return Qe(t,e,!0,!0),t})(),eS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),Qm=(e={})=>(()=>{const t=eS();return Qe(t,e,!0,!0),t})(),tS=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),tl=(e={})=>(()=>{const t=tS();return Qe(t,e,!0,!0),t})(),nS=B('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),Dd=e=>{let t,n;const[i,o]=_e(!1),[a,l]=_e({}),u=o5(()=>e.children),d=()=>o(!1),f=()=>o($=>!$),h=$=>{const k=$.target;k!=null&&!n?.contains(k)&&d()},g=()=>{document.addEventListener("mousedown",h)},v=()=>{document.removeEventListener("mousedown",h)},_=()=>{if(t==null||n==null)return;const $=t?.getBoundingClientRect(),k=n?.getBoundingClientRect();let{top:w,left:C}=$;e.position==="left"?C-=$.width:e.position==="right"?C+=$.width:e.position==="top"?(w-=$.height,C-=$.left+$.width/2):(w+=$.height,C+=$.width/2),w=Math.min(w,window.innerHeight-k.height),C=Math.min(C,window.innerWidth-k.width),l({left:`${C}px`,top:`${w}px`})};return On(()=>{i()?(g(),e.onOpen?.()):(v(),e.onClose?.())}),On(dl(u,()=>{_()})),On(()=>{i()&&_()}),un(()=>{e.ref?.({close:d})}),qn(()=>v()),(()=>{const $=nS(),k=$.firstChild,w=k.nextSibling;k.$$click=()=>{f(),_()};const C=t;typeof C=="function"?Wn(C,k):t=k,A(k,()=>e.button);const I=n;return typeof I=="function"?Wn(I,w):n=w,A(w,u),Ae(S=>{const E=!i(),T=!!i(),O=a();return E!==S._v$&&w.classList.toggle("hidden",S._v$=E),T!==S._v$2&&w.classList.toggle("block",S._v$2=T),S._v$3=a5(w,O,S._v$3),S},{_v$:void 0,_v$2:void 0,_v$3:void 0}),$})()};it(["click"]);const rS=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),iS=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),sS=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=rS(),i=n.firstChild;return i.$$click=t,A(i,()=>e.item.content()),n})()},Ym=e=>{let t;const n=()=>t?.close();return b(Dd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=iS();return A(i,b(St,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>b(sS,{item:o,onClose:n})})),i}})};it(["click"]);function Xm(e){return e&&e.__esModule?e.default:e}function An(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Bl,be,Jm,Ks,ev,Cg,nl={},tv=[],oS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Fr(e,t){for(var n in t)e[n]=t[n];return e}function nv(e){var t=e.parentNode;t&&t.removeChild(e)}function Wu(e,t,n){var i,o,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Bl.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return Oa(e,l,i,o,null)}function Oa(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Jm};return o==null&&be.vnode!=null&&be.vnode(a),a}function pr(){return{current:null}}function cs(e){return e.children}function Fn(e,t){this.props=e,this.context=t}function us(e,t){if(t==null)return e.__?us(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?us(e):null}function rv(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return rv(e)}}function Sg(e){(!e.__d&&(e.__d=!0)&&Ks.push(e)&&!rl.__r++||Cg!==be.debounceRendering)&&((Cg=be.debounceRendering)||ev)(rl)}function rl(){for(var e;rl.__r=Ks.length;)e=Ks.sort(function(t,n){return t.__v.__b-n.__v.__b}),Ks=[],e.some(function(t){var n,i,o,a,l,u;t.__d&&(l=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Fr({},a)).__v=a.__v+1,Ud(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??us(a),a.__h),av(i,a),a.__e!=l&&rv(a)))})}function iv(e,t,n,i,o,a,l,u,d,f){var h,g,v,_,$,k,w,C=i&&i.__k||tv,I=C.length;for(n.__k=[],h=0;h<t.length;h++)if((_=n.__k[h]=(_=t[h])==null||typeof _=="boolean"?null:typeof _=="string"||typeof _=="number"||typeof _=="bigint"?Oa(null,_,null,null,_):Array.isArray(_)?Oa(cs,{children:_},null,null,null):_.__b>0?Oa(_.type,_.props,_.key,null,_.__v):_)!=null){if(_.__=n,_.__b=n.__b+1,(v=C[h])===null||v&&_.key==v.key&&_.type===v.type)C[h]=void 0;else for(g=0;g<I;g++){if((v=C[g])&&_.key==v.key&&_.type===v.type){C[g]=void 0;break}v=null}Ud(e,_,v=v||nl,o,a,l,u,d,f),$=_.__e,(g=_.ref)&&v.ref!=g&&(w||(w=[]),v.ref&&w.push(v.ref,null,_),w.push(g,_.__c||$,_)),$!=null?(k==null&&(k=$),typeof _.type=="function"&&_.__k===v.__k?_.__d=d=sv(_,d,e):d=ov(e,_,v,C,$,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=us(v))}for(n.__e=k,h=I;h--;)C[h]!=null&&(typeof n.type=="function"&&C[h].__e!=null&&C[h].__e==n.__d&&(n.__d=us(i,h+1)),cv(C[h],C[h]));if(w)for(h=0;h<w.length;h++)lv(w[h],w[++h],w[++h])}function sv(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?sv(i,t,n):ov(n,i,i,o,i.__e,t));return t}function il(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){il(n,t)}):t.push(e)),t}function ov(e,t,n,i,o,a){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function aS(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||sl(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||sl(e,a,t[a],n[a],i)}function Tg(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||oS.test(t)?n:n+"px"}function sl(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Tg(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||Tg(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?Ig:Ag,a):e.removeEventListener(t,a?Ig:Ag,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ag(e){this.l[e.type+!1](be.event?be.event(e):e)}function Ig(e){this.l[e.type+!0](be.event?be.event(e):e)}function Ud(e,t,n,i,o,a,l,u,d){var f,h,g,v,_,$,k,w,C,I,S,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(f=be.__b)&&f(t);try{e:if(typeof E=="function"){if(w=t.props,C=(f=E.contextType)&&i[f.__c],I=f?C?C.props.value:f.__:i,n.__c?k=(h=t.__c=n.__c).__=h.__E:("prototype"in E&&E.prototype.render?t.__c=h=new E(w,I):(t.__c=h=new Fn(w,I),h.constructor=E,h.render=cS),C&&C.sub(h),h.props=w,h.state||(h.state={}),h.context=I,h.__n=i,g=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),E.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=Fr({},h.__s)),Fr(h.__s,E.getDerivedStateFromProps(w,h.__s))),v=h.props,_=h.state,g)E.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(E.getDerivedStateFromProps==null&&w!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(w,I),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(w,h.__s,I)===!1||t.__v===n.__v){h.props=w,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),h.__h.length&&l.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(w,h.__s,I),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,_,$)})}h.context=I,h.props=w,h.state=h.__s,(f=be.__r)&&f(t),h.__d=!1,h.__v=t,h.__P=e,f=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(i=Fr(Fr({},i),h.getChildContext())),g||h.getSnapshotBeforeUpdate==null||($=h.getSnapshotBeforeUpdate(v,_)),S=f!=null&&f.type===cs&&f.key==null?f.props.children:f,iv(e,Array.isArray(S)?S:[S],t,n,i,o,a,l,u,d),h.base=t.__e,t.__h=null,h.__h.length&&l.push(h),k&&(h.__E=h.__=null),h.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=lS(n.__e,t,n,i,o,a,l,d);(f=be.diffed)&&f(t)}catch(T){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),be.__e(T,t,n)}}function av(e,t){be.__c&&be.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){be.__e(i,n.__v)}})}function lS(e,t,n,i,o,a,l,u){var d,f,h,g=n.props,v=t.props,_=t.type,$=0;if(_==="svg"&&(o=!0),a!=null){for(;$<a.length;$++)if((d=a[$])&&"setAttribute"in d==!!_&&(_?d.localName===_:d.nodeType===3)){e=d,a[$]=null;break}}if(e==null){if(_===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,v.is&&v),a=null,u=!1}if(_===null)g===v||u&&e.data===v||(e.data=v);else{if(a=a&&Bl.call(e.childNodes),f=(g=n.props||nl).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},$=0;$<e.attributes.length;$++)g[e.attributes[$].name]=e.attributes[$].value;(h||f)&&(h&&(f&&h.__html==f.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(aS(e,v,g,o,u),h)t.__k=[];else if($=t.props.children,iv(e,Array.isArray($)?$:[$],t,n,i,o&&_!=="foreignObject",a,l,a?a[0]:n.__k&&us(n,0),u),a!=null)for($=a.length;$--;)a[$]!=null&&nv(a[$]);u||("value"in v&&($=v.value)!==void 0&&($!==g.value||$!==e.value||_==="progress"&&!$)&&sl(e,"value",$,g.value,!1),"checked"in v&&($=v.checked)!==void 0&&$!==e.checked&&sl(e,"checked",$,g.checked,!1))}return e}function lv(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){be.__e(i,n)}}function cv(e,t,n){var i,o;if(be.unmount&&be.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||lv(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){be.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&cv(i[o],t,typeof e.type!="function");n||e.__e==null||nv(e.__e),e.__e=e.__d=void 0}function cS(e,t,n){return this.constructor(e,n)}function uv(e,t,n){var i,o,a;be.__&&be.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Ud(t,e=(!i&&n||t).__k=Wu(cs,null,[e]),o||nl,nl,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Bl.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),av(a,e)}Bl=tv.slice,be={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},Jm=0,Fn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Fr({},this.state),typeof e=="function"&&(e=e(Fr({},n),this.props)),e&&Fr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Sg(this))},Fn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Sg(this))},Fn.prototype.render=cs,Ks=[],ev=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,rl.__r=0;var uS=0;function K(e,t,n,i,o){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--uS,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return be.vnode&&be.vnode(d),d}function dS(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function fS(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Wr={set:dS,get:fS};const bu=new Map,hS=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function pS(){for(const{v:e,emoji:t}of hS)if(dv(t))return e}function gS(){return!dv("🇨🇦")}function dv(e){if(bu.has(e))return bu.get(e);const t=mS(e);return bu.set(e,t),t}const mS=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,f=Math.floor(u/4/n),h=e.getImageData(d,f,1,1).data;return!(a[u]!==h[0]||a[u+2]!==h[2]||e.measureText(o).width>=n)}})();var Rg={latestVersion:pS,noCountryFlags:gS};const Zu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Rt=null;function vS(e){Rt||(Rt=Wr.get("frequently")||{});const t=e.id||e;t&&(Rt[t]||(Rt[t]=0),Rt[t]+=1,Wr.set("last",t),Wr.set("frequently",Rt))}function yS({maxFrequentRows:e,perLine:t}){if(!e)return[];Rt||(Rt=Wr.get("frequently"));let n=[];if(!Rt){Rt={};for(let a in Zu.slice(0,t)){const l=Zu[a];Rt[l]=t-a,n.push(l)}return n}const i=e*t,o=Wr.get("last");for(let a in Rt)n.push(a);if(n.sort((a,l)=>{const u=Rt[l],d=Rt[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete Rt[l];o&&n.indexOf(o)==-1&&(delete Rt[n[n.length-1]],n.splice(-1,1,o)),Wr.set("frequently",Rt)}return n}var fv={add:vS,get:yS,DEFAULTS:Zu},hv={};hv=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var mr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Mt=null,Ue=null;const _u={};async function Og(e){if(_u[e])return _u[e];const n=await(await fetch(e)).json();return _u[e]=n,n}let wu=null,pv=null,gv=!1;function jl(e,{caller:t}={}){return wu||(wu=new Promise(n=>{pv=n})),e?bS(e):t&&!gv&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),wu}async function bS(e){gv=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=mr.emojiVersion.value),n||(n=mr.set.value),i||(i=mr.locale.value),Ue)Ue.categories=Ue.categories.filter(d=>!d.name);else{Ue=(typeof e.data=="function"?await e.data():e.data)||await Og(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Ue.emoticons={},Ue.natives={},Ue.categories.unshift({id:"frequent",emojis:[]});for(const d in Ue.aliases){const f=Ue.aliases[d],h=Ue.emojis[f];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}Ue.originalCategories=Ue.categories}if(Mt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?Xm(hv):await Og(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const f=e.custom[d],h=e.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Mt.categories.custom),h&&!f.icon&&(f.target=h.target||h),Ue.categories.push(f);for(const g of f.emojis)Ue.emojis[g.id]=g}}e.categories&&(Ue.categories=Ue.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,f)=>{const h=e.categories.indexOf(d.id),g=e.categories.indexOf(f.id);return h-g}));let o=null,a=null;n=="native"&&(o=Rg.latestVersion(),a=e.noCountryFlags||Rg.noCountryFlags());let l=Ue.categories.length,u=!1;for(;l--;){const d=Ue.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=e;g=g>=0?g:mr.maxFrequentRows.value,v||(v=mr.perLine.value),d.emojis=fv.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){Ue.categories.splice(l,1);continue}const{categoryIcons:f}=e;if(f){const g=f[d.id];g&&!d.icon&&(d.icon=g)}let h=d.emojis.length;for(;h--;){const g=d.emojis[h],v=g.id?g:Ue.emojis[g],_=()=>{d.emojis.splice(h,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){_();continue}if(o&&v.version>o){_();continue}if(a&&d.id=="flags"&&!kS.includes(v.id)){_();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([k,w])=>{if(k)return(Array.isArray(k)?k:[k]).map(C=>(w?C.split(/[-|_|\s]+/):[C]).map(I=>I.toLowerCase())).flat()}).flat().filter(k=>k&&k.trim()).join(","),v.emoticons)for(const k of v.emoticons)Ue.emoticons[k]||(Ue.emoticons[k]=v.id);let $=0;for(const k of v.skins){if(!k)continue;$++;const{native:w}=k;w&&(Ue.natives[w]=v.id,v.search+=`,${w}`);const C=$==1?"":`:skin-tone-${$}:`;k.shortcodes=`:${v.id}:${C}`}}}}u&&es.reset(),pv()}function mv(e,t,n){e||(e={});const i={};for(let o in t)i[o]=vv(o,e,t,n);return i}function vv(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const _S=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Vu=null;function wS(e){return e.id?e:Ue.emojis[e]||Ue.emojis[Ue.aliases[e]]||Ue.emojis[Ue.natives[e]]}function xS(){Vu=null}async function $S(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await jl(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,f)=>u.trim()&&f.indexOf(u)==d);if(!i.length)return;let o=Vu||(Vu=Object.values(Ue.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${u}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:f+1)}o=a}return a.length<2||(a.sort((u,d)=>{const f=l[u.id],h=l[d.id];return f==h?u.id.localeCompare(d.id):f-h}),a.length>t&&(a=a.slice(0,t))),a}var es={search:$S,get:wS,reset:xS,SHORTCODES_REGEX:_S};const kS=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function ES(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function CS(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function SS(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const TS={activity:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:K("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),K("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),K("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:K("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),K("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:K("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),K("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[K("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),K("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:K("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:K("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},AS={loupe:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:K("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:K("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:K("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var ol={categories:TS,search:AS};function Ku(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(es.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=es.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),l=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return K("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?K("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?K("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):K("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${l})`,backgroundSize:`${100*Ue.sheet.cols}% ${100*Ue.sheet.rows}%`,backgroundPosition:`${100/(Ue.sheet.cols-1)*o.x}% ${100/(Ue.sheet.rows-1)*o.y}%`}})})}const IS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class yv extends IS{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=vv(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class RS extends yv{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var bv={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:mr.set,skin:mr.skin};class _v extends yv{async connectedCallback(){const t=mv(this.props,bv,this);t.element=this,t.ref=n=>{this.component=n},await jl(),!this.disconnected&&uv(K(Ku,{...t}),this)}constructor(t){super(t)}}An(_v,"Props",bv);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",_v);var Lg,Gu=[],Pg=be.__b,Mg=be.__r,Bg=be.diffed,jg=be.__c,Ng=be.unmount;function OS(){var e;for(Gu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Gu.pop();)if(e.__P)try{e.__H.__h.forEach(La),e.__H.__h.forEach(Qu),e.__H.__h=[]}catch(t){e.__H.__h=[],be.__e(t,e.__v)}}be.__b=function(e){Pg&&Pg(e)},be.__r=function(e){Mg&&Mg(e);var t=e.__c.__H;t&&(t.__h.forEach(La),t.__h.forEach(Qu),t.__h=[])},be.diffed=function(e){Bg&&Bg(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Gu.push(t)!==1&&Lg===be.requestAnimationFrame||((Lg=be.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),Dg&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);Dg&&(i=requestAnimationFrame(o))})(OS))},be.__c=function(e,t){t.some(function(n){try{n.__h.forEach(La),n.__h=n.__h.filter(function(i){return!i.__||Qu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],be.__e(i,n.__v)}}),jg&&jg(e,t)},be.unmount=function(e){Ng&&Ng(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{La(i)}catch(o){t=o}}),t&&be.__e(t,n.__v))};var Dg=typeof requestAnimationFrame=="function";function La(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Qu(e){e.__c=e.__()}function LS(e,t){for(var n in t)e[n]=t[n];return e}function Ug(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function al(e){this.props=e}(al.prototype=new Fn).isPureReactComponent=!0,al.prototype.shouldComponentUpdate=function(e,t){return Ug(this.props,e)||Ug(this.state,t)};var zg=be.__b;be.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),zg&&zg(e)};var PS=be.__e;be.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}PS(e,t,n)};var Hg=be.unmount;function xu(){this.__u=0,this.t=null,this.__b=null}function wv(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Ea(){this.u=null,this.o=null}be.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Hg&&Hg(e)},(xu.prototype=new Fn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=wv(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function g(v,_,$){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(k){return g(k,_,$)}),v.__c&&v.__c.__P===_&&(v.__e&&$.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=$)),v}(f,f.__c.__P,f.__c.__O)}var h;for(i.setState({__e:i.__b=null});h=i.t.pop();)h.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(l,l)},xu.prototype.componentWillUnmount=function(){this.t=[]},xu.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=LS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Wu(cs,null,e.fallback);return o&&(o.__h=null),[Wu(cs,null,t.__e?null:e.children),o]};var Fg=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Ea.prototype=new Fn).__e=function(e){var t=this,n=wv(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),Fg(t,e,i)):o()};n?n(a):a()}},Ea.prototype.render=function(e){this.u=null,this.o=new Map;var t=il(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ea.prototype.componentDidUpdate=Ea.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Fg(e,n,t)})};var MS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,BS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,jS=typeof document<"u",NS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Fn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Fn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var qg=be.event;function DS(){}function US(){return this.cancelBubble}function zS(){return this.defaultPrevented}be.event=function(e){return qg&&(e=qg(e)),e.persist=DS,e.isPropagationStopped=US,e.isDefaultPrevented=zS,e.nativeEvent=e};var Wg={configurable:!0,get:function(){return this.class}},Zg=be.vnode;be.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var l=n[a];jS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!NS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&BS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=il(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=il(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(Wg.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",Wg))}e.$$typeof=MS,Zg&&Zg(e)};var Vg=be.__r;be.__r=function(e){Vg&&Vg(e),e.__c};const HS={light:"outline",dark:"solid"};class FS extends al{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return K("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return K("img",{src:n.src})}const i=ol.categories[t.id]||ol.categories.custom,o=this.props.icons=="auto"?HS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return K("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:K("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Mt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),K("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),K("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Ue.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class qS extends al{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const Ca={rowsPerRender:10};class WS extends Fn{getInitialState(t=this.props){return{skin:Wr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Mt.rtl?"rtl":"ltr",this.refs={menu:pr(),navigation:pr(),scroll:pr(),search:pr(),searchInput:pr(),skinToneButton:pr(),skinToneRadio:pr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await jl(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Ue;this.refs.categories=new Map;const n=Ue.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%Ca.rowsPerRender?{}:pr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of t){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:pr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return es.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=l=>{l!=t.state.categoryId&&t.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const u=[...n];for(const[d,f]of u)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Ca.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Ca.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,f]=this.state.pos;const h=(()=>{if(d==0&&f==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(f+=v,!g[f]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,f=i?0:u[d].length-1,[d,f];f=i?g.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[f]||(f=g.length-1),[d,f]):(d=a?0:u.length-1,f=a?0:u[d].length-1,[d,f])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(t=i[n].__categoryId),t&&(l=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=SS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&fv.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Wr.set("skin",t)}renderNav(){return K(FS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return K("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[K("div",{class:"flex flex-middle flex-grow",children:[K("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:K(Ku,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),K("div",{class:`margin-${this.dir[0]}`,children:t||n?K("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[K("div",{class:"preview-title ellipsis",children:t?t.name:Mt.search_no_results_1}),K("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Mt.search_no_results_2})]}):K("div",{class:"preview-placeholder color-c",children:Mt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(t.skins[l-1]||t.skins[0]).native,f=ES(this.state.pos,n),h=n.concat(t.id).join("");return K(qS,{selected:f,skin:l,size:a,children:K("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[K("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),K(Ku,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return K("div",{children:[K("div",{class:"spacer"}),K("div",{class:"flex flex-middle",children:[K("div",{class:"search relative flex-grow",children:[K("input",{type:"search",ref:this.refs.searchInput,placeholder:Mt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),K("span",{class:"icon loupe flex",children:ol.search.loupe}),this.state.searchResults&&K("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:ol.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?K("div",{class:"category",ref:this.refs.search,children:[K("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Mt.categories.search}),K("div",{children:t.length?t.map((n,i)=>K("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):K("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&K("a",{onClick:this.props.onAddCustomEmoji,children:Mt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Ue,n=!!this.state.searchResults,i=this.getPerLine();return K("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return K("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[K("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Mt.categories[o.id]}),K("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const f=u.index-u.index%Ca.rowsPerRender,h=this.state.visibleRows[f],g="current"in u?u:void 0;if(!h&&!g)return null;const v=d*i,_=v+i,$=o.emojis.slice(v,_);return $.length<i&&$.push(...new Array(i-$.length)),K("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&$.map((k,w)=>{if(!k)return K("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=es.get(k);return this.renderEmojiButton(C,{pos:[u.index,w],posinset:u.posinset+w,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:K("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:K("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Mt.skins.choose,title:Mt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:K("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return K("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),K("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Mt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return K("div",{children:[K("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Mt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),K("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[K("span",{class:`skin-tone skin-tone-${l}`}),K("span",{class:"margin-small-lr",children:Mt.skins[l]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return K("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&K("div",{class:"padding-lr",children:this.renderSearch()}),K("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:K("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),An(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),An(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),An(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),An(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),An(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await es.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let f of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),An(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),An(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),An(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),An(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await CS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class zd extends RS{async connectedCallback(){const t=mv(this.props,mr,this);t.element=this,t.ref=n=>{this.component=n},await jl(t),!this.disconnected&&uv(K(WS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Xm(xv)})}}An(zd,"Props",mr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",zd);var xv={};xv=`:host {
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

`;const $v=e=>{let t;const[n,i]=_e(void 0);return b(Dd,{ref:l=>{t=l},position:"bottom",get button(){return e.children},onOpen:()=>{const l=new zd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(l)},onClose:()=>{i(void 0)},get children(){return n()}})},ZS=B("<div>"),VS=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),KS=B("<br>"),GS=B("<span>理由: "),QS=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),YS=e=>{const[t,n]=_e(!1);return b(le,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=QS();return i.firstChild,i.$$click=()=>n(!0),A(i,b(le,{get when(){return e.contentWarning.reason!=null},get children(){return[KS(),(()=>{const o=GS();return o.firstChild,A(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=ZS();return A(i,()=>e.children),i})(),b(le,{get when(){return e.contentWarning.contentWarning},get children(){const i=VS();return i.$$click=()=>n(!1),i}})]}})};it(["click"]);const kv=e=>{const{profile:t}=ki(()=>({pubkey:e.pubkey}));return b(le,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${ko(e.pubkey)}`},get children(){return["@",Ze(()=>t()?.name??e.pubkey)]}})},XS=B('<a target="_blank" rel="noreferrer noopener">'),Eo=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return b(le,{get when(){return t()},get fallback(){return e.href},get children(){const n=XS();return A(n,()=>e.children??e.href),Ae(i=>{const o=e.class,a=e.href;return o!==i._v$&&G0(n,i._v$=o),a!==i._v$2&&Ge(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},JS=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},eT=e=>{try{const t=new URL(e);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(t.pathname)}catch{return!1}},tT=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},nT=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),rT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),iT=e=>{let t;const[n,i]=_e(e.initialHidden);return b(le,{get when(){return!n()},get fallback(){return(()=>{const o=rT();return o.$$click=()=>i(!1),o})()},get children(){return b(Eo,{class:"my-2 block",get href(){return e.url},get children(){const o=nT(),a=t;return typeof a=="function"?Wn(a,o):t=o,Ae(l=>{const u=tT(e.url),d=e.url;return u!==l._v$&&Ge(o,"src",l._v$=u),d!==l._v$2&&Ge(o,"alt",l._v$2=d),l},{_v$:void 0,_v$2:void 0}),o}})}})};it(["click"]);const sT=B('<div class="my-1 rounded border p-1">'),oT=e=>b(le,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return b(to,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=sT();return A(t,b(ls,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[ft.Text]}})),t}}),aT=B('<button class="inline text-blue-500 underline">'),$u=e=>{const{showProfile:t}=$r(),n=()=>{t(e.pubkey)};return(()=>{const i=aT();return i.$$click=n,A(i,b(kv,{get pubkey(){return e.pubkey}})),i})()};it(["click"]);const lT=B('<video class="max-h-64 max-w-full rounded-sm object-contain shadow" controls><a>ダウンロード'),cT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">動画を表示する'),uT=e=>{let t;const[n,i]=_e(e.initialHidden);return b(le,{get when(){return!n()},get fallback(){return(()=>{const o=cT();return o.$$click=()=>i(!1),o})()},get children(){return b(Eo,{class:"my-2 block",get href(){return e.url},get children(){const o=lT(),a=o.firstChild,l=t;return typeof l=="function"?Wn(l,o):t=o,Ae(u=>{const d=e.url,f=e.url;return d!==u._v$&&Ge(o,"src",u._v$=d),f!==u._v$2&&Ge(a,"href",u._v$2=f),u},{_v$:void 0,_v$2:void 0}),o}})}})};it(["click"]);const[Hd,dT]=_e({}),Ev=e=>{Hd()[e]==null&&dT(t=>({...t,[e]:new MessageChannel}))},fT=e=>{const t=()=>Hd()[e().id],n=(o,a)=>{const l={requestId:o,request:a};t().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const f=h=>{const g=h.data;g.requestId===o&&(t().port1.removeEventListener("message",f),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",f),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",f,!1),t().port1.start()});return un(()=>{const{id:o}=e();Ev(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},hT=e=>{const t=Ze(e),n=()=>Hd()[t().id];un(()=>{const{id:i}=t();Ev(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,f=t().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),qn(()=>{o.removeEventListener("message",a)})})},Co=()=>fT(()=>({id:"CommandChannel"})),Yu=e=>{hT(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},ku=B("<span>"),Kg=B('<div class="my-1 rounded border p-1">'),pT=B('<span class="text-blue-500 underline">'),gT=B('<button class="text-blue-500 underline">'),mT=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),vT=e=>{const{config:t,saveColumn:n}=Le(),i=Co(),o=()=>Ol(e.event),a=l=>{n(Bd({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return b(St,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=ku();return A(u,()=>l.content),u})();if(l.type==="URL"){const u=()=>!t().showMedia||o().contentWarning().contentWarning||!e.embedding;return JS(l.content)?b(iT,{get url(){return l.content},get initialHidden(){return u()}}):eT(l.content)?b(uT,{get url(){return l.content},get initialHidden(){return u()}}):b(Eo,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=ku();return A(d,()=>l.content),d})();if(u.type==="MentionedUser")return b($u,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?b(oT,{mentionedEvent:u}):b(to,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&e.embedding?(()=>{const u=Kg();return A(u,b(ls,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[ft.Text]}})),u})():l.data.type==="nevent"&&e.embedding?(()=>{const u=Kg();return A(u,b(ls,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?b($u,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?b($u,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=pT();return A(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=gT();return u.$$click=()=>a(l.content),A(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=ku();return A(d,()=>l.content),d})():(()=>{const d=mT();return Ge(d,"src",u),Ae(f=>{const h=l.content,g=l.shortcode;return h!==f._v$&&Ge(d,"alt",f._v$=h),g!==f._v$2&&Ge(d,"title",f._v$2=g),f},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};it(["click"]);const yT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),ds=(e={})=>(()=>{const t=yT();return Qe(t,e,!0,!0),t})(),bT=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),_T=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=bT();i.$$click=n;const o=t;return typeof o=="function"?Wn(o,i):t=i,A(i,()=>e.children),i})()};it(["click"]);const wT=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-4em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),Ei=e=>b(_T,{onClose:()=>e.onClose?.(),get children(){const t=wT(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),A(i,b(le,{get when(){return e?.closeButton},get fallback(){return b(ds,{})},keyed:!0,children:a=>a()})),A(o,()=>e.children),t}});it(["click"]);const xT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),$T=(e={})=>(()=>{const t=xT();return Qe(t,e,!0,!0),t})(),kT=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),ET=B('<div class="relative inline-block"><button type="button">'),CT=e=>{const[t,n]=_e(!1),i=()=>{navigator.clipboard.writeText(e.text).then(o=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=ET(),a=o.firstChild;return a.$$click=i,A(a,b($T,{})),A(o,b(le,{get when(){return t()},get children(){return kT()}}),null),Ae(()=>G0(a,e.class)),o})()};it(["click"]);const ST=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),TT=e=>{const t=Ze(()=>JSON.stringify(e.event,null,2));return b(Ei,{get onClose(){return e.onClose},get children(){const n=ST(),i=n.firstChild,o=i.nextSibling;return A(i,t),A(o,b(CT,{class:"h-4 w-4",get text(){return t()}})),n}})},AT=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),IT=B('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),RT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),OT=e=>{const{profile:t,query:n}=ki(()=>({pubkey:e.pubkey}));return(()=>{const i=IT(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.firstChild,d=u.firstChild,f=d.firstChild;return o.$$click=h=>{h.preventDefault(),e.onShowProfile?.()},A(o,b(le,{get when(){return t()?.picture},keyed:!0,children:h=>(()=>{const g=RT();return Ge(g,"src",h),g})()})),u.$$click=h=>{h.preventDefault(),e?.onShowProfile?.()},A(d,b(le,{get when(){return(t()?.display_name?.length??0)>0},get children(){const h=AT();return A(h,()=>t()?.display_name),h}}),f),A(f,b(le,{get when(){return t()?.name},get fallback(){return`@${ko(e.pubkey)}`},keyed:!0,children:h=>`@${h}`})),i})()};it(["click"]);const LT=B('<div class="px-4 py-2"><div> 件</div><div>'),PT=B('<div class="flex border-t py-1">'),Xu=e=>{const{showProfile:t}=$r();return b(Ei,{get onClose(){return e.onClose},get children(){const n=LT(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return A(i,()=>e.data.length,o),A(a,b(St,{get each(){return e.data},children:l=>{const u=()=>e.pubkeyExtractor(l);return(()=>{const d=PT();return A(d,b(le,{get when(){return e.renderInfo},keyed:!0,children:f=>f(l)}),null),A(d,b(OT,{get pubkey(){return u()},onShowProfile:()=>t(u())}),null),d})()}})),n}})},MT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Cv=(e={})=>(()=>{const t=MT();return Qe(t,e,!0,!0),t})(),BT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),jT=(e={})=>(()=>{const t=BT();return Qe(t,e,!0,!0),t})(),NT=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),DT=(e={})=>(()=>{const t=NT();return Qe(t,e,!0,!0),t})();var Fd={},So={},Sv={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,h){this.fn=d,this.context=f,this.once=h||!1}function a(d,f,h,g,v){if(typeof h!="function")throw new TypeError("The listener must be a function");var _=new o(h,g||d,v),$=n?n+f:f;return d._events[$]?d._events[$].fn?d._events[$]=[d._events[$],_]:d._events[$].push(_):(d._events[$]=_,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function u(){this._events=new i,this._eventsCount=0}u.prototype.eventNames=function(){var f=[],h,g;if(this._eventsCount===0)return f;for(g in h=this._events)t.call(h,g)&&f.push(n?g.slice(1):g);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(h)):f},u.prototype.listeners=function(f){var h=n?n+f:f,g=this._events[h];if(!g)return[];if(g.fn)return[g.fn];for(var v=0,_=g.length,$=new Array(_);v<_;v++)$[v]=g[v].fn;return $},u.prototype.listenerCount=function(f){var h=n?n+f:f,g=this._events[h];return g?g.fn?1:g.length:0},u.prototype.emit=function(f,h,g,v,_,$){var k=n?n+f:f;if(!this._events[k])return!1;var w=this._events[k],C=arguments.length,I,S;if(w.fn){switch(w.once&&this.removeListener(f,w.fn,void 0,!0),C){case 1:return w.fn.call(w.context),!0;case 2:return w.fn.call(w.context,h),!0;case 3:return w.fn.call(w.context,h,g),!0;case 4:return w.fn.call(w.context,h,g,v),!0;case 5:return w.fn.call(w.context,h,g,v,_),!0;case 6:return w.fn.call(w.context,h,g,v,_,$),!0}for(S=1,I=new Array(C-1);S<C;S++)I[S-1]=arguments[S];w.fn.apply(w.context,I)}else{var E=w.length,T;for(S=0;S<E;S++)switch(w[S].once&&this.removeListener(f,w[S].fn,void 0,!0),C){case 1:w[S].fn.call(w[S].context);break;case 2:w[S].fn.call(w[S].context,h);break;case 3:w[S].fn.call(w[S].context,h,g);break;case 4:w[S].fn.call(w[S].context,h,g,v);break;default:if(!I)for(T=1,I=new Array(C-1);T<C;T++)I[T-1]=arguments[T];w[S].fn.apply(w[S].context,I)}}return!0},u.prototype.on=function(f,h,g){return a(this,f,h,g,!1)},u.prototype.once=function(f,h,g){return a(this,f,h,g,!0)},u.prototype.removeListener=function(f,h,g,v){var _=n?n+f:f;if(!this._events[_])return this;if(!h)return l(this,_),this;var $=this._events[_];if($.fn)$.fn===h&&(!v||$.once)&&(!g||$.context===g)&&l(this,_);else{for(var k=0,w=[],C=$.length;k<C;k++)($[k].fn!==h||v&&!$[k].once||g&&$[k].context!==g)&&w.push($[k]);w.length?this._events[_]=w.length===1?w[0]:w:l(this,_)}return this},u.prototype.removeAllListeners=function(f){var h;return f?(h=n?n+f:f,this._events[h]&&l(this,h)):(this._events=new i,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,e.exports=u})(Sv);var Nl=Sv.exports,qd={},To={};Object.defineProperty(To,"__esModule",{value:!0});To.SearchResult=void 0;const UT=/\$&/g,zT=/\$(\d)/g;class HT{constructor(t,n,i){this.data=t,this.term=n,this.strategy=i}getReplacementData(t){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(t);if(o==null||o.index==null)return null;const a=n.replace(UT,o[0]).replace(zT,(l,u)=>o[parseInt(u)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(t,n){const i=this.getReplacementData(t);if(i!==null)return n=i.afterCursor+n,[[t.slice(0,i.start),i.beforeCursor,t.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}To.SearchResult=HT;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Strategy=e.DEFAULT_INDEX=void 0;const t=To;e.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const u=this.matchWithContext(o);if(!u)return!1;const d=u[(l=this.props.index)!==null&&l!==void 0?l:e.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(h=>new t.SearchResult(h,d,this)))},u),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,u=>{this.cache[o]=u,a(u)},l)}}e.Strategy=n})(qd);Object.defineProperty(So,"__esModule",{value:!0});So.Completer=void 0;const FT=Nl,qT=qd;class WT extends FT.EventEmitter{constructor(t){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=t.map(n=>new qT.Strategy(n))}destroy(){return this.strategies.forEach(t=>t.destroy()),this}run(t){for(const n of this.strategies)if(n.execute(t,this.handleQueryResult))return;this.handleQueryResult([])}}So.Completer=WT;var Wd={},xs={};Object.defineProperty(xs,"__esModule",{value:!0});xs.createCustomEvent=void 0;const ZT=typeof window<"u"&&!!window.CustomEvent,VT=(e,t)=>{if(ZT)return new CustomEvent(e,t);const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,t?.cancelable||!1,t?.detail||void 0),n};xs.createCustomEvent=VT;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Dropdown=e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=e.DEFAULT_DROPDOWN_CLASS_NAME=e.DEFAULT_DROPDOWN_PLACEMENT=e.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const t=Nl,n=xs;e.DEFAULT_DROPDOWN_MAX_COUNT=10,e.DEFAULT_DROPDOWN_PLACEMENT="auto",e.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends t.EventEmitter{constructor(l,u){super(),this.el=l,this.option=u,this.shown=!1,this.items=[],this.activeIndex=null}static create(l){const u=document.createElement("ul");u.className=l.className||e.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(u.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(u),new i(u,l)}render(l,u){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||e.DEFAULT_DROPDOWN_MAX_COUNT).map((f,h)=>{var g;return new o(this,h,f,((g=this.option)===null||g===void 0?void 0:g.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(u).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const u={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:u});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:u})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,u){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),u.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const u=document.documentElement;if(u){const d=this.el.offsetWidth;if(l.left){const g=this.option.dynamicWidth?u.scrollWidth:u.clientWidth;l.left+d>g&&(l.left=g-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const h=this.option.placement||e.DEFAULT_DROPDOWN_PLACEMENT;if(h==="auto"){const g=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+g>u.clientHeight}h==="top"||f?(this.el.style.bottom=`${u.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const u of this.items)l.appendChild(u.el);return this.el.appendChild(l),this}setStrategyId(l){const u=l.getStrategyId();return u&&(this.el.dataset.strategy=u),this}renderEdge(l,u){const d=this.option[u],f=document.createElement("li");return f.className=`textcomplete-${u}`,f.innerHTML=typeof d=="function"?d(l.map(h=>h.data)):d||"",this.el.appendChild(f),this}}e.Dropdown=i;class o{constructor(l,u,d,f){this.dropdown=l,this.index=u,this.searchResult=d,this.props=f,this.active=!1,this.onClick=v=>{v.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const h=document.createElement("li");h.className=this.active?this.activeClassName:this.className;const g=document.createElement("span");g.tabIndex=-1,g.innerHTML=this.searchResult.render(),h.appendChild(g),h.addEventListener("click",this.onClick),this.el=h}destroy(){var l;const u=this.el;return(l=u.parentNode)===null||l===void 0||l.removeChild(u),u.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(Wd);var Dl={};Object.defineProperty(Dl,"__esModule",{value:!0});Dl.Editor=void 0;const KT=Nl,Sa=xs;class GT extends KT.EventEmitter{destroy(){return this}applySearchResult(t){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(t){const n=(0,Sa.createCustomEvent)("move",{cancelable:!0,detail:{code:t}});return this.emit("move",n),n}emitEnterEvent(){const t=(0,Sa.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",t),t}emitChangeEvent(){const t=(0,Sa.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",t),t}emitEscEvent(){const t=(0,Sa.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",t),t}getCode(t){return t.keyCode===9||t.keyCode===13?"ENTER":t.keyCode===27?"ESC":t.keyCode===38?"UP":t.keyCode===40||t.keyCode===78&&t.ctrlKey?"DOWN":t.keyCode===80&&t.ctrlKey?"UP":"OTHER"}}Dl.Editor=GT;var Ul={};Object.defineProperty(Ul,"__esModule",{value:!0});Ul.Textcomplete=void 0;const QT=Nl,YT=Wd,XT=So,JT=["show","shown","render","rendered","selected","hidden","hide"];class eA extends QT.EventEmitter{constructor(t,n,i){super(),this.editor=t,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new XT.Completer(n),this.dropdown=YT.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(t=!0){return this.completer.destroy(),this.dropdown.destroy(),t&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(t){return this.isQueryInFlight?this.nextPendingQuery=t:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(t)),this}startListening(){var t;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of JT)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(t=this.dropdown.el.ownerDocument.defaultView)===null||t===void 0||t.addEventListener("resize",this.handleResize)}stopListening(){var t;(t=this.dropdown.el.ownerDocument.defaultView)===null||t===void 0||t.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}Ul.Textcomplete=eA;(function(e){var t=$t&&$t.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=$t&&$t.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&t(o,i,a)};Object.defineProperty(e,"__esModule",{value:!0}),n(So,e),n(Wd,e),n(Dl,e),n(To,e),n(qd,e),n(Ul,e),n(xs,e)})(Fd);var Tv={},zl={};function Av(e,t,n){const i=e.value,o=t+(n||""),a=document.activeElement;let l=0,u=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-u-1>=0&&o.length-u-1>=0&&i[i.length-u-1]===o[o.length-u-1];)u++;l=Math.min(l,Math.min(i.length,o.length)-u),e.setSelectionRange(l,i.length-u);const d=o.substring(l,o.length-u);if(e.focus(),!document.execCommand("insertText",!1,d)){e.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),e.dispatchEvent(f)}return e.setSelectionRange(t.length,t.length),a.focus(),e}function tA(e,t,n){const i=e.selectionEnd,o=e.value.substr(0,e.selectionStart)+t,a=e.value.substring(e.selectionStart,i)+(n||"")+e.value.substr(i);return Av(e,o,a),e.selectionEnd=i+t.length,e}const nA=Object.freeze(Object.defineProperty({__proto__:null,update:Av,wrapCursor:tA},Symbol.toStringTag,{value:"Module"})),rA=mo(nA);var Iv={exports:{}};(function(e){(function(){var t=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,u){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=u&&u.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var h=document.createElement("div");h.id="input-textarea-caret-position-mirror-div",document.body.appendChild(h);var g=h.style,v=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,_=a.nodeName==="INPUT";g.whiteSpace="pre-wrap",_||(g.wordWrap="break-word"),g.position="absolute",d||(g.visibility="hidden"),t.forEach(function(w){_&&w==="lineHeight"?g.lineHeight=v.height:g[w]=v[w]}),i?a.scrollHeight>parseInt(v.height)&&(g.overflowY="scroll"):g.overflow="hidden",h.textContent=a.value.substring(0,l),_&&(h.textContent=h.textContent.replace(/\s/g," "));var $=document.createElement("span");$.textContent=a.value.substring(l)||".",h.appendChild($);var k={top:$.offsetTop+parseInt(v.borderTopWidth),left:$.offsetLeft+parseInt(v.borderLeftWidth),height:parseInt(v.lineHeight)};return d?$.style.backgroundColor="#aaa":document.body.removeChild(h),k}e.exports=o})()})(Iv);var iA=Iv.exports,Rv={},Hl={};Object.defineProperty(Hl,"__esModule",{value:!0});Hl.calculateElementOffset=void 0;const sA=e=>{const t=e.getBoundingClientRect(),n=e.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:t.top+i.pageYOffset,left:t.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};Hl.calculateElementOffset=sA;var Fl={};Object.defineProperty(Fl,"__esModule",{value:!0});Fl.getLineHeightPx=void 0;const oA="0".charCodeAt(0),aA="9".charCodeAt(0),Gg=e=>oA<=e&&e<=aA,lA=e=>{const t=getComputedStyle(e),n=t.lineHeight;if(Gg(n.charCodeAt(0))){const i=parseFloat(n);return Gg(n.charCodeAt(n.length-1))?i*parseFloat(t.fontSize):i}return cA(e.nodeName,t)};Fl.getLineHeightPx=lA;const cA=(e,t)=>{const n=document.body;if(!n)return 0;const i=document.createElement(e);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:t.fontSize,fontFamily:t.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var ql={};Object.defineProperty(ql,"__esModule",{value:!0});ql.isSafari=void 0;const uA=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);ql.isSafari=uA;(function(e){var t=$t&&$t.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=$t&&$t.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&t(o,i,a)};Object.defineProperty(e,"__esModule",{value:!0}),n(Hl,e),n(Fl,e),n(ql,e)})(Rv);var dA=$t&&$t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zl,"__esModule",{value:!0});zl.TextareaEditor=void 0;const fA=rA,hA=dA(iA),Qg=Fd,Yg=Rv;class pA extends Qg.Editor{constructor(t){super(),this.el=t,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(t){const n=this.getBeforeCursor();if(n!=null){const i=t.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,fA.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,Qg.createCustomEvent)("input")))}}getCursorOffset(){const t=(0,Yg.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,Yg.getLineHeightPx)(this.el),a=t.top-n.top+i.top+o,l=t.left-n.left+i.left,u=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:u};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:u}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,hA.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}zl.TextareaEditor=pA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.TextareaEditor=void 0;var t=zl;Object.defineProperty(e,"TextareaEditor",{enumerable:!0,get:function(){return t.TextareaEditor}})})(Tv);const gA=B('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),mA=()=>{const{searchEmojis:e}=Le(),[t,n]=_e();return On(()=>{const i=t();if(i==null)return;const o=new Tv.TextareaEditor(i),a=new Fd.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,u)=>{u(e(l))},template:l=>(()=>{const d=gA(),f=d.firstChild,h=f.nextSibling;return A(h,()=>l.shortcode),Ae(g=>{const v=l.url,_=l.shortcode;return v!==g._v$&&Ge(f,"src",g._v$=v),_!==g._v$2&&Ge(f,"alt",g._v$2=_),g},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});qn(()=>{a.destroy()})}),{elementRef:n}},vA=e=>Math.floor(+e/1e3),gr=()=>vA(new Date),yA=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),bA=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],f=e?.map(g=>["p",g])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>h.push(["t",g])),l?.forEach(g=>h.push(["r",g])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...f,...h]},Wl=()=>{const e=Ll(),t=async(d,f)=>{const h={...f};if(h.id=El(h),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(h);return d.map(async v=>{const $=(await e().ensureRelay(v)).publish(g);return yA($,v)})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:h,content:g}=d,v=bA(d),_={kind:1,pubkey:h,created_at:gr(),tags:v,content:g};return t(f,_)},publishReaction:async({relayUrls:d,pubkey:f,eventId:h,content:g,notifyPubkey:v})=>{const _={kind:7,pubkey:f,created_at:gr(),tags:[["e",h,""],["p",v]],content:g};return t(d,_)},publishRepost:async({relayUrls:d,pubkey:f,eventId:h,notifyPubkey:g})=>{const v={kind:6,pubkey:f,created_at:gr(),tags:[["e",h,""],["p",g]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:f,profile:h,otherProperties:g})=>{const v={...h,...g},_={kind:ft.Metadata,pubkey:f,created_at:gr(),tags:[],content:JSON.stringify(v)};return t(d,_)},updateContacts:async({relayUrls:d,pubkey:f,followingPubkeys:h,content:g})=>{const v=h.map($=>["p",$]),_={kind:ft.Contacts,pubkey:f,created_at:gr(),tags:v,content:g};return t(d,_)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:h})=>{const g={kind:ft.EventDeletion,pubkey:f,created_at:gr(),tags:[["e",h,""]],content:""};return t(d,g)}}};let Eu=!1;const[Ta,_A]=_e(void 0),Jn=()=>(un(()=>{if(Ta()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),Ta()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Ta()==null&&!Eu&&(Eu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),_A(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{Eu=!1})),e+=1},200)}),Ta),wA=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},xA=e=>t=>Promise.allSettled(t.map(n=>e(n))),$A=B("<div>に返信"),kA=B('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),EA=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),CA=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),SA=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),TA=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},AA=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?t.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},IA=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},Ov=e=>{let t,n;const{elementRef:i}=mA(),[o,a]=_e(""),[l,u]=_e(!1),[d,f]=_e(""),h=ne=>a(he=>`${he} ${ne}`),g=()=>{a(""),f(""),u(!1)},v=()=>{t?.blur(),g(),e.onClose()},{config:_,getEmoji:$}=Le(),k=Jn(),w=Wl(),C=()=>e.replyTo&&Ol(e.replyTo),I=()=>e.mode??"normal",S=pi({mutationKey:["publishTextNote"],mutationFn:w.publishTextNote.bind(w),onSuccess:()=>{console.log("succeeded to post"),g(),e.onPost?.()},onError:ne=>{console.error("error",ne)}}),E=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},T=pi({mutationKey:["uploadFiles"],mutationFn:async ne=>{const he=await xA(wA)(ne),ge=[];if(he.forEach((Pe,Me)=>{Pe.status==="fulfilled"?(h(Pe.value.imageUrl),E()):ge.push(ne[Me])}),ge.length>0){const Pe=ge.map(Me=>Me.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${Pe}`)}}}),O=Ze(()=>{const ne=k();return C()?.taggedPubkeys()?.filter(he=>he!==ne)??[]}),j=Ze(()=>e.replyTo==null?[]:yr([e.replyTo.pubkey,...O()])),D=ne=>{const he=[];return ne.forEach(ge=>{const Pe=$(ge);Pe!=null&&he.push(["emoji",ge,Pe.url])}),he},te=()=>{if(o().length===0||S.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(o())){window.alert("投稿に秘密鍵(nsec)を含めることはできません。");return}const ne=k();if(ne==null){console.error("pubkey is not available");return}const he=Nm(o()),{hashtags:ge,urlReferences:Pe,pubkeyReferences:Me,eventReferences:ee,emojis:V}=AA(he),oe=IA(he),ve=D(V);let F={relayUrls:_().relayUrls,pubkey:ne,content:oe,notifyPubkeys:Me,mentionEventIds:ee,hashtags:ge,urls:Pe,tags:ve};C()!=null&&(F={...F,notifyPubkeys:yr([...j(),...Me]),rootEventId:C()?.rootEvent()?.id??C()?.replyingToEvent()?.id,replyEventId:C()?.id}),l()&&(F={...F,contentWarning:d()}),S.mutate(F),v()},W=ne=>{a(ne.currentTarget.value),E()},Y=ne=>{ne.preventDefault(),te()},Z=ne=>{ne.key==="Enter"&&(ne.ctrlKey||ne.metaKey)?te():ne.key==="Escape"&&(t?.blur(),v())},Q=ne=>{if(ne.preventDefault(),T.isLoading)return;const he=[...ne.currentTarget.files??[]];T.mutate(he),ne.currentTarget.value=""},se=ne=>{if(ne.preventDefault(),T.isLoading)return;const he=[...ne?.dataTransfer?.files??[]];T.mutate(he)},q=ne=>{if(T.isLoading)return;const he=[...ne?.clipboardData?.items??[]],ge=[];he.forEach(Pe=>{if(Pe.kind==="file"){ne.preventDefault();const Me=Pe.getAsFile();if(Me==null)return;ge.push(Me)}}),ge.length!==0&&T.mutate(ge)},J=ne=>{ne.preventDefault()},fe=()=>o().trim().length===0||S.isLoading||T.isLoading,pe=()=>T.isLoading;return un(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const ne=SA(),he=ne.firstChild,ge=he.firstChild,Pe=ge.nextSibling,Me=Pe.firstChild,ee=Me.nextSibling,V=ee.nextSibling,oe=Pe.nextSibling;A(ne,b(le,{get when(){return e.replyTo!=null},get children(){const F=$A(),re=F.firstChild;return A(F,b(St,{get each(){return j()},children:(He,at)=>[b(Ml,{pubkey:He}),b(le,{get when(){return at()!==j().length-1},children:" と "})]}),re),F}}),he),he.addEventListener("submit",Y),A(he,b(le,{get when(){return l()},get children(){const F=kA();return F.$$input=re=>f(re.currentTarget.value),Ae(()=>F.value=d()),F}}),ge),ge.addEventListener("paste",q),ge.addEventListener("drop",se),ge.addEventListener("dragover",J),ge.$$keydown=Z,ge.$$input=W,Wn(F=>{t=F,e.textAreaRef?.(F),i(F)},ge),A(Pe,b(le,{get when(){return I()==="reply"},get children(){const F=EA(),re=F.firstChild;return re.$$click=()=>v(),A(re,b(ds,{})),F}}),Me),A(Pe,b($v,{customEmojis:!0,onEmojiSelect:F=>h(F),get children(){const F=CA();return A(F,b(Cv,{})),F}}),Me),Me.$$click=()=>u(F=>!F),ee.$$click=()=>n?.click(),A(ee,b(jT,{})),A(V,b(DT,{})),oe.addEventListener("change",Q);const ve=n;return typeof ve=="function"?Wn(ve,oe):n=oe,Ae(F=>{const re=TA(I()),He=!l(),at=!!l(),st=I()==="normal",Be=I()==="normal",qe=I()==="reply",Tt=I()==="reply",wn=!!pe(),ht=!pe(),Er=I()==="normal",Ti=I()==="normal",Nn=I()==="reply",bt=I()==="reply",xn=pe(),Dn=!!fe(),Ai=!fe(),$e=I()==="normal",tr=I()==="normal",Yt=I()==="reply",Wt=I()==="reply",$n=fe();return re!==F._v$&&Ge(ge,"placeholder",F._v$=re),He!==F._v$2&&Me.classList.toggle("bg-rose-300",F._v$2=He),at!==F._v$3&&Me.classList.toggle("bg-rose-400",F._v$3=at),st!==F._v$4&&Me.classList.toggle("h-8",F._v$4=st),Be!==F._v$5&&Me.classList.toggle("w-8",F._v$5=Be),qe!==F._v$6&&Me.classList.toggle("h-7",F._v$6=qe),Tt!==F._v$7&&Me.classList.toggle("w-7",F._v$7=Tt),wn!==F._v$8&&ee.classList.toggle("bg-primary-disabled",F._v$8=wn),ht!==F._v$9&&ee.classList.toggle("bg-primary",F._v$9=ht),Er!==F._v$10&&ee.classList.toggle("h-8",F._v$10=Er),Ti!==F._v$11&&ee.classList.toggle("w-8",F._v$11=Ti),Nn!==F._v$12&&ee.classList.toggle("h-7",F._v$12=Nn),bt!==F._v$13&&ee.classList.toggle("w-7",F._v$13=bt),xn!==F._v$14&&(ee.disabled=F._v$14=xn),Dn!==F._v$15&&V.classList.toggle("bg-primary-disabled",F._v$15=Dn),Ai!==F._v$16&&V.classList.toggle("bg-primary",F._v$16=Ai),$e!==F._v$17&&V.classList.toggle("h-8",F._v$17=$e),tr!==F._v$18&&V.classList.toggle("w-8",F._v$18=tr),Yt!==F._v$19&&V.classList.toggle("h-7",F._v$19=Yt),Wt!==F._v$20&&V.classList.toggle("w-7",F._v$20=Wt),$n!==F._v$21&&(V.disabled=F._v$21=$n),F},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Ae(()=>ge.value=o()),ne})()};it(["input","keydown","click"]);const RA=2,OA=()=>{let e;const[t,n]=_e(!1),i=o=>{e=o};return un(()=>{e!=null&&n(e.scrollHeight>e.clientHeight+RA)}),{overflow:t,elementRef:i}},LA=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),PA=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),MA=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),BA=B('<img alt="icon" class="h-full w-full rounded object-cover">'),jA=e=>{const{overflow:t,elementRef:n}=OA(),i=Vm(),[o,a]=_e(),l=()=>i(e.createdAt),u=()=>e.createdAt.toLocaleString(),{profile:d}=ki(()=>({pubkey:e.authorPubkey}));return(()=>{const f=MA(),h=f.firstChild,g=h.firstChild,v=g.nextSibling,_=v.firstChild,$=_.firstChild,k=$.firstChild,w=k.firstChild,C=$.nextSibling,I=C.firstChild,S=_.nextSibling,E=S.nextSibling;return g.$$click=T=>{T.preventDefault(),e.onShowProfile?.()},A(g,b(le,{get when(){return d()?.picture},keyed:!0,children:T=>(()=>{const O=BA();return Ge(O,"src",T),O})()})),$.$$click=T=>{T.preventDefault(),e?.onShowProfile?.()},A(k,b(le,{get when(){return(d()?.display_name?.length??0)>0},get children(){const T=LA();return A(T,()=>d()?.display_name),T}}),w),A(w,b(le,{get when(){return d()?.name!=null},get fallback(){return`@${ko(e.authorPubkey)}`},get children(){return["@",Ze(()=>d()?.name)]}})),I.$$click=T=>{T.preventDefault(),e.onShowEvent?.()},A(I,l),Wn(n,S),A(S,()=>e.content),A(v,b(le,{get when(){return t()},get children(){const T=PA();return T.$$click=O=>{O.stopPropagation(),a(j=>!j)},A(T,b(le,{get when(){return!o()},fallback:"隠す",children:"続きを読む"})),T}}),E),A(E,()=>e.actions),A(f,b(le,{get when(){return e.footer},get children(){return e.footer}}),null),Ae(T=>{const O=u(),j=!o();return O!==T._v$&&Ge(I,"title",T._v$=O),j!==T._v$2&&S.classList.toggle("max-h-screen",T._v$2=j),T},{_v$:void 0,_v$2:void 0}),f})()};it(["click"]);const Lv=l5(),NA=()=>c5(Lv),DA=()=>{const[e,t]=ts({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},UA=/\p{Emoji_Presentation}/u,zA=e=>{const{shouldMuteEvent:t}=Le(),n=_i(),i=Ze(e),o=Ze(()=>["useReactions",i()]),a=wi(o,qm({taskProvider:([,g])=>{if(g==null)return null;const{eventId:v}=g;return new ws({type:"Reactions",mentionedEventId:v})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(v=>!t(v));return{reactions:l,reactionsGroupedByContent:()=>{const g=new Map;return l().forEach(v=>{const _=g.get(v.content)??[];_.push(v),g.set(v.content,_)}),g},isReactedBy:g=>l().findIndex(v=>v.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(v=>v.pubkey===g&&UA.test(v.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},HA=e=>{const{shouldMuteEvent:t}=Le(),n=_i(),i=Ze(e),o=Ze(()=>["useReposts",i()]),a=wi(o,qm({taskProvider:([,f])=>{if(f==null)return null;const{eventId:h}=f;return new ws({type:"Reposts",mentionedEventId:h})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(h=>!t(h));return{reposts:l,isRepostedBy:f=>l().findIndex(h=>h.pubkey===f)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},FA=B('<div class="flex gap-2 overflow-x-auto py-1">'),Pv=B('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),qA=B('<span class="ml-1 text-sm">'),WA=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),Mv=B('<span class="truncate text-base">'),ZA=B('<span class="text-red-500">'),VA=B('<div class="nostr-textnote">'),KA=B('<div class="text-xs">'),GA=B('<div class="content whitespace-pre-wrap break-all">'),QA=B('<div class="textnote-content">'),YA=B('<div class="mt-1 rounded border p-1">'),XA=B('<button class="pr-1 text-blue-500 hover:underline">'),Xg=B('<div class="text-sm text-zinc-400">'),JA=B('<span class="inline-block h-4 w-4">'),eI=B('<div class="flex shrink-0 items-center gap-1">'),tI=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),nI=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),rI=B('<div class="w-6">'),{noteEncode:iI}=xo,sI=e=>{const{config:t}=Le(),n=Jn();return(()=>{const i=FA();return A(i,b(St,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const l=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=WA();return u.$$click=()=>e.onReaction(o),A(u,b(le,{when:o==="+",get fallback(){return(()=>{const d=Mv();return A(d,o),d})()},get children(){const d=Pv();return A(d,b(tl,{})),d}}),null),A(u,b(le,{get when(){return!t().hideCount},get children(){const d=qA();return A(d,()=>a.length),d}}),null),Ae(d=>Zs(u,{"text-zinc-400":!l,"hover:bg-zinc-50":!l,"bg-rose-50":l,"border-rose-200":l,"text-rose-400":l},d)),u})()}})),i})()},Bv=e=>{const t=vt(),{config:n}=Le(),i=Jn(),{showProfile:o}=$r(),a=NA(),[l,u]=_e(!1),[d,f]=_e(!1),[h,g]=_e(!1),[v,_]=_e(null),$=()=>g(!1),k=()=>_(null),w=Ze(()=>Ol(e.event)),C=()=>e.embedding??!0,I=()=>e.actions??!0,{reactions:S,reactionsGroupedByContent:E,isReactedBy:T,isReactedByWithEmoji:O,invalidateReactions:j,query:D}=zA(()=>({eventId:e.event.id})),{reposts:te,isRepostedBy:W,invalidateReposts:Y,query:Z}=HA(()=>({eventId:e.event.id})),Q=Wl(),se=pi({mutationKey:["publishReaction",w().id],mutationFn:Q.publishReaction.bind(Q),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:V=>{console.error("failed to publish reaction: ",V)},onSettled:()=>{j().then(()=>D.refetch()).catch(V=>console.error("failed to refetch reactions",V))}}),q=pi({mutationKey:["publishRepost",w().id],mutationFn:Q.publishRepost.bind(Q),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:V=>{console.error("failed to publish repost: ",V)},onSettled:()=>{Y().then(()=>Z.refetch()).catch(V=>console.error("failed to refetch reposts",V))}}),J=pi({mutationKey:["deleteEvent",w().id],mutationFn:(...V)=>Q.deleteEvent(...V).then(oe=>Promise.allSettled(oe.map($i(1e4)))),onSuccess:V=>{const oe=V.filter(F=>F.status==="fulfilled").length,ve=V.length-oe;oe===V.length?window.alert(t()("post.deletedSuccessfully")):oe>0?window.alert(t()("post.failedToDeletePartially",{count:ve})):window.alert(t()("post.failedToDelete"))},onError:V=>{console.error("failed to delete",V)}}),fe=[{content:()=>t()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(iI(e.event.id)).catch(V=>window.alert(V))}},{content:()=>t()("post.showJSON"),onSelect:()=>{_("EventDebugModal")}},{content:()=>t()("post.showReposts"),onSelect:()=>{_("Reposts")}},{content:()=>t()("post.showReactions"),onSelect:()=>{_("Reactions")}},{when:()=>w().pubkey===i(),content:()=>(()=>{const V=ZA();return A(V,()=>t()("post.deletePost")),V})(),onSelect:()=>{const V=i();V!=null&&window.confirm(t()("post.confirmDelete"))&&J.mutate({relayUrls:n().relayUrls,pubkey:V,eventId:w().id})}}],pe=Ze(()=>{const V=i();return V!=null&&T(V)||l()}),ne=Ze(()=>{const V=i();return V!=null&&O(V)}),he=Ze(()=>{const V=i();return V!=null&&W(V)||d()}),ge=()=>{if(C()){const V=w().replyingToEvent();if(V!=null&&!w().containsEventMention(V.id))return V.id;const oe=w().rootEvent();if(V==null&&oe!=null&&!w().containsEventMention(oe.id))return oe.id}},Pe=V=>{V.stopPropagation(),!he()&&cn([i(),e.event.id])(([oe,ve])=>{q.mutate({relayUrls:n().relayUrls,pubkey:oe,eventId:ve,notifyPubkey:e.event.pubkey}),f(!0)})},Me=V=>{pe()||cn([i(),e.event.id])(([oe,ve])=>{se.mutate({relayUrls:n().relayUrls,pubkey:oe,content:V??"+",eventId:ve,notifyPubkey:e.event.pubkey}),u(!0)})},ee=V=>{V.stopPropagation(),Me()};return(()=>{const V=VA();return A(V,b(jA,{get authorPubkey(){return w().pubkey},get createdAt(){return w().createdAtAsDate()},get content(){return(()=>{const oe=QA();return A(oe,b(le,{get when(){return ge()},keyed:!0,children:ve=>(()=>{const F=YA();return A(F,b(ls,{eventId:ve,actions:!1,embedding:!1})),F})()}),null),A(oe,b(le,{get when(){return w().taggedPubkeys().length>0},get children(){const ve=KA();return A(ve,()=>t()("post.replyToPre"),null),A(ve,b(St,{get each(){return w().taggedPubkeys()},children:F=>(()=>{const re=XA();return re.$$click=He=>{He.stopPropagation(),o(F)},A(re,b(kv,{pubkey:F})),re})()}),null),A(ve,()=>t()("post.replyToPost"),null),ve}}),null),A(oe,b(YS,{get contentWarning(){return w().contentWarning()},get children(){const ve=GA();return A(ve,b(vT,{get event(){return e.event},get embedding(){return C()}})),ve}}),null),oe})()},get actions(){return b(le,{get when(){return I()},get children(){return[b(le,{get when(){return Ze(()=>!!n().showEmojiReaction)()&&S().length>0},get children(){return b(sI,{get reactionsGroupedByContent(){return E()},onReaction:Me})}}),(()=>{const oe=nI(),ve=oe.firstChild,F=ve.nextSibling,re=F.firstChild,He=F.nextSibling,at=He.firstChild,st=He.nextSibling;return ve.$$click=Be=>{Be.stopPropagation(),g(qe=>!qe)},A(ve,b(YC,{})),re.$$click=Pe,A(re,b(_m,{})),A(F,b(le,{get when(){return Ze(()=>!n().hideCount)()&&te().length>0},get children(){const Be=Xg();return A(Be,()=>te().length),Be}}),null),at.$$click=ee,A(at,b(le,{get when(){return Ze(()=>!!pe())()&&!ne()},get fallback(){return b(Nd,{})},get children(){return b(tl,{})}})),A(He,b(le,{get when(){return Ze(()=>!n().hideCount&&!n().showEmojiReaction)()&&S().length>0},get children(){const Be=Xg();return A(Be,()=>S().length),Be}}),null),A(oe,b(le,{get when(){return n().useEmojiReaction},get children(){const Be=eI();return A(Be,b($v,{onEmojiSelect:qe=>Me(qe),get children(){const qe=JA();return A(qe,b(Qm,{})),qe}})),Ae(qe=>Zs(Be,{"text-zinc-400":!pe()||!ne(),"hover:text-rose-400":!pe()||!ne(),"text-rose-400":pe()&&ne()||se.isLoading},qe)),Be}}),st),A(st,b(Ym,{menu:fe,get children(){const Be=tI();return A(Be,b(Gm,{})),Be}})),Ae(Be=>{const qe={"text-zinc-400":!he(),"hover:text-green-400":!he(),"text-green-400":he()||q.isLoading},Tt=q.isLoading,wn={"text-zinc-400":!pe()||ne(),"hover:text-rose-400":!pe()||ne(),"text-rose-400":pe()&&!ne()||se.isLoading},ht=se.isLoading;return Be._v$=Zs(F,qe,Be._v$),Tt!==Be._v$2&&(re.disabled=Be._v$2=Tt),Be._v$3=Zs(He,wn,Be._v$3),ht!==Be._v$4&&(at.disabled=Be._v$4=ht),Be},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),oe})()]}})},get footer(){return b(le,{get when(){return h()},get children(){return b(Ov,{mode:"reply",get replyTo(){return e.event},onClose:$,onPost:$})}})},onShowProfile:()=>{o(w().pubkey)},onShowEvent:()=>{a?.setTimeline({type:"Replies",event:e.event})}}),null),A(V,b(ln,{get children(){return[b(ze,{get when(){return v()==="EventDebugModal"},get children(){return b(TT,{get event(){return e.event},onClose:k})}}),b(ze,{get when(){return v()==="Reactions"},get children(){return b(Xu,{get data(){return S()},pubkeyExtractor:oe=>oe.pubkey,renderInfo:({content:oe})=>(()=>{const ve=rI();return A(ve,b(le,{when:oe==="+",get fallback(){return(()=>{const F=Mv();return A(F,oe),F})()},get children(){const F=Pv();return A(F,b(tl,{})),F}})),ve})(),onClose:k})}}),b(ze,{get when(){return v()==="Reposts"},get children(){return b(Xu,{get data(){return te()},pubkeyExtractor:oe=>oe.pubkey,onClose:k})}})]}}),null),V})()};it(["click"]);const jv=e=>{const{shouldMuteEvent:t}=Le();return b(le,{get when(){return!t(e.event)},get children(){return b(Bv,e)}})},oI=B("<span>予期しないイベント種別（<!>）"),aI=B("<span><span>未対応のイベント種別（<!>）"),Nv=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return b(ln,{get fallback(){return(()=>{const n=aI(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,A(i,()=>e.event.kind,a),A(n,b(to,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[b(ze,{get when(){return!t()},keyed:!0,get children(){const n=oI(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,A(n,()=>e.event.kind,o),A(n,b(to,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),b(ze,{get when(){return e.event.kind===ft.Text},get children(){return b(jv,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),b(ze,{get when(){return e.event.kind===6},get children(){return b(Km,{get event(){return e.event}})}})]}})},$s=e=>{const{shouldMuteEvent:t}=Le();return b(St,{get each(){return e.events},children:n=>b(le,{get when(){return!t(n)},get children(){return b(Vs,{get children(){return b(Nv,{event:n})}})}})})};var lI=pl;function cI(){this.__data__=new lI,this.size=0}var uI=cI;function dI(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var fI=dI;function hI(e){return this.__data__.get(e)}var pI=hI;function gI(e){return this.__data__.has(e)}var mI=gI,vI=pl,yI=dd,bI=fd,_I=200;function wI(e,t){var n=this.__data__;if(n instanceof vI){var i=n.__data__;if(!yI||i.length<_I-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new bI(i)}return n.set(e,t),this.size=n.size,this}var xI=wI,$I=pl,kI=uI,EI=fI,CI=pI,SI=mI,TI=xI;function ks(e){var t=this.__data__=new $I(e);this.size=t.size}ks.prototype.clear=kI;ks.prototype.delete=EI;ks.prototype.get=CI;ks.prototype.has=SI;ks.prototype.set=TI;var Zd=ks;function AI(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var II=AI,RI=r1,OI=II,LI=i1,PI=1,MI=2;function BI(e,t,n,i,o,a){var l=n&PI,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var f=a.get(e),h=a.get(t);if(f&&h)return f==t&&h==e;var g=-1,v=!0,_=n&MI?new RI:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var $=e[g],k=t[g];if(i)var w=l?i(k,$,g,t,e,a):i($,k,g,e,t,a);if(w!==void 0){if(w)continue;v=!1;break}if(_){if(!OI(t,function(C,I){if(!LI(_,I)&&($===C||o($,C,n,i,a)))return _.push(I)})){v=!1;break}}else if(!($===k||o($,k,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var Dv=BI,jI=Bn,NI=jI.Uint8Array,Uv=NI;function DI(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var UI=DI,Jg=hs,e0=Uv,zI=ud,HI=Dv,FI=UI,qI=hd,WI=1,ZI=2,VI="[object Boolean]",KI="[object Date]",GI="[object Error]",QI="[object Map]",YI="[object Number]",XI="[object RegExp]",JI="[object Set]",eR="[object String]",tR="[object Symbol]",nR="[object ArrayBuffer]",rR="[object DataView]",t0=Jg?Jg.prototype:void 0,Cu=t0?t0.valueOf:void 0;function iR(e,t,n,i,o,a,l){switch(n){case rR:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case nR:return!(e.byteLength!=t.byteLength||!a(new e0(e),new e0(t)));case VI:case KI:case YI:return zI(+e,+t);case GI:return e.name==t.name&&e.message==t.message;case XI:case eR:return e==t+"";case QI:var u=FI;case JI:var d=i&WI;if(u||(u=qI),e.size!=t.size&&!d)return!1;var f=l.get(e);if(f)return f==t;i|=ZI,l.set(e,t);var h=HI(u(e),u(t),i,o,a,l);return l.delete(e),h;case tR:if(Cu)return Cu.call(e)==Cu.call(t)}return!1}var sR=iR;function oR(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Vd=oR,aR=Array.isArray,er=aR,lR=Vd,cR=er;function uR(e,t,n){var i=t(e);return cR(e)?i:lR(i,n(e))}var zv=uR;function dR(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}var fR=dR;function hR(){return[]}var Hv=hR,pR=fR,gR=Hv,mR=Object.prototype,vR=mR.propertyIsEnumerable,n0=Object.getOwnPropertySymbols,yR=n0?function(e){return e==null?[]:(e=Object(e),pR(n0(e),function(t){return vR.call(e,t)}))}:gR,Kd=yR;function bR(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var _R=bR;function wR(e){return e!=null&&typeof e=="object"}var Xr=wR,xR=ps,$R=Xr,kR="[object Arguments]";function ER(e){return $R(e)&&xR(e)==kR}var CR=ER,r0=CR,SR=Xr,Fv=Object.prototype,TR=Fv.hasOwnProperty,AR=Fv.propertyIsEnumerable,IR=r0(function(){return arguments}())?r0:function(e){return SR(e)&&TR.call(e,"callee")&&!AR.call(e,"callee")},Gd=IR,ll={exports:{}};function RR(){return!1}var OR=RR;ll.exports;(function(e,t){var n=Bn,i=OR,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,f=d||i;e.exports=f})(ll,ll.exports);var Qd=ll.exports,LR=9007199254740991,PR=/^(?:0|[1-9]\d*)$/;function MR(e,t){var n=typeof e;return t=t??LR,!!t&&(n=="number"||n!="symbol"&&PR.test(e))&&e>-1&&e%1==0&&e<t}var Yd=MR,BR=9007199254740991;function jR(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=BR}var Xd=jR,NR=ps,DR=Xd,UR=Xr,zR="[object Arguments]",HR="[object Array]",FR="[object Boolean]",qR="[object Date]",WR="[object Error]",ZR="[object Function]",VR="[object Map]",KR="[object Number]",GR="[object Object]",QR="[object RegExp]",YR="[object Set]",XR="[object String]",JR="[object WeakMap]",eO="[object ArrayBuffer]",tO="[object DataView]",nO="[object Float32Array]",rO="[object Float64Array]",iO="[object Int8Array]",sO="[object Int16Array]",oO="[object Int32Array]",aO="[object Uint8Array]",lO="[object Uint8ClampedArray]",cO="[object Uint16Array]",uO="[object Uint32Array]",rt={};rt[nO]=rt[rO]=rt[iO]=rt[sO]=rt[oO]=rt[aO]=rt[lO]=rt[cO]=rt[uO]=!0;rt[zR]=rt[HR]=rt[eO]=rt[FR]=rt[tO]=rt[qR]=rt[WR]=rt[ZR]=rt[VR]=rt[KR]=rt[GR]=rt[QR]=rt[YR]=rt[XR]=rt[JR]=!1;function dO(e){return UR(e)&&DR(e.length)&&!!rt[NR(e)]}var fO=dO;function hO(e){return function(t){return e(t)}}var Jd=hO,cl={exports:{}};cl.exports;(function(e,t){var n=J0,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();e.exports=u})(cl,cl.exports);var ef=cl.exports,pO=fO,gO=Jd,i0=ef,s0=i0&&i0.isTypedArray,mO=s0?gO(s0):pO,qv=mO,vO=_R,yO=Gd,bO=er,_O=Qd,wO=Yd,xO=qv,$O=Object.prototype,kO=$O.hasOwnProperty;function EO(e,t){var n=bO(e),i=!n&&yO(e),o=!n&&!i&&_O(e),a=!n&&!i&&!o&&xO(e),l=n||i||o||a,u=l?vO(e.length,String):[],d=u.length;for(var f in e)(t||kO.call(e,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||wO(f,d)))&&u.push(f);return u}var Wv=EO,CO=Object.prototype;function SO(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||CO;return e===n}var tf=SO;function TO(e,t){return function(n){return e(t(n))}}var Zv=TO,AO=Zv,IO=AO(Object.keys,Object),RO=IO,OO=tf,LO=RO,PO=Object.prototype,MO=PO.hasOwnProperty;function BO(e){if(!OO(e))return LO(e);var t=[];for(var n in Object(e))MO.call(e,n)&&n!="constructor"&&t.push(n);return t}var jO=BO,NO=t1,DO=Xd;function UO(e){return e!=null&&DO(e.length)&&!NO(e)}var Vv=UO,zO=Wv,HO=jO,FO=Vv;function qO(e){return FO(e)?zO(e):HO(e)}var Zl=qO,WO=zv,ZO=Kd,VO=Zl;function KO(e){return WO(e,VO,ZO)}var Kv=KO,o0=Kv,GO=1,QO=Object.prototype,YO=QO.hasOwnProperty;function XO(e,t,n,i,o,a){var l=n&GO,u=o0(e),d=u.length,f=o0(t),h=f.length;if(d!=h&&!l)return!1;for(var g=d;g--;){var v=u[g];if(!(l?v in t:YO.call(t,v)))return!1}var _=a.get(e),$=a.get(t);if(_&&$)return _==t&&$==e;var k=!0;a.set(e,t),a.set(t,e);for(var w=l;++g<d;){v=u[g];var C=e[v],I=t[v];if(i)var S=l?i(I,C,v,t,e,a):i(C,I,v,e,t,a);if(!(S===void 0?C===I||o(C,I,n,i,a):S)){k=!1;break}w||(w=v=="constructor")}if(k&&!w){var E=e.constructor,T=t.constructor;E!=T&&"constructor"in e&&"constructor"in t&&!(typeof E=="function"&&E instanceof E&&typeof T=="function"&&T instanceof T)&&(k=!1)}return a.delete(e),a.delete(t),k}var JO=XO,eL=xi,tL=Bn,nL=eL(tL,"DataView"),rL=nL,iL=xi,sL=Bn,oL=iL(sL,"Promise"),aL=oL,lL=xi,cL=Bn,uL=lL(cL,"WeakMap"),dL=uL,Ju=rL,ed=dd,td=aL,nd=s1,rd=dL,Gv=ps,Es=n1,a0="[object Map]",fL="[object Object]",l0="[object Promise]",c0="[object Set]",u0="[object WeakMap]",d0="[object DataView]",hL=Es(Ju),pL=Es(ed),gL=Es(td),mL=Es(nd),vL=Es(rd),li=Gv;(Ju&&li(new Ju(new ArrayBuffer(1)))!=d0||ed&&li(new ed)!=a0||td&&li(td.resolve())!=l0||nd&&li(new nd)!=c0||rd&&li(new rd)!=u0)&&(li=function(e){var t=Gv(e),n=t==fL?e.constructor:void 0,i=n?Es(n):"";if(i)switch(i){case hL:return d0;case pL:return a0;case gL:return l0;case mL:return c0;case vL:return u0}return t});var Vl=li,Su=Zd,yL=Dv,bL=sR,_L=JO,f0=Vl,h0=er,p0=Qd,wL=qv,xL=1,g0="[object Arguments]",m0="[object Array]",Aa="[object Object]",$L=Object.prototype,v0=$L.hasOwnProperty;function kL(e,t,n,i,o,a){var l=h0(e),u=h0(t),d=l?m0:f0(e),f=u?m0:f0(t);d=d==g0?Aa:d,f=f==g0?Aa:f;var h=d==Aa,g=f==Aa,v=d==f;if(v&&p0(e)){if(!p0(t))return!1;l=!0,h=!1}if(v&&!h)return a||(a=new Su),l||wL(e)?yL(e,t,n,i,o,a):bL(e,t,d,n,i,o,a);if(!(n&xL)){var _=h&&v0.call(e,"__wrapped__"),$=g&&v0.call(t,"__wrapped__");if(_||$){var k=_?e.value():e,w=$?t.value():t;return a||(a=new Su),o(k,w,n,i,a)}}return v?(a||(a=new Su),_L(e,t,n,i,o,a)):!1}var EL=kL,CL=EL,y0=Xr;function Qv(e,t,n,i,o){return e===t?!0:e==null||t==null||!y0(e)&&!y0(t)?e!==e&&t!==t:CL(e,t,n,i,Qv,o)}var Yv=Qv,SL=Zd,TL=Yv,AL=1,IL=2;function RL(e,t,n,i){var o=n.length,a=o,l=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],f=e[d],h=u[1];if(l&&u[2]){if(f===void 0&&!(d in e))return!1}else{var g=new SL;if(i)var v=i(f,h,d,e,t,g);if(!(v===void 0?TL(h,f,AL|IL,i,g):v))return!1}}return!0}var OL=RL,LL=Qn;function PL(e){return e===e&&!LL(e)}var Xv=PL,ML=Xv,BL=Zl;function jL(e){for(var t=BL(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,ML(o)]}return t}var NL=jL;function DL(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var Jv=DL,UL=OL,zL=NL,HL=Jv;function FL(e){var t=zL(e);return t.length==1&&t[0][2]?HL(t[0][0],t[0][1]):function(n){return n===e||UL(n,e,t)}}var qL=FL,WL=ps,ZL=Xr,VL="[object Symbol]";function KL(e){return typeof e=="symbol"||ZL(e)&&WL(e)==VL}var Kl=KL,GL=er,QL=Kl,YL=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,XL=/^\w*$/;function JL(e,t){if(GL(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||QL(e)?!0:XL.test(e)||!YL.test(e)||t!=null&&e in Object(t)}var nf=JL,e2=fd,eP="Expected a function";function rf(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(eP);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(rf.Cache||e2),n}rf.Cache=e2;var tP=rf,nP=tP,rP=500;function iP(e){var t=nP(e,function(i){return n.size===rP&&n.clear(),i}),n=t.cache;return t}var sP=iP,oP=sP,aP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,lP=/\\(\\)?/g,cP=oP(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(aP,function(n,i,o,a){t.push(o?a.replace(lP,"$1"):i||n)}),t}),uP=cP;function dP(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var sf=dP,b0=hs,fP=sf,hP=er,pP=Kl,gP=1/0,_0=b0?b0.prototype:void 0,w0=_0?_0.toString:void 0;function t2(e){if(typeof e=="string")return e;if(hP(e))return fP(e,t2)+"";if(pP(e))return w0?w0.call(e):"";var t=e+"";return t=="0"&&1/e==-gP?"-0":t}var mP=t2,vP=mP;function yP(e){return e==null?"":vP(e)}var bP=yP,_P=er,wP=nf,xP=uP,$P=bP;function kP(e,t){return _P(e)?e:wP(e,t)?[e]:xP($P(e))}var Cs=kP,EP=Kl,CP=1/0;function SP(e){if(typeof e=="string"||EP(e))return e;var t=e+"";return t=="0"&&1/e==-CP?"-0":t}var Ss=SP,TP=Cs,AP=Ss;function IP(e,t){t=TP(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[AP(t[n++])];return n&&n==i?e:void 0}var Gl=IP,RP=Gl;function OP(e,t,n){var i=e==null?void 0:RP(e,t);return i===void 0?n:i}var LP=OP;function PP(e,t){return e!=null&&t in Object(e)}var MP=PP,BP=Cs,jP=Gd,NP=er,DP=Yd,UP=Xd,zP=Ss;function HP(e,t,n){t=BP(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var l=zP(t[i]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&UP(o)&&DP(l,o)&&(NP(e)||jP(e)))}var FP=HP,qP=MP,WP=FP;function ZP(e,t){return e!=null&&WP(e,t,qP)}var VP=ZP,KP=Yv,GP=LP,QP=VP,YP=nf,XP=Xv,JP=Jv,eM=Ss,tM=1,nM=2;function rM(e,t){return YP(e)&&XP(t)?JP(eM(e),t):function(n){var i=GP(n,e);return i===void 0&&i===t?QP(n,e):KP(t,i,tM|nM)}}var iM=rM;function sM(e){return e}var n2=sM;function oM(e){return function(t){return t?.[e]}}var aM=oM,lM=Gl;function cM(e){return function(t){return lM(t,e)}}var uM=cM,dM=aM,fM=uM,hM=nf,pM=Ss;function gM(e){return hM(e)?dM(pM(e)):fM(e)}var mM=gM,vM=qL,yM=iM,bM=n2,_M=er,wM=mM;function xM(e){return typeof e=="function"?e:e==null?bM:typeof e=="object"?_M(e)?yM(e[0],e[1]):vM(e):wM(e)}var of=xM,$M=of,kM=o1;function EM(e,t){return e&&e.length?kM(e,$M(t)):[]}var CM=EM;const r2=go(CM),x0=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Pa=0;const{setActiveSubscriptions:SM}=zm();setInterval(()=>{SM(Pa)},1e3);const kr=e=>{const{config:t,shouldMuteEvent:n}=Le(),i=Ll(),[o,a]=_e([]);On(dl(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),un(()=>{console.debug("subscription mounted",e()?.debugId,e()),qn(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const l=d=>{const f=e()?.limit??50;a(h=>{const g=cm.insertEventIntoDescendingList(h,d).slice(0,f),v=r2(g,_=>_.id);return v.length!==g.length&&console.warn("duplicated event",d),v})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:f,filters:h,options:g,onEvent:v,onEOSE:_,continuous:$=!0}=d,k=i().sub(f,h,g);let w=!0;Pa+=1;let C=!1,I=!1;const S=[];k.on("event",O=>{v?.(O),!(d.clientEventFilter!=null&&!d.clientEventFilter(O))&&(I?l(O):(C=!0,S.push(O)))}),k.on("eose",()=>{_?.(),I=!0,a(x0(S)),$||(k.unsub(),w&&(w=!1,Pa-=1))});let E=!1;const T=setInterval(()=>{if(!E){if(E=!0,I){clearInterval(T),E=!1;return}C&&(C=!1,a(x0(S))),E=!1}},100);qn(()=>{console.debug("startSubscription: end"),k.unsub(),w&&(w=!1,Pa-=1),clearInterval(T)})};return On(()=>{u()}),{events:o}},TM=e=>{const t=[e.id],n=e.rootEvent()?.id;n!=null&&t.push(n);const i=e.replyingToEvent()?.id;return i!=null&&t.push(i),yr(t)},AM=e=>{const{config:t}=Le(),n=()=>Ol(e.event),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:TM(n()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return b($s,{get events(){return[...i()].reverse()}})},IM=e=>b(ln,{get children(){return b(ze,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>b(AM,{get event(){return t.event}})})}}),RM=B('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),OM=B('<div class="shrink-0 border-b">'),LM=B('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),PM=B('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth pb-8">'),Ci=e=>{let t;const n=DA(),i=()=>e.width??"medium";return Yu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Yu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),b(Lv.Provider,{value:n,get children(){const o=RM(),a=t;return typeof a=="function"?Wn(a,o):t=o,A(o,b(le,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const l=OM();return A(l,()=>e.header),l})(),(()=>{const l=LM();return A(l,()=>e.children),l})()]},children:l=>(()=>{const u=PM(),d=u.firstChild,f=d.firstChild,h=f.firstChild,g=d.nextSibling;return f.$$click=()=>n?.clearTimeline(),A(h,b(cd,{})),A(g,b(IM,{timelineContent:l})),u})()})),Ae(l=>Zs(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},l)),o}})};it(["click"]);const MM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),BM=(e={})=>(()=>{const t=MM();return Qe(t,e,!0,!0),t})(),jM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),NM=(e={})=>(()=>{const t=jM();return Qe(t,e,!0,!0),t})(),DM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),UM=(e={})=>(()=>{const t=DM();return Qe(t,e,!0,!0),t})(),zM=B('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),HM=B('<div class="scrollbar flex h-9 gap-2 overflow-x-scroll"><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100">'),FM=B('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600"><span class="inline-block h-4 w-4">'),qM=e=>(()=>{const t=zM(),n=t.firstChild,i=n.nextSibling;return A(n,()=>e.title),A(i,()=>e.children),t})(),Si=e=>{const t=vt(),{saveColumn:n,removeColumn:i,moveColumn:o}=Le(),a=Co(),l=d=>{n({...e.column,width:d})},u=d=>{o(e.column.id,d),a({command:"moveToColumn",columnIndex:d}).catch(f=>console.error(f))};return(()=>{const d=FM(),f=d.firstChild,h=f.firstChild,g=h.firstChild,v=h.nextSibling,_=v.firstChild,$=v.nextSibling,k=$.nextSibling,w=k.firstChild;return A(d,b(qM,{get title(){return t()("column.config.columnWidth")},get children(){const C=HM(),I=C.firstChild,S=I.nextSibling,E=S.nextSibling,T=E.nextSibling;return I.$$click=()=>l("widest"),A(I,()=>t()("column.config.widest")),S.$$click=()=>l("wide"),A(S,()=>t()("column.config.wide")),E.$$click=()=>l("medium"),A(E,()=>t()("column.config.medium")),T.$$click=()=>l("narrow"),A(T,()=>t()("column.config.narrow")),C}}),f),h.$$click=()=>u(e.columnIndex-1),A(g,b(BM,{})),v.$$click=()=>u(e.columnIndex+1),A(_,b(NM,{})),k.$$click=()=>i(e.column.id),A(w,b(UM,{})),Ae(C=>{const I=t()("column.config.moveLeft"),S=t()("column.config.moveRight"),E=t()("column.config.removeColumn"),T=t()("column.config.removeColumn");return I!==C._v$&&Ge(h,"title",C._v$=I),S!==C._v$2&&Ge(v,"title",C._v$2=S),E!==C._v$3&&Ge(k,"title",C._v$3=E),T!==C._v$4&&Ge(w,"aria-label",C._v$4=T),C},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})()};it(["click"]);const WM=ut.array(ut.array(ut.string()));class ZM extends Tm{constructor(t){super(),this.tags=t}}const VM=e=>{try{const t=WM.parse(JSON.parse(e));return new ZM(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[$0,KM]=Q0(()=>_e({})),[GM,QM]=Q0(()=>_e({})),YM=e=>{const t=Jn(),[n,i]=_e(null);return On(()=>{const o=e();if(o==null)return;const{encrypted:a}=o;if(a in $0()){i($0()[a]);return}const l=t();l!=null&&(GM()[a]||(QM(u=>({...u,[a]:!0})),window.nostr?.nip04?.decrypt?.(l,a)?.then(u=>{KM(d=>({...d,[a]:u})),i(u)}).catch(u=>{console.error(`failed to decrypt "${a}"`,u)})))}),n},XM=e=>{const t=Ze(()=>vr(e.event)),n=YM(()=>{const{content:a}=t();return a==null||a.length===0?null:{id:t().id,encrypted:a}}),i=()=>{const a=n();if(a==null)return[];console.log(a);try{return VM(a).taggedEventIds()}catch(l){return console.warn(l),[]}},o=()=>t().taggedEventIds();return b(St,{get each(){return[...o(),...i()]},children:a=>b(Vs,{get children(){return b(ls,{eventId:a,get ensureKinds(){return[ft.Text]}})}})})},JM=e=>{const t=_i(),n=Ze(e),o=wi(()=>["useFollowings",n()],({queryKey:l,signal:u})=>{console.debug("useFollowings");const[,d]=l;if(d==null)return Promise.resolve(null);const{kind:f,author:h,identifier:g}=d,v=new ws({type:"ParameterizedReplaceableEvent",kind:f,author:h,identifier:g}),_=v.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${f}:${h}:${g}`)});return v.onUpdate($=>{const k=jd($);t.setQueryData(l,k)}),Pl({task:v,signal:u}),$i(15e3,`useParameterizedReplaceableEvent: ${f}:${h}:${g}`)(_)},{staleTime:5*60*1e3,cacheTime:4*60*60*1e3});return{event:()=>o.data??null,query:o}},eB=e=>{const t=vt(),{removeColumn:n}=Le(),{event:i}=JM(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return b(Ci,{get header(){return b(fs,{get name(){return e.column.name??t()("column.bookmark")},get icon(){return b(x5,{})},settings:()=>b(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b(le,{get when(){return i()},keyed:!0,children:o=>b(XM,{event:o})})}})},tB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),i2=(e={})=>(()=>{const t=tB();return Qe(t,e,!0,!0),t})(),_r=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>_r(n)(t));case"OR":return e.children.some(n=>_r(n)(t));case"NOT":return!_r(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},id=e=>{const t=_i(),n=Ze(e),i=()=>["useFollowings",n()],o=wi(i,Fm({taskProvider:([,d])=>{if(d==null)return null;const{pubkey:f}=d;return new ws({type:"Followings",pubkey:f})},queryClient:t}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!1,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>{if(o.data==null)return[];const d=[];return vr(o.data).pTags().forEach(h=>{const[,g,v,_]=h,$={pubkey:g,petname:_};v!=null&&v.length>0&&($.mainRelayUrl=v),d.push($)}),d};return{followings:a,followingPubkeys:()=>a().map(d=>d.pubkey),invalidateFollowings:()=>t.invalidateQueries(i()),query:o}},nB=e=>{const t=vt(),{config:n,removeColumn:i}=Le(),{followingPubkeys:o}=id(()=>({pubkey:e.column.pubkey})),{events:a}=kr(()=>{const l=wm.uniq([...o()]);return l.length===0?null:{debugId:"following",relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:l,limit:10,since:gr()-4*60*60}],clientEventFilter:u=>e.column.contentFilter==null?!0:_r(e.column.contentFilter)(u.content)}});return On(()=>{console.log("home",a())}),un(()=>console.log("home timeline mounted")),qn(()=>console.log("home timeline unmounted")),b(Ci,{get header(){return b(fs,{get name(){return e.column.name??t()("column.home")},get icon(){return b(i2,{})},settings:()=>b(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b($s,{get events(){return a()}})}})},rB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),s2=(e={})=>(()=>{const t=rB();return Qe(t,e,!0,!0),t})(),iB=B('<span class="h-4 w-4 pt-[1px] text-rose-400">'),sB=B('<img alt="icon" class="rounded">'),oB=B('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline">'),aB=B('<div class="notification-event py-1">'),lB=B('<span class="truncate">'),cB=B('<div class="truncate">読み込み中 '),uB=e=>{const t=vt(),{shouldMuteEvent:n}=Le(),{showProfile:i}=$r(),o=()=>vr(e.event),a=()=>o().lastTaggedEventId(),{profile:l}=ki(()=>({pubkey:e.event.pubkey})),{event:u,query:d}=Hm(()=>cn([a()])(([h])=>({eventId:h}))),f=()=>d.isSuccess&&u()==null;return b(le,{get when(){return!f()||n(e.event)},get children(){return[(()=>{const h=oB(),g=h.firstChild,v=g.nextSibling,_=v.firstChild,$=_.nextSibling,k=$.firstChild;return A(g,b(ln,{get fallback(){return(()=>{const w=lB();return A(w,()=>e.event.content),w})()},get children(){return b(ze,{get when(){return e.event.content==="+"},get children(){const w=iB();return A(w,b(tl,{})),w}})}})),A(_,b(le,{get when(){return l()?.picture!=null},get children(){const w=sB();return Ae(()=>Ge(w,"src",l()?.picture)),w}})),k.$$click=()=>i(e.event.pubkey),A(k,b(Ml,{get pubkey(){return e.event.pubkey}})),A($,()=>t()("notification.reacted"),null),h})(),(()=>{const h=aB();return A(h,b(le,{get when(){return u()},get fallback(){return(()=>{const g=cB();return g.firstChild,A(g,a,null),g})()},keyed:!0,children:g=>b(Bv,{event:g})})),h})()]}})};it(["click"]);const dB=B("<div>unknown event"),o2=e=>{const{shouldMuteEvent:t}=Le();return b(St,{get each(){return e.events},children:n=>b(le,{get when(){return!t(n)},get children(){return b(ln,{get fallback(){return dB()},get children(){return[b(ze,{get when(){return n.kind===ft.Text},get children(){return b(Vs,{get children(){return b(jv,{event:n})}})}}),b(ze,{get when(){return n.kind===ft.Reaction},get children(){return b(Vs,{get children(){return b(uB,{event:n})}})}}),b(ze,{get when(){return n.kind===6},get children(){return b(Vs,{get children(){return b(Km,{event:n})}})}})]}})}})})},fB=e=>{const t=vt(),{config:n,removeColumn:i}=Le(),{events:o}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:a=>e.column.contentFilter==null?!0:_r(e.column.contentFilter)(a.content)}));return b(Ci,{get header(){return b(fs,{get name(){return e.column.name??t()("column.notification")},get icon(){return b(s2,{})},settings:()=>b(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b(o2,{get events(){return o()}})}})},hB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),af=(e={})=>(()=>{const t=hB();return Qe(t,e,!0,!0),t})(),pB=e=>{const t=vt(),{config:n,removeColumn:i}=Le(),{events:o}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:a=>e.column.contentFilter==null?!0:_r(e.column.contentFilter)(a.content)}));return b(Ci,{get header(){return b(fs,{get name(){return e.column.name??t()("column.posts")},get icon(){return b(af,{})},settings:()=>b(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b($s,{get events(){return o()}})}})},gB=e=>{const t=vt(),{config:n,removeColumn:i}=Le(),{events:o}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:a=>e.column.contentFilter==null?!0:_r(e.column.contentFilter)(a.content)}));return b(Ci,{get header(){return b(fs,{get name(){return e.column.name??t()("column.reactions")},get icon(){return b(Nd,{})},settings:()=>b(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b(o2,{get events(){return o()}})}})},mB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),lf=(e={})=>(()=>{const t=mB();return Qe(t,e,!0,!0),t})(),vB=e=>{const t=vt(),{removeColumn:n}=Le(),{events:i}=kr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:gr()-4*60*60}],clientEventFilter:o=>e.column.contentFilter==null?!0:_r(e.column.contentFilter)(o.content)}));return b(Ci,{get header(){return b(fs,{get name(){return e.column.name??t()("column.relay")},get icon(){return b(lf,{})},settings:()=>b(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b($s,{get events(){return i()}})}})},yB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),a2=(e={})=>(()=>{const t=yB();return Qe(t,e,!0,!0),t})(),bB=B('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),_B=e=>{const[t,n]=_e(!1),[i,o]=_e(""),{saveColumn:a}=Le(),l=()=>n(g=>!g),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},f=g=>{o(g.currentTarget.value)},h=g=>{g.preventDefault(),u()};return un(()=>{o(e.column.query)}),(()=>{const g=bB(),v=g.firstChild,_=v.firstChild,$=_.firstChild,k=_.nextSibling,w=k.firstChild,C=k.nextSibling;return A($,b(a2,{})),k.addEventListener("submit",h),w.addEventListener("blur",d),w.addEventListener("change",f),C.$$click=()=>l(),A(C,b(X0,{})),A(g,b(le,{get when(){return t()},get children(){return e.settings()}}),null),Ae(()=>w.value=i()),g})()},wB=e=>{const{removeColumn:t}=Le(),{events:n}=kr(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:cE,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>o.tags.findIndex(([a])=>a==="mostr")>=0?!1:e.column.contentFilter==null?!0:_r(e.column.contentFilter)(o.content)}});return b(Ci,{get header(){return b(_B,{get column(){return e.column},settings:()=>b(Si,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b($s,{get events(){return n()}})}})};it(["click"]);const xB=B('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),$B=()=>{const{config:e}=Le();return(()=>{const t=xB();return A(t,b(St,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return b(ln,{get children(){return[b(ze,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:l=>b(nB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:l=>b(fB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:l=>b(pB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:l=>b(gB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:l=>b(vB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Bookmark"&&n},keyed:!0,children:l=>b(eB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:l=>b(wB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},kB=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),EB=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),CB=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),SB=async()=>{const t=await(await fetch(ad("packageInfo.json"))).text();return JSON.parse(t)},TB=e=>{const[t]=K0(SB);return b(Ei,{get onClose(){return e.onClose},get children(){const n=kB(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,f=d.nextSibling,h=f.nextSibling,g=h.nextSibling,v=g.firstChild,_=v.nextSibling;_.nextSibling;const $=g.nextSibling,k=$.nextSibling,w=k.nextSibling,C=w.nextSibling,I=C.nextSibling,S=I.nextSibling,E=S.nextSibling;return E.nextSibling,A(u,()=>t()?.self?.version,null),A(g,b(Eo,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),_),A(E,()=>t()?.self.licenseText),A(n,b(St,{get each(){return t()?.packages??[]},fallback:"取得中",children:T=>[(()=>{const O=EB(),j=O.firstChild,D=j.nextSibling,te=D.nextSibling,W=te.nextSibling;return W.nextSibling,A(O,()=>T.name,j),A(O,()=>T.version,D),A(O,()=>T.licenseSpdx,W),O})(),(()=>{const O=CB();return A(O,()=>T.licenseText),O})()]}),null),Ae(()=>Ge(o,"src",ad("images/rabbit_app_256.png"))),n}})},AB=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),IB=e=>{const t=vt(),n=Jn(),{saveColumn:i}=Le(),o=Co(),a=()=>{e.onClose(),o({command:"moveToLastColumn"}).catch(v=>console.error(v))},l=()=>{cn([n()])(([v])=>{i($m({pubkey:v}))}),a()},u=()=>{cn([n()])(([v])=>{i(km({pubkey:v}))}),a()},d=()=>{i(Em()),a()},f=()=>{i(Bd({query:""})),a()},h=()=>{cn([n()])(([v])=>{i(Cm({pubkey:v}))}),a()},g=()=>{cn([n()])(([v])=>{i(Sm({pubkey:v}))}),a()};return b(Ei,{get onClose(){return e.onClose},get children(){const v=AB(),_=v.firstChild,$=_.firstChild,k=_.nextSibling,w=k.firstChild,C=k.nextSibling,I=C.firstChild,S=C.nextSibling,E=S.firstChild,T=S.nextSibling,O=T.firstChild,j=T.nextSibling,D=j.firstChild;return _.$$click=()=>l(),A($,b(i2,{})),A(_,()=>t()("column.home"),null),k.$$click=()=>u(),A(w,b(s2,{})),A(k,()=>t()("column.notification"),null),C.$$click=()=>d(),A(I,b(lf,{})),A(C,()=>t()("column.japanese"),null),S.$$click=()=>f(),A(E,b(a2,{})),A(S,()=>t()("column.search"),null),T.$$click=()=>h(),A(O,b(af,{})),A(T,()=>t()("column.myPosts"),null),j.$$click=()=>g(),A(D,b(Nd,{})),A(j,()=>t()("column.myReactions"),null),v}})};it(["click"]);const RB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),OB=(e={})=>(()=>{const t=RB();return Qe(t,e,!0,!0),t})(),LB=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),PB=(e={})=>(()=>{const t=LB();return Qe(t,e,!0,!0),t})(),MB=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),BB=(e={})=>(()=>{const t=MB();return Qe(t,e,!0,!0),t})();function jB(e){const{config:t}=Le(),n=Ze(e),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[ft.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>yr(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const NB=e=>{const t=Ze(e),n=wi(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return vm.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},DB=e=>new Promise(t=>{setTimeout(t,e)}),UB=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),k0=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),zB=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),HB=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),FB=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),E0=B('<div class="shrink-0 text-xs">'),qB=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),WB=B('<div class="truncate text-xl font-bold">'),ZB=B('<div class="truncate text-xs">@'),VB=B('<span class="inline-block h-3 w-3">'),KB=B('<span class="inline-block h-4 w-4 text-blue-400">'),GB=B('<div class="flex items-center text-xs">'),QB=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),YB=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),XB=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),JB=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),ej=B('<ul class="border-t px-5 py-2 text-xs">'),tj=B('<ul class="border-t p-1">'),nj=B('<div class="h-12 shrink-0">'),rj=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),ij=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),sj=B('<span class="inline-block h-4 w-4 text-rose-500">'),oj=B('<span class="text-sm">読み込み中'),aj=B('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),lj=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),cj=e=>{const{count:t}=jB(()=>({pubkey:e.pubkey}));return Ze(t)},uj=e=>{const t=vt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a}=Le(),l=Wl(),u=Jn(),{showProfileEdit:d}=$r(),f=Ze(()=>ko(e.pubkey)),[h,g]=_e(!1),[v,_]=_e(!1),[$,k]=_e(!1),[w,C]=_e(null),I=()=>C(null),{profile:S,query:E}=ki(()=>({pubkey:e.pubkey})),{verification:T,query:O}=NB(()=>cn([S()?.nip05])(([ee])=>({nip05:ee}))),j=()=>{const ee=S()?.nip05;if(ee==null)return null;const[V,oe]=ee.split("@");return oe==null?null:V==="_"?{domain:oe,ident:oe}:{user:V,domain:oe,ident:ee}},D=()=>T()?.pubkey===e.pubkey,te=()=>a(e.pubkey),{followingPubkeys:W,invalidateFollowings:Y,query:Z}=id(()=>cn([u()])(([ee])=>({pubkey:ee}))),Q=()=>W().includes(e.pubkey),se=()=>Z.refetch(),{followingPubkeys:q,query:J}=id(()=>({pubkey:e.pubkey})),fe=()=>{const ee=u();return ee!=null&&q().includes(ee)},pe=pi({mutationKey:["updateContacts"],mutationFn:(...ee)=>l.updateContacts(...ee).then(V=>Promise.allSettled(V.map($i(5e3)))),onSuccess:ee=>{const V=ee.filter(ve=>ve.status==="fulfilled").length,oe=ee.length-V;V===ee.length?console.log("succeeded to update contacts"):V>0?console.log(`succeeded to update contacts for ${V} relays but failed for ${oe} relays`):console.error("failed to update contacts")},onError:ee=>{console.error("failed to update contacts: ",ee)},onSettled:()=>{Y().then(()=>Z.refetch()).catch(ee=>console.error("failed to refetch contacts",ee))}}),ne=async ee=>{try{const V=u();if(V==null)return;g(!0),await se(),await DB(3e3);const oe=W();console.debug("current pubkeys",oe),await pe.mutateAsync({relayUrls:n().relayUrls,pubkey:V,content:Z.data?.content??"",followingPubkeys:yr(ee(oe))})}finally{g(!1)}},he=()=>{ne(ee=>[...ee,e.pubkey]).catch(ee=>{console.log("failed to follow",ee)})},ge=()=>{window.confirm("本当にフォロー解除しますか？")&&ne(ee=>ee.filter(V=>V!==e.pubkey)).catch(ee=>{console.log("failed to unfollow",ee)})},Pe=[{content:()=>t()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(f()).catch(ee=>window.alert(ee))}},{content:()=>te()?t()("profile.unmute"):t()("profile.mute"),onSelect:()=>{te()?o(e.pubkey):i(e.pubkey)}},{when:()=>e.pubkey===u(),content:()=>Q()?t()("profile.unfollowMyself"):t()("profile.followMyself"),onSelect:()=>{Q()?ge():he()}}],{events:Me}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:gr()}],continuous:!1}));return b(Ei,{onClose:()=>e.onClose?.(),get children(){return[b(le,{get when(){return E.isFetched},get fallback(){return"loading"},get children(){return[b(le,{get when(){return S()?.banner},get fallback(){return nj()},keyed:!0,children:ee=>(()=>{const V=rj(),oe=V.firstChild;return Ge(oe,"src",ee),V})()}),(()=>{const ee=qB(),V=ee.firstChild,oe=V.firstChild,ve=V.nextSibling,F=ve.firstChild;return A(oe,b(le,{get when(){return S()?.picture},keyed:!0,children:re=>(()=>{const He=ij();return Ge(He,"src",re),He})()})),A(F,b(ln,{get children(){return[b(ze,{get when(){return e.pubkey===u()},get children(){const re=UB();return re.$$click=()=>d(),A(re,()=>t()("profile.editProfile")),re}}),b(ze,{get when(){return pe.isLoading||h()},get children(){const re=k0();return A(re,()=>t()("profile.updating")),re}}),b(ze,{get when(){return Z.isLoading||Z.isFetching},get children(){const re=k0();return A(re,()=>t()("profile.loading")),re}}),b(ze,{get when(){return Q()},get children(){const re=zB();return re.$$click=()=>ge(),re.addEventListener("mouseleave",()=>_(!1)),re.addEventListener("mouseenter",()=>_(!0)),A(re,b(le,{get when(){return!v()},get fallback(){return t()("profile.unfollow")},get children(){return t()("profile.followingCurrently")}})),Ae(()=>re.disabled=pe.isLoading),re}}),b(ze,{get when(){return!Q()},get children(){const re=HB();return re.$$click=()=>he(),A(re,()=>t()("profile.follow")),Ae(()=>re.disabled=pe.isLoading),re}})]}}),null),A(F,b(Ym,{menu:Pe,get children(){const re=FB();return A(re,b(Gm,{})),re}}),null),A(ve,b(ln,{get children(){return[b(ze,{get when(){return J.isLoading},get children(){const re=E0();return A(re,()=>t()("profile.loading")),re}}),b(ze,{get when(){return fe()},get children(){const re=E0();return A(re,()=>t()("profile.followsYou")),re}})]}}),null),ee})(),(()=>{const ee=QB(),V=ee.firstChild,oe=V.firstChild,ve=oe.nextSibling,F=ve.firstChild;return A(V,b(le,{get when(){return(S()?.display_name?.length??0)>0},get children(){const re=WB();return A(re,()=>S()?.display_name),re}}),oe),A(oe,b(le,{get when(){return(S()?.name?.length??0)>0},get children(){const re=ZB();return re.firstChild,A(re,()=>S()?.name,null),re}}),null),A(oe,b(le,{get when(){return(S()?.nip05?.length??0)>0},get children(){const re=GB();return A(re,()=>j()?.ident,null),A(re,b(ln,{get fallback(){return(()=>{const He=sj();return A(He,b(BB,{})),He})()},get children(){return[b(ze,{get when(){return O.isLoading},get children(){const He=VB();return A(He,b(OB,{})),He}}),b(ze,{get when(){return D()},get children(){const He=KB();return A(He,b(PB,{})),He}})]}}),null),re}}),null),A(F,f),ee})(),b(le,{get when(){return(S()?.about??"").length>0},get children(){const ee=YB();return A(ee,()=>S()?.about),ee}}),(()=>{const ee=JB(),V=ee.firstChild,oe=V.firstChild,ve=oe.nextSibling;return V.$$click=()=>C("Following"),A(ve,b(le,{get when(){return J.isFetched},get fallback(){return oj()},get children(){return q().length}})),A(ee,b(le,{get when(){return!n().hideCount},get children(){const F=XB(),re=F.firstChild,He=re.nextSibling;return A(He,b(le,{get when(){return $()},get fallback(){return(()=>{const at=aj();return at.$$click=()=>k(!0),at})()},keyed:!0,get children(){return b(cj,{get pubkey(){return e.pubkey}})}})),F}}),null),ee})(),b(le,{get when(){return(S()?.website??"").length>0},get children(){const ee=ej();return A(ee,b(le,{get when(){return S()?.website},keyed:!0,children:V=>(()=>{const oe=lj(),ve=oe.firstChild;return A(ve,b(lf,{})),A(oe,b(Eo,{class:"text-blue-500 underline",href:V}),null),oe})()})),ee}})]}}),b(ln,{get children(){return b(ze,{get when(){return w()==="Following"},get children(){return b(Xu,{get data(){return q()},pubkeyExtractor:ee=>ee,onClose:I})}})}}),(()=>{const ee=tj();return A(ee,b($s,{get events(){return Me()}})),ee})()]}})};it(["click"]);function dj(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var fj=dj,hj=xi,pj=function(){try{var e=hj(Object,"defineProperty");return e({},"",{}),e}catch{}}(),l2=pj,C0=l2;function gj(e,t,n){t=="__proto__"&&C0?C0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var c2=gj,mj=c2,vj=ud,yj=Object.prototype,bj=yj.hasOwnProperty;function _j(e,t,n){var i=e[t];(!(bj.call(e,t)&&vj(i,n))||n===void 0&&!(t in e))&&mj(e,t,n)}var cf=_j,wj=cf,xj=c2;function $j(e,t,n,i){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?xj(n,u,d):wj(n,u,d)}return n}var Ao=$j,kj=Ao,Ej=Zl;function Cj(e,t){return e&&kj(t,Ej(t),e)}var Sj=Cj;function Tj(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Aj=Tj,Ij=Qn,Rj=tf,Oj=Aj,Lj=Object.prototype,Pj=Lj.hasOwnProperty;function Mj(e){if(!Ij(e))return Oj(e);var t=Rj(e),n=[];for(var i in e)i=="constructor"&&(t||!Pj.call(e,i))||n.push(i);return n}var Bj=Mj,jj=Wv,Nj=Bj,Dj=Vv;function Uj(e){return Dj(e)?jj(e,!0):Nj(e)}var uf=Uj,zj=Ao,Hj=uf;function Fj(e,t){return e&&zj(t,Hj(t),e)}var qj=Fj,ul={exports:{}};ul.exports;(function(e,t){var n=Bn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(f,h){if(h)return f.slice();var g=f.length,v=u?u(g):new f.constructor(g);return f.copy(v),v}e.exports=d})(ul,ul.exports);var Wj=ul.exports;function Zj(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var Vj=Zj,Kj=Ao,Gj=Kd;function Qj(e,t){return Kj(e,Gj(e),t)}var Yj=Qj,Xj=Zv,Jj=Xj(Object.getPrototypeOf,Object),df=Jj,eN=Vd,tN=df,nN=Kd,rN=Hv,iN=Object.getOwnPropertySymbols,sN=iN?function(e){for(var t=[];e;)eN(t,nN(e)),e=tN(e);return t}:rN,u2=sN,oN=Ao,aN=u2;function lN(e,t){return oN(e,aN(e),t)}var cN=lN,uN=zv,dN=u2,fN=uf;function hN(e){return uN(e,fN,dN)}var ff=hN,pN=Object.prototype,gN=pN.hasOwnProperty;function mN(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&gN.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var vN=mN,S0=Uv;function yN(e){var t=new e.constructor(e.byteLength);return new S0(t).set(new S0(e)),t}var hf=yN,bN=hf;function _N(e,t){var n=t?bN(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var wN=_N,xN=/\w*$/;function $N(e){var t=new e.constructor(e.source,xN.exec(e));return t.lastIndex=e.lastIndex,t}var kN=$N,T0=hs,A0=T0?T0.prototype:void 0,I0=A0?A0.valueOf:void 0;function EN(e){return I0?Object(I0.call(e)):{}}var CN=EN,SN=hf;function TN(e,t){var n=t?SN(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var AN=TN,IN=hf,RN=wN,ON=kN,LN=CN,PN=AN,MN="[object Boolean]",BN="[object Date]",jN="[object Map]",NN="[object Number]",DN="[object RegExp]",UN="[object Set]",zN="[object String]",HN="[object Symbol]",FN="[object ArrayBuffer]",qN="[object DataView]",WN="[object Float32Array]",ZN="[object Float64Array]",VN="[object Int8Array]",KN="[object Int16Array]",GN="[object Int32Array]",QN="[object Uint8Array]",YN="[object Uint8ClampedArray]",XN="[object Uint16Array]",JN="[object Uint32Array]";function eD(e,t,n){var i=e.constructor;switch(t){case FN:return IN(e);case MN:case BN:return new i(+e);case qN:return RN(e,n);case WN:case ZN:case VN:case KN:case GN:case QN:case YN:case XN:case JN:return PN(e,n);case jN:return new i;case NN:case zN:return new i(e);case DN:return ON(e);case UN:return new i;case HN:return LN(e)}}var tD=eD,nD=Qn,R0=Object.create,rD=function(){function e(){}return function(t){if(!nD(t))return{};if(R0)return R0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),iD=rD,sD=iD,oD=df,aD=tf;function lD(e){return typeof e.constructor=="function"&&!aD(e)?sD(oD(e)):{}}var cD=lD,uD=Vl,dD=Xr,fD="[object Map]";function hD(e){return dD(e)&&uD(e)==fD}var pD=hD,gD=pD,mD=Jd,O0=ef,L0=O0&&O0.isMap,vD=L0?mD(L0):gD,yD=vD,bD=Vl,_D=Xr,wD="[object Set]";function xD(e){return _D(e)&&bD(e)==wD}var $D=xD,kD=$D,ED=Jd,P0=ef,M0=P0&&P0.isSet,CD=M0?ED(M0):kD,SD=CD,TD=Zd,AD=fj,ID=cf,RD=Sj,OD=qj,LD=Wj,PD=Vj,MD=Yj,BD=cN,jD=Kv,ND=ff,DD=Vl,UD=vN,zD=tD,HD=cD,FD=er,qD=Qd,WD=yD,ZD=Qn,VD=SD,KD=Zl,GD=uf,QD=1,YD=2,XD=4,d2="[object Arguments]",JD="[object Array]",eU="[object Boolean]",tU="[object Date]",nU="[object Error]",f2="[object Function]",rU="[object GeneratorFunction]",iU="[object Map]",sU="[object Number]",h2="[object Object]",oU="[object RegExp]",aU="[object Set]",lU="[object String]",cU="[object Symbol]",uU="[object WeakMap]",dU="[object ArrayBuffer]",fU="[object DataView]",hU="[object Float32Array]",pU="[object Float64Array]",gU="[object Int8Array]",mU="[object Int16Array]",vU="[object Int32Array]",yU="[object Uint8Array]",bU="[object Uint8ClampedArray]",_U="[object Uint16Array]",wU="[object Uint32Array]",tt={};tt[d2]=tt[JD]=tt[dU]=tt[fU]=tt[eU]=tt[tU]=tt[hU]=tt[pU]=tt[gU]=tt[mU]=tt[vU]=tt[iU]=tt[sU]=tt[h2]=tt[oU]=tt[aU]=tt[lU]=tt[cU]=tt[yU]=tt[bU]=tt[_U]=tt[wU]=!0;tt[nU]=tt[f2]=tt[uU]=!1;function Ma(e,t,n,i,o,a){var l,u=t&QD,d=t&YD,f=t&XD;if(n&&(l=o?n(e,i,o,a):n(e)),l!==void 0)return l;if(!ZD(e))return e;var h=FD(e);if(h){if(l=UD(e),!u)return PD(e,l)}else{var g=DD(e),v=g==f2||g==rU;if(qD(e))return LD(e,u);if(g==h2||g==d2||v&&!o){if(l=d||v?{}:HD(e),!u)return d?BD(e,OD(l,e)):MD(e,RD(l,e))}else{if(!tt[g])return o?e:{};l=zD(e,g,u)}}a||(a=new TD);var _=a.get(e);if(_)return _;a.set(e,l),VD(e)?e.forEach(function(w){l.add(Ma(w,t,n,w,e,a))}):WD(e)&&e.forEach(function(w,C){l.set(C,Ma(w,t,n,C,e,a))});var $=f?d?ND:jD:d?GD:KD,k=h?void 0:$(e);return AD(k||e,function(w,C){k&&(C=w,w=e[C]),ID(l,C,Ma(w,t,n,C,e,a))}),l}var xU=Ma;function $U(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var kU=$U;function EU(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var CU=EU,SU=Gl,TU=CU;function AU(e,t){return t.length<2?e:SU(e,TU(t,0,-1))}var IU=AU,RU=Cs,OU=kU,LU=IU,PU=Ss;function MU(e,t){return t=RU(t,e),e=LU(e,t),e==null||delete e[PU(OU(t))]}var BU=MU,jU=ps,NU=df,DU=Xr,UU="[object Object]",zU=Function.prototype,HU=Object.prototype,p2=zU.toString,FU=HU.hasOwnProperty,qU=p2.call(Object);function WU(e){if(!DU(e)||jU(e)!=UU)return!1;var t=NU(e);if(t===null)return!0;var n=FU.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&p2.call(n)==qU}var ZU=WU,VU=ZU;function KU(e){return VU(e)?void 0:e}var GU=KU,B0=hs,QU=Gd,YU=er,j0=B0?B0.isConcatSpreadable:void 0;function XU(e){return YU(e)||QU(e)||!!(j0&&e&&e[j0])}var JU=XU,ez=Vd,tz=JU;function g2(e,t,n,i,o){var a=-1,l=e.length;for(n||(n=tz),o||(o=[]);++a<l;){var u=e[a];t>0&&n(u)?t>1?g2(u,t-1,n,i,o):ez(o,u):i||(o[o.length]=u)}return o}var nz=g2,rz=nz;function iz(e){var t=e==null?0:e.length;return t?rz(e,1):[]}var sz=iz;function oz(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var az=oz,lz=az,N0=Math.max;function cz(e,t,n){return t=N0(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=N0(i.length-t,0),l=Array(a);++o<a;)l[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(l),lz(e,this,u)}}var uz=cz;function dz(e){return function(){return e}}var fz=dz,hz=fz,D0=l2,pz=n2,gz=D0?function(e,t){return D0(e,"toString",{configurable:!0,enumerable:!1,value:hz(t),writable:!0})}:pz,mz=gz,vz=800,yz=16,bz=Date.now;function _z(e){var t=0,n=0;return function(){var i=bz(),o=yz-(i-n);if(n=i,o>0){if(++t>=vz)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var wz=_z,xz=mz,$z=wz,kz=$z(xz),Ez=kz,Cz=sz,Sz=uz,Tz=Ez;function Az(e){return Tz(Sz(e,void 0,Cz),e+"")}var Iz=Az,Rz=sf,Oz=xU,Lz=BU,Pz=Cs,Mz=Ao,Bz=GU,jz=Iz,Nz=ff,Dz=1,Uz=2,zz=4,Hz=jz(function(e,t){var n={};if(e==null)return n;var i=!1;t=Rz(t,function(a){return a=Pz(a,e),i||(i=a.length>1),a}),Mz(e,Nz(e),n),i&&(n=Oz(n,Dz|Uz|zz,Bz));for(var o=t.length;o--;)Lz(n,t[o]);return n}),Fz=Hz;const qz=go(Fz);var Wz="Expected a function";function Zz(e){if(typeof e!="function")throw new TypeError(Wz);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var Vz=Zz,Kz=cf,Gz=Cs,Qz=Yd,U0=Qn,Yz=Ss;function Xz(e,t,n,i){if(!U0(e))return e;t=Gz(t,e);for(var o=-1,a=t.length,l=a-1,u=e;u!=null&&++o<a;){var d=Yz(t[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=l){var h=u[d];f=i?i(h,d,u):void 0,f===void 0&&(f=U0(h)?h:Qz(t[o+1])?[]:{})}Kz(u,d,f),u=u[d]}return e}var Jz=Xz,eH=Gl,tH=Jz,nH=Cs;function rH(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var l=t[i],u=eH(e,l);n(u,l)&&tH(a,nH(l,e),u)}return a}var iH=rH,sH=sf,oH=of,aH=iH,lH=ff;function cH(e,t){if(e==null)return{};var n=sH(lH(e),function(i){return[i]});return t=oH(t),aH(e,n,function(i,o){return t(i,o[0])})}var uH=cH,dH=of,fH=Vz,hH=uH;function pH(e,t){return hH(e,fH(dH(t)))}var gH=pH;const mH=go(gH),vH=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),yH=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),bH=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),_H=B('<div class="px-4 pt-4">読み込み中...'),wH=B('<div><span class="font-bold">その他の項目</span><div>'),xH=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),$H=B('<div class="h-24 shrink-0">'),kH=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),EH="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",CH="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",SH=new RegExp(`^${EH}$`),m2=new RegExp(`^${CH}$`),TH=e=>SH.test(e),AH=e=>m2.test(e),IH=e=>{const t=Jn(),{config:n}=Le(),[i,o]=_e(""),[a,l]=_e(""),[u,d]=_e(""),[f,h]=_e(""),[g,v]=_e(""),[_,$]=_e(""),[k,w]=_e(""),[C,I]=_e(""),{profile:S,invalidateProfile:E,query:T}=ki(()=>cn([t()])(([Q])=>({pubkey:Q}))),{updateProfile:O}=Wl(),j=pi({mutationKey:["updateProfile"],mutationFn:(...Q)=>O(...Q).then(se=>Promise.allSettled(se.map($i(1e4)))),onSuccess:Q=>{const se=Q.filter(J=>J.status==="fulfilled").length,q=Q.length-se;se===Q.length?window.alert("更新しました"):se>0?window.alert(`${q}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),E().then(()=>T.refetch()).catch(J=>console.error(J)),e.onClose()},onError:Q=>{console.error("failed to delete",Q)}}),D=()=>T.isLoading||j.isLoading,te=()=>D();setInterval(()=>console.log(T.isLoading,j.isLoading),1e3);const W=()=>qz(S(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),Y=Q=>{Q.preventDefault();const se=t();if(se==null)return;const q=mH({picture:i(),banner:a(),name:u(),display_name:f(),about:g(),website:_(),nip05:k(),lud06:TH(C())?C():null,lud16:AH(C())?C():null},J=>J==null||J.length===0);j.mutate({relayUrls:n().relayUrls,pubkey:se,profile:q,otherProperties:W()})},Z=Q=>Q.key==="Enter"&&Q.preventDefault();return un(()=>{const Q=S();Q!=null&&(T.refetch().catch(se=>console.error(se)),Ba(()=>{o(se=>Q.picture??se),l(se=>Q.banner??se),d(se=>Q.name??se),h(se=>Q.display_name??se),v(se=>Q.about??se),$(se=>Q.website??se),w(se=>Q.nip05??se),Q.lud16!=null?I(Q.lud16):Q.lud06!=null&&I(Q.lud06)}))}),b(Ei,{closeButton:()=>b(cd,{}),get onClose(){return e.onClose},get children(){return[(()=>{const Q=bH(),se=Q.firstChild;return A(Q,b(le,{get when(){return a().length>0},get fallback(){return $H()},keyed:!0,get children(){const q=vH(),J=q.firstChild;return Ae(()=>Ge(J,"src",a())),q}}),se),A(se,b(le,{get when(){return i().length>0},get children(){const q=yH();return Ae(()=>Ge(q,"src",i())),q}})),Q})(),b(le,{get when(){return D()},get children(){return _H()}}),(()=>{const Q=xH(),se=Q.firstChild,q=se.firstChild,J=q.firstChild,fe=J.nextSibling,pe=q.nextSibling,ne=pe.firstChild,he=ne.nextSibling,ge=pe.nextSibling,Pe=ge.firstChild,Me=Pe.nextSibling,ee=Me.firstChild,V=ee.nextSibling,oe=ge.nextSibling,ve=oe.firstChild,F=ve.nextSibling,re=oe.nextSibling,He=re.firstChild,at=He.nextSibling,st=re.nextSibling,Be=st.firstChild,qe=Be.nextSibling,Tt=st.nextSibling,wn=Tt.firstChild,ht=wn.nextSibling,Er=Tt.nextSibling,Ti=Er.firstChild,Nn=Ti.nextSibling,bt=Nn.nextSibling,xn=Er.nextSibling,Dn=xn.firstChild,Ai=Dn.nextSibling;return se.addEventListener("submit",Y),fe.$$keydown=Z,fe.addEventListener("blur",$e=>o($e.currentTarget.value)),he.$$keydown=Z,he.addEventListener("blur",$e=>l($e.currentTarget.value)),V.$$keydown=Z,V.addEventListener("change",$e=>d($e.currentTarget.value)),F.$$keydown=Z,F.addEventListener("change",$e=>h($e.currentTarget.value)),at.addEventListener("change",$e=>v($e.currentTarget.value)),qe.$$keydown=Z,qe.addEventListener("change",$e=>$($e.currentTarget.value)),ht.$$keydown=Z,ht.addEventListener("change",$e=>w($e.currentTarget.value)),bt.$$keydown=Z,bt.addEventListener("change",$e=>I($e.currentTarget.value)),A(se,b(le,{get when(){return Object.entries(W()).length>0},get children(){const $e=wH(),tr=$e.firstChild,Yt=tr.nextSibling;return A(Yt,b(St,{get each(){return Object.entries(W())},children:([Wt,$n])=>(()=>{const nr=kH(),rr=nr.firstChild,Cr=rr.nextSibling;return A(rr,Wt),A(Cr,$n),nr})()})),$e}}),xn),Ai.$$click=()=>e.onClose(),A(se,b(le,{get when(){return j.isLoading},children:"保存中..."}),null),Ae($e=>{const tr=te(),Yt=te(),Wt=te(),$n=te(),nr=te(),rr=te(),Cr=m2.source,Ii=te(),Ri=te(),Oi=j.isLoading;return tr!==$e._v$&&(fe.disabled=$e._v$=tr),Yt!==$e._v$2&&(he.disabled=$e._v$2=Yt),Wt!==$e._v$3&&(V.disabled=$e._v$3=Wt),$n!==$e._v$4&&(F.disabled=$e._v$4=$n),nr!==$e._v$5&&(at.disabled=$e._v$5=nr),rr!==$e._v$6&&(qe.disabled=$e._v$6=rr),Cr!==$e._v$7&&Ge(ht,"pattern",$e._v$7=Cr),Ii!==$e._v$8&&(ht.disabled=$e._v$8=Ii),Ri!==$e._v$9&&(bt.disabled=$e._v$9=Ri),Oi!==$e._v$10&&(Dn.disabled=$e._v$10=Oi),$e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Ae(()=>fe.value=i()),Ae(()=>he.value=a()),Ae(()=>V.value=u()),Ae(()=>F.value=f()),Ae(()=>at.value=g()),Ae(()=>qe.value=_()),Ae(()=>ht.value=k()),Ae(()=>bt.value=C()),Q})()]}})};it(["keydown","click"]);const RH=()=>{const e=Jn(),{modalState:t,showProfile:n,closeModal:i}=$r();return b(le,{get when(){return t()},keyed:!0,children:o=>b(ln,{get children(){return[b(ze,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>b(uj,{pubkey:a,onClose:i})}),b(ze,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return b(IH,{onClose:()=>cn([e()])(([a])=>{n(a)})})}}),b(ze,{get when(){return o.type==="AddColumn"},get children(){return b(IB,{onClose:i})}}),b(ze,{get when(){return o.type==="About"},get children(){return b(TB,{onClose:i})}})]}})})},OH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),LH=(e={})=>(()=>{const t=OH();return Qe(t,e,!0,!0),t})(),PH=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),z0=(e={})=>(()=>{const t=PH();return Qe(t,e,!0,!0),t})(),MH=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),BH=(e={})=>(()=>{const t=MH();return Qe(t,e,!0,!0),t})(),jH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),NH=(e={})=>(()=>{const t=jH();return Qe(t,e,!0,!0),t})(),DH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),UH=(e={})=>(()=>{const t=DH();return Qe(t,e,!0,!0),t})(),zH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),HH=(e={})=>(()=>{const t=zH();return Qe(t,e,!0,!0),t})(),H0=ut.string().length(64).regex(/^[0-9a-f]{64}$/),sd=ut.string().regex(/^\w+$/),FH=ut.object({shortcode:sd,url:ut.string().url(),keywords:ut.optional(ut.array(sd))}),qH=ut.object({manifest:ut.literal("emojipack_v1"),name:ut.string(),emojis:ut.array(FH),description:ut.optional(ut.string()),author:ut.optional(H0),publisher:ut.optional(H0)}).refine(e=>r2(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),v2=ut.record(sd,ut.string().url());qH.or(v2);const WH=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),ZH=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),VH=B('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),KH=B('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),od=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),GH=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),QH=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),YH=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),XH=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),JH=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),eF=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),tF=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),nF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),rF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),iF=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),sF=B('<div class="p-4">'),oF=B('<h2 class="flex-1 text-center text-lg font-bold">'),aF=B('<ul class="flex flex-col">'),lF=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),cF=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),y2=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,uF=y2("https?"),dF=y2("wss?"),fF=()=>{const e=vt(),t=Jn(),{showProfile:n,showProfileEdit:i}=$r();return(()=>{const o=ZH(),a=o.firstChild,l=a.nextSibling,u=l.firstChild,d=u.nextSibling;return A(a,()=>e()("config.profile.profile")),u.$$click=()=>cn([t()])(([f])=>{n(f)}),A(u,()=>e()("config.profile.openProfile")),d.$$click=()=>i(),A(d,()=>e()("config.profile.editProfile")),o})()},hF=()=>{const e=vt(),{config:t,addRelay:n,removeRelay:i}=Le(),[o,a]=_e(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},u=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([_])=>_).join(`
`);if(d.length===0){window.alert(e()("config.relays.notConfigured"));return}if(!window.confirm(`${e()("config.relays.askImport")}

${f}`))return;const h=t().relayUrls.length;Ba(()=>{d.forEach(([_])=>{n(_)})});const v=t().relayUrls.length-h;window.alert(e()("config.relays.imported",{count:v}))};return[(()=>{const d=VH(),f=d.firstChild,h=f.nextSibling,g=h.nextSibling,v=g.nextSibling,_=v.firstChild,$=_.nextSibling;return A(f,()=>e()("config.relays.relays")),A(h,()=>e()("config.relays.numOfRelays",{count:t().relayUrls.length})),A(g,b(St,{get each(){return t().relayUrls},children:k=>(()=>{const w=od(),C=w.firstChild,I=C.nextSibling;return A(C,k),I.$$click=()=>i(k),A(I,b(ds,{})),w})()})),v.addEventListener("submit",l),_.addEventListener("change",k=>a(k.currentTarget.value)),Ge(_,"pattern",dF),A($,()=>e()("config.relays.addRelay")),Ae(()=>_.value=o()),d})(),(()=>{const d=KH(),f=d.firstChild,h=f.nextSibling;return A(f,()=>e()("config.relays.importRelays")),h.$$click=()=>{u().catch(g=>{console.error("failed to import relays",g),window.alert(e()("config.relays.failedToImport"))})},A(h,()=>e()("config.relays.importFromExtension")),d})()]},pF=()=>{const e=vt(),{config:t,setConfig:n}=Le(),i=[{id:"relative",name:e()("config.display.relativeTimeNotation"),example:e()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:e()("config.display.absoluteTimeNotationShort"),example:e()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:e()("config.display.absoluteTimeNotationLong"),example:e()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=GH(),l=a.firstChild,u=l.nextSibling;return A(l,()=>e()("config.display.timeNotation")),A(u,b(St,{each:i,children:({id:d,name:f,example:h})=>(()=>{const g=QH(),v=g.firstChild,_=v.nextSibling;return v.$$click=()=>o(d),A(v,f),A(_,h),Ae($=>{const k=t().dateFormat===d,w=t().dateFormat===d,C=t().dateFormat!==d,I=t().dateFormat!==d;return k!==$._v$&&v.classList.toggle("bg-rose-300",$._v$=k),w!==$._v$2&&v.classList.toggle("text-white",$._v$2=w),C!==$._v$3&&v.classList.toggle("bg-white",$._v$3=C),I!==$._v$4&&v.classList.toggle("text-rose-300",$._v$4=I),$},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},Gs=e=>(()=>{const t=YH();return t.$$click=n=>e.onClick(n),Ae(n=>{const i=!e.value,o=!e.value,a=!!e.value,l=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&t.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&Ge(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),gF=()=>{const e=vt(),{config:t,setConfig:n}=Le(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=XH(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,f=d.firstChild,h=d.nextSibling,g=h.firstChild;return A(l,()=>e()("config.display.reaction")),A(f,()=>e()("config.display.enableEmojiReaction")),A(d,b(Gs,{get value(){return t().useEmojiReaction},onClick:()=>i()}),null),A(g,()=>e()("config.display.showEmojiReaction")),A(h,b(Gs,{get value(){return t().showEmojiReaction},onClick:()=>o()}),null),a})()},mF=()=>{const e=vt(),{config:t,saveEmoji:n,removeEmoji:i}=Le(),[o,a]=_e(""),[l,u]=_e(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),u(""))};return(()=>{const f=JH(),h=f.firstChild,g=h.nextSibling,v=g.nextSibling,_=v.firstChild,$=_.firstChild,k=$.nextSibling,w=_.nextSibling,C=w.firstChild,I=C.nextSibling,S=w.nextSibling;return A(h,()=>e()("config.customEmoji.customEmoji")),A(g,b(St,{get each(){return Object.values(t().customEmojis)},children:({shortcode:E,url:T})=>(()=>{const O=eF(),j=O.firstChild,D=j.nextSibling,te=D.nextSibling;return Ge(j,"src",T),Ge(j,"alt",E),A(D,E),te.$$click=()=>i(E),A(te,b(ds,{})),O})()})),v.addEventListener("submit",d),A($,()=>e()("config.customEmoji.shortcode")),k.addEventListener("change",E=>a(E.currentTarget.value)),A(C,()=>e()("config.customEmoji.url")),I.addEventListener("change",E=>u(E.currentTarget.value)),Ge(I,"pattern",uF),A(S,()=>e()("config.customEmoji.addEmoji")),Ae(()=>k.value=o()),Ae(()=>I.value=l()),f})()},vF=()=>{const e=vt(),{saveEmojis:t}=Le(),[n,i]=_e(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=v2.parse(JSON.parse(n())),u=WH(l);t(u),i("")}catch(l){const u=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${u}`)}};return(()=>{const a=tF(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,f=d.firstChild,h=f.nextSibling;return A(l,()=>e()("config.customEmoji.emojiImport")),A(u,()=>e()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",g=>i(g.currentTarget.value)),A(h,()=>e()("config.customEmoji.importEmoji")),Ae(()=>f.value=n()),a})()},yF=()=>{const e=vt(),{config:t,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=Le(),[a,l]=_e(""),u=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=nF(),f=d.firstChild,h=f.nextSibling;return A(f,()=>e()("config.mute.mutedUsers")),A(h,b(St,{get each(){return t().mutedPubkeys},children:g=>(()=>{const v=od(),_=v.firstChild,$=_.nextSibling;return A(_,b(Ml,{pubkey:g})),$.$$click=()=>n(g),A($,b(ds,{})),v})()})),d})(),(()=>{const d=rF(),f=d.firstChild,h=f.nextSibling,g=h.nextSibling,v=g.firstChild,_=v.nextSibling;return A(f,()=>e()("config.mute.mutedKeywords")),A(h,b(St,{get each(){return t().mutedKeywords},children:$=>(()=>{const k=od(),w=k.firstChild,C=w.nextSibling;return A(w,$),C.$$click=()=>o($),A(C,b(ds,{})),k})()})),g.addEventListener("submit",u),v.addEventListener("change",$=>l($.currentTarget.value)),A(_,()=>e()("config.mute.add")),Ae(()=>v.value=a()),d})()]},bF=()=>{const e=vt(),{config:t,setConfig:n}=Le(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=iF(),u=l.firstChild,d=u.nextSibling,f=d.firstChild,h=f.firstChild,g=f.nextSibling,v=g.firstChild,_=g.nextSibling,$=_.firstChild;return A(u,()=>e()("config.display.others")),A(h,()=>e()("config.display.keepOpenPostForm")),A(f,b(Gs,{get value(){return t().keepOpenPostForm},onClick:()=>i()}),null),A(v,()=>e()("config.display.showMediaByDefault")),A(g,b(Gs,{get value(){return t().showMedia},onClick:()=>o()}),null),A($,()=>e()("config.display.hideNumbers")),A(_,b(Gs,{get value(){return t().hideCount},onClick:()=>a()}),null),l})()},_F=e=>{const t=vt(),[n,i]=_e(null),o=[{name:()=>t()("config.profile.profile"),icon:()=>b(af,{}),render:()=>b(fF,{})},{name:()=>t()("config.relays.relays"),icon:()=>b(HH,{}),render:()=>b(hF,{})},{name:()=>t()("config.display.display"),icon:()=>b(UH,{}),render:()=>[b(pF,{}),b(gF,{}),b(bF,{})]},{name:()=>t()("config.customEmoji.customEmoji"),icon:()=>b(Cv,{}),render:()=>[b(mF,{}),b(vF,{})]},{name:()=>t()("config.mute.mute"),icon:()=>b(NH,{}),render:()=>b(yF,{})}],a=()=>{const l=n();return l==null?null:o[l]};return b(Ei,{get onClose(){return e.onClose},get children(){const l=sF();return A(l,b(le,{get when(){return a()},get fallback(){return[(()=>{const u=oF();return A(u,()=>t()("config.config")),u})(),(()=>{const u=aF();return A(u,b(St,{each:o,children:(d,f)=>(()=>{const h=lF(),g=h.firstChild,v=g.firstChild;return g.$$click=()=>i(f),A(v,()=>d.icon()),A(g,()=>d.name(),null),h})()})),u})()]},keyed:!0,children:u=>(()=>{const d=cF(),f=d.firstChild,h=f.nextSibling;return f.$$click=()=>i(null),A(f,b(cd,{})),A(h,()=>u.render()),d})()})),l}})};it(["click"]);const wF=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),xF=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),$F=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),kF=()=>{let e,t;const{saveColumn:n}=Le(),i=Co(),[o,a]=_e(""),l=u=>{u.preventDefault(),n(Bd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return b(Dd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=xF();return A(u,b(z0,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=wF(),d=u.firstChild,f=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const h=t;return typeof h=="function"?Wn(h,d):t=d,A(f,b(z0,{})),Ae(()=>d.value=o()),u}})},EF=()=>{let e;const{showAddColumn:t,showAbout:n}=$r(),{config:i}=Le(),[o,a]=_e(!1),[l,u]=_e(!1),d=()=>{e?.focus(),e?.click()},f=()=>a(!0),h=()=>a(!1),g=()=>a(v=>!v);return Yu(()=>({commandType:"openPostForm",handler:()=>{f(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=$F(),_=v.firstChild,$=_.firstChild,k=$.firstChild,w=$.nextSibling,C=w.nextSibling,I=C.firstChild,S=I.nextSibling,E=S.nextSibling,T=E.firstChild,O=_.nextSibling;return k.$$click=()=>g(),A(k,b(BH,{})),A($,b(kF,{}),null),I.$$click=()=>t(),A(I,b(Qm,{})),S.$$click=()=>u(j=>!j),A(S,b(LH,{})),E.$$click=()=>n(),A(O,b(Ov,{textAreaRef:j=>{e=j},onClose:h})),A(v,b(le,{get when(){return l()},get children(){return b(_F,{onClose:()=>u(!1)})}}),null),Ae(j=>{const D=ad("images/rabbit_app_256.png"),te=!!(o()||i().keepOpenPostForm),W=!(o()||i().keepOpenPostForm);return D!==j._v$&&Ge(T,"src",j._v$=D),te!==j._v$2&&O.classList.toggle("static",j._v$2=te),W!==j._v$3&&O.classList.toggle("hidden",j._v$3=W),j},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};it(["click"]);var CF=Bn,SF=function(){return CF.Date.now()},TF=SF,AF=/\s/;function IF(e){for(var t=e.length;t--&&AF.test(e.charAt(t)););return t}var RF=IF,OF=RF,LF=/^\s+/;function PF(e){return e&&e.slice(0,OF(e)+1).replace(LF,"")}var MF=PF,BF=MF,F0=Qn,jF=Kl,q0=0/0,NF=/^[-+]0x[0-9a-f]+$/i,DF=/^0b[01]+$/i,UF=/^0o[0-7]+$/i,zF=parseInt;function HF(e){if(typeof e=="number")return e;if(jF(e))return q0;if(F0(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=F0(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=BF(e);var n=DF.test(e);return n||UF.test(e)?zF(e.slice(2),n?2:8):NF.test(e)?q0:+e}var FF=HF,qF=Qn,Tu=TF,W0=FF,WF="Expected a function",ZF=Math.max,VF=Math.min;function KF(e,t,n){var i,o,a,l,u,d,f=0,h=!1,g=!1,v=!0;if(typeof e!="function")throw new TypeError(WF);t=W0(t)||0,qF(n)&&(h=!!n.leading,g="maxWait"in n,a=g?ZF(W0(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function _(O){var j=i,D=o;return i=o=void 0,f=O,l=e.apply(D,j),l}function $(O){return f=O,u=setTimeout(C,t),h?_(O):l}function k(O){var j=O-d,D=O-f,te=t-j;return g?VF(te,a-D):te}function w(O){var j=O-d,D=O-f;return d===void 0||j>=t||j<0||g&&D>=a}function C(){var O=Tu();if(w(O))return I(O);u=setTimeout(C,k(O))}function I(O){return u=void 0,v&&i?_(O):(i=o=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,i=d=o=u=void 0}function E(){return u===void 0?l:I(Tu())}function T(){var O=Tu(),j=w(O);if(i=arguments,o=this,d=O,j){if(u===void 0)return $(d);if(g)return clearTimeout(u),u=setTimeout(C,t),_(d)}return u===void 0&&(u=setTimeout(C,t)),l}return T.cancel=S,T.flush=E,T}var GF=KF,QF=GF,YF=Qn,XF="Expected a function";function JF(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(XF);return YF(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),QF(e,t,{leading:i,maxWait:t,trailing:o})}var eq=JF;const tq=go(eq),nq=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],rq=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},iq=({shortcuts:e=nq,onShortcut:t})=>{const n=rq(e);un(()=>{const i=tq(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),qn(()=>{window.removeEventListener("keydown",i)})})},sq=()=>{const e=Co();iq({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},oq=B('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),fq=()=>{sq();const e=u5(),{persistStatus:t}=p5(),n=Ll(),{config:i,initializeColumns:o}=Le(),a=Jn();return On(()=>{i().relayUrls.map(async l=>{try{(await n().ensureRelay(l)).on("notice",d=>{console.error(`NOTICE: ${l}: ${d}`)})}catch(u){console.error("ensureRelay failed",u)}})}),On(()=>{const l=a();l!=null&&o({pubkey:l})}),un(()=>{t().loggedIn||e("/hello")}),d5(l=>{console.error("uncaught error: ",l)}),(()=>{const l=oq();return A(l,b(EF,{}),null),A(l,b($B,{}),null),A(l,b(RH,{}),null),l})()};export{fq as default};
//# sourceMappingURL=Home-a8f57176.js.map
