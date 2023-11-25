import{v as A0,w as Sa,x as o4,y as kp,z as Cp,A as a4,B as l4,C as c4,D as Sp,E as u4,G as R0,H as d4,m as os,I as I0,J as Ta,n as _r,o as Jn,K as Us,L as tl,N as Tp,s as it,t as B,i as k,a as S,S as ve,c as Te,j as f4,k as yr,l as Ze,u as mt,O as h4,M as Ge,P as p4,b as Pn,d as yt,Q as g4,g as Vn,e as Me,R as v4,T as m4,F as zt,h as Ue,U as qu,V as y4,W as b4,f as wa}from"./index-3640ae1d.js";import{c as Gi,a as Fi,b as _4,d as w4,r as Wu}from"./usePersistStatus-2697c558.js";class x4 extends A0{constructor(e,n){super(),this.client=e,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Ap(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return uu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return uu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),Sa(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Rp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(e){const n=this.client.getQueryCache().build(this.client,e),i=this.createResult(n,e);return E4(this,i,e)&&(this.currentResult=i,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),i}getCurrentResult(){return this.currentResult}trackResult(e){const n={};return Object.keys(e).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),e[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...n}={}){return this.fetch({...n,meta:{refetchPage:e}})}fetchOptimistic(e){const n=this.client.defaultQueryOptions(e),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(e){var n;return this.executeFetch({...e,cancelRefetch:(n=e.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let n=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(o4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),kp||this.currentResult.isStale||!Cp(this.options.staleTime))return;const n=a4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(kp||this.options.enabled===!1||!Cp(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||l4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=e!==i,f=d?e.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=e;let{dataUpdatedAt:m,error:w,errorUpdatedAt:b,fetchStatus:x,status:$}=g,C=!1,I=!1,E;if(n._optimisticResults){const N=this.hasListeners(),Z=!N&&Ap(e,n),ne=N&&Rp(e,i,n,o);(Z||ne)&&(x=c4(e.options.networkMode)?"fetching":"paused",m||($="loading")),n._optimisticResults==="isRestoring"&&(x="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&$!=="error")E=p.data,m=p.dataUpdatedAt,$=p.status,C=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)E=this.selectResult;else try{this.selectFn=n.select,E=n.select(g.data),E=Sp(a?.data,E,n),this.selectResult=E,this.selectError=null}catch(N){this.selectError=N}else E=g.data;if(typeof n.placeholderData<"u"&&typeof E>"u"&&$==="loading"){let N;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)N=a.data;else if(N=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof N<"u")try{N=n.select(N),this.selectError=null}catch(Z){this.selectError=Z}typeof N<"u"&&($="success",E=Sp(a?.data,N,n),I=!0)}this.selectError&&(w=this.selectError,E=this.selectResult,b=Date.now(),$="error");const A=x==="fetching",L=$==="loading",R=$==="error";return{status:$,fetchStatus:x,isLoading:L,isSuccess:$==="success",isError:R,isInitialLoading:L&&A,data:E,dataUpdatedAt:m,error:w,errorUpdatedAt:b,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:A,isRefetching:A&&!L,isLoadingError:R&&g.dataUpdatedAt===0,isPaused:x==="paused",isPlaceholderData:I,isPreviousData:C,isRefetchError:R&&g.dataUpdatedAt!==0,isStale:Zu(e,n),refetch:this.refetch,remove:this.remove}}updateResult(e){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,Sa(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options,u=typeof l=="function"?l():l;if(u==="all"||!u&&!this.trackedProps.size)return!0;const d=new Set(u??this.trackedProps);return this.options.useErrorBoundary&&d.add("error"),Object.keys(this.currentResult).some(f=>{const p=f;return this.currentResult[p]!==n[p]&&d.has(p)})};e?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const n={};e.type==="success"?n.onSuccess=!e.manual:e.type==="error"&&!u4(e.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(e){R0.batch(()=>{if(e.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(e.onError){var l,u,d,f;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function $4(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Ap(t,e){return $4(t,e)||t.state.dataUpdatedAt>0&&uu(t,e,e.refetchOnMount)}function uu(t,e,n){if(e.enabled!==!1){const i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&Zu(t,e)}return!1}function Rp(t,e,n,i){return n.enabled!==!1&&(t!==e||i.enabled===!1)&&(!n.suspense||t.state.status!=="error")&&Zu(t,n)}function Zu(t,e){return t.isStaleByTime(e.staleTime)}function E4(t,e,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?e.isPlaceholderData:!Sa(t.getCurrentResult(),e)}class k4 extends A0{constructor(e,n){super(),this.client=e,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var n;const i=this.options;this.options=this.client.defaultMutationOptions(e),Sa(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const n={listeners:!0};e.type==="success"?n.onSuccess=!0:e.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:d4(),n={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(e){R0.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var l,u,d,f;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(f=this.mutateOptions).onSettled)==null||d.call(f,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function C4(t){return typeof t=="function"}function Ip(t,e,n){if(!C4(t)){const{queryKey:i,...o}=t;return i?{...o,queryKey:i()}:t}return typeof e=="function"?{...n,queryKey:t(),queryFn:e}:{...e,queryKey:t()}}function O0(t,e){return typeof t=="function"?t(...e):!!t}function S4(t,e){const n=os({context:t.context}),i=Symbol("empty"),o=n.defaultQueryOptions(t);o._optimisticResults="optimistic";const a=new e(n,o),[l,u]=Gi(a.getOptimisticResult(o)),[d,{refetch:f,mutate:p}]=I0(()=>new Promise(b=>{l.isFetching&&l.isLoading||(Fi(l.data)===i&&b(void 0),b(Fi(l.data)))}));Ta(()=>{p(()=>Fi(l.data)),f()});let g=[];const m=a.subscribe(b=>{g.push(()=>{Ta(()=>{const x={...Fi(b)};x.data===void 0&&(x.data=i),u(Fi(x)),p(()=>Fi(b.data)),f()})}),queueMicrotask(()=>{const x=g.pop();x&&x(),g=[]})});_r(()=>m()),Jn(()=>{a.setOptions(o,{listeners:!1})}),Us(()=>{const b=n.defaultQueryOptions(t);a.setOptions(b)}),Us(tl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&O0(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const w={get(b,x){return x==="data"?d():Reflect.get(b,x)}};return new Proxy(l,w)}function as(t,e,n){const[i,o]=Gi(Ip(t,e,n));return Us(()=>{const a=Ip(t,e,n);o(a)}),S4(i,x4)}function pi(t,e,n){const[i,o]=Gi(Tp(t,e,n)),a=os({context:i.context}),l=new k4(a,i),u=(g,m)=>{l.mutate(g,m).catch(T4)},[d,f]=Gi({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Us(()=>{const g=Tp(t,e,n);o(g),l.setOptions(g)}),Us(tl(()=>d.status,()=>{if(d.isError&&O0(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{f({...g,mutate:u,mutateAsync:g.mutate})});return _r(p),d}function T4(){}const A4=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),L0=(t={})=>(()=>{const e=A4();return it(e,t,!0,!0),e})();var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function R4(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var o=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return t[i]}})}),n}var I4=typeof xt=="object"&&xt&&xt.Object===Object&&xt,P0=I4,O4=P0,L4=typeof self=="object"&&self&&self.Object===Object&&self,P4=O4||L4||Function("return this")(),Xn=P4,M4=Xn,B4=M4.Symbol,ls=B4,Op=ls,M0=Object.prototype,j4=M0.hasOwnProperty,N4=M0.toString,Bs=Op?Op.toStringTag:void 0;function D4(t){var e=j4.call(t,Bs),n=t[Bs];try{t[Bs]=void 0;var i=!0}catch{}var o=N4.call(t);return i&&(e?t[Bs]=n:delete t[Bs]),o}var U4=D4,z4=Object.prototype,F4=z4.toString;function H4(t){return F4.call(t)}var q4=H4,Lp=ls,W4=U4,Z4=q4,K4="[object Null]",V4="[object Undefined]",Pp=Lp?Lp.toStringTag:void 0;function G4(t){return t==null?t===void 0?V4:K4:Pp&&Pp in Object(t)?W4(t):Z4(t)}var cs=G4;function Q4(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var xi=Q4,Y4=cs,J4=xi,X4="[object AsyncFunction]",e5="[object Function]",t5="[object GeneratorFunction]",n5="[object Proxy]";function r5(t){if(!J4(t))return!1;var e=Y4(t);return e==e5||e==t5||e==X4||e==n5}var B0=r5,i5=Xn,s5=i5["__core-js_shared__"],o5=s5,Wc=o5,Mp=function(){var t=/[^.]+$/.exec(Wc&&Wc.keys&&Wc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function a5(t){return!!Mp&&Mp in t}var l5=a5,c5=Function.prototype,u5=c5.toString;function d5(t){if(t!=null){try{return u5.call(t)}catch{}try{return t+""}catch{}}return""}var j0=d5,f5=B0,h5=l5,p5=xi,g5=j0,v5=/[\\^$.*+?()[\]{}|]/g,m5=/^\[object .+?Constructor\]$/,y5=Function.prototype,b5=Object.prototype,_5=y5.toString,w5=b5.hasOwnProperty,x5=RegExp("^"+_5.call(w5).replace(v5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $5(t){if(!p5(t)||h5(t))return!1;var e=f5(t)?x5:m5;return e.test(g5(t))}var E5=$5;function k5(t,e){return t?.[e]}var C5=k5,S5=E5,T5=C5;function A5(t,e){var n=T5(t,e);return S5(n)?n:void 0}var $i=A5,R5=$i,I5=R5(Object,"create"),rl=I5,Bp=rl;function O5(){this.__data__=Bp?Bp(null):{},this.size=0}var L5=O5;function P5(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var M5=P5,B5=rl,j5="__lodash_hash_undefined__",N5=Object.prototype,D5=N5.hasOwnProperty;function U5(t){var e=this.__data__;if(B5){var n=e[t];return n===j5?void 0:n}return D5.call(e,t)?e[t]:void 0}var z5=U5,F5=rl,H5=Object.prototype,q5=H5.hasOwnProperty;function W5(t){var e=this.__data__;return F5?e[t]!==void 0:q5.call(e,t)}var Z5=W5,K5=rl,V5="__lodash_hash_undefined__";function G5(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=K5&&e===void 0?V5:e,this}var Q5=G5,Y5=L5,J5=M5,X5=z5,e$=Z5,t$=Q5;function us(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}us.prototype.clear=Y5;us.prototype.delete=J5;us.prototype.get=X5;us.prototype.has=e$;us.prototype.set=t$;var n$=us;function r$(){this.__data__=[],this.size=0}var i$=r$;function s$(t,e){return t===e||t!==t&&e!==e}var Ku=s$,o$=Ku;function a$(t,e){for(var n=t.length;n--;)if(o$(t[n][0],e))return n;return-1}var il=a$,l$=il,c$=Array.prototype,u$=c$.splice;function d$(t){var e=this.__data__,n=l$(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():u$.call(e,n,1),--this.size,!0}var f$=d$,h$=il;function p$(t){var e=this.__data__,n=h$(e,t);return n<0?void 0:e[n][1]}var g$=p$,v$=il;function m$(t){return v$(this.__data__,t)>-1}var y$=m$,b$=il;function _$(t,e){var n=this.__data__,i=b$(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}var w$=_$,x$=i$,$$=f$,E$=g$,k$=y$,C$=w$;function ds(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ds.prototype.clear=x$;ds.prototype.delete=$$;ds.prototype.get=E$;ds.prototype.has=k$;ds.prototype.set=C$;var sl=ds,S$=$i,T$=Xn,A$=S$(T$,"Map"),Vu=A$,jp=n$,R$=sl,I$=Vu;function O$(){this.size=0,this.__data__={hash:new jp,map:new(I$||R$),string:new jp}}var L$=O$;function P$(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var M$=P$,B$=M$;function j$(t,e){var n=t.__data__;return B$(e)?n[typeof e=="string"?"string":"hash"]:n.map}var ol=j$,N$=ol;function D$(t){var e=N$(this,t).delete(t);return this.size-=e?1:0,e}var U$=D$,z$=ol;function F$(t){return z$(this,t).get(t)}var H$=F$,q$=ol;function W$(t){return q$(this,t).has(t)}var Z$=W$,K$=ol;function V$(t,e){var n=K$(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}var G$=V$,Q$=L$,Y$=U$,J$=H$,X$=Z$,e6=G$;function fs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}fs.prototype.clear=Q$;fs.prototype.delete=Y$;fs.prototype.get=J$;fs.prototype.has=X$;fs.prototype.set=e6;var Gu=fs,t6="__lodash_hash_undefined__";function n6(t){return this.__data__.set(t,t6),this}var r6=n6;function i6(t){return this.__data__.has(t)}var s6=i6,o6=Gu,a6=r6,l6=s6;function Aa(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new o6;++e<n;)this.add(t[e])}Aa.prototype.add=Aa.prototype.push=a6;Aa.prototype.has=l6;var N0=Aa;function c6(t,e,n,i){for(var o=t.length,a=n+(i?1:-1);i?a--:++a<o;)if(e(t[a],a,t))return a;return-1}var u6=c6;function d6(t){return t!==t}var f6=d6;function h6(t,e,n){for(var i=n-1,o=t.length;++i<o;)if(t[i]===e)return i;return-1}var p6=h6,g6=u6,v6=f6,m6=p6;function y6(t,e,n){return e===e?m6(t,e,n):g6(t,v6,n)}var b6=y6,_6=b6;function w6(t,e){var n=t==null?0:t.length;return!!n&&_6(t,e,0)>-1}var x6=w6;function $6(t,e,n){for(var i=-1,o=t==null?0:t.length;++i<o;)if(n(e,t[i]))return!0;return!1}var E6=$6;function k6(t,e){return t.has(e)}var D0=k6,C6=$i,S6=Xn,T6=C6(S6,"Set"),U0=T6;function A6(){}var R6=A6;function I6(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n}var Qu=I6,Zc=U0,O6=R6,L6=Qu,P6=1/0,M6=Zc&&1/L6(new Zc([,-0]))[1]==P6?function(t){return new Zc(t)}:O6,B6=M6,j6=N0,N6=x6,D6=E6,U6=D0,z6=B6,F6=Qu,H6=200;function q6(t,e,n){var i=-1,o=N6,a=t.length,l=!0,u=[],d=u;if(n)l=!1,o=D6;else if(a>=H6){var f=e?null:z6(t);if(f)return F6(f);l=!1,o=U6,d=new j6}else d=e?[]:u;e:for(;++i<a;){var p=t[i],g=e?e(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var m=d.length;m--;)if(d[m]===g)continue e;e&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var z0=q6,W6=z0;function Z6(t){return t&&t.length?W6(t):[]}var K6=Z6;const gi=nl(K6),V6=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),G6=t=>(()=>{const e=V6();return k(e,()=>t.children),e})();function du(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Q6(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function ci(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function Y6(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");du(t.outputLen),du(t.blockLen)}function J6(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function X6(t,e){ci(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const cn={number:du,bool:Q6,bytes:ci,hash:Y6,exists:J6,output:X6},Kc=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Yu=t=>t instanceof Uint8Array,vi=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),qn=(t,e)=>t<<32-e|t>>>e,e8=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!e8)throw new Error("Non little-endian hardware is not supported");const t8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function ln(t){if(!Yu(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=t8[t[n]];return e}function Qi(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function F0(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function zs(t){if(typeof t=="string"&&(t=F0(t)),!Yu(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function Zi(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!Yu(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}class H0{clone(){return this._cloneInto()}}const n8=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function r8(t,e){if(e!==void 0&&(typeof e!="object"||!n8(e)))throw new Error("Options should be object or undefined");return Object.assign(t,e)}function Ei(t){const e=i=>t().update(zs(i)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function so(t=32){if(Kc&&typeof Kc.getRandomValues=="function")return Kc.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}function i8(t,e,n,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;t.setUint32(e+d,l,i),t.setUint32(e+f,u,i)}class Ju extends H0{constructor(e,n,i,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=vi(this.buffer)}update(e){cn.exists(this);const{view:n,buffer:i,blockLen:o}=this;e=zs(e);const a=e.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=vi(e);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(e.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){cn.exists(this),cn.output(e,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;i8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=vi(e),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,p=this.get();if(f>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return e.length=o,e.pos=u,e.finished=a,e.destroyed=l,o%n&&e.buffer.set(i),e}}const s8=(t,e,n)=>t&e^~t&n,o8=(t,e,n)=>t&e^t&n^e&n,a8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Pr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Mr=new Uint32Array(64);class q0 extends Ju{constructor(){super(64,32,8,!1),this.A=Pr[0]|0,this.B=Pr[1]|0,this.C=Pr[2]|0,this.D=Pr[3]|0,this.E=Pr[4]|0,this.F=Pr[5]|0,this.G=Pr[6]|0,this.H=Pr[7]|0}get(){const{A:e,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[e,n,i,o,a,l,u,d]}set(e,n,i,o,a,l,u,d){this.A=e|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(e,n){for(let g=0;g<16;g++,n+=4)Mr[g]=e.getUint32(n,!1);for(let g=16;g<64;g++){const m=Mr[g-15],w=Mr[g-2],b=qn(m,7)^qn(m,18)^m>>>3,x=qn(w,17)^qn(w,19)^w>>>10;Mr[g]=x+Mr[g-7]+b+Mr[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:f,H:p}=this;for(let g=0;g<64;g++){const m=qn(u,6)^qn(u,11)^qn(u,25),w=p+m+s8(u,d,f)+a8[g]+Mr[g]|0,x=(qn(i,2)^qn(i,13)^qn(i,22))+o8(i,o,a)|0;p=f,f=d,d=u,u=l+w|0,l=a,a=o,o=i,i=w+x|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,f=f+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,f,p)}roundClean(){Mr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class l8 extends q0{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Gn=Ei(()=>new q0);Ei(()=>new l8);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const W0=BigInt(0),al=BigInt(1),c8=BigInt(2),ll=t=>t instanceof Uint8Array,u8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Yi(t){if(!ll(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=u8[t[n]];return e}function Z0(t){const e=t.toString(16);return e.length&1?`0${e}`:e}function Xu(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}function Ji(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function Yt(t){return Xu(Yi(t))}function ed(t){if(!ll(t))throw new Error("Uint8Array expected");return Xu(Yi(Uint8Array.from(t).reverse()))}function Ur(t,e){return Ji(t.toString(16).padStart(e*2,"0"))}function K0(t,e){return Ur(t,e).reverse()}function d8(t){return Ji(Z0(t))}function Ot(t,e,n){let i;if(typeof e=="string")try{i=Ji(e)}catch(a){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${a}`)}else if(ll(e))i=Uint8Array.from(e);else throw new Error(`${t} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${t} expected ${n} bytes, got ${o}`);return i}function yi(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!ll(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}function f8(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function h8(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function p8(t){let e;for(e=0;t>W0;t>>=al,e+=1);return e}function g8(t,e){return t>>BigInt(e)&al}const v8=(t,e,n)=>t|(n?al:W0)<<BigInt(e),td=t=>(c8<<BigInt(t-1))-al,Vc=t=>new Uint8Array(t),Np=t=>Uint8Array.from(t);function V0(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Vc(t),o=Vc(t),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=Vc())=>{o=u(Np([0]),g),i=u(),g.length!==0&&(o=u(Np([1]),g),i=u())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const m=[];for(;g<e;){i=u();const w=i.slice();m.push(w),g+=i.length}return yi(...m)};return(g,m)=>{l(),d(g);let w;for(;!(w=m(f()));)d();return l(),w}}const m8={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function oo(t,e,n={}){const i=(o,a,l)=>{const u=m8[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=t[o];if(!(l&&d===void 0)&&!u(d,t))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(e))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return t}const y8=Object.freeze(Object.defineProperty({__proto__:null,bitGet:g8,bitLen:p8,bitMask:td,bitSet:v8,bytesToHex:Yi,bytesToNumberBE:Yt,bytesToNumberLE:ed,concatBytes:yi,createHmacDrbg:V0,ensureBytes:Ot,equalBytes:f8,hexToBytes:Ji,hexToNumber:Xu,numberToBytesBE:Ur,numberToBytesLE:K0,numberToHexUnpadded:Z0,numberToVarBytesBE:d8,utf8ToBytes:h8,validateObject:oo},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),gt=BigInt(1),ui=BigInt(2),b8=BigInt(3),fu=BigInt(4),Dp=BigInt(5),Up=BigInt(8);BigInt(9);BigInt(16);function Et(t,e){const n=t%e;return n>=kt?n:e+n}function _8(t,e,n){if(n<=kt||e<kt)throw new Error("Expected power/modulo > 0");if(n===gt)return kt;let i=gt;for(;e>kt;)e&gt&&(i=i*t%n),t=t*t%n,e>>=gt;return i}function _n(t,e,n){let i=t;for(;e-- >kt;)i*=i,i%=n;return i}function hu(t,e){if(t===kt||e<=kt)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=Et(t,e),i=e,o=kt,a=gt;for(;n!==kt;){const u=i/n,d=i%n,f=o-a*u;i=n,n=d,o=a,a=f}if(i!==gt)throw new Error("invert: does not exist");return Et(o,e)}function w8(t){const e=(t-gt)/ui;let n,i,o;for(n=t-gt,i=0;n%ui===kt;n/=ui,i++);for(o=ui;o<t&&_8(o,e,t)!==t-gt;o++);if(i===1){const l=(t+gt)/fu;return function(d,f){const p=d.pow(f,l);if(!d.eql(d.sqr(p),f))throw new Error("Cannot find square root");return p}}const a=(n+gt)/ui;return function(u,d){if(u.pow(d,e)===u.neg(u.ONE))throw new Error("Cannot find square root");let f=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),m=u.pow(d,n);for(;!u.eql(m,u.ONE);){if(u.eql(m,u.ZERO))return u.ZERO;let w=1;for(let x=u.sqr(m);w<f&&!u.eql(x,u.ONE);w++)x=u.sqr(x);const b=u.pow(p,gt<<BigInt(f-w-1));p=u.sqr(b),g=u.mul(g,b),m=u.mul(m,p),f=w}return g}}function x8(t){if(t%fu===b8){const e=(t+gt)/fu;return function(i,o){const a=i.pow(o,e);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(t%Up===Dp){const e=(t-Dp)/Up;return function(i,o){const a=i.mul(o,ui),l=i.pow(a,e),u=i.mul(o,l),d=i.mul(i.mul(u,ui),l),f=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return w8(t)}const $8=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function E8(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=$8.reduce((i,o)=>(i[o]="function",i),e);return oo(t,n)}function k8(t,e,n){if(n<kt)throw new Error("Expected power > 0");if(n===kt)return t.ONE;if(n===gt)return e;let i=t.ONE,o=e;for(;n>kt;)n&gt&&(i=t.mul(i,o)),o=t.sqr(o),n>>=gt;return i}function C8(t,e){const n=new Array(e.length),i=e.reduce((a,l,u)=>t.is0(l)?a:(n[u]=a,t.mul(a,l)),t.ONE),o=t.inv(i);return e.reduceRight((a,l,u)=>t.is0(l)?a:(n[u]=t.mul(a,n[u]),t.mul(a,l)),o),n}function nd(t,e){const n=e!==void 0?e:t.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function S8(t,e,n=!1,i={}){if(t<=kt)throw new Error(`Expected Fp ORDER > 0, got ${t}`);const{nBitLength:o,nByteLength:a}=nd(t,e);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=x8(t),u=Object.freeze({ORDER:t,BITS:o,BYTES:a,MASK:td(o),ZERO:kt,ONE:gt,create:d=>Et(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return kt<=d&&d<t},is0:d=>d===kt,isOdd:d=>(d&gt)===gt,neg:d=>Et(-d,t),eql:(d,f)=>d===f,sqr:d=>Et(d*d,t),add:(d,f)=>Et(d+f,t),sub:(d,f)=>Et(d-f,t),mul:(d,f)=>Et(d*f,t),pow:(d,f)=>k8(u,d,f),div:(d,f)=>Et(d*hu(f,t),t),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>hu(d,t),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>C8(u,d),cmov:(d,f,p)=>p?f:d,toBytes:d=>n?K0(d,a):Ur(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?ed(d):Yt(d)}});return Object.freeze(u)}function T8(t,e,n=!1){t=Ot("privateHash",t);const i=t.length,o=nd(e).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?ed(t):Yt(t);return Et(a,e-gt)+gt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const A8=BigInt(0),Gc=BigInt(1);function R8(t,e){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(e/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=t.ZERO,u=o;for(;a>A8;)a&Gc&&(l=l.add(u)),u=u.double(),a>>=Gc;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let f=o,p=f;for(let g=0;g<l;g++){p=f,d.push(p);for(let m=1;m<u;m++)p=p.add(f),d.push(p);f=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let f=t.ZERO,p=t.BASE;const g=BigInt(2**o-1),m=2**o,w=BigInt(o);for(let b=0;b<u;b++){const x=b*d;let $=Number(l&g);l>>=w,$>d&&($-=m,l+=Gc);const C=x,I=x+Math.abs($)-1,E=b%2!==0,A=$<0;$===0?p=p.add(n(E,a[C])):f=f.add(n(A,a[I]))}return{p:f,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,u(f))),this.wNAF(d,f,l)}}}function G0(t){return E8(t.Fp),oo(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...nd(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function I8(t){const e=G0(t);oo(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=e;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:O8,hexToBytes:L8}=y8,fi={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){const{Err:e}=fi;if(t.length<2||t[0]!==2)throw new e("Invalid signature integer tag");const n=t[1],i=t.subarray(2,n+2);if(!n||i.length!==n)throw new e("Invalid signature integer: wrong length");if(i[0]&128)throw new e("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:O8(i),l:t.subarray(n+2)}},toSig(t){const{Err:e}=fi,n=typeof t=="string"?L8(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new e("Invalid signature tag");if(n[1]!==i-2)throw new e("Invalid signature: incorrect length");const{d:o,l:a}=fi._parseInt(n.subarray(2)),{d:l,l:u}=fi._parseInt(a);if(u.length)throw new e("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(t){const e=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const p=f.toString(16);return p.length&1?`0${p}`:p},i=e(n(t.s)),o=e(n(t.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},vr=BigInt(0),wn=BigInt(1);BigInt(2);const zp=BigInt(3);BigInt(4);function P8(t){const e=I8(t),{Fp:n}=e,i=e.toBytes||((b,x,$)=>{const C=x.toAffine();return yi(Uint8Array.from([4]),n.toBytes(C.x),n.toBytes(C.y))}),o=e.fromBytes||(b=>{const x=b.subarray(1),$=n.fromBytes(x.subarray(0,n.BYTES)),C=n.fromBytes(x.subarray(n.BYTES,2*n.BYTES));return{x:$,y:C}});function a(b){const{a:x,b:$}=e,C=n.sqr(b),I=n.mul(C,b);return n.add(n.add(I,n.mul(b,x)),$)}if(!n.eql(n.sqr(e.Gy),a(e.Gx)))throw new Error("bad generator point: equation left != right");function l(b){return typeof b=="bigint"&&vr<b&&b<e.n}function u(b){if(!l(b))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(b){const{allowedPrivateKeyLengths:x,nByteLength:$,wrapPrivateKey:C,n:I}=e;if(x&&typeof b!="bigint"){if(b instanceof Uint8Array&&(b=Yi(b)),typeof b!="string"||!x.includes(b.length))throw new Error("Invalid key");b=b.padStart($*2,"0")}let E;try{E=typeof b=="bigint"?b:Yt(Ot("private key",b,$))}catch{throw new Error(`private key must be ${$} bytes, hex or bigint, not ${typeof b}`)}return C&&(E=Et(E,I)),u(E),E}const f=new Map;function p(b){if(!(b instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(x,$,C){if(this.px=x,this.py=$,this.pz=C,x==null||!n.isValid(x))throw new Error("x required");if($==null||!n.isValid($))throw new Error("y required");if(C==null||!n.isValid(C))throw new Error("z required")}static fromAffine(x){const{x:$,y:C}=x||{};if(!x||!n.isValid($)||!n.isValid(C))throw new Error("invalid affine point");if(x instanceof g)throw new Error("projective point not allowed");const I=E=>n.eql(E,n.ZERO);return I($)&&I(C)?g.ZERO:new g($,C,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(x){const $=n.invertBatch(x.map(C=>C.pz));return x.map((C,I)=>C.toAffine($[I])).map(g.fromAffine)}static fromHex(x){const $=g.fromAffine(o(Ot("pointHex",x)));return $.assertValidity(),$}static fromPrivateKey(x){return g.BASE.multiply(d(x))}_setWindowSize(x){this._WINDOW_SIZE=x,f.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x,y:$}=this.toAffine();if(!n.isValid(x)||!n.isValid($))throw new Error("bad point: x or y not FE");const C=n.sqr($),I=a(x);if(!n.eql(C,I))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:x}=this.toAffine();if(n.isOdd)return!n.isOdd(x);throw new Error("Field doesn't support isOdd")}equals(x){p(x);const{px:$,py:C,pz:I}=this,{px:E,py:A,pz:L}=x,R=n.eql(n.mul($,L),n.mul(E,I)),U=n.eql(n.mul(C,L),n.mul(A,I));return R&&U}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:x,b:$}=e,C=n.mul($,zp),{px:I,py:E,pz:A}=this;let L=n.ZERO,R=n.ZERO,U=n.ZERO,N=n.mul(I,I),Z=n.mul(E,E),ne=n.mul(A,A),oe=n.mul(I,E);return oe=n.add(oe,oe),U=n.mul(I,A),U=n.add(U,U),L=n.mul(x,U),R=n.mul(C,ne),R=n.add(L,R),L=n.sub(Z,R),R=n.add(Z,R),R=n.mul(L,R),L=n.mul(oe,L),U=n.mul(C,U),ne=n.mul(x,ne),oe=n.sub(N,ne),oe=n.mul(x,oe),oe=n.add(oe,U),U=n.add(N,N),N=n.add(U,N),N=n.add(N,ne),N=n.mul(N,oe),R=n.add(R,N),ne=n.mul(E,A),ne=n.add(ne,ne),N=n.mul(ne,oe),L=n.sub(L,N),U=n.mul(ne,Z),U=n.add(U,U),U=n.add(U,U),new g(L,R,U)}add(x){p(x);const{px:$,py:C,pz:I}=this,{px:E,py:A,pz:L}=x;let R=n.ZERO,U=n.ZERO,N=n.ZERO;const Z=e.a,ne=n.mul(e.b,zp);let oe=n.mul($,E),se=n.mul(C,A),ae=n.mul(I,L),ee=n.add($,C),j=n.add(E,A);ee=n.mul(ee,j),j=n.add(oe,se),ee=n.sub(ee,j),j=n.add($,I);let K=n.add(E,L);return j=n.mul(j,K),K=n.add(oe,ae),j=n.sub(j,K),K=n.add(C,I),R=n.add(A,L),K=n.mul(K,R),R=n.add(se,ae),K=n.sub(K,R),N=n.mul(Z,j),R=n.mul(ne,ae),N=n.add(R,N),R=n.sub(se,N),N=n.add(se,N),U=n.mul(R,N),se=n.add(oe,oe),se=n.add(se,oe),ae=n.mul(Z,ae),j=n.mul(ne,j),se=n.add(se,ae),ae=n.sub(oe,ae),ae=n.mul(Z,ae),j=n.add(j,ae),oe=n.mul(se,j),U=n.add(U,oe),oe=n.mul(K,j),R=n.mul(ee,R),R=n.sub(R,oe),oe=n.mul(ee,se),N=n.mul(K,N),N=n.add(N,oe),new g(R,U,N)}subtract(x){return this.add(x.negate())}is0(){return this.equals(g.ZERO)}wNAF(x){return w.wNAFCached(this,f,x,$=>{const C=n.invertBatch($.map(I=>I.pz));return $.map((I,E)=>I.toAffine(C[E])).map(g.fromAffine)})}multiplyUnsafe(x){const $=g.ZERO;if(x===vr)return $;if(u(x),x===wn)return this;const{endo:C}=e;if(!C)return w.unsafeLadder(this,x);let{k1neg:I,k1:E,k2neg:A,k2:L}=C.splitScalar(x),R=$,U=$,N=this;for(;E>vr||L>vr;)E&wn&&(R=R.add(N)),L&wn&&(U=U.add(N)),N=N.double(),E>>=wn,L>>=wn;return I&&(R=R.negate()),A&&(U=U.negate()),U=new g(n.mul(U.px,C.beta),U.py,U.pz),R.add(U)}multiply(x){u(x);let $=x,C,I;const{endo:E}=e;if(E){const{k1neg:A,k1:L,k2neg:R,k2:U}=E.splitScalar($);let{p:N,f:Z}=this.wNAF(L),{p:ne,f:oe}=this.wNAF(U);N=w.constTimeNegate(A,N),ne=w.constTimeNegate(R,ne),ne=new g(n.mul(ne.px,E.beta),ne.py,ne.pz),C=N.add(ne),I=Z.add(oe)}else{const{p:A,f:L}=this.wNAF($);C=A,I=L}return g.normalizeZ([C,I])[0]}multiplyAndAddUnsafe(x,$,C){const I=g.BASE,E=(L,R)=>R===vr||R===wn||!L.equals(I)?L.multiplyUnsafe(R):L.multiply(R),A=E(this,$).add(E(x,C));return A.is0()?void 0:A}toAffine(x){const{px:$,py:C,pz:I}=this,E=this.is0();x==null&&(x=E?n.ONE:n.inv(I));const A=n.mul($,x),L=n.mul(C,x),R=n.mul(I,x);if(E)return{x:n.ZERO,y:n.ZERO};if(!n.eql(R,n.ONE))throw new Error("invZ was invalid");return{x:A,y:L}}isTorsionFree(){const{h:x,isTorsionFree:$}=e;if(x===wn)return!0;if($)return $(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:x,clearCofactor:$}=e;return x===wn?this:$?$(g,this):this.multiplyUnsafe(e.h)}toRawBytes(x=!0){return this.assertValidity(),i(g,this,x)}toHex(x=!0){return Yi(this.toRawBytes(x))}}g.BASE=new g(e.Gx,e.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const m=e.nBitLength,w=R8(g,e.endo?Math.ceil(m/2):m);return{CURVE:e,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function M8(t){const e=G0(t);return oo(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function B8(t){const e=M8(t),{Fp:n,n:i}=e,o=n.BYTES+1,a=2*n.BYTES+1;function l(j){return vr<j&&j<n.ORDER}function u(j){return Et(j,i)}function d(j){return hu(j,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:m}=P8({...e,toBytes(j,K,te){const le=K.toAffine(),Q=n.toBytes(le.x),ye=yi;return te?ye(Uint8Array.from([K.hasEvenY()?2:3]),Q):ye(Uint8Array.from([4]),Q,n.toBytes(le.y))},fromBytes(j){const K=j.length,te=j[0],le=j.subarray(1);if(K===o&&(te===2||te===3)){const Q=Yt(le);if(!l(Q))throw new Error("Point is not on curve");const ye=g(Q);let be=n.sqrt(ye);const Ee=(be&wn)===wn;return(te&1)===1!==Ee&&(be=n.neg(be)),{x:Q,y:be}}else if(K===a&&te===4){const Q=n.fromBytes(le.subarray(0,n.BYTES)),ye=n.fromBytes(le.subarray(n.BYTES,2*n.BYTES));return{x:Q,y:ye}}else throw new Error(`Point of length ${K} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),w=j=>Yi(Ur(j,e.nByteLength));function b(j){const K=i>>wn;return j>K}function x(j){return b(j)?u(-j):j}const $=(j,K,te)=>Yt(j.slice(K,te));class C{constructor(K,te,le){this.r=K,this.s=te,this.recovery=le,this.assertValidity()}static fromCompact(K){const te=e.nByteLength;return K=Ot("compactSignature",K,te*2),new C($(K,0,te),$(K,te,2*te))}static fromDER(K){const{r:te,s:le}=fi.toSig(Ot("DER",K));return new C(te,le)}assertValidity(){if(!m(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!m(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(K){return new C(this.r,this.s,K)}recoverPublicKey(K){const{r:te,s:le,recovery:Q}=this,ye=U(Ot("msgHash",K));if(Q==null||![0,1,2,3].includes(Q))throw new Error("recovery id invalid");const be=Q===2||Q===3?te+e.n:te;if(be>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const Ee=Q&1?"03":"02",ie=f.fromHex(Ee+w(be)),X=d(be),ce=u(-ye*X),z=u(le*X),J=f.BASE.multiplyAndAddUnsafe(ie,ce,z);if(!J)throw new Error("point at infinify");return J.assertValidity(),J}hasHighS(){return b(this.s)}normalizeS(){return this.hasHighS()?new C(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return Ji(this.toDERHex())}toDERHex(){return fi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Ji(this.toCompactHex())}toCompactHex(){return w(this.r)+w(this.s)}}const I={isValidPrivateKey(j){try{return p(j),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const j=e.randomBytes(n.BYTES+8),K=T8(j,i);return Ur(K,e.nByteLength)},precompute(j=8,K=f.BASE){return K._setWindowSize(j),K.multiply(BigInt(3)),K}};function E(j,K=!0){return f.fromPrivateKey(j).toRawBytes(K)}function A(j){const K=j instanceof Uint8Array,te=typeof j=="string",le=(K||te)&&j.length;return K?le===o||le===a:te?le===2*o||le===2*a:j instanceof f}function L(j,K,te=!0){if(A(j))throw new Error("first arg must be private key");if(!A(K))throw new Error("second arg must be public key");return f.fromHex(K).multiply(p(j)).toRawBytes(te)}const R=e.bits2int||function(j){const K=Yt(j),te=j.length*8-e.nBitLength;return te>0?K>>BigInt(te):K},U=e.bits2int_modN||function(j){return u(R(j))},N=td(e.nBitLength);function Z(j){if(typeof j!="bigint")throw new Error("bigint expected");if(!(vr<=j&&j<N))throw new Error(`bigint expected < 2^${e.nBitLength}`);return Ur(j,e.nByteLength)}function ne(j,K,te=oe){if(["recovered","canonical"].some(de=>de in te))throw new Error("sign() legacy options not supported");const{hash:le,randomBytes:Q}=e;let{lowS:ye,prehash:be,extraEntropy:Ee}=te;ye==null&&(ye=!0),j=Ot("msgHash",j),be&&(j=Ot("prehashed msgHash",le(j)));const ie=U(j),X=p(K),ce=[Z(X),Z(ie)];if(Ee!=null){const de=Ee===!0?Q(n.BYTES):Ee;ce.push(Ot("extraEntropy",de,n.BYTES))}const z=yi(...ce),J=ie;function H(de){const ze=R(de);if(!m(ze))return;const lt=d(ze),Je=f.BASE.multiply(ze).toAffine(),Y=u(Je.x);if(Y===vr)return;const _e=u(lt*u(J+Y*X));if(_e===vr)return;let Xe=(Je.x===Y?0:2)|Number(Je.y&wn),Jt=_e;return ye&&b(_e)&&(Jt=x(_e),Xe^=1),new C(Y,Jt,Xe)}return{seed:z,k2sig:H}}const oe={lowS:e.lowS,prehash:!1},se={lowS:e.lowS,prehash:!1};function ae(j,K,te=oe){const{seed:le,k2sig:Q}=ne(j,K,te),ye=e;return V0(ye.hash.outputLen,ye.nByteLength,ye.hmac)(le,Q)}f.BASE._setWindowSize(8);function ee(j,K,te,le=se){const Q=j;if(K=Ot("msgHash",K),te=Ot("publicKey",te),"strict"in le)throw new Error("options.strict was renamed to lowS");const{lowS:ye,prehash:be}=le;let Ee,ie;try{if(typeof Q=="string"||Q instanceof Uint8Array)try{Ee=C.fromDER(Q)}catch(Je){if(!(Je instanceof fi.Err))throw Je;Ee=C.fromCompact(Q)}else if(typeof Q=="object"&&typeof Q.r=="bigint"&&typeof Q.s=="bigint"){const{r:Je,s:Y}=Q;Ee=new C(Je,Y)}else throw new Error("PARSE");ie=f.fromHex(te)}catch(Je){if(Je.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(ye&&Ee.hasHighS())return!1;be&&(K=e.hash(K));const{r:X,s:ce}=Ee,z=U(K),J=d(ce),H=u(z*J),de=u(X*J),ze=f.BASE.multiplyAndAddUnsafe(ie,H,de)?.toAffine();return ze?u(ze.x)===X:!1}return{CURVE:e,getPublicKey:E,getSharedSecret:L,sign:ae,verify:ee,ProjectivePoint:f,Signature:C,utils:I}}class Q0 extends H0{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,cn.hash(e);const i=zs(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?e.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=e.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(e){return cn.exists(this),this.iHash.update(e),this}digestInto(e){cn.exists(this),cn.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return e=e,e.finished=o,e.destroyed=a,e.blockLen=l,e.outputLen=u,e.oHash=n._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const Fs=(t,e,n)=>new Q0(t,e).update(n).digest();Fs.create=(t,e)=>new Q0(t,e);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function j8(t){return{hash:t,hmac:(e,...n)=>Fs(t,e,Zi(...n)),randomBytes:so}}function N8(t,e){const n=i=>B8({...t,...j8(i)});return Object.freeze({...n(e),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const cl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Ra=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),Y0=BigInt(1),Ia=BigInt(2),Fp=(t,e)=>(t+e/Ia)/e;function J0(t){const e=cl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),f=t*t*t%e,p=f*f*t%e,g=_n(p,n,e)*p%e,m=_n(g,n,e)*p%e,w=_n(m,Ia,e)*f%e,b=_n(w,o,e)*w%e,x=_n(b,a,e)*b%e,$=_n(x,u,e)*x%e,C=_n($,d,e)*$%e,I=_n(C,u,e)*x%e,E=_n(I,n,e)*p%e,A=_n(E,l,e)*b%e,L=_n(A,i,e)*f%e,R=_n(L,Ia,e);if(!pu.eql(pu.sqr(R),t))throw new Error("Cannot find square root");return R}const pu=S8(cl,void 0,void 0,{sqrt:J0}),Ut=N8({a:BigInt(0),b:BigInt(7),Fp:pu,n:Ra,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=Ra,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-Y0*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Fp(a*t,e),d=Fp(-i*t,e);let f=Et(t-u*n-d*o,e),p=Et(-u*i-d*a,e);const g=f>l,m=p>l;if(g&&(f=e-f),m&&(p=e-p),f>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:g,k1:f,k2neg:m,k2:p}}}},Gn),ul=BigInt(0),X0=t=>typeof t=="bigint"&&ul<t&&t<cl,D8=t=>typeof t=="bigint"&&ul<t&&t<Ra,Hp={};function Oa(t,...e){let n=Hp[t];if(n===void 0){const i=Gn(Uint8Array.from(t,o=>o.charCodeAt(0)));n=yi(i,i),Hp[t]=n}return Gn(yi(n,...e))}const rd=t=>t.toRawBytes(!0).slice(1),gu=t=>Ur(t,32),Qc=t=>Et(t,cl),Hs=t=>Et(t,Ra),id=Ut.ProjectivePoint,U8=(t,e,n)=>id.BASE.multiplyAndAddUnsafe(t,e,n);function vu(t){let e=Ut.utils.normPrivateKeyToScalar(t),n=id.fromPrivateKey(e);return{scalar:n.hasEvenY()?e:Hs(-e),bytes:rd(n)}}function e1(t){if(!X0(t))throw new Error("bad x: need 0 < x < p");const e=Qc(t*t),n=Qc(e*t+BigInt(7));let i=J0(n);i%Ia!==ul&&(i=Qc(-i));const o=new id(t,i,Y0);return o.assertValidity(),o}function t1(...t){return Hs(Yt(Oa("BIP0340/challenge",...t)))}function z8(t){return vu(t).bytes}function F8(t,e,n=so(32)){const i=Ot("message",t),{bytes:o,scalar:a}=vu(e),l=Ot("auxRand",n,32),u=gu(a^Yt(Oa("BIP0340/aux",l))),d=Oa("BIP0340/nonce",u,o,i),f=Hs(Yt(d));if(f===ul)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=vu(f),m=t1(p,o,i),w=new Uint8Array(64);if(w.set(p,0),w.set(gu(Hs(g+m*a)),32),!n1(w,i,o))throw new Error("sign: Invalid signature produced");return w}function n1(t,e,n){const i=Ot("signature",t,64),o=Ot("message",e),a=Ot("publicKey",n,32);try{const l=e1(Yt(a)),u=Yt(i.subarray(0,32));if(!X0(u))return!1;const d=Yt(i.subarray(32,64));if(!D8(d))return!1;const f=t1(gu(u),rd(l),o),p=U8(l,d,Hs(-f));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const ao=(()=>({getPublicKey:z8,sign:F8,verify:n1,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:e1,pointToBytes:rd,numberToBytesBE:Ur,bytesToNumberBE:Yt,taggedHash:Oa,mod:Et}}))();/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function ki(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function Dn(...t){const e=(o,a)=>l=>o(a(l)),n=Array.from(t).reverse().reduce((o,a)=>o?e(o,a.encode):a.encode,void 0),i=t.reduce((o,a)=>o?e(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function er(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(ki(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=t.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return i})}}}function tr(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function lo(t,e="="){if(ki(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===e;i--)if(!((i-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function r1(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function qp(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let i=0;const o=[],a=Array.from(t);for(a.forEach(l=>{if(ki(l),l<0||l>=e)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const f=a[d],p=e*l+f;if(!Number.isSafeInteger(p)||e*l/e!==l||p-f!==e*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<t.length-1&&t[l]===0;l++)o.push(0);return o.reverse()}const i1=(t,e)=>e?i1(e,t%e):t,La=(t,e)=>t+(e-i1(t,e));function mu(t,e,n,i){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(La(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${La(e,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of t){if(ki(d),d>=2**e)throw new Error(`convertRadix2: invalid data word=${d} from=${e}`);if(o=o<<e|d,a+e>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${e}`);for(a+=e;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=e)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function s1(t){return ki(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return qp(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(qp(e,t,2**8))}}}function $r(t,e=!1){if(ki(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(La(8,t)>32||La(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return mu(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(mu(n,t,8,e))}}}function Wp(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function o1(t,e){if(ki(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=e(n).slice(0,t),o=new Uint8Array(n.length+t);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-t),o=e(i).slice(0,t),a=n.slice(-t);for(let l=0;l<t;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const ca={alphabet:er,chain:Dn,checksum:o1,radix:s1,radix2:$r,join:tr,padding:lo},H8=Dn($r(4),er("0123456789ABCDEF"),tr("")),q8=Dn($r(5),er("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),lo(5),tr(""));Dn($r(5),er("0123456789ABCDEFGHIJKLMNOPQRSTUV"),lo(5),tr(""));Dn($r(5),er("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),tr(""),r1(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));const wr=Dn($r(6),er("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),lo(6),tr("")),W8=Dn($r(6),er("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),lo(6),tr("")),sd=t=>Dn(s1(58),er(t),tr("")),Pa=sd("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");sd("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");sd("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");const Zp=[0,2,3,5,6,7,9,10,11],Z8={encode(t){let e="";for(let n=0;n<t.length;n+=8){const i=t.subarray(n,n+8);e+=Pa.encode(i).padStart(Zp[i.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){const i=t.slice(n,n+11),o=Zp.indexOf(i.length),a=Pa.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(e)}},K8=t=>Dn(o1(4,e=>t(t(e))),Pa),yu=Dn(er("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),tr("")),Kp=[996825010,642813549,513874426,1027748829,705979059];function js(t){const e=t>>25;let n=(t&33554431)<<5;for(let i=0;i<Kp.length;i++)(e>>i&1)===1&&(n^=Kp[i]);return n}function Vp(t,e,n=1){const i=t.length;let o=1;for(let a=0;a<i;a++){const l=t.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${t})`);o=js(o)^l>>5}o=js(o);for(let a=0;a<i;a++)o=js(o)^t.charCodeAt(a)&31;for(let a of e)o=js(o)^a;for(let a=0;a<6;a++)o=js(o);return o^=n,yu.encode(mu([o%2**30],30,5,!1))}function a1(t){const e=t==="bech32"?1:734539939,n=$r(5),i=n.decode,o=n.encode,a=Wp(i);function l(p,g,m=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const w=p.length+7+g.length;if(m!==!1&&w>m)throw new TypeError(`Length ${w} exceeds limit ${m}`);return p=p.toLowerCase(),`${p}1${yu.encode(g)}${Vp(p,g,e)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const m=p.toLowerCase();if(p!==m&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=m;const w=p.lastIndexOf("1");if(w===0||w===-1)throw new Error('Letter "1" must be present between prefix and data only');const b=p.slice(0,w),x=p.slice(w+1);if(x.length<6)throw new Error("Data must be at least 6 characters long");const $=yu.decode(x).slice(0,-6),C=Vp(b,$,e);if(!x.endsWith(C))throw new Error(`Invalid checksum in ${p}: expected "${C}"`);return{prefix:b,words:$}}const d=Wp(u);function f(p){const{prefix:g,words:m}=u(p,!1);return{prefix:g,words:m,bytes:i(m)}}return{encode:l,decode:u,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const Xi=a1("bech32");a1("bech32m");const V8={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},G8=Dn($r(4),er("0123456789abcdef"),tr(""),r1(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),Q8={utf8:V8,hex:G8,base16:H8,base32:q8,base64:wr,base64url:W8,base58:Pa,base58xmr:Z8};`${Object.keys(Q8).join(", ")}`;const l1=`abandon
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
`);function Y8(t,e,n,i){cn.hash(t);const o=r8({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(cn.number(a),cn.number(l),cn.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=zs(e),f=zs(n),p=new Uint8Array(l),g=Fs.create(t,d),m=g._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:m}}function J8(t,e,n,i,o){return t.destroy(),e.destroy(),i&&i.destroy(),o.fill(0),n}function X8(t,e,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=Y8(t,e,n,i);let f;const p=new Uint8Array(4),g=vi(p),m=new Uint8Array(u.outputLen);for(let w=1,b=0;b<a;w++,b+=u.outputLen){const x=l.subarray(b,b+u.outputLen);g.setInt32(0,w,!1),(f=d._cloneInto(f)).update(p).digestInto(m),x.set(m.subarray(0,x.length));for(let $=1;$<o;$++){u._cloneInto(f).update(m).digestInto(m);for(let C=0;C<x.length;C++)x[C]^=m[C]}}return J8(u,d,l,f,m)}const ua=BigInt(2**32-1),bu=BigInt(32);function c1(t,e=!1){return e?{h:Number(t&ua),l:Number(t>>bu&ua)}:{h:Number(t>>bu&ua)|0,l:Number(t&ua)|0}}function e7(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:a,l}=c1(t[o],e);[n[o],i[o]]=[a,l]}return[n,i]}const t7=(t,e)=>BigInt(t>>>0)<<bu|BigInt(e>>>0),n7=(t,e,n)=>t>>>n,r7=(t,e,n)=>t<<32-n|e>>>n,i7=(t,e,n)=>t>>>n|e<<32-n,s7=(t,e,n)=>t<<32-n|e>>>n,o7=(t,e,n)=>t<<64-n|e>>>n-32,a7=(t,e,n)=>t>>>n-32|e<<64-n,l7=(t,e)=>e,c7=(t,e)=>t,u7=(t,e,n)=>t<<n|e>>>32-n,d7=(t,e,n)=>e<<n|t>>>32-n,f7=(t,e,n)=>e<<n-32|t>>>64-n,h7=(t,e,n)=>t<<n-32|e>>>64-n;function p7(t,e,n,i){const o=(e>>>0)+(i>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const g7=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),v7=(t,e,n,i)=>e+n+i+(t/2**32|0)|0,m7=(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0),y7=(t,e,n,i,o)=>e+n+i+o+(t/2**32|0)|0,b7=(t,e,n,i,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(o>>>0),_7=(t,e,n,i,o,a)=>e+n+i+o+a+(t/2**32|0)|0,je={fromBig:c1,split:e7,toBig:t7,shrSH:n7,shrSL:r7,rotrSH:i7,rotrSL:s7,rotrBH:o7,rotrBL:a7,rotr32H:l7,rotr32L:c7,rotlSH:u7,rotlSL:d7,rotlBH:f7,rotlBL:h7,add:p7,add3L:g7,add3H:v7,add4L:m7,add4H:y7,add5H:_7,add5L:b7},[w7,x7]=je.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Br=new Uint32Array(80),jr=new Uint32Array(80);class dl extends Ju{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:f,El:p,Fh:g,Fl:m,Gh:w,Gl:b,Hh:x,Hl:$}=this;return[e,n,i,o,a,l,u,d,f,p,g,m,w,b,x,$]}set(e,n,i,o,a,l,u,d,f,p,g,m,w,b,x,$){this.Ah=e|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=f|0,this.El=p|0,this.Fh=g|0,this.Fl=m|0,this.Gh=w|0,this.Gl=b|0,this.Hh=x|0,this.Hl=$|0}process(e,n){for(let E=0;E<16;E++,n+=4)Br[E]=e.getUint32(n),jr[E]=e.getUint32(n+=4);for(let E=16;E<80;E++){const A=Br[E-15]|0,L=jr[E-15]|0,R=je.rotrSH(A,L,1)^je.rotrSH(A,L,8)^je.shrSH(A,L,7),U=je.rotrSL(A,L,1)^je.rotrSL(A,L,8)^je.shrSL(A,L,7),N=Br[E-2]|0,Z=jr[E-2]|0,ne=je.rotrSH(N,Z,19)^je.rotrBH(N,Z,61)^je.shrSH(N,Z,6),oe=je.rotrSL(N,Z,19)^je.rotrBL(N,Z,61)^je.shrSL(N,Z,6),se=je.add4L(U,oe,jr[E-7],jr[E-16]),ae=je.add4H(se,R,ne,Br[E-7],Br[E-16]);Br[E]=ae|0,jr[E]=se|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:f,Dl:p,Eh:g,El:m,Fh:w,Fl:b,Gh:x,Gl:$,Hh:C,Hl:I}=this;for(let E=0;E<80;E++){const A=je.rotrSH(g,m,14)^je.rotrSH(g,m,18)^je.rotrBH(g,m,41),L=je.rotrSL(g,m,14)^je.rotrSL(g,m,18)^je.rotrBL(g,m,41),R=g&w^~g&x,U=m&b^~m&$,N=je.add5L(I,L,U,x7[E],jr[E]),Z=je.add5H(N,C,A,R,w7[E],Br[E]),ne=N|0,oe=je.rotrSH(i,o,28)^je.rotrBH(i,o,34)^je.rotrBH(i,o,39),se=je.rotrSL(i,o,28)^je.rotrBL(i,o,34)^je.rotrBL(i,o,39),ae=i&a^i&u^a&u,ee=o&l^o&d^l&d;C=x|0,I=$|0,x=w|0,$=b|0,w=g|0,b=m|0,{h:g,l:m}=je.add(f|0,p|0,Z|0,ne|0),f=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const j=je.add3L(ne,se,ee);i=je.add3H(j,Z,oe,ae),o=j|0}({h:i,l:o}=je.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=je.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=je.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:f,l:p}=je.add(this.Dh|0,this.Dl|0,f|0,p|0),{h:g,l:m}=je.add(this.Eh|0,this.El|0,g|0,m|0),{h:w,l:b}=je.add(this.Fh|0,this.Fl|0,w|0,b|0),{h:x,l:$}=je.add(this.Gh|0,this.Gl|0,x|0,$|0),{h:C,l:I}=je.add(this.Hh|0,this.Hl|0,C|0,I|0),this.set(i,o,a,l,u,d,f,p,g,m,w,b,x,$,C,I)}roundClean(){Br.fill(0),jr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class $7 extends dl{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class E7 extends dl{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class k7 extends dl{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const _u=Ei(()=>new dl);Ei(()=>new $7);Ei(()=>new E7);Ei(()=>new k7);const C7=t=>t[0]==="あいこくしん";function u1(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function d1(t){const e=u1(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function f1(t){cn.bytes(t,16,20,24,28,32)}function S7(t,e=128){if(cn.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return R7(so(e/8),t)}const T7=t=>{const e=8-t.length/4;return new Uint8Array([Gn(t)[0]>>e<<e])};function h1(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),ca.chain(ca.checksum(1,T7),ca.radix2(11,!0),ca.alphabet(t))}function A7(t,e){const{words:n}=d1(t),i=h1(e).decode(n);return f1(i),i}function R7(t,e){return f1(t),h1(e).encode(t).join(C7(e)?"　":" ")}function I7(t,e){try{A7(t,e)}catch{return!1}return!0}const O7=t=>u1(`mnemonic${t}`);function L7(t,e=""){return X8(_u,d1(t).nfkd,O7(e),{c:2048,dkLen:64})}const P7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),p1=Uint8Array.from({length:16},(t,e)=>e),M7=p1.map(t=>(9*t+5)%16);let od=[p1],ad=[M7];for(let t=0;t<4;t++)for(let e of[od,ad])e.push(e[t].map(n=>P7[n]));const g1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),B7=od.map((t,e)=>t.map(n=>g1[e][n])),j7=ad.map((t,e)=>t.map(n=>g1[e][n])),N7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),D7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),da=(t,e)=>t<<e|t>>>32-e;function Gp(t,e,n,i){return t===0?e^n^i:t===1?e&n|~e&i:t===2?(e|~n)^i:t===3?e&i|n&~i:e^(n|~i)}const fa=new Uint32Array(16);class U7 extends Ju{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:i,h3:o,h4:a}=this;return[e,n,i,o,a]}set(e,n,i,o,a){this.h0=e|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(e,n){for(let w=0;w<16;w++,n+=4)fa[w]=e.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,f=this.h3|0,p=f,g=this.h4|0,m=g;for(let w=0;w<5;w++){const b=4-w,x=N7[w],$=D7[w],C=od[w],I=ad[w],E=B7[w],A=j7[w];for(let L=0;L<16;L++){const R=da(i+Gp(w,a,u,f)+fa[C[L]]+x,E[L])+g|0;i=g,g=f,f=da(u,10)|0,u=a,a=R}for(let L=0;L<16;L++){const R=da(o+Gp(b,l,d,p)+fa[I[L]]+$,A[L])+m|0;o=m,m=p,p=da(d,10)|0,d=l,l=R}}this.set(this.h1+u+p|0,this.h2+f+m|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){fa.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const z7=Ei(()=>new U7),ha=Ut.ProjectivePoint,Yc=K8(Gn);function Qp(t){return BigInt(`0x${ln(t)}`)}function F7(t){return Qi(t.toString(16).padStart(64,"0"))}const H7=F0("Bitcoin seed"),Jc={private:76066276,public:76067358},Xc=2147483648,q7=t=>z7(Gn(t)),W7=t=>vi(t).getUint32(0,!1),pa=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);const e=new Uint8Array(4);return vi(e).setUint32(0,t,!1),e};class di{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return W7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return Yc.encode(this.serialize(this.versions.private,Zi(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return Yc.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=Jc){if(ci(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=Fs(_u,H7,e);return new di({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(e,n=Jc){const i=Yc.decode(e),o=vi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new di({...l,privateKey:u.slice(1)}):new di({...l,publicKey:u})}static fromJSON(e){return di.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||Jc,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!Ut.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:Qp(e.privateKey),this.privKeyBytes=F7(this.privKey),this.pubKey=Ut.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=ha.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=q7(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=Xc)throw new Error("Invalid index");a[2]==="'"&&(l+=Xc),i=i.deriveChild(l)}return i}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=pa(e);if(e>=Xc){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=Zi(new Uint8Array([0]),u,n)}else n=Zi(this.pubKey,n);const i=Fs(_u,this.chainCode,n),o=Qp(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const u=Et(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=ha.fromHex(this.pubKey).add(ha.fromPrivateKey(o));if(u.equals(ha.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new di(l)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return ci(e,32),Ut.sign(e,this.privKey).toCompactRawBytes()}verify(e,n){if(ci(e,32),ci(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return ci(n,33),Zi(pa(e),new Uint8Array([this.depth]),pa(this.parentFingerprint),pa(this.index),this.chainCode,n)}}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */const Z7=t=>t instanceof Uint8Array,Wn=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),K7=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!K7)throw new Error("Non little-endian hardware is not supported");function ld(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function wu(t){if(typeof t=="string"&&(t=ld(t)),!Z7(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}const V7=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function G7(t,e){if(e!==void 0&&(typeof e!="object"||!V7(e)))throw new Error("options must be object or undefined");return Object.assign(t,e)}function Q7(t,e){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");if(typeof e=="number"&&t.length!==e)throw new Error(`Uint8Array length ${e} expected`)}function xu(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function Y7(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function v1(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function J7(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("hash must be wrapped by utils.wrapConstructor");xu(t.outputLen),xu(t.blockLen)}function X7(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function eE(t,e){v1(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const an={number:xu,bool:Y7,bytes:v1,hash:J7,exists:X7,output:eE},Rt=(t,e)=>t[e++]&255|(t[e++]&255)<<8;class tE{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=wu(e),Q7(e,32);const n=Rt(e,0),i=Rt(e,2),o=Rt(e,4),a=Rt(e,6),l=Rt(e,8),u=Rt(e,10),d=Rt(e,12),f=Rt(e,14);this.r[0]=n&8191,this.r[1]=(n>>>13|i<<3)&8191,this.r[2]=(i>>>10|o<<6)&7939,this.r[3]=(o>>>7|a<<9)&8191,this.r[4]=(a>>>4|l<<12)&255,this.r[5]=l>>>1&8190,this.r[6]=(l>>>14|u<<2)&8191,this.r[7]=(u>>>11|d<<5)&8065,this.r[8]=(d>>>8|f<<8)&8191,this.r[9]=f>>>5&127;for(let p=0;p<8;p++)this.pad[p]=Rt(e,16+2*p)}process(e,n,i=!1){const o=i?0:2048,{h:a,r:l}=this,u=l[0],d=l[1],f=l[2],p=l[3],g=l[4],m=l[5],w=l[6],b=l[7],x=l[8],$=l[9],C=Rt(e,n+0),I=Rt(e,n+2),E=Rt(e,n+4),A=Rt(e,n+6),L=Rt(e,n+8),R=Rt(e,n+10),U=Rt(e,n+12),N=Rt(e,n+14);let Z=a[0]+(C&8191),ne=a[1]+((C>>>13|I<<3)&8191),oe=a[2]+((I>>>10|E<<6)&8191),se=a[3]+((E>>>7|A<<9)&8191),ae=a[4]+((A>>>4|L<<12)&8191),ee=a[5]+(L>>>1&8191),j=a[6]+((L>>>14|R<<2)&8191),K=a[7]+((R>>>11|U<<5)&8191),te=a[8]+((U>>>8|N<<8)&8191),le=a[9]+(N>>>5|o),Q=0,ye=Q+Z*u+ne*(5*$)+oe*(5*x)+se*(5*b)+ae*(5*w);Q=ye>>>13,ye&=8191,ye+=ee*(5*m)+j*(5*g)+K*(5*p)+te*(5*f)+le*(5*d),Q+=ye>>>13,ye&=8191;let be=Q+Z*d+ne*u+oe*(5*$)+se*(5*x)+ae*(5*b);Q=be>>>13,be&=8191,be+=ee*(5*w)+j*(5*m)+K*(5*g)+te*(5*p)+le*(5*f),Q+=be>>>13,be&=8191;let Ee=Q+Z*f+ne*d+oe*u+se*(5*$)+ae*(5*x);Q=Ee>>>13,Ee&=8191,Ee+=ee*(5*b)+j*(5*w)+K*(5*m)+te*(5*g)+le*(5*p),Q+=Ee>>>13,Ee&=8191;let ie=Q+Z*p+ne*f+oe*d+se*u+ae*(5*$);Q=ie>>>13,ie&=8191,ie+=ee*(5*x)+j*(5*b)+K*(5*w)+te*(5*m)+le*(5*g),Q+=ie>>>13,ie&=8191;let X=Q+Z*g+ne*p+oe*f+se*d+ae*u;Q=X>>>13,X&=8191,X+=ee*(5*$)+j*(5*x)+K*(5*b)+te*(5*w)+le*(5*m),Q+=X>>>13,X&=8191;let ce=Q+Z*m+ne*g+oe*p+se*f+ae*d;Q=ce>>>13,ce&=8191,ce+=ee*u+j*(5*$)+K*(5*x)+te*(5*b)+le*(5*w),Q+=ce>>>13,ce&=8191;let z=Q+Z*w+ne*m+oe*g+se*p+ae*f;Q=z>>>13,z&=8191,z+=ee*d+j*u+K*(5*$)+te*(5*x)+le*(5*b),Q+=z>>>13,z&=8191;let J=Q+Z*b+ne*w+oe*m+se*g+ae*p;Q=J>>>13,J&=8191,J+=ee*f+j*d+K*u+te*(5*$)+le*(5*x),Q+=J>>>13,J&=8191;let H=Q+Z*x+ne*b+oe*w+se*m+ae*g;Q=H>>>13,H&=8191,H+=ee*p+j*f+K*d+te*u+le*(5*$),Q+=H>>>13,H&=8191;let de=Q+Z*$+ne*x+oe*b+se*w+ae*m;Q=de>>>13,de&=8191,de+=ee*g+j*p+K*f+te*d+le*u,Q+=de>>>13,de&=8191,Q=(Q<<2)+Q|0,Q=Q+ye|0,ye=Q&8191,Q=Q>>>13,be+=Q,a[0]=ye,a[1]=be,a[2]=Ee,a[3]=ie,a[4]=X,a[5]=ce,a[6]=z,a[7]=J,a[8]=H,a[9]=de}finalize(){const{h:e,pad:n}=this,i=new Uint16Array(10);let o=e[1]>>>13;e[1]&=8191;for(let u=2;u<10;u++)e[u]+=o,o=e[u]>>>13,e[u]&=8191;e[0]+=o*5,o=e[0]>>>13,e[0]&=8191,e[1]+=o,o=e[1]>>>13,e[1]&=8191,e[2]+=o,i[0]=e[0]+5,o=i[0]>>>13,i[0]&=8191;for(let u=1;u<10;u++)i[u]=e[u]+o,o=i[u]>>>13,i[u]&=8191;i[9]-=8192;let a=(o^1)-1;for(let u=0;u<10;u++)i[u]&=a;a=~a;for(let u=0;u<10;u++)e[u]=e[u]&a|i[u];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let l=e[0]+n[0];e[0]=l&65535;for(let u=1;u<8;u++)l=(e[u]+n[u]|0)+(l>>>16)|0,e[u]=l&65535}update(e){an.exists(this);const{buffer:n,blockLen:i}=this;e=wu(e);const o=e.length;for(let a=0;a<o;){const l=Math.min(i-this.pos,o-a);if(l===i){for(;i<=o-a;a+=i)this.process(e,a);continue}n.set(e.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===i&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){this.h.fill(0),this.r.fill(0),this.buffer.fill(0),this.pad.fill(0)}digestInto(e){an.exists(this),an.output(e,this),this.finished=!0;const{buffer:n,h:i}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let a=0;for(let l=0;l<8;l++)e[a++]=i[l]>>>0,e[a++]=i[l]>>>8;return e}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}}function nE(t){const e=(i,o)=>t(o).update(wu(i)).digest(),n=t(new Uint8Array(32));return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=i=>t(i),e}nE(t=>new tE(t));const rE=ld("expand 16-byte k"),iE=ld("expand 32-byte k"),sE=Wn(rE),oE=Wn(iE),Yp=t=>!(t.byteOffset%4),aE=t=>{const{core:e,rounds:n,counterRight:i,counterLen:o,allow128bitKeys:a,extendNonceFn:l,blockLen:u}=G7({rounds:20,counterRight:!1,counterLen:8,allow128bitKeys:!0,blockLen:64},t);an.number(o),an.number(n),an.number(u),an.bool(i),an.bool(a);const d=u/4;if(u%4!==0)throw new Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");return(f,p,g,m,w=0)=>{if(an.bytes(f),an.bytes(p),an.bytes(g),m||(m=new Uint8Array(g.length)),an.bytes(m),an.number(w),w<0||w>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");if(m.length<g.length)throw new Error(`Salsa/ChaCha: output (${m.length}) is shorter than data (${g.length})`);const b=[];let x,$;if(f.length===32)x=f,$=oE;else if(f.length===16&&a)x=new Uint8Array(32),x.set(f),x.set(f,16),$=sE,b.push(x);else throw new Error(`Salsa/ChaCha: invalid 32-byte key, got length=${f.length}`);if(l){if(p.length<=16)throw new Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");x=l($,x,p.subarray(0,16),new Uint8Array(32)),b.push(x),p=p.subarray(16)}const C=16-o;if(p.length!==C)throw new Error(`Salsa/ChaCha: nonce must be ${C} or 16 bytes`);if(C!==12){const Z=new Uint8Array(12);Z.set(p,i?0:12-p.length),b.push(p=Z)}const I=new Uint8Array(u),E=Wn(I),A=Wn(x),L=Wn(p),R=Yp(g)&&Wn(g),U=Yp(m)&&Wn(m);b.push(E);const N=g.length;for(let Z=0,ne=w;Z<N;ne++){if(e($,A,L,E,ne,n),ne>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");const oe=Math.min(u,N-Z);if(oe===u&&U&&R){const se=Z/4;if(Z%4!==0)throw new Error("Salsa/ChaCha: invalid block position");for(let ae=0;ae<d;ae++)U[se+ae]=R[se+ae]^E[ae];Z+=u;continue}for(let se=0;se<oe;se++)m[Z+se]=g[Z+se]^I[se];Z+=oe}for(let Z=0;Z<b.length;Z++)b[Z].fill(0);return m}},ge=(t,e)=>t<<e|t>>>32-e;function lE(t,e,n,i,o,a=20){let l=t[0],u=t[1],d=t[2],f=t[3],p=e[0],g=e[1],m=e[2],w=e[3],b=e[4],x=e[5],$=e[6],C=e[7],I=o,E=n[0],A=n[1],L=n[2],R=l,U=u,N=d,Z=f,ne=p,oe=g,se=m,ae=w,ee=b,j=x,K=$,te=C,le=I,Q=E,ye=A,be=L;for(let ie=0;ie<a;ie+=2)R=R+ne|0,le=ge(le^R,16),ee=ee+le|0,ne=ge(ne^ee,12),R=R+ne|0,le=ge(le^R,8),ee=ee+le|0,ne=ge(ne^ee,7),U=U+oe|0,Q=ge(Q^U,16),j=j+Q|0,oe=ge(oe^j,12),U=U+oe|0,Q=ge(Q^U,8),j=j+Q|0,oe=ge(oe^j,7),N=N+se|0,ye=ge(ye^N,16),K=K+ye|0,se=ge(se^K,12),N=N+se|0,ye=ge(ye^N,8),K=K+ye|0,se=ge(se^K,7),Z=Z+ae|0,be=ge(be^Z,16),te=te+be|0,ae=ge(ae^te,12),Z=Z+ae|0,be=ge(be^Z,8),te=te+be|0,ae=ge(ae^te,7),R=R+oe|0,be=ge(be^R,16),K=K+be|0,oe=ge(oe^K,12),R=R+oe|0,be=ge(be^R,8),K=K+be|0,oe=ge(oe^K,7),U=U+se|0,le=ge(le^U,16),te=te+le|0,se=ge(se^te,12),U=U+se|0,le=ge(le^U,8),te=te+le|0,se=ge(se^te,7),N=N+ae|0,Q=ge(Q^N,16),ee=ee+Q|0,ae=ge(ae^ee,12),N=N+ae|0,Q=ge(Q^N,8),ee=ee+Q|0,ae=ge(ae^ee,7),Z=Z+ne|0,ye=ge(ye^Z,16),j=j+ye|0,ne=ge(ne^j,12),Z=Z+ne|0,ye=ge(ye^Z,8),j=j+ye|0,ne=ge(ne^j,7);let Ee=0;i[Ee++]=l+R|0,i[Ee++]=u+U|0,i[Ee++]=d+N|0,i[Ee++]=f+Z|0,i[Ee++]=p+ne|0,i[Ee++]=g+oe|0,i[Ee++]=m+se|0,i[Ee++]=w+ae|0,i[Ee++]=b+ee|0,i[Ee++]=x+j|0,i[Ee++]=$+K|0,i[Ee++]=C+te|0,i[Ee++]=I+le|0,i[Ee++]=E+Q|0,i[Ee++]=A+ye|0,i[Ee++]=L+be|0}function cE(t,e,n,i){const o=Wn(e),a=Wn(n),l=Wn(i);let u=t[0],d=t[1],f=t[2],p=t[3],g=o[0],m=o[1],w=o[2],b=o[3],x=o[4],$=o[5],C=o[6],I=o[7],E=a[0],A=a[1],L=a[2],R=a[3];for(let U=0;U<20;U+=2)u=u+g|0,E=ge(E^u,16),x=x+E|0,g=ge(g^x,12),u=u+g|0,E=ge(E^u,8),x=x+E|0,g=ge(g^x,7),d=d+m|0,A=ge(A^d,16),$=$+A|0,m=ge(m^$,12),d=d+m|0,A=ge(A^d,8),$=$+A|0,m=ge(m^$,7),f=f+w|0,L=ge(L^f,16),C=C+L|0,w=ge(w^C,12),f=f+w|0,L=ge(L^f,8),C=C+L|0,w=ge(w^C,7),p=p+b|0,R=ge(R^p,16),I=I+R|0,b=ge(b^I,12),p=p+b|0,R=ge(R^p,8),I=I+R|0,b=ge(b^I,7),u=u+m|0,R=ge(R^u,16),C=C+R|0,m=ge(m^C,12),u=u+m|0,R=ge(R^u,8),C=C+R|0,m=ge(m^C,7),d=d+w|0,E=ge(E^d,16),I=I+E|0,w=ge(w^I,12),d=d+w|0,E=ge(E^d,8),I=I+E|0,w=ge(w^I,7),f=f+b|0,A=ge(A^f,16),x=x+A|0,b=ge(b^x,12),f=f+b|0,A=ge(A^f,8),x=x+A|0,b=ge(b^x,7),p=p+g|0,L=ge(L^p,16),$=$+L|0,g=ge(g^$,12),p=p+g|0,L=ge(L^p,8),$=$+L|0,g=ge(g^$,7);return l[0]=u,l[1]=d,l[2]=f,l[3]=p,l[4]=E,l[5]=A,l[6]=L,l[7]=R,i}const m1=aE({core:lE,counterRight:!1,counterLen:8,extendNonceFn:cE,allow128bitKeys:!1});var uE=Object.defineProperty,bt=(t,e)=>{for(var n in e)uE(t,n,{get:e[n],enumerable:!0})};function y1(t){return ln(ao.getPublicKey(t))}var cd={};bt(cd,{MessageNode:()=>b1,MessageQueue:()=>_1,insertEventIntoAscendingList:()=>fE,insertEventIntoDescendingList:()=>dE,normalizeURL:()=>$u,utf8Decoder:()=>Zn,utf8Encoder:()=>$n});var Zn=new TextDecoder("utf-8"),$n=new TextEncoder;function $u(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function dE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at<t[i].created_at)a=i+1;else if(e.created_at>=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at>e.created_at)n=o;else if(t[o].created_at<e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}function fE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at>t[i].created_at)a=i+1;else if(e.created_at<=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at<e.created_at)n=o;else if(t[o].created_at>e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}var b1=class{_value;_next;get value(){return this._value}set value(t){this._value=t}get next(){return this._next}set next(t){this._next=t}constructor(t){this._value=t,this._next=null}},_1=class{_first;_last;get first(){return this._first}set first(t){this._first=t}get last(){return this._last}set last(t){this._last=t}_size;get size(){return this._size}set size(t){this._size=t}constructor(){this._first=null,this._last=null,this._size=0}enqueue(t){const e=new b1(t);return this._size===0||!this._last?(this._first=e,this._last=e):(this._last.next=e,this._last=e),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let t=this._first;return this._first=t.next,t.next=null,this._size--,t.value}},qi=Symbol("verified"),ft=(t=>(t[t.Metadata=0]="Metadata",t[t.Text=1]="Text",t[t.RecommendRelay=2]="RecommendRelay",t[t.Contacts=3]="Contacts",t[t.EncryptedDirectMessage=4]="EncryptedDirectMessage",t[t.EventDeletion=5]="EventDeletion",t[t.Repost=6]="Repost",t[t.Reaction=7]="Reaction",t[t.BadgeAward=8]="BadgeAward",t[t.ChannelCreation=40]="ChannelCreation",t[t.ChannelMetadata=41]="ChannelMetadata",t[t.ChannelMessage=42]="ChannelMessage",t[t.ChannelHideMessage=43]="ChannelHideMessage",t[t.ChannelMuteUser=44]="ChannelMuteUser",t[t.Blank=255]="Blank",t[t.Report=1984]="Report",t[t.ZapRequest=9734]="ZapRequest",t[t.Zap=9735]="Zap",t[t.RelayList=10002]="RelayList",t[t.ClientAuth=22242]="ClientAuth",t[t.NwcRequest=23194]="NwcRequest",t[t.HttpAuth=27235]="HttpAuth",t[t.ProfileBadge=30008]="ProfileBadge",t[t.BadgeDefinition=30009]="BadgeDefinition",t[t.Article=30023]="Article",t[t.FileMetadata=1063]="FileMetadata",t))(ft||{});function hE(t=255){return{kind:t,content:"",tags:[],created_at:0}}function Zr(t,e){const n=t;return n.pubkey=y1(e),n.id=co(n),n.sig=vE(n,e),n[qi]=!0,n}function pE(t){if(!ud(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function co(t){let e=Gn($n.encode(pE(t)));return ln(e)}var gE=t=>t instanceof Object;function ud(t){if(!gE(t)||typeof t.kind!="number"||typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let n=t.tags[e];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function fl(t){if(typeof t[qi]=="boolean")return t[qi];const e=co(t);if(e!==t.id)return t[qi]=!1;try{return t[qi]=ao.verify(t.sig,e,t.pubkey)}catch{return t[qi]=!1}}function vE(t,e){return ln(ao.sign(co(t),e))}function mE(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1&&!t.ids.some(n=>e.id.startsWith(n))||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1&&!t.authors.some(n=>e.pubkey.startsWith(n)))return!1;for(let n in t)if(n[0]==="#"){let i=n.slice(1),o=t[`#${i}`];if(o&&!e.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>t.until)}function w1(t,e){for(let n=0;n<t.length;n++)if(mE(t[n],e))return!0;return!1}function yE(...t){let e={};for(let n=0;n<t.length;n++){let i=t[n];Object.entries(i).forEach(([o,a])=>{if(o==="kinds"||o==="ids"||o==="authors"||o[0]==="#"){e[o]=e[o]||[];for(let l=0;l<a.length;l++){let u=a[l];e[o].includes(u)||e[o].push(u)}}}),i.limit&&(!e.limit||i.limit>e.limit)&&(e.limit=i.limit),i.until&&(!e.until||i.until>e.until)&&(e.until=i.until),i.since&&(!e.since||i.since<e.since)&&(e.since=i.since)}return e}var bE={};bt(bE,{getHex64:()=>hl,getInt:()=>x1,getSubscriptionId:()=>$1,matchEventId:()=>_E,matchEventKind:()=>xE,matchEventPubkey:()=>wE});function hl(t,e){let n=e.length+3,i=t.indexOf(`"${e}":`)+n,o=t.slice(i).indexOf('"')+i+1;return t.slice(o,o+64)}function x1(t,e){let n=e.length,i=t.indexOf(`"${e}":`)+n+3,o=t.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function $1(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let n=t.slice(e+7+1).indexOf('"');if(n===-1)return null;let i=e+7+1+n,o=t.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return t.slice(i+1,a)}function _E(t,e){return e===hl(t,"id")}function wE(t,e){return e===hl(t,"pubkey")}function xE(t,e){return e===x1(t,"kind")}var Jp=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function $E(t,e={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=e;var a,l={},u=Jp(),d={},f={},p;async function g(){return p||(p=new Promise((C,I)=>{try{a=new WebSocket(t)}catch(R){I(R)}a.onopen=()=>{u.connect.forEach(R=>R()),C()},a.onerror=()=>{p=void 0,u.error.forEach(R=>R()),I()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(R=>R())};let E=new _1,A;a.onmessage=R=>{E.enqueue(R.data),A||(A=setInterval(L,0))};function L(){if(E.size===0){clearInterval(A),A=null;return}var R=E.dequeue();if(!R)return;let U=$1(R);if(U){let N=l[U];if(N&&N.alreadyHaveEvent&&N.alreadyHaveEvent(hl(R,"id"),t))return}try{let N=JSON.parse(R);switch(N[0]){case"EVENT":{let se=N[1],ae=N[2];ud(ae)&&l[se]&&(l[se].skipVerification||fl(ae))&&w1(l[se].filters,ae)&&(l[se],(d[se]?.event||[]).forEach(ee=>ee(ae)));return}case"COUNT":let Z=N[1],ne=N[2];l[Z]&&(d[Z]?.count||[]).forEach(se=>se(ne));return;case"EOSE":{let se=N[1];se in d&&(d[se].eose.forEach(ae=>ae()),d[se].eose=[]);return}case"OK":{let se=N[1],ae=N[2],ee=N[3]||"";if(se in f){let{resolve:j,reject:K}=f[se];ae?j(null):K(new Error(ee))}return}case"NOTICE":let oe=N[1];u.notice.forEach(se=>se(oe));return;case"AUTH":{let se=N[1];u.auth?.forEach(ae=>ae(se));return}}}catch{return}}}),p)}function m(){return a?.readyState===1}async function w(){m()||await g()}async function b(C){let I=JSON.stringify(C);if(!(!m()&&(await new Promise(E=>setTimeout(E,1e3)),!m())))try{a.send(I)}catch(E){console.log(E)}}const x=(C,{verb:I="REQ",skipVerification:E=!1,alreadyHaveEvent:A=null,id:L=Math.random().toString().slice(2)}={})=>{let R=L;l[R]={id:R,filters:C,skipVerification:E,alreadyHaveEvent:A},b([I,R,...C]);let U={sub:(N,Z={})=>x(N||C,{skipVerification:Z.skipVerification||E,alreadyHaveEvent:Z.alreadyHaveEvent||A,id:R}),unsub:()=>{delete l[R],delete d[R],b(["CLOSE",R])},on:(N,Z)=>{d[R]=d[R]||{event:[],count:[],eose:[]},d[R][N].push(Z)},off:(N,Z)=>{let ne=d[R],oe=ne[N].indexOf(Z);oe>=0&&ne[N].splice(oe,1)},get events(){return E1(U)}};return U};function $(C,I){return new Promise((E,A)=>{if(!C.id){A(new Error(`event ${C} has no id`));return}let L=C.id;b([I,C]),f[L]={resolve:E,reject:A}})}return{url:t,sub:x,on:(C,I)=>{u[C].push(I),C==="connect"&&a?.readyState===1&&I()},off:(C,I)=>{let E=u[C].indexOf(I);E!==-1&&u[C].splice(E,1)},list:(C,I)=>new Promise(E=>{let A=x(C,I),L=[],R=setTimeout(()=>{A.unsub(),E(L)},n);A.on("eose",()=>{A.unsub(),clearTimeout(R),E(L)}),A.on("event",U=>{L.push(U)})}),get:(C,I)=>new Promise(E=>{let A=x([C],I),L=setTimeout(()=>{A.unsub(),E(null)},i);A.on("event",R=>{A.unsub(),clearTimeout(L),E(R)})}),count:C=>new Promise(I=>{let E=x(C,{...x,verb:"COUNT"}),A=setTimeout(()=>{E.unsub(),I(null)},o);E.on("count",L=>{E.unsub(),clearTimeout(A),I(L)})}),async publish(C){await $(C,"EVENT")},async auth(C){await $(C,"AUTH")},connect:w,close(){u=Jp(),d={},f={},a?.readyState===WebSocket.OPEN&&a.close()},get status(){return a?.readyState??3}}}async function*E1(t){let e;const n=[],i=o=>{e?(e(o),e=void 0):n.push(o)};t.on("event",i);try{for(;;)n.length>0?yield n.shift():yield await new Promise(a=>{e=a})}finally{t.off("event",i)}}var EE=class{_conn;_seenOn={};batchedByKey={};eoseSubTimeout;getTimeout;seenOnEnabled=!0;batchInterval=100;constructor(t={}){this._conn={},this.eoseSubTimeout=t.eoseSubTimeout||3400,this.getTimeout=t.getTimeout||3400,this.seenOnEnabled=t.seenOnEnabled!==!1,this.batchInterval=t.batchInterval||100}close(t){t.forEach(e=>{let n=this._conn[$u(e)];n&&n.close()})}async ensureRelay(t){const e=$u(t);this._conn[e]||(this._conn[e]=$E(e,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[e];return await n.connect(),n}sub(t,e,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(m,w)=>{if(n?.alreadyHaveEvent?.(m,w))return!0;if(this.seenOnEnabled){let b=this._seenOn[m]||new Set;b.add(w),this._seenOn[m]=b}return i.has(m)};let a=[],l=new Set,u=new Set,d=t.length,f=!1,p=setTimeout(()=>{f=!0;for(let m of u.values())m()},n?.eoseSubTimeout||this.eoseSubTimeout);t.filter((m,w,b)=>b.indexOf(m)===w).forEach(async m=>{let w;try{w=await this.ensureRelay(m)}catch{x();return}if(!w)return;let b=w.sub(e,o);b.on("event",$=>{i.add($.id);for(let C of l.values())C($)}),b.on("eose",()=>{f||x()}),a.push(b);function x(){if(d--,d===0){clearTimeout(p);for(let $ of u.values())$()}}});let g={sub(m,w){return a.forEach(b=>b.sub(m,w)),g},unsub(){a.forEach(m=>m.unsub())},on(m,w){m==="event"?l.add(w):m==="eose"&&u.add(w)},off(m,w){m==="event"?l.delete(w):m==="eose"&&u.delete(w)},get events(){return E1(g)}};return g}get(t,e,n){return new Promise(i=>{let o=this.sub(t,[e],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(t,e,n){return new Promise(i=>{let o=[],a=this.sub(t,e,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}batchedList(t,e,n){return new Promise(i=>{this.batchedByKey[t]?this.batchedByKey[t].push({filters:n,relays:e,resolve:i,events:[]}):(this.batchedByKey[t]=[{filters:n,relays:e,resolve:i,events:[]}],setTimeout(()=>{Object.keys(this.batchedByKey).forEach(async o=>{const a=this.batchedByKey[o],l=[],u=[];a.forEach(f=>{l.push(...f.filters),u.push(...f.relays)});const d=this.sub(u,[yE(...l)]);d.on("event",f=>{a.forEach(p=>w1(p.filters,f)&&p.events.push(f))}),d.on("eose",()=>{d.unsub(),a.forEach(f=>f.resolve(f.events))}),delete this.batchedByKey[o]})},this.batchInterval))})}publish(t,e){return t.map(async n=>(await this.ensureRelay(n)).publish(e))}seenOn(t){return Array.from(this._seenOn[t]?.values?.()||[])}},uo={};bt(uo,{BECH32_REGEX:()=>C1,decode:()=>pl,naddrEncode:()=>IE,neventEncode:()=>RE,noteEncode:()=>TE,nprofileEncode:()=>AE,npubEncode:()=>SE,nrelayEncode:()=>OE,nsecEncode:()=>CE});var k1=5e3,C1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function kE(t){const e=new Uint8Array(4);return e[0]=t>>24&255,e[1]=t>>16&255,e[2]=t>>8&255,e[3]=t&255,e}function pl(t){let{prefix:e,words:n}=Xi.decode(t,k1),i=new Uint8Array(Xi.fromWords(n));switch(e){case"nprofile":{let o=ga(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:ln(o[0][0]),relays:o[1]?o[1].map(a=>Zn.decode(a)):[]}}}case"nevent":{let o=ga(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(o[3]&&o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"nevent",data:{id:ln(o[0][0]),relays:o[1]?o[1].map(a=>Zn.decode(a)):[],author:o[2]?.[0]?ln(o[2][0]):void 0,kind:o[3]?.[0]?parseInt(ln(o[3][0]),16):void 0}}}case"naddr":{let o=ga(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Zn.decode(o[0][0]),pubkey:ln(o[2][0]),kind:parseInt(ln(o[3][0]),16),relays:o[1]?o[1].map(a=>Zn.decode(a)):[]}}}case"nrelay":{let o=ga(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Zn.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:e,data:ln(i)};default:throw new Error(`unknown prefix ${e}`)}}function ga(t){let e={},n=t;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);e[i]=e[i]||[],e[i].push(a)}return e}function CE(t){return dd("nsec",t)}function SE(t){return dd("npub",t)}function TE(t){return dd("note",t)}function fo(t,e){let n=Xi.toWords(e);return Xi.encode(t,n,k1)}function dd(t,e){let n=Qi(e);return fo(t,n)}function AE(t){let e=gl({0:[Qi(t.pubkey)],1:(t.relays||[]).map(n=>$n.encode(n))});return fo("nprofile",e)}function RE(t){let e;t.kind!=null&&(e=kE(t.kind));let n=gl({0:[Qi(t.id)],1:(t.relays||[]).map(i=>$n.encode(i)),2:t.author?[Qi(t.author)]:[],3:e?[new Uint8Array(e)]:[]});return fo("nevent",n)}function IE(t){let e=new ArrayBuffer(4);new DataView(e).setUint32(0,t.kind,!1);let n=gl({0:[$n.encode(t.identifier)],1:(t.relays||[]).map(i=>$n.encode(i)),2:[Qi(t.pubkey)],3:[new Uint8Array(e)]});return fo("naddr",n)}function OE(t){let e=gl({0:[$n.encode(t)]});return fo("nrelay",e)}function gl(t){let e=[];return Object.entries(t).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),e.push(a)})}),Zi(...e)}var LE={};bt(LE,{decrypt:()=>PE,encrypt:()=>S1});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function S1(t,e,n){const i=Ut.getSharedSecret(t,"02"+e),o=T1(i);let a=Uint8Array.from(so(16)),l=$n.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),f=wr.encode(new Uint8Array(d)),p=wr.encode(new Uint8Array(a.buffer));return`${f}?iv=${p}`}async function PE(t,e,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(t,"02"+e),l=T1(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=wr.decode(i),f=wr.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},u,d);return Zn.decode(p)}function T1(t){return t.slice(1,33)}var A1={};bt(A1,{NIP05_REGEX:()=>R1,queryProfile:()=>jE,searchDomain:()=>BE,useFetchImplementation:()=>ME});var R1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,vl;try{vl=fetch}catch{}function ME(t){vl=t}async function BE(t,e=""){try{return(await(await vl(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function jE(t){const e=t.match(R1);if(!e)return null;const[n,i="_",o]=e;try{const a=await vl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=NE(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function NE(t){const e={names:{}};for(const[n,i]of Object.entries(t.names))typeof n=="string"&&typeof i=="string"&&(e.names[n]=i);if(t.relays){e.relays={};for(const[n,i]of Object.entries(t.relays))typeof n=="string"&&Array.isArray(i)&&(e.relays[n]=i.filter(o=>typeof o=="string"))}return e}var DE={};bt(DE,{generateSeedWords:()=>zE,privateKeyFromSeedWords:()=>UE,validateWords:()=>FE});function UE(t,e){let i=di.fromMasterSeed(L7(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return ln(i)}function zE(){return S7(l1)}function FE(t){return I7(t,l1)}var HE={};bt(HE,{parse:()=>qE});function qE(t){const e={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of t.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&e.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,f={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){e.root=f;continue}if(d==="reply"){e.reply=f;continue}if(d==="mention"){e.mentions.push(f);continue}if(p){e.root=f;continue}if(g){e.reply=f;continue}e.mentions.push(f)}return e}var WE={};bt(WE,{getPow:()=>I1,minePow:()=>ZE});function I1(t){let e=0;for(let n=0;n<t.length;n++){const i=parseInt(t[n],16);if(i===0)e+=4;else{e+=Math.clz32(i)-28;break}}return e}function ZE(t,e){let n=0;const i=t,o=["nonce",n.toString(),e.toString()];for(i.tags.push(o);;){const a=Math.floor(new Date().getTime()/1e3);if(a!==i.created_at&&(n=0,i.created_at=a),o[1]=(++n).toString(),i.id=co(i),I1(i.id)>=e)break}return i}var KE={};bt(KE,{finishRepostEvent:()=>VE,getRepostedEvent:()=>GE,getRepostedEventPointer:()=>O1});function VE(t,e,n,i){return Zr({kind:6,tags:[...t.tags??[],["e",e.id,n],["p",e.pubkey]],content:t.content===""?"":JSON.stringify(e),created_at:t.created_at},i)}function O1(t){if(t.kind!==6)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(e!==void 0)return{id:e[1],relays:[e[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function GE(t,{skipVerification:e}={}){const n=O1(t);if(n===void 0||t.content==="")return;let i;try{i=JSON.parse(t.content)}catch{return}if(i.id===n.id&&!(!e&&!fl(i)))return i}var QE={};bt(QE,{NOSTR_URI_REGEX:()=>ml,parse:()=>JE,test:()=>YE});var ml=new RegExp(`nostr:(${C1.source})`);function YE(t){return typeof t=="string"&&new RegExp(`^${ml.source}$`).test(t)}function JE(t){const e=t.match(new RegExp(`^${ml.source}$`));if(!e)throw new Error(`Invalid Nostr URI: ${t}`);return{uri:e[0],value:e[1],decoded:pl(e[1])}}var XE={};bt(XE,{finishReactionEvent:()=>e9,getReactedEventPointer:()=>t9});function e9(t,e,n){const i=e.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return Zr({...t,kind:7,tags:[...t.tags??[],...i,["e",e.id],["p",e.pubkey]],content:t.content??"+"},n)}function t9(t){if(t.kind!==7)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(e===void 0||n===void 0))return{id:e[1],relays:[e[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var n9={};bt(n9,{createDelegation:()=>r9,getDelegator:()=>i9});function r9(t,e){let n=[];(e.kind||-1)>=0&&n.push(`kind=${e.kind}`),e.until&&n.push(`created_at<${e.until}`),e.since&&n.push(`created_at>${e.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Gn($n.encode(`nostr:delegation:${e.pubkey}:${i}`)),a=ln(ao.sign(o,t));return{from:y1(t),to:e.pubkey,cond:i,sig:a}}function i9(t){let e=t.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!e)return null;let n=e[1],i=e[2],o=e[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,f,p]=a[u].split(/\b/);if(!(d==="kind"&&f==="="&&t.kind===parseInt(p))){if(d==="created_at"&&f==="<"&&t.created_at<parseInt(p))continue;if(d==="created_at"&&f===">"&&t.created_at>parseInt(p))continue;return null}}let l=Gn($n.encode(`nostr:delegation:${t.pubkey}:${i}`));return ao.verify(o,l,n)?n:null}var s9={};bt(s9,{matchAll:()=>o9,regex:()=>fd,replaceAll:()=>a9});var fd=()=>new RegExp(`\\b${ml.source}\\b`,"g");function*o9(t){const e=t.matchAll(fd());for(const n of e)try{const[i,o]=n;yield{uri:i,value:o,decoded:pl(o),start:n.index,end:n.index+i.length}}catch{}}function a9(t,e){return t.replaceAll(fd(),(n,i)=>e({uri:n,value:i,decoded:pl(i)}))}var l9={};bt(l9,{channelCreateEvent:()=>c9,channelHideMessageEvent:()=>f9,channelMessageEvent:()=>d9,channelMetadataEvent:()=>u9,channelMuteUserEvent:()=>h9});var c9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Zr({kind:40,tags:[...t.tags??[]],content:n,created_at:t.created_at},e)},u9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Zr({kind:41,tags:[["e",t.channel_create_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},d9=(t,e)=>{const n=[["e",t.channel_create_event_id,t.relay_url,"root"]];return t.reply_to_channel_message_event_id&&n.push(["e",t.reply_to_channel_message_event_id,t.relay_url,"reply"]),Zr({kind:42,tags:[...n,...t.tags??[]],content:t.content,created_at:t.created_at},e)},f9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Zr({kind:43,tags:[["e",t.channel_message_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},h9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Zr({kind:44,tags:[["p",t.pubkey_to_mute],...t.tags??[]],content:n,created_at:t.created_at},e)},p9={};bt(p9,{useFetchImplementation:()=>g9,validateGithub:()=>v9});var hd;try{hd=fetch}catch{}function g9(t){hd=t}async function v9(t,e,n){try{return await(await hd(`https://gist.github.com/${e}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${t}`}catch{return!1}}var m9={};bt(m9,{authenticate:()=>y9});var y9=async({challenge:t,relay:e,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",e.url],["challenge",t]],content:""};return e.auth(await n(i))},b9={};bt(b9,{decrypt:()=>x9,encrypt:()=>w9,getSharedSecret:()=>_9});var _9=(t,e)=>Gn(Ut.getSharedSecret(t,"02"+e).subarray(1,33));function w9(t,e,n=1){if(n!==1)throw new Error("NIP44: unknown encryption version");const i=so(24),o=$n.encode(e),a=m1(t,i,o),l=new Uint8Array(25+a.length);return l.set([n],0),l.set(i,1),l.set(a,25),wr.encode(l)}function x9(t,e){let n=wr.decode(e);if(n[0]!==1)throw new Error(`NIP44: unknown encryption version: ${n[0]}`);const i=n.slice(1,25),o=n.slice(25),a=m1(t,i,o);return Zn.decode(a)}var $9={};bt($9,{makeNwcRequestEvent:()=>k9,parseConnectionString:()=>E9});function E9(t){const{pathname:e,searchParams:n}=new URL(t),i=e,o=n.get("relay"),a=n.get("secret");if(!i||!o||!a)throw new Error("invalid connection string");return{pubkey:i,relay:o,secret:a}}async function k9({pubkey:t,secret:e,invoice:n}){const o=await S1(e,t,JSON.stringify({method:"pay_invoice",params:{invoice:n}})),a={kind:23194,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t]]};return Zr(a,e)}var C9={};bt(C9,{getZapEndpoint:()=>T9,makeZapReceipt:()=>I9,makeZapRequest:()=>A9,useFetchImplementation:()=>S9,validateZapRequest:()=>R9});var pd;try{pd=fetch}catch{}function S9(t){pd=t}async function T9(t){try{let e="",{lud06:n,lud16:i}=JSON.parse(t.content);if(n){let{words:l}=Xi.decode(n,1e3),u=Xi.fromWords(l);e=Zn.decode(u)}else if(i){let[l,u]=i.split("@");e=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await pd(e)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function A9({profile:t,event:e,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!t)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t],["amount",n.toString()],["relays",...i]]};return e&&a.tags.push(["e",e]),a}function R9(t){let e;try{e=JSON.parse(t)}catch{return"Invalid zap request JSON."}if(!ud(e))return"Zap request is not a valid Nostr event.";if(!fl(e))return"Invalid signature on zap request.";let n=e.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=e.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":e.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function I9({zapRequest:t,preimage:e,bolt11:n,paidAt:i}){let a=JSON.parse(t).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",t]]};return e&&l.tags.push(["preimage",e]),l}var O9={};bt(O9,{getToken:()=>L9,unpackEventFromToken:()=>P1,validateEvent:()=>M1,validateToken:()=>P9});var L1="Nostr ";async function L9(t,e,n,i=!1){if(!t||!e)throw new Error("Missing loginUrl or httpMethod");const o=hE(27235);o.tags=[["u",t],["method",e]],o.created_at=Math.round(new Date().getTime()/1e3);const a=await n(o);return(i?L1:"")+wr.encode($n.encode(JSON.stringify(a)))}async function P9(t,e,n){const i=await P1(t).catch(a=>{throw a});return await M1(i,e,n).catch(a=>{throw a})}async function P1(t){if(!t)throw new Error("Missing token");t=t.replace(L1,"");const e=Zn.decode(wr.decode(t));if(!e||e.length===0||!e.startsWith("{"))throw new Error("Invalid token");return JSON.parse(e)}async function M1(t,e,n){if(!t)throw new Error("Invalid nostr event");if(!fl(t))throw new Error("Invalid nostr event, signature invalid");if(t.kind!==27235)throw new Error("Invalid nostr event, kind invalid");if(!t.created_at)throw new Error("Invalid nostr event, created_at invalid");if(Math.round(new Date().getTime()/1e3)-t.created_at>60)throw new Error("Invalid nostr event, expired");const i=t.tags.find(a=>a[0]==="u");if(i?.length!==1&&i?.[1]!==e)throw new Error("Invalid nostr event, url tag invalid");const o=t.tags.find(a=>a[0]==="method");if(o?.length!==1&&o?.[1].toLowerCase()!==n.toLowerCase())throw new Error("Invalid nostr event, method tag invalid");return!0}const M9=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),B1=(t={})=>(()=>{const e=M9();return it(e,t,!0,!0),e})(),B9=B('<button class="text-blue-500 underline">'),{noteEncode:j9,neventEncode:N9}=uo,D9=t=>{try{return j9(t)}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},U9=t=>{try{return N9({id:t})}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},qs=t=>(()=>{const e=B9();return k(e,S(ve,{get when(){return t.kind==null||t.kind===ft.Text},get fallback(){return U9(t.eventId)},get children(){return D9(t.eventId)}})),e})();var Ma={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ma.exports;(function(t,e){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",g=1,m=2,w=4,b=1,x=2,$=1,C=2,I=4,E=8,A=16,L=32,R=64,U=128,N=256,Z=512,ne=30,oe="...",se=800,ae=16,ee=1,j=2,K=3,te=1/0,le=9007199254740991,Q=17976931348623157e292,ye=0/0,be=4294967295,Ee=be-1,ie=be>>>1,X=[["ary",U],["bind",$],["bindKey",C],["curry",E],["curryRight",A],["flip",Z],["partial",L],["partialRight",R],["rearg",N]],ce="[object Arguments]",z="[object Array]",J="[object AsyncFunction]",H="[object Boolean]",de="[object Date]",ze="[object DOMException]",lt="[object Error]",Je="[object Function]",Y="[object GeneratorFunction]",_e="[object Map]",Xe="[object Number]",Jt="[object Null]",Ct="[object Object]",Ht="[object Promise]",Qr="[object Proxy]",En="[object RegExp]",St="[object Set]",Xt="[object String]",Un="[object Symbol]",Er="[object Undefined]",kn="[object WeakMap]",Ae="[object WeakSet]",qt="[object ArrayBuffer]",Wt="[object DataView]",Cn="[object Float32Array]",Sn="[object Float64Array]",un="[object Int8Array]",dn="[object Int16Array]",Tn="[object Int32Array]",rr="[object Uint8Array]",ir="[object Uint8ClampedArray]",sr="[object Uint16Array]",Si="[object Uint32Array]",yo=/\b__p \+= '';/g,bo=/\b(__p \+=) '' \+/g,_o=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Gd=/&(?:amp|lt|gt|quot|#39);/g,Qd=/[&<>"']/g,Rm=RegExp(Gd.source),Im=RegExp(Qd.source),Om=/<%-([\s\S]+?)%>/g,Lm=/<%([\s\S]+?)%>/g,Yd=/<%=([\s\S]+?)%>/g,Pm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Mm=/^\w*$/,Bm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ll=/[\\^$.*+?()[\]{}|]/g,jm=RegExp(Ll.source),Pl=/^\s+/,Nm=/\s/,Dm=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Um=/\{\n\/\* \[wrapped with (.+)\] \*/,zm=/,? & /,Fm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Hm=/[()=,{}\[\]\/\s]/,qm=/\\(\\)?/g,Wm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Jd=/\w*$/,Zm=/^[-+]0x[0-9a-f]+$/i,Km=/^0b[01]+$/i,Vm=/^\[object .+?Constructor\]$/,Gm=/^0o[0-7]+$/i,Qm=/^(?:0|[1-9]\d*)$/,Ym=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,wo=/($^)/,Jm=/['\n\r\u2028\u2029\\]/g,xo="\\ud800-\\udfff",Xm="\\u0300-\\u036f",e2="\\ufe20-\\ufe2f",t2="\\u20d0-\\u20ff",Xd=Xm+e2+t2,ef="\\u2700-\\u27bf",tf="a-z\\xdf-\\xf6\\xf8-\\xff",n2="\\xac\\xb1\\xd7\\xf7",r2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",i2="\\u2000-\\u206f",s2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",nf="A-Z\\xc0-\\xd6\\xd8-\\xde",rf="\\ufe0e\\ufe0f",sf=n2+r2+i2+s2,Ml="['’]",o2="["+xo+"]",of="["+sf+"]",$o="["+Xd+"]",af="\\d+",a2="["+ef+"]",lf="["+tf+"]",cf="[^"+xo+sf+af+ef+tf+nf+"]",Bl="\\ud83c[\\udffb-\\udfff]",l2="(?:"+$o+"|"+Bl+")",uf="[^"+xo+"]",jl="(?:\\ud83c[\\udde6-\\uddff]){2}",Nl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ti="["+nf+"]",df="\\u200d",ff="(?:"+lf+"|"+cf+")",c2="(?:"+Ti+"|"+cf+")",hf="(?:"+Ml+"(?:d|ll|m|re|s|t|ve))?",pf="(?:"+Ml+"(?:D|LL|M|RE|S|T|VE))?",gf=l2+"?",vf="["+rf+"]?",u2="(?:"+df+"(?:"+[uf,jl,Nl].join("|")+")"+vf+gf+")*",d2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",f2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",mf=vf+gf+u2,h2="(?:"+[a2,jl,Nl].join("|")+")"+mf,p2="(?:"+[uf+$o+"?",$o,jl,Nl,o2].join("|")+")",g2=RegExp(Ml,"g"),v2=RegExp($o,"g"),Dl=RegExp(Bl+"(?="+Bl+")|"+p2+mf,"g"),m2=RegExp([Ti+"?"+lf+"+"+hf+"(?="+[of,Ti,"$"].join("|")+")",c2+"+"+pf+"(?="+[of,Ti+ff,"$"].join("|")+")",Ti+"?"+ff+"+"+hf,Ti+"+"+pf,f2,d2,af,h2].join("|"),"g"),y2=RegExp("["+df+xo+Xd+rf+"]"),b2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,_2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],w2=-1,st={};st[Cn]=st[Sn]=st[un]=st[dn]=st[Tn]=st[rr]=st[ir]=st[sr]=st[Si]=!0,st[ce]=st[z]=st[qt]=st[H]=st[Wt]=st[de]=st[lt]=st[Je]=st[_e]=st[Xe]=st[Ct]=st[En]=st[St]=st[Xt]=st[kn]=!1;var nt={};nt[ce]=nt[z]=nt[qt]=nt[Wt]=nt[H]=nt[de]=nt[Cn]=nt[Sn]=nt[un]=nt[dn]=nt[Tn]=nt[_e]=nt[Xe]=nt[Ct]=nt[En]=nt[St]=nt[Xt]=nt[Un]=nt[rr]=nt[ir]=nt[sr]=nt[Si]=!0,nt[lt]=nt[Je]=nt[kn]=!1;var x2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},$2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},E2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},k2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},C2=parseFloat,S2=parseInt,yf=typeof xt=="object"&&xt&&xt.Object===Object&&xt,T2=typeof self=="object"&&self&&self.Object===Object&&self,Tt=yf||T2||Function("return this")(),Ul=e&&!e.nodeType&&e,Yr=Ul&&!0&&t&&!t.nodeType&&t,bf=Yr&&Yr.exports===Ul,zl=bf&&yf.process,fn=function(){try{var P=Yr&&Yr.require&&Yr.require("util").types;return P||zl&&zl.binding&&zl.binding("util")}catch{}}(),_f=fn&&fn.isArrayBuffer,wf=fn&&fn.isDate,xf=fn&&fn.isMap,$f=fn&&fn.isRegExp,Ef=fn&&fn.isSet,kf=fn&&fn.isTypedArray;function en(P,F,D){switch(D.length){case 0:return P.call(F);case 1:return P.call(F,D[0]);case 2:return P.call(F,D[0],D[1]);case 3:return P.call(F,D[0],D[1],D[2])}return P.apply(F,D)}function A2(P,F,D,he){for(var Re=-1,Ve=P==null?0:P.length;++Re<Ve;){var _t=P[Re];F(he,_t,D(_t),P)}return he}function hn(P,F){for(var D=-1,he=P==null?0:P.length;++D<he&&F(P[D],D,P)!==!1;);return P}function R2(P,F){for(var D=P==null?0:P.length;D--&&F(P[D],D,P)!==!1;);return P}function Cf(P,F){for(var D=-1,he=P==null?0:P.length;++D<he;)if(!F(P[D],D,P))return!1;return!0}function kr(P,F){for(var D=-1,he=P==null?0:P.length,Re=0,Ve=[];++D<he;){var _t=P[D];F(_t,D,P)&&(Ve[Re++]=_t)}return Ve}function Eo(P,F){var D=P==null?0:P.length;return!!D&&Ai(P,F,0)>-1}function Fl(P,F,D){for(var he=-1,Re=P==null?0:P.length;++he<Re;)if(D(F,P[he]))return!0;return!1}function at(P,F){for(var D=-1,he=P==null?0:P.length,Re=Array(he);++D<he;)Re[D]=F(P[D],D,P);return Re}function Cr(P,F){for(var D=-1,he=F.length,Re=P.length;++D<he;)P[Re+D]=F[D];return P}function Hl(P,F,D,he){var Re=-1,Ve=P==null?0:P.length;for(he&&Ve&&(D=P[++Re]);++Re<Ve;)D=F(D,P[Re],Re,P);return D}function I2(P,F,D,he){var Re=P==null?0:P.length;for(he&&Re&&(D=P[--Re]);Re--;)D=F(D,P[Re],Re,P);return D}function ql(P,F){for(var D=-1,he=P==null?0:P.length;++D<he;)if(F(P[D],D,P))return!0;return!1}var O2=Wl("length");function L2(P){return P.split("")}function P2(P){return P.match(Fm)||[]}function Sf(P,F,D){var he;return D(P,function(Re,Ve,_t){if(F(Re,Ve,_t))return he=Ve,!1}),he}function ko(P,F,D,he){for(var Re=P.length,Ve=D+(he?1:-1);he?Ve--:++Ve<Re;)if(F(P[Ve],Ve,P))return Ve;return-1}function Ai(P,F,D){return F===F?Z2(P,F,D):ko(P,Tf,D)}function M2(P,F,D,he){for(var Re=D-1,Ve=P.length;++Re<Ve;)if(he(P[Re],F))return Re;return-1}function Tf(P){return P!==P}function Af(P,F){var D=P==null?0:P.length;return D?Kl(P,F)/D:ye}function Wl(P){return function(F){return F==null?n:F[P]}}function Zl(P){return function(F){return P==null?n:P[F]}}function Rf(P,F,D,he,Re){return Re(P,function(Ve,_t,et){D=he?(he=!1,Ve):F(D,Ve,_t,et)}),D}function B2(P,F){var D=P.length;for(P.sort(F);D--;)P[D]=P[D].value;return P}function Kl(P,F){for(var D,he=-1,Re=P.length;++he<Re;){var Ve=F(P[he]);Ve!==n&&(D=D===n?Ve:D+Ve)}return D}function Vl(P,F){for(var D=-1,he=Array(P);++D<P;)he[D]=F(D);return he}function j2(P,F){return at(F,function(D){return[D,P[D]]})}function If(P){return P&&P.slice(0,Mf(P)+1).replace(Pl,"")}function tn(P){return function(F){return P(F)}}function Gl(P,F){return at(F,function(D){return P[D]})}function ws(P,F){return P.has(F)}function Of(P,F){for(var D=-1,he=P.length;++D<he&&Ai(F,P[D],0)>-1;);return D}function Lf(P,F){for(var D=P.length;D--&&Ai(F,P[D],0)>-1;);return D}function N2(P,F){for(var D=P.length,he=0;D--;)P[D]===F&&++he;return he}var D2=Zl(x2),U2=Zl($2);function z2(P){return"\\"+k2[P]}function F2(P,F){return P==null?n:P[F]}function Ri(P){return y2.test(P)}function H2(P){return b2.test(P)}function q2(P){for(var F,D=[];!(F=P.next()).done;)D.push(F.value);return D}function Ql(P){var F=-1,D=Array(P.size);return P.forEach(function(he,Re){D[++F]=[Re,he]}),D}function Pf(P,F){return function(D){return P(F(D))}}function Sr(P,F){for(var D=-1,he=P.length,Re=0,Ve=[];++D<he;){var _t=P[D];(_t===F||_t===p)&&(P[D]=p,Ve[Re++]=D)}return Ve}function Co(P){var F=-1,D=Array(P.size);return P.forEach(function(he){D[++F]=he}),D}function W2(P){var F=-1,D=Array(P.size);return P.forEach(function(he){D[++F]=[he,he]}),D}function Z2(P,F,D){for(var he=D-1,Re=P.length;++he<Re;)if(P[he]===F)return he;return-1}function K2(P,F,D){for(var he=D+1;he--;)if(P[he]===F)return he;return he}function Ii(P){return Ri(P)?G2(P):O2(P)}function An(P){return Ri(P)?Q2(P):L2(P)}function Mf(P){for(var F=P.length;F--&&Nm.test(P.charAt(F)););return F}var V2=Zl(E2);function G2(P){for(var F=Dl.lastIndex=0;Dl.test(P);)++F;return F}function Q2(P){return P.match(Dl)||[]}function Y2(P){return P.match(m2)||[]}var J2=function P(F){F=F==null?Tt:Oi.defaults(Tt.Object(),F,Oi.pick(Tt,_2));var D=F.Array,he=F.Date,Re=F.Error,Ve=F.Function,_t=F.Math,et=F.Object,Yl=F.RegExp,X2=F.String,pn=F.TypeError,So=D.prototype,ey=Ve.prototype,Li=et.prototype,To=F["__core-js_shared__"],Ao=ey.toString,Ye=Li.hasOwnProperty,ty=0,Bf=function(){var r=/[^.]+$/.exec(To&&To.keys&&To.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Ro=Li.toString,ny=Ao.call(et),ry=Tt._,iy=Yl("^"+Ao.call(Ye).replace(Ll,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Io=bf?F.Buffer:n,Tr=F.Symbol,Oo=F.Uint8Array,jf=Io?Io.allocUnsafe:n,Lo=Pf(et.getPrototypeOf,et),Nf=et.create,Df=Li.propertyIsEnumerable,Po=So.splice,Uf=Tr?Tr.isConcatSpreadable:n,xs=Tr?Tr.iterator:n,Jr=Tr?Tr.toStringTag:n,Mo=function(){try{var r=ri(et,"defineProperty");return r({},"",{}),r}catch{}}(),sy=F.clearTimeout!==Tt.clearTimeout&&F.clearTimeout,oy=he&&he.now!==Tt.Date.now&&he.now,ay=F.setTimeout!==Tt.setTimeout&&F.setTimeout,Bo=_t.ceil,jo=_t.floor,Jl=et.getOwnPropertySymbols,ly=Io?Io.isBuffer:n,zf=F.isFinite,cy=So.join,uy=Pf(et.keys,et),wt=_t.max,Lt=_t.min,dy=he.now,fy=F.parseInt,Ff=_t.random,hy=So.reverse,Xl=ri(F,"DataView"),$s=ri(F,"Map"),ec=ri(F,"Promise"),Pi=ri(F,"Set"),Es=ri(F,"WeakMap"),ks=ri(et,"create"),No=Es&&new Es,Mi={},py=ii(Xl),gy=ii($s),vy=ii(ec),my=ii(Pi),yy=ii(Es),Do=Tr?Tr.prototype:n,Cs=Do?Do.valueOf:n,Hf=Do?Do.toString:n;function y(r){if(dt(r)&&!Oe(r)&&!(r instanceof qe)){if(r instanceof gn)return r;if(Ye.call(r,"__wrapped__"))return qh(r)}return new gn(r)}var Bi=function(){function r(){}return function(s){if(!ct(s))return{};if(Nf)return Nf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Uo(){}function gn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:Om,evaluate:Lm,interpolate:Yd,variable:"",imports:{_:y}},y.prototype=Uo.prototype,y.prototype.constructor=y,gn.prototype=Bi(Uo.prototype),gn.prototype.constructor=gn;function qe(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=be,this.__views__=[]}function by(){var r=new qe(this.__wrapped__);return r.__actions__=Zt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=Zt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=Zt(this.__views__),r}function _y(){if(this.__filtered__){var r=new qe(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function wy(){var r=this.__wrapped__.value(),s=this.__dir__,c=Oe(r),h=s<0,v=c?r.length:0,_=Lb(0,v,this.__views__),T=_.start,O=_.end,M=O-T,q=h?O:T-1,W=this.__iteratees__,G=W.length,ue=0,me=Lt(M,this.__takeCount__);if(!c||!h&&v==M&&me==M)return hh(r,this.__actions__);var ke=[];e:for(;M--&&ue<me;){q+=s;for(var Be=-1,Ce=r[q];++Be<G;){var Fe=W[Be],We=Fe.iteratee,sn=Fe.type,Dt=We(Ce);if(sn==j)Ce=Dt;else if(!Dt){if(sn==ee)continue e;break e}}ke[ue++]=Ce}return ke}qe.prototype=Bi(Uo.prototype),qe.prototype.constructor=qe;function Xr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function xy(){this.__data__=ks?ks(null):{},this.size=0}function $y(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Ey(r){var s=this.__data__;if(ks){var c=s[r];return c===d?n:c}return Ye.call(s,r)?s[r]:n}function ky(r){var s=this.__data__;return ks?s[r]!==n:Ye.call(s,r)}function Cy(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=ks&&s===n?d:s,this}Xr.prototype.clear=xy,Xr.prototype.delete=$y,Xr.prototype.get=Ey,Xr.prototype.has=ky,Xr.prototype.set=Cy;function or(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Sy(){this.__data__=[],this.size=0}function Ty(r){var s=this.__data__,c=zo(s,r);if(c<0)return!1;var h=s.length-1;return c==h?s.pop():Po.call(s,c,1),--this.size,!0}function Ay(r){var s=this.__data__,c=zo(s,r);return c<0?n:s[c][1]}function Ry(r){return zo(this.__data__,r)>-1}function Iy(r,s){var c=this.__data__,h=zo(c,r);return h<0?(++this.size,c.push([r,s])):c[h][1]=s,this}or.prototype.clear=Sy,or.prototype.delete=Ty,or.prototype.get=Ay,or.prototype.has=Ry,or.prototype.set=Iy;function ar(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Oy(){this.size=0,this.__data__={hash:new Xr,map:new($s||or),string:new Xr}}function Ly(r){var s=Xo(this,r).delete(r);return this.size-=s?1:0,s}function Py(r){return Xo(this,r).get(r)}function My(r){return Xo(this,r).has(r)}function By(r,s){var c=Xo(this,r),h=c.size;return c.set(r,s),this.size+=c.size==h?0:1,this}ar.prototype.clear=Oy,ar.prototype.delete=Ly,ar.prototype.get=Py,ar.prototype.has=My,ar.prototype.set=By;function ei(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new ar;++s<c;)this.add(r[s])}function jy(r){return this.__data__.set(r,d),this}function Ny(r){return this.__data__.has(r)}ei.prototype.add=ei.prototype.push=jy,ei.prototype.has=Ny;function Rn(r){var s=this.__data__=new or(r);this.size=s.size}function Dy(){this.__data__=new or,this.size=0}function Uy(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function zy(r){return this.__data__.get(r)}function Fy(r){return this.__data__.has(r)}function Hy(r,s){var c=this.__data__;if(c instanceof or){var h=c.__data__;if(!$s||h.length<o-1)return h.push([r,s]),this.size=++c.size,this;c=this.__data__=new ar(h)}return c.set(r,s),this.size=c.size,this}Rn.prototype.clear=Dy,Rn.prototype.delete=Uy,Rn.prototype.get=zy,Rn.prototype.has=Fy,Rn.prototype.set=Hy;function qf(r,s){var c=Oe(r),h=!c&&si(r),v=!c&&!h&&Lr(r),_=!c&&!h&&!v&&Ui(r),T=c||h||v||_,O=T?Vl(r.length,X2):[],M=O.length;for(var q in r)(s||Ye.call(r,q))&&!(T&&(q=="length"||v&&(q=="offset"||q=="parent")||_&&(q=="buffer"||q=="byteLength"||q=="byteOffset")||dr(q,M)))&&O.push(q);return O}function Wf(r){var s=r.length;return s?r[dc(0,s-1)]:n}function qy(r,s){return ea(Zt(r),ti(s,0,r.length))}function Wy(r){return ea(Zt(r))}function tc(r,s,c){(c!==n&&!In(r[s],c)||c===n&&!(s in r))&&lr(r,s,c)}function Ss(r,s,c){var h=r[s];(!(Ye.call(r,s)&&In(h,c))||c===n&&!(s in r))&&lr(r,s,c)}function zo(r,s){for(var c=r.length;c--;)if(In(r[c][0],s))return c;return-1}function Zy(r,s,c,h){return Ar(r,function(v,_,T){s(h,v,c(v),T)}),h}function Zf(r,s){return r&&Fn(s,$t(s),r)}function Ky(r,s){return r&&Fn(s,Vt(s),r)}function lr(r,s,c){s=="__proto__"&&Mo?Mo(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function nc(r,s){for(var c=-1,h=s.length,v=D(h),_=r==null;++c<h;)v[c]=_?n:Bc(r,s[c]);return v}function ti(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function vn(r,s,c,h,v,_){var T,O=s&g,M=s&m,q=s&w;if(c&&(T=v?c(r,h,v,_):c(r)),T!==n)return T;if(!ct(r))return r;var W=Oe(r);if(W){if(T=Mb(r),!O)return Zt(r,T)}else{var G=Pt(r),ue=G==Je||G==Y;if(Lr(r))return vh(r,O);if(G==Ct||G==ce||ue&&!v){if(T=M||ue?{}:Mh(r),!O)return M?Eb(r,Ky(T,r)):$b(r,Zf(T,r))}else{if(!nt[G])return v?r:{};T=Bb(r,G,O)}}_||(_=new Rn);var me=_.get(r);if(me)return me;_.set(r,T),up(r)?r.forEach(function(Ce){T.add(vn(Ce,s,c,Ce,r,_))}):lp(r)&&r.forEach(function(Ce,Fe){T.set(Fe,vn(Ce,s,c,Fe,r,_))});var ke=q?M?xc:wc:M?Vt:$t,Be=W?n:ke(r);return hn(Be||r,function(Ce,Fe){Be&&(Fe=Ce,Ce=r[Fe]),Ss(T,Fe,vn(Ce,s,c,Fe,r,_))}),T}function Vy(r){var s=$t(r);return function(c){return Kf(c,r,s)}}function Kf(r,s,c){var h=c.length;if(r==null)return!h;for(r=et(r);h--;){var v=c[h],_=s[v],T=r[v];if(T===n&&!(v in r)||!_(T))return!1}return!0}function Vf(r,s,c){if(typeof r!="function")throw new pn(l);return Ps(function(){r.apply(n,c)},s)}function Ts(r,s,c,h){var v=-1,_=Eo,T=!0,O=r.length,M=[],q=s.length;if(!O)return M;c&&(s=at(s,tn(c))),h?(_=Fl,T=!1):s.length>=o&&(_=ws,T=!1,s=new ei(s));e:for(;++v<O;){var W=r[v],G=c==null?W:c(W);if(W=h||W!==0?W:0,T&&G===G){for(var ue=q;ue--;)if(s[ue]===G)continue e;M.push(W)}else _(s,G,h)||M.push(W)}return M}var Ar=wh(zn),Gf=wh(ic,!0);function Gy(r,s){var c=!0;return Ar(r,function(h,v,_){return c=!!s(h,v,_),c}),c}function Fo(r,s,c){for(var h=-1,v=r.length;++h<v;){var _=r[h],T=s(_);if(T!=null&&(O===n?T===T&&!rn(T):c(T,O)))var O=T,M=_}return M}function Qy(r,s,c,h){var v=r.length;for(c=Pe(c),c<0&&(c=-c>v?0:v+c),h=h===n||h>v?v:Pe(h),h<0&&(h+=v),h=c>h?0:fp(h);c<h;)r[c++]=s;return r}function Qf(r,s){var c=[];return Ar(r,function(h,v,_){s(h,v,_)&&c.push(h)}),c}function At(r,s,c,h,v){var _=-1,T=r.length;for(c||(c=Nb),v||(v=[]);++_<T;){var O=r[_];s>0&&c(O)?s>1?At(O,s-1,c,h,v):Cr(v,O):h||(v[v.length]=O)}return v}var rc=xh(),Yf=xh(!0);function zn(r,s){return r&&rc(r,s,$t)}function ic(r,s){return r&&Yf(r,s,$t)}function Ho(r,s){return kr(s,function(c){return fr(r[c])})}function ni(r,s){s=Ir(s,r);for(var c=0,h=s.length;r!=null&&c<h;)r=r[Hn(s[c++])];return c&&c==h?r:n}function Jf(r,s,c){var h=s(r);return Oe(r)?h:Cr(h,c(r))}function jt(r){return r==null?r===n?Er:Jt:Jr&&Jr in et(r)?Ob(r):Wb(r)}function sc(r,s){return r>s}function Yy(r,s){return r!=null&&Ye.call(r,s)}function Jy(r,s){return r!=null&&s in et(r)}function Xy(r,s,c){return r>=Lt(s,c)&&r<wt(s,c)}function oc(r,s,c){for(var h=c?Fl:Eo,v=r[0].length,_=r.length,T=_,O=D(_),M=1/0,q=[];T--;){var W=r[T];T&&s&&(W=at(W,tn(s))),M=Lt(W.length,M),O[T]=!c&&(s||v>=120&&W.length>=120)?new ei(T&&W):n}W=r[0];var G=-1,ue=O[0];e:for(;++G<v&&q.length<M;){var me=W[G],ke=s?s(me):me;if(me=c||me!==0?me:0,!(ue?ws(ue,ke):h(q,ke,c))){for(T=_;--T;){var Be=O[T];if(!(Be?ws(Be,ke):h(r[T],ke,c)))continue e}ue&&ue.push(ke),q.push(me)}}return q}function eb(r,s,c,h){return zn(r,function(v,_,T){s(h,c(v),_,T)}),h}function As(r,s,c){s=Ir(s,r),r=Dh(r,s);var h=r==null?r:r[Hn(yn(s))];return h==null?n:en(h,r,c)}function Xf(r){return dt(r)&&jt(r)==ce}function tb(r){return dt(r)&&jt(r)==qt}function nb(r){return dt(r)&&jt(r)==de}function Rs(r,s,c,h,v){return r===s?!0:r==null||s==null||!dt(r)&&!dt(s)?r!==r&&s!==s:rb(r,s,c,h,Rs,v)}function rb(r,s,c,h,v,_){var T=Oe(r),O=Oe(s),M=T?z:Pt(r),q=O?z:Pt(s);M=M==ce?Ct:M,q=q==ce?Ct:q;var W=M==Ct,G=q==Ct,ue=M==q;if(ue&&Lr(r)){if(!Lr(s))return!1;T=!0,W=!1}if(ue&&!W)return _||(_=new Rn),T||Ui(r)?Oh(r,s,c,h,v,_):Rb(r,s,M,c,h,v,_);if(!(c&b)){var me=W&&Ye.call(r,"__wrapped__"),ke=G&&Ye.call(s,"__wrapped__");if(me||ke){var Be=me?r.value():r,Ce=ke?s.value():s;return _||(_=new Rn),v(Be,Ce,c,h,_)}}return ue?(_||(_=new Rn),Ib(r,s,c,h,v,_)):!1}function ib(r){return dt(r)&&Pt(r)==_e}function ac(r,s,c,h){var v=c.length,_=v,T=!h;if(r==null)return!_;for(r=et(r);v--;){var O=c[v];if(T&&O[2]?O[1]!==r[O[0]]:!(O[0]in r))return!1}for(;++v<_;){O=c[v];var M=O[0],q=r[M],W=O[1];if(T&&O[2]){if(q===n&&!(M in r))return!1}else{var G=new Rn;if(h)var ue=h(q,W,M,r,s,G);if(!(ue===n?Rs(W,q,b|x,h,G):ue))return!1}}return!0}function eh(r){if(!ct(r)||Ub(r))return!1;var s=fr(r)?iy:Vm;return s.test(ii(r))}function sb(r){return dt(r)&&jt(r)==En}function ob(r){return dt(r)&&Pt(r)==St}function ab(r){return dt(r)&&oa(r.length)&&!!st[jt(r)]}function th(r){return typeof r=="function"?r:r==null?Gt:typeof r=="object"?Oe(r)?ih(r[0],r[1]):rh(r):$p(r)}function lc(r){if(!Ls(r))return uy(r);var s=[];for(var c in et(r))Ye.call(r,c)&&c!="constructor"&&s.push(c);return s}function lb(r){if(!ct(r))return qb(r);var s=Ls(r),c=[];for(var h in r)h=="constructor"&&(s||!Ye.call(r,h))||c.push(h);return c}function cc(r,s){return r<s}function nh(r,s){var c=-1,h=Kt(r)?D(r.length):[];return Ar(r,function(v,_,T){h[++c]=s(v,_,T)}),h}function rh(r){var s=Ec(r);return s.length==1&&s[0][2]?jh(s[0][0],s[0][1]):function(c){return c===r||ac(c,r,s)}}function ih(r,s){return Cc(r)&&Bh(s)?jh(Hn(r),s):function(c){var h=Bc(c,r);return h===n&&h===s?jc(c,r):Rs(s,h,b|x)}}function qo(r,s,c,h,v){r!==s&&rc(s,function(_,T){if(v||(v=new Rn),ct(_))cb(r,s,T,c,qo,h,v);else{var O=h?h(Tc(r,T),_,T+"",r,s,v):n;O===n&&(O=_),tc(r,T,O)}},Vt)}function cb(r,s,c,h,v,_,T){var O=Tc(r,c),M=Tc(s,c),q=T.get(M);if(q){tc(r,c,q);return}var W=_?_(O,M,c+"",r,s,T):n,G=W===n;if(G){var ue=Oe(M),me=!ue&&Lr(M),ke=!ue&&!me&&Ui(M);W=M,ue||me||ke?Oe(O)?W=O:ht(O)?W=Zt(O):me?(G=!1,W=vh(M,!0)):ke?(G=!1,W=mh(M,!0)):W=[]:Ms(M)||si(M)?(W=O,si(O)?W=hp(O):(!ct(O)||fr(O))&&(W=Mh(M))):G=!1}G&&(T.set(M,W),v(W,M,h,_,T),T.delete(M)),tc(r,c,W)}function sh(r,s){var c=r.length;if(c)return s+=s<0?c:0,dr(s,c)?r[s]:n}function oh(r,s,c){s.length?s=at(s,function(_){return Oe(_)?function(T){return ni(T,_.length===1?_[0]:_)}:_}):s=[Gt];var h=-1;s=at(s,tn(xe()));var v=nh(r,function(_,T,O){var M=at(s,function(q){return q(_)});return{criteria:M,index:++h,value:_}});return B2(v,function(_,T){return xb(_,T,c)})}function ub(r,s){return ah(r,s,function(c,h){return jc(r,h)})}function ah(r,s,c){for(var h=-1,v=s.length,_={};++h<v;){var T=s[h],O=ni(r,T);c(O,T)&&Is(_,Ir(T,r),O)}return _}function db(r){return function(s){return ni(s,r)}}function uc(r,s,c,h){var v=h?M2:Ai,_=-1,T=s.length,O=r;for(r===s&&(s=Zt(s)),c&&(O=at(r,tn(c)));++_<T;)for(var M=0,q=s[_],W=c?c(q):q;(M=v(O,W,M,h))>-1;)O!==r&&Po.call(O,M,1),Po.call(r,M,1);return r}function lh(r,s){for(var c=r?s.length:0,h=c-1;c--;){var v=s[c];if(c==h||v!==_){var _=v;dr(v)?Po.call(r,v,1):pc(r,v)}}return r}function dc(r,s){return r+jo(Ff()*(s-r+1))}function fb(r,s,c,h){for(var v=-1,_=wt(Bo((s-r)/(c||1)),0),T=D(_);_--;)T[h?_:++v]=r,r+=c;return T}function fc(r,s){var c="";if(!r||s<1||s>le)return c;do s%2&&(c+=r),s=jo(s/2),s&&(r+=r);while(s);return c}function De(r,s){return Ac(Nh(r,s,Gt),r+"")}function hb(r){return Wf(zi(r))}function pb(r,s){var c=zi(r);return ea(c,ti(s,0,c.length))}function Is(r,s,c,h){if(!ct(r))return r;s=Ir(s,r);for(var v=-1,_=s.length,T=_-1,O=r;O!=null&&++v<_;){var M=Hn(s[v]),q=c;if(M==="__proto__"||M==="constructor"||M==="prototype")return r;if(v!=T){var W=O[M];q=h?h(W,M,O):n,q===n&&(q=ct(W)?W:dr(s[v+1])?[]:{})}Ss(O,M,q),O=O[M]}return r}var ch=No?function(r,s){return No.set(r,s),r}:Gt,gb=Mo?function(r,s){return Mo(r,"toString",{configurable:!0,enumerable:!1,value:Dc(s),writable:!0})}:Gt;function vb(r){return ea(zi(r))}function mn(r,s,c){var h=-1,v=r.length;s<0&&(s=-s>v?0:v+s),c=c>v?v:c,c<0&&(c+=v),v=s>c?0:c-s>>>0,s>>>=0;for(var _=D(v);++h<v;)_[h]=r[h+s];return _}function mb(r,s){var c;return Ar(r,function(h,v,_){return c=s(h,v,_),!c}),!!c}function Wo(r,s,c){var h=0,v=r==null?h:r.length;if(typeof s=="number"&&s===s&&v<=ie){for(;h<v;){var _=h+v>>>1,T=r[_];T!==null&&!rn(T)&&(c?T<=s:T<s)?h=_+1:v=_}return v}return hc(r,s,Gt,c)}function hc(r,s,c,h){var v=0,_=r==null?0:r.length;if(_===0)return 0;s=c(s);for(var T=s!==s,O=s===null,M=rn(s),q=s===n;v<_;){var W=jo((v+_)/2),G=c(r[W]),ue=G!==n,me=G===null,ke=G===G,Be=rn(G);if(T)var Ce=h||ke;else q?Ce=ke&&(h||ue):O?Ce=ke&&ue&&(h||!me):M?Ce=ke&&ue&&!me&&(h||!Be):me||Be?Ce=!1:Ce=h?G<=s:G<s;Ce?v=W+1:_=W}return Lt(_,Ee)}function uh(r,s){for(var c=-1,h=r.length,v=0,_=[];++c<h;){var T=r[c],O=s?s(T):T;if(!c||!In(O,M)){var M=O;_[v++]=T===0?0:T}}return _}function dh(r){return typeof r=="number"?r:rn(r)?ye:+r}function nn(r){if(typeof r=="string")return r;if(Oe(r))return at(r,nn)+"";if(rn(r))return Hf?Hf.call(r):"";var s=r+"";return s=="0"&&1/r==-te?"-0":s}function Rr(r,s,c){var h=-1,v=Eo,_=r.length,T=!0,O=[],M=O;if(c)T=!1,v=Fl;else if(_>=o){var q=s?null:Tb(r);if(q)return Co(q);T=!1,v=ws,M=new ei}else M=s?[]:O;e:for(;++h<_;){var W=r[h],G=s?s(W):W;if(W=c||W!==0?W:0,T&&G===G){for(var ue=M.length;ue--;)if(M[ue]===G)continue e;s&&M.push(G),O.push(W)}else v(M,G,c)||(M!==O&&M.push(G),O.push(W))}return O}function pc(r,s){return s=Ir(s,r),r=Dh(r,s),r==null||delete r[Hn(yn(s))]}function fh(r,s,c,h){return Is(r,s,c(ni(r,s)),h)}function Zo(r,s,c,h){for(var v=r.length,_=h?v:-1;(h?_--:++_<v)&&s(r[_],_,r););return c?mn(r,h?0:_,h?_+1:v):mn(r,h?_+1:0,h?v:_)}function hh(r,s){var c=r;return c instanceof qe&&(c=c.value()),Hl(s,function(h,v){return v.func.apply(v.thisArg,Cr([h],v.args))},c)}function gc(r,s,c){var h=r.length;if(h<2)return h?Rr(r[0]):[];for(var v=-1,_=D(h);++v<h;)for(var T=r[v],O=-1;++O<h;)O!=v&&(_[v]=Ts(_[v]||T,r[O],s,c));return Rr(At(_,1),s,c)}function ph(r,s,c){for(var h=-1,v=r.length,_=s.length,T={};++h<v;){var O=h<_?s[h]:n;c(T,r[h],O)}return T}function vc(r){return ht(r)?r:[]}function mc(r){return typeof r=="function"?r:Gt}function Ir(r,s){return Oe(r)?r:Cc(r,s)?[r]:Hh(Qe(r))}var yb=De;function Or(r,s,c){var h=r.length;return c=c===n?h:c,!s&&c>=h?r:mn(r,s,c)}var gh=sy||function(r){return Tt.clearTimeout(r)};function vh(r,s){if(s)return r.slice();var c=r.length,h=jf?jf(c):new r.constructor(c);return r.copy(h),h}function yc(r){var s=new r.constructor(r.byteLength);return new Oo(s).set(new Oo(r)),s}function bb(r,s){var c=s?yc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function _b(r){var s=new r.constructor(r.source,Jd.exec(r));return s.lastIndex=r.lastIndex,s}function wb(r){return Cs?et(Cs.call(r)):{}}function mh(r,s){var c=s?yc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function yh(r,s){if(r!==s){var c=r!==n,h=r===null,v=r===r,_=rn(r),T=s!==n,O=s===null,M=s===s,q=rn(s);if(!O&&!q&&!_&&r>s||_&&T&&M&&!O&&!q||h&&T&&M||!c&&M||!v)return 1;if(!h&&!_&&!q&&r<s||q&&c&&v&&!h&&!_||O&&c&&v||!T&&v||!M)return-1}return 0}function xb(r,s,c){for(var h=-1,v=r.criteria,_=s.criteria,T=v.length,O=c.length;++h<T;){var M=yh(v[h],_[h]);if(M){if(h>=O)return M;var q=c[h];return M*(q=="desc"?-1:1)}}return r.index-s.index}function bh(r,s,c,h){for(var v=-1,_=r.length,T=c.length,O=-1,M=s.length,q=wt(_-T,0),W=D(M+q),G=!h;++O<M;)W[O]=s[O];for(;++v<T;)(G||v<_)&&(W[c[v]]=r[v]);for(;q--;)W[O++]=r[v++];return W}function _h(r,s,c,h){for(var v=-1,_=r.length,T=-1,O=c.length,M=-1,q=s.length,W=wt(_-O,0),G=D(W+q),ue=!h;++v<W;)G[v]=r[v];for(var me=v;++M<q;)G[me+M]=s[M];for(;++T<O;)(ue||v<_)&&(G[me+c[T]]=r[v++]);return G}function Zt(r,s){var c=-1,h=r.length;for(s||(s=D(h));++c<h;)s[c]=r[c];return s}function Fn(r,s,c,h){var v=!c;c||(c={});for(var _=-1,T=s.length;++_<T;){var O=s[_],M=h?h(c[O],r[O],O,c,r):n;M===n&&(M=r[O]),v?lr(c,O,M):Ss(c,O,M)}return c}function $b(r,s){return Fn(r,kc(r),s)}function Eb(r,s){return Fn(r,Lh(r),s)}function Ko(r,s){return function(c,h){var v=Oe(c)?A2:Zy,_=s?s():{};return v(c,r,xe(h,2),_)}}function ji(r){return De(function(s,c){var h=-1,v=c.length,_=v>1?c[v-1]:n,T=v>2?c[2]:n;for(_=r.length>3&&typeof _=="function"?(v--,_):n,T&&Nt(c[0],c[1],T)&&(_=v<3?n:_,v=1),s=et(s);++h<v;){var O=c[h];O&&r(s,O,h,_)}return s})}function wh(r,s){return function(c,h){if(c==null)return c;if(!Kt(c))return r(c,h);for(var v=c.length,_=s?v:-1,T=et(c);(s?_--:++_<v)&&h(T[_],_,T)!==!1;);return c}}function xh(r){return function(s,c,h){for(var v=-1,_=et(s),T=h(s),O=T.length;O--;){var M=T[r?O:++v];if(c(_[M],M,_)===!1)break}return s}}function kb(r,s,c){var h=s&$,v=Os(r);function _(){var T=this&&this!==Tt&&this instanceof _?v:r;return T.apply(h?c:this,arguments)}return _}function $h(r){return function(s){s=Qe(s);var c=Ri(s)?An(s):n,h=c?c[0]:s.charAt(0),v=c?Or(c,1).join(""):s.slice(1);return h[r]()+v}}function Ni(r){return function(s){return Hl(wp(_p(s).replace(g2,"")),r,"")}}function Os(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=Bi(r.prototype),h=r.apply(c,s);return ct(h)?h:c}}function Cb(r,s,c){var h=Os(r);function v(){for(var _=arguments.length,T=D(_),O=_,M=Di(v);O--;)T[O]=arguments[O];var q=_<3&&T[0]!==M&&T[_-1]!==M?[]:Sr(T,M);if(_-=q.length,_<c)return Th(r,s,Vo,v.placeholder,n,T,q,n,n,c-_);var W=this&&this!==Tt&&this instanceof v?h:r;return en(W,this,T)}return v}function Eh(r){return function(s,c,h){var v=et(s);if(!Kt(s)){var _=xe(c,3);s=$t(s),c=function(O){return _(v[O],O,v)}}var T=r(s,c,h);return T>-1?v[_?s[T]:T]:n}}function kh(r){return ur(function(s){var c=s.length,h=c,v=gn.prototype.thru;for(r&&s.reverse();h--;){var _=s[h];if(typeof _!="function")throw new pn(l);if(v&&!T&&Jo(_)=="wrapper")var T=new gn([],!0)}for(h=T?h:c;++h<c;){_=s[h];var O=Jo(_),M=O=="wrapper"?$c(_):n;M&&Sc(M[0])&&M[1]==(U|E|L|N)&&!M[4].length&&M[9]==1?T=T[Jo(M[0])].apply(T,M[3]):T=_.length==1&&Sc(_)?T[O]():T.thru(_)}return function(){var q=arguments,W=q[0];if(T&&q.length==1&&Oe(W))return T.plant(W).value();for(var G=0,ue=c?s[G].apply(this,q):W;++G<c;)ue=s[G].call(this,ue);return ue}})}function Vo(r,s,c,h,v,_,T,O,M,q){var W=s&U,G=s&$,ue=s&C,me=s&(E|A),ke=s&Z,Be=ue?n:Os(r);function Ce(){for(var Fe=arguments.length,We=D(Fe),sn=Fe;sn--;)We[sn]=arguments[sn];if(me)var Dt=Di(Ce),on=N2(We,Dt);if(h&&(We=bh(We,h,v,me)),_&&(We=_h(We,_,T,me)),Fe-=on,me&&Fe<q){var pt=Sr(We,Dt);return Th(r,s,Vo,Ce.placeholder,c,We,pt,O,M,q-Fe)}var On=G?c:this,pr=ue?On[r]:r;return Fe=We.length,O?We=Zb(We,O):ke&&Fe>1&&We.reverse(),W&&M<Fe&&(We.length=M),this&&this!==Tt&&this instanceof Ce&&(pr=Be||Os(pr)),pr.apply(On,We)}return Ce}function Ch(r,s){return function(c,h){return eb(c,r,s(h),{})}}function Go(r,s){return function(c,h){var v;if(c===n&&h===n)return s;if(c!==n&&(v=c),h!==n){if(v===n)return h;typeof c=="string"||typeof h=="string"?(c=nn(c),h=nn(h)):(c=dh(c),h=dh(h)),v=r(c,h)}return v}}function bc(r){return ur(function(s){return s=at(s,tn(xe())),De(function(c){var h=this;return r(s,function(v){return en(v,h,c)})})})}function Qo(r,s){s=s===n?" ":nn(s);var c=s.length;if(c<2)return c?fc(s,r):s;var h=fc(s,Bo(r/Ii(s)));return Ri(s)?Or(An(h),0,r).join(""):h.slice(0,r)}function Sb(r,s,c,h){var v=s&$,_=Os(r);function T(){for(var O=-1,M=arguments.length,q=-1,W=h.length,G=D(W+M),ue=this&&this!==Tt&&this instanceof T?_:r;++q<W;)G[q]=h[q];for(;M--;)G[q++]=arguments[++O];return en(ue,v?c:this,G)}return T}function Sh(r){return function(s,c,h){return h&&typeof h!="number"&&Nt(s,c,h)&&(c=h=n),s=hr(s),c===n?(c=s,s=0):c=hr(c),h=h===n?s<c?1:-1:hr(h),fb(s,c,h,r)}}function Yo(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=bn(s),c=bn(c)),r(s,c)}}function Th(r,s,c,h,v,_,T,O,M,q){var W=s&E,G=W?T:n,ue=W?n:T,me=W?_:n,ke=W?n:_;s|=W?L:R,s&=~(W?R:L),s&I||(s&=~($|C));var Be=[r,s,v,me,G,ke,ue,O,M,q],Ce=c.apply(n,Be);return Sc(r)&&Uh(Ce,Be),Ce.placeholder=h,zh(Ce,r,s)}function _c(r){var s=_t[r];return function(c,h){if(c=bn(c),h=h==null?0:Lt(Pe(h),292),h&&zf(c)){var v=(Qe(c)+"e").split("e"),_=s(v[0]+"e"+(+v[1]+h));return v=(Qe(_)+"e").split("e"),+(v[0]+"e"+(+v[1]-h))}return s(c)}}var Tb=Pi&&1/Co(new Pi([,-0]))[1]==te?function(r){return new Pi(r)}:Fc;function Ah(r){return function(s){var c=Pt(s);return c==_e?Ql(s):c==St?W2(s):j2(s,r(s))}}function cr(r,s,c,h,v,_,T,O){var M=s&C;if(!M&&typeof r!="function")throw new pn(l);var q=h?h.length:0;if(q||(s&=~(L|R),h=v=n),T=T===n?T:wt(Pe(T),0),O=O===n?O:Pe(O),q-=v?v.length:0,s&R){var W=h,G=v;h=v=n}var ue=M?n:$c(r),me=[r,s,c,h,v,W,G,_,T,O];if(ue&&Hb(me,ue),r=me[0],s=me[1],c=me[2],h=me[3],v=me[4],O=me[9]=me[9]===n?M?0:r.length:wt(me[9]-q,0),!O&&s&(E|A)&&(s&=~(E|A)),!s||s==$)var ke=kb(r,s,c);else s==E||s==A?ke=Cb(r,s,O):(s==L||s==($|L))&&!v.length?ke=Sb(r,s,c,h):ke=Vo.apply(n,me);var Be=ue?ch:Uh;return zh(Be(ke,me),r,s)}function Rh(r,s,c,h){return r===n||In(r,Li[c])&&!Ye.call(h,c)?s:r}function Ih(r,s,c,h,v,_){return ct(r)&&ct(s)&&(_.set(s,r),qo(r,s,n,Ih,_),_.delete(s)),r}function Ab(r){return Ms(r)?n:r}function Oh(r,s,c,h,v,_){var T=c&b,O=r.length,M=s.length;if(O!=M&&!(T&&M>O))return!1;var q=_.get(r),W=_.get(s);if(q&&W)return q==s&&W==r;var G=-1,ue=!0,me=c&x?new ei:n;for(_.set(r,s),_.set(s,r);++G<O;){var ke=r[G],Be=s[G];if(h)var Ce=T?h(Be,ke,G,s,r,_):h(ke,Be,G,r,s,_);if(Ce!==n){if(Ce)continue;ue=!1;break}if(me){if(!ql(s,function(Fe,We){if(!ws(me,We)&&(ke===Fe||v(ke,Fe,c,h,_)))return me.push(We)})){ue=!1;break}}else if(!(ke===Be||v(ke,Be,c,h,_))){ue=!1;break}}return _.delete(r),_.delete(s),ue}function Rb(r,s,c,h,v,_,T){switch(c){case Wt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case qt:return!(r.byteLength!=s.byteLength||!_(new Oo(r),new Oo(s)));case H:case de:case Xe:return In(+r,+s);case lt:return r.name==s.name&&r.message==s.message;case En:case Xt:return r==s+"";case _e:var O=Ql;case St:var M=h&b;if(O||(O=Co),r.size!=s.size&&!M)return!1;var q=T.get(r);if(q)return q==s;h|=x,T.set(r,s);var W=Oh(O(r),O(s),h,v,_,T);return T.delete(r),W;case Un:if(Cs)return Cs.call(r)==Cs.call(s)}return!1}function Ib(r,s,c,h,v,_){var T=c&b,O=wc(r),M=O.length,q=wc(s),W=q.length;if(M!=W&&!T)return!1;for(var G=M;G--;){var ue=O[G];if(!(T?ue in s:Ye.call(s,ue)))return!1}var me=_.get(r),ke=_.get(s);if(me&&ke)return me==s&&ke==r;var Be=!0;_.set(r,s),_.set(s,r);for(var Ce=T;++G<M;){ue=O[G];var Fe=r[ue],We=s[ue];if(h)var sn=T?h(We,Fe,ue,s,r,_):h(Fe,We,ue,r,s,_);if(!(sn===n?Fe===We||v(Fe,We,c,h,_):sn)){Be=!1;break}Ce||(Ce=ue=="constructor")}if(Be&&!Ce){var Dt=r.constructor,on=s.constructor;Dt!=on&&"constructor"in r&&"constructor"in s&&!(typeof Dt=="function"&&Dt instanceof Dt&&typeof on=="function"&&on instanceof on)&&(Be=!1)}return _.delete(r),_.delete(s),Be}function ur(r){return Ac(Nh(r,n,Kh),r+"")}function wc(r){return Jf(r,$t,kc)}function xc(r){return Jf(r,Vt,Lh)}var $c=No?function(r){return No.get(r)}:Fc;function Jo(r){for(var s=r.name+"",c=Mi[s],h=Ye.call(Mi,s)?c.length:0;h--;){var v=c[h],_=v.func;if(_==null||_==r)return v.name}return s}function Di(r){var s=Ye.call(y,"placeholder")?y:r;return s.placeholder}function xe(){var r=y.iteratee||Uc;return r=r===Uc?th:r,arguments.length?r(arguments[0],arguments[1]):r}function Xo(r,s){var c=r.__data__;return Db(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Ec(r){for(var s=$t(r),c=s.length;c--;){var h=s[c],v=r[h];s[c]=[h,v,Bh(v)]}return s}function ri(r,s){var c=F2(r,s);return eh(c)?c:n}function Ob(r){var s=Ye.call(r,Jr),c=r[Jr];try{r[Jr]=n;var h=!0}catch{}var v=Ro.call(r);return h&&(s?r[Jr]=c:delete r[Jr]),v}var kc=Jl?function(r){return r==null?[]:(r=et(r),kr(Jl(r),function(s){return Df.call(r,s)}))}:Hc,Lh=Jl?function(r){for(var s=[];r;)Cr(s,kc(r)),r=Lo(r);return s}:Hc,Pt=jt;(Xl&&Pt(new Xl(new ArrayBuffer(1)))!=Wt||$s&&Pt(new $s)!=_e||ec&&Pt(ec.resolve())!=Ht||Pi&&Pt(new Pi)!=St||Es&&Pt(new Es)!=kn)&&(Pt=function(r){var s=jt(r),c=s==Ct?r.constructor:n,h=c?ii(c):"";if(h)switch(h){case py:return Wt;case gy:return _e;case vy:return Ht;case my:return St;case yy:return kn}return s});function Lb(r,s,c){for(var h=-1,v=c.length;++h<v;){var _=c[h],T=_.size;switch(_.type){case"drop":r+=T;break;case"dropRight":s-=T;break;case"take":s=Lt(s,r+T);break;case"takeRight":r=wt(r,s-T);break}}return{start:r,end:s}}function Pb(r){var s=r.match(Um);return s?s[1].split(zm):[]}function Ph(r,s,c){s=Ir(s,r);for(var h=-1,v=s.length,_=!1;++h<v;){var T=Hn(s[h]);if(!(_=r!=null&&c(r,T)))break;r=r[T]}return _||++h!=v?_:(v=r==null?0:r.length,!!v&&oa(v)&&dr(T,v)&&(Oe(r)||si(r)))}function Mb(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Ye.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Mh(r){return typeof r.constructor=="function"&&!Ls(r)?Bi(Lo(r)):{}}function Bb(r,s,c){var h=r.constructor;switch(s){case qt:return yc(r);case H:case de:return new h(+r);case Wt:return bb(r,c);case Cn:case Sn:case un:case dn:case Tn:case rr:case ir:case sr:case Si:return mh(r,c);case _e:return new h;case Xe:case Xt:return new h(r);case En:return _b(r);case St:return new h;case Un:return wb(r)}}function jb(r,s){var c=s.length;if(!c)return r;var h=c-1;return s[h]=(c>1?"& ":"")+s[h],s=s.join(c>2?", ":" "),r.replace(Dm,`{
/* [wrapped with `+s+`] */
`)}function Nb(r){return Oe(r)||si(r)||!!(Uf&&r&&r[Uf])}function dr(r,s){var c=typeof r;return s=s??le,!!s&&(c=="number"||c!="symbol"&&Qm.test(r))&&r>-1&&r%1==0&&r<s}function Nt(r,s,c){if(!ct(c))return!1;var h=typeof s;return(h=="number"?Kt(c)&&dr(s,c.length):h=="string"&&s in c)?In(c[s],r):!1}function Cc(r,s){if(Oe(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||rn(r)?!0:Mm.test(r)||!Pm.test(r)||s!=null&&r in et(s)}function Db(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Sc(r){var s=Jo(r),c=y[s];if(typeof c!="function"||!(s in qe.prototype))return!1;if(r===c)return!0;var h=$c(c);return!!h&&r===h[0]}function Ub(r){return!!Bf&&Bf in r}var zb=To?fr:qc;function Ls(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Li;return r===c}function Bh(r){return r===r&&!ct(r)}function jh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in et(c))}}function Fb(r){var s=ia(r,function(h){return c.size===f&&c.clear(),h}),c=s.cache;return s}function Hb(r,s){var c=r[1],h=s[1],v=c|h,_=v<($|C|U),T=h==U&&c==E||h==U&&c==N&&r[7].length<=s[8]||h==(U|N)&&s[7].length<=s[8]&&c==E;if(!(_||T))return r;h&$&&(r[2]=s[2],v|=c&$?0:I);var O=s[3];if(O){var M=r[3];r[3]=M?bh(M,O,s[4]):O,r[4]=M?Sr(r[3],p):s[4]}return O=s[5],O&&(M=r[5],r[5]=M?_h(M,O,s[6]):O,r[6]=M?Sr(r[5],p):s[6]),O=s[7],O&&(r[7]=O),h&U&&(r[8]=r[8]==null?s[8]:Lt(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=v,r}function qb(r){var s=[];if(r!=null)for(var c in et(r))s.push(c);return s}function Wb(r){return Ro.call(r)}function Nh(r,s,c){return s=wt(s===n?r.length-1:s,0),function(){for(var h=arguments,v=-1,_=wt(h.length-s,0),T=D(_);++v<_;)T[v]=h[s+v];v=-1;for(var O=D(s+1);++v<s;)O[v]=h[v];return O[s]=c(T),en(r,this,O)}}function Dh(r,s){return s.length<2?r:ni(r,mn(s,0,-1))}function Zb(r,s){for(var c=r.length,h=Lt(s.length,c),v=Zt(r);h--;){var _=s[h];r[h]=dr(_,c)?v[_]:n}return r}function Tc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Uh=Fh(ch),Ps=ay||function(r,s){return Tt.setTimeout(r,s)},Ac=Fh(gb);function zh(r,s,c){var h=s+"";return Ac(r,jb(h,Kb(Pb(h),c)))}function Fh(r){var s=0,c=0;return function(){var h=dy(),v=ae-(h-c);if(c=h,v>0){if(++s>=se)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ea(r,s){var c=-1,h=r.length,v=h-1;for(s=s===n?h:s;++c<s;){var _=dc(c,v),T=r[_];r[_]=r[c],r[c]=T}return r.length=s,r}var Hh=Fb(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Bm,function(c,h,v,_){s.push(v?_.replace(qm,"$1"):h||c)}),s});function Hn(r){if(typeof r=="string"||rn(r))return r;var s=r+"";return s=="0"&&1/r==-te?"-0":s}function ii(r){if(r!=null){try{return Ao.call(r)}catch{}try{return r+""}catch{}}return""}function Kb(r,s){return hn(X,function(c){var h="_."+c[0];s&c[1]&&!Eo(r,h)&&r.push(h)}),r.sort()}function qh(r){if(r instanceof qe)return r.clone();var s=new gn(r.__wrapped__,r.__chain__);return s.__actions__=Zt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function Vb(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=wt(Pe(s),0);var h=r==null?0:r.length;if(!h||s<1)return[];for(var v=0,_=0,T=D(Bo(h/s));v<h;)T[_++]=mn(r,v,v+=s);return T}function Gb(r){for(var s=-1,c=r==null?0:r.length,h=0,v=[];++s<c;){var _=r[s];_&&(v[h++]=_)}return v}function Qb(){var r=arguments.length;if(!r)return[];for(var s=D(r-1),c=arguments[0],h=r;h--;)s[h-1]=arguments[h];return Cr(Oe(c)?Zt(c):[c],At(s,1))}var Yb=De(function(r,s){return ht(r)?Ts(r,At(s,1,ht,!0)):[]}),Jb=De(function(r,s){var c=yn(s);return ht(c)&&(c=n),ht(r)?Ts(r,At(s,1,ht,!0),xe(c,2)):[]}),Xb=De(function(r,s){var c=yn(s);return ht(c)&&(c=n),ht(r)?Ts(r,At(s,1,ht,!0),n,c):[]});function e_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Pe(s),mn(r,s<0?0:s,h)):[]}function t_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Pe(s),s=h-s,mn(r,0,s<0?0:s)):[]}function n_(r,s){return r&&r.length?Zo(r,xe(s,3),!0,!0):[]}function r_(r,s){return r&&r.length?Zo(r,xe(s,3),!0):[]}function i_(r,s,c,h){var v=r==null?0:r.length;return v?(c&&typeof c!="number"&&Nt(r,s,c)&&(c=0,h=v),Qy(r,s,c,h)):[]}function Wh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=c==null?0:Pe(c);return v<0&&(v=wt(h+v,0)),ko(r,xe(s,3),v)}function Zh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=h-1;return c!==n&&(v=Pe(c),v=c<0?wt(h+v,0):Lt(v,h-1)),ko(r,xe(s,3),v,!0)}function Kh(r){var s=r==null?0:r.length;return s?At(r,1):[]}function s_(r){var s=r==null?0:r.length;return s?At(r,te):[]}function o_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Pe(s),At(r,s)):[]}function a_(r){for(var s=-1,c=r==null?0:r.length,h={};++s<c;){var v=r[s];h[v[0]]=v[1]}return h}function Vh(r){return r&&r.length?r[0]:n}function l_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=c==null?0:Pe(c);return v<0&&(v=wt(h+v,0)),Ai(r,s,v)}function c_(r){var s=r==null?0:r.length;return s?mn(r,0,-1):[]}var u_=De(function(r){var s=at(r,vc);return s.length&&s[0]===r[0]?oc(s):[]}),d_=De(function(r){var s=yn(r),c=at(r,vc);return s===yn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?oc(c,xe(s,2)):[]}),f_=De(function(r){var s=yn(r),c=at(r,vc);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?oc(c,n,s):[]});function h_(r,s){return r==null?"":cy.call(r,s)}function yn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function p_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var v=h;return c!==n&&(v=Pe(c),v=v<0?wt(h+v,0):Lt(v,h-1)),s===s?K2(r,s,v):ko(r,Tf,v,!0)}function g_(r,s){return r&&r.length?sh(r,Pe(s)):n}var v_=De(Gh);function Gh(r,s){return r&&r.length&&s&&s.length?uc(r,s):r}function m_(r,s,c){return r&&r.length&&s&&s.length?uc(r,s,xe(c,2)):r}function y_(r,s,c){return r&&r.length&&s&&s.length?uc(r,s,n,c):r}var b_=ur(function(r,s){var c=r==null?0:r.length,h=nc(r,s);return lh(r,at(s,function(v){return dr(v,c)?+v:v}).sort(yh)),h});function __(r,s){var c=[];if(!(r&&r.length))return c;var h=-1,v=[],_=r.length;for(s=xe(s,3);++h<_;){var T=r[h];s(T,h,r)&&(c.push(T),v.push(h))}return lh(r,v),c}function Rc(r){return r==null?r:hy.call(r)}function w_(r,s,c){var h=r==null?0:r.length;return h?(c&&typeof c!="number"&&Nt(r,s,c)?(s=0,c=h):(s=s==null?0:Pe(s),c=c===n?h:Pe(c)),mn(r,s,c)):[]}function x_(r,s){return Wo(r,s)}function $_(r,s,c){return hc(r,s,xe(c,2))}function E_(r,s){var c=r==null?0:r.length;if(c){var h=Wo(r,s);if(h<c&&In(r[h],s))return h}return-1}function k_(r,s){return Wo(r,s,!0)}function C_(r,s,c){return hc(r,s,xe(c,2),!0)}function S_(r,s){var c=r==null?0:r.length;if(c){var h=Wo(r,s,!0)-1;if(In(r[h],s))return h}return-1}function T_(r){return r&&r.length?uh(r):[]}function A_(r,s){return r&&r.length?uh(r,xe(s,2)):[]}function R_(r){var s=r==null?0:r.length;return s?mn(r,1,s):[]}function I_(r,s,c){return r&&r.length?(s=c||s===n?1:Pe(s),mn(r,0,s<0?0:s)):[]}function O_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Pe(s),s=h-s,mn(r,s<0?0:s,h)):[]}function L_(r,s){return r&&r.length?Zo(r,xe(s,3),!1,!0):[]}function P_(r,s){return r&&r.length?Zo(r,xe(s,3)):[]}var M_=De(function(r){return Rr(At(r,1,ht,!0))}),B_=De(function(r){var s=yn(r);return ht(s)&&(s=n),Rr(At(r,1,ht,!0),xe(s,2))}),j_=De(function(r){var s=yn(r);return s=typeof s=="function"?s:n,Rr(At(r,1,ht,!0),n,s)});function N_(r){return r&&r.length?Rr(r):[]}function D_(r,s){return r&&r.length?Rr(r,xe(s,2)):[]}function U_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Rr(r,n,s):[]}function Ic(r){if(!(r&&r.length))return[];var s=0;return r=kr(r,function(c){if(ht(c))return s=wt(c.length,s),!0}),Vl(s,function(c){return at(r,Wl(c))})}function Qh(r,s){if(!(r&&r.length))return[];var c=Ic(r);return s==null?c:at(c,function(h){return en(s,n,h)})}var z_=De(function(r,s){return ht(r)?Ts(r,s):[]}),F_=De(function(r){return gc(kr(r,ht))}),H_=De(function(r){var s=yn(r);return ht(s)&&(s=n),gc(kr(r,ht),xe(s,2))}),q_=De(function(r){var s=yn(r);return s=typeof s=="function"?s:n,gc(kr(r,ht),n,s)}),W_=De(Ic);function Z_(r,s){return ph(r||[],s||[],Ss)}function K_(r,s){return ph(r||[],s||[],Is)}var V_=De(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,Qh(r,c)});function Yh(r){var s=y(r);return s.__chain__=!0,s}function G_(r,s){return s(r),r}function ta(r,s){return s(r)}var Q_=ur(function(r){var s=r.length,c=s?r[0]:0,h=this.__wrapped__,v=function(_){return nc(_,r)};return s>1||this.__actions__.length||!(h instanceof qe)||!dr(c)?this.thru(v):(h=h.slice(c,+c+(s?1:0)),h.__actions__.push({func:ta,args:[v],thisArg:n}),new gn(h,this.__chain__).thru(function(_){return s&&!_.length&&_.push(n),_}))});function Y_(){return Yh(this)}function J_(){return new gn(this.value(),this.__chain__)}function X_(){this.__values__===n&&(this.__values__=dp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function ew(){return this}function tw(r){for(var s,c=this;c instanceof Uo;){var h=qh(c);h.__index__=0,h.__values__=n,s?v.__wrapped__=h:s=h;var v=h;c=c.__wrapped__}return v.__wrapped__=r,s}function nw(){var r=this.__wrapped__;if(r instanceof qe){var s=r;return this.__actions__.length&&(s=new qe(this)),s=s.reverse(),s.__actions__.push({func:ta,args:[Rc],thisArg:n}),new gn(s,this.__chain__)}return this.thru(Rc)}function rw(){return hh(this.__wrapped__,this.__actions__)}var iw=Ko(function(r,s,c){Ye.call(r,c)?++r[c]:lr(r,c,1)});function sw(r,s,c){var h=Oe(r)?Cf:Gy;return c&&Nt(r,s,c)&&(s=n),h(r,xe(s,3))}function ow(r,s){var c=Oe(r)?kr:Qf;return c(r,xe(s,3))}var aw=Eh(Wh),lw=Eh(Zh);function cw(r,s){return At(na(r,s),1)}function uw(r,s){return At(na(r,s),te)}function dw(r,s,c){return c=c===n?1:Pe(c),At(na(r,s),c)}function Jh(r,s){var c=Oe(r)?hn:Ar;return c(r,xe(s,3))}function Xh(r,s){var c=Oe(r)?R2:Gf;return c(r,xe(s,3))}var fw=Ko(function(r,s,c){Ye.call(r,c)?r[c].push(s):lr(r,c,[s])});function hw(r,s,c,h){r=Kt(r)?r:zi(r),c=c&&!h?Pe(c):0;var v=r.length;return c<0&&(c=wt(v+c,0)),aa(r)?c<=v&&r.indexOf(s,c)>-1:!!v&&Ai(r,s,c)>-1}var pw=De(function(r,s,c){var h=-1,v=typeof s=="function",_=Kt(r)?D(r.length):[];return Ar(r,function(T){_[++h]=v?en(s,T,c):As(T,s,c)}),_}),gw=Ko(function(r,s,c){lr(r,c,s)});function na(r,s){var c=Oe(r)?at:nh;return c(r,xe(s,3))}function vw(r,s,c,h){return r==null?[]:(Oe(s)||(s=s==null?[]:[s]),c=h?n:c,Oe(c)||(c=c==null?[]:[c]),oh(r,s,c))}var mw=Ko(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function yw(r,s,c){var h=Oe(r)?Hl:Rf,v=arguments.length<3;return h(r,xe(s,4),c,v,Ar)}function bw(r,s,c){var h=Oe(r)?I2:Rf,v=arguments.length<3;return h(r,xe(s,4),c,v,Gf)}function _w(r,s){var c=Oe(r)?kr:Qf;return c(r,sa(xe(s,3)))}function ww(r){var s=Oe(r)?Wf:hb;return s(r)}function xw(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=Pe(s);var h=Oe(r)?qy:pb;return h(r,s)}function $w(r){var s=Oe(r)?Wy:vb;return s(r)}function Ew(r){if(r==null)return 0;if(Kt(r))return aa(r)?Ii(r):r.length;var s=Pt(r);return s==_e||s==St?r.size:lc(r).length}function kw(r,s,c){var h=Oe(r)?ql:mb;return c&&Nt(r,s,c)&&(s=n),h(r,xe(s,3))}var Cw=De(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Nt(r,s[0],s[1])?s=[]:c>2&&Nt(s[0],s[1],s[2])&&(s=[s[0]]),oh(r,At(s,1),[])}),ra=oy||function(){return Tt.Date.now()};function Sw(r,s){if(typeof s!="function")throw new pn(l);return r=Pe(r),function(){if(--r<1)return s.apply(this,arguments)}}function ep(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,cr(r,U,n,n,n,n,s)}function tp(r,s){var c;if(typeof s!="function")throw new pn(l);return r=Pe(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Oc=De(function(r,s,c){var h=$;if(c.length){var v=Sr(c,Di(Oc));h|=L}return cr(r,h,s,c,v)}),np=De(function(r,s,c){var h=$|C;if(c.length){var v=Sr(c,Di(np));h|=L}return cr(s,h,r,c,v)});function rp(r,s,c){s=c?n:s;var h=cr(r,E,n,n,n,n,n,s);return h.placeholder=rp.placeholder,h}function ip(r,s,c){s=c?n:s;var h=cr(r,A,n,n,n,n,n,s);return h.placeholder=ip.placeholder,h}function sp(r,s,c){var h,v,_,T,O,M,q=0,W=!1,G=!1,ue=!0;if(typeof r!="function")throw new pn(l);s=bn(s)||0,ct(c)&&(W=!!c.leading,G="maxWait"in c,_=G?wt(bn(c.maxWait)||0,s):_,ue="trailing"in c?!!c.trailing:ue);function me(pt){var On=h,pr=v;return h=v=n,q=pt,T=r.apply(pr,On),T}function ke(pt){return q=pt,O=Ps(Fe,s),W?me(pt):T}function Be(pt){var On=pt-M,pr=pt-q,Ep=s-On;return G?Lt(Ep,_-pr):Ep}function Ce(pt){var On=pt-M,pr=pt-q;return M===n||On>=s||On<0||G&&pr>=_}function Fe(){var pt=ra();if(Ce(pt))return We(pt);O=Ps(Fe,Be(pt))}function We(pt){return O=n,ue&&h?me(pt):(h=v=n,T)}function sn(){O!==n&&gh(O),q=0,h=M=v=O=n}function Dt(){return O===n?T:We(ra())}function on(){var pt=ra(),On=Ce(pt);if(h=arguments,v=this,M=pt,On){if(O===n)return ke(M);if(G)return gh(O),O=Ps(Fe,s),me(M)}return O===n&&(O=Ps(Fe,s)),T}return on.cancel=sn,on.flush=Dt,on}var Tw=De(function(r,s){return Vf(r,1,s)}),Aw=De(function(r,s,c){return Vf(r,bn(s)||0,c)});function Rw(r){return cr(r,Z)}function ia(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new pn(l);var c=function(){var h=arguments,v=s?s.apply(this,h):h[0],_=c.cache;if(_.has(v))return _.get(v);var T=r.apply(this,h);return c.cache=_.set(v,T)||_,T};return c.cache=new(ia.Cache||ar),c}ia.Cache=ar;function sa(r){if(typeof r!="function")throw new pn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Iw(r){return tp(2,r)}var Ow=yb(function(r,s){s=s.length==1&&Oe(s[0])?at(s[0],tn(xe())):at(At(s,1),tn(xe()));var c=s.length;return De(function(h){for(var v=-1,_=Lt(h.length,c);++v<_;)h[v]=s[v].call(this,h[v]);return en(r,this,h)})}),Lc=De(function(r,s){var c=Sr(s,Di(Lc));return cr(r,L,n,s,c)}),op=De(function(r,s){var c=Sr(s,Di(op));return cr(r,R,n,s,c)}),Lw=ur(function(r,s){return cr(r,N,n,n,n,s)});function Pw(r,s){if(typeof r!="function")throw new pn(l);return s=s===n?s:Pe(s),De(r,s)}function Mw(r,s){if(typeof r!="function")throw new pn(l);return s=s==null?0:wt(Pe(s),0),De(function(c){var h=c[s],v=Or(c,0,s);return h&&Cr(v,h),en(r,this,v)})}function Bw(r,s,c){var h=!0,v=!0;if(typeof r!="function")throw new pn(l);return ct(c)&&(h="leading"in c?!!c.leading:h,v="trailing"in c?!!c.trailing:v),sp(r,s,{leading:h,maxWait:s,trailing:v})}function jw(r){return ep(r,1)}function Nw(r,s){return Lc(mc(s),r)}function Dw(){if(!arguments.length)return[];var r=arguments[0];return Oe(r)?r:[r]}function Uw(r){return vn(r,w)}function zw(r,s){return s=typeof s=="function"?s:n,vn(r,w,s)}function Fw(r){return vn(r,g|w)}function Hw(r,s){return s=typeof s=="function"?s:n,vn(r,g|w,s)}function qw(r,s){return s==null||Kf(r,s,$t(s))}function In(r,s){return r===s||r!==r&&s!==s}var Ww=Yo(sc),Zw=Yo(function(r,s){return r>=s}),si=Xf(function(){return arguments}())?Xf:function(r){return dt(r)&&Ye.call(r,"callee")&&!Df.call(r,"callee")},Oe=D.isArray,Kw=_f?tn(_f):tb;function Kt(r){return r!=null&&oa(r.length)&&!fr(r)}function ht(r){return dt(r)&&Kt(r)}function Vw(r){return r===!0||r===!1||dt(r)&&jt(r)==H}var Lr=ly||qc,Gw=wf?tn(wf):nb;function Qw(r){return dt(r)&&r.nodeType===1&&!Ms(r)}function Yw(r){if(r==null)return!0;if(Kt(r)&&(Oe(r)||typeof r=="string"||typeof r.splice=="function"||Lr(r)||Ui(r)||si(r)))return!r.length;var s=Pt(r);if(s==_e||s==St)return!r.size;if(Ls(r))return!lc(r).length;for(var c in r)if(Ye.call(r,c))return!1;return!0}function Jw(r,s){return Rs(r,s)}function Xw(r,s,c){c=typeof c=="function"?c:n;var h=c?c(r,s):n;return h===n?Rs(r,s,n,c):!!h}function Pc(r){if(!dt(r))return!1;var s=jt(r);return s==lt||s==ze||typeof r.message=="string"&&typeof r.name=="string"&&!Ms(r)}function e3(r){return typeof r=="number"&&zf(r)}function fr(r){if(!ct(r))return!1;var s=jt(r);return s==Je||s==Y||s==J||s==Qr}function ap(r){return typeof r=="number"&&r==Pe(r)}function oa(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=le}function ct(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function dt(r){return r!=null&&typeof r=="object"}var lp=xf?tn(xf):ib;function t3(r,s){return r===s||ac(r,s,Ec(s))}function n3(r,s,c){return c=typeof c=="function"?c:n,ac(r,s,Ec(s),c)}function r3(r){return cp(r)&&r!=+r}function i3(r){if(zb(r))throw new Re(a);return eh(r)}function s3(r){return r===null}function o3(r){return r==null}function cp(r){return typeof r=="number"||dt(r)&&jt(r)==Xe}function Ms(r){if(!dt(r)||jt(r)!=Ct)return!1;var s=Lo(r);if(s===null)return!0;var c=Ye.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Ao.call(c)==ny}var Mc=$f?tn($f):sb;function a3(r){return ap(r)&&r>=-le&&r<=le}var up=Ef?tn(Ef):ob;function aa(r){return typeof r=="string"||!Oe(r)&&dt(r)&&jt(r)==Xt}function rn(r){return typeof r=="symbol"||dt(r)&&jt(r)==Un}var Ui=kf?tn(kf):ab;function l3(r){return r===n}function c3(r){return dt(r)&&Pt(r)==kn}function u3(r){return dt(r)&&jt(r)==Ae}var d3=Yo(cc),f3=Yo(function(r,s){return r<=s});function dp(r){if(!r)return[];if(Kt(r))return aa(r)?An(r):Zt(r);if(xs&&r[xs])return q2(r[xs]());var s=Pt(r),c=s==_e?Ql:s==St?Co:zi;return c(r)}function hr(r){if(!r)return r===0?r:0;if(r=bn(r),r===te||r===-te){var s=r<0?-1:1;return s*Q}return r===r?r:0}function Pe(r){var s=hr(r),c=s%1;return s===s?c?s-c:s:0}function fp(r){return r?ti(Pe(r),0,be):0}function bn(r){if(typeof r=="number")return r;if(rn(r))return ye;if(ct(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=ct(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=If(r);var c=Km.test(r);return c||Gm.test(r)?S2(r.slice(2),c?2:8):Zm.test(r)?ye:+r}function hp(r){return Fn(r,Vt(r))}function h3(r){return r?ti(Pe(r),-le,le):r===0?r:0}function Qe(r){return r==null?"":nn(r)}var p3=ji(function(r,s){if(Ls(s)||Kt(s)){Fn(s,$t(s),r);return}for(var c in s)Ye.call(s,c)&&Ss(r,c,s[c])}),pp=ji(function(r,s){Fn(s,Vt(s),r)}),la=ji(function(r,s,c,h){Fn(s,Vt(s),r,h)}),g3=ji(function(r,s,c,h){Fn(s,$t(s),r,h)}),v3=ur(nc);function m3(r,s){var c=Bi(r);return s==null?c:Zf(c,s)}var y3=De(function(r,s){r=et(r);var c=-1,h=s.length,v=h>2?s[2]:n;for(v&&Nt(s[0],s[1],v)&&(h=1);++c<h;)for(var _=s[c],T=Vt(_),O=-1,M=T.length;++O<M;){var q=T[O],W=r[q];(W===n||In(W,Li[q])&&!Ye.call(r,q))&&(r[q]=_[q])}return r}),b3=De(function(r){return r.push(n,Ih),en(gp,n,r)});function _3(r,s){return Sf(r,xe(s,3),zn)}function w3(r,s){return Sf(r,xe(s,3),ic)}function x3(r,s){return r==null?r:rc(r,xe(s,3),Vt)}function $3(r,s){return r==null?r:Yf(r,xe(s,3),Vt)}function E3(r,s){return r&&zn(r,xe(s,3))}function k3(r,s){return r&&ic(r,xe(s,3))}function C3(r){return r==null?[]:Ho(r,$t(r))}function S3(r){return r==null?[]:Ho(r,Vt(r))}function Bc(r,s,c){var h=r==null?n:ni(r,s);return h===n?c:h}function T3(r,s){return r!=null&&Ph(r,s,Yy)}function jc(r,s){return r!=null&&Ph(r,s,Jy)}var A3=Ch(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Ro.call(s)),r[s]=c},Dc(Gt)),R3=Ch(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Ro.call(s)),Ye.call(r,s)?r[s].push(c):r[s]=[c]},xe),I3=De(As);function $t(r){return Kt(r)?qf(r):lc(r)}function Vt(r){return Kt(r)?qf(r,!0):lb(r)}function O3(r,s){var c={};return s=xe(s,3),zn(r,function(h,v,_){lr(c,s(h,v,_),h)}),c}function L3(r,s){var c={};return s=xe(s,3),zn(r,function(h,v,_){lr(c,v,s(h,v,_))}),c}var P3=ji(function(r,s,c){qo(r,s,c)}),gp=ji(function(r,s,c,h){qo(r,s,c,h)}),M3=ur(function(r,s){var c={};if(r==null)return c;var h=!1;s=at(s,function(_){return _=Ir(_,r),h||(h=_.length>1),_}),Fn(r,xc(r),c),h&&(c=vn(c,g|m|w,Ab));for(var v=s.length;v--;)pc(c,s[v]);return c});function B3(r,s){return vp(r,sa(xe(s)))}var j3=ur(function(r,s){return r==null?{}:ub(r,s)});function vp(r,s){if(r==null)return{};var c=at(xc(r),function(h){return[h]});return s=xe(s),ah(r,c,function(h,v){return s(h,v[0])})}function N3(r,s,c){s=Ir(s,r);var h=-1,v=s.length;for(v||(v=1,r=n);++h<v;){var _=r==null?n:r[Hn(s[h])];_===n&&(h=v,_=c),r=fr(_)?_.call(r):_}return r}function D3(r,s,c){return r==null?r:Is(r,s,c)}function U3(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:Is(r,s,c,h)}var mp=Ah($t),yp=Ah(Vt);function z3(r,s,c){var h=Oe(r),v=h||Lr(r)||Ui(r);if(s=xe(s,4),c==null){var _=r&&r.constructor;v?c=h?new _:[]:ct(r)?c=fr(_)?Bi(Lo(r)):{}:c={}}return(v?hn:zn)(r,function(T,O,M){return s(c,T,O,M)}),c}function F3(r,s){return r==null?!0:pc(r,s)}function H3(r,s,c){return r==null?r:fh(r,s,mc(c))}function q3(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:fh(r,s,mc(c),h)}function zi(r){return r==null?[]:Gl(r,$t(r))}function W3(r){return r==null?[]:Gl(r,Vt(r))}function Z3(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=bn(c),c=c===c?c:0),s!==n&&(s=bn(s),s=s===s?s:0),ti(bn(r),s,c)}function K3(r,s,c){return s=hr(s),c===n?(c=s,s=0):c=hr(c),r=bn(r),Xy(r,s,c)}function V3(r,s,c){if(c&&typeof c!="boolean"&&Nt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=hr(r),s===n?(s=r,r=0):s=hr(s)),r>s){var h=r;r=s,s=h}if(c||r%1||s%1){var v=Ff();return Lt(r+v*(s-r+C2("1e-"+((v+"").length-1))),s)}return dc(r,s)}var G3=Ni(function(r,s,c){return s=s.toLowerCase(),r+(c?bp(s):s)});function bp(r){return Nc(Qe(r).toLowerCase())}function _p(r){return r=Qe(r),r&&r.replace(Ym,D2).replace(v2,"")}function Q3(r,s,c){r=Qe(r),s=nn(s);var h=r.length;c=c===n?h:ti(Pe(c),0,h);var v=c;return c-=s.length,c>=0&&r.slice(c,v)==s}function Y3(r){return r=Qe(r),r&&Im.test(r)?r.replace(Qd,U2):r}function J3(r){return r=Qe(r),r&&jm.test(r)?r.replace(Ll,"\\$&"):r}var X3=Ni(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),ex=Ni(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),tx=$h("toLowerCase");function nx(r,s,c){r=Qe(r),s=Pe(s);var h=s?Ii(r):0;if(!s||h>=s)return r;var v=(s-h)/2;return Qo(jo(v),c)+r+Qo(Bo(v),c)}function rx(r,s,c){r=Qe(r),s=Pe(s);var h=s?Ii(r):0;return s&&h<s?r+Qo(s-h,c):r}function ix(r,s,c){r=Qe(r),s=Pe(s);var h=s?Ii(r):0;return s&&h<s?Qo(s-h,c)+r:r}function sx(r,s,c){return c||s==null?s=0:s&&(s=+s),fy(Qe(r).replace(Pl,""),s||0)}function ox(r,s,c){return(c?Nt(r,s,c):s===n)?s=1:s=Pe(s),fc(Qe(r),s)}function ax(){var r=arguments,s=Qe(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var lx=Ni(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function cx(r,s,c){return c&&typeof c!="number"&&Nt(r,s,c)&&(s=c=n),c=c===n?be:c>>>0,c?(r=Qe(r),r&&(typeof s=="string"||s!=null&&!Mc(s))&&(s=nn(s),!s&&Ri(r))?Or(An(r),0,c):r.split(s,c)):[]}var ux=Ni(function(r,s,c){return r+(c?" ":"")+Nc(s)});function dx(r,s,c){return r=Qe(r),c=c==null?0:ti(Pe(c),0,r.length),s=nn(s),r.slice(c,c+s.length)==s}function fx(r,s,c){var h=y.templateSettings;c&&Nt(r,s,c)&&(s=n),r=Qe(r),s=la({},s,h,Rh);var v=la({},s.imports,h.imports,Rh),_=$t(v),T=Gl(v,_),O,M,q=0,W=s.interpolate||wo,G="__p += '",ue=Yl((s.escape||wo).source+"|"+W.source+"|"+(W===Yd?Wm:wo).source+"|"+(s.evaluate||wo).source+"|$","g"),me="//# sourceURL="+(Ye.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++w2+"]")+`
`;r.replace(ue,function(Ce,Fe,We,sn,Dt,on){return We||(We=sn),G+=r.slice(q,on).replace(Jm,z2),Fe&&(O=!0,G+=`' +
__e(`+Fe+`) +
'`),Dt&&(M=!0,G+=`';
`+Dt+`;
__p += '`),We&&(G+=`' +
((__t = (`+We+`)) == null ? '' : __t) +
'`),q=on+Ce.length,Ce}),G+=`';
`;var ke=Ye.call(s,"variable")&&s.variable;if(!ke)G=`with (obj) {
`+G+`
}
`;else if(Hm.test(ke))throw new Re(u);G=(M?G.replace(yo,""):G).replace(bo,"$1").replace(_o,"$1;"),G="function("+(ke||"obj")+`) {
`+(ke?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(O?", __e = _.escape":"")+(M?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+G+`return __p
}`;var Be=xp(function(){return Ve(_,me+"return "+G).apply(n,T)});if(Be.source=G,Pc(Be))throw Be;return Be}function hx(r){return Qe(r).toLowerCase()}function px(r){return Qe(r).toUpperCase()}function gx(r,s,c){if(r=Qe(r),r&&(c||s===n))return If(r);if(!r||!(s=nn(s)))return r;var h=An(r),v=An(s),_=Of(h,v),T=Lf(h,v)+1;return Or(h,_,T).join("")}function vx(r,s,c){if(r=Qe(r),r&&(c||s===n))return r.slice(0,Mf(r)+1);if(!r||!(s=nn(s)))return r;var h=An(r),v=Lf(h,An(s))+1;return Or(h,0,v).join("")}function mx(r,s,c){if(r=Qe(r),r&&(c||s===n))return r.replace(Pl,"");if(!r||!(s=nn(s)))return r;var h=An(r),v=Of(h,An(s));return Or(h,v).join("")}function yx(r,s){var c=ne,h=oe;if(ct(s)){var v="separator"in s?s.separator:v;c="length"in s?Pe(s.length):c,h="omission"in s?nn(s.omission):h}r=Qe(r);var _=r.length;if(Ri(r)){var T=An(r);_=T.length}if(c>=_)return r;var O=c-Ii(h);if(O<1)return h;var M=T?Or(T,0,O).join(""):r.slice(0,O);if(v===n)return M+h;if(T&&(O+=M.length-O),Mc(v)){if(r.slice(O).search(v)){var q,W=M;for(v.global||(v=Yl(v.source,Qe(Jd.exec(v))+"g")),v.lastIndex=0;q=v.exec(W);)var G=q.index;M=M.slice(0,G===n?O:G)}}else if(r.indexOf(nn(v),O)!=O){var ue=M.lastIndexOf(v);ue>-1&&(M=M.slice(0,ue))}return M+h}function bx(r){return r=Qe(r),r&&Rm.test(r)?r.replace(Gd,V2):r}var _x=Ni(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),Nc=$h("toUpperCase");function wp(r,s,c){return r=Qe(r),s=c?n:s,s===n?H2(r)?Y2(r):P2(r):r.match(s)||[]}var xp=De(function(r,s){try{return en(r,n,s)}catch(c){return Pc(c)?c:new Re(c)}}),wx=ur(function(r,s){return hn(s,function(c){c=Hn(c),lr(r,c,Oc(r[c],r))}),r});function xx(r){var s=r==null?0:r.length,c=xe();return r=s?at(r,function(h){if(typeof h[1]!="function")throw new pn(l);return[c(h[0]),h[1]]}):[],De(function(h){for(var v=-1;++v<s;){var _=r[v];if(en(_[0],this,h))return en(_[1],this,h)}})}function $x(r){return Vy(vn(r,g))}function Dc(r){return function(){return r}}function Ex(r,s){return r==null||r!==r?s:r}var kx=kh(),Cx=kh(!0);function Gt(r){return r}function Uc(r){return th(typeof r=="function"?r:vn(r,g))}function Sx(r){return rh(vn(r,g))}function Tx(r,s){return ih(r,vn(s,g))}var Ax=De(function(r,s){return function(c){return As(c,r,s)}}),Rx=De(function(r,s){return function(c){return As(r,c,s)}});function zc(r,s,c){var h=$t(s),v=Ho(s,h);c==null&&!(ct(s)&&(v.length||!h.length))&&(c=s,s=r,r=this,v=Ho(s,$t(s)));var _=!(ct(c)&&"chain"in c)||!!c.chain,T=fr(r);return hn(v,function(O){var M=s[O];r[O]=M,T&&(r.prototype[O]=function(){var q=this.__chain__;if(_||q){var W=r(this.__wrapped__),G=W.__actions__=Zt(this.__actions__);return G.push({func:M,args:arguments,thisArg:r}),W.__chain__=q,W}return M.apply(r,Cr([this.value()],arguments))})}),r}function Ix(){return Tt._===this&&(Tt._=ry),this}function Fc(){}function Ox(r){return r=Pe(r),De(function(s){return sh(s,r)})}var Lx=bc(at),Px=bc(Cf),Mx=bc(ql);function $p(r){return Cc(r)?Wl(Hn(r)):db(r)}function Bx(r){return function(s){return r==null?n:ni(r,s)}}var jx=Sh(),Nx=Sh(!0);function Hc(){return[]}function qc(){return!1}function Dx(){return{}}function Ux(){return""}function zx(){return!0}function Fx(r,s){if(r=Pe(r),r<1||r>le)return[];var c=be,h=Lt(r,be);s=xe(s),r-=be;for(var v=Vl(h,s);++c<r;)s(c);return v}function Hx(r){return Oe(r)?at(r,Hn):rn(r)?[r]:Zt(Hh(Qe(r)))}function qx(r){var s=++ty;return Qe(r)+s}var Wx=Go(function(r,s){return r+s},0),Zx=_c("ceil"),Kx=Go(function(r,s){return r/s},1),Vx=_c("floor");function Gx(r){return r&&r.length?Fo(r,Gt,sc):n}function Qx(r,s){return r&&r.length?Fo(r,xe(s,2),sc):n}function Yx(r){return Af(r,Gt)}function Jx(r,s){return Af(r,xe(s,2))}function Xx(r){return r&&r.length?Fo(r,Gt,cc):n}function e4(r,s){return r&&r.length?Fo(r,xe(s,2),cc):n}var t4=Go(function(r,s){return r*s},1),n4=_c("round"),r4=Go(function(r,s){return r-s},0);function i4(r){return r&&r.length?Kl(r,Gt):0}function s4(r,s){return r&&r.length?Kl(r,xe(s,2)):0}return y.after=Sw,y.ary=ep,y.assign=p3,y.assignIn=pp,y.assignInWith=la,y.assignWith=g3,y.at=v3,y.before=tp,y.bind=Oc,y.bindAll=wx,y.bindKey=np,y.castArray=Dw,y.chain=Yh,y.chunk=Vb,y.compact=Gb,y.concat=Qb,y.cond=xx,y.conforms=$x,y.constant=Dc,y.countBy=iw,y.create=m3,y.curry=rp,y.curryRight=ip,y.debounce=sp,y.defaults=y3,y.defaultsDeep=b3,y.defer=Tw,y.delay=Aw,y.difference=Yb,y.differenceBy=Jb,y.differenceWith=Xb,y.drop=e_,y.dropRight=t_,y.dropRightWhile=n_,y.dropWhile=r_,y.fill=i_,y.filter=ow,y.flatMap=cw,y.flatMapDeep=uw,y.flatMapDepth=dw,y.flatten=Kh,y.flattenDeep=s_,y.flattenDepth=o_,y.flip=Rw,y.flow=kx,y.flowRight=Cx,y.fromPairs=a_,y.functions=C3,y.functionsIn=S3,y.groupBy=fw,y.initial=c_,y.intersection=u_,y.intersectionBy=d_,y.intersectionWith=f_,y.invert=A3,y.invertBy=R3,y.invokeMap=pw,y.iteratee=Uc,y.keyBy=gw,y.keys=$t,y.keysIn=Vt,y.map=na,y.mapKeys=O3,y.mapValues=L3,y.matches=Sx,y.matchesProperty=Tx,y.memoize=ia,y.merge=P3,y.mergeWith=gp,y.method=Ax,y.methodOf=Rx,y.mixin=zc,y.negate=sa,y.nthArg=Ox,y.omit=M3,y.omitBy=B3,y.once=Iw,y.orderBy=vw,y.over=Lx,y.overArgs=Ow,y.overEvery=Px,y.overSome=Mx,y.partial=Lc,y.partialRight=op,y.partition=mw,y.pick=j3,y.pickBy=vp,y.property=$p,y.propertyOf=Bx,y.pull=v_,y.pullAll=Gh,y.pullAllBy=m_,y.pullAllWith=y_,y.pullAt=b_,y.range=jx,y.rangeRight=Nx,y.rearg=Lw,y.reject=_w,y.remove=__,y.rest=Pw,y.reverse=Rc,y.sampleSize=xw,y.set=D3,y.setWith=U3,y.shuffle=$w,y.slice=w_,y.sortBy=Cw,y.sortedUniq=T_,y.sortedUniqBy=A_,y.split=cx,y.spread=Mw,y.tail=R_,y.take=I_,y.takeRight=O_,y.takeRightWhile=L_,y.takeWhile=P_,y.tap=G_,y.throttle=Bw,y.thru=ta,y.toArray=dp,y.toPairs=mp,y.toPairsIn=yp,y.toPath=Hx,y.toPlainObject=hp,y.transform=z3,y.unary=jw,y.union=M_,y.unionBy=B_,y.unionWith=j_,y.uniq=N_,y.uniqBy=D_,y.uniqWith=U_,y.unset=F3,y.unzip=Ic,y.unzipWith=Qh,y.update=H3,y.updateWith=q3,y.values=zi,y.valuesIn=W3,y.without=z_,y.words=wp,y.wrap=Nw,y.xor=F_,y.xorBy=H_,y.xorWith=q_,y.zip=W_,y.zipObject=Z_,y.zipObjectDeep=K_,y.zipWith=V_,y.entries=mp,y.entriesIn=yp,y.extend=pp,y.extendWith=la,zc(y,y),y.add=Wx,y.attempt=xp,y.camelCase=G3,y.capitalize=bp,y.ceil=Zx,y.clamp=Z3,y.clone=Uw,y.cloneDeep=Fw,y.cloneDeepWith=Hw,y.cloneWith=zw,y.conformsTo=qw,y.deburr=_p,y.defaultTo=Ex,y.divide=Kx,y.endsWith=Q3,y.eq=In,y.escape=Y3,y.escapeRegExp=J3,y.every=sw,y.find=aw,y.findIndex=Wh,y.findKey=_3,y.findLast=lw,y.findLastIndex=Zh,y.findLastKey=w3,y.floor=Vx,y.forEach=Jh,y.forEachRight=Xh,y.forIn=x3,y.forInRight=$3,y.forOwn=E3,y.forOwnRight=k3,y.get=Bc,y.gt=Ww,y.gte=Zw,y.has=T3,y.hasIn=jc,y.head=Vh,y.identity=Gt,y.includes=hw,y.indexOf=l_,y.inRange=K3,y.invoke=I3,y.isArguments=si,y.isArray=Oe,y.isArrayBuffer=Kw,y.isArrayLike=Kt,y.isArrayLikeObject=ht,y.isBoolean=Vw,y.isBuffer=Lr,y.isDate=Gw,y.isElement=Qw,y.isEmpty=Yw,y.isEqual=Jw,y.isEqualWith=Xw,y.isError=Pc,y.isFinite=e3,y.isFunction=fr,y.isInteger=ap,y.isLength=oa,y.isMap=lp,y.isMatch=t3,y.isMatchWith=n3,y.isNaN=r3,y.isNative=i3,y.isNil=o3,y.isNull=s3,y.isNumber=cp,y.isObject=ct,y.isObjectLike=dt,y.isPlainObject=Ms,y.isRegExp=Mc,y.isSafeInteger=a3,y.isSet=up,y.isString=aa,y.isSymbol=rn,y.isTypedArray=Ui,y.isUndefined=l3,y.isWeakMap=c3,y.isWeakSet=u3,y.join=h_,y.kebabCase=X3,y.last=yn,y.lastIndexOf=p_,y.lowerCase=ex,y.lowerFirst=tx,y.lt=d3,y.lte=f3,y.max=Gx,y.maxBy=Qx,y.mean=Yx,y.meanBy=Jx,y.min=Xx,y.minBy=e4,y.stubArray=Hc,y.stubFalse=qc,y.stubObject=Dx,y.stubString=Ux,y.stubTrue=zx,y.multiply=t4,y.nth=g_,y.noConflict=Ix,y.noop=Fc,y.now=ra,y.pad=nx,y.padEnd=rx,y.padStart=ix,y.parseInt=sx,y.random=V3,y.reduce=yw,y.reduceRight=bw,y.repeat=ox,y.replace=ax,y.result=N3,y.round=n4,y.runInContext=P,y.sample=ww,y.size=Ew,y.snakeCase=lx,y.some=kw,y.sortedIndex=x_,y.sortedIndexBy=$_,y.sortedIndexOf=E_,y.sortedLastIndex=k_,y.sortedLastIndexBy=C_,y.sortedLastIndexOf=S_,y.startCase=ux,y.startsWith=dx,y.subtract=r4,y.sum=i4,y.sumBy=s4,y.template=fx,y.times=Fx,y.toFinite=hr,y.toInteger=Pe,y.toLength=fp,y.toLower=hx,y.toNumber=bn,y.toSafeInteger=h3,y.toString=Qe,y.toUpper=px,y.trim=gx,y.trimEnd=vx,y.trimStart=mx,y.truncate=yx,y.unescape=bx,y.uniqueId=qx,y.upperCase=_x,y.upperFirst=Nc,y.each=Jh,y.eachRight=Xh,y.first=Vh,zc(y,function(){var r={};return zn(y,function(s,c){Ye.call(y.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),y.VERSION=i,hn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),hn(["drop","take"],function(r,s){qe.prototype[r]=function(c){c=c===n?1:wt(Pe(c),0);var h=this.__filtered__&&!s?new qe(this):this.clone();return h.__filtered__?h.__takeCount__=Lt(c,h.__takeCount__):h.__views__.push({size:Lt(c,be),type:r+(h.__dir__<0?"Right":"")}),h},qe.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),hn(["filter","map","takeWhile"],function(r,s){var c=s+1,h=c==ee||c==K;qe.prototype[r]=function(v){var _=this.clone();return _.__iteratees__.push({iteratee:xe(v,3),type:c}),_.__filtered__=_.__filtered__||h,_}}),hn(["head","last"],function(r,s){var c="take"+(s?"Right":"");qe.prototype[r]=function(){return this[c](1).value()[0]}}),hn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");qe.prototype[r]=function(){return this.__filtered__?new qe(this):this[c](1)}}),qe.prototype.compact=function(){return this.filter(Gt)},qe.prototype.find=function(r){return this.filter(r).head()},qe.prototype.findLast=function(r){return this.reverse().find(r)},qe.prototype.invokeMap=De(function(r,s){return typeof r=="function"?new qe(this):this.map(function(c){return As(c,r,s)})}),qe.prototype.reject=function(r){return this.filter(sa(xe(r)))},qe.prototype.slice=function(r,s){r=Pe(r);var c=this;return c.__filtered__&&(r>0||s<0)?new qe(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Pe(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},qe.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},qe.prototype.toArray=function(){return this.take(be)},zn(qe.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),v=y[h?"take"+(s=="last"?"Right":""):s],_=h||/^find/.test(s);v&&(y.prototype[s]=function(){var T=this.__wrapped__,O=h?[1]:arguments,M=T instanceof qe,q=O[0],W=M||Oe(T),G=function(Fe){var We=v.apply(y,Cr([Fe],O));return h&&ue?We[0]:We};W&&c&&typeof q=="function"&&q.length!=1&&(M=W=!1);var ue=this.__chain__,me=!!this.__actions__.length,ke=_&&!ue,Be=M&&!me;if(!_&&W){T=Be?T:new qe(this);var Ce=r.apply(T,O);return Ce.__actions__.push({func:ta,args:[G],thisArg:n}),new gn(Ce,ue)}return ke&&Be?r.apply(this,O):(Ce=this.thru(G),ke?h?Ce.value()[0]:Ce.value():Ce)})}),hn(["pop","push","shift","sort","splice","unshift"],function(r){var s=So[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",h=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var v=arguments;if(h&&!this.__chain__){var _=this.value();return s.apply(Oe(_)?_:[],v)}return this[c](function(T){return s.apply(Oe(T)?T:[],v)})}}),zn(qe.prototype,function(r,s){var c=y[s];if(c){var h=c.name+"";Ye.call(Mi,h)||(Mi[h]=[]),Mi[h].push({name:s,func:c})}}),Mi[Vo(n,C).name]=[{name:"wrapper",func:n}],qe.prototype.clone=by,qe.prototype.reverse=_y,qe.prototype.value=wy,y.prototype.at=Q_,y.prototype.chain=Y_,y.prototype.commit=J_,y.prototype.next=X_,y.prototype.plant=tw,y.prototype.reverse=nw,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=rw,y.prototype.first=y.prototype.head,xs&&(y.prototype[xs]=ew),y},Oi=J2();Yr?((Yr.exports=Oi)._=Oi,Ul._=Oi):Tt._=Oi}).call(xt)})(Ma,Ma.exports);var j1=Ma.exports;const z9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],N1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com","wss://r.kojira.io","wss://yabu.me"],F9=[...N1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],DF=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],H9=()=>{const t=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));t.push(...o)}else for(let o=0;o<16;o+=1)t[o]=Math.round(Math.random()*65535)>>8;t[6]=t[6]&15|64,t[8]=t[8]&63|128;const e=String.fromCharCode(...t);return btoa(e).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},hs=()=>({id:H9(),width:"medium"}),D1=t=>({...hs(),columnType:"Following",...t}),U1=t=>({...hs(),columnType:"Notification",...t}),q9=t=>({...hs(),columnType:"Relays",...t}),z1=()=>q9({name:"日本語",relayUrls:N1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),F1=t=>({...hs(),columnType:"Posts",...t}),H1=t=>({...hs(),columnType:"Reactions",...t}),gd=t=>({...hs(),columnType:"Search",...t});var Ke;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},t.getValidEnumValues=o=>{const a=t.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return t.objectValues(l)},t.objectValues=o=>t.objectKeys(o).map(function(a){return o[a]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},t.find=(o,a)=>{for(const l of o)if(a(l))return l},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}t.joinValues=i,t.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ke||(Ke={}));var Eu;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Eu||(Eu={}));const fe=Ke.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Nr=t=>{switch(typeof t){case"undefined":return fe.undefined;case"string":return fe.string;case"number":return isNaN(t)?fe.nan:fe.number;case"boolean":return fe.boolean;case"function":return fe.function;case"bigint":return fe.bigint;case"symbol":return fe.symbol;case"object":return Array.isArray(t)?fe.array:t===null?fe.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?fe.promise:typeof Map<"u"&&t instanceof Map?fe.map:typeof Set<"u"&&t instanceof Set?fe.set:typeof Date<"u"&&t instanceof Date?fe.date:fe.object;default:return fe.unknown}},re=Ke.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),W9=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Bn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(u[f]=u[f]||{_errors:[]},u[f]._errors.push(n(l))):u[f]=u[f]||{_errors:[]},u=u[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ke.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Bn.create=t=>new Bn(t);const Ws=(t,e)=>{let n;switch(t.code){case re.invalid_type:t.received===fe.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case re.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Ke.jsonStringifyReplacer)}`;break;case re.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ke.joinValues(t.keys,", ")}`;break;case re.invalid_union:n="Invalid input";break;case re.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ke.joinValues(t.options)}`;break;case re.invalid_enum_value:n=`Invalid enum value. Expected ${Ke.joinValues(t.options)}, received '${t.received}'`;break;case re.invalid_arguments:n="Invalid function arguments";break;case re.invalid_return_type:n="Invalid function return type";break;case re.invalid_date:n="Invalid date";break;case re.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Ke.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case re.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case re.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case re.custom:n="Invalid input";break;case re.invalid_intersection_types:n="Intersection results could not be merged";break;case re.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case re.not_finite:n="Number must be finite";break;default:n=e.defaultError,Ke.assertNever(t)}return{message:n}};let q1=Ws;function Z9(t){q1=t}function Ba(){return q1}const ja=t=>{const{data:e,path:n,errorMaps:i,issueData:o}=t,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)u=f(l,{data:e,defaultError:u}).message;return{...o,path:a,message:o.message||u}},K9=[];function pe(t,e){const n=ja({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ba(),Ws].filter(i=>!!i)});t.common.issues.push(n)}class Bt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const i=[];for(const o of n){if(o.status==="aborted")return Ie;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Bt.mergeObjectSync(e,i)}static mergeObjectSync(e,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Ie;a.status==="dirty"&&e.dirty(),l.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:e.value,value:i}}}const Ie=Object.freeze({status:"aborted"}),W1=t=>({status:"dirty",value:t}),Ft=t=>({status:"valid",value:t}),ku=t=>t.status==="aborted",Cu=t=>t.status==="dirty",Zs=t=>t.status==="valid",Na=t=>typeof Promise<"u"&&t instanceof Promise;var we;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(we||(we={}));class Qn{constructor(e,n,i,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Xp=(t,e)=>{if(Zs(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Bn(t.common.issues);return this._error=n,this._error}}};function Le(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:i,description:o}=t;if(e&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Ne{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Nr(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Nr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Bt,ctx:{common:e.parent.common,data:e.data,parsedType:Nr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Na(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const i=this.safeParse(e,n);if(i.success)return i.data;throw i.error}safeParse(e,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Nr(e)},a=this._parseSync({data:e,path:o.path,parent:o});return Xp(o,a)}async parseAsync(e,n){const i=await this.safeParseAsync(e,n);if(i.success)return i.data;throw i.error}async safeParseAsync(e,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Nr(e)},o=this._parse({data:e,path:i.path,parent:i}),a=await(Na(o)?o:Promise.resolve(o));return Xp(i,a)}refine(e,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=e(o),u=()=>a.addIssue({code:re.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(e,n){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(e){return new Nn({schema:this,typeName:Se.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return br.create(this,this._def)}nullable(){return wi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return jn.create(this,this._def)}promise(){return ts.create(this,this._def)}or(e){return Qs.create([this,e],this._def)}and(e){return Ys.create(this,e,this._def)}transform(e){return new Nn({...Le(this._def),schema:this,typeName:Se.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new no({...Le(this._def),innerType:this,defaultValue:n,typeName:Se.ZodDefault})}brand(){return new K1({typeName:Se.ZodBranded,type:this,...Le(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Fa({...Le(this._def),innerType:this,catchValue:n,typeName:Se.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return ho.create(this,e)}readonly(){return qa.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const V9=/^c[^\s-]{8,}$/i,G9=/^[a-z][a-z0-9]*$/,Q9=/^[0-9A-HJKMNP-TV-Z]{26}$/,Y9=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,J9=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,X9="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let eu;const ek=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,tk=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,nk=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function rk(t,e){return!!((e==="v4"||!e)&&ek.test(t)||(e==="v6"||!e)&&tk.test(t))}class Mn extends Ne{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==fe.string){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.string,received:a.parsedType}),Ie}const i=new Bt;let o;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")e.data.length>a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=e.data.length>a.value,u=e.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(e,o),l?pe(o,{code:re.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&pe(o,{code:re.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")J9.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"email",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")eu||(eu=new RegExp(X9,"u")),eu.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"emoji",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")Y9.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"uuid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")V9.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"cuid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")G9.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"cuid2",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")Q9.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"ulid",code:re.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),pe(o,{validation:"url",code:re.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"regex",code:re.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?nk(a).test(e.data)||(o=this._getOrReturnCtx(e,o),pe(o,{code:re.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?rk(e.data,a.version)||(o=this._getOrReturnCtx(e,o),pe(o,{validation:"ip",code:re.invalid_string,message:a.message}),i.dirty()):Ke.assertNever(a);return{status:i.value,value:e.data}}_regex(e,n,i){return this.refinement(o=>e.test(o),{validation:n,code:re.invalid_string,...we.errToObj(i)})}_addCheck(e){return new Mn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...we.errToObj(e)})}url(e){return this._addCheck({kind:"url",...we.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...we.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...we.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...we.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...we.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...we.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...we.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(n=e?.offset)!==null&&n!==void 0?n:!1,...we.errToObj(e?.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...we.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n?.position,...we.errToObj(n?.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...we.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...we.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...we.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...we.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...we.errToObj(n)})}nonempty(e){return this.min(1,we.errToObj(e))}trim(){return new Mn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Mn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Mn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Mn.create=t=>{var e;return new Mn({checks:[],typeName:Se.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Le(t)})};function ik(t,e){const n=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(t.toFixed(o).replace(".","")),l=parseInt(e.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Hr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==fe.number){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.number,received:a.parsedType}),Ie}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="int"?Ke.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),pe(i,{code:re.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?ik(e.data,a.value)!==0&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),pe(i,{code:re.not_finite,message:a.message}),o.dirty()):Ke.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,we.toString(n))}gt(e,n){return this.setLimit("min",e,!1,we.toString(n))}lte(e,n){return this.setLimit("max",e,!0,we.toString(n))}lt(e,n){return this.setLimit("max",e,!1,we.toString(n))}setLimit(e,n,i,o){return new Hr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:we.toString(o)}]})}_addCheck(e){return new Hr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:we.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:we.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:we.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:we.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:we.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:we.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:we.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:we.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:we.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ke.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Hr.create=t=>new Hr({checks:[],typeName:Se.ZodNumber,coerce:t?.coerce||!1,...Le(t)});class qr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==fe.bigint){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.bigint,received:a.parsedType}),Ie}let i;const o=new Bt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),pe(i,{code:re.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ke.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,we.toString(n))}gt(e,n){return this.setLimit("min",e,!1,we.toString(n))}lte(e,n){return this.setLimit("max",e,!0,we.toString(n))}lt(e,n){return this.setLimit("max",e,!1,we.toString(n))}setLimit(e,n,i,o){return new qr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:we.toString(o)}]})}_addCheck(e){return new qr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:we.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:we.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:we.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:we.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:we.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}qr.create=t=>{var e;return new qr({checks:[],typeName:Se.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Le(t)})};class Ks extends Ne{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==fe.boolean){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.boolean,received:i.parsedType}),Ie}return Ft(e.data)}}Ks.create=t=>new Ks({typeName:Se.ZodBoolean,coerce:t?.coerce||!1,...Le(t)});class bi extends Ne{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==fe.date){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_type,expected:fe.date,received:a.parsedType}),Ie}if(isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return pe(a,{code:re.invalid_date}),Ie}const i=new Bt;let o;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(o=this._getOrReturnCtx(e,o),pe(o,{code:re.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ke.assertNever(a);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new bi({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:we.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:we.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}bi.create=t=>new bi({checks:[],coerce:t?.coerce||!1,typeName:Se.ZodDate,...Le(t)});class Da extends Ne{_parse(e){if(this._getType(e)!==fe.symbol){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.symbol,received:i.parsedType}),Ie}return Ft(e.data)}}Da.create=t=>new Da({typeName:Se.ZodSymbol,...Le(t)});class Vs extends Ne{_parse(e){if(this._getType(e)!==fe.undefined){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.undefined,received:i.parsedType}),Ie}return Ft(e.data)}}Vs.create=t=>new Vs({typeName:Se.ZodUndefined,...Le(t)});class Gs extends Ne{_parse(e){if(this._getType(e)!==fe.null){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.null,received:i.parsedType}),Ie}return Ft(e.data)}}Gs.create=t=>new Gs({typeName:Se.ZodNull,...Le(t)});class es extends Ne{constructor(){super(...arguments),this._any=!0}_parse(e){return Ft(e.data)}}es.create=t=>new es({typeName:Se.ZodAny,...Le(t)});class mi extends Ne{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ft(e.data)}}mi.create=t=>new mi({typeName:Se.ZodUnknown,...Le(t)});class xr extends Ne{_parse(e){const n=this._getOrReturnCtx(e);return pe(n,{code:re.invalid_type,expected:fe.never,received:n.parsedType}),Ie}}xr.create=t=>new xr({typeName:Se.ZodNever,...Le(t)});class Ua extends Ne{_parse(e){if(this._getType(e)!==fe.undefined){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.void,received:i.parsedType}),Ie}return Ft(e.data)}}Ua.create=t=>new Ua({typeName:Se.ZodVoid,...Le(t)});class jn extends Ne{_parse(e){const{ctx:n,status:i}=this._processInputParams(e),o=this._def;if(n.parsedType!==fe.array)return pe(n,{code:re.invalid_type,expected:fe.array,received:n.parsedType}),Ie;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(pe(n,{code:l?re.too_big:re.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(pe(n,{code:re.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(pe(n,{code:re.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Qn(n,l,n.path,u)))).then(l=>Bt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Qn(n,l,n.path,u)));return Bt.mergeArray(i,a)}get element(){return this._def.type}min(e,n){return new jn({...this._def,minLength:{value:e,message:we.toString(n)}})}max(e,n){return new jn({...this._def,maxLength:{value:e,message:we.toString(n)}})}length(e,n){return new jn({...this._def,exactLength:{value:e,message:we.toString(n)}})}nonempty(e){return this.min(1,e)}}jn.create=(t,e)=>new jn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:Se.ZodArray,...Le(e)});function Wi(t){if(t instanceof ut){const e={};for(const n in t.shape){const i=t.shape[n];e[n]=br.create(Wi(i))}return new ut({...t._def,shape:()=>e})}else return t instanceof jn?new jn({...t._def,type:Wi(t.element)}):t instanceof br?br.create(Wi(t.unwrap())):t instanceof wi?wi.create(Wi(t.unwrap())):t instanceof Yn?Yn.create(t.items.map(e=>Wi(e))):t}class ut extends Ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Ke.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==fe.object){const f=this._getOrReturnCtx(e);return pe(f,{code:re.invalid_type,expected:fe.object,received:f.parsedType}),Ie}const{status:i,ctx:o}=this._processInputParams(e),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof xr&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||u.push(f);const d=[];for(const f of l){const p=a[f],g=o.data[f];d.push({key:{status:"valid",value:f},value:p._parse(new Qn(o,g,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof xr){const f=this._def.unknownKeys;if(f==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(f==="strict")u.length>0&&(pe(o,{code:re.unrecognized_keys,keys:u}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:f._parse(new Qn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const p of d){const g=await p.key;f.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return f}).then(f=>Bt.mergeObjectSync(i,f)):Bt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(e){return we.errToObj,new ut({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=we.errToObj(e).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ut({...this._def,unknownKeys:"strip"})}passthrough(){return new ut({...this._def,unknownKeys:"passthrough"})}extend(e){return new ut({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ut({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Se.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new ut({...this._def,catchall:e})}pick(e){const n={};return Ke.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ut({...this._def,shape:()=>n})}omit(e){const n={};return Ke.objectKeys(this.shape).forEach(i=>{e[i]||(n[i]=this.shape[i])}),new ut({...this._def,shape:()=>n})}deepPartial(){return Wi(this)}partial(e){const n={};return Ke.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];e&&!e[i]?n[i]=o:n[i]=o.optional()}),new ut({...this._def,shape:()=>n})}required(e){const n={};return Ke.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof br;)a=a._def.innerType;n[i]=a}}),new ut({...this._def,shape:()=>n})}keyof(){return Z1(Ke.objectKeys(this.shape))}}ut.create=(t,e)=>new ut({shape:()=>t,unknownKeys:"strip",catchall:xr.create(),typeName:Se.ZodObject,...Le(e)});ut.strictCreate=(t,e)=>new ut({shape:()=>t,unknownKeys:"strict",catchall:xr.create(),typeName:Se.ZodObject,...Le(e)});ut.lazycreate=(t,e)=>new ut({shape:t,unknownKeys:"strip",catchall:xr.create(),typeName:Se.ZodObject,...Le(e)});class Qs extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new Bn(u.ctx.common.issues));return pe(n,{code:re.invalid_union,unionErrors:l}),Ie}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:f});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new Bn(d));return pe(n,{code:re.invalid_union,unionErrors:u}),Ie}}get options(){return this._def.options}}Qs.create=(t,e)=>new Qs({options:t,typeName:Se.ZodUnion,...Le(e)});const xa=t=>t instanceof Xs?xa(t.schema):t instanceof Nn?xa(t.innerType()):t instanceof eo?[t.value]:t instanceof Wr?t.options:t instanceof to?Object.keys(t.enum):t instanceof no?xa(t._def.innerType):t instanceof Vs?[void 0]:t instanceof Gs?[null]:null;class yl extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==fe.object)return pe(n,{code:re.invalid_type,expected:fe.object,received:n.parsedType}),Ie;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(pe(n,{code:re.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Ie)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,i){const o=new Map;for(const a of n){const l=xa(a.shape[e]);if(!l)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(u)}`);o.set(u,a)}}return new yl({typeName:Se.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...Le(i)})}}function Su(t,e){const n=Nr(t),i=Nr(e);if(t===e)return{valid:!0,data:t};if(n===fe.object&&i===fe.object){const o=Ke.objectKeys(e),a=Ke.objectKeys(t).filter(u=>o.indexOf(u)!==-1),l={...t,...e};for(const u of a){const d=Su(t[u],e[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===fe.array&&i===fe.array){if(t.length!==e.length)return{valid:!1};const o=[];for(let a=0;a<t.length;a++){const l=t[a],u=e[a],d=Su(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===fe.date&&i===fe.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class Ys extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=(a,l)=>{if(ku(a)||ku(l))return Ie;const u=Su(a.value,l.value);return u.valid?((Cu(a)||Cu(l))&&n.dirty(),{status:n.value,value:u.data}):(pe(i,{code:re.invalid_intersection_types}),Ie)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}Ys.create=(t,e,n)=>new Ys({left:t,right:e,typeName:Se.ZodIntersection,...Le(n)});class Yn extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.array)return pe(i,{code:re.invalid_type,expected:fe.array,received:i.parsedType}),Ie;if(i.data.length<this._def.items.length)return pe(i,{code:re.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ie;!this._def.rest&&i.data.length>this._def.items.length&&(pe(i,{code:re.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Qn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Bt.mergeArray(n,l)):Bt.mergeArray(n,a)}get items(){return this._def.items}rest(e){return new Yn({...this._def,rest:e})}}Yn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Yn({items:t,typeName:Se.ZodTuple,rest:null,...Le(e)})};class Js extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.object)return pe(i,{code:re.invalid_type,expected:fe.object,received:i.parsedType}),Ie;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Qn(i,u,i.path,u)),value:l._parse(new Qn(i,i.data[u],i.path,u))});return i.common.async?Bt.mergeObjectAsync(n,o):Bt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,i){return n instanceof Ne?new Js({keyType:e,valueType:n,typeName:Se.ZodRecord,...Le(i)}):new Js({keyType:Mn.create(),valueType:e,typeName:Se.ZodRecord,...Le(n)})}}class za extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.map)return pe(i,{code:re.invalid_type,expected:fe.map,received:i.parsedType}),Ie;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],f)=>({key:o._parse(new Qn(i,u,i.path,[f,"key"])),value:a._parse(new Qn(i,d,i.path,[f,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,p=await d.value;if(f.status==="aborted"||p.status==="aborted")return Ie;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const f=d.key,p=d.value;if(f.status==="aborted"||p.status==="aborted")return Ie;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}}}}za.create=(t,e,n)=>new za({valueType:e,keyType:t,typeName:Se.ZodMap,...Le(n)});class _i extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==fe.set)return pe(i,{code:re.invalid_type,expected:fe.set,received:i.parsedType}),Ie;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(pe(i,{code:re.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(pe(i,{code:re.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const p of d){if(p.status==="aborted")return Ie;p.status==="dirty"&&n.dirty(),f.add(p.value)}return{status:n.value,value:f}}const u=[...i.data.values()].map((d,f)=>a._parse(new Qn(i,d,i.path,f)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(e,n){return new _i({...this._def,minSize:{value:e,message:we.toString(n)}})}max(e,n){return new _i({...this._def,maxSize:{value:e,message:we.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}_i.create=(t,e)=>new _i({valueType:t,minSize:null,maxSize:null,typeName:Se.ZodSet,...Le(e)});class Ki extends Ne{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==fe.function)return pe(n,{code:re.invalid_type,expected:fe.function,received:n.parsedType}),Ie;function i(u,d){return ja({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ba(),Ws].filter(f=>!!f),issueData:{code:re.invalid_arguments,argumentsError:d}})}function o(u,d){return ja({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ba(),Ws].filter(f=>!!f),issueData:{code:re.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;if(this._def.returns instanceof ts){const u=this;return Ft(async function(...d){const f=new Bn([]),p=await u._def.args.parseAsync(d,a).catch(w=>{throw f.addIssue(i(d,w)),f}),g=await Reflect.apply(l,this,p);return await u._def.returns._def.type.parseAsync(g,a).catch(w=>{throw f.addIssue(o(g,w)),f})})}else{const u=this;return Ft(function(...d){const f=u._def.args.safeParse(d,a);if(!f.success)throw new Bn([i(d,f.error)]);const p=Reflect.apply(l,this,f.data),g=u._def.returns.safeParse(p,a);if(!g.success)throw new Bn([o(p,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Ki({...this._def,args:Yn.create(e).rest(mi.create())})}returns(e){return new Ki({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,i){return new Ki({args:e||Yn.create([]).rest(mi.create()),returns:n||mi.create(),typeName:Se.ZodFunction,...Le(i)})}}class Xs extends Ne{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Xs.create=(t,e)=>new Xs({getter:t,typeName:Se.ZodLazy,...Le(e)});class eo extends Ne{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return pe(n,{received:n.data,code:re.invalid_literal,expected:this._def.value}),Ie}return{status:"valid",value:e.data}}get value(){return this._def.value}}eo.create=(t,e)=>new eo({value:t,typeName:Se.ZodLiteral,...Le(e)});function Z1(t,e){return new Wr({values:t,typeName:Se.ZodEnum,...Le(e)})}class Wr extends Ne{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),i=this._def.values;return pe(n,{expected:Ke.joinValues(i),received:n.parsedType,code:re.invalid_type}),Ie}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),i=this._def.values;return pe(n,{received:n.data,code:re.invalid_enum_value,options:i}),Ie}return Ft(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Wr.create(e)}exclude(e){return Wr.create(this.options.filter(n=>!e.includes(n)))}}Wr.create=Z1;class to extends Ne{_parse(e){const n=Ke.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==fe.string&&i.parsedType!==fe.number){const o=Ke.objectValues(n);return pe(i,{expected:Ke.joinValues(o),received:i.parsedType,code:re.invalid_type}),Ie}if(n.indexOf(e.data)===-1){const o=Ke.objectValues(n);return pe(i,{received:i.data,code:re.invalid_enum_value,options:o}),Ie}return Ft(e.data)}get enum(){return this._def.values}}to.create=(t,e)=>new to({values:t,typeName:Se.ZodNativeEnum,...Le(e)});class ts extends Ne{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==fe.promise&&n.common.async===!1)return pe(n,{code:re.invalid_type,expected:fe.promise,received:n.parsedType}),Ie;const i=n.parsedType===fe.promise?n.data:Promise.resolve(n.data);return Ft(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}ts.create=(t,e)=>new ts({type:t,typeName:Se.ZodPromise,...Le(e)});class Nn extends Ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Se.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=this._def.effect||null,a={addIssue:l=>{pe(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="preprocess"){const l=o.transform(i.data,a);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}if(o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Ie:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Ie:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Zs(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Zs(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);Ke.assertNever(o)}}Nn.create=(t,e,n)=>new Nn({schema:t,typeName:Se.ZodEffects,effect:e,...Le(n)});Nn.createWithPreprocess=(t,e,n)=>new Nn({schema:e,effect:{type:"preprocess",transform:t},typeName:Se.ZodEffects,...Le(n)});class br extends Ne{_parse(e){return this._getType(e)===fe.undefined?Ft(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}br.create=(t,e)=>new br({innerType:t,typeName:Se.ZodOptional,...Le(e)});class wi extends Ne{_parse(e){return this._getType(e)===fe.null?Ft(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}wi.create=(t,e)=>new wi({innerType:t,typeName:Se.ZodNullable,...Le(e)});class no extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e);let i=n.data;return n.parsedType===fe.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}no.create=(t,e)=>new no({innerType:t,typeName:Se.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Le(e)});class Fa extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Na(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Bn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Bn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Fa.create=(t,e)=>new Fa({innerType:t,typeName:Se.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Le(e)});class Ha extends Ne{_parse(e){if(this._getType(e)!==fe.nan){const i=this._getOrReturnCtx(e);return pe(i,{code:re.invalid_type,expected:fe.nan,received:i.parsedType}),Ie}return{status:"valid",value:e.data}}}Ha.create=t=>new Ha({typeName:Se.ZodNaN,...Le(t)});const sk=Symbol("zod_brand");class K1 extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class ho extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Ie:a.status==="dirty"?(n.dirty(),W1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ie:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,n){return new ho({in:e,out:n,typeName:Se.ZodPipeline})}}class qa extends Ne{_parse(e){const n=this._def.innerType._parse(e);return Zs(n)&&(n.value=Object.freeze(n.value)),n}}qa.create=(t,e)=>new qa({innerType:t,typeName:Se.ZodReadonly,...Le(e)});const V1=(t,e={},n)=>t?es.create().superRefine((i,o)=>{var a,l;if(!t(i)){const u=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...f,fatal:d})}}):es.create(),ok={object:ut.lazycreate};var Se;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(Se||(Se={}));const ak=(t,e={message:`Input not instance of ${t.name}`})=>V1(n=>n instanceof t,e),G1=Mn.create,Q1=Hr.create,lk=Ha.create,ck=qr.create,Y1=Ks.create,uk=bi.create,dk=Da.create,fk=Vs.create,hk=Gs.create,pk=es.create,gk=mi.create,vk=xr.create,mk=Ua.create,yk=jn.create,bk=ut.create,_k=ut.strictCreate,wk=Qs.create,xk=yl.create,$k=Ys.create,Ek=Yn.create,kk=Js.create,Ck=za.create,Sk=_i.create,Tk=Ki.create,Ak=Xs.create,Rk=eo.create,Ik=Wr.create,Ok=to.create,Lk=ts.create,eg=Nn.create,Pk=br.create,Mk=wi.create,Bk=Nn.createWithPreprocess,jk=ho.create,Nk=()=>G1().optional(),Dk=()=>Q1().optional(),Uk=()=>Y1().optional(),zk={string:t=>Mn.create({...t,coerce:!0}),number:t=>Hr.create({...t,coerce:!0}),boolean:t=>Ks.create({...t,coerce:!0}),bigint:t=>qr.create({...t,coerce:!0}),date:t=>bi.create({...t,coerce:!0})},Fk=Ie;var vt=Object.freeze({__proto__:null,defaultErrorMap:Ws,setErrorMap:Z9,getErrorMap:Ba,makeIssue:ja,EMPTY_PATH:K9,addIssueToContext:pe,ParseStatus:Bt,INVALID:Ie,DIRTY:W1,OK:Ft,isAborted:ku,isDirty:Cu,isValid:Zs,isAsync:Na,get util(){return Ke},get objectUtil(){return Eu},ZodParsedType:fe,getParsedType:Nr,ZodType:Ne,ZodString:Mn,ZodNumber:Hr,ZodBigInt:qr,ZodBoolean:Ks,ZodDate:bi,ZodSymbol:Da,ZodUndefined:Vs,ZodNull:Gs,ZodAny:es,ZodUnknown:mi,ZodNever:xr,ZodVoid:Ua,ZodArray:jn,ZodObject:ut,ZodUnion:Qs,ZodDiscriminatedUnion:yl,ZodIntersection:Ys,ZodTuple:Yn,ZodRecord:Js,ZodMap:za,ZodSet:_i,ZodFunction:Ki,ZodLazy:Xs,ZodLiteral:eo,ZodEnum:Wr,ZodNativeEnum:to,ZodPromise:ts,ZodEffects:Nn,ZodTransformer:Nn,ZodOptional:br,ZodNullable:wi,ZodDefault:no,ZodCatch:Fa,ZodNaN:Ha,BRAND:sk,ZodBranded:K1,ZodPipeline:ho,ZodReadonly:qa,custom:V1,Schema:Ne,ZodSchema:Ne,late:ok,get ZodFirstPartyTypeKind(){return Se},coerce:zk,any:pk,array:yk,bigint:ck,boolean:Y1,date:uk,discriminatedUnion:xk,effect:eg,enum:Ik,function:Tk,instanceof:ak,intersection:$k,lazy:Ak,literal:Rk,map:Ck,nan:lk,nativeEnum:Ok,never:vk,null:hk,nullable:Mk,number:Q1,object:bk,oboolean:Uk,onumber:Dk,optional:Pk,ostring:Nk,pipeline:jk,preprocess:Bk,promise:Lk,record:kk,set:Sk,strictObject:_k,string:G1,symbol:dk,transformer:eg,tuple:Ek,undefined:fk,union:wk,unknown:gk,void:mk,NEVER:Fk,ZodIssueCode:re,quotelessJson:W9,ZodError:Bn});const Hk=/^[0-9a-f]{64}$/,ro=t=>{const e=typeof t=="string"&&t.length===64&&Hk.test(t);return e||console.warn("invalid id is ignored: ",t),e},qk=t=>e=>t.safeParse(e).success,Wk=vt.tuple([vt.literal("emoji"),vt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),vt.string().url()]);class Zk{findTagsByName(e){return this.tags.filter(([n])=>n===e)}findFirstTagByName(e){return this.tags.find(([n])=>n===e)}findLastTagByName(e){return this.tags.findLast(([n])=>n===e)}pTags(){return this.tags.filter(([e,n])=>e==="p"&&ro(n))}eTags(){return this.tags.filter(([e,n])=>e==="e"&&ro(n))}emojiTags(){return this.tags.filter(qk(Wk))}taggedPubkeys(){return gi(this.pTags().map(([,e])=>e))}taggedEventIds(){return this.eTags().map(([,e])=>e)}lastTaggedEventId(){const e=this.taggedEventIds();if(e.length!==0)return e[e.length-1]}getEmojiUrl(e){const n=this.emojiTags().find(([,o])=>o===e);if(n==null)return;const[,,i]=n;return i}}class vd extends Zk{constructor(e){super(),this.rawEvent=e}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}const Kk=/^\p{Emoji}[\p{Emoji_Component}\p{Emoji_Modifier}\p{Emoji_Presentation}]*$/u,tg=/^:(\w+):$/,Vk=t=>{if(t.isLikeOrDislike())return{type:"LikeDislike",content:t.content};if(t.isEmoji())return{type:"Emoji",content:t.content};if(t.isCustomEmoji()){const e=t.getShortcode(),n=t.getUrl();if(e!=null&&n!=null)return{type:"CustomEmoji",content:t.content,shortcode:e,url:n}}return{type:"Unknown",content:t.content}};class Gk extends vd{constructor(e){if(e.kind!==ft.Reaction)throw new TypeError("kind should be 7");super(e)}isLike(){return this.content==="+"}isDislike(){return this.content==="-"}isLikeOrDislike(){return this.isLike()||this.isDislike()}isEmoji(){return Kk.test(this.content)}isCustomEmoji(){return tg.test(this.content)}getShortcode(){return this.content.match(tg)?.[1]}getUrl(){const e=this.getShortcode();if(e!=null)return this.getEmojiUrl(e)}toReactionTypes(){return Vk(this)}}const{decode:Qk}=uo,Yk=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,Jk=/(?:#\[(?<idx>\d+)\])/g,Xk=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,eC=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,tC=/:(?<emoji>\w+):/gu,J1=t=>{const e=[...t.matchAll(Yk),...t.matchAll(Jk),...t.matchAll(Xk),...t.matchAll(eC),...t.matchAll(tC)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=t.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return e.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=Qk(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<t.length&&o(t.length),i},nC=t=>{const e=t.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&ro(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:e.length===1?"reply":o===0?"root":e.length===2||o===e.length-1?"reply":"mention";return e.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};let rC=class extends vd{#e;#t;constructor(e){if(e.kind!==ft.Text)throw new TypeError("kind should be 1");super(e)}parsed(){return this.#t!=null?this.#t:(this.#t=J1(this.content),this.#t)}resolveTagReference({tagIndex:e,content:n}){const i=this.rawEvent.tags[e];if(i==null)return;const o=i[0];if(o==="p"&&ro(i[1]))return{type:"MentionedUser",tagIndex:e,content:n,pubkey:i[1]};if(o==="e"&&ro(i[1])){const a=this.markedEventTags().find(l=>l.index===e);return{type:"MentionedEvent",tagIndex:e,content:n,eventId:i[1],marker:a?.marker}}}markedEventTags(){return this.#e!=null?this.#e:(this.#e=nC(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:e})=>e==="reply")}rootEvent(){return this.markedEventTags().find(({marker:e})=>e==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:e})=>e==="mention")}contentWarning(){const e=this.findLastTagByName("content-warning");return e==null?{contentWarning:!1}:{contentWarning:!0,reason:(e[1]?.length??0)>0?e[1]:void 0}}containsEventMention(e){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===e);return this.containsEventNote(e)||this.containsEventMentionIndex(n)}containsEventMentionIndex(e){return e<0||e>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReference"&&n.tagIndex===e)}containsEventNote(e){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===e||n.data.type==="note"&&n.data.data===e))}};const hi=t=>new vd(t),md=t=>new rC(t),Wa=t=>new Gk(t),iC=()=>{const t=[...z9];return window.navigator.language.includes("ja")&&t.push(...F9),t},X1=()=>({relayUrls:iC(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!0,showEmojiReaction:!0,showMedia:!0,hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),sC=t=>JSON.stringify(t),oC=t=>({...X1(),...JSON.parse(t)}),aC=_4(()=>window.localStorage,sC,oC),[Hi,Qt]=w4("RabbitConfig",X1(),aC),tt=()=>{const t=I=>{Qt("relayUrls",E=>gi([...E,I]))},e=I=>{Qt("relayUrls",E=>E.filter(A=>A!==I))},n=I=>{Qt("mutedPubkeys",E=>gi([...E,I]))},i=I=>{Qt("mutedPubkeys",E=>E.filter(A=>A!==I))},o=I=>{Qt("mutedKeywords",E=>gi([...E,I]))},a=I=>{Qt("mutedKeywords",E=>E.filter(A=>A!==I))},l=I=>{Qt("columns",E=>{const A=E.findIndex(L=>L.id===I.id);if(A>=0){const L=[...E];return L.splice(A,1,I),L}return[...E,I]})},u=(I,E)=>{Qt("columns",A=>{const L=E-1,R=Math.max(Math.min(L,A.length),0),U=A.findIndex(ne=>ne.id===I);if(U<0||R===U)return A;console.log(U,R);const N=[...A],[Z]=N.splice(U,1);return N.splice(R,0,Z),N})},d=I=>{Qt("columns",E=>E.filter(A=>A.id!==I))},f=I=>{Qt("customEmojis",E=>({...E,[I.shortcode]:I}))},p=I=>{Qt("customEmojis",E=>{const A=Object.fromEntries(I.map(L=>[L.shortcode,L]));return{...E,...A}})},g=I=>{Qt("customEmojis",E=>({...E,[I]:void 0}))},m=I=>Hi.customEmojis[I],w=I=>j1.sortBy(Object.values(Hi.customEmojis).filter(({shortcode:E})=>E.includes(I)),[E=>E.shortcode.length]),b=I=>Hi.mutedPubkeys.includes(I),x=I=>I.kind===ft.Text?Hi.mutedKeywords.some(E=>I.content.includes(E)):!1;return{config:()=>Hi,setConfig:Qt,addRelay:t,removeRelay:e,saveColumn:l,moveColumn:u,removeColumn:d,initializeColumns:({pubkey:I})=>{if((Hi.columns?.length??0)>0)return;const E=[D1({width:"widest",pubkey:I}),U1({pubkey:I}),F1({name:"自分の投稿",pubkey:I}),H1({name:"自分のリアクション",pubkey:I})];navigator.language.includes("ja")&&E.splice(2,0,z1()),Qt("columns",()=>[...E])},saveEmoji:f,saveEmojis:p,removeEmoji:g,getEmoji:m,searchEmojis:w,addMutedPubkey:n,removeMutedPubkey:i,addMutedKeyword:o,removeMutedKeyword:a,isPubkeyMuted:b,shouldMuteEvent:I=>{const E=hi(I);return b(I.pubkey)||E.taggedPubkeys().some(b)||I.kind===ft.Text&&x(I)}}},yd=(t,e)=>{const n=t.created_at-e.created_at;return n!==0?n:t.id===e.id?0:t.id>e.id?1:-1},ev=t=>{if(t.length!==0)return t.length===1?t[0]:t.reduce((e,n)=>yd(e,n)>0?e:n)},Tu=t=>Array.from(t).sort((e,n)=>-yd(e,n)),[lC]=Te(new EE({eoseSubTimeout:12e3})),bd=()=>lC,[tv,ng]=Gi({activeSubscriptions:0,activeBatchSubscriptions:0});f4(()=>{yr(()=>{console.debug("stats",{...tv})})});const nv=()=>({stats:tv,setActiveSubscriptions:n=>ng("activeSubscriptions",n),setActiveBatchSubscriptions:n=>ng("activeBatchSubscriptions",n)});let rg=0;const cC=()=>{const t=rg;return rg+=1,t};class uC{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(e){this.id=cC(),this.req=e}#n(e){this.#e.forEach(n=>{n(e)})}#r(){this.#t.forEach(e=>{e()})}update(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=e,this.#n(e)}updateWith(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(e(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(e){this.#e.push(e)}subscribe(e){this.onUpdate(e)}onComplete(e){this.#t.push(e)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const e=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([e,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((e,n)=>{this.onComplete(()=>{this.res!=null?e(this.res):n(new Error("result was not set"))})})}}const dC=t=>{const e=Ze(t),n=Ze(()=>e().batchSize??100),i=Ze(()=>e().interval??2e3),[o,a]=Te([]);let l;const u=()=>{const{executor:g}=e(),m=o();m.length>0&&(a([]),g(m)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(m=>[...m,g]):(u(),a([g])),d()},removeTask:g=>{a(m=>m.filter(w=>w!==g))}}};class ps extends uC{addEvent(e){this.updateWith(n=>cd.insertEventIntoDescendingList(n??[],e))}firstEventPromise(){return this.toUpdatePromise().then(e=>e[0])}latestEventPromise(){return this.toCompletePromise().then(e=>{const n=ev(e);if(n==null)throw new Error("event not found");return n})}}let Au=0;const{setActiveBatchSubscriptions:fC}=nv();setInterval(()=>{fC(Au)},1e3);const hC=t=>t.kind>=3e4&&t.kind<4e4,pC=({kind:t,author:e,identifier:n})=>`${t}:${e}:${n}`,{addTask:gC,removeTask:vC}=dC(()=>({interval:2e3,batchSize:150,executor:t=>{const e=new Map,n=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u=new Map;t.forEach(A=>{if(A.req.type==="Event"){const L=n.get(A.req.eventId)??[];n.set(A.req.eventId,[...L,A])}else if(A.req.type==="Profile"){const L=e.get(A.req.pubkey)??[];e.set(A.req.pubkey,[...L,A])}else if(A.req.type==="Reactions"){const L=i.get(A.req.mentionedEventId)??[];i.set(A.req.mentionedEventId,[...L,A])}else if(A.req.type==="Reposts"){const L=o.get(A.req.mentionedEventId)??[];o.set(A.req.mentionedEventId,[...L,A])}else if(A.req.type==="ZapReceipts"){const L=a.get(A.req.mentionedEventId)??[];o.set(A.req.mentionedEventId,[...L,A])}else if(A.req.type==="ParameterizedReplaceableEvent"){const L=pC(A.req),R=l.get(L)??[];l.set(L,[...R,A])}else if(A.req.type==="Followings"){const L=u.get(A.req.pubkey)??[];u.set(A.req.pubkey,[...L,A])}});const d=[...n.keys()],f=[...e.keys()],p=[...i.keys()],g=[...o.keys()],m=[...a.keys()],w=[...u.keys()],b=[];if(d.length>0&&b.push({ids:d}),f.length>0&&b.push({kinds:[ft.Metadata],authors:f}),p.length>0&&b.push({kinds:[ft.Reaction],"#e":p}),g.length>0&&b.push({kinds:[6],"#e":g}),m.length>0&&b.push({kinds:[9735],"#e":m}),w.length>0&&b.push({kinds:[ft.Contacts],authors:w}),l.size>0&&Array.from(l.values()).forEach(([A])=>{if(A.req.type!=="ParameterizedReplaceableEvent")return;const{req:{kind:L,author:R,identifier:U}}=A;b.push({kinds:[L],authors:[R],"#d":[U]})}),b.length===0)return;const x=(A,L)=>{A.forEach(R=>{R.addEvent(L)})},$=()=>{t.forEach(A=>{A.complete()})},{config:C}=tt(),E=bd()().sub(C().relayUrls,b,{});Au+=1,E.on("event",A=>{if(A.kind===ft.Metadata){const L=e.get(A.pubkey)??[];x(L,A);return}if(A.kind===ft.Reaction){const L=hi(A).lastTaggedEventId();if(L!=null){const R=i.get(L)??[];x(R,A)}}else if(A.kind===ft.Repost){const L=hi(A).lastTaggedEventId();if(L!=null){const R=o.get(L)??[];x(R,A)}}else if(A.kind===ft.Zap)hi(A).eTags().forEach(([,R])=>{const U=o.get(R)??[];x(U,A)});else if(A.kind===ft.Contacts){const L=u.get(A.pubkey)??[];x(L,A)}else if(hC(A)){const L=hi(A).findFirstTagByName("d")?.[1];if(L!=null){const R=`${A.kind}:${A.pubkey}:${L}`,U=l.get(R)??[];x(U,A)}else console.warn("identifier is undefined")}else{const L=n.get(A.id)??[];L.length>0?x(L,A):console.warn("unknown event received")}}),E.on("eose",()=>{$(),E.unsub(),Au-=1})}})),bl=({task:t,signal:e})=>{gC(t),e?.addEventListener("abort",()=>vC(t))};class mC extends Error{}const zr=(t,e)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=e!=null?`TimeoutError: ${e}`:"TimeoutError";a(new mC(l))},t)});return Promise.race([n,i])},yC=t=>{const e=Ze(t),n=as(()=>["useEvent",e()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new ps({type:"Event",eventId:u}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return bl({task:d,signal:a}),zr(15e3,`useEvent: ${u}`)(f)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},xn=t=>e=>t.some(n=>n==null)?null:e(t),bC=B("<span>"),_C=B('<div class="truncate"> '),io=t=>{const e=mt(),[n,i]=h4(t,["eventId"]),{shouldMuteEvent:o}=tt(),{event:a,query:l}=yC(()=>xn([n.eventId])(([d])=>({eventId:d}))),u=()=>{const d=a();return d!=null&&o(d)};return S(Pn,{get fallback(){return(()=>{const d=bC();return k(d,()=>e()("post.failedToFetchEvent"),null),k(d,()=>t.eventId,null),d})()},get children(){return[S(Ge,{get when(){return u()},children:null}),S(Ge,{get when(){return a()},keyed:!0,children:d=>S(Gv,p4({event:d},i))}),S(Ge,{get when(){return l.isLoading&&n.eventId},keyed:!0,children:d=>(()=>{const f=_C(),p=f.firstChild;return k(f,()=>e()("general.loading"),p),k(f,S(qs,{eventId:d}),null),f})()})]}})},wC=t=>{if(t==null||t.length===0)throw new TypeError("content is empty or null");return JSON.parse(t)},xC=t=>{try{return wC(t)}catch(e){return console.warn("failed to parse profile (kind 0): ",e,t),null}},rv=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n),a=t(n);if(a==null)return Promise.resolve(null);const l=a.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return a.onUpdate(u=>{const d=ev(u);(o==null||d!=null&&yd(d,o)>=0)&&e.setQueryData(n,d)}),bl({task:a,signal:i}),zr(15e3,`${JSON.stringify(n)}`)(l)},iv=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n),a=t(n);if(a==null)return Promise.resolve([]);const l=a.toUpdatePromise().catch(()=>[]);return a.onUpdate(u=>{e.setQueryData(n,()=>{if(o==null)return u;const d=j1.uniqBy([...o,...u],f=>f.id);return Tu(d)})}),bl({task:a,signal:i}),zr(15e3,`${JSON.stringify(n)}`)(l)},gs=t=>{const e=os(),n=Ze(t),i=Ze(()=>["useProfile",n()]),o=as(i,rv({taskProvider:([,u])=>{if(u==null)return null;const{pubkey:d}=u;return new ps({type:"Profile",pubkey:d})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1});return{profile:Ze(()=>{if(o.data==null)return null;const{content:u}=o.data;return xC(u)}),invalidateProfile:()=>e.invalidateQueries(i()),query:o}},{npubEncode:$C}=uo,po=t=>{try{return $C(t)}catch{return console.error("failed to encode pubkey into npub",t),t}},_d=t=>{const{profile:e}=gs(()=>({pubkey:t.pubkey}));return S(Pn,{get fallback(){return po(t.pubkey)},get children(){return[S(Ge,{get when(){return(e()?.display_name?.length??0)>0},get children(){return e()?.display_name}}),S(Ge,{get when(){return(e()?.name?.length??0)>0},get children(){return["@",Ze(()=>e()?.name)]}})]}})},sv=t=>{const[e,n]=Te(new Date);return yr(()=>{const i=setInterval(()=>{n(new Date)},t().interval);_r(()=>clearInterval(i))}),e},EC=t=>{switch(t.kind){case"now":return"now";case"seconds":return`${t.value}s`;case"minutes":return`${t.value}m`;case"hours":return`${t.value}h`;case"days":return`${t.value}d`;case"abs":default:return t.value.toLocaleDateString()}},ig=t=>`${t.getHours()}:${t.getMinutes().toString().padStart(2,"0")}`,kC=t=>{switch(t.kind){case"today":return t.value.toLocaleTimeString();case"yesterday":case"abs":default:return t.value.toLocaleString()}},CC=t=>{switch(t.kind){case"today":return ig(t.value);case"yesterday":return`昨日 ${ig(t.value)}`;case"abs":default:return t.value.toLocaleString()}},SC=(t,e)=>Math.round(Number(e)-Number(t))/1e3,TC=(t,e)=>{const n=SC(t,e);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:t}},sg=(t,e)=>t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate(),AC=t=>new Date(+t-24*60*60*1e3),ov=(t,e,n)=>sg(t,e)?n({kind:"today",value:t}):sg(t,AC(e))?n({kind:"yesterday",value:t}):n({kind:"abs",value:t}),RC=(t,e=new Date)=>ov(t,e,kC),IC=(t,e=new Date)=>ov(t,e,CC),og=(t,e=new Date,n=EC)=>n(TC(t,e)),ag=sv(()=>({interval:7e3})),lg=sv(()=>({interval:60*1e3})),av=()=>{const{config:t}=tt();return e=>{switch(t().dateFormat){case"absolute-long":return RC(e,lg());case"absolute-short":return IC(e,lg());case"relative":return og(e,ag());default:return og(e,ag())}}},[OC,oi]=Te({type:"Closed"}),Kr=()=>({modalState:OC,setModalState:oi,showLogin:()=>{oi({type:"Login"})},showProfile:l=>{oi({type:"Profile",pubkey:l})},showProfileEdit:()=>{oi({type:"ProfileEdit"})},showAddColumn:()=>{oi({type:"AddColumn"})},showAbout:()=>{oi({type:"About"})},closeModal:()=>{oi({type:"Closed"})}}),LC=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="select-text hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),PC=t=>{const e=mt(),{showProfile:n}=Kr(),i=av(),o=Ze(()=>hi(t.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=LC(),u=l.firstChild,d=u.firstChild,f=d.nextSibling,p=f.firstChild,g=f.nextSibling,m=u.nextSibling;return k(d,S(B1,{})),p.$$click=()=>n(t.event.pubkey),k(p,S(_d,{get pubkey(){return t.event.pubkey}})),k(f,()=>e()("notification.reposted"),null),k(g,()=>i(o().createdAtAsDate())),k(m,S(io,{get eventId(){return a()}})),l})()};yt(["click"]);const MC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),BC=(t={})=>(()=>{const e=MC();return it(e,t,!0,!0),e})(),jC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),lv=(t={})=>(()=>{const e=jC();return it(e,t,!0,!0),e})(),NC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),cv=(t={})=>(()=>{const e=NC();return it(e,t,!0,!0),e})(),DC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),uv=(t={})=>(()=>{const e=DC();return it(e,t,!0,!0),e})(),UC=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),dv=(t={})=>(()=>{const e=UC();return it(e,t,!0,!0),e})(),zC=B('<div class="absolute z-20">'),FC=B('<div><button type="button" class="flex items-center">'),wd=t=>{let e,n;const[i,o]=Te(!1),[a,l]=Te({}),u=g4(()=>t.children),d=()=>o(!1),f=()=>o(b=>!b),p=b=>{const x=b.target;x!=null&&!n?.contains(x)&&d()},g=()=>{document.addEventListener("mousedown",p)},m=()=>{document.removeEventListener("mousedown",p)},w=()=>{if(e==null||n==null)return;const b=e?.getBoundingClientRect(),x=n?.getBoundingClientRect();let{top:$,left:C}=b;t.position==="left"?C-=b.width:t.position==="right"?C+=b.width:t.position==="top"?($-=b.height,C-=b.left+b.width/2):($+=b.height,C+=b.width/2),$=Math.min($,window.innerHeight-x.height),C=Math.min(C,window.innerWidth-x.width),l({left:`${C}px`,top:`${$}px`})};return yr(()=>{i()?(g(),t.onOpen?.()):(m(),t.onClose?.())}),yr(tl(u,()=>{w()})),yr(()=>{i()&&w()}),Jn(()=>{t.ref?.({close:d,elem:n})}),_r(()=>m()),(()=>{const b=FC(),x=b.firstChild;x.$$click=()=>{f(),w()};const $=e;return typeof $=="function"?Vn($,x):e=x,k(x,()=>t.button),k(b,S(m4,{get children(){const C=zC(),I=n;return typeof I=="function"?Vn(I,C):n=C,k(C,u),Me(E=>{const A=!i(),L=!!i(),R=a();return A!==E._v$&&C.classList.toggle("hidden",E._v$=A),L!==E._v$2&&C.classList.toggle("block",E._v$2=L),E._v$3=v4(C,R,E._v$3),E},{_v$:void 0,_v$2:void 0,_v$3:void 0}),C}}),null),b})()};yt(["click"]);const HC=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),qC=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),WC=t=>{const e=()=>{t.item?.onSelect?.(),t.onClose()};return(()=>{const n=HC(),i=n.firstChild;return i.$$click=e,k(i,()=>t.item.content()),n})()},fv=t=>{let e;const n=()=>e?.close();return S(wd,{ref:i=>{e=i},get button(){return t.children},position:"bottom",get children(){const i=qC();return k(i,S(zt,{get each(){return t.menu.filter(o=>o.when==null||o.when())},children:o=>S(WC,{item:o,onClose:n})})),i}})};yt(["click"]);const ZC=B('<span class="inline-block h-4 w-4 pt-[1px] text-rose-400">'),cg=B('<span class="truncate">'),KC=B('<img class="h-4 max-w-[3rem]">'),VC=t=>t.type==="LikeDislike"&&t.content==="+",hv=t=>S(Pn,{get fallback(){return(()=>{const e=cg();return k(e,()=>t.reactionTypes.content),e})()},get children(){return[S(Ge,{get when(){return VC(t.reactionTypes)},get children(){const e=ZC();return k(e,S(dv,{})),e}}),S(Ge,{get when(){return t.reactionTypes.type==="Emoji"&&t.reactionTypes},keyed:!0,children:({content:e})=>(()=>{const n=cg();return k(n,e),n})()}),S(Ge,{get when(){return t.reactionTypes.type==="CustomEmoji"&&t.reactionTypes},keyed:!0,children:({shortcode:e,url:n})=>(()=>{const i=KC();return Ue(i,"src",n),Ue(i,"alt",`:${e}:`),i})()})]}});function pv(t){return t&&t.__esModule?t.default:t}function Ln(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _l,$e,gv,Ns,vv,ug,Za={},mv=[],GC=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Dr(t,e){for(var n in e)t[n]=e[n];return t}function yv(t){var e=t.parentNode;e&&e.removeChild(t)}function Ru(t,e,n){var i,o,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?o=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?_l.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(a in t.defaultProps)l[a]===void 0&&(l[a]=t.defaultProps[a]);return $a(t,l,i,o,null)}function $a(t,e,n,i,o){var a={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++gv};return o==null&&$e.vnode!=null&&$e.vnode(a),a}function gr(){return{current:null}}function ns(t){return t.children}function Kn(t,e){this.props=t,this.context=e}function rs(t,e){if(e==null)return t.__?rs(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?rs(t):null}function bv(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return bv(t)}}function dg(t){(!t.__d&&(t.__d=!0)&&Ns.push(t)&&!Ka.__r++||ug!==$e.debounceRendering)&&((ug=$e.debounceRendering)||vv)(Ka)}function Ka(){for(var t;Ka.__r=Ns.length;)t=Ns.sort(function(e,n){return e.__v.__b-n.__v.__b}),Ns=[],t.some(function(e){var n,i,o,a,l,u;e.__d&&(l=(a=(n=e).__v).__e,(u=n.__P)&&(i=[],(o=Dr({},a)).__v=a.__v+1,xd(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??rs(a),a.__h),$v(i,a),a.__e!=l&&bv(a)))})}function _v(t,e,n,i,o,a,l,u,d,f){var p,g,m,w,b,x,$,C=i&&i.__k||mv,I=C.length;for(n.__k=[],p=0;p<e.length;p++)if((w=n.__k[p]=(w=e[p])==null||typeof w=="boolean"?null:typeof w=="string"||typeof w=="number"||typeof w=="bigint"?$a(null,w,null,null,w):Array.isArray(w)?$a(ns,{children:w},null,null,null):w.__b>0?$a(w.type,w.props,w.key,null,w.__v):w)!=null){if(w.__=n,w.__b=n.__b+1,(m=C[p])===null||m&&w.key==m.key&&w.type===m.type)C[p]=void 0;else for(g=0;g<I;g++){if((m=C[g])&&w.key==m.key&&w.type===m.type){C[g]=void 0;break}m=null}xd(t,w,m=m||Za,o,a,l,u,d,f),b=w.__e,(g=w.ref)&&m.ref!=g&&($||($=[]),m.ref&&$.push(m.ref,null,w),$.push(g,w.__c||b,w)),b!=null?(x==null&&(x=b),typeof w.type=="function"&&w.__k===m.__k?w.__d=d=wv(w,d,t):d=xv(t,w,m,C,b,d),typeof n.type=="function"&&(n.__d=d)):d&&m.__e==d&&d.parentNode!=t&&(d=rs(m))}for(n.__e=x,p=I;p--;)C[p]!=null&&(typeof n.type=="function"&&C[p].__e!=null&&C[p].__e==n.__d&&(n.__d=rs(i,p+1)),kv(C[p],C[p]));if($)for(p=0;p<$.length;p++)Ev($[p],$[++p],$[++p])}function wv(t,e,n){for(var i,o=t.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=t,e=typeof i.type=="function"?wv(i,e,n):xv(n,i,i,o,i.__e,e));return e}function Va(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){Va(n,e)}):e.push(t)),e}function xv(t,e,n,i,o,a){var l,u,d;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;t.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function QC(t,e,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in e||Ga(t,a,null,n[a],i);for(a in e)o&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===e[a]||Ga(t,a,e[a],n[a],i)}function fg(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||GC.test(e)?n:n+"px"}function Ga(t,e,n,i,o){var a;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||fg(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||fg(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?i||t.addEventListener(e,a?pg:hg,a):t.removeEventListener(e,a?pg:hg,a);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function hg(t){this.l[t.type+!1]($e.event?$e.event(t):t)}function pg(t){this.l[t.type+!0]($e.event?$e.event(t):t)}function xd(t,e,n,i,o,a,l,u,d){var f,p,g,m,w,b,x,$,C,I,E,A=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=e.__e=n.__e,e.__h=null,a=[u]),(f=$e.__b)&&f(e);try{e:if(typeof A=="function"){if($=e.props,C=(f=A.contextType)&&i[f.__c],I=f?C?C.props.value:f.__:i,n.__c?x=(p=e.__c=n.__c).__=p.__E:("prototype"in A&&A.prototype.render?e.__c=p=new A($,I):(e.__c=p=new Kn($,I),p.constructor=A,p.render=JC),C&&C.sub(p),p.props=$,p.state||(p.state={}),p.context=I,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),A.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Dr({},p.__s)),Dr(p.__s,A.getDerivedStateFromProps($,p.__s))),m=p.props,w=p.state,g)A.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(A.getDerivedStateFromProps==null&&$!==m&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps($,I),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate($,p.__s,I)===!1||e.__v===n.__v){p.props=$,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(L){L&&(L.__=e)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate($,p.__s,I),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(m,w,b)})}p.context=I,p.props=$,p.state=p.__s,(f=$e.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Dr(Dr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(b=p.getSnapshotBeforeUpdate(m,w)),E=f!=null&&f.type===ns&&f.key==null?f.props.children:f,_v(t,Array.isArray(E)?E:[E],e,n,i,o,a,l,u,d),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),x&&(p.__E=p.__=null),p.__e=!1}else a==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=YC(n.__e,e,n,i,o,a,l,d);(f=$e.diffed)&&f(e)}catch(L){e.__v=null,(d||a!=null)&&(e.__e=u,e.__h=!!d,a[a.indexOf(u)]=null),$e.__e(L,e,n)}}function $v(t,e){$e.__c&&$e.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(i){i.call(n)})}catch(i){$e.__e(i,n.__v)}})}function YC(t,e,n,i,o,a,l,u){var d,f,p,g=n.props,m=e.props,w=e.type,b=0;if(w==="svg"&&(o=!0),a!=null){for(;b<a.length;b++)if((d=a[b])&&"setAttribute"in d==!!w&&(w?d.localName===w:d.nodeType===3)){t=d,a[b]=null;break}}if(t==null){if(w===null)return document.createTextNode(m);t=o?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,m.is&&m),a=null,u=!1}if(w===null)g===m||u&&t.data===m||(t.data=m);else{if(a=a&&_l.call(t.childNodes),f=(g=n.props||Za).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},b=0;b<t.attributes.length;b++)g[t.attributes[b].name]=t.attributes[b].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(QC(t,m,g,o,u),p)e.__k=[];else if(b=e.props.children,_v(t,Array.isArray(b)?b:[b],e,n,i,o&&w!=="foreignObject",a,l,a?a[0]:n.__k&&rs(n,0),u),a!=null)for(b=a.length;b--;)a[b]!=null&&yv(a[b]);u||("value"in m&&(b=m.value)!==void 0&&(b!==g.value||b!==t.value||w==="progress"&&!b)&&Ga(t,"value",b,g.value,!1),"checked"in m&&(b=m.checked)!==void 0&&b!==t.checked&&Ga(t,"checked",b,g.checked,!1))}return t}function Ev(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){$e.__e(i,n)}}function kv(t,e,n){var i,o;if($e.unmount&&$e.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||Ev(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){$e.__e(a,e)}i.base=i.__P=null}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&kv(i[o],e,typeof t.type!="function");n||t.__e==null||yv(t.__e),t.__e=t.__d=void 0}function JC(t,e,n){return this.constructor(t,n)}function Cv(t,e,n){var i,o,a;$e.__&&$e.__(t,e),o=(i=typeof n=="function")?null:n&&n.__k||e.__k,a=[],xd(e,t=(!i&&n||e).__k=Ru(ns,null,[t]),o||Za,Za,e.ownerSVGElement!==void 0,!i&&n?[n]:o?null:e.firstChild?_l.call(e.childNodes):null,a,!i&&n?n:o?o.__e:e.firstChild,i),$v(a,t)}_l=mv.slice,$e={__e:function(t,e){for(var n,i,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(t)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(a){t=a}throw t}},gv=0,Kn.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Dr({},this.state),typeof t=="function"&&(t=t(Dr({},n),this.props)),t&&Dr(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),dg(this))},Kn.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),dg(this))},Kn.prototype.render=ns,Ns=[],vv=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ka.__r=0;var XC=0;function V(t,e,n,i,o){var a,l,u={};for(l in e)l=="ref"?a=e[l]:u[l]=e[l];var d={type:t,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--XC,__source:i,__self:o};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return $e.vnode&&$e.vnode(d),d}function eS(t,e){try{window.localStorage[`emoji-mart.${t}`]=JSON.stringify(e)}catch{}}function tS(t){try{const e=window.localStorage[`emoji-mart.${t}`];if(e)return JSON.parse(e)}catch{}}var Fr={set:eS,get:tS};const tu=new Map,nS=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function rS(){for(const{v:t,emoji:e}of nS)if(Sv(e))return t}function iS(){return!Sv("🇨🇦")}function Sv(t){if(tu.has(t))return tu.get(t);const e=sS(t);return tu.set(t,e),e}const sS=(()=>{let t=null;try{navigator.userAgent.includes("jsdom")||(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!t)return()=>!1;const e=25,n=20,i=Math.floor(e/2);return t.font=i+"px Arial, Sans-Serif",t.textBaseline="top",t.canvas.width=n*2,t.canvas.height=e,o=>{t.clearRect(0,0,n*2,e),t.fillStyle="#FF0000",t.fillText(o,0,22),t.fillStyle="#0000FF",t.fillText(o,n,22);const a=t.getImageData(0,0,n,e).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,f=Math.floor(u/4/n),p=t.getImageData(d,f,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||t.measureText(o).width>=n)}})();var gg={latestVersion:rS,noCountryFlags:iS};const Iu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let It=null;function oS(t){It||(It=Fr.get("frequently")||{});const e=t.id||t;e&&(It[e]||(It[e]=0),It[e]+=1,Fr.set("last",e),Fr.set("frequently",It))}function aS({maxFrequentRows:t,perLine:e}){if(!t)return[];It||(It=Fr.get("frequently"));let n=[];if(!It){It={};for(let a in Iu.slice(0,e)){const l=Iu[a];It[l]=e-a,n.push(l)}return n}const i=t*e,o=Fr.get("last");for(let a in It)n.push(a);if(n.sort((a,l)=>{const u=It[l],d=It[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete It[l];o&&n.indexOf(o)==-1&&(delete It[n[n.length-1]],n.splice(-1,1,o)),Fr.set("frequently",It)}return n}var Tv={add:oS,get:aS,DEFAULTS:Iu},Av={};Av=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var mr={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Mt=null,He=null;const nu={};async function vg(t){if(nu[t])return nu[t];const n=await(await fetch(t)).json();return nu[t]=n,n}let ru=null,Rv=null,Iv=!1;function wl(t,{caller:e}={}){return ru||(ru=new Promise(n=>{Rv=n})),t?lS(t):e&&!Iv&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),ru}async function lS(t){Iv=!0;let{emojiVersion:e,set:n,locale:i}=t;if(e||(e=mr.emojiVersion.value),n||(n=mr.set.value),i||(i=mr.locale.value),He)He.categories=He.categories.filter(d=>!d.name);else{He=(typeof t.data=="function"?await t.data():t.data)||await vg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${n}.json`),He.emoticons={},He.natives={},He.categories.unshift({id:"frequent",emojis:[]});for(const d in He.aliases){const f=He.aliases[d],p=He.emojis[f];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}He.originalCategories=He.categories}if(Mt=(typeof t.i18n=="function"?await t.i18n():t.i18n)||(i=="en"?pv(Av):await vg(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),t.custom)for(let d in t.custom){d=parseInt(d);const f=t.custom[d],p=t.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Mt.categories.custom),p&&!f.icon&&(f.target=p.target||p),He.categories.push(f);for(const g of f.emojis)He.emojis[g.id]=g}}t.categories&&(He.categories=He.originalCategories.filter(d=>t.categories.indexOf(d.id)!=-1).sort((d,f)=>{const p=t.categories.indexOf(d.id),g=t.categories.indexOf(f.id);return p-g}));let o=null,a=null;n=="native"&&(o=gg.latestVersion(),a=t.noCountryFlags||gg.noCountryFlags());let l=He.categories.length,u=!1;for(;l--;){const d=He.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:m}=t;g=g>=0?g:mr.maxFrequentRows.value,m||(m=mr.perLine.value),d.emojis=Tv.get({maxFrequentRows:g,perLine:m})}if(!d.emojis||!d.emojis.length){He.categories.splice(l,1);continue}const{categoryIcons:f}=t;if(f){const g=f[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],m=g.id?g:He.emojis[g],w=()=>{d.emojis.splice(p,1)};if(!m||t.exceptEmojis&&t.exceptEmojis.includes(m.id)){w();continue}if(o&&m.version>o){w();continue}if(a&&d.id=="flags"&&!hS.includes(m.id)){w();continue}if(!m.search){if(u=!0,m.search=","+[[m.id,!1],[m.name,!0],[m.keywords,!1],[m.emoticons,!1]].map(([x,$])=>{if(x)return(Array.isArray(x)?x:[x]).map(C=>($?C.split(/[-|_|\s]+/):[C]).map(I=>I.toLowerCase())).flat()}).flat().filter(x=>x&&x.trim()).join(","),m.emoticons)for(const x of m.emoticons)He.emoticons[x]||(He.emoticons[x]=m.id);let b=0;for(const x of m.skins){if(!x)continue;b++;const{native:$}=x;$&&(He.natives[$]=m.id,m.search+=`,${$}`);const C=b==1?"":`:skin-tone-${b}:`;x.shortcodes=`:${m.id}:${C}`}}}}u&&Vi.reset(),Rv()}function Ov(t,e,n){t||(t={});const i={};for(let o in e)i[o]=Lv(o,t,e,n);return i}function Lv(t,e,n,i){const o=n[t];let a=i&&i.getAttribute(t)||(e[t]!=null&&e[t]!=null?e[t]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const cS=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Ou=null;function uS(t){return t.id?t:He.emojis[t]||He.emojis[He.aliases[t]]||He.emojis[He.natives[t]]}function dS(){Ou=null}async function fS(t,{maxResults:e,caller:n}={}){if(!t||!t.trim().length)return null;e||(e=90),await wl(null,{caller:n||"SearchIndex.search"});const i=t.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,f)=>u.trim()&&f.indexOf(u)==d);if(!i.length)return;let o=Ou||(Ou=Object.values(He.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${u}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:f+1)}o=a}return a.length<2||(a.sort((u,d)=>{const f=l[u.id],p=l[d.id];return f==p?u.id.localeCompare(d.id):f-p}),a.length>e&&(a=a.slice(0,e))),a}var Vi={search:fS,get:uS,reset:dS,SHORTCODES_REGEX:cS};const hS=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function pS(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((n,i)=>n==e[i])}async function gS(t=1){for(let e in[...Array(t).keys()])await new Promise(requestAnimationFrame)}function vS(t,{skinIndex:e=0}={}){const n=t.skins[e]||(()=>(e=0,t.skins[e]))(),i={id:t.id,name:t.name,native:n.native,unified:n.unified,keywords:t.keywords,shortcodes:n.shortcodes||t.shortcodes};return t.skins.length>1&&(i.skin=e+1),n.src&&(i.src=n.src),t.aliases&&t.aliases.length&&(i.aliases=t.aliases),t.emoticons&&t.emoticons.length&&(i.emoticons=t.emoticons),i}const mS={activity:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:V("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),V("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),V("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:V("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),V("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:V("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),V("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[V("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),V("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:V("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:V("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},yS={loupe:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:V("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:V("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:V("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var Qa={categories:mS,search:yS};function Lu(t){let{id:e,skin:n,emoji:i}=t;if(t.shortcodes){const u=t.shortcodes.match(Vi.SHORTCODES_REGEX);u&&(e=u[1],u[2]&&(n=u[2]))}if(i||(i=Vi.get(e||t.native)),!i)return t.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(t.set!="native"&&!t.spritesheet?typeof t.getImageURL=="function"?t.getImageURL(t.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/64/${o.unified}.png`:void 0),l=typeof t.getSpritesheetURL=="function"?t.getSpritesheetURL(t.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/sheets-256/64.png`;return V("span",{class:"emoji-mart-emoji","data-emoji-set":t.set,children:a?V("img",{style:{maxWidth:t.size||"1em",maxHeight:t.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):t.set=="native"?V("span",{style:{fontSize:t.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):V("span",{style:{display:"block",width:t.size,height:t.size,backgroundImage:`url(${l})`,backgroundSize:`${100*He.sheet.cols}% ${100*He.sheet.rows}%`,backgroundPosition:`${100/(He.sheet.cols-1)*o.x}% ${100/(He.sheet.rows-1)*o.y}%`}})})}const bS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Pv extends bS{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let n in e)this.attributeChangedCallback(n,null,e[n])}attributeChangedCallback(e,n,i){if(!this.component)return;const o=Lv(e,{[e]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:o}):(this.component.props[e]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let n=null;const i=e.parent||(n=e.ref&&e.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class _S extends Pv{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const n=document.createElement("style");n.textContent=e,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(e,{styles:n}={}){super(e),this.setShadow(),this.injectStyles(n)}}var Mv={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:t=>/\D/.test(t)?t:`${t}px`},set:mr.set,skin:mr.skin};class Bv extends Pv{async connectedCallback(){const e=Ov(this.props,Mv,this);e.element=this,e.ref=n=>{this.component=n},await wl(),!this.disconnected&&Cv(V(Lu,{...e}),this)}constructor(e){super(e)}}Ln(Bv,"Props",Mv);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",Bv);var mg,Pu=[],yg=$e.__b,bg=$e.__r,_g=$e.diffed,wg=$e.__c,xg=$e.unmount;function wS(){var t;for(Pu.sort(function(e,n){return e.__v.__b-n.__v.__b});t=Pu.pop();)if(t.__P)try{t.__H.__h.forEach(Ea),t.__H.__h.forEach(Mu),t.__H.__h=[]}catch(e){t.__H.__h=[],$e.__e(e,t.__v)}}$e.__b=function(t){yg&&yg(t)},$e.__r=function(t){bg&&bg(t);var e=t.__c.__H;e&&(e.__h.forEach(Ea),e.__h.forEach(Mu),e.__h=[])},$e.diffed=function(t){_g&&_g(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(Pu.push(e)!==1&&mg===$e.requestAnimationFrame||((mg=$e.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),$g&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);$g&&(i=requestAnimationFrame(o))})(wS))},$e.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Ea),n.__h=n.__h.filter(function(i){return!i.__||Mu(i)})}catch(i){e.some(function(o){o.__h&&(o.__h=[])}),e=[],$e.__e(i,n.__v)}}),wg&&wg(t,e)},$e.unmount=function(t){xg&&xg(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ea(i)}catch(o){e=o}}),e&&$e.__e(e,n.__v))};var $g=typeof requestAnimationFrame=="function";function Ea(t){var e=t.__c;typeof e=="function"&&(t.__c=void 0,e())}function Mu(t){t.__c=t.__()}function xS(t,e){for(var n in e)t[n]=e[n];return t}function Eg(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var i in e)if(i!=="__source"&&t[i]!==e[i])return!0;return!1}function Ya(t){this.props=t}(Ya.prototype=new Kn).isPureReactComponent=!0,Ya.prototype.shouldComponentUpdate=function(t,e){return Eg(this.props,t)||Eg(this.state,e)};var kg=$e.__b;$e.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),kg&&kg(t)};var $S=$e.__e;$e.__e=function(t,e,n){if(t.then){for(var i,o=e;o=o.__;)if((i=o.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}$S(t,e,n)};var Cg=$e.unmount;function iu(){this.__u=0,this.t=null,this.__b=null}function jv(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function va(){this.u=null,this.o=null}$e.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Cg&&Cg(t)},(iu.prototype=new Kn).__c=function(t,e){var n=e.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=jv(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function g(m,w,b){return m&&(m.__v=null,m.__k=m.__k&&m.__k.map(function(x){return g(x,w,b)}),m.__c&&m.__c.__P===w&&(m.__e&&b.insertBefore(m.__e,m.__d),m.__c.__e=!0,m.__c.__P=b)),m}(f,f.__c.__P,f.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=e.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),t.then(l,l)},iu.prototype.componentWillUnmount=function(){this.t=[]},iu.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=xS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=e.__e&&Ru(ns,null,t.fallback);return o&&(o.__h=null),[Ru(ns,null,e.__e?null:t.children),o]};var Sg=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(va.prototype=new Kn).__e=function(t){var e=this,n=jv(e.__v),i=e.o.get(t);return i[0]++,function(o){var a=function(){e.props.revealOrder?(i.push(o),Sg(e,t,i)):o()};n?n(a):a()}},va.prototype.render=function(t){this.u=null,this.o=new Map;var e=Va(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},va.prototype.componentDidUpdate=va.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Sg(t,n,e)})};var ES=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,kS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,CS=typeof document<"u",SS=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};Kn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Kn.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Tg=$e.event;function TS(){}function AS(){return this.cancelBubble}function RS(){return this.defaultPrevented}$e.event=function(t){return Tg&&(t=Tg(t)),t.persist=TS,t.isPropagationStopped=AS,t.isDefaultPrevented=RS,t.nativeEvent=t};var Ag={configurable:!0,get:function(){return this.class}},Rg=$e.vnode;$e.vnode=function(t){var e=t.type,n=t.props,i=n;if(typeof e=="string"){var o=e.indexOf("-")===-1;for(var a in i={},n){var l=n[a];CS&&a==="children"&&e==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+e)&&!SS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&kS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}e=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Va(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),e=="select"&&i.defaultValue!=null&&(i.value=Va(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),t.props=i,n.class!=n.className&&(Ag.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",Ag))}t.$$typeof=ES,Rg&&Rg(t)};var Ig=$e.__r;$e.__r=function(t){Ig&&Ig(t),t.__c};const IS={light:"outline",dark:"solid"};class OS extends Ya{renderIcon(e){const{icon:n}=e;if(n){if(n.svg)return V("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return V("img",{src:n.src})}const i=Qa.categories[e.id]||Qa.categories.custom,o=this.props.icons=="auto"?IS[this.props.theme]:this.props.icons;return i[o]||i}render(){let e=null;return V("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:V("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Mt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(e=i),V("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),V("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=He.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class LS extends Ya{shouldComponentUpdate(e){for(let n in e)if(n!="children"&&e[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const ma={rowsPerRender:10};class PS extends Kn{getInitialState(e=this.props){return{skin:Fr.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=Mt.rtl?"rtl":"ltr",this.refs={menu:gr(),navigation:gr(),scroll:gr(),search:gr(),searchInput:gr(),skinToneButton:gr(),skinToneRadio:gr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const n in e)this.nextState[n]=e[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(e={}){await wl(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const n of this.observers)e.includes(n)||n.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=He;this.refs.categories=new Map;const n=He.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%ma.rowsPerRender?{}:gr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of e){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:gr(),rows:a})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:n,emojiButtonSize:i}=e,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,n]){const i=this.state.searchResults||this.grid,o=i[e]&&i[e][n];if(o)return Vi.get(o)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const n=new Map,i=l=>{l!=e.state.categoryId&&e.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const u=[...n];for(const[d,f]of u)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const e={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?e[a]=!0:delete e[a]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(ma.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*ma.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,f]=this.state.pos;const p=(()=>{if(d==0&&f==0&&!e.repeat&&(i||a))return null;if(d==-1)return!e.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const m=i?-1:1;if(f+=m,!g[f]){if(d+=m,g=u[d],!g)return d=i?0:u.length-1,f=i?0:u[d].length-1,[d,f];f=i?g.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[f]||(f=g.length-1),[d,f]):(d=a?0:u.length-1,f=a?0:u[d].length-1,[d,f])}})();if(p)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:e,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(e=i[n].__categoryId),e&&(l=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=vS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Tv.add(o,this.props),this.props.onEmojiSelect(o,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),Fr.set("skin",e)}renderNav(){return V(OS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return V("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[V("div",{class:"flex flex-middle flex-grow",children:[V("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:V(Lu,{emoji:e,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),V("div",{class:`margin-${this.dir[0]}`,children:e||n?V("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[V("div",{class:"preview-title ellipsis",children:e?e.name:Mt.search_no_results_1}),V("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:Mt.search_no_results_2})]}):V("div",{class:"preview-placeholder color-c",children:Mt.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(e.skins[l-1]||e.skins[0]).native,f=pS(this.state.pos,n),p=n.concat(e.id).join("");return V(LS,{selected:f,skin:l,size:a,children:V("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[V("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),V(Lu,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return V("div",{children:[V("div",{class:"spacer"}),V("div",{class:"flex flex-middle",children:[V("div",{class:"search relative flex-grow",children:[V("input",{type:"search",ref:this.refs.searchInput,placeholder:Mt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),V("span",{class:"icon loupe flex",children:Qa.search.loupe}),this.state.searchResults&&V("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:Qa.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?V("div",{class:"category",ref:this.refs.search,children:[V("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Mt.categories.search}),V("div",{children:e.length?e.map((n,i)=>V("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:e}))})):V("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&V("a",{onClick:this.props.onAddCustomEmoji,children:Mt.add_custom})})})]}):null}renderCategories(){const{categories:e}=He,n=!!this.state.searchResults,i=this.getPerLine();return V("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:e.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return V("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[V("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Mt.categories[o.id]}),V("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const f=u.index-u.index%ma.rowsPerRender,p=this.state.visibleRows[f],g="current"in u?u:void 0;if(!p&&!g)return null;const m=d*i,w=m+i,b=o.emojis.slice(m,w);return b.length<i&&b.push(...new Array(i-b.length)),V("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&b.map((x,$)=>{if(!x)return V("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const C=Vi.get(x);return this.renderEmojiButton(C,{pos:[u.index,$],posinset:u.posinset+$,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:V("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:V("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Mt.skins.choose,title:Mt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:V("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),n=e?e.name:"";return V("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),V("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Mt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return V("div",{children:[V("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Mt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),V("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[V("span",{class:`skin-tone skin-tone-${l}`}),V("span",{class:"margin-small-lr",children:Mt.skins[l]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return V("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&V("div",{class:"padding-lr",children:this.renderSearch()}),V("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:V("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),Ln(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),Ln(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),Ln(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),Ln(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),Ln(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await Vi.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let f of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),Ln(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),Ln(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),Ln(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),Ln(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await gS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class $d extends _S{async connectedCallback(){const e=Ov(this.props,mr,this);e.element=this,e.ref=n=>{this.component=n},await wl(e),!this.disconnected&&Cv(V(PS,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:pv(Nv)})}}Ln($d,"Props",mr);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",$d);var Nv={};Nv=`:host {
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

`;const Dv=t=>{let e,n;const{config:i}=tt(),o=()=>{n!=null&&(n.remove(),n=void 0)},a=()=>{n!=null&&console.error("unexpected state"),o();const l=Object.entries(i().customEmojis).map(([d,{url:f}])=>({id:d,name:d,keywords:[d],skins:[{src:f}]}));n=new $d({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),custom:[{id:"custom",name:"Custom Emojis",emojis:l}],autoFocus:!1,theme:"light",onEmojiSelect:d=>{console.log(d),t.onEmojiSelect?.(d),e?.close()}}),e?.elem?.appendChild(n)};return _r(()=>{o()}),S(wd,{ref:l=>{e=l},position:"bottom",get button(){return t.children},onOpen:a,onClose:o})},MS=B("<div>"),BS=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),jS=B("<br>"),NS=B("<span>: "),DS=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),US=t=>{const e=mt(),[n,i]=Te(!1);return S(ve,{get when(){return!t.contentWarning.contentWarning||n()},get fallback(){return(()=>{const o=DS();return o.$$click=()=>i(!0),k(o,()=>e()("post.contentWarning.show"),null),k(o,S(ve,{get when(){return t.contentWarning.reason!=null},get children(){return[jS(),(()=>{const a=NS(),l=a.firstChild;return k(a,()=>e()("post.contentWarning.reason"),l),k(a,()=>t.contentWarning.reason,null),a})()]}}),null),o})()},get children(){return[(()=>{const o=MS();return k(o,()=>t.children),o})(),S(ve,{get when(){return t.contentWarning.contentWarning},get children(){const o=BS();return o.$$click=()=>i(!1),o}})]}})};yt(["click"]);const Uv=t=>{const{profile:e}=gs(()=>({pubkey:t.pubkey}));return S(ve,{get when(){return(e()?.name?.length??0)>0},get fallback(){return`@${po(t.pubkey)}`},get children(){return["@",Ze(()=>e()?.name??t.pubkey)]}})},zS=B('<a target="_blank" rel="noreferrer noopener">'),is=t=>{const e=()=>{try{const n=new URL(t.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return S(ve,{get when(){return e()},get fallback(){return t.href},get children(){const n=zS();return k(n,()=>t.children??t.href),Me(i=>{const o=t.class,a=t.href;return o!==i._v$&&qu(n,i._v$=o),a!==i._v$2&&Ue(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},FS=t=>{try{const e=new URL(t);return/\.(jpeg|jpg|png|gif|webp|avif|apng|svg)$/i.test(e.pathname)}catch{return!1}},HS=t=>{try{const e=new URL(t);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(e.pathname)}catch{return!1}},qS=t=>{try{const e=new URL(t);if(e.host==="i.imgur.com"||e.host==="imgur.com"){const n=e.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(e),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return e.toString()}if(e.host==="i.gyazo.com"){const n=new URL(e);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640_w${e.pathname}`,n.toString()}return e.toString()}catch{return t}},Og=t=>{try{const e=new URL(t);return e.protocol==="https:"&&(e.host==="twitter.com"||e.host==="x.com")}catch{return!1}},WS=t=>{try{const e=new URL(t);return e.protocol==="https:"&&e.host==="www.youtube.com"&&e.pathname==="/watch"&&e.searchParams.get("v")!=null||e.protocol==="https:"&&e.host==="youtu.be"&&e.pathname.lastIndexOf("/")===0}catch{return!1}},ZS=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),KS=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),VS=t=>{let e;const n=mt(),[i,o]=Te(t.initialHidden);return S(ve,{get when(){return!i()},get fallback(){return(()=>{const a=KS();return a.$$click=()=>o(!1),k(a,()=>n()("post.showImage")),a})()},get children(){return S(is,{class:"my-2 block",get href(){return t.url},get children(){const a=ZS(),l=e;return typeof l=="function"?Vn(l,a):e=a,Me(u=>{const d=qS(t.url),f=t.url;return d!==u._v$&&Ue(a,"src",u._v$=d),f!==u._v$2&&Ue(a,"alt",u._v$2=f),u},{_v$:void 0,_v$2:void 0}),a}})}})};yt(["click"]);const GS=B('<div class="my-1 rounded border p-1">'),QS=t=>S(ve,{get when(){return t.mentionedEvent.marker!=null&&t.mentionedEvent.marker.length>0},get fallback(){return S(qs,{get eventId(){return t.mentionedEvent.eventId}})},get children(){const e=GS();return k(e,S(io,{get eventId(){return t.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[ft.Text]}})),e}}),YS=B('<button class="inline select-text text-blue-500 underline">'),su=t=>{const{showProfile:e}=Kr(),n=()=>{e(t.pubkey)};return(()=>{const i=YS();return i.$$click=n,k(i,S(Uv,{get pubkey(){return t.pubkey}})),i})()};yt(["click"]);const JS=B('<video class="max-h-64 max-w-full rounded-sm object-contain shadow" controls><a>'),XS=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),eT=t=>{let e;const n=mt(),[i,o]=Te(t.initialHidden);return S(ve,{get when(){return!i()},get fallback(){return(()=>{const a=XS();return a.$$click=()=>o(!1),k(a,()=>n()("post.showVideo")),a})()},get children(){return S(is,{class:"my-2 block",get href(){return t.url},get children(){const a=JS(),l=a.firstChild,u=e;return typeof u=="function"?Vn(u,a):e=a,k(l,()=>n()("post.download")),Me(d=>{const f=t.url,p=t.url;return f!==d._v$&&Ue(a,"src",d._v$=f),p!==d._v$2&&Ue(l,"href",d._v$2=p),d},{_v$:void 0,_v$2:void 0}),a}})}})};yt(["click"]);const tT=B('<blockquote class="twitter-tweet"><a target="_blank" rel="noreferrer noopener">'),nT=B('<div class="my-2 aspect-video w-full"><iframe title="YouTube" class="h-full w-full">'),rT=B('<a target="_blank" rel="noreferrer noopener"><div class="rounded-lg border transition-colors hover:bg-slate-100"><img alt="" class="max-w-full rounded-t-lg object-contain shadow"><div class="mb-1 p-1"><div class="text-xs text-slate-500"></div><div class="text-sm"></div><div class="text-xs text-slate-500">'),Lg=t=>{try{const e=new URL(t);return e.host="twitter.com",e.href}catch{return""}},iT=t=>{try{const e=new URL(t),n=new URL("https://www.youtube.com/embed");return e.host==="youtu.be"?n.pathname+=e.pathname:n.pathname+=`/${e.searchParams.get("v")}`,n.searchParams.set("origin",window.location.origin),n.href}catch{return""}},sT=async t=>{if(["www3.nhk.or.jp"].includes(t.host)){const i=await(await fetch(t,{headers:{Accept:"text/html"}})).text(),o=new DOMParser().parseFromString(i,"text/html"),a={};if(Array.from(o.head.querySelectorAll("meta")).filter(l=>l.getAttribute("property")!=null&&l.getAttribute("content")!=null).forEach(l=>{const u=l.getAttribute("property"),d=l.getAttribute("content");u!=null&&d!=null&&(a[u]=d)}),a["og:image"]&&a["og:title"]&&a["og:description"])return{title:a["og:title"],description:a["og:description"],image:new URL(a["og:image"]),url:t}}return null},oT=t=>{let e;const n={title:"",description:"",image:null,url:null},[i,o]=Te(n),a=()=>{try{const u=new URL(t.href);return u.protocol==="https:"||u.protocol==="http:"}catch{return!1}},l=async()=>{const u=await sT(new URL(t.href));u!=null&&o(u)};return yr(()=>{Og(t.href)&&window.twttr?.widgets?.load(e)}),Jn(()=>{l().then(()=>{}).catch(()=>{})}),S(ve,{get when(){return a()},get fallback(){return t.href},get children(){return S(Pn,{get fallback(){return S(is,{get class(){return t.class},get href(){return t.href}})},get children(){return[S(Ge,{get when(){return Og(t.href)},get children(){const u=tT(),d=u.firstChild,f=e;return typeof f=="function"?Vn(f,u):e=u,k(d,()=>Lg(t.href)),Me(p=>{const g=t.class,m=Lg(t.href);return g!==p._v$&&qu(d,p._v$=g),m!==p._v$2&&Ue(d,"href",p._v$2=m),p},{_v$:void 0,_v$2:void 0}),u}}),S(Ge,{get when(){return WS(t.href)},get children(){const u=nT(),d=u.firstChild;return Me(()=>Ue(d,"src",iT(t.href))),u}}),S(Ge,{get when(){return i().url},keyed:!0,get children(){const u=rT(),d=u.firstChild,f=d.firstChild,p=f.nextSibling,g=p.firstChild,m=g.nextSibling,w=m.nextSibling;return k(g,()=>i().url?.host),k(m,()=>i().title),k(w,()=>i().description),Me(b=>{const x=t.href,$=i().image?.href;return x!==b._v$3&&Ue(u,"href",b._v$3=x),$!==b._v$4&&Ue(f,"src",b._v$4=$),b},{_v$3:void 0,_v$4:void 0}),u}})]}})}})},[Ed,aT]=Te({}),zv=t=>{Ed()[t]==null&&aT(e=>({...e,[t]:new MessageChannel}))},lT=t=>{const e=()=>Ed()[t().id],n=(o,a)=>{const l={requestId:o,request:a};e().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const f=p=>{const g=p.data;g.requestId===o&&(e().port1.removeEventListener("message",f),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{e().port1.removeEventListener("message",f),u(new Error(`TimeoutError: ${o}`))},a),e().port1.addEventListener("message",f,!1),e().port1.start()});return Jn(()=>{const{id:o}=t();zv(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},cT=t=>{const e=Ze(t),n=()=>Ed()[e().id];Jn(()=>{const{id:i}=e();zv(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,f=e().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(g=>{const m={requestId:u,ok:!0,response:g};o.postMessage(m)}).catch(g=>{const m={requestId:u,ok:!1,error:g};o.postMessage(m)})};o.addEventListener("message",a),o.start(),_r(()=>{o.removeEventListener("message",a)})})},kd=()=>lT(()=>({id:"CommandChannel"})),uT=t=>{cT(()=>({id:"CommandChannel",handler:e=>{const{commandType:n,handler:i}=t();e.command===n&&i(e)}}))},ou=B("<span>"),Pg=B('<div class="my-1 rounded border p-1">'),dT=B('<span class="text-blue-500 underline">'),fT=B('<button class="select-text text-blue-500 underline">'),hT=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),pT=t=>{const{config:e,saveColumn:n}=tt(),i=kd(),o=()=>md(t.event),a=l=>{n(gd({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return S(zt,{get each(){return o().parsed()},children:l=>{if(l.type==="PlainText")return(()=>{const u=ou();return k(u,()=>l.content),u})();if(l.type==="URL"){const u=()=>!e().showMedia||o().contentWarning().contentWarning||!t.embedding;return FS(l.content)?S(VS,{get url(){return l.content},get initialHidden(){return u()}}):HS(l.content)?S(eT,{get url(){return l.content},get initialHidden(){return u()}}):S(oT,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReference"){const u=o().resolveTagReference(l);if(u==null)return(()=>{const d=ou();return k(d,()=>l.content),d})();if(u.type==="MentionedUser")return S(su,{get pubkey(){return u.pubkey}});if(u.type==="MentionedEvent")return t.embedding?S(QS,{mentionedEvent:u}):S(qs,{get eventId(){return u.eventId}})}if(l.type==="Bech32Entity")return l.data.type==="note"&&t.embedding?(()=>{const u=Pg();return k(u,S(io,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[ft.Text]}})),u})():l.data.type==="nevent"&&t.embedding?(()=>{const u=Pg();return k(u,S(io,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})():l.data.type==="npub"?S(su,{get pubkey(){return l.data.data}}):l.data.type==="nprofile"?S(su,{get pubkey(){return l.data.data.pubkey}}):(()=>{const u=dT();return k(u,()=>l.content),u})();if(l.type==="HashTag")return(()=>{const u=fT();return u.$$click=()=>a(l.content),k(u,()=>l.content),u})();if(l.type==="CustomEmoji"){const u=o().getEmojiUrl(l.shortcode);return u==null?(()=>{const d=ou();return k(d,()=>l.content),d})():(()=>{const d=hT();return Ue(d,"src",u),Me(f=>{const p=l.content,g=l.shortcode;return p!==f._v$&&Ue(d,"alt",f._v$=p),g!==f._v$2&&Ue(d,"title",f._v$2=g),f},{_v$:void 0,_v$2:void 0}),d})()}return console.error("Not all ParsedTextNoteNodes are covered",l),null}})};yt(["click"]);const gT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),ss=(t={})=>(()=>{const e=gT();return it(e,t,!0,!0),e})(),vT=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),mT=t=>{let e;const n=i=>{i.target===e&&t.onClose?.()};return(()=>{const i=vT();i.$$click=n;const o=e;return typeof o=="function"?Vn(o,i):e=i,k(i,()=>t.children),i})()};yt(["click"]);const yT=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-6em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),Ci=t=>S(mT,{onClose:()=>t.onClose?.(),get children(){const e=yT(),n=e.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>t.onClose?.(),k(i,S(ve,{get when(){return t?.closeButton},get fallback(){return S(ss,{})},keyed:!0,children:a=>a()})),k(o,()=>t.children),e}});yt(["click"]);const bT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),_T=(t={})=>(()=>{const e=bT();return it(e,t,!0,!0),e})(),wT=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),xT=B('<div class="relative inline-block"><button type="button">'),$T=t=>{const[e,n]=Te(!1),i=()=>{navigator.clipboard.writeText(t.text).then(()=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=xT(),a=o.firstChild;return a.$$click=i,k(a,S(_T,{})),k(o,S(ve,{get when(){return e()},get children(){return wT()}}),null),Me(()=>qu(a,t.class)),o})()};yt(["click"]);const ET=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),kT=t=>{const e=Ze(()=>JSON.stringify(t.event,null,2));return S(Ci,{get onClose(){return t.onClose},get children(){const n=ET(),i=n.firstChild,o=i.nextSibling;return k(i,e),k(o,S($T,{class:"h-4 w-4",get text(){return e()}})),n}})},CT=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),ST=B('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 select-text truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),TT=B('<img alt="icon" class="h-full w-full rounded object-cover">'),AT=t=>{const{profile:e}=gs(()=>({pubkey:t.pubkey}));return(()=>{const n=ST(),i=n.firstChild,o=i.nextSibling,a=o.firstChild,l=a.firstChild,u=l.firstChild,d=u.firstChild;return i.$$click=f=>{f.preventDefault(),t.onShowProfile?.()},k(i,S(ve,{get when(){return e()?.picture},keyed:!0,children:f=>(()=>{const p=TT();return Ue(p,"src",f),p})()})),l.$$click=f=>{f.preventDefault(),t?.onShowProfile?.()},k(u,S(ve,{get when(){return(e()?.display_name?.length??0)>0},get children(){const f=CT();return k(f,()=>e()?.display_name),f}}),d),k(d,S(ve,{get when(){return e()?.name},get fallback(){return`@${po(t.pubkey)}`},keyed:!0,children:f=>`@${f}`})),n})()};yt(["click"]);const RT=B('<div class="px-4 py-2"><div> 件</div><div>'),IT=B('<div class="flex border-t py-1">'),Bu=t=>{const{showProfile:e}=Kr();return S(Ci,{get onClose(){return t.onClose},get children(){const n=RT(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return k(i,()=>t.data.length,o),k(a,S(zt,{get each(){return t.data},children:l=>{const u=()=>t.pubkeyExtractor(l);return(()=>{const d=IT();return k(d,S(ve,{get when(){return t.renderInfo},keyed:!0,children:f=>f(l)}),null),k(d,S(AT,{get pubkey(){return u()},onShowProfile:()=>e(u())}),null),d})()}})),n}})},OT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Fv=(t={})=>(()=>{const e=OT();return it(e,t,!0,!0),e})(),LT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),PT=(t={})=>(()=>{const e=LT();return it(e,t,!0,!0),e})(),MT=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),BT=(t={})=>(()=>{const e=MT();return it(e,t,!0,!0),e})();var Cd={},go={},Hv={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,p){this.fn=d,this.context=f,this.once=p||!1}function a(d,f,p,g,m){if(typeof p!="function")throw new TypeError("The listener must be a function");var w=new o(p,g||d,m),b=n?n+f:f;return d._events[b]?d._events[b].fn?d._events[b]=[d._events[b],w]:d._events[b].push(w):(d._events[b]=w,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function u(){this._events=new i,this._eventsCount=0}u.prototype.eventNames=function(){var f=[],p,g;if(this._eventsCount===0)return f;for(g in p=this._events)e.call(p,g)&&f.push(n?g.slice(1):g);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(p)):f},u.prototype.listeners=function(f){var p=n?n+f:f,g=this._events[p];if(!g)return[];if(g.fn)return[g.fn];for(var m=0,w=g.length,b=new Array(w);m<w;m++)b[m]=g[m].fn;return b},u.prototype.listenerCount=function(f){var p=n?n+f:f,g=this._events[p];return g?g.fn?1:g.length:0},u.prototype.emit=function(f,p,g,m,w,b){var x=n?n+f:f;if(!this._events[x])return!1;var $=this._events[x],C=arguments.length,I,E;if($.fn){switch($.once&&this.removeListener(f,$.fn,void 0,!0),C){case 1:return $.fn.call($.context),!0;case 2:return $.fn.call($.context,p),!0;case 3:return $.fn.call($.context,p,g),!0;case 4:return $.fn.call($.context,p,g,m),!0;case 5:return $.fn.call($.context,p,g,m,w),!0;case 6:return $.fn.call($.context,p,g,m,w,b),!0}for(E=1,I=new Array(C-1);E<C;E++)I[E-1]=arguments[E];$.fn.apply($.context,I)}else{var A=$.length,L;for(E=0;E<A;E++)switch($[E].once&&this.removeListener(f,$[E].fn,void 0,!0),C){case 1:$[E].fn.call($[E].context);break;case 2:$[E].fn.call($[E].context,p);break;case 3:$[E].fn.call($[E].context,p,g);break;case 4:$[E].fn.call($[E].context,p,g,m);break;default:if(!I)for(L=1,I=new Array(C-1);L<C;L++)I[L-1]=arguments[L];$[E].fn.apply($[E].context,I)}}return!0},u.prototype.on=function(f,p,g){return a(this,f,p,g,!1)},u.prototype.once=function(f,p,g){return a(this,f,p,g,!0)},u.prototype.removeListener=function(f,p,g,m){var w=n?n+f:f;if(!this._events[w])return this;if(!p)return l(this,w),this;var b=this._events[w];if(b.fn)b.fn===p&&(!m||b.once)&&(!g||b.context===g)&&l(this,w);else{for(var x=0,$=[],C=b.length;x<C;x++)(b[x].fn!==p||m&&!b[x].once||g&&b[x].context!==g)&&$.push(b[x]);$.length?this._events[w]=$.length===1?$[0]:$:l(this,w)}return this},u.prototype.removeAllListeners=function(f){var p;return f?(p=n?n+f:f,this._events[p]&&l(this,p)):(this._events=new i,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,t.exports=u})(Hv);var xl=Hv.exports,Sd={},vo={};Object.defineProperty(vo,"__esModule",{value:!0});vo.SearchResult=void 0;const jT=/\$&/g,NT=/\$(\d)/g;class DT{constructor(e,n,i){this.data=e,this.term=n,this.strategy=i}getReplacementData(e){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(e);if(o==null||o.index==null)return null;const a=n.replace(jT,o[0]).replace(NT,(l,u)=>o[parseInt(u)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(e,n){const i=this.getReplacementData(e);if(i!==null)return n=i.afterCursor+n,[[e.slice(0,i.start),i.beforeCursor,e.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}vo.SearchResult=DT;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Strategy=t.DEFAULT_INDEX=void 0;const e=vo;t.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const u=this.matchWithContext(o);if(!u)return!1;const d=u[(l=this.props.index)!==null&&l!==void 0?l:t.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(p=>new e.SearchResult(p,d,this)))},u),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,u=>{this.cache[o]=u,a(u)},l)}}t.Strategy=n})(Sd);Object.defineProperty(go,"__esModule",{value:!0});go.Completer=void 0;const UT=xl,zT=Sd;class FT extends UT.EventEmitter{constructor(e){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=e.map(n=>new zT.Strategy(n))}destroy(){return this.strategies.forEach(e=>e.destroy()),this}run(e){for(const n of this.strategies)if(n.execute(e,this.handleQueryResult))return;this.handleQueryResult([])}}go.Completer=FT;var Td={},vs={};Object.defineProperty(vs,"__esModule",{value:!0});vs.createCustomEvent=void 0;const HT=typeof window<"u"&&!!window.CustomEvent,qT=(t,e)=>{if(HT)return new CustomEvent(t,e);const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,e?.cancelable||!1,e?.detail||void 0),n};vs.createCustomEvent=qT;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Dropdown=t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=t.DEFAULT_DROPDOWN_CLASS_NAME=t.DEFAULT_DROPDOWN_PLACEMENT=t.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const e=xl,n=vs;t.DEFAULT_DROPDOWN_MAX_COUNT=10,t.DEFAULT_DROPDOWN_PLACEMENT="auto",t.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends e.EventEmitter{constructor(l,u){super(),this.el=l,this.option=u,this.shown=!1,this.items=[],this.activeIndex=null}static create(l){const u=document.createElement("ul");u.className=l.className||t.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(u.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(u),new i(u,l)}render(l,u){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||t.DEFAULT_DROPDOWN_MAX_COUNT).map((f,p)=>{var g;return new o(this,p,f,((g=this.option)===null||g===void 0?void 0:g.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(u).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const u={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:u});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:u})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,u){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),u.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const u=document.documentElement;if(u){const d=this.el.offsetWidth;if(l.left){const g=this.option.dynamicWidth?u.scrollWidth:u.clientWidth;l.left+d>g&&(l.left=g-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const p=this.option.placement||t.DEFAULT_DROPDOWN_PLACEMENT;if(p==="auto"){const g=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+g>u.clientHeight}p==="top"||f?(this.el.style.bottom=`${u.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const u of this.items)l.appendChild(u.el);return this.el.appendChild(l),this}setStrategyId(l){const u=l.getStrategyId();return u&&(this.el.dataset.strategy=u),this}renderEdge(l,u){const d=this.option[u],f=document.createElement("li");return f.className=`textcomplete-${u}`,f.innerHTML=typeof d=="function"?d(l.map(p=>p.data)):d||"",this.el.appendChild(f),this}}t.Dropdown=i;class o{constructor(l,u,d,f){this.dropdown=l,this.index=u,this.searchResult=d,this.props=f,this.active=!1,this.onClick=m=>{m.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const p=document.createElement("li");p.className=this.active?this.activeClassName:this.className;const g=document.createElement("span");g.tabIndex=-1,g.innerHTML=this.searchResult.render(),p.appendChild(g),p.addEventListener("click",this.onClick),this.el=p}destroy(){var l;const u=this.el;return(l=u.parentNode)===null||l===void 0||l.removeChild(u),u.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(Td);var $l={};Object.defineProperty($l,"__esModule",{value:!0});$l.Editor=void 0;const WT=xl,ya=vs;class ZT extends WT.EventEmitter{destroy(){return this}applySearchResult(e){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(e){const n=(0,ya.createCustomEvent)("move",{cancelable:!0,detail:{code:e}});return this.emit("move",n),n}emitEnterEvent(){const e=(0,ya.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",e),e}emitChangeEvent(){const e=(0,ya.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",e),e}emitEscEvent(){const e=(0,ya.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",e),e}getCode(e){return e.keyCode===9||e.keyCode===13?"ENTER":e.keyCode===27?"ESC":e.keyCode===38?"UP":e.keyCode===40||e.keyCode===78&&e.ctrlKey?"DOWN":e.keyCode===80&&e.ctrlKey?"UP":"OTHER"}}$l.Editor=ZT;var El={};Object.defineProperty(El,"__esModule",{value:!0});El.Textcomplete=void 0;const KT=xl,VT=Td,GT=go,QT=["show","shown","render","rendered","selected","hidden","hide"];class YT extends KT.EventEmitter{constructor(e,n,i){super(),this.editor=e,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new GT.Completer(n),this.dropdown=VT.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(e=!0){return this.completer.destroy(),this.dropdown.destroy(),e&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(e){return this.isQueryInFlight?this.nextPendingQuery=e:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(e)),this}startListening(){var e;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of QT)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.addEventListener("resize",this.handleResize)}stopListening(){var e;(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}El.Textcomplete=YT;(function(t){var e=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(go,t),n(Td,t),n($l,t),n(vo,t),n(Sd,t),n(El,t),n(vs,t)})(Cd);var qv={},kl={};function Wv(t,e,n){const i=t.value,o=e+(n||""),a=document.activeElement;let l=0,u=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-u-1>=0&&o.length-u-1>=0&&i[i.length-u-1]===o[o.length-u-1];)u++;l=Math.min(l,Math.min(i.length,o.length)-u),t.setSelectionRange(l,i.length-u);const d=o.substring(l,o.length-u);if(t.focus(),!document.execCommand("insertText",!1,d)){t.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),t.dispatchEvent(f)}return t.setSelectionRange(e.length,e.length),a.focus(),t}function JT(t,e,n){const i=t.selectionEnd,o=t.value.substr(0,t.selectionStart)+e,a=t.value.substring(t.selectionStart,i)+(n||"")+t.value.substr(i);return Wv(t,o,a),t.selectionEnd=i+e.length,t}const XT=Object.freeze(Object.defineProperty({__proto__:null,update:Wv,wrapCursor:JT},Symbol.toStringTag,{value:"Module"})),eA=R4(XT);var Zv={exports:{}};(function(t){(function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,u){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=u&&u.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var p=document.createElement("div");p.id="input-textarea-caret-position-mirror-div",document.body.appendChild(p);var g=p.style,m=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,w=a.nodeName==="INPUT";g.whiteSpace="pre-wrap",w||(g.wordWrap="break-word"),g.position="absolute",d||(g.visibility="hidden"),e.forEach(function($){w&&$==="lineHeight"?g.lineHeight=m.height:g[$]=m[$]}),i?a.scrollHeight>parseInt(m.height)&&(g.overflowY="scroll"):g.overflow="hidden",p.textContent=a.value.substring(0,l),w&&(p.textContent=p.textContent.replace(/\s/g," "));var b=document.createElement("span");b.textContent=a.value.substring(l)||".",p.appendChild(b);var x={top:b.offsetTop+parseInt(m.borderTopWidth),left:b.offsetLeft+parseInt(m.borderLeftWidth),height:parseInt(m.lineHeight)};return d?b.style.backgroundColor="#aaa":document.body.removeChild(p),x}t.exports=o})()})(Zv);var tA=Zv.exports,Kv={},Cl={};Object.defineProperty(Cl,"__esModule",{value:!0});Cl.calculateElementOffset=void 0;const nA=t=>{const e=t.getBoundingClientRect(),n=t.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:e.top+i.pageYOffset,left:e.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};Cl.calculateElementOffset=nA;var Sl={};Object.defineProperty(Sl,"__esModule",{value:!0});Sl.getLineHeightPx=void 0;const rA="0".charCodeAt(0),iA="9".charCodeAt(0),Mg=t=>rA<=t&&t<=iA,sA=t=>{const e=getComputedStyle(t),n=e.lineHeight;if(Mg(n.charCodeAt(0))){const i=parseFloat(n);return Mg(n.charCodeAt(n.length-1))?i*parseFloat(e.fontSize):i}return oA(t.nodeName,e)};Sl.getLineHeightPx=sA;const oA=(t,e)=>{const n=document.body;if(!n)return 0;const i=document.createElement(t);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:e.fontSize,fontFamily:e.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var Tl={};Object.defineProperty(Tl,"__esModule",{value:!0});Tl.isSafari=void 0;const aA=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);Tl.isSafari=aA;(function(t){var e=xt&&xt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=xt&&xt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(Cl,t),n(Sl,t),n(Tl,t)})(Kv);var lA=xt&&xt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(kl,"__esModule",{value:!0});kl.TextareaEditor=void 0;const cA=eA,uA=lA(tA),Bg=Cd,jg=Kv;class dA extends Bg.Editor{constructor(e){super(),this.el=e,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(e){const n=this.getBeforeCursor();if(n!=null){const i=e.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,cA.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,Bg.createCustomEvent)("input")))}}getCursorOffset(){const e=(0,jg.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,jg.getLineHeightPx)(this.el),a=e.top-n.top+i.top+o,l=e.left-n.left+i.left,u=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:u};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:u}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,uA.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}kl.TextareaEditor=dA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaEditor=void 0;var e=kl;Object.defineProperty(t,"TextareaEditor",{enumerable:!0,get:function(){return e.TextareaEditor}})})(qv);const fA=B('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),hA=()=>{const{searchEmojis:t}=tt(),[e,n]=Te();return yr(()=>{const i=e();if(i==null)return;const o=new qv.TextareaEditor(i),a=new Cd.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,u)=>{u(t(l))},template:l=>(()=>{const d=fA(),f=d.firstChild,p=f.nextSibling;return k(p,()=>l.shortcode),Me(g=>{const m=l.url,w=l.shortcode;return m!==g._v$&&Ue(f,"src",g._v$=m),w!==g._v$2&&Ue(f,"alt",g._v$2=w),g},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});_r(()=>{a.destroy()})}),{elementRef:n}},pA=t=>Math.floor(+t/1e3),ai=()=>pA(new Date),gA=({notifyPubkeys:t,rootEventId:e,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],f=t?.map(g=>["p",g])??[],p=[];return e!=null&&d.push(["e",e,"","root"]),e==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),e!=null&&i!=null&&e!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...f,...p]},Al=()=>{const t=bd(),e=async(d,f)=>{const p={...f};if(p.id=co(p),window.nostr==null)throw new Error("NIP-07 implementation not found");const g=await window.nostr.signEvent(p);return d.map(async m=>{const w=await t().ensureRelay(m);try{await w.publish(g),console.log(`${m} has accepted our event`)}catch(b){const x=b instanceof Error?b.message:JSON.stringify(b);console.warn(`failed to publish to ${m}: ${x}`)}})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:p,content:g}=d,m=gA(d),w={kind:1,pubkey:p,created_at:ai(),tags:m,content:g};return e(f,w)},publishReaction:async({relayUrls:d,pubkey:f,eventId:p,reactionTypes:g,notifyPubkey:m})=>{const w=[["e",p,""],["p",m]];g.type==="CustomEmoji"&&w.push(["emoji",g.shortcode,g.url]);const b={kind:7,pubkey:f,created_at:ai(),tags:w,content:g.content};return e(d,b)},publishRepost:async({relayUrls:d,pubkey:f,eventId:p,notifyPubkey:g})=>{const m={kind:6,pubkey:f,created_at:ai(),tags:[["e",p,""],["p",g]],content:""};return e(d,m)},updateProfile:async({relayUrls:d,pubkey:f,profile:p,otherProperties:g})=>{const m={...p,...g},w={kind:ft.Metadata,pubkey:f,created_at:ai(),tags:[],content:JSON.stringify(m)};return e(d,w)},updateContacts:async({relayUrls:d,pubkey:f,updatedTags:p,content:g})=>{const m={kind:ft.Contacts,pubkey:f,created_at:ai(),tags:p,content:g};return e(d,m)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:p})=>{const g={kind:ft.EventDeletion,pubkey:f,created_at:ai(),tags:[["e",p,""]],content:""};return e(d,g)}}};let au=!1;const[ba,vA]=Te(void 0),Vr=()=>(Jn(()=>{if(ba()!=null)return;let t=0;const e=setInterval(()=>{if(t>=20){if(clearInterval(e),ba()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&ba()==null&&!au&&(au=!0,window.nostr.getPublicKey().then(n=>{clearInterval(e),vA(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{au=!1})),t+=1},200)}),ba),mA=async t=>{const e=new FormData;e.set("file",t);const n=await fetch("https://nostr.build/api/v2/upload/files",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:e});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");const i=await n.json();if(i.status!=="success")throw new Error(`failed to post image: ${i.message}`);return{imageUrl:i.data[0].url}},yA=t=>e=>Promise.allSettled(e.map(n=>t(n))),bA=B("<div>"),_A=B('<input type="text" class="rounded" maxlength="32">'),wA=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),xA=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),$A=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),EA=t=>{const e=[],n=[],i=[],o=[],a=[];return t.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?e.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:e,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},kA=t=>{const e=[];return t.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?e.push(`nostr:${n.content}`):e.push(n.content)}),e.join("")},Vv=t=>{const e=mt();let n,i;const{elementRef:o}=hA(),[a,l]=Te(""),[u,d]=Te(!1),[f,p]=Te(""),[g,m]=Te([]),w=X=>l(ce=>`${ce} ${X}`),b=()=>{l(g().map(X=>` #${X}`).join("")),p(""),d(!1)},x=()=>{n?.blur(),b(),t.onClose()},$=X=>{switch(X){case"reply":return e()("posting.placeholderReply");case"normal":default:return e()("posting.placeholder")}},{config:C,getEmoji:I}=tt(),E=Vr(),A=Al(),L=()=>t.replyTo&&md(t.replyTo),R=()=>t.mode??"normal",U=pi({mutationKey:["publishTextNote"],mutationFn:A.publishTextNote.bind(A),onSuccess:()=>{console.log("succeeded to post"),b(),t.onPost?.()},onError:X=>{console.error("error",X)}}),N=()=>{n!=null&&(n.style.height="auto",n.style.height=`${n.scrollHeight}px`)},Z=pi({mutationKey:["uploadFiles"],mutationFn:async X=>{const ce=await yA(mA)(X),z=[];if(ce.forEach((J,H)=>{J.status==="fulfilled"?(w(J.value.imageUrl),N()):z.push(X[H])}),z.length>0){const J=z.map(H=>H.name).join(", ");window.alert(e()("posting.failedToUploadFile",{filenames:J}))}}}),ne=Ze(()=>{const X=E();return L()?.taggedPubkeys()?.filter(ce=>ce!==X)??[]}),oe=Ze(()=>t.replyTo==null?[]:gi([t.replyTo.pubkey,...ne()])),se=X=>{const ce=[];return X.forEach(z=>{const J=I(z);J!=null&&ce.push(["emoji",z,J.url])}),ce},ae=()=>{if(a().length===0||U.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(a())){window.alert(e()("posting.forbiddenToIncludeNsec"));return}const X=E();if(X==null){console.error("pubkey is not available");return}const ce=J1(a()),{hashtags:z,urlReferences:J,pubkeyReferences:H,eventReferences:de,emojis:ze}=EA(ce),lt=kA(ce),Je=se(ze);m(z);let Y={relayUrls:C().relayUrls,pubkey:X,content:lt,notifyPubkeys:H,mentionEventIds:de,hashtags:z,urls:J,tags:Je};L()!=null&&(Y={...Y,notifyPubkeys:gi([...oe(),...H]),rootEventId:L()?.rootEvent()?.id??L()?.replyingToEvent()?.id,replyEventId:L()?.id}),u()&&(Y={...Y,contentWarning:f()}),U.mutate(Y),x()},ee=X=>{l(X.currentTarget.value),N()},j=X=>{w(X.native??`:${X.id}:`)},K=X=>{X.preventDefault(),ae()},te=X=>{X.key==="Enter"&&(X.ctrlKey||X.metaKey)?ae():X.key==="Escape"&&(n?.blur(),x())},le=X=>{if(X.preventDefault(),Z.isLoading)return;const ce=[...X.currentTarget.files??[]];Z.mutate(ce),X.currentTarget.value=""},Q=X=>{if(X.preventDefault(),Z.isLoading)return;const ce=[...X?.dataTransfer?.files??[]];Z.mutate(ce)},ye=X=>{if(Z.isLoading)return;const ce=[...X?.clipboardData?.items??[]],z=[];ce.forEach(J=>{if(J.kind==="file"){X.preventDefault();const H=J.getAsFile();if(H==null)return;z.push(H)}}),z.length!==0&&Z.mutate(z)},be=X=>{X.preventDefault()},Ee=()=>a().trim().length===0||U.isLoading||Z.isLoading,ie=()=>Z.isLoading;return Jn(()=>{setTimeout(()=>{n?.click(),n?.focus()},50)}),(()=>{const X=$A(),ce=X.firstChild,z=ce.firstChild,J=z.nextSibling,H=J.firstChild,de=H.nextSibling,ze=de.nextSibling,lt=J.nextSibling;k(X,S(ve,{get when(){return t.replyTo!=null},get children(){const Y=bA();return k(Y,()=>e()("posting.replyToPre"),null),k(Y,S(zt,{get each(){return oe()},children:(_e,Xe)=>[S(_d,{pubkey:_e}),S(ve,{get when(){return Xe()!==oe().length-1},children:" と "})]}),null),k(Y,()=>e()("posting.replyToPost"),null),Y}}),ce),ce.addEventListener("submit",K),k(ce,S(ve,{get when(){return u()},get children(){const Y=_A();return Y.$$input=_e=>p(_e.currentTarget.value),Me(()=>Ue(Y,"placeholder",e()("posting.contentWarningReason"))),Me(()=>Y.value=f()),Y}}),z),z.addEventListener("paste",ye),z.addEventListener("drop",Q),z.addEventListener("dragover",be),z.$$keydown=te,z.$$input=ee,Vn(Y=>{n=Y,t.textAreaRef?.(Y),o(Y)},z),k(J,S(ve,{get when(){return R()==="reply"},get children(){const Y=wA(),_e=Y.firstChild;return _e.$$click=()=>x(),k(_e,S(ss,{})),Y}}),H),k(J,S(Dv,{customEmojis:!0,onEmojiSelect:j,get children(){const Y=xA();return k(Y,S(Fv,{})),Y}}),H),H.$$click=()=>d(Y=>!Y),de.$$click=()=>i?.click(),k(de,S(PT,{})),k(ze,S(BT,{})),lt.addEventListener("change",le);const Je=i;return typeof Je=="function"?Vn(Je,lt):i=lt,Me(Y=>{const _e=$(R()),Xe=!u(),Jt=!!u(),Ct=R()==="normal",Ht=R()==="normal",Qr=R()==="reply",En=R()==="reply",St=e()("posting.contentWarning"),Xt=e()("posting.contentWarning"),Un=!!ie(),Er=!ie(),kn=R()==="normal",Ae=R()==="normal",qt=R()==="reply",Wt=R()==="reply",Cn=e()("posting.uploadImage"),Sn=e()("posting.uploadImage"),un=ie(),dn=!!Ee(),Tn=!Ee(),rr=R()==="normal",ir=R()==="normal",sr=R()==="reply",Si=R()==="reply",yo=e()("posting.submit"),bo=e()("posting.submit"),_o=Ee();return _e!==Y._v$&&Ue(z,"placeholder",Y._v$=_e),Xe!==Y._v$2&&H.classList.toggle("bg-rose-300",Y._v$2=Xe),Jt!==Y._v$3&&H.classList.toggle("bg-rose-400",Y._v$3=Jt),Ct!==Y._v$4&&H.classList.toggle("h-8",Y._v$4=Ct),Ht!==Y._v$5&&H.classList.toggle("w-8",Y._v$5=Ht),Qr!==Y._v$6&&H.classList.toggle("h-7",Y._v$6=Qr),En!==Y._v$7&&H.classList.toggle("w-7",Y._v$7=En),St!==Y._v$8&&Ue(H,"aria-label",Y._v$8=St),Xt!==Y._v$9&&Ue(H,"title",Y._v$9=Xt),Un!==Y._v$10&&de.classList.toggle("bg-primary-disabled",Y._v$10=Un),Er!==Y._v$11&&de.classList.toggle("bg-primary",Y._v$11=Er),kn!==Y._v$12&&de.classList.toggle("h-8",Y._v$12=kn),Ae!==Y._v$13&&de.classList.toggle("w-8",Y._v$13=Ae),qt!==Y._v$14&&de.classList.toggle("h-7",Y._v$14=qt),Wt!==Y._v$15&&de.classList.toggle("w-7",Y._v$15=Wt),Cn!==Y._v$16&&Ue(de,"title",Y._v$16=Cn),Sn!==Y._v$17&&Ue(de,"aria-label",Y._v$17=Sn),un!==Y._v$18&&(de.disabled=Y._v$18=un),dn!==Y._v$19&&ze.classList.toggle("bg-primary-disabled",Y._v$19=dn),Tn!==Y._v$20&&ze.classList.toggle("bg-primary",Y._v$20=Tn),rr!==Y._v$21&&ze.classList.toggle("h-8",Y._v$21=rr),ir!==Y._v$22&&ze.classList.toggle("w-8",Y._v$22=ir),sr!==Y._v$23&&ze.classList.toggle("h-7",Y._v$23=sr),Si!==Y._v$24&&ze.classList.toggle("w-7",Y._v$24=Si),yo!==Y._v$25&&Ue(ze,"aria-label",Y._v$25=yo),bo!==Y._v$26&&Ue(ze,"title",Y._v$26=bo),_o!==Y._v$27&&(ze.disabled=Y._v$27=_o),Y},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0}),Me(()=>z.value=a()),X})()};yt(["input","keydown","click"]);const CA=2,SA=()=>{let t;const[e,n]=Te(!1),i=o=>{t=o};return Jn(()=>{t!=null&&n(t.scrollHeight>t.clientHeight+CA)}),{overflow:e,elementRef:i}},TA=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),AA=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),RA=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 select-text truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="select-text hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),IA=B('<img alt="icon" class="h-full w-full rounded object-cover">'),OA=t=>{const e=mt(),{overflow:n,elementRef:i}=SA(),o=av(),[a,l]=Te(),u=()=>o(t.createdAt),d=()=>t.createdAt.toLocaleString(),{profile:f}=gs(()=>({pubkey:t.authorPubkey}));return(()=>{const p=RA(),g=p.firstChild,m=g.firstChild,w=m.nextSibling,b=w.firstChild,x=b.firstChild,$=x.firstChild,C=$.firstChild,I=x.nextSibling,E=I.firstChild,A=b.nextSibling,L=A.nextSibling;return m.$$click=R=>{R.preventDefault(),t.onShowProfile?.()},k(m,S(ve,{get when(){return f()?.picture},keyed:!0,children:R=>(()=>{const U=IA();return Ue(U,"src",R),U})()})),x.$$click=R=>{R.preventDefault(),t?.onShowProfile?.()},k($,S(ve,{get when(){return(f()?.display_name?.length??0)>0},get children(){const R=TA();return k(R,()=>f()?.display_name),R}}),C),k(C,S(ve,{get when(){return f()?.name!=null},get fallback(){return`@${po(t.authorPubkey)}`},get children(){return["@",Ze(()=>f()?.name)]}})),E.$$click=R=>{R.preventDefault(),t.onShowEvent?.()},k(E,u),Vn(i,A),k(A,()=>t.content),k(w,S(ve,{get when(){return n()},get children(){const R=AA();return R.$$click=U=>{U.stopPropagation(),l(N=>!N)},k(R,S(ve,{get when(){return!a()},get fallback(){return e()("post.hideOverflow")},get children(){return e()("post.showOverflow")}})),R}}),L),k(L,()=>t.actions),k(p,S(ve,{get when(){return t.footer},get children(){return t.footer}}),null),Me(R=>{const U=d(),N=!a();return U!==R._v$&&Ue(E,"title",R._v$=U),N!==R._v$2&&A.classList.toggle("max-h-screen",R._v$2=N),R},{_v$:void 0,_v$2:void 0}),p})()};yt(["click"]);const LA=y4(),PA=()=>b4(LA),zF=()=>{const[t,e]=Gi({});return{timelineState:t,setTimeline:n=>e("content",n),clearTimeline:()=>e("content",void 0)}},MA=/\p{Emoji_Presentation}/u,BA=t=>{const{shouldMuteEvent:e}=tt(),n=os(),i=Ze(t),o=Ze(()=>["useReactions",i()]),a=as(o,iv({taskProvider:([,g])=>{if(g==null)return null;const{eventId:m}=g;return new ps({type:"Reactions",mentionedEventId:m})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(m=>!e(m));return{reactions:l,reactionsGrouped:()=>{const g=new Map;return l().forEach(m=>{const w=Wa(m).isCustomEmoji()?`${m.content}${Wa(m).getUrl()??""}`:m.content,b=g.get(w)??[];b.push(m),g.set(w,b)}),g},isReactedBy:g=>l().findIndex(m=>m.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(m=>m.pubkey===g&&MA.test(m.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},jA=t=>{const{shouldMuteEvent:e}=tt(),n=os(),i=Ze(t),o=Ze(()=>["useReposts",i()]),a=as(o,iv({taskProvider:([,f])=>{if(f==null)return null;const{eventId:p}=f;return new ps({type:"Reposts",mentionedEventId:p})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!e(p));return{reposts:l,isRepostedBy:f=>l().findIndex(p=>p.pubkey===f)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},NA=B('<div class="flex gap-2 overflow-x-auto py-1">'),DA=B('<span class="ml-1 text-sm">'),UA=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),zA=B('<span class="text-red-500">'),FA=B('<div class="nostr-textnote">'),HA=B('<div class="text-xs">'),qA=B('<div class="content whitespace-pre-wrap break-all">'),WA=B('<div class="textnote-content">'),ZA=B('<div class="mt-1 rounded border p-1">'),KA=B('<button class="select-text pr-1 text-blue-500 hover:underline">'),Ng=B('<div class="text-sm text-zinc-400">'),VA=B('<span class="inline-block h-4 w-4">'),GA=B('<div class="flex shrink-0 items-center gap-1">'),QA=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),YA=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),JA=B('<div class="w-6">'),{noteEncode:XA}=uo,eR=t=>{if(t.native!=null)return{type:"Emoji",content:t.native};if(t.src!=null)return{type:"CustomEmoji",content:`:${t.id}:`,shortcode:t.id,url:t.src};throw new Error("unknown emoji")},tR=t=>{const{config:e}=tt(),n=Vr();return(()=>{const i=NA();return k(i,S(zt,{get each(){return[...t.reactionsGrouped.entries()]},children:([,o])=>{const a=o.findIndex(u=>u.pubkey===n())>=0,l=Wa(o[0]).toReactionTypes();return(()=>{const u=UA();return u.$$click=()=>t.onReaction(l),k(u,S(hv,{reactionTypes:l}),null),k(u,S(ve,{get when(){return!e().hideCount},get children(){const d=DA();return k(d,()=>o.length),d}}),null),Me(d=>wa(u,{"text-zinc-400":!a,"hover:bg-zinc-50":!a,"bg-rose-50":a,"border-rose-200":a,"text-rose-400":a},d)),u})()}})),i})()},nR=t=>{const e=mt(),{config:n}=tt(),i=Vr(),{showProfile:o}=Kr(),a=PA(),[l,u]=Te(!1),[d,f]=Te(!1),[p,g]=Te(!1),[m,w]=Te(null),b=()=>g(!1),x=()=>w(null),$=Ze(()=>md(t.event)),C=()=>t.embedding??!0,I=()=>t.actions??!0,{reactions:E,reactionsGrouped:A,isReactedBy:L,isReactedByWithEmoji:R,invalidateReactions:U,query:N}=BA(()=>({eventId:t.event.id})),{reposts:Z,isRepostedBy:ne,invalidateReposts:oe,query:se}=jA(()=>({eventId:t.event.id})),ae=Al(),ee=pi({mutationKey:["publishReaction",$().id],mutationFn:(...z)=>ae.publishReaction(...z).then(J=>Promise.allSettled(J.map(zr(5e3)))),onSuccess:z=>{const J=z.filter(de=>de.status==="fulfilled").length,H=z.length-J;J===z.length?console.log("Succeeded to publish a reaction"):J>0?console.warn(`failed to publish a reaction on ${H} relays`):console.error("failed to publish reaction on all relays")},onError:z=>{console.error("failed to publish reaction: ",z)},onSettled:()=>{U().then(()=>N.refetch()).catch(z=>console.error("failed to refetch reactions",z))}}),j=pi({mutationKey:["publishRepost",$().id],mutationFn:(...z)=>ae.publishRepost(...z).then(J=>Promise.allSettled(J.map(zr(1e4)))),onSuccess:z=>{const J=z.filter(de=>de.status==="fulfilled").length,H=z.length-J;J===z.length?console.log("Succeeded to publish a repost"):J>0?console.warn(`Failed to publish a repost on ${H} relays`):console.error("Failed to publish a repost on all relays")},onError:z=>{console.error("failed to publish repost: ",z)},onSettled:()=>{oe().then(()=>se.refetch()).catch(z=>console.error("failed to refetch reposts",z))}}),K=pi({mutationKey:["deleteEvent",$().id],mutationFn:(...z)=>ae.deleteEvent(...z).then(J=>Promise.allSettled(J.map(zr(1e4)))),onSuccess:z=>{const J=z.filter(de=>de.status==="fulfilled").length,H=z.length-J;J===z.length?window.alert(e()("post.deletedSuccessfully")):J>0?window.alert(e()("post.failedToDeletePartially",{count:H})):window.alert(e()("post.failedToDelete"))},onError:z=>{console.error("failed to delete",z)}}),te=[{content:()=>e()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(XA(t.event.id)).catch(z=>window.alert(z))}},{content:()=>e()("post.showJSON"),onSelect:()=>{w("EventDebugModal")}},{content:()=>e()("post.showReposts"),onSelect:()=>{w("Reposts")}},{content:()=>e()("post.showReactions"),onSelect:()=>{w("Reactions")}},{when:()=>$().pubkey===i(),content:()=>(()=>{const z=zA();return k(z,()=>e()("post.deletePost")),z})(),onSelect:()=>{const z=i();z!=null&&window.confirm(e()("post.confirmDelete"))&&K.mutate({relayUrls:n().relayUrls,pubkey:z,eventId:$().id})}}],le=Ze(()=>{const z=i();return z!=null&&L(z)||l()}),Q=Ze(()=>{const z=i();return z!=null&&R(z)}),ye=Ze(()=>{const z=i();return z!=null&&ne(z)||d()}),be=()=>{if(C()){const z=$().replyingToEvent();if(z!=null&&!$().containsEventMention(z.id))return z.id;const J=$().rootEvent();if(z==null&&J!=null&&!$().containsEventMention(J.id))return J.id}},Ee=z=>{z.stopPropagation(),!ye()&&xn([i(),t.event.id])(([J,H])=>{j.mutate({relayUrls:n().relayUrls,pubkey:J,eventId:H,notifyPubkey:t.event.pubkey}),f(!0)})},ie=z=>{le()||xn([i(),t.event.id])(([J,H])=>{ee.mutate({relayUrls:n().relayUrls,pubkey:J,reactionTypes:z??{type:"LikeDislike",content:"+"},eventId:H,notifyPubkey:t.event.pubkey}),u(!0)})},X=z=>{z.stopPropagation(),ie()},ce=z=>{ie(eR(z))};return(()=>{const z=FA();return k(z,S(OA,{get authorPubkey(){return $().pubkey},get createdAt(){return $().createdAtAsDate()},get content(){return(()=>{const J=WA();return k(J,S(ve,{get when(){return be()},keyed:!0,children:H=>(()=>{const de=ZA();return k(de,S(io,{eventId:H,actions:!1,embedding:!1})),de})()}),null),k(J,S(ve,{get when(){return $().taggedPubkeys().length>0},get children(){const H=HA();return k(H,()=>e()("post.replyToPre"),null),k(H,S(zt,{get each(){return $().taggedPubkeys()},children:de=>(()=>{const ze=KA();return ze.$$click=lt=>{lt.stopPropagation(),o(de)},k(ze,S(Uv,{pubkey:de})),ze})()}),null),k(H,()=>e()("post.replyToPost"),null),H}}),null),k(J,S(US,{get contentWarning(){return $().contentWarning()},get children(){const H=qA();return k(H,S(pT,{get event(){return t.event},get embedding(){return C()}})),H}}),null),J})()},get actions(){return S(ve,{get when(){return I()},get children(){return[S(ve,{get when(){return Ze(()=>!!n().showEmojiReaction)()&&E().length>0},get children(){return S(tR,{get reactionsGrouped(){return A()},onReaction:ie})}}),(()=>{const J=YA(),H=J.firstChild,de=H.nextSibling,ze=de.firstChild,lt=de.nextSibling,Je=lt.firstChild,Y=lt.nextSibling;return H.$$click=_e=>{_e.stopPropagation(),g(Xe=>!Xe)},k(H,S(BC,{})),ze.$$click=Ee,k(ze,S(B1,{})),k(de,S(ve,{get when(){return Ze(()=>!n().hideCount)()&&Z().length>0},get children(){const _e=Ng();return k(_e,()=>Z().length),_e}}),null),Je.$$click=X,k(Je,S(ve,{get when(){return Ze(()=>!!le())()&&!Q()},get fallback(){return S(cv,{})},get children(){return S(dv,{})}})),k(lt,S(ve,{get when(){return Ze(()=>!n().hideCount&&!n().showEmojiReaction)()&&E().length>0},get children(){const _e=Ng();return k(_e,()=>E().length),_e}}),null),k(J,S(ve,{get when(){return n().useEmojiReaction},get children(){const _e=GA();return k(_e,S(Dv,{onEmojiSelect:ce,get children(){const Xe=VA();return k(Xe,S(uv,{})),Xe}})),Me(Xe=>wa(_e,{"text-zinc-400":!le()||!Q(),"hover:text-rose-400":!le()||!Q(),"text-rose-400":le()&&Q()||ee.isLoading},Xe)),_e}}),Y),k(Y,S(fv,{menu:te,get children(){const _e=QA();return k(_e,S(lv,{})),_e}})),Me(_e=>{const Xe={"text-zinc-400":!ye(),"hover:text-green-400":!ye(),"text-green-400":ye()||j.isLoading},Jt=j.isLoading,Ct={"text-zinc-400":!le()||Q(),"hover:text-rose-400":!le()||Q(),"text-rose-400":le()&&!Q()||ee.isLoading},Ht=ee.isLoading;return _e._v$=wa(de,Xe,_e._v$),Jt!==_e._v$2&&(ze.disabled=_e._v$2=Jt),_e._v$3=wa(lt,Ct,_e._v$3),Ht!==_e._v$4&&(Je.disabled=_e._v$4=Ht),_e},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),J})()]}})},get footer(){return S(ve,{get when(){return p()},get children(){return S(Vv,{mode:"reply",get replyTo(){return t.event},onClose:b,onPost:b})}})},onShowProfile:()=>{o($().pubkey)},onShowEvent:()=>{a?.setTimeline({type:"Replies",event:t.event})}}),null),k(z,S(Pn,{get children(){return[S(Ge,{get when(){return m()==="EventDebugModal"},get children(){return S(kT,{get event(){return t.event},onClose:x})}}),S(Ge,{get when(){return m()==="Reactions"},get children(){return S(Bu,{get data(){return E()},pubkeyExtractor:J=>J.pubkey,renderInfo:J=>(()=>{const H=JA();return k(H,S(hv,{get reactionTypes(){return Wa(J).toReactionTypes()}})),H})(),onClose:x})}}),S(Ge,{get when(){return m()==="Reposts"},get children(){return S(Bu,{get data(){return Z()},pubkeyExtractor:J=>J.pubkey,onClose:x})}})]}}),null),z})()};yt(["click"]);const rR=t=>{const{shouldMuteEvent:e}=tt();return S(ve,{get when(){return!e(t.event)},get children(){return S(nR,t)}})},iR=B("<span>予期しないイベント種別（<!>）"),sR=B("<span><span>未対応のイベント種別（<!>）"),Gv=t=>{const e=()=>t.ensureKinds==null||t.ensureKinds.length===0||t.ensureKinds.includes(t.event.kind);return S(Pn,{get fallback(){return(()=>{const n=sR(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,k(i,()=>t.event.kind,a),k(n,S(qs,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n})()},get children(){return[S(Ge,{get when(){return!e()},keyed:!0,get children(){const n=iR(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,k(n,()=>t.event.kind,o),k(n,S(qs,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n}}),S(Ge,{get when(){return t.event.kind===ft.Text},get children(){return S(rR,{get event(){return t.event},get embedding(){return t.actions},get actions(){return t.actions}})}}),S(Ge,{get when(){return t.event.kind===ft.Repost},get children(){return S(PC,{get event(){return t.event}})}})]}})},oR=t=>{const{shouldMuteEvent:e}=tt();return S(zt,{get each(){return t.events},children:n=>S(ve,{get when(){return!e(n)},get children(){return S(G6,{get children(){return S(Gv,{event:n})}})}})})};var aR=sl;function lR(){this.__data__=new aR,this.size=0}var cR=lR;function uR(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var dR=uR;function fR(t){return this.__data__.get(t)}var hR=fR;function pR(t){return this.__data__.has(t)}var gR=pR,vR=sl,mR=Vu,yR=Gu,bR=200;function _R(t,e){var n=this.__data__;if(n instanceof vR){var i=n.__data__;if(!mR||i.length<bR-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new yR(i)}return n.set(t,e),this.size=n.size,this}var wR=_R,xR=sl,$R=cR,ER=dR,kR=hR,CR=gR,SR=wR;function ms(t){var e=this.__data__=new xR(t);this.size=e.size}ms.prototype.clear=$R;ms.prototype.delete=ER;ms.prototype.get=kR;ms.prototype.has=CR;ms.prototype.set=SR;var Ad=ms;function TR(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}var AR=TR,RR=N0,IR=AR,OR=D0,LR=1,PR=2;function MR(t,e,n,i,o,a){var l=n&LR,u=t.length,d=e.length;if(u!=d&&!(l&&d>u))return!1;var f=a.get(t),p=a.get(e);if(f&&p)return f==e&&p==t;var g=-1,m=!0,w=n&PR?new RR:void 0;for(a.set(t,e),a.set(e,t);++g<u;){var b=t[g],x=e[g];if(i)var $=l?i(x,b,g,e,t,a):i(b,x,g,t,e,a);if($!==void 0){if($)continue;m=!1;break}if(w){if(!IR(e,function(C,I){if(!OR(w,I)&&(b===C||o(b,C,n,i,a)))return w.push(I)})){m=!1;break}}else if(!(b===x||o(b,x,n,i,a))){m=!1;break}}return a.delete(t),a.delete(e),m}var Qv=MR,BR=Xn,jR=BR.Uint8Array,Yv=jR;function NR(t){var e=-1,n=Array(t.size);return t.forEach(function(i,o){n[++e]=[o,i]}),n}var DR=NR,Dg=ls,Ug=Yv,UR=Ku,zR=Qv,FR=DR,HR=Qu,qR=1,WR=2,ZR="[object Boolean]",KR="[object Date]",VR="[object Error]",GR="[object Map]",QR="[object Number]",YR="[object RegExp]",JR="[object Set]",XR="[object String]",eI="[object Symbol]",tI="[object ArrayBuffer]",nI="[object DataView]",zg=Dg?Dg.prototype:void 0,lu=zg?zg.valueOf:void 0;function rI(t,e,n,i,o,a,l){switch(n){case nI:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case tI:return!(t.byteLength!=e.byteLength||!a(new Ug(t),new Ug(e)));case ZR:case KR:case QR:return UR(+t,+e);case VR:return t.name==e.name&&t.message==e.message;case YR:case XR:return t==e+"";case GR:var u=FR;case JR:var d=i&qR;if(u||(u=HR),t.size!=e.size&&!d)return!1;var f=l.get(t);if(f)return f==e;i|=WR,l.set(t,e);var p=zR(u(t),u(e),i,o,a,l);return l.delete(t),p;case eI:if(lu)return lu.call(t)==lu.call(e)}return!1}var iI=rI;function sI(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t}var Rd=sI,oI=Array.isArray,nr=oI,aI=Rd,lI=nr;function cI(t,e,n){var i=e(t);return lI(t)?i:aI(i,n(t))}var Jv=cI;function uI(t,e){for(var n=-1,i=t==null?0:t.length,o=0,a=[];++n<i;){var l=t[n];e(l,n,t)&&(a[o++]=l)}return a}var dI=uI;function fI(){return[]}var Xv=fI,hI=dI,pI=Xv,gI=Object.prototype,vI=gI.propertyIsEnumerable,Fg=Object.getOwnPropertySymbols,mI=Fg?function(t){return t==null?[]:(t=Object(t),hI(Fg(t),function(e){return vI.call(t,e)}))}:pI,Id=mI;function yI(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}var bI=yI;function _I(t){return t!=null&&typeof t=="object"}var Gr=_I,wI=cs,xI=Gr,$I="[object Arguments]";function EI(t){return xI(t)&&wI(t)==$I}var kI=EI,Hg=kI,CI=Gr,em=Object.prototype,SI=em.hasOwnProperty,TI=em.propertyIsEnumerable,AI=Hg(function(){return arguments}())?Hg:function(t){return CI(t)&&SI.call(t,"callee")&&!TI.call(t,"callee")},Od=AI,Ja={exports:{}};function RI(){return!1}var II=RI;Ja.exports;(function(t,e){var n=Xn,i=II,o=e&&!e.nodeType&&e,a=o&&!0&&t&&!t.nodeType&&t,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,f=d||i;t.exports=f})(Ja,Ja.exports);var Ld=Ja.exports,OI=9007199254740991,LI=/^(?:0|[1-9]\d*)$/;function PI(t,e){var n=typeof t;return e=e??OI,!!e&&(n=="number"||n!="symbol"&&LI.test(t))&&t>-1&&t%1==0&&t<e}var Pd=PI,MI=9007199254740991;function BI(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=MI}var Md=BI,jI=cs,NI=Md,DI=Gr,UI="[object Arguments]",zI="[object Array]",FI="[object Boolean]",HI="[object Date]",qI="[object Error]",WI="[object Function]",ZI="[object Map]",KI="[object Number]",VI="[object Object]",GI="[object RegExp]",QI="[object Set]",YI="[object String]",JI="[object WeakMap]",XI="[object ArrayBuffer]",eO="[object DataView]",tO="[object Float32Array]",nO="[object Float64Array]",rO="[object Int8Array]",iO="[object Int16Array]",sO="[object Int32Array]",oO="[object Uint8Array]",aO="[object Uint8ClampedArray]",lO="[object Uint16Array]",cO="[object Uint32Array]",ot={};ot[tO]=ot[nO]=ot[rO]=ot[iO]=ot[sO]=ot[oO]=ot[aO]=ot[lO]=ot[cO]=!0;ot[UI]=ot[zI]=ot[XI]=ot[FI]=ot[eO]=ot[HI]=ot[qI]=ot[WI]=ot[ZI]=ot[KI]=ot[VI]=ot[GI]=ot[QI]=ot[YI]=ot[JI]=!1;function uO(t){return DI(t)&&NI(t.length)&&!!ot[jI(t)]}var dO=uO;function fO(t){return function(e){return t(e)}}var Bd=fO,Xa={exports:{}};Xa.exports;(function(t,e){var n=P0,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();t.exports=u})(Xa,Xa.exports);var jd=Xa.exports,hO=dO,pO=Bd,qg=jd,Wg=qg&&qg.isTypedArray,gO=Wg?pO(Wg):hO,tm=gO,vO=bI,mO=Od,yO=nr,bO=Ld,_O=Pd,wO=tm,xO=Object.prototype,$O=xO.hasOwnProperty;function EO(t,e){var n=yO(t),i=!n&&mO(t),o=!n&&!i&&bO(t),a=!n&&!i&&!o&&wO(t),l=n||i||o||a,u=l?vO(t.length,String):[],d=u.length;for(var f in t)(e||$O.call(t,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||_O(f,d)))&&u.push(f);return u}var nm=EO,kO=Object.prototype;function CO(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||kO;return t===n}var Nd=CO;function SO(t,e){return function(n){return t(e(n))}}var rm=SO,TO=rm,AO=TO(Object.keys,Object),RO=AO,IO=Nd,OO=RO,LO=Object.prototype,PO=LO.hasOwnProperty;function MO(t){if(!IO(t))return OO(t);var e=[];for(var n in Object(t))PO.call(t,n)&&n!="constructor"&&e.push(n);return e}var BO=MO,jO=B0,NO=Md;function DO(t){return t!=null&&NO(t.length)&&!jO(t)}var im=DO,UO=nm,zO=BO,FO=im;function HO(t){return FO(t)?UO(t):zO(t)}var Rl=HO,qO=Jv,WO=Id,ZO=Rl;function KO(t){return qO(t,ZO,WO)}var sm=KO,Zg=sm,VO=1,GO=Object.prototype,QO=GO.hasOwnProperty;function YO(t,e,n,i,o,a){var l=n&VO,u=Zg(t),d=u.length,f=Zg(e),p=f.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var m=u[g];if(!(l?m in e:QO.call(e,m)))return!1}var w=a.get(t),b=a.get(e);if(w&&b)return w==e&&b==t;var x=!0;a.set(t,e),a.set(e,t);for(var $=l;++g<d;){m=u[g];var C=t[m],I=e[m];if(i)var E=l?i(I,C,m,e,t,a):i(C,I,m,t,e,a);if(!(E===void 0?C===I||o(C,I,n,i,a):E)){x=!1;break}$||($=m=="constructor")}if(x&&!$){var A=t.constructor,L=e.constructor;A!=L&&"constructor"in t&&"constructor"in e&&!(typeof A=="function"&&A instanceof A&&typeof L=="function"&&L instanceof L)&&(x=!1)}return a.delete(t),a.delete(e),x}var JO=YO,XO=$i,eL=Xn,tL=XO(eL,"DataView"),nL=tL,rL=$i,iL=Xn,sL=rL(iL,"Promise"),oL=sL,aL=$i,lL=Xn,cL=aL(lL,"WeakMap"),uL=cL,ju=nL,Nu=Vu,Du=oL,Uu=U0,zu=uL,om=cs,ys=j0,Kg="[object Map]",dL="[object Object]",Vg="[object Promise]",Gg="[object Set]",Qg="[object WeakMap]",Yg="[object DataView]",fL=ys(ju),hL=ys(Nu),pL=ys(Du),gL=ys(Uu),vL=ys(zu),li=om;(ju&&li(new ju(new ArrayBuffer(1)))!=Yg||Nu&&li(new Nu)!=Kg||Du&&li(Du.resolve())!=Vg||Uu&&li(new Uu)!=Gg||zu&&li(new zu)!=Qg)&&(li=function(t){var e=om(t),n=e==dL?t.constructor:void 0,i=n?ys(n):"";if(i)switch(i){case fL:return Yg;case hL:return Kg;case pL:return Vg;case gL:return Gg;case vL:return Qg}return e});var Il=li,cu=Ad,mL=Qv,yL=iI,bL=JO,Jg=Il,Xg=nr,e0=Ld,_L=tm,wL=1,t0="[object Arguments]",n0="[object Array]",_a="[object Object]",xL=Object.prototype,r0=xL.hasOwnProperty;function $L(t,e,n,i,o,a){var l=Xg(t),u=Xg(e),d=l?n0:Jg(t),f=u?n0:Jg(e);d=d==t0?_a:d,f=f==t0?_a:f;var p=d==_a,g=f==_a,m=d==f;if(m&&e0(t)){if(!e0(e))return!1;l=!0,p=!1}if(m&&!p)return a||(a=new cu),l||_L(t)?mL(t,e,n,i,o,a):yL(t,e,d,n,i,o,a);if(!(n&wL)){var w=p&&r0.call(t,"__wrapped__"),b=g&&r0.call(e,"__wrapped__");if(w||b){var x=w?t.value():t,$=b?e.value():e;return a||(a=new cu),o(x,$,n,i,a)}}return m?(a||(a=new cu),bL(t,e,n,i,o,a)):!1}var EL=$L,kL=EL,i0=Gr;function am(t,e,n,i,o){return t===e?!0:t==null||e==null||!i0(t)&&!i0(e)?t!==t&&e!==e:kL(t,e,n,i,am,o)}var lm=am,CL=Ad,SL=lm,TL=1,AL=2;function RL(t,e,n,i){var o=n.length,a=o,l=!i;if(t==null)return!a;for(t=Object(t);o--;){var u=n[o];if(l&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){u=n[o];var d=u[0],f=t[d],p=u[1];if(l&&u[2]){if(f===void 0&&!(d in t))return!1}else{var g=new CL;if(i)var m=i(f,p,d,t,e,g);if(!(m===void 0?SL(p,f,TL|AL,i,g):m))return!1}}return!0}var IL=RL,OL=xi;function LL(t){return t===t&&!OL(t)}var cm=LL,PL=cm,ML=Rl;function BL(t){for(var e=ML(t),n=e.length;n--;){var i=e[n],o=t[i];e[n]=[i,o,PL(o)]}return e}var jL=BL;function NL(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var um=NL,DL=IL,UL=jL,zL=um;function FL(t){var e=UL(t);return e.length==1&&e[0][2]?zL(e[0][0],e[0][1]):function(n){return n===t||DL(n,t,e)}}var HL=FL,qL=cs,WL=Gr,ZL="[object Symbol]";function KL(t){return typeof t=="symbol"||WL(t)&&qL(t)==ZL}var Dd=KL,VL=nr,GL=Dd,QL=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,YL=/^\w*$/;function JL(t,e){if(VL(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||GL(t)?!0:YL.test(t)||!QL.test(t)||e!=null&&t in Object(e)}var Ud=JL,dm=Gu,XL="Expected a function";function zd(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(XL);var n=function(){var i=arguments,o=e?e.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=t.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(zd.Cache||dm),n}zd.Cache=dm;var eP=zd,tP=eP,nP=500;function rP(t){var e=tP(t,function(i){return n.size===nP&&n.clear(),i}),n=e.cache;return e}var iP=rP,sP=iP,oP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,aP=/\\(\\)?/g,lP=sP(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(oP,function(n,i,o,a){e.push(o?a.replace(aP,"$1"):i||n)}),e}),cP=lP;function uP(t,e){for(var n=-1,i=t==null?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o}var Fd=uP,s0=ls,dP=Fd,fP=nr,hP=Dd,pP=1/0,o0=s0?s0.prototype:void 0,a0=o0?o0.toString:void 0;function fm(t){if(typeof t=="string")return t;if(fP(t))return dP(t,fm)+"";if(hP(t))return a0?a0.call(t):"";var e=t+"";return e=="0"&&1/t==-pP?"-0":e}var gP=fm,vP=gP;function mP(t){return t==null?"":vP(t)}var yP=mP,bP=nr,_P=Ud,wP=cP,xP=yP;function $P(t,e){return bP(t)?t:_P(t,e)?[t]:wP(xP(t))}var bs=$P,EP=Dd,kP=1/0;function CP(t){if(typeof t=="string"||EP(t))return t;var e=t+"";return e=="0"&&1/t==-kP?"-0":e}var _s=CP,SP=bs,TP=_s;function AP(t,e){e=SP(e,t);for(var n=0,i=e.length;t!=null&&n<i;)t=t[TP(e[n++])];return n&&n==i?t:void 0}var Ol=AP,RP=Ol;function IP(t,e,n){var i=t==null?void 0:RP(t,e);return i===void 0?n:i}var OP=IP;function LP(t,e){return t!=null&&e in Object(t)}var PP=LP,MP=bs,BP=Od,jP=nr,NP=Pd,DP=Md,UP=_s;function zP(t,e,n){e=MP(e,t);for(var i=-1,o=e.length,a=!1;++i<o;){var l=UP(e[i]);if(!(a=t!=null&&n(t,l)))break;t=t[l]}return a||++i!=o?a:(o=t==null?0:t.length,!!o&&DP(o)&&NP(l,o)&&(jP(t)||BP(t)))}var FP=zP,HP=PP,qP=FP;function WP(t,e){return t!=null&&qP(t,e,HP)}var ZP=WP,KP=lm,VP=OP,GP=ZP,QP=Ud,YP=cm,JP=um,XP=_s,eM=1,tM=2;function nM(t,e){return QP(t)&&YP(e)?JP(XP(t),e):function(n){var i=VP(n,t);return i===void 0&&i===e?GP(n,t):KP(e,i,eM|tM)}}var rM=nM;function iM(t){return t}var hm=iM;function sM(t){return function(e){return e?.[t]}}var oM=sM,aM=Ol;function lM(t){return function(e){return aM(e,t)}}var cM=lM,uM=oM,dM=cM,fM=Ud,hM=_s;function pM(t){return fM(t)?uM(hM(t)):dM(t)}var gM=pM,vM=HL,mM=rM,yM=hm,bM=nr,_M=gM;function wM(t){return typeof t=="function"?t:t==null?yM:typeof t=="object"?bM(t)?mM(t[0],t[1]):vM(t):_M(t)}var Hd=wM,xM=Hd,$M=z0;function EM(t,e){return t&&t.length?$M(t,xM(e)):[]}var kM=EM;const pm=nl(kM);let ka=0;const{setActiveSubscriptions:CM}=nv();setInterval(()=>{CM(ka)},1e3);const gm=t=>{const{config:e,shouldMuteEvent:n}=tt(),i=bd(),[o,a]=Te([]);yr(tl(()=>[e().mutedPubkeys,e().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),Jn(()=>{console.debug("subscription mounted",t()?.debugId,t()),_r(()=>{console.debug("subscription unmount",t()?.debugId,t())})});const l=d=>{const f=t()?.limit??50;a(p=>{const g=cd.insertEventIntoDescendingList(p,d).slice(0,f),m=pm(g,w=>w.id);return m.length!==g.length&&console.warn("duplicated event",d),m})},u=()=>{console.debug("startSubscription: start");const d=t();if(d==null)return;const{relayUrls:f,filters:p,options:g,onEvent:m,onEOSE:w,continuous:b=!0}=d,x=i().sub(f,p,g);let $=!0;ka+=1;let C=!1,I=!1;const E=[];x.on("event",R=>{m?.(R),!(d.clientEventFilter!=null&&!d.clientEventFilter(R))&&(I?l(R):(C=!0,E.push(R)))}),x.on("eose",()=>{w?.(),I=!0,a(Tu(E)),b||(x.unsub(),$&&($=!1,ka-=1))});let A=!1;const L=setInterval(()=>{if(!A){if(A=!0,I){clearInterval(L),A=!1;return}C&&(C=!1,a(Tu(E))),A=!1}},100);_r(()=>{console.debug("startSubscription: end"),x.unsub(),$&&($=!1,ka-=1),clearInterval(L)})};return yr(()=>{u()}),{events:o}},SM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),TM=(t={})=>(()=>{const e=SM();return it(e,t,!0,!0),e})(),vm=t=>{const e=()=>{const i=t();if(i==null)return[];const o=[];return hi(i).pTags().forEach(l=>{const[,u,d,f]=l,p={pubkey:u,petname:f};d!=null&&d.length>0&&(p.mainRelayUrl=d),o.push(p)}),o};return{followings:e,followingPubkeys:()=>e().map(i=>i.pubkey),data:t}},AM=async({pubkey:t},e)=>{const n=new ps({type:"Followings",pubkey:t});bl({task:n,signal:e});const i=await n.latestEventPromise();return vm(()=>i)},l0=t=>{const e=os(),n=Ze(t),i=()=>["useFollowings",n()],o=as(i,rv({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:u}=l;return new ps({type:"Followings",pubkey:u})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>e.invalidateQueries(i());return{...vm(()=>o.data),invalidateFollowings:a,query:o}},RM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),IM=(t={})=>(()=>{const e=RM();return it(e,t,!0,!0),e})(),OM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),mm=(t={})=>(()=>{const e=OM();return it(e,t,!0,!0),e})(),LM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),ym=(t={})=>(()=>{const e=LM();return it(e,t,!0,!0),e})(),PM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),MM=(t={})=>(()=>{const e=PM();return it(e,t,!0,!0),e})(),BM=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani and </p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),jM=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),NM=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),DM=async()=>{const e=await(await fetch(Wu("packageInfo.json"))).text();return JSON.parse(e)},c0="e502c7b",UM=t=>{const[e]=I0(DM);return S(Ci,{get onClose(){return t.onClose},get children(){const n=BM(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,f=d.nextSibling,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,w=m.nextSibling;w.nextSibling;const b=g.nextSibling,x=b.nextSibling;x.firstChild;const $=x.nextSibling,C=$.nextSibling,I=C.nextSibling,E=I.nextSibling,A=E.nextSibling;return A.nextSibling,k(u,()=>e()?.self?.version,null),k(u,S(ve,{when:c0,get children(){return[" (",c0,")"]}}),null),k(g,S(is,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),w),k(x,S(is,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit/graphs/contributors",children:"Rabbit contributors"}),null),k(A,()=>e()?.self.licenseText),k(n,S(zt,{get each(){return e()?.packages??[]},fallback:"取得中",children:L=>[(()=>{const R=jM(),U=R.firstChild,N=U.nextSibling,Z=N.nextSibling,ne=Z.nextSibling;return ne.nextSibling,k(R,()=>L.name,U),k(R,()=>L.version,N),k(R,()=>L.licenseSpdx,ne),R})(),(()=>{const R=NM();return k(R,()=>L.licenseText),R})()]}),null),Me(()=>Ue(o,"src",Wu("images/rabbit_app_256.png"))),n}})},zM=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),FM=t=>{const e=mt(),n=Vr(),{saveColumn:i}=tt(),o=kd(),a=()=>{t.onClose(),o({command:"moveToLastColumn"}).catch(m=>console.error(m))},l=()=>{xn([n()])(([m])=>{i(D1({pubkey:m}))}),a()},u=()=>{xn([n()])(([m])=>{i(U1({pubkey:m}))}),a()},d=()=>{i(z1()),a()},f=()=>{i(gd({query:""})),a()},p=()=>{xn([n()])(([m])=>{i(F1({pubkey:m}))}),a()},g=()=>{xn([n()])(([m])=>{i(H1({pubkey:m}))}),a()};return S(Ci,{get onClose(){return t.onClose},get children(){const m=zM(),w=m.firstChild,b=w.firstChild,x=w.nextSibling,$=x.firstChild,C=x.nextSibling,I=C.firstChild,E=C.nextSibling,A=E.firstChild,L=E.nextSibling,R=L.firstChild,U=L.nextSibling,N=U.firstChild;return w.$$click=()=>l(),k(b,S(TM,{})),k(w,()=>e()("column.home"),null),x.$$click=()=>u(),k($,S(IM,{})),k(x,()=>e()("column.notification"),null),C.$$click=()=>d(),k(I,S(ym,{})),k(C,()=>e()("column.japanese"),null),E.$$click=()=>f(),k(A,S(MM,{})),k(E,()=>e()("column.search"),null),L.$$click=()=>p(),k(R,S(mm,{})),k(L,()=>e()("column.myPosts"),null),U.$$click=()=>g(),k(N,S(cv,{})),k(U,()=>e()("column.myReactions"),null),m}})};yt(["click"]);const HM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),qM=(t={})=>(()=>{const e=HM();return it(e,t,!0,!0),e})(),WM=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),ZM=(t={})=>(()=>{const e=WM();return it(e,t,!0,!0),e})(),KM=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),VM=(t={})=>(()=>{const e=KM();return it(e,t,!0,!0),e})();function GM(t){const{config:e}=tt(),n=Ze(t),{events:i}=gm(()=>({relayUrls:e().relayUrls,filters:[{kinds:[ft.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>gi(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const QM=t=>{const e=Ze(t),n=as(()=>["useVerification",e()],({queryKey:o})=>{const[,a]=o;if(a==null)return Promise.resolve(null);const{nip05:l}=a;return A1.queryProfile(l)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},YM=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),u0=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),JM=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),XM=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),eB=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),d0=B('<div class="shrink-0 text-xs">'),tB=B('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),nB=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md">'),rB=B('<div class="truncate text-xl font-bold">'),iB=B('<div class="truncate text-xs">@'),sB=B('<span class="inline-block h-3 w-3">'),oB=B('<span class="inline-block h-4 w-4 text-blue-400">'),aB=B('<div class="flex items-center text-xs">'),lB=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),cB=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),uB=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),dB=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),fB=B('<ul class="border-t px-5 py-2 text-xs">'),hB=B('<ul class="border-t p-1">'),pB=B('<div class="h-12 shrink-0">'),gB=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),vB=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),mB=B('<span class="inline-block h-4 w-4 text-rose-500">'),yB=B('<span class="text-sm">'),bB=B('<button class="text-sm hover:text-stone-800 hover:underline">'),_B=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),wB=t=>{const{count:e}=GM(()=>({pubkey:t.pubkey}));return Ze(e)},xB=t=>{const e=mt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a}=tt(),l=Al(),u=Vr(),{showProfileEdit:d}=Kr(),f=Ze(()=>po(t.pubkey)),[p,g]=Te(!1),[m,w]=Te(!1),[b,x]=Te(!1),[$,C]=Te(null),I=()=>C(null),{profile:E,query:A}=gs(()=>({pubkey:t.pubkey})),{verification:L,query:R}=QM(()=>xn([E()?.nip05])(([ie])=>({nip05:ie}))),U=()=>{const ie=E()?.nip05;if(ie==null)return null;const[X,ce]=ie.split("@");return ce==null?null:X==="_"?{domain:ce,ident:ce}:{user:X,domain:ce,ident:ie}},N=()=>L()?.pubkey===t.pubkey,Z=()=>a(t.pubkey),{followingPubkeys:ne,invalidateFollowings:oe,query:se}=l0(()=>xn([u()])(([ie])=>({pubkey:ie}))),ae=()=>ne().includes(t.pubkey),{followingPubkeys:ee,query:j}=l0(()=>({pubkey:t.pubkey})),K=()=>{const ie=u();return ie!=null&&ee().includes(ie)},te=pi({mutationKey:["updateContacts"],mutationFn:(...ie)=>l.updateContacts(...ie).then(X=>Promise.allSettled(X.map(zr(5e3)))),onSuccess:ie=>{const X=ie.filter(z=>z.status==="fulfilled").length,ce=ie.length-X;X===ie.length?console.log("succeeded to update contacts"):X>0?console.log(`succeeded to update contacts for ${X} relays but failed for ${ce} relays`):console.error("failed to update contacts")},onError:ie=>{console.error("failed to update contacts: ",ie)},onSettled:()=>{oe().then(()=>se.refetch()).catch(ie=>console.error("failed to refetch contacts",ie))}}),le=async(ie,X)=>{try{const ce=u();if(ce==null)return;g(!0);const z=await AM({pubkey:ce});if((z.data()==null||z.followingPubkeys().length===0)&&!window.confirm(e()("profile.confirmUpdateEvenIfEmpty")))return;if((z?.data()?.created_at??0)<(se.data?.created_at??0)){window.alert(e()("profile.failedToFetchLatestFollowList"));return}const J=z.data()?.tags??[];let H;switch(ie){case"follow":H=[...J,["p",X]];break;case"unfollow":H=J.filter(([de,ze])=>!(de==="p"&&ze===X));break;default:console.error("updateContacts: invalid operation",ie);return}await te.mutateAsync({relayUrls:n().relayUrls,pubkey:ce,updatedTags:H,content:z.data()?.content??""})}catch(ce){console.error("failed to update contact list",ce),window.alert(e()("profile.failedToUpdateFollowList"))}finally{g(!1)}},Q=()=>{le("follow",t.pubkey).catch(ie=>{console.log("failed to follow",ie)})},ye=()=>{window.confirm(e()("profile.confirmUnfollow"))&&le("unfollow",t.pubkey).catch(ie=>{console.log("failed to unfollow",ie)})},be=[{content:()=>e()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(f()).catch(ie=>window.alert(ie))}},{content:()=>Z()?e()("profile.unmute"):e()("profile.mute"),onSelect:()=>{Z()?o(t.pubkey):i(t.pubkey)}},{when:()=>t.pubkey===u(),content:()=>ae()?e()("profile.unfollowMyself"):e()("profile.followMyself"),onSelect:()=>{ae()?ye():Q()}}],{events:Ee}=gm(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[t.pubkey],limit:10,until:ai()}],continuous:!1}));return S(Ci,{onClose:()=>t.onClose?.(),get children(){return[S(ve,{get when(){return Ze(()=>!!A.isFetched)()&&E()?.banner},get fallback(){return pB()},keyed:!0,children:ie=>(()=>{const X=gB(),ce=X.firstChild;return Ue(ce,"src",ie),X})()}),(()=>{const ie=nB(),X=ie.firstChild,ce=X.firstChild;return k(ce,S(ve,{get when(){return Ze(()=>!!A.isFetched)()&&E()?.picture},keyed:!0,children:z=>(()=>{const J=vB();return Ue(J,"src",z),J})()})),k(ie,S(ve,{get when(){return u()!=null},get children(){const z=tB(),J=z.firstChild;return k(J,S(Pn,{get children(){return[S(Ge,{get when(){return t.pubkey===u()},get children(){const H=YM();return H.$$click=()=>d(),k(H,()=>e()("profile.editProfile")),H}}),S(Ge,{get when(){return te.isLoading||p()},get children(){const H=u0();return k(H,()=>e()("general.updating")),H}}),S(Ge,{get when(){return se.isLoading||se.isFetching},get children(){const H=u0();return k(H,()=>e()("general.loading")),H}}),S(Ge,{get when(){return ae()},get children(){const H=JM();return H.$$click=()=>ye(),H.addEventListener("mouseleave",()=>w(!1)),H.addEventListener("mouseenter",()=>w(!0)),k(H,S(ve,{get when(){return!m()},get fallback(){return e()("profile.unfollow")},get children(){return e()("profile.followingCurrently")}})),Me(()=>H.disabled=te.isLoading),H}}),S(Ge,{get when(){return!ae()},get children(){const H=XM();return H.$$click=()=>Q(),k(H,()=>e()("profile.follow")),Me(()=>H.disabled=te.isLoading),H}})]}}),null),k(J,S(fv,{menu:be,get children(){const H=eB();return k(H,S(lv,{})),H}}),null),k(z,S(Pn,{get children(){return[S(Ge,{get when(){return j.isLoading},get children(){const H=d0();return k(H,()=>e()("general.loading")),H}}),S(Ge,{get when(){return K()},get children(){const H=d0();return k(H,()=>e()("profile.followsYou")),H}})]}}),null),z}}),null),ie})(),(()=>{const ie=lB(),X=ie.firstChild,ce=X.firstChild,z=ce.nextSibling,J=z.firstChild;return k(X,S(ve,{get when(){return A.isLoading},get children(){return e()("general.loading")}}),ce),k(X,S(ve,{get when(){return(E()?.display_name?.length??0)>0},get children(){const H=rB();return k(H,()=>E()?.display_name),H}}),ce),k(ce,S(ve,{get when(){return(E()?.name?.length??0)>0},get children(){const H=iB();return H.firstChild,k(H,()=>E()?.name,null),H}}),null),k(ce,S(ve,{get when(){return(E()?.nip05?.length??0)>0},get children(){const H=aB();return k(H,()=>U()?.ident,null),k(H,S(Pn,{get fallback(){return(()=>{const de=mB();return k(de,S(VM,{})),de})()},get children(){return[S(Ge,{get when(){return R.isLoading},get children(){const de=sB();return k(de,S(qM,{})),de}}),S(Ge,{get when(){return N()},get children(){const de=oB();return k(de,S(ZM,{})),de}})]}}),null),H}}),null),k(J,f),ie})(),S(ve,{get when(){return(E()?.about??"").length>0},get children(){const ie=cB();return k(ie,()=>E()?.about),ie}}),(()=>{const ie=dB(),X=ie.firstChild,ce=X.firstChild,z=ce.nextSibling;return X.$$click=()=>C("Following"),k(ce,()=>e()("profile.following")),k(z,S(ve,{get when(){return j.isFetched},get fallback(){return(()=>{const J=yB();return k(J,()=>e()("general.loading")),J})()},get children(){return ee().length}})),k(ie,S(ve,{get when(){return!n().hideCount},get children(){const J=uB(),H=J.firstChild,de=H.nextSibling;return k(H,()=>e()("profile.followers")),k(de,S(ve,{get when(){return b()},get fallback(){return(()=>{const ze=bB();return ze.$$click=()=>x(!0),k(ze,()=>e()("profile.loadFollowers")),ze})()},keyed:!0,get children(){return S(wB,{get pubkey(){return t.pubkey}})}})),J}}),null),ie})(),S(ve,{get when(){return(E()?.website??"").length>0},get children(){const ie=fB();return k(ie,S(ve,{get when(){return E()?.website},keyed:!0,children:X=>(()=>{const ce=_B(),z=ce.firstChild;return k(z,S(ym,{})),k(ce,S(is,{class:"text-blue-500 underline",href:X}),null),ce})()})),ie}}),S(Pn,{get children(){return S(Ge,{get when(){return $()==="Following"},get children(){return S(Bu,{get data(){return ee()},pubkeyExtractor:ie=>ie,onClose:I})}})}}),(()=>{const ie=hB();return k(ie,S(oR,{get events(){return Ee()}})),ie})()]}})};yt(["click"]);function $B(t,e){for(var n=-1,i=t==null?0:t.length;++n<i&&e(t[n],n,t)!==!1;);return t}var EB=$B,kB=$i,CB=function(){try{var t=kB(Object,"defineProperty");return t({},"",{}),t}catch{}}(),bm=CB,f0=bm;function SB(t,e,n){e=="__proto__"&&f0?f0(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var _m=SB,TB=_m,AB=Ku,RB=Object.prototype,IB=RB.hasOwnProperty;function OB(t,e,n){var i=t[e];(!(IB.call(t,e)&&AB(i,n))||n===void 0&&!(e in t))&&TB(t,e,n)}var qd=OB,LB=qd,PB=_m;function MB(t,e,n,i){var o=!n;n||(n={});for(var a=-1,l=e.length;++a<l;){var u=e[a],d=i?i(n[u],t[u],u,n,t):void 0;d===void 0&&(d=t[u]),o?PB(n,u,d):LB(n,u,d)}return n}var mo=MB,BB=mo,jB=Rl;function NB(t,e){return t&&BB(e,jB(e),t)}var DB=NB;function UB(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var zB=UB,FB=xi,HB=Nd,qB=zB,WB=Object.prototype,ZB=WB.hasOwnProperty;function KB(t){if(!FB(t))return qB(t);var e=HB(t),n=[];for(var i in t)i=="constructor"&&(e||!ZB.call(t,i))||n.push(i);return n}var VB=KB,GB=nm,QB=VB,YB=im;function JB(t){return YB(t)?GB(t,!0):QB(t)}var Wd=JB,XB=mo,ej=Wd;function tj(t,e){return t&&XB(e,ej(e),t)}var nj=tj,el={exports:{}};el.exports;(function(t,e){var n=Xn,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(f,p){if(p)return f.slice();var g=f.length,m=u?u(g):new f.constructor(g);return f.copy(m),m}t.exports=d})(el,el.exports);var rj=el.exports;function ij(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}var sj=ij,oj=mo,aj=Id;function lj(t,e){return oj(t,aj(t),e)}var cj=lj,uj=rm,dj=uj(Object.getPrototypeOf,Object),Zd=dj,fj=Rd,hj=Zd,pj=Id,gj=Xv,vj=Object.getOwnPropertySymbols,mj=vj?function(t){for(var e=[];t;)fj(e,pj(t)),t=hj(t);return e}:gj,wm=mj,yj=mo,bj=wm;function _j(t,e){return yj(t,bj(t),e)}var wj=_j,xj=Jv,$j=wm,Ej=Wd;function kj(t){return xj(t,Ej,$j)}var Kd=kj,Cj=Object.prototype,Sj=Cj.hasOwnProperty;function Tj(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&Sj.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Aj=Tj,h0=Yv;function Rj(t){var e=new t.constructor(t.byteLength);return new h0(e).set(new h0(t)),e}var Vd=Rj,Ij=Vd;function Oj(t,e){var n=e?Ij(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var Lj=Oj,Pj=/\w*$/;function Mj(t){var e=new t.constructor(t.source,Pj.exec(t));return e.lastIndex=t.lastIndex,e}var Bj=Mj,p0=ls,g0=p0?p0.prototype:void 0,v0=g0?g0.valueOf:void 0;function jj(t){return v0?Object(v0.call(t)):{}}var Nj=jj,Dj=Vd;function Uj(t,e){var n=e?Dj(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var zj=Uj,Fj=Vd,Hj=Lj,qj=Bj,Wj=Nj,Zj=zj,Kj="[object Boolean]",Vj="[object Date]",Gj="[object Map]",Qj="[object Number]",Yj="[object RegExp]",Jj="[object Set]",Xj="[object String]",eN="[object Symbol]",tN="[object ArrayBuffer]",nN="[object DataView]",rN="[object Float32Array]",iN="[object Float64Array]",sN="[object Int8Array]",oN="[object Int16Array]",aN="[object Int32Array]",lN="[object Uint8Array]",cN="[object Uint8ClampedArray]",uN="[object Uint16Array]",dN="[object Uint32Array]";function fN(t,e,n){var i=t.constructor;switch(e){case tN:return Fj(t);case Kj:case Vj:return new i(+t);case nN:return Hj(t,n);case rN:case iN:case sN:case oN:case aN:case lN:case cN:case uN:case dN:return Zj(t,n);case Gj:return new i;case Qj:case Xj:return new i(t);case Yj:return qj(t);case Jj:return new i;case eN:return Wj(t)}}var hN=fN,pN=xi,m0=Object.create,gN=function(){function t(){}return function(e){if(!pN(e))return{};if(m0)return m0(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),vN=gN,mN=vN,yN=Zd,bN=Nd;function _N(t){return typeof t.constructor=="function"&&!bN(t)?mN(yN(t)):{}}var wN=_N,xN=Il,$N=Gr,EN="[object Map]";function kN(t){return $N(t)&&xN(t)==EN}var CN=kN,SN=CN,TN=Bd,y0=jd,b0=y0&&y0.isMap,AN=b0?TN(b0):SN,RN=AN,IN=Il,ON=Gr,LN="[object Set]";function PN(t){return ON(t)&&IN(t)==LN}var MN=PN,BN=MN,jN=Bd,_0=jd,w0=_0&&_0.isSet,NN=w0?jN(w0):BN,DN=NN,UN=Ad,zN=EB,FN=qd,HN=DB,qN=nj,WN=rj,ZN=sj,KN=cj,VN=wj,GN=sm,QN=Kd,YN=Il,JN=Aj,XN=hN,eD=wN,tD=nr,nD=Ld,rD=RN,iD=xi,sD=DN,oD=Rl,aD=Wd,lD=1,cD=2,uD=4,xm="[object Arguments]",dD="[object Array]",fD="[object Boolean]",hD="[object Date]",pD="[object Error]",$m="[object Function]",gD="[object GeneratorFunction]",vD="[object Map]",mD="[object Number]",Em="[object Object]",yD="[object RegExp]",bD="[object Set]",_D="[object String]",wD="[object Symbol]",xD="[object WeakMap]",$D="[object ArrayBuffer]",ED="[object DataView]",kD="[object Float32Array]",CD="[object Float64Array]",SD="[object Int8Array]",TD="[object Int16Array]",AD="[object Int32Array]",RD="[object Uint8Array]",ID="[object Uint8ClampedArray]",OD="[object Uint16Array]",LD="[object Uint32Array]",rt={};rt[xm]=rt[dD]=rt[$D]=rt[ED]=rt[fD]=rt[hD]=rt[kD]=rt[CD]=rt[SD]=rt[TD]=rt[AD]=rt[vD]=rt[mD]=rt[Em]=rt[yD]=rt[bD]=rt[_D]=rt[wD]=rt[RD]=rt[ID]=rt[OD]=rt[LD]=!0;rt[pD]=rt[$m]=rt[xD]=!1;function Ca(t,e,n,i,o,a){var l,u=e&lD,d=e&cD,f=e&uD;if(n&&(l=o?n(t,i,o,a):n(t)),l!==void 0)return l;if(!iD(t))return t;var p=tD(t);if(p){if(l=JN(t),!u)return ZN(t,l)}else{var g=YN(t),m=g==$m||g==gD;if(nD(t))return WN(t,u);if(g==Em||g==xm||m&&!o){if(l=d||m?{}:eD(t),!u)return d?VN(t,qN(l,t)):KN(t,HN(l,t))}else{if(!rt[g])return o?t:{};l=XN(t,g,u)}}a||(a=new UN);var w=a.get(t);if(w)return w;a.set(t,l),sD(t)?t.forEach(function($){l.add(Ca($,e,n,$,t,a))}):rD(t)&&t.forEach(function($,C){l.set(C,Ca($,e,n,C,t,a))});var b=f?d?QN:GN:d?aD:oD,x=p?void 0:b(t);return zN(x||t,function($,C){x&&(C=$,$=t[C]),FN(l,C,Ca($,e,n,C,t,a))}),l}var PD=Ca;function MD(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var BD=MD;function jD(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),n=n>o?o:n,n<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++i<o;)a[i]=t[i+e];return a}var ND=jD,DD=Ol,UD=ND;function zD(t,e){return e.length<2?t:DD(t,UD(e,0,-1))}var FD=zD,HD=bs,qD=BD,WD=FD,ZD=_s;function KD(t,e){return e=HD(e,t),t=WD(t,e),t==null||delete t[ZD(qD(e))]}var VD=KD,GD=cs,QD=Zd,YD=Gr,JD="[object Object]",XD=Function.prototype,eU=Object.prototype,km=XD.toString,tU=eU.hasOwnProperty,nU=km.call(Object);function rU(t){if(!YD(t)||GD(t)!=JD)return!1;var e=QD(t);if(e===null)return!0;var n=tU.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&km.call(n)==nU}var iU=rU,sU=iU;function oU(t){return sU(t)?void 0:t}var aU=oU,x0=ls,lU=Od,cU=nr,$0=x0?x0.isConcatSpreadable:void 0;function uU(t){return cU(t)||lU(t)||!!($0&&t&&t[$0])}var dU=uU,fU=Rd,hU=dU;function Cm(t,e,n,i,o){var a=-1,l=t.length;for(n||(n=hU),o||(o=[]);++a<l;){var u=t[a];e>0&&n(u)?e>1?Cm(u,e-1,n,i,o):fU(o,u):i||(o[o.length]=u)}return o}var pU=Cm,gU=pU;function vU(t){var e=t==null?0:t.length;return e?gU(t,1):[]}var mU=vU;function yU(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var bU=yU,_U=bU,E0=Math.max;function wU(t,e,n){return e=E0(e===void 0?t.length-1:e,0),function(){for(var i=arguments,o=-1,a=E0(i.length-e,0),l=Array(a);++o<a;)l[o]=i[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=i[o];return u[e]=n(l),_U(t,this,u)}}var xU=wU;function $U(t){return function(){return t}}var EU=$U,kU=EU,k0=bm,CU=hm,SU=k0?function(t,e){return k0(t,"toString",{configurable:!0,enumerable:!1,value:kU(e),writable:!0})}:CU,TU=SU,AU=800,RU=16,IU=Date.now;function OU(t){var e=0,n=0;return function(){var i=IU(),o=RU-(i-n);if(n=i,o>0){if(++e>=AU)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var LU=OU,PU=TU,MU=LU,BU=MU(PU),jU=BU,NU=mU,DU=xU,UU=jU;function zU(t){return UU(DU(t,void 0,NU),t+"")}var FU=zU,HU=Fd,qU=PD,WU=VD,ZU=bs,KU=mo,VU=aU,GU=FU,QU=Kd,YU=1,JU=2,XU=4,ez=GU(function(t,e){var n={};if(t==null)return n;var i=!1;e=HU(e,function(a){return a=ZU(a,t),i||(i=a.length>1),a}),KU(t,QU(t),n),i&&(n=qU(n,YU|JU|XU,VU));for(var o=e.length;o--;)WU(n,e[o]);return n}),tz=ez;const nz=nl(tz);var rz="Expected a function";function iz(t){if(typeof t!="function")throw new TypeError(rz);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var sz=iz,oz=qd,az=bs,lz=Pd,C0=xi,cz=_s;function uz(t,e,n,i){if(!C0(t))return t;e=az(e,t);for(var o=-1,a=e.length,l=a-1,u=t;u!=null&&++o<a;){var d=cz(e[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return t;if(o!=l){var p=u[d];f=i?i(p,d,u):void 0,f===void 0&&(f=C0(p)?p:lz(e[o+1])?[]:{})}oz(u,d,f),u=u[d]}return t}var dz=uz,fz=Ol,hz=dz,pz=bs;function gz(t,e,n){for(var i=-1,o=e.length,a={};++i<o;){var l=e[i],u=fz(t,l);n(u,l)&&hz(a,pz(l,t),u)}return a}var vz=gz,mz=Fd,yz=Hd,bz=vz,_z=Kd;function wz(t,e){if(t==null)return{};var n=mz(_z(t),function(i){return[i]});return e=yz(e),bz(t,n,function(i,o){return e(i,o[0])})}var xz=wz,$z=Hd,Ez=sz,kz=xz;function Cz(t,e){return kz(t,Ez($z(e)))}var Sz=Cz;const Tz=nl(Sz),Az=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),Rz=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),Iz=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),Oz=B('<div class="px-4 pt-4">'),Lz=B('<div><span class="font-bold"></span><div>'),Pz=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><span class="text-xs"></span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400"></button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">'),Mz=B('<div class="h-24 shrink-0">'),Bz=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),jz="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",Nz="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",Dz=new RegExp(`^${jz}$`),Sm=new RegExp(`^${Nz}$`),Uz=t=>Dz.test(t),zz=t=>Sm.test(t),Fz=t=>{const e=mt(),n=Vr(),{config:i}=tt(),[o,a]=Te(""),[l,u]=Te(""),[d,f]=Te(""),[p,g]=Te(""),[m,w]=Te(""),[b,x]=Te(""),[$,C]=Te(""),[I,E]=Te(""),{profile:A,invalidateProfile:L,query:R}=gs(()=>xn([n()])(([ee])=>({pubkey:ee}))),{updateProfile:U}=Al(),N=pi({mutationKey:["updateProfile"],mutationFn:(...ee)=>U(...ee).then(j=>Promise.allSettled(j.map(zr(1e4)))),onSuccess:ee=>{const j=ee.filter(te=>te.status==="fulfilled").length,K=ee.length-j;j===ee.length?window.alert(e()("profile.edit.updateSucceeded")):j>0?window.alert(e()("profile.edit.failedToUpdatePartially",{count:K})):window.alert(e()("profile.edit.failedToUpdate")),L().then(()=>R.refetch()).catch(te=>console.error(te)),t.onClose()},onError:ee=>{console.error("failed to delete",ee)}}),Z=()=>R.isLoading||N.isLoading,ne=()=>Z();setInterval(()=>console.log(R.isLoading,N.isLoading),1e3);const oe=()=>nz(A(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),se=ee=>{ee.preventDefault();const j=n();if(j==null)return;const K=Tz({picture:o(),banner:l(),name:d(),display_name:p(),about:m(),website:b(),nip05:$(),lud06:Uz(I())?I():null,lud16:zz(I())?I():null},te=>te==null||te.length===0);N.mutate({relayUrls:i().relayUrls,pubkey:j,profile:K,otherProperties:oe()})},ae=ee=>ee.key==="Enter"&&ee.preventDefault();return Jn(()=>{const ee=A();ee!=null&&(R.refetch().catch(j=>console.error(j)),Ta(()=>{a(j=>ee.picture??j),u(j=>ee.banner??j),f(j=>ee.name??j),g(j=>ee.display_name??j),w(j=>ee.about??j),x(j=>ee.website??j),C(j=>ee.nip05??j),ee.lud16!=null?E(ee.lud16):ee.lud06!=null&&E(ee.lud06)}))}),S(Ci,{closeButton:()=>S(L0,{}),get onClose(){return t.onClose},get children(){return[(()=>{const ee=Iz(),j=ee.firstChild;return k(ee,S(ve,{get when(){return l().length>0},get fallback(){return Mz()},keyed:!0,get children(){const K=Az(),te=K.firstChild;return Me(()=>Ue(te,"src",l())),K}}),j),k(j,S(ve,{get when(){return o().length>0},get children(){const K=Rz();return Me(()=>Ue(K,"src",o())),K}})),ee})(),S(ve,{get when(){return Z()},get children(){const ee=Oz();return k(ee,()=>e()("general.loading")),ee}}),(()=>{const ee=Pz(),j=ee.firstChild,K=j.firstChild,te=K.firstChild,le=te.nextSibling,Q=K.nextSibling,ye=Q.firstChild,be=ye.nextSibling,Ee=Q.nextSibling,ie=Ee.firstChild,X=ie.nextSibling,ce=X.firstChild,z=ce.nextSibling,J=Ee.nextSibling,H=J.firstChild,de=H.nextSibling,ze=J.nextSibling,lt=ze.firstChild,Je=lt.nextSibling,Y=ze.nextSibling,_e=Y.firstChild,Xe=_e.nextSibling,Jt=Y.nextSibling,Ct=Jt.firstChild,Ht=Ct.nextSibling,Qr=Jt.nextSibling,En=Qr.firstChild,St=En.nextSibling,Xt=St.nextSibling,Un=Qr.nextSibling,Er=Un.firstChild,kn=Er.nextSibling;return j.addEventListener("submit",se),k(te,()=>e()("profile.edit.icon")),le.$$keydown=ae,le.addEventListener("blur",Ae=>a(Ae.currentTarget.value)),k(ye,()=>e()("profile.edit.banner")),be.$$keydown=ae,be.addEventListener("blur",Ae=>u(Ae.currentTarget.value)),k(ie,()=>e()("profile.edit.name")),z.$$keydown=ae,z.addEventListener("change",Ae=>f(Ae.currentTarget.value)),k(H,()=>e()("profile.edit.displayName")),de.$$keydown=ae,de.addEventListener("change",Ae=>g(Ae.currentTarget.value)),k(lt,()=>e()("profile.edit.about")),Je.addEventListener("change",Ae=>w(Ae.currentTarget.value)),k(_e,()=>e()("profile.edit.website")),Xe.$$keydown=ae,Xe.addEventListener("change",Ae=>x(Ae.currentTarget.value)),k(Ct,()=>e()("profile.edit.nip05")),Ht.$$keydown=ae,Ht.addEventListener("change",Ae=>C(Ae.currentTarget.value)),k(En,()=>e()("profile.edit.lightningAddress")),k(St,()=>e()("profile.edit.lightningAddressDescription")),Xt.$$keydown=ae,Xt.addEventListener("change",Ae=>E(Ae.currentTarget.value)),k(j,S(ve,{get when(){return Object.entries(oe()).length>0},get children(){const Ae=Lz(),qt=Ae.firstChild,Wt=qt.nextSibling;return k(qt,()=>e()("profile.edit.otherProperties")),k(Wt,S(zt,{get each(){return Object.entries(oe())},children:([Cn,Sn])=>(()=>{const un=Bz(),dn=un.firstChild,Tn=dn.nextSibling;return k(dn,Cn),k(Tn,Sn),un})()})),Ae}}),Un),k(Er,()=>e()("profile.edit.save")),kn.$$click=()=>t.onClose(),k(kn,()=>e()("profile.edit.cancel")),k(j,S(ve,{get when(){return N.isLoading},get children(){return e()("profile.edit.updating")}}),null),Me(Ae=>{const qt=ne(),Wt=ne(),Cn=ne(),Sn=ne(),un=ne(),dn=ne(),Tn=Sm.source,rr=ne(),ir=ne(),sr=N.isLoading;return qt!==Ae._v$&&(le.disabled=Ae._v$=qt),Wt!==Ae._v$2&&(be.disabled=Ae._v$2=Wt),Cn!==Ae._v$3&&(z.disabled=Ae._v$3=Cn),Sn!==Ae._v$4&&(de.disabled=Ae._v$4=Sn),un!==Ae._v$5&&(Je.disabled=Ae._v$5=un),dn!==Ae._v$6&&(Xe.disabled=Ae._v$6=dn),Tn!==Ae._v$7&&Ue(Ht,"pattern",Ae._v$7=Tn),rr!==Ae._v$8&&(Ht.disabled=Ae._v$8=rr),ir!==Ae._v$9&&(Xt.disabled=Ae._v$9=ir),sr!==Ae._v$10&&(Er.disabled=Ae._v$10=sr),Ae},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Me(()=>le.value=o()),Me(()=>be.value=l()),Me(()=>z.value=d()),Me(()=>de.value=p()),Me(()=>Je.value=m()),Me(()=>Xe.value=b()),Me(()=>Ht.value=$()),Me(()=>Xt.value=I()),ee})()]}})};yt(["keydown","click"]);const FF=()=>{const t=Vr(),{modalState:e,showProfile:n,closeModal:i}=Kr();return S(ve,{get when(){return e()},keyed:!0,children:o=>S(Pn,{get children(){return[S(Ge,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>S(xB,{pubkey:a,onClose:i})}),S(Ge,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return S(Fz,{onClose:()=>xn([t()])(([a])=>{n(a)})})}}),S(Ge,{get when(){return o.type==="AddColumn"},get children(){return S(FM,{onClose:i})}}),S(Ge,{get when(){return o.type==="About"},get children(){return S(UM,{onClose:i})}})]}})})},Hz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),qz=(t={})=>(()=>{const e=Hz();return it(e,t,!0,!0),e})(),Wz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),S0=(t={})=>(()=>{const e=Wz();return it(e,t,!0,!0),e})(),Zz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),Kz=(t={})=>(()=>{const e=Zz();return it(e,t,!0,!0),e})(),Vz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),Gz=(t={})=>(()=>{const e=Vz();return it(e,t,!0,!0),e})(),Qz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),Yz=(t={})=>(()=>{const e=Qz();return it(e,t,!0,!0),e})(),Jz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),Xz=(t={})=>(()=>{const e=Jz();return it(e,t,!0,!0),e})(),T0=vt.string().length(64).regex(/^[0-9a-f]{64}$/),Fu=vt.string().regex(/^\w+$/),eF=vt.object({shortcode:Fu,url:vt.string().url(),keywords:vt.optional(vt.array(Fu))}),tF=vt.object({manifest:vt.literal("emojipack_v1"),name:vt.string(),emojis:vt.array(eF),description:vt.optional(vt.string()),author:vt.optional(T0),publisher:vt.optional(T0)}).refine(t=>pm(t.emojis,n=>n.shortcode).length===t.emojis.length,{message:"shortcodes should be unique"}),Tm=vt.record(Fu,vt.string().url());tF.or(Tm);const nF=t=>Object.entries(t).map(([e,n])=>({shortcode:e,url:n})),rF=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),iF=B('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),sF=B('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),Hu=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),oF=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),aF=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),lF=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),cF=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),uF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),dF=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),fF=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),hF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),pF=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),gF=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),vF=B('<div class="p-4">'),mF=B('<h2 class="flex-1 text-center text-lg font-bold">'),yF=B('<ul class="flex flex-col">'),bF=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),_F=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),Am=t=>`^(?:${t})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,wF=Am("https?"),xF=Am("wss?"),$F=()=>{const t=mt(),e=Vr(),{showProfile:n,showProfileEdit:i}=Kr();return(()=>{const o=rF(),a=o.firstChild,l=a.nextSibling,u=l.firstChild,d=u.nextSibling;return k(a,()=>t()("config.profile.profile")),u.$$click=()=>xn([e()])(([f])=>{n(f)}),k(u,()=>t()("config.profile.openProfile")),d.$$click=()=>i(),k(d,()=>t()("config.profile.editProfile")),o})()},EF=()=>{const t=mt(),{config:e,addRelay:n,removeRelay:i}=tt(),[o,a]=Te(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},u=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([w])=>w).join(`
`);if(d.length===0){window.alert(t()("config.relays.notConfigured"));return}if(!window.confirm(`${t()("config.relays.askImport")}

${f}`))return;const p=e().relayUrls.length;Ta(()=>{d.forEach(([w])=>{n(w)})});const m=e().relayUrls.length-p;window.alert(t()("config.relays.imported",{count:m}))};return[(()=>{const d=iF(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.nextSibling,w=m.firstChild,b=w.nextSibling;return k(f,()=>t()("config.relays.relays")),k(p,()=>t()("config.relays.numOfRelays",{count:e().relayUrls.length})),k(g,S(zt,{get each(){return e().relayUrls},children:x=>(()=>{const $=Hu(),C=$.firstChild,I=C.nextSibling;return k(C,x),I.$$click=()=>i(x),k(I,S(ss,{})),$})()})),m.addEventListener("submit",l),w.addEventListener("change",x=>a(x.currentTarget.value)),Ue(w,"pattern",xF),k(b,()=>t()("config.relays.addRelay")),Me(()=>w.value=o()),d})(),(()=>{const d=sF(),f=d.firstChild,p=f.nextSibling;return k(f,()=>t()("config.relays.importRelays")),p.$$click=()=>{u().catch(g=>{console.error("failed to import relays",g),window.alert(t()("config.relays.failedToImport"))})},k(p,()=>t()("config.relays.importFromExtension")),d})()]},kF=()=>{const t=mt(),{config:e,setConfig:n}=tt(),i=[{id:"relative",name:t()("config.display.relativeTimeNotation"),example:t()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:t()("config.display.absoluteTimeNotationShort"),example:t()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:t()("config.display.absoluteTimeNotationLong"),example:t()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=oF(),l=a.firstChild,u=l.nextSibling;return k(l,()=>t()("config.display.timeNotation")),k(u,S(zt,{each:i,children:({id:d,name:f,example:p})=>(()=>{const g=aF(),m=g.firstChild,w=m.nextSibling;return m.$$click=()=>o(d),k(m,f),k(w,p),Me(b=>{const x=e().dateFormat===d,$=e().dateFormat===d,C=e().dateFormat!==d,I=e().dateFormat!==d;return x!==b._v$&&m.classList.toggle("bg-rose-300",b._v$=x),$!==b._v$2&&m.classList.toggle("text-white",b._v$2=$),C!==b._v$3&&m.classList.toggle("bg-white",b._v$3=C),I!==b._v$4&&m.classList.toggle("text-rose-300",b._v$4=I),b},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},Ds=t=>(()=>{const e=lF();return e.$$click=n=>t.onClick(n),Me(n=>{const i=!t.value,o=!t.value,a=!!t.value,l=!!t.value,u=t.value;return i!==n._v$5&&e.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&e.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&e.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&e.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&Ue(e,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),e})(),CF=()=>{const t=mt(),{config:e,setConfig:n}=tt(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=cF(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,f=d.firstChild,p=d.nextSibling,g=p.firstChild;return k(l,()=>t()("config.display.reaction")),k(f,()=>t()("config.display.enableEmojiReaction")),k(d,S(Ds,{get value(){return e().useEmojiReaction},onClick:()=>i()}),null),k(g,()=>t()("config.display.showEmojiReaction")),k(p,S(Ds,{get value(){return e().showEmojiReaction},onClick:()=>o()}),null),a})()},SF=()=>{const t=mt(),{config:e,saveEmoji:n,removeEmoji:i}=tt(),[o,a]=Te(""),[l,u]=Te(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),u(""))};return(()=>{const f=uF(),p=f.firstChild,g=p.nextSibling,m=g.nextSibling,w=m.firstChild,b=w.firstChild,x=b.nextSibling,$=w.nextSibling,C=$.firstChild,I=C.nextSibling,E=$.nextSibling;return k(p,()=>t()("config.customEmoji.customEmoji")),k(g,S(zt,{get each(){return Object.values(e().customEmojis)},children:({shortcode:A,url:L})=>(()=>{const R=dF(),U=R.firstChild,N=U.nextSibling,Z=N.nextSibling;return Ue(U,"src",L),Ue(U,"alt",A),k(N,A),Z.$$click=()=>i(A),k(Z,S(ss,{})),R})()})),m.addEventListener("submit",d),k(b,()=>t()("config.customEmoji.shortcode")),x.addEventListener("change",A=>a(A.currentTarget.value)),k(C,()=>t()("config.customEmoji.url")),I.addEventListener("change",A=>u(A.currentTarget.value)),Ue(I,"pattern",wF),k(E,()=>t()("config.customEmoji.addEmoji")),Me(()=>x.value=o()),Me(()=>I.value=l()),f})()},TF=()=>{const t=mt(),{saveEmojis:e}=tt(),[n,i]=Te(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=Tm.parse(JSON.parse(n())),u=nF(l);e(u),i("")}catch(l){const u=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${u}`)}};return(()=>{const a=fF(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,f=d.firstChild,p=f.nextSibling;return k(l,()=>t()("config.customEmoji.emojiImport")),k(u,()=>t()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",g=>i(g.currentTarget.value)),k(p,()=>t()("config.customEmoji.importEmoji")),Me(()=>f.value=n()),a})()},AF=()=>{const t=mt(),{config:e,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=tt(),[a,l]=Te(""),u=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=hF(),f=d.firstChild,p=f.nextSibling;return k(f,()=>t()("config.mute.mutedUsers")),k(p,S(zt,{get each(){return e().mutedPubkeys},children:g=>(()=>{const m=Hu(),w=m.firstChild,b=w.nextSibling;return k(w,S(_d,{pubkey:g})),b.$$click=()=>n(g),k(b,S(ss,{})),m})()})),d})(),(()=>{const d=pF(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,m=g.firstChild,w=m.nextSibling;return k(f,()=>t()("config.mute.mutedKeywords")),k(p,S(zt,{get each(){return e().mutedKeywords},children:b=>(()=>{const x=Hu(),$=x.firstChild,C=$.nextSibling;return k($,b),C.$$click=()=>o(b),k(C,S(ss,{})),x})()})),g.addEventListener("submit",u),m.addEventListener("change",b=>l(b.currentTarget.value)),k(w,()=>t()("config.mute.add")),Me(()=>m.value=a()),d})()]},RF=()=>{const t=mt(),{config:e,setConfig:n}=tt(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=gF(),u=l.firstChild,d=u.nextSibling,f=d.firstChild,p=f.firstChild,g=f.nextSibling,m=g.firstChild,w=g.nextSibling,b=w.firstChild;return k(u,()=>t()("config.display.others")),k(p,()=>t()("config.display.keepOpenPostForm")),k(f,S(Ds,{get value(){return e().keepOpenPostForm},onClick:()=>i()}),null),k(m,()=>t()("config.display.showMediaByDefault")),k(g,S(Ds,{get value(){return e().showMedia},onClick:()=>o()}),null),k(b,()=>t()("config.display.hideNumbers")),k(w,S(Ds,{get value(){return e().hideCount},onClick:()=>a()}),null),l})()},IF=t=>{const e=mt(),[n,i]=Te(null),o=[{name:()=>e()("config.profile.profile"),icon:()=>S(mm,{}),render:()=>S($F,{})},{name:()=>e()("config.relays.relays"),icon:()=>S(Xz,{}),render:()=>S(EF,{})},{name:()=>e()("config.display.display"),icon:()=>S(Yz,{}),render:()=>[S(kF,{}),S(CF,{}),S(RF,{})]},{name:()=>e()("config.customEmoji.customEmoji"),icon:()=>S(Fv,{}),render:()=>[S(SF,{}),S(TF,{})]},{name:()=>e()("config.mute.mute"),icon:()=>S(Gz,{}),render:()=>S(AF,{})}],a=()=>{const l=n();return l==null?null:o[l]};return S(Ci,{get onClose(){return t.onClose},get children(){const l=vF();return k(l,S(ve,{get when(){return a()},get fallback(){return[(()=>{const u=mF();return k(u,()=>e()("config.config")),u})(),(()=>{const u=yF();return k(u,S(zt,{each:o,children:(d,f)=>(()=>{const p=bF(),g=p.firstChild,m=g.firstChild;return g.$$click=()=>i(f),k(m,()=>d.icon()),k(g,()=>d.name(),null),p})()})),u})()]},keyed:!0,children:u=>(()=>{const d=_F(),f=d.firstChild,p=f.nextSibling;return f.$$click=()=>i(null),k(f,S(L0,{})),k(p,()=>u.render()),d})()})),l}})};yt(["click"]);const OF=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),LF=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),PF=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),MF=()=>{let t,e;const{saveColumn:n}=tt(),i=kd(),[o,a]=Te(""),l=u=>{u.preventDefault(),n(gd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),t?.close(),a("")};return S(wd,{ref:u=>{t=u},position:"right",get button(){return(()=>{const u=LF();return k(u,S(S0,{})),u})()},onOpen:()=>e?.focus(),get children(){const u=OF(),d=u.firstChild,f=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=e;return typeof p=="function"?Vn(p,d):e=d,k(f,S(S0,{})),Me(()=>d.value=o()),u}})},HF=()=>{let t;const{showAddColumn:e,showAbout:n}=Kr(),{config:i}=tt(),[o,a]=Te(!1),[l,u]=Te(!1),d=()=>{t?.focus(),t?.click(),t?.setSelectionRange(0,0)},f=()=>a(!0),p=()=>a(!1),g=()=>a(m=>!m);return uT(()=>({commandType:"openPostForm",handler:()=>{f(),t!=null&&setTimeout(()=>d(),100)}})),(()=>{const m=PF(),w=m.firstChild,b=w.firstChild,x=b.firstChild,$=b.nextSibling,C=$.nextSibling,I=C.firstChild,E=I.nextSibling,A=E.nextSibling,L=A.firstChild,R=w.nextSibling;return x.$$click=()=>g(),k(x,S(Kz,{})),k(b,S(MF,{}),null),I.$$click=()=>e(),k(I,S(uv,{})),E.$$click=()=>u(U=>!U),k(E,S(qz,{})),A.$$click=()=>n(),k(R,S(Vv,{textAreaRef:U=>{t=U},onClose:p})),k(m,S(ve,{get when(){return l()},get children(){return S(IF,{onClose:()=>u(!1)})}}),null),Me(U=>{const N=Wu("images/rabbit_app_256.png"),Z=!!(o()||i().keepOpenPostForm),ne=!(o()||i().keepOpenPostForm);return N!==U._v$&&Ue(L,"src",U._v$=N),Z!==U._v$2&&R.classList.toggle("static",U._v$2=Z),ne!==U._v$3&&R.classList.toggle("hidden",U._v$3=ne),U},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m})()};yt(["click"]);export{L0 as A,ps as B,G6 as C,rR as D,io as E,IM as F,mm as G,TM as H,cv as I,ym as J,ft as K,DF as L,MM as M,xi as N,Dd as O,nl as P,FF as Q,PC as R,HF as S,oR as T,_d as U,bd as V,uo as W,Xn as _,gi as a,tt as b,zF as c,uT as d,LA as e,kd as f,Zk as g,Vr as h,hi as i,as as j,zr as k,l0 as l,j1 as m,ai as n,gs as o,ev as p,yC as q,bl as r,hv as s,md as t,gm as u,nR as v,Kr as w,Wa as x,xn as y,vt as z};
//# sourceMappingURL=SideBar-0de994f4.js.map
