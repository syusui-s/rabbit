import{S as Z0,s as Au,n as J4,i as Fp,a as qp,t as e5,f as t5,c as n5,r as Wp,b as r5,d as V0,g as i5,u as _i,e as K0,h as ja,o as qn,j as un,k as Qs,l as fl,p as Zp,m as Ge,q as B,v as it,w as be,x as A,y as b,z as oe,A as We,B as s5,M as ze,C as o5,D as ln,E as On,F as mt,G as a5,H as Ie,I as l5,J as Wn,K as St,L as G0,N as Ke,O as c5,P as u5,Q as Zs,R as Q0,T as d5,U as f5}from"./index-cfb6ce6b.js";import{c as ns,u as Ki,a as h5,b as p5,r as ad,d as g5}from"./resolveAsset-5747bafe.js";class m5 extends Z0{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Vp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Iu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Iu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),Au(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Kp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t);return this.createResult(n,t)}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),t[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(J4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Fp||this.currentResult.isStale||!qp(this.options.staleTime))return;const n=e5(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(Fp||this.options.enabled===!1||!qp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||t5.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=t!==i,f=d?t.state:this.currentQueryInitialState,h=d?this.currentResult:this.previousQueryResult,{state:g}=t;let{dataUpdatedAt:v,error:w,errorUpdatedAt:$,fetchStatus:k,status:_}=g,C=!1,I=!1,S;if(n._optimisticResults){const U=this.hasListeners(),te=!U&&Vp(t,n),W=U&&Kp(t,i,n,o);(te||W)&&(k=n5(t.options.networkMode)?"fetching":"paused",v||(_="loading")),n._optimisticResults==="isRestoring"&&(k="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&h!=null&&h.isSuccess&&_!=="error")S=h.data,v=h.dataUpdatedAt,_=h.status,C=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)S=this.selectResult;else try{this.selectFn=n.select,S=n.select(g.data),S=Wp(a?.data,S,n),this.selectResult=S,this.selectError=null}catch(U){this.selectError=U}else S=g.data;if(typeof n.placeholderData<"u"&&typeof S>"u"&&_==="loading"){let U;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)U=a.data;else if(U=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof U<"u")try{U=n.select(U),this.selectError=null}catch(te){this.selectError=te}typeof U<"u"&&(_="success",S=Wp(a?.data,U,n),I=!0)}this.selectError&&(w=this.selectError,S=this.selectResult,$=Date.now(),_="error");const E=k==="fetching",T=_==="loading",O=_==="error";return{status:_,fetchStatus:k,isLoading:T,isSuccess:_==="success",isError:O,isInitialLoading:T&&E,data:S,dataUpdatedAt:v,error:w,errorUpdatedAt:$,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:E,isRefetching:E&&!T,isLoadingError:O&&g.dataUpdatedAt===0,isPaused:k==="paused",isPlaceholderData:I,isPreviousData:C,isRefetchError:O&&g.dataUpdatedAt!==0,isStale:ld(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,Au(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options;if(l==="all"||!l&&!this.trackedProps.size)return!0;const u=new Set(l??this.trackedProps);return this.options.useErrorBoundary&&u.add("error"),Object.keys(this.currentResult).some(d=>{const f=d;return this.currentResult[f]!==n[f]&&u.has(f)})};t?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!r5(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){V0.batch(()=>{if(t.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(t.onError){var l,u,d,f;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function v5(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Vp(e,t){return v5(e,t)||e.state.dataUpdatedAt>0&&Iu(e,t,t.refetchOnMount)}function Iu(e,t,n){if(t.enabled!==!1){const i=typeof n=="function"?n(e):n;return i==="always"||i!==!1&&ld(e,t)}return!1}function Kp(e,t,n,i){return n.enabled!==!1&&(e!==t||i.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&ld(e,n)}function ld(e,t){return e.isStaleByTime(t.staleTime)}class y5 extends Z0{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const i=this.options;this.options=this.client.defaultMutationOptions(t),Au(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:i5(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){V0.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var l,u,d,f;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(f=this.mutateOptions).onSettled)==null||d.call(f,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:h})=>{h(this.currentResult)})})}}function b5(e){return typeof e=="function"}function Gp(e,t,n){if(!b5(e)){const{queryKey:i,...o}=e;return i?{...o,queryKey:i()}:e}return typeof t=="function"?{...n,queryKey:e(),queryFn:t}:{...t,queryKey:e()}}function Y0(e,t){return typeof e=="function"?e(...t):!!e}function _5(e,t){const n=_i({context:e.context}),i=Symbol("empty"),o=n.defaultQueryOptions(e);o._optimisticResults="optimistic";const a=new t(n,o),[l,u]=ns(a.getOptimisticResult(o)),[d,{refetch:f,mutate:h}]=K0(()=>new Promise($=>{l.isFetching&&l.isLoading||(Ki(l.data)===i&&$(void 0),$(Ki(l.data)))}));ja(()=>{h(()=>Ki(l.data)),f()});let g=[];const v=a.subscribe($=>{g.push(()=>{ja(()=>{const k={...Ki($)};k.data===void 0&&(k.data=i),u(Ki(k)),h(()=>Ki($.data)),f()})}),queueMicrotask(()=>{const k=g.pop();k&&k(),g=[]})});qn(()=>v()),un(()=>{a.setOptions(o,{listeners:!1})}),Qs(()=>{const $=n.defaultQueryOptions(e);a.setOptions($)}),Qs(fl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&Y0(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const w={get($,k){return k==="data"?d():Reflect.get($,k)}};return new Proxy(l,w)}function wi(e,t,n){const[i,o]=ns(Gp(e,t,n));return Qs(()=>{const a=Gp(e,t,n);o(a)}),_5(i,m5)}function pi(e,t,n){const[i,o]=ns(Zp(e,t,n)),a=_i({context:i.context}),l=new y5(a,i),u=(g,v)=>{l.mutate(g,v).catch(w5)},[d,f]=ns({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Qs(()=>{const g=Zp(e,t,n);o(g),l.setOptions(g)}),Qs(fl(()=>d.status,()=>{if(d.isError&&Y0(l.options.useErrorBoundary,[d.error]))throw d.error}));const h=l.subscribe(g=>{f({...g,mutate:u,mutateAsync:g.mutate})});return qn(h),d}function w5(){}const x5=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0z">'),$5=(e={})=>(()=>{const t=x5();return Ge(t,e,!0,!0),t})(),k5=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm0 6a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z">'),X0=(e={})=>(()=>{const t=k5();return Ge(t,e,!0,!0),t})(),E5=B('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex flex-1 items-center gap-1"><span class="column-name"></span></h2><button class="h-4 w-4">'),C5=B('<span class="inline-block h-4 w-4 text-gray-700">'),hs=e=>{const[t,n]=be(!1),i=()=>n(o=>!o);return(()=>{const o=E5(),a=o.firstChild,l=a.firstChild,u=l.firstChild,d=l.nextSibling;return A(l,b(oe,{get when(){return e.icon},keyed:!0,children:f=>(()=>{const h=C5();return A(h,f),h})()}),u),A(u,()=>e.name),d.$$click=()=>i(),A(d,b(X0,{})),A(o,b(oe,{get when(){return t()},get children(){return e.settings()}}),null),o})()};it(["click"]);const S5=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),cd=(e={})=>(()=>{const t=S5();return Ge(t,e,!0,!0),t})();var $t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function go(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function mo(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){if(this instanceof i){var o=[null];o.push.apply(o,arguments);var a=Function.bind.apply(t,o);return new a}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return e[i]}})}),n}var T5=typeof $t=="object"&&$t&&$t.Object===Object&&$t,J0=T5,A5=J0,I5=typeof self=="object"&&self&&self.Object===Object&&self,R5=A5||I5||Function("return this")(),Bn=R5,O5=Bn,L5=O5.Symbol,ps=L5,Qp=ps,e1=Object.prototype,P5=e1.hasOwnProperty,M5=e1.toString,Fs=Qp?Qp.toStringTag:void 0;function B5(e){var t=P5.call(e,Fs),n=e[Fs];try{e[Fs]=void 0;var i=!0}catch{}var o=M5.call(e);return i&&(t?e[Fs]=n:delete e[Fs]),o}var j5=B5,N5=Object.prototype,D5=N5.toString;function U5(e){return D5.call(e)}var z5=U5,Yp=ps,H5=j5,F5=z5,q5="[object Null]",W5="[object Undefined]",Xp=Yp?Yp.toStringTag:void 0;function Z5(e){return e==null?e===void 0?W5:q5:Xp&&Xp in Object(e)?H5(e):F5(e)}var gs=Z5;function V5(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Qn=V5,K5=gs,G5=Qn,Q5="[object AsyncFunction]",Y5="[object Function]",X5="[object GeneratorFunction]",J5="[object Proxy]";function e$(e){if(!G5(e))return!1;var t=K5(e);return t==Y5||t==X5||t==Q5||t==J5}var t1=e$,t$=Bn,n$=t$["__core-js_shared__"],r$=n$,uu=r$,Jp=function(){var e=/[^.]+$/.exec(uu&&uu.keys&&uu.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function i$(e){return!!Jp&&Jp in e}var s$=i$,o$=Function.prototype,a$=o$.toString;function l$(e){if(e!=null){try{return a$.call(e)}catch{}try{return e+""}catch{}}return""}var n1=l$,c$=t1,u$=s$,d$=Qn,f$=n1,h$=/[\\^$.*+?()[\]{}|]/g,p$=/^\[object .+?Constructor\]$/,g$=Function.prototype,m$=Object.prototype,v$=g$.toString,y$=m$.hasOwnProperty,b$=RegExp("^"+v$.call(y$).replace(h$,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function _$(e){if(!d$(e)||u$(e))return!1;var t=c$(e)?b$:p$;return t.test(f$(e))}var w$=_$;function x$(e,t){return e?.[t]}var $$=x$,k$=w$,E$=$$;function C$(e,t){var n=E$(e,t);return k$(n)?n:void 0}var xi=C$,S$=xi,T$=S$(Object,"create"),hl=T$,eg=hl;function A$(){this.__data__=eg?eg(null):{},this.size=0}var I$=A$;function R$(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var O$=R$,L$=hl,P$="__lodash_hash_undefined__",M$=Object.prototype,B$=M$.hasOwnProperty;function j$(e){var t=this.__data__;if(L$){var n=t[e];return n===P$?void 0:n}return B$.call(t,e)?t[e]:void 0}var N$=j$,D$=hl,U$=Object.prototype,z$=U$.hasOwnProperty;function H$(e){var t=this.__data__;return D$?t[e]!==void 0:z$.call(t,e)}var F$=H$,q$=hl,W$="__lodash_hash_undefined__";function Z$(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=q$&&t===void 0?W$:t,this}var V$=Z$,K$=I$,G$=O$,Q$=N$,Y$=F$,X$=V$;function ms(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ms.prototype.clear=K$;ms.prototype.delete=G$;ms.prototype.get=Q$;ms.prototype.has=Y$;ms.prototype.set=X$;var J$=ms;function e8(){this.__data__=[],this.size=0}var t8=e8;function n8(e,t){return e===t||e!==e&&t!==t}var ud=n8,r8=ud;function i8(e,t){for(var n=e.length;n--;)if(r8(e[n][0],t))return n;return-1}var pl=i8,s8=pl,o8=Array.prototype,a8=o8.splice;function l8(e){var t=this.__data__,n=s8(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():a8.call(t,n,1),--this.size,!0}var c8=l8,u8=pl;function d8(e){var t=this.__data__,n=u8(t,e);return n<0?void 0:t[n][1]}var f8=d8,h8=pl;function p8(e){return h8(this.__data__,e)>-1}var g8=p8,m8=pl;function v8(e,t){var n=this.__data__,i=m8(n,e);return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this}var y8=v8,b8=t8,_8=c8,w8=f8,x8=g8,$8=y8;function vs(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}vs.prototype.clear=b8;vs.prototype.delete=_8;vs.prototype.get=w8;vs.prototype.has=x8;vs.prototype.set=$8;var gl=vs,k8=xi,E8=Bn,C8=k8(E8,"Map"),dd=C8,tg=J$,S8=gl,T8=dd;function A8(){this.size=0,this.__data__={hash:new tg,map:new(T8||S8),string:new tg}}var I8=A8;function R8(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var O8=R8,L8=O8;function P8(e,t){var n=e.__data__;return L8(t)?n[typeof t=="string"?"string":"hash"]:n.map}var ml=P8,M8=ml;function B8(e){var t=M8(this,e).delete(e);return this.size-=t?1:0,t}var j8=B8,N8=ml;function D8(e){return N8(this,e).get(e)}var U8=D8,z8=ml;function H8(e){return z8(this,e).has(e)}var F8=H8,q8=ml;function W8(e,t){var n=q8(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this}var Z8=W8,V8=I8,K8=j8,G8=U8,Q8=F8,Y8=Z8;function ys(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}ys.prototype.clear=V8;ys.prototype.delete=K8;ys.prototype.get=G8;ys.prototype.has=Q8;ys.prototype.set=Y8;var fd=ys,X8="__lodash_hash_undefined__";function J8(e){return this.__data__.set(e,X8),this}var e6=J8;function t6(e){return this.__data__.has(e)}var n6=t6,r6=fd,i6=e6,s6=n6;function Na(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new r6;++t<n;)this.add(e[t])}Na.prototype.add=Na.prototype.push=i6;Na.prototype.has=s6;var r1=Na;function o6(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;return-1}var a6=o6;function l6(e){return e!==e}var c6=l6;function u6(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;return-1}var d6=u6,f6=a6,h6=c6,p6=d6;function g6(e,t,n){return t===t?p6(e,t,n):f6(e,h6,n)}var m6=g6,v6=m6;function y6(e,t){var n=e==null?0:e.length;return!!n&&v6(e,t,0)>-1}var b6=y6;function _6(e,t,n){for(var i=-1,o=e==null?0:e.length;++i<o;)if(n(t,e[i]))return!0;return!1}var w6=_6;function x6(e,t){return e.has(t)}var i1=x6,$6=xi,k6=Bn,E6=$6(k6,"Set"),s1=E6;function C6(){}var S6=C6;function T6(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var hd=T6,du=s1,A6=S6,I6=hd,R6=1/0,O6=du&&1/I6(new du([,-0]))[1]==R6?function(e){return new du(e)}:A6,L6=O6,P6=r1,M6=b6,B6=w6,j6=i1,N6=L6,D6=hd,U6=200;function z6(e,t,n){var i=-1,o=M6,a=e.length,l=!0,u=[],d=u;if(n)l=!1,o=B6;else if(a>=U6){var f=t?null:N6(e);if(f)return D6(f);l=!1,o=j6,d=new P6}else d=t?[]:u;e:for(;++i<a;){var h=e[i],g=t?t(h):h;if(h=n||h!==0?h:0,l&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;t&&d.push(g),u.push(h)}else o(d,g,n)||(d!==u&&d.push(g),u.push(h))}return u}var o1=z6,H6=o1;function F6(e){return e&&e.length?H6(e):[]}var q6=F6;const yr=go(q6),W6=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),Vs=e=>(()=>{const t=W6();return A(t,()=>e.children),t})();function Ru(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function Z6(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}function a1(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function V6(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ru(e.outputLen),Ru(e.blockLen)}function K6(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function G6(e,t){a1(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const di={number:Ru,bool:Z6,bytes:a1,hash:V6,exists:K6,output:G6},Ra=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0,Q6=Object.freeze(Object.defineProperty({__proto__:null,crypto:Ra},Symbol.toStringTag,{value:"Module"}));/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Y6=e=>new Uint8Array(e.buffer,e.byteOffset,e.byteLength),X6=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),gi=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Tn=(e,t)=>e<<32-t|e>>>t,l1=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!l1)throw new Error("Non little-endian hardware is not supported");const J6=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function sn(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=J6[e[n]];return t}function Zr(e){if(typeof e!="string")throw new TypeError("hexToBytes: expected string, got "+typeof e);if(e.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("Invalid byte sequence");t[n]=a}return t}const c1=async()=>{};async function e7(e,t,n){let i=Date.now();for(let o=0;o<e;o++){n(o);const a=Date.now()-i;a>=0&&a<t||(await c1(),i+=a)}}function pd(e){if(typeof e!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function vo(e){if(typeof e=="string"&&(e=pd(e)),!(e instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof e})`);return e}function fi(...e){if(!e.every(i=>i instanceof Uint8Array))throw new Error("Uint8Array list expected");if(e.length===1)return e[0];const t=e.reduce((i,o)=>i+o.length,0),n=new Uint8Array(t);for(let i=0,o=0;i<e.length;i++){const a=e[i];n.set(a,o),o+=a.length}return n}class gd{clone(){return this._cloneInto()}}const t7=e=>Object.prototype.toString.call(e)==="[object Object]"&&e.constructor===Object;function n7(e,t){if(t!==void 0&&(typeof t!="object"||!t7(t)))throw new TypeError("Options should be object or undefined");return Object.assign(e,t)}function vl(e){const t=i=>e().update(vo(i)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}function r7(e){const t=(i,o)=>e(o).update(vo(i)).digest(),n=e({});return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=i=>e(i),t}function yl(e=32){if(Ra&&typeof Ra.getRandomValues=="function")return Ra.getRandomValues(new Uint8Array(e));throw new Error("crypto.getRandomValues must be defined")}const i7=Object.freeze(Object.defineProperty({__proto__:null,Hash:gd,asyncLoop:e7,bytesToHex:sn,checkOpts:n7,concatBytes:fi,createView:gi,hexToBytes:Zr,isLE:l1,nextTick:c1,randomBytes:yl,rotr:Tn,toBytes:vo,u32:X6,u8:Y6,utf8ToBytes:pd,wrapConstructor:vl,wrapConstructorWithOpts:r7},Symbol.toStringTag,{value:"Module"}));function s7(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+f,u,i)}let u1=class extends gd{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=gi(this.buffer)}update(t){di.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=vo(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=gi(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){di.exists(this),di.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;s7(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=gi(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,h=this.get();if(f>h.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,h[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}};const o7=(e,t,n)=>e&t^~e&n,a7=(e,t,n)=>e&t^e&n^t&n,l7=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Br=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),jr=new Uint32Array(64);class d1 extends u1{constructor(){super(64,32,8,!1),this.A=Br[0]|0,this.B=Br[1]|0,this.C=Br[2]|0,this.D=Br[3]|0,this.E=Br[4]|0,this.F=Br[5]|0,this.G=Br[6]|0,this.H=Br[7]|0}get(){const{A:t,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[t,n,i,o,a,l,u,d]}set(t,n,i,o,a,l,u,d){this.A=t|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(t,n){for(let g=0;g<16;g++,n+=4)jr[g]=t.getUint32(n,!1);for(let g=16;g<64;g++){const v=jr[g-15],w=jr[g-2],$=Tn(v,7)^Tn(v,18)^v>>>3,k=Tn(w,17)^Tn(w,19)^w>>>10;jr[g]=k+jr[g-7]+$+jr[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:f,H:h}=this;for(let g=0;g<64;g++){const v=Tn(u,6)^Tn(u,11)^Tn(u,25),w=h+v+o7(u,d,f)+l7[g]+jr[g]|0,k=(Tn(i,2)^Tn(i,13)^Tn(i,22))+a7(i,o,a)|0;h=f,f=d,d=u,u=l+w|0,l=a,a=o,o=i,i=w+k|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,f=f+this.G|0,h=h+this.H|0,this.set(i,o,a,l,u,d,f,h)}roundClean(){jr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class c7 extends d1{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Zn=vl(()=>new d1),u7=vl(()=>new c7),d7=Object.freeze(Object.defineProperty({__proto__:null,sha224:u7,sha256:Zn},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const f1=BigInt(0),bl=BigInt(1),f7=BigInt(2),_l=e=>e instanceof Uint8Array,h7=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function rs(e){if(!_l(e))throw new Error("Uint8Array expected");let t="";for(let n=0;n<e.length;n++)t+=h7[e[n]];return t}function h1(e){const t=e.toString(16);return t.length&1?`0${t}`:t}function md(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return BigInt(e===""?"0":`0x${e}`)}function is(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);if(e.length%2)throw new Error("hex string is invalid: unpadded "+e.length);const t=new Uint8Array(e.length/2);for(let n=0;n<t.length;n++){const i=n*2,o=e.slice(i,i+2),a=Number.parseInt(o,16);if(Number.isNaN(a)||a<0)throw new Error("invalid byte sequence");t[n]=a}return t}function Ht(e){return md(rs(e))}function vd(e){if(!_l(e))throw new Error("Uint8Array expected");return md(rs(Uint8Array.from(e).reverse()))}const qr=(e,t)=>is(e.toString(16).padStart(t*2,"0")),p1=(e,t)=>qr(e,t).reverse(),p7=e=>is(h1(e));function Ot(e,t,n){let i;if(typeof t=="string")try{i=is(t)}catch(a){throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${a}`)}else if(_l(t))i=Uint8Array.from(t);else throw new Error(`${e} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${e} expected ${n} bytes, got ${o}`);return i}function on(...e){const t=new Uint8Array(e.reduce((i,o)=>i+o.length,0));let n=0;return e.forEach(i=>{if(!_l(i))throw new Error("Uint8Array expected");t.set(i,n),n+=i.length}),t}function g7(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function wl(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new TextEncoder().encode(e)}function m7(e){let t;for(t=0;e>f1;e>>=bl,t+=1);return t}const v7=(e,t)=>e>>BigInt(t)&bl,y7=(e,t,n)=>e|(n?bl:f1)<<BigInt(t),yd=e=>(f7<<BigInt(e-1))-bl,fu=e=>new Uint8Array(e),ng=e=>Uint8Array.from(e);function g1(e,t,n){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=fu(e),o=fu(e),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=fu())=>{o=u(ng([0]),g),i=u(),g.length!==0&&(o=u(ng([1]),g),i=u())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<t;){i=u();const w=i.slice();v.push(w),g+=i.length}return on(...v)};return(g,v)=>{l(),d(g);let w;for(;!(w=v(f()));)d();return l(),w}}const b7={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function bs(e,t,n={}){const i=(o,a,l)=>{const u=b7[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=e[o];if(!(l&&d===void 0)&&!u(d,e))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(t))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return e}const _7=Object.freeze(Object.defineProperty({__proto__:null,bitGet:v7,bitLen:m7,bitMask:yd,bitSet:y7,bytesToHex:rs,bytesToNumberBE:Ht,bytesToNumberLE:vd,concatBytes:on,createHmacDrbg:g1,ensureBytes:Ot,equalBytes:g7,hexToBytes:is,hexToNumber:md,numberToBytesBE:qr,numberToBytesLE:p1,numberToHexUnpadded:h1,numberToVarBytesBE:p7,utf8ToBytes:wl,validateObject:bs},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ct=BigInt(0),gt=BigInt(1),ci=BigInt(2),w7=BigInt(3),Ou=BigInt(4),rg=BigInt(5),ig=BigInt(8);BigInt(9);BigInt(16);function xt(e,t){const n=e%t;return n>=Ct?n:t+n}function x7(e,t,n){if(n<=Ct||t<Ct)throw new Error("Expected power/modulo > 0");if(n===gt)return Ct;let i=gt;for(;t>Ct;)t&gt&&(i=i*e%n),e=e*e%n,t>>=gt;return i}function bn(e,t,n){let i=e;for(;t-- >Ct;)i*=i,i%=n;return i}function Lu(e,t){if(e===Ct||t<=Ct)throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);let n=xt(e,t),i=t,o=Ct,a=gt;for(;n!==Ct;){const u=i/n,d=i%n,f=o-a*u;i=n,n=d,o=a,a=f}if(i!==gt)throw new Error("invert: does not exist");return xt(o,t)}function $7(e){const t=(e-gt)/ci;let n,i,o;for(n=e-gt,i=0;n%ci===Ct;n/=ci,i++);for(o=ci;o<e&&x7(o,t,e)!==e-gt;o++);if(i===1){const l=(e+gt)/Ou;return function(d,f){const h=d.pow(f,l);if(!d.eql(d.sqr(h),f))throw new Error("Cannot find square root");return h}}const a=(n+gt)/ci;return function(u,d){if(u.pow(d,t)===u.neg(u.ONE))throw new Error("Cannot find square root");let f=i,h=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let w=1;for(let k=u.sqr(v);w<f&&!u.eql(k,u.ONE);w++)k=u.sqr(k);const $=u.pow(h,gt<<BigInt(f-w-1));h=u.sqr($),g=u.mul(g,$),v=u.mul(v,h),f=w}return g}}function k7(e){if(e%Ou===w7){const t=(e+gt)/Ou;return function(i,o){const a=i.pow(o,t);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(e%ig===rg){const t=(e-rg)/ig;return function(i,o){const a=i.mul(o,ci),l=i.pow(a,t),u=i.mul(o,l),d=i.mul(i.mul(u,ci),l),f=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return $7(e)}const E7=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function m1(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=E7.reduce((i,o)=>(i[o]="function",i),t);return bs(e,n)}function C7(e,t,n){if(n<Ct)throw new Error("Expected power > 0");if(n===Ct)return e.ONE;if(n===gt)return t;let i=e.ONE,o=t;for(;n>Ct;)n&gt&&(i=e.mul(i,o)),o=e.sqr(o),n>>=gt;return i}function S7(e,t){const n=new Array(t.length),i=t.reduce((a,l,u)=>e.is0(l)?a:(n[u]=a,e.mul(a,l)),e.ONE),o=e.inv(i);return t.reduceRight((a,l,u)=>e.is0(l)?a:(n[u]=e.mul(a,n[u]),e.mul(a,l)),o),n}function bd(e,t){const n=t!==void 0?t:e.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function T7(e,t,n=!1,i={}){if(e<=Ct)throw new Error(`Expected Fp ORDER > 0, got ${e}`);const{nBitLength:o,nByteLength:a}=bd(e,t);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=k7(e),u=Object.freeze({ORDER:e,BITS:o,BYTES:a,MASK:yd(o),ZERO:Ct,ONE:gt,create:d=>xt(d,e),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return Ct<=d&&d<e},is0:d=>d===Ct,isOdd:d=>(d&gt)===gt,neg:d=>xt(-d,e),eql:(d,f)=>d===f,sqr:d=>xt(d*d,e),add:(d,f)=>xt(d+f,e),sub:(d,f)=>xt(d-f,e),mul:(d,f)=>xt(d*f,e),pow:(d,f)=>C7(u,d,f),div:(d,f)=>xt(d*Lu(f,e),e),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>Lu(d,e),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>S7(u,d),cmov:(d,f,h)=>h?f:d,toBytes:d=>n?p1(d,a):qr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?vd(d):Ht(d)}});return Object.freeze(u)}function A7(e,t,n=!1){e=Ot("privateHash",e);const i=e.length,o=bd(t).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?vd(e):Ht(e);return xt(a,t-gt)+gt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const I7=BigInt(0),hu=BigInt(1);function R7(e,t){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(t/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=e.ZERO,u=o;for(;a>I7;)a&hu&&(l=l.add(u)),u=u.double(),a>>=hu;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let f=o,h=f;for(let g=0;g<l;g++){h=f,d.push(h);for(let v=1;v<u;v++)h=h.add(f),d.push(h);f=h.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let f=e.ZERO,h=e.BASE;const g=BigInt(2**o-1),v=2**o,w=BigInt(o);for(let $=0;$<u;$++){const k=$*d;let _=Number(l&g);l>>=w,_>d&&(_-=v,l+=hu);const C=k,I=k+Math.abs(_)-1,S=$%2!==0,E=_<0;_===0?h=h.add(n(S,a[C])):f=f.add(n(E,a[I]))}return{p:f,f:h}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,u(f))),this.wNAF(d,f,l)}}}function v1(e){return m1(e.Fp),bs(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...bd(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function O7(e){const t=v1(e);bs(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=t;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:L7,hexToBytes:P7}=_7,hi={Err:class extends Error{constructor(t=""){super(t)}},_parseInt(e){const{Err:t}=hi;if(e.length<2||e[0]!==2)throw new t("Invalid signature integer tag");const n=e[1],i=e.subarray(2,n+2);if(!n||i.length!==n)throw new t("Invalid signature integer: wrong length");if(i[0]&128)throw new t("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new t("Invalid signature integer: unnecessary leading zero");return{d:L7(i),l:e.subarray(n+2)}},toSig(e){const{Err:t}=hi,n=typeof e=="string"?P7(e):e;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new t("Invalid signature tag");if(n[1]!==i-2)throw new t("Invalid signature: incorrect length");const{d:o,l:a}=hi._parseInt(n.subarray(2)),{d:l,l:u}=hi._parseInt(a);if(u.length)throw new t("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(e){const t=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const h=f.toString(16);return h.length&1?`0${h}`:h},i=t(n(e.s)),o=t(n(e.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},In=BigInt(0),yt=BigInt(1),hr=BigInt(2),Da=BigInt(3),sg=BigInt(4);function M7(e){const t=O7(e),{Fp:n}=t,i=t.toBytes||(($,k,_)=>{const C=k.toAffine();return on(Uint8Array.from([4]),n.toBytes(C.x),n.toBytes(C.y))}),o=t.fromBytes||($=>{const k=$.subarray(1),_=n.fromBytes(k.subarray(0,n.BYTES)),C=n.fromBytes(k.subarray(n.BYTES,2*n.BYTES));return{x:_,y:C}});function a($){const{a:k,b:_}=t,C=n.sqr($),I=n.mul(C,$);return n.add(n.add(I,n.mul($,k)),_)}if(!n.eql(n.sqr(t.Gy),a(t.Gx)))throw new Error("bad generator point: equation left != right");function l($){return typeof $=="bigint"&&In<$&&$<t.n}function u($){if(!l($))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d($){const{allowedPrivateKeyLengths:k,nByteLength:_,wrapPrivateKey:C,n:I}=t;if(k&&typeof $!="bigint"){if($ instanceof Uint8Array&&($=rs($)),typeof $!="string"||!k.includes($.length))throw new Error("Invalid key");$=$.padStart(_*2,"0")}let S;try{S=typeof $=="bigint"?$:Ht(Ot("private key",$,_))}catch{throw new Error(`private key must be ${_} bytes, hex or bigint, not ${typeof $}`)}return C&&(S=xt(S,I)),u(S),S}const f=new Map;function h($){if(!($ instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(k,_,C){if(this.px=k,this.py=_,this.pz=C,k==null||!n.isValid(k))throw new Error("x required");if(_==null||!n.isValid(_))throw new Error("y required");if(C==null||!n.isValid(C))throw new Error("z required")}static fromAffine(k){const{x:_,y:C}=k||{};if(!k||!n.isValid(_)||!n.isValid(C))throw new Error("invalid affine point");if(k instanceof g)throw new Error("projective point not allowed");const I=S=>n.eql(S,n.ZERO);return I(_)&&I(C)?g.ZERO:new g(_,C,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(k){const _=n.invertBatch(k.map(C=>C.pz));return k.map((C,I)=>C.toAffine(_[I])).map(g.fromAffine)}static fromHex(k){const _=g.fromAffine(o(Ot("pointHex",k)));return _.assertValidity(),_}static fromPrivateKey(k){return g.BASE.multiply(d(k))}_setWindowSize(k){this._WINDOW_SIZE=k,f.delete(this)}assertValidity(){if(this.is0()){if(t.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x:k,y:_}=this.toAffine();if(!n.isValid(k)||!n.isValid(_))throw new Error("bad point: x or y not FE");const C=n.sqr(_),I=a(k);if(!n.eql(C,I))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:k}=this.toAffine();if(n.isOdd)return!n.isOdd(k);throw new Error("Field doesn't support isOdd")}equals(k){h(k);const{px:_,py:C,pz:I}=this,{px:S,py:E,pz:T}=k,O=n.eql(n.mul(_,T),n.mul(S,I)),j=n.eql(n.mul(C,T),n.mul(E,I));return O&&j}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:k,b:_}=t,C=n.mul(_,Da),{px:I,py:S,pz:E}=this;let T=n.ZERO,O=n.ZERO,j=n.ZERO,U=n.mul(I,I),te=n.mul(S,S),W=n.mul(E,E),X=n.mul(I,S);return X=n.add(X,X),j=n.mul(I,E),j=n.add(j,j),T=n.mul(k,j),O=n.mul(C,W),O=n.add(T,O),T=n.sub(te,O),O=n.add(te,O),O=n.mul(T,O),T=n.mul(X,T),j=n.mul(C,j),W=n.mul(k,W),X=n.sub(U,W),X=n.mul(k,X),X=n.add(X,j),j=n.add(U,U),U=n.add(j,U),U=n.add(U,W),U=n.mul(U,X),O=n.add(O,U),W=n.mul(S,E),W=n.add(W,W),U=n.mul(W,X),T=n.sub(T,U),j=n.mul(W,te),j=n.add(j,j),j=n.add(j,j),new g(T,O,j)}add(k){h(k);const{px:_,py:C,pz:I}=this,{px:S,py:E,pz:T}=k;let O=n.ZERO,j=n.ZERO,U=n.ZERO;const te=t.a,W=n.mul(t.b,Da);let X=n.mul(_,S),V=n.mul(C,E),Q=n.mul(I,T),re=n.add(_,C),q=n.add(S,E);re=n.mul(re,q),q=n.add(X,V),re=n.sub(re,q),q=n.add(_,I);let ee=n.add(S,T);return q=n.mul(q,ee),ee=n.add(X,Q),q=n.sub(q,ee),ee=n.add(C,I),O=n.add(E,T),ee=n.mul(ee,O),O=n.add(V,Q),ee=n.sub(ee,O),U=n.mul(te,q),O=n.mul(W,Q),U=n.add(O,U),O=n.sub(V,U),U=n.add(V,U),j=n.mul(O,U),V=n.add(X,X),V=n.add(V,X),Q=n.mul(te,Q),q=n.mul(W,q),V=n.add(V,Q),Q=n.sub(X,Q),Q=n.mul(te,Q),q=n.add(q,Q),X=n.mul(V,q),j=n.add(j,X),X=n.mul(ee,q),O=n.mul(re,O),O=n.sub(O,X),X=n.mul(re,V),U=n.mul(ee,U),U=n.add(U,X),new g(O,j,U)}subtract(k){return this.add(k.negate())}is0(){return this.equals(g.ZERO)}wNAF(k){return w.wNAFCached(this,f,k,_=>{const C=n.invertBatch(_.map(I=>I.pz));return _.map((I,S)=>I.toAffine(C[S])).map(g.fromAffine)})}multiplyUnsafe(k){const _=g.ZERO;if(k===In)return _;if(u(k),k===yt)return this;const{endo:C}=t;if(!C)return w.unsafeLadder(this,k);let{k1neg:I,k1:S,k2neg:E,k2:T}=C.splitScalar(k),O=_,j=_,U=this;for(;S>In||T>In;)S&yt&&(O=O.add(U)),T&yt&&(j=j.add(U)),U=U.double(),S>>=yt,T>>=yt;return I&&(O=O.negate()),E&&(j=j.negate()),j=new g(n.mul(j.px,C.beta),j.py,j.pz),O.add(j)}multiply(k){u(k);let _=k,C,I;const{endo:S}=t;if(S){const{k1neg:E,k1:T,k2neg:O,k2:j}=S.splitScalar(_);let{p:U,f:te}=this.wNAF(T),{p:W,f:X}=this.wNAF(j);U=w.constTimeNegate(E,U),W=w.constTimeNegate(O,W),W=new g(n.mul(W.px,S.beta),W.py,W.pz),C=U.add(W),I=te.add(X)}else{const{p:E,f:T}=this.wNAF(_);C=E,I=T}return g.normalizeZ([C,I])[0]}multiplyAndAddUnsafe(k,_,C){const I=g.BASE,S=(T,O)=>O===In||O===yt||!T.equals(I)?T.multiplyUnsafe(O):T.multiply(O),E=S(this,_).add(S(k,C));return E.is0()?void 0:E}toAffine(k){const{px:_,py:C,pz:I}=this,S=this.is0();k==null&&(k=S?n.ONE:n.inv(I));const E=n.mul(_,k),T=n.mul(C,k),O=n.mul(I,k);if(S)return{x:n.ZERO,y:n.ZERO};if(!n.eql(O,n.ONE))throw new Error("invZ was invalid");return{x:E,y:T}}isTorsionFree(){const{h:k,isTorsionFree:_}=t;if(k===yt)return!0;if(_)return _(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:k,clearCofactor:_}=t;return k===yt?this:_?_(g,this):this.multiplyUnsafe(t.h)}toRawBytes(k=!0){return this.assertValidity(),i(g,this,k)}toHex(k=!0){return rs(this.toRawBytes(k))}}g.BASE=new g(t.Gx,t.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=t.nBitLength,w=R7(g,t.endo?Math.ceil(v/2):v);return{CURVE:t,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function B7(e){const t=v1(e);return bs(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function j7(e){const t=B7(e),{Fp:n,n:i}=t,o=n.BYTES+1,a=2*n.BYTES+1;function l(q){return In<q&&q<n.ORDER}function u(q){return xt(q,i)}function d(q){return Lu(q,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:h,weierstrassEquation:g,isWithinCurveOrder:v}=M7({...t,toBytes(q,ee,ue){const ge=ee.toAffine(),ne=n.toBytes(ge.x),he=on;return ue?he(Uint8Array.from([ee.hasEvenY()?2:3]),ne):he(Uint8Array.from([4]),ne,n.toBytes(ge.y))},fromBytes(q){const ee=q.length,ue=q[0],ge=q.subarray(1);if(ee===o&&(ue===2||ue===3)){const ne=Ht(ge);if(!l(ne))throw new Error("Point is not on curve");const he=g(ne);let pe=n.sqrt(he);const Me=(pe&yt)===yt;return(ue&1)===1!==Me&&(pe=n.neg(pe)),{x:ne,y:pe}}else if(ee===a&&ue===4){const ne=n.fromBytes(ge.subarray(0,n.BYTES)),he=n.fromBytes(ge.subarray(n.BYTES,2*n.BYTES));return{x:ne,y:he}}else throw new Error(`Point of length ${ee} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),w=q=>rs(qr(q,t.nByteLength));function $(q){const ee=i>>yt;return q>ee}function k(q){return $(q)?u(-q):q}const _=(q,ee,ue)=>Ht(q.slice(ee,ue));class C{constructor(ee,ue,ge){this.r=ee,this.s=ue,this.recovery=ge,this.assertValidity()}static fromCompact(ee){const ue=t.nByteLength;return ee=Ot("compactSignature",ee,ue*2),new C(_(ee,0,ue),_(ee,ue,2*ue))}static fromDER(ee){const{r:ue,s:ge}=hi.toSig(Ot("DER",ee));return new C(ue,ge)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(ee){return new C(this.r,this.s,ee)}recoverPublicKey(ee){const{r:ue,s:ge,recovery:ne}=this,he=j(Ot("msgHash",ee));if(ne==null||![0,1,2,3].includes(ne))throw new Error("recovery id invalid");const pe=ne===2||ne===3?ue+t.n:ue;if(pe>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const Me=ne&1?"03":"02",Y=f.fromHex(Me+w(pe)),fe=d(pe),G=u(-he*fe),ce=u(ge*fe),_e=f.BASE.multiplyAndAddUnsafe(Y,G,ce);if(!_e)throw new Error("point at infinify");return _e.assertValidity(),_e}hasHighS(){return $(this.s)}normalizeS(){return this.hasHighS()?new C(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return is(this.toDERHex())}toDERHex(){return hi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return is(this.toCompactHex())}toCompactHex(){return w(this.r)+w(this.s)}}const I={isValidPrivateKey(q){try{return h(q),!0}catch{return!1}},normPrivateKeyToScalar:h,randomPrivateKey:()=>{const q=t.randomBytes(n.BYTES+8),ee=A7(q,i);return qr(ee,t.nByteLength)},precompute(q=8,ee=f.BASE){return ee._setWindowSize(q),ee.multiply(BigInt(3)),ee}};function S(q,ee=!0){return f.fromPrivateKey(q).toRawBytes(ee)}function E(q){const ee=q instanceof Uint8Array,ue=typeof q=="string",ge=(ee||ue)&&q.length;return ee?ge===o||ge===a:ue?ge===2*o||ge===2*a:q instanceof f}function T(q,ee,ue=!0){if(E(q))throw new Error("first arg must be private key");if(!E(ee))throw new Error("second arg must be public key");return f.fromHex(ee).multiply(h(q)).toRawBytes(ue)}const O=t.bits2int||function(q){const ee=Ht(q),ue=q.length*8-t.nBitLength;return ue>0?ee>>BigInt(ue):ee},j=t.bits2int_modN||function(q){return u(O(q))},U=yd(t.nBitLength);function te(q){if(typeof q!="bigint")throw new Error("bigint expected");if(!(In<=q&&q<U))throw new Error(`bigint expected < 2^${t.nBitLength}`);return qr(q,t.nByteLength)}function W(q,ee,ue=X){if(["recovered","canonical"].some(ke=>ke in ue))throw new Error("sign() legacy options not supported");const{hash:ge,randomBytes:ne}=t;let{lowS:he,prehash:pe,extraEntropy:Me}=ue;he==null&&(he=!0),q=Ot("msgHash",q),pe&&(q=Ot("prehashed msgHash",ge(q)));const Y=j(q),fe=h(ee),G=[te(fe),te(Y)];if(Me!=null){const ke=Me===!0?ne(n.BYTES):Me;G.push(Ot("extraEntropy",ke,n.BYTES))}const ce=on(...G),_e=Y;function N(ke){const tt=O(ke);if(!v(tt))return;const vt=d(tt),st=f.BASE.multiply(tt).toAffine(),Be=u(st.x);if(Be===In)return;const Fe=u(vt*u(_e+Be*fe));if(Fe===In)return;let Tt=(st.x===Be?0:2)|Number(st.y&yt),wn=Fe;return he&&$(Fe)&&(wn=k(Fe),Tt^=1),new C(Be,wn,Tt)}return{seed:ce,k2sig:N}}const X={lowS:t.lowS,prehash:!1},V={lowS:t.lowS,prehash:!1};function Q(q,ee,ue=X){const{seed:ge,k2sig:ne}=W(q,ee,ue);return g1(t.hash.outputLen,t.nByteLength,t.hmac)(ge,ne)}f.BASE._setWindowSize(8);function re(q,ee,ue,ge=V){const ne=q;if(ee=Ot("msgHash",ee),ue=Ot("publicKey",ue),"strict"in ge)throw new Error("options.strict was renamed to lowS");const{lowS:he,prehash:pe}=ge;let Me,Y;try{if(typeof ne=="string"||ne instanceof Uint8Array)try{Me=C.fromDER(ne)}catch(st){if(!(st instanceof hi.Err))throw st;Me=C.fromCompact(ne)}else if(typeof ne=="object"&&typeof ne.r=="bigint"&&typeof ne.s=="bigint"){const{r:st,s:Be}=ne;Me=new C(st,Be)}else throw new Error("PARSE");Y=f.fromHex(ue)}catch(st){if(st.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(he&&Me.hasHighS())return!1;pe&&(ee=t.hash(ee));const{r:fe,s:G}=Me,ce=j(ee),_e=d(G),N=u(ce*_e),ke=u(fe*_e),tt=f.BASE.multiplyAndAddUnsafe(Y,N,ke)?.toAffine();return tt?u(tt.x)===fe:!1}return{CURVE:t,getPublicKey:S,getSharedSecret:T,sign:Q,verify:re,ProjectivePoint:f,Signature:C,utils:I}}function N7(e,t){const n=e.ORDER;let i=In;for(let v=n-yt;v%hr===In;v/=hr)i+=yt;const o=i,a=(n-yt)/hr**o,l=(a-yt)/hr,u=hr**o-yt,d=hr**(o-yt),f=e.pow(t,a),h=e.pow(t,(a+yt)/hr);let g=(v,w)=>{let $=f,k=e.pow(w,u),_=e.sqr(k);_=e.mul(_,w);let C=e.mul(v,_);C=e.pow(C,l),C=e.mul(C,k),k=e.mul(C,w),_=e.mul(C,v);let I=e.mul(_,k);C=e.pow(I,d);let S=e.eql(C,e.ONE);k=e.mul(_,h),C=e.mul(I,$),_=e.cmov(k,_,S),I=e.cmov(C,I,S);for(let E=o;E>yt;E--){let T=hr**(E-hr),O=e.pow(I,T);const j=e.eql(O,e.ONE);k=e.mul(_,$),$=e.mul($,$),O=e.mul(I,$),_=e.cmov(k,_,j),I=e.cmov(O,I,j)}return{isValid:S,value:_}};if(e.ORDER%sg===Da){const v=(e.ORDER-Da)/sg,w=e.sqrt(e.neg(t));g=($,k)=>{let _=e.sqr(k);const C=e.mul($,k);_=e.mul(_,C);let I=e.pow(_,v);I=e.mul(I,C);const S=e.mul(I,w),E=e.mul(e.sqr(I),k),T=e.eql(E,$);let O=e.cmov(S,I,T);return{isValid:T,value:O}}}return g}function D7(e,t){if(m1(e),!e.isValid(t.A)||!e.isValid(t.B)||!e.isValid(t.Z))throw new Error("mapToCurveSimpleSWU: invalid opts");const n=N7(e,t.Z);if(!e.isOdd)throw new Error("Fp.isOdd is not implemented!");return i=>{let o,a,l,u,d,f,h,g;o=e.sqr(i),o=e.mul(o,t.Z),a=e.sqr(o),a=e.add(a,o),l=e.add(a,e.ONE),l=e.mul(l,t.B),u=e.cmov(t.Z,e.neg(a),!e.eql(a,e.ZERO)),u=e.mul(u,t.A),a=e.sqr(l),f=e.sqr(u),d=e.mul(f,t.A),a=e.add(a,d),a=e.mul(a,l),f=e.mul(f,u),d=e.mul(f,t.B),a=e.add(a,d),h=e.mul(o,l);const{isValid:v,value:w}=n(a,f);g=e.mul(o,i),g=e.mul(g,w),h=e.cmov(h,l,v),g=e.cmov(g,w,v);const $=e.isOdd(i)===e.isOdd(g);return g=e.cmov(e.neg(g),g,$),h=e.div(h,u),{x:h,y:g}}}function U7(e){if(e instanceof Uint8Array)return e;if(typeof e=="string")return wl(e);throw new Error("DST must be Uint8Array or string")}const z7=Ht;function Ur(e,t){if(e<0||e>=1<<8*t)throw new Error(`bad I2OSP call: value=${e} length=${t}`);const n=Array.from({length:t}).fill(0);for(let i=t-1;i>=0;i--)n[i]=e&255,e>>>=8;return new Uint8Array(n)}function H7(e,t){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e[i]^t[i];return n}function Ys(e){if(!(e instanceof Uint8Array))throw new Error("Uint8Array expected")}function _d(e){if(!Number.isSafeInteger(e))throw new Error("number expected")}function F7(e,t,n,i){Ys(e),Ys(t),_d(n),t.length>255&&(t=i(on(wl("H2C-OVERSIZE-DST-"),t)));const{outputLen:o,blockLen:a}=i,l=Math.ceil(n/o);if(l>255)throw new Error("Invalid xmd length");const u=on(t,Ur(t.length,1)),d=Ur(0,a),f=Ur(n,2),h=new Array(l),g=i(on(d,e,f,Ur(0,1),u));h[0]=i(on(g,Ur(1,1),u));for(let w=1;w<=l;w++){const $=[H7(g,h[w-1]),Ur(w+1,1),u];h[w]=i(on(...$))}return on(...h).slice(0,n)}function q7(e,t,n,i,o){if(Ys(e),Ys(t),_d(n),t.length>255){const a=Math.ceil(2*i/8);t=o.create({dkLen:a}).update(wl("H2C-OVERSIZE-DST-")).update(t).digest()}if(n>65535||t.length>255)throw new Error("expand_message_xof: invalid lenInBytes");return o.create({dkLen:n}).update(e).update(Ur(n,2)).update(t).update(Ur(t.length,1)).digest()}function og(e,t,n){bs(n,{DST:"string",p:"bigint",m:"isSafeInteger",k:"isSafeInteger",hash:"hash"});const{p:i,k:o,m:a,hash:l,expand:u,DST:d}=n;Ys(e),_d(t);const f=U7(d),h=i.toString(2).length,g=Math.ceil((h+o)/8),v=t*a*g;let w;if(u==="xmd")w=F7(e,f,v,l);else if(u==="xof")w=q7(e,f,v,o,l);else if(u==="_internal_pass")w=e;else throw new Error('expand must be "xmd" or "xof"');const $=new Array(t);for(let k=0;k<t;k++){const _=new Array(a);for(let C=0;C<a;C++){const I=g*(C+k*a),S=w.subarray(I,I+g);_[C]=xt(z7(S),i)}$[k]=_}return $}function W7(e,t){const n=t.map(i=>Array.from(i).reverse());return(i,o)=>{const[a,l,u,d]=n.map(f=>f.reduce((h,g)=>e.add(e.mul(h,i),g)));return i=e.div(a,l),o=e.mul(o,e.div(u,d)),{x:i,y:o}}}function Z7(e,t,n){if(typeof t!="function")throw new Error("mapToCurve() must be defined");return{hashToCurve(i,o){const a=og(i,2,{...n,DST:n.DST,...o}),l=e.fromAffine(t(a[0])),u=e.fromAffine(t(a[1])),d=l.add(u).clearCofactor();return d.assertValidity(),d},encodeToCurve(i,o){const a=og(i,1,{...n,DST:n.encodeDST,...o}),l=e.fromAffine(t(a[0])).clearCofactor();return l.assertValidity(),l}}}class y1 extends gd{constructor(t,n){super(),this.finished=!1,this.destroyed=!1,di.hash(t);const i=vo(n);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?t.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=t.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(t){return di.exists(this),this.iHash.update(t),this}digestInto(t){di.exists(this),di.bytes(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return t=t,t.finished=o,t.destroyed=a,t.blockLen=l,t.outputLen=u,t.oHash=n._cloneInto(t.oHash),t.iHash=i._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Ua=(e,t,n)=>new y1(e,t).update(n).digest();Ua.create=(e,t)=>new y1(e,t);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function V7(e){return{hash:e,hmac:(t,...n)=>Ua(e,t,fi(...n)),randomBytes:yl}}function K7(e,t){const n=i=>j7({...e,...V7(i)});return Object.freeze({...n(t),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const xl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),za=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),b1=BigInt(1),Ha=BigInt(2),ag=(e,t)=>(e+t/Ha)/t;function _1(e){const t=xl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),f=e*e*e%t,h=f*f*e%t,g=bn(h,n,t)*h%t,v=bn(g,n,t)*h%t,w=bn(v,Ha,t)*f%t,$=bn(w,o,t)*w%t,k=bn($,a,t)*$%t,_=bn(k,u,t)*k%t,C=bn(_,d,t)*_%t,I=bn(C,u,t)*k%t,S=bn(I,n,t)*h%t,E=bn(S,l,t)*$%t,T=bn(E,i,t)*f%t,O=bn(T,Ha,t);if(!Vr.eql(Vr.sqr(O),e))throw new Error("Cannot find square root");return O}const Vr=T7(xl,void 0,void 0,{sqrt:_1}),zt=K7({a:BigInt(0),b:BigInt(7),Fp:Vr,n:za,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=za,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-b1*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=ag(a*e,t),d=ag(-i*e,t);let f=xt(e-u*n-d*o,t),h=xt(-u*i-d*a,t);const g=f>l,v=h>l;if(g&&(f=t-f),v&&(h=t-h),f>l||h>l)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:g,k1:f,k2neg:v,k2:h}}}},Zn),$l=BigInt(0),w1=e=>typeof e=="bigint"&&$l<e&&e<xl,G7=e=>typeof e=="bigint"&&$l<e&&e<za,lg={};function Fa(e,...t){let n=lg[e];if(n===void 0){const i=Zn(Uint8Array.from(e,o=>o.charCodeAt(0)));n=on(i,i),lg[e]=n}return Zn(on(n,...t))}const wd=e=>e.toRawBytes(!0).slice(1),Pu=e=>qr(e,32),pu=e=>xt(e,xl),Xs=e=>xt(e,za),xd=zt.ProjectivePoint,Q7=(e,t,n)=>xd.BASE.multiplyAndAddUnsafe(e,t,n);function Mu(e){let t=zt.utils.normPrivateKeyToScalar(e),n=xd.fromPrivateKey(t);return{scalar:n.hasEvenY()?t:Xs(-t),bytes:wd(n)}}function x1(e){if(!w1(e))throw new Error("bad x: need 0 < x < p");const t=pu(e*e),n=pu(t*e+BigInt(7));let i=_1(n);i%Ha!==$l&&(i=pu(-i));const o=new xd(e,i,b1);return o.assertValidity(),o}function $1(...e){return Xs(Ht(Fa("BIP0340/challenge",...e)))}function Y7(e){return Mu(e).bytes}function X7(e,t,n=yl(32)){const i=Ot("message",e),{bytes:o,scalar:a}=Mu(t),l=Ot("auxRand",n,32),u=Pu(a^Ht(Fa("BIP0340/aux",l))),d=Fa("BIP0340/nonce",u,o,i),f=Xs(Ht(d));if(f===$l)throw new Error("sign failed: k is zero");const{bytes:h,scalar:g}=Mu(f),v=$1(h,o,i),w=new Uint8Array(64);if(w.set(h,0),w.set(Pu(Xs(g+v*a)),32),!k1(w,i,o))throw new Error("sign: Invalid signature produced");return w}function k1(e,t,n){const i=Ot("signature",e,64),o=Ot("message",t),a=Ot("publicKey",n,32);try{const l=x1(Ht(a)),u=Ht(i.subarray(0,32));if(!w1(u))return!1;const d=Ht(i.subarray(32,64));if(!G7(d))return!1;const f=$1(Pu(u),wd(l),o),h=Q7(l,d,Xs(-f));return!(!h||!h.hasEvenY()||h.toAffine().x!==u)}catch{return!1}}const yo={getPublicKey:Y7,sign:X7,verify:k1,utils:{randomPrivateKey:zt.utils.randomPrivateKey,lift_x:x1,pointToBytes:wd,numberToBytesBE:qr,bytesToNumberBE:Ht,taggedHash:Fa,mod:xt}},J7=W7(Vr,[["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7","0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581","0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262","0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"],["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b","0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14","0x0000000000000000000000000000000000000000000000000000000000000001"],["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c","0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3","0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931","0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"],["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b","0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573","0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f","0x0000000000000000000000000000000000000000000000000000000000000001"]].map(e=>e.map(t=>BigInt(t)))),ek=D7(Vr,{A:BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),B:BigInt("1771"),Z:Vr.create(BigInt("-11"))});Z7(zt.ProjectivePoint,e=>{const{x:t,y:n}=ek(Vr.create(e[0]));return J7(t,n)},{DST:"secp256k1_XMD:SHA-256_SSWU_RO_",encodeDST:"secp256k1_XMD:SHA-256_SSWU_NU_",p:Vr.ORDER,m:1,k:128,expand:"xmd",hash:Zn});/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Yr(e){if(!Number.isSafeInteger(e))throw new Error(`Wrong integer: ${e}`)}function jn(...e){const t=(o,a)=>l=>o(a(l)),n=Array.from(e).reverse().reduce((o,a)=>o?t(o,a.encode):a.encode,void 0),i=e.reduce((o,a)=>o?t(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function Yn(e){return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return t.map(n=>{if(Yr(n),n<0||n>=e.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);return e[n]})},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("alphabet.decode input should be array of strings");return t.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=e.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);return i})}}}function Xn(e=""){if(typeof e!="string")throw new Error("join separator should be string");return{encode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of t)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return t.join(e)},decode:t=>{if(typeof t!="string")throw new Error("join.decode input should be string");return t.split(e)}}}function bo(e,t="="){if(Yr(e),typeof t!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*e%8;)n.push(t);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*e%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===t;i--)if(!((i-1)*e%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function E1(e){if(typeof e!="function")throw new Error("normalize fn should be function");return{encode:t=>t,decode:t=>e(t)}}function cg(e,t,n){if(t<2)throw new Error(`convertRadix: wrong from=${t}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(e))throw new Error("convertRadix: data should be array");if(!e.length)return[];let i=0;const o=[],a=Array.from(e);for(a.forEach(l=>{if(Yr(l),l<0||l>=t)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const f=a[d],h=t*l+f;if(!Number.isSafeInteger(h)||t*l/t!==l||h-f!==t*l)throw new Error("convertRadix: carry overflow");if(l=h%n,a[d]=Math.floor(h/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==h)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<e.length-1&&e[l]===0;l++)o.push(0);return o.reverse()}const C1=(e,t)=>t?C1(t,e%t):e,qa=(e,t)=>e+(t-C1(e,t));function Bu(e,t,n,i){if(!Array.isArray(e))throw new Error("convertRadix2: data should be array");if(t<=0||t>32)throw new Error(`convertRadix2: wrong from=${t}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(qa(t,n)>32)throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${qa(t,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of e){if(Yr(d),d>=2**t)throw new Error(`convertRadix2: invalid data word=${d} from=${t}`);if(o=o<<t|d,a+t>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${t}`);for(a+=t;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=t)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function S1(e){return Yr(e),{encode:t=>{if(!(t instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return cg(Array.from(t),2**8,e)},decode:t=>{if(!Array.isArray(t)||t.length&&typeof t[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(cg(t,e,2**8))}}}function xr(e,t=!1){if(Yr(e),e<=0||e>32)throw new Error("radix2: bits should be in (0..32]");if(qa(8,e)>32||qa(e,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return Bu(Array.from(n),8,e,!t)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(Bu(n,e,8,t))}}}function ug(e){if(typeof e!="function")throw new Error("unsafeWrapper fn should be function");return function(...t){try{return e.apply(null,t)}catch{}}}function T1(e,t){if(Yr(e),typeof t!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=t(n).slice(0,e),o=new Uint8Array(n.length+e);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-e),o=t(i).slice(0,e),a=n.slice(-e);for(let l=0;l<e;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const tk={alphabet:Yn,chain:jn,checksum:T1,radix:S1,radix2:xr,join:Xn,padding:bo},A1=jn(xr(4),Yn("0123456789ABCDEF"),Xn("")),I1=jn(xr(5),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),bo(5),Xn("")),nk=jn(xr(5),Yn("0123456789ABCDEFGHIJKLMNOPQRSTUV"),bo(5),Xn("")),rk=jn(xr(5),Yn("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),Xn(""),E1(e=>e.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1"))),ss=jn(xr(6),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),bo(6),Xn("")),R1=jn(xr(6),Yn("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),bo(6),Xn("")),$d=e=>jn(S1(58),Yn(e),Xn("")),Js=$d("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),ik=$d("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"),sk=$d("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz"),dg=[0,2,3,5,6,7,9,10,11],O1={encode(e){let t="";for(let n=0;n<e.length;n+=8){const i=e.subarray(n,n+8);t+=Js.encode(i).padStart(dg[i.length],"1")}return t},decode(e){let t=[];for(let n=0;n<e.length;n+=11){const i=e.slice(n,n+11),o=dg.indexOf(i.length),a=Js.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");t=t.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(t)}},L1=e=>jn(T1(4,t=>e(e(t))),Js),ju=jn(Yn("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),Xn("")),fg=[996825010,642813549,513874426,1027748829,705979059];function qs(e){const t=e>>25;let n=(e&33554431)<<5;for(let i=0;i<fg.length;i++)(t>>i&1)===1&&(n^=fg[i]);return n}function hg(e,t,n=1){const i=e.length;let o=1;for(let a=0;a<i;a++){const l=e.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${e})`);o=qs(o)^l>>5}o=qs(o);for(let a=0;a<i;a++)o=qs(o)^e.charCodeAt(a)&31;for(let a of t)o=qs(o)^a;for(let a=0;a<6;a++)o=qs(o);return o^=n,ju.encode(Bu([o%2**30],30,5,!1))}function P1(e){const t=e==="bech32"?1:734539939,n=xr(5),i=n.decode,o=n.encode,a=ug(i);function l(h,g,v=90){if(typeof h!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof h}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const w=h.length+7+g.length;if(v!==!1&&w>v)throw new TypeError(`Length ${w} exceeds limit ${v}`);return h=h.toLowerCase(),`${h}1${ju.encode(g)}${hg(h,g,t)}`}function u(h,g=90){if(typeof h!="string")throw new Error(`bech32.decode input should be string, not ${typeof h}`);if(h.length<8||g!==!1&&h.length>g)throw new TypeError(`Wrong string length: ${h.length} (${h}). Expected (8..${g})`);const v=h.toLowerCase();if(h!==v&&h!==h.toUpperCase())throw new Error("String must be lowercase or uppercase");h=v;const w=h.lastIndexOf("1");if(w===0||w===-1)throw new Error('Letter "1" must be present between prefix and data only');const $=h.slice(0,w),k=h.slice(w+1);if(k.length<6)throw new Error("Data must be at least 6 characters long");const _=ju.decode(k).slice(0,-6),C=hg($,_,t);if(!k.endsWith(C))throw new Error(`Invalid checksum in ${h}: expected "${C}"`);return{prefix:$,words:_}}const d=ug(u);function f(h){const{prefix:g,words:v}=u(h,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:l,decode:u,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Ft=P1("bech32"),ok=P1("bech32m"),M1={encode:e=>new TextDecoder().decode(e),decode:e=>new TextEncoder().encode(e)},B1=jn(xr(4),Yn("0123456789abcdef"),Xn(""),E1(e=>{if(typeof e!="string"||e.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof e} with length ${e.length}`);return e.toLowerCase()})),eo={utf8:M1,hex:B1,base16:A1,base32:I1,base64:ss,base64url:R1,base58:Js,base58xmr:O1},j1=`Invalid encoding type. Available types: ${Object.keys(eo).join(", ")}`,N1=(e,t)=>{if(typeof e!="string"||!eo.hasOwnProperty(e))throw new TypeError(j1);if(!(t instanceof Uint8Array))throw new TypeError("bytesToString() expects Uint8Array");return eo[e].encode(t)},ak=N1,D1=(e,t)=>{if(!eo.hasOwnProperty(e))throw new TypeError(j1);if(typeof t!="string")throw new TypeError("stringToBytes() expects string");return eo[e].decode(t)},lk=D1,ck=Object.freeze(Object.defineProperty({__proto__:null,assertNumber:Yr,base16:A1,base32:I1,base32crockford:rk,base32hex:nk,base58:Js,base58check:L1,base58flickr:ik,base58xmr:O1,base58xrp:sk,base64:ss,base64url:R1,bech32:Ft,bech32m:ok,bytes:lk,bytesToString:N1,hex:B1,str:ak,stringToBytes:D1,utf8:M1,utils:tk},Symbol.toStringTag,{value:"Module"}));var kd={};Object.defineProperty(kd,"__esModule",{value:!0});var Ed=kd.wordlist=void 0;Ed=kd.wordlist=`abandon
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
`);var an={},Et={};Object.defineProperty(Et,"__esModule",{value:!0});Et.output=Et.exists=Et.hash=Yi=Et.bytes=Et.bool=Et.number=void 0;function Wa(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}Et.number=Wa;function U1(e){if(typeof e!="boolean")throw new Error(`Expected boolean, not ${e}`)}Et.bool=U1;function Cd(e,...t){if(!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new TypeError(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}var Yi=Et.bytes=Cd;function z1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Wa(e.outputLen),Wa(e.blockLen)}Et.hash=z1;function H1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}Et.exists=H1;function F1(e,t){Cd(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}Et.output=F1;const uk={number:Wa,bool:U1,bytes:Cd,hash:z1,exists:H1,output:F1};Et.default=uk;var os={},q1={},_o={};const dk=mo(Q6);(function(e){/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */Object.defineProperty(e,"__esModule",{value:!0}),e.randomBytes=e.wrapConstructorWithOpts=e.wrapConstructor=e.checkOpts=e.Hash=e.concatBytes=e.toBytes=e.utf8ToBytes=e.asyncLoop=e.nextTick=e.hexToBytes=e.bytesToHex=e.isLE=e.rotr=e.createView=e.u32=e.u8=void 0;const t=dk,n=E=>new Uint8Array(E.buffer,E.byteOffset,E.byteLength);e.u8=n;const i=E=>new Uint32Array(E.buffer,E.byteOffset,Math.floor(E.byteLength/4));e.u32=i;const o=E=>new DataView(E.buffer,E.byteOffset,E.byteLength);e.createView=o;const a=(E,T)=>E<<32-T|E>>>T;if(e.rotr=a,e.isLE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68,!e.isLE)throw new Error("Non little-endian hardware is not supported");const l=Array.from({length:256},(E,T)=>T.toString(16).padStart(2,"0"));function u(E){if(!(E instanceof Uint8Array))throw new Error("Uint8Array expected");let T="";for(let O=0;O<E.length;O++)T+=l[E[O]];return T}e.bytesToHex=u;function d(E){if(typeof E!="string")throw new TypeError("hexToBytes: expected string, got "+typeof E);if(E.length%2)throw new Error("hexToBytes: received invalid unpadded hex");const T=new Uint8Array(E.length/2);for(let O=0;O<T.length;O++){const j=O*2,U=E.slice(j,j+2),te=Number.parseInt(U,16);if(Number.isNaN(te)||te<0)throw new Error("Invalid byte sequence");T[O]=te}return T}e.hexToBytes=d;const f=async()=>{};e.nextTick=f;async function h(E,T,O){let j=Date.now();for(let U=0;U<E;U++){O(U);const te=Date.now()-j;te>=0&&te<T||(await(0,e.nextTick)(),j+=te)}}e.asyncLoop=h;function g(E){if(typeof E!="string")throw new TypeError(`utf8ToBytes expected string, got ${typeof E}`);return new TextEncoder().encode(E)}e.utf8ToBytes=g;function v(E){if(typeof E=="string"&&(E=g(E)),!(E instanceof Uint8Array))throw new TypeError(`Expected input type is Uint8Array (got ${typeof E})`);return E}e.toBytes=v;function w(...E){if(!E.every(j=>j instanceof Uint8Array))throw new Error("Uint8Array list expected");if(E.length===1)return E[0];const T=E.reduce((j,U)=>j+U.length,0),O=new Uint8Array(T);for(let j=0,U=0;j<E.length;j++){const te=E[j];O.set(te,U),U+=te.length}return O}e.concatBytes=w;class ${clone(){return this._cloneInto()}}e.Hash=$;const k=E=>Object.prototype.toString.call(E)==="[object Object]"&&E.constructor===Object;function _(E,T){if(T!==void 0&&(typeof T!="object"||!k(T)))throw new TypeError("Options should be object or undefined");return Object.assign(E,T)}e.checkOpts=_;function C(E){const T=j=>E().update(v(j)).digest(),O=E();return T.outputLen=O.outputLen,T.blockLen=O.blockLen,T.create=()=>E(),T}e.wrapConstructor=C;function I(E){const T=(j,U)=>E(U).update(v(j)).digest(),O=E({});return T.outputLen=O.outputLen,T.blockLen=O.blockLen,T.create=j=>E(j),T}e.wrapConstructorWithOpts=I;function S(E=32){if(t.crypto&&typeof t.crypto.getRandomValues=="function")return t.crypto.getRandomValues(new Uint8Array(E));throw new Error("crypto.getRandomValues must be defined")}e.randomBytes=S})(_o);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.hmac=void 0;const t=Et,n=_o;class i extends n.Hash{constructor(l,u){super(),this.finished=!1,this.destroyed=!1,t.default.hash(l);const d=(0,n.toBytes)(u);if(this.iHash=l.create(),typeof this.iHash.update!="function")throw new TypeError("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const f=this.blockLen,h=new Uint8Array(f);h.set(d.length>f?l.create().update(d).digest():d);for(let g=0;g<h.length;g++)h[g]^=54;this.iHash.update(h),this.oHash=l.create();for(let g=0;g<h.length;g++)h[g]^=106;this.oHash.update(h),h.fill(0)}update(l){return t.default.exists(this),this.iHash.update(l),this}digestInto(l){t.default.exists(this),t.default.bytes(l,this.outputLen),this.finished=!0,this.iHash.digestInto(l),this.oHash.update(l),this.oHash.digestInto(l),this.destroy()}digest(){const l=new Uint8Array(this.oHash.outputLen);return this.digestInto(l),l}_cloneInto(l){l||(l=Object.create(Object.getPrototypeOf(this),{}));const{oHash:u,iHash:d,finished:f,destroyed:h,blockLen:g,outputLen:v}=this;return l=l,l.finished=f,l.destroyed=h,l.blockLen=g,l.outputLen=v,l.oHash=u._cloneInto(l.oHash),l.iHash=d._cloneInto(l.iHash),l}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const o=(a,l,u)=>new i(a,l).update(u).digest();e.hmac=o,e.hmac.create=(a,l)=>new i(a,l)})(q1);Object.defineProperty(os,"__esModule",{value:!0});os.pbkdf2Async=os.pbkdf2=void 0;const ba=Et,fk=q1,Ji=_o;function W1(e,t,n,i){ba.default.hash(e);const o=(0,Ji.checkOpts)({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(ba.default.number(a),ba.default.number(l),ba.default.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=(0,Ji.toBytes)(t),f=(0,Ji.toBytes)(n),h=new Uint8Array(l),g=fk.hmac.create(e,d),v=g._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:u,DK:h,PRF:g,PRFSalt:v}}function Z1(e,t,n,i,o){return e.destroy(),t.destroy(),i&&i.destroy(),o.fill(0),n}function hk(e,t,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=W1(e,t,n,i);let f;const h=new Uint8Array(4),g=(0,Ji.createView)(h),v=new Uint8Array(u.outputLen);for(let w=1,$=0;$<a;w++,$+=u.outputLen){const k=l.subarray($,$+u.outputLen);g.setInt32(0,w,!1),(f=d._cloneInto(f)).update(h).digestInto(v),k.set(v.subarray(0,k.length));for(let _=1;_<o;_++){u._cloneInto(f).update(v).digestInto(v);for(let C=0;C<k.length;C++)k[C]^=v[C]}}return Z1(u,d,l,f,v)}os.pbkdf2=hk;async function pk(e,t,n,i){const{c:o,dkLen:a,asyncTick:l,DK:u,PRF:d,PRFSalt:f}=W1(e,t,n,i);let h;const g=new Uint8Array(4),v=(0,Ji.createView)(g),w=new Uint8Array(d.outputLen);for(let $=1,k=0;k<a;$++,k+=d.outputLen){const _=u.subarray(k,k+d.outputLen);v.setInt32(0,$,!1),(h=f._cloneInto(h)).update(g).digestInto(w),_.set(w.subarray(0,_.length)),await(0,Ji.asyncLoop)(o-1,l,C=>{d._cloneInto(h).update(w).digestInto(w);for(let I=0;I<_.length;I++)_[I]^=w[I]})}return Z1(d,f,u,h,w)}os.pbkdf2Async=pk;const gk=mo(d7);var _n={},kl={};Object.defineProperty(kl,"__esModule",{value:!0});kl.SHA2=void 0;const gu=Et,Ws=_o;function mk(e,t,n,i){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;e.setUint32(t+d,l,i),e.setUint32(t+f,u,i)}class vk extends Ws.Hash{constructor(t,n,i,o){super(),this.blockLen=t,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=(0,Ws.createView)(this.buffer)}update(t){gu.default.exists(this);const{view:n,buffer:i,blockLen:o}=this;t=(0,Ws.toBytes)(t);const a=t.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=(0,Ws.createView)(t);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(t.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){gu.default.exists(this),gu.default.output(t,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;mk(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=(0,Ws.createView)(t),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,h=this.get();if(f>h.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,h[g],a)}digest(){const{buffer:t,outputLen:n}=this;this.digestInto(t);const i=t.slice(0,n);return this.destroy(),i}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return t.length=o,t.pos=u,t.finished=a,t.destroyed=l,o%n&&t.buffer.set(i),t}}kl.SHA2=vk;var V1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.add=e.toBig=e.split=e.fromBig=void 0;const t=BigInt(2**32-1),n=BigInt(32);function i(W,X=!1){return X?{h:Number(W&t),l:Number(W>>n&t)}:{h:Number(W>>n&t)|0,l:Number(W&t)|0}}e.fromBig=i;function o(W,X=!1){let V=new Uint32Array(W.length),Q=new Uint32Array(W.length);for(let re=0;re<W.length;re++){const{h:q,l:ee}=i(W[re],X);[V[re],Q[re]]=[q,ee]}return[V,Q]}e.split=o;const a=(W,X)=>BigInt(W>>>0)<<n|BigInt(X>>>0);e.toBig=a;const l=(W,X,V)=>W>>>V,u=(W,X,V)=>W<<32-V|X>>>V,d=(W,X,V)=>W>>>V|X<<32-V,f=(W,X,V)=>W<<32-V|X>>>V,h=(W,X,V)=>W<<64-V|X>>>V-32,g=(W,X,V)=>W>>>V-32|X<<64-V,v=(W,X)=>X,w=(W,X)=>W,$=(W,X,V)=>W<<V|X>>>32-V,k=(W,X,V)=>X<<V|W>>>32-V,_=(W,X,V)=>X<<V-32|W>>>64-V,C=(W,X,V)=>W<<V-32|X>>>64-V;function I(W,X,V,Q){const re=(X>>>0)+(Q>>>0);return{h:W+V+(re/2**32|0)|0,l:re|0}}e.add=I;const S=(W,X,V)=>(W>>>0)+(X>>>0)+(V>>>0),E=(W,X,V,Q)=>X+V+Q+(W/2**32|0)|0,T=(W,X,V,Q)=>(W>>>0)+(X>>>0)+(V>>>0)+(Q>>>0),O=(W,X,V,Q,re)=>X+V+Q+re+(W/2**32|0)|0,j=(W,X,V,Q,re)=>(W>>>0)+(X>>>0)+(V>>>0)+(Q>>>0)+(re>>>0),U=(W,X,V,Q,re,q)=>X+V+Q+re+q+(W/2**32|0)|0,te={fromBig:i,split:o,toBig:e.toBig,shrSH:l,shrSL:u,rotrSH:d,rotrSL:f,rotrBH:h,rotrBL:g,rotr32H:v,rotr32L:w,rotlSH:$,rotlSL:k,rotlBH:_,rotlBL:C,add:I,add3L:S,add3H:E,add4L:T,add4H:O,add5H:U,add5L:j};e.default=te})(V1);Object.defineProperty(_n,"__esModule",{value:!0});_n.sha384=_n.sha512_256=_n.sha512_224=Nu=_n.sha512=_n.SHA512=void 0;const yk=kl,Le=V1,El=_o,[bk,_k]=Le.default.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(e=>BigInt(e))),Nr=new Uint32Array(80),Dr=new Uint32Array(80);class wo extends yk.SHA2{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:t,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:f,El:h,Fh:g,Fl:v,Gh:w,Gl:$,Hh:k,Hl:_}=this;return[t,n,i,o,a,l,u,d,f,h,g,v,w,$,k,_]}set(t,n,i,o,a,l,u,d,f,h,g,v,w,$,k,_){this.Ah=t|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=f|0,this.El=h|0,this.Fh=g|0,this.Fl=v|0,this.Gh=w|0,this.Gl=$|0,this.Hh=k|0,this.Hl=_|0}process(t,n){for(let S=0;S<16;S++,n+=4)Nr[S]=t.getUint32(n),Dr[S]=t.getUint32(n+=4);for(let S=16;S<80;S++){const E=Nr[S-15]|0,T=Dr[S-15]|0,O=Le.default.rotrSH(E,T,1)^Le.default.rotrSH(E,T,8)^Le.default.shrSH(E,T,7),j=Le.default.rotrSL(E,T,1)^Le.default.rotrSL(E,T,8)^Le.default.shrSL(E,T,7),U=Nr[S-2]|0,te=Dr[S-2]|0,W=Le.default.rotrSH(U,te,19)^Le.default.rotrBH(U,te,61)^Le.default.shrSH(U,te,6),X=Le.default.rotrSL(U,te,19)^Le.default.rotrBL(U,te,61)^Le.default.shrSL(U,te,6),V=Le.default.add4L(j,X,Dr[S-7],Dr[S-16]),Q=Le.default.add4H(V,O,W,Nr[S-7],Nr[S-16]);Nr[S]=Q|0,Dr[S]=V|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:f,Dl:h,Eh:g,El:v,Fh:w,Fl:$,Gh:k,Gl:_,Hh:C,Hl:I}=this;for(let S=0;S<80;S++){const E=Le.default.rotrSH(g,v,14)^Le.default.rotrSH(g,v,18)^Le.default.rotrBH(g,v,41),T=Le.default.rotrSL(g,v,14)^Le.default.rotrSL(g,v,18)^Le.default.rotrBL(g,v,41),O=g&w^~g&k,j=v&$^~v&_,U=Le.default.add5L(I,T,j,_k[S],Dr[S]),te=Le.default.add5H(U,C,E,O,bk[S],Nr[S]),W=U|0,X=Le.default.rotrSH(i,o,28)^Le.default.rotrBH(i,o,34)^Le.default.rotrBH(i,o,39),V=Le.default.rotrSL(i,o,28)^Le.default.rotrBL(i,o,34)^Le.default.rotrBL(i,o,39),Q=i&a^i&u^a&u,re=o&l^o&d^l&d;C=k|0,I=_|0,k=w|0,_=$|0,w=g|0,$=v|0,{h:g,l:v}=Le.default.add(f|0,h|0,te|0,W|0),f=u|0,h=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const q=Le.default.add3L(W,V,re);i=Le.default.add3H(q,te,X,Q),o=q|0}({h:i,l:o}=Le.default.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=Le.default.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=Le.default.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:f,l:h}=Le.default.add(this.Dh|0,this.Dl|0,f|0,h|0),{h:g,l:v}=Le.default.add(this.Eh|0,this.El|0,g|0,v|0),{h:w,l:$}=Le.default.add(this.Fh|0,this.Fl|0,w|0,$|0),{h:k,l:_}=Le.default.add(this.Gh|0,this.Gl|0,k|0,_|0),{h:C,l:I}=Le.default.add(this.Hh|0,this.Hl|0,C|0,I|0),this.set(i,o,a,l,u,d,f,h,g,v,w,$,k,_,C,I)}roundClean(){Nr.fill(0),Dr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}_n.SHA512=wo;class wk extends wo{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class xk extends wo{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class $k extends wo{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}var Nu=_n.sha512=(0,El.wrapConstructor)(()=>new wo);_n.sha512_224=(0,El.wrapConstructor)(()=>new wk);_n.sha512_256=(0,El.wrapConstructor)(()=>new xk);_n.sha384=(0,El.wrapConstructor)(()=>new $k);const kk=mo(i7),Ek=mo(ck);Object.defineProperty(an,"__esModule",{value:!0});var K1=an.mnemonicToSeedSync=an.mnemonicToSeed=im=an.validateMnemonic=an.entropyToMnemonic=an.mnemonicToEntropy=em=an.generateMnemonic=void 0;/*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) */const G1=Et,Q1=os,Ck=gk,Y1=_n,Sk=kk,_a=Ek,Tk=e=>e[0]==="あいこくしん";function X1(e){if(typeof e!="string")throw new TypeError(`Invalid mnemonic type: ${typeof e}`);return e.normalize("NFKD")}function Sd(e){const t=X1(e),n=t.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:t,words:n}}function J1(e){G1.default.bytes(e,16,20,24,28,32)}function Ak(e,t=128){if(G1.default.number(t),t%32!==0||t>256)throw new TypeError("Invalid entropy");return rm((0,Sk.randomBytes)(t/8),e)}var em=an.generateMnemonic=Ak;const Ik=e=>{const t=8-e.length/4;return new Uint8Array([(0,Ck.sha256)(e)[0]>>t<<t])};function tm(e){if(!Array.isArray(e)||e.length!==2048||typeof e[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return e.forEach(t=>{if(typeof t!="string")throw new Error(`Wordlist: non-string element: ${t}`)}),_a.utils.chain(_a.utils.checksum(1,Ik),_a.utils.radix2(11,!0),_a.utils.alphabet(e))}function nm(e,t){const{words:n}=Sd(e),i=tm(t).decode(n);return J1(i),i}an.mnemonicToEntropy=nm;function rm(e,t){return J1(e),tm(t).encode(e).join(Tk(t)?"　":" ")}an.entropyToMnemonic=rm;function Rk(e,t){try{nm(e,t)}catch{return!1}return!0}var im=an.validateMnemonic=Rk;const sm=e=>X1(`mnemonic${e}`);function Ok(e,t=""){return(0,Q1.pbkdf2Async)(Y1.sha512,Sd(e).nfkd,sm(t),{c:2048,dkLen:64})}an.mnemonicToSeed=Ok;function Lk(e,t=""){return(0,Q1.pbkdf2)(Y1.sha512,Sd(e).nfkd,sm(t),{c:2048,dkLen:64})}K1=an.mnemonicToSeedSync=Lk;const Pk=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),om=Uint8Array.from({length:16},(e,t)=>t),Mk=om.map(e=>(9*e+5)%16);let Td=[om],Ad=[Mk];for(let e=0;e<4;e++)for(let t of[Td,Ad])t.push(t[e].map(n=>Pk[n]));const am=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(e=>new Uint8Array(e)),Bk=Td.map((e,t)=>e.map(n=>am[t][n])),jk=Ad.map((e,t)=>e.map(n=>am[t][n])),Nk=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),Dk=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),wa=(e,t)=>e<<t|e>>>32-t;function pg(e,t,n,i){return e===0?t^n^i:e===1?t&n|~t&i:e===2?(t|~n)^i:e===3?t&i|n&~i:t^(n|~i)}const xa=new Uint32Array(16);class Uk extends u1{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:t,h1:n,h2:i,h3:o,h4:a}=this;return[t,n,i,o,a]}set(t,n,i,o,a){this.h0=t|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(t,n){for(let w=0;w<16;w++,n+=4)xa[w]=t.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,f=this.h3|0,h=f,g=this.h4|0,v=g;for(let w=0;w<5;w++){const $=4-w,k=Nk[w],_=Dk[w],C=Td[w],I=Ad[w],S=Bk[w],E=jk[w];for(let T=0;T<16;T++){const O=wa(i+pg(w,a,u,f)+xa[C[T]]+k,S[T])+g|0;i=g,g=f,f=wa(u,10)|0,u=a,a=O}for(let T=0;T<16;T++){const O=wa(o+pg($,l,d,h)+xa[I[T]]+_,E[T])+v|0;o=v,v=h,h=wa(d,10)|0,d=l,l=O}}this.set(this.h1+u+h|0,this.h2+f+v|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){xa.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const zk=vl(()=>new Uk),$a=zt.ProjectivePoint,mu=L1(Zn);function gg(e){return BigInt(`0x${sn(e)}`)}function Hk(e){return Zr(e.toString(16).padStart(64,"0"))}const Fk=pd("Bitcoin seed"),vu={private:76066276,public:76067358},yu=2147483648,qk=e=>zk(Zn(e)),Wk=e=>gi(e).getUint32(0,!1),ka=e=>{if(!Number.isSafeInteger(e)||e<0||e>2**32-1)throw new Error(`Invalid number=${e}. Should be from 0 to 2 ** 32 - 1`);const t=new Uint8Array(4);return gi(t).setUint32(0,e,!1),t};class ui{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return Wk(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const t=this.privateKey;if(!t)throw new Error("No private key");return mu.encode(this.serialize(this.versions.private,fi(new Uint8Array([0]),t)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return mu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(t,n=vu){if(Yi(t),8*t.length<128||8*t.length>512)throw new Error(`HDKey: wrong seed length=${t.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Ua(Nu,Fk,t);return new ui({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(t,n=vu){const i=mu.decode(t),o=gi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new ui({...l,privateKey:u.slice(1)}):new ui({...l,publicKey:u})}static fromJSON(t){return ui.fromExtendedKey(t.xpriv)}constructor(t){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!t||typeof t!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=t.versions||vu,this.depth=t.depth||0,this.chainCode=t.chainCode,this.index=t.index||0,this.parentFingerprint=t.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(t.publicKey&&t.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(t.privateKey){if(!zt.utils.isValidPrivateKey(t.privateKey))throw new Error("Invalid private key");this.privKey=typeof t.privateKey=="bigint"?t.privateKey:gg(t.privateKey),this.privKeyBytes=Hk(this.privKey),this.pubKey=zt.getPublicKey(t.privateKey,!0)}else if(t.publicKey)this.pubKey=$a.fromHex(t.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=qk(this.pubKey)}derive(t){if(!/^[mM]'?/.test(t))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(t))return this;const n=t.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=yu)throw new Error("Invalid index");a[2]==="'"&&(l+=yu),i=i.deriveChild(l)}return i}deriveChild(t){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ka(t);if(t>=yu){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=fi(new Uint8Array([0]),u,n)}else n=fi(this.pubKey,n);const i=Ua(Nu,this.chainCode,n),o=gg(i.slice(0,32)),a=i.slice(32);if(!zt.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:t};try{if(this.privateKey){const u=xt(this.privKey+o,zt.CURVE.n);if(!zt.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=$a.fromHex(this.pubKey).add($a.fromPrivateKey(o));if(u.equals($a.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new ui(l)}catch{return this.deriveChild(t+1)}}sign(t){if(!this.privateKey)throw new Error("No privateKey set!");return Yi(t,32),zt.sign(t,this.privKey).toCompactRawBytes()}verify(t,n){if(Yi(t,32),Yi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=zt.Signature.fromCompact(n)}catch{return!1}return zt.verify(i,t,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(t,n){if(!this.chainCode)throw new Error("No chainCode set");return Yi(n,33),fi(ka(t),new Uint8Array([this.depth]),ka(this.parentFingerprint),ka(this.index),this.chainCode,n)}}var Zk=Object.defineProperty,jt=(e,t)=>{for(var n in t)Zk(e,n,{get:t[n],enumerable:!0})};function lm(e){return sn(yo.getPublicKey(e))}var cm={};jt(cm,{MessageNode:()=>um,MessageQueue:()=>dm,insertEventIntoAscendingList:()=>Kk,insertEventIntoDescendingList:()=>Vk,normalizeURL:()=>Du,utf8Decoder:()=>zr,utf8Encoder:()=>Vn});var zr=new TextDecoder("utf-8"),Vn=new TextEncoder;function Du(e){let t=new URL(e);return t.pathname=t.pathname.replace(/\/+/g,"/"),t.pathname.endsWith("/")&&(t.pathname=t.pathname.slice(0,-1)),(t.port==="80"&&t.protocol==="ws:"||t.port==="443"&&t.protocol==="wss:")&&(t.port=""),t.searchParams.sort(),t.hash="",t.toString()}function Vk(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at<e[i].created_at)a=i+1;else if(t.created_at>=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at>t.created_at)n=o;else if(e[o].created_at<t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}function Kk(e,t){let n=0,i=e.length-1,o,a=n;if(i<0)a=0;else if(t.created_at>e[i].created_at)a=i+1;else if(t.created_at<=e[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),e[o].created_at<t.created_at)n=o;else if(e[o].created_at>t.created_at)i=o;else{a=o;break}}return e[a]?.id!==t.id?[...e.slice(0,a),t,...e.slice(a)]:e}var um=class{_value;_next;get value(){return this._value}set value(e){this._value=e}get next(){return this._next}set next(e){this._next=e}constructor(e){this._value=e,this._next=null}},dm=class{_first;_last;get first(){return this._first}set first(e){this._first=e}get last(){return this._last}set last(e){this._last=e}_size;get size(){return this._size}set size(e){this._size=e}constructor(){this._first=null,this._last=null,this._size=0}enqueue(e){const t=new um(e);return this._size===0||!this._last?(this._first=t,this._last=t):(this._last.next=t,this._last=t),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let e=this._first;return this._first=e.next,e.next=null,this._size--,e.value}},dt=(e=>(e[e.Metadata=0]="Metadata",e[e.Text=1]="Text",e[e.RecommendRelay=2]="RecommendRelay",e[e.Contacts=3]="Contacts",e[e.EncryptedDirectMessage=4]="EncryptedDirectMessage",e[e.EventDeletion=5]="EventDeletion",e[e.Repost=6]="Repost",e[e.Reaction=7]="Reaction",e[e.BadgeAward=8]="BadgeAward",e[e.ChannelCreation=40]="ChannelCreation",e[e.ChannelMetadata=41]="ChannelMetadata",e[e.ChannelMessage=42]="ChannelMessage",e[e.ChannelHideMessage=43]="ChannelHideMessage",e[e.ChannelMuteUser=44]="ChannelMuteUser",e[e.Blank=255]="Blank",e[e.Report=1984]="Report",e[e.ZapRequest=9734]="ZapRequest",e[e.Zap=9735]="Zap",e[e.RelayList=10002]="RelayList",e[e.ClientAuth=22242]="ClientAuth",e[e.ProfileBadge=30008]="ProfileBadge",e[e.BadgeDefinition=30009]="BadgeDefinition",e[e.Article=30023]="Article",e))(dt||{});function fm(e,t){let n=e;return n.pubkey=lm(t),n.id=Cl(n),n.sig=Yk(n,t),n}function Gk(e){if(!Id(e))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,e.pubkey,e.created_at,e.kind,e.tags,e.content])}function Cl(e){let t=Zn(Vn.encode(Gk(e)));return sn(t)}var Qk=e=>e instanceof Object;function Id(e){if(!Qk(e)||typeof e.kind!="number"||typeof e.content!="string"||typeof e.created_at!="number"||typeof e.pubkey!="string"||!e.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(e.tags))return!1;for(let t=0;t<e.tags.length;t++){let n=e.tags[t];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function Rd(e){try{return yo.verify(e.sig,Cl(e),e.pubkey)}catch{return!1}}function Yk(e,t){return sn(yo.sign(Cl(e),t))}function Xk(e,t){if(e.ids&&e.ids.indexOf(t.id)===-1&&!e.ids.some(n=>t.id.startsWith(n))||e.kinds&&e.kinds.indexOf(t.kind)===-1||e.authors&&e.authors.indexOf(t.pubkey)===-1&&!e.authors.some(n=>t.pubkey.startsWith(n)))return!1;for(let n in e)if(n[0]==="#"){let i=n.slice(1),o=e[`#${i}`];if(o&&!t.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(e.since&&t.created_at<e.since||e.until&&t.created_at>=e.until)}function Jk(e,t){for(let n=0;n<e.length;n++)if(Xk(e[n],t))return!0;return!1}var e9={};jt(e9,{getHex64:()=>Sl,getInt:()=>hm,getSubscriptionId:()=>pm,matchEventId:()=>t9,matchEventKind:()=>r9,matchEventPubkey:()=>n9});function Sl(e,t){let n=t.length+3,i=e.indexOf(`"${t}":`)+n,o=e.slice(i).indexOf('"')+i+1;return e.slice(o,o+64)}function hm(e,t){let n=t.length,i=e.indexOf(`"${t}":`)+n+3,o=e.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function pm(e){let t=e.slice(0,22).indexOf('"EVENT"');if(t===-1)return null;let n=e.slice(t+7+1).indexOf('"');if(n===-1)return null;let i=t+7+1+n,o=e.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return e.slice(i+1,a)}function t9(e,t){return t===Sl(e,"id")}function n9(e,t){return t===Sl(e,"pubkey")}function r9(e,t){return t===hm(e,"kind")}var mg=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function i9(e,t={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=t;var a,l={},u=mg(),d={},f={},h;async function g(){return h||(h=new Promise((C,I)=>{try{a=new WebSocket(e)}catch(O){I(O)}a.onopen=()=>{u.connect.forEach(O=>O()),C()},a.onerror=()=>{h=void 0,u.error.forEach(O=>O()),I()},a.onclose=async()=>{h=void 0,u.disconnect.forEach(O=>O())};let S=new dm,E;a.onmessage=O=>{S.enqueue(O.data),E||(E=setInterval(T,0))};function T(){if(S.size===0){clearInterval(E),E=null;return}var O=S.dequeue();if(!O)return;let j=pm(O);if(j){let U=l[j];if(U&&U.alreadyHaveEvent&&U.alreadyHaveEvent(Sl(O,"id"),e))return}try{let U=JSON.parse(O);switch(U[0]){case"EVENT":{let V=U[1],Q=U[2];Id(Q)&&l[V]&&(l[V].skipVerification||Rd(Q))&&Jk(l[V].filters,Q)&&(l[V],(d[V]?.event||[]).forEach(re=>re(Q)));return}case"COUNT":let te=U[1],W=U[2];l[te]&&(d[te]?.count||[]).forEach(V=>V(W));return;case"EOSE":{let V=U[1];V in d&&(d[V].eose.forEach(Q=>Q()),d[V].eose=[]);return}case"OK":{let V=U[1],Q=U[2],re=U[3]||"";V in f&&(Q?f[V].ok.forEach(q=>q()):f[V].failed.forEach(q=>q(re)),f[V].ok=[],f[V].failed=[]);return}case"NOTICE":let X=U[1];u.notice.forEach(V=>V(X));return;case"AUTH":{let V=U[1];u.auth?.forEach(Q=>Q(V));return}}}catch{return}}}),h)}function v(){return a?.readyState===1}async function w(){v()||await g()}async function $(C){let I=JSON.stringify(C);if(!(!v()&&(await new Promise(S=>setTimeout(S,1e3)),!v())))try{a.send(I)}catch(S){console.log(S)}}const k=(C,{verb:I="REQ",skipVerification:S=!1,alreadyHaveEvent:E=null,id:T=Math.random().toString().slice(2)}={})=>{let O=T;return l[O]={id:O,filters:C,skipVerification:S,alreadyHaveEvent:E},$([I,O,...C]),{sub:(j,U={})=>k(j||C,{skipVerification:U.skipVerification||S,alreadyHaveEvent:U.alreadyHaveEvent||E,id:O}),unsub:()=>{delete l[O],delete d[O],$(["CLOSE",O])},on:(j,U)=>{d[O]=d[O]||{event:[],count:[],eose:[]},d[O][j].push(U)},off:(j,U)=>{let te=d[O],W=te[j].indexOf(U);W>=0&&te[j].splice(W,1)}}};function _(C,I){if(!C.id)throw new Error(`event ${C} has no id`);let S=C.id;return $([I,C]),{on:(E,T)=>{f[S]=f[S]||{ok:[],failed:[]},f[S][E].push(T)},off:(E,T)=>{let O=f[S];if(!O)return;let j=O[E].indexOf(T);j>=0&&O[E].splice(j,1)}}}return{url:e,sub:k,on:(C,I)=>{u[C].push(I),C==="connect"&&a?.readyState===1&&I()},off:(C,I)=>{let S=u[C].indexOf(I);S!==-1&&u[C].splice(S,1)},list:(C,I)=>new Promise(S=>{let E=k(C,I),T=[],O=setTimeout(()=>{E.unsub(),S(T)},n);E.on("eose",()=>{E.unsub(),clearTimeout(O),S(T)}),E.on("event",j=>{T.push(j)})}),get:(C,I)=>new Promise(S=>{let E=k([C],I),T=setTimeout(()=>{E.unsub(),S(null)},i);E.on("event",O=>{E.unsub(),clearTimeout(T),S(O)})}),count:C=>new Promise(I=>{let S=k(C,{...k,verb:"COUNT"}),E=setTimeout(()=>{S.unsub(),I(null)},o);S.on("count",T=>{S.unsub(),clearTimeout(E),I(T)})}),publish(C){return _(C,"EVENT")},auth(C){return _(C,"AUTH")},connect:w,close(){u=mg(),d={},f={},a.readyState===WebSocket.OPEN&&a?.close()},get status(){return a?.readyState??3}}}var s9=class{_conn;_seenOn={};eoseSubTimeout;getTimeout;constructor(e={}){this._conn={},this.eoseSubTimeout=e.eoseSubTimeout||3400,this.getTimeout=e.getTimeout||3400}close(e){e.forEach(t=>{let n=this._conn[Du(t)];n&&n.close()})}async ensureRelay(e){const t=Du(e);this._conn[t]||(this._conn[t]=i9(t,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[t];return await n.connect(),n}sub(e,t,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,w)=>{if(n?.alreadyHaveEvent?.(v,w))return!0;let $=this._seenOn[v]||new Set;return $.add(w),this._seenOn[v]=$,i.has(v)};let a=[],l=new Set,u=new Set,d=e.length,f=!1,h=setTimeout(()=>{f=!0;for(let v of u.values())v()},this.eoseSubTimeout);e.forEach(async v=>{let w;try{w=await this.ensureRelay(v)}catch{k();return}if(!w)return;let $=w.sub(t,o);$.on("event",_=>{i.add(_.id);for(let C of l.values())C(_)}),$.on("eose",()=>{f||k()}),a.push($);function k(){if(d--,d===0){clearTimeout(h);for(let _ of u.values())_()}}});let g={sub(v,w){return a.forEach($=>$.sub(v,w)),g},unsub(){a.forEach(v=>v.unsub())},on(v,w){v==="event"?l.add(w):v==="eose"&&u.add(w)},off(v,w){v==="event"?l.delete(w):v==="eose"&&u.delete(w)}};return g}get(e,t,n){return new Promise(i=>{let o=this.sub(e,[t],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(e,t,n){return new Promise(i=>{let o=[],a=this.sub(e,t,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}publish(e,t){const n=e.map(async o=>{let a;try{return a=await this.ensureRelay(o),a.publish(t)}catch{return{on(){},off(){}}}}),i=new Map;return{on(o,a){e.forEach(async(l,u)=>{let d=await n[u],f=()=>a(l);i.set(a,f),d.on(o,f)})},off(o,a){e.forEach(async(l,u)=>{let d=i.get(a);d&&(await n[u]).off(o,d)})}}}seenOn(e){return Array.from(this._seenOn[e]?.values?.()||[])}},xo={};jt(xo,{BECH32_REGEX:()=>gm,decode:()=>Tl,naddrEncode:()=>d9,neventEncode:()=>u9,noteEncode:()=>l9,nprofileEncode:()=>c9,npubEncode:()=>a9,nrelayEncode:()=>f9,nsecEncode:()=>o9});var _s=5e3,gm=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function Tl(e){let{prefix:t,words:n}=Ft.decode(e,_s),i=new Uint8Array(Ft.fromWords(n));switch(t){case"nprofile":{let o=Ea(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:sn(o[0][0]),relays:o[1]?o[1].map(a=>zr.decode(a)):[]}}}case"nevent":{let o=Ea(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");return{type:"nevent",data:{id:sn(o[0][0]),relays:o[1]?o[1].map(a=>zr.decode(a)):[],author:o[2]?.[0]?sn(o[2][0]):void 0}}}case"naddr":{let o=Ea(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:zr.decode(o[0][0]),pubkey:sn(o[2][0]),kind:parseInt(sn(o[3][0]),16),relays:o[1]?o[1].map(a=>zr.decode(a)):[]}}}case"nrelay":{let o=Ea(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:zr.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:t,data:sn(i)};default:throw new Error(`unknown prefix ${t}`)}}function Ea(e){let t={},n=e;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);t[i]=t[i]||[],t[i].push(a)}return t}function o9(e){return Od("nsec",e)}function a9(e){return Od("npub",e)}function l9(e){return Od("note",e)}function Od(e,t){let n=Zr(t),i=Ft.toWords(n);return Ft.encode(e,i,_s)}function c9(e){let t=Al({0:[Zr(e.pubkey)],1:(e.relays||[]).map(i=>Vn.encode(i))}),n=Ft.toWords(t);return Ft.encode("nprofile",n,_s)}function u9(e){let t=Al({0:[Zr(e.id)],1:(e.relays||[]).map(i=>Vn.encode(i)),2:e.author?[Zr(e.author)]:[]}),n=Ft.toWords(t);return Ft.encode("nevent",n,_s)}function d9(e){let t=new ArrayBuffer(4);new DataView(t).setUint32(0,e.kind,!1);let n=Al({0:[Vn.encode(e.identifier)],1:(e.relays||[]).map(o=>Vn.encode(o)),2:[Zr(e.pubkey)],3:[new Uint8Array(t)]}),i=Ft.toWords(n);return Ft.encode("naddr",i,_s)}function f9(e){let t=Al({0:[Vn.encode(e)]}),n=Ft.toWords(t);return Ft.encode("nrelay",n,_s)}function Al(e){let t=[];return Object.entries(e).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),t.push(a)})}),fi(...t)}var h9={};jt(h9,{decrypt:()=>g9,encrypt:()=>p9});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function p9(e,t,n){const i=zt.getSharedSecret(e,"02"+t),o=mm(i);let a=Uint8Array.from(yl(16)),l=Vn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),f=ss.encode(new Uint8Array(d)),h=ss.encode(new Uint8Array(a.buffer));return`${f}?iv=${h}`}async function g9(e,t,n){let[i,o]=n.split("?iv="),a=zt.getSharedSecret(e,"02"+t),l=mm(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=ss.decode(i),f=ss.decode(o),h=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},u,d);return zr.decode(h)}function mm(e){return e.slice(1,33)}var vm={};jt(vm,{NIP05_REGEX:()=>ym,queryProfile:()=>y9,searchDomain:()=>v9,useFetchImplementation:()=>m9});var ym=/^(?:([\w.+-]+)@)?([\w.-]+)$/,Il;try{Il=fetch}catch{}function m9(e){Il=e}async function v9(e,t=""){try{return(await(await Il(`https://${e}/.well-known/nostr.json?name=${t}`)).json()).names}catch{return{}}}async function y9(e){const t=e.match(ym);if(!t)return null;const[n,i="_",o]=t;try{const a=await Il(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=b9(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function b9(e){const t={names:{}};for(const[n,i]of Object.entries(e.names))typeof n=="string"&&typeof i=="string"&&(t.names[n]=i);if(e.relays){t.relays={};for(const[n,i]of Object.entries(e.relays))typeof n=="string"&&Array.isArray(i)&&(t.relays[n]=i.filter(o=>typeof o=="string"))}return t}var _9={};jt(_9,{generateSeedWords:()=>x9,privateKeyFromSeedWords:()=>w9,validateWords:()=>$9});function w9(e,t){let i=ui.fromMasterSeed(K1(e,t)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return sn(i)}function x9(){return em(Ed)}function $9(e){return im(e,Ed)}var k9={};jt(k9,{parse:()=>E9});function E9(e){const t={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of e.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&t.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,f={id:l,relays:u?[u]:[]},h=i===0,g=i===n.length-1;if(d==="root"){t.root=f;continue}if(d==="reply"){t.reply=f;continue}if(d==="mention"){t.mentions.push(f);continue}if(h){t.root=f;continue}if(g){t.reply=f;continue}t.mentions.push(f)}return t}var C9={};jt(C9,{getPow:()=>S9});function S9(e){return T9(Zr(e))}function T9(e){let t,n,i;for(n=0,t=0;n<e.length&&(i=A9(e[n]),t+=i,i===8);n++);return t}function A9(e){let t=0;if(e===0)return 8;for(;e>>=1;)t++;return 7-t}var I9={};jt(I9,{finishRepostEvent:()=>R9,getRepostedEvent:()=>O9,getRepostedEventPointer:()=>bm});function R9(e,t,n,i){return fm({kind:6,tags:[...e.tags??[],["e",t.id,n],["p",t.pubkey]],content:e.content===""?"":JSON.stringify(t),created_at:e.created_at},i)}function bm(e){if(e.kind!==6)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(t!==void 0)return{id:t[1],relays:[t[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function O9(e,{skipVerification:t}={}){const n=bm(e);if(n===void 0||e.content==="")return;let i;try{i=JSON.parse(e.content)}catch{return}if(i.id===n.id&&!(!t&&!Rd(i)))return i}var L9={};jt(L9,{NOSTR_URI_REGEX:()=>Rl,parse:()=>M9,test:()=>P9});var Rl=new RegExp(`nostr:(${gm.source})`);function P9(e){return typeof e=="string"&&new RegExp(`^${Rl.source}$`).test(e)}function M9(e){const t=e.match(new RegExp(`^${Rl.source}$`));if(!t)throw new Error(`Invalid Nostr URI: ${e}`);return{uri:t[0],value:t[1],decoded:Tl(t[1])}}var B9={};jt(B9,{finishReactionEvent:()=>j9,getReactedEventPointer:()=>N9});function j9(e,t,n){const i=t.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return fm({...e,kind:7,tags:[...e.tags??[],...i,["e",t.id],["p",t.pubkey]],content:e.content??"+"},n)}function N9(e){if(e.kind!==7)return;let t,n;for(let i=e.tags.length-1;i>=0&&(t===void 0||n===void 0);i--){const o=e.tags[i];o.length>=2&&(o[0]==="e"&&t===void 0?t=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(t===void 0||n===void 0))return{id:t[1],relays:[t[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var D9={};jt(D9,{createDelegation:()=>U9,getDelegator:()=>z9});function U9(e,t){let n=[];(t.kind||-1)>=0&&n.push(`kind=${t.kind}`),t.until&&n.push(`created_at<${t.until}`),t.since&&n.push(`created_at>${t.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Zn(Vn.encode(`nostr:delegation:${t.pubkey}:${i}`)),a=sn(yo.sign(o,e));return{from:lm(e),to:t.pubkey,cond:i,sig:a}}function z9(e){let t=e.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!t)return null;let n=t[1],i=t[2],o=t[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,f,h]=a[u].split(/\b/);if(!(d==="kind"&&f==="="&&e.kind===parseInt(h))){if(d==="created_at"&&f==="<"&&e.created_at<parseInt(h))continue;if(d==="created_at"&&f===">"&&e.created_at>parseInt(h))continue;return null}}let l=Zn(Vn.encode(`nostr:delegation:${e.pubkey}:${i}`));return yo.verify(o,l,n)?n:null}var H9={};jt(H9,{matchAll:()=>F9,regex:()=>Ld,replaceAll:()=>q9});var Ld=()=>new RegExp(`\\b${Rl.source}\\b`,"g");function*F9(e){const t=e.matchAll(Ld());for(const n of t)try{const[i,o]=n;yield{uri:i,value:o,decoded:Tl(o),start:n.index,end:n.index+i.length}}catch{}}function q9(e,t){return e.replaceAll(Ld(),(n,i)=>t({uri:n,value:i,decoded:Tl(i)}))}var W9={};jt(W9,{useFetchImplementation:()=>Z9,validateGithub:()=>V9});var Pd;try{Pd=fetch}catch{}function Z9(e){Pd=e}async function V9(e,t,n){try{return await(await Pd(`https://gist.github.com/${t}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${e}`}catch{return!1}}var K9={};jt(K9,{authenticate:()=>G9});var G9=async({challenge:e,relay:t,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",t.url],["challenge",e]],content:""},o=t.auth(await n(i));return new Promise((a,l)=>{o.on("ok",function u(){o.off("ok",u),a()}),o.on("failed",function u(d){o.off("failed",u),l(d)})})},Q9={};jt(Q9,{getZapEndpoint:()=>X9,makeZapReceipt:()=>tE,makeZapRequest:()=>J9,useFetchImplementation:()=>Y9,validateZapRequest:()=>eE});var Md;try{Md=fetch}catch{}function Y9(e){Md=e}async function X9(e){try{let t="",{lud06:n,lud16:i}=JSON.parse(e.content);if(n){let{words:l}=Ft.decode(n,1e3),u=Ft.fromWords(l);t=zr.decode(u)}else if(i){let[l,u]=i.split("@");t=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await Md(t)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function J9({profile:e,event:t,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!e)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",e],["amount",n.toString()],["relays",...i]]};return t&&a.tags.push(["e",t]),a}function eE(e){let t;try{t=JSON.parse(e)}catch{return"Invalid zap request JSON."}if(!Id(t))return"Zap request is not a valid Nostr event.";if(!Rd(t))return"Invalid signature on zap request.";let n=t.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=t.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":t.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function tE({zapRequest:e,preimage:t,bolt11:n,paidAt:i}){let a=JSON.parse(e).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",e]]};return t&&l.tags.push(["preimage",t]),l}const nE=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),_m=(e={})=>(()=>{const t=nE();return Ge(t,e,!0,!0),t})(),rE=B('<button class="text-blue-500 underline">'),{noteEncode:iE,neventEncode:sE}=xo,oE=e=>{try{return iE(e)}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},aE=e=>{try{return sE({id:e})}catch(t){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",e,t),e}},to=e=>(()=>{const t=rE();return A(t,b(oe,{get when(){return e.kind==null||e.kind===dt.Text},get fallback(){return aE(e.eventId)},get children(){return oE(e.eventId)}})),t})();var Za={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Za.exports;(function(e,t){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,h="__lodash_placeholder__",g=1,v=2,w=4,$=1,k=2,_=1,C=2,I=4,S=8,E=16,T=32,O=64,j=128,U=256,te=512,W=30,X="...",V=800,Q=16,re=1,q=2,ee=3,ue=1/0,ge=9007199254740991,ne=17976931348623157e292,he=0/0,pe=4294967295,Me=pe-1,Y=pe>>>1,fe=[["ary",j],["bind",_],["bindKey",C],["curry",S],["curryRight",E],["flip",te],["partial",T],["partialRight",O],["rearg",U]],G="[object Arguments]",ce="[object Array]",_e="[object AsyncFunction]",N="[object Boolean]",ke="[object Date]",tt="[object DOMException]",vt="[object Error]",st="[object Function]",Be="[object GeneratorFunction]",Fe="[object Map]",Tt="[object Number]",wn="[object Null]",ft="[object Object]",Er="[object Promise]",Ai="[object Proxy]",Nn="[object RegExp]",bt="[object Set]",xn="[object String]",Dn="[object Symbol]",Ii="[object Undefined]",$e="[object WeakMap]",tr="[object WeakSet]",Yt="[object ArrayBuffer]",Wt="[object DataView]",$n="[object Float32Array]",nr="[object Float64Array]",rr="[object Int8Array]",Cr="[object Int16Array]",Ri="[object Int32Array]",Oi="[object Uint8Array]",Li="[object Uint8ClampedArray]",Ql="[object Uint16Array]",Yl="[object Uint32Array]",_2=/\b__p \+= '';/g,w2=/\b(__p \+=) '' \+/g,x2=/(__e\(.*?\)|\b__t\)) \+\n'';/g,pf=/&(?:amp|lt|gt|quot|#39);/g,gf=/[&<>"']/g,$2=RegExp(pf.source),k2=RegExp(gf.source),E2=/<%-([\s\S]+?)%>/g,C2=/<%([\s\S]+?)%>/g,mf=/<%=([\s\S]+?)%>/g,S2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,T2=/^\w*$/,A2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Xl=/[\\^$.*+?()[\]{}|]/g,I2=RegExp(Xl.source),Jl=/^\s+/,R2=/\s/,O2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,L2=/\{\n\/\* \[wrapped with (.+)\] \*/,P2=/,? & /,M2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,B2=/[()=,{}\[\]\/\s]/,j2=/\\(\\)?/g,N2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,vf=/\w*$/,D2=/^[-+]0x[0-9a-f]+$/i,U2=/^0b[01]+$/i,z2=/^\[object .+?Constructor\]$/,H2=/^0o[0-7]+$/i,F2=/^(?:0|[1-9]\d*)$/,q2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ro=/($^)/,W2=/['\n\r\u2028\u2029\\]/g,Oo="\\ud800-\\udfff",Z2="\\u0300-\\u036f",V2="\\ufe20-\\ufe2f",K2="\\u20d0-\\u20ff",yf=Z2+V2+K2,bf="\\u2700-\\u27bf",_f="a-z\\xdf-\\xf6\\xf8-\\xff",G2="\\xac\\xb1\\xd7\\xf7",Q2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Y2="\\u2000-\\u206f",X2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",wf="A-Z\\xc0-\\xd6\\xd8-\\xde",xf="\\ufe0e\\ufe0f",$f=G2+Q2+Y2+X2,ec="['’]",J2="["+Oo+"]",kf="["+$f+"]",Lo="["+yf+"]",Ef="\\d+",ey="["+bf+"]",Cf="["+_f+"]",Sf="[^"+Oo+$f+Ef+bf+_f+wf+"]",tc="\\ud83c[\\udffb-\\udfff]",ty="(?:"+Lo+"|"+tc+")",Tf="[^"+Oo+"]",nc="(?:\\ud83c[\\udde6-\\uddff]){2}",rc="[\\ud800-\\udbff][\\udc00-\\udfff]",Pi="["+wf+"]",Af="\\u200d",If="(?:"+Cf+"|"+Sf+")",ny="(?:"+Pi+"|"+Sf+")",Rf="(?:"+ec+"(?:d|ll|m|re|s|t|ve))?",Of="(?:"+ec+"(?:D|LL|M|RE|S|T|VE))?",Lf=ty+"?",Pf="["+xf+"]?",ry="(?:"+Af+"(?:"+[Tf,nc,rc].join("|")+")"+Pf+Lf+")*",iy="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",sy="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Mf=Pf+Lf+ry,oy="(?:"+[ey,nc,rc].join("|")+")"+Mf,ay="(?:"+[Tf+Lo+"?",Lo,nc,rc,J2].join("|")+")",ly=RegExp(ec,"g"),cy=RegExp(Lo,"g"),ic=RegExp(tc+"(?="+tc+")|"+ay+Mf,"g"),uy=RegExp([Pi+"?"+Cf+"+"+Rf+"(?="+[kf,Pi,"$"].join("|")+")",ny+"+"+Of+"(?="+[kf,Pi+If,"$"].join("|")+")",Pi+"?"+If+"+"+Rf,Pi+"+"+Of,sy,iy,Ef,oy].join("|"),"g"),dy=RegExp("["+Af+Oo+yf+xf+"]"),fy=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,hy=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],py=-1,nt={};nt[$n]=nt[nr]=nt[rr]=nt[Cr]=nt[Ri]=nt[Oi]=nt[Li]=nt[Ql]=nt[Yl]=!0,nt[G]=nt[ce]=nt[Yt]=nt[N]=nt[Wt]=nt[ke]=nt[vt]=nt[st]=nt[Fe]=nt[Tt]=nt[ft]=nt[Nn]=nt[bt]=nt[xn]=nt[$e]=!1;var Je={};Je[G]=Je[ce]=Je[Yt]=Je[Wt]=Je[N]=Je[ke]=Je[$n]=Je[nr]=Je[rr]=Je[Cr]=Je[Ri]=Je[Fe]=Je[Tt]=Je[ft]=Je[Nn]=Je[bt]=Je[xn]=Je[Dn]=Je[Oi]=Je[Li]=Je[Ql]=Je[Yl]=!0,Je[vt]=Je[st]=Je[$e]=!1;var gy={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},my={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},vy={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},yy={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},by=parseFloat,_y=parseInt,Bf=typeof $t=="object"&&$t&&$t.Object===Object&&$t,wy=typeof self=="object"&&self&&self.Object===Object&&self,At=Bf||wy||Function("return this")(),sc=t&&!t.nodeType&&t,Jr=sc&&!0&&e&&!e.nodeType&&e,jf=Jr&&Jr.exports===sc,oc=jf&&Bf.process,dn=function(){try{var P=Jr&&Jr.require&&Jr.require("util").types;return P||oc&&oc.binding&&oc.binding("util")}catch{}}(),Nf=dn&&dn.isArrayBuffer,Df=dn&&dn.isDate,Uf=dn&&dn.isMap,zf=dn&&dn.isRegExp,Hf=dn&&dn.isSet,Ff=dn&&dn.isTypedArray;function Xt(P,z,D){switch(D.length){case 0:return P.call(z);case 1:return P.call(z,D[0]);case 2:return P.call(z,D[0],D[1]);case 3:return P.call(z,D[0],D[1],D[2])}return P.apply(z,D)}function xy(P,z,D,ae){for(var Ce=-1,Ve=P==null?0:P.length;++Ce<Ve;){var _t=P[Ce];z(ae,_t,D(_t),P)}return ae}function fn(P,z){for(var D=-1,ae=P==null?0:P.length;++D<ae&&z(P[D],D,P)!==!1;);return P}function $y(P,z){for(var D=P==null?0:P.length;D--&&z(P[D],D,P)!==!1;);return P}function qf(P,z){for(var D=-1,ae=P==null?0:P.length;++D<ae;)if(!z(P[D],D,P))return!1;return!0}function Sr(P,z){for(var D=-1,ae=P==null?0:P.length,Ce=0,Ve=[];++D<ae;){var _t=P[D];z(_t,D,P)&&(Ve[Ce++]=_t)}return Ve}function Po(P,z){var D=P==null?0:P.length;return!!D&&Mi(P,z,0)>-1}function ac(P,z,D){for(var ae=-1,Ce=P==null?0:P.length;++ae<Ce;)if(D(z,P[ae]))return!0;return!1}function ot(P,z){for(var D=-1,ae=P==null?0:P.length,Ce=Array(ae);++D<ae;)Ce[D]=z(P[D],D,P);return Ce}function Tr(P,z){for(var D=-1,ae=z.length,Ce=P.length;++D<ae;)P[Ce+D]=z[D];return P}function lc(P,z,D,ae){var Ce=-1,Ve=P==null?0:P.length;for(ae&&Ve&&(D=P[++Ce]);++Ce<Ve;)D=z(D,P[Ce],Ce,P);return D}function ky(P,z,D,ae){var Ce=P==null?0:P.length;for(ae&&Ce&&(D=P[--Ce]);Ce--;)D=z(D,P[Ce],Ce,P);return D}function cc(P,z){for(var D=-1,ae=P==null?0:P.length;++D<ae;)if(z(P[D],D,P))return!0;return!1}var Ey=uc("length");function Cy(P){return P.split("")}function Sy(P){return P.match(M2)||[]}function Wf(P,z,D){var ae;return D(P,function(Ce,Ve,_t){if(z(Ce,Ve,_t))return ae=Ve,!1}),ae}function Mo(P,z,D,ae){for(var Ce=P.length,Ve=D+(ae?1:-1);ae?Ve--:++Ve<Ce;)if(z(P[Ve],Ve,P))return Ve;return-1}function Mi(P,z,D){return z===z?Dy(P,z,D):Mo(P,Zf,D)}function Ty(P,z,D,ae){for(var Ce=D-1,Ve=P.length;++Ce<Ve;)if(ae(P[Ce],z))return Ce;return-1}function Zf(P){return P!==P}function Vf(P,z){var D=P==null?0:P.length;return D?fc(P,z)/D:he}function uc(P){return function(z){return z==null?n:z[P]}}function dc(P){return function(z){return P==null?n:P[z]}}function Kf(P,z,D,ae,Ce){return Ce(P,function(Ve,_t,Xe){D=ae?(ae=!1,Ve):z(D,Ve,_t,Xe)}),D}function Ay(P,z){var D=P.length;for(P.sort(z);D--;)P[D]=P[D].value;return P}function fc(P,z){for(var D,ae=-1,Ce=P.length;++ae<Ce;){var Ve=z(P[ae]);Ve!==n&&(D=D===n?Ve:D+Ve)}return D}function hc(P,z){for(var D=-1,ae=Array(P);++D<P;)ae[D]=z(D);return ae}function Iy(P,z){return ot(z,function(D){return[D,P[D]]})}function Gf(P){return P&&P.slice(0,Jf(P)+1).replace(Jl,"")}function Jt(P){return function(z){return P(z)}}function pc(P,z){return ot(z,function(D){return P[D]})}function Ts(P,z){return P.has(z)}function Qf(P,z){for(var D=-1,ae=P.length;++D<ae&&Mi(z,P[D],0)>-1;);return D}function Yf(P,z){for(var D=P.length;D--&&Mi(z,P[D],0)>-1;);return D}function Ry(P,z){for(var D=P.length,ae=0;D--;)P[D]===z&&++ae;return ae}var Oy=dc(gy),Ly=dc(my);function Py(P){return"\\"+yy[P]}function My(P,z){return P==null?n:P[z]}function Bi(P){return dy.test(P)}function By(P){return fy.test(P)}function jy(P){for(var z,D=[];!(z=P.next()).done;)D.push(z.value);return D}function gc(P){var z=-1,D=Array(P.size);return P.forEach(function(ae,Ce){D[++z]=[Ce,ae]}),D}function Xf(P,z){return function(D){return P(z(D))}}function Ar(P,z){for(var D=-1,ae=P.length,Ce=0,Ve=[];++D<ae;){var _t=P[D];(_t===z||_t===h)&&(P[D]=h,Ve[Ce++]=D)}return Ve}function Bo(P){var z=-1,D=Array(P.size);return P.forEach(function(ae){D[++z]=ae}),D}function Ny(P){var z=-1,D=Array(P.size);return P.forEach(function(ae){D[++z]=[ae,ae]}),D}function Dy(P,z,D){for(var ae=D-1,Ce=P.length;++ae<Ce;)if(P[ae]===z)return ae;return-1}function Uy(P,z,D){for(var ae=D+1;ae--;)if(P[ae]===z)return ae;return ae}function ji(P){return Bi(P)?Hy(P):Ey(P)}function kn(P){return Bi(P)?Fy(P):Cy(P)}function Jf(P){for(var z=P.length;z--&&R2.test(P.charAt(z)););return z}var zy=dc(vy);function Hy(P){for(var z=ic.lastIndex=0;ic.test(P);)++z;return z}function Fy(P){return P.match(ic)||[]}function qy(P){return P.match(uy)||[]}var Wy=function P(z){z=z==null?At:Ni.defaults(At.Object(),z,Ni.pick(At,hy));var D=z.Array,ae=z.Date,Ce=z.Error,Ve=z.Function,_t=z.Math,Xe=z.Object,mc=z.RegExp,Zy=z.String,hn=z.TypeError,jo=D.prototype,Vy=Ve.prototype,Di=Xe.prototype,No=z["__core-js_shared__"],Do=Vy.toString,Ye=Di.hasOwnProperty,Ky=0,eh=function(){var r=/[^.]+$/.exec(No&&No.keys&&No.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Uo=Di.toString,Gy=Do.call(Xe),Qy=At._,Yy=mc("^"+Do.call(Ye).replace(Xl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),zo=jf?z.Buffer:n,Ir=z.Symbol,Ho=z.Uint8Array,th=zo?zo.allocUnsafe:n,Fo=Xf(Xe.getPrototypeOf,Xe),nh=Xe.create,rh=Di.propertyIsEnumerable,qo=jo.splice,ih=Ir?Ir.isConcatSpreadable:n,As=Ir?Ir.iterator:n,ei=Ir?Ir.toStringTag:n,Wo=function(){try{var r=si(Xe,"defineProperty");return r({},"",{}),r}catch{}}(),Xy=z.clearTimeout!==At.clearTimeout&&z.clearTimeout,Jy=ae&&ae.now!==At.Date.now&&ae.now,eb=z.setTimeout!==At.setTimeout&&z.setTimeout,Zo=_t.ceil,Vo=_t.floor,vc=Xe.getOwnPropertySymbols,tb=zo?zo.isBuffer:n,sh=z.isFinite,nb=jo.join,rb=Xf(Xe.keys,Xe),wt=_t.max,Lt=_t.min,ib=ae.now,sb=z.parseInt,oh=_t.random,ob=jo.reverse,yc=si(z,"DataView"),Is=si(z,"Map"),bc=si(z,"Promise"),Ui=si(z,"Set"),Rs=si(z,"WeakMap"),Os=si(Xe,"create"),Ko=Rs&&new Rs,zi={},ab=oi(yc),lb=oi(Is),cb=oi(bc),ub=oi(Ui),db=oi(Rs),Go=Ir?Ir.prototype:n,Ls=Go?Go.valueOf:n,ah=Go?Go.toString:n;function y(r){if(ut(r)&&!Te(r)&&!(r instanceof He)){if(r instanceof pn)return r;if(Ye.call(r,"__wrapped__"))return lp(r)}return new pn(r)}var Hi=function(){function r(){}return function(s){if(!at(s))return{};if(nh)return nh(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Qo(){}function pn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:E2,evaluate:C2,interpolate:mf,variable:"",imports:{_:y}},y.prototype=Qo.prototype,y.prototype.constructor=y,pn.prototype=Hi(Qo.prototype),pn.prototype.constructor=pn;function He(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=pe,this.__views__=[]}function fb(){var r=new He(this.__wrapped__);return r.__actions__=Zt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Zt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Zt(this.__views__),r}function hb(){if(this.__filtered__){var r=new He(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function pb(){var r=this.__wrapped__.value(),s=this.__dir__,c=Te(r),p=s<0,m=c?r.length:0,x=C_(0,m,this.__views__),R=x.start,L=x.end,M=L-R,H=p?L:R-1,F=this.__iteratees__,K=F.length,ie=0,de=Lt(M,this.__takeCount__);if(!c||!p&&m==M&&de==M)return Rh(r,this.__actions__);var we=[];e:for(;M--&&ie<de;){H+=s;for(var Oe=-1,xe=r[H];++Oe<K;){var De=F[Oe],qe=De.iteratee,nn=De.type,Ut=qe(xe);if(nn==q)xe=Ut;else if(!Ut){if(nn==re)continue e;break e}}we[ie++]=xe}return we}He.prototype=Hi(Qo.prototype),He.prototype.constructor=He;function ti(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var p=r[s];this.set(p[0],p[1])}}function gb(){this.__data__=Os?Os(null):{},this.size=0}function mb(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function vb(r){var s=this.__data__;if(Os){var c=s[r];return c===d?n:c}return Ye.call(s,r)?s[r]:n}function yb(r){var s=this.__data__;return Os?s[r]!==n:Ye.call(s,r)}function bb(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=Os&&s===n?d:s,this}ti.prototype.clear=gb,ti.prototype.delete=mb,ti.prototype.get=vb,ti.prototype.has=yb,ti.prototype.set=bb;function ir(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var p=r[s];this.set(p[0],p[1])}}function _b(){this.__data__=[],this.size=0}function wb(r){var s=this.__data__,c=Yo(s,r);if(c<0)return!1;var p=s.length-1;return c==p?s.pop():qo.call(s,c,1),--this.size,!0}function xb(r){var s=this.__data__,c=Yo(s,r);return c<0?n:s[c][1]}function $b(r){return Yo(this.__data__,r)>-1}function kb(r,s){var c=this.__data__,p=Yo(c,r);return p<0?(++this.size,c.push([r,s])):c[p][1]=s,this}ir.prototype.clear=_b,ir.prototype.delete=wb,ir.prototype.get=xb,ir.prototype.has=$b,ir.prototype.set=kb;function sr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var p=r[s];this.set(p[0],p[1])}}function Eb(){this.size=0,this.__data__={hash:new ti,map:new(Is||ir),string:new ti}}function Cb(r){var s=ca(this,r).delete(r);return this.size-=s?1:0,s}function Sb(r){return ca(this,r).get(r)}function Tb(r){return ca(this,r).has(r)}function Ab(r,s){var c=ca(this,r),p=c.size;return c.set(r,s),this.size+=c.size==p?0:1,this}sr.prototype.clear=Eb,sr.prototype.delete=Cb,sr.prototype.get=Sb,sr.prototype.has=Tb,sr.prototype.set=Ab;function ni(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new sr;++s<c;)this.add(r[s])}function Ib(r){return this.__data__.set(r,d),this}function Rb(r){return this.__data__.has(r)}ni.prototype.add=ni.prototype.push=Ib,ni.prototype.has=Rb;function En(r){var s=this.__data__=new ir(r);this.size=s.size}function Ob(){this.__data__=new ir,this.size=0}function Lb(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function Pb(r){return this.__data__.get(r)}function Mb(r){return this.__data__.has(r)}function Bb(r,s){var c=this.__data__;if(c instanceof ir){var p=c.__data__;if(!Is||p.length<o-1)return p.push([r,s]),this.size=++c.size,this;c=this.__data__=new sr(p)}return c.set(r,s),this.size=c.size,this}En.prototype.clear=Ob,En.prototype.delete=Lb,En.prototype.get=Pb,En.prototype.has=Mb,En.prototype.set=Bb;function lh(r,s){var c=Te(r),p=!c&&ai(r),m=!c&&!p&&Mr(r),x=!c&&!p&&!m&&Zi(r),R=c||p||m||x,L=R?hc(r.length,Zy):[],M=L.length;for(var H in r)(s||Ye.call(r,H))&&!(R&&(H=="length"||m&&(H=="offset"||H=="parent")||x&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||cr(H,M)))&&L.push(H);return L}function ch(r){var s=r.length;return s?r[Ic(0,s-1)]:n}function jb(r,s){return ua(Zt(r),ri(s,0,r.length))}function Nb(r){return ua(Zt(r))}function _c(r,s,c){(c!==n&&!Cn(r[s],c)||c===n&&!(s in r))&&or(r,s,c)}function Ps(r,s,c){var p=r[s];(!(Ye.call(r,s)&&Cn(p,c))||c===n&&!(s in r))&&or(r,s,c)}function Yo(r,s){for(var c=r.length;c--;)if(Cn(r[c][0],s))return c;return-1}function Db(r,s,c,p){return Rr(r,function(m,x,R){s(p,m,c(m),R)}),p}function uh(r,s){return r&&zn(s,kt(s),r)}function Ub(r,s){return r&&zn(s,Kt(s),r)}function or(r,s,c){s=="__proto__"&&Wo?Wo(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function wc(r,s){for(var c=-1,p=s.length,m=D(p),x=r==null;++c<p;)m[c]=x?n:tu(r,s[c]);return m}function ri(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function gn(r,s,c,p,m,x){var R,L=s&g,M=s&v,H=s&w;if(c&&(R=m?c(r,p,m,x):c(r)),R!==n)return R;if(!at(r))return r;var F=Te(r);if(F){if(R=T_(r),!L)return Zt(r,R)}else{var K=Pt(r),ie=K==st||K==Be;if(Mr(r))return Ph(r,L);if(K==ft||K==G||ie&&!m){if(R=M||ie?{}:Jh(r),!L)return M?v_(r,Ub(R,r)):m_(r,uh(R,r))}else{if(!Je[K])return m?r:{};R=A_(r,K,L)}}x||(x=new En);var de=x.get(r);if(de)return de;x.set(r,R),Tp(r)?r.forEach(function(xe){R.add(gn(xe,s,c,xe,r,x))}):Cp(r)&&r.forEach(function(xe,De){R.set(De,gn(xe,s,c,De,r,x))});var we=H?M?zc:Uc:M?Kt:kt,Oe=F?n:we(r);return fn(Oe||r,function(xe,De){Oe&&(De=xe,xe=r[De]),Ps(R,De,gn(xe,s,c,De,r,x))}),R}function zb(r){var s=kt(r);return function(c){return dh(c,r,s)}}function dh(r,s,c){var p=c.length;if(r==null)return!p;for(r=Xe(r);p--;){var m=c[p],x=s[m],R=r[m];if(R===n&&!(m in r)||!x(R))return!1}return!0}function fh(r,s,c){if(typeof r!="function")throw new hn(l);return zs(function(){r.apply(n,c)},s)}function Ms(r,s,c,p){var m=-1,x=Po,R=!0,L=r.length,M=[],H=s.length;if(!L)return M;c&&(s=ot(s,Jt(c))),p?(x=ac,R=!1):s.length>=o&&(x=Ts,R=!1,s=new ni(s));e:for(;++m<L;){var F=r[m],K=c==null?F:c(F);if(F=p||F!==0?F:0,R&&K===K){for(var ie=H;ie--;)if(s[ie]===K)continue e;M.push(F)}else x(s,K,p)||M.push(F)}return M}var Rr=Dh(Un),hh=Dh($c,!0);function Hb(r,s){var c=!0;return Rr(r,function(p,m,x){return c=!!s(p,m,x),c}),c}function Xo(r,s,c){for(var p=-1,m=r.length;++p<m;){var x=r[p],R=s(x);if(R!=null&&(L===n?R===R&&!tn(R):c(R,L)))var L=R,M=x}return M}function Fb(r,s,c,p){var m=r.length;for(c=Ae(c),c<0&&(c=-c>m?0:m+c),p=p===n||p>m?m:Ae(p),p<0&&(p+=m),p=c>p?0:Ip(p);c<p;)r[c++]=s;return r}function ph(r,s){var c=[];return Rr(r,function(p,m,x){s(p,m,x)&&c.push(p)}),c}function It(r,s,c,p,m){var x=-1,R=r.length;for(c||(c=R_),m||(m=[]);++x<R;){var L=r[x];s>0&&c(L)?s>1?It(L,s-1,c,p,m):Tr(m,L):p||(m[m.length]=L)}return m}var xc=Uh(),gh=Uh(!0);function Un(r,s){return r&&xc(r,s,kt)}function $c(r,s){return r&&gh(r,s,kt)}function Jo(r,s){return Sr(s,function(c){return ur(r[c])})}function ii(r,s){s=Lr(s,r);for(var c=0,p=s.length;r!=null&&c<p;)r=r[Hn(s[c++])];return c&&c==p?r:n}function mh(r,s,c){var p=s(r);return Te(r)?p:Tr(p,c(r))}function Nt(r){return r==null?r===n?Ii:wn:ei&&ei in Xe(r)?E_(r):N_(r)}function kc(r,s){return r>s}function qb(r,s){return r!=null&&Ye.call(r,s)}function Wb(r,s){return r!=null&&s in Xe(r)}function Zb(r,s,c){return r>=Lt(s,c)&&r<wt(s,c)}function Ec(r,s,c){for(var p=c?ac:Po,m=r[0].length,x=r.length,R=x,L=D(x),M=1/0,H=[];R--;){var F=r[R];R&&s&&(F=ot(F,Jt(s))),M=Lt(F.length,M),L[R]=!c&&(s||m>=120&&F.length>=120)?new ni(R&&F):n}F=r[0];var K=-1,ie=L[0];e:for(;++K<m&&H.length<M;){var de=F[K],we=s?s(de):de;if(de=c||de!==0?de:0,!(ie?Ts(ie,we):p(H,we,c))){for(R=x;--R;){var Oe=L[R];if(!(Oe?Ts(Oe,we):p(r[R],we,c)))continue e}ie&&ie.push(we),H.push(de)}}return H}function Vb(r,s,c,p){return Un(r,function(m,x,R){s(p,c(m),x,R)}),p}function Bs(r,s,c){s=Lr(s,r),r=rp(r,s);var p=r==null?r:r[Hn(vn(s))];return p==null?n:Xt(p,r,c)}function vh(r){return ut(r)&&Nt(r)==G}function Kb(r){return ut(r)&&Nt(r)==Yt}function Gb(r){return ut(r)&&Nt(r)==ke}function js(r,s,c,p,m){return r===s?!0:r==null||s==null||!ut(r)&&!ut(s)?r!==r&&s!==s:Qb(r,s,c,p,js,m)}function Qb(r,s,c,p,m,x){var R=Te(r),L=Te(s),M=R?ce:Pt(r),H=L?ce:Pt(s);M=M==G?ft:M,H=H==G?ft:H;var F=M==ft,K=H==ft,ie=M==H;if(ie&&Mr(r)){if(!Mr(s))return!1;R=!0,F=!1}if(ie&&!F)return x||(x=new En),R||Zi(r)?Qh(r,s,c,p,m,x):$_(r,s,M,c,p,m,x);if(!(c&$)){var de=F&&Ye.call(r,"__wrapped__"),we=K&&Ye.call(s,"__wrapped__");if(de||we){var Oe=de?r.value():r,xe=we?s.value():s;return x||(x=new En),m(Oe,xe,c,p,x)}}return ie?(x||(x=new En),k_(r,s,c,p,m,x)):!1}function Yb(r){return ut(r)&&Pt(r)==Fe}function Cc(r,s,c,p){var m=c.length,x=m,R=!p;if(r==null)return!x;for(r=Xe(r);m--;){var L=c[m];if(R&&L[2]?L[1]!==r[L[0]]:!(L[0]in r))return!1}for(;++m<x;){L=c[m];var M=L[0],H=r[M],F=L[1];if(R&&L[2]){if(H===n&&!(M in r))return!1}else{var K=new En;if(p)var ie=p(H,F,M,r,s,K);if(!(ie===n?js(F,H,$|k,p,K):ie))return!1}}return!0}function yh(r){if(!at(r)||L_(r))return!1;var s=ur(r)?Yy:z2;return s.test(oi(r))}function Xb(r){return ut(r)&&Nt(r)==Nn}function Jb(r){return ut(r)&&Pt(r)==bt}function e_(r){return ut(r)&&ma(r.length)&&!!nt[Nt(r)]}function bh(r){return typeof r=="function"?r:r==null?Gt:typeof r=="object"?Te(r)?xh(r[0],r[1]):wh(r):zp(r)}function Sc(r){if(!Us(r))return rb(r);var s=[];for(var c in Xe(r))Ye.call(r,c)&&c!="constructor"&&s.push(c);return s}function t_(r){if(!at(r))return j_(r);var s=Us(r),c=[];for(var p in r)p=="constructor"&&(s||!Ye.call(r,p))||c.push(p);return c}function Tc(r,s){return r<s}function _h(r,s){var c=-1,p=Vt(r)?D(r.length):[];return Rr(r,function(m,x,R){p[++c]=s(m,x,R)}),p}function wh(r){var s=Fc(r);return s.length==1&&s[0][2]?tp(s[0][0],s[0][1]):function(c){return c===r||Cc(c,r,s)}}function xh(r,s){return Wc(r)&&ep(s)?tp(Hn(r),s):function(c){var p=tu(c,r);return p===n&&p===s?nu(c,r):js(s,p,$|k)}}function ea(r,s,c,p,m){r!==s&&xc(s,function(x,R){if(m||(m=new En),at(x))n_(r,s,R,c,ea,p,m);else{var L=p?p(Vc(r,R),x,R+"",r,s,m):n;L===n&&(L=x),_c(r,R,L)}},Kt)}function n_(r,s,c,p,m,x,R){var L=Vc(r,c),M=Vc(s,c),H=R.get(M);if(H){_c(r,c,H);return}var F=x?x(L,M,c+"",r,s,R):n,K=F===n;if(K){var ie=Te(M),de=!ie&&Mr(M),we=!ie&&!de&&Zi(M);F=M,ie||de||we?Te(L)?F=L:ht(L)?F=Zt(L):de?(K=!1,F=Ph(M,!0)):we?(K=!1,F=Mh(M,!0)):F=[]:Hs(M)||ai(M)?(F=L,ai(L)?F=Rp(L):(!at(L)||ur(L))&&(F=Jh(M))):K=!1}K&&(R.set(M,F),m(F,M,p,x,R),R.delete(M)),_c(r,c,F)}function $h(r,s){var c=r.length;if(c)return s+=s<0?c:0,cr(s,c)?r[s]:n}function kh(r,s,c){s.length?s=ot(s,function(x){return Te(x)?function(R){return ii(R,x.length===1?x[0]:x)}:x}):s=[Gt];var p=-1;s=ot(s,Jt(ve()));var m=_h(r,function(x,R,L){var M=ot(s,function(H){return H(x)});return{criteria:M,index:++p,value:x}});return Ay(m,function(x,R){return g_(x,R,c)})}function r_(r,s){return Eh(r,s,function(c,p){return nu(r,p)})}function Eh(r,s,c){for(var p=-1,m=s.length,x={};++p<m;){var R=s[p],L=ii(r,R);c(L,R)&&Ns(x,Lr(R,r),L)}return x}function i_(r){return function(s){return ii(s,r)}}function Ac(r,s,c,p){var m=p?Ty:Mi,x=-1,R=s.length,L=r;for(r===s&&(s=Zt(s)),c&&(L=ot(r,Jt(c)));++x<R;)for(var M=0,H=s[x],F=c?c(H):H;(M=m(L,F,M,p))>-1;)L!==r&&qo.call(L,M,1),qo.call(r,M,1);return r}function Ch(r,s){for(var c=r?s.length:0,p=c-1;c--;){var m=s[c];if(c==p||m!==x){var x=m;cr(m)?qo.call(r,m,1):Lc(r,m)}}return r}function Ic(r,s){return r+Vo(oh()*(s-r+1))}function s_(r,s,c,p){for(var m=-1,x=wt(Zo((s-r)/(c||1)),0),R=D(x);x--;)R[p?x:++m]=r,r+=c;return R}function Rc(r,s){var c="";if(!r||s<1||s>ge)return c;do s%2&&(c+=r),s=Vo(s/2),s&&(r+=r);while(s);return c}function je(r,s){return Kc(np(r,s,Gt),r+"")}function o_(r){return ch(Vi(r))}function a_(r,s){var c=Vi(r);return ua(c,ri(s,0,c.length))}function Ns(r,s,c,p){if(!at(r))return r;s=Lr(s,r);for(var m=-1,x=s.length,R=x-1,L=r;L!=null&&++m<x;){var M=Hn(s[m]),H=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(m!=R){var F=L[M];H=p?p(F,M,L):n,H===n&&(H=at(F)?F:cr(s[m+1])?[]:{})}Ps(L,M,H),L=L[M]}return r}var Sh=Ko?function(r,s){return Ko.set(r,s),r}:Gt,l_=Wo?function(r,s){return Wo(r,"toString",{configurable:!0,enumerable:!1,value:iu(s),writable:!0})}:Gt;function c_(r){return ua(Vi(r))}function mn(r,s,c){var p=-1,m=r.length;s<0&&(s=-s>m?0:m+s),c=c>m?m:c,c<0&&(c+=m),m=s>c?0:c-s>>>0,s>>>=0;for(var x=D(m);++p<m;)x[p]=r[p+s];return x}function u_(r,s){var c;return Rr(r,function(p,m,x){return c=s(p,m,x),!c}),!!c}function ta(r,s,c){var p=0,m=r==null?p:r.length;if(typeof s=="number"&&s===s&&m<=Y){for(;p<m;){var x=p+m>>>1,R=r[x];R!==null&&!tn(R)&&(c?R<=s:R<s)?p=x+1:m=x}return m}return Oc(r,s,Gt,c)}function Oc(r,s,c,p){var m=0,x=r==null?0:r.length;if(x===0)return 0;s=c(s);for(var R=s!==s,L=s===null,M=tn(s),H=s===n;m<x;){var F=Vo((m+x)/2),K=c(r[F]),ie=K!==n,de=K===null,we=K===K,Oe=tn(K);if(R)var xe=p||we;else H?xe=we&&(p||ie):L?xe=we&&ie&&(p||!de):M?xe=we&&ie&&!de&&(p||!Oe):de||Oe?xe=!1:xe=p?K<=s:K<s;xe?m=F+1:x=F}return Lt(x,Me)}function Th(r,s){for(var c=-1,p=r.length,m=0,x=[];++c<p;){var R=r[c],L=s?s(R):R;if(!c||!Cn(L,M)){var M=L;x[m++]=R===0?0:R}}return x}function Ah(r){return typeof r=="number"?r:tn(r)?he:+r}function en(r){if(typeof r=="string")return r;if(Te(r))return ot(r,en)+"";if(tn(r))return ah?ah.call(r):"";var s=r+"";return s=="0"&&1/r==-ue?"-0":s}function Or(r,s,c){var p=-1,m=Po,x=r.length,R=!0,L=[],M=L;if(c)R=!1,m=ac;else if(x>=o){var H=s?null:w_(r);if(H)return Bo(H);R=!1,m=Ts,M=new ni}else M=s?[]:L;e:for(;++p<x;){var F=r[p],K=s?s(F):F;if(F=c||F!==0?F:0,R&&K===K){for(var ie=M.length;ie--;)if(M[ie]===K)continue e;s&&M.push(K),L.push(F)}else m(M,K,c)||(M!==L&&M.push(K),L.push(F))}return L}function Lc(r,s){return s=Lr(s,r),r=rp(r,s),r==null||delete r[Hn(vn(s))]}function Ih(r,s,c,p){return Ns(r,s,c(ii(r,s)),p)}function na(r,s,c,p){for(var m=r.length,x=p?m:-1;(p?x--:++x<m)&&s(r[x],x,r););return c?mn(r,p?0:x,p?x+1:m):mn(r,p?x+1:0,p?m:x)}function Rh(r,s){var c=r;return c instanceof He&&(c=c.value()),lc(s,function(p,m){return m.func.apply(m.thisArg,Tr([p],m.args))},c)}function Pc(r,s,c){var p=r.length;if(p<2)return p?Or(r[0]):[];for(var m=-1,x=D(p);++m<p;)for(var R=r[m],L=-1;++L<p;)L!=m&&(x[m]=Ms(x[m]||R,r[L],s,c));return Or(It(x,1),s,c)}function Oh(r,s,c){for(var p=-1,m=r.length,x=s.length,R={};++p<m;){var L=p<x?s[p]:n;c(R,r[p],L)}return R}function Mc(r){return ht(r)?r:[]}function Bc(r){return typeof r=="function"?r:Gt}function Lr(r,s){return Te(r)?r:Wc(r,s)?[r]:ap(Qe(r))}var d_=je;function Pr(r,s,c){var p=r.length;return c=c===n?p:c,!s&&c>=p?r:mn(r,s,c)}var Lh=Xy||function(r){return At.clearTimeout(r)};function Ph(r,s){if(s)return r.slice();var c=r.length,p=th?th(c):new r.constructor(c);return r.copy(p),p}function jc(r){var s=new r.constructor(r.byteLength);return new Ho(s).set(new Ho(r)),s}function f_(r,s){var c=s?jc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function h_(r){var s=new r.constructor(r.source,vf.exec(r));return s.lastIndex=r.lastIndex,s}function p_(r){return Ls?Xe(Ls.call(r)):{}}function Mh(r,s){var c=s?jc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function Bh(r,s){if(r!==s){var c=r!==n,p=r===null,m=r===r,x=tn(r),R=s!==n,L=s===null,M=s===s,H=tn(s);if(!L&&!H&&!x&&r>s||x&&R&&M&&!L&&!H||p&&R&&M||!c&&M||!m)return 1;if(!p&&!x&&!H&&r<s||H&&c&&m&&!p&&!x||L&&c&&m||!R&&m||!M)return-1}return 0}function g_(r,s,c){for(var p=-1,m=r.criteria,x=s.criteria,R=m.length,L=c.length;++p<R;){var M=Bh(m[p],x[p]);if(M){if(p>=L)return M;var H=c[p];return M*(H=="desc"?-1:1)}}return r.index-s.index}function jh(r,s,c,p){for(var m=-1,x=r.length,R=c.length,L=-1,M=s.length,H=wt(x-R,0),F=D(M+H),K=!p;++L<M;)F[L]=s[L];for(;++m<R;)(K||m<x)&&(F[c[m]]=r[m]);for(;H--;)F[L++]=r[m++];return F}function Nh(r,s,c,p){for(var m=-1,x=r.length,R=-1,L=c.length,M=-1,H=s.length,F=wt(x-L,0),K=D(F+H),ie=!p;++m<F;)K[m]=r[m];for(var de=m;++M<H;)K[de+M]=s[M];for(;++R<L;)(ie||m<x)&&(K[de+c[R]]=r[m++]);return K}function Zt(r,s){var c=-1,p=r.length;for(s||(s=D(p));++c<p;)s[c]=r[c];return s}function zn(r,s,c,p){var m=!c;c||(c={});for(var x=-1,R=s.length;++x<R;){var L=s[x],M=p?p(c[L],r[L],L,c,r):n;M===n&&(M=r[L]),m?or(c,L,M):Ps(c,L,M)}return c}function m_(r,s){return zn(r,qc(r),s)}function v_(r,s){return zn(r,Yh(r),s)}function ra(r,s){return function(c,p){var m=Te(c)?xy:Db,x=s?s():{};return m(c,r,ve(p,2),x)}}function Fi(r){return je(function(s,c){var p=-1,m=c.length,x=m>1?c[m-1]:n,R=m>2?c[2]:n;for(x=r.length>3&&typeof x=="function"?(m--,x):n,R&&Dt(c[0],c[1],R)&&(x=m<3?n:x,m=1),s=Xe(s);++p<m;){var L=c[p];L&&r(s,L,p,x)}return s})}function Dh(r,s){return function(c,p){if(c==null)return c;if(!Vt(c))return r(c,p);for(var m=c.length,x=s?m:-1,R=Xe(c);(s?x--:++x<m)&&p(R[x],x,R)!==!1;);return c}}function Uh(r){return function(s,c,p){for(var m=-1,x=Xe(s),R=p(s),L=R.length;L--;){var M=R[r?L:++m];if(c(x[M],M,x)===!1)break}return s}}function y_(r,s,c){var p=s&_,m=Ds(r);function x(){var R=this&&this!==At&&this instanceof x?m:r;return R.apply(p?c:this,arguments)}return x}function zh(r){return function(s){s=Qe(s);var c=Bi(s)?kn(s):n,p=c?c[0]:s.charAt(0),m=c?Pr(c,1).join(""):s.slice(1);return p[r]()+m}}function qi(r){return function(s){return lc(Dp(Np(s).replace(ly,"")),r,"")}}function Ds(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Hi(r.prototype),p=r.apply(c,s);return at(p)?p:c}}function b_(r,s,c){var p=Ds(r);function m(){for(var x=arguments.length,R=D(x),L=x,M=Wi(m);L--;)R[L]=arguments[L];var H=x<3&&R[0]!==M&&R[x-1]!==M?[]:Ar(R,M);if(x-=H.length,x<c)return Zh(r,s,ia,m.placeholder,n,R,H,n,n,c-x);var F=this&&this!==At&&this instanceof m?p:r;return Xt(F,this,R)}return m}function Hh(r){return function(s,c,p){var m=Xe(s);if(!Vt(s)){var x=ve(c,3);s=kt(s),c=function(L){return x(m[L],L,m)}}var R=r(s,c,p);return R>-1?m[x?s[R]:R]:n}}function Fh(r){return lr(function(s){var c=s.length,p=c,m=pn.prototype.thru;for(r&&s.reverse();p--;){var x=s[p];if(typeof x!="function")throw new hn(l);if(m&&!R&&la(x)=="wrapper")var R=new pn([],!0)}for(p=R?p:c;++p<c;){x=s[p];var L=la(x),M=L=="wrapper"?Hc(x):n;M&&Zc(M[0])&&M[1]==(j|S|T|U)&&!M[4].length&&M[9]==1?R=R[la(M[0])].apply(R,M[3]):R=x.length==1&&Zc(x)?R[L]():R.thru(x)}return function(){var H=arguments,F=H[0];if(R&&H.length==1&&Te(F))return R.plant(F).value();for(var K=0,ie=c?s[K].apply(this,H):F;++K<c;)ie=s[K].call(this,ie);return ie}})}function ia(r,s,c,p,m,x,R,L,M,H){var F=s&j,K=s&_,ie=s&C,de=s&(S|E),we=s&te,Oe=ie?n:Ds(r);function xe(){for(var De=arguments.length,qe=D(De),nn=De;nn--;)qe[nn]=arguments[nn];if(de)var Ut=Wi(xe),rn=Ry(qe,Ut);if(p&&(qe=jh(qe,p,m,de)),x&&(qe=Nh(qe,x,R,de)),De-=rn,de&&De<H){var pt=Ar(qe,Ut);return Zh(r,s,ia,xe.placeholder,c,qe,pt,L,M,H-De)}var Sn=K?c:this,fr=ie?Sn[r]:r;return De=qe.length,L?qe=D_(qe,L):we&&De>1&&qe.reverse(),F&&M<De&&(qe.length=M),this&&this!==At&&this instanceof xe&&(fr=Oe||Ds(fr)),fr.apply(Sn,qe)}return xe}function qh(r,s){return function(c,p){return Vb(c,r,s(p),{})}}function sa(r,s){return function(c,p){var m;if(c===n&&p===n)return s;if(c!==n&&(m=c),p!==n){if(m===n)return p;typeof c=="string"||typeof p=="string"?(c=en(c),p=en(p)):(c=Ah(c),p=Ah(p)),m=r(c,p)}return m}}function Nc(r){return lr(function(s){return s=ot(s,Jt(ve())),je(function(c){var p=this;return r(s,function(m){return Xt(m,p,c)})})})}function oa(r,s){s=s===n?" ":en(s);var c=s.length;if(c<2)return c?Rc(s,r):s;var p=Rc(s,Zo(r/ji(s)));return Bi(s)?Pr(kn(p),0,r).join(""):p.slice(0,r)}function __(r,s,c,p){var m=s&_,x=Ds(r);function R(){for(var L=-1,M=arguments.length,H=-1,F=p.length,K=D(F+M),ie=this&&this!==At&&this instanceof R?x:r;++H<F;)K[H]=p[H];for(;M--;)K[H++]=arguments[++L];return Xt(ie,m?c:this,K)}return R}function Wh(r){return function(s,c,p){return p&&typeof p!="number"&&Dt(s,c,p)&&(c=p=n),s=dr(s),c===n?(c=s,s=0):c=dr(c),p=p===n?s<c?1:-1:dr(p),s_(s,c,p,r)}}function aa(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=yn(s),c=yn(c)),r(s,c)}}function Zh(r,s,c,p,m,x,R,L,M,H){var F=s&S,K=F?R:n,ie=F?n:R,de=F?x:n,we=F?n:x;s|=F?T:O,s&=~(F?O:T),s&I||(s&=~(_|C));var Oe=[r,s,m,de,K,we,ie,L,M,H],xe=c.apply(n,Oe);return Zc(r)&&ip(xe,Oe),xe.placeholder=p,sp(xe,r,s)}function Dc(r){var s=_t[r];return function(c,p){if(c=yn(c),p=p==null?0:Lt(Ae(p),292),p&&sh(c)){var m=(Qe(c)+"e").split("e"),x=s(m[0]+"e"+(+m[1]+p));return m=(Qe(x)+"e").split("e"),+(m[0]+"e"+(+m[1]-p))}return s(c)}}var w_=Ui&&1/Bo(new Ui([,-0]))[1]==ue?function(r){return new Ui(r)}:au;function Vh(r){return function(s){var c=Pt(s);return c==Fe?gc(s):c==bt?Ny(s):Iy(s,r(s))}}function ar(r,s,c,p,m,x,R,L){var M=s&C;if(!M&&typeof r!="function")throw new hn(l);var H=p?p.length:0;if(H||(s&=~(T|O),p=m=n),R=R===n?R:wt(Ae(R),0),L=L===n?L:Ae(L),H-=m?m.length:0,s&O){var F=p,K=m;p=m=n}var ie=M?n:Hc(r),de=[r,s,c,p,m,F,K,x,R,L];if(ie&&B_(de,ie),r=de[0],s=de[1],c=de[2],p=de[3],m=de[4],L=de[9]=de[9]===n?M?0:r.length:wt(de[9]-H,0),!L&&s&(S|E)&&(s&=~(S|E)),!s||s==_)var we=y_(r,s,c);else s==S||s==E?we=b_(r,s,L):(s==T||s==(_|T))&&!m.length?we=__(r,s,c,p):we=ia.apply(n,de);var Oe=ie?Sh:ip;return sp(Oe(we,de),r,s)}function Kh(r,s,c,p){return r===n||Cn(r,Di[c])&&!Ye.call(p,c)?s:r}function Gh(r,s,c,p,m,x){return at(r)&&at(s)&&(x.set(s,r),ea(r,s,n,Gh,x),x.delete(s)),r}function x_(r){return Hs(r)?n:r}function Qh(r,s,c,p,m,x){var R=c&$,L=r.length,M=s.length;if(L!=M&&!(R&&M>L))return!1;var H=x.get(r),F=x.get(s);if(H&&F)return H==s&&F==r;var K=-1,ie=!0,de=c&k?new ni:n;for(x.set(r,s),x.set(s,r);++K<L;){var we=r[K],Oe=s[K];if(p)var xe=R?p(Oe,we,K,s,r,x):p(we,Oe,K,r,s,x);if(xe!==n){if(xe)continue;ie=!1;break}if(de){if(!cc(s,function(De,qe){if(!Ts(de,qe)&&(we===De||m(we,De,c,p,x)))return de.push(qe)})){ie=!1;break}}else if(!(we===Oe||m(we,Oe,c,p,x))){ie=!1;break}}return x.delete(r),x.delete(s),ie}function $_(r,s,c,p,m,x,R){switch(c){case Wt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Yt:return!(r.byteLength!=s.byteLength||!x(new Ho(r),new Ho(s)));case N:case ke:case Tt:return Cn(+r,+s);case vt:return r.name==s.name&&r.message==s.message;case Nn:case xn:return r==s+"";case Fe:var L=gc;case bt:var M=p&$;if(L||(L=Bo),r.size!=s.size&&!M)return!1;var H=R.get(r);if(H)return H==s;p|=k,R.set(r,s);var F=Qh(L(r),L(s),p,m,x,R);return R.delete(r),F;case Dn:if(Ls)return Ls.call(r)==Ls.call(s)}return!1}function k_(r,s,c,p,m,x){var R=c&$,L=Uc(r),M=L.length,H=Uc(s),F=H.length;if(M!=F&&!R)return!1;for(var K=M;K--;){var ie=L[K];if(!(R?ie in s:Ye.call(s,ie)))return!1}var de=x.get(r),we=x.get(s);if(de&&we)return de==s&&we==r;var Oe=!0;x.set(r,s),x.set(s,r);for(var xe=R;++K<M;){ie=L[K];var De=r[ie],qe=s[ie];if(p)var nn=R?p(qe,De,ie,s,r,x):p(De,qe,ie,r,s,x);if(!(nn===n?De===qe||m(De,qe,c,p,x):nn)){Oe=!1;break}xe||(xe=ie=="constructor")}if(Oe&&!xe){var Ut=r.constructor,rn=s.constructor;Ut!=rn&&"constructor"in r&&"constructor"in s&&!(typeof Ut=="function"&&Ut instanceof Ut&&typeof rn=="function"&&rn instanceof rn)&&(Oe=!1)}return x.delete(r),x.delete(s),Oe}function lr(r){return Kc(np(r,n,dp),r+"")}function Uc(r){return mh(r,kt,qc)}function zc(r){return mh(r,Kt,Yh)}var Hc=Ko?function(r){return Ko.get(r)}:au;function la(r){for(var s=r.name+"",c=zi[s],p=Ye.call(zi,s)?c.length:0;p--;){var m=c[p],x=m.func;if(x==null||x==r)return m.name}return s}function Wi(r){var s=Ye.call(y,"placeholder")?y:r;return s.placeholder}function ve(){var r=y.iteratee||su;return r=r===su?bh:r,arguments.length?r(arguments[0],arguments[1]):r}function ca(r,s){var c=r.__data__;return O_(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Fc(r){for(var s=kt(r),c=s.length;c--;){var p=s[c],m=r[p];s[c]=[p,m,ep(m)]}return s}function si(r,s){var c=My(r,s);return yh(c)?c:n}function E_(r){var s=Ye.call(r,ei),c=r[ei];try{r[ei]=n;var p=!0}catch{}var m=Uo.call(r);return p&&(s?r[ei]=c:delete r[ei]),m}var qc=vc?function(r){return r==null?[]:(r=Xe(r),Sr(vc(r),function(s){return rh.call(r,s)}))}:lu,Yh=vc?function(r){for(var s=[];r;)Tr(s,qc(r)),r=Fo(r);return s}:lu,Pt=Nt;(yc&&Pt(new yc(new ArrayBuffer(1)))!=Wt||Is&&Pt(new Is)!=Fe||bc&&Pt(bc.resolve())!=Er||Ui&&Pt(new Ui)!=bt||Rs&&Pt(new Rs)!=$e)&&(Pt=function(r){var s=Nt(r),c=s==ft?r.constructor:n,p=c?oi(c):"";if(p)switch(p){case ab:return Wt;case lb:return Fe;case cb:return Er;case ub:return bt;case db:return $e}return s});function C_(r,s,c){for(var p=-1,m=c.length;++p<m;){var x=c[p],R=x.size;switch(x.type){case"drop":r+=R;break;case"dropRight":s-=R;break;case"take":s=Lt(s,r+R);break;case"takeRight":r=wt(r,s-R);break}}return{start:r,end:s}}function S_(r){var s=r.match(L2);return s?s[1].split(P2):[]}function Xh(r,s,c){s=Lr(s,r);for(var p=-1,m=s.length,x=!1;++p<m;){var R=Hn(s[p]);if(!(x=r!=null&&c(r,R)))break;r=r[R]}return x||++p!=m?x:(m=r==null?0:r.length,!!m&&ma(m)&&cr(R,m)&&(Te(r)||ai(r)))}function T_(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Ye.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Jh(r){return typeof r.constructor=="function"&&!Us(r)?Hi(Fo(r)):{}}function A_(r,s,c){var p=r.constructor;switch(s){case Yt:return jc(r);case N:case ke:return new p(+r);case Wt:return f_(r,c);case $n:case nr:case rr:case Cr:case Ri:case Oi:case Li:case Ql:case Yl:return Mh(r,c);case Fe:return new p;case Tt:case xn:return new p(r);case Nn:return h_(r);case bt:return new p;case Dn:return p_(r)}}function I_(r,s){var c=s.length;if(!c)return r;var p=c-1;return s[p]=(c>1?"& ":"")+s[p],s=s.join(c>2?", ":" "),r.replace(O2,`{
/* [wrapped with `+s+`] */
`)}function R_(r){return Te(r)||ai(r)||!!(ih&&r&&r[ih])}function cr(r,s){var c=typeof r;return s=s??ge,!!s&&(c=="number"||c!="symbol"&&F2.test(r))&&r>-1&&r%1==0&&r<s}function Dt(r,s,c){if(!at(c))return!1;var p=typeof s;return(p=="number"?Vt(c)&&cr(s,c.length):p=="string"&&s in c)?Cn(c[s],r):!1}function Wc(r,s){if(Te(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||tn(r)?!0:T2.test(r)||!S2.test(r)||s!=null&&r in Xe(s)}function O_(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Zc(r){var s=la(r),c=y[s];if(typeof c!="function"||!(s in He.prototype))return!1;if(r===c)return!0;var p=Hc(c);return!!p&&r===p[0]}function L_(r){return!!eh&&eh in r}var P_=No?ur:cu;function Us(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Di;return r===c}function ep(r){return r===r&&!at(r)}function tp(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in Xe(c))}}function M_(r){var s=pa(r,function(p){return c.size===f&&c.clear(),p}),c=s.cache;return s}function B_(r,s){var c=r[1],p=s[1],m=c|p,x=m<(_|C|j),R=p==j&&c==S||p==j&&c==U&&r[7].length<=s[8]||p==(j|U)&&s[7].length<=s[8]&&c==S;if(!(x||R))return r;p&_&&(r[2]=s[2],m|=c&_?0:I);var L=s[3];if(L){var M=r[3];r[3]=M?jh(M,L,s[4]):L,r[4]=M?Ar(r[3],h):s[4]}return L=s[5],L&&(M=r[5],r[5]=M?Nh(M,L,s[6]):L,r[6]=M?Ar(r[5],h):s[6]),L=s[7],L&&(r[7]=L),p&j&&(r[8]=r[8]==null?s[8]:Lt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function j_(r){var s=[];if(r!=null)for(var c in Xe(r))s.push(c);return s}function N_(r){return Uo.call(r)}function np(r,s,c){return s=wt(s===n?r.length-1:s,0),function(){for(var p=arguments,m=-1,x=wt(p.length-s,0),R=D(x);++m<x;)R[m]=p[s+m];m=-1;for(var L=D(s+1);++m<s;)L[m]=p[m];return L[s]=c(R),Xt(r,this,L)}}function rp(r,s){return s.length<2?r:ii(r,mn(s,0,-1))}function D_(r,s){for(var c=r.length,p=Lt(s.length,c),m=Zt(r);p--;){var x=s[p];r[p]=cr(x,c)?m[x]:n}return r}function Vc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var ip=op(Sh),zs=eb||function(r,s){return At.setTimeout(r,s)},Kc=op(l_);function sp(r,s,c){var p=s+"";return Kc(r,I_(p,U_(S_(p),c)))}function op(r){var s=0,c=0;return function(){var p=ib(),m=Q-(p-c);if(c=p,m>0){if(++s>=V)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ua(r,s){var c=-1,p=r.length,m=p-1;for(s=s===n?p:s;++c<s;){var x=Ic(c,m),R=r[x];r[x]=r[c],r[c]=R}return r.length=s,r}var ap=M_(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(A2,function(c,p,m,x){s.push(m?x.replace(j2,"$1"):p||c)}),s});function Hn(r){if(typeof r=="string"||tn(r))return r;var s=r+"";return s=="0"&&1/r==-ue?"-0":s}function oi(r){if(r!=null){try{return Do.call(r)}catch{}try{return r+""}catch{}}return""}function U_(r,s){return fn(fe,function(c){var p="_."+c[0];s&c[1]&&!Po(r,p)&&r.push(p)}),r.sort()}function lp(r){if(r instanceof He)return r.clone();var s=new pn(r.__wrapped__,r.__chain__);return s.__actions__=Zt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function z_(r,s,c){(c?Dt(r,s,c):s===n)?s=1:s=wt(Ae(s),0);var p=r==null?0:r.length;if(!p||s<1)return[];for(var m=0,x=0,R=D(Zo(p/s));m<p;)R[x++]=mn(r,m,m+=s);return R}function H_(r){for(var s=-1,c=r==null?0:r.length,p=0,m=[];++s<c;){var x=r[s];x&&(m[p++]=x)}return m}function F_(){var r=arguments.length;if(!r)return[];for(var s=D(r-1),c=arguments[0],p=r;p--;)s[p-1]=arguments[p];return Tr(Te(c)?Zt(c):[c],It(s,1))}var q_=je(function(r,s){return ht(r)?Ms(r,It(s,1,ht,!0)):[]}),W_=je(function(r,s){var c=vn(s);return ht(c)&&(c=n),ht(r)?Ms(r,It(s,1,ht,!0),ve(c,2)):[]}),Z_=je(function(r,s){var c=vn(s);return ht(c)&&(c=n),ht(r)?Ms(r,It(s,1,ht,!0),n,c):[]});function V_(r,s,c){var p=r==null?0:r.length;return p?(s=c||s===n?1:Ae(s),mn(r,s<0?0:s,p)):[]}function K_(r,s,c){var p=r==null?0:r.length;return p?(s=c||s===n?1:Ae(s),s=p-s,mn(r,0,s<0?0:s)):[]}function G_(r,s){return r&&r.length?na(r,ve(s,3),!0,!0):[]}function Q_(r,s){return r&&r.length?na(r,ve(s,3),!0):[]}function Y_(r,s,c,p){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&Dt(r,s,c)&&(c=0,p=m),Fb(r,s,c,p)):[]}function cp(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=c==null?0:Ae(c);return m<0&&(m=wt(p+m,0)),Mo(r,ve(s,3),m)}function up(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=p-1;return c!==n&&(m=Ae(c),m=c<0?wt(p+m,0):Lt(m,p-1)),Mo(r,ve(s,3),m,!0)}function dp(r){var s=r==null?0:r.length;return s?It(r,1):[]}function X_(r){var s=r==null?0:r.length;return s?It(r,ue):[]}function J_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Ae(s),It(r,s)):[]}function ew(r){for(var s=-1,c=r==null?0:r.length,p={};++s<c;){var m=r[s];p[m[0]]=m[1]}return p}function fp(r){return r&&r.length?r[0]:n}function tw(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=c==null?0:Ae(c);return m<0&&(m=wt(p+m,0)),Mi(r,s,m)}function nw(r){var s=r==null?0:r.length;return s?mn(r,0,-1):[]}var rw=je(function(r){var s=ot(r,Mc);return s.length&&s[0]===r[0]?Ec(s):[]}),iw=je(function(r){var s=vn(r),c=ot(r,Mc);return s===vn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?Ec(c,ve(s,2)):[]}),sw=je(function(r){var s=vn(r),c=ot(r,Mc);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?Ec(c,n,s):[]});function ow(r,s){return r==null?"":nb.call(r,s)}function vn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function aw(r,s,c){var p=r==null?0:r.length;if(!p)return-1;var m=p;return c!==n&&(m=Ae(c),m=m<0?wt(p+m,0):Lt(m,p-1)),s===s?Uy(r,s,m):Mo(r,Zf,m,!0)}function lw(r,s){return r&&r.length?$h(r,Ae(s)):n}var cw=je(hp);function hp(r,s){return r&&r.length&&s&&s.length?Ac(r,s):r}function uw(r,s,c){return r&&r.length&&s&&s.length?Ac(r,s,ve(c,2)):r}function dw(r,s,c){return r&&r.length&&s&&s.length?Ac(r,s,n,c):r}var fw=lr(function(r,s){var c=r==null?0:r.length,p=wc(r,s);return Ch(r,ot(s,function(m){return cr(m,c)?+m:m}).sort(Bh)),p});function hw(r,s){var c=[];if(!(r&&r.length))return c;var p=-1,m=[],x=r.length;for(s=ve(s,3);++p<x;){var R=r[p];s(R,p,r)&&(c.push(R),m.push(p))}return Ch(r,m),c}function Gc(r){return r==null?r:ob.call(r)}function pw(r,s,c){var p=r==null?0:r.length;return p?(c&&typeof c!="number"&&Dt(r,s,c)?(s=0,c=p):(s=s==null?0:Ae(s),c=c===n?p:Ae(c)),mn(r,s,c)):[]}function gw(r,s){return ta(r,s)}function mw(r,s,c){return Oc(r,s,ve(c,2))}function vw(r,s){var c=r==null?0:r.length;if(c){var p=ta(r,s);if(p<c&&Cn(r[p],s))return p}return-1}function yw(r,s){return ta(r,s,!0)}function bw(r,s,c){return Oc(r,s,ve(c,2),!0)}function _w(r,s){var c=r==null?0:r.length;if(c){var p=ta(r,s,!0)-1;if(Cn(r[p],s))return p}return-1}function ww(r){return r&&r.length?Th(r):[]}function xw(r,s){return r&&r.length?Th(r,ve(s,2)):[]}function $w(r){var s=r==null?0:r.length;return s?mn(r,1,s):[]}function kw(r,s,c){return r&&r.length?(s=c||s===n?1:Ae(s),mn(r,0,s<0?0:s)):[]}function Ew(r,s,c){var p=r==null?0:r.length;return p?(s=c||s===n?1:Ae(s),s=p-s,mn(r,s<0?0:s,p)):[]}function Cw(r,s){return r&&r.length?na(r,ve(s,3),!1,!0):[]}function Sw(r,s){return r&&r.length?na(r,ve(s,3)):[]}var Tw=je(function(r){return Or(It(r,1,ht,!0))}),Aw=je(function(r){var s=vn(r);return ht(s)&&(s=n),Or(It(r,1,ht,!0),ve(s,2))}),Iw=je(function(r){var s=vn(r);return s=typeof s=="function"?s:n,Or(It(r,1,ht,!0),n,s)});function Rw(r){return r&&r.length?Or(r):[]}function Ow(r,s){return r&&r.length?Or(r,ve(s,2)):[]}function Lw(r,s){return s=typeof s=="function"?s:n,r&&r.length?Or(r,n,s):[]}function Qc(r){if(!(r&&r.length))return[];var s=0;return r=Sr(r,function(c){if(ht(c))return s=wt(c.length,s),!0}),hc(s,function(c){return ot(r,uc(c))})}function pp(r,s){if(!(r&&r.length))return[];var c=Qc(r);return s==null?c:ot(c,function(p){return Xt(s,n,p)})}var Pw=je(function(r,s){return ht(r)?Ms(r,s):[]}),Mw=je(function(r){return Pc(Sr(r,ht))}),Bw=je(function(r){var s=vn(r);return ht(s)&&(s=n),Pc(Sr(r,ht),ve(s,2))}),jw=je(function(r){var s=vn(r);return s=typeof s=="function"?s:n,Pc(Sr(r,ht),n,s)}),Nw=je(Qc);function Dw(r,s){return Oh(r||[],s||[],Ps)}function Uw(r,s){return Oh(r||[],s||[],Ns)}var zw=je(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,pp(r,c)});function gp(r){var s=y(r);return s.__chain__=!0,s}function Hw(r,s){return s(r),r}function da(r,s){return s(r)}var Fw=lr(function(r){var s=r.length,c=s?r[0]:0,p=this.__wrapped__,m=function(x){return wc(x,r)};return s>1||this.__actions__.length||!(p instanceof He)||!cr(c)?this.thru(m):(p=p.slice(c,+c+(s?1:0)),p.__actions__.push({func:da,args:[m],thisArg:n}),new pn(p,this.__chain__).thru(function(x){return s&&!x.length&&x.push(n),x}))});function qw(){return gp(this)}function Ww(){return new pn(this.value(),this.__chain__)}function Zw(){this.__values__===n&&(this.__values__=Ap(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function Vw(){return this}function Kw(r){for(var s,c=this;c instanceof Qo;){var p=lp(c);p.__index__=0,p.__values__=n,s?m.__wrapped__=p:s=p;var m=p;c=c.__wrapped__}return m.__wrapped__=r,s}function Gw(){var r=this.__wrapped__;if(r instanceof He){var s=r;return this.__actions__.length&&(s=new He(this)),s=s.reverse(),s.__actions__.push({func:da,args:[Gc],thisArg:n}),new pn(s,this.__chain__)}return this.thru(Gc)}function Qw(){return Rh(this.__wrapped__,this.__actions__)}var Yw=ra(function(r,s,c){Ye.call(r,c)?++r[c]:or(r,c,1)});function Xw(r,s,c){var p=Te(r)?qf:Hb;return c&&Dt(r,s,c)&&(s=n),p(r,ve(s,3))}function Jw(r,s){var c=Te(r)?Sr:ph;return c(r,ve(s,3))}var e3=Hh(cp),t3=Hh(up);function n3(r,s){return It(fa(r,s),1)}function r3(r,s){return It(fa(r,s),ue)}function i3(r,s,c){return c=c===n?1:Ae(c),It(fa(r,s),c)}function mp(r,s){var c=Te(r)?fn:Rr;return c(r,ve(s,3))}function vp(r,s){var c=Te(r)?$y:hh;return c(r,ve(s,3))}var s3=ra(function(r,s,c){Ye.call(r,c)?r[c].push(s):or(r,c,[s])});function o3(r,s,c,p){r=Vt(r)?r:Vi(r),c=c&&!p?Ae(c):0;var m=r.length;return c<0&&(c=wt(m+c,0)),va(r)?c<=m&&r.indexOf(s,c)>-1:!!m&&Mi(r,s,c)>-1}var a3=je(function(r,s,c){var p=-1,m=typeof s=="function",x=Vt(r)?D(r.length):[];return Rr(r,function(R){x[++p]=m?Xt(s,R,c):Bs(R,s,c)}),x}),l3=ra(function(r,s,c){or(r,c,s)});function fa(r,s){var c=Te(r)?ot:_h;return c(r,ve(s,3))}function c3(r,s,c,p){return r==null?[]:(Te(s)||(s=s==null?[]:[s]),c=p?n:c,Te(c)||(c=c==null?[]:[c]),kh(r,s,c))}var u3=ra(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function d3(r,s,c){var p=Te(r)?lc:Kf,m=arguments.length<3;return p(r,ve(s,4),c,m,Rr)}function f3(r,s,c){var p=Te(r)?ky:Kf,m=arguments.length<3;return p(r,ve(s,4),c,m,hh)}function h3(r,s){var c=Te(r)?Sr:ph;return c(r,ga(ve(s,3)))}function p3(r){var s=Te(r)?ch:o_;return s(r)}function g3(r,s,c){(c?Dt(r,s,c):s===n)?s=1:s=Ae(s);var p=Te(r)?jb:a_;return p(r,s)}function m3(r){var s=Te(r)?Nb:c_;return s(r)}function v3(r){if(r==null)return 0;if(Vt(r))return va(r)?ji(r):r.length;var s=Pt(r);return s==Fe||s==bt?r.size:Sc(r).length}function y3(r,s,c){var p=Te(r)?cc:u_;return c&&Dt(r,s,c)&&(s=n),p(r,ve(s,3))}var b3=je(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Dt(r,s[0],s[1])?s=[]:c>2&&Dt(s[0],s[1],s[2])&&(s=[s[0]]),kh(r,It(s,1),[])}),ha=Jy||function(){return At.Date.now()};function _3(r,s){if(typeof s!="function")throw new hn(l);return r=Ae(r),function(){if(--r<1)return s.apply(this,arguments)}}function yp(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,ar(r,j,n,n,n,n,s)}function bp(r,s){var c;if(typeof s!="function")throw new hn(l);return r=Ae(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Yc=je(function(r,s,c){var p=_;if(c.length){var m=Ar(c,Wi(Yc));p|=T}return ar(r,p,s,c,m)}),_p=je(function(r,s,c){var p=_|C;if(c.length){var m=Ar(c,Wi(_p));p|=T}return ar(s,p,r,c,m)});function wp(r,s,c){s=c?n:s;var p=ar(r,S,n,n,n,n,n,s);return p.placeholder=wp.placeholder,p}function xp(r,s,c){s=c?n:s;var p=ar(r,E,n,n,n,n,n,s);return p.placeholder=xp.placeholder,p}function $p(r,s,c){var p,m,x,R,L,M,H=0,F=!1,K=!1,ie=!0;if(typeof r!="function")throw new hn(l);s=yn(s)||0,at(c)&&(F=!!c.leading,K="maxWait"in c,x=K?wt(yn(c.maxWait)||0,s):x,ie="trailing"in c?!!c.trailing:ie);function de(pt){var Sn=p,fr=m;return p=m=n,H=pt,R=r.apply(fr,Sn),R}function we(pt){return H=pt,L=zs(De,s),F?de(pt):R}function Oe(pt){var Sn=pt-M,fr=pt-H,Hp=s-Sn;return K?Lt(Hp,x-fr):Hp}function xe(pt){var Sn=pt-M,fr=pt-H;return M===n||Sn>=s||Sn<0||K&&fr>=x}function De(){var pt=ha();if(xe(pt))return qe(pt);L=zs(De,Oe(pt))}function qe(pt){return L=n,ie&&p?de(pt):(p=m=n,R)}function nn(){L!==n&&Lh(L),H=0,p=M=m=L=n}function Ut(){return L===n?R:qe(ha())}function rn(){var pt=ha(),Sn=xe(pt);if(p=arguments,m=this,M=pt,Sn){if(L===n)return we(M);if(K)return Lh(L),L=zs(De,s),de(M)}return L===n&&(L=zs(De,s)),R}return rn.cancel=nn,rn.flush=Ut,rn}var w3=je(function(r,s){return fh(r,1,s)}),x3=je(function(r,s,c){return fh(r,yn(s)||0,c)});function $3(r){return ar(r,te)}function pa(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new hn(l);var c=function(){var p=arguments,m=s?s.apply(this,p):p[0],x=c.cache;if(x.has(m))return x.get(m);var R=r.apply(this,p);return c.cache=x.set(m,R)||x,R};return c.cache=new(pa.Cache||sr),c}pa.Cache=sr;function ga(r){if(typeof r!="function")throw new hn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function k3(r){return bp(2,r)}var E3=d_(function(r,s){s=s.length==1&&Te(s[0])?ot(s[0],Jt(ve())):ot(It(s,1),Jt(ve()));var c=s.length;return je(function(p){for(var m=-1,x=Lt(p.length,c);++m<x;)p[m]=s[m].call(this,p[m]);return Xt(r,this,p)})}),Xc=je(function(r,s){var c=Ar(s,Wi(Xc));return ar(r,T,n,s,c)}),kp=je(function(r,s){var c=Ar(s,Wi(kp));return ar(r,O,n,s,c)}),C3=lr(function(r,s){return ar(r,U,n,n,n,s)});function S3(r,s){if(typeof r!="function")throw new hn(l);return s=s===n?s:Ae(s),je(r,s)}function T3(r,s){if(typeof r!="function")throw new hn(l);return s=s==null?0:wt(Ae(s),0),je(function(c){var p=c[s],m=Pr(c,0,s);return p&&Tr(m,p),Xt(r,this,m)})}function A3(r,s,c){var p=!0,m=!0;if(typeof r!="function")throw new hn(l);return at(c)&&(p="leading"in c?!!c.leading:p,m="trailing"in c?!!c.trailing:m),$p(r,s,{leading:p,maxWait:s,trailing:m})}function I3(r){return yp(r,1)}function R3(r,s){return Xc(Bc(s),r)}function O3(){if(!arguments.length)return[];var r=arguments[0];return Te(r)?r:[r]}function L3(r){return gn(r,w)}function P3(r,s){return s=typeof s=="function"?s:n,gn(r,w,s)}function M3(r){return gn(r,g|w)}function B3(r,s){return s=typeof s=="function"?s:n,gn(r,g|w,s)}function j3(r,s){return s==null||dh(r,s,kt(s))}function Cn(r,s){return r===s||r!==r&&s!==s}var N3=aa(kc),D3=aa(function(r,s){return r>=s}),ai=vh(function(){return arguments}())?vh:function(r){return ut(r)&&Ye.call(r,"callee")&&!rh.call(r,"callee")},Te=D.isArray,U3=Nf?Jt(Nf):Kb;function Vt(r){return r!=null&&ma(r.length)&&!ur(r)}function ht(r){return ut(r)&&Vt(r)}function z3(r){return r===!0||r===!1||ut(r)&&Nt(r)==N}var Mr=tb||cu,H3=Df?Jt(Df):Gb;function F3(r){return ut(r)&&r.nodeType===1&&!Hs(r)}function q3(r){if(r==null)return!0;if(Vt(r)&&(Te(r)||typeof r=="string"||typeof r.splice=="function"||Mr(r)||Zi(r)||ai(r)))return!r.length;var s=Pt(r);if(s==Fe||s==bt)return!r.size;if(Us(r))return!Sc(r).length;for(var c in r)if(Ye.call(r,c))return!1;return!0}function W3(r,s){return js(r,s)}function Z3(r,s,c){c=typeof c=="function"?c:n;var p=c?c(r,s):n;return p===n?js(r,s,n,c):!!p}function Jc(r){if(!ut(r))return!1;var s=Nt(r);return s==vt||s==tt||typeof r.message=="string"&&typeof r.name=="string"&&!Hs(r)}function V3(r){return typeof r=="number"&&sh(r)}function ur(r){if(!at(r))return!1;var s=Nt(r);return s==st||s==Be||s==_e||s==Ai}function Ep(r){return typeof r=="number"&&r==Ae(r)}function ma(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=ge}function at(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ut(r){return r!=null&&typeof r=="object"}var Cp=Uf?Jt(Uf):Yb;function K3(r,s){return r===s||Cc(r,s,Fc(s))}function G3(r,s,c){return c=typeof c=="function"?c:n,Cc(r,s,Fc(s),c)}function Q3(r){return Sp(r)&&r!=+r}function Y3(r){if(P_(r))throw new Ce(a);return yh(r)}function X3(r){return r===null}function J3(r){return r==null}function Sp(r){return typeof r=="number"||ut(r)&&Nt(r)==Tt}function Hs(r){if(!ut(r)||Nt(r)!=ft)return!1;var s=Fo(r);if(s===null)return!0;var c=Ye.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Do.call(c)==Gy}var eu=zf?Jt(zf):Xb;function ex(r){return Ep(r)&&r>=-ge&&r<=ge}var Tp=Hf?Jt(Hf):Jb;function va(r){return typeof r=="string"||!Te(r)&&ut(r)&&Nt(r)==xn}function tn(r){return typeof r=="symbol"||ut(r)&&Nt(r)==Dn}var Zi=Ff?Jt(Ff):e_;function tx(r){return r===n}function nx(r){return ut(r)&&Pt(r)==$e}function rx(r){return ut(r)&&Nt(r)==tr}var ix=aa(Tc),sx=aa(function(r,s){return r<=s});function Ap(r){if(!r)return[];if(Vt(r))return va(r)?kn(r):Zt(r);if(As&&r[As])return jy(r[As]());var s=Pt(r),c=s==Fe?gc:s==bt?Bo:Vi;return c(r)}function dr(r){if(!r)return r===0?r:0;if(r=yn(r),r===ue||r===-ue){var s=r<0?-1:1;return s*ne}return r===r?r:0}function Ae(r){var s=dr(r),c=s%1;return s===s?c?s-c:s:0}function Ip(r){return r?ri(Ae(r),0,pe):0}function yn(r){if(typeof r=="number")return r;if(tn(r))return he;if(at(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=at(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=Gf(r);var c=U2.test(r);return c||H2.test(r)?_y(r.slice(2),c?2:8):D2.test(r)?he:+r}function Rp(r){return zn(r,Kt(r))}function ox(r){return r?ri(Ae(r),-ge,ge):r===0?r:0}function Qe(r){return r==null?"":en(r)}var ax=Fi(function(r,s){if(Us(s)||Vt(s)){zn(s,kt(s),r);return}for(var c in s)Ye.call(s,c)&&Ps(r,c,s[c])}),Op=Fi(function(r,s){zn(s,Kt(s),r)}),ya=Fi(function(r,s,c,p){zn(s,Kt(s),r,p)}),lx=Fi(function(r,s,c,p){zn(s,kt(s),r,p)}),cx=lr(wc);function ux(r,s){var c=Hi(r);return s==null?c:uh(c,s)}var dx=je(function(r,s){r=Xe(r);var c=-1,p=s.length,m=p>2?s[2]:n;for(m&&Dt(s[0],s[1],m)&&(p=1);++c<p;)for(var x=s[c],R=Kt(x),L=-1,M=R.length;++L<M;){var H=R[L],F=r[H];(F===n||Cn(F,Di[H])&&!Ye.call(r,H))&&(r[H]=x[H])}return r}),fx=je(function(r){return r.push(n,Gh),Xt(Lp,n,r)});function hx(r,s){return Wf(r,ve(s,3),Un)}function px(r,s){return Wf(r,ve(s,3),$c)}function gx(r,s){return r==null?r:xc(r,ve(s,3),Kt)}function mx(r,s){return r==null?r:gh(r,ve(s,3),Kt)}function vx(r,s){return r&&Un(r,ve(s,3))}function yx(r,s){return r&&$c(r,ve(s,3))}function bx(r){return r==null?[]:Jo(r,kt(r))}function _x(r){return r==null?[]:Jo(r,Kt(r))}function tu(r,s,c){var p=r==null?n:ii(r,s);return p===n?c:p}function wx(r,s){return r!=null&&Xh(r,s,qb)}function nu(r,s){return r!=null&&Xh(r,s,Wb)}var xx=qh(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Uo.call(s)),r[s]=c},iu(Gt)),$x=qh(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Uo.call(s)),Ye.call(r,s)?r[s].push(c):r[s]=[c]},ve),kx=je(Bs);function kt(r){return Vt(r)?lh(r):Sc(r)}function Kt(r){return Vt(r)?lh(r,!0):t_(r)}function Ex(r,s){var c={};return s=ve(s,3),Un(r,function(p,m,x){or(c,s(p,m,x),p)}),c}function Cx(r,s){var c={};return s=ve(s,3),Un(r,function(p,m,x){or(c,m,s(p,m,x))}),c}var Sx=Fi(function(r,s,c){ea(r,s,c)}),Lp=Fi(function(r,s,c,p){ea(r,s,c,p)}),Tx=lr(function(r,s){var c={};if(r==null)return c;var p=!1;s=ot(s,function(x){return x=Lr(x,r),p||(p=x.length>1),x}),zn(r,zc(r),c),p&&(c=gn(c,g|v|w,x_));for(var m=s.length;m--;)Lc(c,s[m]);return c});function Ax(r,s){return Pp(r,ga(ve(s)))}var Ix=lr(function(r,s){return r==null?{}:r_(r,s)});function Pp(r,s){if(r==null)return{};var c=ot(zc(r),function(p){return[p]});return s=ve(s),Eh(r,c,function(p,m){return s(p,m[0])})}function Rx(r,s,c){s=Lr(s,r);var p=-1,m=s.length;for(m||(m=1,r=n);++p<m;){var x=r==null?n:r[Hn(s[p])];x===n&&(p=m,x=c),r=ur(x)?x.call(r):x}return r}function Ox(r,s,c){return r==null?r:Ns(r,s,c)}function Lx(r,s,c,p){return p=typeof p=="function"?p:n,r==null?r:Ns(r,s,c,p)}var Mp=Vh(kt),Bp=Vh(Kt);function Px(r,s,c){var p=Te(r),m=p||Mr(r)||Zi(r);if(s=ve(s,4),c==null){var x=r&&r.constructor;m?c=p?new x:[]:at(r)?c=ur(x)?Hi(Fo(r)):{}:c={}}return(m?fn:Un)(r,function(R,L,M){return s(c,R,L,M)}),c}function Mx(r,s){return r==null?!0:Lc(r,s)}function Bx(r,s,c){return r==null?r:Ih(r,s,Bc(c))}function jx(r,s,c,p){return p=typeof p=="function"?p:n,r==null?r:Ih(r,s,Bc(c),p)}function Vi(r){return r==null?[]:pc(r,kt(r))}function Nx(r){return r==null?[]:pc(r,Kt(r))}function Dx(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=yn(c),c=c===c?c:0),s!==n&&(s=yn(s),s=s===s?s:0),ri(yn(r),s,c)}function Ux(r,s,c){return s=dr(s),c===n?(c=s,s=0):c=dr(c),r=yn(r),Zb(r,s,c)}function zx(r,s,c){if(c&&typeof c!="boolean"&&Dt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=dr(r),s===n?(s=r,r=0):s=dr(s)),r>s){var p=r;r=s,s=p}if(c||r%1||s%1){var m=oh();return Lt(r+m*(s-r+by("1e-"+((m+"").length-1))),s)}return Ic(r,s)}var Hx=qi(function(r,s,c){return s=s.toLowerCase(),r+(c?jp(s):s)});function jp(r){return ru(Qe(r).toLowerCase())}function Np(r){return r=Qe(r),r&&r.replace(q2,Oy).replace(cy,"")}function Fx(r,s,c){r=Qe(r),s=en(s);var p=r.length;c=c===n?p:ri(Ae(c),0,p);var m=c;return c-=s.length,c>=0&&r.slice(c,m)==s}function qx(r){return r=Qe(r),r&&k2.test(r)?r.replace(gf,Ly):r}function Wx(r){return r=Qe(r),r&&I2.test(r)?r.replace(Xl,"\\$&"):r}var Zx=qi(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),Vx=qi(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),Kx=zh("toLowerCase");function Gx(r,s,c){r=Qe(r),s=Ae(s);var p=s?ji(r):0;if(!s||p>=s)return r;var m=(s-p)/2;return oa(Vo(m),c)+r+oa(Zo(m),c)}function Qx(r,s,c){r=Qe(r),s=Ae(s);var p=s?ji(r):0;return s&&p<s?r+oa(s-p,c):r}function Yx(r,s,c){r=Qe(r),s=Ae(s);var p=s?ji(r):0;return s&&p<s?oa(s-p,c)+r:r}function Xx(r,s,c){return c||s==null?s=0:s&&(s=+s),sb(Qe(r).replace(Jl,""),s||0)}function Jx(r,s,c){return(c?Dt(r,s,c):s===n)?s=1:s=Ae(s),Rc(Qe(r),s)}function e4(){var r=arguments,s=Qe(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var t4=qi(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function n4(r,s,c){return c&&typeof c!="number"&&Dt(r,s,c)&&(s=c=n),c=c===n?pe:c>>>0,c?(r=Qe(r),r&&(typeof s=="string"||s!=null&&!eu(s))&&(s=en(s),!s&&Bi(r))?Pr(kn(r),0,c):r.split(s,c)):[]}var r4=qi(function(r,s,c){return r+(c?" ":"")+ru(s)});function i4(r,s,c){return r=Qe(r),c=c==null?0:ri(Ae(c),0,r.length),s=en(s),r.slice(c,c+s.length)==s}function s4(r,s,c){var p=y.templateSettings;c&&Dt(r,s,c)&&(s=n),r=Qe(r),s=ya({},s,p,Kh);var m=ya({},s.imports,p.imports,Kh),x=kt(m),R=pc(m,x),L,M,H=0,F=s.interpolate||Ro,K="__p += '",ie=mc((s.escape||Ro).source+"|"+F.source+"|"+(F===mf?N2:Ro).source+"|"+(s.evaluate||Ro).source+"|$","g"),de="//# sourceURL="+(Ye.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++py+"]")+`
`;r.replace(ie,function(xe,De,qe,nn,Ut,rn){return qe||(qe=nn),K+=r.slice(H,rn).replace(W2,Py),De&&(L=!0,K+=`' +
__e(`+De+`) +
'`),Ut&&(M=!0,K+=`';
`+Ut+`;
__p += '`),qe&&(K+=`' +
((__t = (`+qe+`)) == null ? '' : __t) +
'`),H=rn+xe.length,xe}),K+=`';
`;var we=Ye.call(s,"variable")&&s.variable;if(!we)K=`with (obj) {
`+K+`
}
`;else if(B2.test(we))throw new Ce(u);K=(M?K.replace(_2,""):K).replace(w2,"$1").replace(x2,"$1;"),K="function("+(we||"obj")+`) {
`+(we?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(L?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+K+`return __p
}`;var Oe=Up(function(){return Ve(x,de+"return "+K).apply(n,R)});if(Oe.source=K,Jc(Oe))throw Oe;return Oe}function o4(r){return Qe(r).toLowerCase()}function a4(r){return Qe(r).toUpperCase()}function l4(r,s,c){if(r=Qe(r),r&&(c||s===n))return Gf(r);if(!r||!(s=en(s)))return r;var p=kn(r),m=kn(s),x=Qf(p,m),R=Yf(p,m)+1;return Pr(p,x,R).join("")}function c4(r,s,c){if(r=Qe(r),r&&(c||s===n))return r.slice(0,Jf(r)+1);if(!r||!(s=en(s)))return r;var p=kn(r),m=Yf(p,kn(s))+1;return Pr(p,0,m).join("")}function u4(r,s,c){if(r=Qe(r),r&&(c||s===n))return r.replace(Jl,"");if(!r||!(s=en(s)))return r;var p=kn(r),m=Qf(p,kn(s));return Pr(p,m).join("")}function d4(r,s){var c=W,p=X;if(at(s)){var m="separator"in s?s.separator:m;c="length"in s?Ae(s.length):c,p="omission"in s?en(s.omission):p}r=Qe(r);var x=r.length;if(Bi(r)){var R=kn(r);x=R.length}if(c>=x)return r;var L=c-ji(p);if(L<1)return p;var M=R?Pr(R,0,L).join(""):r.slice(0,L);if(m===n)return M+p;if(R&&(L+=M.length-L),eu(m)){if(r.slice(L).search(m)){var H,F=M;for(m.global||(m=mc(m.source,Qe(vf.exec(m))+"g")),m.lastIndex=0;H=m.exec(F);)var K=H.index;M=M.slice(0,K===n?L:K)}}else if(r.indexOf(en(m),L)!=L){var ie=M.lastIndexOf(m);ie>-1&&(M=M.slice(0,ie))}return M+p}function f4(r){return r=Qe(r),r&&$2.test(r)?r.replace(pf,zy):r}var h4=qi(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),ru=zh("toUpperCase");function Dp(r,s,c){return r=Qe(r),s=c?n:s,s===n?By(r)?qy(r):Sy(r):r.match(s)||[]}var Up=je(function(r,s){try{return Xt(r,n,s)}catch(c){return Jc(c)?c:new Ce(c)}}),p4=lr(function(r,s){return fn(s,function(c){c=Hn(c),or(r,c,Yc(r[c],r))}),r});function g4(r){var s=r==null?0:r.length,c=ve();return r=s?ot(r,function(p){if(typeof p[1]!="function")throw new hn(l);return[c(p[0]),p[1]]}):[],je(function(p){for(var m=-1;++m<s;){var x=r[m];if(Xt(x[0],this,p))return Xt(x[1],this,p)}})}function m4(r){return zb(gn(r,g))}function iu(r){return function(){return r}}function v4(r,s){return r==null||r!==r?s:r}var y4=Fh(),b4=Fh(!0);function Gt(r){return r}function su(r){return bh(typeof r=="function"?r:gn(r,g))}function _4(r){return wh(gn(r,g))}function w4(r,s){return xh(r,gn(s,g))}var x4=je(function(r,s){return function(c){return Bs(c,r,s)}}),$4=je(function(r,s){return function(c){return Bs(r,c,s)}});function ou(r,s,c){var p=kt(s),m=Jo(s,p);c==null&&!(at(s)&&(m.length||!p.length))&&(c=s,s=r,r=this,m=Jo(s,kt(s)));var x=!(at(c)&&"chain"in c)||!!c.chain,R=ur(r);return fn(m,function(L){var M=s[L];r[L]=M,R&&(r.prototype[L]=function(){var H=this.__chain__;if(x||H){var F=r(this.__wrapped__),K=F.__actions__=Zt(this.__actions__);return K.push({func:M,args:arguments,thisArg:r}),F.__chain__=H,F}return M.apply(r,Tr([this.value()],arguments))})}),r}function k4(){return At._===this&&(At._=Qy),this}function au(){}function E4(r){return r=Ae(r),je(function(s){return $h(s,r)})}var C4=Nc(ot),S4=Nc(qf),T4=Nc(cc);function zp(r){return Wc(r)?uc(Hn(r)):i_(r)}function A4(r){return function(s){return r==null?n:ii(r,s)}}var I4=Wh(),R4=Wh(!0);function lu(){return[]}function cu(){return!1}function O4(){return{}}function L4(){return""}function P4(){return!0}function M4(r,s){if(r=Ae(r),r<1||r>ge)return[];var c=pe,p=Lt(r,pe);s=ve(s),r-=pe;for(var m=hc(p,s);++c<r;)s(c);return m}function B4(r){return Te(r)?ot(r,Hn):tn(r)?[r]:Zt(ap(Qe(r)))}function j4(r){var s=++Ky;return Qe(r)+s}var N4=sa(function(r,s){return r+s},0),D4=Dc("ceil"),U4=sa(function(r,s){return r/s},1),z4=Dc("floor");function H4(r){return r&&r.length?Xo(r,Gt,kc):n}function F4(r,s){return r&&r.length?Xo(r,ve(s,2),kc):n}function q4(r){return Vf(r,Gt)}function W4(r,s){return Vf(r,ve(s,2))}function Z4(r){return r&&r.length?Xo(r,Gt,Tc):n}function V4(r,s){return r&&r.length?Xo(r,ve(s,2),Tc):n}var K4=sa(function(r,s){return r*s},1),G4=Dc("round"),Q4=sa(function(r,s){return r-s},0);function Y4(r){return r&&r.length?fc(r,Gt):0}function X4(r,s){return r&&r.length?fc(r,ve(s,2)):0}return y.after=_3,y.ary=yp,y.assign=ax,y.assignIn=Op,y.assignInWith=ya,y.assignWith=lx,y.at=cx,y.before=bp,y.bind=Yc,y.bindAll=p4,y.bindKey=_p,y.castArray=O3,y.chain=gp,y.chunk=z_,y.compact=H_,y.concat=F_,y.cond=g4,y.conforms=m4,y.constant=iu,y.countBy=Yw,y.create=ux,y.curry=wp,y.curryRight=xp,y.debounce=$p,y.defaults=dx,y.defaultsDeep=fx,y.defer=w3,y.delay=x3,y.difference=q_,y.differenceBy=W_,y.differenceWith=Z_,y.drop=V_,y.dropRight=K_,y.dropRightWhile=G_,y.dropWhile=Q_,y.fill=Y_,y.filter=Jw,y.flatMap=n3,y.flatMapDeep=r3,y.flatMapDepth=i3,y.flatten=dp,y.flattenDeep=X_,y.flattenDepth=J_,y.flip=$3,y.flow=y4,y.flowRight=b4,y.fromPairs=ew,y.functions=bx,y.functionsIn=_x,y.groupBy=s3,y.initial=nw,y.intersection=rw,y.intersectionBy=iw,y.intersectionWith=sw,y.invert=xx,y.invertBy=$x,y.invokeMap=a3,y.iteratee=su,y.keyBy=l3,y.keys=kt,y.keysIn=Kt,y.map=fa,y.mapKeys=Ex,y.mapValues=Cx,y.matches=_4,y.matchesProperty=w4,y.memoize=pa,y.merge=Sx,y.mergeWith=Lp,y.method=x4,y.methodOf=$4,y.mixin=ou,y.negate=ga,y.nthArg=E4,y.omit=Tx,y.omitBy=Ax,y.once=k3,y.orderBy=c3,y.over=C4,y.overArgs=E3,y.overEvery=S4,y.overSome=T4,y.partial=Xc,y.partialRight=kp,y.partition=u3,y.pick=Ix,y.pickBy=Pp,y.property=zp,y.propertyOf=A4,y.pull=cw,y.pullAll=hp,y.pullAllBy=uw,y.pullAllWith=dw,y.pullAt=fw,y.range=I4,y.rangeRight=R4,y.rearg=C3,y.reject=h3,y.remove=hw,y.rest=S3,y.reverse=Gc,y.sampleSize=g3,y.set=Ox,y.setWith=Lx,y.shuffle=m3,y.slice=pw,y.sortBy=b3,y.sortedUniq=ww,y.sortedUniqBy=xw,y.split=n4,y.spread=T3,y.tail=$w,y.take=kw,y.takeRight=Ew,y.takeRightWhile=Cw,y.takeWhile=Sw,y.tap=Hw,y.throttle=A3,y.thru=da,y.toArray=Ap,y.toPairs=Mp,y.toPairsIn=Bp,y.toPath=B4,y.toPlainObject=Rp,y.transform=Px,y.unary=I3,y.union=Tw,y.unionBy=Aw,y.unionWith=Iw,y.uniq=Rw,y.uniqBy=Ow,y.uniqWith=Lw,y.unset=Mx,y.unzip=Qc,y.unzipWith=pp,y.update=Bx,y.updateWith=jx,y.values=Vi,y.valuesIn=Nx,y.without=Pw,y.words=Dp,y.wrap=R3,y.xor=Mw,y.xorBy=Bw,y.xorWith=jw,y.zip=Nw,y.zipObject=Dw,y.zipObjectDeep=Uw,y.zipWith=zw,y.entries=Mp,y.entriesIn=Bp,y.extend=Op,y.extendWith=ya,ou(y,y),y.add=N4,y.attempt=Up,y.camelCase=Hx,y.capitalize=jp,y.ceil=D4,y.clamp=Dx,y.clone=L3,y.cloneDeep=M3,y.cloneDeepWith=B3,y.cloneWith=P3,y.conformsTo=j3,y.deburr=Np,y.defaultTo=v4,y.divide=U4,y.endsWith=Fx,y.eq=Cn,y.escape=qx,y.escapeRegExp=Wx,y.every=Xw,y.find=e3,y.findIndex=cp,y.findKey=hx,y.findLast=t3,y.findLastIndex=up,y.findLastKey=px,y.floor=z4,y.forEach=mp,y.forEachRight=vp,y.forIn=gx,y.forInRight=mx,y.forOwn=vx,y.forOwnRight=yx,y.get=tu,y.gt=N3,y.gte=D3,y.has=wx,y.hasIn=nu,y.head=fp,y.identity=Gt,y.includes=o3,y.indexOf=tw,y.inRange=Ux,y.invoke=kx,y.isArguments=ai,y.isArray=Te,y.isArrayBuffer=U3,y.isArrayLike=Vt,y.isArrayLikeObject=ht,y.isBoolean=z3,y.isBuffer=Mr,y.isDate=H3,y.isElement=F3,y.isEmpty=q3,y.isEqual=W3,y.isEqualWith=Z3,y.isError=Jc,y.isFinite=V3,y.isFunction=ur,y.isInteger=Ep,y.isLength=ma,y.isMap=Cp,y.isMatch=K3,y.isMatchWith=G3,y.isNaN=Q3,y.isNative=Y3,y.isNil=J3,y.isNull=X3,y.isNumber=Sp,y.isObject=at,y.isObjectLike=ut,y.isPlainObject=Hs,y.isRegExp=eu,y.isSafeInteger=ex,y.isSet=Tp,y.isString=va,y.isSymbol=tn,y.isTypedArray=Zi,y.isUndefined=tx,y.isWeakMap=nx,y.isWeakSet=rx,y.join=ow,y.kebabCase=Zx,y.last=vn,y.lastIndexOf=aw,y.lowerCase=Vx,y.lowerFirst=Kx,y.lt=ix,y.lte=sx,y.max=H4,y.maxBy=F4,y.mean=q4,y.meanBy=W4,y.min=Z4,y.minBy=V4,y.stubArray=lu,y.stubFalse=cu,y.stubObject=O4,y.stubString=L4,y.stubTrue=P4,y.multiply=K4,y.nth=lw,y.noConflict=k4,y.noop=au,y.now=ha,y.pad=Gx,y.padEnd=Qx,y.padStart=Yx,y.parseInt=Xx,y.random=zx,y.reduce=d3,y.reduceRight=f3,y.repeat=Jx,y.replace=e4,y.result=Rx,y.round=G4,y.runInContext=P,y.sample=p3,y.size=v3,y.snakeCase=t4,y.some=y3,y.sortedIndex=gw,y.sortedIndexBy=mw,y.sortedIndexOf=vw,y.sortedLastIndex=yw,y.sortedLastIndexBy=bw,y.sortedLastIndexOf=_w,y.startCase=r4,y.startsWith=i4,y.subtract=Q4,y.sum=Y4,y.sumBy=X4,y.template=s4,y.times=M4,y.toFinite=dr,y.toInteger=Ae,y.toLength=Ip,y.toLower=o4,y.toNumber=yn,y.toSafeInteger=ox,y.toString=Qe,y.toUpper=a4,y.trim=l4,y.trimEnd=c4,y.trimStart=u4,y.truncate=d4,y.unescape=f4,y.uniqueId=j4,y.upperCase=h4,y.upperFirst=ru,y.each=mp,y.eachRight=vp,y.first=fp,ou(y,function(){var r={};return Un(y,function(s,c){Ye.call(y.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),y.VERSION=i,fn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),fn(["drop","take"],function(r,s){He.prototype[r]=function(c){c=c===n?1:wt(Ae(c),0);var p=this.__filtered__&&!s?new He(this):this.clone();return p.__filtered__?p.__takeCount__=Lt(c,p.__takeCount__):p.__views__.push({size:Lt(c,pe),type:r+(p.__dir__<0?"Right":"")}),p},He.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),fn(["filter","map","takeWhile"],function(r,s){var c=s+1,p=c==re||c==ee;He.prototype[r]=function(m){var x=this.clone();return x.__iteratees__.push({iteratee:ve(m,3),type:c}),x.__filtered__=x.__filtered__||p,x}}),fn(["head","last"],function(r,s){var c="take"+(s?"Right":"");He.prototype[r]=function(){return this[c](1).value()[0]}}),fn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");He.prototype[r]=function(){return this.__filtered__?new He(this):this[c](1)}}),He.prototype.compact=function(){return this.filter(Gt)},He.prototype.find=function(r){return this.filter(r).head()},He.prototype.findLast=function(r){return this.reverse().find(r)},He.prototype.invokeMap=je(function(r,s){return typeof r=="function"?new He(this):this.map(function(c){return Bs(c,r,s)})}),He.prototype.reject=function(r){return this.filter(ga(ve(r)))},He.prototype.slice=function(r,s){r=Ae(r);var c=this;return c.__filtered__&&(r>0||s<0)?new He(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Ae(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},He.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},He.prototype.toArray=function(){return this.take(pe)},Un(He.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),p=/^(?:head|last)$/.test(s),m=y[p?"take"+(s=="last"?"Right":""):s],x=p||/^find/.test(s);m&&(y.prototype[s]=function(){var R=this.__wrapped__,L=p?[1]:arguments,M=R instanceof He,H=L[0],F=M||Te(R),K=function(De){var qe=m.apply(y,Tr([De],L));return p&&ie?qe[0]:qe};F&&c&&typeof H=="function"&&H.length!=1&&(M=F=!1);var ie=this.__chain__,de=!!this.__actions__.length,we=x&&!ie,Oe=M&&!de;if(!x&&F){R=Oe?R:new He(this);var xe=r.apply(R,L);return xe.__actions__.push({func:da,args:[K],thisArg:n}),new pn(xe,ie)}return we&&Oe?r.apply(this,L):(xe=this.thru(K),we?p?xe.value()[0]:xe.value():xe)})}),fn(["pop","push","shift","sort","splice","unshift"],function(r){var s=jo[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",p=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var m=arguments;if(p&&!this.__chain__){var x=this.value();return s.apply(Te(x)?x:[],m)}return this[c](function(R){return s.apply(Te(R)?R:[],m)})}}),Un(He.prototype,function(r,s){var c=y[s];if(c){var p=c.name+"";Ye.call(zi,p)||(zi[p]=[]),zi[p].push({name:s,func:c})}}),zi[ia(n,C).name]=[{name:"wrapper",func:n}],He.prototype.clone=fb,He.prototype.reverse=hb,He.prototype.value=pb,y.prototype.at=Fw,y.prototype.chain=qw,y.prototype.commit=Ww,y.prototype.next=Zw,y.prototype.plant=Kw,y.prototype.reverse=Gw,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=Qw,y.prototype.first=y.prototype.head,As&&(y.prototype[As]=Vw),y},Ni=Wy();Jr?((Jr.exports=Ni)._=Ni,sc._=Ni):At._=Ni}).call($t)})(Za,Za.exports);var wm=Za.exports;const lE=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],xm=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.h3z.jp","wss://nostr.holybea.com","wss://yabu.me"],cE=[...xm,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],uE=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],dE=()=>{const e=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));e.push(...o)}else for(let o=0;o<16;o+=1)e[o]=Math.round(Math.random()*65535)>>8;e[6]=e[6]&15|64,e[8]=e[8]&63|128;const t=String.fromCharCode(...e);return btoa(t).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ws=()=>({id:dE(),width:"medium"}),$m=e=>({...ws(),columnType:"Following",...e}),km=e=>({...ws(),columnType:"Notification",...e}),fE=e=>({...ws(),columnType:"Relays",...e}),Em=()=>fE({name:"日本語",relayUrls:xm,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),Cm=e=>({...ws(),columnType:"Posts",...e}),Sm=e=>({...ws(),columnType:"Reactions",...e}),Bd=e=>({...ws(),columnType:"Search",...e}),hE=/^[0-9a-f]{64}$/,no=e=>{const t=typeof e=="string"&&e.length===64&&hE.test(e);return t||console.warn("invalid id is ignored: ",e),t};class Tm{findTagsByName(t){return this.tags.filter(([n])=>n===t)}findFirstTagByName(t){return this.tags.find(([n])=>n===t)}findLastTagByName(t){return this.tags.findLast(([n])=>n===t)}pTags(){return this.tags.filter(([t,n])=>t==="p"&&no(n))}eTags(){return this.tags.filter(([t,n])=>t==="e"&&no(n))}taggedPubkeys(){return yr(this.pTags().map(([,t])=>t))}taggedEventIds(){return this.eTags().map(([,t])=>t)}lastTaggedEventId(){const t=this.taggedEventIds();if(t.length!==0)return t[t.length-1]}}class Am extends Tm{constructor(t){super(),this.rawEvent=t}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}var Ze;(function(e){e.assertEqual=o=>o;function t(o){}e.assertIs=t;function n(o){throw new Error}e.assertNever=n,e.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},e.getValidEnumValues=o=>{const a=e.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return e.objectValues(l)},e.objectValues=o=>e.objectKeys(o).map(function(a){return o[a]}),e.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},e.find=(o,a)=>{for(const l of o)if(a(l))return l},e.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}e.joinValues=i,e.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ze||(Ze={}));var Uu;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Uu||(Uu={}));const se=Ze.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Hr=e=>{switch(typeof e){case"undefined":return se.undefined;case"string":return se.string;case"number":return isNaN(e)?se.nan:se.number;case"boolean":return se.boolean;case"function":return se.function;case"bigint":return se.bigint;case"symbol":return se.symbol;case"object":return Array.isArray(e)?se.array:e===null?se.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?se.promise:typeof Map<"u"&&e instanceof Map?se.map:typeof Set<"u"&&e instanceof Set?se.set:typeof Date<"u"&&e instanceof Date?se.date:se.object;default:return se.unknown}},J=Ze.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),pE=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class Ln extends Error{constructor(t){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(u[f]=u[f]||{_errors:[]},u[f]._errors.push(n(l))):u[f]=u[f]||{_errors:[]},u=u[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ze.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):i.push(t(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Ln.create=e=>new Ln(e);const ro=(e,t)=>{let n;switch(e.code){case J.invalid_type:e.received===se.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case J.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Ze.jsonStringifyReplacer)}`;break;case J.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ze.joinValues(e.keys,", ")}`;break;case J.invalid_union:n="Invalid input";break;case J.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ze.joinValues(e.options)}`;break;case J.invalid_enum_value:n=`Invalid enum value. Expected ${Ze.joinValues(e.options)}, received '${e.received}'`;break;case J.invalid_arguments:n="Invalid function arguments";break;case J.invalid_return_type:n="Invalid function return type";break;case J.invalid_date:n="Invalid date";break;case J.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Ze.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case J.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case J.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case J.custom:n="Invalid input";break;case J.invalid_intersection_types:n="Intersection results could not be merged";break;case J.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case J.not_finite:n="Number must be finite";break;default:n=t.defaultError,Ze.assertNever(e)}return{message:n}};let Im=ro;function gE(e){Im=e}function Va(){return Im}const Ka=e=>{const{data:t,path:n,errorMaps:i,issueData:o}=e,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)u=f(l,{data:t,defaultError:u}).message;return{...o,path:a,message:o.message||u}},mE=[];function le(e,t){const n=Ka({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,Va(),ro].filter(i=>!!i)});e.common.issues.push(n)}class Bt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const i=[];for(const o of n){if(o.status==="aborted")return Se;o.status==="dirty"&&t.dirty(),i.push(o.value)}return{status:t.value,value:i}}static async mergeObjectAsync(t,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Bt.mergeObjectSync(t,i)}static mergeObjectSync(t,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Se;a.status==="dirty"&&t.dirty(),l.status==="dirty"&&t.dirty(),(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:t.value,value:i}}}const Se=Object.freeze({status:"aborted"}),Rm=e=>({status:"dirty",value:e}),qt=e=>({status:"valid",value:e}),zu=e=>e.status==="aborted",Hu=e=>e.status==="dirty",Ga=e=>e.status==="valid",Qa=e=>typeof Promise<"u"&&e instanceof Promise;var me;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(me||(me={}));class Kn{constructor(t,n,i,o){this._cachedPath=[],this.parent=t,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const vg=(e,t)=>{if(Ga(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Ln(e.common.issues);return this._error=n,this._error}}};function Re(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:o}=e;if(t&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Ne{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return Hr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Hr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Bt,ctx:{common:t.parent.common,data:t.data,parsedType:Hr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(Qa(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const i=this.safeParse(t,n);if(i.success)return i.data;throw i.error}safeParse(t,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Hr(t)},a=this._parseSync({data:t,path:o.path,parent:o});return vg(o,a)}async parseAsync(t,n){const i=await this.safeParseAsync(t,n);if(i.success)return i.data;throw i.error}async safeParseAsync(t,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Hr(t)},o=this._parse({data:t,path:i.path,parent:i}),a=await(Qa(o)?o:Promise.resolve(o));return vg(i,a)}refine(t,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=t(o),u=()=>a.addIssue({code:J.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(t,n){return this._refinement((i,o)=>t(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(t){return new Mn({schema:this,typeName:Ee.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return br.create(this,this._def)}nullable(){return bi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Pn.create(this,this._def)}promise(){return ls.create(this,this._def)}or(t){return ao.create([this,t],this._def)}and(t){return lo.create(this,t,this._def)}transform(t){return new Mn({...Re(this._def),schema:this,typeName:Ee.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new po({...Re(this._def),innerType:this,defaultValue:n,typeName:Ee.ZodDefault})}brand(){return new Lm({typeName:Ee.ZodBranded,type:this,...Re(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new el({...Re(this._def),innerType:this,catchValue:n,typeName:Ee.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return $o.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const vE=/^c[^\s-]{8,}$/i,yE=/^[a-z][a-z0-9]*$/,bE=/[0-9A-HJKMNP-TV-Z]{26}/,_E=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,wE=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,xE=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,$E=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,kE=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,EE=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function CE(e,t){return!!((t==="v4"||!t)&&$E.test(e)||(t==="v6"||!t)&&kE.test(e))}class Rn extends Ne{constructor(){super(...arguments),this._regex=(t,n,i)=>this.refinement(o=>t.test(o),{validation:n,code:J.invalid_string,...me.errToObj(i)}),this.nonempty=t=>this.min(1,me.errToObj(t)),this.trim=()=>new Rn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new Rn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new Rn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==se.string){const a=this._getOrReturnCtx(t);return le(a,{code:J.invalid_type,expected:se.string,received:a.parsedType}),Se}const i=new Bt;let o;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:J.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")t.data.length>a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:J.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=t.data.length>a.value,u=t.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(t,o),l?le(o,{code:J.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&le(o,{code:J.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")wE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"email",code:J.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")xE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"emoji",code:J.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")_E.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"uuid",code:J.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")vE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"cuid",code:J.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")yE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"cuid2",code:J.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")bE.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"ulid",code:J.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{o=this._getOrReturnCtx(t,o),le(o,{validation:"url",code:J.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"regex",code:J.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(t,o),le(o,{code:J.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(o=this._getOrReturnCtx(t,o),le(o,{code:J.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(o=this._getOrReturnCtx(t,o),le(o,{code:J.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?EE(a).test(t.data)||(o=this._getOrReturnCtx(t,o),le(o,{code:J.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?CE(t.data,a.version)||(o=this._getOrReturnCtx(t,o),le(o,{validation:"ip",code:J.invalid_string,message:a.message}),i.dirty()):Ze.assertNever(a);return{status:i.value,value:t.data}}_addCheck(t){return new Rn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...me.errToObj(t)})}url(t){return this._addCheck({kind:"url",...me.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...me.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...me.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...me.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...me.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...me.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...me.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:(n=t?.offset)!==null&&n!==void 0?n:!1,...me.errToObj(t?.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...me.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...me.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...me.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...me.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...me.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...me.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...me.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Rn.create=e=>{var t;return new Rn({checks:[],typeName:Ee.ZodString,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Re(e)})};function SE(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(e.toFixed(o).replace(".","")),l=parseInt(t.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Kr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==se.number){const a=this._getOrReturnCtx(t);return le(a,{code:J.invalid_type,expected:se.number,received:a.parsedType}),Se}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="int"?Ze.isInteger(t.data)||(i=this._getOrReturnCtx(t,i),le(i,{code:J.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:J.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:J.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?SE(t.data,a.value)!==0&&(i=this._getOrReturnCtx(t,i),le(i,{code:J.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(i=this._getOrReturnCtx(t,i),le(i,{code:J.not_finite,message:a.message}),o.dirty()):Ze.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,me.toString(n))}gt(t,n){return this.setLimit("min",t,!1,me.toString(n))}lte(t,n){return this.setLimit("max",t,!0,me.toString(n))}lt(t,n){return this.setLimit("max",t,!1,me.toString(n))}setLimit(t,n,i,o){return new Kr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:me.toString(o)}]})}_addCheck(t){return new Kr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:me.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:me.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:me.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:me.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:me.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:me.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:me.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:me.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:me.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Ze.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(t===null||i.value<t)&&(t=i.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Kr.create=e=>new Kr({checks:[],typeName:Ee.ZodNumber,coerce:e?.coerce||!1,...Re(e)});class Gr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==se.bigint){const a=this._getOrReturnCtx(t);return le(a,{code:J.invalid_type,expected:se.bigint,received:a.parsedType}),Se}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:J.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(i=this._getOrReturnCtx(t,i),le(i,{code:J.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(t,i),le(i,{code:J.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ze.assertNever(a);return{status:o.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,me.toString(n))}gt(t,n){return this.setLimit("min",t,!1,me.toString(n))}lte(t,n){return this.setLimit("max",t,!0,me.toString(n))}lt(t,n){return this.setLimit("max",t,!1,me.toString(n))}setLimit(t,n,i,o){return new Gr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:i,message:me.toString(o)}]})}_addCheck(t){return new Gr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:me.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:me.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:me.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:me.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:me.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Gr.create=e=>{var t;return new Gr({checks:[],typeName:Ee.ZodBigInt,coerce:(t=e?.coerce)!==null&&t!==void 0?t:!1,...Re(e)})};class io extends Ne{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==se.boolean){const i=this._getOrReturnCtx(t);return le(i,{code:J.invalid_type,expected:se.boolean,received:i.parsedType}),Se}return qt(t.data)}}io.create=e=>new io({typeName:Ee.ZodBoolean,coerce:e?.coerce||!1,...Re(e)});class vi extends Ne{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==se.date){const a=this._getOrReturnCtx(t);return le(a,{code:J.invalid_type,expected:se.date,received:a.parsedType}),Se}if(isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return le(a,{code:J.invalid_date}),Se}const i=new Bt;let o;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:J.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(o=this._getOrReturnCtx(t,o),le(o,{code:J.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ze.assertNever(a);return{status:i.value,value:new Date(t.data.getTime())}}_addCheck(t){return new vi({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:me.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:me.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}vi.create=e=>new vi({checks:[],coerce:e?.coerce||!1,typeName:Ee.ZodDate,...Re(e)});class Ya extends Ne{_parse(t){if(this._getType(t)!==se.symbol){const i=this._getOrReturnCtx(t);return le(i,{code:J.invalid_type,expected:se.symbol,received:i.parsedType}),Se}return qt(t.data)}}Ya.create=e=>new Ya({typeName:Ee.ZodSymbol,...Re(e)});class so extends Ne{_parse(t){if(this._getType(t)!==se.undefined){const i=this._getOrReturnCtx(t);return le(i,{code:J.invalid_type,expected:se.undefined,received:i.parsedType}),Se}return qt(t.data)}}so.create=e=>new so({typeName:Ee.ZodUndefined,...Re(e)});class oo extends Ne{_parse(t){if(this._getType(t)!==se.null){const i=this._getOrReturnCtx(t);return le(i,{code:J.invalid_type,expected:se.null,received:i.parsedType}),Se}return qt(t.data)}}oo.create=e=>new oo({typeName:Ee.ZodNull,...Re(e)});class as extends Ne{constructor(){super(...arguments),this._any=!0}_parse(t){return qt(t.data)}}as.create=e=>new as({typeName:Ee.ZodAny,...Re(e)});class mi extends Ne{constructor(){super(...arguments),this._unknown=!0}_parse(t){return qt(t.data)}}mi.create=e=>new mi({typeName:Ee.ZodUnknown,...Re(e)});class wr extends Ne{_parse(t){const n=this._getOrReturnCtx(t);return le(n,{code:J.invalid_type,expected:se.never,received:n.parsedType}),Se}}wr.create=e=>new wr({typeName:Ee.ZodNever,...Re(e)});class Xa extends Ne{_parse(t){if(this._getType(t)!==se.undefined){const i=this._getOrReturnCtx(t);return le(i,{code:J.invalid_type,expected:se.void,received:i.parsedType}),Se}return qt(t.data)}}Xa.create=e=>new Xa({typeName:Ee.ZodVoid,...Re(e)});class Pn extends Ne{_parse(t){const{ctx:n,status:i}=this._processInputParams(t),o=this._def;if(n.parsedType!==se.array)return le(n,{code:J.invalid_type,expected:se.array,received:n.parsedType}),Se;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(le(n,{code:l?J.too_big:J.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(le(n,{code:J.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(le(n,{code:J.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Kn(n,l,n.path,u)))).then(l=>Bt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Kn(n,l,n.path,u)));return Bt.mergeArray(i,a)}get element(){return this._def.type}min(t,n){return new Pn({...this._def,minLength:{value:t,message:me.toString(n)}})}max(t,n){return new Pn({...this._def,maxLength:{value:t,message:me.toString(n)}})}length(t,n){return new Pn({...this._def,exactLength:{value:t,message:me.toString(n)}})}nonempty(t){return this.min(1,t)}}Pn.create=(e,t)=>new Pn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Ee.ZodArray,...Re(t)});function Xi(e){if(e instanceof lt){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=br.create(Xi(i))}return new lt({...e._def,shape:()=>t})}else return e instanceof Pn?new Pn({...e._def,type:Xi(e.element)}):e instanceof br?br.create(Xi(e.unwrap())):e instanceof bi?bi.create(Xi(e.unwrap())):e instanceof Gn?Gn.create(e.items.map(t=>Xi(t))):e}class lt extends Ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=Ze.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==se.object){const f=this._getOrReturnCtx(t);return le(f,{code:J.invalid_type,expected:se.object,received:f.parsedType}),Se}const{status:i,ctx:o}=this._processInputParams(t),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof wr&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||u.push(f);const d=[];for(const f of l){const h=a[f],g=o.data[f];d.push({key:{status:"valid",value:f},value:h._parse(new Kn(o,g,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof wr){const f=this._def.unknownKeys;if(f==="passthrough")for(const h of u)d.push({key:{status:"valid",value:h},value:{status:"valid",value:o.data[h]}});else if(f==="strict")u.length>0&&(le(o,{code:J.unrecognized_keys,keys:u}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const h of u){const g=o.data[h];d.push({key:{status:"valid",value:h},value:f._parse(new Kn(o,g,o.path,h)),alwaysSet:h in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const h of d){const g=await h.key;f.push({key:g,value:await h.value,alwaysSet:h.alwaysSet})}return f}).then(f=>Bt.mergeObjectSync(i,f)):Bt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(t){return me.errToObj,new lt({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=me.errToObj(t).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new lt({...this._def,unknownKeys:"strip"})}passthrough(){return new lt({...this._def,unknownKeys:"passthrough"})}extend(t){return new lt({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new lt({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:Ee.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new lt({...this._def,catchall:t})}pick(t){const n={};return Ze.objectKeys(t).forEach(i=>{t[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new lt({...this._def,shape:()=>n})}omit(t){const n={};return Ze.objectKeys(this.shape).forEach(i=>{t[i]||(n[i]=this.shape[i])}),new lt({...this._def,shape:()=>n})}deepPartial(){return Xi(this)}partial(t){const n={};return Ze.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];t&&!t[i]?n[i]=o:n[i]=o.optional()}),new lt({...this._def,shape:()=>n})}required(t){const n={};return Ze.objectKeys(this.shape).forEach(i=>{if(t&&!t[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof br;)a=a._def.innerType;n[i]=a}}),new lt({...this._def,shape:()=>n})}keyof(){return Om(Ze.objectKeys(this.shape))}}lt.create=(e,t)=>new lt({shape:()=>e,unknownKeys:"strip",catchall:wr.create(),typeName:Ee.ZodObject,...Re(t)});lt.strictCreate=(e,t)=>new lt({shape:()=>e,unknownKeys:"strict",catchall:wr.create(),typeName:Ee.ZodObject,...Re(t)});lt.lazycreate=(e,t)=>new lt({shape:e,unknownKeys:"strip",catchall:wr.create(),typeName:Ee.ZodObject,...Re(t)});class ao extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new Ln(u.ctx.common.issues));return le(n,{code:J.invalid_union,unionErrors:l}),Se}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},h=d._parseSync({data:n.data,path:n.path,parent:f});if(h.status==="valid")return h;h.status==="dirty"&&!a&&(a={result:h,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new Ln(d));return le(n,{code:J.invalid_union,unionErrors:u}),Se}}get options(){return this._def.options}}ao.create=(e,t)=>new ao({options:e,typeName:Ee.ZodUnion,...Re(t)});const Oa=e=>e instanceof uo?Oa(e.schema):e instanceof Mn?Oa(e.innerType()):e instanceof fo?[e.value]:e instanceof Qr?e.options:e instanceof ho?Object.keys(e.enum):e instanceof po?Oa(e._def.innerType):e instanceof so?[void 0]:e instanceof oo?[null]:null;class Ol extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.object)return le(n,{code:J.invalid_type,expected:se.object,received:n.parsedType}),Se;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(le(n,{code:J.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Se)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,i){const o=new Map;for(const a of n){const l=Oa(a.shape[t]);if(!l)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(u)}`);o.set(u,a)}}return new Ol({typeName:Ee.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:o,...Re(i)})}}function Fu(e,t){const n=Hr(e),i=Hr(t);if(e===t)return{valid:!0,data:e};if(n===se.object&&i===se.object){const o=Ze.objectKeys(t),a=Ze.objectKeys(e).filter(u=>o.indexOf(u)!==-1),l={...e,...t};for(const u of a){const d=Fu(e[u],t[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===se.array&&i===se.array){if(e.length!==t.length)return{valid:!1};const o=[];for(let a=0;a<e.length;a++){const l=e[a],u=t[a],d=Fu(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===se.date&&i===se.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class lo extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=(a,l)=>{if(zu(a)||zu(l))return Se;const u=Fu(a.value,l.value);return u.valid?((Hu(a)||Hu(l))&&n.dirty(),{status:n.value,value:u.data}):(le(i,{code:J.invalid_intersection_types}),Se)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}lo.create=(e,t,n)=>new lo({left:e,right:t,typeName:Ee.ZodIntersection,...Re(n)});class Gn extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.array)return le(i,{code:J.invalid_type,expected:se.array,received:i.parsedType}),Se;if(i.data.length<this._def.items.length)return le(i,{code:J.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Se;!this._def.rest&&i.data.length>this._def.items.length&&(le(i,{code:J.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Kn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Bt.mergeArray(n,l)):Bt.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Gn({...this._def,rest:t})}}Gn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Gn({items:e,typeName:Ee.ZodTuple,rest:null,...Re(t)})};class co extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.object)return le(i,{code:J.invalid_type,expected:se.object,received:i.parsedType}),Se;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Kn(i,u,i.path,u)),value:l._parse(new Kn(i,i.data[u],i.path,u))});return i.common.async?Bt.mergeObjectAsync(n,o):Bt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(t,n,i){return n instanceof Ne?new co({keyType:t,valueType:n,typeName:Ee.ZodRecord,...Re(i)}):new co({keyType:Rn.create(),valueType:t,typeName:Ee.ZodRecord,...Re(n)})}}class Ja extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.map)return le(i,{code:J.invalid_type,expected:se.map,received:i.parsedType}),Se;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],f)=>({key:o._parse(new Kn(i,u,i.path,[f,"key"])),value:a._parse(new Kn(i,d,i.path,[f,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,h=await d.value;if(f.status==="aborted"||h.status==="aborted")return Se;(f.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(f.value,h.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const f=d.key,h=d.value;if(f.status==="aborted"||h.status==="aborted")return Se;(f.status==="dirty"||h.status==="dirty")&&n.dirty(),u.set(f.value,h.value)}return{status:n.value,value:u}}}}Ja.create=(e,t,n)=>new Ja({valueType:t,keyType:e,typeName:Ee.ZodMap,...Re(n)});class yi extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.parsedType!==se.set)return le(i,{code:J.invalid_type,expected:se.set,received:i.parsedType}),Se;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(le(i,{code:J.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(le(i,{code:J.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const h of d){if(h.status==="aborted")return Se;h.status==="dirty"&&n.dirty(),f.add(h.value)}return{status:n.value,value:f}}const u=[...i.data.values()].map((d,f)=>a._parse(new Kn(i,d,i.path,f)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(t,n){return new yi({...this._def,minSize:{value:t,message:me.toString(n)}})}max(t,n){return new yi({...this._def,maxSize:{value:t,message:me.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}yi.create=(e,t)=>new yi({valueType:e,minSize:null,maxSize:null,typeName:Ee.ZodSet,...Re(t)});class es extends Ne{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.function)return le(n,{code:J.invalid_type,expected:se.function,received:n.parsedType}),Se;function i(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Va(),ro].filter(f=>!!f),issueData:{code:J.invalid_arguments,argumentsError:d}})}function o(u,d){return Ka({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Va(),ro].filter(f=>!!f),issueData:{code:J.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;return this._def.returns instanceof ls?qt(async(...u)=>{const d=new Ln([]),f=await this._def.args.parseAsync(u,a).catch(v=>{throw d.addIssue(i(u,v)),d}),h=await l(...f);return await this._def.returns._def.type.parseAsync(h,a).catch(v=>{throw d.addIssue(o(h,v)),d})}):qt((...u)=>{const d=this._def.args.safeParse(u,a);if(!d.success)throw new Ln([i(u,d.error)]);const f=l(...d.data),h=this._def.returns.safeParse(f,a);if(!h.success)throw new Ln([o(f,h.error)]);return h.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new es({...this._def,args:Gn.create(t).rest(mi.create())})}returns(t){return new es({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,i){return new es({args:t||Gn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:Ee.ZodFunction,...Re(i)})}}class uo extends Ne{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}uo.create=(e,t)=>new uo({getter:e,typeName:Ee.ZodLazy,...Re(t)});class fo extends Ne{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return le(n,{received:n.data,code:J.invalid_literal,expected:this._def.value}),Se}return{status:"valid",value:t.data}}get value(){return this._def.value}}fo.create=(e,t)=>new fo({value:e,typeName:Ee.ZodLiteral,...Re(t)});function Om(e,t){return new Qr({values:e,typeName:Ee.ZodEnum,...Re(t)})}class Qr extends Ne{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),i=this._def.values;return le(n,{expected:Ze.joinValues(i),received:n.parsedType,code:J.invalid_type}),Se}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),i=this._def.values;return le(n,{received:n.data,code:J.invalid_enum_value,options:i}),Se}return qt(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return Qr.create(t)}exclude(t){return Qr.create(this.options.filter(n=>!t.includes(n)))}}Qr.create=Om;class ho extends Ne{_parse(t){const n=Ze.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(t);if(i.parsedType!==se.string&&i.parsedType!==se.number){const o=Ze.objectValues(n);return le(i,{expected:Ze.joinValues(o),received:i.parsedType,code:J.invalid_type}),Se}if(n.indexOf(t.data)===-1){const o=Ze.objectValues(n);return le(i,{received:i.data,code:J.invalid_enum_value,options:o}),Se}return qt(t.data)}get enum(){return this._def.values}}ho.create=(e,t)=>new ho({values:e,typeName:Ee.ZodNativeEnum,...Re(t)});class ls extends Ne{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==se.promise&&n.common.async===!1)return le(n,{code:J.invalid_type,expected:se.promise,received:n.parsedType}),Se;const i=n.parsedType===se.promise?n.data:Promise.resolve(n.data);return qt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ls.create=(e,t)=>new ls({type:e,typeName:Ee.ZodPromise,...Re(t)});class Mn extends Ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ee.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:i}=this._processInputParams(t),o=this._def.effect||null;if(o.type==="preprocess"){const l=o.transform(i.data);return i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}const a={addIssue:l=>{le(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Se:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Se:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Ga(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Ga(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);Ze.assertNever(o)}}Mn.create=(e,t,n)=>new Mn({schema:e,typeName:Ee.ZodEffects,effect:t,...Re(n)});Mn.createWithPreprocess=(e,t,n)=>new Mn({schema:t,effect:{type:"preprocess",transform:e},typeName:Ee.ZodEffects,...Re(n)});class br extends Ne{_parse(t){return this._getType(t)===se.undefined?qt(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}br.create=(e,t)=>new br({innerType:e,typeName:Ee.ZodOptional,...Re(t)});class bi extends Ne{_parse(t){return this._getType(t)===se.null?qt(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}bi.create=(e,t)=>new bi({innerType:e,typeName:Ee.ZodNullable,...Re(t)});class po extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t);let i=n.data;return n.parsedType===se.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}po.create=(e,t)=>new po({innerType:e,typeName:Ee.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Re(t)});class el extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Qa(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Ln(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Ln(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}el.create=(e,t)=>new el({innerType:e,typeName:Ee.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Re(t)});class tl extends Ne{_parse(t){if(this._getType(t)!==se.nan){const i=this._getOrReturnCtx(t);return le(i,{code:J.invalid_type,expected:se.nan,received:i.parsedType}),Se}return{status:"valid",value:t.data}}}tl.create=e=>new tl({typeName:Ee.ZodNaN,...Re(e)});const TE=Symbol("zod_brand");class Lm extends Ne{_parse(t){const{ctx:n}=this._processInputParams(t),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class $o extends Ne{_parse(t){const{status:n,ctx:i}=this._processInputParams(t);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Se:a.status==="dirty"?(n.dirty(),Rm(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Se:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(t,n){return new $o({in:t,out:n,typeName:Ee.ZodPipeline})}}const Pm=(e,t={},n)=>e?as.create().superRefine((i,o)=>{var a,l;if(!e(i)){const u=typeof t=="function"?t(i):typeof t=="string"?{message:t}:t,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...f,fatal:d})}}):as.create(),AE={object:lt.lazycreate};var Ee;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(Ee||(Ee={}));const IE=(e,t={message:`Input not instance of ${e.name}`})=>Pm(n=>n instanceof e,t),Mm=Rn.create,Bm=Kr.create,RE=tl.create,OE=Gr.create,jm=io.create,LE=vi.create,PE=Ya.create,ME=so.create,BE=oo.create,jE=as.create,NE=mi.create,DE=wr.create,UE=Xa.create,zE=Pn.create,HE=lt.create,FE=lt.strictCreate,qE=ao.create,WE=Ol.create,ZE=lo.create,VE=Gn.create,KE=co.create,GE=Ja.create,QE=yi.create,YE=es.create,XE=uo.create,JE=fo.create,eC=Qr.create,tC=ho.create,nC=ls.create,yg=Mn.create,rC=br.create,iC=bi.create,sC=Mn.createWithPreprocess,oC=$o.create,aC=()=>Mm().optional(),lC=()=>Bm().optional(),cC=()=>jm().optional(),uC={string:e=>Rn.create({...e,coerce:!0}),number:e=>Kr.create({...e,coerce:!0}),boolean:e=>io.create({...e,coerce:!0}),bigint:e=>Gr.create({...e,coerce:!0}),date:e=>vi.create({...e,coerce:!0})},dC=Se;var ct=Object.freeze({__proto__:null,defaultErrorMap:ro,setErrorMap:gE,getErrorMap:Va,makeIssue:Ka,EMPTY_PATH:mE,addIssueToContext:le,ParseStatus:Bt,INVALID:Se,DIRTY:Rm,OK:qt,isAborted:zu,isDirty:Hu,isValid:Ga,isAsync:Qa,get util(){return Ze},get objectUtil(){return Uu},ZodParsedType:se,getParsedType:Hr,ZodType:Ne,ZodString:Rn,ZodNumber:Kr,ZodBigInt:Gr,ZodBoolean:io,ZodDate:vi,ZodSymbol:Ya,ZodUndefined:so,ZodNull:oo,ZodAny:as,ZodUnknown:mi,ZodNever:wr,ZodVoid:Xa,ZodArray:Pn,ZodObject:lt,ZodUnion:ao,ZodDiscriminatedUnion:Ol,ZodIntersection:lo,ZodTuple:Gn,ZodRecord:co,ZodMap:Ja,ZodSet:yi,ZodFunction:es,ZodLazy:uo,ZodLiteral:fo,ZodEnum:Qr,ZodNativeEnum:ho,ZodPromise:ls,ZodEffects:Mn,ZodTransformer:Mn,ZodOptional:br,ZodNullable:bi,ZodDefault:po,ZodCatch:el,ZodNaN:tl,BRAND:TE,ZodBranded:Lm,ZodPipeline:$o,custom:Pm,Schema:Ne,ZodSchema:Ne,late:AE,get ZodFirstPartyTypeKind(){return Ee},coerce:uC,any:jE,array:zE,bigint:OE,boolean:jm,date:LE,discriminatedUnion:WE,effect:yg,enum:eC,function:YE,instanceof:IE,intersection:ZE,lazy:XE,literal:JE,map:GE,nan:RE,nativeEnum:tC,never:DE,null:BE,nullable:iC,number:Bm,object:HE,oboolean:cC,onumber:lC,optional:rC,ostring:aC,pipeline:oC,preprocess:sC,promise:nC,record:KE,set:QE,strictObject:FE,string:Mm,symbol:PE,transformer:yg,tuple:VE,undefined:ME,union:qE,unknown:NE,void:UE,NEVER:dC,ZodIssueCode:J,quotelessJson:pE,ZodError:Ln});const{decode:fC}=xo,hC=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,pC=/(?:#\[(?<idx>\d+)\])/g,gC=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,mC=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,vC=/:(?<emoji>\w+):/gu,Nm=e=>{const t=[...e.matchAll(hC),...e.matchAll(pC),...e.matchAll(gC),...e.matchAll(mC),...e.matchAll(vC)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=e.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return t.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=fC(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<e.length&&o(e.length),i},yC=e=>t=>e.safeParse(t).success,bC=ct.tuple([ct.literal("emoji"),ct.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),ct.string().url()]),_C=e=>{const t=e.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&no(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:t.length===1?"reply":o===0?"root":t.length===2||o===t.length-1?"reply":"mention";return t.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let wC=class extends Am{#e;#t;constructor(t){if(t.kind!==dt.Text)throw new TypeError("kind should be 1");super(t)}parsed(){return this.#t!=null?this.#t:(this.#t=Nm(this.content),this.#t)}resolveTagReference({tagIndex:t,content:n}){const i=this.rawEvent.tags[t];if(i==null)return;const o=i[0];if(o==="p"&&no(i[1]))return{type:"MentionedUser",tagIndex:t,content:n,pubkey:i[1]};if(o==="e"&&no(i[1])){const a=this.markedEventTags().find(l=>l.index===t);return{type:"MentionedEvent",tagIndex:t,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=_C(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:t})=>t==="reply")}rootEvent(){return this.markedEventTags().find(({marker:t})=>t==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:t})=>t==="mention")}contentWarning(){const t=this.findLastTagByName("content-warning");return t==null?{contentWarning:!1}:{contentWarning:!0,reason:(t[1]?.length??0)>0?t[1]:void 0}}containsEventMention(t){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===t);return this.containsEventNote(t)||this.containsEventMentionIndex(n)}containsEventMentionIndex(t){return t<0||t>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===t)}containsEventNote(t){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===t||n.data.type==="note"&&n.data.data===t))}emojiTags(){return this.rawEvent.tags.filter(yC(bC))}getEmojiUrl(t){const n=this.emojiTags().find(([,o])=>o===t);if(n==null)return null;const[,,i]=n;return i}};const vr=e=>new Am(e),Ll=e=>new wC(e),xC=()=>{const e=[...lE];return window.navigator.language.includes("ja")&&e.push(...cE),e},Dm=()=>({relayUrls:xC(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!1,showEmojiReaction:!1,showMedia:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),$C=e=>JSON.stringify(e),kC=e=>({...Dm(),...JSON.parse(e)}),EC=h5(()=>window.localStorage,$C,kC),[Gi,Qt]=p5("RabbitConfig",Dm(),EC),Pe=()=>{const e=I=>{Qt("relayUrls",S=>yr([...S,I]))},t=I=>{Qt("relayUrls",S=>S.filter(E=>E!==I))},n=I=>{Qt("mutedPubkeys",S=>yr([...S,I]))},i=I=>{Qt("mutedPubkeys",S=>S.filter(E=>E!==I))},o=I=>{Qt("mutedKeywords",S=>yr([...S,I]))},a=I=>{Qt("mutedKeywords",S=>S.filter(E=>E!==I))},l=I=>{Qt("columns",S=>{const E=S.findIndex(T=>T.id===I.id);if(E>=0){const T=[...S];return T.splice(E,1,I),T}return[...S,I]})},u=(I,S)=>{Qt("columns",E=>{const T=S-1,O=Math.max(Math.min(T,E.length),0),j=E.findIndex(W=>W.id===I);if(j<0||O===j)return E;console.log(j,O);const U=[...E],[te]=U.splice(j,1);return U.splice(O,0,te),U})},d=I=>{Qt("columns",S=>S.filter(E=>E.id!==I))},f=I=>{Qt("customEmojis",S=>({...S,[I.shortcode]:I}))},h=I=>{Qt("customEmojis",S=>{const E=Object.fromEntries(I.map(T=>[T.shortcode,T]));return{...S,...E}})},g=I=>{Qt("customEmojis",S=>({...S,[I]:void 0}))},v=I=>Gi.customEmojis[I],w=I=>wm.sortBy(Object.values(Gi.customEmojis).filter(({shortcode:S})=>S.includes(I)),[S=>S.shortcode.length]),$=I=>Gi.mutedPubkeys.includes(I),k=I=>I.kind===dt.Text?Gi.mutedKeywords.some(S=>I.content.includes(S)):!1;return{config:()=>Gi,setConfig:Qt,addRelay:e,removeRelay:t,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:I})=>{if((Gi.columns?.length??0)>0)return;const S=[$m({width:"widest",pubkey:I}),km({pubkey:I}),Cm({name:"自分の投稿",pubkey:I}),Sm({name:"自分のリアクション",pubkey:I})];navigator.language.includes("ja")&&S.splice(2,0,Em()),Qt("columns",()=>[...S])},saveEmoji:f,saveEmojis:h,removeEmoji:g,getEmoji:v,searchEmojis:w,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:$,shouldMuteEvent:I=>{const S=vr(I);return $(I.pubkey)||S.taggedPubkeys().some($)||I.kind===dt.Text&&k(I)}}},[CC]=be(new s9({eoseSubTimeout:7500})),Pl=()=>CC,[Um,bg]=ns({activeSubscriptions:0,activeBatchSubscriptions:0});setInterval(()=>{console.debug("stats",{...Um})},1e3);const zm=()=>({stats:Um,setActiveSubscriptions:n=>bg("activeSubscriptions",n),setActiveBatchSubscriptions:n=>bg("activeBatchSubscriptions",n)});let _g=0;const SC=()=>{const e=_g;return _g+=1,e};class TC{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(t){this.id=SC(),this.req=t}#n(t){this.#e.forEach(n=>{n(t)})}#r(){this.#t.forEach(t=>{t()})}update(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=t,this.#n(t)}updateWith(t){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(t(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(t){this.#e.push(t)}subscribe(t){this.onUpdate(t)}onComplete(t){this.#t.push(t)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const t=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([t,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((t,n)=>{this.onComplete(()=>{this.res!=null?t(this.res):n(new Error("result was not set"))})})}}const AC=e=>{const t=We(e),n=We(()=>t().batchSize??100),i=We(()=>t().interval??2e3),[o,a]=be([]);let l;const u=()=>{const{executor:g}=t(),v=o();v.length>0&&(a([]),g(v)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(v=>[...v,g]):(u(),a([g])),d()},removeTask:g=>{a(v=>v.filter(w=>w!==g))}}},jd=e=>e.length===0?null:e.reduce((t,n)=>{const i=t.created_at-n.created_at;return i>0?t:i<0?n:t.id<n.id?t:n});class $i extends TC{addEvent(t){this.updateWith(n=>[...n??[],t])}firstEventPromise(){return this.toUpdatePromise().then(t=>t[0])}latestEventPromise(){return this.toCompletePromise().then(t=>{const n=jd(t);if(n==null)throw new Error("event not found");return n})}}let qu=0;const{setActiveBatchSubscriptions:IC}=zm();setInterval(()=>{IC(qu)},1e3);const RC=e=>e.kind>=3e4&&e.kind<4e4,OC=({kind:e,author:t,identifier:n})=>`${e}:${t}:${n}`,{addTask:LC,removeTask:PC}=AC(()=>({interval:2e3,batchSize:150,executor:e=>{const t=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;e.forEach(E=>{if(E.req.type==="Event"){const T=n.get(E.req.eventId)??[];n.set(E.req.eventId,[...T,E])}else if(E.req.type==="Profile"){const T=t.get(E.req.pubkey)??[];t.set(E.req.pubkey,[...T,E])}else if(E.req.type==="Reactions"){const T=i.get(E.req.mentionedEventId)??[];i.set(E.req.mentionedEventId,[...T,E])}else if(E.req.type==="Reposts"){const T=o.get(E.req.mentionedEventId)??[];o.set(E.req.mentionedEventId,[...T,E])}else if(E.req.type==="ZapReceipts"){const T=a.get(E.req.mentionedEventId)??[];o.set(E.req.mentionedEventId,[...T,E])}else if(E.req.type==="ParameterizedReplaceableEvent"){const T=OC(E.req),O=l.get(T)??[];l.set(T,[...O,E])}else if(E.req.type==="Followings"){const T=u.get(E.req.pubkey)??[];u.set(E.req.pubkey,[...T,E])}});const d=[...n.keys()],f=[...t.keys()],h=[...i.keys()],g=[...o.keys()],v=[...a.keys()],w=[...u.keys()],$=[];if(d.length>0&&$.push({ids:d}),f.length>0&&$.push({kinds:[dt.Metadata],authors:f}),h.length>0&&$.push({kinds:[dt.Reaction],"#e":h}),g.length>0&&$.push({kinds:[6],"#e":g}),v.length>0&&$.push({kinds:[9735],"#e":v}),w.length>0&&$.push({kinds:[dt.Contacts],authors:w}),l.size>0&&Array.from(l.values()).forEach(([E])=>{if(E.req.type!=="ParameterizedReplaceableEvent")return;const{req:{kind:T,author:O,identifier:j}}=E;$.push({kinds:[T],authors:[O],"#d":[j]})}),$.length===0)return;const k=(E,T)=>{E.forEach(O=>{O.addEvent(T)})},_=()=>{e.forEach(E=>{E.complete()})},{config:C}=Pe(),S=Pl()().sub(C().relayUrls,$,{});qu+=1,S.on("event",E=>{if(E.kind===dt.Metadata){const T=t.get(E.pubkey)??[];k(T,E);return}if(E.kind===dt.Reaction){const T=vr(E).lastTaggedEventId();if(T!=null){const O=i.get(T)??[];k(O,E)}}else if(E.kind===6){const T=vr(E).lastTaggedEventId();if(T!=null){const O=o.get(T)??[];k(O,E)}}else if(E.kind===dt.Zap)vr(E).eTags().forEach(([,O])=>{const j=o.get(O)??[];k(j,E)});else if(E.kind===dt.Contacts){const T=u.get(E.pubkey)??[];k(T,E)}else if(RC(E)){const T=vr(E).findFirstTagByName("d")?.[1];if(T!=null){const O=`${E.kind}:${E.pubkey}:${T}`,j=l.get(O)??[];k(j,E)}else console.warn("identifier is undefined")}else{const T=n.get(E.id)??[];T.length>0?k(T,E):console.warn("unknown event received")}}),S.on("eose",()=>{_(),S.unsub(),qu-=1})}})),ko=({task:e,signal:t})=>{LC(e),t?.addEventListener("abort",()=>PC(e))};class MC extends Error{}const ki=(e,t)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=t!=null?`TimeoutError: ${t}`:"TimeoutError";a(new MC(l))},e)});return Promise.race([n,i])},Hm=e=>{const t=We(e),n=wi(()=>["useEvent",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new $i({type:"Event",eventId:u}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return ko({task:d,signal:a}),ki(15e3,`useEvent: ${u}`)(f)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},cn=e=>t=>e.some(n=>n==null)?null:t(e),BC=B("<span>投稿が見つかりません"),jC=B('<div class="truncate">読み込み中 '),cs=e=>{const[t,n]=s5(e,["eventId"]),{shouldMuteEvent:i}=Pe(),{event:o,query:a}=Hm(()=>cn([t.eventId])(([u])=>({eventId:u}))),l=()=>{const u=o();return u!=null&&i(u)};return b(ln,{get fallback(){return(()=>{const u=BC();return u.firstChild,A(u,()=>e.eventId,null),u})()},get children(){return[b(ze,{get when(){return l()},children:null}),b(ze,{get when(){return o()},keyed:!0,children:u=>b(Nv,o5({event:u},n))}),b(ze,{get when(){return a.isLoading&&t.eventId},keyed:!0,children:u=>(()=>{const d=jC();return d.firstChild,A(d,b(to,{eventId:u}),null),d})()})]}})},NC=e=>{if(e==null||e.length===0)throw new TypeError("content is empty or null");return JSON.parse(e)},DC=e=>{try{return NC(e)}catch(t){return console.warn("failed to parse profile (kind 0): ",t,e),null}},Fm=({taskProvider:e,queryClient:t})=>({queryKey:n,signal:i})=>{const o=e(n);if(o==null)return Promise.resolve(null);const a=o.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return o.onUpdate(l=>{const u=jd(l);t.setQueryData(n,u)}),ko({task:o,signal:i}),ki(15e3,`${JSON.stringify(n)}`)(a)},qm=({taskProvider:e,queryClient:t})=>({queryKey:n,signal:i})=>{const o=e(n);if(o==null)return Promise.resolve([]);const a=o.toUpdatePromise().catch(()=>[]);return o.onUpdate(l=>{t.setQueryData(n,l)}),ko({task:o,signal:i}),ki(15e3,`${JSON.stringify(n)}`)(a)},Ei=e=>{const t=_i(),n=We(e),i=We(()=>["useProfile",n()]),o=wi(i,Fm({taskProvider:([,u])=>{if(u==null)return null;const{pubkey:d}=u;return new $i({type:"Profile",pubkey:d})},queryClient:t}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1});return{profile:We(()=>{if(o.data==null)return null;const{content:u}=o.data;return DC(u)}),invalidateProfile:()=>t.invalidateQueries(i()),query:o}},{npubEncode:UC}=xo,Eo=e=>{try{return UC(e)}catch{return console.error("failed to encode pubkey into npub",e),e}},Ml=e=>{const{profile:t}=Ei(()=>({pubkey:e.pubkey}));return b(ln,{get fallback(){return Eo(e.pubkey)},get children(){return[b(ze,{get when(){return(t()?.display_name?.length??0)>0},get children(){return t()?.display_name}}),b(ze,{get when(){return(t()?.name?.length??0)>0},get children(){return["@",We(()=>t()?.name)]}})]}})},Wm=e=>{const[t,n]=be(new Date);return On(()=>{const i=setInterval(()=>{n(new Date)},e().interval);qn(()=>clearInterval(i))}),t},zC=e=>{switch(e.kind){case"now":return"now";case"seconds":return`${e.value}s`;case"minutes":return`${e.value}m`;case"hours":return`${e.value}h`;case"days":return`${e.value}d`;case"abs":default:return e.value.toLocaleDateString()}},wg=e=>`${e.getHours()}:${e.getMinutes().toString().padStart(2,"0")}`,HC=e=>{switch(e.kind){case"today":return e.value.toLocaleTimeString();case"yesterday":case"abs":default:return e.value.toLocaleString()}},FC=e=>{switch(e.kind){case"today":return wg(e.value);case"yesterday":return`昨日 ${wg(e.value)}`;case"abs":default:return e.value.toLocaleString()}},qC=(e,t)=>Math.round(Number(t)-Number(e))/1e3,WC=(e,t)=>{const n=qC(e,t);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:e}},xg=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),ZC=e=>new Date(+e-24*60*60*1e3),Zm=(e,t,n)=>xg(e,t)?n({kind:"today",value:e}):xg(e,ZC(t))?n({kind:"yesterday",value:e}):n({kind:"abs",value:e}),VC=(e,t=new Date)=>Zm(e,t,HC),KC=(e,t=new Date)=>Zm(e,t,FC),$g=(e,t=new Date,n=zC)=>n(WC(e,t)),kg=Wm(()=>({interval:7e3})),Eg=Wm(()=>({interval:60*1e3})),Vm=()=>{const{config:e}=Pe();return t=>{switch(e().dateFormat){case"absolute-long":return VC(t,Eg());case"absolute-short":return KC(t,Eg());case"relative":return $g(t,kg());default:return $g(t,kg())}}},[GC,Qi]=be({type:"Closed"}),$r=()=>({modalState:GC,setModalState:Qi,showProfile:a=>{Qi({type:"Profile",pubkey:a})},showProfileEdit:()=>{Qi({type:"ProfileEdit"})},showAddColumn:()=>{Qi({type:"AddColumn"})},showAbout:()=>{Qi({type:"About"})},closeModal:()=>{Qi({type:"Closed"})}}),QC=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),Km=e=>{const t=mt(),{showProfile:n}=$r(),i=Vm(),o=We(()=>vr(e.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=QC(),u=l.firstChild,d=u.firstChild,f=d.nextSibling,h=f.firstChild,g=f.nextSibling,v=u.nextSibling;return A(d,b(_m,{})),h.$$click=()=>n(e.event.pubkey),A(h,b(Ml,{get pubkey(){return e.event.pubkey}})),A(f,()=>t()("notification.reposted"),null),A(g,()=>i(o().createdAtAsDate())),A(v,b(cs,{get eventId(){return a()}})),l})()};it(["click"]);const YC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),XC=(e={})=>(()=>{const t=YC();return Ge(t,e,!0,!0),t})(),JC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),Gm=(e={})=>(()=>{const t=JC();return Ge(t,e,!0,!0),t})(),eS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),Nd=(e={})=>(()=>{const t=eS();return Ge(t,e,!0,!0),t})(),tS=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),Qm=(e={})=>(()=>{const t=tS();return Ge(t,e,!0,!0),t})(),nS=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),nl=(e={})=>(()=>{const t=nS();return Ge(t,e,!0,!0),t})(),rS=B('<div><button type="button" class="flex items-center"></button><div class="absolute z-20">'),Dd=e=>{let t,n;const[i,o]=be(!1),[a,l]=be({}),u=a5(()=>e.children),d=()=>o(!1),f=()=>o($=>!$),h=$=>{const k=$.target;k!=null&&!n?.contains(k)&&d()},g=()=>{document.addEventListener("mousedown",h)},v=()=>{document.removeEventListener("mousedown",h)},w=()=>{if(t==null||n==null)return;const $=t?.getBoundingClientRect(),k=n?.getBoundingClientRect();let{top:_,left:C}=$;e.position==="left"?C-=$.width:e.position==="right"?C+=$.width:e.position==="top"?(_-=$.height,C-=$.left+$.width/2):(_+=$.height,C+=$.width/2),_=Math.min(_,window.innerHeight-k.height),C=Math.min(C,window.innerWidth-k.width),l({left:`${C}px`,top:`${_}px`})};return On(()=>{i()?(g(),e.onOpen?.()):(v(),e.onClose?.())}),On(fl(u,()=>{w()})),On(()=>{i()&&w()}),un(()=>{e.ref?.({close:d})}),qn(()=>v()),(()=>{const $=rS(),k=$.firstChild,_=k.nextSibling;k.$$click=()=>{f(),w()};const C=t;typeof C=="function"?Wn(C,k):t=k,A(k,()=>e.button);const I=n;return typeof I=="function"?Wn(I,_):n=_,A(_,u),Ie(S=>{const E=!i(),T=!!i(),O=a();return E!==S._v$&&_.classList.toggle("hidden",S._v$=E),T!==S._v$2&&_.classList.toggle("block",S._v$2=T),S._v$3=l5(_,O,S._v$3),S},{_v$:void 0,_v$2:void 0,_v$3:void 0}),$})()};it(["click"]);const iS=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),sS=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),oS=e=>{const t=()=>{e.item?.onSelect?.(),e.onClose()};return(()=>{const n=iS(),i=n.firstChild;return i.$$click=t,A(i,()=>e.item.content()),n})()},Ym=e=>{let t;const n=()=>t?.close();return b(Dd,{ref:i=>{t=i},get button(){return e.children},position:"bottom",get children(){const i=sS();return A(i,b(St,{get each(){return e.menu.filter(o=>o.when==null||o.when())},children:o=>b(oS,{item:o,onClose:n})})),i}})};it(["click"]);function Xm(e){return e&&e.__esModule?e.default:e}function An(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Bl,ye,Jm,Ks,ev,Cg,rl={},tv=[],aS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Fr(e,t){for(var n in t)e[n]=t[n];return e}function nv(e){var t=e.parentNode;t&&t.removeChild(e)}function Wu(e,t,n){var i,o,a,l={};for(a in t)a=="key"?i=t[a]:a=="ref"?o=t[a]:l[a]=t[a];if(arguments.length>2&&(l.children=arguments.length>3?Bl.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)l[a]===void 0&&(l[a]=e.defaultProps[a]);return La(e,l,i,o,null)}function La(e,t,n,i,o){var a={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Jm};return o==null&&ye.vnode!=null&&ye.vnode(a),a}function pr(){return{current:null}}function us(e){return e.children}function Fn(e,t){this.props=e,this.context=t}function ds(e,t){if(t==null)return e.__?ds(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?ds(e):null}function rv(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return rv(e)}}function Sg(e){(!e.__d&&(e.__d=!0)&&Ks.push(e)&&!il.__r++||Cg!==ye.debounceRendering)&&((Cg=ye.debounceRendering)||ev)(il)}function il(){for(var e;il.__r=Ks.length;)e=Ks.sort(function(t,n){return t.__v.__b-n.__v.__b}),Ks=[],e.some(function(t){var n,i,o,a,l,u;t.__d&&(l=(a=(n=t).__v).__e,(u=n.__P)&&(i=[],(o=Fr({},a)).__v=a.__v+1,Ud(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??ds(a),a.__h),av(i,a),a.__e!=l&&rv(a)))})}function iv(e,t,n,i,o,a,l,u,d,f){var h,g,v,w,$,k,_,C=i&&i.__k||tv,I=C.length;for(n.__k=[],h=0;h<t.length;h++)if((w=n.__k[h]=(w=t[h])==null||typeof w=="boolean"?null:typeof w=="string"||typeof w=="number"||typeof w=="bigint"?La(null,w,null,null,w):Array.isArray(w)?La(us,{children:w},null,null,null):w.__b>0?La(w.type,w.props,w.key,null,w.__v):w)!=null){if(w.__=n,w.__b=n.__b+1,(v=C[h])===null||v&&w.key==v.key&&w.type===v.type)C[h]=void 0;else for(g=0;g<I;g++){if((v=C[g])&&w.key==v.key&&w.type===v.type){C[g]=void 0;break}v=null}Ud(e,w,v=v||rl,o,a,l,u,d,f),$=w.__e,(g=w.ref)&&v.ref!=g&&(_||(_=[]),v.ref&&_.push(v.ref,null,w),_.push(g,w.__c||$,w)),$!=null?(k==null&&(k=$),typeof w.type=="function"&&w.__k===v.__k?w.__d=d=sv(w,d,e):d=ov(e,w,v,C,$,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=e&&(d=ds(v))}for(n.__e=k,h=I;h--;)C[h]!=null&&(typeof n.type=="function"&&C[h].__e!=null&&C[h].__e==n.__d&&(n.__d=ds(i,h+1)),cv(C[h],C[h]));if(_)for(h=0;h<_.length;h++)lv(_[h],_[++h],_[++h])}function sv(e,t,n){for(var i,o=e.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=e,t=typeof i.type=="function"?sv(i,t,n):ov(n,i,i,o,i.__e,t));return t}function sl(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){sl(n,t)}):t.push(e)),t}function ov(e,t,n,i,o,a){var l,u,d;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;e.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function lS(e,t,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in t||ol(e,a,null,n[a],i);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===t[a]||ol(e,a,t[a],n[a],i)}function Tg(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||aS.test(t)?n:n+"px"}function ol(e,t,n,i,o){var a;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||Tg(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||Tg(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?i||e.addEventListener(t,a?Ig:Ag,a):e.removeEventListener(t,a?Ig:Ag,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function Ag(e){this.l[e.type+!1](ye.event?ye.event(e):e)}function Ig(e){this.l[e.type+!0](ye.event?ye.event(e):e)}function Ud(e,t,n,i,o,a,l,u,d){var f,h,g,v,w,$,k,_,C,I,S,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=t.__e=n.__e,t.__h=null,a=[u]),(f=ye.__b)&&f(t);try{e:if(typeof E=="function"){if(_=t.props,C=(f=E.contextType)&&i[f.__c],I=f?C?C.props.value:f.__:i,n.__c?k=(h=t.__c=n.__c).__=h.__E:("prototype"in E&&E.prototype.render?t.__c=h=new E(_,I):(t.__c=h=new Fn(_,I),h.constructor=E,h.render=uS),C&&C.sub(h),h.props=_,h.state||(h.state={}),h.context=I,h.__n=i,g=h.__d=!0,h.__h=[]),h.__s==null&&(h.__s=h.state),E.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=Fr({},h.__s)),Fr(h.__s,E.getDerivedStateFromProps(_,h.__s))),v=h.props,w=h.state,g)E.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(E.getDerivedStateFromProps==null&&_!==v&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(_,I),!h.__e&&h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(_,h.__s,I)===!1||t.__v===n.__v){h.props=_,h.state=h.__s,t.__v!==n.__v&&(h.__d=!1),h.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),h.__h.length&&l.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(_,h.__s,I),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(v,w,$)})}h.context=I,h.props=_,h.state=h.__s,(f=ye.__r)&&f(t),h.__d=!1,h.__v=t,h.__P=e,f=h.render(h.props,h.state,h.context),h.state=h.__s,h.getChildContext!=null&&(i=Fr(Fr({},i),h.getChildContext())),g||h.getSnapshotBeforeUpdate==null||($=h.getSnapshotBeforeUpdate(v,w)),S=f!=null&&f.type===us&&f.key==null?f.props.children:f,iv(e,Array.isArray(S)?S:[S],t,n,i,o,a,l,u,d),h.base=t.__e,t.__h=null,h.__h.length&&l.push(h),k&&(h.__E=h.__=null),h.__e=!1}else a==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=cS(n.__e,t,n,i,o,a,l,d);(f=ye.diffed)&&f(t)}catch(T){t.__v=null,(d||a!=null)&&(t.__e=u,t.__h=!!d,a[a.indexOf(u)]=null),ye.__e(T,t,n)}}function av(e,t){ye.__c&&ye.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(i){i.call(n)})}catch(i){ye.__e(i,n.__v)}})}function cS(e,t,n,i,o,a,l,u){var d,f,h,g=n.props,v=t.props,w=t.type,$=0;if(w==="svg"&&(o=!0),a!=null){for(;$<a.length;$++)if((d=a[$])&&"setAttribute"in d==!!w&&(w?d.localName===w:d.nodeType===3)){e=d,a[$]=null;break}}if(e==null){if(w===null)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,v.is&&v),a=null,u=!1}if(w===null)g===v||u&&e.data===v||(e.data=v);else{if(a=a&&Bl.call(e.childNodes),f=(g=n.props||rl).dangerouslySetInnerHTML,h=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},$=0;$<e.attributes.length;$++)g[e.attributes[$].name]=e.attributes[$].value;(h||f)&&(h&&(f&&h.__html==f.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}if(lS(e,v,g,o,u),h)t.__k=[];else if($=t.props.children,iv(e,Array.isArray($)?$:[$],t,n,i,o&&w!=="foreignObject",a,l,a?a[0]:n.__k&&ds(n,0),u),a!=null)for($=a.length;$--;)a[$]!=null&&nv(a[$]);u||("value"in v&&($=v.value)!==void 0&&($!==g.value||$!==e.value||w==="progress"&&!$)&&ol(e,"value",$,g.value,!1),"checked"in v&&($=v.checked)!==void 0&&$!==e.checked&&ol(e,"checked",$,g.checked,!1))}return e}function lv(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){ye.__e(i,n)}}function cv(e,t,n){var i,o;if(ye.unmount&&ye.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||lv(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){ye.__e(a,t)}i.base=i.__P=null}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&cv(i[o],t,typeof e.type!="function");n||e.__e==null||nv(e.__e),e.__e=e.__d=void 0}function uS(e,t,n){return this.constructor(e,n)}function uv(e,t,n){var i,o,a;ye.__&&ye.__(e,t),o=(i=typeof n=="function")?null:n&&n.__k||t.__k,a=[],Ud(t,e=(!i&&n||t).__k=Wu(us,null,[e]),o||rl,rl,t.ownerSVGElement!==void 0,!i&&n?[n]:o?null:t.firstChild?Bl.call(t.childNodes):null,a,!i&&n?n:o?o.__e:t.firstChild,i),av(a,e)}Bl=tv.slice,ye={__e:function(e,t){for(var n,i,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(e)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(a){e=a}throw e}},Jm=0,Fn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Fr({},this.state),typeof e=="function"&&(e=e(Fr({},n),this.props)),e&&Fr(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Sg(this))},Fn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Sg(this))},Fn.prototype.render=us,Ks=[],ev=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,il.__r=0;var dS=0;function Z(e,t,n,i,o){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--dS,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return ye.vnode&&ye.vnode(d),d}function fS(e,t){try{window.localStorage[`emoji-mart.${e}`]=JSON.stringify(t)}catch{}}function hS(e){try{const t=window.localStorage[`emoji-mart.${e}`];if(t)return JSON.parse(t)}catch{}}var Wr={set:fS,get:hS};const bu=new Map,pS=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function gS(){for(const{v:e,emoji:t}of pS)if(dv(t))return e}function mS(){return!dv("🇨🇦")}function dv(e){if(bu.has(e))return bu.get(e);const t=vS(e);return bu.set(e,t),t}const vS=(()=>{let e=null;try{navigator.userAgent.includes("jsdom")||(e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!e)return()=>!1;const t=25,n=20,i=Math.floor(t/2);return e.font=i+"px Arial, Sans-Serif",e.textBaseline="top",e.canvas.width=n*2,e.canvas.height=t,o=>{e.clearRect(0,0,n*2,t),e.fillStyle="#FF0000",e.fillText(o,0,22),e.fillStyle="#0000FF",e.fillText(o,n,22);const a=e.getImageData(0,0,n,t).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,f=Math.floor(u/4/n),h=e.getImageData(d,f,1,1).data;return!(a[u]!==h[0]||a[u+2]!==h[2]||e.measureText(o).width>=n)}})();var Rg={latestVersion:gS,noCountryFlags:mS};const Zu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Rt=null;function yS(e){Rt||(Rt=Wr.get("frequently")||{});const t=e.id||e;t&&(Rt[t]||(Rt[t]=0),Rt[t]+=1,Wr.set("last",t),Wr.set("frequently",Rt))}function bS({maxFrequentRows:e,perLine:t}){if(!e)return[];Rt||(Rt=Wr.get("frequently"));let n=[];if(!Rt){Rt={};for(let a in Zu.slice(0,t)){const l=Zu[a];Rt[l]=t-a,n.push(l)}return n}const i=e*t,o=Wr.get("last");for(let a in Rt)n.push(a);if(n.sort((a,l)=>{const u=Rt[l],d=Rt[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete Rt[l];o&&n.indexOf(o)==-1&&(delete Rt[n[n.length-1]],n.splice(-1,1,o)),Wr.set("frequently",Rt)}return n}var fv={add:yS,get:bS,DEFAULTS:Zu},hv={};hv=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var mr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Mt=null,Ue=null;const _u={};async function Og(e){if(_u[e])return _u[e];const n=await(await fetch(e)).json();return _u[e]=n,n}let wu=null,pv=null,gv=!1;function jl(e,{caller:t}={}){return wu||(wu=new Promise(n=>{pv=n})),e?_S(e):t&&!gv&&console.warn(`\`${t}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),wu}async function _S(e){gv=!0;let{emojiVersion:t,set:n,locale:i}=e;if(t||(t=mr.emojiVersion.value),n||(n=mr.set.value),i||(i=mr.locale.value),Ue)Ue.categories=Ue.categories.filter(d=>!d.name);else{Ue=(typeof e.data=="function"?await e.data():e.data)||await Og(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${t}/${n}.json`),Ue.emoticons={},Ue.natives={},Ue.categories.unshift({id:"frequent",emojis:[]});for(const d in Ue.aliases){const f=Ue.aliases[d],h=Ue.emojis[f];h&&(h.aliases||(h.aliases=[]),h.aliases.push(d))}Ue.originalCategories=Ue.categories}if(Mt=(typeof e.i18n=="function"?await e.i18n():e.i18n)||(i=="en"?Xm(hv):await Og(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),e.custom)for(let d in e.custom){d=parseInt(d);const f=e.custom[d],h=e.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Mt.categories.custom),h&&!f.icon&&(f.target=h.target||h),Ue.categories.push(f);for(const g of f.emojis)Ue.emojis[g.id]=g}}e.categories&&(Ue.categories=Ue.originalCategories.filter(d=>e.categories.indexOf(d.id)!=-1).sort((d,f)=>{const h=e.categories.indexOf(d.id),g=e.categories.indexOf(f.id);return h-g}));let o=null,a=null;n=="native"&&(o=Rg.latestVersion(),a=e.noCountryFlags||Rg.noCountryFlags());let l=Ue.categories.length,u=!1;for(;l--;){const d=Ue.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=e;g=g>=0?g:mr.maxFrequentRows.value,v||(v=mr.perLine.value),d.emojis=fv.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){Ue.categories.splice(l,1);continue}const{categoryIcons:f}=e;if(f){const g=f[d.id];g&&!d.icon&&(d.icon=g)}let h=d.emojis.length;for(;h--;){const g=d.emojis[h],v=g.id?g:Ue.emojis[g],w=()=>{d.emojis.splice(h,1)};if(!v||e.exceptEmojis&&e.exceptEmojis.includes(v.id)){w();continue}if(o&&v.version>o){w();continue}if(a&&d.id=="flags"&&!ES.includes(v.id)){w();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([k,_])=>{if(k)return(Array.isArray(k)?k:[k]).map(C=>(_?C.split(/[-|_|\s]+/):[C]).map(I=>I.toLowerCase())).flat()}).flat().filter(k=>k&&k.trim()).join(","),v.emoticons)for(const k of v.emoticons)Ue.emoticons[k]||(Ue.emoticons[k]=v.id);let $=0;for(const k of v.skins){if(!k)continue;$++;const{native:_}=k;_&&(Ue.natives[_]=v.id,v.search+=`,${_}`);const C=$==1?"":`:skin-tone-${$}:`;k.shortcodes=`:${v.id}:${C}`}}}}u&&ts.reset(),pv()}function mv(e,t,n){e||(e={});const i={};for(let o in t)i[o]=vv(o,e,t,n);return i}function vv(e,t,n,i){const o=n[e];let a=i&&i.getAttribute(e)||(t[e]!=null&&t[e]!=null?t[e]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const wS=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Vu=null;function xS(e){return e.id?e:Ue.emojis[e]||Ue.emojis[Ue.aliases[e]]||Ue.emojis[Ue.natives[e]]}function $S(){Vu=null}async function kS(e,{maxResults:t,caller:n}={}){if(!e||!e.trim().length)return null;t||(t=90),await jl(null,{caller:n||"SearchIndex.search"});const i=e.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,f)=>u.trim()&&f.indexOf(u)==d);if(!i.length)return;let o=Vu||(Vu=Object.values(Ue.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${u}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:f+1)}o=a}return a.length<2||(a.sort((u,d)=>{const f=l[u.id],h=l[d.id];return f==h?u.id.localeCompare(d.id):f-h}),a.length>t&&(a=a.slice(0,t))),a}var ts={search:kS,get:xS,reset:$S,SHORTCODES_REGEX:wS};const ES=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function CS(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((n,i)=>n==t[i])}async function SS(e=1){for(let t in[...Array(e).keys()])await new Promise(requestAnimationFrame)}function TS(e,{skinIndex:t=0}={}){const n=e.skins[t]||(()=>(t=0,e.skins[t]))(),i={id:e.id,name:e.name,native:n.native,unified:n.unified,keywords:e.keywords,shortcodes:n.shortcodes||e.shortcodes};return e.skins.length>1&&(i.skin=t+1),n.src&&(i.src=n.src),e.aliases&&e.aliases.length&&(i.aliases=e.aliases),e.emoticons&&e.emoticons.length&&(i.emoticons=e.emoticons),i}const AS={activity:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Z("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),Z("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:Z("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),Z("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:Z("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),Z("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[Z("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),Z("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:Z("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Z("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},IS={loupe:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:Z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Z("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var al={categories:AS,search:IS};function Ku(e){let{id:t,skin:n,emoji:i}=e;if(e.shortcodes){const u=e.shortcodes.match(ts.SHORTCODES_REGEX);u&&(t=u[1],u[2]&&(n=u[2]))}if(i||(i=ts.get(t||e.native)),!i)return e.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(e.set!="native"&&!e.spritesheet?typeof e.getImageURL=="function"?e.getImageURL(e.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/64/${o.unified}.png`:void 0),l=typeof e.getSpritesheetURL=="function"?e.getSpritesheetURL(e.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${e.set}@14.0.0/img/${e.set}/sheets-256/64.png`;return Z("span",{class:"emoji-mart-emoji","data-emoji-set":e.set,children:a?Z("img",{style:{maxWidth:e.size||"1em",maxHeight:e.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):e.set=="native"?Z("span",{style:{fontSize:e.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):Z("span",{style:{display:"block",width:e.size,height:e.size,backgroundImage:`url(${l})`,backgroundSize:`${100*Ue.sheet.cols}% ${100*Ue.sheet.rows}%`,backgroundPosition:`${100/(Ue.sheet.cols-1)*o.x}% ${100/(Ue.sheet.rows-1)*o.y}%`}})})}const RS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class yv extends RS{static get observedAttributes(){return Object.keys(this.Props)}update(t={}){for(let n in t)this.attributeChangedCallback(n,null,t[n])}attributeChangedCallback(t,n,i){if(!this.component)return;const o=vv(t,{[t]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[t]:o}):(this.component.props[t]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(t={}){if(super(),this.props=t,t.parent||t.ref){let n=null;const i=t.parent||(n=t.ref&&t.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class OS extends yv{setShadow(){this.attachShadow({mode:"open"})}injectStyles(t){if(!t)return;const n=document.createElement("style");n.textContent=t,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(t,{styles:n}={}){super(t),this.setShadow(),this.injectStyles(n)}}var bv={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:e=>/\D/.test(e)?e:`${e}px`},set:mr.set,skin:mr.skin};class _v extends yv{async connectedCallback(){const t=mv(this.props,bv,this);t.element=this,t.ref=n=>{this.component=n},await jl(),!this.disconnected&&uv(Z(Ku,{...t}),this)}constructor(t){super(t)}}An(_v,"Props",bv);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",_v);var Lg,Gu=[],Pg=ye.__b,Mg=ye.__r,Bg=ye.diffed,jg=ye.__c,Ng=ye.unmount;function LS(){var e;for(Gu.sort(function(t,n){return t.__v.__b-n.__v.__b});e=Gu.pop();)if(e.__P)try{e.__H.__h.forEach(Pa),e.__H.__h.forEach(Qu),e.__H.__h=[]}catch(t){e.__H.__h=[],ye.__e(t,e.__v)}}ye.__b=function(e){Pg&&Pg(e)},ye.__r=function(e){Mg&&Mg(e);var t=e.__c.__H;t&&(t.__h.forEach(Pa),t.__h.forEach(Qu),t.__h=[])},ye.diffed=function(e){Bg&&Bg(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Gu.push(t)!==1&&Lg===ye.requestAnimationFrame||((Lg=ye.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),Dg&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);Dg&&(i=requestAnimationFrame(o))})(LS))},ye.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Pa),n.__h=n.__h.filter(function(i){return!i.__||Qu(i)})}catch(i){t.some(function(o){o.__h&&(o.__h=[])}),t=[],ye.__e(i,n.__v)}}),jg&&jg(e,t)},ye.unmount=function(e){Ng&&Ng(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Pa(i)}catch(o){t=o}}),t&&ye.__e(t,n.__v))};var Dg=typeof requestAnimationFrame=="function";function Pa(e){var t=e.__c;typeof t=="function"&&(e.__c=void 0,t())}function Qu(e){e.__c=e.__()}function PS(e,t){for(var n in t)e[n]=t[n];return e}function Ug(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function ll(e){this.props=e}(ll.prototype=new Fn).isPureReactComponent=!0,ll.prototype.shouldComponentUpdate=function(e,t){return Ug(this.props,e)||Ug(this.state,t)};var zg=ye.__b;ye.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),zg&&zg(e)};var MS=ye.__e;ye.__e=function(e,t,n){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}MS(e,t,n)};var Hg=ye.unmount;function xu(){this.__u=0,this.t=null,this.__b=null}function wv(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function Ca(){this.u=null,this.o=null}ye.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Hg&&Hg(e)},(xu.prototype=new Fn).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=wv(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function g(v,w,$){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(k){return g(k,w,$)}),v.__c&&v.__c.__P===w&&(v.__e&&$.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=$)),v}(f,f.__c.__P,f.__c.__O)}var h;for(i.setState({__e:i.__b=null});h=i.t.pop();)h.forceUpdate()}},d=t.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),e.then(l,l)},xu.prototype.componentWillUnmount=function(){this.t=[]},xu.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=PS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=t.__e&&Wu(us,null,e.fallback);return o&&(o.__h=null),[Wu(us,null,t.__e?null:e.children),o]};var Fg=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(Ca.prototype=new Fn).__e=function(e){var t=this,n=wv(t.__v),i=t.o.get(e);return i[0]++,function(o){var a=function(){t.props.revealOrder?(i.push(o),Fg(t,e,i)):o()};n?n(a):a()}},Ca.prototype.render=function(e){this.u=null,this.o=new Map;var t=sl(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ca.prototype.componentDidUpdate=Ca.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Fg(e,n,t)})};var BS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,jS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,NS=typeof document<"u",DS=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};Fn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Fn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var qg=ye.event;function US(){}function zS(){return this.cancelBubble}function HS(){return this.defaultPrevented}ye.event=function(e){return qg&&(e=qg(e)),e.persist=US,e.isPropagationStopped=zS,e.isDefaultPrevented=HS,e.nativeEvent=e};var Wg={configurable:!0,get:function(){return this.class}},Zg=ye.vnode;ye.vnode=function(e){var t=e.type,n=e.props,i=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var a in i={},n){var l=n[a];NS&&a==="children"&&t==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+t)&&!DS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&jS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}t=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=sl(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),t=="select"&&i.defaultValue!=null&&(i.value=sl(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),e.props=i,n.class!=n.className&&(Wg.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",Wg))}e.$$typeof=BS,Zg&&Zg(e)};var Vg=ye.__r;ye.__r=function(e){Vg&&Vg(e),e.__c};const FS={light:"outline",dark:"solid"};class qS extends ll{renderIcon(t){const{icon:n}=t;if(n){if(n.svg)return Z("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return Z("img",{src:n.src})}const i=al.categories[t.id]||al.categories.custom,o=this.props.icons=="auto"?FS[this.props.theme]:this.props.icons;return i[o]||i}render(){let t=null;return Z("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:Z("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Mt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(t=i),Z("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),Z("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:t==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${t*100}%)`:`translateX(${t*100}%)`}})]})})}constructor(){super(),this.categories=Ue.categories.filter(t=>!t.target),this.state={categoryId:this.categories[0].id}}}class WS extends ll{shouldComponentUpdate(t){for(let n in t)if(n!="children"&&t[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const Sa={rowsPerRender:10};class ZS extends Fn{getInitialState(t=this.props){return{skin:Wr.get("skin")||t.skin,theme:this.initTheme(t.theme)}}componentWillMount(){this.dir=Mt.rtl?"rtl":"ltr",this.refs={menu:pr(),navigation:pr(),scroll:pr(),search:pr(),searchInput:pr(),skinToneButton:pr(),skinToneRadio:pr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:t}=this.refs;t.current&&t.current.focus()}}componentWillReceiveProps(t){this.nextState||(this.nextState={});for(const n in t)this.nextState[n]=t[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(t={}){await jl(this.props),this.initGrid(),this.unobserve(),this.setState(t,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:t=[]}={}){Array.isArray(t)||(t=[t]);for(const n of this.observers)t.includes(n)||n.disconnect();this.observers=[].concat(t)}initGrid(){const{categories:t}=Ue;this.refs.categories=new Map;const n=Ue.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%Sa.rowsPerRender?{}:pr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of t){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:pr(),rows:a})}}initTheme(t){if(t!="auto")return t;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(t=this.props){if(!t.dynamicWidth)return;const{element:n,emojiButtonSize:i}=t,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([t,n]){const i=this.state.searchResults||this.grid,o=i[t]&&i[t][n];if(o)return ts.get(o)}observeCategories(){const t=this.refs.navigation.current;if(!t)return;const n=new Map,i=l=>{l!=t.state.categoryId&&t.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const u=[...n];for(const[d,f]of u)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const t={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?t[a]=!0:delete t[a]}this.setState({visibleRows:t})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(Sa.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*Sa.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(t){t.preventDefault()}unfocusSearch(){const t=this.refs.searchInput.current;t&&t.blur()}navigate({e:t,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,f]=this.state.pos;const h=(()=>{if(d==0&&f==0&&!t.repeat&&(i||a))return null;if(d==-1)return!t.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(f+=v,!g[f]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,f=i?0:u[d].length-1,[d,f];f=i?g.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[f]||(f=g.length-1),[d,f]):(d=a?0:u.length-1,f=a?0:u[d].length-1,[d,f])}})();if(h)t.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:h,keyboard:!0},()=>{this.scrollTo({row:h[0]})})}scrollTo({categoryId:t,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(t=i[n].__categoryId),t&&(l=(this.refs[t]||this.refs.categories.get(t).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(t){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:t||[-1,-1],keyboard:!1})}handleEmojiClick({e:t,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=TS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&fv.add(o,this.props),this.props.onEmojiSelect(o,t)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(t){this.setState({tempSkin:t})}handleSkinClick(t){this.ignoreMouse(),this.closeSkins(),this.setState({skin:t,tempSkin:null}),Wr.set("skin",t)}renderNav(){return Z(qS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const t=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return Z("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[Z("div",{class:"flex flex-middle flex-grow",children:[Z("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:Z(Ku,{emoji:t,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),Z("div",{class:`margin-${this.dir[0]}`,children:t||n?Z("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[Z("div",{class:"preview-title ellipsis",children:t?t.name:Mt.search_no_results_1}),Z("div",{class:"preview-subtitle ellipsis color-c",children:t?t.skins[0].shortcodes:Mt.search_no_results_2})]}):Z("div",{class:"preview-placeholder color-c",children:Mt.pick})})]}),!t&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(t,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(t.skins[l-1]||t.skins[0]).native,f=CS(this.state.pos,n),h=n.concat(t.id).join("");return Z(WS,{selected:f,skin:l,size:a,children:Z("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?t.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:t}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[Z("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),Z(Ku,{emoji:t,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},h)}renderSearch(){const t=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return Z("div",{children:[Z("div",{class:"spacer"}),Z("div",{class:"flex flex-middle",children:[Z("div",{class:"search relative flex-grow",children:[Z("input",{type:"search",ref:this.refs.searchInput,placeholder:Mt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),Z("span",{class:"icon loupe flex",children:al.search.loupe}),this.state.searchResults&&Z("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:al.search.delete})]}),t&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:t}=this.state;return t?Z("div",{class:"category",ref:this.refs.search,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Mt.categories.search}),Z("div",{children:t.length?t.map((n,i)=>Z("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:t}))})):Z("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&Z("a",{onClick:this.props.onAddCustomEmoji,children:Mt.add_custom})})})]}):null}renderCategories(){const{categories:t}=Ue,n=!!this.state.searchResults,i=this.getPerLine();return Z("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:t.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return Z("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[Z("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Mt.categories[o.id]}),Z("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const f=u.index-u.index%Sa.rowsPerRender,h=this.state.visibleRows[f],g="current"in u?u:void 0;if(!h&&!g)return null;const v=d*i,w=v+i,$=o.emojis.slice(v,w);return $.length<i&&$.push(...new Array(i-$.length)),Z("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:h&&$.map((k,_)=>{if(!k)return Z("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=ts.get(k);return this.renderEmojiButton(C,{pos:[u.index,_],posinset:u.posinset+_,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:Z("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:Z("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Mt.skins.choose,title:Mt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:Z("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const t=this.getEmojiByPos(this.state.pos),n=t?t.name:"";return Z("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),Z("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Mt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return Z("div",{children:[Z("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Mt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),Z("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[Z("span",{class:`skin-tone skin-tone-${l}`}),Z("span",{class:"margin-small-lr",children:Mt.skins[l]})]})]})})})}render(){const t=this.props.perLine*this.props.emojiButtonSize;return Z("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${t}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&Z("div",{class:"padding-lr",children:this.renderSearch()}),Z("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:Z("div",{style:{width:this.props.dynamicWidth?"100%":t,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(t){super(),An(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),An(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),An(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),An(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),An(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await ts.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let f of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),An(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),An(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),An(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),An(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await SS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(t),visibleRows:{0:!0},...this.getInitialState(t)}}}class zd extends OS{async connectedCallback(){const t=mv(this.props,mr,this);t.element=this,t.ref=n=>{this.component=n},await jl(t),!this.disconnected&&uv(Z(ZS,{...t}),this.shadowRoot)}constructor(t){super(t,{styles:Xm(xv)})}}An(zd,"Props",mr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",zd);var xv={};xv=`:host {
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

`;const $v=e=>{let t;const[n,i]=be(void 0);return b(Dd,{ref:l=>{t=l},position:"bottom",get button(){return e.children},onOpen:()=>{const l=new zd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),i18n:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data/i18n/ja.json")).json(),autoFocus:!1,locale:"ja",theme:"light",onEmojiSelect:u=>{e.onEmojiSelect?.(u.native??`:${u.id}:`),t?.close()}});i(l)},onClose:()=>{i(void 0)},get children(){return n()}})},VS=B("<div>"),KS=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),GS=B("<br>"),QS=B("<span>理由: "),YS=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">表示するにはクリック'),XS=e=>{const[t,n]=be(!1);return b(oe,{get when(){return!e.contentWarning.contentWarning||t()},get fallback(){return(()=>{const i=YS();return i.firstChild,i.$$click=()=>n(!0),A(i,b(oe,{get when(){return e.contentWarning.reason!=null},get children(){return[GS(),(()=>{const o=QS();return o.firstChild,A(o,()=>e.contentWarning.reason,null),o})()]}}),null),i})()},get children(){return[(()=>{const i=VS();return A(i,()=>e.children),i})(),b(oe,{get when(){return e.contentWarning.contentWarning},get children(){const i=KS();return i.$$click=()=>n(!1),i}})]}})};it(["click"]);const kv=e=>{const{profile:t}=Ei(()=>({pubkey:e.pubkey}));return b(oe,{get when(){return(t()?.name?.length??0)>0},get fallback(){return`@${Eo(e.pubkey)}`},get children(){return["@",We(()=>t()?.name??e.pubkey)]}})},JS=B('<a target="_blank" rel="noreferrer noopener">'),Co=e=>{const t=()=>{try{const n=new URL(e.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return b(oe,{get when(){return t()},get fallback(){return e.href},get children(){const n=JS();return A(n,()=>e.children??e.href),Ie(i=>{const o=e.class,a=e.href;return o!==i._v$&&G0(n,i._v$=o),a!==i._v$2&&Ke(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},eT=e=>{try{const t=new URL(e);return/\.(jpeg|jpg|png|gif|webp|apng|svg)$/i.test(t.pathname)}catch{return!1}},tT=e=>{try{const t=new URL(e);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(t.pathname)}catch{return!1}},nT=e=>{try{const t=new URL(e);if(t.host==="i.imgur.com"||t.host==="imgur.com"){const n=t.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(t),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return t.toString()}if(t.host==="i.gyazo.com"){const n=new URL(t);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${t.pathname}`,n.toString()}return t.toString()}catch{return e}},rT=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),iT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">画像を展開する'),sT=e=>{let t;const[n,i]=be(e.initialHidden);return b(oe,{get when(){return!n()},get fallback(){return(()=>{const o=iT();return o.$$click=()=>i(!1),o})()},get children(){return b(Co,{class:"my-2 block",get href(){return e.url},get children(){const o=rT(),a=t;return typeof a=="function"?Wn(a,o):t=o,Ie(l=>{const u=nT(e.url),d=e.url;return u!==l._v$&&Ke(o,"src",l._v$=u),d!==l._v$2&&Ke(o,"alt",l._v$2=d),l},{_v$:void 0,_v$2:void 0}),o}})}})};it(["click"]);const oT=B('<div class="my-1 rounded border p-1">'),aT=e=>b(oe,{get when(){return e.mentionedEvent.marker!=null&&e.mentionedEvent.marker.length>0},get fallback(){return b(to,{get eventId(){return e.mentionedEvent.eventId}})},get children(){const t=oT();return A(t,b(cs,{get eventId(){return e.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[dt.Text]}})),t}}),lT=B('<button class="inline text-blue-500 underline">'),$u=e=>{const{showProfile:t}=$r(),n=()=>{t(e.pubkey)};return(()=>{const i=lT();return i.$$click=n,A(i,b(kv,{get pubkey(){return e.pubkey}})),i})()};it(["click"]);const cT=B('<video class="max-h-64 max-w-full rounded-sm object-contain shadow" controls><a>ダウンロード'),uT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">動画を表示する'),dT=e=>{let t;const[n,i]=be(e.initialHidden);return b(oe,{get when(){return!n()},get fallback(){return(()=>{const o=uT();return o.$$click=()=>i(!1),o})()},get children(){return b(Co,{class:"my-2 block",get href(){return e.url},get children(){const o=cT(),a=o.firstChild,l=t;return typeof l=="function"?Wn(l,o):t=o,Ie(u=>{const d=e.url,f=e.url;return d!==u._v$&&Ke(o,"src",u._v$=d),f!==u._v$2&&Ke(a,"href",u._v$2=f),u},{_v$:void 0,_v$2:void 0}),o}})}})};it(["click"]);const[Hd,fT]=be({}),Ev=e=>{Hd()[e]==null&&fT(t=>({...t,[e]:new MessageChannel}))},hT=e=>{const t=()=>Hd()[e().id],n=(o,a)=>{const l={requestId:o,request:a};t().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const f=h=>{const g=h.data;g.requestId===o&&(t().port1.removeEventListener("message",f),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{t().port1.removeEventListener("message",f),u(new Error(`TimeoutError: ${o}`))},a),t().port1.addEventListener("message",f,!1),t().port1.start()});return un(()=>{const{id:o}=e();Ev(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},pT=e=>{const t=We(e),n=()=>Hd()[t().id];un(()=>{const{id:i}=t();Ev(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,f=t().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),qn(()=>{o.removeEventListener("message",a)})})},So=()=>hT(()=>({id:"CommandChannel"})),Yu=e=>{pT(()=>({id:"CommandChannel",handler:t=>{const{commandType:n,handler:i}=e();t.command===n&&i(t)}}))},ku=B("<span>"),Kg=B('<div class="my-1 rounded border p-1">'),gT=B('<span class="text-blue-500 underline">'),mT=B('<button class="text-blue-500 underline">'),vT=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),yT=e=>{const{config:t,saveColumn:n}=Pe(),i=So(),o=()=>Ll(e.event),a=l=>{n(Bd({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return b(St,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=ku();return A(u,()=>l.content),u})();if(l.type==="URL"){const u=()=>!t().showMedia||o().contentWarning().contentWarning||!e.embedding;return eT(l.content)?b(sT,{get url(){return l.content},get initialHidden(){return u()}}):tT(l.content)?b(dT,{get url(){return l.content},get initialHidden(){return u()}}):b(Co,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=ku();return A(d,()=>l.content),d})();if(u.type==="MentionedUser")return b($u,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return e.embedding?b(aT,{mentionedEvent:u}):b(to,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&e.embedding?(()=>{const u=Kg();return A(u,b(cs,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[dt.Text]}})),u})():l.data.type==="nevent"&&e.embedding?(()=>{const u=Kg();return A(u,b(cs,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?b($u,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?b($u,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=gT();return A(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=mT();return u.$$click=()=>a(l.content),A(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=ku();return A(d,()=>l.content),d})():(()=>{const d=vT();return Ke(d,"src",u),Ie(f=>{const h=l.content,g=l.shortcode;return h!==f._v$&&Ke(d,"alt",f._v$=h),g!==f._v$2&&Ke(d,"title",f._v$2=g),f},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};it(["click"]);const bT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),fs=(e={})=>(()=>{const t=bT();return Ge(t,e,!0,!0),t})(),_T=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),wT=e=>{let t;const n=i=>{i.target===t&&e.onClose?.()};return(()=>{const i=_T();i.$$click=n;const o=t;return typeof o=="function"?Wn(o,i):t=i,A(i,()=>e.children),i})()};it(["click"]);const xT=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-4em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),Ci=e=>b(wT,{onClose:()=>e.onClose?.(),get children(){const t=xT(),n=t.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>e.onClose?.(),A(i,b(oe,{get when(){return e?.closeButton},get fallback(){return b(fs,{})},keyed:!0,children:a=>a()})),A(o,()=>e.children),t}});it(["click"]);const $T=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),kT=(e={})=>(()=>{const t=$T();return Ge(t,e,!0,!0),t})(),ET=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),CT=B('<div class="relative inline-block"><button type="button">'),ST=e=>{const[t,n]=be(!1),i=()=>{navigator.clipboard.writeText(e.text).then(o=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=CT(),a=o.firstChild;return a.$$click=i,A(a,b(kT,{})),A(o,b(oe,{get when(){return t()},get children(){return ET()}}),null),Ie(()=>G0(a,e.class)),o})()};it(["click"]);const TT=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),AT=e=>{const t=We(()=>JSON.stringify(e.event,null,2));return b(Ci,{get onClose(){return e.onClose},get children(){const n=TT(),i=n.firstChild,o=i.nextSibling;return A(i,t),A(o,b(ST,{class:"h-4 w-4",get text(){return t()}})),n}})},IT=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),RT=B('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),OT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),LT=e=>{const{profile:t,query:n}=Ei(()=>({pubkey:e.pubkey}));return(()=>{const i=RT(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.firstChild,d=u.firstChild,f=d.firstChild;return o.$$click=h=>{h.preventDefault(),e.onShowProfile?.()},A(o,b(oe,{get when(){return t()?.picture},keyed:!0,children:h=>(()=>{const g=OT();return Ke(g,"src",h),g})()})),u.$$click=h=>{h.preventDefault(),e?.onShowProfile?.()},A(d,b(oe,{get when(){return(t()?.display_name?.length??0)>0},get children(){const h=IT();return A(h,()=>t()?.display_name),h}}),f),A(f,b(oe,{get when(){return t()?.name},get fallback(){return`@${Eo(e.pubkey)}`},keyed:!0,children:h=>`@${h}`})),i})()};it(["click"]);const PT=B('<div class="px-4 py-2"><div> 件</div><div>'),MT=B('<div class="flex border-t py-1">'),Xu=e=>{const{showProfile:t}=$r();return b(Ci,{get onClose(){return e.onClose},get children(){const n=PT(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return A(i,()=>e.data.length,o),A(a,b(St,{get each(){return e.data},children:l=>{const u=()=>e.pubkeyExtractor(l);return(()=>{const d=MT();return A(d,b(oe,{get when(){return e.renderInfo},keyed:!0,children:f=>f(l)}),null),A(d,b(LT,{get pubkey(){return u()},onShowProfile:()=>t(u())}),null),d})()}})),n}})},BT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Cv=(e={})=>(()=>{const t=BT();return Ge(t,e,!0,!0),t})(),jT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),NT=(e={})=>(()=>{const t=jT();return Ge(t,e,!0,!0),t})(),DT=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),UT=(e={})=>(()=>{const t=DT();return Ge(t,e,!0,!0),t})();var Fd={},To={},Sv={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,h){this.fn=d,this.context=f,this.once=h||!1}function a(d,f,h,g,v){if(typeof h!="function")throw new TypeError("The listener must be a function");var w=new o(h,g||d,v),$=n?n+f:f;return d._events[$]?d._events[$].fn?d._events[$]=[d._events[$],w]:d._events[$].push(w):(d._events[$]=w,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function u(){this._events=new i,this._eventsCount=0}u.prototype.eventNames=function(){var f=[],h,g;if(this._eventsCount===0)return f;for(g in h=this._events)t.call(h,g)&&f.push(n?g.slice(1):g);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(h)):f},u.prototype.listeners=function(f){var h=n?n+f:f,g=this._events[h];if(!g)return[];if(g.fn)return[g.fn];for(var v=0,w=g.length,$=new Array(w);v<w;v++)$[v]=g[v].fn;return $},u.prototype.listenerCount=function(f){var h=n?n+f:f,g=this._events[h];return g?g.fn?1:g.length:0},u.prototype.emit=function(f,h,g,v,w,$){var k=n?n+f:f;if(!this._events[k])return!1;var _=this._events[k],C=arguments.length,I,S;if(_.fn){switch(_.once&&this.removeListener(f,_.fn,void 0,!0),C){case 1:return _.fn.call(_.context),!0;case 2:return _.fn.call(_.context,h),!0;case 3:return _.fn.call(_.context,h,g),!0;case 4:return _.fn.call(_.context,h,g,v),!0;case 5:return _.fn.call(_.context,h,g,v,w),!0;case 6:return _.fn.call(_.context,h,g,v,w,$),!0}for(S=1,I=new Array(C-1);S<C;S++)I[S-1]=arguments[S];_.fn.apply(_.context,I)}else{var E=_.length,T;for(S=0;S<E;S++)switch(_[S].once&&this.removeListener(f,_[S].fn,void 0,!0),C){case 1:_[S].fn.call(_[S].context);break;case 2:_[S].fn.call(_[S].context,h);break;case 3:_[S].fn.call(_[S].context,h,g);break;case 4:_[S].fn.call(_[S].context,h,g,v);break;default:if(!I)for(T=1,I=new Array(C-1);T<C;T++)I[T-1]=arguments[T];_[S].fn.apply(_[S].context,I)}}return!0},u.prototype.on=function(f,h,g){return a(this,f,h,g,!1)},u.prototype.once=function(f,h,g){return a(this,f,h,g,!0)},u.prototype.removeListener=function(f,h,g,v){var w=n?n+f:f;if(!this._events[w])return this;if(!h)return l(this,w),this;var $=this._events[w];if($.fn)$.fn===h&&(!v||$.once)&&(!g||$.context===g)&&l(this,w);else{for(var k=0,_=[],C=$.length;k<C;k++)($[k].fn!==h||v&&!$[k].once||g&&$[k].context!==g)&&_.push($[k]);_.length?this._events[w]=_.length===1?_[0]:_:l(this,w)}return this},u.prototype.removeAllListeners=function(f){var h;return f?(h=n?n+f:f,this._events[h]&&l(this,h)):(this._events=new i,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,e.exports=u})(Sv);var Nl=Sv.exports,qd={},Ao={};Object.defineProperty(Ao,"__esModule",{value:!0});Ao.SearchResult=void 0;const zT=/\$&/g,HT=/\$(\d)/g;class FT{constructor(t,n,i){this.data=t,this.term=n,this.strategy=i}getReplacementData(t){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(t);if(o==null||o.index==null)return null;const a=n.replace(zT,o[0]).replace(HT,(l,u)=>o[parseInt(u)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(t,n){const i=this.getReplacementData(t);if(i!==null)return n=i.afterCursor+n,[[t.slice(0,i.start),i.beforeCursor,t.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}Ao.SearchResult=FT;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Strategy=e.DEFAULT_INDEX=void 0;const t=Ao;e.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const u=this.matchWithContext(o);if(!u)return!1;const d=u[(l=this.props.index)!==null&&l!==void 0?l:e.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(h=>new t.SearchResult(h,d,this)))},u),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,u=>{this.cache[o]=u,a(u)},l)}}e.Strategy=n})(qd);Object.defineProperty(To,"__esModule",{value:!0});To.Completer=void 0;const qT=Nl,WT=qd;class ZT extends qT.EventEmitter{constructor(t){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=t.map(n=>new WT.Strategy(n))}destroy(){return this.strategies.forEach(t=>t.destroy()),this}run(t){for(const n of this.strategies)if(n.execute(t,this.handleQueryResult))return;this.handleQueryResult([])}}To.Completer=ZT;var Wd={},xs={};Object.defineProperty(xs,"__esModule",{value:!0});xs.createCustomEvent=void 0;const VT=typeof window<"u"&&!!window.CustomEvent,KT=(e,t)=>{if(VT)return new CustomEvent(e,t);const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,t?.cancelable||!1,t?.detail||void 0),n};xs.createCustomEvent=KT;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Dropdown=e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=e.DEFAULT_DROPDOWN_CLASS_NAME=e.DEFAULT_DROPDOWN_PLACEMENT=e.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const t=Nl,n=xs;e.DEFAULT_DROPDOWN_MAX_COUNT=10,e.DEFAULT_DROPDOWN_PLACEMENT="auto",e.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends t.EventEmitter{constructor(l,u){super(),this.el=l,this.option=u,this.shown=!1,this.items=[],this.activeIndex=null}static create(l){const u=document.createElement("ul");u.className=l.className||e.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(u.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(u),new i(u,l)}render(l,u){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||e.DEFAULT_DROPDOWN_MAX_COUNT).map((f,h)=>{var g;return new o(this,h,f,((g=this.option)===null||g===void 0?void 0:g.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(u).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const u={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:u});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:u})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,u){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),u.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const u=document.documentElement;if(u){const d=this.el.offsetWidth;if(l.left){const g=this.option.dynamicWidth?u.scrollWidth:u.clientWidth;l.left+d>g&&(l.left=g-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const h=this.option.placement||e.DEFAULT_DROPDOWN_PLACEMENT;if(h==="auto"){const g=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+g>u.clientHeight}h==="top"||f?(this.el.style.bottom=`${u.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const u of this.items)l.appendChild(u.el);return this.el.appendChild(l),this}setStrategyId(l){const u=l.getStrategyId();return u&&(this.el.dataset.strategy=u),this}renderEdge(l,u){const d=this.option[u],f=document.createElement("li");return f.className=`textcomplete-${u}`,f.innerHTML=typeof d=="function"?d(l.map(h=>h.data)):d||"",this.el.appendChild(f),this}}e.Dropdown=i;class o{constructor(l,u,d,f){this.dropdown=l,this.index=u,this.searchResult=d,this.props=f,this.active=!1,this.onClick=v=>{v.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||e.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||e.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const h=document.createElement("li");h.className=this.active?this.activeClassName:this.className;const g=document.createElement("span");g.tabIndex=-1,g.innerHTML=this.searchResult.render(),h.appendChild(g),h.addEventListener("click",this.onClick),this.el=h}destroy(){var l;const u=this.el;return(l=u.parentNode)===null||l===void 0||l.removeChild(u),u.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(Wd);var Dl={};Object.defineProperty(Dl,"__esModule",{value:!0});Dl.Editor=void 0;const GT=Nl,Ta=xs;class QT extends GT.EventEmitter{destroy(){return this}applySearchResult(t){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(t){const n=(0,Ta.createCustomEvent)("move",{cancelable:!0,detail:{code:t}});return this.emit("move",n),n}emitEnterEvent(){const t=(0,Ta.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",t),t}emitChangeEvent(){const t=(0,Ta.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",t),t}emitEscEvent(){const t=(0,Ta.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",t),t}getCode(t){return t.keyCode===9||t.keyCode===13?"ENTER":t.keyCode===27?"ESC":t.keyCode===38?"UP":t.keyCode===40||t.keyCode===78&&t.ctrlKey?"DOWN":t.keyCode===80&&t.ctrlKey?"UP":"OTHER"}}Dl.Editor=QT;var Ul={};Object.defineProperty(Ul,"__esModule",{value:!0});Ul.Textcomplete=void 0;const YT=Nl,XT=Wd,JT=To,eA=["show","shown","render","rendered","selected","hidden","hide"];class tA extends YT.EventEmitter{constructor(t,n,i){super(),this.editor=t,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new JT.Completer(n),this.dropdown=XT.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(t=!0){return this.completer.destroy(),this.dropdown.destroy(),t&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(t){return this.isQueryInFlight?this.nextPendingQuery=t:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(t)),this}startListening(){var t;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of eA)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(t=this.dropdown.el.ownerDocument.defaultView)===null||t===void 0||t.addEventListener("resize",this.handleResize)}stopListening(){var t;(t=this.dropdown.el.ownerDocument.defaultView)===null||t===void 0||t.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}Ul.Textcomplete=tA;(function(e){var t=$t&&$t.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=$t&&$t.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&t(o,i,a)};Object.defineProperty(e,"__esModule",{value:!0}),n(To,e),n(Wd,e),n(Dl,e),n(Ao,e),n(qd,e),n(Ul,e),n(xs,e)})(Fd);var Tv={},zl={};function Av(e,t,n){const i=e.value,o=t+(n||""),a=document.activeElement;let l=0,u=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-u-1>=0&&o.length-u-1>=0&&i[i.length-u-1]===o[o.length-u-1];)u++;l=Math.min(l,Math.min(i.length,o.length)-u),e.setSelectionRange(l,i.length-u);const d=o.substring(l,o.length-u);if(e.focus(),!document.execCommand("insertText",!1,d)){e.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),e.dispatchEvent(f)}return e.setSelectionRange(t.length,t.length),a.focus(),e}function nA(e,t,n){const i=e.selectionEnd,o=e.value.substr(0,e.selectionStart)+t,a=e.value.substring(e.selectionStart,i)+(n||"")+e.value.substr(i);return Av(e,o,a),e.selectionEnd=i+t.length,e}const rA=Object.freeze(Object.defineProperty({__proto__:null,update:Av,wrapCursor:nA},Symbol.toStringTag,{value:"Module"})),iA=mo(rA);var Iv={exports:{}};(function(e){(function(){var t=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,u){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=u&&u.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var h=document.createElement("div");h.id="input-textarea-caret-position-mirror-div",document.body.appendChild(h);var g=h.style,v=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,w=a.nodeName==="INPUT";g.whiteSpace="pre-wrap",w||(g.wordWrap="break-word"),g.position="absolute",d||(g.visibility="hidden"),t.forEach(function(_){w&&_==="lineHeight"?g.lineHeight=v.height:g[_]=v[_]}),i?a.scrollHeight>parseInt(v.height)&&(g.overflowY="scroll"):g.overflow="hidden",h.textContent=a.value.substring(0,l),w&&(h.textContent=h.textContent.replace(/\s/g," "));var $=document.createElement("span");$.textContent=a.value.substring(l)||".",h.appendChild($);var k={top:$.offsetTop+parseInt(v.borderTopWidth),left:$.offsetLeft+parseInt(v.borderLeftWidth),height:parseInt(v.lineHeight)};return d?$.style.backgroundColor="#aaa":document.body.removeChild(h),k}e.exports=o})()})(Iv);var sA=Iv.exports,Rv={},Hl={};Object.defineProperty(Hl,"__esModule",{value:!0});Hl.calculateElementOffset=void 0;const oA=e=>{const t=e.getBoundingClientRect(),n=e.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:t.top+i.pageYOffset,left:t.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};Hl.calculateElementOffset=oA;var Fl={};Object.defineProperty(Fl,"__esModule",{value:!0});Fl.getLineHeightPx=void 0;const aA="0".charCodeAt(0),lA="9".charCodeAt(0),Gg=e=>aA<=e&&e<=lA,cA=e=>{const t=getComputedStyle(e),n=t.lineHeight;if(Gg(n.charCodeAt(0))){const i=parseFloat(n);return Gg(n.charCodeAt(n.length-1))?i*parseFloat(t.fontSize):i}return uA(e.nodeName,t)};Fl.getLineHeightPx=cA;const uA=(e,t)=>{const n=document.body;if(!n)return 0;const i=document.createElement(e);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:t.fontSize,fontFamily:t.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var ql={};Object.defineProperty(ql,"__esModule",{value:!0});ql.isSafari=void 0;const dA=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);ql.isSafari=dA;(function(e){var t=$t&&$t.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=$t&&$t.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&t(o,i,a)};Object.defineProperty(e,"__esModule",{value:!0}),n(Hl,e),n(Fl,e),n(ql,e)})(Rv);var fA=$t&&$t.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zl,"__esModule",{value:!0});zl.TextareaEditor=void 0;const hA=iA,pA=fA(sA),Qg=Fd,Yg=Rv;class gA extends Qg.Editor{constructor(t){super(),this.el=t,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(t){const n=this.getBeforeCursor();if(n!=null){const i=t.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,hA.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,Qg.createCustomEvent)("input")))}}getCursorOffset(){const t=(0,Yg.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,Yg.getLineHeightPx)(this.el),a=t.top-n.top+i.top+o,l=t.left-n.left+i.left,u=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:u};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:u}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,pA.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}zl.TextareaEditor=gA;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.TextareaEditor=void 0;var t=zl;Object.defineProperty(e,"TextareaEditor",{enumerable:!0,get:function(){return t.TextareaEditor}})})(Tv);const mA=B('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),vA=()=>{const{searchEmojis:e}=Pe(),[t,n]=be();return On(()=>{const i=t();if(i==null)return;const o=new Tv.TextareaEditor(i),a=new Fd.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,u)=>{u(e(l))},template:l=>(()=>{const d=mA(),f=d.firstChild,h=f.nextSibling;return A(h,()=>l.shortcode),Ie(g=>{const v=l.url,w=l.shortcode;return v!==g._v$&&Ke(f,"src",g._v$=v),w!==g._v$2&&Ke(f,"alt",g._v$2=w),g},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});qn(()=>{a.destroy()})}),{elementRef:n}},yA=e=>Math.floor(+e/1e3),gr=()=>yA(new Date),bA=(e,t)=>new Promise((n,i)=>{e.on("ok",()=>{console.log(`${t} has accepted our event`),n()}),e.on("failed",o=>{console.log(`failed to publish to ${t}: ${o}`),i(o)})}),_A=({notifyPubkeys:e,rootEventId:t,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],f=e?.map(g=>["p",g])??[],h=[];return t!=null&&d.push(["e",t,"","root"]),t==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),t!=null&&i!=null&&t!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>h.push(["t",g])),l?.forEach(g=>h.push(["r",g])),o!=null&&h.push(["content-warning",o]),u!=null&&u.length>0&&h.push(...u),[...d,...f,...h]},Wl=()=>{const e=Pl(),t=async(d,f)=>{const h={...f};if(h.id=Cl(h),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(h);return d.map(async v=>{const $=(await e().ensureRelay(v)).publish(g);return bA($,v)})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:h,content:g}=d,v=_A(d),w={kind:1,pubkey:h,created_at:gr(),tags:v,content:g};return t(f,w)},publishReaction:async({relayUrls:d,pubkey:f,eventId:h,content:g,notifyPubkey:v})=>{const w={kind:7,pubkey:f,created_at:gr(),tags:[["e",h,""],["p",v]],content:g};return t(d,w)},publishRepost:async({relayUrls:d,pubkey:f,eventId:h,notifyPubkey:g})=>{const v={kind:6,pubkey:f,created_at:gr(),tags:[["e",h,""],["p",g]],content:""};return t(d,v)},updateProfile:async({relayUrls:d,pubkey:f,profile:h,otherProperties:g})=>{const v={...h,...g},w={kind:dt.Metadata,pubkey:f,created_at:gr(),tags:[],content:JSON.stringify(v)};return t(d,w)},updateContacts:async({relayUrls:d,pubkey:f,followingPubkeys:h,content:g})=>{const v=h.map($=>["p",$]),w={kind:dt.Contacts,pubkey:f,created_at:gr(),tags:v,content:g};return t(d,w)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:h})=>{const g={kind:dt.EventDeletion,pubkey:f,created_at:gr(),tags:[["e",h,""]],content:""};return t(d,g)}}};let Eu=!1;const[Aa,wA]=be(void 0),Jn=()=>(un(()=>{if(Aa()!=null)return;let e=0;const t=setInterval(()=>{if(e>=20){if(clearInterval(t),Aa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&Aa()==null&&!Eu&&(Eu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(t),wA(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{Eu=!1})),e+=1},200)}),Aa),xA=async e=>{const t=new FormData;t.set("fileToUpload",e),t.set("img_url",""),t.set("submit","Upload");const n=await fetch("https://nostr.build/api/upload/ios.php",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:t});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");return{imageUrl:await n.json()}},$A=e=>t=>Promise.allSettled(t.map(n=>e(n))),kA=B("<div>に返信"),EA=B('<input type="text" class="rounded" placeholder="警告の理由" maxlength="32">'),CA=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),SA=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),TA=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button" aria-label="コンテンツ警告を設定" title="コンテンツ警告を設定"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button" title="画像を投稿" aria-label="画像を投稿"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit" aria-label="投稿" title="投稿"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),AA=e=>{switch(e){case"reply":return"返信を投稿";case"normal":default:return"いまどうしてる？"}},IA=e=>{const t=[],n=[],i=[],o=[],a=[];return e.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?t.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:t,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},RA=e=>{const t=[];return e.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?t.push(`nostr:${n.content}`):t.push(n.content)}),t.join("")},Ov=e=>{let t,n;const{elementRef:i}=vA(),[o,a]=be(""),[l,u]=be(!1),[d,f]=be(""),h=ne=>a(he=>`${he} ${ne}`),g=()=>{a(""),f(""),u(!1)},v=()=>{t?.blur(),g(),e.onClose()},{config:w,getEmoji:$}=Pe(),k=Jn(),_=Wl(),C=()=>e.replyTo&&Ll(e.replyTo),I=()=>e.mode??"normal",S=pi({mutationKey:["publishTextNote"],mutationFn:_.publishTextNote.bind(_),onSuccess:()=>{console.log("succeeded to post"),g(),e.onPost?.()},onError:ne=>{console.error("error",ne)}}),E=()=>{t!=null&&(t.style.height="auto",t.style.height=`${t.scrollHeight}px`)},T=pi({mutationKey:["uploadFiles"],mutationFn:async ne=>{const he=await $A(xA)(ne),pe=[];if(he.forEach((Me,Y)=>{Me.status==="fulfilled"?(h(Me.value.imageUrl),E()):pe.push(ne[Y])}),pe.length>0){const Me=pe.map(Y=>Y.name).join(", ");window.alert(`ファイルのアップロードに失敗しました: ${Me}`)}}}),O=We(()=>{const ne=k();return C()?.taggedPubkeys()?.filter(he=>he!==ne)??[]}),j=We(()=>e.replyTo==null?[]:yr([e.replyTo.pubkey,...O()])),U=ne=>{const he=[];return ne.forEach(pe=>{const Me=$(pe);Me!=null&&he.push(["emoji",pe,Me.url])}),he},te=()=>{if(o().length===0||S.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(o())){window.alert("投稿に秘密鍵(nsec)を含めることはできません。");return}const ne=k();if(ne==null){console.error("pubkey is not available");return}const he=Nm(o()),{hashtags:pe,urlReferences:Me,pubkeyReferences:Y,eventReferences:fe,emojis:G}=IA(he),ce=RA(he),_e=U(G);let N={relayUrls:w().relayUrls,pubkey:ne,content:ce,notifyPubkeys:Y,mentionEventIds:fe,hashtags:pe,urls:Me,tags:_e};C()!=null&&(N={...N,notifyPubkeys:yr([...j(),...Y]),rootEventId:C()?.rootEvent()?.id??C()?.replyingToEvent()?.id,replyEventId:C()?.id}),l()&&(N={...N,contentWarning:d()}),S.mutate(N),v()},W=ne=>{a(ne.currentTarget.value),E()},X=ne=>{ne.preventDefault(),te()},V=ne=>{ne.key==="Enter"&&(ne.ctrlKey||ne.metaKey)?te():ne.key==="Escape"&&(t?.blur(),v())},Q=ne=>{if(ne.preventDefault(),T.isLoading)return;const he=[...ne.currentTarget.files??[]];T.mutate(he),ne.currentTarget.value=""},re=ne=>{if(ne.preventDefault(),T.isLoading)return;const he=[...ne?.dataTransfer?.files??[]];T.mutate(he)},q=ne=>{if(T.isLoading)return;const he=[...ne?.clipboardData?.items??[]],pe=[];he.forEach(Me=>{if(Me.kind==="file"){ne.preventDefault();const Y=Me.getAsFile();if(Y==null)return;pe.push(Y)}}),pe.length!==0&&T.mutate(pe)},ee=ne=>{ne.preventDefault()},ue=()=>o().trim().length===0||S.isLoading||T.isLoading,ge=()=>T.isLoading;return un(()=>{setTimeout(()=>{t?.click(),t?.focus()},50)}),(()=>{const ne=TA(),he=ne.firstChild,pe=he.firstChild,Me=pe.nextSibling,Y=Me.firstChild,fe=Y.nextSibling,G=fe.nextSibling,ce=Me.nextSibling;A(ne,b(oe,{get when(){return e.replyTo!=null},get children(){const N=kA(),ke=N.firstChild;return A(N,b(St,{get each(){return j()},children:(tt,vt)=>[b(Ml,{pubkey:tt}),b(oe,{get when(){return vt()!==j().length-1},children:" と "})]}),ke),N}}),he),he.addEventListener("submit",X),A(he,b(oe,{get when(){return l()},get children(){const N=EA();return N.$$input=ke=>f(ke.currentTarget.value),Ie(()=>N.value=d()),N}}),pe),pe.addEventListener("paste",q),pe.addEventListener("drop",re),pe.addEventListener("dragover",ee),pe.$$keydown=V,pe.$$input=W,Wn(N=>{t=N,e.textAreaRef?.(N),i(N)},pe),A(Me,b(oe,{get when(){return I()==="reply"},get children(){const N=CA(),ke=N.firstChild;return ke.$$click=()=>v(),A(ke,b(fs,{})),N}}),Y),A(Me,b($v,{customEmojis:!0,onEmojiSelect:N=>h(N),get children(){const N=SA();return A(N,b(Cv,{})),N}}),Y),Y.$$click=()=>u(N=>!N),fe.$$click=()=>n?.click(),A(fe,b(NT,{})),A(G,b(UT,{})),ce.addEventListener("change",Q);const _e=n;return typeof _e=="function"?Wn(_e,ce):n=ce,Ie(N=>{const ke=AA(I()),tt=!l(),vt=!!l(),st=I()==="normal",Be=I()==="normal",Fe=I()==="reply",Tt=I()==="reply",wn=!!ge(),ft=!ge(),Er=I()==="normal",Ai=I()==="normal",Nn=I()==="reply",bt=I()==="reply",xn=ge(),Dn=!!ue(),Ii=!ue(),$e=I()==="normal",tr=I()==="normal",Yt=I()==="reply",Wt=I()==="reply",$n=ue();return ke!==N._v$&&Ke(pe,"placeholder",N._v$=ke),tt!==N._v$2&&Y.classList.toggle("bg-rose-300",N._v$2=tt),vt!==N._v$3&&Y.classList.toggle("bg-rose-400",N._v$3=vt),st!==N._v$4&&Y.classList.toggle("h-8",N._v$4=st),Be!==N._v$5&&Y.classList.toggle("w-8",N._v$5=Be),Fe!==N._v$6&&Y.classList.toggle("h-7",N._v$6=Fe),Tt!==N._v$7&&Y.classList.toggle("w-7",N._v$7=Tt),wn!==N._v$8&&fe.classList.toggle("bg-primary-disabled",N._v$8=wn),ft!==N._v$9&&fe.classList.toggle("bg-primary",N._v$9=ft),Er!==N._v$10&&fe.classList.toggle("h-8",N._v$10=Er),Ai!==N._v$11&&fe.classList.toggle("w-8",N._v$11=Ai),Nn!==N._v$12&&fe.classList.toggle("h-7",N._v$12=Nn),bt!==N._v$13&&fe.classList.toggle("w-7",N._v$13=bt),xn!==N._v$14&&(fe.disabled=N._v$14=xn),Dn!==N._v$15&&G.classList.toggle("bg-primary-disabled",N._v$15=Dn),Ii!==N._v$16&&G.classList.toggle("bg-primary",N._v$16=Ii),$e!==N._v$17&&G.classList.toggle("h-8",N._v$17=$e),tr!==N._v$18&&G.classList.toggle("w-8",N._v$18=tr),Yt!==N._v$19&&G.classList.toggle("h-7",N._v$19=Yt),Wt!==N._v$20&&G.classList.toggle("w-7",N._v$20=Wt),$n!==N._v$21&&(G.disabled=N._v$21=$n),N},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0}),Ie(()=>pe.value=o()),ne})()};it(["input","keydown","click"]);const OA=2,LA=()=>{let e;const[t,n]=be(!1),i=o=>{e=o};return un(()=>{e!=null&&n(e.scrollHeight>e.clientHeight+OA)}),{overflow:t,elementRef:i}},PA=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),MA=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),BA=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),jA=B('<img alt="icon" class="h-full w-full rounded object-cover">'),NA=e=>{const{overflow:t,elementRef:n}=LA(),i=Vm(),[o,a]=be(),l=()=>i(e.createdAt),u=()=>e.createdAt.toLocaleString(),{profile:d}=Ei(()=>({pubkey:e.authorPubkey}));return(()=>{const f=BA(),h=f.firstChild,g=h.firstChild,v=g.nextSibling,w=v.firstChild,$=w.firstChild,k=$.firstChild,_=k.firstChild,C=$.nextSibling,I=C.firstChild,S=w.nextSibling,E=S.nextSibling;return g.$$click=T=>{T.preventDefault(),e.onShowProfile?.()},A(g,b(oe,{get when(){return d()?.picture},keyed:!0,children:T=>(()=>{const O=jA();return Ke(O,"src",T),O})()})),$.$$click=T=>{T.preventDefault(),e?.onShowProfile?.()},A(k,b(oe,{get when(){return(d()?.display_name?.length??0)>0},get children(){const T=PA();return A(T,()=>d()?.display_name),T}}),_),A(_,b(oe,{get when(){return d()?.name!=null},get fallback(){return`@${Eo(e.authorPubkey)}`},get children(){return["@",We(()=>d()?.name)]}})),I.$$click=T=>{T.preventDefault(),e.onShowEvent?.()},A(I,l),Wn(n,S),A(S,()=>e.content),A(v,b(oe,{get when(){return t()},get children(){const T=MA();return T.$$click=O=>{O.stopPropagation(),a(j=>!j)},A(T,b(oe,{get when(){return!o()},fallback:"隠す",children:"続きを読む"})),T}}),E),A(E,()=>e.actions),A(f,b(oe,{get when(){return e.footer},get children(){return e.footer}}),null),Ie(T=>{const O=u(),j=!o();return O!==T._v$&&Ke(I,"title",T._v$=O),j!==T._v$2&&S.classList.toggle("max-h-screen",T._v$2=j),T},{_v$:void 0,_v$2:void 0}),f})()};it(["click"]);const Lv=c5(),DA=()=>u5(Lv),UA=()=>{const[e,t]=ns({});return{timelineState:e,setTimeline:n=>t("content",n),clearTimeline:()=>t("content",void 0)}},zA=/\p{Emoji_Presentation}/u,HA=e=>{const{shouldMuteEvent:t}=Pe(),n=_i(),i=We(e),o=We(()=>["useReactions",i()]),a=wi(o,qm({taskProvider:([,g])=>{if(g==null)return null;const{eventId:v}=g;return new $i({type:"Reactions",mentionedEventId:v})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(v=>!t(v));return{reactions:l,reactionsGroupedByContent:()=>{const g=new Map;return l().forEach(v=>{const w=g.get(v.content)??[];w.push(v),g.set(v.content,w)}),g},isReactedBy:g=>l().findIndex(v=>v.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(v=>v.pubkey===g&&zA.test(v.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},FA=e=>{const{shouldMuteEvent:t}=Pe(),n=_i(),i=We(e),o=We(()=>["useReposts",i()]),a=wi(o,qm({taskProvider:([,f])=>{if(f==null)return null;const{eventId:h}=f;return new $i({type:"Reposts",mentionedEventId:h})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(h=>!t(h));return{reposts:l,isRepostedBy:f=>l().findIndex(h=>h.pubkey===f)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},qA=B('<div class="flex gap-2 overflow-x-auto py-1">'),Pv=B('<span class="inline-block h-3 w-3 pt-[1px] text-rose-400">'),WA=B('<span class="ml-1 text-sm">'),ZA=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),Mv=B('<span class="truncate text-base">'),VA=B('<span class="text-red-500">'),KA=B('<div class="nostr-textnote">'),GA=B('<div class="text-xs">'),QA=B('<div class="content whitespace-pre-wrap break-all">'),YA=B('<div class="textnote-content">'),XA=B('<div class="mt-1 rounded border p-1">'),JA=B('<button class="pr-1 text-blue-500 hover:underline">'),Xg=B('<div class="text-sm text-zinc-400">'),eI=B('<span class="inline-block h-4 w-4">'),tI=B('<div class="flex shrink-0 items-center gap-1">'),nI=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),rI=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),iI=B('<div class="w-6">'),{noteEncode:sI}=xo,oI=e=>{const{config:t}=Pe(),n=Jn();return(()=>{const i=qA();return A(i,b(St,{get each(){return[...e.reactionsGroupedByContent.entries()]},children:([o,a])=>{const l=a.findIndex(u=>u.pubkey===n())>=0;return(()=>{const u=ZA();return u.$$click=()=>e.onReaction(o),A(u,b(oe,{when:o==="+",get fallback(){return(()=>{const d=Mv();return A(d,o),d})()},get children(){const d=Pv();return A(d,b(nl,{})),d}}),null),A(u,b(oe,{get when(){return!t().hideCount},get children(){const d=WA();return A(d,()=>a.length),d}}),null),Ie(d=>Zs(u,{"text-zinc-400":!l,"hover:bg-zinc-50":!l,"bg-rose-50":l,"border-rose-200":l,"text-rose-400":l},d)),u})()}})),i})()},Bv=e=>{const t=mt(),{config:n}=Pe(),i=Jn(),{showProfile:o}=$r(),a=DA(),[l,u]=be(!1),[d,f]=be(!1),[h,g]=be(!1),[v,w]=be(null),$=()=>g(!1),k=()=>w(null),_=We(()=>Ll(e.event)),C=()=>e.embedding??!0,I=()=>e.actions??!0,{reactions:S,reactionsGroupedByContent:E,isReactedBy:T,isReactedByWithEmoji:O,invalidateReactions:j,query:U}=HA(()=>({eventId:e.event.id})),{reposts:te,isRepostedBy:W,invalidateReposts:X,query:V}=FA(()=>({eventId:e.event.id})),Q=Wl(),re=pi({mutationKey:["publishReaction",_().id],mutationFn:Q.publishReaction.bind(Q),onSuccess:()=>{console.log("succeeded to publish reaction")},onError:G=>{console.error("failed to publish reaction: ",G)},onSettled:()=>{j().then(()=>U.refetch()).catch(G=>console.error("failed to refetch reactions",G))}}),q=pi({mutationKey:["publishRepost",_().id],mutationFn:Q.publishRepost.bind(Q),onSuccess:()=>{console.log("succeeded to publish reposts")},onError:G=>{console.error("failed to publish repost: ",G)},onSettled:()=>{X().then(()=>V.refetch()).catch(G=>console.error("failed to refetch reposts",G))}}),ee=pi({mutationKey:["deleteEvent",_().id],mutationFn:(...G)=>Q.deleteEvent(...G).then(ce=>Promise.allSettled(ce.map(ki(1e4)))),onSuccess:G=>{const ce=G.filter(N=>N.status==="fulfilled").length,_e=G.length-ce;ce===G.length?window.alert(t()("post.deletedSuccessfully")):ce>0?window.alert(t()("post.failedToDeletePartially",{count:_e})):window.alert(t()("post.failedToDelete"))},onError:G=>{console.error("failed to delete",G)}}),ue=[{content:()=>t()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(sI(e.event.id)).catch(G=>window.alert(G))}},{content:()=>t()("post.showJSON"),onSelect:()=>{w("EventDebugModal")}},{content:()=>t()("post.showReposts"),onSelect:()=>{w("Reposts")}},{content:()=>t()("post.showReactions"),onSelect:()=>{w("Reactions")}},{when:()=>_().pubkey===i(),content:()=>(()=>{const G=VA();return A(G,()=>t()("post.deletePost")),G})(),onSelect:()=>{const G=i();G!=null&&window.confirm(t()("post.confirmDelete"))&&ee.mutate({relayUrls:n().relayUrls,pubkey:G,eventId:_().id})}}],ge=We(()=>{const G=i();return G!=null&&T(G)||l()}),ne=We(()=>{const G=i();return G!=null&&O(G)}),he=We(()=>{const G=i();return G!=null&&W(G)||d()}),pe=()=>{if(C()){const G=_().replyingToEvent();if(G!=null&&!_().containsEventMention(G.id))return G.id;const ce=_().rootEvent();if(G==null&&ce!=null&&!_().containsEventMention(ce.id))return ce.id}},Me=G=>{G.stopPropagation(),!he()&&cn([i(),e.event.id])(([ce,_e])=>{q.mutate({relayUrls:n().relayUrls,pubkey:ce,eventId:_e,notifyPubkey:e.event.pubkey}),f(!0)})},Y=G=>{ge()||cn([i(),e.event.id])(([ce,_e])=>{re.mutate({relayUrls:n().relayUrls,pubkey:ce,content:G??"+",eventId:_e,notifyPubkey:e.event.pubkey}),u(!0)})},fe=G=>{G.stopPropagation(),Y()};return(()=>{const G=KA();return A(G,b(NA,{get authorPubkey(){return _().pubkey},get createdAt(){return _().createdAtAsDate()},get content(){return(()=>{const ce=YA();return A(ce,b(oe,{get when(){return pe()},keyed:!0,children:_e=>(()=>{const N=XA();return A(N,b(cs,{eventId:_e,actions:!1,embedding:!1})),N})()}),null),A(ce,b(oe,{get when(){return _().taggedPubkeys().length>0},get children(){const _e=GA();return A(_e,()=>t()("post.replyToPre"),null),A(_e,b(St,{get each(){return _().taggedPubkeys()},children:N=>(()=>{const ke=JA();return ke.$$click=tt=>{tt.stopPropagation(),o(N)},A(ke,b(kv,{pubkey:N})),ke})()}),null),A(_e,()=>t()("post.replyToPost"),null),_e}}),null),A(ce,b(XS,{get contentWarning(){return _().contentWarning()},get children(){const _e=QA();return A(_e,b(yT,{get event(){return e.event},get embedding(){return C()}})),_e}}),null),ce})()},get actions(){return b(oe,{get when(){return I()},get children(){return[b(oe,{get when(){return We(()=>!!n().showEmojiReaction)()&&S().length>0},get children(){return b(oI,{get reactionsGroupedByContent(){return E()},onReaction:Y})}}),(()=>{const ce=rI(),_e=ce.firstChild,N=_e.nextSibling,ke=N.firstChild,tt=N.nextSibling,vt=tt.firstChild,st=tt.nextSibling;return _e.$$click=Be=>{Be.stopPropagation(),g(Fe=>!Fe)},A(_e,b(XC,{})),ke.$$click=Me,A(ke,b(_m,{})),A(N,b(oe,{get when(){return We(()=>!n().hideCount)()&&te().length>0},get children(){const Be=Xg();return A(Be,()=>te().length),Be}}),null),vt.$$click=fe,A(vt,b(oe,{get when(){return We(()=>!!ge())()&&!ne()},get fallback(){return b(Nd,{})},get children(){return b(nl,{})}})),A(tt,b(oe,{get when(){return We(()=>!n().hideCount&&!n().showEmojiReaction)()&&S().length>0},get children(){const Be=Xg();return A(Be,()=>S().length),Be}}),null),A(ce,b(oe,{get when(){return n().useEmojiReaction},get children(){const Be=tI();return A(Be,b($v,{onEmojiSelect:Fe=>Y(Fe),get children(){const Fe=eI();return A(Fe,b(Qm,{})),Fe}})),Ie(Fe=>Zs(Be,{"text-zinc-400":!ge()||!ne(),"hover:text-rose-400":!ge()||!ne(),"text-rose-400":ge()&&ne()||re.isLoading},Fe)),Be}}),st),A(st,b(Ym,{menu:ue,get children(){const Be=nI();return A(Be,b(Gm,{})),Be}})),Ie(Be=>{const Fe={"text-zinc-400":!he(),"hover:text-green-400":!he(),"text-green-400":he()||q.isLoading},Tt=q.isLoading,wn={"text-zinc-400":!ge()||ne(),"hover:text-rose-400":!ge()||ne(),"text-rose-400":ge()&&!ne()||re.isLoading},ft=re.isLoading;return Be._v$=Zs(N,Fe,Be._v$),Tt!==Be._v$2&&(ke.disabled=Be._v$2=Tt),Be._v$3=Zs(tt,wn,Be._v$3),ft!==Be._v$4&&(vt.disabled=Be._v$4=ft),Be},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),ce})()]}})},get footer(){return b(oe,{get when(){return h()},get children(){return b(Ov,{mode:"reply",get replyTo(){return e.event},onClose:$,onPost:$})}})},onShowProfile:()=>{o(_().pubkey)},onShowEvent:()=>{a?.setTimeline({type:"Replies",event:e.event})}}),null),A(G,b(ln,{get children(){return[b(ze,{get when(){return v()==="EventDebugModal"},get children(){return b(AT,{get event(){return e.event},onClose:k})}}),b(ze,{get when(){return v()==="Reactions"},get children(){return b(Xu,{get data(){return S()},pubkeyExtractor:ce=>ce.pubkey,renderInfo:({content:ce})=>(()=>{const _e=iI();return A(_e,b(oe,{when:ce==="+",get fallback(){return(()=>{const N=Mv();return A(N,ce),N})()},get children(){const N=Pv();return A(N,b(nl,{})),N}})),_e})(),onClose:k})}}),b(ze,{get when(){return v()==="Reposts"},get children(){return b(Xu,{get data(){return te()},pubkeyExtractor:ce=>ce.pubkey,onClose:k})}})]}}),null),G})()};it(["click"]);const jv=e=>{const{shouldMuteEvent:t}=Pe();return b(oe,{get when(){return!t(e.event)},get children(){return b(Bv,e)}})},aI=B("<span>予期しないイベント種別（<!>）"),lI=B("<span><span>未対応のイベント種別（<!>）"),Nv=e=>{const t=()=>e.ensureKinds==null||e.ensureKinds.length===0||e.ensureKinds.includes(e.event.kind);return b(ln,{get fallback(){return(()=>{const n=lI(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,A(i,()=>e.event.kind,a),A(n,b(to,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n})()},get children(){return[b(ze,{get when(){return!t()},keyed:!0,get children(){const n=aI(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,A(n,()=>e.event.kind,o),A(n,b(to,{get eventId(){return e.event.id},get kind(){return e.event.kind}}),null),n}}),b(ze,{get when(){return e.event.kind===dt.Text},get children(){return b(jv,{get event(){return e.event},get embedding(){return e.actions},get actions(){return e.actions}})}}),b(ze,{get when(){return e.event.kind===6},get children(){return b(Km,{get event(){return e.event}})}})]}})},$s=e=>{const{shouldMuteEvent:t}=Pe();return b(St,{get each(){return e.events},children:n=>b(oe,{get when(){return!t(n)},get children(){return b(Vs,{get children(){return b(Nv,{event:n})}})}})})};var cI=gl;function uI(){this.__data__=new cI,this.size=0}var dI=uI;function fI(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}var hI=fI;function pI(e){return this.__data__.get(e)}var gI=pI;function mI(e){return this.__data__.has(e)}var vI=mI,yI=gl,bI=dd,_I=fd,wI=200;function xI(e,t){var n=this.__data__;if(n instanceof yI){var i=n.__data__;if(!bI||i.length<wI-1)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new _I(i)}return n.set(e,t),this.size=n.size,this}var $I=xI,kI=gl,EI=dI,CI=hI,SI=gI,TI=vI,AI=$I;function ks(e){var t=this.__data__=new kI(e);this.size=t.size}ks.prototype.clear=EI;ks.prototype.delete=CI;ks.prototype.get=SI;ks.prototype.has=TI;ks.prototype.set=AI;var Zd=ks;function II(e,t){for(var n=-1,i=e==null?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1}var RI=II,OI=r1,LI=RI,PI=i1,MI=1,BI=2;function jI(e,t,n,i,o,a){var l=n&MI,u=e.length,d=t.length;if(u!=d&&!(l&&d>u))return!1;var f=a.get(e),h=a.get(t);if(f&&h)return f==t&&h==e;var g=-1,v=!0,w=n&BI?new OI:void 0;for(a.set(e,t),a.set(t,e);++g<u;){var $=e[g],k=t[g];if(i)var _=l?i(k,$,g,t,e,a):i($,k,g,e,t,a);if(_!==void 0){if(_)continue;v=!1;break}if(w){if(!LI(t,function(C,I){if(!PI(w,I)&&($===C||o($,C,n,i,a)))return w.push(I)})){v=!1;break}}else if(!($===k||o($,k,n,i,a))){v=!1;break}}return a.delete(e),a.delete(t),v}var Dv=jI,NI=Bn,DI=NI.Uint8Array,Uv=DI;function UI(e){var t=-1,n=Array(e.size);return e.forEach(function(i,o){n[++t]=[o,i]}),n}var zI=UI,Jg=ps,e0=Uv,HI=ud,FI=Dv,qI=zI,WI=hd,ZI=1,VI=2,KI="[object Boolean]",GI="[object Date]",QI="[object Error]",YI="[object Map]",XI="[object Number]",JI="[object RegExp]",eR="[object Set]",tR="[object String]",nR="[object Symbol]",rR="[object ArrayBuffer]",iR="[object DataView]",t0=Jg?Jg.prototype:void 0,Cu=t0?t0.valueOf:void 0;function sR(e,t,n,i,o,a,l){switch(n){case iR:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case rR:return!(e.byteLength!=t.byteLength||!a(new e0(e),new e0(t)));case KI:case GI:case XI:return HI(+e,+t);case QI:return e.name==t.name&&e.message==t.message;case JI:case tR:return e==t+"";case YI:var u=qI;case eR:var d=i&ZI;if(u||(u=WI),e.size!=t.size&&!d)return!1;var f=l.get(e);if(f)return f==t;i|=VI,l.set(e,t);var h=FI(u(e),u(t),i,o,a,l);return l.delete(e),h;case nR:if(Cu)return Cu.call(e)==Cu.call(t)}return!1}var oR=sR;function aR(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];return e}var Vd=aR,lR=Array.isArray,er=lR,cR=Vd,uR=er;function dR(e,t,n){var i=t(e);return uR(e)?i:cR(i,n(e))}var zv=dR;function fR(e,t){for(var n=-1,i=e==null?0:e.length,o=0,a=[];++n<i;){var l=e[n];t(l,n,e)&&(a[o++]=l)}return a}var hR=fR;function pR(){return[]}var Hv=pR,gR=hR,mR=Hv,vR=Object.prototype,yR=vR.propertyIsEnumerable,n0=Object.getOwnPropertySymbols,bR=n0?function(e){return e==null?[]:(e=Object(e),gR(n0(e),function(t){return yR.call(e,t)}))}:mR,Kd=bR;function _R(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}var wR=_R;function xR(e){return e!=null&&typeof e=="object"}var Xr=xR,$R=gs,kR=Xr,ER="[object Arguments]";function CR(e){return kR(e)&&$R(e)==ER}var SR=CR,r0=SR,TR=Xr,Fv=Object.prototype,AR=Fv.hasOwnProperty,IR=Fv.propertyIsEnumerable,RR=r0(function(){return arguments}())?r0:function(e){return TR(e)&&AR.call(e,"callee")&&!IR.call(e,"callee")},Gd=RR,cl={exports:{}};function OR(){return!1}var LR=OR;cl.exports;(function(e,t){var n=Bn,i=LR,o=t&&!t.nodeType&&t,a=o&&!0&&e&&!e.nodeType&&e,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,f=d||i;e.exports=f})(cl,cl.exports);var Qd=cl.exports,PR=9007199254740991,MR=/^(?:0|[1-9]\d*)$/;function BR(e,t){var n=typeof e;return t=t??PR,!!t&&(n=="number"||n!="symbol"&&MR.test(e))&&e>-1&&e%1==0&&e<t}var Yd=BR,jR=9007199254740991;function NR(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=jR}var Xd=NR,DR=gs,UR=Xd,zR=Xr,HR="[object Arguments]",FR="[object Array]",qR="[object Boolean]",WR="[object Date]",ZR="[object Error]",VR="[object Function]",KR="[object Map]",GR="[object Number]",QR="[object Object]",YR="[object RegExp]",XR="[object Set]",JR="[object String]",eO="[object WeakMap]",tO="[object ArrayBuffer]",nO="[object DataView]",rO="[object Float32Array]",iO="[object Float64Array]",sO="[object Int8Array]",oO="[object Int16Array]",aO="[object Int32Array]",lO="[object Uint8Array]",cO="[object Uint8ClampedArray]",uO="[object Uint16Array]",dO="[object Uint32Array]",rt={};rt[rO]=rt[iO]=rt[sO]=rt[oO]=rt[aO]=rt[lO]=rt[cO]=rt[uO]=rt[dO]=!0;rt[HR]=rt[FR]=rt[tO]=rt[qR]=rt[nO]=rt[WR]=rt[ZR]=rt[VR]=rt[KR]=rt[GR]=rt[QR]=rt[YR]=rt[XR]=rt[JR]=rt[eO]=!1;function fO(e){return zR(e)&&UR(e.length)&&!!rt[DR(e)]}var hO=fO;function pO(e){return function(t){return e(t)}}var Jd=pO,ul={exports:{}};ul.exports;(function(e,t){var n=J0,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();e.exports=u})(ul,ul.exports);var ef=ul.exports,gO=hO,mO=Jd,i0=ef,s0=i0&&i0.isTypedArray,vO=s0?mO(s0):gO,qv=vO,yO=wR,bO=Gd,_O=er,wO=Qd,xO=Yd,$O=qv,kO=Object.prototype,EO=kO.hasOwnProperty;function CO(e,t){var n=_O(e),i=!n&&bO(e),o=!n&&!i&&wO(e),a=!n&&!i&&!o&&$O(e),l=n||i||o||a,u=l?yO(e.length,String):[],d=u.length;for(var f in e)(t||EO.call(e,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||xO(f,d)))&&u.push(f);return u}var Wv=CO,SO=Object.prototype;function TO(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||SO;return e===n}var tf=TO;function AO(e,t){return function(n){return e(t(n))}}var Zv=AO,IO=Zv,RO=IO(Object.keys,Object),OO=RO,LO=tf,PO=OO,MO=Object.prototype,BO=MO.hasOwnProperty;function jO(e){if(!LO(e))return PO(e);var t=[];for(var n in Object(e))BO.call(e,n)&&n!="constructor"&&t.push(n);return t}var NO=jO,DO=t1,UO=Xd;function zO(e){return e!=null&&UO(e.length)&&!DO(e)}var Vv=zO,HO=Wv,FO=NO,qO=Vv;function WO(e){return qO(e)?HO(e):FO(e)}var Zl=WO,ZO=zv,VO=Kd,KO=Zl;function GO(e){return ZO(e,KO,VO)}var Kv=GO,o0=Kv,QO=1,YO=Object.prototype,XO=YO.hasOwnProperty;function JO(e,t,n,i,o,a){var l=n&QO,u=o0(e),d=u.length,f=o0(t),h=f.length;if(d!=h&&!l)return!1;for(var g=d;g--;){var v=u[g];if(!(l?v in t:XO.call(t,v)))return!1}var w=a.get(e),$=a.get(t);if(w&&$)return w==t&&$==e;var k=!0;a.set(e,t),a.set(t,e);for(var _=l;++g<d;){v=u[g];var C=e[v],I=t[v];if(i)var S=l?i(I,C,v,t,e,a):i(C,I,v,e,t,a);if(!(S===void 0?C===I||o(C,I,n,i,a):S)){k=!1;break}_||(_=v=="constructor")}if(k&&!_){var E=e.constructor,T=t.constructor;E!=T&&"constructor"in e&&"constructor"in t&&!(typeof E=="function"&&E instanceof E&&typeof T=="function"&&T instanceof T)&&(k=!1)}return a.delete(e),a.delete(t),k}var eL=JO,tL=xi,nL=Bn,rL=tL(nL,"DataView"),iL=rL,sL=xi,oL=Bn,aL=sL(oL,"Promise"),lL=aL,cL=xi,uL=Bn,dL=cL(uL,"WeakMap"),fL=dL,Ju=iL,ed=dd,td=lL,nd=s1,rd=fL,Gv=gs,Es=n1,a0="[object Map]",hL="[object Object]",l0="[object Promise]",c0="[object Set]",u0="[object WeakMap]",d0="[object DataView]",pL=Es(Ju),gL=Es(ed),mL=Es(td),vL=Es(nd),yL=Es(rd),li=Gv;(Ju&&li(new Ju(new ArrayBuffer(1)))!=d0||ed&&li(new ed)!=a0||td&&li(td.resolve())!=l0||nd&&li(new nd)!=c0||rd&&li(new rd)!=u0)&&(li=function(e){var t=Gv(e),n=t==hL?e.constructor:void 0,i=n?Es(n):"";if(i)switch(i){case pL:return d0;case gL:return a0;case mL:return l0;case vL:return c0;case yL:return u0}return t});var Vl=li,Su=Zd,bL=Dv,_L=oR,wL=eL,f0=Vl,h0=er,p0=Qd,xL=qv,$L=1,g0="[object Arguments]",m0="[object Array]",Ia="[object Object]",kL=Object.prototype,v0=kL.hasOwnProperty;function EL(e,t,n,i,o,a){var l=h0(e),u=h0(t),d=l?m0:f0(e),f=u?m0:f0(t);d=d==g0?Ia:d,f=f==g0?Ia:f;var h=d==Ia,g=f==Ia,v=d==f;if(v&&p0(e)){if(!p0(t))return!1;l=!0,h=!1}if(v&&!h)return a||(a=new Su),l||xL(e)?bL(e,t,n,i,o,a):_L(e,t,d,n,i,o,a);if(!(n&$L)){var w=h&&v0.call(e,"__wrapped__"),$=g&&v0.call(t,"__wrapped__");if(w||$){var k=w?e.value():e,_=$?t.value():t;return a||(a=new Su),o(k,_,n,i,a)}}return v?(a||(a=new Su),wL(e,t,n,i,o,a)):!1}var CL=EL,SL=CL,y0=Xr;function Qv(e,t,n,i,o){return e===t?!0:e==null||t==null||!y0(e)&&!y0(t)?e!==e&&t!==t:SL(e,t,n,i,Qv,o)}var Yv=Qv,TL=Zd,AL=Yv,IL=1,RL=2;function OL(e,t,n,i){var o=n.length,a=o,l=!i;if(e==null)return!a;for(e=Object(e);o--;){var u=n[o];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<a;){u=n[o];var d=u[0],f=e[d],h=u[1];if(l&&u[2]){if(f===void 0&&!(d in e))return!1}else{var g=new TL;if(i)var v=i(f,h,d,e,t,g);if(!(v===void 0?AL(h,f,IL|RL,i,g):v))return!1}}return!0}var LL=OL,PL=Qn;function ML(e){return e===e&&!PL(e)}var Xv=ML,BL=Xv,jL=Zl;function NL(e){for(var t=jL(e),n=t.length;n--;){var i=t[n],o=e[i];t[n]=[i,o,BL(o)]}return t}var DL=NL;function UL(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}var Jv=UL,zL=LL,HL=DL,FL=Jv;function qL(e){var t=HL(e);return t.length==1&&t[0][2]?FL(t[0][0],t[0][1]):function(n){return n===e||zL(n,e,t)}}var WL=qL,ZL=gs,VL=Xr,KL="[object Symbol]";function GL(e){return typeof e=="symbol"||VL(e)&&ZL(e)==KL}var Kl=GL,QL=er,YL=Kl,XL=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,JL=/^\w*$/;function eP(e,t){if(QL(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||YL(e)?!0:JL.test(e)||!XL.test(e)||t!=null&&e in Object(t)}var nf=eP,e2=fd,tP="Expected a function";function rf(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(tP);var n=function(){var i=arguments,o=t?t.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=e.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(rf.Cache||e2),n}rf.Cache=e2;var nP=rf,rP=nP,iP=500;function sP(e){var t=rP(e,function(i){return n.size===iP&&n.clear(),i}),n=t.cache;return t}var oP=sP,aP=oP,lP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,cP=/\\(\\)?/g,uP=aP(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(lP,function(n,i,o,a){t.push(o?a.replace(cP,"$1"):i||n)}),t}),dP=uP;function fP(e,t){for(var n=-1,i=e==null?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);return o}var sf=fP,b0=ps,hP=sf,pP=er,gP=Kl,mP=1/0,_0=b0?b0.prototype:void 0,w0=_0?_0.toString:void 0;function t2(e){if(typeof e=="string")return e;if(pP(e))return hP(e,t2)+"";if(gP(e))return w0?w0.call(e):"";var t=e+"";return t=="0"&&1/e==-mP?"-0":t}var vP=t2,yP=vP;function bP(e){return e==null?"":yP(e)}var _P=bP,wP=er,xP=nf,$P=dP,kP=_P;function EP(e,t){return wP(e)?e:xP(e,t)?[e]:$P(kP(e))}var Cs=EP,CP=Kl,SP=1/0;function TP(e){if(typeof e=="string"||CP(e))return e;var t=e+"";return t=="0"&&1/e==-SP?"-0":t}var Ss=TP,AP=Cs,IP=Ss;function RP(e,t){t=AP(t,e);for(var n=0,i=t.length;e!=null&&n<i;)e=e[IP(t[n++])];return n&&n==i?e:void 0}var Gl=RP,OP=Gl;function LP(e,t,n){var i=e==null?void 0:OP(e,t);return i===void 0?n:i}var PP=LP;function MP(e,t){return e!=null&&t in Object(e)}var BP=MP,jP=Cs,NP=Gd,DP=er,UP=Yd,zP=Xd,HP=Ss;function FP(e,t,n){t=jP(t,e);for(var i=-1,o=t.length,a=!1;++i<o;){var l=HP(t[i]);if(!(a=e!=null&&n(e,l)))break;e=e[l]}return a||++i!=o?a:(o=e==null?0:e.length,!!o&&zP(o)&&UP(l,o)&&(DP(e)||NP(e)))}var qP=FP,WP=BP,ZP=qP;function VP(e,t){return e!=null&&ZP(e,t,WP)}var KP=VP,GP=Yv,QP=PP,YP=KP,XP=nf,JP=Xv,eM=Jv,tM=Ss,nM=1,rM=2;function iM(e,t){return XP(e)&&JP(t)?eM(tM(e),t):function(n){var i=QP(n,e);return i===void 0&&i===t?YP(n,e):GP(t,i,nM|rM)}}var sM=iM;function oM(e){return e}var n2=oM;function aM(e){return function(t){return t?.[e]}}var lM=aM,cM=Gl;function uM(e){return function(t){return cM(t,e)}}var dM=uM,fM=lM,hM=dM,pM=nf,gM=Ss;function mM(e){return pM(e)?fM(gM(e)):hM(e)}var vM=mM,yM=WL,bM=sM,_M=n2,wM=er,xM=vM;function $M(e){return typeof e=="function"?e:e==null?_M:typeof e=="object"?wM(e)?bM(e[0],e[1]):yM(e):xM(e)}var of=$M,kM=of,EM=o1;function CM(e,t){return e&&e.length?EM(e,kM(t)):[]}var SM=CM;const r2=go(SM),x0=e=>Array.from(e).sort((t,n)=>n.created_at-t.created_at);let Ma=0;const{setActiveSubscriptions:TM}=zm();setInterval(()=>{TM(Ma)},1e3);const kr=e=>{const{config:t,shouldMuteEvent:n}=Pe(),i=Pl(),[o,a]=be([]);On(fl(()=>[t().mutedPubkeys,t().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),un(()=>{console.debug("subscription mounted",e()?.debugId,e()),qn(()=>{console.debug("subscription unmount",e()?.debugId,e())})});const l=d=>{const f=e()?.limit??50;a(h=>{const g=cm.insertEventIntoDescendingList(h,d).slice(0,f),v=r2(g,w=>w.id);return v.length!==g.length&&console.warn("duplicated event",d),v})},u=()=>{console.debug("startSubscription: start");const d=e();if(d==null)return;const{relayUrls:f,filters:h,options:g,onEvent:v,onEOSE:w,continuous:$=!0}=d,k=i().sub(f,h,g);let _=!0;Ma+=1;let C=!1,I=!1;const S=[];k.on("event",O=>{v?.(O),!(d.clientEventFilter!=null&&!d.clientEventFilter(O))&&(I?l(O):(C=!0,S.push(O)))}),k.on("eose",()=>{w?.(),I=!0,a(x0(S)),$||(k.unsub(),_&&(_=!1,Ma-=1))});let E=!1;const T=setInterval(()=>{if(!E){if(E=!0,I){clearInterval(T),E=!1;return}C&&(C=!1,a(x0(S))),E=!1}},100);qn(()=>{console.debug("startSubscription: end"),k.unsub(),_&&(_=!1,Ma-=1),clearInterval(T)})};return On(()=>{u()}),{events:o}},AM=e=>{const t=[e.id],n=e.rootEvent()?.id;n!=null&&t.push(n);const i=e.replyingToEvent()?.id;return i!=null&&t.push(i),yr(t)},IM=e=>{const{config:t}=Pe(),n=()=>Ll(e.event),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[1],ids:AM(n()),limit:25},{kinds:[1],"#e":[e.event.id],limit:25}],limit:200}));return b($s,{get events(){return[...i()].reverse()}})},RM=e=>b(ln,{get children(){return b(ze,{get when(){return e.timelineContent.type==="Replies"&&e.timelineContent},keyed:!0,children:t=>b(IM,{get event(){return t.event}})})}}),OM=B('<div class="flex w-[80vw] shrink-0 snap-center snap-always flex-col border-r sm:snap-align-none">'),LM=B('<div class="shrink-0 border-b">'),PM=B('<div class="scrollbar flex flex-col overflow-y-scroll scroll-smooth">'),MM=B('<div class="h-full w-full bg-white"><div class="flex shrink-0 items-center border-b bg-white px-2"><button class="flex w-full items-center gap-1"><div class="inline-block h-4 w-4"></div><div>ホームに戻る</div></button></div><ul class="scrollbar flex h-full flex-col overflow-y-scroll scroll-smooth pb-8">'),Si=e=>{let t;const n=UA(),i=()=>e.width??"medium";return Yu(()=>({commandType:"moveToColumn",handler:o=>{o.command==="moveToColumn"&&o.columnIndex===e.columnIndex&&t?.scrollIntoView({behavior:"smooth",inline:"center"})}})),Yu(()=>({commandType:"moveToLastColumn",handler:()=>{e.lastColumn&&t?.scrollIntoView({behavior:"smooth"})}})),b(Lv.Provider,{value:n,get children(){const o=OM(),a=t;return typeof a=="function"?Wn(a,o):t=o,A(o,b(oe,{get when(){return n.timelineState.content},keyed:!0,get fallback(){return[(()=>{const l=LM();return A(l,()=>e.header),l})(),(()=>{const l=PM();return A(l,()=>e.children),l})()]},children:l=>(()=>{const u=MM(),d=u.firstChild,f=d.firstChild,h=f.firstChild,g=d.nextSibling;return f.$$click=()=>n?.clearTimeline(),A(h,b(cd,{})),A(g,b(RM,{timelineContent:l})),u})()})),Ie(l=>Zs(o,{"sm:w-[500px]":i()==="widest","sm:w-[360px]":i()==="wide","sm:w-[320px]":i()==="medium","sm:w-[280px]":i()==="narrow"},l)),o}})};it(["click"]);const BM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5">'),jM=(e={})=>(()=>{const t=BM();return Ge(t,e,!0,!0),t})(),NM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5">'),DM=(e={})=>(()=>{const t=NM();return Ge(t,e,!0,!0),t})(),UM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">'),zM=(e={})=>(()=>{const t=UM();return Ge(t,e,!0,!0),t})(),HM=B('<div class="flex flex-col gap-2 border-b p-2"><div></div><div>'),FM=B('<div class="scrollbar flex h-9 gap-2 overflow-x-scroll"><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100"></button><button class="rounded-md border px-4 hover:bg-stone-100">'),qM=B('<div class="flex flex-col border-t"><div class="flex h-10 items-center gap-2"><button class="py-4 pl-2"><span class="inline-block h-4 w-4"></span></button><button class="py-4 pr-2"><span class="inline-block h-4 w-4"></span></button><div class="flex-1"></div><button class="px-2 py-4 text-rose-500 hover:text-rose-600"><span class="inline-block h-4 w-4">'),WM=e=>(()=>{const t=HM(),n=t.firstChild,i=n.nextSibling;return A(n,()=>e.title),A(i,()=>e.children),t})(),Ti=e=>{const t=mt(),{saveColumn:n,removeColumn:i,moveColumn:o}=Pe(),a=So(),l=d=>{n({...e.column,width:d})},u=d=>{o(e.column.id,d),a({command:"moveToColumn",columnIndex:d}).catch(f=>console.error(f))};return(()=>{const d=qM(),f=d.firstChild,h=f.firstChild,g=h.firstChild,v=h.nextSibling,w=v.firstChild,$=v.nextSibling,k=$.nextSibling,_=k.firstChild;return A(d,b(WM,{get title(){return t()("column.config.columnWidth")},get children(){const C=FM(),I=C.firstChild,S=I.nextSibling,E=S.nextSibling,T=E.nextSibling;return I.$$click=()=>l("widest"),A(I,()=>t()("column.config.widest")),S.$$click=()=>l("wide"),A(S,()=>t()("column.config.wide")),E.$$click=()=>l("medium"),A(E,()=>t()("column.config.medium")),T.$$click=()=>l("narrow"),A(T,()=>t()("column.config.narrow")),C}}),f),h.$$click=()=>u(e.columnIndex-1),A(g,b(jM,{})),v.$$click=()=>u(e.columnIndex+1),A(w,b(DM,{})),k.$$click=()=>i(e.column.id),A(_,b(zM,{})),Ie(C=>{const I=t()("column.config.moveLeft"),S=t()("column.config.moveRight"),E=t()("column.config.removeColumn"),T=t()("column.config.removeColumn");return I!==C._v$&&Ke(h,"title",C._v$=I),S!==C._v$2&&Ke(v,"title",C._v$2=S),E!==C._v$3&&Ke(k,"title",C._v$3=E),T!==C._v$4&&Ke(_,"aria-label",C._v$4=T),C},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),d})()};it(["click"]);const ZM=ct.array(ct.array(ct.string()));class VM extends Tm{constructor(t){super(),this.tags=t}}const KM=e=>{try{const t=ZM.parse(JSON.parse(e));return new VM(t)}catch(t){throw new TypeError("failed to parse tags schema: ",{cause:t})}},[$0,GM]=Q0(()=>be({})),[QM,YM]=Q0(()=>be({})),XM=e=>{const t=Jn(),[n,i]=be(null);return On(()=>{const o=e();if(o==null)return;const{encrypted:a}=o;if(a in $0()){i($0()[a]);return}const l=t();l!=null&&(QM()[a]||(YM(u=>({...u,[a]:!0})),window.nostr?.nip04?.decrypt?.(l,a)?.then(u=>{GM(d=>({...d,[a]:u})),i(u)}).catch(u=>{console.error(`failed to decrypt "${a}"`,u)})))}),n},JM=e=>{const t=We(()=>vr(e.event)),n=XM(()=>{const{content:a}=t();return a==null||a.length===0?null:{id:t().id,encrypted:a}}),i=()=>{const a=n();if(a==null)return[];console.log(a);try{return KM(a).taggedEventIds()}catch(l){return console.warn(l),[]}},o=()=>t().taggedEventIds();return b(St,{get each(){return[...o(),...i()]},children:a=>b(Vs,{get children(){return b(cs,{eventId:a,get ensureKinds(){return[dt.Text]}})}})})},eB=e=>{const t=_i(),n=We(e),o=wi(()=>["useFollowings",n()],({queryKey:l,signal:u})=>{console.debug("useFollowings");const[,d]=l;if(d==null)return Promise.resolve(null);const{kind:f,author:h,identifier:g}=d,v=new $i({type:"ParameterizedReplaceableEvent",kind:f,author:h,identifier:g}),w=v.firstEventPromise().catch(()=>{throw new Error(`parameterized replaceable event not found: ${f}:${h}:${g}`)});return v.onUpdate($=>{const k=jd($);t.setQueryData(l,k)}),ko({task:v,signal:u}),ki(15e3,`useParameterizedReplaceableEvent: ${f}:${h}:${g}`)(w)},{staleTime:5*60*1e3,cacheTime:4*60*60*1e3});return{event:()=>o.data??null,query:o}},tB=e=>{const t=mt(),{removeColumn:n}=Pe(),{event:i}=eB(()=>({kind:30001,author:e.column.pubkey,identifier:e.column.identifier}));return b(Si,{get header(){return b(hs,{get name(){return e.column.name??t()("column.bookmark")},get icon(){return b($5,{})},settings:()=>b(Ti,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b(oe,{get when(){return i()},keyed:!0,children:o=>b(JM,{event:o})})}})},nB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),i2=(e={})=>(()=>{const t=nB();return Ge(t,e,!0,!0),t})(),_r=e=>t=>{switch(e.filterType){case"AND":return e.children.every(n=>_r(n)(t));case"OR":return e.children.some(n=>_r(n)(t));case"NOT":return!_r(e.child)(t);case"Text":return t.includes(e.text);case"Regex":return new RegExp(e.regex,e.flag).test(t);default:console.error("unsupported content filter type");break}return!1},s2=e=>{const t=()=>{const i=e();if(i==null)return[];const o=[];return vr(i).pTags().forEach(l=>{const[,u,d,f]=l,h={pubkey:u,petname:f};d!=null&&d.length>0&&(h.mainRelayUrl=d),o.push(h)}),o};return{followings:t,followingPubkeys:()=>t().map(i=>i.pubkey),data:e}},rB=async({pubkey:e},t)=>{const n=new $i({type:"Followings",pubkey:e});ko({task:n,signal:t});const i=await n.latestEventPromise();return s2(()=>i)},id=e=>{const t=_i(),n=We(e),i=()=>["useFollowings",n()],o=wi(i,Fm({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:u}=l;return new $i({type:"Followings",pubkey:u})},queryClient:t}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>t.invalidateQueries(i());return{...s2(()=>o.data),invalidateFollowings:a,query:o}},iB=e=>{const t=mt(),{config:n,removeColumn:i}=Pe(),{followingPubkeys:o}=id(()=>({pubkey:e.column.pubkey})),{events:a}=kr(()=>{const l=wm.uniq([...o()]);return l.length===0?null:{debugId:"following",relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:l,limit:10,since:gr()-4*60*60}],clientEventFilter:u=>e.column.contentFilter==null?!0:_r(e.column.contentFilter)(u.content)}});return On(()=>{console.log("home",a())}),un(()=>console.log("home timeline mounted")),qn(()=>console.log("home timeline unmounted")),b(Si,{get header(){return b(hs,{get name(){return e.column.name??t()("column.home")},get icon(){return b(i2,{})},settings:()=>b(Ti,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b($s,{get events(){return a()}})}})},sB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),o2=(e={})=>(()=>{const t=sB();return Ge(t,e,!0,!0),t})(),oB=B('<span class="h-4 w-4 pt-[1px] text-rose-400">'),aB=B('<img alt="icon" class="rounded">'),lB=B('<div class="flex gap-1 px-1 text-sm"><div class="notification-icon flex max-w-[64px] place-items-center"></div><div class="notification-user flex gap-1 overflow-hidden"><div class="author-icon h-5 w-5 shrink-0 overflow-hidden object-cover"></div><div class="flex-1 overflow-hidden"><button class="truncate font-bold hover:text-blue-500 hover:underline">'),cB=B('<div class="notification-event py-1">'),uB=B('<span class="truncate">'),dB=B('<div class="truncate">読み込み中 '),fB=e=>{const t=mt(),{shouldMuteEvent:n}=Pe(),{showProfile:i}=$r(),o=()=>vr(e.event),a=()=>o().lastTaggedEventId(),{profile:l}=Ei(()=>({pubkey:e.event.pubkey})),{event:u,query:d}=Hm(()=>cn([a()])(([h])=>({eventId:h}))),f=()=>d.isSuccess&&u()==null;return b(oe,{get when(){return!f()||n(e.event)},get children(){return[(()=>{const h=lB(),g=h.firstChild,v=g.nextSibling,w=v.firstChild,$=w.nextSibling,k=$.firstChild;return A(g,b(ln,{get fallback(){return(()=>{const _=uB();return A(_,()=>e.event.content),_})()},get children(){return b(ze,{get when(){return e.event.content==="+"},get children(){const _=oB();return A(_,b(nl,{})),_}})}})),A(w,b(oe,{get when(){return l()?.picture!=null},get children(){const _=aB();return Ie(()=>Ke(_,"src",l()?.picture)),_}})),k.$$click=()=>i(e.event.pubkey),A(k,b(Ml,{get pubkey(){return e.event.pubkey}})),A($,()=>t()("notification.reacted"),null),h})(),(()=>{const h=cB();return A(h,b(oe,{get when(){return u()},get fallback(){return(()=>{const g=dB();return g.firstChild,A(g,a,null),g})()},keyed:!0,children:g=>b(Bv,{event:g})})),h})()]}})};it(["click"]);const hB=B("<div>unknown event"),a2=e=>{const{shouldMuteEvent:t}=Pe();return b(St,{get each(){return e.events},children:n=>b(oe,{get when(){return!t(n)},get children(){return b(ln,{get fallback(){return hB()},get children(){return[b(ze,{get when(){return n.kind===dt.Text},get children(){return b(Vs,{get children(){return b(jv,{event:n})}})}}),b(ze,{get when(){return n.kind===dt.Reaction},get children(){return b(Vs,{get children(){return b(fB,{event:n})}})}}),b(ze,{get when(){return n.kind===6},get children(){return b(Vs,{get children(){return b(Km,{event:n})}})}})]}})}})})},pB=e=>{const t=mt(),{config:n,removeColumn:i}=Pe(),{events:o}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6,7],"#p":[e.column.pubkey],limit:10}],clientEventFilter:a=>e.column.contentFilter==null?!0:_r(e.column.contentFilter)(a.content)}));return b(Si,{get header(){return b(hs,{get name(){return e.column.name??t()("column.notification")},get icon(){return b(o2,{})},settings:()=>b(Ti,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b(a2,{get events(){return o()}})}})},gB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),af=(e={})=>(()=>{const t=gB();return Ge(t,e,!0,!0),t})(),mB=e=>{const t=mt(),{config:n,removeColumn:i}=Pe(),{events:o}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[e.column.pubkey],limit:10}],clientEventFilter:a=>e.column.contentFilter==null?!0:_r(e.column.contentFilter)(a.content)}));return b(Si,{get header(){return b(hs,{get name(){return e.column.name??t()("column.posts")},get icon(){return b(af,{})},settings:()=>b(Ti,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b($s,{get events(){return o()}})}})},vB=e=>{const t=mt(),{config:n,removeColumn:i}=Pe(),{events:o}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[7],authors:[e.column.pubkey],limit:10}],clientEventFilter:a=>e.column.contentFilter==null?!0:_r(e.column.contentFilter)(a.content)}));return b(Si,{get header(){return b(hs,{get name(){return e.column.name??t()("column.reactions")},get icon(){return b(Nd,{})},settings:()=>b(Ti,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>i(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b(a2,{get events(){return o()}})}})},yB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),lf=(e={})=>(()=>{const t=yB();return Ge(t,e,!0,!0),t})(),bB=e=>{const t=mt(),{removeColumn:n}=Pe(),{events:i}=kr(()=>({relayUrls:e.column.relayUrls,filters:[{kinds:[1,6],limit:25,since:gr()-4*60*60}],clientEventFilter:o=>e.column.contentFilter==null?!0:_r(e.column.contentFilter)(o.content)}));return b(Si,{get header(){return b(hs,{get name(){return e.column.name??t()("column.relay")},get icon(){return b(lf,{})},settings:()=>b(Ti,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>n(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b($s,{get events(){return i()}})}})},_B=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),l2=(e={})=>(()=>{const t=_B();return Ge(t,e,!0,!0),t})(),wB=B('<div class="flex flex-col"><div class="flex h-8 items-center gap-1 px-2"><h2 class="flex items-center gap-1"><span class="inline-block h-4 w-4 text-gray-700"></span></h2><form class="flex-1"><input class="w-full rounded border border-stone-300 px-1 py-0 focus:border-rose-100 focus:ring-rose-300" type="text" name="query"></form><button class="h-4 w-4">'),xB=e=>{const[t,n]=be(!1),[i,o]=be(""),{saveColumn:a}=Pe(),l=()=>n(g=>!g),u=()=>{i()!==e.column.query&&a({...e.column,query:i()})},d=()=>{u()},f=g=>{o(g.currentTarget.value)},h=g=>{g.preventDefault(),u()};return un(()=>{o(e.column.query)}),(()=>{const g=wB(),v=g.firstChild,w=v.firstChild,$=w.firstChild,k=w.nextSibling,_=k.firstChild,C=k.nextSibling;return A($,b(l2,{})),k.addEventListener("submit",h),_.addEventListener("blur",d),_.addEventListener("change",f),C.$$click=()=>l(),A(C,b(X0,{})),A(g,b(oe,{get when(){return t()},get children(){return e.settings()}}),null),Ie(()=>_.value=i()),g})()},$B=e=>{const{removeColumn:t}=Pe(),{events:n}=kr(()=>{const{query:i}=e.column;return i.length===0?null:{relayUrls:uE,filters:[{kinds:[1,6],search:i,limit:25}],clientEventFilter:o=>o.tags.findIndex(([a])=>a==="mostr")>=0?!1:e.column.contentFilter==null?!0:_r(e.column.contentFilter)(o.content)}});return b(Si,{get header(){return b(xB,{get column(){return e.column},settings:()=>b(Ti,{get column(){return e.column},get columnIndex(){return e.columnIndex}}),onClose:()=>t(e.column.id)})},get width(){return e.column.width},get columnIndex(){return e.columnIndex},get lastColumn(){return e.lastColumn},get children(){return b($s,{get events(){return n()}})}})};it(["click"]);const kB=B('<div class="scrollbar flex h-full snap-x snap-mandatory flex-row overflow-y-hidden overflow-x-scroll">'),EB=()=>{const{config:e}=Pe();return(()=>{const t=kB();return A(t,b(St,{get each(){return e().columns},children:(n,i)=>{const o=()=>i()+1,a=()=>o()===e().columns.length;return b(ln,{get children(){return[b(ze,{get when(){return n.columnType==="Following"&&n},keyed:!0,children:l=>b(iB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Notification"&&n},keyed:!0,children:l=>b(pB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Posts"&&n},keyed:!0,children:l=>b(mB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Reactions"&&n},keyed:!0,children:l=>b(vB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Relays"&&n},keyed:!0,children:l=>b(bB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Bookmark"&&n},keyed:!0,children:l=>b(tB,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})}),b(ze,{get when(){return n.columnType==="Search"&&n},keyed:!0,children:l=>b($B,{column:l,get columnIndex(){return o()},get lastColumn(){return a()}})})]}})}})),t})()},CB=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani</p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),SB=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),TB=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),AB=async()=>{const t=await(await fetch(ad("packageInfo.json"))).text();return JSON.parse(t)},IB=e=>{const[t]=K0(AB);return b(Ci,{get onClose(){return e.onClose},get children(){const n=CB(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,f=d.nextSibling,h=f.nextSibling,g=h.nextSibling,v=g.firstChild,w=v.nextSibling;w.nextSibling;const $=g.nextSibling,k=$.nextSibling,_=k.nextSibling,C=_.nextSibling,I=C.nextSibling,S=I.nextSibling,E=S.nextSibling;return E.nextSibling,A(u,()=>t()?.self?.version,null),A(g,b(Co,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),w),A(E,()=>t()?.self.licenseText),A(n,b(St,{get each(){return t()?.packages??[]},fallback:"取得中",children:T=>[(()=>{const O=SB(),j=O.firstChild,U=j.nextSibling,te=U.nextSibling,W=te.nextSibling;return W.nextSibling,A(O,()=>T.name,j),A(O,()=>T.version,U),A(O,()=>T.licenseSpdx,W),O})(),(()=>{const O=TB();return A(O,()=>T.licenseText),O})()]}),null),Ie(()=>Ke(o,"src",ad("images/rabbit_app_256.png"))),n}})},RB=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),OB=e=>{const t=mt(),n=Jn(),{saveColumn:i}=Pe(),o=So(),a=()=>{e.onClose(),o({command:"moveToLastColumn"}).catch(v=>console.error(v))},l=()=>{cn([n()])(([v])=>{i($m({pubkey:v}))}),a()},u=()=>{cn([n()])(([v])=>{i(km({pubkey:v}))}),a()},d=()=>{i(Em()),a()},f=()=>{i(Bd({query:""})),a()},h=()=>{cn([n()])(([v])=>{i(Cm({pubkey:v}))}),a()},g=()=>{cn([n()])(([v])=>{i(Sm({pubkey:v}))}),a()};return b(Ci,{get onClose(){return e.onClose},get children(){const v=RB(),w=v.firstChild,$=w.firstChild,k=w.nextSibling,_=k.firstChild,C=k.nextSibling,I=C.firstChild,S=C.nextSibling,E=S.firstChild,T=S.nextSibling,O=T.firstChild,j=T.nextSibling,U=j.firstChild;return w.$$click=()=>l(),A($,b(i2,{})),A(w,()=>t()("column.home"),null),k.$$click=()=>u(),A(_,b(o2,{})),A(k,()=>t()("column.notification"),null),C.$$click=()=>d(),A(I,b(lf,{})),A(C,()=>t()("column.japanese"),null),S.$$click=()=>f(),A(E,b(l2,{})),A(S,()=>t()("column.search"),null),T.$$click=()=>h(),A(O,b(af,{})),A(T,()=>t()("column.myPosts"),null),j.$$click=()=>g(),A(U,b(Nd,{})),A(j,()=>t()("column.myReactions"),null),v}})};it(["click"]);const LB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),PB=(e={})=>(()=>{const t=LB();return Ge(t,e,!0,!0),t})(),MB=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),BB=(e={})=>(()=>{const t=MB();return Ge(t,e,!0,!0),t})(),jB=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),NB=(e={})=>(()=>{const t=jB();return Ge(t,e,!0,!0),t})();function DB(e){const{config:t}=Pe(),n=We(e),{events:i}=kr(()=>({relayUrls:t().relayUrls,filters:[{kinds:[dt.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>yr(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const UB=e=>{const t=We(e),n=wi(()=>["useVerification",t()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return Promise.resolve(null);const{nip05:u}=l;return vm.queryProfile(u)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},zB=(e,...t)=>{const n=String.raw(e,t),i=[],o=n.split(`
`);for(let a=0;a<o.length;a+=1){const u=o[a].trimStart();(i.length>0||u.length>0)&&i.push(u)}for(;i.length>0&&!(i[i.length-1].length>0);)i.pop();return i.join(`
`)},HB=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),k0=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),FB=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),qB=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),WB=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),E0=B('<div class="shrink-0 text-xs">'),ZB=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md"></div></div><div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),VB=B('<div class="truncate text-xl font-bold">'),KB=B('<div class="truncate text-xs">@'),GB=B('<span class="inline-block h-3 w-3">'),QB=B('<span class="inline-block h-4 w-4 text-blue-400">'),YB=B('<div class="flex items-center text-xs">'),XB=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),JB=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),ej=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm">フォロワー</div><div class="text-xl">'),tj=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm">フォロー</div><div class="text-xl">'),nj=B('<ul class="border-t px-5 py-2 text-xs">'),rj=B('<ul class="border-t p-1">'),ij=B('<div class="h-12 shrink-0">'),sj=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),oj=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),aj=B('<span class="inline-block h-4 w-4 text-rose-500">'),lj=B('<span class="text-sm">読み込み中'),cj=B('<button class="text-sm hover:text-stone-800 hover:underline">読み込む'),uj=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),dj=e=>{const{count:t}=DB(()=>({pubkey:e.pubkey}));return We(t)},fj=e=>{const t=mt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a}=Pe(),l=Wl(),u=Jn(),{showProfileEdit:d}=$r(),f=We(()=>Eo(e.pubkey)),[h,g]=be(!1),[v,w]=be(!1),[$,k]=be(!1),[_,C]=be(null),I=()=>C(null),{profile:S,query:E}=Ei(()=>({pubkey:e.pubkey})),{verification:T,query:O}=UB(()=>cn([S()?.nip05])(([Y])=>({nip05:Y}))),j=()=>{const Y=S()?.nip05;if(Y==null)return null;const[fe,G]=Y.split("@");return G==null?null:fe==="_"?{domain:G,ident:G}:{user:fe,domain:G,ident:Y}},U=()=>T()?.pubkey===e.pubkey,te=()=>a(e.pubkey),{followingPubkeys:W,invalidateFollowings:X,query:V}=id(()=>cn([u()])(([Y])=>({pubkey:Y}))),Q=()=>W().includes(e.pubkey),{followingPubkeys:re,query:q}=id(()=>({pubkey:e.pubkey})),ee=()=>{const Y=u();return Y!=null&&re().includes(Y)},ue=pi({mutationKey:["updateContacts"],mutationFn:(...Y)=>l.updateContacts(...Y).then(fe=>Promise.allSettled(fe.map(ki(5e3)))),onSuccess:Y=>{const fe=Y.filter(ce=>ce.status==="fulfilled").length,G=Y.length-fe;fe===Y.length?console.log("succeeded to update contacts"):fe>0?console.log(`succeeded to update contacts for ${fe} relays but failed for ${G} relays`):console.error("failed to update contacts")},onError:Y=>{console.error("failed to update contacts: ",Y)},onSettled:()=>{X().then(()=>V.refetch()).catch(Y=>console.error("failed to refetch contacts",Y))}}),ge=async Y=>{try{const fe=u();if(fe==null)return;g(!0);const G=W(),ce=await rB({pubkey:fe}),_e=zB`
        フォローリストが空のようです。初めてのフォローであれば問題ありません。
        そうでなければ、リレーとの接続がうまくいっていない可能性があります。ページを再読み込みしてリレーと再接続してください。
        また、他のクライアントと同じリレーを設定できているどうかご確認ください。

        続行しますか？
      `;if((ce.data()==null||ce.followingPubkeys().length===0)&&!window.confirm(_e))return;if((ce?.data()?.created_at??0)<(V.data?.created_at??0)){window.alert("最新のフォローリストを取得できませんでした。リレーの接続状況が悪い可能性があります。");return}await ue.mutateAsync({relayUrls:n().relayUrls,pubkey:fe,content:ce.data()?.content??"",followingPubkeys:yr(Y(ce.followingPubkeys()))})}catch(fe){console.error("failed to update contact list",fe),window.alert("フォローリストの更新に失敗しました。")}finally{g(!1)}},ne=()=>{ge(Y=>[...Y,e.pubkey]).catch(Y=>{console.log("failed to follow",Y)})},he=()=>{window.confirm("本当にフォロー解除しますか？")&&ge(Y=>Y.filter(fe=>fe!==e.pubkey)).catch(Y=>{console.log("failed to unfollow",Y)})},pe=[{content:()=>t()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(f()).catch(Y=>window.alert(Y))}},{content:()=>te()?t()("profile.unmute"):t()("profile.mute"),onSelect:()=>{te()?o(e.pubkey):i(e.pubkey)}},{when:()=>e.pubkey===u(),content:()=>Q()?t()("profile.unfollowMyself"):t()("profile.followMyself"),onSelect:()=>{Q()?he():ne()}}],{events:Me}=kr(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[e.pubkey],limit:10,until:gr()}],continuous:!1}));return b(Ci,{onClose:()=>e.onClose?.(),get children(){return[b(oe,{get when(){return E.isFetched},get fallback(){return"loading"},get children(){return[b(oe,{get when(){return S()?.banner},get fallback(){return ij()},keyed:!0,children:Y=>(()=>{const fe=sj(),G=fe.firstChild;return Ke(G,"src",Y),fe})()}),(()=>{const Y=ZB(),fe=Y.firstChild,G=fe.firstChild,ce=fe.nextSibling,_e=ce.firstChild;return A(G,b(oe,{get when(){return S()?.picture},keyed:!0,children:N=>(()=>{const ke=oj();return Ke(ke,"src",N),ke})()})),A(_e,b(ln,{get children(){return[b(ze,{get when(){return e.pubkey===u()},get children(){const N=HB();return N.$$click=()=>d(),A(N,()=>t()("profile.editProfile")),N}}),b(ze,{get when(){return ue.isLoading||h()},get children(){const N=k0();return A(N,()=>t()("profile.updating")),N}}),b(ze,{get when(){return V.isLoading||V.isFetching},get children(){const N=k0();return A(N,()=>t()("profile.loading")),N}}),b(ze,{get when(){return Q()},get children(){const N=FB();return N.$$click=()=>he(),N.addEventListener("mouseleave",()=>w(!1)),N.addEventListener("mouseenter",()=>w(!0)),A(N,b(oe,{get when(){return!v()},get fallback(){return t()("profile.unfollow")},get children(){return t()("profile.followingCurrently")}})),Ie(()=>N.disabled=ue.isLoading),N}}),b(ze,{get when(){return!Q()},get children(){const N=qB();return N.$$click=()=>ne(),A(N,()=>t()("profile.follow")),Ie(()=>N.disabled=ue.isLoading),N}})]}}),null),A(_e,b(Ym,{menu:pe,get children(){const N=WB();return A(N,b(Gm,{})),N}}),null),A(ce,b(ln,{get children(){return[b(ze,{get when(){return q.isLoading},get children(){const N=E0();return A(N,()=>t()("profile.loading")),N}}),b(ze,{get when(){return ee()},get children(){const N=E0();return A(N,()=>t()("profile.followsYou")),N}})]}}),null),Y})(),(()=>{const Y=XB(),fe=Y.firstChild,G=fe.firstChild,ce=G.nextSibling,_e=ce.firstChild;return A(fe,b(oe,{get when(){return(S()?.display_name?.length??0)>0},get children(){const N=VB();return A(N,()=>S()?.display_name),N}}),G),A(G,b(oe,{get when(){return(S()?.name?.length??0)>0},get children(){const N=KB();return N.firstChild,A(N,()=>S()?.name,null),N}}),null),A(G,b(oe,{get when(){return(S()?.nip05?.length??0)>0},get children(){const N=YB();return A(N,()=>j()?.ident,null),A(N,b(ln,{get fallback(){return(()=>{const ke=aj();return A(ke,b(NB,{})),ke})()},get children(){return[b(ze,{get when(){return O.isLoading},get children(){const ke=GB();return A(ke,b(PB,{})),ke}}),b(ze,{get when(){return U()},get children(){const ke=QB();return A(ke,b(BB,{})),ke}})]}}),null),N}}),null),A(_e,f),Y})(),b(oe,{get when(){return(S()?.about??"").length>0},get children(){const Y=JB();return A(Y,()=>S()?.about),Y}}),(()=>{const Y=tj(),fe=Y.firstChild,G=fe.firstChild,ce=G.nextSibling;return fe.$$click=()=>C("Following"),A(ce,b(oe,{get when(){return q.isFetched},get fallback(){return lj()},get children(){return re().length}})),A(Y,b(oe,{get when(){return!n().hideCount},get children(){const _e=ej(),N=_e.firstChild,ke=N.nextSibling;return A(ke,b(oe,{get when(){return $()},get fallback(){return(()=>{const tt=cj();return tt.$$click=()=>k(!0),tt})()},keyed:!0,get children(){return b(dj,{get pubkey(){return e.pubkey}})}})),_e}}),null),Y})(),b(oe,{get when(){return(S()?.website??"").length>0},get children(){const Y=nj();return A(Y,b(oe,{get when(){return S()?.website},keyed:!0,children:fe=>(()=>{const G=uj(),ce=G.firstChild;return A(ce,b(lf,{})),A(G,b(Co,{class:"text-blue-500 underline",href:fe}),null),G})()})),Y}})]}}),b(ln,{get children(){return b(ze,{get when(){return _()==="Following"},get children(){return b(Xu,{get data(){return re()},pubkeyExtractor:Y=>Y,onClose:I})}})}}),(()=>{const Y=rj();return A(Y,b($s,{get events(){return Me()}})),Y})()]}})};it(["click"]);function hj(e,t){for(var n=-1,i=e==null?0:e.length;++n<i&&t(e[n],n,e)!==!1;);return e}var pj=hj,gj=xi,mj=function(){try{var e=gj(Object,"defineProperty");return e({},"",{}),e}catch{}}(),c2=mj,C0=c2;function vj(e,t,n){t=="__proto__"&&C0?C0(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var u2=vj,yj=u2,bj=ud,_j=Object.prototype,wj=_j.hasOwnProperty;function xj(e,t,n){var i=e[t];(!(wj.call(e,t)&&bj(i,n))||n===void 0&&!(t in e))&&yj(e,t,n)}var cf=xj,$j=cf,kj=u2;function Ej(e,t,n,i){var o=!n;n||(n={});for(var a=-1,l=t.length;++a<l;){var u=t[a],d=i?i(n[u],e[u],u,n,e):void 0;d===void 0&&(d=e[u]),o?kj(n,u,d):$j(n,u,d)}return n}var Io=Ej,Cj=Io,Sj=Zl;function Tj(e,t){return e&&Cj(t,Sj(t),e)}var Aj=Tj;function Ij(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var Rj=Ij,Oj=Qn,Lj=tf,Pj=Rj,Mj=Object.prototype,Bj=Mj.hasOwnProperty;function jj(e){if(!Oj(e))return Pj(e);var t=Lj(e),n=[];for(var i in e)i=="constructor"&&(t||!Bj.call(e,i))||n.push(i);return n}var Nj=jj,Dj=Wv,Uj=Nj,zj=Vv;function Hj(e){return zj(e)?Dj(e,!0):Uj(e)}var uf=Hj,Fj=Io,qj=uf;function Wj(e,t){return e&&Fj(t,qj(t),e)}var Zj=Wj,dl={exports:{}};dl.exports;(function(e,t){var n=Bn,i=t&&!t.nodeType&&t,o=i&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(f,h){if(h)return f.slice();var g=f.length,v=u?u(g):new f.constructor(g);return f.copy(v),v}e.exports=d})(dl,dl.exports);var Vj=dl.exports;function Kj(e,t){var n=-1,i=e.length;for(t||(t=Array(i));++n<i;)t[n]=e[n];return t}var Gj=Kj,Qj=Io,Yj=Kd;function Xj(e,t){return Qj(e,Yj(e),t)}var Jj=Xj,eN=Zv,tN=eN(Object.getPrototypeOf,Object),df=tN,nN=Vd,rN=df,iN=Kd,sN=Hv,oN=Object.getOwnPropertySymbols,aN=oN?function(e){for(var t=[];e;)nN(t,iN(e)),e=rN(e);return t}:sN,d2=aN,lN=Io,cN=d2;function uN(e,t){return lN(e,cN(e),t)}var dN=uN,fN=zv,hN=d2,pN=uf;function gN(e){return fN(e,pN,hN)}var ff=gN,mN=Object.prototype,vN=mN.hasOwnProperty;function yN(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&vN.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var bN=yN,S0=Uv;function _N(e){var t=new e.constructor(e.byteLength);return new S0(t).set(new S0(e)),t}var hf=_N,wN=hf;function xN(e,t){var n=t?wN(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var $N=xN,kN=/\w*$/;function EN(e){var t=new e.constructor(e.source,kN.exec(e));return t.lastIndex=e.lastIndex,t}var CN=EN,T0=ps,A0=T0?T0.prototype:void 0,I0=A0?A0.valueOf:void 0;function SN(e){return I0?Object(I0.call(e)):{}}var TN=SN,AN=hf;function IN(e,t){var n=t?AN(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var RN=IN,ON=hf,LN=$N,PN=CN,MN=TN,BN=RN,jN="[object Boolean]",NN="[object Date]",DN="[object Map]",UN="[object Number]",zN="[object RegExp]",HN="[object Set]",FN="[object String]",qN="[object Symbol]",WN="[object ArrayBuffer]",ZN="[object DataView]",VN="[object Float32Array]",KN="[object Float64Array]",GN="[object Int8Array]",QN="[object Int16Array]",YN="[object Int32Array]",XN="[object Uint8Array]",JN="[object Uint8ClampedArray]",eD="[object Uint16Array]",tD="[object Uint32Array]";function nD(e,t,n){var i=e.constructor;switch(t){case WN:return ON(e);case jN:case NN:return new i(+e);case ZN:return LN(e,n);case VN:case KN:case GN:case QN:case YN:case XN:case JN:case eD:case tD:return BN(e,n);case DN:return new i;case UN:case FN:return new i(e);case zN:return PN(e);case HN:return new i;case qN:return MN(e)}}var rD=nD,iD=Qn,R0=Object.create,sD=function(){function e(){}return function(t){if(!iD(t))return{};if(R0)return R0(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}(),oD=sD,aD=oD,lD=df,cD=tf;function uD(e){return typeof e.constructor=="function"&&!cD(e)?aD(lD(e)):{}}var dD=uD,fD=Vl,hD=Xr,pD="[object Map]";function gD(e){return hD(e)&&fD(e)==pD}var mD=gD,vD=mD,yD=Jd,O0=ef,L0=O0&&O0.isMap,bD=L0?yD(L0):vD,_D=bD,wD=Vl,xD=Xr,$D="[object Set]";function kD(e){return xD(e)&&wD(e)==$D}var ED=kD,CD=ED,SD=Jd,P0=ef,M0=P0&&P0.isSet,TD=M0?SD(M0):CD,AD=TD,ID=Zd,RD=pj,OD=cf,LD=Aj,PD=Zj,MD=Vj,BD=Gj,jD=Jj,ND=dN,DD=Kv,UD=ff,zD=Vl,HD=bN,FD=rD,qD=dD,WD=er,ZD=Qd,VD=_D,KD=Qn,GD=AD,QD=Zl,YD=uf,XD=1,JD=2,eU=4,f2="[object Arguments]",tU="[object Array]",nU="[object Boolean]",rU="[object Date]",iU="[object Error]",h2="[object Function]",sU="[object GeneratorFunction]",oU="[object Map]",aU="[object Number]",p2="[object Object]",lU="[object RegExp]",cU="[object Set]",uU="[object String]",dU="[object Symbol]",fU="[object WeakMap]",hU="[object ArrayBuffer]",pU="[object DataView]",gU="[object Float32Array]",mU="[object Float64Array]",vU="[object Int8Array]",yU="[object Int16Array]",bU="[object Int32Array]",_U="[object Uint8Array]",wU="[object Uint8ClampedArray]",xU="[object Uint16Array]",$U="[object Uint32Array]",et={};et[f2]=et[tU]=et[hU]=et[pU]=et[nU]=et[rU]=et[gU]=et[mU]=et[vU]=et[yU]=et[bU]=et[oU]=et[aU]=et[p2]=et[lU]=et[cU]=et[uU]=et[dU]=et[_U]=et[wU]=et[xU]=et[$U]=!0;et[iU]=et[h2]=et[fU]=!1;function Ba(e,t,n,i,o,a){var l,u=t&XD,d=t&JD,f=t&eU;if(n&&(l=o?n(e,i,o,a):n(e)),l!==void 0)return l;if(!KD(e))return e;var h=WD(e);if(h){if(l=HD(e),!u)return BD(e,l)}else{var g=zD(e),v=g==h2||g==sU;if(ZD(e))return MD(e,u);if(g==p2||g==f2||v&&!o){if(l=d||v?{}:qD(e),!u)return d?ND(e,PD(l,e)):jD(e,LD(l,e))}else{if(!et[g])return o?e:{};l=FD(e,g,u)}}a||(a=new ID);var w=a.get(e);if(w)return w;a.set(e,l),GD(e)?e.forEach(function(_){l.add(Ba(_,t,n,_,e,a))}):VD(e)&&e.forEach(function(_,C){l.set(C,Ba(_,t,n,C,e,a))});var $=f?d?UD:DD:d?YD:QD,k=h?void 0:$(e);return RD(k||e,function(_,C){k&&(C=_,_=e[C]),OD(l,C,Ba(_,t,n,C,e,a))}),l}var kU=Ba;function EU(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var CU=EU;function SU(e,t,n){var i=-1,o=e.length;t<0&&(t=-t>o?0:o+t),n=n>o?o:n,n<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++i<o;)a[i]=e[i+t];return a}var TU=SU,AU=Gl,IU=TU;function RU(e,t){return t.length<2?e:AU(e,IU(t,0,-1))}var OU=RU,LU=Cs,PU=CU,MU=OU,BU=Ss;function jU(e,t){return t=LU(t,e),e=MU(e,t),e==null||delete e[BU(PU(t))]}var NU=jU,DU=gs,UU=df,zU=Xr,HU="[object Object]",FU=Function.prototype,qU=Object.prototype,g2=FU.toString,WU=qU.hasOwnProperty,ZU=g2.call(Object);function VU(e){if(!zU(e)||DU(e)!=HU)return!1;var t=UU(e);if(t===null)return!0;var n=WU.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&g2.call(n)==ZU}var KU=VU,GU=KU;function QU(e){return GU(e)?void 0:e}var YU=QU,B0=ps,XU=Gd,JU=er,j0=B0?B0.isConcatSpreadable:void 0;function ez(e){return JU(e)||XU(e)||!!(j0&&e&&e[j0])}var tz=ez,nz=Vd,rz=tz;function m2(e,t,n,i,o){var a=-1,l=e.length;for(n||(n=rz),o||(o=[]);++a<l;){var u=e[a];t>0&&n(u)?t>1?m2(u,t-1,n,i,o):nz(o,u):i||(o[o.length]=u)}return o}var iz=m2,sz=iz;function oz(e){var t=e==null?0:e.length;return t?sz(e,1):[]}var az=oz;function lz(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}var cz=lz,uz=cz,N0=Math.max;function dz(e,t,n){return t=N0(t===void 0?e.length-1:t,0),function(){for(var i=arguments,o=-1,a=N0(i.length-t,0),l=Array(a);++o<a;)l[o]=i[t+o];o=-1;for(var u=Array(t+1);++o<t;)u[o]=i[o];return u[t]=n(l),uz(e,this,u)}}var fz=dz;function hz(e){return function(){return e}}var pz=hz,gz=pz,D0=c2,mz=n2,vz=D0?function(e,t){return D0(e,"toString",{configurable:!0,enumerable:!1,value:gz(t),writable:!0})}:mz,yz=vz,bz=800,_z=16,wz=Date.now;function xz(e){var t=0,n=0;return function(){var i=wz(),o=_z-(i-n);if(n=i,o>0){if(++t>=bz)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var $z=xz,kz=yz,Ez=$z,Cz=Ez(kz),Sz=Cz,Tz=az,Az=fz,Iz=Sz;function Rz(e){return Iz(Az(e,void 0,Tz),e+"")}var Oz=Rz,Lz=sf,Pz=kU,Mz=NU,Bz=Cs,jz=Io,Nz=YU,Dz=Oz,Uz=ff,zz=1,Hz=2,Fz=4,qz=Dz(function(e,t){var n={};if(e==null)return n;var i=!1;t=Lz(t,function(a){return a=Bz(a,e),i||(i=a.length>1),a}),jz(e,Uz(e),n),i&&(n=Pz(n,zz|Hz|Fz,Nz));for(var o=t.length;o--;)Mz(n,t[o]);return n}),Wz=qz;const Zz=go(Wz);var Vz="Expected a function";function Kz(e){if(typeof e!="function")throw new TypeError(Vz);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var Gz=Kz,Qz=cf,Yz=Cs,Xz=Yd,U0=Qn,Jz=Ss;function eH(e,t,n,i){if(!U0(e))return e;t=Yz(t,e);for(var o=-1,a=t.length,l=a-1,u=e;u!=null&&++o<a;){var d=Jz(t[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return e;if(o!=l){var h=u[d];f=i?i(h,d,u):void 0,f===void 0&&(f=U0(h)?h:Xz(t[o+1])?[]:{})}Qz(u,d,f),u=u[d]}return e}var tH=eH,nH=Gl,rH=tH,iH=Cs;function sH(e,t,n){for(var i=-1,o=t.length,a={};++i<o;){var l=t[i],u=nH(e,l);n(u,l)&&rH(a,iH(l,e),u)}return a}var oH=sH,aH=sf,lH=of,cH=oH,uH=ff;function dH(e,t){if(e==null)return{};var n=aH(uH(e),function(i){return[i]});return t=lH(t),cH(e,n,function(i,o){return t(i,o[0])})}var fH=dH,hH=of,pH=Gz,gH=fH;function mH(e,t){return gH(e,pH(hH(t)))}var vH=mH;const yH=go(vH),bH=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),_H=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),wH=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),xH=B('<div class="px-4 pt-4">読み込み中...'),$H=B('<div><span class="font-bold">その他の項目</span><div>'),kH=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">アイコン</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture">バナー</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ユーザ名</label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">名前</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">自己紹介</label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ウェブサイト</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">ドメイン認証（NIP-05）</label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name">LNURLアドレス / ライトニングアドレス</label><span class="text-xs">どちらか片方のみが保存されます。</span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400">保存</button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">キャンセル'),EH=B('<div class="h-24 shrink-0">'),CH=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),SH="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",TH="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",AH=new RegExp(`^${SH}$`),v2=new RegExp(`^${TH}$`),IH=e=>AH.test(e),RH=e=>v2.test(e),OH=e=>{const t=Jn(),{config:n}=Pe(),[i,o]=be(""),[a,l]=be(""),[u,d]=be(""),[f,h]=be(""),[g,v]=be(""),[w,$]=be(""),[k,_]=be(""),[C,I]=be(""),{profile:S,invalidateProfile:E,query:T}=Ei(()=>cn([t()])(([Q])=>({pubkey:Q}))),{updateProfile:O}=Wl(),j=pi({mutationKey:["updateProfile"],mutationFn:(...Q)=>O(...Q).then(re=>Promise.allSettled(re.map(ki(1e4)))),onSuccess:Q=>{const re=Q.filter(ee=>ee.status==="fulfilled").length,q=Q.length-re;re===Q.length?window.alert("更新しました"):re>0?window.alert(`${q}個のリレーで更新に失敗しました`):window.alert("すべてのリレーで更新に失敗しました"),E().then(()=>T.refetch()).catch(ee=>console.error(ee)),e.onClose()},onError:Q=>{console.error("failed to delete",Q)}}),U=()=>T.isLoading||j.isLoading,te=()=>U();setInterval(()=>console.log(T.isLoading,j.isLoading),1e3);const W=()=>Zz(S(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),X=Q=>{Q.preventDefault();const re=t();if(re==null)return;const q=yH({picture:i(),banner:a(),name:u(),display_name:f(),about:g(),website:w(),nip05:k(),lud06:IH(C())?C():null,lud16:RH(C())?C():null},ee=>ee==null||ee.length===0);j.mutate({relayUrls:n().relayUrls,pubkey:re,profile:q,otherProperties:W()})},V=Q=>Q.key==="Enter"&&Q.preventDefault();return un(()=>{const Q=S();Q!=null&&(T.refetch().catch(re=>console.error(re)),ja(()=>{o(re=>Q.picture??re),l(re=>Q.banner??re),d(re=>Q.name??re),h(re=>Q.display_name??re),v(re=>Q.about??re),$(re=>Q.website??re),_(re=>Q.nip05??re),Q.lud16!=null?I(Q.lud16):Q.lud06!=null&&I(Q.lud06)}))}),b(Ci,{closeButton:()=>b(cd,{}),get onClose(){return e.onClose},get children(){return[(()=>{const Q=wH(),re=Q.firstChild;return A(Q,b(oe,{get when(){return a().length>0},get fallback(){return EH()},keyed:!0,get children(){const q=bH(),ee=q.firstChild;return Ie(()=>Ke(ee,"src",a())),q}}),re),A(re,b(oe,{get when(){return i().length>0},get children(){const q=_H();return Ie(()=>Ke(q,"src",i())),q}})),Q})(),b(oe,{get when(){return U()},get children(){return xH()}}),(()=>{const Q=kH(),re=Q.firstChild,q=re.firstChild,ee=q.firstChild,ue=ee.nextSibling,ge=q.nextSibling,ne=ge.firstChild,he=ne.nextSibling,pe=ge.nextSibling,Me=pe.firstChild,Y=Me.nextSibling,fe=Y.firstChild,G=fe.nextSibling,ce=pe.nextSibling,_e=ce.firstChild,N=_e.nextSibling,ke=ce.nextSibling,tt=ke.firstChild,vt=tt.nextSibling,st=ke.nextSibling,Be=st.firstChild,Fe=Be.nextSibling,Tt=st.nextSibling,wn=Tt.firstChild,ft=wn.nextSibling,Er=Tt.nextSibling,Ai=Er.firstChild,Nn=Ai.nextSibling,bt=Nn.nextSibling,xn=Er.nextSibling,Dn=xn.firstChild,Ii=Dn.nextSibling;return re.addEventListener("submit",X),ue.$$keydown=V,ue.addEventListener("blur",$e=>o($e.currentTarget.value)),he.$$keydown=V,he.addEventListener("blur",$e=>l($e.currentTarget.value)),G.$$keydown=V,G.addEventListener("change",$e=>d($e.currentTarget.value)),N.$$keydown=V,N.addEventListener("change",$e=>h($e.currentTarget.value)),vt.addEventListener("change",$e=>v($e.currentTarget.value)),Fe.$$keydown=V,Fe.addEventListener("change",$e=>$($e.currentTarget.value)),ft.$$keydown=V,ft.addEventListener("change",$e=>_($e.currentTarget.value)),bt.$$keydown=V,bt.addEventListener("change",$e=>I($e.currentTarget.value)),A(re,b(oe,{get when(){return Object.entries(W()).length>0},get children(){const $e=$H(),tr=$e.firstChild,Yt=tr.nextSibling;return A(Yt,b(St,{get each(){return Object.entries(W())},children:([Wt,$n])=>(()=>{const nr=CH(),rr=nr.firstChild,Cr=rr.nextSibling;return A(rr,Wt),A(Cr,$n),nr})()})),$e}}),xn),Ii.$$click=()=>e.onClose(),A(re,b(oe,{get when(){return j.isLoading},children:"保存中..."}),null),Ie($e=>{const tr=te(),Yt=te(),Wt=te(),$n=te(),nr=te(),rr=te(),Cr=v2.source,Ri=te(),Oi=te(),Li=j.isLoading;return tr!==$e._v$&&(ue.disabled=$e._v$=tr),Yt!==$e._v$2&&(he.disabled=$e._v$2=Yt),Wt!==$e._v$3&&(G.disabled=$e._v$3=Wt),$n!==$e._v$4&&(N.disabled=$e._v$4=$n),nr!==$e._v$5&&(vt.disabled=$e._v$5=nr),rr!==$e._v$6&&(Fe.disabled=$e._v$6=rr),Cr!==$e._v$7&&Ke(ft,"pattern",$e._v$7=Cr),Ri!==$e._v$8&&(ft.disabled=$e._v$8=Ri),Oi!==$e._v$9&&(bt.disabled=$e._v$9=Oi),Li!==$e._v$10&&(Dn.disabled=$e._v$10=Li),$e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Ie(()=>ue.value=i()),Ie(()=>he.value=a()),Ie(()=>G.value=u()),Ie(()=>N.value=f()),Ie(()=>vt.value=g()),Ie(()=>Fe.value=w()),Ie(()=>ft.value=k()),Ie(()=>bt.value=C()),Q})()]}})};it(["keydown","click"]);const LH=()=>{const e=Jn(),{modalState:t,showProfile:n,closeModal:i}=$r();return b(oe,{get when(){return t()},keyed:!0,children:o=>b(ln,{get children(){return[b(ze,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>b(fj,{pubkey:a,onClose:i})}),b(ze,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return b(OH,{onClose:()=>cn([e()])(([a])=>{n(a)})})}}),b(ze,{get when(){return o.type==="AddColumn"},get children(){return b(OB,{onClose:i})}}),b(ze,{get when(){return o.type==="About"},get children(){return b(IB,{onClose:i})}})]}})})},PH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),MH=(e={})=>(()=>{const t=PH();return Ge(t,e,!0,!0),t})(),BH=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),z0=(e={})=>(()=>{const t=BH();return Ge(t,e,!0,!0),t})(),jH=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),NH=(e={})=>(()=>{const t=jH();return Ge(t,e,!0,!0),t})(),DH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),UH=(e={})=>(()=>{const t=DH();return Ge(t,e,!0,!0),t})(),zH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),HH=(e={})=>(()=>{const t=zH();return Ge(t,e,!0,!0),t})(),FH=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),qH=(e={})=>(()=>{const t=FH();return Ge(t,e,!0,!0),t})(),H0=ct.string().length(64).regex(/^[0-9a-f]{64}$/),sd=ct.string().regex(/^\w+$/),WH=ct.object({shortcode:sd,url:ct.string().url(),keywords:ct.optional(ct.array(sd))}),ZH=ct.object({manifest:ct.literal("emojipack_v1"),name:ct.string(),emojis:ct.array(WH),description:ct.optional(ct.string()),author:ct.optional(H0),publisher:ct.optional(H0)}).refine(e=>r2(e.emojis,n=>n.shortcode).length===e.emojis.length,{message:"shortcodes should be unique"}),y2=ct.record(sd,ct.string().url());ZH.or(y2);const VH=e=>Object.entries(e).map(([t,n])=>({shortcode:t,url:n})),KH=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),GH=B('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),QH=B('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),od=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),YH=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),XH=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),JH=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),eF=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),tF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),nF=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),rF=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),iF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),sF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),oF=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),aF=B('<div class="p-4">'),lF=B('<h2 class="flex-1 text-center text-lg font-bold">'),cF=B('<ul class="flex flex-col">'),uF=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),dF=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),b2=e=>`^(?:${e})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,fF=b2("https?"),hF=b2("wss?"),pF=()=>{const e=mt(),t=Jn(),{showProfile:n,showProfileEdit:i}=$r();return(()=>{const o=KH(),a=o.firstChild,l=a.nextSibling,u=l.firstChild,d=u.nextSibling;return A(a,()=>e()("config.profile.profile")),u.$$click=()=>cn([t()])(([f])=>{n(f)}),A(u,()=>e()("config.profile.openProfile")),d.$$click=()=>i(),A(d,()=>e()("config.profile.editProfile")),o})()},gF=()=>{const e=mt(),{config:t,addRelay:n,removeRelay:i}=Pe(),[o,a]=be(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},u=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([w])=>w).join(`
`);if(d.length===0){window.alert(e()("config.relays.notConfigured"));return}if(!window.confirm(`${e()("config.relays.askImport")}

${f}`))return;const h=t().relayUrls.length;ja(()=>{d.forEach(([w])=>{n(w)})});const v=t().relayUrls.length-h;window.alert(e()("config.relays.imported",{count:v}))};return[(()=>{const d=GH(),f=d.firstChild,h=f.nextSibling,g=h.nextSibling,v=g.nextSibling,w=v.firstChild,$=w.nextSibling;return A(f,()=>e()("config.relays.relays")),A(h,()=>e()("config.relays.numOfRelays",{count:t().relayUrls.length})),A(g,b(St,{get each(){return t().relayUrls},children:k=>(()=>{const _=od(),C=_.firstChild,I=C.nextSibling;return A(C,k),I.$$click=()=>i(k),A(I,b(fs,{})),_})()})),v.addEventListener("submit",l),w.addEventListener("change",k=>a(k.currentTarget.value)),Ke(w,"pattern",hF),A($,()=>e()("config.relays.addRelay")),Ie(()=>w.value=o()),d})(),(()=>{const d=QH(),f=d.firstChild,h=f.nextSibling;return A(f,()=>e()("config.relays.importRelays")),h.$$click=()=>{u().catch(g=>{console.error("failed to import relays",g),window.alert(e()("config.relays.failedToImport"))})},A(h,()=>e()("config.relays.importFromExtension")),d})()]},mF=()=>{const e=mt(),{config:t,setConfig:n}=Pe(),i=[{id:"relative",name:e()("config.display.relativeTimeNotation"),example:e()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:e()("config.display.absoluteTimeNotationShort"),example:e()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:e()("config.display.absoluteTimeNotationLong"),example:e()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=YH(),l=a.firstChild,u=l.nextSibling;return A(l,()=>e()("config.display.timeNotation")),A(u,b(St,{each:i,children:({id:d,name:f,example:h})=>(()=>{const g=XH(),v=g.firstChild,w=v.nextSibling;return v.$$click=()=>o(d),A(v,f),A(w,h),Ie($=>{const k=t().dateFormat===d,_=t().dateFormat===d,C=t().dateFormat!==d,I=t().dateFormat!==d;return k!==$._v$&&v.classList.toggle("bg-rose-300",$._v$=k),_!==$._v$2&&v.classList.toggle("text-white",$._v$2=_),C!==$._v$3&&v.classList.toggle("bg-white",$._v$3=C),I!==$._v$4&&v.classList.toggle("text-rose-300",$._v$4=I),$},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},Gs=e=>(()=>{const t=JH();return t.$$click=n=>e.onClick(n),Ie(n=>{const i=!e.value,o=!e.value,a=!!e.value,l=!!e.value,u=e.value;return i!==n._v$5&&t.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&t.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&t.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&t.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&Ke(t,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),t})(),vF=()=>{const e=mt(),{config:t,setConfig:n}=Pe(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=eF(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,f=d.firstChild,h=d.nextSibling,g=h.firstChild;return A(l,()=>e()("config.display.reaction")),A(f,()=>e()("config.display.enableEmojiReaction")),A(d,b(Gs,{get value(){return t().useEmojiReaction},onClick:()=>i()}),null),A(g,()=>e()("config.display.showEmojiReaction")),A(h,b(Gs,{get value(){return t().showEmojiReaction},onClick:()=>o()}),null),a})()},yF=()=>{const e=mt(),{config:t,saveEmoji:n,removeEmoji:i}=Pe(),[o,a]=be(""),[l,u]=be(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),u(""))};return(()=>{const f=tF(),h=f.firstChild,g=h.nextSibling,v=g.nextSibling,w=v.firstChild,$=w.firstChild,k=$.nextSibling,_=w.nextSibling,C=_.firstChild,I=C.nextSibling,S=_.nextSibling;return A(h,()=>e()("config.customEmoji.customEmoji")),A(g,b(St,{get each(){return Object.values(t().customEmojis)},children:({shortcode:E,url:T})=>(()=>{const O=nF(),j=O.firstChild,U=j.nextSibling,te=U.nextSibling;return Ke(j,"src",T),Ke(j,"alt",E),A(U,E),te.$$click=()=>i(E),A(te,b(fs,{})),O})()})),v.addEventListener("submit",d),A($,()=>e()("config.customEmoji.shortcode")),k.addEventListener("change",E=>a(E.currentTarget.value)),A(C,()=>e()("config.customEmoji.url")),I.addEventListener("change",E=>u(E.currentTarget.value)),Ke(I,"pattern",fF),A(S,()=>e()("config.customEmoji.addEmoji")),Ie(()=>k.value=o()),Ie(()=>I.value=l()),f})()},bF=()=>{const e=mt(),{saveEmojis:t}=Pe(),[n,i]=be(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=y2.parse(JSON.parse(n())),u=VH(l);t(u),i("")}catch(l){const u=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${u}`)}};return(()=>{const a=rF(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,f=d.firstChild,h=f.nextSibling;return A(l,()=>e()("config.customEmoji.emojiImport")),A(u,()=>e()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",g=>i(g.currentTarget.value)),A(h,()=>e()("config.customEmoji.importEmoji")),Ie(()=>f.value=n()),a})()},_F=()=>{const e=mt(),{config:t,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=Pe(),[a,l]=be(""),u=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=iF(),f=d.firstChild,h=f.nextSibling;return A(f,()=>e()("config.mute.mutedUsers")),A(h,b(St,{get each(){return t().mutedPubkeys},children:g=>(()=>{const v=od(),w=v.firstChild,$=w.nextSibling;return A(w,b(Ml,{pubkey:g})),$.$$click=()=>n(g),A($,b(fs,{})),v})()})),d})(),(()=>{const d=sF(),f=d.firstChild,h=f.nextSibling,g=h.nextSibling,v=g.firstChild,w=v.nextSibling;return A(f,()=>e()("config.mute.mutedKeywords")),A(h,b(St,{get each(){return t().mutedKeywords},children:$=>(()=>{const k=od(),_=k.firstChild,C=_.nextSibling;return A(_,$),C.$$click=()=>o($),A(C,b(fs,{})),k})()})),g.addEventListener("submit",u),v.addEventListener("change",$=>l($.currentTarget.value)),A(w,()=>e()("config.mute.add")),Ie(()=>v.value=a()),d})()]},wF=()=>{const e=mt(),{config:t,setConfig:n}=Pe(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=oF(),u=l.firstChild,d=u.nextSibling,f=d.firstChild,h=f.firstChild,g=f.nextSibling,v=g.firstChild,w=g.nextSibling,$=w.firstChild;return A(u,()=>e()("config.display.others")),A(h,()=>e()("config.display.keepOpenPostForm")),A(f,b(Gs,{get value(){return t().keepOpenPostForm},onClick:()=>i()}),null),A(v,()=>e()("config.display.showMediaByDefault")),A(g,b(Gs,{get value(){return t().showMedia},onClick:()=>o()}),null),A($,()=>e()("config.display.hideNumbers")),A(w,b(Gs,{get value(){return t().hideCount},onClick:()=>a()}),null),l})()},xF=e=>{const t=mt(),[n,i]=be(null),o=[{name:()=>t()("config.profile.profile"),icon:()=>b(af,{}),render:()=>b(pF,{})},{name:()=>t()("config.relays.relays"),icon:()=>b(qH,{}),render:()=>b(gF,{})},{name:()=>t()("config.display.display"),icon:()=>b(HH,{}),render:()=>[b(mF,{}),b(vF,{}),b(wF,{})]},{name:()=>t()("config.customEmoji.customEmoji"),icon:()=>b(Cv,{}),render:()=>[b(yF,{}),b(bF,{})]},{name:()=>t()("config.mute.mute"),icon:()=>b(UH,{}),render:()=>b(_F,{})}],a=()=>{const l=n();return l==null?null:o[l]};return b(Ci,{get onClose(){return e.onClose},get children(){const l=aF();return A(l,b(oe,{get when(){return a()},get fallback(){return[(()=>{const u=lF();return A(u,()=>t()("config.config")),u})(),(()=>{const u=cF();return A(u,b(St,{each:o,children:(d,f)=>(()=>{const h=uF(),g=h.firstChild,v=g.firstChild;return g.$$click=()=>i(f),A(v,()=>d.icon()),A(g,()=>d.name(),null),h})()})),u})()]},keyed:!0,children:u=>(()=>{const d=dF(),f=d.firstChild,h=f.nextSibling;return f.$$click=()=>i(null),A(f,b(cd,{})),A(h,()=>u.render()),d})()})),l}})};it(["click"]);const $F=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),kF=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),EF=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),CF=()=>{let e,t;const{saveColumn:n}=Pe(),i=So(),[o,a]=be(""),l=u=>{u.preventDefault(),n(Bd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),e?.close(),a("")};return b(Dd,{ref:u=>{e=u},position:"right",get button(){return(()=>{const u=kF();return A(u,b(z0,{})),u})()},onOpen:()=>t?.focus(),get children(){const u=$F(),d=u.firstChild,f=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const h=t;return typeof h=="function"?Wn(h,d):t=d,A(f,b(z0,{})),Ie(()=>d.value=o()),u}})},SF=()=>{let e;const{showAddColumn:t,showAbout:n}=$r(),{config:i}=Pe(),[o,a]=be(!1),[l,u]=be(!1),d=()=>{e?.focus(),e?.click()},f=()=>a(!0),h=()=>a(!1),g=()=>a(v=>!v);return Yu(()=>({commandType:"openPostForm",handler:()=>{f(),e!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=EF(),w=v.firstChild,$=w.firstChild,k=$.firstChild,_=$.nextSibling,C=_.nextSibling,I=C.firstChild,S=I.nextSibling,E=S.nextSibling,T=E.firstChild,O=w.nextSibling;return k.$$click=()=>g(),A(k,b(NH,{})),A($,b(CF,{}),null),I.$$click=()=>t(),A(I,b(Qm,{})),S.$$click=()=>u(j=>!j),A(S,b(MH,{})),E.$$click=()=>n(),A(O,b(Ov,{textAreaRef:j=>{e=j},onClose:h})),A(v,b(oe,{get when(){return l()},get children(){return b(xF,{onClose:()=>u(!1)})}}),null),Ie(j=>{const U=ad("images/rabbit_app_256.png"),te=!!(o()||i().keepOpenPostForm),W=!(o()||i().keepOpenPostForm);return U!==j._v$&&Ke(T,"src",j._v$=U),te!==j._v$2&&O.classList.toggle("static",j._v$2=te),W!==j._v$3&&O.classList.toggle("hidden",j._v$3=W),j},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};it(["click"]);var TF=Bn,AF=function(){return TF.Date.now()},IF=AF,RF=/\s/;function OF(e){for(var t=e.length;t--&&RF.test(e.charAt(t)););return t}var LF=OF,PF=LF,MF=/^\s+/;function BF(e){return e&&e.slice(0,PF(e)+1).replace(MF,"")}var jF=BF,NF=jF,F0=Qn,DF=Kl,q0=0/0,UF=/^[-+]0x[0-9a-f]+$/i,zF=/^0b[01]+$/i,HF=/^0o[0-7]+$/i,FF=parseInt;function qF(e){if(typeof e=="number")return e;if(DF(e))return q0;if(F0(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=F0(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=NF(e);var n=zF.test(e);return n||HF.test(e)?FF(e.slice(2),n?2:8):UF.test(e)?q0:+e}var WF=qF,ZF=Qn,Tu=IF,W0=WF,VF="Expected a function",KF=Math.max,GF=Math.min;function QF(e,t,n){var i,o,a,l,u,d,f=0,h=!1,g=!1,v=!0;if(typeof e!="function")throw new TypeError(VF);t=W0(t)||0,ZF(n)&&(h=!!n.leading,g="maxWait"in n,a=g?KF(W0(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v);function w(O){var j=i,U=o;return i=o=void 0,f=O,l=e.apply(U,j),l}function $(O){return f=O,u=setTimeout(C,t),h?w(O):l}function k(O){var j=O-d,U=O-f,te=t-j;return g?GF(te,a-U):te}function _(O){var j=O-d,U=O-f;return d===void 0||j>=t||j<0||g&&U>=a}function C(){var O=Tu();if(_(O))return I(O);u=setTimeout(C,k(O))}function I(O){return u=void 0,v&&i?w(O):(i=o=void 0,l)}function S(){u!==void 0&&clearTimeout(u),f=0,i=d=o=u=void 0}function E(){return u===void 0?l:I(Tu())}function T(){var O=Tu(),j=_(O);if(i=arguments,o=this,d=O,j){if(u===void 0)return $(d);if(g)return clearTimeout(u),u=setTimeout(C,t),w(d)}return u===void 0&&(u=setTimeout(C,t)),l}return T.cancel=S,T.flush=E,T}var YF=QF,XF=YF,JF=Qn,eq="Expected a function";function tq(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(eq);return JF(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),XF(e,t,{leading:i,maxWait:t,trailing:o})}var nq=tq;const rq=go(nq),iq=[{key:"n",command:{command:"openPostForm"}},{key:"h",command:{command:"moveToPrevColumn"}},{key:"j",command:{command:"moveToNextItem"}},{key:"k",command:{command:"moveToPrevItem"}},{key:"l",command:{command:"moveToNextColumn"}},{key:"1",command:{command:"moveToColumn",columnIndex:1}},{key:"2",command:{command:"moveToColumn",columnIndex:2}},{key:"3",command:{command:"moveToColumn",columnIndex:3}},{key:"4",command:{command:"moveToColumn",columnIndex:4}},{key:"5",command:{command:"moveToColumn",columnIndex:5}},{key:"6",command:{command:"moveToColumn",columnIndex:6}},{key:"7",command:{command:"moveToColumn",columnIndex:7}},{key:"8",command:{command:"moveToColumn",columnIndex:8}},{key:"9",command:{command:"moveToColumn",columnIndex:9}},{key:"0",command:{command:"moveToLastColumn"}},{key:"ArrowLeft",command:{command:"moveToPrevColumn"}},{key:"ArrowDown",command:{command:"moveToNextItem"}},{key:"ArrowUp",command:{command:"moveToPrevItem"}},{key:"ArrowRight",command:{command:"moveToNextColumn"}},{key:"f",command:{command:"like"}},{key:"t",command:{command:"repost"}},{key:"r",command:{command:"openReplyForm"}},{key:"?",command:{command:"openHelp"}},{key:"Enter",command:{command:"openItemDetail"}},{key:"Backspace",command:{command:"closeItemDetail"}}],sq=e=>{const t=new Map;return e.forEach(n=>{t.set(n.key,n)}),t},oq=({shortcuts:e=iq,onShortcut:t})=>{const n=sq(e);un(()=>{const i=rq(o=>{if(o.type!=="keydown"||o.ctrlKey||o.altKey||o.metaKey||o.target instanceof HTMLTextAreaElement||o.target instanceof HTMLInputElement)return;const a=n.get(o.key);a!=null&&t(a)},50);window.addEventListener("keydown",i),qn(()=>{window.removeEventListener("keydown",i)})})},aq=()=>{const e=So();oq({onShortcut:t=>{e(t.command).then(()=>console.debug(`shortcut key '${t.key}' was processed successfully`),n=>console.error(n))}})},lq=B('<div class="absolute inset-0 flex w-screen touch-manipulation flex-row overflow-hidden">'),pq=()=>{aq();const e=d5(),{persistStatus:t}=g5(),n=Pl(),{config:i,initializeColumns:o}=Pe(),a=Jn();return On(()=>{i().relayUrls.map(async l=>{try{(await n().ensureRelay(l)).on("notice",d=>{console.error(`NOTICE: ${l}: ${d}`)})}catch(u){console.error("ensureRelay failed",u)}})}),On(()=>{const l=a();l!=null&&o({pubkey:l})}),un(()=>{t().loggedIn||e("/hello")}),f5(l=>{console.error("uncaught error: ",l)}),(()=>{const l=lq();return A(l,b(SF,{}),null),A(l,b(EB,{}),null),A(l,b(LH,{}),null),l})()};export{pq as default};
//# sourceMappingURL=Home-2568784e.js.map
