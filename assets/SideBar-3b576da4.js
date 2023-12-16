import{v as B0,w as Ia,x as p4,y as Ip,z as Op,A as g4,B as v4,C as m4,D as Lp,E as y4,G as j0,H as b4,m as ds,I as N0,J as Oa,n as jn,o as er,K as Hs,L as sl,N as Pp,s as it,t as B,i as k,a as E,S as me,u as dt,c as Se,j as _4,k as _r,l as Fe,O as w4,M as Ye,P as x4,b as Ln,d as vt,Q as $4,g as Nn,e as Me,R as E4,T as k4,F as Ft,h as Ue,f as ka,U as Vu,V as C4,W as S4}from"./index-73042fa6.js";import{c as ts,a as Vi,b as T4,d as A4,r as Gu}from"./usePersistStatus-36dd51f4.js";class R4 extends B0{constructor(e,n){super(),this.client=e,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Mp(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return pu(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return pu(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,n){const i=this.options,o=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),Ia(i,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=i.queryKey),this.updateQuery();const a=this.hasListeners();a&&Bp(this.currentQuery,o,this.options,i)&&this.executeFetch(),this.updateResult(n),a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||this.options.staleTime!==i.staleTime)&&this.updateStaleTimeout();const l=this.computeRefetchInterval();a&&(this.currentQuery!==o||this.options.enabled!==i.enabled||l!==this.currentRefetchInterval)&&this.updateRefetchInterval(l)}getOptimisticResult(e){const n=this.client.getQueryCache().build(this.client,e),i=this.createResult(n,e);return O4(this,i,e)&&(this.currentResult=i,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),i}getCurrentResult(){return this.currentResult}trackResult(e){const n={};return Object.keys(e).forEach(i=>{Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(i),e[i])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...n}={}){return this.fetch({...n,meta:{refetchPage:e}})}fetchOptimistic(e){const n=this.client.defaultQueryOptions(e),i=this.client.getQueryCache().build(this.client,n);return i.isFetchingOptimistic=!0,i.fetch().then(()=>this.createResult(i,n))}fetch(e){var n;return this.executeFetch({...e,cancelRefetch:(n=e.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let n=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(n=n.catch(p4)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),Ip||this.currentResult.isStale||!Op(this.options.staleTime))return;const n=g4(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(Ip||this.options.enabled===!1||!Op(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||v4.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,n){const i=this.currentQuery,o=this.options,a=this.currentResult,l=this.currentResultState,u=this.currentResultOptions,d=e!==i,f=d?e.state:this.currentQueryInitialState,p=d?this.currentResult:this.previousQueryResult,{state:g}=e;let{dataUpdatedAt:v,error:b,errorUpdatedAt:w,fetchStatus:x,status:$}=g,S=!1,M=!1,C;if(n._optimisticResults){const j=this.hasListeners(),K=!j&&Mp(e,n),J=j&&Bp(e,i,n,o);(K||J)&&(x=m4(e.options.networkMode)?"fetching":"paused",v||($="loading")),n._optimisticResults==="isRestoring"&&(x="idle")}if(n.keepPreviousData&&!g.dataUpdatedAt&&p!=null&&p.isSuccess&&$!=="error")C=p.data,v=p.dataUpdatedAt,$=p.status,S=!0;else if(n.select&&typeof g.data<"u")if(a&&g.data===l?.data&&n.select===this.selectFn)C=this.selectResult;else try{this.selectFn=n.select,C=n.select(g.data),C=Lp(a?.data,C,n),this.selectResult=C,this.selectError=null}catch(j){this.selectError=j}else C=g.data;if(typeof n.placeholderData<"u"&&typeof C>"u"&&$==="loading"){let j;if(a!=null&&a.isPlaceholderData&&n.placeholderData===u?.placeholderData)j=a.data;else if(j=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof j<"u")try{j=n.select(j),this.selectError=null}catch(K){this.selectError=K}typeof j<"u"&&($="success",C=Lp(a?.data,j,n),M=!0)}this.selectError&&(b=this.selectError,C=this.selectResult,w=Date.now(),$="error");const I=x==="fetching",O=$==="loading",A=$==="error";return{status:$,fetchStatus:x,isLoading:O,isSuccess:$==="success",isError:A,isInitialLoading:O&&I,data:C,dataUpdatedAt:v,error:b,errorUpdatedAt:w,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:g.dataUpdateCount>0||g.errorUpdateCount>0,isFetchedAfterMount:g.dataUpdateCount>f.dataUpdateCount||g.errorUpdateCount>f.errorUpdateCount,isFetching:I,isRefetching:I&&!O,isLoadingError:A&&g.dataUpdatedAt===0,isPaused:x==="paused",isPlaceholderData:M,isPreviousData:S,isRefetchError:A&&g.dataUpdatedAt!==0,isStale:Qu(e,n),refetch:this.refetch,remove:this.remove}}updateResult(e){const n=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,Ia(i,n))return;this.currentResult=i;const o={cache:!0},a=()=>{if(!n)return!0;const{notifyOnChangeProps:l}=this.options,u=typeof l=="function"?l():l;if(u==="all"||!u&&!this.trackedProps.size)return!0;const d=new Set(u??this.trackedProps);return this.options.useErrorBoundary&&d.add("error"),Object.keys(this.currentResult).some(f=>{const p=f;return this.currentResult[p]!==n[p]&&d.has(p)})};e?.listeners!==!1&&a()&&(o.listeners=!0),this.notify({...o,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n?.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const n={};e.type==="success"?n.onSuccess=!e.manual:e.type==="error"&&!y4(e.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(e){j0.batch(()=>{if(e.onSuccess){var n,i,o,a;(n=(i=this.options).onSuccess)==null||n.call(i,this.currentResult.data),(o=(a=this.options).onSettled)==null||o.call(a,this.currentResult.data,null)}else if(e.onError){var l,u,d,f;(l=(u=this.options).onError)==null||l.call(u,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function I4(t,e){return e.enabled!==!1&&!t.state.dataUpdatedAt&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Mp(t,e){return I4(t,e)||t.state.dataUpdatedAt>0&&pu(t,e,e.refetchOnMount)}function pu(t,e,n){if(e.enabled!==!1){const i=typeof n=="function"?n(t):n;return i==="always"||i!==!1&&Qu(t,e)}return!1}function Bp(t,e,n,i){return n.enabled!==!1&&(t!==e||i.enabled===!1)&&(!n.suspense||t.state.status!=="error")&&Qu(t,n)}function Qu(t,e){return t.isStaleByTime(e.staleTime)}function O4(t,e,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?e.isPlaceholderData:!Ia(t.getCurrentResult(),e)}class L4 extends B0{constructor(e,n){super(),this.client=e,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var n;const i=this.options;this.options=this.client.defaultMutationOptions(e),Ia(i,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const n={listeners:!0};e.type==="success"?n.onSuccess=!0:e.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:b4(),n={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(e){j0.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var n,i,o,a;(n=(i=this.mutateOptions).onSuccess)==null||n.call(i,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(o=(a=this.mutateOptions).onSettled)==null||o.call(a,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var l,u,d,f;(l=(u=this.mutateOptions).onError)==null||l.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(f=this.mutateOptions).onSettled)==null||d.call(f,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:p})=>{p(this.currentResult)})})}}function P4(t){return typeof t=="function"}function jp(t,e,n){if(!P4(t)){const{queryKey:i,...o}=t;return i?{...o,queryKey:i()}:t}return typeof e=="function"?{...n,queryKey:t(),queryFn:e}:{...e,queryKey:t()}}function D0(t,e){return typeof t=="function"?t(...e):!!t}function M4(t,e){const n=ds({context:t.context}),i=Symbol("empty"),o=n.defaultQueryOptions(t);o._optimisticResults="optimistic";const a=new e(n,o),[l,u]=ts(a.getOptimisticResult(o)),[d,{refetch:f,mutate:p}]=N0(()=>new Promise(w=>{l.isFetching&&l.isLoading||(Vi(l.data)===i&&w(void 0),w(Vi(l.data)))}));Oa(()=>{p(()=>Vi(l.data)),f()});let g=[];const v=a.subscribe(w=>{g.push(()=>{Oa(()=>{const x={...Vi(w)};x.data===void 0&&(x.data=i),u(Vi(x)),p(()=>Vi(w.data)),f()})}),queueMicrotask(()=>{const x=g.pop();x&&x(),g=[]})});jn(()=>v()),er(()=>{a.setOptions(o,{listeners:!1})}),Hs(()=>{const w=n.defaultQueryOptions(t);a.setOptions(w)}),Hs(sl(()=>l.status,()=>{if(l.isError&&!l.isFetching&&D0(a.options.useErrorBoundary,[l.error,a.getCurrentQuery()]))throw l.error}));const b={get(w,x){return x==="data"?d():Reflect.get(w,x)}};return new Proxy(l,b)}function Si(t,e,n){const[i,o]=ts(jp(t,e,n));return Hs(()=>{const a=jp(t,e,n);o(a)}),M4(i,R4)}function bi(t,e,n){const[i,o]=ts(Pp(t,e,n)),a=ds({context:i.context}),l=new L4(a,i),u=(g,v)=>{l.mutate(g,v).catch(B4)},[d,f]=ts({...l.getCurrentResult(),mutate:u,mutateAsync:l.getCurrentResult().mutate});Hs(()=>{const g=Pp(t,e,n);o(g),l.setOptions(g)}),Hs(sl(()=>d.status,()=>{if(d.isError&&D0(l.options.useErrorBoundary,[d.error]))throw d.error}));const p=l.subscribe(g=>{f({...g,mutate:u,mutateAsync:g.mutate})});return jn(p),d}function B4(){}const j4=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18">'),U0=(t={})=>(()=>{const e=j4();return it(e,t,!0,!0),e})();var wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ol(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function N4(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var o=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return t[i]}})}),n}var D4=typeof wt=="object"&&wt&&wt.Object===Object&&wt,F0=D4,U4=F0,F4=typeof self=="object"&&self&&self.Object===Object&&self,z4=U4||F4||Function("return this")(),tr=z4,H4=tr,W4=H4.Symbol,fs=W4,Np=fs,z0=Object.prototype,q4=z0.hasOwnProperty,Z4=z0.toString,Us=Np?Np.toStringTag:void 0;function K4(t){var e=q4.call(t,Us),n=t[Us];try{t[Us]=void 0;var i=!0}catch{}var o=Z4.call(t);return i&&(e?t[Us]=n:delete t[Us]),o}var V4=K4,G4=Object.prototype,Q4=G4.toString;function Y4(t){return Q4.call(t)}var J4=Y4,Dp=fs,X4=V4,e5=J4,t5="[object Null]",n5="[object Undefined]",Up=Dp?Dp.toStringTag:void 0;function r5(t){return t==null?t===void 0?n5:t5:Up&&Up in Object(t)?X4(t):e5(t)}var hs=r5;function i5(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Ti=i5,s5=hs,o5=Ti,a5="[object AsyncFunction]",l5="[object Function]",c5="[object GeneratorFunction]",u5="[object Proxy]";function d5(t){if(!o5(t))return!1;var e=s5(t);return e==l5||e==c5||e==a5||e==u5}var H0=d5,f5=tr,h5=f5["__core-js_shared__"],p5=h5,Gc=p5,Fp=function(){var t=/[^.]+$/.exec(Gc&&Gc.keys&&Gc.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function g5(t){return!!Fp&&Fp in t}var v5=g5,m5=Function.prototype,y5=m5.toString;function b5(t){if(t!=null){try{return y5.call(t)}catch{}try{return t+""}catch{}}return""}var W0=b5,_5=H0,w5=v5,x5=Ti,$5=W0,E5=/[\\^$.*+?()[\]{}|]/g,k5=/^\[object .+?Constructor\]$/,C5=Function.prototype,S5=Object.prototype,T5=C5.toString,A5=S5.hasOwnProperty,R5=RegExp("^"+T5.call(A5).replace(E5,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function I5(t){if(!x5(t)||w5(t))return!1;var e=_5(t)?R5:k5;return e.test($5(t))}var O5=I5;function L5(t,e){return t?.[e]}var P5=L5,M5=O5,B5=P5;function j5(t,e){var n=B5(t,e);return M5(n)?n:void 0}var Ai=j5,N5=Ai,D5=N5(Object,"create"),al=D5,zp=al;function U5(){this.__data__=zp?zp(null):{},this.size=0}var F5=U5;function z5(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var H5=z5,W5=al,q5="__lodash_hash_undefined__",Z5=Object.prototype,K5=Z5.hasOwnProperty;function V5(t){var e=this.__data__;if(W5){var n=e[t];return n===q5?void 0:n}return K5.call(e,t)?e[t]:void 0}var G5=V5,Q5=al,Y5=Object.prototype,J5=Y5.hasOwnProperty;function X5(t){var e=this.__data__;return Q5?e[t]!==void 0:J5.call(e,t)}var e$=X5,t$=al,n$="__lodash_hash_undefined__";function r$(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=t$&&e===void 0?n$:e,this}var i$=r$,s$=F5,o$=H5,a$=G5,l$=e$,c$=i$;function ps(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}ps.prototype.clear=s$;ps.prototype.delete=o$;ps.prototype.get=a$;ps.prototype.has=l$;ps.prototype.set=c$;var u$=ps;function d$(){this.__data__=[],this.size=0}var f$=d$;function h$(t,e){return t===e||t!==t&&e!==e}var Yu=h$,p$=Yu;function g$(t,e){for(var n=t.length;n--;)if(p$(t[n][0],e))return n;return-1}var ll=g$,v$=ll,m$=Array.prototype,y$=m$.splice;function b$(t){var e=this.__data__,n=v$(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():y$.call(e,n,1),--this.size,!0}var _$=b$,w$=ll;function x$(t){var e=this.__data__,n=w$(e,t);return n<0?void 0:e[n][1]}var $$=x$,E$=ll;function k$(t){return E$(this.__data__,t)>-1}var C$=k$,S$=ll;function T$(t,e){var n=this.__data__,i=S$(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}var A$=T$,R$=f$,I$=_$,O$=$$,L$=C$,P$=A$;function gs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}gs.prototype.clear=R$;gs.prototype.delete=I$;gs.prototype.get=O$;gs.prototype.has=L$;gs.prototype.set=P$;var cl=gs,M$=Ai,B$=tr,j$=M$(B$,"Map"),Ju=j$,Hp=u$,N$=cl,D$=Ju;function U$(){this.size=0,this.__data__={hash:new Hp,map:new(D$||N$),string:new Hp}}var F$=U$;function z$(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var H$=z$,W$=H$;function q$(t,e){var n=t.__data__;return W$(e)?n[typeof e=="string"?"string":"hash"]:n.map}var ul=q$,Z$=ul;function K$(t){var e=Z$(this,t).delete(t);return this.size-=e?1:0,e}var V$=K$,G$=ul;function Q$(t){return G$(this,t).get(t)}var Y$=Q$,J$=ul;function X$(t){return J$(this,t).has(t)}var e6=X$,t6=ul;function n6(t,e){var n=t6(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}var r6=n6,i6=F$,s6=V$,o6=Y$,a6=e6,l6=r6;function vs(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var i=t[e];this.set(i[0],i[1])}}vs.prototype.clear=i6;vs.prototype.delete=s6;vs.prototype.get=o6;vs.prototype.has=a6;vs.prototype.set=l6;var Xu=vs,c6="__lodash_hash_undefined__";function u6(t){return this.__data__.set(t,c6),this}var d6=u6;function f6(t){return this.__data__.has(t)}var h6=f6,p6=Xu,g6=d6,v6=h6;function La(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new p6;++e<n;)this.add(t[e])}La.prototype.add=La.prototype.push=g6;La.prototype.has=v6;var q0=La;function m6(t,e,n,i){for(var o=t.length,a=n+(i?1:-1);i?a--:++a<o;)if(e(t[a],a,t))return a;return-1}var y6=m6;function b6(t){return t!==t}var _6=b6;function w6(t,e,n){for(var i=n-1,o=t.length;++i<o;)if(t[i]===e)return i;return-1}var x6=w6,$6=y6,E6=_6,k6=x6;function C6(t,e,n){return e===e?k6(t,e,n):$6(t,E6,n)}var S6=C6,T6=S6;function A6(t,e){var n=t==null?0:t.length;return!!n&&T6(t,e,0)>-1}var R6=A6;function I6(t,e,n){for(var i=-1,o=t==null?0:t.length;++i<o;)if(n(e,t[i]))return!0;return!1}var O6=I6;function L6(t,e){return t.has(e)}var Z0=L6,P6=Ai,M6=tr,B6=P6(M6,"Set"),K0=B6;function j6(){}var N6=j6;function D6(t){var e=-1,n=Array(t.size);return t.forEach(function(i){n[++e]=i}),n}var ed=D6,Qc=K0,U6=N6,F6=ed,z6=1/0,H6=Qc&&1/F6(new Qc([,-0]))[1]==z6?function(t){return new Qc(t)}:U6,W6=H6,q6=q0,Z6=R6,K6=O6,V6=Z0,G6=W6,Q6=ed,Y6=200;function J6(t,e,n){var i=-1,o=Z6,a=t.length,l=!0,u=[],d=u;if(n)l=!1,o=K6;else if(a>=Y6){var f=e?null:G6(t);if(f)return Q6(f);l=!1,o=V6,d=new q6}else d=e?[]:u;e:for(;++i<a;){var p=t[i],g=e?e(p):p;if(p=n||p!==0?p:0,l&&g===g){for(var v=d.length;v--;)if(d[v]===g)continue e;e&&d.push(g),u.push(p)}else o(d,g,n)||(d!==u&&d.push(g),u.push(p))}return u}var V0=J6,X6=V0;function e8(t){return t&&t.length?X6(t):[]}var t8=e8;const _i=ol(t8),n8=B('<div class="block shrink-0 overflow-hidden border-b p-1">'),r8=t=>(()=>{const e=n8();return k(e,()=>t.children),e})();function gu(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function i8(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function gi(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function s8(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");gu(t.outputLen),gu(t.blockLen)}function o8(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function a8(t,e){gi(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const an={number:gu,bool:i8,bytes:gi,hash:s8,exists:o8,output:a8},Yc=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const td=t=>t instanceof Uint8Array,wi=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Zn=(t,e)=>t<<32-e|t>>>e,l8=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!l8)throw new Error("Non little-endian hardware is not supported");const c8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function on(t){if(!td(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=c8[t[n]];return e}function ns(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function G0(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function Ws(t){if(typeof t=="string"&&(t=G0(t)),!td(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}function Ji(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!td(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}class Q0{clone(){return this._cloneInto()}}const u8=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function d8(t,e){if(e!==void 0&&(typeof e!="object"||!u8(e)))throw new Error("Options should be object or undefined");return Object.assign(t,e)}function Ri(t){const e=i=>t().update(Ws(i)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}function lo(t=32){if(Yc&&typeof Yc.getRandomValues=="function")return Yc.getRandomValues(new Uint8Array(t));throw new Error("crypto.getRandomValues must be defined")}function f8(t,e,n,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,i);const o=BigInt(32),a=BigInt(4294967295),l=Number(n>>o&a),u=Number(n&a),d=i?4:0,f=i?0:4;t.setUint32(e+d,l,i),t.setUint32(e+f,u,i)}class nd extends Q0{constructor(e,n,i,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=wi(this.buffer)}update(e){an.exists(this);const{view:n,buffer:i,blockLen:o}=this;e=Ws(e);const a=e.length;for(let l=0;l<a;){const u=Math.min(o-this.pos,a-l);if(u===o){const d=wi(e);for(;o<=a-l;l+=o)this.process(d,l);continue}i.set(e.subarray(l,l+u),this.pos),this.pos+=u,l+=u,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){an.exists(this),an.output(e,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:a}=this;let{pos:l}=this;n[l++]=128,this.buffer.subarray(l).fill(0),this.padOffset>o-l&&(this.process(i,0),l=0);for(let g=l;g<o;g++)n[g]=0;f8(i,o-8,BigInt(this.length*8),a),this.process(i,0);const u=wi(e),d=this.outputLen;if(d%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const f=d/4,p=this.get();if(f>p.length)throw new Error("_sha2: outputLen bigger than state");for(let g=0;g<f;g++)u.setUint32(4*g,p[g],a)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:a,destroyed:l,pos:u}=this;return e.length=o,e.pos=u,e.finished=a,e.destroyed=l,o%n&&e.buffer.set(i),e}}const h8=(t,e,n)=>t&e^~t&n,p8=(t,e,n)=>t&e^t&n^e&n,g8=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Br=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),jr=new Uint32Array(64);class Y0 extends nd{constructor(){super(64,32,8,!1),this.A=Br[0]|0,this.B=Br[1]|0,this.C=Br[2]|0,this.D=Br[3]|0,this.E=Br[4]|0,this.F=Br[5]|0,this.G=Br[6]|0,this.H=Br[7]|0}get(){const{A:e,B:n,C:i,D:o,E:a,F:l,G:u,H:d}=this;return[e,n,i,o,a,l,u,d]}set(e,n,i,o,a,l,u,d){this.A=e|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=a|0,this.F=l|0,this.G=u|0,this.H=d|0}process(e,n){for(let g=0;g<16;g++,n+=4)jr[g]=e.getUint32(n,!1);for(let g=16;g<64;g++){const v=jr[g-15],b=jr[g-2],w=Zn(v,7)^Zn(v,18)^v>>>3,x=Zn(b,17)^Zn(b,19)^b>>>10;jr[g]=x+jr[g-7]+w+jr[g-16]|0}let{A:i,B:o,C:a,D:l,E:u,F:d,G:f,H:p}=this;for(let g=0;g<64;g++){const v=Zn(u,6)^Zn(u,11)^Zn(u,25),b=p+v+h8(u,d,f)+g8[g]+jr[g]|0,x=(Zn(i,2)^Zn(i,13)^Zn(i,22))+p8(i,o,a)|0;p=f,f=d,d=u,u=l+b|0,l=a,a=o,o=i,i=b+x|0}i=i+this.A|0,o=o+this.B|0,a=a+this.C|0,l=l+this.D|0,u=u+this.E|0,d=d+this.F|0,f=f+this.G|0,p=p+this.H|0,this.set(i,o,a,l,u,d,f,p)}roundClean(){jr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}class v8 extends Y0{constructor(){super(),this.A=-1056596264,this.B=914150663,this.C=812702999,this.D=-150054599,this.E=-4191439,this.F=1750603025,this.G=1694076839,this.H=-1090891868,this.outputLen=28}}const Qn=Ri(()=>new Y0);Ri(()=>new v8);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const J0=BigInt(0),dl=BigInt(1),m8=BigInt(2),fl=t=>t instanceof Uint8Array,y8=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function rs(t){if(!fl(t))throw new Error("Uint8Array expected");let e="";for(let n=0;n<t.length;n++)e+=y8[t[n]];return e}function X0(t){const e=t.toString(16);return e.length&1?`0${e}`:e}function rd(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return BigInt(t===""?"0":`0x${t}`)}function is(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length;if(e%2)throw new Error("padded hex string expected, got unpadded hex of length "+e);const n=new Uint8Array(e/2);for(let i=0;i<n.length;i++){const o=i*2,a=t.slice(o,o+2),l=Number.parseInt(a,16);if(Number.isNaN(l)||l<0)throw new Error("Invalid byte sequence");n[i]=l}return n}function Qt(t){return rd(rs(t))}function id(t){if(!fl(t))throw new Error("Uint8Array expected");return rd(rs(Uint8Array.from(t).reverse()))}function Wr(t,e){return is(t.toString(16).padStart(e*2,"0"))}function e1(t,e){return Wr(t,e).reverse()}function b8(t){return is(X0(t))}function It(t,e,n){let i;if(typeof e=="string")try{i=is(e)}catch(a){throw new Error(`${t} must be valid hex string, got "${e}". Cause: ${a}`)}else if(fl(e))i=Uint8Array.from(e);else throw new Error(`${t} must be hex string or Uint8Array`);const o=i.length;if(typeof n=="number"&&o!==n)throw new Error(`${t} expected ${n} bytes, got ${o}`);return i}function $i(...t){const e=new Uint8Array(t.reduce((i,o)=>i+o.length,0));let n=0;return t.forEach(i=>{if(!fl(i))throw new Error("Uint8Array expected");e.set(i,n),n+=i.length}),e}function _8(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function w8(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function x8(t){let e;for(e=0;t>J0;t>>=dl,e+=1);return e}function $8(t,e){return t>>BigInt(e)&dl}const E8=(t,e,n)=>t|(n?dl:J0)<<BigInt(e),sd=t=>(m8<<BigInt(t-1))-dl,Jc=t=>new Uint8Array(t),Wp=t=>Uint8Array.from(t);function t1(t,e,n){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof n!="function")throw new Error("hmacFn must be a function");let i=Jc(t),o=Jc(t),a=0;const l=()=>{i.fill(1),o.fill(0),a=0},u=(...g)=>n(o,i,...g),d=(g=Jc())=>{o=u(Wp([0]),g),i=u(),g.length!==0&&(o=u(Wp([1]),g),i=u())},f=()=>{if(a++>=1e3)throw new Error("drbg: tried 1000 values");let g=0;const v=[];for(;g<e;){i=u();const b=i.slice();v.push(b),g+=i.length}return $i(...v)};return(g,v)=>{l(),d(g);let b;for(;!(b=v(f()));)d();return l(),b}}const k8={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function co(t,e,n={}){const i=(o,a,l)=>{const u=k8[a];if(typeof u!="function")throw new Error(`Invalid validator "${a}", expected function`);const d=t[o];if(!(l&&d===void 0)&&!u(d,t))throw new Error(`Invalid param ${String(o)}=${d} (${typeof d}), expected ${a}`)};for(const[o,a]of Object.entries(e))i(o,a,!1);for(const[o,a]of Object.entries(n))i(o,a,!0);return t}const C8=Object.freeze(Object.defineProperty({__proto__:null,bitGet:$8,bitLen:x8,bitMask:sd,bitSet:E8,bytesToHex:rs,bytesToNumberBE:Qt,bytesToNumberLE:id,concatBytes:$i,createHmacDrbg:t1,ensureBytes:It,equalBytes:_8,hexToBytes:is,hexToNumber:rd,numberToBytesBE:Wr,numberToBytesLE:e1,numberToHexUnpadded:X0,numberToVarBytesBE:b8,utf8ToBytes:w8,validateObject:co},Symbol.toStringTag,{value:"Module"}));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const kt=BigInt(0),gt=BigInt(1),vi=BigInt(2),S8=BigInt(3),vu=BigInt(4),qp=BigInt(5),Zp=BigInt(8);BigInt(9);BigInt(16);function Et(t,e){const n=t%e;return n>=kt?n:e+n}function T8(t,e,n){if(n<=kt||e<kt)throw new Error("Expected power/modulo > 0");if(n===gt)return kt;let i=gt;for(;e>kt;)e&gt&&(i=i*t%n),t=t*t%n,e>>=gt;return i}function yn(t,e,n){let i=t;for(;e-- >kt;)i*=i,i%=n;return i}function mu(t,e){if(t===kt||e<=kt)throw new Error(`invert: expected positive integers, got n=${t} mod=${e}`);let n=Et(t,e),i=e,o=kt,a=gt;for(;n!==kt;){const u=i/n,d=i%n,f=o-a*u;i=n,n=d,o=a,a=f}if(i!==gt)throw new Error("invert: does not exist");return Et(o,e)}function A8(t){const e=(t-gt)/vi;let n,i,o;for(n=t-gt,i=0;n%vi===kt;n/=vi,i++);for(o=vi;o<t&&T8(o,e,t)!==t-gt;o++);if(i===1){const l=(t+gt)/vu;return function(d,f){const p=d.pow(f,l);if(!d.eql(d.sqr(p),f))throw new Error("Cannot find square root");return p}}const a=(n+gt)/vi;return function(u,d){if(u.pow(d,e)===u.neg(u.ONE))throw new Error("Cannot find square root");let f=i,p=u.pow(u.mul(u.ONE,o),n),g=u.pow(d,a),v=u.pow(d,n);for(;!u.eql(v,u.ONE);){if(u.eql(v,u.ZERO))return u.ZERO;let b=1;for(let x=u.sqr(v);b<f&&!u.eql(x,u.ONE);b++)x=u.sqr(x);const w=u.pow(p,gt<<BigInt(f-b-1));p=u.sqr(w),g=u.mul(g,w),v=u.mul(v,p),f=b}return g}}function R8(t){if(t%vu===S8){const e=(t+gt)/vu;return function(i,o){const a=i.pow(o,e);if(!i.eql(i.sqr(a),o))throw new Error("Cannot find square root");return a}}if(t%Zp===qp){const e=(t-qp)/Zp;return function(i,o){const a=i.mul(o,vi),l=i.pow(a,e),u=i.mul(o,l),d=i.mul(i.mul(u,vi),l),f=i.mul(u,i.sub(d,i.ONE));if(!i.eql(i.sqr(f),o))throw new Error("Cannot find square root");return f}}return A8(t)}const I8=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function O8(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},n=I8.reduce((i,o)=>(i[o]="function",i),e);return co(t,n)}function L8(t,e,n){if(n<kt)throw new Error("Expected power > 0");if(n===kt)return t.ONE;if(n===gt)return e;let i=t.ONE,o=e;for(;n>kt;)n&gt&&(i=t.mul(i,o)),o=t.sqr(o),n>>=gt;return i}function P8(t,e){const n=new Array(e.length),i=e.reduce((a,l,u)=>t.is0(l)?a:(n[u]=a,t.mul(a,l)),t.ONE),o=t.inv(i);return e.reduceRight((a,l,u)=>t.is0(l)?a:(n[u]=t.mul(a,n[u]),t.mul(a,l)),o),n}function od(t,e){const n=e!==void 0?e:t.toString(2).length,i=Math.ceil(n/8);return{nBitLength:n,nByteLength:i}}function M8(t,e,n=!1,i={}){if(t<=kt)throw new Error(`Expected Fp ORDER > 0, got ${t}`);const{nBitLength:o,nByteLength:a}=od(t,e);if(a>2048)throw new Error("Field lengths over 2048 bytes are not supported");const l=R8(t),u=Object.freeze({ORDER:t,BITS:o,BYTES:a,MASK:sd(o),ZERO:kt,ONE:gt,create:d=>Et(d,t),isValid:d=>{if(typeof d!="bigint")throw new Error(`Invalid field element: expected bigint, got ${typeof d}`);return kt<=d&&d<t},is0:d=>d===kt,isOdd:d=>(d&gt)===gt,neg:d=>Et(-d,t),eql:(d,f)=>d===f,sqr:d=>Et(d*d,t),add:(d,f)=>Et(d+f,t),sub:(d,f)=>Et(d-f,t),mul:(d,f)=>Et(d*f,t),pow:(d,f)=>L8(u,d,f),div:(d,f)=>Et(d*mu(f,t),t),sqrN:d=>d*d,addN:(d,f)=>d+f,subN:(d,f)=>d-f,mulN:(d,f)=>d*f,inv:d=>mu(d,t),sqrt:i.sqrt||(d=>l(u,d)),invertBatch:d=>P8(u,d),cmov:(d,f,p)=>p?f:d,toBytes:d=>n?e1(d,a):Wr(d,a),fromBytes:d=>{if(d.length!==a)throw new Error(`Fp.fromBytes: expected ${a}, got ${d.length}`);return n?id(d):Qt(d)}});return Object.freeze(u)}function B8(t,e,n=!1){t=It("privateHash",t);const i=t.length,o=od(e).nByteLength+8;if(o<24||i<o||i>1024)throw new Error(`hashToPrivateScalar: expected ${o}-1024 bytes of input, got ${i}`);const a=n?id(t):Qt(t);return Et(a,e-gt)+gt}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const j8=BigInt(0),Xc=BigInt(1);function N8(t,e){const n=(o,a)=>{const l=a.negate();return o?l:a},i=o=>{const a=Math.ceil(e/o)+1,l=2**(o-1);return{windows:a,windowSize:l}};return{constTimeNegate:n,unsafeLadder(o,a){let l=t.ZERO,u=o;for(;a>j8;)a&Xc&&(l=l.add(u)),u=u.double(),a>>=Xc;return l},precomputeWindow(o,a){const{windows:l,windowSize:u}=i(a),d=[];let f=o,p=f;for(let g=0;g<l;g++){p=f,d.push(p);for(let v=1;v<u;v++)p=p.add(f),d.push(p);f=p.double()}return d},wNAF(o,a,l){const{windows:u,windowSize:d}=i(o);let f=t.ZERO,p=t.BASE;const g=BigInt(2**o-1),v=2**o,b=BigInt(o);for(let w=0;w<u;w++){const x=w*d;let $=Number(l&g);l>>=b,$>d&&($-=v,l+=Xc);const S=x,M=x+Math.abs($)-1,C=w%2!==0,I=$<0;$===0?p=p.add(n(C,a[S])):f=f.add(n(I,a[M]))}return{p:f,f:p}},wNAFCached(o,a,l,u){const d=o._WINDOW_SIZE||1;let f=a.get(o);return f||(f=this.precomputeWindow(o,d),d!==1&&a.set(o,u(f))),this.wNAF(d,f,l)}}}function n1(t){return O8(t.Fp),co(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...od(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function D8(t){const e=n1(t);co(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:n,Fp:i,a:o}=e;if(n){if(!i.eql(o,i.ZERO))throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");if(typeof n!="object"||typeof n.beta!="bigint"||typeof n.splitScalar!="function")throw new Error("Expected endomorphism with beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:U8,hexToBytes:F8}=C8,yi={Err:class extends Error{constructor(e=""){super(e)}},_parseInt(t){const{Err:e}=yi;if(t.length<2||t[0]!==2)throw new e("Invalid signature integer tag");const n=t[1],i=t.subarray(2,n+2);if(!n||i.length!==n)throw new e("Invalid signature integer: wrong length");if(i[0]&128)throw new e("Invalid signature integer: negative");if(i[0]===0&&!(i[1]&128))throw new e("Invalid signature integer: unnecessary leading zero");return{d:U8(i),l:t.subarray(n+2)}},toSig(t){const{Err:e}=yi,n=typeof t=="string"?F8(t):t;if(!(n instanceof Uint8Array))throw new Error("ui8a expected");let i=n.length;if(i<2||n[0]!=48)throw new e("Invalid signature tag");if(n[1]!==i-2)throw new e("Invalid signature: incorrect length");const{d:o,l:a}=yi._parseInt(n.subarray(2)),{d:l,l:u}=yi._parseInt(a);if(u.length)throw new e("Invalid signature: left bytes after parsing");return{r:o,s:l}},hexFromSig(t){const e=f=>Number.parseInt(f[0],16)&8?"00"+f:f,n=f=>{const p=f.toString(16);return p.length&1?`0${p}`:p},i=e(n(t.s)),o=e(n(t.r)),a=i.length/2,l=o.length/2,u=n(a),d=n(l);return`30${n(l+a+4)}02${d}${o}02${u}${i}`}},yr=BigInt(0),bn=BigInt(1);BigInt(2);const Kp=BigInt(3);BigInt(4);function z8(t){const e=D8(t),{Fp:n}=e,i=e.toBytes||((w,x,$)=>{const S=x.toAffine();return $i(Uint8Array.from([4]),n.toBytes(S.x),n.toBytes(S.y))}),o=e.fromBytes||(w=>{const x=w.subarray(1),$=n.fromBytes(x.subarray(0,n.BYTES)),S=n.fromBytes(x.subarray(n.BYTES,2*n.BYTES));return{x:$,y:S}});function a(w){const{a:x,b:$}=e,S=n.sqr(w),M=n.mul(S,w);return n.add(n.add(M,n.mul(w,x)),$)}if(!n.eql(n.sqr(e.Gy),a(e.Gx)))throw new Error("bad generator point: equation left != right");function l(w){return typeof w=="bigint"&&yr<w&&w<e.n}function u(w){if(!l(w))throw new Error("Expected valid bigint: 0 < bigint < curve.n")}function d(w){const{allowedPrivateKeyLengths:x,nByteLength:$,wrapPrivateKey:S,n:M}=e;if(x&&typeof w!="bigint"){if(w instanceof Uint8Array&&(w=rs(w)),typeof w!="string"||!x.includes(w.length))throw new Error("Invalid key");w=w.padStart($*2,"0")}let C;try{C=typeof w=="bigint"?w:Qt(It("private key",w,$))}catch{throw new Error(`private key must be ${$} bytes, hex or bigint, not ${typeof w}`)}return S&&(C=Et(C,M)),u(C),C}const f=new Map;function p(w){if(!(w instanceof g))throw new Error("ProjectivePoint expected")}class g{constructor(x,$,S){if(this.px=x,this.py=$,this.pz=S,x==null||!n.isValid(x))throw new Error("x required");if($==null||!n.isValid($))throw new Error("y required");if(S==null||!n.isValid(S))throw new Error("z required")}static fromAffine(x){const{x:$,y:S}=x||{};if(!x||!n.isValid($)||!n.isValid(S))throw new Error("invalid affine point");if(x instanceof g)throw new Error("projective point not allowed");const M=C=>n.eql(C,n.ZERO);return M($)&&M(S)?g.ZERO:new g($,S,n.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(x){const $=n.invertBatch(x.map(S=>S.pz));return x.map((S,M)=>S.toAffine($[M])).map(g.fromAffine)}static fromHex(x){const $=g.fromAffine(o(It("pointHex",x)));return $.assertValidity(),$}static fromPrivateKey(x){return g.BASE.multiply(d(x))}_setWindowSize(x){this._WINDOW_SIZE=x,f.delete(this)}assertValidity(){if(this.is0()){if(e.allowInfinityPoint)return;throw new Error("bad point: ZERO")}const{x,y:$}=this.toAffine();if(!n.isValid(x)||!n.isValid($))throw new Error("bad point: x or y not FE");const S=n.sqr($),M=a(x);if(!n.eql(S,M))throw new Error("bad point: equation left != right");if(!this.isTorsionFree())throw new Error("bad point: not in prime-order subgroup")}hasEvenY(){const{y:x}=this.toAffine();if(n.isOdd)return!n.isOdd(x);throw new Error("Field doesn't support isOdd")}equals(x){p(x);const{px:$,py:S,pz:M}=this,{px:C,py:I,pz:O}=x,A=n.eql(n.mul($,O),n.mul(C,M)),D=n.eql(n.mul(S,O),n.mul(I,M));return A&&D}negate(){return new g(this.px,n.neg(this.py),this.pz)}double(){const{a:x,b:$}=e,S=n.mul($,Kp),{px:M,py:C,pz:I}=this;let O=n.ZERO,A=n.ZERO,D=n.ZERO,j=n.mul(M,M),K=n.mul(C,C),J=n.mul(I,I),ne=n.mul(M,C);return ne=n.add(ne,ne),D=n.mul(M,I),D=n.add(D,D),O=n.mul(x,D),A=n.mul(S,J),A=n.add(O,A),O=n.sub(K,A),A=n.add(K,A),A=n.mul(O,A),O=n.mul(ne,O),D=n.mul(S,D),J=n.mul(x,J),ne=n.sub(j,J),ne=n.mul(x,ne),ne=n.add(ne,D),D=n.add(j,j),j=n.add(D,j),j=n.add(j,J),j=n.mul(j,ne),A=n.add(A,j),J=n.mul(C,I),J=n.add(J,J),j=n.mul(J,ne),O=n.sub(O,j),D=n.mul(J,K),D=n.add(D,D),D=n.add(D,D),new g(O,A,D)}add(x){p(x);const{px:$,py:S,pz:M}=this,{px:C,py:I,pz:O}=x;let A=n.ZERO,D=n.ZERO,j=n.ZERO;const K=e.a,J=n.mul(e.b,Kp);let ne=n.mul($,C),re=n.mul(S,I),se=n.mul(M,O),ee=n.add($,S),N=n.add(C,I);ee=n.mul(ee,N),N=n.add(ne,re),ee=n.sub(ee,N),N=n.add($,M);let Z=n.add(C,O);return N=n.mul(N,Z),Z=n.add(ne,se),N=n.sub(N,Z),Z=n.add(S,M),A=n.add(I,O),Z=n.mul(Z,A),A=n.add(re,se),Z=n.sub(Z,A),j=n.mul(K,N),A=n.mul(J,se),j=n.add(A,j),A=n.sub(re,j),j=n.add(re,j),D=n.mul(A,j),re=n.add(ne,ne),re=n.add(re,ne),se=n.mul(K,se),N=n.mul(J,N),re=n.add(re,se),se=n.sub(ne,se),se=n.mul(K,se),N=n.add(N,se),ne=n.mul(re,N),D=n.add(D,ne),ne=n.mul(Z,N),A=n.mul(ee,A),A=n.sub(A,ne),ne=n.mul(ee,re),j=n.mul(Z,j),j=n.add(j,ne),new g(A,D,j)}subtract(x){return this.add(x.negate())}is0(){return this.equals(g.ZERO)}wNAF(x){return b.wNAFCached(this,f,x,$=>{const S=n.invertBatch($.map(M=>M.pz));return $.map((M,C)=>M.toAffine(S[C])).map(g.fromAffine)})}multiplyUnsafe(x){const $=g.ZERO;if(x===yr)return $;if(u(x),x===bn)return this;const{endo:S}=e;if(!S)return b.unsafeLadder(this,x);let{k1neg:M,k1:C,k2neg:I,k2:O}=S.splitScalar(x),A=$,D=$,j=this;for(;C>yr||O>yr;)C&bn&&(A=A.add(j)),O&bn&&(D=D.add(j)),j=j.double(),C>>=bn,O>>=bn;return M&&(A=A.negate()),I&&(D=D.negate()),D=new g(n.mul(D.px,S.beta),D.py,D.pz),A.add(D)}multiply(x){u(x);let $=x,S,M;const{endo:C}=e;if(C){const{k1neg:I,k1:O,k2neg:A,k2:D}=C.splitScalar($);let{p:j,f:K}=this.wNAF(O),{p:J,f:ne}=this.wNAF(D);j=b.constTimeNegate(I,j),J=b.constTimeNegate(A,J),J=new g(n.mul(J.px,C.beta),J.py,J.pz),S=j.add(J),M=K.add(ne)}else{const{p:I,f:O}=this.wNAF($);S=I,M=O}return g.normalizeZ([S,M])[0]}multiplyAndAddUnsafe(x,$,S){const M=g.BASE,C=(O,A)=>A===yr||A===bn||!O.equals(M)?O.multiplyUnsafe(A):O.multiply(A),I=C(this,$).add(C(x,S));return I.is0()?void 0:I}toAffine(x){const{px:$,py:S,pz:M}=this,C=this.is0();x==null&&(x=C?n.ONE:n.inv(M));const I=n.mul($,x),O=n.mul(S,x),A=n.mul(M,x);if(C)return{x:n.ZERO,y:n.ZERO};if(!n.eql(A,n.ONE))throw new Error("invZ was invalid");return{x:I,y:O}}isTorsionFree(){const{h:x,isTorsionFree:$}=e;if(x===bn)return!0;if($)return $(g,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:x,clearCofactor:$}=e;return x===bn?this:$?$(g,this):this.multiplyUnsafe(e.h)}toRawBytes(x=!0){return this.assertValidity(),i(g,this,x)}toHex(x=!0){return rs(this.toRawBytes(x))}}g.BASE=new g(e.Gx,e.Gy,n.ONE),g.ZERO=new g(n.ZERO,n.ONE,n.ZERO);const v=e.nBitLength,b=N8(g,e.endo?Math.ceil(v/2):v);return{CURVE:e,ProjectivePoint:g,normPrivateKeyToScalar:d,weierstrassEquation:a,isWithinCurveOrder:l}}function H8(t){const e=n1(t);return co(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function W8(t){const e=H8(t),{Fp:n,n:i}=e,o=n.BYTES+1,a=2*n.BYTES+1;function l(N){return yr<N&&N<n.ORDER}function u(N){return Et(N,i)}function d(N){return mu(N,i)}const{ProjectivePoint:f,normPrivateKeyToScalar:p,weierstrassEquation:g,isWithinCurveOrder:v}=z8({...e,toBytes(N,Z,X){const F=Z.toAffine(),H=n.toBytes(F.x),fe=$i;return X?fe(Uint8Array.from([Z.hasEvenY()?2:3]),H):fe(Uint8Array.from([4]),H,n.toBytes(F.y))},fromBytes(N){const Z=N.length,X=N[0],F=N.subarray(1);if(Z===o&&(X===2||X===3)){const H=Qt(F);if(!l(H))throw new Error("Point is not on curve");const fe=g(H);let he=n.sqrt(fe);const _e=(he&bn)===bn;return(X&1)===1!==_e&&(he=n.neg(he)),{x:H,y:he}}else if(Z===a&&X===4){const H=n.fromBytes(F.subarray(0,n.BYTES)),fe=n.fromBytes(F.subarray(n.BYTES,2*n.BYTES));return{x:H,y:fe}}else throw new Error(`Point of length ${Z} was invalid. Expected ${o} compressed bytes or ${a} uncompressed bytes`)}}),b=N=>rs(Wr(N,e.nByteLength));function w(N){const Z=i>>bn;return N>Z}function x(N){return w(N)?u(-N):N}const $=(N,Z,X)=>Qt(N.slice(Z,X));class S{constructor(Z,X,F){this.r=Z,this.s=X,this.recovery=F,this.assertValidity()}static fromCompact(Z){const X=e.nByteLength;return Z=It("compactSignature",Z,X*2),new S($(Z,0,X),$(Z,X,2*X))}static fromDER(Z){const{r:X,s:F}=yi.toSig(It("DER",Z));return new S(X,F)}assertValidity(){if(!v(this.r))throw new Error("r must be 0 < r < CURVE.n");if(!v(this.s))throw new Error("s must be 0 < s < CURVE.n")}addRecoveryBit(Z){return new S(this.r,this.s,Z)}recoverPublicKey(Z){const{r:X,s:F,recovery:H}=this,fe=D(It("msgHash",Z));if(H==null||![0,1,2,3].includes(H))throw new Error("recovery id invalid");const he=H===2||H===3?X+e.n:X;if(he>=n.ORDER)throw new Error("recovery id 2 or 3 invalid");const _e=H&1?"03":"02",Ke=f.fromHex(_e+b(he)),ue=d(he),ce=u(-fe*ue),be=u(F*ue),Y=f.BASE.multiplyAndAddUnsafe(Ke,ce,be);if(!Y)throw new Error("point at infinify");return Y.assertValidity(),Y}hasHighS(){return w(this.s)}normalizeS(){return this.hasHighS()?new S(this.r,u(-this.s),this.recovery):this}toDERRawBytes(){return is(this.toDERHex())}toDERHex(){return yi.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return is(this.toCompactHex())}toCompactHex(){return b(this.r)+b(this.s)}}const M={isValidPrivateKey(N){try{return p(N),!0}catch{return!1}},normPrivateKeyToScalar:p,randomPrivateKey:()=>{const N=e.randomBytes(n.BYTES+8),Z=B8(N,i);return Wr(Z,e.nByteLength)},precompute(N=8,Z=f.BASE){return Z._setWindowSize(N),Z.multiply(BigInt(3)),Z}};function C(N,Z=!0){return f.fromPrivateKey(N).toRawBytes(Z)}function I(N){const Z=N instanceof Uint8Array,X=typeof N=="string",F=(Z||X)&&N.length;return Z?F===o||F===a:X?F===2*o||F===2*a:N instanceof f}function O(N,Z,X=!0){if(I(N))throw new Error("first arg must be private key");if(!I(Z))throw new Error("second arg must be public key");return f.fromHex(Z).multiply(p(N)).toRawBytes(X)}const A=e.bits2int||function(N){const Z=Qt(N),X=N.length*8-e.nBitLength;return X>0?Z>>BigInt(X):Z},D=e.bits2int_modN||function(N){return u(A(N))},j=sd(e.nBitLength);function K(N){if(typeof N!="bigint")throw new Error("bigint expected");if(!(yr<=N&&N<j))throw new Error(`bigint expected < 2^${e.nBitLength}`);return Wr(N,e.nByteLength)}function J(N,Z,X=ne){if(["recovered","canonical"].some(oe=>oe in X))throw new Error("sign() legacy options not supported");const{hash:F,randomBytes:H}=e;let{lowS:fe,prehash:he,extraEntropy:_e}=X;fe==null&&(fe=!0),N=It("msgHash",N),he&&(N=It("prehashed msgHash",F(N)));const Ke=D(N),ue=p(Z),ce=[K(ue),K(Ke)];if(_e!=null){const oe=_e===!0?H(n.BYTES):_e;ce.push(It("extraEntropy",oe,n.BYTES))}const be=$i(...ce),Y=Ke;function ie(oe){const Te=A(oe);if(!v(Te))return;const Ve=d(Te),le=f.BASE.multiply(Te).toAffine(),V=u(le.x);if(V===yr)return;const qe=u(Ve*u(Y+V*ue));if(qe===yr)return;let xt=(le.x===V?0:2)|Number(le.y&bn),Fn=qe;return fe&&w(qe)&&(Fn=x(qe),xt^=1),new S(V,Fn,xt)}return{seed:be,k2sig:ie}}const ne={lowS:e.lowS,prehash:!1},re={lowS:e.lowS,prehash:!1};function se(N,Z,X=ne){const{seed:F,k2sig:H}=J(N,Z,X),fe=e;return t1(fe.hash.outputLen,fe.nByteLength,fe.hmac)(F,H)}f.BASE._setWindowSize(8);function ee(N,Z,X,F=re){const H=N;if(Z=It("msgHash",Z),X=It("publicKey",X),"strict"in F)throw new Error("options.strict was renamed to lowS");const{lowS:fe,prehash:he}=F;let _e,Ke;try{if(typeof H=="string"||H instanceof Uint8Array)try{_e=S.fromDER(H)}catch(le){if(!(le instanceof yi.Err))throw le;_e=S.fromCompact(H)}else if(typeof H=="object"&&typeof H.r=="bigint"&&typeof H.s=="bigint"){const{r:le,s:V}=H;_e=new S(le,V)}else throw new Error("PARSE");Ke=f.fromHex(X)}catch(le){if(le.message==="PARSE")throw new Error("signature must be Signature instance, Uint8Array or hex string");return!1}if(fe&&_e.hasHighS())return!1;he&&(Z=e.hash(Z));const{r:ue,s:ce}=_e,be=D(Z),Y=d(ce),ie=u(be*Y),oe=u(ue*Y),Te=f.BASE.multiplyAndAddUnsafe(Ke,ie,oe)?.toAffine();return Te?u(Te.x)===ue:!1}return{CURVE:e,getPublicKey:C,getSharedSecret:O,sign:se,verify:ee,ProjectivePoint:f,Signature:S,utils:M}}class r1 extends Q0{constructor(e,n){super(),this.finished=!1,this.destroyed=!1,an.hash(e);const i=Ws(n);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,a=new Uint8Array(o);a.set(i.length>o?e.create().update(i).digest():i);for(let l=0;l<a.length;l++)a[l]^=54;this.iHash.update(a),this.oHash=e.create();for(let l=0;l<a.length;l++)a[l]^=106;this.oHash.update(a),a.fill(0)}update(e){return an.exists(this),this.iHash.update(e),this}digestInto(e){an.exists(this),an.bytes(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:n,iHash:i,finished:o,destroyed:a,blockLen:l,outputLen:u}=this;return e=e,e.finished=o,e.destroyed=a,e.blockLen=l,e.outputLen=u,e.oHash=n._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const qs=(t,e,n)=>new r1(t,e).update(n).digest();qs.create=(t,e)=>new r1(t,e);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */function q8(t){return{hash:t,hmac:(e,...n)=>qs(t,e,Ji(...n)),randomBytes:lo}}function Z8(t,e){const n=i=>W8({...t,...q8(i)});return Object.freeze({...n(e),create:n})}/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const hl=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Pa=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),i1=BigInt(1),Ma=BigInt(2),Vp=(t,e)=>(t+e/Ma)/e;function s1(t){const e=hl,n=BigInt(3),i=BigInt(6),o=BigInt(11),a=BigInt(22),l=BigInt(23),u=BigInt(44),d=BigInt(88),f=t*t*t%e,p=f*f*t%e,g=yn(p,n,e)*p%e,v=yn(g,n,e)*p%e,b=yn(v,Ma,e)*f%e,w=yn(b,o,e)*b%e,x=yn(w,a,e)*w%e,$=yn(x,u,e)*x%e,S=yn($,d,e)*$%e,M=yn(S,u,e)*x%e,C=yn(M,n,e)*p%e,I=yn(C,l,e)*w%e,O=yn(I,i,e)*f%e,A=yn(O,Ma,e);if(!yu.eql(yu.sqr(A),t))throw new Error("Cannot find square root");return A}const yu=M8(hl,void 0,void 0,{sqrt:s1}),Ut=Z8({a:BigInt(0),b:BigInt(7),Fp:yu,n:Pa,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=Pa,n=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-i1*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),a=n,l=BigInt("0x100000000000000000000000000000000"),u=Vp(a*t,e),d=Vp(-i*t,e);let f=Et(t-u*n-d*o,e),p=Et(-u*i-d*a,e);const g=f>l,v=p>l;if(g&&(f=e-f),v&&(p=e-p),f>l||p>l)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:g,k1:f,k2neg:v,k2:p}}}},Qn),pl=BigInt(0),o1=t=>typeof t=="bigint"&&pl<t&&t<hl,K8=t=>typeof t=="bigint"&&pl<t&&t<Pa,Gp={};function Ba(t,...e){let n=Gp[t];if(n===void 0){const i=Qn(Uint8Array.from(t,o=>o.charCodeAt(0)));n=$i(i,i),Gp[t]=n}return Qn($i(n,...e))}const ad=t=>t.toRawBytes(!0).slice(1),bu=t=>Wr(t,32),eu=t=>Et(t,hl),Zs=t=>Et(t,Pa),ld=Ut.ProjectivePoint,V8=(t,e,n)=>ld.BASE.multiplyAndAddUnsafe(t,e,n);function _u(t){let e=Ut.utils.normPrivateKeyToScalar(t),n=ld.fromPrivateKey(e);return{scalar:n.hasEvenY()?e:Zs(-e),bytes:ad(n)}}function a1(t){if(!o1(t))throw new Error("bad x: need 0 < x < p");const e=eu(t*t),n=eu(e*t+BigInt(7));let i=s1(n);i%Ma!==pl&&(i=eu(-i));const o=new ld(t,i,i1);return o.assertValidity(),o}function l1(...t){return Zs(Qt(Ba("BIP0340/challenge",...t)))}function G8(t){return _u(t).bytes}function Q8(t,e,n=lo(32)){const i=It("message",t),{bytes:o,scalar:a}=_u(e),l=It("auxRand",n,32),u=bu(a^Qt(Ba("BIP0340/aux",l))),d=Ba("BIP0340/nonce",u,o,i),f=Zs(Qt(d));if(f===pl)throw new Error("sign failed: k is zero");const{bytes:p,scalar:g}=_u(f),v=l1(p,o,i),b=new Uint8Array(64);if(b.set(p,0),b.set(bu(Zs(g+v*a)),32),!c1(b,i,o))throw new Error("sign: Invalid signature produced");return b}function c1(t,e,n){const i=It("signature",t,64),o=It("message",e),a=It("publicKey",n,32);try{const l=a1(Qt(a)),u=Qt(i.subarray(0,32));if(!o1(u))return!1;const d=Qt(i.subarray(32,64));if(!K8(d))return!1;const f=l1(bu(u),ad(l),o),p=V8(l,d,Zs(-f));return!(!p||!p.hasEvenY()||p.toAffine().x!==u)}catch{return!1}}const uo=(()=>({getPublicKey:G8,sign:Q8,verify:c1,utils:{randomPrivateKey:Ut.utils.randomPrivateKey,lift_x:a1,pointToBytes:ad,numberToBytesBE:Wr,bytesToNumberBE:Qt,taggedHash:Ba,mod:Et}}))();/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */function Ii(t){if(!Number.isSafeInteger(t))throw new Error(`Wrong integer: ${t}`)}function Un(...t){const e=(o,a)=>l=>o(a(l)),n=Array.from(t).reverse().reduce((o,a)=>o?e(o,a.encode):a.encode,void 0),i=t.reduce((o,a)=>o?e(o,a.decode):a.decode,void 0);return{encode:n,decode:i}}function nr(t){return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("alphabet.encode input should be an array of numbers");return e.map(n=>{if(Ii(n),n<0||n>=t.length)throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${t.length})`);return t[n]})},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("alphabet.decode input should be array of strings");return e.map(n=>{if(typeof n!="string")throw new Error(`alphabet.decode: not string element=${n}`);const i=t.indexOf(n);if(i===-1)throw new Error(`Unknown letter: "${n}". Allowed: ${t}`);return i})}}}function rr(t=""){if(typeof t!="string")throw new Error("join separator should be string");return{encode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="string")throw new Error("join.encode input should be array of strings");for(let n of e)if(typeof n!="string")throw new Error(`join.encode: non-string input=${n}`);return e.join(t)},decode:e=>{if(typeof e!="string")throw new Error("join.decode input should be string");return e.split(t)}}}function fo(t,e="="){if(Ii(t),typeof e!="string")throw new Error("padding chr should be string");return{encode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let i of n)if(typeof i!="string")throw new Error(`padding.encode: non-string input=${i}`);for(;n.length*t%8;)n.push(e);return n},decode(n){if(!Array.isArray(n)||n.length&&typeof n[0]!="string")throw new Error("padding.encode input should be array of strings");for(let o of n)if(typeof o!="string")throw new Error(`padding.decode: non-string input=${o}`);let i=n.length;if(i*t%8)throw new Error("Invalid padding: string should have whole number of bytes");for(;i>0&&n[i-1]===e;i--)if(!((i-1)*t%8))throw new Error("Invalid padding: string has too much padding");return n.slice(0,i)}}}function u1(t){if(typeof t!="function")throw new Error("normalize fn should be function");return{encode:e=>e,decode:e=>t(e)}}function Qp(t,e,n){if(e<2)throw new Error(`convertRadix: wrong from=${e}, base cannot be less than 2`);if(n<2)throw new Error(`convertRadix: wrong to=${n}, base cannot be less than 2`);if(!Array.isArray(t))throw new Error("convertRadix: data should be array");if(!t.length)return[];let i=0;const o=[],a=Array.from(t);for(a.forEach(l=>{if(Ii(l),l<0||l>=e)throw new Error(`Wrong integer: ${l}`)});;){let l=0,u=!0;for(let d=i;d<a.length;d++){const f=a[d],p=e*l+f;if(!Number.isSafeInteger(p)||e*l/e!==l||p-f!==e*l)throw new Error("convertRadix: carry overflow");if(l=p%n,a[d]=Math.floor(p/n),!Number.isSafeInteger(a[d])||a[d]*n+l!==p)throw new Error("convertRadix: carry overflow");if(u)a[d]?u=!1:i=d;else continue}if(o.push(l),u)break}for(let l=0;l<t.length-1&&t[l]===0;l++)o.push(0);return o.reverse()}const d1=(t,e)=>e?d1(e,t%e):t,ja=(t,e)=>t+(e-d1(t,e));function wu(t,e,n,i){if(!Array.isArray(t))throw new Error("convertRadix2: data should be array");if(e<=0||e>32)throw new Error(`convertRadix2: wrong from=${e}`);if(n<=0||n>32)throw new Error(`convertRadix2: wrong to=${n}`);if(ja(e,n)>32)throw new Error(`convertRadix2: carry overflow from=${e} to=${n} carryBits=${ja(e,n)}`);let o=0,a=0;const l=2**n-1,u=[];for(const d of t){if(Ii(d),d>=2**e)throw new Error(`convertRadix2: invalid data word=${d} from=${e}`);if(o=o<<e|d,a+e>32)throw new Error(`convertRadix2: carry overflow pos=${a} from=${e}`);for(a+=e;a>=n;a-=n)u.push((o>>a-n&l)>>>0);o&=2**a-1}if(o=o<<n-a&l,!i&&a>=e)throw new Error("Excess padding");if(!i&&o)throw new Error(`Non-zero padding: ${o}`);return i&&a>0&&u.push(o>>>0),u}function f1(t){return Ii(t),{encode:e=>{if(!(e instanceof Uint8Array))throw new Error("radix.encode input should be Uint8Array");return Qp(Array.from(e),2**8,t)},decode:e=>{if(!Array.isArray(e)||e.length&&typeof e[0]!="number")throw new Error("radix.decode input should be array of strings");return Uint8Array.from(Qp(e,t,2**8))}}}function kr(t,e=!1){if(Ii(t),t<=0||t>32)throw new Error("radix2: bits should be in (0..32]");if(ja(8,t)>32||ja(t,8)>32)throw new Error("radix2: carry overflow");return{encode:n=>{if(!(n instanceof Uint8Array))throw new Error("radix2.encode input should be Uint8Array");return wu(Array.from(n),8,t,!e)},decode:n=>{if(!Array.isArray(n)||n.length&&typeof n[0]!="number")throw new Error("radix2.decode input should be array of strings");return Uint8Array.from(wu(n,t,8,e))}}}function Yp(t){if(typeof t!="function")throw new Error("unsafeWrapper fn should be function");return function(...e){try{return t.apply(null,e)}catch{}}}function h1(t,e){if(Ii(t),typeof e!="function")throw new Error("checksum fn should be function");return{encode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.encode: input should be Uint8Array");const i=e(n).slice(0,t),o=new Uint8Array(n.length+t);return o.set(n),o.set(i,n.length),o},decode(n){if(!(n instanceof Uint8Array))throw new Error("checksum.decode: input should be Uint8Array");const i=n.slice(0,-t),o=e(i).slice(0,t),a=n.slice(-t);for(let l=0;l<t;l++)if(o[l]!==a[l])throw new Error("Invalid checksum");return i}}}const ha={alphabet:nr,chain:Un,checksum:h1,radix:f1,radix2:kr,join:rr,padding:fo},Y8=Un(kr(4),nr("0123456789ABCDEF"),rr("")),J8=Un(kr(5),nr("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"),fo(5),rr(""));Un(kr(5),nr("0123456789ABCDEFGHIJKLMNOPQRSTUV"),fo(5),rr(""));Un(kr(5),nr("0123456789ABCDEFGHJKMNPQRSTVWXYZ"),rr(""),u1(t=>t.toUpperCase().replace(/O/g,"0").replace(/[IL]/g,"1")));const $r=Un(kr(6),nr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),fo(6),rr("")),X8=Un(kr(6),nr("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),fo(6),rr("")),cd=t=>Un(f1(58),nr(t),rr("")),Na=cd("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");cd("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ");cd("rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz");const Jp=[0,2,3,5,6,7,9,10,11],e7={encode(t){let e="";for(let n=0;n<t.length;n+=8){const i=t.subarray(n,n+8);e+=Na.encode(i).padStart(Jp[i.length],"1")}return e},decode(t){let e=[];for(let n=0;n<t.length;n+=11){const i=t.slice(n,n+11),o=Jp.indexOf(i.length),a=Na.decode(i);for(let l=0;l<a.length-o;l++)if(a[l]!==0)throw new Error("base58xmr: wrong padding");e=e.concat(Array.from(a.slice(a.length-o)))}return Uint8Array.from(e)}},t7=t=>Un(h1(4,e=>t(t(e))),Na),xu=Un(nr("qpzry9x8gf2tvdw0s3jn54khce6mua7l"),rr("")),Xp=[996825010,642813549,513874426,1027748829,705979059];function Fs(t){const e=t>>25;let n=(t&33554431)<<5;for(let i=0;i<Xp.length;i++)(e>>i&1)===1&&(n^=Xp[i]);return n}function eg(t,e,n=1){const i=t.length;let o=1;for(let a=0;a<i;a++){const l=t.charCodeAt(a);if(l<33||l>126)throw new Error(`Invalid prefix (${t})`);o=Fs(o)^l>>5}o=Fs(o);for(let a=0;a<i;a++)o=Fs(o)^t.charCodeAt(a)&31;for(let a of e)o=Fs(o)^a;for(let a=0;a<6;a++)o=Fs(o);return o^=n,xu.encode(wu([o%2**30],30,5,!1))}function p1(t){const e=t==="bech32"?1:734539939,n=kr(5),i=n.decode,o=n.encode,a=Yp(i);function l(p,g,v=90){if(typeof p!="string")throw new Error(`bech32.encode prefix should be string, not ${typeof p}`);if(!Array.isArray(g)||g.length&&typeof g[0]!="number")throw new Error(`bech32.encode words should be array of numbers, not ${typeof g}`);const b=p.length+7+g.length;if(v!==!1&&b>v)throw new TypeError(`Length ${b} exceeds limit ${v}`);return p=p.toLowerCase(),`${p}1${xu.encode(g)}${eg(p,g,e)}`}function u(p,g=90){if(typeof p!="string")throw new Error(`bech32.decode input should be string, not ${typeof p}`);if(p.length<8||g!==!1&&p.length>g)throw new TypeError(`Wrong string length: ${p.length} (${p}). Expected (8..${g})`);const v=p.toLowerCase();if(p!==v&&p!==p.toUpperCase())throw new Error("String must be lowercase or uppercase");p=v;const b=p.lastIndexOf("1");if(b===0||b===-1)throw new Error('Letter "1" must be present between prefix and data only');const w=p.slice(0,b),x=p.slice(b+1);if(x.length<6)throw new Error("Data must be at least 6 characters long");const $=xu.decode(x).slice(0,-6),S=eg(w,$,e);if(!x.endsWith(S))throw new Error(`Invalid checksum in ${p}: expected "${S}"`);return{prefix:w,words:$}}const d=Yp(u);function f(p){const{prefix:g,words:v}=u(p,!1);return{prefix:g,words:v,bytes:i(v)}}return{encode:l,decode:u,decodeToBytes:f,decodeUnsafe:d,fromWords:i,fromWordsUnsafe:a,toWords:o}}const ss=p1("bech32");p1("bech32m");const n7={encode:t=>new TextDecoder().decode(t),decode:t=>new TextEncoder().encode(t)},r7=Un(kr(4),nr("0123456789abcdef"),rr(""),u1(t=>{if(typeof t!="string"||t.length%2)throw new TypeError(`hex.decode: expected string, got ${typeof t} with length ${t.length}`);return t.toLowerCase()})),i7={utf8:n7,hex:r7,base16:Y8,base32:J8,base64:$r,base64url:X8,base58:Na,base58xmr:e7};`${Object.keys(i7).join(", ")}`;const g1=`abandon
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
`);function s7(t,e,n,i){an.hash(t);const o=d8({dkLen:32,asyncTick:10},i),{c:a,dkLen:l,asyncTick:u}=o;if(an.number(a),an.number(l),an.number(u),a<1)throw new Error("PBKDF2: iterations (c) should be >= 1");const d=Ws(e),f=Ws(n),p=new Uint8Array(l),g=qs.create(t,d),v=g._cloneInto().update(f);return{c:a,dkLen:l,asyncTick:u,DK:p,PRF:g,PRFSalt:v}}function o7(t,e,n,i,o){return t.destroy(),e.destroy(),i&&i.destroy(),o.fill(0),n}function a7(t,e,n,i){const{c:o,dkLen:a,DK:l,PRF:u,PRFSalt:d}=s7(t,e,n,i);let f;const p=new Uint8Array(4),g=wi(p),v=new Uint8Array(u.outputLen);for(let b=1,w=0;w<a;b++,w+=u.outputLen){const x=l.subarray(w,w+u.outputLen);g.setInt32(0,b,!1),(f=d._cloneInto(f)).update(p).digestInto(v),x.set(v.subarray(0,x.length));for(let $=1;$<o;$++){u._cloneInto(f).update(v).digestInto(v);for(let S=0;S<x.length;S++)x[S]^=v[S]}}return o7(u,d,l,f,v)}const pa=BigInt(2**32-1),$u=BigInt(32);function v1(t,e=!1){return e?{h:Number(t&pa),l:Number(t>>$u&pa)}:{h:Number(t>>$u&pa)|0,l:Number(t&pa)|0}}function l7(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:a,l}=v1(t[o],e);[n[o],i[o]]=[a,l]}return[n,i]}const c7=(t,e)=>BigInt(t>>>0)<<$u|BigInt(e>>>0),u7=(t,e,n)=>t>>>n,d7=(t,e,n)=>t<<32-n|e>>>n,f7=(t,e,n)=>t>>>n|e<<32-n,h7=(t,e,n)=>t<<32-n|e>>>n,p7=(t,e,n)=>t<<64-n|e>>>n-32,g7=(t,e,n)=>t>>>n-32|e<<64-n,v7=(t,e)=>e,m7=(t,e)=>t,y7=(t,e,n)=>t<<n|e>>>32-n,b7=(t,e,n)=>e<<n|t>>>32-n,_7=(t,e,n)=>e<<n-32|t>>>64-n,w7=(t,e,n)=>t<<n-32|e>>>64-n;function x7(t,e,n,i){const o=(e>>>0)+(i>>>0);return{h:t+n+(o/2**32|0)|0,l:o|0}}const $7=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),E7=(t,e,n,i)=>e+n+i+(t/2**32|0)|0,k7=(t,e,n,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0),C7=(t,e,n,i,o)=>e+n+i+o+(t/2**32|0)|0,S7=(t,e,n,i,o)=>(t>>>0)+(e>>>0)+(n>>>0)+(i>>>0)+(o>>>0),T7=(t,e,n,i,o,a)=>e+n+i+o+a+(t/2**32|0)|0,je={fromBig:v1,split:l7,toBig:c7,shrSH:u7,shrSL:d7,rotrSH:f7,rotrSL:h7,rotrBH:p7,rotrBL:g7,rotr32H:v7,rotr32L:m7,rotlSH:y7,rotlSL:b7,rotlBH:_7,rotlBL:w7,add:x7,add3L:$7,add3H:E7,add4L:k7,add4H:C7,add5H:T7,add5L:S7},[A7,R7]=je.split(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Nr=new Uint32Array(80),Dr=new Uint32Array(80);class gl extends nd{constructor(){super(128,64,16,!1),this.Ah=1779033703,this.Al=-205731576,this.Bh=-1150833019,this.Bl=-2067093701,this.Ch=1013904242,this.Cl=-23791573,this.Dh=-1521486534,this.Dl=1595750129,this.Eh=1359893119,this.El=-1377402159,this.Fh=-1694144372,this.Fl=725511199,this.Gh=528734635,this.Gl=-79577749,this.Hh=1541459225,this.Hl=327033209}get(){const{Ah:e,Al:n,Bh:i,Bl:o,Ch:a,Cl:l,Dh:u,Dl:d,Eh:f,El:p,Fh:g,Fl:v,Gh:b,Gl:w,Hh:x,Hl:$}=this;return[e,n,i,o,a,l,u,d,f,p,g,v,b,w,x,$]}set(e,n,i,o,a,l,u,d,f,p,g,v,b,w,x,$){this.Ah=e|0,this.Al=n|0,this.Bh=i|0,this.Bl=o|0,this.Ch=a|0,this.Cl=l|0,this.Dh=u|0,this.Dl=d|0,this.Eh=f|0,this.El=p|0,this.Fh=g|0,this.Fl=v|0,this.Gh=b|0,this.Gl=w|0,this.Hh=x|0,this.Hl=$|0}process(e,n){for(let C=0;C<16;C++,n+=4)Nr[C]=e.getUint32(n),Dr[C]=e.getUint32(n+=4);for(let C=16;C<80;C++){const I=Nr[C-15]|0,O=Dr[C-15]|0,A=je.rotrSH(I,O,1)^je.rotrSH(I,O,8)^je.shrSH(I,O,7),D=je.rotrSL(I,O,1)^je.rotrSL(I,O,8)^je.shrSL(I,O,7),j=Nr[C-2]|0,K=Dr[C-2]|0,J=je.rotrSH(j,K,19)^je.rotrBH(j,K,61)^je.shrSH(j,K,6),ne=je.rotrSL(j,K,19)^je.rotrBL(j,K,61)^je.shrSL(j,K,6),re=je.add4L(D,ne,Dr[C-7],Dr[C-16]),se=je.add4H(re,A,J,Nr[C-7],Nr[C-16]);Nr[C]=se|0,Dr[C]=re|0}let{Ah:i,Al:o,Bh:a,Bl:l,Ch:u,Cl:d,Dh:f,Dl:p,Eh:g,El:v,Fh:b,Fl:w,Gh:x,Gl:$,Hh:S,Hl:M}=this;for(let C=0;C<80;C++){const I=je.rotrSH(g,v,14)^je.rotrSH(g,v,18)^je.rotrBH(g,v,41),O=je.rotrSL(g,v,14)^je.rotrSL(g,v,18)^je.rotrBL(g,v,41),A=g&b^~g&x,D=v&w^~v&$,j=je.add5L(M,O,D,R7[C],Dr[C]),K=je.add5H(j,S,I,A,A7[C],Nr[C]),J=j|0,ne=je.rotrSH(i,o,28)^je.rotrBH(i,o,34)^je.rotrBH(i,o,39),re=je.rotrSL(i,o,28)^je.rotrBL(i,o,34)^je.rotrBL(i,o,39),se=i&a^i&u^a&u,ee=o&l^o&d^l&d;S=x|0,M=$|0,x=b|0,$=w|0,b=g|0,w=v|0,{h:g,l:v}=je.add(f|0,p|0,K|0,J|0),f=u|0,p=d|0,u=a|0,d=l|0,a=i|0,l=o|0;const N=je.add3L(J,re,ee);i=je.add3H(N,K,ne,se),o=N|0}({h:i,l:o}=je.add(this.Ah|0,this.Al|0,i|0,o|0)),{h:a,l}=je.add(this.Bh|0,this.Bl|0,a|0,l|0),{h:u,l:d}=je.add(this.Ch|0,this.Cl|0,u|0,d|0),{h:f,l:p}=je.add(this.Dh|0,this.Dl|0,f|0,p|0),{h:g,l:v}=je.add(this.Eh|0,this.El|0,g|0,v|0),{h:b,l:w}=je.add(this.Fh|0,this.Fl|0,b|0,w|0),{h:x,l:$}=je.add(this.Gh|0,this.Gl|0,x|0,$|0),{h:S,l:M}=je.add(this.Hh|0,this.Hl|0,S|0,M|0),this.set(i,o,a,l,u,d,f,p,g,v,b,w,x,$,S,M)}roundClean(){Nr.fill(0),Dr.fill(0)}destroy(){this.buffer.fill(0),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}}class I7 extends gl{constructor(){super(),this.Ah=-1942145080,this.Al=424955298,this.Bh=1944164710,this.Bl=-1982016298,this.Ch=502970286,this.Cl=855612546,this.Dh=1738396948,this.Dl=1479516111,this.Eh=258812777,this.El=2077511080,this.Fh=2011393907,this.Fl=79989058,this.Gh=1067287976,this.Gl=1780299464,this.Hh=286451373,this.Hl=-1848208735,this.outputLen=28}}class O7 extends gl{constructor(){super(),this.Ah=573645204,this.Al=-64227540,this.Bh=-1621794909,this.Bl=-934517566,this.Ch=596883563,this.Cl=1867755857,this.Dh=-1774684391,this.Dl=1497426621,this.Eh=-1775747358,this.El=-1467023389,this.Fh=-1101128155,this.Fl=1401305490,this.Gh=721525244,this.Gl=746961066,this.Hh=246885852,this.Hl=-2117784414,this.outputLen=32}}class L7 extends gl{constructor(){super(),this.Ah=-876896931,this.Al=-1056596264,this.Bh=1654270250,this.Bl=914150663,this.Ch=-1856437926,this.Cl=812702999,this.Dh=355462360,this.Dl=-150054599,this.Eh=1731405415,this.El=-4191439,this.Fh=-1900787065,this.Fl=1750603025,this.Gh=-619958771,this.Gl=1694076839,this.Hh=1203062813,this.Hl=-1090891868,this.outputLen=48}}const Eu=Ri(()=>new gl);Ri(()=>new I7);Ri(()=>new O7);Ri(()=>new L7);const P7=t=>t[0]==="あいこくしん";function m1(t){if(typeof t!="string")throw new TypeError(`Invalid mnemonic type: ${typeof t}`);return t.normalize("NFKD")}function y1(t){const e=m1(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function b1(t){an.bytes(t,16,20,24,28,32)}function M7(t,e=128){if(an.number(e),e%32!==0||e>256)throw new TypeError("Invalid entropy");return N7(lo(e/8),t)}const B7=t=>{const e=8-t.length/4;return new Uint8Array([Qn(t)[0]>>e<<e])};function _1(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new Error("Worlist: expected array of 2048 strings");return t.forEach(e=>{if(typeof e!="string")throw new Error(`Wordlist: non-string element: ${e}`)}),ha.chain(ha.checksum(1,B7),ha.radix2(11,!0),ha.alphabet(t))}function j7(t,e){const{words:n}=y1(t),i=_1(e).decode(n);return b1(i),i}function N7(t,e){return b1(t),_1(e).encode(t).join(P7(e)?"　":" ")}function D7(t,e){try{j7(t,e)}catch{return!1}return!0}const U7=t=>m1(`mnemonic${t}`);function F7(t,e=""){return a7(Eu,y1(t).nfkd,U7(e),{c:2048,dkLen:64})}const z7=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),w1=Uint8Array.from({length:16},(t,e)=>e),H7=w1.map(t=>(9*t+5)%16);let ud=[w1],dd=[H7];for(let t=0;t<4;t++)for(let e of[ud,dd])e.push(e[t].map(n=>z7[n]));const x1=[[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8],[12,13,11,15,6,9,9,7,12,15,11,13,7,8,7,7],[13,15,14,11,7,7,6,8,13,14,13,12,5,5,6,9],[14,11,12,14,8,6,5,5,15,12,15,14,9,9,8,6],[15,12,13,13,9,5,8,6,14,11,12,11,8,6,5,5]].map(t=>new Uint8Array(t)),W7=ud.map((t,e)=>t.map(n=>x1[e][n])),q7=dd.map((t,e)=>t.map(n=>x1[e][n])),Z7=new Uint32Array([0,1518500249,1859775393,2400959708,2840853838]),K7=new Uint32Array([1352829926,1548603684,1836072691,2053994217,0]),ga=(t,e)=>t<<e|t>>>32-e;function tg(t,e,n,i){return t===0?e^n^i:t===1?e&n|~e&i:t===2?(e|~n)^i:t===3?e&i|n&~i:e^(n|~i)}const va=new Uint32Array(16);class V7 extends nd{constructor(){super(64,20,8,!0),this.h0=1732584193,this.h1=-271733879,this.h2=-1732584194,this.h3=271733878,this.h4=-1009589776}get(){const{h0:e,h1:n,h2:i,h3:o,h4:a}=this;return[e,n,i,o,a]}set(e,n,i,o,a){this.h0=e|0,this.h1=n|0,this.h2=i|0,this.h3=o|0,this.h4=a|0}process(e,n){for(let b=0;b<16;b++,n+=4)va[b]=e.getUint32(n,!0);let i=this.h0|0,o=i,a=this.h1|0,l=a,u=this.h2|0,d=u,f=this.h3|0,p=f,g=this.h4|0,v=g;for(let b=0;b<5;b++){const w=4-b,x=Z7[b],$=K7[b],S=ud[b],M=dd[b],C=W7[b],I=q7[b];for(let O=0;O<16;O++){const A=ga(i+tg(b,a,u,f)+va[S[O]]+x,C[O])+g|0;i=g,g=f,f=ga(u,10)|0,u=a,a=A}for(let O=0;O<16;O++){const A=ga(o+tg(w,l,d,p)+va[M[O]]+$,I[O])+v|0;o=v,v=p,p=ga(d,10)|0,d=l,l=A}}this.set(this.h1+u+p|0,this.h2+f+v|0,this.h3+g+o|0,this.h4+i+l|0,this.h0+a+d|0)}roundClean(){va.fill(0)}destroy(){this.destroyed=!0,this.buffer.fill(0),this.set(0,0,0,0,0)}}const G7=Ri(()=>new V7),ma=Ut.ProjectivePoint,tu=t7(Qn);function ng(t){return BigInt(`0x${on(t)}`)}function Q7(t){return ns(t.toString(16).padStart(64,"0"))}const Y7=G0("Bitcoin seed"),nu={private:76066276,public:76067358},ru=2147483648,J7=t=>G7(Qn(t)),X7=t=>wi(t).getUint32(0,!1),ya=t=>{if(!Number.isSafeInteger(t)||t<0||t>2**32-1)throw new Error(`Invalid number=${t}. Should be from 0 to 2 ** 32 - 1`);const e=new Uint8Array(4);return wi(e).setUint32(0,t,!1),e};class mi{get fingerprint(){if(!this.pubHash)throw new Error("No publicKey set!");return X7(this.pubHash)}get identifier(){return this.pubHash}get pubKeyHash(){return this.pubHash}get privateKey(){return this.privKeyBytes||null}get publicKey(){return this.pubKey||null}get privateExtendedKey(){const e=this.privateKey;if(!e)throw new Error("No private key");return tu.encode(this.serialize(this.versions.private,Ji(new Uint8Array([0]),e)))}get publicExtendedKey(){if(!this.pubKey)throw new Error("No public key");return tu.encode(this.serialize(this.versions.public,this.pubKey))}static fromMasterSeed(e,n=nu){if(gi(e),8*e.length<128||8*e.length>512)throw new Error(`HDKey: wrong seed length=${e.length}. Should be between 128 and 512 bits; 256 bits is advised)`);const i=qs(Eu,Y7,e);return new mi({versions:n,chainCode:i.slice(32),privateKey:i.slice(0,32)})}static fromExtendedKey(e,n=nu){const i=tu.decode(e),o=wi(i),a=o.getUint32(0,!1),l={versions:n,depth:i[4],parentFingerprint:o.getUint32(5,!1),index:o.getUint32(9,!1),chainCode:i.slice(13,45)},u=i.slice(45),d=u[0]===0;if(a!==n[d?"private":"public"])throw new Error("Version mismatch");return d?new mi({...l,privateKey:u.slice(1)}):new mi({...l,publicKey:u})}static fromJSON(e){return mi.fromExtendedKey(e.xpriv)}constructor(e){if(this.depth=0,this.index=0,this.chainCode=null,this.parentFingerprint=0,!e||typeof e!="object")throw new Error("HDKey.constructor must not be called directly");if(this.versions=e.versions||nu,this.depth=e.depth||0,this.chainCode=e.chainCode,this.index=e.index||0,this.parentFingerprint=e.parentFingerprint||0,!this.depth&&(this.parentFingerprint||this.index))throw new Error("HDKey: zero depth with non-zero index/parent fingerprint");if(e.publicKey&&e.privateKey)throw new Error("HDKey: publicKey and privateKey at same time.");if(e.privateKey){if(!Ut.utils.isValidPrivateKey(e.privateKey))throw new Error("Invalid private key");this.privKey=typeof e.privateKey=="bigint"?e.privateKey:ng(e.privateKey),this.privKeyBytes=Q7(this.privKey),this.pubKey=Ut.getPublicKey(e.privateKey,!0)}else if(e.publicKey)this.pubKey=ma.fromHex(e.publicKey).toRawBytes(!0);else throw new Error("HDKey: no public or private key provided");this.pubHash=J7(this.pubKey)}derive(e){if(!/^[mM]'?/.test(e))throw new Error('Path must start with "m" or "M"');if(/^[mM]'?$/.test(e))return this;const n=e.replace(/^[mM]'?\//,"").split("/");let i=this;for(const o of n){const a=/^(\d+)('?)$/.exec(o);if(!a||a.length!==3)throw new Error(`Invalid child index: ${o}`);let l=+a[1];if(!Number.isSafeInteger(l)||l>=ru)throw new Error("Invalid index");a[2]==="'"&&(l+=ru),i=i.deriveChild(l)}return i}deriveChild(e){if(!this.pubKey||!this.chainCode)throw new Error("No publicKey or chainCode set");let n=ya(e);if(e>=ru){const u=this.privateKey;if(!u)throw new Error("Could not derive hardened child key");n=Ji(new Uint8Array([0]),u,n)}else n=Ji(this.pubKey,n);const i=qs(Eu,this.chainCode,n),o=ng(i.slice(0,32)),a=i.slice(32);if(!Ut.utils.isValidPrivateKey(o))throw new Error("Tweak bigger than curve order");const l={versions:this.versions,chainCode:a,depth:this.depth+1,parentFingerprint:this.fingerprint,index:e};try{if(this.privateKey){const u=Et(this.privKey+o,Ut.CURVE.n);if(!Ut.utils.isValidPrivateKey(u))throw new Error("The tweak was out of range or the resulted private key is invalid");l.privateKey=u}else{const u=ma.fromHex(this.pubKey).add(ma.fromPrivateKey(o));if(u.equals(ma.ZERO))throw new Error("The tweak was equal to negative P, which made the result key invalid");l.publicKey=u.toRawBytes(!0)}return new mi(l)}catch{return this.deriveChild(e+1)}}sign(e){if(!this.privateKey)throw new Error("No privateKey set!");return gi(e,32),Ut.sign(e,this.privKey).toCompactRawBytes()}verify(e,n){if(gi(e,32),gi(n,64),!this.publicKey)throw new Error("No publicKey set!");let i;try{i=Ut.Signature.fromCompact(n)}catch{return!1}return Ut.verify(i,e,this.publicKey)}wipePrivateData(){return this.privKey=void 0,this.privKeyBytes&&(this.privKeyBytes.fill(0),this.privKeyBytes=void 0),this}toJSON(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}}serialize(e,n){if(!this.chainCode)throw new Error("No chainCode set");return gi(n,33),Ji(ya(e),new Uint8Array([this.depth]),ya(this.parentFingerprint),ya(this.index),this.chainCode,n)}}/*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) */const eE=t=>t instanceof Uint8Array,Kn=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),tE=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!tE)throw new Error("Non little-endian hardware is not supported");function fd(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function ku(t){if(typeof t=="string"&&(t=fd(t)),!eE(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}const nE=t=>Object.prototype.toString.call(t)==="[object Object]"&&t.constructor===Object;function rE(t,e){if(e!==void 0&&(typeof e!="object"||!nE(e)))throw new Error("options must be object or undefined");return Object.assign(t,e)}function iE(t,e){if(!(t instanceof Uint8Array))throw new Error("Uint8Array expected");if(typeof e=="number"&&t.length!==e)throw new Error(`Uint8Array length ${e} expected`)}function Cu(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function sE(t){if(typeof t!="boolean")throw new Error(`Expected boolean, not ${t}`)}function $1(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function oE(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("hash must be wrapped by utils.wrapConstructor");Cu(t.outputLen),Cu(t.blockLen)}function aE(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function lE(t,e){$1(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const sn={number:Cu,bool:sE,bytes:$1,hash:oE,exists:aE,output:lE},At=(t,e)=>t[e++]&255|(t[e++]&255)<<8;class cE{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=ku(e),iE(e,32);const n=At(e,0),i=At(e,2),o=At(e,4),a=At(e,6),l=At(e,8),u=At(e,10),d=At(e,12),f=At(e,14);this.r[0]=n&8191,this.r[1]=(n>>>13|i<<3)&8191,this.r[2]=(i>>>10|o<<6)&7939,this.r[3]=(o>>>7|a<<9)&8191,this.r[4]=(a>>>4|l<<12)&255,this.r[5]=l>>>1&8190,this.r[6]=(l>>>14|u<<2)&8191,this.r[7]=(u>>>11|d<<5)&8065,this.r[8]=(d>>>8|f<<8)&8191,this.r[9]=f>>>5&127;for(let p=0;p<8;p++)this.pad[p]=At(e,16+2*p)}process(e,n,i=!1){const o=i?0:2048,{h:a,r:l}=this,u=l[0],d=l[1],f=l[2],p=l[3],g=l[4],v=l[5],b=l[6],w=l[7],x=l[8],$=l[9],S=At(e,n+0),M=At(e,n+2),C=At(e,n+4),I=At(e,n+6),O=At(e,n+8),A=At(e,n+10),D=At(e,n+12),j=At(e,n+14);let K=a[0]+(S&8191),J=a[1]+((S>>>13|M<<3)&8191),ne=a[2]+((M>>>10|C<<6)&8191),re=a[3]+((C>>>7|I<<9)&8191),se=a[4]+((I>>>4|O<<12)&8191),ee=a[5]+(O>>>1&8191),N=a[6]+((O>>>14|A<<2)&8191),Z=a[7]+((A>>>11|D<<5)&8191),X=a[8]+((D>>>8|j<<8)&8191),F=a[9]+(j>>>5|o),H=0,fe=H+K*u+J*(5*$)+ne*(5*x)+re*(5*w)+se*(5*b);H=fe>>>13,fe&=8191,fe+=ee*(5*v)+N*(5*g)+Z*(5*p)+X*(5*f)+F*(5*d),H+=fe>>>13,fe&=8191;let he=H+K*d+J*u+ne*(5*$)+re*(5*x)+se*(5*w);H=he>>>13,he&=8191,he+=ee*(5*b)+N*(5*v)+Z*(5*g)+X*(5*p)+F*(5*f),H+=he>>>13,he&=8191;let _e=H+K*f+J*d+ne*u+re*(5*$)+se*(5*x);H=_e>>>13,_e&=8191,_e+=ee*(5*w)+N*(5*b)+Z*(5*v)+X*(5*g)+F*(5*p),H+=_e>>>13,_e&=8191;let Ke=H+K*p+J*f+ne*d+re*u+se*(5*$);H=Ke>>>13,Ke&=8191,Ke+=ee*(5*x)+N*(5*w)+Z*(5*b)+X*(5*v)+F*(5*g),H+=Ke>>>13,Ke&=8191;let ue=H+K*g+J*p+ne*f+re*d+se*u;H=ue>>>13,ue&=8191,ue+=ee*(5*$)+N*(5*x)+Z*(5*w)+X*(5*b)+F*(5*v),H+=ue>>>13,ue&=8191;let ce=H+K*v+J*g+ne*p+re*f+se*d;H=ce>>>13,ce&=8191,ce+=ee*u+N*(5*$)+Z*(5*x)+X*(5*w)+F*(5*b),H+=ce>>>13,ce&=8191;let be=H+K*b+J*v+ne*g+re*p+se*f;H=be>>>13,be&=8191,be+=ee*d+N*u+Z*(5*$)+X*(5*x)+F*(5*w),H+=be>>>13,be&=8191;let Y=H+K*w+J*b+ne*v+re*g+se*p;H=Y>>>13,Y&=8191,Y+=ee*f+N*d+Z*u+X*(5*$)+F*(5*x),H+=Y>>>13,Y&=8191;let ie=H+K*x+J*w+ne*b+re*v+se*g;H=ie>>>13,ie&=8191,ie+=ee*p+N*f+Z*d+X*u+F*(5*$),H+=ie>>>13,ie&=8191;let oe=H+K*$+J*x+ne*w+re*b+se*v;H=oe>>>13,oe&=8191,oe+=ee*g+N*p+Z*f+X*d+F*u,H+=oe>>>13,oe&=8191,H=(H<<2)+H|0,H=H+fe|0,fe=H&8191,H=H>>>13,he+=H,a[0]=fe,a[1]=he,a[2]=_e,a[3]=Ke,a[4]=ue,a[5]=ce,a[6]=be,a[7]=Y,a[8]=ie,a[9]=oe}finalize(){const{h:e,pad:n}=this,i=new Uint16Array(10);let o=e[1]>>>13;e[1]&=8191;for(let u=2;u<10;u++)e[u]+=o,o=e[u]>>>13,e[u]&=8191;e[0]+=o*5,o=e[0]>>>13,e[0]&=8191,e[1]+=o,o=e[1]>>>13,e[1]&=8191,e[2]+=o,i[0]=e[0]+5,o=i[0]>>>13,i[0]&=8191;for(let u=1;u<10;u++)i[u]=e[u]+o,o=i[u]>>>13,i[u]&=8191;i[9]-=8192;let a=(o^1)-1;for(let u=0;u<10;u++)i[u]&=a;a=~a;for(let u=0;u<10;u++)e[u]=e[u]&a|i[u];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let l=e[0]+n[0];e[0]=l&65535;for(let u=1;u<8;u++)l=(e[u]+n[u]|0)+(l>>>16)|0,e[u]=l&65535}update(e){sn.exists(this);const{buffer:n,blockLen:i}=this;e=ku(e);const o=e.length;for(let a=0;a<o;){const l=Math.min(i-this.pos,o-a);if(l===i){for(;i<=o-a;a+=i)this.process(e,a);continue}n.set(e.subarray(a,a+l),this.pos),this.pos+=l,a+=l,this.pos===i&&(this.process(n,0,!1),this.pos=0)}return this}destroy(){this.h.fill(0),this.r.fill(0),this.buffer.fill(0),this.pad.fill(0)}digestInto(e){sn.exists(this),sn.output(e,this),this.finished=!0;const{buffer:n,h:i}=this;let{pos:o}=this;if(o){for(n[o++]=1;o<16;o++)n[o]=0;this.process(n,0,!0)}this.finalize();let a=0;for(let l=0;l<8;l++)e[a++]=i[l]>>>0,e[a++]=i[l]>>>8;return e}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}}function uE(t){const e=(i,o)=>t(o).update(ku(i)).digest(),n=t(new Uint8Array(32));return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=i=>t(i),e}uE(t=>new cE(t));const dE=fd("expand 16-byte k"),fE=fd("expand 32-byte k"),hE=Kn(dE),pE=Kn(fE),rg=t=>!(t.byteOffset%4),gE=t=>{const{core:e,rounds:n,counterRight:i,counterLen:o,allow128bitKeys:a,extendNonceFn:l,blockLen:u}=rE({rounds:20,counterRight:!1,counterLen:8,allow128bitKeys:!0,blockLen:64},t);sn.number(o),sn.number(n),sn.number(u),sn.bool(i),sn.bool(a);const d=u/4;if(u%4!==0)throw new Error("Salsa/ChaCha: blockLen must be aligned to 4 bytes");return(f,p,g,v,b=0)=>{if(sn.bytes(f),sn.bytes(p),sn.bytes(g),v||(v=new Uint8Array(g.length)),sn.bytes(v),sn.number(b),b<0||b>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");if(v.length<g.length)throw new Error(`Salsa/ChaCha: output (${v.length}) is shorter than data (${g.length})`);const w=[];let x,$;if(f.length===32)x=f,$=pE;else if(f.length===16&&a)x=new Uint8Array(32),x.set(f),x.set(f,16),$=hE,w.push(x);else throw new Error(`Salsa/ChaCha: invalid 32-byte key, got length=${f.length}`);if(l){if(p.length<=16)throw new Error("Salsa/ChaCha: extended nonce must be bigger than 16 bytes");x=l($,x,p.subarray(0,16),new Uint8Array(32)),w.push(x),p=p.subarray(16)}const S=16-o;if(p.length!==S)throw new Error(`Salsa/ChaCha: nonce must be ${S} or 16 bytes`);if(S!==12){const K=new Uint8Array(12);K.set(p,i?0:12-p.length),w.push(p=K)}const M=new Uint8Array(u),C=Kn(M),I=Kn(x),O=Kn(p),A=rg(g)&&Kn(g),D=rg(v)&&Kn(v);w.push(C);const j=g.length;for(let K=0,J=b;K<j;J++){if(e($,I,O,C,J,n),J>=2**32-1)throw new Error("Salsa/ChaCha: counter overflow");const ne=Math.min(u,j-K);if(ne===u&&D&&A){const re=K/4;if(K%4!==0)throw new Error("Salsa/ChaCha: invalid block position");for(let se=0;se<d;se++)D[re+se]=A[re+se]^C[se];K+=u;continue}for(let re=0;re<ne;re++)v[K+re]=g[K+re]^M[re];K+=ne}for(let K=0;K<w.length;K++)w[K].fill(0);return v}},ve=(t,e)=>t<<e|t>>>32-e;function vE(t,e,n,i,o,a=20){let l=t[0],u=t[1],d=t[2],f=t[3],p=e[0],g=e[1],v=e[2],b=e[3],w=e[4],x=e[5],$=e[6],S=e[7],M=o,C=n[0],I=n[1],O=n[2],A=l,D=u,j=d,K=f,J=p,ne=g,re=v,se=b,ee=w,N=x,Z=$,X=S,F=M,H=C,fe=I,he=O;for(let Ke=0;Ke<a;Ke+=2)A=A+J|0,F=ve(F^A,16),ee=ee+F|0,J=ve(J^ee,12),A=A+J|0,F=ve(F^A,8),ee=ee+F|0,J=ve(J^ee,7),D=D+ne|0,H=ve(H^D,16),N=N+H|0,ne=ve(ne^N,12),D=D+ne|0,H=ve(H^D,8),N=N+H|0,ne=ve(ne^N,7),j=j+re|0,fe=ve(fe^j,16),Z=Z+fe|0,re=ve(re^Z,12),j=j+re|0,fe=ve(fe^j,8),Z=Z+fe|0,re=ve(re^Z,7),K=K+se|0,he=ve(he^K,16),X=X+he|0,se=ve(se^X,12),K=K+se|0,he=ve(he^K,8),X=X+he|0,se=ve(se^X,7),A=A+ne|0,he=ve(he^A,16),Z=Z+he|0,ne=ve(ne^Z,12),A=A+ne|0,he=ve(he^A,8),Z=Z+he|0,ne=ve(ne^Z,7),D=D+re|0,F=ve(F^D,16),X=X+F|0,re=ve(re^X,12),D=D+re|0,F=ve(F^D,8),X=X+F|0,re=ve(re^X,7),j=j+se|0,H=ve(H^j,16),ee=ee+H|0,se=ve(se^ee,12),j=j+se|0,H=ve(H^j,8),ee=ee+H|0,se=ve(se^ee,7),K=K+J|0,fe=ve(fe^K,16),N=N+fe|0,J=ve(J^N,12),K=K+J|0,fe=ve(fe^K,8),N=N+fe|0,J=ve(J^N,7);let _e=0;i[_e++]=l+A|0,i[_e++]=u+D|0,i[_e++]=d+j|0,i[_e++]=f+K|0,i[_e++]=p+J|0,i[_e++]=g+ne|0,i[_e++]=v+re|0,i[_e++]=b+se|0,i[_e++]=w+ee|0,i[_e++]=x+N|0,i[_e++]=$+Z|0,i[_e++]=S+X|0,i[_e++]=M+F|0,i[_e++]=C+H|0,i[_e++]=I+fe|0,i[_e++]=O+he|0}function mE(t,e,n,i){const o=Kn(e),a=Kn(n),l=Kn(i);let u=t[0],d=t[1],f=t[2],p=t[3],g=o[0],v=o[1],b=o[2],w=o[3],x=o[4],$=o[5],S=o[6],M=o[7],C=a[0],I=a[1],O=a[2],A=a[3];for(let D=0;D<20;D+=2)u=u+g|0,C=ve(C^u,16),x=x+C|0,g=ve(g^x,12),u=u+g|0,C=ve(C^u,8),x=x+C|0,g=ve(g^x,7),d=d+v|0,I=ve(I^d,16),$=$+I|0,v=ve(v^$,12),d=d+v|0,I=ve(I^d,8),$=$+I|0,v=ve(v^$,7),f=f+b|0,O=ve(O^f,16),S=S+O|0,b=ve(b^S,12),f=f+b|0,O=ve(O^f,8),S=S+O|0,b=ve(b^S,7),p=p+w|0,A=ve(A^p,16),M=M+A|0,w=ve(w^M,12),p=p+w|0,A=ve(A^p,8),M=M+A|0,w=ve(w^M,7),u=u+v|0,A=ve(A^u,16),S=S+A|0,v=ve(v^S,12),u=u+v|0,A=ve(A^u,8),S=S+A|0,v=ve(v^S,7),d=d+b|0,C=ve(C^d,16),M=M+C|0,b=ve(b^M,12),d=d+b|0,C=ve(C^d,8),M=M+C|0,b=ve(b^M,7),f=f+w|0,I=ve(I^f,16),x=x+I|0,w=ve(w^x,12),f=f+w|0,I=ve(I^f,8),x=x+I|0,w=ve(w^x,7),p=p+g|0,O=ve(O^p,16),$=$+O|0,g=ve(g^$,12),p=p+g|0,O=ve(O^p,8),$=$+O|0,g=ve(g^$,7);return l[0]=u,l[1]=d,l[2]=f,l[3]=p,l[4]=C,l[5]=I,l[6]=O,l[7]=A,i}const E1=gE({core:vE,counterRight:!1,counterLen:8,extendNonceFn:mE,allow128bitKeys:!1});var yE=Object.defineProperty,yt=(t,e)=>{for(var n in e)yE(t,n,{get:e[n],enumerable:!0})};function k1(t){return on(uo.getPublicKey(t))}var hd={};yt(hd,{MessageNode:()=>C1,MessageQueue:()=>S1,insertEventIntoAscendingList:()=>_E,insertEventIntoDescendingList:()=>bE,normalizeURL:()=>Su,utf8Decoder:()=>Vn,utf8Encoder:()=>wn});var Vn=new TextDecoder("utf-8"),wn=new TextEncoder;function Su(t){let e=new URL(t);return e.pathname=e.pathname.replace(/\/+/g,"/"),e.pathname.endsWith("/")&&(e.pathname=e.pathname.slice(0,-1)),(e.port==="80"&&e.protocol==="ws:"||e.port==="443"&&e.protocol==="wss:")&&(e.port=""),e.searchParams.sort(),e.hash="",e.toString()}function bE(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at<t[i].created_at)a=i+1;else if(e.created_at>=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at>e.created_at)n=o;else if(t[o].created_at<e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}function _E(t,e){let n=0,i=t.length-1,o,a=n;if(i<0)a=0;else if(e.created_at>t[i].created_at)a=i+1;else if(e.created_at<=t[n].created_at)a=n;else for(;;){if(i<=n+1){a=i;break}if(o=Math.floor(n+(i-n)/2),t[o].created_at<e.created_at)n=o;else if(t[o].created_at>e.created_at)i=o;else{a=o;break}}return t[a]?.id!==e.id?[...t.slice(0,a),e,...t.slice(a)]:t}var C1=class{_value;_next;get value(){return this._value}set value(t){this._value=t}get next(){return this._next}set next(t){this._next=t}constructor(t){this._value=t,this._next=null}},S1=class{_first;_last;get first(){return this._first}set first(t){this._first=t}get last(){return this._last}set last(t){this._last=t}_size;get size(){return this._size}set size(t){this._size=t}constructor(){this._first=null,this._last=null,this._size=0}enqueue(t){const e=new C1(t);return this._size===0||!this._last?(this._first=e,this._last=e):(this._last.next=e,this._last=e),this._size++,!0}dequeue(){if(this._size===0||!this._first)return null;let t=this._first;return this._first=t.next,t.next=null,this._size--,t.value}},Qi=Symbol("verified"),lt=(t=>(t[t.Metadata=0]="Metadata",t[t.Text=1]="Text",t[t.RecommendRelay=2]="RecommendRelay",t[t.Contacts=3]="Contacts",t[t.EncryptedDirectMessage=4]="EncryptedDirectMessage",t[t.EventDeletion=5]="EventDeletion",t[t.Repost=6]="Repost",t[t.Reaction=7]="Reaction",t[t.BadgeAward=8]="BadgeAward",t[t.ChannelCreation=40]="ChannelCreation",t[t.ChannelMetadata=41]="ChannelMetadata",t[t.ChannelMessage=42]="ChannelMessage",t[t.ChannelHideMessage=43]="ChannelHideMessage",t[t.ChannelMuteUser=44]="ChannelMuteUser",t[t.Blank=255]="Blank",t[t.Report=1984]="Report",t[t.ZapRequest=9734]="ZapRequest",t[t.Zap=9735]="Zap",t[t.RelayList=10002]="RelayList",t[t.ClientAuth=22242]="ClientAuth",t[t.NwcRequest=23194]="NwcRequest",t[t.HttpAuth=27235]="HttpAuth",t[t.ProfileBadge=30008]="ProfileBadge",t[t.BadgeDefinition=30009]="BadgeDefinition",t[t.Article=30023]="Article",t[t.FileMetadata=1063]="FileMetadata",t))(lt||{});function wE(t=255){return{kind:t,content:"",tags:[],created_at:0}}function Yr(t,e){const n=t;return n.pubkey=k1(e),n.id=ho(n),n.sig=EE(n,e),n[Qi]=!0,n}function xE(t){if(!pd(t))throw new Error("can't serialize event with wrong or missing properties");return JSON.stringify([0,t.pubkey,t.created_at,t.kind,t.tags,t.content])}function ho(t){let e=Qn(wn.encode(xE(t)));return on(e)}var $E=t=>t instanceof Object;function pd(t){if(!$E(t)||typeof t.kind!="number"||typeof t.content!="string"||typeof t.created_at!="number"||typeof t.pubkey!="string"||!t.pubkey.match(/^[a-f0-9]{64}$/)||!Array.isArray(t.tags))return!1;for(let e=0;e<t.tags.length;e++){let n=t.tags[e];if(!Array.isArray(n))return!1;for(let i=0;i<n.length;i++)if(typeof n[i]=="object")return!1}return!0}function po(t){if(typeof t[Qi]=="boolean")return t[Qi];const e=ho(t);if(e!==t.id)return t[Qi]=!1;try{return t[Qi]=uo.verify(t.sig,e,t.pubkey)}catch{return t[Qi]=!1}}function EE(t,e){return on(uo.sign(ho(t),e))}function kE(t,e){if(t.ids&&t.ids.indexOf(e.id)===-1&&!t.ids.some(n=>e.id.startsWith(n))||t.kinds&&t.kinds.indexOf(e.kind)===-1||t.authors&&t.authors.indexOf(e.pubkey)===-1&&!t.authors.some(n=>e.pubkey.startsWith(n)))return!1;for(let n in t)if(n[0]==="#"){let i=n.slice(1),o=t[`#${i}`];if(o&&!e.tags.find(([a,l])=>a===n.slice(1)&&o.indexOf(l)!==-1))return!1}return!(t.since&&e.created_at<t.since||t.until&&e.created_at>t.until)}function T1(t,e){for(let n=0;n<t.length;n++)if(kE(t[n],e))return!0;return!1}function CE(...t){let e={};for(let n=0;n<t.length;n++){let i=t[n];Object.entries(i).forEach(([o,a])=>{if(o==="kinds"||o==="ids"||o==="authors"||o[0]==="#"){e[o]=e[o]||[];for(let l=0;l<a.length;l++){let u=a[l];e[o].includes(u)||e[o].push(u)}}}),i.limit&&(!e.limit||i.limit>e.limit)&&(e.limit=i.limit),i.until&&(!e.until||i.until>e.until)&&(e.until=i.until),i.since&&(!e.since||i.since<e.since)&&(e.since=i.since)}return e}var SE={};yt(SE,{getHex64:()=>vl,getInt:()=>A1,getSubscriptionId:()=>R1,matchEventId:()=>TE,matchEventKind:()=>RE,matchEventPubkey:()=>AE});function vl(t,e){let n=e.length+3,i=t.indexOf(`"${e}":`)+n,o=t.slice(i).indexOf('"')+i+1;return t.slice(o,o+64)}function A1(t,e){let n=e.length,i=t.indexOf(`"${e}":`)+n+3,o=t.slice(i),a=Math.min(o.indexOf(","),o.indexOf("}"));return parseInt(o.slice(0,a),10)}function R1(t){let e=t.slice(0,22).indexOf('"EVENT"');if(e===-1)return null;let n=t.slice(e+7+1).indexOf('"');if(n===-1)return null;let i=e+7+1+n,o=t.slice(i+1,80).indexOf('"');if(o===-1)return null;let a=i+1+o;return t.slice(i+1,a)}function TE(t,e){return e===vl(t,"id")}function AE(t,e){return e===vl(t,"pubkey")}function RE(t,e){return e===A1(t,"kind")}var ig=()=>({connect:[],disconnect:[],error:[],notice:[],auth:[]});function IE(t,e={}){let{listTimeout:n=3e3,getTimeout:i=3e3,countTimeout:o=3e3}=e;var a,l={},u=ig(),d={},f={},p;async function g(){return p||(p=new Promise((S,M)=>{try{a=new WebSocket(t)}catch(A){M(A)}a.onopen=()=>{u.connect.forEach(A=>A()),S()},a.onerror=()=>{p=void 0,u.error.forEach(A=>A()),M()},a.onclose=async()=>{p=void 0,u.disconnect.forEach(A=>A())};let C=new S1,I;a.onmessage=A=>{C.enqueue(A.data),I||(I=setInterval(O,0))};function O(){if(C.size===0){clearInterval(I),I=null;return}var A=C.dequeue();if(!A)return;let D=R1(A);if(D){let j=l[D];if(j&&j.alreadyHaveEvent&&j.alreadyHaveEvent(vl(A,"id"),t))return}try{let j=JSON.parse(A);switch(j[0]){case"EVENT":{let re=j[1],se=j[2];pd(se)&&l[re]&&(l[re].skipVerification||po(se))&&T1(l[re].filters,se)&&(l[re],(d[re]?.event||[]).forEach(ee=>ee(se)));return}case"COUNT":let K=j[1],J=j[2];l[K]&&(d[K]?.count||[]).forEach(re=>re(J));return;case"EOSE":{let re=j[1];re in d&&(d[re].eose.forEach(se=>se()),d[re].eose=[]);return}case"OK":{let re=j[1],se=j[2],ee=j[3]||"";if(re in f){let{resolve:N,reject:Z}=f[re];se?N(null):Z(new Error(ee))}return}case"NOTICE":let ne=j[1];u.notice.forEach(re=>re(ne));return;case"AUTH":{let re=j[1];u.auth?.forEach(se=>se(re));return}}}catch{return}}}),p)}function v(){return a?.readyState===1}async function b(){v()||await g()}async function w(S){let M=JSON.stringify(S);if(!(!v()&&(await new Promise(C=>setTimeout(C,1e3)),!v())))try{a.send(M)}catch(C){console.log(C)}}const x=(S,{verb:M="REQ",skipVerification:C=!1,alreadyHaveEvent:I=null,id:O=Math.random().toString().slice(2)}={})=>{let A=O;l[A]={id:A,filters:S,skipVerification:C,alreadyHaveEvent:I},w([M,A,...S]);let D={sub:(j,K={})=>x(j||S,{skipVerification:K.skipVerification||C,alreadyHaveEvent:K.alreadyHaveEvent||I,id:A}),unsub:()=>{delete l[A],delete d[A],w(["CLOSE",A])},on:(j,K)=>{d[A]=d[A]||{event:[],count:[],eose:[]},d[A][j].push(K)},off:(j,K)=>{let J=d[A],ne=J[j].indexOf(K);ne>=0&&J[j].splice(ne,1)},get events(){return I1(D)}};return D};function $(S,M){return new Promise((C,I)=>{if(!S.id){I(new Error(`event ${S} has no id`));return}let O=S.id;w([M,S]),f[O]={resolve:C,reject:I}})}return{url:t,sub:x,on:(S,M)=>{u[S].push(M),S==="connect"&&a?.readyState===1&&M()},off:(S,M)=>{let C=u[S].indexOf(M);C!==-1&&u[S].splice(C,1)},list:(S,M)=>new Promise(C=>{let I=x(S,M),O=[],A=setTimeout(()=>{I.unsub(),C(O)},n);I.on("eose",()=>{I.unsub(),clearTimeout(A),C(O)}),I.on("event",D=>{O.push(D)})}),get:(S,M)=>new Promise(C=>{let I=x([S],M),O=setTimeout(()=>{I.unsub(),C(null)},i);I.on("event",A=>{I.unsub(),clearTimeout(O),C(A)})}),count:S=>new Promise(M=>{let C=x(S,{...x,verb:"COUNT"}),I=setTimeout(()=>{C.unsub(),M(null)},o);C.on("count",O=>{C.unsub(),clearTimeout(I),M(O)})}),async publish(S){await $(S,"EVENT")},async auth(S){await $(S,"AUTH")},connect:b,close(){u=ig(),d={},f={},a?.readyState===WebSocket.OPEN&&a.close()},get status(){return a?.readyState??3}}}async function*I1(t){let e;const n=[],i=o=>{e?(e(o),e=void 0):n.push(o)};t.on("event",i);try{for(;;)n.length>0?yield n.shift():yield await new Promise(a=>{e=a})}finally{t.off("event",i)}}var OE=class{_conn;_seenOn={};batchedByKey={};eoseSubTimeout;getTimeout;seenOnEnabled=!0;batchInterval=100;constructor(t={}){this._conn={},this.eoseSubTimeout=t.eoseSubTimeout||3400,this.getTimeout=t.getTimeout||3400,this.seenOnEnabled=t.seenOnEnabled!==!1,this.batchInterval=t.batchInterval||100}close(t){t.forEach(e=>{let n=this._conn[Su(e)];n&&n.close()})}async ensureRelay(t){const e=Su(t);this._conn[e]||(this._conn[e]=IE(e,{getTimeout:this.getTimeout*.9,listTimeout:this.getTimeout*.9}));const n=this._conn[e];return await n.connect(),n}sub(t,e,n){let i=new Set,o={...n||{}};o.alreadyHaveEvent=(v,b)=>{if(n?.alreadyHaveEvent?.(v,b))return!0;if(this.seenOnEnabled){let w=this._seenOn[v]||new Set;w.add(b),this._seenOn[v]=w}return i.has(v)};let a=[],l=new Set,u=new Set,d=t.length,f=!1,p=setTimeout(()=>{f=!0;for(let v of u.values())v()},n?.eoseSubTimeout||this.eoseSubTimeout);t.filter((v,b,w)=>w.indexOf(v)===b).forEach(async v=>{let b;try{b=await this.ensureRelay(v)}catch{x();return}if(!b)return;let w=b.sub(e,o);w.on("event",$=>{i.add($.id);for(let S of l.values())S($)}),w.on("eose",()=>{f||x()}),a.push(w);function x(){if(d--,d===0){clearTimeout(p);for(let $ of u.values())$()}}});let g={sub(v,b){return a.forEach(w=>w.sub(v,b)),g},unsub(){a.forEach(v=>v.unsub())},on(v,b){v==="event"?l.add(b):v==="eose"&&u.add(b)},off(v,b){v==="event"?l.delete(b):v==="eose"&&u.delete(b)},get events(){return I1(g)}};return g}get(t,e,n){return new Promise(i=>{let o=this.sub(t,[e],n),a=setTimeout(()=>{o.unsub(),i(null)},this.getTimeout);o.on("event",l=>{i(l),clearTimeout(a),o.unsub()})})}list(t,e,n){return new Promise(i=>{let o=[],a=this.sub(t,e,n);a.on("event",l=>{o.push(l)}),a.on("eose",()=>{a.unsub(),i(o)})})}batchedList(t,e,n){return new Promise(i=>{this.batchedByKey[t]?this.batchedByKey[t].push({filters:n,relays:e,resolve:i,events:[]}):(this.batchedByKey[t]=[{filters:n,relays:e,resolve:i,events:[]}],setTimeout(()=>{Object.keys(this.batchedByKey).forEach(async o=>{const a=this.batchedByKey[o],l=[],u=[];a.forEach(f=>{l.push(...f.filters),u.push(...f.relays)});const d=this.sub(u,[CE(...l)]);d.on("event",f=>{a.forEach(p=>T1(p.filters,f)&&p.events.push(f))}),d.on("eose",()=>{d.unsub(),a.forEach(f=>f.resolve(f.events))}),delete this.batchedByKey[o]})},this.batchInterval))})}publish(t,e){return t.map(async n=>(await this.ensureRelay(n)).publish(e))}seenOn(t){return Array.from(this._seenOn[t]?.values?.()||[])}},go={};yt(go,{BECH32_REGEX:()=>L1,decode:()=>ml,naddrEncode:()=>DE,neventEncode:()=>NE,noteEncode:()=>BE,nprofileEncode:()=>jE,npubEncode:()=>ME,nrelayEncode:()=>UE,nsecEncode:()=>PE});var O1=5e3,L1=/[\x21-\x7E]{1,83}1[023456789acdefghjklmnpqrstuvwxyz]{6,}/;function LE(t){const e=new Uint8Array(4);return e[0]=t>>24&255,e[1]=t>>16&255,e[2]=t>>8&255,e[3]=t&255,e}function ml(t){let{prefix:e,words:n}=ss.decode(t,O1),i=new Uint8Array(ss.fromWords(n));switch(e){case"nprofile":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nprofile");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");return{type:"nprofile",data:{pubkey:on(o[0][0]),relays:o[1]?o[1].map(a=>Vn.decode(a)):[]}}}case"nevent":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nevent");if(o[0][0].length!==32)throw new Error("TLV 0 should be 32 bytes");if(o[2]&&o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(o[3]&&o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"nevent",data:{id:on(o[0][0]),relays:o[1]?o[1].map(a=>Vn.decode(a)):[],author:o[2]?.[0]?on(o[2][0]):void 0,kind:o[3]?.[0]?parseInt(on(o[3][0]),16):void 0}}}case"naddr":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for naddr");if(!o[2]?.[0])throw new Error("missing TLV 2 for naddr");if(o[2][0].length!==32)throw new Error("TLV 2 should be 32 bytes");if(!o[3]?.[0])throw new Error("missing TLV 3 for naddr");if(o[3][0].length!==4)throw new Error("TLV 3 should be 4 bytes");return{type:"naddr",data:{identifier:Vn.decode(o[0][0]),pubkey:on(o[2][0]),kind:parseInt(on(o[3][0]),16),relays:o[1]?o[1].map(a=>Vn.decode(a)):[]}}}case"nrelay":{let o=ba(i);if(!o[0]?.[0])throw new Error("missing TLV 0 for nrelay");return{type:"nrelay",data:Vn.decode(o[0][0])}}case"nsec":case"npub":case"note":return{type:e,data:on(i)};default:throw new Error(`unknown prefix ${e}`)}}function ba(t){let e={},n=t;for(;n.length>0;){let i=n[0],o=n[1];if(!o)throw new Error(`malformed TLV ${i}`);let a=n.slice(2,2+o);if(n=n.slice(2+o),a.length<o)throw new Error(`not enough data to read on TLV ${i}`);e[i]=e[i]||[],e[i].push(a)}return e}function PE(t){return gd("nsec",t)}function ME(t){return gd("npub",t)}function BE(t){return gd("note",t)}function vo(t,e){let n=ss.toWords(e);return ss.encode(t,n,O1)}function gd(t,e){let n=ns(e);return vo(t,n)}function jE(t){let e=yl({0:[ns(t.pubkey)],1:(t.relays||[]).map(n=>wn.encode(n))});return vo("nprofile",e)}function NE(t){let e;t.kind!=null&&(e=LE(t.kind));let n=yl({0:[ns(t.id)],1:(t.relays||[]).map(i=>wn.encode(i)),2:t.author?[ns(t.author)]:[],3:e?[new Uint8Array(e)]:[]});return vo("nevent",n)}function DE(t){let e=new ArrayBuffer(4);new DataView(e).setUint32(0,t.kind,!1);let n=yl({0:[wn.encode(t.identifier)],1:(t.relays||[]).map(i=>wn.encode(i)),2:[ns(t.pubkey)],3:[new Uint8Array(e)]});return vo("naddr",n)}function UE(t){let e=yl({0:[wn.encode(t)]});return vo("nrelay",e)}function yl(t){let e=[];return Object.entries(t).forEach(([n,i])=>{i.forEach(o=>{let a=new Uint8Array(o.length+2);a.set([parseInt(n)],0),a.set([o.length],1),a.set(o,2),e.push(a)})}),Ji(...e)}var FE={};yt(FE,{decrypt:()=>zE,encrypt:()=>P1});typeof crypto<"u"&&!crypto.subtle&&crypto.webcrypto&&(crypto.subtle=crypto.webcrypto.subtle);async function P1(t,e,n){const i=Ut.getSharedSecret(t,"02"+e),o=M1(i);let a=Uint8Array.from(lo(16)),l=wn.encode(n),u=await crypto.subtle.importKey("raw",o,{name:"AES-CBC"},!1,["encrypt"]),d=await crypto.subtle.encrypt({name:"AES-CBC",iv:a},u,l),f=$r.encode(new Uint8Array(d)),p=$r.encode(new Uint8Array(a.buffer));return`${f}?iv=${p}`}async function zE(t,e,n){let[i,o]=n.split("?iv="),a=Ut.getSharedSecret(t,"02"+e),l=M1(a),u=await crypto.subtle.importKey("raw",l,{name:"AES-CBC"},!1,["decrypt"]),d=$r.decode(i),f=$r.decode(o),p=await crypto.subtle.decrypt({name:"AES-CBC",iv:f},u,d);return Vn.decode(p)}function M1(t){return t.slice(1,33)}var B1={};yt(B1,{NIP05_REGEX:()=>j1,queryProfile:()=>qE,searchDomain:()=>WE,useFetchImplementation:()=>HE});var j1=/^(?:([\w.+-]+)@)?([\w.-]+)$/,bl;try{bl=fetch}catch{}function HE(t){bl=t}async function WE(t,e=""){try{return(await(await bl(`https://${t}/.well-known/nostr.json?name=${e}`)).json()).names}catch{return{}}}async function qE(t){const e=t.match(j1);if(!e)return null;const[n,i="_",o]=e;try{const a=await bl(`https://${o}/.well-known/nostr.json?name=${i}`),{names:l,relays:u}=ZE(await a.json()),d=l[i];return d?{pubkey:d,relays:u?.[d]}:null}catch{return null}}function ZE(t){const e={names:{}};for(const[n,i]of Object.entries(t.names))typeof n=="string"&&typeof i=="string"&&(e.names[n]=i);if(t.relays){e.relays={};for(const[n,i]of Object.entries(t.relays))typeof n=="string"&&Array.isArray(i)&&(e.relays[n]=i.filter(o=>typeof o=="string"))}return e}var KE={};yt(KE,{generateSeedWords:()=>GE,privateKeyFromSeedWords:()=>VE,validateWords:()=>QE});function VE(t,e){let i=mi.fromMasterSeed(F7(t,e)).derive("m/44'/1237'/0'/0/0").privateKey;if(!i)throw new Error("could not derive private key");return on(i)}function GE(){return M7(g1)}function QE(t){return D7(t,g1)}var YE={};yt(YE,{parse:()=>JE});function JE(t){const e={reply:void 0,root:void 0,mentions:[],profiles:[]},n=[];for(const i of t.tags)i[0]==="e"&&i[1]&&n.push(i),i[0]==="p"&&i[1]&&e.profiles.push({pubkey:i[1],relays:i[2]?[i[2]]:[]});for(let i=0;i<n.length;i++){const o=n[i],[a,l,u,d]=o,f={id:l,relays:u?[u]:[]},p=i===0,g=i===n.length-1;if(d==="root"){e.root=f;continue}if(d==="reply"){e.reply=f;continue}if(d==="mention"){e.mentions.push(f);continue}if(p){e.root=f;continue}if(g){e.reply=f;continue}e.mentions.push(f)}return e}var XE={};yt(XE,{getPow:()=>N1,minePow:()=>e9});function N1(t){let e=0;for(let n=0;n<t.length;n++){const i=parseInt(t[n],16);if(i===0)e+=4;else{e+=Math.clz32(i)-28;break}}return e}function e9(t,e){let n=0;const i=t,o=["nonce",n.toString(),e.toString()];for(i.tags.push(o);;){const a=Math.floor(new Date().getTime()/1e3);if(a!==i.created_at&&(n=0,i.created_at=a),o[1]=(++n).toString(),i.id=ho(i),N1(i.id)>=e)break}return i}var t9={};yt(t9,{finishRepostEvent:()=>n9,getRepostedEvent:()=>r9,getRepostedEventPointer:()=>D1});function n9(t,e,n,i){return Yr({kind:6,tags:[...t.tags??[],["e",e.id,n],["p",e.pubkey]],content:t.content===""?"":JSON.stringify(e),created_at:t.created_at},i)}function D1(t){if(t.kind!==6)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(e!==void 0)return{id:e[1],relays:[e[2],n?.[2]].filter(i=>typeof i=="string"),author:n?.[1]}}function r9(t,{skipVerification:e}={}){const n=D1(t);if(n===void 0||t.content==="")return;let i;try{i=JSON.parse(t.content)}catch{return}if(i.id===n.id&&!(!e&&!po(i)))return i}var i9={};yt(i9,{NOSTR_URI_REGEX:()=>_l,parse:()=>o9,test:()=>s9});var _l=new RegExp(`nostr:(${L1.source})`);function s9(t){return typeof t=="string"&&new RegExp(`^${_l.source}$`).test(t)}function o9(t){const e=t.match(new RegExp(`^${_l.source}$`));if(!e)throw new Error(`Invalid Nostr URI: ${t}`);return{uri:e[0],value:e[1],decoded:ml(e[1])}}var a9={};yt(a9,{finishReactionEvent:()=>l9,getReactedEventPointer:()=>c9});function l9(t,e,n){const i=e.tags.filter(o=>o.length>=2&&(o[0]==="e"||o[0]==="p"));return Yr({...t,kind:7,tags:[...t.tags??[],...i,["e",e.id],["p",e.pubkey]],content:t.content??"+"},n)}function c9(t){if(t.kind!==7)return;let e,n;for(let i=t.tags.length-1;i>=0&&(e===void 0||n===void 0);i--){const o=t.tags[i];o.length>=2&&(o[0]==="e"&&e===void 0?e=o:o[0]==="p"&&n===void 0&&(n=o))}if(!(e===void 0||n===void 0))return{id:e[1],relays:[e[2],n[2]].filter(i=>i!==void 0),author:n[1]}}var u9={};yt(u9,{createDelegation:()=>d9,getDelegator:()=>f9});function d9(t,e){let n=[];(e.kind||-1)>=0&&n.push(`kind=${e.kind}`),e.until&&n.push(`created_at<${e.until}`),e.since&&n.push(`created_at>${e.since}`);let i=n.join("&");if(i==="")throw new Error("refusing to create a delegation without any conditions");let o=Qn(wn.encode(`nostr:delegation:${e.pubkey}:${i}`)),a=on(uo.sign(o,t));return{from:k1(t),to:e.pubkey,cond:i,sig:a}}function f9(t){let e=t.tags.find(u=>u[0]==="delegation"&&u.length>=4);if(!e)return null;let n=e[1],i=e[2],o=e[3],a=i.split("&");for(let u=0;u<a.length;u++){let[d,f,p]=a[u].split(/\b/);if(!(d==="kind"&&f==="="&&t.kind===parseInt(p))){if(d==="created_at"&&f==="<"&&t.created_at<parseInt(p))continue;if(d==="created_at"&&f===">"&&t.created_at>parseInt(p))continue;return null}}let l=Qn(wn.encode(`nostr:delegation:${t.pubkey}:${i}`));return uo.verify(o,l,n)?n:null}var h9={};yt(h9,{matchAll:()=>p9,regex:()=>vd,replaceAll:()=>g9});var vd=()=>new RegExp(`\\b${_l.source}\\b`,"g");function*p9(t){const e=t.matchAll(vd());for(const n of e)try{const[i,o]=n;yield{uri:i,value:o,decoded:ml(o),start:n.index,end:n.index+i.length}}catch{}}function g9(t,e){return t.replaceAll(vd(),(n,i)=>e({uri:n,value:i,decoded:ml(i)}))}var v9={};yt(v9,{channelCreateEvent:()=>m9,channelHideMessageEvent:()=>_9,channelMessageEvent:()=>b9,channelMetadataEvent:()=>y9,channelMuteUserEvent:()=>w9});var m9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Yr({kind:40,tags:[...t.tags??[]],content:n,created_at:t.created_at},e)},y9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Yr({kind:41,tags:[["e",t.channel_create_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},b9=(t,e)=>{const n=[["e",t.channel_create_event_id,t.relay_url,"root"]];return t.reply_to_channel_message_event_id&&n.push(["e",t.reply_to_channel_message_event_id,t.relay_url,"reply"]),Yr({kind:42,tags:[...n,...t.tags??[]],content:t.content,created_at:t.created_at},e)},_9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Yr({kind:43,tags:[["e",t.channel_message_event_id],...t.tags??[]],content:n,created_at:t.created_at},e)},w9=(t,e)=>{let n;if(typeof t.content=="object")n=JSON.stringify(t.content);else if(typeof t.content=="string")n=t.content;else return;return Yr({kind:44,tags:[["p",t.pubkey_to_mute],...t.tags??[]],content:n,created_at:t.created_at},e)},x9={};yt(x9,{useFetchImplementation:()=>$9,validateGithub:()=>E9});var md;try{md=fetch}catch{}function $9(t){md=t}async function E9(t,e,n){try{return await(await md(`https://gist.github.com/${e}/${n}/raw`)).text()===`Verifying that I control the following Nostr public key: ${t}`}catch{return!1}}var k9={};yt(k9,{authenticate:()=>C9});var C9=async({challenge:t,relay:e,sign:n})=>{const i={kind:22242,created_at:Math.floor(Date.now()/1e3),tags:[["relay",e.url],["challenge",t]],content:""};return e.auth(await n(i))},S9={};yt(S9,{decrypt:()=>R9,encrypt:()=>A9,getSharedSecret:()=>T9});var T9=(t,e)=>Qn(Ut.getSharedSecret(t,"02"+e).subarray(1,33));function A9(t,e,n=1){if(n!==1)throw new Error("NIP44: unknown encryption version");const i=lo(24),o=wn.encode(e),a=E1(t,i,o),l=new Uint8Array(25+a.length);return l.set([n],0),l.set(i,1),l.set(a,25),$r.encode(l)}function R9(t,e){let n=$r.decode(e);if(n[0]!==1)throw new Error(`NIP44: unknown encryption version: ${n[0]}`);const i=n.slice(1,25),o=n.slice(25),a=E1(t,i,o);return Vn.decode(a)}var I9={};yt(I9,{makeNwcRequestEvent:()=>L9,parseConnectionString:()=>O9});function O9(t){const{pathname:e,searchParams:n}=new URL(t),i=e,o=n.get("relay"),a=n.get("secret");if(!i||!o||!a)throw new Error("invalid connection string");return{pubkey:i,relay:o,secret:a}}async function L9({pubkey:t,secret:e,invoice:n}){const o=await P1(e,t,JSON.stringify({method:"pay_invoice",params:{invoice:n}})),a={kind:23194,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t]]};return Yr(a,e)}var P9={};yt(P9,{getZapEndpoint:()=>B9,makeZapReceipt:()=>D9,makeZapRequest:()=>j9,useFetchImplementation:()=>M9,validateZapRequest:()=>N9});var yd;try{yd=fetch}catch{}function M9(t){yd=t}async function B9(t){try{let e="",{lud06:n,lud16:i}=JSON.parse(t.content);if(n){let{words:l}=ss.decode(n,1e3),u=ss.fromWords(l);e=Vn.decode(u)}else if(i){let[l,u]=i.split("@");e=`https://${u}/.well-known/lnurlp/${l}`}else return null;let a=await(await yd(e)).json();if(a.allowsNostr&&a.nostrPubkey)return a.callback}catch{}return null}function j9({profile:t,event:e,amount:n,relays:i,comment:o=""}){if(!n)throw new Error("amount not given");if(!t)throw new Error("profile not given");let a={kind:9734,created_at:Math.round(Date.now()/1e3),content:o,tags:[["p",t],["amount",n.toString()],["relays",...i]]};return e&&a.tags.push(["e",e]),a}function N9(t){let e;try{e=JSON.parse(t)}catch{return"Invalid zap request JSON."}if(!pd(e))return"Zap request is not a valid Nostr event.";if(!po(e))return"Invalid signature on zap request.";let n=e.tags.find(([a,l])=>a==="p"&&l);if(!n)return"Zap request doesn't have a 'p' tag.";if(!n[1].match(/^[a-f0-9]{64}$/))return"Zap request 'p' tag is not valid hex.";let i=e.tags.find(([a,l])=>a==="e"&&l);return i&&!i[1].match(/^[a-f0-9]{64}$/)?"Zap request 'e' tag is not valid hex.":e.tags.find(([a,l])=>a==="relays"&&l)?null:"Zap request doesn't have a 'relays' tag."}function D9({zapRequest:t,preimage:e,bolt11:n,paidAt:i}){let a=JSON.parse(t).tags.filter(([u])=>u==="e"||u==="p"||u==="a"),l={kind:9735,created_at:Math.round(i.getTime()/1e3),content:"",tags:[...a,["bolt11",n],["description",t]]};return e&&l.tags.push(["preimage",e]),l}var U9={};yt(U9,{getToken:()=>F9,unpackEventFromToken:()=>F1,validateEvent:()=>z1,validateToken:()=>z9});var U1="Nostr ";async function F9(t,e,n,i=!1){if(!t||!e)throw new Error("Missing loginUrl or httpMethod");const o=wE(27235);o.tags=[["u",t],["method",e]],o.created_at=Math.round(new Date().getTime()/1e3);const a=await n(o);return(i?U1:"")+$r.encode(wn.encode(JSON.stringify(a)))}async function z9(t,e,n){const i=await F1(t).catch(a=>{throw a});return await z1(i,e,n).catch(a=>{throw a})}async function F1(t){if(!t)throw new Error("Missing token");t=t.replace(U1,"");const e=Vn.decode($r.decode(t));if(!e||e.length===0||!e.startsWith("{"))throw new Error("Invalid token");return JSON.parse(e)}async function z1(t,e,n){if(!t)throw new Error("Invalid nostr event");if(!po(t))throw new Error("Invalid nostr event, signature invalid");if(t.kind!==27235)throw new Error("Invalid nostr event, kind invalid");if(!t.created_at)throw new Error("Invalid nostr event, created_at invalid");if(Math.round(new Date().getTime()/1e3)-t.created_at>60)throw new Error("Invalid nostr event, expired");const i=t.tags.find(a=>a[0]==="u");if(i?.length!==1&&i?.[1]!==e)throw new Error("Invalid nostr event, url tag invalid");const o=t.tags.find(a=>a[0]==="method");if(o?.length!==1&&o?.[1].toLowerCase()!==n.toLowerCase())throw new Error("Invalid nostr event, method tag invalid");return!0}const H9=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3">'),H1=(t={})=>(()=>{const e=H9();return it(e,t,!0,!0),e})(),W9=B('<button class="text-blue-500 underline">'),{noteEncode:q9,neventEncode:Z9}=go,K9=t=>{try{return q9(t)}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},V9=t=>{try{return Z9({id:t})}catch(e){return console.error("failed to encode event id into Bech32 entity (NIP-19) but ignore",t,e),t}},Ks=t=>(()=>{const e=W9();return k(e,E(me,{get when(){return t.kind==null||t.kind===lt.Text},get fallback(){return V9(t.eventId)},get children(){return K9(t.eventId)}})),e})();var Da={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Da.exports;(function(t,e){(function(){var n,i="4.17.21",o=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",u="Invalid `variable` option passed into `_.template`",d="__lodash_hash_undefined__",f=500,p="__lodash_placeholder__",g=1,v=2,b=4,w=1,x=2,$=1,S=2,M=4,C=8,I=16,O=32,A=64,D=128,j=256,K=512,J=30,ne="...",re=800,se=16,ee=1,N=2,Z=3,X=1/0,F=9007199254740991,H=17976931348623157e292,fe=0/0,he=4294967295,_e=he-1,Ke=he>>>1,ue=[["ary",D],["bind",$],["bindKey",S],["curry",C],["curryRight",I],["flip",K],["partial",O],["partialRight",A],["rearg",j]],ce="[object Arguments]",be="[object Array]",Y="[object AsyncFunction]",ie="[object Boolean]",oe="[object Date]",Te="[object DOMException]",Ve="[object Error]",le="[object Function]",V="[object GeneratorFunction]",qe="[object Map]",xt="[object Number]",Fn="[object Null]",Bt="[object Object]",xn="[object Promise]",ti="[object Proxy]",$n="[object RegExp]",Ct="[object Set]",Yt="[object String]",zn="[object Symbol]",Cr="[object Undefined]",En="[object WeakMap]",Ae="[object WeakSet]",Ht="[object ArrayBuffer]",Wt="[object DataView]",kn="[object Float32Array]",Cn="[object Float64Array]",ln="[object Int8Array]",cn="[object Int16Array]",Sn="[object Int32Array]",sr="[object Uint8Array]",or="[object Uint8ClampedArray]",ar="[object Uint16Array]",Li="[object Uint32Array]",xo=/\b__p \+= '';/g,$o=/\b(__p \+=) '' \+/g,Eo=/(__e\(.*?\)|\b__t\)) \+\n'';/g,tf=/&(?:amp|lt|gt|quot|#39);/g,nf=/[&<>"']/g,Nm=RegExp(tf.source),Dm=RegExp(nf.source),Um=/<%-([\s\S]+?)%>/g,Fm=/<%([\s\S]+?)%>/g,rf=/<%=([\s\S]+?)%>/g,zm=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Hm=/^\w*$/,Wm=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jl=/[\\^$.*+?()[\]{}|]/g,qm=RegExp(jl.source),Nl=/^\s+/,Zm=/\s/,Km=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Vm=/\{\n\/\* \[wrapped with (.+)\] \*/,Gm=/,? & /,Qm=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ym=/[()=,{}\[\]\/\s]/,Jm=/\\(\\)?/g,Xm=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,sf=/\w*$/,e2=/^[-+]0x[0-9a-f]+$/i,t2=/^0b[01]+$/i,n2=/^\[object .+?Constructor\]$/,r2=/^0o[0-7]+$/i,i2=/^(?:0|[1-9]\d*)$/,s2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ko=/($^)/,o2=/['\n\r\u2028\u2029\\]/g,Co="\\ud800-\\udfff",a2="\\u0300-\\u036f",l2="\\ufe20-\\ufe2f",c2="\\u20d0-\\u20ff",of=a2+l2+c2,af="\\u2700-\\u27bf",lf="a-z\\xdf-\\xf6\\xf8-\\xff",u2="\\xac\\xb1\\xd7\\xf7",d2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",f2="\\u2000-\\u206f",h2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",cf="A-Z\\xc0-\\xd6\\xd8-\\xde",uf="\\ufe0e\\ufe0f",df=u2+d2+f2+h2,Dl="['’]",p2="["+Co+"]",ff="["+df+"]",So="["+of+"]",hf="\\d+",g2="["+af+"]",pf="["+lf+"]",gf="[^"+Co+df+hf+af+lf+cf+"]",Ul="\\ud83c[\\udffb-\\udfff]",v2="(?:"+So+"|"+Ul+")",vf="[^"+Co+"]",Fl="(?:\\ud83c[\\udde6-\\uddff]){2}",zl="[\\ud800-\\udbff][\\udc00-\\udfff]",Pi="["+cf+"]",mf="\\u200d",yf="(?:"+pf+"|"+gf+")",m2="(?:"+Pi+"|"+gf+")",bf="(?:"+Dl+"(?:d|ll|m|re|s|t|ve))?",_f="(?:"+Dl+"(?:D|LL|M|RE|S|T|VE))?",wf=v2+"?",xf="["+uf+"]?",y2="(?:"+mf+"(?:"+[vf,Fl,zl].join("|")+")"+xf+wf+")*",b2="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_2="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",$f=xf+wf+y2,w2="(?:"+[g2,Fl,zl].join("|")+")"+$f,x2="(?:"+[vf+So+"?",So,Fl,zl,p2].join("|")+")",$2=RegExp(Dl,"g"),E2=RegExp(So,"g"),Hl=RegExp(Ul+"(?="+Ul+")|"+x2+$f,"g"),k2=RegExp([Pi+"?"+pf+"+"+bf+"(?="+[ff,Pi,"$"].join("|")+")",m2+"+"+_f+"(?="+[ff,Pi+yf,"$"].join("|")+")",Pi+"?"+yf+"+"+bf,Pi+"+"+_f,_2,b2,hf,w2].join("|"),"g"),C2=RegExp("["+mf+Co+of+uf+"]"),S2=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,T2=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],A2=-1,st={};st[kn]=st[Cn]=st[ln]=st[cn]=st[Sn]=st[sr]=st[or]=st[ar]=st[Li]=!0,st[ce]=st[be]=st[Ht]=st[ie]=st[Wt]=st[oe]=st[Ve]=st[le]=st[qe]=st[xt]=st[Bt]=st[$n]=st[Ct]=st[Yt]=st[En]=!1;var nt={};nt[ce]=nt[be]=nt[Ht]=nt[Wt]=nt[ie]=nt[oe]=nt[kn]=nt[Cn]=nt[ln]=nt[cn]=nt[Sn]=nt[qe]=nt[xt]=nt[Bt]=nt[$n]=nt[Ct]=nt[Yt]=nt[zn]=nt[sr]=nt[or]=nt[ar]=nt[Li]=!0,nt[Ve]=nt[le]=nt[En]=!1;var R2={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},I2={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},O2={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},L2={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},P2=parseFloat,M2=parseInt,Ef=typeof wt=="object"&&wt&&wt.Object===Object&&wt,B2=typeof self=="object"&&self&&self.Object===Object&&self,St=Ef||B2||Function("return this")(),Wl=e&&!e.nodeType&&e,ni=Wl&&!0&&t&&!t.nodeType&&t,kf=ni&&ni.exports===Wl,ql=kf&&Ef.process,un=function(){try{var L=ni&&ni.require&&ni.require("util").types;return L||ql&&ql.binding&&ql.binding("util")}catch{}}(),Cf=un&&un.isArrayBuffer,Sf=un&&un.isDate,Tf=un&&un.isMap,Af=un&&un.isRegExp,Rf=un&&un.isSet,If=un&&un.isTypedArray;function Jt(L,z,U){switch(U.length){case 0:return L.call(z);case 1:return L.call(z,U[0]);case 2:return L.call(z,U[0],U[1]);case 3:return L.call(z,U[0],U[1],U[2])}return L.apply(z,U)}function j2(L,z,U,pe){for(var Re=-1,Qe=L==null?0:L.length;++Re<Qe;){var bt=L[Re];z(pe,bt,U(bt),L)}return pe}function dn(L,z){for(var U=-1,pe=L==null?0:L.length;++U<pe&&z(L[U],U,L)!==!1;);return L}function N2(L,z){for(var U=L==null?0:L.length;U--&&z(L[U],U,L)!==!1;);return L}function Of(L,z){for(var U=-1,pe=L==null?0:L.length;++U<pe;)if(!z(L[U],U,L))return!1;return!0}function Sr(L,z){for(var U=-1,pe=L==null?0:L.length,Re=0,Qe=[];++U<pe;){var bt=L[U];z(bt,U,L)&&(Qe[Re++]=bt)}return Qe}function To(L,z){var U=L==null?0:L.length;return!!U&&Mi(L,z,0)>-1}function Zl(L,z,U){for(var pe=-1,Re=L==null?0:L.length;++pe<Re;)if(U(z,L[pe]))return!0;return!1}function at(L,z){for(var U=-1,pe=L==null?0:L.length,Re=Array(pe);++U<pe;)Re[U]=z(L[U],U,L);return Re}function Tr(L,z){for(var U=-1,pe=z.length,Re=L.length;++U<pe;)L[Re+U]=z[U];return L}function Kl(L,z,U,pe){var Re=-1,Qe=L==null?0:L.length;for(pe&&Qe&&(U=L[++Re]);++Re<Qe;)U=z(U,L[Re],Re,L);return U}function D2(L,z,U,pe){var Re=L==null?0:L.length;for(pe&&Re&&(U=L[--Re]);Re--;)U=z(U,L[Re],Re,L);return U}function Vl(L,z){for(var U=-1,pe=L==null?0:L.length;++U<pe;)if(z(L[U],U,L))return!0;return!1}var U2=Gl("length");function F2(L){return L.split("")}function z2(L){return L.match(Qm)||[]}function Lf(L,z,U){var pe;return U(L,function(Re,Qe,bt){if(z(Re,Qe,bt))return pe=Qe,!1}),pe}function Ao(L,z,U,pe){for(var Re=L.length,Qe=U+(pe?1:-1);pe?Qe--:++Qe<Re;)if(z(L[Qe],Qe,L))return Qe;return-1}function Mi(L,z,U){return z===z?ey(L,z,U):Ao(L,Pf,U)}function H2(L,z,U,pe){for(var Re=U-1,Qe=L.length;++Re<Qe;)if(pe(L[Re],z))return Re;return-1}function Pf(L){return L!==L}function Mf(L,z){var U=L==null?0:L.length;return U?Yl(L,z)/U:fe}function Gl(L){return function(z){return z==null?n:z[L]}}function Ql(L){return function(z){return L==null?n:L[z]}}function Bf(L,z,U,pe,Re){return Re(L,function(Qe,bt,tt){U=pe?(pe=!1,Qe):z(U,Qe,bt,tt)}),U}function W2(L,z){var U=L.length;for(L.sort(z);U--;)L[U]=L[U].value;return L}function Yl(L,z){for(var U,pe=-1,Re=L.length;++pe<Re;){var Qe=z(L[pe]);Qe!==n&&(U=U===n?Qe:U+Qe)}return U}function Jl(L,z){for(var U=-1,pe=Array(L);++U<L;)pe[U]=z(U);return pe}function q2(L,z){return at(z,function(U){return[U,L[U]]})}function jf(L){return L&&L.slice(0,Ff(L)+1).replace(Nl,"")}function Xt(L){return function(z){return L(z)}}function Xl(L,z){return at(z,function(U){return L[U]})}function ks(L,z){return L.has(z)}function Nf(L,z){for(var U=-1,pe=L.length;++U<pe&&Mi(z,L[U],0)>-1;);return U}function Df(L,z){for(var U=L.length;U--&&Mi(z,L[U],0)>-1;);return U}function Z2(L,z){for(var U=L.length,pe=0;U--;)L[U]===z&&++pe;return pe}var K2=Ql(R2),V2=Ql(I2);function G2(L){return"\\"+L2[L]}function Q2(L,z){return L==null?n:L[z]}function Bi(L){return C2.test(L)}function Y2(L){return S2.test(L)}function J2(L){for(var z,U=[];!(z=L.next()).done;)U.push(z.value);return U}function ec(L){var z=-1,U=Array(L.size);return L.forEach(function(pe,Re){U[++z]=[Re,pe]}),U}function Uf(L,z){return function(U){return L(z(U))}}function Ar(L,z){for(var U=-1,pe=L.length,Re=0,Qe=[];++U<pe;){var bt=L[U];(bt===z||bt===p)&&(L[U]=p,Qe[Re++]=U)}return Qe}function Ro(L){var z=-1,U=Array(L.size);return L.forEach(function(pe){U[++z]=pe}),U}function X2(L){var z=-1,U=Array(L.size);return L.forEach(function(pe){U[++z]=[pe,pe]}),U}function ey(L,z,U){for(var pe=U-1,Re=L.length;++pe<Re;)if(L[pe]===z)return pe;return-1}function ty(L,z,U){for(var pe=U+1;pe--;)if(L[pe]===z)return pe;return pe}function ji(L){return Bi(L)?ry(L):U2(L)}function Tn(L){return Bi(L)?iy(L):F2(L)}function Ff(L){for(var z=L.length;z--&&Zm.test(L.charAt(z)););return z}var ny=Ql(O2);function ry(L){for(var z=Hl.lastIndex=0;Hl.test(L);)++z;return z}function iy(L){return L.match(Hl)||[]}function sy(L){return L.match(k2)||[]}var oy=function L(z){z=z==null?St:Ni.defaults(St.Object(),z,Ni.pick(St,T2));var U=z.Array,pe=z.Date,Re=z.Error,Qe=z.Function,bt=z.Math,tt=z.Object,tc=z.RegExp,ay=z.String,fn=z.TypeError,Io=U.prototype,ly=Qe.prototype,Di=tt.prototype,Oo=z["__core-js_shared__"],Lo=ly.toString,Xe=Di.hasOwnProperty,cy=0,zf=function(){var r=/[^.]+$/.exec(Oo&&Oo.keys&&Oo.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),Po=Di.toString,uy=Lo.call(tt),dy=St._,fy=tc("^"+Lo.call(Xe).replace(jl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Mo=kf?z.Buffer:n,Rr=z.Symbol,Bo=z.Uint8Array,Hf=Mo?Mo.allocUnsafe:n,jo=Uf(tt.getPrototypeOf,tt),Wf=tt.create,qf=Di.propertyIsEnumerable,No=Io.splice,Zf=Rr?Rr.isConcatSpreadable:n,Cs=Rr?Rr.iterator:n,ri=Rr?Rr.toStringTag:n,Do=function(){try{var r=li(tt,"defineProperty");return r({},"",{}),r}catch{}}(),hy=z.clearTimeout!==St.clearTimeout&&z.clearTimeout,py=pe&&pe.now!==St.Date.now&&pe.now,gy=z.setTimeout!==St.setTimeout&&z.setTimeout,Uo=bt.ceil,Fo=bt.floor,nc=tt.getOwnPropertySymbols,vy=Mo?Mo.isBuffer:n,Kf=z.isFinite,my=Io.join,yy=Uf(tt.keys,tt),_t=bt.max,Ot=bt.min,by=pe.now,_y=z.parseInt,Vf=bt.random,wy=Io.reverse,rc=li(z,"DataView"),Ss=li(z,"Map"),ic=li(z,"Promise"),Ui=li(z,"Set"),Ts=li(z,"WeakMap"),As=li(tt,"create"),zo=Ts&&new Ts,Fi={},xy=ci(rc),$y=ci(Ss),Ey=ci(ic),ky=ci(Ui),Cy=ci(Ts),Ho=Rr?Rr.prototype:n,Rs=Ho?Ho.valueOf:n,Gf=Ho?Ho.toString:n;function y(r){if(ft(r)&&!Oe(r)&&!(r instanceof We)){if(r instanceof hn)return r;if(Xe.call(r,"__wrapped__"))return Qh(r)}return new hn(r)}var zi=function(){function r(){}return function(s){if(!ct(s))return{};if(Wf)return Wf(s);r.prototype=s;var c=new r;return r.prototype=n,c}}();function Wo(){}function hn(r,s){this.__wrapped__=r,this.__actions__=[],this.__chain__=!!s,this.__index__=0,this.__values__=n}y.templateSettings={escape:Um,evaluate:Fm,interpolate:rf,variable:"",imports:{_:y}},y.prototype=Wo.prototype,y.prototype.constructor=y,hn.prototype=zi(Wo.prototype),hn.prototype.constructor=hn;function We(r){this.__wrapped__=r,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=he,this.__views__=[]}function Sy(){var r=new We(this.__wrapped__);return r.__actions__=qt(this.__actions__),r.__dir__=this.__dir__,r.__filtered__=this.__filtered__,r.__iteratees__=qt(this.__iteratees__),r.__takeCount__=this.__takeCount__,r.__views__=qt(this.__views__),r}function Ty(){if(this.__filtered__){var r=new We(this);r.__dir__=-1,r.__filtered__=!0}else r=this.clone(),r.__dir__*=-1;return r}function Ay(){var r=this.__wrapped__.value(),s=this.__dir__,c=Oe(r),h=s<0,m=c?r.length:0,_=Fb(0,m,this.__views__),T=_.start,R=_.end,P=R-T,W=h?R:T-1,q=this.__iteratees__,Q=q.length,ae=0,ye=Ot(P,this.__takeCount__);if(!c||!h&&m==P&&ye==P)return bh(r,this.__actions__);var Ee=[];e:for(;P--&&ae<ye;){W+=s;for(var Be=-1,ke=r[W];++Be<Q;){var ze=q[Be],Ze=ze.iteratee,nn=ze.type,Dt=Ze(ke);if(nn==N)ke=Dt;else if(!Dt){if(nn==ee)continue e;break e}}Ee[ae++]=ke}return Ee}We.prototype=zi(Wo.prototype),We.prototype.constructor=We;function ii(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Ry(){this.__data__=As?As(null):{},this.size=0}function Iy(r){var s=this.has(r)&&delete this.__data__[r];return this.size-=s?1:0,s}function Oy(r){var s=this.__data__;if(As){var c=s[r];return c===d?n:c}return Xe.call(s,r)?s[r]:n}function Ly(r){var s=this.__data__;return As?s[r]!==n:Xe.call(s,r)}function Py(r,s){var c=this.__data__;return this.size+=this.has(r)?0:1,c[r]=As&&s===n?d:s,this}ii.prototype.clear=Ry,ii.prototype.delete=Iy,ii.prototype.get=Oy,ii.prototype.has=Ly,ii.prototype.set=Py;function lr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function My(){this.__data__=[],this.size=0}function By(r){var s=this.__data__,c=qo(s,r);if(c<0)return!1;var h=s.length-1;return c==h?s.pop():No.call(s,c,1),--this.size,!0}function jy(r){var s=this.__data__,c=qo(s,r);return c<0?n:s[c][1]}function Ny(r){return qo(this.__data__,r)>-1}function Dy(r,s){var c=this.__data__,h=qo(c,r);return h<0?(++this.size,c.push([r,s])):c[h][1]=s,this}lr.prototype.clear=My,lr.prototype.delete=By,lr.prototype.get=jy,lr.prototype.has=Ny,lr.prototype.set=Dy;function cr(r){var s=-1,c=r==null?0:r.length;for(this.clear();++s<c;){var h=r[s];this.set(h[0],h[1])}}function Uy(){this.size=0,this.__data__={hash:new ii,map:new(Ss||lr),string:new ii}}function Fy(r){var s=ra(this,r).delete(r);return this.size-=s?1:0,s}function zy(r){return ra(this,r).get(r)}function Hy(r){return ra(this,r).has(r)}function Wy(r,s){var c=ra(this,r),h=c.size;return c.set(r,s),this.size+=c.size==h?0:1,this}cr.prototype.clear=Uy,cr.prototype.delete=Fy,cr.prototype.get=zy,cr.prototype.has=Hy,cr.prototype.set=Wy;function si(r){var s=-1,c=r==null?0:r.length;for(this.__data__=new cr;++s<c;)this.add(r[s])}function qy(r){return this.__data__.set(r,d),this}function Zy(r){return this.__data__.has(r)}si.prototype.add=si.prototype.push=qy,si.prototype.has=Zy;function An(r){var s=this.__data__=new lr(r);this.size=s.size}function Ky(){this.__data__=new lr,this.size=0}function Vy(r){var s=this.__data__,c=s.delete(r);return this.size=s.size,c}function Gy(r){return this.__data__.get(r)}function Qy(r){return this.__data__.has(r)}function Yy(r,s){var c=this.__data__;if(c instanceof lr){var h=c.__data__;if(!Ss||h.length<o-1)return h.push([r,s]),this.size=++c.size,this;c=this.__data__=new cr(h)}return c.set(r,s),this.size=c.size,this}An.prototype.clear=Ky,An.prototype.delete=Vy,An.prototype.get=Gy,An.prototype.has=Qy,An.prototype.set=Yy;function Qf(r,s){var c=Oe(r),h=!c&&ui(r),m=!c&&!h&&Mr(r),_=!c&&!h&&!m&&Zi(r),T=c||h||m||_,R=T?Jl(r.length,ay):[],P=R.length;for(var W in r)(s||Xe.call(r,W))&&!(T&&(W=="length"||m&&(W=="offset"||W=="parent")||_&&(W=="buffer"||W=="byteLength"||W=="byteOffset")||hr(W,P)))&&R.push(W);return R}function Yf(r){var s=r.length;return s?r[gc(0,s-1)]:n}function Jy(r,s){return ia(qt(r),oi(s,0,r.length))}function Xy(r){return ia(qt(r))}function sc(r,s,c){(c!==n&&!Rn(r[s],c)||c===n&&!(s in r))&&ur(r,s,c)}function Is(r,s,c){var h=r[s];(!(Xe.call(r,s)&&Rn(h,c))||c===n&&!(s in r))&&ur(r,s,c)}function qo(r,s){for(var c=r.length;c--;)if(Rn(r[c][0],s))return c;return-1}function eb(r,s,c,h){return Ir(r,function(m,_,T){s(h,m,c(m),T)}),h}function Jf(r,s){return r&&Wn(s,$t(s),r)}function tb(r,s){return r&&Wn(s,Kt(s),r)}function ur(r,s,c){s=="__proto__"&&Do?Do(r,s,{configurable:!0,enumerable:!0,value:c,writable:!0}):r[s]=c}function oc(r,s){for(var c=-1,h=s.length,m=U(h),_=r==null;++c<h;)m[c]=_?n:Uc(r,s[c]);return m}function oi(r,s,c){return r===r&&(c!==n&&(r=r<=c?r:c),s!==n&&(r=r>=s?r:s)),r}function pn(r,s,c,h,m,_){var T,R=s&g,P=s&v,W=s&b;if(c&&(T=m?c(r,h,m,_):c(r)),T!==n)return T;if(!ct(r))return r;var q=Oe(r);if(q){if(T=Hb(r),!R)return qt(r,T)}else{var Q=Lt(r),ae=Q==le||Q==V;if(Mr(r))return xh(r,R);if(Q==Bt||Q==ce||ae&&!m){if(T=P||ae?{}:Fh(r),!R)return P?Ob(r,tb(T,r)):Ib(r,Jf(T,r))}else{if(!nt[Q])return m?r:{};T=Wb(r,Q,R)}}_||(_=new An);var ye=_.get(r);if(ye)return ye;_.set(r,T),vp(r)?r.forEach(function(ke){T.add(pn(ke,s,c,ke,r,_))}):pp(r)&&r.forEach(function(ke,ze){T.set(ze,pn(ke,s,c,ze,r,_))});var Ee=W?P?Cc:kc:P?Kt:$t,Be=q?n:Ee(r);return dn(Be||r,function(ke,ze){Be&&(ze=ke,ke=r[ze]),Is(T,ze,pn(ke,s,c,ze,r,_))}),T}function nb(r){var s=$t(r);return function(c){return Xf(c,r,s)}}function Xf(r,s,c){var h=c.length;if(r==null)return!h;for(r=tt(r);h--;){var m=c[h],_=s[m],T=r[m];if(T===n&&!(m in r)||!_(T))return!1}return!0}function eh(r,s,c){if(typeof r!="function")throw new fn(l);return Ns(function(){r.apply(n,c)},s)}function Os(r,s,c,h){var m=-1,_=To,T=!0,R=r.length,P=[],W=s.length;if(!R)return P;c&&(s=at(s,Xt(c))),h?(_=Zl,T=!1):s.length>=o&&(_=ks,T=!1,s=new si(s));e:for(;++m<R;){var q=r[m],Q=c==null?q:c(q);if(q=h||q!==0?q:0,T&&Q===Q){for(var ae=W;ae--;)if(s[ae]===Q)continue e;P.push(q)}else _(s,Q,h)||P.push(q)}return P}var Ir=Sh(Hn),th=Sh(lc,!0);function rb(r,s){var c=!0;return Ir(r,function(h,m,_){return c=!!s(h,m,_),c}),c}function Zo(r,s,c){for(var h=-1,m=r.length;++h<m;){var _=r[h],T=s(_);if(T!=null&&(R===n?T===T&&!tn(T):c(T,R)))var R=T,P=_}return P}function ib(r,s,c,h){var m=r.length;for(c=Pe(c),c<0&&(c=-c>m?0:m+c),h=h===n||h>m?m:Pe(h),h<0&&(h+=m),h=c>h?0:yp(h);c<h;)r[c++]=s;return r}function nh(r,s){var c=[];return Ir(r,function(h,m,_){s(h,m,_)&&c.push(h)}),c}function Tt(r,s,c,h,m){var _=-1,T=r.length;for(c||(c=Zb),m||(m=[]);++_<T;){var R=r[_];s>0&&c(R)?s>1?Tt(R,s-1,c,h,m):Tr(m,R):h||(m[m.length]=R)}return m}var ac=Th(),rh=Th(!0);function Hn(r,s){return r&&ac(r,s,$t)}function lc(r,s){return r&&rh(r,s,$t)}function Ko(r,s){return Sr(s,function(c){return pr(r[c])})}function ai(r,s){s=Lr(s,r);for(var c=0,h=s.length;r!=null&&c<h;)r=r[qn(s[c++])];return c&&c==h?r:n}function ih(r,s,c){var h=s(r);return Oe(r)?h:Tr(h,c(r))}function jt(r){return r==null?r===n?Cr:Fn:ri&&ri in tt(r)?Ub(r):Xb(r)}function cc(r,s){return r>s}function sb(r,s){return r!=null&&Xe.call(r,s)}function ob(r,s){return r!=null&&s in tt(r)}function ab(r,s,c){return r>=Ot(s,c)&&r<_t(s,c)}function uc(r,s,c){for(var h=c?Zl:To,m=r[0].length,_=r.length,T=_,R=U(_),P=1/0,W=[];T--;){var q=r[T];T&&s&&(q=at(q,Xt(s))),P=Ot(q.length,P),R[T]=!c&&(s||m>=120&&q.length>=120)?new si(T&&q):n}q=r[0];var Q=-1,ae=R[0];e:for(;++Q<m&&W.length<P;){var ye=q[Q],Ee=s?s(ye):ye;if(ye=c||ye!==0?ye:0,!(ae?ks(ae,Ee):h(W,Ee,c))){for(T=_;--T;){var Be=R[T];if(!(Be?ks(Be,Ee):h(r[T],Ee,c)))continue e}ae&&ae.push(Ee),W.push(ye)}}return W}function lb(r,s,c,h){return Hn(r,function(m,_,T){s(h,c(m),_,T)}),h}function Ls(r,s,c){s=Lr(s,r),r=qh(r,s);var h=r==null?r:r[qn(vn(s))];return h==null?n:Jt(h,r,c)}function sh(r){return ft(r)&&jt(r)==ce}function cb(r){return ft(r)&&jt(r)==Ht}function ub(r){return ft(r)&&jt(r)==oe}function Ps(r,s,c,h,m){return r===s?!0:r==null||s==null||!ft(r)&&!ft(s)?r!==r&&s!==s:db(r,s,c,h,Ps,m)}function db(r,s,c,h,m,_){var T=Oe(r),R=Oe(s),P=T?be:Lt(r),W=R?be:Lt(s);P=P==ce?Bt:P,W=W==ce?Bt:W;var q=P==Bt,Q=W==Bt,ae=P==W;if(ae&&Mr(r)){if(!Mr(s))return!1;T=!0,q=!1}if(ae&&!q)return _||(_=new An),T||Zi(r)?Nh(r,s,c,h,m,_):Nb(r,s,P,c,h,m,_);if(!(c&w)){var ye=q&&Xe.call(r,"__wrapped__"),Ee=Q&&Xe.call(s,"__wrapped__");if(ye||Ee){var Be=ye?r.value():r,ke=Ee?s.value():s;return _||(_=new An),m(Be,ke,c,h,_)}}return ae?(_||(_=new An),Db(r,s,c,h,m,_)):!1}function fb(r){return ft(r)&&Lt(r)==qe}function dc(r,s,c,h){var m=c.length,_=m,T=!h;if(r==null)return!_;for(r=tt(r);m--;){var R=c[m];if(T&&R[2]?R[1]!==r[R[0]]:!(R[0]in r))return!1}for(;++m<_;){R=c[m];var P=R[0],W=r[P],q=R[1];if(T&&R[2]){if(W===n&&!(P in r))return!1}else{var Q=new An;if(h)var ae=h(W,q,P,r,s,Q);if(!(ae===n?Ps(q,W,w|x,h,Q):ae))return!1}}return!0}function oh(r){if(!ct(r)||Vb(r))return!1;var s=pr(r)?fy:n2;return s.test(ci(r))}function hb(r){return ft(r)&&jt(r)==$n}function pb(r){return ft(r)&&Lt(r)==Ct}function gb(r){return ft(r)&&ua(r.length)&&!!st[jt(r)]}function ah(r){return typeof r=="function"?r:r==null?Vt:typeof r=="object"?Oe(r)?uh(r[0],r[1]):ch(r):Ap(r)}function fc(r){if(!js(r))return yy(r);var s=[];for(var c in tt(r))Xe.call(r,c)&&c!="constructor"&&s.push(c);return s}function vb(r){if(!ct(r))return Jb(r);var s=js(r),c=[];for(var h in r)h=="constructor"&&(s||!Xe.call(r,h))||c.push(h);return c}function hc(r,s){return r<s}function lh(r,s){var c=-1,h=Zt(r)?U(r.length):[];return Ir(r,function(m,_,T){h[++c]=s(m,_,T)}),h}function ch(r){var s=Tc(r);return s.length==1&&s[0][2]?Hh(s[0][0],s[0][1]):function(c){return c===r||dc(c,r,s)}}function uh(r,s){return Rc(r)&&zh(s)?Hh(qn(r),s):function(c){var h=Uc(c,r);return h===n&&h===s?Fc(c,r):Ps(s,h,w|x)}}function Vo(r,s,c,h,m){r!==s&&ac(s,function(_,T){if(m||(m=new An),ct(_))mb(r,s,T,c,Vo,h,m);else{var R=h?h(Oc(r,T),_,T+"",r,s,m):n;R===n&&(R=_),sc(r,T,R)}},Kt)}function mb(r,s,c,h,m,_,T){var R=Oc(r,c),P=Oc(s,c),W=T.get(P);if(W){sc(r,c,W);return}var q=_?_(R,P,c+"",r,s,T):n,Q=q===n;if(Q){var ae=Oe(P),ye=!ae&&Mr(P),Ee=!ae&&!ye&&Zi(P);q=P,ae||ye||Ee?Oe(R)?q=R:ht(R)?q=qt(R):ye?(Q=!1,q=xh(P,!0)):Ee?(Q=!1,q=$h(P,!0)):q=[]:Ds(P)||ui(P)?(q=R,ui(R)?q=bp(R):(!ct(R)||pr(R))&&(q=Fh(P))):Q=!1}Q&&(T.set(P,q),m(q,P,h,_,T),T.delete(P)),sc(r,c,q)}function dh(r,s){var c=r.length;if(c)return s+=s<0?c:0,hr(s,c)?r[s]:n}function fh(r,s,c){s.length?s=at(s,function(_){return Oe(_)?function(T){return ai(T,_.length===1?_[0]:_)}:_}):s=[Vt];var h=-1;s=at(s,Xt(xe()));var m=lh(r,function(_,T,R){var P=at(s,function(W){return W(_)});return{criteria:P,index:++h,value:_}});return W2(m,function(_,T){return Rb(_,T,c)})}function yb(r,s){return hh(r,s,function(c,h){return Fc(r,h)})}function hh(r,s,c){for(var h=-1,m=s.length,_={};++h<m;){var T=s[h],R=ai(r,T);c(R,T)&&Ms(_,Lr(T,r),R)}return _}function bb(r){return function(s){return ai(s,r)}}function pc(r,s,c,h){var m=h?H2:Mi,_=-1,T=s.length,R=r;for(r===s&&(s=qt(s)),c&&(R=at(r,Xt(c)));++_<T;)for(var P=0,W=s[_],q=c?c(W):W;(P=m(R,q,P,h))>-1;)R!==r&&No.call(R,P,1),No.call(r,P,1);return r}function ph(r,s){for(var c=r?s.length:0,h=c-1;c--;){var m=s[c];if(c==h||m!==_){var _=m;hr(m)?No.call(r,m,1):yc(r,m)}}return r}function gc(r,s){return r+Fo(Vf()*(s-r+1))}function _b(r,s,c,h){for(var m=-1,_=_t(Uo((s-r)/(c||1)),0),T=U(_);_--;)T[h?_:++m]=r,r+=c;return T}function vc(r,s){var c="";if(!r||s<1||s>F)return c;do s%2&&(c+=r),s=Fo(s/2),s&&(r+=r);while(s);return c}function De(r,s){return Lc(Wh(r,s,Vt),r+"")}function wb(r){return Yf(Ki(r))}function xb(r,s){var c=Ki(r);return ia(c,oi(s,0,c.length))}function Ms(r,s,c,h){if(!ct(r))return r;s=Lr(s,r);for(var m=-1,_=s.length,T=_-1,R=r;R!=null&&++m<_;){var P=qn(s[m]),W=c;if(P==="__proto__"||P==="constructor"||P==="prototype")return r;if(m!=T){var q=R[P];W=h?h(q,P,R):n,W===n&&(W=ct(q)?q:hr(s[m+1])?[]:{})}Is(R,P,W),R=R[P]}return r}var gh=zo?function(r,s){return zo.set(r,s),r}:Vt,$b=Do?function(r,s){return Do(r,"toString",{configurable:!0,enumerable:!1,value:Hc(s),writable:!0})}:Vt;function Eb(r){return ia(Ki(r))}function gn(r,s,c){var h=-1,m=r.length;s<0&&(s=-s>m?0:m+s),c=c>m?m:c,c<0&&(c+=m),m=s>c?0:c-s>>>0,s>>>=0;for(var _=U(m);++h<m;)_[h]=r[h+s];return _}function kb(r,s){var c;return Ir(r,function(h,m,_){return c=s(h,m,_),!c}),!!c}function Go(r,s,c){var h=0,m=r==null?h:r.length;if(typeof s=="number"&&s===s&&m<=Ke){for(;h<m;){var _=h+m>>>1,T=r[_];T!==null&&!tn(T)&&(c?T<=s:T<s)?h=_+1:m=_}return m}return mc(r,s,Vt,c)}function mc(r,s,c,h){var m=0,_=r==null?0:r.length;if(_===0)return 0;s=c(s);for(var T=s!==s,R=s===null,P=tn(s),W=s===n;m<_;){var q=Fo((m+_)/2),Q=c(r[q]),ae=Q!==n,ye=Q===null,Ee=Q===Q,Be=tn(Q);if(T)var ke=h||Ee;else W?ke=Ee&&(h||ae):R?ke=Ee&&ae&&(h||!ye):P?ke=Ee&&ae&&!ye&&(h||!Be):ye||Be?ke=!1:ke=h?Q<=s:Q<s;ke?m=q+1:_=q}return Ot(_,_e)}function vh(r,s){for(var c=-1,h=r.length,m=0,_=[];++c<h;){var T=r[c],R=s?s(T):T;if(!c||!Rn(R,P)){var P=R;_[m++]=T===0?0:T}}return _}function mh(r){return typeof r=="number"?r:tn(r)?fe:+r}function en(r){if(typeof r=="string")return r;if(Oe(r))return at(r,en)+"";if(tn(r))return Gf?Gf.call(r):"";var s=r+"";return s=="0"&&1/r==-X?"-0":s}function Or(r,s,c){var h=-1,m=To,_=r.length,T=!0,R=[],P=R;if(c)T=!1,m=Zl;else if(_>=o){var W=s?null:Bb(r);if(W)return Ro(W);T=!1,m=ks,P=new si}else P=s?[]:R;e:for(;++h<_;){var q=r[h],Q=s?s(q):q;if(q=c||q!==0?q:0,T&&Q===Q){for(var ae=P.length;ae--;)if(P[ae]===Q)continue e;s&&P.push(Q),R.push(q)}else m(P,Q,c)||(P!==R&&P.push(Q),R.push(q))}return R}function yc(r,s){return s=Lr(s,r),r=qh(r,s),r==null||delete r[qn(vn(s))]}function yh(r,s,c,h){return Ms(r,s,c(ai(r,s)),h)}function Qo(r,s,c,h){for(var m=r.length,_=h?m:-1;(h?_--:++_<m)&&s(r[_],_,r););return c?gn(r,h?0:_,h?_+1:m):gn(r,h?_+1:0,h?m:_)}function bh(r,s){var c=r;return c instanceof We&&(c=c.value()),Kl(s,function(h,m){return m.func.apply(m.thisArg,Tr([h],m.args))},c)}function bc(r,s,c){var h=r.length;if(h<2)return h?Or(r[0]):[];for(var m=-1,_=U(h);++m<h;)for(var T=r[m],R=-1;++R<h;)R!=m&&(_[m]=Os(_[m]||T,r[R],s,c));return Or(Tt(_,1),s,c)}function _h(r,s,c){for(var h=-1,m=r.length,_=s.length,T={};++h<m;){var R=h<_?s[h]:n;c(T,r[h],R)}return T}function _c(r){return ht(r)?r:[]}function wc(r){return typeof r=="function"?r:Vt}function Lr(r,s){return Oe(r)?r:Rc(r,s)?[r]:Gh(Je(r))}var Cb=De;function Pr(r,s,c){var h=r.length;return c=c===n?h:c,!s&&c>=h?r:gn(r,s,c)}var wh=hy||function(r){return St.clearTimeout(r)};function xh(r,s){if(s)return r.slice();var c=r.length,h=Hf?Hf(c):new r.constructor(c);return r.copy(h),h}function xc(r){var s=new r.constructor(r.byteLength);return new Bo(s).set(new Bo(r)),s}function Sb(r,s){var c=s?xc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.byteLength)}function Tb(r){var s=new r.constructor(r.source,sf.exec(r));return s.lastIndex=r.lastIndex,s}function Ab(r){return Rs?tt(Rs.call(r)):{}}function $h(r,s){var c=s?xc(r.buffer):r.buffer;return new r.constructor(c,r.byteOffset,r.length)}function Eh(r,s){if(r!==s){var c=r!==n,h=r===null,m=r===r,_=tn(r),T=s!==n,R=s===null,P=s===s,W=tn(s);if(!R&&!W&&!_&&r>s||_&&T&&P&&!R&&!W||h&&T&&P||!c&&P||!m)return 1;if(!h&&!_&&!W&&r<s||W&&c&&m&&!h&&!_||R&&c&&m||!T&&m||!P)return-1}return 0}function Rb(r,s,c){for(var h=-1,m=r.criteria,_=s.criteria,T=m.length,R=c.length;++h<T;){var P=Eh(m[h],_[h]);if(P){if(h>=R)return P;var W=c[h];return P*(W=="desc"?-1:1)}}return r.index-s.index}function kh(r,s,c,h){for(var m=-1,_=r.length,T=c.length,R=-1,P=s.length,W=_t(_-T,0),q=U(P+W),Q=!h;++R<P;)q[R]=s[R];for(;++m<T;)(Q||m<_)&&(q[c[m]]=r[m]);for(;W--;)q[R++]=r[m++];return q}function Ch(r,s,c,h){for(var m=-1,_=r.length,T=-1,R=c.length,P=-1,W=s.length,q=_t(_-R,0),Q=U(q+W),ae=!h;++m<q;)Q[m]=r[m];for(var ye=m;++P<W;)Q[ye+P]=s[P];for(;++T<R;)(ae||m<_)&&(Q[ye+c[T]]=r[m++]);return Q}function qt(r,s){var c=-1,h=r.length;for(s||(s=U(h));++c<h;)s[c]=r[c];return s}function Wn(r,s,c,h){var m=!c;c||(c={});for(var _=-1,T=s.length;++_<T;){var R=s[_],P=h?h(c[R],r[R],R,c,r):n;P===n&&(P=r[R]),m?ur(c,R,P):Is(c,R,P)}return c}function Ib(r,s){return Wn(r,Ac(r),s)}function Ob(r,s){return Wn(r,Dh(r),s)}function Yo(r,s){return function(c,h){var m=Oe(c)?j2:eb,_=s?s():{};return m(c,r,xe(h,2),_)}}function Hi(r){return De(function(s,c){var h=-1,m=c.length,_=m>1?c[m-1]:n,T=m>2?c[2]:n;for(_=r.length>3&&typeof _=="function"?(m--,_):n,T&&Nt(c[0],c[1],T)&&(_=m<3?n:_,m=1),s=tt(s);++h<m;){var R=c[h];R&&r(s,R,h,_)}return s})}function Sh(r,s){return function(c,h){if(c==null)return c;if(!Zt(c))return r(c,h);for(var m=c.length,_=s?m:-1,T=tt(c);(s?_--:++_<m)&&h(T[_],_,T)!==!1;);return c}}function Th(r){return function(s,c,h){for(var m=-1,_=tt(s),T=h(s),R=T.length;R--;){var P=T[r?R:++m];if(c(_[P],P,_)===!1)break}return s}}function Lb(r,s,c){var h=s&$,m=Bs(r);function _(){var T=this&&this!==St&&this instanceof _?m:r;return T.apply(h?c:this,arguments)}return _}function Ah(r){return function(s){s=Je(s);var c=Bi(s)?Tn(s):n,h=c?c[0]:s.charAt(0),m=c?Pr(c,1).join(""):s.slice(1);return h[r]()+m}}function Wi(r){return function(s){return Kl(Sp(Cp(s).replace($2,"")),r,"")}}function Bs(r){return function(){var s=arguments;switch(s.length){case 0:return new r;case 1:return new r(s[0]);case 2:return new r(s[0],s[1]);case 3:return new r(s[0],s[1],s[2]);case 4:return new r(s[0],s[1],s[2],s[3]);case 5:return new r(s[0],s[1],s[2],s[3],s[4]);case 6:return new r(s[0],s[1],s[2],s[3],s[4],s[5]);case 7:return new r(s[0],s[1],s[2],s[3],s[4],s[5],s[6])}var c=zi(r.prototype),h=r.apply(c,s);return ct(h)?h:c}}function Pb(r,s,c){var h=Bs(r);function m(){for(var _=arguments.length,T=U(_),R=_,P=qi(m);R--;)T[R]=arguments[R];var W=_<3&&T[0]!==P&&T[_-1]!==P?[]:Ar(T,P);if(_-=W.length,_<c)return Ph(r,s,Jo,m.placeholder,n,T,W,n,n,c-_);var q=this&&this!==St&&this instanceof m?h:r;return Jt(q,this,T)}return m}function Rh(r){return function(s,c,h){var m=tt(s);if(!Zt(s)){var _=xe(c,3);s=$t(s),c=function(R){return _(m[R],R,m)}}var T=r(s,c,h);return T>-1?m[_?s[T]:T]:n}}function Ih(r){return fr(function(s){var c=s.length,h=c,m=hn.prototype.thru;for(r&&s.reverse();h--;){var _=s[h];if(typeof _!="function")throw new fn(l);if(m&&!T&&na(_)=="wrapper")var T=new hn([],!0)}for(h=T?h:c;++h<c;){_=s[h];var R=na(_),P=R=="wrapper"?Sc(_):n;P&&Ic(P[0])&&P[1]==(D|C|O|j)&&!P[4].length&&P[9]==1?T=T[na(P[0])].apply(T,P[3]):T=_.length==1&&Ic(_)?T[R]():T.thru(_)}return function(){var W=arguments,q=W[0];if(T&&W.length==1&&Oe(q))return T.plant(q).value();for(var Q=0,ae=c?s[Q].apply(this,W):q;++Q<c;)ae=s[Q].call(this,ae);return ae}})}function Jo(r,s,c,h,m,_,T,R,P,W){var q=s&D,Q=s&$,ae=s&S,ye=s&(C|I),Ee=s&K,Be=ae?n:Bs(r);function ke(){for(var ze=arguments.length,Ze=U(ze),nn=ze;nn--;)Ze[nn]=arguments[nn];if(ye)var Dt=qi(ke),rn=Z2(Ze,Dt);if(h&&(Ze=kh(Ze,h,m,ye)),_&&(Ze=Ch(Ze,_,T,ye)),ze-=rn,ye&&ze<W){var pt=Ar(Ze,Dt);return Ph(r,s,Jo,ke.placeholder,c,Ze,pt,R,P,W-ze)}var In=Q?c:this,vr=ae?In[r]:r;return ze=Ze.length,R?Ze=e_(Ze,R):Ee&&ze>1&&Ze.reverse(),q&&P<ze&&(Ze.length=P),this&&this!==St&&this instanceof ke&&(vr=Be||Bs(vr)),vr.apply(In,Ze)}return ke}function Oh(r,s){return function(c,h){return lb(c,r,s(h),{})}}function Xo(r,s){return function(c,h){var m;if(c===n&&h===n)return s;if(c!==n&&(m=c),h!==n){if(m===n)return h;typeof c=="string"||typeof h=="string"?(c=en(c),h=en(h)):(c=mh(c),h=mh(h)),m=r(c,h)}return m}}function $c(r){return fr(function(s){return s=at(s,Xt(xe())),De(function(c){var h=this;return r(s,function(m){return Jt(m,h,c)})})})}function ea(r,s){s=s===n?" ":en(s);var c=s.length;if(c<2)return c?vc(s,r):s;var h=vc(s,Uo(r/ji(s)));return Bi(s)?Pr(Tn(h),0,r).join(""):h.slice(0,r)}function Mb(r,s,c,h){var m=s&$,_=Bs(r);function T(){for(var R=-1,P=arguments.length,W=-1,q=h.length,Q=U(q+P),ae=this&&this!==St&&this instanceof T?_:r;++W<q;)Q[W]=h[W];for(;P--;)Q[W++]=arguments[++R];return Jt(ae,m?c:this,Q)}return T}function Lh(r){return function(s,c,h){return h&&typeof h!="number"&&Nt(s,c,h)&&(c=h=n),s=gr(s),c===n?(c=s,s=0):c=gr(c),h=h===n?s<c?1:-1:gr(h),_b(s,c,h,r)}}function ta(r){return function(s,c){return typeof s=="string"&&typeof c=="string"||(s=mn(s),c=mn(c)),r(s,c)}}function Ph(r,s,c,h,m,_,T,R,P,W){var q=s&C,Q=q?T:n,ae=q?n:T,ye=q?_:n,Ee=q?n:_;s|=q?O:A,s&=~(q?A:O),s&M||(s&=~($|S));var Be=[r,s,m,ye,Q,Ee,ae,R,P,W],ke=c.apply(n,Be);return Ic(r)&&Zh(ke,Be),ke.placeholder=h,Kh(ke,r,s)}function Ec(r){var s=bt[r];return function(c,h){if(c=mn(c),h=h==null?0:Ot(Pe(h),292),h&&Kf(c)){var m=(Je(c)+"e").split("e"),_=s(m[0]+"e"+(+m[1]+h));return m=(Je(_)+"e").split("e"),+(m[0]+"e"+(+m[1]-h))}return s(c)}}var Bb=Ui&&1/Ro(new Ui([,-0]))[1]==X?function(r){return new Ui(r)}:Zc;function Mh(r){return function(s){var c=Lt(s);return c==qe?ec(s):c==Ct?X2(s):q2(s,r(s))}}function dr(r,s,c,h,m,_,T,R){var P=s&S;if(!P&&typeof r!="function")throw new fn(l);var W=h?h.length:0;if(W||(s&=~(O|A),h=m=n),T=T===n?T:_t(Pe(T),0),R=R===n?R:Pe(R),W-=m?m.length:0,s&A){var q=h,Q=m;h=m=n}var ae=P?n:Sc(r),ye=[r,s,c,h,m,q,Q,_,T,R];if(ae&&Yb(ye,ae),r=ye[0],s=ye[1],c=ye[2],h=ye[3],m=ye[4],R=ye[9]=ye[9]===n?P?0:r.length:_t(ye[9]-W,0),!R&&s&(C|I)&&(s&=~(C|I)),!s||s==$)var Ee=Lb(r,s,c);else s==C||s==I?Ee=Pb(r,s,R):(s==O||s==($|O))&&!m.length?Ee=Mb(r,s,c,h):Ee=Jo.apply(n,ye);var Be=ae?gh:Zh;return Kh(Be(Ee,ye),r,s)}function Bh(r,s,c,h){return r===n||Rn(r,Di[c])&&!Xe.call(h,c)?s:r}function jh(r,s,c,h,m,_){return ct(r)&&ct(s)&&(_.set(s,r),Vo(r,s,n,jh,_),_.delete(s)),r}function jb(r){return Ds(r)?n:r}function Nh(r,s,c,h,m,_){var T=c&w,R=r.length,P=s.length;if(R!=P&&!(T&&P>R))return!1;var W=_.get(r),q=_.get(s);if(W&&q)return W==s&&q==r;var Q=-1,ae=!0,ye=c&x?new si:n;for(_.set(r,s),_.set(s,r);++Q<R;){var Ee=r[Q],Be=s[Q];if(h)var ke=T?h(Be,Ee,Q,s,r,_):h(Ee,Be,Q,r,s,_);if(ke!==n){if(ke)continue;ae=!1;break}if(ye){if(!Vl(s,function(ze,Ze){if(!ks(ye,Ze)&&(Ee===ze||m(Ee,ze,c,h,_)))return ye.push(Ze)})){ae=!1;break}}else if(!(Ee===Be||m(Ee,Be,c,h,_))){ae=!1;break}}return _.delete(r),_.delete(s),ae}function Nb(r,s,c,h,m,_,T){switch(c){case Wt:if(r.byteLength!=s.byteLength||r.byteOffset!=s.byteOffset)return!1;r=r.buffer,s=s.buffer;case Ht:return!(r.byteLength!=s.byteLength||!_(new Bo(r),new Bo(s)));case ie:case oe:case xt:return Rn(+r,+s);case Ve:return r.name==s.name&&r.message==s.message;case $n:case Yt:return r==s+"";case qe:var R=ec;case Ct:var P=h&w;if(R||(R=Ro),r.size!=s.size&&!P)return!1;var W=T.get(r);if(W)return W==s;h|=x,T.set(r,s);var q=Nh(R(r),R(s),h,m,_,T);return T.delete(r),q;case zn:if(Rs)return Rs.call(r)==Rs.call(s)}return!1}function Db(r,s,c,h,m,_){var T=c&w,R=kc(r),P=R.length,W=kc(s),q=W.length;if(P!=q&&!T)return!1;for(var Q=P;Q--;){var ae=R[Q];if(!(T?ae in s:Xe.call(s,ae)))return!1}var ye=_.get(r),Ee=_.get(s);if(ye&&Ee)return ye==s&&Ee==r;var Be=!0;_.set(r,s),_.set(s,r);for(var ke=T;++Q<P;){ae=R[Q];var ze=r[ae],Ze=s[ae];if(h)var nn=T?h(Ze,ze,ae,s,r,_):h(ze,Ze,ae,r,s,_);if(!(nn===n?ze===Ze||m(ze,Ze,c,h,_):nn)){Be=!1;break}ke||(ke=ae=="constructor")}if(Be&&!ke){var Dt=r.constructor,rn=s.constructor;Dt!=rn&&"constructor"in r&&"constructor"in s&&!(typeof Dt=="function"&&Dt instanceof Dt&&typeof rn=="function"&&rn instanceof rn)&&(Be=!1)}return _.delete(r),_.delete(s),Be}function fr(r){return Lc(Wh(r,n,Xh),r+"")}function kc(r){return ih(r,$t,Ac)}function Cc(r){return ih(r,Kt,Dh)}var Sc=zo?function(r){return zo.get(r)}:Zc;function na(r){for(var s=r.name+"",c=Fi[s],h=Xe.call(Fi,s)?c.length:0;h--;){var m=c[h],_=m.func;if(_==null||_==r)return m.name}return s}function qi(r){var s=Xe.call(y,"placeholder")?y:r;return s.placeholder}function xe(){var r=y.iteratee||Wc;return r=r===Wc?ah:r,arguments.length?r(arguments[0],arguments[1]):r}function ra(r,s){var c=r.__data__;return Kb(s)?c[typeof s=="string"?"string":"hash"]:c.map}function Tc(r){for(var s=$t(r),c=s.length;c--;){var h=s[c],m=r[h];s[c]=[h,m,zh(m)]}return s}function li(r,s){var c=Q2(r,s);return oh(c)?c:n}function Ub(r){var s=Xe.call(r,ri),c=r[ri];try{r[ri]=n;var h=!0}catch{}var m=Po.call(r);return h&&(s?r[ri]=c:delete r[ri]),m}var Ac=nc?function(r){return r==null?[]:(r=tt(r),Sr(nc(r),function(s){return qf.call(r,s)}))}:Kc,Dh=nc?function(r){for(var s=[];r;)Tr(s,Ac(r)),r=jo(r);return s}:Kc,Lt=jt;(rc&&Lt(new rc(new ArrayBuffer(1)))!=Wt||Ss&&Lt(new Ss)!=qe||ic&&Lt(ic.resolve())!=xn||Ui&&Lt(new Ui)!=Ct||Ts&&Lt(new Ts)!=En)&&(Lt=function(r){var s=jt(r),c=s==Bt?r.constructor:n,h=c?ci(c):"";if(h)switch(h){case xy:return Wt;case $y:return qe;case Ey:return xn;case ky:return Ct;case Cy:return En}return s});function Fb(r,s,c){for(var h=-1,m=c.length;++h<m;){var _=c[h],T=_.size;switch(_.type){case"drop":r+=T;break;case"dropRight":s-=T;break;case"take":s=Ot(s,r+T);break;case"takeRight":r=_t(r,s-T);break}}return{start:r,end:s}}function zb(r){var s=r.match(Vm);return s?s[1].split(Gm):[]}function Uh(r,s,c){s=Lr(s,r);for(var h=-1,m=s.length,_=!1;++h<m;){var T=qn(s[h]);if(!(_=r!=null&&c(r,T)))break;r=r[T]}return _||++h!=m?_:(m=r==null?0:r.length,!!m&&ua(m)&&hr(T,m)&&(Oe(r)||ui(r)))}function Hb(r){var s=r.length,c=new r.constructor(s);return s&&typeof r[0]=="string"&&Xe.call(r,"index")&&(c.index=r.index,c.input=r.input),c}function Fh(r){return typeof r.constructor=="function"&&!js(r)?zi(jo(r)):{}}function Wb(r,s,c){var h=r.constructor;switch(s){case Ht:return xc(r);case ie:case oe:return new h(+r);case Wt:return Sb(r,c);case kn:case Cn:case ln:case cn:case Sn:case sr:case or:case ar:case Li:return $h(r,c);case qe:return new h;case xt:case Yt:return new h(r);case $n:return Tb(r);case Ct:return new h;case zn:return Ab(r)}}function qb(r,s){var c=s.length;if(!c)return r;var h=c-1;return s[h]=(c>1?"& ":"")+s[h],s=s.join(c>2?", ":" "),r.replace(Km,`{
/* [wrapped with `+s+`] */
`)}function Zb(r){return Oe(r)||ui(r)||!!(Zf&&r&&r[Zf])}function hr(r,s){var c=typeof r;return s=s??F,!!s&&(c=="number"||c!="symbol"&&i2.test(r))&&r>-1&&r%1==0&&r<s}function Nt(r,s,c){if(!ct(c))return!1;var h=typeof s;return(h=="number"?Zt(c)&&hr(s,c.length):h=="string"&&s in c)?Rn(c[s],r):!1}function Rc(r,s){if(Oe(r))return!1;var c=typeof r;return c=="number"||c=="symbol"||c=="boolean"||r==null||tn(r)?!0:Hm.test(r)||!zm.test(r)||s!=null&&r in tt(s)}function Kb(r){var s=typeof r;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?r!=="__proto__":r===null}function Ic(r){var s=na(r),c=y[s];if(typeof c!="function"||!(s in We.prototype))return!1;if(r===c)return!0;var h=Sc(c);return!!h&&r===h[0]}function Vb(r){return!!zf&&zf in r}var Gb=Oo?pr:Vc;function js(r){var s=r&&r.constructor,c=typeof s=="function"&&s.prototype||Di;return r===c}function zh(r){return r===r&&!ct(r)}function Hh(r,s){return function(c){return c==null?!1:c[r]===s&&(s!==n||r in tt(c))}}function Qb(r){var s=la(r,function(h){return c.size===f&&c.clear(),h}),c=s.cache;return s}function Yb(r,s){var c=r[1],h=s[1],m=c|h,_=m<($|S|D),T=h==D&&c==C||h==D&&c==j&&r[7].length<=s[8]||h==(D|j)&&s[7].length<=s[8]&&c==C;if(!(_||T))return r;h&$&&(r[2]=s[2],m|=c&$?0:M);var R=s[3];if(R){var P=r[3];r[3]=P?kh(P,R,s[4]):R,r[4]=P?Ar(r[3],p):s[4]}return R=s[5],R&&(P=r[5],r[5]=P?Ch(P,R,s[6]):R,r[6]=P?Ar(r[5],p):s[6]),R=s[7],R&&(r[7]=R),h&D&&(r[8]=r[8]==null?s[8]:Ot(r[8],s[8])),r[9]==null&&(r[9]=s[9]),r[0]=s[0],r[1]=m,r}function Jb(r){var s=[];if(r!=null)for(var c in tt(r))s.push(c);return s}function Xb(r){return Po.call(r)}function Wh(r,s,c){return s=_t(s===n?r.length-1:s,0),function(){for(var h=arguments,m=-1,_=_t(h.length-s,0),T=U(_);++m<_;)T[m]=h[s+m];m=-1;for(var R=U(s+1);++m<s;)R[m]=h[m];return R[s]=c(T),Jt(r,this,R)}}function qh(r,s){return s.length<2?r:ai(r,gn(s,0,-1))}function e_(r,s){for(var c=r.length,h=Ot(s.length,c),m=qt(r);h--;){var _=s[h];r[h]=hr(_,c)?m[_]:n}return r}function Oc(r,s){if(!(s==="constructor"&&typeof r[s]=="function")&&s!="__proto__")return r[s]}var Zh=Vh(gh),Ns=gy||function(r,s){return St.setTimeout(r,s)},Lc=Vh($b);function Kh(r,s,c){var h=s+"";return Lc(r,qb(h,t_(zb(h),c)))}function Vh(r){var s=0,c=0;return function(){var h=by(),m=se-(h-c);if(c=h,m>0){if(++s>=re)return arguments[0]}else s=0;return r.apply(n,arguments)}}function ia(r,s){var c=-1,h=r.length,m=h-1;for(s=s===n?h:s;++c<s;){var _=gc(c,m),T=r[_];r[_]=r[c],r[c]=T}return r.length=s,r}var Gh=Qb(function(r){var s=[];return r.charCodeAt(0)===46&&s.push(""),r.replace(Wm,function(c,h,m,_){s.push(m?_.replace(Jm,"$1"):h||c)}),s});function qn(r){if(typeof r=="string"||tn(r))return r;var s=r+"";return s=="0"&&1/r==-X?"-0":s}function ci(r){if(r!=null){try{return Lo.call(r)}catch{}try{return r+""}catch{}}return""}function t_(r,s){return dn(ue,function(c){var h="_."+c[0];s&c[1]&&!To(r,h)&&r.push(h)}),r.sort()}function Qh(r){if(r instanceof We)return r.clone();var s=new hn(r.__wrapped__,r.__chain__);return s.__actions__=qt(r.__actions__),s.__index__=r.__index__,s.__values__=r.__values__,s}function n_(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=_t(Pe(s),0);var h=r==null?0:r.length;if(!h||s<1)return[];for(var m=0,_=0,T=U(Uo(h/s));m<h;)T[_++]=gn(r,m,m+=s);return T}function r_(r){for(var s=-1,c=r==null?0:r.length,h=0,m=[];++s<c;){var _=r[s];_&&(m[h++]=_)}return m}function i_(){var r=arguments.length;if(!r)return[];for(var s=U(r-1),c=arguments[0],h=r;h--;)s[h-1]=arguments[h];return Tr(Oe(c)?qt(c):[c],Tt(s,1))}var s_=De(function(r,s){return ht(r)?Os(r,Tt(s,1,ht,!0)):[]}),o_=De(function(r,s){var c=vn(s);return ht(c)&&(c=n),ht(r)?Os(r,Tt(s,1,ht,!0),xe(c,2)):[]}),a_=De(function(r,s){var c=vn(s);return ht(c)&&(c=n),ht(r)?Os(r,Tt(s,1,ht,!0),n,c):[]});function l_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Pe(s),gn(r,s<0?0:s,h)):[]}function c_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Pe(s),s=h-s,gn(r,0,s<0?0:s)):[]}function u_(r,s){return r&&r.length?Qo(r,xe(s,3),!0,!0):[]}function d_(r,s){return r&&r.length?Qo(r,xe(s,3),!0):[]}function f_(r,s,c,h){var m=r==null?0:r.length;return m?(c&&typeof c!="number"&&Nt(r,s,c)&&(c=0,h=m),ib(r,s,c,h)):[]}function Yh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var m=c==null?0:Pe(c);return m<0&&(m=_t(h+m,0)),Ao(r,xe(s,3),m)}function Jh(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var m=h-1;return c!==n&&(m=Pe(c),m=c<0?_t(h+m,0):Ot(m,h-1)),Ao(r,xe(s,3),m,!0)}function Xh(r){var s=r==null?0:r.length;return s?Tt(r,1):[]}function h_(r){var s=r==null?0:r.length;return s?Tt(r,X):[]}function p_(r,s){var c=r==null?0:r.length;return c?(s=s===n?1:Pe(s),Tt(r,s)):[]}function g_(r){for(var s=-1,c=r==null?0:r.length,h={};++s<c;){var m=r[s];h[m[0]]=m[1]}return h}function ep(r){return r&&r.length?r[0]:n}function v_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var m=c==null?0:Pe(c);return m<0&&(m=_t(h+m,0)),Mi(r,s,m)}function m_(r){var s=r==null?0:r.length;return s?gn(r,0,-1):[]}var y_=De(function(r){var s=at(r,_c);return s.length&&s[0]===r[0]?uc(s):[]}),b_=De(function(r){var s=vn(r),c=at(r,_c);return s===vn(c)?s=n:c.pop(),c.length&&c[0]===r[0]?uc(c,xe(s,2)):[]}),__=De(function(r){var s=vn(r),c=at(r,_c);return s=typeof s=="function"?s:n,s&&c.pop(),c.length&&c[0]===r[0]?uc(c,n,s):[]});function w_(r,s){return r==null?"":my.call(r,s)}function vn(r){var s=r==null?0:r.length;return s?r[s-1]:n}function x_(r,s,c){var h=r==null?0:r.length;if(!h)return-1;var m=h;return c!==n&&(m=Pe(c),m=m<0?_t(h+m,0):Ot(m,h-1)),s===s?ty(r,s,m):Ao(r,Pf,m,!0)}function $_(r,s){return r&&r.length?dh(r,Pe(s)):n}var E_=De(tp);function tp(r,s){return r&&r.length&&s&&s.length?pc(r,s):r}function k_(r,s,c){return r&&r.length&&s&&s.length?pc(r,s,xe(c,2)):r}function C_(r,s,c){return r&&r.length&&s&&s.length?pc(r,s,n,c):r}var S_=fr(function(r,s){var c=r==null?0:r.length,h=oc(r,s);return ph(r,at(s,function(m){return hr(m,c)?+m:m}).sort(Eh)),h});function T_(r,s){var c=[];if(!(r&&r.length))return c;var h=-1,m=[],_=r.length;for(s=xe(s,3);++h<_;){var T=r[h];s(T,h,r)&&(c.push(T),m.push(h))}return ph(r,m),c}function Pc(r){return r==null?r:wy.call(r)}function A_(r,s,c){var h=r==null?0:r.length;return h?(c&&typeof c!="number"&&Nt(r,s,c)?(s=0,c=h):(s=s==null?0:Pe(s),c=c===n?h:Pe(c)),gn(r,s,c)):[]}function R_(r,s){return Go(r,s)}function I_(r,s,c){return mc(r,s,xe(c,2))}function O_(r,s){var c=r==null?0:r.length;if(c){var h=Go(r,s);if(h<c&&Rn(r[h],s))return h}return-1}function L_(r,s){return Go(r,s,!0)}function P_(r,s,c){return mc(r,s,xe(c,2),!0)}function M_(r,s){var c=r==null?0:r.length;if(c){var h=Go(r,s,!0)-1;if(Rn(r[h],s))return h}return-1}function B_(r){return r&&r.length?vh(r):[]}function j_(r,s){return r&&r.length?vh(r,xe(s,2)):[]}function N_(r){var s=r==null?0:r.length;return s?gn(r,1,s):[]}function D_(r,s,c){return r&&r.length?(s=c||s===n?1:Pe(s),gn(r,0,s<0?0:s)):[]}function U_(r,s,c){var h=r==null?0:r.length;return h?(s=c||s===n?1:Pe(s),s=h-s,gn(r,s<0?0:s,h)):[]}function F_(r,s){return r&&r.length?Qo(r,xe(s,3),!1,!0):[]}function z_(r,s){return r&&r.length?Qo(r,xe(s,3)):[]}var H_=De(function(r){return Or(Tt(r,1,ht,!0))}),W_=De(function(r){var s=vn(r);return ht(s)&&(s=n),Or(Tt(r,1,ht,!0),xe(s,2))}),q_=De(function(r){var s=vn(r);return s=typeof s=="function"?s:n,Or(Tt(r,1,ht,!0),n,s)});function Z_(r){return r&&r.length?Or(r):[]}function K_(r,s){return r&&r.length?Or(r,xe(s,2)):[]}function V_(r,s){return s=typeof s=="function"?s:n,r&&r.length?Or(r,n,s):[]}function Mc(r){if(!(r&&r.length))return[];var s=0;return r=Sr(r,function(c){if(ht(c))return s=_t(c.length,s),!0}),Jl(s,function(c){return at(r,Gl(c))})}function np(r,s){if(!(r&&r.length))return[];var c=Mc(r);return s==null?c:at(c,function(h){return Jt(s,n,h)})}var G_=De(function(r,s){return ht(r)?Os(r,s):[]}),Q_=De(function(r){return bc(Sr(r,ht))}),Y_=De(function(r){var s=vn(r);return ht(s)&&(s=n),bc(Sr(r,ht),xe(s,2))}),J_=De(function(r){var s=vn(r);return s=typeof s=="function"?s:n,bc(Sr(r,ht),n,s)}),X_=De(Mc);function ew(r,s){return _h(r||[],s||[],Is)}function tw(r,s){return _h(r||[],s||[],Ms)}var nw=De(function(r){var s=r.length,c=s>1?r[s-1]:n;return c=typeof c=="function"?(r.pop(),c):n,np(r,c)});function rp(r){var s=y(r);return s.__chain__=!0,s}function rw(r,s){return s(r),r}function sa(r,s){return s(r)}var iw=fr(function(r){var s=r.length,c=s?r[0]:0,h=this.__wrapped__,m=function(_){return oc(_,r)};return s>1||this.__actions__.length||!(h instanceof We)||!hr(c)?this.thru(m):(h=h.slice(c,+c+(s?1:0)),h.__actions__.push({func:sa,args:[m],thisArg:n}),new hn(h,this.__chain__).thru(function(_){return s&&!_.length&&_.push(n),_}))});function sw(){return rp(this)}function ow(){return new hn(this.value(),this.__chain__)}function aw(){this.__values__===n&&(this.__values__=mp(this.value()));var r=this.__index__>=this.__values__.length,s=r?n:this.__values__[this.__index__++];return{done:r,value:s}}function lw(){return this}function cw(r){for(var s,c=this;c instanceof Wo;){var h=Qh(c);h.__index__=0,h.__values__=n,s?m.__wrapped__=h:s=h;var m=h;c=c.__wrapped__}return m.__wrapped__=r,s}function uw(){var r=this.__wrapped__;if(r instanceof We){var s=r;return this.__actions__.length&&(s=new We(this)),s=s.reverse(),s.__actions__.push({func:sa,args:[Pc],thisArg:n}),new hn(s,this.__chain__)}return this.thru(Pc)}function dw(){return bh(this.__wrapped__,this.__actions__)}var fw=Yo(function(r,s,c){Xe.call(r,c)?++r[c]:ur(r,c,1)});function hw(r,s,c){var h=Oe(r)?Of:rb;return c&&Nt(r,s,c)&&(s=n),h(r,xe(s,3))}function pw(r,s){var c=Oe(r)?Sr:nh;return c(r,xe(s,3))}var gw=Rh(Yh),vw=Rh(Jh);function mw(r,s){return Tt(oa(r,s),1)}function yw(r,s){return Tt(oa(r,s),X)}function bw(r,s,c){return c=c===n?1:Pe(c),Tt(oa(r,s),c)}function ip(r,s){var c=Oe(r)?dn:Ir;return c(r,xe(s,3))}function sp(r,s){var c=Oe(r)?N2:th;return c(r,xe(s,3))}var _w=Yo(function(r,s,c){Xe.call(r,c)?r[c].push(s):ur(r,c,[s])});function ww(r,s,c,h){r=Zt(r)?r:Ki(r),c=c&&!h?Pe(c):0;var m=r.length;return c<0&&(c=_t(m+c,0)),da(r)?c<=m&&r.indexOf(s,c)>-1:!!m&&Mi(r,s,c)>-1}var xw=De(function(r,s,c){var h=-1,m=typeof s=="function",_=Zt(r)?U(r.length):[];return Ir(r,function(T){_[++h]=m?Jt(s,T,c):Ls(T,s,c)}),_}),$w=Yo(function(r,s,c){ur(r,c,s)});function oa(r,s){var c=Oe(r)?at:lh;return c(r,xe(s,3))}function Ew(r,s,c,h){return r==null?[]:(Oe(s)||(s=s==null?[]:[s]),c=h?n:c,Oe(c)||(c=c==null?[]:[c]),fh(r,s,c))}var kw=Yo(function(r,s,c){r[c?0:1].push(s)},function(){return[[],[]]});function Cw(r,s,c){var h=Oe(r)?Kl:Bf,m=arguments.length<3;return h(r,xe(s,4),c,m,Ir)}function Sw(r,s,c){var h=Oe(r)?D2:Bf,m=arguments.length<3;return h(r,xe(s,4),c,m,th)}function Tw(r,s){var c=Oe(r)?Sr:nh;return c(r,ca(xe(s,3)))}function Aw(r){var s=Oe(r)?Yf:wb;return s(r)}function Rw(r,s,c){(c?Nt(r,s,c):s===n)?s=1:s=Pe(s);var h=Oe(r)?Jy:xb;return h(r,s)}function Iw(r){var s=Oe(r)?Xy:Eb;return s(r)}function Ow(r){if(r==null)return 0;if(Zt(r))return da(r)?ji(r):r.length;var s=Lt(r);return s==qe||s==Ct?r.size:fc(r).length}function Lw(r,s,c){var h=Oe(r)?Vl:kb;return c&&Nt(r,s,c)&&(s=n),h(r,xe(s,3))}var Pw=De(function(r,s){if(r==null)return[];var c=s.length;return c>1&&Nt(r,s[0],s[1])?s=[]:c>2&&Nt(s[0],s[1],s[2])&&(s=[s[0]]),fh(r,Tt(s,1),[])}),aa=py||function(){return St.Date.now()};function Mw(r,s){if(typeof s!="function")throw new fn(l);return r=Pe(r),function(){if(--r<1)return s.apply(this,arguments)}}function op(r,s,c){return s=c?n:s,s=r&&s==null?r.length:s,dr(r,D,n,n,n,n,s)}function ap(r,s){var c;if(typeof s!="function")throw new fn(l);return r=Pe(r),function(){return--r>0&&(c=s.apply(this,arguments)),r<=1&&(s=n),c}}var Bc=De(function(r,s,c){var h=$;if(c.length){var m=Ar(c,qi(Bc));h|=O}return dr(r,h,s,c,m)}),lp=De(function(r,s,c){var h=$|S;if(c.length){var m=Ar(c,qi(lp));h|=O}return dr(s,h,r,c,m)});function cp(r,s,c){s=c?n:s;var h=dr(r,C,n,n,n,n,n,s);return h.placeholder=cp.placeholder,h}function up(r,s,c){s=c?n:s;var h=dr(r,I,n,n,n,n,n,s);return h.placeholder=up.placeholder,h}function dp(r,s,c){var h,m,_,T,R,P,W=0,q=!1,Q=!1,ae=!0;if(typeof r!="function")throw new fn(l);s=mn(s)||0,ct(c)&&(q=!!c.leading,Q="maxWait"in c,_=Q?_t(mn(c.maxWait)||0,s):_,ae="trailing"in c?!!c.trailing:ae);function ye(pt){var In=h,vr=m;return h=m=n,W=pt,T=r.apply(vr,In),T}function Ee(pt){return W=pt,R=Ns(ze,s),q?ye(pt):T}function Be(pt){var In=pt-P,vr=pt-W,Rp=s-In;return Q?Ot(Rp,_-vr):Rp}function ke(pt){var In=pt-P,vr=pt-W;return P===n||In>=s||In<0||Q&&vr>=_}function ze(){var pt=aa();if(ke(pt))return Ze(pt);R=Ns(ze,Be(pt))}function Ze(pt){return R=n,ae&&h?ye(pt):(h=m=n,T)}function nn(){R!==n&&wh(R),W=0,h=P=m=R=n}function Dt(){return R===n?T:Ze(aa())}function rn(){var pt=aa(),In=ke(pt);if(h=arguments,m=this,P=pt,In){if(R===n)return Ee(P);if(Q)return wh(R),R=Ns(ze,s),ye(P)}return R===n&&(R=Ns(ze,s)),T}return rn.cancel=nn,rn.flush=Dt,rn}var Bw=De(function(r,s){return eh(r,1,s)}),jw=De(function(r,s,c){return eh(r,mn(s)||0,c)});function Nw(r){return dr(r,K)}function la(r,s){if(typeof r!="function"||s!=null&&typeof s!="function")throw new fn(l);var c=function(){var h=arguments,m=s?s.apply(this,h):h[0],_=c.cache;if(_.has(m))return _.get(m);var T=r.apply(this,h);return c.cache=_.set(m,T)||_,T};return c.cache=new(la.Cache||cr),c}la.Cache=cr;function ca(r){if(typeof r!="function")throw new fn(l);return function(){var s=arguments;switch(s.length){case 0:return!r.call(this);case 1:return!r.call(this,s[0]);case 2:return!r.call(this,s[0],s[1]);case 3:return!r.call(this,s[0],s[1],s[2])}return!r.apply(this,s)}}function Dw(r){return ap(2,r)}var Uw=Cb(function(r,s){s=s.length==1&&Oe(s[0])?at(s[0],Xt(xe())):at(Tt(s,1),Xt(xe()));var c=s.length;return De(function(h){for(var m=-1,_=Ot(h.length,c);++m<_;)h[m]=s[m].call(this,h[m]);return Jt(r,this,h)})}),jc=De(function(r,s){var c=Ar(s,qi(jc));return dr(r,O,n,s,c)}),fp=De(function(r,s){var c=Ar(s,qi(fp));return dr(r,A,n,s,c)}),Fw=fr(function(r,s){return dr(r,j,n,n,n,s)});function zw(r,s){if(typeof r!="function")throw new fn(l);return s=s===n?s:Pe(s),De(r,s)}function Hw(r,s){if(typeof r!="function")throw new fn(l);return s=s==null?0:_t(Pe(s),0),De(function(c){var h=c[s],m=Pr(c,0,s);return h&&Tr(m,h),Jt(r,this,m)})}function Ww(r,s,c){var h=!0,m=!0;if(typeof r!="function")throw new fn(l);return ct(c)&&(h="leading"in c?!!c.leading:h,m="trailing"in c?!!c.trailing:m),dp(r,s,{leading:h,maxWait:s,trailing:m})}function qw(r){return op(r,1)}function Zw(r,s){return jc(wc(s),r)}function Kw(){if(!arguments.length)return[];var r=arguments[0];return Oe(r)?r:[r]}function Vw(r){return pn(r,b)}function Gw(r,s){return s=typeof s=="function"?s:n,pn(r,b,s)}function Qw(r){return pn(r,g|b)}function Yw(r,s){return s=typeof s=="function"?s:n,pn(r,g|b,s)}function Jw(r,s){return s==null||Xf(r,s,$t(s))}function Rn(r,s){return r===s||r!==r&&s!==s}var Xw=ta(cc),e3=ta(function(r,s){return r>=s}),ui=sh(function(){return arguments}())?sh:function(r){return ft(r)&&Xe.call(r,"callee")&&!qf.call(r,"callee")},Oe=U.isArray,t3=Cf?Xt(Cf):cb;function Zt(r){return r!=null&&ua(r.length)&&!pr(r)}function ht(r){return ft(r)&&Zt(r)}function n3(r){return r===!0||r===!1||ft(r)&&jt(r)==ie}var Mr=vy||Vc,r3=Sf?Xt(Sf):ub;function i3(r){return ft(r)&&r.nodeType===1&&!Ds(r)}function s3(r){if(r==null)return!0;if(Zt(r)&&(Oe(r)||typeof r=="string"||typeof r.splice=="function"||Mr(r)||Zi(r)||ui(r)))return!r.length;var s=Lt(r);if(s==qe||s==Ct)return!r.size;if(js(r))return!fc(r).length;for(var c in r)if(Xe.call(r,c))return!1;return!0}function o3(r,s){return Ps(r,s)}function a3(r,s,c){c=typeof c=="function"?c:n;var h=c?c(r,s):n;return h===n?Ps(r,s,n,c):!!h}function Nc(r){if(!ft(r))return!1;var s=jt(r);return s==Ve||s==Te||typeof r.message=="string"&&typeof r.name=="string"&&!Ds(r)}function l3(r){return typeof r=="number"&&Kf(r)}function pr(r){if(!ct(r))return!1;var s=jt(r);return s==le||s==V||s==Y||s==ti}function hp(r){return typeof r=="number"&&r==Pe(r)}function ua(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=F}function ct(r){var s=typeof r;return r!=null&&(s=="object"||s=="function")}function ft(r){return r!=null&&typeof r=="object"}var pp=Tf?Xt(Tf):fb;function c3(r,s){return r===s||dc(r,s,Tc(s))}function u3(r,s,c){return c=typeof c=="function"?c:n,dc(r,s,Tc(s),c)}function d3(r){return gp(r)&&r!=+r}function f3(r){if(Gb(r))throw new Re(a);return oh(r)}function h3(r){return r===null}function p3(r){return r==null}function gp(r){return typeof r=="number"||ft(r)&&jt(r)==xt}function Ds(r){if(!ft(r)||jt(r)!=Bt)return!1;var s=jo(r);if(s===null)return!0;var c=Xe.call(s,"constructor")&&s.constructor;return typeof c=="function"&&c instanceof c&&Lo.call(c)==uy}var Dc=Af?Xt(Af):hb;function g3(r){return hp(r)&&r>=-F&&r<=F}var vp=Rf?Xt(Rf):pb;function da(r){return typeof r=="string"||!Oe(r)&&ft(r)&&jt(r)==Yt}function tn(r){return typeof r=="symbol"||ft(r)&&jt(r)==zn}var Zi=If?Xt(If):gb;function v3(r){return r===n}function m3(r){return ft(r)&&Lt(r)==En}function y3(r){return ft(r)&&jt(r)==Ae}var b3=ta(hc),_3=ta(function(r,s){return r<=s});function mp(r){if(!r)return[];if(Zt(r))return da(r)?Tn(r):qt(r);if(Cs&&r[Cs])return J2(r[Cs]());var s=Lt(r),c=s==qe?ec:s==Ct?Ro:Ki;return c(r)}function gr(r){if(!r)return r===0?r:0;if(r=mn(r),r===X||r===-X){var s=r<0?-1:1;return s*H}return r===r?r:0}function Pe(r){var s=gr(r),c=s%1;return s===s?c?s-c:s:0}function yp(r){return r?oi(Pe(r),0,he):0}function mn(r){if(typeof r=="number")return r;if(tn(r))return fe;if(ct(r)){var s=typeof r.valueOf=="function"?r.valueOf():r;r=ct(s)?s+"":s}if(typeof r!="string")return r===0?r:+r;r=jf(r);var c=t2.test(r);return c||r2.test(r)?M2(r.slice(2),c?2:8):e2.test(r)?fe:+r}function bp(r){return Wn(r,Kt(r))}function w3(r){return r?oi(Pe(r),-F,F):r===0?r:0}function Je(r){return r==null?"":en(r)}var x3=Hi(function(r,s){if(js(s)||Zt(s)){Wn(s,$t(s),r);return}for(var c in s)Xe.call(s,c)&&Is(r,c,s[c])}),_p=Hi(function(r,s){Wn(s,Kt(s),r)}),fa=Hi(function(r,s,c,h){Wn(s,Kt(s),r,h)}),$3=Hi(function(r,s,c,h){Wn(s,$t(s),r,h)}),E3=fr(oc);function k3(r,s){var c=zi(r);return s==null?c:Jf(c,s)}var C3=De(function(r,s){r=tt(r);var c=-1,h=s.length,m=h>2?s[2]:n;for(m&&Nt(s[0],s[1],m)&&(h=1);++c<h;)for(var _=s[c],T=Kt(_),R=-1,P=T.length;++R<P;){var W=T[R],q=r[W];(q===n||Rn(q,Di[W])&&!Xe.call(r,W))&&(r[W]=_[W])}return r}),S3=De(function(r){return r.push(n,jh),Jt(wp,n,r)});function T3(r,s){return Lf(r,xe(s,3),Hn)}function A3(r,s){return Lf(r,xe(s,3),lc)}function R3(r,s){return r==null?r:ac(r,xe(s,3),Kt)}function I3(r,s){return r==null?r:rh(r,xe(s,3),Kt)}function O3(r,s){return r&&Hn(r,xe(s,3))}function L3(r,s){return r&&lc(r,xe(s,3))}function P3(r){return r==null?[]:Ko(r,$t(r))}function M3(r){return r==null?[]:Ko(r,Kt(r))}function Uc(r,s,c){var h=r==null?n:ai(r,s);return h===n?c:h}function B3(r,s){return r!=null&&Uh(r,s,sb)}function Fc(r,s){return r!=null&&Uh(r,s,ob)}var j3=Oh(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Po.call(s)),r[s]=c},Hc(Vt)),N3=Oh(function(r,s,c){s!=null&&typeof s.toString!="function"&&(s=Po.call(s)),Xe.call(r,s)?r[s].push(c):r[s]=[c]},xe),D3=De(Ls);function $t(r){return Zt(r)?Qf(r):fc(r)}function Kt(r){return Zt(r)?Qf(r,!0):vb(r)}function U3(r,s){var c={};return s=xe(s,3),Hn(r,function(h,m,_){ur(c,s(h,m,_),h)}),c}function F3(r,s){var c={};return s=xe(s,3),Hn(r,function(h,m,_){ur(c,m,s(h,m,_))}),c}var z3=Hi(function(r,s,c){Vo(r,s,c)}),wp=Hi(function(r,s,c,h){Vo(r,s,c,h)}),H3=fr(function(r,s){var c={};if(r==null)return c;var h=!1;s=at(s,function(_){return _=Lr(_,r),h||(h=_.length>1),_}),Wn(r,Cc(r),c),h&&(c=pn(c,g|v|b,jb));for(var m=s.length;m--;)yc(c,s[m]);return c});function W3(r,s){return xp(r,ca(xe(s)))}var q3=fr(function(r,s){return r==null?{}:yb(r,s)});function xp(r,s){if(r==null)return{};var c=at(Cc(r),function(h){return[h]});return s=xe(s),hh(r,c,function(h,m){return s(h,m[0])})}function Z3(r,s,c){s=Lr(s,r);var h=-1,m=s.length;for(m||(m=1,r=n);++h<m;){var _=r==null?n:r[qn(s[h])];_===n&&(h=m,_=c),r=pr(_)?_.call(r):_}return r}function K3(r,s,c){return r==null?r:Ms(r,s,c)}function V3(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:Ms(r,s,c,h)}var $p=Mh($t),Ep=Mh(Kt);function G3(r,s,c){var h=Oe(r),m=h||Mr(r)||Zi(r);if(s=xe(s,4),c==null){var _=r&&r.constructor;m?c=h?new _:[]:ct(r)?c=pr(_)?zi(jo(r)):{}:c={}}return(m?dn:Hn)(r,function(T,R,P){return s(c,T,R,P)}),c}function Q3(r,s){return r==null?!0:yc(r,s)}function Y3(r,s,c){return r==null?r:yh(r,s,wc(c))}function J3(r,s,c,h){return h=typeof h=="function"?h:n,r==null?r:yh(r,s,wc(c),h)}function Ki(r){return r==null?[]:Xl(r,$t(r))}function X3(r){return r==null?[]:Xl(r,Kt(r))}function ex(r,s,c){return c===n&&(c=s,s=n),c!==n&&(c=mn(c),c=c===c?c:0),s!==n&&(s=mn(s),s=s===s?s:0),oi(mn(r),s,c)}function tx(r,s,c){return s=gr(s),c===n?(c=s,s=0):c=gr(c),r=mn(r),ab(r,s,c)}function nx(r,s,c){if(c&&typeof c!="boolean"&&Nt(r,s,c)&&(s=c=n),c===n&&(typeof s=="boolean"?(c=s,s=n):typeof r=="boolean"&&(c=r,r=n)),r===n&&s===n?(r=0,s=1):(r=gr(r),s===n?(s=r,r=0):s=gr(s)),r>s){var h=r;r=s,s=h}if(c||r%1||s%1){var m=Vf();return Ot(r+m*(s-r+P2("1e-"+((m+"").length-1))),s)}return gc(r,s)}var rx=Wi(function(r,s,c){return s=s.toLowerCase(),r+(c?kp(s):s)});function kp(r){return zc(Je(r).toLowerCase())}function Cp(r){return r=Je(r),r&&r.replace(s2,K2).replace(E2,"")}function ix(r,s,c){r=Je(r),s=en(s);var h=r.length;c=c===n?h:oi(Pe(c),0,h);var m=c;return c-=s.length,c>=0&&r.slice(c,m)==s}function sx(r){return r=Je(r),r&&Dm.test(r)?r.replace(nf,V2):r}function ox(r){return r=Je(r),r&&qm.test(r)?r.replace(jl,"\\$&"):r}var ax=Wi(function(r,s,c){return r+(c?"-":"")+s.toLowerCase()}),lx=Wi(function(r,s,c){return r+(c?" ":"")+s.toLowerCase()}),cx=Ah("toLowerCase");function ux(r,s,c){r=Je(r),s=Pe(s);var h=s?ji(r):0;if(!s||h>=s)return r;var m=(s-h)/2;return ea(Fo(m),c)+r+ea(Uo(m),c)}function dx(r,s,c){r=Je(r),s=Pe(s);var h=s?ji(r):0;return s&&h<s?r+ea(s-h,c):r}function fx(r,s,c){r=Je(r),s=Pe(s);var h=s?ji(r):0;return s&&h<s?ea(s-h,c)+r:r}function hx(r,s,c){return c||s==null?s=0:s&&(s=+s),_y(Je(r).replace(Nl,""),s||0)}function px(r,s,c){return(c?Nt(r,s,c):s===n)?s=1:s=Pe(s),vc(Je(r),s)}function gx(){var r=arguments,s=Je(r[0]);return r.length<3?s:s.replace(r[1],r[2])}var vx=Wi(function(r,s,c){return r+(c?"_":"")+s.toLowerCase()});function mx(r,s,c){return c&&typeof c!="number"&&Nt(r,s,c)&&(s=c=n),c=c===n?he:c>>>0,c?(r=Je(r),r&&(typeof s=="string"||s!=null&&!Dc(s))&&(s=en(s),!s&&Bi(r))?Pr(Tn(r),0,c):r.split(s,c)):[]}var yx=Wi(function(r,s,c){return r+(c?" ":"")+zc(s)});function bx(r,s,c){return r=Je(r),c=c==null?0:oi(Pe(c),0,r.length),s=en(s),r.slice(c,c+s.length)==s}function _x(r,s,c){var h=y.templateSettings;c&&Nt(r,s,c)&&(s=n),r=Je(r),s=fa({},s,h,Bh);var m=fa({},s.imports,h.imports,Bh),_=$t(m),T=Xl(m,_),R,P,W=0,q=s.interpolate||ko,Q="__p += '",ae=tc((s.escape||ko).source+"|"+q.source+"|"+(q===rf?Xm:ko).source+"|"+(s.evaluate||ko).source+"|$","g"),ye="//# sourceURL="+(Xe.call(s,"sourceURL")?(s.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++A2+"]")+`
`;r.replace(ae,function(ke,ze,Ze,nn,Dt,rn){return Ze||(Ze=nn),Q+=r.slice(W,rn).replace(o2,G2),ze&&(R=!0,Q+=`' +
__e(`+ze+`) +
'`),Dt&&(P=!0,Q+=`';
`+Dt+`;
__p += '`),Ze&&(Q+=`' +
((__t = (`+Ze+`)) == null ? '' : __t) +
'`),W=rn+ke.length,ke}),Q+=`';
`;var Ee=Xe.call(s,"variable")&&s.variable;if(!Ee)Q=`with (obj) {
`+Q+`
}
`;else if(Ym.test(Ee))throw new Re(u);Q=(P?Q.replace(xo,""):Q).replace($o,"$1").replace(Eo,"$1;"),Q="function("+(Ee||"obj")+`) {
`+(Ee?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(R?", __e = _.escape":"")+(P?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+Q+`return __p
}`;var Be=Tp(function(){return Qe(_,ye+"return "+Q).apply(n,T)});if(Be.source=Q,Nc(Be))throw Be;return Be}function wx(r){return Je(r).toLowerCase()}function xx(r){return Je(r).toUpperCase()}function $x(r,s,c){if(r=Je(r),r&&(c||s===n))return jf(r);if(!r||!(s=en(s)))return r;var h=Tn(r),m=Tn(s),_=Nf(h,m),T=Df(h,m)+1;return Pr(h,_,T).join("")}function Ex(r,s,c){if(r=Je(r),r&&(c||s===n))return r.slice(0,Ff(r)+1);if(!r||!(s=en(s)))return r;var h=Tn(r),m=Df(h,Tn(s))+1;return Pr(h,0,m).join("")}function kx(r,s,c){if(r=Je(r),r&&(c||s===n))return r.replace(Nl,"");if(!r||!(s=en(s)))return r;var h=Tn(r),m=Nf(h,Tn(s));return Pr(h,m).join("")}function Cx(r,s){var c=J,h=ne;if(ct(s)){var m="separator"in s?s.separator:m;c="length"in s?Pe(s.length):c,h="omission"in s?en(s.omission):h}r=Je(r);var _=r.length;if(Bi(r)){var T=Tn(r);_=T.length}if(c>=_)return r;var R=c-ji(h);if(R<1)return h;var P=T?Pr(T,0,R).join(""):r.slice(0,R);if(m===n)return P+h;if(T&&(R+=P.length-R),Dc(m)){if(r.slice(R).search(m)){var W,q=P;for(m.global||(m=tc(m.source,Je(sf.exec(m))+"g")),m.lastIndex=0;W=m.exec(q);)var Q=W.index;P=P.slice(0,Q===n?R:Q)}}else if(r.indexOf(en(m),R)!=R){var ae=P.lastIndexOf(m);ae>-1&&(P=P.slice(0,ae))}return P+h}function Sx(r){return r=Je(r),r&&Nm.test(r)?r.replace(tf,ny):r}var Tx=Wi(function(r,s,c){return r+(c?" ":"")+s.toUpperCase()}),zc=Ah("toUpperCase");function Sp(r,s,c){return r=Je(r),s=c?n:s,s===n?Y2(r)?sy(r):z2(r):r.match(s)||[]}var Tp=De(function(r,s){try{return Jt(r,n,s)}catch(c){return Nc(c)?c:new Re(c)}}),Ax=fr(function(r,s){return dn(s,function(c){c=qn(c),ur(r,c,Bc(r[c],r))}),r});function Rx(r){var s=r==null?0:r.length,c=xe();return r=s?at(r,function(h){if(typeof h[1]!="function")throw new fn(l);return[c(h[0]),h[1]]}):[],De(function(h){for(var m=-1;++m<s;){var _=r[m];if(Jt(_[0],this,h))return Jt(_[1],this,h)}})}function Ix(r){return nb(pn(r,g))}function Hc(r){return function(){return r}}function Ox(r,s){return r==null||r!==r?s:r}var Lx=Ih(),Px=Ih(!0);function Vt(r){return r}function Wc(r){return ah(typeof r=="function"?r:pn(r,g))}function Mx(r){return ch(pn(r,g))}function Bx(r,s){return uh(r,pn(s,g))}var jx=De(function(r,s){return function(c){return Ls(c,r,s)}}),Nx=De(function(r,s){return function(c){return Ls(r,c,s)}});function qc(r,s,c){var h=$t(s),m=Ko(s,h);c==null&&!(ct(s)&&(m.length||!h.length))&&(c=s,s=r,r=this,m=Ko(s,$t(s)));var _=!(ct(c)&&"chain"in c)||!!c.chain,T=pr(r);return dn(m,function(R){var P=s[R];r[R]=P,T&&(r.prototype[R]=function(){var W=this.__chain__;if(_||W){var q=r(this.__wrapped__),Q=q.__actions__=qt(this.__actions__);return Q.push({func:P,args:arguments,thisArg:r}),q.__chain__=W,q}return P.apply(r,Tr([this.value()],arguments))})}),r}function Dx(){return St._===this&&(St._=dy),this}function Zc(){}function Ux(r){return r=Pe(r),De(function(s){return dh(s,r)})}var Fx=$c(at),zx=$c(Of),Hx=$c(Vl);function Ap(r){return Rc(r)?Gl(qn(r)):bb(r)}function Wx(r){return function(s){return r==null?n:ai(r,s)}}var qx=Lh(),Zx=Lh(!0);function Kc(){return[]}function Vc(){return!1}function Kx(){return{}}function Vx(){return""}function Gx(){return!0}function Qx(r,s){if(r=Pe(r),r<1||r>F)return[];var c=he,h=Ot(r,he);s=xe(s),r-=he;for(var m=Jl(h,s);++c<r;)s(c);return m}function Yx(r){return Oe(r)?at(r,qn):tn(r)?[r]:qt(Gh(Je(r)))}function Jx(r){var s=++cy;return Je(r)+s}var Xx=Xo(function(r,s){return r+s},0),e4=Ec("ceil"),t4=Xo(function(r,s){return r/s},1),n4=Ec("floor");function r4(r){return r&&r.length?Zo(r,Vt,cc):n}function i4(r,s){return r&&r.length?Zo(r,xe(s,2),cc):n}function s4(r){return Mf(r,Vt)}function o4(r,s){return Mf(r,xe(s,2))}function a4(r){return r&&r.length?Zo(r,Vt,hc):n}function l4(r,s){return r&&r.length?Zo(r,xe(s,2),hc):n}var c4=Xo(function(r,s){return r*s},1),u4=Ec("round"),d4=Xo(function(r,s){return r-s},0);function f4(r){return r&&r.length?Yl(r,Vt):0}function h4(r,s){return r&&r.length?Yl(r,xe(s,2)):0}return y.after=Mw,y.ary=op,y.assign=x3,y.assignIn=_p,y.assignInWith=fa,y.assignWith=$3,y.at=E3,y.before=ap,y.bind=Bc,y.bindAll=Ax,y.bindKey=lp,y.castArray=Kw,y.chain=rp,y.chunk=n_,y.compact=r_,y.concat=i_,y.cond=Rx,y.conforms=Ix,y.constant=Hc,y.countBy=fw,y.create=k3,y.curry=cp,y.curryRight=up,y.debounce=dp,y.defaults=C3,y.defaultsDeep=S3,y.defer=Bw,y.delay=jw,y.difference=s_,y.differenceBy=o_,y.differenceWith=a_,y.drop=l_,y.dropRight=c_,y.dropRightWhile=u_,y.dropWhile=d_,y.fill=f_,y.filter=pw,y.flatMap=mw,y.flatMapDeep=yw,y.flatMapDepth=bw,y.flatten=Xh,y.flattenDeep=h_,y.flattenDepth=p_,y.flip=Nw,y.flow=Lx,y.flowRight=Px,y.fromPairs=g_,y.functions=P3,y.functionsIn=M3,y.groupBy=_w,y.initial=m_,y.intersection=y_,y.intersectionBy=b_,y.intersectionWith=__,y.invert=j3,y.invertBy=N3,y.invokeMap=xw,y.iteratee=Wc,y.keyBy=$w,y.keys=$t,y.keysIn=Kt,y.map=oa,y.mapKeys=U3,y.mapValues=F3,y.matches=Mx,y.matchesProperty=Bx,y.memoize=la,y.merge=z3,y.mergeWith=wp,y.method=jx,y.methodOf=Nx,y.mixin=qc,y.negate=ca,y.nthArg=Ux,y.omit=H3,y.omitBy=W3,y.once=Dw,y.orderBy=Ew,y.over=Fx,y.overArgs=Uw,y.overEvery=zx,y.overSome=Hx,y.partial=jc,y.partialRight=fp,y.partition=kw,y.pick=q3,y.pickBy=xp,y.property=Ap,y.propertyOf=Wx,y.pull=E_,y.pullAll=tp,y.pullAllBy=k_,y.pullAllWith=C_,y.pullAt=S_,y.range=qx,y.rangeRight=Zx,y.rearg=Fw,y.reject=Tw,y.remove=T_,y.rest=zw,y.reverse=Pc,y.sampleSize=Rw,y.set=K3,y.setWith=V3,y.shuffle=Iw,y.slice=A_,y.sortBy=Pw,y.sortedUniq=B_,y.sortedUniqBy=j_,y.split=mx,y.spread=Hw,y.tail=N_,y.take=D_,y.takeRight=U_,y.takeRightWhile=F_,y.takeWhile=z_,y.tap=rw,y.throttle=Ww,y.thru=sa,y.toArray=mp,y.toPairs=$p,y.toPairsIn=Ep,y.toPath=Yx,y.toPlainObject=bp,y.transform=G3,y.unary=qw,y.union=H_,y.unionBy=W_,y.unionWith=q_,y.uniq=Z_,y.uniqBy=K_,y.uniqWith=V_,y.unset=Q3,y.unzip=Mc,y.unzipWith=np,y.update=Y3,y.updateWith=J3,y.values=Ki,y.valuesIn=X3,y.without=G_,y.words=Sp,y.wrap=Zw,y.xor=Q_,y.xorBy=Y_,y.xorWith=J_,y.zip=X_,y.zipObject=ew,y.zipObjectDeep=tw,y.zipWith=nw,y.entries=$p,y.entriesIn=Ep,y.extend=_p,y.extendWith=fa,qc(y,y),y.add=Xx,y.attempt=Tp,y.camelCase=rx,y.capitalize=kp,y.ceil=e4,y.clamp=ex,y.clone=Vw,y.cloneDeep=Qw,y.cloneDeepWith=Yw,y.cloneWith=Gw,y.conformsTo=Jw,y.deburr=Cp,y.defaultTo=Ox,y.divide=t4,y.endsWith=ix,y.eq=Rn,y.escape=sx,y.escapeRegExp=ox,y.every=hw,y.find=gw,y.findIndex=Yh,y.findKey=T3,y.findLast=vw,y.findLastIndex=Jh,y.findLastKey=A3,y.floor=n4,y.forEach=ip,y.forEachRight=sp,y.forIn=R3,y.forInRight=I3,y.forOwn=O3,y.forOwnRight=L3,y.get=Uc,y.gt=Xw,y.gte=e3,y.has=B3,y.hasIn=Fc,y.head=ep,y.identity=Vt,y.includes=ww,y.indexOf=v_,y.inRange=tx,y.invoke=D3,y.isArguments=ui,y.isArray=Oe,y.isArrayBuffer=t3,y.isArrayLike=Zt,y.isArrayLikeObject=ht,y.isBoolean=n3,y.isBuffer=Mr,y.isDate=r3,y.isElement=i3,y.isEmpty=s3,y.isEqual=o3,y.isEqualWith=a3,y.isError=Nc,y.isFinite=l3,y.isFunction=pr,y.isInteger=hp,y.isLength=ua,y.isMap=pp,y.isMatch=c3,y.isMatchWith=u3,y.isNaN=d3,y.isNative=f3,y.isNil=p3,y.isNull=h3,y.isNumber=gp,y.isObject=ct,y.isObjectLike=ft,y.isPlainObject=Ds,y.isRegExp=Dc,y.isSafeInteger=g3,y.isSet=vp,y.isString=da,y.isSymbol=tn,y.isTypedArray=Zi,y.isUndefined=v3,y.isWeakMap=m3,y.isWeakSet=y3,y.join=w_,y.kebabCase=ax,y.last=vn,y.lastIndexOf=x_,y.lowerCase=lx,y.lowerFirst=cx,y.lt=b3,y.lte=_3,y.max=r4,y.maxBy=i4,y.mean=s4,y.meanBy=o4,y.min=a4,y.minBy=l4,y.stubArray=Kc,y.stubFalse=Vc,y.stubObject=Kx,y.stubString=Vx,y.stubTrue=Gx,y.multiply=c4,y.nth=$_,y.noConflict=Dx,y.noop=Zc,y.now=aa,y.pad=ux,y.padEnd=dx,y.padStart=fx,y.parseInt=hx,y.random=nx,y.reduce=Cw,y.reduceRight=Sw,y.repeat=px,y.replace=gx,y.result=Z3,y.round=u4,y.runInContext=L,y.sample=Aw,y.size=Ow,y.snakeCase=vx,y.some=Lw,y.sortedIndex=R_,y.sortedIndexBy=I_,y.sortedIndexOf=O_,y.sortedLastIndex=L_,y.sortedLastIndexBy=P_,y.sortedLastIndexOf=M_,y.startCase=yx,y.startsWith=bx,y.subtract=d4,y.sum=f4,y.sumBy=h4,y.template=_x,y.times=Qx,y.toFinite=gr,y.toInteger=Pe,y.toLength=yp,y.toLower=wx,y.toNumber=mn,y.toSafeInteger=w3,y.toString=Je,y.toUpper=xx,y.trim=$x,y.trimEnd=Ex,y.trimStart=kx,y.truncate=Cx,y.unescape=Sx,y.uniqueId=Jx,y.upperCase=Tx,y.upperFirst=zc,y.each=ip,y.eachRight=sp,y.first=ep,qc(y,function(){var r={};return Hn(y,function(s,c){Xe.call(y.prototype,c)||(r[c]=s)}),r}(),{chain:!1}),y.VERSION=i,dn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(r){y[r].placeholder=y}),dn(["drop","take"],function(r,s){We.prototype[r]=function(c){c=c===n?1:_t(Pe(c),0);var h=this.__filtered__&&!s?new We(this):this.clone();return h.__filtered__?h.__takeCount__=Ot(c,h.__takeCount__):h.__views__.push({size:Ot(c,he),type:r+(h.__dir__<0?"Right":"")}),h},We.prototype[r+"Right"]=function(c){return this.reverse()[r](c).reverse()}}),dn(["filter","map","takeWhile"],function(r,s){var c=s+1,h=c==ee||c==Z;We.prototype[r]=function(m){var _=this.clone();return _.__iteratees__.push({iteratee:xe(m,3),type:c}),_.__filtered__=_.__filtered__||h,_}}),dn(["head","last"],function(r,s){var c="take"+(s?"Right":"");We.prototype[r]=function(){return this[c](1).value()[0]}}),dn(["initial","tail"],function(r,s){var c="drop"+(s?"":"Right");We.prototype[r]=function(){return this.__filtered__?new We(this):this[c](1)}}),We.prototype.compact=function(){return this.filter(Vt)},We.prototype.find=function(r){return this.filter(r).head()},We.prototype.findLast=function(r){return this.reverse().find(r)},We.prototype.invokeMap=De(function(r,s){return typeof r=="function"?new We(this):this.map(function(c){return Ls(c,r,s)})}),We.prototype.reject=function(r){return this.filter(ca(xe(r)))},We.prototype.slice=function(r,s){r=Pe(r);var c=this;return c.__filtered__&&(r>0||s<0)?new We(c):(r<0?c=c.takeRight(-r):r&&(c=c.drop(r)),s!==n&&(s=Pe(s),c=s<0?c.dropRight(-s):c.take(s-r)),c)},We.prototype.takeRightWhile=function(r){return this.reverse().takeWhile(r).reverse()},We.prototype.toArray=function(){return this.take(he)},Hn(We.prototype,function(r,s){var c=/^(?:filter|find|map|reject)|While$/.test(s),h=/^(?:head|last)$/.test(s),m=y[h?"take"+(s=="last"?"Right":""):s],_=h||/^find/.test(s);m&&(y.prototype[s]=function(){var T=this.__wrapped__,R=h?[1]:arguments,P=T instanceof We,W=R[0],q=P||Oe(T),Q=function(ze){var Ze=m.apply(y,Tr([ze],R));return h&&ae?Ze[0]:Ze};q&&c&&typeof W=="function"&&W.length!=1&&(P=q=!1);var ae=this.__chain__,ye=!!this.__actions__.length,Ee=_&&!ae,Be=P&&!ye;if(!_&&q){T=Be?T:new We(this);var ke=r.apply(T,R);return ke.__actions__.push({func:sa,args:[Q],thisArg:n}),new hn(ke,ae)}return Ee&&Be?r.apply(this,R):(ke=this.thru(Q),Ee?h?ke.value()[0]:ke.value():ke)})}),dn(["pop","push","shift","sort","splice","unshift"],function(r){var s=Io[r],c=/^(?:push|sort|unshift)$/.test(r)?"tap":"thru",h=/^(?:pop|shift)$/.test(r);y.prototype[r]=function(){var m=arguments;if(h&&!this.__chain__){var _=this.value();return s.apply(Oe(_)?_:[],m)}return this[c](function(T){return s.apply(Oe(T)?T:[],m)})}}),Hn(We.prototype,function(r,s){var c=y[s];if(c){var h=c.name+"";Xe.call(Fi,h)||(Fi[h]=[]),Fi[h].push({name:s,func:c})}}),Fi[Jo(n,S).name]=[{name:"wrapper",func:n}],We.prototype.clone=Sy,We.prototype.reverse=Ty,We.prototype.value=Ay,y.prototype.at=iw,y.prototype.chain=sw,y.prototype.commit=ow,y.prototype.next=aw,y.prototype.plant=cw,y.prototype.reverse=uw,y.prototype.toJSON=y.prototype.valueOf=y.prototype.value=dw,y.prototype.first=y.prototype.head,Cs&&(y.prototype[Cs]=lw),y},Ni=oy();ni?((ni.exports=Ni)._=Ni,Wl._=Ni):St._=Ni}).call(wt)})(Da,Da.exports);var W1=Da.exports;const G9=["wss://relay.damus.io","wss://nos.lol","wss://relay.snort.social"],q1=["wss://relay-jp.nostr.wirednet.jp","wss://nostr.holybea.com","wss://r.kojira.io","wss://yabu.me"],Q9=[...q1,"wss://nostr.holybea.com","wss://nostr-relay.nokotaro.com"],dH=["wss://relay.nostr.band","wss://nostrja-kari-nip50.heguro.com","wss://search.nos.today"],Y9=()=>{const t=[];if(window.crypto?.getRandomValues!=null){const o=crypto.getRandomValues(new Uint8Array(16));t.push(...o)}else for(let o=0;o<16;o+=1)t[o]=Math.round(Math.random()*65535)>>8;t[6]=t[6]&15|64,t[8]=t[8]&63|128;const e=String.fromCharCode(...t);return btoa(e).replaceAll("+","-").replaceAll("/","_").replaceAll("=","")},ms=()=>({id:Y9(),width:"medium"}),bd=t=>({...ms(),columnType:"Following",...t}),Z1=t=>({...ms(),columnType:"Notification",...t}),K1=t=>({...ms(),columnType:"Relays",...t}),V1=()=>K1({name:"日本語",relayUrls:q1,contentFilter:{filterType:"Regex",regex:"[\\p{sc=Hiragana}\\p{sc=Katakana}ー]",flag:"u"}}),_d=t=>({...ms(),columnType:"Posts",...t}),G1=t=>({...ms(),columnType:"Reactions",...t}),wd=t=>({...ms(),columnType:"Search",...t});var Ge;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{const a={};for(const l of o)a[l]=l;return a},t.getValidEnumValues=o=>{const a=t.objectKeys(o).filter(u=>typeof o[o[u]]!="number"),l={};for(const u of a)l[u]=o[u];return t.objectValues(l)},t.objectValues=o=>t.objectKeys(o).map(function(a){return o[a]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const a=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push(l);return a},t.find=(o,a)=>{for(const l of o)if(a(l))return l},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,a=" | "){return o.map(l=>typeof l=="string"?`'${l}'`:l).join(a)}t.joinValues=i,t.jsonStringifyReplacer=(o,a)=>typeof a=="bigint"?a.toString():a})(Ge||(Ge={}));var Tu;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Tu||(Tu={}));const de=Ge.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Fr=t=>{switch(typeof t){case"undefined":return de.undefined;case"string":return de.string;case"number":return isNaN(t)?de.nan:de.number;case"boolean":return de.boolean;case"function":return de.function;case"bigint":return de.bigint;case"symbol":return de.symbol;case"object":return Array.isArray(t)?de.array:t===null?de.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?de.promise:typeof Map<"u"&&t instanceof Map?de.map:typeof Set<"u"&&t instanceof Set?de.set:typeof Date<"u"&&t instanceof Date?de.date:de.object;default:return de.unknown}},te=Ge.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),J9=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class Mn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(a){return a.message},i={_errors:[]},o=a=>{for(const l of a.issues)if(l.code==="invalid_union")l.unionErrors.map(o);else if(l.code==="invalid_return_type")o(l.returnTypeError);else if(l.code==="invalid_arguments")o(l.argumentsError);else if(l.path.length===0)i._errors.push(n(l));else{let u=i,d=0;for(;d<l.path.length;){const f=l.path[d];d===l.path.length-1?(u[f]=u[f]||{_errors:[]},u[f]._errors.push(n(l))):u[f]=u[f]||{_errors:[]},u=u[f],d++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Ge.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}Mn.create=t=>new Mn(t);const Vs=(t,e)=>{let n;switch(t.code){case te.invalid_type:t.received===de.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case te.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Ge.jsonStringifyReplacer)}`;break;case te.unrecognized_keys:n=`Unrecognized key(s) in object: ${Ge.joinValues(t.keys,", ")}`;break;case te.invalid_union:n="Invalid input";break;case te.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Ge.joinValues(t.options)}`;break;case te.invalid_enum_value:n=`Invalid enum value. Expected ${Ge.joinValues(t.options)}, received '${t.received}'`;break;case te.invalid_arguments:n="Invalid function arguments";break;case te.invalid_return_type:n="Invalid function return type";break;case te.invalid_date:n="Invalid date";break;case te.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Ge.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case te.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case te.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case te.custom:n="Invalid input";break;case te.invalid_intersection_types:n="Intersection results could not be merged";break;case te.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case te.not_finite:n="Number must be finite";break;default:n=e.defaultError,Ge.assertNever(t)}return{message:n}};let Q1=Vs;function X9(t){Q1=t}function Ua(){return Q1}const Fa=t=>{const{data:e,path:n,errorMaps:i,issueData:o}=t,a=[...n,...o.path||[]],l={...o,path:a};let u="";const d=i.filter(f=>!!f).slice().reverse();for(const f of d)u=f(l,{data:e,defaultError:u}).message;return{...o,path:a,message:o.message||u}},ek=[];function ge(t,e){const n=Fa({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Ua(),Vs].filter(i=>!!i)});t.common.issues.push(n)}class Mt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const i=[];for(const o of n){if(o.status==="aborted")return Ie;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return Mt.mergeObjectSync(e,i)}static mergeObjectSync(e,n){const i={};for(const o of n){const{key:a,value:l}=o;if(a.status==="aborted"||l.status==="aborted")return Ie;a.status==="dirty"&&e.dirty(),l.status==="dirty"&&e.dirty(),a.value!=="__proto__"&&(typeof l.value<"u"||o.alwaysSet)&&(i[a.value]=l.value)}return{status:e.value,value:i}}}const Ie=Object.freeze({status:"aborted"}),Y1=t=>({status:"dirty",value:t}),zt=t=>({status:"valid",value:t}),Au=t=>t.status==="aborted",Ru=t=>t.status==="dirty",Gs=t=>t.status==="valid",za=t=>typeof Promise<"u"&&t instanceof Promise;var we;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(we||(we={}));class Yn{constructor(e,n,i,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const sg=(t,e)=>{if(Gs(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new Mn(t.common.issues);return this._error=n,this._error}}};function Le(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:i,description:o}=t;if(e&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(l,u)=>l.code!=="invalid_type"?{message:u.defaultError}:typeof u.data>"u"?{message:i??u.defaultError}:{message:n??u.defaultError},description:o}}class Ne{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Fr(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Fr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Mt,ctx:{common:e.parent.common,data:e.data,parsedType:Fr(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(za(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const i=this.safeParse(e,n);if(i.success)return i.data;throw i.error}safeParse(e,n){var i;const o={common:{issues:[],async:(i=n?.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Fr(e)},a=this._parseSync({data:e,path:o.path,parent:o});return sg(o,a)}async parseAsync(e,n){const i=await this.safeParseAsync(e,n);if(i.success)return i.data;throw i.error}async safeParseAsync(e,n){const i={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Fr(e)},o=this._parse({data:e,path:i.path,parent:i}),a=await(za(o)?o:Promise.resolve(o));return sg(i,a)}refine(e,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,a)=>{const l=e(o),u=()=>a.addIssue({code:te.custom,...i(o)});return typeof Promise<"u"&&l instanceof Promise?l.then(d=>d?!0:(u(),!1)):l?!0:(u(),!1)})}refinement(e,n){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(e){return new Dn({schema:this,typeName:Ce.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return wr.create(this,this._def)}nullable(){return Ci.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Bn.create(this,this._def)}promise(){return as.create(this,this._def)}or(e){return Xs.create([this,e],this._def)}and(e){return eo.create(this,e,this._def)}transform(e){return new Dn({...Le(this._def),schema:this,typeName:Ce.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new so({...Le(this._def),innerType:this,defaultValue:n,typeName:Ce.ZodDefault})}brand(){return new X1({typeName:Ce.ZodBranded,type:this,...Le(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new Za({...Le(this._def),innerType:this,catchValue:n,typeName:Ce.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return mo.create(this,e)}readonly(){return Va.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const tk=/^c[^\s-]{8,}$/i,nk=/^[a-z][a-z0-9]*$/,rk=/^[0-9A-HJKMNP-TV-Z]{26}$/,ik=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,sk=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,ok="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let iu;const ak=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,lk=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,ck=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function uk(t,e){return!!((e==="v4"||!e)&&ak.test(t)||(e==="v6"||!e)&&lk.test(t))}class Pn extends Ne{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==de.string){const a=this._getOrReturnCtx(e);return ge(a,{code:te.invalid_type,expected:de.string,received:a.parsedType}),Ie}const i=new Mt;let o;for(const a of this._def.checks)if(a.kind==="min")e.data.length<a.value&&(o=this._getOrReturnCtx(e,o),ge(o,{code:te.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="max")e.data.length>a.value&&(o=this._getOrReturnCtx(e,o),ge(o,{code:te.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),i.dirty());else if(a.kind==="length"){const l=e.data.length>a.value,u=e.data.length<a.value;(l||u)&&(o=this._getOrReturnCtx(e,o),l?ge(o,{code:te.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):u&&ge(o,{code:te.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),i.dirty())}else if(a.kind==="email")sk.test(e.data)||(o=this._getOrReturnCtx(e,o),ge(o,{validation:"email",code:te.invalid_string,message:a.message}),i.dirty());else if(a.kind==="emoji")iu||(iu=new RegExp(ok,"u")),iu.test(e.data)||(o=this._getOrReturnCtx(e,o),ge(o,{validation:"emoji",code:te.invalid_string,message:a.message}),i.dirty());else if(a.kind==="uuid")ik.test(e.data)||(o=this._getOrReturnCtx(e,o),ge(o,{validation:"uuid",code:te.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid")tk.test(e.data)||(o=this._getOrReturnCtx(e,o),ge(o,{validation:"cuid",code:te.invalid_string,message:a.message}),i.dirty());else if(a.kind==="cuid2")nk.test(e.data)||(o=this._getOrReturnCtx(e,o),ge(o,{validation:"cuid2",code:te.invalid_string,message:a.message}),i.dirty());else if(a.kind==="ulid")rk.test(e.data)||(o=this._getOrReturnCtx(e,o),ge(o,{validation:"ulid",code:te.invalid_string,message:a.message}),i.dirty());else if(a.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),ge(o,{validation:"url",code:te.invalid_string,message:a.message}),i.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),ge(o,{validation:"regex",code:te.invalid_string,message:a.message}),i.dirty())):a.kind==="trim"?e.data=e.data.trim():a.kind==="includes"?e.data.includes(a.value,a.position)||(o=this._getOrReturnCtx(e,o),ge(o,{code:te.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),i.dirty()):a.kind==="toLowerCase"?e.data=e.data.toLowerCase():a.kind==="toUpperCase"?e.data=e.data.toUpperCase():a.kind==="startsWith"?e.data.startsWith(a.value)||(o=this._getOrReturnCtx(e,o),ge(o,{code:te.invalid_string,validation:{startsWith:a.value},message:a.message}),i.dirty()):a.kind==="endsWith"?e.data.endsWith(a.value)||(o=this._getOrReturnCtx(e,o),ge(o,{code:te.invalid_string,validation:{endsWith:a.value},message:a.message}),i.dirty()):a.kind==="datetime"?ck(a).test(e.data)||(o=this._getOrReturnCtx(e,o),ge(o,{code:te.invalid_string,validation:"datetime",message:a.message}),i.dirty()):a.kind==="ip"?uk(e.data,a.version)||(o=this._getOrReturnCtx(e,o),ge(o,{validation:"ip",code:te.invalid_string,message:a.message}),i.dirty()):Ge.assertNever(a);return{status:i.value,value:e.data}}_regex(e,n,i){return this.refinement(o=>e.test(o),{validation:n,code:te.invalid_string,...we.errToObj(i)})}_addCheck(e){return new Pn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...we.errToObj(e)})}url(e){return this._addCheck({kind:"url",...we.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...we.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...we.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...we.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...we.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...we.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...we.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:(n=e?.offset)!==null&&n!==void 0?n:!1,...we.errToObj(e?.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...we.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n?.position,...we.errToObj(n?.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...we.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...we.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...we.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...we.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...we.errToObj(n)})}nonempty(e){return this.min(1,we.errToObj(e))}trim(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Pn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Pn.create=t=>{var e;return new Pn({checks:[],typeName:Ce.ZodString,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Le(t)})};function dk(t,e){const n=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=n>i?n:i,a=parseInt(t.toFixed(o).replace(".","")),l=parseInt(e.toFixed(o).replace(".",""));return a%l/Math.pow(10,o)}class Vr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==de.number){const a=this._getOrReturnCtx(e);return ge(a,{code:te.invalid_type,expected:de.number,received:a.parsedType}),Ie}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="int"?Ge.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),ge(i,{code:te.invalid_type,expected:"integer",received:"float",message:a.message}),o.dirty()):a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),ge(i,{code:te.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),ge(i,{code:te.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),o.dirty()):a.kind==="multipleOf"?dk(e.data,a.value)!==0&&(i=this._getOrReturnCtx(e,i),ge(i,{code:te.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):a.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),ge(i,{code:te.not_finite,message:a.message}),o.dirty()):Ge.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,we.toString(n))}gt(e,n){return this.setLimit("min",e,!1,we.toString(n))}lte(e,n){return this.setLimit("max",e,!0,we.toString(n))}lt(e,n){return this.setLimit("max",e,!1,we.toString(n))}setLimit(e,n,i,o){return new Vr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:we.toString(o)}]})}_addCheck(e){return new Vr({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:we.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:we.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:we.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:we.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:we.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:we.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:we.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:we.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:we.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Ge.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Vr.create=t=>new Vr({checks:[],typeName:Ce.ZodNumber,coerce:t?.coerce||!1,...Le(t)});class Gr extends Ne{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==de.bigint){const a=this._getOrReturnCtx(e);return ge(a,{code:te.invalid_type,expected:de.bigint,received:a.parsedType}),Ie}let i;const o=new Mt;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?e.data<a.value:e.data<=a.value)&&(i=this._getOrReturnCtx(e,i),ge(i,{code:te.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="max"?(a.inclusive?e.data>a.value:e.data>=a.value)&&(i=this._getOrReturnCtx(e,i),ge(i,{code:te.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),o.dirty()):a.kind==="multipleOf"?e.data%a.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),ge(i,{code:te.not_multiple_of,multipleOf:a.value,message:a.message}),o.dirty()):Ge.assertNever(a);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,we.toString(n))}gt(e,n){return this.setLimit("min",e,!1,we.toString(n))}lte(e,n){return this.setLimit("max",e,!0,we.toString(n))}lt(e,n){return this.setLimit("max",e,!1,we.toString(n))}setLimit(e,n,i,o){return new Gr({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:we.toString(o)}]})}_addCheck(e){return new Gr({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:we.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:we.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:we.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:we.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:we.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Gr.create=t=>{var e;return new Gr({checks:[],typeName:Ce.ZodBigInt,coerce:(e=t?.coerce)!==null&&e!==void 0?e:!1,...Le(t)})};class Qs extends Ne{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==de.boolean){const i=this._getOrReturnCtx(e);return ge(i,{code:te.invalid_type,expected:de.boolean,received:i.parsedType}),Ie}return zt(e.data)}}Qs.create=t=>new Qs({typeName:Ce.ZodBoolean,coerce:t?.coerce||!1,...Le(t)});class Ei extends Ne{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==de.date){const a=this._getOrReturnCtx(e);return ge(a,{code:te.invalid_type,expected:de.date,received:a.parsedType}),Ie}if(isNaN(e.data.getTime())){const a=this._getOrReturnCtx(e);return ge(a,{code:te.invalid_date}),Ie}const i=new Mt;let o;for(const a of this._def.checks)a.kind==="min"?e.data.getTime()<a.value&&(o=this._getOrReturnCtx(e,o),ge(o,{code:te.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),i.dirty()):a.kind==="max"?e.data.getTime()>a.value&&(o=this._getOrReturnCtx(e,o),ge(o,{code:te.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),i.dirty()):Ge.assertNever(a);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Ei({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:we.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:we.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}Ei.create=t=>new Ei({checks:[],coerce:t?.coerce||!1,typeName:Ce.ZodDate,...Le(t)});class Ha extends Ne{_parse(e){if(this._getType(e)!==de.symbol){const i=this._getOrReturnCtx(e);return ge(i,{code:te.invalid_type,expected:de.symbol,received:i.parsedType}),Ie}return zt(e.data)}}Ha.create=t=>new Ha({typeName:Ce.ZodSymbol,...Le(t)});class Ys extends Ne{_parse(e){if(this._getType(e)!==de.undefined){const i=this._getOrReturnCtx(e);return ge(i,{code:te.invalid_type,expected:de.undefined,received:i.parsedType}),Ie}return zt(e.data)}}Ys.create=t=>new Ys({typeName:Ce.ZodUndefined,...Le(t)});class Js extends Ne{_parse(e){if(this._getType(e)!==de.null){const i=this._getOrReturnCtx(e);return ge(i,{code:te.invalid_type,expected:de.null,received:i.parsedType}),Ie}return zt(e.data)}}Js.create=t=>new Js({typeName:Ce.ZodNull,...Le(t)});class os extends Ne{constructor(){super(...arguments),this._any=!0}_parse(e){return zt(e.data)}}os.create=t=>new os({typeName:Ce.ZodAny,...Le(t)});class xi extends Ne{constructor(){super(...arguments),this._unknown=!0}_parse(e){return zt(e.data)}}xi.create=t=>new xi({typeName:Ce.ZodUnknown,...Le(t)});class Er extends Ne{_parse(e){const n=this._getOrReturnCtx(e);return ge(n,{code:te.invalid_type,expected:de.never,received:n.parsedType}),Ie}}Er.create=t=>new Er({typeName:Ce.ZodNever,...Le(t)});class Wa extends Ne{_parse(e){if(this._getType(e)!==de.undefined){const i=this._getOrReturnCtx(e);return ge(i,{code:te.invalid_type,expected:de.void,received:i.parsedType}),Ie}return zt(e.data)}}Wa.create=t=>new Wa({typeName:Ce.ZodVoid,...Le(t)});class Bn extends Ne{_parse(e){const{ctx:n,status:i}=this._processInputParams(e),o=this._def;if(n.parsedType!==de.array)return ge(n,{code:te.invalid_type,expected:de.array,received:n.parsedType}),Ie;if(o.exactLength!==null){const l=n.data.length>o.exactLength.value,u=n.data.length<o.exactLength.value;(l||u)&&(ge(n,{code:l?te.too_big:te.too_small,minimum:u?o.exactLength.value:void 0,maximum:l?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(ge(n,{code:te.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(ge(n,{code:te.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((l,u)=>o.type._parseAsync(new Yn(n,l,n.path,u)))).then(l=>Mt.mergeArray(i,l));const a=[...n.data].map((l,u)=>o.type._parseSync(new Yn(n,l,n.path,u)));return Mt.mergeArray(i,a)}get element(){return this._def.type}min(e,n){return new Bn({...this._def,minLength:{value:e,message:we.toString(n)}})}max(e,n){return new Bn({...this._def,maxLength:{value:e,message:we.toString(n)}})}length(e,n){return new Bn({...this._def,exactLength:{value:e,message:we.toString(n)}})}nonempty(e){return this.min(1,e)}}Bn.create=(t,e)=>new Bn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:Ce.ZodArray,...Le(e)});function Yi(t){if(t instanceof ut){const e={};for(const n in t.shape){const i=t.shape[n];e[n]=wr.create(Yi(i))}return new ut({...t._def,shape:()=>e})}else return t instanceof Bn?new Bn({...t._def,type:Yi(t.element)}):t instanceof wr?wr.create(Yi(t.unwrap())):t instanceof Ci?Ci.create(Yi(t.unwrap())):t instanceof Jn?Jn.create(t.items.map(e=>Yi(e))):t}class ut extends Ne{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Ge.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==de.object){const f=this._getOrReturnCtx(e);return ge(f,{code:te.invalid_type,expected:de.object,received:f.parsedType}),Ie}const{status:i,ctx:o}=this._processInputParams(e),{shape:a,keys:l}=this._getCached(),u=[];if(!(this._def.catchall instanceof Er&&this._def.unknownKeys==="strip"))for(const f in o.data)l.includes(f)||u.push(f);const d=[];for(const f of l){const p=a[f],g=o.data[f];d.push({key:{status:"valid",value:f},value:p._parse(new Yn(o,g,o.path,f)),alwaysSet:f in o.data})}if(this._def.catchall instanceof Er){const f=this._def.unknownKeys;if(f==="passthrough")for(const p of u)d.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(f==="strict")u.length>0&&(ge(o,{code:te.unrecognized_keys,keys:u}),i.dirty());else if(f!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const f=this._def.catchall;for(const p of u){const g=o.data[p];d.push({key:{status:"valid",value:p},value:f._parse(new Yn(o,g,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const f=[];for(const p of d){const g=await p.key;f.push({key:g,value:await p.value,alwaysSet:p.alwaysSet})}return f}).then(f=>Mt.mergeObjectSync(i,f)):Mt.mergeObjectSync(i,d)}get shape(){return this._def.shape()}strict(e){return we.errToObj,new ut({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,i)=>{var o,a,l,u;const d=(l=(a=(o=this._def).errorMap)===null||a===void 0?void 0:a.call(o,n,i).message)!==null&&l!==void 0?l:i.defaultError;return n.code==="unrecognized_keys"?{message:(u=we.errToObj(e).message)!==null&&u!==void 0?u:d}:{message:d}}}:{}})}strip(){return new ut({...this._def,unknownKeys:"strip"})}passthrough(){return new ut({...this._def,unknownKeys:"passthrough"})}extend(e){return new ut({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new ut({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Ce.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new ut({...this._def,catchall:e})}pick(e){const n={};return Ge.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new ut({...this._def,shape:()=>n})}omit(e){const n={};return Ge.objectKeys(this.shape).forEach(i=>{e[i]||(n[i]=this.shape[i])}),new ut({...this._def,shape:()=>n})}deepPartial(){return Yi(this)}partial(e){const n={};return Ge.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];e&&!e[i]?n[i]=o:n[i]=o.optional()}),new ut({...this._def,shape:()=>n})}required(e){const n={};return Ge.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])n[i]=this.shape[i];else{let a=this.shape[i];for(;a instanceof wr;)a=a._def.innerType;n[i]=a}}),new ut({...this._def,shape:()=>n})}keyof(){return J1(Ge.objectKeys(this.shape))}}ut.create=(t,e)=>new ut({shape:()=>t,unknownKeys:"strip",catchall:Er.create(),typeName:Ce.ZodObject,...Le(e)});ut.strictCreate=(t,e)=>new ut({shape:()=>t,unknownKeys:"strict",catchall:Er.create(),typeName:Ce.ZodObject,...Le(e)});ut.lazycreate=(t,e)=>new ut({shape:t,unknownKeys:"strip",catchall:Er.create(),typeName:Ce.ZodObject,...Le(e)});class Xs extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i=this._def.options;function o(a){for(const u of a)if(u.result.status==="valid")return u.result;for(const u of a)if(u.result.status==="dirty")return n.common.issues.push(...u.ctx.common.issues),u.result;const l=a.map(u=>new Mn(u.ctx.common.issues));return ge(n,{code:te.invalid_union,unionErrors:l}),Ie}if(n.common.async)return Promise.all(i.map(async a=>{const l={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:l}),ctx:l}})).then(o);{let a;const l=[];for(const d of i){const f={...n,common:{...n.common,issues:[]},parent:null},p=d._parseSync({data:n.data,path:n.path,parent:f});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:f}),f.common.issues.length&&l.push(f.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const u=l.map(d=>new Mn(d));return ge(n,{code:te.invalid_union,unionErrors:u}),Ie}}get options(){return this._def.options}}Xs.create=(t,e)=>new Xs({options:t,typeName:Ce.ZodUnion,...Le(e)});const Ca=t=>t instanceof no?Ca(t.schema):t instanceof Dn?Ca(t.innerType()):t instanceof ro?[t.value]:t instanceof Qr?t.options:t instanceof io?Object.keys(t.enum):t instanceof so?Ca(t._def.innerType):t instanceof Ys?[void 0]:t instanceof Js?[null]:null;class wl extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==de.object)return ge(n,{code:te.invalid_type,expected:de.object,received:n.parsedType}),Ie;const i=this.discriminator,o=n.data[i],a=this.optionsMap.get(o);return a?n.common.async?a._parseAsync({data:n.data,path:n.path,parent:n}):a._parseSync({data:n.data,path:n.path,parent:n}):(ge(n,{code:te.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),Ie)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,i){const o=new Map;for(const a of n){const l=Ca(a.shape[e]);if(!l)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const u of l){if(o.has(u))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(u)}`);o.set(u,a)}}return new wl({typeName:Ce.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...Le(i)})}}function Iu(t,e){const n=Fr(t),i=Fr(e);if(t===e)return{valid:!0,data:t};if(n===de.object&&i===de.object){const o=Ge.objectKeys(e),a=Ge.objectKeys(t).filter(u=>o.indexOf(u)!==-1),l={...t,...e};for(const u of a){const d=Iu(t[u],e[u]);if(!d.valid)return{valid:!1};l[u]=d.data}return{valid:!0,data:l}}else if(n===de.array&&i===de.array){if(t.length!==e.length)return{valid:!1};const o=[];for(let a=0;a<t.length;a++){const l=t[a],u=e[a],d=Iu(l,u);if(!d.valid)return{valid:!1};o.push(d.data)}return{valid:!0,data:o}}else return n===de.date&&i===de.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class eo extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=(a,l)=>{if(Au(a)||Au(l))return Ie;const u=Iu(a.value,l.value);return u.valid?((Ru(a)||Ru(l))&&n.dirty(),{status:n.value,value:u.data}):(ge(i,{code:te.invalid_intersection_types}),Ie)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([a,l])=>o(a,l)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}eo.create=(t,e,n)=>new eo({left:t,right:e,typeName:Ce.ZodIntersection,...Le(n)});class Jn extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.array)return ge(i,{code:te.invalid_type,expected:de.array,received:i.parsedType}),Ie;if(i.data.length<this._def.items.length)return ge(i,{code:te.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Ie;!this._def.rest&&i.data.length>this._def.items.length&&(ge(i,{code:te.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...i.data].map((l,u)=>{const d=this._def.items[u]||this._def.rest;return d?d._parse(new Yn(i,l,i.path,u)):null}).filter(l=>!!l);return i.common.async?Promise.all(a).then(l=>Mt.mergeArray(n,l)):Mt.mergeArray(n,a)}get items(){return this._def.items}rest(e){return new Jn({...this._def,rest:e})}}Jn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Jn({items:t,typeName:Ce.ZodTuple,rest:null,...Le(e)})};class to extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.object)return ge(i,{code:te.invalid_type,expected:de.object,received:i.parsedType}),Ie;const o=[],a=this._def.keyType,l=this._def.valueType;for(const u in i.data)o.push({key:a._parse(new Yn(i,u,i.path,u)),value:l._parse(new Yn(i,i.data[u],i.path,u))});return i.common.async?Mt.mergeObjectAsync(n,o):Mt.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,i){return n instanceof Ne?new to({keyType:e,valueType:n,typeName:Ce.ZodRecord,...Le(i)}):new to({keyType:Pn.create(),valueType:e,typeName:Ce.ZodRecord,...Le(n)})}}class qa extends Ne{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.map)return ge(i,{code:te.invalid_type,expected:de.map,received:i.parsedType}),Ie;const o=this._def.keyType,a=this._def.valueType,l=[...i.data.entries()].map(([u,d],f)=>({key:o._parse(new Yn(i,u,i.path,[f,"key"])),value:a._parse(new Yn(i,d,i.path,[f,"value"]))}));if(i.common.async){const u=new Map;return Promise.resolve().then(async()=>{for(const d of l){const f=await d.key,p=await d.value;if(f.status==="aborted"||p.status==="aborted")return Ie;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}})}else{const u=new Map;for(const d of l){const f=d.key,p=d.value;if(f.status==="aborted"||p.status==="aborted")return Ie;(f.status==="dirty"||p.status==="dirty")&&n.dirty(),u.set(f.value,p.value)}return{status:n.value,value:u}}}}qa.create=(t,e,n)=>new qa({valueType:e,keyType:t,typeName:Ce.ZodMap,...Le(n)});class ki extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==de.set)return ge(i,{code:te.invalid_type,expected:de.set,received:i.parsedType}),Ie;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(ge(i,{code:te.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(ge(i,{code:te.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const a=this._def.valueType;function l(d){const f=new Set;for(const p of d){if(p.status==="aborted")return Ie;p.status==="dirty"&&n.dirty(),f.add(p.value)}return{status:n.value,value:f}}const u=[...i.data.values()].map((d,f)=>a._parse(new Yn(i,d,i.path,f)));return i.common.async?Promise.all(u).then(d=>l(d)):l(u)}min(e,n){return new ki({...this._def,minSize:{value:e,message:we.toString(n)}})}max(e,n){return new ki({...this._def,maxSize:{value:e,message:we.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}ki.create=(t,e)=>new ki({valueType:t,minSize:null,maxSize:null,typeName:Ce.ZodSet,...Le(e)});class Xi extends Ne{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==de.function)return ge(n,{code:te.invalid_type,expected:de.function,received:n.parsedType}),Ie;function i(u,d){return Fa({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),Vs].filter(f=>!!f),issueData:{code:te.invalid_arguments,argumentsError:d}})}function o(u,d){return Fa({data:u,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Ua(),Vs].filter(f=>!!f),issueData:{code:te.invalid_return_type,returnTypeError:d}})}const a={errorMap:n.common.contextualErrorMap},l=n.data;if(this._def.returns instanceof as){const u=this;return zt(async function(...d){const f=new Mn([]),p=await u._def.args.parseAsync(d,a).catch(b=>{throw f.addIssue(i(d,b)),f}),g=await Reflect.apply(l,this,p);return await u._def.returns._def.type.parseAsync(g,a).catch(b=>{throw f.addIssue(o(g,b)),f})})}else{const u=this;return zt(function(...d){const f=u._def.args.safeParse(d,a);if(!f.success)throw new Mn([i(d,f.error)]);const p=Reflect.apply(l,this,f.data),g=u._def.returns.safeParse(p,a);if(!g.success)throw new Mn([o(p,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new Xi({...this._def,args:Jn.create(e).rest(xi.create())})}returns(e){return new Xi({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,i){return new Xi({args:e||Jn.create([]).rest(xi.create()),returns:n||xi.create(),typeName:Ce.ZodFunction,...Le(i)})}}class no extends Ne{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}no.create=(t,e)=>new no({getter:t,typeName:Ce.ZodLazy,...Le(e)});class ro extends Ne{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return ge(n,{received:n.data,code:te.invalid_literal,expected:this._def.value}),Ie}return{status:"valid",value:e.data}}get value(){return this._def.value}}ro.create=(t,e)=>new ro({value:t,typeName:Ce.ZodLiteral,...Le(e)});function J1(t,e){return new Qr({values:t,typeName:Ce.ZodEnum,...Le(e)})}class Qr extends Ne{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),i=this._def.values;return ge(n,{expected:Ge.joinValues(i),received:n.parsedType,code:te.invalid_type}),Ie}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),i=this._def.values;return ge(n,{received:n.data,code:te.invalid_enum_value,options:i}),Ie}return zt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Qr.create(e)}exclude(e){return Qr.create(this.options.filter(n=>!e.includes(n)))}}Qr.create=J1;class io extends Ne{_parse(e){const n=Ge.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==de.string&&i.parsedType!==de.number){const o=Ge.objectValues(n);return ge(i,{expected:Ge.joinValues(o),received:i.parsedType,code:te.invalid_type}),Ie}if(n.indexOf(e.data)===-1){const o=Ge.objectValues(n);return ge(i,{received:i.data,code:te.invalid_enum_value,options:o}),Ie}return zt(e.data)}get enum(){return this._def.values}}io.create=(t,e)=>new io({values:t,typeName:Ce.ZodNativeEnum,...Le(e)});class as extends Ne{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==de.promise&&n.common.async===!1)return ge(n,{code:te.invalid_type,expected:de.promise,received:n.parsedType}),Ie;const i=n.parsedType===de.promise?n.data:Promise.resolve(n.data);return zt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}as.create=(t,e)=>new as({type:t,typeName:Ce.ZodPromise,...Le(e)});class Dn extends Ne{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ce.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=this._def.effect||null,a={addIssue:l=>{ge(i,l),l.fatal?n.abort():n.dirty()},get path(){return i.path}};if(a.addIssue=a.addIssue.bind(a),o.type==="preprocess"){const l=o.transform(i.data,a);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(l).then(u=>this._def.schema._parseAsync({data:u,path:i.path,parent:i})):this._def.schema._parseSync({data:l,path:i.path,parent:i})}if(o.type==="refinement"){const l=u=>{const d=o.refinement(u,a);if(i.common.async)return Promise.resolve(d);if(d instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return u};if(i.common.async===!1){const u=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return u.status==="aborted"?Ie:(u.status==="dirty"&&n.dirty(),l(u.value),{status:n.value,value:u.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(u=>u.status==="aborted"?Ie:(u.status==="dirty"&&n.dirty(),l(u.value).then(()=>({status:n.value,value:u.value}))))}if(o.type==="transform")if(i.common.async===!1){const l=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!Gs(l))return l;const u=o.transform(l.value,a);if(u instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:u}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(l=>Gs(l)?Promise.resolve(o.transform(l.value,a)).then(u=>({status:n.value,value:u})):l);Ge.assertNever(o)}}Dn.create=(t,e,n)=>new Dn({schema:t,typeName:Ce.ZodEffects,effect:e,...Le(n)});Dn.createWithPreprocess=(t,e,n)=>new Dn({schema:e,effect:{type:"preprocess",transform:t},typeName:Ce.ZodEffects,...Le(n)});class wr extends Ne{_parse(e){return this._getType(e)===de.undefined?zt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}wr.create=(t,e)=>new wr({innerType:t,typeName:Ce.ZodOptional,...Le(e)});class Ci extends Ne{_parse(e){return this._getType(e)===de.null?zt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Ci.create=(t,e)=>new Ci({innerType:t,typeName:Ce.ZodNullable,...Le(e)});class so extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e);let i=n.data;return n.parsedType===de.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}so.create=(t,e)=>new so({innerType:t,typeName:Ce.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Le(e)});class Za extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return za(o)?o.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Mn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}Za.create=(t,e)=>new Za({innerType:t,typeName:Ce.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Le(e)});class Ka extends Ne{_parse(e){if(this._getType(e)!==de.nan){const i=this._getOrReturnCtx(e);return ge(i,{code:te.invalid_type,expected:de.nan,received:i.parsedType}),Ie}return{status:"valid",value:e.data}}}Ka.create=t=>new Ka({typeName:Ce.ZodNaN,...Le(t)});const fk=Symbol("zod_brand");class X1 extends Ne{_parse(e){const{ctx:n}=this._processInputParams(e),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class mo extends Ne{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?Ie:a.status==="dirty"?(n.dirty(),Y1(a.value)):this._def.out._parseAsync({data:a.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?Ie:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,n){return new mo({in:e,out:n,typeName:Ce.ZodPipeline})}}class Va extends Ne{_parse(e){const n=this._def.innerType._parse(e);return Gs(n)&&(n.value=Object.freeze(n.value)),n}}Va.create=(t,e)=>new Va({innerType:t,typeName:Ce.ZodReadonly,...Le(e)});const ev=(t,e={},n)=>t?os.create().superRefine((i,o)=>{var a,l;if(!t(i)){const u=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,d=(l=(a=u.fatal)!==null&&a!==void 0?a:n)!==null&&l!==void 0?l:!0,f=typeof u=="string"?{message:u}:u;o.addIssue({code:"custom",...f,fatal:d})}}):os.create(),hk={object:ut.lazycreate};var Ce;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(Ce||(Ce={}));const pk=(t,e={message:`Input not instance of ${t.name}`})=>ev(n=>n instanceof t,e),tv=Pn.create,nv=Vr.create,gk=Ka.create,vk=Gr.create,rv=Qs.create,mk=Ei.create,yk=Ha.create,bk=Ys.create,_k=Js.create,wk=os.create,xk=xi.create,$k=Er.create,Ek=Wa.create,kk=Bn.create,Ck=ut.create,Sk=ut.strictCreate,Tk=Xs.create,Ak=wl.create,Rk=eo.create,Ik=Jn.create,Ok=to.create,Lk=qa.create,Pk=ki.create,Mk=Xi.create,Bk=no.create,jk=ro.create,Nk=Qr.create,Dk=io.create,Uk=as.create,og=Dn.create,Fk=wr.create,zk=Ci.create,Hk=Dn.createWithPreprocess,Wk=mo.create,qk=()=>tv().optional(),Zk=()=>nv().optional(),Kk=()=>rv().optional(),Vk={string:t=>Pn.create({...t,coerce:!0}),number:t=>Vr.create({...t,coerce:!0}),boolean:t=>Qs.create({...t,coerce:!0}),bigint:t=>Gr.create({...t,coerce:!0}),date:t=>Ei.create({...t,coerce:!0})},Gk=Ie;var mt=Object.freeze({__proto__:null,defaultErrorMap:Vs,setErrorMap:X9,getErrorMap:Ua,makeIssue:Fa,EMPTY_PATH:ek,addIssueToContext:ge,ParseStatus:Mt,INVALID:Ie,DIRTY:Y1,OK:zt,isAborted:Au,isDirty:Ru,isValid:Gs,isAsync:za,get util(){return Ge},get objectUtil(){return Tu},ZodParsedType:de,getParsedType:Fr,ZodType:Ne,ZodString:Pn,ZodNumber:Vr,ZodBigInt:Gr,ZodBoolean:Qs,ZodDate:Ei,ZodSymbol:Ha,ZodUndefined:Ys,ZodNull:Js,ZodAny:os,ZodUnknown:xi,ZodNever:Er,ZodVoid:Wa,ZodArray:Bn,ZodObject:ut,ZodUnion:Xs,ZodDiscriminatedUnion:wl,ZodIntersection:eo,ZodTuple:Jn,ZodRecord:to,ZodMap:qa,ZodSet:ki,ZodFunction:Xi,ZodLazy:no,ZodLiteral:ro,ZodEnum:Qr,ZodNativeEnum:io,ZodPromise:as,ZodEffects:Dn,ZodTransformer:Dn,ZodOptional:wr,ZodNullable:Ci,ZodDefault:so,ZodCatch:Za,ZodNaN:Ka,BRAND:fk,ZodBranded:X1,ZodPipeline:mo,ZodReadonly:Va,custom:ev,Schema:Ne,ZodSchema:Ne,late:hk,get ZodFirstPartyTypeKind(){return Ce},coerce:Vk,any:wk,array:kk,bigint:vk,boolean:rv,date:mk,discriminatedUnion:Ak,effect:og,enum:Nk,function:Mk,instanceof:pk,intersection:Rk,lazy:Bk,literal:jk,map:Lk,nan:gk,nativeEnum:Dk,never:$k,null:_k,nullable:zk,number:nv,object:Ck,oboolean:Kk,onumber:Zk,optional:Fk,ostring:qk,pipeline:Wk,preprocess:Hk,promise:Uk,record:Ok,set:Pk,strictObject:Sk,string:tv,symbol:yk,transformer:og,tuple:Ik,undefined:bk,union:Tk,unknown:xk,void:Ek,NEVER:Gk,ZodIssueCode:te,quotelessJson:J9,ZodError:Mn});const Qk=/^[0-9a-f]{64}$/,oo=t=>{const e=typeof t=="string"&&t.length===64&&Qk.test(t);return e||console.warn("invalid id is ignored: ",t),e},Yk=t=>e=>t.safeParse(e).success,Jk=mt.tuple([mt.literal("emoji"),mt.string().regex(/^\w+$/,{message:"shortcode can includes only alpahnumeric characters and underscore"}),mt.string().url()]);class Xk{findTagsByName(e){return this.tags.filter(([n])=>n===e)}findFirstTagByName(e){return this.tags.find(([n])=>n===e)}findLastTagByName(e){return this.tags.findLast(([n])=>n===e)}pTags(){return this.tags.filter(([e,n])=>e==="p"&&oo(n))}eTags(){return this.tags.filter(([e,n])=>e==="e"&&oo(n))}emojiTags(){return this.tags.filter(Yk(Jk))}taggedPubkeys(){return _i(this.pTags().map(([,e])=>e))}taggedEventIds(){return this.eTags().map(([,e])=>e)}lastTaggedEventId(){const e=this.taggedEventIds();if(e.length!==0)return e[e.length-1]}getEmojiUrl(e){const n=this.emojiTags().find(([,o])=>o===e);if(n==null)return;const[,,i]=n;return i}}class xd extends Xk{constructor(e){super(),this.rawEvent=e}get id(){return this.rawEvent.id}get sig(){return this.rawEvent.sig}get kind(){return this.rawEvent.kind}get pubkey(){return this.rawEvent.pubkey}get createdAt(){return this.rawEvent.created_at}get content(){return this.rawEvent.content}get tags(){return this.rawEvent.tags}createdAtAsDate(){return new Date(this.rawEvent.created_at*1e3)}}const eC=/^\p{Emoji}[\p{Emoji_Component}\p{Emoji_Modifier}\p{Emoji_Presentation}]*$/u,ag=/^:(\w+):$/,tC=t=>{if(t.isLikeOrDislike())return{type:"LikeDislike",content:t.content};if(t.isEmoji())return{type:"Emoji",content:t.content};if(t.isCustomEmoji()){const e=t.getShortcode(),n=t.getUrl();if(e!=null&&n!=null)return{type:"CustomEmoji",content:t.content,shortcode:e,url:n}}return{type:"Unknown",content:t.content}};class nC extends xd{constructor(e){if(e.kind!==lt.Reaction)throw new TypeError("kind should be 7");super(e)}isLike(){return this.content==="+"}isDislike(){return this.content==="-"}isLikeOrDislike(){return this.isLike()||this.isDislike()}isEmoji(){return eC.test(this.content)}isCustomEmoji(){return ag.test(this.content)}getShortcode(){return this.content.match(ag)?.[1]}getUrl(){const e=this.getShortcode();if(e!=null)return this.getEmojiUrl(e)}toReactionTypes(){return tC(this)}}const{decode:rC}=go,iC=["reply","root","mention"],sC=/(?<url>(?:https?|wss?):\/\/[-a-zA-Z0-9.]+(:\d{1,5})?(?:\/[-[\]~!$&'()*+.,:;@&=%\w]+|\/)*(?:\?[-[\]~!$&'()*+.,/:;%@&=\w?]+)?(?:#[-[\]~!$&'()*+.,/:;%@\w&=?#]+)?)/g,oC=/(?:#\[(?<idx>\d+)\])/g,aC=/(?<mention>(?<nip19>nostr:)?(?<bech32>(?:npub|note|nprofile|nevent|naddr|nrelay)1[ac-hj-np-z02-9]+))/gi,lC=/#(?<hashtag>[\p{Letter}\p{Number}_]+)/gu,cC=/:(?<emoji>\w+):/gu,$d=t=>{const e=[...t.matchAll(sC),...t.matchAll(oC),...t.matchAll(aC),...t.matchAll(lC),...t.matchAll(cC)].sort((a,l)=>a.index-l.index);let n=0;const i=[],o=a=>{if(a!=null&&a>n){const l=t.slice(n,a),u=i[i.length-1];if(u?.type==="PlainText")u.content+=l;else{const d={type:"PlainText",content:l};i.push(d)}n=a}};return e.forEach(a=>{const{index:l}=a;if(!(l<n)){if(a.groups?.url){o(l);const u={type:"URL",content:a.groups?.url};i.push(u)}else if(a.groups?.idx){const u=parseInt(a.groups.idx,10);o(l),i.push({type:"TagReference",tagIndex:u,content:a[0]})}else if(a.groups?.mention){o(l);try{const u=rC(a.groups.bech32),d={type:"Bech32Entity",content:a[0],data:u,isNIP19:a.groups.nip19==="nostr:"};i.push(d)}catch{console.warn(`ignored invalid bech32 entity: ${a[0]}`),o(l+a[0].length)}}else if(a.groups?.hashtag){o(l);const u=a.groups?.hashtag,d={type:"HashTag",content:a[0],tagName:u};i.push(d)}else if(a.groups?.emoji){o(l);const u=a.groups?.emoji,d={type:"CustomEmoji",content:a[0],shortcode:u};i.push(d)}n=l+a[0].length}}),n<t.length&&o(t.length),i},uC=t=>t==null?!1:iC.includes(t),dC=(t,{tagIndex:e,content:n})=>{const i=t.tags[e];if(i==null)return;const o=i[0];if(o==="p"&&oo(i[1]))return{type:"MentionedUser",tagIndex:e,content:n,pubkey:i[1]};if(o==="e"&&oo(i[1])){const a=uC(i[3])?i[3]:void 0;return{type:"MentionedEvent",tagIndex:e,content:n,eventId:i[1],marker:a}}},iv=(t,e)=>t.map(n=>{if(n.type==="TagReference"){const i=dC(e,n);return{...n,type:"TagReferenceResolved",reference:i}}if(n.type==="CustomEmoji"){const i=e.getEmojiUrl(n.shortcode);return{...n,type:"CustomEmojiResolved",url:i}}return n}),fC=t=>{const e=t.map((i,o)=>[i,o]).filter(([[i,o]])=>i==="e"&&oo(o)),n=(i,o)=>i==="root"||i==="reply"||i==="mention"?i:e.length===1?"reply":o===0?"root":e.length===2||o===e.length-1?"reply":"mention";return e.map(([[,i,o,a],l],u)=>({id:i,relayUrl:(o?.length??0)>0?o:null,marker:n(a,u),index:l}))};class hC extends xd{#e;#t;parsed(){if(this.#t!=null)return this.#t;const e=$d(this.content),n=iv(e,this);return this.#t=n,n}markedEventTags(){return this.#e!=null?this.#e:(this.#e=fC(this.tags),this.#e)}replyingToEvent(){return this.markedEventTags().find(({marker:e})=>e==="reply")}rootEvent(){return this.markedEventTags().find(({marker:e})=>e==="root")}mentionedEvents(){return this.markedEventTags().filter(({marker:e})=>e==="mention")}contentWarning(){const e=this.findLastTagByName("content-warning");return e==null?{contentWarning:!1}:{contentWarning:!0,reason:(e[1]?.length??0)>0?e[1]:void 0}}containsEventMention(e){const n=this.rawEvent.tags.findIndex(([i,o])=>i==="e"&&o===e);return this.containsEventNote(e)||this.containsEventMentionIndex(n)}containsEventMentionIndex(e){return e<0||e>=this.rawEvent.tags.length?!1:this.parsed().some(n=>n.type==="TagReferenceResolved"&&n.tagIndex===e)}containsEventNote(e){return this.parsed().some(n=>n.type==="Bech32Entity"&&(n.data.type==="nevent"&&n.data.data.id===e||n.data.type==="note"&&n.data.data===e))}}let pC=class extends hC{constructor(e){if(e.kind!==lt.Text)throw new TypeError("kind should be 1");super(e)}};const zr=t=>new xd(t),Ed=t=>new pC(t),Ga=t=>new nC(t),gC=()=>{const t=[...G9];return window.navigator.language.includes("ja")&&t.push(...Q9),t},sv=()=>({relayUrls:gC(),columns:[],customEmojis:{},dateFormat:"relative",keepOpenPostForm:!1,useEmojiReaction:!0,showEmojiReaction:!0,showMedia:!0,embedding:{twitter:!0,youtube:!0,ogp:!0},hideCount:!1,mutedPubkeys:[],mutedKeywords:[]}),vC=t=>JSON.stringify(t),mC=t=>({...sv(),...JSON.parse(t)}),yC=T4(()=>window.localStorage,vC,mC),[Gi,Gt]=A4("RabbitConfig",sv(),yC),et=()=>{const t=dt(),e=C=>{Gt("relayUrls",I=>_i([...I,C]))},n=C=>{Gt("relayUrls",I=>I.filter(O=>O!==C))},i=C=>{Gt("mutedPubkeys",I=>_i([...I,C]))},o=C=>{Gt("mutedPubkeys",I=>I.filter(O=>O!==C))},a=C=>{Gt("mutedKeywords",I=>_i([...I,C]))},l=C=>{Gt("mutedKeywords",I=>I.filter(O=>O!==C))},u=C=>{Gt("columns",I=>{const O=I.findIndex(A=>A.id===C.id);if(O>=0){const A=[...I];return A.splice(O,1,C),A}return[...I,C]})},d=(C,I)=>{Gt("columns",O=>{const A=I-1,D=Math.max(Math.min(A,O.length),0),j=O.findIndex(ne=>ne.id===C);if(j<0||D===j)return O;console.log(j,D);const K=[...O],[J]=K.splice(j,1);return K.splice(D,0,J),K})},f=C=>{Gt("columns",I=>I.filter(O=>O.id!==C))},p=C=>{Gt("customEmojis",I=>({...I,[C.shortcode]:C}))},g=C=>{Gt("customEmojis",I=>{const O=Object.fromEntries(C.map(A=>[A.shortcode,A]));return{...I,...O}})},v=C=>{Gt("customEmojis",I=>({...I,[C]:void 0}))},b=C=>Gi.customEmojis[C],w=C=>W1.sortBy(Object.values(Gi.customEmojis).filter(({shortcode:I})=>I.includes(C)),[I=>I.shortcode.length]),x=C=>Gi.mutedPubkeys.includes(C),$=C=>C.kind===lt.Text?Gi.mutedKeywords.some(I=>C.content.includes(I)):!1;return{config:()=>Gi,setConfig:Gt,addRelay:e,removeRelay:n,saveColumn:u,moveColumn:d,removeColumn:f,initializeColumns:({pubkey:C})=>{if((Gi.columns?.length??0)>0)return;const I=[bd({width:"widest",pubkey:C}),Z1({pubkey:C}),_d({name:t()("column.myPosts"),pubkey:C}),G1({name:t()("column.myReactions"),pubkey:C})];navigator.language.includes("ja")&&I.splice(2,0,V1()),Gt("columns",()=>[...I])},saveEmoji:p,saveEmojis:g,removeEmoji:v,getEmoji:b,searchEmojis:w,addMutedPubkey:i,removeMutedPubkey:o,addMutedKeyword:a,removeMutedKeyword:l,isPubkeyMuted:x,shouldMuteEvent:C=>{const I=zr(C);return x(C.pubkey)||I.taggedPubkeys().some(x)||C.kind===lt.Text&&$(C)}}},kd=(t,e)=>{const n=t.created_at-e.created_at;return n!==0?n:t.id===e.id?0:t.id>e.id?1:-1},ov=t=>{if(t.length!==0)return t.length===1?t[0]:t.reduce((e,n)=>kd(e,n)>0?e:n)},Ou=t=>Array.from(t).sort((e,n)=>-kd(e,n)),[bC]=Se(new OE({eoseSubTimeout:12e3})),Cd=()=>bC,[av,lg]=ts({activeSubscriptions:0,activeBatchSubscriptions:0});_4(()=>{_r(()=>{console.debug("stats",{...av})})});const lv=()=>({stats:av,setActiveSubscriptions:n=>lg("activeSubscriptions",n),setActiveBatchSubscriptions:n=>lg("activeBatchSubscriptions",n)});let cg=0;const _C=()=>{const t=cg;return cg+=1,t};class wC{id;req;res;isCompleted=!1;#e=[];#t=[];constructor(e){this.id=_C(),this.req=e}#n(e){this.#e.forEach(n=>{n(e)})}#r(){this.#t.forEach(e=>{e()})}update(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.res=e,this.#n(e)}updateWith(e){if(this.isCompleted)throw new Error("completed task cannot be updated");this.update(e(this.res))}complete(){this.isCompleted=!0,this.#r()}onUpdate(e){this.#e.push(e)}subscribe(e){this.onUpdate(e)}onComplete(e){this.#t.push(e)}toUpdatePromise(){if(this.isCompleted&&this.res!=null)return Promise.resolve(this.res);const e=new Promise(n=>{this.onUpdate(i=>n(i))});return Promise.race([e,this.toCompletePromise()])}toCompletePromise(){return this.isCompleted&&this.res!=null?Promise.resolve(this.res):new Promise((e,n)=>{this.onComplete(()=>{this.res!=null?e(this.res):n(new Error("result was not set"))})})}}const xC=t=>{const e=Fe(t),n=Fe(()=>e().batchSize??100),i=Fe(()=>e().interval??2e3),[o,a]=Se([]);let l;const u=()=>{const{executor:g}=e(),v=o();v.length>0&&(a([]),g(v)),l!=null&&clearTimeout(l),l=void 0},d=()=>{l==null&&(l=setTimeout(()=>{u()},i()))};return{addTask:g=>{o().length<n()?a(v=>[...v,g]):(u(),a([g])),d()},removeTask:g=>{a(v=>v.filter(b=>b!==g))}}};class ys extends wC{addEvent(e){this.updateWith(n=>hd.insertEventIntoDescendingList(n??[],e))}firstEventPromise(){return this.toUpdatePromise().then(e=>e[0])}latestEventPromise(){return this.toCompletePromise().then(e=>{const n=ov(e);if(n==null)throw new Error("event not found");return n})}}const di=t=>e=>e.req.type===t;let Lu=0;const{setActiveBatchSubscriptions:$C}=lv();setInterval(()=>{$C(Lu)},1e3);const EC=t=>t.kind>=3e4&&t.kind<4e4,ug=({kind:t,author:e,identifier:n})=>`${t}:${e}:${n}`,fi=({keyExtractor:t,filtersBuilder:e,eventKeyExtractor:n})=>{const i=new Map;return{tasks:i,add:u=>{const d=t(u.req),f=i.get(d)??[];i.set(d,[...f,u])},buildFilter:()=>{const u=Array.from(i.keys());return u.length===0?[]:e(u)},resolve:u=>{const d=n(u);if(d==null)return!1;const f=i.get(d)??[];return f.length===0?!1:(f.forEach(p=>{p.addEvent(u)}),!0)}}},kC=t=>{const e=fi({keyExtractor:g=>g.eventId,filtersBuilder:g=>[{ids:g}],eventKeyExtractor:g=>g.id}),n=fi({keyExtractor:g=>g.pubkey,filtersBuilder:g=>[{kinds:[lt.Metadata],authors:g}],eventKeyExtractor:g=>g.pubkey}),i=fi({keyExtractor:g=>g.pubkey,filtersBuilder:g=>[{kinds:[lt.Contacts],authors:g}],eventKeyExtractor:g=>g.pubkey}),o=fi({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[lt.Repost],"#e":g}],eventKeyExtractor:g=>zr(g).lastTaggedEventId()}),a=fi({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[lt.Reaction],"#e":g}],eventKeyExtractor:g=>zr(g).lastTaggedEventId()}),l=fi({keyExtractor:g=>g.mentionedEventId,filtersBuilder:g=>[{kinds:[lt.Zap],"#e":g}],eventKeyExtractor:g=>zr(g).lastTaggedEventId()}),u=fi({keyExtractor:ug,filtersBuilder:g=>{const v=[];return g.forEach(b=>{const w=u.tasks.get(b)?.[0];if(w==null)return;const{kind:x,author:$,identifier:S}=w.req;v.push({kinds:[x],authors:[$],"#d":[S]})}),v},eventKeyExtractor:g=>{const v=zr(g).findFirstTagByName("d")?.[1];if(v!=null)return ug({kind:g.kind,author:g.pubkey,identifier:v})}}),d=g=>{if(di("Event")(g))e.add(g);else if(di("Profile")(g))n.add(g);else if(di("Followings")(g))i.add(g);else if(di("Reposts")(g))o.add(g);else if(di("Reactions")(g))a.add(g);else if(di("ZapReceipts")(g))l.add(g);else if(di("ParameterizedReplaceableEvent")(g))u.add(g);else throw new Error(`unknown task: ${g.req.type}`)},f=()=>[...e.buildFilter(),...n.buildFilter(),...i.buildFilter(),...o.buildFilter(),...a.buildFilter(),...l.buildFilter(),...u.buildFilter()],p=g=>{g.kind===lt.Metadata&&n.resolve(g)||g.kind===lt.Contacts&&i.resolve(g)||g.kind===lt.Repost&&o.resolve(g)||g.kind===lt.Reaction&&a.resolve(g)||g.kind===lt.Zap&&l.resolve(g)||EC(g)&&u.resolve(g)||e.resolve(g)};return t.forEach(g=>{d(g)}),{tasks:{eventTasks:e,profileTasks:n,followingsTasks:i,repostsTasks:o,reactionsTasks:a,zapReceiptsTasks:l,parameterizedReplaceableEventsTasks:u},add:d,buildFilters:f,resolve:p}},{addTask:CC,removeTask:SC}=xC(()=>({interval:2e3,batchSize:150,executor:t=>{const e=kC(t),n=e.buildFilters();if(n.length===0)return;const i=()=>{t.forEach(u=>{u.complete()})},{config:o}=et(),l=Cd()().sub(o().relayUrls,n,{});Lu+=1,l.on("event",u=>{e.resolve(u)}),l.on("eose",()=>{i(),l.unsub(),Lu-=1})}})),xl=({task:t,signal:e})=>{CC(t),e?.addEventListener("abort",()=>SC(t))};class TC extends Error{}const qr=(t,e)=>n=>{const i=new Promise((o,a)=>{setTimeout(()=>{const l=e!=null?`TimeoutError: ${e}`:"TimeoutError";a(new TC(l))},t)});return Promise.race([n,i])},AC=t=>{const e=Fe(t),n=Si(()=>["useEvent",e()],({queryKey:o,signal:a})=>{const[,l]=o;if(l==null)return null;const{eventId:u}=l,d=new ys({type:"Event",eventId:u}),f=d.firstEventPromise().catch(()=>{throw new Error(`event not found: ${u}`)});return xl({task:d,signal:a}),qr(15e3,`useEvent: ${u}`)(f)},{staleTime:4*60*60*1e3,cacheTime:4*60*60*1e3,refetchOnWindowFocus:!1,refetchOnMount:!1});return{event:()=>n.data??null,query:n}},_n=t=>e=>t.some(n=>n==null)?null:e(t),RC=B("<span>"),IC=B('<div class="truncate"> '),ao=t=>{const e=dt(),[n,i]=w4(t,["eventId"]),{shouldMuteEvent:o}=et(),{event:a,query:l}=AC(()=>_n([n.eventId])(([d])=>({eventId:d}))),u=()=>{const d=a();return d!=null&&o(d)};return E(Ln,{get fallback(){return(()=>{const d=RC();return k(d,()=>e()("post.failedToFetchEvent"),null),k(d,()=>t.eventId,null),d})()},get children(){return[E(Ye,{get when(){return u()},children:null}),E(Ye,{get when(){return a()},keyed:!0,children:d=>E(rm,x4({event:d},i))}),E(Ye,{get when(){return l.isLoading&&n.eventId},keyed:!0,children:d=>(()=>{const f=IC(),p=f.firstChild;return k(f,()=>e()("general.loading"),p),k(f,E(Ks,{eventId:d}),null),f})()})]}})},OC=t=>{if(t==null||t.length===0)throw new TypeError("content is empty or null");return JSON.parse(t)},LC=t=>{try{return OC(t)}catch(e){return console.warn("failed to parse profile (kind 0): ",e,t),null}},cv=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n,{stale:!0}),a=t(n);if(a==null)return Promise.resolve(null);const l=a.firstEventPromise().catch(()=>{throw new Error(`event not found: ${JSON.stringify(n)}`)});return a.onUpdate(u=>{const d=ov(u);(o==null||d!=null&&kd(d,o)>=0)&&e.setQueryData(n,d)}),xl({task:a,signal:i}),qr(15e3,`${JSON.stringify(n)}`)(l)},uv=({taskProvider:t,queryClient:e})=>({queryKey:n,signal:i})=>{const o=e.getQueryData(n,{stale:!0}),a=t(n);if(a==null)return Promise.resolve([]);const l=a.toUpdatePromise().catch(()=>[]);return a.onUpdate(u=>{e.setQueryData(n,()=>{if(o==null)return u;const d=W1.uniqBy([...o,...u],f=>f.id);return Ou(d)})}),xl({task:a,signal:i}),qr(15e3,`${JSON.stringify(n)}`)(l)},bs=t=>{const e=ds(),n=Fe(t),i=Fe(()=>["useProfile",n()]),o=Si(i,cv({taskProvider:([,d])=>{if(d==null)return null;const{pubkey:f}=d;return new ys({type:"Profile",pubkey:f})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:3*24*60*60*1e3,refetchInterval:5*60*1e3,refetchOnWindowFocus:!1}),a=()=>o.data;return{profile:Fe(()=>{if(o.data==null)return null;const{content:d}=o.data;return LC(d)}),event:a,invalidateProfile:()=>e.invalidateQueries(i()),query:o}},{npubEncode:PC}=go,yo=t=>{try{return PC(t)}catch{return console.error("failed to encode pubkey into npub",t),t}},Sd=t=>{const{profile:e}=bs(()=>({pubkey:t.pubkey}));return E(Ln,{get fallback(){return yo(t.pubkey)},get children(){return[E(Ye,{get when(){return(e()?.display_name?.length??0)>0},get children(){return e()?.display_name}}),E(Ye,{get when(){return(e()?.name?.length??0)>0},get children(){return["@",Fe(()=>e()?.name)]}})]}})},dv=t=>{const[e,n]=Se(new Date);return _r(()=>{const i=setInterval(()=>{n(new Date)},t().interval);jn(()=>clearInterval(i))}),e},MC=t=>{switch(t.kind){case"now":return"now";case"seconds":return`${t.value}s`;case"minutes":return`${t.value}m`;case"hours":return`${t.value}h`;case"days":return`${t.value}d`;case"abs":default:return t.value.toLocaleDateString()}},dg=t=>`${t.getHours()}:${t.getMinutes().toString().padStart(2,"0")}`,BC=t=>{switch(t.kind){case"today":return t.value.toLocaleTimeString();case"yesterday":case"abs":default:return t.value.toLocaleString()}},jC=t=>{switch(t.kind){case"today":return dg(t.value);case"yesterday":return`昨日 ${dg(t.value)}`;case"abs":default:return t.value.toLocaleString()}},NC=(t,e)=>Math.round(Number(e)-Number(t))/1e3,DC=(t,e)=>{const n=NC(t,e);return n<10?{kind:"now"}:n<60?{kind:"seconds",value:Math.round(n)}:n<3600?{kind:"minutes",value:Math.round(n/60)}:n<86400?{kind:"hours",value:Math.round(n/3600)}:n<604800?{kind:"days",value:Math.round(n/86400)}:{kind:"abs",value:t}},fg=(t,e)=>t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate(),UC=t=>new Date(+t-24*60*60*1e3),fv=(t,e,n)=>fg(t,e)?n({kind:"today",value:t}):fg(t,UC(e))?n({kind:"yesterday",value:t}):n({kind:"abs",value:t}),FC=(t,e=new Date)=>fv(t,e,BC),zC=(t,e=new Date)=>fv(t,e,jC),hg=(t,e=new Date,n=MC)=>n(DC(t,e)),pg=dv(()=>({interval:7e3})),gg=dv(()=>({interval:60*1e3})),hv=()=>{const{config:t}=et();return e=>{switch(t().dateFormat){case"absolute-long":return FC(e,gg());case"absolute-short":return zC(e,gg());case"relative":return hg(e,pg());default:return hg(e,pg())}}},[HC,hi]=Se({type:"Closed"}),Jr=()=>({modalState:HC,setModalState:hi,showLogin:()=>{hi({type:"Login"})},showProfile:l=>{hi({type:"Profile",pubkey:l})},showProfileEdit:()=>{hi({type:"ProfileEdit"})},showAddColumn:()=>{hi({type:"AddColumn"})},showAbout:()=>{hi({type:"About"})},closeModal:()=>{hi({type:"Closed"})}}),WC=B('<div><div class="flex content-center text-xs"><div class="h-5 w-5 shrink-0 pr-1 text-green-500" aria-hidden="true"></div><div class="flex-1 truncate break-all"><button class="select-text hover:text-blue-500 hover:underline"></button></div><div></div></div><div class="pt-1">'),qC=t=>{const e=dt(),{showProfile:n}=Jr(),i=hv(),o=Fe(()=>zr(t.event)),a=()=>o().lastTaggedEventId();return(()=>{const l=WC(),u=l.firstChild,d=u.firstChild,f=d.nextSibling,p=f.firstChild,g=f.nextSibling,v=u.nextSibling;return k(d,E(H1,{})),p.$$click=()=>n(t.event.pubkey),k(p,E(Sd,{get pubkey(){return t.event.pubkey}})),k(f,()=>e()("notification.reposted"),null),k(g,()=>i(o().createdAtAsDate())),k(v,E(ao,{get eventId(){return a()}})),l})()};vt(["click"]);const ZC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">'),KC=(t={})=>(()=>{const e=ZC();return it(e,t,!0,!0),e})(),VC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm6 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z">'),pv=(t={})=>(()=>{const e=VC();return it(e,t,!0,!0),e})(),GC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z">'),gv=(t={})=>(()=>{const e=GC();return it(e,t,!0,!0),e})(),QC=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15">'),vv=(t={})=>(()=>{const e=QC();return it(e,t,!0,!0),e})(),YC=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001z">'),mv=(t={})=>(()=>{const e=YC();return it(e,t,!0,!0),e})(),JC=B('<div class="absolute z-20">'),XC=B('<div><button type="button" class="flex items-center">'),Td=t=>{let e,n;const[i,o]=Se(!1),[a,l]=Se({}),u=$4(()=>t.children),d=()=>o(!1),f=()=>o(w=>!w),p=w=>{const x=w.target;x!=null&&!n?.contains(x)&&d()},g=()=>{document.addEventListener("mousedown",p)},v=()=>{document.removeEventListener("mousedown",p)},b=()=>{if(e==null||n==null)return;const w=e?.getBoundingClientRect(),x=n?.getBoundingClientRect();let{top:$,left:S}=w;t.position==="left"?S-=w.width:t.position==="right"?S+=w.width:t.position==="top"?($-=w.height,S-=w.left+w.width/2):($+=w.height,S+=w.width/2),$=Math.min($,window.innerHeight-x.height),S=Math.min(S,window.innerWidth-x.width),l({left:`${S}px`,top:`${$}px`})};return _r(()=>{i()?(g(),t.onOpen?.()):(v(),t.onClose?.())}),_r(sl(u,()=>{b()})),_r(()=>{i()&&b()}),er(()=>{t.ref?.({close:d,elem:n})}),jn(()=>v()),(()=>{const w=XC(),x=w.firstChild;x.$$click=()=>{f(),b()};const $=e;return typeof $=="function"?Nn($,x):e=x,k(x,()=>t.button),k(w,E(k4,{get children(){const S=JC(),M=n;return typeof M=="function"?Nn(M,S):n=S,k(S,u),Me(C=>{const I=!i(),O=!!i(),A=a();return I!==C._v$&&S.classList.toggle("hidden",C._v$=I),O!==C._v$2&&S.classList.toggle("block",C._v$2=O),C._v$3=E4(S,A,C._v$3),C},{_v$:void 0,_v$2:void 0,_v$3:void 0}),S}}),null),w})()};vt(["click"]);const eS=B('<li class="border-b hover:bg-stone-200"><button class="w-full px-4 py-1 text-start">'),tS=B('<ul class="min-w-[96px] rounded border bg-white shadow-md">'),nS=t=>{const e=()=>{t.item?.onSelect?.(),t.onClose()};return(()=>{const n=eS(),i=n.firstChild;return i.$$click=e,k(i,()=>t.item.content()),n})()},yv=t=>{let e;const n=()=>e?.close();return E(Td,{ref:i=>{e=i},get button(){return t.children},position:"bottom",get children(){const i=tS();return k(i,E(Ft,{get each(){return t.menu.filter(o=>o.when==null||o.when())},children:o=>E(nS,{item:o,onClose:n})})),i}})};vt(["click"]);const rS=B('<span class="inline-block h-4 w-4 pt-[1px] text-rose-400">'),vg=B('<span class="truncate">'),iS=B('<img class="h-4 max-w-[3rem]">'),sS=t=>t.type==="LikeDislike"&&t.content==="+",bv=t=>E(Ln,{get fallback(){return(()=>{const e=vg();return k(e,()=>t.reactionTypes.content),e})()},get children(){return[E(Ye,{get when(){return sS(t.reactionTypes)},get children(){const e=rS();return k(e,E(mv,{})),e}}),E(Ye,{get when(){return t.reactionTypes.type==="Emoji"&&t.reactionTypes},keyed:!0,children:({content:e})=>(()=>{const n=vg();return k(n,e),n})()}),E(Ye,{get when(){return t.reactionTypes.type==="CustomEmoji"&&t.reactionTypes},keyed:!0,children:({shortcode:e,url:n})=>(()=>{const i=iS();return Ue(i,"src",n),Ue(i,"alt",`:${e}:`),i})()})]}});function _v(t){return t&&t.__esModule?t.default:t}function On(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $l,$e,wv,zs,xv,mg,Qa={},$v=[],oS=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Hr(t,e){for(var n in e)t[n]=e[n];return t}function Ev(t){var e=t.parentNode;e&&e.removeChild(t)}function Pu(t,e,n){var i,o,a,l={};for(a in e)a=="key"?i=e[a]:a=="ref"?o=e[a]:l[a]=e[a];if(arguments.length>2&&(l.children=arguments.length>3?$l.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(a in t.defaultProps)l[a]===void 0&&(l[a]=t.defaultProps[a]);return Sa(t,l,i,o,null)}function Sa(t,e,n,i,o){var a={type:t,props:e,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++wv};return o==null&&$e.vnode!=null&&$e.vnode(a),a}function mr(){return{current:null}}function ls(t){return t.children}function Gn(t,e){this.props=t,this.context=e}function cs(t,e){if(e==null)return t.__?cs(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?cs(t):null}function kv(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return kv(t)}}function yg(t){(!t.__d&&(t.__d=!0)&&zs.push(t)&&!Ya.__r++||mg!==$e.debounceRendering)&&((mg=$e.debounceRendering)||xv)(Ya)}function Ya(){for(var t;Ya.__r=zs.length;)t=zs.sort(function(e,n){return e.__v.__b-n.__v.__b}),zs=[],t.some(function(e){var n,i,o,a,l,u;e.__d&&(l=(a=(n=e).__v).__e,(u=n.__P)&&(i=[],(o=Hr({},a)).__v=a.__v+1,Ad(u,a,o,n.__n,u.ownerSVGElement!==void 0,a.__h!=null?[l]:null,i,l??cs(a),a.__h),Av(i,a),a.__e!=l&&kv(a)))})}function Cv(t,e,n,i,o,a,l,u,d,f){var p,g,v,b,w,x,$,S=i&&i.__k||$v,M=S.length;for(n.__k=[],p=0;p<e.length;p++)if((b=n.__k[p]=(b=e[p])==null||typeof b=="boolean"?null:typeof b=="string"||typeof b=="number"||typeof b=="bigint"?Sa(null,b,null,null,b):Array.isArray(b)?Sa(ls,{children:b},null,null,null):b.__b>0?Sa(b.type,b.props,b.key,null,b.__v):b)!=null){if(b.__=n,b.__b=n.__b+1,(v=S[p])===null||v&&b.key==v.key&&b.type===v.type)S[p]=void 0;else for(g=0;g<M;g++){if((v=S[g])&&b.key==v.key&&b.type===v.type){S[g]=void 0;break}v=null}Ad(t,b,v=v||Qa,o,a,l,u,d,f),w=b.__e,(g=b.ref)&&v.ref!=g&&($||($=[]),v.ref&&$.push(v.ref,null,b),$.push(g,b.__c||w,b)),w!=null?(x==null&&(x=w),typeof b.type=="function"&&b.__k===v.__k?b.__d=d=Sv(b,d,t):d=Tv(t,b,v,S,w,d),typeof n.type=="function"&&(n.__d=d)):d&&v.__e==d&&d.parentNode!=t&&(d=cs(v))}for(n.__e=x,p=M;p--;)S[p]!=null&&(typeof n.type=="function"&&S[p].__e!=null&&S[p].__e==n.__d&&(n.__d=cs(i,p+1)),Iv(S[p],S[p]));if($)for(p=0;p<$.length;p++)Rv($[p],$[++p],$[++p])}function Sv(t,e,n){for(var i,o=t.__k,a=0;o&&a<o.length;a++)(i=o[a])&&(i.__=t,e=typeof i.type=="function"?Sv(i,e,n):Tv(n,i,i,o,i.__e,e));return e}function Ja(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(n){Ja(n,e)}):e.push(t)),e}function Tv(t,e,n,i,o,a){var l,u,d;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(n==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==t)t.appendChild(o),l=null;else{for(u=a,d=0;(u=u.nextSibling)&&d<i.length;d+=2)if(u==o)break e;t.insertBefore(o,a),l=a}return l!==void 0?l:o.nextSibling}function aS(t,e,n,i,o){var a;for(a in n)a==="children"||a==="key"||a in e||Xa(t,a,null,n[a],i);for(a in e)o&&typeof e[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||n[a]===e[a]||Xa(t,a,e[a],n[a],i)}function bg(t,e,n){e[0]==="-"?t.setProperty(e,n):t[e]=n==null?"":typeof n!="number"||oS.test(e)?n:n+"px"}function Xa(t,e,n,i,o){var a;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)n&&e in n||bg(t.style,e,"");if(n)for(e in n)i&&n[e]===i[e]||bg(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")a=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+a]=n,n?i||t.addEventListener(e,a?wg:_g,a):t.removeEventListener(e,a?wg:_g,a);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,n):t.removeAttribute(e))}}function _g(t){this.l[t.type+!1]($e.event?$e.event(t):t)}function wg(t){this.l[t.type+!0]($e.event?$e.event(t):t)}function Ad(t,e,n,i,o,a,l,u,d){var f,p,g,v,b,w,x,$,S,M,C,I=e.type;if(e.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,u=e.__e=n.__e,e.__h=null,a=[u]),(f=$e.__b)&&f(e);try{e:if(typeof I=="function"){if($=e.props,S=(f=I.contextType)&&i[f.__c],M=f?S?S.props.value:f.__:i,n.__c?x=(p=e.__c=n.__c).__=p.__E:("prototype"in I&&I.prototype.render?e.__c=p=new I($,M):(e.__c=p=new Gn($,M),p.constructor=I,p.render=cS),S&&S.sub(p),p.props=$,p.state||(p.state={}),p.context=M,p.__n=i,g=p.__d=!0,p.__h=[]),p.__s==null&&(p.__s=p.state),I.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=Hr({},p.__s)),Hr(p.__s,I.getDerivedStateFromProps($,p.__s))),v=p.props,b=p.state,g)I.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(I.getDerivedStateFromProps==null&&$!==v&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps($,M),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate($,p.__s,M)===!1||e.__v===n.__v){p.props=$,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),p.__h.length&&l.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate($,p.__s,M),p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(v,b,w)})}p.context=M,p.props=$,p.state=p.__s,(f=$e.__r)&&f(e),p.__d=!1,p.__v=e,p.__P=t,f=p.render(p.props,p.state,p.context),p.state=p.__s,p.getChildContext!=null&&(i=Hr(Hr({},i),p.getChildContext())),g||p.getSnapshotBeforeUpdate==null||(w=p.getSnapshotBeforeUpdate(v,b)),C=f!=null&&f.type===ls&&f.key==null?f.props.children:f,Cv(t,Array.isArray(C)?C:[C],e,n,i,o,a,l,u,d),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),x&&(p.__E=p.__=null),p.__e=!1}else a==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=lS(n.__e,e,n,i,o,a,l,d);(f=$e.diffed)&&f(e)}catch(O){e.__v=null,(d||a!=null)&&(e.__e=u,e.__h=!!d,a[a.indexOf(u)]=null),$e.__e(O,e,n)}}function Av(t,e){$e.__c&&$e.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(i){i.call(n)})}catch(i){$e.__e(i,n.__v)}})}function lS(t,e,n,i,o,a,l,u){var d,f,p,g=n.props,v=e.props,b=e.type,w=0;if(b==="svg"&&(o=!0),a!=null){for(;w<a.length;w++)if((d=a[w])&&"setAttribute"in d==!!b&&(b?d.localName===b:d.nodeType===3)){t=d,a[w]=null;break}}if(t==null){if(b===null)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,v.is&&v),a=null,u=!1}if(b===null)g===v||u&&t.data===v||(t.data=v);else{if(a=a&&$l.call(t.childNodes),f=(g=n.props||Qa).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(a!=null)for(g={},w=0;w<t.attributes.length;w++)g[t.attributes[w].name]=t.attributes[w].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(aS(t,v,g,o,u),p)e.__k=[];else if(w=e.props.children,Cv(t,Array.isArray(w)?w:[w],e,n,i,o&&b!=="foreignObject",a,l,a?a[0]:n.__k&&cs(n,0),u),a!=null)for(w=a.length;w--;)a[w]!=null&&Ev(a[w]);u||("value"in v&&(w=v.value)!==void 0&&(w!==g.value||w!==t.value||b==="progress"&&!w)&&Xa(t,"value",w,g.value,!1),"checked"in v&&(w=v.checked)!==void 0&&w!==t.checked&&Xa(t,"checked",w,g.checked,!1))}return t}function Rv(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(i){$e.__e(i,n)}}function Iv(t,e,n){var i,o;if($e.unmount&&$e.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||Rv(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(a){$e.__e(a,e)}i.base=i.__P=null}if(i=t.__k)for(o=0;o<i.length;o++)i[o]&&Iv(i[o],e,typeof t.type!="function");n||t.__e==null||Ev(t.__e),t.__e=t.__d=void 0}function cS(t,e,n){return this.constructor(t,n)}function Ov(t,e,n){var i,o,a;$e.__&&$e.__(t,e),o=(i=typeof n=="function")?null:n&&n.__k||e.__k,a=[],Ad(e,t=(!i&&n||e).__k=Pu(ls,null,[t]),o||Qa,Qa,e.ownerSVGElement!==void 0,!i&&n?[n]:o?null:e.firstChild?$l.call(e.childNodes):null,a,!i&&n?n:o?o.__e:e.firstChild,i),Av(a,t)}$l=$v.slice,$e={__e:function(t,e){for(var n,i,o;e=e.__;)if((n=e.__c)&&!n.__)try{if((i=n.constructor)&&i.getDerivedStateFromError!=null&&(n.setState(i.getDerivedStateFromError(t)),o=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t),o=n.__d),o)return n.__E=n}catch(a){t=a}throw t}},wv=0,Gn.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Hr({},this.state),typeof t=="function"&&(t=t(Hr({},n),this.props)),t&&Hr(n,t),t!=null&&this.__v&&(e&&this.__h.push(e),yg(this))},Gn.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),yg(this))},Gn.prototype.render=ls,zs=[],xv=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ya.__r=0;var uS=0;function G(t,e,n,i,o){var a,l,u={};for(l in e)l=="ref"?a=e[l]:u[l]=e[l];var d={type:t,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--uS,__source:i,__self:o};if(typeof t=="function"&&(a=t.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return $e.vnode&&$e.vnode(d),d}function dS(t,e){try{window.localStorage[`emoji-mart.${t}`]=JSON.stringify(e)}catch{}}function fS(t){try{const e=window.localStorage[`emoji-mart.${t}`];if(e)return JSON.parse(e)}catch{}}var Zr={set:dS,get:fS};const su=new Map,hS=[{v:14,emoji:"🫠"},{v:13.1,emoji:"😶‍🌫️"},{v:13,emoji:"🥸"},{v:12.1,emoji:"🧑‍🦰"},{v:12,emoji:"🥱"},{v:11,emoji:"🥰"},{v:5,emoji:"🤩"},{v:4,emoji:"👱‍♀️"},{v:3,emoji:"🤣"},{v:2,emoji:"👋🏻"},{v:1,emoji:"🙃"}];function pS(){for(const{v:t,emoji:e}of hS)if(Lv(e))return t}function gS(){return!Lv("🇨🇦")}function Lv(t){if(su.has(t))return su.get(t);const e=vS(t);return su.set(t,e),e}const vS=(()=>{let t=null;try{navigator.userAgent.includes("jsdom")||(t=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}))}catch{}if(!t)return()=>!1;const e=25,n=20,i=Math.floor(e/2);return t.font=i+"px Arial, Sans-Serif",t.textBaseline="top",t.canvas.width=n*2,t.canvas.height=e,o=>{t.clearRect(0,0,n*2,e),t.fillStyle="#FF0000",t.fillText(o,0,22),t.fillStyle="#0000FF",t.fillText(o,n,22);const a=t.getImageData(0,0,n,e).data,l=a.length;let u=0;for(;u<l&&!a[u+3];u+=4);if(u>=l)return!1;const d=n+u/4%n,f=Math.floor(u/4/n),p=t.getImageData(d,f,1,1).data;return!(a[u]!==p[0]||a[u+2]!==p[2]||t.measureText(o).width>=n)}})();var xg={latestVersion:pS,noCountryFlags:gS};const Mu=["+1","grinning","kissing_heart","heart_eyes","laughing","stuck_out_tongue_winking_eye","sweat_smile","joy","scream","disappointed","unamused","weary","sob","sunglasses","heart"];let Rt=null;function mS(t){Rt||(Rt=Zr.get("frequently")||{});const e=t.id||t;e&&(Rt[e]||(Rt[e]=0),Rt[e]+=1,Zr.set("last",e),Zr.set("frequently",Rt))}function yS({maxFrequentRows:t,perLine:e}){if(!t)return[];Rt||(Rt=Zr.get("frequently"));let n=[];if(!Rt){Rt={};for(let a in Mu.slice(0,e)){const l=Mu[a];Rt[l]=e-a,n.push(l)}return n}const i=t*e,o=Zr.get("last");for(let a in Rt)n.push(a);if(n.sort((a,l)=>{const u=Rt[l],d=Rt[a];return u==d?a.localeCompare(l):u-d}),n.length>i){const a=n.slice(i);n=n.slice(0,i);for(let l of a)l!=o&&delete Rt[l];o&&n.indexOf(o)==-1&&(delete Rt[n[n.length-1]],n.splice(-1,1,o)),Zr.set("frequently",Rt)}return n}var Pv={add:mS,get:yS,DEFAULTS:Mu},Mv={};Mv=JSON.parse('{"search":"Search","search_no_results_1":"Oh no!","search_no_results_2":"That emoji couldn’t be found","pick":"Pick an emoji…","add_custom":"Add custom emoji","categories":{"activity":"Activity","custom":"Custom","flags":"Flags","foods":"Food & Drink","frequent":"Frequently used","nature":"Animals & Nature","objects":"Objects","people":"Smileys & People","places":"Travel & Places","search":"Search Results","symbols":"Symbols"},"skins":{"1":"Default","2":"Light","3":"Medium-Light","4":"Medium","5":"Medium-Dark","6":"Dark","choose":"Choose default skin tone"}}');var br={autoFocus:{value:!1},dynamicWidth:{value:!1},emojiButtonColors:{value:null},emojiButtonRadius:{value:"100%"},emojiButtonSize:{value:36},emojiSize:{value:24},emojiVersion:{value:14,choices:[1,2,3,4,5,11,12,12.1,13,13.1,14]},exceptEmojis:{value:[]},icons:{value:"auto",choices:["auto","outline","solid"]},locale:{value:"en",choices:["en","ar","be","cs","de","es","fa","fi","fr","hi","it","ja","kr","nl","pl","pt","ru","sa","tr","uk","vi","zh"]},maxFrequentRows:{value:4},navPosition:{value:"top",choices:["top","bottom","none"]},noCountryFlags:{value:!1},noResultsEmoji:{value:null},perLine:{value:9},previewEmoji:{value:null},previewPosition:{value:"bottom",choices:["top","bottom","none"]},searchPosition:{value:"sticky",choices:["sticky","static","none"]},set:{value:"native",choices:["native","apple","facebook","google","twitter"]},skin:{value:1,choices:[1,2,3,4,5,6]},skinTonePosition:{value:"preview",choices:["preview","search","none"]},theme:{value:"auto",choices:["auto","light","dark"]},categories:null,categoryIcons:null,custom:null,data:null,i18n:null,getImageURL:null,getSpritesheetURL:null,onAddCustomEmoji:null,onClickOutside:null,onEmojiSelect:null,stickySearch:{deprecated:!0,value:!0}};let Pt=null,He=null;const ou={};async function $g(t){if(ou[t])return ou[t];const n=await(await fetch(t)).json();return ou[t]=n,n}let au=null,Bv=null,jv=!1;function El(t,{caller:e}={}){return au||(au=new Promise(n=>{Bv=n})),t?bS(t):e&&!jv&&console.warn(`\`${e}\` requires data to be initialized first. Promise will be pending until \`init\` is called.`),au}async function bS(t){jv=!0;let{emojiVersion:e,set:n,locale:i}=t;if(e||(e=br.emojiVersion.value),n||(n=br.set.value),i||(i=br.locale.value),He)He.categories=He.categories.filter(d=>!d.name);else{He=(typeof t.data=="function"?await t.data():t.data)||await $g(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/sets/${e}/${n}.json`),He.emoticons={},He.natives={},He.categories.unshift({id:"frequent",emojis:[]});for(const d in He.aliases){const f=He.aliases[d],p=He.emojis[f];p&&(p.aliases||(p.aliases=[]),p.aliases.push(d))}He.originalCategories=He.categories}if(Pt=(typeof t.i18n=="function"?await t.i18n():t.i18n)||(i=="en"?_v(Mv):await $g(`https://cdn.jsdelivr.net/npm/@emoji-mart/data@latest/i18n/${i}.json`)),t.custom)for(let d in t.custom){d=parseInt(d);const f=t.custom[d],p=t.custom[d-1];if(!(!f.emojis||!f.emojis.length)){f.id||(f.id=`custom_${d+1}`),f.name||(f.name=Pt.categories.custom),p&&!f.icon&&(f.target=p.target||p),He.categories.push(f);for(const g of f.emojis)He.emojis[g.id]=g}}t.categories&&(He.categories=He.originalCategories.filter(d=>t.categories.indexOf(d.id)!=-1).sort((d,f)=>{const p=t.categories.indexOf(d.id),g=t.categories.indexOf(f.id);return p-g}));let o=null,a=null;n=="native"&&(o=xg.latestVersion(),a=t.noCountryFlags||xg.noCountryFlags());let l=He.categories.length,u=!1;for(;l--;){const d=He.categories[l];if(d.id=="frequent"){let{maxFrequentRows:g,perLine:v}=t;g=g>=0?g:br.maxFrequentRows.value,v||(v=br.perLine.value),d.emojis=Pv.get({maxFrequentRows:g,perLine:v})}if(!d.emojis||!d.emojis.length){He.categories.splice(l,1);continue}const{categoryIcons:f}=t;if(f){const g=f[d.id];g&&!d.icon&&(d.icon=g)}let p=d.emojis.length;for(;p--;){const g=d.emojis[p],v=g.id?g:He.emojis[g],b=()=>{d.emojis.splice(p,1)};if(!v||t.exceptEmojis&&t.exceptEmojis.includes(v.id)){b();continue}if(o&&v.version>o){b();continue}if(a&&d.id=="flags"&&!ES.includes(v.id)){b();continue}if(!v.search){if(u=!0,v.search=","+[[v.id,!1],[v.name,!0],[v.keywords,!1],[v.emoticons,!1]].map(([x,$])=>{if(x)return(Array.isArray(x)?x:[x]).map(S=>($?S.split(/[-|_|\s]+/):[S]).map(M=>M.toLowerCase())).flat()}).flat().filter(x=>x&&x.trim()).join(","),v.emoticons)for(const x of v.emoticons)He.emoticons[x]||(He.emoticons[x]=v.id);let w=0;for(const x of v.skins){if(!x)continue;w++;const{native:$}=x;$&&(He.natives[$]=v.id,v.search+=`,${$}`);const S=w==1?"":`:skin-tone-${w}:`;x.shortcodes=`:${v.id}:${S}`}}}}u&&es.reset(),Bv()}function Nv(t,e,n){t||(t={});const i={};for(let o in e)i[o]=Dv(o,t,e,n);return i}function Dv(t,e,n,i){const o=n[t];let a=i&&i.getAttribute(t)||(e[t]!=null&&e[t]!=null?e[t]:null);return o&&(a!=null&&o.value&&typeof o.value!=typeof a&&(typeof o.value=="boolean"?a=a!="false":a=o.value.constructor(a)),o.transform&&a&&(a=o.transform(a)),(a==null||o.choices&&o.choices.indexOf(a)==-1)&&(a=o.value)),a}const _S=/^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;let Bu=null;function wS(t){return t.id?t:He.emojis[t]||He.emojis[He.aliases[t]]||He.emojis[He.natives[t]]}function xS(){Bu=null}async function $S(t,{maxResults:e,caller:n}={}){if(!t||!t.trim().length)return null;e||(e=90),await El(null,{caller:n||"SearchIndex.search"});const i=t.toLowerCase().replace(/(\w)-/,"$1 ").split(/[\s|,]+/).filter((u,d,f)=>u.trim()&&f.indexOf(u)==d);if(!i.length)return;let o=Bu||(Bu=Object.values(He.emojis)),a,l;for(const u of i){if(!o.length)break;a=[],l={};for(const d of o){if(!d.search)continue;const f=d.search.indexOf(`,${u}`);f!=-1&&(a.push(d),l[d.id]||(l[d.id]=0),l[d.id]+=d.id==u?0:f+1)}o=a}return a.length<2||(a.sort((u,d)=>{const f=l[u.id],p=l[d.id];return f==p?u.id.localeCompare(d.id):f-p}),a.length>e&&(a=a.slice(0,e))),a}var es={search:$S,get:wS,reset:xS,SHORTCODES_REGEX:_S};const ES=["checkered_flag","crossed_flags","pirate_flag","rainbow-flag","transgender_flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"];function kS(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length&&t.every((n,i)=>n==e[i])}async function CS(t=1){for(let e in[...Array(t).keys()])await new Promise(requestAnimationFrame)}function SS(t,{skinIndex:e=0}={}){const n=t.skins[e]||(()=>(e=0,t.skins[e]))(),i={id:t.id,name:t.name,native:n.native,unified:n.unified,keywords:t.keywords,shortcodes:n.shortcodes||t.shortcodes};return t.skins.length>1&&(i.skin=e+1),n.src&&(i.src=n.src),t.aliases&&t.aliases.length&&(i.aliases=t.aliases),t.emoticons&&t.emoticons.length&&(i.emoticons=t.emoticons),i}const TS={activity:{outline:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:G("path",{d:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113"})}),solid:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:G("path",{d:"M16.17 337.5c0 44.98 7.565 83.54 13.98 107.9C35.22 464.3 50.46 496 174.9 496c9.566 0 19.59-.4707 29.84-1.271L17.33 307.3C16.53 317.6 16.17 327.7 16.17 337.5zM495.8 174.5c0-44.98-7.565-83.53-13.98-107.9c-4.688-17.54-18.34-31.23-36.04-35.95C435.5 27.91 392.9 16 337 16c-9.564 0-19.59 .4707-29.84 1.271l187.5 187.5C495.5 194.4 495.8 184.3 495.8 174.5zM26.77 248.8l236.3 236.3c142-36.1 203.9-150.4 222.2-221.1L248.9 26.87C106.9 62.96 45.07 177.2 26.77 248.8zM256 335.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L164.7 283.3C161.6 280.2 160 276.1 160 271.1c0-8.529 6.865-16 16-16c4.095 0 8.189 1.562 11.31 4.688l64.01 64C254.4 327.8 256 331.9 256 335.1zM304 287.1c0 9.141-7.474 16-16 16c-4.094 0-8.188-1.564-11.31-4.689L212.7 235.3C209.6 232.2 208 228.1 208 223.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01C302.5 279.8 304 283.9 304 287.1zM256 175.1c0-9.141 7.473-16 16-16c4.094 0 8.188 1.562 11.31 4.688l64.01 64.01c3.125 3.125 4.688 7.219 4.688 11.31c0 9.133-7.468 16-16 16c-4.094 0-8.189-1.562-11.31-4.688l-64.01-64.01C257.6 184.2 256 180.1 256 175.1z"})})},custom:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:G("path",{d:"M417.1 368c-5.937 10.27-16.69 16-27.75 16c-5.422 0-10.92-1.375-15.97-4.281L256 311.4V448c0 17.67-14.33 32-31.1 32S192 465.7 192 448V311.4l-118.3 68.29C68.67 382.6 63.17 384 57.75 384c-11.06 0-21.81-5.734-27.75-16c-8.828-15.31-3.594-34.88 11.72-43.72L159.1 256L41.72 187.7C26.41 178.9 21.17 159.3 29.1 144C36.63 132.5 49.26 126.7 61.65 128.2C65.78 128.7 69.88 130.1 73.72 132.3L192 200.6V64c0-17.67 14.33-32 32-32S256 46.33 256 64v136.6l118.3-68.29c3.838-2.213 7.939-3.539 12.07-4.051C398.7 126.7 411.4 132.5 417.1 144c8.828 15.31 3.594 34.88-11.72 43.72L288 256l118.3 68.28C421.6 333.1 426.8 352.7 417.1 368z"})}),flags:{outline:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:G("path",{d:"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z"})}),solid:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:G("path",{d:"M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"})})},foods:{outline:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:G("path",{d:"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9"})}),solid:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:G("path",{d:"M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H448C460.7 256 472.9 261.1 481.9 270.1zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7z"})})},frequent:{outline:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[G("path",{d:"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z"}),G("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"})]}),solid:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:G("path",{d:"M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"})})},nature:{outline:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[G("path",{d:"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8"}),G("path",{d:"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235"})]}),solid:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",children:G("path",{d:"M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z"})})},objects:{outline:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[G("path",{d:"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z"}),G("path",{d:"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789"})]}),solid:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:G("path",{d:"M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z"})})},people:{outline:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[G("path",{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10"}),G("path",{d:"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0"})]}),solid:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:G("path",{d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 432C332.1 432 396.2 382 415.2 314.1C419.1 300.4 407.8 288 393.6 288H118.4C104.2 288 92.92 300.4 96.76 314.1C115.8 382 179.9 432 256 432V432zM176.4 160C158.7 160 144.4 174.3 144.4 192C144.4 209.7 158.7 224 176.4 224C194 224 208.4 209.7 208.4 192C208.4 174.3 194 160 176.4 160zM336.4 224C354 224 368.4 209.7 368.4 192C368.4 174.3 354 160 336.4 160C318.7 160 304.4 174.3 304.4 192C304.4 209.7 318.7 224 336.4 224z"})})},places:{outline:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:[G("path",{d:"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5"}),G("path",{d:"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z"})]}),solid:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:G("path",{d:"M39.61 196.8L74.8 96.29C88.27 57.78 124.6 32 165.4 32H346.6C387.4 32 423.7 57.78 437.2 96.29L472.4 196.8C495.6 206.4 512 229.3 512 256V448C512 465.7 497.7 480 480 480H448C430.3 480 416 465.7 416 448V400H96V448C96 465.7 81.67 480 64 480H32C14.33 480 0 465.7 0 448V256C0 229.3 16.36 206.4 39.61 196.8V196.8zM109.1 192H402.9L376.8 117.4C372.3 104.6 360.2 96 346.6 96H165.4C151.8 96 139.7 104.6 135.2 117.4L109.1 192zM96 256C78.33 256 64 270.3 64 288C64 305.7 78.33 320 96 320C113.7 320 128 305.7 128 288C128 270.3 113.7 256 96 256zM416 320C433.7 320 448 305.7 448 288C448 270.3 433.7 256 416 256C398.3 256 384 270.3 384 288C384 305.7 398.3 320 416 320z"})})},symbols:{outline:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:G("path",{d:"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76"})}),solid:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:G("path",{d:"M500.3 7.251C507.7 13.33 512 22.41 512 31.1V175.1C512 202.5 483.3 223.1 447.1 223.1C412.7 223.1 383.1 202.5 383.1 175.1C383.1 149.5 412.7 127.1 447.1 127.1V71.03L351.1 90.23V207.1C351.1 234.5 323.3 255.1 287.1 255.1C252.7 255.1 223.1 234.5 223.1 207.1C223.1 181.5 252.7 159.1 287.1 159.1V63.1C287.1 48.74 298.8 35.61 313.7 32.62L473.7 .6198C483.1-1.261 492.9 1.173 500.3 7.251H500.3zM74.66 303.1L86.5 286.2C92.43 277.3 102.4 271.1 113.1 271.1H174.9C185.6 271.1 195.6 277.3 201.5 286.2L213.3 303.1H239.1C266.5 303.1 287.1 325.5 287.1 351.1V463.1C287.1 490.5 266.5 511.1 239.1 511.1H47.1C21.49 511.1-.0019 490.5-.0019 463.1V351.1C-.0019 325.5 21.49 303.1 47.1 303.1H74.66zM143.1 359.1C117.5 359.1 95.1 381.5 95.1 407.1C95.1 434.5 117.5 455.1 143.1 455.1C170.5 455.1 191.1 434.5 191.1 407.1C191.1 381.5 170.5 359.1 143.1 359.1zM440.3 367.1H496C502.7 367.1 508.6 372.1 510.1 378.4C513.3 384.6 511.6 391.7 506.5 396L378.5 508C372.9 512.1 364.6 513.3 358.6 508.9C352.6 504.6 350.3 496.6 353.3 489.7L391.7 399.1H336C329.3 399.1 323.4 395.9 321 389.6C318.7 383.4 320.4 376.3 325.5 371.1L453.5 259.1C459.1 255 467.4 254.7 473.4 259.1C479.4 263.4 481.6 271.4 478.7 278.3L440.3 367.1zM116.7 219.1L19.85 119.2C-8.112 90.26-6.614 42.31 24.85 15.34C51.82-8.137 93.26-3.642 118.2 21.83L128.2 32.32L137.7 21.83C162.7-3.642 203.6-8.137 231.6 15.34C262.6 42.31 264.1 90.26 236.1 119.2L139.7 219.1C133.2 225.6 122.7 225.6 116.7 219.1H116.7z"})})}},AS={loupe:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:G("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})}),delete:G("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:G("path",{d:"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"})})};var el={categories:TS,search:AS};function ju(t){let{id:e,skin:n,emoji:i}=t;if(t.shortcodes){const u=t.shortcodes.match(es.SHORTCODES_REGEX);u&&(e=u[1],u[2]&&(n=u[2]))}if(i||(i=es.get(e||t.native)),!i)return t.fallback;const o=i.skins[n-1]||i.skins[0],a=o.src||(t.set!="native"&&!t.spritesheet?typeof t.getImageURL=="function"?t.getImageURL(t.set,o.unified):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/64/${o.unified}.png`:void 0),l=typeof t.getSpritesheetURL=="function"?t.getSpritesheetURL(t.set):`https://cdn.jsdelivr.net/npm/emoji-datasource-${t.set}@14.0.0/img/${t.set}/sheets-256/64.png`;return G("span",{class:"emoji-mart-emoji","data-emoji-set":t.set,children:a?G("img",{style:{maxWidth:t.size||"1em",maxHeight:t.size||"1em",display:"inline-block"},alt:o.native||o.shortcodes,src:a}):t.set=="native"?G("span",{style:{fontSize:t.size,fontFamily:'"EmojiMart", "Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "Android Emoji"'},children:o.native}):G("span",{style:{display:"block",width:t.size,height:t.size,backgroundImage:`url(${l})`,backgroundSize:`${100*He.sheet.cols}% ${100*He.sheet.rows}%`,backgroundPosition:`${100/(He.sheet.cols-1)*o.x}% ${100/(He.sheet.rows-1)*o.y}%`}})})}const RS=typeof window<"u"&&window.HTMLElement?window.HTMLElement:Object;class Uv extends RS{static get observedAttributes(){return Object.keys(this.Props)}update(e={}){for(let n in e)this.attributeChangedCallback(n,null,e[n])}attributeChangedCallback(e,n,i){if(!this.component)return;const o=Dv(e,{[e]:i},this.constructor.Props,this);this.component.componentWillReceiveProps?this.component.componentWillReceiveProps({[e]:o}):(this.component.props[e]=o,this.component.forceUpdate())}disconnectedCallback(){this.disconnected=!0,this.component&&this.component.unregister&&this.component.unregister()}constructor(e={}){if(super(),this.props=e,e.parent||e.ref){let n=null;const i=e.parent||(n=e.ref&&e.ref.current);n&&(n.innerHTML=""),i&&i.appendChild(this)}}}class IS extends Uv{setShadow(){this.attachShadow({mode:"open"})}injectStyles(e){if(!e)return;const n=document.createElement("style");n.textContent=e,this.shadowRoot.insertBefore(n,this.shadowRoot.firstChild)}constructor(e,{styles:n}={}){super(e),this.setShadow(),this.injectStyles(n)}}var Fv={fallback:"",id:"",native:"",shortcodes:"",size:{value:"",transform:t=>/\D/.test(t)?t:`${t}px`},set:br.set,skin:br.skin};class zv extends Uv{async connectedCallback(){const e=Nv(this.props,Fv,this);e.element=this,e.ref=n=>{this.component=n},await El(),!this.disconnected&&Ov(G(ju,{...e}),this)}constructor(e){super(e)}}On(zv,"Props",Fv);typeof customElements<"u"&&!customElements.get("em-emoji")&&customElements.define("em-emoji",zv);var Eg,Nu=[],kg=$e.__b,Cg=$e.__r,Sg=$e.diffed,Tg=$e.__c,Ag=$e.unmount;function OS(){var t;for(Nu.sort(function(e,n){return e.__v.__b-n.__v.__b});t=Nu.pop();)if(t.__P)try{t.__H.__h.forEach(Ta),t.__H.__h.forEach(Du),t.__H.__h=[]}catch(e){t.__H.__h=[],$e.__e(e,t.__v)}}$e.__b=function(t){kg&&kg(t)},$e.__r=function(t){Cg&&Cg(t);var e=t.__c.__H;e&&(e.__h.forEach(Ta),e.__h.forEach(Du),e.__h=[])},$e.diffed=function(t){Sg&&Sg(t);var e=t.__c;e&&e.__H&&e.__H.__h.length&&(Nu.push(e)!==1&&Eg===$e.requestAnimationFrame||((Eg=$e.requestAnimationFrame)||function(n){var i,o=function(){clearTimeout(a),Rg&&cancelAnimationFrame(i),setTimeout(n)},a=setTimeout(o,100);Rg&&(i=requestAnimationFrame(o))})(OS))},$e.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Ta),n.__h=n.__h.filter(function(i){return!i.__||Du(i)})}catch(i){e.some(function(o){o.__h&&(o.__h=[])}),e=[],$e.__e(i,n.__v)}}),Tg&&Tg(t,e)},$e.unmount=function(t){Ag&&Ag(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Ta(i)}catch(o){e=o}}),e&&$e.__e(e,n.__v))};var Rg=typeof requestAnimationFrame=="function";function Ta(t){var e=t.__c;typeof e=="function"&&(t.__c=void 0,e())}function Du(t){t.__c=t.__()}function LS(t,e){for(var n in e)t[n]=e[n];return t}function Ig(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var i in e)if(i!=="__source"&&t[i]!==e[i])return!0;return!1}function tl(t){this.props=t}(tl.prototype=new Gn).isPureReactComponent=!0,tl.prototype.shouldComponentUpdate=function(t,e){return Ig(this.props,t)||Ig(this.state,e)};var Og=$e.__b;$e.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Og&&Og(t)};var PS=$e.__e;$e.__e=function(t,e,n){if(t.then){for(var i,o=e;o=o.__;)if((i=o.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}PS(t,e,n)};var Lg=$e.unmount;function lu(){this.__u=0,this.t=null,this.__b=null}function Hv(t){var e=t.__.__c;return e&&e.__e&&e.__e(t)}function _a(){this.u=null,this.o=null}$e.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&t.__h===!0&&(t.type=null),Lg&&Lg(t)},(lu.prototype=new Gn).__c=function(t,e){var n=e.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var o=Hv(i.__v),a=!1,l=function(){a||(a=!0,n.__R=null,o?o(u):u())};n.__R=l;var u=function(){if(!--i.__u){if(i.state.__e){var f=i.state.__e;i.__v.__k[0]=function g(v,b,w){return v&&(v.__v=null,v.__k=v.__k&&v.__k.map(function(x){return g(x,b,w)}),v.__c&&v.__c.__P===b&&(v.__e&&w.insertBefore(v.__e,v.__d),v.__c.__e=!0,v.__c.__P=w)),v}(f,f.__c.__P,f.__c.__O)}var p;for(i.setState({__e:i.__b=null});p=i.t.pop();)p.forceUpdate()}},d=e.__h===!0;i.__u++||d||i.setState({__e:i.__b=i.__v.__k[0]}),t.then(l,l)},lu.prototype.componentWillUnmount=function(){this.t=[]},lu.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=function a(l,u,d){return l&&(l.__c&&l.__c.__H&&(l.__c.__H.__.forEach(function(f){typeof f.__c=="function"&&f.__c()}),l.__c.__H=null),(l=LS({},l)).__c!=null&&(l.__c.__P===d&&(l.__c.__P=u),l.__c=null),l.__k=l.__k&&l.__k.map(function(f){return a(f,u,d)})),l}(this.__b,n,i.__O=i.__P)}this.__b=null}var o=e.__e&&Pu(ls,null,t.fallback);return o&&(o.__h=null),[Pu(ls,null,e.__e?null:t.children),o]};var Pg=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};(_a.prototype=new Gn).__e=function(t){var e=this,n=Hv(e.__v),i=e.o.get(t);return i[0]++,function(o){var a=function(){e.props.revealOrder?(i.push(o),Pg(e,t,i)):o()};n?n(a):a()}},_a.prototype.render=function(t){this.u=null,this.o=new Map;var e=Ja(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},_a.prototype.componentDidUpdate=_a.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Pg(t,n,e)})};var MS=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,BS=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,jS=typeof document<"u",NS=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(t)};Gn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(Gn.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Mg=$e.event;function DS(){}function US(){return this.cancelBubble}function FS(){return this.defaultPrevented}$e.event=function(t){return Mg&&(t=Mg(t)),t.persist=DS,t.isPropagationStopped=US,t.isDefaultPrevented=FS,t.nativeEvent=t};var Bg={configurable:!0,get:function(){return this.class}},jg=$e.vnode;$e.vnode=function(t){var e=t.type,n=t.props,i=n;if(typeof e=="string"){var o=e.indexOf("-")===-1;for(var a in i={},n){var l=n[a];jS&&a==="children"&&e==="noscript"||a==="value"&&"defaultValue"in n&&l==null||(a==="defaultValue"&&"value"in n&&n.value==null?a="value":a==="download"&&l===!0?l="":/ondoubleclick/i.test(a)?a="ondblclick":/^onchange(textarea|input)/i.test(a+e)&&!NS(n.type)?a="oninput":/^onfocus$/i.test(a)?a="onfocusin":/^onblur$/i.test(a)?a="onfocusout":/^on(Ani|Tra|Tou|BeforeInp)/.test(a)?a=a.toLowerCase():o&&BS.test(a)?a=a.replace(/[A-Z0-9]/,"-$&").toLowerCase():l===null&&(l=void 0),i[a]=l)}e=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Ja(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),e=="select"&&i.defaultValue!=null&&(i.value=Ja(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),t.props=i,n.class!=n.className&&(Bg.enumerable="className"in n,n.className!=null&&(i.class=n.className),Object.defineProperty(i,"className",Bg))}t.$$typeof=MS,jg&&jg(t)};var Ng=$e.__r;$e.__r=function(t){Ng&&Ng(t),t.__c};const zS={light:"outline",dark:"solid"};class HS extends tl{renderIcon(e){const{icon:n}=e;if(n){if(n.svg)return G("span",{class:"flex",dangerouslySetInnerHTML:{__html:n.svg}});if(n.src)return G("img",{src:n.src})}const i=el.categories[e.id]||el.categories.custom,o=this.props.icons=="auto"?zS[this.props.theme]:this.props.icons;return i[o]||i}render(){let e=null;return G("nav",{id:"nav",class:"padding","data-position":this.props.position,dir:this.props.dir,children:G("div",{class:"flex relative",children:[this.categories.map((n,i)=>{const o=n.name||Pt.categories[n.id],a=!this.props.unfocused&&n.id==this.state.categoryId;return a&&(e=i),G("button",{"aria-label":o,"aria-selected":a||void 0,title:o,type:"button",class:"flex flex-grow flex-center",onMouseDown:l=>l.preventDefault(),onClick:()=>{this.props.onClick({category:n,i})},children:this.renderIcon(n)})}),G("div",{class:"bar",style:{width:`${100/this.categories.length}%`,opacity:e==null?0:1,transform:this.props.dir==="rtl"?`scaleX(-1) translateX(${e*100}%)`:`translateX(${e*100}%)`}})]})})}constructor(){super(),this.categories=He.categories.filter(e=>!e.target),this.state={categoryId:this.categories[0].id}}}class WS extends tl{shouldComponentUpdate(e){for(let n in e)if(n!="children"&&e[n]!=this.props[n])return!0;return!1}render(){return this.props.children}}const wa={rowsPerRender:10};class qS extends Gn{getInitialState(e=this.props){return{skin:Zr.get("skin")||e.skin,theme:this.initTheme(e.theme)}}componentWillMount(){this.dir=Pt.rtl?"rtl":"ltr",this.refs={menu:mr(),navigation:mr(),scroll:mr(),search:mr(),searchInput:mr(),skinToneButton:mr(),skinToneRadio:mr()},this.initGrid(),this.props.stickySearch==!1&&this.props.searchPosition=="sticky"&&(console.warn("[EmojiMart] Deprecation warning: `stickySearch` has been renamed `searchPosition`."),this.props.searchPosition="static")}componentDidMount(){if(this.register(),this.shadowRoot=this.base.parentNode,this.props.autoFocus){const{searchInput:e}=this.refs;e.current&&e.current.focus()}}componentWillReceiveProps(e){this.nextState||(this.nextState={});for(const n in e)this.nextState[n]=e[n];clearTimeout(this.nextStateTimer),this.nextStateTimer=setTimeout(()=>{let n=!1;for(const o in this.nextState)this.props[o]=this.nextState[o],(o==="custom"||o==="categories")&&(n=!0);delete this.nextState;const i=this.getInitialState();if(n)return this.reset(i);this.setState(i)})}componentWillUnmount(){this.unregister()}async reset(e={}){await El(this.props),this.initGrid(),this.unobserve(),this.setState(e,()=>{this.observeCategories(),this.observeRows()})}register(){document.addEventListener("click",this.handleClickOutside),this.observe()}unregister(){document.removeEventListener("click",this.handleClickOutside),this.unobserve()}observe(){this.observeCategories(),this.observeRows()}unobserve({except:e=[]}={}){Array.isArray(e)||(e=[e]);for(const n of this.observers)e.includes(n)||n.disconnect();this.observers=[].concat(e)}initGrid(){const{categories:e}=He;this.refs.categories=new Map;const n=He.categories.map(o=>o.id).join(",");this.navKey&&this.navKey!=n&&this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0),this.navKey=n,this.grid=[],this.grid.setsize=0;const i=(o,a)=>{const l=[];l.__categoryId=a.id,l.__index=o.length,this.grid.push(l);const u=this.grid.length-1,d=u%wa.rowsPerRender?{}:mr();return d.index=u,d.posinset=this.grid.setsize+1,o.push(d),l};for(let o of e){const a=[];let l=i(a,o);for(let u of o.emojis)l.length==this.getPerLine()&&(l=i(a,o)),this.grid.setsize+=1,l.push(u);this.refs.categories.set(o.id,{root:mr(),rows:a})}}initTheme(e){if(e!="auto")return e;if(!this.darkMedia){if(this.darkMedia=matchMedia("(prefers-color-scheme: dark)"),this.darkMedia.media.match(/^not/))return"light";this.darkMedia.addListener(()=>{this.props.theme=="auto"&&this.setState({theme:this.darkMedia.matches?"dark":"light"})})}return this.darkMedia.matches?"dark":"light"}initDynamicPerLine(e=this.props){if(!e.dynamicWidth)return;const{element:n,emojiButtonSize:i}=e,o=()=>{const{width:l}=n.getBoundingClientRect();return Math.floor(l/i)},a=new ResizeObserver(()=>{this.unobserve({except:a}),this.setState({perLine:o()},()=>{this.initGrid(),this.forceUpdate(()=>{this.observeCategories(),this.observeRows()})})});return a.observe(n),this.observers.push(a),o()}getPerLine(){return this.state.perLine||this.props.perLine}getEmojiByPos([e,n]){const i=this.state.searchResults||this.grid,o=i[e]&&i[e][n];if(o)return es.get(o)}observeCategories(){const e=this.refs.navigation.current;if(!e)return;const n=new Map,i=l=>{l!=e.state.categoryId&&e.setState({categoryId:l})},o={root:this.refs.scroll.current,threshold:[0,1]},a=new IntersectionObserver(l=>{for(const d of l){const f=d.target.dataset.id;n.set(f,d.intersectionRatio)}const u=[...n];for(const[d,f]of u)if(f){i(d);break}},o);for(const{root:l}of this.refs.categories.values())a.observe(l.current);this.observers.push(a)}observeRows(){const e={...this.state.visibleRows},n=new IntersectionObserver(i=>{for(const o of i){const a=parseInt(o.target.dataset.index);o.isIntersecting?e[a]=!0:delete e[a]}this.setState({visibleRows:e})},{root:this.refs.scroll.current,rootMargin:`${this.props.emojiButtonSize*(wa.rowsPerRender+5)}px 0px ${this.props.emojiButtonSize*wa.rowsPerRender}px`});for(const{rows:i}of this.refs.categories.values())for(const o of i)o.current&&n.observe(o.current);this.observers.push(n)}preventDefault(e){e.preventDefault()}unfocusSearch(){const e=this.refs.searchInput.current;e&&e.blur()}navigate({e,input:n,left:i,right:o,up:a,down:l}){const u=this.state.searchResults||this.grid;if(!u.length)return;let[d,f]=this.state.pos;const p=(()=>{if(d==0&&f==0&&!e.repeat&&(i||a))return null;if(d==-1)return!e.repeat&&(o||l)&&n.selectionStart==n.value.length?[0,0]:null;if(i||o){let g=u[d];const v=i?-1:1;if(f+=v,!g[f]){if(d+=v,g=u[d],!g)return d=i?0:u.length-1,f=i?0:u[d].length-1,[d,f];f=i?g.length-1:0}return[d,f]}if(a||l){d+=a?-1:1;const g=u[d];return g?(g[f]||(f=g.length-1),[d,f]):(d=a?0:u.length-1,f=a?0:u[d].length-1,[d,f])}})();if(p)e.preventDefault();else{this.state.pos[0]>-1&&this.setState({pos:[-1,-1]});return}this.setState({pos:p,keyboard:!0},()=>{this.scrollTo({row:p[0]})})}scrollTo({categoryId:e,row:n}){const i=this.state.searchResults||this.grid;if(!i.length)return;const o=this.refs.scroll.current,a=o.getBoundingClientRect();let l=0;if(n>=0&&(e=i[n].__categoryId),e&&(l=(this.refs[e]||this.refs.categories.get(e).root).current.getBoundingClientRect().top-(a.top-o.scrollTop)+1),n>=0)if(!n)l=0;else{const u=i[n].__index,d=l+u*this.props.emojiButtonSize,f=d+this.props.emojiButtonSize+this.props.emojiButtonSize*.88;if(d<o.scrollTop)l=d;else if(f>o.scrollTop+a.height)l=f-a.height;else return}this.ignoreMouse(),o.scrollTop=l}ignoreMouse(){this.mouseIsIgnored=!0,clearTimeout(this.ignoreMouseTimer),this.ignoreMouseTimer=setTimeout(()=>{delete this.mouseIsIgnored},100)}handleEmojiOver(e){this.mouseIsIgnored||this.state.showSkins||this.setState({pos:e||[-1,-1],keyboard:!1})}handleEmojiClick({e,emoji:n,pos:i}){if(this.props.onEmojiSelect&&(!n&&i&&(n=this.getEmojiByPos(i)),n)){const o=SS(n,{skinIndex:this.state.skin-1});this.props.maxFrequentRows&&Pv.add(o,this.props),this.props.onEmojiSelect(o,e)}}closeSkins(){this.state.showSkins&&(this.setState({showSkins:null,tempSkin:null}),this.base.removeEventListener("click",this.handleBaseClick),this.base.removeEventListener("keydown",this.handleBaseKeydown))}handleSkinMouseOver(e){this.setState({tempSkin:e})}handleSkinClick(e){this.ignoreMouse(),this.closeSkins(),this.setState({skin:e,tempSkin:null}),Zr.set("skin",e)}renderNav(){return G(HS,{ref:this.refs.navigation,icons:this.props.icons,theme:this.state.theme,dir:this.dir,unfocused:!!this.state.searchResults,position:this.props.navPosition,onClick:this.handleCategoryClick},this.navKey)}renderPreview(){const e=this.getEmojiByPos(this.state.pos),n=this.state.searchResults&&!this.state.searchResults.length;return G("div",{id:"preview",class:"flex flex-middle",dir:this.dir,"data-position":this.props.previewPosition,children:[G("div",{class:"flex flex-middle flex-grow",children:[G("div",{class:"flex flex-auto flex-middle flex-center",style:{height:this.props.emojiButtonSize,fontSize:this.props.emojiButtonSize},children:G(ju,{emoji:e,id:n?this.props.noResultsEmoji||"cry":this.props.previewEmoji||(this.props.previewPosition=="top"?"point_down":"point_up"),set:this.props.set,size:this.props.emojiButtonSize,skin:this.state.tempSkin||this.state.skin,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})}),G("div",{class:`margin-${this.dir[0]}`,children:e||n?G("div",{class:`padding-${this.dir[2]} align-${this.dir[0]}`,children:[G("div",{class:"preview-title ellipsis",children:e?e.name:Pt.search_no_results_1}),G("div",{class:"preview-subtitle ellipsis color-c",children:e?e.skins[0].shortcodes:Pt.search_no_results_2})]}):G("div",{class:"preview-placeholder color-c",children:Pt.pick})})]}),!e&&this.props.skinTonePosition=="preview"&&this.renderSkinToneButton()]})}renderEmojiButton(e,{pos:n,posinset:i,grid:o}){const a=this.props.emojiButtonSize,l=this.state.tempSkin||this.state.skin,d=(e.skins[l-1]||e.skins[0]).native,f=kS(this.state.pos,n),p=n.concat(e.id).join("");return G(WS,{selected:f,skin:l,size:a,children:G("button",{"aria-label":d,"aria-selected":f||void 0,"aria-posinset":i,"aria-setsize":o.setsize,"data-keyboard":this.state.keyboard,title:this.props.previewPosition=="none"?e.name:void 0,type:"button",class:"flex flex-center flex-middle",tabindex:"-1",onClick:g=>this.handleEmojiClick({e:g,emoji:e}),onMouseEnter:()=>this.handleEmojiOver(n),onMouseLeave:()=>this.handleEmojiOver(),style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize,fontSize:this.props.emojiSize,lineHeight:0},children:[G("div",{"aria-hidden":"true",class:"background",style:{borderRadius:this.props.emojiButtonRadius,backgroundColor:this.props.emojiButtonColors?this.props.emojiButtonColors[(i-1)%this.props.emojiButtonColors.length]:void 0}}),G(ju,{emoji:e,set:this.props.set,size:this.props.emojiSize,skin:l,spritesheet:!0,getSpritesheetURL:this.props.getSpritesheetURL})]})},p)}renderSearch(){const e=this.props.previewPosition=="none"||this.props.skinTonePosition=="search";return G("div",{children:[G("div",{class:"spacer"}),G("div",{class:"flex flex-middle",children:[G("div",{class:"search relative flex-grow",children:[G("input",{type:"search",ref:this.refs.searchInput,placeholder:Pt.search,onClick:this.handleSearchClick,onInput:this.handleSearchInput,onKeyDown:this.handleSearchKeyDown,autoComplete:"off"}),G("span",{class:"icon loupe flex",children:el.search.loupe}),this.state.searchResults&&G("button",{title:"Clear","aria-label":"Clear",type:"button",class:"icon delete flex",onClick:this.clearSearch,onMouseDown:this.preventDefault,children:el.search.delete})]}),e&&this.renderSkinToneButton()]})]})}renderSearchResults(){const{searchResults:e}=this.state;return e?G("div",{class:"category",ref:this.refs.search,children:[G("div",{class:`sticky padding-small align-${this.dir[0]}`,children:Pt.categories.search}),G("div",{children:e.length?e.map((n,i)=>G("div",{class:"flex",children:n.map((o,a)=>this.renderEmojiButton(o,{pos:[i,a],posinset:i*this.props.perLine+a+1,grid:e}))})):G("div",{class:`padding-small align-${this.dir[0]}`,children:this.props.onAddCustomEmoji&&G("a",{onClick:this.props.onAddCustomEmoji,children:Pt.add_custom})})})]}):null}renderCategories(){const{categories:e}=He,n=!!this.state.searchResults,i=this.getPerLine();return G("div",{style:{visibility:n?"hidden":void 0,display:n?"none":void 0,height:"100%"},children:e.map(o=>{const{root:a,rows:l}=this.refs.categories.get(o.id);return G("div",{"data-id":o.target?o.target.id:o.id,class:"category",ref:a,children:[G("div",{class:`sticky padding-small align-${this.dir[0]}`,children:o.name||Pt.categories[o.id]}),G("div",{class:"relative",style:{height:l.length*this.props.emojiButtonSize},children:l.map((u,d)=>{const f=u.index-u.index%wa.rowsPerRender,p=this.state.visibleRows[f],g="current"in u?u:void 0;if(!p&&!g)return null;const v=d*i,b=v+i,w=o.emojis.slice(v,b);return w.length<i&&w.push(...new Array(i-w.length)),G("div",{"data-index":u.index,ref:g,class:"flex row",style:{top:d*this.props.emojiButtonSize},children:p&&w.map((x,$)=>{if(!x)return G("div",{style:{width:this.props.emojiButtonSize,height:this.props.emojiButtonSize}});const S=es.get(x);return this.renderEmojiButton(S,{pos:[u.index,$],posinset:u.posinset+$,grid:this.grid})})},u.index)})})]})})})}renderSkinToneButton(){return this.props.skinTonePosition=="none"?null:G("div",{class:"flex flex-auto flex-center flex-middle",style:{position:"relative",width:this.props.emojiButtonSize,height:this.props.emojiButtonSize},children:G("button",{type:"button",ref:this.refs.skinToneButton,class:"skin-tone-button flex flex-auto flex-center flex-middle","aria-selected":this.state.showSkins?"":void 0,"aria-label":Pt.skins.choose,title:Pt.skins.choose,onClick:this.openSkins,style:{width:this.props.emojiSize,height:this.props.emojiSize},children:G("span",{class:`skin-tone skin-tone-${this.state.skin}`})})})}renderLiveRegion(){const e=this.getEmojiByPos(this.state.pos),n=e?e.name:"";return G("div",{"aria-live":"polite",class:"sr-only",children:n})}renderSkins(){const n=this.refs.skinToneButton.current.getBoundingClientRect(),i=this.base.getBoundingClientRect(),o={};return this.dir=="ltr"?o.right=i.right-n.right-3:o.left=n.left-i.left-3,this.props.previewPosition=="bottom"&&this.props.skinTonePosition=="preview"?o.bottom=i.bottom-n.top+6:(o.top=n.bottom-i.top+3,o.bottom="auto"),G("div",{ref:this.refs.menu,role:"radiogroup",dir:this.dir,"aria-label":Pt.skins.choose,class:"menu hidden","data-position":o.top?"top":"bottom",style:o,children:[...Array(6).keys()].map(a=>{const l=a+1,u=this.state.skin==l;return G("div",{children:[G("input",{type:"radio",name:"skin-tone",value:l,"aria-label":Pt.skins[l],ref:u?this.refs.skinToneRadio:null,defaultChecked:u,onChange:()=>this.handleSkinMouseOver(l),onKeyDown:d=>{(d.code=="Enter"||d.code=="Space"||d.code=="Tab")&&(d.preventDefault(),this.handleSkinClick(l))}}),G("button",{"aria-hidden":"true",tabindex:"-1",onClick:()=>this.handleSkinClick(l),onMouseEnter:()=>this.handleSkinMouseOver(l),onMouseLeave:()=>this.handleSkinMouseOver(),class:"option flex flex-grow flex-middle",children:[G("span",{class:`skin-tone skin-tone-${l}`}),G("span",{class:"margin-small-lr",children:Pt.skins[l]})]})]})})})}render(){const e=this.props.perLine*this.props.emojiButtonSize;return G("section",{id:"root",class:"flex flex-column",dir:this.dir,style:{width:this.props.dynamicWidth?"100%":`calc(${e}px + (var(--padding) + var(--sidebar-width)))`},"data-emoji-set":this.props.set,"data-theme":this.state.theme,"data-menu":this.state.showSkins?"":void 0,children:[this.props.previewPosition=="top"&&this.renderPreview(),this.props.navPosition=="top"&&this.renderNav(),this.props.searchPosition=="sticky"&&G("div",{class:"padding-lr",children:this.renderSearch()}),G("div",{ref:this.refs.scroll,class:"scroll flex-grow padding-lr",children:G("div",{style:{width:this.props.dynamicWidth?"100%":e,height:"100%"},children:[this.props.searchPosition=="static"&&this.renderSearch(),this.renderSearchResults(),this.renderCategories()]})}),this.props.navPosition=="bottom"&&this.renderNav(),this.props.previewPosition=="bottom"&&this.renderPreview(),this.state.showSkins&&this.renderSkins(),this.renderLiveRegion()]})}constructor(e){super(),On(this,"handleClickOutside",n=>{const{element:i}=this.props;n.target!=i&&(this.state.showSkins&&this.closeSkins(),this.props.onClickOutside&&this.props.onClickOutside(n))}),On(this,"handleBaseClick",n=>{this.state.showSkins&&(n.target.closest(".menu")||(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins()))}),On(this,"handleBaseKeydown",n=>{this.state.showSkins&&n.key=="Escape"&&(n.preventDefault(),n.stopImmediatePropagation(),this.closeSkins())}),On(this,"handleSearchClick",()=>{this.getEmojiByPos(this.state.pos)&&this.setState({pos:[-1,-1]})}),On(this,"handleSearchInput",async()=>{const n=this.refs.searchInput.current;if(!n)return;const{value:i}=n,o=await es.search(i),a=()=>{this.refs.scroll.current&&(this.refs.scroll.current.scrollTop=0)};if(!o)return this.setState({searchResults:o,pos:[-1,-1]},a);const l=n.selectionStart==n.value.length?[0,0]:[-1,-1],u=[];u.setsize=o.length;let d=null;for(let f of o)(!u.length||d.length==this.getPerLine())&&(d=[],d.__categoryId="search",d.__index=u.length,u.push(d)),d.push(f);this.ignoreMouse(),this.setState({searchResults:u,pos:l},a)}),On(this,"handleSearchKeyDown",n=>{const i=n.currentTarget;switch(n.stopImmediatePropagation(),n.key){case"ArrowLeft":this.navigate({e:n,input:i,left:!0});break;case"ArrowRight":this.navigate({e:n,input:i,right:!0});break;case"ArrowUp":this.navigate({e:n,input:i,up:!0});break;case"ArrowDown":this.navigate({e:n,input:i,down:!0});break;case"Enter":n.preventDefault(),this.handleEmojiClick({e:n,pos:this.state.pos});break;case"Escape":n.preventDefault(),this.state.searchResults?this.clearSearch():this.unfocusSearch();break}}),On(this,"clearSearch",()=>{const n=this.refs.searchInput.current;n&&(n.value="",n.focus(),this.handleSearchInput())}),On(this,"handleCategoryClick",({category:n,i})=>{this.scrollTo(i==0?{row:-1}:{categoryId:n.id})}),On(this,"openSkins",n=>{const{currentTarget:i}=n,o=i.getBoundingClientRect();this.setState({showSkins:o},async()=>{await CS(2);const a=this.refs.menu.current;a&&(a.classList.remove("hidden"),this.refs.skinToneRadio.current.focus(),this.base.addEventListener("click",this.handleBaseClick,!0),this.base.addEventListener("keydown",this.handleBaseKeydown,!0))})}),this.observers=[],this.state={pos:[-1,-1],perLine:this.initDynamicPerLine(e),visibleRows:{0:!0},...this.getInitialState(e)}}}class Rd extends IS{async connectedCallback(){const e=Nv(this.props,br,this);e.element=this,e.ref=n=>{this.component=n},await El(e),!this.disconnected&&Ov(G(qS,{...e}),this.shadowRoot)}constructor(e){super(e,{styles:_v(Wv)})}}On(Rd,"Props",br);typeof customElements<"u"&&!customElements.get("em-emoji-picker")&&customElements.define("em-emoji-picker",Rd);var Wv={};Wv=`:host {
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

`;const qv=t=>{let e,n;const{config:i}=et(),o=()=>{n!=null&&(n.remove(),n=void 0)},a=()=>{n!=null&&console.error("unexpected state"),o();const l=Object.entries(i().customEmojis).map(([d,{url:f}])=>({id:d,name:d,keywords:[d],skins:[{src:f}]}));n=new Rd({data:async()=>(await fetch("https://cdn.jsdelivr.net/npm/@emoji-mart/data")).json(),custom:[{id:"custom",name:"Custom Emojis",emojis:l}],autoFocus:!1,theme:"light",onEmojiSelect:d=>{console.log(d),t.onEmojiSelect?.(d),e?.close()}}),e?.elem?.appendChild(n)};return jn(()=>{o()}),E(Td,{ref:l=>{e=l},position:"bottom",get button(){return t.children},onOpen:a,onClose:o})},ZS=B("<div>"),KS=B('<button class="text-xs text-stone-600 hover:text-stone-800">隠す'),VS=B("<br>"),GS=B("<span>: "),QS=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),YS=t=>{const e=dt(),[n,i]=Se(!1);return E(me,{get when(){return!t.contentWarning.contentWarning||n()},get fallback(){return(()=>{const o=QS();return o.$$click=()=>i(!0),k(o,()=>e()("post.contentWarning.show"),null),k(o,E(me,{get when(){return t.contentWarning.reason!=null},get children(){return[VS(),(()=>{const a=GS(),l=a.firstChild;return k(a,()=>e()("post.contentWarning.reason"),l),k(a,()=>t.contentWarning.reason,null),a})()]}}),null),o})()},get children(){return[(()=>{const o=ZS();return k(o,()=>t.children),o})(),E(me,{get when(){return t.contentWarning.contentWarning},get children(){const o=KS();return o.$$click=()=>i(!1),o}})]}})};vt(["click"]);let cu=!1;const[xa,JS]=Se(void 0),Xr=()=>(er(()=>{if(xa()!=null)return;let t=0;const e=setInterval(()=>{if(t>=20){if(clearInterval(e),xa()==null)throw window.nostr==null?new Error("Failed to obtain public key: Timeout. window.nostr is not defined."):new Error("Failed to obtain public key: Timeout");return}window.nostr!=null&&xa()==null&&!cu&&(cu=!0,window.nostr.getPublicKey().then(n=>{clearInterval(e),JS(n)}).catch(n=>console.error("failed to obtain public key: ",n)).finally(()=>{cu=!1})),t+=1},200)}),xa),XS=B('<div class="flex gap-2 overflow-x-auto py-1">'),eT=B('<span class="ml-1 text-sm">'),tT=B('<button class="flex h-6 max-w-[128px] items-center rounded border px-1" type="button">'),nT=t=>{const{config:e}=et(),n=Xr();return(()=>{const i=XS();return k(i,E(Ft,{get each(){return[...t.reactionsGrouped.entries()]},children:([,o])=>{const a=o.findIndex(u=>u.pubkey===n())>=0,l=Ga(o[0]).toReactionTypes();return(()=>{const u=tT();return u.$$click=()=>t.onReaction(l),k(u,E(bv,{reactionTypes:l}),null),k(u,E(me,{get when(){return!e().hideCount},get children(){const d=eT();return k(d,()=>o.length),d}}),null),Me(d=>ka(u,{"text-zinc-400":!a,"hover:bg-zinc-50":!a,"bg-rose-50":a,"border-rose-200":a,"text-rose-400":a},d)),u})()}})),i})()};vt(["click"]);const Zv=t=>{const{profile:e}=bs(()=>({pubkey:t.pubkey}));return E(me,{get when(){return(e()?.name?.length??0)>0},get fallback(){return`@${yo(t.pubkey)}`},get children(){return["@",Fe(()=>e()?.name??t.pubkey)]}})},rT=B("<div>"),xr=t=>{let e;const[n,i]=Se(!1);return er(()=>{const o=new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&i(!0)})},{threshold:t.threshold??0});e!=null&&o.observe(e),jn(()=>{o.disconnect()})}),[(()=>{const o=rT(),a=e;return typeof a=="function"?Nn(a,o):e=o,o})(),E(me,{get when(){return n()},get fallback(){return t.fallback},keyed:!0,children:o=>t.children()})]},iT=B('<a target="_blank" rel="noreferrer noopener">'),Xn=t=>{const e=()=>{try{const n=new URL(t.href.toString());return n.protocol==="https:"||n.protocol==="http:"}catch{return!1}};return E(me,{get when(){return e()},get fallback(){return t.href},get children(){const n=iT();return k(n,()=>t.children??t.href),Me(i=>{const o=t.class,a=t.href;return o!==i._v$&&Vu(n,i._v$=o),a!==i._v$2&&Ue(n,"href",i._v$2=a),i},{_v$:void 0,_v$2:void 0}),n}})},sT=t=>{try{const e=new URL(t);return/\.(jpeg|jpg|png|gif|webp|avif|apng|svg)$/i.test(e.pathname)}catch{return!1}},oT=t=>{try{const e=new URL(t);return/\.(mpg|mpeg|mp4|avi|mov|webm|ogv)$/i.test(e.pathname)}catch{return!1}},aT=t=>{try{const e=new URL(t);return/^wss?:$/.test(e.protocol)}catch{return!1}},lT=t=>{try{const e=new URL(t);if(e.host==="i.imgur.com"||e.host==="imgur.com"){const n=e.pathname.match(/^\/([a-zA-Z0-9]+)\.(jpg|jpeg|png|gif)/);if(n!=null){const i=new URL(e),o=n[1];return i.host="i.imgur.com",i.pathname=`${o}l.webp`,i.toString()}return e.toString()}if(e.host==="i.gyazo.com"){const n=new URL(e);return n.host="thumb.gyazo.com",n.pathname=`/thumb/640${e.pathname}`,n.toString()}return e.toString()}catch{return t}},Kv=t=>{try{const e=new URL(t);return e.protocol==="https:"&&(e.host==="twitter.com"||e.host==="x.com")}catch{return!1}},cT=["www.youtube.com","m.youtube.com","youtube.com"],uT=t=>{try{const e=new URL(t);if(e.protocol!=="https:")return null;if(cT.includes(e.host)){if(e.pathname==="/watch"){const n=e.searchParams.get("v");if(n!=null)return{videoId:n}}if(e.pathname.startsWith("/shorts/")){const n=e.pathname.match(/^\/shorts\/([0-9a-zA-Z_-]*)$/);if(n)return{videoId:n[1]}}}return e.host==="youtu.be"&&e.pathname.lastIndexOf("/")===0?{videoId:e.pathname}:null}catch{return null}},dT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),fT=B('<div class="aspect-video max-w-full">'),hT=B('<img class="max-h-64 max-w-full rounded object-contain shadow hover:shadow-md">'),pT=t=>{let e;const n=dt(),[i,o]=Se(t.initialHidden);return E(me,{get when(){return!i()},get fallback(){return(()=>{const a=dT();return a.$$click=()=>o(!1),k(a,()=>n()("post.showImage")),a})()},get children(){return E(xr,{get fallback(){return(()=>{const a=fT();return k(a,E(Xn,{get href(){return t.url}})),a})()},children:()=>E(Xn,{class:"my-2 block",get href(){return t.url},get children(){const a=hT(),l=e;return typeof l=="function"?Nn(l,a):e=a,Me(u=>{const d=lT(t.url),f=t.url;return d!==u._v$&&Ue(a,"src",u._v$=d),f!==u._v$2&&Ue(a,"alt",u._v$2=f),u},{_v$:void 0,_v$2:void 0}),a}})})}})};vt(["click"]);const gT=B('<div class="my-1 rounded border p-1">'),vT=t=>E(me,{get when(){return t.mentionedEvent.marker!=null&&t.mentionedEvent.marker.length>0},get fallback(){return E(Ks,{get eventId(){return t.mentionedEvent.eventId}})},get children(){const e=gT();return k(e,E(xr,{children:()=>E(ao,{get eventId(){return t.mentionedEvent.eventId},embedding:!1,actions:!1,get ensureKinds(){return[lt.Text]}})})),e}}),mT=B('<button class="inline select-text text-blue-500 underline">'),uu=t=>{const{showProfile:e}=Jr(),n=()=>{e(t.pubkey)};return(()=>{const i=mT();return i.$$click=n,k(i,E(Zv,{get pubkey(){return t.pubkey}})),i})()};vt(["click"]);const yT=t=>{const e={};return Array.from(t.head.querySelectorAll("meta")).forEach(n=>{const i=n.getAttribute("property"),o=n.getAttribute("content");i!=null&&o!=null&&(e[i]=o)}),e["og:image"]!=null&&e["og:title"]!=null&&e["og:description"]!=null&&e["og:url"]?{title:e["og:title"],description:e["og:description"],image:e["og:image"],url:e["og:url"]}:null},bT=t=>{const e=new DOMParser().parseFromString(t,"text/html");return yT(e)},_T=async t=>{const e=["www3.nhk.or.jp"],n=new URL(t);if(!e.includes(n.host))return null;const o=await(await fetch(n,{headers:{Accept:"text/html"}})).text();return bT(o)},wT=t=>{const n=Si(()=>["useOgp",t().url],({queryKey:[,o]})=>_T(o),{staleTime:144e5,cacheTime:144e5,refetchOnWindowFocus:!1,refetchOnMount:!1});return{query:n,ogp:()=>n.data}},xT=B('<blockquote class="twitter-tweet"><a target="_blank" rel="noreferrer noopener">'),$T=B('<div class="my-2 rounded-lg border transition-colors hover:bg-slate-100"><img class="max-w-full rounded-t-lg object-contain shadow"><div class="mb-1 p-1"><div class="text-xs text-slate-500"></div><div class="text-sm"></div><div class="text-xs text-slate-500">'),ET=B('<div class="aspect-video max-w-full">'),kT=B('<div class="my-2 aspect-video w-full"><iframe loading="lazy" title="YouTube" class="my-2 h-full w-full" allowfullscreen>'),Dg=t=>{try{const e=new URL(t);return e.host="twitter.com",e.href}catch{return t}},CT=t=>{const e=new URL("https://www.youtube.com/embed/");return e.pathname+=t,e.searchParams.set("origin",window.location.origin),e.href},ST=t=>{let e;return _r(()=>{Kv(t.href)&&window.twttr?.widgets?.load(e)}),(()=>{const n=xT(),i=n.firstChild,o=e;return typeof o=="function"?Nn(o,n):e=n,k(i,()=>Dg(t.href)),Me(a=>{const l=t.class,u=Dg(t.href);return l!==a._v$&&Vu(i,a._v$=l),u!==a._v$2&&Ue(i,"href",a._v$2=u),a},{_v$:void 0,_v$2:void 0}),n})()},TT=t=>{const{ogp:e}=wT(()=>({url:t.url}));return E(me,{get when(){return e()},get fallback(){return E(Xn,{get class(){return t.class},get href(){return t.url}})},keyed:!0,children:n=>E(Xn,{get href(){return t.url},get children(){const i=$T(),o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling,d=u.nextSibling;return k(l,()=>new URL(n.url).host),k(u,()=>n.title),k(d,()=>n.description),Me(f=>{const p=n.title,g=n.image;return p!==f._v$3&&Ue(o,"alt",f._v$3=p),g!==f._v$4&&Ue(o,"src",f._v$4=g),f},{_v$3:void 0,_v$4:void 0}),i}})})},AT=t=>{const{config:e}=et();return E(Ln,{get fallback(){return E(Xn,{get class(){return t.class},get href(){return t.href}})},get children(){return[E(Ye,{get when(){return Fe(()=>!!e().embedding.twitter)()&&Kv(t.href)},get children(){return E(xr,{children:()=>E(ST,{get class(){return t.class},get href(){return t.href}})})}}),E(Ye,{get when(){return Fe(()=>!!e().embedding.youtube)()&&uT(t.href)},keyed:!0,children:({videoId:n})=>E(xr,{get fallback(){return(()=>{const i=ET();return k(i,E(Xn,{get href(){return t.href}})),i})()},children:()=>(()=>{const i=kT(),o=i.firstChild;return Me(()=>Ue(o,"src",CT(n))),i})()})}),E(Ye,{get when(){return e().embedding.ogp},get children(){return E(xr,{children:()=>E(TT,{get class(){return t.class},get url(){return t.href}})})}})]}})},RT=B('<button class="rounded bg-stone-300 p-3 text-xs text-stone-600 hover:shadow">'),IT=B('<div class="aspect-video max-w-full">'),OT=B('<video class="max-h-64 max-w-full rounded-sm object-contain shadow" controls><a>'),LT=t=>{let e;const n=dt(),[i,o]=Se(t.initialHidden);return E(me,{get when(){return!i()},get fallback(){return(()=>{const a=RT();return a.$$click=()=>o(!1),k(a,()=>n()("post.showVideo")),a})()},get children(){return E(xr,{get fallback(){return IT()},children:()=>E(Xn,{class:"my-2 block",get href(){return t.url},get children(){const a=OT(),l=a.firstChild,u=e;return typeof u=="function"?Nn(u,a):e=a,k(l,()=>n()("post.download")),Me(d=>{const f=t.url,p=t.url;return f!==d._v$&&Ue(a,"src",d._v$=f),p!==d._v$2&&Ue(l,"href",d._v$2=p),d},{_v$:void 0,_v$2:void 0}),a}})})}})};vt(["click"]);const[Id,PT]=Se({}),Vv=t=>{Id()[t]==null&&PT(e=>({...e,[t]:new MessageChannel}))},MT=t=>{const e=()=>Id()[t().id],n=(o,a)=>{const l={requestId:o,request:a};e().port1.postMessage(l)},i=(o,a=1e3)=>new Promise((l,u)=>{let d;const f=p=>{const g=p.data;g.requestId===o&&(e().port1.removeEventListener("message",f),g.ok?l(g.response):u(g.error),d!=null&&clearTimeout(d))};d=setTimeout(()=>{e().port1.removeEventListener("message",f),u(new Error(`TimeoutError: ${o}`))},a),e().port1.addEventListener("message",f,!1),e().port1.start()});return er(()=>{const{id:o}=t();Vv(o)}),async o=>{const a=Math.random().toString(),l=i(a);return n(a,o),l}},BT=t=>{const e=Fe(t),n=()=>Id()[e().id];er(()=>{const{id:i}=e();Vv(i);const o=n().port2,a=l=>{const{requestId:u,request:d}=l.data,f=e().handler(d);(f instanceof Promise?f:Promise.resolve(f)).then(g=>{const v={requestId:u,ok:!0,response:g};o.postMessage(v)}).catch(g=>{const v={requestId:u,ok:!1,error:g};o.postMessage(v)})};o.addEventListener("message",a),o.start(),jn(()=>{o.removeEventListener("message",a)})})},kl=()=>MT(()=>({id:"CommandChannel"})),jT=t=>{BT(()=>({id:"CommandChannel",handler:e=>{const{commandType:n,handler:i}=t();e.command===n&&i(e)}}))},du=B("<span>"),Ug=B('<button class="select-text text-blue-500 underline">'),Fg=B('<div class="my-1 rounded border p-1">'),NT=B('<button class="select-text text-blue-500 underline"> (<!>)'),DT=B('<span class="text-blue-500 underline">'),UT=B('<img class="inline-block h-8 max-w-[128px] align-middle">'),Gv=t=>{const{config:e,saveColumn:n}=et(),i=kl(),o=l=>{n(wd({query:l})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))},a=l=>{n(K1({name:l,relayUrls:[l]})),i({command:"moveToLastColumn"}).catch(u=>console.error(u))};return E(Ft,{get each(){return t.parsed},children:l=>{if(l.type==="PlainText")return(()=>{const u=du();return k(u,()=>l.content),u})();if(l.type==="URL"){const u=()=>!e().showMedia||!t.embedding||(t.initialHidden??!1);return sT(l.content)?E(pT,{get url(){return l.content},get initialHidden(){return u()}}):oT(l.content)?E(LT,{get url(){return l.content},get initialHidden(){return u()}}):aT(l.content)?(()=>{const d=Ug();return d.$$click=()=>a(l.content),k(d,()=>l.content),d})():E(AT,{class:"text-blue-500 underline",get href(){return l.content}})}if(l.type==="TagReferenceResolved"){if(l.reference==null)return(()=>{const u=du();return k(u,()=>l.content),u})();if(l.reference.type==="MentionedUser")return E(uu,{get pubkey(){return l.reference.pubkey}});if(l.reference.type==="MentionedEvent")return t.embedding?E(vT,{get mentionedEvent(){return l.reference}}):E(Ks,{get eventId(){return l.reference.eventId}})}if(l.type==="Bech32Entity"){if(l.data.type==="note"&&t.embedding)return(()=>{const u=Fg();return k(u,E(ao,{get eventId(){return l.data.data},actions:!1,embedding:!1,get ensureKinds(){return[lt.Text]}})),u})();if(l.data.type==="nevent"&&t.embedding)return(()=>{const u=Fg();return k(u,E(ao,{get eventId(){return l.data.data.id},actions:!1,embedding:!1})),u})();if(l.data.type==="npub")return E(uu,{get pubkey(){return l.data.data}});if(l.data.type==="nprofile")return E(uu,{get pubkey(){return l.data.data.pubkey}});if(l.data.type==="nrelay"){const u=l.data.data;return(()=>{const d=NT(),f=d.firstChild,p=f.nextSibling;return p.nextSibling,d.$$click=()=>a(u),k(d,u,f),k(d,()=>l.content,p),d})()}return(()=>{const u=DT();return k(u,()=>l.content),u})()}return l.type==="HashTag"?(()=>{const u=Ug();return u.$$click=()=>o(l.content),k(u,()=>l.content),u})():l.type==="CustomEmojiResolved"?l.url==null?(()=>{const u=du();return k(u,()=>l.content),u})():(()=>{const u=UT();return Me(d=>{const f=l.url,p=l.content,g=l.shortcode;return f!==d._v$&&Ue(u,"src",d._v$=f),p!==d._v$2&&Ue(u,"alt",d._v$2=p),g!==d._v$3&&Ue(u,"title",d._v$3=g),d},{_v$:void 0,_v$2:void 0,_v$3:void 0}),u})():(console.error("Not all ParsedTextNoteNodes are covered",l),null)}})};vt(["click"]);const FT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12">'),us=(t={})=>(()=>{const e=FT();return it(e,t,!0,!0),e})(),zT=B('<div class="absolute left-0 top-0 z-10 flex h-screen w-screen cursor-default place-content-center place-items-start bg-black/30">'),HT=t=>{let e;const n=i=>{i.target===e&&t.onClose?.()};return(()=>{const i=zT();i.$$click=n;const o=e;return typeof o=="function"?Nn(o,i):e=i,k(i,()=>t.children),i})()};vt(["click"]);const WT=B('<div class="w-[640px] max-w-full"><button class="w-full pt-1 text-start text-stone-800" aria-label="Close"><span class="inline-block h-8 w-8"></span></button><div class="flex max-h-[calc(100vh-6em)] flex-col overflow-y-scroll rounded-xl border bg-white text-stone-700 shadow-lg">'),Oi=t=>E(HT,{onClose:()=>t.onClose?.(),get children(){const e=WT(),n=e.firstChild,i=n.firstChild,o=n.nextSibling;return n.$$click=()=>t.onClose?.(),k(i,E(me,{get when(){return t?.closeButton},get fallback(){return E(us,{})},keyed:!0,children:a=>a()})),k(o,()=>t.children),e}});vt(["click"]);const qT=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9z">'),ZT=(t={})=>(()=>{const e=qT();return it(e,t,!0,!0),e})(),KT=B('<div class="absolute left-[-2.5rem] top-[-1.5rem] rounded bg-rose-300 p-1 text-xs font-bold text-white shadow">Copied!'),VT=B('<div class="relative inline-block"><button type="button">'),GT=t=>{const[e,n]=Se(!1),i=()=>{navigator.clipboard.writeText(t.text).then(()=>{n(!0),setTimeout(()=>n(!1),1e3)}).catch(o=>{console.error("failed to copy",o)})};return(()=>{const o=VT(),a=o.firstChild;return a.$$click=i,k(a,E(ZT,{})),k(o,E(me,{get when(){return e()},get children(){return KT()}}),null),Me(()=>Vu(a,t.class)),o})()};vt(["click"]);const QT=B('<div class="p-2"><pre class="whitespace-pre-wrap break-all rounded border p-4 text-xs"></pre><div class="flex justify-end">'),YT=t=>{const e=Fe(()=>JSON.stringify(t.event,null,2));return E(Oi,{get onClose(){return t.onClose},get children(){const n=QT(),i=n.firstChild,o=i.nextSibling;return k(i,e),k(o,E(GT,{class:"h-4 w-4",get text(){return e()}})),n}})},JT=B('<div class="profile-name truncate pr-1 font-bold hover:underline">'),XT=B('<div class="flex w-full items-center gap-1"><button type="button" class="profile-icon h-6 w-6 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="profile flex min-w-0 select-text truncate hover:text-blue-500"><span class="profile flex min-w-0 truncate hover:text-blue-500"><div class="profile-username truncate text-zinc-600">'),eA=B('<img alt="icon" class="h-full w-full rounded object-cover">'),tA=t=>{const{profile:e}=bs(()=>({pubkey:t.pubkey}));return(()=>{const n=XT(),i=n.firstChild,o=i.nextSibling,a=o.firstChild,l=a.firstChild,u=l.firstChild,d=u.firstChild;return i.$$click=f=>{f.preventDefault(),t.onShowProfile?.()},k(i,E(me,{get when(){return e()?.picture},keyed:!0,children:f=>(()=>{const p=eA();return Ue(p,"src",f),p})()})),l.$$click=f=>{f.preventDefault(),t?.onShowProfile?.()},k(u,E(me,{get when(){return(e()?.display_name?.length??0)>0},get children(){const f=JT();return k(f,()=>e()?.display_name),f}}),d),k(d,E(me,{get when(){return e()?.name},get fallback(){return`@${yo(t.pubkey)}`},keyed:!0,children:f=>`@${f}`})),n})()};vt(["click"]);const nA=B('<div class="px-4 py-2"><div> 件</div><div>'),rA=B('<div class="flex border-t py-1">'),iA=B('<div class="h-6">'),Uu=t=>{const{showProfile:e}=Jr();return E(Oi,{get onClose(){return t.onClose},get children(){const n=nA(),i=n.firstChild,o=i.firstChild,a=i.nextSibling;return k(i,()=>t.data.length,o),k(a,E(Ft,{get each(){return t.data},children:l=>{const u=()=>t.pubkeyExtractor(l);return(()=>{const d=rA();return k(d,E(me,{get when(){return t.renderInfo},keyed:!0,children:f=>f(l)}),null),k(d,E(xr,{get fallback(){return iA()},children:()=>E(tA,{get pubkey(){return u()},onShowProfile:()=>e(u())})}),null),d})()}})),n}})},sA=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z">'),Qv=(t={})=>(()=>{const e=sA();return it(e,t,!0,!0),e})(),oA=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z">'),aA=(t={})=>(()=>{const e=oA();return it(e,t,!0,!0),e})(),lA=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405z">'),cA=(t={})=>(()=>{const e=lA();return it(e,t,!0,!0),e})();var Od={},bo={},Yv={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(d,f,p){this.fn=d,this.context=f,this.once=p||!1}function a(d,f,p,g,v){if(typeof p!="function")throw new TypeError("The listener must be a function");var b=new o(p,g||d,v),w=n?n+f:f;return d._events[w]?d._events[w].fn?d._events[w]=[d._events[w],b]:d._events[w].push(b):(d._events[w]=b,d._eventsCount++),d}function l(d,f){--d._eventsCount===0?d._events=new i:delete d._events[f]}function u(){this._events=new i,this._eventsCount=0}u.prototype.eventNames=function(){var f=[],p,g;if(this._eventsCount===0)return f;for(g in p=this._events)e.call(p,g)&&f.push(n?g.slice(1):g);return Object.getOwnPropertySymbols?f.concat(Object.getOwnPropertySymbols(p)):f},u.prototype.listeners=function(f){var p=n?n+f:f,g=this._events[p];if(!g)return[];if(g.fn)return[g.fn];for(var v=0,b=g.length,w=new Array(b);v<b;v++)w[v]=g[v].fn;return w},u.prototype.listenerCount=function(f){var p=n?n+f:f,g=this._events[p];return g?g.fn?1:g.length:0},u.prototype.emit=function(f,p,g,v,b,w){var x=n?n+f:f;if(!this._events[x])return!1;var $=this._events[x],S=arguments.length,M,C;if($.fn){switch($.once&&this.removeListener(f,$.fn,void 0,!0),S){case 1:return $.fn.call($.context),!0;case 2:return $.fn.call($.context,p),!0;case 3:return $.fn.call($.context,p,g),!0;case 4:return $.fn.call($.context,p,g,v),!0;case 5:return $.fn.call($.context,p,g,v,b),!0;case 6:return $.fn.call($.context,p,g,v,b,w),!0}for(C=1,M=new Array(S-1);C<S;C++)M[C-1]=arguments[C];$.fn.apply($.context,M)}else{var I=$.length,O;for(C=0;C<I;C++)switch($[C].once&&this.removeListener(f,$[C].fn,void 0,!0),S){case 1:$[C].fn.call($[C].context);break;case 2:$[C].fn.call($[C].context,p);break;case 3:$[C].fn.call($[C].context,p,g);break;case 4:$[C].fn.call($[C].context,p,g,v);break;default:if(!M)for(O=1,M=new Array(S-1);O<S;O++)M[O-1]=arguments[O];$[C].fn.apply($[C].context,M)}}return!0},u.prototype.on=function(f,p,g){return a(this,f,p,g,!1)},u.prototype.once=function(f,p,g){return a(this,f,p,g,!0)},u.prototype.removeListener=function(f,p,g,v){var b=n?n+f:f;if(!this._events[b])return this;if(!p)return l(this,b),this;var w=this._events[b];if(w.fn)w.fn===p&&(!v||w.once)&&(!g||w.context===g)&&l(this,b);else{for(var x=0,$=[],S=w.length;x<S;x++)(w[x].fn!==p||v&&!w[x].once||g&&w[x].context!==g)&&$.push(w[x]);$.length?this._events[b]=$.length===1?$[0]:$:l(this,b)}return this},u.prototype.removeAllListeners=function(f){var p;return f?(p=n?n+f:f,this._events[p]&&l(this,p)):(this._events=new i,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=n,u.EventEmitter=u,t.exports=u})(Yv);var Cl=Yv.exports,Ld={},_o={};Object.defineProperty(_o,"__esModule",{value:!0});_o.SearchResult=void 0;const uA=/\$&/g,dA=/\$(\d)/g;class fA{constructor(e,n,i){this.data=e,this.term=n,this.strategy=i}getReplacementData(e){let n=this.strategy.replace(this.data);if(n==null)return null;let i="";Array.isArray(n)&&(i=n[1],n=n[0]);const o=this.strategy.match(e);if(o==null||o.index==null)return null;const a=n.replace(uA,o[0]).replace(dA,(l,u)=>o[parseInt(u)]);return{start:o.index,end:o.index+o[0].length,beforeCursor:a,afterCursor:i}}replace(e,n){const i=this.getReplacementData(e);if(i!==null)return n=i.afterCursor+n,[[e.slice(0,i.start),i.beforeCursor,e.slice(i.end)].join(""),n]}render(){return this.strategy.renderTemplate(this.data,this.term)}getStrategyId(){return this.strategy.getId()}}_o.SearchResult=fA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Strategy=t.DEFAULT_INDEX=void 0;const e=_o;t.DEFAULT_INDEX=1;class n{constructor(o){this.props=o,this.cache={}}destroy(){return this.cache={},this}replace(o){return this.props.replace(o)}execute(o,a){var l;const u=this.matchWithContext(o);if(!u)return!1;const d=u[(l=this.props.index)!==null&&l!==void 0?l:t.DEFAULT_INDEX];return this.search(d,f=>{a(f.map(p=>new e.SearchResult(p,d,this)))},u),!0}renderTemplate(o,a){if(this.props.template)return this.props.template(o,a);if(typeof o=="string")return o;throw new Error(`Unexpected render data type: ${typeof o}. Please implement template parameter by yourself`)}getId(){return this.props.id||null}match(o){return typeof this.props.match=="function"?this.props.match(o):o.match(this.props.match)}search(o,a,l){this.props.cache?this.searchWithCach(o,a,l):this.props.search(o,a,l)}matchWithContext(o){const a=this.context(o);return a===!1?null:this.match(a===!0?o:a)}context(o){return this.props.context?this.props.context(o):!0}searchWithCach(o,a,l){this.cache[o]!=null?a(this.cache[o]):this.props.search(o,u=>{this.cache[o]=u,a(u)},l)}}t.Strategy=n})(Ld);Object.defineProperty(bo,"__esModule",{value:!0});bo.Completer=void 0;const hA=Cl,pA=Ld;class gA extends hA.EventEmitter{constructor(e){super(),this.handleQueryResult=n=>{this.emit("hit",{searchResults:n})},this.strategies=e.map(n=>new pA.Strategy(n))}destroy(){return this.strategies.forEach(e=>e.destroy()),this}run(e){for(const n of this.strategies)if(n.execute(e,this.handleQueryResult))return;this.handleQueryResult([])}}bo.Completer=gA;var Pd={},_s={};Object.defineProperty(_s,"__esModule",{value:!0});_s.createCustomEvent=void 0;const vA=typeof window<"u"&&!!window.CustomEvent,mA=(t,e)=>{if(vA)return new CustomEvent(t,e);const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,e?.cancelable||!1,e?.detail||void 0),n};_s.createCustomEvent=mA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Dropdown=t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME=t.DEFAULT_DROPDOWN_CLASS_NAME=t.DEFAULT_DROPDOWN_PLACEMENT=t.DEFAULT_DROPDOWN_MAX_COUNT=void 0;const e=Cl,n=_s;t.DEFAULT_DROPDOWN_MAX_COUNT=10,t.DEFAULT_DROPDOWN_PLACEMENT="auto",t.DEFAULT_DROPDOWN_CLASS_NAME="dropdown-menu textcomplete-dropdown",t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME="textcomplete-item",t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME=`${t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME} active`;class i extends e.EventEmitter{constructor(l,u){super(),this.el=l,this.option=u,this.shown=!1,this.items=[],this.activeIndex=null}static create(l){const u=document.createElement("ul");u.className=l.className||t.DEFAULT_DROPDOWN_CLASS_NAME,Object.assign(u.style,{display:"none",position:"absolute",zIndex:"1000"},l.style);const d=l.parent||document.body;return d?.appendChild(u),new i(u,l)}render(l,u){const d=(0,n.createCustomEvent)("render",{cancelable:!0});return this.emit("render",d),d.defaultPrevented?this:(this.clear(),l.length===0?this.hide():(this.items=l.slice(0,this.option.maxCount||t.DEFAULT_DROPDOWN_MAX_COUNT).map((f,p)=>{var g;return new o(this,p,f,((g=this.option)===null||g===void 0?void 0:g.item)||{})}),this.setStrategyId(l[0]).renderEdge(l,"header").renderItems().renderEdge(l,"footer").show().setOffset(u).activate(0),this.emit("rendered",(0,n.createCustomEvent)("rendered")),this))}destroy(){var l;return this.clear(),(l=this.el.parentNode)===null||l===void 0||l.removeChild(this.el),this}select(l){const u={searchResult:l.searchResult},d=(0,n.createCustomEvent)("select",{cancelable:!0,detail:u});return this.emit("select",d),d.defaultPrevented?this:(this.hide(),this.emit("selected",(0,n.createCustomEvent)("selected",{detail:u})),this)}show(){if(!this.shown){const l=(0,n.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",l),l.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,n.createCustomEvent)("shown"))}return this}hide(){if(this.shown){const l=(0,n.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",l),l.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.clear(),this.emit("hidden",(0,n.createCustomEvent)("hidden"))}return this}clear(){return this.items.forEach(l=>l.destroy()),this.items=[],this.el.innerHTML="",this.activeIndex=null,this}up(l){return this.shown?this.moveActiveItem("prev",l):this}down(l){return this.shown?this.moveActiveItem("next",l):this}moveActiveItem(l,u){if(this.activeIndex!=null){const d=l==="next"?this.getNextActiveIndex():this.getPrevActiveIndex();d!=null&&(this.activate(d),u.preventDefault())}return this}activate(l){return this.activeIndex!==l&&(this.activeIndex!=null&&this.items[this.activeIndex].deactivate(),this.activeIndex=l,this.items[l].activate()),this}isShown(){return this.shown}getActiveItem(){return this.activeIndex!=null?this.items[this.activeIndex]:null}setOffset(l){const u=document.documentElement;if(u){const d=this.el.offsetWidth;if(l.left){const g=this.option.dynamicWidth?u.scrollWidth:u.clientWidth;l.left+d>g&&(l.left=g-d),this.el.style.left=`${l.left}px`}else l.right&&(l.right-d<0&&(l.right=0),this.el.style.right=`${l.right}px`);let f=!1;const p=this.option.placement||t.DEFAULT_DROPDOWN_PLACEMENT;if(p==="auto"){const g=this.items.length*l.lineHeight;f=l.clientTop!=null&&l.clientTop+g>u.clientHeight}p==="top"||f?(this.el.style.bottom=`${u.clientHeight-l.top+l.lineHeight}px`,this.el.style.top="auto"):(this.el.style.top=`${l.top}px`,this.el.style.bottom="auto")}return this}getNextActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex<this.items.length-1?this.activeIndex+1:this.option.rotate?0:null}getPrevActiveIndex(){if(this.activeIndex==null)throw new Error;return this.activeIndex!==0?this.activeIndex-1:this.option.rotate?this.items.length-1:null}renderItems(){const l=document.createDocumentFragment();for(const u of this.items)l.appendChild(u.el);return this.el.appendChild(l),this}setStrategyId(l){const u=l.getStrategyId();return u&&(this.el.dataset.strategy=u),this}renderEdge(l,u){const d=this.option[u],f=document.createElement("li");return f.className=`textcomplete-${u}`,f.innerHTML=typeof d=="function"?d(l.map(p=>p.data)):d||"",this.el.appendChild(f),this}}t.Dropdown=i;class o{constructor(l,u,d,f){this.dropdown=l,this.index=u,this.searchResult=d,this.props=f,this.active=!1,this.onClick=v=>{v.preventDefault(),this.dropdown.select(this)},this.className=this.props.className||t.DEFAULT_DROPDOWN_ITEM_CLASS_NAME,this.activeClassName=this.props.activeClassName||t.DEFAULT_DROPDOWN_ITEM_ACTIVE_CLASS_NAME;const p=document.createElement("li");p.className=this.active?this.activeClassName:this.className;const g=document.createElement("span");g.tabIndex=-1,g.innerHTML=this.searchResult.render(),p.appendChild(g),p.addEventListener("click",this.onClick),this.el=p}destroy(){var l;const u=this.el;return(l=u.parentNode)===null||l===void 0||l.removeChild(u),u.removeEventListener("click",this.onClick,!1),this}activate(){return this.active||(this.active=!0,this.el.className=this.activeClassName,this.dropdown.el.scrollTop=this.el.offsetTop),this}deactivate(){return this.active&&(this.active=!1,this.el.className=this.className),this}}})(Pd);var Sl={};Object.defineProperty(Sl,"__esModule",{value:!0});Sl.Editor=void 0;const yA=Cl,$a=_s;class bA extends yA.EventEmitter{destroy(){return this}applySearchResult(e){throw new Error("Not implemented.")}getCursorOffset(){throw new Error("Not implemented.")}getBeforeCursor(){throw new Error("Not implemented.")}emitMoveEvent(e){const n=(0,$a.createCustomEvent)("move",{cancelable:!0,detail:{code:e}});return this.emit("move",n),n}emitEnterEvent(){const e=(0,$a.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",e),e}emitChangeEvent(){const e=(0,$a.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",e),e}emitEscEvent(){const e=(0,$a.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",e),e}getCode(e){return e.keyCode===9||e.keyCode===13?"ENTER":e.keyCode===27?"ESC":e.keyCode===38?"UP":e.keyCode===40||e.keyCode===78&&e.ctrlKey?"DOWN":e.keyCode===80&&e.ctrlKey?"UP":"OTHER"}}Sl.Editor=bA;var Tl={};Object.defineProperty(Tl,"__esModule",{value:!0});Tl.Textcomplete=void 0;const _A=Cl,wA=Pd,xA=bo,$A=["show","shown","render","rendered","selected","hidden","hide"];class EA extends _A.EventEmitter{constructor(e,n,i){super(),this.editor=e,this.isQueryInFlight=!1,this.nextPendingQuery=null,this.handleHit=({searchResults:o})=>{o.length?this.dropdown.render(o,this.editor.getCursorOffset()):this.dropdown.hide(),this.isQueryInFlight=!1,this.nextPendingQuery!==null&&this.trigger(this.nextPendingQuery)},this.handleMove=o=>{o.detail.code==="UP"?this.dropdown.up(o):this.dropdown.down(o)},this.handleEnter=o=>{const a=this.dropdown.getActiveItem();a?(this.dropdown.select(a),o.preventDefault()):this.dropdown.hide()},this.handleEsc=o=>{this.dropdown.isShown()&&(this.dropdown.hide(),o.preventDefault())},this.handleChange=o=>{o.detail.beforeCursor!=null?this.trigger(o.detail.beforeCursor):this.dropdown.hide()},this.handleSelect=o=>{this.emit("select",o),o.defaultPrevented||this.editor.applySearchResult(o.detail.searchResult)},this.handleResize=()=>{this.dropdown.isShown()&&this.dropdown.setOffset(this.editor.getCursorOffset())},this.completer=new xA.Completer(n),this.dropdown=wA.Dropdown.create(i?.dropdown||{}),this.startListening()}destroy(e=!0){return this.completer.destroy(),this.dropdown.destroy(),e&&this.editor.destroy(),this.stopListening(),this}isShown(){return this.dropdown.isShown()}hide(){return this.dropdown.hide(),this}trigger(e){return this.isQueryInFlight?this.nextPendingQuery=e:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(e)),this}startListening(){var e;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect);for(const n of $A)this.dropdown.on(n,i=>this.emit(n,i));this.completer.on("hit",this.handleHit),(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.addEventListener("resize",this.handleResize)}stopListening(){var e;(e=this.dropdown.el.ownerDocument.defaultView)===null||e===void 0||e.removeEventListener("resize",this.handleResize),this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}Tl.Textcomplete=EA;(function(t){var e=wt&&wt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=wt&&wt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(bo,t),n(Pd,t),n(Sl,t),n(_o,t),n(Ld,t),n(Tl,t),n(_s,t)})(Od);var Jv={},Al={};function Xv(t,e,n){const i=t.value,o=e+(n||""),a=document.activeElement;let l=0,u=0;for(;l<i.length&&l<o.length&&i[l]===o[l];)l++;for(;i.length-u-1>=0&&o.length-u-1>=0&&i[i.length-u-1]===o[o.length-u-1];)u++;l=Math.min(l,Math.min(i.length,o.length)-u),t.setSelectionRange(l,i.length-u);const d=o.substring(l,o.length-u);if(t.focus(),!document.execCommand("insertText",!1,d)){t.value=o;const f=document.createEvent("Event");f.initEvent("input",!0,!0),t.dispatchEvent(f)}return t.setSelectionRange(e.length,e.length),a.focus(),t}function kA(t,e,n){const i=t.selectionEnd,o=t.value.substr(0,t.selectionStart)+e,a=t.value.substring(t.selectionStart,i)+(n||"")+t.value.substr(i);return Xv(t,o,a),t.selectionEnd=i+e.length,t}const CA=Object.freeze(Object.defineProperty({__proto__:null,update:Xv,wrapCursor:kA},Symbol.toStringTag,{value:"Module"})),SA=N4(CA);var em={exports:{}};(function(t){(function(){var e=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],n=typeof window<"u",i=n&&window.mozInnerScreenX!=null;function o(a,l,u){if(!n)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var d=u&&u.debug||!1;if(d){var f=document.querySelector("#input-textarea-caret-position-mirror-div");f&&f.parentNode.removeChild(f)}var p=document.createElement("div");p.id="input-textarea-caret-position-mirror-div",document.body.appendChild(p);var g=p.style,v=window.getComputedStyle?window.getComputedStyle(a):a.currentStyle,b=a.nodeName==="INPUT";g.whiteSpace="pre-wrap",b||(g.wordWrap="break-word"),g.position="absolute",d||(g.visibility="hidden"),e.forEach(function($){b&&$==="lineHeight"?g.lineHeight=v.height:g[$]=v[$]}),i?a.scrollHeight>parseInt(v.height)&&(g.overflowY="scroll"):g.overflow="hidden",p.textContent=a.value.substring(0,l),b&&(p.textContent=p.textContent.replace(/\s/g," "));var w=document.createElement("span");w.textContent=a.value.substring(l)||".",p.appendChild(w);var x={top:w.offsetTop+parseInt(v.borderTopWidth),left:w.offsetLeft+parseInt(v.borderLeftWidth),height:parseInt(v.lineHeight)};return d?w.style.backgroundColor="#aaa":document.body.removeChild(p),x}t.exports=o})()})(em);var TA=em.exports,tm={},Rl={};Object.defineProperty(Rl,"__esModule",{value:!0});Rl.calculateElementOffset=void 0;const AA=t=>{const e=t.getBoundingClientRect(),n=t.ownerDocument;if(n==null)throw new Error("Given element does not belong to document");const{defaultView:i,documentElement:o}=n;if(i==null)throw new Error("Given element does not belong to window");const a={top:e.top+i.pageYOffset,left:e.left+i.pageXOffset};return o&&(a.top-=o.clientTop,a.left-=o.clientLeft),a};Rl.calculateElementOffset=AA;var Il={};Object.defineProperty(Il,"__esModule",{value:!0});Il.getLineHeightPx=void 0;const RA="0".charCodeAt(0),IA="9".charCodeAt(0),zg=t=>RA<=t&&t<=IA,OA=t=>{const e=getComputedStyle(t),n=e.lineHeight;if(zg(n.charCodeAt(0))){const i=parseFloat(n);return zg(n.charCodeAt(n.length-1))?i*parseFloat(e.fontSize):i}return LA(t.nodeName,e)};Il.getLineHeightPx=OA;const LA=(t,e)=>{const n=document.body;if(!n)return 0;const i=document.createElement(t);i.innerHTML="&nbsp;",Object.assign(i.style,{fontSize:e.fontSize,fontFamily:e.fontFamily,padding:"0"}),n.appendChild(i),i instanceof HTMLTextAreaElement&&(i.rows=1);const o=i.offsetHeight;return n.removeChild(i),o};var Ol={};Object.defineProperty(Ol,"__esModule",{value:!0});Ol.isSafari=void 0;const PA=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent);Ol.isSafari=PA;(function(t){var e=wt&&wt.__createBinding||(Object.create?function(i,o,a,l){l===void 0&&(l=a);var u=Object.getOwnPropertyDescriptor(o,a);(!u||("get"in u?!o.__esModule:u.writable||u.configurable))&&(u={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(i,l,u)}:function(i,o,a,l){l===void 0&&(l=a),i[l]=o[a]}),n=wt&&wt.__exportStar||function(i,o){for(var a in i)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,i,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(Rl,t),n(Il,t),n(Ol,t)})(tm);var MA=wt&&wt.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(Al,"__esModule",{value:!0});Al.TextareaEditor=void 0;const BA=SA,jA=MA(TA),Hg=Od,Wg=tm;class NA extends Hg.Editor{constructor(e){super(),this.el=e,this.onInput=()=>{this.emitChangeEvent()},this.onKeydown=n=>{const i=this.getCode(n);let o;i==="UP"||i==="DOWN"?o=this.emitMoveEvent(i):i==="ENTER"?o=this.emitEnterEvent():i==="ESC"&&(o=this.emitEscEvent()),o&&o.defaultPrevented&&n.preventDefault()},this.startListening()}destroy(){return super.destroy(),this.stopListening(),this}applySearchResult(e){const n=this.getBeforeCursor();if(n!=null){const i=e.replace(n,this.getAfterCursor());this.el.focus(),Array.isArray(i)&&((0,BA.update)(this.el,i[0],i[1]),this.el&&this.el.dispatchEvent((0,Hg.createCustomEvent)("input")))}}getCursorOffset(){const e=(0,Wg.calculateElementOffset)(this.el),n=this.getElScroll(),i=this.getCursorPosition(),o=(0,Wg.getLineHeightPx)(this.el),a=e.top-n.top+i.top+o,l=e.left-n.left+i.left,u=this.el.getBoundingClientRect().top;if(this.el.dir!=="rtl")return{top:a,left:l,lineHeight:o,clientTop:u};{const d=document.documentElement?document.documentElement.clientWidth-l:0;return{top:a,right:d,lineHeight:o,clientTop:u}}}getBeforeCursor(){return this.el.selectionStart!==this.el.selectionEnd?null:this.el.value.substring(0,this.el.selectionEnd)}getAfterCursor(){return this.el.value.substring(this.el.selectionEnd)}getElScroll(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}getCursorPosition(){return(0,jA.default)(this.el,this.el.selectionEnd)}startListening(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}stopListening(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}Al.TextareaEditor=NA;(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaEditor=void 0;var e=Al;Object.defineProperty(t,"TextareaEditor",{enumerable:!0,get:function(){return e.TextareaEditor}})})(Jv);const DA=B('<div class="flex gap-1 border-b px-2 py-1"><img class="h-6 max-w-[3rem]"><div>'),UA=()=>{const{searchEmojis:t}=et(),[e,n]=Se();return _r(()=>{const i=e();if(i==null)return;const o=new Jv.TextareaEditor(i),a=new Od.Textcomplete(o,[{id:"customEmoji",match:/\B:(\w+)$/,search:(l,u)=>{u(t(l))},template:l=>(()=>{const d=DA(),f=d.firstChild,p=f.nextSibling;return k(p,()=>l.shortcode),Me(g=>{const v=l.url,b=l.shortcode;return v!==g._v$&&Ue(f,"src",g._v$=v),b!==g._v$2&&Ue(f,"alt",g._v$2=b),g},{_v$:void 0,_v$2:void 0}),d})().outerHTML,replace:l=>`:${l.shortcode}: `}],{dropdown:{className:"bg-white shadow rounded",item:{className:"cursor-pointer",activeClassName:"bg-rose-100 cursor-pointer"}}});jn(()=>{a.destroy()})}),{elementRef:n}},FA=t=>Math.floor(+t/1e3),Ur=()=>FA(new Date),zA=({notifyPubkeys:t,rootEventId:e,mentionEventIds:n,replyEventId:i,contentWarning:o,hashtags:a,urls:l,tags:u})=>{const d=[],f=t?.map(g=>["p",g])??[],p=[];return e!=null&&d.push(["e",e,"","root"]),e==null&&i!=null&&d.push(["e",i,"","root"]),n?.forEach(g=>d.push(["e",g,"","mention"])),e!=null&&i!=null&&e!==i&&d.push(["e",i,"","reply"]),a?.forEach(g=>p.push(["t",g])),l?.forEach(g=>p.push(["r",g])),o!=null&&p.push(["content-warning",o]),u!=null&&u.length>0&&p.push(...u),[...d,...f,...p]},Ll=()=>{const t=Cd(),e=async(d,f)=>{const p={...f},g=ho(p);if(p.id=g,window.nostr==null)throw new Error("NIP-07 implementation not found");const v=await window.nostr.signEvent(p);if(!po({...v,id:g}))throw new Error("nostr.signEvent returned invalid data");return d.map(async b=>{const w=await t().ensureRelay(b);try{await w.publish(v),console.log(`${b} has accepted our event`)}catch(x){const $=x instanceof Error?x.message:JSON.stringify(x);console.warn(`failed to publish to ${b}: ${$}`)}})};return{publishTextNote:async d=>{const{relayUrls:f,pubkey:p,content:g}=d,v=zA(d),b={kind:1,pubkey:p,created_at:Ur(),tags:v,content:g};return e(f,b)},publishReaction:async({relayUrls:d,pubkey:f,eventId:p,reactionTypes:g,notifyPubkey:v})=>{const b=[["e",p,""],["p",v]];g.type==="CustomEmoji"&&b.push(["emoji",g.shortcode,g.url]);const w={kind:7,pubkey:f,created_at:Ur(),tags:b,content:g.content};return e(d,w)},publishRepost:async({relayUrls:d,pubkey:f,eventId:p,notifyPubkey:g})=>{const v={kind:6,pubkey:f,created_at:Ur(),tags:[["e",p,""],["p",g]],content:""};return e(d,v)},updateProfile:async({relayUrls:d,pubkey:f,profile:p,otherProperties:g})=>{const v={...p,...g},b={kind:lt.Metadata,pubkey:f,created_at:Ur(),tags:[],content:JSON.stringify(v)};return e(d,b)},updateContacts:async({relayUrls:d,pubkey:f,updatedTags:p,content:g})=>{const v={kind:lt.Contacts,pubkey:f,created_at:Ur(),tags:p,content:g};return e(d,v)},deleteEvent:async({relayUrls:d,pubkey:f,eventId:p})=>{const g={kind:lt.EventDeletion,pubkey:f,created_at:Ur(),tags:[["e",p,""]],content:""};return e(d,g)}}},HA=async t=>{const e=new FormData;e.set("file",t);const n=await fetch("https://nostr.build/api/v2/upload/files",{method:"POST",headers:{Accept:"application/json"},mode:"cors",body:e});if(!n.ok)throw new Error("failed to post image: status code was not 2xx");const i=await n.json();if(i.status!=="success")throw new Error(`failed to post image: ${i.message}`);return{imageUrl:i.data[0].url}},WA=t=>e=>Promise.allSettled(e.map(n=>t(n))),qA=B("<div>"),ZA=B('<input type="text" class="rounded" maxlength="32">'),KA=B('<div class="flex-1"><button class="h-5 w-5 text-stone-500">'),VA=B('<span class="inline-block h-8 w-8 rounded bg-primary p-2 font-bold text-white">'),GA=B('<div class="p-1"><form class="flex flex-col gap-1"><textarea name="text" class="min-h-[40px] rounded-md border-none focus:ring-rose-300" rows="4"></textarea><div class="flex items-end justify-end gap-1"><button class="flex items-center justify-center rounded p-2 text-xs font-bold text-white" type="button"><span>CW</span></button><button class="rounded bg-primary p-2 font-bold text-white" type="button"></button><button class="rounded bg-primary p-2 font-bold text-white" type="submit"></button></div><input class="rounded bg-primary" type="file" hidden name="image" accept="image/jpeg,image/png,image/gif,image/webp">'),QA=t=>{const e=[],n=[],i=[],o=[],a=[];return t.forEach(l=>{l.type==="URL"?o.push(l.content):l.type==="HashTag"?e.push(l.tagName):l.type==="Bech32Entity"?l.data.type==="npub"?n.push(l.data.data):l.data.type==="note"&&i.push(l.data.data):l.type==="CustomEmoji"&&!a.includes(l.shortcode)&&a.push(l.shortcode)}),{hashtags:e,urlReferences:o,pubkeyReferences:n,eventReferences:i,emojis:a}},YA=t=>{const e=[];return t.forEach(n=>{n.type==="Bech32Entity"&&!n.isNIP19?e.push(`nostr:${n.content}`):e.push(n.content)}),e.join("")},nm=t=>{const e=dt();let n,i;const{elementRef:o}=UA(),[a,l]=Se(""),[u,d]=Se(!1),[f,p]=Se(""),[g,v]=Se([]),b=ue=>l(ce=>`${ce} ${ue}`),w=()=>{l(g().map(ue=>` #${ue}`).join("")),p(""),d(!1)},x=()=>{n?.blur(),w(),t.onClose()},$=ue=>{switch(ue){case"reply":return e()("posting.placeholderReply");case"normal":default:return e()("posting.placeholder")}},{config:S,getEmoji:M}=et(),C=Xr(),I=Ll(),O=()=>t.replyTo&&Ed(t.replyTo),A=()=>t.mode??"normal",D=bi({mutationKey:["publishTextNote"],mutationFn:I.publishTextNote.bind(I),onSuccess:()=>{console.log("succeeded to post"),w(),t.onPost?.()},onError:ue=>{console.error("error",ue)}}),j=()=>{n!=null&&(n.style.height="auto",n.style.height=`${n.scrollHeight}px`)},K=bi({mutationKey:["uploadFiles"],mutationFn:async ue=>{const ce=await WA(HA)(ue),be=[];if(ce.forEach((Y,ie)=>{Y.status==="fulfilled"?(b(Y.value.imageUrl),j()):be.push(ue[ie])}),be.length>0){const Y=be.map(ie=>ie.name).join(", ");window.alert(e()("posting.failedToUploadFile",{filenames:Y}))}}}),J=Fe(()=>{const ue=C();return O()?.taggedPubkeys()?.filter(ce=>ce!==ue)??[]}),ne=Fe(()=>t.replyTo==null?[]:_i([t.replyTo.pubkey,...J()])),re=ue=>{const ce=[];return ue.forEach(be=>{const Y=M(be);Y!=null&&ce.push(["emoji",be,Y.url])}),ce},se=()=>{if(a().length===0||D.isLoading)return;if(/nsec1[0-9a-zA-Z]+/.test(a())){window.alert(e()("posting.forbiddenToIncludeNsec"));return}const ue=C();if(ue==null){console.error("pubkey is not available");return}const ce=$d(a()),{hashtags:be,urlReferences:Y,pubkeyReferences:ie,eventReferences:oe,emojis:Te}=QA(ce),Ve=YA(ce),le=re(Te);v(be);let V={relayUrls:S().relayUrls,pubkey:ue,content:Ve,notifyPubkeys:ie,mentionEventIds:oe,hashtags:be,urls:Y,tags:le};O()!=null&&(V={...V,notifyPubkeys:_i([...ne(),...ie]),rootEventId:O()?.rootEvent()?.id??O()?.replyingToEvent()?.id,replyEventId:O()?.id}),u()&&(V={...V,contentWarning:f()}),D.mutate(V),x()},ee=ue=>{l(ue.currentTarget.value),j()},N=ue=>{b(ue.native??`:${ue.id}:`)},Z=ue=>{ue.preventDefault(),se()},X=ue=>{ue.key==="Enter"&&(ue.ctrlKey||ue.metaKey)?se():ue.key==="Escape"&&(n?.blur(),x())},F=ue=>{if(ue.preventDefault(),K.isLoading)return;const ce=[...ue.currentTarget.files??[]];K.mutate(ce),ue.currentTarget.value=""},H=ue=>{if(ue.preventDefault(),K.isLoading)return;const ce=[...ue?.dataTransfer?.files??[]];K.mutate(ce)},fe=ue=>{if(K.isLoading)return;const ce=[...ue?.clipboardData?.items??[]],be=[];ce.forEach(Y=>{if(Y.kind==="file"){ue.preventDefault();const ie=Y.getAsFile();if(ie==null)return;be.push(ie)}}),be.length!==0&&K.mutate(be)},he=ue=>{ue.preventDefault()},_e=()=>a().trim().length===0||D.isLoading||K.isLoading,Ke=()=>K.isLoading;return er(()=>{setTimeout(()=>{n?.click(),n?.focus()},50)}),(()=>{const ue=GA(),ce=ue.firstChild,be=ce.firstChild,Y=be.nextSibling,ie=Y.firstChild,oe=ie.nextSibling,Te=oe.nextSibling,Ve=Y.nextSibling;k(ue,E(me,{get when(){return t.replyTo!=null},get children(){const V=qA();return k(V,()=>e()("posting.replyToPre"),null),k(V,E(Ft,{get each(){return ne()},children:(qe,xt)=>[E(Sd,{pubkey:qe}),E(me,{get when(){return xt()!==ne().length-1},children:" と "})]}),null),k(V,()=>e()("posting.replyToPost"),null),V}}),ce),ce.addEventListener("submit",Z),k(ce,E(me,{get when(){return u()},get children(){const V=ZA();return V.$$input=qe=>p(qe.currentTarget.value),Me(()=>Ue(V,"placeholder",e()("posting.contentWarningReason"))),Me(()=>V.value=f()),V}}),be),be.addEventListener("paste",fe),be.addEventListener("drop",H),be.addEventListener("dragover",he),be.$$keydown=X,be.$$input=ee,Nn(V=>{n=V,t.textAreaRef?.(V),o(V)},be),k(Y,E(me,{get when(){return A()==="reply"},get children(){const V=KA(),qe=V.firstChild;return qe.$$click=()=>x(),k(qe,E(us,{})),V}}),ie),k(Y,E(qv,{customEmojis:!0,onEmojiSelect:N,get children(){const V=VA();return k(V,E(Qv,{})),V}}),ie),ie.$$click=()=>d(V=>!V),oe.$$click=()=>i?.click(),k(oe,E(aA,{})),k(Te,E(cA,{})),Ve.addEventListener("change",F);const le=i;return typeof le=="function"?Nn(le,Ve):i=Ve,Me(V=>{const qe=$(A()),xt=!u(),Fn=!!u(),Bt=A()==="normal",xn=A()==="normal",ti=A()==="reply",$n=A()==="reply",Ct=e()("posting.contentWarning"),Yt=e()("posting.contentWarning"),zn=!!Ke(),Cr=!Ke(),En=A()==="normal",Ae=A()==="normal",Ht=A()==="reply",Wt=A()==="reply",kn=e()("posting.uploadImage"),Cn=e()("posting.uploadImage"),ln=Ke(),cn=!!_e(),Sn=!_e(),sr=A()==="normal",or=A()==="normal",ar=A()==="reply",Li=A()==="reply",xo=e()("posting.submit"),$o=e()("posting.submit"),Eo=_e();return qe!==V._v$&&Ue(be,"placeholder",V._v$=qe),xt!==V._v$2&&ie.classList.toggle("bg-rose-300",V._v$2=xt),Fn!==V._v$3&&ie.classList.toggle("bg-rose-400",V._v$3=Fn),Bt!==V._v$4&&ie.classList.toggle("h-8",V._v$4=Bt),xn!==V._v$5&&ie.classList.toggle("w-8",V._v$5=xn),ti!==V._v$6&&ie.classList.toggle("h-7",V._v$6=ti),$n!==V._v$7&&ie.classList.toggle("w-7",V._v$7=$n),Ct!==V._v$8&&Ue(ie,"aria-label",V._v$8=Ct),Yt!==V._v$9&&Ue(ie,"title",V._v$9=Yt),zn!==V._v$10&&oe.classList.toggle("bg-primary-disabled",V._v$10=zn),Cr!==V._v$11&&oe.classList.toggle("bg-primary",V._v$11=Cr),En!==V._v$12&&oe.classList.toggle("h-8",V._v$12=En),Ae!==V._v$13&&oe.classList.toggle("w-8",V._v$13=Ae),Ht!==V._v$14&&oe.classList.toggle("h-7",V._v$14=Ht),Wt!==V._v$15&&oe.classList.toggle("w-7",V._v$15=Wt),kn!==V._v$16&&Ue(oe,"title",V._v$16=kn),Cn!==V._v$17&&Ue(oe,"aria-label",V._v$17=Cn),ln!==V._v$18&&(oe.disabled=V._v$18=ln),cn!==V._v$19&&Te.classList.toggle("bg-primary-disabled",V._v$19=cn),Sn!==V._v$20&&Te.classList.toggle("bg-primary",V._v$20=Sn),sr!==V._v$21&&Te.classList.toggle("h-8",V._v$21=sr),or!==V._v$22&&Te.classList.toggle("w-8",V._v$22=or),ar!==V._v$23&&Te.classList.toggle("h-7",V._v$23=ar),Li!==V._v$24&&Te.classList.toggle("w-7",V._v$24=Li),xo!==V._v$25&&Ue(Te,"aria-label",V._v$25=xo),$o!==V._v$26&&Ue(Te,"title",V._v$26=$o),Eo!==V._v$27&&(Te.disabled=V._v$27=Eo),V},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0,_v$26:void 0,_v$27:void 0}),Me(()=>be.value=a()),ue})()};vt(["input","keydown","click"]);const JA=2,XA=()=>{let t;const[e,n]=Se(!1),i=a=>{t=a},o=()=>{t!=null&&n(t.scrollHeight>t.clientHeight+JA)};return er(()=>{if(t!=null){o();const a=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&o()})},{threshold:[0,.5,1]});a.observe(t),jn(()=>{a.disconnect()})}}),{overflow:e,elementRef:i}},eR=B('<div class="author-name truncate pr-1 font-bold hover:underline">'),tR=B('<button class="mt-2 w-full rounded border p-2 text-center text-xs text-stone-600 shadow-sm hover:shadow">'),nR=B('<div class="post flex flex-col"><div class="flex w-full gap-1"><button type="button" class="author-icon h-10 w-10 shrink-0 overflow-hidden"></button><div class="min-w-0 flex-auto"><div class="flex justify-between gap-1 text-xs"><button type="button" class="author flex min-w-0 select-text truncate hover:text-blue-500"><span class="author flex min-w-0 truncate hover:text-blue-500"><div class="author-username truncate text-zinc-600"></div></span></button><div class="created-at shrink-0"><button type="button" class="select-text hover:underline"></button></div></div><div class="overflow-hidden"></div><div class="actions">'),rR=B('<img alt="icon" class="h-full w-full rounded object-cover">'),iR=t=>{const e=dt(),{overflow:n,elementRef:i}=XA(),o=hv(),[a,l]=Se(),u=()=>o(t.createdAt),d=()=>t.createdAt.toLocaleString(),{profile:f}=bs(()=>({pubkey:t.authorPubkey}));return(()=>{const p=nR(),g=p.firstChild,v=g.firstChild,b=v.nextSibling,w=b.firstChild,x=w.firstChild,$=x.firstChild,S=$.firstChild,M=x.nextSibling,C=M.firstChild,I=w.nextSibling,O=I.nextSibling;return v.$$click=A=>{A.preventDefault(),t.onShowProfile?.()},k(v,E(me,{get when(){return f()?.picture},keyed:!0,children:A=>(()=>{const D=rR();return Ue(D,"src",A),D})()})),x.$$click=A=>{A.preventDefault(),t?.onShowProfile?.()},k($,E(me,{get when(){return(f()?.display_name?.length??0)>0},get children(){const A=eR();return k(A,()=>f()?.display_name),A}}),S),k(S,E(me,{get when(){return f()?.name!=null},get fallback(){return`@${yo(t.authorPubkey)}`},get children(){return["@",Fe(()=>f()?.name)]}})),C.$$click=A=>{A.preventDefault(),t.onShowEvent?.()},k(C,u),Nn(i,I),k(I,()=>t.content),k(b,E(me,{get when(){return n()},get children(){const A=tR();return A.$$click=D=>{D.stopPropagation(),l(j=>!j)},k(A,E(me,{get when(){return!a()},get fallback(){return e()("post.hideOverflow")},get children(){return e()("post.showOverflow")}})),A}}),O),k(O,()=>t.actions),k(p,E(me,{get when(){return t.footer},get children(){return t.footer}}),null),Me(A=>{const D=d(),j=!a();return D!==A._v$&&Ue(C,"title",A._v$=D),j!==A._v$2&&I.classList.toggle("max-h-screen",A._v$2=j),A},{_v$:void 0,_v$2:void 0}),p})()};vt(["click"]);const sR=C4(),oR=()=>S4(sR),hH=()=>{const[t,e]=ts({});return{timelineState:t,setTimeline:n=>e("content",n),clearTimeline:()=>e("content",void 0)}},aR=/\p{Emoji_Presentation}/u,lR=t=>{const{shouldMuteEvent:e}=et(),n=ds(),i=Fe(t),o=Fe(()=>["useReactions",i()]),a=Si(o,uv({taskProvider:([,g])=>{if(g==null)return null;const{eventId:v}=g;return new ys({type:"Reactions",mentionedEventId:v})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(v=>!e(v));return{reactions:l,reactionsGrouped:()=>{const g=new Map;return l().forEach(v=>{const b=Ga(v).isCustomEmoji()?`${v.content}${Ga(v).getUrl()??""}`:v.content,w=g.get(b)??[];w.push(v),g.set(b,w)}),g},isReactedBy:g=>l().findIndex(v=>v.pubkey===g)!==-1,isReactedByWithEmoji:g=>l().findIndex(v=>v.pubkey===g&&aR.test(v.content))!==-1,invalidateReactions:()=>n.invalidateQueries(o()),query:a}},cR=t=>{const{shouldMuteEvent:e}=et(),n=ds(),i=Fe(t),o=Fe(()=>["useReposts",i()]),a=Si(o,uv({taskProvider:([,f])=>{if(f==null)return null;const{eventId:p}=f;return new ys({type:"Reposts",mentionedEventId:p})},queryClient:n}),{staleTime:1*60*1e3,cacheTime:4*60*60*1e3,refetchInterval:1*60*1e3}),l=()=>(a.data??[]).filter(p=>!e(p));return{reposts:l,isRepostedBy:f=>l().findIndex(p=>p.pubkey===f)!==-1,invalidateReposts:()=>n.invalidateQueries(o()),query:a}},uR=B('<span class="text-red-500">'),qg=B('<div class="text-sm text-zinc-400">'),dR=B('<span class="inline-block h-4 w-4">'),fR=B('<div class="flex shrink-0 items-center gap-1">'),hR=B('<span class="inline-block h-4 w-4 text-zinc-400 hover:text-zinc-500">'),pR=B('<div class="actions flex w-52 items-center justify-between gap-8 pt-1"><button class="h-4 w-4 shrink-0 text-zinc-400 hover:text-zinc-500"></button><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div class="flex shrink-0 items-center gap-1"><button class="h-4 w-4"></button></div><div>'),gR=B('<div class="w-6">'),vR=B('<div class="nostr-textnote">'),mR=B('<div class="text-xs">'),yR=B('<div class="content whitespace-pre-wrap break-all">'),bR=B('<div class="textnote-content">'),_R=B('<div class="mt-1 rounded border p-1">'),wR=B('<div class="h-12">'),xR=B('<button class="select-text pr-1 text-blue-500 hover:underline">'),$R=B('<div class="h-5">'),{noteEncode:ER}=go,kR=t=>{if(t.native!=null)return{type:"Emoji",content:t.native};if(t.src!=null)return{type:"CustomEmoji",content:`:${t.id}:`,shortcode:t.id,url:t.src};throw new Error("unknown emoji")},CR=t=>{const e=dt(),{config:n}=et(),i=Xr(),o=Ll(),[a,l]=Se(null),[u,d]=Se(!1),[f,p]=Se(!1),g=Fe(()=>Ed(t.event)),v=()=>l(null),{reactions:b,reactionsGrouped:w,isReactedBy:x,isReactedByWithEmoji:$,invalidateReactions:S,query:M}=lR(()=>({eventId:t.event.id})),{reposts:C,isRepostedBy:I,invalidateReposts:O,query:A}=cR(()=>({eventId:t.event.id})),D=Fe(()=>{const F=i();return F!=null&&x(F)||u()}),j=Fe(()=>{const F=i();return F!=null&&$(F)}),K=Fe(()=>{const F=i();return F!=null&&I(F)||f()}),J=bi({mutationKey:["publishReaction",g().id],mutationFn:(...F)=>o.publishReaction(...F).then(H=>Promise.allSettled(H.map(qr(5e3)))),onSuccess:F=>{const H=F.filter(he=>he.status==="fulfilled").length,fe=F.length-H;H===F.length?console.log("Succeeded to publish a reaction"):H>0?console.warn(`failed to publish a reaction on ${fe} relays`):console.error("failed to publish reaction on all relays")},onError:F=>{console.error("failed to publish reaction: ",F)},onSettled:()=>{S().then(()=>M.refetch()).catch(F=>console.error("failed to refetch reactions",F))}}),ne=bi({mutationKey:["publishRepost",g().id],mutationFn:(...F)=>o.publishRepost(...F).then(H=>Promise.allSettled(H.map(qr(1e4)))),onSuccess:F=>{const H=F.filter(he=>he.status==="fulfilled").length,fe=F.length-H;H===F.length?console.log("Succeeded to publish a repost"):H>0?console.warn(`Failed to publish a repost on ${fe} relays`):console.error("Failed to publish a repost on all relays")},onError:F=>{console.error("failed to publish repost: ",F)},onSettled:()=>{O().then(()=>A.refetch()).catch(F=>console.error("failed to refetch reposts",F))}}),re=bi({mutationKey:["deleteEvent",g().id],mutationFn:(...F)=>o.deleteEvent(...F).then(H=>Promise.allSettled(H.map(qr(1e4)))),onSuccess:F=>{const H=F.filter(he=>he.status==="fulfilled").length,fe=F.length-H;H===F.length?window.alert(e()("post.deletedSuccessfully")):H>0?window.alert(e()("post.failedToDeletePartially",{count:fe})):window.alert(e()("post.failedToDelete"))},onError:F=>{console.error("failed to delete",F)}}),se=F=>{F.stopPropagation(),!K()&&_n([i(),t.event.id])(([H,fe])=>{ne.mutate({relayUrls:n().relayUrls,pubkey:H,eventId:fe,notifyPubkey:t.event.pubkey}),p(!0)})},ee=F=>{D()||_n([i(),t.event.id])(([H,fe])=>{J.mutate({relayUrls:n().relayUrls,pubkey:H,reactionTypes:F??{type:"LikeDislike",content:"+"},eventId:fe,notifyPubkey:t.event.pubkey}),d(!0)})},N=F=>{F.stopPropagation(),ee()},Z=F=>{ee(kR(F))},X=[{content:()=>e()("post.copyEventId"),onSelect:()=>{navigator.clipboard.writeText(ER(t.event.id)).catch(F=>window.alert(F))}},{content:()=>e()("post.showJSON"),onSelect:()=>{l("EventDebugModal")}},{content:()=>e()("post.showReposts"),onSelect:()=>{l("Reposts")}},{content:()=>e()("post.showReactions"),onSelect:()=>{l("Reactions")}},{when:()=>g().pubkey===i(),content:()=>(()=>{const F=uR();return k(F,()=>e()("post.deletePost")),F})(),onSelect:()=>{const F=i();F!=null&&window.confirm(e()("post.confirmDelete"))&&re.mutate({relayUrls:n().relayUrls,pubkey:F,eventId:g().id})}}];return[E(me,{get when(){return Fe(()=>!!n().showEmojiReaction)()&&b().length>0},get children(){return E(nT,{get reactionsGrouped(){return w()},onReaction:ee})}}),(()=>{const F=pR(),H=F.firstChild,fe=H.nextSibling,he=fe.firstChild,_e=fe.nextSibling,Ke=_e.firstChild,ue=_e.nextSibling;return H.$$click=ce=>{ce.stopPropagation(),t.onClickReply()},k(H,E(KC,{})),he.$$click=se,k(he,E(H1,{})),k(fe,E(me,{get when(){return Fe(()=>!n().hideCount)()&&C().length>0},get children(){const ce=qg();return k(ce,()=>C().length),ce}}),null),Ke.$$click=N,k(Ke,E(me,{get when(){return Fe(()=>!!D())()&&!j()},get fallback(){return E(gv,{})},get children(){return E(mv,{})}})),k(_e,E(me,{get when(){return Fe(()=>!n().hideCount&&!n().showEmojiReaction)()&&b().length>0},get children(){const ce=qg();return k(ce,()=>b().length),ce}}),null),k(F,E(me,{get when(){return n().useEmojiReaction},get children(){const ce=fR();return k(ce,E(qv,{onEmojiSelect:Z,get children(){const be=dR();return k(be,E(vv,{})),be}})),Me(be=>ka(ce,{"text-zinc-400":!D()||!j(),"hover:text-rose-400":!D()||!j(),"text-rose-400":D()&&j()||J.isLoading},be)),ce}}),ue),k(ue,E(yv,{menu:X,get children(){const ce=hR();return k(ce,E(pv,{})),ce}})),Me(ce=>{const be={"text-zinc-400":!K(),"hover:text-green-400":!K(),"text-green-400":K()||ne.isLoading},Y=ne.isLoading,ie={"text-zinc-400":!D()||j(),"hover:text-rose-400":!D()||j(),"text-rose-400":D()&&!j()||J.isLoading},oe=J.isLoading;return ce._v$=ka(fe,be,ce._v$),Y!==ce._v$2&&(he.disabled=ce._v$2=Y),ce._v$3=ka(_e,ie,ce._v$3),oe!==ce._v$4&&(Ke.disabled=ce._v$4=oe),ce},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),F})(),E(Ln,{get children(){return[E(Ye,{get when(){return a()==="EventDebugModal"},get children(){return E(YT,{get event(){return t.event},onClose:v})}}),E(Ye,{get when(){return a()==="Reactions"},get children(){return E(Uu,{get data(){return b()},pubkeyExtractor:F=>F.pubkey,renderInfo:F=>(()=>{const H=gR();return k(H,E(bv,{get reactionTypes(){return Ga(F).toReactionTypes()}})),H})(),onClose:v})}}),E(Ye,{get when(){return a()==="Reposts"},get children(){return E(Uu,{get data(){return C()},pubkeyExtractor:F=>F.pubkey,onClose:v})}})]}})]},SR=t=>{const e=dt(),{showProfile:n}=Jr(),i=oR(),[o,a]=Se(!1),l=()=>a(!1),u=()=>a(v=>!v),d=Fe(()=>Ed(t.event)),f=()=>t.embedding??!0,p=()=>t.actions??!0,g=()=>{if(f()){const v=d().replyingToEvent();if(v!=null&&!d().containsEventMention(v.id))return v.id;const b=d().rootEvent();if(v==null&&b!=null&&!d().containsEventMention(b.id))return b.id}};return(()=>{const v=vR();return k(v,E(iR,{get authorPubkey(){return d().pubkey},get createdAt(){return d().createdAtAsDate()},get content(){return(()=>{const b=bR();return k(b,E(me,{get when(){return g()},keyed:!0,children:w=>(()=>{const x=_R();return k(x,E(xr,{get fallback(){return wR()},children:()=>E(ao,{eventId:w,actions:!1,embedding:!1})})),x})()}),null),k(b,E(me,{get when(){return d().taggedPubkeys().length>0},get children(){const w=mR();return k(w,()=>e()("post.replyToPre"),null),k(w,E(Ft,{get each(){return d().taggedPubkeys()},children:x=>(()=>{const $=xR();return $.$$click=S=>{S.stopPropagation(),n(x)},k($,E(Zv,{pubkey:x})),$})()}),null),k(w,()=>e()("post.replyToPost"),null),w}}),null),k(b,E(YS,{get contentWarning(){return d().contentWarning()},get children(){const w=yR();return k(w,E(Gv,{get parsed(){return d().parsed()},get embedding(){return f()},get initialHidden(){return d().contentWarning().contentWarning}})),w}}),null),b})()},get actions(){return E(me,{get when(){return p()},get children(){return E(xr,{get fallback(){return $R()},children:()=>E(CR,{get event(){return t.event},onClickReply:u})})}})},get footer(){return E(me,{get when(){return o()},get children(){return E(nm,{mode:"reply",get replyTo(){return t.event},onClose:l,onPost:l})}})},onShowProfile:()=>{n(d().pubkey)},onShowEvent:()=>{i?.setTimeline({type:"Replies",event:t.event})}})),v})()};vt(["click"]);const TR=B("<span>予期しないイベント種別（<!>）"),AR=B("<span><span>未対応のイベント種別（<!>）"),rm=t=>{const e=()=>t.ensureKinds==null||t.ensureKinds.length===0||t.ensureKinds.includes(t.event.kind);return E(Ln,{get fallback(){return(()=>{const n=AR(),i=n.firstChild,o=i.firstChild,a=o.nextSibling;return a.nextSibling,k(i,()=>t.event.kind,a),k(n,E(Ks,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n})()},get children(){return[E(Ye,{get when(){return!e()},keyed:!0,get children(){const n=TR(),i=n.firstChild,o=i.nextSibling;return o.nextSibling,k(n,()=>t.event.kind,o),k(n,E(Ks,{get eventId(){return t.event.id},get kind(){return t.event.kind}}),null),n}}),E(Ye,{get when(){return t.event.kind===lt.Text},get children(){return E(SR,{get event(){return t.event},get embedding(){return t.actions},get actions(){return t.actions}})}}),E(Ye,{get when(){return t.event.kind===lt.Repost},get children(){return E(qC,{get event(){return t.event}})}})]}})},RR=t=>{const{shouldMuteEvent:e}=et();return E(Ft,{get each(){return t.events},children:n=>E(me,{get when(){return!e(n)},get children(){return E(r8,{get children(){return E(rm,{event:n})}})}})})};var IR=cl;function OR(){this.__data__=new IR,this.size=0}var LR=OR;function PR(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}var MR=PR;function BR(t){return this.__data__.get(t)}var jR=BR;function NR(t){return this.__data__.has(t)}var DR=NR,UR=cl,FR=Ju,zR=Xu,HR=200;function WR(t,e){var n=this.__data__;if(n instanceof UR){var i=n.__data__;if(!FR||i.length<HR-1)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new zR(i)}return n.set(t,e),this.size=n.size,this}var qR=WR,ZR=cl,KR=LR,VR=MR,GR=jR,QR=DR,YR=qR;function ws(t){var e=this.__data__=new ZR(t);this.size=e.size}ws.prototype.clear=KR;ws.prototype.delete=VR;ws.prototype.get=GR;ws.prototype.has=QR;ws.prototype.set=YR;var Md=ws;function JR(t,e){for(var n=-1,i=t==null?0:t.length;++n<i;)if(e(t[n],n,t))return!0;return!1}var XR=JR,eI=q0,tI=XR,nI=Z0,rI=1,iI=2;function sI(t,e,n,i,o,a){var l=n&rI,u=t.length,d=e.length;if(u!=d&&!(l&&d>u))return!1;var f=a.get(t),p=a.get(e);if(f&&p)return f==e&&p==t;var g=-1,v=!0,b=n&iI?new eI:void 0;for(a.set(t,e),a.set(e,t);++g<u;){var w=t[g],x=e[g];if(i)var $=l?i(x,w,g,e,t,a):i(w,x,g,t,e,a);if($!==void 0){if($)continue;v=!1;break}if(b){if(!tI(e,function(S,M){if(!nI(b,M)&&(w===S||o(w,S,n,i,a)))return b.push(M)})){v=!1;break}}else if(!(w===x||o(w,x,n,i,a))){v=!1;break}}return a.delete(t),a.delete(e),v}var im=sI,oI=tr,aI=oI.Uint8Array,sm=aI;function lI(t){var e=-1,n=Array(t.size);return t.forEach(function(i,o){n[++e]=[o,i]}),n}var cI=lI,Zg=fs,Kg=sm,uI=Yu,dI=im,fI=cI,hI=ed,pI=1,gI=2,vI="[object Boolean]",mI="[object Date]",yI="[object Error]",bI="[object Map]",_I="[object Number]",wI="[object RegExp]",xI="[object Set]",$I="[object String]",EI="[object Symbol]",kI="[object ArrayBuffer]",CI="[object DataView]",Vg=Zg?Zg.prototype:void 0,fu=Vg?Vg.valueOf:void 0;function SI(t,e,n,i,o,a,l){switch(n){case CI:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case kI:return!(t.byteLength!=e.byteLength||!a(new Kg(t),new Kg(e)));case vI:case mI:case _I:return uI(+t,+e);case yI:return t.name==e.name&&t.message==e.message;case wI:case $I:return t==e+"";case bI:var u=fI;case xI:var d=i&pI;if(u||(u=hI),t.size!=e.size&&!d)return!1;var f=l.get(t);if(f)return f==e;i|=gI,l.set(t,e);var p=dI(u(t),u(e),i,o,a,l);return l.delete(t),p;case EI:if(fu)return fu.call(t)==fu.call(e)}return!1}var TI=SI;function AI(t,e){for(var n=-1,i=e.length,o=t.length;++n<i;)t[o+n]=e[n];return t}var Bd=AI,RI=Array.isArray,ir=RI,II=Bd,OI=ir;function LI(t,e,n){var i=e(t);return OI(t)?i:II(i,n(t))}var om=LI;function PI(t,e){for(var n=-1,i=t==null?0:t.length,o=0,a=[];++n<i;){var l=t[n];e(l,n,t)&&(a[o++]=l)}return a}var MI=PI;function BI(){return[]}var am=BI,jI=MI,NI=am,DI=Object.prototype,UI=DI.propertyIsEnumerable,Gg=Object.getOwnPropertySymbols,FI=Gg?function(t){return t==null?[]:(t=Object(t),jI(Gg(t),function(e){return UI.call(t,e)}))}:NI,jd=FI;function zI(t,e){for(var n=-1,i=Array(t);++n<t;)i[n]=e(n);return i}var HI=zI;function WI(t){return t!=null&&typeof t=="object"}var ei=WI,qI=hs,ZI=ei,KI="[object Arguments]";function VI(t){return ZI(t)&&qI(t)==KI}var GI=VI,Qg=GI,QI=ei,lm=Object.prototype,YI=lm.hasOwnProperty,JI=lm.propertyIsEnumerable,XI=Qg(function(){return arguments}())?Qg:function(t){return QI(t)&&YI.call(t,"callee")&&!JI.call(t,"callee")},Nd=XI,nl={exports:{}};function eO(){return!1}var tO=eO;nl.exports;(function(t,e){var n=tr,i=tO,o=e&&!e.nodeType&&e,a=o&&!0&&t&&!t.nodeType&&t,l=a&&a.exports===o,u=l?n.Buffer:void 0,d=u?u.isBuffer:void 0,f=d||i;t.exports=f})(nl,nl.exports);var Dd=nl.exports,nO=9007199254740991,rO=/^(?:0|[1-9]\d*)$/;function iO(t,e){var n=typeof t;return e=e??nO,!!e&&(n=="number"||n!="symbol"&&rO.test(t))&&t>-1&&t%1==0&&t<e}var Ud=iO,sO=9007199254740991;function oO(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=sO}var Fd=oO,aO=hs,lO=Fd,cO=ei,uO="[object Arguments]",dO="[object Array]",fO="[object Boolean]",hO="[object Date]",pO="[object Error]",gO="[object Function]",vO="[object Map]",mO="[object Number]",yO="[object Object]",bO="[object RegExp]",_O="[object Set]",wO="[object String]",xO="[object WeakMap]",$O="[object ArrayBuffer]",EO="[object DataView]",kO="[object Float32Array]",CO="[object Float64Array]",SO="[object Int8Array]",TO="[object Int16Array]",AO="[object Int32Array]",RO="[object Uint8Array]",IO="[object Uint8ClampedArray]",OO="[object Uint16Array]",LO="[object Uint32Array]",ot={};ot[kO]=ot[CO]=ot[SO]=ot[TO]=ot[AO]=ot[RO]=ot[IO]=ot[OO]=ot[LO]=!0;ot[uO]=ot[dO]=ot[$O]=ot[fO]=ot[EO]=ot[hO]=ot[pO]=ot[gO]=ot[vO]=ot[mO]=ot[yO]=ot[bO]=ot[_O]=ot[wO]=ot[xO]=!1;function PO(t){return cO(t)&&lO(t.length)&&!!ot[aO(t)]}var MO=PO;function BO(t){return function(e){return t(e)}}var zd=BO,rl={exports:{}};rl.exports;(function(t,e){var n=F0,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a&&n.process,u=function(){try{var d=o&&o.require&&o.require("util").types;return d||l&&l.binding&&l.binding("util")}catch{}}();t.exports=u})(rl,rl.exports);var Hd=rl.exports,jO=MO,NO=zd,Yg=Hd,Jg=Yg&&Yg.isTypedArray,DO=Jg?NO(Jg):jO,cm=DO,UO=HI,FO=Nd,zO=ir,HO=Dd,WO=Ud,qO=cm,ZO=Object.prototype,KO=ZO.hasOwnProperty;function VO(t,e){var n=zO(t),i=!n&&FO(t),o=!n&&!i&&HO(t),a=!n&&!i&&!o&&qO(t),l=n||i||o||a,u=l?UO(t.length,String):[],d=u.length;for(var f in t)(e||KO.call(t,f))&&!(l&&(f=="length"||o&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||WO(f,d)))&&u.push(f);return u}var um=VO,GO=Object.prototype;function QO(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||GO;return t===n}var Wd=QO;function YO(t,e){return function(n){return t(e(n))}}var dm=YO,JO=dm,XO=JO(Object.keys,Object),eL=XO,tL=Wd,nL=eL,rL=Object.prototype,iL=rL.hasOwnProperty;function sL(t){if(!tL(t))return nL(t);var e=[];for(var n in Object(t))iL.call(t,n)&&n!="constructor"&&e.push(n);return e}var oL=sL,aL=H0,lL=Fd;function cL(t){return t!=null&&lL(t.length)&&!aL(t)}var fm=cL,uL=um,dL=oL,fL=fm;function hL(t){return fL(t)?uL(t):dL(t)}var Pl=hL,pL=om,gL=jd,vL=Pl;function mL(t){return pL(t,vL,gL)}var hm=mL,Xg=hm,yL=1,bL=Object.prototype,_L=bL.hasOwnProperty;function wL(t,e,n,i,o,a){var l=n&yL,u=Xg(t),d=u.length,f=Xg(e),p=f.length;if(d!=p&&!l)return!1;for(var g=d;g--;){var v=u[g];if(!(l?v in e:_L.call(e,v)))return!1}var b=a.get(t),w=a.get(e);if(b&&w)return b==e&&w==t;var x=!0;a.set(t,e),a.set(e,t);for(var $=l;++g<d;){v=u[g];var S=t[v],M=e[v];if(i)var C=l?i(M,S,v,e,t,a):i(S,M,v,t,e,a);if(!(C===void 0?S===M||o(S,M,n,i,a):C)){x=!1;break}$||($=v=="constructor")}if(x&&!$){var I=t.constructor,O=e.constructor;I!=O&&"constructor"in t&&"constructor"in e&&!(typeof I=="function"&&I instanceof I&&typeof O=="function"&&O instanceof O)&&(x=!1)}return a.delete(t),a.delete(e),x}var xL=wL,$L=Ai,EL=tr,kL=$L(EL,"DataView"),CL=kL,SL=Ai,TL=tr,AL=SL(TL,"Promise"),RL=AL,IL=Ai,OL=tr,LL=IL(OL,"WeakMap"),PL=LL,Fu=CL,zu=Ju,Hu=RL,Wu=K0,qu=PL,pm=hs,xs=W0,e0="[object Map]",ML="[object Object]",t0="[object Promise]",n0="[object Set]",r0="[object WeakMap]",i0="[object DataView]",BL=xs(Fu),jL=xs(zu),NL=xs(Hu),DL=xs(Wu),UL=xs(qu),pi=pm;(Fu&&pi(new Fu(new ArrayBuffer(1)))!=i0||zu&&pi(new zu)!=e0||Hu&&pi(Hu.resolve())!=t0||Wu&&pi(new Wu)!=n0||qu&&pi(new qu)!=r0)&&(pi=function(t){var e=pm(t),n=e==ML?t.constructor:void 0,i=n?xs(n):"";if(i)switch(i){case BL:return i0;case jL:return e0;case NL:return t0;case DL:return n0;case UL:return r0}return e});var Ml=pi,hu=Md,FL=im,zL=TI,HL=xL,s0=Ml,o0=ir,a0=Dd,WL=cm,qL=1,l0="[object Arguments]",c0="[object Array]",Ea="[object Object]",ZL=Object.prototype,u0=ZL.hasOwnProperty;function KL(t,e,n,i,o,a){var l=o0(t),u=o0(e),d=l?c0:s0(t),f=u?c0:s0(e);d=d==l0?Ea:d,f=f==l0?Ea:f;var p=d==Ea,g=f==Ea,v=d==f;if(v&&a0(t)){if(!a0(e))return!1;l=!0,p=!1}if(v&&!p)return a||(a=new hu),l||WL(t)?FL(t,e,n,i,o,a):zL(t,e,d,n,i,o,a);if(!(n&qL)){var b=p&&u0.call(t,"__wrapped__"),w=g&&u0.call(e,"__wrapped__");if(b||w){var x=b?t.value():t,$=w?e.value():e;return a||(a=new hu),o(x,$,n,i,a)}}return v?(a||(a=new hu),HL(t,e,n,i,o,a)):!1}var VL=KL,GL=VL,d0=ei;function gm(t,e,n,i,o){return t===e?!0:t==null||e==null||!d0(t)&&!d0(e)?t!==t&&e!==e:GL(t,e,n,i,gm,o)}var vm=gm,QL=Md,YL=vm,JL=1,XL=2;function eP(t,e,n,i){var o=n.length,a=o,l=!i;if(t==null)return!a;for(t=Object(t);o--;){var u=n[o];if(l&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){u=n[o];var d=u[0],f=t[d],p=u[1];if(l&&u[2]){if(f===void 0&&!(d in t))return!1}else{var g=new QL;if(i)var v=i(f,p,d,t,e,g);if(!(v===void 0?YL(p,f,JL|XL,i,g):v))return!1}}return!0}var tP=eP,nP=Ti;function rP(t){return t===t&&!nP(t)}var mm=rP,iP=mm,sP=Pl;function oP(t){for(var e=sP(t),n=e.length;n--;){var i=e[n],o=t[i];e[n]=[i,o,iP(o)]}return e}var aP=oP;function lP(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}var ym=lP,cP=tP,uP=aP,dP=ym;function fP(t){var e=uP(t);return e.length==1&&e[0][2]?dP(e[0][0],e[0][1]):function(n){return n===t||cP(n,t,e)}}var hP=fP,pP=hs,gP=ei,vP="[object Symbol]";function mP(t){return typeof t=="symbol"||gP(t)&&pP(t)==vP}var qd=mP,yP=ir,bP=qd,_P=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,wP=/^\w*$/;function xP(t,e){if(yP(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||bP(t)?!0:wP.test(t)||!_P.test(t)||e!=null&&t in Object(e)}var Zd=xP,bm=Xu,$P="Expected a function";function Kd(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError($P);var n=function(){var i=arguments,o=e?e.apply(this,i):i[0],a=n.cache;if(a.has(o))return a.get(o);var l=t.apply(this,i);return n.cache=a.set(o,l)||a,l};return n.cache=new(Kd.Cache||bm),n}Kd.Cache=bm;var EP=Kd,kP=EP,CP=500;function SP(t){var e=kP(t,function(i){return n.size===CP&&n.clear(),i}),n=e.cache;return e}var TP=SP,AP=TP,RP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,IP=/\\(\\)?/g,OP=AP(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(RP,function(n,i,o,a){e.push(o?a.replace(IP,"$1"):i||n)}),e}),LP=OP;function PP(t,e){for(var n=-1,i=t==null?0:t.length,o=Array(i);++n<i;)o[n]=e(t[n],n,t);return o}var Vd=PP,f0=fs,MP=Vd,BP=ir,jP=qd,NP=1/0,h0=f0?f0.prototype:void 0,p0=h0?h0.toString:void 0;function _m(t){if(typeof t=="string")return t;if(BP(t))return MP(t,_m)+"";if(jP(t))return p0?p0.call(t):"";var e=t+"";return e=="0"&&1/t==-NP?"-0":e}var DP=_m,UP=DP;function FP(t){return t==null?"":UP(t)}var zP=FP,HP=ir,WP=Zd,qP=LP,ZP=zP;function KP(t,e){return HP(t)?t:WP(t,e)?[t]:qP(ZP(t))}var $s=KP,VP=qd,GP=1/0;function QP(t){if(typeof t=="string"||VP(t))return t;var e=t+"";return e=="0"&&1/t==-GP?"-0":e}var Es=QP,YP=$s,JP=Es;function XP(t,e){e=YP(e,t);for(var n=0,i=e.length;t!=null&&n<i;)t=t[JP(e[n++])];return n&&n==i?t:void 0}var Bl=XP,eM=Bl;function tM(t,e,n){var i=t==null?void 0:eM(t,e);return i===void 0?n:i}var nM=tM;function rM(t,e){return t!=null&&e in Object(t)}var iM=rM,sM=$s,oM=Nd,aM=ir,lM=Ud,cM=Fd,uM=Es;function dM(t,e,n){e=sM(e,t);for(var i=-1,o=e.length,a=!1;++i<o;){var l=uM(e[i]);if(!(a=t!=null&&n(t,l)))break;t=t[l]}return a||++i!=o?a:(o=t==null?0:t.length,!!o&&cM(o)&&lM(l,o)&&(aM(t)||oM(t)))}var fM=dM,hM=iM,pM=fM;function gM(t,e){return t!=null&&pM(t,e,hM)}var vM=gM,mM=vm,yM=nM,bM=vM,_M=Zd,wM=mm,xM=ym,$M=Es,EM=1,kM=2;function CM(t,e){return _M(t)&&wM(e)?xM($M(t),e):function(n){var i=yM(n,t);return i===void 0&&i===e?bM(n,t):mM(e,i,EM|kM)}}var SM=CM;function TM(t){return t}var wm=TM;function AM(t){return function(e){return e?.[t]}}var RM=AM,IM=Bl;function OM(t){return function(e){return IM(e,t)}}var LM=OM,PM=RM,MM=LM,BM=Zd,jM=Es;function NM(t){return BM(t)?PM(jM(t)):MM(t)}var DM=NM,UM=hP,FM=SM,zM=wm,HM=ir,WM=DM;function qM(t){return typeof t=="function"?t:t==null?zM:typeof t=="object"?HM(t)?FM(t[0],t[1]):UM(t):WM(t)}var Gd=qM,ZM=Gd,KM=V0;function VM(t,e){return t&&t.length?KM(t,ZM(e)):[]}var GM=VM;const xm=ol(GM);let Aa=0;const{setActiveSubscriptions:QM}=lv();setInterval(()=>{QM(Aa)},1e3);const $m=t=>{const{config:e,shouldMuteEvent:n}=et(),i=Cd(),[o,a]=Se([]);_r(sl(()=>[e().mutedPubkeys,e().mutedKeywords],()=>{a(d=>d.filter(f=>!n(f)))},{defer:!0})),er(()=>{console.debug("subscription mounted",t()?.debugId,t()),jn(()=>{console.debug("subscription unmount",t()?.debugId,t())})});const l=d=>{const p=t()?.limit??50,g=d.created_at-Ur();if(!(g>300)){if(g>0){setTimeout(()=>l(d),g*1e3);return}a(v=>{const b=hd.insertEventIntoDescendingList(v,d).slice(0,p),w=xm(b,x=>x.id);return w.length!==b.length&&console.warn("duplicated event",d),w})}},u=()=>{console.debug("startSubscription: start");const d=t();if(d==null)return;const{relayUrls:f,filters:p,options:g,onEvent:v,onEOSE:b,continuous:w=!0}=d,x=i().sub(f,p,g);let $=!0;Aa+=1;let S=!1,M=!1;const C=[];x.on("event",A=>{v?.(A),!(d.clientEventFilter!=null&&!d.clientEventFilter(A))&&(M?l(A):(S=!0,C.push(A)))}),x.on("eose",()=>{b?.(),M=!0,a(Ou(C)),w||(x.unsub(),$&&($=!1,Aa-=1))});let I=!1;const O=setInterval(()=>{if(!I){if(I=!0,M){clearInterval(O),I=!1;return}S&&(S=!1,a(Ou(C))),I=!1}},100);jn(()=>{console.debug("startSubscription: end"),x.unsub(),$&&($=!1,Aa-=1),clearInterval(O)})};return _r(()=>{u()}),{events:o}},YM=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25">'),JM=(t={})=>(()=>{const e=YM();return it(e,t,!0,!0),e})(),Em=t=>{const e=()=>{const i=t();if(i==null)return[];const o=[];return zr(i).pTags().forEach(l=>{const[,u,d,f]=l,p={pubkey:u,petname:f};d!=null&&d.length>0&&(p.mainRelayUrl=d),o.push(p)}),o};return{followings:e,followingPubkeys:()=>e().map(i=>i.pubkey),data:t}},XM=async({pubkey:t},e)=>{const n=new ys({type:"Followings",pubkey:t});xl({task:n,signal:e});const i=await n.latestEventPromise();return Em(()=>i)},g0=t=>{const e=ds(),n=Fe(t),i=()=>["useFollowings",n()],o=Si(i,cv({taskProvider:([,l])=>{if(l==null)return null;const{pubkey:u}=l;return new ys({type:"Followings",pubkey:u})},queryClient:e}),{staleTime:5*60*1e3,cacheTime:3*24*60*60*1e3,refetchOnMount:!0,refetchOnWindowFocus:!1,refetchOnReconnect:!1,refetchInterval:0}),a=()=>e.invalidateQueries(i());return{...Em(()=>o.data),invalidateFollowings:a,query:o}},eB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0">'),tB=(t={})=>(()=>{const e=eB();return it(e,t,!0,!0),e})(),nB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z">'),km=(t={})=>(()=>{const e=nB();return it(e,t,!0,!0),e})(),rB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418">'),Cm=(t={})=>(()=>{const e=rB();return it(e,t,!0,!0),e})(),iB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z">'),sB=(t={})=>(()=>{const e=iB();return it(e,t,!0,!0),e})(),oB=B('<div class="p-8"><div class="flex flex-col items-center pt-8"><img alt="Logo" width="64" height="64"><h1 class="my-4">Rabbit <span id="app-version">v</span></h1></div><h2 class="my-4 text-xl font-bold">バグ報告について</h2><p class="my-4">おかしな動作を見つけたら<a class="text-blue-500 underline" href="https://github.com/syusui-s/rabbit/issues/new/choose" target="_blank" rel="noopener noreferrer">GitHubのIssues</a>までご報告ください。</p><h2 class="my-4 text-xl font-bold">ソースコード</h2><p class="my-4">ソースコードは<!>で入手できます。</p><h2 class="my-4 text-xl font-bold">利用規約</h2><p class="my-4">Copyright (C) 2023 Shusui Moyatani and </p><p class="my-4">このプログラムは自由ソフトウェアです。フリーソフトウェア財団から発行された GNUアフェロー一般公衆ライセンス（バージョン3か、(任意で)より新しいバージョンのいずれか）の条件の下で 再頒布や改変、あるいはその両方を行うことができます。</p><p class="my-4">このプログラムは役立つことを願って頒布されていますが、<strong class="font-bold">いかなる保証もありません</strong>。<em>商品性</em>や<em>特定目的適合性</em> に対する保証は暗示されたものも含めて存在しません。 詳しくはGNUアフェロー一般公衆ライセンスをご覧ください。</p><p class="my-4">あなたは、このプログラムに付随してGNUアフェロー一般公衆ライセンスのコピーを受け取っていることでしょう。 そうでなければ、<a class="link" href="https://www.gnu.org/licenses/">https://www.gnu.org/licenses/</a>をご参照ください。</p><a class="text-blue-500 underline" href="https://gpl.mhatta.org/agpl.ja.html">参考訳</a><pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs"></pre><h2 class="my-4 text-xl font-bold">使用ライブラリ'),aB=B('<h3 class="mb-2 mt-4 font-mono">@<!> (<!>)'),lB=B('<pre class="max-h-96 overflow-scroll rounded bg-zinc-100 p-4 text-xs">'),cB=async()=>{const e=await(await fetch(Gu("packageInfo.json"))).text();return JSON.parse(e)},v0="c2d10f5",uB=t=>{const[e]=N0(cB);return E(Oi,{get onClose(){return t.onClose},get children(){const n=oB(),i=n.firstChild,o=i.firstChild,a=o.nextSibling,l=a.firstChild,u=l.nextSibling;u.firstChild;const d=i.nextSibling,f=d.nextSibling,p=f.nextSibling,g=p.nextSibling,v=g.firstChild,b=v.nextSibling;b.nextSibling;const w=g.nextSibling,x=w.nextSibling;x.firstChild;const $=x.nextSibling,S=$.nextSibling,M=S.nextSibling,C=M.nextSibling,I=C.nextSibling;return I.nextSibling,k(u,()=>e()?.self?.version,null),k(u,E(me,{when:v0,get children(){return[" (",v0,")"]}}),null),k(g,E(Xn,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit",children:"GitHub"}),b),k(x,E(Xn,{class:"text-blue-400 underline",href:"https://github.com/syusui-s/rabbit/graphs/contributors",children:"Rabbit contributors"}),null),k(I,()=>e()?.self.licenseText),k(n,E(Ft,{get each(){return e()?.packages??[]},fallback:"取得中",children:O=>[(()=>{const A=aB(),D=A.firstChild,j=D.nextSibling,K=j.nextSibling,J=K.nextSibling;return J.nextSibling,k(A,()=>O.name,D),k(A,()=>O.version,j),k(A,()=>O.licenseSpdx,J),A})(),(()=>{const A=lB();return k(A,()=>O.licenseText),A})()]}),null),Me(()=>Ue(o,"src",Gu("images/rabbit_app_256.png"))),n}})},dB=B('<div class="flex flex-wrap p-4"><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8"></span></button><button class="flex basis-1/2 flex-col items-center gap-2 py-8 sm:basis-1/4"><span class="inline-block h-8 w-8">'),fB=t=>{const e=dt(),n=Xr(),{saveColumn:i}=et(),o=kl(),a=()=>{t.onClose(),o({command:"moveToLastColumn"}).catch(v=>console.error(v))},l=()=>{_n([n()])(([v])=>{i(bd({pubkey:v}))}),a()},u=()=>{_n([n()])(([v])=>{i(Z1({pubkey:v}))}),a()},d=()=>{i(V1()),a()},f=()=>{i(wd({query:""})),a()},p=()=>{_n([n()])(([v])=>{i(_d({pubkey:v}))}),a()},g=()=>{_n([n()])(([v])=>{i(G1({pubkey:v}))}),a()};return E(Oi,{get onClose(){return t.onClose},get children(){const v=dB(),b=v.firstChild,w=b.firstChild,x=b.nextSibling,$=x.firstChild,S=x.nextSibling,M=S.firstChild,C=S.nextSibling,I=C.firstChild,O=C.nextSibling,A=O.firstChild,D=O.nextSibling,j=D.firstChild;return b.$$click=()=>l(),k(w,E(JM,{})),k(b,()=>e()("column.home"),null),x.$$click=()=>u(),k($,E(tB,{})),k(x,()=>e()("column.notification"),null),S.$$click=()=>d(),k(M,E(Cm,{})),k(S,()=>e()("column.japanese"),null),C.$$click=()=>f(),k(I,E(sB,{})),k(C,()=>e()("column.search"),null),O.$$click=()=>p(),k(A,E(km,{})),k(O,()=>e()("column.myPosts"),null),D.$$click=()=>g(),k(j,E(gv,{})),k(D,()=>e()("column.myReactions"),null),v}})};vt(["click"]);const hB=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99">'),pB=(t={})=>(()=>{const e=hB();return it(e,t,!0,!0),e})(),gB=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25z" clip-rule="evenodd">'),vB=(t={})=>(()=>{const e=gB();return it(e,t,!0,!0),e})(),mB=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z" clip-rule="evenodd">'),yB=(t={})=>(()=>{const e=mB();return it(e,t,!0,!0),e})();function bB(t){const{config:e}=et(),n=Fe(t),{events:i}=$m(()=>({relayUrls:e().relayUrls,filters:[{kinds:[lt.Contacts],"#p":[n().pubkey]}],limit:Number.MAX_SAFE_INTEGER,continuous:!0})),o=()=>_i(i()?.map(l=>l.pubkey));return{followersPubkeys:o,count:()=>o().length}}const _B=t=>{const e=Fe(t),n=Si(()=>["useVerification",e()],({queryKey:o})=>{const[,a]=o;if(a==null)return Promise.resolve(null);const{nip05:l}=a;return B1.queryProfile(l)},{staleTime:30*60*1e3,cacheTime:24*60*60*1e3});return{verification:()=>n?.data??null,query:n}},wB=B('<button class="rounded-full border border-primary px-4 py-2 text-center font-bold text-primary hover:bg-primary hover:text-white sm:w-20">'),m0=B('<span class="rounded-full border border-primary px-4 py-2 text-primary sm:text-base">'),xB=B('<button class="rounded-full border border-primary bg-primary px-4 py-2 text-center font-bold text-white hover:bg-rose-500 sm:w-36">'),$B=B('<button class="w-28 rounded-full border border-primary px-4 py-2 text-primary hover:border-rose-400 hover:text-rose-400">'),EB=B('<button class="w-10 rounded-full border border-primary p-2 text-primary hover:border-rose-400 hover:text-rose-400">'),y0=B('<div class="shrink-0 text-xs">'),kB=B('<div class="flex shrink-0 flex-col items-center gap-1"><div class="flex flex-row justify-start gap-1">'),CB=B('<div class="mt-[-54px] flex items-end gap-4 px-4 pt-4"><div class="flex-1 shrink-0"><div class="h-28 w-28 rounded-lg shadow-md">'),SB=B('<div class="truncate text-xl font-bold">'),TB=B('<div class="truncate text-xs">@'),AB=B('<span class="inline-block h-3 w-3">'),RB=B('<span class="inline-block h-4 w-4 text-blue-400">'),IB=B('<div class="flex items-center text-xs">'),OB=B('<div class="flex items-start px-4 pt-2"><div class="h-16 shrink overflow-hidden"><div class="flex items-center gap-2"></div><div class="flex gap-1"><div class="truncate text-xs">'),LB=B('<div class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),PB=B('<div class="flex border-t px-4 py-2"><button class="flex flex-1 flex-col items-start"><div class="text-sm"></div><div class="text-xl">'),MB=B('<ul class="border-t px-5 py-2 text-xs">'),BB=B('<ul class="border-t p-1">'),jB=B('<div class="h-12 shrink-0">'),NB=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),DB=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),UB=B('<span class="inline-block h-4 w-4 text-rose-500">'),FB=B('<div class="max-h-40 shrink-0 overflow-y-auto whitespace-pre-wrap px-4 py-2 text-sm">'),zB=B('<span class="text-sm">'),HB=B('<button class="text-sm hover:text-stone-800 hover:underline">'),WB=B('<li class="flex items-center gap-1"><span class="inline-block h-4 w-4" area-label="website" title="website">'),qB=t=>{const{count:e}=bB(()=>({pubkey:t.pubkey}));return Fe(e)},ZB=t=>{const e=dt(),{config:n,addMutedPubkey:i,removeMutedPubkey:o,isPubkeyMuted:a,saveColumn:l}=et(),u=kl(),d=Ll(),f=Xr(),{showProfileEdit:p}=Jr(),g=Fe(()=>yo(t.pubkey)),[v,b]=Se(!1),[w,x]=Se(!1),[$,S]=Se(!1),[M,C]=Se(null),I=()=>C(null),{profile:O,event:A,query:D}=bs(()=>({pubkey:t.pubkey})),{verification:j,query:K}=_B(()=>_n([O()?.nip05])(([Y])=>({nip05:Y}))),J=()=>{const Y=O()?.nip05;if(Y==null)return null;const[ie,oe]=Y.split("@");return oe==null?null:ie==="_"?{domain:oe,ident:oe}:{user:ie,domain:oe,ident:Y}},ne=()=>j()?.pubkey===t.pubkey,re=()=>a(t.pubkey),se=Fe(()=>{const Y=A(),ie=O()?.about;if(Y==null||ie==null)return;const oe=$d(ie);return iv(oe,zr(Y))}),{followingPubkeys:ee,invalidateFollowings:N,query:Z}=g0(()=>_n([f()])(([Y])=>({pubkey:Y}))),X=()=>ee().includes(t.pubkey),{followingPubkeys:F,query:H}=g0(()=>({pubkey:t.pubkey})),fe=()=>{const Y=f();return Y!=null&&F().includes(Y)},he=bi({mutationKey:["updateContacts"],mutationFn:(...Y)=>d.updateContacts(...Y).then(ie=>Promise.allSettled(ie.map(qr(5e3)))),onSuccess:Y=>{const ie=Y.filter(Te=>Te.status==="fulfilled").length,oe=Y.length-ie;ie===Y.length?console.log("succeeded to update contacts"):ie>0?console.log(`succeeded to update contacts for ${ie} relays but failed for ${oe} relays`):console.error("failed to update contacts")},onError:Y=>{console.error("failed to update contacts: ",Y)},onSettled:()=>{N().then(()=>Z.refetch()).catch(Y=>console.error("failed to refetch contacts",Y))}}),_e=async(Y,ie)=>{try{const oe=f();if(oe==null)return;b(!0);const Te=await XM({pubkey:oe});if((Te.data()==null||Te.followingPubkeys().length===0)&&!window.confirm(e()("profile.confirmUpdateEvenIfEmpty")))return;if((Te?.data()?.created_at??0)<(Z.data?.created_at??0)){window.alert(e()("profile.failedToFetchLatestFollowList"));return}const Ve=Te.data()?.tags??[];let le;switch(Y){case"follow":le=[...Ve,["p",ie]];break;case"unfollow":le=Ve.filter(([V,qe])=>!(V==="p"&&qe===ie));break;default:console.error("updateContacts: invalid operation",Y);return}await he.mutateAsync({relayUrls:n().relayUrls,pubkey:oe,updatedTags:le,content:Te.data()?.content??""})}catch(oe){console.error("failed to update contact list",oe),window.alert(e()("profile.failedToUpdateFollowList"))}finally{b(!1)}},Ke=()=>{_e("follow",t.pubkey).catch(Y=>{console.log("failed to follow",Y)})},ue=()=>{window.confirm(e()("profile.confirmUnfollow"))&&_e("unfollow",t.pubkey).catch(Y=>{console.log("failed to unfollow",Y)})},ce=[{content:()=>e()("profile.copyPubkey"),onSelect:()=>{navigator.clipboard.writeText(g()).catch(Y=>window.alert(Y))}},{content:()=>e()("profile.addUserColumn"),onSelect:()=>{const Y=O()?.name??g();l(_d({name:Y,pubkey:t.pubkey})),u({command:"moveToLastColumn"}).catch(ie=>console.error(ie)),t.onClose?.()}},{content:()=>e()("profile.addUserHomeColumn"),onSelect:()=>{const Y=`${e()("column.home")} / ${O()?.name??g()}`;l(bd({name:Y,pubkey:t.pubkey})),u({command:"moveToLastColumn"}).catch(ie=>console.error(ie)),t.onClose?.()}},{content:()=>re()?e()("profile.unmute"):e()("profile.mute"),onSelect:()=>{re()?o(t.pubkey):i(t.pubkey)}},{when:()=>t.pubkey===f(),content:()=>X()?e()("profile.unfollowMyself"):e()("profile.followMyself"),onSelect:()=>{X()?ue():Ke()}}],{events:be}=$m(()=>({relayUrls:n().relayUrls,filters:[{kinds:[1,6],authors:[t.pubkey],limit:10,until:Ur()}],continuous:!1}));return E(Oi,{onClose:()=>t.onClose?.(),get children(){return[E(me,{get when(){return Fe(()=>!!D.isFetched)()&&O()?.banner},get fallback(){return jB()},keyed:!0,children:Y=>(()=>{const ie=NB(),oe=ie.firstChild;return Ue(oe,"src",Y),ie})()}),(()=>{const Y=CB(),ie=Y.firstChild,oe=ie.firstChild;return k(oe,E(me,{get when(){return Fe(()=>!!D.isFetched)()&&O()?.picture},keyed:!0,children:Te=>(()=>{const Ve=DB();return Ue(Ve,"src",Te),Ve})()})),k(Y,E(me,{get when(){return f()!=null},get children(){const Te=kB(),Ve=Te.firstChild;return k(Ve,E(Ln,{get children(){return[E(Ye,{get when(){return t.pubkey===f()},get children(){const le=wB();return le.$$click=()=>p(),k(le,()=>e()("profile.editProfile")),le}}),E(Ye,{get when(){return he.isLoading||v()},get children(){const le=m0();return k(le,()=>e()("general.updating")),le}}),E(Ye,{get when(){return Z.isLoading||Z.isFetching},get children(){const le=m0();return k(le,()=>e()("general.loading")),le}}),E(Ye,{get when(){return X()},get children(){const le=xB();return le.$$click=()=>ue(),le.addEventListener("mouseleave",()=>x(!1)),le.addEventListener("mouseenter",()=>x(!0)),k(le,E(me,{get when(){return!w()},get fallback(){return e()("profile.unfollow")},get children(){return e()("profile.followingCurrently")}})),Me(()=>le.disabled=he.isLoading),le}}),E(Ye,{get when(){return!X()},get children(){const le=$B();return le.$$click=()=>Ke(),k(le,()=>e()("profile.follow")),Me(()=>le.disabled=he.isLoading),le}})]}}),null),k(Ve,E(yv,{menu:ce,get children(){const le=EB();return k(le,E(pv,{})),le}}),null),k(Te,E(Ln,{get children(){return[E(Ye,{get when(){return H.isLoading},get children(){const le=y0();return k(le,()=>e()("general.loading")),le}}),E(Ye,{get when(){return fe()},get children(){const le=y0();return k(le,()=>e()("profile.followsYou")),le}})]}}),null),Te}}),null),Y})(),(()=>{const Y=OB(),ie=Y.firstChild,oe=ie.firstChild,Te=oe.nextSibling,Ve=Te.firstChild;return k(ie,E(me,{get when(){return D.isLoading},get children(){return e()("general.loading")}}),oe),k(ie,E(me,{get when(){return(O()?.display_name?.length??0)>0},get children(){const le=SB();return k(le,()=>O()?.display_name),le}}),oe),k(oe,E(me,{get when(){return(O()?.name?.length??0)>0},get children(){const le=TB();return le.firstChild,k(le,()=>O()?.name,null),le}}),null),k(oe,E(me,{get when(){return(O()?.nip05?.length??0)>0},get children(){const le=IB();return k(le,()=>J()?.ident,null),k(le,E(Ln,{get fallback(){return(()=>{const V=UB();return k(V,E(yB,{})),V})()},get children(){return[E(Ye,{get when(){return K.isLoading},get children(){const V=AB();return k(V,E(pB,{})),V}}),E(Ye,{get when(){return ne()},get children(){const V=RB();return k(V,E(vB,{})),V}})]}}),null),le}}),null),k(Ve,g),Y})(),E(me,{get when(){return se()},keyed:!0,children:Y=>(()=>{const ie=FB();return k(ie,E(Gv,{parsed:Y,embedding:!1,initialHidden:!0})),ie})()}),(()=>{const Y=PB(),ie=Y.firstChild,oe=ie.firstChild,Te=oe.nextSibling;return ie.$$click=()=>C("Following"),k(oe,()=>e()("profile.following")),k(Te,E(me,{get when(){return H.isFetched},get fallback(){return(()=>{const Ve=zB();return k(Ve,()=>e()("general.loading")),Ve})()},get children(){return F().length}})),k(Y,E(me,{get when(){return!n().hideCount},get children(){const Ve=LB(),le=Ve.firstChild,V=le.nextSibling;return k(le,()=>e()("profile.followers")),k(V,E(me,{get when(){return $()},get fallback(){return(()=>{const qe=HB();return qe.$$click=()=>S(!0),k(qe,()=>e()("profile.loadFollowers")),qe})()},keyed:!0,get children(){return E(qB,{get pubkey(){return t.pubkey}})}})),Ve}}),null),Y})(),E(me,{get when(){return(O()?.website??"").length>0},get children(){const Y=MB();return k(Y,E(me,{get when(){return O()?.website},keyed:!0,children:ie=>(()=>{const oe=WB(),Te=oe.firstChild;return k(Te,E(Cm,{})),k(oe,E(Xn,{class:"text-blue-500 underline",href:ie}),null),oe})()})),Y}}),E(Ln,{get children(){return E(Ye,{get when(){return M()==="Following"},get children(){return E(Uu,{get data(){return F()},pubkeyExtractor:Y=>Y,onClose:I})}})}}),(()=>{const Y=BB();return k(Y,E(RR,{get events(){return be()}})),Y})()]}})};vt(["click"]);function KB(t,e){for(var n=-1,i=t==null?0:t.length;++n<i&&e(t[n],n,t)!==!1;);return t}var VB=KB,GB=Ai,QB=function(){try{var t=GB(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Sm=QB,b0=Sm;function YB(t,e,n){e=="__proto__"&&b0?b0(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var Tm=YB,JB=Tm,XB=Yu,ej=Object.prototype,tj=ej.hasOwnProperty;function nj(t,e,n){var i=t[e];(!(tj.call(t,e)&&XB(i,n))||n===void 0&&!(e in t))&&JB(t,e,n)}var Qd=nj,rj=Qd,ij=Tm;function sj(t,e,n,i){var o=!n;n||(n={});for(var a=-1,l=e.length;++a<l;){var u=e[a],d=i?i(n[u],t[u],u,n,t):void 0;d===void 0&&(d=t[u]),o?ij(n,u,d):rj(n,u,d)}return n}var wo=sj,oj=wo,aj=Pl;function lj(t,e){return t&&oj(e,aj(e),t)}var cj=lj;function uj(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var dj=uj,fj=Ti,hj=Wd,pj=dj,gj=Object.prototype,vj=gj.hasOwnProperty;function mj(t){if(!fj(t))return pj(t);var e=hj(t),n=[];for(var i in t)i=="constructor"&&(e||!vj.call(t,i))||n.push(i);return n}var yj=mj,bj=um,_j=yj,wj=fm;function xj(t){return wj(t)?bj(t,!0):_j(t)}var Yd=xj,$j=wo,Ej=Yd;function kj(t,e){return t&&$j(e,Ej(e),t)}var Cj=kj,il={exports:{}};il.exports;(function(t,e){var n=tr,i=e&&!e.nodeType&&e,o=i&&!0&&t&&!t.nodeType&&t,a=o&&o.exports===i,l=a?n.Buffer:void 0,u=l?l.allocUnsafe:void 0;function d(f,p){if(p)return f.slice();var g=f.length,v=u?u(g):new f.constructor(g);return f.copy(v),v}t.exports=d})(il,il.exports);var Sj=il.exports;function Tj(t,e){var n=-1,i=t.length;for(e||(e=Array(i));++n<i;)e[n]=t[n];return e}var Aj=Tj,Rj=wo,Ij=jd;function Oj(t,e){return Rj(t,Ij(t),e)}var Lj=Oj,Pj=dm,Mj=Pj(Object.getPrototypeOf,Object),Jd=Mj,Bj=Bd,jj=Jd,Nj=jd,Dj=am,Uj=Object.getOwnPropertySymbols,Fj=Uj?function(t){for(var e=[];t;)Bj(e,Nj(t)),t=jj(t);return e}:Dj,Am=Fj,zj=wo,Hj=Am;function Wj(t,e){return zj(t,Hj(t),e)}var qj=Wj,Zj=om,Kj=Am,Vj=Yd;function Gj(t){return Zj(t,Vj,Kj)}var Xd=Gj,Qj=Object.prototype,Yj=Qj.hasOwnProperty;function Jj(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&Yj.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Xj=Jj,_0=sm;function eN(t){var e=new t.constructor(t.byteLength);return new _0(e).set(new _0(t)),e}var ef=eN,tN=ef;function nN(t,e){var n=e?tN(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var rN=nN,iN=/\w*$/;function sN(t){var e=new t.constructor(t.source,iN.exec(t));return e.lastIndex=t.lastIndex,e}var oN=sN,w0=fs,x0=w0?w0.prototype:void 0,$0=x0?x0.valueOf:void 0;function aN(t){return $0?Object($0.call(t)):{}}var lN=aN,cN=ef;function uN(t,e){var n=e?cN(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var dN=uN,fN=ef,hN=rN,pN=oN,gN=lN,vN=dN,mN="[object Boolean]",yN="[object Date]",bN="[object Map]",_N="[object Number]",wN="[object RegExp]",xN="[object Set]",$N="[object String]",EN="[object Symbol]",kN="[object ArrayBuffer]",CN="[object DataView]",SN="[object Float32Array]",TN="[object Float64Array]",AN="[object Int8Array]",RN="[object Int16Array]",IN="[object Int32Array]",ON="[object Uint8Array]",LN="[object Uint8ClampedArray]",PN="[object Uint16Array]",MN="[object Uint32Array]";function BN(t,e,n){var i=t.constructor;switch(e){case kN:return fN(t);case mN:case yN:return new i(+t);case CN:return hN(t,n);case SN:case TN:case AN:case RN:case IN:case ON:case LN:case PN:case MN:return vN(t,n);case bN:return new i;case _N:case $N:return new i(t);case wN:return pN(t);case xN:return new i;case EN:return gN(t)}}var jN=BN,NN=Ti,E0=Object.create,DN=function(){function t(){}return function(e){if(!NN(e))return{};if(E0)return E0(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}(),UN=DN,FN=UN,zN=Jd,HN=Wd;function WN(t){return typeof t.constructor=="function"&&!HN(t)?FN(zN(t)):{}}var qN=WN,ZN=Ml,KN=ei,VN="[object Map]";function GN(t){return KN(t)&&ZN(t)==VN}var QN=GN,YN=QN,JN=zd,k0=Hd,C0=k0&&k0.isMap,XN=C0?JN(C0):YN,eD=XN,tD=Ml,nD=ei,rD="[object Set]";function iD(t){return nD(t)&&tD(t)==rD}var sD=iD,oD=sD,aD=zd,S0=Hd,T0=S0&&S0.isSet,lD=T0?aD(T0):oD,cD=lD,uD=Md,dD=VB,fD=Qd,hD=cj,pD=Cj,gD=Sj,vD=Aj,mD=Lj,yD=qj,bD=hm,_D=Xd,wD=Ml,xD=Xj,$D=jN,ED=qN,kD=ir,CD=Dd,SD=eD,TD=Ti,AD=cD,RD=Pl,ID=Yd,OD=1,LD=2,PD=4,Rm="[object Arguments]",MD="[object Array]",BD="[object Boolean]",jD="[object Date]",ND="[object Error]",Im="[object Function]",DD="[object GeneratorFunction]",UD="[object Map]",FD="[object Number]",Om="[object Object]",zD="[object RegExp]",HD="[object Set]",WD="[object String]",qD="[object Symbol]",ZD="[object WeakMap]",KD="[object ArrayBuffer]",VD="[object DataView]",GD="[object Float32Array]",QD="[object Float64Array]",YD="[object Int8Array]",JD="[object Int16Array]",XD="[object Int32Array]",eU="[object Uint8Array]",tU="[object Uint8ClampedArray]",nU="[object Uint16Array]",rU="[object Uint32Array]",rt={};rt[Rm]=rt[MD]=rt[KD]=rt[VD]=rt[BD]=rt[jD]=rt[GD]=rt[QD]=rt[YD]=rt[JD]=rt[XD]=rt[UD]=rt[FD]=rt[Om]=rt[zD]=rt[HD]=rt[WD]=rt[qD]=rt[eU]=rt[tU]=rt[nU]=rt[rU]=!0;rt[ND]=rt[Im]=rt[ZD]=!1;function Ra(t,e,n,i,o,a){var l,u=e&OD,d=e&LD,f=e&PD;if(n&&(l=o?n(t,i,o,a):n(t)),l!==void 0)return l;if(!TD(t))return t;var p=kD(t);if(p){if(l=xD(t),!u)return vD(t,l)}else{var g=wD(t),v=g==Im||g==DD;if(CD(t))return gD(t,u);if(g==Om||g==Rm||v&&!o){if(l=d||v?{}:ED(t),!u)return d?yD(t,pD(l,t)):mD(t,hD(l,t))}else{if(!rt[g])return o?t:{};l=$D(t,g,u)}}a||(a=new uD);var b=a.get(t);if(b)return b;a.set(t,l),AD(t)?t.forEach(function($){l.add(Ra($,e,n,$,t,a))}):SD(t)&&t.forEach(function($,S){l.set(S,Ra($,e,n,S,t,a))});var w=f?d?_D:bD:d?ID:RD,x=p?void 0:w(t);return dD(x||t,function($,S){x&&(S=$,$=t[S]),fD(l,S,Ra($,e,n,S,t,a))}),l}var iU=Ra;function sU(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var oU=sU;function aU(t,e,n){var i=-1,o=t.length;e<0&&(e=-e>o?0:o+e),n=n>o?o:n,n<0&&(n+=o),o=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(o);++i<o;)a[i]=t[i+e];return a}var lU=aU,cU=Bl,uU=lU;function dU(t,e){return e.length<2?t:cU(t,uU(e,0,-1))}var fU=dU,hU=$s,pU=oU,gU=fU,vU=Es;function mU(t,e){return e=hU(e,t),t=gU(t,e),t==null||delete t[vU(pU(e))]}var yU=mU,bU=hs,_U=Jd,wU=ei,xU="[object Object]",$U=Function.prototype,EU=Object.prototype,Lm=$U.toString,kU=EU.hasOwnProperty,CU=Lm.call(Object);function SU(t){if(!wU(t)||bU(t)!=xU)return!1;var e=_U(t);if(e===null)return!0;var n=kU.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&Lm.call(n)==CU}var TU=SU,AU=TU;function RU(t){return AU(t)?void 0:t}var IU=RU,A0=fs,OU=Nd,LU=ir,R0=A0?A0.isConcatSpreadable:void 0;function PU(t){return LU(t)||OU(t)||!!(R0&&t&&t[R0])}var MU=PU,BU=Bd,jU=MU;function Pm(t,e,n,i,o){var a=-1,l=t.length;for(n||(n=jU),o||(o=[]);++a<l;){var u=t[a];e>0&&n(u)?e>1?Pm(u,e-1,n,i,o):BU(o,u):i||(o[o.length]=u)}return o}var NU=Pm,DU=NU;function UU(t){var e=t==null?0:t.length;return e?DU(t,1):[]}var FU=UU;function zU(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var HU=zU,WU=HU,I0=Math.max;function qU(t,e,n){return e=I0(e===void 0?t.length-1:e,0),function(){for(var i=arguments,o=-1,a=I0(i.length-e,0),l=Array(a);++o<a;)l[o]=i[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=i[o];return u[e]=n(l),WU(t,this,u)}}var ZU=qU;function KU(t){return function(){return t}}var VU=KU,GU=VU,O0=Sm,QU=wm,YU=O0?function(t,e){return O0(t,"toString",{configurable:!0,enumerable:!1,value:GU(e),writable:!0})}:QU,JU=YU,XU=800,eF=16,tF=Date.now;function nF(t){var e=0,n=0;return function(){var i=tF(),o=eF-(i-n);if(n=i,o>0){if(++e>=XU)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var rF=nF,iF=JU,sF=rF,oF=sF(iF),aF=oF,lF=FU,cF=ZU,uF=aF;function dF(t){return uF(cF(t,void 0,lF),t+"")}var fF=dF,hF=Vd,pF=iU,gF=yU,vF=$s,mF=wo,yF=IU,bF=fF,_F=Xd,wF=1,xF=2,$F=4,EF=bF(function(t,e){var n={};if(t==null)return n;var i=!1;e=hF(e,function(a){return a=vF(a,t),i||(i=a.length>1),a}),mF(t,_F(t),n),i&&(n=pF(n,wF|xF|$F,yF));for(var o=e.length;o--;)gF(n,e[o]);return n}),kF=EF;const CF=ol(kF);var SF="Expected a function";function TF(t){if(typeof t!="function")throw new TypeError(SF);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var AF=TF,RF=Qd,IF=$s,OF=Ud,L0=Ti,LF=Es;function PF(t,e,n,i){if(!L0(t))return t;e=IF(e,t);for(var o=-1,a=e.length,l=a-1,u=t;u!=null&&++o<a;){var d=LF(e[o]),f=n;if(d==="__proto__"||d==="constructor"||d==="prototype")return t;if(o!=l){var p=u[d];f=i?i(p,d,u):void 0,f===void 0&&(f=L0(p)?p:OF(e[o+1])?[]:{})}RF(u,d,f),u=u[d]}return t}var MF=PF,BF=Bl,jF=MF,NF=$s;function DF(t,e,n){for(var i=-1,o=e.length,a={};++i<o;){var l=e[i],u=BF(t,l);n(u,l)&&jF(a,NF(l,t),u)}return a}var UF=DF,FF=Vd,zF=Gd,HF=UF,WF=Xd;function qF(t,e){if(t==null)return{};var n=FF(WF(t),function(i){return[i]});return e=zF(e),HF(t,n,function(i,o){return e(i,o[0])})}var ZF=qF,KF=Gd,VF=AF,GF=ZF;function QF(t,e){return GF(t,VF(KF(e)))}var YF=QF;const JF=ol(YF),XF=B('<div class="h-40 w-full shrink-0 sm:h-52"><img alt="header" class="h-full w-full object-cover">'),ez=B('<img alt="user icon" class="h-full w-full rounded-lg object-cover">'),tz=B('<div><div class="ml-4 mt-[-64px] h-28 w-28 rounded-lg shadow-md">'),nz=B('<div class="px-4 pt-4">'),rz=B('<div><span class="font-bold"></span><div>'),iz=B('<div><form class="flex flex-col gap-4 p-4"><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="picture" name="picture" placeholder="https://....../picture.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="picture"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="banner" name="banner" placeholder="https://....../banner.png"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><div class="flex w-full items-center gap-2"><span>@</span><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" id="name" name="name" maxlength="32" required></div></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="displayName" maxlength="32"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><textarea class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" name="about" rows="5"></textarea></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" placeholder="https://....../"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="nip05" placeholder="yourname@domain.example.com"></div><div class="flex flex-col items-start gap-1"><label class="font-bold" for="name"></label><span class="text-xs"></span><input class="w-full rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="website" pattern="^((LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)|[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+)$" placeholder="LNURL1XXXXXX / abcdef@wallet.example.com"></div><div class="flex gap-2"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white hover:bg-rose-400"></button><button type="button" class="rounded border border-rose-300 p-2 font-bold text-rose-300 hover:border-rose-400 hover:text-rose-400">'),sz=B('<div class="h-24 shrink-0">'),oz=B('<div class="flex flex-col items-start "><span class="text-sm font-bold"></span><span class="whitespace-pre-wrap break-all text-sm">'),az="(LNURL1[AC-HJ-NP-Z02-9]+|lnurl1[ac-hj-np-z02-9]+)",lz="[-_a-zA-Z0-9.]+@[-a-zA-Z0-9.]+",cz=new RegExp(`^${az}$`),Mm=new RegExp(`^${lz}$`),uz=t=>cz.test(t),dz=t=>Mm.test(t),fz=t=>{const e=dt(),n=Xr(),{config:i}=et(),[o,a]=Se(""),[l,u]=Se(""),[d,f]=Se(""),[p,g]=Se(""),[v,b]=Se(""),[w,x]=Se(""),[$,S]=Se(""),[M,C]=Se(""),{profile:I,invalidateProfile:O,query:A}=bs(()=>_n([n()])(([ee])=>({pubkey:ee}))),{updateProfile:D}=Ll(),j=bi({mutationKey:["updateProfile"],mutationFn:(...ee)=>D(...ee).then(N=>Promise.allSettled(N.map(qr(1e4)))),onSuccess:ee=>{const N=ee.filter(X=>X.status==="fulfilled").length,Z=ee.length-N;N===ee.length?window.alert(e()("profile.edit.updateSucceeded")):N>0?window.alert(e()("profile.edit.failedToUpdatePartially",{count:Z})):window.alert(e()("profile.edit.failedToUpdate")),O().then(()=>A.refetch()).catch(X=>console.error(X)),t.onClose()},onError:ee=>{console.error("failed to delete",ee)}}),K=()=>A.isLoading||j.isLoading,J=()=>K();setInterval(()=>console.log(A.isLoading,j.isLoading),1e3);const ne=()=>CF(I(),["picture","banner","name","display_name","about","website","nip05","lud06","lud16"]),re=ee=>{ee.preventDefault();const N=n();if(N==null)return;const Z=JF({picture:o(),banner:l(),name:d(),display_name:p(),about:v(),website:w(),nip05:$(),lud06:uz(M())?M():null,lud16:dz(M())?M():null},X=>X==null||X.length===0);j.mutate({relayUrls:i().relayUrls,pubkey:N,profile:Z,otherProperties:ne()})},se=ee=>ee.key==="Enter"&&ee.preventDefault();return er(()=>{const ee=I();ee!=null&&(A.refetch().catch(N=>console.error(N)),Oa(()=>{a(N=>ee.picture??N),u(N=>ee.banner??N),f(N=>ee.name??N),g(N=>ee.display_name??N),b(N=>ee.about??N),x(N=>ee.website??N),S(N=>ee.nip05??N),ee.lud16!=null?C(ee.lud16):ee.lud06!=null&&C(ee.lud06)}))}),E(Oi,{closeButton:()=>E(U0,{}),get onClose(){return t.onClose},get children(){return[(()=>{const ee=tz(),N=ee.firstChild;return k(ee,E(me,{get when(){return l().length>0},get fallback(){return sz()},keyed:!0,get children(){const Z=XF(),X=Z.firstChild;return Me(()=>Ue(X,"src",l())),Z}}),N),k(N,E(me,{get when(){return o().length>0},get children(){const Z=ez();return Me(()=>Ue(Z,"src",o())),Z}})),ee})(),E(me,{get when(){return K()},get children(){const ee=nz();return k(ee,()=>e()("general.loading")),ee}}),(()=>{const ee=iz(),N=ee.firstChild,Z=N.firstChild,X=Z.firstChild,F=X.nextSibling,H=Z.nextSibling,fe=H.firstChild,he=fe.nextSibling,_e=H.nextSibling,Ke=_e.firstChild,ue=Ke.nextSibling,ce=ue.firstChild,be=ce.nextSibling,Y=_e.nextSibling,ie=Y.firstChild,oe=ie.nextSibling,Te=Y.nextSibling,Ve=Te.firstChild,le=Ve.nextSibling,V=Te.nextSibling,qe=V.firstChild,xt=qe.nextSibling,Fn=V.nextSibling,Bt=Fn.firstChild,xn=Bt.nextSibling,ti=Fn.nextSibling,$n=ti.firstChild,Ct=$n.nextSibling,Yt=Ct.nextSibling,zn=ti.nextSibling,Cr=zn.firstChild,En=Cr.nextSibling;return N.addEventListener("submit",re),k(X,()=>e()("profile.edit.icon")),F.$$keydown=se,F.addEventListener("blur",Ae=>a(Ae.currentTarget.value)),k(fe,()=>e()("profile.edit.banner")),he.$$keydown=se,he.addEventListener("blur",Ae=>u(Ae.currentTarget.value)),k(Ke,()=>e()("profile.edit.name")),be.$$keydown=se,be.addEventListener("change",Ae=>f(Ae.currentTarget.value)),k(ie,()=>e()("profile.edit.displayName")),oe.$$keydown=se,oe.addEventListener("change",Ae=>g(Ae.currentTarget.value)),k(Ve,()=>e()("profile.edit.about")),le.addEventListener("change",Ae=>b(Ae.currentTarget.value)),k(qe,()=>e()("profile.edit.website")),xt.$$keydown=se,xt.addEventListener("change",Ae=>x(Ae.currentTarget.value)),k(Bt,()=>e()("profile.edit.nip05")),xn.$$keydown=se,xn.addEventListener("change",Ae=>S(Ae.currentTarget.value)),k($n,()=>e()("profile.edit.lightningAddress")),k(Ct,()=>e()("profile.edit.lightningAddressDescription")),Yt.$$keydown=se,Yt.addEventListener("change",Ae=>C(Ae.currentTarget.value)),k(N,E(me,{get when(){return Object.entries(ne()).length>0},get children(){const Ae=rz(),Ht=Ae.firstChild,Wt=Ht.nextSibling;return k(Ht,()=>e()("profile.edit.otherProperties")),k(Wt,E(Ft,{get each(){return Object.entries(ne())},children:([kn,Cn])=>(()=>{const ln=oz(),cn=ln.firstChild,Sn=cn.nextSibling;return k(cn,kn),k(Sn,Cn),ln})()})),Ae}}),zn),k(Cr,()=>e()("profile.edit.save")),En.$$click=()=>t.onClose(),k(En,()=>e()("profile.edit.cancel")),k(N,E(me,{get when(){return j.isLoading},get children(){return e()("profile.edit.updating")}}),null),Me(Ae=>{const Ht=J(),Wt=J(),kn=J(),Cn=J(),ln=J(),cn=J(),Sn=Mm.source,sr=J(),or=J(),ar=j.isLoading;return Ht!==Ae._v$&&(F.disabled=Ae._v$=Ht),Wt!==Ae._v$2&&(he.disabled=Ae._v$2=Wt),kn!==Ae._v$3&&(be.disabled=Ae._v$3=kn),Cn!==Ae._v$4&&(oe.disabled=Ae._v$4=Cn),ln!==Ae._v$5&&(le.disabled=Ae._v$5=ln),cn!==Ae._v$6&&(xt.disabled=Ae._v$6=cn),Sn!==Ae._v$7&&Ue(xn,"pattern",Ae._v$7=Sn),sr!==Ae._v$8&&(xn.disabled=Ae._v$8=sr),or!==Ae._v$9&&(Yt.disabled=Ae._v$9=or),ar!==Ae._v$10&&(Cr.disabled=Ae._v$10=ar),Ae},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),Me(()=>F.value=o()),Me(()=>he.value=l()),Me(()=>be.value=d()),Me(()=>oe.value=p()),Me(()=>le.value=v()),Me(()=>xt.value=w()),Me(()=>xn.value=$()),Me(()=>Yt.value=M()),ee})()]}})};vt(["keydown","click"]);const pH=()=>{const t=Xr(),{modalState:e,showProfile:n,closeModal:i}=Jr();return E(me,{get when(){return e()},keyed:!0,children:o=>E(Ln,{get children(){return[E(Ye,{get when(){return o.type==="Profile"&&o.pubkey},keyed:!0,children:a=>E(ZB,{pubkey:a,onClose:i})}),E(Ye,{get when(){return o.type==="ProfileEdit"},keyed:!0,get children(){return E(fz,{onClose:()=>_n([t()])(([a])=>{n(a)})})}}),E(Ye,{get when(){return o.type==="AddColumn"},get children(){return E(fB,{onClose:i})}}),E(Ye,{get when(){return o.type==="About"},get children(){return E(uB,{onClose:i})}})]}})})},hz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z">'),pz=(t={})=>(()=>{const e=hz();return it(e,t,!0,!0),e})(),gz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5zM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5z" clip-rule="evenodd">'),P0=(t={})=>(()=>{const e=gz();return it(e,t,!0,!0),e})(),vz=B('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712zm-2.218 5.93-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4z"></path><path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25z">'),mz=(t={})=>(()=>{const e=vz();return it(e,t,!0,!0),e})(),yz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12c1.292 4.338 5.31 7.5 10.066 7.5.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88">'),bz=(t={})=>(()=>{const e=yz();return it(e,t,!0,!0),e})(),_z=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42">'),wz=(t={})=>(()=>{const e=_z();return it(e,t,!0,!0),e})(),xz=B('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">'),$z=(t={})=>(()=>{const e=xz();return it(e,t,!0,!0),e})(),M0=mt.string().length(64).regex(/^[0-9a-f]{64}$/),Zu=mt.string().regex(/^\w+$/),Ez=mt.object({shortcode:Zu,url:mt.string().url(),keywords:mt.optional(mt.array(Zu))}),kz=mt.object({manifest:mt.literal("emojipack_v1"),name:mt.string(),emojis:mt.array(Ez),description:mt.optional(mt.string()),author:mt.optional(M0),publisher:mt.optional(M0)}).refine(t=>xm(t.emojis,n=>n.shortcode).length===t.emojis.length,{message:"shortcodes should be unique"}),Bm=mt.record(Zu,mt.string().url());kz.or(Bm);const Cz=t=>Object.entries(t).map(([e,n])=>({shortcode:e,url:n})),Sz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex gap-2"><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300"></button><button class="rounded border border-rose-300 px-4 py-2 font-bold text-rose-300">'),Tz=B('<div class="py-2"><h3 class="font-bold"></h3><p class="py-1"></p><ul></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="relayUrl"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),Az=B('<div class="py-2"><h3 class="pb-1 font-bold"></h3><button type="button" class="rounded bg-rose-300 p-2 font-bold text-white">'),Ku=B('<li class="flex items-center"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Rz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2 sm:flex-row">'),Iz=B('<div class="flex flex-1 flex-row items-center gap-1 sm:flex-col"><button type="button" class="w-48 rounded border border-rose-300 p-2 font-bold sm:w-full"></button><div class="text-xs">'),Oz=B('<button class="flex h-[24px] w-[48px] items-center rounded-full border border-primary px-1"><span class="m-[-2px] inline-block h-5 w-5 rounded-full border border-primary bg-white shadow">'),Lz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),Pz=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col gap-1 py-2"></ul><form class="flex flex-col gap-2"><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="shortcode" placeholder="smiley" pattern="^\\w+$" required></label><label class="flex flex-1 items-center gap-1"><div class="w-9"></div><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="url" placeholder="https://example.com/smiley.png" required></label><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),Mz=B('<li class="flex items-center gap-2"><img class="min-w-7 h-7 max-w-[128px]"><div class="flex-1 truncate"></div><button class="h-3 w-3 shrink-0">'),Bz=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><form class="flex flex-col gap-2"><textarea class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" name="json" placeholder="{ &quot;smiley&quot;: &quot;https://example.com/smiley.png&quot; }"></textarea><button type="submit" class="w-24 self-end rounded bg-rose-300 p-2 font-bold text-white">'),jz=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col">'),Nz=B('<div class="py-2"><h3 class="font-bold"></h3><ul class="flex flex-col"></ul><form class="flex gap-2"><input class="flex-1 rounded-md focus:border-rose-100 focus:ring-rose-300" type="text" name="keyword"><button type="submit" class="rounded bg-rose-300 p-2 font-bold text-white">'),Dz=B('<div class="py-2"><h3 class="font-bold"></h3><p></p><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1">YouTube</div></div><div class="flex w-full"><div class="flex-1">X (Twitter)</div></div><div class="flex w-full"><div class="flex-1">OGP'),Uz=B('<div class="py-2"><h3 class="font-bold"></h3><div class="flex flex-col justify-evenly gap-2"><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1"></div></div><div class="flex w-full"><div class="flex-1">'),Fz=B('<div class="p-4">'),zz=B('<h2 class="flex-1 text-center text-lg font-bold">'),Hz=B('<ul class="flex flex-col">'),Wz=B('<li class="w-full"><button class="flex w-full gap-2 py-3 hover:text-rose-400"><span class="inline-block h-6 w-6">'),qz=B('<div class="flex flex-col"><button class="inline-block h-6 w-6"></button><div class="w-full flex-1 pt-4">'),jm=t=>`^(?:${t})://[-a-zA-Z0-9.]+(:\\d{1,5})?(?:/[-[\\]~!$&'()*+.,:;@&=%\\w]+|/)*(?:\\?[-[\\]~!$&'()*+.,/:;%@&=\\w?]+)?(?:#[-[\\]~!$&'()*+.,/:;%@\\w&=?#]+)?$`,Zz=jm("https?"),Kz=jm("wss?"),Vz=()=>{const t=dt(),e=Xr(),{showProfile:n,showProfileEdit:i}=Jr();return(()=>{const o=Sz(),a=o.firstChild,l=a.nextSibling,u=l.firstChild,d=u.nextSibling;return k(a,()=>t()("config.profile.profile")),u.$$click=()=>_n([e()])(([f])=>{n(f)}),k(u,()=>t()("config.profile.openProfile")),d.$$click=()=>i(),k(d,()=>t()("config.profile.editProfile")),o})()},Gz=()=>{const t=dt(),{config:e,addRelay:n,removeRelay:i}=et(),[o,a]=Se(""),l=d=>{d.preventDefault(),o().length!==0&&(n(o()),a(""))},u=async()=>{if(window.nostr==null)return;const d=Object.entries(await window.nostr?.getRelays?.()??[]),f=d.map(([b])=>b).join(`
`);if(d.length===0){window.alert(t()("config.relays.notConfigured"));return}if(!window.confirm(`${t()("config.relays.askImport")}

${f}`))return;const p=e().relayUrls.length;Oa(()=>{d.forEach(([b])=>{n(b)})});const v=e().relayUrls.length-p;window.alert(t()("config.relays.imported",{count:v}))};return[(()=>{const d=Tz(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,v=g.nextSibling,b=v.firstChild,w=b.nextSibling;return k(f,()=>t()("config.relays.relays")),k(p,()=>t()("config.relays.numOfRelays",{count:e().relayUrls.length})),k(g,E(Ft,{get each(){return e().relayUrls},children:x=>(()=>{const $=Ku(),S=$.firstChild,M=S.nextSibling;return k(S,x),M.$$click=()=>i(x),k(M,E(us,{})),$})()})),v.addEventListener("submit",l),b.addEventListener("change",x=>a(x.currentTarget.value)),Ue(b,"pattern",Kz),k(w,()=>t()("config.relays.addRelay")),Me(()=>b.value=o()),d})(),(()=>{const d=Az(),f=d.firstChild,p=f.nextSibling;return k(f,()=>t()("config.relays.importRelays")),p.$$click=()=>{u().catch(g=>{console.error("failed to import relays",g),window.alert(t()("config.relays.failedToImport"))})},k(p,()=>t()("config.relays.importFromExtension")),d})()]},Qz=()=>{const t=dt(),{config:e,setConfig:n}=et(),i=[{id:"relative",name:t()("config.display.relativeTimeNotation"),example:t()("config.display.relativeTimeNotationExample")},{id:"absolute-short",name:t()("config.display.absoluteTimeNotationShort"),example:t()("config.display.absoluteTimeNotationShortExample")},{id:"absolute-long",name:t()("config.display.absoluteTimeNotationLong"),example:t()("config.display.absoluteTimeNotationLongExample")}],o=a=>{n(l=>({...l,dateFormat:a}))};return(()=>{const a=Rz(),l=a.firstChild,u=l.nextSibling;return k(l,()=>t()("config.display.timeNotation")),k(u,E(Ft,{each:i,children:({id:d,name:f,example:p})=>(()=>{const g=Iz(),v=g.firstChild,b=v.nextSibling;return v.$$click=()=>o(d),k(v,f),k(b,p),Me(w=>{const x=e().dateFormat===d,$=e().dateFormat===d,S=e().dateFormat!==d,M=e().dateFormat!==d;return x!==w._v$&&v.classList.toggle("bg-rose-300",w._v$=x),$!==w._v$2&&v.classList.toggle("text-white",w._v$2=$),S!==w._v$3&&v.classList.toggle("bg-white",w._v$3=S),M!==w._v$4&&v.classList.toggle("text-rose-300",w._v$4=M),w},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),g})()})),a})()},Kr=t=>(()=>{const e=Oz();return e.$$click=n=>t.onClick(n),Me(n=>{const i=!t.value,o=!t.value,a=!!t.value,l=!!t.value,u=t.value;return i!==n._v$5&&e.classList.toggle("bg-white",n._v$5=i),o!==n._v$6&&e.classList.toggle("justify-start",n._v$6=o),a!==n._v$7&&e.classList.toggle("bg-rose-300",n._v$7=a),l!==n._v$8&&e.classList.toggle("justify-end",n._v$8=l),u!==n._v$9&&Ue(e,"area-label",n._v$9=u),n},{_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0}),e})(),Yz=()=>{const t=dt(),{config:e,setConfig:n}=et(),i=()=>{n(a=>({...a,useEmojiReaction:!(a.useEmojiReaction??!1)}))},o=()=>{n(a=>({...a,showEmojiReaction:!(a.showEmojiReaction??!1)}))};return(()=>{const a=Lz(),l=a.firstChild,u=l.nextSibling,d=u.firstChild,f=d.firstChild,p=d.nextSibling,g=p.firstChild;return k(l,()=>t()("config.display.reaction")),k(f,()=>t()("config.display.enableEmojiReaction")),k(d,E(Kr,{get value(){return e().useEmojiReaction},onClick:()=>i()}),null),k(g,()=>t()("config.display.showEmojiReaction")),k(p,E(Kr,{get value(){return e().showEmojiReaction},onClick:()=>o()}),null),a})()},Jz=()=>{const t=dt(),{config:e,saveEmoji:n,removeEmoji:i}=et(),[o,a]=Se(""),[l,u]=Se(""),d=f=>{f.preventDefault(),!(o().length===0||l().length===0)&&(n({shortcode:o(),url:l()}),a(""),u(""))};return(()=>{const f=Pz(),p=f.firstChild,g=p.nextSibling,v=g.nextSibling,b=v.firstChild,w=b.firstChild,x=w.nextSibling,$=b.nextSibling,S=$.firstChild,M=S.nextSibling,C=$.nextSibling;return k(p,()=>t()("config.customEmoji.customEmoji")),k(g,E(Ft,{get each(){return Object.values(e().customEmojis)},children:({shortcode:I,url:O})=>(()=>{const A=Mz(),D=A.firstChild,j=D.nextSibling,K=j.nextSibling;return Ue(D,"src",O),Ue(D,"alt",I),k(j,I),K.$$click=()=>i(I),k(K,E(us,{})),A})()})),v.addEventListener("submit",d),k(w,()=>t()("config.customEmoji.shortcode")),x.addEventListener("change",I=>a(I.currentTarget.value)),k(S,()=>t()("config.customEmoji.url")),M.addEventListener("change",I=>u(I.currentTarget.value)),Ue(M,"pattern",Zz),k(C,()=>t()("config.customEmoji.addEmoji")),Me(()=>x.value=o()),Me(()=>M.value=l()),f})()},Xz=()=>{const t=dt(),{saveEmojis:e}=et(),[n,i]=Se(""),o=a=>{if(a.preventDefault(),n().length!==0)try{const l=Bm.parse(JSON.parse(n())),u=Cz(l);e(u),i("")}catch(l){const u=l instanceof Error?`:${l.message}`:"";window.alert(`JSONの読み込みに失敗しました${u}`)}};return(()=>{const a=Bz(),l=a.firstChild,u=l.nextSibling,d=u.nextSibling,f=d.firstChild,p=f.nextSibling;return k(l,()=>t()("config.customEmoji.emojiImport")),k(u,()=>t()("config.customEmoji.emojiImportDescription")),d.addEventListener("submit",o),f.addEventListener("change",g=>i(g.currentTarget.value)),k(p,()=>t()("config.customEmoji.importEmoji")),Me(()=>f.value=n()),a})()},eH=()=>{const t=dt(),{config:e,removeMutedPubkey:n,addMutedKeyword:i,removeMutedKeyword:o}=et(),[a,l]=Se(""),u=d=>{d.preventDefault(),a().length!==0&&(i(a()),l(""))};return[(()=>{const d=jz(),f=d.firstChild,p=f.nextSibling;return k(f,()=>t()("config.mute.mutedUsers")),k(p,E(Ft,{get each(){return e().mutedPubkeys},children:g=>(()=>{const v=Ku(),b=v.firstChild,w=b.nextSibling;return k(b,E(Sd,{pubkey:g})),w.$$click=()=>n(g),k(w,E(us,{})),v})()})),d})(),(()=>{const d=Nz(),f=d.firstChild,p=f.nextSibling,g=p.nextSibling,v=g.firstChild,b=v.nextSibling;return k(f,()=>t()("config.mute.mutedKeywords")),k(p,E(Ft,{get each(){return e().mutedKeywords},children:w=>(()=>{const x=Ku(),$=x.firstChild,S=$.nextSibling;return k($,w),S.$$click=()=>o(w),k(S,E(us,{})),x})()})),g.addEventListener("submit",u),v.addEventListener("change",w=>l(w.currentTarget.value)),k(b,()=>t()("config.mute.add")),Me(()=>v.value=a()),d})()]},tH=()=>{const t=dt(),{config:e,setConfig:n}=et(),i=o=>{n(a=>({...a,embedding:{...a.embedding,[o]:!a.embedding[o]}}))};return(()=>{const o=Dz(),a=o.firstChild,l=a.nextSibling,u=l.nextSibling,d=u.firstChild;d.firstChild;const f=d.nextSibling;f.firstChild;const p=f.nextSibling;return p.firstChild,k(a,()=>t()("config.display.embedding")),k(l,()=>t()("config.display.embeddingDescription")),k(d,E(Kr,{get value(){return e().embedding.youtube},onClick:()=>i("youtube")}),null),k(f,E(Kr,{get value(){return e().embedding.twitter},onClick:()=>i("twitter")}),null),k(p,E(Kr,{get value(){return e().embedding.ogp},onClick:()=>i("ogp")}),null),o})()},nH=()=>{const t=dt(),{config:e,setConfig:n}=et(),i=()=>{n(l=>({...l,keepOpenPostForm:!(l.keepOpenPostForm??!1)}))},o=()=>{n(l=>({...l,showMedia:!(l.showMedia??!0)}))},a=()=>{n(l=>({...l,hideCount:!(l.hideCount??!1)}))};return(()=>{const l=Uz(),u=l.firstChild,d=u.nextSibling,f=d.firstChild,p=f.firstChild,g=f.nextSibling,v=g.firstChild,b=g.nextSibling,w=b.firstChild;return k(u,()=>t()("config.display.others")),k(p,()=>t()("config.display.keepOpenPostForm")),k(f,E(Kr,{get value(){return e().keepOpenPostForm},onClick:()=>i()}),null),k(v,()=>t()("config.display.showMediaByDefault")),k(g,E(Kr,{get value(){return e().showMedia},onClick:()=>o()}),null),k(w,()=>t()("config.display.hideNumbers")),k(b,E(Kr,{get value(){return e().hideCount},onClick:()=>a()}),null),l})()},rH=t=>{const e=dt(),[n,i]=Se(null),o=[{name:()=>e()("config.profile.profile"),icon:()=>E(km,{}),render:()=>E(Vz,{})},{name:()=>e()("config.relays.relays"),icon:()=>E($z,{}),render:()=>E(Gz,{})},{name:()=>e()("config.display.display"),icon:()=>E(wz,{}),render:()=>[E(Qz,{}),E(Yz,{}),E(tH,{}),E(nH,{})]},{name:()=>e()("config.customEmoji.customEmoji"),icon:()=>E(Qv,{}),render:()=>[E(Jz,{}),E(Xz,{})]},{name:()=>e()("config.mute.mute"),icon:()=>E(bz,{}),render:()=>E(eH,{})}],a=()=>{const l=n();return l==null?null:o[l]};return E(Oi,{get onClose(){return t.onClose},get children(){const l=Fz();return k(l,E(me,{get when(){return a()},get fallback(){return[(()=>{const u=zz();return k(u,()=>e()("config.config")),u})(),(()=>{const u=Hz();return k(u,E(Ft,{each:o,children:(d,f)=>(()=>{const p=Wz(),g=p.firstChild,v=g.firstChild;return g.$$click=()=>i(f),k(v,()=>d.icon()),k(g,()=>d.name(),null),p})()})),u})()]},keyed:!0,children:u=>(()=>{const d=qz(),f=d.firstChild,p=f.nextSibling;return f.$$click=()=>i(null),k(f,E(U0,{})),k(p,()=>u.render()),d})()})),l}})};vt(["click"]);const iH=B('<form class="flex w-72 items-center gap-1 rounded-md bg-white p-4 shadow-md"><input class="h-8 w-full rounded border border-stone-300 focus:border-rose-100 focus:ring-rose-300" type="text"><button class="h-8 w-8 rounded bg-primary p-1 text-white" type="submit">'),sH=B('<span class="inline-block h-9 w-9 rounded-full border border-primary p-2 text-2xl font-bold text-primary">'),oH=B('<div class="flex shrink-0 flex-row border-r bg-sidebar-bg"><div class="flex w-14 flex-auto flex-col items-center gap-3 border-r border-rose-200 pt-5"><div class="flex flex-col items-center gap-3"><button class="h-9 w-9 rounded-full border border-primary bg-primary p-2 text-2xl text-white"></button></div><div class="grow"></div><div class="flex flex-col items-center pb-2"><button class="h-10 w-12 rounded-full p-3 text-2xl text-primary"></button><button class="h-10 w-12 p-3 text-primary"></button><button class="pt-2"><img class="h-8 w-8" alt="About rabbit"></button></div></div><div>'),aH=()=>{let t,e;const{saveColumn:n}=et(),i=kl(),[o,a]=Se(""),l=u=>{u.preventDefault(),n(wd({query:o()})),i({command:"moveToLastColumn"}).catch(d=>console.error(d)),t?.close(),a("")};return E(Td,{ref:u=>{t=u},position:"right",get button(){return(()=>{const u=sH();return k(u,E(P0,{})),u})()},onOpen:()=>e?.focus(),get children(){const u=iH(),d=u.firstChild,f=d.nextSibling;u.addEventListener("submit",l),d.addEventListener("change",g=>a(g.currentTarget.value));const p=e;return typeof p=="function"?Nn(p,d):e=d,k(f,E(P0,{})),Me(()=>d.value=o()),u}})},gH=()=>{let t;const{showAddColumn:e,showAbout:n}=Jr(),{config:i}=et(),[o,a]=Se(!1),[l,u]=Se(!1),d=()=>{t?.focus(),t?.click(),t?.setSelectionRange(0,0)},f=()=>a(!0),p=()=>a(!1),g=()=>a(v=>!v);return jT(()=>({commandType:"openPostForm",handler:()=>{f(),t!=null&&setTimeout(()=>d(),100)}})),(()=>{const v=oH(),b=v.firstChild,w=b.firstChild,x=w.firstChild,$=w.nextSibling,S=$.nextSibling,M=S.firstChild,C=M.nextSibling,I=C.nextSibling,O=I.firstChild,A=b.nextSibling;return x.$$click=()=>g(),k(x,E(mz,{})),k(w,E(aH,{}),null),M.$$click=()=>e(),k(M,E(vv,{})),C.$$click=()=>u(D=>!D),k(C,E(pz,{})),I.$$click=()=>n(),k(A,E(nm,{textAreaRef:D=>{t=D},onClose:p})),k(v,E(me,{get when(){return l()},get children(){return E(rH,{onClose:()=>u(!1)})}}),null),Me(D=>{const j=Gu("images/rabbit_app_256.png"),K=!!(o()||i().keepOpenPostForm),J=!(o()||i().keepOpenPostForm);return j!==D._v$&&Ue(O,"src",D._v$=j),K!==D._v$2&&A.classList.toggle("static",D._v$2=K),J!==D._v$3&&A.classList.toggle("hidden",D._v$3=J),D},{_v$:void 0,_v$2:void 0,_v$3:void 0}),v})()};vt(["click"]);export{U0 as A,ys as B,r8 as C,tB as D,ao as E,km as F,gv as G,JM as H,Cm as I,dH as J,lt as K,Ti as L,sB as M,qd as N,ol as O,pH as P,Cd as Q,qC as R,gH as S,RR as T,Sd as U,go as V,tr as _,$m as a,_i as b,hH as c,jT as d,sR as e,kl as f,Xk as g,Xr as h,zr as i,Si as j,qr as k,g0 as l,W1 as m,Ur as n,bs as o,ov as p,AC as q,xl as r,bv as s,Ed as t,et as u,SR as v,Jr as w,Ga as x,_n as y,mt as z};
//# sourceMappingURL=SideBar-3b576da4.js.map
